---
layout: default
title: "Bidirectional level shifting board"
permalink: /extensions/bidirectional-level-shifting-board
---

# Bidirectional level shifting board

{% include extension-board-visuals.html slug="bidirectional-level-shifting-board" %}

Translate a deliberately bounded set of digital signals between two Y-port voltage domains.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Actual **v10** retains seven independent SN74LVC1T45 directions and four already adopted V2 TPD4E1U06DCKR arrays. See [complete76-record/43-purchased review](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/component-review.md). No new revision. Current variant is manually directed push-pull only; historical open-drain options below are not implemented, and arbitrary UART/SPI/I2C/hot-plug compatibility is not established.

Board-specific qualification limits: Twoopens/DRCexit5;marking/three failed checklist/physical gates open.

## Interfaces and wiring

The selected PP7 variant has seven SN74LVC1T45 translation channels with independently set directions and four TPD4E1U06DCKR protection arrays. The two supply domains and channel directions must be explicitly configured.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

The retained design is push-pull only. It does not implement the historical open-drain option or establish arbitrary I²C/SPI/UART compatibility. Validate supply sequencing, Ioff behavior, direction ownership and logic thresholds before connecting either side.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/bidirectional-level-shifting-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### level-shifter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/attempt/versions/v13/level-shifter.kicad_pcb), SHA-256 `51e100858c4b2d8d9836be1b808808ce26318002c4b9642acf65fecfb1fca082`.
- Last native check: **2 errors**, including **2 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/attempt/versions/v13/populations/level-shifter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bidirectional-level-shifting-board/attempt/versions/v13/level-shifter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation candidate — V17

The additive [v17 candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/bidirectional-level-shifting-board/attempt/versions/v17) preserves the protected v16 circuit, component positions, outline and electrical rules. It corrects revision labels and adds a readable complete HTTPS documentation link. Final source-bound parent checks report zero enabled electrical errors, open connections or schematic-parity findings, clean schematic checks and 0 remaining annotation/library warnings. All 6 declared populated/bare views and current manufacturing exports are checked against this source. Earlier component and revision selections on this page remain historical context. Physical fit, current/thermal performance, host compatibility and fabrication qualification remain unverified; no purchasing saving is claimed.

PCB SHA-256: `90d4218f79cc27d746ac33d850fa410dcf1e9899060e93e73bdc268a03d71d3b`.
