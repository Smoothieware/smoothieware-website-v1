---
layout: default
title: "HX711 load-cell amplifier"
permalink: /extensions/hx711-load-cell-amplifier
---

# HX711 load-cell amplifier

HX711 load-cell measurement adapter with separate load-cell screw terminals and keyed Gadgeteer host/chain connections. DOUT/data-ready and PD_SCK require the board-specific digital interface; this is not an I²C peripheral.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v11/48 purchased/82electrical refs;all86 exportMPNs blank;81 selected/779 historical hashes match;retained native0;analogue/host/independent/physical open.

## Interfaces and wiring

### Connection contract

Two keyed 2×5, 1.27 mm Gadgeteer headers on the west side: J1 HOST and J2 CHAIN. Load-cell screw terminals sit opposite on the east side. Host type Y follows the canonical Version16 table in project instructions. Pin1 is +3.3V, pin2 +5V, pin10 GND; pin3 is DOUT/data-ready to host and pin4 PD_SCK from host. Pins5–9 are unused locally and available to the downstream chain.

Every chain pin has its own service solder link. SJ3 and SJ4 are factory open to prevent accidental reuse of the occupied signal pins; the other eight links contain individually cuttable copper bridges. Cutting a downstream link must leave the local HX711 connected to J1. Power/ground links are service isolation features: never operate a downstream board with its ground cut while any supply or signal remains connected. Do not hot-plug.

The chain is pin-for-pin pass-through, not an addressed HX711 bus. HX711 has no chip select or bus address. Do not connect another push-pull DOUT to pin3. Multiple HX711s require separately assigned data/clock GPIOs or a separately designed multiplexer; firmware and multiplexers are outside v01 scope.

Required load-cell terminals: E+ excitation, E− return, A+ positive differential input, A− negative differential input and SHIELD. Also expose B+ and B− differential channel B, matching SparkFun's auxiliary channel capability. Terminal labels define function; wire colour is only a common convention and must be checked against the specific cell.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

[Current v11 review](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/component-review.md) reconciles82 electrical records/48 purchased components and nine existing V1-compatible bypass positions. Retain HX711 interface,no successor. All exported procurement identities remain blank; prior contract-only review is historical. Host/analogue/calibration/cut/independent/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/hx711-load-cell-amplifier`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### hx711_load_cell_amplifier

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/attempt/versions/v14/hx711_load_cell_amplifier.kicad_pcb), SHA-256 `debff5de27811e88addd769f8f6951dbb29df6cbe3c6ac84c0c7327387ec2ffe`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/attempt/versions/v14/populations/hx711_load_cell_amplifier/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/hx711-load-cell-amplifier/attempt/versions/v14/hx711_load_cell_amplifier-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v15 — 2026-10-13

Protected source v14; current PCB SHA-256 `010d1b11fb8a40958d97a924c319af1b75cfdf5e940a000dbc06d018764fbbc8`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 1 PCB warnings. Electrical geometry, project rules and 36 historical files unchanged. Verified 48 model entries, 19 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Trusted-power correction v16 — 2026-10-13

Removed the two reverse-polarity PFETs on keyed host supplies. Retained the TPS2553 load-cell output current limiter and analog excitation regulator. The original 59.25 × 48.05 mm outline is unchanged. Current source has zero native errors, opens, schematic mismatches or electrical-rule findings, with one inherited text-thickness warning. All six current populated/bare views, 46 model hashes and manufacturing exports were checked. Independent review and physical qualification remain open; this is not a fabrication release.
