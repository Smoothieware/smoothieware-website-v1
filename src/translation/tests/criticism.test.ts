import { describe, expect, test } from 'bun:test';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { run_criticism, type CriticismOptions } from '../criticism';
import { fingerprint_style_samples, select_style_samples } from '../criticism_style';
import type { ProxySource, TranslationGateway, TranslationTarget } from '../types';

const target: TranslationTarget = {
    key: 'fake-model', api_id: 'fake-model', provider_base_url: 'https://unused.invalid',
    provider_api_key: '', max_output_tokens: 4096, context_window_tokens: 32000
};

interface Fixture {
    readonly root: string;
    readonly source_root: string;
    readonly destination_root: string;
    readonly style_root: string;
    readonly project_context_path: string;
    readonly options: CriticismOptions;
    readonly catalog: ProxySource;
}

/** Create isolated source, translation, and style trees for a review run. */
async function fixture(): Promise<Fixture> {
    const root = await mkdtemp(resolve(tmpdir(), 'smoothieware-criticism-'));
    const source_root = resolve(root, 'source');
    const destination_root = resolve(root, 'translations');
    const style_root = resolve(root, 'style');
    const project_context_path = resolve(root, 'project.md');
    await mkdir(source_root);
    await mkdir(destination_root);
    await mkdir(style_root);
    await writeFile(project_context_path, 'Smoothieware controls CNC machines using G-code.');
    await writeFile(resolve(style_root, 'prompts.md'), 'Talk to people plainly. Keep the small quirks of the original voice.');
    const catalog: ProxySource = {
        resolve_stepfun_target: async () => target,
        sample_paid_proxy_urls: async () => ['http://proxy.invalid:1000'],
        close: async () => undefined
    };
    return {
        root, source_root, destination_root, style_root, project_context_path, catalog,
        options: {
            source_root, destination_root, style_root, project_context_path,
            target_language: 'French', concurrency: 2, dry_run: false, force: false,
            style_sample_count: 1, style_seed: 'fixed-test-seed', context_window_tokens: 32000
        }
    };
}

/** Return a fake review response, with the supplied source markers intact. */
function gateway_for(rewrite: (user_prompt: string) => readonly string[] | Promise<readonly string[]>): TranslationGateway {
    return {
        translate_segments: async ({ user_prompt }) => ({ translated_segments: await rewrite(user_prompt), attempts: 1 })
    };
}

/** Decode the source units sent to the fake gateway. */
function english_units(prompt: string): string[] {
    const match = prompt.match(/<active-section>([^]*?)<\/active-section>/u);
    if (match?.[1] === undefined) throw new Error('missing English units');
    const active_section = JSON.parse(match[1]
        .replace(/&quot;/gu, '"')
        .replace(/&apos;/gu, "'")
        .replace(/&gt;/gu, '>')
        .replace(/&lt;/gu, '<')
        .replace(/&amp;/gu, '&')) as { readonly units: readonly { readonly english: string }[] };
    return active_section.units.map((unit) => unit.english);
}

/** Extract a page path from the XML prompt's escaped data element. */
function prompt_page_path(prompt: string): string | undefined {
    return prompt.match(/<target-source-page>([^]*?)<\/target-source-page>/u)?.[1];
}

