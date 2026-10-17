---
layout: default
title: "D-sub-to-Gadgeteer IN adapter"
permalink: /extensions/d-sub-to-gadgeteer-in
---

# D-sub-to-Gadgeteer IN adapter

{% include extension-board-visuals.html slug="d-sub-to-gadgeteer-in" %}

IN is the host-side half of a custom nine-conductor extension. It accepts a
keyed 2 × 5, 1.27 mm Gadgeteer cable and presents a male DE-9 interface for a
dedicated cable to [OUT](/extensions/d-sub-to-gadgeteer-out). IN and OUT name
the power path, not signal direction. Use one host and one OUT; the assembly is
not an RS-232 interface, level converter, isolator, or general-purpose D-sub
extension. It must never be connected to a computer serial port.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Enabled native0;header-only purchasing BOM/blank native MPNs,partial STEP,five ignored categories/physical open.

## Interfaces and wiring

### Connection contract

The nine DE-9 contacts carry exactly seven independent signals, one ground,
and one fused +5 V conductor. Gadgeteer pin 1, the host +3.3 V rail, does not
enter the DE-9 or OUT board. Gadgeteer pin 2 supplies +5 V through IN's F1
fuse; pin 10 is the sole signal/power return. The DE-9 shell is not a tenth
conductor and has no intentional connection to circuit ground.

| DE-9 numbered contact | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gadgeteer pin | 3 | 4 | 5 | 6 | 10 | 7 | 8 | 9 | 2 |
| IN net | SIG3 | SIG4 | SIG5 | SIG6 | GND | SIG7 | SIG8 | SIG9 | CABLE_5V |

The OUT board uses this same numbered map. Confirm numbers from each actual
mating face; male, female, and PCB solder views are mirrored. Only a tested
nine-conductor straight-through cable is allowed: IN male mates a cable socket,
OUT female mates its cable pins, with contact *n* wired to *n* for all nine.
Maximum cable length is 1.0 m, with +5 V and ground conductors at least
26 AWG. Before first power, prove every intended contact is continuous below
0.5 Ω after test-lead compensation and all unintended contact/contact and
contact/shell combinations are above 1 MΩ. Measure loaded voltage drop too.
No null-modem, crossover, unidentified commercial serial cable, or hot plug.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

[Complete current review](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/component-review.md#current-v12-reconciliation--2026-10-11): actualv12 retains passive interface/fuse/shunts,no successor. Contract covers12 purchased/four testpad refs; purchasing BOMs are header-only and native BOM lacks MPNs. Enabled native checks0 do not close five ignored categories/partial STEP/physical gates.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/d-sub-to-gadgeteer-in`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### d-sub-to-gadgeteer-in

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/attempt/versions/v15/d-sub-to-gadgeteer-in.kicad_pcb), SHA-256 `7a72ed48cbca355e6bc8af0c96eb76fb9f7de3b17b1e5dce11204d4df78bf25e`.
- Last native check: **19 errors**, including **19 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/attempt/versions/v15/populations/d-sub-to-gadgeteer-in/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/attempt/versions/v15/populations/d-sub-to-gadgeteer-in/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/attempt/versions/v15/d-sub-to-gadgeteer-in-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v21 — 2026-10-13

Protected source v20; current PCB SHA-256 `645c020ac2b62be9a0653f16f9d5aaa4edf8a3726437a61c551a5e04eeb9b44a`. Fresh native checks: zero enabled errors, opens, schematic mismatches and ERC findings; 1 PCB warnings remain. Electrical geometry/project rules unchanged; 189 historical files, 88 model entries,17 exports and12 current population images verified. All12 populated/bare views inspected. Full documentation URL is readable in the current renders. Physical qualification remains open; no price or area savings claimed.

## Trusted-power compact correction

Engineering revision **v24** removes36 redundant trusted-input protection parts and restores the original23 ×29mm outline. A horizontal2.54mm alternative header and undersideSH connector share the compact bottom area. Native checks find no errors or open connections; each connector population has six renders with the fullDB9 shell framed. This remains an unqualified engineering design, not a fabrication release.
