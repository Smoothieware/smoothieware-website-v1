---
layout: default
title: "SPI hub"
permalink: /extensions/spi-hub
---

# SPI hub

Fan one S socket into four independently selected downstream S sockets while preventing unselected devices from loading or driving the shared bus.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Current v10 retained source checks/ordinaryassembly clean;original88×52outline target,host/cable timing,poweredoff isolation,exact stock and physical qualification remain open.

## Interfaces and wiring

### Inputs

- One S Gadgeteer port.

### Outputs

- Four S Gadgeteer ports, each with its own CS.
- Optional four six-pin SPI headers.

### Connection contract

The table is the saved J1 input mapping. Reconcile physical host and cable continuity with the authoritative target board before use.

|  Pin | Function | Design note                                                        |
| ---: | -------- | ------------------------------------------------------------------ |
|    1 | +3.3 V   | Canonical fixed rail.                                              |
|    2 | +5 V     | Canonical fixed rail.                                              |
|    3 | CS1      | Board mapping; validate against current V2 hardware before layout. |
|    4 | CS2      | Board mapping; validate against current V2 hardware before layout. |
|    5 | CS3      | Board mapping; validate against current V2 hardware before layout. |
|    6 | CS4      | Board mapping; validate against current V2 hardware before layout. |
|    7 | MOSI     | Board mapping; validate against current V2 hardware before layout. |
|    8 | MISO     | Board mapping; validate against current V2 hardware before layout. |
|    9 | SCK      | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND      | Canonical fixed rail.                                              |

J2–J5 outputs each use pin1 +3.3 V, pin2 +5 V, pins3–5 NC, pin6 that port's CS, pin7 MOSI, pin8 MISO, pin9 SCK and pin10 GND. CS and rails pass through directly; SCK/MOSI/MISO pass through the selected switch cell. The optional six-pin Adafruit headers are not populated in this candidate.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- All logic is 3.3 V unless a qualified downstream contract says otherwise.
- Buffers/switches must meet verified SPI rate, propagation delay, leakage, and power-off behavior.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

U5–U9 TPD4E1U06DCKR provide the selected ESD network at the five sockets. Rails are shared pass-through without per-port current limiting. Reset pulls, switch Ioff, clamp injection and independent peripheral supply states require assembled verification. Simultaneous CS assertions are not rejected in hardware.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/component-review.md). Retain four SN74CB3Q3125; V2 TPD4E1U06DCKR applied in retained v07 and V1 33.2 ohm 1% R0603 damping in v08; no new version Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/spi-hub`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### spi-hub

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/attempt/versions/v13/spi-hub.kicad_pcb), SHA-256 `edfd93eb41f9a20164159080042d73b3e183e8c4301d3301ab17415fca54c349`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/attempt/versions/v13/populations/spi-hub/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/attempt/versions/v13/spi-hub-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v14 — 2026-10-13

Protected source v13; current PCB SHA-256 `5749c4801853b7abeb7621203ef34923190d2eb57b6e4dbacc4a5c5ac7738439`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 9 PCB warnings. Electrical geometry, project rules and 31 historical files unchanged. Verified 51 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited dangling track warning remains Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
