#!/usr/bin/env python3
"""Preserve the atlas as durable machine pages and emit compact index projections.

The immutable original captures migration history. Canonical article fragments are
updated only from full articles; compact index cards never replace detailed data.
"""
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit, unquote
import argparse, hashlib, html, json, os, re
from lxml import etree

ROOT = Path(__file__).resolve().parent
DOCS = ROOT.parent
SOURCE = DOCS / 'machine-control-pinout-survey.html'
CANON = ROOT / 'machine-page-source'
MANIFEST = ROOT / 'machine-pages-manifest.json'


def emit(kind, **fields):
    print(json.dumps({'type': kind, **fields}), flush=True)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def write(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + '.writing')
    temporary.write_text(value)
    os.replace(temporary, path)


def slug(value):
    return re.sub(r'[^a-z0-9]+', '-', value.lower().replace('₂', '2')).strip('-')


VIEWER = '<!-- atlas-viewer:start --><dialog id="machine-image-dialog" aria-label="Full-size diagram"><div class="machine-image-toolbar"><button id="machine-image-fit" type="button">Fit</button><button id="machine-image-close" type="button" aria-label="Close image">Close</button><span></span></div><div id="machine-image-viewport" role="button" tabindex="0" aria-label="Diagram: click or scroll to zoom, drag or use arrow keys to pan"><img id="machine-image-full" alt="" draggable="false"></div></dialog><script>(() => {\n  const dialog = document.querySelector(\'#figure-dialog, #machine-image-dialog\');\n  const stage = document.querySelector(\'#dialog-stage, #machine-image-viewport\');\n  const image = document.querySelector(\'#dialog-image, #machine-image-full\');\n  if (!dialog || !stage || !image) return;\n\n  const toolbar = dialog.querySelector(\'.atlas-viewer-toolbar, .machine-image-toolbar\');\n  const controls = document.createElement(\'div\');\n  controls.className = \'atlas-zoom-controls\';\n  controls.innerHTML = \'<button type="button" data-zoom="out" aria-label="Zoom out">−</button><label>Zoom <input data-zoom="range" type="range" min="0" max="1" step="0.001" value="0" aria-label="Diagram zoom, logarithmic scale from fit to readable detail"></label><output data-zoom="value" aria-live="polite">100%</output><button type="button" data-zoom="in" aria-label="Zoom in">+</button><div class="atlas-minimap" role="group" aria-label="Diagram minimap"><img alt="" draggable="false"><button type="button" class="atlas-minimap-window" aria-label="Minimap viewport. Use arrow keys to pan."></button></div></div>\';\n  const hint = toolbar.querySelector(\'.atlas-viewer-hint, span\');\n  toolbar.insertBefore(controls, hint || null);\n  if (hint) hint.textContent = \'Click or scroll to zoom; drag to pan. Use the slider or minimap to navigate. 100% is fit. Escape closes.\';\n  const range = controls.querySelector(\'[data-zoom="range"]\');\n  const output = controls.querySelector(\'[data-zoom="value"]\');\n  const map = controls.querySelector(\'.atlas-minimap\');\n  const map_image = map.querySelector(\'img\');\n  const map_window = map.querySelector(\'.atlas-minimap-window\');\n  map.setAttribute(\'aria-label\', \'Diagram minimap. Drag the outlined window or click a location to navigate.\');\n  let fit_scale = 1;\n  let zoom = 1;\n  let maximum_zoom = 8;\n  let offset_x = 0;\n  let offset_y = 0;\n  let drag = null;\n  let suppress_click_until = 0;\n  let opener = null;\n  let object_url = null;\n\n  function open_image(source, trigger, caption) {\n    opener = trigger;\n    image.src = source;\n    image.alt = trigger instanceof HTMLImageElement ? trigger.alt : caption;\n    const caption_node = dialog.querySelector(\'#dialog-caption\');\n    if (caption_node) caption_node.textContent = caption || image.alt;\n    dialog.showModal();\n    const close_button = dialog.querySelector(\'#close-dialog, #machine-image-close\');\n    close_button?.focus();\n    if (image.complete && image.naturalWidth) requestAnimationFrame(fit);\n    else image.addEventListener(\'load\', fit, { once:true });\n  }\n\n  function clamp_offsets() {\n    const width = image.naturalWidth * fit_scale * zoom;\n    const height = image.naturalHeight * fit_scale * zoom;\n    offset_x = width <= stage.clientWidth ? (stage.clientWidth - width) / 2 : Math.min(0, Math.max(stage.clientWidth - width, offset_x));\n    offset_y = height <= stage.clientHeight ? (stage.clientHeight - height) / 2 : Math.min(0, Math.max(stage.clientHeight - height, offset_y));\n  }\n\n  function sync() {\n    clamp_offsets();\n    const scale = fit_scale * zoom;\n    image.style.width = `${image.naturalWidth}px`;\n    image.style.height = `${image.naturalHeight}px`;\n    image.style.transform = `translate(${offset_x}px, ${offset_y}px) scale(${scale})`;\n    range.value = String(Math.log(zoom) / Math.log(maximum_zoom));\n    output.value = `${Math.round(zoom * 100)}%`;\n    output.textContent = output.value;\n    update_minimap();\n  }\n\n  function update_minimap() {\n    if (!image.naturalWidth || !image.naturalHeight) return;\n    const bounds = map.getBoundingClientRect();\n    const scale = Math.min(bounds.width / image.naturalWidth, bounds.height / image.naturalHeight);\n    const drawn_width = image.naturalWidth * scale;\n    const drawn_height = image.naturalHeight * scale;\n    const inset_x = (bounds.width - drawn_width) / 2;\n    const inset_y = (bounds.height - drawn_height) / 2;\n    map_image.style.width = `${drawn_width}px`;\n    map_image.style.height = `${drawn_height}px`;\n    map_image.style.left = `${inset_x}px`;\n    map_image.style.top = `${inset_y}px`;\n    const view_width = Math.min(drawn_width, stage.clientWidth / (fit_scale * zoom) * scale);\n    const view_height = Math.min(drawn_height, stage.clientHeight / (fit_scale * zoom) * scale);\n    map_window.style.width = `${view_width}px`;\n    map_window.style.height = `${view_height}px`;\n    map_window.style.left = `${inset_x + (-offset_x / (image.naturalWidth * fit_scale * zoom)) * drawn_width}px`;\n    map_window.style.top = `${inset_y + (-offset_y / (image.naturalHeight * fit_scale * zoom)) * drawn_height}px`;\n  }\n\n  function fit() {\n    if (!image.naturalWidth || !image.naturalHeight) return;\n    fit_scale = Math.min(stage.clientWidth / image.naturalWidth, stage.clientHeight / image.naturalHeight);\n    // Reach at least 1.5 rendered pixels per source unit even for very tall schedules.\n    maximum_zoom = Math.max(8, 1.5 / fit_scale);\n    zoom = 1;\n    offset_x = (stage.clientWidth - image.naturalWidth * fit_scale) / 2;\n    offset_y = (stage.clientHeight - image.naturalHeight * fit_scale) / 2;\n    map_image.src = image.currentSrc || image.src;\n    sync();\n  }\n\n  function zoom_at(next_zoom, client_x, client_y) {\n    const rect = stage.getBoundingClientRect();\n    const x = client_x - rect.left;\n    const y = client_y - rect.top;\n    const old_scale = fit_scale * zoom;\n    const image_x = (x - offset_x) / old_scale;\n    const image_y = (y - offset_y) / old_scale;\n    zoom = Math.min(maximum_zoom, Math.max(1, next_zoom));\n    const new_scale = fit_scale * zoom;\n    offset_x = x - image_x * new_scale;\n    offset_y = y - image_y * new_scale;\n    sync();\n  }\n\n  image.addEventListener(\'load\', fit);\n  stage.addEventListener(\'wheel\', event => {\n    if (!image.naturalWidth) return;\n    event.preventDefault();\n    zoom_at(zoom * Math.exp(-event.deltaY * 0.0015), event.clientX, event.clientY);\n  }, { passive: false });\n  stage.addEventListener(\'click\', event => {\n    if (performance.now() < suppress_click_until) return;\n    zoom_at(zoom > 1 ? 1 : 2.5, event.clientX, event.clientY);\n  });\n  range.addEventListener(\'input\', () => zoom_at(Math.exp(Number(range.value) * Math.log(maximum_zoom)), stage.getBoundingClientRect().left + stage.clientWidth / 2, stage.getBoundingClientRect().top + stage.clientHeight / 2));\n  controls.querySelector(\'[data-zoom="in"]\').addEventListener(\'click\', () => zoom_at(zoom * 1.25, stage.getBoundingClientRect().left + stage.clientWidth / 2, stage.getBoundingClientRect().top + stage.clientHeight / 2));\n  controls.querySelector(\'[data-zoom="out"]\').addEventListener(\'click\', () => zoom_at(zoom / 1.25, stage.getBoundingClientRect().left + stage.clientWidth / 2, stage.getBoundingClientRect().top + stage.clientHeight / 2));\n  stage.addEventListener(\'pointerdown\', event => {\n    if (event.button !== 0 || zoom <= 1) return;\n    drag = { x: event.clientX, y: event.clientY, offset_x, offset_y, id: event.pointerId, moved:false };\n    stage.setPointerCapture(event.pointerId);\n  });\n  stage.addEventListener(\'pointermove\', event => {\n    if (!drag || drag.id !== event.pointerId) return;\n    if (Math.abs(event.clientX - drag.x) + Math.abs(event.clientY - drag.y) > 4) drag.moved = true;\n    offset_x = drag.offset_x + event.clientX - drag.x;\n    offset_y = drag.offset_y + event.clientY - drag.y;\n    sync();\n  });\n  for (const name of [\'pointerup\', \'pointercancel\']) stage.addEventListener(name, event => {\n    if (drag?.id !== event.pointerId) return;\n    if (drag.moved) suppress_click_until = performance.now() + 120;\n    drag = null;\n  });\n  stage.addEventListener(\'keydown\', event => {\n    if (event.key === \'Enter\' || event.key === \' \') {\n      event.preventDefault();\n      zoom_at(zoom > 1 ? 1 : 2.5,\n        stage.getBoundingClientRect().left + stage.clientWidth / 2,\n        stage.getBoundingClientRect().top + stage.clientHeight / 2);\n      return;\n    }\n    const step = 48;\n    const moves = { ArrowLeft:[step, 0], ArrowRight:[-step, 0], ArrowUp:[0, step], ArrowDown:[0, -step] };\n    const move = moves[event.key];\n    if (!move) return;\n    event.preventDefault();\n    offset_x += move[0]; offset_y += move[1]; sync();\n  });\n  map_window.addEventListener(\'keydown\', event => {\n    const move = { ArrowLeft:[-24, 0], ArrowRight:[24, 0], ArrowUp:[0, -24], ArrowDown:[0, 24] }[event.key];\n    if (!move) return;\n    event.preventDefault(); offset_x -= move[0]; offset_y -= move[1]; sync();\n  });\n  map.addEventListener(\'pointerdown\', event => {\n    if (event.target === map_window) return;\n    const rect = map_image.getBoundingClientRect();\n    const natural_x = (event.clientX - rect.left) / rect.width * image.naturalWidth;\n    const natural_y = (event.clientY - rect.top) / rect.height * image.naturalHeight;\n    offset_x = stage.clientWidth / 2 - natural_x * fit_scale * zoom;\n    offset_y = stage.clientHeight / 2 - natural_y * fit_scale * zoom;\n    sync();\n  });\n  map_window.addEventListener(\'pointerdown\', event => {\n    drag = { map: true, x:event.clientX, y:event.clientY, offset_x, offset_y, id:event.pointerId };\n    map_window.setPointerCapture(event.pointerId);\n    event.stopPropagation();\n  });\n  map_window.addEventListener(\'pointermove\', event => {\n    if (!drag?.map || drag.id !== event.pointerId) return;\n    const rect = map_image.getBoundingClientRect();\n    const factor_x = image.naturalWidth * fit_scale * zoom / rect.width;\n    const factor_y = image.naturalHeight * fit_scale * zoom / rect.height;\n    offset_x = drag.offset_x - (event.clientX - drag.x) * factor_x;\n    offset_y = drag.offset_y - (event.clientY - drag.y) * factor_y;\n    sync();\n  });\n  for (const name of [\'pointerup\', \'pointercancel\']) map_window.addEventListener(name, () => { drag = null; });\n  document.addEventListener(\'click\', event => {\n    if (!(event.target instanceof Element)) return;\n    if (dialog.contains(event.target)) return;\n    const link = event.target.closest(\'main a[href]\');\n    if (link) {\n      // Keep navigation, explicit downloads and browser new-tab gestures native.\n      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.hasAttribute(\'download\')) return;\n      let linked_image;\n      try { linked_image = new URL(link.href, document.baseURI); }\n      catch { return; }\n      if (![\'http:\', \'https:\', \'file:\'].includes(linked_image.protocol) || linked_image.origin !== location.origin || linked_image.protocol !== location.protocol || !/\\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)$/i.test(linked_image.pathname)) return;\n      event.preventDefault();\n      event.stopPropagation();\n      open_image(linked_image.href, link, link.dataset.caption || link.textContent.trim());\n      return;\n    }\n    const trigger = event.target.closest(\'.zoom-figure\') || event.target.closest(\'main img\');\n    if (!trigger) return;\n    event.preventDefault();\n    event.stopPropagation();\n    const source = trigger.matches(\'img\') ? trigger : trigger.querySelector(\'img\');\n    if (!source) return;\n    open_image(source.currentSrc || source.src, trigger,\n      trigger.dataset.caption || source.alt);\n  });\n  document.querySelectorAll(\'main img\').forEach(source => {\n    if (dialog.contains(source)) return;\n    const trigger = source.closest(\'.zoom-figure\') || source;\n    if (trigger instanceof HTMLButtonElement) return;\n    source.tabIndex = 0;\n    source.setAttribute(\'role\', \'button\');\n    source.addEventListener(\'keydown\', event => {\n      if (event.key !== \'Enter\' && event.key !== \' \') return;\n      event.preventDefault();\n      source.click();\n    });\n  });\n  document.querySelectorAll(\'main svg\').forEach(svg => {\n    const trigger = svg.closest(\'button.zoom-figure\') || svg;\n    if (trigger === svg) {\n      svg.tabIndex = 0;\n      svg.setAttribute(\'role\', \'button\');\n      svg.addEventListener(\'keydown\', event => {\n        if (event.key !== \'Enter\' && event.key !== \' \') return;\n        event.preventDefault();\n        svg.dispatchEvent(new MouseEvent(\'click\', { bubbles:true, cancelable:true, view:window }));\n      });\n    }\n    trigger.addEventListener(\'click\', event => {\n      event.preventDefault();\n      event.stopPropagation();\n      if (object_url) URL.revokeObjectURL(object_url);\n      const copy = svg.cloneNode(true);\n      copy.setAttribute(\'xmlns\', \'http://www.w3.org/2000/svg\');\n      object_url = URL.createObjectURL(new Blob(\n        [new XMLSerializer().serializeToString(copy)], { type:\'image/svg+xml\' }));\n      open_image(object_url, trigger,\n        trigger.dataset.caption || svg.getAttribute(\'aria-label\') || \'Diagram\');\n    });\n  });\n  const fit_button = dialog.querySelector(\'#fit-dialog, #machine-image-fit\');\n  fit_button?.addEventListener(\'click\', fit);\n  const close_button = dialog.querySelector(\'#close-dialog, #machine-image-close\');\n  close_button?.addEventListener(\'click\', () => dialog.close());\n  dialog.addEventListener(\'click\', event => {\n    if (event.target === dialog) dialog.close();\n  });\n  dialog.addEventListener(\'close\', () => {\n    if (dialog.open) return;\n    image.removeAttribute(\'src\');\n    map_image.removeAttribute(\'src\');\n    if (object_url) URL.revokeObjectURL(object_url);\n    object_url = null;\n    opener?.focus();\n    opener = null;\n  });\n  window.addEventListener(\'resize\', () => { if (dialog.open) fit(); });\n})();\n</script><!-- atlas-viewer:end -->'

