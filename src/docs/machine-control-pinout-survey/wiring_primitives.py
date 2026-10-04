"""Renderer transport part R1: functional style, labels and bounded Manhattan paths.

This is a complete support module, not an incomplete render_centered_wiring.py.
The current entry point remains untouched until R2 supplies coordinated layout
and builder integration. No tests, network access or repository writes occur.

Only conductor geometry is restricted to Manhattan centre-lines with small
rounded corners. The slanted slots and curved outlines in authentic connector
artwork are not wires and must not be 'fixed' into invented drawings.
"""
from __future__ import annotations

from dataclasses import dataclass
import heapq
import html
import itertools
import math
import re
import textwrap
from typing import Iterable, Sequence

from controller_artwork import source_palette

Point = tuple[float, float]
SIDES = {'north': (0., -1.), 'east': (1., 0.), 'south': (0., 1.), 'west': (-1., 0.)}
EPS = 1e-7


class LayoutError(ValueError):
    """Caller must enlarge/repartition the layout; never omit a conductor."""


@dataclass(frozen=True)
class Rect:
    x: float
    y: float
    width: float
    height: float

    def __post_init__(self):
        if not all(map(math.isfinite, (self.x, self.y, self.width, self.height))) or min(self.width, self.height) < 0:
            raise LayoutError('Invalid rectangle')

    @property
    def right(self) -> float:
        return self.x + self.width

    @property
    def bottom(self) -> float:
        return self.y + self.height

    def inflated(self, amount: float) -> Rect:
        if amount < 0:
            raise LayoutError('Clearance must be nonnegative')
        return Rect(self.x - amount, self.y - amount, self.width + 2 * amount, self.height + 2 * amount)

    def contains(self, point: Point) -> bool:
        return self.x + EPS < point[0] < self.right - EPS and self.y + EPS < point[1] < self.bottom - EPS

    def overlaps(self, other: Rect) -> bool:
        return self.x < other.right and other.x < self.right and self.y < other.bottom and other.y < self.bottom

    def blocks(self, a: Point, b: Point) -> bool:
        if abs(a[0] - b[0]) <= EPS:
            return self.x + EPS < a[0] < self.right - EPS and max(min(a[1], b[1]), self.y) < min(max(a[1], b[1]), self.bottom) - EPS
        if abs(a[1] - b[1]) <= EPS:
            return self.y + EPS < a[1] < self.bottom - EPS and max(min(a[0], b[0]), self.x) < min(max(a[0], b[0]), self.right) - EPS
        raise LayoutError('Diagonal segment passed to obstacle check')


@dataclass(frozen=True)
class ReservedWire:
    identifier: str
    points: tuple[Point, ...]
    net_id: str | None = None


@dataclass(frozen=True)
class Route:
    points: tuple[Point, ...]
    crossings: tuple[dict, ...]
    expanded_states: int
    corner_radius: float


@dataclass(frozen=True)
class TextBlock:
    svg: str
    bounds: Rect
    lines: tuple[str, ...]


def _number(value: float) -> str:
    if not math.isfinite(value):
        raise LayoutError('Non-finite coordinate')
    return format(value, '.9g')


def _point(value: Point) -> Point:
    if len(value) != 2 or not all(map(math.isfinite, value)):
        raise LayoutError('Invalid point')
    return float(value[0]), float(value[1])


def _distance(a: Point, b: Point) -> float:
    return abs(a[0] - b[0]) + abs(a[1] - b[1])


def clean_manhattan(points: Iterable[Point]) -> tuple[Point, ...]:
    values: list[Point] = []
    for item in points:
        point = _point(item)
        if values and point == values[-1]:
            continue
        if values and values[-1][0] != point[0] and values[-1][1] != point[1]:
            raise LayoutError('Diagonal conductor geometry is forbidden')
        values.append(point)
        while len(values) >= 3:
            a, b, c = values[-3:]
            same_axis = (a[0] == b[0] == c[0]) or (a[1] == b[1] == c[1])
            if not same_axis:
                break
            if (b[0] - a[0]) * (c[0] - b[0]) + (b[1] - a[1]) * (c[1] - b[1]) < 0:
                raise LayoutError('Backtracking conductor segment is ambiguous')
            values.pop(-2)
    if len(values) < 2:
        raise LayoutError('Conductor needs two distinct endpoints')
    return tuple(values)


