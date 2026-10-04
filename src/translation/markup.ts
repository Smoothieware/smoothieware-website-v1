import { randomUUID } from 'node:crypto';
import type { ExtractedPage, ProtectedMarkupToken } from './types';

const INLINE_PROTECTED_PATTERN = /(`+[^`\n]*`+|<(script|style|pre|mcode|gcode|pin|setting|configuration_setting|configuration_source|value|type|name|file|tag|raw)\b[^>]*>[\s\S]*?<\/\2\s*>|<[^>\n]+>|\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}|\{::[^}\n]*\}|\{:[^}\n]*\}|https?:\/\/[^\s)>]+|\[[^\]]+\]:\s*\S+|>=|<=|->|<-|[<>]|\*\*|__|~~|\||(?<!\w)\*(?=\S)|(?<=\S)\*(?!\w)|(?<!\w)_(?=\S)|(?<=\S)_(?!\w))/giu;
const INLINE_CODE_ELEMENT_PATTERN = /<code\b[^>]*>[\s\S]*?<\/code\s*>/giu;
const MARKDOWN_PREFIX_PATTERN = /^(?:\s{0,3}>\s?)*(?:[ \t]*(?:#{1,6}\s+|(?:[-+*]|\d+[.)])\s+))?/u;
const TOKEN_PATTERN = /⟪SWEEP_[A-Fa-f0-9-]+_\d+⟫/gu;
const TOKEN_LIKE_PATTERN = /⟪SWEEP_[^⟫]*⟫/gu;
const UNPROTECTED_STRUCTURE_PATTERN = /[<>\[\]{}|`\\\t⟪⟫*_#]/gu;
const MARKDOWN_BLOCK_PREFIX_PATTERN = /^\s{0,3}(?:#{1,6}\s|>[ \t]?|[-+*][ \t]+|\d+[.)][ \t]+)/u;
const UNPROTECTED_URL_PATTERN = /\b(?:https?|ftp):\/\/[^\s]+|\bmailto:[^\s]+/giu;
const NATURAL_LANGUAGE_PATTERN = /[\p{L}\p{N}]/u;
const FENCE_PATTERN = /^\s{0,3}(`{3,}|~{3,})/u;
const RAW_CODE_OPEN_PATTERN = /^\s*<(script|style|pre|code|mcode|gcode|pin|setting|configuration_setting|configuration_source|value|type|name|file|tag|raw)(?:\s|>)/iu;
const INDENTED_CODE_START_PATTERN = /^(?: {4,}|\t)(?![-+*]\s|\d+[.)]\s|<[A-Za-z/!?])\S/u;
const VOID_HTML_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

interface UnitBuilder {
    readonly parts: string[];
    readonly tokens: ProtectedMarkupToken[];
    has_translatable_text: boolean;
}

interface TokenFactory {
    readonly nonce: string;
    next_index: number;
}

interface InlineLinkMatch {
    readonly index: number;
    readonly length: number;
    readonly value: string;
    readonly image_marker: string;
    readonly label: string;
    readonly destination: string;
    readonly is_inline: boolean;
}

/** Extract one prose unit per Markdown line while retaining exact markup tokens in those units. */
export function extract_prose_segments(source: string): ExtractedPage {
    if (source.includes('⟪SWEEP_') || source.includes('\u0000UNIT_')) {
        throw new Error('Source contains reserved translation marker syntax; refusing to translate this page.');
    }
    const lines = source.split(/(?<=\n)|(?<=\r)(?!\n)/u);
    const template_parts: string[] = [];
    const segments: string[] = [];
    const protected_tokens_by_segment: ProtectedMarkupToken[][] = [];
    const token_factory: TokenFactory = { nonce: randomUUID().replace(/-/gu, '').slice(0, 16).toUpperCase(), next_index: 0 };
    let in_front_matter = false;
    let front_matter_seen = false;
    let fence_character: string | null = null;
    let fence_length = 0;
    let raw_code_tag: string | null = null;
    let in_indented_code_block = false;

    for (const [index, line] of lines.entries()) {
        const trimmed = line.trim();
        if (!front_matter_seen && template_parts.length === 0 && trimmed === '---') {
            in_front_matter = true;
            front_matter_seen = true;
            template_parts.push(line);
            continue;
        }
        if (in_front_matter) {
            if (!append_front_matter_value(line, template_parts, segments, protected_tokens_by_segment, token_factory)) template_parts.push(line);
            if (trimmed === '---' || trimmed === '...') in_front_matter = false;
            continue;
        }
        if (fence_character !== null) {
            template_parts.push(line);
            const close = new RegExp(`^\\s{0,3}${fence_character}{${fence_length},}\\s*$`, 'u');
            if (close.test(trimmed)) { fence_character = null; fence_length = 0; }
            continue;
        }
        if (raw_code_tag !== null) {
            template_parts.push(line);
            if (new RegExp(`</${raw_code_tag}\\s*>`, 'iu').test(line)) raw_code_tag = null;
            continue;
        }
        const fence_match = line.match(FENCE_PATTERN);
        if (fence_match?.[1] !== undefined) {
            fence_character = fence_match[1][0] ?? '`';
            fence_length = fence_match[1].length;
            template_parts.push(line);
            continue;
        }
        const raw_open_match = line.match(RAW_CODE_OPEN_PATTERN);
        if (raw_open_match?.[1] !== undefined && !new RegExp(`</${raw_open_match[1]}\\s*>`, 'iu').test(line)) {
            raw_code_tag = raw_open_match[1].toLowerCase();
            template_parts.push(line);
            continue;
        }
        const has_indented_prefix = /^(?: {4,}|\t)/u.test(line);
        const is_blank_line = line.trim() === '';
        if (in_indented_code_block && (has_indented_prefix || is_blank_line)) {
            template_parts.push(line);
            if (!is_blank_line) in_indented_code_block = true;
            continue;
        }
        in_indented_code_block = false;
        if (INDENTED_CODE_START_PATTERN.test(line) && (index === 0 || lines[index - 1]?.trim() === '')) {
            template_parts.push(line);
            in_indented_code_block = true;
            continue;
        }
        const builder = create_builder();
        if (append_reference_definition(line, builder, token_factory) || append_inline_line(line, builder, token_factory)) {
            append_builder_line(line, builder, template_parts, segments, protected_tokens_by_segment);
        } else {
            template_parts.push(line);
        }
    }
    const extracted = { protected_source: template_parts.join(''), segments, protected_tokens_by_segment };
    if (restore_prose_segments(extracted, extracted.segments) !== source) {
        throw new Error('Extraction failed exact source round-trip; refusing to translate this page.');
    }
    return extracted;
}

