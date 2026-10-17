---
layout: default
title: "Spectral analysis board"
permalink: /extensions/spectral-analysis-board
---

# Spectral analysis board

{% include extension-board-visuals.html slug="spectral-analysis-board" %}

Acquire the 18 visible/near-infrared channels of one generation-2 AS72651/52/53 cluster for controlled reflectance experiments. The PCBA reports sensor data and status over host I²C; normalization, material classification and the dataset are host/fixture work. The named prototype target is in [`attempt/scope.md`](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/scope.md).

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v27 strictnative/ordinaryassembly0;100checklist unsigned and wavelength/opticalfixture/calibration/I2C/host/stock/physical open.

## Interfaces and wiring

### Inputs

- Optical sample through three unobstructed apertures at 8 mm centre pitch
- P12 Prime2590 J38 Gadgeteer I host connection through a numbered 1:1 prototype harness; actual mating/continuity is a later physical test

### Outputs

- 18 calibrated channels from 410–940 nm when AS7265x is selected
- Sensor status and saturation data

### Connection contract

The exact prototype target is P12 Prime2590 J38 from a fresh exported host netlist in [`attempt/host-interface-evidence.md`](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/host-interface-evidence.md). The fitted board and harness must still be continuity-checked before power. The table is the actual design assignment, with no guessed alternate UART or LED wiring.

| Pin | I socket / P12 J38 | Board assignment |
| ---: | --- | --- |
| 1 | switched 3.3 V | V3V3 |
| 2 | switched 5 V | no connect |
| 3–7 | GPIO/reserved by socket type | no connect |
| 8 | I2C2 SDA | host SDA through ESD protection to U5 A side |
| 9 | I2C2 SCL | host SCL through ESD protection to U5 A side |
| 10 | GND | common ground |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- The generation-2 AS7265x I2C supply range is 2.7–3.6 V. Use J1 pin 1 switched 3.3 V, pin 10 ground, pins 8/9 SDA/SCL; leave pin 2 (5 V) and pins 3–7 unconnected
- Allocate 50 mA for the whole board, subject to a measured shared-rail budget before physical power
- Isolate the host's unswitched 1 kΩ pull-ups from the switched sensor rail with a powered-off-isolating I2C buffer and local pull-ups; verify levels and power sequencing physically
- Follow vendor decoupling and flash requirements. The external illuminant is separately powered, so LED driver pins have no load

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Two separate three-pin TI ESD devices, one per off-board I2C line, close to J1
- TCA9517A powered-off high-impedance isolation between unswitched host pull-ups and the switched board rail; check the narrow sensor-to-buffer B-side low-level margin physically
- Flash service isolation links to avoid external-programmer/SPI-master contention; board-side pad map and first-load sequence in [`attempt/flash-programming.md`](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/flash-programming.md)
- Optical baffling, independent lamp power and measured temperature/stray-light drift

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/component-review.md). Retain18-channel AS72651/52/53 and TCA9517A powered-off isolation;AS7343/AS7341 changes410–940nmresponse/fixturecontract. Conditional V1 0603 bypass/pull families only,no successor. Current selected v27; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/spectral-analysis-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v28, v29, v30. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v28, v29, v30**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### spectral-analysis

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/versions/v30/spectral-analysis.kicad_pcb), SHA-256 `7361b2bde4d11be5b3a52f4ed4e430744f4489e0124e808ffdcea4fea613591e`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/versions/v30/populations/spectral-analysis/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/versions/v30/populations/spectral-analysis/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spectral-analysis-board/attempt/versions/v30/spectral-analysis-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v31 — 2026-10-13

Protected source v30; current PCB SHA-256 `146c0f332dc9fd34bba6561d71c96533401bce51db60e9ee663315521c9d2b48`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 2 PCB warnings. Electrical geometry, project rules and 57 historical files unchanged. Verified 70 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. Exact authored local-libraries restored; initial library warning regression rejected before export Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
