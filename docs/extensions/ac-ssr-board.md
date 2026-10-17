---
layout: default
title: "AC SSR board"
permalink: /extensions/ac-ssr-board
---

# AC SSR board

{% include extension-board-visuals.html slug="ac-ssr-board" %}

Switch a specified AC mains load with galvanically isolated low-voltage control. The selected v12 is an engineering study targeting 20 A, not a qualified 20 A product or a verified Fotek-compatible assembly.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12 retained; no new revision; no fabrication/energizing; mains spacing/cooling/signoff open.

## Interfaces and wiring

### Inputs

- X socket low-voltage command or standard single-output signal interface.
- AC line/load terminals at voltage/frequency TBD.

### Outputs

- Switched AC load path.

### Connection contract

The following is the repository-canonical 10-pin mapping used in the selected study. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. The previously recorded V2 Prime physical rail-placement discrepancy remains unresolved; the existing CAD does not qualify the real connector or cable. Do not fabricate or connect it until the real target hardware is inspected.

|  Pin | Function                 |
| ---: | ------------------------ |
|    1 | +3.3 V logic             |
|    2 | +5 V control supply      |
|    3 | AC_ENABLE with pull-down |
|    4 | Unused                   |
|    5 | Unused                   |
|    6 | Unused                   |
|    7 | Unused                   |
|    8 | Unused                   |
|    9 | Unused                   |
|   10 | SELV GND only            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- 20 A requires stated ambient, heat sink and derating.
- The selected v12 uses a zero-cross MOC3083 optotriac and BTA41-800BRG triac for resistive-load burst firing. Random-fire/phase-angle operation is outside this selected design.
- Off-state leakage, minimum load and surge current must be specified.
- Mains creepage/clearance and fuse standard are design blockers.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Replaceable branch fuse, MOV/snubber selected for load and mains category, reinforced isolation, thermal cutoff/sensor and touch-safe terminal spacing.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/ac-ssr-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### ac-ssr-board

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/attempt/versions/v15/ac-ssr-board.kicad_pcb), SHA-256 `3771c5bb4eea64f3a795cdb001975397160cc353ddcc02ff38675004c6ef688e`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/attempt/versions/v15/populations/ac-ssr-board/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/ac-ssr-board/attempt/versions/v15/ac-ssr-board-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v16 — 2026-10-13

Protected source v15; current PCB SHA-256 `6f279ab247119fa06aa1d7984a69929e6176267c45ee3be765f312090d5609f0`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 6 PCB warnings. Electrical geometry, project rules and 29 historical files unchanged. Verified 18 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Five inherited ignored PCB categories remain; 1.9mm copper neck, cooling, fuse coordination, protective earth and heatsink qualification failures remain open; not for mains use or fabrication Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
