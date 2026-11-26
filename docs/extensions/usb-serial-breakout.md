---
layout: default
title: "USB/Serial breakout"
permalink: /extensions/usb-serial-breakout
---

# USB/Serial breakout

This board integrates a USB-to-UART bridge between a computer and a controller U socket. It replaces a separate TTL USB cable for the defined interface. It is not a debug probe, USB host port or native Smoothie USB connection.

## How it works

The FT231XS-R bridge connects through a TXU0202 opposing-channel translator to host TX/RX. J3 is USB-B, J1 the host U input and J2 a configurable chain. The chain cannot safely share UART wires with a second active transmitter without explicit source selection at JP5.

## Power, signal direction and limits

J3.1 is USB VBUS, .2 D−, .3 D+ and .4 ground; shield also connects to ground on the board. J1.4/.5 are UART_HOST_TX/RX. USB and host supply rails are both present, so check backfeed behaviour for your power order, and check host logic levels and supply allocation.

### UART source selection

The default wiring uses J1 as the controller connection and leaves J2 disconnected. Controller TX at J1.4 reaches FT231XS RXD through U3. FT231XS TXD returns through U3 and R3 (33 Ω) to JP5.1. JP5.2 is controller RX at J1.5; the default 1–2 bridge selects that USB bridge output. JP5.3 instead reaches chain RX at J2.5. Open 1–2 before selecting 2–3; never connect both transmitters together.

The controller-side 3.3 V net and FT231XS-side 3.3 V net are separate, with common ground. USB VBUS is separate from host 5 V. JP3/JP4/JP6 forward contacts 3/4/6 to the chain; contacts 7–9 have no circuit connection. JP8 feeds D1 and JP7 feeds D2; bridge CBUS programming must match before treating these as activity indicators.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Grey: Not routed on this board.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-overview" src="/images/extensions/usb-serial-breakout/guides/reader-compact-overview.png" title="USB serial breakout — overview" alt="USB serial breakout — overview for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reference" src="/images/extensions/usb-serial-breakout/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for usb-serial-breakout" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART — host 1 5" alt="J1 · Host UART — host 1 5 for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-6-10" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART — host 6 10" alt="J1 · Host UART — host 6 10 for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-1-5-central-pills.png" title="J2 · Chain UART — chain 1 5" alt="J2 · Chain UART — chain 1 5 for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-6-10" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-6-10-central-pills.png" title="J2 · Chain UART — chain 6 10" alt="J2 · Chain UART — chain 6 10 for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-1-5" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-1-5-central-pills.png" title="J3 · USB-B — usb 1 5" alt="J3 · USB-B — usb 1 5 for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-rx-selector" src="/images/extensions/usb-serial-breakout/guides/reader-compact-rx-selector.png" title="Receive source selector — rx selector" alt="Receive source selector — rx selector for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-chain-links" src="/images/extensions/usb-serial-breakout/guides/reader-compact-chain-links.png" title="Chain signal links — chain links" alt="Chain signal links — chain links for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-bridge" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-bridge.png" title="USB bridge circuitry — usb bridge" alt="USB bridge circuitry — usb bridge for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-uart-translation" src="/images/extensions/usb-serial-breakout/guides/reader-compact-uart-translation.png" title="Opposing UART channels — uart translation" alt="Opposing UART channels — uart translation for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-led" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-led.png" title="Controller to USB LED — host led" alt="Controller to USB LED — host led for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-led" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-led.png" title="USB to controller LED — usb led" alt="USB to controller LED — usb led for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-usb-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-usb-tests-underside-caption.png" title="USB supply test pads — usb tests" alt="USB supply test pads — usb tests for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-host-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-host-tests-underside-caption.png" title="Host supply test pads — host tests" alt="Host supply test pads — host tests for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-uart-tests" src="/images/extensions/usb-serial-breakout/guides/reader-compact-uart-tests-underside-caption.png" title="Serial test pads — uart tests" alt="Serial test pads — uart tests for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-reader-compact-mounts" src="/images/extensions/usb-serial-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for usb-serial-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

### Connector contact map

The following is the PCB pad and net list; check physical continuity, mating orientation and current capacity on the board. Same-numbered duplicate lands are collapsed in this electrical table. `NC` is unconnected, not a spare.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
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

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-connector-detail-01" src="/images/extensions/usb-serial-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for usb-serial-breakout" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-connector-detail-02" src="/images/extensions/usb-serial-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Connector detail 02 for usb-serial-breakout" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-link-detail-01" src="/images/extensions/usb-serial-breakout/guides/reader-link-detail-01.png" title="Link detail 01" alt="Link detail 01 for usb-serial-breakout" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views." width=1440 %}

</details>

### Links, indicators and controls

The table lists the links and indicators. Check the fitted state of each link before cutting or bridging it. Indicator labels describe circuit signals.

| Item | Label | Contact nets |
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

Use this native-contact circuit with all three keys. Four individual leads terminate on actual J33 and J1 contact artwork; a complete USB-B data cable connects the computer to the board connector. Its drawn endpoint identifies the socket opening, not exposed USB pins. Dashed orange locators show the crops on the complete board abstracts. Select JP5 1–2 only; keep 2–3 open, J2 unused and host 5 V disconnected.

