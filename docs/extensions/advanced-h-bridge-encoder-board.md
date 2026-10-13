---
layout: default
title: "Advanced H-bridge encoder board"
permalink: /extensions/advanced-h-bridge-encoder-board
---

# Advanced H-bridge encoder board

Bidirectional 12 V brushed-DC motor driver with quadrature-encoder inputs, VNH5019A-E current sensing and a separate hardware overcurrent-cutoff path. The retained v31 study is rejected and must not be treated as a working motor controller.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The latest retained study is [v31](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/versions/v31), with its
[independent review](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/parent-checks-v31/independent-checks.json).
Fresh KiCad9.0.8 ERC, enabled geometry DRC and schematic/contract parity are zero;
76 inherited opens, four drill-to-land contacts and five ignored rule categories
remain. All132 physical/engineering checklist rows are unsigned.

Board-specific qualification limits: v31 remains rejected:76 inherited opens/four drill contacts/five ignored rule categories; all132 checklist items unsigned; no fabrication/physical qualification.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/advanced-h-bridge-encoder-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v32, v33, v34. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v32, v33, v34**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### advanced-h-bridge

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/versions/v34/advanced-h-bridge.kicad_pcb), SHA-256 `3f95c16f9bd9d217bfe1239c777e524edf4bf9d0294c95f7b44312b1fecce490`.
- Last native check: **21 errors**, including **21 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/versions/v34/populations/advanced-h-bridge/normal/population.json): 6 images; source current; image hashes match; 2 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/versions/v34/advanced-h-bridge-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Current visualization package — v38, 2026-10-13

The parent-authorized recovery associates QF4/QF5 with retained exact donor model bytes and changes only their model filenames. All circuitry, footprint/paste/pad/copper/drill/mounting geometry, model rotations/scales/offsets and rules remain unchanged. Current PCB SHA-256: `a4ff8563f8b3738deba7514c09e950e378e7bd49ba0200ca085a75705b9fbbc0`. [Current source-bound review](https://github.com/arthurwolf/extension-boards/blob/main/src/advanced-h-bridge-encoder-board/attempt/versions/v38/powerpak-regeneration-review.json) supersedes pre-recovery renders and exports, preserved as historical provenance.

Fresh checks report zero enabled errors, opens and parity errors, 13 DRC warnings and 1 ERC warnings, identical to the pre-model-change source. All 120 model declarations resolve; six normal-population views plus a supplemental backside isometric view were inspected and 19 source-bound exports verified. The recovered bodies' visible seating and terminal orientation are consistent with retained placements, including the servo-output zero-degree QF5 placement.

**Visualization only:** the exact donor has up to 0.025 mm isolated-terminal Y-centre displacement from centered 1.27 mm basic pitch. Exact drawing fidelity and physical fit are not claimed. The rendering package is complete; fabrication release, current/load/thermal/host/system safety and physical assembly qualification remain withheld. Inherited silk/library warnings remain.
