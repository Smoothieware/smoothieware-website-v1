"""Source-bound controller drawings and contact adapters (proposal, not qualification).

No repository writes, network access, KiCad execution or graph mutation. All source
bytes are owned alongside this module. A layout must use PlacedArtwork.contacts;
it must not distribute contacts around a synthetic controller rectangle.

Public API:
  load_controller('smoothiebox' | 'prime') -> ControllerArtwork
  load_box_extension('GA' .. 'GI') -> ControllerArtwork
  artwork.place(instance=..., box=(x,y,w,h), used=...) -> PlacedArtwork
  contact_table(placement) -> HTML str
  source_palette('wire' | 'pin') -> dict[str, str]

Prime geometry means the supplied P11 illustrations, with the demonstrated J16
translation, against the supplied P12 contact schedule. It is NOT full-board
P11/P12 equivalence or a mating-face/cable drawing. Repeated pad numbers survive.
"""
from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass
from functools import lru_cache
import hashlib
import html
import json
import math
from pathlib import Path
import re
from typing import Iterable
import xml.etree.ElementTree as ET

SVG = 'http://www.w3.org/2000/svg'
XLINK = 'http://www.w3.org/1999/xlink'
ET.register_namespace('', SVG)
ET.register_namespace('xlink', XLINK)
ROOT = Path(__file__).resolve().parent / 'controller-artwork' / 'source-20261002'
SOURCE_HASHES = {
    'box-ch18-full.svg': '6807a6ddc6ce9600e17b18afccc84d985eb41576df7be099255ee3ee48e6983c',
    'box-border-reference.svg': 'fccbb00a72235fc106190f584f5f78a7c0a00e2d25059c9c2f5dc30b76c7c2af',
    'prime-p11-connectors.svg': '2e6ccb858e43cd0459ed99b60b250da6190d2f56cf3958b10cf7fd03e1475441',
    'controller-discovery.json': 'd0601f10c77b1a57a3af030dcd7854f2695c9bd683168d79018d076e8499cdf3',
    'prime-p11-p12-comparison.json': 'cf804d96082f286e0b31bc5d852adad9f3c524622f767e57dee6794b01dfe028',
}


class ArtworkError(ValueError):
    """An exact source/geometry contract is missing or inconsistent."""


def _tag(name: str) -> str:
    return f'{{{SVG}}}{name}'


def _local(element: ET.Element) -> str:
    return element.tag.rsplit('}', 1)[-1]


def _has(element: ET.Element, cls: str) -> bool:
    return cls in element.get('class', '').split()


def _only(values: Iterable, description: str):
    values = list(values)
    if len(values) != 1:
        raise ArtworkError(f'{description}: expected one, found {len(values)}')
    return values[0]


def _bytes(name: str) -> bytes:
    try:
        value = (ROOT / name).read_bytes()
    except OSError as error:
        raise ArtworkError(f'Missing owned controller source: {name}') from error
    if hashlib.sha256(value).hexdigest() != SOURCE_HASHES[name]:
        raise ArtworkError(f'Controller source changed: {name}; reconcile before drawing')
    return value


@lru_cache(maxsize=1)
def _discovery() -> dict:
    return json.loads(_bytes('controller-discovery.json'))


def source_palette(which: str = 'wire') -> dict[str, str]:
    if which not in {'wire', 'pin'}:
        raise ArtworkError('Palette must be wire or pin')
    return dict(_discovery()['smoothiebox'][which + '_palette'])


def _xml(name: str) -> ET.Element:
    value = _bytes(name)
    if b'<!ENTITY' in value or b'<!DOCTYPE' in value:
        raise ArtworkError(f'Unexpected XML declaration in {name}')
    return ET.fromstring(value)


def _n(value: float) -> str:
    if not math.isfinite(value):
        raise ArtworkError('Non-finite coordinate')
    return format(value, '.9g')


def _near(a: float, b: float) -> bool:
    return abs(a - b) <= 0.000001


def _rect(element: ET.Element) -> tuple[float, float, float, float]:
    return tuple(float(element.get(k, '0')) for k in ('x', 'y', 'width', 'height'))


def _inline(element: ET.Element, declaration: str) -> None:
    element.set('style', element.get('style', '').rstrip(';') + ';' + declaration)


