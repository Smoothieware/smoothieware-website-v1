---
layout: default
title: "Five-port Gadgeteer header adapter"
permalink: /extensions/historical-five-port-gadgeteer-header-adapter
---

# Five-port Gadgeteer header adapter

This passive carrier converts five ten-contact Gadgeteer ports into seven-signal 2.54 mm socket rows and shared power breakouts. It does not create 35 new MCU signals; each row still depends on the host port attached to its corresponding input. The source states V2 use and possible compatibility with standard Gadgeteer hosts.

## Origin and original host

This guide documents Ccecil’s design; see the [original source](https://github.com/Ccecil/HeaderAdapter/tree/aa50fd44325f95268834b9adbace3fd9e585a2f7). The design targets the Smoothieboard V2/Gadgeteer era. That does not make it compatible with every V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1–J5 each use 1 3.3 V, 2 5 V, 3–9 that port’s seven signals, 10 ground. J8/J9/J11/J12/J13 correspond to J1/J2/J3/J4/J5 signals3–9 in order. J6 is 3.3 V/ground; J7 is 5 V/ground. The PCB contains three physical footprints all named J10 with the same five-contact power map. This duplicate reference must be disambiguated by geometry before drawing. Rails are common across the inputs, so connecting independently powered hosts may parallel their regulators.

## Board-reference diagram

These reference sheets show every connector contact. The three footprints all named J10 are identified here as **J10A, J10B and J10C**, using their distinct physical locations; these suffixes disambiguate this reference and do not rename the original design. Connector locations and contact numbers are not a cable mating-face guarantee.

**J6 and J7 use JST-XH footprints at 2.50 mm pitch, not 2.54 mm.** Do not infer a mating part or power-flow direction from the illustration. Shared rails can backfeed separately powered hosts; do not combine power sources.

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-overview" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/overview.png" title="Five-port Gadgeteer adapter overview" alt="Five-port Gadgeteer adapter overview" caption="Passive reference: five host ports route their own seven signal lines to output rows. It does not create additional GPIOs, isolation or a multi-host power system." width=420 %}

### Five host headers

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j1-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j1-pins-1.png" title="Host J1 · contact group 1" alt="Host J1 · contact group 1" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j1-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j1-pins-2.png" title="Host J1 · contact group 2" alt="Host J1 · contact group 2" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j2-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j2-pins-1.png" title="Host J2 · contact group 1" alt="Host J2 · contact group 1" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j2-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j2-pins-2.png" title="Host J2 · contact group 2" alt="Host J2 · contact group 2" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j3-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j3-pins-1.png" title="Host J3 · contact group 1" alt="Host J3 · contact group 1" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j3-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j3-pins-2.png" title="Host J3 · contact group 2" alt="Host J3 · contact group 2" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j4-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j4-pins-1.png" title="Host J4 · contact group 1" alt="Host J4 · contact group 1" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j4-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j4-pins-2.png" title="Host J4 · contact group 2" alt="Host J4 · contact group 2" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j5-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j5-pins-1.png" title="Host J5 · contact group 1" alt="Host J5 · contact group 1" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j5-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j5-pins-2.png" title="Host J5 · contact group 2" alt="Host J5 · contact group 2" caption="Contacts 1 and 2 carry separate 3.3 V and 5 V rails, 3–9 carry that port’s seven signals, and 10 is ground. Check the complete cable numbering and common-rail supply before connection." width=420 %}

### Seven-signal output rows

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j8-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j8-pins-1.png" title="Signal row J8 · contact group 1" alt="Signal row J8 · contact group 1" caption="J8 contacts 1–7 correspond in order to J1 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j8-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j8-pins-2.png" title="Signal row J8 · contact group 2" alt="Signal row J8 · contact group 2" caption="J8 contacts 1–7 correspond in order to J1 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j9-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j9-pins-1.png" title="Signal row J9 · contact group 1" alt="Signal row J9 · contact group 1" caption="J9 contacts 1–7 correspond in order to J2 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j9-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j9-pins-2.png" title="Signal row J9 · contact group 2" alt="Signal row J9 · contact group 2" caption="J9 contacts 1–7 correspond in order to J2 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j11-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j11-pins-1.png" title="Signal row J11 · contact group 1" alt="Signal row J11 · contact group 1" caption="J11 contacts 1–7 correspond in order to J3 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j11-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j11-pins-2.png" title="Signal row J11 · contact group 2" alt="Signal row J11 · contact group 2" caption="J11 contacts 1–7 correspond in order to J3 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j12-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j12-pins-1.png" title="Signal row J12 · contact group 1" alt="Signal row J12 · contact group 1" caption="J12 contacts 1–7 correspond in order to J4 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j12-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j12-pins-2.png" title="Signal row J12 · contact group 2" alt="Signal row J12 · contact group 2" caption="J12 contacts 1–7 correspond in order to J4 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j13-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j13-pins-1.png" title="Signal row J13 · contact group 1" alt="Signal row J13 · contact group 1" caption="J13 contacts 1–7 correspond in order to J5 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j13-pins-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j13-pins-2.png" title="Signal row J13 · contact group 2" alt="Signal row J13 · contact group 2" caption="J13 contacts 1–7 correspond in order to J5 contacts 3–9. These are passive paths from that host port; pin functions, bias and firmware ownership depend on the selected controller." width=420 %}

