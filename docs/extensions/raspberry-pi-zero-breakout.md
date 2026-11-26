---
layout: default
title: "Raspberry Pi Zero breakout"
permalink: /extensions/raspberry-pi-zero-breakout
---

# Raspberry Pi Zero breakout

This carrier connects a selected Raspberry Pi Zero-family host to Smoothieboard by UART and a protected 5 V supply. It supports a separate Linux command host; it is not the Prime's direct Pi-integration connector or an additional motion controller.

## How it works

J1.4 TXH_IN enters the carrier from the controller and reaches Pi RX; J1.5 RXH_OUT returns Pi TX. J2.8/.10 are the Pi UART contacts. An LMR51430 converter and TPS2113A power mux participate in the supply arrangement, with additional protection. The circuit is more than a bare UART ribbon.

## Power, signal direction and limits

J2.2/.4 are PI_5V, .1/.17 Pi 3.3 V reference, and the listed ground contacts are common. J3 is marked external 6.5–24 V input. Do not apply external voltage to the Pi 5 V pin or assume simultaneous Pi USB, host 5 V and external input is safe. Check your Pi model, worst-case current, antenna/connector clearance and power sequencing.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-overview" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-overview.png" title="Pi Zero UART carrier — overview" alt="Pi Zero UART carrier — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-1-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART and power — host 1 5" alt="J1 · Host UART and power — host 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-6-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART and power — host 6 10" alt="J1 · Host UART and power — host 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-1-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-1-5-central-pills.png" title="J2 · Pi physical header pins — pi 1 5" alt="J2 · Pi physical header pins — pi 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-6-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-6-10-central-pills.png" title="J2 · Pi physical header pins — pi 6 10" alt="J2 · Pi physical header pins — pi 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-11-15" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-11-15-central-pills.png" title="J2 · Pi physical header pins — pi 11 15" alt="J2 · Pi physical header pins — pi 11 15" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-16-20" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-16-20-central-pills.png" title="J2 · Pi physical header pins — pi 16 20" alt="J2 · Pi physical header pins — pi 16 20" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-21-25" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-21-25-central-pills.png" title="J2 · Pi physical header pins — pi 21 25" alt="J2 · Pi physical header pins — pi 21 25" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-26-30" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-26-30-central-pills.png" title="J2 · Pi physical header pins — pi 26 30" alt="J2 · Pi physical header pins — pi 26 30" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-31-35" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-31-35-central-pills.png" title="J2 · Pi physical header pins — pi 31 35" alt="J2 · Pi physical header pins — pi 31 35" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-36-40" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-36-40-central-pills.png" title="J2 · Pi physical header pins — pi 36 40" alt="J2 · Pi physical header pins — pi 36 40" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-external-1-2" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-external-1-2-central-pills.png" title="J3 · External supply input — external 1 2" alt="J3 · External supply input — external 1 2" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-tx.png" title="UART host to Pi — host tx" alt="UART host to Pi — host tx" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-tx.png" title="UART Pi to host — pi tx" alt="UART Pi to host — pi tx" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-mux" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-mux.png" title="Dual-source power selection — mux" alt="Dual-source power selection — mux" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-buck" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-buck.png" title="External buck supply — buck" alt="External buck supply — buck" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-rx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-rx.png" title="Pi receive LED — rx" alt="Pi receive LED — rx" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tx.png" title="Pi transmit LED — tx" alt="Pi transmit LED — tx" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-source" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-source.png" title="External selected LED — source" alt="External selected LED — source" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-power" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-power.png" title="Pi5V power LED — power" alt="Pi5V power LED — power" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-fault" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-fault.png" title="Input fault warning — fault" alt="Input fault warning — fault" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-ov" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-ov.png" title="Overvoltage warning — ov" alt="Overvoltage warning — ov" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-reverse" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-reverse.png" title="Reverse-input warning — reverse" alt="Reverse-input warning — reverse" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-protection" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-protection.png" title="External input protection — protection" alt="External input protection — protection" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests1" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests1-underside-caption.png" title="Supply and UART test pads — tests1" alt="Supply and UART test pads — tests1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests5-underside-caption.png" title="Supply and UART test pads — tests5" alt="Supply and UART test pads — tests5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests9" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests9-underside-caption.png" title="Supply and UART test pads — tests9" alt="Supply and UART test pads — tests9" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-mounts" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-mounts.png" title="Pi and carrier mounts — mounts" alt="Pi and carrier mounts — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

### Connector contact map