def _grey_paint(value: str) -> str:
    """Convert explicit solid paint to neutral grey without changing geometry."""
    value = value.strip()
    if not re.fullmatch(r'#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?', value):
        return value
    digits = value[1:]
    if len(digits) == 3:
        digits = ''.join(c * 2 for c in digits)
    channels = [int(digits[i:i + 2], 16) for i in (0, 2, 4)]
    level = round(.2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2])
    return '#' + format(level, '02x') * 3


def _portable_unused(group: ET.Element) -> None:
    """Explicit derived paints support rasterizers without colour-matrix filters.

    Original assets stay immutable. White/black remain white/black; coloured
    solids become luminance greys. Class paints from the Box source are resolved
    locally, so descendant presentation attributes cannot defeat desaturation.
    """
    class_paints = {
        'terminal': {'fill': '#35ba58', 'stroke': '#1b6338'},
        'entry': {'fill': '#1a7838'}, 'divider': {'stroke': '#1b6338'},
        'pin': {'fill': '#20372c'}, 'bank-title': {'fill': '#20372c'},
        'board-title': {'fill': '#20372c'}, 'source-pin': {'fill': '#20372c'},
        'pill-text': {'fill': '#ffffff'}, 'pwm-mark': {'fill': '#ffffff'},
    }
    for element in group.iter():
        paints = {}
        for cls in element.get('class', '').split():
            paints.update(class_paints.get(cls, {}))
        for name in ('fill', 'stroke'):
            if element.get(name) is not None:
                paints[name] = element.get(name)
        for name, value in re.findall(r'(?:^|;)\s*(fill|stroke)\s*:\s*([^;]+)', element.get('style', '')):
            paints[name] = value
        if _local(element) in {'text', 'tspan'} and 'fill' not in paints:
            paints['fill'] = '#20372c'
        for name, value in paints.items():
            _inline(element, name + ':' + _grey_paint(value))


def _portable_headings(root: ET.Element) -> None:
    """Keep source heading coordinates; avoid paint-order-dependent white stroke."""
    for element in root.iter():
        if any(_has(element, cls) for cls in ('bank-title', 'board-title', 'source-pin')):
            _inline(element, 'fill:#20372c;stroke:none')


def _source_list(*names: str) -> list[dict]:
    return [{'asset': 'controller-artwork/source-20261002/' + name,
             'sha256': SOURCE_HASHES[name]} for name in names]


@dataclass(frozen=True)
class Contact:
    key: str
    bank: str
    pin: str
    function: str
    anchor: tuple[float, float]
    side: str
    # Every individual pad is retained, including repeated-number copper shapes.
    source_positions: tuple[tuple[float, float], ...]
    anchor_basis: str
    source_detail: dict


@dataclass(frozen=True)
class PlacedContact:
    source: Contact
    anchor: tuple[float, float]
    used: bool


@dataclass(frozen=True)
class PlacedArtwork:
    svg: str
    contacts: dict[str, PlacedContact]
    bounds: tuple[float, float, float, float]
    metadata: dict


