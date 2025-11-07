#!/usr/bin/env python3
"""Generate copper highlight overlay from warped photo and current render."""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create copper highlight overlay")
    parser.add_argument("--reference", required=True, type=Path, help="Warped photographic reference (RGBA)")
    parser.add_argument("--render", required=True, type=Path, help="Current full-pcb render (RGBA)")
    parser.add_argument("--copper", required=True, type=Path, help="Copper-only PNG to use as mask")
    parser.add_argument("--output", required=True, type=Path, help="Output PNG for highlight overlay")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    reference = np.array(Image.open(args.reference).convert("RGBA"), dtype=np.int16)
    render = np.array(Image.open(args.render).convert("RGBA"), dtype=np.int16)
    copper_alpha = np.array(Image.open(args.copper).convert("RGBA").split()[-1], dtype=np.uint8) > 0
    delta = reference[:, :, :3] - render[:, :, :3]
    delta[delta < 0] = 0
    highlight = np.zeros_like(render)
    highlight[:, :, :3] = delta
    mask = np.zeros_like(render[:, :, 3], dtype=np.uint8)
    mask[copper_alpha] = np.clip(delta[copper_alpha].max(axis=1), 0, 255).astype(np.uint8)
    highlight[:, :, 3] = mask
    args.output.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(np.clip(highlight, 0, 255).astype(np.uint8), mode="RGBA").save(args.output)


if __name__ == "__main__":
    main()
