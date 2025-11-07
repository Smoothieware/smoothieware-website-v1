#!/usr/bin/env python3
"""Export a wide set of Smoothieboard V2 layers into analysis artifacts."""

from __future__ import annotations

import math
import re
import subprocess
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import numpy as np
import svgwrite
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
GERBER_DIR = ROOT / "data" / "v2-prime-original" / "V2_P12_Prime2590" / "smoothie-p12-gerbers"
KICAD_PCB = ROOT / "data" / "v2-prime-original" / "V2_P12_Prime2590" / "smoothiev2-prime.kicad_pcb"
ITER_DIR = ROOT / "data" / "board-design-research" / "top" / "01-pcb-loop" / "steps" / "02-soldermask-corrected"
OUTPUT_DIR = ITER_DIR / "analysis"
DESCRIPTIONS: List[Tuple[str, str]] = []
COUNTER = 1
EDGE_POINTS_CACHE: Optional[Tuple[List[Tuple[float, float]], float, float, float, float]] = None

FILE_TYPE_MAP = {
    "gtl": ("copper", "F_Cu"),
    "gbl": ("copper", "B_Cu"),
    "g2": ("copper", "In1_Cu"),
    "g3": ("copper", "In2_Cu"),
    "gts": ("soldermask", "F_Mask"),
    "gbs": ("soldermask", "B_Mask"),
    "gtp": ("paste", "F_Paste"),
    "gbp": ("paste", "B_Paste"),
    "gto": ("silk", "F_Silk"),
    "gbo": ("silk", "B_Silk"),
    "gm1": ("profile", "Edge_Cuts"),
}

DPI = 600
MM_PER_INCH = 25.4
def next_filename(source: str, technique: str, layer: str, ext: str) -> Path:
    global COUNTER
    filename = f"{COUNTER:03d}-{source}-{technique}-{layer}.{ext}"
    COUNTER += 1
    return OUTPUT_DIR / filename


def add_description(filename: Path, desc: str) -> None:
    DESCRIPTIONS.append((filename.name, desc))


def run_pygerber_vector(gerber: Path, file_type: str, layer_name: str) -> None:
    dest = next_filename(f"gerber-{gerber.name}", "pygerber-vector", layer_name, "svg")
    subprocess.run(
        [
            "pygerber",
            "render",
            "vector",
            str(gerber),
            "-t",
            file_type,
            "-o",
            str(dest),
        ],
        check=True,
    )
    add_description(dest, f"Vector render of `{gerber.name}` using PyGerber (file type `{file_type}`).")


def run_pygerber_raster(gerber: Path, file_type: str, layer_name: str) -> None:
    dest = next_filename(f"gerber-{gerber.name}", "pygerber-raster", layer_name, "png")
    subprocess.run(
        [
            "pygerber",
            "render",
            "raster",
            str(gerber),
            "-t",
            file_type,
            "-o",
            str(dest),
            "-d",
            str(DPI),
        ],
        check=True,
    )
    add_description(dest, f"Raster render of `{gerber.name}` using PyGerber at {DPI} DPI (file type `{file_type}`).")


def copy_iteration_asset(filename: str, layer_name: str) -> None:
    source = ITER_DIR / filename
    if not source.exists():
        return
    dest = next_filename("render-top-script", "board-only", layer_name, source.suffix.lstrip("."))
    Image.open(source).save(dest)
    add_description(dest, f"Board-only layer copied from `render_top_pcb.py` output `{filename}`.")


def clean_analysis_output_dir() -> None:
    """Ensure analysis output directory starts empty before regeneration."""
    # Why: Guarantee the output directory exists even on the first execution.
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    # Why: Iterate over existing entries so regenerated assets do not conflict with stale files.
    for entry in OUTPUT_DIR.iterdir():
        # Why: Preserve the descriptions catalogue because it is rewritten after export.
        if entry.name == "file-descriptions.md":
            continue
        # Why: Ignore non-file entries to avoid accidental directory removal.
        if not entry.is_file():
            # Why: Nothing to delete for directories in this flat structure.
            continue
        # Why: Remove outdated artifact so numbering remains deterministic.
        entry.unlink()


