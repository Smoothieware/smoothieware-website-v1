---
layout: default
title: "USB/Serial breakout"
permalink: /extensions/usb-serial-breakout
---

# USB/Serial breakout

This board integrates a USB-to-UART bridge between a computer and a controller U socket. It replaces a separate TTL USB cable for the defined interface. It is not a debug probe, USB host port or native Smoothie USB connection.

This guide selects **v15**, the PCB revision named by the existing abstract export. It is a prototype/design candidate; no release, physical operation or current rating is established by a clean CAD check. Older root specifications are design history where they name another revision.

The selected v15 source package retains schematic title-block revision **v11**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The selected FT231XS-R bridge connects through a TXU0202 opposing-channel translator to host TX/RX. J3 is USB-B, J1 the host U input and J2 a configurable chain. The chain cannot safely share UART wires with a second active transmitter without explicit source selection.

## Power, signal direction and limits

J3.1 is USB VBUS, .2 D−, .3 D+ and .4 ground; shield also connects to ground in the saved source. J1.4/.5 are UART_HOST_TX/RX. The presence of USB and host supply rails does not establish no-backfeed behavior for every power order. Exact USB cable, bridge descriptors/driver, host logic levels, supply allocation and protection remain qualification items.

### Initial UART source selection

The selected source uses J1 as the controller connection and leaves J2 disconnected. This describes the proposed console path; keep the unqualified candidate unpowered. In v15, controller TX at J1.4 reaches FT231XS RXD through U3. FT231XS TXD returns through U3 and R3 (33 Ω) to JP5.1. JP5.2 is controller RX at J1.5; the source-default 1–2 bridge selects that USB bridge output. JP5.3 instead reaches chain RX at J2.5. Open 1–2 before selecting 2–3; never connect both transmitters together.

The controller-side 3.3 V net and FT231XS-side 3.3 V net are separate, with common ground. USB VBUS is separate from host 5 V. These are saved source-net relationships, not power-order or backfeed qualification. JP3/JP4/JP6 forward contacts 3/4/6 to the chain; contacts 7–9 have no circuit connection. JP8 feeds D1 and JP7 feeds D2; bridge CBUS programming must match before treating these as activity indicators.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-overview" src="/images/extensions/usb-serial-breakout/guides/reader-compact-overview.png" title="USB serial breakout — overview" alt="USB serial breakout — overview for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reference" src="/images/extensions/usb-serial-breakout/guides/reader-reference.png" title="Annotated board reference — v15" alt="Annotated board reference for usb-serial-breakout v15" caption="Selected-source component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views; connector populations, signal directions and link defaults are revision-specific. Electrical limits and complete installation remain open." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART — host 1 5" alt="J1 · Host UART — host 1 5 for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-6-10" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART — host 6 10" alt="J1 · Host UART — host 6 10 for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-1-5-central-pills.png" title="J2 · Chain UART — chain 1 5" alt="J2 · Chain UART — chain 1 5 for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-6-10" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-6-10-central-pills.png" title="J2 · Chain UART — chain 6 10" alt="J2 · Chain UART — chain 6 10 for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-1-5-central-pills.png" title="J3 · USB-B — usb 1 5" alt="J3 · USB-B — usb 1 5 for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-rx-selector" src="/images/extensions/usb-serial-breakout/guides/reader-compact-rx-selector.png" title="Receive source selector — rx selector" alt="Receive source selector — rx selector for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-links" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-links.png" title="Chain signal links — chain links" alt="Chain signal links — chain links for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-bridge" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-bridge.png" title="USB bridge circuitry — usb bridge" alt="USB bridge circuitry — usb bridge for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-uart-translation" src="/images/extensions/usb-serial-breakout/guides/reader-compact-uart-translation.png" title="Opposing UART channels — uart translation" alt="Opposing UART channels — uart translation for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-led" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-led.png" title="Controller to USB LED — host led" alt="Controller to USB LED — host led for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-led" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-led.png" title="USB to controller LED — usb led" alt="USB to controller LED — usb led for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-tests-underside-caption.png" title="USB supply test pads — usb tests" alt="USB supply test pads — usb tests for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-tests-underside-caption.png" title="Host supply test pads — host tests" alt="Host supply test pads — host tests for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-uart-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-uart-tests-underside-caption.png" title="Serial test pads — uart tests" alt="Serial test pads — uart tests for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-mounts" src="/images/extensions/usb-serial-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for usb-serial-breakout v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

