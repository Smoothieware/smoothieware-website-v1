#!/usr/bin/env python3
"""Publish selected controller-centred diagrams and per-conductor evidence incrementally."""
from pathlib import Path
import argparse,hashlib,html,json,re
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ElementTree
from render_centered_wiring import render_centered_wiring,connection_id,is_controller_node,_terminal_reference,SOURCE_ONLY_FIGURE_CONTRACTS
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

def main_panel_ids(g):
    selected=[]
    for pi,panel in enumerate(g['wire_panels']):
        role=panel.get('diagram_variant')
        if role is None:
            if pi+1 in g.get('superseded_main_panel_indices',[]):continue
            if panel['title'].lower().startswith(('alternative ','optional ')):continue
            role='current'
        if role in {'current','current-conditional'}:selected.append(pi)
    return expected_ids(g,selected)


def main_additional_ids(g):
    raw=g.get('main_additional_connection_ids',[])
    if not isinstance(raw,list) or any(not isinstance(value,str) for value in raw):
        raise ValueError(f"{g['id']}: main_additional_connection_ids must be a string list")
    if len(set(raw))!=len(raw):
        raise ValueError(f"{g['id']}: duplicate additional main connection ID")
    if not raw:
        return set()
    supported={'C18-009','C18-010','C18-011','C18-012'} if g['id']=='mill-avid-ex-3' else set()
    if set(raw)!=supported:
        raise ValueError(f"{g['id']}: additional main IDs must exactly match the supported source-backed set")
    all_ids=expected_ids(g,None)
    if not set(raw)<=all_ids:
        raise ValueError(f"{g['id']}: additional main selection references a missing connection ID")
    if any(g['wire_panels'][17]['edges'][int(value[4:])-1]['state']!='open' for value in raw):
        raise ValueError(f"{g['id']}: additional main IDs must remain OPEN contacts in superseded panel 18")
    if set(raw)&main_panel_ids(g):
        raise ValueError(f"{g['id']}: additional main IDs must be excluded by the panel-role selection")
    if any(not re.fullmatch(r'C[0-9]{2}-[0-9]{3}',value) for value in raw):
        raise ValueError(f"{g['id']}: malformed additional main connection ID")
    return set(raw)


def main_ids(g):
    return main_panel_ids(g)|main_additional_ids(g)

def load_render_manifest(path,guides,selected_ids,supplemental_keys=None,primary_keys=None):
    manifest=json.loads(Path(path).read_text())
    if manifest.get('schema')!='centered-pre-rendered-svg-manifest-v2' or not isinstance(manifest.get('entries'),list):
        raise ValueError('Unsupported pre-rendered SVG manifest schema')
    guides_by_id={guide['id']:guide for guide in guides}
    selected={guide_id:guides_by_id[guide_id] for guide_id in selected_ids}
    figure_definitions={}
    expected={(guide_id,None) for guide_id in selected}
    for guide_id,guide in selected.items():
        definitions=[]
        definitions.extend((item,'complete') for item in guide.get('conditional_complete_figures',[]))
        for item in guide.get('conditional_source_figures',[]):
            status=item.get('status')
            if status not in {'open-boundary','diagnostic-unqualified'}:
                raise ValueError(f'Invalid conditional source figure status: {guide_id}/{item.get("id")}')
            definitions.append((item,status))
        local_ids=set()
        for definition,status in definitions:
            figure_id=definition.get('id','')
            indices=definition.get('panel_indices',[])
            if not re.fullmatch(r'[a-z0-9-]+',figure_id) or figure_id in local_ids:
                raise ValueError(f'Invalid or duplicate conditional figure id: {guide_id}/{figure_id!r}')
            if not indices or any(type(index) is not int or index<0 or index>=len(guide['wire_panels']) for index in indices) or len(set(indices))!=len(indices):
                raise ValueError(f'Invalid conditional panel selection: {guide_id}/{figure_id}')
            local_ids.add(figure_id)
            figure_definitions[(guide_id,figure_id)]=(definition,status)
            expected.add((guide_id,figure_id))
    if supplemental_keys is not None and primary_keys is not None:
        raise ValueError('Primary and supplementary selections are mutually exclusive')
    incremental_keys=primary_keys if primary_keys is not None else supplemental_keys
    if incremental_keys is not None:
        requested=set(incremental_keys)
        if not requested or len(requested)!=len(incremental_keys):
            raise ValueError('Supplementary selection must be nonempty and unique')
        for key in requested:
            if key not in figure_definitions:
                raise ValueError(f'Unknown supplementary figure: {key!r}')
            definition,status=figure_definitions[key]
            if status!='complete' or ((definition.get('primary_reference') is True)!=(primary_keys is not None)):
                raise ValueError(f'Figure primary/complete contract differs from explicit selection: {key!r}')
            if primary_keys is not None and key!=('forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit','complete-proposed-retrofit'):
                raise ValueError('Only the named Schaublin complete primary reference is supported')
        expected=requested
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
        if figure_id is None:
            expected_status='main'
        else:
            definition,expected_status=figure_definitions[(guide_id,figure_id)]
            indices=definition['panel_indices']
        if entry.get('figure_status')!=expected_status:
            raise ValueError(f'Figure status mismatch: {guide_id}/{figure_id}')
        required_ids=main_ids(guide) if figure_id is None else expected_ids(guide,indices)
        if entry.get('guide_sha256')!=canonical_sha256(guide):
            raise ValueError(f'Guide hash mismatch: {guide_id}/{figure_id}')
        if entry.get('panel_indices')!=indices:
            raise ValueError(f'Panel selection mismatch: {guide_id}/{figure_id}')
        source_contract=SOURCE_ONLY_FIGURE_CONTRACTS.get((guide_id,figure_id))
        source_only=source_contract is not None
        if source_only:
            source_index,source_status,source_ids=source_contract
            if (indices!=[source_index] or expected_status!=source_status
                    or required_ids!=source_ids
                    or any(is_controller_node(node) for node in guide['wire_panels'][source_index]['nodes'])):
                raise ValueError(f'Invalid source-only graph contract: {guide_id}/{figure_id}')
        expected_layout='source-only-complete-device-graph' if source_only else NATIVE_LAYOUT
        expected_controller=None if source_only else guide.get('selected_controller')
        if entry.get('native_kind')!=expected_layout or entry.get('controller_kind')!=expected_controller:
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
        if projection.get('profile_id')!=guide_id or projection.get('layout')!=expected_layout:
            raise ValueError(f'Profile/full-native layout mismatch: {guide_id}/{figure_id}')
        if projection.get('figure_status')!=expected_status:
            raise ValueError(f'SVG figure status mismatch: {guide_id}/{figure_id}')
        if set(projection.get('main_additional_connection_ids',[]))!=main_additional_ids(guide):
            raise ValueError(f'Additional main selection provenance mismatch: {guide_id}/{figure_id}')
        artwork=projection.get('controller_artwork')
        if source_only:
            if (artwork is not None or projection.get('extension_artwork')!=[]
                    or projection.get('geometry',{}).get('controller') is not None
                    or projection.get('figure_id')!=figure_id
                    or canonical_sha256(None)!=entry.get('controller_artwork_sha256')
                    or any(record.get('display_form')!='wire' for record in projection.get('main_route_manifest',[]))):
                raise ValueError(f'Source-only figure acquired controller artwork or lost physical wires: {guide_id}/{figure_id}')
        elif not isinstance(artwork,dict) or artwork.get('kind')!=guide.get('selected_controller') or canonical_sha256(artwork)!=entry.get('controller_artwork_sha256'):
            raise ValueError(f'Controller artwork provenance mismatch: {guide_id}/{figure_id}')
        full_ids={record.get('connection_id') for record in projection.get('connections',[])}
        visible_ids=set(projection.get('main_visible_connections',[]))
        route_ids={record.get('connection_id') for record in projection.get('main_route_manifest',[])}
        if full_ids!=expected_ids(guide,None) or visible_ids!=required_ids or route_ids!=required_ids:
            raise ValueError(f'SVG provenance CID set mismatch: {guide_id}/{figure_id}')
        if incremental_keys is not None:
            declared_ids=entry.get('connection_ids',[])
            if len(declared_ids)!=len(required_ids) or len(set(declared_ids))!=len(declared_ids):
                raise ValueError(f'Duplicate declared connections: {guide_id}/{figure_id}')
            if entry.get('figure_baseline_sha256')!=supplemental_baseline(guide,definition):
                raise ValueError(f'Supplementary baseline mismatch: {guide_id}/{figure_id}')
            for name,values,required in (
                    ('connections',projection.get('connections',[]),expected_ids(guide,None)),
                    ('routes',projection.get('main_route_manifest',[]),required_ids)):
                identifiers=[value.get('connection_id') for value in values]
                if len(identifiers)!=len(required) or len(set(identifiers))!=len(identifiers):
                    raise ValueError(f'Duplicate or missing {name}: {guide_id}/{figure_id}')
            visible=projection.get('main_visible_connections',[])
            if len(visible)!=len(required_ids) or len(set(visible))!=len(visible):
                raise ValueError(f'Duplicate visible connections: {guide_id}/{figure_id}')
            graph={item['connection_id']:item for item in projection['connections']}
            routes={item['connection_id']:item for item in projection['main_route_manifest']}
            for panel_index in indices:
                for edge_index,edge in enumerate(guide['wire_panels'][panel_index]['edges']):
                    identifier=connection_id(panel_index,edge_index)
                    if any(graph[identifier].get(field)!=value for field,value in edge.items()):
                        raise ValueError(f'Electrical/source edge mismatch: {guide_id}/{identifier}')
                    route=routes[identifier]
                    if (route.get('graph_state')!=edge['state'] or route.get('render_state')!=edge['state']
                            or route.get('from_endpoint')!=edge['from'] or route.get('to_endpoint')!=edge['to']):
                        raise ValueError(f'Electrical route mismatch: {guide_id}/{identifier}')
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
        figure_manifest.append({'id':figure_id,'status':'complete','panel_indices':list(indices),'asset_path':str(asset),'asset_sha256':hashlib.sha256(asset.read_bytes()).hexdigest(),'selected_connections':sorted(expected_ids(g,indices)),'primary_reference':definition.get('primary_reference') is True})
        url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
        condition=definition.get('requires','Match fitted hardware and qualify the interface before use.')
        panel_numbers=', '.join(str(index+1) for index in indices)
        figure='<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(title)+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(title+'; complete selected source-graph wiring reference, not an as-built diagram')+'"></button><figcaption><strong>Complete reference proposal; not an as-built map.</strong> '+esc(condition)+' Source graph panels: '+esc(panel_numbers)+'. <a href="'+url+'" target="_blank" rel="noopener">Open full-size figure</a>.</figcaption></figure>'
        (primary if definition.get('primary_reference') is True else supplemental).append(figure)
    primary_html=''.join(primary)
    supplemental_html=('<details class="conditional-complete-figures"><summary>Conditional complete subsystem alternatives</summary><p>These complete source-graph alternatives are separate from installed wiring.</p>'+''.join(supplemental)+'</details>') if supplemental else ''
    return primary_html,supplemental_html,figure_manifest


