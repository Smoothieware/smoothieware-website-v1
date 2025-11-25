# Task 01: Build Layered SVG Pipeline for Smoothieboard V2 — TODO List

## Overview

This TODO translates the task requirements into an actionable, manual-first plan for generating orthographic, layered SVG representations of the Smoothieboard V2 (top and bottom sides). Work through the sections sequentially. Scripts live under `src/`, generated assets and documentation under `data/board-design-research/`. No other paths are writable.

Key principles:
- Vector-first workflow: SVG is canonical; PNGs exist only for diagnostics.
- Manual iteration with helper scripts; no monolithic automation.
- Top side must be completed and validated before starting the bottom side.
- Preserve every iteration (diffs, notes, metrics) without deletion.
- Never touch git; the user manages version control.

Mark items `[x]` as they are completed. Leave skipped items as `[ ]` with a note explaining why.

---

## 0. Preparations & Environment

### 0.1 Repository Hygiene & Constraints

* [x] Confirm no pending git operations need resolution (read-only check; do not run git commands).
* [x] Ensure all automation/scripts will live under `src/` and are designed to generate the required artifacts when run.
* [x] Ensure all generated data, diagnostics, and docs will live under `data/board-design-research/`.
* [x] Note in `tasks/todo/01-create-v2-board-svg.todo.md` if any additional constraint or assumption is introduced during work (none so far).

### 0.2 Reference Assets & Orientation

* [x] Inspect `data/v2-prime-original/v2-prime.png` (top) and identify target resolution.
* [x] Identify bottom-side reference (if not already present, derive expected resolution from source files or tooling outputs).
* [x] Record reference dimensions and DPI target (600 DPI mapping mm→px) in `data/board-design-research/top/metadata/notes.md`, noting that tooling scripts must enforce this mapping.
* [x] Verify orientation expectations: top = orthographic; bottom = mirrored horizontally for viewer perspective.
* [x] Derive the board-only bounding box within the reference canvas (record pixel ranges and store a crop such as `v2-prime-board-only.png`) so comparisons can operate on either the board-only crop or a recreated full canvas.

### 0.3 Directory & File Skeleton

* [x] Create directory tree under `data/board-design-research/top/`:
  * `metadata/`, `01-pcb-loop/`, `02-components/`, `03-connectors/`, `04-labels/`, `05-final-step/`.
  * Place `components.yaml`, `connectors.yaml`, `notes.md`, and `metrics.yaml` placeholders in `metadata/`.
* [x] Create matching structure under `data/board-design-research/bottom/` (metadata + loop directories + `metrics.yaml`).
* [x] Add README stubs (optional) in top/bottom roots summarizing progress checkpoints.

### 0.4 Aggregated Metrics Infrastructure

* [x] Decide on aggregated metrics schema (`metrics.yaml` per side) capturing component reference, iteration count, RGB diff, SSIM, manual offsets, and notes—all populated via the comparison tooling you write.
* [x] Document the schema within `metadata/notes.md` for both sides.

### 0.5 Color Palette Tracking

* [x] Create or update a README section (e.g., `README.md`) capturing the sRGB palette derived from the reference image, noting which tooling produced the measurements.
* [x] Record initial palette assumptions in `metadata/notes.md`.

---

## 1. Component & Connector Metadata Extraction (Top Side)

### 1.1 Primary Extraction Attempt

* [x] Choose a primary extractor (e.g., Method 10 `parse_components.py`) and adapt it under `src/` to emit the required YAML format.
* [x] Adapt script under `src/` to emit YAML with fields: `reference`, `name`, `footprint`, `x_mm`, `y_mm`, `rotation_deg`, `layer`, `notes`, `status`.
* [x] Run the extraction script and populate `data/board-design-research/top/metadata/components.yaml`.
* [x] For connectors, generate `connectors.yaml`, including functional labels (e.g., `J4_USB_B`).

### 1.2 Fallback Extraction Handling

* [x] If the primary extractor fails, attempt the next method (Method 7 parser, then Method 9, then Method 5 SVG parsing). *(Primary extractor succeeded; fallbacks not required.)*
* [x] Document failed attempts and remediation in `metadata/notes.md`. *(None required — primary run succeeded.)*
* [x] Ensure final YAML includes placeholder entries for any missing components flagged for manual follow-up. *(No missing components detected.)*

### 1.3 Coordinate Normalization

