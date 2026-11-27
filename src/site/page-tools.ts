/**
 * page-tools.ts — reading helpers present on every page: scrollable tables with
 * aligned numbers, copy buttons on code blocks, "On this page" contents on wide
 * screens, reading progress, back to top, quick page search (Ctrl+K or "/") and
 * linked highlighting between the numbers of a board tour and its list.
 */

import { search_pages, type Page } from './lib/search';

const NUMBER = /^[-+−~≈<>≤≥]?\s*\d[\d\s.,]*(\s?(%|mm|V|A|mA|W|kHz|MHz|ms|µs|°C|Ω|kΩ))?$/;

function dress_table(table: HTMLTableElement): void {
    const parent = table.parentElement;
    if (!parent || parent.closest('table') || parent.classList.contains('table-scroll')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    table.before(wrapper);
    wrapper.append(table);

    // Right-align a column only when every filled body cell in it is a number.
    const rows = [...table.tBodies].flatMap((body) => [...body.rows]);
    if (rows.length < 2 || table.querySelector('[colspan], [rowspan]')) return;
    for (let column = 1; column < rows[0].cells.length; column++) {
        const filled = rows.map((row) => row.cells[column]?.textContent?.trim() ?? '').filter((text) => !['', '—', '-', 'n/a'].includes(text));
        if (filled.length < 2 || !filled.every((text) => NUMBER.test(text))) continue;
        [...table.rows].forEach((row) => row.cells[column]?.classList.add('num'));
    }
}

function add_copy_button(block: HTMLPreElement): void {
    if (block.closest('.code-block, .code-popup, sl-tooltip, table')) return;
    const frame = document.createElement('div');
    frame.className = 'code-block';
    block.before(frame);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = 'Copy';
    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.innerText.replace(/\n$/, ''));
            button.textContent = 'Copied';
        } catch (error) {
            console.warn('page-tools: copying a code block failed', error);
            button.textContent = 'Select and copy';
        }
        setTimeout(() => { button.textContent = 'Copy'; }, 1600);
    });
    frame.append(block, button);
}

function is_shown(element: Element): boolean {
    return element.getClientRects().length > 0;
}

