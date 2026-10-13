---
layout: default
title: "Mechanical endstop breakout"
permalink: /extensions/mechanical-endstop-breakout
---

# Mechanical endstop breakout

Interface one normally-closed mechanical endstop to a protected Smoothieboard input using the standard Signal/Ground/5 V field connector.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12 native checks clean, checklist only 2/132 pass and 130 unverified; stock identity, rail-loss behavior, host map, surge/ESD and physical qualification remain open.

## Interfaces and wiring

### Inputs

- 2.54 mm keyed 3-pin field header: Signal, Ground, 5 V.
- One X Gadgeteer socket, using one GPIO.

### Outputs

- Filtered 3.3 V-safe digital endstop signal to V2.
- Optional state LED isolated from the sensing threshold.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- 5 V-tolerant field input with onboard pull-up and capacitor.
- Default NC wiring; open cable must report fault/trigger.
- Filter must preserve required homing repeatability; values TBD by cable/noise testing.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/component-review.md). Retain SN74LVC1G17 buffer and complete X interface; no exact stock IC match. V1 330Ω resistor remains a candidate only; no substitution pending tolerance/lot/electrical checks; no new revision. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/mechanical-endstop-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical first-program candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The historical first-program candidate is described below; second-round v18 results are recorded separately further down.

### mech-endstop

- [Historical first-program PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/attempt/versions/v15/mech-endstop.kicad_pcb), SHA-256 `20b94c885e655c2eec95bbb2e3441f1e63851a9376c3d579303d878656e15584`.
- Last native check: **4 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/attempt/versions/v15/populations/mech-endstop/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/attempt/versions/v15/populations/mech-endstop/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/attempt/versions/v15/mech-endstop-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate: v18

The revision title is corrected and a readable complete four-line website URL is added on the back. Five inherited ignored design-rule categories remain explicitly documented in the board record; they were not newly checked or silently enabled.

No enabled native design-rule or electrical-rule diagnostics remain. The protected v17 circuit, exact non-text electrical geometry, component placement, outline, schematic and electrical rule settings are unchanged. This is an annotation candidate, with no new components and no area or priced purchasing saving claimed.

All12 populated/bare top, bottom and isometric views across the existing normal and keyed STEMMA-family populations were hash-verified and inspected, with manufacturing exports, BOM and placement files regenerated from the current source. Select the connector and cable by the exact source pin map; matching connector shape does not establish interchangeable pin order or an I²C interface.

[Current v18 source](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/attempt/versions/v18/mech-endstop.kicad_pcb), SHA-256 `51024c4739b0ed4e33ef6470cc43b3de8705227bd619dc70c02c6f4540c46b00`. [Board-local second-round changes, ignored rules and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/mechanical-endstop-breakout/fancification-round2.md).

Physical assembly, connector fit, actual host wiring, fault-state behavior and sensor qualification remain open. **Fabrication release remains false.**