/** Validate every returned unit and restore original markup only after all token checks pass. */
export function restore_prose_segments(extracted: ExtractedPage, translations: readonly string[]): string {
    if (translations.length !== extracted.segments.length) {
        throw new Error(`Expected ${extracted.segments.length} translated prose units; received ${translations.length}.`);
    }
    if (extracted.protected_tokens_by_segment.length !== extracted.segments.length) {
        throw new Error('Extracted page has incomplete protected-token metadata.');
    }
    const slots = Array.from(extracted.protected_source.matchAll(/\u0000UNIT_(\d+)\u0000/gu));
    if (slots.length !== extracted.segments.length ||
        slots.some((slot, index) => Number(slot[1]) !== index)) {
        throw new Error('Extracted page has missing, duplicated, or reordered unit slots.');
    }
    const restored_units: string[] = [];
    for (const [unit_index, translated] of translations.entries()) {
        const tokens = extracted.protected_tokens_by_segment[unit_index];
        const original = extracted.segments[unit_index];
        if (tokens === undefined || original === undefined) throw new Error('Extracted page omitted a translation unit.');
        const normalized_translated = normalize_terminal_line_ending(original, translated, tokens);
        validate_protected_tokens(unit_index, original, normalized_translated, tokens);
        const marker_to_source = new Map(tokens.map((token) => [token.marker, token.source]));
        restored_units.push(normalized_translated.replace(TOKEN_PATTERN, (marker) => marker_to_source.get(marker) ?? marker));
    }
    return extracted.protected_source.replace(/\u0000UNIT_(\d+)\u0000/gu, (_slot, index: string) => {
        const restored_unit = restored_units[Number(index)];
        if (restored_unit === undefined) throw new Error('Source template references a missing translated unit.');
        return restored_unit;
    });
}

/** Keep a line-ending marker last when a model places more of the same unit after it. */
function normalize_terminal_line_ending(original: string, translated: string, tokens: readonly ProtectedMarkupToken[]): string {
    const last_token = tokens[tokens.length - 1];
    const first_token = tokens[0];
    if (last_token === undefined || !/^(?:\r\n|\r|\n)$/u.test(last_token.source) ||
        !original.endsWith(last_token.marker)) return translated;
    if (tokens.some((token) => token.role === 'yaml_plain_open') ||
        (first_token?.role === 'attribute_open' && original.startsWith(first_token.marker))) return translated;
    const marker_index = translated.indexOf(last_token.marker);
    if (marker_index < 0) return translated;
    const trailing_text = translated.slice(marker_index + last_token.marker.length);
    if (trailing_text === '') return translated;
    let insertion_index = marker_index;
    for (let token_index = tokens.length - 2; token_index >= 0; token_index -= 1) {
        const token = tokens[token_index];
        if (token === undefined) break;
        if (/^[ \t]*$/u.test(token.source)) continue;
        if (token.role === 'html_close') {
            const close_index = translated.lastIndexOf(token.marker, marker_index);
            if (close_index >= 0) insertion_index = close_index;
        }
        break;
    }
    return translated.slice(0, insertion_index) + trailing_text +
        translated.slice(insertion_index, marker_index) + last_token.marker;
}

