import { describe, expect, it } from 'bun:test';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { capture_rejected_output, FailureRecorder, safe_failure_message } from '../failure_state';

describe('durable pipeline failure state', () => {
    it('serializes concurrent page outcomes and retains resolved failures', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-failure-state-test-'));
        const manifest_path = resolve(temporary_root, '.translation-failures.json');
        try {
            const recorder = await FailureRecorder.load(manifest_path, 'translation', 'Chinese');
            await Promise.all([
                recorder.record('one.md', { category: 'gateway', error: 'proxy failed', source_hash: 'source-one', attempt_count: 3 }),
                recorder.record('two.md', { category: 'response-validation', error: 'bad marker', source_hash: 'source-two', attempt_count: 2 })
            ]);
            const after_failures = JSON.parse(await readFile(manifest_path, 'utf8')) as {
                readonly entries: Record<string, { readonly category: string; readonly attempt_count: number }>;
            };
            expect(after_failures.entries['one.md']).toMatchObject({ category: 'gateway', attempt_count: 3 });
            expect(after_failures.entries['two.md']).toMatchObject({ category: 'response-validation', attempt_count: 2 });

            await recorder.resolve('one.md', true);
            const after_recovery = JSON.parse(await readFile(manifest_path, 'utf8')) as {
                readonly entries: Record<string, { readonly resolved: boolean; readonly retry_recovered: boolean }>;
            };
            expect(after_recovery.entries['one.md']).toMatchObject({ resolved: true, retry_recovered: true });
            expect(after_recovery.entries['two.md']).toBeDefined();
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('redacts common credentials, URLs, and multiline error payloads', () => {
        expect(safe_failure_message(new Error('mongodb://user:password@db.example/money https://proxy.example/path?key=private Bearer abc123 sk-live-123456789012\nfailed')))
            .toBe('[url] [url] Bearer [redacted] [redacted] failed');
    });

    it('rejects an array where the manifest requires a page-entry map', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-failure-shape-test-'));
        const manifest_path = resolve(temporary_root, '.translation-failures.json');
        try {
            await writeFile(manifest_path, JSON.stringify({ version: 1, workflow: 'translation', target_language: 'Chinese', entries: [] }));
            await expect(FailureRecorder.load(manifest_path, 'translation', 'Chinese')).rejects.toThrow('shape');
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('recovers its serialized write queue after one failure', async () => {
        const temporary_root = await mkdtemp(resolve(tmpdir(), 'smoothieware-failure-write-recovery-test-'));
        const manifest_directory = resolve(temporary_root, 'created-later');
        const manifest_path = resolve(manifest_directory, '.translation-failures.json');
        try {
            const recorder = await FailureRecorder.load(manifest_path, 'translation', 'Chinese');
            await expect(recorder.record('one.md', { category: 'gateway', error: 'write unavailable', source_hash: 'one' })).rejects.toThrow();
            await mkdir(manifest_directory);
            await recorder.record('two.md', { category: 'gateway', error: 'recorded after recovery', source_hash: 'two' });
            const manifest = JSON.parse(await readFile(manifest_path, 'utf8')) as { readonly entries: Record<string, unknown> };
            expect(manifest.entries['two.md']).toBeDefined();
        } finally {
            await rm(temporary_root, { recursive: true, force: true });
        }
    });

    it('captures rejected output only when explicitly enabled and writes it under a private temporary directory', async () => {
        const original_setting = process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT;
        let capture_path: string | undefined;
        try {
            delete process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT;
            expect(await capture_rejected_output({
                relative_path: 'contact.md', chunk_index: 2,
                translated_segments: ['invalid marker'], validation_error: 'missing marker'
            })).toBeUndefined();

            process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT = '1';
            capture_path = await capture_rejected_output({
                relative_path: 'contact.md', chunk_index: 2,
                translated_segments: ['invalid marker'], validation_error: 'missing marker'
            });
            expect(capture_path).toContain('/smoothieware-invalid-output-');
            expect(JSON.parse(await readFile(capture_path as string, 'utf8'))).toMatchObject({
                page: 'contact.md', chunk_index: 2, validation_error: 'missing marker',
                translated_segments: ['invalid marker']
            });
        } finally {
            if (original_setting === undefined) delete process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT;
            else process.env.SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT = original_setting;
            if (capture_path !== undefined) await rm(resolve(capture_path, '..'), { recursive: true, force: true });
        }
    });
});
