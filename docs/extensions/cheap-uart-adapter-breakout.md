---
layout: default
title: "Cheap UART adapter breakout"
permalink: /extensions/cheap-uart-adapter-breakout
---

# Cheap UART adapter breakout

Use this carrier to connect a computer’s USB serial adapter to a Smoothieboard UART. A terminal can then read controller messages and send console commands. The carrier provides two signal translators and connector routing; the separate USB module provides the USB interface.

## How it works

Two SN74LVC1T45 translators give fixed direction: module TXO goes toward host RX and host TX goes toward module RXI. The module's VCC output is a translator reference, not an input from the carrier. The carrier does not forward host 5 V, CTS or DTR.

## Power, signals and limits

J2 order is GND, unused CTS, MOD_VCC, MOD_TXO, MOD_RXI, unused DTR. J1.4 is HOST_TX, .5 HOST_RX, .1 host 3.3 V and .10 ground; .2/.3/.6–.9 are unconnected. The practical example below uses SparkFun FTDI Basic 3V3 DEV-09873. The fitted module’s voltage selection, USB supply and logic thresholds must be checked against the translator contract.

## Board reference

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-guide-reference" src="/images/extensions/cheap-uart-adapter-breakout/guides/guide-board-reference.png" title="UART adapter — board reference" alt="Annotated carrier with host UART connector, module connector and fixed-direction translator paths, plus numbered functional contact keys" caption="Component-side board drawing. Numbered functional keys identify source contacts; they are not mating faces. Host and module 3.3 V references are separate rails. Red identifies a 3.3 V reference, green host transmit, violet host receive and black circuit ground." width=420 %}

<details markdown="1">
<summary>Detailed component references and contact sheets</summary>

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed on this board.
- Cyan: Selected supply — check the jumper or rail-selection instructions.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-overview" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-overview.png" title="UART module adapter — overview" alt="UART module adapter — overview" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reference" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for cheap-uart-adapter-breakout" caption="Component-side reference. Dotted leaders locate parts and are not wiring." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-uart-1-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-uart-1-5-central-pills.png" title="J1 · Host UART — host uart 1 5" alt="J1 · Host UART — host uart 1 5" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-uart-6-10" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-uart-6-10-central-pills.png" title="J1 · Host UART — host uart 6 10" alt="J1 · Host UART — host uart 6 10" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-header-1-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-header-1-5-central-pills.png" title="J2 · Module header — module header 1 5" alt="J2 · Module header — module header 1 5" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-header-6-6" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-header-6-6-central-pills.png" title="J2 · Module header — module header 6 6" alt="J2 · Module header — module header 6 6" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-to-host" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-to-host.png" title="Module to host — module to host" alt="Module to host — module to host" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-to-module" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-to-module.png" title="Host to module — host to module" alt="Host to module — host to module" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-protection" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-protection-underside-caption.png" title="Signal protection — protection" alt="Signal protection — protection" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-reference-test-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-reference-test-pads-underside-caption.png" title="Host / module test pads — reference test pads" alt="Host / module test pads — reference test pads" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-ground-test-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-ground-test-pads-underside-caption.png" title="Ground test pads — ground test pads" alt="Ground test pads — ground test pads" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-mounts" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

</details>

The compact reference above explains the connections. The detailed sheets locate pads and components; check connector orientation on your board.

### Connector contacts

Contact numbering below is the PCB's pad numbering, viewed using the board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. `NC` means unconnected, not a spare. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — GADGETEER U SOCKET | 1 | `+3V3` |
| J1 — GADGETEER U SOCKET | 4 | `/HOST_TX` |
| J1 — GADGETEER U SOCKET | 5 | `/HOST_RX` |
| J1 — GADGETEER U SOCKET | 10 | `GND` |
| J1 | 2, 3, 6, 7, 8, 9 | NC |
| J2 — MODULE PINS GND CTS VCC TXO RXI DTR | 1 | `GND` |
| J2 — MODULE PINS GND CTS VCC TXO RXI DTR | 3 | `/MOD_VCC` |
| J2 — MODULE PINS GND CTS VCC TXO RXI DTR | 4 | `/MOD_TXO` |
| J2 — MODULE PINS GND CTS VCC TXO RXI DTR | 5 | `/MOD_RXI` |
| J2 | 2, 6 | NC |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-connector-detail-01" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for cheap-uart-adapter-breakout" caption="Component-side reference. Dotted leaders locate parts and are not wiring." width=1440 %}

