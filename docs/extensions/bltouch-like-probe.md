---
layout: default
title: "BLTouch-like probe"
permalink: /extensions/bltouch-like-probe
---

# BLTouch-like probe

{% include extension-board-visuals.html slug="bltouch-like-probe" %}

Experimental solenoid probe intended to reproduce the externally observable control, trigger, and alarm behaviour of a BLTouch-class probe.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Actual **v10** retains STM32G030/DRV5055 Hall-solenoid architecture and an existing exact V2 DCK protection array with refined manufacturer lands. See [complete63-record/48-component review](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/component-review.md). No new numbered revision; prior blocked draft below remains historical context.

Board-specific qualification limits: 24opens/DRCexit5;mechanical/host power/markings/physical unqualified.

## Interfaces and wiring

### Inputs

- P-socket PWM control or standard Ground/5V/Signal servo header
- Specified solenoid supply
- Mechanical contact/plunger position sensing

### Outputs

- Standard Signal/Ground/5V protected probe input to host
- Alarm/status indication

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function             |
| ---: | --------------------- | ----------------------------- |
|    1 | +3.3V                 | +3.3 V rail                   |
|    2 | +5V                   | +5 V rail                     |
|    3 | GPIO! / type-specific | Probe/status GPIO if combined |
|    4 | type-specific         | N/C                           |
|    5 | type-specific         | N/C                           |
|    6 | type-specific         | Auxiliary GPIO                |
|    7 | type-specific         | PWM command                   |
|    8 | type-specific         | N/C                           |
|    9 | type-specific         | N/C                           |
|   10 | GND                   | Ground                        |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Control and probe paths are separate
- Solenoid voltage/current/inductance and flyback energy must be specified
- Probe output must be 5 V tolerant with pull-up and capacitor per standard input
- Solenoid drive must not load Gadgeteer 5 V beyond its budget

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Flyback diode/TVS sized to solenoid
- Current limiting and thermal shutdown/fuse
- ESD and RC filtering on probe/control connectors
- Power-up output must indicate safe/non-trigger ambiguity per host policy

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/bltouch-like-probe`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### bltouch-like-probe

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/attempt/versions/v13/bltouch-like-probe.kicad_pcb), SHA-256 `fcdc733c8ab324e51a5ecfcb3bd7ccb4a2ce013fb5b02fae499b5f8569dc3da7`.
- Last native check: **56 errors**, including **56 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J2 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/attempt/versions/v13/populations/bltouch-like-probe/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/attempt/versions/v13/populations/bltouch-like-probe/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/attempt/versions/v13/bltouch-like-probe-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- owned-protection-circuit:start -->
## Native v13 rail-protection study

The former input PTC is replaced by a TPS259631 with reverse PFET, TPS3700 OV cutoff and a post-cutoff LM66200. The existing coil limiter is the pin-compatible auto-recovery TPS2553; Hall sensing, STM32, host wiring and solenoid flyback remain. The input limiter has a nominal 1.506 A setting; guaranteed 5 V hot margin for the retained 1.1 A target remains unqualified. Distinct OV and FAULT indicators, reverse blinking, controlled startup and each LED’s own disable link are actual native circuits. The added ideal diode follows the OV/current cutoff and blocks the direct externally powered load-to-PFET path when raw input is negative. Original signal ESD/raw-logic bypass limits remain; arbitrary powered-output overvoltage is not supported.

The 5 V OV setting is 5.400 V nominal, with 5.334233–5.465987 V reference/divider/bias corners. Ideal-diode input stays within its 5.5 V recommended range statically; cutoff overshoot below 6 V absolute maximum, negative auxiliary clamps over temperature, current limits, thermal behavior and source budgets require bench qualification. No manufacturing release. See [native protection records](https://github.com/arthurwolf/extension-boards/blob/main/src/bltouch-like-probe/attempt/versions/v13/RAIL-PROTECTION.md) for exact hashes, remaining routing and primary sources.
<!-- owned-protection-circuit:end -->

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `b44750907ce8c8efdff9f8fb14e110d84a290d22b2a8824a1a30a59ebf3c1c0b`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 79 PCB warnings. Electrical geometry, project rules and 181 historical files unchanged. Verified 174 model entries, 19 exports and 12 current population views, all inspected. Documentation URL placement pending. Documentation URL placement pending; inherited overlapping rear instructions remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Trusted-power source audit

The Gadgeteer input and user-wired servo header select a shared raw power rail through separate solder links. Shared input protection therefore remains justified. Existing revision v18 already fits the original 46 × 34 mm outline; this source audit does not create a new hardware revision.