def get_edge_outline_points() -> Tuple[List[Tuple[float, float]], float, float, float, float]:
    """Parse or reuse Edge.Cuts geometry and bounding box in millimetres."""
    # Why: Reuse parsed geometry when available to avoid repeated file IO.
    global EDGE_POINTS_CACHE
    # Why: Return cached result immediately for subsequent calls.
    if EDGE_POINTS_CACHE is not None:
        return EDGE_POINTS_CACHE
    # Why: Read the KiCad board describing the outline.
    content = KICAD_PCB.read_text(encoding="utf-8")
    # Why: Capture straight Edge.Cuts segments.
    line_re = re.compile(r"\(gr_line\s+\(start ([\-0-9.]+) ([\-0-9.]+)\)\s+\(end ([\-0-9.]+) ([\-0-9.]+)\)")
    # Why: Capture arc Edge.Cuts segments.
    arc_re = re.compile(r"\(gr_arc\s+\(start ([\-0-9.]+) ([\-0-9.]+)\)\s+\(mid ([\-0-9.]+) ([\-0-9.]+)\)\s+\(end ([\-0-9.]+) ([\-0-9.]+)\)")
    # Why: Store raw segment definitions ahead of sampling.
    segments: List[Tuple[str, Tuple[float, float], Tuple[float, float], Optional[Tuple[float, float]]]] = []
    # Why: Record line segments with start and end coordinates.
    for match in line_re.finditer(content):
        x1, y1, x2, y2 = map(float, match.groups())
        segments.append(("line", (x1, y1), (x2, y2), None))
    # Why: Record arc segments with start, mid, and end coordinates.
    for match in arc_re.finditer(content):
        x1, y1, xm, ym, x2, y2 = map(float, match.groups())
        segments.append(("arc", (x1, y1), (x2, y2), (xm, ym)))
    # Why: Short-circuit when no outline data is available.
    if not segments:
        EDGE_POINTS_CACHE = ([], 0.0, 0.0, 0.0, 0.0)
        return EDGE_POINTS_CACHE
    # Why: Sample each segment into explicit polygon points.
    points: List[Tuple[float, float]] = []

    # Why: Convert arc definitions into evenly spaced points.
    def arc_points(start: Tuple[float, float], mid: Tuple[float, float], end: Tuple[float, float], steps: int = 64) -> List[Tuple[float, float]]:
        # Why: Prepare vector representations for geometry calculations.
        sx, sy = start
        mx, my = mid
        ex, ey = end
        ax = np.array(start)
        bx = np.array(mid)
        cx = np.array(end)
        temp = bx[0] ** 2 + bx[1] ** 2
        bc = (ax[0] ** 2 + ax[1] ** 2 - temp) / 2
        cd = (temp - (cx[0] ** 2 + cx[1] ** 2)) / 2
        det = (ax[0] - bx[0]) * (bx[1] - cx[1]) - (bx[0] - cx[0]) * (ax[1] - bx[1])
        if abs(det) < 1e-9:
            return [start, end]
        cx_center = (bc * (bx[1] - cx[1]) - cd * (ax[1] - bx[1])) / det
        cy_center = ((ax[0] - bx[0]) * cd - (bx[0] - cx[0]) * bc) / det
        center = np.array([cx_center, cy_center])
        radius = np.linalg.norm(ax - center)
        ang_start = math.atan2(sy - cy_center, sx - cx_center)
        ang_mid = math.atan2(my - cy_center, mx - cx_center)
        ang_end = math.atan2(ey - cy_center, ex - cx_center)

        # Why: Normalize angles into a consistent rotational direction.
        def normalize(angle: float) -> float:
            while angle < 0:
                angle += 2 * math.pi
            while angle >= 2 * math.pi:
                angle -= 2 * math.pi
            return angle

        ang_start = normalize(ang_start)
        ang_mid = normalize(ang_mid)
        ang_end = normalize(ang_end)
        if ang_start < ang_end:
            if not (ang_start < ang_mid < ang_end):
                ang_start += 2 * math.pi
        else:
            if ang_mid < ang_end:
                ang_mid += 2 * math.pi
            ang_end += 2 * math.pi
        angles = np.linspace(ang_start, ang_end, steps)
        return [tuple(center + radius * np.array([math.cos(a), math.sin(a)])) for a in angles]

    # Why: Expand each segment into explicit polygon coordinates.
    for kind, start, end, mid in segments:
        if kind == "line":
            points.append(start)
            points.append(end)
        else:
            points.extend(arc_points(start, mid, end))
    # Why: Determine bounding limits for later scaling.
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    # Why: Cache geometry for reuse.
    EDGE_POINTS_CACHE = (points, minx, maxx, miny, maxy)
    return EDGE_POINTS_CACHE


def mm_point_to_px(x_mm: float, y_mm: float) -> Tuple[float, float]:
    """Convert millimetre coordinates into pixel space using board bounds."""
    # Why: Load cached outline data to align coordinates.
    _, minx, maxx, miny, maxy = get_edge_outline_points()
    # Why: Derive pixels per millimetre for the configured DPI.
    scale = DPI / MM_PER_INCH
    # Why: Offset X from the minimum board coordinate.
    px_x = (x_mm - minx) * scale
    # Why: Flip Y so image coordinates increase downward.
    px_y = (maxy - y_mm) * scale
    # Why: Provide pixel tuple for rendering routines.
    return px_x, px_y