</details>

Active components: `U2 SN74LVC1T45 TX PATH`; `U1 SN74LVC1T45 RX PATH`; `U3 TPD4E1U06`; `U4 TPD4E1U06`.

</details>

## Practical use with Smoothieboard V2 Prime

### USB-console wiring

This example uses the **SparkFun FTDI Basic 3V3, DEV-09873**, from the [official hardware design](https://github.com/sparkfun/FTDI_Basic_Breakout-3.3V/tree/7f19f16b62e3f3e857c6f2e4e682809e38ac6ba8). Its numbered connector and 3.3 V selection are specific to that module; a similar-looking six-contact USB adapter is not interchangeable by appearance. The complete drawing below shows the **Prime GB/J33** electrical interface, carrier and module contacts, their separate supply origins, and the computer USB connection.

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-guide-wiring" src="/images/extensions/cheap-uart-adapter-breakout/guides/guide-complete-console-wiring.png" title="Complete USB console connection" alt="Prime GB UART connected through a ten-core Gadgeteer ribbon to the carrier, four numbered leads to SparkFun FTDI Basic 3.3 V, and USB Mini-B cable to a computer" caption="Complete electrical connection. The ribbon contains ten separate cores; only contacts 1, 4, 5 and 10 serve this carrier. Grey jacket and red edge do not show pin-one orientation. The four local module leads are shown separately. Verify all ten end-to-end mappings, contacts, module rail and power sequencing before use. No galvanic isolation is provided." width=420 %}

| Connection | Exact electrical assignment |
| --- | --- |
| Prime to carrier | GB/J33.1 → J1.1: host 3.3 V; .4 → .4: PB9 TX; .5 → .5: PH14 RX; .10 → .10: ground |
| Other ribbon cores | Matching numbers 2, 3, 6, 7, 8, 9; their carrier contacts are unconnected |
| Carrier to module | J2.1 → JP1.1: ground; J2.3 → JP1.3: module 3.3 V output; J2.4 → JP1.4: module TXO; J2.5 → JP1.5: module RXI |
| Module selection | Bridge SJ2.2–3 for POWER/VCCIO from 3V3OUT; leave SJ2.1, USB 5 V, unbridged |
| Computer | Complete USB cable from a computer USB host port to the module’s Mini-B port |
| Unused module controls | J2.2/CTS and J2.6/DTR stay disconnected; no reset or hardware flow-control lead |

The host supplies translator A-side 3.3 V. The USB module supplies translator B-side 3.3 V. These rails are not joined, although their grounds are common. The two UART paths cross inside the carrier: host TX reaches module RXI, and module TXO reaches host RX. The diagram’s colours identify functions rather than observed cable insulation.

<details markdown="1">
<summary>Pad views and connector orientation</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-0" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/cheap-uart-native-reader.png" title="Nine-connection USB console — contacts" alt="Nine-connection USB console — contacts for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=2600 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-1" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — contact key" alt="J33 — contact key for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-2" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — contact key" alt="J1 — contact key for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-3" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J2-numbered-pads.png" title="J2 — contact key" alt="J2 — contact key for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-4" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/JP1-numbered-pads.png" title="JP1 — contact key" alt="JP1 — contact key for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/SJ2-numbered-pads.png" title="SJ2 — contact key" alt="SJ2 — contact key for Prime J33, carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Contact crops show every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate." width=520 %}

<details>
<summary>Additional wiring views</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-compact-prime-ftdi-installation" src="/images/extensions/cheap-uart-adapter-breakout/guides/compact-prime-ftdi-installation.png" title="Nine-connection layout" alt="Complete nine-connection FTDI console circuit for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J33-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J33-compact-numbered-pads.png" title="J33 contact positions" alt="J33 contact positions for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J1-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J1-compact-numbered-pads.png" title="J1 contact positions" alt="J1 contact positions for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J2-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J2-compact-numbered-pads.png" title="J2 contact positions" alt="J2 contact positions for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-FTDI-JP1-top-projection" src="/images/extensions/cheap-uart-adapter-breakout/guides/FTDI-JP1-top-projection.png" title="FTDI JP1 top-side projection" alt="FTDI JP1 top-side projection for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-FTDI-SJ2-top-projection" src="/images/extensions/cheap-uart-adapter-breakout/guides/FTDI-SJ2-top-projection.png" title="FTDI SJ2 top-side projection" alt="FTDI SJ2 top-side projection for the SparkFun DEV-09873 module and carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board." width=420 %}

