---
layout: default
title: "Cheap UART adapter breakout"
permalink: /extensions/cheap-uart-adapter-breakout
---

# Cheap UART adapter breakout

Use this carrier to connect a computer’s USB serial adapter to a Smoothieboard UART. A terminal can then read controller messages and send console commands. The carrier provides two signal translators and connector routing; the separate USB module provides the USB interface.

The original specification calls for a qualified low-cost CH340 module, but its exact make and revision are still unresolved. The concrete example here instead uses the source-documented **SparkFun FTDI Basic 3.3 V, DEV-09873**. It demonstrates the selected carrier’s electrical connections; it does not qualify an arbitrary CH340 clone or establish that the original low-cost-module requirement is complete.

This guide selects **v14** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v14 source package retains schematic title-block revision **v10**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

Two SN74LVC1T45 translators give fixed direction: module TXO goes toward host RX and host TX goes toward module RXI. The module's VCC output is a translator reference, not an input from the carrier. The selected carrier does not forward host 5 V, CTS or DTR.

## Power, signals and limits

J2 order is GND, unused CTS, MOD_VCC, MOD_TXO, MOD_RXI, unused DTR. J1.4 is HOST_TX, .5 HOST_RX, .1 host 3.3 V and .10 ground; .2/.3/.6–.9 are unconnected. The practical example below selects SparkFun FTDI Basic 3V3 DEV-09873 at the named source revision. Older reference work naming DEV-14050 hardware v1.0 describes a different module and is not the peripheral in this wiring example. The fitted module’s voltage selection, USB supply and logic thresholds must still be verified against the translator contract. No universal hot-plug or system ESD survival claim is established.

## Board reference

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-guide-reference" src="/images/extensions/cheap-uart-adapter-breakout/guides/guide-board-reference.png" title="UART adapter v14 — board reference" alt="Annotated v14 carrier with host UART connector, module connector and fixed-direction translator paths, plus numbered functional contact keys" caption="Canonical component-side abstract artwork, uniformly scaled. Numbered functional keys identify source contacts; they are not physical mating faces. Host and module 3.3 V references are separate rails. Red identifies a 3.3 V reference, green host transmit, violet host receive and black circuit ground." width=420 %}

<details markdown="1">
<summary>Detailed component references and source contact sheets</summary>

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Cyan: Selected supply — check the jumper or rail-selection instructions.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-overview" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-overview.png" title="UART module adapter — overview" alt="UART module adapter — overview for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reference" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-reference.png" title="Annotated board reference — v14" alt="Annotated board reference for cheap-uart-adapter-breakout" caption="Source-bound component-side reference. Dotted leaders locate parts and are not wiring. Physical mating, voltage qualification and actual page-viewer review remain open." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-uart-1-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-uart-1-5-central-pills.png" title="J1 · Host UART — host uart 1 5" alt="J1 · Host UART — host uart 1 5 for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-uart-6-10" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-uart-6-10-central-pills.png" title="J1 · Host UART — host uart 6 10" alt="J1 · Host UART — host uart 6 10 for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-header-1-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-header-1-5-central-pills.png" title="J2 · Module header — module header 1 5" alt="J2 · Module header — module header 1 5 for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-header-6-6" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-header-6-6-central-pills.png" title="J2 · Module header — module header 6 6" alt="J2 · Module header — module header 6 6 for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-module-to-host" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-module-to-host.png" title="Module to host — module to host" alt="Module to host — module to host for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-host-to-module" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-host-to-module.png" title="Host to module — host to module" alt="Host to module — host to module for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-protection" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-protection-underside-caption.png" title="Signal protection — protection" alt="Signal protection — protection for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-reference-test-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-reference-test-pads-underside-caption.png" title="Host / module test pads — reference test pads" alt="Host / module test pads — reference test pads for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-ground-test-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-ground-test-pads-underside-caption.png" title="Ground test pads — ground test pads" alt="Ground test pads — ground test pads for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-reader-compact-mounts" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for cheap-uart-adapter-breakout v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

</details>

The compact reference above explains the connections. The retained detailed sheets locate source pads and components; neither type of drawing establishes fitted connector orientation or hardware qualification.

### cheap-uart-adapter-breakout — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
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

{% include _includes/extension-instruction-diagram.html id="cheap-uart-adapter-breakout-v14-connector-detail-01" src="/images/extensions/cheap-uart-adapter-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01 — v14" alt="Connector detail 01 for cheap-uart-adapter-breakout" caption="Source-bound component-side reference. Dotted leaders locate parts and are not wiring. Physical mating, voltage qualification and actual page-viewer review remain open." width=1440 %}

</details>


Selected active-component identities: `U2 SN74LVC1T45 TX PATH`; `U1 SN74LVC1T45 RX PATH`; `U3 TPD4E1U06`; `U4 TPD4E1U06`. These identities are not a substitute for matching datasheet limits.


</details>

## Practical use with Smoothieboard V2 Prime

### Concrete USB-console wiring candidate

