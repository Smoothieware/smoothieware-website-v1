#!/usr/bin/env python3
"""Compute diagnostic metrics for a PCB iteration against the reference board crop."""

from __future__ import annotations

# Why: argparse handles CLI parameters describing iteration paths.
import argparse
# Why: json output summarises metrics for other tooling.
import json
# Why: pathlib provides robust filesystem path handling.
from pathlib import Path
# Why: typing annotations clarify expected function inputs/outputs.
from typing import Dict, Optional, Tuple

# Why: numpy powers numeric operations over image arrays.
import numpy as np
# Why: PIL handles image loading, resizing, and saving.
from PIL import Image
# Why: structural_similarity supplies SSIM calculation for perceptual diffing.
from skimage.metrics import structural_similarity


def parse_arguments() -> argparse.Namespace:
    """Parse command-line flags for iteration analysis."""
    # Why: construct an argparse parser with helpful description.
    parser = argparse.ArgumentParser(
        description="Analyse a PCB iteration by comparing against the reference board crop",
    )
    # Why: capture iteration directory containing generated layers.
    parser.add_argument(
        "--iteration-dir",
        required=True,
        type=Path,
        help="Directory holding the PCB iteration outputs (expects full-pcb.png)",
    )
    # Why: allow overriding the reference board crop location if needed.
    parser.add_argument(
        "--reference-board",
        required=True,
        type=Path,
        help="Path to the reference board-only PNG used for comparisons",
    )
    # Why: store diff artefacts alongside other outputs unless overridden.
    parser.add_argument(
        "--output-prefix",
        type=Path,
        default=None,
        help="Optional prefix for diff image outputs (defaults to iteration directory)",
    )
    parser.add_argument(
        "--ignore-mask",
        type=Path,
        default=None,
        help="Optional RGBA mask; alpha>0 pixels are excluded from metrics",
    )
    # Why: return parsed namespace for downstream use.
    return parser.parse_args()


def load_image(path: Path) -> Image.Image:
    """Load an image from disk with error handling."""
    # Why: ensure referenced image exists before attempting to open it.
    if not path.exists():
        raise FileNotFoundError(f"Missing required image: {path}")
    # Why: rely on Pillow to read the image with alpha support where present.
    return Image.open(path)


def ensure_rgba(image: Image.Image) -> Image.Image:
    """Return an RGBA copy of the provided image."""
    # Why: convert to RGBA to guarantee alpha availability for masking operations.
    if image.mode != "RGBA":
        return image.convert("RGBA")
    # Why: return the original image when already in RGBA mode.
    return image


def resize_to_match(image: Image.Image, size: Tuple[int, int]) -> Image.Image:
    """Resize an image to the requested size using high-quality resampling."""
    # Why: short-circuit when image already matches target dimensions.
    if image.size == size:
        return image
    # Why: use LANCZOS resampling for high-quality scaling results.
    return image.resize(size, Image.Resampling.LANCZOS)


def extract_board_crop(alpha: np.ndarray) -> Tuple[int, int, int, int]:
    """Compute bounding box of non-transparent pixels from an alpha channel."""
    # Why: determine mask of pixels considered part of the board.
    mask = alpha > 0
    # Why: guard against empty masks which would break bounding calculations.
    if not np.any(mask):
        raise ValueError("Board alpha channel is empty; cannot compute bounding box")
    # Why: locate row indices participating in the board mask.
    rows = np.where(mask.any(axis=1))[0]
    # Why: locate column indices participating in the board mask.
    cols = np.where(mask.any(axis=0))[0]
    # Why: derive bounding coordinates using first and last occupied indices.
    top, bottom = rows[0], rows[-1]
    # Why: derive horizontal span using occupied column indices.
    left, right = cols[0], cols[-1]
    # Why: return bounds as (top, bottom, left, right).
    return top, bottom, left, right


def crop_to_bounds(image: np.ndarray, bounds: Tuple[int, int, int, int]) -> np.ndarray:
    """Crop a numpy image array to the specified bounds."""
    # Why: unpack tuple for readability.
    top, bottom, left, right = bounds
    # Why: include the bottom/right indices by adding one to slicing end.
    return image[top : bottom + 1, left : right + 1]


