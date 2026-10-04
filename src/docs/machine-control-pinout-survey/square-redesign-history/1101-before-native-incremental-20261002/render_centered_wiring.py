"""Square controller-centred field wiring with complete detailed provenance.

One fixed central square exposes individual physical connector references.
Named assemblies carry field terminals and selected critical load circuits;
all remaining internal/peripheral edges stay explicit in the retained details.
"""
from __future__ import annotations

import html
import json
import re
import textwrap


def connection_id(panel_index: int, edge_index: int) -> str:
    """Stable, one-based route identifier shared with the HTML evidence schedule."""
    return f"C{panel_index + 1:02d}-{edge_index + 1:03d}"


def is_controller_node(node: dict) -> bool:
    """Recognise board contacts without absorbing supplies or original controllers."""
    title = str(node.get("title", ""))
    if re.search(r"supply matched|regulated supply|ground star|common ground|no\s*(?:prime|core|smoothie)|retained recycler heater control", title, re.I):
        return False
    if node.get("role") is not None:
        return node["role"] == "controller"
    return bool(re.match(r"^(?:Smoothie(?:board|Box)?\b|Core\b|Prime\b|V2\s+(?:Core|Prime)\b)", title, re.I))


def _wrap(value: str, width: int) -> list[str]:
    return [part for line in str(value).splitlines() for part in (textwrap.wrap(line, width, break_long_words=True, break_on_hyphens=False) or [""])] or [""]


def _text(value: str, x: float, y: float, width: int, css: str = "label", anchor: str = "start") -> str:
    spans = ''.join(f'<tspan x="{x}" dy="{0 if index == 0 else 21}">{html.escape(line)}</tspan>' for index, line in enumerate(_wrap(value, width)))
    background = ""
    if css == "route-id":
        label_width = max(62, len(value) * 8)
        label_left = x - label_width / 2 if anchor == "middle" else x - label_width if anchor == "end" else x
        background = f'<rect x="{label_left-2}" y="{y-14}" width="{label_width+4}" height="18" rx="2" fill="#ffffff" fill-opacity="0.94"/>'
    return background + f'<text x="{x}" y="{y}" class="{css}" text-anchor="{anchor}">{spans}</text>'


BOX_SIDES = {
    **{bank: 'north' for bank in ('POWER','FIVEIN','FIVEOUT','AUX')},
    **{bank: 'east' for bank in ('XMIN','XMAX','YMIN','YMAX','ZMIN','ZMAX','PROBE','TEMP')},
    **{bank: 'west' for bank in ('HEA','HEB','BED','FANA','FANB','SSR1','SSR2','PWM')},
    **{bank: 'south' for bank in ('DRVX','DRVY','DRVZ','DRVA')},
    **{bank: 'east' for bank in ('GA','GB','GC','GD','GE','GF','GG','GH','GI')},
}
PRIME_SIDES = {
    **{f'J{i}': 'south' for i in range(5,9)},
    **{f'J{i}': 'north' for i in (9,10,11,12,16,42)},
    **{f'J{i}': 'west' for i in (13,14,17,18,19,20,35)},
    **{f'J{i}': 'east' for i in tuple(range(21,32))+(36,)},
}
BANK_ORDER = list(BOX_SIDES) + [f'J{i}' for i in (42,9,10,12,16,11,13,14,17,18,19,20,35,21,22,23,24,25,26,27,28,29,30,31,36,5,6,7,8)]


def _short(value: str, maximum: int = 64) -> str:
    """Compact display prose; complete source strings remain in provenance."""
    value = re.sub(r'\s+', ' ', str(value)).strip()
    return value if len(value) <= maximum else value[:maximum-1] + '…'


def _terminal_identity(node: dict, contact: dict, panel_index: int) -> tuple[str,str,str]:
    """Use explicit terminal marks; contextual unknowns never become guessed pins."""
    label = contact['label']
    match = re.match(r'([A-Z][A-Z0-9]*)\.(\d+)\b', label)
    if match:
        return match[1], match[2], label
    pin = re.match(r'pin\s*(\d+)\b', label, re.I)
    bank = re.search(r'\b(J\d+)\b', node['title'])
    if pin and bank:
        return bank[1], pin[1], label
    # Some context-only functions deliberately have no physical contact mark.
    # Keep those as OPEN/context anchors, never assign a fabricated pin number.
    return 'UNRESOLVED', f'{panel_index}:{node["id"]}:{contact["id"]}', label


def _controller_label(info:dict,bank:str)->str:
    pin=info['pin'] if bank!='UNRESOLVED' else '?'
    function=info['label'].split(' · ',1)[-1]
    function=re.sub(r'^[A-Z][A-Z0-9]*\.\d+\s*','',function)
    upper=function.upper()
    if 'GND' in upper:
        function='STEP GND' if 'STEP' in upper else 'DIR GND' if 'DIR' in upper else 'EN GND' if 'ENABLE' in upper else 'GND'
    elif bank=='J35' and ('3V3' in upper or '3.3V' in upper):function='3V3 LIMIT'
    elif bank=='J11' and 'VFET' in upper:function='AUX VFET'
    elif 'COIL_' in upper:function=upper.split('COIL_',1)[1][:2]
    elif any(term in upper for term in ('B2','B1','A2','A1')) and bank in ('J5','J6','J7','J8'):
        function=next(term for term in ('B2','B1','A2','A1') if term in upper)
    elif 'SENSOR +' in upper:function='SENSOR+'
    elif 'ENABLE' in upper:function='ENABLE'
    elif upper.startswith('STEP'):function='STEP'
    elif upper.startswith('DIR'):function='DIR'
    elif '5V' in upper and ('INPUT' in upper or 'PORTIN' in upper):function='5V IN'
    elif upper.startswith('PWM'):function='PWM'
    elif upper.startswith('TTL'):function='TTL'
    elif 'SELECT' in upper:
        gpio=re.search(r'P[A-Z]\d+',upper)
        function=(gpio[0]+' ' if gpio else '')+'SELECT'
    elif 'INPUT' in upper and re.match(r'pin \d+',function):function='INPUT'
    function=re.sub(r'\bspare GPIO.*','GPIO',function,flags=re.I)
    function=re.sub(r'\bVMOT.*','VMOT',function,flags=re.I)
    function=re.sub(r'\binput SIGNAL.*','SIGNAL',function,flags=re.I)
    function=function.split(' · ')[0]
    if bank=='UNRESOLVED':
        lower=info['label'].lower()
        function='safety' if 'safety' in lower else 'endstop' if 'endstop' in lower else 'enable' if 'enable' in lower or 'mot_en' in lower else 'reference' if 'reference' in lower else 'I/O'
    elif 'PROBE' in function.upper():
        function='PROBE REF' if 'REF' in function.upper() or 'RETURN' in function.upper() else 'PROBE INPUT' if 'INPUT' in function.upper() else 'PROBE'
    elif 'GPIO' in function.upper():function=next((word for word in function.split() if 'GPIO' in word.upper()),'GPIO')
    elif 'SIGNAL' in function.upper():function='SIGNAL'
    elif 'input' in function.lower():function='INPUT'
    return pin+' '+function


def _group_key(bank: str, side: str) -> str:
    if side == 'south':
        return bank
    if side == 'north':
        return 'power'
    if side == 'west':
        if bank in ('HEA','HEB','BED','FANA','FANB','J13','J14','J17','J18','J19','J20'):
            return 'thermal'
        if bank in ('SSR1','SSR2'):
            return 'switching'
        return 'process'
    if bank in ('XMIN','XMAX','YMIN','YMAX','ZMIN','ZMAX','TEMP') or re.fullmatch(r'J2[1-9]|J30',bank):
        return 'inputs'
    if bank in ('PROBE','J31'):
        return 'probe'
    return 'extension'


def _group_title(key: str, side: str) -> str:
    if side == 'south':
        axis = {'J5':'X','J6':'Y','J7':'Z','J8':'A / extruder'}.get(key, key.removeprefix('DRV'))
        return f'{axis} motion · motor / command interface'
    return {'power':'Power entries / regulated supplies','thermal':'Heaters / fans / thermal loads','switching':'Isolated switching / auxiliary loads','process':'Spindle / laser / process interfaces','inputs':'Endstops / sensors / temperature','probe':'Probe / servo / measurement','extension':'Expansion / operator / unresolved interfaces'}[key]


def _svg_label(value: str, x: float, y: float, width: int = 60, css: str = 'label', anchor: str = 'start', step: int = 17) -> str:
    spans = ''.join(f'<tspan x="{x}" dy="{0 if index == 0 else step}">{html.escape(line)}</tspan>' for index,line in enumerate(_wrap(value,width)))
    return f'<text x="{x}" y="{y}" class="{css}" text-anchor="{anchor}">{spans}</text>'


