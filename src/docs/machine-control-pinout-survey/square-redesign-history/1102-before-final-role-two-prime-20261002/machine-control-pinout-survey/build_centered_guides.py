#!/usr/bin/env python3
"""Publish selected controller-centred diagrams and per-conductor evidence incrementally."""
from pathlib import Path
import argparse,hashlib,html,json,re
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ElementTree
from render_centered_wiring import render_centered_wiring,connection_id
ROOT=Path(__file__).resolve().parent
DATA=ROOT/'centered-guides.json'
PAGE=ROOT.parent/'machine-control-pinout-survey.html'
COMMIT='7dc4f9a972ad3e3587952171e63b278ee9997f10'
PRIME='https://github.com/Smoothieware/Smoothieboard2/blob/'+COMMIT+'/V2_P12_Prime2590/'
def esc(v):return html.escape(str(v),quote=True)

NATIVE_LAYOUT='source-geometry-complete-device-graph'
def canonical_sha256(value):
    payload=json.dumps(value,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode('utf-8')
    return hashlib.sha256(payload).hexdigest()

def expected_ids(g,panel_indices):
    indices=range(len(g['wire_panels'])) if panel_indices is None else panel_indices
    return {connection_id(pi,ei) for pi in indices for ei,_ in enumerate(g['wire_panels'][pi]['edges'])}

def main_ids(g):
    selected=[]
    for pi,panel in enumerate(g['wire_panels']):
        role=panel.get('diagram_variant')
        if role is None:
            if pi+1 in g.get('superseded_main_panel_indices',[]):continue
            if panel['title'].lower().startswith(('alternative ','optional ')):continue
            role='current'
        if role in {'current','current-conditional'}:selected.append(pi)
    return expected_ids(g,selected)

def load_render_manifest(path,guides,selected_ids):
    manifest=json.loads(Path(path).read_text())
    if manifest.get('schema')!='centered-pre-rendered-svg-manifest-v1' or not isinstance(manifest.get('entries'),list):
        raise ValueError('Unsupported pre-rendered SVG manifest schema')
    guides_by_id={guide['id']:guide for guide in guides}
    selected={guide_id:guides_by_id[guide_id] for guide_id in selected_ids}
    expected={(guide_id,None) for guide_id in selected}
    for guide_id,guide in selected.items():
        expected.update((guide_id,item['id']) for item in guide.get('conditional_complete_figures',[]))
    entries={}
    for entry in manifest['entries']:
        key=(entry.get('profile_id'),entry.get('figure_id'))
        if key in entries:raise ValueError(f'Duplicate render manifest entry: {key!r}')
        entries[key]=entry
    if set(entries)!=expected:
        raise ValueError(f'Render manifest keys differ; missing={sorted(expected-set(entries),key=str)!r}; extra={sorted(set(entries)-expected,key=str)!r}')
    loaded={guide_id:{} for guide_id in selected}
    for (guide_id,figure_id),entry in entries.items():
        guide=selected[guide_id]
        indices=None
        if figure_id is not None:
            definition=next(item for item in guide['conditional_complete_figures'] if item['id']==figure_id)
            indices=definition['panel_indices']
        required_ids=main_ids(guide) if figure_id is None else expected_ids(guide,indices)
        if entry.get('guide_sha256')!=canonical_sha256(guide):
            raise ValueError(f'Guide hash mismatch: {guide_id}/{figure_id}')
        if entry.get('panel_indices')!=indices:
            raise ValueError(f'Panel selection mismatch: {guide_id}/{figure_id}')
        if entry.get('native_kind')!=NATIVE_LAYOUT or entry.get('controller_kind')!=guide.get('selected_controller'):
            raise ValueError(f'Native/controller kind mismatch: {guide_id}/{figure_id}')
        if set(entry.get('connection_ids',[]))!=required_ids:
            raise ValueError(f'Expected graph CID set mismatch: {guide_id}/{figure_id}')
        svg_path=Path(entry.get('svg_path',''))
        if not svg_path.is_absolute():
            raise ValueError(f'SVG path must be absolute: {guide_id}/{figure_id}')
        svg_bytes=svg_path.read_bytes()
        if hashlib.sha256(svg_bytes).hexdigest()!=entry.get('svg_sha256'):
            raise ValueError(f'SVG hash mismatch: {guide_id}/{figure_id}')
        root=ElementTree.fromstring(svg_bytes.decode('utf-8'))
        metadata=next((node for node in root if node.get('id')=='centered-wiring-provenance'),None)
        if metadata is None:
            raise ValueError(f'Missing native SVG provenance: {guide_id}/{figure_id}')
        projection=json.loads(metadata.text)
        if projection.get('profile_id')!=guide_id or projection.get('layout')!=NATIVE_LAYOUT:
            raise ValueError(f'Profile/full-native layout mismatch: {guide_id}/{figure_id}')
        artwork=projection.get('controller_artwork')
        if not isinstance(artwork,dict) or artwork.get('kind')!=guide.get('selected_controller') or canonical_sha256(artwork)!=entry.get('controller_artwork_sha256'):
            raise ValueError(f'Controller artwork provenance mismatch: {guide_id}/{figure_id}')
        full_ids={record.get('connection_id') for record in projection.get('connections',[])}
        visible_ids=set(projection.get('main_visible_connections',[]))
        route_ids={record.get('connection_id') for record in projection.get('main_route_manifest',[])}
        if full_ids!=expected_ids(guide,None) or visible_ids!=required_ids or route_ids!=required_ids:
            raise ValueError(f'SVG provenance CID set mismatch: {guide_id}/{figure_id}')
        loaded[guide_id][figure_id]=svg_bytes
    return loaded

def unique_sources(items):
    result=[];positions={}
    for item in items:
        source=dict(item)
        source['title']=str(source.get('title','')).strip()
        source['url']=str(source.get('url','')).strip()
        source['claim']=str(source.get('claim','')).strip()
        key=(source['url'],source['title'])
        if key in positions:
            current=result[positions[key]]
            if source['claim'] and source['claim'] not in current['claim']:
                current['claim']=(current['claim']+' '+source['claim']).strip()
            continue
        if not source['title']:source['title']='Edge-specific source'
        positions[key]=len(result);result.append(source)
    return result

def source_label(source):
    title=esc(source.get('title','Source reference'))
    url=str(source.get('url','')).strip()
    return '<a href="'+esc(url)+'" target="_blank" rel="noopener">'+title+'</a>' if url else title

def edge_sources_for(e):
    url=e.get('source_url','')
    reference=e.get('source_reference')
    if isinstance(reference,dict):
        url=url or reference.get('url','')
        title=reference.get('title') or reference.get('name') or ''
        claim=reference.get('claim') or 'Direct source reference is attached to this exact conductor; verify fitted applicability.'
    elif isinstance(reference,str):
        title=reference.strip()
        if not url and title.startswith(('https://','http://','/')):url,title=title,''
        claim='Direct source reference is attached to this exact conductor; verify fitted applicability.'
    else:
        title=''
        claim='Direct source URL is attached to this exact conductor; verify fitted applicability.'
    if not isinstance(url,str):url=''
    url=url.strip()
    if url or title:return [{'title':title or 'Exact-conductor source','url':url,'claim':claim}]
    return []

def prime_source_sheet(g,p,e,text):
    endpoints={e.get('from'),e.get('to')}
    prime_contacts=[]
    for node in p.get('nodes',[]):
        if 'prime' not in node.get('title','').lower():continue
        for contact in node.get('contacts',[]):
            if node.get('id','')+'.'+contact.get('id','') in endpoints:
                prime_contacts.append(contact.get('label',''))
    # Exact connector evidence wins over overlapping panel names.
    if any(label.startswith('J21.') for label in prime_contacts):return 'inputs.kicad_sch'
    if any(label.startswith('J17.') for label in prime_contacts):return 'mosfets.kicad_sch'
    if any(w in text for w in ('limit','probe','temperature','thermistor','sensor')):return 'inputs.kicad_sch'
    if any(w in text for w in ('heater','hotend','fan','vfet','pump')):return 'mosfets.kicad_sch'
    # Unmapped contacts, including J35 without an exact source, use the board-level reference.
    return 'smoothiev2-prime.kicad_pcb'

def sources_for(g,p,e):
    explicit=p.get('evidence_sources',[])
    direct=edge_sources_for(e)
    text=' '.join([p['title'],p['note'],e['function']]+[n['title'] for n in p['nodes']]).lower()
    sources=[]
    if g['selected_controller']=='prime':
        sheet=prime_source_sheet(g,p,e,text)
        sources.append({'title':'Prime P12 exact source · '+sheet,'url':PRIME+sheet,'claim':'Defines the named Prime connector contacts and board-side circuitry; does not establish the machine harness or replacement firmware configuration.'})
    else:
        sources.append({'title':'SmoothieBox Chapter 18 field-contact drawing','url':'/machine-control-pinout-survey/centered-sources/smoothiebox-chapter18-field-reference.svg','claim':'Defines proposed exterior STEP/DIR/ENABLE, ground and accessory contact names. These field contacts are not Core header numbers. The drawing does not certify an assembled case or its output ratings.'})
    if explicit:return unique_sources(sources+explicit+direct)
    # Link the device-specific electrical source, not a catch-all source list.
    keywords=[]
    rules=[(('lvc07',),('lvc07',)),(('dq860',),('dq860',)),(('msd556',),('msd556',)),(('escon','recycler'),('maxon','powertrain')),(('wj200',),('wj200',)),(('vs1st',),('vs1st','mn767')),(('ahct125','8760'),('ahct125','8760')),(('am26lv31','db44','servo'),('am26lv31','delta','db44')),(('max31865','pt100'),('max31865',)),(('opa197','analog'),('opa197',)),(('isolated run','servo-on','aqy','uln'),('uln','aqy','panasonic')),(('clearpath','avid'),('avid','crp5310','ahct125')),(('775','cytron'),('cytron','md10c')),(('quiet cut',),('spindle pwm','inventables'))]
    for terms,match in rules:
        if any(term in text for term in terms):keywords.extend(match)
    selected=[s for s in g['sources'] if any(k in (s[0]+' '+s[1]).lower() for k in keywords)]
    if not selected:selected=[g['sources'][0]]
    # Machine source supplies fitted/optional context even for a new interface circuit.
    if g['sources'][0] not in selected:selected.insert(0,g['sources'][0])
    for title,url in selected:
        if 'master/V2_Core' in url or 'smoothieboard-v2-core' in url:continue
        claim=('Machine source documents original functions/component inventory; the new terminal-to-terminal route is a proposal, not a manufacturer retrofit instruction.' if [title,url]==g['sources'][0] else 'Device/source reference supplies its original contact functions or electrical interface limits. Match the cited revision before applying the proposed route.')
        sources.append({'title':title,'url':url,'claim':claim})
    return unique_sources(sources+direct)

def conditional_complete_figures_html(g,render_inputs=None):
    definitions=g.get('conditional_complete_figures',[])
    if not definitions:return '', '', []
    seen_ids=set();seen_panels=set();primary=[];supplemental=[];figure_manifest=[]
    for definition in sorted(definitions,key=lambda item:not item.get('primary_reference',False)):
        figure_id=definition.get('id','')
        title=definition.get('title','').strip()
        indices=definition.get('panel_indices',[])
        if not re.fullmatch(r'[a-z0-9-]+',figure_id) or figure_id in seen_ids:
            raise ValueError(f'Invalid or duplicate conditional figure id: {figure_id!r}')
        if not title or not indices or any(type(index) is not int or index<0 or index>=len(g['wire_panels']) for index in indices):
            raise ValueError(f'Invalid conditional figure definition: {figure_id}')
        if len(set(indices))!=len(indices):
            raise ValueError(f'Conditional panel index repeats: {figure_id}')
        seen_ids.add(figure_id);seen_panels.update(indices)
        # The installed candidate renderer draws every selected graph path and native artwork.
        svg=(render_inputs[figure_id].decode('utf-8') if render_inputs is not None
             else render_centered_wiring(g,panel_indices=set(indices)))
        asset=ROOT/'smoothiebox-machine-wiring'/('conditional-'+g['id']+'-'+figure_id+'.svg')
        asset.write_bytes(render_inputs[figure_id] if render_inputs is not None else svg.encode('utf-8'))
        figure_manifest.append({'id':figure_id,'panel_indices':list(indices),'asset_path':str(asset),'asset_sha256':hashlib.sha256(asset.read_bytes()).hexdigest(),'selected_connections':sorted(expected_ids(g,indices)),'primary_reference':definition.get('primary_reference') is True})
        url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
        condition=definition.get('requires','Match fitted hardware and qualify the interface before use.')
        panel_numbers=', '.join(str(index+1) for index in indices)
        figure='<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(title)+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(title+'; complete selected source-graph wiring reference, not an as-built diagram')+'"></button><figcaption><strong>Complete reference proposal; not an as-built map.</strong> '+esc(condition)+' Source graph panels: '+esc(panel_numbers)+'. <a href="'+url+'" target="_blank" rel="noopener">Open full-size figure</a>.</figcaption></figure>'
        (primary if definition.get('primary_reference') is True else supplemental).append(figure)
    primary_html=''.join(primary)
    supplemental_html=('<details class="conditional-complete-figures"><summary>Separate conditional axis and spindle figures</summary><p>These subsystem alternatives are supplementary references, not installed wiring.</p>'+''.join(supplemental)+'</details>') if supplemental else ''
    return primary_html,supplemental_html,figure_manifest


def build(g,render_inputs=None):
    primary_ids=set()
    for definition in g.get('conditional_complete_figures',[]):
        if definition.get('primary_reference') is True:
            primary_ids.update(expected_ids(g,definition['panel_indices']))
    primary_figure_html,supplemental_figure_html,figure_manifest=conditional_complete_figures_html(g,render_inputs)
    # Keep the renderer's main selection unchanged; conditional panels use separate calls above.
    svg=(render_inputs[None].decode('utf-8') if render_inputs is not None else render_centered_wiring(g))
    metadata=next((node for node in ElementTree.fromstring(svg) if node.get('id')=='centered-wiring-provenance'),None)
    projection=json.loads(metadata.text) if metadata is not None else {}
    visible=set(projection.get('main_visible_connections',[]))
    records=[];rows=[]
    for pi,p in enumerate(g['wire_panels']):
        endpoints={n['id']+'.'+c['id']:n['title']+' · '+c['label'] for n in p['nodes'] for c in n['contacts']}
        for ei,e in enumerate(p['edges']):
            rid=connection_id(pi,ei);sources=sources_for(g,p,e);qualification=e.get('check',p['note']);state=e['state'].upper()
            view='MAIN REFERENCE' if rid in primary_ids else ('MAIN' if rid in visible else 'DETAILED CIRCUIT')
            rationale=f"{e['function']}: {endpoints[e['from']]} → {endpoints[e['to']]}. "+({'GUESS':'This is a new conversion wire; the sources establish endpoint functions, while the connection and compatibility require the checks below.','SOURCE':'This path is reported by the cited original source; it is retained context, not proof of a completed Smoothie retrofit.','OPEN':'The fitted interface or electrical contract is unresolved. The broken path is a boundary to identify, not a wire to install.'}[state])
            records.append({'id':rid,'panel_index':pi,'edge_index':ei,'from':endpoints[e['from']],'to':endpoints[e['to']],'state':state,'function':e['function'],'view':view,'rationale':rationale,'qualification':qualification,'sources':sources})
            links=''.join('<li>'+source_label(s)+': '+esc(s['claim'])+'</li>' for s in sources)
            rows.append('<tr id="'+esc(g['id']+'-'+rid)+'"><td><strong>'+esc(e['function'])+'</strong><br><span class="small">'+esc(rid)+'</span><br>'+state+'<br>'+view+'</td><td>'+esc(endpoints[e['from']])+'</td><td>'+esc(endpoints[e['to']])+'</td><td>'+esc(rationale)+'<p>'+esc(qualification)+'</p><ul>'+links+'</ul></td></tr>')
    unused=[]
    for pi,panel in enumerate(g['wire_panels']):
        for node in panel['nodes']:
            for contact in node['contacts']:
                key=node['id']+'.'+contact['id']
                if any(key in (edge['from'],edge['to']) for edge in panel['edges']):continue
                refs=sources_for(g,panel,{'function':'Unused or unresolved terminal '+contact['label']})
                links='; '.join(source_label(source) for source in refs)
                unused.append('<tr><td>'+esc(panel['title'])+'</td><td>'+esc(node['title']+' · '+contact['label'])+'</td><td>No conductor drawn. '+esc(panel['note'])+'<p>'+links+'</p></td></tr>')
    unused_html='<details><summary>Unused or unresolved terminals · explicit dispositions</summary><div class="table-wrap"><table><thead><tr><th>Circuit</th><th>Terminal</th><th>Disposition and sources</th></tr></thead><tbody>'+''.join(unused)+'</tbody></table></div></details>'
    asset=ROOT/'smoothiebox-machine-wiring'/('centered-'+g['id']+'.svg');asset.write_bytes(render_inputs[None] if render_inputs is not None else svg.encode('utf-8'))
    evidence={'profile_id':g['id'],'controller':g['controller_title'],'classification':g['classification_note'],'connections':records,'main_visible_connections':projection.get('main_visible_connections',[]),'detailed_only_connections':projection.get('detailed_only_connections',[]),'main_route_manifest':projection.get('main_route_manifest',[]),'primary_reference_connections':sorted(primary_ids),'conditional_complete_figures':figure_manifest,'geometry':projection.get('geometry'),'svg_sha256':hashlib.sha256(asset.read_bytes()).hexdigest()}
    (ROOT/('centered-connections-'+g['id']+'.json')).write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n')
    url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
    geometry_caption=('Native Prime PCB and connector positions are retained; silkscreen is hidden.' if g['selected_controller']=='prime' else 'Native SmoothieBox exterior geometry and source-contact labels are retained.')
    main_figure_html='<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(g['title']+' · controller-centred main wiring')+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(g['title']+' with '+g['controller_title']+' at the center, individual named wires and surrounding machine devices')+'"></button><figcaption>'+esc(geometry_caption)+' Descriptive functions lead; connection IDs are secondary cross-references. Conductors are solid, orthogonal and function-colored. Read source/proposed/fitted-applicability status from each connection schedule; OPEN endpoints remain disconnected. Grey source connector locators are annotations, not wires. <a href="'+url+'" target="_blank" rel="noopener">Open full-size main SVG</a>.</figcaption></figure>'
    main_figure_display=('<details class="source-compatibility-diagram"><summary>Earlier source compatibility diagram</summary>'+main_figure_html+'</details>' if primary_figure_html else main_figure_html)
    section='<section class="centered-wiring-guide" id="'+g['id']+'-centered-wiring"><h4>Main wiring diagram · '+esc(g['controller_title'])+'</h4>'+primary_figure_html+'<p><strong>Why this controller:</strong> '+esc(g['classification_note'])+'</p>'+main_figure_display+supplemental_figure_html+'<h5>Every connection · explanation and direct source evidence</h5><div class="table-wrap"><table><thead><tr><th>Wire</th><th>From terminal</th><th>To terminal</th><th>Explanation, checks and source links</th></tr></thead><tbody>'+''.join(rows)+'</tbody></table></div>'+unused_html+'<p>The earlier circuit details remain immediately below.</p></section>'
    instructions='<h5>Current installation sequence</h5><ol>'+''.join('<li>'+esc(item)+'</li>' for item in g.get('instructions',[]))+'</ol>'
    section=section.replace('<h5>Every connection', '<p><strong>Selected architecture:</strong> '+esc(g.get('target',''))+'</p><p>'+esc(g.get('plan',''))+'</p>'+instructions+'<h5>Every connection',1)
    canonical=ROOT/'machine-page-source'/'articles'/(g['id']+'.html')
    page=canonical.read_text() if canonical.exists() else PAGE.read_text();start='<!-- centered-start:'+g['id']+' -->';end='<!-- centered-end:'+g['id']+' -->';block=start+section+end
    if start in page:page=re.sub(re.escape(start)+r'.*?'+re.escape(end),lambda m:block,page,flags=re.S)
    else:
        anchor='<section class="retrofit-guide" id="'+g['id']+'-retrofit-guide"';assert page.count(anchor)==1
        page=page.replace(anchor,block+anchor,1)
    if canonical.exists():
        # Keep superseded architectures accessible without competing with the current plan.
        parsed_article=BeautifulSoup(page,'html.parser')
        earlier=parsed_article.find('section',id=g['id']+'-retrofit-guide')
        if earlier is not None and earlier.find_parent('details') is None:
            history=parsed_article.new_tag('details',attrs={'class':'earlier-retrofit-architecture'})
            summary=parsed_article.new_tag('summary')
            summary.string='Earlier alternative retrofit architecture and circuit details'
            earlier.wrap(history)
            history.insert(0,summary)
            page=str(parsed_article)
        canonical.write_text(page)
        from build_machine_pages import build as build_pages
        build_pages({g['id']})
        # Compact index is a projection; the full machine fragment is authoritative.
        index=PAGE.read_text()
        if 'machine-detail-link' not in index:
            parsed=BeautifulSoup(index,'lxml');current=parsed.find('article',id=g['id'])
            if current is None:raise ValueError('Missing index profile '+g['id'])
            current.replace_with(BeautifulSoup(page,'lxml').find('article'))
            PAGE.write_text(str(parsed))
    else:
        PAGE.write_text(page)
    print(json.dumps({'type':'artifact','profile_id':g['id'],'controller':g['controller_title'],'connections':len(records),'svg_path':str(asset),'html_path':str(PAGE)}),flush=True)
def main():
    parser=argparse.ArgumentParser();parser.add_argument('--ids',nargs='*');parser.add_argument('--render-manifest');args=parser.parse_args()
    guides=json.loads(DATA.read_text())['guides'];selected=[g for g in guides if not args.ids or g['id'] in args.ids]
    render_inputs=(load_render_manifest(args.render_manifest,guides,[g['id'] for g in selected]) if args.render_manifest else None)
    for g in selected:build(g,None if render_inputs is None else render_inputs[g['id']])
    print(json.dumps({'type':'summary','integrated':len(selected),'total':len(guides)}))
if __name__=='__main__':main()
