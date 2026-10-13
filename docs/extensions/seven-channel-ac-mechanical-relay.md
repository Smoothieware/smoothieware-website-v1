---
layout: default
title: "Seven-channel AC mechanical relay"
permalink: /extensions/seven-channel-ac-mechanical-relay
---

# Seven-channel AC mechanical relay

Seven-channel mechanically switched AC-load study with host-side control, relay coils and separated load wiring. Mains insulation, coil-power allocation, enclosure, thermal behavior and relay/contact ratings require qualification before use.

## Development status

**Current retained annotation candidate: v16, 2026-10-13.** Current uppercase revision labels, a reflowed documentation link and a contact-terminal guide improve readable wiring information without changing circuitry, relay mechanism, copper, isolation slots/lands, protective features or mounting. Contact terminals are 1 = NO, 2 = NC, 3 = C; coil-drive LEDs do not prove contact position.

Fresh full-track native checks report zero enabled errors, opens and schematic-parity errors; design-rule warnings changed from 11 to 10, with no category increase. Seven inherited schematic footprint-link warnings remain. Six normal-population views were inspected, all 149 declared model instances resolve, and 17 source-bound exports were verified. Existing dense edge markings still need cleanup. This is an unqualified engineering candidate: fabrication release, physical assembly, current/thermal/load/isolation, host and cable/enclosure qualification remain withheld.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Selected v11 repairs duplicated underside labels from visually rejected v10; all ten original-program successors v02–v11 remain preserved. Fresh parent ERC/geometry/opens/parity zero;168 contracted references/438 pins,149 fitted parts,301 selected package hashes and3016 successor hashes reconcile. Actual212-via/330-SMD shape screening is clean. Six board views, four CAM faces, full schematic and underside labels were independently inspected.

Board-specific qualification limits: v11 retained strictnative0/ordinaryassembly0;73procurement gates and coil/host/mains/insulation/fault/thermal/physical signoff remain open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/component-review.md). Retain seven optical/discrete coil channels,TPS259474 and isolated converter. Existing seven V1 5.6k10%0603 indicator stock slots applied v03;TPL7407L/DRV8860 redesign not justified,no IC-stock successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/seven-channel-ac-mechanical-relay`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### seven-channel-ac-mechanical-relay

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/attempt/versions/v14/seven-channel-ac-mechanical-relay.kicad_pcb), SHA-256 `f30a77a67cb8b3e8872ff94e878e98ea13c5924601ea54f7defa8e176f576d5c`.
- Last native check: **48 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/attempt/versions/v14/populations/seven-channel-ac-mechanical-relay/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/seven-channel-ac-mechanical-relay/attempt/versions/v14/seven-channel-ac-mechanical-relay-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->
