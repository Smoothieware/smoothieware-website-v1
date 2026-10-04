import { homedir } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { run_criticism, type CriticismOptions } from './criticism';
import { collect_style_sources } from './criticism_style';
import { KiloGatewayClient } from './kilo_gateway';
import { TOP_LANGUAGES, find_language, type TranslationLanguage } from './languages';
import { MoneyCatalog } from './money_catalog';
import type { RunStats } from './types';

const project_root = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const MONEY_MONGODB_URI = 'mongodb://127.0.0.1:27017/money';
const translations_root = '/home/arthur/dev/smoothieware/translations';
const DEFAULT_STYLE_ROOT = resolve(homedir(), 'dev');

interface CliOptions {
    readonly source_root: string;
    readonly output_root: string;
    readonly destination_override?: string;
    readonly project_context_path: string;
    readonly style_root: string;
    readonly style_sample_count: number;
    readonly style_seed?: string;
    readonly concurrency: number;
    readonly context_window_tokens?: number;
    readonly dry_run: boolean;
    readonly force: boolean;
    readonly selected_language?: TranslationLanguage;
}

/** Parse and validate the review command's flags before opening the Money catalog. */
function parse_options(arguments_list: readonly string[]): CliOptions | null {
    const values = new Map<string, string>();
    const flags = new Set<string>();
    const value_flags = new Set(['--source', '--output-root', '--destination', '--project-context', '--style-root', '--style-count', '--style-seed', '--language', '--concurrency', '--context-tokens']);
    for (let index = 0; index < arguments_list.length; index += 1) {
        const flag = arguments_list[index];
        if (flag === undefined) continue;
        if (flag === '--help' || flag === '--dry-run' || flag === '--force') { flags.add(flag); continue; }
        const value = arguments_list[index + 1];
        if (!value_flags.has(flag) || value === undefined || value.startsWith('--') || values.has(flag)) throw new Error(`Invalid argument near ${flag}.`);
        values.set(flag, value);
        index += 1;
    }
    if (flags.has('--help')) { print_help(); return null; }
    const concurrency = exact_integer(values.get('--concurrency') ?? '4', '--concurrency', 1, 12);
    const style_sample_count = exact_integer(values.get('--style-count') ?? '5', '--style-count', 1, 20);
    if (values.get('--style-seed') === '') throw new Error('--style-seed must not be empty.');
    const context_value = values.get('--context-tokens') ?? process.env.SMOOTHIEWARE_TRANSLATION_CONTEXT_TOKENS;
    const context_window_tokens = context_value === undefined ? undefined : exact_integer(context_value, '--context-tokens', 10_000, Number.MAX_SAFE_INTEGER);
    const selected_name = values.get('--language');
    const selected_language = selected_name === undefined ? undefined : find_language(selected_name);
    if (selected_name !== undefined && selected_language === undefined) throw new Error(`Unknown --language "${selected_name}".`);
    if (values.has('--destination') && selected_language === undefined) throw new Error('--destination requires --language.');
    return {
        source_root: resolve(values.get('--source') ?? resolve(project_root, 'docs')),
        output_root: resolve(values.get('--output-root') ?? translations_root),
        destination_override: values.has('--destination') ? resolve(values.get('--destination') ?? '') : undefined,
        project_context_path: resolve(values.get('--project-context') ?? resolve(project_root, 'README.md')),
        style_root: resolve(values.get('--style-root') ?? DEFAULT_STYLE_ROOT),
        style_sample_count, style_seed: values.get('--style-seed'), concurrency, context_window_tokens,
        dry_run: flags.has('--dry-run'), force: flags.has('--force'), selected_language
    };
}

/** Reject partial, fractional, and out-of-range CLI integers. */
function exact_integer(value: string, flag: string, minimum: number, maximum: number): number {
    if (!/^\d+$/u.test(value)) throw new Error(`${flag} must be an integer from ${minimum} to ${maximum}.`);
    const parsed = Number(value);
    if (!Number.isSafeInteger(parsed) || parsed < minimum || parsed > maximum) throw new Error(`${flag} must be an integer from ${minimum} to ${maximum}.`);
    return parsed;
}

