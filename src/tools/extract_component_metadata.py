#!/usr/bin/env python3
"""Extract Smoothieboard component metadata from the KiCad PCB file.

This script parses the KiCad `.kicad_pcb` for Smoothieboard v2 Prime and
produces YAML files containing component and connector placement metadata for
either the top (front) or bottom (back) side of the board.

Usage examples:

    python src/tools/extract_component_metadata.py --side top \
        --output-dir data/board-design-research/top/metadata/

    python src/tools/extract_component_metadata.py --side bottom \
        --output-dir data/board-design-research/bottom/metadata/

The script is intentionally lightweight (regex-based) to avoid heavy
dependencies while still producing high-quality metadata for the SVG pipeline.
"""

from __future__ import annotations

import argparse
import math
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Tuple

import yaml

PROJECT_ROOT = Path(__file__).resolve().parents[2]
KICAD_PCB_PATH = PROJECT_ROOT / "data" / "v2-prime-original" / "V2_P12_Prime2590" / "smoothiev2-prime.kicad_pcb"

IMAGE_WIDTH_PX = 1723
IMAGE_HEIGHT_PX = 960
DPI = 600.0
MM_PER_INCH = 25.4

MM_TO_PX = DPI / MM_PER_INCH


@dataclass
class Footprint:
    reference: str
    value: str
    footprint: str
    layer: str
    x_mm: float
    y_mm: float
    rotation_deg: float


@dataclass
class BoardBounds:
    min_x: float
    max_x: float
    min_y: float
    max_y: float

    @property
    def width_mm(self) -> float:
        return self.max_x - self.min_x

    @property
    def height_mm(self) -> float:
        return self.max_y - self.min_y


FOOTPRINT_RE = re.compile(r"\(footprint \"([^\"]+)\"")
LAYER_RE = re.compile(r"\(layer \"([^\"]+)\"\)")
AT_RE = re.compile(r"\(at ([\-0-9.]+) ([\-0-9.]+)(?: ([\-0-9.]+))?\)")
REFERENCE_RE = re.compile(r"\(property \"Reference\" \"([^\"]+)\"")
VALUE_RE = re.compile(r"\(property \"Value\" \"([^\"]*)\"")

EDGE_START_RE = re.compile(r"\(gr_(line|arc|rect|circle|polyline)\b")
COORD_RE_TEMPLATE = r"\({keyword} ([\-0-9.]+) ([\-0-9.]+)\)"


def read_kicad_file(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"KiCad PCB file not found: {path}")
    return path.read_text(encoding="utf-8")


def extract_block(content: str, start: int) -> str | None:
    depth = 0
    i = start
    while i < len(content):
        char = content[i]
        if char == "(":
            depth += 1
        elif char == ")":
            depth -= 1
            if depth == 0:
                return content[start : i + 1]
        i += 1
    return None


def iter_footprint_blocks(content: str) -> Iterable[str]:
    idx = 0
    while True:
        start = content.find("(footprint", idx)
        if start == -1:
            break
        block = extract_block(content, start)
        if block is None:
            break
        yield block
        idx = start + len(block)


def iter_edge_cut_blocks(content: str) -> Iterable[str]:
    for match in EDGE_START_RE.finditer(content):
        start = match.start()
        block = extract_block(content, start)
        if block and "(layer \"Edge.Cuts\")" in block:
            yield block


def parse_footprint(block: str) -> Footprint | None:
    fp_match = FOOTPRINT_RE.search(block)
    at_match = AT_RE.search(block)
    layer_match = LAYER_RE.search(block)
    ref_match = REFERENCE_RE.search(block)
    value_match = VALUE_RE.search(block)

    if not (fp_match and at_match and layer_match and ref_match):
        return None

    rotation = float(at_match.group(3)) if at_match.group(3) else 0.0
    return Footprint(
        reference=ref_match.group(1),
        value=value_match.group(1) if value_match else "",
        footprint=fp_match.group(1),
        layer=layer_match.group(1),
        x_mm=float(at_match.group(1)),
        y_mm=float(at_match.group(2)),
        rotation_deg=rotation,
    )


