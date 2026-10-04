import { randomUUID } from 'node:crypto';
import { link, lstat, mkdir, readFile, realpath, rename, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build_context, create_context_index, type ContextIndex } from './context';
import { create_criticism_prompt, CRITICISM_GATEWAY_SYSTEM_POLICY } from './criticism_prompt';
import { collect_style_sources, fingerprint_style_samples, select_style_samples, type StyleSample, type StyleSource } from './criticism_style';
import { extract_prose_segments, restore_prose_segments, validate_prose_segment } from './markup';
import { MAX_PAGE_SECTIONS, partition_prose_sections } from './sections';
import { calculate_request_budget } from './request_budget';
import { escape_xml_text, xml_element } from './xml';
import { capture_rejected_output, failure_chunk_index, failure_unit_index, FailureRecorder, PipelineFailure, safe_failure_message, type FailureCategory } from './failure_state';
import { ProgressDisplay } from './progress';
import { assert_no_symlink_components, collect_markdown_items, error_message, hash_text, paths_overlap, regular_file_exists, resolve_existing_path, write_json_atomic } from './runner';
import type { ExtractedPage, ProtectedMarkupToken, ProxySource, RunStats, TranslationGateway, TranslationTarget, WorkItem } from './types';

const REVIEW_PROMPT_VERSION = 3;
const MAXIMUM_GATEWAY_ATTEMPTS = 3;
const MAXIMUM_INVALID_UNIT_RETRIES = 2;
const PROJECT_SUMMARY_CHARACTERS = 1_200;
const PROMPT_HEADROOM_TOKENS = 256;
const MARKER_PATTERN = /⟪SWEEP_[A-Fa-f0-9-]+_\d+⟫/gu;
const REVIEW_MARKER_PATTERN = /\[\[SW_MARK_(\d+)\]\]/gu;

export interface CriticismOptions {
    readonly source_root: string;
    readonly destination_root: string;
    readonly project_context_path: string;
    readonly style_root: string;
    readonly target_language: string;
    readonly target_language_code?: string;
    readonly concurrency: number;
    readonly context_window_tokens?: number;
    readonly dry_run: boolean;
    readonly force: boolean;
    readonly style_sample_count: number;
    readonly style_seed?: string;
}

interface ReviewEntry {
    readonly source_hash: string;
    readonly input_hash: string;
    readonly output_hash: string;
    readonly style_fingerprint: string;
    readonly prompt_version: number;
    readonly model_key: string;
    readonly completed_at: string;
}

interface ReviewManifest {
    readonly version: 1;
    readonly target_language: string;
    readonly style_seed: string;
    readonly entries: Record<string, ReviewEntry>;
}

interface PageArguments {
    readonly item: WorkItem;
    readonly options: CriticismOptions;
    readonly canonical_destination_root: string;
    readonly context_index: ContextIndex;
    readonly project_summary: string;
    readonly style_sources: readonly StyleSource[];
    readonly target: TranslationTarget;
    readonly context_window_tokens: number;
    readonly catalog: ProxySource;
    readonly gateway: TranslationGateway;
    readonly signal: AbortSignal;
    readonly manifest: ReviewManifest;
    readonly persist_manifest: () => Promise<void>;
    readonly failure_recorder: FailureRecorder;
    readonly display: ProgressDisplay;
    readonly worker_index: number;
}

