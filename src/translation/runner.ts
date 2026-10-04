import { createHash, randomUUID } from 'node:crypto';
import { dirname, isAbsolute, join, parse, relative, resolve, sep } from 'node:path';
import { lstat, link, mkdir, readFile, readdir, realpath, rename, rm, writeFile } from 'node:fs/promises';
import { build_context, create_context_index, create_translation_prompt, estimate_tokens, type ContextIndex } from './context';
import { extract_prose_segments, restore_prose_segments, validate_prose_segment } from './markup';
import { ProgressDisplay } from './progress';
import { capture_rejected_output, failure_chunk_index, failure_unit_index, FailureRecorder, PipelineFailure, safe_failure_message } from './failure_state';
import { calculate_request_budget } from './request_budget';
import { partition_prose_sections } from './sections';
import { TRANSLATION_GATEWAY_SYSTEM_POLICY } from './style_contract';
import { escape_xml_text } from './xml';
import type { ExtractedPage, ProxySource, RunStats, TranslationGateway, TranslationOptions, TranslationTarget, WorkItem } from './types';

interface SavedTranslationUnit { readonly parts: readonly string[]; }
interface PageCheckpoint {
    readonly version: 1;
    readonly source_hash: string;
    readonly language: string;
    readonly model_key: string;
    readonly section_fingerprint: string;
    readonly completed_units: Record<string, SavedTranslationUnit>;
}
interface ManifestEntry {
    readonly source_hash: string;
    readonly output_hash: string;
    readonly completed_at: string;
    readonly model_key: string;
    readonly checkpoint?: PageCheckpoint;
}
interface TranslationManifest { readonly version: 1; readonly target_language: string; readonly entries: Record<string, ManifestEntry>; }

const MAX_SECTION_ATTEMPTS = 3;
const CHECKPOINT_VERSION = 1;
const MINIMUM_OUTPUT_TOKENS = 512;
const REQUEST_MARGIN_TOKENS = 256;
const PROMPT_POLICY_VERSION = 'translation-xml-section-checkpoint-v1';

