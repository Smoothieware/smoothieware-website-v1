"""Source-faithful machine wiring figures for the twelve selected atlas guides.

The main figure uses the actual controller drawing and exact source contact
coordinates. Each circuit also gets a readable terminal-by-terminal figure.
Evidence status remains textual; colours encode electrical function only.
"""
from __future__ import annotations

import html
import json
import math
import re
from dataclasses import dataclass

from controller_artwork import ArtworkError, load_box_extension, load_controller
from wiring_primitives import (LayoutError, Rect, conductor_svg,
                               escape_point, wire_caption)


CONTROLLERS = {'smoothiebox', 'prime'}
ALTERNATIVE_WORDS = ('alternative ', 'optional ')
INK = '#1e3028'
MUTED = '#68777d'
GREEN = '#5b9365'
VERTICAL_PORT_PITCH = 72.


def connection_id(panel_index: int, edge_index: int) -> str:
    """Keep the published one-based identifier of every ordered graph edge."""
    return f'C{panel_index + 1:02d}-{edge_index + 1:03d}'


def is_controller_node(node: dict) -> bool:
    """Respect explicit roles; avoid classifying supply and original controls."""
    if node.get('role') is not None:
        return node['role'] == 'controller'
    title = str(node.get('title', ''))
    if re.search(r'supply matched|regulated supply|ground star|common ground|'
                 r'no\s*(?:prime|core|smoothie)|retained recycler heater control',
                 title, re.I):
        return False
    return bool(re.match(r'^(?:Smoothie(?:board|Box)?\b|Core\b|Prime\b|'
                         r'V2\s+(?:Core|Prime)\b)', title, re.I))


def _svg_text(value: str, x: float, y: float, size: float = 25.,
              color: str = INK, weight: int = 400, anchor: str = 'start') -> str:
    return (f'<text x="{x:.2f}" y="{y:.2f}" font-family="Arial,Helvetica,sans-serif" '
            f'font-size="{size:.2f}" font-weight="{weight}" fill="{color}" '
            f'text-anchor="{anchor}">{html.escape(value)}</text>')


def _wrap_lines(value: str, limit: int) -> list[str]:
    words = str(value).split()
    lines: list[str] = []
    current = ''
    for word in words:
        if len(current) + len(word) + bool(current) <= limit:
            current = (current + ' ' + word).strip()
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or ['']


def _multiline(value: str, x: float, y: float, *, limit: int, size: float = 22.,
               color: str = INK, weight: int = 400, leading: float | None = None) -> tuple[str, float]:
    lines = _wrap_lines(value, limit)
    pitch = leading or size * 1.3
    return (''.join(_svg_text(line, x, y + number * pitch, size, color, weight)
                    for number, line in enumerate(lines)), pitch * len(lines))


def _terminal_reference(node: dict, contact: dict) -> str | None:
    label = str(contact['label'])
    match = re.match(r'^([A-Z][A-Z0-9]*)\.(\d+)\b', label)
    if match:
        return match[1] + '.' + match[2]
    pin = re.match(r'^pin\s*(\d+)\b', label, re.I)
    bank = re.search(r'\b(J\d+)\b', str(node['title']))
    return bank[1] + '.' + pin[1] if pin and bank else None


def _role(edge: dict) -> str:
    explicit = edge.get('electrical_role')
    if explicit:
        return explicit
    text = (edge.get('function', '') + ' ' + edge.get('from', '') + ' ' + edge.get('to', '')).lower()
    for words, role in (
        (('ground', 'gnd', 'return', 'common', 'reference'), 'ground'),
        (('step',), 'step'), (('direction', 'dir'), 'direction'),
        (('enable',), 'enable'), (('pwm', 'ttl', 'run command'), 'control'),
        (('switched', 'relay', 'contactor'), 'switched'),
        (('3.3v', '3v3'), 'three'), (('5v', '+5 v', '+5v'), 'five'),
        (('sensor supply', 'sensor +'), 'sensor'),
        (('supply', 'power', 'vmot', '24v', '24 v', '12v', '12 v'), 'power'),
    ):
        if any(word in text for word in words):
            return role
    return 'signal'


def _panel_role(guide: dict, panel_index: int, panel: dict) -> str:
    declared = panel.get('diagram_variant')
    if declared:
        return declared
    if panel_index + 1 in guide.get('superseded_main_panel_indices', []):
        return 'retained-unresolved'
    if panel['title'].lower().startswith(ALTERNATIVE_WORDS):
        return 'alternative'
    return 'current'


@dataclass(frozen=True)
class EdgeView:
    identifier: str
    panel_index: int
    panel_title: str
    panel_role: str
    edge: dict
    source_node: dict
    source_contact: dict
    target_node: dict
    target_contact: dict
    controller_reference: str | None
    receiver_node: dict | None
    receiver_contact: dict | None
    is_controller_incident: bool


def _views(guide: dict) -> list[EdgeView]:
    values: list[EdgeView] = []
    for panel_index, panel in enumerate(guide['wire_panels']):
        contacts = {node['id'] + '.' + value['id']: (node, value)
                    for node in panel['nodes'] for value in node['contacts']}
        if len(contacts) != sum(len(node['contacts']) for node in panel['nodes']):
            raise ValueError(f"Duplicate graph endpoint in {guide['id']} panel {panel_index + 1}")
        for edge_index, edge in enumerate(panel['edges']):
            source = contacts.get(edge['from'])
            target = contacts.get(edge['to'])
            if source is None or target is None:
                raise ValueError(f"Missing graph endpoint in {guide['id']} {connection_id(panel_index, edge_index)}")
            source_controller = is_controller_node(source[0])
            target_controller = is_controller_node(target[0])
            incident = source_controller != target_controller
            controller = source if source_controller else target if target_controller else None
            receiver = target if source_controller else source if target_controller else None
            values.append(EdgeView(connection_id(panel_index, edge_index), panel_index,
                                   panel['title'], _panel_role(guide, panel_index, panel),
                                   edge, source[0], source[1], target[0], target[1],
                                   _terminal_reference(controller[0], controller[1]) if controller else None,
                                   receiver[0] if receiver else None,
                                   receiver[1] if receiver else None, incident))
    return values



# The main drawing includes complete selected graph panels. An explicit
# superseded/alternative role is the only reason an authored edge is omitted.
MAIN_ROLES = frozenset({'current', 'current-conditional'})
CARD_WIDTH = 600.
CARD_EDGE_MARGIN = 115.
CARD_COLUMN_GAP = 300.
CARD_PITCH = 118.
PANEL_WIDTH = 3 * CARD_WIDTH + 2 * CARD_EDGE_MARGIN + 2 * CARD_COLUMN_GAP
PANEL_MARGIN = 46.
DETAIL_HREFS = {
    'wiki-205': 'diode-laser/wiki-205', 'laserplot-02': 'co2-laser/laserplot-02',
    'base-11': 'cnc-lathe/base-11', 'wiki-132': '3d-printer/wiki-132',
    'wiki-134': 'cnc-mill/wiki-134', 'wiki-135': 'other-shop-equipment/wiki-135',
    'mill-g2': 'cnc-router/mill-g2', 'mill-avid-ex-3': 'cnc-router/mill-avid-ex-3',
    'wiki-206': 'cnc-router/wiki-206', 'wiki-222': '3d-printer/wiki-222',
    'forum-linuxcnc-optimill-mh50v-unlogic':
        'cnc-mill/forum-linuxcnc-optimill-mh50v-unlogic',
    'forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit':
        'cnc-lathe/forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit',
}


def _main_selected(view: EdgeView) -> bool:
    return view.panel_role in MAIN_ROLES


def _shell_kind(title: str) -> str:
    name = title.lower()
    if 'm12' in name:
        return 'm12'
    if any(mark in name for mark in ('db25', 'db44', 'd-sub')):
        return 'dsub'
    if any(mark in name for mark in ('sn74', 'uln2003', 'aqy212', 'opa197',
                                     'am26', 'max31865', 'integrated circuit')):
        return 'ic'
    if any(mark in name for mark in ('terminal strip', 'screw terminal', 'vfd',
                                     'wj200', 'vs1st', 'acorn')):
        return 'terminal'
    if any(mark in name for mark in ('motor', 'sensor', 'switch', 'laser head',
                                     'probe', 'pump', 'heater')):
        return 'field'
    return 'unqualified'


def _node_shell_kind(node: dict) -> str:
    """Qualify source-known connector faces only with exact graph metadata."""
    family = node.get('connector_family')
    if family is None:
        return _shell_kind(node['title'])
    ids = [contact['id'] for contact in node['contacts']]
    if family == 'din5-male-face':
        expected = {'upper_left', 'lower_left', 'bottom',
                    'lower_right', 'upper_right'}
        if (node.get('face_view') != 'outside-notch-top' or
                len(ids) != 5 or set(ids) != expected or
                '67127 male DIN' not in node['title']):
            raise LayoutError(node['id'] + ': DIN face metadata/contact set mismatch')
        return family
    if family == 'six-lead-motor-header':
        if (node.get('face_view') != 'top-view' or ids !=
                ['1', '2', '3', '4', '5', '6'] or
                '67127 motor' not in node['title']):
            raise LayoutError(node['id'] + ': six-lead header metadata/contact order mismatch')
        return family
    # These are logical terminal schedules, not recovered physical cavity maps.
    if family in {'ic-16', 'ic-4'}:
        count = int(family.split('-')[1])
        if len(ids) != count or set(ids) != {str(pin) for pin in range(1, count + 1)}:
            raise LayoutError(node['id'] + ': incomplete IC pin inventory')
        return 'ic'
    if family == 'named-terminal-subset-no-face-map':
        if 'JASD v1.3' not in node['title'] or 'CN1' not in node['title']:
            raise LayoutError(node['id'] + ': unsupported CN1 terminal contract')
        if not all(pin.isdigit() and 1 <= int(pin) <= 50 for pin in ids):
            raise LayoutError(node['id'] + ': invalid JASD CN1 terminal')
        return 'dsub'
    if family == 'manufacturer-named-power-terminals-no-cavity-map':
        if 'JASD v1.3' not in node['title'] or set(ids) != {'R', 'S', 'T', 'L1', 'L2', 'U', 'V', 'W', 'PE', 'CN2', 'B1', 'B2', 'B3'}:
            raise LayoutError(node['id'] + ': unsupported JASD power contract')
        return 'terminal'
    if family == 'manufacturer-named-relay-terminals':
        if '2966265' not in node['title'] or set(ids) != {'A1', 'A2', '11', '14', '12'}:
            raise LayoutError(node['id'] + ': unsupported Phoenix relay contract')
        return 'terminal'
    if family == 'manufacturer-named-terminal-subset-no-face-map':
        if 'Lenze 8214' not in node['title'] or set(ids) != {'28', 'E4', '39', '7', '20'}:
            raise LayoutError(node['id'] + ': unsupported Lenze digital contract')
        return 'terminal'
    if family == 'passive-two-terminal':
        if len(ids) != 2 or len(set(ids)) != 2:
            raise LayoutError(node['id'] + ': incomplete passive terminal inventory')
        return 'field'
    if family == 'phoenix-2902037-named-screw-terminals':
        if '2902037' not in node['title'] or set(ids) != {str(pin) for pin in range(1, 9)}:
            raise LayoutError(node['id'] + ': unsupported Phoenix analog terminal contract')
        return 'terminal'
    if family == 'lenze8214-analog-named-terminal-subset':
        if 'Lenze8214' not in node['title'] or set(ids) != {'7', '8', '9', '62'}:
            raise LayoutError(node['id'] + ': unsupported Lenze analog terminal contract')
        return 'terminal'
    raise LayoutError(node['id'] + ': unrecognized qualified connector family')


def _contact_family(node: dict, contact: dict) -> str:
    """Use contract connector families without guessing cavity orientation."""
    if node.get('connector_family') == 'manufacturer-named-power-terminals-no-cavity-map' and contact['id'] == 'CN2':
        return 'field'  # Intact encoder connector; no invented cavity or screw terminal.
    title = node['title'].lower()
    bank = re.match(r'^(J\d+)\.', contact['label'])
    if 'v01 isolated inductive sensor level shifter' in title and bank:
        return 'terminal' if bank[1] in {'J1', 'J2'} else 'header'
    if 'bouni analog v01' in title and bank:
        return 'terminal' if bank[1] == 'J3' else 'header'
    return _node_shell_kind(node)


def _contact_shell(node: dict, contact: dict, x: float, y: float) -> str:
    """A pin mark belongs to one whole device/connector shell."""
    family = _contact_family(node, contact)
    unused = bool(contact.get('unused_in_plan'))
    border = '#84918a' if unused else '#315e3c'
    light = '#e5e9e6' if unused else '#dcebd9'
    mark = '#9aaba1' if unused else '#5b9365'
    if family in {'m12', 'dsub'}:
        return (f'<circle cx="{x:.2f}" cy="{y:.2f}" r="10" fill="{light}" '
                f'stroke="{border}" stroke-width="3"/>'
                f'<circle cx="{x:.2f}" cy="{y:.2f}" r="4" fill="{mark}"/>')
    if family in {'header', 'six-lead-motor-header'}:
        return (f'<rect x="{x-13:.2f}" y="{y-13:.2f}" width="26" height="26" '
                f'rx="2" fill="{"#e5e9e6" if unused else "#e4eeda"}" stroke="{border}" stroke-width="3"/>'
                f'<rect x="{x-5:.2f}" y="{y-5:.2f}" width="10" height="10" '
                f'fill="{mark}"/>')
    if family == 'terminal':
        return (f'<rect x="{x-21:.2f}" y="{y-20:.2f}" width="42" height="40" '
                f'rx="5" fill="{mark}" stroke="{border}" stroke-width="2"/>'
                f'<circle cx="{x:.2f}" cy="{y:.2f}" r="12" fill="{light}" '
                f'stroke="{border}" stroke-width="2"/>'
                f'<path d="M{x-7:.2f} {y+7:.2f} L{x+7:.2f} {y-7:.2f}" '
                'stroke="#53645c" stroke-width="2"/>')
    if family == 'ic':
        return (f'<rect x="{x-12:.2f}" y="{y-12:.2f}" width="24" height="24" '
                f'rx="2" fill="{"#e5e9e6" if unused else "#e1e9e3"}" stroke="{border}" stroke-width="3"/>'
                f'<circle cx="{x:.2f}" cy="{y:.2f}" r="4" fill="{mark}"/>')
    # A generic pad does not claim a screw, terminal number, mating face or fit.
    return (f'<rect x="{x-20:.2f}" y="{y-13:.2f}" width="40" height="26" '
            f'rx="13" fill="{light}" stroke="{border}" stroke-width="3"/>')