VIEWER_CSS = '.atlas-zoom-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n\n.atlas-zoom-controls label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.atlas-zoom-controls input[type="range"] {\n  width: min(18vw, 12rem);\n  min-width: 7rem;\n}\n\n.atlas-zoom-controls output {\n  min-width: 3.5rem;\n  font-variant-numeric: tabular-nums;\n}\n\n.atlas-minimap {\n  position: relative;\n  width: 10rem;\n  height: 6rem;\n  overflow: hidden;\n  border: 1px solid #b8cbd0;\n  background: #0b1f26;\n  touch-action: none;\n}\n\n.atlas-minimap > img {\n  position: absolute;\n  max-width: none;\n  object-fit: fill;\n  opacity: 0.78;\n  user-select: none;\n  pointer-events: none;\n}\n\n.atlas-minimap-window {\n  position: absolute;\n  box-sizing: border-box;\n  min-width: 8px;\n  min-height: 8px;\n  padding: 0;\n  border: 2px solid #ffd37f;\n  background: #ffd37f30;\n  cursor: move;\n  touch-action: none;\n}\n\n.atlas-viewer-toolbar .atlas-zoom-controls .atlas-minimap-window,\n.machine-image-toolbar .atlas-zoom-controls .atlas-minimap-window {\n  padding: 0;\n  border: 2px solid #ffd37f;\n  background: #ffd37f30;\n  cursor: move;\n}\n\n.atlas-minimap-window:focus-visible {\n  outline: 2px solid #fff;\n  outline-offset: 2px;\n}\n\n#dialog-image,\n#machine-image-full {\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: none;\n  max-height: none;\n  object-fit: fill;\n  transform-origin: top left;\n  will-change: transform;\n  user-select: none;\n  cursor: grab;\n}\n\n#dialog-stage,\n#machine-image-viewport {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n.atlas-viewer-toolbar,\n.machine-image-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.atlas-viewer-toolbar .atlas-zoom-controls button {\n  padding: 0.35rem 0.65rem;\n  border: 1px solid #83a1a5;\n  border-radius: 0.3rem;\n  color: #fff;\n  background: #193d48;\n  cursor: pointer;\n  font: inherit;\n}\n\n.machine-image-toolbar .atlas-zoom-controls button {\n  padding: 0.35rem 0.65rem;\n  border: 1px solid var(--rule, #73858a);\n  border-radius: 0.3rem;\n  color: var(--ink, #eef5f3);\n  background: var(--panel, #193d48);\n  cursor: pointer;\n  font: inherit;\n}\n\n.machine-image-toolbar > button {\n  padding: 0.35rem 0.65rem;\n  border: 1px solid var(--rule, #73858a);\n  border-radius: 0.3rem;\n  color: var(--ink, #eef5f3);\n  background: var(--panel, #193d48);\n  cursor: pointer;\n  font: inherit;\n}\n\n.atlas-zoom-controls button:focus-visible,\n.atlas-zoom-controls input:focus-visible {\n  outline: 3px solid #ffd37f;\n  outline-offset: 2px;\n}\n\n.atlas-viewer-toolbar .atlas-zoom-controls input[type="range"] {\n  accent-color: #ffd37f;\n}\n\n.machine-image-toolbar .atlas-zoom-controls input[type="range"] {\n  accent-color: #007d88;\n}\n\n.machine-image-toolbar #machine-image-fit {\n  order: 0;\n}\n\n.machine-image-toolbar .atlas-zoom-controls {\n  order: 1;\n}\n\n.machine-image-toolbar span {\n  order: 2;\n  flex: 1 1 10rem;\n}\n\n.machine-image-toolbar {\n  z-index: 2;\n}\n\n.machine-image-toolbar #machine-image-close {\n  position: static;\n  order: 3;\n  margin-left: auto;\n}\n\n.atlas-viewer-hint {\n  flex: 1 1 12rem;\n}\n\n@media (max-width: 650px) {\n  .atlas-minimap {\n    width: 7rem;\n    height: 4.2rem;\n  }\n\n  .atlas-zoom-controls input[type="range"] {\n    width: 22vw;\n    min-width: 5rem;\n  }\n}\n\n#figure-dialog #dialog-image,#machine-image-dialog #machine-image-full{position:absolute;inset:0 auto auto 0;display:block;max-width:none;max-height:none;margin:0;object-fit:fill;transform-origin:top left}\n#figure-dialog #dialog-stage,#machine-image-dialog #machine-image-viewport{position:relative;flex:1;min-height:0;height:0;width:100%;overflow:hidden;touch-action:none}\n#machine-image-dialog{position:fixed;inset:0;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0;overflow:hidden;background:var(--paper, #0b1f26);color:var(--ink, #eef5f3)}\n#machine-image-dialog[open]{display:flex;flex-direction:column}\n#machine-image-dialog .machine-image-toolbar{position:relative;inset:auto;flex:none;padding:.55rem .8rem;background:var(--paper, #0b1f26);color:var(--ink, #eef5f3)}\n#machine-image-dialog #machine-image-close{position:static;inset:auto}\n#figure-dialog .atlas-viewer-toolbar,#machine-image-dialog .machine-image-toolbar{flex-shrink:0}\n#figure-dialog .atlas-viewer-toolbar .atlas-zoom-controls .atlas-minimap-window,#machine-image-dialog .machine-image-toolbar .atlas-zoom-controls .atlas-minimap-window{padding:0;border:2px solid #ffd37f;background:#ffd37f30;cursor:move;border-radius:0;min-width:0;min-height:0}\n#machine-image-dialog::backdrop{background:rgb(0 0 0 / 85%)}\n@media print{#machine-image-dialog{display:none!important}}\n'

