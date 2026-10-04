#!/usr/bin/env python3
"""Render source-bounded machine retrofit diagrams and integrate them incrementally."""

from __future__ import annotations

import argparse
import html
import hashlib
import json
import re
import textwrap
import xml.etree.ElementTree as ElementTree
from pathlib import Path
from urllib.parse import quote


ROOT = Path(__file__).resolve().parents[3]
DATA_PATH = Path(__file__).with_name("retrofit-guides.json")
SVG_DIR = Path(__file__).with_name("smoothiebox-machine-wiring")
HTML_PATH = ROOT / "src/docs/machine-control-pinout-survey.html"


def source_inventory(identifier: str) -> dict[str, object]:
    """Read the retained source inventory without treating its old guesses as wiring."""
    archive = SVG_DIR.parent / "retrofit-source-contact-history" / f"{identifier}.svg"
    path = archive if archive.is_file() else SVG_DIR / f"{identifier}.svg"
    original = path.read_bytes()
    root = ElementTree.fromstring(original)
    metadata = next(element for element in root if element.get("id") == "contact-inventory")
    inventory = json.loads(metadata.text or "{}")
    return {"sha256": hashlib.sha256(original).hexdigest(), "peripherals": inventory["peripherals"]}


def inventory_html(guide: dict[str, object]) -> str:
    inventory = source_inventory(str(guide["id"]))
    sections = []
    total = 0
    for peripheral in inventory["peripherals"]:
        contacts = peripheral["contacts"]
        total += len(contacts)
        rows = []
        for contact in contacts:
            evidence = contact.get("fact", "unknown")
            disposition = "REFERENCE / verify fitted revision and continuity"
            if evidence == "form_inventory_only":
                disposition = "FORM ONLY / no sourced contact function"
            elif evidence == "source_unlisted":
                disposition = "UNLISTED / no assignment in source"
            rows.append("<tr>" + "".join(f"<td>{esc(str(value))}</td>" for value in (
                contact["mark"], contact["label"], disposition,
            )) + "</tr>")
        table = ('<div class="table-wrap"><table><thead><tr><th>Individual mark / pin</th><th>Source function</th><th>Retrofit disposition</th></tr></thead><tbody>' + "".join(rows) + '</tbody></table></div>') if rows else '<p><strong>OPEN:</strong> no individually identified contacts. Obtain a matching terminal drawing; a subsystem name is not a pin assignment.</p>'
        sections.append(f'<div class="retrofit-source-connector"><h6>{esc(str(peripheral["name"]))}</h6><p>{esc(str(peripheral.get("source", "")))}</p><p>{esc(str(peripheral.get("numbering", "")))}</p>{table}</div>')
    return f'<details class="retrofit-contact-schedule"><summary>Every source contact · {total} individually listed positions across {len(inventory["peripherals"])} peripheral groups</summary><p>These are source records, not a verified replacement-controller harness. Reference-only, nominal form positions and source-unlisted functions remain distinct. Retrofit wiring is specified in the route schedule above; an old candidate route is not inherited automatically.</p>' + "".join(sections) + '</details>'


def board_inventory_html() -> str:
    """Keep every exported board connector position visible without inventing usage."""
    data = json.loads(Path(__file__).with_name("retrofit-board-contacts.json").read_text())
    boards = []
    for identifier, board in data["boards"].items():
        rows = []
        for connector, item in board["connectors"].items():
            for pad in item["pads"]:
                rows.append('<tr>' + ''.join(f'<td>{esc(str(value))}</td>' for value in (
                    connector + '.' + pad['mark'], item['value'], pad['net'],
                    'Use only where the route schedule assigns it; otherwise leave the existing board function intact.',
                )) + '</tr>')
        source_url = data['repository'] + '/blob/' + data['revision'] + '/' + quote(board['path'])
        boards.append(f'<details><summary>{esc(identifier)} · {len(rows)} connector positions</summary><p><a href="{esc(source_url)}" target="_blank" rel="noopener">Exact PCB source: {esc(board["path"])}</a>; SHA-256 {esc(board["sha256"])}</p><div class="table-wrap"><table><thead><tr><th>Contact</th><th>Connector</th><th>PCB net</th><th>Disposition</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div></details>')
    return '<details class="retrofit-contact-schedule"><summary>Complete Core P1 and Prime P11/P12 board contact references</summary><p>Exact PCB-derived logical numbering at revision ' + esc(data['revision']) + '. This is not a mating-face drawing or proof of the fitted hardware revision. A leading slash in a net name is not evidence of active-low polarity. Power pins, motor winding outputs and GPIO must remain distinct.</p>' + ''.join(boards) + '</details>'


