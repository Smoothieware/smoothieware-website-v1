import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { KiloGatewayClient } from './kilo_gateway';
import { MoneyCatalog } from './money_catalog';
import { run_translation } from './runner';
import { TOP_LANGUAGES, find_language, type TranslationLanguage } from './languages';
import type { RunStats, TranslationOptions } from './types';

const project_root = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const MONEY_MONGODB_URI = 'mongodb://127.0.0.1:27017/money';
const translations_root = '/home/arthur/dev/smoothieware/translations';

interface CliOptions {
    readonly source_root: string;
    readonly output_root: string;
    readonly destination_override?: string;
    readonly project_context_path: string;
    readonly concurrency: number;
    readonly context_window_tokens?: number;
    readonly overwrite: boolean;
    readonly dry_run: boolean;
    readonly selected_language?: TranslationLanguage;
}

/** Parse the user-facing command flags with strict validation and documented defaults. */
function parse_options(arguments_list: readonly string[]): CliOptions {
    const values = new Map<string, string>();
    const flags = new Set<string>();
    for (let index = 0; index < arguments_list.length; index += 1) {
        const value = arguments_list[index];
        if (value === undefined) continue;
        if (value === '--overwrite' || value === '--dry-run' || value === '--help') { flags.add(value); continue; }
        const next_value = arguments_list[index + 1];
        if (!value.startsWith('--') || next_value === undefined || next_value.startsWith('--')) throw new Error(`Invalid argument near ${value}.`);
        values.set(value, next_value);
        index += 1;
    }
    if (flags.has('--help')) {
        print_help();
        process.exit(0);
    }
    const concurrency = Number.parseInt(values.get('--concurrency') ?? '4', 10);
    if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 12) throw new Error('--concurrency must be an integer from 1 to 12.');
    const context_tokens_value = values.get('--context-tokens') ?? process.env.SMOOTHIEWARE_TRANSLATION_CONTEXT_TOKENS;
    const context_window_tokens = context_tokens_value === undefined ? undefined : Number.parseInt(context_tokens_value, 10);
    if (context_window_tokens !== undefined && (!Number.isInteger(context_window_tokens) || context_window_tokens < 10_000)) {
        throw new Error('--context-tokens must be an integer of at least 10000.');
    }
    const selected_language_value = values.get('--language');
    const selected_language = selected_language_value === undefined ? undefined : find_language(selected_language_value);
    if (selected_language_value !== undefined && selected_language === undefined) {
        throw new Error(`Unknown --language "${selected_language_value}". Choose a language name or code from the top-30 list.`);
    }
    const destination_override = values.get('--destination');
    if (destination_override !== undefined && selected_language === undefined) {
        throw new Error('--destination requires --language; use --output-root to change the multilingual output base.');
    }
    return {
        source_root: resolve(values.get('--source') ?? `${project_root}/docs`),
        output_root: resolve(values.get('--output-root') ?? translations_root),
        destination_override: destination_override === undefined ? undefined : resolve(destination_override),
        project_context_path: resolve(values.get('--project-context') ?? `${project_root}/README.md`),
        concurrency,
        context_window_tokens,
        overwrite: flags.has('--overwrite'),
        dry_run: flags.has('--dry-run'),
        selected_language
    };
}

/** Print the scoped CLI usage without showing or reading any credentials. */
function print_help(): void {
    process.stdout.write([
        'Smoothieware docs translator',
        '  bun run src/translation/cli.ts [options]',
        '  Default: translate the 29 non-English languages in the top 30 sequentially (Ethnologue 2026 total speakers)',
        '  --source PATH          Markdown tree (default: repository docs/)',
        '  --output-root PATH     Base output directory (default: ~/dev/smoothieware/translations)',
        '  --destination PATH     Exact docs output for a single --language run',
        '  --project-context PATH Project summary source (default: repository README.md)',
        '  --language NAME|CODE   Run one listed language only (otherwise all 29 in rank order)',
        '  --concurrency N        Parallel pages (default: 4; range 1..12)',
        '  --context-tokens N     Verified model context window when not present in Money catalog',
        '  --overwrite            Force retranslation and replacement of existing outputs',
        '  --dry-run              Inventory and validate each language configuration without writing',
        '  --help                 Show this help',
        ''
    ].join('\n'));
}

/** Run the CLI with the local Money connection and guaranteed connection cleanup. */
async function main(): Promise<void> {
    let cli_options: CliOptions;
    try {
        cli_options = parse_options(Bun.argv.slice(2));
    } catch (error: unknown) {
        process.stderr.write(`${error instanceof Error ? error.message : 'Invalid command line.'}\n`);
        process.exitCode = 2;
        return;
    }
    const abort_controller = new AbortController();
    const stop = (): void => abort_controller.abort();
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
    let catalog: MoneyCatalog | undefined;
    try {
        catalog = await MoneyCatalog.connect(MONEY_MONGODB_URI);
        const languages = cli_options.selected_language === undefined ? TOP_LANGUAGES : [cli_options.selected_language];
        const totals: RunStats = { completed: 0, skipped: 0, blocked: 0, failed: 0, active: 0, total: 0 };
        let languages_processed = 0;
        let languages_with_errors = 0;
        for (const [language_index, language] of languages.entries()) {
            if (abort_controller.signal.aborted) break;
            const destination_root = cli_options.destination_override ?? resolve(cli_options.output_root, language.code, 'docs');
            const options: TranslationOptions = {
                source_root: cli_options.source_root,
                destination_root,
                project_context_path: cli_options.project_context_path,
                concurrency: cli_options.concurrency,
                context_window_tokens: cli_options.context_window_tokens,
                overwrite: cli_options.overwrite,
                dry_run: cli_options.dry_run,
                target_language: language.name,
                target_language_code: language.code
            };
            process.stdout.write(`${JSON.stringify({ type: 'language_start', index: language_index + 1, total_languages: languages.length, rank: language.rank, code: language.code, language: language.name, destination_root })}\n`);
            try {
                const stats = await run_translation({ options, catalog, gateway: new KiloGatewayClient(), abort_signal: abort_controller.signal });
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
                process.stderr.write(`${JSON.stringify({ type: 'language_error', code: language.code, language: language.name, message: sanitize_error(error) })}\n`);
            }
        }
        process.stdout.write(`${JSON.stringify({ type: 'summary', languages_requested: languages.length, languages_processed, languages_with_errors, ...totals })}\n`);
        if (totals.failed > 0 || totals.blocked > 0 || abort_controller.signal.aborted) process.exitCode = 1;
    } catch (error: unknown) {
        process.stderr.write(`${JSON.stringify({ type: 'error', message: sanitize_error(error) })}\n`);
        process.exitCode = 1;
    } finally {
        if (catalog !== undefined) await catalog.close().catch(() => undefined);
        process.removeListener('SIGINT', stop);
        process.removeListener('SIGTERM', stop);
    }
}

/** Redact common credential forms in top-level error output. */
function sanitize_error(error: unknown): string {
    const message = error instanceof Error ? error.message : 'unexpected error';
    return message.replace(/(?:mongodb(?:\+srv)?|https?|socks5?):\/\/[^\s]+/giu, '[credential route redacted]').slice(0, 500);
}

await main();
