---
layout: default
title: "Position feedback board"
permalink: /extensions/position-feedback-board
---

# Position feedback board

{% include extension-board-visuals.html slug="position-feedback-board" %}

Acquire one specified magnetic or quadrature encoder and report position to Smoothieboard for following-error detection.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The retained native prototype supersedes the architecture choices in the historical draft below: LS7366R-S SPI counter, AM26LV32EDR differential ABZ receiver, TPS2553DBVR encoder-supply switch and 16 MHz oscillator, in the original50×47 mm envelope. It is a bounded differential quadrature design, not a universal or magnetic encoder interface. See [component review](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/component-review.md), [version evolution](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/attempt/version-evolution.md) and [parent reconciliation](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/attempt/parent-review-v26.json). Common V1 0603 bypass/bias families are conditional substitutions; exact stocked IC, manufacturer/lot and quantity equivalence is not established.

Board-specific qualification limits: v26 ERC/strict geometry/parity0 with fiveopens and unresolved netlist annotation warning; host/encoder current, ESD, timing and physical gates unsigned.

## Interfaces and wiring

The retained BASE-DIFF prototype receives differential quadrature A/B/Z through AM26LV32EDR, counts with LS7366R-S and reports over SPI. A TPS2553DBVR switches the encoder supply and a 16 MHz oscillator clocks the counter. Magnetic-encoder and arbitrary encoder protocols are outside this selected implementation.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

Qualify encoder levels/current, differential cable/termination, counting rate, host SPI mapping, power-off behavior and source allocation. Five ground-pour opens and a netlist annotation warning remain; no reliable motion-feedback claim follows from the saved CAD.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/component-review.md). Retain existing LS7366R-S/AM26LV32 differential ABZ SPI counter and TPS2553; no extra controller justified. Conditional V1 0603 bypass/pull families only; no successor. Current selected v26; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/position-feedback-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v27, v28, v29. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v27, v28, v29**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### position-feedback

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/attempt/versions/v29/position-feedback.kicad_pcb), SHA-256 `55eeccd89ca54e538071bfa308fc75a5a800779f5b15ad67abd969260358a282`.
- Last native check: **72 errors**, including **5 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/attempt/versions/v29/populations/position-feedback/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/position-feedback-board/attempt/versions/v29/position-feedback-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v33 — 2026-10-13

Protected source v32; current PCB SHA-256 `e9ff7319c7506563b9b18d593dc6c7b26699494477569ac95608a7c91fa6a810`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 25 PCB warnings. Electrical geometry, project rules and 60 historical files unchanged. Verified 30 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited jumper text overlaps remain; shared authored dependencies verified unchanged Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
