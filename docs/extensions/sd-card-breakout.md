---
layout: default
title: "SD card breakout"
permalink: /extensions/sd-card-breakout
---

# SD card breakout

This board adds one removable microSD socket over SPI. Its intended use is a secondary external-access storage volume. It does not replace the controller's existing SDIO card merely by being connected.

## How it works

The board uses a Hirose DM3AT-SF-PEJM5 socket. J1.6/.7/.8/.9 provide CS/MOSI/MISO/SCK, while J1.3 returns card detect. U1, an SN74LVC1G125, buffers the card’s serial output: card data reaches U1.2 and U1.4 returns it on host MISO. Its active-low output enable, U1.1, follows the card’s active-low CS. This releases the buffer output when that CS is high; it does not establish power-off isolation or hot-removal behavior. J2 is a configurable chain and not an independent SD controller.

## Power, signal direction and limits

The card VDD is fed from 3.3 V through R1, a 1 Ω part; this series resistor does not regulate an applied 5 V supply. The card operates from 3.3 V; do not apply the Gadgeteer 5 V rail to a card signal or VDD. Keep the SPI clock at 10 MHz or below and the cable at 150 mm or shorter.

### Chain chip-select selection

JP6 contacts 1–2 are bridged by default: upstream J1.5 is shifted to downstream J2.6 as the next device’s CS. JP4 similarly forwards J1.4 to J2.5. JP6 contact 3 instead carries this card’s own CS. To share that CS with the downstream device, the 1–2 bridge must be opened before bridging 2–3; never bridge both positions, which would join distinct host signals. Shared CS is inappropriate for two devices that must respond independently. Leave J2 unused until you have planned the peripheral and firmware selection, and check the solder links on your board.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-overview" src="/images/extensions/sd-card-breakout/guides/reader-compact-overview.png" title="microSD SPI board — overview" alt="microSD SPI board — overview on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reference" src="/images/extensions/sd-card-breakout/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for the SD card breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Follow the text for chip-select links, card supply and card-detect contacts." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Check link continuity on your board; footprint defaults do not prove it.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-host-spi-1-5" src="/images/extensions/sd-card-breakout/guides/reader-compact-host-spi-1-5-central-pills.png" title="J1 · Host SPI — host spi 1 5" alt="J1 · Host SPI — host spi 1 5 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-host-spi-6-10" src="/images/extensions/sd-card-breakout/guides/reader-compact-host-spi-6-10-central-pills.png" title="J1 · Host SPI — host spi 6 10" alt="J1 · Host SPI — host spi 6 10 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-chain-spi-1-5" src="/images/extensions/sd-card-breakout/guides/reader-compact-chain-spi-1-5-central-pills.png" title="J2 · Downstream — chain spi 1 5" alt="J2 · Downstream — chain spi 1 5 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-chain-spi-6-10" src="/images/extensions/sd-card-breakout/guides/reader-compact-chain-spi-6-10-central-pills.png" title="J2 · Downstream — chain spi 6 10" alt="J2 · Downstream — chain spi 6 10 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-card-socket-1-5" src="/images/extensions/sd-card-breakout/guides/reader-compact-card-socket-1-5-central-pills.png" title="J3 · Card socket — card socket 1 5" alt="J3 · Card socket — card socket 1 5 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-card-socket-6-10" src="/images/extensions/sd-card-breakout/guides/reader-compact-card-socket-6-10-central-pills.png" title="J3 · Card socket — card socket 6 10" alt="J3 · Card socket — card socket 6 10 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-card-socket-11-11" src="/images/extensions/sd-card-breakout/guides/reader-compact-card-socket-11-11-central-pills.png" title="J3 · Card socket — card socket 11 11" alt="J3 · Card socket — card socket 11 11 on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-select-links" src="/images/extensions/sd-card-breakout/guides/reader-compact-select-links.png" title="Shift / share select — select links" alt="Shift / share select — select links on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-spi-chain-links" src="/images/extensions/sd-card-breakout/guides/reader-compact-spi-chain-links.png" title="SPI chain links — spi chain links" alt="SPI chain links — spi chain links on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-return-buffer" src="/images/extensions/sd-card-breakout/guides/reader-compact-return-buffer.png" title="Card return buffer — return buffer" alt="Card return buffer — return buffer on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-power-detect" src="/images/extensions/sd-card-breakout/guides/reader-compact-power-detect.png" title="Card power / detect — power detect" alt="Card power / detect — power detect on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-select-led" src="/images/extensions/sd-card-breakout/guides/reader-compact-select-led.png" title="Select indicator — select led" alt="Select indicator — select led on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-card-test-pads" src="/images/extensions/sd-card-breakout/guides/reader-compact-card-test-pads-underside-caption.png" title="Card-side test pads — card test pads" alt="Card-side test pads — card test pads on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-return-test-pads" src="/images/extensions/sd-card-breakout/guides/reader-compact-return-test-pads-underside-caption.png" title="Return / rail test pads — return test pads" alt="Return / rail test pads — return test pads on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-mounts" src="/images/extensions/sd-card-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-reader-compact-fiducials" src="/images/extensions/sd-card-breakout/guides/reader-compact-fiducials-underside-caption.png" title="Assembly fiducials — fiducials" alt="Assembly fiducials — fiducials on the SD card breakout" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

