---
layout: default
title: "Intel Edison breakout"
permalink: /extensions/intel-edison-breakout
---

# Intel Edison breakout

Historical record only for a discontinued Intel Edison carrier concept.

## Development status

**Second-round candidate accepted for engineering review — 2026-10-13.** The v20 package has current source-bound native checks, complete resolving model references, exports and six inspected normal-population/bare views. Newly recovered purple bodies are dimensioned principal-body prisms with contacts, voids and mating features omitted; they are not manufacturer or fit models. Inherited native findings and label crowding remain documented in the board work record. Hardware, electrical and mechanical qualification remain open; no fabrication release or priced saving is claimed.

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12/33 purchased/32 identity strings match/1 stock blank;71 selected/944 historical hashes;DRC1/connector peak/host/reset/USB/physical open.

## Interfaces and wiring

### Inputs

- Historical U Gadgeteer and optional 5–24 V proposal; inactive

### Outputs

- Historical Edison dense connector; inactive

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function |
| ---: | --------------------- | ----------------- |
|    1 | +3.3V                 | +3.3 V rail       |
|    2 | +5V                   | +5 V rail         |
|    3 | GPIO! / type-specific | N/C — inactive    |
|    4 | type-specific         | N/C — inactive    |
|    5 | type-specific         | N/C — inactive    |
|    6 | type-specific         | N/C — inactive    |
|    7 | type-specific         | N/C — inactive    |
|    8 | type-specific         | N/C — inactive    |
|    9 | type-specific         | N/C — inactive    |
|   10 | GND                   | Ground            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- All Edison voltage, sequencing, current, and level-shifting values are intentionally unresolved
- Intel marks the complete Edison series discontinued

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- None designed; revival requires a full power-sequencing and protection review

## Selected component architecture

[Current v12 review](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/component-review.md) covers52records/33 purchased components and existing V1 R5 discharge class. Retain dedicated power/translator,no successor. One MOD1 DRC finding,connector peak/host allowance,procurement/reset/USB/stackup/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/intel-edison-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### intel-edison-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/attempt/versions/v15/intel-edison-breakout.kicad_pcb), SHA-256 `a9d668dc4ef61ece34c696398bb00c35dfa2be73dc42c846280fa606968a970f`.
- Last native check: **14 errors**, including **11 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/attempt/versions/v15/populations/intel-edison-breakout/normal/population.json): 6 images; source current; image hashes match; 1 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/intel-edison-breakout/attempt/versions/v15/intel-edison-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->
