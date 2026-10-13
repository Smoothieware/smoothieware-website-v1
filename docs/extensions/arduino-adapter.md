---
layout: default
title: "Arduino adapter"
permalink: /extensions/arduino-adapter
---

# Arduino adapter

Adapt a bounded subset of Arduino Uno Rev3-style shields to Smoothieboard through A, S and U sockets with explicit compatibility limits.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

A native design exists beyond this historical blocked draft. The current
[component review](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/component-review.md) reconciles retainedv11: all138 contract
references (116 purchased/22 fabricated),184 package hashes and1066 historical
package-member hashes match. Existing independent evidence reports ERC/enabled
geometry/parity0 but11 opens (DRC exit5), three annular assembly contacts and
unsigned physical gates. Actual edge bounding box67.05×52.31mm includes0.05mm
stroke and exceeds the62mm contract width limit. Retain dedicated translators,
analogue buffer and power limiter; only qualified V1/V2 passive/LED reuse is
conditional. No new revision; v12/v13 remain unused. Physical host rail mapping,
shield compatibility and power/analogue-backfeed behavior remain unverified.

Board-specific qualification limits: v11 rejected:11 opens, DRC exit5, width67.05mm inclstroke versus62mm limit, three annular contacts; physical/stock gates open.

## Interfaces and wiring

### Inputs

- A socket for available ADC inputs.
- S socket for SPI and GPIO.
- U socket for UART and GPIO.
- Optional external shield power.

### Outputs

- Arduino Uno R3 shield headers with only verified functions populated.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                                   |
| ---: | ------------------------------------------ |
|    1 | Each port pin 1: +3.3 V reference          |
|    2 | Each port pin 2: +5 V through power policy |
|    3 | A: AIN1; S/U: GPIO/enable                  |
|    4 | A: AIN2; S: GPIO; U: TX                    |
|    5 | A: AIN3; S: GPIO; U: RX                    |
|    6 | A: GPIO; S: CS; U: GPIO                    |
|    7 | A: unused; S: MOSI; U: unused              |
|    8 | A: unused; S: MISO; U: unused              |
|    9 | A: unused; S: SCK; U: unused               |
|   10 | Each port pin 10: GND                      |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Uno Rev3 is a 5 V platform; every signal needs direction/tolerance review.
- Canonical A has three AIN plus one GPIO, not six ADC inputs.
- SPI must reach both Uno digital and ICSP header locations if supported.
- No shield may backfeed V2 rails.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Current-limit shield power, block backfeed, use per-signal compatible translation, ESD on user headers and defined reset states.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/arduino-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The earlier additions **v12, v13, v14** and the later **v19 annotation candidate** are engineering studies; saved CAD and renders do not release the hardware. Older baseline notes above remain historical.

### arduino-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/attempt/versions/v19/arduino-adapter.kicad_pcb), SHA-256 `edd6011784dc709edc04ae8c50e6a446f3e460ed5e242b5665d2cbb2792aee7d`.
- Fresh native checks report **506 DRC errors**: 499 unconnected items, 2 courtyard overlaps and 5 footprint-filter mismatches; 2 silk-overlap warnings; ERC has 0 findings. The same counts are present on v18 and remain unresolved. This is a CAD result, not electrical, assembly or firmware qualification.
- One normal connector population is recorded; no alternate connector population is claimed. All238 declared model references resolve with source-bound hashes.
- [Normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/attempt/versions/v19/populations/arduino-adapter/normal/population.json): six populated/bare top, bottom and isometric views; all were reviewed for framing and annotation fit.
- [Annotation review, retained native reports and export hashes](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/attempt/versions/v19/arduino-adapter-annotation-review.json). The 19 source-bound outputs include BOM, placement CSV, schematic PDF, Gerber layers and drill files.
- v19 updates the uppercase title/revision, retains the existing voltage/domain labels, and prints a power-off reminder, the complete lowercase documentation URL and **UNQUALIFIED / UNSUITABLE FOR FABRICATION** status on the back silk. All non-text PCB expressions, footprints and geometry match v18.

The host contact mapping disagreement, protection, current allocation, signal direction, thermal behavior, pinout, cable access, physical fit and assembly remain unverified. v19 is explicitly **UNQUALIFIED / UNSUITABLE FOR FABRICATION**; its annotation changes do not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- owned-protection-circuit:start -->
## Native v14 rail-protection study

The protected 3.3 V shield output uses TPS259631, reverse PFET, TPS3700 OV cutoff and a post-cutoff LM66100. The 5 V port retains its TPS2553 downstream limiter, with added upstream protection and LM66100 isolation. Raw host logic and Arduino mating geometry remain unchanged. Distinct OV and FAULT indicators, reverse blinking, controlled startup and each LED’s own disable link are actual native circuits. The added ideal diode follows the OV/current cutoff and blocks the direct externally powered load-to-PFET path when raw input is negative. Original signal ESD/raw-logic bypass limits remain; arbitrary powered-output overvoltage is not supported.

The 5 V OV setting is 5.400 V nominal, with 5.334233–5.465987 V reference/divider/bias corners. Ideal-diode input stays within its 5.5 V recommended range statically; cutoff overshoot below 6 V absolute maximum, negative auxiliary clamps over temperature, current limits, thermal behavior and source budgets require bench qualification. No manufacturing release. See [native protection records](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/attempt/versions/v14/RAIL-PROTECTION.md) for exact hashes, remaining routing and primary sources.
<!-- owned-protection-circuit:end -->

## Current annotation package verification

Revision19 is registered as an annotation candidate after independent current-source native, preservation, model/export and six-view checks. It still has499unrouted connections,2courtyard errors and5footprint-filter parity errors; electrical-rule checks are clear. All earlier versions remain preserved. Readable documentation and power-off/status labels do not establish host mapping, physical fit or fabrication readiness.