/** Print the second pass usage without connecting to Money or changing files. */
function print_help(): void {
    process.stdout.write([
        'Smoothieware translation criticism and fixing pass',
        '  bun run src/translation/criticism_cli.ts [options]',
        '  Default: review existing translated Markdown for 29 non-English languages in translator rank order',
        '  --source PATH          English Markdown tree (default: repository docs/)',
        '  --output-root PATH     Translation base (default: ~/dev/smoothieware/translations)',
        '  --destination PATH     Exact translated docs directory for a single --language',
        '  --project-context PATH Smoothieware summary (default: repository README.md)',
        '  --style-root PATH      Search recursively for prompts.md (default: ~/dev)',
        '  --style-count N        Random style files per page (default: 5; range 1..20)',
        '  --style-seed TEXT      Reproducible style sample selection; generated and retained by default',
        '  --language NAME|CODE   Review one language (otherwise all 29 in rank order)',
        '  --concurrency N        Parallel pages within a language (default: 4; range 1..12)',
        '  --context-tokens N     Verified model context window override',
        '  --force                Review again even when a matching review manifest exists',
        '  --dry-run              Inventory existing translations without editing pages',
        '  --help                 Show this help',
        ''
    ].join('\n'));
}

/** Run languages sequentially while closing the shared catalog on every exit path. */
async function main(): Promise<void> {
    let cli_options: CliOptions | null;
    try {
        cli_options = parse_options(Bun.argv.slice(2));
    } catch (error: unknown) {
        process.stderr.write(`${JSON.stringify({ type: 'error', message: safe_error(error) })}\n`);
        process.exitCode = 2;
        return;
    }
    if (cli_options === null) return;
    const abort_controller = new AbortController();
    const stop = (): void => abort_controller.abort();
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
    let catalog: MoneyCatalog | undefined;
    try {
        catalog = await MoneyCatalog.connect(MONEY_MONGODB_URI);
        const style_sources = await collect_style_sources(cli_options.style_root);
        const languages = cli_options.selected_language === undefined ? TOP_LANGUAGES : [cli_options.selected_language];
        const totals: RunStats = { completed: 0, skipped: 0, blocked: 0, failed: 0, active: 0, total: 0 };
        let languages_processed = 0;
        let languages_with_errors = 0;
        for (const [language_index, language] of languages.entries()) {
            if (abort_controller.signal.aborted) break;
            const destination_root = cli_options.destination_override ?? resolve(cli_options.output_root, language.code, 'docs');
            const options: CriticismOptions = {
                source_root: cli_options.source_root, destination_root,
                project_context_path: cli_options.project_context_path,
                style_root: cli_options.style_root, style_sample_count: cli_options.style_sample_count,
                style_seed: cli_options.style_seed, concurrency: cli_options.concurrency,
                context_window_tokens: cli_options.context_window_tokens,
                target_language: language.name, target_language_code: language.code,
                dry_run: cli_options.dry_run, force: cli_options.force
            };
            process.stdout.write(`${JSON.stringify({ type: 'language_start', index: language_index + 1, total_languages: languages.length, rank: language.rank, code: language.code, language: language.name, destination_root })}\n`);
            try {
                const stats = await run_criticism({ options, catalog, gateway: new KiloGatewayClient(), abort_signal: abort_controller.signal, style_sources });
                totals.completed += stats.completed;
                totals.skipped += stats.skipped;
                totals.blocked += stats.blocked;
                totals.failed += stats.failed;
                totals.total += stats.total;
                languages_processed += 1;
                if (stats.failed > 0 || stats.blocked > 0) languages_with_errors += 1;
                process.stdout.write(`${JSON.stringify({ type: 'language_summary', code: language.code, language: language.name, ...stats })}\n`);
            } catch (error: unknown) {
                totals.failed += 1;
                languages_processed += 1;
                languages_with_errors += 1;
                process.stderr.write(`${JSON.stringify({ type: 'language_error', code: language.code, language: language.name, message: safe_error(error) })}\n`);
            }
        }
        process.stdout.write(`${JSON.stringify({ type: 'summary', languages_requested: languages.length, languages_processed, languages_with_errors, ...totals })}\n`);
        if (totals.failed > 0 || totals.blocked > 0 || abort_controller.signal.aborted) process.exitCode = 1;
    } catch (error: unknown) {
        process.stderr.write(`${JSON.stringify({ type: 'error', message: safe_error(error) })}\n`);
        process.exitCode = 1;
    } finally {
        if (catalog !== undefined) await catalog.close().catch(() => undefined);
        process.removeListener('SIGINT', stop);
        process.removeListener('SIGTERM', stop);
    }
}

/** Bound and redact unexpected provider or path failures in the top-level JSONL stream. */
function safe_error(error: unknown): string {
    const message = error instanceof Error ? error.message : 'unexpected error';
    return message.replace(/(?:mongodb(?:\+srv)?|https?|socks5?):\/\/[^\s]+/giu, '[route redacted]').slice(0, 500);
}

await main();