* [x] Convert KiCad coordinates (mm) to 600 DPI pixel positions matching the reference resolution via tooling; record conversion formula in `notes.md`.
* [x] Apply horizontal mirroring rule for the bottom side in documentation (top metadata remains unmirrored).
* [x] Annotate each YAML entry with initial pixel coordinates and iteration counter (start at 0).

### 1.4 Validation & Metrics Setup

* [x] Verify YAML syntax (manual review) and ensure entries include human-readable functional names.
* [x] Initialize `metrics.yaml` with empty arrays/objects ready to capture iteration data.
* [x] Record the extraction process summary in `metadata/notes.md` (tool, script path, date, validation steps).

---

## 2. Top-Side PCB Layer Loop (01-pcb-loop)

### 2.1 Baseline Assets

* [x] Gather Gerber files and KiCad board necessary for PCB rendering (Method 7 assets recommended).
* [x] Establish script under `src/pcb/` (e.g., `render_top_pcb.py`) referencing PyGerber or preferred library and capable of producing SVG/PNG outputs when run.
* [x] Document script usage, dependencies, and invocation steps in README or `notes.md`.

### 2.2 Iteration Framework

* [x] Create `data/board-design-research/top/01-pcb-loop/steps/01-initial-draft/` with template files:
  * `01-substrate.svg/png`, `02-copper.svg/png`, `03-soldermask.svg/png`, `04-silk-screen.svg/png`, `full-pcb.svg/png`, `comparison.md`, `change-we-decided-to-make.md`.
* [x] Establish naming convention for subsequent steps (`02-...`, `03-...`, etc.) following numeric prefixes.

### 2.3 Per-Iteration Checklist _(before checking an item, replace the blank inside `[ ]` with the current iteration number, e.g., `[ ]`)_

- [10 ] Align layer outputs (copper, soldermask paint, silkscreen) with the reference using the tooling; ensure hidden-under-component silkscreen remains omitted.
- [8 ] Align layer outputs (copper, soldermask paint, silkscreen) with the reference using the tooling; ensure hidden-under-component silkscreen remains omitted. (Component mask now available for board-only metrics.)
- [ ] Verify substrate, copper, soldermask paint, and silk colors match the reference palette via tooling; update palette documentation if adjusted.
- [8 ] Verify substrate, copper, soldermask paint, and silk colors match the reference palette via tooling; update palette documentation if adjusted. (Masked comparisons confirm palette sufficiency.)
- [10 ] Confirm mechanical cutouts and mounting holes are present in the substrate layer.
- [10 ] Render SVGs/PNGs for all layers at reference resolution for this iteration (board-only with transparency, plus full-canvas placement if required).
- [8 ] Render SVGs/PNGs for all layers at reference resolution for this iteration (board-only with transparency, plus full-canvas placement if required). (08 component-masked outputs for masked metrics.)
- [3 ] Render SVGs/PNGs for all layers at reference resolution for this iteration (board-only with transparency, plus full-canvas placement if required). (03-palette-tuned exported with revised palette)
- [10 ] Produce diff overlays (additive, subtractive, absolute difference) for the iteration.
- [2 ] Produce diff overlays (additive, subtractive, absolute difference) for the iteration. (02-soldermask-corrected: diff-absolute.png, diff-additive.png, diff-signed.png)
- [8 ] Produce diff overlays (additive, subtractive, absolute difference) for the iteration. (08 absolute/signed diffs blanked outside analysed board areas.)
- [3 ] Produce diff overlays (additive, subtractive, absolute difference) for the iteration. (03-palette-tuned: diff-absolute.png, diff-additive.png, diff-signed.png)
- [10 ] Compute RGB diff and SSIM; record values in `comparison.md` and append to `metrics.yaml` with the iteration number.
- [2 ] Compute RGB diff and SSIM; record values in `comparison.md` and append to `metrics.yaml` with the iteration number. (Current: 62.79 % RGB match, SSIM 0.293 — geometry mismatch noted.)
- [8 ] Compute RGB diff and SSIM; record values in `comparison.md` and append to `metrics.yaml` with the iteration number. (08 masked metrics: 97.61 % RGB, SSIM 0.999.)
- [3 ] Compute RGB diff and SSIM; record values in `comparison.md` and append to `metrics.yaml` with the iteration number. (03 palette tweak: 64.93 % RGB match, SSIM 0.306.)
- [10 ] Capture any console logs or script outputs into the iteration directory.
- [2 ] Capture any console logs or script outputs into the iteration directory. (`analysis-metrics.json`, console JSON emitted.)
- [8 ] Capture any console logs or script outputs into the iteration directory. (08 includes analysis-metrics.json with evaluated/ignored pixel counts.)
- [3 ] Capture any console logs or script outputs into the iteration directory. (`analysis-metrics.json` + diff plates committed for 03.)