def diagram_contact_html(guide: dict[str, object]) -> str:
    """List drawn contacts even when unused or waiting for identification."""
    rows = []
    for panel in guide.get('wire_panels', []):
        for node in panel['nodes']:
            for contact in node['contacts']:
                key = node['id'] + '.' + contact['id']
                edges = [edge for edge in panel['edges'] if key in (edge['from'], edge['to'])]
                state = ' / '.join(sorted({edge['state'].upper() for edge in edges})) if edges else 'NO CONDUCTOR DRAWN · see terminal label and panel instruction'
                rows.append('<tr>' + ''.join(f'<td>{esc(str(value))}</td>' for value in (
                    panel['title'], node['title'], contact['label'], state,
                )) + '</tr>')
    if not rows:
        return ''
    return '<details class="retrofit-contact-schedule"><summary>Every terminal in the new diagram · including unused and unresolved contacts</summary><div class="table-wrap"><table><thead><tr><th>Circuit</th><th>Device</th><th>Individual terminal</th><th>Route state</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div></details>'


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def svg_text(value: str, x: int, y: int, width: int, class_name: str) -> str:
    lines: list[str] = []
    for line in value.split("\n"):
        words = line.split()
        current = ""
        for word in words:
            if current and len(current) + len(word) + 1 > width:
                lines.append(current)
                current = word
            else:
                current = f"{current} {word}".strip()
        lines.append(current)
    spans = "".join(
        f'<tspan x="{x}" dy="{0 if index == 0 else 24}">{esc(line)}</tspan>'
        for index, line in enumerate(lines)
    )
    return f'<text x="{x}" y="{y}" class="{class_name}">{spans}</text>'


