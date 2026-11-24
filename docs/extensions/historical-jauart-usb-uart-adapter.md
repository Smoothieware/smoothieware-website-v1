---
layout: default
title: "jaUART CP2104 USB-UART adapter"
permalink: /extensions/historical-jauart-usb-uart-adapter
---

# jaUART CP2104 USB-UART adapter

Just Another UART is a generic CP2104 USB-to-logic-UART development board built in KiCad6. The author describes it as work in progress for common V2 testing/setup. It is not a Gadgeteer breakout and does not provide an RS-232 voltage interface.

This is **Ccecil's historical jaUART**, not the modern [UART Breakout](/extensions/uart-breakout) or a generic cheap USB-UART adapter. Their contact order, power selection and wiring instructions do not establish this board's connections.

**Before using this board:** the retained source supports the electrical console proposal below, but no complete board-attached host/peripheral installation diagram or qualified cable assembly has been established. The USB receptacle, logic voltage and power sequencing still need resolution. For a missing board feature or support for your intended installation, contact **wolf.arthur@gamil.com** and identify the historical revision below.


**Reset and protection source limitations:** In the retained PCB, `J2.10 RST` is an isolated net and does not reach the CP2104 reset contact `U1.9`; the latter is separately pulled toward Vdd through R1. Do not use J2.10 as a documented chip-reset control. The selected TPD4EUSB30 symbol also marks pin 6 NC while the PCB assigns that contact to Rx, so UART ESD protection remains unqualified until the device/package mapping is reconciled.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. jaUART is a generic USB/logic-UART device intended for V2 development; it has no Gadgeteer host connector.

The controller example uses **Smoothieboard V2 P11 Prime2660**, matching the Prime abstract artwork below. Its GB/J33 UART contacts and series resistors were checked in that revision's PCB source; do not apply this contact schedule to another Prime revision without checking it.

## How it works and when to use it

The CP2104 bridge converts a computer's USB serial traffic into logic-level UART transmit and receive signals. It can provide a development console when the controller exposes a compatible UART. The USB connector goes to the computer; crossed TX/RX and a common ground go to the controller. It does not translate RS-232 voltages or isolate the computer from the controller.

## Interfaces, power and limitations

| Property | Retained source |
| --- | --- |
| USB interface | J5: symbol/value `USB_B_Mini`; PCB footprint `USB_Micro-B_Molex-105017-0001`. Confirm the fitted connector before choosing a cable. |
| Serial bridge | Silicon Labs CP2104; logic-level UART |
| PCB outline | 15.675 × 26.55 mm; nominal thickness 1.6 mm, from the selected PCB source |
| Power in the console example | USB supplies the bridge; J3.1 Vdd remains disconnected |
| Logic supply | VIO and VDD share Vdd; the assembled voltage and compatibility with Prime require verification |
| Isolation | None; USB ground and UART signal ground are connected |

Signal directions below are relative to the adapter. Pin numbers are source contact identities, **not a qualified mating-face or cable-colour view**.

| Connector | Contact(s) and function | Direction / use |
| --- | --- | --- |
| J3, UART | 1 Vdd; 2 Rx; 3 Tx; 4 GND | Rx enters the bridge; Tx leaves it. Leave Vdd disconnected in the USB-powered example. |
| J2, status/handshake | 1 Vdd; 2 DTR; 3 DSR; 4 RTS; 5 CTS; 6 RI; 7 DCD; 8 SUSP; 9 _SUSP; 10 RST | DTR/RTS are bridge outputs; DSR/CTS/RI/DCD are inputs. SUSP/_SUSP are suspend-status outputs. J2.10 does not reach the bridge reset input in this source. These signals are unused by the console example. |
| J4, GPIO | 1 GP0; 2 GP1; 3 GP2; 4 GP3 | Device-programmable GPIO; no board-specific configuration or Smoothieware GPIO support is established here. |
| J5, USB | USB connection; Mini-B symbol versus Micro-B footprint conflict | Connects the bridge to the computer. The retained sources do not settle the fitted receptacle. |

Do not use J3 Vdd to power Prime or attach a second supply to it. Confirm the actual assembled logic voltage, power sequencing and backfeed behavior before connecting TX to Prime. The source does not establish an available external-load current rating. The detailed reference sheets identify the indicator circuits; configured activity, polarity and GPIO behavior have not been qualified. There are no source-established user jumpers or controls to operate for this console example.

## Board-reference diagrams