### 2.4 Completion Criteria

* [ ] Achieve ≥95% RGB match with acceptable SSIM for PCB-only render.
* [ ] Record final offsets/colors in `notes.md` and mark PCB loop ready for handoff to component loop.

---

## 3. Top-Side Component & Connector Loop (02-components & 03-connectors)

### 3.1 Workspace Setup

* [ ] Ensure `02-components/steps/` and `03-connectors/steps/` directories exist with template subdirectories per component/group (hybrid strategy: large unique components individually, grouped passives by type).
* [ ] Copy or create template files for each component directory (component SVG/PNG, positioned SVG/PNG, `comparison-result.md`, `change-we-decided-to-make.md`, diff placeholders, metrics append helper).

### 3.2 Per-Component Iteration Checklist _(before checking an item, replace the blank inside `[ ]` with the current iteration number, e.g., `[4 ]`)_

- [ ] Initialize or update the iteration folder (e.g., `01-stm32h7-core-mcu/01-initial-pass/`).
- [ ] Redraw `component.svg` from scratch using KiCad footprint geometry where available; enforce flat top-down silhouettes without shading.
- [ ] Position the component using metadata pixel coordinates, applying manual tweaks if required but quantizing rotation to 0.5° increments.
- [ ] Render positioned PNGs at reference resolution by running the relevant tooling, generate diff imagery (additive, subtractive, absolute), and store alongside outputs.
- [ ] Compute RGB diff + SSIM via tooling; document results in `comparison-result.md`/`change-we-decided-to-make.md` and append metrics (with iteration number) to both per-component docs and `metrics.yaml`.
- [ ] Update metadata YAML with any manual offsets or notes captured during the iteration.
- [ ] Confirm ≥95% RGB match and acceptable SSIM before considering the component converged; otherwise plan the next iteration.

### 3.3 Special Component Guidance

* [ ] For connectors, fiducials, test points, electrolytic capacitors, and copper relief details, replicate the reference image styling precisely.
* [ ] Maintain separate iteration tracks for connectors versus passive groups when beneficial.

### 3.4 Archiving

* [ ] Upon convergence, move the final iteration to `final-render/01-<component-name>/` (or group name), copying final SVG/PNG and updating documentation.
* [ ] Ensure diff images and metrics remain accessible.

---

## 4. Top-Side Label Loop (04-labels)

### 4.1 Label Inventory

* [ ] Enumerate all visible labels (connector callouts, board markings, etc.) on the reference image using tooling/visual inspection.
* [ ] Record inventory in `04-labels/labels.md` or similar.

### 4.2 Iteration Template

* [ ] For each label, create a steps directory mirroring component structure (`steps/01-<label-name>/`).
* [ ] Prepare template files: `label.svg`, `label.png`, `label-in-position.svg`, `label-in-position.png`, `comparison-result.md`, `change-we-decided-to-make.md`, diff placeholders.

### 4.3 Per-Label Iteration Checklist _(before checking an item, replace the blank inside `[ ]` with the current iteration number, e.g., `[4 ]`)_

- [ ] Select or adjust an open-source font to approximate the reference; incorporate KiCad font metrics if available.
- [ ] Position the label exactly as seen in the reference, accounting for any component occlusion.
- [ ] Render label PNGs at reference resolution via tooling, produce diff imagery (additive, subtractive, absolute), and store with the iteration files.
- [ ] Compute RGB diff + SSIM via tooling; log metrics and iteration number in both per-label docs and `metrics.yaml`.
- [ ] Ensure ≥95% RGB match and acceptable SSIM before archiving the label iteration.

### 4.4 Archiving

* [ ] Move converged labels to `final-render/` with final assets and documentation.

---

## 5. Top-Side Final Assembly (05-final-step)

### 5.1 Layer Collection

* [ ] Gather final PCB, component, connector, and label SVG/PNG assets into `05-final-step/layers/` with numeric prefixes (capturing both board-only layers and full-canvas placements if applicable).
* [ ] Confirm no raster content is embedded in any SVG (tooling inspection or manual review).

### 5.2 Stacking Script

* [ ] Implement Python helper in `src/assembly/render_top_final.py` (or similar) that stacks layers into board-only composites and full-canvas renders (aligned to the reference background) and produces outputs when run.
* [ ] Allow CLI overrides for layer order and output paths; document usage.

