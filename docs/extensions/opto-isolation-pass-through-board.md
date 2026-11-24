---
layout: default
title: "Opto-Isolation pass-through board"
permalink: /extensions/opto-isolation-pass-through-board
---

# Opto-Isolation pass-through board

The selected board is a fixed-direction isolated SPI/control interface, despite its historical generic opto-isolation name. ISOW7741 and ISO7730 transfer six host-to-peripheral signals and one peripheral-to-host MISO signal; an integrated isolated-power path supplies the far side. It is not a reversible seven-GPIO isolator and cannot transparently carry arbitrary I2C or UART wiring.

## Revision and availability

This guide selects **v20**, matching the revision selected by the retained abstract-diagram inventory. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

The selected v20 source package retains schematic title-block revision **v12**. The package number does not rename the schematic or establish a released hardware revision.

## Interfaces, power and operating limits

J1 host contacts 3/4/5/6/7/9 drive far-side IO3/IO4/IO5/CS/MOSI/SCK; contact 8 returns MISO. J2 has corresponding isolated-domain signals and ground GND_ISO. JP1 feeds host 5 V; JP2 and JP3 expose isolated5 V/3.3 V at J2. JP4 selects isolated logic voltage and JP5 selects CS-gated or always-enabled MISO. Host GND and isolated GND are separate; joining them defeats the intended galvanic separation. Logic voltage, isolated power capacity and propagation delay require selected-revision qualification.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-overview" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-overview.svg" title="Isolated SPI/GPIO interface — overview" alt="Isolated SPI/GPIO interface — overview for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-host-1-5" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-host-1-5-central-pills.svg" title="J1 · Host side — host 1 5" alt="J1 · Host side — host 1 5 for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-host-6-10" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-host-6-10-central-pills.svg" title="J1 · Host side — host 6 10" alt="J1 · Host side — host 6 10 for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-isolated-1-5" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-isolated-1-5-central-pills.svg" title="J2 · Isolated side — isolated 1 5" alt="J2 · Isolated side — isolated 1 5 for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-isolated-6-10" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-isolated-6-10-central-pills.svg" title="J2 · Isolated side — isolated 6 10" alt="J2 · Isolated side — isolated 6 10 for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-spi" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-spi.svg" title="Isolated SPI channels — spi" alt="Isolated SPI channels — spi for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-gpio" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-gpio.svg" title="Isolated GPIO channels — gpio" alt="Isolated GPIO channels — gpio for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-converter-feed" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-converter-feed.svg" title="Host converter feed — converter feed" alt="Host converter feed — converter feed for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-isolated-supply" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-isolated-supply.svg" title="Isolated supply rails — isolated supply" alt="Isolated supply rails — isolated supply for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-logic-select" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-logic-select.svg" title="Logic voltage selector — logic select" alt="Logic voltage selector — logic select for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-output-links" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-output-links.svg" title="Isolated supply outputs — output links" alt="Isolated supply outputs — output links for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-miso-enable" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-miso-enable.svg" title="Return-data enable selector — miso enable" alt="Return-data enable selector — miso enable for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-host-led" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-host-led.svg" title="Host power indicator — host led" alt="Host power indicator — host led for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-iso-led" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-iso-led-underside-caption.svg" title="Isolated power indicator — iso led" alt="Isolated power indicator — iso led for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-protection" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-protection.svg" title="Isolated signal protection — protection" alt="Isolated signal protection — protection for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-host-tests" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-host-tests-underside-caption.svg" title="Host supply/fault tests — host tests" alt="Host supply/fault tests — host tests for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-iso-tests" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-iso-tests-underside-caption.svg" title="Isolated supply tests — iso tests" alt="Isolated supply tests — iso tests for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-host-spi-tests" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-host-spi-tests.svg" title="Host SPI tests — host spi tests" alt="Host SPI tests — host spi tests for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-iso-spi-tests" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-iso-spi-tests.svg" title="Isolated SPI tests — iso spi tests" alt="Isolated SPI tests — iso spi tests for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-isolation-pass-through-board-v20-reader-compact-mounts" src="/images/extensions/opto-isolation-pass-through-board/guides/reader-compact-mounts.svg" title="Mounts and fiducials — mounts" alt="Mounts and fiducials — mounts for opto-isolation-pass-through-board v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