/** Process every Markdown page with bounded concurrency and resumable atomic writes. */
export async function run_translation(args: {
    readonly options: TranslationOptions;
    readonly catalog: ProxySource;
    readonly gateway: TranslationGateway;
    readonly abort_signal: AbortSignal;
}): Promise<RunStats> {
    const { options } = args;
    const items = await collect_markdown_items(options.source_root);
    const project_context = await readFile(options.project_context_path, 'utf8');
    const context_index = create_context_index({ pages: items, project_context });
    const canonical_source_root = await realpath(options.source_root);
    await assert_no_symlink_components(options.destination_root);
    const canonical_destination_root = await resolve_existing_path(options.destination_root);
    if (paths_overlap(canonical_source_root, canonical_destination_root)) throw new Error('Translation destination must not overlap the source docs tree.');

    const skipped_items: WorkItem[] = [];
    const ready_items: Array<{ readonly item: WorkItem; readonly extracted: ExtractedPage }> = [];
    const blocked_items: Array<{ readonly item: WorkItem; readonly error: unknown }> = [];
    const preflight_failed_items: Array<{ readonly item: WorkItem; readonly error: unknown }> = [];
    for (const item of items) {
        const output_path = resolve(options.destination_root, item.relative_path);
        try {
            await assert_no_symlink_components(dirname(output_path));
            if (!options.overwrite && await regular_file_exists(output_path)) {
                skipped_items.push(item);
                continue;
            }
            ready_items.push({ item, extracted: extract_prose_segments(item.source_text) });
        } catch (error: unknown) {
            if (error_message(error).includes('Source contains reserved translation marker syntax')) blocked_items.push({ item, error });
            else if (error_message(error).includes('Destination path contains a symbolic link')) preflight_failed_items.push({ item, error });
            else blocked_items.push({ item, error });
        }
    }

    const stats: RunStats = {
        completed: 0, skipped: skipped_items.length, blocked: blocked_items.length,
        failed: preflight_failed_items.length, active: 0, total: items.length
    };
    let target: TranslationTarget | undefined;
    let context_window_tokens: number | undefined;
    if (options.dry_run) {
        target = ready_items.length > 0 ? await args.catalog.resolve_stepfun_target(options.context_window_tokens) : undefined;
        context_window_tokens = target?.context_window_tokens ?? options.context_window_tokens;
        if (ready_items.length > 0 && (context_window_tokens === undefined || !Number.isInteger(context_window_tokens) || context_window_tokens <= 0)) {
            throw new Error('Context window is unknown. Set SMOOTHIEWARE_TRANSLATION_CONTEXT_TOKENS to the verified model context window before running.');
        }
        process.stdout.write(`${JSON.stringify({ type: 'result', mode: 'dry-run', source_root: options.source_root, destination_root: options.destination_root, pages: items.length, ready: ready_items.length, skipped: stats.skipped, blocked: stats.blocked, model: target?.key, max_output_tokens: target?.max_output_tokens, context_window_tokens, context_window_source: target?.context_window_source, context_window_warning: target?.context_window_warning })}\n`);
        return stats;
    }

    if (ready_items.length === 0 && blocked_items.length === 0 && preflight_failed_items.length === 0) return stats;
    await mkdir(options.destination_root, { recursive: true });
    await assert_no_symlink_components(options.destination_root);
    if (await realpath(options.destination_root) !== canonical_destination_root) {
        throw new Error('Translation destination changed while the run was preparing; refusing to write.');
    }
    const failure_path = resolve(options.destination_root, '.translation-failures.json');
    await assert_no_symlink_components(failure_path);
    const failure_recorder = await FailureRecorder.load(failure_path, 'translation', options.target_language);
    for (const blocked of blocked_items) {
        await failure_recorder.record(blocked.item.relative_path, {
            category: 'source-markup', error: blocked.error, source_hash: blocked.item.source_hash,
            unit_index: failure_unit_index(blocked.error)
        });
    }
    for (const failed of preflight_failed_items) {
        await failure_recorder.record(failed.item.relative_path, {
            category: 'other', error: failed.error, source_hash: failed.item.source_hash
        });
    }
    target = ready_items.length > 0 ? await args.catalog.resolve_stepfun_target(options.context_window_tokens) : undefined;
    context_window_tokens = target?.context_window_tokens ?? options.context_window_tokens;
    if (ready_items.length > 0 && (context_window_tokens === undefined || !Number.isInteger(context_window_tokens) || context_window_tokens <= 0)) {
        throw new Error('Context window is unknown. Set SMOOTHIEWARE_TRANSLATION_CONTEXT_TOKENS to the verified model context window before running.');
    }
    const manifest_path = resolve(options.destination_root, '.translation-state.json');
    await assert_no_symlink_components(manifest_path);
    const manifest = await read_manifest(manifest_path, options.target_language);
    for (const item of skipped_items) {
        const entry = manifest.entries[item.relative_path];
        if (entry?.source_hash !== item.source_hash) continue;
        const output_path = resolve(options.destination_root, item.relative_path);
        const output_hash = hash_text(await readFile(output_path, 'utf8'));
        if (entry.output_hash === output_hash) await failure_recorder.resolve(item.relative_path);
    }
    const display = new ProgressDisplay(stats, `Smoothieware docs → ${options.target_language}`, undefined, options.target_language_code);
    try {
    if (target === undefined || context_window_tokens === undefined) {
        display.log('warning', `Preflight complete: ${stats.blocked} source pages blocked; ${stats.failed} page checks failed; ${stats.skipped} existing pages preserved; no valid page needs translation.`);
        await failure_recorder.flush();
        return stats;
    }
    display.log('info', `Preflight accepted ${ready_items.length} of ${items.length} Markdown pages; model ${target.key}; context ${context_window_tokens} tokens (${target.context_window_source ?? 'unreported'}); concurrency ${options.concurrency}.`);
    if (target.context_window_warning !== undefined) display.log('warning', `Live Kilo context metadata unavailable; using the explicit override. ${target.context_window_warning}`);
    let next_index = 0;
    let manifest_write_tail = Promise.resolve();
    const persist_manifest = async (): Promise<void> => {
        manifest_write_tail = manifest_write_tail.then(() => write_json_atomic(manifest_path, manifest));
        await manifest_write_tail;
    };
    const worker_count = Math.min(options.concurrency, ready_items.length);
    const workers = Array.from({ length: worker_count }, async (_unused, worker_index) => {
        while (!args.abort_signal.aborted) {
            const queued_item = ready_items[next_index];
            next_index += 1;
            if (queued_item === undefined) return;
            const { item, extracted } = queued_item;
            stats.active += 1;
            display.set_active(stats.active);
            try {
                const status = await process_page({
                    item, extracted, context_index, target, context_window_tokens, options,
                    canonical_destination_root,
                    catalog: args.catalog, gateway: args.gateway, signal: args.abort_signal,
                    manifest, persist_manifest, display, worker_index, failure_recorder
                });
                if (status === 'completed') {
                    await failure_recorder.resolve(item.relative_path);
                    stats.completed += 1;
                } else stats.skipped += 1;
            } catch (error: unknown) {
                stats.failed += 1;
                display.log('error', `${item.relative_path}: ${safe_failure_message(error)}`);
                const failure = error instanceof PipelineFailure ? error : undefined;
                await failure_recorder.record(item.relative_path, {
                    category: failure?.category ?? 'other', error,
                    source_hash: item.source_hash,
                    attempt_count: failure?.attempt_count ?? 0,
                    chunk_index: failure?.chunk_index ?? failure_chunk_index(error),
                    unit_index: failure?.unit_index ?? failure_unit_index(error)
                });
            } finally {
                stats.active -= 1;
                display.set_active(stats.active);
            }
        }
    });
    const worker_results = await Promise.allSettled(workers);
    const worker_failure = worker_results.find((result) => result.status === 'rejected');
    if (worker_failure?.status === 'rejected') {
        display.log('error', `A page worker stopped after a failure-ledger write error: ${safe_failure_message(worker_failure.reason)}`);
    }
    const pending_after_cancel = args.abort_signal.aborted ? Math.max(0, ready_items.length - next_index) : 0;
    if (pending_after_cancel > 0) {
        stats.failed += pending_after_cancel;
        display.log('warning', `Cancelled before starting ${pending_after_cancel} remaining pages.`);
    }
    await manifest_write_tail;
    await failure_recorder.flush();
    if (worker_failure?.status === 'rejected') throw new Error('One or more page failures could not be persisted to the failure ledger.');
    display.log(stats.failed === 0 && stats.blocked === 0 ? 'success' : 'warning', `Finished: ${stats.completed} translated, ${stats.skipped} skipped, ${stats.blocked} blocked, ${stats.failed} failed.`);
    return stats;
    } finally {
        display.close();
    }
}

