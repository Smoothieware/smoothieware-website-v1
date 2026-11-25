---
layout: default
title: "OptoIsoStop isolated endstop interface"
permalink: /extensions/historical-opto-isolated-endstop-adapter
---

# OptoIsoStop isolated endstop interface

An H11L1SM optoisolator conditions an endstop-style field signal. The author’s prototype note describes 3–24 V inputs selected by cutting current-limiting jumpers. The selected schematic shares +5 V across both headers, so the optical component does not establish a galvanically isolated board interface. Trace the actual return links and qualify input current before selecting a voltage.

## How the circuit works

The field signal drives the H11L1SM’s input LED through a resistor network; the light is detected by a separately powered Schmitt-trigger logic output. In the retained schematic, JP1.3 connects through R1 (1.5 kΩ) to U1.1, the LED anode. U1.2 is the cathode. Its return can reach JP1.2 through R2 (5.9 kΩ), while JMP1 bypasses that resistor. JMP2 can join the LED-cathode node to the logic-side return, U1.5 and JP2.2. These jumper states change current or reference connectivity and must be identified before choosing an input voltage.

U1.6 is the +5 V supply and U1.4 is the logic output at JP2.3. The optocoupler is not a passive contact: output voltage, pull-up requirements, switching polarity and thresholds must be checked against the fitted device and intended host. The schematic also connects JP1.1 and JP2.1 to the same +5 V net. Therefore, the optical component alone does not establish an isolated board interface. Preserve the actual jumper/return map; the source has no PCB geometry from which to establish a safe barrier or cable mating view.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

The source contains an original schematic XML nested inside OES_Small v10.fsch, a PDF and an image, but no board-layout source. The circuit includes R1=1500 ohm,R2=5900 ohm, two cuttable links and two three-contact headers. The complete schematic pin membership below is evidence for intended circuit nodes. Original library connect maps explicitly map header gate A pins 1–3 to physical pad numbers1–3, and jumper gate G$1 pins 1–2 to pads 1–2; this does not establish connector mating orientation or PCB geometry. Both JP1.1 and JP2.1 share the schematic +5V net, so a galvanically isolated powered system must not be assumed. The 3–24 V README range is not a measured operating qualification.

## Board-reference diagram

**Pending and unaccepted:** the historical source-matched abstract, annotated connector/pin/control pills and readable callouts are not yet integrated. Modern family artwork cannot substitute for this board’s geometry. No original PCB layout is available: only the original schematic and source image can currently be described.

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and **do not satisfy the missing populated board-reference diagram**. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/OptoIsoStop/OES_Small%20v10.fsch), revision `d3ac5cda385b889e9ff92fccb7ba4577af19327c`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-input" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/input-font-matched.png" title="Source optocoupler LED series branch" alt="Source optocoupler LED series branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-input-return" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/input-return-font-matched.png" title="Input return jumper" alt="Input return jumper — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-shunt" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/shunt-font-matched.png" title="R2 across input return" alt="R2 across input return — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-output" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/output-font-matched.png" title="Opto output nodes" alt="Opto output nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-shared-supply" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/shared-supply-font-matched.png" title="Shared 5V supply" alt="Shared 5V supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-ground-link" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/ground-link-font-matched.png" title="Ground-link jumper" alt="Ground-link jumper — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-source-boundary" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/source-boundary-font-matched.png" title="Missing PCB and isolation qualification" alt="Missing PCB and isolation qualification — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| Schematic only | JMP2 | JUMPER-SMT_2_NC_TRACE | 2: N$5; 1: N$2 |
| Schematic only | JP2 | PINHD-1X3 | 3: N$4; 2: N$2; 1: +5V |
| Schematic only | JP1 | PINHD-1X3 | 3: N$3; 2: N$6; 1: +5V |
| Schematic only | JMP1 | JUMPER-SMT_2_NC_TRACE | 1: N$5; 2: N$6 |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For an endstop-interface bench study, recover the exact header pin functions from the schematic and identify the physical assembly against the source image before any cable is made. Verify resistor/jumper choices and field current for a named sensor voltage. Measure the host output and each power-loss state into a test fixture. No complete Prime cable can be accepted without the physical layout/mating orientation and proven host-side logic levels; do not substitute a modern optoisolator abstract.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### H11L1 schematic output: conditional raw observation
The retained record is schematic-only. H11L1 output circuitry shares the source+5 V reference and must not be described as a proven isolated3.3 V output. There is no H11L1 register driver. Identify the schematic output node and physically verified terminal on the actual assembly; qualify or adapt its pullup/voltage before connecting it to a Prime input. Source-numbered schematic headers do not establish physical connector orientation.

For a separately qualified logic output routed to Prime GF/J37.3 PB1 with verified signal ground, the following establishes useful non-motion observation without inventing homing polarity:

```ini
[endstops]
opto_contact_observation.enable = true
opto_contact_observation.pin = PB1-
opto_contact_observation.axis = X
opto_contact_observation.homing_direction = none
opto_contact_observation.limit_enable = false
```

An existing valid X actuator and exclusive pins are required. `M119` reports the sampled logical state. The trailing minus disables internal pulls without inversion; supply a separately qualified external bias. No homing, limit or software-halt action is configured. Record both stable stimulus states and the disconnected/unpowered state with all machine motion disabled. This observation does not determine a safe fault polarity or provide debouncing/edge timing.

Stimulate the actual optocoupler input in both states with a qualified source; do not connect its5 V pullup directly merely because this software parses. The full endstop application still needs active polarity, loss-state/fault policy and physical wiring. For required missing application support email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining requirements

PCB geometry is missing. Faithful board abstract, both connector orientations, jumper current/voltage envelopes, isolated returns and host output polarity remain unresolved. Both instructional diagrams, public source/link availability and desktop/narrow rendered usability remain open.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/OptoIsoStop)
- [Pinned original source](https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c)
- [Original OES_Small v10.fsch](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/OptoIsoStop/OES_Small%20v10.fsch)
- [Original README.md](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/README.md)

The retained inventory did not identify a project license file. Preserve attribution and resolve redistribution rights before importing original artwork/layouts; absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
