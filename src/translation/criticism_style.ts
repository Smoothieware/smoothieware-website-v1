import { createHash } from 'node:crypto';
import { readFile, readdir, stat } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';

const MAXIMUM_STYLE_FILE_BYTES = 1_000_000;
const MAXIMUM_EXCERPT_CHARACTERS = 128;
const EXCLUDED_DIRECTORIES = new Set(['.git', 'node_modules', 'dist', 'build', 'target', '.next', '.cache', 'translations']);

export interface StyleSource { readonly path: string; readonly text: string; }
export interface StyleSample { readonly path: string; readonly excerpt: string; }

/** Load eligible prompts.md files without traversing symlinks or generated dependency trees. */
export async function collect_style_sources(style_root: string): Promise<readonly StyleSource[]> {
    const root = resolve(style_root);
    const sources: StyleSource[] = [];
    const visit = async (directory: string): Promise<void> => {
        const children = await readdir(directory, { withFileTypes: true }).catch((error: unknown) => {
            // A generated descendant can vanish between its parent's listing and this read.
            if (directory !== root && typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT') return null;
            throw error;
        });
        if (children === null) return;
        children.sort((left, right) => left.name.localeCompare(right.name));
        for (const child of children) {
            const path = resolve(directory, child.name);
            if (child.isDirectory() && !EXCLUDED_DIRECTORIES.has(child.name)) {
                await visit(path);
                continue;
            }
            if (!child.isFile() || child.name.toLocaleLowerCase('en') !== 'prompts.md') continue;
            if ((await stat(path)).size > MAXIMUM_STYLE_FILE_BYTES) continue;
            const text = await readFile(path, 'utf8');
            if (text.trim() === '') continue;
            sources.push({ path: relative(root, path).split(sep).join('/'), text });
        }
    };
    await visit(root);
    if (sources.length === 0) throw new Error(`No readable prompts.md style sources were found under ${root}.`);
    return sources;
}

/** Select a reproducible random-looking set and passage for each source page. */
export function select_style_samples(args: {
    readonly sources: readonly StyleSource[];
    readonly count: number;
    readonly seed: string;
    readonly page_path: string;
}): readonly StyleSample[] {
    const sorted = [...args.sources].sort((left, right) =>
        hash(`${args.seed}\u0000${args.page_path}\u0000${left.path}`).localeCompare(hash(`${args.seed}\u0000${args.page_path}\u0000${right.path}`))
    );
    return sorted.slice(0, args.count).map((source) => {
        const possible_start = Math.max(0, source.text.length - MAXIMUM_EXCERPT_CHARACTERS);
        const offset = possible_start === 0 ? 0 :
            Number.parseInt(hash(`${args.seed}\u0000${args.page_path}\u0000${source.path}\u0000passage`).slice(0, 8), 16) % (possible_start + 1);
        return { path: source.path, excerpt: source.text.slice(offset, offset + MAXIMUM_EXCERPT_CHARACTERS).replace(/\u0000/gu, '') };
    });
}

/** Fingerprint the actual excerpts, so changed style evidence triggers another review. */
export function fingerprint_style_samples(samples: readonly StyleSample[]): string {
    return hash(JSON.stringify(samples));
}

/** Hash stable selection inputs without a mutable shared random generator. */
function hash(value: string): string { return createHash('sha256').update(value).digest('hex'); }
