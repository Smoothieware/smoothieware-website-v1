---
layout: default
title: "jaUART CP2104 USB-UART adapter"
permalink: /extensions/historical-jauart-usb-uart-adapter
---

# jaUART CP2104 USB-UART adapter

Just Another UART is a generic CP2104 USB-to-logic-UART development board built in KiCad6. The author intends it for common V2 testing and setup. It is not a Gadgeteer breakout and does not provide an RS-232 voltage interface.

This is **Ccecil's historical jaUART**, not the modern [UART Breakout](/extensions/uart-breakout) or a generic cheap USB-UART adapter. Their contact order, power selection and wiring instructions do not establish this board's connections.

**Before using this board:** confirm the USB receptacle, logic voltage and power sequencing. The console wiring below is electrical only; it does not define a cable assembly.

**Reset and protection limitations:** On the PCB, `J2.10 RST` is an isolated net and does not reach the CP2104 reset contact `U1.9`; the latter is separately pulled toward Vdd through R1. Do not use J2.10 as a documented chip-reset control. The TPD4EUSB30 symbol also marks pin 6 NC while the PCB assigns that contact to Rx, so do not rely on UART ESD protection.

## Origin and original host

This guide documents Ccecil’s design; see the [original source](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a). The design targets the Smoothieboard V2/Gadgeteer era. That does not make it compatible with every V2 Prime board, cable or firmware build.

The controller example uses **Smoothieboard V2 Prime**, matching the Prime artwork below. Check the GB/J33 UART contacts and series resistors on your board before applying this contact schedule.

## How it works and when to use it

The CP2104 bridge converts a computer's USB serial traffic into logic-level UART transmit and receive signals. It can provide a development console when the controller exposes a compatible UART. The USB connector goes to the computer; crossed TX/RX and a common ground go to the controller. It does not translate RS-232 voltages or isolate the computer from the controller.

## Interfaces, power and limitations

| Property | Design |
| --- | --- |
| USB interface | J5: symbol/value `USB_B_Mini`; PCB footprint `USB_Micro-B_Molex-105017-0001`. Confirm the fitted connector before choosing a cable. |
| Serial bridge | Silicon Labs CP2104; logic-level UART |
| PCB outline | 15.675 × 26.55 mm; nominal thickness 1.6 mm |
| Power in the console example | USB supplies the bridge; J3.1 Vdd remains disconnected |
| Logic supply | VIO and VDD share Vdd; check the assembled voltage and compatibility with Prime |
| Isolation | None; USB ground and UART signal ground are connected |

Signal directions below are relative to the adapter. Pin numbers are contact numbers, **not a mating-face or cable-colour view**.

| Connector | Contact(s) and function | Direction / use |
| --- | --- | --- |
| J3, UART | 1 Vdd; 2 Rx; 3 Tx; 4 GND | Rx enters the bridge; Tx leaves it. Leave Vdd disconnected in the USB-powered example. |
| J2, status/handshake | 1 Vdd; 2 DTR; 3 DSR; 4 RTS; 5 CTS; 6 RI; 7 DCD; 8 SUSP; 9 _SUSP; 10 RST | DTR/RTS are bridge outputs; DSR/CTS/RI/DCD are inputs. SUSP/_SUSP are suspend-status outputs. J2.10 does not reach the bridge reset input on this board. These signals are unused by the console example. |
| J4, GPIO | 1 GP0; 2 GP1; 3 GP2; 4 GP3 | Device-programmable GPIO; these are not Smoothieware GPIO. |
| J5, USB | USB connection; Mini-B symbol versus Micro-B footprint conflict | Connects the bridge to the computer. Check which receptacle is fitted. |

Do not use J3 Vdd to power Prime or attach a second supply to it. Confirm the actual assembled logic voltage, power sequencing and backfeed behavior before connecting TX to Prime. No external-load current rating is given. The detailed reference sheets identify the indicator circuits. There are no user jumpers or controls to operate for this console example.

## Board-reference diagrams

These sheets show the board and locate its contacts. **Reference only: do not energize from these drawings.** J3 has four pad locations; no underside housing is shown. J2.10 RST is isolated from U1.9.

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-overview" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/overview.png" title="jaUART board overview" alt="jaUART board overview — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J3-pins-1.png" title="J3 contacts, sheet 1" alt="J3 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

