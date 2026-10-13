---
layout: default
title: "USB/Serial breakout"
permalink: /extensions/usb-serial-breakout
---

# USB/Serial breakout

Integrate a USB-device-to-3.3 V UART bridge between a USB-B connector and a U socket.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Retained native ERC/strict DRC/opens/parity and ordinary drill/mask checks zero; 130 checklist and all270 rule items unsigned. USB impedance/eye, enumeration, 3 Mbaud, backfeed, EMI and physical qualification open.

## Interfaces and wiring

### Inputs

- USB 2.0 device connection.
- U socket UART.

### Outputs

- Bidirectional USB serial link and optional U chain.

### Connection contract

The selected v11 contract uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Actual host marking, mating face, cable continuity, and the full signal map must be checked against the target hardware before connection; this document does not resolve conflicting secondary documentation.

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

- The selected v11 prototype selects FTDI FT231XS and TXU0202DCUR. This resolves the study's bridge/translator selection; supplier status and bench behavior remain unverified.
- USB bus power and Gadgeteer power must not backfeed.
- UART logic voltage must match current V2.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

The selected study includes USB ESD and domain-isolation components. Verify ESD return path, VBUS current limiting, decoupling placement, translator sequencing, UART series behavior, and all one-side-unpowered states on the assembled design.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/component-review.md). Retain v11 FT231XS and already adopted TXU0202DCUR two-direction translator; no demonstrated CP2102N/CH340C benefit. Conditional V1 bypass/bias reuse, preserving actual R4 100 kΩ. No IC-stock successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/usb-serial-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### usb-serial

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/attempt/versions/v14/usb-serial.kicad_pcb), SHA-256 `d890670c83de883aa83f5a900cdcb288f2fa6a110365b91e8856f8ec7913ff2b`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/attempt/versions/v14/populations/usb-serial/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/attempt/versions/v14/usb-serial-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v15 — 2026-10-13

Protected source v14; current PCB SHA-256 `d060d8ec5a6d71a2f95d6aec38067c934b7383c1bbd31d7ec5200b79dff6bec1`. Fresh checks: zero enabled errors/opens/parity/ERC findings; 16 PCB warnings. Electrical geometry, project rules and 27 historical files unchanged. Verified 23 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Exact authored library/models restored; physical model seating remains unqualified Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