**Keep everything unpowered while making these connections.** Read the main drawing, both companion sheets and all three contact keys together.

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-0" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-native-reader-candidate.png" title="Prime, USB serial carrier and computer — unpowered connection" alt="Unpowered connection with four Prime host leads and a complete USB-B cable assembly" caption="NO POWER while wiring. Read both companion sheets and all three contact keys. Four host leads and a USB cable assembly are used; JP5 selects 1–2 only, J2 and host 5 V stay disconnected. The supply domains are separate; check physical mating before power." width=900 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-qualification-1" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-qualifications-1.png" title="USB serial — host leads, supply domains and JP5" alt="USB serial — host leads, supply domains and JP5" caption="Required companion: keep unpowered while wiring. Host 3.3 V and USB power are separate domains; host 5 V and J2 remain disconnected. JP5 1–2 is bridged and 2–3 is open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-qualification-2" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-legibility-corrected/usb-serial-qualifications-2.png" title="USB serial — mating, firmware and power notes" alt="USB serial — mating, firmware and power notes" caption="Required companion: pad coordinates do not show plug mating; check cable continuity before power." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-1" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="Prime GB/J33 — complete contact key" alt="Prime GB/J33 — complete contact key" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Check physical mating and voltage compatibility before power." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-2" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Carrier J1 — complete contact key" alt="Carrier J1 — complete contact key" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Check physical mating and voltage compatibility before power." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-native-3" src="/images/extensions/usb-serial-breakout/guides/native-contact/reader-contact-keys/JP5-numbered-pads.png" title="JP5 — bridge receive-source selection" alt="JP5 — bridge receive-source selection" caption="Four host leads plus a USB-B computer data cable. JP5 1–2 only; host 3.3 V and USB bridge supply remain separate domains. Check physical mating and voltage compatibility before power." width=420 %}

### Enlarged installation contact numbers

These PCB front-coordinate projections are not plug or mating-face views. Filled pads are used; open pads remain unused. Read the keys with the complete circuit above.

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-J33" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/J33-numbered-pads.png" title="J33 installation contacts" alt="Numbered J33 PCB contacts with the UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-J1" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/J1-numbered-pads.png" title="J1 installation contacts" alt="Numbered J1 PCB contacts with the UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="usb-serial-v15-installation-JP5" src="/images/extensions/usb-serial-breakout/guides/installation-contact-keys/JP5-numbered-pads.png" title="JP5 installation contacts" alt="Numbered JP5 PCB contacts with the UART path marked." caption="PCB coordinates, not a mating face. JP5 pads 1–2 are bridged; 2–3 remain open." width=420 %}

<details markdown="1">
<summary>Wider console electrical drawing</summary>

{% include _includes/extension-instruction-diagram.html id="usb-serial-breakout-v15-integral-installation-retained-alternative" src="/images/extensions/usb-serial-breakout/guides/prime-installation-wiring.png" title="USB serial breakout — complete installation" alt="Source-numbered Prime, extension board and peripheral with continuous autorouted electrical paths." caption="Electrical schematic. Numbered symbols preserve electrical identities. Check physical connector mating." width=1950 %}

</details>

The connection uses the onboard FT231XS/TXU0202 interface, a USB-B data cable to the computer and four individual same-numbered leads to Prime GB/J33: J33.1 → J1.1, J33.4 → J1.4, J33.5 → J1.5 and J33.10 → J1.10. Leave host 5 V and all remaining contacts disconnected. Select JP5 pads 1–2 and leave 2–3 open; do not connect competing transmitters. USB supplies the bridge-side domain, while Prime supplies the host-side 3.3 V domain. Host 5 V is distinct from USB VBUS. No external TTL serial module is needed.

The installation above uses **Smoothieboard V2 Prime GB/J33**, with channel 1 TX on contact 4 (PB9), RX on contact 5 (PH14), and ground on contact 10. Check physical mating and voltage compatibility. Read the drawing and both companion sheets together.

1. Keep the computer USB cable, Prime and every other supply disconnected while checking the wiring. USB can energize the bridge even when Prime is off.
2. Check the four host leads against the contact keys: J33.1/.4/.5/.10 to J1.1/.4/.5/.10. Every other host contact remains unused; do not substitute a fully populated U ribbon.
3. Check that JP5 selects 1–2 only, 2–3 is open and J2 is unused. Check the fitted solder state of each link.
4. Do not connect power until you have checked power sequencing, backfeed behaviour and physical mating.

## Smoothieware configuration and use

The FTDI bridge needs the normal computer-side serial driver. Smoothieware sees a UART, not USB packets; the USB-B and Gadgeteer power paths must be kept separate as described above.

### UART console settings

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

On Prime, [channel 1 uses TX PB9 and RX PH14](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135); the [host pin table](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/pins.md#L188-L202) places them on **GB contacts 4 and 5**, with ground on contact 10. Channel 0 instead uses PD8/PB11, identified as GD contacts 4/5. On the Prime, GB is J33: contact 4 reaches PB9 through R74 (100 Ω), and contact 5 reaches PH14 through R75 (100 Ω). These channels are fixed HAL selections, not arbitrary GPIO assignments. Reserve the selected channel and both pins in the complete configuration; `console = false` initializes an auxiliary UART without starting its command-console reader.

After the board-specific supply, direction and cable checks in this guide are complete, use a computer terminal at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not check the adapter's electrical behaviour.

## Sources

- [Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 and the R74/R75 UART paths.

- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/usb-serial-breakout/attempt/versions/v15)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/usb-serial-breakout/design.md)
- [All extension boards](/extension-boards)

