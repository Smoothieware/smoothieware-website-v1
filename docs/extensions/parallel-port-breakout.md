---
layout: default
title: "Parallel port breakout"
permalink: /extensions/parallel-port-breakout
---

# Parallel port breakout

{% include extension-board-visuals.html slug="parallel-port-breakout" %}

Expose 12 output and 5 input machine-control signals on a legacy DB25 interface, isolated and buffered from Smoothieboard V2.

## Additive digital-isolator candidate — 2026-10-13

Native **v21**, derived from retained v20, replaces nine dual optocoupler packages and their LED resistors with three ISO7760DWR digital isolators. Twelve outputs and five inputs, host/field domains, buffered signal polarity and disabled-output defaults remain. The four-layer outline remains 120 × 140 mm; native footprint count falls from 256 to 213. The non-F high-default isolators are intentional.

The retained candidate has zero native electrical-rule, full-track design-rule, connectivity, schematic/PCB parity and component-contract findings. Its four copper fabrication layers preserve the center isolation gap. Fresh populated/bare views and candidate manufacturing exports accompany the [engineering record](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v21/ENGINEERING.md). These checks do not establish machine safety: human run permission, host power, actual DB25 connector/harness, thermal, assembly and physical isolation remain unqualified. No firmware was changed. All older revisions remain available; the development snapshot below is historical.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v17 native checks are zero but only 4/39 bypass pairs meet package limits; 28 inherited via-drill/SMD and 12 annular-only assembly contacts remain, and checklist/physical gates are unsigned.

## Interfaces and wiring

### Inputs

- Two Y sockets plus one X socket from V2.
- Five DB25 return inputs from the machine side.

### Outputs

- Twelve isolated 5 V DB25 outputs.
- Five isolated 3.3 V-safe signals toward V2.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                           |
| ---: | ---------------------------------- |
|    1 | Port supply: +3.3 V on each socket |
|    2 | Port supply: +5 V on each socket   |
|    3 | Y1 GPIO1 / Y2 GPIO8 / X GPIO15     |
|    4 | Y1 GPIO2 / Y2 GPIO9 / X GPIO16     |
|    5 | Y1 GPIO3 / Y2 GPIO10 / X GPIO17    |
|    6 | Y1 GPIO4 / Y2 GPIO11 / X unused    |
|    7 | Y1 GPIO5 / Y2 GPIO12 / X unused    |
|    8 | Y1 GPIO6 / Y2 GPIO13 / X unused    |
|    9 | Y1 GPIO7 / Y2 GPIO14 / X unused    |
|   10 | Common V2-side GND on each socket  |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Isolation voltage, propagation delay and pulse rate are unresolved.
- Machine-side isolated power must be defined; isolation is invalid if grounds are casually joined.
- Startup and cable-disconnect states must disable motion.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Add DB25 ESD, input current limiting, isolated-domain spacing, output-enable pull-downs and short-circuit-aware buffers. Bond or RC-couple the connector shell only according to the chassis plan.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/component-review.md). Retain optocoupler/buffer design; defer ISO7760 as a new architecture, not a drop-in. Conditional V1 0603 resistor families only; no new revision. Current selected v17; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/parallel-port-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v18, v19, v20. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v18, v19, v20**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### parallel-port-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v20/parallel-port-breakout.kicad_pcb), SHA-256 `284b430acaf78a4715993d1324960ecef40e41263f1afd896fcd1318ba1ba894`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v20/populations/parallel-port-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v20/parallel-port-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v22 — 2026-10-13

Protected source v21; current PCB SHA-256 `2753ab9f5785c3f6db221b1a04c08cd505818b57094c1e4d2ca4213d3984c70a`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 57 historical files unchanged. Verified 198 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Protective-interface and current limits remain provisional Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