def parse_excellon_drill(drill_file: Path) -> List[Tuple[float, float, float]]:
    """Parse Excellon drill commands into millimetre hole records."""
    # Why: Default to inch units because the file declares INCH early.
    units = "inch"
    # Why: Track tool diameters in millimetres keyed by tool identifier.
    tool_diameters: Dict[str, float] = {}
    # Why: Remember the active tool while iterating coordinate statements.
    current_tool: Optional[str] = None
    # Why: Collect resulting hole records for downstream rendering.
    holes: List[Tuple[float, float, float]] = []
    # Why: Read the entire drill file once.
    lines = drill_file.read_text(encoding="utf-8").splitlines()
    # Why: Match tool definition statements such as T1C0.0079.
    tool_def_re = re.compile(r"^(T\d+)C([0-9.]+)")
    # Why: Match coordinate hits that include both X and Y values.
    coord_re = re.compile(r"^X(?P<x>-?\d*\.?\d+)Y(?P<y>-?\d*\.?\d+)$")
    # Why: Iterate through each Excellon statement.
    for raw_line in lines:
        # Why: Normalize whitespace for easier matching.
        line = raw_line.strip()
        # Why: Skip blank lines and comment metadata.
        if not line or line.startswith(';'):
            continue
        # Why: Stop parsing at program end markers.
        if line in {"M30", "M95"}:
            break
        # Why: Update unit system directives when present.
        if line == "INCH":
            units = "inch"
            continue
        if line == "METRIC":
            units = "metric"
            continue
        # Why: Skip auxiliary formatting commands that do not influence positions.
        if line.startswith('M') or line.startswith('G') or line.startswith('F') or line.startswith('S'):
            continue
        # Why: Capture tool definitions with diameters.
        tool_match = tool_def_re.match(line)
        if tool_match:
            tool_id, raw_diameter = tool_match.groups()
            diameter = float(raw_diameter)
            if units == "inch":
                diameter *= MM_PER_INCH
            tool_diameters[tool_id] = diameter
            continue
        # Why: Track active tool for subsequent coordinate hits.
        if line.startswith('T'):
            current_tool = line
            continue
        # Why: Extract coordinate statements.
        coord_match = coord_re.match(line)
        if coord_match and current_tool:
            x_val = float(coord_match.group('x'))
            y_val = float(coord_match.group('y'))
            scale = MM_PER_INCH if units == "inch" else 1.0
            x_mm = x_val * scale
            y_mm = y_val * scale
            diameter_mm = tool_diameters.get(current_tool, 0.0)
            holes.append((x_mm, y_mm, diameter_mm))
    # Why: Return parsed drill hole definitions.
    return holes