### 5.3 Final Validation

* [ ] Run stacking script to produce both board-only and full-canvas composite outputs.
* [ ] Compute RGB diff + SSIM for the board-only composite (and, if maintained, the full canvas) versus the matching reference crop; store diff imagery and metrics in `05-final-step/all-together/` and append to `metrics.yaml`.
* [ ] Document final offsets, color notes, and any caveats in `05-final-step/final-report.md`.

### 5.4 Build Command

* [ ] Create a top-level build script (`src/scripts/build_top.py`) that orchestrates PCB assembly, component aggregation, label render, and final stacking by invoking the previously created tooling scripts.
* [ ] Provide `--help` output explaining manual usage (manual invocation only; no automation loops).
* [ ] Verify script outputs match expectations without altering intermediate iteration artifacts (run and inspect outputs).

---

## 6. Bottom-Side Workflow Repeat

After top side completion, mirror the entire process for the bottom side.

### 6.1 Metadata & Orientation

* [ ] Regenerate or adapt component/connectors metadata for the bottom (ensure mirrored orientation noted in YAML).
* [ ] Update `metrics.yaml` and `notes.md` with bottom-side specific details.

### 6.2 PCB Loop (Bottom)

> Use the same per-iteration checklist format as the top-side PCB loop; before checking an item, replace the blank inside `[ ]` with the current bottom-side iteration number (e.g., `[4 ]`).

- [ ] Repeat PCB loop under `bottom/01-pcb-loop/`, ensuring only bottom copper/silkscreen are rendered by running the bottom-side tooling.
- [ ] Maintain iteration documentation, diff storage, and metrics logging identical to top (record values in bottom `metrics.yaml`).

### 6.3 Components & Connectors (Bottom)

> Apply the per-component iteration checklist; before checking an item, replace the blank inside `[ ]` with the current bottom-side iteration number (e.g., `[4 ]`).

- [ ] Repeat component/connector iterations for bottom-only components (exclude any top occlusion silhouettes) using the tooling.
- [ ] Log iterations, diffs, and offsets in both per-component documentation and the bottom `metrics.yaml`.

### 6.4 Labels (Bottom)

> Apply the per-label iteration checklist; before checking an item, replace the blank inside `[ ]` with the bottom-side iteration number (e.g., `[4 ]`).

- [ ] Repeat label loop for bottom-side text/markings (if any) using tooling for renders and comparisons.

### 6.5 Final Assembly & Build

* [ ] Assemble bottom layers, run bottom stacking script (e.g., `src/scripts/build_bottom.py`).
* [ ] Validate with RGB diff + SSIM; collect metrics and diff imagery in bottom `05-final-step/`.

---

## 7. Consolidated Build & Documentation

### 7.1 Master Build Script

* [ ] Implement `src/scripts/build_all.py` that sequentially runs top and bottom build scripts (manual invocation only).
* [ ] Provide CLI options to run top-only, bottom-only, or full stack.

### 7.2 Documentation Update

* [ ] Update `README.md` (or create `docs/svg-pipeline.md`) summarizing the workflow, scripts, directory structure, and verification steps.
* [ ] Record lessons learned and known limitations in `tasks/todo/01-create-v2-board-svg.todo.md` or a dedicated summary file.

### 7.3 Testing & Verification

* [ ] Develop unit tests under `src/test/` covering critical utilities (metadata extraction, diff computation, stacking scripts) with wide coverage.
* [ ] Document test execution commands in README and ensure they pass.

### 7.4 Cleanup & Final Review

* [ ] Review all iteration directories ensuring diff images, metrics, and documentation are present.
* [ ] Confirm no temporary files or outputs exist outside `data/` and `src/`.
* [ ] Perform final manual review of SVGs to ensure they contain no raster data and match the reference aesthetics.

---

## 8. Optional Enhancements (Defer unless directed)

* [ ] Investigate integrating alternative SSIM libraries or optimization techniques if current approach underperforms.
* [ ] Explore additional diagnostic visualizations (heatmaps, overlay toggles) stored alongside iteration data.
* [ ] Prepare scripts for future board variants (only if requested—default scope is Smoothieboard V2).

---

_End of TODO file._


## Appendix: Reference Image Narrative

# Smoothieboard V2 Reference Render Overview