CSS = 'body{overflow-wrap:anywhere}.machine-page-nav{display:flex;gap:1rem;flex-wrap:wrap;padding:1rem;border-bottom:1px solid var(--rule)}.machine-page-title{font-size:clamp(1.7rem,4vw,3rem);line-height:1.1;margin:1.5rem 0}.machine-profile{display:block!important}.machine-page-history{margin-top:2rem}main img{max-width:100%;cursor:zoom-in}.table-wrap{overflow:auto}details:not([open])>:not(summary){display:none}' + VIEWER_CSS


def capture():
    CANON.mkdir(parents=True, exist_ok=True)
    original = CANON / 'original-atlas.html'
    if not original.exists():
        with original.open('xb') as target:
            target.write(SOURCE.read_bytes())
    soup = BeautifulSoup(original.read_text(), 'lxml')
    styles = '\n'.join(t.get_text() for t in soup.find_all('style'))
    write(CANON / 'inline-styles.css', styles)
    articles = soup.select('article.machine-profile')
    for article in articles:
        path = CANON / 'articles' / (article['id'] + '.html')
        if not path.exists():
            write(path, str(article))
    extras = []
    for element in soup.find_all(['section', 'details']):
        if element.find_parent('article') or not element.get('id'):
            continue
        identifier = element['id']
        if identifier == 'forum-machine-build-records':
            continue
        if identifier.startswith(('wiki-', 'atlas-')) or identifier == 'centered-wiring-request':
            if element.find_parent(['section', 'details']):
                continue
            extras.append({'id': identifier, 'html': str(element)})
    write(CANON / 'historical-appendices.json', json.dumps(extras, indent=2))
    emit('artifact', path=str(original), sha256=digest(original.read_bytes()), profiles=len(articles))