def render_drill_layers(drill_file: Path) -> None:
    """Render Excellon drill data into vector and raster analysis assets."""
    # Why: Derive layer label from filename (PTH vs NPTH).
    stem = drill_file.stem.lower()
    # Why: Default to generic drill layer identifier.
    layer_label = "Drill"
    # Why: Use specific label for plated through holes.
    if "pth" in stem:
        layer_label = "Drill_PTH"
    # Why: Override label when non-plated holes are parsed.
    if "npth" in stem:
        layer_label = "Drill_NPTH"
    # Why: Parse hole coordinates and diameters.
    holes = parse_excellon_drill(drill_file)
    # Why: Abort rendering if the file contained no hole definitions.
    if not holes:
        return
    # Why: Precompute millimetre to pixel scale for radii.
    scale = DPI / MM_PER_INCH
    # Why: Leverage board outline to size the canvas precisely.
    _, minx, maxx, miny, maxy = get_edge_outline_points()
    width_px = int(round((maxx - minx) * scale))
    height_px = int(round((maxy - miny) * scale))
    # Why: Allocate SVG drawing sized to the board envelope.
    svg_path = next_filename(f"gerber-{drill_file.name}", "excellon-vector", layer_label, "svg")
    drawing = svgwrite.Drawing(str(svg_path), size=(width_px, height_px), viewBox=f"0 0 {width_px} {height_px}")
    # Why: Render each hole as a stroked circle in vector space.
    for x_mm, y_mm, diameter_mm in holes:
        if diameter_mm <= 0:
            continue
        cx, cy = mm_point_to_px(x_mm, y_mm)
        radius_px = max((diameter_mm / 2.0) * scale, 0.5)
        drawing.add(drawing.circle(center=(cx, cy), r=radius_px, stroke="#ff00ff", fill='none', stroke_width=0.75))
    # Why: Commit SVG file to disk.
    drawing.save()
    # Why: Document provenance and hole count for the vector output.
    add_description(svg_path, f"Custom Excellon vector overlay for `{drill_file.name}` with {len(holes)} holes.")
    # Why: Allocate raster canvas to mirror the vector preview.
    png_path = next_filename(f"gerber-{drill_file.name}", "excellon-raster", layer_label, "png")
    canvas = Image.new("RGBA", (width_px, height_px), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    # Why: Draw filled circles for each drill to aid visual diffing.
    for x_mm, y_mm, diameter_mm in holes:
        if diameter_mm <= 0:
            continue
        cx, cy = mm_point_to_px(x_mm, y_mm)
        radius_px = max((diameter_mm / 2.0) * scale, 0.5)
        bbox = (cx - radius_px, cy - radius_px, cx + radius_px, cy + radius_px)
        draw.ellipse(bbox, outline=(255, 0, 255, 255), width=1, fill=(255, 0, 255, 80))
    # Why: Save raster overlay to disk.
    canvas.save(png_path)
    # Why: Note raster provenance and coverage statistics.
    add_description(png_path, f"Rasterized Excellon overlay for `{drill_file.name}` ({len(holes)} holes).")


def generate_edge_outline() -> None:
    """Generate raster and vector previews for the board outline."""
    # Why: Retrieve cached polygon points and bounding box.
    points, minx, maxx, miny, maxy = get_edge_outline_points()
    # Why: Return early when the outline could not be parsed.
    if not points:
        return
    # Why: Compute pixel scale at the configured DPI.
    scale = DPI / MM_PER_INCH
    # Why: Calculate canvas size from millimetre extents.
    width_px = int(round((maxx - minx) * scale))
    height_px = int(round((maxy - miny) * scale))
    # Why: Create transparent canvas for raster visualization.
    canvas = Image.new("RGBA", (width_px, height_px), (0, 0, 0, 0))
    # Why: Acquire drawing context for the raster polygon.
    draw = ImageDraw.Draw(canvas)
    # Why: Convert millimetre coordinates into pixel space with flipped Y axis.
    scaled = [((x - minx) * scale, (maxy - y) * scale) for x, y in points]
    # Why: Fill polygon to represent the substrate footprint.
    draw.polygon(scaled, fill=(11, 11, 11, 255))
    # Why: Persist raster preview to disk.
    png_path = next_filename("kicad-pcb", "edge-parser", "edge-outline", "png")
    canvas.save(png_path)
    # Why: Record metadata describing the raster edge preview.
    add_description(png_path, "Board outline polygon derived from `Edge.Cuts` segments in `smoothiev2-prime.kicad_pcb`. Filled substrate preview.")
    # Why: Allocate SVG drawing matching the raster dimensions.
    svg_path = next_filename("kicad-pcb", "edge-parser", "edge-outline", "svg")
    drawing = svgwrite.Drawing(str(svg_path), size=(width_px, height_px), viewBox=f"0 0 {width_px} {height_px}")
    # Why: Add polygon element to the SVG for a vector outline.
    drawing.add(drawing.polygon(scaled, fill="#0b0b0b"))
    # Why: Finalize SVG file writing.
    drawing.save()
    # Why: Document provenance for the vector outline.
    add_description(svg_path, "SVG of board outline generated from `Edge.Cuts`.")


def write_descriptions() -> None:
    output = ['# Layer Extraction Catalogue', '']
    for filename, desc in DESCRIPTIONS:
        output.append(f"## {filename}\n\n{desc}\n")
    (OUTPUT_DIR / "file-descriptions.md").write_text('\n'.join(output) + '\n', encoding='utf-8')


def main() -> None:
    global DESCRIPTIONS, COUNTER
    # Why: Remove stale outputs so numbering remains consistent.
    clean_analysis_output_dir()
    # Why: Reset in-memory catalogue between runs.
    DESCRIPTIONS = []
    COUNTER = 1

    # Why: Process Gerber layers in sorted order for deterministic numbering.
    for gerber in sorted(GERBER_DIR.glob('*')):
        ext = gerber.suffix.lstrip('.').lower()
        if ext == 'drl':
            render_drill_layers(gerber)
            continue
        if ext not in FILE_TYPE_MAP:
            continue
        file_type, layer_name = FILE_TYPE_MAP[ext]
        run_pygerber_vector(gerber, file_type, layer_name)
        run_pygerber_raster(gerber, file_type, layer_name)

    for name, layer in [
        ("01-substrate.png", "substrate"),
        ("02-copper.png", "copper-board"),
        ("03-soldermask.png", "soldermask-board"),
        ("04-silk-screen.png", "silkscreen-board"),
        ("full-pcb.png", "composite-board"),
    ]:
        copy_iteration_asset(name, layer)

    generate_edge_outline()
    write_descriptions()


if __name__ == "__main__":
    main()
