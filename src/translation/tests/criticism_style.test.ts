import { expect, spyOn, test } from 'bun:test';
import * as filesystem from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { collect_style_sources } from '../criticism_style';

test('skips a descendant that disappears after its parent is listed', async () => {
    const root = await filesystem.mkdtemp(resolve(tmpdir(), 'smoothieware-style-race-'));
    const disappearing = resolve(root, 'transient');
    await filesystem.mkdir(disappearing);
    await filesystem.writeFile(resolve(root, 'prompts.md'), 'Retain this style source.');
    const original_readdir = filesystem.readdir;
    const read_directory = spyOn(filesystem, 'readdir').mockImplementation((async (...args: Parameters<typeof filesystem.readdir>) => {
        if (args[0] === disappearing) await filesystem.rm(disappearing, { recursive: true });
        return original_readdir(...args);
    }) as typeof filesystem.readdir);
    try {
        expect(await collect_style_sources(root)).toEqual([{ path: 'prompts.md', text: 'Retain this style source.' }]);
    } finally {
        read_directory.mockRestore();
        await filesystem.rm(root, { recursive: true, force: true });
    }
});

test('reports a missing search root', async () => {
    const root = await filesystem.mkdtemp(resolve(tmpdir(), 'smoothieware-style-missing-'));
    await filesystem.rmdir(root);
    await expect(collect_style_sources(root)).rejects.toMatchObject({ code: 'ENOENT' });
});

test('preserves errors other than ENOENT in descendants', async () => {
    const root = await filesystem.mkdtemp(resolve(tmpdir(), 'smoothieware-style-error-'));
    const denied = resolve(root, 'denied');
    await filesystem.mkdir(denied);
    const original_readdir = filesystem.readdir;
    const read_directory = spyOn(filesystem, 'readdir').mockImplementation((async (...args: Parameters<typeof filesystem.readdir>) => {
        if (args[0] === denied) throw Object.assign(new Error('Access denied'), { code: 'EACCES' });
        return original_readdir(...args);
    }) as typeof filesystem.readdir);
    try {
        await expect(collect_style_sources(root)).rejects.toMatchObject({ code: 'EACCES' });
    } finally {
        read_directory.mockRestore();
        await filesystem.rm(root, { recursive: true, force: true });
    }
});

test('skips generated target trees while collecting sibling style sources', async () => {
    const root = await filesystem.mkdtemp(resolve(tmpdir(), 'smoothieware-style-target-'));
    try {
        await filesystem.mkdir(resolve(root, 'target', 'debug', 'deps'), { recursive: true });
        await filesystem.writeFile(resolve(root, 'target', 'debug', 'deps', 'prompts.md'), 'Generated material.');
        await filesystem.writeFile(resolve(root, 'prompts.md'), 'Authored style source.');
        expect(await collect_style_sources(root)).toEqual([{ path: 'prompts.md', text: 'Authored style source.' }]);
    } finally {
        await filesystem.rm(root, { recursive: true, force: true });
    }
});