def _connector_bank_art(node: dict, rect: Rect, ports: dict) -> str:
    """One visible shell/bank encloses the listed logical contacts."""
    family = _node_shell_kind(node)
    contacts = node['contacts']
    if not contacts:
        return ''
    if family == 'dsub':
        top = min(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) - 47.
        bottom = max(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) + 47.
        left, right = rect.x - 22., rect.right + 22.
        return (f'<path class="one-dsub-connector" d="M{left+35:.2f} {top:.2f} '
                f'H{right-35:.2f} L{right:.2f} {top+28:.2f} '
                f'V{bottom-28:.2f} L{right-35:.2f} {bottom:.2f} '
                f'H{left+35:.2f} L{left:.2f} {bottom-28:.2f} '
                f'V{top+28:.2f} Z" fill="#e6efe8" '
                'stroke="#315e3c" stroke-width="3" '
                'data-cavity-layout="unverified-logical-list"/>')
    if family in {'din5-male-face', 'six-lead-motor-header'}:
        top = min(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) - 47.
        bottom = max(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) + 47.
        left, right = rect.x - 22., rect.right + 22.
        shape = 'one-din5-male-face' if family == 'din5-male-face' else 'one-six-lead-header'
        view = 'outside-notch-top' if family == 'din5-male-face' else 'top-view'
        return (f'<rect class="{shape}" x="{left:.2f}" y="{top:.2f}" '
                f'width="{right-left:.2f}" height="{bottom-top:.2f}" '
                f'rx="{52 if family == "din5-male-face" else 9}" '
                'fill="#e6efe8" stroke="#315e3c" stroke-width="3" '
                f'data-source-face-view="{view}"/>')
    if family in {'m12', 'ic'}:
        top = min(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) - 47.
        bottom = max(ports[node['id'] + '.' + c['id']][0][1] for c in contacts) + 47.
        left, right = rect.x - 22., rect.right + 22.
        radius = 35 if family == 'm12' else 5
        kind = 'one-m12-connector' if family == 'm12' else 'one-ic-package'
        return (f'<rect class="{kind}" x="{left:.2f}" y="{top:.2f}" '
                f'width="{right-left:.2f}" height="{bottom-top:.2f}" '
                f'rx="{radius}" fill="#e6efe8" stroke="#315e3c" '
                'stroke-width="3" data-cavity-layout="unverified-logical-list"/>')
    groups: dict[tuple[str, str], list[tuple[float, float]]] = {}
    for contact in contacts:
        contact_family = _contact_family(node, contact)
        if contact_family not in {'terminal', 'header'}:
            continue
        bank = re.match(r'^(J\d+)\.', contact['label'])
        group = bank[1] if bank and ('v01' in node['title'].lower()) else contact_family
        groups.setdefault((contact_family, group), []).append(
            ports[node['id'] + '.' + contact['id']][0])
    shells = []
    for (contact_family, group), points in groups.items():
        for x in sorted({point[0] for point in points}):
            ys = [point[1] for point in points if point[0] == x]
            top, bottom = min(ys) - 27., max(ys) + 27.
            css_class = 'green-screw-bank' if contact_family == 'terminal' else 'header-bank'
            fill = '#b8d9b2' if contact_family == 'terminal' else '#e4eeda'
            shells.append(f'<rect class="{css_class}" data-bank="{html.escape(group, quote=True)}" '
                          f'x="{x-27:.2f}" y="{top:.2f}" width="64" '
                          f'height="{bottom-top:.2f}" rx="7" fill="{fill}" '
                          'stroke="#315e3c" stroke-width="2"/>')
    return ''.join(shells)


def _panel_nodes(panel: dict, *, include_controller: bool) -> list[dict]:
    if include_controller:
        return panel['nodes']
    visible = []
    used = {endpoint for edge in panel['edges'] for endpoint in
            (edge['from'], edge['to'])}
    for node in panel['nodes']:
        if not is_controller_node(node):
            visible.append(node)
            continue
        unresolved = [contact for contact in node['contacts']
                      if node['id'] + '.' + contact['id'] in used and
                      _terminal_reference(node, contact) is None]
        if unresolved:
            visible.append({**node, 'title': 'UNSOURCED controller boundary · ' + node['title'],
                            'contacts': unresolved})
    return visible


def _panel_columns(nodes: list[dict]) -> dict[int, int]:
    """Compact only vacant card columns; retain device IDs and terminal order."""
    occupied = sorted({max(0, min(2, int(node.get('column', 1))))
                       for node in nodes})
    return {source_column: display_column
            for display_column, source_column in enumerate(occupied)}


def _panel_width(visible: list[dict]) -> float:
    columns = max(1, len(_panel_columns(visible)))
    return max(1200. if not visible else 0.,
               columns * CARD_WIDTH + 2 * CARD_EDGE_MARGIN +
               (columns - 1) * CARD_COLUMN_GAP)


def _panel_title_band(panel: dict, width: float) -> float:
    title_limit = max(22, int((width - 2 * PANEL_MARGIN) / 17.5))
    return max(150., 80. + 34. * len(_wrap_lines(panel['title'], title_limit)))


def _internal_edge(panel: dict, edge: dict) -> bool:
    nodes = {node['id']: node for node in panel['nodes']}
    source = nodes.get(edge['from'].split('.')[0])
    target = nodes.get(edge['to'].split('.')[0])
    return bool(source and target and
                is_controller_node(source) and is_controller_node(target))


def _caption_description(panel: dict, edge: dict, *, internal: bool) -> str:
    if internal:
        return edge['function'] + ' · INTERNAL BOARD NET; NO FIELD WIRE'
    descriptions = [edge['function']]
    contacts = {node['id'] + '.' + contact['id']: (node, contact)
                for node in panel['nodes'] for contact in node['contacts']}
    for endpoint in (edge['from'], edge['to']):
        node, contact = contacts[endpoint]
        if not is_controller_node(node) or 'prime' not in node['title'].lower():
            continue
        if _terminal_reference(node, contact):
            descriptions.append('Prime contact ' + contact['label'])
    return ' · '.join(descriptions)


def _caption_height(panel: dict, edge: dict, width: float, *,
                    internal: bool = False) -> float:
    description = _caption_description(panel, edge, internal=internal)
    caption = wire_caption(description, 'C99-999', edge['state'], 0., 0.,
                           width - 2 * PANEL_MARGIN - 70., font_size=19.)
    return max(70., caption.bounds.height + 24.)


def _node_image(node: dict) -> str | None:
    title = node['title'].lower()
    if 'v01 isolated inductive sensor level shifter' in title:
        return '/machine-control-pinout-survey/centered-sources/isolated-proximity-sensor-v01-top.png'
    if 'bouni analog v01' in title:
        return '/machine-control-pinout-survey/centered-sources/bouni-spindle-analog-v01-top.png'
    return None


def _node_header(node: dict) -> float:
    text = max(175., 45. + 28. * len(_wrap_lines(node['title'], 38)) + 45.)
    return text + (282. if _node_image(node) else 0.) + (
        140. if _node_shell_kind(node) == 'din5-male-face' else 0.)


def _contact_row_height(contact: dict) -> float:
    return max(CARD_PITCH, 27. * len(_wrap_lines(_contact_display_label(contact), 42)) + 26.)


def _contact_display_label(contact: dict) -> str:
    label = str(contact['label'])
    return (label + ' · UNUSED IN THIS PLAN'
            if contact.get('unused_in_plan') else label)


def _node_height(node: dict) -> float:
    return _node_header(node) + sum(_contact_row_height(contact)
                                    for contact in node['contacts'])


def _panel_measure(panel: dict, *, include_controller: bool) -> tuple[float, float]:
    visible = _panel_nodes(panel, include_controller=include_controller)
    display_columns = _panel_columns(visible)
    columns = {column: 0. for column in display_columns.values()}
    for node in visible:
        source_column = max(0, min(2, int(node.get('column', 1))))
        columns[display_columns[source_column]] += _node_height(node) + 28.
    card_height = max(columns.values(), default=0.)
    width = _panel_width(visible)
    title_band = _panel_title_band(panel, width)
    footer = sum(_caption_height(panel, edge, width,
                    internal=_internal_edge(panel, edge))
                 for edge in panel['edges']) + 115.
    return width, max(420., title_band + card_height + 48. + footer + 40.)


def _panel_layout(panel: dict, panel_index: int, rect: Rect, *,
                  include_controller: bool) -> dict:
    visible = _panel_nodes(panel, include_controller=include_controller)
    display_columns = _panel_columns(visible)
    title_band = _panel_title_band(panel, rect.width)
    offsets = {column: rect.y + title_band
               for column in display_columns.values()}
    node_rects = {}
    ports = {}
    for node in visible:
        source_column = max(0, min(2, int(node.get('column', 1))))
        column = display_columns[source_column]
        height = _node_height(node)
        body = Rect(rect.x + CARD_EDGE_MARGIN +
                    column * (CARD_WIDTH + CARD_COLUMN_GAP),
                    offsets[column], CARD_WIDTH, height)
        offsets[column] += height + 28.
        if node['id'] in node_rects:
            raise LayoutError(f'Panel {panel_index + 1}: duplicate node ID {node["id"]}')
        node_rects[node['id']] = (node, body)
        cursor = _node_header(node)
        for contact in node['contacts']:
            side = 'west' if contact.get('side', 'left') == 'left' else 'east'
            row_height = _contact_row_height(contact)
            point = (body.x if side == 'west' else body.right,
                     body.y + cursor + row_height / 2.)
            ports[node['id'] + '.' + contact['id']] = (point, side, body, node, contact)
            cursor += row_height
    footer_y = max(offsets.values(), default=rect.y + title_band) + 48.
    measured_width, measured_height = _panel_measure(panel, include_controller=include_controller)
    if abs(measured_width - rect.width) > .1 or footer_y + 115. + sum(
            _caption_height(panel, edge, rect.width,
                            internal=_internal_edge(panel, edge))
            for edge in panel['edges']) > rect.bottom + .1:
        raise LayoutError(f'Panel {panel_index + 1}: card/caption measure overflow')
    return {'index': panel_index, 'panel': panel, 'rect': rect,
            'nodes': node_rects, 'ports': ports, 'footer_y': footer_y,
            'title_band': title_band}


def _draw_node(node: dict, rect: Rect, ports: dict) -> str:
    family = _node_shell_kind(node)
    if node['title'].startswith('UNSOURCED'):
        family = 'unqualified'
    title_lower = node['title'].lower()
    if 'v01 isolated inductive sensor level shifter' in title_lower:
        connector_note = 'J1/J2 screw banks · J3 host header'
    elif 'bouni analog v01' in title_lower:
        connector_note = 'J1 host header · J3 field screw bank'
    elif family == 'dsub':
        connector_note = 'One D-sub shell · pin face unverified'
    elif family == 'm12':
        connector_note = 'One M12 shell · pin face unverified'
    elif family == 'ic':
        connector_note = 'One IC package · logical pin rows'
    elif family == 'din5-male-face':
        connector_note = 'Male DIN · outside face · notch up · source positions'
    elif family == 'six-lead-motor-header':
        connector_note = 'One six-lead motor connector · top view'
    else:
        connector_note = 'Connector family: ' + family
    # The two 8760 graph cards are circuit sections of the same machine DB25.
    # Keep their authored device IDs and contacts while identifying the shared
    # physical shell; the logical lists do not assert a face/cavity arrangement.
    shared_8760_db25 = node['title'] in {
        '8760 DB25 · machine peripheral', '8760 external DB25'}
    shared_attribute = (' data-shared-physical-connector="8760-machine-db25"'
                        if shared_8760_db25 else '')
    drive_axis = None
    p1_match = re.match(r'^([XYZ]) retained MSD556 P1 · verify fitted suffix$',
                        node['title'])
    p2_match = re.match(r'^MSD556 ([XYZ]) · P2 motor/power$', node['title'])
    if p1_match or p2_match:
        drive_axis = (p1_match or p2_match)[1]
        shared_attribute += (f' data-shared-physical-drive="wiki-135-msd556-'
                             f'{drive_axis.lower()}"')
    heading, heading_height = _multiline(node['title'], rect.x + 34., rect.y + 39.,
                            limit=38, size=23., leading=28., weight=700)
    image_source = _node_image(node)
    if 39. + heading_height > _node_header(node) - (327. if image_source else 45.):
        raise LayoutError('Device title exceeds measured header: ' + node['title'])
    output = [f'<g class="physical-device" data-device-id="{html.escape(node["id"], quote=True)}" '
              f'data-shell-family="{family}"{shared_attribute}>',
              f'<rect x="{rect.x:.2f}" y="{rect.y:.2f}" width="{rect.width:.2f}" '
              f'height="{rect.height:.2f}" rx="16" fill="#f5f8f3" '
              'stroke="#557961" stroke-width="3"/>',
              _connector_bank_art(node, rect, ports), heading,
              _svg_text(connector_note, rect.x + 34.,
                        rect.y + _node_header(node) - 45., 17., MUTED)]
    if shared_8760_db25:
        output.append(_svg_text('SHARED 8760 DB25 · this circuit lists a pin subset',
                                rect.x + 34., rect.y + _node_header(node) - 18.,
                                18., '#315e3c', weight=700))
    elif drive_axis:
        output.append(_svg_text('SAME ' + drive_axis + ' MSD556 · P1/P2; SUFFIX UNVERIFIED',
                                rect.x + 34., rect.y + _node_header(node) - 18.,
                                17., '#315e3c', weight=700))
    if family == 'din5-male-face':
        # This is a source-qualified face locator. The card-edge rows below
        # remain the actual route anchors; the icon adds no electrical wire.
        centre_x, centre_y = rect.x + 115., rect.y + _node_header(node) - 118.
        output.append(f'<g class="din5-face-locator" data-kind="annotation-not-conductor" '
                      f'data-face-view="outside-notch-top"><circle cx="{centre_x:.2f}" '
                      f'cy="{centre_y:.2f}" r="67" fill="#f5f8f3" '
                      'stroke="#315e3c" stroke-width="3"/>'
                      f'<path d="M{centre_x-13:.2f} {centre_y-65:.2f} '
                      f'V{centre_y-48:.2f} H{centre_x+13:.2f} '
                      f'V{centre_y-65:.2f}" fill="none" stroke="#315e3c" '
                      'stroke-width="4"/>')
        positions = {'upper_left': (-30., -28.), 'lower_left': (-37., 15.),
                     'bottom': (0., 38.), 'lower_right': (37., 15.),
                     'upper_right': (30., -28.)}
        for contact in node['contacts']:
            offset_x, offset_y = positions[contact['id']]
            x, y = centre_x + offset_x, centre_y + offset_y
            output.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="9" '
                          'fill="#5b9365" stroke="#315e3c" stroke-width="2"/>'
                          f'<title>{html.escape(contact["label"])}</title>')
        output.append('</g>')
    if image_source:
        image_y = rect.y + 45. + heading_height
        output.append(f'<image href="{html.escape(image_source, quote=True)}" '
                      f'x="{rect.x + 38.:.2f}" y="{image_y:.2f}" width="524" height="215" '
                      'preserveAspectRatio="xMidYMid meet"/>')
        output.append(_svg_text('Native v01 top view · contract terminals below; pad mapping unproven',
                                rect.x + 34., image_y + 239., 16.5, MUTED))
    for contact in node['contacts']:
        point, side, _, _, _ = ports[node['id'] + '.' + contact['id']]
        is_unused = bool(contact.get('unused_in_plan'))
        if is_unused:
            output.append(f'<g class="unused-plan-contact" '
                          f'data-contact-id="{html.escape(node["id"] + "." + contact["id"], quote=True)}" '
                          'data-unused-in-plan="true">')
        output.append(_contact_shell(node, contact, *point))
        label_x = rect.x + 42. if side == 'west' else rect.x + 24.
        display_label = _contact_display_label(contact)
        lines = len(_wrap_lines(display_label, 42))
        label_y = point[1] - 27. * (lines - 1) / 2.
        label, height = _multiline(display_label, label_x, label_y,
                                   limit=42, size=22., leading=27.,
                                   color='#69756e' if is_unused else INK)
        if height > _contact_row_height(contact) - 12.:
            raise LayoutError('Physical terminal label exceeds measured row: ' + display_label)
        output.append(label)
        if is_unused:
            output.append('</g>')
    output.append('</g>')
    return ''.join(output)


