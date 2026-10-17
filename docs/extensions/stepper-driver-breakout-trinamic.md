---
layout: default
title: "Stepper motor driver breakout board (Trinamic)"
permalink: /extensions/stepper-driver-breakout-trinamic
---

# Stepper motor driver breakout board (Trinamic)

{% include extension-board-visuals.html slug="stepper-driver-breakout-trinamic" %}

Add one TMC2660-controlled bipolar stepper channel using STEP/DIR plus SPI configuration on one extension cable.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v11 strictnative/ordinaryassembly0;99checklistunsigned,precision sense/motorpower/firmware/reel/physical open.

## Interfaces and wiring

### Inputs

- Manufacturer-specific Z Gadgeteer mapping carrying STEP, DIR, ENABLE/CS, MOSI, MISO, SCK as finalized.
- 5–30 V motor power through XT30.

### Outputs

- One bipolar stepper motor output and diagnostic return.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function | Design note                                                        |
| ---: | -------- | ------------------------------------------------------------------ |
|    1 | +3.3 V   | Canonical fixed rail.                                              |
|    2 | +5 V     | Canonical fixed rail.                                              |
|    3 | ENABLE   | Board mapping; validate against current V2 hardware before layout. |
|    4 | STEP     | Board mapping; validate against current V2 hardware before layout. |
|    5 | DIR      | Board mapping; validate against current V2 hardware before layout. |
|    6 | CS       | Board mapping; validate against current V2 hardware before layout. |
|    7 | MOSI     | Board mapping; validate against current V2 hardware before layout. |
|    8 | MISO     | Board mapping; validate against current V2 hardware before layout. |
|    9 | SCK      | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND      | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- TMC2660 supports 5–30 V and up to the vendor-stated 2.8 A operating current; actual board rating needs thermal validation.
- Gadgeteer 5 V fallback may power logic only, never VMOT.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Fuse, reverse polarity, TVS after surge definition, local bulk/ceramic capacitance, thermal shutdown exposure, and motor-connector transient containment.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/component-review.md). Retain TMC2660-PA STEP/DIR+SPI,matching V2P11 genericTMC2660/LQFP44family;exactPAorder/reel unproven. Five100nF50V0603capacitors already consolidated to V1-compatible family,no successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/stepper-driver-breakout-trinamic`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### tmc2660-stepper

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/attempt/versions/v14/tmc2660-stepper.kicad_pcb), SHA-256 `99d1378445db9509f2939f15bc8ce3c29530ad5bd2f2748ffcb5164fc550b37b`.
- Last native check: **14 errors**, including **5 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/attempt/versions/v14/populations/tmc2660-stepper/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/stepper-driver-breakout-trinamic/attempt/versions/v14/tmc2660-stepper-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The latest third additive candidate replaces the input fuse with an LTC4368 automatic-retry electronic breaker and an external reverse/backfeed FET pair. It adds soft-start gate shaping, separate fault/overvoltage LEDs, a floating timer for blinking reverse indication, and individual solder links to disable status LEDs. Existing motor, host/isolation and mounting-pin contracts remain requirements.

This is an **unreleased implementation study**. Native opens/errors, shunt sourcing and Kelvin routing, FET linear SOA, continuous current/thermal limits, regeneration, input transients and enclosure compaction remain qualification gates. The controller does not support hot-plugging an externally powered output above 24 V; boards with a higher output domain still need a different qualified topology for that mode. Do not treat the candidate as approved for fabrication or motor operation. Exact source hashes and native checks are in the readback section and per-revision NATIVE-CHECKS.md.

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `51d7394917d15cb8b97ef785ab3140e9facfe5243ba10d9cbbe412ffcbe949f5`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 5 PCB warnings. Electrical geometry, project rules and 101 historical files unchanged. Verified 73 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Five inherited ignored PCB categories remain; assembly/thermal/current qualification open Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Compact protection revision v19 — 2026-10-13

The engineering candidate reduces the outline from 76 × 109 mm to 55 × 62 mm while retaining all 94 footprints, external-input protection and the original motor-output and motor-supply copper. The existing four-layer stack and mounting datums are preserved. Source PCB SHA-256: `d34b82229913ce7fdc1dbb9def9f557b8cdbc50a9a743225cdec61872aae1d46`.

Fresh native checks report zero PCB errors, unconnected items, schematic-parity differences and ERC errors; one inherited text-thickness warning remains. All six normal-connector render views were inspected. All 73 model entries and the source-bound BOM, four-copper-layer Gerbers, paste, drill, placement and schematic exports were verified. Revision-local review files and `trusted-power.md` record the implementation and evidence.

This is not fabrication-qualified. FET safe operating area, shunt/Kelvin routing, regeneration, continuous current, thermal behavior and physical connector fit remain open. In particular, the inherited LTC4368 topology does not support hot-plugging an externally powered output above 24 V; that operating mode needs a qualified topology before fabrication.

## Remote zero-warning publication gate — 2026-10-13

The local verification of v19 above predates the required remote PCB execution policy. Its retained full native report has 1 warning(s): TrueType text-thickness. It therefore does **not** satisfy the new zero-violation remote publication gate. The supplied sources and six-view render evidence remain preserved. A portable additive repair helper is prepared, but its PCB output and same-font text repair are unverified until the pinned remote KiCad dependency is installed and the remote native checks succeed. Fabrication release remains **false**.
