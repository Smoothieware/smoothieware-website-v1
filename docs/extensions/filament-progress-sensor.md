---
layout: default
title: "Filament progress sensor"
permalink: /extensions/filament-progress-sensor
---

# Filament progress sensor

{% include extension-board-visuals.html slug="filament-progress-sensor" %}

Research-stage optical-motion sensor that measures filament surface movement without a mechanical encoder ball.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: 13 purchased MPNs/121 selected/2695 historical members match; retained native0; holder/optical/firmware/host/physical gates open.

## Interfaces and wiring

The selected optical-motion study uses PAT9125EL-TKMT with a tri-state interface buffer and TPD4E1U06DCKR protection. Optical geometry and sensor initialization are part of the interface contract; do not assume a generic mouse-sensor module pinout.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

Host-current allowance, undocumented initialization, optical surface response and physical alignment remain unresolved. Holder-height/no-metal constraints conflict and prevent a qualified filament-motion detector.

## Selected component architecture

Selected v25 retains PAT9125EL-TKMT, the tri-state buffer and already fitted exact V2 Id27 protection array. [Complete component review](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/component-review.md) covers all27 records/13 purchased identities and conditional V1 bypass reuse; no successor. Native retained ERC/DRC/opens/parity0 does not close the holder-height/no-metal conflicts, host-current assumptions, undocumented initialization or optical/physical qualification. Current sensor/hole axis is y17.8mm; older coordinates are historical.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/filament-progress-sensor`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v26, v27, v28. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v26, v27, v28**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### filament-sensor

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/attempt/versions/v28/filament-sensor.kicad_pcb), SHA-256 `fd6fb96c18bca3d6a827ced0e76be774a518008593f1e4bff9b83077ddc73977`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/attempt/versions/v28/populations/filament-sensor/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-progress-sensor/attempt/versions/v28/filament-sensor-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate — V29

The additive [v29 native candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/filament-progress-sensor/attempt/versions/v29) adds a readable complete documentation URL and current revision labels while preserving the protected preceding circuit, placements, outline and electrical rules. Parent rechecks found zero enabled electrical errors, open connections or schematic-parity findings and clean schematic checks; 2 text-thickness warnings remain. All 6 declared populated/bare views and current manufacturing exports are source-bound. Earlier revision/component selections on this page are historical context. No current rating, sensor/host compatibility, optical or mechanical fit, purchasing savings or fabrication release is established.

PCB source SHA-256: `dc82cef7f73d845ca608c948f834133c5ecd41f96bd463f7cbab9f89c5cfbd77`.
