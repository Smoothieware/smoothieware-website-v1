---
layout: default
title: "Qwiic-to-Gadgeteer adapter"
permalink: /extensions/qwiic-to-gadgeteer-adapter
---

# Qwiic-to-Gadgeteer adapter

{% include extension-board-visuals.html slug="qwiic-to-gadgeteer-adapter" %}

Connect SparkFun Qwiic I²C modules to a Smoothieboard Gadgeteer type-I socket.
This is the planned adapter requested by the maintainer on 2026-10-03 and also
listed in the original specification's OTHER IDEAS section.

Provide a keyed Gadgeteer connector and at least one populated Qwiic connector
for the same I²C bus. Use the canonical Gadgeteer type-I mapping: pin 1 = 3.3 V,
pin 8 = SDA, pin 9 = SCL, pin 10 = GND. Qwiic uses the standard keyed 4-pin,
1.0 mm-pitch connector carrying GND, 3.3 V, SDA and SCL. Gadgeteer pin 2's 5 V
rail must not feed Qwiic power or pull-ups. The adapter does not translate
protocols or provide an independent I²C controller.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: No fabrication/physical signoff; S052 fails due absent data-line ESD or approved exception; 43 checklist items and 231 rules remain unverified; host budget, module pulls, mating, access and no-hotplug contract remain open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/component-review.md). Retain passive one-host adapter and exact keyed connector interfaces; no BOM substitution or added parts justified; selected v16 retained. Current selected v16; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/qwiic-to-gadgeteer-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v17, v18, v19. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v17, v18, v19**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### qwiic-to-gadgeteer-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v19/qwiic-to-gadgeteer-adapter.kicad_pcb), SHA-256 `92b79d60000f529f81110b2f5e35b31f7dbc1acd6e1e2f2ba08283c06334d321`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`; J4 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v19/populations/qwiic-to-gadgeteer-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v19/populations/qwiic-to-gadgeteer-adapter/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v19/qwiic-to-gadgeteer-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v20 — 2026-10-13

Protected source v19; current PCB SHA-256 `0037e26e223670937dabe70666af8e9a526ad10f041c50918c602a4beb123646`. Fresh checks: zero enabled errors/opens/parity/ERC findings; 2 PCB warnings. Electrical geometry, project rules and 48 historical files unchanged. Verified 8 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