This selected v14 example uses the **SparkFun FTDI Basic 3V3, DEV-09873**, from [official hardware revision `7f19f16b62e3f3e857c6f2e4e682809e38ac6ba8`](https://github.com/sparkfun/FTDI_Basic_Breakout-3.3V/tree/7f19f16b62e3f3e857c6f2e4e682809e38ac6ba8). Its numbered connector and 3.3 V selection are specific to that source; a similar-looking six-contact USB adapter is not interchangeable by appearance. The complete drawing below shows the selected **P12 Prime GB/J33** electrical interface, carrier and module contacts, their separate supply origins, and the computer USB connection. Its enlarged contact banks are schematic keys, not measured mating cavities. The older detailed comparisons retain P11 locator artwork with the P12 GB/J33 assignments reconciled separately.

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-guide-wiring" src="/images/extensions/cheap-uart-adapter-breakout/guides/guide-complete-console-wiring.png" title="Complete USB console connection" alt="Prime GB UART connected through a proposed ten-core Gadgeteer ribbon to the v14 carrier, four numbered leads to SparkFun FTDI Basic 3.3 V, and USB Mini-B cable to a computer" caption="Complete electrical proposal. The ribbon contains ten separate cores; only contacts 1, 4, 5 and 10 serve this carrier. Grey jacket and red edge describe the proposed assembly, not measured pin-one orientation. The four local module leads are shown separately. Verify all ten end-to-end mappings, fitted contacts, module rail and power sequencing before use. No galvanic isolation is provided." width=420 %}

| Connection | Exact electrical assignment |
| --- | --- |
| Prime to carrier | GB/J33.1 → J1.1: host 3.3 V; .4 → .4: PB9 TX; .5 → .5: PH14 RX; .10 → .10: ground |
| Other ribbon cores | Proposed matching numbers 2, 3, 6, 7, 8, 9; their carrier contacts are unconnected in v14 |
| Carrier to module | J2.1 → JP1.1: ground; J2.3 → JP1.3: module 3.3 V output; J2.4 → JP1.4: module TXO; J2.5 → JP1.5: module RXI |
| Module selection | Bridge SJ2.2–3 for POWER/VCCIO from 3V3OUT; leave SJ2.1, USB 5 V, unbridged |
| Computer | Complete USB cable from a computer USB host port to the module’s Mini-B port |
| Unused module controls | J2.2/CTS and J2.6/DTR stay disconnected; no reset or hardware flow-control lead |

The host supplies translator A-side 3.3 V. The USB module supplies translator B-side 3.3 V. These rails are not joined, although their grounds are common. The two UART paths cross inside the carrier: host TX reaches module RXI, and module TXO reaches host RX. The diagram’s colours identify functions rather than observed cable insulation.

<details markdown="1">
<summary>Retained native-pad comparisons and connector orientation evidence</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-0" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/cheap-uart-native-reader.png" title="Nine-connection USB console — native contacts" alt="Nine-connection USB console — native contacts for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=2600 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-1" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — source contact key" alt="J33 — source contact key for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-2" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — source contact key" alt="J1 — source contact key for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-3" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/J2-numbered-pads.png" title="J2 — source contact key" alt="J2 — source contact key for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-4" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/JP1-numbered-pads.png" title="JP1 — source contact key" alt="JP1 — source contact key for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-native-5" src="/images/extensions/cheap-uart-adapter-breakout/guides/native-contact/reader-contact-keys/SJ2-numbered-pads.png" title="SJ2 — source contact key" alt="SJ2 — source contact key for Prime J33, v14 carrier and SparkFun DEV-09873" caption="Use the complete circuit with all five contact keys. Native contact crops retain every numbered pad; FTDI JP1 shows bottom-face contacts projected into the component-side frame. Host A-side and USB module B-side 3.3 V rails remain separate. Cable mating and assembled operation require verification; actual page-viewer review remains open." width=520 %}

<details>
<summary>Earlier source comparisons — not the selected native-contact drawing</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-compact-prime-ftdi-installation" src="/images/extensions/cheap-uart-adapter-breakout/guides/compact-prime-ftdi-installation.png" title="Earlier source comparison — unqualified nine-connection layout" alt="Complete nine-connection FTDI console circuit for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=520 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J33-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J33-compact-numbered-pads.png" title="J33 source contact positions" alt="J33 source contact positions for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J1-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J1-compact-numbered-pads.png" title="J1 source contact positions" alt="J1 source contact positions for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-J2-compact-numbered-pads" src="/images/extensions/cheap-uart-adapter-breakout/guides/J2-compact-numbered-pads.png" title="J2 source contact positions" alt="J2 source contact positions for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-FTDI-JP1-top-projection" src="/images/extensions/cheap-uart-adapter-breakout/guides/FTDI-JP1-top-projection.png" title="FTDI JP1 top-side source projection" alt="FTDI JP1 top-side source projection for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-FTDI-SJ2-top-projection" src="/images/extensions/cheap-uart-adapter-breakout/guides/FTDI-SJ2-top-projection.png" title="FTDI SJ2 top-side source projection" alt="FTDI SJ2 top-side source projection for the selected SparkFun DEV-09873 module and v14 carrier" caption="Read the complete circuit with all five contact keys. FTDI keys show the PCB top projection with USB at right and bottom pads projected through the board. Cable plug faces and assembled operation are not qualified; page-reader inspection remains open." width=420 %}

