---
layout: default
title: "Button boards"
permalink: /extensions/button-boards
---

# Button boards

Mechanical-button boards in one-button standard-input and seven-button Gadgeteer variants.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native clean retained;130 unsigned, debounce/host/ESD/solder-process/family gates open.

## Interfaces and wiring

### Inputs

- One or seven mechanical momentary switches

### Outputs

- One standard Signal/Ground/5V input-style connection or seven Y GPIO states

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function |
| ---: | --------------------- | ----------------- |
|    1 | +3.3V                 | +3.3 V rail       |
|    2 | +5V                   | +5 V rail         |
|    3 | GPIO! / type-specific | Button 0          |
|    4 | type-specific         | Button 1          |
|    5 | type-specific         | Button 2          |
|    6 | type-specific         | Button 3          |
|    7 | type-specific         | Button 4          |
|    8 | type-specific         | Button 5          |
|    9 | type-specific         | Button 6          |
|   10 | GND                   | Ground            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Host-facing signals must be 5 V tolerant where using standard input
- Y variant must remain 3.3 V compatible
- Debounce must not hide the shortest accepted press

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Series resistor, RC filter, and clamp at each cable-facing signal
- ESD protection for panel cables
- No pull network may fight host pull-ups

## Selected component architecture

See [complete component review](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/component-review.md). Actual seven-button v10 retained; existing stock-compatible C8 bypass and local return repairs preserved, no successor. Native-clean retained evidence does not close debounce/host/ESD/solder-process or missing family-variant gates. Historical architecture and assumptions above remain source history.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Assess a third shared jack option on eligible endstop-style ports, with separate header, keyed-connector and jack renders; preserve safe insertion behavior and document any fit exception.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/button-boards`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### buttons

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/attempt/versions/v13/buttons.kicad_pcb), SHA-256 `41e3a98183e9d505c2e86477f93d499e904f60b188b055cc117f6f96228bbe88`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/attempt/versions/v13/populations/buttons/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/attempt/versions/v13/buttons-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v14 — 2026-10-13

Protected source v13; current PCB SHA-256 `d731bc39a9751d4051913b27ed9cd88c02f02ed662d3c1c47b52098c8904ad9d`. Fresh native checks have zero enabled errors/opens/parity/ERC findings and 3 PCB warnings. Exact electrical geometry and project rules unchanged; 23 historical files, 31 model entries,17 exports and 6 current population views verified and inspected. Full documentation URL readable. No area or priced saving claimed; physical qualification remains open.
