---
layout: default
title: "Universal panel adapter"
permalink: /extensions/universal-panel-adapter
---

# Universal panel adapter

Adapt a bounded list of legacy control panels to current V2 through explicitly selected Gadgeteer interfaces.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Retained native geometry/ERC/parity pass with 14 opens; panel firmware, host, enclosure, exact stock and physical qualification remain open.

## Interfaces and wiring

### Inputs

- Gadgeteer socket types TBD by selected panel protocol.
- User controls/touch from selected panel.

### Outputs

- Display/control signals and power to selected panel connector.

### Connection contract

The retained v08 design uses the repository-canonical 10-pin mapping: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. The physical host marking, mating face, cable continuity, and full pin map remain unverified; inspect the actual target hardware before connection because documentation sources conflict.

|  Pin | Function                              |
| ---: | ------------------------------------- |
|    1 | +3.3 V canonical; function TBD        |
|    2 | +5 V canonical; panel power candidate |
|    3 | TBD display/control                   |
|    4 | TBD display/control                   |
|    5 | TBD display/control                   |
|    6 | TBD display/control                   |
|    7 | TBD display/control                   |
|    8 | TBD display/control                   |
|    9 | TBD display/control                   |
|   10 | GND                                   |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Legacy panels may use SPI, parallel RGB, UART or I2C and cannot share one passive map.
- Backlight current can exceed a header budget.
- Voltage and direction must be checked per panel.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

ESD at panel/user connectors, current-limited panel power, no-backfeed source selection and defined reset states for backlight/enable.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/component-review.md). Retain v10 ATmega328P/74AHCT125/74LVC125 legacy-panel interface; SSD1306 changes the panel/firmware contract. Conditional V1 0603 bypass and bias reuse; no IC-stock successor. Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/universal-panel-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical first-program candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The historical v13 candidate is described below; the second-round v18 candidate has its own source-bound results further down.

### universal-panel-adapter

- [Historical v13 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/attempt/versions/v13/universal-panel-adapter.kicad_pcb), SHA-256 `b6e283c992b7afe39c02f8581699c87da8595dd01e0b6f1d3caf2caa3c47a967`.
- Last native check: **14 errors**, including **14 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal board-specific render record](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/attempt/versions/v13/protection5v-exports/manifest.json): 3 images; source current; image hashes match; inspect the linked model and visual qualification findings.
- [bare board-specific render record](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/attempt/versions/v13/protection5v-exports/manifest.json): 3 images; source current; image hashes match; inspect the linked model and visual qualification findings.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/attempt/versions/v13/universal-panel-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation candidate: v18

The protected v17 circuit is retained in [v18 native CAD](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/attempt/versions/v18/universal-panel-adapter.kicad_pcb). This revision corrects titles and version labels, strengthens headings and clears silkscreen from jumper copper and artwork. It adds no components and claims no board-area or purchasing saving.

Independent final-source checks report **zero enabled design-rule errors, open connections, schematic-parity findings and electrical-rule findings**. Layout warnings fell20→9: seven font-thickness and two library-mismatch warnings remain. Electrical geometry, complete pads/component maps, schematics and electrical rule settings are unchanged; all95 files of v17 were preserved. No ignored categories or explicit exclusions hide failures in these checks.

All six normal-population populated/bare top, bottom and isometric views were hash-verified and inspected. This role currently declares no alternative small-connector population; applicable connector conversion remains a design-review requirement. A schematic SVG and validated PDF, BOM/positions, Gerbers and drill files are exported for engineering review. Gerber metadata still carries inherited revision v10 and must be reconciled before any manufacturing release.

PCB SHA-256: `815eed1b604d9e11b2620d4afae5076bb711718c38422bd8922c33f98c701da6`. See the [second-round work and remaining requirements](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/fancification-round2.md). Panel firmware, actual host pin maps, cable budgets, enclosure fit, power/fault behavior, assembly and thermal qualification remain open. **This candidate is not fabrication-approved.**

## Compact external-power candidate V19

The V19 engineering candidate restores the original 100 × 64.6 mm nominal board outline and integrates 39 external-input protection parts into the original envelope (38 on the underside and one diode on the front). All 121 footprints and the complete functional schematic are retained. The keyed host supply already feeds logic directly; it does not need another input-protection stage. The separate loose external input retains its TPS26600 current limit, UV/OV cutoff, slew control, polarity handling and disableable fault indicators. Full-track native checks and schematic parity report zero errors or open connections, and ERC is clear. All six populated/bare views are freshly exported and visually reviewed with no missing models. **The layout is unaccepted pending drill-clearance repair and remote verification:** five of its twenty warnings are new hole-to-hole violations (zero in V18), including 0.20 mm GND-via separation against a 0.2495 mm minimum and 0.00 mm via-to-J8 plated-hole separation. Zero enabled errors and clear ERC do not waive these physical regressions. The current exports and renders depict this unaccepted candidate. Physical, thermal and external-input behavior remain unqualified. This candidate is not released for fabrication or assembly.
