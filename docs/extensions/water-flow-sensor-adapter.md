---
layout: default
title: "Water-flow sensor adapter"
permalink: /extensions/water-flow-sensor-adapter
---

# Water-flow sensor adapter

{% include extension-board-visuals.html slug="water-flow-sensor-adapter" %}

Adapter for one specifically qualified three-wire pulse-output water-flow sensor, producing telemetry and/or a fail-safe no-flow event.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Retained native and ordinary checks zero; timing, sensor pinout/sink, host, firmware, exact stock and physical qualification open;130 checklist items unsigned.

## Interfaces and wiring

### Inputs

- Qualified 5 V three-wire flow sensor pulse output
- Host enable/command context if needed to suppress idle alarm

### Outputs

- Protected pulse/count or binary fault through X/standard input

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function               |
| ---: | --------------------- | ------------------------------- |
|    1 | +3.3V                 | +3.3 V rail                     |
|    2 | +5V                   | +5 V rail                       |
|    3 | GPIO! / type-specific | FLOW_PULSE_OUT              |
|    4 | type-specific         | N/C   |
|    5 | type-specific         | FLOW_FAULT_OUT (HIGH = missing pulses) |
|    6 | type-specific         | N/C                             |
|    7 | type-specific         | N/C                             |
|    8 | type-specific         | N/C                             |
|    9 | type-specific         | N/C                             |
|   10 | GND                   | Ground                          |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Sensor supply/current, pulse output topology, pulses/litre, range, and maximum frequency are unresolved
- Host signal must be 5 V tolerant and conditioned
- Cable length/noise environment must be specified

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Sensor supply current limiting
- Input RC, hysteresis, ESD, and overvoltage clamp
- Water connector physically separated from electronics where possible

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/component-review.md). Retain v10 SN74LVC2G14DBVR/SN74LVC1G123DCTR/TPD4E1U06DCKR; pulse timing is not replaced by LTC6993 without interface proof. Conditional V1 R1/bypass candidates; no IC-stock successor. Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/water-flow-sensor-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### water-flow-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/attempt/versions/v13/water-flow-adapter.kicad_pcb), SHA-256 `093b7e3675310d23ddbdbab74a8ac2a0eced68085316596528af671bb1ae44bc`.
- Last native check: **28 errors**, including **28 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J2 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/attempt/versions/v13/populations/water-flow-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/attempt/versions/v13/populations/water-flow-adapter/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/water-flow-sensor-adapter/attempt/versions/v13/water-flow-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate — V18

The additive [v18 native candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/water-flow-sensor-adapter/attempt/versions/v18) adds a readable complete documentation URL and current revision labels while preserving the protected preceding circuit, placements, outline and electrical rules. Parent rechecks found zero enabled electrical errors, open connections or schematic-parity findings and clean schematic checks; 0 text-thickness warnings remain. All 12 declared populated/bare views and current manufacturing exports are source-bound. Earlier revision/component selections on this page are historical context. No current rating, sensor/host compatibility, optical or mechanical fit, purchasing savings or fabrication release is established.

PCB source SHA-256: `2a4f8b1486a7a88ca6f96bcfeec44377ca2bc22889698edf688e17fa0398fb10`.

## Compact trusted-power candidate — V20

The keyed Gadgeteer supply feeds the board directly. This additive candidate removes 31 redundant input-warning/protection and auxiliary-supply parts, reducing 72 footprints to 41. The retained sensor-output TPS259631 limiter provides the nominal 125 mA setting, soft start and a disableable fault LED. Signal conditioning, clamps, host outputs and both sensor connector populations remain.

The limiter sits underneath a compact 26 × 28 mm nominal board, replacing the 40.31 × 24.26 mm edge bounding box. Native KiCad electrical, layout and full schematic-parity checks are clean after routing and unused-track removal. The 0.8 mm website label is on the front; its underlying ordinary via uses solder-mask tenting. All twelve normal/PH populated and bare top, bottom and isometric renders are complete and visually checked; their connector bodies are framed and the compact underside stage is shown. This is an unqualified engineering candidate: physical sensor/harness, insertion, timing, soft-start and current-limit checks remain open; fabrication release is false.