def rounded_orthogonal_path(points: Iterable[Point], radius: float = 10.) -> str:
    """H/V segments and quadratic fillets only; no freeform or diagonal routes.

    Ten source drawing units is the reference fillet, not a fabricated physical
    board-corner radius. Local display layouts may explicitly choose a radius.
    """
    if not math.isfinite(radius) or radius < 0:
        raise LayoutError('Invalid corner radius')
    p = clean_manhattan(points)
    chunks = [f'M{_number(p[0][0])} {_number(p[0][1])}']
    cursor = p[0]
    def line(end: Point):
        nonlocal cursor
        if end == cursor:
            return
        if end[1] == cursor[1]:
            chunks.append('H' + _number(end[0]))
        elif end[0] == cursor[0]:
            chunks.append('V' + _number(end[1]))
        else:
            raise LayoutError('Fillet generated a non-orthogonal straight segment')
        cursor = end
    for a, b, c in zip(p, p[1:], p[2:]):
        length_in, length_out = _distance(a, b), _distance(b, c)
        r = min(radius, length_in / 2, length_out / 2)
        before = (b[0] - (b[0] - a[0]) * r / length_in,
                  b[1] - (b[1] - a[1]) * r / length_in)
        after = (b[0] + (c[0] - b[0]) * r / length_out,
                 b[1] + (c[1] - b[1]) * r / length_out)
        line(before)
        if r:
            chunks.append(f'Q{_number(b[0])} {_number(b[1])} {_number(after[0])} {_number(after[1])}')
            cursor = after
        else:
            line(b)
    line(p[-1])
    return ' '.join(chunks)


def escape_point(anchor: Point, side: str, distance: float) -> Point:
    if side not in SIDES or not math.isfinite(distance) or distance <= 0:
        raise LayoutError('Escape requires a real side and positive distance')
    anchor = _point(anchor)
    dx, dy = SIDES[side]
    return anchor[0] + dx * distance, anchor[1] + dy * distance


def _intersections(a: Point, b: Point, reserved: Sequence[ReservedWire], net_id: str | None,
                   shared: frozenset[Point], *,
                   virtual_grid_endpoints: bool = False,
                   strict_shared: bool = False) -> tuple[bool, list[dict]]:
    """Reject unrelated contact; optionally distinguish A* grid nodes from drawn bends.

    A route search splits each straight candidate at virtual grid coordinates.
    Such a split is not a conductor bend or terminal. The opt-in route mode
    also makes unrelated contact at a declared terminal invalid. The final
    whole-path check leaves ``virtual_grid_endpoints`` false, after collinear
    grid edges have been merged by ``clean_manhattan``. Default callers keep
    their original shared-terminal treatment.
    """
    crossings = []
    horizontal = a[1] == b[1]
    for wire in reserved:
        same_net = bool(net_id and wire.net_id == net_id)
        for c, d in zip(wire.points, wire.points[1:]):
            other_horizontal = c[1] == d[1]
            if horizontal == other_horizontal:
                axis, fixed = (0, 1) if horizontal else (1, 0)
                if abs(a[fixed] - c[fixed]) > EPS:
                    continue
                low = max(min(a[axis], b[axis]), min(c[axis], d[axis]))
                high = min(max(a[axis], b[axis]), max(c[axis], d[axis]))
                if low > high + EPS:
                    continue
                touch = (low, a[1]) if horizontal else (a[0], low)
                if not same_net and (high - low > EPS or touch not in shared or
                                     strict_shared):
                    return True, []
                continue
            point = (c[0], a[1]) if horizontal else (a[0], c[1])
            if (min(a[0], b[0]) - EPS <= point[0] <= max(a[0], b[0]) + EPS and
                min(a[1], b[1]) - EPS <= point[1] <= max(a[1], b[1]) + EPS and
                min(c[0], d[0]) - EPS <= point[0] <= max(c[0], d[0]) + EPS and
                min(c[1], d[1]) - EPS <= point[1] <= max(c[1], d[1]) + EPS):
                if strict_shared:
                    is_unsafe = (point in (c, d) or point in shared or
                                 (point in (a, b) and not virtual_grid_endpoints))
                else:
                    is_unsafe = point in (a, b, c, d) and point not in shared
                if not same_net and is_unsafe:
                    return True, []
                crossings.append({'point': list(point), 'other': wire.identifier,
                                  'junction': same_net or
                                  (point in shared and not strict_shared)})
    return False, crossings


