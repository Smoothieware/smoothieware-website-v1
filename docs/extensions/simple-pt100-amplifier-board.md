---
layout: default
title: "Simple PT100 amplifier board"
permalink: /extensions/simple-pt100-amplifier-board
---

# Simple PT100 amplifier board

{% include extension-board-visuals.html slug="simple-pt100-amplifier-board" %}

Condition one PT100 RTD into a bounded analogue voltage for a Smoothieboard analogue input.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

IC upgrade and Smoothieboard BOM reuse decisions: [IC and stock review](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/component-review.md).

Board-specific qualification limits: v14 has two open ground connections and unsigned 132-item checklist; physical connector mapping, calibration, measurement accuracy, supplier assembly and fabrication remain unqualified.

## Interfaces and wiring

### Inputs

- PT100 terminal, wire count TBD.
- 3.3/5 V supply and analogue connection from one A socket.

### Outputs

- One filtered analogue voltage to AIN.
- Optional duplicated 2.54 mm analogue test output only if protected.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                                         |
| ---: | ------------------------------------------------ |
|    1 | +3.3 V analogue reference/supply candidate       |
|    2 | +5 V supply candidate only if amplifier needs it |
|    3 | PT100_AIN output                                 |
|    4 | Optional second AIN/unconnected                  |
|    5 | Optional third AIN/unconnected                   |
|    6 | Optional GPIO/fault                              |
|    7 | Unused                                           |
|    8 | Unused                                           |
|    9 | Unused                                           |
|   10 | Analogue GND                                     |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- PT100 is 100 ohms at 0 °C; lead resistance must be included.
- Excitation, gain, offset, reference and ADC limits are unresolved.
- The source's pin-shifting chain is forbidden because it would move fixed rails/ground.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Sensor-terminal ESD, series resistance, input overvoltage clamps that do not corrupt accuracy, output clamp to ADC rails and filtered/quiet supply.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/component-review.md). Retain OPA2333AID/BSS84 analogue contract and precision network; defer digital ADC as architecture change; use exact V2 DCK ESD array and only electrically/package-matched stock passives; no new version. Current selected v14; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/simple-pt100-amplifier-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v15, v16, v17. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v15, v16, v17**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### simple-pt100-amp

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/attempt/versions/v17/simple-pt100-amp.kicad_pcb), SHA-256 `e48c6793986af80caa019fe6c6d762a52bf959537c1f23a3b177ee1885fb8aa5`.
- Last native check: **2 errors**, including **2 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/attempt/versions/v17/populations/simple-pt100-amp/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/simple-pt100-amplifier-board/attempt/versions/v17/simple-pt100-amp-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v22 — 2026-10-13

Protected source v21; current PCB SHA-256 `b58d174a8c8e55c45f3d7f288702fb5d7486723167d714240a4dd327f82af0a5`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 2 PCB warnings. Electrical geometry, project rules and 48 historical files unchanged. Verified 22 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