### sd-card-breakout — connector contacts

Contact numbering follows the PCB pads. Same-numbered duplicate lands are collapsed in this table. Check mating orientation and current capacity for your parts. `NC` is unconnected, not a spare.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
| --- | --- | --- |
| J1 — GADGETEER S IN | 1 | `+3V3` |
| J1 — GADGETEER S IN | 2 | `+5V` |
| J1 — GADGETEER S IN | 3 | `/SD_CD_HOST` |
| J1 — GADGETEER S IN | 4 | `/GAD_P4` |
| J1 — GADGETEER S IN | 5 | `/GAD_P5` |
| J1 — GADGETEER S IN | 6 | `/SD_CS_N` |
| J1 — GADGETEER S IN | 7 | `/SPI_MOSI` |
| J1 — GADGETEER S IN | 8 | `/SPI_MISO` |
| J1 — GADGETEER S IN | 9 | `/SPI_SCK` |
| J1 — GADGETEER S IN | 10 | `GND` |
| J3 — DM3AT-SF-PEJM5 | 1 | `/SD_DAT2` |
| J3 — DM3AT-SF-PEJM5 | 2 | `/SD_CS_N` |
| J3 — DM3AT-SF-PEJM5 | 3 | `/SPI_MOSI` |
| J3 — DM3AT-SF-PEJM5 | 4 | `/SD_VDD` |
| J3 — DM3AT-SF-PEJM5 | 5 | `/SPI_SCK` |
| J3 — DM3AT-SF-PEJM5 | 6 | `GND` |
| J3 — DM3AT-SF-PEJM5 | 7 | `/SD_DO` |
| J3 — DM3AT-SF-PEJM5 | 8 | `/SD_DAT1` |
| J3 — DM3AT-SF-PEJM5 | 9 | `/SD_DETECT` |
| J3 — DM3AT-SF-PEJM5 | 10 | `GND` |
| J3 — DM3AT-SF-PEJM5 | 11 | `GND` |
| J2 — GADGETEER S CHAIN | 1 | `+3V3` |
| J2 — GADGETEER S CHAIN | 2 | `+5V` |
| J2 — GADGETEER S CHAIN | 5 | `/CHAIN_P5` |
| J2 — GADGETEER S CHAIN | 6 | `/CHAIN_CS_N` |
| J2 — GADGETEER S CHAIN | 7 | `/CHAIN_MOSI` |
| J2 — GADGETEER S CHAIN | 8 | `/CHAIN_MISO` |
| J2 — GADGETEER S CHAIN | 9 | `/CHAIN_SCK` |
| J2 — GADGETEER S CHAIN | 10 | `GND` |
| J2 | 3, 4 | NC |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-connector-detail-01" src="/images/extensions/sd-card-breakout/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for the SD card breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Follow the text for chip-select links, card supply and card-detect contacts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-connector-detail-02" src="/images/extensions/sd-card-breakout/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Connector detail 02 for the SD card breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Follow the text for chip-select links, card supply and card-detect contacts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="sd-card-breakout-v21-link-detail-01" src="/images/extensions/sd-card-breakout/guides/reader-link-detail-01.png" title="Link detail 01" alt="Link detail 01 for the SD card breakout" caption="Component-side reference. Dotted leaders locate parts, not wiring. Follow the text for chip-select links, card supply and card-detect contacts." width=1440 %}

</details>


### Links, indicators and controls

The table identifies the board's links and indicators. Indicator labels describe circuit signals, not physical load or safety ratings.

| Item | Label | Contact nets |
| --- | --- | --- |
| JP9 | CHAIN SCK | 1=/SPI_SCK; 2=/CHAIN_SCK |
| JP7 | CHAIN MOSI | 1=/SPI_MOSI; 2=/CHAIN_MOSI |
| JP4 | CS+2 SHIFT | 1=/GAD_P4; 2=/CHAIN_P5 |
| JP8 | CHAIN MISO | 1=/SPI_MISO; 2=/CHAIN_MISO |
| JP6 | CS SHIFT/SHARED | 1=/GAD_P5; 2=/CHAIN_CS_N; 3=/SD_CS_N |
| JP10 | CUT TO DISABLE D1 | 1=LED_D1_DISABLE; 2=/LED_A |