## High-Level Description
- **Canvas & Background:** A 1723×960 lavender gradient backdrop (lighter upper left, darker lower right) with the Smoothieboard V2 centered. A 3‑axis triad icon appears in the lower-left corner. The board itself is framed by wide margins containing textual callouts and labels.
- **Board Rendering Style:** Orthographic, top-down view with black substrate, gold copper highlights, black soldermask covering most copper, and crisp white silkscreen. The board is clearly separated from the background; it does not fill the entire canvas.
- **Dimension Indicator:** On the right side, a vertical arrow annotated “110.000 mm” denotes the board height. There is no horizontal dimension arrow in the image.
- **Connector/Feature Zones:**
  - Top edge: six endstop headers, USB host, USB device, microSD slot, debug UART, Ethernet RJ45 (HanRun), all accompanied by descriptive text.
  - Left edge: analog inputs and general I/O descriptions in vertical labels.
  - Right edge: stepper motor screw terminals, high-side MOSFET connectors, and 5 V regulator callouts.
  - Bottom edge: fan connectors, MOSFET outputs, XT30 power inputs, Gadgeteer headers, and LED legends.
- **Component Highlights:** Visible elements include RJ45 Ethernet jack, dual USB ports, microSD socket, STM32 MCU, driver ICs, electrolytic capacitors, MOSFET packages, XT30/XT connectors, screw terminals, jumpers, and assorted passives.
- **Silkscreen & Logos:** “Smoothieboard v2” branding, OSHW certification mark, component designators (R#, C#, U#, etc.), and multiple annotation blocks are rendered in white.

## Detailed Description
- **Canvas/Background:** Smooth lavender gradient; 3‑axis triad at lower-left; board sits centrally with generous margins.
- **Dimension Callouts:** Right edge arrow labeled “110.000 mm.” Additional textual arrows identify connectors (e.g., “6x Endstop connectors supporting Min and Max stops for X, Y, and Z”; “Comparator buffered probe input allows trigger voltages from 3–45v (Ranges switched by jumpers)”).
- **Top Edge Callouts:** USB DEVICE/Master, microSD, debugging UART, Ethernet 10/100 RJ-45, plus explicit microSD true SDIO support note.
- **Left Side Vertical Text:** “ANALOG 3× resistive inputs …,” “USB DEVICE,” “USB MASTER,” “ETHERNET 10/100 RJ-45,” etc., arranged vertically alongside the board.
- **Right Side Vertical Text:** “STEPPER MOTORS 4× TMC2590 bipolar stepper drivers …,” “PRIMARY POWER XT30 connector for 12V–24V input,” “5V REGULATOR onboard 5V 3A reg,” and similar labels aligned with the green screw terminals and yellow XT power connectors.
- **Bottom Edge Text Blocks:** “SSR 2× control outputs,” “Controlled MOSFETs 4× high side controlled MOSFETs (2 for fans, 2 for hotends),” “High Current MOSFET Out,” “9 GADGETEER standard connectors,” “MOSFET POWER 2× XT30 connector for 12V–24V input,” “PRIMARY POWER,” and “LEDS Primary power / Logic Power / 4× User LED.”
- **Silkscreen Text:** “Smoothieboard v2,” OSHW logo with FR000001 identifier, numerous component references (R#, C#, U#, J#, FAN A+/− labels, etc.).
- **Connectors & Components (visible detail):**
  - RJ45 HanRun HR911105A jack (silver), USB connectors (micro/host), microSD slot, microcontroller (large black square center-left), driver ICs with silver heat slugs, multiple electrolytic capacitors on the right, green screw terminal blocks for motors and power, yellow XT connectors, surface mount LEDs, tactile reset switch, pin headers labeled FAN, SSR, PROTO, etc.
- **Color Palette:**
  - Background gradient: lavender (approx. #CCCDE6 to #71749A).
  - Substrate: deep olive/black (#211E16 range).
  - Copper exposures: metallic gold (#D4AF37).
  - Soldermask (paint): matte black (#060606 to #111111).
  - Silkscreen: white (#FFFFFF).
  - Connectors: green screw blocks (#4FAF6C), yellow XT connectors, silver RJ45/USB housings.

## Alignment Implications
Because the reference image includes wide margins and textual annotations around the centered board, generated renders must either:
1. Crop/extract just the board area from the reference before comparison, **or**
2. Place the generated orthographic board rendering at the same pixel location within a canvas matching the reference layout (background color, margins, annotation space).

All automated comparisons should use a consistent approach so pixel diffs are meaningful—either work purely with cropped board imagery or ensure that regeneration re-creates the full annotated canvas accurately.