def has_local_image_link(soup):
    """Image-file anchors in main also require the shared reader viewer."""
    for link in soup.select('main a[href]'):
        if link.has_attr('download'):
            continue
        parts = urlsplit(link['href'])
        if parts.scheme or parts.netloc:
            continue
        if re.search(r'\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)$', parts.path, re.I):
            return True
    return False


class Assets:
    """Copy only the dependency closure, rebasing every owned reference."""
    def __init__(self, page, mapping):
        self.page = page
        self.folder = page.with_suffix('')
        self.mapping = mapping
        self.copied = {}
        self.missing = []

    def url(self, value, base, output, load=False):
        if not value or value.startswith(('data:', 'mailto:', 'tel:', 'javascript:')):
            return value
        parts = urlsplit(value)
        if parts.scheme or parts.netloc:
            if load:
                self.missing.append({'url': value, 'reason': 'remote load-bearing resource'})
            return value
        if value.startswith('#'):
            target = self.mapping.get(parts.fragment)
            if target and target != self.page:
                return os.path.relpath(target, output.parent) + '#' + parts.fragment
            return value
        source = (DOCS / unquote(parts.path.lstrip('/')) if parts.path.startswith('/') else base.parent / unquote(parts.path)).resolve()
        suffix = ('?' + parts.query if parts.query else '') + ('#' + parts.fragment if parts.fragment else '')
        if not load and source in {Path(page).resolve() for page in self.mapping.values()}:
            # Canonical reader pages are navigation destinations, not owned resources.
            target = Path(self.mapping.get(unquote(parts.fragment), source)).resolve()
            if parts.path.startswith('/'):
                if target == source:
                    return value
                return '/' + target.relative_to(DOCS.resolve()).as_posix() + suffix
            return os.path.relpath(target, output.parent) + suffix
        if source == SOURCE.resolve():
            target = self.mapping.get(unquote(parts.fragment), SOURCE)
            return os.path.relpath(target, output.parent) + suffix
        if not source.is_file():
            self.missing.append({'url': value, 'base': str(base), 'reason': 'missing local resource'})
            return value
        try:
            relative = source.relative_to(DOCS.resolve())
        except ValueError:
            self.missing.append({'url': value, 'reason': 'outside docs source boundary'})
            return value
        destination = self.folder / relative
        self.copy(source, destination)
        return os.path.relpath(destination, output.parent) + ('?' + parts.query if parts.query else '') + ('#' + parts.fragment if parts.fragment else '')

    def rewrite(self, soup, base, output):
        for tag in soup.find_all(True):
            for attribute in ['src', 'href', 'poster', 'data-src', 'data-full-src', 'data-image', 'data-svg']:
                if tag.has_attr(attribute) and not tag.has_attr('data-owned-navigation'):
                    load = attribute != 'href' or tag.name in ['link', 'use', 'image']
                    tag[attribute] = self.url(tag[attribute], base, output, load)
            if tag.has_attr('srcset'):
                tag['srcset'] = ', '.join(self.url(part.strip().split()[0], base, output, True) + (' ' + ' '.join(part.strip().split()[1:]) if len(part.strip().split()) > 1 else '') for part in tag['srcset'].split(','))
            if tag.has_attr('style'):
                tag['style'] = self.css(tag['style'], base, output)
        for style in soup.find_all('style'):
            style.string = self.css(style.get_text(), base, output)
        return soup

    def css(self, text, base, output):
        return re.sub(r'url\(\s*["\']?([^\)"\']+)["\']?\s*\)', lambda m: 'url("' + self.url(m[1], base, output, True) + '")', text)

    def copy(self, source, destination):
        if str(destination) in self.copied:
            return
        self.copied[str(destination)] = {'path': str(destination.relative_to(ROOT)), 'source_sha256': digest(source.read_bytes())}
        destination.parent.mkdir(parents=True, exist_ok=True)
        if source.suffix.lower() == '.html':
            nested = Assets(destination, self.mapping)
            linked = nested.rewrite(BeautifulSoup(source.read_text(), 'lxml'), source, destination)
            self.copied.update(nested.copied)
            self.missing.extend(nested.missing)
            # Linked historical schedules also retain a standalone native viewer.
            if linked.body and (linked.find('img') or linked.find('svg') or has_local_image_link(linked)):
                linked.body.append(BeautifulSoup(VIEWER, 'html.parser'))
                if linked.head: linked.head.append(BeautifulSoup('<style>'+CSS+'</style>', 'html.parser'))
            write(destination, str(linked))
        elif source.suffix.lower() in ['.svg', '.css']:
            if source.suffix.lower() == '.svg':
                # Rewrite parsed values so CSS quotes remain escaped XML attributes.
                parser = etree.XMLParser(
                    resolve_entities=False,
                    no_network=True,
                    remove_comments=False,
                    strip_cdata=False,
                    recover=False,
                )
                tree = etree.parse(str(source), parser)
                xlink_href = '{http://www.w3.org/1999/xlink}href'
                for element in tree.getroot().iter():
                    if not isinstance(element.tag, str):
                        continue
                    local_name = etree.QName(element).localname
                    navigation = local_name == 'a'
                    for attribute, value in list(element.attrib.items()):
                        if attribute in {'href', xlink_href}:
                            element.set(attribute, self.url(value, source, destination, not navigation))
                        else:
                            element.set(attribute, self.css(value, source, destination))
                    if local_name == 'style' and element.text:
                        element.text = self.css(element.text, source, destination)
                text = etree.tostring(tree, encoding='unicode')
            else:
                text = self.css(source.read_text(), source, destination)
            write(destination, text)
        else:
            temporary = destination.with_name(destination.name + '.writing')
            temporary.write_bytes(source.read_bytes())
            os.replace(temporary, destination)
        self.copied[str(destination)]['sha256'] = digest(destination.read_bytes())