These sheets preserve the selected historical abstract and locate contacts from native source coordinates. **Reference only: do not energize from these drawings.** J3 has four source-native pad locations but no recovered underside housing. J2.10 RST is isolated from U1.9; protection-device mapping remains unresolved. No cable, assembled voltage or powered installation is qualified.

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-overview" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/overview.svg" title="jaUART board overview" alt="jaUART board overview — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J3-pins-1.svg" title="J3 contacts, sheet 1" alt="J3 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

## Conditional console proposal for Smoothieboard V2 Prime

{% include _includes/extension-instruction-diagram.html id="jauart-prime-abstract" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/prime-console-abstract.svg" title="jaUART and Prime — abstract console wiring proposal" alt="Canonical abstract artwork of Prime and jaUART above source-numbered electrical keys: Prime GB/J33 pin 4 TX to jaUART J3 pin 2 Rx; jaUART J3 pin 3 Tx to Prime pin 5 RX; pin 10 ground to pin 4 ground. USB connects the computer to J5; J3 pin 1 Vdd stays disconnected." caption="Electrical proposal using the project’s canonical abstract artwork. The enlarged keys are schematic contact roles, not physical wire entries or a mating-face view. The Prime artwork and verified GB/J33 schedule are P11 Prime2660. USB cable shape, housing orientation, voltage and backfeed remain unqualified." width=1600 %}

The solid paths show the selected source-numbered electrical proposal. The artwork preserves the source board geometry at separate illustrative display scales; the grid is a schematic layout aid, not a shared physical scale. The enlarged keys beneath it identify electrical contacts without inventing a fitted cable or underside housing. This is useful for tracing TX, RX and ground, but **does not establish a complete physical installation view**. Both the Prime illustration and the GB/J33 schedule below use P11 Prime2660.

**USB connector conflict:** the retained J5 symbol/value says `USB_B_Mini`, but its PCB footprint is `Connector_USB:USB_Micro-B_Molex-105017-0001` and the abstract artwork depicts that Micro-B part. Confirm the actual receptacle before selecting a cable; neither the figure nor the older schematic below qualifies a Mini-B cable. USB supplies the bridge in this proposal, with J3.1 Vdd disconnected. Confirm assembled logic voltage, power sequencing and backfeed before joining the boards.

{% include _includes/extension-instruction-diagram.html id="jauart-factual-installation" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/factual-installation-wiring.svg" title="jaUART — factual USB/serial electrical schematic" alt="Prime GB J33 TX, RX and ground connect to numbered jaUART J3 contacts; USB Mini-B connects the bridge to a computer and Vdd is unused." caption="Retained supplementary functional schematic. Its Mini-B label follows the source symbol, which conflicts with the PCB’s Micro-B footprint. Use the source-numbered schedule and connector qualification above; voltage/backfeed and fitted orientation remain open." width=3000 %}

The supplementary functional schematic is retained for comparison. Its functional symbols do not reproduce the historical board artwork. The canonical-art proposal above adds board recognition while keeping physical mating and powered compatibility unqualified.

For a channel-1 serial console on the selected **P11 Prime2660**, use **GB/J33**, not GF/J37. The retained jaUART schematic identifies J3.2 as the CP2104 RXD input and J3.3 as its TXD output:

| Prime connection | jaUART connection | Direction |
| --- | --- | --- |
| GB/J33.4 — PB9 TX, through R74 (100 Ω) | J3.2 — Rx | Prime → computer bridge |
| GB/J33.5 — PH14 RX, through R75 (100 Ω) | J3.3 — Tx | Computer bridge → Prime |
| GB/J33.10 — ground | J3.4 — GND | Common return |
| No connection | J3.1 — Vdd | Leave disconnected when the bridge is USB-powered |

Confirm the connector numbering from the component-side board views and verify continuity with power removed. J3.1 shares the CP2104 VDD/VIO net; do not tie it to Prime's supply. This is a logic-level serial connection, not RS-232. Confirm the actual assembled bridge's logic supply before connecting its output to Prime; source connectivity does not measure a powered board. The [CP2104 data sheet](https://www.silabs.com/documents/public/data-sheets/cp2104.pdf) gives a nominal 3.45 V regulator output, not a guaranteed 3.3 V rail; this retained design joins VIO and VDD. Check actual logic levels, power sequencing and backfeed before joining the boards.

### Preparing a console connection

1. Match the adapter to the pinned Ccecil revision and the controller to the selected P11 Prime2660 source. Identify the actual USB receptacle and every UART contact on the fitted assemblies; the drawings do not establish a cable's mating-face orientation.
2. Resolve the assembled voltage, input limits, backfeed and power-sequencing questions before connecting the boards. Leave the adapter's Vdd contact disconnected. This guide does not supply a qualified power-up order or an external-load current rating.
3. With USB and controller power removed, check the three proposed leads against the source-numbered table: controller TX to adapter Rx, adapter Tx to controller RX, and common ground. Leave the handshake, reset and GPIO headers unused. No connector colour or ribbon edge is assumed.
4. Once the physical and electrical installation is qualified, reserve channel 1 in the controller configuration, apply the source-backed example below and use a terminal with hardware flow control disabled. The computer uses the adapter's USB connection; it does not need a Gadgeteer USB connection to Prime.
5. After controller startup, send the non-motion `version` query with LF and check the returned build information. A successful reply would verify that particular console session; it would not qualify the unused GPIO, reset or protection circuits.

## Smoothieware support and example boundary

CP2104 USB operation needs the normal computer-side bridge driver; Smoothieware receives ordinary UART bytes. Its [pinned console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) and [Prime UART implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135) support:

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

This is a source-verified configuration, not a tested session on your controller or proof of your bridge's assembled voltage behavior. If required functionality is absent, email **wolf.arthur@gamil.com** with the historical board revision and intended use.

## Detailed source references

<details>
<summary>Connector, bridge and component contact sheets</summary>
<div markdown="1">

### USB connector and protection

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-1.svg" title="J5 contacts, sheet 1" alt="J5 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-2.svg" title="J5 contacts, sheet 2" alt="J5 contacts, sheet 2 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J5-pins-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J5-pins-3.svg" title="J5 contacts, sheet 3" alt="J5 contacts, sheet 3 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U2-pins-1.svg" title="U2 contacts, sheet 1" alt="U2 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U2-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U2-pins-2.svg" title="U2 contacts, sheet 2" alt="U2 contacts, sheet 2 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

### UART, status and GPIO headers



{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J2-pins-1.svg" title="J2 contacts, sheet 1" alt="J2 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J2-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J2-pins-2.svg" title="J2 contacts, sheet 2" alt="J2 contacts, sheet 2 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-J4-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/J4-pins-1.svg" title="J4 contacts, sheet 1" alt="J4 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

### USB–UART bridge contacts

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-1.svg" title="U1 contacts, sheet 1" alt="U1 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-2.svg" title="U1 contacts, sheet 2" alt="U1 contacts, sheet 2 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-3.svg" title="U1 contacts, sheet 3" alt="U1 contacts, sheet 3 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-4" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-4.svg" title="U1 contacts, sheet 4" alt="U1 contacts, sheet 4 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-5" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-5.svg" title="U1 contacts, sheet 5" alt="U1 contacts, sheet 5 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-U1-pins-6" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/U1-pins-6.svg" title="U1 contacts, sheet 6" alt="U1 contacts, sheet 6 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

### Indicators, resistors and capacitors

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D1-pins-1.svg" title="D1 contacts, sheet 1" alt="D1 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D2-pins-1.svg" title="D2 contacts, sheet 1" alt="D2 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-D3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/D3-pins-1.svg" title="D3 contacts, sheet 1" alt="D3 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R1-pins-1.svg" title="R1 contacts, sheet 1" alt="R1 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R2-pins-1.svg" title="R2 contacts, sheet 1" alt="R2 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R3-pins-1.svg" title="R3 contacts, sheet 1" alt="R3 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-R4-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/R4-pins-1.svg" title="R4 contacts, sheet 1" alt="R4 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C1-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C1-pins-1.svg" title="C1 contacts, sheet 1" alt="C1 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C2-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C2-pins-1.svg" title="C2 contacts, sheet 1" alt="C2 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="jauart-annotated-C3-pins-1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/annotated-reference/C3-pins-1.svg" title="C3 contacts, sheet 1" alt="C3 contacts, sheet 1 — historical artwork and source contact locations" caption="Source pad identities and net names. Dotted leaders locate features, not wires. Native-center rings do not qualify a housing, drill shape or mating orientation; power compatibility remains open." width=1200 %}

</div>
</details>

<details>
<summary>Earlier composite reference</summary>
<div markdown="1">

## Board-reference diagram

{% include _includes/extension-instruction-diagram.html id="jauart-e9e69f5-reference" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/e9e69f5/jauart-reference.svg" title="jaUART: USB, serial, handshake and GPIO contacts" alt="Recovered jaUART abstract with functional connector callouts, all numbered contacts including USB shell ground, activity indicator caveats and four native-coordinate contact details." caption="Reference candidate using recovered historical artwork and source-bound native pad additions. Gray dashed lines locate connectors, not electrical conductors. Native XY details are not mating-face views; assembled voltage and back-side connector orientation remain unqualified." width=1800 %}

The main artwork identifies the four interfaces. The numbered details below it preserve source pad numbers and native board coordinates. The serial connector is on the back copper in the retained layout: the drawing adds its native pads to locate contacts; it does not invent a housing or mirror them into a qualified mating view. D1/D2 are activity-GPIO indicator circuits and D3 is an indicator circuit; configured polarity and behavior remain unresolved. There are no source-established user jumpers or controls to operate in this console example.


</div>
</details>

<details>
<summary>Supplementary logical circuits and source-contact table</summary>
<div markdown="1">

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and are supplementary to the annotated board reference above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_pcb), revision `e9e69f50667e10d0af6d00339aa127826ec0522a`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-source-gaps" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/source-gaps.svg" title="Source reset and protection discrepancies" alt="Source reset and protection discrepancies — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-rx" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/rx.svg" title="UART RX logic path" alt="UART RX logic path — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-tx" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/tx.svg" title="UART TX logic path" alt="UART TX logic path — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-3.svg" title="USB D+ source nodes" alt="USB D+ source nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-2.svg" title="USB D- source nodes" alt="USB D- source nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-power" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-power.svg" title="USB supply input" alt="USB supply input — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-vio-vdd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/vio-vdd.svg" title="Logic supply nodes" alt="Logic supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c1.svg" title="C1 source capacitor" alt="C1 source capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c2.svg" title="C2 source capacitor" alt="C2 source capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-c3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/c3.svg" title="C3 source capacitor" alt="C3 source capacitor — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-handshake-2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/handshake-2.svg" title="Auxiliary control nodes" alt="Auxiliary control nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-handshake-6" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/handshake-6.svg" title="Auxiliary control nodes" alt="Auxiliary control nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-gpio" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/gpio.svg" title="Four GPIO source nodes" alt="Four GPIO source nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-reset" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/reset.svg" title="Actual chip reset pull-up" alt="Actual chip reset pull-up — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d1" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d1.svg" title="D1 indicator branch" alt="D1 indicator branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d2" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d2.svg" title="D2 indicator branch" alt="D2 indicator branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-d3" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/d3.svg" title="D3 indicator branch" alt="D3 indicator branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-usb-esd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/usb-esd.svg" title="ESD source USB nodes" alt="ESD source USB nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-uart-esd" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/uart-esd.svg" title="ESD source UART nodes" alt="ESD source UART nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-jauart-usb-uart-adapter-factual-boundaries" src="/images/extensions/historical-jauart-usb-uart-adapter/guides/factual-circuits/boundaries.svg" title="Unused and unresolved source contacts" alt="Unused and unresolved source contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. Complete Prime installation remains unqualified. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
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

## Remaining requirements

Assembled logic voltage, USB-derived power/backfeed, fitted USB connector identity, cable orientation and computer-driver/session verification remain unresolved. The source-level TX/RX roles, Prime channel and framing are identified. The canonical-art electrical proposal, retained annotated reference sheets and supplementary functional schematic are present. Qualified native wire entries and mating views are still required for a complete physical installation diagram. The supplementary functional schematic has unreadably small connection labels at narrow Fit and requires full-size inspection; its existing readability gap remains open. Local preview checks do not establish public source/link availability or powered operation.

## Sources and attribution

- [Selected P11 Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P11_Prime2660/smoothiev2-prime-2660.kicad_pcb) — GB/J33 and the R74/R75 UART paths; matches the retained committed file. The existing proposal's metadata records its earlier P12 electrical derivation; the three UART/ground contact identities shown in it have been rechecked against this P11 source.

- [Ccecil upstream project](https://github.com/Ccecil/jaUART)
- [Pinned original source](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a)
- [Original USB_Uart.kicad_pcb](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_pcb)
- [Original USB_Uart.kicad_sch](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_sch)
- [Original readme.md](https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/readme.md)

The retained inventory did not identify a jaUART project license file. The abstract proposal preserves attribution to Ccecil’s historical design and uses the project’s canonical board illustrations. Third-party redistribution rights remain unresolved; absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
