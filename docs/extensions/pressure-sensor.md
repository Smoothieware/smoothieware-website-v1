---
layout: default
title: "Pressure sensor"
permalink: /extensions/pressure-sensor
---

# Pressure sensor

Unresolved pressure-sensing board for an OpenPnP-related pneumatic application.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The current retained native study is [v19](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/attempt/versions/v19). The original
requirements below remain historical requirements; the following choices are
prototype assumptions, not confirmation from the original OpenPnP author.

Board-specific qualification limits: v19 CAD/package review clean but AIN_OUT is 8.81mm versus 8mm target; exact sensor/media/range, ADC/host behavior, calibration, pneumatically safe construction and physical fit remain unqualified.

## Interfaces and wiring

The retained analogue prototype uses an MPXV6115VC6U from 5 V, a 40.2 kΩ/60.4 kΩ 0.1% divider and RC conditioning into a type-A analogue input. Canonical host pins are 1=3.3 V, 2=5 V, 3=pressure AIN and 10=GND. Three cuttable links shift host 4→chain 3, 5→chain 4 and 6→chain 6; chain 5 and 7–9 are intentionally unused. This is not an I²C sensor or a hardware-threshold switch.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

Dry filtered air and vacuum pickup are prototype assumptions. Confirm exact sensor/vent, transfer function, ambient-pressure-dependent usable range and tube fit. The historical −115 kPa endpoint is not a universally attainable vacuum. ADC acquisition, source sequencing and accuracy remain unqualified.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/component-review.md). Retain analogue MPXV6115VC6U architecture; defer ABP2 pending a complete digital interface and application choice. Conditional V1 100nF C0603 reuse only; preserve precision divider; no new revision. Current selected v19; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/pressure-sensor`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v20, v21, v22. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v20, v21, v22**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### pressure-sensor

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/attempt/versions/v22/pressure-sensor.kicad_pcb), SHA-256 `f87c26c90f80670da8cacf4b686e19a26b6a27bda150fcca9d25ceed587c7bfe`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/attempt/versions/v22/populations/pressure-sensor/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/pressure-sensor/attempt/versions/v22/pressure-sensor-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate — V23

The additive [v23 native candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/pressure-sensor/attempt/versions/v23) adds a readable complete documentation URL and current revision labels while preserving the protected preceding circuit, placements, outline and electrical rules. Parent rechecks found zero enabled electrical errors, open connections or schematic-parity findings and clean schematic checks; 3 text-thickness warnings remain. All 6 declared populated/bare views and current manufacturing exports are source-bound. Earlier revision/component selections on this page are historical context. No current rating, sensor/host compatibility, optical or mechanical fit, purchasing savings or fabrication release is established.

PCB source SHA-256: `e70537c4c77f0c76f30022899a834341726a6c8b76000b44d00b0154c2de7df6`.