def build_history(original, mapping, styles):
    """Keep every non-profile source section as a reader-accessible archive."""
    page = ROOT / 'history.html'
    source = BeautifulSoup(str(original), 'lxml')
    for article in source.select('article.machine-profile'):
        article.decompose()
    for landmark in source.find_all('main'):
        landmark.unwrap()
    for script in source.find_all('script'):
        script.decompose()
    for style in source.find_all('style'):
        style.decompose()
    for dialog in source.find_all('dialog'):
        dialog.decompose()
    for disclosure in source.find_all('details'):
        disclosure.attrs.pop('open', None)
    for chapter in source.select('section.atlas-research-chapter'):
        heading = chapter.find(['h2','h3','h4'])
        wrapper = source.new_tag('details', attrs={'class':'machine-page-history'})
        summary = source.new_tag('summary')
        summary.string = heading.get_text(' ',strip=True) if heading else chapter.get('id','Retained research chapter')
        wrapper.append(summary)
        chapter.replace_with(wrapper)
        wrapper.append(chapter)
    body = source.body.decode_contents() if source.body else str(source)
    request = CANON/'migration-request.txt'
    if request.exists(): body += '<details class="machine-page-history"><summary>Migration request · 2026-10-01</summary><blockquote><pre>'+html.escape(request.read_text())+'</pre></blockquote><p>Session transcript: <code>/home/arthur/.codex/sessions/2026/09/23/rollout-2026-09-23T02-58-07-01a0cbc5-19d8-7d00-a737-6725e9cab16f.jsonl</code></p></details>'
    content = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Machine wiring atlas · retained research history</title><style>'+styles+'\n'+CSS+'</style></head><body><nav class="machine-page-nav"><a data-owned-navigation="true" href="../machine-control-pinout-survey.html">Current machine index</a></nav><main><h1 class="machine-page-title">Retained atlas research and source history</h1><p>This archive preserves the previous atlas introduction, source references, safety context, dossier navigation and chronological research chapters. Individual machine records now live on their own linked pages.</p>'+body+'</main>'+VIEWER+'</body></html>'
    assets = Assets(page, mapping)
    rewritten = assets.rewrite(BeautifulSoup(content, 'lxml'), SOURCE, page)
    write(page, str(rewritten))
    receipt = {'page':'history.html','sha256':digest(page.read_bytes()),'assets':list(assets.copied.values()),'missing':assets.missing}
    write(ROOT/'machine-history-manifest.json', json.dumps(receipt,indent=2))
    emit('artifact', path=str(page), assets=len(assets.copied), missing=len(assets.missing))


