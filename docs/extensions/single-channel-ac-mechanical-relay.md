---
layout: default
title: "Single-channel AC mechanical relay"
permalink: /extensions/single-channel-ac-mechanical-relay
---

# Single-channel AC mechanical relay

{% include extension-board-visuals.html slug="single-channel-ac-mechanical-relay" %}

Single-channel AC mechanical-relay study using a soldered Relpol relay and optical isolation. The retained study is 80 × 79.5 mm; AC switching, insulation, enclosure, relay endurance and physical qualification remain open.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The selected study is80×79.5mm, preserving original soldered Relpol relay, optical isolation, source selection and mounting geometry. R_IND1 conditionally reuses Smoothieboard V1 record58:5.6kΩ10%0603, received lot rating≥0.1W, superseding the historical indicator below. Conservative13.2V/Rmin5040Ω resistor-only power is34.571mW. Selected host/coil trunks widen0.5→0.6mm; short escapes remain. Arrays offer no demonstrated one-channel outline benefit; DRV8860 changes the command interface and firmware.

Board-specific qualification limits: AC switching/insulation, relay endurance, received resistor lot and physical qualification remain open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/component-review.md). Retain single-channel isolated relay topology; conditional V1 record58 indicator resistor already applied in retained v14; no new version Current selected v14; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/single-channel-ac-mechanical-relay`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v15, v16, v17. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v15, v16, v17**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### single-channel-ac-mechanical-relay

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/attempt/versions/v17/single-channel-ac-mechanical-relay.kicad_pcb), SHA-256 `e2442504e88d475aa8e5c4ad2f493c4cb4a3ac4539deaabc34a22d4793fde8b3`.
- Last native check: **50 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J_HOST1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/attempt/versions/v17/populations/single-channel-ac-mechanical-relay/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/attempt/versions/v17/populations/single-channel-ac-mechanical-relay/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-ac-mechanical-relay/attempt/versions/v17/single-channel-ac-mechanical-relay-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v19 — 2026-10-13

Protected source v18; current PCB SHA-256 `76101289ddaef013dec470c8c6192cd48f610b626e9d9807c994bf0bedfe21ef`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 12 PCB warnings. Electrical geometry, project rules and 86 historical files unchanged. Verified 120 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. Inherited back host-label/serial-field overlap remains; mains isolation, creepage, thermal, fuse coordination and assembly qualification open Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