@dataclass(frozen=True)
class ControllerArtwork:
    kind: str
    tree: ET.Element
    viewbox: tuple[float, float, float, float]
    contacts: dict[str, Contact]
    provenance: dict

    def place(self, *, instance: str, box: tuple[float, float, float, float],
              used: Iterable[str] = ()) -> PlacedArtwork:
        """Uniformly fit source geometry; neither connector nor pin is reflowed.

        Caller must give each embedded instance a distinct XML-safe identifier.
        An absent contact raises; the caller renders a separately named OPEN
        boundary, never an invented bank. `used` is the selected view's contact
        set, not all contacts mentioned by mutually exclusive graph variants.
        """
        if not re.fullmatch(r'[A-Za-z_][A-Za-z0-9_.-]*', instance):
            raise ArtworkError('Invalid or empty SVG instance prefix')
        used = set(used)
        missing = used.difference(self.contacts)
        if missing:
            raise ArtworkError(f'{self.kind}: no sourced contacts {sorted(missing)}')
        x, y, w, h = map(float, box)
        vx, vy, vw, vh = self.viewbox
        if not all(map(math.isfinite, (x, y, w, h))) or min(w, h, vw, vh) <= 0:
            raise ArtworkError('Invalid placement bounds')
        scale = min(w / vw, h / vh)
        left, top = x + (w - vw * scale) / 2, y + (h - vh * scale) / 2
        tx, ty = left - vx * scale, top - vy * scale
        clone = deepcopy(self.tree)
        # CSS is instance-scoped and all IDs/url(#...) references are rewritten.
        _scope(clone, instance)
        _portable_headings(clone)
        defs = ET.Element(_tag('defs'))
        filter_id = instance + '-unused-grey'
        filter_node = ET.SubElement(defs, _tag('filter'), {
            'id': filter_id, 'x': '-10%', 'y': '-10%', 'width': '120%', 'height': '120%',
            'color-interpolation-filters': 'sRGB'})
        ET.SubElement(filter_node, _tag('feColorMatrix'), {'type': 'saturate', 'values': '0'})
        clone.insert(0, defs)
        # Fully unused connectors are truly desaturated, not made transparent.
        # Box contact subgroups and pills also carry individual dispositions.
        # Prime mixed-use connectors retain the real illustration; every unused
        # contact is grey in the readable schedule, not painted at a guessed post.
        for element in clone.iter():
            bank = element.get('data-controller-bank')
            contact = element.get('data-controller-contact')
            inactive = (contact not in used) if contact else (
                not any(c.key in used for c in self.contacts.values() if c.bank == bank)
                if bank else False)
            if contact or bank:
                element.set('data-usage', 'unused' if inactive else 'used')
                if inactive:
                    _portable_unused(element)
        outer = ET.Element(_tag('g'), {'id': instance,
            'data-controller-kind': self.kind,
            'data-controller-source-status': 'sourced-drawing-not-hardware-qualification'})
        transformed = ET.SubElement(outer, _tag('g'), {
            'transform': f'translate({_n(tx)} {_n(ty)}) scale({_n(scale)})'})
        # Root SVG becomes a group; its original viewBox was incorporated in fit.
        for child in list(clone):
            transformed.append(child)
        placed = {key: PlacedContact(c, (tx + c.anchor[0] * scale,
                                        ty + c.anchor[1] * scale), key in used)
                  for key, c in self.contacts.items()}
        meta = deepcopy(self.provenance)
        meta.update({'kind': self.kind, 'instance': instance,
            'viewbox': list(self.viewbox), 'bounds': [left, top, vw * scale, vh * scale],
            'uniform_transform': {'scale': scale, 'translate': [tx, ty]},
            'contact_count': len(placed), 'used_contacts': sorted(used),
            'unused_contacts': sorted(set(placed) - used),
            'contact_map': {key: {'bank': p.source.bank, 'pin': p.source.pin,
                'function': p.source.function, 'side': p.source.side,
                'source_anchor': list(p.source.anchor), 'anchor': list(p.anchor),
                'anchor_basis': p.source.anchor_basis,
                'source_positions': [list(v) for v in p.source.source_positions],
                'source_detail': deepcopy(p.source.source_detail), 'used': p.used}
                for key, p in placed.items()},
            'appearance_policy': 'Unused connectors explicitly grey; individual Box pins/pills '
                'desaturated; all individual unused contacts grey in contact schedule. '
                'Prime artwork is not repainted using inferred mating-post locations.'})
        return PlacedArtwork(ET.tostring(outer, encoding='unicode'), placed,
                             (left, top, vw * scale, vh * scale), meta)