Contact numbers are PCB pad numbers. Check physical continuity, mating orientation and current capacity before wiring. Same-numbered duplicate lands are listed once. `NC` means unconnected.

<details markdown="1">
<summary>Connector contact table</summary>

<div class="extension-contact-table" role="region" aria-label="Connector contacts; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
| --- | --- | --- |
| J3 — EXT 6.5-24V IN | 1 | `/VEXT_RAW` |
| J3 — EXT 6.5-24V IN | 2 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 1 | `/+3V3_PI` |
| J2 — RPI ZERO 2x20 HDR | 2 | `/PI_5V` |
| J2 — RPI ZERO 2x20 HDR | 4 | `/PI_5V` |
| J2 — RPI ZERO 2x20 HDR | 6 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 8 | `/PI_TXD` |
| J2 — RPI ZERO 2x20 HDR | 9 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 10 | `/PI_RXD` |
| J2 — RPI ZERO 2x20 HDR | 14 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 17 | `/+3V3_PI` |
| J2 — RPI ZERO 2x20 HDR | 20 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 25 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 30 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 34 | `GND` |
| J2 — RPI ZERO 2x20 HDR | 39 | `GND` |
| J2 | 3, 5, 7, 11, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 35, 36, 37, 38, 40 | NC |
| J1 — GADGETEER U IN | 1 | `/+3V3_HOST` |
| J1 — GADGETEER U IN | 2 | `/+5V_HOST` |
| J1 — GADGETEER U IN | 4 | `/TXH_IN` |
| J1 — GADGETEER U IN | 5 | `/RXH_OUT` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J1 | 3, 6, 7, 8, 9 | NC |

</div>

</details>

### Links, indicators and controls

The table lists the board's links and indicators. Check the link population before cutting or bridging. Indicator labels describe circuit signals only.

<details markdown="1">
<summary>Links and indicators table</summary>

| Item | Label | Contact nets |
| --- | --- | --- |
| D6 | AMBER PI RXD | 1=/PI_RXD; 2=LED_D6_DISABLE |
| JP1 | CUT TO DISABLE D6 | 1=LED_D6_DISABLE; 2=/LED_RX_A |
| JPF102 | CUT OVERVOLTAGE | 1=RPI_OV_LED_FEED; 2=RPI_OV_LED_A |
| JP3 | CUT TO DISABLE D5 | 1=LED_D5_DISABLE; 2=/LED_SRC_A |
| DF106 | LTST-C170KRKT REVERSE BLINK | 1=RPI_REV_OUT; 2=RPI_REV_LED_A |
| DF103 | LTST-C170KRKT OVERVOLTAGE | 1=RPI_OV_WARN_K; 2=RPI_OV_LED_A |
| JP4 | CUT TO DISABLE D4 | 1=LED_D4_DISABLE; 2=/LED_PWR_A |
| JPF103 | CUT REVERSE | 1=RPI_REV_LED_FEED; 2=RPI_REV_LED_A |
| D7 | AMBER PI TXD | 1=/RXH_BUF_OUT; 2=LED_D7_DISABLE |
| D5 | GREEN EXT SRC | 1=/STAT; 2=LED_D5_DISABLE |
| D4 | GREEN 5V POWER | 1=GND; 2=LED_D4_DISABLE |
| DF102 | LTST-C170KRKT FAULT | 1=RPI_EF_FAULT; 2=RPI_FAULT_LED_A |
| JP2 | CUT TO DISABLE D7 | 1=LED_D7_DISABLE; 2=/LED_TX_A |
| JPF101 | CUT FAULT | 1=RPI_FAULT_LED_FEED; 2=RPI_FAULT_LED_A |

</details>

Active components: `UF102 TL431BIDBZR`; `U3 SN74LVC1G17DBVR`; `U4 SN74LVC1G17DBVR`; `UF101 LTC4368IMS-2#PBF`; `U2 TPS2113ADRBR`; `UF103 LMC555CM/NOPB`; `U1 LMR51430XDDCR`.

## Practical use with Smoothieboard V2 Prime

### Host connection reference

Do not power the installation from this drawing: it shows only the four host leads J33.1/.4/.5/.10 to J1.1/.4/.5/.10 (host 3.3 V, controller TX, controller RX and common ground). J1.2 host 5 V, the Pi header J2 and external input J3 are not connected in it. U3 uses Pi 3.3 V and carries controller TX to Pi RX at J2.10; U4 uses host 3.3 V and returns Pi TX from J2.8. Check the Pi model, header orientation, power budget, backfeed protection, sequencing and Linux UART setup before powering. J2 I2C and SPI positions are unconnected in this carrier.

