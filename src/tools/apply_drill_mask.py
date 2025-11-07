#!/usr/bin/env python3
"""Apply the drill-hole mask to PCBDraw-generated SVG layers."""

from __future__ import annotations

import argparse
import copy
import math
import pathlib
import re
from dataclasses import dataclass
from typing import Iterable, List, Optional, Tuple

import xml.etree.ElementTree as ET


SVG_NS: str = "http://www.w3.org/2000/svg"
ET.register_namespace("", SVG_NS)
ET.register_namespace("sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd")
ET.register_namespace("xlink", "http://www.w3.org/1999/xlink")
NS_MAP = {"svg": SVG_NS}
MASK_ID: str = "drill-hole-mask"
MAX_ASSIGN_DISTANCE_MM: float = 0.75  # tolerance when pairing Excellon hits


@dataclass
class HoleDefinition:
    """Holds the centre and radius for a single drill hole."""

    cx: float
    cy: float
    radius: float
    fallback_radius: float


def parse_arguments() -> argparse.Namespace:
    """Build the CLI parser and return parsed arguments."""
    parser = argparse.ArgumentParser(
        description="Embed drill-hole transparency mask into PCBDraw SVG layers."
    )
    parser.add_argument(
        "--mask",
        required=True,
        type=pathlib.Path,
        help="Path to the drill-hole mask SVG exported by PcbDraw.",
    )
    parser.add_argument(
        "--drill-file",
        action="append",
        default=[],
        type=pathlib.Path,
        help="Optional Excellon drill file(s) to derive precise hole diameters.",
    )
    parser.add_argument(
        "targets",
        nargs="+",
        type=pathlib.Path,
        help="SVG files or directories whose layers should receive the drill mask.",
    )
    return parser.parse_args()


def load_mask_source(
    mask_path: pathlib.Path,
) -> Tuple[dict, ET.Element, List[HoleDefinition]]:
    """Load the mask SVG and return the board rectangle, drill group, and holes."""
    tree = ET.parse(mask_path)
    root = tree.getroot()

    board_rect = root.find(".//svg:g[@class='board-area']/svg:rect", NS_MAP)
    if board_rect is None:
        raise ValueError("Mask SVG does not define a board-area rectangle.")

    required_keys = ("x", "y", "width", "height")
    rect_attributes = {key: board_rect.get(key) for key in required_keys}
    if not all(rect_attributes.values()):
        raise ValueError("Board rectangle must provide x, y, width and height.")

    drill_group = root.find(".//svg:g[@class='drill-holes']", NS_MAP)
    if drill_group is None:
        raise ValueError("Mask SVG does not contain a drill-holes group.")

    drill_copy = copy.deepcopy(drill_group)
    drill_copy.set("fill", "#000000")
    drill_copy.set("stroke", "#000000")
    holes = _extract_holes_from_group(drill_copy)
    return rect_attributes, drill_copy, holes


def _extract_holes_from_group(group: ET.Element) -> List[HoleDefinition]:
    """Extract drill centres and fallback radii from a drill-hole group."""
    translate_re = re.compile(r"translate\(([^)]+)\)")
    holes: List[HoleDefinition] = []
    for parent in list(group.iter()):
        for child in list(parent):
            if not child.tag.endswith("polyline"):
                continue
            stroke_width = child.get("stroke-width")
            transform = child.get("transform", "")
            match = translate_re.search(transform)
            if stroke_width is None or match is None:
                parent.remove(child)
                continue
            coords = match.group(1).replace(",", " ").split()
            if len(coords) < 2:
                parent.remove(child)
                continue
            cx, cy = float(coords[0]), float(coords[1])
            try:
                fallback_radius = float(stroke_width) / 2.0
            except ValueError:
                parent.remove(child)
                continue
            holes.append(HoleDefinition(cx=cx, cy=cy, radius=fallback_radius, fallback_radius=fallback_radius))
            parent.remove(child)
    return holes