These references are instructional candidates. Complete practical wiring, electrical limits and actual desktop/narrow reader checks remain incomplete.

### usb-serial — selected connector contact map

The following is saved PCB pad/net readback. It proves neither physical continuity nor mating orientation/current capacity. Same-numbered duplicate lands are collapsed in this electrical table. Physical connector-population and mating qualification remains open. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Saved function/net |
| --- | --- | --- |
| J2 — GADGETEER U CHAIN | 1 | `+3V3` |
| J2 — GADGETEER U CHAIN | 2 | `+5V` |
| J2 — GADGETEER U CHAIN | 3 | `/P3_CHAIN` |
| J2 — GADGETEER U CHAIN | 4 | `/UART_CHAIN_TX` |
| J2 — GADGETEER U CHAIN | 5 | `/UART_CHAIN_RX` |
| J2 — GADGETEER U CHAIN | 6 | `/P6_CHAIN` |
| J2 — GADGETEER U CHAIN | 10 | `GND` |
| J2 | 7, 8, 9 | NC |
| J1 — GADGETEER U IN | 1 | `+3V3` |
| J1 — GADGETEER U IN | 2 | `+5V` |
| J1 — GADGETEER U IN | 3 | `/P3_HOST` |
| J1 — GADGETEER U IN | 4 | `/UART_HOST_TX` |
| J1 — GADGETEER U IN | 5 | `/UART_HOST_RX` |
| J1 — GADGETEER U IN | 6 | `/P6_HOST` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J1 | 7, 8, 9 | NC |
| J3 — USB-B | 1 | `VBUS` |
| J3 — USB-B | 2 | `/USB_DM_C` |
| J3 — USB-B | 3 | `/USB_DP_C` |
| J3 — USB-B | 4 | `GND` |
| J3 — USB-B | 5 | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-connector-detail-01" src="/images/extensions/usb-serial-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01 — v15" alt="Connector detail 01 for usb-serial-breakout v15" caption="Selected-source component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views; connector populations, signal directions and link defaults are revision-specific. Electrical limits and complete installation remain open." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-connector-detail-02" src="/images/extensions/usb-serial-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02 — v15" alt="Connector detail 02 for usb-serial-breakout v15" caption="Selected-source component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views; connector populations, signal directions and link defaults are revision-specific. Electrical limits and complete installation remain open." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-link-detail-01" src="/images/extensions/usb-serial-breakout/guides/reader-link-detail-01.png" title="Link detail 01 — v15" alt="Link detail 01 for usb-serial-breakout v15" caption="Selected-source component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views; connector populations, signal directions and link defaults are revision-specific. Electrical limits and complete installation remain open." width=1440 %}

</details>


### Links, indicators and controls

The table identifies this selected board's actual links and indicators. Default population and complete circuit meaning must be reconciled before cut/bridge instructions are accepted. Indicator labels describe observed circuit signals, not physical load or safety qualification.

