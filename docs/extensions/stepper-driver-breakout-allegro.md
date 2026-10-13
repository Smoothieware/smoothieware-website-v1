---
layout: default
title: "Stepper motor driver breakout board (Allegro)"
permalink: /extensions/stepper-driver-breakout-allegro
---

# Stepper motor driver breakout board (Allegro)

Add one on-board A5984 bipolar stepper driver controlled by a Smoothie V2 extension port.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v11 retained strictnative/ordinaryassembly0;12thermalPTHcases and101checklist unsigned,currentthermal/host/stock/physical open.

## Interfaces and wiring

### Inputs

- Y GPIO mapping, provisional until control-mode requirements are fixed.
- Motor supply through XT30; range limited by exact A5984 datasheet/package.

### Outputs

- A+/A−/B+/B− motor connector and fault indication to host.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function  | Design note                                                        |
| ---: | --------- | ------------------------------------------------------------------ |
|    1 | +3.3 V    | Canonical fixed rail.                                              |
|    2 | +5 V      | Canonical fixed rail.                                              |
|    3 | ENABLE    | Board mapping; validate against current V2 hardware before layout. |
|    4 | STEP      | Board mapping; validate against current V2 hardware before layout. |
|    5 | DIR       | Board mapping; validate against current V2 hardware before layout. |
|    6 | MS1       | Board mapping; validate against current V2 hardware before layout. |
|    7 | MS2       | Board mapping; validate against current V2 hardware before layout. |
|    8 | MS3/DECAY | Board mapping; validate against current V2 hardware before layout. |
|    9 | FAULT     | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND       | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Current limit depends on sense resistors, package, copper, airflow, and temperature.
- The source specifies four layers and 12–24 V context but gives no current target.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Fuse, reverse polarity, TVS after surge definition, bulk/ceramic capacitance, thermal pad/vias, and safe motor connector.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/component-review.md). Retain A5984GLPTR-T,exact existing V1 driver reuse;DRV8424/TMC5160changecurrent/power/firmwarecontract. Conditional V1 bypass/pullfamilies only,no successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/stepper-driver-breakout-allegro`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### stepper-driver-allegro

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/attempt/versions/v14/stepper-driver-allegro.kicad_pcb), SHA-256 `be2b6da5b3ce1db07d760cb0548012b80f50ca95f8402899ee774d98b0e3214a`.
- Last native check: **34 errors**, including **34 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/attempt/versions/v14/populations/stepper-driver-allegro/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-allegro/attempt/versions/v14/stepper-driver-allegro-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The latest third additive candidate replaces the input fuse with an LTC4368 automatic-retry electronic breaker and an external reverse/backfeed FET pair. It adds soft-start gate shaping, separate fault/overvoltage LEDs, a floating timer for blinking reverse indication, and individual solder links to disable status LEDs. Existing motor, host/isolation and mounting-pin contracts remain requirements.

This is an **unreleased implementation study**. Native opens/errors, shunt sourcing and Kelvin routing, FET linear SOA, continuous current/thermal limits, regeneration, input transients and enclosure compaction remain qualification gates. The controller does not support hot-plugging an externally powered output above 24 V; boards with a higher output domain still need a different qualified topology for that mode. Do not treat the candidate as approved for fabrication or motor operation. Exact source hashes and native checks are in the readback section and per-revision NATIVE-CHECKS.md.

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `8f4e72c642f4b7e81bf931f37e0f6b8d1ae1c7413a207553b2680703b1ac0170`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 18 PCB warnings. Electrical geometry, project rules and 130 historical files unchanged. Verified 68 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited dense connector and component annotations remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Accepted compact source revision v19 — 2026-10-13

This supersedes the incomplete scratch studies above. The outline is 52 × 56 mm, reduced from 76 × 105 mm; the original 52 × 46 mm outline required a 10 mm height allowance for the retained power packages and mounting/through-hole constraints. This is a verified feasible layout, not a proven minimum. All electrical components and the existing four-layer stack remain. Required protection of the user-wired motor input remains; no trusted-host duplicate circuit was removed. Original motor-output, VMOT and sense-load copper is retained. Local supply paths are 2 mm input, 3 mm FET source and 4 mm shunt; the inherited 1 mm reverse-FET bottleneck remains.

PCB SHA-256 `d5563528f89d16026aabe229d566e161f0bfa3f7da780df8dfb58e43935d449f`. Full native before/after checks: zero errors, zero opens, zero schematic-parity differences and zero ERC violations. No rule suppression added. Source-bound manufacturing exports include all four copper layers, paste, drill, positions, BOM and schematic. The normal connector population has six final views, all pixel-reviewed; 68 model entries resolve, with 0 missing. Obsolete dashed annex boundaries are removed.

Fabrication release remains **false**. Current rating, shunt Kelvin behavior, FET SOA, thermal behavior, regeneration, fault energy and physical assembly fit remain unqualified. LTC4368 externally powered output hot-plug above 24 V remains unsupported.

## Remote zero-warning publication gate — 2026-10-13

The local verification of v19 above predates the required remote PCB execution policy. Its retained full native report has 13 warning(s): silkscreen overlap/clipping, TrueType text-thickness, a duplicate same-net drill and dangling control spurs. It therefore does **not** satisfy the new zero-violation remote publication gate. The supplied sources and six-view render evidence remain preserved. A portable additive repair helper is prepared, but its PCB output and same-font text repair are unverified until the pinned remote KiCad dependency is installed and the remote native checks succeed. Fabrication release remains **false**.