def _draw_panel_frame(layout: dict, role: str,
                      render_states: dict[str, str] | None = None,
                      internal_ids: set[str] | None = None) -> str:
    rect: Rect = layout['rect']
    panel = layout['panel']
    title_limit = max(22, int((rect.width - 2 * PANEL_MARGIN) / 17.5))
    title, height = _multiline(panel['title'], rect.x + PANEL_MARGIN,
                               rect.y + 45., limit=title_limit, size=28., leading=34.,
                               weight=700)
    if height + 70. > layout['title_band']:
        raise LayoutError('Circuit title exceeds reserved title band')
    pieces = [f'<g class="circuit-panel" data-panel-index="{layout["index"] + 1}" '
              f'data-variant="{html.escape(role, quote=True)}">',
              f'<rect x="{rect.x:.2f}" y="{rect.y:.2f}" width="{rect.width:.2f}" '
              f'height="{rect.height:.2f}" rx="18" fill="#fffef9" '
              'stroke="#9aafa0" stroke-width="3"/>', title]
    for node, body in layout['nodes'].values():
        pieces.append(_draw_node(node, body, layout['ports']))
    cursor = layout['footer_y']
    for edge_index, edge in enumerate(panel['edges']):
        identifier = connection_id(layout['index'], edge_index)
        display_state = (render_states or {}).get(identifier, edge['state'])
        is_internal = identifier in (internal_ids or set())
        description = _caption_description(panel, edge, internal=is_internal)
        caption = wire_caption(description, identifier, display_state,
                               rect.x + PANEL_MARGIN + 50., cursor,
                               rect.width - 2 * PANEL_MARGIN - 70., font_size=19.)
        reserved_height = _caption_height(panel, edge, rect.width,
                                           internal=is_internal)
        if caption.bounds.height > reserved_height:
            raise LayoutError(f'{identifier}: caption exceeded reserved row')
        if not is_internal:
            color = _wire_role(edge, panel)[0]
            from controller_artwork import source_palette
            pieces.append(f'<path d="M{rect.x + PANEL_MARGIN:.2f} {cursor + 16:.2f} h35" '
                          f'fill="none" stroke="{source_palette("wire")[color]}" stroke-width="5"/>')
        pieces.append(caption.svg)
        cursor += reserved_height
    pieces.append('</g>')
    return ''.join(pieces)


def _wire_role(edge: dict, panel: dict) -> tuple[str, str]:
    explicit = edge.get('electrical_role')
    if explicit:
        return explicit, 'explicit'
    words = ' '.join((edge.get('function', ''), edge.get('from', ''),
                      edge.get('to', ''))).lower()
    if ('common-anode feed' in words or
            any(endpoint.endswith('.v5') for endpoint in (edge['from'], edge['to']))):
        return 'five', 'positive-source-endpoint'
    if any(endpoint.endswith(('.v3', '.v33', '.v3v3')) for endpoint in
           (edge['from'], edge['to'])):
        return 'three', 'positive-source-endpoint'
    if re.search(r'\bstep\b', words):
        return 'step', 'function-inferred'
    if re.search(r'\bdir(?:ection)?\b', words):
        return 'direction', 'function-inferred'
    if re.search(r'\benable\b|\bservo.on\b', words):
        return 'enable', 'function-inferred'
    # A low-side MOSFET output is a switched load conductor, not a GND net.
    # Reserve its exact source-pad corridor before adjacent fan/pump wiring.
    if re.search(r'\bswitched return\b', words):
        return 'switched', 'function-inferred'
    if re.search(r'\b(?:ground|gnd|return|0v|0 v|analog common|logic common)\b', words) and not re.search(
            r'common.anode|positive.reference|\+5v|\+24v', words):
        return 'ground', 'function-inferred'
    if re.search(r'3\.?3\s*v|3v3', words):
        return 'three', 'function-inferred'
    if re.search(r'\+?5\s*v|5v', words):
        return 'five', 'function-inferred'
    if re.search(r'sensor.*supply|sensor.*\+24', words):
        return 'sensor', 'function-inferred'
    if re.search(r'\b(?:power|supply|vmot|24\s*v|12\s*v|mains|fuse)\b', words):
        return 'power', 'function-inferred'
    if re.search(r'\b(?:switched|relay|contactor|load return)\b', words):
        return 'switched', 'function-inferred'
    if re.search(r'\b(?:pwm|ttl|run command|speed command)\b', words):
        return 'control', 'function-inferred'
    return 'signal', 'fallback-signal-review'


def _paired_return_domain(view: EdgeView, panel: dict) -> str | None:
    """Permit a pair of return symbols only for one explicitly named return.

    The authored edge proposes continuity between its two terminals; it does
    not prove a fitted cable or bond to any other edge. An ambiguous or mixed
    domain must retain an ordinary wire route (or fail visibly).
    """
    edge = view.edge
    if edge['state'] not in {'source', 'guess'} or _wire_role(edge, panel)[0] != 'ground':
        return None
    words = ' '.join((edge['function'], view.source_contact['label'],
                      view.target_contact['label'])).lower()
    if re.search(r'\b(?:protective|earth|p\.?e\.?|shield|chassis|switched|load return|common.anode|dcm)\b', words):
        return None
    if re.search(r'\+\s*(?:3(?:\.3)?|5|10|12|24)\s*v|\b(?:vcc|vdd|vmot|positive)\b', words):
        return None
    if any(edge[side].lower().endswith(('.v5', '.v3', '.v33', '.v3v3',
                                        '.plus', '.positive', '.pe', '.shield'))
           for side in ('from', 'to')):
        return None
    return_word = re.compile(r'\b(?:gnd|ground|return|0\s*v|common|gf|gnd_h|acm|dcm)\b', re.I)
    if not return_word.search(edge['function']):
        return None
    if not all(return_word.search(contact['label']) for contact in
               (view.source_contact, view.target_contact)):
        return None
    if not any(re.search(r'\b(?:gnd|ground|0\s*v|gf|gnd_h|acm|dcm)\b',
                         contact['label'], re.I)
               for contact in (view.source_contact, view.target_contact)):
        return None
    def domain(label: str) -> str | None:
        low = label.lower()
        if re.search(r'\b(?:gnd_h|host|logic|signal.gnd)\b', low):
            return 'logic-return'
        if re.search(r'\b(?:analog|acm)\b', low):
            return 'analog-reference'
        if re.search(r'\b(?:gf|field|sensor|motor)\b', low):
            return 'field-return'
        return None
    sides = [domain(contact['label']) for contact in
             (view.source_contact, view.target_contact)]
    if sides[0] is not None and sides[1] is not None and sides[0] != sides[1]:
        return None
    if sides[0] or sides[1]:
        return sides[0] or sides[1]
    function = edge['function'].lower()
    if re.search(r'\b(?:analog|acm)\b', function):
        return 'analog-reference'
    if re.search(r'\b(?:endstop|limit|logic|signal return|input return|home return)\b', function):
        return 'logic-return'
    if re.search(r'\b(?:motor supply return|motor ground|field return|pump return)\b', function):
        return 'field-return'
    title = panel['title'].lower()
    if (re.search(r'\b(?:endstop|limit)\b', title) and
            not re.search(r'\b(?:motor|power|field|analog|vfd)\b', title)):
        return 'logic-return'
    return None


def _controller_refs(views: list[EdgeView]) -> set[str]:
    refs = set()
    for view in views:
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)):
            if is_controller_node(node):
                reference = _terminal_reference(node, contact)
                if reference:
                    refs.add(reference)
    return refs


def _available_source_refs(guide: dict, views: list[EdgeView]) -> set[str]:
    """Use the same immutable controller schedules in subsystem disposition."""
    available = set(load_controller(guide['selected_controller']).contacts)
    sockets = {reference.split('.')[0] for reference in _controller_refs(views)
               if reference not in available and re.fullmatch(r'G[A-I]\.\d+', reference)}
    for socket in sorted(sockets):
        available.update(load_box_extension(socket).contacts)
    return available


def _choose_side(panel_index: int, panel: dict, views: list[EdgeView],
                 source_contacts: dict) -> str:
    votes = {side: 0 for side in ('north', 'east', 'south', 'west')}
    for view in views:
        if view.panel_index != panel_index:
            continue
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)):
            if not is_controller_node(node):
                continue
            reference = _terminal_reference(node, contact)
            if reference in source_contacts:
                votes[source_contacts[reference].side] += 1
            elif reference and re.fullmatch(r'G[A-I]\.\d+', reference):
                votes['east'] += 1
    if any(votes.values()):
        return max(votes, key=lambda side: (votes[side],
                   -('north','east','south','west').index(side)))
    title = panel['title'].lower()
    if any(word in title for word in ('motor', 'driver', 'stepper', 'servo')):
        return 'south'
    if any(word in title for word in ('supply', 'power', 'fuse', 'emergency', 'e-stop')):
        return 'north'
    if any(word in title for word in ('limit', 'sensor', 'probe', 'switch', 'temperature')):
        return 'east'
    return 'west'


def _artwork(guide: dict, selected: list[EdgeView],
             board_box: tuple[float, float, float, float]):
    kind = guide['selected_controller']
    if kind not in CONTROLLERS:
        raise ArtworkError('Unsupported selected controller')
    source = load_controller(kind)
    refs = _controller_refs(selected)
    main = source.place(instance='atlas-v2-main', box=board_box,
                        used=refs.intersection(source.contacts))
    maps = dict(main.contacts)
    extensions = []
    grouped = sorted({ref.split('.')[0] for ref in refs if ref not in source.contacts
                      and re.fullmatch(r'G[A-I]\.\d+', ref)})
    for ordinal, socket in enumerate(grouped):
        picture = load_box_extension(socket).place(
            instance='atlas-v2-extension-' + socket.lower(),
            box=(main.bounds[0] + main.bounds[2] + 140.,
                 main.bounds[1] + 80. + ordinal * 365., 500., 310.),
            used={ref for ref in refs if ref.startswith(socket + '.')})
        extensions.append(picture)
        maps.update(picture.contacts)
    return main, extensions, maps


def _panel_grid(items: list[tuple[int, float, float]], columns: int,
                spacing: float) -> tuple[float, float, list[tuple[int, float, float, float, float]]]:
    """Measure a compact row-major panel grid without changing panel contents."""
    if not items:
        return 0., 0., []
    rows = [items[offset:offset + columns]
            for offset in range(0, len(items), columns)]
    width = max(sum(item[1] for item in row) + spacing * (len(row) - 1)
                for row in rows)
    placements = []
    y = 0.
    for row in rows:
        x = 0.
        for index, item_width, item_height in row:
            placements.append((index, x, y, item_width, item_height))
            x += item_width + spacing
        y += max(item[2] for item in row) + spacing
    return width, y - spacing, placements


