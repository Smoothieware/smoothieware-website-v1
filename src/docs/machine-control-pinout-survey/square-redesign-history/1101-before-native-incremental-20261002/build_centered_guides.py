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
def sources_for(g,p,e):
    explicit=p.get('evidence_sources',[])
    text=' '.join([p['title'],p['note'],e['function']]+[n['title'] for n in p['nodes']]).lower()
    sources=[]
    if g['selected_controller']=='prime':
        sheet='mosfets.kicad_sch' if any(w in text for w in ('heater','hotend','fan','vfet','pump')) else 'inputs.kicad_sch' if any(w in text for w in ('limit','probe','temperature','sensor')) else 'smoothiev2-prime.kicad_pcb'
        sources.append({'title':'Prime P12 exact source · '+sheet,'url':PRIME+sheet,'claim':'Defines the named Prime connector contacts and board-side circuitry; does not establish the machine harness or replacement firmware configuration.'})
    else:
        sources.append({'title':'SmoothieBox Chapter 18 field-contact drawing','url':'/machine-control-pinout-survey/centered-sources/smoothiebox-chapter18-field-reference.svg','claim':'Defines proposed exterior STEP/DIR/ENABLE, ground and accessory contact names. These field contacts are not Core header numbers. The drawing does not certify an assembled case or its output ratings.'})
    if explicit:return sources+explicit
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
    return sources

def build(g):
    svg=render_centered_wiring(g)
    metadata=next((node for node in ElementTree.fromstring(svg) if node.get('id')=='centered-wiring-provenance'),None)
    projection=json.loads(metadata.text) if metadata is not None else {}
    visible=set(projection.get('main_visible_connections',[]))
    records=[];rows=[]
    for pi,p in enumerate(g['wire_panels']):
        endpoints={n['id']+'.'+c['id']:n['title']+' · '+c['label'] for n in p['nodes'] for c in n['contacts']}
        for ei,e in enumerate(p['edges']):
            rid=connection_id(pi,ei);sources=sources_for(g,p,e);qualification=e.get('check',p['note']);state=e['state'].upper()
            view='MAIN' if rid in visible else 'DETAILED CIRCUIT'
            rationale=f"{e['function']}: {endpoints[e['from']]} → {endpoints[e['to']]}. "+({'GUESS':'This is a new conversion wire; the sources establish endpoint functions, while the connection and compatibility require the checks below.','SOURCE':'This path is reported by the cited original source; it is retained context, not proof of a completed Smoothie retrofit.','OPEN':'The fitted interface or electrical contract is unresolved. The broken path is a boundary to identify, not a wire to install.'}[state])
            records.append({'id':rid,'panel_index':pi,'edge_index':ei,'from':endpoints[e['from']],'to':endpoints[e['to']],'state':state,'view':view,'rationale':rationale,'qualification':qualification,'sources':sources})
            links=''.join('<li><a href="'+esc(s['url'])+'" target="_blank" rel="noopener">'+esc(s['title'])+'</a>: '+esc(s['claim'])+'</li>' for s in sources)
            rows.append('<tr id="'+esc(g['id']+'-'+rid)+'"><td><strong>'+rid+'</strong><br>'+state+'<br>'+view+'</td><td>'+esc(endpoints[e['from']])+'</td><td>'+esc(endpoints[e['to']])+'</td><td>'+esc(rationale)+'<p>'+esc(qualification)+'</p><ul>'+links+'</ul></td></tr>')
    unused=[]
    for pi,panel in enumerate(g['wire_panels']):
        for node in panel['nodes']:
            for contact in node['contacts']:
                key=node['id']+'.'+contact['id']
                if any(key in (edge['from'],edge['to']) for edge in panel['edges']):continue
                refs=sources_for(g,panel,{'function':'Unused or unresolved terminal '+contact['label']})
                links='; '.join('<a href="'+esc(source['url'])+'">'+esc(source['title'])+'</a>' for source in refs)
                unused.append('<tr><td>'+esc(panel['title'])+'</td><td>'+esc(node['title']+' · '+contact['label'])+'</td><td>No conductor drawn. '+esc(panel['note'])+'<p>'+links+'</p></td></tr>')
    unused_html='<details><summary>Unused or unresolved terminals · explicit dispositions</summary><div class="table-wrap"><table><thead><tr><th>Circuit</th><th>Terminal</th><th>Disposition and sources</th></tr></thead><tbody>'+''.join(unused)+'</tbody></table></div></details>'
    asset=ROOT/'smoothiebox-machine-wiring'/('centered-'+g['id']+'.svg');asset.write_text(svg)
    evidence={'profile_id':g['id'],'controller':g['controller_title'],'classification':g['classification_note'],'connections':records,'main_visible_connections':projection.get('main_visible_connections',[]),'detailed_only_connections':projection.get('detailed_only_connections',[]),'main_route_manifest':projection.get('main_route_manifest',[]),'geometry':projection.get('geometry'),'svg_sha256':hashlib.sha256(asset.read_bytes()).hexdigest()}
    (ROOT/('centered-connections-'+g['id']+'.json')).write_text(json.dumps(evidence,ensure_ascii=False,indent=2)+'\n')
    url='/machine-control-pinout-survey/smoothiebox-machine-wiring/'+asset.name
    section='<section class="centered-wiring-guide" id="'+g['id']+'-centered-wiring"><h4>Main wiring diagram · '+esc(g['controller_title'])+'</h4><p><strong>Why this controller:</strong> '+esc(g['classification_note'])+'</p><figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="'+esc(g['title']+' · controller-centred main wiring')+'"><img loading="lazy" decoding="async" src="'+url+'" alt="'+esc(g['title']+' with '+g['controller_title']+' at the center, individual named wires and surrounding machine devices')+'"></button><figcaption>Square controller with perimeter contacts and surrounding peripherals. Main-view conductors carry C-numbers; subsidiary interface circuits remain in the detailed drawings and complete schedule below. Dotted = proposed connection; green = retained source path; broken = OPEN. <a href="'+url+'" target="_blank" rel="noopener">Open full-size main SVG</a>.</figcaption></figure><h5>Every connection · explanation and direct source evidence</h5><div class="table-wrap"><table><thead><tr><th>Wire</th><th>From terminal</th><th>To terminal</th><th>Explanation, checks and source links</th></tr></thead><tbody>'+''.join(rows)+'</tbody></table></div>'+unused_html+'<p>The earlier circuit details remain immediately below.</p></section>'
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
    parser=argparse.ArgumentParser();parser.add_argument('--ids',nargs='*');args=parser.parse_args()
    guides=json.loads(DATA.read_text())['guides'];selected=[g for g in guides if not args.ids or g['id'] in args.ids]
    for g in selected:build(g)
    print(json.dumps({'type':'summary','integrated':len(selected),'total':len(guides)}))
if __name__=='__main__':main()
