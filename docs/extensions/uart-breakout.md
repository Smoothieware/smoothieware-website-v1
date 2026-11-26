---
layout: default
title: "UART breakout"
permalink: /extensions/uart-breakout
---

# UART breakout

This adapter exposes a Gadgeteer UART on a six-contact FTDI-style TTL serial header. Use it for a compatible serial cable and a configured controller console. It is not RS-232 and is not itself a USB bridge.

## How it works

J1 receives the controller UART. Its transmit signal reaches J3.5 through R1 (100 Ω); an external transmitter on J3.4 reaches the controller receive node through R2 (100 Ω) and D1, with a 10 kΩ pull-up on the controller side. U1 (SN74LVC2G14) observes the UART signals and drives the activity indicators; it does not invert or translate the serial data path. The receive diode and pull-up do not establish compatibility with arbitrary logic voltages.

J2 is an optional chain: JP4 and JP5 are open as delivered, isolating its transmit and receive paths. Connecting another transmitter requires deliberately setting the links and avoiding contention. The other same-numbered signal links are bridged; the supply rails and ground continue to J2.

## Power, signal direction and limits

J3 is **1 ground, 2 unused, 3 optional 5 V feed, 4 input toward controller RX (external TX), 5 output from controller TX (external RX), 6 unused**. Use actual cable contact numbers rather than assuming that its TX/RX labels use the same perspective. The controller logic domain is 3.3 V, not ±RS-232.

