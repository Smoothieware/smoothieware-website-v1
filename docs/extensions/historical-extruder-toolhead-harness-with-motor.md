---
layout: default
title: "Extruder toolhead harness with motor provision"
permalink: /extensions/historical-extruder-toolhead-harness-with-motor
---

# Extruder toolhead harness with motor provision

A passive toolhead wiring-distribution board consolidates heater, fans, thermistor, probe, servo and auxiliary5 V into one harness. Heater and fans share a common positive VBB conductor and retain individual switched returns. The README specifies 2 oz copper.

## Original design and host

This guide documents the [original Ccecil design](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7). It is a custom 3D-printer harness with no ten-contact Prime plug-and-play host interface.

## Interfaces, power and limitations

J1 has named rather than numbered harness pads: VBB,H−,F1,F2,T+,T−,P,S, 5V,GND. J3 is heater 1 H−, 2 VBB; J4 thermistor1 T+, 2 T−; J8/J9 fans1 VBB, 2 switched F1/F2; J5 probe1 P, 2 ground; J6 servo1 ground, 2 5 V, 3 signal; J10 auxiliary1 5 V, 2 ground. Critically, all numbered J2 motor pads are explicitly unconnected on the PCB. J2 provides no motor winding path.

## Board-reference diagram

These sheets show the board artwork and identify every pad. J1 and J2 custom connector bodies are not drawn; check connector body geometry, mating hardware and cable orientation on the physical parts.

**All twelve numbered J2 pad instances are unconnected on the PCB.** Pad numbers 5–8 occur twice and are distinct physical pads; repeating a number does not create continuity. Never route motor current through J2.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-overview" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/overview.png" title="Toolhead harness with motor provision" alt="Toolhead harness with motor provision" caption="Passive harness board. Every J2 motor pad is unconnected; never route motor current through J2." width=420 %}

### Main harness J1

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-1.png" title="J1 named harness pads · group 1" alt="J1 named harness pads · group 1" caption="Named harness pads. Heater and fan switched returns are separate power paths, not GPIO. Check cable mating, current capacity and supply compatibility before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-2.png" title="J1 named harness pads · group 2" alt="J1 named harness pads · group 2" caption="Named harness pads. Heater and fan switched returns are separate power paths, not GPIO. Check cable mating, current capacity and supply compatibility before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-3" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-3.png" title="J1 named harness pads · group 3" alt="J1 named harness pads · group 3" caption="Named harness pads. Heater and fan switched returns are separate power paths, not GPIO. Check cable mating, current capacity and supply compatibility before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j1-contacts-4" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j1-contacts-4.png" title="J1 named harness pads · group 4" alt="J1 named harness pads · group 4" caption="Named harness pads. Heater and fan switched returns are separate power paths, not GPIO. Check cable mating, current capacity and supply compatibility before wiring." width=420 %}

### Unconnected motor-provision J2

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-1.png" title="J2 unconnected pad instances · group 1" alt="J2 unconnected pad instances · group 1" caption="Every J2 numbered pad is unconnected. Duplicate numbers 5–8 are separate physical pads. Never route motor current through J2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-2.png" title="J2 unconnected pad instances · group 2" alt="J2 unconnected pad instances · group 2" caption="Every J2 numbered pad is unconnected. Duplicate numbers 5–8 are separate physical pads. Never route motor current through J2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j2-contacts-3" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j2-contacts-3.png" title="J2 unconnected pad instances · group 3" alt="J2 unconnected pad instances · group 3" caption="Every J2 numbered pad is unconnected. Duplicate numbers 5–8 are separate physical pads. Never route motor current through J2." width=420 %}

### Toolhead connector details

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j3-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j3-contacts-1.png" title="Heater J3" alt="Heater J3" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j4-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j4-contacts-1.png" title="Thermistor J4" alt="Thermistor J4" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j5-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j5-contacts-1.png" title="Probe J5" alt="Probe J5" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j6-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j6-contacts-1.png" title="Servo J6" alt="Servo J6" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j7-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j7-contacts-1.png" title="Connector J7" alt="Connector J7" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j8-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j8-contacts-1.png" title="Fan J8" alt="Fan J8" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j9-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j9-contacts-1.png" title="Fan J9" alt="Fan J9" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-j10-contacts-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/j10-contacts-1.png" title="Auxiliary supply J10" alt="Auxiliary supply J10" caption="Numbered pad functions and nets. Check the connector, load voltage, signal interface, polarity, current capacity and heater protection before powering." width=420 %}

### Harness limitations

{% include _includes/extension-instruction-diagram.html id="historical-extruder-motor-reference-limits" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/annotated-reference/limits.png" title="Unconnected motor and harness-use limits" alt="Unconnected motor and harness-use limits" caption="J2 carries no motor connections. Check copper and connector current limits, host mapping, thermal protection and physical mating before wiring." width=420 %}

### Supplementary logical circuits

These circuit sheets explain the board connectivity and supplement the annotated sheets above. Use the contact inventory and all companion sheets together.

Source: [original circuit](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-hotend" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/hotend-font-matched.png" title="Hotend connector" alt="Hotend connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-therm" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/therm-font-matched.png" title="Thermistor connector" alt="Thermistor connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-probe" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/probe-font-matched.png" title="Probe connector" alt="Probe connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-servo" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/servo-font-matched.png" title="Servo connector" alt="Servo connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-fan1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/fan1-font-matched.png" title="Fan 1 connector" alt="Fan 1 connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-fan2" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/fan2-font-matched.png" title="Fan 2 connector" alt="Fan 2 connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-aux" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/aux-font-matched.png" title="Auxiliary supply" alt="Auxiliary supply — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-power" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/power-font-matched.png" title="VBB / ground connector" alt="VBB / ground connector — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-motor-open-1" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/motor-open-1-font-matched.png" title="Motor nodes are disconnected" alt="Motor nodes are disconnected — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-with-motor-factual-motor-open-5" src="/images/extensions/historical-extruder-toolhead-harness-with-motor/guides/factual-circuits/motor-open-5-font-matched.png" title="Motor nodes are disconnected" alt="Motor nodes are disconnected — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

### Numbered contacts and controls

These are schematic and PCB net memberships, not measured electrical behaviour. Leave unconnected pads unconnected. Auto-generated net names are not cable colours. Check repeated footprints or pad numbers on the physical board before wiring.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| File | Connector/control | Label | Contact → source net |
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

When replacing a harness, label every connector on the controller and check each conductor end-to-end before connecting the toolhead. Heater and fan positive supply must match the loads; their switched returns go to their own host output stages, never to GPIO. Thermistor, probe and servo require separate compatible host interfaces. Never route motor current through the unconnected J2 pads.

On the Smoothieboard V2 Prime GF/J37 header, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current draw and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support

The passive harness itself has no firmware. Heater temperature control, fan switches, thermistor sensor type, probe and servo each need their own module and pin allocation. Sharing a positive wire does not combine firmware control channels or replace heater thermal protection.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/ExtruderBoardMotor-V0.1)
- [Original source](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7)
- [Original ExtruderBoard.kicad_pcb](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_pcb)
- [Original ExtruderBoard.kicad_sch](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_sch)
- [Original README.md](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/README.md)

No project license file is included with the original source. Preserve attribution; the absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