/** Translate one source page and atomically install its complete reconstructed output. */
async function process_page(args: {
    readonly item: WorkItem; readonly extracted: ExtractedPage; readonly context_index: ContextIndex;
    readonly target: TranslationTarget; readonly context_window_tokens: number; readonly options: TranslationOptions;
    readonly canonical_destination_root: string;
    readonly catalog: ProxySource; readonly gateway: TranslationGateway; readonly signal: AbortSignal;
    readonly manifest: TranslationManifest; readonly persist_manifest: () => Promise<void>;
    readonly display: ProgressDisplay; readonly worker_index: number; readonly failure_recorder: FailureRecorder;
}): Promise<'completed' | 'skipped'> {
    const output_path = resolve(args.options.destination_root, args.item.relative_path);
    await assert_no_symlink_components(dirname(output_path));
    const existing_output = await regular_file_exists(output_path);
    const old_entry = args.manifest.entries[args.item.relative_path];
    if (existing_output && !args.options.overwrite) {
        const actual_hash = hash_text(await readFile(output_path, 'utf8'));
        if (old_entry?.source_hash === args.item.source_hash && old_entry.output_hash === actual_hash) {
            args.display.log('info', `Already complete: ${args.item.relative_path}`);
            return 'skipped';
        }
        args.display.log('warning', `Preserving existing output without a matching manifest entry: ${args.item.relative_path}; skipped. Use --overwrite only to replace it.`);
        return 'skipped';
    }
    const { extracted } = args;
    if (extracted.segments.length === 0) {
        try {
            await write_translation(args, output_path, extracted.protected_source);
        } catch (error: unknown) {
            throw new PipelineFailure('persistence', safe_failure_message(error));
        }
        return 'completed';
    }
    const sections = partition_prose_sections(extracted);
    const section_fingerprint = hash_text(JSON.stringify({ version: PROMPT_POLICY_VERSION, language: args.options.target_language, model: args.target.key, sections }));
    const previous_checkpoint = args.manifest.entries[args.item.relative_path]?.checkpoint;
    const completed_units: Record<string, SavedTranslationUnit> = is_matching_checkpoint(previous_checkpoint, {
        source_hash: args.item.source_hash, language: args.options.target_language,
        model_key: args.target.key, section_fingerprint
    }) ? { ...previous_checkpoint.completed_units } : {};
    const translations: Array<string | undefined> = Array.from({ length: extracted.segments.length });
    let provider_attempt_count = 0;
    const checkpoint = (): PageCheckpoint => ({
        version: CHECKPOINT_VERSION, source_hash: args.item.source_hash,
        language: args.options.target_language, model_key: args.target.key,
        section_fingerprint, completed_units: { ...completed_units }
    });
    const save_unit = async (unit_index: number, translated: string): Promise<void> => {
        validate_prose_segment(extracted, unit_index, translated);
        translations[unit_index] = translated;
        completed_units[String(unit_index)] = serialize_translation_unit(extracted, unit_index, translated);
        args.manifest.entries[args.item.relative_path] = {
            source_hash: args.item.source_hash, output_hash: '', completed_at: '',
            model_key: args.target.key, checkpoint: checkpoint()
        };
        try {
            await args.persist_manifest();
        } catch (error: unknown) {
            throw new PipelineFailure('persistence', safe_failure_message(error), provider_attempt_count);
        }
    };
    for (const [section_index, section] of sections.entries()) {
        if (args.signal.aborted) throw new Error('Translation cancelled before page completion.');
        for (let unit_index = section.start_index; unit_index < section.end_index; unit_index += 1) {
            const saved = completed_units[String(unit_index)];
            if (saved === undefined) continue;
            try {
                const restored = restore_translation_unit(extracted, unit_index, saved);
                validate_prose_segment(extracted, unit_index, restored);
                translations[unit_index] = restored;
            } catch {
                delete completed_units[String(unit_index)];
            }
        }
        const unresolved_indexes = Array.from({ length: section.end_index - section.start_index }, (_unused, index) => section.start_index + index)
            .filter((unit_index) => translations[unit_index] === undefined);
        if (unresolved_indexes.length === 0) {
            args.display.section_skip({
                file_path: args.item.relative_path, section_index: section_index + 1,
                section_count: sections.length, section_label: section.label,
                reason: 'valid translation checkpoint reused'
            });
            continue;
        }
        const active_segments = unresolved_indexes.map((unit_index) => extracted.segments[unit_index] ?? '');
        const request_context_limit = Math.floor(Math.floor(args.context_window_tokens * 0.9) * 0.7);
        const full_page_context_tokens = estimate_tokens(escape_xml_text(args.item.source_text));
        if (full_page_context_tokens > request_context_limit) {
            throw new PipelineFailure('prompt-budget', `Full source page requires ${full_page_context_tokens} estimated tokens; the 70 percent context cap is ${request_context_limit}.`, 0, { chunk_index: section_index + 1 });
        }
        const base_prompt = create_translation_prompt({
            relative_path: args.item.relative_path, language: args.options.target_language,
            context: '', segments: active_segments, full_page_context: args.item.source_text,
            section_index: section_index + 1, section_count: sections.length, section_label: section.label
        });
        const page_and_prompt_tokens = estimate_tokens(`${TRANSLATION_GATEWAY_SYSTEM_POLICY}\n\n${base_prompt.system_prompt}`) + estimate_tokens(base_prompt.user_prompt);
        const related_context_budget = Math.max(0, request_context_limit - full_page_context_tokens);
        const context = build_context({
            item: args.item, index: args.context_index,
            context_window_tokens: related_context_budget,
            target_segments: active_segments
        });
        const prompt = create_translation_prompt({
            relative_path: args.item.relative_path, language: args.options.target_language,
            context: context.context, segments: active_segments, full_page_context: args.item.source_text,
            section_index: section_index + 1, section_count: sections.length, section_label: section.label
        });
        const estimated_context_tokens = full_page_context_tokens + estimate_tokens(escape_xml_text(context.context));
        const estimated_input_tokens = estimate_tokens(`${TRANSLATION_GATEWAY_SYSTEM_POLICY}\n\n${prompt.system_prompt}`) + estimate_tokens(prompt.user_prompt);
        const minimum_output_tokens = Math.max(MINIMUM_OUTPUT_TOKENS, estimate_tokens(JSON.stringify(active_segments)) * 2 + 128);
        let request_budget: ReturnType<typeof calculate_request_budget>;
        try {
            request_budget = calculate_request_budget({
                context_window_tokens: args.context_window_tokens, model_output_ceiling_tokens: args.target.max_output_tokens,
                estimated_context_tokens, estimated_input_tokens, minimum_output_tokens,
                request_margin_tokens: REQUEST_MARGIN_TOKENS
            });
        } catch (error: unknown) {
            throw new PipelineFailure('prompt-budget', safe_failure_message(error), 0, { chunk_index: section_index + 1 });
        }
        if (page_and_prompt_tokens > estimated_input_tokens) throw new Error('Prompt budget estimate underflowed its active-section request.');
        const active_section_tokens = estimate_tokens(JSON.stringify(active_segments));
        const related_files_tokens = estimate_tokens(escape_xml_text(context.context));
        const instruction_tokens = Math.max(0, estimated_input_tokens - full_page_context_tokens - active_section_tokens - related_files_tokens);
        const section_id = `${args.item.relative_path}#${section_index + 1}`;
        const section_started_at = Date.now();
        const attempts_before_section = provider_attempt_count;
        args.display.section_start({
            section_id, file_path: args.item.relative_path,
            section_index: section_index + 1, section_count: sections.length,
            section_label: section.label, worker_index: args.worker_index,
            related_file_count: context.used_paths.length, unit_count: unresolved_indexes.length,
            context: {
                instruction_tokens,
                source_file_tokens: full_page_context_tokens,
                active_section_tokens,
                related_files_tokens,
                output_reservation_tokens: request_budget.maximum_output_tokens,
                free_capacity_tokens: Math.max(0, args.context_window_tokens - estimated_input_tokens - request_budget.maximum_output_tokens),
                total_tokens: args.context_window_tokens
            }
        });
        try {
        let translated_section_segments: readonly string[] | undefined;
        let section_error: unknown;
        let section_recovered_previous_attempt = false;
        for (let attempt = 1; attempt <= MAX_SECTION_ATTEMPTS; attempt += 1) {
            if (args.signal.aborted) throw new Error('Translation cancelled before page completion.');
            try {
                provider_attempt_count += 1;
                const proxy_urls = await args.catalog.sample_paid_proxy_urls(10);
                const response = await args.gateway.translate_segments({
                    target: args.target, proxy_urls, system_prompt: prompt.system_prompt,
                    user_prompt: prompt.user_prompt, maximum_output_tokens: request_budget.maximum_output_tokens,
                    signal: args.signal
                });
                if (response.translated_segments.length !== unresolved_indexes.length) {
                    throw new PipelineFailure('response-validation', `Gateway returned ${response.translated_segments.length}/${unresolved_indexes.length} units for section ${section_index + 1}.`, provider_attempt_count, { chunk_index: section_index + 1 });
                }
                translated_section_segments = response.translated_segments;
                break;
            } catch (error: unknown) {
                section_error = error;
                const failure_category = error instanceof PipelineFailure ? error.category : 'gateway';
                await args.failure_recorder.record(args.item.relative_path, {
                    category: failure_category, error, source_hash: args.item.source_hash,
                    attempt_count: attempt, chunk_index: section_index + 1,
                    unit_index: failure_unit_index(error)
                });
                if (args.signal.aborted || attempt === MAX_SECTION_ATTEMPTS) break;
                section_recovered_previous_attempt = true;
                args.display.log('warning', `${args.item.relative_path} section ${section_index + 1}/${sections.length} attempt ${attempt}/${MAX_SECTION_ATTEMPTS} failed: ${safe_failure_message(error)}; retrying this section.`);
            }
        }
        if (translated_section_segments === undefined) {
            const failure = section_error instanceof PipelineFailure ? section_error : undefined;
            throw new PipelineFailure(failure?.category ?? 'gateway', `Section ${section_index + 1}/${sections.length} failed after ${MAX_SECTION_ATTEMPTS} request attempts: ${error_message(section_error)}`, provider_attempt_count, { chunk_index: section_index + 1, unit_index: failure_unit_index(section_error) });
        }
        if (section_recovered_previous_attempt) await args.failure_recorder.resolve(args.item.relative_path, true);
        const rejected_capture: Array<{ readonly translated_segment: string; readonly validation_error: string }> = [];
        for (const [response_index, translated] of translated_section_segments.entries()) {
            const unit_index = unresolved_indexes[response_index];
            if (unit_index === undefined) continue;
            try {
                validate_prose_segment(extracted, unit_index, translated);
            } catch (error: unknown) {
                rejected_capture.push({ translated_segment: translated, validation_error: safe_failure_message(error) });
                const repair_feedback = safe_failure_message(error);
                await args.failure_recorder.record(args.item.relative_path, {
                    category: 'response-validation', error, source_hash: args.item.source_hash,
                    attempt_count: 1, chunk_index: section_index + 1, unit_index: unit_index + 1
                });
                const repair_prompt = create_translation_prompt({
                    relative_path: args.item.relative_path, language: args.options.target_language,
                    context: context.context, segments: [extracted.segments[unit_index] ?? ''],
                    full_page_context: args.item.source_text, section_index: section_index + 1,
                    section_count: sections.length, section_label: section.label,
                    repair_feedback: `${repair_feedback}. Preserve every marker in its original order; return exactly one unit and no commentary.`
                });
                const repair_input_tokens = estimate_tokens(`${TRANSLATION_GATEWAY_SYSTEM_POLICY}\n\n${repair_prompt.system_prompt}`) + estimate_tokens(repair_prompt.user_prompt);
                let repair_budget: ReturnType<typeof calculate_request_budget>;
                try {
                    repair_budget = calculate_request_budget({
                        context_window_tokens: args.context_window_tokens, model_output_ceiling_tokens: args.target.max_output_tokens,
                        estimated_context_tokens, estimated_input_tokens: repair_input_tokens,
                        minimum_output_tokens: Math.max(MINIMUM_OUTPUT_TOKENS, estimate_tokens(JSON.stringify(extracted.segments[unit_index] ?? '')) * 2 + 128),
                        request_margin_tokens: REQUEST_MARGIN_TOKENS
                    });
                } catch (budget_error: unknown) {
                    throw new PipelineFailure('prompt-budget', safe_failure_message(budget_error), provider_attempt_count, { chunk_index: section_index + 1, unit_index: unit_index + 1 });
                }
                let translated_unit: string | undefined;
                let last_unit_error: unknown = error;
                let recovered_unit = false;
                for (let attempt = 2; attempt <= MAX_SECTION_ATTEMPTS; attempt += 1) {
                    if (args.signal.aborted) throw new Error('Translation cancelled before page completion.');
                    let candidate: string | undefined;
                    try {
                        provider_attempt_count += 1;
                        const proxy_urls = await args.catalog.sample_paid_proxy_urls(10);
                        const response = await args.gateway.translate_segments({
                            target: args.target, proxy_urls, system_prompt: repair_prompt.system_prompt,
                            user_prompt: repair_prompt.user_prompt, maximum_output_tokens: repair_budget.maximum_output_tokens,
                            signal: args.signal
                        });
                        if (response.translated_segments.length !== 1) throw new PipelineFailure('response-validation', `Gateway returned ${response.translated_segments.length}/1 unit for repair.`, provider_attempt_count, { chunk_index: section_index + 1, unit_index: unit_index + 1 });
                        candidate = response.translated_segments[0];
                        if (candidate === undefined) throw new PipelineFailure('response-validation', 'Gateway omitted the repaired unit.', provider_attempt_count, { chunk_index: section_index + 1, unit_index: unit_index + 1 });
                        try {
                            validate_prose_segment(extracted, unit_index, candidate);
                        } catch (validation_error: unknown) {
                            throw new PipelineFailure('response-validation', safe_failure_message(validation_error), provider_attempt_count, { chunk_index: section_index + 1, unit_index: unit_index + 1 });
                        }
                    } catch (retry_error: unknown) {
                        last_unit_error = retry_error;
                        await args.failure_recorder.record(args.item.relative_path, {
                            category: retry_error instanceof PipelineFailure ? retry_error.category : 'gateway',
                            error: retry_error, source_hash: args.item.source_hash, attempt_count: attempt,
                            chunk_index: section_index + 1, unit_index: unit_index + 1
                        });
                        if (args.signal.aborted || attempt === MAX_SECTION_ATTEMPTS ||
                            (retry_error instanceof PipelineFailure && retry_error.category === 'prompt-budget')) break;
                        continue;
                    }
                    if (candidate === undefined) throw new Error('Validated translation unit was missing after provider response.');
                    await save_unit(unit_index, candidate);
                    translated_unit = candidate;
                    recovered_unit = true;
                    break;
                }
                if (translated_unit === undefined) {
                    throw new PipelineFailure(last_unit_error instanceof PipelineFailure ? last_unit_error.category : 'response-validation',
                        `Section ${section_index + 1} unit ${unit_index + 1} failed after ${MAX_SECTION_ATTEMPTS} total attempts: ${safe_failure_message(last_unit_error)}`,
                        provider_attempt_count, { chunk_index: section_index + 1, unit_index: unit_index + 1 });
                }
                if (recovered_unit) await args.failure_recorder.resolve(args.item.relative_path, true);
                continue;
            }
            await save_unit(unit_index, translated);
        }
        if (rejected_capture.length > 0) {
            try {
                const capture_path = await capture_rejected_output({
                    relative_path: args.item.relative_path, chunk_index: section_index + 1,
                    translated_segments: rejected_capture.map((capture) => capture.translated_segment),
                    validation_error: rejected_capture.map((capture) => capture.validation_error).join(' | ')
                });
                if (capture_path !== undefined) args.display.log('info', `Original section response captured for investigation at ${capture_path}.`);
            } catch (capture_error: unknown) {
                args.display.log('warning', `Temporary rejected-response capture failed: ${safe_failure_message(capture_error)}`);
            }
        }
        } catch (error: unknown) {
            args.display.section_complete({
                section_id, duration_ms: Date.now() - section_started_at,
                units_completed: unresolved_indexes.filter((unit_index) => translations[unit_index] !== undefined).length,
                attempts: provider_attempt_count - attempts_before_section,
                result: args.signal.aborted ? 'blocked' : 'failed',
                message: safe_failure_message(error)
            });
            throw error;
        }
        args.display.section_complete({
            section_id, duration_ms: Date.now() - section_started_at,
            units_completed: unresolved_indexes.filter((unit_index) => translations[unit_index] !== undefined).length,
            attempts: provider_attempt_count - attempts_before_section, result: 'success'
        });
    }
    if (translations.some((translation) => translation === undefined)) throw new PipelineFailure('response-validation', 'Translation checkpoints do not cover every source unit.', provider_attempt_count);
    let translated_text: string;
    try {
        translated_text = restore_prose_segments(extracted, translations as string[]);
    } catch (error: unknown) {
        throw new PipelineFailure('response-validation', error_message(error), provider_attempt_count);
    }
    try {
        await write_translation(args, output_path, translated_text);
    } catch (error: unknown) {
        throw new PipelineFailure('persistence', safe_failure_message(error), provider_attempt_count);
    }
    return 'completed';
}