**Reference status:** the selected-revision annotated sheets above have passed source review. Read the overview and all focused sheets together. Practical wiring and actual desktop/narrow viewer acceptance are separate checks; use the connection section for the current installation limits.

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| opto-isolation / J1 | S HOST IN | Connector | 1: /+3V3_HOST; 2: /+5V_HOST; 3: /H_IO3_IN; 4: /H_IO4_IN; 5: /H_IO5_IN; 6: /H_CS_IN; 7: /H_MOSI_IN; 8: /H_MISO_OUT; 9: /H_SCK_IN; 10: /GND_HOST |
| opto-isolation / J2 | S ISOLATED OUT | Connector | 1: /ISO_3V3_OUT; 2: /ISO_5V_OUT; 3: /I_IO3_OUT; 4: /I_IO4_OUT; 5: /I_IO5_OUT; 6: /I_CS_OUT; 7: /I_MOSI_OUT; 8: /I_MISO_IN; 9: /I_SCK_OUT; 10: /GND_ISO |
| opto-isolation / D1 | LED green HOST 3V3 POWER | Indicator | 1: /GND_HOST; 2: LED_D1_DISABLE |
| opto-isolation / D2 | LED green ISO 3V3 POWER | Indicator | 1: /GND_ISO; 2: LED_D2_DISABLE |
| opto-isolation / TP1 | 5V HOST | Observation only | 1: /+5V_HOST |
| opto-isolation / TP10 | GND ISO | Observation only | 1: /GND_ISO |
| opto-isolation / TP11 | CS H | Observation only | 1: /H_CS_IN |
| opto-isolation / TP12 | MOSI H | Observation only | 1: /H_MOSI_IN |
| opto-isolation / TP13 | MISO H | Observation only | 1: /H_MISO_OUT |
| opto-isolation / TP14 | SCK H | Observation only | 1: /H_SCK_IN |
| opto-isolation / TP15 | CS I | Observation only | 1: /I_CS_OUT |
| opto-isolation / TP16 | MOSI I | Observation only | 1: /I_MOSI_OUT |
| opto-isolation / TP17 | MISO I | Observation only | 1: /I_MISO_IN |
| opto-isolation / TP18 | SCK I | Observation only | 1: /I_SCK_OUT |
| opto-isolation / TP2 | 3V3 HOST | Observation only | 1: /+3V3_HOST |
| opto-isolation / TP3 | FLT N | Observation only | 1: /ISOW_FLT_N |
| opto-isolation / TP4 | GND HOST | Observation only | 1: /GND_HOST |
| opto-isolation / TP5 | GND HOST | Observation only | 1: /GND_HOST |
| opto-isolation / TP6 | 5V ISO | Observation only | 1: /ISO_5V |
| opto-isolation / TP7 | 3V3 ISO | Observation only | 1: /ISO_3V3 |
| opto-isolation / TP8 | VISOIN | Observation only | 1: /VISOIN |
| opto-isolation / TP9 | GND ISO | Observation only | 1: /GND_ISO |
| opto-isolation / JP1 | 5V FEED | Service link/selector | 1: /+5V_HOST; 2: /+5V_HOST_F |
| opto-isolation / JP2 | 5V OUT | Service link/selector | 1: /ISO_5V; 2: /ISO_5V_OUT |
| opto-isolation / JP3 | 3V3 OUT | Service link/selector | 1: /ISO_3V3; 2: /ISO_3V3_OUT |
| opto-isolation / JP4 | LOGIC 3V3 / 5V | Service link/selector | 1: /ISO_3V3; 2: /VISOIN; 3: /ISO_5V |
| opto-isolation / JP5 | MISO CS-GATED / ALWAYS | Service link/selector | 1: /H_CS_IN; 2: /MISO_OE_N; 3: /GND_HOST |
| opto-isolation / JP6 | CUT TO DISABLE D1 | Service link/selector | 1: LED_D1_DISABLE; 2: /LED_HOST_A |
| opto-isolation / JP7 | CUT TO DISABLE D2 | Service link/selector | 1: LED_D2_DISABLE; 2: /LED_ISO_A |

</div>





</details>

## Practical connection to Smoothieboard V2 Prime

### Native-contact connection reference — incomplete

