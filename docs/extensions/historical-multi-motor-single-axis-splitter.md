---
layout: default
title: "Multi-motor single-axis command splitter"
permalink: /extensions/historical-multi-motor-single-axis-splitter
---

# Multi-motor single-axis command splitter

This logic board gates one shared STEP stream separately to four motor-driver channels while sharing buffered DIR and ENABLE. It is intended for parallel screws or actuators that normally move together but may require individual adjustment. It splits command signals, not motor winding power and not four independent interpolated axes.

## Design source and host

This guide documents the **Ccecil design** used by Smoothieboard2. [The upstream source](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/tree/78c84c17d5de61348682debc81ea5d1ebc0c7a5b) identifies the design. The design targets the Smoothieboard V2/Gadgeteer era. Check compatibility with your Prime board, cable and firmware build.

## Interfaces, power and limitations

J1/J7 contacts 3–9 are STEP,DIR,M1_EN,M2_EN,M3_EN,M4_EN,EN_Common. J2–J5 each use 1 5 V, 2 gated STEP, 3 buffered DIR, 4 buffered common ENABLE, 5 ground. The parts are 74LS132 and 74LS240; the README describes noninverting paths with open-drain5 V pull-ups. Check the fitted logic family, output topology and input thresholds before relying on that description; do not infer 3.3 V host compatibility from a 3–5 V README range alone.

### TTL outputs need a matched receiver

The logic uses NAND gates followed by inverting 74LS240 buffers; the gated STEP path depends on STEP and its channel enable. The README’s “open-drain” description does not match a 74LS240 output. Check the resistor-array loading and the fitted logic manufacturer.

For a named comparison, the [TI SN74LS240 datasheet](https://www.ti.com/lit/ds/symlink/sn74ls240.pdf), electrical characteristics on page 5, guarantees output HIGH of only 2.4 V at the stated −3 mA load and minimum supply. The [Leadshine DM542E manual](https://www.leadshine.com/upfiles/downloads/d5375bf4c28b5c75b2d150c9762781c9_1651052967281.pdf) requires at least 4.5 V HIGH in 5 V input mode. Thus that pairing has no guaranteed direct HIGH margin from these specifications. This does not predict every sample’s voltage; it means no direct cable is guaranteed to work. Use a suitable interface for the driver input circuit in a powered installation.

## Board-reference diagram

The overview and contact sheets below show the board. Each numbered pill identifies a native source contact; dashed leaders locate the component, rather than an electrical wire. The four driver connectors carry command signals, not motor winding power. **Do not energize this board until you have checked the fitted logic, output topology, receiver margins and supply requirements.**

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-overview" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/overview.png" title="Multi-motor splitter" alt="Multi-motor splitter — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

<details markdown="1">
<summary>Connector, logic, resistor-array and mounting references</summary>

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-c1-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/c1-pins-1.png" title="Capacitor C1 / 1" alt="Capacitor C1 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-c2-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/c2-pins-1.png" title="Capacitor C2 / 1" alt="Capacitor C2 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-c3-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/c3-pins-1.png" title="Capacitor C3 / 1" alt="Capacitor C3 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-h1-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/h1-pins-1.png" title="Mounting H1 / 1" alt="Mounting H1 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-h2-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/h2-pins-1.png" title="Mounting H2 / 1" alt="Mounting H2 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-h3-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/h3-pins-1.png" title="Mounting H3 / 1" alt="Mounting H3 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-h4-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/h4-pins-1.png" title="Mounting H4 / 1" alt="Mounting H4 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-h5-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/h5-pins-1.png" title="Mounting H5 / 1" alt="Mounting H5 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j1-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j1-pins-1.png" title="Host header J1 / 1" alt="Host header J1 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j1-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j1-pins-2.png" title="Host header J1 / 2" alt="Host header J1 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j2-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j2-pins-1.png" title="Driver controls J2 / 1" alt="Driver controls J2 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j3-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j3-pins-1.png" title="Driver controls J3 / 1" alt="Driver controls J3 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j4-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j4-pins-1.png" title="Driver controls J4 / 1" alt="Driver controls J4 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j5-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j5-pins-1.png" title="Driver controls J5 / 1" alt="Driver controls J5 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j7-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j7-pins-1.png" title="Control row J7 / 1" alt="Control row J7 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-j7-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/j7-pins-2.png" title="Control row J7 / 2" alt="Control row J7 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn1-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn1-pins-1.png" title="Resistor array RN1 / 1" alt="Resistor array RN1 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn1-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn1-pins-2.png" title="Resistor array RN1 / 2" alt="Resistor array RN1 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn2-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn2-pins-1.png" title="Resistor array RN2 / 1" alt="Resistor array RN2 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn2-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn2-pins-2.png" title="Resistor array RN2 / 2" alt="Resistor array RN2 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn3-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn3-pins-1.png" title="Resistor array RN3 / 1" alt="Resistor array RN3 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-rn3-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/rn3-pins-2.png" title="Resistor array RN3 / 2" alt="Resistor array RN3 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u1-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u1-pins-1.png" title="Logic IC U1 / 1" alt="Logic IC U1 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u1-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u1-pins-2.png" title="Logic IC U1 / 2" alt="Logic IC U1 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u1-pins-3" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u1-pins-3.png" title="Logic IC U1 / 3" alt="Logic IC U1 / 3 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u2-pins-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u2-pins-1.png" title="Logic IC U2 / 1" alt="Logic IC U2 / 1 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u2-pins-2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u2-pins-2.png" title="Logic IC U2 / 2" alt="Logic IC U2 / 2 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u2-pins-3" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u2-pins-3.png" title="Logic IC U2 / 3" alt="Logic IC U2 / 3 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-splitter-reference-u2-pins-4" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/annotated-reference/u2-pins-4.png" title="Logic IC U2 / 4" alt="Logic IC U2 / 4 — board reference" caption="Logic and contact reference. The output-stage description conflicts with the named logic parts; check ratings, receiver margins and mating before use." width=420 %}