def _scope(root: ET.Element, prefix: str) -> None:
    ids = [e.get('id') for e in root.iter() if e.get('id')]
    if len(ids) != len(set(ids)):
        raise ArtworkError('Duplicate IDs in owned source SVG')
    mapping = {old: prefix + '-' + old for old in ids}
    for element in root.iter():
        for name, value in list(element.attrib.items()):
            if name == 'id':
                element.set(name, mapping[value])
            elif name in {'aria-labelledby', 'aria-describedby'}:
                if any(word not in mapping for word in value.split()):
                    raise ArtworkError('Unresolved SVG accessible-name reference')
                element.set(name, ' '.join(mapping[word] for word in value.split()))
            elif name.rsplit('}', 1)[-1] == 'href':
                if not value.startswith('#') or value[1:] not in mapping:
                    raise ArtworkError('Unowned or unresolved active SVG dependency: ' + value)
                element.set(name, '#' + mapping[value[1:]])
            else:
                def replace_url(match):
                    old = match[1]
                    if old not in mapping:
                        raise ArtworkError('Unresolved local SVG reference: ' + old)
                    return 'url(#' + mapping[old] + ')'
                element.set(name, re.sub(r'url\(#([^)]*)\)', replace_url, value))
        if _local(element) in {'script', 'foreignObject', 'image'}:
            raise ArtworkError('Unexpected executable or external source SVG element')
        if _local(element) == 'style':
            text = element.text or ''
            if '@' in text or 'url(' in text:
                raise ArtworkError('Review stylesheet dependencies before embedding')
            # Source contains simple selector/declaration blocks, no nested rules.
            chunks = re.findall(r'([^{}]+)\{([^{}]*)\}', text)
            if re.sub(r'[^{}]+\{[^{}]*\}', '', text).strip():
                raise ArtworkError('Unrecognised source CSS')
            element.text = '\n'.join(','.join('#' + prefix + ' ' + selector.strip()
                for selector in selectors.split(',')) + '{' + rules + '}'
                for selectors, rules in chunks)


def _pill_center(element: ET.Element) -> tuple[float, float]:
    rect = _only([e for e in list(element) if _local(e) == 'rect'][:1], 'pill rectangle')
    x, y, w, h = _rect(rect)
    return x + w / 2, y + h / 2


def _tag_screws(group: ET.Element, bank: dict) -> None:
    """Wrap existing glyphs without changing source order or their coordinates."""
    for item in bank['contacts']:
        cx, cy = item['screw_center']
        children = list(group)
        circles = [e for e in children if _local(e) == 'circle'
                   and _near(float(e.get('cx', 'nan')), cx)
                   and _near(float(e.get('cy', 'nan')), cy)]
        if len(circles) != 2:
            raise ArtworkError('Source screw pair changed: ' + item['contact'])
        first = children.index(circles[0])
        glyphs = children[first:first + 3]
        if [_local(e) for e in glyphs] != ['circle', 'circle', 'path']:
            raise ArtworkError('Source screw glyph changed')
        wrapper = ET.Element(_tag('g'), {'data-controller-contact': item['contact']})
        for element in glyphs:
            group.remove(element)
            wrapper.append(element)
        group.insert(first, wrapper)


