---
layout: default
title: "Additional general purpose outputs breakout / Servo board"
permalink: /extensions/general-purpose-output-servo-board
---

# Additional general purpose outputs breakout / Servo board

{% include extension-board-visuals.html slug="general-purpose-output-servo-board" %}

Provide seven buffered output channels on servo-style Ground/Power/Signal connectors for servos, SSR inputs, or external driver logic.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10/73 purchased identities/101records/82 selected/483 historical hashes match;retained native0;STEP/power/fault/physical open.

## Interfaces and wiring

### Inputs

- Y or P Gadgeteer signals.
- External 5–12 V power on 3.5 mm terminal.

### Outputs

- Seven keyed 2.54 mm Ground/Power/Signal connectors.
- One chain port.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function | Design note                                                        |
| ---: | -------- | ------------------------------------------------------------------ |
|    1 | +3.3 V   | Canonical fixed rail.                                              |
|    2 | +5 V     | Canonical fixed rail.                                              |
|    3 | OUT_1    | Board mapping; validate against current V2 hardware before layout. |
|    4 | OUT_2    | Board mapping; validate against current V2 hardware before layout. |
|    5 | OUT_3    | Board mapping; validate against current V2 hardware before layout. |
|    6 | OUT_4    | Board mapping; validate against current V2 hardware before layout. |
|    7 | OUT_5    | Board mapping; validate against current V2 hardware before layout. |
|    8 | OUT_6    | Board mapping; validate against current V2 hardware before layout. |
|    9 | OUT_7    | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND      | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Source asks for 5–12 V connector power and 5–12 V signal; that is not a universal servo contract and remains blocked pending a supported-load matrix.
- Signal outputs require 10 kΩ pull-downs under the project standard.
- Total servo inrush can far exceed Gadgeteer power.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Reverse polarity and fuse/current limit external input; block backfeed; add output shorts protection and ESD appropriate to cables.

## Selected component architecture

[Selected v10 review](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/component-review.md) covers101records/73 purchased identities and four existing V1-compatible0603 bypasses. Retain strong drivers/direct interface,no successor. Signal/servo power, selector/backfeed, surge/PTC, thermal/host/STEP/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/general-purpose-output-servo-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical upgrade candidate readback — 2026-10-11

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The historical v13 candidate is described below. The current second-round retained study is recorded afterward.

### servo-out

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/attempt/versions/v13/servo-out.kicad_pcb), SHA-256 `fbfe719fe9148718f5c5089aa77f2fdda35951440a768e05de085fa6be158126`.
- Last native check: **518 errors**, including **88 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/attempt/versions/v13/populations/servo-out/normal/population.json): 6 images; source current; image hashes match; 2 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/attempt/versions/v13/servo-out-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Historical pre-recovery annotation study — v18, 2026-10-13

Revision **v18** improves the power legend, rear title, complete documentation URL, revision marking and J3–J9 wiring guide while preserving v17's circuit, component/footprint expressions, copper, drills and mechanics. [Source-bound review](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/attempt/versions/v18/inherited-provenance-before-powerpak/servo-out-usability-review.json) binds the PCB to SHA-256 `3db4c61601f058902279f25e019189a237cb2e14509bac478dd4ba989ffd7228`. All 390 frozen historical hashes remain unchanged.

Fresh native checks have zero enabled design-rule errors, zero open connections, zero schematic parity findings and clean electrical rules. Warning categories did not increase; the inherited total fell from 204 to 186. Six normal populated/bare views were generated and inspected, and 17 source-bound manufacturing/BOM/placement/schematic export files were verified. No alternative connector population is declared.

**Pre-recovery historical status:** package acceptance was withheld: the exact PowerPAK SO-8 body model declared for QF4/QF5 is unavailable, and exact official recovery returned HTTP 404. Two of 133 model declarations remain unresolved, so populated views omit those bodies. No substitute package or electrical change was made. Render/package completeness and fabrication release remain false. Load-voltage compatibility, current, host, thermal, physical assembly and connector fit remain unqualified; inherited silk/library warnings remain.

## Current visualization package — v18, 2026-10-13

The parent-authorized recovery associates QF4/QF5 with retained exact donor model bytes and changes only their model filenames. All circuitry, footprint/paste/pad/copper/drill/mounting geometry, model rotations/scales/offsets and rules remain unchanged. Current PCB SHA-256: `f8b01845d4fa82b3de4c3b3d97f1e38339df3b539475202f2b438dde718b3d9a`. [Current source-bound review](https://github.com/arthurwolf/extension-boards/blob/main/src/general-purpose-output-servo-board/attempt/versions/v18/powerpak-regeneration-review.json) supersedes pre-recovery renders and exports, preserved as historical provenance.

Fresh checks report zero enabled errors, opens and parity errors, 186 DRC warnings and 0 ERC warnings, identical to the pre-model-change source. All 133 model declarations resolve; six normal-population views plus a supplemental backside isometric view were inspected and 17 source-bound exports verified. The recovered bodies' visible seating and terminal orientation are consistent with retained placements, including the servo-output zero-degree QF5 placement.

**Visualization only:** the exact donor has up to 0.025 mm isolated-terminal Y-centre displacement from centered 1.27 mm basic pitch. Exact drawing fidelity and physical fit are not claimed. The rendering package is complete; fabrication release, current/load/thermal/host/system safety and physical assembly qualification remain withheld. Inherited silk/library warnings remain.

## Trusted-power review — V18 retained

The current board already uses the original 72 × 63 mm nominal outline without a sparse protection annex. The trusted host supply passes through a real downstream servo/output branch limiter before the selectable servo supply. The separate loose-wired external input retains its LTC4368/MOSFET protection and warning circuitry. No new CAD revision was justified by this review.

Native layout, connectivity and schematic-parity checks have zero errors or opens; ERC is clean. Existing library/silkscreen warnings and visible label clutter remain unresolved. All six current normal-population views were visually checked for framing. Physical and electrical qualification remains open; fabrication release is false.