def _source_order(panel_index: int, side: str, selected: list[EdgeView],
                  source_contacts: dict) -> tuple[float, int]:
    """Keep nearby source connectors in their real order around the board."""
    coordinates = []
    for view in selected:
        if view.panel_index != panel_index:
            continue
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)):
            if not is_controller_node(node):
                continue
            reference = _terminal_reference(node, contact)
            if reference in source_contacts:
                anchor = source_contacts[reference].anchor
                coordinates.append(anchor[0] if side in {'north', 'south'}
                                   else anchor[1])
    if not coordinates:
        return float(panel_index), panel_index
    coordinates.sort()
    return coordinates[len(coordinates) // 2], panel_index


def _layout_main(guide: dict, selected: list[EdgeView]):
    from itertools import product
    source = load_controller(guide['selected_controller'])
    grouped = {side: [] for side in ('north', 'east', 'south', 'west')}
    active_panels = sorted({view.panel_index for view in selected})
    for index in active_panels:
        panel = guide['wire_panels'][index]
        side = _choose_side(index, panel, selected, source.contacts)
        width, height = _panel_measure(panel, include_controller=False)
        grouped[side].append((index, width, height))
    for side in grouped:
        grouped[side].sort(key=lambda item: _source_order(
            item[0], side, selected, source.contacts))
    if guide['id'] == 'base-11':
        # Panels 5 and 6 have no controller anchor. Their small panel-index
        # sort keys otherwise push the sourced power/command panels far right.
        # Flank the sourced cards without changing any panel geometry or ID.
        south_by_index = {item[0]: item for item in grouped['south']}
        if set(south_by_index) == {0, 1, 3, 4, 5}:
            grouped['south'] = [south_by_index[index]
                                for index in (4, 3, 0, 1, 5)]
    spacing = 82.
    # Prime's native PCB view omits silk, so each used connector needs a
    # compact P12 pin/net callout in the margin beside the exact artwork.
    # Prime's measured connector-bank labels use 300-unit source-local rails.
    # Their complete boxes are placed only in conductor-free space after routing.
    board_gap = 650. if guide['selected_controller'] == 'prime' else 215.
    # Prime bank callouts need a 300-unit label, 42-unit board gap and
    # 42-unit page inset even when there is no panel on the source side.
    # Reserve that exterior rail before measuring/centering the whole layout.
    outer = 390. if guide['selected_controller'] == 'prime' else 105.
    board_size = 2700.
    extension_count = len({ref.split('.')[0] for ref in _controller_refs(selected)
                           if ref not in source.contacts and
                           re.fullmatch(r'G[A-I]\.\d+', ref)})
    art_width = board_size + (640. if extension_count else 0.)
    art_height = max(board_size,
                     80. + (extension_count - 1) * 365. + 310.
                     if extension_count else board_size)
    choices = {side: [_panel_grid(grouped[side], columns, spacing)
                      for columns in range(1, min(len(grouped[side]), 5) + 1)]
               if grouped[side] else [(0., 0., [])]
               for side in ('north', 'south', 'west', 'east')}
    best = None
    for north, south, west, east in product(*(choices[side] for side in
                                               ('north', 'south', 'west', 'east'))):
        west_width, west_height, _ = west
        east_width, east_height, _ = east
        north_width, north_height, _ = north
        south_width, south_height, _ = south
        center_width = (west_width + (board_gap if west_width else 0.) +
                        art_width + (board_gap if east_width else 0.) +
                        east_width)
        center_height = max(art_height, west_height, east_height)
        content_width = max(center_width, north_width, south_width)
        content_height = ((north_height + board_gap if north_height else 0.) +
                          center_height +
                          (board_gap + south_height if south_height else 0.))
        canvas = float(math.ceil((max(content_width, content_height) +
                                  2 * outer) / 100.) * 100.)
        score = (canvas, content_width * content_height,
                 abs(content_width - content_height))
        if best is None or score < best[0]:
            best = (score, (north, south, west, east), content_width,
                    content_height, center_width, center_height, canvas)
    if best is None:
        raise LayoutError(guide['id'] + ': no panel grid')
    _, grids, content_width, content_height, center_width, center_height, canvas = best
    north, south, west, east = grids
    origin_x = (canvas - content_width) / 2.
    origin_y = (canvas - content_height) / 2.
    center_y = origin_y + (north[1] + board_gap if north[1] else 0.)
    center_x = origin_x + (content_width - center_width) / 2.
    art_x = center_x + west[0] + (board_gap if west[0] else 0.)
    art_y = center_y + (center_height - art_height) / 2.
    board_box = (art_x, art_y, board_size, board_size)
    main, extensions, maps = _artwork(guide, selected, board_box)
    position = {}
    def place(grid, x, y):
        for index, dx, dy, width, height in grid[2]:
            position[index] = Rect(x + dx, y + dy, width, height)
    place(north, origin_x + (content_width - north[0]) / 2., origin_y)
    place(west, center_x, center_y + (center_height - west[1]) / 2.)
    place(east, art_x + art_width + (board_gap if east[0] else 0.),
          center_y + (center_height - east[1]) / 2.)
    place(south, origin_x + (content_width - south[0]) / 2.,
          center_y + center_height + (board_gap if south[1] else 0.))
    panels = list(position.values())
    artwork = [Rect(*main.bounds)] + [Rect(*card.bounds) for card in extensions]
    overlap = any(a.overlaps(b) for number, a in enumerate(panels)
                  for b in panels[number + 1:])
    overlap |= any(a.inflated(65.).overlaps(b.inflated(65.))
                   for a in panels for b in artwork)
    outside = any(box.x < 70. or box.y < 70. or box.right > canvas - 70.
                  or box.bottom > canvas - 70. for box in panels + artwork)
    if overlap or outside:
        raise LayoutError(guide['id'] + ': compact panel/artwork grid overlaps or leaves page')
    layouts = {index: _panel_layout(guide['wire_panels'][index], index, rect,
                                    include_controller=False)
               for index, rect in position.items()}
    return canvas, main, extensions, maps, layouts


def _layout_diagnostic(phase: str, **fields) -> None:
    print(json.dumps({'type': 'warning', 'diagnostic': phase, **fields}), flush=True)


def _diagnostic_rect(rect: Rect) -> list[float]:
    return [rect.x, rect.y, rect.width, rect.height]


def _diagnostic_reservations(reserved: list) -> dict:
    return {'count': len(reserved), 'truncated': len(reserved) > 5000,
            'records': [{'id': wire.identifier, 'net_id': wire.net_id, 'points': [list(p) for p in wire.points]}
                        for wire in reserved[:5000]]}


def _prime_source_callouts(guide: dict, artwork, selected: list[EdgeView],
                           layouts: dict, canvas: float,
                           reserved: list, extensions: list, maps: dict, *,
                           preplanned_leads: dict | None = None,
                           preferred_leads: dict | None = None) -> tuple[str, tuple[Rect, ...], dict]:
    """Preserve source-first pad exits, or allocate labels and exits jointly.

    Each exact pad keeps its source pin badge. A solid grey leader locates its
    real connector bank; it is an annotation, never an electrical conductor.
    Reservation is based on already planned OPEN stubs and complete future
    terminal leads, not on a completed drawing that may have sealed every slot.
    """
    if guide['selected_controller'] != 'prime':
        return '', (), preplanned_leads if preplanned_leads is not None else _plan_controller_leads(
            guide, selected, maps,
            [artwork] + extensions, reserved)
    from wiring_primitives import label_block
    box = Rect(*artwork.bounds)
    panel_rects = [layout['rect'] for layout in layouts.values()]
    conductors = [segment for wire in reserved for segment in
                  zip(wire.points, wire.points[1:])]
    contact_items = [(reference, placed) for reference, placed in
                     artwork.contacts.items() if placed.used]
    if not contact_items:
        return '', (), preplanned_leads if preplanned_leads is not None else _plan_controller_leads(
            guide, selected, maps, [artwork] + extensions, reserved)
    side_rank = {'north': 0, 'east': 1, 'south': 2, 'west': 3}
    contact_items.sort(key=lambda item: (
        side_rank[item[1].source.side],
        item[1].anchor[0] if item[1].source.side in {'north', 'south'} else
        item[1].anchor[1], item[0]))
    contexts: dict[str, list[str]] = {}
    for view in selected:
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)):
            if not is_controller_node(node):
                continue
            reference = _terminal_reference(node, contact)
            if reference not in artwork.contacts:
                continue
            description = str(view.edge['function'])
            if description not in contexts.setdefault(reference, []):
                contexts[reference].append(description)
    banks: dict[str, list[tuple[str, object]]] = {}
    for reference, placed in contact_items:
        banks.setdefault(reference.split('.')[0], []).append((reference, placed))
    bank_items = []
    for bank, entries in banks.items():
        sides = {placed.source.side for _, placed in entries}
        if len(sides) != 1:
            raise LayoutError(bank + ': real connector contacts disagree on source-facing side')
        side = next(iter(sides))
        # Locate the bank with an existing exact pad, never an averaged anchor.
        representative = entries[len(entries) // 2][1].anchor
        bank_items.append((bank, entries, side, representative))
    bank_items.sort(key=lambda item: (side_rank[item[2]],
                                     item[3][0] if item[2] in {'north', 'south'}
                                     else item[3][1], item[0]))
    width = 300.
    available_text_width = width - 30.
    rows_by_bank = {}
    heights = {}
    for bank, entries, _, _ in bank_items:
        rows = []
        for reference, placed in entries:
            contextual = ' / '.join(contexts.get(reference, []))
            if not contextual:
                raise LayoutError(reference + ': used source pad has no graph function')
            context_measure = label_block(contextual, 0., 0.,
                                          width=available_text_width,
                                          font_size=18., line_height=24., weight=700)
            physical_measure = label_block(reference + ' · P12 ' + placed.source.function,
                                           0., 0., width=available_text_width,
                                           font_size=15., line_height=20.,
                                           color='#60736a')
            rows.append((reference, placed, contextual,
                         context_measure.bounds.height,
                         physical_measure.bounds.height))
        rows_by_bank[bank] = rows
        heights[bank] = (15. + 28. + 8. +
                         sum(context_height + 4. + physical_height + 12.
                             for _, _, _, context_height, physical_height in rows) + 12.)
    offsets = [0.] + [sign * distance for distance in
                       (55., 110., 165., 220., 330., 440., 550., 700.,
                        850., 1000., 1200., 1400.) for sign in (1., -1.)]
    def side_options(declared: str, anchor: tuple[float, float]) -> list[str]:
        if declared in {'north', 'south'}:
            adjacent = ['west', 'east']
        else:
            adjacent = ['north', 'south']
        distance = {'north': anchor[1] - box.y,
                    'south': box.bottom - anchor[1],
                    'west': anchor[0] - box.x,
                    'east': box.right - anchor[0]}
        return [declared] + [side for side in sorted(adjacent,
                                   key=lambda value: (distance[value], value))
                             if distance[side] <= .45 * box.width]
    # Field routing inflates both neighboring barriers by 9+8 units.
    # A visible 13-unit gap therefore closes completely in routing space.
    # Keep at least 35 units between label boxes and other barriers;
    # 36-unit tier gaps and 42-unit board rails preserve an open field lane.
    candidates_by_bank: dict[str, list[tuple[Rect, tuple, str]]] = {}
    for bank, entries, declared, anchor in bank_items:
        height = heights[bank]
        candidates = []
        diagnostic_bank = guide['id'] == 'wiki-206' and bank == 'J42'
        rejection_counts = {}
        rejected_samples = {}
        def reject(reason: str, rect: Rect) -> None:
            if diagnostic_bank:
                rejection_counts[reason] = rejection_counts.get(reason, 0) + 1
                samples = rejected_samples.setdefault(reason, [])
                if len(samples) < 4:
                    samples.append(_diagnostic_rect(rect))
        seen_positions = set()
        for side in side_options(declared, anchor):
            for level in range(5):
                for displacement in offsets:
                    if side in {'north', 'south'}:
                        x = max(box.x + 8., min(box.right - width - 8.,
                                               anchor[0] - width / 2. + displacement))
                        y = (box.y - 42. - height - level * (height + 36.)
                             if side == 'north' else
                             box.bottom + 42. + level * (height + 36.))
                    else:
                        y = max(box.y + 8., min(box.bottom - height - 8.,
                                               anchor[1] - height / 2. + displacement))
                        x = (box.x - 42. - width - level * (width + 36.)
                             if side == 'west' else
                             box.right + 42. + level * (width + 36.))
                    if (x, y) in seen_positions:
                        continue
                    seen_positions.add((x, y))
                    rect = Rect(x, y, width, height)
                    if (x < 42. or y < 96. or rect.right > canvas - 42. or
                            rect.bottom > canvas - 42.):
                        reject('canvas-bounds', rect)
                        continue
                    if rect.inflated(35.).overlaps(box):
                        reject('controller-body', rect)
                        continue
                    if any(rect.inflated(35.).overlaps(other)
                           for other in panel_rects):
                        reject('panel-rectangle', rect)
                        continue
                    # The field router later inflates every label obstacle by
                    # 9 clearance + 8 fillet units. Protect already reserved
                    # complete leads and OPEN stubs at the same full margin.
                    if any(rect.inflated(18.).blocks(first, last)
                           for first, last in conductors):
                        reject('reserved-prefix', rect)
                        continue
                    if side == 'north':
                        tip = (max(x + 12., min(x + width - 12., anchor[0])), rect.bottom)
                        between = ((anchor[0], rect.bottom + 10.),
                                   (tip[0], rect.bottom + 10.))
                    elif side == 'south':
                        tip = (max(x + 12., min(x + width - 12., anchor[0])), rect.y)
                        between = ((anchor[0], rect.y - 10.),
                                   (tip[0], rect.y - 10.))
                    elif side == 'west':
                        tip = (rect.right, max(y + 12., min(y + height - 12., anchor[1])))
                        between = ((rect.right + 10., anchor[1]),
                                   (rect.right + 10., tip[1]))
                    else:
                        tip = (rect.x, max(y + 12., min(y + height - 12., anchor[1])))
                        between = ((rect.x - 10., anchor[1]),
                                   (rect.x - 10., tip[1]))
                    chain = (anchor, between[0], between[1], tip)
                    segments = tuple((first, last) for first, last in
                                     zip(chain, chain[1:]) if first != last)
                    if any(other.inflated(5.).blocks(first, last)
                           for other in panel_rects for first, last in segments):
                        reject('annotation-leader-panel', rect)
                        continue
                    candidates.append((rect, segments, side))
        if not candidates:
            if diagnostic_bank:
                _layout_diagnostic('source-bank-zero-candidates',
                    profile=guide['id'], bank=bank, canvas=canvas,
                    width=width, height=height, declared_side=declared,
                    source_anchor=list(anchor), unique_positions=len(seen_positions),
                    rejection_counts=rejection_counts, rejected_samples=rejected_samples,
                    controller_rect=_diagnostic_rect(box),
                    panel_rects=[_diagnostic_rect(r) for r in panel_rects],
                    reservations=_diagnostic_reservations(reserved))
            names = ', '.join(reference for reference, _ in entries)
            raise LayoutError(bank + ': no source-local connector-bank label clear of conductors and panels for ' + names)
        candidates_by_bank[bank] = candidates
    ordered = sorted(banks, key=lambda bank: (len(candidates_by_bank[bank]), bank))
    chosen: dict[str, tuple[Rect, tuple, str]] = {}
    def compatible(rect: Rect, segments: tuple) -> bool:
        for other_rect, other_segments, _ in chosen.values():
            if rect.inflated(35.).overlaps(other_rect):
                return False
            if any(rect.inflated(7.).blocks(first, last)
                   for first, last in other_segments):
                return False
            if any(other_rect.inflated(5.).blocks(first, last)
                   for first, last in segments):
                return False
        return True
    def plan_leads() -> dict:
        if preplanned_leads is not None:
            return preplanned_leads
        first_reserved = len(reserved)
        try:
            return _plan_controller_leads(
                guide, selected, maps, [artwork] + extensions,
                reserved, label_rects=tuple(value[0] for value in chosen.values()),
                preferred_leads=preferred_leads)
        except LayoutError:
            del reserved[first_reserved:]
            raise
    blocked_bank = None
    for bank in ordered:
        option = next(((rect, segments, side) for rect, segments, side in
                       candidates_by_bank[bank] if compatible(rect, segments)), None)
        if option is None:
            blocked_bank = bank
            break
        chosen[bank] = option
    planned_leads = None
    if blocked_bank is None:
        try:
            planned_leads = plan_leads()
        except LayoutError:
            blocked_bank = 'joint source-label/source-lead plan'
    if blocked_bank is not None:
        chosen.clear()
        attempts = 0
        full_attempts = 0
        exhausted = False
        def allocate(position: int) -> bool:
            nonlocal attempts, full_attempts, exhausted, planned_leads
            if exhausted:
                return False
            if position == len(ordered):
                full_attempts += 1
                if full_attempts > 64:
                    exhausted = True
                    return False
                try:
                    planned_leads = plan_leads()
                    return True
                except LayoutError:
                    return False
            bank = ordered[position]
            for rect, segments, side in candidates_by_bank[bank]:
                attempts += 1
                if attempts > 20000:
                    exhausted = True
                    return False
                if not compatible(rect, segments):
                    continue
                chosen[bank] = (rect, segments, side)
                if allocate(position + 1):
                    return True
                del chosen[bank]
            return False
        if not allocate(0):
            reason = ('bounded joint bank-label/source-lead allocation budget exhausted'
                      if exhausted else 'no compatible source labels and exact-pad leads')
            raise LayoutError(blocked_bank + ': ' + reason +
                              f' after {attempts} assignments / {full_attempts} complete plans; '
                              'no source function or physical lead omitted')
    if planned_leads is None:
        raise LayoutError('Source-bank labels selected without source-pad leads')
    tags = []
    badges = []
    for bank, entries, _, _ in bank_items:
        rect, segments, side = chosen[bank]
        path = (f'M{segments[0][0][0]:.2f} {segments[0][0][1]:.2f}' +
                ''.join(f'L{last[0]:.2f} {last[1]:.2f}'
                        for _, last in segments)) if segments else ''
        x, y = rect.x, rect.y
        tags.append(f'<g class="source-bank-tag" data-source-bank="{html.escape(bank, quote=True)}" '
                    f'data-label-side="{side}" data-kind="annotation-not-conductor">'
                    f'<path d="{path}" fill="none" stroke="#7e9088" stroke-width="2"/>'
                    f'<rect x="{x:.2f}" y="{y:.2f}" width="{rect.width:.2f}" '
                    f'height="{rect.height:.2f}" rx="10" fill="#f5f8f3" '
                    'stroke="#8a9d8f" stroke-width="2"/>'
                    + _svg_text(bank + ' · P12', x + 15., y + 33.,
                                20., INK, 700))
        row_y = y + 51.
        for reference, placed, contextual, context_height, physical_height in rows_by_bank[bank]:
            contextual_block = label_block(contextual, x + 15., row_y,
                                           width=available_text_width,
                                           font_size=18., line_height=24., weight=700)
            physical_block = label_block(reference + ' · P12 ' + placed.source.function,
                                         x + 15., row_y + context_height + 4.,
                                         width=available_text_width,
                                         font_size=15., line_height=20.,
                                         color='#60736a')
            if (abs(contextual_block.bounds.height - context_height) > .01 or
                    abs(physical_block.bounds.height - physical_height) > .01):
                raise LayoutError(reference + ': measured source function row drift')
            tags.append(f'<g data-source-contact="{html.escape(reference, quote=True)}">'
                        + contextual_block.svg + physical_block.svg + '</g>')
            row_y += context_height + 4. + physical_height + 12.
        if row_y + 12. > rect.bottom + .01:
            raise LayoutError(bank + ': source bank label exceeds measured box')
        tags.append('</g>')
        for reference, placed in entries:
            anchor = placed.anchor
            badges.append(f'<g data-source-pad="{html.escape(reference, quote=True)}">'
                          f'<circle cx="{anchor[0]:.2f}" cy="{anchor[1]:.2f}" r="12" '
                          'fill="#fffef9" stroke="#76847d" stroke-width="2"/>'
                          f'<text x="{anchor[0]:.2f}" y="{anchor[1] + 4.:.2f}" '
                          'font-family="Arial,Helvetica,sans-serif" font-size="14" '
                          'text-anchor="middle" fill="#334a3c">'
                          f'{html.escape(placed.source.pin)}</text></g>')
    return ('<g class="prime-source-contact-callouts">' +
            ''.join(tags) + ''.join(badges) + '</g>',
            tuple(chosen[bank][0] for bank, _, _, _ in bank_items),
            planned_leads)

def _source_escape_candidates(point: tuple[float, float], side: str, box: Rect,
                              placement, reference: str, *,
                              include_detours: bool = False) -> tuple[tuple[tuple[float, float], ...], ...]:
    from wiring_primitives import route_manhattan
    if not (box.x - .01 <= point[0] <= box.right + .01 and
            box.y - .01 <= point[1] <= box.bottom + .01):
        raise LayoutError(reference + ': sourced contact anchor outside artwork')
    if side not in {'west', 'east', 'north', 'south'}:
        raise LayoutError(reference + ': source contact lacks an escape side')
    transform = placement.metadata['uniform_transform']
    scale = transform['scale']
    translate_x, translate_y = transform['translate']
    # The separate Chapter 18 GA–GI cards have exact 12-unit square pads on
    # 20-unit horizontal pitch. Their 8-unit placed exclusion half-width
    # covers the 6-unit pad half-width plus 2 units; the Prime/main artwork
    # retains its wider 24-unit conservative pad-centre exclusion.
    is_extension = str(placement.metadata.get('kind', '')).startswith(
        'smoothiebox-extension-')
    pad_clearance = 8. * scale if is_extension else 24.
    other_centres = [(other_ref, (translate_x + source_x * scale,
                                   translate_y + source_y * scale))
                     for other_ref, other in placement.contacts.items()
                     if other_ref != reference
                     for source_x, source_y in other.source.source_positions]
    candidates = []
    for displacement in (0., 54., -54., 108., -108., 162., -162.,
                         216., -216., 324., -324., 432., -432.):
        if side in {'west', 'east'}:
            jog = (point[0], point[1] + displacement)
            if not box.y + 12. <= jog[1] <= box.bottom - 12.:
                continue
        else:
            jog = (point[0] + displacement, point[1])
            if not box.x + 12. <= jog[0] <= box.right - 12.:
                continue
        for reach in (42., 68., 104.):
            escape = ((box.x - reach if side == 'west' else box.right + reach,
                       jog[1]) if side in {'west', 'east'} else
                      (jog[0], box.y - reach if side == 'north' else box.bottom + reach))
            prefix = (point, jog, escape) if displacement else (point, escape)
            clear = True
            for _, centre in other_centres:
                for first, last in zip(prefix, prefix[1:]):
                    if first[0] == last[0]:
                        near = abs(centre[0] - first[0]) < pad_clearance and min(first[1], last[1]) - pad_clearance < centre[1] < max(first[1], last[1]) + pad_clearance
                    else:
                        near = abs(centre[1] - first[1]) < pad_clearance and min(first[0], last[0]) - pad_clearance < centre[0] < max(first[0], last[0]) + pad_clearance
                    if near:
                        clear = False
                        break
                if not clear:
                    break
            if clear:
                candidates.append(prefix)
    if candidates and not include_detours:
        return tuple(candidates)
    # Dense Prime pin headers cannot leave straight through adjacent copper.
    # Route a visual lead between pad-centre exclusion zones to the declared
    # board side while keeping the exact sourced start point. This is diagram
    # geometry, not a claim about PCB copper, cable exit or mating orientation.
    def exits_declared_side(path: tuple[tuple[float, float], ...]) -> bool:
        for x, y in path[1:]:
            if box.x <= x <= box.right and box.y <= y <= box.bottom:
                continue
            return {'west': x < box.x, 'east': x > box.right,
                    'north': y < box.y, 'south': y > box.bottom}[side]
        return False
    def clears_all_known_pads(path: tuple[tuple[float, float], ...]) -> bool:
        for _, centre in other_centres:
            protected = Rect(centre[0] - pad_clearance,
                             centre[1] - pad_clearance,
                             2 * pad_clearance, 2 * pad_clearance)
            if any(protected.blocks(first, last)
                   for first, last in zip(path, path[1:])):
                return False
        return True
    # First try the locally bounded clearance that permits valid routes among
    # dense Prime headers. Every resulting path must still pass the full
    # all-pad audit. Then search the full source-to-side corridor so distant
    # contacts cannot keep winning A* routes that fail that audit.
    narrow_detour_width = 7. * scale if is_extension else 16.
    # At Prime J36 the 1.27 mm pad pitch is about 29.5 placed units. The
    # router adds 2 + 8 units to each obstacle, so a 24-unit search half-width
    # would already enclose the next exact pad centre (34 > 29.5). Search the
    # full corridor with a narrower candidate obstacle, then retain the
    # independent 24-unit all-pad audit for the complete resulting path.
    for coverage, detour_half_width in (
            ('local', narrow_detour_width),
            ('full-corridor', narrow_detour_width),
            ('full-conservative', pad_clearance)):
        for span in (260., 520., 1040.):
            local_nearby = [(x, y) for _, (x, y) in other_centres
                            if point[0] - span <= x <= point[0] + span and
                            point[1] - span <= y <= point[1] + span]
            for displacement in (0., 80., -80., 160., -160., 300., -300.):
                if side in {'north', 'south'}:
                    escape = (point[0] + displacement,
                              box.y - 42. if side == 'north' else box.bottom + 42.)
                    if not box.x + 42. <= escape[0] <= box.right - 42.:
                        continue
                else:
                    escape = (box.x - 42. if side == 'west' else box.right + 42.,
                              point[1] + displacement)
                    if not box.y + 42. <= escape[1] <= box.bottom - 42.:
                        continue
                if coverage == 'local':
                    nearby = local_nearby
                elif side in {'north', 'south'}:
                    nearby = [(x, y) for _, (x, y) in other_centres
                              if min(point[0], escape[0]) - span <= x <=
                                 max(point[0], escape[0]) + span and
                                 min(point[1], escape[1]) - 180. <= y <=
                                 max(point[1], escape[1]) + 180.]
                else:
                    nearby = [(x, y) for _, (x, y) in other_centres
                              if min(point[1], escape[1]) - span <= y <=
                                 max(point[1], escape[1]) + span and
                                 min(point[0], escape[0]) - 180. <= x <=
                                 max(point[0], escape[0]) + 180.]
                obstacles = [Rect(x - detour_half_width, y - detour_half_width,
                                  2 * detour_half_width, 2 * detour_half_width)
                             for x, y in nearby]
                try:
                    path = route_manhattan(point, escape, obstacles=obstacles,
                                           clearance=2., corner_radius=8.,
                                           lane_pitch=18., max_grid_points=80000,
                                           max_expansions=125000).points
                except LayoutError:
                    continue
                if exits_declared_side(path) and clears_all_known_pads(path):
                    if path not in candidates:
                        candidates.append(path)
    if candidates:
        return tuple(candidates)
    raise LayoutError(reference + ': no source-side routed escape clear of sourced contact centres')


def _source_escape(point: tuple[float, float], side: str, box: Rect,
                   placement, reference: str) -> tuple[tuple[float, float], ...]:
    return _source_escape_candidates(point, side, box, placement, reference)[0]


def _device_escape_candidates(anchor: tuple[float, float], side: str, body: Rect,
                              endpoint_key: str, ports: dict) -> tuple[tuple[tuple[float, float], ...], ...]:
    """Offer disjoint escapes along a device border without crossing its pins."""
    others = [entry[0] for key, entry in ports.items()
              if key != endpoint_key and entry[2] == body]
    result = []
    for offset in (0., 28., -28., 44., -44., 60., -60., 90., -90.):
        jog = (anchor[0], anchor[1] + offset)
        if not body.y + 18. <= jog[1] <= body.bottom - 18.:
            continue
        if any(abs(other[0] - anchor[0]) < .01 and
               min(anchor[1], jog[1]) - 22. < other[1] < max(anchor[1], jog[1]) + 22.
               for other in others):
            continue
        # A connector shell projects 28 units beyond the card; the field
        # router inflates that visible obstacle by 9 + 8 more units. Its
        # endpoint must therefore clear at least 45 units from the card.
        for distance in (68., 96., 140., 180.):
            escape = escape_point(jog, side, distance)
            result.append((anchor, escape) if offset == 0. else (anchor, jog, escape))
    if not result:
        raise LayoutError(endpoint_key + ': no device-side escape clear of other contacts')
    return tuple(result)


def _prefix_clear_of_reserved(prefix: tuple[tuple[float, float], ...],
                              reserved: list, net_id: str | None) -> bool:
    from wiring_primitives import _intersections
    return all(not _intersections(first, last, reserved, net_id, frozenset())[0]
               for first, last in zip(prefix, prefix[1:]))


def _endpoint_escape_options(endpoint_key: str, node: dict, contact: dict,
                             layout: dict, maps: dict | None, artwork: list,
                             reserved: list, net_id: str | None, *,
                             include_detours: bool,
                             label_rects: tuple[Rect, ...] = (),
                             planned_leads: dict[str, tuple] | None = None,
                             planned_device_leads: dict[tuple[int, str], tuple] | None = None) -> list[tuple]:
    """Keep the exact terminal anchor while varying only clear page leads."""
    reference = _terminal_reference(node, contact) if is_controller_node(node) else None
    if maps is not None and reference and reference in maps:
        placed = maps[reference]
        owner = next((item for item in artwork if reference in item.contacts), None)
        if owner is None:
            raise LayoutError(endpoint_key + ': controller artwork owner missing')
        anchor = placed.anchor
        prefixes = ((planned_leads[reference],)
                    if planned_leads is not None and reference in planned_leads else
                    _source_escape_candidates(anchor, placed.source.side,
                        Rect(*owner.bounds), owner, reference,
                        include_detours=include_detours))
        kind = 'sourced-controller'
    else:
        port = layout['ports'].get(endpoint_key)
        if port is None:
            if reference:
                raise ArtworkError(endpoint_key + ': source artwork lacks ' + reference)
            raise LayoutError(endpoint_key + ': endpoint card missing')
        anchor, side, body, _, _ = port
        planned = ((planned_device_leads or {}).get((layout['index'], endpoint_key)))
        prefixes = ((planned,) if planned is not None else
                    _device_escape_candidates(anchor, side, body,
                                              endpoint_key, layout['ports']))
        kind = ('schematic-controller-contact' if maps is None and is_controller_node(node)
                else 'unsourced-controller-boundary' if is_controller_node(node)
                else 'device-contact')
    options = [(anchor, prefix[-1], reference, kind, prefix) for prefix in prefixes
               if _prefix_clear_of_reserved(prefix, reserved, net_id)
               and not any(box.inflated(17.).contains(prefix[-1]) or
                           any(box.inflated(17.).blocks(first, last)
                               for first, last in zip(prefix, prefix[1:]))
                           for box in label_rects)]
    if not options:
        raise LayoutError(endpoint_key +
                          ': no escape clear of conductors or reserved source-bank labels')
    return options


def _panel_field_obstacles(layout: dict, other_panels: list[Rect],
                           artwork: list,
                           label_rects: tuple[Rect, ...] = ()) -> list[Rect]:
    """Use the same visible shell and text barriers in planning and routing."""
    bodies = [body.inflated(28.) for _, body in layout['nodes'].values()]
    caption = Rect(layout['rect'].x + 25., layout['footer_y'] - 9.,
                   layout['rect'].width - 50.,
                   layout['rect'].bottom - layout['footer_y'] - 15.)
    header = Rect(layout['rect'].x + 25., layout['rect'].y + 14.,
                  layout['rect'].width - 50., 118.)
    return (bodies + [header, caption] + other_panels +
            [Rect(*placed.bounds) for placed in artwork] + list(label_rects))


def _plan_device_leads(guide: dict, views: list[EdgeView], layouts: dict,
                       source_refs: dict, artwork: list, reserved: list, *,
                       schematic: bool = False) -> dict[tuple[int, str], tuple]:
    """Reserve each future named device-pin escape before routing other wires."""
    from wiring_primitives import ReservedWire
    networks = _net_ids(views, source_refs)
    panel_obstacles = {
        index: _panel_field_obstacles(
            layout, [other['rect'] for other_index, other in layouts.items()
                     if other_index != index], artwork)
        for index, layout in layouts.items()
    }
    candidates = {}
    for view in views:
        if (_effective_open(view, source_refs) or
                (is_controller_node(view.source_node) and
                 is_controller_node(view.target_node)) or
                (_wire_role(view.edge, guide['wire_panels'][view.panel_index])[0] == 'ground'
                 and _paired_return_domain(
                     view, guide['wire_panels'][view.panel_index]) is not None)):
            continue
        layout = layouts[view.panel_index]
        for key, node in ((view.edge['from'], view.source_node),
                          (view.edge['to'], view.target_node)):
            if is_controller_node(node) and not schematic:
                continue
            identity = (view.panel_index, key)
            if identity in candidates:
                if candidates[identity][0] != networks[view.identifier]:
                    raise LayoutError(key + ': one device contact has conflicting graph nets')
                continue
            port = layout['ports'].get(key)
            if port is None:
                raise LayoutError(key + ': device port missing during lead plan')
            anchor, side, body, _, _ = port
            # The field router adds 9 units straight clearance and an 8-unit
            # fillet margin. Check each proposed endpoint against that exact
            # protected geometry before reserving one lead globally.
            field_obstacles = panel_obstacles[view.panel_index]
            owner_shell = body.inflated(28.)
            protected = [obstacle.inflated(17.) for obstacle in field_obstacles]
            forbidden = [obstacle.inflated(17.) for obstacle in field_obstacles
                         if obstacle != owner_shell]
            options = tuple(prefix for prefix in _device_escape_candidates(
                anchor, side, body, key, layout['ports'])
                if not any(obstacle.contains(prefix[-1]) for obstacle in protected)
                and not any(obstacle.blocks(first, last)
                           for obstacle in forbidden
                           for first, last in zip(prefix, prefix[1:])))
            if not options:
                raise LayoutError(key + ': no device lead clear of exact field-router obstacles')
            candidates[identity] = (networks[view.identifier], options)
    chosen = {}
    ordered = sorted(candidates, key=lambda key:
                     (len(candidates[key][1]), key[0], key[1]))
    first_reserved = len(reserved)
    def reserve(identity: tuple[int, str], prefix: tuple) -> None:
        net = candidates[identity][0]
        chosen[identity] = prefix
        reserved.append(ReservedWire('future-device:' + str(identity[0]) + ':' + identity[1],
                                     prefix, net))
    blocked_identity = None
    for identity in ordered:
        net, options = candidates[identity]
        prefix = next((value for value in options
                       if _prefix_clear_of_reserved(value, reserved, net)), None)
        if prefix is None:
            blocked_identity = identity
            break
        reserve(identity, prefix)
    if blocked_identity is None:
        return chosen
    del reserved[first_reserved:]
    chosen.clear()
    attempts = 0
    attempt_limit = 20000
    exhausted = False
    def allocate(position: int) -> bool:
        nonlocal attempts, exhausted
        if exhausted:
            return False
        if position == len(ordered):
            return True
        identity = ordered[position]
        net, options = candidates[identity]
        for prefix in options:
            attempts += 1
            if attempts > attempt_limit:
                exhausted = True
                return False
            if not _prefix_clear_of_reserved(prefix, reserved, net):
                continue
            reserve(identity, prefix)
            if allocate(position + 1):
                return True
            reserved.pop()
            del chosen[identity]
        return False
    if allocate(0):
        return chosen
    del reserved[first_reserved:]
    reason = ('bounded lead allocation budget exhausted' if exhausted else
              'no compatible reservation among qualified device leads')
    raise LayoutError(blocked_identity[1] + ': ' + reason +
                      f' after {attempts} assignments; physical routability unresolved')


def _plan_controller_leads(guide: dict, views: list[EdgeView], maps: dict,
                           artwork: list, reserved: list, *,
                           label_rects: tuple[Rect, ...] = (),
                           preferred_leads: dict[str, tuple] | None = None) -> dict[str, tuple]:
    """Keep one exact source-pad escape available for each future field wire.

    A previous panel's route may cross a lead orthogonally, but cannot end,
    bend or run along it. The planned lead is reused by every edge on the
    same exact controller contact; graph-net identity still controls joins.
    """
    from wiring_primitives import ReservedWire
    networks = _net_ids(views, maps)
    candidate_leads = {}
    for view in views:
        if (_effective_open(view, maps) or
                (is_controller_node(view.source_node) and
                 is_controller_node(view.target_node))):
            continue
        if (_wire_role(view.edge, guide['wire_panels'][view.panel_index])[0] == 'ground'
                and _paired_return_domain(
                    view, guide['wire_panels'][view.panel_index]) is not None):
            continue
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)):
            if not is_controller_node(node):
                continue
            reference = _terminal_reference(node, contact)
            if reference not in maps:
                continue
            if reference in candidate_leads:
                if candidate_leads[reference][1] != networks[view.identifier]:
                    raise LayoutError(reference + ': one physical contact has conflicting graph nets')
                continue
            owner = next((item for item in artwork if reference in item.contacts), None)
            if owner is None:
                raise LayoutError(reference + ': source artwork owner missing')
            placed = maps[reference]
            source_args = (placed.anchor, placed.source.side, Rect(*owner.bounds),
                           owner, reference)
            prefixes = _source_escape_candidates(*source_args)
            candidate_leads[reference] = (source_args, networks[view.identifier],
                                          prefixes)
    ordered = sorted(candidate_leads,
                     key=lambda reference: (len(candidate_leads[reference][2]), reference))
    first_reserved = len(reserved)
    selected: dict[str, tuple] = {}
    detour_cache: dict[str, tuple] = {}

    def options_for(reference: str):
        source_args, _, short = candidate_leads[reference]
        seen = set()
        preferred = (preferred_leads or {}).get(reference)
        if preferred is not None:
            seen.add(preferred)
            if not any(box.inflated(17.).contains(preferred[-1]) or
                       any(box.inflated(17.).blocks(first, last)
                           for first, last in zip(preferred, preferred[1:]))
                       for box in label_rects):
                yield preferred
        for prefix in short:
            if prefix in seen:
                continue
            seen.add(prefix)
            if not any(box.inflated(17.).contains(prefix[-1]) or
                       any(box.inflated(17.).blocks(first, last)
                           for first, last in zip(prefix, prefix[1:]))
                       for box in label_rects):
                yield prefix
        if reference not in detour_cache:
            detour_cache[reference] = _source_escape_candidates(
                *source_args, include_detours=True)
        for prefix in detour_cache[reference]:
            if prefix not in seen and not any(
                    box.inflated(17.).contains(prefix[-1]) or
                    any(box.inflated(17.).blocks(first, last)
                        for first, last in zip(prefix, prefix[1:]))
                    for box in label_rects):
                yield prefix

    def reserve(reference: str, prefix: tuple) -> None:
        net_id = candidate_leads[reference][1]
        selected[reference] = prefix
        reserved.append(ReservedWire('planned-controller:' + reference,
                                     prefix, net_id))

    # Common sparse cases use the first clear lead. Dense Prime headers need
    # the ability to revisit an earlier visual exit instead of sealing a
    # later exact pad. A bounded search only starts if that first pass fails.
    blocked_reference = None
    for reference in ordered:
        net_id = candidate_leads[reference][1]
        prefix = next((option for option in options_for(reference)
                       if _prefix_clear_of_reserved(option, reserved, net_id)), None)
        if prefix is None:
            blocked_reference = reference
            break
        reserve(reference, prefix)
    if blocked_reference is None:
        return selected

    del reserved[first_reserved:]
    selected.clear()
    attempts = 0
    attempt_limit = 20000
    is_budget_exhausted = False
    def allocate(position: int) -> bool:
        nonlocal attempts, is_budget_exhausted
        if is_budget_exhausted:
            return False
        if position == len(ordered):
            return True
        reference = ordered[position]
        net_id = candidate_leads[reference][1]
        for prefix in options_for(reference):
            attempts += 1
            if attempts > attempt_limit:
                is_budget_exhausted = True
                return False
            if not _prefix_clear_of_reserved(prefix, reserved, net_id):
                continue
            reserve(reference, prefix)
            if allocate(position + 1):
                return True
            reserved.pop()
            del selected[reference]
        return False

    if allocate(0):
        return selected
    del reserved[first_reserved:]
    reason = ('bounded source-lead search budget exhausted' if is_budget_exhausted else
              'no compatible route among generated source-lead candidates')
    raise LayoutError(blocked_reference + ': ' + reason +
                      f' after {attempts} assignments; physical routability unresolved')


