#!/usr/bin/env python3
"""Create a component exclusion mask by differencing photo reference and render."""

from __future__ import annotations

import argparse
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate component exclusion mask")
    parser.add_argument("--reference", required=True, type=Path, help="Warped photographic reference PNG")
    parser.add_argument("--render", required=True, type=Path, help="Render PNG aligned with the reference")
    parser.add_argument("--threshold", type=float, default=30.0, help="Difference threshold for masking")
    parser.add_argument("--output", required=True, type=Path, help="Output mask PNG (alpha=255 for excluded pixels)")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    reference = np.array(Image.open(args.reference).convert("RGBA"), dtype=np.float32)
    render = np.array(Image.open(args.render).convert("RGBA"), dtype=np.float32)
    diff = np.linalg.norm(reference[:, :, :3] - render[:, :, :3], axis=2)
    mask = diff > args.threshold
    mask = ndimage.binary_opening(mask, structure=np.ones((3, 3)))
    mask = ndimage.binary_dilation(mask, structure=np.ones((5, 5)))
    mask = ndimage.binary_fill_holes(mask)
    output = np.zeros_like(reference, dtype=np.uint8)
    output[mask, 3] = 255
    args.output.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(output, mode="RGBA").save(args.output)


if __name__ == "__main__":
    main()
