import { describe, expect, it } from 'bun:test';
import { mkdtemp, readFile, rm, mkdir, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { run_translation } from '../runner';
import type { ProxySource, TranslationGateway, TranslationTarget } from '../types';

const test_target: TranslationTarget = {
    key: 'kilo-gw-stepfun-37-flash', api_id: 'stepfun/test', provider_base_url: 'https://gateway.invalid',
    provider_api_key: '', max_output_tokens: 5_000, context_window_tokens: 32_000
};

/** Parse JSON data from the escaped XML element used by production prompts. */
function prompt_segments(user_prompt: string): string[] {
    const match = user_prompt.match(/<target-translation-units>([\s\S]*?)<\/target-translation-units>/u);
    const decoded = (match?.[1] ?? '[]').replace(/&(lt|gt|quot|apos|amp);/gu, (_match, entity: string) => ({
        lt: '<', gt: '>', quot: '"', apos: "'", amp: '&'
    })[entity] ?? _match);
    return JSON.parse(decoded) as string[];
}

describe('translation runner', () => {
    it('translates each file independently, respects worker concurrency, and resumes from verified hashes', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/fr/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(resolve(source_root, 'nested'), { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), '# First page\n');
            await writeFile(resolve(source_root, 'nested/two.md'), '# Second page\n');
            await writeFile(context_path, 'Smoothieware project reference.');
            const calls: string[] = [];
            const submitted_prompts: string[] = [];
            let active_calls = 0;
            let maximum_active_calls = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => ['http://proxy.invalid:1000'],
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async ({ user_prompt }) => {
                    active_calls += 1;
                    maximum_active_calls = Math.max(maximum_active_calls, active_calls);
                    calls.push(user_prompt.match(/<target-source-page>([^<]*)<\/target-source-page>/u)?.[1] ?? 'missing');
                    submitted_prompts.push(user_prompt);
                    await Bun.sleep(15);
                    const segments = prompt_segments(user_prompt);
                    active_calls -= 1;
                    return { translated_segments: segments.map((segment) => segment.replace('First', 'FR First').replace('Second', 'FR Second')), attempts: 1 };
                }
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 2,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'French'
            } as const;
            const first = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });
            expect(first).toMatchObject({ completed: 2, skipped: 0, failed: 0, total: 2 });
            expect(maximum_active_calls).toBe(2);
            expect(calls.sort()).toEqual(['nested/two.md', 'one.md']);
            expect(submitted_prompts.every((prompt) => prompt.includes('<full-page-context role="reference-only">'))).toBe(true);
            expect(submitted_prompts.every((prompt) => prompt.includes('<active-target-section role="translate-only">'))).toBe(true);
            expect(submitted_prompts.some((prompt) => prompt.includes('# First page'))).toBe(true);
            expect(await readFile(resolve(destination_root, 'one.md'), 'utf8')).toContain('FR First page');
            expect(await readFile(resolve(destination_root, 'nested/two.md'), 'utf8')).toContain('FR Second page');
            const second = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });
            expect(second).toMatchObject({ completed: 0, skipped: 2, failed: 0, total: 2 });
            expect(calls).toHaveLength(2);
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('rejects a destination symlink that resolves into the source tree', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-symlink-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), '# Original\n');
            await writeFile(context_path, 'Project reference.');
            await symlink(source_root, destination_root, 'dir');
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => ['http://proxy.invalid:1000'],
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async () => ({ translated_segments: ['Changed'], attempts: 1 })
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: true, dry_run: false, target_language: 'French'
            } as const;

            await expect(run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal }))
                .rejects.toThrow('symbolic link');
            expect(await readFile(resolve(source_root, 'one.md'), 'utf8')).toBe('# Original\n');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('rejects a symlinked output subdirectory before writing through it', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-nested-symlink-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(resolve(source_root, 'nested'), { recursive: true });
            await mkdir(destination_root, { recursive: true });
            await writeFile(resolve(source_root, 'nested/one.md'), '# Original\n');
            await writeFile(context_path, 'Project reference.');
            await symlink(resolve(source_root, 'nested'), resolve(destination_root, 'nested'), 'dir');
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => ['http://proxy.invalid:1000'],
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async () => ({ translated_segments: ['Changed'], attempts: 1 })
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: true, dry_run: false, target_language: 'French'
            } as const;

            const stats = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });
            expect(stats).toMatchObject({ completed: 0, failed: 1, total: 1 });
            expect(await readFile(resolve(source_root, 'nested/one.md'), 'utf8')).toBe('# Original\n');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('blocks unsupported source markup before loading model metadata and records the failure', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-preflight-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'unsupported.md'), '⟪SWEEP_RESERVED\n');
            await writeFile(context_path, 'Smoothieware project reference.');
            let model_lookups = 0;
            let proxy_samples = 0;
            let gateway_calls = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => { model_lookups += 1; return test_target; },
                sample_paid_proxy_urls: async () => { proxy_samples += 1; return ['http://proxy.invalid:1000']; },
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async () => { gateway_calls += 1; return { translated_segments: [], attempts: 1 }; }
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'Chinese'
            } as const;

            const result = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });
            const failures = JSON.parse(await readFile(resolve(destination_root, '.translation-failures.json'), 'utf8')) as {
                entries: Record<string, { category: string; attempt_count: number }>;
            };

            expect(result).toMatchObject({ blocked: 1, failed: 0, total: 1 });
            expect(model_lookups).toBe(0);
            expect(proxy_samples).toBe(0);
            expect(gateway_calls).toBe(0);
            expect(failures.entries['unsupported.md']).toMatchObject({ category: 'source-markup', attempt_count: 0 });
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('records exhausted gateway attempts and marks the failure resolved after a successful rerun', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-failure-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), '# Source page\n');
            await writeFile(context_path, 'Smoothieware project reference.');
            let proxy_samples = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => { proxy_samples += 1; return ['http://proxy.invalid:1000']; },
                close: async () => undefined
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: true, dry_run: false, target_language: 'Chinese'
            } as const;
            const failing_gateway: TranslationGateway = {
                translate_segments: async () => { throw new Error('Bearer abc123 gateway unavailable'); }
            };
            const failed = await run_translation({ options, catalog, gateway: failing_gateway, abort_signal: new AbortController().signal });
            const failure_path = resolve(destination_root, '.translation-failures.json');
            const manifest_after_failure = JSON.parse(await readFile(failure_path, 'utf8')) as {
                readonly entries: Record<string, { readonly category: string; readonly message: string; readonly attempt_count: number }>;
            };
            expect(failed).toMatchObject({ completed: 0, failed: 1 });
            expect(proxy_samples).toBe(3);
            expect(manifest_after_failure.entries['one.md']).toMatchObject({ category: 'gateway', attempt_count: 3 });
            expect(manifest_after_failure.entries['one.md']?.message).not.toContain('abc123');

            const successful_gateway: TranslationGateway = {
                translate_segments: async ({ user_prompt }) => {
                    return { translated_segments: prompt_segments(user_prompt), attempts: 1 };
                }
            };
            const recovered = await run_translation({ options, catalog, gateway: successful_gateway, abort_signal: new AbortController().signal });
            const manifest_after_recovery = JSON.parse(await readFile(failure_path, 'utf8')) as {
                readonly entries: Record<string, { readonly category: string; readonly resolved: boolean; readonly retry_recovered: boolean }>;
            };
            expect(recovered).toMatchObject({ completed: 1, failed: 0 });
            expect(manifest_after_recovery.entries['one.md']).toMatchObject({ category: 'gateway', resolved: true, retry_recovered: false });
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('retries a malformed translation chunk with targeted structural feedback', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-repair-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), 'Read [the guide](guide.md).\n');
            await writeFile(context_path, 'Smoothieware project reference.');
            const prompts: string[] = [];
            let proxy_samples = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => { proxy_samples += 1; return ['http://proxy.invalid:1000']; },
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async ({ user_prompt }) => {
                    prompts.push(user_prompt);
                    const segments = prompt_segments(user_prompt);
                    if (prompts.length === 1) return { translated_segments: segments.map((segment) => segment.replace(/⟪SWEEP_[^⟫]+⟫/gu, '')), attempts: 1 };
                    return { translated_segments: segments, attempts: 1 };
                }
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'Chinese'
            } as const;

            const result = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(prompts).toHaveLength(2);
            expect(prompts[1]).toContain('<repair-guidance>');
            expect(prompts[1]).toContain('missing or duplicated marker');
            expect(proxy_samples).toBe(2);
            const failure_manifest = JSON.parse(await readFile(resolve(destination_root, '.translation-failures.json'), 'utf8')) as {
                readonly entries: Record<string, { readonly category: string; readonly chunk_index: number; readonly unit_index: number; readonly retry_recovered: boolean; readonly resolved: boolean }>;
            };
            expect(failure_manifest.entries['one.md']).toMatchObject({
                category: 'response-validation', chunk_index: 1, unit_index: 1,
                retry_recovered: true, resolved: true
            });
            expect(await readFile(resolve(destination_root, 'one.md'), 'utf8')).toBe('Read [the guide](guide.md).\n');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('keeps valid units in a section checkpoint and resumes only the rejected unit', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-checkpoint-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), '# Setup\nFirst instruction.\nSecond [guide](guide.md).\n');
            await writeFile(context_path, 'Project reference.');
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => ['http://proxy.invalid:1000'],
                close: async () => undefined
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'Chinese'
            } as const;
            let first_run_calls = 0;
            const first_run_markers = new Set<string>();
            const first_gateway: TranslationGateway = {
                translate_segments: async ({ user_prompt }) => {
                    first_run_calls += 1;
                    const segments = prompt_segments(user_prompt);
                    for (const segment of segments) {
                        for (const marker of segment.match(/⟪SWEEP_[^⟫]+⟫/gu) ?? []) first_run_markers.add(marker);
                    }
                    if (first_run_calls === 1) {
                        return {
                            translated_segments: segments.map((segment, index) => index === 1
                                ? segment.replace('First instruction', '第一条指令')
                                : index === 2 ? segment.replace(/⟪SWEEP_[^⟫]+⟫/u, '') : segment),
                            attempts: 1
                        };
                    }
                    return { translated_segments: [segments[0]?.replace(/⟪SWEEP_[^⟫]+⟫/u, '') ?? ''], attempts: 1 };
                }
            };

            const failed = await run_translation({ options, catalog, gateway: first_gateway, abort_signal: new AbortController().signal });
            const state_path = resolve(destination_root, '.translation-state.json');
            const state_after_failure = JSON.parse(await readFile(state_path, 'utf8')) as {
                readonly entries: Record<string, { readonly checkpoint?: { readonly completed_units: Record<string, unknown> } }>;
            };

            expect(failed).toMatchObject({ completed: 0, failed: 1 });
            expect(first_run_calls).toBe(3);
            expect(Object.keys(state_after_failure.entries['one.md']?.checkpoint?.completed_units ?? {})).toEqual(['0', '1']);
            expect(await Bun.file(resolve(destination_root, 'one.md')).exists()).toBe(false);

            let resumed_calls = 0;
            const resumed_markers = new Set<string>();
            const resumed_gateway: TranslationGateway = {
                translate_segments: async ({ user_prompt }) => {
                    resumed_calls += 1;
                    const segments = prompt_segments(user_prompt);
                    for (const segment of segments) {
                        for (const marker of segment.match(/⟪SWEEP_[^⟫]+⟫/gu) ?? []) resumed_markers.add(marker);
                    }
                    return { translated_segments: segments.map((segment) => segment.replace('Second', '第二')), attempts: 1 };
                }
            };
            const resumed = await run_translation({ options, catalog, gateway: resumed_gateway, abort_signal: new AbortController().signal });
            expect(resumed).toMatchObject({ completed: 1, failed: 0 });
            expect(resumed_calls).toBe(1);
            expect(Array.from(resumed_markers)).not.toEqual(Array.from(first_run_markers));
            expect(await readFile(resolve(destination_root, 'one.md'), 'utf8')).toContain('第一条指令');
            expect(await readFile(resolve(destination_root, 'one.md'), 'utf8')).toContain('第二 [guide](guide.md).');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('uses a dynamic output cap instead of reserving the model maximum from the input budget', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-budget-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'one.md'), 'A short source page.\n');
            await writeFile(context_path, 'Smoothieware project reference.');
            let proxy_samples = 0;
            let gateway_calls = 0;
            let maximum_output_limit = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => ({ ...test_target, max_output_tokens: 31_000 }),
                sample_paid_proxy_urls: async () => { proxy_samples += 1; return ['http://proxy.invalid:1000']; },
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async ({ maximum_output_tokens, user_prompt }) => {
                    gateway_calls += 1;
                    maximum_output_limit = maximum_output_tokens;
                    return { translated_segments: prompt_segments(user_prompt), attempts: 1 };
                }
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'Chinese'
            } as const;

            const result = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(proxy_samples).toBe(1);
            expect(gateway_calls).toBe(1);
            expect(maximum_output_limit).toBeGreaterThan(512);
            expect(maximum_output_limit).toBeLessThan(31_000);
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('blocks a full page that cannot fit the reference-context cap before paid-proxy sampling', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-translation-full-context-budget-test-'));
        try {
            const source_root = resolve(temporary_root, 'docs');
            const destination_root = resolve(temporary_root, 'translations/zh/docs');
            const context_path = resolve(temporary_root, 'project.md');
            await mkdir(source_root, { recursive: true });
            await writeFile(resolve(source_root, 'oversized.md'), `${'source prose '.repeat(6_000)}\n`);
            await writeFile(context_path, 'Project reference.');
            let proxy_samples = 0;
            let gateway_calls = 0;
            const catalog: ProxySource = {
                resolve_stepfun_target: async () => test_target,
                sample_paid_proxy_urls: async () => { proxy_samples += 1; return ['http://proxy.invalid:1000']; },
                close: async () => undefined
            };
            const gateway: TranslationGateway = {
                translate_segments: async () => { gateway_calls += 1; return { translated_segments: [], attempts: 1 }; }
            };
            const options = {
                source_root, destination_root, project_context_path: context_path, concurrency: 1,
                context_window_tokens: 32_000, overwrite: false, dry_run: false, target_language: 'Chinese'
            } as const;

            const result = await run_translation({ options, catalog, gateway, abort_signal: new AbortController().signal });
            const failures = JSON.parse(await readFile(resolve(destination_root, '.translation-failures.json'), 'utf8')) as {
                readonly entries: Record<string, { readonly category: string; readonly message: string }>;
            };

            expect(result).toMatchObject({ completed: 0, failed: 1 });
            expect(proxy_samples).toBe(0);
            expect(gateway_calls).toBe(0);
            expect(failures.entries['oversized.md']).toMatchObject({ category: 'prompt-budget' });
            expect(failures.entries['oversized.md']?.message).toContain('the 70 percent context cap');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });
});