/** Check that a saved page checkpoint belongs to the exact source, language, model, and section plan. */
function is_matching_checkpoint(checkpoint: unknown, expected: {
    readonly source_hash: string;
    readonly language: string;
    readonly model_key: string;
    readonly section_fingerprint: string;
}): checkpoint is PageCheckpoint {
    if (typeof checkpoint !== 'object' || checkpoint === null) return false;
    const candidate = checkpoint as Partial<PageCheckpoint>;
    if (candidate.version !== CHECKPOINT_VERSION || candidate.source_hash !== expected.source_hash ||
        candidate.language !== expected.language || candidate.model_key !== expected.model_key ||
        candidate.section_fingerprint !== expected.section_fingerprint ||
        typeof candidate.completed_units !== 'object' || candidate.completed_units === null || Array.isArray(candidate.completed_units)) return false;
    return Object.values(candidate.completed_units).every((saved) =>
        typeof saved === 'object' && saved !== null && Array.isArray(saved.parts) && saved.parts.every((part) => typeof part === 'string')
    );
}

/** Store prose fragments around markers so random extraction IDs can change across resumed runs. */
function serialize_translation_unit(extracted: ExtractedPage, unit_index: number, translated: string): SavedTranslationUnit {
    const tokens = extracted.protected_tokens_by_segment[unit_index];
    if (tokens === undefined) throw new Error(`Translation unit ${unit_index + 1} has no protected marker metadata.`);
    const parts: string[] = [];
    let cursor = 0;
    for (const token of tokens) {
        const marker_index = translated.indexOf(token.marker, cursor);
        if (marker_index < cursor) throw new Error(`Translation unit ${unit_index + 1} omitted a marker while checkpointing.`);
        parts.push(translated.slice(cursor, marker_index));
        cursor = marker_index + token.marker.length;
    }
    parts.push(translated.slice(cursor));
    return { parts };
}

