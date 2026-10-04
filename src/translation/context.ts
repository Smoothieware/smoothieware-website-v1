import type { TranslationTarget, WorkItem } from './types';
import { TRANSLATION_NETWORK_POLICY, TRANSLATION_STYLE_CONTRACT } from './style_contract';
import { escape_xml_text, xml_element } from './xml';

const TOKEN_ESTIMATE_DIVISOR = 3;
const PROJECT_CONTEXT_MAXIMUM_CHARACTERS = 2_400;

interface ContextPage {
    readonly path: string;
    readonly text: string;
    readonly terms: ReadonlySet<string>;
    readonly is_project_context: boolean;
}

export interface ContextIndex {
    readonly candidates: readonly ContextPage[];
}

/** Pre-index project and page terms once instead of rescanning the full corpus per request. */
export function create_context_index(args: {
    readonly pages: readonly WorkItem[];
    readonly project_context: string;
}): ContextIndex {
    return {
        candidates: [
            { path: 'project-context', text: args.project_context.slice(0, PROJECT_CONTEXT_MAXIMUM_CHARACTERS), terms: words(args.project_context), is_project_context: true },
            ...args.pages.map((page) => ({ path: page.relative_path, text: page.source_text, terms: words(`${page.relative_path}\n${page.source_text}`), is_project_context: false }))
        ]
    };
}