def conditional_source_figures_html(g,render_inputs=None):
    definitions=g.get('conditional_source_figures',[])
    if not definitions:return '', [], {}
    complete_ids={item.get('id') for item in g.get('conditional_complete_figures',[])}
    seen_ids=set();figures=[];figure_manifest=[];connection_status={}
    captions={
        'open-boundary':('OPEN boundary reference; not a complete diagram.','open-boundary source-graph reference; unresolved fitted interface'),
        'diagnostic-unqualified':('Diagnostic alternative; unqualified and not an installation diagram.','unqualified diagnostic alternative; not an installation diagram')
    }
    for definition in definitions:
        figure_id=definition.get('id','')
        title=definition.get('title','').strip()
        indices=definition.get('panel_indices',[])
        status=definition.get('status')
        if status not in captions:
            raise ValueError(f'Invalid conditional source figure status: {figure_id}')
        if not re.fullmatch(r'[a-z0-9-]+',figure_id) or figure_id in seen_ids or figure_id in complete_ids:
            raise ValueError(f'Invalid or duplicate conditional source figure id: {figure_id!r}')
        if not title or not indices or any(type(index) is not int or index<0 or index>=len(g['wire_panels']) for index in indices) or len(set(indices))!=len(indices):
            raise ValueError(f'Invalid conditional source figure definition: {figure_id}')
        seen_ids.add(figure_id)
        svg=(render_inputs[figure_id].decode('utf-8') if render_inputs is not None
             else render_centered_wiring(g,panel_indices=set(indices),figure_status=status))
        asset=ROOT/'smoothiebox-machine-wiring'/('reference-'+g['id']+'-'+figure_id+'.svg')
        asset.write_bytes(render_inputs[figure_id] if render_inputs is not None else svg.encode('utf-8'))
        selected_connections=sorted(expected_ids(g,indices))
        figure_manifest.append({'id':figure_id,'status':status,'panel_indices':list(indices),'asset_path':str(asset),'asset_sha256':hashlib.sha256(asset.read_bytes()).hexdigest(),'selected_connections':selected_connections})
        for connection_id_value in selected_connections:
            connection_status[connection_id_value]='OPEN BOUNDARY REFERENCE' if status=='open-boundary' else 'DIAGNOSTIC UNQUALIFIED REFERENCE'
        url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
        condition=definition.get('requires','Match the source variant before use; unresolved endpoints remain OPEN.')
        panel_numbers=', '.join(str(index+1) for index in indices)
        lead,caveat=captions[status]
        figure='<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(title)+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(title+'; '+caveat)+'"></button><figcaption><strong>'+esc(lead)+'</strong> '+esc(condition)+' Source graph panels: '+esc(panel_numbers)+'. <a href="'+url+'" target="_blank" rel="noopener">Open full-size reference</a>.</figcaption></figure>'
        figures.append(figure)
    html_block='<details class="conditional-source-figures"><summary>Conditional source and diagnostic references</summary><p>These references have unresolved or unqualified status; they are not installation instructions.</p>'+''.join(figures)+'</details>'
    return html_block,figure_manifest,connection_status


def build(g,render_inputs=None):
    primary_ids=set()
    for definition in g.get('conditional_complete_figures',[]):
        if definition.get('primary_reference') is True:
            primary_ids.update(expected_ids(g,definition['panel_indices']))
    primary_figure_html,supplemental_figure_html,figure_manifest=conditional_complete_figures_html(g,render_inputs)
    source_figure_html,source_figure_manifest,source_connection_status=conditional_source_figures_html(g,render_inputs)
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
            view='MAIN REFERENCE' if rid in primary_ids else (source_connection_status.get(rid) or ('MAIN' if rid in visible else 'DETAILED CIRCUIT'))
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
    evidence={'profile_id':g['id'],'controller':g['controller_title'],'classification':g['classification_note'],'connections':records,'main_visible_connections':projection.get('main_visible_connections',[]),'detailed_only_connections':projection.get('detailed_only_connections',[]),'main_route_manifest':projection.get('main_route_manifest',[]),'main_additional_connection_ids':sorted(main_additional_ids(g)),'primary_reference_connections':sorted(primary_ids),'conditional_complete_figures':figure_manifest,'conditional_source_figures':source_figure_manifest,'geometry':projection.get('geometry'),'svg_sha256':hashlib.sha256(asset.read_bytes()).hexdigest()}
    (ROOT/('centered-connections-'+g['id']+'.json')).write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n')
    url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
    geometry_caption=('Native Prime PCB and connector positions are retained; silkscreen is hidden.' if g['selected_controller']=='prime' else 'Native SmoothieBox exterior geometry and source-contact labels are retained.')
    main_figure_html='<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(g['title']+' · controller-centred main wiring')+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(g['title']+' with '+g['controller_title']+' at the center, individual named wires and surrounding machine devices')+'"></button><figcaption>'+esc(geometry_caption)+' Descriptive functions lead; connection IDs are secondary cross-references. SOURCE routes are solid; GUESS routes are dotted and unverified; OPEN endpoints are visibly disconnected. All routes are orthogonal and function-colored. Grey source connector locators are annotations, not wires. <a href="'+url+'" target="_blank" rel="noopener">Open full-size main SVG</a>.</figcaption></figure>'
    main_figure_display=('<details class="source-compatibility-diagram"><summary>Earlier source compatibility diagram</summary>'+main_figure_html+'</details>' if primary_figure_html else main_figure_html)
    section='<section class="centered-wiring-guide" id="'+g['id']+'-centered-wiring"><h4>Main wiring diagram · '+esc(g['controller_title'])+'</h4>'+primary_figure_html+'<p><strong>Why this controller:</strong> '+esc(g['classification_note'])+'</p>'+main_figure_display+supplemental_figure_html+source_figure_html+'<h5>Every connection · explanation and direct source evidence</h5><div class="table-wrap"><table><thead><tr><th>Wire</th><th>From terminal</th><th>To terminal</th><th>Explanation, checks and source links</th></tr></thead><tbody>'+''.join(rows)+'</tbody></table></div>'+unused_html+'<p>The earlier circuit details remain immediately below.</p></section>'
    instructions='<h5>Current installation sequence</h5><ol>'+''.join('<li>'+esc(item)+'</li>' for item in g.get('instructions',[]))+'</ol>'
    plan = g.get('plan', '')
    legacy_status_copy = ('Solid function-coloured GUESS routes need the named commissioning checks; '
                          'OPEN routes remain disconnected until the missing terminal, rating or interface is established.')
    current_status_copy = ('GUESS routes are dotted, function-coloured and unverified; SOURCE routes are solid, '
                           'function-coloured and not hardware-tested; OPEN routes remain visibly disconnected '
                           'until the missing terminal, rating or interface is established.')
    plan = plan.replace(legacy_status_copy, current_status_copy)
    section=section.replace('<h5>Every connection', '<p><strong>Selected architecture:</strong> '+esc(g.get('target',''))+'</p><p>'+esc(plan)+'</p>'+instructions+'<h5>Every connection',1)
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
def supplemental_baseline(guide,definition):
    """Bind a named supplementary figure to its exact canonical selected source graph."""
    return canonical_sha256({'profile_id':guide['id'],'definition':definition,'status':'complete',
        'panels':[{'index':index,'panel':guide['wire_panels'][index]} for index in definition['panel_indices']]})


def supplemental_connection(guide,panel_index,edge_index,view='DETAILED CIRCUIT'):
    """Use the existing conductor evidence contract without recertifying main wiring."""
    panel=guide['wire_panels'][panel_index];edge=panel['edges'][edge_index]
    endpoints={node['id']+'.'+contact['id']:node['title']+' · '+contact['label']
               for node in panel['nodes'] for contact in node['contacts']}
    identifier=connection_id(panel_index,edge_index);sources=sources_for(guide,panel,edge)
    qualification=edge.get('check',panel['note']);state=edge['state'].upper()
    rationale=f"{edge['function']}: {endpoints[edge['from']]} → {endpoints[edge['to']]}. "+({
        'GUESS':'This is a new conversion wire; the sources establish endpoint functions, while the connection and compatibility require the checks below.',
        'SOURCE':'This path is reported by the cited original source; it is retained context, not proof of a completed Smoothie retrofit.',
        'OPEN':'The fitted interface or electrical contract is unresolved. The broken path is a boundary to identify, not a wire to install.'}[state])
    record={'id':identifier,'panel_index':panel_index,'edge_index':edge_index,'from':endpoints[edge['from']],
        'to':endpoints[edge['to']],'state':state,'function':edge['function'],'view':view,'rationale':rationale,
        'qualification':qualification,'sources':sources}
    links=''.join('<li>'+source_label(source)+': '+esc(source['claim'])+'</li>' for source in sources)
    row='<tr id="'+esc(guide['id']+'-'+identifier)+'"><td><strong>'+esc(edge['function'])+'</strong><br><span class="small">'+esc(identifier)+'</span><br>'+state+'<br>'+view+'</td><td>'+esc(endpoints[edge['from']])+'</td><td>'+esc(endpoints[edge['to']])+'</td><td>'+esc(rationale)+'<p>'+esc(qualification)+'</p><ul>'+links+'</ul></td></tr>'
    return record,row


def supplemental_projections_current(guide_by_id,selected_ids):
    """Skip a repeat projection build only when authoritative source and consumer hashes agree."""
    manifest_path=ROOT/'machine-pages-manifest.json'
    if not manifest_path.exists():return False
    manifest=json.loads(manifest_path.read_text());index=PAGE.read_text()
    for guide_id in selected_ids:
        row=manifest.get('profiles',{}).get(guide_id)
        if row is None:return False
        checks=[(ROOT/row['canonical_article'],row['source_article_sha256']),
                (ROOT/row['page'],row['page_sha256']),
                (ROOT/row['asset_folder']/'machine-data.json',row['structured_data_sha256'])]
        checks.extend((ROOT/asset['path'],asset['sha256']) for asset in row['assets'])
        if any(not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest()!=digest for path,digest in checks):return False
        data=json.loads((ROOT/row['asset_folder']/'machine-data.json').read_text())
        if data.get('sources',{}).get('centered-guides.json')!=guide_by_id[guide_id]:return False
        compact=(ROOT/row['compact_fragment']).read_text()
        pattern=r'<article\b[^>]*\bid=[\"\']'+re.escape(guide_id)+r'[\"\'][^>]*>.*?</article>'
        cards=re.findall(pattern,index,flags=re.S)
        if cards!=[compact]:return False
    return True