def compute_metrics(iter_rgb: np.ndarray, ref_rgb: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """Compute RGB similarity metrics and SSIM between iteration and reference RGB arrays."""
    if not np.any(mask):
        raise ValueError("No pixels selected for metric computation")
    absolute_diff = np.abs(iter_rgb - ref_rgb)
    masked_diff = absolute_diff[mask]
    mean_abs_diff = float(np.mean(masked_diff))
    rgb_match = max(0.0, 100.0 - (mean_abs_diff / 255.0) * 100.0)
    iter_for_ssim = iter_rgb.copy()
    ref_for_ssim = ref_rgb.copy()
    mask_3d = np.repeat(mask[:, :, None], 3, axis=2)
    iter_for_ssim[~mask_3d] = ref_for_ssim[~mask_3d]
    ssim_value = float(
        structural_similarity(
            iter_for_ssim,
            ref_for_ssim,
            channel_axis=2,
            data_range=255,
        ),
    )
    return {
        "rgb_match": rgb_match,
        "mean_abs_diff": mean_abs_diff,
        "ssim": ssim_value,
    }


def create_absolute_diff_image(absolute_diff: np.ndarray) -> Image.Image:
    """Generate an absolute difference visualization with contrast amplification."""
    # Why: scale difference to enhance visibility while preventing overflow.
    amplified = np.clip(absolute_diff * 4.0, 0, 255).astype(np.uint8)
    # Why: convert numpy array back into an image for saving.
    return Image.fromarray(amplified, mode="RGB")


def create_additive_overlay(iter_rgb: np.ndarray, ref_rgb: np.ndarray) -> Image.Image:
    """Blend iteration and reference RGB content equally."""
    # Why: average the arrays to highlight overlapping agreement.
    blended = ((iter_rgb.astype(np.float32) + ref_rgb.astype(np.float32)) / 2.0).astype(np.uint8)
    # Why: return the blended image as a Pillow object.
    return Image.fromarray(blended, mode="RGB")


def create_signed_diff(iter_rgb: np.ndarray, ref_rgb: np.ndarray) -> Image.Image:
    """Visualize signed differences using red for positive and blue for negative deltas."""
    # Why: compute signed difference between iteration and reference.
    signed = iter_rgb.astype(np.int16) - ref_rgb.astype(np.int16)
    # Why: isolate positive differences corresponding to iteration being brighter.
    positive = np.clip(signed, 0, None)
    # Why: isolate negative differences corresponding to iteration being darker.
    negative = np.clip(-signed, 0, None)
    # Why: average positive deltas across channels for red intensity.
    red_channel = np.clip(positive.mean(axis=2), 0, 255).astype(np.uint8)
    # Why: average negative deltas across channels for blue intensity.
    blue_channel = np.clip(negative.mean(axis=2), 0, 255).astype(np.uint8)
    # Why: construct RGB image emphasising signed deviation.
    signed_rgb = np.stack([red_channel, np.zeros_like(red_channel), blue_channel], axis=2)
    # Why: return the signed diff visualization as an image.
    return Image.fromarray(signed_rgb, mode="RGB")


def compute_soldermask_opening(iteration_dir: Path) -> Dict[str, float]:
    """Assess soldermask openings using copper and mask renders."""
    # Why: locate copper and soldermask layer images.
    copper_path = iteration_dir / "02-copper.png"
    mask_path = iteration_dir / "03-soldermask.png"
    # Why: load layers as RGBA to inspect alpha channels.
    copper = ensure_rgba(load_image(copper_path))
    mask = ensure_rgba(load_image(mask_path))
    # Why: extract alpha arrays for copper features and mask paint.
    copper_alpha = np.array(copper.split()[-1], dtype=np.uint8)
    mask_alpha = np.array(mask.split()[-1], dtype=np.uint8)
    # Why: treat visible copper exposures via thresholding the alpha channel.
    copper_exposed = copper_alpha > 16
    # Why: detect mask coverage where alpha remains opaque.
    mask_present = mask_alpha > 16
    # Why: count total exposed copper pixels for metrics.
    exposed_count = int(np.count_nonzero(copper_exposed))
    # Why: count pixels where soldermask incorrectly covers exposed copper.
    blocked_count = int(np.count_nonzero(copper_exposed & mask_present))
    # Why: compute opening percentage guarding division by zero.
    opening_ratio = 1.0 if exposed_count == 0 else 1.0 - (blocked_count / exposed_count)
    # Why: measure overall mask coverage relative to board area.
    mask_coverage_ratio = float(np.mean(mask_present))
    # Why: convert ratios into percentages for readability.
    return {
        "copper_exposed_pixels": float(exposed_count),
        "mask_blocked_pixels": float(blocked_count),
        "mask_opening_percent": max(0.0, opening_ratio * 100.0),
        "mask_coverage_percent": max(0.0, mask_coverage_ratio * 100.0),
    }


def save_with_padding(image: Image.Image, bounds: Tuple[int, int, int, int], full_size: Tuple[int, int]) -> Image.Image:
    """Embed a cropped diff image back into the full iteration dimensions."""
    # Why: unpack bounding box for placement coordinates.
    top, bottom, left, right = bounds
    # Why: create transparent canvas matching the iteration dimensions.
    canvas = Image.new("RGBA", full_size, color=(0, 0, 0, 0))
    # Why: paste diff visualization at the original board location using opaque alpha.
    canvas.paste(image.convert("RGBA"), (left, top))
    # Why: return composed image for saving.
    return canvas


def main() -> None:
    """Run the PCB iteration analysis workflow."""
    # Why: parse CLI arguments.
    args = parse_arguments()
    # Why: resolve iteration directory to absolute path for consistency.
    iteration_dir = args.iteration_dir.resolve()
    # Why: determine output directory for diff artefacts.
    output_dir = (args.output_prefix or iteration_dir).resolve()
    # Why: ensure destination directory exists for saving outputs.
    output_dir.mkdir(parents=True, exist_ok=True)
    # Why: load generated PCB composite for the iteration.
    iteration_image = ensure_rgba(load_image(iteration_dir / "full-pcb.png"))
    # Why: load reference board crop image for comparison.
    reference_image = ensure_rgba(load_image(args.reference_board.resolve()))
    # Why: resize reference to match iteration dimensions for pixel-wise comparison.
    reference_resized = resize_to_match(reference_image, iteration_image.size)
    # Why: convert images to numpy arrays for numeric processing.
    iteration_array = np.array(iteration_image, dtype=np.uint8)
    reference_array = np.array(reference_resized, dtype=np.uint8)
    # Why: extract iteration alpha channel defining board coverage.
    alpha_channel = iteration_array[:, :, 3]
    board_mask = alpha_channel > 0
    ignore_mask = np.zeros_like(board_mask, dtype=bool)
    if args.ignore_mask:
        ignore_image = ensure_rgba(load_image(args.ignore_mask.resolve()))
        ignore_alpha = np.array(ignore_image.split()[-1], dtype=np.uint8) > 0
        if ignore_alpha.shape != board_mask.shape:
            raise ValueError("Ignore mask dimensions do not match iteration image")
        ignore_mask = ignore_alpha
    analysis_mask = board_mask & ~ignore_mask
    # Why: compute tight bounding box over the board area.
    bounds = extract_board_crop(alpha_channel)
    # Why: crop arrays to board bounds for focused analysis.
    iter_crop = crop_to_bounds(iteration_array[:, :, :3], bounds)
    ref_crop = crop_to_bounds(reference_array[:, :, :3], bounds)
    analysis_mask_crop = crop_to_bounds(analysis_mask.astype(bool), bounds)
    # Why: compute absolute difference for visualization and metrics.
    absolute_diff = np.abs(iter_crop.astype(np.int16) - ref_crop.astype(np.int16)).astype(np.float32)
    mask_rgb = np.repeat(analysis_mask_crop[:, :, None], 3, axis=2)
    absolute_diff[~mask_rgb] = 0
    # Why: calculate similarity metrics from the cropped RGB regions.
    metrics = compute_metrics(iter_crop.astype(np.float32), ref_crop.astype(np.float32), analysis_mask_crop)
    # Why: build absolute diff image padded to full iteration dimensions.
    abs_image = save_with_padding(create_absolute_diff_image(absolute_diff), bounds, iteration_image.size)
    # Why: build additive overlay visual padded to original dimensions.
    additive_image = save_with_padding(create_additive_overlay(iter_crop, ref_crop), bounds, iteration_image.size)
    # Why: build signed diff visual padded for context.
    signed_raw = create_signed_diff(iter_crop, ref_crop)
    signed_np = np.array(signed_raw)
    signed_np[~analysis_mask_crop] = 0
    signed_image = save_with_padding(Image.fromarray(signed_np, mode="RGB"), bounds, iteration_image.size)
    # Why: evaluate soldermask opening performance metrics.
    mask_metrics = compute_soldermask_opening(iteration_dir)
    # Why: merge PCB metrics with soldermask diagnostics for unified reporting.
    combined_metrics: Dict[str, float] = {**metrics, **mask_metrics}
    evaluated_pixels = int(np.count_nonzero(analysis_mask_crop))
    combined_metrics['evaluated_pixels'] = float(evaluated_pixels)
    combined_metrics['ignored_pixels'] = float(int(analysis_mask_crop.size - evaluated_pixels))
    # Why: persist diff images to the output directory.
    abs_image.save(output_dir / "diff-absolute.png")
    additive_image.save(output_dir / "diff-additive.png")
    signed_image.save(output_dir / "diff-signed.png")
    # Why: write metrics JSON for downstream tooling or documentation.
    with (output_dir / "analysis-metrics.json").open("w", encoding="utf-8") as handle:
        json.dump(combined_metrics, handle, indent=4)
    # Why: emit metrics summary to stdout for immediate visibility.
    print(json.dumps(combined_metrics, indent=4))


if __name__ == "__main__":
    # Why: execute analysis when script is invoked directly.
    main()
