---
layout: default
title: "Laser diode driver breakout"
permalink: /extensions/laser-diode-driver-breakout
---

# Laser diode driver breakout

Fixed-current, hardware-permitted PWM driver study for an ams OSRAM PLPT5 447KA 445 nm laser diode. The prototype commands approximately 0.849 A; the historical 2.5 W aspiration is not an achieved optical rating. Current evaluation is restricted to a dummy load.

## Development status

**Second-round candidate accepted for engineering review — 2026-10-13.** The v44 package has current source-bound native checks, complete resolving model references, exports and six inspected normal-population/bare views. Newly recovered purple bodies are dimensioned principal-body prisms with contacts, voids and mating features omitted; they are not manufacturer or fit models. Inherited native findings and label crowding remain documented in the board work record. Hardware, electrical and mechanical qualification remain open; no fabrication release or priced saving is claimed.

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v37/75electrical refs/all export MPNs blank/25question-mark refs;35selected/574later hashes match;19opens/five ignorecats/assembly/thermal/default-off open;dummy-load only.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

[Retained v37 review](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/component-review.md) covers75 electrical refs and existing six V1 bypass classes. Retain LT3474,no successor. All75 exported MPNs blank/25trailing-question-mark refs,19opens,assembly/thermal/timing/default-off gates remain. Dummy-load CAD only;no energization,real-laser connection or fabrication release.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/laser-diode-driver-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v38, v39, v40. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v38, v39, v40**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### laser-diode-driver-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/attempt/versions/v40/laser-diode-driver-breakout.kicad_pcb), SHA-256 `a96867f5591a14404a8bb64a916fda333cfef4a4fba68bcf0567af4afd4a9dbf`.
- Last native check: **69 errors**, including **69 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/attempt/versions/v40/populations/laser-diode-driver-breakout/normal/population.json): 6 images; source current; image hashes match; 1 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-diode-driver-breakout/attempt/versions/v40/laser-diode-driver-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The third additive candidate includes a TPS26600 automatic-retry input eFuse, OV cutoff with a separate raw-side indicator, reverse cutoff with a floating blinking LED timer, soft start and individual LED-disable links. Retained ARM/PERMIT/PWM interlocks and all laser-operation restrictions still apply. Automatic retry is not a laser safety stop. Use dummy loads for qualification; no real-laser operation or fabrication is approved. Native routing remains incomplete; see the source-bound readback and per-revision NATIVE-CHECKS.md.
