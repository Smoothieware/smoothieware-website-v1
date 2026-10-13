---
layout: default
title: "SD card breakout"
permalink: /extensions/sd-card-breakout
---

# SD card breakout

Add a secondary removable SD or microSD card over the SPI Gadgeteer interface without replacing the onboard SDIO card.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v17 bounded CAD/package review is clean but 81 checklist items and 266 rules are unsigned; host/socket fit, firmware, card inrush/current allocation, ESD survival and physical/fabrication approval remain open.

## Interfaces and wiring

### Inputs

- S socket: CS, MOSI, MISO, SCK and 3.3 V/GND.
- User-inserted SD or microSD card.

### Outputs

- SPI card responses on MISO and optional card-detect GPIO.

### Connection contract

The following is the canonical mapping used for the named CAD prototype. Pin1
is 3.3 V, pin2 is forwarded 5 V and pin10 is GND. The physical V2 Prime header
and cable orientation remain unverified: do not connect or energize the real
interface until its rail placement is checked. Study CAD does not resolve that fit.

|  Pin | Function                  |
| ---: | ------------------------- |
|    1 | +3.3 V card rail          |
|    2 | +5 V unused and isolated  |
|    3 | Optional card detect GPIO |
|    4 | Optional GPIO             |
|    5 | Optional GPIO             |
|    6 | SD_CS                     |
|    7 | SD_MOSI                   |
|    8 | SD_MISO                   |
|    9 | SD_SCK                    |
|   10 | GND                       |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Card rail and all bus signals are 3.3 V.
- Do not power the card from 5 V.
- Cable length and clock rate must be bounded; source footnote warns SDIO will not tolerate long cables.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

ESD at exposed card contacts, local bulk plus high-frequency decoupling, optional clock series damping, and no local 5 V load; 5 V is forwarded to J2.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/component-review.md). Retain SPI interface, SN74LVC1G125 MISO buffer and exact V2 DCK protection; keep only electrically/package-qualified BOM reuse; existing stock improvements already in v04/v05; no new revision. Current selected v17; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/sd-card-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v18, v19, v20. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v18, v19, v20**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### sd-card-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/attempt/versions/v20/sd-card-breakout.kicad_pcb), SHA-256 `aaf51dad650715da9b2617c02ca34092351320e398838292a969fb09330dafe1`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/attempt/versions/v20/populations/sd-card-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/attempt/versions/v20/sd-card-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v21 — 2026-10-13

Protected source v20; current PCB SHA-256 `f0c02fd2802a1a364bf94549b43c4029c6fc59ff4031c5b484ed4e660549fff5`. Fresh checks: zero enabled errors/opens/parity/ERC findings; 6 PCB warnings. Electrical geometry, project rules and 26 historical files unchanged. Verified 17 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
