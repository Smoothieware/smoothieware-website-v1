---
layout: default
title: "Gadgeteer Qwiic hub"
permalink: /extensions/historical-gadgeteer-qwiic-adapter
---

# Gadgeteer Qwiic hub

This passive adapter exposes the Gadgeteer I2C pair through four Qwiic-style four-contact connectors while retaining a second ten-contact header. All four I2C connectors share the same bus; they do not create four isolated buses or resolve duplicate sensor addresses.

## Interfaces and power

J5/J6 are 1 3.3 V, 2 5 V, 3–7 pass-through signals, 8 SDA, 9 SCL, 10 ground. J1–J4 each use 1 ground, 2 3.3 V, 3 SDA, 4 SCL. The 5 V rail is present only on the ten-contact path and must not be injected into the 3.3 V Qwiic rail. Check installed sensor pull-ups and total capacitance rather than assuming more connectors improve bus drive.

## Board-reference diagram

These sheets identify the numbered contacts. Connector bodies are illustrative; check the actual connector orientation and cable before wiring. All four Qwiic-style connectors share one bus and one 3.3 V rail; the adapter provides no independent buses or address selection.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-overview" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/overview.png" title="Gadgeteer Qwiic hub overview" alt="Gadgeteer Qwiic hub overview" caption="Board overview. Shared power, ground and I2C paths require separate rail, pull-up, address and cable checks before use." width=420 %}

### Four shared-bus connectors

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j1" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j1.png" title="Qwiic-style connector J1" alt="Qwiic-style connector J1" caption="Contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Check the actual connector and cable orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j2" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j2.png" title="Qwiic-style connector J2" alt="Qwiic-style connector J2" caption="Contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Check the actual connector and cable orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j3" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j3.png" title="Qwiic-style connector J3" alt="Qwiic-style connector J3" caption="Contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Check the actual connector and cable orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j4" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j4.png" title="Qwiic-style connector J4" alt="Qwiic-style connector J4" caption="Contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Check the actual connector and cable orientation." width=420 %}

### Gadgeteer headers

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j5" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j5.png" title="Ten-contact header J5" alt="Ten-contact header J5" caption="Contacts 1 and 2 carry separate +3V3 and +5V rails; 3–7 are pass-through signals, 8 SDA, 9 SCL and 10 ground. Do not inject 5 V into the shared 3.3 V peripheral rail." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j6" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j6.png" title="Ten-contact header J6" alt="Ten-contact header J6" caption="Contacts 1 and 2 carry separate +3V3 and +5V rails; 3–7 are pass-through signals, 8 SDA, 9 SCL and 10 ground. Do not inject 5 V into the shared 3.3 V peripheral rail." width=420 %}

### Indicator, mounting and bus

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-led-r1" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/led-r1.png" title="Power indicator D1 and resistor R1" alt="Power indicator D1 and resistor R1" caption="Power-indicator branch and numbered component contacts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-mounting-limits" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/mounting-limits.png" title="Mounting and connectors" alt="Mounting and connectors" caption="Check fastener clearance and cable fit before installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-bus-limits" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/bus-limits.png" title="Shared I2C bus and power" alt="Shared I2C bus and power" caption="One shared bus: check addresses, effective pull-ups, capacitance, firmware bus selection, power budget and cable orientation." width=420 %}

### Supplementary logical circuits

These circuit sheets show the connectivity. They are not drawings of the board layout. Use them with the contact table and the sheets above.

Source: [original circuit](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-gnd" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-gnd-font-matched.png" title="Parallel GND bus" alt="Parallel GND bus — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-33v" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-33v-font-matched.png" title="Parallel 3.3V bus" alt="Parallel 3.3V bus — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-sda" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-sda-font-matched.png" title="Parallel SDA bus" alt="Parallel SDA bus — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-scl" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-scl-font-matched.png" title="Parallel SCL bus" alt="Parallel SCL bus — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-host-pass-throughs" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/host-pass-throughs-font-matched.png" title="Same-numbered host paths" alt="Same-numbered host paths — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-indicator" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/indicator-font-matched.png" title="Power LED branch" alt="Power LED branch — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

### Numbered contacts and controls

Leave unassigned pads unconnected. Net names are not cable colours. Where footprints or pad numbers repeat, identify the part by its position before wiring.

| Source file | Connector/control | Label | Contact → net |
|---|---|---|---|
| GDGT_Qwiic.kicad_pcb | J1 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J2 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J4 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J5 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: SDA; 9: SCL; 10: GND |
| GDGT_Qwiic.kicad_pcb | D1 | LED_Small_Filled | 1: GND; 2: Net-(D1-A) |
| GDGT_Qwiic.kicad_pcb | J3 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J6 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: SDA; 9: SCL; 10: GND |

## Practical use with Smoothieboard V2 Prime

For one supported 3.3 V I2C peripheral, connect only one Prime I2C-capable socket to J5 and one correctly oriented Qwiic cable to J1. On the Prime, GB/J33 contacts 8/9 are I2C3 SDA/SCL and GH/J38 are I2C2 SDA/SCL; the firmware bus instance and pin mux still require matching. Leave J6 unused initially and avoid supplying the same rail independently through a peripheral. Verify address/pull-ups before adding further sensors.

On the GF/J37 header, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Check physical numbering, polarity, per-rail current allowance and free pins before connection. Check each contact's hardware SPI, UART, CAN or PWM capability before relying on it.

## Smoothieware use

No adapter driver is needed. The attached I2C device still requires a matching V2 driver and bus/address configuration; generic I2C pins do not by themselves give device support.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/GDGT_Qwiic)
- [Original source](https://github.com/Ccecil/GDGT_Qwiic/tree/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4)
- [Original GDGT_Qwiic.kicad_pcb](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_pcb)
- [Original GDGT_Qwiic.kicad_sch](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_sch)
- [Original README.md](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/README.md)

The source project has no license file. Attribution belongs to the original author; the missing license file is not public-domain permission.

[All extension boards](/extension-boards)
