---
layout: default
title: "SPI thermocouple breakout"
permalink: /extensions/spi-thermocouple-breakout
---

# SPI thermocouple breakout

Measure one K-type thermocouple with a cold-junction-compensated SPI converter.

## Additive MAX31856 revision v15 — 2026-10-13

The [v15 engineering record](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/attempt/versions/v15/ENGINEERING.md) describes a new **unqualified multi-type thermocouple candidate**. The historical MAX31855K read-only K-type revisions remain available. This newer section takes precedence for v15 over the baseline snapshot below.

MAX31856MUD+ supports K/J/N/R/S/T/E/B types, programmable 50/60 Hz filtering and register-based configuration/fault reporting. Its board remains 40 × 30 mm, with the same host connectors and mounting positions, and three additional filter/bypass capacitors. Native ERC, enabled full-track DRC, opens, schematic parity and exact component-contract findings are zero. Six fresh inspected renders, schematic PDF, BOM, placement and candidate manufacturing exports accompany the revision.

For v15, host pin 7 MOSI connects to the converter rather than being pass-through only. A MAX31856 register driver must configure type, filtering and conversions and poll faults; the old MAX31855 read-only transaction is incompatible. No firmware change is supplied. Use 3.0–3.6 V on the converter rail; allow up to 2 mA plus 0.33 mA while CS is selected, and verify total host/chain allocation. The +5 V rail is only passed through. Keep downstream CS jumper JP6 open unless an independently addressed chain arrangement has been verified.

This is not a fabrication release or a measured temperature-accuracy claim. Cold-junction gradients, thermocouple wire/connector choice, input faults, cable/host power-order behavior, ESD/EMC, exact assembly land/stencil approval and physical fit remain unqualified. Applicable schematic/layout checklist and family requirements remain unsigned where explicitly recorded. There is no Gadgeteer I²C mode, so this SPI-only revision does not require Qwiic.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Actualv11 retained ERC/strictgeometry/opens/parity/ordinaryassembly0;130checklistunsigned,coldjunction/fault/host/calibration/physical open.

## Interfaces and wiring

### Inputs

- K-type thermocouple on 3.5 mm terminal.
- S Gadgeteer SPI and rails.

### Outputs

- Read-only SPI MISO data and one chained S port.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function          | Design note                                                        |
| ---: | ----------------- | ------------------------------------------------------------------ |
|    1 | +3.3 V            | Canonical fixed rail.                                              |
|    2 | +5 V              | Canonical fixed rail.                                              |
|    3 | GPIO!/DRDY unused | Board mapping; validate against current V2 hardware before layout. |
|    4 | GPIO unused       | Board mapping; validate against current V2 hardware before layout. |
|    5 | GPIO unused       | Board mapping; validate against current V2 hardware before layout. |
|    6 | CS                | Board mapping; validate against current V2 hardware before layout. |
|    7 | MOSI pass-through | Board mapping; validate against current V2 hardware before layout. |
|    8 | MISO              | Board mapping; validate against current V2 hardware before layout. |
|    9 | SCK               | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND               | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- MAX31855 operates from 3.0–3.6 V; use 3.3 V only.
- Fit 0.1 µF VCC bypass and 10 nF differential T+/T− capacitor per datasheet.
- MOSI is carried by S but unused by MAX31855.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Low-capacitance ESD/protection compatible with thermocouple error budget; do not clamp thermocouple inputs with an unvalidated junction.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/component-review.md). Retain MAX31855K; defer MAX31856; decline AD8495; conditional V1 C0603 bypass reuse; no new version Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/spi-thermocouple-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### spi-thermocouple

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/attempt/versions/v14/spi-thermocouple.kicad_pcb), SHA-256 `ce0ab8cbe898ccb55de15b1dd293f6fe2105410fcde1625bf6b358bf40614997`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/attempt/versions/v14/populations/spi-thermocouple/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-thermocouple-breakout/attempt/versions/v14/spi-thermocouple-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v16 — 2026-10-13

Protected source v15; current PCB SHA-256 `6f528cd7fcdabc5548466ec9de23ee2298a2cd4323a806ccf6344bb73753e4ad`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 40 historical files unchanged. Verified 10 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Board-local shared Samtec dependency hash rechecked unchanged; physical thermocouple/interface qualification open Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