def build(ids, update_index=None):
    if update_index is None: update_index = 'machine-detail-link' in SOURCE.read_text()
    if not (CANON / 'original-atlas.html').exists(): capture()
    original = BeautifulSoup((CANON / 'original-atlas.html').read_text(), 'lxml')
    articles = original.select('article.machine-profile')
    mapping = {}
    for article in articles:
        page = ROOT / 'machines' / slug(article.get('data-category', 'other')) / (article['id'] + '.html')
        for node in [article] + article.find_all(id=True):
            mapping[node['id']] = page
    previous = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {'profiles': {}}
    records = previous.get('profiles', {})
    appendices = json.loads((CANON / 'historical-appendices.json').read_text())
    styles = (CANON / 'inline-styles.css').read_text()
    if not (ROOT/'history.html').exists(): build_history(original,mapping,styles)
    machine_data = {}
    for name, key in [('centered-guides.json','guides'),('retrofit-guides.json','guides'),('machine-side-graph-snapshot.json','profiles'),('forum-peripheral-evidence.json','profiles'),('source-scoped-reference-connectors.json','profiles')]:
        source_data = ROOT / name
        if source_data.exists():
            values = json.loads(source_data.read_text()).get(key, {})
            machine_data[name] = values if isinstance(values, dict) else {v['id']:v for v in values}
    for number, baseline in enumerate(articles, 1):
        identifier = baseline['id']
        if ids and identifier not in ids: continue
        fragment = CANON / 'articles' / (identifier + '.html')
        article = BeautifulSoup(fragment.read_text(), 'lxml').select_one('article.machine-profile')
        page = mapping[identifier]
        title = article.select_one('.atlas-profile-name').get_text(' ', strip=True)
        original_text = article.get_text(' ', strip=True)
        history = ['<details class="machine-page-history"><summary>Shared atlas source and research history</summary><p><a data-owned-navigation="true" href="../../history.html">Read retained atlas introduction, safety references, all forum dossier links and earlier research chapters</a></p></details>']
        previous_centered = ROOT / 'square-redesign-history' / ('centered-'+identifier+'.svg')
        if previous_centered.is_file():
            history.append('<details class="machine-page-history"><summary>Previous tall controller-centered diagram · retained history</summary><figure><img loading="lazy" src="/machine-control-pinout-survey/square-redesign-history/centered-'+identifier+'.svg" alt="Previous controller-centered layout for '+html.escape(title)+'"><figcaption>Retained previous layout, superseded by the compact square controller diagram.</figcaption></figure></details>')
        request = Path('/tmp/atlas330-new-owner-request.txt')
        if request.is_file():
            preserved_request = CANON / 'migration-request.txt'
            if not preserved_request.exists(): write(preserved_request, request.read_text())
        preserved_request = CANON / 'migration-request.txt'
        if preserved_request.exists():
            history.append('<details class="machine-page-history"><summary>Machine-page migration request · 2026-10-01</summary><blockquote><pre>'+html.escape(preserved_request.read_text())+'</pre></blockquote><p>Session transcript: <code>/home/arthur/.codex/sessions/2026/09/23/rollout-2026-09-23T02-58-07-01a0cbc5-19d8-7d00-a737-6725e9cab16f.jsonl</code></p></details>')
        for item in appendices:
            associated = item['id'].startswith(identifier + '-')
            shared = item['id'].startswith('atlas-') or item['id'] == 'centered-wiring-request'
            if associated or shared:
                history.append('<details class="machine-page-history"><summary>Retained research chapter · '+html.escape(item['id'])+'</summary>'+item['html']+'</details>')
        assets = Assets(page, mapping)
        export = {name: values[identifier] for name, values in machine_data.items() if identifier in values}
        export_path = page.with_suffix('') / 'machine-data.json'
        write(export_path, json.dumps({'id':identifier,'sources':export},indent=2))
        export_link = '<p><a data-owned-navigation="true" href="'+page.stem+'/machine-data.json">Machine-specific structured research and wiring data</a></p>'
        nav = '<nav class="machine-page-nav"><a data-owned-navigation="true" href="../../../machine-control-pinout-survey.html#'+identifier+'">All machines</a><span>'+html.escape(article.get('data-category',''))+'</span></nav>'
        content = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><title>'+html.escape(title)+' · wiring research</title><style>'+styles+'\n'+CSS+'</style></head><body>'+nav+'<main><h1 class="machine-page-title">'+html.escape(title)+'</h1>'+str(article)+export_link+''.join(history)+'</main>'+VIEWER+'</body></html>'
        detail = assets.rewrite(BeautifulSoup(content, 'lxml'), SOURCE, page)
        write(page, str(detail))
        facts = article.select_one('.machine-infobox')
        selected = article.select_one('.centered-wiring-guide figure') or article.select_one('.atlas-smoothiebox-figure') or article.find('figure')
        paragraphs = article.select('.profile-intro > p')[:1]
        centered = article.select_one('.centered-wiring-guide')
        if centered:
            first = centered.find('p', recursive=False)
            if first: paragraphs.append(first)
        header = article.select_one('.profile-header')
        if header is None:
            header = '<header class="profile-header"><h3 class="atlas-profile-name">'+html.escape(title)+'</h3></header>'
        compact = '<article class="machine-profile" id="'+identifier+'" data-category="'+html.escape(article.get('data-category',''))+'" data-depth="'+html.escape(article.get('data-depth','lead'))+'">'+str(header)+'<div class="profile-content"><div class="profile-overview"><div class="profile-intro">'+''.join(str(p) for p in paragraphs[:2])+'<p><a class="machine-detail-link" href="machine-control-pinout-survey/'+str(page.relative_to(ROOT))+'">Detailed wiring, contact schedules, research and earlier diagrams</a></p></div>'+str(facts or '')+'</div>'+str(selected or '')+'</div></article>'
        projection = CANON / 'compact' / (identifier + '.html')
        write(projection, compact)
        if update_index:
            index_text = SOURCE.read_text()
            pattern = r'<article\b[^>]*\bid=[\"\']'+re.escape(identifier)+r'[\"\'][^>]*>.*?</article>'
            updated, replacements = re.subn(pattern, lambda _: compact, index_text, flags=re.S)
            if replacements != 1:
                emit('error', profile=identifier, message='Index update requires exactly one matching article', matches=replacements)
                raise SystemExit(1)
            write(SOURCE, updated)
        row = {'id':identifier,'category':article.get('data-category'),'title':title,'page':str(page.relative_to(ROOT)),'asset_folder':str(page.with_suffix('').relative_to(ROOT)),'compact_fragment':str(projection.relative_to(ROOT)), 'canonical_article':str(fragment.relative_to(ROOT)), 'source_article_sha256':digest(fragment.read_bytes()),'article_text_sha256':digest(original_text.encode()),'tables':len(article.find_all('table')),'images':len(article.find_all('img')),'anchors':len(article.find_all(id=True))+1,'historical_appendices':len(history),'assets':list(assets.copied.values()),'missing':assets.missing,'structured_data_sha256':digest(export_path.read_bytes()),'page_sha256':digest(page.read_bytes())}
        records[identifier] = row
        write(MANIFEST, json.dumps({'version':1,'original_atlas_sha256':digest((CANON/'original-atlas.html').read_bytes()),'count':len(records),'profiles':records},indent=2))
        emit('progress', profile=identifier, completed=number, total=len(articles), page=str(page), assets=len(assets.copied), missing=len(assets.missing))
    emit('summary', manifest=str(MANIFEST), profiles=len(records), unresolved=sum(len(r['missing']) for r in records.values()))