def render_wire_panels(guide: dict[str, object]) -> str:
    """Draw actual contacts and individual conductors, including intermediate pins."""
    panels = guide["wire_panels"]
    content = []
    y = 195
    for panel_index, panel in enumerate(panels):
        content.append(svg_text(panel["title"], 60, y + 32, 100, "panel-title"))
        positions = {}
        occupied = {0: y + 65, 1: y + 65, 2: y + 65}
        bottom = y + 65
        for node in panel["nodes"]:
            if node["column"] not in occupied:
                raise ValueError(f'Invalid device column in {guide["id"]}: {node["id"]}')
            x = 60 + node["column"] * 490
            top = max(y + 65 + node.get("offset", 0), occupied[node["column"]])
            contacts = node["contacts"]
            if len({contact["id"] for contact in contacts}) != len(contacts):
                raise ValueError(f'Duplicate contact ID in {guide["id"]}: {node["id"]}')
            if any(contact["side"] not in {"left", "right"} for contact in contacts):
                raise ValueError(f'Invalid contact side in {guide["id"]}: {node["id"]}')
            counts = {side: sum(contact["side"] == side for contact in contacts) for side in ("left", "right")}
            label_width = 23 if counts['left'] and counts['right'] else 45
            label_lines = {contact['id']: textwrap.wrap(contact['label'], label_width, break_long_words=False, break_on_hyphens=False) or [''] for contact in contacts}
            row_pitch = max(38, max((len(lines) for lines in label_lines.values()), default=1) * 18 + 12)
            title_markup = svg_text(node["title"], x + 16, top + 27, 34, "device-title")
            header_extra = max(0, title_markup.count('<tspan') - 2) * 24
            height = 74 + header_extra + max(counts.values(), default=0) * row_pitch
            bottom = max(bottom, top + height)
            occupied[node["column"]] = top + height + 35
            content.append(f'<rect class="device" x="{x}" y="{top}" width="400" height="{height}"/>')
            content.append(title_markup)
            indexes = {"left": 0, "right": 0}
            for contact in contacts:
                side = contact["side"]
                cy = top + 77 + header_extra + indexes[side] * row_pitch
                indexes[side] += 1
                cx = x if side == "left" else x + 400
                key = f'{node["id"]}.{contact["id"]}'
                if key in positions:
                    raise ValueError(f'Duplicate device/contact ID in {guide["id"]}: {key}')
                positions[key] = (cx, cy, contact["label"], side)
                content.append(f'<circle class="terminal" cx="{cx}" cy="{cy}" r="5"/>')
                anchor = "start" if side == "left" else "end"
                tx = x + 13 if side == "left" else x + 387
                # A node with contacts on both sides uses short pin marks; functions live on wire endpoints.
                spans = ''.join(f'<tspan x="{tx}" dy="{0 if index == 0 else 18}">{esc(line)}</tspan>' for index, line in enumerate(label_lines[contact['id']]))
                content.append(f'<text class="pin" x="{tx}" y="{cy + 5}" text-anchor="{anchor}">{spans}</text>')
        bypass_count = 0
        device_bottom = bottom
        for edge_index, edge in enumerate(panel["edges"]):
            if not edge.get("function") or not edge.get("check", panel.get("note")):
                raise ValueError(f'Missing conductor purpose/check in {guide["id"]}')
            sx, sy, _, source_side = positions[edge["from"]]
            tx, ty, _, target_side = positions[edge["to"]]
            # Different conductors need separate bend columns: overlapping supply
            # and return paths would visually imply a short or shared conductor.
            middle = (sx + tx) / 2 + ((edge_index % 7) - 3) * 6
            if sx == tx and source_side == target_side:
                middle = sx + (1 if source_side == 'right' else -1) * (24 + (edge_index % 7) * 6)
            state = edge["state"]
            if state not in {"guess", "source", "open"}:
                raise ValueError(f'Invalid edge evidence state: {state}')
            style = "guess" if state == "guess" else "confirmed" if state == "source" else "open"
            if state == "open":
                # A missing electrical contract cannot look like a completed conductor.
                source_stub = sx + (18 if source_side == 'right' else -18)
                target_stub = tx + (18 if target_side == 'right' else -18)
                content.append(f'<path class="open" d="M{sx} {sy} H{source_stub} M{target_stub} {ty} H{tx}"/>')
                content.append(f'<text class="stop" x="{source_stub}" y="{sy - 8}" text-anchor="middle">OPEN</text>')
            else:
                direction = ' marker-end="url(#arrow)"' if edge.get("direction", True) else ""
                against_source_face = (source_side == 'left' and tx > sx) or (source_side == 'right' and tx < sx)
                against_target_face = (target_side == 'left' and sx > tx) or (target_side == 'right' and sx < tx)
                source_column = next(node['column'] for node in panel['nodes'] if node['id'] == edge['from'].split('.')[0])
                target_column = next(node['column'] for node in panel['nodes'] if node['id'] == edge['to'].split('.')[0])
                crosses_middle_device = abs(source_column - target_column) == 2 and any(node['column'] == 1 for node in panel['nodes'])
                if against_source_face or against_target_face or crosses_middle_device:
                    # A supply/reference bypass must not run through an unrelated
                    # interface body or its printed contact labels.
                    route_y = device_bottom + 25 + bypass_count * 18
                    bypass_count += 1
                    bottom = max(bottom, route_y + 12)
                    source_bend = sx + (20 if source_side == 'right' else -20)
                    target_bend = tx + (20 if target_side == 'right' else -20)
                    path = f'M{sx} {sy} H{source_bend} V{route_y} H{target_bend} V{ty} H{tx}'
                else:
                    path = f'M{sx} {sy} H{middle} V{ty} H{tx}'
                content.append(f'<path class="{style}"{direction} d="{path}"/>')
        note = panel["note"]
        lines = []
        for part in note.split("\n"):
            words = part.split()
            line = ""
            for word in words:
                if len(line) + len(word) + 1 > 125:
                    lines.append(line)
                    line = word
                else:
                    line = f"{line} {word}".strip()
            lines.append(line)
        for index, line in enumerate(lines):
            content.append(f'<text class="note" x="60" y="{bottom + 30 + index * 23}">{esc(line)}</text>')
        y = bottom + 70 + len(lines) * 23
        content.append(f'<path class="divider" d="M60 {y - 12} H1440"/>')
    height = y + 120
    header = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 {height}" role="img" aria-labelledby="title desc">',
        f'<title id="title">{esc(str(guide["title"]))} individual-conductor retrofit diagram</title>',
        '<desc id="desc">Exact controller, interface, driver, supply and machine terminal labels are joined by separate conductors. Dotted routes are proposed unverified guesses. OPEN breaks identify the missing connection. Numbering is logical, not a mating-face view.</desc>',
        '<metadata id="retrofit-provenance">' + esc(json.dumps({"profile_id": guide["id"], "wire_panels": panels, "source_inventory_sha256": source_inventory(str(guide["id"]))["sha256"]})) + '</metadata>',
        '<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#59616c"/></marker></defs>',
        '<style>text{font-family:Arial,sans-serif;fill:#152329}.head{font-size:31px;font-weight:700}.sub{font-size:18px}.panel-title{font-size:23px;font-weight:700}.device{fill:#fff;stroke:#537078;stroke-width:2;rx:10}.device-title{font-size:19px;font-weight:700}.pin{font-size:16px}.terminal{fill:#fff;stroke:#31535b;stroke-width:2}.guess{stroke:#7948a0;stroke-width:3;stroke-dasharray:8 6;fill:none}.confirmed{stroke:#087361;stroke-width:3;fill:none}.open{stroke:#bd542f;stroke-width:3;stroke-dasharray:3 7;fill:none}.stop{font-size:10px;fill:#a13820;font-weight:700}.note{font-size:16px;fill:#394d55}.divider{stroke:#bdcacc;stroke-width:1}</style>',
        f'<rect width="1500" height="{height}" fill="#f5f7f6"/>',
        svg_text(str(guide["title"]) + " · individual conductor plan", 60, 50, 85, "head"),
        '<text class="sub" x="60" y="107">Dotted = GUESS / proposed conversion, verify before energizing · Green = retained source path · Broken = OPEN</text>',
        '<text class="sub" x="60" y="138">Each circle is one named physical pin, terminal or identified lead. Connector orientation and fitted revision must match.</text>',
        '<text class="sub" x="60" y="169">Crossing lines are not junctions. Connections exist only at the named terminal circles and explicitly shared nets.</text>',
    ]
    return "\n".join(header + content + [f'<text class="note" x="60" y="{y + 32}">Read the exact per-wire schedule, full contact inventory, parts, configuration and source checks in the accompanying profile.</text>', '</svg>'])


