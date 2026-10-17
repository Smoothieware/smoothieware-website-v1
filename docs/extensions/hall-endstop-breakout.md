---
layout: default
title: "Hall endstop breakout"
permalink: /extensions/hall-endstop-breakout
---

# Hall endstop breakout

{% include extension-board-visuals.html slug="hall-endstop-breakout" %}

Provide a magnetic endstop module with a Signal/Ground/5 V connection and explicit normal and fault-state behavior. The historical v13 design remains unqualified; the annotation-only v18 candidate below does not establish a qualified machine limit.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v13/10 purchased identities/15records/128 selected/1243 historical hashes match;retained native0;host/magnet/fault/physical open.

## Interfaces and wiring

### Inputs

- Magnetic field from a specified magnet and geometry.
- 5 V field supply and ground through the three-pin Signal/Ground/+5 V connector. A separate adapter cable may connect to Gadgeteer X after its physical pinout is checked.

### Outputs

- One host-biased digital endstop indication; HIGH means triggered/fault under the specified firmware polarity.

### Connection contract

The PCB has no Gadgeteer socket: J1 is pin 1 SIGNAL_OUT, pin 2 GND, pin 3 +5 V. The table below is the repository-canonical host-side X adapter mapping only. Current V2 Prime documentation describes a different physical rail placement; do not release an adapter cable or claim physical compatibility until the real target is inspected and this discrepancy is closed.

|  Pin | Function                     |
| ---: | ---------------------------- |
|    1 | +3.3 V host logic            |
|    2 | +5 V sensor supply candidate |
|    3 | HALL_ENDSTOP                 |
|    4 | Unused                       |
|    5 | Unused                       |
|    6 | Unused                       |
|    7 | Unused                       |
|    8 | Unused                       |
|    9 | Unused                       |
|   10 | GND                          |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Retain DRV5033AJQDBZR continuous, omnipolar, open-drain Hall sensing in the retained design; its 3–12 mT operate and 1–5 mT release ranges do not establish a trip gap without magnet and motion qualification.
- Use the v09/v11 BSS138BK,215 inverter and host-owned 3.3 V pull-up; qualify LOW/HIGH levels, rise time, host input, cable, power-up and brownout behavior on the real target.
- An unplugged/open signal must report trigger/fault when the host pull-up and firmware polarity are present. A grounded signal is an undetected clear fault.
- Conditional V1 0603 stock-family candidates are C1 100 nF 50 V, R1 10 kΩ 10% and R3 2.2 kΩ 10%; exact reels and ratings require qualification. R2 now uses a 330 Ω 1% 1206 0.25 W part for fault margin; the unidentified stock 0603 alternative is not selected. The generic V2 2N7002 lacks the exact low-supply specification needed for Q1.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

The retained circuit has connector signal ESD (D1), C1 supply bypass and R2/C2 output filtering; the signal high level is supplied only by the 3.3 V host. It has no supply fuse, reverse-supply stage or supply TVS. Do not claim 24 V miswire tolerance or safe brownout behavior. R2 is RC1206FR-07330RL, 330 Ω 1%, 0.25 W at 70 °C. A 5.25 V signal short gives an ideal-source upper bound of 84.37 mW at 326.7 Ω; its manufacturer linear derating gives 205.88 mW at 85 °C. This is a calculated margin, with fault duration and actual thermal behavior unqualified.

## Selected component architecture

[Selected v13 review](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/component-review.md) covers15records/10 purchased identities. Retain DRV5033AJ and existing BSS138BK/1206 fault-resistor upgrades;earlier2N7002/0603 stock study is historical. Conditional V1 bypass/pulls only,no successor;host/magnet/fault/thermal/physical gates remain.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Assess a third shared jack option on eligible endstop-style ports, with separate header, keyed-connector and jack renders; preserve safe insertion behavior and document any fit exception.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/hall-endstop-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v14, v15, v16. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical first-program candidate readback

The three additional revisions are **v14, v15, v16**. They are engineering studies; saved CAD and renders do not release the hardware. The historical first-program candidate is described below; second-round v18 results are recorded separately further down.

### hall-endstop

- [Historical first-program PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/attempt/versions/v16/hall-endstop.kicad_pcb), SHA-256 `a2520e37f4d11516d0c7af8b12a7e12bbd5e2a1a6fe2fc2bddf0d25cf1cb9a42`.
- Last native check: **2 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/attempt/versions/v16/populations/hall-endstop/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/attempt/versions/v16/populations/hall-endstop/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/attempt/versions/v16/hall-endstop-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate: v18

Revision titles are corrected. The complete website URL still needs readable clear space; this revision does not claim that requirement is met.

No enabled native design-rule or electrical-rule diagnostics remain. The protected v17 circuit, exact non-text electrical geometry, component placement, outline, schematic and electrical rule settings are unchanged. This is an annotation candidate, with no new components and no area or priced purchasing saving claimed.

All12 populated/bare top, bottom and isometric views across the existing normal and keyed STEMMA-family populations were hash-verified and inspected, with manufacturing exports, BOM and placement files regenerated from the current source. Select the connector and cable by the exact source pin map; matching connector shape does not establish interchangeable pin order or an I²C interface.

[Current v18 source](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/attempt/versions/v18/hall-endstop.kicad_pcb), SHA-256 `2af85424da054ad77b81d73755e712ebbfe8f022b647018225b5d53e313f8fc5`. [Board-local second-round changes, ignored rules and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/hall-endstop-breakout/fancification-round2.md).

Physical assembly, connector fit, actual host wiring, fault-state behavior and sensor qualification remain open. **Fabrication release remains false.**
