---
layout: default
title: "Camera trigger board"
permalink: /extensions/camera-trigger-board
---

# Camera trigger board

Camera-family-specific isolated trigger adapter for repeatable timelapse capture.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native clean retained;130unsigned, PhotoMOS source discrepancy/host/camera/physical gates open.

## Interfaces and wiring

### Inputs

- One or two protected host control signals

### Outputs

- Camera focus and shutter contacts through selected family connector

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function |
| ---: | --------------------- | ----------------- |
|    1 | +3.3V                 | +3.3 V rail       |
|    2 | +5V                   | +5 V rail         |
|    3 | GPIO! / type-specific | Shutter command   |
|    4 | type-specific         | Focus command     |
|    5 | type-specific         | Status/auxiliary  |
|    6 | type-specific         | N/C               |
|    7 | type-specific         | N/C               |
|    8 | type-specific         | N/C               |
|    9 | type-specific         | N/C               |
|   10 | GND                   | Ground            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Camera contact voltage/current/polarity must be measured or confirmed by manufacturer documentation
- Isolation must not leak enough current to trigger the camera
- Connector wiring differs by camera family; 2.5 mm TRS is not universal

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Galvanic isolation between host and camera contacts
- ESD at camera jack without excessive leakage
- Pulldowns ensure no trigger during reset

## Selected component architecture

[Complete component review](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/component-review.md): actualv10 retains floating AQY212GS, existing DMN2056U/local-bias/bypass improvements and conditional V1 stock families; no successor. Native clean retained; PhotoMOS source discrepancy, host/current/camera/physical gates remain unresolved.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/camera-trigger-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### camera-trigger

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/attempt/versions/v13/camera-trigger.kicad_pcb), SHA-256 `816a087d2791cb554901bff82f1954f68b06530c2a57627eeb5854ce28c83462`.
- Last native check: **61 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/attempt/versions/v13/populations/camera-trigger/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/camera-trigger-board/attempt/versions/v13/camera-trigger-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation candidate — V17

The additive [v17 candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/camera-trigger-board/attempt/versions/v17) preserves the protected v16 circuit, component positions, outline and electrical rules. It corrects revision labels and improves annotation fonts; a readable full board URL is still pending. Final source-bound parent checks report zero enabled electrical errors, open connections or schematic-parity findings, clean schematic checks and 11 remaining annotation/library warnings. All 6 declared populated/bare views and current manufacturing exports are checked against this source. Earlier component and revision selections on this page remain historical context. Physical fit, current/thermal performance, host compatibility and fabrication qualification remain unverified; no purchasing saving is claimed.

PCB SHA-256: `229aa9ed5a576557a6b917b3d437e60c581a8f6b3ce0a3415efdeb99b54817ab`.
