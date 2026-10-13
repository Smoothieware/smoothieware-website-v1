---
layout: default
title: "Smoke detector"
permalink: /extensions/smoke-detector
---

# Smoke detector

Original intent: a non-certified machine atmosphere monitor for CO/CO2-related warning and shutdown experimentation. The saved candidate implements CO2, temperature and relative humidity only; it does not meet the original CO/smoke/fire-response intent.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v11 retained strictnative/ordinaryassembly0;inherited smoke/CO function unmet,host/sourceorder/Qwiic/RF-free atmosphere/calibration/physical open.

## Interfaces and wiring

### Inputs

- Ambient sample at a specified location

### Outputs

- Analogue or digital concentration proxy plus fault/alarm state

### Connection contract

Saved J1 mapping follows the repository contract below. Physical host and cable continuity remain unverified. J2 exposes the corresponding CHAIN nets through the declared solder links.

|  Pin | Canonical role        | Assigned function           |
| ---: | --------------------- | --------------------------- |
|    1 | +3.3V                 | +3.3 V rail                 |
|    2 | +5V                   | +5 V rail                   |
|    3 | GPIO! / type-specific | ALARM_IN, host-driven LED   |
|    4 | type-specific         | GAD_P4, chain link          |
|    5 | type-specific         | GAD_P5, chain link          |
|    6 | type-specific         | GAD_P6, chain link          |
|    7 | type-specific         | GAD_P7, chain link          |
|    8 | type-specific         | SDA_H                       |
|    9 | type-specific         | SCL_H                       |
|   10 | GND                   | Ground                      |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- The original MQ-family concept would require a separate heater budget; no external MQ heater or analogue measurement output is implemented in the SCD41 candidate.
- The candidate derives sensor-local 3.3 V from Gadgeteer +5 V; host current allocation, regulator thermal margin, warm-up and calibration remain qualification gates.
- Any future host analogue output must be limited to 0–3.3 V.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- TPD4E1U06 ESD clamp; complete assembled ESD validation remains open
- Selectable 10 kΩ I2C pull-ups to 3V3S; evaluate powered-host/unpowered-sensor injection
- Regulator current and thermal behavior; no external power connector is populated
- Contamination-resistant but ventilated enclosure

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/component-review.md). Retain SCD41 CO2-only/TLV75533,explicitly not smoke/CO alarm. Existing exact V2 DCK adopted v05;conditional V1 bypass/V2 reservoir families only,no successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/smoke-detector`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### smoke-detector

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/attempt/versions/v14/smoke-detector.kicad_pcb), SHA-256 `10975dc9d966688e700e7e02b5265b6a8c82bce95c603b1e2e8431fa4c790c5f`.
- Last native check: **71 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/attempt/versions/v14/populations/smoke-detector/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/attempt/versions/v14/populations/smoke-detector/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/smoke-detector/attempt/versions/v14/smoke-detector-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `be670139f56d8c087adffcb872ab9326952a3adf8f33403258c13eaef6062808`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 31 PCB warnings. Electrical geometry, project rules and 50 historical files unchanged. Verified 32 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. CO2 monitor only; not a smoke, CO or fire alarm; inherited label/serial-field crowding and dangling conductors remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
