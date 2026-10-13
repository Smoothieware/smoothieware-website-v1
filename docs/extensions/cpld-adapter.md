---
layout: default
title: "CPLD adapter"
permalink: /extensions/cpld-adapter
---

# CPLD adapter

Programmable-logic motion-interface study using a Lattice MachXO2 LCMXO2-640HC-4SG48C. Hardware output permission and a bounded host/field pin contract remain separate from the proposed HDL behavior.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: 36opens,OE/backdrive/HDL/timing/width/nine thermal contacts/physical unresolved;independent_review false.

## Interfaces and wiring

### Connection contract

The complete host/J2 pin tables are in [specs.md](/extensions/cpld-adapter). Preserve canonical Gadgeteer rails1/2/10 and board-view directions. No pass-through or default chain is provided because this board transforms motion signals. JP1 is shipped open and permits an HDL-dependent bypass request; it never bypasses the hardware output permit. R33/R34 are shipped fitted and changed only with both boards unpowered.

Retain requested 60 mA / 40 mA rail shares until the host confirms allocation. Do not copy the platform 3 A headline into a per-header budget. Effective ceramic capacitance, oscillator current, FPGA dynamic current, three simultaneous output shorts and inrush remain source/calculation/bench obligations. R21–R23 nominal short dissipation 5 V² / 330 Ω = 75.76 mW before voltage/tolerance/ambient margin; this does not prove survival of every fault in 100 mW 0603 parts.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Selected component architecture

[Complete current component review](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/component-review.md#current-v11-exhaustive-reconciliation--2026-10-11): actualv11 retains deterministic CPLD and current population as rejected study,no successor.36opens,OE/backdrive concern,HDL/timing/width/nine thermal contacts and physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/cpld-adapter`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### cpld-adapter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/attempt/versions/v14/cpld-adapter.kicad_pcb), SHA-256 `70ad08a49ae34b3ba6590faf73c19126f203ae4b315db734daf8708f3514f6de`.
- Last native check: **27 errors**, including **27 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/attempt/versions/v14/populations/cpld-adapter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/attempt/versions/v14/cpld-adapter-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v19 — 2026-10-13

Protected source v18; current PCB SHA-256 `f1e9f126f31bf611b7175f82d4f58f3eaa28838e89c90e6e855cd841fe0cf6c8`. Fresh native checks have zero enabled errors/opens/parity/ERC findings and 3 PCB warnings. Exact electrical geometry and project rules unchanged; 71 historical files, 69 model entries,17 exports and 6 current population views verified and inspected. Full documentation URL readable. Removed the redundant back board title, retaining current revision and all pin mapping. No area or priced saving claimed; physical qualification remains open.
