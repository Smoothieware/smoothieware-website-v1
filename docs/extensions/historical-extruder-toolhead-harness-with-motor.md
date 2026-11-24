---
layout: default
title: "Extruder toolhead harness with motor provision"
permalink: /extensions/historical-extruder-toolhead-harness-with-motor
---

# Extruder toolhead harness with motor provision

A passive toolhead wiring-distribution board consolidates heater, fans, thermistor, probe, servo and auxiliary5 V into one harness. Heater and fans share a common positive VBB conductor and retain individual switched returns. The README describes assembled units and 2 oz copper use, but gives no measured current rating and explicitly says1 oz was not tested.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The original project is a custom 3D-printer harness; it has no ten-contact Prime plug-and-play host interface.

## Interfaces, power and limitations

J1 has named rather than numbered harness pads: VBB,H−,F1,F2,T+,T−,P,S, 5V,GND. J3 is heater 1 H−, 2 VBB; J4 thermistor1 T+, 2 T−; J8/J9 fans1 VBB, 2 switched F1/F2; J5 probe1 P, 2 ground; J6 servo1 ground, 2 5 V, 3 signal; J10 auxiliary1 5 V, 2 ground. Critically, all numbered J2 motor pads are explicitly unconnected in the saved PCB. The motor-provision name is not evidence of a valid winding path.

## Board-reference diagram

These source-matched sheets retain the historical board artwork and identify every source pad. **J1 and J2 remain missing-custom-body placeholders:** their native placement does not establish connector body geometry, mating hardware or cable orientation. No replacement body is invented.

**All twelve numbered J2 pad instances are explicitly unconnected in the saved PCB.** Pad numbers 5–8 occur twice and remain distinct physical instances in the sheets; repeating a number does not create continuity. The board’s motor-provision name establishes no winding path. Do not route motor current through J2 from this reference.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-overview" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/overview.svg" title="Historical toolhead harness with motor provision" alt="Historical toolhead harness with motor provision — source reference with missing custom connector bodies" caption="Passive source reference only. J1/J2 custom connector bodies are unverified placeholders, and every J2 motor pad is unconnected. Heater/fan power and complete Prime wiring remain unqualified." width=420 %}

### Main harness J1

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-1.svg" title="J1 named harness pads · group 1" alt="J1 named harness pads · group 1 — source reference with missing custom connector bodies" caption="Named source harness pads only; the custom body remains a placeholder. Heater/fan switched returns are separate power paths, not GPIO. Names and placement do not establish cable mating, ampacity or supply compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-2.svg" title="J1 named harness pads · group 2" alt="J1 named harness pads · group 2 — source reference with missing custom connector bodies" caption="Named source harness pads only; the custom body remains a placeholder. Heater/fan switched returns are separate power paths, not GPIO. Names and placement do not establish cable mating, ampacity or supply compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-3" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-3.svg" title="J1 named harness pads · group 3" alt="J1 named harness pads · group 3 — source reference with missing custom connector bodies" caption="Named source harness pads only; the custom body remains a placeholder. Heater/fan switched returns are separate power paths, not GPIO. Names and placement do not establish cable mating, ampacity or supply compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-4" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-4.svg" title="J1 named harness pads · group 4" alt="J1 named harness pads · group 4 — source reference with missing custom connector bodies" caption="Named source harness pads only; the custom body remains a placeholder. Heater/fan switched returns are separate power paths, not GPIO. Names and placement do not establish cable mating, ampacity or supply compatibility." width=420 %}

### Unconnected motor-provision J2

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-1.svg" title="J2 unconnected pad instances · group 1" alt="J2 unconnected pad instances · group 1 — source reference with missing custom connector bodies" caption="Every J2 numbered pad instance is unconnected. Duplicate numbers 5–8 remain separate physical pads; no winding pair, motor path, plug pinout or corrected harness is inferred. The custom body is missing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-2.svg" title="J2 unconnected pad instances · group 2" alt="J2 unconnected pad instances · group 2 — source reference with missing custom connector bodies" caption="Every J2 numbered pad instance is unconnected. Duplicate numbers 5–8 remain separate physical pads; no winding pair, motor path, plug pinout or corrected harness is inferred. The custom body is missing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-3" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-3.svg" title="J2 unconnected pad instances · group 3" alt="J2 unconnected pad instances · group 3 — source reference with missing custom connector bodies" caption="Every J2 numbered pad instance is unconnected. Duplicate numbers 5–8 remain separate physical pads; no winding pair, motor path, plug pinout or corrected harness is inferred. The custom body is missing." width=420 %}

### Toolhead connector details

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j3-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j3-contacts-1.svg" title="Heater J3" alt="Heater J3 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j4-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j4-contacts-1.svg" title="Thermistor J4" alt="Thermistor J4 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j5-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j5-contacts-1.svg" title="Probe J5" alt="Probe J5 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j6-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j6-contacts-1.svg" title="Servo J6" alt="Servo J6 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j7-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j7-contacts-1.svg" title="Connector J7" alt="Connector J7 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j8-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j8-contacts-1.svg" title="Fan J8" alt="Fan J8 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j9-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j9-contacts-1.svg" title="Fan J9" alt="Fan J9 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j10-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j10-contacts-1.svg" title="Auxiliary supply J10" alt="Auxiliary supply J10 — source reference with missing custom connector bodies" caption="Numbered source pad functions and nets. Verify the actual connector, load voltage, signal interface and polarity separately. Source connectivity does not qualify current capacity, heater protection, motor operation or a powered installation." width=420 %}

