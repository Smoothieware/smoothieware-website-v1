---
layout: default
title: "Raspberry Pi Zero breakout"
permalink: /extensions/raspberry-pi-zero-breakout
---

# Raspberry Pi Zero breakout

This carrier connects a selected Raspberry Pi Zero-family host to Smoothieboard by UART and a proposed protected 5 V supply. It supports a separate Linux command host; it is not the Prime's direct Pi-integration connector or an additional motion controller.

This guide selects **v17**, the PCB revision named by the existing abstract export. It is a prototype/design candidate; no release, physical operation or current rating is established by a clean CAD check. Older root specifications are design history where they name another revision.

The selected v17 source package retains schematic title-block revision **v12**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1.4 TXH_IN enters the carrier from the controller and reaches Pi RX; J1.5 RXH_OUT returns Pi TX. J2.8/.10 are the Pi UART contacts. An LMR51430 converter and TPS2113A power mux participate in the supply arrangement, with additional protection. The circuit is more than a bare UART ribbon.

## Power, signal direction and limits

J2.2/.4 are PI_5V, .1/.17 Pi 3.3 V reference, and the listed ground contacts are common. J3 is marked external 6.5–24 V input, which is not yet a qualified operating range. Do not apply external voltage to the Pi 5 V pin or assume simultaneous Pi USB, host 5 V and external input is safe. The selected Pi model, worst-case current, antenna/connector clearance and power sequencing remain open.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-overview" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-overview.png" title="Pi Zero UART carrier — overview" alt="Pi Zero UART carrier — overview for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-1-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART and power — host 1 5" alt="J1 · Host UART and power — host 1 5 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-6-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART and power — host 6 10" alt="J1 · Host UART and power — host 6 10 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-1-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-1-5-central-pills.png" title="J2 · Pi physical header pins — pi 1 5" alt="J2 · Pi physical header pins — pi 1 5 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-6-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-6-10-central-pills.png" title="J2 · Pi physical header pins — pi 6 10" alt="J2 · Pi physical header pins — pi 6 10 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-11-15" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-11-15-central-pills.png" title="J2 · Pi physical header pins — pi 11 15" alt="J2 · Pi physical header pins — pi 11 15 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-16-20" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-16-20-central-pills.png" title="J2 · Pi physical header pins — pi 16 20" alt="J2 · Pi physical header pins — pi 16 20 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-21-25" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-21-25-central-pills.png" title="J2 · Pi physical header pins — pi 21 25" alt="J2 · Pi physical header pins — pi 21 25 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-26-30" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-26-30-central-pills.png" title="J2 · Pi physical header pins — pi 26 30" alt="J2 · Pi physical header pins — pi 26 30 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-31-35" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-31-35-central-pills.png" title="J2 · Pi physical header pins — pi 31 35" alt="J2 · Pi physical header pins — pi 31 35 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-36-40" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-36-40-central-pills.png" title="J2 · Pi physical header pins — pi 36 40" alt="J2 · Pi physical header pins — pi 36 40 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-external-1-2" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-external-1-2-central-pills.png" title="J3 · External supply input — external 1 2" alt="J3 · External supply input — external 1 2 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-host-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-host-tx.png" title="UART host to Pi — host tx" alt="UART host to Pi — host tx for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-pi-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-pi-tx.png" title="UART Pi to host — pi tx" alt="UART Pi to host — pi tx for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-mux" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-mux.png" title="Dual-source power selection — mux" alt="Dual-source power selection — mux for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-buck" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-buck.png" title="External buck supply — buck" alt="External buck supply — buck for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-rx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-rx.png" title="Pi receive LED — rx" alt="Pi receive LED — rx for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tx" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tx.png" title="Pi transmit LED — tx" alt="Pi transmit LED — tx for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-source" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-source.png" title="External selected LED — source" alt="External selected LED — source for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-power" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-power.png" title="Pi5V power LED — power" alt="Pi5V power LED — power for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-fault" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-fault.png" title="Input fault warning — fault" alt="Input fault warning — fault for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-ov" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-ov.png" title="Overvoltage warning — ov" alt="Overvoltage warning — ov for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-reverse" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-reverse.png" title="Reverse-input warning — reverse" alt="Reverse-input warning — reverse for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-protection" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-protection.png" title="External input protection — protection" alt="External input protection — protection for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests1" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests1-underside-caption.png" title="Supply and UART test pads — tests1" alt="Supply and UART test pads — tests1 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests5" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests5-underside-caption.png" title="Supply and UART test pads — tests5" alt="Supply and UART test pads — tests5 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-tests9" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-tests9-underside-caption.png" title="Supply and UART test pads — tests9" alt="Supply and UART test pads — tests9 for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="raspberry-pi-zero-breakout-v17-reader-compact-mounts" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-compact-mounts.png" title="Pi and carrier mounts — mounts" alt="Pi and carrier mounts — mounts for raspberry-pi-zero-breakout v17" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated source references above cover the selected revision. Complete installation wiring and review in the actual page viewer remain open.

