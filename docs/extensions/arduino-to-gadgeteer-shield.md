---
layout: default
title: "Arduino-to-Gadgeteer shield"
permalink: /extensions/arduino-to-gadgeteer-shield
---

# Arduino-to-Gadgeteer shield

{% include extension-board-visuals.html slug="arduino-to-gadgeteer-shield" %}

Arduino Due A000062 host shield for experimenting with Smoothie Gadgeteer extension boards. The study provides six keyed sockets and a Qwiic connection on the type-I I²C bus; it is distinct from the Uno-oriented Arduino adapter.

## Current annotation candidate — revision 22

The 2026-10-13 retained revision 22 adds current **V22 UNQUALIFIED** labels and clearer both-face Qwiic pin guidance: **1 GND, 2 protected 3.3 V, 3 SDA, 4 SCL**. J7 shares the type-I Wire bus; it is not an independent bus. Its full documentation URL is printed on the back. Existing uppercase board-title glyphs and detailed socket wiring tables remain unchanged.

The selected baseline is the concurrently repaired revision 21 PCB (`038f93b6e72c13e55bb6046748c7a35ceb17ef7ec59656bbf0b12e18ff9fb4c1`); current revision 22 is `267ac2ca400d3ee0294030ee142fdb7538ed4466fd223b4641c15ab52035a103`. Fresh enabled-rule PCB checks, schematic parity and electrical-rule checks report zero findings for both. Five inherited PCB assembly-related rule categories remain ignored, without added exclusions. These automated results do not release the hardware.

Both normal 2.54 mm and STEMMA/Qwiic connector populations have six current populated/bare views, all 12 reviewed. All 358 declared model references resolve and 19 manufacturing/document exports bind to this exact source. Rendering does not prove physical insertion, shield stacking, pin orientation or assembly quality. See the [source-bound revision review](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/attempt/versions/v22/arduino-shield-usability-review.json) and [current/remaining board record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/fancification-round2.md).

**Arduino Due A000062 only; 3.3 V I/O; shared 80 mA per rail across sockets.** No circuit, protection, connector geometry, copper, board outline or hole changed in this annotation revision. The host headers and mounting holes preserve the fixed Arduino Due mechanical pattern rather than a forced 10 mm lattice. Actual protection thresholds, startup, backfeed behavior, thermal/current limits, host/firmware compatibility, cable fit and hardware operation remain unqualified; fabrication release is false. Parent acceptance of the saved package remains separate.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The [current component review](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/component-review.md) reconciles v12, beyond the
historical v01 proposal below. Ten exact V2-stock-family TPD4E1U06DCKR protection
parts are already implemented. Retain dedicated switch/limiter/ideal-diode/supervisor
roles; qualified V1 passive families are conditional candidates. No new revision
in this pass; v13/v14 remain unused. All124 purchased references/142 electrical
references and194 own-package hashes reconcile;2415 retained package-member
hashes match. Existing independent geometry/opens/parity0 coexist with two
unsuppressed ERC warnings,14 annular assembly contacts and132 unsigned checklist
rows. Physical/stock/fabrication qualification remains open.

Board-specific qualification limits: v12 conditional study:geometry/opens/parity0;two ERC warnings/14 annular contacts/all132 unsigned;no fabrication/physical approval.

## Interfaces and wiring

Every J1-J6 pin 1 is port_3v3, pin 2 is port_5v and pin 10 is gnd. Directions below describe the selected function while enabled, not a hardware-enforced direction. Ordinary GPIO can be input or output. A0-A2 are initially qualified as analog inputs; any digital reuse must account for their 1 kohm/1 nF filters.

| Socket pins | Host functions in the same order | Direction / ownership |
| --- | --- | --- |
| J1:3,4,5,6,7,8,9 | D22,D23,D24,D25,D26,D27,D28 | Configurable GPIO; module/host driver ownership must be explicit |
| J2:3,4,5,6 | A0,A1,A2,D29 | Three inputs to ADC; one configurable GPIO |
| J3:3,6,7,8,9 | D30,D31,D6,D7,D8 | Two configurable GPIO; three PWM outputs |
| J4:3,4,5,6,7,8,9 | D32,D33,D34,D10,MOSI,MISO,SCK | Three GPIO; CS/MOSI/SCK host outputs; MISO host input |
| J5:3,4,5,6 | D35,D18,D19,D36 | GPIO; host TX1 output; host RX1 input; GPIO |
| J6:3,6,8,9 | D37,D38,D20,D21 | Two GPIO; SDA/SCL open-drain bidirectional |

J7 Qwiic: pad 1=gnd, 2=port_3v3, 3=i_8 SDA, 4=i_9 SCL, both MP pads=gnd. These are the same protected module-side I2C nets exposed at J6, after R30/R31 and U8, with D10 ESD and C35 local 100 nF rail decoupling. No 5 V connection exists.

Reserved NC: J2:7,8,9; J3:4,5; J5:7,8,9; J6:4,5,7. These are eleven separate unconnected contacts. GPIO! positions use the native Due GPIO assignments shown; verify the exact core's interrupt behavior in qualification. The Version 16 greedy annotations do not authorize changing these fixed physical pin assignments.

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep free-standing mounting-hole centers on a documented 10 mm lattice; preserve fixed Arduino Due host mounting/header geometry on this shield. Add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/arduino-to-gadgeteer-shield`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### arduino-to-gadgeteer-shield

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/attempt/versions/v15/arduino-to-gadgeteer-shield.kicad_pcb), SHA-256 `e6a4c1a615cd00a2e6c563c56388a71f56067176c7308095add38ebace35d0ec`.
- Last native check: **32 errors**, including **32 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J7 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/attempt/versions/v15/populations/arduino-to-gadgeteer-shield/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/attempt/versions/v15/populations/arduino-to-gadgeteer-shield/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/attempt/versions/v15/arduino-to-gadgeteer-shield-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Trusted-power compact correction

Engineering revision **v23** removes36 redundant trusted-input protection and warning parts while retaining both125mA protected output rails, soft-start, source/backfeed isolation, fault indicators and LED-disable jumpers. The existing outline is unchanged. Native electrical and schematic checks are clean, and both connector populations have six reviewed renders. This is an unqualified engineering design, not a fabrication release.