def route_manhattan(start: Point, end: Point, *, obstacles: Sequence[Rect] = (),
                    reserved: Sequence[ReservedWire] = (), net_id: str | None = None,
                    shared_terminals: Iterable[Point] = (), clearance: float = 10.,
                    corner_radius: float = 10.,
                    lane_pitch: float = 12., turn_cost: float = 18., crossing_cost: float = 80.,
                    max_grid_points: int = 12000, max_expansions: int = 36000,
                    virtual_grid_crossings: bool = False,
                    start_lead_previous: Point | None = None,
                    end_lead_next: Point | None = None,
                    coordinate_window: Rect | None = None) -> Route:
    """Bounded deterministic visibility-grid routing between escaped terminals.

    Supply obstacle rectangles for text and device bodies. Start/end must already
    be outside their owning body, or the caller must provide its separately
    checked endpoint escape. A source failure raises LayoutError: no diagonal,
    line-through-a-device or silent omitted-wire fallback. Reservations may share
    a segment only with an explicitly identical electrical net_id. Emit with
    the returned corner_radius (or a smaller one) to retain obstacle clearance.
    """
    start, end = _point(start), _point(end)
    start_lead_previous = (_point(start_lead_previous)
                           if start_lead_previous is not None else None)
    end_lead_next = (_point(end_lead_next)
                     if end_lead_next is not None else None)
    if start == end:
        raise LayoutError('Distinct terminals cannot occupy one routing point')
    values = (clearance, corner_radius, lane_pitch, turn_cost, crossing_cost)
    if not all(map(math.isfinite, values)) or min(clearance, corner_radius) < 0 or lane_pitch <= 0 or min(turn_cost, crossing_cost) < 0:
        raise LayoutError('Invalid routing costs or spacing')
    if max_grid_points < 4 or max_expansions < 1:
        raise LayoutError('Invalid routing budget')
    if coordinate_window is not None and not all(
            coordinate_window.x <= point[0] <= coordinate_window.right and
            coordinate_window.y <= point[1] <= coordinate_window.bottom
            for point in (start, end)):
        raise LayoutError('Routing coordinate window excludes a terminal')
    # Reserve the full fillet radius as well, so rounded corners cannot cut
    # through an obstacle that the sharp Manhattan centre-line just cleared.
    blocks = tuple(r.inflated(clearance + corner_radius) for r in obstacles)
    if any(r.contains(start) or r.contains(end) for r in blocks):
        raise LayoutError('Endpoint escape is inside a protected obstacle')
    shared = frozenset(_point(p) for p in shared_terminals)
    for wire in reserved:
        clean_manhattan(wire.points)
    xs, ys = {start[0], end[0]}, {start[1], end[1]}
    def add_coordinate(x: float, y: float) -> None:
        if coordinate_window is None or coordinate_window.x <= x <= coordinate_window.right:
            xs.add(x)
        if coordinate_window is None or coordinate_window.y <= y <= coordinate_window.bottom:
            ys.add(y)
    for p in (start, end):
        for dx in (-lane_pitch, lane_pitch):
            if coordinate_window is None or coordinate_window.x <= p[0] + dx <= coordinate_window.right:
                xs.add(p[0] + dx)
        for dy in (-lane_pitch, lane_pitch):
            if coordinate_window is None or coordinate_window.y <= p[1] + dy <= coordinate_window.bottom:
                ys.add(p[1] + dy)
    for r in blocks:
        if coordinate_window is None or r.overlaps(coordinate_window):
            add_coordinate(r.x, r.y)
            add_coordinate(r.right, r.bottom)
    for wire in reserved:
        for first, last in zip(wire.points, wire.points[1:]):
            if (coordinate_window is not None and
                    not (Rect(min(first[0], last[0]), min(first[1], last[1]),
                              abs(last[0] - first[0]), abs(last[1] - first[1]))
                         .inflated(lane_pitch).overlaps(coordinate_window))):
                continue
            for p in (first, last):
                for dx in (-lane_pitch, lane_pitch):
                    if coordinate_window is None or coordinate_window.x <= p[0] + dx <= coordinate_window.right:
                        xs.add(p[0] + dx)
                for dy in (-lane_pitch, lane_pitch):
                    if coordinate_window is None or coordinate_window.y <= p[1] + dy <= coordinate_window.bottom:
                        ys.add(p[1] + dy)
    if coordinate_window is not None:
        xs.update((coordinate_window.x, coordinate_window.right))
        ys.update((coordinate_window.y, coordinate_window.bottom))
    if len(xs) * len(ys) > max_grid_points:
        raise LayoutError(f'Routing grid budget exceeded: {len(xs)} x {len(ys)}')
    xs, ys = sorted(xs), sorted(ys)
    ix, iy = {x: i for i, x in enumerate(xs)}, {y: i for i, y in enumerate(ys)}
    # Incoming orientation 0=initial, 1=horizontal, 2=vertical is part of state.
    initial = (ix[start[0]], iy[start[1]], 0)
    target = (ix[end[0]], iy[end[1]])
    cost = {initial: 0.}
    parent = {}
    serial = itertools.count()
    queue = [(_distance(start, end), 0., next(serial), initial)]
    expanded = 0
    winner = None
    segment_cache = {}
    def reverses_at_joint(previous: Point, joint: Point, following: Point) -> bool:
        """A route cannot turn back along its already drawn exact terminal lead."""
        return (((previous[0] == joint[0] == following[0]) and
                 (previous[1] - joint[1]) * (following[1] - joint[1]) > 0) or
                ((previous[1] == joint[1] == following[1]) and
                 (previous[0] - joint[0]) * (following[0] - joint[0]) > 0))
    while queue:
        _, current_cost, _, state = heapq.heappop(queue)
        if current_cost != cost.get(state):
            continue
        if state[:2] == target:
            winner = state
            break
        expanded += 1
        if expanded > max_expansions:
            raise LayoutError('Orthogonal routing expansion budget exhausted')
        x, y, incoming = state
        a = (xs[x], ys[y])
        for nx, ny, orientation in ((x - 1, y, 1), (x + 1, y, 1), (x, y - 1, 2), (x, y + 1, 2)):
            if not (0 <= nx < len(xs) and 0 <= ny < len(ys)):
                continue
            b = (xs[nx], ys[ny])
            if (a == start and start_lead_previous is not None and
                    reverses_at_joint(start_lead_previous, a, b)):
                continue
            if (b == end and end_lead_next is not None and
                    reverses_at_joint(a, b, end_lead_next)):
                continue
            edge_key = tuple(sorted((a, b)))
            if edge_key not in segment_cache:
                blocked = any(r.blocks(a, b) for r in blocks)
                collision, crossings = ((True, []) if blocked else
                    _intersections(a, b, reserved, net_id, shared,
                                   virtual_grid_endpoints=virtual_grid_crossings,
                                   strict_shared=virtual_grid_crossings))
                segment_cache[edge_key] = (collision, crossings)
            collision, crossings = segment_cache[edge_key]
            if collision:
                continue
            # A virtual grid vertex can be crossed only while travelling
            # straight through it. A turn there would become a real bend on
            # another conductor after route reconstruction.
            if virtual_grid_crossings and incoming and incoming != orientation and any(
                    tuple(cross['point']) == a and not cross['junction']
                    for cross in crossings):
                continue
            next_state = (nx, ny, orientation)
            extra = _distance(a, b) + (turn_cost if incoming and incoming != orientation else 0.)
            extra += crossing_cost * sum(not p['junction'] for p in crossings)
            new_cost = current_cost + extra
            if new_cost < cost.get(next_state, math.inf):
                cost[next_state] = new_cost
                parent[next_state] = state
                heapq.heappush(queue, (new_cost + _distance(b, end), new_cost, next(serial), next_state))
    if winner is None:
        raise LayoutError('No collision-free Manhattan route in the bounded channel set')
    chain = []
    current = winner
    while True:
        chain.append((xs[current[0]], ys[current[1]]))
        if current == initial:
            break
        current = parent[current]
    points = clean_manhattan(reversed(chain))
    all_crossings = {}
    for a, b in zip(points, points[1:]):
        blocked, crossings = _intersections(a, b, reserved, net_id, shared,
                                             strict_shared=virtual_grid_crossings)
        if blocked:
            raise LayoutError('Routing reservation changed during reconstruction')
        for cross in crossings:
            key = (tuple(cross['point']), cross['other'], cross['junction'])
            all_crossings[key] = cross
    return Route(points, tuple(all_crossings.values()), expanded, corner_radius)