### rpi-zero-breakout — selected connector contact map

The following is saved PCB pad/net readback. It proves neither physical continuity nor mating orientation/current capacity. Same-numbered duplicate lands are collapsed in this electrical table. Physical connector-population and mating qualification remains open. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Saved function/net |
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

The table identifies this selected board's actual links and indicators. Default population and complete circuit meaning must be reconciled before cut/bridge instructions are accepted. Indicator labels describe observed circuit signals, not physical load or safety qualification.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected label | Contact nets |
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


Selected active components: `UF102 TL431BIDBZR`; `U3 SN74LVC1G17DBVR`; `U4 SN74LVC1G17DBVR`; `UF101 LTC4368IMS-2#PBF`; `U2 TPS2113ADRBR`; `UF103 LMC555CM/NOPB`; `U1 LMR51430XDDCR`. Part identities do not establish an assembled rating.



## Practical use with Smoothieboard V2 Prime

### Native-contact connection reference — incomplete

Four individual host candidates connect J33.1/.4/.5/.10 to J1.1/.4/.5/.10: host 3.3 V, controller TX, controller RX and common ground. J1.2 host 5 V, the complete Pi header J2 and external input J3 remain disconnected. This is not a working serial-host installation. U3 uses Pi 3.3 V and carries controller TX to Pi RX at J2.10; U4 uses host 3.3 V and returns Pi TX from J2.8. The selected Pi model, header orientation, power budget, backfeed protection, sequencing and Linux UART procedure remain unresolved. J2 I2C and SPI positions are unconnected in this carrier. Do not energize from this drawing.

Read the main drawing with every contact key below. Dashed locators identify the enlarged areas on the complete board abstracts. The source PCB views are not plug mating faces; preserve numbered contacts rather than inferring cable orientation.

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-reader-corrected" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-legibility-corrected/pi-zero-native-reader-candidate.png" title="Prime and Pi Zero carrier — open, incomplete v17 contact reference" alt="Prime and Pi Zero carrier with four proposed host contacts; power and Pi fitting remain unqualified" caption="Reader-focused v17 candidate reference. Four proposed host leads only; J1.2, Pi header J2 and external input J3 remain disconnected. Do not power from this drawing. See both qualification sheets and all 24 contact keys; this is not a fitted or complete installation." width=900 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-v17-power-qualification" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-legibility-corrected/pi-zero-qualifications-1.png" title="Pi Zero v17 candidate — proposed leads and disconnected power" alt="Qualification sheet: four proposed host leads, disconnected Pi and external power, and open safety questions" caption="Power and lead qualification: the four host-side candidates are not an operating installation. J1.2, all J2 contacts and J3 are disconnected; do not apply power from this drawing." width=900 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-v17-fit-qualification" src="/images/extensions/raspberry-pi-zero-breakout/guides/reader-legibility-corrected/pi-zero-qualifications-2.png" title="Pi Zero v17 candidate — fit, firmware and support limits" alt="Qualification sheet: Pi model and mating remain open, firmware and Linux workflow unverified" caption="Fit and support remain unverified: no Pi model, mating orientation, Linux workflow or firmware support is established. The keys show PCB coordinates, not a plug face. Contact wolf.arthur@gamil.com if required firmware support is absent." width=900 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-1" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D4-numbered-pads.png" title="D4 — source contact key" alt="D4 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-2" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D5-numbered-pads.png" title="D5 — source contact key" alt="D5 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-3" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D6-numbered-pads.png" title="D6 — source contact key" alt="D6 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-4" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/D7-numbered-pads.png" title="D7 — source contact key" alt="D7 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-5" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF101-numbered-pads.png" title="DF101 — source contact key" alt="DF101 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-6" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF102-numbered-pads.png" title="DF102 — source contact key" alt="DF102 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-7" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF103-numbered-pads.png" title="DF103 — source contact key" alt="DF103 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-8" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF104-numbered-pads.png" title="DF104 — source contact key" alt="DF104 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-9" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF105-numbered-pads.png" title="DF105 — source contact key" alt="DF105 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-10" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/DF106-numbered-pads.png" title="DF106 — source contact key" alt="DF106 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-11" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="J1 — source contact key" alt="J1 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-12" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-1-10-numbered-pads.png" title="J2 1 10 — source contact key" alt="J2 1 10 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-13" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-11-20-numbered-pads.png" title="J2 11 20 — source contact key" alt="J2 11 20 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-14" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-21-30-numbered-pads.png" title="J2 21 30 — source contact key" alt="J2 21 30 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-15" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J2-31-40-numbered-pads.png" title="J2 31 40 — source contact key" alt="J2 31 40 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-16" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J3-numbered-pads.png" title="J3 — source contact key" alt="J3 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-17" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="J33 — source contact key" alt="J33 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-18" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP1-numbered-pads.png" title="JP1 — source contact key" alt="JP1 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-19" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP2-numbered-pads.png" title="JP2 — source contact key" alt="JP2 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-20" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP3-numbered-pads.png" title="JP3 — source contact key" alt="JP3 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-21" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JP4-numbered-pads.png" title="JP4 — source contact key" alt="JP4 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-22" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF101-numbered-pads.png" title="JPF101 — source contact key" alt="JPF101 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-23" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF102-numbered-pads.png" title="JPF102 — source contact key" alt="JPF102 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="pi-zero-native-24" src="/images/extensions/raspberry-pi-zero-breakout/guides/native-contact/reader-contact-keys/JPF103-numbered-pads.png" title="JPF103 — source contact key" alt="JPF103 — source contact key" caption="Selected v17 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