<details>
<summary>Earlier wide wiring view</summary>

{% include _includes/extension-instruction-diagram.html id="cheap-uart-v14-prime-ftdi-installation-wide-retained" src="/images/extensions/cheap-uart-adapter-breakout/guides/prime-installation-wiring.png" title="Earlier wide source comparison — unqualified USB console" alt="Prime GB UART through the v14 carrier to SparkFun FTDI Basic 3V3, with four numbered module wires and a computer USB cable" caption="Source-bound wiring candidate, not a proven assembled adapter. Verify fitted voltage selection, numbered mating and the separate supply domains before use." width=1800 %}

</details>


</details>

</details>

With all power removed:

1. Verify the module's **SJ2 contacts 2–3 select 3.3 V**, connecting POWER/VCCIO to FT232RL 3V3OUT. Do not use the USB 5 V selection at SJ2.1. Verify the assembled voltage and exact module revision before attaching the carrier.
2. Use a **proposed ten-core Gadgeteer ribbon with mating plugs at both ends**, connecting Prime GB/J33 to carrier J1. Verify every core by continuity against the selected source contact keys; the coloured edge alone does not prove pin-one orientation. The electrical example is 1-to-1: contacts .1/.4/.5/.10 serve the carrier, while its other contacts are unconnected. Contact 1 supplies the translator A-side from limited host 3.3 V, 4 is PB9 host TX, 5 is PH14 host RX, and 10 is common ground. The carrier does not use host 5 V at contact 2 or the remaining signal contacts. The host header and carrier require exact connector-population, housing and mating checks; no fitted ribbon assembly is qualified here. This drawing is not a physical plug-face view.
3. Connect carrier **J2.1/.3/.4/.5 to module JP1.1/.3/.4/.5**, respectively: ground, module 3.3 V output, module TXO and module RXI. Leave CTS at contact 2 and DTR at contact 6 disconnected; there is no reset lead or hardware flow control.
4. Power the module through its computer USB cable. Its USB-derived 3.3 V supplies only the translator B-side; host 3.3 V supplies the A-side. Do not tie host 5 V to J2.3 or use the module rail to power Prime. These interfaces share ground and provide no galvanic isolation.
5. After qualifying the fitted cable, voltage and power-order behavior with machine loads disabled, use the channel-1 console settings below and the matching computer terminal settings. Power off before changing links or connections.

Host TX crosses the A-to-B translator to module RXI at J2.5. Module TXO at J2.4 crosses the B-to-A translator to host RX. These are logic UART signals, not RS232 or RS485. Mechanical fit, assembled voltage, installed firmware and physical operation remain unqualified.

## Smoothieware configuration and use

This board performs UART electrical conversion rather than implementing an accessory command protocol. The selected conversion direction and supply must match the computer adapter and Prime.

### Verified UART-console settings

The [console parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761) implements the following real settings. This example enables **channel 1** at **115200 bit/s, 8 data bits, no parity, one stop bit**:

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

On Prime, [channel 1 uses TX PB9 and RX PH14](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135); the [host pin table](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/pins.md#L188-L202) places them on **GB contacts 4 and 5**, with ground on contact 10. Channel 0 instead uses PD8/PB11, identified as GD contacts 4/5. On the selected P12 Prime PCB, GB is J33: contact 4 reaches PB9 through R74 (100 Ω), and contact 5 reaches PH14 through R75 (100 Ω). These channels are fixed HAL selections, not arbitrary GPIO assignments. Reserve the selected channel and both pins in the complete configuration; `console = false` initializes an auxiliary UART without starting its command-console reader.

After the board-specific supply, direction and cable checks in this guide are complete, use a computer terminal at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not qualify the adapter's full electrical behavior. Neither the selected source revision nor this example proves which firmware is installed on your controller.

The console implementation exists; an adapter-specific missing function must be identified separately. If required functionality is absent, email **wolf.arthur@gamil.com** with the board revision, selected UART channel and desired use.


## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected P12 Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 and the R74/R75 UART paths; matches the retained committed file.

- [SparkFun module hardware source](https://github.com/sparkfun/FTDI_Basic_Breakout-3.3V/tree/7f19f16b62e3f3e857c6f2e4e682809e38ac6ba8) — DEV-09873 numbered JP1 contacts and SJ2 3.3 V selection; hardware source licensed CC BY-SA 4.0. The module in the schematic drawing is independently depicted from interface facts.
- [Selected v14 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/cheap-uart-adapter-breakout/attempt/versions/v14)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/cheap-uart-adapter-breakout/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/cheap-uart-adapter-breakout/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Matching module availability and voltage, physical mating, power sequencing and measured signal levels remain unresolved. The selected host UART assignment and console settings are source-checked above.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="cheap-uart-adapter-breakout" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