def collect_target_paths(targets: Iterable[pathlib.Path]) -> List[pathlib.Path]:
    """Expand input arguments into a flat list of SVG file paths."""
    svg_paths: List[pathlib.Path] = []
    for target in targets:
        if target.is_dir():
            svg_paths.extend(sorted(target.glob("*.svg")))
        elif target.suffix.lower() == ".svg":
            svg_paths.append(target)
    return svg_paths


def read_doctype(svg_path: pathlib.Path) -> Optional[str]:
    """Return the DOCTYPE line if one is present."""
    for line in svg_path.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if stripped.startswith("<!DOCTYPE"):
            return stripped
    return None


def ensure_defs(root: ET.Element) -> ET.Element:
    """Ensure a <defs> element exists and return it."""
    defs = root.find("svg:defs", NS_MAP)
    if defs is not None:
        return defs

    defs = ET.Element(f"{{{SVG_NS}}}defs")
    insert_index = 0
    for index, child in enumerate(list(root)):
        local = child.tag.split("}", 1)[-1]
        if local in ("title", "desc", "metadata"):
            insert_index = index + 1
        else:
            break
    root.insert(insert_index, defs)
    return defs


def remove_existing_mask(defs: ET.Element) -> None:
    """Remove any previously injected mask with the same identifier."""
    for existing in list(defs.findall(f"svg:mask[@id='{MASK_ID}']", NS_MAP)):
        defs.remove(existing)


def create_mask_element(
    rect_attributes: dict,
    drill_group: ET.Element,
) -> ET.Element:
    """Create a <mask> element populated with the board rectangle and drill shapes."""
    mask_element = ET.Element(
        f"{{{SVG_NS}}}mask",
        {
            "id": MASK_ID,
            "maskUnits": "userSpaceOnUse",
            "maskContentUnits": "userSpaceOnUse",
            "x": rect_attributes["x"],
            "y": rect_attributes["y"],
            "width": rect_attributes["width"],
            "height": rect_attributes["height"],
        },
    )
    rect_element = ET.Element(
        f"{{{SVG_NS}}}rect",
        {
            "x": rect_attributes["x"],
            "y": rect_attributes["y"],
            "width": rect_attributes["width"],
            "height": rect_attributes["height"],
            "fill": "#ffffff",
        },
    )
    mask_element.append(rect_element)
    mask_element.append(copy.deepcopy(drill_group))
    return mask_element


def wrap_content_with_mask(root: ET.Element) -> None:
    """Wrap drawable content in a group that references the drill-hole mask."""
    drawable_children: List[ET.Element] = []
    for child in list(root):
        local = child.tag.split("}", 1)[-1]
        if local in ("defs", "title", "desc", "metadata"):
            continue
        drawable_children.append(child)

    if not drawable_children:
        return

    if (
        len(drawable_children) == 1
        and drawable_children[0].get("mask") == f"url(#{MASK_ID})"
    ):
        return

    for child in drawable_children:
        root.remove(child)

    masked_group = ET.Element(
        f"{{{SVG_NS}}}g",
        {"mask": f"url(#{MASK_ID})"},
    )
    for child in drawable_children:
        masked_group.append(child)
    root.append(masked_group)


def write_svg(
    svg_path: pathlib.Path,
    tree: ET.ElementTree,
    doctype: Optional[str],
) -> None:
    """Serialize the SVG back to disk while preserving DOCTYPE if present."""
    try:
        ET.indent(tree, space="    ")
    except AttributeError:
        pass

    xml_content = ET.tostring(tree.getroot(), encoding="unicode")
    if doctype:
        output = f"{doctype}\n{xml_content}\n"
    else:
        output = f"{xml_content}\n"
    svg_path.write_text(output, encoding="utf-8")


def process_svg(
    svg_path: pathlib.Path,
    rect_attributes: dict,
    drill_group: ET.Element,
    mask_file: pathlib.Path,
) -> None:
    """Inject the drill-hole mask into a single SVG file."""
    if svg_path.resolve() == mask_file.resolve():
        return
    if svg_path.name == "07-drill-holes.svg":
        return

    original_doctype = read_doctype(svg_path)
    tree = ET.parse(svg_path)
    root = tree.getroot()

    defs = ensure_defs(root)
    remove_existing_mask(defs)
    defs.append(create_mask_element(rect_attributes, drill_group))

    wrap_content_with_mask(root)
    write_svg(svg_path, tree, original_doctype)


