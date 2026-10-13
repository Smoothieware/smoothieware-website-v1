---
layout: default
title: "Breadboard board"
permalink: /extensions/breadboard-board
---

# Breadboard board

Expose a Y Gadgeteer port safely to solderless-breadboard rows for prototyping, with an explicit choice between horizontal signal-only and vertical rail-connected variants.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Actual**v10** retains two TPS2553DBVR auto-retry rail limiters and two already adopted V2 TPD4E1U06DCKR arrays. See [complete37-record/29-purchased review](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/component-review.md). No new version. Actual C1–C4 are1uF0603: stocked100nF is not a substitute. Earlier draft below remains historical context.

Board-specific qualification limits: Native clean retained;80checklist/host-current/backfeed/physical gates open.

## Interfaces and wiring

### Inputs

- One Y socket.
- Optional external breadboard supply only through an exclusive source-selection design.

### Outputs

- Seven GPIO rows plus labelled 3.3 V, 5 V and ground rails.

### Connection contract

The following is the repository-canonical 10-pin mapping for the selected/candidate socket arrangement. Pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. Current V2 Prime documentation describes a different physical rail placement; do not create footprints, cables, or copper until the real target hardware is inspected and this discrepancy is closed.

|  Pin | Function                                   |
| ---: | ------------------------------------------ |
|    1 | +3.3 V to labelled protected rail          |
|    2 | +5 V to separately labelled protected rail |
|    3 | GPIO1 row                                  |
|    4 | GPIO2 row                                  |
|    5 | GPIO3 row                                  |
|    6 | GPIO4 row                                  |
|    7 | GPIO5 row                                  |
|    8 | GPIO6 row                                  |
|    9 | GPIO7 row                                  |
|   10 | GND rail                                   |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Breadboard rail topology/orientation is not standardized; the target product must be measured.
- Header power budget remains TBD.
- No arbitrary experimental fault can be guaranteed harmless.
- 3.3 V and 5 V rails must never be adjacent without unmistakable marking/keying.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Independent rail current limiting, exclusive external/host source selection, polarity protection and series resistance footprints for GPIO only if signal requirements permit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/breadboard-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### breadboard

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/attempt/versions/v13/breadboard.kicad_pcb), SHA-256 `5a852da831f811411bf352b3033200d9ad2b3506ecbfb8116a9345ef0f69e9d2`.
- Last native check: **87 errors**, including **5 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/attempt/versions/v13/populations/breadboard/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/attempt/versions/v13/breadboard-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v18 — 2026-10-13

Protected source v17; current PCB SHA-256 `be3d2c783b8f0d550a50af398a2581c5fb8ff50fd7f071b46dec2178249b3b2a`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 28 PCB warnings. Electrical geometry, project rules and 83 historical files unchanged. Verified 29 model entries, 17 exports and 6 current population views, all inspected. Documentation URL placement pending. Documentation URL placement pending Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