/** Review existing translations in the translator's sorted page order with bounded workers. */
export async function run_criticism(args: {
    readonly options: CriticismOptions;
    readonly catalog: ProxySource;
    readonly gateway: TranslationGateway;
    readonly abort_signal: AbortSignal;
    readonly style_sources?: readonly StyleSource[];
}): Promise<RunStats> {
    const { options } = args;
    if (!Number.isInteger(options.concurrency) || options.concurrency < 1 || options.concurrency > 12) throw new Error('Review concurrency must be between 1 and 12.');
    if (!Number.isInteger(options.style_sample_count) || options.style_sample_count < 1 || options.style_sample_count > 20) throw new Error('Style sample count must be between 1 and 20.');
    const source_items = await collect_markdown_items(options.source_root);
    const items: WorkItem[] = [];
    const blocked_items: Array<{ readonly item: WorkItem; readonly error: unknown; readonly category: FailureCategory; readonly input_hash?: string }> = [];
    for (const item of source_items) {
        const output_path = resolve(options.destination_root, item.relative_path);
        await assert_no_symlink_components(output_path);
        if (!await regular_file_exists(output_path)) continue;
        try {
            const current_text = await readFile(output_path, 'utf8');
            const english = extract_prose_segments(item.source_text);
            const translated = extract_prose_segments(current_text);
            if (!are_units_aligned(english, item.source_text, translated, current_text)) {
                blocked_items.push({
                    item, category: 'alignment', input_hash: hash_text(current_text),
                    error: new Error('English and translated prose units cannot be safely aligned; review requires manual alignment.')
                });
                continue;
            }
            items.push(item);
        } catch (error: unknown) {
            blocked_items.push({ item, error, category: 'source-markup' });
        }
    }
    const project_summary = (await readFile(options.project_context_path, 'utf8')).slice(0, PROJECT_SUMMARY_CHARACTERS);
    const style_sources = args.style_sources ?? await collect_style_sources(options.style_root);
    if (style_sources.length === 0) throw new Error('Review requires at least one prompts.md style source.');
    const canonical_source_root = await realpath(options.source_root);
    await assert_no_symlink_components(options.destination_root);
    const canonical_destination_root = await resolve_existing_path(options.destination_root);
    if (paths_overlap(canonical_source_root, canonical_destination_root)) throw new Error('Review destination must not overlap the English source tree.');
    const stats: RunStats = { completed: 0, skipped: 0, blocked: blocked_items.length, failed: 0, active: 0, total: items.length + blocked_items.length };
    let target: TranslationTarget | undefined;
    let context_window_tokens: number | undefined;
    if (options.dry_run) {
        target = items.length > 0 ? await args.catalog.resolve_stepfun_target(options.context_window_tokens) : undefined;
        context_window_tokens = target?.context_window_tokens ?? options.context_window_tokens;
        if (target !== undefined && (context_window_tokens === undefined || !Number.isSafeInteger(context_window_tokens) || context_window_tokens <= 0)) {
            throw new Error('The verified model context window must be a positive safe integer.');
        }
        process.stdout.write(`${JSON.stringify({ type: 'result', mode: 'dry-run', source_root: options.source_root, destination_root: options.destination_root, source_pages: source_items.length, translated_pages: items.length, blocked: stats.blocked, style_sources: style_sources.length, style_samples_per_page: Math.min(options.style_sample_count, style_sources.length), model: target?.key, max_output_tokens: target?.max_output_tokens, context_window_tokens })}\n`);
        return stats;
    }
    if (items.length === 0 && blocked_items.length === 0) {
        process.stdout.write(`${JSON.stringify({ type: 'result', mode: 'no-translations', destination_root: options.destination_root, translated_pages: 0 })}\n`);
        return stats;
    }
    await mkdir(options.destination_root, { recursive: true });
    const failure_path = resolve(options.destination_root, '.criticism-failures.json');
    await assert_no_symlink_components(failure_path);
    const failure_recorder = await FailureRecorder.load(failure_path, 'review', options.target_language);
    for (const blocked of blocked_items) {
        await failure_recorder.record(blocked.item.relative_path, {
            category: blocked.category, error: blocked.error, source_hash: blocked.item.source_hash,
            ...(blocked.input_hash === undefined ? {} : { input_hash: blocked.input_hash }),
            unit_index: failure_unit_index(blocked.error)
        });
    }
    target = items.length > 0 ? await args.catalog.resolve_stepfun_target(options.context_window_tokens) : undefined;
    context_window_tokens = target?.context_window_tokens ?? options.context_window_tokens;
    if (target !== undefined && (context_window_tokens === undefined || !Number.isSafeInteger(context_window_tokens) || context_window_tokens <= 0)) {
        throw new Error('The verified model context window must be a positive safe integer.');
    }
    if (items.length === 0 || target === undefined || context_window_tokens === undefined) {
        process.stdout.write(`${JSON.stringify({ type: 'result', mode: 'preflight-blocked', destination_root: options.destination_root, blocked: stats.blocked })}\n`);
        await failure_recorder.flush();
        return stats;
    }
    const manifest_path = resolve(options.destination_root, '.criticism-state.json');
    await assert_no_symlink_components(manifest_path);
    const manifest = await load_or_create_review_manifest(manifest_path, options.target_language, options.style_seed);
    const display = new ProgressDisplay(stats, `Smoothieware review → ${options.target_language}`, undefined, options.target_language_code);
    try {
    display.log('info', `Preflight accepted ${items.length} of ${stats.total} translated pages; ${style_sources.length} style sources; reviewing ${options.target_language} with ${options.concurrency} workers.`);
    const context_index = create_context_index({ pages: source_items, project_context: '' });
    let next_index = 0;
    let manifest_write_tail = Promise.resolve();
    const persist_manifest = async (): Promise<void> => {
        manifest_write_tail = manifest_write_tail.then(() => write_json_atomic(manifest_path, manifest));
        await manifest_write_tail;
    };
    const workers = Array.from({ length: Math.min(options.concurrency, Math.max(1, items.length)) }, async (_unused, worker_index) => {
        while (!args.abort_signal.aborted) {
            const item = items[next_index];
            next_index += 1;
            if (item === undefined) return;
            stats.active += 1;
            display.set_active(stats.active);
            try {
                const status = await review_page({
                    item, options, canonical_destination_root, context_index, project_summary,
                    style_sources, target, context_window_tokens, catalog: args.catalog, gateway: args.gateway,
                    signal: args.abort_signal, manifest, persist_manifest, display, worker_index, failure_recorder
                });
                if (status === 'completed') {
                    await failure_recorder.resolve(item.relative_path);
                    stats.completed += 1;
                } else {
                    if (status === 'verified-skip') await failure_recorder.resolve(item.relative_path);
                    stats.skipped += 1;
                }
            } catch (error: unknown) {
                stats.failed += 1;
                display.log('error', `${item.relative_path}: ${safe_failure_message(error)}`);
                const failure = error instanceof PipelineFailure ? error : undefined;
                const output_path = resolve(options.destination_root, item.relative_path);
                const current_text = await regular_file_exists(output_path) ? await readFile(output_path, 'utf8') : undefined;
                await failure_recorder.record(item.relative_path, {
                    category: failure?.category ?? 'other', error, source_hash: item.source_hash,
                    ...(current_text === undefined ? {} : { input_hash: hash_text(current_text) }),
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
        display.log('error', `A review worker stopped after a failure-ledger write error: ${safe_failure_message(worker_failure.reason)}`);
    }
    if (args.abort_signal.aborted) {
        const pending = Math.max(0, items.length - next_index);
        stats.failed += pending;
        if (pending > 0) display.log('warning', `Cancelled before starting ${pending} pages.`);
    }
    await manifest_write_tail;
    await failure_recorder.flush();
    if (worker_failure?.status === 'rejected') throw new Error('One or more review failures could not be persisted to the failure ledger.');
    display.log(stats.failed === 0 && stats.blocked === 0 ? 'success' : 'warning', `Finished: ${stats.completed} fixed, ${stats.skipped} skipped, ${stats.blocked} blocked, ${stats.failed} failed.`);
    return stats;
    } finally {
        display.close();
    }
}

/** Review a single translated page and install only a completely validated result. */
async function review_page(args: PageArguments): Promise<'completed' | 'skipped' | 'verified-skip'> {
    const output_path = resolve(args.options.destination_root, args.item.relative_path);
    await assert_no_symlink_components(output_path);
    if (!await regular_file_exists(output_path)) {
        args.display.log('info', `Untranslated, skipped: ${args.item.relative_path}`);
        return 'skipped';
    }
    const current_text = await readFile(output_path, 'utf8');
    const input_hash = hash_text(current_text);
    const style_samples = select_style_samples({
        sources: args.style_sources, count: args.options.style_sample_count,
        seed: args.manifest.style_seed, page_path: args.item.relative_path
    });
    const style_fingerprint = fingerprint_style_samples(style_samples);
    const old_entry = args.manifest.entries[args.item.relative_path];
    if (!args.options.force && old_entry?.source_hash === args.item.source_hash &&
        old_entry.output_hash === input_hash && old_entry.style_fingerprint === style_fingerprint &&
        old_entry.prompt_version === REVIEW_PROMPT_VERSION && old_entry.model_key === args.target.key) {
        args.display.log('info', `Already reviewed: ${args.item.relative_path}`);
        return 'verified-skip';
    }
    const english = extract_prose_segments(args.item.source_text);
    const translated = extract_prose_segments(current_text);
    if (!are_units_aligned(english, args.item.source_text, translated, current_text)) {
        throw new Error('English and translated prose units cannot be safely aligned; review requires manual alignment.');
    }
    const translated_units = translated.segments;
    let corrected_units: readonly string[];
    try {
        corrected_units = await review_units({ ...args, english, translated_units, current_text, style_samples });
    } catch (error: unknown) {
        if (error instanceof PipelineFailure) throw error;
        throw new PipelineFailure('prompt-budget', safe_failure_message(error), 0, {
            chunk_index: failure_chunk_index(error), unit_index: failure_unit_index(error)
        });
    }
    const corrected_text = restore_prose_segments(english, corrected_units);
    const corrected_structure = extract_prose_segments(corrected_text);
    if (corrected_structure.protected_source !== english.protected_source || corrected_structure.segments.length !== english.segments.length) {
        throw new Error('Corrected page structure differs from the English template.');
    }
    if (args.signal.aborted) throw new Error('Review cancelled before replacement.');
    try {
        await replace_if_unchanged({ args, output_path, input_hash, corrected_text });
    } catch (error: unknown) {
        throw new PipelineFailure('persistence', safe_failure_message(error));
    }
    args.manifest.entries[args.item.relative_path] = {
        source_hash: args.item.source_hash, input_hash, output_hash: hash_text(corrected_text),
        style_fingerprint, prompt_version: REVIEW_PROMPT_VERSION, model_key: args.target.key,
        completed_at: new Date().toISOString()
    };
    try {
        await args.persist_manifest();
    } catch (error: unknown) {
        throw new PipelineFailure('persistence', safe_failure_message(error));
    }
    const checkpoint_path = resolve(args.options.destination_root, '.criticism-checkpoints', `${hash_text(args.item.relative_path)}.json`);
    try {
        await rm(checkpoint_path, { force: true });
    } catch (error: unknown) {
        args.display.log('warning', `Completed review but could not remove its checkpoint: ${safe_failure_message(error)}`);
    }
    args.display.log('success', `Fixed ${args.item.relative_path}`);
    return 'completed';
}

/** Permit repairable syntax and blank-line drift while rejecting ambiguous prose alignment. */
function are_units_aligned(english: ExtractedPage, english_text: string, translated: ExtractedPage, translated_text: string): boolean {
    if (english.segments.length !== translated.segments.length) return false;
    const source_lines = english_text.split(/\r\n|\n|\r/u);
    const target_lines = translated_text.split(/\r\n|\n|\r/u);
    const source_nonblank = source_lines.filter((line) => line.trim() !== '');
    const target_nonblank = target_lines.filter((line) => line.trim() !== '');
    if (source_nonblank.length !== target_nonblank.length) return false;
    const source_positions = unit_nonblank_positions(english, source_lines);
    const target_positions = unit_nonblank_positions(translated, target_lines);
    return source_positions.length === english.segments.length &&
        target_positions.length === translated.segments.length &&
        source_positions.every((position, index) => position === target_positions[index]);
}

/** Locate each unit by preceding nonblank lines, independent of extra blank lines. */
function unit_nonblank_positions(page: ExtractedPage, lines: readonly string[]): readonly number[] {
    const preceding_nonblank: number[] = [0];
    for (const line of lines) preceding_nonblank.push((preceding_nonblank.at(-1) ?? 0) + (line.trim() === '' ? 0 : 1));
    const positions: number[] = [];
    const slots = page.protected_source.matchAll(/\u0000UNIT_(\d+)\u0000/gu);
    let cursor = 0;
    let line_index = 0;
    for (const slot of slots) {
        line_index += line_break_count(page.protected_source.slice(cursor, slot.index));
        positions.push(preceding_nonblank[line_index] ?? -1);
        const segment_index = Number(slot[1]);
        const segment = page.segments[segment_index];
        if (segment === undefined) return [];
        line_index += line_break_count(restore_unit_markup(segment, page, segment_index));
        cursor = slot.index + slot[0].length;
    }
    return positions;
}

/** Count CRLF as one physical line boundary. */
function line_break_count(text: string): number { return [...text.matchAll(/\r\n|\n|\r/gu)].length; }

/** Restore the existing translation's own protected markers for readable review evidence. */
function restore_unit_markup(segment: string, page: ExtractedPage, index: number): string {
    const markers = new Map(page.protected_tokens_by_segment[index]?.map((token) => [token.marker, token.source]) ?? []);
    return segment.replace(MARKER_PATTERN, (marker) => markers.get(marker) ?? marker);
}

/** Review the page in heading-based sections and checkpoint completed sections. */
async function review_units(args: PageArguments & {
    readonly english: ExtractedPage;
    readonly translated_units: readonly string[];
    readonly current_text: string;
    readonly style_samples: readonly StyleSample[];
}): Promise<readonly string[]> {
    if (args.english.segments.length === 0) return [];
    const sections = partition_prose_sections(args.english);
    if (sections.length > MAX_PAGE_SECTIONS) throw new Error(`Review produced ${sections.length} sections; the per-page maximum is ${MAX_PAGE_SECTIONS}.`);
    const checkpoint_path = resolve(args.options.destination_root, '.criticism-checkpoints', `${hash_text(args.item.relative_path)}.json`);
    let checkpoint: ReviewCheckpoint;
    try {
        checkpoint = await read_review_checkpoint({
            path: checkpoint_path, args, input_hash: hash_text(args.current_text), sections
        });
    } catch (error: unknown) {
        throw new PipelineFailure('persistence', `Could not read review checkpoint: ${safe_failure_message(error)}`);
    }
    const corrected = [...args.english.segments];
    for (const section of sections) {
        if (args.signal.aborted) throw new Error('Review cancelled before page completion.');
        const cached = checkpoint.sections[String(section.start_index)];
        if (cached !== undefined && cached.end_index === section.end_index) {
            for (let index = section.start_index; index < section.end_index; index += 1) {
                const checkpoint_value = cached.translations[String(index - section.start_index)];
                if (checkpoint_value === undefined) throw new Error('Review checkpoint omitted a section translation.');
                const value = restore_checkpoint_unit(checkpoint_value, args.english, index);
                validate_prose_segment(args.english, index, value);
                corrected[index] = value;
            }
            args.display.section_skip({
                file_path: args.item.relative_path, section_index: sections.indexOf(section) + 1,
                section_count: sections.length, section_label: section.label,
                reason: 'valid review checkpoint reused'
            });
            continue;
        }
        const page_indices = Array.from({ length: section.end_index - section.start_index }, (_unused, position) => section.start_index + position);
        const section_result = await review_section({ args, page_indices, section_label: section.label, section_index: sections.indexOf(section), section_count: sections.length });
        section_result.forEach((translation, position) => {
            const page_index = page_indices[position];
            if (page_index === undefined) throw new Error('Review response omitted an active section unit.');
            corrected[page_index] = translation;
        });
        checkpoint.sections[String(section.start_index)] = {
            end_index: section.end_index,
            translations: Object.fromEntries(section_result.map((translation, index) => [String(index), normalize_checkpoint_unit(translation)]))
        };
        try {
            await write_json_atomic(checkpoint_path, checkpoint);
        } catch (error: unknown) {
            throw new PipelineFailure('persistence', `Could not save review checkpoint: ${safe_failure_message(error)}`);
        }
    }
    return corrected;
}

interface CheckpointSection {
    readonly end_index: number;
    readonly translations: Record<string, string>;
}

interface ReviewCheckpoint {
    readonly version: 1;
    readonly source_hash: string;
    readonly input_hash: string;
    readonly style_fingerprint: string;
    readonly model_key: string;
    readonly prompt_version: number;
    sections: Record<string, CheckpointSection>;
}

/** Reuse only section results whose source, translated input, model, style, and prompt all match. */
async function read_review_checkpoint(args: {
    readonly path: string;
    readonly args: PageArguments & { readonly english: ExtractedPage; readonly style_samples: readonly StyleSample[] };
    readonly input_hash: string;
    readonly sections: ReturnType<typeof partition_prose_sections>;
}): Promise<ReviewCheckpoint> {
    const expected: ReviewCheckpoint = {
        version: 1, source_hash: args.args.item.source_hash, input_hash: args.input_hash,
        style_fingerprint: fingerprint_style_samples(args.args.style_samples), model_key: args.args.target.key,
        prompt_version: REVIEW_PROMPT_VERSION, sections: {}
    };
    await assert_no_symlink_components(args.path);
    try {
        const stored = JSON.parse(await readFile(args.path, 'utf8')) as ReviewCheckpoint;
        if (typeof stored !== 'object' || stored === null || stored.version !== expected.version || stored.source_hash !== expected.source_hash ||
            stored.input_hash !== expected.input_hash || stored.style_fingerprint !== expected.style_fingerprint ||
            stored.model_key !== expected.model_key || stored.prompt_version !== expected.prompt_version ||
            typeof stored.sections !== 'object' || stored.sections === null) return expected;
        const valid_starts = new Set(args.sections.map((section) => String(section.start_index)));
        for (const [start, section] of Object.entries(stored.sections)) {
            const planned = args.sections.find((candidate) => String(candidate.start_index) === start);
            if (planned === undefined || typeof section !== 'object' || section === null ||
                section.end_index !== planned.end_index || typeof section.translations !== 'object' || section.translations === null) {
                delete stored.sections[start];
                continue;
            }
            for (let index = 0; index < planned.end_index - planned.start_index; index += 1) {
                const value = section.translations[String(index)];
                if (typeof value !== 'string') { args.args.display.log('warning', `Ignoring incomplete review checkpoint section ${planned.label}: ${args.args.item.relative_path}`); delete stored.sections[start]; break; }
                try { validate_prose_segment(args.args.english, planned.start_index + index, restore_checkpoint_unit(value, args.args.english, planned.start_index + index)); }
                catch { args.args.display.log('warning', `Ignoring invalid review checkpoint section ${planned.label}: ${args.args.item.relative_path}`); delete stored.sections[start]; break; }
            }
        }
        for (const start of Object.keys(stored.sections)) if (!valid_starts.has(start)) delete stored.sections[start];
        return stored;
    } catch (error: unknown) {
        if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return expected;
        if (error instanceof SyntaxError) return expected;
        throw error;
    }
}

/** Review one heading-based section and retry only individual units that fail validation. */
async function review_section(args: {
    readonly args: PageArguments & { readonly english: ExtractedPage; readonly translated_units: readonly string[]; readonly current_text: string; readonly style_samples: readonly StyleSample[] };
    readonly page_indices: readonly number[];
    readonly section_label: string;
    readonly section_index: number;
    readonly section_count: number;
}): Promise<readonly string[]> {
    const marker_mappings = args.page_indices.map((page_index) => new Map(
        (args.args.english.protected_tokens_by_segment[page_index] ?? []).map((token, index) => [`[[SW_MARK_${index + 1}]]`, token])
    ));
    const prompt_units = args.page_indices.map((page_index, position) => {
        const original = args.args.english.segments[page_index] ?? '';
        let next_marker_index = 0;
        return original.replace(MARKER_PATTERN, () => {
            next_marker_index += 1;
            const token = marker_mappings[position]?.get(`[[SW_MARK_${next_marker_index}]]`);
            if (token !== undefined && is_line_ending(token.source)) return '';
            return `[[SW_MARK_${next_marker_index}]]`;
        });
    });
    const translated_units = args.page_indices.map((page_index) => normalize_current_review_unit(args.args.translated_units[page_index] ?? ''));
    const pairs = prompt_units.map((english, index) => ({ english, translated: translated_units[index] ?? '' }));
    const active_section = JSON.stringify({ heading: args.section_label, units: pairs });
    const full_page_context_tokens = estimate_review_tokens(
        escape_xml_text(`${args.args.item.source_text}\n${args.args.current_text}\n${args.args.project_summary}\n${args.args.style_samples.map((sample) => `${sample.path}\n${sample.excerpt}`).join('\n')}`)
    );
    const context_limit_tokens = Math.floor(Math.floor(args.args.context_window_tokens * 0.9) * 0.7);
    if (full_page_context_tokens > context_limit_tokens) {
        throw new Error(`Full-page context requires ${full_page_context_tokens} tokens; the 70 percent context cap is ${context_limit_tokens}.`);
    }
    const remaining_context_tokens = Math.max(0, Math.floor((context_limit_tokens - full_page_context_tokens) / 6));
    let context = build_context({
        item: args.args.item, index: args.args.context_index,
        context_window_tokens: remaining_context_tokens, target_segments: prompt_units
    });
    const make_prompt = (reference_context: string) => create_criticism_prompt({
        relative_path: args.args.item.relative_path, language: args.args.options.target_language,
        project_summary: args.args.project_summary, reference_context, style_samples: args.args.style_samples,
        active_section,
        full_english_page: args.args.item.source_text, full_translated_page: args.args.current_text
    });
    if (full_page_context_tokens + estimate_review_tokens(escape_xml_text(context.context)) + PROMPT_HEADROOM_TOKENS > context_limit_tokens) {
        context = { context: '', used_paths: [] };
    }
    const prompt = make_prompt(context.context);
    const input_tokens = estimate_prompt_tokens(prompt);
    const budget = calculate_request_budget({
        context_window_tokens: args.args.context_window_tokens,
        model_output_ceiling_tokens: args.args.target.max_output_tokens,
        estimated_context_tokens: full_page_context_tokens + estimate_review_tokens(escape_xml_text(context.context)) + PROMPT_HEADROOM_TOKENS,
        estimated_input_tokens: input_tokens,
        minimum_output_tokens: Math.max(128, Math.ceil(estimate_review_tokens(JSON.stringify(pairs)) * 1.2)),
        request_margin_tokens: PROMPT_HEADROOM_TOKENS
    });
    await mkdir(resolve(args.args.options.destination_root, '.criticism-checkpoints'), { recursive: true });
    const active_section_tokens = estimate_review_tokens(active_section);
    const source_file_tokens = estimate_review_tokens(escape_xml_text(`${args.args.item.source_text}\n${args.args.current_text}`));
    const style_and_reference_tokens = estimate_review_tokens(escape_xml_text(
        `${args.args.project_summary}\n${args.args.style_samples.map((sample) => `${sample.path}\n${sample.excerpt}`).join('\n')}\n${context.context}`
    ));
    const instruction_tokens = Math.max(0, input_tokens - source_file_tokens - active_section_tokens - style_and_reference_tokens);
    const section_id = `${args.args.item.relative_path}#review-${args.section_index + 1}`;
    const section_started_at = Date.now();
    const attempt_counter = { value: 0 };
    args.args.display.section_start({
        section_id, file_path: args.args.item.relative_path,
        section_index: args.section_index + 1, section_count: args.section_count,
        section_label: args.section_label, worker_index: args.args.worker_index,
        related_file_count: context.used_paths.length + args.args.style_samples.length,
        unit_count: args.page_indices.length,
        context: {
            instruction_tokens,
            source_file_tokens,
            active_section_tokens,
            related_files_tokens: style_and_reference_tokens,
            output_reservation_tokens: budget.maximum_output_tokens,
            free_capacity_tokens: Math.max(0, args.args.context_window_tokens - input_tokens - budget.maximum_output_tokens),
            total_tokens: args.args.context_window_tokens
        }
    });
    try {
        const result = await request_valid_section({
            args: args.args, prompt, prompt_units, translated_units, marker_mappings, page_indices: args.page_indices,
            maximum_output_tokens: budget.maximum_output_tokens, section_index: args.section_index,
            section_count: args.section_count, section_label: args.section_label, attempt_counter
        });
        args.args.display.section_complete({
            section_id, duration_ms: Date.now() - section_started_at,
            units_completed: result.length, attempts: attempt_counter.value, result: 'success'
        });
        return result;
    } catch (error: unknown) {
        args.args.display.section_complete({
            section_id, duration_ms: Date.now() - section_started_at,
            units_completed: 0, attempts: attempt_counter.value,
            result: args.args.signal.aborted ? 'blocked' : 'failed', message: safe_failure_message(error)
        });
        throw error;
    }
}

/** Allow extra headroom for target languages whose characters tokenize densely. */
function estimate_review_tokens(value: string): number {
    let estimate = 0;
    for (const character of value) estimate += character.codePointAt(0)! > 127 ? 2 : 1;
    return estimate;
}

/** Include fixed gateway policy and serialization headroom in every prompt estimate. */
function estimate_prompt_tokens(prompt: { readonly system_prompt: string; readonly user_prompt: string }): number {
    return estimate_review_tokens(`${CRITICISM_GATEWAY_SYSTEM_POLICY}\n\n${prompt.system_prompt}`) +
        estimate_review_tokens(prompt.user_prompt) + PROMPT_HEADROOM_TOKENS;
}

/** Retry gateway errors at section scope and structural errors only for their affected units. */
async function request_valid_section(args: {
    readonly args: PageArguments & { readonly english: ExtractedPage; readonly current_text: string };
    readonly prompt: { readonly system_prompt: string; readonly user_prompt: string };
    readonly prompt_units: readonly string[];
    readonly translated_units: readonly string[];
    readonly marker_mappings: readonly ReadonlyMap<string, ProtectedMarkupToken>[];
    readonly page_indices: readonly number[];
    readonly maximum_output_tokens: number;
    readonly section_index: number;
    readonly section_count: number;
    readonly section_label: string;
    readonly attempt_counter: { value: number };
}): Promise<readonly string[]> {
    const accepted: Array<string | undefined> = Array.from({ length: args.page_indices.length }, () => undefined);
    let last_gateway_failure = 'No review request attempt completed.';
    let response: Awaited<ReturnType<TranslationGateway['translate_segments']>> | undefined;
    for (let attempt = 1; attempt <= MAXIMUM_GATEWAY_ATTEMPTS; attempt += 1) {
        if (args.args.signal.aborted) throw new Error('Review cancelled before page completion.');
        try {
            const proxy_urls = await args.args.catalog.sample_paid_proxy_urls(10);
            args.attempt_counter.value += 1;
            response = await args.args.gateway.translate_segments({
                target: args.args.target, proxy_urls,
                gateway_system_policy: CRITICISM_GATEWAY_SYSTEM_POLICY,
                system_prompt: args.prompt.system_prompt, user_prompt: args.prompt.user_prompt,
                maximum_output_tokens: args.maximum_output_tokens, signal: args.args.signal
            });
            if (attempt > 1) await args.args.failure_recorder.resolve(args.args.item.relative_path, true);
            break;
        } catch (error: unknown) {
            last_gateway_failure = safe_gateway_failure(error);
            const failure = new PipelineFailure('gateway', last_gateway_failure, attempt, { chunk_index: args.section_index + 1 });
            await args.args.failure_recorder.record(args.args.item.relative_path, {
                category: 'gateway', error: failure, source_hash: args.args.item.source_hash,
                input_hash: hash_text(args.args.current_text), attempt_count: attempt,
                chunk_index: args.section_index + 1
            });
            if (args.args.signal.aborted || attempt === MAXIMUM_GATEWAY_ATTEMPTS) {
                throw new PipelineFailure('gateway', `Review section ${args.section_index + 1}/${args.section_count} failed after ${attempt} gateway attempts: ${last_gateway_failure}`, attempt, { chunk_index: args.section_index + 1 });
            }
            args.args.display.log('warning', `${args.args.item.relative_path} review section ${args.section_index + 1}/${args.section_count} attempt ${attempt}/${MAXIMUM_GATEWAY_ATTEMPTS} gateway request failed; retrying through a fresh paid route.`);
        }
    }
    if (response === undefined) throw new PipelineFailure('gateway', last_gateway_failure, MAXIMUM_GATEWAY_ATTEMPTS, { chunk_index: args.section_index + 1 });

    const invalid: Array<{ readonly local_index: number; readonly diagnostic: string; readonly raw: string }> = [];
    if (response.translated_segments.length !== args.page_indices.length) {
        for (let index = 0; index < args.page_indices.length; index += 1) {
            invalid.push({ local_index: index, diagnostic: `Gateway returned ${response.translated_segments.length}/${args.page_indices.length} units for this section.`, raw: response.translated_segments[index] ?? '' });
        }
    } else {
        for (const [local_index, raw] of response.translated_segments.entries()) {
            const page_index = args.page_indices[local_index];
            const marker_mapping = args.marker_mappings[local_index];
            if (page_index === undefined || marker_mapping === undefined) throw new PipelineFailure('other', 'Review marker mapping is incomplete.');
            try {
                const expanded = expand_review_unit(raw, marker_mapping);
                validate_prose_segment(args.args.english, page_index, expanded);
                accepted[local_index] = expanded;
            } catch (error: unknown) {
                invalid.push({ local_index, diagnostic: safe_failure_message(error), raw });
            }
        }
    }
    if (invalid.length > 0) {
        await capture_and_record_section_rejection({ args: args.args, response, invalid, page_indices: args.page_indices });
    }
    for (const rejected of invalid) {
        let diagnostic = rejected.diagnostic;
        let last_retry_category: FailureCategory = 'response-validation';
        for (let retry = 1; retry <= MAXIMUM_INVALID_UNIT_RETRIES; retry += 1) {
            if (args.args.signal.aborted) throw new Error('Review cancelled before page completion.');
            const page_index = args.page_indices[rejected.local_index];
            const mapping = args.marker_mappings[rejected.local_index];
            if (page_index === undefined || mapping === undefined) throw new PipelineFailure('other', 'Review retry marker mapping is incomplete.');
            const retry_prompt = prompt_for_single_review_unit(args, rejected.local_index, diagnostic);
            let retry_response: Awaited<ReturnType<TranslationGateway['translate_segments']>>;
            try {
                const proxy_urls = await args.args.catalog.sample_paid_proxy_urls(10);
                args.attempt_counter.value += 1;
                retry_response = await args.args.gateway.translate_segments({
                    target: args.args.target, proxy_urls, gateway_system_policy: CRITICISM_GATEWAY_SYSTEM_POLICY,
                    system_prompt: retry_prompt.system_prompt, user_prompt: retry_prompt.user_prompt,
                    maximum_output_tokens: args.maximum_output_tokens, signal: args.args.signal
                });
            } catch (error: unknown) {
                diagnostic = safe_gateway_failure(error);
                last_retry_category = 'gateway';
                const failure = new PipelineFailure('gateway', diagnostic, retry, {
                    chunk_index: args.section_index + 1, unit_index: page_index + 1
                });
                await args.args.failure_recorder.record(args.args.item.relative_path, {
                    category: 'gateway', error: failure, source_hash: args.args.item.source_hash,
                    input_hash: hash_text(args.args.current_text), attempt_count: retry + 1,
                    chunk_index: args.section_index + 1, unit_index: page_index + 1
                });
                args.args.display.log('warning', `${args.args.item.relative_path} section ${args.section_index + 1}/${args.section_count}, unit ${page_index + 1} gateway retry ${retry}/${MAXIMUM_INVALID_UNIT_RETRIES} failed.`);
                continue;
            }
            try {
                if (retry_response.translated_segments.length !== 1) throw new Error(`Gateway returned ${retry_response.translated_segments.length}/1 unit on targeted retry.`);
                const expanded = expand_review_unit(retry_response.translated_segments[0] ?? '', mapping);
                validate_prose_segment(args.args.english, page_index, expanded);
                accepted[rejected.local_index] = expanded;
                await args.args.failure_recorder.resolve(args.args.item.relative_path, true);
                break;
            } catch (error: unknown) {
                diagnostic = safe_failure_message(error);
                last_retry_category = 'response-validation';
                const failure = new PipelineFailure('response-validation', diagnostic, retry, {
                    chunk_index: args.section_index + 1, unit_index: page_index + 1
                });
                await args.args.failure_recorder.record(args.args.item.relative_path, {
                    category: 'response-validation', error: failure, source_hash: args.args.item.source_hash,
                    input_hash: hash_text(args.args.current_text), attempt_count: retry + 1,
                    chunk_index: args.section_index + 1, unit_index: page_index + 1
                });
                args.args.display.log('warning', `${args.args.item.relative_path} section ${args.section_index + 1}/${args.section_count}, unit ${page_index + 1} retry ${retry}/${MAXIMUM_INVALID_UNIT_RETRIES} failed validation.`);
            }
        }
        if (accepted[rejected.local_index] === undefined) {
            const page_index = args.page_indices[rejected.local_index] ?? 0;
            throw new PipelineFailure(last_retry_category, `Review section ${args.section_index + 1}/${args.section_count}, unit ${page_index + 1} failed after ${MAXIMUM_INVALID_UNIT_RETRIES} targeted retries: ${diagnostic}`, MAXIMUM_INVALID_UNIT_RETRIES + 1, {
                chunk_index: args.section_index + 1, unit_index: page_index + 1
            });
        }
    }
    return accepted.map((unit) => {
        if (unit === undefined) throw new PipelineFailure('response-validation', 'Review section completed with a missing unit.');
        return unit;
    });
}

/** Restore internal protection tokens only after the returned marker sequence validates. */
function expand_review_unit(raw: string, marker_mapping: ReadonlyMap<string, ProtectedMarkupToken>): string {
    const normalized = normalize_review_unit(raw);
    const repaired = restore_omitted_literal_markers(normalized, marker_mapping);
    return repaired.replace(REVIEW_MARKER_PATTERN, (_marker, marker_index: string) =>
        marker_mapping.get(`[[SW_MARK_${marker_index}]]`)?.marker ?? _marker
    );
}

/** Give source and translated syntax the same short local markers without copying raw markup. */
function normalize_current_review_unit(segment: string): string {
    let marker_index = 0;
    return segment.replace(MARKER_PATTERN, () => {
        marker_index += 1;
        return `[[SW_MARK_${marker_index}]]`;
    });
}

/** Store section markers independently of the extractor's per-run random marker nonce. */
function normalize_checkpoint_unit(segment: string): string {
    let marker_index = 0;
    return segment.replace(MARKER_PATTERN, () => {
        marker_index += 1;
        return `[[SW_MARK_${marker_index}]]`;
    });
}

/** Rebind stable checkpoint markers to this run's extracted source tokens. */
function restore_checkpoint_unit(segment: string, page: ExtractedPage, page_index: number): string {
    const tokens = page.protected_tokens_by_segment[page_index] ?? [];
    return segment.replace(REVIEW_MARKER_PATTERN, (marker, marker_index: string) =>
        tokens[Number(marker_index) - 1]?.marker ?? marker
    );
}

/** Retry with a single paired unit while retaining the same full-page reference context. */
function prompt_for_single_review_unit(args: {
    readonly args: PageArguments & { readonly current_text: string };
    readonly prompt: { readonly system_prompt: string; readonly user_prompt: string };
    readonly prompt_units: readonly string[];
    readonly translated_units: readonly string[];
    readonly page_indices: readonly number[];
    readonly section_label: string;
}, local_index: number, diagnostic: string): { readonly system_prompt: string; readonly user_prompt: string } {
    const english = args.prompt_units[local_index] ?? '';
    const translated = args.translated_units[local_index] ?? '';
    const replace_element = (prompt: string, name: string, value: string): string =>
        prompt.replace(new RegExp(`<${name}>[\\s\\S]*?<\\/${name}>`, 'u'), xml_element(name, value));
    let user_prompt = replace_element(args.prompt.user_prompt, 'active-section', JSON.stringify({ heading: args.section_label, units: [{ english, translated }] }));
    user_prompt = user_prompt.replace('</review-request>', `${xml_element('validation-feedback', `The previous response for this unit failed validation: ${diagnostic}. Correct only this unit and preserve every marker.`)}</review-request>`);
    return { system_prompt: args.prompt.system_prompt, user_prompt };
}

/** Preserve safe diagnostics and rejected outputs while keeping failure metadata page-scoped. */
async function capture_and_record_section_rejection(args: {
    readonly args: PageArguments & { readonly current_text: string };
    readonly response: Awaited<ReturnType<TranslationGateway['translate_segments']>>;
    readonly invalid: readonly { readonly local_index: number; readonly diagnostic: string; readonly raw: string }[];
    readonly page_indices: readonly number[];
}): Promise<void> {
    const first = args.invalid[0];
    const page_index = first === undefined ? undefined : args.page_indices[first.local_index];
    const failure = new PipelineFailure('response-validation', first?.diagnostic ?? 'Review response failed structural validation.', 1, {
        unit_index: page_index === undefined || page_index < 0 ? undefined : page_index + 1
    });
    try {
        const capture_path = await capture_rejected_output({
            relative_path: args.args.item.relative_path, chunk_index: 1,
            translated_segments: args.response.translated_segments, validation_error: failure
        });
        if (capture_path !== undefined) args.args.display.log('warning', `Rejected response captured for investigation at ${capture_path}.`);
    } catch (capture_error: unknown) {
        args.args.display.log('warning', `Temporary rejected-response capture failed: ${safe_failure_message(capture_error)}`);
    }
    await args.args.failure_recorder.record(args.args.item.relative_path, {
        category: 'response-validation', error: failure, source_hash: args.args.item.source_hash,
        input_hash: hash_text(args.args.current_text), attempt_count: 1,
        chunk_index: 1, ...(page_index === undefined || page_index < 0 ? {} : { unit_index: page_index + 1 })
    });
}

/** Keep model-added line wrapping out of the page's one-line-per-prose-unit structure. */
function normalize_review_unit(segment: string): string {
    return segment
        .replace(/\[\[SW_MARK_[^\]]*\]\]/gu, (marker) => marker.replace(/[\r\n\t ]/gu, ''))
        .replace(/[\r\n]+/gu, ' ');
}

/** Re-encode exact source syntax when a model returns it literally instead of its short marker. */
function restore_omitted_literal_markers(
    translated: string,
    marker_mapping: ReadonlyMap<string, ProtectedMarkupToken>
): string {
    let restored = translated;
    let search_from = 0;
    let marker_index = 0;
    for (const [review_marker, token] of marker_mapping) {
        if (is_line_ending(token.source)) {
            restored = `${restored.split(review_marker).join('').replace(/[ \t]+$/u, '')}${review_marker}`;
            search_from = restored.length;
            marker_index += 1;
            continue;
        }
        if (marker_index === 0 && is_markdown_block_prefix(token.source)) {
            const without_expected_marker = restored.split(review_marker).join('');
            const output_prefix = /^(?: {0,3}>[ \t]?)*(?:[ \t]*(?:#{1,6}[ \t]*|(?:[-+*]|\d+[.)])[ \t]+))?/u;
            restored = `${review_marker}${without_expected_marker.replace(output_prefix, '')}`;
            search_from = review_marker.length;
            marker_index += 1;
            continue;
        }
        const existing_marker_index = restored.indexOf(review_marker, search_from);
        if (existing_marker_index >= 0) {
            const marker_end = existing_marker_index + review_marker.length;
            if (token.source !== '' && restored.startsWith(token.source, marker_end)) {
                restored = `${restored.slice(0, marker_end)}${restored.slice(marker_end + token.source.length)}`;
            } else if (token.source !== '' && restored.slice(existing_marker_index - token.source.length, existing_marker_index) === token.source) {
                restored = `${restored.slice(0, existing_marker_index - token.source.length)}${restored.slice(existing_marker_index)}`;
                search_from = existing_marker_index - token.source.length + review_marker.length;
                marker_index += 1;
                continue;
            }
            search_from = marker_end;
            marker_index += 1;
            continue;
        }
        if (token.source === '') return restored;
        const literal_syntax_index = restored.indexOf(token.source, search_from);
        if (literal_syntax_index < 0) return restored;
        restored = `${restored.slice(0, literal_syntax_index)}${review_marker}${restored.slice(literal_syntax_index + token.source.length)}`;
        search_from = literal_syntax_index + review_marker.length;
        marker_index += 1;
    }
    return restored;
}

/** Recognize source line prefixes that the Markdown template, rather than the model, must retain. */
function is_markdown_block_prefix(source: string): boolean {
    return /^(?: {0,3}>[ \t]?)*(?:[ \t]*(?:#{1,6}[ \t]+|(?:[-+*]|\d+[.)])[ \t]+))$|^ {0,3}>[ \t]?$/u.test(source);
}

/** Keep physical line endings in the trusted English template rather than asking the model to echo them. */
function is_line_ending(source: string): boolean {
    return source === '\n' || source === '\r\n' || source === '\r';
}

/** Keep provider exceptions from echoing prompt content or author-style excerpts into progress logs. */
function safe_gateway_failure(error: unknown): string {
    const message = error instanceof Error ? error.message : '';
    const http_status = message.match(/HTTP (\d{3})/u)?.[1];
    if (http_status !== undefined) return `Gateway request failed with HTTP ${http_status}.`;
    if (message.startsWith('No paid proxy routes')) return 'No paid proxy routes were available.';
    return 'Gateway or paid proxy request failed.';
}

/** Compare both current inputs again under a cooperative lock before atomic replacement. */
async function replace_if_unchanged(args: {
    readonly args: PageArguments;
    readonly output_path: string;
    readonly input_hash: string;
    readonly corrected_text: string;
}): Promise<void> {
    const lock_path = `${args.output_path}.criticism-lock`;
    const lock_record = await acquire_page_lock(lock_path);
    let temporary_path: string | undefined;
    try {
        await assert_no_symlink_components(args.output_path);
        if (await realpath(args.args.options.destination_root) !== args.args.canonical_destination_root) {
            throw new Error('Review destination changed while preparing replacement.');
        }
        if (hash_text(await readFile(args.args.item.source_path, 'utf8')) !== args.args.item.source_hash) {
            throw new Error('English source changed during review; replacement refused.');
        }
        if (!await regular_file_exists(args.output_path) || hash_text(await readFile(args.output_path, 'utf8')) !== args.input_hash) {
            throw new Error('Translated page changed during review; replacement refused.');
        }
        temporary_path = `${args.output_path}.${randomUUID()}.tmp`;
        await writeFile(temporary_path, args.corrected_text, { encoding: 'utf8', flag: 'wx' });
        if (args.args.signal.aborted) throw new Error('Review cancelled before replacement.');
        if (hash_text(await readFile(args.args.item.source_path, 'utf8')) !== args.args.item.source_hash ||
            hash_text(await readFile(args.output_path, 'utf8')) !== args.input_hash) {
            throw new Error('A source or translated page changed before replacement; replacement refused.');
        }
        await rename(temporary_path, args.output_path);
        temporary_path = undefined;
    } finally {
        if (temporary_path !== undefined) await rm(temporary_path, { force: true });
        if (await readFile(lock_path, 'utf8').catch(() => '') === lock_record) await rm(lock_path, { force: true });
    }
}

/** Recover only a lock whose recorded owner PID is no longer present. */
async function acquire_page_lock(path: string): Promise<string> {
    await assert_no_symlink_components(path);
    const record = JSON.stringify({ pid: process.pid, nonce: randomUUID() });
    try {
        await writeFile(path, record, { encoding: 'utf8', flag: 'wx' });
        return record;
    } catch (error: unknown) {
        if (!is_existing_path(error)) throw error;
    }
    const metadata = await lstat(path);
    if (!metadata.isFile() || metadata.isSymbolicLink()) throw new Error('Review lock is not a regular file.');
    const observed = await readFile(path, 'utf8');
    let owner: { pid?: unknown };
    try { owner = JSON.parse(observed) as { pid?: unknown }; }
    catch { throw new Error('Review lock has an invalid owner record.'); }
    if (!Number.isInteger(owner.pid) || Number(owner.pid) < 1 || is_process_alive(Number(owner.pid))) {
        throw new Error('Another review process owns this page lock.');
    }
    const current_metadata = await lstat(path);
    if (metadata.dev !== current_metadata.dev || metadata.ino !== current_metadata.ino || await readFile(path, 'utf8') !== observed) {
        throw new Error('Review lock changed during stale-owner recovery.');
    }
    await rm(path);
    await writeFile(path, record, { encoding: 'utf8', flag: 'wx' });
    return record;
}

/** Signal zero checks existence without interrupting the recorded process. */
function is_process_alive(pid: number): boolean {
    try { process.kill(pid, 0); return true; }
    catch (error: unknown) { return !(typeof error === 'object' && error !== null && 'code' in error && (error as { code?: unknown }).code === 'ESRCH'); }
}

/** Read a valid resumability manifest, preserving its seed across invocations. */
async function read_review_manifest(path: string, language: string, requested_seed: string | undefined): Promise<ReviewManifest> {
    try {
        const decoded: unknown = JSON.parse(await readFile(path, 'utf8'));
        if (typeof decoded !== 'object' || decoded === null) throw new Error('Review manifest is not an object.');
        const candidate = decoded as Partial<ReviewManifest>;
        if (candidate.version !== 1 || candidate.target_language !== language ||
            typeof candidate.style_seed !== 'string' || candidate.style_seed === '' ||
            typeof candidate.entries !== 'object' || candidate.entries === null || Array.isArray(candidate.entries)) {
            throw new Error('Review manifest shape or target language differs from this run.');
        }
        return { version: 1, target_language: language, style_seed: requested_seed ?? candidate.style_seed, entries: candidate.entries as Record<string, ReviewEntry> };
    } catch (error: unknown) {
        if (await regular_file_exists(path)) throw new Error(`Could not use review manifest: ${error_message(error)}`);
        return { version: 1, target_language: language, style_seed: requested_seed ?? randomUUID(), entries: {} };
    }
}

/** Persist a fresh selection seed before requests so failed pages get the same samples on retry. */
async function load_or_create_review_manifest(path: string, language: string, requested_seed: string | undefined): Promise<ReviewManifest> {
    const initial = await read_review_manifest(path, language, requested_seed);
    if (await regular_file_exists(path)) return read_review_manifest(path, language, requested_seed);
    const temporary_path = `${path}.${randomUUID()}.tmp`;
    try {
        await writeFile(temporary_path, `${JSON.stringify(initial, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
        try {
            await link(temporary_path, path);
        } catch (error: unknown) {
            if (!is_existing_path(error)) throw error;
        }
    } finally {
        await rm(temporary_path, { force: true });
    }
    return read_review_manifest(path, language, requested_seed);
}

/** Recognize only exclusive-create collisions from another review process. */
function is_existing_path(error: unknown): boolean {
    return typeof error === 'object' && error !== null && 'code' in error && (error as { code?: unknown }).code === 'EEXIST';
}