/** Validate one returned unit without making unrelated successful units part of its retry. */
export function validate_prose_segment(extracted: ExtractedPage, unit_index: number, translated: string): void {
    if (!Number.isInteger(unit_index) || unit_index < 0 || unit_index >= extracted.segments.length) {
        throw new Error(`Translation unit ${unit_index + 1} is outside the extracted page.`);
    }
    const candidate = [...extracted.segments];
    candidate[unit_index] = translated;
    restore_prose_segments(extracted, candidate);
}

/** Validate token identity, multiplicity, structure order, and visible content inside paired markup. */
function validate_protected_tokens(unit_index: number, original: string, translated: string, tokens: readonly ProtectedMarkupToken[]): void {
    const expected_markers = tokens.map((token) => token.marker);
    const actual_markers = translated.match(TOKEN_PATTERN) ?? [];
    const token_like_markers = translated.match(TOKEN_LIKE_PATTERN) ?? [];
    if (token_like_markers.length !== actual_markers.length) throw invalid_token_error(unit_index, 'altered or malformed marker');
    for (const marker of expected_markers) {
        if (translated.split(marker).length - 1 !== 1) throw invalid_token_error(unit_index, 'missing or duplicated marker');
    }
    if (actual_markers.length !== expected_markers.length || actual_markers.some((marker, index) => marker !== expected_markers[index])) {
        throw invalid_token_error(unit_index, 'unexpected marker or changed markup order');
    }
    const original_plain = original.replace(TOKEN_PATTERN, '');
    const translated_plain = translated.replace(TOKEN_PATTERN, '');
    if (translated_plain.includes('⟪SWEEP_') || /[\u0000\r\n]/u.test(translated_plain)) {
        throw invalid_token_error(unit_index, 'an incomplete marker or a new line/control character');
    }
    if (JSON.stringify(original_plain.match(UNPROTECTED_STRUCTURE_PATTERN) ?? []) !==
        JSON.stringify(translated_plain.match(UNPROTECTED_STRUCTURE_PATTERN) ?? []) ||
        JSON.stringify(original_plain.match(UNPROTECTED_URL_PATTERN) ?? []) !==
        JSON.stringify(translated_plain.match(UNPROTECTED_URL_PATTERN) ?? [])) {
        throw invalid_token_error(unit_index, 'new or changed unprotected syntax or URL');
    }
    if (!MARKDOWN_BLOCK_PREFIX_PATTERN.test(original_plain) && MARKDOWN_BLOCK_PREFIX_PATTERN.test(translated_plain)) {
        throw invalid_token_error(unit_index, 'new Markdown block prefix');
    }
    const first_token = tokens[0];
    const last_token = tokens[tokens.length - 1];
    if (first_token !== undefined && original.startsWith(first_token.marker) && !translated.startsWith(first_token.marker)) {
        throw invalid_token_error(unit_index, 'source prefix moved');
    }
    if (last_token !== undefined && original.endsWith(last_token.marker) && !translated.endsWith(last_token.marker)) {
        throw invalid_token_error(unit_index, 'source suffix moved');
    }
    for (const token of tokens.filter((candidate) => candidate.role === 'attribute_open')) {
        const close_token = tokens.find((candidate) => candidate.role === 'attribute_close' && candidate.pair_id === token.pair_id);
        if (close_token === undefined) throw invalid_token_error(unit_index, 'missing quoted-value boundary');
        const original_value = extract_between_tokens(original, token.marker, close_token.marker, tokens);
        const translated_value = extract_between_tokens(translated, token.marker, close_token.marker, tokens);
        if (!NATURAL_LANGUAGE_PATTERN.test(original_value) && translated_value !== original_value) {
            throw invalid_token_error(unit_index, 'non-prose quoted value changed');
        }
        const quote = token.source.slice(-1);
        if ((quote === '"' || quote === "'") && translated_value.includes(quote)) {
            throw invalid_token_error(unit_index, 'unescaped quote inside a quoted value');
        }
    }
    for (const token of tokens.filter((candidate) => candidate.role === 'yaml_plain_open')) {
        const close_token = tokens.find((candidate) => candidate.role === 'yaml_plain_close' && candidate.pair_id === token.pair_id);
        if (close_token === undefined) throw invalid_token_error(unit_index, 'missing plain YAML value boundary');
        const original_value = extract_between_tokens(original, token.marker, close_token.marker, tokens);
        const translated_value = extract_between_tokens(translated, token.marker, close_token.marker, tokens);
        if (!NATURAL_LANGUAGE_PATTERN.test(translated_value) ||
            !is_safe_plain_yaml_scalar(original_value) || !is_safe_plain_yaml_scalar(translated_value)) {
            throw invalid_token_error(unit_index, 'unsafe plain YAML scalar');
        }
    }
    for (const token of tokens) {
        if (!token.requires_visible_content || token.paired_marker === undefined) continue;
        if (token.role !== 'link_open' && token.role !== 'html_open' &&
            token.role !== 'html_tag_end' && token.role !== 'attribute_open') continue;
        const paired_token = tokens.find((candidate) => candidate.marker === token.paired_marker);
        if (paired_token === undefined) throw invalid_token_error(unit_index, 'missing structural pair');
        const visible_content = extract_between_tokens(
            translated, token.marker, paired_token.marker, tokens,
            token.role === 'html_open' || token.role === 'html_tag_end'
        );
        if (!NATURAL_LANGUAGE_PATTERN.test(visible_content)) throw invalid_token_error(unit_index, 'visible text moved outside its markup container');
    }
    for (const open_token of tokens.filter((token) => (token.role === 'html_open' || token.role === 'html_self') && token.pair_id !== undefined)) {
        const end_token = tokens.find((token) => token.role === 'html_tag_end' && token.pair_id === open_token.pair_id);
        if (end_token === undefined) throw invalid_token_error(unit_index, 'incomplete HTML tag boundary');
        const open_end = translated.indexOf(open_token.marker) + open_token.marker.length;
        const end_start = translated.indexOf(end_token.marker);
        if (open_end < 0 || end_start < open_end) throw invalid_token_error(unit_index, 'invalid HTML tag boundary order');
        const tag_interstitial_text = translated.slice(open_end, end_start);
        const attribute_intervals = tokens
            .filter((token) => token.role === 'attribute_open' && token.pair_id !== undefined)
            .map((token) => {
                const close_token = tokens.find((candidate) => candidate.role === 'attribute_close' && candidate.pair_id === token.pair_id);
                if (close_token === undefined) return undefined;
                return { start: translated.indexOf(token.marker) - open_end, end: translated.indexOf(close_token.marker) + close_token.marker.length - open_end };
            })
            .filter((interval): interval is { start: number; end: number } => interval !== undefined && interval.start >= 0 && interval.end >= interval.start && interval.end <= tag_interstitial_text.length)
            .sort((left, right) => left.start - right.start);
        let cursor = 0;
        let unwrapped_tag_text = '';
        for (const interval of attribute_intervals) {
            unwrapped_tag_text += tag_interstitial_text.slice(cursor, interval.start);
            cursor = interval.end;
        }
        unwrapped_tag_text += tag_interstitial_text.slice(cursor);
        if (unwrapped_tag_text.replace(TOKEN_PATTERN, '') !== '') {
            throw invalid_token_error(unit_index, 'visible prose moved into HTML tag syntax');
        }
    }
}