def render_svg(guide: dict[str, object]) -> str:
    if guide.get("wire_panels"):
        return render_wire_panels(guide)
    circuits = guide["circuits"]
    assert isinstance(circuits, list)
    peripheral_pins = guide.get("peripheral_pins", [])
    peripheral_height = 690 if peripheral_pins else 0
    row_pitch = 180
    height = max(840, 350 + len(circuits) * row_pitch + peripheral_height)
    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 {height}" role="img" aria-labelledby="title desc">',
        '<title id="title">' + esc(str(guide["title"])) + ' retrofit wiring plan</title>',
        '<desc id="desc">Functional wiring paths from the proposed Smoothie controller through required interfaces to machine peripherals. Dotted paths are unverified guesses; open paths are blocked pending exact source or hardware identification.</desc>',
        '<metadata id="retrofit-provenance">' + esc(json.dumps({"profile_id": guide["id"], "source_inventory_sha256": source_inventory(str(guide["id"]))["sha256"], "circuits": guide["circuits"]})) + '</metadata>',
        '<style>text{font-family:Arial,sans-serif;fill:#152329}.bg{fill:#f5f7f6}.head{font-size:34px;font-weight:700}.sub{font-size:20px;fill:#42545b}.col{font-size:17px;font-weight:700;fill:#42545b;letter-spacing:1px}.box{fill:#fff;stroke:#597078;stroke-width:2;rx:12}.node{font-size:18px;font-weight:700}.detail{font-size:16px;fill:#30434a}.guess{stroke:#7b4ba1;stroke-width:5;stroke-dasharray:12 10;fill:none}.open{stroke:#bd542f;stroke-width:4;stroke-dasharray:4 8;fill:none}.confirmed{stroke:#087361;stroke-width:5;fill:none}.status{font-size:15px;font-weight:700}.guess-status{fill:#68408b;font-size:14px;font-weight:800}.legend{font-size:17px}</style>',
        f'<rect class="bg" width="1500" height="{height}"/>',
        f'<text class="head" x="60" y="58">{esc(str(guide["title"]))} · retrofit wiring</text>',
        svg_text("Selected architecture: " + str(guide["target"]), 60, 101, 110, "sub"),
        '<text class="col" x="75" y="185">SMOOTHIE TARGET / SOURCE</text><text class="col" x="565" y="185">DRIVER OR INTERFACE</text><text class="col" x="1070" y="185">MACHINE-SIDE PERIPHERAL</text>',
    ]
    for index, circuit in enumerate(circuits):
        source, interface, endpoint, status = circuit
        y = 215 + index * row_pitch
        for x, text_value in ((60, source), (540, interface), (1040, endpoint)):
            out.append(f'<rect class="box" x="{x}" y="{y}" width="400" height="105"/>')
            out.append(svg_text(text_value, x + 18, y + 30, 32, "node"))
        # Terminal dots make the two boundaries explicit; a missing adapter is not a wire.
        for x in (460, 540, 940, 1040):
            out.append(f'<circle cx="{x}" cy="{y + 52}" r="5" fill="#fff" stroke="#597078" stroke-width="2"/>')
        status_upper = status.upper()
        if status_upper.startswith("[GUESS]"):
            out.append(f'<path class="guess" d="M460 {y + 52} H540 M940 {y + 52} H1040"/>')
        elif status_upper.startswith("[SOURCE PATH]"):
            out.append(f'<path class="confirmed" d="M460 {y + 52} H540 M940 {y + 52} H1040"/>')
        else:
            # Unknown interfaces stay physically disconnected in the drawing.
            out.append(f'<path class="open" d="M475 {y + 37} v30 M1025 {y + 37} v30"/>')
        visible_status = status.replace("[OPEN] OPEN:", "[OPEN]").replace("[OPEN] OPEN", "[OPEN]")
        out.append(svg_text(visible_status, 65, y + 128, 108, "status"))
    legend_y = 235 + len(circuits) * row_pitch
    out.extend([
        f'<path class="guess" d="M70 {legend_y} h100"/><text class="legend" x="190" y="{legend_y + 6}">Dotted violet = GUESS; validate before connecting</text>',
        f'<path class="open" d="M700 {legend_y} h100"/><text class="legend" x="820" y="{legend_y + 6}">OPEN = missing terminal, variant, or electrical contract</text>',
        f'<text class="detail" x="60" y="{legend_y + 52}">A diagram row is a functional route; exact cavity/terminal labels and gates are listed in the accompanying schedule.</text>',
        f'<text class="detail" x="60" y="{legend_y + 86}">Power, motor phases, signal references, protective earth, and independent safety are separate circuits. Never energize a guessed route.</text>',
    ])
    if peripheral_pins:
        pin_start = legend_y + 140
        out.append(f'<rect class="box" x="55" y="{pin_start}" width="1390" height="640"/>')
        out.append(f'<text class="node" x="80" y="{pin_start + 35}">Machine-side peripheral contact schedule · logical numbering, not a connector mating-face view</text>')
        for index, pin in enumerate(peripheral_pins):
            column = index // 13
            row = index % 13
            x = 88 + column * 680
            y = pin_start + 80 + row * 39
            number = esc(str(pin[0]))
            label = esc(str(pin[1]))
            state = str(pin[2])
            swatch = "guess" if state == "guess" else "open"
            out.append(f'<circle cx="{x + 12}" cy="{y - 6}" r="11" fill="#fff" stroke="#25424c" stroke-width="2"/><text class="detail" x="{x + 12}" y="{y}" text-anchor="middle">{number}</text>')
            out.append(f'<text class="detail" x="{x + 34}" y="{y}">{label}</text>')
            if state == "guess":
                out.append(f'<text class="guess-status" x="{x + 540}" y="{y}">GUESS</text>')
        out.append('<text class="detail" x="80" y="' + str(pin_start + 620) + '">Smoothie controller routes enter this separate machine-side DB25 peripheral at only the explicitly dotted candidate STEP/DIR pins above.</text>')
    out.append('</svg>')
    return "\n".join(out)


