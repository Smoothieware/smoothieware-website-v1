---
layout: default
title: "Dual-device I2C digital potentiometer"
permalink: /extensions/historical-dual-digital-potentiometer
---

# Dual-device I2C digital potentiometer

Two MCP44X1-family devices expose four wiper outputs each. The board’s dual designation refers to two ICs, not just two resistive channels. It is intended to adjust analogue setpoints electronically, with Gadgeteer I2C, Qwiic and ordinary header access. The README claims compatibility with the V1 digipot arrangement; that claim does not establish V2 firmware support.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1 and J4 share the ten-contact host map: 1 3.3 V, 2 5 V, 3–7 spare P3–P7, 8 SDA, 9 SCL, 10 ground. J2/J3 are four-wire 1 ground, 2 3.3 V, 3 SDA, 4 SCL. J5–J8 expose device 1 wipers 0–3, and J9–J12 device 2 wipers 0–3, each 1 ground, 2 wiper. The exact fitted resolution/resistance suffix and assembled-board electrical limits remain unverified. The source address straps and nominal bus pull-ups are explained below. Do not treat a wiper as a power output.

The selected PCB ties all four A terminals of each IC together and feeds that shared node from 3.3 V through one 33 kΩ resistor (R3 for IC1, R7 for IC2). All B terminals connect to ground. Only the wipers are individually brought out: these are shared-reference setpoint circuits, not eight independently accessible three-terminal potentiometers. Loading a wiper can affect the shared reference; a resistance code alone does not establish its output voltage.

The source straps IC1 A0/A1 to ground/ground and IC2 A0/A1 to 3.3 V/ground. The numeric addresses still need decoding against the exact fitted device. SDA has two 2.2 kΩ pull-ups, R1/R5, and SCL has two more, R2/R6: each line therefore has an effective 1.1 kΩ board pull-up to 3.3 V before any host or cable pull-ups. Verify the complete bus current budget. Both reset inputs have 100 kΩ pull-ups to 3.3 V; each pin 14 is explicitly unconnected.

## Board-reference diagram

These source-matched sheets retain the historical abstract and identify every connector and component contact. They describe source geometry and nets, not a plug mating face or manufactured continuity. **The source’s P3A pin-function label and P0A net name disagree; both are preserved.** Do not silently resolve that conflict from the illustration.

The schematic and PCB identify generic MCP44X1 devices while the README names MCP4451. The fitted variant, resistance grade and actual address responses remain unknown. The address derivation later in this guide is conditional; these reference sheets add no firmware configuration or powered-use qualification.

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-overview" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/overview.svg" title="Historical dual-device potentiometer overview" alt="Historical dual-device potentiometer overview — historical source geometry and numbered contacts" caption="Two source ICs expose four wipers each. Shared A-end references, grounded B ends and source straps are not eight independent three-terminal potentiometers or qualified analogue outputs." width=420 %}

### Host and shared I2C connectors

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j1-pins-1.svg" title="Host header J1 · contact group 1" alt="Host header J1 · contact group 1 — historical source geometry and numbered contacts" caption="Numbered source host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j1-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j1-pins-2.svg" title="Host header J1 · contact group 2" alt="Host header J1 · contact group 2 — historical source geometry and numbered contacts" caption="Numbered source host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j4-pins-1.svg" title="Host header J4 · contact group 1" alt="Host header J4 · contact group 1 — historical source geometry and numbered contacts" caption="Numbered source host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j4-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j4-pins-2.svg" title="Host header J4 · contact group 2" alt="Host header J4 · contact group 2 — historical source geometry and numbered contacts" caption="Numbered source host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j2-pins-1.svg" title="Four-wire I2C connector J2 · contact group 1" alt="Four-wire I2C connector J2 · contact group 1 — historical source geometry and numbered contacts" caption="Source contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net. This reference does not establish a mating cable." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j2-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j2-pins-2.svg" title="Four-wire I2C connector J2 · contact group 2" alt="Four-wire I2C connector J2 · contact group 2 — historical source geometry and numbered contacts" caption="Source contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net. This reference does not establish a mating cable." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j3-pins-1.svg" title="Four-wire I2C connector J3 · contact group 1" alt="Four-wire I2C connector J3 · contact group 1 — historical source geometry and numbered contacts" caption="Source contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net. This reference does not establish a mating cable." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j3-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j3-pins-2.svg" title="Four-wire I2C connector J3 · contact group 2" alt="Four-wire I2C connector J3 · contact group 2 — historical source geometry and numbered contacts" caption="Source contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net. This reference does not establish a mating cable." width=420 %}