/** Extract visible text between a validated pair after excluding all protected markers. */
function extract_between_tokens(
    text: string,
    open_marker: string,
    close_marker: string,
    tokens: readonly ProtectedMarkupToken[],
    exclude_attribute_values = false
): string {
    const open_index = text.indexOf(open_marker);
    const content_index = open_index + open_marker.length;
    const close_index = text.indexOf(close_marker, content_index);
    if (open_index < 0 || close_index < 0) return '';
    let content = text.slice(content_index, close_index);
    if (exclude_attribute_values) {
        const intervals = tokens
            .filter((token) => token.role === 'attribute_open' && token.paired_marker !== undefined)
            .map((token) => {
                const start = content.indexOf(token.marker);
                const end_start = content.indexOf(token.paired_marker ?? '', start + token.marker.length);
                return { start, end: end_start + (token.paired_marker?.length ?? 0), end_start };
            })
            .filter((interval) => interval.start >= 0 && interval.end_start >= interval.start)
            .sort((left, right) => right.start - left.start);
        for (const interval of intervals) content = content.slice(0, interval.start) + content.slice(interval.end);
    }
    return content.replace(TOKEN_PATTERN, '');
}

/** Report the failed unit and validation class without exposing source or credentials. */
function invalid_token_error(unit_index: number, reason: string): Error {
    return new Error(`Translation unit ${unit_index + 1} contains ${reason}; refusing to write this page.`);
}

/** Parse target prose, HTML text/attributes, links, and protected inline syntax from one line. */
function append_inline_line(line: string, builder: UnitBuilder, token_factory: TokenFactory): boolean {
    const line_ending = line.match(/(?:\r\n|\r|\n)$/u)?.[0] ?? '';
    const content = line.slice(0, line.length - line_ending.length);
    const prefix_match = content.match(MARKDOWN_PREFIX_PATTERN);
    const prefix = prefix_match?.[0] ?? '';
    if (prefix !== '') add_protected(builder, token_factory, prefix);
    const trailing_whitespace = content.match(/[ \t]+$/u)?.[0] ?? '';
    const translatable_content = trailing_whitespace === '' ? content : content.slice(0, -trailing_whitespace.length);
    const post_prefix_content = translatable_content.slice(prefix.length);
    const leading_whitespace = post_prefix_content.match(/^[ \t]+/u)?.[0] ?? '';
    if (leading_whitespace !== '') add_protected(builder, token_factory, leading_whitespace);
    append_inline_content(post_prefix_content.slice(leading_whitespace.length), builder, token_factory);
    if (!builder.has_translatable_text) return false;
    if (trailing_whitespace !== '') add_protected(builder, token_factory, trailing_whitespace);
    add_protected(builder, token_factory, line_ending);
    pair_html_tokens(builder);
    return true;
}