### Harness limitations

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-limits" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/limits.svg" title="Unconnected motor and harness-use limits" alt="Unconnected motor and harness-use limits — source reference with missing custom connector bodies" caption="No working motor harness is established. Main/custom connector bodies, copper and connector current limits, host mapping, thermal protection and physical mating remain unqualified; no complete Prime installation follows from these reference sheets." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched annotated reference sheets above; custom connector bodies remain missing. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_pcb), revision `d8bdb5473508d71ce422fd9ebc1819611b4c32f7`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-hotend" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/hotend-font-matched.svg" title="Hotend connector" alt="Hotend connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-therm" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/therm-font-matched.svg" title="Thermistor connector" alt="Thermistor connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-probe" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/probe-font-matched.svg" title="Probe connector" alt="Probe connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-servo" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/servo-font-matched.svg" title="Servo connector" alt="Servo connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-fan1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/fan1-font-matched.svg" title="Fan 1 connector" alt="Fan 1 connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-fan2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/fan2-font-matched.svg" title="Fan 2 connector" alt="Fan 2 connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-aux" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/aux-font-matched.svg" title="Auxiliary supply" alt="Auxiliary supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-power" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/power-font-matched.svg" title="VBB / ground connector" alt="VBB / ground connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-motor-open-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/motor-open-1-font-matched.svg" title="Source motor nodes are disconnected" alt="Source motor nodes are disconnected — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-motor-open-5" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/motor-open-5-font-matched.svg" title="Source motor nodes are disconnected" alt="Source motor nodes are disconnected — logical connections, not physical board layout" caption="Supplementary factual circuit only. Custom connector bodies and the complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| ExtruderBoard.kicad_pcb | J6 | Conn_01x03 | 1: Net-(J1-PadGND); 2: Net-(J1-Pad5V); 3: Net-(J1-PadS) |
| ExtruderBoard.kicad_pcb | J10 | Conn_01x02 | 1: Net-(J1-Pad5V); 2: Net-(J1-PadGND) |
| ExtruderBoard.kicad_pcb | J9 | Conn_01x02_Male | 1: Net-(J1-PadVBB); 2: Net-(J1-PadF2) |
| ExtruderBoard.kicad_pcb | J3 | Conn_01x02 | 1: Net-(J1-PadH-); 2: Net-(J1-PadVBB) |
| ExtruderBoard.kicad_pcb | J1 | ExtruderHarnessMain | 5V: Net-(J1-Pad5V); F1: Net-(J1-PadF1); F2: Net-(J1-PadF2); GND: Net-(J1-PadGND); H-: Net-(J1-PadH-); P: Net-(J1-PadP); S: Net-(J1-PadS); T+: Net-(J1-PadT+); T-: Net-(J1-PadT-); VBB: Net-(J1-PadVBB) |
| ExtruderBoard.kicad_pcb | J8 | Conn_01x02_Male | 1: Net-(J1-PadVBB); 2: Net-(J1-PadF1) |
| ExtruderBoard.kicad_pcb | J4 | Conn_01x02 | 1: Net-(J1-PadT+); 2: Net-(J1-PadT-) |
| ExtruderBoard.kicad_pcb | J5 | Conn_01x02 | 1: Net-(J1-PadP); 2: Net-(J1-PadGND) |
| ExtruderBoard.kicad_pcb | J2 | ExtruderHarnessMotor | 1: unconnected-(J2-Pad1); 2: unconnected-(J2-Pad2); 3: unconnected-(J2-Pad3); 4: unconnected-(J2-Pad4); 5: unconnected-(J2-Pad5); 6: unconnected-(J2-Pad6); 7: unconnected-(J2-Pad7); 8: unconnected-(J2-Pad8) |
| ExtruderBoard.kicad_pcb | J7 | Conn_01x01_Male | 1: Net-(J1-PadVBB); 2: Net-(J1-PadGND) |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a harness-replacement study, label every source connector on the actual controller and verify each conductor end-to-end before connecting the toolhead. Heater and fan positive supply must match the loads; their switched returns go to their own host output stages, never to GPIO. Thermistor/probe/servo require separate compatible host interfaces. Do not route motor current through the unconnected J2 source; a faithful motor hookup is blocked until a corrected source and continuity evidence exist.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The passive harness itself has no firmware. Heater temperature control, fan switches, thermistor sensor type, probe and servo each need their own source-verified module and pin allocation. Sharing a positive wire does not combine firmware control channels or replace heater thermal protection.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Unconnected J2 motor pads, harness ampacity/connector ratings, host output allocation, heater/fan voltage, thermistor selection and thermal/polarity qualification remain unresolved. Custom connector body geometry, the complete Prime/peripheral wiring diagram, public source/link availability and desktop/narrow rendered usability remain open. The reference sheets identify source pads without establishing a motor path.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/ExtruderBoardMotor-V0.1)
- [Pinned original source](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7)
- [Original ExtruderBoard.kicad_pcb](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_pcb)
- [Original ExtruderBoard.kicad_sch](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_sch)
- [Original README.md](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