def _device_name(title: str) -> str:
    """Readable device identity without its separate commissioning prose."""
    title = title.split(' · ')[0].strip()
    if 'command-interface logic' in title.lower() or 'common ground' in title.lower() or 'ground star' in title.lower():return 'Logic reference bus'
    if 'filter/gain' in title.lower() or 'converter passives' in title.lower():return 'Filter / gain stage'
    if 'manufacturer plan' in title.lower():return 'Original plan (OPEN)'
    title = re.sub(r'\bMachine\s+','',title,flags=re.I).replace('end switch','switch')
    chip = re.search(r'\b(U\d*[A-Z_]*|U_[XYZA])\b',title)
    model = re.search(r'SN74\w+|AM26\w+|OPA197|AQY212GS|ULN2003AN|DQ860\w*|MSD556|CRP5310-01E|MAX31865PMB1|MD10C|ESCON\s*70/10',title,re.I)
    if chip and model:return chip[0]+' '+model[0]
    if model:
        instance=re.search(r'#\s*(\d+)',title)
        return model[0]+('#'+instance[1] if instance else '')
    title=re.sub(r'\b(new|measured|verified|actual|installed|candidate|retained)\b','',title,flags=re.I)
    return re.sub(r'\s+',' ',title).strip()


def _endpoint_label(label: str) -> str:
    parts=label.split(' · ')
    value=' '.join(parts[:2]) if (re.match(r'^(?:pin\s*)?\d+\b',parts[0],re.I) or 'winding' in parts[0].lower() or (len(parts)>1 and re.fullmatch(r'(?:signal|GND|ground|return|[AB][12]|STEP|DIR|ENABLE)',parts[1],re.I))) else parts[0]
    value=value.replace('channel ','').replace(' logic input','')
    value=value.replace('(un-numbered)','(unmarked)').replace('New measured winding lead','Winding lead')
    if 'Verified separate SmoothieBox' in value:return 'Signal GND branch'
    if 'Verified SmoothieBox command-reference' in value:return 'Command GND return'
    substitutions={'Interface logic GND / common reference':'GND common','Interface logic GND/common reference':'GND common','Controller-compatible isolated logic output':'Logic output','Controller-side isolated reference':'GND reference','Controller return reference':'GND reference','Isolated probe output':'Probe output','X reference switch contact pair (terminal IDs not given)':'X pair (IDs unknown)','Y reference switch contact pair (ambiguous P12/P13 labels)':'Y P12/P13 ambiguous','Z reference switch contact pair (ambiguous P12/P13 labels)':'Z P12/P13 ambiguous','six end-switch symbols':'Six switch symbols','NOT-Aus switch contact pair':'NOT-Aus pair'}
    for old,new in substitutions.items():value=value.replace(old,new)
    value=re.sub(r'\b([X-Z]) (?:min|max|reference) (?:switch )?contact lead\s*','lead ',value,flags=re.I)
    return value.split(' verify receiver')[0]


def _endpoint_device(name: str) -> str:
    if re.match(r'^U\w+ ',name):return name.split(' ')[0]
    if name.startswith('SN74AHCT125#'):return 'AHCT#'+name.split('#')[1]
    if 'Logic reference bus' in name:return 'GND bus'
    if 'logic return star' in name.lower():return 'GND star'
    if 'regulated breakout' in name.lower():return 'Supply'
    substitutions={'Original plan (OPEN)':'Plan OPEN','rated isolated 24V sensor interface':'24V sensor','matched spindle interface assembly':'Spindle interface','Two independently rated probe input channels':'Probe interface','Isolated optional plate output':'Plate output'}
    for old,new in substitutions.items():name=name.replace(old,new)
    return name.split(' matched to ')[0]


def _motion_context(guide:dict, bank:str) -> tuple[str,list[dict]]:
    axis={'J5':'X','J6':'Y','J7':'Z','J8':'A / E'}.get(bank,bank.removeprefix('DRV'))
    all_titles=' '.join(node['title'] for panel in guide['wire_panels'] for node in panel['nodes'])
    if guide.get('selected_controller')=='prime':return axis+' motor · Prime integral drive',[]
    model='DQ860' if 'DQ860' in all_titles else 'MSD556' if 'MSD556' in all_titles else 'Delta B3A-L' if 'Delta B3A' in all_titles else 'Avid / ClearPath' if 'ClearPath' in all_titles else '8760 DB25 drive box' if '8760' in all_titles else 'JMC analog drives'
    interface='LVC07' if model in ('DQ860','MSD556') else 'AM26LV31 + PhotoMOS' if model=='Delta B3A-L' else 'AHCT125' if model in ('Avid / ClearPath','8760 DB25 drive box') else 'compatibility OPEN'
    critical=[]
    for pi,panel in enumerate(guide['wire_panels']):
        title=panel['title']
        axis_match=bool(re.search(r'\b'+re.escape(axis)+r'(?:1|2)?\s+(?:motor|driver|axis|ClearPath)',title))
        critical_panel=axis_match and any(word in title.lower() for word in ('motor winding','supply and motor','motor power','clearpath motor cable','motor/encoder','power, motor','power and motor'))
        if not critical_panel:continue
        endpoints={node['id']+'.'+contact['id']:(node,contact) for node in panel['nodes'] for contact in node['contacts']}
        for ei,edge in enumerate(panel['edges']):
            left,right=endpoints[edge['from']],endpoints[edge['to']]
            if is_controller_node(left[0]) or is_controller_node(right[0]):continue
            critical.append({'id':connection_id(pi,ei),'edge':edge,'from_node':left[0],'from_contact':left[1],'to_node':right[0],'to_contact':right[1]})
    return axis+': '+interface+' → '+model+' → motor',critical


def _external_load_edges(guide:dict,key:str,side:str)->list[dict]:
    selected=[]
    for pi,panel in enumerate(guide['wire_panels']):
        title=panel['title'].lower()
        use=(side=='south' and 'model-specific power and motor boundary' in title and re.search(r'\b'+re.escape(key.removeprefix('DRV').lower())+r' servo',title))
        use=use or (side=='west' and key=='process' and ('775 spindle controller' in title or 'dedicated 775 spindle power' in title))
        use=use or (side=='west' and key=='thermal' and ('air-assist pump' in title or 'complete external power and load' in title or 'bed-heater output' in title))
        use=use or (side=='west' and key=='switching' and ('flood coolant' in title or 'mist coolant' in title))
        if not use:continue
        endpoints={n['id']+'.'+c['id']:(n,c) for n in panel['nodes'] for c in n['contacts']}
        for ei,edge in enumerate(panel['edges']):
            left,right=endpoints[edge['from']],endpoints[edge['to']]
            if is_controller_node(left[0]) or is_controller_node(right[0]):continue
            selected.append({'id':connection_id(pi,ei),'edge':edge,'from_node':left[0],'from_contact':left[1],'to_node':right[0],'to_contact':right[1]})
    return selected


def _load_device(node:dict)->str:
    title=node['title'].lower()
    if 'cabinet ac' in title:return 'AC'
    if 'servo drive' in title:return 'Drive'
    if 'servo motor' in title:return 'Motor'
    if 'safety' in title:return 'Safety'
    if 'relay/contactor' in title:return 'Relay'
    if 'coolant' in title:return 'Flood' if 'flood' in title else 'Mist'
    if 'supply' in title:return 'Supply'
    if 'fuse' in title:return 'Fuse'
    if 'cutoff' in title:return 'Cutoff'
    if 'heater' in title:return 'Heater'
    if 'pump' in title:return 'Pump stage' if 'stage' in title or 'interface' in title else 'Pump'
    if 'motor' in title:return 'Motor'
    return _endpoint_device(_device_name(node['title']))


def _load_label(contact:dict)->str:
    value=_endpoint_label(contact['label'])
    substitutions={'L1 / first line conductor':'L1','L2 / second line conductor':'L2','Protective earth':'PE','Motor U phase lead':'U lead','Motor V phase lead':'V lead','Motor W phase lead':'W lead','Encoder connector and every contact':'Encoder OPEN','E-stop relay/contactors':'E-stop OPEN','Z brake supply/relay output':'Brake supply OPEN','Power-stage supply':'DC','Actuator power/control feed':'Feed','Actuator return':'Return','Verified supply feed':'Feed','Verified supply return':'Return','CN10 STO channel':'CN10 STO'}
    for old,new in substitutions.items():value=value.replace(old,new)
    return value