def label_block(value: str, x: float, y: float, *, width: float, font_size: float = 22.,
                line_height: float | None = None, color: str = '#20372c', weight: int = 400,
                anchor: str = 'start') -> TextBlock:
    """Conservative wrapping bounds; y is the top, not an ambiguous baseline.

    Pixel typography still requires the owner's actual browser readback. This
    bound uses a full em per character rather than claiming measured font widths.
    """
    if font_size <= 0 or width < font_size or anchor not in {'start', 'middle', 'end'}:
        raise LayoutError('Invalid text layout')
    if not value.strip():
        raise LayoutError('Empty owner-facing label')
    line_height = line_height or font_size * 1.3
    if line_height < font_size:
        raise LayoutError('Text line height is below font size')
    chars = max(1, int(width / font_size))
    lines = tuple(line for paragraph in value.splitlines() for line in
                  (textwrap.wrap(paragraph, chars, break_long_words=True, break_on_hyphens=False) or ['']))
    left = x if anchor == 'start' else x - width / 2 if anchor == 'middle' else x - width
    spans = ''.join(f'<tspan x="{_number(x)}" y="{_number(y + font_size + i * line_height)}">'
                    + html.escape(line) + '</tspan>' for i, line in enumerate(lines))
    svg = (f'<text font-family="Arial,Helvetica,sans-serif" font-size="{_number(font_size)}" '
           f'font-weight="{weight}" fill="{html.escape(color, quote=True)}" text-anchor="{anchor}">{spans}</text>')
    return TextBlock(svg, Rect(left, y, width, font_size + (len(lines) - 1) * line_height), lines)