### Shared power breakouts

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j6-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j6-pins-1.png" title="J6 JST-XH power breakout" alt="J6 JST-XH power breakout" caption="JST-XH footprint: two contacts at 2.50 mm pitch. 3.3 V and ground nets do not specify current capacity, flow direction or mating hardware. Do not parallel supplies." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j7-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j7-pins-1.png" title="J7 JST-XH power breakout" alt="J7 JST-XH power breakout" caption="JST-XH footprint: two contacts at 2.50 mm pitch. 5 V and ground nets do not specify current capacity, flow direction or mating hardware. Do not parallel supplies." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j10a-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j10a-pins-1.png" title="Physical bank J10A" alt="Physical bank J10A" caption="One of three physically separate footprints all named J10. Follow this sheet’s highlighted location and numbered contacts; identical reference text or net membership does not make the banks physically interchangeable." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j10b-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j10b-pins-1.png" title="Physical bank J10B" alt="Physical bank J10B" caption="One of three physically separate footprints all named J10. Follow this sheet’s highlighted location and numbered contacts; identical reference text or net membership does not make the banks physically interchangeable." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-j10c-pins-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/j10c-pins-1.png" title="Physical bank J10C" alt="Physical bank J10C" caption="One of three physically separate footprints all named J10. Follow this sheet’s highlighted location and numbered contacts; identical reference text or net membership does not make the banks physically interchangeable." width=420 %}

### Mounting and rail limits

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-mounting-limits" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/mounting-limits.png" title="Mounting holes and mechanical limits" alt="Mounting holes and mechanical limits" caption="Unnumbered mounting holes have no assigned electrical nets. Fasteners, clearances, connector fit and cable orientation must be checked." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-reference-rail-limits" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/annotated-reference/rail-limits.png" title="Shared rails and use limits" alt="Shared rails and use limits" caption="Rails are common across host ports and power breakouts. Do not parallel independently powered hosts or assume a regulator or isolation." width=420 %}

### Supplementary logical circuits

These circuit sheets explain the board connectivity. They do not copy the original board artwork, placement or native files and supplement the board-reference sheets above. Use the contact inventory and all companion sheets together. Check physical cable orientation before wiring.

