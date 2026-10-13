---
layout: default
title: "D-sub-to-Gadgeteer OUT adapter"
permalink: /extensions/d-sub-to-gadgeteer-out
---

# D-sub-to-Gadgeteer OUT adapter

OUT is the remote, host-powered half of the custom nine-conductor extension.
Its female DE-9 connects only to the dedicated cable from
[IN](/extensions/d-sub-to-gadgeteer-in); its keyed 2 × 5, 1.27 mm Gadgeteer
header presents the seven signals and the transported +5 V and ground to one
downstream device. It regenerates Gadgeteer pin 1's +3.3 V locally from that
+5 V with a TPS70933DBVR. IN/OUT describe power flow, not signal direction:
the seven copper signal paths remain bidirectional. This is not RS-232,
level conversion, isolation, or a general DE-9 extension. Never attach a
computer serial port or another supply source.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Three power gaps/DRCexit5,five ignored categories,independent/physical open;lost attempt unknown.

## Interfaces and wiring

### Connection contract

The DE-9 cable carries exactly seven separate 3.3 V logic signals, one GND,
and one IN-fused +5 V. The upstream host's +3.3 V rail is absent. Gadgeteer
pin 1 receives only U1's locally generated +3.3 V; it is never paralleled
with the host rail. DE-9 shell and fasteners do not serve as ground and have
no intentional circuit-GND copper contact.

| DE-9 numbered contact | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OUT Gadgeteer pin | 3 | 4 | 5 | 6 | 10 | 7 | 8 | 9 | 2 |
| OUT net | SIG3 | SIG4 | SIG5 | SIG6 | GND | SIG7 | SIG8 | SIG9 | CABLE_5V |

IN uses the identical numbered map. The selected female DE-9 is candidate RS
PRO 528-3705; it mates cable pins. Confirm actual socket numbering from the
mating face, which mirrors the male and PCB solder views. Use only a verified
≤1.0 m, all-nine, contact-n-to-contact-n custom cable, with at least 26 AWG
+5 V and ground conductors. With power off, compensate meter leads and prove
each intended conductor <0.5 Ω, each unintended contact pair and every
contact-to-shell >1 MΩ. Measure loaded round-trip power drop. Forbid a
null-modem cable, unknown commercial serial cable, and hot plugging.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

[Current sealed-package review](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/component-review.md#current-sealed-package-reconciliation--2026-10-11): v19 retained;14 purchased MPNs match,114own/2562 historical hashes.22uF stock candidate remains conditional/uninstalled,no successor. Three power-gap findings/five ignored categories/physical and independent-review gates remain open; lost monitor outcome unknown.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/d-sub-to-gadgeteer-out`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v20, v21, v22. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v20, v21, v22**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### d-sub-to-gadgeteer-out

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/attempt/versions/v22/d-sub-to-gadgeteer-out.kicad_pcb), SHA-256 `6004776325c435a066f132d23f0151c4de6b27c5ecffafd32bfcf7bff6219842`.
- Last native check: **35 errors**, including **1 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `PinHeader_1x04_P2.54mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/attempt/versions/v22/populations/d-sub-to-gadgeteer-out/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/attempt/versions/v22/populations/d-sub-to-gadgeteer-out/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/attempt/versions/v22/d-sub-to-gadgeteer-out-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v26 — 2026-10-13

Protected source v25; current PCB SHA-256 `0ecb09617a1a22caf214f748eedec55577eb7fe3c1e5d47de3deaf39aacd816c`. Fresh native checks: zero enabled errors, opens, schematic mismatches and ERC findings; 2 PCB warnings remain. Electrical geometry/project rules unchanged; 109 historical files, 28 model entries,17 exports and12 current population images verified. All12 populated/bare views inspected. Full documentation URL remains absent; deliberate reflow is untested. Physical qualification remains open; no price or area savings claimed.