def _exact_endpoint_anchor(endpoint_key: str, node: dict, contact: dict,
                           layout: dict, maps: dict | None) -> tuple:
    """Resolve a named return symbol without requiring a drawable wire lead."""
    reference = _terminal_reference(node, contact) if is_controller_node(node) else None
    if maps is not None and reference in maps:
        return maps[reference].anchor, reference, 'sourced-controller'
    port = layout['ports'].get(endpoint_key)
    if port is None:
        if reference:
            raise ArtworkError(endpoint_key + ': source artwork lacks ' + reference)
        raise LayoutError(endpoint_key + ': endpoint card missing')
    kind = ('schematic-controller-contact' if maps is None and is_controller_node(node)
            else 'unsourced-controller-boundary' if is_controller_node(node)
            else 'device-contact')
    return port[0], reference, kind


def _route_coordinate_windows(start: tuple[float, float],
                              finish: tuple[float, float],
                              bounds: tuple[float, float]) -> tuple[Rect | None, ...]:
    """Retain the established full grid, then try smaller local grids.

    A local grid is only an A* coordinate search area. The primitive still
    checks every obstacle and reserved conductor on each candidate segment.
    The first None retains the established page-wide coordinate grid, bounded
    by its existing finite point and expansion budgets.
    """
    windows: list[Rect | None] = [None]
    for margin in (700., 1800.):
        left = max(0., min(start[0], finish[0]) - margin)
        top = max(0., min(start[1], finish[1]) - margin)
        right = min(bounds[0], max(start[0], finish[0]) + margin)
        bottom = min(bounds[1], max(start[1], finish[1]) + margin)
        if right > left and bottom > top:
            window = Rect(left, top, right - left, bottom - top)
            if window not in windows:
                windows.append(window)
    return tuple(windows)