def parse_excellon_holes(drill_files: Iterable[pathlib.Path]) -> List[Tuple[float, float, float]]:
    """Parse Excellon drill files into (x_mm, y_mm, diameter_mm)."""
    holes: List[Tuple[float, float, float]] = []
    coord_re = re.compile(r"X([+-]?[0-9.]+)Y([+-]?[0-9.]+)")
    tool_re = re.compile(r"T(\d+)C([0-9.]+)")
    for drill_path in drill_files:
        if not drill_path.exists():
            raise FileNotFoundError(f"Drill file not found: {drill_path}")
        unit_scale = 25.4  # default Excellon output in inches unless overridden
        tool_diameter: dict[str, float] = {}
        current_tool: Optional[str] = None
        for raw_line in drill_path.read_text().splitlines():
            line = raw_line.strip()
            if not line or line.startswith(";"):
                continue
            if line.startswith("METRIC"):
                unit_scale = 1.0
                continue
            if line.startswith("INCH"):
                unit_scale = 25.4
                continue
            tool_match = tool_re.match(line)
            if tool_match:
                tool_diameter[tool_match.group(1)] = float(tool_match.group(2)) * unit_scale
                continue
            if line.startswith("T") and "C" not in line:
                current_tool = line[1:]
                continue
            coord_match = coord_re.search(line)
            if current_tool and coord_match:
                x = float(coord_match.group(1)) * unit_scale
                y = float(coord_match.group(2)) * unit_scale
                diameter = tool_diameter.get(current_tool)
                if diameter is None:
                    continue
                holes.append((x, y, diameter))
    return holes


def assign_precise_radii(
    mask_holes: List[HoleDefinition],
    drill_holes: List[Tuple[float, float, float]],
) -> None:
    """Assign precise radii to mask holes by pairing with Excellon hits."""
    if not drill_holes:
        return
    mask_centres = [(hole.cx, hole.cy) for hole in mask_holes]
    assigned_mask = [False] * len(mask_holes)
    for x_mm, y_mm, diameter in drill_holes:
        target_x = x_mm
        target_y = -y_mm  # convert to SVG downwards Y
        best_index: Optional[int] = None
        best_distance: float = float("inf")
        for index, (cx, cy) in enumerate(mask_centres):
            if assigned_mask[index]:
                continue
            distance = math.hypot(cx - target_x, cy - target_y)
            if distance < best_distance:
                best_distance = distance
                best_index = index
        if best_index is not None and best_distance <= MAX_ASSIGN_DISTANCE_MM:
            mask_holes[best_index].radius = diameter / 2.0
            assigned_mask[best_index] = True


def apply_hole_definitions(group: ET.Element, holes: List[HoleDefinition]) -> None:
    """Populate the drill mask group with circles based on hole definitions."""
    for hole in holes:
        circle = ET.Element(
            f"{{{SVG_NS}}}circle",
            {
                "cx": f"{hole.cx:.6f}",
                "cy": f"{hole.cy:.6f}",
                "r": f"{hole.radius:.6f}",
                "fill": "#000000",
            },
        )
        group.append(circle)


def main() -> None:
    """Entrypoint for the CLI."""
    args = parse_arguments()
    rect_attributes, drill_group, holes = load_mask_source(args.mask)
    if args.drill_file:
        drill_hits = parse_excellon_holes(args.drill_file)
        assign_precise_radii(holes, drill_hits)
    apply_hole_definitions(drill_group, holes)
    svg_paths = collect_target_paths(args.targets)
    if not svg_paths:
        raise SystemExit("No SVG files found to process.")

    for svg_path in svg_paths:
        process_svg(svg_path, rect_attributes, drill_group, args.mask)


if __name__ == "__main__":
    main()