### Eight wiper output connectors

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j5-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j5-pins-1.svg" title="Wiper connector J5" alt="Wiper connector J5 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC1 W0. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j6-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j6-pins-1.svg" title="Wiper connector J6" alt="Wiper connector J6 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC1 W1. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j7-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j7-pins-1.svg" title="Wiper connector J7" alt="Wiper connector J7 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC1 W2. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j8-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j8-pins-1.svg" title="Wiper connector J8" alt="Wiper connector J8 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC1 W3. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j9-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j9-pins-1.svg" title="Wiper connector J9" alt="Wiper connector J9 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC2 W0. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j10-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j10-pins-1.svg" title="Wiper connector J10" alt="Wiper connector J10 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC2 W1. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j11-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j11-pins-1.svg" title="Wiper connector J11" alt="Wiper connector J11 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC2 W2. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j12-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j12-pins-1.svg" title="Wiper connector J12" alt="Wiper connector J12 — historical source geometry and numbered contacts" caption="Source contact 1 is ground and 2 is the corresponding wiper: IC2 W3. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

### Device contacts and address straps

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-1.svg" title="IC1 source contacts · group 1" alt="IC1 source contacts · group 1 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-2.svg" title="IC1 source contacts · group 2" alt="IC1 source contacts · group 2 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-3.svg" title="IC1 source contacts · group 3" alt="IC1 source contacts · group 3 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-4" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-4.svg" title="IC1 source contacts · group 4" alt="IC1 source contacts · group 4 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-1.svg" title="IC2 source contacts · group 1" alt="IC2 source contacts · group 1 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-2.svg" title="IC2 source contacts · group 2" alt="IC2 source contacts · group 2 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-3.svg" title="IC2 source contacts · group 3" alt="IC2 source contacts · group 3 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-4" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-4.svg" title="IC2 source contacts · group 4" alt="IC2 source contacts · group 4 — historical source geometry and numbered contacts" caption="Generic MCP44X1 source identification; README names MCP4451. Pin-function P3A versus net P0A is preserved as a source conflict. Straps and terminal labels do not identify the fitted part, resistance grade or measured I2C address." width=420 %}

### Resistors, decoupling and mounting

<details markdown="1">
<summary>Individual passive-component and mounting contacts</summary>

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r1-pins-1.svg" title="Resistor R1" alt="Resistor R1 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r2-pins-1.svg" title="Resistor R2" alt="Resistor R2 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r3-pins-1.svg" title="Resistor R3" alt="Resistor R3 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r4-pins-1.svg" title="Resistor R4" alt="Resistor R4 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r5-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r5-pins-1.svg" title="Resistor R5" alt="Resistor R5 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r6-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r6-pins-1.svg" title="Resistor R6" alt="Resistor R6 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r7-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r7-pins-1.svg" title="Resistor R7" alt="Resistor R7 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r8-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r8-pins-1.svg" title="Resistor R8" alt="Resistor R8 — historical source geometry and numbered contacts" caption="Numbered source resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not qualify combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-c1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/c1-pins-1.svg" title="Capacitor C1" alt="Capacitor C1 — historical source geometry and numbered contacts" caption="Source capacitor contact membership only. Supply sequencing, transients and assembled bypass performance remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-c2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/c2-pins-1.svg" title="Capacitor C2" alt="Capacitor C2 — historical source geometry and numbered contacts" caption="Source capacitor contact membership only. Supply sequencing, transients and assembled bypass performance remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h1-pins-1.svg" title="Mounting hole H1" alt="Mounting hole H1 — historical source geometry and numbered contacts" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h2-pins-1.svg" title="Mounting hole H2" alt="Mounting hole H2 — historical source geometry and numbered contacts" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h3-pins-1.svg" title="Mounting hole H3" alt="Mounting hole H3 — historical source geometry and numbered contacts" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h4-pins-1.svg" title="Mounting hole H4" alt="Mounting hole H4 — historical source geometry and numbered contacts" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