/** Reinsert this run's marker IDs into a checkpoint only when its marker-fragment shape still matches. */
function restore_translation_unit(extracted: ExtractedPage, unit_index: number, saved: SavedTranslationUnit): string {
    const tokens = extracted.protected_tokens_by_segment[unit_index];
    if (tokens === undefined || saved.parts.length !== tokens.length + 1 || saved.parts.some((part) => typeof part !== 'string')) {
        throw new Error(`Translation unit ${unit_index + 1} has an incompatible checkpoint.`);
    }
    let restored = saved.parts[0] ?? '';
    for (const [token_index, token] of tokens.entries()) {
        restored += token.marker + (saved.parts[token_index + 1] ?? '');
    }
    return restored;
}

/** Write a complete page and its source/output hashes through atomic temporary files. */
async function write_translation(args: Parameters<typeof process_page>[0], output_path: string, translated_text: string): Promise<void> {
    await mkdir(dirname(output_path), { recursive: true });
    await assert_no_symlink_components(dirname(output_path));
    if (await realpath(args.options.destination_root) !== args.canonical_destination_root) {
        throw new Error('Translation destination changed while writing; refusing to install output.');
    }
    const temp_path = `${output_path}.${randomUUID()}.tmp`;
    await writeFile(temp_path, translated_text, { encoding: 'utf8', flag: 'wx' });
    if (args.options.overwrite) {
        await rename(temp_path, output_path);
    } else {
        try {
            await link(temp_path, output_path);
            await rm(temp_path);
        } catch (error: unknown) {
            await rm(temp_path, { force: true });
            throw new Error(`Could not install output without overwriting a concurrent file: ${error_message(error)}`);
        }
    }
    args.manifest.entries[args.item.relative_path] = {
        source_hash: args.item.source_hash, output_hash: hash_text(translated_text),
        completed_at: new Date().toISOString(), model_key: args.target.key
    };
    await args.persist_manifest();
    args.display.log('success', `Wrote ${args.item.relative_path}`);
}