<details markdown="1">
<summary>Earlier unqualified connection study — retained source comparison</summary>

The following study is retained for its source and configuration context. It does not establish a complete installation or replace the native-contact reference above.



The intended example is a Pi Zero running a serial G-code host. Prime already has its own integration options; choose this carrier only for the separately documented mechanical/power use.

**Pending:** the complete autorouted Prime → board → peripheral diagram has not been composed or accepted. A connector contact map or standalone board illustration does not satisfy it. Do not transfer a host allocation between Prime revisions without matching source evidence.

1. Verify the exact Pi model and 40-pin orientation before fitting J2. Most header contacts are deliberately NC.
2. Review the single-source/power-mux arrangement before connecting Pi USB or J3. Do not infer power headroom from a connector shape.
3. Connect a correctly numbered Prime U cable to J1, preserving host TX/RX perspective and grounds. The pinned Prime firmware provides channel 1 on GB contacts 4/5; reconcile the carrier input/output paths and cable orientation before applying this allocation.
4. Configure the Pi UART and V2 command console only after their pinmux, voltage and baud settings are proven; test harmless responses before motion.


</details>

## Smoothieware configuration and use

### Host setup still required

The carrier exposes the Pi-header transmit contact 8 and receive contact 10 through the selected buffers. Before using the conditional Prime console example, identify the exact Pi model and installed Linux image, then use that image’s primary serial setup instructions to enable the connected UART and remove any competing login console. Select its actual device from the installed system; no /dev name or boot-file command is established by this hardware source. Configure the client for 115200/8N1 with no hardware flow control only after those endpoint and electrical checks.


This carrier uses a serial command endpoint rather than a Pi-specific motion driver. The Prime-side console settings below are verified against the pinned upstream source; the complete v17 carrier and Pi Linux setup is still incomplete. Do not connect power or assume plug-and-play operation from the firmware example alone.

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

After the carrier-specific supply, direction and cable checks are complete, use a serial terminal on the Pi at the matching 115200/8N1 settings, with hardware flow control disabled. Send `version` followed by LF (`\n`; CRLF also works, but CR alone is ignored): the [registered shell command](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505) prints build information without requesting motion. A returned version identifies the running build; it does not qualify the adapter's full electrical behavior. Neither the selected source revision nor this example proves which firmware is installed on your controller.

The Prime console implementation exists. The Pi model, Linux serial device, pin multiplexing and disabling any conflicting Linux serial console remain board/system setup work; no guessed device path or OS-specific command is supplied here. A carrier-specific missing function must be identified separately. If required functionality is absent, email **wolf.arthur@gamil.com** with the board revision, selected UART channel and desired use.


## Sources and revision notes

- [Selected P12 Prime PCB source](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/smoothiev2-prime.kicad_pcb) — GB/J33 UART paths through R74/R75.
- [Selected v17 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/raspberry-pi-zero-breakout/attempt/versions/v17)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/specs.md) — retain older revision boundaries.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/design.md)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

**Remaining board-specific issue:** Exact Pi revision, power allocation/backfeed, complete carrier signal-path and cable reconciliation, Linux setup and physical stacking.

<details markdown="1">
<summary>Supplementary board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="raspberry-pi-zero-breakout" %}

These gallery views are supplementary; they are not the two required instructional diagrams. Their captions must preserve any older/different revision or population. Iteration logs, trial results and future upgrade proposals remain engineering history rather than operating instructions.

</details>