def _box() -> ControllerArtwork:
    source = _xml('box-ch18-full.svg')
    audit = _discovery()['smoothiebox']
    banks = audit['banks']
    if len(banks) != 24 or sum(len(b['contacts']) for b in banks) != 82:
        raise ArtworkError('Expected 24 border banks and 82 physical contacts')
    root = ET.Element(_tag('svg'))
    root.append(deepcopy(_only([e for e in source if _local(e) == 'style'], 'Box style')))
    case = _only([e for e in source if _has(e, 'case')], 'Box case')
    if list(_rect(case)) != audit['case']:
        raise ArtworkError('Case geometry differs from discovery')
    root.append(deepcopy(case))
    sides = [e for e in source if _has(e, 'side-title') and float(e.get('y', 'inf')) < 3250]
    if len(sides) != 4:
        raise ArtworkError('Expected four source area labels')
    root.extend(deepcopy(sides))
    contacts = {}
    pills = [e for e in source if _has(e, 'pin-pill')]
    titles = [e for e in source if _has(e, 'bank-title')]
    selected_pills = set()
    for bank in banks:
        name, side = bank['bank'], bank['side']
        wrapper = ET.SubElement(root, _tag('g'), {'data-controller-bank': name})
        geometry = deepcopy(_only([e for e in source if _has(e, 'field-bank')
                                   and e.get('data-bank') == name], 'field bank ' + name))
        _tag_screws(geometry, bank)
        wrapper.append(geometry)
        wrapper.append(deepcopy(_only([e for e in titles if ''.join(e.itertext()) == bank['title']],
                                      'bank title ' + name)))
        for entry in bank['contacts']:
            ax, ay = entry['anchor']
            target = (ax, ay + 57) if side == 'north' else (ax, ay + 68) if side == 'south' else (
                ax - 117, ay) if side == 'west' else (ax + 117, ay)
            pill = _only([e for e in pills if all(_near(a, b) for a, b in zip(_pill_center(e), target))],
                         'source pill ' + entry['contact'])
            if id(pill) in selected_pills:
                raise ArtworkError('One pill assigned twice')
            selected_pills.add(id(pill))
            pill = deepcopy(pill)
            pill.set('data-controller-contact', entry['contact'])
            wrapper.append(pill)
            key = entry['contact']
            anchor = tuple(map(float, entry['screw_center']))
            contacts[key] = Contact(key, name, str(entry['pin']), entry['function'], anchor,
                side, (anchor,), 'exact source screw centre (not the source wire offset)',
                {'wire_anchor_in_source': entry['anchor'],
                 'source_relations': deepcopy(entry['source_relations'])})
    # Compare extraction geometry/labels with the separately supplied read-only
    # reference without depending on that temporary path at runtime.
    reference = _xml('box-border-reference.svg')
    if len([e for e in reference if _has(e, 'field-bank')]) != 24:
        raise ArtworkError('Frozen extraction reference incomplete')
    return ControllerArtwork('smoothiebox', root, (0., 0., 2932., 3250.), contacts, {
        'geometry_revision': 'Smoothie-central Chapter 18, frozen 2026-10-02',
        'electrical_revision': 'Core P1 exterior carrier/harness proposal',
        'sources': _source_list('box-ch18-full.svg', 'box-border-reference.svg', 'controller-discovery.json'),
        'bank_count': 24, 'case_bounds': audit['case'],
        'layer_policy': 'Case + 24 border banks + 82 original pin pills + area/bank labels; no internal wiring, connectors, ratings or service ports',
        'qualification': 'Carrier and PWM/TTL output-stage implementation remain electrically unqualified',
        'separate_extension_cards': ['G' + c for c in 'ABCDEFGHI'],
    })


def _nearest_side(x: float, y: float) -> str:
    # Layout-facing side only: never a change to a physical coordinate.
    distances = [(abs(y - 2.78), 'north'), (abs(x - 114.33), 'east'),
                 (abs(y - 112.78), 'south'), (abs(x - 4.33), 'west')]
    return min(distances)[1]