def build_html(guide: dict[str, object]) -> str:
    identifier = str(guide["id"])
    title = esc(str(guide["title"]))
    plan = esc(str(guide["plan"]))
    pins = guide["pins"]
    sources = guide["sources"]
    assert isinstance(pins, list) and isinstance(sources, list)
    pin_items = "".join(f"<li>{esc(str(item))}</li>" for item in pins)
    peripheral_pins = guide.get("peripheral_pins", [])
    pin_table = ""
    if peripheral_pins:
        pin_rows = "".join(
            f'<tr><td>{esc(str(pin[0]))}</td><td>{esc(str(pin[1]))}</td><td>{"GUESS · verify return/interface" if pin[2] == "guess" else "OPEN / no Smoothie route proposed"}</td></tr>'
            for pin in peripheral_pins
        )
        pin_table = '<div class="table-wrap"><table><thead><tr><th>DB25 pin</th><th>Sherline 8760 source function</th><th>Retrofit disposition</th></tr></thead><tbody>' + pin_rows + '</tbody></table></div>'
    source_items = "".join(
        f'<li><a href="{esc(str(url))}" rel="noopener noreferrer" target="_blank">{esc(str(label))}</a></li>'
        for label, url in sources
    )
    source_items += (
        '<li><a href="https://www.robosprout.com/product/smoothieboard-v2-core-2/" rel="noopener noreferrer" target="_blank">Smoothieboard V2 Core product information</a> · <a href="https://github.com/Smoothieware/Smoothieboard2/tree/master/V2_Core_P1" rel="noopener noreferrer" target="_blank">Core P1 hardware source</a></li>'
        '<li><a href="https://smoothieware.org/smoothieboard-v2-prime" rel="noopener noreferrer" target="_blank">Smoothieboard V2 Prime specifications</a></li>'
        '<li><a href="https://smoothieware.org/smoothieboard-v2-schematic" rel="noopener noreferrer" target="_blank">Smoothieboard V2 schematic reference</a></li>'
        '<li><a href="https://github.com/Ccecil/StepXternal" rel="noopener noreferrer" target="_blank">StepXternal V2 STEP/DIR breakout design reference</a></li>'
    )
    target_assessment = (
        '<h5>How the three Smoothie target choices differ</h5><ul>'
        '<li><strong>SmoothieBox:</strong> enclosure/carrier, not a distinct controller. Select a Core or Prime and verify the exact carrier/harness mapping; the proposed exterior-contact schedule alone does not prove a board-to-terminal cable.</li>'
        '<li><strong>V2 Core:</strong> motion control is logic-level STEP/DIR. The Core P1 J5 reference maps channel A STEP/DIR to pins 16/18, B to 22/24, C to 28/30, D to 34/36, and shared <code>/MOT_EN</code> to pin 13. Axis assignment, pin numbering at the assembled connector, logic reference, buffer and external driver remain to be verified for the exact board/harness.</li>'
        '<li><strong>V2 Prime:</strong> its four onboard motor outputs are stepper winding power outputs, usable only when motor and supply ratings fit. They are not external-driver STEP/DIR pins. The separate StepXternal design is a candidate way to break out V2 step/direction signals, but connector/revision fit and electrical compatibility must be verified.</li>'
        '</ul><h5>Safe conversion sequence</h5><ol><li>Record controller, drive, motor, PSU and peripheral model/revision labels; isolate power and retain the physical safety chain.</li><li>With power isolated, trace each cable and identify every phase, signal, return, supply, shield and unused contact from matching manuals; confirm with continuity checks.</li><li>Before mating connectors, compare motor current/voltage, input thresholds, polarity, pulse timing, isolation and return paths against exact board and receiver specifications.</li><li>Commission with hazardous process loads disabled: test the safety chain first, then one axis at a time at conservative settings; verify endstops, probe and fault behavior before enabling spindle, laser or heaters.</li></ol>'
    )
    if guide.get("target_options"):
        options = guide["target_options"]
        target_assessment = '<h5>Which Smoothie target fits this machine?</h5><ul>' + "".join(
            f'<li><strong>{esc(label)}:</strong> {esc(options[key])}</li>'
            for key, label in (("smoothiebox", "SmoothieBox"), ("core", "V2 Core"), ("prime", "V2 Prime"))
        ) + '</ul>'
    if guide.get("parts"):
        target_assessment += '<h5>Retain or add</h5><ul>' + "".join(f'<li>{esc(item)}</li>' for item in guide["parts"]) + '</ul>'
    if guide.get("instructions"):
        target_assessment += '<h5>Conversion and commissioning</h5><ol>' + "".join(f'<li>{esc(item)}</li>' for item in guide["instructions"]) + '</ol>'
    circuit_rows = "".join(
        "<tr>" + "".join(f"<td>{esc(str(cell)).replace(chr(10), '<br>')}</td>" for cell in circuit) + "</tr>"
        for circuit in guide["circuits"]
    )
    if guide.get("wire_panels"):
        circuit_rows = ""
        for panel in guide["wire_panels"]:
            contacts = {f'{node["id"]}.{contact["id"]}': node["title"] + " · " + contact["label"] for node in panel["nodes"] for contact in node["contacts"]}
            for edge in panel["edges"]:
                circuit_rows += '<tr>' + ''.join(f'<td>{esc(value)}</td>' for value in (
                    contacts[edge["from"]], edge["function"], contacts[edge["to"]],
                    edge["state"].upper() + " · " + edge.get("check", panel["note"]),
                )) + '</tr>'
    return (
        f'<section class="retrofit-guide" id="{identifier}-retrofit-guide" data-retrofit-guide="{identifier}">'
        f'<h4>Owner retrofit guide · {title}</h4><p>{plan}</p>'
        f'<figure class="atlas-smoothiebox-figure"><button class="zoom-figure" type="button" data-caption="Functional retrofit wiring plan for {title}. Dotted violet paths are unverified guesses; OPEN paths have visible breaks.">'
        f'<img loading="lazy" decoding="async" alt="Functional controller-to-interface-to-machine wiring plan for {title}; dotted violet lines are unverified guesses and OPEN labels mark blocked paths" src="/machine-control-pinout-survey/smoothiebox-machine-wiring/retrofit-{identifier}.svg"></button>'
        f'<a href="/machine-control-pinout-survey/smoothiebox-machine-wiring/retrofit-{identifier}.svg" target="_blank" rel="noopener">Open full-size SVG</a>'
        f'<figcaption><strong>{title} functional retrofit diagram.</strong> Dotted violet = GUESS; each guess has its evidence and validation gate below. OPEN marks a missing physical/electrical contract. This drawing distinguishes controller logic from driver, load, and machine connector contacts.</figcaption></figure>'
        f'{target_assessment}<h5>Terminal-to-terminal route schedule</h5><div class="table-wrap"><table><thead><tr><th>From terminal</th><th>Conductor purpose</th><th>To terminal</th><th>Evidence and preconnection check</th></tr></thead><tbody>{circuit_rows}</tbody></table></div>'
        f'<h5>Pin-by-pin schedule and commissioning notes</h5>{pin_table}<ul>{pin_items}</ul>'
        f'{diagram_contact_html(guide)}{inventory_html(guide)}{board_inventory_html()}'
        f'<p>The profile’s earlier source-contact diagram and retained pin inventory remain at the <a href="#{identifier}-legacy-contact-census">contact reference later in this profile</a>. Use it alongside this conversion plan; reference-only and unverified entries remain clearly marked.</p>'
        f'<h5>Sources</h5><ul>{source_items}</ul></section>'
    )


