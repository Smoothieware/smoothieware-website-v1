---
layout: default
title: "Single-Channel Large MOSFET output"
permalink: /extensions/single-channel-large-mosfet-output
---

# Single-Channel Large MOSFET output

Switch one 5–24 V high-current DC load with a qualified continuous rating of at least 12.5 A.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12 retained native/ordinaryassembly0;20A fuse/15Aconnector coordination,reverseinput/TVS/freewheel/currentthermal/host/physical unqualified.

## Interfaces and wiring

### Inputs

- One keyed 2.54 mm logic connector.
- One dedicated 5–24 V high-current DC input.

### Outputs

- One dedicated high-current load connector.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- 12.5 A minimum continuous target requires a stated ambient, airflow, copper weight, and temperature-rise limit.
- Upstream connector power must not feed the load.
- The saved candidate selects XT30PW connectors following footnotes [i]/[j]. Their current rating, mating polarity and temperature rise still require qualification of the assembled board.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

CB61F 20 A surface-mount fuse, SMDJ28A on EXT_RAW before the fuse, flyback diode and gate clamp are selected candidates. The fuse land remains provisional and the manufacturer discourages hand soldering. The TVS provides no DC overvoltage cutoff; reverse-input crowbar interruption, connector/fuse coordination and inductive energy limits remain open. No temperature sensor is populated. TP8 is a copper-only raw-input observation pad excluded from BOM and component placement in v12.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/component-review.md). Retain UCC27517A/CSD18536 single low-side output;TPS274C65 high-side four-channel part changes target. Existing V1 Molex J1 and C2/C3 bypass reuse retained,no successor. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/single-channel-large-mosfet-output`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### large-mosfet

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/attempt/versions/v15/large-mosfet.kicad_pcb), SHA-256 `fe1a8ac86ef8994f01459acae322a4d9b3c8a6d7dc0827ac005e509b967e4cdd`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/attempt/versions/v15/populations/large-mosfet/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/attempt/versions/v15/large-mosfet-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v16 — 2026-10-13

Protected source v15; current PCB SHA-256 `83ed5a1a58f80365e943c2f0fa1cccbc5eb93c2b00a9f2865be764908b9744d7`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 38 PCB warnings. Electrical geometry, project rules and 43 historical files unchanged. Verified 52 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited 35 footprint-symbol mismatches remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Compact external-input protection v17 — 2026-10-13

The latest compact engineering candidate retains the user-wired XT30 input's electronic fuse, reverse blocking, overvoltage cutoff, soft start and indicators, together with functional load protection. Its outline returns from 74 × 100 mm to **74 × 49 mm**; all electrical components remain, while the two annex mounting holes are removed. The host interface remains **5–12 V and is not STEMMA**.

Fresh full-track native checks find **zero errors and zero open connections**; schematic ERC has zero findings. The same 35 inherited footprint-symbol parity findings and two inherited text-thickness warnings remain. All six normal-population views were freshly rendered and inspected, with 52 resolved model entries and source-bound manufacturing, BOM and schematic exports. PCB SHA-256: `dbfb894793146078da94db5ee595084e2ff4094c99664acd77fa4e952222516e`.

[Current review and remaining qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/attempt/versions/v17/compact-power-review.json) · [Current six-view render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-large-mosfet-output/attempt/versions/v17/populations/large-mosfet/normal/population.json). Current, thermal, Kelvin sensing, inrush/short-circuit energy and physical connector-fit qualification remain open; **fabrication release is false**.

## Remote zero-warning publication gate — 2026-10-13

The local verification of v17 above predates the required remote PCB execution policy. Its retained full native report has 2 warning(s): TrueType text-thickness. It therefore does **not** satisfy the new zero-violation remote publication gate. The supplied sources and six-view render evidence remain preserved. A portable additive repair helper is prepared, but its PCB output and same-font text repair are unverified until the pinned remote KiCad dependency is installed and the remote native checks succeed. Fabrication release remains **false**.
