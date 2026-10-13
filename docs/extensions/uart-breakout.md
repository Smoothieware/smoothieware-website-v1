---
layout: default
title: "UART breakout"
permalink: /extensions/uart-breakout
---

# UART breakout

Adapt a U socket to the historical six-pin FTDI-cable header for UART diagnostics.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10 native/ordinaryassemblyclean;14legacyexport discrepancies preserved,130checklist unsigned,host/cable/baud/powerorder/physical open.

## Interfaces and wiring

### Inputs

- U socket UART and rails.

### Outputs

- Straight 1×6 2.54 mm FTDI-style header.
- One chained U port.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function          | Design note                                                        |
| ---: | ----------------- | ------------------------------------------------------------------ |
|    1 | +3.3 V            | Canonical fixed rail.                                              |
|    2 | +5 V              | Canonical fixed rail.                                              |
|    3 | GPIO!             | Board mapping; validate against current V2 hardware before layout. |
|    4 | TX                | Board mapping; validate against current V2 hardware before layout. |
|    5 | RX                | Board mapping; validate against current V2 hardware before layout. |
|    6 | GPIO/pass-through | Board mapping; validate against current V2 hardware before layout. |
|    7 | UN                | Board mapping; validate against current V2 hardware before layout. |
|    8 | UN                | Board mapping; validate against current V2 hardware before layout. |
|    9 | UN                | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND               | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- UART logic is presumed 3.3 V pending current schematic verification; it must not be advertised as 5 V tolerant.
- The 5 V header pin power direction and current limit are unresolved.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Series resistors and low-capacitance ESD on exposed UART pins; backfeed prevention on 5 V; keying/pin-1 marking.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/component-review.md). Retain direct UART access,SN74LVC2G14monitor and DBVRprotection;SC16IS752 addsnewtransport/firmware. Conditional V1bypass/idle-pull families only,no successor. Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/uart-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### uart-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/attempt/versions/v13/uart-breakout.kicad_pcb), SHA-256 `ea954bf6447ab1c8dbc90e1d75595cdebe043a3fa78fa5166e0414c81c535396`.
- Last native check: **76 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/attempt/versions/v13/populations/uart-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/attempt/versions/v13/uart-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- second-round-service:start -->
## Second-round annotation candidate: v17

This saved engineering candidate updates revision labels/title styling while retaining the electrical geometry, schematic, project rules, outline and historical source. Independent fresh checks find zero enabled board errors, open connections, schematic parity errors and schematic-rule errors; **4 inherited font warnings** remain. Six current normal-population views, model paths and source-bound manufacturing exports were verified.

The full inherited board URL remains readable. Readability was checked against the actual current renders, rather than inferred from an automatic placement result. Physical connector mating, mounting, current, thermal and fault qualification remain open where applicable. No area or priced savings and no fabrication release are claimed.

- [Candidate source](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/attempt/versions/v17/uart-breakout.kicad_pcb), SHA-256 `8c636819b48578bf0f6671f56aa770681398f88ad96085823395f1d34f5a5ab5`.
- [Changes and pending qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/fancification-round2.md).

Earlier revision readbacks remain historical.
<!-- second-round-service:end -->