JP10 is open as delivered. Closing it connects the host 5 V rail toward J3.3 through D3, with diode drop; D3’s anode is on the host side. Leave JP10 open for an independently powered adapter and never join independent supplies through this path. Verify logic thresholds, power sequencing and the cable pinout before connection.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed on this board.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-overview" src="/images/extensions/uart-breakout/guides/reader-compact-overview.png" title="UART breakout — overview" alt="UART breakout — overview for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reference" src="/images/extensions/uart-breakout/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for UART breakout" caption="Component-side reference. Dotted leaders locate parts, not wires." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-host-1-5" src="/images/extensions/uart-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Controller UART — host 1 5" alt="J1 · Controller UART — host 1 5 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-host-6-10" src="/images/extensions/uart-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Controller UART — host 6 10" alt="J1 · Controller UART — host 6 10 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-chain-1-5" src="/images/extensions/uart-breakout/guides/reader-compact-chain-1-5-central-pills.png" title="J2 · Chain UART — chain 1 5" alt="J2 · Chain UART — chain 1 5 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-chain-6-10" src="/images/extensions/uart-breakout/guides/reader-compact-chain-6-10-central-pills.png" title="J2 · Chain UART — chain 6 10" alt="J2 · Chain UART — chain 6 10 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-external-1-5" src="/images/extensions/uart-breakout/guides/reader-compact-external-1-5-central-pills.png" title="J3 · External serial — external 1 5" alt="J3 · External serial — external 1 5 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-external-6-6" src="/images/extensions/uart-breakout/guides/reader-compact-external-6-6-central-pills.png" title="J3 · External serial — external 6 6" alt="J3 · External serial — external 6 6 for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-transmit" src="/images/extensions/uart-breakout/guides/reader-compact-transmit.png" title="Transmit path — transmit" alt="Transmit path — transmit for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-receive" src="/images/extensions/uart-breakout/guides/reader-compact-receive.png" title="Receive paths — receive" alt="Receive paths — receive for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-chain-uart" src="/images/extensions/uart-breakout/guides/reader-compact-chain-uart.png" title="Optional UART chain — chain uart" alt="Optional UART chain — chain uart for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-chain-other" src="/images/extensions/uart-breakout/guides/reader-compact-chain-other.png" title="Other chain signals — chain other" alt="Other chain signals — chain other for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-header-power" src="/images/extensions/uart-breakout/guides/reader-compact-header-power.png" title="Optional header power — header power" alt="Optional header power — header power for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-activity-observer" src="/images/extensions/uart-breakout/guides/reader-compact-activity-observer.png" title="Activity observer — activity observer" alt="Activity observer — activity observer for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-tx-led" src="/images/extensions/uart-breakout/guides/reader-compact-tx-led.png" title="Transmit activity LED — tx led" alt="Transmit activity LED — tx led for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-rx-led" src="/images/extensions/uart-breakout/guides/reader-compact-rx-led.png" title="Receive activity LED — rx led" alt="Receive activity LED — rx led for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-header-protection" src="/images/extensions/uart-breakout/guides/reader-compact-header-protection.png" title="Header protection — header protection" alt="Header protection — header protection for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-supply-test" src="/images/extensions/uart-breakout/guides/reader-compact-supply-test-underside-caption.png" title="Supply test pads — supply test" alt="Supply test pads — supply test for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-uart-test" src="/images/extensions/uart-breakout/guides/reader-compact-uart-test-underside-caption.png" title="UART test pads — uart test" alt="UART test pads — uart test for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-reader-compact-mounts" src="/images/extensions/uart-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for uart-breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

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
| J2 — GADGETEER U CHAIN | 3 | `/CHAIN_P3` |
| J2 — GADGETEER U CHAIN | 4 | `/CHAIN_TX` |
| J2 — GADGETEER U CHAIN | 5 | `/CHAIN_RX` |
| J2 — GADGETEER U CHAIN | 6 | `/CHAIN_P6` |
| J2 — GADGETEER U CHAIN | 7 | `/CHAIN_P7` |
| J2 — GADGETEER U CHAIN | 8 | `/CHAIN_P8` |
| J2 — GADGETEER U CHAIN | 9 | `/CHAIN_P9` |
| J2 — GADGETEER U CHAIN | 10 | `GND` |
| J1 — GADGETEER U IN | 1 | `+3V3` |
| J1 — GADGETEER U IN | 2 | `+5V` |
| J1 — GADGETEER U IN | 3 | `/GAD_P3` |
| J1 — GADGETEER U IN | 4 | `/UART_TX` |
| J1 — GADGETEER U IN | 5 | `/UART_RX` |
| J1 — GADGETEER U IN | 6 | `/GAD_P6` |
| J1 — GADGETEER U IN | 7 | `/GAD_P7` |
| J1 — GADGETEER U IN | 8 | `/GAD_P8` |
| J1 — GADGETEER U IN | 9 | `/GAD_P9` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J3 — FTDI UART 3V3 | 1 | `GND` |
| J3 — FTDI UART 3V3 | 3 | `/HDR_5V` |
| J3 — FTDI UART 3V3 | 4 | `/HDR_RX` |
| J3 — FTDI UART 3V3 | 5 | `/HDR_TX` |
| J3 | 2, 6 | NC |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-connector-detail-01" src="/images/extensions/uart-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for UART breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Check cable mating and logic compatibility." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-connector-detail-02" src="/images/extensions/uart-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Connector detail 02 for UART breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Check cable mating and logic compatibility." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-link-detail-01" src="/images/extensions/uart-breakout/guides/reader-link-detail-01.png" title="Link detail 01" alt="Link detail 01 for UART breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Check cable mating and logic compatibility." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-link-detail-02" src="/images/extensions/uart-breakout/guides/reader-link-detail-02.png" title="Link detail 02" alt="Link detail 02 for UART breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Check cable mating and logic compatibility." width=1440 %}

</details>

### Links, indicators and controls

The table lists the links and indicators. Check the fitted state of each link before cutting or bridging it. Indicator labels describe circuit signals.

<details markdown="1">
<summary>Links and indicators</summary>