Three individual host candidates connect GF/J37.3 PB1 to J1.3, J37.6 PG0 to J1.6, and J37.10 ground to J1.10. All supplies and J2 contacts remain disconnected. This is not a powered installation. Six channels carry host signals outward; MISO returns through the isolator and U6. Keep host and isolated ground domains separate. Retain source JP1–3 bridges, JP4 at 1–2 for isolated 3.3 V logic, and JP5 at 1–2 for chip-select-gated return; verify actual assembly. Converter startup, available current, temperature, reset/boot chip-select states, peripheral timing and assembled isolation remain unresolved. The conditional meter and firmware study below does not close these gaps. Do not energize from this drawing.

Read the main drawing with every contact key below. Dashed locators identify the enlarged areas on the complete board abstracts. The source PCB views are not plug mating faces; preserve numbered contacts rather than inferring cable orientation.

{% include _includes/extension-instruction-diagram.html id="opto-native-0" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-legibility-corrected/opto-native-reader.svg" title="Prime and extension — incomplete native-contact reference" alt="Prime and extension — incomplete native-contact reference" caption="Three unpowered host leads only. All supplies and J2 remain open; host ground and isolated ground stay separate. Isolation and complete peripheral wiring remain unqualified. Enlarged warnings preserve the source contacts and routes." width=900 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-1" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/D1-numbered-pads.svg" title="D1 — source contact key" alt="D1 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-2" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/D2-numbered-pads.svg" title="D2 — source contact key" alt="D2 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-3" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/J1-numbered-pads.svg" title="J1 — source contact key" alt="J1 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-4" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/J2-numbered-pads.svg" title="J2 — source contact key" alt="J2 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-5" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/J37-numbered-pads.svg" title="J37 — source contact key" alt="J37 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-6" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP1-numbered-pads.svg" title="JP1 — source contact key" alt="JP1 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-7" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP2-numbered-pads.svg" title="JP2 — source contact key" alt="JP2 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-8" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP3-numbered-pads.svg" title="JP3 — source contact key" alt="JP3 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-9" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP4-numbered-pads.svg" title="JP4 — source contact key" alt="JP4 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-10" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP5-numbered-pads.svg" title="JP5 — source contact key" alt="JP5 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-11" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP6-numbered-pads.svg" title="JP6 — source contact key" alt="JP6 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-12" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/JP7-numbered-pads.svg" title="JP7 — source contact key" alt="JP7 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-13" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP1-numbered-pads.svg" title="TP1 — source contact key" alt="TP1 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-14" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP10-numbered-pads.svg" title="TP10 — source contact key" alt="TP10 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-15" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP11-numbered-pads.svg" title="TP11 — source contact key" alt="TP11 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-16" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP12-numbered-pads.svg" title="TP12 — source contact key" alt="TP12 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-17" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP13-numbered-pads.svg" title="TP13 — source contact key" alt="TP13 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-18" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP14-numbered-pads.svg" title="TP14 — source contact key" alt="TP14 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-19" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP15-numbered-pads.svg" title="TP15 — source contact key" alt="TP15 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-20" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP16-numbered-pads.svg" title="TP16 — source contact key" alt="TP16 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-21" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP17-numbered-pads.svg" title="TP17 — source contact key" alt="TP17 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-22" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP18-numbered-pads.svg" title="TP18 — source contact key" alt="TP18 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-23" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP2-numbered-pads.svg" title="TP2 — source contact key" alt="TP2 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-24" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP3-numbered-pads.svg" title="TP3 — source contact key" alt="TP3 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-25" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP4-numbered-pads.svg" title="TP4 — source contact key" alt="TP4 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-26" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP5-numbered-pads.svg" title="TP5 — source contact key" alt="TP5 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-27" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP6-numbered-pads.svg" title="TP6 — source contact key" alt="TP6 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-28" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP7-numbered-pads.svg" title="TP7 — source contact key" alt="TP7 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-29" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP8-numbered-pads.svg" title="TP8 — source contact key" alt="TP8 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-native-30" src="/images/extensions/opto-isolation-pass-through-board/guides/native-contact/reader-contact-keys/TP9-numbered-pads.svg" title="TP9 — source contact key" alt="TP9 — source contact key" caption="Selected v20 source contacts; incomplete host candidate with peripheral and supply connections unresolved. Use all keys with the main reference." width=420 %}

<details markdown="1">
<summary>Earlier unqualified connection study — retained source comparison</summary>

The following study is retained for its source and configuration context. It does not establish a complete installation or replace the native-contact reference above.



### Isolated digital-output meter example

Use five individual host leads: **GF/J37.1/.2/.3/.6/.10 → J1.1/.2/.3/.6/.10**, respectively. Leave the other host and J1 contacts unconnected. Connect **J2.3 (isolated IO3) → Fluke 117 V**, and **J2.10 (isolated ground) → COM**. Select dedicated **DC volts**, with nominal input impedance greater than 10 MΩ; do not use Auto-V LoZ (approximately 3 kΩ) or the current terminal. The [Fluke 114/115/117 manual](https://assets.fluke.com/manuals/114_____umeng0100.pdf), PN 2572573, revision 1 (February 2007), printed pages 6, 11 and 23, documents those terminals, mode and impedance. **Keep host ground and isolated COM separate.** No other isolated load, external supply or peripheral is connected.

**Unpowered source plan:** do not energize until the stated supply, sequencing and fitted-connection checks are resolved.

{% include _includes/extension-instruction-diagram.html id="opto-v20-seven-leads" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-individual-leads.svg" title="Isolated IO3 — seven-lead meter plan" alt="Five Prime host leads to J1 and two isolated J2 leads to a Fluke 117; host and isolated grounds are separate" caption="PG0 HIGH disables the U6 return. JP4 and JP5 bridge 1–2; retain the documented JP1/JP2/JP3 source bridges. No external supply or output load. P11 Prime art uses checked P12 J37 contacts; mating, converter startup and rail budget remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-v20-key-J37" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-J37-numbered-pads.svg" title="J37 — numbered contact key" alt="J37 source contact numbering for the isolated IO3 meter example" caption="Source PCB projection, not a plug mating face. Filled contacts identify selected leads or the specified bridge. Read with the complete plan." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-v20-key-J1" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-J1-numbered-pads.svg" title="J1 — numbered contact key" alt="J1 source contact numbering for the isolated IO3 meter example" caption="Source PCB projection, not a plug mating face. Filled contacts identify selected leads or the specified bridge. Read with the complete plan." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-v20-key-J2" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-J2-numbered-pads.svg" title="J2 — numbered contact key" alt="J2 source contact numbering for the isolated IO3 meter example" caption="Source PCB projection, not a plug mating face. Filled contacts identify selected leads or the specified bridge. Read with the complete plan." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-v20-key-JP4" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-JP4-numbered-pads.svg" title="JP4 — numbered contact key" alt="JP4 source contact numbering for the isolated IO3 meter example" caption="Source PCB projection, not a plug mating face. Filled contacts identify selected leads or the specified bridge. Read with the complete plan." width=420 %}

{% include _includes/extension-instruction-diagram.html id="opto-v20-key-JP5" src="/images/extensions/opto-isolation-pass-through-board/guides/compact-JP5-numbered-pads.svg" title="JP5 — numbered contact key" alt="JP5 source contact numbering for the isolated IO3 meter example" caption="Source PCB projection, not a plug mating face. Filled contacts identify selected leads or the specified bridge. Read with the complete plan." width=420 %}

<details markdown="1">
<summary>Earlier full-header plan — supplementary</summary>

{% include _includes/extension-instruction-diagram.html id="opto-v20-prime-installation" src="/images/extensions/opto-isolation-pass-through-board/guides/prime-installation-wiring.svg" title="Prime to isolated IO3 meter — wiring candidate" alt="Twelve continuous conductors connecting Prime GF J37 to the isolated board and its IO3 output to a separate-ground voltmeter" caption="Selected v20 board and retained Prime P11 artwork; the selected GF/J37 contacts match P12. Physical cable mating, installed configuration and isolation qualification remain open." width=3300 %}

</details>

With power removed, verify JP1/JP2/JP3 source bridges, JP4 at 1–2 (isolated 3.3 V logic) and JP5 at 1–2 (chip-select-gated return). Verify numbered continuity instead of inferring cable orientation from the drawing. The host header is unshrouded. Host PB1/J1.3 drives U2.3; U2.14 supplies isolated IO3/J2.3. The host 5 V rail feeds the onboard isolated converter and isolated regulator; no load-current allowance is established here.

Before powered testing, reserve PB1 as a digital output and **hold PG0/J1.6 HIGH to disable the U6 MISO return buffer**. PG1/J1.8 is input-only; leave the other unused host GPIO as inputs. The conditional meter configuration below establishes those logical pin states in the reviewed source; installed commissioning remains unverified. Do not treat the diagram as a complete runnable SPI application.

J2 power contacts and remaining signal contacts stay unused. The unused forward isolator inputs have source-documented default-HIGH outputs. Check that USB, instruments or chassis do not create an incidental ground bridge. The meter example does not qualify insulation, transient behaviour or a safety function.


</details>

## Smoothieware behaviour and commissioning

### Conditional digital-meter configuration

This example is checked against [SmoothieV2 Switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp) and its matching Endstops and Pin implementations. It is a meter test, not an SPI application. Use it only when all seven GF/J37 GPIO and M42.20/M43.20/M44.20 are free and the existing machine already has a registered X actuator. Do not add motion hardware for this test. Merge the subsections into existing configuration sections, preserving machine homing and limits.

```ini
[switch]
# Host-side U6 return disable: only a HIGH command is registered.
opto_a_return_disable.enable = true
opto_a_return_disable.output_pin = PG0
opto_a_return_disable.output_type = digital
opto_a_return_disable.input_on_command = M44
opto_a_return_disable.subcode = 20
opto_a_return_disable.startup_state = true
opto_a_return_disable.halt_set_to = true
opto_a_return_disable.ignore_on_halt = false

# Isolated IO3 meter stimulus; no servo, SPI device or load.
opto_b_meter.enable = true
opto_b_meter.output_pin = PB1
opto_b_meter.output_type = digital
opto_b_meter.input_on_command = M42
opto_b_meter.input_off_command = M43
opto_b_meter.subcode = 20
opto_b_meter.startup_state = false
opto_b_meter.halt_set_to = false
opto_b_meter.ignore_on_halt = false

[endstops]
# Diagnostic input holders only; existing X actuator required.
opto_input_io4.enable = true
opto_input_io4.pin = PJ4-
opto_input_io4.axis = X
opto_input_io4.homing_direction = none
opto_input_io4.limit_enable = false

opto_input_io5.enable = true
opto_input_io5.pin = PA4-
opto_input_io5.axis = X
opto_input_io5.homing_direction = none
opto_input_io5.limit_enable = false

opto_input_mosi.enable = true
opto_input_mosi.pin = PJ3-
opto_input_mosi.axis = X
opto_input_mosi.homing_direction = none
opto_input_mosi.limit_enable = false

opto_input_miso.enable = true
opto_input_miso.pin = PG1-
opto_input_miso.axis = X
opto_input_miso.homing_direction = none
opto_input_miso.limit_enable = false

opto_input_sck.enable = true
opto_input_sck.pin = PJ2-
opto_input_sck.axis = X
opto_input_sck.homing_direction = none
opto_input_sck.limit_enable = false
```

The five Endstops entries hold unused GPIO as inputs without pull resistors (`-`). `homing_direction = none` and `limit_enable = false` exclude them from homing and limit monitoring; their X designation satisfies the parser requirement. Confirm all seven entries configure successfully without allocation or illegal-pin errors before connecting hardware. The return-disable Switch has only an on command: this implementation emits an expected missing-off-command warning but accepts that entry. Other configuration failures must not be ignored.

After successful configuration, send `M44.20` to reassert PG0 HIGH, then `M43.20` for PB1 LOW. Measure J2.3 against J2.10 only. Send `M42.20` for HIGH and `M43.20` to finish LOW. Do not issue motion or homing commands. `M119` can list the input-holder pins; this does not qualify their electrical behaviour.

The source preloads digital output states before enabling output mode and applies the stated software-halt levels. It does **not** guarantee PG0 HIGH during reset, boot, power loss, before module loading or after partial configuration. Check actual startup behaviour and installed pin ownership before physical testing. No target build, installed run or meter measurement has been performed for this example.

An SPI peripheral still requires its own matching driver, actual bus/CS allocation and timing review. The MAX31855 implementation does not establish support for arbitrary devices. If required device support is absent, email **wolf.arthur@gamil.com**.

## What remains unresolved

The selected-source voltage-link defaults and meter wiring are documented above. Exact forward/return timing, isolated power budget, installed meter commissioning, practical SPI peripheral allocation and physical insulation remain open. Reference sheets and a meter wiring candidate are present; diagram acceptance, link availability and rendered desktop/narrow usability remain pending.

## Sources and revision notes

- [Selected v20 opto-isolation PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/attempt/versions/v20/opto-isolation.kicad_pcb)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/opto-isolation-pass-through-board/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="opto-isolation-pass-through-board" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
