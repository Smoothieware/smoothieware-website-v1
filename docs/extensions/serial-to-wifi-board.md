---
layout: default
title: "Serial to WiFi board"
permalink: /extensions/serial-to-wifi-board
---

# Serial to WiFi board

Bridge a Smoothie UART to a local Wi-Fi network using a supported, certified Espressif module and an explicit firmware protocol.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The authored ESP32-C3-MINI-1-N4X UART bridge and TLV62569 supply remain the baseline. Current studies preserve the repository-canonical U-socket mapping and explicit interrupted local UART/reset/status lines; physical target pinout and power allocation remain unsigned. Retained native v02–v12 pass strict ERC/DRC/opens/parity0; selected v12 has a fresh parent check and120 matching package hashes. V02 enables suppressed categories and authors the exact chain connector association. V03 converts U3 to the exact V2P12 BOM Id27 TPD4E1U06DCKR with TI DCK lands; v04 converts U4, v05 adopts the bounded V1 LED-resistor family and later revisions improve ground routing and drawings. All eleven successor inspection packages are complete. V12 repairs earlier camera clipping and schematic-note overlap; parent inspected its six views, full schematic and actual CAM plots. See attempt/component-review.md for the full IC/stock decision and conditional V1 LED-resistor envelope.

Board-specific qualification limits: v12 native strict0/no ignored categories;four module EPAD thermal holes,RF/firmware/provisioning/host/transmitdroop/stock/assembly/physical open.

## Interfaces and wiring

### Inputs

- U socket UART TX/RX and optional reset GPIO.
- 5 V or 3.3 V host power according to regulator budget.

### Outputs

- 2.4 GHz Wi-Fi through module antenna.
- UART responses/status to Smoothie.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                       |
| ---: | ------------------------------ |
|    1 | +3.3 V host reference          |
|    2 | +5 V regulator input candidate |
|    3 | ESP_RESET/ENABLE GPIO          |
|    4 | Host TX to ESP RX              |
|    5 | Host RX from ESP TX            |
|    6 | Status/config GPIO candidate   |
|    7 | Unused                         |
|    8 | Unused                         |
|    9 | Unused                         |
|   10 | GND                            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Use 3.3 V logic; no 5 V UART signalling.
- Regulator must support module transmit-current peaks with margin.
- Boot-strapping pins require fixed safe states.
- The source typo ESP2866 must not become a part selection.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

U-socket ESD where cable-accessible, regulator current limiting, boot/reset pull network, reverse-current prevention and RF module decoupling per datasheet.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/component-review.md). Retain ESP32-C3-MINI-1-N4X WiFi UART/TLV62569/diode-OR architecture; nRF52832 lacks WiFi. Existing U3/U4 V2 DCK and R14 conditional V1 stock changes retained,no successor. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/serial-to-wifi-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### serial-to-wifi-board

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/attempt/versions/v15/serial-to-wifi-board.kicad_pcb), SHA-256 `b5705620faf1df9f334c4a5646c8bb5ce4a76772b0e93e975b458a0dbce08b3b`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/attempt/versions/v15/populations/serial-to-wifi-board/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/serial-to-wifi-board/attempt/versions/v15/serial-to-wifi-board-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v16 — 2026-10-13

Protected source v15; current PCB SHA-256 `33913f02dcbbb3b3447a5d14fdbccfba76d64b142308f6a760f8e2e9318a0076`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 7 PCB warnings. Electrical geometry, project rules and 27 historical files unchanged. Verified 36 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Camera framing corrected to include complete antenna overhang; inherited rear instruction/ref overlaps remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