def _effective_open(view: EdgeView, source_refs) -> bool:
    if view.edge['state'] == 'open':
        return True
    return source_refs is not None and any(
        is_controller_node(node) and
        _terminal_reference(node, contact) not in source_refs
        for node, contact in ((view.source_node, view.source_contact),
                              (view.target_node, view.target_contact)))


def _net_ids(views: list[EdgeView], source_refs) -> dict[str, str | None]:
    parent = {}
    def root(key: str) -> str:
        parent.setdefault(key, key)
        while parent[key] != key:
            parent[key] = parent[parent[key]]
            key = parent[key]
        return key
    def endpoint(view: EdgeView, node: dict, contact: dict, label: str) -> str:
        reference = _terminal_reference(node, contact) if is_controller_node(node) else None
        return ('controller:' + reference) if reference else f'panel-{view.panel_index + 1}:{label}'
    for view in views:
        if _effective_open(view, source_refs):
            continue
        left = root(endpoint(view, view.source_node, view.source_contact, view.edge['from']))
        right = root(endpoint(view, view.target_node, view.target_contact, view.edge['to']))
        parent[right] = left
    return {view.identifier:
            (root(endpoint(view, view.source_node, view.source_contact,
                           view.edge['from'])) if not _effective_open(view, source_refs) else None)
            for view in views}


def _physical_terminal_id(view: EdgeView, endpoint_key: str,
                          node: dict, contact: dict) -> str:
    reference = _terminal_reference(node, contact) if is_controller_node(node) else None
    return ('controller:' + reference if reference else
            f'panel-{view.panel_index + 1}:{endpoint_key}')


def _clip_open_stub(prefix: tuple[tuple[float, float], ...], length: float = 22.) -> tuple:
    """Use only a short visible lead; there is no hidden source-to-target route."""
    points = [prefix[0]]
    left = length
    for first, last in zip(prefix, prefix[1:]):
        distance = abs(last[0] - first[0]) + abs(last[1] - first[1])
        if distance <= 0.:
            continue
        travel = min(left, distance)
        points.append((first[0] + (last[0] - first[0]) * travel / distance,
                       first[1] + (last[1] - first[1]) * travel / distance))
        left -= travel
        if left <= .001:
            break
    if len(points) < 2 or left > length - 12.:
        raise LayoutError('OPEN contact has no readable terminal stub')
    return tuple(points)


def _plan_open_terminals(views: list[EdgeView], layouts: dict,
                         maps: dict | None, artwork: list, source_refs) -> tuple[dict, dict, list]:
    """Reserve one short stub per physical OPEN contact before field routing."""
    from wiring_primitives import ReservedWire, _intersections
    active = {_physical_terminal_id(view, key, node, contact)
              for view in views if not _effective_open(view, source_refs) and
              not (is_controller_node(view.source_node) and
                   is_controller_node(view.target_node))
              for key, node, contact in ((view.edge['from'], view.source_node, view.source_contact),
                                         (view.edge['to'], view.target_node, view.target_contact))}
    assignments = {}
    terminals = {}
    reservations = []
    for view in views:
        if (not _effective_open(view, source_refs) or
                (is_controller_node(view.source_node) and
                 is_controller_node(view.target_node))):
            continue
        layout = layouts[view.panel_index]
        for side, key, node, contact in (
                ('from', view.edge['from'], view.source_node, view.source_contact),
                ('to', view.edge['to'], view.target_node, view.target_contact)):
            identity = _physical_terminal_id(view, key, node, contact)
            assignments[(view.identifier, side)] = identity
            if identity in terminals:
                continue
            reference = _terminal_reference(node, contact) if is_controller_node(node) else None
            is_unsourced = (source_refs is not None and is_controller_node(node) and
                            reference not in source_refs)
            if is_unsourced:
                anchor, kind = None, 'unsourced-controller-boundary'
            else:
                anchor, reference, kind = _exact_endpoint_anchor(key, node, contact,
                                                                   layout, maps)
            record = {'identity': identity, 'anchor': anchor, 'reference': reference,
                      'geometry': kind, 'stub_points': None,
                      'context': ('unresolved-source-contact' if is_unsourced else
                                  'existing-non-open-contact' if identity in active else
                                  'open-terminal-stub')}
            if identity not in active and not is_unsourced:
                prefix_groups = []
                if maps is not None and reference in maps:
                    placed = maps[reference]
                    owner = next((item for item in artwork if reference in item.contacts), None)
                    if owner is None:
                        raise LayoutError(identity + ': sourced controller owner missing')
                    source_args = (anchor, placed.source.side, Rect(*owner.bounds),
                                   owner, reference)
                    prefix_groups.append(_source_escape_candidates(*source_args))
                else:
                    port = layout['ports'].get(key)
                    if port is None:
                        raise LayoutError(identity + ': schematic contact missing')
                    prefix_groups.append(_device_escape_candidates(anchor, port[1],
                        port[2], key, layout['ports']))
                tried_stubs = set()
                detours_loaded = False
                while prefix_groups:
                    prefixes = prefix_groups.pop(0)
                    for prefix in prefixes:
                        stub = _clip_open_stub(prefix)
                        if stub in tried_stubs:
                            continue
                        tried_stubs.add(stub)
                        segments = tuple(zip(stub, stub[1:]))
                        contacts = [_intersections(first, last, reservations,
                                                   None, frozenset())
                                    for first, last in segments]
                        if any(blocked or crossings for blocked, crossings in contacts):
                            continue
                        record['stub_points'] = stub
                        reservations.append(ReservedWire('open-contact:' + identity,
                                                          stub, None))
                        break
                    if record['stub_points'] is not None:
                        break
                    if (maps is not None and reference in maps and
                            not prefix_groups and not detours_loaded):
                        detours_loaded = True
                        prefix_groups.append(_source_escape_candidates(
                            *source_args, include_detours=True))
                if record['stub_points'] is None:
                    raise LayoutError(identity + ': no independent OPEN terminal stub')
            terminals[identity] = record
    return assignments, terminals, reservations


def _open_boundary_svg(view: EdgeView, panel: dict, index: int, assignments: dict,
                       terminals: dict, drawn: set[str], *,
                       is_main: bool) -> tuple[str, dict]:
    from controller_artwork import source_palette
    role, basis = _wire_role(view.edge, panel)
    color = source_palette('wire')[role]
    result = [f'<g id="{view.identifier}" data-evidence-state="open" '
              f'data-electrical-role="{role}" data-display-form="open-boundary">',
              '<title>' + html.escape(view.edge['function'] + ' · ' +
                                      view.identifier + ' · OPEN; no wire to install') + '</title>']
    segments = []
    paths = []
    identities = {}
    reused = []
    endpoint_context = {}
    for side in ('from', 'to'):
        identity = assignments[(view.identifier, side)]
        terminal = terminals[identity]
        identities[side] = identity
        points = terminal['stub_points']
        if points is None or identity in drawn:
            disposition = (terminal['context'] if points is None else
                           'identical-open-stub-already-visible')
            endpoint_context[side] = {'terminal_id': identity,
                                      'anchor': (list(terminal['anchor'])
                                                 if terminal['anchor'] is not None else None),
                                      'disposition': disposition}
            reused.append({'side': side, 'terminal_id': identity,
                           'basis': disposition})
            continue
        endpoint_context[side] = {'terminal_id': identity,
                                  'anchor': list(terminal['anchor']),
                                  'disposition': 'visible-open-stub'}
        path = 'M' + ' L'.join(f'{x:.2f} {y:.2f}' for x, y in points)
        result.append(f'<path d="{path}" fill="none" stroke="#fffef9" '
                      'stroke-width="7.7" stroke-linecap="round" stroke-linejoin="round"/>')
        result.append(f'<path class="field-conductor" d="{path}" fill="none" '
                      f'stroke="{color}" stroke-width="3.7" stroke-linecap="round" '
                      'stroke-linejoin="round"/>')
        paths.append(path)
        segments.extend(([list(first), list(last)]
                         for first, last in zip(points, points[1:])))
        drawn.add(identity)
    result.append('</g>')
    source = terminals[identities['from']]
    target = terminals[identities['to']]
    evidence = {'connection_id': view.identifier, 'display_label': view.edge['function'],
                'state': 'open', 'electrical_role': role, 'color': color,
                'display_form': 'open-boundary', 'points': [], 'paths': paths,
                'visible_stub_segments': segments, 'open_terminal_ids': identities,
                'open_endpoint_context': endpoint_context,
                'reused_terminal_context': reused,
                'from_anchor': (list(source['anchor']) if source['anchor'] is not None else None),
                'to_anchor': (list(target['anchor']) if target['anchor'] is not None else None),
                'visible_caption_required': True,
                'caption_status': 'OPEN — no wire to install; terminals are not joined',
                'panel_index': index, 'diagram_variant': view.panel_role,
                'graph_state': view.edge['state'], 'render_state': 'open',
                'open_reason': ('authored-open' if view.edge['state']=='open' else
                                'unsourced-controller-contact'),
                'role_basis': basis, 'net_id': None, 'graph_net_id': None,
                'from_endpoint': view.edge['from'], 'to_endpoint': view.edge['to'],
                'from_contact_label': view.source_contact['label'],
                'to_contact_label': view.target_contact['label'],
                'from_device': view.source_node['title'],
                'to_device': view.target_node['title'],
                'from_controller_reference': source['reference'],
                'to_controller_reference': target['reference'],
                'from_geometry': source['geometry'], 'to_geometry': target['geometry'],
                'junctions_and_crossings': [], 'router_expansions': 0,
                'main_selected': is_main, 'external_conductor': False}
    return ''.join(result), evidence