| Item | Selected label | Contact nets |
| --- | --- | --- |
| JP7 | CUT TO DISABLE D2 | 1=LED_D2_DISABLE; 2=/LED_USBTOU_A |
| JP6 | P6 FWD | 1=/P6_HOST; 2=/P6_CHAIN |
| JP5 | RX SRC | 1=/UART_BRG_RX_J; 2=/UART_HOST_RX; 3=/UART_CHAIN_RX |
| JP8 | CUT TO DISABLE D1 | 1=LED_D1_DISABLE; 2=/LED_UTOUSB_A |
| JP3 | P3 FWD | 1=/P3_HOST; 2=/P3_CHAIN |
| D2 | AMBER USB>U | 1=/LED_USBTOU_K; 2=LED_D2_DISABLE |
| JP4 | TX FWD | 1=/UART_HOST_TX; 2=/UART_CHAIN_TX |
| D1 | AMBER U>USB | 1=/LED_UTOUSB_K; 2=LED_D1_DISABLE |


</details>

## Practical use with Smoothieboard V2 Prime

Use this native-contact circuit with all three keys. Four individual leads terminate on actual J33 and J1 contact artwork; a complete USB-B data cable connects the computer to the retained board connector. Its drawn endpoint identifies the source-art socket opening, not exposed USB pins. Dashed orange locators show the crops on the complete board abstracts. The Prime artwork is P11 with the checked P12 GB/J33 allocation. Select JP5 1–2 only; keep 2–3 open, J2 unused and host 5 V disconnected.

**Do not power this unqualified connection candidate.** Read the main drawing, both qualification sheets and all three contact keys together.

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-0" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-native-reader-candidate.png" title="Prime, USB serial carrier and computer — unpowered contact candidate" alt="Unpowered candidate with four Prime host leads and a complete USB-B cable assembly" caption="NO POWER. Read both qualification sheets and all three contact keys. Four host leads and a USB cable assembly are proposed; JP5 selects 1–2 only, J2 and host 5 V stay disconnected. Separate supply domains, physical mating and energized behavior remain unqualified." width=900 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-qualification-1" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-qualifications-1.png" title="USB serial v15 — host leads, supply domains and JP5" alt="USB serial v15 — host leads, supply domains and JP5" caption="Required companion: no power or energized use is qualified. Host 3.3 V and USB power are separate domains; host 5 V and J2 remain disconnected. JP5 1–2 is bridged and 2–3 is open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-qualification-2" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-qualifications-2.png" title="USB serial v15 — mating, firmware and powered-use limits" alt="USB serial v15 — mating, firmware and powered-use limits" caption="Required companion: source-pad coordinates do not establish plug mating, fitted cable continuity or powered operation. P11 artwork and P12 allocation are distinct; UART source support is separate from runtime verification." width=420 %}



{% include _includes/extension-instruction-diagram.html id="usb-serial-native-1" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="Prime GB/J33 — complete contact key" alt="Prime GB/J33 — complete contact key" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Physical mating, powered voltage compatibility and full retained artwork remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-2" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Carrier J1 — complete contact key" alt="Carrier J1 — complete contact key" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Physical mating, powered voltage compatibility and full retained artwork remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-3" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/JP5-numbered-pads.png" title="JP5 — bridge receive-source selection" alt="JP5 — bridge receive-source selection" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Physical mating, powered voltage compatibility and full retained artwork remain open." width=420 %}

<details markdown="1">
<summary>Retained original native-contact drawing — superseded presentation</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-original" src="/images/extensions/usb-serial-breakout/guides/native-contact/usb-serial-native-reader.png" title="Prime, USB serial carrier and computer — complete connection plan" alt="Prime, USB serial carrier and computer — complete connection plan" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Physical mating, powered voltage compatibility and full retained artwork remain open." width=900 %}

</details>

<details markdown="1">
<summary>Earlier unqualified source comparisons — function-arranged ports</summary>

These retained layouts do not establish that every external lead lands on native artwork. Use the selected native-contact main circuit and all three keys above.

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-compact-installation" src="/images/extensions/usb-serial-breakout/guides/prime-compact-individual-leads.png" title="USB serial v15: Prime console and computer" alt="Four individual Prime J33 leads connect host supply, TX, RX and ground; a USB-B data cable connects the bridge to the computer." caption="JP5 selects bridge RX on pads 1–2, leaving 2–3 open. USB powers the bridge side; host 5 V remains disconnected. Physical mating remains open." width=420 %}