def _assembly_title(guide:dict,key:str,side:str,routes:list[dict]) -> str:
    """Name the actual major devices instead of an anonymous inventory group."""
    titles=' '.join(node['title'] for panel in guide['wire_panels'] for node in panel['nodes'])
    if key=='process':
        if any('MAX31865' in r['receiver_node']['title'] for r in routes):return 'MAX31865 PT100 interface · host supply'
        if 'WJ200' in titles:return 'OPA197 converter → WJ200 → spindle'
        if 'VS1ST' in titles:return 'OPA197 converter → VS1ST → spindle'
        if 'MD10C' in titles:return 'MD10C → 775 spindle / laser interface OPEN'
        if 'ESCON' in titles:return 'ESCON 70/10 → recycler motor'
        if 'Quiet Cut' in titles:return 'Quiet Cut spindle · PWM interface'
        if guide['id']=='laserplot-02':return 'K40 laser PSU control / retained interlocks'
        if guide['id']=='wiki-205':return 'SF-A9 laser controller · interface OPEN'
    if key=='inputs':return 'Named X / Y / Z switches and sensor inputs'
    if key=='probe':return 'Probe / measurement device terminals'
    if key=='extension' and 'MAX31865' in titles:return 'MAX31865 PT100 interface / operator devices'
    if key=='thermal':
        if any('pump' in route['receiver_node']['title'].lower() for route in routes):return 'DC air pump · branch fuse / pump terminals'
        return 'Named heater / bed / fan terminals'
    return _group_title(key,side)



# Explicit owner-installed routes reconciled against the frozen 1016-edge source.
PROMOTED_FIELD_IDS = {'wiki-205': ('C06-003', 'C09-001', 'C09-002', 'C09-003'), 'laserplot-02': ('C07-003', 'C08-001', 'C08-002', 'C08-005', 'C08-006'), 'wiki-132': ('C06-001', 'C06-002', 'C06-003', 'C06-004', 'C06-005', 'C06-006', 'C06-007', 'C06-008', 'C06-009', 'C06-010', 'C06-011', 'C07-001', 'C07-002', 'C07-003', 'C08-003'), 'wiki-134': ('C02-003', 'C02-006', 'C02-009', 'C03-003', 'C03-006', 'C03-009', 'C04-003', 'C04-006', 'C04-009', 'C05-003', 'C05-006', 'C05-009', 'C10-009', 'C17-001', 'C17-002', 'C17-003', 'C02-002', 'C02-005', 'C02-008', 'C03-002', 'C03-005', 'C03-008', 'C04-002', 'C04-005', 'C04-008', 'C05-002', 'C05-005', 'C05-008'), 'wiki-135': ('C02-003', 'C02-006', 'C02-009', 'C04-003', 'C04-006', 'C04-009', 'C06-003', 'C06-006', 'C06-009', 'C08-009', 'C12-001', 'C12-002', 'C02-002', 'C02-005', 'C02-008', 'C04-002', 'C04-005', 'C04-008', 'C06-002', 'C06-005', 'C06-008'), 'mill-g2': ('C12-003', 'C14-003', 'C14-004', 'C14-005', 'C14-006', 'C15-002', 'C16-001', 'C16-002'), 'mill-avid-ex-3': ('C02-003', 'C02-006', 'C02-009', 'C02-012', 'C02-013', 'C02-018', 'C03-003', 'C03-006', 'C03-009', 'C03-012', 'C03-013', 'C03-018', 'C05-002', 'C06-007', 'C06-008', 'C07-007', 'C07-008', 'C08-007', 'C08-008', 'C09-001', 'C09-002', 'C09-003', 'C09-004', 'C09-005', 'C09-006', 'C09-007', 'C09-008', 'C10-007', 'C10-008', 'C11-001', 'C11-002', 'C11-003', 'C11-004', 'C12-001', 'C12-002', 'C12-003', 'C12-004', 'C13-001', 'C13-002', 'C13-003', 'C13-004', 'C14-001', 'C14-002', 'C14-003', 'C14-004', 'C15-001', 'C15-002', 'C15-003', 'C15-004', 'C16-001', 'C16-002', 'C16-003', 'C16-004', 'C17-001', 'C17-002', 'C17-005', 'C17-006', 'C18-003', 'C18-004', 'C18-007', 'C18-008', 'C18-009', 'C18-010', 'C19-003', 'C19-004'), 'wiki-206': ('C12-003', 'C13-003', 'C13-004'), 'wiki-222': ('C08-006', 'C08-007', 'C13-003', 'C08-011', 'C08-012'), 'forum-linuxcnc-optimill-mh50v-unlogic': ('C02-007', 'C02-008', 'C02-009', 'C02-010', 'C03-007', 'C03-008', 'C03-009', 'C03-010', 'C04-007', 'C04-008', 'C04-009', 'C04-010', 'C08-001', 'C08-002', 'C08-003', 'C08-004', 'C08-005', 'C08-006', 'C09-001', 'C09-002', 'C09-003', 'C09-004', 'C09-005', 'C09-006', 'C10-001', 'C10-002', 'C10-003', 'C10-004', 'C10-005', 'C10-006', 'C11-007', 'C11-008', 'C14-001', 'C14-002', 'C14-003', 'C16-001', 'C16-002', 'C16-003', 'C18-001', 'C18-002', 'C18-003'), 'forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit': ('C01-002', 'C01-003', 'C01-004', 'C02-001', 'C02-002', 'C02-003', 'C04-002', 'C04-004', 'C06-003', 'C06-004', 'C06-007', 'C06-008')}
DETAIL_HREFS = {'wiki-205': '/machine-control-pinout-survey/machines/diode-laser/wiki-205.html#wiki-205-retrofit-guide', 'laserplot-02': '/machine-control-pinout-survey/machines/co2-laser/laserplot-02.html#laserplot-02-retrofit-guide', 'base-11': '/machine-control-pinout-survey/machines/cnc-lathe/base-11.html#base-11-retrofit-guide', 'wiki-132': '/machine-control-pinout-survey/machines/3d-printer/wiki-132.html#wiki-132-retrofit-guide', 'wiki-134': '/machine-control-pinout-survey/machines/cnc-mill/wiki-134.html#wiki-134-retrofit-guide', 'wiki-135': '/machine-control-pinout-survey/machines/other-shop-equipment/wiki-135.html#wiki-135-retrofit-guide', 'mill-g2': '/machine-control-pinout-survey/machines/cnc-router/mill-g2.html#mill-g2-retrofit-guide', 'mill-avid-ex-3': '/machine-control-pinout-survey/machines/cnc-router/mill-avid-ex-3.html#mill-avid-ex-3-retrofit-guide', 'wiki-206': '/machine-control-pinout-survey/machines/cnc-router/wiki-206.html#wiki-206-retrofit-guide', 'wiki-222': '/machine-control-pinout-survey/machines/3d-printer/wiki-222.html#wiki-222-retrofit-guide', 'forum-linuxcnc-optimill-mh50v-unlogic': '/machine-control-pinout-survey/machines/cnc-mill/forum-linuxcnc-optimill-mh50v-unlogic.html#forum-linuxcnc-optimill-mh50v-unlogic-retrofit-guide', 'forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit': '/machine-control-pinout-survey/machines/cnc-lathe/forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit.html#forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit-retrofit-guide'}

def _promotion_group(profile: str, pi: int, fallback: tuple) -> tuple:
    """Place each external circuit next to its physical interface or supply."""
    if profile == 'mill-avid-ex-3':
        if pi in (2,3,5,19):return ('west','switching')
        if 6<=pi<=10:return ('south',{'6':'DRVX','7':'DRVY','8':'DRVA','9':'DRVY','10':'DRVZ'}[str(pi)])
        if 11<=pi<=16:return ('east','inputs')
        if pi==17:return ('east','probe')
        if pi==18:return ('west','process')
    if profile == 'forum-linuxcnc-optimill-mh50v-unlogic':
        if pi in (2,3,4):return ('corner','differential')
        if pi in (8,14):return ('north','power')
        if pi in (9,16):return ('east','inputs')
        if pi==10:return ('east','probe')
        if pi==18:return ('corner','differential')
        if pi==11:return ('south','DRVA')
    if profile == 'forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit':return ('west','process')
    if profile=='wiki-132' and pi in (6,7):return ('west','process')
    if profile=='wiki-222' and pi==8:return ('east','extension')
    if profile=='wiki-206' and pi==13:return ('east','probe')
    if profile=='mill-g2':
        if pi==14:return ('west','process')
        if pi==15:return ('west','thermal')
        if pi==16:return ('north','power')
    if profile=='wiki-134' and pi in (10,17):return ('west','process')
    if profile=='wiki-135' and pi in (8,12):return ('west','process')
    if profile=='wiki-205' and pi==9:return ('west','thermal')
    if profile=='laserplot-02' and pi==8:return ('west','process')
    return fallback