Source: [original circuit](https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/HeaderAdapter.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j1-3" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j1-3-font-matched.png" title="J1 signal breakout" alt="J1 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j1-7" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j1-7-font-matched.png" title="J1 signal breakout" alt="J1 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j2-3" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j2-3-font-matched.png" title="J2 signal breakout" alt="J2 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j2-7" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j2-7-font-matched.png" title="J2 signal breakout" alt="J2 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j3-3" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j3-3-font-matched.png" title="J3 signal breakout" alt="J3 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j3-7" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j3-7-font-matched.png" title="J3 signal breakout" alt="J3 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j4-3" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j4-3-font-matched.png" title="J4 signal breakout" alt="J4 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j4-7" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j4-7-font-matched.png" title="J4 signal breakout" alt="J4 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j5-3" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j5-3-font-matched.png" title="J5 signal breakout" alt="J5 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-j5-7" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/j5-7-font-matched.png" title="J5 signal breakout" alt="J5 signal breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-common-1" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/common-1-font-matched.png" title="3.3V shared contact groups" alt="3.3V shared contact groups — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-common-2" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/common-2-font-matched.png" title="5V shared contact groups" alt="5V shared contact groups — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-common-10" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/common-10-font-matched.png" title="Ground shared contact groups" alt="Ground shared contact groups — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-five-port-gadgeteer-header-adapter-factual-instance-identity" src="/images/extensions/historical-five-port-gadgeteer-header-adapter/guides/factual-circuits/instance-identity-font-matched.png" title="Repeated printed J10 references" alt="Repeated printed J10 references — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

### Numbered source contacts and controls

These are net memberships from the design files. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Design file | Connector/control | Label | Contact → net |
|---|---|---|---|
| HeaderAdapter.kicad_pcb | J9 | Conn_01x07_Socket | 1: J2P3; 2: J2P4; 3: J2P5; 4: J2P6; 5: J2P7; 6: J2P8; 7: J2P9 |
| HeaderAdapter.kicad_pcb | J7 | Conn_01x02_Socket | 1: +5V; 2: GND |
| HeaderAdapter.kicad_pcb | J4 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: J4P3; 4: J4P4; 5: J4P5; 6: J4P6; 7: J4P7; 8: J4P8; 9: J4P9; 10: GND |
| HeaderAdapter.kicad_pcb | J12 | Conn_01x07_Socket | 1: J4P3; 2: J4P4; 3: J4P5; 4: J4P6; 5: J4P7; 6: J4P8; 7: J4P9 |
| HeaderAdapter.kicad_pcb | J10 | Conn_01x05_Socket | 1: +3.3V; 2: +3.3V; 3: +5V; 4: GND; 5: GND |
| HeaderAdapter.kicad_pcb | J3 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: J3P3; 4: J3P4; 5: J3P5; 6: J3P6; 7: J3P7; 8: J3P8; 9: J3P9; 10: GND |
| HeaderAdapter.kicad_pcb | J2 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: J2P3; 4: J2P4; 5: J2P5; 6: J2P6; 7: J2P7; 8: J2P8; 9: J2P9; 10: GND |
| HeaderAdapter.kicad_pcb | J5 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: J5P3; 4: J5P4; 5: J5P5; 6: J5P6; 7: J5P7; 8: J5P8; 9: J5P9; 10: GND |
| HeaderAdapter.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: J1P3; 4: J1P4; 5: J1P5; 6: J1P6; 7: J1P7; 8: J1P8; 9: J1P9; 10: GND |
| HeaderAdapter.kicad_pcb | J11 | Conn_01x07_Socket | 1: J3P3; 2: J3P4; 3: J3P5; 4: J3P6; 5: J3P7; 6: J3P8; 7: J3P9 |
| HeaderAdapter.kicad_pcb | J10 | Conn_01x05_Socket | 1: +3.3V; 2: +3.3V; 3: +5V; 4: GND; 5: GND |
| HeaderAdapter.kicad_pcb | J6 | Conn_01x02_Socket | 1: +3.3V; 2: GND |
| HeaderAdapter.kicad_pcb | J8 | Conn_01x07_Socket | 1: J1P3; 2: J1P4; 3: J1P5; 4: J1P6; 5: J1P7; 6: J1P8; 7: J1P9 |
| HeaderAdapter.kicad_pcb | J10 | Conn_01x05_Socket | 1: +3.3V; 2: +3.3V; 3: +5V; 4: GND; 5: GND |
| HeaderAdapter.kicad_pcb | J13 | Conn_01x07_Socket | 1: J5P3; 2: J5P4; 3: J5P5; 4: J5P6; 5: J5P7; 6: J5P8; 7: J5P9 |

</div>

</details>

## Practical use with Smoothieboard V2 Prime

Do not route unknown conductors by guesswork.

For a one-port dry-contact setup, leave four host inputs and unused power headers disconnected. Connect only Prime GF/J37 to adapter J1 after verifying all ten contacts. Adapter J8.1 corresponds to J1.3/PB1; a normally-open isolated contact may connect between J8.1 and the chosen ground breakout after bias and polarity are configured. Never use a 3.3/5 V socket as ground. Full five-port operation requires checking that all host rail feeds are the same source and their combined cable current is within limits.

GF/J37 examples refer to Prime: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

No adapter driver is needed. A V2 buttonbox input suits a grounded dry contact, with a free pin and pull-up; this does not cover arbitrary peripheral protocols. No multi-port firmware reservation is automatic.

The Smoothieware details here follow SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## Requirements

The J10 banks are told apart by position in the reference sheets; check physical mating. Check shared-rail backfeed and current, cable orientation and the allocation of the five host ports before connecting.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/HeaderAdapter)
- [Original source](https://github.com/Ccecil/HeaderAdapter/tree/aa50fd44325f95268834b9adbace3fd9e585a2f7)
- [Original HeaderAdapter.kicad_pcb](https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/HeaderAdapter.kicad_pcb)
- [Original HeaderAdapter.kicad_sch](https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/HeaderAdapter.kicad_sch)
- [Original README.md](https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/README.md)

The upstream project includes no license file, which does not place it in the public domain. Source attribution is retained for these reference sheets. Modern counterpart guides are functional comparisons only and do not imply matching pinouts.

[All extension boards](/extension-boards)
