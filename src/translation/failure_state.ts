/** Bounded failure outcomes shared by the translation and review runners. */

import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const MAXIMUM_DIAGNOSTIC_CAPTURE_BYTES = 8 * 1024 * 1024;

export type FailureCategory = 'source-markup' | 'alignment' | 'prompt-budget' | 'gateway' | 'response-validation' | 'persistence' | 'other';

export interface PageFailureEntry {
    readonly category: FailureCategory;
    readonly message: string;
    readonly source_hash: string;
    readonly input_hash?: string;
    readonly attempt_count: number;
    readonly chunk_index?: number;
    readonly unit_index?: number;
    readonly retry_recovered: boolean;
    readonly resolved: boolean;
    readonly recorded_at: string;
    readonly resolved_at?: string;
}

export interface PageFailureManifest {
    readonly version: 1;
    readonly workflow: 'translation' | 'review';
    readonly target_language: string;
    readonly entries: Record<string, PageFailureEntry>;
}


/** Return a stable empty failure manifest for one destination and workflow. */
export function create_failure_manifest(workflow: PageFailureManifest['workflow'], target_language: string): PageFailureManifest {
    return { version: 1, workflow, target_language, entries: {} };
}

/** Bound and redact external error text before it enters a local run record. */
export function safe_failure_message(error: unknown): string {
    const message = error instanceof Error ? error.message : String(error);
        return message
        .replace(/(?:mongodb(?:\+srv)?|https?|socks5?):\/\/[^\s)]+/giu, '[url]')
        .replace(/\bBearer\s+\S+/giu, 'Bearer [redacted]')
        .replace(/\b(?:sk|key|token)[-_][A-Za-z0-9_-]{12,}\b/giu, '[redacted]')
        .replace(/[\r\n\t]+/gu, ' ')
        .slice(0, 240);
}

/** Extract a one-based page or chunk unit index from a bounded validation diagnostic. */
export function failure_unit_index(error: unknown): number | undefined {
    const message = safe_failure_message(error);
    const match = message.match(/(?:Translation unit|Review unit|chunk unit) (\d+)/u);
    if (match?.[1] === undefined) return undefined;
    const unit_index = Number(match[1]);
    return Number.isInteger(unit_index) && unit_index > 0 ? unit_index : undefined;
}

/** Extract a one-based chunk index from a bounded pipeline diagnostic. */
export function failure_chunk_index(error: unknown): number | undefined {
    const message = safe_failure_message(error);
    const match = message.match(/(?:Review )?chunk (\d+)(?:\/|\b)/iu);
    if (match?.[1] === undefined) return undefined;
    const chunk_index = Number(match[1]);
    return Number.isInteger(chunk_index) && chunk_index > 0 ? chunk_index : undefined;
}

/** Optionally save one rejected response under a private temporary directory for investigation. */
export async function capture_rejected_output(args: {
    readonly relative_path: string;
    readonly chunk_index: number;
    readonly translated_segments: readonly string[];
    readonly validation_error: unknown;
}): Promise<string | undefined> {
    if (process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT !== '1') return undefined;
    const diagnostic = JSON.stringify({
        page: args.relative_path,
        chunk_index: args.chunk_index,
        validation_error: safe_failure_message(args.validation_error),
        translated_segments: args.translated_segments,
        captured_at: new Date().toISOString()
    }, null, 2);
    if (Buffer.byteLength(diagnostic, 'utf8') > MAXIMUM_DIAGNOSTIC_CAPTURE_BYTES) return undefined;
    const directory = join(tmpdir(), `smoothieware-invalid-output-${randomUUID()}`);
    const path = join(directory, 'rejected-response.json');
    await mkdir(directory, { recursive: true, mode: 0o700 });
    await writeFile(path, `${diagnostic}\n`, { encoding: 'utf8', mode: 0o600, flag: 'wx' });
    return path;
}

/** Serialize failure-ledger changes so concurrent workers cannot lose one another's entries. */
export class FailureRecorder {
    private write_tail: Promise<void> = Promise.resolve();

