---
layout: default
title: "Raw pins screw terminal breakout"
permalink: /extensions/raw-pins-screw-terminal-breakout
---

# Raw pins screw terminal breakout

Passively expose all ten Y-socket contacts on individually accessible 3.5 mm screw terminals.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Current inspection prototype:46×32 mm passive Y terminal/chain adapter, same-host populated Qwiic, and seven conditional LRC LESD8D3.3CAT5G SOD-882 shunts. This supersedes the historical unprotected draft below; it does not add level shifting, buffering or a controller. [Selected package and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/README.md), [comparison](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/revision-comparison.md) and [parent review](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/parent-review-v17.json) are authoritative for the retained CAD. Both Smoothieboard BOMs were reviewed; the V2 TVS family is conditional, its generic0402 label is not the adopted SOD-882 land pattern, and no stock quantity or exact connector reuse is established.

Board-specific qualification limits: v17 ERC/geometry/parity0,fiveopens,no ignored categories;seven conservative mask contacts,host current/cutlinks/ESD/mating/assembly/physical unsigned.

## Interfaces and wiring

### Inputs

- One canonical Y Gadgeteer port.

### Outputs

- Ten 3.5 mm screw-terminal positions and one parallel Y chain port.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function | Design note                                                        |
| ---: | -------- | ------------------------------------------------------------------ |
|    1 | +3.3 V   | Canonical fixed rail.                                              |
|    2 | +5 V     | Canonical fixed rail.                                              |
|    3 | GPIO!    | Board mapping; validate against current V2 hardware before layout. |
|    4 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    5 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    6 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    7 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    8 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    9 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND      | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Current is limited by the weakest Gadgeteer connector, cable, PCB trace, and terminal; terminal pitch is not a power-rating upgrade.
- Select terminals accepting the documented wire range only after supplier validation.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Use recessed terminals, clear polarity marking, keyed Gadgeteer connectors, and copper spacing that prevents solder bridges between rails.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/component-review.md). Retain passive terminal access and populated same-bus Qwiic; seven conditional V2 LRC SOD882 shunts already added v12. No spare active function or exact connector substitution justified;retain v17,no successor. Current selected v17; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/raw-pins-screw-terminal-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v18, v19, v20. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v18, v19, v20**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### raw-pins-screw-terminal-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v20/raw-pins-screw-terminal-breakout.kicad_pcb), SHA-256 `f7c058285b7cada26ff504c03d159c9804f7340c9b52ef5e23ee30a0d5a81d6f`.
- Last native check: **76 errors**, including **4 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J4 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v20/populations/raw-pins-screw-terminal-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v20/populations/raw-pins-screw-terminal-breakout/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-screw-terminal-breakout/attempt/versions/v20/raw-pins-screw-terminal-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Initial v24 readback — withdrawn pending dependency repair — 2026-10-13

Protected source v23; current PCB SHA-256 `6495237a6bcae001f61aa7bd6edd3a686ec629eea3c57aaa059381a7d1db6b46`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 23 PCB warnings. Electrical geometry, project rules and 94 historical files unchanged. Verified 22 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. Inherited 23 PCB library warnings and 68 schematic library/link warnings remain; exact libraries preserved Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

The initial v24 registration was withdrawn after comparing diagnostics with the zero-warning v23 baseline: omitted native-source libraries caused23 PCB and68 schematic warnings. Exact authored dependencies restored; final fresh checks and population exports pending. Initial record retained as failed review history, not accepted status.

## Second-round annotation readback v24 — 2026-10-13

Protected source v23; current PCB SHA-256 `6495237a6bcae001f61aa7bd6edd3a686ec629eea3c57aaa059381a7d1db6b46`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 94 historical files unchanged. Verified 22 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. Exact authored native-source dependencies restored; initial warning regression withdrawn and retained as review history Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