</details>

### Supplementary logical circuits

These circuit sheets explain the connections. They show electrical relationships separately from the board references above. Use the contact inventory and all companion sheets together. Check physical cable orientation and ratings before use.

Source: [original circuit](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/MMSA.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-motor-1-step" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/motor-1-step.png" title="Individual STEP gating path" alt="Individual STEP gating path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-motor-2-step" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/motor-2-step.png" title="Individual STEP gating path" alt="Individual STEP gating path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-motor-3-step" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/motor-3-step.png" title="Individual STEP gating path" alt="Individual STEP gating path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-motor-4-step" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/motor-4-step.png" title="Individual STEP gating path" alt="Individual STEP gating path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-dir" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/dir.png" title="DIR buffer path" alt="DIR buffer path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-common-en" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/common-en.png" title="Common EN buffer path" alt="Common EN buffer path — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-j2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/j2.png" title="J2 driver header" alt="J2 driver header — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-j3" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/j3.png" title="J3 driver header" alt="J3 driver header — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-j4" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/j4.png" title="J4 driver header" alt="J4 driver header — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-j5" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/j5.png" title="J5 driver header" alt="J5 driver header — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-host-1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/host-1.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-host-5" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/host-5.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-host-9" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/host-9.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-power" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/power.png" title="Logic supply and enables" alt="Logic supply and enables — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-rn1" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/rn1.png" title="Resistor-array element pairs" alt="Resistor-array element pairs — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-rn2" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/rn2.png" title="Resistor-array element pairs" alt="Resistor-array element pairs — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-rn3" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/rn3.png" title="Resistor-array element pairs" alt="Resistor-array element pairs — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-multi-motor-single-axis-splitter-factual-boundaries" src="/images/extensions/historical-multi-motor-single-axis-splitter/guides/factual-circuits/boundaries.png" title="Multi-motor gating notes" alt="Multi-motor gating notes — logical connections, not physical board layout" caption="These logical circuits supplement the board references." width=420 %}

### Numbered source contacts and controls

These are design net memberships. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source file | Connector/control | Label | Contact → net |
|---|---|---|---|
| MMSA.kicad_pcb | J5 | Conn_01x05_Pin | 1: +5V; 2: /M4_STP; 3: /DIR_Buf; 4: /EN_Common_Buf; 5: GND |
| MMSA.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: /STP; 4: /DIR; 5: /M1_EN; 6: /M2_EN; 7: /M3_EN; 8: /M4_EN; 9: /EN_Common; 10: GND |
| MMSA.kicad_pcb | J2 | Conn_01x05_Pin | 1: +5V; 2: /M1_STP; 3: /DIR_Buf; 4: /EN_Common_Buf; 5: GND |
| MMSA.kicad_pcb | J3 | Conn_01x05_Pin | 1: +5V; 2: /M2_STP; 3: /DIR_Buf; 4: /EN_Common_Buf; 5: GND |
| MMSA.kicad_pcb | J7 | Conn_01x10_Pin | 1: +3V3; 2: +5V; 3: /STP; 4: /DIR; 5: /M1_EN; 6: /M2_EN; 7: /M3_EN; 8: /M4_EN; 9: /EN_Common; 10: GND |
| MMSA.kicad_pcb | J4 | Conn_01x05_Pin | 1: +5V; 2: /M3_STP; 3: /DIR_Buf; 4: /EN_Common_Buf; 5: GND |

## Practical use with Smoothieboard V2 Prime

For a two-screw bench experiment, keep commercial drive power disabled and connect only their logic inputs after verifying the actual circuit polarities. Test each M_EN state while supplying pulses to shared STEP and confirm only the selected output pulses. A GF/J37 contact mapping is STEP PB1,DIR PJ4,M1_EN PA4,M2_EN PG0,M3_EN PJ3,M4_EN PG1,common enable PJ2. This pin mapping does not provide a squaring algorithm or enable sequence.

On GF/J37, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support

SmoothieV2 has motor slaving, but its implementation does not implement this board’s shared-step gate interface. `slaved_to` belongs to the TMC actuator setup; the external STEP/DIR branch reports that it cannot be slaved in software and does not perform the TMC slave setup. The `G28.7` alignment routine moves a separate slave actuator object, rather than sequencing this board’s four motor-gate inputs on one common step stream. This board therefore needs a matching shared-step/gate and endstop-control workflow before independent homing or squaring can be used. SmoothieV2 supplies no configuration for that workflow. Ordinary shared movement and independently squared homing are different requirements.

This section refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/MultiMotorSingleAxisSplitter)
- [Original source](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/tree/78c84c17d5de61348682debc81ea5d1ebc0c7a5b)
- [Original MMSA.kicad_pcb](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/MMSA.kicad_pcb)
- [Original MMSA.kicad_sch](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/MMSA.kicad_sch)
- [Original NAND_noninverting.kicad_sch](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/NAND_noninverting.kicad_sch)
- [Original README.md](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/README.md)

The project has no license file. Preserve attribution; the absence of a license file is not public-domain permission.

[All extension boards](/extension-boards)