def refresh_viewers(profile_ids=None):
    """Replace only owned viewer infrastructure and refresh derived byte hashes."""
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else None
    if profile_ids is None:
        files = sorted(set((ROOT / 'machines').rglob('*.html'))) + [ROOT / 'history.html']
    else:
        if manifest is None:
            emit('error', message='Machine-page manifest is required for a targeted viewer refresh')
            return
        unknown = sorted(profile_ids - set(manifest['profiles']))
        if unknown:
            emit('error', message='Unknown profile IDs for targeted viewer refresh', profiles=unknown)
            return
        files = [ROOT / manifest['profiles'][identifier]['page'] for identifier in sorted(profile_ids)]
    changed = 0
    eligible = 0
    # Markers make repeat refreshes idempotent; legacy matching removes its listeners.
    viewer_pattern = r'<!-- atlas-viewer:start -->.*?<!-- atlas-viewer:end -->|<dialog[^>]*id="machine-image-dialog"[^>]*>.*?</dialog>\s*<script>.*?</script>'
    style_pattern = r'<style id="atlas-viewer-style">.*?</style>'
    # Replace the exact pre-fallback inline CSS without changing its surrounding markup.
    prior_inline_css = (VIEWER_CSS
        .replace('color: var(--ink, #eef5f3);', 'color: var(--ink, #17252b);')
        .replace('background: var(--panel, #193d48);', 'background: var(--panel, #edf4f1);')
        .replace('padding:.55rem .8rem;background:var(--paper, #0b1f26);color:var(--ink, #eef5f3)', 'padding:.55rem .8rem;background:var(--paper)')
        .replace('background:var(--paper, #0b1f26);color:var(--ink, #eef5f3)', 'background:var(--paper);color:var(--ink)'))
    for path in files:
        if not path.exists():
            continue
        original = path.read_text()
        if '<svg' not in original and '<img' not in original:
            if not has_local_image_link(BeautifulSoup(original, 'lxml')):
                continue
        eligible += 1
        blocks = list(re.finditer(viewer_pattern, original, flags=re.S))
        if len(blocks) > 1:
            emit('error', path=str(path), message='Multiple fullscreen viewer blocks; refusing ambiguous replacement')
            continue
        if blocks and blocks[0].group().startswith('<!-- atlas-viewer:start -->'):
            # Keep the marked dialog's original parser serialization byte-exact.
            block = blocks[0].group()
            scripts = list(re.finditer(r'<script>.*?</script>', block, flags=re.S))
            if len(scripts) != 1:
                emit('error', path=str(path), message='Marked viewer requires one shared script; refusing ambiguous replacement')
                continue
            shared_script = re.search(r'<script>.*?</script>', VIEWER, flags=re.S).group()
            refreshed = block[:scripts[0].start()] + shared_script + block[scripts[0].end():]
            revised = original[:blocks[0].start()] + refreshed + original[blocks[0].end():]
        elif blocks:
            revised = original[:blocks[0].start()] + VIEWER + original[blocks[0].end():]
        else:
            revised = original.replace('</body>', VIEWER + '</body>')
        style = '<style id="atlas-viewer-style">' + VIEWER_CSS + '</style>'
        revised, styles = re.subn(style_pattern, lambda _: style, revised, flags=re.S)
        if styles > 1:
            emit('error', path=str(path), message='Multiple marked viewer styles; refusing ambiguous replacement')
            continue
        if not styles and prior_inline_css in revised:
            if revised.count(prior_inline_css) != 1:
                emit('error', path=str(path), message='Multiple prior inline viewer styles; refusing ambiguous replacement')
                continue
            revised = revised.replace(prior_inline_css, VIEWER_CSS, 1)
        elif not styles and VIEWER_CSS not in revised:
            revised = revised.replace('</head>', style + '</head>')
        if revised != original:
            write(path, revised)
            changed += 1
    if manifest is not None:
        for identifier, row in manifest['profiles'].items():
            if profile_ids is not None and identifier not in profile_ids:
                continue
            row['page_sha256'] = digest((ROOT / row['page']).read_bytes())
            for asset in row['assets']:
                path = ROOT / asset['path']
                if path.suffix == '.html':
                    asset['sha256'] = digest(path.read_bytes())
        write(MANIFEST, json.dumps(manifest, indent=2))
    history_manifest = ROOT / 'machine-history-manifest.json'
    if profile_ids is None and history_manifest.exists():
        value = json.loads(history_manifest.read_text())
        value['sha256'] = digest((ROOT / 'history.html').read_bytes())
        write(history_manifest, json.dumps(value, indent=2))
    emit('summary', changed_pages=changed, eligible_pages=eligible, scanned_pages=len(files), profiles=sorted(profile_ids) if profile_ids is not None else 'all', viewer='wheel/pointer-anchored-zoom/slider/pan/minimap/keyboard/inline-svg')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--refresh-viewers', action='store_true', help='Refresh all generated fullscreen viewers without copying assets')
    parser.add_argument('--history-only', action='store_true', help='Build retained global history without updating machine pages')
    parser.add_argument('--capture-source', action='store_true', help='Exclusively capture original atlas and canonical fragments')
    parser.add_argument('--update-index', action='store_true', default=None, help='After index migration, refresh actual compact index entry together with each detail page')
    parser.add_argument('--ids', nargs='*', help='Refresh only named profile pages from canonical fragments, or target these pages with --refresh-viewers')
    arguments = parser.parse_args()
    if arguments.refresh_viewers: refresh_viewers(set(arguments.ids) if arguments.ids is not None else None)
    elif arguments.capture_source: capture()
    else: build({'__history_only__'} if arguments.history_only else set(arguments.ids or []), arguments.update_index)

if __name__ == '__main__': main()