/** Walk line content in source order while exposing link labels and prose around protected spans. */
function append_inline_content(content: string, builder: UnitBuilder, token_factory: TokenFactory): void {
    const matches: Array<{ index: number; length: number; value: string; link_match?: InlineLinkMatch }> = [];
    for (const match of content.matchAll(INLINE_PROTECTED_PATTERN)) {
        if (match[0] === '*' && is_unpaired_asterisk(content, match.index)) continue;
        matches.push({ index: match.index, length: match[0].length, value: match[0] });
    }
    INLINE_CODE_ELEMENT_PATTERN.lastIndex = 0;
    for (const match of content.matchAll(INLINE_CODE_ELEMENT_PATTERN)) matches.push({ index: match.index, length: match[0].length, value: match[0] });
    for (const match of find_inline_links(content)) matches.push({ index: match.index, length: match.length, value: match.value, link_match: match });
    matches.sort((left, right) => left.index - right.index || right.length - left.length);
    let cursor = 0;
    for (const match of matches) {
        if (match.index < cursor) continue;
        add_prose(builder, content.slice(cursor, match.index));
        if (match.link_match !== undefined) append_link(match.link_match, builder, token_factory);
        else if (/^<code\b[\s\S]*?<\/code\s*>$/iu.test(match.value)) append_inline_code_element(match.value, builder, token_factory);
        else if (/^<\/?[A-Za-z][^>]*>$/u.test(match.value)) append_html_tag(match.value, builder, token_factory);
        else add_protected(builder, token_factory, match.value);
        cursor = match.index + match.length;
    }
    add_prose(builder, content.slice(cursor));
}

/** Keep a lone asterisk in emoticons or ordinary prose from becoming a fake Markdown token. */
function is_unpaired_asterisk(content: string, index: number): boolean {
    const single_asterisks = [...content.matchAll(/(?<!\\)(?<!\*)\*(?!\*)/gu)];
    return single_asterisks.length === 1 && single_asterisks[0]?.index === index;
}

/** Protect inline code bytes while keeping neighboring prose available for target-language word order. */
function append_inline_code_element(element: string, builder: UnitBuilder, token_factory: TokenFactory): void {
    const match = element.match(/^(<code\b[^>]*>)([\s\S]*?)(<\/code\s*>)$/iu);
    if (match?.[1] === undefined || match[2] === undefined || match[3] === undefined) {
        add_protected(builder, token_factory, element);
        return;
    }
    append_html_tag(match[1], builder, token_factory);
    add_protected(builder, token_factory, match[2]);
    append_html_tag(match[3], builder, token_factory);
}