def _prime() -> ControllerArtwork:
    root = _xml('prime-p11-connectors.svg')
    audit = _discovery()['prime']
    comparison = json.loads(_bytes('prime-p11-p12-comparison.json'))
    p11 = comparison['boards']['p11']['connectors']
    p12 = comparison['boards']['p12']['connectors']
    matches = {entry['ref']: entry for entry in comparison['comparison']}
    parts = {e.get('data-ref'): e for e in root.iter() if _has(e, 'pcb-part')}
    if len(parts) != 45 or set(parts) != set(p11) or set(parts) != set(p12) or set(parts) != set(matches):
        raise ArtworkError('Prime 45-connector correspondence incomplete')
    allowed_layers = {'layer-board-substrate', 'layer-illustrated-f'}
    if {e.get('id') for e in root.iter() if _has(e, 'pcb-layer')} != allowed_layers:
        raise ArtworkError('Prime layer closure includes unexpected layers')
    # HTML extraction lower-cased this SVG-only attribute. Restore the original
    # builder spelling; otherwise userSpaceOnUse can silently become bbox units.
    normalisations = []
    for element in root.iter():
        if 'maskunits' in element.attrib:
            element.set('maskUnits', element.attrib.pop('maskunits'))
            normalisations.append('maskunits -> maskUnits, as in supplied build.ts')
    dx, dy = map(float, audit['pcb_to_explorer_translation_mm'])
    if (dx, dy) != (-95.5, -35.25):
        raise ArtworkError('Review changed PCB-to-explorer translation')
    contacts = {}
    for ref in sorted(parts, key=lambda value: int(value[1:])):
        element, left, right, match = parts[ref], p11[ref], p12[ref], matches[ref]
        if not match['physical_functions_equal'] or not match['rotation_equal']:
            raise ArtworkError('Unqualified revision correspondence: ' + ref)
        if match['pin_function_correspondence']['p11'] != match['pin_function_correspondence']['p12']:
            raise ArtworkError('Per-pin function mismatch: ' + ref)
        if not _near(float(element.get('data-x', 'nan')), left['x_mm'] + dx) or not _near(
                float(element.get('data-y', 'nan')), left['y_mm'] + dy):
            raise ArtworkError('Illustration/PCB reference position mismatch: ' + ref)
        delta = (right['x_mm'] - left['x_mm'], right['y_mm'] - left['y_mm'])
        expected = (.025, -.025) if ref == 'J16' else (0., 0.)
        if not all(_near(a, b) for a, b in zip(delta, expected)):
            raise ArtworkError('Unexpected connector movement: ' + ref)
        element.set('data-controller-bank', ref)
        if ref == 'J16':
            element.set('data-original-transform', element.get('transform', ''))
            element.set('transform', 'translate(0.025 -0.025) ' + element.get('transform', ''))
            element.set('data-revision-adjustment', 'P11 to P12, +0.025/-0.025 mm in explorer frame')
        pins = {}
        for pad in right['pads']:
            pins.setdefault(str(pad['pin']), []).append(pad)
        for pin, pads in pins.items():
            positions = tuple((float(p['x_mm']) + dx, float(p['y_mm']) + dy) for p in pads)
            # Never replace repeated pad numbers with the last dictionary entry.
            # For the motor illustration select the actual 3.5-mm screw-terminal
            # row, not the separately supported 2.54-mm alternate header row.
            candidates = list(range(len(pads)))
            basis = 'exact P12 PCB pad centre; not a mating-post/cable-face assertion'
            if ref in {'J5', 'J6', 'J7', 'J8'}:
                candidates = [i for i, p in enumerate(pads) if _near(p['x_mm'], right['x_mm'] - 2.54)]
                if len(candidates) != 1:
                    raise ArtworkError('Missing source 3.5-mm motor screw row: ' + ref + '.' + pin)
                basis = 'exact P12 3.5-mm screw-row pad; alternate 2.54-mm row retained as source positions'
            elif len(pads) > 1:
                # Choose an existing pad nearest the pad-set centre, not a new
                # averaged anchor. Composite XT30 pad shapes retain every entry.
                mx = sum(p[0] for p in positions) / len(positions)
                my = sum(p[1] for p in positions) / len(positions)
                candidates.sort(key=lambda i: ((positions[i][0] - mx) ** 2 +
                                               (positions[i][1] - my) ** 2, i))
                basis = 'existing P12 pad nearest repeated-pad-set centre; every pad retained, not a new physical pin'
            index = candidates[0]
            anchor = positions[index]
            key = ref + '.' + pin
            function = ' / '.join(dict.fromkeys(p['net'] or 'source-unassigned net' for p in pads))
            contacts[key] = Contact(key, ref, pin, function, anchor,
                _nearest_side(right['x_mm'] + dx, right['y_mm'] + dy), positions, basis,
                {'p12_pads': deepcopy(pads), 'selected_pad_index': index,
                 'p11_library': left['library'], 'p12_library': right['library'],
                 'correspondence': deepcopy(match)})
    return ControllerArtwork('prime', root, tuple(map(float, audit['viewbox'].split())), contacts, {
        'geometry_revision': 'P11 Prime2660 explorer illustrations + explicit P12 J16 translation',
        'electrical_revision': 'P12 Prime2590 connector schedule',
        'sources': _source_list('prime-p11-connectors.svg', 'prime-p11-p12-comparison.json', 'controller-discovery.json'),
        'pcb_sources': {revision: {k: v for k, v in comparison['boards'][revision].items() if k != 'connectors'}
                        for revision in ('p11', 'p12')},
        'bank_count': 45, 'pcb_to_explorer_translation_mm': [dx, dy],
        'layer_policy': 'Original substrate/mask and 45 illustrated connectors; no silk, copper, synthetic footprint or invented-component layers',
        'normalisations': normalisations,
        'qualification': 'Contact-level correspondence only. J5 library differs; J42 rail spelling differs; driver circuitry is not equivalent. Installed revision and mating orientation remain checks.',
    })


