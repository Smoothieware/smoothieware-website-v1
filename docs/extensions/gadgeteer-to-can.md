---
layout: default
title: "Gadgeteer-to-CAN adapter"
permalink: /extensions/gadgeteer-to-can
---

# Gadgeteer-to-CAN adapter

## Current additive annotation candidate: v21 (2026-10-13)

The [v21 native sources and wiring guide](https://github.com/arthurwolf/extension-boards/tree/main/src/gadgeteer-to-can/attempt/versions/v21) preserve the released v20 isolated CAN circuit, placement and mechanics. The PCB revision label is current and its full documentation URL is retained. The wiring diagrams below describe exact saved pin numbers and default chain jumpers; they do not establish hardware qualification. **Fabrication release is false.** Native checks and source-bound model/export/render review are recorded in the revision's `can-usability-review.json`. Frozen v20 identity-label source drift and its missing auxiliary routed project file remain documented historical exceptions; neither is restored. Teardrop and reference-copper work remain open.

## Single-node wiring

```text
Compatible host CAN controller          J1 host socket    Isolation     J3 field terminal
3.3 V logic supply -------------------> 1  3V3
4.5–5.5 V converter supply -----------> 2  5V             ISOW1044
TX-inhibit command ------------------> 3  HOST_SILENT       barrier
CAN controller TX -------------------> 4  HOST_TXD      ||          ||   3 CANH ---- CANH bus
CAN controller RX <------------------- 5  HOST_RXD      ||          ||   2 CANL ---- CANL bus
Host ground -------------------------- 10 GND          ||          ||   1 FIELD_GND -- field reference
```

SILENT high inhibits transmission while reception stays active: the OR gate produces `TXD_SAFE = HOST_TXD OR HOST_SILENT`. The local SHDN/standby strap is a separate function. Do not connect host ground to FIELD_GND across the isolation barrier. CANH/CANL are communication pins, not machine-power inputs. Firmware, pin mux, CAN controller compatibility, timing and cable orientation require separate verification; this revision adds no firmware.

## J1/J2 chain mapping

| Number | J1 host | J2 chain | Default connection |
|---|---|---|---|
| 1 | 3V3 | 3V3 | Direct host-domain power |
| 2 | 5V | 5V | Direct host-domain power |
| 3 | HOST_SILENT | CHAIN_3 | SJ3 open |
| 4 | HOST_TXD | CHAIN_4 | SJ4 open |
| 5 | HOST_RXD | CHAIN_5 | SJ5 open |
| 6 | HOST_6 | CHAIN_6 | SJ6 bridged |
| 7 | HOST_7 | CHAIN_7 | SJ7 bridged |
| 8 | HOST_8 | CHAIN_8 | SJ8 bridged |
| 9 | HOST_9 | CHAIN_9 | SJ9 bridged |
| 10 | GND | GND | Direct host-domain ground |

J2 forwards power/ground and unused pins 6–9. It does **not** forward the consumed CAN control signals on pins 3–5. A second CAN board cannot simply plug into J2 as another standard CAN C socket. Closing SJ3–5 is not a supported two-transceiver configuration and can connect competing RXD outputs. Downstream power remains subject to the combined source, connector and cable budget.

## Multiple isolated nodes with shared host power

This is a conditional wiring topology, not a validated shared-power assembly. Each board needs its own compatible controller signals; J2 is not the controller-signal distribution path.

```text
Rated host-domain supply distribution (combined load/drop budget unresolved)
  3V3 / 4.5–5.5 V / host GND
       +----> board A J1 pins 1 / 2 / 10 <---- controller A pins SILENT/TX/RX
       +----> board B J1 pins 1 / 2 / 10 <---- controller B pins SILENT/TX/RX
                       || separate isolation barriers ||

Field-domain linear bus (twisted CANH/CANL pair)
  End A J3 pin3 CANH ============================= J3 pin3 CANH End B
        J3 pin2 CANL ============================= J3 pin2 CANL
        J3 pin1 FIELD_GND ------------------------ J3 pin1 FIELD_GND
        SJ10 closed: 120 ohm                      SJ10 closed: 120 ohm
                         |
                Optional interior node:
                CANH/CANL/field reference;
                SJ10 OPEN, no endpoint termination
```

Use exactly two 120 ohm terminators, at the two physical ends of the complete linear bus. SJ10 is open by default; interior nodes remain unterminated. Keep stubs short; actual cable, field reference/ground potential, termination, fault envelope and EMC must be engineered for the installation. The 500 kbit/s / 20 m network is a qualification target, not measured operation.

The converter input design uses manufacturer worst-case 211 mA at a 60 ohm dominant bus load and 250 mA pulses per board; the upstream current-limit recommendation is at least 300 mA per board. These figures do not establish the host socket allocation or a safe multi-board budget. Account for every board, other downstream loads, startup, protection behavior, source capacity and cable/contact drops before energization. No extra field-port TVS/bias network is fitted. Host supply, isolation, thermal, current, EMC, firmware, assembly and real network qualification remain open. The generic SOIC model does not certify package fit.


## Historical isolated candidate: v20 (2026-10-13)

The [v20 engineering record and native design](https://github.com/arthurwolf/extension-boards/tree/main/src/gadgeteer-to-can/attempt/versions/v20) adds **ISOW1044DFMR isolated CAN** alongside the retained common-ground revisions. Host 3.3 V supplies logic; host **4.5–5.5 V** supplies the isolated converter. Manufacturer worst-case VDD current is **211 mA at a 60 Ω dominant bus load**, with **250 mA pulses**; the recommended upstream current-limit target is at least 300 mA. The actual host socket allocation remains unqualified. The 70 × 45 mm candidate is larger than the 40 × 39.5 mm baseline.

A separate transmit-inhibit gate preserves the existing active-high SILENT command while keeping reception active. No firmware is changed, and this is still a native CAN physical interface: the host must provide a compatible CAN controller, driver, timing and bus configuration. The 500 kbit/s / 20 m network remains a qualification target, not measured performance. Native electrical checks pass and fresh renders are retained, but power, thermal behavior, EMC, insulation, assembly and complete network operation remain unqualified. **No fabrication or energization approval is granted.** The historical snapshot below describes earlier revisions; select the exact revision before wiring.

Gadgeteer-to-CAN physical-interface adapter. CAN 2.0 operation is a design target; the prototype qualification target is 500 kbit/s over a specified 20 m twisted-pair network, not measured performance.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v16/9 purchased,7 named MPNs match/2 stock blanks;123 selected/1803 historical hashes;retained native0;host/fault/physical open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.



## Selected component architecture

[Current v16 component review](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/component-review.md) retains TCAN330D and existing V1 10k10% stock envelope; all24 records covered,seven named purchasing identities match and R1/R2 remain unidentified stock reels. No successor; host/fault/EMC/physical and unsigned checklist gates remain. Earlier v15 notes are history.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/gadgeteer-to-can`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v17, v18, v19. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v17, v18, v19**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### gadgeteer-to-can

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/attempt/versions/v19/gadgeteer-to-can.kicad_pcb), SHA-256 `11631fef695cd934603b48994ca1e82913964314b2653eb5ac53e2c433282dae`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/attempt/versions/v19/populations/gadgeteer-to-can/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/attempt/versions/v19/gadgeteer-to-can-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v21 — 2026-10-13

Protected source v20; current PCB SHA-256 `06e0655a5f39ab8ec8997d30d5c99ebca10117a1e5a735ae4bf2a73989245575`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 61 historical files unchanged. Verified 20 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Isolation, shared host-chain power and CAN transceiver behavior remain physically unqualified; no area or cost savings claimed Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