def gather_board_bounds(content: str) -> BoardBounds:
    xs: List[float] = []
    ys: List[float] = []
    for block in iter_edge_cut_blocks(content):
        for keyword in ("start", "end", "mid", "center", "xy"):
            coord_re = re.compile(COORD_RE_TEMPLATE.format(keyword=keyword))
            for x_str, y_str in coord_re.findall(block):
                xs.append(float(x_str))
                ys.append(float(y_str))
    if not xs or not ys:
        raise RuntimeError("Unable to determine board bounds from Edge.Cuts data.")
    return BoardBounds(min(xs), max(xs), min(ys), max(ys))


def mm_to_pixel(x_mm: float, y_mm: float, bounds: BoardBounds) -> Tuple[float, float]:
    scale_x = IMAGE_WIDTH_PX / bounds.width_mm
    scale_y = IMAGE_HEIGHT_PX / bounds.height_mm
    px = (x_mm - bounds.min_x) * scale_x
    # Invert Y to map KiCad coordinate system (Y up) to image coordinates (Y down)
    py = (bounds.max_y - y_mm) * scale_y
    return px, py


def is_connector(fp: Footprint) -> bool:
    ref = fp.reference.upper()
    footprint_lower = fp.footprint.lower()
    value_lower = fp.value.lower()
    if ref.startswith(("J", "P", "X")):
        return True
    connector_keywords = ["connector", "usb", "header", "socket", "xt", "rj", "term", "plug"]
    return any(keyword in footprint_lower or keyword in value_lower for keyword in connector_keywords)


def functional_name(fp: Footprint) -> str:
    if fp.value:
        return fp.value
    return fp.footprint.split(":")[-1]


def build_record(fp: Footprint, bounds: BoardBounds) -> dict:
    pixel_x, pixel_y = mm_to_pixel(fp.x_mm, fp.y_mm, bounds)
    func_name = functional_name(fp)
    label_slug = re.sub(r"[^A-Za-z0-9]+", "_", func_name) if func_name else fp.reference
    return {
        "reference": fp.reference,
        "name": func_name,
        "functional_label": f"{fp.reference}_{label_slug}" if func_name else fp.reference,
        "footprint": fp.footprint,
        "layer": fp.layer,
        "x_mm": round(fp.x_mm, 6),
        "y_mm": round(fp.y_mm, 6),
        "rotation_deg": round(fp.rotation_deg, 3),
        "pixel": {"x": round(pixel_x, 2), "y": round(pixel_y, 2)},
        "status": "pending",
        "notes": "",
        "iteration": 0,
    }


def filter_by_side(footprints: Iterable[Footprint], side: str) -> List[Footprint]:
    if side == "top":
        predicate = lambda fp: fp.layer.startswith("F.")
    else:
        predicate = lambda fp: fp.layer.startswith("B.")
    return [fp for fp in footprints if predicate(fp)]


def write_yaml(records: List[dict], key: str, path: Path) -> None:
    data = {key: records}
    with path.open("w", encoding="utf-8") as fh:
        yaml.safe_dump(data, fh, sort_keys=False)


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract Smoothieboard component metadata from KiCad.")
    parser.add_argument("--side", choices=["top", "bottom"], default="top", help="Board side to extract")
    parser.add_argument(
        "--output-dir",
        default="data/board-design-research/top/metadata/",
        help="Directory where components.yaml/connectors.yaml will be written",
    )
    parser.add_argument(
        "--pcb",
        default=str(KICAD_PCB_PATH),
        help="Path to the KiCad .kicad_pcb file",
    )
    args = parser.parse_args()

    content = read_kicad_file(Path(args.pcb))
    bounds = gather_board_bounds(content)

    footprints: List[Footprint] = []
    for block in iter_footprint_blocks(content):
        fp = parse_footprint(block)
        if fp is not None:
            footprints.append(fp)

    filtered = filter_by_side(footprints, args.side)

    components: List[dict] = []
    connectors: List[dict] = []

    for fp in filtered:
        record = build_record(fp, bounds)
        if is_connector(fp):
            connectors.append(record)
        else:
            components.append(record)

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    write_yaml(components, "components", output_dir / "components.yaml")
    write_yaml(connectors, "connectors", output_dir / "connectors.yaml")

    summary = (
        f"Extracted {len(filtered)} footprints for the {args.side} side: "
        f"{len(components)} components, {len(connectors)} connectors.\n"
        f"Board bounds: width={bounds.width_mm:.2f} mm, height={bounds.height_mm:.2f} mm."
    )
    print(summary)


if __name__ == "__main__":
    main()