</details>

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_pcb), revision `f0c2f72fed83810b2d6defd8ab13097b317a3a39`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-0" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-0.svg" title="IC1 wiper circuit 0" alt="IC1 wiper circuit 0 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-1.svg" title="IC1 wiper circuit 1" alt="IC1 wiper circuit 1 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-2.svg" title="IC1 wiper circuit 2" alt="IC1 wiper circuit 2 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-3.svg" title="IC1 wiper circuit 3" alt="IC1 wiper circuit 3 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-power" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-power.svg" title="IC1 supply and reset" alt="IC1 supply and reset — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-decoupling" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-decoupling.svg" title="IC1 supply capacitor" alt="IC1 supply capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-0" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-0.svg" title="IC2 wiper circuit 0" alt="IC2 wiper circuit 0 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-1.svg" title="IC2 wiper circuit 1" alt="IC2 wiper circuit 1 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-2.svg" title="IC2 wiper circuit 2" alt="IC2 wiper circuit 2 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-3.svg" title="IC2 wiper circuit 3" alt="IC2 wiper circuit 3 — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-power" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-power.svg" title="IC2 supply and reset" alt="IC2 supply and reset — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-decoupling" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-decoupling.svg" title="IC2 supply capacitor" alt="IC2 supply capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-addresses" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/addresses.svg" title="Different address straps" alt="Different address straps — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-sda" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/sda.svg" title="SDA shared bus" alt="SDA shared bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-scl" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/scl.svg" title="SCL shared bus" alt="SCL shared bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-j2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/j2.svg" title="J2 four-pin bus" alt="J2 four-pin bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-j3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/j3.svg" title="J3 four-pin bus" alt="J3 four-pin bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-1.svg" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-5" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-5.svg" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-9" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-9.svg" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| GDGT_Digipot.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: I2C_SDA; 9: I2C_SCL; 10: GND |
| GDGT_Digipot.kicad_pcb | J9 | Conn_01x02_Pin | 1: GND; 2: /P2W0 |
| GDGT_Digipot.kicad_pcb | J11 | Conn_01x02_Pin | 1: GND; 2: /P2W2 |
| GDGT_Digipot.kicad_pcb | J3 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: I2C_SDA; 4: I2C_SCL; MP: No assigned net |
| GDGT_Digipot.kicad_pcb | J10 | Conn_01x02_Pin | 1: GND; 2: /P2W1 |
| GDGT_Digipot.kicad_pcb | J2 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: I2C_SDA; 4: I2C_SCL; MP: No assigned net |
| GDGT_Digipot.kicad_pcb | J12 | Conn_01x02_Pin | 1: GND; 2: /P2W3 |
| GDGT_Digipot.kicad_pcb | J7 | Conn_01x02_Pin | 1: GND; 2: /P1W2 |
| GDGT_Digipot.kicad_pcb | J6 | Conn_01x02_Pin | 1: GND; 2: /P1W1 |
| GDGT_Digipot.kicad_pcb | J8 | Conn_01x02_Pin | 1: GND; 2: /P1W3 |
| GDGT_Digipot.kicad_pcb | J4 | Conn_01x10_Pin | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: I2C_SDA; 9: I2C_SCL; 10: GND |
| GDGT_Digipot.kicad_pcb | J5 | Conn_01x02_Pin | 1: GND; 2: /P1W0 |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For an analogue-setpoint experiment, identify the exact fitted IC suffix and address straps first. Disconnect the controlled machine/load and use a measured benign analogue fixture within the device limits. Attach only one correctly powered I2C host and verify pull-up voltage and addresses before writing wiper codes. Prime GH/J38 or GB/J33 I2C contacts are only candidates until the exact pin mux and board rail wiring are source-matched. Never borrow the V1 current-control settings without proving the driver.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

### Address straps and bus loading

For the MCP4431/MCP4451 family, the [Microchip data sheet, section 6.2.4 and table 6-2](https://ww1.microchip.com/downloads/en/DeviceDoc/MCP4451.pdf) gives seven-bit addresses `01011 A1 A0`. The selected source ties IC1 A1/A0 LOW/LOW and IC2 A1/A0 LOW/HIGH, giving **0x2C and 0x2D respectively if the fitted devices match that family and the straps are valid at power-up**. A0 is latched at power-on/brownout reset; these are source-derived expectations, not measured bus responses or firmware configuration keys.

The two 2.2 kΩ pull-ups on each bus line are in parallel, giving **nominal 1.1 kΩ from SDA to 3.3 V and from SCL to 3.3 V**, before any host pull-ups. Verify combined sink current, rail loading and edge timing for the actual bus. The A/B/W terminals must remain within the fitted device's supply rails; do not inject an external analogue voltage or use a wiper as a load supply. Resolution, resistance option and loading still determine the result; no voltage-per-code or DAC accuracy is established.

## Smoothieware support and example boundary

The selected board requires an I2C controller that addresses each MCP44X1 device and selects/updates the intended one of its four wipers. The pinned V2 application does not supply that MCP44X1 control workflow. Its CurrentControl module implements either BOARD_MINIALPHA PWM current outputs or DRIVER_TMC actuator current control; neither sends I2C potentiometer commands or maps this board’s eight wipers. M906/M907 and a generic [current control] section therefore do not configure this board. The complete reviewed application C++ source also contains no I2C/TwoWire consumer, MCP44X1 control or digipot implementation. This is a finding about that pinned application snapshot, not a claim that the MCU lacks I2C, that custom/later firmware cannot support it, or that a separately supplied controller is impossible. Email **wolf.arthur@gamil.com** about the missing dual-MCP44X1 I2C/wiper support, naming both populated IC parts, their address straps and the intended analogue setpoint channels. No runnable INI is supplied; the conditional numeric address derivation above does not implement the missing driver.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Exact fitted IC part/resistance, actual address responses, analogue loading limits and V2 driver/channel allocation remain unresolved. The source strap and end-terminal connections are described above; they are not assembled-board measurements. The complete Prime/peripheral wiring diagram remains incomplete. The board-reference sheets document the source contacts without qualifying an installation.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/DualDigipot)
- [Pinned original source](https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39)
- [Original GDGT_Digipot.kicad_pcb](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_pcb)
- [Original GDGT_Digipot.kicad_sch](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_sch)
- [Original README.md](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
