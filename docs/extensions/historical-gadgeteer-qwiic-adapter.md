---
layout: default
title: "Historical Gadgeteer Qwiic hub"
permalink: /extensions/historical-gadgeteer-qwiic-adapter
---

# Historical Gadgeteer Qwiic hub

This passive adapter exposes the Gadgeteer I2C pair through four Qwiic-style four-contact connectors while retaining a second ten-contact header. All four I2C connectors share the same bus; they do not create four isolated buses or resolve duplicate sensor addresses.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/GDGT_Qwiic/tree/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J5/J6 are 1 3.3 V, 2 5 V, 3–7 pass-through signals, 8 SDA, 9 SCL, 10 ground. J1–J4 each use 1 ground, 2 3.3 V, 3 SDA, 4 SCL. The 5 V rail is present only on the ten-contact path and must not be injected into the 3.3 V Qwiic rail. Check installed sensor pull-ups and total capacitance rather than assuming more connectors improve bus drive.

## Board-reference diagram

These source-matched sheets retain the historical abstract artwork and identify the numbered source contacts. Connector bodies are illustrative: the artwork and source-coordinate projection do not prove contact-local placement, a plug mating face or an assembled cable. All four Qwiic-style connectors share one bus and one 3.3 V rail; the adapter provides no independent buses or address selection.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-overview" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/overview.svg" title="Historical Gadgeteer Qwiic hub overview" alt="Historical Gadgeteer Qwiic hub overview — historical board source reference" caption="Reference to the pinned historical board. Shared power, ground and I2C paths require separate rail, pull-up, address and cable checks before use." width=420 %}

### Four shared-bus connectors

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j1" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j1.svg" title="Qwiic-style connector J1" alt="Qwiic-style connector J1 — historical board source reference" caption="Source contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Confirm the actual connector and cable orientation; the drawing is not a mating-face guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j2" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j2.svg" title="Qwiic-style connector J2" alt="Qwiic-style connector J2 — historical board source reference" caption="Source contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Confirm the actual connector and cable orientation; the drawing is not a mating-face guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j3" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j3.svg" title="Qwiic-style connector J3" alt="Qwiic-style connector J3 — historical board source reference" caption="Source contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Confirm the actual connector and cable orientation; the drawing is not a mating-face guarantee." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j4" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j4.svg" title="Qwiic-style connector J4" alt="Qwiic-style connector J4 — historical board source reference" caption="Source contacts: 1 ground, 2 +3V3, 3 SDA and 4 SCL. Mounting pads have no assigned electrical net. Confirm the actual connector and cable orientation; the drawing is not a mating-face guarantee." width=420 %}

### Gadgeteer headers

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j5" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j5.svg" title="Ten-contact header J5" alt="Ten-contact header J5 — historical board source reference" caption="Contacts 1 and 2 carry separate +3V3 and +5V rails; 3–7 are pass-through signals, 8 SDA, 9 SCL and 10 ground. Do not inject 5 V into the shared 3.3 V peripheral rail." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-j6" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/j6.svg" title="Ten-contact header J6" alt="Ten-contact header J6 — historical board source reference" caption="Contacts 1 and 2 carry separate +3V3 and +5V rails; 3–7 are pass-through signals, 8 SDA, 9 SCL and 10 ground. Do not inject 5 V into the shared 3.3 V peripheral rail." width=420 %}

### Indicator, mounting and bus limits

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-led-r1" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/led-r1.svg" title="Power indicator D1 and resistor R1" alt="Power indicator D1 and resistor R1 — historical board source reference" caption="Source power-indicator branch and numbered component contacts. An illuminated indicator does not establish sensor support, bus operation or acceptable rail loading." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-mounting-limits" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/mounting-limits.svg" title="Mounting and connector limitations" alt="Mounting and connector limitations — historical board source reference" caption="Mechanical pads and mounting locations do not establish fastener clearance or cable fit. No physical mating or powered installation is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-reference-bus-limits" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/annotated-reference/bus-limits.svg" title="Shared I2C bus and power limits" alt="Shared I2C bus and power limits — historical board source reference" caption="One shared bus: check addresses, effective pull-ups, capacitance and firmware bus selection. Power budget, voltage margins, cable orientation and complete Prime wiring remain unresolved." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_pcb), revision `43cffcc31de8b1ee70fa9682c5a553adc4cc90b4`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-gnd" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-gnd-font-matched.svg" title="Parallel GND bus" alt="Parallel GND bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-33v" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-33v-font-matched.svg" title="Parallel 3.3V bus" alt="Parallel 3.3V bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-sda" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-sda-font-matched.svg" title="Parallel SDA bus" alt="Parallel SDA bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-shared-scl" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/shared-scl-font-matched.svg" title="Parallel SCL bus" alt="Parallel SCL bus — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-host-pass-throughs" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/host-pass-throughs-font-matched.svg" title="Same-numbered host paths" alt="Same-numbered host paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-qwiic-adapter-factual-indicator" src="/images/extensions/historical-gadgeteer-qwiic-adapter/guides/factual-circuits/indicator-font-matched.svg" title="Power LED branch" alt="Power LED branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| GDGT_Qwiic.kicad_pcb | J1 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J2 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J4 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J5 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: SDA; 9: SCL; 10: GND |
| GDGT_Qwiic.kicad_pcb | D1 | LED_Small_Filled | 1: GND; 2: Net-(D1-A) |
| GDGT_Qwiic.kicad_pcb | J3 | Conn_01x04_Pin | 1: GND; 2: +3V3; 3: SDA; 4: SCL; MP: No assigned net |
| GDGT_Qwiic.kicad_pcb | J6 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: P7; 8: SDA; 9: SCL; 10: GND |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For one supported 3.3 V I2C peripheral, connect only one Prime I2C-capable socket to J5 and one correctly oriented Qwiic cable to J1. On retained P12 mapping GB/J33 contacts 8/9 are I2C3 SDA/SCL and GH/J38 are I2C2 SDA/SCL; the firmware bus instance and pin mux still require matching. Leave J6 unused initially and avoid supplying the same rail independently through a peripheral. Verify address/pull-ups before adding further sensors.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

No adapter driver is needed. The attached I2C device still requires a matching V2 driver and bus/address configuration; generic I2C pins do not establish device support. No named supported sensor and complete runnable example was verified in this batch.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Named peripheral/driver, bus instance/mux, address conflicts, effective pull-ups, rail budget and connector orientation remain unresolved. The complete Prime/peripheral wiring diagram remains incomplete. The board-reference sheets identify source geometry and contacts without qualifying an installation.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/GDGT_Qwiic)
- [Pinned original source](https://github.com/Ccecil/GDGT_Qwiic/tree/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4)
- [Original GDGT_Qwiic.kicad_pcb](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_pcb)
- [Original GDGT_Qwiic.kicad_sch](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_sch)
- [Original README.md](https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
