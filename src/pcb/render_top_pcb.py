#!/usr/bin/env python3
"""Render top-side PCB base layers (board-only) for the Smoothieboard V2 pipeline.

Outputs are written into the iteration directory and include:
- 01-substrate.svg / .png (rounded board outline with transparency outside)
- 02-copper.png            (gold copper exposures)
- 03-soldermask.png         (black soldermask paint covering non-exposed copper)
- 04-silk-screen.png        (white silkscreen on transparency)
- full-pcb.png              (stack of copper+mask+silk over substrate)

A board-only crop of the reference render is required for comparisons;
see `data/v2-prime-original/reference-image-description.md`.
"""

from __future__ import annotations

import argparse
import math
import subprocess
import tempfile

import numpy as np
import yaml
from pathlib import Path
from typing import Dict, Tuple

from PIL import Image, ImageDraw
from pygerber.common.rgba import RGBA
from pygerber.gerberx3.api import ColorScheme, Rasterized2DLayer, Rasterized2DLayerParams

PROJECT_ROOT = Path(__file__).resolve().parents[2]
GERBER_DIR = PROJECT_ROOT / "data" / "v2-prime-original" / "V2_P12_Prime2590" / "smoothie-p12-gerbers"
REFERENCE_IMAGE = PROJECT_ROOT / "data" / "v2-prime-original" / "v2-prime.png"
BOARD_CROP = PROJECT_ROOT / "data" / "v2-prime-original" / "v2-prime-board-only.png"

BOARD_WIDTH_MM = 110.0
BOARD_HEIGHT_MM = 110.0
CORNER_RADIUS_MM = 5.0
DPI = 600.0
MM_PER_INCH = 25.4
MM_TO_PX = DPI / MM_PER_INCH
BOARD_PX_WIDTH = int(round(BOARD_WIDTH_MM * MM_TO_PX))
BOARD_PX_HEIGHT = int(round(BOARD_HEIGHT_MM * MM_TO_PX))
COPPER_HIGHLIGHT = PROJECT_ROOT / "data" / "board-design-research" / "top" / "reference" / "copper-highlight.png"

PALETTE_PATH = PROJECT_ROOT / "data" / "board-design-research" / "top" / "reference" / "palette.yaml"
DEFAULT_PALETTE: Dict[str, str] = {
    "copper": "#C89225FF",
    "silkscreen": "#F5F1E7FF",
    "substrate": "#211E16FF",
    "soldermask": "#181612FF",
}


def load_palette() -> Dict[str, str]:
    if not PALETTE_PATH.exists():
        return DEFAULT_PALETTE.copy()
    data = yaml.safe_load(PALETTE_PATH.read_text()) or {}
    palette = DEFAULT_PALETTE.copy()
    for key, value in data.items():
        upper_key = str(key).lower()
        if upper_key in palette:
            palette[upper_key] = str(value)
    return palette


def hex_to_rgba_tuple(value: str) -> Tuple[int, int, int, int]:
    value = value.strip()
    if value.startswith('#'):
        value = value[1:]
    if len(value) == 6:
        value += 'FF'
    if len(value) != 8:
        raise ValueError(f"Invalid RGBA hex value: {value}")
    return tuple(int(value[i:i + 2], 16) for i in range(0, 8, 2))


def apply_copper_highlight(copper: Image.Image) -> Image.Image:
    if not COPPER_HIGHLIGHT.exists():
        return copper
    highlight = Image.open(COPPER_HIGHLIGHT).convert('RGBA')
    copper_np = np.array(copper, dtype=np.uint16)
    highlight_np = np.array(highlight, dtype=np.uint16)
    mask = highlight_np[:, :, 3] > 0
    if not np.any(mask):
        return copper
    copper_np[mask, :3] = np.clip(copper_np[mask, :3] + highlight_np[mask, :3], 0, 255)
    return Image.fromarray(copper_np.astype(np.uint8), mode='RGBA')


PALETTE = load_palette()
LAYER_FILES = {
    "copper": GERBER_DIR / "smoothiev2-prime-F_Cu.gtl",
    "silkscreen": GERBER_DIR / "smoothiev2-prime-F_Silkscreen.gto",
}

COLOR_SCHEMES = {
    "copper": ColorScheme(
        background_color=RGBA(r=0, g=0, b=0, a=0),
        clear_color=RGBA(r=0, g=0, b=0, a=0),
        solid_color=RGBA.from_hex(PALETTE["copper"]),
        clear_region_color=RGBA(r=0, g=0, b=0, a=0),
        solid_region_color=RGBA.from_hex(PALETTE["copper"]),
    ),
    "silkscreen": ColorScheme(
        background_color=RGBA(r=0, g=0, b=0, a=0),
        clear_color=RGBA(r=0, g=0, b=0, a=0),
        solid_color=RGBA.from_hex(PALETTE["silkscreen"]),
        clear_region_color=RGBA(r=0, g=0, b=0, a=0),
        solid_region_color=RGBA.from_hex(PALETTE["silkscreen"]),
    ),
}


def board_canvas() -> Image.Image:
    return Image.new("RGBA", (BOARD_PX_WIDTH, BOARD_PX_HEIGHT), (0, 0, 0, 0))


