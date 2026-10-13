---
layout: default
title: "BeagleBone breakout"
permalink: /extensions/beaglebone-breakout
---

# BeagleBone breakout

Connect a specifically selected BeagleBone to Smoothie V2 by UART and a separately qualified power arrangement.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Actual retained **v10** implements a BBB Black P9 UART4 signal-only adapter with independently powered LVC126 buffers and LVC08 reset/host-alive gating. See [complete21-reference review](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/component-review.md); the earlier blocked draft below remains historical context. No new version. No BBB host5V supply or chain, no galvanic isolation; local3.3V logic draws current.

Board-specific qualification limits: Native clean retained;four checklist failures/61unsigned,ESD/markings/physical gates open.

## Interfaces and wiring

The retained adapter connects BeagleBone Black P9 UART4 to the Smoothie UART interface using independently powered SN74LVC126 buffers and LVC08 reset/host-alive gating. It is signal-only: it does not supply the BeagleBone from the host 5 V rail, provide a chain connector or provide galvanic isolation.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

The local logic uses 3.3 V. Verify both independently powered domains, UART4 header orientation and reset/host-alive behavior; do not use the older UART0 draft as this study’s pinout.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/beaglebone-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### bbb-uart

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/attempt/versions/v13/bbb-uart.kicad_pcb), SHA-256 `fd5dff1f204242030b5b2f80a31d4e9e9d1065243591351edf0f411cbff99722`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/attempt/versions/v13/populations/bbb-uart/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/attempt/versions/v13/bbb-uart-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- second-round-annotation:start -->
## Second-round annotation candidate: v14

This saved engineering candidate updates revision labels and annotation styling while preserving the electrical geometry, schematic, project rules and baseline files. Independent current checks find **zero enabled board errors, open connections, parity errors and schematic-rule errors**; **2 board warnings** remain. Six current normal-population views and source-bound manufacturing/model hashes were verified for this board.

**The documentation URL is still absent from the board.** The automatic placement search found no readable clear area while retaining existing annotations; deliberate label reflow remains to be tried. This requirement is pending, and the revision does not establish assembly or fabrication qualification, area savings or priced savings.

- [Candidate PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/attempt/versions/v14/bbb-uart.kicad_pcb), SHA-256 `77fa70620806363a4b3a51f1112ee4d71b4e44b3c187c012ef1f251007bee5be`.
- [Changes and pending work](https://github.com/arthurwolf/extension-boards/blob/main/src/beaglebone-breakout/fancification-round2.md).

Earlier revision contracts and readbacks on this page remain historical. Physical connector fit, mounting, fault, current and thermal qualification remain open where applicable.
<!-- second-round-annotation:end -->