Read the main drawing with every contact key below. Dashed locators identify the enlarged areas on the complete board abstracts. The PCB views are not plug mating faces; preserve numbered contacts rather than inferring cable orientation.

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-reader-corrected" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-legibility-corrected/pi-zero-native-reader-candidate.png" title="Prime and Pi Zero carrier host leads" alt="Prime and Pi Zero carrier with four host leads" caption="Four host leads only; J1.2, Pi header J2 and external input J3 are not connected. Do not power from this drawing. Use it with all 24 contact keys." width=900 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-1" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D4-numbered-pads.png" title="D4 — contact key" alt="D4 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-2" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D5-numbered-pads.png" title="D5 — contact key" alt="D5 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-3" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D6-numbered-pads.png" title="D6 — contact key" alt="D6 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-4" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D7-numbered-pads.png" title="D7 — contact key" alt="D7 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF101-numbered-pads.png" title="DF101 — contact key" alt="DF101 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-6" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF102-numbered-pads.png" title="DF102 — contact key" alt="DF102 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-7" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF103-numbered-pads.png" title="DF103 — contact key" alt="DF103 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-8" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF104-numbered-pads.png" title="DF104 — contact key" alt="DF104 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-9" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF105-numbered-pads.png" title="DF105 — contact key" alt="DF105 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF106-numbered-pads.png" title="DF106 — contact key" alt="DF106 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-11" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — contact key" alt="J1 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-12" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-1-10-numbered-pads.png" title="J2 1 10 — contact key" alt="J2 1 10 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-13" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-11-20-numbered-pads.png" title="J2 11 20 — contact key" alt="J2 11 20 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-14" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-21-30-numbered-pads.png" title="J2 21 30 — contact key" alt="J2 21 30 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-15" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-31-40-numbered-pads.png" title="J2 31 40 — contact key" alt="J2 31 40 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-16" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J3-numbered-pads.png" title="J3 — contact key" alt="J3 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-17" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — contact key" alt="J33 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-18" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP1-numbered-pads.png" title="JP1 — contact key" alt="JP1 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-19" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP2-numbered-pads.png" title="JP2 — contact key" alt="JP2 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-20" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP3-numbered-pads.png" title="JP3 — contact key" alt="JP3 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-21" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP4-numbered-pads.png" title="JP4 — contact key" alt="JP4 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-22" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF101-numbered-pads.png" title="JPF101 — contact key" alt="JPF101 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-23" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF102-numbered-pads.png" title="JPF102 — contact key" alt="JPF102 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-24" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF103-numbered-pads.png" title="JPF103 — contact key" alt="JPF103 — contact key" caption="Contact key. Use all keys with the main reference." width=420 %}

### Serial host connection

The example use is a Pi Zero running a serial G-code host.

1. Check the exact Pi model and 40-pin orientation before fitting J2. Most header contacts are not connected.
2. Review the single-source/power-mux arrangement before connecting Pi USB or J3. Do not infer power headroom from a connector shape.
3. Connect a correctly numbered Prime U cable to J1, preserving host TX/RX perspective and grounds. Prime firmware provides channel 1 on GB contacts 4/5; check the carrier input/output paths and cable orientation before using it.
4. Configure the Pi UART and V2 command console only after checking their pinmux, voltage and baud settings; test harmless responses before motion.

## Smoothieware configuration and use

### Host setup

The carrier exposes the Pi-header transmit contact 8 and receive contact 10 through the selected buffers. Before using the Prime console example, identify the exact Pi model and installed Linux image, then use that image’s primary serial setup instructions to enable the connected UART and remove any competing login console. Select its actual device from the installed system. Configure the client for 115200/8N1 with no hardware flow control only after those endpoint and electrical checks.

This carrier uses a serial command endpoint rather than a Pi-specific motion driver. The Prime-side console settings are below; the Pi Linux setup depends on your system. The firmware example alone does not make the installation ready to power.

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

After the carrier-specific supply, direction and cable checks are complete, use a serial terminal on the Pi at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not check the adapter's electrical behavior.

The Pi model, Linux serial device, pin multiplexing and disabling any conflicting Linux serial console are part of your board and system setup.

## Sources

- [Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 UART paths through R74/R75.
- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/raspberry-pi-zero-breakout/attempt/versions/v17)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

{% include _includes/extension-board-visuals.html slug="raspberry-pi-zero-breakout" %}

</details>