def build_supplemental(guides,render_inputs,requested,stage_path):
    """Stage named nonprimary figures, preserve main bytes, and refresh selected owners."""
    stage=Path(stage_path).resolve()
    if stage.exists():raise ValueError('Supplementary staging directory already exists; preserve earlier receipts')
    stage.mkdir(parents=True)
    guide_by_id={guide['id']:guide for guide in guides};selected_ids=sorted({key[0] for key in requested})
    data_baseline=hashlib.sha256(DATA.read_bytes()).hexdigest();plans=[];receipts=[];preserved=[]
    for guide_id in selected_ids:
        guide=guide_by_id[guide_id];figure_ids={key[1] for key in requested if key[0]==guide_id}
        definitions=[definition for definition in guide['conditional_complete_figures'] if definition['id'] in figure_ids]
        article_path=ROOT/'machine-page-source'/'articles'/(guide_id+'.html')
        evidence_path=ROOT/('centered-connections-'+guide_id+'.json')
        main_path=ROOT/'smoothiebox-machine-wiring'/('centered-'+guide_id+'.svg')
        original_article=article_path.read_text();evidence_bytes=evidence_path.read_bytes()
        evidence=json.loads(evidence_bytes);main_bytes=main_path.read_bytes()
        existing_records={record['id']:record for record in evidence['connections']}
        if len(existing_records)!=len(evidence['connections']):raise ValueError('Duplicate existing evidence IDs: '+guide_id)
        main_fields={key:value for key,value in evidence.items() if key not in {'connections','conditional_complete_figures','supplemental_integration'}}
        preserved.append({'profile_id':guide_id,'main_svg':str(main_path),'sha256':hashlib.sha256(main_bytes).hexdigest(),'main_fields':main_fields,'existing_connections':evidence['connections']})
        figure_html=[];manifests=[];rows=[];new_records=[];unused=[];selected_connections=set()
        for definition in definitions:
            figure_id=definition['id'];indices=definition['panel_indices'];svg=render_inputs[guide_id][figure_id]
            asset=ROOT/'smoothiebox-machine-wiring'/('conditional-'+guide_id+'-'+figure_id+'.svg')
            plans.append((asset,svg));digest=hashlib.sha256(svg).hexdigest()
            record={'id':figure_id,'status':'complete','panel_indices':list(indices),'asset_path':str(asset),
                'asset_sha256':digest,'selected_connections':sorted(expected_ids(guide,indices)),'primary_reference':False}
            manifests.append(record);url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
            title=definition['title'];condition=definition.get('requires','Match fitted hardware and qualify the interface before use.')
            panel_numbers=', '.join(str(index+1) for index in indices)
            figure_html.append('<figure class="atlas-smoothiebox-figure" data-figure-id="'+esc(figure_id)+'"><button class="zoom-figure" type="button" data-caption="'+esc(title)+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(title+'; complete selected source-graph wiring reference, not an as-built diagram')+'"></button><figcaption><strong>Complete reference proposal; not an as-built map.</strong> '+esc(condition)+' Source graph panels: '+esc(panel_numbers)+'. <a href="'+url+'" target="_blank" rel="noopener">Open full-size figure</a>.</figcaption></figure>')
            for panel_index in indices:
                panel=guide['wire_panels'][panel_index]
                for edge_index,_ in enumerate(panel['edges']):
                    connection,row=supplemental_connection(guide,panel_index,edge_index)
                    if connection['id'] in selected_connections:raise ValueError('Overlapping supplementary connections: '+connection['id'])
                    selected_connections.add(connection['id']);rows.append(row)
                    if connection['id'] in existing_records:
                        if existing_records[connection['id']]!=connection:raise ValueError('Existing connection drift: '+connection['id'])
                    else:new_records.append(connection)
                for node in panel['nodes']:
                    for contact in node['contacts']:
                        endpoint=node['id']+'.'+contact['id']
                        if any(endpoint in (edge['from'],edge['to']) for edge in panel['edges']):continue
                        refs=sources_for(guide,panel,{'function':'Unused or unresolved terminal '+contact['label']})
                        links='; '.join(source_label(source) for source in refs)
                        unused.append('<tr><td>'+esc(panel['title'])+'</td><td>'+esc(node['title']+' · '+contact['label'])+'</td><td>No conductor drawn. '+esc(panel['note'])+'<p>'+links+'</p></td></tr>')
        # This marker owns only the appended supplemental block; prior section bytes stay intact.
        marker='<!-- supplemental-complete-start:'+guide_id+' -->';end_marker='<!-- supplemental-complete-end:'+guide_id+' -->'
        block=marker+'<details class="conditional-complete-figures"><summary>Conditional complete subsystem alternatives</summary><p>These complete source-graph alternatives are separate from installed wiring. Main wiring layout acceptance remains pending.</p>'+''.join(figure_html)+'<h5>Supplementary connections · explanation and direct source evidence</h5><div class="table-wrap"><table><thead><tr><th>Wire</th><th>From terminal</th><th>To terminal</th><th>Explanation, checks and source links</th></tr></thead><tbody>'+''.join(rows)+'</tbody></table></div>'
        if unused:block+='<details><summary>Supplementary unused or unresolved terminals · explicit dispositions</summary><div class="table-wrap"><table><thead><tr><th>Circuit</th><th>Terminal</th><th>Disposition and sources</th></tr></thead><tbody>'+''.join(unused)+'</tbody></table></div></details>'
        block+='</details>'+end_marker
        start='<!-- centered-start:'+guide_id+' -->';end='<!-- centered-end:'+guide_id+' -->'
        if original_article.count(start)!=1 or original_article.count(end)!=1:raise ValueError('Ambiguous centered section: '+guide_id)
        start_index=original_article.index(start);end_index=original_article.index(end,start_index)
        centered=original_article[start_index:end_index]
        if marker in centered:
            if centered.count(marker)!=1 or centered.count(end_marker)!=1:raise ValueError('Ambiguous supplementary block: '+guide_id)
            prior=re.search(re.escape(marker)+r'.*?'+re.escape(end_marker),centered,re.S).group()
            parsed_prior=BeautifulSoup(prior,'html.parser')
            prior_ids={node.get('data-figure-id') for node in parsed_prior.select('figure[data-figure-id]')}
            if prior_ids!=figure_ids:raise ValueError('Refusing to overwrite a different supplementary selection: '+guide_id)
            revised=centered.replace(prior,block,1)
        else:
            if BeautifulSoup(centered,'html.parser').select('details.conditional-complete-figures'):
                raise ValueError('Unowned supplementary section already exists: '+guide_id)
            closing=centered.rfind('</section>')
            if closing<0:raise ValueError('Missing centered section closing tag: '+guide_id)
            revised=centered[:closing]+block+centered[closing:]
        article=original_article[:start_index]+revised+original_article[end_index:]
        parsed=BeautifulSoup(article,'html.parser')
        for identifier in selected_connections:
            if len(parsed.find_all('tr',id=guide_id+'-'+identifier))!=1:raise ValueError('Ambiguous supplementary row: '+identifier)
        merged={item['id']:item for item in evidence.get('conditional_complete_figures',[])}
        if len(merged)!=len(evidence.get('conditional_complete_figures',[])):raise ValueError('Duplicate supplementary manifest IDs: '+guide_id)
        merged.update({item['id']:item for item in manifests})
        evidence['connections'].extend(new_records);evidence['conditional_complete_figures']=list(merged.values())
        evidence['supplemental_integration']={'main_acceptance':'pending','figure_ids':sorted(figure_ids),
            'figure_baselines':{definition['id']:supplemental_baseline(guide,definition) for definition in definitions},
            'guide_sha256':canonical_sha256(guide),'qualification':'Conditional model-specific reference; not as-built or fitted hardware'}
        plans.extend(((article_path,article.encode('utf-8')),(evidence_path,(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n').encode('utf-8'))))
        receipts.append({'profile_id':guide_id,'figures':manifests,'added_connections':len(new_records),
            'selected_connections':sorted(selected_connections),'unused_dispositions':len(unused),'main_acceptance':'pending'})
    # Stage every intended file and capture originals before any publication write.
    destinations=[]
    for index,(path,content) in enumerate(plans):
        baseline=path.read_bytes() if path.exists() else None;staged=stage/('output-'+str(index));staged.write_bytes(content)
        if baseline is not None:(stage/('original-'+str(index))).write_bytes(baseline)
        destinations.append({'path':str(path),'baseline_sha256':None if baseline is None else hashlib.sha256(baseline).hexdigest(),
            'staged_path':str(staged),'sha256':hashlib.sha256(content).hexdigest()})
    (stage/'staged-manifest.json').write_text(json.dumps(destinations,indent=2)+'\n')
    if hashlib.sha256(DATA.read_bytes()).hexdigest()!=data_baseline:raise ValueError('Canonical data changed during supplementary staging')
    for record in destinations:
        path=Path(record['path']);current=hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
        if current!=record['baseline_sha256']:raise ValueError('Destination changed during supplementary staging: '+str(path))
    for record in destinations:
        path=Path(record['path']);current=hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
        if current!=record['baseline_sha256']:raise ValueError('Destination changed before supplementary promotion: '+str(path))
        if current==record['sha256']:continue
        temporary=path.with_name(path.name+'.supplemental-writing');temporary.write_bytes(Path(record['staged_path']).read_bytes());temporary.replace(path)
        print(json.dumps({'type':'artifact','path':str(path),'sha256':record['sha256']}),flush=True)
    projection_reused=(all(record['baseline_sha256']==record['sha256'] for record in destinations)
                       and supplemental_projections_current(guide_by_id,selected_ids))
    if not projection_reused:
        from build_machine_pages import build as build_pages
        build_pages(set(selected_ids),update_index=True)
    for record in preserved:
        if hashlib.sha256(Path(record['main_svg']).read_bytes()).hexdigest()!=record['sha256']:raise ValueError('Main SVG changed during supplementary integration')
        evidence=json.loads((ROOT/('centered-connections-'+record['profile_id']+'.json')).read_text())
        if any(evidence.get(key)!=value for key,value in record['main_fields'].items()):raise ValueError('Main evidence fields changed during supplementary integration')
        existing={value['id']:value for value in evidence['connections']}
        if any(existing.get(value['id'])!=value for value in record['existing_connections']):raise ValueError('Existing conductor evidence changed')
    receipt={'type':'supplemental_integration_receipt','profiles':receipts,'destinations':destinations,
        'main_svg_bytes_preserved':True,'main_evidence_fields_preserved':True,'existing_connections_preserved':True,
        'main_acceptance':'pending','pixel_acceptance':'pending parent review','public_acceptance':'pending',
        'tests_run':False,'canonical_data_sha256':data_baseline,'projection_reused':projection_reused}
    receipt_path=stage/'integration-receipt.json';receipt_path.write_text(json.dumps(receipt,indent=2)+'\n')
    print(json.dumps({'type':'summary','receipt':str(receipt_path),'supplemental_figures':len(requested),'main_acceptance':'pending'}),flush=True)


def load_primary_manifest(path,guides,requested,baseline_data_path):
    """Validate the named complete primary reference and its exact frozen provenance.

    Manifest v2 retains its figure fields and requires figure_baseline_sha256,
    render_data_sha256, native_geometry_sha256, native_contact_count and the
    existing_main_svg_sha256/existing_article_sha256/existing_evidence_sha256
    publication baseline. existing_figure_svg_sha256 is null for a new asset.
    --primary-render-baseline-data supplies the absolute full frozen input.
    """
    frozen_path=Path(baseline_data_path)
    if not frozen_path.is_absolute():raise ValueError('Primary frozen data path must be absolute')
    frozen_bytes=frozen_path.read_bytes();frozen={guide['id']:guide for guide in json.loads(frozen_bytes)['guides']}
    current={guide['id']:guide for guide in guides}
    selected_ids=sorted({key[0] for key in requested})
    inputs=load_render_manifest(path,guides,selected_ids,primary_keys=requested)
    entries=json.loads(Path(path).read_text())['entries'];loaded={}
    for entry in entries:
        identifier=entry['profile_id'];figure_id=entry['figure_id'];guide=current[identifier]
        if entry.get('render_data_path') and Path(entry['render_data_path'])!=frozen_path:
            raise ValueError('Primary frozen data path conflicts with accepted manifest')
        if hashlib.sha256(frozen_bytes).hexdigest()!=entry.get('render_data_sha256'):
            raise ValueError('Primary full frozen input hash mismatch')
        if identifier not in frozen or canonical_sha256(frozen[identifier])!=entry['guide_sha256']:
            raise ValueError('Primary frozen guide provenance mismatch')
        definition=next(item for item in guide['conditional_complete_figures'] if item['id']==figure_id)
        frozen_definition=next(item for item in frozen[identifier]['conditional_complete_figures'] if item['id']==figure_id)
        if supplemental_baseline(frozen[identifier],frozen_definition)!=entry['figure_baseline_sha256']:
            raise ValueError('Primary exact frozen figure baseline mismatch')
        svg=inputs[identifier][figure_id]
        metadata=[node for node in ElementTree.fromstring(svg) if node.get('id')=='centered-wiring-provenance']
        if len(metadata)!=1:raise ValueError('Primary SVG must have exactly one provenance record')
        projection=json.loads(metadata[0].text)
        geometry={key:projection.get(key) for key in ('geometry','controller_artwork','extension_artwork')}
        if canonical_sha256(geometry)!=entry.get('native_geometry_sha256'):
            raise ValueError('Primary native geometry hash mismatch')
        artwork=projection['controller_artwork'];contacts=dict(artwork['contact_map'])
        if (type(entry.get('native_contact_count')) is not int or len(contacts)!=entry['native_contact_count']
                or artwork.get('contact_count')!=len(contacts)):
            raise ValueError('Primary native contact inventory mismatch')
        for placement in [artwork]+projection.get('extension_artwork',[]):
            for source in placement.get('sources',[]):
                source_path=(ROOT/source['asset']).resolve()
                if (not source_path.is_relative_to(ROOT.resolve())
                        or hashlib.sha256(source_path.read_bytes()).hexdigest()!=source['sha256']):
                    raise ValueError('Primary authoritative artwork source drift')
            if placement is not artwork:
                if set(contacts)&set(placement['contact_map']):raise ValueError('Duplicate primary native contact reference')
                contacts.update(placement['contact_map'])
            transform=placement['uniform_transform']
            for contact in placement['contact_map'].values():
                expected=[transform['scale']*value+transform['translate'][axis]
                          for axis,value in enumerate(contact['source_anchor'])]
                if len(contact['anchor'])!=2 or any(abs(x-y)>1e-5 for x,y in zip(expected,contact['anchor'])):
                    raise ValueError('Primary exact native contact transform changed')
        routes={item['connection_id']:item for item in projection['main_route_manifest']}
        for panel_index in definition['panel_indices']:
            panel=guide['wire_panels'][panel_index]
            endpoints={node['id']+'.'+contact['id']:(node,contact) for node in panel['nodes'] for contact in node['contacts']}
            for edge_index,edge in enumerate(panel['edges']):
                route=routes[connection_id(panel_index,edge_index)]
                for field in ('from','to'):
                    node,contact=endpoints[edge[field]]
                    reference=_terminal_reference(node,contact) if is_controller_node(node) else None
                    if route.get(field+'_controller_reference')!=reference:
                        raise ValueError('Primary native controller endpoint reference changed')
                    if is_controller_node(node) and reference not in contacts and edge['state']!='open':
                        raise ValueError('Complete primary graph has an unresolved native contact')
        loaded[(identifier,figure_id)]={'svg':svg,'projection':projection,
            'entry':dict(entry,render_data_path=str(frozen_path))}
    return loaded


def build_primary_reference(guides,render_inputs,stage_path):
    """Publish the accepted Schaublin primary proposal while retaining compatibility history.

    The primary figure is visible before the existing compatibility main, as
    build() does. Existing records/rows remain exact, including their view labels;
    missing primary records use the established MAIN REFERENCE grammar. The
    separate primary_reference_connections inventory identifies all primary CIDs.
    """
    stage=Path(stage_path).resolve()
    if stage.exists():raise ValueError('Primary staging directory exists; preserve previous receipts')
    stage.mkdir(parents=True);current={guide['id']:guide for guide in guides}
    if len(render_inputs)!=1:raise ValueError('Primary integration requires exactly the named accepted figure')
    (identifier,figure_id),item=next(iter(render_inputs.items()));guide=current[identifier];entry=item['entry']
    definition=next(value for value in guide['conditional_complete_figures'] if value['id']==figure_id)
    if definition.get('primary_reference') is not True:raise ValueError('Primary definition lost authored primary status')
    selected=expected_ids(guide,definition['panel_indices']);data_digest=hashlib.sha256(DATA.read_bytes()).hexdigest()
    main_path=ROOT/'smoothiebox-machine-wiring'/('centered-'+identifier+'.svg')
    article_path=ROOT/'machine-page-source'/'articles'/(identifier+'.html')
    evidence_path=ROOT/('centered-connections-'+identifier+'.json')
    asset=ROOT/'smoothiebox-machine-wiring'/('conditional-'+identifier+'-'+figure_id+'.svg')
    snapshots={path:path.read_bytes() for path in (main_path,article_path,evidence_path)}
    for path,field in ((main_path,'existing_main_svg_sha256'),(article_path,'existing_article_sha256'),(evidence_path,'existing_evidence_sha256')):
        if hashlib.sha256(snapshots[path]).hexdigest()!=entry.get(field):raise ValueError('Primary publication baseline drift: '+str(path))
    original_asset=asset.read_bytes() if asset.exists() else None
    if 'existing_figure_svg_sha256' not in entry or entry['existing_figure_svg_sha256']!=(hashlib.sha256(original_asset).hexdigest() if original_asset is not None else None):
        raise ValueError('Primary target asset baseline mismatch')
    if original_asset is not None:snapshots[asset]=original_asset
    for placement in [item['projection']['controller_artwork']]+item['projection'].get('extension_artwork',[]):
        for source in placement.get('sources',[]):
            source_path=(ROOT/source['asset']).resolve();content=source_path.read_bytes()
            if hashlib.sha256(content).hexdigest()!=source['sha256']:raise ValueError('Primary native source changed before staging')
            snapshots[source_path]=content
    evidence=json.loads(snapshots[evidence_path]);original_connections=json.loads(json.dumps(evidence['connections']))
    existing={record['id']:record for record in evidence['connections']}
    if len(existing)!=len(evidence['connections']):raise ValueError('Duplicate retained primary evidence IDs')
    changed_fields={'connections','conditional_complete_figures','primary_reference_connections','primary_integration'}
    immutable={key:value for key,value in evidence.items() if key not in changed_fields}
    old_manifests=evidence.get('conditional_complete_figures',[])
    if len({value['id'] for value in old_manifests})!=len(old_manifests):raise ValueError('Duplicate retained figure manifests')
    for key in ('conditional_complete_figures','conditional_source_figures'):
        for figure in evidence.get(key,[]):
            if key=='conditional_complete_figures' and figure['id']==figure_id:continue
            path=Path(figure['asset_path']);snapshots[path]=path.read_bytes()
            if hashlib.sha256(snapshots[path]).hexdigest()!=figure['asset_sha256']:raise ValueError('Retained figure asset drift')
    prior_primary=set(evidence.get('primary_reference_connections',[]))
    if prior_primary and prior_primary!=selected:raise ValueError('Refusing to replace another primary reference CID inventory')
    article=snapshots[article_path].decode();start='<!-- centered-start:'+identifier+' -->';end='<!-- centered-end:'+identifier+' -->'
    if article.count(start)!=1 or article.count(end)!=1:raise ValueError('Ambiguous current centered primary section')
    left=article.index(start);right=article.index(end,left);block=article[left:right];old_block=block
    marker='<!-- primary-reference-start:'+identifier+'/'+figure_id+' -->';end_marker='<!-- primary-reference-end:'+identifier+'/'+figure_id+' -->'
    if marker in block or end_marker in block:raise ValueError('Primary reference already integrated; preserve its receipt')
    parsed=BeautifulSoup(block,'html.parser')
    url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
    if parsed.find('img',src=url):raise ValueError('Unowned primary figure already exists')
    new_records=[];new_rows=[];unused=[]
    for panel_index in definition['panel_indices']:
        panel=guide['wire_panels'][panel_index]
        for edge_index,_ in enumerate(panel['edges']):
            cid=connection_id(panel_index,edge_index)
            rows=parsed.find_all('tr',id=identifier+'-'+cid)
            if cid in existing:
                if len(rows)!=1:raise ValueError('Retained primary CID row missing or duplicated: '+cid)
                continue
            if rows:raise ValueError('Primary row exists without authoritative evidence: '+cid)
            connection,row=supplemental_connection(guide,panel_index,edge_index,view='MAIN REFERENCE')
            new_records.append(connection);new_rows.append(row)
        for node in panel['nodes']:
            for contact in node['contacts']:
                endpoint=node['id']+'.'+contact['id']
                if any(endpoint in (edge['from'],edge['to']) for edge in panel['edges']):continue
                references=sources_for(guide,panel,{'function':'Unused or unresolved terminal '+contact['label']})
                links='; '.join(source_label(source) for source in references)
                unused.append('<tr><td>'+esc(panel['title'])+'</td><td>'+esc(node['title']+' · '+contact['label'])+'</td><td>No conductor drawn. '+esc(panel['note'])+'<p>'+links+'</p></td></tr>')
    if new_rows:
        anchor=identifier+'-'+evidence['connections'][0]['id']
        tables=[match for match in re.finditer(r'<table\b[^>]*>.*?</table>',block,re.S)
                if re.search(r'<tr\b[^>]*\bid=["\']'+re.escape(anchor)+r'["\']',match.group())]
        if len(tables)!=1 or tables[0].group().count('</tbody>')!=1:raise ValueError('Ambiguous retained primary conductor table')
        position=tables[0].start()+tables[0].group().index('</tbody>')
        block=block[:position]+''.join(new_rows)+block[position:]
    main_url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+main_path.name
    figures=[match for match in re.finditer(r'<figure\b[^>]*>.*?</figure>',block,re.S)
             if BeautifulSoup(match.group(),'html.parser').find('img',src=main_url)]
    if len(figures)!=1:raise ValueError('Ambiguous retained compatibility main figure')
    main_figure=figures[0];main_tag=BeautifulSoup(block,'html.parser').find('img',src=main_url)
    already_wrapped=main_tag.find_parent('details',class_='source-compatibility-diagram') is not None
    if not already_wrapped:
        wrapped='<details class="source-compatibility-diagram"><summary>Earlier source compatibility diagram</summary>'+main_figure.group()+'</details>'
        block=block[:main_figure.start()]+wrapped+block[main_figure.end():]
    condition=definition.get('requires','Match fitted hardware and qualify the interface before use.')
    panels=', '.join(str(index+1) for index in definition['panel_indices'])
    primary=marker+'<figure class="atlas-smoothiebox-figure" data-figure-id="'+esc(figure_id)+'"><button class="zoom-figure" type="button" data-caption="'+esc(definition['title'])+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(definition['title']+'; complete selected source-graph wiring reference, not an as-built diagram')+'"></button><figcaption><strong>Complete reference proposal; not an as-built map.</strong> '+esc(condition)+' Source graph panels: '+esc(panels)+'. <a href="'+url+'" target="_blank" rel="noopener">Open full-size figure</a>.</figcaption></figure>'
    if unused:primary+='<details><summary>Primary reference unused or unresolved terminals · explicit dispositions</summary><div class="table-wrap"><table><thead><tr><th>Circuit</th><th>Terminal</th><th>Disposition and sources</th></tr></thead><tbody>'+''.join(unused)+'</tbody></table></div></details>'
    primary+=end_marker
    heading=re.search(r'<h4\b[^>]*>.*?</h4>',block,re.S)
    if heading is None:raise ValueError('Missing current primary section heading')
    block=block[:heading.end()]+primary+block[heading.end():]
    updated_article=article[:left]+block+article[right:]
    readback=BeautifulSoup(updated_article,'html.parser')
    if any(len(readback.find_all('tr',id=identifier+'-'+cid))!=1 for cid in selected):raise ValueError('Primary row inventory missing or duplicated')
    evidence['connections'].extend(new_records)
    manifest={'id':figure_id,'status':'complete','panel_indices':list(definition['panel_indices']),
        'asset_path':str(asset),'asset_sha256':entry['svg_sha256'],'selected_connections':sorted(selected),'primary_reference':True}
    merged={value['id']:value for value in old_manifests};merged[figure_id]=manifest
    evidence['conditional_complete_figures']=list(merged.values());evidence['primary_reference_connections']=sorted(selected)
    evidence['primary_integration']={'figure_id':figure_id,'figure_baseline_sha256':entry['figure_baseline_sha256'],
        'render_data_path':entry['render_data_path'],'render_data_sha256':entry['render_data_sha256'],
        'frozen_guide_sha256':entry['guide_sha256'],'canonical_guide_sha256':canonical_sha256(guide),
        'native_geometry_sha256':entry['native_geometry_sha256'],'added_connection_ids':[value['id'] for value in new_records],
        'retained_existing_connection_ids':sorted(existing),'compatibility_main_svg_sha256':entry['existing_main_svg_sha256'],
        'qualification':'Conditional reference proposal; complete selected source graph, not installed or electrically qualified',
        'public_acceptance':'pending'}
    now_asset=hashlib.sha256(asset.read_bytes()).hexdigest() if asset.exists() else None
    if now_asset!=entry['existing_figure_svg_sha256']:raise ValueError('Primary target changed during planning')
    plans=[(asset,item['svg']),(article_path,updated_article.encode()),(evidence_path,(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n').encode())];destinations=[]
    for index,(path,content) in enumerate(plans):
        original=path.read_bytes() if path.exists() else None
        if original is not None:(stage/('original-'+str(index))).write_bytes(original)
        staged=stage/('output-'+str(index));staged.write_bytes(content)
        destinations.append({'path':str(path),'baseline_sha256':hashlib.sha256(original).hexdigest() if original is not None else None,'sha256':hashlib.sha256(content).hexdigest(),'staged_path':str(staged)})
    (stage/'staged-manifest.json').write_text(json.dumps(destinations,indent=2)+'\n')
    if hashlib.sha256(DATA.read_bytes()).hexdigest()!=data_digest:raise ValueError('Canonical data drift during primary staging')
    if hashlib.sha256(Path(entry['render_data_path']).read_bytes()).hexdigest()!=entry['render_data_sha256']:raise ValueError('Frozen primary data changed before promotion')
    for path,content in snapshots.items():
        if path.read_bytes()!=content:raise ValueError('Retained primary publication changed before promotion: '+str(path))
    for destination in destinations:
        path=Path(destination['path']);now=hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
        if now!=destination['baseline_sha256']:raise ValueError('Primary destination drift before promotion')
    for destination in destinations:
        path=Path(destination['path']);now=hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
        if now!=destination['baseline_sha256']:raise ValueError('Primary destination changed during promotion')
        if now==destination['sha256']:continue
        temporary=path.with_name(path.name+'.primary-writing');temporary.write_bytes(Path(destination['staged_path']).read_bytes());temporary.replace(path)
        print(json.dumps({'type':'artifact','path':str(path),'sha256':destination['sha256']}),flush=True)
    from build_machine_pages import build as build_pages
    build_pages({identifier},update_index=True)
    for path,content in snapshots.items():
        if path in {article_path,evidence_path,asset}:continue
        if path.read_bytes()!=content:raise ValueError('Retained compatibility/source asset changed during primary integration')
    if article_path.read_bytes()!=updated_article.encode():raise ValueError('Primary article changed beyond staged owned edits')
    final=json.loads(evidence_path.read_text())
    if any(final.get(key)!=value for key,value in immutable.items()):raise ValueError('Compatibility main evidence changed during primary integration')
    if final['connections']!=original_connections+new_records:raise ValueError('Retained electrical/source records changed')
    if any(value!=next(item for item in final['conditional_complete_figures'] if item['id']==value['id']) for value in old_manifests if value['id']!=figure_id):raise ValueError('Retained conditional manifests changed')
    receipt={'type':'primary_reference_integration_receipt','profile_id':identifier,'figure':manifest,'destinations':destinations,
        'added_connection_ids':[value['id'] for value in new_records],'retained_existing_connections_exact':True,
        'compatibility_main_svg_and_evidence_preserved':True,'article_changes':'Primary figure inserted after heading; original main figure wrapped; missing rows appended; all prior row and history bytes retained',
        'original_centered_block_sha256':hashlib.sha256(old_block.encode()).hexdigest(),'canonical_data_sha256':data_digest,
        'tests_run':False,'public_acceptance':'pending','physical_electrical_qualification':'unqualified'}
    path=stage/'integration-receipt.json';path.write_text(json.dumps(receipt,indent=2)+'\n')
    print(json.dumps({'type':'summary','primary_reference':identifier+'/'+figure_id,'receipt':str(path)}),flush=True)


def main_baseline(guide):
    """Bind all main-affecting guide fields and complete selected panels, excluding supplements.

    Panels with no selected main edge are independent publication inputs.
    All nonpanel guide fields and every field of a selected
    panel remain exact; this never normalizes away electrical or native-pin drift.
    """
    identifiers=main_ids(guide)
    indices=sorted({int(identifier[1:3])-1 for identifier in identifiers})
    return canonical_sha256({
        'guide':{key:value for key,value in guide.items()
                 if key!='wire_panels'},
        'panels':[{'index':index,'panel':guide['wire_panels'][index]} for index in indices],
        'connection_ids':sorted(identifiers)})


def load_main_manifest(path,guides,selected_ids,baseline_data_path=None):
    """Validate named main artifacts against their full frozen source and current main baseline.

    Uses centered-pre-rendered-svg-manifest-v2, exactly one figure_id=null entry
    per --main-only profile. Additional required entry fields: render_data_path,
    render_data_sha256, guide_sha256 (the frozen guide), main_baseline_sha256,
    native_geometry_sha256, native_contact_count, existing_main_svg_sha256,
    existing_evidence_sha256 and existing_article_sha256. Existing native_kind,
    controller_kind, controller_artwork_sha256, panel_indices=null, status=main,
    connection_ids, absolute svg_path and svg_sha256 fields retain their meaning.
    Full guide provenance remains verified even when an unselected supplement
    has changed locally; equality is required for the exact main-affecting subset.
    """
    manifest=json.loads(Path(path).read_text())
    if manifest.get('schema')!='centered-pre-rendered-svg-manifest-v2' or not isinstance(manifest.get('entries'),list):
        raise ValueError('Unsupported accepted main render manifest')
    if not selected_ids or len(set(selected_ids))!=len(selected_ids):
        raise ValueError('Main-only profile selection must be nonempty and unique')
    current={guide['id']:guide for guide in guides};entries={};loaded={}
    for entry in manifest['entries']:
        key=(entry.get('profile_id'),entry.get('figure_id'))
        if key in entries:raise ValueError('Duplicate main manifest entry: '+str(key))
        entries[key]=entry
    if set(entries)!={(identifier,None) for identifier in selected_ids}:
        raise ValueError('Main manifest must contain exactly the named main figures and no supplements')
    for identifier in selected_ids:
        if identifier not in current:raise ValueError('Unknown main-only profile: '+identifier)
        guide=current[identifier];entry=entries[(identifier,None)]
        data_path=Path(baseline_data_path or entry.get('render_data_path',''));svg_path=Path(entry.get('svg_path',''))
        if baseline_data_path and entry.get('render_data_path') and data_path!=Path(entry['render_data_path']):
            raise ValueError('Explicit main baseline data conflicts with manifest: '+identifier)
        if not data_path.is_absolute() or not svg_path.is_absolute():raise ValueError('Main input paths must be absolute')
        frozen_bytes=data_path.read_bytes();svg_bytes=svg_path.read_bytes()
        if hashlib.sha256(frozen_bytes).hexdigest()!=entry.get('render_data_sha256'):
            raise ValueError('Frozen render data hash mismatch: '+identifier)
        if hashlib.sha256(svg_bytes).hexdigest()!=entry.get('svg_sha256'):
            raise ValueError('Accepted main SVG hash mismatch: '+identifier)
        matches=[item for item in json.loads(frozen_bytes)['guides'] if item['id']==identifier]
        if len(matches)!=1:raise ValueError('Frozen guide missing or duplicated: '+identifier)
        frozen=matches[0]
        if canonical_sha256(frozen)!=entry.get('guide_sha256'):
            raise ValueError('Full frozen guide provenance mismatch: '+identifier)
        if main_baseline(frozen)!=main_baseline(guide) or main_baseline(guide)!=entry.get('main_baseline_sha256'):
            raise ValueError('Selected main panels or main-affecting guide fields changed: '+identifier)
        required=main_ids(guide)
        if (entry.get('figure_status')!='main' or entry.get('panel_indices') is not None
                or entry.get('native_kind')!=NATIVE_LAYOUT or entry.get('controller_kind')!=guide['selected_controller']):
            raise ValueError('Main identity/status/native contract mismatch: '+identifier)
        root=ElementTree.fromstring(svg_bytes)
        metadata=[node for node in root if node.get('id')=='centered-wiring-provenance']
        if len(metadata)!=1:raise ValueError('Main SVG must have exactly one provenance record')
        projection=json.loads(metadata[0].text)
        if (projection.get('profile_id')!=identifier or projection.get('figure_status')!='main'
                or projection.get('layout')!=NATIVE_LAYOUT
                or set(projection.get('main_additional_connection_ids',[]))!=main_additional_ids(guide)):
            raise ValueError('Main SVG provenance selection mismatch: '+identifier)
        for label,values,expected in (
                ('declared',entry.get('connection_ids',[]),required),
                ('visible',projection.get('main_visible_connections',[]),required),
                ('routes',[item.get('connection_id') for item in projection.get('main_route_manifest',[])],required),
                ('full frozen graph',[item.get('connection_id') for item in projection.get('connections',[])],expected_ids(frozen,None))):
            if set(values)!=expected or len(values)!=len(expected):
                raise ValueError('Main CID inventory missing, extra or duplicated: '+identifier+'/'+label)
        artwork=projection.get('controller_artwork')
        if (not isinstance(artwork,dict) or artwork.get('kind')!=guide['selected_controller']
                or canonical_sha256(artwork)!=entry.get('controller_artwork_sha256')):
            raise ValueError('Main controller artwork provenance mismatch: '+identifier)
        geometry={key:projection.get(key) for key in ('geometry','controller_artwork','extension_artwork')}
        if canonical_sha256(geometry)!=entry.get('native_geometry_sha256'):
            raise ValueError('Accepted main native geometry hash mismatch: '+identifier)
        contacts=artwork.get('contact_map',{})
        if (type(entry.get('native_contact_count')) is not int
                or len(contacts)!=entry['native_contact_count'] or artwork.get('contact_count')!=len(contacts)):
            raise ValueError('Native controller contact inventory mismatch: '+identifier)
        native_contacts=dict(contacts)
        for placed in [artwork]+projection.get('extension_artwork',[]):
            for source in placed.get('sources',[]):
                source_path=(ROOT/source['asset']).resolve()
                if (not source_path.is_relative_to(ROOT.resolve())
                        or hashlib.sha256(source_path.read_bytes()).hexdigest()!=source['sha256']):
                    raise ValueError('Authoritative controller artwork source drift: '+identifier)
            if placed is not artwork:
                if set(native_contacts)&set(placed.get('contact_map',{})):
                    raise ValueError('Duplicated native controller/extension reference')
                native_contacts.update(placed.get('contact_map',{}))
            transform=placed['uniform_transform'];scale=transform['scale'];translation=transform['translate']
            for contact in placed.get('contact_map',{}).values():
                expected=[scale*coordinate+translation[axis] for axis,coordinate in enumerate(contact['source_anchor'])]
                if any(abs(first-second)>1e-5 for first,second in zip(expected,contact['anchor'])):
                    raise ValueError('Native contact transform drift: '+identifier)
        graph={item['connection_id']:item for item in projection['connections']}
        routes={item['connection_id']:item for item in projection['main_route_manifest']}
        for panel_index,panel in enumerate(guide['wire_panels']):
            endpoints={node['id']+'.'+contact['id']:(node,contact)
                       for node in panel['nodes'] for contact in node['contacts']}
            for edge_index,edge in enumerate(panel['edges']):
                cid=connection_id(panel_index,edge_index)
                if cid not in required:continue
                if any(graph[cid].get(key)!=value for key,value in edge.items()):
                    raise ValueError('Main electrical/source edge changed: '+identifier+'/'+cid)
                route=routes[cid];references=[];unresolved=False
                for field in ('from','to'):
                    node,contact=endpoints[edge[field]]
                    reference=_terminal_reference(node,contact) if is_controller_node(node) else None
                    references.append(reference)
                    if is_controller_node(node) and reference not in native_contacts:unresolved=True
                    if route.get(field+'_controller_reference')!=reference:
                        raise ValueError('Main native controller reference changed: '+identifier+'/'+cid)
                state='open' if edge['state']=='open' or unresolved else edge['state']
                if (route.get('graph_state')!=edge['state'] or route.get('render_state')!=state
                        or route.get('from_endpoint')!=edge['from'] or route.get('to_endpoint')!=edge['to']):
                    raise ValueError('Main wire state/endpoints changed: '+identifier+'/'+cid)
        loaded[identifier]={'svg':svg_bytes,'projection':projection,'entry':dict(entry,render_data_path=str(data_path))}
    return loaded


def reviewed_main_replacement(guide,original_ids,selected_ids):
    """Permit only the reviewed Avid abstract-to-complete circuit substitution.

    Other profiles retain the original CID-subset guard. Exact complete panel
    hashes include source, contacts, qualification, states and layout fields.
    This mapping changes view ownership only; old electrical records survive.
    """
    if len(set(original_ids))!=len(original_ids):raise ValueError('Duplicated original main CIDs')
    dropped=set(original_ids)-selected_ids
    if not dropped:return None
    if guide['id']!='mill-avid-ex-3':raise ValueError('Unreviewed main CID replacement: '+guide['id'])
    mapping=[{'old_panel': 11, 'new_panels': [25], 'old_cids': ['C11-001', 'C11-002', 'C11-003', 'C11-004', 'C11-005', 'C11-006'], 'old_title': 'X Home/Limit · existing M12 sensor through rated interface', 'new_titles': ['X Home/Limit · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C25-001', 'C25-002', 'C25-003', 'C25-004', 'C25-005', 'C25-006', 'C25-007', 'C25-008']}, {'old_panel': 12, 'new_panels': [26], 'old_cids': ['C12-001', 'C12-002', 'C12-003', 'C12-004', 'C12-005', 'C12-006'], 'old_title': 'Y1 Home/Limit · existing M12 sensor through rated interface', 'new_titles': ['Y1 Home/Limit · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C26-001', 'C26-002', 'C26-003', 'C26-004', 'C26-005', 'C26-006', 'C26-007', 'C26-008']}, {'old_panel': 13, 'new_panels': [27], 'old_cids': ['C13-001', 'C13-002', 'C13-003', 'C13-004', 'C13-005', 'C13-006'], 'old_title': 'Y2 Home · existing M12 sensor through rated interface', 'new_titles': ['Y2 Home · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C27-001', 'C27-002', 'C27-003', 'C27-004', 'C27-005', 'C27-006', 'C27-007', 'C27-008']}, {'old_panel': 14, 'new_panels': [28], 'old_cids': ['C14-001', 'C14-002', 'C14-003', 'C14-004', 'C14-005', 'C14-006'], 'old_title': 'A Home · existing M12 sensor through rated interface', 'new_titles': ['A Home · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C28-001', 'C28-002', 'C28-003', 'C28-004', 'C28-005', 'C28-006', 'C28-007', 'C28-008']}, {'old_panel': 15, 'new_panels': [29], 'old_cids': ['C15-001', 'C15-002', 'C15-003', 'C15-004', 'C15-005', 'C15-006'], 'old_title': 'Y+ Limit · existing M12 sensor through rated interface', 'new_titles': ['Y+ Limit · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C29-001', 'C29-002', 'C29-003', 'C29-004', 'C29-005', 'C29-006', 'C29-007', 'C29-008']}, {'old_panel': 16, 'new_panels': [30], 'old_cids': ['C16-001', 'C16-002', 'C16-003', 'C16-004', 'C16-005', 'C16-006'], 'old_title': 'Z+ Home/Limit · existing M12 sensor through rated interface', 'new_titles': ['Z+ Home/Limit · proposed isolated sensor circuit with complete field and host wiring'], 'new_cids': ['C30-001', 'C30-002', 'C30-003', 'C30-004', 'C30-005', 'C30-006', 'C30-007', 'C30-008']}, {'old_panel': 18, 'new_panels': [31, 32], 'old_cids': ['C18-001', 'C18-002', 'C18-003', 'C18-004', 'C18-005', 'C18-006', 'C18-007', 'C18-008'], 'old_title': 'Spindle speed, run and ready/fault · all separate interfaces', 'new_titles': ['Avid spindle · DFR1036 speed circuit · conditional current choice', 'Avid spindle · separate isolated FWD/RUN command'], 'new_cids': ['C31-001', 'C31-002', 'C31-003', 'C31-004', 'C31-005', 'C31-006', 'C32-001', 'C32-002', 'C32-003', 'C32-004', 'C32-005', 'C32-006', 'C32-007', 'C32-008', 'C32-009', 'C32-010']}]
    panel_hashes={'11': '521d143eca460f2a2f7cbc80acf5ffefb3d0aaf373ea0a0de588e280e2ddc6db', '12': '3f1d4512da9abd7b7cbca26d7afec064e195ee2e81bacb001cd7f6c5101c488b', '13': '2dde8c02136240f78f39c6784c0a74a1c1355c64f47bc55996748a1a6c5824b2', '14': '6ca078763af90a83245416ece0ea1514d7f791b5b54fb66609e6f9aca191f1bb', '15': 'b0340e9db4266316bc0f7321efbc819d087f3b1dab8de072a13eb8522612230e', '16': 'e0b53204c7792ece4b26e1615dc42983b181c8bf1f29a2b71daee0bb67785c22', '18': '34cd6b1b396d6b299e7cecf469747d2e6c85b83c89a28dde210838e9700df843', '25': '519ebafd865f83ee2799857f33f0ab1be78f0585dfdf36544b5cca4124d40c9d', '26': '222a35c810fe884755cb2148560821be360c16cb4124995ed9bf053f2fb82d49', '27': 'dcf0021f28883cc2f7a61e73a16d3e01ca84a6cd393bb8944b1a458ad0e1efbb', '28': '5ae21bbc4acf79a59773aaed3fccaab67105f8cf2cf9daaa4022eb3c4fb86075', '29': '6c29e63b0961c9800e346bac35f844cf987add03220a71faa3e68f44117ed7ef', '30': 'dd0d9ddec05a526e3175e71203a9b5d6bd011e59e1b4734fc0dd07138773c10a', '31': '195f311a6b9ddd21092c422af6f04489ac3cc0c7ad051ebf6ef844531d22b92e', '32': '25879da3c83998913f93035b52f23f9f69a5e93322b3dc654c3aeb1d85fcfa8a'}
    expected_dropped={cid for item in mapping for cid in item['old_cids']}
    if dropped!=expected_dropped or canonical_sha256(sorted(original_ids))!='813d0de63cad7e40330d9b3c016ca86f4063f9bb6712bb7c1dd90529862bc31f':
        raise ValueError('Avid original main inventory differs from reviewed 174-CID baseline')
    if guide.get('superseded_main_panel_indices')!=[11,12,13,14,15,16,18]:
        raise ValueError('Avid superseded panel declaration differs from reviewed mapping')
    for number,digest in panel_hashes.items():
        if canonical_sha256(guide['wire_panels'][int(number)-1])!=digest:
            raise ValueError('Avid reviewed replacement panel changed: '+number)
    replacements={cid for item in mapping for cid in item['new_cids']}
    if not replacements<=selected_ids or expected_dropped&selected_ids:
        raise ValueError('Avid complete replacement circuits missing or abstract circuits still selected')
    if not {'C18-009','C18-010','C18-011','C18-012'}<=selected_ids:
        raise ValueError('Avid retained OPEN spindle contacts missing')
    return {'mapping':mapping,'superseded_ids':sorted(expected_dropped),
            'replacement_ids':sorted(replacements),'view':'DETAILED CIRCUIT'}


def update_main_article(original,identifier,selected_ids,existing_records,new_rows=None,replacement=None):
    """Change only selected conductor view badges and a stale owned main-pending notice."""
    start='<!-- centered-start:'+identifier+' -->';end='<!-- centered-end:'+identifier+' -->'
    if original.count(start)!=1 or original.count(end)!=1:raise ValueError('Ambiguous current main article block')
    left=original.index(start);right=original.index(end,left);block=original[left:right];changes=[]
    if new_rows:
        # Append only to the existing main conductor table; never serialize or
        # rebuild retained source, supplementary or history markup.
        existing_ids=selected_ids-set(new_rows)
        if not existing_ids:raise ValueError('Missing retained main table anchor')
        anchor=identifier+'-'+sorted(existing_ids)[0]
        tables=[match for match in re.finditer(r'<table\b[^>]*>.*?</table>',block,re.S)
                if re.search(r'<tr\b[^>]*\bid=["\']'+re.escape(anchor)+r'["\']',match.group())]
        if len(tables)!=1 or tables[0].group().count('</tbody>')!=1:
            raise ValueError('Ambiguous existing main conductor table')
        for cid in new_rows:
            if re.search(r'<tr\b[^>]*\bid=["\']'+re.escape(identifier+'-'+cid)+r'["\']',block):
                raise ValueError('New main conductor row already exists: '+cid)
        insertion=tables[0].start()+tables[0].group().index('</tbody>')
        block=block[:insertion]+''.join(new_rows[cid] for cid in sorted(new_rows))+block[insertion:]
        changes.extend({'connection_id':cid,'added_row':new_rows[cid]} for cid in sorted(new_rows))
    desired_views={cid:'MAIN' for cid in selected_ids}
    if replacement:desired_views.update({cid:replacement['view'] for cid in replacement['superseded_ids']})
    for cid in sorted(desired_views):
        if cid not in existing_records:raise ValueError('Existing main conductor evidence missing: '+cid)
        previous=existing_records[cid]['view']
        pattern=r'<tr\b[^>]*\bid=["\']'+re.escape(identifier+'-'+cid)+r'["\'][^>]*>.*?</tr>'
        matches=list(re.finditer(pattern,block,re.S))
        if len(matches)!=1:raise ValueError('Main conductor article row missing or duplicated: '+cid)
        row=matches[0].group();badge=r'(<br\s*/?>)'+re.escape(previous)+r'(\s*</td>)'
        revised,count=re.subn(badge,lambda match:match[1]+desired_views[cid]+match[2],row,count=1)
        if count!=1:raise ValueError('Main row badge does not match authoritative evidence: '+cid)
        if row!=revised:
            block=block[:matches[0].start()]+revised+block[matches[0].end():]
            changes.append({'connection_id':cid,'before':row,'after':revised,
                            'previous_view':previous,'new_view':desired_views[cid]})
    pending='Main wiring layout acceptance remains pending.'
    correction='The main figure is a source-graph proposal; fitted hardware remains unqualified.'
    if pending in block:
        if block.count(pending)!=1:raise ValueError('Ambiguous owned main-pending notice')
        block=block.replace(pending,correction,1)
        changes.append({'notice_before':pending,'notice_after':correction})
    stale='the main drawing remains the earlier revision pending regeneration.'
    revised='the main drawing now includes the current canonical source graph; fitted hardware remains unqualified.'
    if stale in block:
        if block.count(stale)!=1:raise ValueError('Ambiguous source-correction main notice')
        block=block.replace(stale,revised,1)
        changes.append({'notice_before':stale,'notice_after':revised})
    stale_caption=('Square controller with perimeter contacts and surrounding peripherals. '
        'Main-view conductors carry C-numbers; subsidiary interface circuits remain in the detailed drawings and complete schedule below. '
        'Dotted = proposed connection; green = retained source path; broken = OPEN. ')
    revised_caption=('Source-native controller contacts, separate extension cards and surrounding peripherals. '
        'The main figure shows every selected current conductor and interface circuit with its C-number; '
        'the complete schedule and supplementary alternatives remain below. '
        'Dotted = GUESS; solid = SOURCE; OPEN contacts remain disconnected. Fitted hardware remains unqualified. ')
    if stale_caption in block:
        if block.count(stale_caption)!=1:raise ValueError('Ambiguous current main caption')
        block=block.replace(stale_caption,revised_caption,1)
        changes.append({'caption_before':stale_caption,'caption_after':revised_caption})
    return original[:left]+block+original[right:],changes


def build_main_only(guides,render_inputs,stage_path):
    """Replace current main assets/projection evidence; retain authored articles and supplements.

    Original main CIDs remain selected except the exact reviewed Avid mapping.
    Superseded records become DETAILED CIRCUIT with the old main retained in history.
    Only selected record/row view
    badges become MAIN; electrical/source fields and all other records are exact.
    Conditional/source manifests and article/history bytes are retained except
    the explicit stale pending-main notice in the current owned centered block.
    This route never calls build(), any renderer, or conditional asset generation.
    """
    stage=Path(stage_path).resolve()
    if stage.exists():raise ValueError('Main-only staging directory exists; preserve previous receipts')
    stage.mkdir(parents=True);selected_ids=sorted(render_inputs);current={g['id']:g for g in guides}
    data_digest=hashlib.sha256(DATA.read_bytes()).hexdigest();plans=[];preserved=[]
    main_fields={'main_visible_connections','detailed_only_connections','main_route_manifest',
                 'main_additional_connection_ids','geometry','svg_sha256','main_integration','connections'}
    for identifier in selected_ids:
        item=render_inputs[identifier];entry=item['entry'];projection=item['projection']
        asset=ROOT/'smoothiebox-machine-wiring'/('centered-'+identifier+'.svg')
        article=ROOT/'machine-page-source'/'articles'/(identifier+'.html')
        evidence_path=ROOT/('centered-connections-'+identifier+'.json')
        snapshots={asset:asset.read_bytes(),article:article.read_bytes(),evidence_path:evidence_path.read_bytes()}
        for path,field in ((asset,'existing_main_svg_sha256'),(article,'existing_article_sha256'),(evidence_path,'existing_evidence_sha256')):
            if hashlib.sha256(snapshots[path]).hexdigest()!=entry.get(field):
                raise ValueError('Main publication baseline changed: '+str(path))
        evidence=json.loads(snapshots[evidence_path]);original_ids=evidence.get('main_visible_connections',[])
        replacement=reviewed_main_replacement(current[identifier],original_ids,main_ids(current[identifier]))
        immutable={key:value for key,value in evidence.items() if key not in main_fields}
        existing_records={record['id']:record for record in evidence['connections']}
        if len(existing_records)!=len(evidence['connections']):raise ValueError('Existing conductor evidence duplicated')
        original_connections=json.loads(json.dumps(evidence['connections']))
        selected=main_ids(current[identifier]);new_records=[];new_rows={}
        for cid in sorted(selected-set(existing_records)):
            panel_index=int(cid[1:3])-1;edge_index=int(cid[4:])-1
            connection,row=supplemental_connection(current[identifier],panel_index,edge_index,view='MAIN')
            if connection['id']!=cid:raise ValueError('New canonical main conductor identity mismatch')
            new_records.append(connection);new_rows[cid]=row;existing_records[cid]=connection
        evidence['connections'].extend(new_records)
        updated_article,article_changes=update_main_article(snapshots[article].decode(),identifier,selected,existing_records,new_rows,replacement)
        if replacement:
            for cid in replacement['superseded_ids']:existing_records[cid]['view']=replacement['view']
            history_name='historical-main-'+identifier+'-'+entry['existing_main_svg_sha256']+'.svg'
            history_asset=asset.with_name(history_name)
            if history_asset.exists() and history_asset.read_bytes()!=snapshots[asset]:
                raise ValueError('Historical main hash-addressed asset conflicts')
            old_url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
            history_url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+history_name
            centered=snapshots[article].decode().split('<!-- centered-start:'+identifier+' -->',1)[1].split('<!-- centered-end:'+identifier+' -->',1)[0]
            figures=[match.group() for match in re.finditer(r'<figure\b[^>]*>.*?</figure>',centered,re.S) if old_url in match.group()]
            if len(figures)!=1:raise ValueError('Ambiguous historical main figure')
            history_block=('<!-- reviewed-avid-main-history-start --><details class="earlier-retrofit-architecture"><summary>Superseded abstract main wiring · retained history</summary><p>This earlier diagram retains the abstract sensor and spindle interface circuits for source history. Its 44 replaced conductors remain in the detailed schedule; use the current complete circuits for the conditional retrofit proposal. Fitted hardware remains unqualified.</p>'+figures[0].replace(old_url,history_url)+'</details><!-- reviewed-avid-main-history-end -->')
            end='<!-- centered-end:'+identifier+' -->'
            if "reviewed-avid-main-history-start" in updated_article:raise ValueError('Avid replacement history already exists')
            updated_article=updated_article.replace(end,history_block+end,1)
            article_changes.append({'added_history_block':history_block,'history_asset':str(history_asset),'sha256':entry['existing_main_svg_sha256']})
            plans.append((history_asset,snapshots[asset]))
        for cid in main_ids(current[identifier]):existing_records[cid]['view']='MAIN'
        for key in ('conditional_complete_figures','conditional_source_figures'):
            for figure in evidence.get(key,[]):
                path=Path(figure['asset_path']);snapshots[path]=path.read_bytes()
                if hashlib.sha256(snapshots[path]).hexdigest()!=figure['asset_sha256']:
                    raise ValueError('Existing supplementary asset hash drift: '+str(path))
        parsed=BeautifulSoup(snapshots[article],'html.parser')
        section=parsed.find('section',id=identifier+'-centered-wiring')
        url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
        if section is None or len(section.find_all('img',src=url))!=1:
            raise ValueError('Main article image reference missing or ambiguous: '+identifier)
        for key in ('main_visible_connections','main_route_manifest','geometry'):
            evidence[key]=projection[key]
        # Current canonical supplementary coverage remains authoritative independently
        # of the frozen main SVG's unchanged historical nonmain metadata.
        evidence['detailed_only_connections']=sorted(expected_ids(current[identifier],None)-main_ids(current[identifier]))
        evidence['main_additional_connection_ids']=sorted(main_additional_ids(current[identifier]))
        evidence['svg_sha256']=entry['svg_sha256']
        evidence['main_integration']={'main_baseline_sha256':entry['main_baseline_sha256'],
            'render_data_path':entry['render_data_path'],'render_data_sha256':entry['render_data_sha256'],
            'frozen_guide_sha256':entry['guide_sha256'],'native_geometry_sha256':entry['native_geometry_sha256'],
            'original_main_connection_ids':sorted(original_ids),'connection_ids':sorted(main_ids(current[identifier])),
            'added_canonical_connection_ids':sorted(new_rows),'reviewed_main_replacement':replacement,
            'canonical_main_baseline_sha256':main_baseline(current[identifier]),
            'canonical_guide_sha256':canonical_sha256(current[identifier]),
            'artifact_acceptance':'supplied accepted manifest','public_acceptance':'pending',
            'preserved_existing_electrical_and_source_records':True,'selected_view_badges':'MAIN',
            'preserved_supplementary_and_history_blocks_except_stale_main_notice':True}
        preserved.append({'id':identifier,'snapshots':snapshots,'immutable_evidence':immutable,
            'article':article,'expected_article':updated_article.encode(),'article_changes':article_changes,
            'original_connections':original_connections,'new_connections':new_records,'selected_ids':main_ids(current[identifier]),'replacement':replacement})
        plans.extend(((asset,item['svg']),(article,updated_article.encode()),
            (evidence_path,(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n').encode())))
    destinations=[]
    for index,(path,content) in enumerate(plans):
        baseline=path.read_bytes() if path.exists() else None
        if baseline is not None:(stage/('original-'+str(index))).write_bytes(baseline)
        staged=stage/('output-'+str(index));staged.write_bytes(content)
        destinations.append({'path':str(path),'baseline_sha256':hashlib.sha256(baseline).hexdigest() if baseline is not None else None,
            'sha256':hashlib.sha256(content).hexdigest(),'staged_path':str(staged)})
    (stage/'staged-manifest.json').write_text(json.dumps(destinations,indent=2)+'\n')
    if hashlib.sha256(DATA.read_bytes()).hexdigest()!=data_digest:raise ValueError('Canonical data changed during main-only staging')
    for item in render_inputs.values():
        entry=item['entry']
        if hashlib.sha256(Path(entry['render_data_path']).read_bytes()).hexdigest()!=entry['render_data_sha256']:
            raise ValueError('Full frozen render input changed during main-only staging')
    for record in preserved:
        for path,content in record['snapshots'].items():
            if path.read_bytes()!=content:raise ValueError('Main/supplementary/article baseline changed before promotion: '+str(path))
    for destination in destinations:
        path=Path(destination['path'])
        actual=hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
        if actual!=destination['baseline_sha256']:
            raise ValueError('Main destination changed before promotion: '+str(path))
        if destination['baseline_sha256']==destination['sha256']:continue
        temporary=path.with_name(path.name+'.main-writing');temporary.write_bytes(Path(destination['staged_path']).read_bytes());temporary.replace(path)
        print(json.dumps({'type':'artifact','path':str(path),'sha256':destination['sha256']}),flush=True)
    from build_machine_pages import build as build_pages
    build_pages(set(selected_ids),update_index=True)
    for destination in destinations:
        if hashlib.sha256(Path(destination['path']).read_bytes()).hexdigest()!=destination['sha256']:
            raise ValueError('Main/history staged output changed during consumer rebuild: '+destination['path'])
    for record in preserved:
        for path,content in record['snapshots'].items():
            if path.name in {'centered-'+record['id']+'.svg','centered-connections-'+record['id']+'.json'}:continue
            if path==record['article']:
                if path.read_bytes()!=record['expected_article']:raise ValueError('Main article changed beyond staged badge correction')
                continue
            if path.read_bytes()!=content:raise ValueError('Retained supplementary/article bytes changed: '+str(path))
        evidence=json.loads((ROOT/('centered-connections-'+record['id']+'.json')).read_text())
        if any(evidence.get(key)!=value for key,value in record['immutable_evidence'].items()):
            raise ValueError('Existing nonprojection evidence changed: '+record['id'])
        expected_connections=json.loads(json.dumps(record['original_connections']))
        for connection in expected_connections:
            if connection['id'] in record['selected_ids']:connection['view']='MAIN'
            elif record['replacement'] and connection['id'] in record['replacement']['superseded_ids']:
                connection['view']=record['replacement']['view']
        expected_connections.extend(record['new_connections'])
        if evidence['connections']!=expected_connections:raise ValueError('Electrical/source connection evidence changed')
    receipt={'type':'main_only_integration_receipt','profiles':selected_ids,'destinations':destinations,
        'retained_electrical_source_supplementary_and_history_records':True,
        'original_main_cids_preserved_in_records':True,
        'original_main_selection_preserved':not any(record['replacement'] for record in preserved),
        'original_main_records_preserved':True,
        'reviewed_main_replacements':{record['id']:record['replacement'] for record in preserved if record['replacement']},
        'article_changes':{record['id']:record['article_changes'] for record in preserved},
        'added_canonical_connection_ids':{record['id']:[connection['id'] for connection in record['new_connections']] for record in preserved},
        'canonical_data_sha256':data_digest,'tests_run':False,'public_acceptance':'pending'}
    path=stage/'integration-receipt.json';path.write_text(json.dumps(receipt,indent=2)+'\n')
    print(json.dumps({'type':'summary','main_only_profiles':selected_ids,'receipt':str(path)}),flush=True)


def main():
    parser=argparse.ArgumentParser();parser.add_argument('--ids',nargs='*');parser.add_argument('--render-manifest');parser.add_argument('--supplemental-figure',action='append',help='Named profile/figure; integrate only nonprimary complete supplements');parser.add_argument('--main-only',action='append',help='Named profile; integrate accepted current main only');parser.add_argument('--main-render-baseline-data',help='Exact frozen full render input for main-only provenance');parser.add_argument('--primary-reference-figure',action='append',help='Named Schaublin complete primary reference only');parser.add_argument('--primary-render-baseline-data',help='Exact frozen full input for primary-reference provenance');parser.add_argument('--integration-stage',help='New staging directory for incremental originals and receipt');args=parser.parse_args()
    guides=json.loads(DATA.read_text())['guides'];selected=[g for g in guides if not args.ids or g['id'] in args.ids]
    if args.main_only:
        if args.supplemental_figure or args.primary_reference_figure:raise ValueError('Incremental main, primary and supplementary selections are mutually exclusive')
        if args.primary_render_baseline_data:raise ValueError('Primary frozen baseline requires the primary-reference route')
        if not args.render_manifest or not args.integration_stage:
            raise ValueError('Main-only integration requires --render-manifest and --integration-stage')
        if args.ids and set(args.ids)!=set(args.main_only):raise ValueError('--ids must match named main-only profiles')
        render_inputs=load_main_manifest(args.render_manifest,guides,args.main_only,args.main_render_baseline_data)
        build_main_only(guides,render_inputs,args.integration_stage)
        return
    if args.main_render_baseline_data:raise ValueError('--main-render-baseline-data requires --main-only')
    if args.primary_reference_figure:
        if args.supplemental_figure:raise ValueError('Primary and supplementary selections are mutually exclusive')
        if not args.render_manifest or not args.integration_stage or not args.primary_render_baseline_data:
            raise ValueError('Primary integration requires --render-manifest, --primary-render-baseline-data and --integration-stage')
        requested=[]
        for value in args.primary_reference_figure:
            parts=value.split('/')
            if len(parts)!=2 or not all(parts):raise ValueError('Primary selection must be profile/figure')
            requested.append(tuple(parts))
        selected_ids={key[0] for key in requested}
        if args.ids and set(args.ids)!=selected_ids:raise ValueError('--ids must match primary reference profiles')
        render_inputs=load_primary_manifest(args.render_manifest,guides,requested,args.primary_render_baseline_data)
        build_primary_reference(guides,render_inputs,args.integration_stage)
        return
    if args.primary_render_baseline_data:raise ValueError('--primary-render-baseline-data requires --primary-reference-figure')
    if args.supplemental_figure:
        if not args.render_manifest or not args.integration_stage:
            raise ValueError('Supplementary integration requires --render-manifest and --integration-stage')
        requested=[]
        for value in args.supplemental_figure:
            parts=value.split('/')
            if len(parts)!=2 or not all(parts):raise ValueError('Supplementary selection must be profile/figure')
            requested.append(tuple(parts))
        selected_ids=sorted({key[0] for key in requested})
        if args.ids and set(args.ids)!=set(selected_ids):raise ValueError('--ids must match supplementary profiles')
        render_inputs=load_render_manifest(args.render_manifest,guides,selected_ids,requested)
        build_supplemental(guides,render_inputs,requested,args.integration_stage)
        return
    if args.integration_stage:raise ValueError('--integration-stage requires --supplemental-figure, --primary-reference-figure or --main-only')
    render_inputs=(load_render_manifest(args.render_manifest,guides,[g['id'] for g in selected]) if args.render_manifest else None)
    for g in selected:build(g,None if render_inputs is None else render_inputs[g['id']])
    print(json.dumps({'type':'summary','integrated':len(selected),'total':len(guides)}))
if __name__=='__main__':main()
