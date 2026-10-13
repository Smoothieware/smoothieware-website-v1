---
layout: default
title: "Leadshine-like external stepper drivers"
permalink: /extensions/leadshine-like-external-stepper-drivers
---

# Leadshine-like external stepper drivers

Research package for either an adapter to an existing external STEP/DIR drive or a new enclosed high-power Trinamic-based stepper drive; these are separate products.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10/54 purchased identities match;56package/280later export hashes match;11dangling/nineopens/five ignorecats/current/thermal/physical open.

## Interfaces and wiring

### Inputs

- S/Y STEP, DIR, ENABLE, SPI configuration and optional fault acknowledgement
- Motor bus supply and motor phases for new-drive variant

### Outputs

- Named external drive interface or motor phase outputs
- Fault/diagnostic feedback

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- TMC262 supports external MOSFET stepper designs up to 10 A/60 V; this is a component capability, not a board rating
- TMC2590 high-voltage examples demand dedicated gate-drive/layout/thermal engineering
- Current, bus voltage, isolation, cable length, and enclosure remain unresolved

## Selected component architecture

[Current v10 review](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/component-review.md) covers71records/54 purchased identities and existing V2 TMC2590/V1 inverter candidates. Retain architecture/conditional bypass,no successor. DCK stock does not fit selected DBV arrays;11dangling tracks/nineopens/host/current/thermal/isolation/physical gates remain.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/leadshine-like-external-stepper-drivers`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### leadshine-drive

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/attempt/versions/v13/leadshine-drive.kicad_pcb), SHA-256 `9c0115487d5a7264c0bc17e5489a0dc01c75698d18518d4d10cedec5feabcabb`.
- Last native check: **33 errors**, including **33 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/attempt/versions/v13/populations/leadshine-drive/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/leadshine-like-external-stepper-drivers/attempt/versions/v13/leadshine-drive-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The latest third additive candidate replaces the input fuse with an LTC4368 automatic-retry electronic breaker and an external reverse/backfeed FET pair. It adds soft-start gate shaping, separate fault/overvoltage LEDs, a floating timer for blinking reverse indication, and individual solder links to disable status LEDs. Existing motor, host/isolation and mounting-pin contracts remain requirements.

This is an **unreleased implementation study**. Native opens/errors, shunt sourcing and Kelvin routing, FET linear SOA, continuous current/thermal limits, regeneration, input transients and enclosure compaction remain qualification gates. The controller does not support hot-plugging an externally powered output above 24 V; boards with a higher output domain still need a different qualified topology for that mode. Do not treat the candidate as approved for fabrication or motor operation. Exact source hashes and native checks are in the readback section and per-revision NATIVE-CHECKS.md.

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `655ca3c405ac418a2565ec6fe286c87efcf9c9c56107569caf24e8e44d727163`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 10 PCB warnings. Electrical geometry, project rules and 107 historical files unchanged. Verified 87 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Functional isolation only; VM 18-32V and 36V absolute maximum; provisional 2.3A RMS, thermal and regenerative PSU-sink limits remain unqualified Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