function build_contents(root: HTMLElement): void {
    if (root.querySelector('.xb-nav')) return;
    const headings = [...root.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id], h4[id]')]
        .filter((heading) => !heading.closest('sl-alert, sl-dialog, summary, .wiki-edit-callout, original'));
    if (headings.filter((heading) => heading.tagName === 'H2').length < 2) return;
    const nav = document.createElement('nav');
    nav.className = 'page-toc';
    nav.setAttribute('aria-label', 'On this page');
    const box = document.createElement('details');
    const title = document.createElement('summary');
    title.textContent = 'On this page';
    const list = document.createElement('ul');
    let section: HTMLHeadingElement | undefined;
    const entries = headings.map((heading) => {
        const item = document.createElement('li');
        if (heading.tagName !== 'H4') section = heading;
        else item.className = 'subsub';
        if (heading.tagName === 'H3') item.className = 'sub';
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        const copy = heading.cloneNode(true) as HTMLElement;
        copy.querySelectorAll('.heading-anchor, a[aria-hidden="true"], sl-tooltip [slot="content"]').forEach((node) => node.remove());
        link.textContent = (copy.textContent ?? '').replace(/\s*#\s*$/, '').trim();
        item.append(link);
        list.append(item);
        return { heading, item, link, section };
    });
    box.append(title, list);
    nav.append(box);
    // Beside the column on wide screens, a collapsed box above the text otherwise.
    const wide = matchMedia('(min-width: 1380px)');
    const place = (): void => {
        box.open = wide.matches;
        if (wide.matches) document.body.append(nav);
        else root.prepend(nav);
    };
    wide.addEventListener('change', place);
    title.addEventListener('click', (event) => { if (wide.matches) event.preventDefault(); });
    place();

    let waiting = false;
    const update = (): void => {
        waiting = false;
        let current: HTMLAnchorElement | undefined;
        let active: HTMLHeadingElement | undefined;
        for (const { heading, item, link, section } of entries) {
            // Headings of the hidden firmware version leave the contents too.
            const shown = is_shown(heading);
            item.hidden = !shown;
            link.removeAttribute('aria-current');
            if (shown && (heading.getBoundingClientRect().top < 140 || !current)) {
                current = link;
                active = section;
            }
        }
        // H4 entries only open under the section being read.
        for (const { heading, item, section } of entries) {
            if (heading.tagName === 'H4' && section !== active) item.hidden = true;
        }
        current?.setAttribute('aria-current', 'true');
        if (current && nav.scrollHeight > nav.clientHeight) {
            const offset = current.offsetTop;
            if (offset < nav.scrollTop || offset > nav.scrollTop + nav.clientHeight - 40) nav.scrollTop = offset - nav.clientHeight / 2;
        }
    };
    const schedule = (): void => {
        if (!waiting) { waiting = true; requestAnimationFrame(update); }
    };
    addEventListener('scroll', schedule, { passive: true });
    new ResizeObserver(schedule).observe(root);
    update();
}

function add_scroll_helpers(): void {
    const bar = document.createElement('div');
    bar.className = 'page-progress';
    bar.setAttribute('aria-hidden', 'true');
    const top = document.createElement('button');
    top.type = 'button';
    top.className = 'to-top';
    top.textContent = '↑';
    top.title = 'Back to top';
    top.setAttribute('aria-label', 'Back to top');
    top.addEventListener('click', () => scrollTo({ top: 0 }));
    document.body.append(bar, top);
    let waiting = false;
    const update = (): void => {
        waiting = false;
        const length = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${length > innerHeight ? Math.min(1, scrollY / length) : 0})`;
        top.classList.toggle('is-visible', scrollY > innerHeight);
    };
    addEventListener('scroll', () => {
        if (!waiting) { waiting = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
}

function link_tours(root: HTMLElement): void {
    root.querySelectorAll('.xb-tour').forEach((tour) => {
        const light = (id: string | null, on: boolean): void => {
            if (!id) return;
            tour.querySelectorAll(`.xb-mk[href="#${CSS.escape(id)}"], li[id="${CSS.escape(id)}"]`)
                .forEach((element) => element.classList.toggle('is-active', on));
        };
        tour.querySelectorAll('.xb-mk, .xb-tour-list li').forEach((element) => {
            const id = element.matches('li') ? element.id : element.getAttribute('href')?.slice(1) ?? null;
            for (const [type, on] of [['pointerenter', true], ['pointerleave', false], ['focusin', true], ['focusout', false]] as const) {
                element.addEventListener(type, () => light(id, on));
            }
        });
    });
}

class Search {
    private dialog = document.createElement('dialog');
    private input = document.createElement('input');
    private results = document.createElement('ul');
    private status = document.createElement('span');
    private google = document.createElement('a');
    private pages: Promise<Page[]> | null = null;
    private selected = 0;

    constructor(private index_url: string) {
        this.dialog.className = 'search-palette';
        this.dialog.setAttribute('aria-label', 'Search the documentation');
        this.input.type = 'search';
        this.input.placeholder = 'Search pages and sections…';
        this.input.setAttribute('aria-label', 'Search pages and sections');
        this.input.autocomplete = 'off';
        const footer = document.createElement('footer');
        this.google.target = '_blank';
        this.google.rel = 'noopener';
        this.google.textContent = 'Search the full text with Google';
        footer.append(this.status, this.google);
        this.dialog.append(this.input, this.results, footer);
        document.body.append(this.dialog);
        this.input.addEventListener('input', () => { this.selected = 0; void this.render(); });
        this.input.addEventListener('keydown', (event) => this.on_key(event));
        this.dialog.addEventListener('click', (event) => { if (event.target === this.dialog) this.dialog.close(); });
        this.results.addEventListener('click', () => this.dialog.close());
    }

    open(): void {
        if (this.dialog.open) return;
        this.dialog.showModal();
        this.input.select();
        void this.render();
    }

    private load(): Promise<Page[]> {
        this.pages ??= fetch(this.index_url).then((response) => {
            if (!response.ok) throw new Error(`${response.status} ${this.index_url}`);
            return response.json() as Promise<Page[]>;
        }).catch((error: unknown) => {
            console.warn('page-tools: the search index could not be loaded', error);
            this.pages = null;
            return [];
        });
        return this.pages;
    }

    private async render(): Promise<void> {
        const query = this.input.value.trim();
        this.google.href = `https://www.google.com/search?sitesearch=smoothieware.org&q=${encodeURIComponent(query)}`;
        const pages = await this.load();
        if (query !== this.input.value.trim()) return;
        const found = search_pages(pages, query);
        this.results.replaceChildren(...found.map((page, position) => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = page.url;
            link.setAttribute('aria-selected', String(position === this.selected));
            const title = document.createElement('b');
            title.textContent = page.title;
            const address = document.createElement('span');
            address.textContent = page.url;
            link.append(title, address);
            item.append(link);
            return item;
        }));
        this.status.textContent = !pages.length ? 'Page list unavailable'
            : !query ? `${pages.length} pages · ↑ ↓ Enter`
                : found.length ? '↑ ↓ to choose, Enter to open' : 'No page title or section matches';
    }

    private on_key(event: KeyboardEvent): void {
        const links = [...this.results.querySelectorAll('a')];
        if (event.key === 'Enter') {
            event.preventDefault();
            (links[this.selected] ?? this.google).click();
        } else if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && links.length) {
            event.preventDefault();
            this.selected = (this.selected + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
            links.forEach((link, position) => link.setAttribute('aria-selected', String(position === this.selected)));
            links[this.selected].scrollIntoView({ block: 'nearest' });
        }
    }
}

function add_search(): void {
    let search: Search | null = null;
    const open = (): void => { search ??= new Search('/search.json'); search.open(); };
    document.addEventListener('keydown', (event) => {
        const typing = (event.target as HTMLElement).closest?.('input, textarea, select, sl-input, [contenteditable="true"]');
        const shortcut = (event.key === 'k' && (event.ctrlKey || event.metaKey)) || (event.key === '/' && !typing && !event.ctrlKey && !event.metaKey);
        if (!shortcut || document.querySelector('dialog.lightbox[open]')) return;
        event.preventDefault();
        open();
    });
    const trigger = document.querySelector('[data-search-open]');
    trigger?.addEventListener('click', open);
}

function start(): void {
    const root = document.querySelector<HTMLElement>('.markdown-body');
    add_search();
    if (!root) return;
    const dress = (): void => {
        root.querySelectorAll('table').forEach(dress_table);
        root.querySelectorAll('pre').forEach(add_copy_button);
    };
    dress();
    // Tables built by other scripts appear after this one has run.
    let queued = false;
    new MutationObserver(() => {
        if (queued) return;
        queued = true;
        setTimeout(() => { queued = false; dress(); }, 250);
    }).observe(root, { childList: true, subtree: true });
    build_contents(root);
    add_scroll_helpers();
    link_tours(root);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();
