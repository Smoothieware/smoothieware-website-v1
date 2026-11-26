---
layout: default
title: "Dual-device I2C digital potentiometer"
permalink: /extensions/historical-dual-digital-potentiometer
---

# Dual-device I2C digital potentiometer

Two MCP44X1-family devices expose four wiper outputs each. The board’s dual designation refers to two ICs, not just two resistive channels. It is intended to adjust analogue setpoints electronically, with Gadgeteer I2C, Qwiic and ordinary header access. The README describes it as compatible with the V1 digipot arrangement; Smoothieware V2 has no driver for it (see below).

## Original host

This guide documents the **Ccecil design**. [The upstream source](https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39) contains the design files. It targets the Smoothieboard V2/Gadgeteer era. That target does not mean compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1 and J4 share the ten-contact host map: 1 3.3 V, 2 5 V, 3–7 spare P3–P7, 8 SDA, 9 SCL, 10 ground. J2/J3 are four-wire 1 ground, 2 3.3 V, 3 SDA, 4 SCL. J5–J8 expose device 1 wipers 0–3, and J9–J12 device 2 wipers 0–3, each 1 ground, 2 wiper. Check the fitted resolution/resistance suffix before use. The address straps and nominal bus pull-ups are explained below. Do not treat a wiper as a power output.

The PCB ties all four A terminals of each IC together and feeds that shared node from 3.3 V through one 33 kΩ resistor (R3 for IC1, R7 for IC2). All B terminals connect to ground. Only the wipers are individually brought out: these are shared-reference setpoint circuits, not eight independently accessible three-terminal potentiometers. Loading a wiper can affect the shared reference; a resistance code alone does not establish its output voltage.

The board straps IC1 A0/A1 to ground/ground and IC2 A0/A1 to 3.3 V/ground. The numeric addresses still need decoding against the exact fitted device. SDA has two 2.2 kΩ pull-ups, R1/R5, and SCL has two more, R2/R6: each line therefore has an effective 1.1 kΩ board pull-up to 3.3 V before any host or cable pull-ups. Verify the complete bus current budget. Both reset inputs have 100 kΩ pull-ups to 3.3 V; each pin 14 is explicitly unconnected.

## Board-reference diagram

These sheets identify every connector and component contact. They describe board geometry and nets, not a plug mating face. **The P3A pin-function label and P0A net name disagree in the design files.** Do not resolve that conflict from the illustration.

The schematic and PCB identify generic MCP44X1 devices while the README names MCP4451. Identify the fitted variant, resistance grade and address responses on your board. The address derivation later in this guide depends on them.

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-overview" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/overview.png" title="Dual-device potentiometer overview" alt="Dual-device potentiometer overview" caption="Two ICs expose four wipers each. Shared A-end references, grounded B ends and straps do not make eight independent three-terminal potentiometers  or specified analogue outputs." width=420 %}

### Host and shared I2C connectors

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j1-pins-1.png" title="Host header J1 · contact group 1" alt="Host header J1 · contact group 1" caption="Host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j1-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j1-pins-2.png" title="Host header J1 · contact group 2" alt="Host header J1 · contact group 2" caption="Host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j4-pins-1.png" title="Host header J4 · contact group 1" alt="Host header J4 · contact group 1" caption="Host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j4-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j4-pins-2.png" title="Host header J4 · contact group 2" alt="Host header J4 · contact group 2" caption="Host contacts: separate 3.3 V/5 V rails, pass-through signals, SDA, SCL and ground. Verify physical numbering, rail budget and cable orientation separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j2-pins-1.png" title="Four-wire I2C connector J2 · contact group 1" alt="Four-wire I2C connector J2 · contact group 1" caption="Contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net.  No mating cable is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j2-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j2-pins-2.png" title="Four-wire I2C connector J2 · contact group 2" alt="Four-wire I2C connector J2 · contact group 2" caption="Contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net.  No mating cable is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j3-pins-1.png" title="Four-wire I2C connector J3 · contact group 1" alt="Four-wire I2C connector J3 · contact group 1" caption="Contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net.  No mating cable is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j3-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j3-pins-2.png" title="Four-wire I2C connector J3 · contact group 2" alt="Four-wire I2C connector J3 · contact group 2" caption="Contacts are ground, 3.3 V, SDA and SCL. Repeated MP pads are mechanical-only, with no assigned electrical net.  No mating cable is specified." width=420 %}