def _paired_endpoint(node:dict,contact:dict,panel_title:str)->str:
    """Retain terminal number/function and a real device instance, dropping qualifiers."""
    title=node['title'];mark=contact['label'].replace(' · ',' ')
    axis_match=re.search(r'\b(X[-+−]?|Y1|Y2|Y[-+−]?|Z[-+−]?|A) (?:axis|servo|ClearPath|drive|motor|Delta|home|limit)',panel_title+' '+title)
    axis=axis_match.group(1) if axis_match else ''
    model=title.split(' · ')[0]
    if 'SN74AHCT125' in title:model='AHCT#'+re.search(r'#(\d+)',title).group(1)
    elif 'LVC07' in title:model=(re.search(r'U\w+',title).group(0) if re.search(r'U\w+',title) else 'LVC07')
    elif 'AM26' in title:model=(re.search(r'U\d+',title).group(0) if re.search(r'U\d+',title) else 'AM26')+' '+axis
    elif 'AQY212' in title:model=(re.search(r'U6(?:_[XYZ])?',title).group(0) if re.search(r'U6(?:_[XYZ])?',title) else 'AQY212')
    elif 'OPA197' in title:model='OPA197 U3A'
    elif 'DQ860' in title:model=axis+' DQ860'
    elif 'MSD556' in title:model=axis+' MSD556'
    elif 'Acorn inputs' in title or 'Avid command enable' in title:model='Avid'
    elif 'CRP5310' in title:model='Avid '+re.search(r'J[1-5]\b',title).group(0)
    elif 'ClearPath SDSK' in title:model=axis+' ClearPath'
    elif '24V sensor interface' in title:model=axis+' IF'
    elif 'J7 distribution' in title:model='Avid'
    elif 'M12' in title or ('sensor' in node['id'] and 'Avid' in panel_title):model=axis+' M12'
    elif 'probe input' in title:model='Probe IF'
    elif 'tool-setting' in title:model='Avid'
    elif '14-pin spindle' in title:model='Avid spindle'
    elif 'spindle interface' in title:model='Spindle IF'
    elif 'logic common ground star' in title:model='Logic GND star'
    elif 'logic distribution' in title:model='Logic rail'
    elif 'servo' in title.lower() and ('DB44' in title or 'CN1' in title):model=axis+' DB44' if 'DB44 pin' in mark else axis+' CN1'
    elif 'DI reference supply' in title:model=axis+' DI supply'
    elif '24 V DI distribution' in title:model='DI supply'
    elif 'alarm/reset' in title:model=axis+' isolated IF'
    elif 'MAX31865' in title:model='MAX31865'
    elif 'Pmod J2' in title:model='MAX31865'
    elif 'PT100' in title:model='PT100'
    elif 'motor supply' in title:model='Motor supply'
    elif 'branch fuse' in title:model='Branch fuse'
    elif 'ESCON' in title:model='ESCON 70/10'
    elif 'RS Pro BLDC' in title:model='RS Pro motor'
    elif '24 V supply' in title:model='24 V supply'
    elif 'recycler heater control' in title:model='Retained heat control'
    elif 'rear terminals unknown' in title:model='Heater controller'
    elif 'temperature sensor' in title:model='Temperature sensor'
    elif '150 W sleeve' in title:model='Sleeve heater'
    elif 'relay driver' in title:model='Relay IF'
    elif 'relay and hardwired' in title:model='Avid'
    elif 'protection / firing' in title:model='Laser PSU'
    elif 'Firing level' in title:model='Firing IF'
    elif 'independent water' in title:model='Water/door/stop'
    elif 'laser head' in title:model='SF-A9 head'
    elif 'laser-head fused supply' in title:model='Head supply'
    elif 'flame/tilt' in title:model='Key/stop/flame/tilt'
    elif 'laser level' in title:model='Laser IF'
    elif 'fitted laser driver' in title:model='Laser driver'
    elif 'Laser-rated' in title:model='Laser supply'
    elif 'hardware stop' in title or 'hardware spindle/motion' in title:model='Stop chain'
    elif 'E-stop' in title:model='E-stop'
    elif 'Mesa' in title:model=title.split(' (')[0]
    elif 'VFD' in title:model='VFD' if 'WJ200' not in title else 'WJ200'
    elif 'Baldor' in title:model='Baldor VS1ST'
    elif 'encoder' in title.lower():model='Encoder' if 'Spindle' in title else 'Mesa encoder IF'
    elif 'Festo' in title:model='Festo CPV'
    elif 'coil interface' in title:model='Coil IF'
    elif 'LinuxCNC' in title:model='LinuxCNC'
    mark=re.split(r' default | configurable | verify | exact | when | separate contact | see dedicated | owner calls | configure ',mark,flags=re.I)[0]
    mark=re.sub(r' ch[1-4][YZ] ', ' ',mark)
    mark=mark.replace('+24V sensor supply','+24V').replace('sensor supply','supply').replace('sensor GND','GND').replace('Field signal input','signal').replace('Field reference','REF').replace('jumper header contact','jumper').replace('sensor reference','REF').replace('sensor input','input')
    mark=mark.replace('independent isolated servo-on stage','isolated servo-on').replace('Isolated alarm receiver input','alarm input').replace('Isolated reset interface output','reset output').replace('+24 V source to COM+','+24 V COM+').replace('0 V NPN sink return','0 V return').replace('24 V ±10% DI common','24 V DI common')
    mark=mark.replace(' optional touch plate','').replace(' Tool Height Setter','').replace('Avid J7.1 COM candidate','J7.1 COM branch')
    if model=='Avid' and mark.startswith('J7.'):model=''
    if 'M12' in model:model=axis
    if model.endswith(' CN1') and mark.startswith(axis+' drive CN1 '):mark=mark.removeprefix(axis+' drive CN1 ')
    model=model.replace('Required ' ,'').replace('Verified ','').replace('Identified ','')
    mark=mark.replace('Identify ','? ').replace('Required ','? ').replace('Verify ','? ').replace('Controller-compatible ','').replace('Independent ','')
    mark=re.sub(r'\s*(?:\([^)]*\)|exact connector needed|part must be selected|model-specific|after measurement|voltage/current TBD|terminal IDs not given|rating unknown|fitted status/rating unknown)', '',mark)
    mark=mark.replace('New measured winding lead','Winding lead').replace(' + reference',' + REF').replace('Reference ','REF ')
    return (model.strip()+' '+mark.strip()).strip()


def _paired_cells(edges:list[dict], x:float,y:float,w:float,columns:int)->tuple[list[str],list[dict],float]:
    """Draw terminal pairs with actual wrapped-height rows and individual conductors."""
    drawing=[];manifest=[];cursor=y;cw=w/columns
    for offset in range(0,len(edges),columns):
        row=edges[offset:offset+columns];labels=[]
        for item in row:
            left=_paired_endpoint(item['from_node'],item['from_contact'],item['panel_title'])
            function=re.match(r'^([XYZＡA](?:STEP|DIR)) buffered',item['edge'].get('function',''))
            if function:left=re.sub(r'\bpin\s*','',left)+' '+function.group(1)
            right=_paired_endpoint(item['to_node'],item['to_contact'],item['panel_title'])
            width=max(12,int((cw-20)/12))
            a=_wrap(left,width);b=_wrap(right,width)
            labels.append((item,left,right,a,b,width))
        rowheight=max(len(_wrap(left+' → '+right,width))*23+31 for _,left,right,a,b,width in labels)
        for col,(item,left,right,a,b,width) in enumerate(labels):
            cx=x+col*cw+8;combined=_wrap(left+' → '+right,width);wy=cursor+len(combined)*23+3
            drawing.append(_svg_label('\n'.join(combined),cx,cursor,width,'port-label',step=23))
            end=cx+cw-30;state=item['edge']['state']
            path=f'M{cx},{wy} h22 M{end},{wy} h-22' if state=='open' else f'M{cx},{wy} H{end}'
            drawing.append(f'<g id="main-{item["id"]}"><path d="{path}" class="wire {state}"/></g>')
            drawing.append(_svg_label(item['id'],(cx+end)/2,wy+15,20,'wire-key','middle'))
            manifest.append({'connection_id':item['id'],'kind':'external-terminal-pair','from_node':item['from_node']['title'],'from_contact':item['from_contact']['label'],'to_node':item['to_node']['title'],'to_contact':item['to_contact']['label'],'visible_from':left,'visible_to':right,'font_size':22,'bounds':[cx,cursor-22,cw-20,rowheight],'from_anchor':[cx,wy],'to_anchor':[end,wy]})
        cursor+=rowheight+7
    return drawing,manifest,cursor