/** Keep link destinations exact while allowing labels, alt text, and titles to reorder naturally. */
function append_link(match: InlineLinkMatch, builder: UnitBuilder, token_factory: TokenFactory): void {
    const { image_marker, label, destination } = match;
    if (!match.is_inline && destination === '') throw new Error('Collapsed reference links need explicit identifiers.');
    const pair_id = token_factory.next_index;
    add_protected(builder, token_factory, `${image_marker}[`, { role: 'link_open', pair_id });
    const label_part_start = builder.parts.length;
    append_inline_content(label, builder, token_factory);
    const label_prose = builder.parts.slice(label_part_start).join('').replace(TOKEN_PATTERN, '');
    let label_close_role: 'link_close' | 'link_label_close' = 'link_close';
    if (match.is_inline) {
        const title_match = destination.match(/^(\S+)\s+(["'])(.*?)\2$/u);
        if (title_match?.[1] !== undefined && title_match[2] !== undefined && title_match[3] !== undefined) {
            const title_pair_id = token_factory.next_index;
            add_protected(builder, token_factory, ']', { role: 'link_label_close', pair_id });
            label_close_role = 'link_label_close';
            add_protected(builder, token_factory, `(${title_match[1]} ${title_match[2]}`, { role: 'attribute_open', pair_id: title_pair_id });
            add_prose(builder, title_match[3]);
            add_protected(builder, token_factory, title_match[2], { role: 'attribute_close', pair_id: title_pair_id });
            add_protected(builder, token_factory, ')', { role: 'link_close', pair_id });
        } else {
            add_protected(builder, token_factory, `](${destination})`, { role: 'link_close', pair_id });
        }
    } else {
        add_protected(builder, token_factory, `][${destination}]`, { role: 'link_close', pair_id });
    }
    pair_tokens(builder, pair_id, 'link_open', label_close_role, NATURAL_LANGUAGE_PATTERN.test(label_prose));
}

/** Find inline links with balanced, escaped parentheses without rewriting their source bytes. */
function find_inline_links(content: string): InlineLinkMatch[] {
    const matches: InlineLinkMatch[] = [];
    for (let index = 0; index < content.length; index += 1) {
        const image_marker = content[index] === '!' && content[index + 1] === '[' ? '!' : '';
        const bracket_start = index + image_marker.length;
        if (content[bracket_start] !== '[' || (image_marker === '' && content[index] !== '[')) continue;
        const label_end = find_matching_delimiter(content, bracket_start, '[', ']');
        if (label_end === undefined) continue;
        const following_index = label_end + 1;
        const delimiter = content[following_index];
        if (delimiter === '(') {
            const destination_end = find_matching_delimiter(content, following_index, '(', ')');
            if (destination_end === undefined) continue;
            const end = destination_end + 1;
            const value = content.slice(index, end);
            matches.push({
                index, length: value.length, value, image_marker,
                label: content.slice(bracket_start + 1, label_end),
                destination: content.slice(following_index + 1, destination_end), is_inline: true
            });
            index = end - 1;
            continue;
        }
        if (delimiter !== '[') continue;
        const reference_end = find_matching_delimiter(content, following_index, '[', ']');
        if (reference_end === undefined) continue;
        const end = reference_end + 1;
        const value = content.slice(index, end);
        matches.push({
            index, length: value.length, value, image_marker,
            label: content.slice(bracket_start + 1, label_end),
            destination: content.slice(following_index + 1, reference_end), is_inline: false
        });
        index = end - 1;
    }
    return matches;
}

/** Locate a balanced bracket or parenthesis while treating backslash escapes literally. */
function find_matching_delimiter(content: string, start: number, opening: '[' | '(', closing: ']' | ')'): number | undefined {
    let depth = 0;
    for (let index = start; index < content.length; index += 1) {
        const character = content[index];
        if (character === '\\') {
            index += 1;
            continue;
        }
        if (character === opening) depth += 1;
        if (character === closing) {
            depth -= 1;
            if (depth === 0) return index;
        }
    }
    return undefined;
}

/** Preserve all HTML tag bytes while exposing visible quoted attributes for translation. */
function append_html_tag(tag: string, builder: UnitBuilder, token_factory: TokenFactory): void {
    const tag_match = tag.match(/^<\s*(\/)?\s*([A-Za-z][\w:-]*)/u);
    const role = tag_match?.[1] === '/' ? 'html_close' : /\/\s*>$/u.test(tag) || VOID_HTML_TAGS.has(tag_match?.[2]?.toLowerCase() ?? '') ? 'html_self' : 'html_open';
    const tag_name = tag_match?.[2]?.toLowerCase();
    const attribute_pattern = /[ \t]+(?:alt|title|aria-label|placeholder)\s*=\s*(["'])(.*?)\1/giu;
    const attributes = Array.from(tag.matchAll(attribute_pattern)).filter((match) => is_outside_quotes(tag, match.index));
    const opening_pair_id = (role === 'html_open' || role === 'html_self') && attributes.length > 0 ? token_factory.next_index : undefined;
    let cursor = 0;
    let first_piece = true;
    for (const match of attributes) {
        const match_index = match.index;
        add_html_tag_piece(tag.slice(cursor, match_index), builder, token_factory, first_piece ? role : undefined, tag_name, opening_pair_id);
        first_piece = false;
        const attribute_text = match[0];
        const value = match[2] ?? '';
        const value_start = attribute_text.indexOf(match[1] ?? '"') + 1;
        const attribute_pair_id = token_factory.next_index;
        add_protected(builder, token_factory, attribute_text.slice(0, value_start), { role: 'attribute_open', pair_id: attribute_pair_id });
        add_prose(builder, value);
        add_protected(builder, token_factory, attribute_text.slice(value_start + value.length), { role: 'attribute_close', pair_id: attribute_pair_id });
        pair_tokens(builder, attribute_pair_id, 'attribute_open', 'attribute_close', NATURAL_LANGUAGE_PATTERN.test(value));
        cursor = match_index + attribute_text.length;
    }
    add_html_tag_piece(
        tag.slice(cursor), builder, token_factory,
        first_piece ? role : opening_pair_id !== undefined ? 'html_tag_end' : undefined,
        tag_name, opening_pair_id
    );
}

/** Ignore display-attribute-looking words inside other quoted attribute values. */
function is_outside_quotes(tag: string, end_index: number): boolean {
    let quote: string | null = null;
    for (let index = 0; index < end_index; index += 1) {
        const character = tag[index];
        if (quote === null && (character === '"' || character === "'")) quote = character;
        else if (character === quote) quote = null;
    }
    return quote === null;
}

/** Attach tag identity to the first immutable fragment so source nesting can be validated. */
function add_html_tag_piece(
    piece: string,
    builder: UnitBuilder,
    token_factory: TokenFactory,
    role: ProtectedMarkupToken['role'] | undefined,
    tag_name: string | undefined,
    pair_id: number | undefined
): void {
    if (piece === '') return;
    add_protected(builder, token_factory, piece, role === undefined ? undefined : { role, tag_name, pair_id });
}

/** Preserve the reference destination and title delimiters while translating the quoted title. */
function append_reference_definition(line: string, builder: UnitBuilder, token_factory: TokenFactory): boolean {
    const match = line.match(/^(\s{0,3}\[[^\]\n]+\]:[ \t]*)(<[^>\r\n]+>|\S+)([ \t]+)(["'])(.*)\4([ \t]*(?:#.*)?)(\r?\n?)$/u);
    if (match?.[1] === undefined || match[2] === undefined || match[3] === undefined || match[4] === undefined || match[5] === undefined) return false;
    const title_value = match[5];
    if (title_value.includes('\\') || !NATURAL_LANGUAGE_PATTERN.test(title_value)) return false;
    const title_pair_id = token_factory.next_index;
    add_protected(builder, token_factory, match[1] + match[2] + match[3] + match[4], { role: 'attribute_open', pair_id: title_pair_id });
    add_prose(builder, title_value);
    add_protected(builder, token_factory, match[4], { role: 'attribute_close', pair_id: title_pair_id });
    add_protected(builder, token_factory, match[6] ?? '');
    pair_tokens(builder, title_pair_id, 'attribute_open', 'attribute_close', NATURAL_LANGUAGE_PATTERN.test(title_value));
    add_protected(builder, token_factory, match[7] ?? '');
    builder.has_translatable_text = true;
    return true;
}

/** Translate only safe scalar title and description values inside YAML front matter. */
function append_front_matter_value(
    line: string,
    template_parts: string[],
    segments: string[],
    protected_tokens_by_segment: ProtectedMarkupToken[][],
    token_factory: TokenFactory
): boolean {
    const key_match = line.match(/^([ \t]*(?:title|description)[ \t]*:[ \t]*)(.*?)(\r\n|\r|\n)?$/u);
    if (key_match?.[1] === undefined || key_match[2] === undefined) return false;
    const value = key_match[2];
    const line_ending = key_match[3] ?? '';
    const quoted_match = value.match(/^(["'])([^\r\n]*?)\1([ \t]*(?:#.*)?)?$/u);
    const builder = create_builder();
    if (quoted_match?.[1] !== undefined && quoted_match[2] !== undefined) {
        if (quoted_match[2].includes('\\') || !NATURAL_LANGUAGE_PATTERN.test(quoted_match[2])) return false;
        const title_pair_id = token_factory.next_index;
        add_protected(builder, token_factory, key_match[1] + quoted_match[1], { role: 'attribute_open', pair_id: title_pair_id });
        add_prose(builder, quoted_match[2]);
        add_protected(builder, token_factory, quoted_match[1], { role: 'attribute_close', pair_id: title_pair_id });
        add_protected(builder, token_factory, quoted_match[3] ?? '');
        pair_tokens(builder, title_pair_id, 'attribute_open', 'attribute_close', NATURAL_LANGUAGE_PATTERN.test(quoted_match[2]));
    } else {
        const plain_match = value.match(/^(.+?)([ \t]+#.*)?$/u);
        if (plain_match?.[1] === undefined || !is_safe_plain_yaml_scalar(plain_match[1]) || !NATURAL_LANGUAGE_PATTERN.test(plain_match[1])) return false;
        const scalar_pair_id = token_factory.next_index;
        add_protected(builder, token_factory, key_match[1], { role: 'yaml_plain_open', pair_id: scalar_pair_id });
        add_prose(builder, plain_match[1]);
        add_protected(builder, token_factory, `${plain_match[2] ?? ''}${line_ending}`, { role: 'yaml_plain_close', pair_id: scalar_pair_id });
        pair_tokens(builder, scalar_pair_id, 'yaml_plain_open', 'yaml_plain_close', true);
        append_builder_line(line, builder, template_parts, segments, protected_tokens_by_segment);
        return true;
    }
    add_protected(builder, token_factory, line_ending);
    append_builder_line(line, builder, template_parts, segments, protected_tokens_by_segment);
    return true;
}

/** Attach unchanged template lines for non-prose source and a unit marker for prose lines. */
function append_builder_line(
    original_line: string,
    builder: UnitBuilder,
    template_parts: string[],
    segments: string[],
    protected_tokens_by_segment: ProtectedMarkupToken[][]
): void {
    if (!builder.has_translatable_text) {
        template_parts.push(original_line);
        return;
    }
    const unit_index = segments.length;
    template_parts.push(`\u0000UNIT_${unit_index}\u0000`);
    segments.push(builder.parts.join(''));
    protected_tokens_by_segment.push(builder.tokens);
}

/** Pair inline HTML tags in source order and require translations to retain visible inner text. */
function pair_html_tokens(builder: UnitBuilder): void {
    const stack: ProtectedMarkupToken[] = [];
    for (let index = 0; index < builder.tokens.length; index += 1) {
        const token = builder.tokens[index];
        if (token?.role === 'html_open' && token.tag_name !== undefined) {
            stack.push(token);
            continue;
        }
        if (token?.role !== 'html_close' || token.tag_name === undefined) continue;
        let open_index = -1;
        for (let stack_index = stack.length - 1; stack_index >= 0; stack_index -= 1) {
            if (stack[stack_index]?.tag_name === token.tag_name) {
                open_index = stack_index;
                break;
            }
        }
        if (open_index < 0) continue;
        const open_token = stack.splice(open_index, 1)[0];
        if (open_token === undefined) continue;
        const body_start = builder.tokens.find((candidate) =>
            candidate.role === 'html_tag_end' && candidate.pair_id === open_token.pair_id
        ) ?? open_token;
        const visible_source = extract_between_tokens(
            builder.parts.join(''), body_start.marker, token.marker, builder.tokens, true
        );
        if (!NATURAL_LANGUAGE_PATTERN.test(visible_source)) continue;
        replace_token(builder, body_start.marker, { paired_marker: token.marker, requires_visible_content: true });
        replace_token(builder, token.marker, { paired_marker: body_start.marker, requires_visible_content: true });
    }
}

/** Require visible translated text to stay between a Markdown link's delimiters. */
function pair_tokens(
    builder: UnitBuilder,
    pair_id: number,
    open_role: 'link_open' | 'attribute_open' | 'yaml_plain_open',
    close_role: 'link_label_close' | 'link_close' | 'attribute_close' | 'yaml_plain_close',
    requires_visible_content: boolean
): void {
    const open_token = builder.tokens.find((token) => token.role === open_role && token.pair_id === String(pair_id));
    const close_token = builder.tokens.find((token) => token.role === close_role && token.pair_id === String(pair_id));
    if (open_token === undefined || close_token === undefined) return;
    replace_token(builder, open_token.marker, { paired_marker: close_token.marker, requires_visible_content: requires_visible_content });
    replace_token(builder, close_token.marker, { paired_marker: open_token.marker, requires_visible_content: requires_visible_content });
}

/** Accept only plain YAML values that remain strings under common YAML scalar rules. */
function is_safe_plain_yaml_scalar(value: string): boolean {
    if (value === '' || value.trim() !== value || /[\r\n\\]/u.test(value) || /:\s/u.test(value)) return false;
    if (/^[-?:,[\]{}#&*!|>'"%@`]/u.test(value)) return false;
    if (/^(?:~|null|true|false|yes|no|on|off|\.inf|\.nan|[+-]?(?:[0-9][0-9_]*(?:\.[0-9_]*)?(?:[eE][+-]?[0-9]+)?|0[xX][0-9a-fA-F_]+|0[oO][0-7_]+|0[bB][01_]+))$/iu.test(value)) return false;
    return true;
}

/** Attach a partner identifier while the second endpoint of a protected structure is parsed. */
function replace_token(builder: UnitBuilder, marker: string, updates: Partial<ProtectedMarkupToken>): void {
    const index = builder.tokens.findIndex((token) => token.marker === marker);
    const token = builder.tokens[index];
    if (index >= 0 && token !== undefined) builder.tokens[index] = { ...token, ...updates };
}

/** Create an empty per-line unit builder before extracting prose and markup atoms. */
function create_builder(): UnitBuilder {
    return { parts: [], tokens: [], has_translatable_text: false };
}

/** Add source text to a unit and mark it for translation only when it contains human-readable text. */
function add_prose(builder: UnitBuilder, value: string): void {
    if (value === '') return;
    builder.parts.push(value);
    if (NATURAL_LANGUAGE_PATTERN.test(value)) builder.has_translatable_text = true;
}

/** Replace immutable source syntax with a unique marker retained for exact restoration. */
function add_protected(
    builder: UnitBuilder,
    token_factory: TokenFactory,
    source: string,
    metadata: { readonly role?: ProtectedMarkupToken['role']; readonly tag_name?: string; readonly pair_id?: number } = {}
): void {
    if (source === '' && metadata.role === undefined) return;
    const marker = `⟪SWEEP_${token_factory.nonce}_${token_factory.next_index}⟫`;
    token_factory.next_index += 1;
    builder.parts.push(marker);
    builder.tokens.push({
        marker,
        source,
        part_index: builder.parts.length - 1,
        role: metadata.role,
        tag_name: metadata.tag_name,
        pair_id: metadata.pair_id === undefined ? undefined : String(metadata.pair_id)
    });
}
