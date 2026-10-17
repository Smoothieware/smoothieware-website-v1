---
layout: default
title: "Papilio adapter"
permalink: /extensions/papilio-adapter
---

# Papilio adapter

{% include extension-board-visuals.html slug="papilio-adapter" %}

Adapt a named Papilio FPGA board and wing connector revision to one or more compatible Gadgeteer interfaces.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native checks zero and rear silkscreen collision corrected; independent final review, exact connector/cable fit, physical/ESD/thermal qualification remain unsigned.

## Interfaces and wiring

### Inputs

- Papilio wing connector: model/revision TBD.
- Gadgeteer socket types TBD from intended function.

### Outputs

- Passive or translated interconnect only; no FPGA behavior belongs in this PCB.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                          |
| ---: | --------------------------------- |
|    1 | +3.3 V canonical; destination TBD |
|    2 | +5 V canonical; destination TBD   |
|    3 | TBD signal 1                      |
|    4 | TBD signal 2                      |
|    5 | TBD signal 3                      |
|    6 | TBD signal 4                      |
|    7 | TBD signal 5                      |
|    8 | TBD signal 6                      |
|    9 | TBD signal 7                      |
|   10 | GND; destination TBD              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Papilio model, I/O-bank voltage and wing pinout are absent.
- Do not connect rails until both power architectures and backfeed behavior are known.
- FPGA pin tolerance and configuration-time states must be verified.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Default all power-link jumpers open; add Ioff-capable buffers if domains can power independently and ESD where connectors are externally accessible.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/component-review.md). Retain passive interface and seven 470Ω 1% series resistors; no exact stock resistor match; no IC addition or active translator justified; v13 retained. Current selected v13; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/papilio-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v14, v15, v16. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v14, v15, v16**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### papilio-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/attempt/versions/v16/papilio-adapter.kicad_pcb), SHA-256 `9b375e4f67a3edce2bcc5896857b5b9ea7ed249485a6b473a2e496d6073d379a`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/attempt/versions/v16/populations/papilio-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/attempt/versions/v16/papilio-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v17 — 2026-10-13

Protected source v16; current PCB SHA-256 `9ede7353b510781fbfe36d3ba05d55ca7aaface6d9cdb2a0fa97cf4450a48c91`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 3 PCB warnings. Electrical geometry, project rules and 36 historical files unchanged. Verified 10 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Five inherited ignored PCB categories remain explicit; assembly and provisional rail limits unqualified Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