| Item | Label | Contact nets |
| --- | --- | --- |
| JP12 | CUT TO DISABLE LED1 | 1=LED_LED1_DISABLE; 2=/LED_TX_A |
| JP6 | CHAIN P6 | 1=/GAD_P6; 2=/CHAIN_P6 |
| LED2 | RX amber | 1=GND; 2=LED_LED2_DISABLE |
| JP3 | CHAIN P3 | 1=/GAD_P3; 2=/CHAIN_P3 |
| JP10 | HDR 5V OPT | 1=+5V; 2=/HDR_5V_OPT |
| JP9 | CHAIN P9 | 1=/GAD_P9; 2=/CHAIN_P9 |
| JP11 | CUT TO DISABLE LED2 | 1=LED_LED2_DISABLE; 2=/LED_RX_A |
| LED1 | TX amber | 1=GND; 2=LED_LED1_DISABLE |
| JP5 | CHAIN RX | 1=/CHAIN_RX; 2=/CHAIN_RX_G |
| JP7 | CHAIN P7 | 1=/GAD_P7; 2=/CHAIN_P7 |
| JP8 | CHAIN P8 | 1=/GAD_P8; 2=/CHAIN_P8 |
| JP4 | CHAIN TX | 1=/UART_TX; 2=/CHAIN_TX |

</details>

</details>

## Practical use with Smoothieboard V2 Prime

### Complete electrical connection

This plan connects **Prime GB/J33 → UART breakout → jaUART CP2104 bridge → computer USB**. It shows all seven individual conductors and the complete USB cable. The numbered banks are **logical electrical contacts, not plug faces or physical wire-entry locations**. Use the board-coordinate keys to identify the boards; do not infer cable orientation from the left/right positions in this plan.

{% include _includes/extension-instruction-diagram.html id="uart-breakout-v17-electrical-plan" src="/images/extensions/uart-breakout/guides/electrical-plan.png" title="Prime to computer — complete electrical connection" alt="Four individual Prime GB leads to UART J1, three UART J3 leads to jaUART, and a complete USB cable to the computer; logical contact banks, not mating faces." caption="Prime and UART are shown as board illustrations; jaUART is a functional block, not its board layout. Check logic levels, cable mating and power order. Read the complete lead schedule before assembly." width=420 %}

| Connection | From contact | To contact | Purpose |
| --- | --- | --- | --- |
| Host supply | Prime GB/J33.1 | UART J1.1 | Limited 3.3 V domain; check the available current |
| Host transmit | Prime GB/J33.4 | UART J1.4 | PB9 TX into the board's transmit path |
| Host receive | Prime GB/J33.5 | UART J1.5 | Board receive path into PH14 RX |
| Host return | Prime GB/J33.10 | UART J1.10 | Circuit ground |
| Peripheral receive | UART J3.5 | jaUART J3.2 | Board TX output to CP2104 RXD input |
| Peripheral transmit | UART J3.4 | jaUART J3.3 | CP2104 TXD output into the board receive path |
| Peripheral return | UART J3.1 | jaUART J3.4 | Common circuit ground |
| Computer cable | jaUART J5 USB receptacle | Computer USB port | Complete cable matched to the fitted receptacle; no loose USB signal wires |

Use **only the four listed host contacts** with these individual leads; do not substitute a fully populated ribbon. Leave Prime GB/J33.2/.3/.6/.7/.8/.9, UART J1.2/.3/.6/.7/.8/.9, all of UART J2, UART J3.2/.3/.6, and jaUART J3.1 disconnected. In particular, neither host 5 V nor jaUART's VDD contact is a power lead in this wiring. The bridge receives USB power; the Prime supply remains the controller's own own supply arrangement.

Disconnect Prime power and computer USB before identifying or assembling any lead. Preserve **JP4, JP5 and JP10 open**. Confirm the other link states and the fitted board's continuity against the reference above. The 100 Ω resistors, receive diode/pull-up and activity circuitry are already board circuitry; they are not additional field parts to wire around.

Before applying power, establish the actual connector population and mating orientation, verify both UART logic thresholds and the host's 3.3 V budget, and check unequal power-order/backfeed behavior. Once those checks pass, use the console setup and non-motion `version` check below; a version reply does not check the electrical margins.

