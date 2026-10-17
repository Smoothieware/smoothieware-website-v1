---
layout: default
title: "Input protector"
permalink: /extensions/input-protector
---

# Input protector

{% include extension-board-visuals.html slug="input-protector" %}

Protect a standard endstop input from a field sensor whose signal may reach 48 V.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12/18 purchased/16 identity strings match/2 stock blanks;61 selected/584 historical hashes;native0/U1.6 annular contact/startup/fault/thermal/physical open.

## Interfaces and wiring

### Inputs

- One nominal digital sensor signal, ground, and optional 5 V; polarity and source impedance unresolved.

### Outputs

- One endstop-style digital output; buffered/open-collector/isolation behavior unresolved.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function | Design note                                 |
| ---: | -------- | ------------------------------------------- |
|    1 | +3.3 V   | Canonical fixed rail.                       |
|    2 | +5 V     | Canonical fixed rail.                       |
|    3 | N/A      | No Gadgeteer interface in this board scope. |
|    4 | N/A      | No Gadgeteer interface in this board scope. |
|    5 | N/A      | No Gadgeteer interface in this board scope. |
|    6 | N/A      | No Gadgeteer interface in this board scope. |
|    7 | N/A      | No Gadgeteer interface in this board scope. |
|    8 | N/A      | No Gadgeteer interface in this board scope. |
|    9 | N/A      | No Gadgeteer interface in this board scope. |
|   10 | GND      | Canonical fixed rail.                       |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- 48 V tolerance is required by the source and exceeds the current V2 Prime 3–45 V probe reference.
- No Gadgeteer connector is specified, so the copied Gadgeteer-5 V jumper note is not implementable as written.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Protection topology is the design blocker: require reverse polarity, overvoltage, surge, open-wire, and output-current limits.

## Selected component architecture

[Current v12 review](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/component-review.md) covers24records/18 purchased parts and existing ISO1211 redesign/C2-R8 V1 stock classes. Host5V is mandatory;no successor. Candidate ordering codes/stock reels,U1.6 annular contact,startup/threshold/fault/thermal/independent/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/input-protector`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### input-protector

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/attempt/versions/v15/input-protector.kicad_pcb), SHA-256 `9b2cf62518f1646cd94004ec041362bb1290b4c0141f0fa0778832e5f011aba7`.
- Last native check: **22 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J2 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/attempt/versions/v15/populations/input-protector/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/attempt/versions/v15/populations/input-protector/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/input-protector/attempt/versions/v15/input-protector-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation candidate — V17

The additive [v17 candidate](https://github.com/arthurwolf/extension-boards/tree/main/src/input-protector/attempt/versions/v17) preserves the protected v16 circuit, component positions, outline and electrical rules. It corrects revision labels and adds a readable complete HTTPS documentation link. Final source-bound parent checks report zero enabled electrical errors, open connections or schematic-parity findings, clean schematic checks and 7 remaining annotation/library warnings. All 12 declared populated/bare views and current manufacturing exports are checked against this source. Earlier component and revision selections on this page remain historical context. Physical fit, current/thermal performance, host compatibility and fabrication qualification remain unverified; no purchasing saving is claimed.

PCB SHA-256: `7a751e4ff74b0e0839c39eb01fac1469d1e11a0a198d2d64d1c1ea48a2a335d9`.