def render_substrate(iter_dir: Path) -> None:
    substrate_png = iter_dir / "01-substrate.png"
    substrate_svg = iter_dir / "01-substrate.svg"
    canvas = board_canvas()
    draw = ImageDraw.Draw(canvas)
    radius_px = CORNER_RADIUS_MM * MM_TO_PX
    draw.rounded_rectangle(
        (0, 0, BOARD_PX_WIDTH, BOARD_PX_HEIGHT),
        radius=radius_px,
        fill=hex_to_rgba_tuple(PALETTE["substrate"]),
    )
    canvas.save(substrate_png)

    substrate_hex = PALETTE['substrate']
    if substrate_hex.startswith('#') and len(substrate_hex) == 9:
        substrate_hex = substrate_hex[:7]
    svg_content = (
        "<?xml version='1.0' encoding='UTF-8'?>\n"
        f"<svg xmlns='http://www.w3.org/2000/svg' width='{BOARD_PX_WIDTH}' height='{BOARD_PX_HEIGHT}' viewBox='0 0 {BOARD_PX_WIDTH} {BOARD_PX_HEIGHT}'>\n"
        f"  <rect x='0' y='0' width='{BOARD_PX_WIDTH}' height='{BOARD_PX_HEIGHT}' rx='{radius_px}' ry='{radius_px}' fill='{substrate_hex}' />\n"
        "</svg>\n"
    )
    substrate_svg.write_text(svg_content, encoding='utf-8')


def render_gerber_layer(layer_name: str, iter_dir: Path) -> Image.Image:
    params = Rasterized2DLayerParams(
        source_path=str(LAYER_FILES[layer_name]),
        colors=COLOR_SCHEMES[layer_name],
        dpi=int(DPI),
    )
    result = Rasterized2DLayer(options=params).render()
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        temp_path = Path(tmp.name)
    result.save(str(temp_path))
    image = Image.open(temp_path).convert("RGBA")
    temp_path.unlink(missing_ok=True)

    bbox = image.getbbox()
    if bbox:
        image = image.crop(bbox)
    image = image.resize((BOARD_PX_WIDTH, BOARD_PX_HEIGHT), Image.LANCZOS)
    final = board_canvas()
    final.paste(image, (0, 0), image)
    if layer_name == 'silkscreen':
        filename = '04-silk-screen.png'
    else:
        filename = f"{layer_index(layer_name)}-{layer_name}.png"
    output = iter_dir / filename
    final.save(output)
    return final





def render_soldermask_from_copper(copper: Image.Image, iter_dir: Path) -> Image.Image:
    mask = board_canvas()
    draw = ImageDraw.Draw(mask)
    radius_px = CORNER_RADIUS_MM * MM_TO_PX
    draw.rounded_rectangle(
        (0, 0, BOARD_PX_WIDTH, BOARD_PX_HEIGHT),
        radius=radius_px,
        fill=hex_to_rgba_tuple(PALETTE["soldermask"]),
    )
    copper_alpha = np.array(copper.split()[-1], dtype=np.uint8)
    alpha = np.array(mask.split()[-1], dtype=np.uint8)
    alpha[copper_alpha > 5] = 0
    mask.putalpha(Image.fromarray(alpha))
    output = iter_dir / '03-soldermask.png'
    mask.save(output)
    return mask


def layer_index(name: str) -> str:
    mapping = {"copper": "02", "silkscreen": "04"}
    return mapping[name]


def stack_layers(substrate: Image.Image, copper: Image.Image, mask: Image.Image, silk: Image.Image, iter_dir: Path) -> None:
    composite = substrate.copy()
    composite.paste(copper, (0, 0), copper)
    composite.paste(mask, (0, 0), mask)
    composite.paste(silk, (0, 0), silk)
    composite.save(iter_dir / "full-pcb.png")


def ensure_board_crop() -> None:
    if BOARD_CROP.exists():
        return
    img = Image.open(REFERENCE_IMAGE)
    width, height = img.size
    bg = img.getpixel((0, 0))
    minx, miny, maxx, maxy = width, height, 0, 0
    for y in range(height):
        for x in range(width):
            if img.getpixel((x, y)) != bg:
                minx = min(minx, x)
                miny = min(miny, y)
                maxx = max(maxx, x)
                maxy = max(maxy, y)
    crop = img.crop((minx, miny, maxx + 1, maxy + 1))
    crop.save(BOARD_CROP)


def main() -> None:
    parser = argparse.ArgumentParser(description="Render top-side PCB layers")
    parser.add_argument("--iteration-dir", required=True, help="Directory for iteration outputs")
    args = parser.parse_args()

    iteration_dir = Path(args.iteration_dir)
    iteration_dir.mkdir(parents=True, exist_ok=True)

    ensure_board_crop()

    render_substrate(iteration_dir)
    substrate_img = Image.open(iteration_dir / "01-substrate.png").convert("RGBA")

    copper_img = render_gerber_layer("copper", iteration_dir)
    copper_img = apply_copper_highlight(copper_img)
    copper_img.save(iteration_dir / "02-copper.png")
    mask_img = render_soldermask_from_copper(copper_img, iteration_dir)
    silk_img = render_gerber_layer("silkscreen", iteration_dir)

    stack_layers(substrate_img, copper_img, mask_img, silk_img, iteration_dir)


if __name__ == "__main__":
    main()
