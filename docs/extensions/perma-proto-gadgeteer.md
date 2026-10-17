---
layout: default
title: "Gadgeteer perma-proto breadboard"
permalink: /extensions/perma-proto-gadgeteer
---

# Gadgeteer perma-proto breadboard

{% include extension-board-visuals.html slug="perma-proto-gadgeteer" %}

Solderable breadboard-style prototyping board with thirty 2.54 mm columns, split five-hole groups and four horizontal power rails, plus Gadgeteer access. It is a soldered prototyping substrate, not a solderless breadboard.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Independent review remains pending; S010 inlet fuse/reverse protection, S011 inlet TVS and S052 GPIO ESD clamps absent; physical host/cable/DIP assembly and fabrication release open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/component-review.md). Retain passive solderable strips/rails; no exact stocked connector match or justified IC addition. Preserve v11; no new version. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/perma-proto-gadgeteer`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### perma-proto-gadgeteer

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/attempt/versions/v14/perma-proto-gadgeteer.kicad_pcb), SHA-256 `afc5f52c7b79c07806686a8a627b30953304d30e190b0f472ffa93b2d58d3675`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/attempt/versions/v14/populations/perma-proto-gadgeteer/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/attempt/versions/v14/perma-proto-gadgeteer-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v15 — 2026-10-13

Protected source v14; current PCB SHA-256 `f0a5a35ef2a6c7139b99ec6c0e3edc23f33dbd0b14519040985f8e5fc87bbf9b`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 2 PCB warnings. Electrical geometry, project rules and 91 historical files unchanged. Verified 1 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