## Console wiring for Smoothieboard V2 Prime

{% include _includes/extension-instruction-diagram.html id="jauart-prime-abstract" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/prime-console-abstract.png" title="jaUART and Prime — console wiring" alt="Artwork of Prime and jaUART above numbered electrical keys: Prime GB/J33 pin 4 TX to jaUART J3 pin 2 Rx; jaUART J3 pin 3 Tx to Prime pin 5 RX; pin 10 ground to pin 4 ground. USB connects the computer to J5; J3 pin 1 Vdd stays disconnected." caption="Electrical wiring. The enlarged keys are schematic contact roles, not physical wire entries or a mating-face view. Check USB cable shape, housing orientation, voltage and backfeed." width=1600 %}

The solid paths show the numbered electrical connections. The artwork shows the boards at separate illustrative display scales; the grid is a schematic layout aid, not a shared physical scale. The enlarged keys beneath it identify electrical contacts without inventing a fitted cable or underside housing. This is useful for tracing TX, RX and ground, but **does not establish a complete physical installation view**.

**USB connector conflict:** the J5 symbol/value says `USB_B_Mini`, but its PCB footprint is `Connector_USB:USB_Micro-B_Molex-105017-0001` and the artwork depicts that Micro-B part. Confirm the actual receptacle before selecting a cable; neither the figure nor the schematic below shows which cable fits. USB supplies the bridge in this wiring, with J3.1 Vdd disconnected. Confirm assembled logic voltage, power sequencing and backfeed before joining the boards.

{% include _includes/extension-instruction-diagram.html id="jauart-factual-installation" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/factual-installation-wiring.png" title="jaUART — factual USB/serial electrical schematic" alt="Prime GB J33 TX, RX and ground connect to numbered jaUART J3 contacts; USB Mini-B connects the bridge to a computer and Vdd is unused." caption="Supplementary functional schematic. Its Mini-B label follows the source symbol, which conflicts with the PCB’s Micro-B footprint. Use the numbered schedule and connector note above; check voltage, backfeed and fitted orientation." width=3000 %}

The supplementary functional schematic is for comparison. Its symbols do not reproduce the board artwork.

For a channel-1 serial console on **Prime**, use **GB/J33**, not GF/J37. The jaUART schematic identifies J3.2 as the CP2104 RXD input and J3.3 as its TXD output:

| Prime connection | jaUART connection | Direction |
| --- | --- | --- |
| GB/J33.4 — PB9 TX, through R74 (100 Ω) | J3.2 — Rx | Prime → computer bridge |
| GB/J33.5 — PH14 RX, through R75 (100 Ω) | J3.3 — Tx | Computer bridge → Prime |
| GB/J33.10 — ground | J3.4 — GND | Common return |
| No connection | J3.1 — Vdd | Leave disconnected when the bridge is USB-powered |

Confirm the connector numbering from the component-side board views and verify continuity with power removed. J3.1 shares the CP2104 VDD/VIO net; do not tie it to Prime's supply. This is a logic-level serial connection, not RS-232. Confirm the actual assembled bridge's logic supply before connecting its output to Prime; the schematic does not measure a powered board. The [CP2104 data sheet](https://www.silabs.com/documents/public/data-sheets/cp2104.pdf) gives a nominal 3.45 V regulator output, not a guaranteed 3.3 V rail; this design joins VIO and VDD. Check actual logic levels, power sequencing and backfeed before joining the boards.

### Preparing a console connection

1. Match the adapter to Ccecil’s design and check that your controller is a Prime. Identify the actual USB receptacle and every UART contact on the fitted assemblies; the drawings do not establish a cable's mating-face orientation.
2. Resolve the assembled voltage, input limits, backfeed and power-sequencing questions before connecting the boards. Leave the adapter's Vdd contact disconnected. No power-up order or external-load current rating is given.
3. With USB and controller power removed, check the three leads against the numbered table: controller TX to adapter Rx, adapter Tx to controller RX, and common ground. Leave the handshake, reset and GPIO headers unused. No connector colour or ribbon edge is assumed.
4. Once the physical and electrical checks pass, reserve channel 1 in the controller configuration, apply the example below and use a terminal with hardware flow control disabled. The computer uses the adapter's USB connection; it does not need a Gadgeteer USB connection to Prime.
5. After controller startup, send the non-motion `version` query with LF and check the returned build information. A successful reply would verify that particular console session; it does not check the unused GPIO, reset or protection circuits.

## Smoothieware support and example boundary

CP2104 USB operation needs the normal computer-side bridge driver; Smoothieware receives ordinary UART bytes. Its [console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) and [Prime UART implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135) support:

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

With `console = true`, the UART is initialized by the [console task after startup](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L515-L520), rather than immediately while parsing this section. Let the controller finish starting before sending `version`. If no reply arrives, check the startup log for UART initialization errors and confirm the selected channel, crossed TX/RX, common ground and terminal line ending; silence alone does not identify a failed adapter.

Reserve UART channel 1 and its PB9/PH14 pins in the complete controller configuration. Open the computer's bridge serial port at 115200/8N1 with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored) to request build information without motion. The computer's serial-port name depends on its operating system and attached devices; no fixed device path is assumed.

This configuration does not check your bridge's assembled voltage behaviour.

## Detailed source references

<details>
<summary>Connector, bridge and component contact sheets</summary>
<div markdown="1">

### USB connector and protection

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-1.png" title="J5 contacts, sheet 1" alt="J5 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-2.png" title="J5 contacts, sheet 2" alt="J5 contacts, sheet 2 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-3.png" title="J5 contacts, sheet 3" alt="J5 contacts, sheet 3 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U2-pins-1.png" title="U2 contacts, sheet 1" alt="U2 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U2-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U2-pins-2.png" title="U2 contacts, sheet 2" alt="U2 contacts, sheet 2 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

### UART, status and GPIO headers

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J2-pins-1.png" title="J2 contacts, sheet 1" alt="J2 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J2-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J2-pins-2.png" title="J2 contacts, sheet 2" alt="J2 contacts, sheet 2 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J4-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J4-pins-1.png" title="J4 contacts, sheet 1" alt="J4 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

### USB–UART bridge contacts

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-1.png" title="U1 contacts, sheet 1" alt="U1 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-2.png" title="U1 contacts, sheet 2" alt="U1 contacts, sheet 2 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-3.png" title="U1 contacts, sheet 3" alt="U1 contacts, sheet 3 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-4" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-4.png" title="U1 contacts, sheet 4" alt="U1 contacts, sheet 4 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-5" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-5.png" title="U1 contacts, sheet 5" alt="U1 contacts, sheet 5 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-6" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-6.png" title="U1 contacts, sheet 6" alt="U1 contacts, sheet 6 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

### Indicators, resistors and capacitors

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D1-pins-1.png" title="D1 contacts, sheet 1" alt="D1 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D2-pins-1.png" title="D2 contacts, sheet 1" alt="D2 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D3-pins-1.png" title="D3 contacts, sheet 1" alt="D3 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R1-pins-1.png" title="R1 contacts, sheet 1" alt="R1 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R2-pins-1.png" title="R2 contacts, sheet 1" alt="R2 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R3-pins-1.png" title="R3 contacts, sheet 1" alt="R3 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R4-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R4-pins-1.png" title="R4 contacts, sheet 1" alt="R4 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C1-pins-1.png" title="C1 contacts, sheet 1" alt="C1 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C2-pins-1.png" title="C2 contacts, sheet 1" alt="C2 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C3-pins-1.png" title="C3 contacts, sheet 1" alt="C3 contacts, sheet 1 — board artwork and contact locations" caption="Pad numbers and net names. Dotted leaders locate features, not wires. Rings do not show a housing, drill shape or mating orientation." width=1200 %}

</div>
</details>

<details>
<summary>Composite reference</summary>
<div markdown="1">

## Board-reference diagram

{% include _includes/extension-instruction-diagram.html id="jauart-e9e69f5-reference" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/jauart-reference.png" title="jaUART: USB, serial, handshake and GPIO contacts" alt="jaUART drawing with functional connector callouts, all numbered contacts including USB shell ground, activity indicator notes and four contact details." caption="Board reference drawing. Gray dashed lines locate connectors, not electrical conductors. Contact details are not mating-face views; check assembled voltage and back-side connector orientation." width=1800 %}

The main artwork identifies the four interfaces. The numbered details below it give pad numbers and board positions. The serial connector is on the back copper in the layout: the drawing adds its pads to locate contacts; it does not invent a housing or mirror them into a mating view. D1/D2 are activity-GPIO indicator circuits and D3 is an indicator circuit; their configured polarity and behaviour are not specified. There are no user jumpers or controls to operate in this console example.

</div>
</details>

<details>
<summary>Supplementary logical circuits and contact table</summary>
<div markdown="1">

### Supplementary logical circuits

These circuit sheets explain the board connectivity. They do not copy the original board artwork, placement or native files and are supplementary to the annotated board reference above. Use the contact inventory and all companion sheets together. Check physical cable orientation before wiring.

Source: [original circuit](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-rx" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/rx.png" title="UART RX logic path" alt="UART RX logic path — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-tx" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/tx.png" title="UART TX logic path" alt="UART TX logic path — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-3.png" title="USB D+ nodes" alt="USB D+ nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-2.png" title="USB D- nodes" alt="USB D- nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-power" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-power.png" title="USB supply input" alt="USB supply input — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-vio-vdd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/vio-vdd.png" title="Logic supply nodes" alt="Logic supply nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c1.png" title="C1 capacitor" alt="C1 capacitor — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c2.png" title="C2 capacitor" alt="C2 capacitor — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c3.png" title="C3 capacitor" alt="C3 capacitor — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-handshake-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/handshake-2.png" title="Auxiliary control nodes" alt="Auxiliary control nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-handshake-6" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/handshake-6.png" title="Auxiliary control nodes" alt="Auxiliary control nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-gpio" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/gpio.png" title="Four GPIO nodes" alt="Four GPIO nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-reset" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/reset.png" title="Actual chip reset pull-up" alt="Actual chip reset pull-up — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d1.png" title="D1 indicator branch" alt="D1 indicator branch — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d2.png" title="D2 indicator branch" alt="D2 indicator branch — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d3.png" title="D3 indicator branch" alt="D3 indicator branch — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-esd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-esd.png" title="ESD USB nodes" alt="ESD USB nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-uart-esd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/uart-esd.png" title="ESD UART nodes" alt="ESD UART nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-boundaries" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/boundaries.png" title="Unused contacts" alt="Unused contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

### Numbered source contacts and controls

These are net memberships from the design files. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Design file | Connector/control | Label | Contact → net |
|---|---|---|---|
| USB_Uart.kicad_pcb | D1 | Blue | 1: Net-(D1-Pad1); 2: Rx |
| USB_Uart.kicad_pcb | D2 | Red | 1: Net-(D2-Pad1); 2: Tx |
| USB_Uart.kicad_pcb | J4 | Conn_01x04 | 1: GP0; 2: GP1; 3: GP2; 4: GP3 |
| USB_Uart.kicad_pcb | J5 | USB_B_Mini | 1: VBUS; 2: D-; 3: D+; 4: unconnected-(J5-Pad4); 5: GND; 6: GND |
| USB_Uart.kicad_pcb | D3 | LED | 1: Net-(D3-Pad1); 2: Vdd |
| USB_Uart.kicad_pcb | J2 | Conn_01x10 | 1: Vdd; 2: DTR; 3: DSR; 4: RTS; 5: CTS; 6: RI; 7: DCD; 8: SUSP; 9: _SUSP; 10: RST |
| USB_Uart.kicad_pcb | J3 | Conn_01x04 | 1: Vdd; 2: Rx; 3: Tx; 4: GND |

</div>
</details>

## Requirements

Before connecting, check the assembled logic voltage, USB power and backfeed, the fitted USB connector, cable orientation and the computer driver. The labels in the supplementary functional schematic are small: open it at full size.

## Sources and attribution

- [Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P11_Prime2660/smoothiev2-prime-2660.kicad_pcb) — GB/J33 and the R74/R75 UART paths.

- [Ccecil upstream project](https://github.com/Ccecil/jaUART)
- [Original source](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a)
- [Original USB_Uart.kicad_pcb](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_pcb)
- [Original USB_Uart.kicad_sch](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_sch)
- [Original readme.md](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/readme.md)

The jaUART project includes no license file, which does not place it in the public domain. The console drawing credits Ccecil’s design and uses the project’s board illustrations. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