</details>

## Practical use with Smoothieboard V2 Prime

The example is a panel-access microSD card exposed as an additional SPI volume. Smoothieware does not provide that secondary volume; see [Smoothieware configuration and use](#smoothieware-configuration-and-use).

### GE/J36 cable and inserted card

Use the circuit with all four contact keys. Seven external leads reach the J36 and J1 contacts; dashed orange locators identify the crops on both whole boards. The microSD card inserts into the Hirose J3 socket; its contacts are not loose field wires. The numbered keys show PCB contact positions, not a plug mating face.

{% include _includes/extension-instruction-diagram.html id="sd-native-0" src="/images/extensions/sd-card-breakout/guides/native-contact/sd-native-reader.png" title="Prime and microSD carrier — seven leads" alt="Prime and microSD carrier — seven leads" caption="Seven individual leads; J2 and 5 V unused." width=900 %}

{% include _includes/extension-instruction-diagram.html id="sd-native-1" src="/images/extensions/sd-card-breakout/guides/native-contact/reader-contact-keys/J36-numbered-pads.png" title="Prime GE/J36 — complete contact key" alt="Prime GE/J36 — complete contact key" caption="Seven individual leads; J2 and 5 V unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-native-2" src="/images/extensions/sd-card-breakout/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Carrier J1 — complete contact key" alt="Carrier J1 — complete contact key" caption="Seven individual leads; J2 and 5 V unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-native-3" src="/images/extensions/sd-card-breakout/guides/native-contact/reader-contact-keys/J3-card-numbered-pads.png" title="Hirose J3 — card contacts" alt="Hirose J3 — card contacts" caption="Seven individual leads; J2 and 5 V unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="sd-native-4" src="/images/extensions/sd-card-breakout/guides/native-contact/reader-contact-keys/J3-other-numbered-pads.png" title="Hirose J3 — detect and other contacts" alt="Hirose J3 — detect and other contacts" caption="Seven individual leads; J2 and 5 V unused." width=420 %}

With power removed, verify **seven individual same-numbered leads from Prime2590 GE/J36 to J1: 1, 3, 6, 7, 8, 9 and 10**. Contacts 1/10 supply 3.3 V/ground. Leave host contacts 2 (5 V), 4 (PJ7) and 5 (PJ8) disconnected. Contact 3 is PE8 card detect. Contact 6 is PD15 active-low CS, and 7/8/9 carry SPI1 COPI/CIPO/SCK. Reserve the bus and pins in the whole machine before connecting. The contact numbers do not show a mating face or ribbon-stripe orientation.

Keep the JP6 1–2 bridge and leave J2 unused. Insert a compatible microSD card into J3; do not attach loose wires to card contacts. The exact Hirose DM3AT socket catalog identifies contacts 1–8 as DAT2, CD/DAT3, CMD, VDD, CLK, VSS, DAT0 and DAT1. In SPI use, contacts 2/3/5/7 are CS/COPI/SCK/CIPO; 1 and 8 are pulled high. Contact 4 receives 3.3 V through R1 (1 Ω), and 6 is ground. Check your card's current against the shared 3.3 V supply budget.

The socket detector is open with no card and closes to ground when inserted. J3.9 reaches PE8 through R7 (1 kΩ), with R6 (10 kΩ) pulling it up to 3.3 V; J3.10 is ground. This sets the detect polarity; it does not by itself mount or unmount a card.

1. Identify the socket orientation and microSD-only fit before inserting a card.
2. Allocate one named host SPI bus, CS and card-detect input; J1.3 and .6 serve different functions.
3. Leave J2 unused for the initial setup and check the CS/chain links before sharing the bus.
4. Do not remove a card while mounted/writing; the actual firmware must implement a defined mount/unmount workflow before use.

## Smoothieware configuration and use

The [SmoothieV2 firmware](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src) does not provide a configured second SPI SD volume for this board. On-board SDIO support and generic SPI primitives do not give this accessory storage or filesystem support, so there is no mount command or SPI-volume setting for it.

## Sources

- [Design source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/sd-card-breakout/attempt/versions/v21)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/sd-card-breakout/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

Active components: `U2 TPD4E1U06DCKR`; `U1 SN74LVC1G125DBVR`.

{% include _includes/extension-board-visuals.html slug="sd-card-breakout" %}

</details>
