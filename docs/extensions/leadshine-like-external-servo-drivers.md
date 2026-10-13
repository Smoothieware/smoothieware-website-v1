---
layout: default
title: "Leadshine-like external servo drivers"
permalink: /extensions/leadshine-like-external-servo-drivers
---

# Leadshine-like external servo drivers

Requirements placeholder for an external servo drive; no motor/control architecture is yet defined.

## Development status

**Second-round candidate accepted for engineering review — 2026-10-13.** The v20 package has current source-bound native checks, complete resolving model references, exports and six inspected normal-population/bare views. Newly recovered purple bodies are dimensioned principal-body prisms with contacts, voids and mating features omitted; they are not manufacturer or fit models. Inherited native findings and label crowding remain documented in the board work record. Hardware, electrical and mechanical qualification remain open; no fabrication release or priced saving is claimed.

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10/209purchased/87blank MPNs;56package/280later export hashes match;3dangling/66opens/five ignorecats/current/host/thermal/physical open.

## Interfaces and wiring

### Inputs

- Motor bus power, motion command, enable, and feedback interfaces all TBD

### Outputs

- Motor phases and fault/status all TBD

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Motor type, bus voltage/current, phase current, feedback levels, isolation, and braking energy are unresolved
- TMC6100 is only a three-phase PMSM/BLDC gate-driver candidate and is not a complete servo solution

## Selected component architecture

[Current v10 review](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/component-review.md) reconciles238records/209 purchased components and retained reference-level stock candidates. Retain TMC4671/TMC6100,no successor.87blank MPNs,three dangling tracks/66opens and current/fault/host/firmware/thermal/physical gates remain.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/leadshine-like-external-servo-drivers`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### servo-foc

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/attempt/versions/v13/servo-foc.kicad_pcb), SHA-256 `87f3517ade266bd0aa39a0c73f5fc6889dc314e69f5f8de6be7587a2917dd0b6`.
- Last native check: **128 errors**, including **75 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/attempt/versions/v13/populations/servo-foc/normal/population.json): 6 images; source current; image hashes match; 11 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-servo-drivers/attempt/versions/v13/servo-foc-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The latest third additive candidate replaces the input fuse with an LTC4368 automatic-retry electronic breaker and an external reverse/backfeed FET pair. It adds soft-start gate shaping, separate fault/overvoltage LEDs, a floating timer for blinking reverse indication, and individual solder links to disable status LEDs. Existing motor, host/isolation and mounting-pin contracts remain requirements.

This is an **unreleased implementation study**. Native opens/errors, shunt sourcing and Kelvin routing, FET linear SOA, continuous current/thermal limits, regeneration, input transients and enclosure compaction remain qualification gates. The controller does not support hot-plugging an externally powered output above 24 V; boards with a higher output domain still need a different qualified topology for that mode. Do not treat the candidate as approved for fabrication or motor operation. Exact source hashes and native checks are in the readback section and per-revision NATIVE-CHECKS.md.

## External servo driver v20 retained, acceptance withheld — 2026-10-13

The annotation-only v20 package is retained with current revision/title lettering, unchanged circuit/footprint geometry,1,291 historical files and four shared library files verified. Fresh native checks retain49opens; layout warnings56→55, schematic errors0. Parent reviewed all six current views and19export hashes: framing is complete, but11component bodies across three missing model types prevent render acceptance. Rear URL and title touch, and dense inherited reference legends remain. No approximate model substitution was made. Registration and physical/current/thermal/assembly qualification remain open.
