// Hand-written from src/site/lightbox.ts and lib/viewer-math.ts; the TypeScript build overwrites this file.

// src/site/lib/viewer-math.ts
function clamp(value, low, high) {
    return Math.min(high, Math.max(low, value));
}
function zoom_at(view, scale, px, py) {
    const ratio = scale / view.scale;
    return { scale, x: px - (px - view.x) * ratio, y: py - (py - view.y) * ratio };
}
function fit_view(picture, stage, vector, margin = 24) {
    const room = Math.min(
        Math.max(1, stage.width - margin * 2) / picture.width,
        Math.max(1, stage.height - margin * 2) / picture.height,
    );
    const scale = vector ? room : Math.min(room, 2);
    return { scale, x: (stage.width - picture.width * scale) / 2, y: (stage.height - picture.height * scale) / 2 };
}

// src/site/lightbox.ts
const MIN_SIDE = 90;
const IMAGE_URL = /\.(png|jpe?g|gif|webp|svg|avif)([?#].*)?$/i;

function find_items(root) {
    const items = [];
    root.querySelectorAll('img, .xb-fig svg, .xb-jumper svg').forEach((element) => {
        if (element.parentElement?.closest('svg') || element.closest('.no-zoom, .extension-instruction-diagram, .wiki-edit-callout, sl-button, button, .menu, setting, pin')) return;
        if (element.classList.contains('no-zoom') || element.closest('.xb-tour') && element.closest('a')) return;
        // A picture that links to a page keeps its link; one that links to a picture opens here.
        const link = element.closest('a');
        if (link && !IMAGE_URL.test(link.getAttribute('href') ?? '')) return;
        const box = element.getBoundingClientRect();
        const natural_width = element instanceof HTMLImageElement ? element.naturalWidth : element.viewBox.baseVal?.width ?? box.width;
        if (box.width < MIN_SIDE || box.height < MIN_SIDE / 2 || natural_width < 160) return;
        const figure = element.closest('figure');
        const caption = figure?.querySelector('figcaption')?.textContent
            ?? (element instanceof HTMLImageElement ? element.alt : element.querySelector('title')?.textContent)
            ?? '';
        items.push({ source: element, caption: caption.trim() });
    });
    return items;
}

function full_url(image) {
    const href = image.closest('a')?.getAttribute('href') ?? '';
    return IMAGE_URL.test(href) ? href : image.currentSrc || image.src;
}

function natural_size(item) {
    if (item.source instanceof HTMLImageElement) {
        return { width: item.source.naturalWidth || 800, height: item.source.naturalHeight || 600 };
    }
    const box = item.source.viewBox.baseVal;
    return { width: box?.width || 1000, height: box?.height || 600 };
}

function copy_of(item) {
    if (item.source instanceof HTMLImageElement) {
        const image = new Image();
        image.src = full_url(item.source);
        image.alt = item.source.alt;
        image.draggable = false;
        return image;
    }
    const svg = item.source.cloneNode(true);
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.removeAttribute('tabindex');
    svg.classList.remove('zoomable');
    return svg;
}

function button(label, text, action, class_name = '') {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = class_name;
    element.textContent = text;
    element.title = label;
    element.setAttribute('aria-label', label);
    element.addEventListener('click', action);
    return element;
}

class Viewer {
    dialog = document.createElement('dialog');
    stage = document.createElement('div');
    holder = document.createElement('div');
    caption = document.createElement('p');
    count = document.createElement('span');
    strip = document.createElement('div');
    open_link = document.createElement('a');
    items = [];
    index = 0;
    view = { x: 0, y: 0, scale: 1 };
    fitted = 1;
    size = { width: 1, height: 1 };
    pointers = new Map();
    moved = 0;
    opener = null;

    constructor() {
        this.dialog.className = 'lightbox';
        this.dialog.setAttribute('aria-label', 'Image viewer');

        const bar = document.createElement('div');
        bar.className = 'lb-bar';
        this.count.className = 'lb-count';
        this.count.setAttribute('aria-live', 'polite');
        const tools = document.createElement('div');
        tools.className = 'lb-tools';
        this.zoom_button = button('Fit to screen (0)', '100%', () => this.fit(true), 'lb-zoom');
        this.open_link.className = 'lb-open';
        this.open_link.textContent = 'Open file';
        this.open_link.target = '_blank';
        this.open_link.rel = 'noopener';
        tools.append(
            button('Zoom out (-)', '−', () => this.zoom_center(1 / 1.5)),
            this.zoom_button,
            button('Zoom in (+)', '+', () => this.zoom_center(1.5)),
            button('Actual size (1)', '1:1', () => this.zoom_center(1 / this.view.scale)),
            this.open_link,
            button('Close (Escape)', '✕', () => this.dialog.close()),
        );
        bar.append(this.count, tools);

        this.stage.className = 'lb-stage';
        this.holder.className = 'lb-item';
        const previous = button('Previous image (left arrow)', '‹', () => this.step(-1), 'lb-nav lb-prev');
        const next = button('Next image (right arrow)', '›', () => this.step(1), 'lb-nav lb-next');
        this.stage.append(this.holder, previous, next);
        this.caption.className = 'lb-caption';
        this.strip.className = 'lb-strip';
        this.dialog.append(bar, this.stage, this.caption, this.strip);
        document.body.append(this.dialog);

        this.stage.addEventListener('wheel', (event) => this.on_wheel(event), { passive: false });
        this.stage.addEventListener('pointerdown', (event) => this.on_down(event));
        this.stage.addEventListener('pointermove', (event) => this.on_move(event));
        for (const type of ['pointerup', 'pointercancel']) {
            this.stage.addEventListener(type, (event) => this.on_up(event));
        }
        this.stage.addEventListener('dblclick', (event) => {
            if (event.target.closest('button')) return;
            if (this.view.scale > this.fitted * 1.05) this.fit(true);
            else this.zoom(Math.max(2.5, 1 / this.view.scale), event.clientX, event.clientY, true);
        });
        this.dialog.addEventListener('keydown', (event) => this.on_key(event));
        this.dialog.addEventListener('close', () => {
            this.holder.replaceChildren();
            this.pointers.clear();
            this.opener?.focus({ preventScroll: true });
        });
        addEventListener('resize', () => { if (this.dialog.open) this.fit(false); });
    }

    open(items, index, opener) {
        this.items = items;
        this.opener = opener;
        this.strip.replaceChildren(...(items.length > 1 ? items.map((item, position) => {
            const thumb = button(`Image ${position + 1}`, '', () => this.show(position));
            if (item.source instanceof HTMLImageElement) {
                const image = new Image();
                image.src = item.source.currentSrc || item.source.src;
                image.alt = '';
                image.loading = 'lazy';
                thumb.append(image);
            } else {
                thumb.append(copy_of(item));
            }
            return thumb;
        }) : []));
        this.dialog.querySelectorAll('.lb-nav').forEach((nav) => { nav.hidden = items.length < 2; });
        this.dialog.showModal();
        this.show(index);
    }

    show(index) {
        this.index = (index + this.items.length) % this.items.length;
        const item = this.items[this.index];
        this.size = natural_size(item);
        const content = copy_of(item);
        this.holder.replaceChildren(content);
        if (content instanceof HTMLImageElement) {
            content.addEventListener('load', () => {
                if (this.holder.firstChild !== content || !content.naturalWidth) return;
                this.size = { width: content.naturalWidth, height: content.naturalHeight };
                this.fit(false);
            });
        }
        this.caption.textContent = item.caption;
        this.caption.hidden = !item.caption;
        this.count.textContent = `${this.index + 1} / ${this.items.length}`;
        this.open_link.hidden = !(item.source instanceof HTMLImageElement);
        if (item.source instanceof HTMLImageElement) this.open_link.href = full_url(item.source);
        [...this.strip.children].forEach((thumb, position) => {
            thumb.setAttribute('aria-current', String(position === this.index));
            if (position === this.index) thumb.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        });
        this.fit(false);
    }

    step(direction) {
        if (this.items.length > 1) this.show(this.index + direction);
    }

    fit(smooth) {
        const source = this.items[this.index].source;
        const vector = !(source instanceof HTMLImageElement) || /\.svg([?#]|$)/i.test(full_url(source));
        this.view = fit_view(this.size, { width: this.stage.clientWidth, height: this.stage.clientHeight }, vector);
        this.fitted = this.view.scale;
        this.apply(smooth);
    }

    apply(smooth) {
        this.stage.classList.toggle('is-smooth', smooth);
        const { x, y, scale } = this.view;
        // Resize rather than scale, so vector drawings and small text stay sharp.
        this.holder.style.width = `${this.size.width * scale}px`;
        this.holder.style.height = `${this.size.height * scale}px`;
        this.holder.style.transform = `translate(${x}px, ${y}px)`;
        this.zoom_button.textContent = `${Math.round(scale * 100)}%`;
    }

    zoom(factor, client_x, client_y, smooth) {
        const box = this.stage.getBoundingClientRect();
        const scale = clamp(this.view.scale * factor, this.fitted * 0.5, Math.max(8, this.fitted * 12));
        this.view = zoom_at(this.view, scale, client_x - box.left, client_y - box.top);
        this.apply(smooth);
    }

    zoom_center(factor) {
        const box = this.stage.getBoundingClientRect();
        this.zoom(factor, box.left + box.width / 2, box.top + box.height / 2, true);
    }

    pan(dx, dy, smooth = false) {
        this.view = { ...this.view, x: this.view.x + dx, y: this.view.y + dy };
        this.apply(smooth);
    }

    on_wheel(event) {
        event.preventDefault();
        const lines = event.deltaMode === 1 ? 20 : 1;
        this.zoom(Math.exp(-clamp(event.deltaY * lines, -240, 240) * 0.0022), event.clientX, event.clientY, false);
    }

    on_down(event) {
        if (event.target.closest('button') || event.button !== 0) return;
        this.stage.setPointerCapture(event.pointerId);
        if (this.pointers.size === 0) this.moved = 0;
        this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        this.stage.classList.add('is-dragging');
    }

    on_move(event) {
        const previous = this.pointers.get(event.pointerId);
        if (!previous) return;
        const current = { x: event.clientX, y: event.clientY };
        const other = [...this.pointers].find(([id]) => id !== event.pointerId)?.[1];
        this.pointers.set(event.pointerId, current);
        this.moved += Math.hypot(current.x - previous.x, current.y - previous.y);
        if (!other) {
            this.pan(current.x - previous.x, current.y - previous.y);
            return;
        }
        const before = Math.hypot(previous.x - other.x, previous.y - other.y);
        const after = Math.hypot(current.x - other.x, current.y - other.y);
        this.pan((current.x - previous.x) / 2, (current.y - previous.y) / 2);
        if (before > 0) this.zoom(after / before, (current.x + other.x) / 2, (current.y + other.y) / 2, false);
    }

    on_up(event) {
        if (!this.pointers.delete(event.pointerId) || this.pointers.size) return;
        this.stage.classList.remove('is-dragging');
        // A plain click on the dark surround closes the viewer.
        const box = this.holder.getBoundingClientRect();
        const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
        if (event.type === 'pointerup' && this.moved < 5 && outside) this.dialog.close();
    }

    on_key(event) {
        const zoomed = this.view.scale > this.fitted * 1.05;
        const actions = {
            ArrowLeft: () => zoomed && !event.shiftKey ? this.pan(80, 0, true) : this.step(-1),
            ArrowRight: () => zoomed && !event.shiftKey ? this.pan(-80, 0, true) : this.step(1),
            ArrowUp: () => this.pan(0, 80, true),
            ArrowDown: () => this.pan(0, -80, true),
            PageUp: () => this.step(-1),
            PageDown: () => this.step(1),
            Home: () => this.show(0),
            End: () => this.show(this.items.length - 1),
            '+': () => this.zoom_center(1.5),
            '=': () => this.zoom_center(1.5),
            '-': () => this.zoom_center(1 / 1.5),
            '0': () => this.fit(true),
            '1': () => this.zoom_center(1 / this.view.scale),
        };
        const action = Object.hasOwn(actions, event.key) ? actions[event.key] : undefined;
        if (!action || event.ctrlKey || event.metaKey || event.altKey) return;
        event.preventDefault();
        action();
    }
}

function start() {
    const root = document.querySelector('.markdown-body');
    if (!root) return;
    let viewer = null;
    let items = [];

    // Large pictures outside figures and tables are shown at half width too.
    const halve = (image) => {
        if (image.closest('figure, table, .menu, .no-zoom, .xb-tour')) return;
        const column = root.clientWidth;
        if (image.naturalWidth > 400 && image.getBoundingClientRect().width > column * 0.55) image.classList.add('half');
    };

    const mark = () => {
        items = find_items(root);
        items.forEach(({ source }) => {
            source.classList.add('zoomable');
            if (source.closest('a')) return;
            source.setAttribute('tabindex', '0');
            source.setAttribute('aria-haspopup', 'dialog');
        });
    };

    const open_from = (event) => {
        const target = event.target.closest('.zoomable');
        if (!target) return;
        mark();
        const index = items.findIndex((item) => item.source === target);
        if (index < 0) return;
        event.preventDefault();
        viewer ??= new Viewer();
        viewer.open(items, index, target);
    };

    root.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
        open_from(event);
    });
    root.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') open_from(event);
    });

    const settle = (image) => { halve(image); mark(); };
    root.querySelectorAll('img').forEach((image) => { if (image.complete) halve(image); });
    // Lazy and generated pictures arrive later; load events do not bubble, so capture them.
    root.addEventListener('load', (event) => {
        if (event.target instanceof HTMLImageElement) settle(event.target);
    }, true);
    mark();
    addEventListener('load', () => { root.querySelectorAll('img').forEach(halve); mark(); }, { once: true });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();
