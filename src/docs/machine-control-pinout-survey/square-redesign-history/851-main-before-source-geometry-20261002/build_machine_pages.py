#!/usr/bin/env python3
"""Preserve the atlas as durable machine pages and emit compact index projections.

The immutable original captures migration history. Canonical article fragments are
updated only from full articles; compact index cards never replace detailed data.
"""
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit, unquote
import argparse, hashlib, html, json, os, re

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


VIEWER = '''<dialog id="machine-image-dialog" aria-label="Full-size diagram"><div class="machine-image-toolbar"><button id="machine-image-fit" type="button">Fit</button><button id="machine-image-close" type="button" aria-label="Close image">Close</button><span>Click image to zoom; drag to pan; Escape closes</span></div><div id="machine-image-viewport"><img id="machine-image-full" alt=""></div></dialog><script>(()=>{const d=document.getElementById('machine-image-dialog'),f=document.getElementById('machine-image-full'),v=document.getElementById('machine-image-viewport');let zoom=false,drag=null,moved=false,blob=null;const fit=()=>{zoom=false;v.classList.remove('is-zoomed');f.style.width='';f.style.height='';v.scrollTop=0;v.scrollLeft=0;};document.querySelectorAll('main img').forEach(i=>{i.tabIndex=0;i.setAttribute('role','button');const open=e=>{e.preventDefault();e.stopPropagation();f.src=i.currentSrc||i.src;f.alt=i.alt;fit();d.showModal();};i.addEventListener('click',open);i.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')open(e)});const b=i.closest('button');if(b)b.addEventListener('click',open);});f.addEventListener('click',e=>{if(moved){moved=false;return;}if(zoom){fit();return;}zoom=true;v.classList.add('is-zoomed');f.style.width=Math.max(f.naturalWidth,v.clientWidth*1.7)+'px';f.style.height='auto';});f.addEventListener('pointerdown',e=>{if(!zoom)return;drag={x:e.clientX,y:e.clientY,left:v.scrollLeft,top:v.scrollTop};moved=false;f.setPointerCapture(e.pointerId);e.preventDefault();});f.addEventListener('pointermove',e=>{if(!drag)return;let x=e.clientX-drag.x,y=e.clientY-drag.y;if(Math.abs(x)+Math.abs(y)>4)moved=true;v.scrollLeft=drag.left-x;v.scrollTop=drag.top-y;});f.addEventListener('pointerup',()=>{drag=null});f.addEventListener('pointercancel',()=>{drag=null});document.querySelectorAll('main svg').forEach(svg=>{const b=svg.closest('button.zoom-figure')||svg;if(b.querySelector('img'))return;if(b===svg){svg.tabIndex=0;svg.setAttribute('role','button');svg.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();svg.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});}b.addEventListener('click',e=>{e.preventDefault();if(blob)URL.revokeObjectURL(blob);const copy=svg.cloneNode(true);copy.setAttribute('xmlns','http://www.w3.org/2000/svg');blob=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(copy)],{type:'image/svg+xml'}));f.src=blob;f.alt=b.dataset.caption||svg.getAttribute('aria-label')||'Historical diagram';fit();d.showModal();});});d.addEventListener('close',()=>{if(blob){URL.revokeObjectURL(blob);blob=null}});document.getElementById('machine-image-fit').onclick=fit;document.getElementById('machine-image-close').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d)d.close()});})();</script>'''