@lru_cache(maxsize=2)
def load_controller(kind: str) -> ControllerArtwork:
    if kind == 'smoothiebox':
        return _box()
    if kind == 'prime':
        return _prime()
    raise ArtworkError('Unsupported controller source: ' + str(kind))


@lru_cache(maxsize=9)
def load_box_extension(socket: str) -> ControllerArtwork:
    """Separate, exact source header card; never added to the case perimeter.

    Source card is a logical pin-number illustration, not a fitted enclosure
    feedthrough or a certification of Gadgeteer protocol/firmware compatibility.
    """
    if socket not in {'G' + c for c in 'ABCDEFGHI'}:
        raise ArtworkError('Unknown Box extension card: ' + socket)
    source = _xml('box-ch18-full.svg')
    card = _only([e for e in source if _has(e, 'gadgeteer-pin-card')
                  and e.get('data-socket') == socket], 'extension ' + socket)
    x, y, w, h = _rect(list(card)[0])
    root = ET.Element(_tag('svg'))
    root.append(deepcopy(_only([e for e in source if _local(e) == 'style'], 'Box stylesheet')))
    card_copy = deepcopy(card)
    card_copy.set('data-controller-bank', socket)
    root.append(card_copy)
    # Source text/pills are appended as siblings, just as with border banks.
    selected = []
    for element in source:
        if _has(element, 'pin-pill'):
            px, py = _pill_center(element)
            if x <= px <= x + w and y <= py <= y + h:
                selected.append(element)
        elif _local(element) == 'text':
            px, py = float(element.get('x', 'inf')), float(element.get('y', 'inf'))
            if x <= px <= x + w and y <= py <= y + h:
                root.append(deepcopy(element))
    pads = [e for e in card_copy.iter() if e.get('data-pin')]
    if len(pads) != 10 or len(selected) != 10:
        raise ArtworkError('Incomplete ten-pin extension card')
    contacts = {}
    for pad in pads:
        pin = pad.get('data-pin')
        px, py, pw, ph = _rect(pad)
        anchor = (px + pw / 2, py + ph / 2)
        key = socket + '.' + pin
        pad.set('data-controller-contact', key)
        side = 'west' if int(pin) % 2 else 'east'
        centre = (x + 115 if side == 'west' else x + 385, anchor[1])
        pill = deepcopy(_only([e for e in selected if all(_near(a, b) for a, b in zip(
            _pill_center(e), centre))], 'extension pin pill ' + key))
        pill.set('data-controller-contact', key)
        root.append(pill)
        contacts[key] = Contact(key, socket, pin, pad.get('data-net-label', ''), anchor,
            side, (anchor,), 'exact source header-card contact square centre; logical view',
            {'core_header': card.get('data-header'), 'socket_type': card.get('data-socket-type')})
    return ControllerArtwork('smoothiebox-extension-' + socket, root, (x, y, w, h), contacts, {
        'geometry_revision': 'Chapter 18 separate ' + socket + ' header card',
        'electrical_revision': 'Core P1 ' + str(card.get('data-header')),
        'sources': _source_list('box-ch18-full.svg'), 'bank_count': 1,
        'layer_policy': 'Original separate ten-pin source card and its original labels',
        'qualification': 'Not a perimeter bank; no installed feedthrough or firmware compatibility established',
    })


def contact_table(placed: PlacedArtwork) -> str:
    """Readable individual dispositions; does not pretend tiny pills are readable.

    Plain HTML is intentionally independent of the machine's screen-scale SVG.
    Physical pin identity and every repeated-pad count remain inspectable.
    """
    rows = []
    for key, item in placed.contacts.items():
        c = item.source
        state = 'Used in this selected view' if item.used else 'Unused in this selected view'
        color = '#20372c' if item.used else '#697278'
        rows.append('<tr style="color:' + color + '"><th scope="row">' + html.escape(key) +
            '</th><td>' + html.escape(c.function) + '</td><td>' + state + '</td><td>' +
            html.escape(c.anchor_basis) + '; ' + str(len(c.source_positions)) +
            ' retained source position(s)</td></tr>')
    return ('<div class="table-wrap"><table class="controller-contact-schedule">'
        '<thead><tr><th>Physical contact</th><th>Source function or net</th><th>Disposition</th>'
        '<th>Coordinate basis</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div>')