    private constructor(
        private readonly path: string,
        readonly manifest: PageFailureManifest
    ) {}

    /** Load an existing matching ledger or create an in-memory empty ledger. */
    static async load(path: string, workflow: PageFailureManifest['workflow'], target_language: string): Promise<FailureRecorder> {
        try {
            const decoded: unknown = JSON.parse(await readFile(path, 'utf8'));
            if (typeof decoded !== 'object' || decoded === null) throw new Error('Failure manifest is not an object.');
            const candidate = decoded as Partial<PageFailureManifest>;
            if (candidate.version !== 1 || candidate.workflow !== workflow || candidate.target_language !== target_language ||
                typeof candidate.entries !== 'object' || candidate.entries === null || Array.isArray(candidate.entries)) {
                throw new Error('Failure manifest shape, workflow, or language differs from this run.');
            }
            return new FailureRecorder(path, candidate as PageFailureManifest);
        } catch (error: unknown) {
            if (is_missing_file(error)) return new FailureRecorder(path, create_failure_manifest(workflow, target_language));
            throw new Error(`Could not use ${workflow} failure manifest: ${safe_failure_message(error)}`);
        }
    }

    /** Record or replace one page's current failure without storing prompt or response text. */
    async record(relative_path: string, values: {
        readonly category: FailureCategory;
        readonly error: unknown;
        readonly source_hash: string;
        readonly input_hash?: string;
        readonly attempt_count?: number;
        readonly chunk_index?: number;
        readonly unit_index?: number;
    }): Promise<void> {
        this.manifest.entries[relative_path] = {
            category: values.category,
            message: safe_failure_message(values.error),
            source_hash: values.source_hash,
            ...(values.input_hash === undefined ? {} : { input_hash: values.input_hash }),
            attempt_count: Math.max(0, Math.floor(values.attempt_count ?? 0)),
            ...(values.chunk_index === undefined ? {} : { chunk_index: values.chunk_index }),
            ...(values.unit_index === undefined ? {} : { unit_index: values.unit_index }),
            retry_recovered: false,
            resolved: false,
            recorded_at: new Date().toISOString()
        };
        await this.persist();
    }

    /** Retain the last failure while marking whether a later request recovered it. */
    async resolve(relative_path: string, retry_recovered = false): Promise<void> {
        const entry = this.manifest.entries[relative_path];
        if (entry === undefined || entry.resolved) return;
        this.manifest.entries[relative_path] = {
            ...entry,
            retry_recovered,
            resolved: true,
            resolved_at: new Date().toISOString()
        };
        await this.persist();
    }

    /** Wait until every queued atomic write has completed. */
    async flush(): Promise<void> {
        await this.write_tail;
    }

    private async persist(): Promise<void> {
        const write = this.write_tail.then(async () => {
            const temporary_path = `${this.path}.${randomUUID()}.tmp`;
            try {
                await writeFile(temporary_path, `${JSON.stringify(this.manifest, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
                await rename(temporary_path, this.path);
            } finally {
                await rm(temporary_path, { force: true });
            }
        });
        this.write_tail = write.catch(() => undefined);
        await write;
    }
}

/** Attach a failure class and provider-attempt count to a page-processing error. */
export class PipelineFailure extends Error {
    readonly category: FailureCategory;
    readonly attempt_count: number;
    readonly chunk_index?: number;
    readonly unit_index?: number;

    constructor(category: FailureCategory, message: string, attempt_count = 0, location?: { readonly chunk_index?: number; readonly unit_index?: number }) {
        super(message);
        this.name = 'PipelineFailure';
        this.category = category;
        this.attempt_count = Math.max(0, Math.floor(attempt_count));
        this.chunk_index = location?.chunk_index;
        this.unit_index = location?.unit_index;
    }
}

/** Identify a missing file without masking malformed or unreadable failure state. */
function is_missing_file(error: unknown): boolean {
    return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT';
}