def _actual_segments(record: dict) -> tuple[tuple[tuple[float, float], tuple[float, float]], ...]:
    if record['display_form'] in {'internal-board-context', 'paired-ground-symbols'}:
        return ()
    if record['display_form'] == 'open-boundary' and 'visible_stub_segments' in record:
        return tuple((tuple(first), tuple(last))
                     for first, last in record['visible_stub_segments'])
    points = [tuple(point) for point in record['points']]
    if record['display_form'] != 'open-boundary':
        return tuple(zip(points, points[1:]))
    first = abs(points[1][0] - points[0][0]) + abs(points[1][1] - points[0][1])
    last = abs(points[-1][0] - points[-2][0]) + abs(points[-1][1] - points[-2][1])
    total = abs(points[-1][0] - points[0][0]) + abs(points[-1][1] - points[0][1])
    stub = min(18., first / 4., last / 4., total / 4.)
    if stub <= 0.:
        raise LayoutError(record['connection_id'] + ': OPEN stub has no clearance')
    start_end = (points[0][0] + (points[1][0] - points[0][0]) * stub / first,
                 points[0][1] + (points[1][1] - points[0][1]) * stub / first)
    end_start = (points[-1][0] + (points[-2][0] - points[-1][0]) * stub / last,
                 points[-1][1] + (points[-2][1] - points[-1][1]) * stub / last)
    return ((points[0], start_end), (end_start, points[-1]))


def _route_panel(guide: dict, layout: dict, views: list[EdgeView], *,
                 maps: dict | None, artwork: list, other_panels: list[Rect],
                 reserved: list, bounds: tuple[float, float], open_assignments: dict,
                 open_terminals: dict, open_drawn: set[str], source_refs,
                 label_rects: tuple[Rect, ...] = (),
                 planned_leads: dict[str, tuple] | None = None,
                 planned_device_leads: dict[tuple[int, str], tuple] | None = None) -> tuple[list[str], list[dict]]:
    from wiring_primitives import (ReservedWire, clean_manhattan,
                                   escape_point, route_manhattan)
    panel = layout['panel']
    index = layout['index']
    panel_views = [view for view in views if view.panel_index == index]
    networks = _net_ids(views, source_refs)
    # Protect the full visible connector bank, which can extend 28 units
    # beyond the neutral device card. Device leads reach past this region
    # and the field router's additional 9 + 8-unit clearance.
    obstacles = _panel_field_obstacles(layout, other_panels, artwork,
                                       label_rects)
    drawing = []
    manifest = []
    # Reserve every conductor routed before this one, including earlier panels.
    # The final audit also checks source escapes outside the route search.
    for view in panel_views:
        if is_controller_node(view.source_node) and is_controller_node(view.target_node):
            source_reference = _terminal_reference(view.source_node, view.source_contact)
            target_reference = _terminal_reference(view.target_node, view.target_contact)
            is_sourced = bool(source_reference in source_refs and
                              target_reference in source_refs)
            render_state = 'open' if _effective_open(view, source_refs) else view.edge['state']
            role, role_basis = _wire_role(view.edge, panel)
            manifest.append({
                'connection_id': view.identifier,
                'display_label': view.edge['function'],
                'state': render_state,
                'electrical_role': role,
                'display_form': 'internal-board-context',
                'points': [], 'paths': [],
                'caption_status': 'Factory internal net; no external field wire',
                'panel_index': index, 'diagram_variant': view.panel_role,
                'graph_state': view.edge['state'], 'render_state': render_state,
                'role_basis': role_basis, 'net_id': None,
                'graph_net_id': networks[view.identifier],
                'from_endpoint': view.edge['from'], 'to_endpoint': view.edge['to'],
                'from_contact_label': view.source_contact['label'],
                'to_contact_label': view.target_contact['label'],
                'from_device': view.source_node['title'],
                'to_device': view.target_node['title'],
                'from_controller_reference': source_reference,
                'to_controller_reference': target_reference,
                'from_anchor': (list(maps[source_reference].anchor)
                                if maps is not None and source_reference in maps else None),
                'to_anchor': (list(maps[target_reference].anchor)
                              if maps is not None and target_reference in maps else None),
                'from_geometry': 'sourced-internal-contact' if is_sourced else 'unresolved-internal-contact',
                'to_geometry': 'sourced-internal-contact' if is_sourced else 'unresolved-internal-contact',
                'junctions_and_crossings': [], 'router_expansions': 0,
                'main_selected': maps is not None,
                'external_conductor': False,
            })
            continue
        if _effective_open(view, source_refs):
            svg, evidence = _open_boundary_svg(view, panel, index,
                open_assignments, open_terminals, open_drawn,
                is_main=maps is not None)
            drawing.append(svg)
            manifest.append(evidence)
            continue
        endpoints = ((view.edge['from'], view.source_node, view.source_contact),
                     (view.edge['to'], view.target_node, view.target_contact))
        # The escaped points are exterior to their owning bodies. Full body
        # rectangles remain barriers, including the central controller.
        graph_net = networks[view.identifier]
        display_state = view.edge['state']
        # An OPEN stub must never share a visible net merely because its
        # historical graph edge joined those endpoints.
        net = graph_net if display_state != 'open' else None
        route = None
        full_points = None
        start = finish = None
        route_error = None
        attempts = 0
        diagnostic_route = guide['id'] == 'mill-g2' and view.identifier == 'C03-001'
        diagnostic_trials = []
        tried_prefix_pairs = set()
        # A reserved future lead is a route candidate, not a sourced pad or
        # terminal change. Only an as-yet-unused terminal may release its own
        # lead for a bounded local retry; all prior actual wires stay reserved.
        replan_ids: dict[str, tuple[str, str | tuple[int, str]]] = {}
        for endpoint_key, node, contact in endpoints:
            anchor, reference, _ = _exact_endpoint_anchor(
                endpoint_key, node, contact, layout, maps)
            if any(anchor in wire.points and wire.identifier.startswith('C')
                   for wire in reserved):
                continue
            if (maps is not None and reference in maps and
                    planned_leads is not None and reference in planned_leads):
                replan_ids['planned-controller:' + reference] = ('controller', reference)
            elif (planned_device_leads is not None and
                  (index, endpoint_key) in planned_device_leads):
                replan_ids['future-device:' + str(index) + ':' + endpoint_key] = (
                    'device', (index, endpoint_key))
        used_replan = False
        for replanning in (False, True):
            if replanning and not replan_ids:
                continue
            trial_reserved = ([wire for wire in reserved
                               if wire.identifier not in replan_ids]
                              if replanning else reserved)
            trial_planned_leads = dict(planned_leads or {})
            trial_planned_device_leads = dict(planned_device_leads or {})
            if replanning:
                for kind, key in replan_ids.values():
                    if kind == 'controller':
                        trial_planned_leads.pop(key, None)
                    else:
                        trial_planned_device_leads.pop(key, None)
            for include_detours in (False, True):
                try:
                    options = [_endpoint_escape_options(endpoint_key, node, contact,
                               layout, maps, artwork, trial_reserved, net,
                               include_detours=include_detours,
                               label_rects=label_rects,
                               planned_leads=trial_planned_leads,
                               planned_device_leads=trial_planned_device_leads)
                               for endpoint_key, node, contact in endpoints]
                except LayoutError as error:
                    route_error = error
                    continue
                combinations = sorted(((left, right)
                                       for left in range(min(len(options[0]), 16))
                                       for right in range(min(len(options[1]), 16))),
                                      key=lambda pair: (sum(pair), pair[0], pair[1]))
                for left, right in combinations[:96]:
                    trial_start, trial_finish = options[0][left], options[1][right]
                    pair_key = (replanning, tuple(trial_start[4]),
                                tuple(trial_finish[4]))
                    if pair_key in tried_prefix_pairs:
                        continue
                    tried_prefix_pairs.add(pair_key)
                    own_escapes = [ReservedWire(view.identifier + '-source-escape',
                                               tuple(trial_start[4]), net),
                                   ReservedWire(view.identifier + '-target-escape',
                                               tuple(trial_finish[4]), net)]
                    for coordinate_window in _route_coordinate_windows(
                            trial_start[1], trial_finish[1], bounds):
                        attempts += 1
                        try:
                            candidate = route_manhattan(
                                trial_start[1], trial_finish[1],
                                obstacles=obstacles,
                                reserved=trial_reserved + own_escapes,
                                net_id=net,
                                shared_terminals=(trial_start[1], trial_finish[1]),
                                clearance=9., corner_radius=8., lane_pitch=18.,
                                max_grid_points=180000, max_expansions=180000,
                                virtual_grid_crossings=True,
                                start_lead_previous=trial_start[4][-2],
                                end_lead_next=trial_finish[4][-2],
                                coordinate_window=coordinate_window)
                            candidate_points = clean_manhattan(
                                trial_start[4][:-1] + candidate.points +
                                tuple(reversed(trial_finish[4][:-1])))
                            if any(not (0 <= x <= bounds[0] and 0 <= y <= bounds[1])
                                   for x, y in candidate_points):
                                raise LayoutError('Candidate left the drawing bounds')
                            if any(box.inflated(7.).blocks(first, last)
                                   for box in label_rects
                                   for first, last in zip(candidate_points,
                                                          candidate_points[1:])):
                                raise LayoutError(view.identifier +
                                                  ': complete wire touches reserved source-bank label')
                        except LayoutError as error:
                            if diagnostic_route and len(diagnostic_trials) < 1200:
                                diagnostic_trials.append({
                                    'attempt': attempts, 'replanning': replanning,
                                    'include_detours': include_detours,
                                    'window': (_diagnostic_rect(coordinate_window)
                                               if coordinate_window is not None else None),
                                    'start_prefix': [list(p) for p in trial_start[4]],
                                    'end_prefix': [list(p) for p in trial_finish[4]],
                                    'error': str(error)})
                            route_error = error
                            start, finish = trial_start, trial_finish
                            continue
                        start, finish, route, full_points = (
                            trial_start, trial_finish, candidate, candidate_points)
                        used_replan = replanning
                        break
                    if route is not None:
                        break
                if route is not None:
                    break
            if route is not None:
                break
        if route is not None and used_replan:
            # Commit a successful trial atomically. Failed alternatives never
            # remove future terminal corridors or prior actual conductors.
            for endpoint, option in zip(endpoints, (start, finish)):
                endpoint_key, node, contact = endpoint
                reference = (_terminal_reference(node, contact)
                             if is_controller_node(node) else None)
                identity = ('planned-controller:' + reference
                            if maps is not None and reference in maps else
                            'future-device:' + str(index) + ':' + endpoint_key)
                if identity not in replan_ids:
                    continue
                reserved[:] = [wire for wire in reserved
                               if wire.identifier != identity]
                reserved.append(ReservedWire(identity, tuple(option[4]), net))
                kind, key = replan_ids[identity]
                if kind == 'controller':
                    planned_leads[key] = tuple(option[4])
                else:
                    planned_device_leads[key] = tuple(option[4])
        if route is None:
            paired_domain = (_paired_return_domain(view, panel)
                             if display_state != 'open' else None)
            if paired_domain is not None:
                from wiring_primitives import paired_ground_svg
                # This identifier scopes the net to this one graph edge. It
                # does not bond terminals that merely share the word GND.
                named_net = guide['id'] + ':' + view.identifier + ':' + paired_domain
                source_anchor, source_reference, source_kind = _exact_endpoint_anchor(
                    *endpoints[0], layout, maps)
                target_anchor, target_reference, target_kind = _exact_endpoint_anchor(
                    *endpoints[1], layout, maps)
                svg, evidence = paired_ground_svg(view.identifier,
                    start=source_anchor, end=target_anchor,
                    start_net=named_net, end_net=named_net,
                    start_label=view.source_node['title'] + ' · ' + view.source_contact['label'],
                    end_label=view.target_node['title'] + ' · ' + view.target_contact['label'],
                    state=view.edge['state'], domain_kind=paired_domain,
                    start_inline_label=not (maps is not None and
                                            source_reference in maps and
                                            guide['selected_controller'] == 'prime'),
                    end_inline_label=not (maps is not None and
                                          target_reference in maps and
                                          guide['selected_controller'] == 'prime'))
                drawing.append(svg)
                evidence.update({
                    'display_label': view.edge['function'],
                    'graph_state': view.edge['state'], 'render_state': display_state,
                    'panel_index': index, 'diagram_variant': view.panel_role,
                    'graph_net_id': graph_net, 'net_id': None,
                    'role_basis': 'explicit-named-return-pair-on-route-failure',
                    'from_endpoint': view.edge['from'], 'to_endpoint': view.edge['to'],
                    'from_contact_label': view.source_contact['label'],
                    'to_contact_label': view.target_contact['label'],
                    'from_device': view.source_node['title'],
                    'to_device': view.target_node['title'],
                    'from_controller_reference': source_reference,
                    'to_controller_reference': target_reference,
                    'from_geometry': source_kind, 'to_geometry': target_kind,
                    'junctions_and_crossings': [], 'router_expansions': 0,
                    'route_candidates_attempted': attempts,
                    'main_selected': maps is not None,
                    'external_conductor': True,
                    'representation': 'two explicitly named same-domain return symbols',
                    'route_failure_for_representation': str(route_error),
                })
                manifest.append(evidence)
                continue
            if diagnostic_route:
                _layout_diagnostic('field-route-failure', profile=guide['id'],
                    connection_id=view.identifier, candidate_net_id=net, from_endpoint=view.edge['from'],
                    to_endpoint=view.edge['to'], bounds=list(bounds),
                    attempts=attempts, trials=diagnostic_trials,
                    trials_truncated=attempts > len(diagnostic_trials),
                    released_future_ids=list(replan_ids),
                    obstacles=[_diagnostic_rect(r) for r in obstacles],
                    label_rects=[_diagnostic_rect(r) for r in label_rects],
                    reservations=_diagnostic_reservations(reserved),
                    trial_reservations=_diagnostic_reservations(trial_reserved))
            raise LayoutError(
                f'{guide["id"]}:{view.identifier} {view.edge["from"]} → '
                f'{view.edge["to"]}: {attempts} escaped field routes failed; '
                f'last endpoints {start[1] if start else None} → '
                f'{finish[1] if finish else None}: {route_error}') from route_error
        points = full_points
        if any(not (0 <= x <= bounds[0] and 0 <= y <= bounds[1]) for x, y in points):
            raise LayoutError(view.identifier + ': route left the SVG bounds')
        role, role_basis = _wire_role(view.edge, panel)
        svg, evidence = conductor_svg(view.identifier, points=points,
            electrical_role=role, state=display_state,
            display_label=view.edge['function'], radius=route.corner_radius)
        drawing.append(svg)
        if display_state != 'open':
            reserved.append(ReservedWire(view.identifier, points, net))
        else:
            for stub_index, stub in enumerate(_actual_segments(evidence)):
                reserved.append(ReservedWire(view.identifier + '-open-' + str(stub_index),
                                             stub, None))
        evidence.update({'panel_index': index, 'diagram_variant': view.panel_role,
                         'graph_state': view.edge['state'],
                         'render_state': display_state,
                         'role_basis': role_basis, 'net_id': net,
                         'graph_net_id': graph_net,
                         'from_endpoint': view.edge['from'],
                         'to_endpoint': view.edge['to'],
                         'from_contact_label': view.source_contact['label'],
                         'to_contact_label': view.target_contact['label'],
                         'from_device': view.source_node['title'],
                         'to_device': view.target_node['title'],
                         'from_controller_reference': start[2],
                         'to_controller_reference': finish[2],
                         'from_geometry': start[3], 'to_geometry': finish[3],
                         'junctions_and_crossings': list(route.crossings),
                         'router_expansions': route.expanded_states,
                         'main_selected': maps is not None})
        manifest.append(evidence)
    return drawing, manifest