/** Recursively inventory .md pages while preserving their path under docs/. */
export async function collect_markdown_items(source_root: string): Promise<WorkItem[]> {
    const items: WorkItem[] = [];
    const visit = async (directory: string): Promise<void> => {
        for (const child of await readdir(directory, { withFileTypes: true })) {
            const child_path = resolve(directory, child.name);
            if (child.isDirectory()) { await visit(child_path); continue; }
            if (!child.isFile() || !child.name.toLocaleLowerCase('en').endsWith('.md')) continue;
            const source_text = await readFile(child_path, 'utf8');
            items.push({ relative_path: relative(source_root, child_path).split(sep).join('/'), source_path: child_path, source_text, source_hash: hash_text(source_text) });
        }
    };
    await visit(resolve(source_root));
    return items.sort((left, right) => left.relative_path.localeCompare(right.relative_path));
}

/** Load a matching manifest, otherwise refuse corrupted state instead of guessing. */
async function read_manifest(path: string, target_language: string): Promise<TranslationManifest> {
    try {
        const decoded: unknown = JSON.parse(await readFile(path, 'utf8'));
        if (typeof decoded === 'object' && decoded !== null) {
            const candidate = decoded as Partial<TranslationManifest>;
            if (candidate.version === 1 && candidate.target_language === target_language && typeof candidate.entries === 'object' && candidate.entries !== null) return candidate as TranslationManifest;
        }
        throw new Error('Manifest shape or language differs from this run.');
    } catch (error: unknown) {
        if (await regular_file_exists(path)) throw new Error(`Could not use translation manifest: ${error_message(error)}`);
        return { version: 1, target_language, entries: {} };
    }
}

