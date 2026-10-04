import { describe, expect, test } from 'bun:test';
import { extract_prose_segments } from '../markup';
import { MAX_PAGE_SECTIONS, partition_prose_sections, type ProseSection } from '../sections';

/** Prove that every input unit appears in exactly one ordered section. */
function expect_complete_coverage(sections: readonly ProseSection[], unit_count: number): void {
    let next_index = 0;
    for (const section of sections) {
        expect(section.start_index).toBe(next_index);
        expect(section.end_index).toBeGreaterThan(section.start_index);
        expect(section.end_index).toBeLessThanOrEqual(unit_count);
        next_index = section.end_index;
    }
    expect(next_index).toBe(unit_count);
    expect(sections.length).toBeLessThanOrEqual(MAX_PAGE_SECTIONS);
}

describe('Markdown prose sections', () => {
    test('returns no sections for an empty or wholly protected page', () => {
        expect(partition_prose_sections(extract_prose_segments(''))).toEqual([]);
        expect(partition_prose_sections(extract_prose_segments('```text\n# Code heading\n```\n'))).toEqual([]);
    });

    test('keeps a heading-free page in one section', () => {
        const page = extract_prose_segments('First paragraph.\n\nSecond paragraph.\n');
        const sections = partition_prose_sections(page);
        expect(sections).toEqual([{ start_index: 0, end_index: 2, label: 'Page' }]);
        expect_complete_coverage(sections, page.segments.length);
    });

    test('starts sections at ATX chapter and subchapter headings and preserves preamble units', () => {
        const page = extract_prose_segments([
            'Opening note.',
            '# Setup **guide**',
            'Chapter text.',
            '## Wiring',
            'Wiring text.',
            '### Pin details',
            'Pin text.',
            ''
        ].join('\n'));
        const sections = partition_prose_sections(page);
        expect(sections).toEqual([
            { start_index: 0, end_index: 1, label: 'Preamble' },
            { start_index: 1, end_index: 3, label: 'Setup **guide**' },
            { start_index: 3, end_index: 5, label: 'Wiring' },
            { start_index: 5, end_index: 7, label: 'Pin details' }
        ]);
        expect_complete_coverage(sections, page.segments.length);
    });

    test('recognizes Setext headings without mistaking YAML front matter for one', () => {
        const page = extract_prose_segments([
            '---',
            'title: Document title',
            '---',
            'Overview',
            '========',
            'Overview text.',
            'Details',
            '-------',
            'Detail text.',
            ''
        ].join('\n'));
        const sections = partition_prose_sections(page);
        expect(sections).toEqual([
            { start_index: 0, end_index: 1, label: 'Preamble' },
            { start_index: 1, end_index: 3, label: 'Overview' },
            { start_index: 3, end_index: 5, label: 'Details' }
        ]);
        expect_complete_coverage(sections, page.segments.length);
    });

    test('ignores heading-looking text in code and produces labels independent of random markers', () => {
        const source = '# Actual heading\nStart.\n\n```markdown\n## Fake heading\n```\n## Next heading\nFinish.\n';
        const first = partition_prose_sections(extract_prose_segments(source));
        const second = partition_prose_sections(extract_prose_segments(source));
        expect(first).toEqual(second);
        expect(first).toEqual([
            { start_index: 0, end_index: 2, label: 'Actual heading' },
            { start_index: 2, end_index: 4, label: 'Next heading' }
        ]);
    });

    test('retains higher-level boundaries when more than 20 headings require merging', () => {
        const lines: string[] = [];
        for (let chapter = 1; chapter <= 4; chapter += 1) {
            lines.push(`# Chapter ${chapter}`, `Chapter ${chapter} introduction.`);
            for (let subsection = 1; subsection <= 7; subsection += 1) {
                lines.push(`## Part ${chapter}.${subsection}`, `Part ${chapter}.${subsection} details.`);
            }
        }
        const page = extract_prose_segments(`${lines.join('\n')}\n`);
        const sections = partition_prose_sections(page);
        const chapter_indexes = [0, 16, 32, 48];
        expect(sections).toHaveLength(MAX_PAGE_SECTIONS);
        for (const chapter_index of chapter_indexes) {
            expect(sections.some((section) => section.start_index === chapter_index)).toBe(true);
        }
        expect_complete_coverage(sections, page.segments.length);
    });

    test('rejects incomplete extraction metadata instead of returning partial coverage', () => {
        const page = extract_prose_segments('# First\nSecond.\n');
        expect(() => partition_prose_sections({ ...page, protected_tokens_by_segment: [] })).toThrow('metadata');
    });
});