### Eight wiper output connectors

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j5-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j5-pins-1.png" title="Wiper connector J5" alt="Wiper connector J5" caption="Contact 1 is ground and 2 is the corresponding wiper: IC1 W0. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j6-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j6-pins-1.png" title="Wiper connector J6" alt="Wiper connector J6" caption="Contact 1 is ground and 2 is the corresponding wiper: IC1 W1. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j7-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j7-pins-1.png" title="Wiper connector J7" alt="Wiper connector J7" caption="Contact 1 is ground and 2 is the corresponding wiper: IC1 W2. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j8-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j8-pins-1.png" title="Wiper connector J8" alt="Wiper connector J8" caption="Contact 1 is ground and 2 is the corresponding wiper: IC1 W3. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j9-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j9-pins-1.png" title="Wiper connector J9" alt="Wiper connector J9" caption="Contact 1 is ground and 2 is the corresponding wiper: IC2 W0. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j10-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j10-pins-1.png" title="Wiper connector J10" alt="Wiper connector J10" caption="Contact 1 is ground and 2 is the corresponding wiper: IC2 W1. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j11-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j11-pins-1.png" title="Wiper connector J11" alt="Wiper connector J11" caption="Contact 1 is ground and 2 is the corresponding wiper: IC2 W2. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-j12-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/j12-pins-1.png" title="Wiper connector J12" alt="Wiper connector J12" caption="Contact 1 is ground and 2 is the corresponding wiper: IC2 W3. Do not treat a wiper as a supply or infer voltage per code, resistance, load capability or DAC accuracy." width=420 %}

### Device contacts and address straps

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-1.png" title="IC1 contacts · group 1" alt="IC1 contacts · group 1" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-2.png" title="IC1 contacts · group 2" alt="IC1 contacts · group 2" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-3.png" title="IC1 contacts · group 3" alt="IC1 contacts · group 3" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic1-pins-4" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic1-pins-4.png" title="IC1 contacts · group 4" alt="IC1 contacts · group 4" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-1.png" title="IC2 contacts · group 1" alt="IC2 contacts · group 1" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-2.png" title="IC2 contacts · group 2" alt="IC2 contacts · group 2" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-3.png" title="IC2 contacts · group 3" alt="IC2 contacts · group 3" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-ic2-pins-4" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/ic2-pins-4.png" title="IC2 contacts · group 4" alt="IC2 contacts · group 4" caption="Generic MCP44X1 identification; README names MCP4451. Pin-function P3A and net P0A disagree. Straps and terminal labels do not identify the fitted part, resistance grade or I2C address." width=420 %}

### Resistors, decoupling and mounting

<details markdown="1">
<summary>Individual passive-component and mounting contacts</summary>

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r1-pins-1.png" title="Resistor R1" alt="Resistor R1" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r2-pins-1.png" title="Resistor R2" alt="Resistor R2" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r3-pins-1.png" title="Resistor R3" alt="Resistor R3" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r4-pins-1.png" title="Resistor R4" alt="Resistor R4" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r5-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r5-pins-1.png" title="Resistor R5" alt="Resistor R5" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r6-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r6-pins-1.png" title="Resistor R6" alt="Resistor R6" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r7-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r7-pins-1.png" title="Resistor R7" alt="Resistor R7" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-r8-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/r8-pins-1.png" title="Resistor R8" alt="Resistor R8" caption="Resistor contacts identify the bus, shared-reference and reset networks. Read these with the circuit description; a nominal value does not set combined pull-up current, analogue loading or startup behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-c1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/c1-pins-1.png" title="Capacitor C1" alt="Capacitor C1" caption="Capacitor contacts only. Supply sequencing, transients and bypass performance are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-c2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/c2-pins-1.png" title="Capacitor C2" alt="Capacitor C2" caption="Capacitor contacts only. Supply sequencing, transients and bypass performance are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h1-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h1-pins-1.png" title="Mounting hole H1" alt="Mounting hole H1" caption="Unnumbered mounting hole with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h2-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h2-pins-1.png" title="Mounting hole H2" alt="Mounting hole H2" caption="Unnumbered mounting hole with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h3-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h3-pins-1.png" title="Mounting hole H3" alt="Mounting hole H3" caption="Unnumbered mounting hole with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-digipot-reference-h4-pins-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/annotated-reference/h4-pins-1.png" title="Mounting hole H4" alt="Mounting hole H4" caption="Unnumbered mounting hole with no assigned electrical net. Verify fastener fit and mechanical clearance separately." width=420 %}

</details>

### Supplementary logical circuits

These circuit sheets explain the connectivity. They do not copy the original board artwork or placement and supplement the board-reference sheets above. Use the contact list and all companion sheets together.

