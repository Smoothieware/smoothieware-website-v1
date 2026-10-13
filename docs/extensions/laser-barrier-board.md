---
layout: default
title: "Laser barrier board"
permalink: /extensions/laser-barrier-board
---

# Laser barrier board

Paired modulated optical emitter and receiver for tool-presence checking or non-certified machine interlock experiments.

## Development status

**Current retained engineering revision: v20, 2026-10-13.** Both emitter and receiver have current CAD and connector-population packages; this is a partial repair with fabrication release withheld.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The v20 emitter repairs its LED-disable branch short, mounting keepout crossings and missing layer connection: fresh native checks report zero enabled errors/opens, nine inherited silk/text warnings, zero schematic-parity errors and zero electrical-rule errors. Receiver circuitry is unchanged and retains **23 enabled errors: 20 opens and three starved thermal connections**, plus four text-thickness warnings. The paired board is therefore not electrically clean or fabrication-ready.

Normal and STEMMA populations each have six inspected views per role (24 images total); all 114 declared model instances resolve. Source-bound exports include both copper layers, drills, BOM/positions and schematic documentation. Rendering does not establish physical connector fit: alternate bodies overhang the board edge. Optical performance, assembly, current/thermal limits, cable/enclosure fit and host compatibility remain unqualified. Five inherited native rule categories remain ignored; no rule relaxation or new exclusions were used.

## Interfaces and wiring

### Inputs

- Protected power/control for emitter
- Optical beam at receiver

### Outputs

- Protected standard input/X beam-valid or fault state

### Connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function             |
| ---: | --------------------- | ----------------------------- |
|    1 | +3.3V                 | +3.3 V rail                   |
|    2 | +5V                   | +5 V rail                     |
|    3 | GPIO! / type-specific | Beam fault/status             |
|    4 | type-specific         | Emitter enable optional       |
|    5 | type-specific         | Receiver diagnostics optional |
|    6 | type-specific         | N/C                           |
|    7 | type-specific         | N/C                           |
|    8 | type-specific         | N/C                           |
|    9 | type-specific         | N/C                           |
|   10 | GND                   | Ground                        |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Wavelength, optical power/class, emitter current, distance, receiver bandwidth, and response time are unresolved
- Laser classification and current driver must match selected diode
- Receiver threshold must have controlled hysteresis and fail-safe polarity

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Emitter current limit and thermal protection
- ESD on cabled interfaces
- Receiver output biased to fault when unpowered
- Physical beam enclosure/aperture for ambient rejection

## Selected component architecture

[Current v16 pair review](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/component-review.md) covers78records/57 purchased refs and existing TSSP4038/HC14/seven V1 bypass improvements. No successor. Receiver19opens,17blank purchasing MPNs,five ignored categories and14 stale historicalv01 render hashes remain explicit;waveform/optical/host/physical qualification open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/laser-barrier-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v17, v18, v19. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v17, v18, v19**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### emitter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/emitter/emitter.kicad_pcb), SHA-256 `551520503fbc859bdcfcaa6101d5562720e1088a30a5ce45a18e7471b7683b33`.
- Last native check: **8 errors**, including **1 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/emitter/populations/emitter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/emitter/populations/emitter/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/emitter/emitter-fancification-revision.md).

### receiver

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/receiver/receiver.kicad_pcb), SHA-256 `8ee9b553a7439fe714328d832940f390ff9b51b164f0feed29bc1bc861552448`.
- Last native check: **23 errors**, including **20 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J2 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/receiver/populations/receiver/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/receiver/populations/receiver/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/laser-barrier-board/attempt/versions/v19/receiver/receiver-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Parent-verified laser-barrier v20 partial repair — 2026-10-13

Independent baseline/candidate checks show emitter geometric errors 7 to 0 and opens 1 to 0, with warnings 10 to 9. Receiver remains 3 geometric errors and 20 opens, unchanged; both roles have zero schematic/parity findings. All 24 current normal/STEMMA-PH images were inspected, with 114 resolving model references and 34 exports hash-verified. Complete framing is verified; inherited crowded labels, connector overhang/fit and documentation URL silk placement remain open. Frozen 218-file preservation and current 85-file v19 stability pass; the implementation did not persist a complete original 85-file pre-job ledger, so that stronger preservation claim is unverified. Registered as a partial family repair only; no fabrication or physical qualification.