### Enlarged installation contact numbers

These PCB front-coordinate projections are not plug or mating-face views. Filled pads are selected; open pads remain unused. Read the keys with the complete circuit above.

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-J33" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/J33-numbered-pads.png" title="J33 installation contacts" alt="Numbered J33 PCB contacts with the selected UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-J1" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/J1-numbered-pads.png" title="J1 installation contacts" alt="Numbered J1 PCB contacts with the selected UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-JP5" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/JP5-numbered-pads.png" title="JP5 installation contacts" alt="Numbered JP5 PCB contacts with the selected UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

<details markdown="1">
<summary>Retained wider console electrical drawing</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-integral-installation-retained-alternative" src="/images/extensions/usb-serial-breakout/guides/prime-installation-wiring.png" title="Usb serial breakout v15 — complete selected installation" alt="Source-numbered Prime, extension board and selected peripheral with continuous autorouted electrical paths." caption="Electrical schematic using retained P11 Prime artwork and a source-checked P12 connector assignment. Numbered symbols preserve electrical identities. Physical connector mating and complete artwork lint remain open." width=1950 %}

</details>

</details>

The unpowered connection candidate uses the onboard FT231XS/TXU0202 interface, a USB-B data cable to the computer and four individual same-numbered leads to Prime GB/J33: J33.1 → J1.1, J33.4 → J1.4, J33.5 → J1.5 and J33.10 → J1.10. Leave host 5 V and all remaining contacts disconnected. Select JP5 pads 1–2 and leave 2–3 open; do not connect competing transmitters. USB supplies the bridge-side domain, while Prime supplies the host-side 3.3 V domain. Host 5 V is distinct from USB VBUS. No external TTL serial module is part of this candidate. The channel 1 console settings below document firmware support; they do not authorize powering the adapter.

The selected autorouted installation above uses **P12 Prime GB/J33**, with channel 1 TX on contact 4 (PB9), RX on contact 5 (PH14), and ground on contact 10. Retained host artwork is P11; the numbered J33 source map was checked against P12. Physical mating and measured voltage compatibility remain unqualified. The drawing and its two qualification sheets must be read together.

1. Keep the computer USB cable, Prime and every other supply disconnected while checking the candidate. USB can energize the bridge even when Prime is off.
2. Check the four proposed host leads against the contact keys: J33.1/.4/.5/.10 to J1.1/.4/.5/.10. Every other host contact remains unused; do not substitute a fully populated U ribbon.
3. Check that JP5 selects 1–2 only, 2–3 is open and J2 is unused. Source-default links do not prove the fitted solder state.
4. Stop before connecting power. This guide does not establish safe power sequencing, backfeed behavior or physical mating; the firmware example below is conditional on independently resolving those limitations.

## Smoothieware configuration and use

The FTDI bridge needs the normal computer-side serial driver. Smoothieware sees a UART, not USB packets; the USB-B and Gadgeteer power paths must follow the selected board revision.

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

- [Selected P12 Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 and the R74/R75 UART paths; matches the retained committed file.

- [Selected v15 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/usb-serial-breakout/attempt/versions/v15)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/specs.md) — retain older revision boundaries.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/design.md)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

**Remaining board-specific issue:** USB/host power-order qualification, bridge host driver, complete cable orientation and an actual serial session. The conditional console mapping is source-checked.

<details markdown="1">
<summary>Supplementary board views and engineering history</summary>

Selected active components: `U2 USBLC6-2SC6`; `U3 TXU0202DCU (opposing UART channels)`; `U1 FT231XS-R`. Part identities do not establish an assembled rating.

{% include _includes/extension-board-visuals.html slug="usb-serial-breakout" %}

These gallery views are supplementary; they are not the two required instructional diagrams. Their captions must preserve any older/different revision or population. Iteration logs, trial results and future upgrade proposals remain engineering history rather than operating instructions.

</details>