def _main_footer(guide: dict, canvas: float, main, extensions, maps: dict,
                 selected: list[EdgeView]) -> tuple[str, float]:
    from wiring_primitives import functional_legend, label_block
    y = canvas + 28.
    legend = functional_legend(62., y + 230., width=1450., columns=2)
    contacts = sorted({reference for view in selected
                       for node, contact in ((view.source_node, view.source_contact),
                                             (view.target_node, view.target_contact))
                       if is_controller_node(node)
                       for reference in [_terminal_reference(node, contact)]
                       if reference in maps})
    schedule_x = 1620.
    schedule_width = canvas + 812. - schedule_x
    gap = 28.
    max_columns = min(5, len(contacts) or 1,
                      int((schedule_width + gap) // (365. + gap)))
    if max_columns < 1:
        raise LayoutError(guide['id'] + ': footer has no readable source-contact column')
    heading = label_block('Used sourced controller contacts · exact art anchors above',
                          schedule_x, y + 18., width=schedule_width,
                          font_size=24., line_height=30., weight=700)
    choices = []
    for columns in range(1, max_columns + 1):
        cell_width = (schedule_width - gap * (columns - 1)) / columns
        per_column = math.ceil(len(contacts) / columns) if contacts else 0
        blocks = []
        bottoms = []
        for column in range(columns):
            text_x = schedule_x + column * (cell_width + gap)
            text_y = heading.bounds.bottom + 16.
            for reference in contacts[column * per_column:(column + 1) * per_column]:
                label = reference + ' · ' + maps[reference].source.function
                block = label_block(label, text_x, text_y, width=cell_width - 12.,
                                    font_size=22., line_height=30.)
                blocks.append(block)
                text_y = block.bounds.bottom + 12.
            bottoms.append(text_y)
        choices.append((max(bottoms, default=heading.bounds.bottom + 16.),
                        -columns, blocks))
    schedule_bottom, _, schedule_blocks = min(choices, key=lambda choice: choice[:2])
    detail_y = max(legend.bounds.bottom, schedule_bottom) + 55.
    footer_height = max(817., detail_y - y + 50.)
    detail = ('/machine-control-pinout-survey/machines/' + DETAIL_HREFS[guide['id']] +
              '.html#' + guide['id'] + '-centered-wiring')
    pieces = [f'<rect x="28" y="{y:.2f}" width="{canvas + 844:.2f}" '
              f'height="{footer_height:.2f}" rx="18" fill="#f4f7f2" '
              'stroke="#b0c2b4" stroke-width="2"/>',
              _svg_text('Read before wiring', 62., y + 43., 27., INK, 700),
              _svg_text('GUESS = proposed and unverified. SOURCE = reported path. OPEN = disconnected boundary.',
                        62., y + 80., 20., INK),
              _svg_text('A wire crossing is not a junction unless a dark dot marks the same authored graph net.',
                        62., y + 110., 19., INK),
              _svg_text('Source drawing gives contact location, not fitted cable, rating, firmware or safe-machine qualification.',
                        62., y + 140., 19., INK),
              _svg_text(('Avid field 24 V, host logic return, VFD analog common and VFD DCM are separate domains.'
                         if guide['id'] == 'mill-avid-ex-3' else
                         'Keep each named supply and return domain separate until its source contract proves a join.'),
                        62., y + 166., 19., INK),
              _svg_text(('Prime pad chips identify exact contacts; solid grey connector-bank locators are annotations, not conductors.'
                         if guide['selected_controller'] == 'prime' else
                         'Controller border pills identify sourced field contacts; contact schedules give their exact names.'),
                        62., y + 193., 18., INK),
              legend.svg,
              f'<a href="{html.escape(detail, quote=True)}" target="_top">',
              _svg_text('Open detailed connection schedule, sources and alternatives ↗',
                        62., detail_y, 21., '#155c9a', 700), '</a>',
              heading.svg]
    pieces.extend(block.svg for block in schedule_blocks)
    return ''.join(pieces), footer_height


def _audit_conductor_paths(manifest: list[dict]) -> list[tuple[float, float]]:
    """Reject unintended contact, including source escapes outside the router.

    Separate nets may cross at right angles away from a terminal or bend.
    A physical join requires an identical net inferred from exact authored
    endpoints. Junction dots are returned for a final pass above every halo.
    """
    junctions = set()
    for left_index, left in enumerate(manifest):
        for right in manifest[left_index + 1:]:
            is_shared_net = bool(left['net_id'] and left['net_id'] == right['net_id'])
            for a, b in _actual_segments(left):
                for c, d in _actual_segments(right):
                    if a[1] == b[1] and c[1] == d[1]:
                        if a[1] != c[1]:
                            continue
                        low, high = max(min(a[0], b[0]), min(c[0], d[0])), min(max(a[0], b[0]), max(c[0], d[0]))
                        point = (low, a[1])
                    elif a[0] == b[0] and c[0] == d[0]:
                        if a[0] != c[0]:
                            continue
                        low, high = max(min(a[1], b[1]), min(c[1], d[1])), min(max(a[1], b[1]), max(c[1], d[1]))
                        point = (a[0], low)
                    else:
                        horizontal = (a, b) if a[1] == b[1] else (c, d)
                        vertical = (c, d) if a[1] == b[1] else (a, b)
                        point = (vertical[0][0], horizontal[0][1])
                        if not (min(horizontal[0][0], horizontal[1][0]) <= point[0] <= max(horizontal[0][0], horizontal[1][0]) and
                                min(vertical[0][1], vertical[1][1]) <= point[1] <= max(vertical[0][1], vertical[1][1])):
                            continue
                        if is_shared_net:
                            junctions.add(point)
                        elif point in (a, b, c, d):
                            raise LayoutError('Unrelated wires touch at a bend or terminal ' +
                                              str(point) + ': ' + left['connection_id'] +
                                              ' / ' + right['connection_id'])
                        continue
                    if low > high:
                        continue
                    if not is_shared_net:
                        raise LayoutError('Unrelated wires overlap/touch at ' +
                                          str(point) + ': ' + left['connection_id'] +
                                          ' / ' + right['connection_id'])
                    junctions.add(point)
    return sorted(junctions)


def render_centered_wiring(guide: dict, *, panel_indices: set[int] | None = None) -> str:
    """Render the selected full device graph around actual controller geometry.

    Explicit alternatives and superseded panels are detailed figures; every
    remaining graph edge, including supply→interface→load continuations, is
    represented in this main square. Failure to place or route fails loudly.
    """
    views = _views(guide)
    selected = ([view for view in views if _main_selected(view)]
                if panel_indices is None else
                [view for view in views if view.panel_index in panel_indices])
    heading = ('selected source-bound wiring' if panel_indices is None else
               'exclusive source-bound circuit alternative')
    canvas, main, extensions, maps, layouts = _layout_main(guide, selected)
    all_rects = {index: layout['rect'] for index, layout in layouts.items()}
    footer_svg, footer_height = _main_footer(guide, canvas, main, extensions,
                                             maps, selected)
    svg_width = canvas + 880.
    svg_height = max(canvas + 880., canvas + 28. + footer_height + 35.)
    pieces = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{int(svg_width)}" '
              f'height="{int(svg_height)}" viewBox="0 0 {int(svg_width)} {int(svg_height)}" '
              f'role="img" aria-label="{html.escape(guide["title"], quote=True)} complete {html.escape(heading, quote=True)}">',
              f'<rect width="{int(svg_width)}" height="{int(svg_height)}" fill="#fffef9"/>',
              _svg_text(guide['title'] + ' · ' + heading,
                        75., 62., 32., INK, 700), main.svg]
    pieces.extend(card.svg for card in extensions)
    diagram_by_panel = {}
    manifest = []
    open_assignments, open_terminals, reserved = _plan_open_terminals(
        selected, layouts, maps, [main] + extensions, maps)
    planned_device_leads = _plan_device_leads(
        guide, selected, layouts, maps, [main] + extensions, reserved)
    if guide['selected_controller'] == 'prime':
        first_lead_reservation = len(reserved)
        source_first_leads: dict[str, tuple] = {}
        try:
            # This order rendered eight profiles in the preceding isolated
            # trial. Keep those working exact-pad exits before trying a wider
            # joint search for a source bank with no legal label slot.
            source_first_leads = _plan_controller_leads(
                guide, selected, maps, [main] + extensions, reserved)
            source_callouts, source_label_rects, planned_leads = _prime_source_callouts(
                guide, main, selected, layouts, canvas, reserved, extensions,
                maps, preplanned_leads=source_first_leads)
        except LayoutError as source_first_error:
            del reserved[first_lead_reservation:]
            try:
                source_callouts, source_label_rects, planned_leads = _prime_source_callouts(
                    guide, main, selected, layouts, canvas, reserved, extensions,
                    maps, preferred_leads=source_first_leads)
            except LayoutError as joint_error:
                raise LayoutError(
                    guide['id'] + ': source-first bank/lead plan failed: ' +
                    str(source_first_error) + '; joint retry failed: ' +
                    str(joint_error)) from joint_error
    else:
        source_callouts, source_label_rects, planned_leads = _prime_source_callouts(
            guide, main, selected, layouts, canvas, reserved, extensions, maps)
    open_drawn = set()
    for index in sorted(layouts):
        routes, records = _route_panel(guide, layouts[index], selected,
            maps=maps, artwork=[main] + extensions,
            other_panels=[rect for other_index, rect in all_rects.items()
                          if other_index != index],
            reserved=reserved, bounds=(canvas, canvas),
            open_assignments=open_assignments,
            open_terminals=open_terminals, open_drawn=open_drawn,
            source_refs=maps, label_rects=source_label_rects,
            planned_leads=planned_leads,
            planned_device_leads=planned_device_leads)
        diagram_by_panel[index] = routes
        manifest.extend(records)
    render_states = {record['connection_id']: record['render_state'] for record in manifest}
    internal_ids = {record['connection_id'] for record in manifest
                    if record['display_form'] == 'internal-board-context'}
    for index in sorted(layouts):
        pieces.append(_draw_panel_frame(layouts[index],
                      _panel_role(guide, index, guide['wire_panels'][index]),
                      render_states, internal_ids))
        pieces.extend(diagram_by_panel[index])
    for record in manifest:
        for first, last in _actual_segments(record):
            if any(box.inflated(7.).blocks(first, last)
                   for box in source_label_rects):
                raise LayoutError(record['connection_id'] +
                                  ': drawn wire touches a reserved source-bank label')
    for x, y in _audit_conductor_paths(manifest):
        pieces.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="7" '
                      'fill="#183f2b" stroke="#fffef9" stroke-width="2"/>')
    pieces.append(source_callouts)
    pieces.append(footer_svg)
    selected_ids = {view.identifier for view in selected}
    actual_ids = {record['connection_id'] for record in manifest}
    if selected_ids != actual_ids:
        raise LayoutError(f'{guide["id"]}: selected/drawn main route IDs differ')
    metadata = {'profile_id': guide['id'], 'layout': 'source-geometry-complete-device-graph',
                'geometry': {'viewbox': [0, 0, svg_width, svg_height],
                             'controller': list(main.bounds)},
                'controller_artwork': main.metadata,
                'extension_artwork': [card.metadata for card in extensions],
                'connections': [{**view.edge, 'connection_id': view.identifier,
                                 'panel_index': view.panel_index,
                                 'main_visible': view.identifier in selected_ids,
                                 'diagram_variant': view.panel_role}
                                for view in views],
                'main_visible_connections': sorted(selected_ids),
                'detailed_only_connections': [view.identifier for view in views
                                              if view.identifier not in selected_ids],
                'main_route_manifest': manifest,
                'scope': ('Complete current graph panels on main; explicit exclusive alternatives '
                          'and superseded history in separate subsystem figures.'
                          if panel_indices is None else
                          'One separately allocated complete alternative graph with exact source geometry.')}
    pieces.insert(2, '<metadata id="centered-wiring-provenance">' +
                  html.escape(json.dumps(metadata, ensure_ascii=False)) + '</metadata>')
    pieces.append('</svg>')
    return ''.join(pieces)


def render_subsystem_figures(guide: dict) -> list[dict]:
    """Draw each full multi-device circuit, including exclusive alternatives."""
    from wiring_primitives import functional_legend
    import xml.etree.ElementTree as ElementTree
    views = _views(guide)
    source_refs = _available_source_refs(guide, views)
    output = []
    for index, panel in enumerate(guide['wire_panels']):
        if not panel['edges']:
            continue
        width, height = _panel_measure(panel, include_controller=True)
        rect = Rect(52., 125., width, height)
        layout = _panel_layout(panel, index, rect, include_controller=True)
        svg_width, svg_height = width + 104., height + 500.
        identifier = f'{guide["id"]}-circuit-{index + 1:02d}'
        role = _panel_role(guide, index, panel)
        if role.startswith('alternative'):
            svg = render_centered_wiring(guide, panel_indices={index})
            provenance = next((item for item in ElementTree.fromstring(svg)
                               if item.get('id') == 'centered-wiring-provenance'), None)
            if provenance is None or provenance.text is None:
                raise LayoutError(identifier + ': alternative provenance missing')
            edge_manifest = json.loads(provenance.text)['main_route_manifest']
            output.append({'id': identifier, 'title': panel['title'],
                           'panel_index': index, 'role': role,
                           'diagram_group': panel.get('diagram_group'),
                           'exclusive_allocation': panel.get('exclusive_allocation'),
                           'connection_ids': [view.identifier for view in views
                                              if view.panel_index == index],
                           'edge_manifest': edge_manifest, 'svg': svg})
            continue
        drawing = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{int(svg_width)}" '
                   f'height="{int(svg_height)}" viewBox="0 0 {int(svg_width)} {int(svg_height)}" '
                   f'role="img" aria-label="{html.escape(panel["title"], quote=True)} complete circuit">',
                   f'<rect width="{int(svg_width)}" height="{int(svg_height)}" fill="#fffef9"/>',
                   _svg_text('Complete circuit · ' + role, 52., 62., 26., INK, 700),
                   ]
        open_assignments, open_terminals, reserved = _plan_open_terminals(
            [view for view in views if view.panel_index == index],
            {index: layout}, None, [], source_refs)
        planned_device_leads = _plan_device_leads(
            guide, [view for view in views if view.panel_index == index],
            {index: layout}, source_refs, [], reserved, schematic=True)
        open_drawn = set()
        routes, manifest = _route_panel(guide, layout, views, maps=None, artwork=[],
                                        other_panels=[], reserved=reserved,
                                        bounds=(svg_width, svg_height),
                                        open_assignments=open_assignments,
                                        open_terminals=open_terminals,
                                        open_drawn=open_drawn,
                                        source_refs=source_refs,
                                        planned_device_leads=planned_device_leads)
        internal_ids = {record['connection_id'] for record in manifest
                        if record['display_form'] == 'internal-board-context'}
        render_states = {record['connection_id']: record['render_state']
                         for record in manifest}
        drawing.append(_draw_panel_frame(layout, role, render_states=render_states,
                                         internal_ids=internal_ids))
        drawing.extend(routes)
        for x, y in _audit_conductor_paths(manifest):
            drawing.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="7" '
                           'fill="#183f2b" stroke="#fffef9" stroke-width="2"/>')
        drawing.append(functional_legend(52., height + 165., width=width - 100.,
                                         columns=3).svg)
        drawing.append('</svg>')
        output.append({'id': identifier, 'title': panel['title'],
                       'panel_index': index, 'role': role,
                       'diagram_group': panel.get('diagram_group'),
                       'exclusive_allocation': panel.get('exclusive_allocation'),
                       'connection_ids': [view.identifier for view in views
                                          if view.panel_index == index],
                       'edge_manifest': manifest, 'svg': ''.join(drawing)})
    return output
