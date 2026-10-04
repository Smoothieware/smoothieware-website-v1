import type { ExtractedPage, ProtectedMarkupToken } from './types';

/** A contiguous half-open range of the page's ordered prose segments. */
export interface ProseSection {
    readonly start_index: number;
    readonly end_index: number;
    readonly label: string;
}

interface HeadingCandidate {
    readonly index: number;
    readonly level: number;
    readonly label: string;
}

export const MAX_PAGE_SECTIONS = 20;

const UNIT_SLOT_PATTERN = /\u0000UNIT_(\d+)\u0000/gu;
const PROTECTED_MARKER_PATTERN = /⟪SWEEP_[A-Fa-f0-9-]+_\d+⟫/gu;
const ATX_HEADING_PATTERN = /^(?: {0,3}>[ \t]?)* {0,3}(#{1,6})[ \t]+(.+)$/u;
const SETEXT_UNDERLINE_PATTERN = /^ {0,3}(=+|-+)[ \t]*(?:\r\n|\r|\n|$)/u;

/** Partition extracted prose into at most 20 contiguous Markdown sections. */
export function partition_prose_sections(page: ExtractedPage): readonly ProseSection[] {
    const slot_matches = Array.from(page.protected_source.matchAll(UNIT_SLOT_PATTERN));
    if (page.protected_tokens_by_segment.length !== page.segments.length ||
        slot_matches.length !== page.segments.length ||
        slot_matches.some((slot, index) => Number(slot[1]) !== index)) {
        throw new Error('Extracted page has incomplete or reordered section metadata.');
    }
    if (page.segments.length === 0) return [];

    const heading_candidates: HeadingCandidate[] = [];
    for (const [index, segment] of page.segments.entries()) {
        const tokens = page.protected_tokens_by_segment[index];
        const slot = slot_matches[index];
        if (tokens === undefined || slot === undefined) {
            throw new Error('Extracted page has incomplete section metadata.');
        }
        const line = restore_source_line(segment, tokens).replace(/(?:\r\n|\r|\n)$/u, '');
        const atx_match = line.match(ATX_HEADING_PATTERN);
        if (atx_match?.[1] !== undefined && atx_match[2] !== undefined) {
            const label = atx_match[2].replace(/[ \t]+#+[ \t]*$/u, '').trim();
            if (label !== '') heading_candidates.push({ index, level: atx_match[1].length, label });
            continue;
        }

        const next_slot_start = slot_matches[index + 1]?.index ?? page.protected_source.length;
        const slot_end = (slot.index ?? 0) + slot[0].length;
        const text_after_line = page.protected_source.slice(slot_end, next_slot_start);
        const setext_match = text_after_line.match(SETEXT_UNDERLINE_PATTERN);
        if (setext_match?.[1] === undefined || is_non_heading_prefix(line, tokens)) continue;
        const label = line.trim();
        if (label !== '') heading_candidates.push({ index, level: setext_match[1][0] === '=' ? 1 : 2, label });
    }

    const start_heading = heading_candidates[0]?.index === 0 ? heading_candidates[0] : undefined;
    const boundary_candidates = heading_candidates.filter((heading) => heading.index > 0);
    const selected_boundaries = select_boundaries(boundary_candidates, MAX_PAGE_SECTIONS - 1);
    const first_label = start_heading?.label ?? (heading_candidates.length > 0 ? 'Preamble' : 'Page');
    const starts = [{ index: 0, label: first_label }, ...selected_boundaries.map((heading) => ({ index: heading.index, label: heading.label }))];
    return starts.map((start, position) => ({
        start_index: start.index,
        end_index: starts[position + 1]?.index ?? page.segments.length,
        label: start.label
    }));
}

/** Recover the original line using the extractor's marker-to-source mapping. */
function restore_source_line(segment: string, tokens: readonly ProtectedMarkupToken[]): string {
    const source_by_marker = new Map(tokens.map((token) => [token.marker, token.source]));
    return segment.replace(PROTECTED_MARKER_PATTERN, (marker) => source_by_marker.get(marker) ?? marker);
}

/** Exclude front matter values, list items, and quoted paragraphs from Setext detection. */
function is_non_heading_prefix(line: string, tokens: readonly ProtectedMarkupToken[]): boolean {
    if (tokens.some((token) => token.role === 'attribute_open' || token.role === 'yaml_plain_open')) return true;
    return /^ {0,3}(?:>|[-+*][ \t]+|\d+[.)][ \t]+)/u.test(line);
}

/** Prefer higher Markdown levels, spreading ties across the page when the cap is reached. */
function select_boundaries(candidates: readonly HeadingCandidate[], capacity: number): readonly HeadingCandidate[] {
    if (candidates.length <= capacity) return candidates;
    const selected: HeadingCandidate[] = [];
    for (let level = 1; level <= 6 && selected.length < capacity; level += 1) {
        const at_level = candidates.filter((candidate) => candidate.level === level);
        const available = capacity - selected.length;
        if (at_level.length <= available) {
            selected.push(...at_level);
            continue;
        }
        if (available === 1) {
            selected.push(at_level[Math.floor((at_level.length - 1) / 2)]!);
            break;
        }
        for (let position = 0; position < available; position += 1) {
            const selected_index = Math.round(position * (at_level.length - 1) / (available - 1));
            selected.push(at_level[selected_index]!);
        }
    }
    return selected.sort((left, right) => left.index - right.index);
}
