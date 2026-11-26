---
layout: default
title: "OptoIsoStop isolated endstop interface"
permalink: /extensions/historical-opto-isolated-endstop-adapter
---

# OptoIsoStop isolated endstop interface

An H11L1SM optoisolator conditions an endstop-style field signal. The design accepts 3–24 V inputs, selected by cutting current-limiting jumpers. The schematic shares +5 V across both headers, so the optical component does not establish a galvanically isolated board interface. Trace the return links and check input current before selecting a voltage.

## How the circuit works

The field signal drives the H11L1SM’s input LED through a resistor network; the light is detected by a separately powered Schmitt-trigger logic output. In the schematic, JP1.3 connects through R1 (1.5 kΩ) to U1.1, the LED anode. U1.2 is the cathode. Its return can reach JP1.2 through R2 (5.9 kΩ), while JMP1 bypasses that resistor. JMP2 can join the LED-cathode node to the logic-side return, U1.5 and JP2.2. These jumper states change current or reference connectivity and must be identified before choosing an input voltage.

U1.6 is the +5 V supply and U1.4 is the logic output at JP2.3. The optocoupler is not a passive contact: output voltage, pull-up requirements, switching polarity and thresholds must be checked against the fitted device and intended host. The schematic also connects JP1.1 and JP2.1 to the same +5 V net. Therefore, the optical component alone does not establish an isolated board interface. Preserve the jumper and return map, and check cable mating on the physical board.

## Original design and host

This guide documents the [original Ccecil design](https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c). It targets the Smoothieboard V2/Gadgeteer era; check compatibility with your V2 Prime board, cable and firmware build.

## Interfaces, power and limitations

The original files are a schematic XML nested inside OES_Small v10.fsch, a PDF and an image. The circuit includes R1=1500 ohm,R2=5900 ohm, two cuttable links and two three-contact headers. The complete schematic pin membership below gives the circuit nodes. Original library connect maps explicitly map header gate A pins 1–3 to physical pad numbers1–3, and jumper gate G$1 pins 1–2 to pads 1–2; check connector mating orientation on the physical board. Both JP1.1 and JP2.1 share the schematic +5V net, so a galvanically isolated powered system must not be assumed. The README gives a 3–24 V input range.

### Supplementary logical circuits

These circuit sheets explain the board connectivity. Use the contact inventory and all companion sheets together.

Source: [original circuit](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/OptoIsoStop/OES_Small%20v10.fsch).

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-input" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/input-font-matched.png" title="Source optocoupler LED series branch" alt="Source optocoupler LED series branch — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-input-return" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/input-return-font-matched.png" title="Input return jumper" alt="Input return jumper — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-shunt" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/shunt-font-matched.png" title="R2 across input return" alt="R2 across input return — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-output" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/output-font-matched.png" title="Opto output nodes" alt="Opto output nodes — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-shared-supply" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/shared-supply-font-matched.png" title="Shared 5V supply" alt="Shared 5V supply — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-ground-link" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/ground-link-font-matched.png" title="Ground-link jumper" alt="Ground-link jumper — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-opto-isolated-endstop-adapter-factual-source-boundary" src="/images/extensions/historical-opto-isolated-endstop-adapter/guides/factual-circuits/source-boundary-font-matched.png" title="Isolation limits" alt="Isolation limits — logical connections, not physical board layout" caption="Logical connections only; this drawing does not show connector locations or mating." width=420 %}

### Numbered contacts and controls

These are schematic and PCB net memberships, not measured electrical behaviour. Leave unconnected pads unconnected. Auto-generated net names are not cable colours. Check repeated footprints or pad numbers on the physical board before wiring.

| File | Connector/control | Label | Contact → source net |
|---|---|---|---|
| Schematic only | JMP2 | JUMPER-SMT_2_NC_TRACE | 2: N$5; 1: N$2 |
| Schematic only | JP2 | PINHD-1X3 | 3: N$4; 2: N$2; 1: +5V |
| Schematic only | JP1 | PINHD-1X3 | 3: N$3; 2: N$6; 1: +5V |
| Schematic only | JMP1 | JUMPER-SMT_2_NC_TRACE | 1: N$5; 2: N$6 |

## Practical use with Smoothieboard V2 Prime

For an endstop-interface bench setup, take the exact header pin functions from the schematic and identify them on the physical board before making any cable. Check resistor and jumper choices and field current for your sensor voltage. Measure the host output and each power-loss state into a test fixture. Confirm mating orientation and host-side logic levels before connecting to the Prime.

On the Smoothieboard V2 Prime GF/J37 header, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current draw and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example

### H11L1 output: raw observation
The H11L1 output circuitry shares the +5 V reference; do not treat it as an isolated 3.3 V output. There is no H11L1 register driver. Identify the output node and terminal on the board, and adapt its pullup and voltage before connecting it to a Prime input. Schematic header numbers do not give physical connector orientation.

For a 3.3 V compatible logic output routed to Prime GF/J37.3 PB1 with verified signal ground, the following gives a non-motion observation that sets no homing polarity:

```ini
[endstops]
opto_contact_observation.enable = true
opto_contact_observation.pin = PB1-
opto_contact_observation.axis = X
opto_contact_observation.homing_direction = none
opto_contact_observation.limit_enable = false
```

An existing valid X actuator and exclusive pins are required. `M119` reports the sampled logical state. The trailing minus disables internal pulls without inversion; supply a suitable external bias. No homing, limit or software-halt action is configured. Record both stable stimulus states and the disconnected/unpowered state with all machine motion disabled. This observation does not determine a safe fault polarity or provide debouncing/edge timing.

Stimulate the actual optocoupler input in both states with a suitable source; never connect its 5 V pullup directly to a Prime input. The full endstop application still needs active polarity, loss-state/fault policy and physical wiring.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/OptoIsoStop)
- [Original source](https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c)
- [Original OES_Small v10.fsch](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/OptoIsoStop/OES_Small%20v10.fsch)
- [Original README.md](https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/README.md)

No project license file is included with the original source. Preserve attribution; the absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
