---
layout: default
title: "Raw pins breakout"
permalink: /extensions/raw-pins-breakout
---

# Raw pins breakout

{% include extension-board-visuals.html slug="raw-pins-breakout" %}

Expose one canonical Y-socket's ten contacts on a straight 2.54 mm header with one-to-one mapping and continuous GND. The v11 study adds seven bidirectional transient shunts on GPIO pins3–9.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v11 CAD checks are zero but system ESD/host survival, actual mating, assembly, cut-link states and checklist signoff remain open.

## Interfaces and wiring

### Inputs

- One canonical type-Y Gadgeteer port.

### Outputs

- One 1×10 2.54 mm header and one electrically parallel Y chain port.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. The retained exact native-host netlist extract confirms J32-J40 pins1=/3V3_LIMIT,2=/5V_LIMIT,10=GND, consistent with the canonical map. Actual host/cable orientation remains physically unqualified.

|  Pin | Function | Design note                                                        |
| ---: | -------- | ------------------------------------------------------------------ |
|    1 | +3.3 V   | Canonical fixed rail.                                              |
|    2 | +5 V     | Canonical fixed rail.                                              |
|    3 | GPIO!    | Board mapping; validate against current V2 hardware before layout. |
|    4 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    5 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    6 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    7 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    8 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|    9 | GPIO     | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND      | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Rails remain passive pass-throughs; the lowest-rated connector, trace, cable, or upstream source limits current. TVS parts do not establish receiver overvoltage or power-off protection.
- v04 candidate J1/J3: Samtec SHF-105-01-L-D-TH-LC; exact current/voltage ratings and actual mating cable remain UNVERIFIED. The earlier Amphenol/FCI 20021521-00010T1LF proposal is preserved in the baseline and remains unqualified.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Keying and pin-1 markings document mating intent; they do not establish ESD or miswire protection. ExposedGPIO lacks protection and no source-backed system exception exists. Any remedy requires actual host/receiver/exposure limits and a reviewed contract; do not choose arbitrary clamps.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/component-review.md). Keep passive one-to-one adapter and exact keyed connectors; retain seven conditional V2 LRC SOD-882 shunts already in v11; no further revision. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/raw-pins-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### raw-pins-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/attempt/versions/v14/raw-pins-breakout.kicad_pcb), SHA-256 `549a1e03471a84ac629584d24ff20ae573ad3d160b4e8a976890c446d67ba241`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/attempt/versions/v14/populations/raw-pins-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/attempt/versions/v14/raw-pins-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- second-round-annotation:start -->
## Second-round annotation candidate: v15

This saved engineering candidate updates revision labels and annotation styling while preserving the electrical geometry, schematic, project rules and baseline files. Independent current checks find **zero enabled board errors, open connections, parity errors and schematic-rule errors**; **0 board warnings** remain. Six current normal-population views and source-bound manufacturing/model hashes were verified for this board.

**The documentation URL is still absent from the board.** The automatic placement search found no readable clear area while retaining existing annotations; deliberate label reflow remains to be tried. This requirement is pending, and the revision does not establish assembly or fabrication qualification, area savings or priced savings.

- [Candidate PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/attempt/versions/v15/raw-pins-breakout.kicad_pcb), SHA-256 `1945f91b08a2d172178e9a79d10fa38c00cda04ff3cce7590c19a8ebc052c5a2`.
- [Changes and pending work](https://github.com/arthurwolf/extension-boards/blob/main/src/raw-pins-breakout/fancification-round2.md).

Earlier revision contracts and readbacks on this page remain historical. Physical connector fit, mounting, fault, current and thermal qualification remain open where applicable.
<!-- second-round-annotation:end -->
