---
layout: default
title: "Opto-isolation pass-through board"
permalink: /extensions/opto-isolation-pass-through-board
---

# Opto-isolation pass-through board

Provide galvanic isolation for a deliberately defined set of seven extension signals; arbitrary reversible Gadgeteer isolation is not electrically well-defined.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native checks clean per v12 disposition; independent final review and physical isolation/timing/return-path and full checklist qualification remain open.

## Interfaces and wiring

### Inputs

- One host-side manufacturer-specific Z connector.
- One isolated-side power source or certified isolated converter.

### Outputs

- One peripheral-side Z connector with a fixed documented mapping.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function     | Design note                                                        |
| ---: | ------------ | ------------------------------------------------------------------ |
|    1 | +3.3 V       | Canonical fixed rail.                                              |
|    2 | +5 V         | Canonical fixed rail.                                              |
|    3 | PROFILE_SIG1 | Board mapping; validate against current V2 hardware before layout. |
|    4 | PROFILE_SIG2 | Board mapping; validate against current V2 hardware before layout. |
|    5 | PROFILE_SIG3 | Board mapping; validate against current V2 hardware before layout. |
|    6 | PROFILE_SIG4 | Board mapping; validate against current V2 hardware before layout. |
|    7 | PROFILE_SIG5 | Board mapping; validate against current V2 hardware before layout. |
|    8 | PROFILE_SIG6 | Board mapping; validate against current V2 hardware before layout. |
|    9 | PROFILE_SIG7 | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND          | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Passing ground defeats galvanic isolation for ground-related faults; 5 V/GND jumpers must state bypass mode explicitly.
- Optocoupler propagation delay/asymmetry must meet the declared protocol rate.
- 3.3 V must exist on both sides if required; footnote [ad] says prior art omitted it.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Certified isolation barrier/slot, ESD on cable sides, current limiting, no back-power through I/O, and standards-derived creepage/clearance.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/component-review.md). Retain ISOW7741+ISO7730 and selected DBVR protection package; use only qualified V1 support passives, reject unverified 0402/package swaps; no new revision. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/opto-isolation-pass-through-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### opto-isolation

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/attempt/versions/v15/opto-isolation.kicad_pcb), SHA-256 `1391ea5f525ae65a7e3ff293d9e079a63f96d6afb677f534af536b5a95fffa9c`.
- Last native check: **78 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/attempt/versions/v15/populations/opto-isolation/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/attempt/versions/v15/opto-isolation-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v20 — 2026-10-13

Protected source v19; current PCB SHA-256 `c46abee9f37e1049f40615f40ed71a64b483364132e17026c525ac9dd170f0d2`. Fresh checks: zero enabled errors/opens/parity/ERC findings; 0 PCB warnings. Electrical geometry, project rules and 73 historical files unchanged. Verified 32 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Heavy title font pending; readable uppercase stroke font retained Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
