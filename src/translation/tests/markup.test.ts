import { describe, expect, it } from 'bun:test';
import { extract_prose_segments, restore_prose_segments, validate_prose_segment } from '../markup';

describe('lossless Markdown prose extraction', () => {
    it('translates prose, link labels, image alt text, and HTML user-facing attributes while preserving syntax and code', () => {
        const source = [
            '---', 'title: Exact title', '---',
            '# Heading **bold**',
            '',
            'Read [the guide](guide.md "Reference title") and see ![board photo](/images/board.png).',
            '<img src="board.png" alt="Board wiring diagram" title="Main board">',
            '<span class="notice">Visible warning</span>',
            '<script>const greeting = "Do not translate";</script>',
            '<script>', 'const multiline_greeting = "Do not translate";', '</script>',
            '<style>.caption { content: "Do not translate"; }</style>',
            '<style>', '.caption::after { content: "Do not translate"; }', '</style>',
            '<code>console.log("Do not translate")</code>',
            '<pre>', 'Do not translate this literal.', '</pre>',
            '',
            '```js', 'const label = "Do not translate";', '```',
            '| Name | Value |', '| --- | --- |', '| Voltage | 24 V |',
            '{% include_relative warning.md %}',
            '{::nomarkdown}', '<mcode>M106</mcode>', '{:/nomarkdown}',
            ''
        ].join('\n');
        const extracted = extract_prose_segments(source);
        const translated = extracted.segments.map((segment) => segment
            .replace('Exact title', 'Titre exact')
            .replace('Heading', 'Titre').replace('bold', 'gras')
            .replace('the guide', 'le guide').replace('Reference title', 'Titre de référence')
            .replace('board photo', 'photo de carte')
            .replace('Board wiring diagram', 'Schéma de câblage')
            .replace('Main board', 'Carte principale')
            .replace('Visible warning', 'Avertissement visible')
            .replace('Name', 'Nom').replace('Value', 'Valeur'));
        const output = restore_prose_segments(extracted, translated);

        expect(output).toContain('---\ntitle: Titre exact\n---');
        expect(output).toContain('# Titre **gras**');
        expect(output).toContain('[le guide](guide.md "Titre de référence")');
        expect(output).toContain('![photo de carte](/images/board.png)');
        expect(output).toContain('alt="Schéma de câblage"');
        expect(output).toContain('title="Carte principale"');
        expect(output).toContain('<span class="notice">Avertissement visible</span>');
        expect(output).toContain('<script>const greeting = "Do not translate";</script>');
        expect(output).toContain('<script>\nconst multiline_greeting = "Do not translate";\n</script>');
        expect(output).toContain('<style>.caption { content: "Do not translate"; }</style>');
        expect(output).toContain('<style>\n.caption::after { content: "Do not translate"; }\n</style>');
        expect(output).toContain('<code>console.log("Do not translate")</code>');
        expect(output).toContain('<pre>\nDo not translate this literal.\n</pre>');
        expect(output).toContain('```js\nconst label = "Do not translate";\n```');
        expect(output).toContain('| Nom | Valeur |');
        expect(output).toContain('{% include_relative warning.md %}');
        expect(output).toContain('{::nomarkdown}\n<mcode>M106</mcode>\n{:/nomarkdown}');
    });

    it('translates safe title and description metadata plus reference-link labels without changing identifiers', () => {
        const source = [
            '---',
            'title: Smoothieware Setup Guide',
            'description: "Configure your Smoothieboard for daily use."',
            'permalink: /setup-guide',
            '---',
            'Read [the setup guide][setup-ref] and ![board wiring][board-image].',
            '[setup-ref]: setup.md "Setup reference title"',
            '[board-image]: /images/board.png'
        ].join('\n');
        const extracted = extract_prose_segments(source);
        const output = restore_prose_segments(extracted, extracted.segments.map((segment) => segment
            .replace('Smoothieware Setup Guide', 'Guide de configuration Smoothieware')
            .replace('Configure your Smoothieboard for daily use.', 'Configurez votre Smoothieboard pour le quotidien.')
            .replace('the setup guide', 'le guide de configuration')
            .replace('board wiring', 'câblage de la carte')
            .replace('Setup reference title', 'Titre de référence de configuration')));

        expect(output).toContain('title: Guide de configuration Smoothieware');
        expect(output).toContain('description: "Configurez votre Smoothieboard pour le quotidien."');
        expect(output).toContain('permalink: /setup-guide');
        expect(output).toContain('[le guide de configuration][setup-ref]');
        expect(output).toContain('![câblage de la carte][board-image]');
        expect(output).toContain('[setup-ref]: setup.md "Titre de référence de configuration"');
        expect(output).toContain('[board-image]: /images/board.png');
    });

    it('preserves every nested blockquote marker while translating its prose', () => {
        const extracted = extract_prose_segments('> > - Nested quoted text\n');
        expect(restore_prose_segments(extracted, extracted.segments.map((segment) => segment.replace('Nested quoted text', 'Texte cité imbriqué')))).toBe('> > - Texte cité imbriqué\n');
    });

    it('keeps an unmatched asterisk in an IRC emoticon as prose while retaining link syntax', () => {
        const source = '- [IRC (recommended ヾ(❀◦◡◦)彡*:・゚✧ )](/irc) - Real-time chat for quick questions and discussions\n';
        const extracted = extract_prose_segments(source);
        const protected_sources = extracted.protected_tokens_by_segment[0]?.map((token) => token.source) ?? [];
        const translated = extracted.segments.map((segment) => segment.replace('Real-time chat', '实时聊天'));

        expect(protected_sources).not.toContain('*');
        expect(restore_prose_segments(extracted, translated)).toBe('- [IRC (recommended ヾ(❀◦◡◦)彡*:・゚✧ )](/irc) - 实时聊天 for quick questions and discussions\n');
    });

    it('preserves indented code blocks and translates deeply indented list items', () => {
        const source = [
            'Example:',
            '',
            '    const label = "Do not translate";',
            '    console.log(label);',
            '',
            '- Parent item',
            '',
            '    - Nested list prose',
            ''
        ].join('\n');
        const extracted = extract_prose_segments(source);
        const output = restore_prose_segments(extracted, extracted.segments.map((segment) => segment.replace('Nested list prose', 'Texte imbriqué')));

        expect(output).toContain('    const label = "Do not translate";\n    console.log(label);');
        expect(output).toContain('    - Texte imbriqué');
    });

    it('rejects missing or extra translations rather than changing the source skeleton', () => {
        const extracted = extract_prose_segments('Hello.');
        expect(() => restore_prose_segments(extracted, [])).toThrow();
        expect(() => restore_prose_segments(extracted, ['Bonjour', 'Extra'])).toThrow();
    });

    it('validates one repaired unit without requiring successful neighboring units to be resent', () => {
        const extracted = extract_prose_segments('Read [the guide](guide.md) for details.\nNext paragraph.\n');
        const first_unit = extracted.segments[0];
        const second_unit = extracted.segments[1];

        expect(first_unit).toBeDefined();
        expect(second_unit).toBeDefined();
        expect(() => validate_prose_segment(extracted, 0, first_unit!.replace('the guide', 'le guide'))).not.toThrow();
        expect(() => validate_prose_segment(extracted, 0, first_unit!.replace(/⟪SWEEP_[^⟫]+⟫/u, ''))).toThrow('missing or duplicated marker');
        expect(() => validate_prose_segment(extracted, 2, 'unrelated')).toThrow('outside the extracted page');
    });

    it('preserves a bare URL used as both a Markdown link label and destination', () => {
        const source = 'See [https://example.org/docs](https://example.org/docs) for details.\n';
        const extracted = extract_prose_segments(source);

        expect(restore_prose_segments(extracted, extracted.segments)).toBe(source);
    });

    it('preserves balanced and escaped parentheses in Markdown link destinations', () => {
        const source = '[Fuse](Fuse_(electrical)) and [escaped](path\\(with\\))\n';
        const extracted = extract_prose_segments(source);

        expect(restore_prose_segments(extracted, extracted.segments)).toBe(source);
    });

    it('keeps code-only Markdown link labels inside their links', () => {
        const examples = [
            '[`CommandShell.cpp`](https://example.org/source "the source file") implements the command.',
            '[{::nomarkdown}<mcode>M20</mcode>{:/nomarkdown}](m20) - List files',
            '[<pin>2.4</pin>](/pinout) shows the output pin.',
            '[{{ site.name }}](/project) names the project.'
        ];
        for (const source of examples) {
            const extracted = extract_prose_segments(`${source}\n`);
            expect(restore_prose_segments(extracted, extracted.segments)).toBe(`${source}\n`);
        }
    });

    it('blocks collapsed reference links until their identifiers can be preserved safely', () => {
        expect(() => extract_prose_segments('Read [the guide][] for details.\n')).toThrow('Collapsed reference links need explicit identifiers.');
    });

    it('protects technical operators and menu separators as exact source bytes', () => {
        const source = 'Choose **File** > **New**; use gcc >= 6.3 and TXD->RXD.\n';
        const extracted = extract_prose_segments(source);
        const protected_sources = extracted.protected_tokens_by_segment[0]?.map((token) => token.source) ?? [];

        expect(protected_sources).toContain('>');
        expect(protected_sources).toContain('>=');
        expect(protected_sources).toContain('->');
        expect(restore_prose_segments(extracted, extracted.segments.map((segment) => segment.replace('Choose', 'Choisir'))))
            .toBe('Choisir **File** > **New**; use gcc >= 6.3 and TXD->RXD.\n');
    });

    it('moves translated punctuation before a protected terminal line ending', () => {
        const extracted = extract_prose_segments('Read [the guide](guide.md)\n');
        const segment = extracted.segments[0]!;
        const candidate = segment.replace('Read ', 'Lire ').replace('the guide', 'le guide') + '。';

        expect(restore_prose_segments(extracted, [candidate])).toBe('Lire [le guide](guide.md)。\n');
    });

    it('still rejects prose after a structural source suffix', () => {
        const extracted = extract_prose_segments('Read [the guide](guide.md)');
        const candidate = extracted.segments[0]!.replace('Read ', 'Lire ') + ' extra';

        expect(() => restore_prose_segments(extracted, [candidate])).toThrow('source suffix moved');
    });

    it('keeps punctuation inside a closing HTML list item when the newline marker moved', () => {
        const source = '<li><strong>Dispatcher</strong>: handles <code>THEDISPATCHER</code></li>\n';
        const extracted = extract_prose_segments(source);
        const candidate = extracted.segments[0]! + '。';

        expect(restore_prose_segments(extracted, [candidate]))
            .toBe('<li><strong>Dispatcher</strong>: handles <code>THEDISPATCHER</code>。</li>\n');
    });

    it('does not move prose beyond a YAML scalar boundary', () => {
        const extracted = extract_prose_segments('---\ntitle: "Guide"\n---\n');
        const candidate = extracted.segments[0]! + ' extra';

        expect(() => restore_prose_segments(extracted, [candidate])).toThrow('source suffix moved');
    });

    it('rejects translated HTML text moved outside its original element', () => {
        const extracted = extract_prose_segments('<span>Visible warning</span>\n');
        const segment = extracted.segments[0]!;
        const closing_tag = extracted.protected_tokens_by_segment[0]?.find((token) => token.source === '</span>');
        expect(closing_tag).toBeDefined();
        const candidate = segment.replace('Visible warning', '').replace(closing_tag!.marker, closing_tag!.marker + 'Avertissement visible');

        expect(() => restore_prose_segments(extracted, [candidate]))
            .toThrow('visible text moved outside its markup container');
    });
});