The jaUART contact assignments come from [Ccecil's source](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a). 

<details markdown="1">
<summary>Host-side contacts and complete numbered keys</summary>

This board-coordinate view shows the four host leads only, with J2, J3 and host 5 V disconnected. Use it to inspect the host contacts, not as the complete peripheral wiring.

The complete keys show all contacts, including unused rows, optional links and activity indicators. These are PCB-coordinate views, not a plug face or assembly drawing.

{% include _includes/extension-instruction-diagram.html id="uart-native-0" src="/images/extensions/uart-breakout/guides/native-contact/uart-native-reader.png" title="UART breakout — four host leads; no peripheral" alt="UART breakout — four host leads; no peripheral" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=900 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-1" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — complete board-coordinate contact key" alt="J1 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-2" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/J2-numbered-pads.png" title="J2 — complete board-coordinate contact key" alt="J2 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-3" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/J3-numbered-pads.png" title="J3 — complete board-coordinate contact key" alt="J3 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-4" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — complete board-coordinate contact key" alt="J33 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-5" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP10-numbered-pads.png" title="JP10 — complete board-coordinate contact key" alt="JP10 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-6" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP11-numbered-pads.png" title="JP11 — complete board-coordinate contact key" alt="JP11 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-7" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP12-numbered-pads.png" title="JP12 — complete board-coordinate contact key" alt="JP12 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-8" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP3-numbered-pads.png" title="JP3 — complete board-coordinate contact key" alt="JP3 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-9" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP4-numbered-pads.png" title="JP4 — complete board-coordinate contact key" alt="JP4 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-10" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP5-numbered-pads.png" title="JP5 — complete board-coordinate contact key" alt="JP5 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-11" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP6-numbered-pads.png" title="JP6 — complete board-coordinate contact key" alt="JP6 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-12" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP7-numbered-pads.png" title="JP7 — complete board-coordinate contact key" alt="JP7 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-13" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP8-numbered-pads.png" title="JP8 — complete board-coordinate contact key" alt="JP8 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-14" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/JP9-numbered-pads.png" title="JP9 — complete board-coordinate contact key" alt="JP9 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-15" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/LED1-numbered-pads.png" title="LED1 — complete board-coordinate contact key" alt="LED1 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

{% include _includes/extension-instruction-diagram.html id="uart-native-16" src="/images/extensions/uart-breakout/guides/native-contact/reader-contact-keys/LED2-numbered-pads.png" title="LED2 — complete board-coordinate contact key" alt="LED2 — complete board-coordinate contact key" caption="Host-side view. J2/J3 and host 5 V unused; JP4/JP5/JP10 open. Outline pads indicate no field lead, not the absence of a jumper bridge." width=420 %}

</details>

GB/J33.4 PB9 is controller TX; J33.5 PH14 is controller RX. The serial paths use R1/R2 (100 Ω), BAT54WS D1 and the R3 10 kΩ receive pull-up. U1 monitors activity and drives indicators; it is not serial data inversion or translation. Preserve JP4, JP5 and JP10 open; the other JP3–JP12 links are bridged as delivered. These defaults are not an instruction to change fitted links without continuity checks.

J3 contact order is 1 GND, 2 NC, 3 optional 5 V, 4 cable transmitter into the board, 5 board transmitter toward the cable, 6 NC. A jaUART CP2104 bridge is the peripheral shown above; check its I/O voltage, supply ordering and cable. Do not connect J3.3 to an independently powered adapter or infer RS-232 voltage compatibility. The UART-console settings below cover the host software.

## Smoothieware configuration and use

This adapter adds no UART protocol: Smoothieware communicates through the selected electrical interface. The board-specific cable, power and level checks still apply.

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

After the board-specific supply, direction and cable checks in this guide are complete, use a computer terminal at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not check the adapter&#39;s electrical behaviour.

## Sources

- [Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 and the R74/R75 UART paths.

- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/uart-breakout/attempt/versions/v17)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/uart-breakout/design.md)
- [All extension boards](/extension-boards)

