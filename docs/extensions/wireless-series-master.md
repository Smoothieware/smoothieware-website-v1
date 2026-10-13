---
layout: default
title: "Wireless series Smoothieboard-side master"
permalink: /extensions/wireless-series-master
---

# Wireless series Smoothieboard-side master

Host-side radio endpoint for a deliberately configured remote-I/O protocol; it is not a transparent wire replacement.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Retained ERC/DRC/opens/parity and assembly-shape checks zero;88 checklist items unsigned. Firmware OE/link-loss, partial-power, RF, host budget, debug, exact stock and physical qualification open.

## Interfaces and wiring

### Inputs

- Mode-dependent canonical Gadgeteer socket
- Optional local provisioning control and radio packets

### Outputs

- nRF24 radio link
- Mode-dependent reconstructed local signals
- Status LEDs

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function              |
| ---: | --------------------- | ------------------------------ |
|    1 | +3.3V                 | +3.3 V rail                    |
|    2 | +5V                   | +5 V rail                      |
|    3 | GPIO! / type-specific | Mode GPIO0 / provisioning GPIO |
|    4 | type-specific         | Mode TX or GPIO1               |
|    5 | type-specific         | Mode RX or GPIO2               |
|    6 | type-specific         | Mode GPIO3 / CTS / CS          |
|    7 | type-specific         | Mode GPIO4 / RTS / MOSI / PWM  |
|    8 | type-specific         | Mode GPIO5 / SDA / MISO        |
|    9 | type-specific         | Mode GPIO6 / SCL / SCK         |
|   10 | GND                   | Ground                         |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Radio and MCU shall operate from a regulated 3.3 V rail
- Antenna layout shall follow the selected module or IC reference design
- Logic levels at the host socket shall remain 3.3 V compatible
- No safety-critical motion, heater, or laser-enable function is permitted without independent safety validation

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Series resistance and ESD protection on every off-board signal
- Brownout detector and watchdog must force safe state
- Reverse-current isolation between selected supply sources

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/component-review.md). Retain v10 ATSAMD21E18A/nRF24L01+ interoperability and already adopted SN74CB3Q3245 bus isolation. Integrated nRF52832 requires unsupplied protocol/firmware migration. Existing V1-compatible bypass consolidation retained; no IC-stock successor. Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/wireless-series-master`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### wireless-series-master

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/attempt/versions/v13/wireless-series-master.kicad_pcb), SHA-256 `7e78f17eff86bef945feb82d979ce93fcdc8adc4aa58c7669be089c9d32f6438`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/attempt/versions/v13/populations/wireless-series-master/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/attempt/versions/v13/populations/wireless-series-master/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/attempt/versions/v13/wireless-series-master-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v14 — 2026-10-13

Protected source v13; current PCB SHA-256 `3ebeab631adafcb91e2c705f9972ce772818bd22bb09b81b3740ca62f0af920c`. Fresh native checks: zero enabled errors, opens, schematic mismatches and ERC findings; 3 PCB warnings remain. Electrical geometry/project rules unchanged; 68 historical files, 66 model entries,17 exports and12 current population images verified. All12 populated/bare views inspected. Full documentation URL is readable in the current renders. Physical qualification remains open; no price or area savings claimed.
