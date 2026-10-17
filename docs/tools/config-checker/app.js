/** Browser controller: loads only the selected version and keeps config text in memory. */
import { check_config, create_schema } from './engine.js';
const root = document.documentElement;
const version = root.dataset.version === 'v2' ? 'v2' : 'v1';
const editor = document.querySelector('#config');
const results = document.querySelector('#results');
const summary = document.querySelector('#summary');
const source_url = `/assets/data/smoothieware-${version}-config.yaml`;
let schema;
let revision = 0;
let timer;
let current_diagnostics = [];
const examples = {
    v1: '# Syntax only; not a machine config.\nacceleration 100\narm_solution cartesian\nswitch.fan.enable false\n',
    v2: '# Syntax only; not a machine config.\n[general]\ngrbl_mode = true\n\n[motion control]\ndefault_acceleration = 100\narm_solution = corexz\n'
};
/** Safely create UI text, never render uploaded content as HTML. */
function element(tag, text, class_name = '') {
    const node = document.createElement(tag);
    node.textContent = text;
    node.className = class_name;
    return node;
}
/** Clone trusted bundled icons; never interpolate configuration text into markup. */
function add_icon(node, name) {
    const source = document.querySelector(`#icon-${name}`)?.content.firstElementChild;
    if (source)
        node.prepend(source.cloneNode(true));
}
/** Keep visible icons and accessible status text synchronized. */
function set_status(state, icon) {
    document.querySelector('.checker').dataset.state = state;
    const holder = document.querySelector('#status-icon');
    holder.replaceChildren();
    add_icon(holder, icon);
}
/** Compact counters retain complete screen-reader names and mouse tooltips. */
function show_counts(recognized, total, errors, warnings, notes) {
    const counts = document.querySelector('#counts');
    counts.replaceChildren();
    const known = element('span', `${recognized}/${total} known`, 'count');
    known.setAttribute('aria-label', `${recognized} of ${total} settings recognized`);
    counts.append(known);
    for (const item of [{ count: errors, label: 'errors', icon: 'alert-circle', style: 'error' }, { count: warnings, label: 'warnings', icon: 'alert-triangle', style: 'warning' }, { count: notes, label: 'review notes', icon: 'info-circle', style: 'info' }]) {
        const chip = element('span', String(item.count), `count ${item.style}`);
        chip.setAttribute('aria-label', `${item.count} ${item.label}`);
        chip.title = `${item.count} ${item.label}`;
        chip.classList.toggle('zero', item.count === 0);
        add_icon(chip, item.icon);
        counts.append(chip);
    }
}
/** Focus a physical line in the original text without changing it. */
function focus_line(line) {
    const lines = editor.value.split('\n');
    const offset = lines.slice(0, line - 1).reduce((total, value) => total + value.length + 1, 0);
    editor.focus();
    editor.setSelectionRange(offset, offset + (lines[line - 1]?.length ?? 0));
    const line_height = Number.parseFloat(getComputedStyle(editor).lineHeight) || 21;
    editor.scrollTop = Math.max(0, (line - 3) * line_height);
    editor.scrollLeft = 0;
}
/** Keep recognized source evidence next to each finding. */
function render_diagnostic(diagnostic) {
    const row = element('article', '', `diagnostic ${diagnostic.severity}`);
    const heading = element('div', '', 'diagnostic-heading');
    const jump = element('button', `L${diagnostic.line}`, 'line-link');
    jump.setAttribute('aria-label', `Go to line ${diagnostic.line}`);
    jump.title = `Go to line ${diagnostic.line}`;
    jump.type = 'button';
    jump.addEventListener('click', () => focus_line(diagnostic.line));
    add_icon(heading, diagnostic.severity === 'error' ? 'alert-circle' : diagnostic.severity === 'warning' ? 'alert-triangle' : 'info-circle');
    heading.append(element('span', diagnostic.severity, 'sr-only'), jump, element('code', diagnostic.key));
    row.append(heading, element('p', diagnostic.message));
    if (diagnostic.rule) {
        const evidence = element('details', '', 'evidence');
        const disclosure = element('summary', 'Definition');
        add_icon(disclosure, 'book-2');
        evidence.append(disclosure);
        evidence.append(element('p', `${diagnostic.rule.definition.name} · ${diagnostic.rule.definition.type}`));
        if (diagnostic.rule.definition.defined_in)
            evidence.append(element('code', diagnostic.rule.definition.defined_in));
        const link = element('a', `YAML definition, line ${diagnostic.rule.source_line}`);
        link.href = `https://github.com/Smoothieware/smoothieware-website-v1/blob/main${source_url.replace('/assets', '/docs/assets')}#L${diagnostic.rule.source_line}`;
        link.target = '_blank';
        link.rel = 'noopener';
        evidence.append(link);
        for (const page of (diagnostic.rule.definition.related_pages ?? []).slice(0, 2)) {
            if (!/^[a-z0-9-]+$/.test(page))
                continue;
            const documentation = element('a', page.replace(/-/g, ' '));
            documentation.href = `/${page}`;
            documentation.target = '_blank';
            documentation.rel = 'noopener';
            evidence.append(documentation);
        }
        row.append(evidence);
    }
    return row;
}
/** Filter only presentation; all findings remain counted. */
function render_findings() {
    const filter = document.querySelector('#filter').value;
    const visible = current_diagnostics.filter(item => filter === 'all' || item.severity === filter);
    results.replaceChildren(...visible.slice(0, 300).map(render_diagnostic));
    if (visible.length > 300)
        results.append(element('p', `Showing 300 of ${visible.length} findings. Narrow the filter or fix a group and check again.`));
    if (!visible.length)
        results.append(element('p', current_diagnostics.length ? 'No findings in this filter.' : 'No findings from the available checks.', 'empty-result'));
}
/** Re-run synchronously so summary and findings always describe the same input. */
function run_check() {
    if (!schema)
        return;
    if (!editor.value.trim()) {
        current_diagnostics = [];
        set_status('ready', 'info-circle');
        summary.textContent = 'Ready when you are';
        document.querySelector('#counts').textContent = 'Paste text, open a file or try the example.';
        results.replaceChildren(element('p', 'Findings appear here.', 'empty-result'));
        return;
    }
    const result = check_config(schema, editor.value);
    current_diagnostics = result.diagnostics;
    const errors = current_diagnostics.filter(item => item.severity === 'error').length;
    const warnings = current_diagnostics.filter(item => item.severity === 'warning').length;
    const notes = current_diagnostics.filter(item => item.severity === 'info').length;
    summary.textContent = !result.settings ? 'No settings to check' : errors ? `${errors} ${errors === 1 ? 'error needs' : 'errors need'} attention` : warnings ? 'Review the warnings' : 'No errors in available checks';
    set_status(errors ? 'error' : warnings ? 'warning' : 'checked', errors ? 'alert-circle' : warnings ? 'alert-triangle' : 'circle-check');
    show_counts(result.recognized, result.settings, errors, warnings, notes);
    render_findings();
}
/** Replace input atomically, invalidating unfinished file reads and debounced checks. */
function replace_input(value, label) {
    revision += 1;
    if (timer)
        clearTimeout(timer);
    editor.value = value;
    document.querySelector('#filename').textContent = label;
    document.querySelector('#input-error').textContent = '';
    run_check();
}
editor.addEventListener('input', () => {
    revision += 1;
    document.querySelector('#filename').textContent = 'Pasted / edited text';
    if (timer)
        clearTimeout(timer);
    summary.textContent = 'Checking…';
    timer = setTimeout(run_check, 300);
});
document.querySelector('#check').addEventListener('click', run_check);
editor.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        run_check();
    }
});
document.querySelector('#example').addEventListener('click', () => replace_input(examples[version], 'Syntax example'));
document.querySelector('#clear').addEventListener('click', () => { replace_input('', 'Paste text or open a file'); editor.focus(); });
document.querySelector('#filter').addEventListener('change', render_findings);
document.querySelector('#theme').addEventListener('click', () => {
    const is_dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = is_dark ? 'light' : 'dark';
    document.querySelector('#theme').setAttribute('aria-label', `Switch to ${is_dark ? 'dark' : 'light'} theme`);
});
document.querySelector('#file').addEventListener('change', async (event) => {
    const input = event.target;
    const file = input.files?.[0];
    input.value = '';
    if (!file)
        return;
    const read_revision = ++revision;
    if (file.size > 2000000) {
        document.querySelector('#input-error').textContent = 'Choose a text configuration smaller than 2 MB. Existing text is preserved.';
        return;
    }
    try {
        const content = await file.text();
        if (read_revision !== revision)
            return;
        if (content.includes('\0')) {
            document.querySelector('#input-error').textContent = 'This looks like a binary file. Choose a plain text configuration.';
            return;
        }
        replace_input(content, file.name);
    }
    catch (error) {
        if (read_revision === revision)
            document.querySelector('#input-error').textContent = 'The file could not be read. Existing text is preserved; try pasting it.';
        console.error('Error in app.ts:file_input', error);
    }
});
/** Fail closed: no successful checking state before definitions load and match the page version. */
async function initialize() {
    try {
        const response = await fetch(source_url);
        if (!response.ok)
            throw new Error(`Definition request failed (${response.status})`);
        const source = await response.text();
        const database = jsyaml.load(source);
        if (database.metadata.version !== version)
            throw new Error('Definition version mismatch');
        schema = create_schema(database, source);
        const bytes = new TextEncoder().encode(source);
        const hash = await crypto.subtle.digest('SHA-256', bytes);
        const digest = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
        document.querySelector('#provenance').textContent = `${schema.rules.length} definitions loaded · source updated ${database.metadata.last_updated} · SHA-256 ${digest}`;
        for (const button of document.querySelectorAll('[data-ready]'))
            button.disabled = false;
        run_check();
    }
    catch (error) {
        schema = undefined;
        set_status('error', 'alert-circle');
        summary.textContent = 'Definitions unavailable';
        results.replaceChildren(element('p', 'Checking is disabled. Reload to retry loading the version-specific definition file.', 'load-error'));
        console.error('Error in app.ts:initialize', error);
    }
}
void initialize();
