#!/usr/bin/env python3
"""Warp the photographic Smoothieboard V2 render into an orthographic 600 DPI square."""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Tuple

import numpy as np
from PIL import Image
from scipy import ndimage
from skimage.transform import ProjectiveTransform, warp

BOARD_MM = 110.0
DPI = 600.0
MM_PER_INCH = 25.4
BOARD_PX = int(round(BOARD_MM * DPI / MM_PER_INCH))


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Warp board photograph to orthographic square")
    parser.add_argument("--input", required=True, type=Path, help="Input board-only PNG (photographic source)")
    parser.add_argument("--output", required=True, type=Path, help="Output path for warped PNG")
    parser.add_argument("--threshold", type=float, default=35.0, help="Background distance threshold")
    parser.add_argument("--debug-mask", type=Path, default=None, help="Optional path to write detected mask PNG")
    return parser.parse_args()


def detect_board_corners(image: np.ndarray, threshold: float) -> Tuple[np.ndarray, np.ndarray]:
    background = image[0, 0, :3].astype(np.float32)
    diff = np.linalg.norm(image[:, :, :3].astype(np.float32) - background, axis=2)
    mask = diff > threshold
    mask = ndimage.binary_closing(mask, structure=np.ones((5, 5)))
    mask = ndimage.binary_fill_holes(mask)
    labeled, count = ndimage.label(mask)
    if count == 0:
        raise RuntimeError("No board region detected in photograph")
    sizes = ndimage.sum(mask, labeled, np.arange(1, count + 1))
    largest_label = np.argmax(sizes) + 1
    board_mask = labeled == largest_label
    coords = np.argwhere(board_mask)
    if coords.size == 0:
        raise RuntimeError("Board mask empty after filtering")
    # Corners using sum/difference heuristics (coords are (y, x))
    sums = coords.sum(axis=1)
    diffs = coords[:, 0] - coords[:, 1]
    tl = coords[np.argmin(sums)][::-1]
    br = coords[np.argmax(sums)][::-1]
    tr = coords[np.argmin(diffs)][::-1]
    bl = coords[np.argmax(diffs)][::-1]
    return np.array([tl, tr, br, bl], dtype=np.float32), board_mask


def warp_board(image: np.ndarray, src_pts: np.ndarray) -> np.ndarray:
    dest_pts = np.array(
        [
            [0.0, 0.0],
            [BOARD_PX - 1.0, 0.0],
            [BOARD_PX - 1.0, BOARD_PX - 1.0],
            [0.0, BOARD_PX - 1.0],
        ],
        dtype=np.float32,
    )
    transform = ProjectiveTransform()
    if not transform.estimate(src_pts, dest_pts):
        raise RuntimeError("Failed to estimate projective transform")
    channels = []
    for idx in range(image.shape[2]):
        warped_channel = warp(
            image[:, :, idx],
            transform.inverse,
            output_shape=(BOARD_PX, BOARD_PX),
            preserve_range=True,
            mode="edge",
        )
        channels.append(warped_channel)
    stacked = np.stack(channels, axis=2)
    return np.clip(stacked, 0, 255).astype(np.uint8)


def main() -> None:
    args = parse_arguments()
    image = np.array(Image.open(args.input).convert("RGBA"))
    src_pts, mask = detect_board_corners(image, args.threshold)
    warped = warp_board(image, src_pts)
    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(warped, mode="RGBA").save(args.output)
    if args.debug_mask:
        debug_mask_img = np.zeros_like(image)
        debug_mask_img[:, :] = image
        debug_mask_img[~mask] = [0, 0, 0, 0]
        Image.fromarray(debug_mask_img, mode="RGBA").save(args.debug_mask)


if __name__ == "__main__":
    main()