/** Build compact project and relevance-ranked reference context within the model input window. */
export function build_context(args: {
    readonly item: WorkItem;
    readonly index: ContextIndex;
    readonly context_window_tokens: number;
    readonly target_segments: readonly string[];
}): { readonly context: string; readonly used_paths: readonly string[] } {
    const input_budget = Math.max(0, args.context_window_tokens);
    const headings = args.item.source_text.split('\n').filter((line) => /^\s{0,3}#{1,6}\s/u.test(line)).join('\n');
    const target_text = `${args.item.relative_path}\n${headings}\n${args.item.source_text.slice(0, 8_000)}\n${args.target_segments.join('\n')}`;
    const target_terms = words(target_text);
    const candidates = args.index.candidates.filter((candidate) => candidate.path !== args.item.relative_path);
    candidates.sort((left, right) => {
        if (left.is_project_context !== right.is_project_context) return left.is_project_context ? -1 : 1;
        return relevance(right.terms, target_terms) - relevance(left.terms, target_terms);
    });
    const selected: string[] = [];
    const used_paths: string[] = [];
    for (const candidate of candidates) {
        const header = `\n\n[REFERENCE ONLY: ${candidate.path}; do not translate this page]\n`;
        const available_characters = largest_fitting_reference_prefix({
            selected,
            header,
            text: candidate.text,
            token_budget: input_budget
        });
        if (available_characters === 0) continue;
        selected.push(`${header}${candidate.text.slice(0, available_characters)}`);
        used_paths.push(candidate.path);
    }
    return {
        context: selected.join('\n'),
        used_paths
    };
}

/** Find the longest candidate prefix that fits after the caller's XML escaping. */
function largest_fitting_reference_prefix(args: {
    readonly selected: readonly string[];
    readonly header: string;
    readonly text: string;
    readonly token_budget: number;
}): number {
    const fixed_prefix = args.selected.length === 0
        ? args.header
        : `${args.selected.join('\n')}\n${args.header}`;
    let serialized_code_points = Array.from(escape_xml_text(fixed_prefix)).length;
    const maximum_serialized_characters = args.token_budget * TOKEN_ESTIMATE_DIVISOR;
    if (serialized_code_points >= maximum_serialized_characters) return 0;

    let accepted_utf16_length = 0;
    for (const character of args.text) {
        const escaped_character_length = escaped_xml_code_point_length(character);
        if (serialized_code_points + escaped_character_length > maximum_serialized_characters) break;
        serialized_code_points += escaped_character_length;
        accepted_utf16_length += character.length;
    }
    return accepted_utf16_length;
}

/** Count serialized XML code points without allocating escaped copies of source text. */
function escaped_xml_code_point_length(character: string): number {
    if (character === '&') return 5;
    if (character === '<' || character === '>') return 4;
    if (character === '"' || character === "'") return 6;
    return 1;
}

/** Choose a segment group that fits below the advertised output ceiling with expansion headroom. */
export function chunk_segments(segments: readonly string[], max_output_tokens: number, usable_input_tokens: number): readonly (readonly string[])[] {
    const segment_limit_tokens = Math.max(1, Math.min(Math.floor(max_output_tokens * 0.7), Math.floor(Math.max(1, usable_input_tokens - 1_500) * 0.6)));
    const chunks: string[][] = [];
    let current: string[] = [];
    let current_tokens = 0;
    for (const [segment_index, segment] of segments.entries()) {
        const segment_tokens = estimate_tokens(JSON.stringify(segment));
        if (segment_tokens > segment_limit_tokens) {
            throw new Error(`Translation unit ${segment_index + 1} requires about ${segment_tokens} tokens, above the safe per-unit budget of ${segment_limit_tokens}; refusing an oversized request.`);
        }
        if (current.length > 0 && current_tokens + segment_tokens > segment_limit_tokens) {
            chunks.push(current);
            current = [];
            current_tokens = 0;
        }
        current.push(segment);
        current_tokens += segment_tokens;
    }
    if (current.length > 0) chunks.push(current);
    return chunks;
}

/** Estimate input tokens conservatively from Unicode code points. */
export function estimate_tokens(text: string): number {
    return Math.ceil(Array.from(text).length / TOKEN_ESTIMATE_DIVISOR);
}

/** Prepare the constrained request for exactly one active source page chunk. */
export function create_translation_prompt(args: {
    readonly relative_path: string;
    readonly language: string;
    readonly context: string;
    readonly segments: readonly string[];
    readonly full_page_context?: string;
    readonly section_index?: number;
    readonly section_count?: number;
    readonly section_label?: string;
    readonly repair_feedback?: string;
}): { readonly system_prompt: string; readonly user_prompt: string } {
    const section_index = args.section_index ?? 1;
    const section_count = args.section_count ?? 1;
    const section_label = args.section_label ?? `Section ${section_index}`;
    return {
        system_prompt: `${TRANSLATION_NETWORK_POLICY} Translate only the active section into ${args.language}. ${TRANSLATION_STYLE_CONTRACT}`,
        user_prompt: [
            '<translation-request>',
            xml_element('target-source-page', args.relative_path),
            xml_element('target-language', args.language),
            xml_element('section-index', `${section_index}/${section_count}`),
            xml_element('section-label', section_label),
            `<full-page-context role="reference-only">${escape_xml_text(args.full_page_context ?? '')}</full-page-context>`,
            `<project-and-related-reference-context role="reference-only">${escape_xml_text(args.context)}</project-and-related-reference-context>`,
            '<active-target-section role="translate-only">',
            'Translate only the ordered units below. The full-page and reference blocks are context only; never copy their text into the answer.',
            'Keep the unit count and order unchanged. Copy every protected marker exactly once and preserve marker order. Translate all human-readable text and keep it inside its source markup structure.',
            'Translate visible text in headings, list and table cells, HTML elements and components, link labels and titles, and quoted user-facing attributes.',
            ...(args.repair_feedback === undefined ? [] : [xml_element('repair-guidance', args.repair_feedback)]),
            xml_element('target-translation-units', JSON.stringify(args.segments)),
            '</active-target-section>',
            '</translation-request>'
        ].join('\n')
    };
}

/** Score a candidate by term overlap and small filename/heading boosts. */
function relevance(candidate: ReadonlySet<string>, target: ReadonlySet<string>): number {
    let score = 0;
    for (const term of target) if (candidate.has(term)) score += 1;
    return score;
}

/** Normalize useful words for stable ranking. */
function words(value: string): ReadonlySet<string> {
    return new Set(value.toLocaleLowerCase('en').match(/[\p{L}\p{N}]{3,}/gu) ?? []);
}