def reserve_label(value: str, candidates: Sequence[Rect], occupied: Sequence[Rect], *,
                  font_size: float = 22.) -> TextBlock:
    """Choose the first fitting reserved label bay, or explicitly fail layout."""
    for bay in candidates:
        block = label_block(value, bay.x, bay.y, width=bay.width, font_size=font_size)
        if block.bounds.height <= bay.height and not any(block.bounds.overlaps(r) for r in occupied):
            return block
    raise LayoutError('No readable reserved label bay: ' + value)


def _identifier(identifier: str) -> str:
    if not re.fullmatch(r'[A-Za-z_][A-Za-z0-9_.:-]*', identifier):
        raise LayoutError('Invalid SVG wire ID')
    return identifier


def conductor_svg(identifier: str, *, points: Iterable[Point], electrical_role: str,
                  state: str, display_label: str, radius: float = 10., width: float = 3.7,
                  paper: str = '#fffef9') -> tuple[str, dict]:
    """Keep evidence state visible: SOURCE solid, GUESS dotted, OPEN separated.

    Renderer must place wire_caption alongside the endpoint/route. A tooltip or
    C-number alone is not an owner-facing descriptive label. This routine does
    not upgrade source/guess/open status and returns that obligation in metadata.
    """
    _identifier(identifier)
    palette = source_palette('wire')
    if electrical_role not in palette:
        raise LayoutError('Missing reviewed electrical colour role: ' + electrical_role)
    if state not in {'guess', 'source', 'open'} or not display_label.strip() or width <= 0:
        raise LayoutError('Invalid conductor status, label or width')
    p = clean_manhattan(points)
    color = palette[electrical_role]
    if state == 'open':
        first_length, last_length = _distance(p[0], p[1]), _distance(p[-2], p[-1])
        stub = min(18., first_length / 4, last_length / 4, _distance(p[0], p[-1]) / 4)
        if stub <= 0:
            raise LayoutError('OPEN endpoints overlap')
        a, b = p[0], p[-1]
        a_end = (a[0] + (p[1][0] - a[0]) * stub / first_length,
                 a[1] + (p[1][1] - a[1]) * stub / first_length)
        b_end = (b[0] + (p[-2][0] - b[0]) * stub / last_length,
                 b[1] + (p[-2][1] - b[1]) * stub / last_length)
        paths = [rounded_orthogonal_path((a, a_end), 0), rounded_orthogonal_path((b_end, b), 0)]
        form = 'open-boundary'
    else:
        paths, form = [rounded_orthogonal_path(p, radius)], 'wire'
    drawing = [f'<g id="{identifier}" data-evidence-state="{state}" data-electrical-role="{electrical_role}">',
               '<title>' + html.escape(display_label + ' · ' + identifier + ' · ' + state.upper()) + '</title>']
    dash = ' stroke-dasharray="1 7"' if state == 'guess' else ''
    for path in paths:
        # Crossing clearance is a solid paper halo, not evidence-state dashing.
        drawing.append(f'<path d="{path}" fill="none" stroke="{paper}" stroke-width="{_number(width + 4)}" stroke-linecap="round" stroke-linejoin="round"/>')
        drawing.append(f'<path class="field-conductor" d="{path}" fill="none" stroke="{color}" stroke-width="{_number(width)}" stroke-linecap="round" stroke-linejoin="round"{dash}/>')
    drawing.append('</g>')
    return ''.join(drawing), {'connection_id': identifier, 'display_label': display_label,
        'state': state, 'electrical_role': electrical_role, 'color': color,
        'display_form': form, 'visual_evidence_style': {
            'guess': 'dotted', 'source': 'solid', 'open': 'separate-stubs'
        }[state], 'points': [list(v) for v in p],
        'paths': paths, 'visible_caption_required': True,
        'caption_status': 'OPEN — no wire to install' if state == 'open' else
                          'GUESS — proposed, unverified' if state == 'guess' else
                          'SOURCE — reported, not hardware-tested'}