/** Save a JSON state file using an exclusive temp path and atomic rename. */
export async function write_json_atomic(path: string, value: unknown): Promise<void> {
    const temp_path = `${path}.${randomUUID()}.tmp`;
    await writeFile(temp_path, `${JSON.stringify(value, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
    await rename(temp_path, path);
}

/** Return whether a target is a regular file, rejecting symlinks and other existing file types. */
export async function regular_file_exists(path: string): Promise<boolean> {
    try {
        const metadata = await lstat(path);
        if (metadata.isSymbolicLink()) throw new Error('Output path is a symbolic link; refusing to follow it.');
        if (!metadata.isFile()) throw new Error('Output path exists but is not a regular file.');
        return true;
    } catch (error: unknown) {
        if (is_missing_path(error)) return false;
        throw error;
    }
}

/** Calculate stable hashes for safe resume and corruption detection. */
export function hash_text(text: string): string { return createHash('sha256').update(text).digest('hex'); }

/** Reject either path nesting direction so a custom output cannot overwrite source pages. */
export function paths_overlap(source_root: string, destination_root: string): boolean {
    return is_path_within(source_root, destination_root) || is_path_within(destination_root, source_root);
}

/** Compare normalized absolute paths without treating sibling prefixes as nested paths. */
function is_path_within(parent: string, child: string): boolean {
    const relative_path = relative(parent, child);
    return relative_path === '' || (!relative_path.startsWith(`..${sep}`) && relative_path !== '..' && !isAbsolute(relative_path));
}

/** Resolve a possibly not-yet-created destination using its nearest existing ancestor. */
export async function resolve_existing_path(path: string): Promise<string> {
    let current_path = resolve(path);
    const missing_suffix: string[] = [];
    while (true) {
        try {
            const canonical_existing_path = await realpath(current_path);
            return resolve(canonical_existing_path, ...missing_suffix.reverse());
        } catch (error: unknown) {
            if (!is_missing_path(error)) throw error;
            const parent_path = dirname(current_path);
            if (parent_path === current_path) throw error;
            missing_suffix.push(current_path.slice(parent_path.length + (parent_path.endsWith(sep) ? 0 : 1)));
            current_path = parent_path;
        }
    }
}

/** Reject every existing symlink component before any destination read or write. */
export async function assert_no_symlink_components(path: string): Promise<void> {
    const absolute_path = resolve(path);
    const root_path = parse(absolute_path).root;
    let current_path = root_path;
    for (const path_part of relative(root_path, absolute_path).split(sep).filter(Boolean)) {
        current_path = join(current_path, path_part);
        try {
            if ((await lstat(current_path)).isSymbolicLink()) {
                throw new Error(`Destination path contains a symbolic link at ${current_path}; refusing to write.`);
            }
        } catch (error: unknown) {
            if (is_missing_path(error)) return;
            throw error;
        }
    }
}

/** Recognize only missing-path filesystem errors so other failures remain visible. */
export function is_missing_path(error: unknown): boolean {
    return typeof error === 'object' && error !== null && 'code' in error && (error as { code?: unknown }).code === 'ENOENT';
}

/** Bound exception text and redact any route URL before it reaches the UI. */
export function error_message(error: unknown): string {
    const message = error instanceof Error ? error.message : 'unknown error';
    return message.replace(/(?:https?|socks5?):\/\/[^\s]+/giu, '[route redacted]').slice(0, 500);
}