CSS = '''body{overflow-wrap:anywhere}.machine-page-nav{display:flex;gap:1rem;flex-wrap:wrap;padding:1rem;border-bottom:1px solid var(--rule)}.machine-page-title{font-size:clamp(1.7rem,4vw,3rem);line-height:1.1;margin:1.5rem 0}.machine-profile{display:block!important}.machine-page-history{margin-top:2rem}#machine-image-dialog{width:98vw;height:96vh;max-width:none;max-height:none;background:var(--paper);color:var(--ink);border:1px solid var(--rule);padding:2.5rem 1rem 1rem}#machine-image-dialog::backdrop{background:rgb(0 0 0 / 85%)}#machine-image-viewport{height:100%;width:100%;overflow:auto}#machine-image-full{display:block;width:100%;height:100%;max-width:none;object-fit:contain;cursor:zoom-in;user-select:none;-webkit-user-drag:none}.is-zoomed #machine-image-full{max-height:none;height:auto;object-fit:initial;cursor:grab;touch-action:none}.machine-image-toolbar{position:absolute;inset:.35rem 1rem auto;display:flex;gap:.6rem;align-items:center;background:var(--paper)}.machine-image-toolbar span{font-size:.8rem}#machine-image-close{position:absolute;right:1rem;top:.5rem}main img{max-width:100%;cursor:zoom-in}.table-wrap{overflow:auto}details:not([open])>:not(summary){display:none}'''


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
            if linked.body and (linked.find('img') or linked.find('svg')):
                linked.body.append(BeautifulSoup(VIEWER, 'html.parser'))
                if linked.head: linked.head.append(BeautifulSoup('<style>'+CSS+'</style>', 'html.parser'))
            write(destination, str(linked))
        elif source.suffix.lower() in ['.svg', '.css']:
            text = source.read_text()
            text = self.css(text, source, destination)
            if source.suffix.lower() == '.svg':
                def svg_reference(match):
                    tag = match.group(0)
                    navigation = bool(re.match(r'<(?:[\w.-]+:)?a(?:\s|>)', tag))
                    return re.sub(r'((?:xlink:)?href\s*=\s*["\'])([^"\']+)', lambda m: m[1] + self.url(m[2], source, destination, not navigation), tag)
                # Only anchors navigate; image/use links still require owned resources.
                text = re.sub(r'<(?:[\w.-]+:)?[\w.-]+\b[^>]*>', svg_reference, text)
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


def refresh_viewers():
    """Refresh viewer behavior without copying or rerendering machine assets."""
    files = list((ROOT/'machines').rglob('*.html')) + [ROOT/'history.html']
    changed = 0
    zoom_rule_pattern = r'\.is-zoomed\s+#machine-image-full\s*\{[^}]*\}'
    zoom_rule = re.search(zoom_rule_pattern, CSS).group(0)
    expression = r'<dialog[^>]*id="machine-image-dialog"[^>]*>.*?</dialog>\s*<script>\(\(\)=>\{const d=document.getElementById\(\'machine-image-dialog\'\).*?</script>'
    for path in files:
        if not path.exists(): continue
        text = path.read_text()
        revised, replacements = re.subn(expression, lambda _: VIEWER, text, flags=re.S)
        if not replacements and ('<svg' in text or '<img' in text) and '</body>' in text:
            revised=text.replace('</body>',VIEWER+'</body>').replace('</head>','<style>'+CSS+'</style></head>')
            replacements=1
        # Refresh the owned zoom rule as well as its script, preserving other styles.
        revised, style_replacements = re.subn(zoom_rule_pattern, lambda _: zoom_rule, revised)
        if replacements or style_replacements:
            write(path,revised)
            changed += 1
    if MANIFEST.exists():
        manifest = json.loads(MANIFEST.read_text())
        for row in manifest['profiles'].values():
            row['page_sha256'] = digest((ROOT/row['page']).read_bytes())
            for asset in row['assets']:
                path=ROOT/asset['path']
                if path.suffix=='.html': asset['sha256']=digest(path.read_bytes())
        write(MANIFEST,json.dumps(manifest,indent=2))
    history_manifest = ROOT/'machine-history-manifest.json'
    if history_manifest.exists():
        value=json.loads(history_manifest.read_text());value['sha256']=digest((ROOT/'history.html').read_bytes());write(history_manifest,json.dumps(value,indent=2))
    emit('summary', changed_pages=changed, viewer='fit/zoom/pan/inline-svg')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--refresh-viewers', action='store_true', help='Refresh all generated fullscreen viewers without copying assets')
    parser.add_argument('--history-only', action='store_true', help='Build retained global history without updating machine pages')
    parser.add_argument('--capture-source', action='store_true', help='Exclusively capture original atlas and canonical fragments')
    parser.add_argument('--update-index', action='store_true', default=None, help='After index migration, refresh actual compact index entry together with each detail page')
    parser.add_argument('--ids', nargs='*', help='Refresh only named profile pages from canonical fragments')
    arguments = parser.parse_args()
    if arguments.refresh_viewers: refresh_viewers()
    elif arguments.capture_source: capture()
    else: build({'__history_only__'} if arguments.history_only else set(arguments.ids or []), arguments.update_index)

if __name__ == '__main__': main()