def wire_caption(display_label: str, identifier: str, state: str, x: float, y: float,
                 width: float, *, font_size: float = 22.) -> TextBlock:
    """Function first, explicit evidence status, then smaller grey stable wire ID."""
    if state not in {'guess', 'source', 'open'}:
        raise LayoutError('Unknown evidence state')
    title = label_block(display_label, x, y, width=width, font_size=font_size, weight=700)
    status = {'guess': 'GUESS · proposed / unverified', 'source': 'SOURCE · reported path',
              'open': 'OPEN · do not connect'}[state]
    secondary = label_block(status + ' · ' + identifier, x, title.bounds.bottom + 5,
                            width=width, font_size=max(15., font_size * .72), color='#68777d')
    return TextBlock(title.svg + secondary.svg,
        Rect(x, y, width, secondary.bounds.bottom - y), title.lines + secondary.lines)


def paired_ground_svg(identifier: str, *, start: Point, end: Point, start_net: str,
                      end_net: str, start_label: str, end_label: str, state: str,
                      domain_kind: str, start_inline_label: bool = True,
                      end_inline_label: bool = True) -> tuple[str, dict]:
    """Only replace a sourced same-domain return; never infer GND/PE equivalence."""
    _identifier(identifier)
    if domain_kind not in {'logic-return', 'field-return', 'analog-reference'}:
        raise LayoutError('Circuit ground substitution is not a PE/shield/safety symbol')
    if not start_net or start_net != end_net or state not in {'guess', 'source'}:
        raise LayoutError('Ground symbols require an explicit matching net and non-OPEN route')
    if not start_label.strip() or not end_label.strip():
        raise LayoutError('Both return terminals need descriptive labels')
    drawing = [f'<g id="{identifier}" data-display-form="paired-ground-symbols" data-ground-net="{html.escape(start_net, quote=True)}">']
    for point, label, inline_label in (((_point(start), start_label, start_inline_label),
                                        (_point(end), end_label, end_inline_label))):
        x, y = point
        drawing.append(f'<g transform="translate({_number(x)} {_number(y)})"><title>' +
            html.escape(label + ' · ' + start_net + ' · ' + state.upper()) + '</title>' +
            '<circle r="15" fill="#111717"/><path d="M0 -7 V1 M-8 1 H8 M-5 5 H5 M-2 9 H2" '
            'fill="none" stroke="#fffef9" stroke-width="2" stroke-linecap="round"/></g>')
        if inline_label:
            drawing.append(label_block(label + ' · ' + start_net + ' · ' + state.upper(), x + 23, y - 12,
                                       width=330, font_size=17).svg)
    drawing.append('</g>')
    return ''.join(drawing), {'connection_id': identifier, 'state': state,
        'display_form': 'paired-ground-symbols', 'ground_net_id': start_net, 'domain_kind': domain_kind,
        'from_anchor': list(start), 'to_anchor': list(end),
        'visible_from': start_label, 'visible_to': end_label,
        'from_label_placement': 'inline' if start_inline_label else 'source-connector-bank',
        'to_label_placement': 'inline' if end_inline_label else 'source-connector-bank',
        'electrical_role': 'ground', 'color': source_palette('wire')['ground']}