def render_centered_wiring(guide: dict) -> str:
    """Square main field-wiring view, with complete detailed-edge provenance.

    Controller-incident edges are visible individually. The complete input graph
    remains in metadata; non-field edges belong to the preserved detailed circuit
    drawings, explicitly referenced by named peripheral assembly cards.
    """
    panels = guide.get('wire_panels',[])
    records, contact_records, field_routes = [], [], []
    terminals: dict[tuple,str] = {}
    terminal_data: dict[tuple,dict] = {}
    sides = BOX_SIDES if guide.get('selected_controller') == 'smoothiebox' else PRIME_SIDES
    bank_contacts: dict[str,list[tuple]] = {}
    for pi,panel in enumerate(panels):
        nodes = {node['id']:node for node in panel['nodes']}
        contacts = {node['id']+'.'+contact['id']:(node,contact) for node in panel['nodes'] for contact in node['contacts']}
        if len(contacts) != sum(len(node['contacts']) for node in panel['nodes']):
            raise ValueError(f'Duplicate contacts: {guide["id"]} circuit {pi}')
        for key,(node,contact) in contacts.items():
            central = is_controller_node(node)
            record={'panel_index':pi,'node':node['id'],'node_title':node['title'],'controller':central,'contact':contact}
            if central:
                bank,pin,label = _terminal_identity(node,contact,pi)
                identity=(bank,pin)
                side=sides.get(bank,'east')
                record.update({'bank':bank,'pin':pin,'side':side,'identity':list(identity)})
                terminal_data.setdefault(identity,{'bank':bank,'pin':pin,'label':label,'side':side})
                if identity not in bank_contacts.setdefault(bank,[]):bank_contacts[bank].append(identity)
            contact_records.append(record)
        for ei,edge in enumerate(panel['edges']):
            if edge['from'] not in contacts or edge['to'] not in contacts:
                raise ValueError(f'Unresolved graph endpoint: {guide["id"]} {edge}')
            if edge['state'] not in ('guess','source','open'):
                raise ValueError(f'Unknown state {edge["state"]}')
            left=contacts[edge['from']];right=contacts[edge['to']]
            a=is_controller_node(left[0]);b=is_controller_node(right[0])
            record={'connection_id':connection_id(pi,ei),'panel_index':pi,'edge_index':ei,'panel_title':panel['title'],**edge,'main_visible':a != b,'detail_reference':f'{guide["id"]}-retrofit-guide'}
            records.append(record)
            if a != b:
                board,receiver=(left,right) if a else (right,left)
                bank,pin,label=_terminal_identity(board[0],board[1],pi)
                side=sides.get(bank,'east')
                field_routes.append({'record':record,'identity':(bank,pin),'bank':bank,'side':side,'group':_group_key(bank,side),'receiver_node':receiver[0],'receiver_contact':receiver[1],'controller_label':label,'panel':panel})
    # Group physical connectors in source order, then distribute their individual
    # contact anchors over each side of the fixed 1000 mm illustration square.
    positions: dict[tuple,tuple[float,float]]={}
    shells=[]
    side_banks={side:[b for b,cs in bank_contacts.items() if terminal_data[cs[0]]['side']==side] for side in ('north','east','south','west')}
    for side,banks in side_banks.items():
        banks.sort(key=lambda bank:(BANK_ORDER.index(bank) if bank in BANK_ORDER else len(BANK_ORDER),bank))
        contact_heights={identity:max(28,len(_wrap(_controller_label(terminal_data[identity],bank),13))*21+9) for bank in banks for identity in bank_contacts[bank]}
        weights={bank:sum(contact_heights[identity] for identity in bank_contacts[bank])+10 for bank in banks}
        total=sum(weights.values())
        gap=4
        usable=720-gap*max(0,len(banks)-1)
        cursor=1140
        for bank in banks:
            identities=bank_contacts[bank]
            identities.sort(key=lambda identity:int(identity[1]) if str(identity[1]).isdigit() else 10000)
            extent=usable*weights[bank]/max(total,1)
            if side in ('north','south'):
                shell_y=1002 if side=='north' else 1875
                shells.append(f'<rect x="{cursor}" y="{shell_y}" width="{extent}" height="123" rx="7" class="shell"/>')
                shells.append(_svg_label(bank,cursor+extent/2,1147 if side=='north' else 1850,25,'bank-title','middle'))
            else:
                shell_x=1002 if side=='west' else 1850
                shells.append(f'<rect x="{shell_x}" y="{cursor}" width="148" height="{extent}" rx="7" class="shell"/>')
                bank_x=1172 if side=='west' else 1735 if bank=='UNRESOLVED' else 1828
                shells.append(_svg_label(bank,bank_x,cursor+extent/2-(20 if bank=='UNRESOLVED' else 0),25,'bank-title','start' if side=='west' else 'end'))
            for ci,identity in enumerate(identities):
                before=sum(contact_heights[item] for item in identities[:ci])
                along=cursor+extent*(5+before+contact_heights[identity]/2)/weights[bank]
                x,y=(along,1000 if side=='north' else 2000) if side in ('north','south') else (1000 if side=='west' else 2000,along)
                positions[identity]=(x,y)
                info=terminal_data[identity]
                pin=info['pin'] if bank!='UNRESOLVED' else '?'
                label=_controller_label(info,bank)
                if side in ('north','south'):
                    text_y=1008 if side=='north' else 1965
                    angle=90 if side=='north' else -90
                    shells.append(f'<text x="{x}" y="{text_y}" transform="rotate({angle} {x} {text_y})" class="terminal-label">{html.escape(label)}</text>')
                else:
                    lx=1018 if side=='west' else 1982
                    shells.append(_svg_label(label,lx,y+5,13,'terminal-label','start' if side=='west' else 'end'))
                shells.append(f'<circle cx="{x}" cy="{y}" r="5" class="terminal"/>')
            cursor+=extent+gap
    groups: dict[tuple,list[dict]]={}
    for route in field_routes:groups.setdefault((route['side'],route['group']),[]).append(route)
    for routes in groups.values():
        routes.sort(key=lambda route:(positions[route['identity']][0 if route['side'] in ('north','south') else 1],route['record']['connection_id']))
    card_data=[]
    for side in ('north','west','east','south'):
        keys=[key for key in groups if key[0]==side]
        order={'thermal':0,'switching':1,'process':2,'inputs':0,'probe':1,'extension':2}
        keys.sort(key=lambda key:(order.get(key[1],BANK_ORDER.index(key[1]) if key[1] in BANK_ORDER else 0),key[1]))
        for gi,key in enumerate(keys):
            if side=='north':x,y,w,h=1000,210,1000,610
            elif side=='south':x,y,w,h=65+gi*725,2200,695,780
            else:
                x=45 if side=='west' else 2235
                y=205+gi*735 if len(keys)>1 else 1050
                w,h=720,520 if gi==2 else 650 if gi==1 else 640
                if len(keys)==1 and side=='west' and key[1]=='switching':y,h=850,1250
            card_data.append({'key':key,'x':x,'y':y,'w':w,'h':h,'routes':groups[key]})
    promotion_groups={}
    for pi,panel in enumerate(panels):
        endpoints={n['id']+'.'+c['id']:(n,c) for n in panel['nodes'] for c in n['contacts']}
        panel_routes=[route for route in field_routes if route['record']['panel_index']==pi]
        fallback=(panel_routes[0]['side'],panel_routes[0]['group']) if panel_routes else ('north','power')
        for ei,edge in enumerate(panel['edges']):
            identifier=connection_id(pi,ei)
            if identifier not in PROMOTED_FIELD_IDS.get(guide['id'],()):continue
            left,right=endpoints[edge['from']],endpoints[edge['to']]
            group=_promotion_group(guide['id'],pi+1,fallback)
            promotion_groups.setdefault(group,[]).append({'id':identifier,'panel_title':panel['title'],'edge':edge,'from_node':left[0],'from_contact':left[1],'to_node':right[0],'to_contact':right[1]})
    # Explicit geometry reserves blank card space for the terminal continuations.
    for card in card_data:
        side,key=card['key']
        if guide['id']=='mill-avid-ex-3':
            if (side,key)==('west','switching'):card.update(y=180,h=1050)
            if (side,key)==('west','process'):card.update(y=1250,h=800)
            if (side,key)==('east','inputs'):card.update(y=180,h=1000)
            if (side,key)==('east','probe'):card.update(y=1200,h=465)
            if (side,key)==('east','extension'):card.update(y=1675,h=520)
            if side=='south' and key=='DRVA':card.update(y=2200,h=780)
            elif side=='south':card.update(y=2060 if key=='DRVX' else 2020 if key=='DRVY' else 2100,h=920 if key=='DRVX' else 960 if key=='DRVY' else 880)
        if guide['id']=='wiki-205':
            if (side,key)==('west','thermal'):card.update(h=820)
            if (side,key)==('west','process'):card.update(y=1045)
        if guide['id']=='wiki-132' and (side,key)==('west','process'):card.update(y=940,h=1260)
        if guide['id']=='mill-g2' and (side,key)==('west','process'):card.update(y=940,h=1100)
        if guide['id'] in ('wiki-134','wiki-135') and side=='south':card.update(y=2150,h=830)
        if guide['id'] in ('wiki-134','wiki-135','laserplot-02') and (side,key)==('west','process'):card.update(h=1000)
        if guide['id']=='wiki-222' and (side,key)==('east','extension'):card.update(h=850)
        if guide['id']=='forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit' and (side,key)==('west','process'):card.update(h=1250)
        if guide['id']=='forum-linuxcnc-optimill-mh50v-unlogic':
            if (side,key)==('east','inputs'):card.update(h=970)
            if (side,key)==('east','probe'):card.update(y=1195,h=560)
            if (side,key)==('east','extension'):card.update(y=1775,h=420)
            if (side,key)==('north','power'):card.update(h=750)
            if (side,key)==('west','switching'):card.update(y=1010,h=1080)
    for key in promotion_groups:
        if key[0]=='corner':card_data.append({'key':key,'x':45,'y':205,'w':720,'h':780 if key[1]=='differential' else 790,'routes':[]})
    wires, cards=[],[]
    main_manifest=[]
    for card in card_data:
        side,key=card['key'];x,y,w,h=card['x'],card['y'],card['w'],card['h'];routes=card['routes']
        if y+h>3000 or x+w>3000:
            raise ValueError(f'Square card capacity exceeded: {guide["id"]} {card["key"]}')
        extras=promotion_groups.get(card['key'],[])
        motion_title,mini_edges=_motion_context(guide,key) if side=='south' else ('',[]) if side=='corner' else (_assembly_title(guide,key,side,routes),[])
        if side=='corner':motion_title='Differential output → physical DB44 contacts' if key=='differential' else 'Retained Mesa / encoder / valve / VFD terminals'
        if guide['id']=='mill-avid-ex-3' and key=='switching':motion_title='AHCT125 STEP/DIR → Avid J8/J9 · run / relay stages'
        if guide['id']=='forum-linuxcnc-optimill-mh50v-unlogic':
            if side=='north':motion_title='Logic supply + X servo CN1 / isolated DI interface'
            if key=='inputs':motion_title='Home sensors + Y servo CN1 / isolated DI interface'
            if key=='probe':motion_title='Probe + Z servo CN1 / alarm-reset interface'
            if side=='corner':motion_title='AM26 outputs → DB44 + Z isolated servo-on'
        if side=='south' and any('spindle' in route['panel']['title'].lower() for route in routes):
            motion_title=key+' · spindle command interface'
        if side=='south' and guide.get('selected_controller')=='prime':
            receiving=list(dict.fromkeys(_device_name(route['receiver_node']['title']) for route in routes))
            motion_title=key+' · '+ ' / '.join(receiving)+' · integral driver'
        load_edges=_external_load_edges(guide,key,side)
        if side=='south' and load_edges:y,h=2100,880
        # Expanded load cards are sized before their enclosure is drawn.
        cards.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="15" class="assembly"/>')
        cards.append(_svg_label(motion_title,x+18,y+32,55,'assembly-title',step=25))
        models=list(dict.fromkeys(_device_name(route['receiver_node']['title']) for route in routes if re.match(r'^U\w+ ',_device_name(route['receiver_node']['title']))))
        caption=' / '.join(models) if models else 'Named external ports · detailed internal circuits below'
        heading_lines=len(_wrap(motion_title,55))
        cards.append(_svg_label(caption,x+18,y+32+heading_lines*25+20,75,'scope'))
        aliases={}
        for route in routes:
            title=route['receiver_node']['title']
            if title not in aliases:aliases[title]='D'+str(len(aliases)+1)
        column_count=3 if (guide['id']=='mill-avid-ex-3' and key=='inputs') or len(routes)>16 or (side=='south' and load_edges) else 2 if len(routes)>6 else 1
        row_count=(len(routes)+column_count-1)//column_count
        mini_height=210 if mini_edges else 0
        row_pitch=52
        if row_pitch<39:
            raise ValueError(f'Port table too dense: {guide["id"]} {key}: {len(routes)}')
        table_top=y+max(110,32+heading_lines*25+50)
        column_y={col:table_top for col in range(column_count)}
        for ri,route in enumerate(routes):
            record=route['record'];identifier=record['connection_id'];state=record['state'];cx,cy=positions[route['identity']]
            # Facing card edge ports preserve the order of perimeter anchors,
            # minimizing crossings without hiding any individual reference wire.
            if side in ('north','south'):
                px=x+w*(ri+1)/(len(routes)+1);py=y+h if side=='north' else y
            else:
                px=x+w if side=='west' else x;py=y+85+(h-180)*(ri+.5)/max(1,len(routes))
            # Monotone facing curves keep source and destination order without
            # sharing an orthogonal trunk that could resemble a bundled net.
            if side=='north':path=f'M{cx},{cy} C{cx},{cy-95} {px},{py+95} {px},{py}'
            elif side=='south':path=f'M{cx},{cy} C{cx},{cy+130} {px},{py-130} {px},{py}'
            elif side=='west':path=f'M{cx},{cy} C{cx-95},{cy} {px+95},{py} {px},{py}'
            else:path=f'M{cx},{cy} C{cx+95},{cy} {px-95},{py} {px},{py}'
            tooltip=html.escape(identifier+' · '+route['controller_label']+' → '+route['receiver_node']['title']+' · '+route['receiver_contact']['label'])
            if state=='open':
                if side in ('north','south'):
                    d=-26 if side=='north' else 26
                    path=f'M{cx},{cy} v{d} M{px},{py} v{-d}'
                else:
                    d=-26 if side=='west' else 26
                    path=f'M{cx},{cy} h{d} M{px},{py} h{-d}'
            wires.append(f'<g id="{identifier}"><title>{tooltip}</title><path d="{path}" class="wire {state}"/><circle cx="{px}" cy="{py}" r="4" class="terminal"/></g>')
            # A port's visual index is a row lookup, never a fabricated pin mark.
            index_x=px-16 if side=='east' else px+16 if side=='west' else px
            index_y=py-22 if side=='south' else py+25 if side=='north' else py+16
            cards.append(_svg_label(str(ri+1),index_x,index_y,4,'port-index','middle'))
            if side in ('north','south'):
                angle=90 if side=='north' else -90
                ly=py+16 if side=='north' else py-16
                wires.append(f'<text x="{px}" y="{ly}" transform="rotate({angle} {px} {ly})" class="wire-key">{identifier}</text>')
            else:
                lx=px+12 if side=='west' else px-12
                wires.append(_svg_label(identifier,lx,py-9,20,'wire-key','start' if side=='west' else 'end'))
            col=ri//row_count;row=ri%row_count;tx=x+18+col*w/column_count;ty=column_y[col]
            receiver=route['receiver_contact']['label']
            name=_device_name(route['receiver_node']['title'])
            # Remove commissioning qualifications, never the pin's electrical function.
            receiver=_endpoint_label(receiver)
            name=_endpoint_device(name)
            if guide['id']=='mill-avid-ex-3' and key=='inputs':
                name=_paired_endpoint(route['receiver_node'],{'label':''},route['panel']['title']).strip()
                receiver=receiver.replace('Logic output','output').replace('GND reference','GND')
            if guide['id']=='forum-linuxcnc-optimill-mh50v-unlogic' and key=='probe':name='Probe';receiver=receiver.split(' · ')[0]
            port=str(ri+1)+'. '+receiver+' · '+name
            width_chars=51 if column_count==1 else 26 if column_count==2 else 18
            lines=_wrap(port,width_chars)
            cards.append(_svg_label('\n'.join(lines),tx,ty,width_chars,'port-label',step=24))
            column_y[col]=ty+len(lines)*24+4
            
            main_manifest.append({'connection_id':identifier,'controller_identity':list(route['identity']),'controller_anchor':[cx,cy],'assembly':list(card['key']),'assembly_anchor':[px,py],'assembly_port_index':ri+1,'receiver_node':route['receiver_node']['title'],'receiver_contact':route['receiver_contact']['label']})
        load_columns=3 if side=='south' else 2
        load_rows=(len(load_edges)+load_columns-1)//load_columns
        load_height=load_rows*110+60 if load_edges else 0
        extra_columns=4 if guide['id']=='mill-avid-ex-3' and key=='inputs' else 3 if side=='south' or side=='north' or (guide['id']=='mill-avid-ex-3' and key=='switching') or (guide['id']=='forum-linuxcnc-optimill-mh50v-unlogic' and (key in ('inputs','probe') or side=='corner')) else 2
        extra_top=max(column_y.values())+25
        extra_drawing,extra_manifest,extra_bottom=_paired_cells(extras,x+10,extra_top,w-20,extra_columns)
        cards.extend(extra_drawing)
        main_manifest.extend(extra_manifest)
        for item in extras:
            record=next(record for record in records if record['connection_id']==item['id'])
            record['main_visible']=True;record['main_visible_kind']='external-terminal-pair'
        table_limit=y+h-(55 if side=='corner' else load_height+45 if load_edges else 250 if mini_edges else 100)
        occupied_bottom=extra_bottom if extras else max(column_y.values())
        if occupied_bottom>table_limit:
            raise ValueError(f'Endpoint table overflow: {guide["id"]} {key}: {occupied_bottom} > {table_limit}')
        if load_edges:
            top=y+h-load_height-15
            devices=list(dict.fromkeys(_load_device(edge[end])+' = '+_device_name(edge[end]['title']) for edge in load_edges for end in ('from_node','to_node')))
            cards.append(_svg_label('Load terminals: '+ ' / '.join(dict.fromkeys(item.split(' = ')[0] for item in devices)),x+18,top-35,65,'scope'))
            for li,load in enumerate(load_edges):
                col,row=li%load_columns,li//load_columns
                lx=x+18+col*w/load_columns;ly=top+row*110
                left=_load_device(load['from_node'])+' '+_load_label(load['from_contact'])
                right=_load_device(load['to_node'])+' '+_load_label(load['to_contact'])
                label_width=17 if load_columns==3 else 26
                cards.append(_svg_label(left,lx,ly,label_width,'port-label',step=23))
                cards.append(_svg_label(right,lx,ly+42,label_width,'port-label',step=23))
                state=load['edge']['state'];endx=lx+w/load_columns-35
                path=f'M{lx+10},{ly+72} h25 M{endx},{ly+72} h-25' if state=='open' else f'M{lx+10},{ly+72} H{endx}'
                cards.append(f'<path d="{path}" class="wire {state}"/>')
                cards.append(_svg_label(load['id'],(lx+endx)/2,ly+85,20,'wire-key','middle'))
                record=next(record for record in records if record['connection_id']==load['id'])
                record['main_visible']=True;record['main_visible_kind']='assembly-load'
                main_manifest.append({'connection_id':load['id'],'kind':'assembly-load','assembly':list(card['key']),'from_node':load['from_node']['title'],'from_contact':load['from_contact']['label'],'to_node':load['to_node']['title'],'to_contact':load['to_contact']['label'],'from_anchor':[lx+10,ly+72],'to_anchor':[endx,ly+72]})
        for mi,mini in enumerate(mini_edges[:6]):
            mini_id=mini['id']
            linked=next(record for record in records if record['connection_id']==mini_id)
            linked['main_visible']=True
            linked['main_visible_kind']='assembly-mini'
            mx=x+18+(mi%2)*(w/2);my=y+h-230+(mi//2)*60
            from_mark=_endpoint_label(mini['from_contact']['label'])
            to_mark=_endpoint_label(mini['to_contact']['label'])
            state=mini['edge']['state']
            cards.append(_svg_label(from_mark,mx,my-15,25,'mini-label'))
            cards.append(_svg_label(to_mark,mx+w/2-30,my+30,25,'mini-label','end'))
            cards.append(f'<path d="M{mx+90},{my-7} H{mx+w/2-100}" class="wire {state}"/>')
            cards.append(_svg_label(mini_id,mx+w/4-4,my+12,25,'wire-key','middle'))
            main_manifest.append({'connection_id':mini_id,'kind':'assembly-mini','assembly':list(card['key']),'from_node':mini['from_node']['title'],'from_contact':mini['from_contact']['label'],'to_node':mini['to_node']['title'],'to_contact':mini['to_contact']['label'],'from_anchor':[mx+90,my-7],'to_anchor':[mx+w/2-100,my-7]})
        alias_text=' | '.join(alias+' = '+_short(title,48) for title,alias in aliases.items())
        if side!='corner' and not mini_edges and not load_edges and not (side=='north' and any('ClearPath motor power · separate 4-pin DC connector' in panel['title'] for panel in panels)):
            cards.append(_svg_label('Receiving devices: '+_short(' / '.join(_device_name(t) for t in aliases),105),x+18,y+h-68,68,'device-key',step=18))
        if not (side=='north' and any('ClearPath motor power · separate 4-pin DC connector' in panel['title'] for panel in panels)):
            cards.append(_svg_label('Assembly components, load/power/encoder paths: retained detailed figure + C-number evidence.',x+18,y+h-17,66,'scope',step=14))
    for record in records:
        if record['state']!='source' or 'shared VFET' not in record.get('function',''):continue
        panel=panels[record['panel_index']]
        endpoints={n['id']+'.'+c['id']:(n,c) for n in panel['nodes'] for c in n['contacts']}
        left,right=endpoints[record['from']],endpoints[record['to']]
        if not (is_controller_node(left[0]) and is_controller_node(right[0])):continue
        aa=_terminal_identity(left[0],left[1],record['panel_index'])[:2];bb=_terminal_identity(right[0],right[1],record['panel_index'])[:2]
        ax,ay=positions[aa];bx,by=positions[bb]
        ix=max(1200,min(1800,ax));iy=1210
        cards.append(f'<path d="M{ax},{ay} L{ix},{iy} L1200,{iy} L1200,{by} L{bx},{by}" class="wire source"/>')
        cards.append(_svg_label('Factory internal VFET net · '+record['connection_id'],1350,iy-15,55,'scope'))
        record['main_visible']=True;record['main_visible_kind']='factory-internal'
        main_manifest.append({'connection_id':record['connection_id'],'kind':'factory-internal','from_node':left[0]['title'],'from_contact':left[1]['label'],'to_node':right[0]['title'],'to_contact':right[1]['label'],'from_anchor':[ax,ay],'to_anchor':[bx,by]})
    power_panels=[(pi,panel) for pi,panel in enumerate(panels) if 'ClearPath motor power · separate 4-pin DC connector' in panel['title']]
    if power_panels:
        power_card=next(card for card in card_data if card['key']==('north','power'))
        x,y,w,h=(power_card[k] for k in ('x','y','w','h'))
        cards.append(_svg_label('ClearPath separate DC power · unknown supply terminals remain OPEN',x+18,y+h-310,85,'scope'))
        for row,(pi,panel) in enumerate(power_panels):
            endpoints={node['id']+'.'+contact['id']:(node,contact) for node in panel['nodes'] for contact in node['contacts']}
            axis=panel['title'].split(' ClearPath')[0]
            cy=y+h-270+row*48
            cards.append(_svg_label(axis,x+14,cy+5,6,'port-label'))
            for col,edge in enumerate(panel['edges']):
                identifier=connection_id(pi,col)
                left,right=endpoints[edge['from']],endpoints[edge['to']]
                receiver=right if 'POWER' in right[1]['label'].upper() else left
                source=left if receiver is right else right
                mark=receiver[1]['label'].replace(' · ',' ')
                cx=x+70+col*225
                cards.append(_svg_label(mark,cx,cy,20,'port-label'))
                state=edge['state']
                path=f'M{cx+12},{cy+14} h22 M{cx+175},{cy+14} h-22' if state=='open' else f'M{cx+12},{cy+14} H{cx+175}'
                cards.append(f'<path d="{path}" class="wire {state}"/>')
                cards.append(_svg_label(identifier,cx+94,cy+28,20,'wire-key','middle'))
                record=next(record for record in records if record['connection_id']==identifier)
                record['main_visible']=True;record['main_visible_kind']='assembly-mini'
                main_manifest.append({'connection_id':identifier,'kind':'assembly-mini','assembly':['north','power'],'from_node':left[0]['title'],'from_contact':left[1]['label'],'to_node':right[0]['title'],'to_contact':right[1]['label'],'from_anchor':[cx+12,cy+14],'to_anchor':[cx+175,cy+14]})
        cards.append(_svg_label('Each broken route ends at its own unidentified supply terminal; no voltage or terminal number assumed.',x+18,y+h-23,95,'scope'))
    if guide['id']=='base-11':
        # The retained DB25 is an actual peripheral receiving buffer outputs.
        x,y,w,h=1515,2200,1415,780
        cards.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="15" class="assembly"/>')
        cards.append(_svg_label('8760 DB25 peripheral → retained X / Z motor DIN cables',x+18,y+32,95,'assembly-title'))
        selected=[]
        for pi,panel in enumerate(panels):
            endpoints={n['id']+'.'+c['id']:(n,c) for n in panel['nodes'] for c in n['contacts']}
            for ei,edge in enumerate(panel['edges']):
                left,right=endpoints[edge['from']],endpoints[edge['to']]
                if is_controller_node(left[0]) or is_controller_node(right[0]):continue
                if 'DB25' not in left[0]['title']+right[0]['title'] and '5-pin DIN' not in left[0]['title']+right[0]['title']:continue
                selected.append((pi,ei,edge,left,right))
        rows=(len(selected)+1)//2
        for index,(pi,ei,edge,left,right) in enumerate(selected):
            identifier=connection_id(pi,ei)
            record=next(r for r in records if r['connection_id']==identifier)
            record['main_visible']=True;record['main_visible_kind']='assembly-mini'
            cx=x+18+(index//rows)*700;cy=y+85+(index%rows)*55
            def endpoint(pair):
                node,contact=pair
                device='DB25' if 'DB25' in node['title'] else ('X motor DIN' if 'Xmotor'==node['id'] else 'Z motor DIN' if 'Zmotor'==node['id'] else '8760 X DIN' if node['id']=='Xbox' else '8760 Z DIN' if node['id']=='Zbox' else _device_name(node['title']))
                return device+' '+contact['label'].replace(' · ',' ').replace(' cavity function unpublished','')
            cards.append(_svg_label(endpoint(left),cx,cy,42,'port-label'))
            cards.append(_svg_label(endpoint(right),cx+660,cy,42,'port-label','end'))
            state=edge['state']
            path=f'M{cx+225},{cy+13} H{cx+435}' if state!='open' else f'M{cx+225},{cy+13} h35 M{cx+435},{cy+13} h-35'
            cards.append(f'<path d="{path}" class="wire {state}"/>')
            cards.append(_svg_label(identifier,cx+330,cy+32,22,'wire-key','middle'))
            main_manifest.append({'connection_id':identifier,'kind':'assembly-mini','assembly':['south','DB25'],'from_node':left[0]['title'],'from_contact':left[1]['label'],'to_node':right[0]['title'],'to_contact':right[1]['label'],'from_anchor':[cx+225,cy+13],'to_anchor':[cx+435,cy+13]})
        cards.append(_svg_label('DIN cavity functions unpublished: OPEN paths are not installation instructions.',x+18,y+h-20,100,'scope'))
    detail_href=DETAIL_HREFS[guide['id']]
    cards.append(f'<a href="{html.escape(detail_href)}"><rect x="1175" y="1700" width="650" height="95" rx="9" fill="#edf3f8"/><text x="1500" y="1738" text-anchor="middle" class="port-label">Open complete circuit + supply/reference details</text><text x="1500" y="1770" text-anchor="middle" class="scope">All C-number evidence and exact component supply pins</text></a>')
    qualifications=[]
    all_titles=' '.join(n['title'] for p in panels for n in p['nodes'])
    if 'AHCT125' in all_titles:qualifications.append('GUESS rail: AHCT125 14 VCC +5 V; 7 GND')
    if 'LVC07' in all_titles:qualifications.append('GUESS rail: LVC07 14 VCC +3.3 V; 7 GND')
    if 'OPA197' in all_titles:qualifications.append('GUESS rail: OPA197 7 +12 V; 4 reference')
    if 'AQY212' in all_titles:qualifications.append('GUESS LED-side +5 V → R4 A; logic return → U5 pin8 GND; isolated from drive DI')
    for qi,note in enumerate(qualifications):cards.append(_svg_label(note,1500,1270+qi*60,55,'port-label','middle',step=24))
    notes=' '.join(str(guide.get(k,'')) for k in ('notes','checks','instructions'))+' '.join(str(p.get('notes','')) for p in panels)
    if 'GF.3' in notes:cards.append(_svg_label('GF.3: choose touch plate OR slaved Y2 homing',1500,1370,65,'scope','middle'))
    if 'J35.6' in notes:cards.append(_svg_label('J35.6: choose spindle PWM OR laser PWM',1500,1370,65,'scope','middle'))
    complete_meta={'profile_id' :guide['id'],'layout':'square-controller-field-main','geometry':{'viewbox':[0,0,3000,3000],'controller':[1000,1000,1000,1000],'controller_area_fraction':1/9},'connections':records,'contacts':contact_records,'main_visible_connections':[r['connection_id'] for r in records if r['main_visible']],'detailed_only_connections':[r['connection_id'] for r in records if not r['main_visible']],'main_route_manifest':main_manifest,'side_banks':side_banks,'scope':'Every controller-facing conductor individually visible. Complete subsidiary wiring and component internals preserved in detailed circuit drawings and evidence below.'}
    metadata=html.escape(json.dumps(complete_meta,ensure_ascii=False))
    styles='''text{font-family:Arial,sans-serif;fill:#173149}.title{font-size:27px;font-weight:700}.assembly-title{font-size:24px;font-weight:700}.scope{font-size:18px;fill:#4b6376}.assembly{fill:#fff;stroke:#4c6981;stroke-width:2}.shell{fill:#edf3f8;stroke:#34576d;stroke-width:2}.bank-title{font-size:17px;font-weight:700}.terminal-label{font-size:20px}.terminal{fill:#fff;stroke:#294a61;stroke-width:1.7}.wire{fill:none;stroke-width:2.4;stroke-linejoin:round}.guess{stroke:#8250b5;stroke-dasharray:2 7;stroke-linecap:round}.source{stroke:#278446}.open{stroke:#b76720;stroke-dasharray:9 7}.port-label{font-size:22px}.mini-label{font-size:20px}.wire-key{font-size:16px;font-weight:700}.port-index{font-size:15px;font-weight:700;fill:#536879}.device-key{font-size:18px}.controller-title{font-size:30px;font-weight:700}.controller-note{font-size:17px;fill:#4b6376}'''
    heading=_svg_label(guide['title']+' · MAIN FIELD WIRING',60,48,150,'title')
    heading+=_svg_label('Square controller · individual field wires · named peripheral assemblies · complete circuit details retained below',60,80,180,'scope')
    heading+='<path d="M60,115 H120" class="wire guess"/>'+_svg_label('DOTTED = GUESS / proposed connection',135,121,70,'scope')
    heading+='<path d="M650,115 H710" class="wire source"/>'+_svg_label('GREEN = source-reported path; not hardware-tested',725,121,80,'scope')
    heading+='<path d="M1410,115 H1470" class="wire open"/>'+_svg_label('BROKEN = OPEN; no wire until evidence is obtained',1485,121,90,'scope')
    heading+=_svg_label('Crossings are not junctions. Port-row numbers are lookup indices, not pin numbers. Every C-number identifies an individual connection.',60,155,200,'scope')
    controller='<rect x="1000" y="1000" width="1000" height="1000" rx="30" fill="#f7fafc" stroke="#183d57" stroke-width="5"/>'
    controller+=_svg_label(guide.get('controller_title','Smoothie controller'),1500,1455,42,'controller-title','middle',step=35)
    controller+=_svg_label('ONE SELECTED CONTROLLER',1500,1520,60,'controller-note','middle')
    controller+=_svg_label('Connector contact references',1500,1565,50,'controller-note','middle')
    controller+=_svg_label('Not a mating-face or as-built rating certificate',1500,1595,58,'scope','middle')
    footer=_svg_label(f'{sum(r["main_visible"] for r in records)} MAIN connections · {sum(not r["main_visible"] for r in records)} DETAIL connections',1500,1655,70,'scope','middle')
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="3000" height="3000" viewBox="0 0 3000 3000" role="img" aria-label="{html.escape(guide["title"])} square controller main wiring"><title>{html.escape(guide["title"])} · square controller-centred field wiring</title><style>{styles}</style><rect width="3000" height="3000" fill="#fff"/><metadata id="centered-wiring-provenance">{metadata}</metadata>{heading}{controller}{"".join(wires)}{"".join(shells)}{"".join(cards)}{footer}</svg>'
