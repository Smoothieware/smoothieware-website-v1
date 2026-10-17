---
layout: default
title: "FSR breakout board"
permalink: /extensions/fsr-breakout-board
---

# FSR breakout board

{% include extension-board-visuals.html slug="fsr-breakout-board" %}

Combine three force-sensitive resistor channels into one switch-like endstop/probe output.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

B2 uses the exact recovered B1 payload (ZIP SHA-256
`0846035ffe517efb0979d1c7e4dc4246608026ef1eff60f4048caa563691bc79`)
as its source preimage. B1 and B2 are proposed sources; no native execution is implied.
The current B2 choices below supersede conflicting B1/v01 study decisions in this
file without erasing their historical text. See
`attempt/repair-v02-b2-decisions.md` and the B2 source/transport manifests.

Board-specific qualification limits: 53 purchased identities/91 selected/487 historical hashes match; retained native0; comparator/MOSFET/host/FSR/physical open.

## Interfaces and wiring

### Inputs

- Three 2.54 mm two-pin FSR connectors.

### Outputs

- One keyed Signal/Ground/5 V digital endstop connector.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function | Design note                                 |
| ---: | -------- | ------------------------------------------- |
|    1 | +3.3 V   | Canonical fixed rail.                       |
|    2 | +5 V     | Canonical fixed rail.                       |
|    3 | N/A      | No Gadgeteer interface in this board scope. |
|    4 | N/A      | No Gadgeteer interface in this board scope. |
|    5 | N/A      | No Gadgeteer interface in this board scope. |
|    6 | N/A      | No Gadgeteer interface in this board scope. |
|    7 | N/A      | No Gadgeteer interface in this board scope. |
|    8 | N/A      | No Gadgeteer interface in this board scope. |
|    9 | N/A      | No Gadgeteer interface in this board scope. |
|   10 | GND      | Canonical fixed rail.                       |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- FSRs are variable resistors with device/mechanical variability; threshold values cannot be inferred.
- Output must be 5 V-tolerant and compatible with V2 endstop/probe behavior.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Series current limiting on sensor leads, ESD at connectors, reverse-safe output, and open/short sensor diagnostics where practical.

## Selected component architecture

[Selected v10 component review](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/component-review.md) reconciles all61 records/53 purchased identities and existing two V2 DCK migrations. Retain LMV339 threshold topology and conditional V1 bypass; no successor. Retained native0 does not qualify low-voltage VOL/MOSFET OFF margin, partial-power behavior, host allowance or FSR mechanics.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/fsr-breakout-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical first-program candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The historical first-program candidate is described below; second-round v18 results are recorded separately further down.

### fsr-breakout

- [Historical first-program PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/attempt/versions/v13/fsr-breakout.kicad_pcb), SHA-256 `d13557961032ad1b49eca2239f1ba95f9d37caa61876da2b2e02c597385885cf`.
- Last native check: **119 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J4 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/attempt/versions/v13/populations/fsr-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/attempt/versions/v13/populations/fsr-breakout/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/attempt/versions/v13/fsr-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round usability candidate: v18

Revision titles are corrected, the heading is separated from the connector map and two clipped labels are repaired. Native warnings fell3→1; one font-thickness warning remains. The existing complete website URL is retained.

Enabled native checks report zero errors/open connections/parity/ERC findings and one font-thickness warning. The protected v17 circuit, exact non-text electrical geometry, component placement, outline, schematic and electrical rule settings are unchanged. This is an annotation candidate, with no new components and no area or priced purchasing saving claimed.

All12 populated/bare top, bottom and isometric views across the existing normal and keyed STEMMA-family populations were hash-verified and inspected, with manufacturing exports, BOM and placement files regenerated from the current source. Select the connector and cable by the exact source pin map; matching connector shape does not establish interchangeable pin order or an I²C interface.

[Current v18 source](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/attempt/versions/v18/fsr-breakout.kicad_pcb), SHA-256 `3307c8f62d0f5c11d2e6573afdffc2e142d9411e8069efcaa84ab9bb9bcca759`. [Board-local second-round changes, ignored rules and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/fsr-breakout-board/fancification-round2.md).

Physical assembly, connector fit, actual host wiring, fault-state behavior and sensor qualification remain open. **Fabrication release remains false.**
