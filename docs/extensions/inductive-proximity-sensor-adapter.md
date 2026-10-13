---
layout: default
title: "Inductive proximity sensor adapter (level shifter)"
permalink: /extensions/inductive-proximity-sensor-adapter
---

# Inductive proximity sensor adapter (level shifter)

Safely translate a qualified 12–24 V three-wire inductive sensor into a standard Smoothie endstop/probe signal.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v14/22 purchased/20 named MPNs match/2 stock blanks;64 selected/756 historical hashes;retained native0;stock resistor derating/field/CTR/physical open.

## Interfaces and wiring

### Inputs

- 12–24 V DC power on 3.5 mm two-pole terminal.
- Three-wire sensor on 3.5 mm terminal.

### Outputs

- One 2.54 mm keyed Signal/Ground/5 V endstop connector.

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

- Footnote [t] expands design to 12–24 V.
- Input current/threshold depends on the selected sensor class.
- Isolation cannot coexist with an undocumented common ground.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Reverse polarity, field fuse/current limit, TVS after surge definition, input resistor power margin, isolation slot, and output clamp.

## Selected component architecture

[Current v14 review](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/component-review.md) covers30records/22 purchased components;existing V1 RLN/RLP stock-class adoption retained,actual reel power/derating unresolved. Retain optocoupler sensor matrix,no successor. C1 requires100V;50V stock bypass is not an equivalent substitute. Host/fault/CTR/isolation/independent/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/inductive-proximity-sensor-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v15, v16, v17. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v15, v16, v17**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### inductive-proximity-sensor-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/attempt/versions/v17/inductive-proximity-sensor-adapter.kicad_pcb), SHA-256 `83bdb8bc87f8039a5edbb7c13a7f00ad22788be1044e58fc2df1bc774688531b`.
- Last native check: **201 errors**, including **83 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/attempt/versions/v17/populations/inductive-proximity-sensor-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/attempt/versions/v17/populations/inductive-proximity-sensor-adapter/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/inductive-proximity-sensor-adapter/attempt/versions/v17/inductive-proximity-sensor-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v22 — 2026-10-13

Protected source v21; current PCB SHA-256 `4272b2e4705d6038e30e35a279c45e193fd07387c74b327803cc2823c5137cc9`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 101 PCB warnings. Electrical geometry, project rules and 113 historical files unchanged. Verified 118 model entries, 17 exports and 12 current population views, all inspected. Documentation URL placement pending. Documentation URL placement pending; crowded inherited rear instructions and one schematic warning remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
