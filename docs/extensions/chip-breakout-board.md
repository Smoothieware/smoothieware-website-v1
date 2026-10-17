---
layout: default
title: "C.H.I.P. breakout board"
permalink: /extensions/chip-breakout-board
---

# C.H.I.P. breakout board

{% include extension-board-visuals.html slug="chip-breakout-board" %}

Archival carrier concept connecting a C.H.I.P. computer module to Smoothie through UART and optional external power.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native clean retained;SW area/bypass distance fail,130unsigned, procurement/host/converter/physical open.

## Interfaces and wiring

### Inputs

- U Gadgeteer UART
- Optional user-wired 7–24 V on the 3.5 mm two-pin screw terminal

### Outputs

- C.H.I.P. header/shield interface carrying verified power, TX, RX, and ground

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function    |
| ---: | --------------------- | -------------------- |
|    1 | +3.3V                 | +3.3 V rail          |
|    2 | +5V                   | +5 V rail            |
|    3 | GPIO! / type-specific | GPIO/enable optional |
|    4 | type-specific         | Host TX → module RX  |
|    5 | type-specific         | Host RX ← module TX  |
|    6 | type-specific         | GPIO/status optional |
|    7 | type-specific         | N/C                  |
|    8 | type-specific         | N/C                  |
|    9 | type-specific         | N/C                  |
|   10 | GND                   | Ground               |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- C.H.I.P. power/current, header pinout, UART voltage, and sequencing must be confirmed from a primary datasheet
- Do not assume Gadgeteer 5 V can supply module peak current
- Wide-range input requires a switching regulator rather than an unspecified LDO if dissipation is excessive

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- External reverse polarity, fuse/current limit, TVS, and undervoltage handling
- Source-selection circuit preventing reverse feed
- ESD/series resistance on UART

## Selected component architecture

[Complete component review](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/component-review.md): actualv10 retains LMR51430/enabled buffers and existing bypass improvements, no successor. Native clean retained; switch-area/bypass-distance targets and candidate procurement/host/converter/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/chip-breakout-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### chip-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/attempt/versions/v13/chip-breakout.kicad_pcb), SHA-256 `5647d524c1f7e57c46c6eb550ec1015b465221b52d18e03033b16bf20994470d`.
- Last native check: **31 errors**, including **20 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/attempt/versions/v13/populations/chip-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/attempt/versions/v13/chip-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `c05d9e89dee760bc0aeefc821da5ee9838fba8e41abedb060f17cac069b130cc`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 67 PCB warnings. Electrical geometry, project rules and 96 historical files unchanged. Verified 73 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited crowded rear annotations and one schematic warning remain; redundant revision note removed to avoid added overlap; CHIP v13.0 ONLY compatibility marking retained Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.


## Compact protection revision v19

The compact carrier returns to **67.8 × 43 mm**, rather than the enlarged 67.8 × 53 mm protection-annex outline. All 93 footprints and the complete external-input electronic-fuse, reverse-polarity, overvoltage and fault-indicator circuits are retained. The functional front-side components, connectors and mounting positions remain fixed; protection components occupy the underside. This external input is user wired and must not be treated as a trusted host supply.

Native checks find zero geometry errors, zero unconnected items and zero schematic-parity findings. Silkscreen overlap warnings decrease from 49 to 15 and silkscreen-over-copper warnings from 13 to 5. Remaining library, small-text and footprint-link warnings are inherited. Rendering and export review accompany the saved source; they do not qualify fault thresholds, current capacity, thermal behavior or module/cable insertion.

The underside retains the board title, documentation link, individual test-point labels and labels beside the actual fault LEDs. Detailed wiring tables that would be covered by components are retained on the fabrication layer and here:

| Connection | Wiring |
| --- | --- |
| U Gadgeteer socket | 1 = 3.3 V; 2 = 5 V; 3 = GPIO; 4 = TX; 5 = RX; 10 = GND |
| C.H.I.P. U13 | 1 and 4 = GND; 2 = CHG-IN 5 V; 5 = 3.3 V |
| U14 | 1 = GND; 3 = TX; 5 = RX |
| SJ1 source selection | Pins 1–2; shipped selection = EXT |
| Fault indicators | DF2 = FAULT; DF5 = OV; DF8 = REV |
| Test points TP1–TP4 | TP1 = GND; TP2 = VIN_PROT; TP3 = BUCK_5V; TP4 = CHIP_5V |
| Test points TP5–TP8 | TP5 = CHIP_3V3; TP6 = HOST_3V3; TP7 = HOST_TX_IN; TP8 = HOST_RX_OUT |
| Test points TP9–TP11 | TP9 = CHIP_RX_OUT; TP10 = CHIP_TX_IN; TP11 = GND |

Each indicator keeps its existing disable jumper. Changing assembly or source selection requires checking the actual schematic and connector orientation. This revision remains an unqualified engineering candidate and has no fabrication release.

Final v19 source SHA-256: `72d83c2ea44912776aab9ae5ad4ea76a93e509f5aac4784576459bf04404bfaa`. All six populated/bare top, bottom and isometric views are inspected; their image hashes, 73 model entries and 20 manufacturing/native-check export files match the saved source receipts.
