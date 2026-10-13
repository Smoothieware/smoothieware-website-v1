---
layout: default
title: "Laser PSU adapter board"
permalink: /extensions/laser-psu-adapter-board
---

# Laser PSU adapter board

Provide fail-safe 5 V PWM/TTL control and individually diagnosable normally-closed protection inputs for a specified CO2 laser power supply.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v17/78purchased/38blank MPNs;35selected/529later hashes match;threeopens/five ignorecats/clamp/thermal/host/physical open.

## Interfaces and wiring

### Inputs

- Y socket GPIO/PWM allocation.
- One or more NC field interlock loops, up to 48 V tolerance target.
- 5 V and ground.

### Outputs

- 5 V PWM and 5 V TTL to laser PSU.
- Hardware permit/interlock and per-loop diagnostics.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                       |
| ---: | ------------------------------ |
|    1 | +3.3 V logic                   |
|    2 | +5 V output logic              |
|    3 | Global/interlock status        |
|    4 | TTL command                    |
|    5 | Protect diagnostic 1           |
|    6 | Protect diagnostic 2 or enable |
|    7 | PWM command                    |
|    8 | Protect diagnostic 3           |
|    9 | Protect diagnostic 4           |
|   10 | GND                            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Current V2 probe prior art is documented only to 45 V, not the requested 48 V.
- Outputs must meet the chosen PSU thresholds/current.
- Any open/unpowered loop disables laser regardless of firmware.
- 100 ms filtering must not violate stop-time requirements.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Per-input high-voltage divider/current limit/clamp, ESD/surge components, Schmitt behavior, hardware fail-safe pull states and output current limiting.

## Selected component architecture

[Retained v17 review](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/component-review.md) covers99records/78 purchased refs;existing high-power fault resistors,ten V1 stock classes and V2 DCK retained,no successor. Threeopens/38blank MPNs/five ignored categories and clamp/fault/thermal/host/physical gates remain.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/laser-psu-adapter-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v18, v19, v20. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v18, v19, v20**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### laser-psu-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/attempt/versions/v20/laser-psu-adapter.kicad_pcb), SHA-256 `3f5e68adabc2a67917d24082376c24f8ab7f9e1ecdcecce8c8321463a91d0cd2`.
- Last native check: **94 errors**, including **5 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/attempt/versions/v20/populations/laser-psu-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-psu-adapter-board/attempt/versions/v20/laser-psu-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v25 — 2026-10-13

Protected source v24; current PCB SHA-256 `395c7962f581ff027e882851b8622f48f01aa6a7ee888ba1434fff35b3ace518`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 29 PCB warnings. Electrical geometry, project rules and 56 historical files unchanged. Verified 78 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Laser interface only, not a certified safety device; interlock and laser/PSU restrictions preserved Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