LEGEND_LABELS = {
    'power': 'Power / load supply', 'three': '3.3 V supply', 'five': '5 V supply',
    'sensor': 'Selected sensor supply', 'ground': 'Circuit return · named domain',
    'signal': 'Input / analog / general signal', 'control': 'PWM / timer / control',
    'switched': 'Switched output or return', 'step': 'Motor STEP command',
    'direction': 'Motor DIR command', 'enable': 'Motor ENABLE command',
}


def functional_legend(x: float, y: float, *, width: float = 1200., columns: int = 3) -> TextBlock:
    if columns < 1 or width / columns < 200:
        raise LayoutError('Insufficient legend label width')
    colors = source_palette('wire')
    if set(colors) != set(LEGEND_LABELS):
        raise LayoutError('Source palette changed; review the displayed legend')
    cell = width / columns
    entries = []
    blocks = []
    row_y = y
    evidence_items = (
        ('SOURCE · reported path, not hardware-tested', '#128c68', 'solid'),
        ('GUESS · proposed, unverified', '#6550b1', 'dotted'),
        ('OPEN · disconnected; do not wire', '#d76a00', 'open'),
    )
    for offset in range(0, len(evidence_items), columns):
        row = []
        for column, (label, color, style) in enumerate(evidence_items[offset:offset + columns]):
            cx = x + column * cell
            block = label_block(label, cx + 55, row_y, width=cell - 65, font_size=18.)
            if style == 'open':
                entries.append(f'<path d="M{_number(cx)} {_number(row_y + 12)} h15 M{_number(cx + 25)} {_number(row_y + 12)} h15" fill="none" stroke="{color}" stroke-width="4" stroke-linecap="round"/>')
            else:
                dash = ' stroke-dasharray="1 7" stroke-linecap="round"' if style == 'dotted' else ''
                entries.append(f'<path d="M{_number(cx)} {_number(row_y + 12)} h40" fill="none" stroke="{color}" stroke-width="4"{dash}/>')
            entries.append(block.svg)
            row.append(block)
        blocks.extend(row)
        row_y += max(block.bounds.height for block in row) + 14
    items = list(colors.items())
    for offset in range(0, len(items), columns):
        row = []
        for column, (token, color) in enumerate(items[offset:offset + columns]):
            cx = x + column * cell
            block = label_block(LEGEND_LABELS[token], cx + 55, row_y,
                                width=cell - 65, font_size=18.)
            row.append(block)
            entries.append(f'<path d="M{_number(cx)} {_number(row_y + 12)} h40" fill="none" stroke="{color}" stroke-width="4"/>')
            entries.append(block.svg)
        blocks.extend(row)
        row_y += max(b.bounds.height for b in row) + 14
    note = label_block('Wire colour describes electrical function; line pattern shows evidence state. '
                       'SOURCE is reported, not hardware-tested. GUESS is proposed and unverified. OPEN is disconnected. '
                       'Crossings are not junctions unless a named shared-net junction is explicitly marked.',
                       x, row_y + 6, width=width, font_size=18.)
    return TextBlock(''.join(entries) + note.svg, Rect(x, y, width, note.bounds.bottom - y),
                     tuple(line for block in blocks + [note] for line in block.lines))
