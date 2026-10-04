import { describe, expect, it } from 'bun:test';
import { build_context, create_context_index, create_translation_prompt, estimate_tokens } from '../context';
import type { WorkItem } from '../types';
import { escape_xml_text } from '../xml';

/** Decode a prompt data element so assertions inspect the original source text. */
function extract_prompt_section(prompt: string, tag: string): string {
    const match = prompt.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'u'));
    expect(match?.[1]).toBeDefined();
    return (match?.[1] ?? '').replace(/&(lt|gt|quot|apos|amp);/gu, (_match, entity: string) => ({
        lt: '<', gt: '>', quot: '"', apos: "'", amp: '&'
    })[entity] ?? _match);
}

describe('translation style context', () => {
    it('budgets markup-heavy references after XML escaping', () => {
        const target_page: WorkItem = {
            relative_path: 'target.md',
            source_path: '/source/target.md',
            source_text: '# Setup\nTranslate this short instruction.',
            source_hash: 'target-hash'
        };
        const reference_page: WorkItem = {
            relative_path: 'reference.md',
            source_path: '/source/reference.md',
            source_text: '<tag attr="&">'.repeat(3_000),
            source_hash: 'reference-hash'
        };
        const index = create_context_index({ pages: [target_page, reference_page], project_context: '' });
        const token_budget = 1_000;
        const built_context = build_context({
            item: target_page,
            index,
            context_window_tokens: token_budget,
            target_segments: ['Translate this short instruction.']
        });
        const reference_header = '\n\n[REFERENCE ONLY: reference.md; do not translate this page]\n';
        const legacy_raw_limited_context = `${reference_header}${reference_page.source_text.slice(0, token_budget * 3 - reference_header.length)}`;

        expect(estimate_tokens(legacy_raw_limited_context)).toBeLessThanOrEqual(token_budget);
        expect(estimate_tokens(escape_xml_text(legacy_raw_limited_context))).toBeGreaterThan(token_budget);
        expect(built_context.context.length).toBeGreaterThan(0);
        expect(built_context.used_paths).toContain('reference.md');
        expect(estimate_tokens(escape_xml_text(built_context.context))).toBeLessThanOrEqual(token_budget);
    });

    it('keeps supplementary characters intact at the serialized context boundary', () => {
        const target_page: WorkItem = {
            relative_path: 'target.md',
            source_path: '/source/target.md',
            source_text: '# Target',
            source_hash: 'target'
        };
        const reference_page: WorkItem = {
            relative_path: 'reference.md',
            source_path: '/source/reference.md',
            source_text: '😀'.repeat(100),
            source_hash: 'reference'
        };
        const built_context = build_context({
            item: target_page,
            index: create_context_index({ pages: [target_page, reference_page], project_context: '' }),
            context_window_tokens: 30,
            target_segments: ['Target']
        });

        expect(built_context.context).toContain('😀');
        expect(built_context.context.endsWith('😀')).toBe(true);
        expect(() => encodeURIComponent(built_context.context)).not.toThrow();
        expect(estimate_tokens(escape_xml_text(built_context.context))).toBeLessThanOrEqual(30);
    });

    it('uses the target page as the voice anchor and every supplied page as shared style context', () => {
        const target_page: WorkItem = {
            relative_path: 'target.md',
            source_path: '/source/target.md',
            source_text: '# Setup\nTry this first. It is a little odd, but it works.',
            source_hash: 'target-hash'
        };
        const first_reference: WorkItem = {
            relative_path: 'related-maintenance.md',
            source_path: '/source/related-maintenance.md',
            source_text: 'This maintenance note uses blunt directions and short sentences.',
            source_hash: 'maintenance-hash'
        };
        const second_reference: WorkItem = {
            relative_path: 'related-configuration.md',
            source_path: '/source/related-configuration.md',
            source_text: 'The configuration guide uses the same direct register and terms.',
            source_hash: 'configuration-hash'
        };
        const target_segments = ['Try this first.', 'It is a little odd, but it works.'];
        const index = create_context_index({
            pages: [target_page, first_reference, second_reference],
            project_context: 'Smoothieware documentation uses direct technical language.'
        });
        const built_context = build_context({
            item: target_page,
            index,
            context_window_tokens: 20_000,
            target_segments
        });
        const prompts = create_translation_prompt({
            relative_path: target_page.relative_path,
            language: 'French',
            context: built_context.context,
            segments: target_segments,
            full_page_context: '<script>reference only</script>',
            section_index: 2,
            section_count: 5,
            section_label: 'Wiring & setup',
            repair_feedback: 'Preserve <all> markers in order.'
        });

        expect(built_context.used_paths).toEqual(expect.arrayContaining([
            'project-context',
            first_reference.relative_path,
            second_reference.relative_path
        ]));
        expect(prompts.system_prompt).toContain('The target page is the voice anchor');
        expect(prompts.system_prompt).toContain('every supplied project/page reference excerpt');
        expect(prompts.system_prompt).toContain('Do not copy reference sentences');
        expect(prompts.system_prompt).toContain('generic AI-sounding filler');
        expect(prompts.system_prompt).toContain('Do not impose banned-word lists or uniform prose rules.');
        expect(prompts.user_prompt).toContain('<active-target-section role="translate-only">');
        expect(prompts.user_prompt).toContain('<section-index>2/5</section-index>');
        expect(extract_prompt_section(prompts.user_prompt, 'full-page-context')).toBe('<script>reference only</script>');
        expect(extract_prompt_section(prompts.user_prompt, 'section-label')).toBe('Wiring & setup');
        expect(extract_prompt_section(prompts.user_prompt, 'repair-guidance')).toBe('Preserve <all> markers in order.');
        expect(prompts.user_prompt).toContain('[REFERENCE ONLY: related-maintenance.md; do not translate this page]');
        expect(prompts.user_prompt).toContain('[REFERENCE ONLY: related-configuration.md; do not translate this page]');
        expect(extract_prompt_section(prompts.user_prompt, 'project-and-related-reference-context')).toBe(built_context.context);
        expect(JSON.parse(extract_prompt_section(prompts.user_prompt, 'target-translation-units'))).toEqual(target_segments);
    });
});
