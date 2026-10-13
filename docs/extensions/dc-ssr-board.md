---
layout: default
title: "DC SSR board"
permalink: /extensions/dc-ssr-board
---

# DC SSR board

Switch a specified DC load up to a qualified 20 A point in a Fotek-like mechanical format using a MOSFET-based solid-state topology.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native0 retained,no ignored categories;3fail84unsigned,independent/procurement/host/load/surge/physical open.

## Interfaces and wiring

### Inputs

- X socket or standard single-output control.
- External DC source/load; voltage TBD.

### Outputs

- Switched DC path. The candidate command LED indicates the enable input, not load conduction or a fault diagnosis; no fault return is implemented in this candidate.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; the retained copper is a study of the canonical mapping. Do not fabricate, connect cables or energize it until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                    |
| ---: | --------------------------- |
|    1 | +3.3 V logic                |
|    2 | Not connected in candidate |
|    3 | DC_ENABLE with pull-down    |
|    4 | Not connected in candidate |
|    5 | Unused                      |
|    6 | Unused                      |
|    7 | Unused                      |
|    8 | Unused                      |
|    9 | Unused                      |
|   10 | Logic GND                   |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- 20 A is not meaningful without voltage, duty, ambient and heat sink.
- No zero crossing exists; AC SSR topology is forbidden.
- Conduction loss, SOA and avalanche/flyback path must be calculated.
- Polarity/reverse-battery behavior is unresolved.
- Retain TPSI3050DWZR in three-wire standard-enable mode and two CSD18536KTT MOSFETs as the studied component choices. The one-shot TPSI3050S is not equivalent. Functional isolation is the design intent; this is not a safety-isolation or mains rating.
- The retained study's 0–30 V working envelope and 32 V ceiling are provisional design assumptions, not a qualified product rating. Do not infer 20 A, free-air current or PWM capability from a component headline rating.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Retain the candidate fuse, TVS and gate pull-down architecture pending exact-part and load qualification. External freewheel protection is required for inductive loads. A TVS clamp value applies to its stated surge waveform/current; it is not a universal ceiling below the MOSFET limit. Current/thermal diagnostics remain future options, not implemented fault protection.

## Selected component architecture

[Exhaustive current review](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/component-review.md#exhaustive-current-v14-reconciliation--2026-10-11): v14 retains isolated driver/back-to-back FETs and existing2.2kR8 improvement,no successor.20 identities/136own/1728 historical hashes match;generic procurement and host/load/floating-power/surge/physical gates remain unresolved.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/dc-ssr-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v15, v16, v17. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v15, v16, v17**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### dc-ssr-board

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/attempt/versions/v17/dc-ssr-board.kicad_pcb), SHA-256 `bdf735e50f76f5304eedb655518e8e33da11141dffb4bc6c1f747df1f623436a`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/attempt/versions/v17/populations/dc-ssr-board/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/dc-ssr-board/attempt/versions/v17/dc-ssr-board-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `bc54325eec6ee2d9c3d10e323a3ed699e17a98aa267dd60af03eb3acbeb7e197`. Fresh checks: zero enabled errors/opens/parity/ERC findings; 2 PCB warnings. Electrical geometry, project rules and 45 historical files unchanged. Verified 20 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