<details>
<summary>Wide wiring view</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-prime-ftdi-installation-wide-retained" src="/images/extensions/cheap-uart-adapter-breakout/guides/prime-installation-wiring.png" title="Wide view of the USB console" alt="Prime GB UART through the carrier to SparkFun FTDI Basic 3V3, with four numbered module wires and a computer USB cable" caption=" Verify the voltage selection, numbered mating and the separate supply domains before use." width=1800 %}

</details>

</details>

</details>

With all power removed:

1. Verify the module's **SJ2 contacts 2–3 select 3.3 V**, connecting POWER/VCCIO to FT232RL 3V3OUT. Do not use the USB 5 V selection at SJ2.1. Verify the voltage and exact module before attaching the carrier.
2. Use a **ten-core Gadgeteer ribbon with mating plugs at both ends**, connecting Prime GB/J33 to carrier J1. Verify every core by continuity against the contact keys; the coloured edge alone does not prove pin-one orientation. The electrical example is 1-to-1: contacts .1/.4/.5/.10 serve the carrier, while its other contacts are unconnected. Contact 1 supplies the translator A-side from limited host 3.3 V, 4 is PB9 host TX, 5 is PH14 host RX, and 10 is common ground. The carrier does not use host 5 V at contact 2 or the remaining signal contacts. Check the connector population, housing and mating of the host header and carrier.
3. Connect carrier **J2.1/.3/.4/.5 to module JP1.1/.3/.4/.5**, respectively: ground, module 3.3 V output, module TXO and module RXI. Leave CTS at contact 2 and DTR at contact 6 disconnected; there is no reset lead or hardware flow control.
4. Power the module through its computer USB cable. Its USB-derived 3.3 V supplies only the translator B-side; host 3.3 V supplies the A-side. Do not tie host 5 V to J2.3 or use the module rail to power Prime. These interfaces share ground and provide no galvanic isolation.
5. After checking the cable, voltage and power-order behavior with machine loads disabled, use the channel-1 console settings below and the matching computer terminal settings. Power off before changing links or connections.

Host TX crosses the A-to-B translator to module RXI at J2.5. Module TXO at J2.4 crosses the B-to-A translator to host RX. These are logic UART signals, not RS232 or RS485. Check mechanical fit, voltage and installed firmware before use.

## Smoothieware configuration and use

This board performs UART electrical conversion rather than implementing an accessory command protocol. The conversion direction and supply must match the computer adapter and Prime.

### UART-console settings

The [console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) implements the following settings. This example enables **channel 1** at **115200 bit/s, 8 data bits, no parity, one stop bit**:

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

On Prime, [channel 1 uses TX PB9 and RX PH14](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135); the [host pin table](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/pins.md#L188-L202) places them on **GB contacts 4 and 5**, with ground on contact 10. Channel 0 instead uses PD8/PB11, identified as GD contacts 4/5. On the Prime PCB, GB is J33: contact 4 reaches PB9 through R74 (100 Ω), and contact 5 reaches PH14 through R75 (100 Ω). These channels are fixed HAL selections, not arbitrary GPIO assignments. Reserve the selected channel and both pins in the complete configuration; `console = false` initializes an auxiliary UART without starting its command-console reader.

After the board-specific supply, direction and cable checks in this guide are complete, use a computer terminal at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not check the adapter's electrical behavior.

- [Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 and the R74/R75 UART paths.

- [SparkFun module hardware source](https://github.com/sparkfun/FTDI_Basic_Breakout-3.3V/tree/7f19f16b62e3f3e857c6f2e4e682809e38ac6ba8) — DEV-09873 numbered JP1 contacts and SJ2 3.3 V selection; hardware source licensed CC BY-SA 4.0. The module in the schematic drawing is independently depicted from interface facts.
- [Design source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/cheap-uart-adapter-breakout/attempt/versions/v14)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/cheap-uart-adapter-breakout/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/cheap-uart-adapter-breakout/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="cheap-uart-adapter-breakout" %}

</details>