def integrate(guide: dict[str, object], document: str) -> str:
    identifier = str(guide["id"])
    marker = f'data-retrofit-guide="{identifier}"'
    if marker in document:
        pattern = re.compile(r'<section class="retrofit-guide" id="' + re.escape(identifier) + r'-retrofit-guide".*?</section>', re.S)
        found = pattern.search(document)
        if found:
            document = document[:found.start()] + document[found.end():]
    article = re.compile(r'(<article\b(?=[^>]*\bid="' + re.escape(identifier) + r'")[^>]*>.*?)(</article>)', re.S)
    def insert(match: re.Match[str]) -> str:
        body = match.group(1)
        body = body.replace(f' id="{identifier}-legacy-contact-census"', '')
        legacy = re.search(r'<details class="atlas-legacy-diagrams">', body)
        if legacy:
            body = body[:legacy.start()] + body[legacy.start():].replace(
                '<details class="atlas-legacy-diagrams">',
                f'<details class="atlas-legacy-diagrams" id="{identifier}-legacy-contact-census">',
                1,
            )
        else:
            legacy_figure = re.search(r'<figure(?=[^>]*class="[^"]*atlas-smoothiebox-figure)[^>]*>', body)
            if legacy_figure:
                tag = legacy_figure.group(0)
                if "id=" not in tag:
                    body = body[:legacy_figure.start()] + tag[:-1] + f' id="{identifier}-legacy-contact-census">' + body[legacy_figure.end():]
        header_end = body.find("</header>")
        if header_end >= 0:
            header_end += len("</header>")
            body = body[:header_end] + build_html(guide) + body[header_end:]
        else:
            body += build_html(guide)
        return body + match.group(2)
    updated, count = article.subn(insert, document, count=1)
    if count != 1:
        raise RuntimeError(f"Expected exactly one profile article for {identifier}; found {count}")
    return updated


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", nargs="*", help="Only render and integrate these profile IDs")
    args = parser.parse_args()
    data = json.loads(DATA_PATH.read_text())
    guides = data["guides"]
    selected = [guide for guide in guides if not args.ids or guide["id"] in args.ids]
    if args.ids and {guide["id"] for guide in selected} != set(args.ids):
        raise RuntimeError("Unknown guide ID requested")
    document = HTML_PATH.read_text()
    for guide in selected:
        svg_path = SVG_DIR / f"retrofit-{guide['id']}.svg"
        rendered = render_svg(guide)
        archive = SVG_DIR.parent / "retrofit-source-contact-history" / f"{guide['id']}.svg"
        if archive.is_file():
            census = next(element for element in ElementTree.fromstring(archive.read_bytes()) if element.get("id") == "contact-inventory")
            # Retained source metadata supports existing inventory consumers, not the new route claims.
            rendered = rendered.replace("</svg>", '<metadata id="contact-inventory">' + esc(census.text or "{}") + '</metadata></svg>')
        svg_path.write_text(rendered)
        # Keep existing direct links useful while preserving the source census separately.
        (SVG_DIR / f"{guide['id']}.svg").write_text(rendered)
        canonical = SVG_DIR.parent / 'machine-page-source' / 'articles' / (guide['id'] + '.html')
        if canonical.exists():
            canonical.write_text(integrate(guide, canonical.read_text()))
            from build_machine_pages import build as build_pages
            build_pages({guide['id']}, update_index='machine-detail-link' in HTML_PATH.read_text())
        else:
            document = integrate(guide, document)
            HTML_PATH.write_text(document)
        print(json.dumps({"type": "artifact", "profile_id": guide["id"], "svg_path": str(svg_path), "html_path": str(HTML_PATH)}))
    print(json.dumps({"type": "summary", "integrated": len(selected), "total": len(guides)}))


if __name__ == "__main__":
    main()