describe('criticism and fixing runner', () => {
    test('reviews only existing pages in source order, reconstructs the page, and resumes from its manifest', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Hello world.\n');
            await writeFile(resolve(setup.source_root, 'b.md'), 'Second page.\n');
            await writeFile(resolve(setup.source_root, 'c.md'), 'Still missing.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Bonjour monde.\n');
            await writeFile(resolve(setup.destination_root, 'b.md'), 'Deuxième page.\n');
            const seen: string[] = [];
            const gateway = gateway_for((prompt) => {
                expect(prompt).toContain('Smoothieware controls CNC machines');
                expect(prompt).toContain('Talk to people plainly');
                const path = prompt_page_path(prompt);
                if (path === undefined) throw new Error('missing page path');
                if (path === 'a.md') expect(prompt).toContain('Bonjour monde.');
                seen.push(path);
                return english_units(prompt).map((unit) => unit.replace('Hello world.', 'Bonjour le monde.').replace('Second page.', 'Deuxième page corrigée.'));
            });
            const first = await run_criticism({ options: { ...setup.options, concurrency: 1 }, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(first).toMatchObject({ completed: 2, skipped: 0, failed: 0, total: 2 });
            expect(seen).toEqual(['a.md', 'b.md']);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Bonjour le monde.\n');
            expect(await readFile(resolve(setup.destination_root, 'b.md'), 'utf8')).toBe('Deuxième page corrigée.\n');
            expect(await readFile(resolve(setup.destination_root, 'c.md'), 'utf8').catch(() => 'missing')).toBe('missing');
            const second = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(second).toMatchObject({ completed: 0, skipped: 2, failed: 0, total: 2 });
            expect(seen).toEqual(['a.md', 'b.md']);
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('sends complete escaped page context and a separate markup-protected active section within the request cap', async () => {
        const setup = await fixture();
        try {
            const source = '# Setup\nUse [the board](https://example.test/board).\n\n## Wiring\nConnect the cable.\n';
            const translated = '# Configuration\nUtilisez [la carte](https://example.test/board).\n\n## Câblage\nBranchez le câble.\n';
            await writeFile(resolve(setup.source_root, 'a.md'), source);
            await writeFile(resolve(setup.destination_root, 'a.md'), translated);
            const large_target = { ...target, max_output_tokens: 256_000, context_window_tokens: 262_144 };
            const catalog = { ...setup.catalog, resolve_stepfun_target: async () => large_target };
            const calls: Array<{ prompt: string; maximum_output_tokens: number }> = [];
            const gateway: TranslationGateway = {
                translate_segments: async (request) => {
                    calls.push({ prompt: request.user_prompt, maximum_output_tokens: request.maximum_output_tokens });
                    return { translated_segments: english_units(request.user_prompt).map((unit) =>
                        unit.replace('Setup', 'Configuration').replace('the board', 'la carte')
                            .replace('Wiring', 'Câblage').replace('Connect', 'Branchez').replace('the cable', 'le câble')),
                        attempts: 1 };
                }
            };
            const result = await run_criticism({ options: setup.options, catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(calls.length).toBeGreaterThan(0);
            expect(calls).toHaveLength(2);
            for (const call of calls) {
                expect(call.prompt).toContain('<full-english-page>');
                expect(call.prompt).toContain('[the board](https://example.test/board)');
                expect(call.prompt).toContain('<full-translated-page>');
                expect(call.prompt).toContain('<active-section>');
                expect(english_units(call.prompt).join('')).not.toContain('https://example.test/board');
                expect(call.prompt.match(/<active-section>([^]*?)<\/active-section>/u)?.[1]).not.toContain('⟪SWEEP_');
                expect(call.maximum_output_tokens).toBeLessThanOrEqual(Math.floor(262_144 * 0.9));
                expect(call.maximum_output_tokens).toBeLessThan(large_target.max_output_tokens);
            }
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('retries only the invalid unit and keeps the valid unit from the first section response', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'First source.\nSecond source.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Première source.\nDeuxième source.\n');
            const requested_units: string[][] = [];
            const gateway = gateway_for((prompt) => {
                const units = english_units(prompt);
                requested_units.push(units);
                if (requested_units.length === 1) {
                    return units.map((unit, index) => index === 0 ? unit.replace('First source.', 'Première source.') : '⟪SWEEP_INVALID_1⟫');
                }
                expect(units).toHaveLength(1);
                expect(units[0]).toContain('Second source.');
                return units.map((unit) => unit.replace('Second source.', 'Deuxième source corrigée.'));
            });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(requested_units).toHaveLength(2);
            expect(requested_units[1]).toHaveLength(1);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Première source.\nDeuxième source corrigée.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('blocks pages whose complete bilingual context exceeds 70 percent of the 90 percent request cap', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), `${'A'.repeat(10_000)}\n`);
            await writeFile(resolve(setup.destination_root, 'a.md'), `${'字'.repeat(10_000)}\n`);
            let calls = 0;
            const gateway = gateway_for((prompt) => { calls += 1; return english_units(prompt); });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            const manifest = JSON.parse(await readFile(resolve(setup.destination_root, '.criticism-failures.json'), 'utf8')) as {
                entries: Record<string, { readonly category: string; readonly message: string }>;
            };

            expect(result).toMatchObject({ completed: 0, failed: 1 });
            expect(calls).toBe(0);
            expect(manifest.entries['a.md']?.category).toBe('prompt-budget');
            expect(manifest.entries['a.md']?.message).toContain('70 percent context cap');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('uses well-formed XML serialization for untrusted page and style text', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Use <script>alert("x")</script> & continue.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Utilisez <script>alert("x")</script> & continuez.\n');
            const style_sources = [{ path: 'style/prompts.md', text: 'Keep <voice> calm & direct.' }];
            const gateway = gateway_for((prompt) => {
                expect(prompt).toContain('&lt;script&gt;');
                expect(prompt).toContain('&amp;');
                expect(prompt).toContain('&lt;voice&gt;');
                expect(prompt).not.toContain('<script>alert');
                return english_units(prompt).map((unit) => unit.replace('continue.', 'continuez.'));
            });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal, style_sources });
            expect(result).toMatchObject({ completed: 1, failed: 0 });
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('keeps the existing file when required link markers are missing', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Read [the guide](guide.md).\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Lisez [le guide](guide.md).\n');
            const gateway = gateway_for(() => ['Bonjour']);
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 0, failed: 1 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Lisez [le guide](guide.md).\n');
            const manifest = JSON.parse(await readFile(resolve(setup.destination_root, '.criticism-state.json'), 'utf8')) as { style_seed: string; entries: Record<string, unknown> };
            expect(manifest.style_seed).toBe('fixed-test-seed');
            expect(manifest.entries['a.md']).toBeUndefined();
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('refuses replacement when another writer changes a translated file during review', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Hello world.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Bonjour monde.\n');
            const gateway = gateway_for(async (prompt) => {
                await writeFile(resolve(setup.destination_root, 'a.md'), 'User changed this.\n');
                return english_units(prompt).map((unit) => unit.replace('Hello world.', 'Version corrigée.'));
            });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 0, failed: 1 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('User changed this.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('repairs broken inline markup using the English template', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), '<div>Use [this](https://example.com).</div>\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), '<div>Utilisez [ceci](https://wrong.invalid).</div>\n');
            const gateway = gateway_for((prompt) => english_units(prompt).map((unit) => unit.replace('Use ', 'Utilisez ').replace('this', 'ceci')));
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('<div>Utilisez [ceci](https://example.com).</div>\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('removes literal Markdown links echoed alongside their protected markers', async () => {
        const setup = await fixture();
        try {
            const destination = 'http://groups.google.com/group/smoothie-dev';
            await writeFile(resolve(setup.source_root, 'a.md'), `- [Dev Mailing list](${destination}) - Development discussions and contributions\n`);
            await writeFile(resolve(setup.destination_root, 'a.md'), `- [开发邮件列表](${destination}) - 开发讨论与贡献\n`);
            const gateway = gateway_for((prompt) => english_units(prompt).map((unit) =>
                unit.replace('Dev Mailing list', `[开发邮件列表](${destination})`)
                    .replace('Development discussions and contributions', '开发讨论与贡献')
            ));
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe(`- [开发邮件列表](${destination}) - 开发讨论与贡献\n`);
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('repairs changed protected heading, HTML, code, and blank-line layout when prose units align', async () => {
        const setup = await fixture();
        try {
            const source = '# Hello\n<p>Read this</p>\n\n```gcode\nG0 X1\n```\n';
            const translated = '## Bonjour\n<p>Lisez ceci\n\n\n```gcode\nG0 X2\n```\n';
            await writeFile(resolve(setup.source_root, 'a.md'), source);
            await writeFile(resolve(setup.destination_root, 'a.md'), translated);
            const gateway = gateway_for((prompt) => english_units(prompt).map((unit) =>
                unit.replace('Hello', 'Bonjour').replace('Read this', 'Lisez ceci')
            ));
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('# Bonjour\n<p>Lisez ceci</p>\n\n```gcode\nG0 X1\n```\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('retries a failed later section twice and keeps an earlier successful section checkpoint', async () => {
        const setup = await fixture();
        try {
            const english = ['# Part 1', ...Array.from({ length: 4 }, (_unused, index) => `English line ${index + 1}.`), '## Part 2', ...Array.from({ length: 4 }, (_unused, index) => `English line ${index + 5}.`), '## Part 3', ...Array.from({ length: 4 }, (_unused, index) => `English line ${index + 9}.`)].join('\n') + '\n';
            const translated = english.replaceAll('English', 'French');
            await writeFile(resolve(setup.source_root, 'a.md'), english);
            await writeFile(resolve(setup.destination_root, 'a.md'), translated);
            const smaller_target = { ...target, max_output_tokens: 2_048 };
            const catalog = { ...setup.catalog, resolve_stepfun_target: async () => smaller_target };
            const chunk_starts: string[] = [];
            const seen = new Map<string, number>();
            const gateway = gateway_for((prompt) => {
                const units = english_units(prompt);
                const start = units[0] ?? '';
                chunk_starts.push(start);
                const attempts = (seen.get(start) ?? 0) + 1;
                seen.set(start, attempts);
                if (seen.size === 2 && attempts <= 2) throw new Error('transient paid route failure');
                return units.map((unit) => unit.replace('English', 'French corrected'));
            });
            const result = await run_criticism({ options: setup.options, catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(seen.size).toBeGreaterThan(1);
            expect(seen.get(chunk_starts[0] ?? '')).toBe(1);
            expect(seen.get(chunk_starts.find((start) => seen.get(start) === 3) ?? '')).toBe(3);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toContain('French corrected line 12.');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('resumes successful sections and leaves the page intact when a later section fails on all attempts', async () => {
        const setup = await fixture();
        try {
            const english = ['# Part 1', ...Array.from({ length: 4 }, (_unused, index) => `English line ${index + 1}.`), '## Part 2', ...Array.from({ length: 8 }, (_unused, index) => `English line ${index + 5}.`)].join('\n') + '\n';
            const translated = english.replaceAll('English', 'French');
            await writeFile(resolve(setup.source_root, 'a.md'), english);
            await writeFile(resolve(setup.destination_root, 'a.md'), translated);
            const smaller_target = { ...target, max_output_tokens: 2_048 };
            const catalog = { ...setup.catalog, resolve_stepfun_target: async () => smaller_target };
            const seen = new Map<string, number>();
            let first_chunk_start: string | undefined;
            let failed_chunk_start: string | undefined;
            const gateway = gateway_for((prompt) => {
                const units = english_units(prompt);
                const start = units[0] ?? '';
                first_chunk_start ??= start;
                seen.set(start, (seen.get(start) ?? 0) + 1);
                if (start !== first_chunk_start) {
                    failed_chunk_start = start;
                    throw new Error('persistent paid route failure');
                }
                return units.map((unit) => unit.replace('English', 'French corrected'));
            });
            const result = await run_criticism({ options: setup.options, catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 0, failed: 1, total: 1 });
            expect(first_chunk_start).toBeDefined();
            expect(failed_chunk_start).toBeDefined();
            expect(seen.get(first_chunk_start ?? '')).toBe(1);
            expect(seen.get(failed_chunk_start ?? '')).toBe(3);
            expect(seen.size).toBe(2);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe(translated);
            const checkpoint_files = await readdir(resolve(setup.destination_root, '.criticism-checkpoints'));
            expect(checkpoint_files).toHaveLength(1);
            const checkpoint = JSON.parse(await readFile(resolve(setup.destination_root, '.criticism-checkpoints', checkpoint_files[0] ?? ''), 'utf8')) as { sections: Record<string, unknown> };
            expect(Object.keys(checkpoint.sections)).toEqual(['0']);
            const manifest = JSON.parse(await readFile(resolve(setup.destination_root, '.criticism-state.json'), 'utf8')) as { entries: Record<string, unknown> };
            expect(manifest.entries['a.md']).toBeUndefined();

            const resumed_starts: string[] = [];
            const resumed_gateway = gateway_for((prompt) => {
                const units = english_units(prompt);
                resumed_starts.push(units[0] ?? '');
                return units.map((unit) => unit.replace('English', 'French corrected'));
            });
            const resumed = await run_criticism({ options: setup.options, catalog, gateway: resumed_gateway, abort_signal: new AbortController().signal });
            expect(resumed).toMatchObject({ completed: 1, failed: 0 });
            expect(resumed_starts).toHaveLength(1);
            expect(resumed_starts[0]).toBe(failed_chunk_start);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toContain('French corrected line 1.');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('chooses stable random style passages and fingerprints their actual contents', () => {
        const sources = Array.from({ length: 8 }, (_unused, index) => ({ path: `project-${index}/prompts.md`, text: `Voice sample ${index}. `.repeat(150) }));
        const selected = select_style_samples({ sources, count: 5, seed: 'stable-seed', page_path: 'guide.md' });
        expect(selected).toHaveLength(5);
        expect(selected).toEqual(select_style_samples({ sources, count: 5, seed: 'stable-seed', page_path: 'guide.md' }));
        expect(fingerprint_style_samples(selected)).not.toBe(fingerprint_style_samples([{ ...selected[0]!, excerpt: 'edited' }, ...selected.slice(1)]));
    });

    test('fits five multilingual style samples into the dynamic request budget', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), `# Source sentence.\n<!-- ${'x'.repeat(400)} -->\n`);
            await writeFile(resolve(setup.destination_root, 'a.md'), `# Translated sentence.\n<!-- ${'字'.repeat(250)} -->\n`);
            await writeFile(setup.project_context_path, 'Smoothieware project context. '.repeat(120));
            const large_output_target = { ...target, max_output_tokens: 256_000, context_window_tokens: 262_144 };
            const catalog = { ...setup.catalog, resolve_stepfun_target: async () => large_output_target };
            const style_sources = Array.from({ length: 5 }, (_unused, index) => ({
                path: `author-${index}/prompts.md`, text: '書'.repeat(1_600)
            }));
            let gateway_calls = 0;
            const gateway = gateway_for((prompt) => {
                gateway_calls += 1;
                expect(english_units(prompt)[0]).toContain('[[SW_MARK_1]]');
                expect(english_units(prompt)[0]).not.toContain('[[SW_MARK_2]]');
                return english_units(prompt).map((unit) => unit
                    .replace('[[SW_MARK_1]]', '[[SW_MARK_1]]## ')
                    .replace('Source sentence.', 'Translated sentence.'));
            });
            const result = await run_criticism({
                options: { ...setup.options, style_sample_count: 5, context_window_tokens: 262_144 },
                catalog, gateway, abort_signal: new AbortController().signal, style_sources
            });
            expect(result).toMatchObject({ completed: 1, failed: 0, total: 1 });
            expect(gateway_calls).toBeGreaterThan(0);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8'))
                .toBe(`# Translated sentence.\n<!-- ${'x'.repeat(400)} -->\n`);
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('rejects line misalignment without contacting the gateway or changing the translation', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'One line.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Une ligne.\nExtra line.\n');
            let calls = 0;
            const gateway = gateway_for((prompt) => { calls += 1; return english_units(prompt); });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 0, blocked: 1, failed: 0 });
            expect(calls).toBe(0);
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Une ligne.\nExtra line.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('rechecks the English source before replacement and leaves the translation intact', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Original advice.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Conseil original.\n');
            const gateway = gateway_for(async (prompt) => {
                await writeFile(resolve(setup.source_root, 'a.md'), 'Updated advice.\n');
                return english_units(prompt).map((unit) => unit.replace('Original advice.', 'Conseil corrigé.'));
            });
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 0, failed: 1 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Conseil original.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('re-reviews when sampled style text changes and when force is selected', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Hello.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Bonjour.\n');
            let calls = 0;
            const gateway = gateway_for((prompt) => { calls += 1; return english_units(prompt).map((unit) => unit.replace('Hello.', 'Bonjour.')); });
            const run = async (force = false) => run_criticism({ options: { ...setup.options, force }, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect((await run()).completed).toBe(1);
            expect((await run()).skipped).toBe(1);
            await writeFile(resolve(setup.style_root, 'prompts.md'), 'A revised, much more abrupt author style sample.');
            expect((await run()).completed).toBe(1);
            expect((await run(true)).completed).toBe(1);
            expect(calls).toBe(3);
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('dry-run inventories translated pages without calling the gateway or creating a manifest', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'English.\n');
            await writeFile(resolve(setup.source_root, 'b.md'), 'Missing.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Français.\n');
            let calls = 0;
            const gateway = gateway_for((prompt) => { calls += 1; return english_units(prompt); });
            const result = await run_criticism({ options: { ...setup.options, dry_run: true }, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ total: 1, completed: 0, failed: 0 });
            expect(calls).toBe(0);
            expect(await readFile(resolve(setup.destination_root, '.criticism-state.json'), 'utf8').catch(() => 'missing')).toBe('missing');
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Français.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('returns an empty run when a language has no translated directory yet', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'English.\n');
            const destination_root = resolve(setup.root, 'not-created');
            const gateway = gateway_for(() => { throw new Error('Gateway must not be called.'); });
            const result = await run_criticism({ options: { ...setup.options, destination_root }, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ total: 0, completed: 0, skipped: 0, failed: 0 });
            expect(await readFile(resolve(destination_root, '.criticism-state.json'), 'utf8').catch(() => 'missing')).toBe('missing');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('recovers a page lock left by a process that no longer exists', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Hello.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Bonjour.\n');
            await writeFile(resolve(setup.destination_root, 'a.md.criticism-lock'), JSON.stringify({ pid: 99999999, nonce: 'stale' }));
            const gateway = gateway_for((prompt) => english_units(prompt).map((unit) => unit.replace('Hello.', 'Bonjour corrigé.')));
            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });
            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Bonjour corrigé.\n');
            expect(await readFile(resolve(setup.destination_root, 'a.md.criticism-lock'), 'utf8').catch(() => 'missing')).toBe('missing');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('adds bounded repair guidance after a rejected response and retries the same chunk', async () => {
        const setup = await fixture();
        try {
            await writeFile(resolve(setup.source_root, 'a.md'), 'Hello.\n');
            await writeFile(resolve(setup.destination_root, 'a.md'), 'Bonjour.\n');
            const prompts: string[] = [];
            const gateway = gateway_for((prompt) => {
                prompts.push(prompt);
                if (prompts.length === 1) return ['⟪SWEEP_INVALID_1⟫'];
                return english_units(prompt).map((unit) => unit.replace('Hello.', 'Salut.'));
            });

            const result = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway, abort_signal: new AbortController().signal });

            expect(result).toMatchObject({ completed: 1, failed: 0 });
            expect(prompts).toHaveLength(2);
            expect(prompts[1]).toContain('failed validation');
            expect(prompts[1]).toContain('unit 1');
            const failure_manifest = JSON.parse(await readFile(resolve(setup.destination_root, '.criticism-failures.json'), 'utf8')) as {
                entries: Record<string, { readonly category: string; readonly chunk_index: number; readonly unit_index: number; readonly retry_recovered: boolean; readonly resolved: boolean }>;
            };
            expect(failure_manifest.entries['a.md']).toMatchObject({
                category: 'response-validation', chunk_index: 1, unit_index: 1,
                retry_recovered: true, resolved: true
            });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Salut.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });

    test('records a failed review safely, preserves the page, then marks failure resolved after a successful rerun', async () => {
        const setup = await fixture();
        try {
            const source = 'Hello.\n';
            const translated = 'Bonjour.\n';
            await writeFile(resolve(setup.source_root, 'a.md'), source);
            await writeFile(resolve(setup.destination_root, 'a.md'), translated);
            const invalid_gateway = gateway_for(() => ['⟪SWEEP_INVALID_1⟫']);
            const failed = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway: invalid_gateway, abort_signal: new AbortController().signal });
            const failure_path = resolve(setup.destination_root, '.criticism-failures.json');
            const failures_after_error = JSON.parse(await readFile(failure_path, 'utf8')) as {
                entries: Record<string, { category: string; attempt_count: number; message: string; chunk_index: number; unit_index: number; resolved: boolean }>;
            };

            expect(failed).toMatchObject({ failed: 1, completed: 0 });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe(translated);
            expect(failures_after_error.entries['a.md']).toMatchObject({
                category: 'response-validation', attempt_count: 3,
                chunk_index: 1, unit_index: 1, resolved: false
            });
            expect(failures_after_error.entries['a.md']?.message).not.toContain('⟪SWEEP_INVALID_1⟫');

            const valid_gateway = gateway_for((prompt) => english_units(prompt).map((unit) => unit.replace('Hello.', 'Salut.')));
            const recovered = await run_criticism({ options: setup.options, catalog: setup.catalog, gateway: valid_gateway, abort_signal: new AbortController().signal });
            const failures_after_recovery = JSON.parse(await readFile(failure_path, 'utf8')) as {
                entries: Record<string, { readonly resolved: boolean }>;
            };

            expect(recovered).toMatchObject({ completed: 1, failed: 0 });
            expect(failures_after_recovery.entries['a.md']).toMatchObject({ resolved: true });
            expect(await readFile(resolve(setup.destination_root, 'a.md'), 'utf8')).toBe('Salut.\n');
        } finally {
            await rm(setup.root, { recursive: true, force: true });
        }
    });
});