Source: [original circuit](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_pcb). No grant to redistribute the original artwork is stated.

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-0" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-0.png" title="IC1 wiper circuit 0" alt="IC1 wiper circuit 0 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-1.png" title="IC1 wiper circuit 1" alt="IC1 wiper circuit 1 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-2.png" title="IC1 wiper circuit 2" alt="IC1 wiper circuit 2 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-wiper-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-wiper-3.png" title="IC1 wiper circuit 3" alt="IC1 wiper circuit 3 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-power" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-power.png" title="IC1 supply and reset" alt="IC1 supply and reset — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic1-decoupling" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic1-decoupling.png" title="IC1 supply capacitor" alt="IC1 supply capacitor — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-0" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-0.png" title="IC2 wiper circuit 0" alt="IC2 wiper circuit 0 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-1.png" title="IC2 wiper circuit 1" alt="IC2 wiper circuit 1 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-2.png" title="IC2 wiper circuit 2" alt="IC2 wiper circuit 2 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-wiper-3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-wiper-3.png" title="IC2 wiper circuit 3" alt="IC2 wiper circuit 3 — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-power" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-power.png" title="IC2 supply and reset" alt="IC2 supply and reset — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-ic2-decoupling" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/ic2-decoupling.png" title="IC2 supply capacitor" alt="IC2 supply capacitor — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-addresses" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/addresses.png" title="Different address straps" alt="Different address straps — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-sda" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/sda.png" title="SDA shared bus" alt="SDA shared bus — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-scl" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/scl.png" title="SCL shared bus" alt="SCL shared bus — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-j2" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/j2.png" title="J2 four-pin bus" alt="J2 four-pin bus — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-j3" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/j3.png" title="J3 four-pin bus" alt="J3 four-pin bus — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-1" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-1.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-5" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-5.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-dual-digital-potentiometer-factual-host-9" src="/images/extensions/historical-dual-digital-potentiometer/guides/factual-circuits/host-9.png" title="Host header paths" alt="Host header paths — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

### Numbered contacts and controls

The table lists net memberships. Leave unassigned and unconnected pads unconnected. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require physical identity checks before wiring.

<details markdown="1">
<summary>Contact list</summary>

<div class="extension-contact-table" role="region" aria-label="Contact list; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source file | Connector/control | Label | Contact → net |
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

For an analogue-setpoint experiment, identify the exact fitted IC suffix and address straps first. Disconnect the controlled machine/load and use a measured benign analogue fixture within the device limits. Attach only one correctly powered I2C host and verify pull-up voltage and addresses before writing wiper codes. Before using Prime GH/J38 or GB/J33 I2C contacts, check the pin mux and board rail wiring. Never reuse the V1 current-control settings.

GF/J37 examples refer only to the **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

### Address straps and bus loading

For the MCP4431/MCP4451 family, the [Microchip data sheet, section 6.2.4 and table 6-2](https://ww1.microchip.com/downloads/en/DeviceDoc/MCP4451.pdf) gives seven-bit addresses `01011 A1 A0`. The board ties IC1 A1/A0 LOW/LOW and IC2 A1/A0 LOW/HIGH, giving **0x2C and 0x2D respectively if the fitted devices match that family and the straps are valid at power-up**. A0 is latched at power-on/brownout reset; these are expected addresses, not firmware configuration keys.

The two 2.2 kΩ pull-ups on each bus line are in parallel, giving **nominal 1.1 kΩ from SDA to 3.3 V and from SCL to 3.3 V**, before any host pull-ups. Verify combined sink current, rail loading and edge timing for the actual bus. The A/B/W terminals must remain within the fitted device's supply rails; do not inject an external analogue voltage or use a wiper as a load supply. Resolution, resistance option and loading still determine the result; no voltage-per-code or DAC accuracy is specified.

## Smoothieware support and example boundary

The board requires an I2C controller that addresses each MCP44X1 device and selects/updates the intended one of its four wipers. The V2 application does not supply that MCP44X1 control workflow. Its CurrentControl module implements either BOARD_MINIALPHA PWM current outputs or DRIVER_TMC actuator current control; neither sends I2C potentiometer commands or maps this board’s eight wipers. M906/M907 and a generic [current control] section therefore do not configure this board. The application contains no I2C/TwoWire consumer, MCP44X1 control or digipot implementation, so there is no configuration for this board. This does not mean the microcontroller lacks I2C or that custom firmware or a separate controller cannot drive it.

The V2 behavior described here refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Your installed firmware may differ.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/DualDigipot)
- [Original design source](https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39)
- [Original GDGT_Digipot.kicad_pcb](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_pcb)
- [Original GDGT_Digipot.kicad_sch](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_sch)
- [Original README.md](https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/README.md)

The project has no license file; that is not public-domain permission. Source attribution is retained for these reference sheets.

[All extension boards](/extension-boards)
