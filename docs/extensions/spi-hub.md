---
layout: default
title: "SPI Hub"
permalink: /extensions/spi-hub
---

# SPI Hub

This hub connects one host SPI bus to four independently selected peripheral sockets. It is intended for compatible devices that need separate CS signals and controlled bus loading. It does not turn one driver instance into four automatically addressable sensors.

## Prime connection at a glance

The illustrated circuit uses **one output, OUT2**, one **MAX31856 converter** and an **Omega 5TC-TT-K-30-36 type-K probe**. It shows all fourteen external leads, including supply and return. The board drawings identify the source of each enlarged contact view; the orange dotted lines are crop locators, not conductors.

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-instructional-wiring" src="/images/extensions/spi-hub/guides/instructional-wiring.png" title="Prime → SPI Hub OUT2 → MAX31856 → type-K probe" alt="Fourteen continuous leads connect Prime J36, hub J1 and OUT2 J3, MAX31856 J1 and probe J3, with whole-board orientation locators" caption="Prime P11 artwork with the P12 GE/J36 allocation. Only 3.3 V is connected. SmoothieV2 has no MAX31856 driver; check mating, supply budget and timing, and read the numbered wiring table before assembly." width=900 %}

**Software support:** SmoothieV2 has no driver for the illustrated MAX31856. Do not apply the separate MAX31855 configuration to it. This diagram shows the connections; temperatures cannot be read from the MAX31856 without a driver.

## How it works

Four SN74CB3Q3125 switch groups isolate downstream signal paths. Host J1 contacts 3/4/5/6 are CS1/CS2/CS3/CS4; contacts 7/8/9 are shared MOSI/MISO/SCK. Every downstream port presents its selected CS on contact 6. This is different from an ordinary S ribbon where host contact 6 is the only chip select.

There is no hardware one-hot decoder: the host must keep all other CS lines HIGH and select at most one port at a time. Selecting two outputs can connect two peripheral MISO drivers together. Each branch has a selectable clock-idle bias and a chip-select indicator; an LED is not a bus-health or isolation test.

Typical uses are several compatible thermocouple converters or other SPI sensors sharing one controller bus. Each peripheral still needs its own matching driver and CS allocation. This is not an I²C address expander, a voltage translator, or an automatic four-sensor controller.

## Power, signal direction and limits

All four outputs share the source rails. Contacts 3–5 on the downstream connectors are NC. Power allocation is combined across all peripherals and cables. Stay within 10 MHz and 150 mm, SPI modes 0–3. Check unselected MISO isolation, reset deselection, powered-off leakage and device compatibility for your peripherals.

## Board reference

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-instructional-reference" src="/images/extensions/spi-hub/guides/instructional-reference.png" title="SPI Hub — connectors, branch selects and links" alt="Component-side SPI Hub drawing with J1 host, J2 through J5 outputs, complete contact functions, clock-bias jumpers and LED-disable links" caption="Complete board view, component side and unmirrored. Grey lines locate connectors; use the numbered detail keys for exact contacts. JP1–JP4 clock bias is per output. Check shared rails and link settings before use." width=1440 %}

The board has one 10-contact host connector and four 10-contact outputs, four SN74CB3Q3125PWR signal-switch groups and TPD4E1U06 protection at the five socket entries. Its outline is 88 × 52 mm. The board has no separate regulator or per-output supply limit: 3.3 V and 5 V pass through as shared rails, and unused 5 V must remain disconnected in the illustrated circuit.

<details markdown="1">
<summary>Complete contact keys, controls and reference sheets</summary>

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-overview" src="/images/extensions/spi-hub/guides/reader-compact-overview.png" title="Four-branch SPI hub — overview" alt="Four-branch SPI hub — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reference" src="/images/extensions/spi-hub/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference" caption="Component-side reference. Dotted leaders locate parts, not wiring." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Default solder-link footprints do not show whether a link is closed on your board.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-host-1-5" src="/images/extensions/spi-hub/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host SPI — host 1 5" alt="J1 · Host SPI — host 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-host-6-10" src="/images/extensions/spi-hub/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host SPI — host 6 10" alt="J1 · Host SPI — host 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-1-1-5" src="/images/extensions/spi-hub/guides/reader-compact-branch-1-1-5-central-pills.png" title="J2 · Branch 1 — branch 1 1 5" alt="J2 · Branch 1 — branch 1 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-1-6-10" src="/images/extensions/spi-hub/guides/reader-compact-branch-1-6-10-central-pills.png" title="J2 · Branch 1 — branch 1 6 10" alt="J2 · Branch 1 — branch 1 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-2-1-5" src="/images/extensions/spi-hub/guides/reader-compact-branch-2-1-5-central-pills.png" title="J3 · Branch 2 — branch 2 1 5" alt="J3 · Branch 2 — branch 2 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-2-6-10" src="/images/extensions/spi-hub/guides/reader-compact-branch-2-6-10-central-pills.png" title="J3 · Branch 2 — branch 2 6 10" alt="J3 · Branch 2 — branch 2 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-3-1-5" src="/images/extensions/spi-hub/guides/reader-compact-branch-3-1-5-central-pills.png" title="J4 · Branch 3 — branch 3 1 5" alt="J4 · Branch 3 — branch 3 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-3-6-10" src="/images/extensions/spi-hub/guides/reader-compact-branch-3-6-10-central-pills.png" title="J4 · Branch 3 — branch 3 6 10" alt="J4 · Branch 3 — branch 3 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-4-1-5" src="/images/extensions/spi-hub/guides/reader-compact-branch-4-1-5-central-pills.png" title="J5 · Branch 4 — branch 4 1 5" alt="J5 · Branch 4 — branch 4 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-4-6-10" src="/images/extensions/spi-hub/guides/reader-compact-branch-4-6-10-central-pills.png" title="J5 · Branch 4 — branch 4 6 10" alt="J5 · Branch 4 — branch 4 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-1-switch" src="/images/extensions/spi-hub/guides/reader-compact-branch-1-switch.png" title="Branch 1 signal switching — branch 1 switch" alt="Branch 1 signal switching — branch 1 switch" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-1-clock" src="/images/extensions/spi-hub/guides/reader-compact-branch-1-clock.png" title="Branch 1 clock idle — branch 1 clock" alt="Branch 1 clock idle — branch 1 clock" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-1-indicator" src="/images/extensions/spi-hub/guides/reader-compact-branch-1-indicator.png" title="Branch 1 select indicator — branch 1 indicator" alt="Branch 1 select indicator — branch 1 indicator" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-2-switch" src="/images/extensions/spi-hub/guides/reader-compact-branch-2-switch.png" title="Branch 2 signal switching — branch 2 switch" alt="Branch 2 signal switching — branch 2 switch" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-2-clock" src="/images/extensions/spi-hub/guides/reader-compact-branch-2-clock.png" title="Branch 2 clock idle — branch 2 clock" alt="Branch 2 clock idle — branch 2 clock" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-2-indicator" src="/images/extensions/spi-hub/guides/reader-compact-branch-2-indicator.png" title="Branch 2 select indicator — branch 2 indicator" alt="Branch 2 select indicator — branch 2 indicator" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-3-switch" src="/images/extensions/spi-hub/guides/reader-compact-branch-3-switch.png" title="Branch 3 signal switching — branch 3 switch" alt="Branch 3 signal switching — branch 3 switch" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-3-clock" src="/images/extensions/spi-hub/guides/reader-compact-branch-3-clock.png" title="Branch 3 clock idle — branch 3 clock" alt="Branch 3 clock idle — branch 3 clock" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-3-indicator" src="/images/extensions/spi-hub/guides/reader-compact-branch-3-indicator.png" title="Branch 3 select indicator — branch 3 indicator" alt="Branch 3 select indicator — branch 3 indicator" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-4-switch" src="/images/extensions/spi-hub/guides/reader-compact-branch-4-switch.png" title="Branch 4 signal switching — branch 4 switch" alt="Branch 4 signal switching — branch 4 switch" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-4-clock" src="/images/extensions/spi-hub/guides/reader-compact-branch-4-clock.png" title="Branch 4 clock idle — branch 4 clock" alt="Branch 4 clock idle — branch 4 clock" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-4-indicator" src="/images/extensions/spi-hub/guides/reader-compact-branch-4-indicator.png" title="Branch 4 select indicator — branch 4 indicator" alt="Branch 4 select indicator — branch 4 indicator" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-branch-protection" src="/images/extensions/spi-hub/guides/reader-compact-branch-protection.png" title="Branch signal protectors — branch protection" alt="Branch signal protectors — branch protection" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-host-protection" src="/images/extensions/spi-hub/guides/reader-compact-host-protection.png" title="Common SPI protection — host protection" alt="Common SPI protection — host protection" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-mounts" src="/images/extensions/spi-hub/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-reader-compact-cable-ties" src="/images/extensions/spi-hub/guides/reader-compact-cable-ties.png" title="Cable tie features — cable ties" alt="Cable tie features — cable ties" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

These detail sheets supplement the two primary diagrams.

### Connector contact map

Contacts are listed by PCB pad and net. Check mating orientation before connecting. Duplicate lands with the same number are shown once. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
| --- | --- | --- |
| J3 — GADGETEER S OUT2 | 1 | `+3V3` |
| J3 — GADGETEER S OUT2 | 2 | `+5V` |
| J3 — GADGETEER S OUT2 | 6 | `/CS2` |
| J3 — GADGETEER S OUT2 | 7 | `/OUT2_MOSI` |
| J3 — GADGETEER S OUT2 | 8 | `/OUT2_MISO` |
| J3 — GADGETEER S OUT2 | 9 | `/OUT2_SCK` |
| J3 — GADGETEER S OUT2 | 10 | `GND` |
| J3 | 3, 4, 5 | NC |
| J5 — GADGETEER S OUT4 | 1 | `+3V3` |
| J5 — GADGETEER S OUT4 | 2 | `+5V` |
| J5 — GADGETEER S OUT4 | 6 | `/CS4` |
| J5 — GADGETEER S OUT4 | 7 | `/OUT4_MOSI` |
| J5 — GADGETEER S OUT4 | 8 | `/OUT4_MISO` |
| J5 — GADGETEER S OUT4 | 9 | `/OUT4_SCK` |
| J5 — GADGETEER S OUT4 | 10 | `GND` |
| J5 | 3, 4, 5 | NC |
| J2 — GADGETEER S OUT1 | 1 | `+3V3` |
| J2 — GADGETEER S OUT1 | 2 | `+5V` |
| J2 — GADGETEER S OUT1 | 6 | `/CS1` |
| J2 — GADGETEER S OUT1 | 7 | `/OUT1_MOSI` |
| J2 — GADGETEER S OUT1 | 8 | `/OUT1_MISO` |
| J2 — GADGETEER S OUT1 | 9 | `/OUT1_SCK` |
| J2 — GADGETEER S OUT1 | 10 | `GND` |
| J2 | 3, 4, 5 | NC |
| J4 — GADGETEER S OUT3 | 1 | `+3V3` |
| J4 — GADGETEER S OUT3 | 2 | `+5V` |
| J4 — GADGETEER S OUT3 | 6 | `/CS3` |
| J4 — GADGETEER S OUT3 | 7 | `/OUT3_MOSI` |
| J4 — GADGETEER S OUT3 | 8 | `/OUT3_MISO` |
| J4 — GADGETEER S OUT3 | 9 | `/OUT3_SCK` |
| J4 — GADGETEER S OUT3 | 10 | `GND` |
| J4 | 3, 4, 5 | NC |
| J1 — GADGETEER S IN | 1 | `+3V3` |
| J1 — GADGETEER S IN | 2 | `+5V` |
| J1 — GADGETEER S IN | 3 | `/CS1` |
| J1 — GADGETEER S IN | 4 | `/CS2` |
| J1 — GADGETEER S IN | 5 | `/CS3` |
| J1 — GADGETEER S IN | 6 | `/CS4` |
| J1 — GADGETEER S IN | 7 | `/SPI_MOSI` |
| J1 — GADGETEER S IN | 8 | `/SPI_MISO` |
| J1 — GADGETEER S IN | 9 | `/SPI_SCK` |
| J1 — GADGETEER S IN | 10 | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-connector-detail-01" src="/images/extensions/spi-hub/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01" caption="Component-side reference. Dotted leaders locate parts, not wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-connector-detail-02" src="/images/extensions/spi-hub/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Connector detail 02" caption="Component-side reference. Dotted leaders locate parts, not wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-connector-detail-03" src="/images/extensions/spi-hub/guides/reader-connector-detail-03.png" title="Connector detail 03" alt="Connector detail 03" caption="Component-side reference. Dotted leaders locate parts, not wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-v14-link-detail-01" src="/images/extensions/spi-hub/guides/reader-link-detail-01.png" title="Link detail 01" alt="Link detail 01" caption="Component-side reference. Dotted leaders locate parts, not wiring." width=1440 %}

</details>

### Links, indicators and controls

The table lists the board's links and indicators. Check a link's default state on your board before cutting or bridging it. Indicator labels describe circuit signals, not the state of a connected load.

<details markdown="1">
<summary>Link inventory</summary>

| Item | Label | Contact nets |
| --- | --- | --- |
| JP6 | CUT TO DISABLE D1 | 1=LED_D1_DISABLE; 2=+3V3 |
| D2 | CS2 LED green | 1=/LED2_K; 2=LED_D2_DISABLE |
| JP4 | SCK4 IDLE L/H | 1=GND; 2=/SCKBIAS4; 3=+3V3 |
| D1 | CS1 LED green | 1=/LED1_K; 2=LED_D1_DISABLE |
| JP1 | SCK1 IDLE L/H | 1=GND; 2=/SCKBIAS1; 3=+3V3 |
| JP7 | CUT TO DISABLE D3 | 1=LED_D3_DISABLE; 2=+3V3 |
| D3 | CS3 LED green | 1=/LED3_K; 2=LED_D3_DISABLE |
| JP3 | SCK3 IDLE L/H | 1=GND; 2=/SCKBIAS3; 3=+3V3 |
| JP5 | CUT TO DISABLE D2 | 1=LED_D2_DISABLE; 2=+3V3 |
| D4 | CS4 LED green | 1=/LED4_K; 2=LED_D4_DISABLE |
| JP8 | CUT TO DISABLE D4 | 1=LED_D4_DISABLE; 2=+3V3 |
| JP2 | SCK2 IDLE L/H | 1=GND; 2=/SCKBIAS2; 3=+3V3 |

</details>

Active components: `U8 TPD4E1U06 OUT4`; `U2 SN74CB3Q3125`; `U1 SN74CB3Q3125`; `U4 SN74CB3Q3125`; `U6 TPD4E1U06 OUT2`; `U3 SN74CB3Q3125`; `U9 TPD4E1U06 IN`; `U5 TPD4E1U06 OUT1`; `U7 TPD4E1U06 OUT3`.

</details>

</details>

## Practical use with Smoothieboard V2 Prime

The illustrated example is one MAX31856 converter on OUT2. A later multi-device expansion needs a separate, compatible firmware instance and CS allocation for every converter; see the planning checklist below.

This connection uses **six individual host leads**, six individual sensor leads and two thermocouple leads. Prime GE/J36 contacts **1/4/7/8/9/10** connect to hub J1 with the same numbers. Hub OUT2/J3 contacts **1/6/7/8/9/10** connect to the MAX31856 sensor J1 with those same numbers. The hub maps **Prime J36.4 (PJ7) → J1.4 → J3.6 → sensor J1.6** internally; its signal switches are functional blocks, not direct copper aliases. Leave 5 V contact 2 and all other ports/unused contacts disconnected.

Use the named **Omega 5TC-TT-K-30-36 ANSI type-K probe**: its stripped red negative lead goes to sensor J3.1 and yellow positive lead to J3.2. These colours are specific to the named ANSI lead, not every thermocouple. Verify actual markings and polarity. Keep hub JP2's bridge **1–2, idle LOW**; a MAX31856 driver must use CPHA=1 (mode 1 for CPOL=0), as required by the converter datasheet. This is not the separate supported MAX31855 mode-0 example below. Check the host supply budget before powering.

### Fourteen-lead wiring schedule

Use individual, continuity-checked leads; this is **not an ordinary ten-way straight-through ribbon**. `MOSI` is host output/peripheral input (COPI); `MISO` is peripheral output/host input (CIPO). Pin numbers are connector contacts, not wire colours. The Prime allocation is GE/J36: CS2 is PJ7; the SPI1 bus uses PB5/PA6/PA5. Reserve the whole bus against incompatible users.

| Lead | From | To | Purpose |
| --- | --- | --- | --- |
| H1 | Prime J36.1 | Hub J1.1 | Limited 3.3 V supply |
| H2 | Prime J36.4 / PJ7 | Hub J1.4 / CS2 | Select OUT2, active LOW |
| H3 | Prime J36.7 | Hub J1.7 | SPI1 MOSI / COPI |
| H4 | Prime J36.8 | Hub J1.8 | SPI1 MISO / CIPO |
| H5 | Prime J36.9 | Hub J1.9 | SPI1 SCK |
| H6 | Prime J36.10 | Hub J1.10 | Common ground return |
| P1 | Hub J3.1 / OUT2 | Converter J1.1 | 3.3 V supply |
| P2 | Hub J3.6 / OUT2 | Converter J1.6 | Local CS2, routed from hub J1.4 |
| P3 | Hub J3.7 / OUT2 | Converter J1.7 | MOSI / COPI |
| P4 | Hub J3.8 / OUT2 | Converter J1.8 | MISO / CIPO |
| P5 | Hub J3.9 / OUT2 | Converter J1.9 | Switched SCK |
| P6 | Hub J3.10 / OUT2 | Converter J1.10 | Common ground return |
| T− | Omega probe red negative lead | Converter J3.1 / T− | Type-K negative conductor |
| T+ | Omega probe yellow positive lead | Converter J3.2 / T+ | Type-K positive conductor |

Hub J1.2/3/5/6 and converter/hub-output contact 2 remain disconnected in this example; output contacts 3–5 are NC. OUT1, OUT3 and OUT4 remain unused. Inside the hub, only the CS is a direct connector net: MOSI, MISO and SCK traverse the branch switch. Do not interpret the gap between the input and output connector crops as an instruction to add bypass wires.

### Check before commissioning

1. With power removed, identify the actual connector pin-1 marks and check each scheduled lead independently. Preserve the front-coordinate numbering when the OUT2 detail is rotated. Check for shorts between supply, ground and neighbouring contacts; verify all unused contacts stay isolated.
2. Check your Prime board, the hub and converter, combined 3.3 V budget and the hub JP2 1–2 idle-LOW link. Do not bridge 1–2 and 2–3 together. Verify reset deselection and unused-port pull-ups before connecting peripherals.
3. Keep the probe electrically isolated in an ambient test arrangement. Check probe polarity against the named lead's markings; ANSI red/yellow does not describe every type-K cable. Do not connect this circuit to a heater or machine.
4. Resolve the MAX31856 driver and mode/timing requirements before attempting acquisition. Then check CS, SCK, MISO isolation and reset/power order with suitable instrumentation; only after valid readings are established should the intended application be assessed. The MAX31855 alternative below is a different circuit.

<details markdown="1">
<summary>Enlarged contact wiring and all six orientation keys</summary>

Use this circuit with all six contact keys. Fourteen external leads reach their contacts: six from Prime to the hub, six from OUT2 to the converter, and two named thermocouple leads. The OUT2 main details are rotated 180°; complete keys retain the original front-coordinate numbering. Orange dashed locators identify the crops on all three whole-board drawings. The Prime artwork is P11 with the P12 GE/J36 allocation. **JP2 means the hub’s clock-idle jumper**, not a converter jumper. The hub’s internal signal switches and CS2 mapping remain as described above; the drawing does not replace them with direct copper aliases.

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-0" src="/images/extensions/spi-hub/guides/native-contact/spi-hub-native-reader.png" title="Prime, SPI hub OUT2, MAX31856 and type-K probe — fourteen contact leads" alt="Prime, SPI hub OUT2, MAX31856 and type-K probe — fourteen contact leads" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=900 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-1" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/host-J36-numbered-pads.png" title="Prime GE/J36 — complete contact key" alt="Prime GE/J36 — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-2" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/hub-J1-numbered-pads.png" title="Hub J1 input — complete contact key" alt="Hub J1 input — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-3" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/hub-J3-numbered-pads.png" title="Hub J3 OUT2 — complete contact key" alt="Hub J3 OUT2 — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-4" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/hub-JP2-numbered-pads.png" title="Hub JP2 idle-LOW 1–2 — complete contact key" alt="Hub JP2 idle-LOW 1–2 — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-5" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/sensor-J1-numbered-pads.png" title="MAX31856 J1 — complete contact key" alt="MAX31856 J1 — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

{% include _includes/extension-instruction-diagram.html id="spi-hub-native-6" src="/images/extensions/spi-hub/guides/native-contact/reader-contact-keys/sensor-J3-numbered-pads.png" title="MAX31856 J3 probe — complete contact key" alt="MAX31856 J3 probe — complete contact key" caption="Hub, converter and Omega 5TC-TT-K-30-36: red negative, yellow positive. Hub JP2 1–2; 3.3 V only, all 5 V and unused sockets disconnected. Keep the probe isolated at ambient; check rail budget and mating. SmoothieV2 has no MAX31856 driver." width=420 %}

</details>

**Firmware limitation:** SmoothieV2 has no driver for the MAX31856 converter. The MAX31855 settings below are for a different, supported converter and must not be applied to this MAX31856 example. Hub JP2 selects the OUT2 clock-idle bias; set it to match the converter driver before use.

### Planning a multi-device expansion

The following checklist describes a multi-device allocation, separate from the single-converter example above. It does not provide a MAX31856 driver.

1. Assign four distinct CS GPIOs to J1.3–.6 and one proven host SPI bus to .7–.9. Do not connect an ordinary single-CS driver configuration and expect four channels.
2. Connect each peripheral to its named output J2–J5 using correctly numbered cables; each uses output contact 6 for its own CS.
3. Budget supply current and total bus/cable loading for all attached boards.
4. Verify no device drives MISO while unselected and only one CS is asserted per transaction before reading real sensors.

## Smoothieware configuration and use

### Interface and application limits

The MAX31855 path requests mode 0 at 1 MHz and asserts chip select immediately before its transfer call. There is no driver setting here for a slower clock or added chip-select setup delay. A hub configuration cannot substitute for the selected sensor’s CS-to-clock and diode/edge requirements. Before using the alternative below, check the first clock after selection, inactive-port population and all logic margins before relying on the temperature readings.

The hub has no addressable configuration protocol. Firmware communicates with each attached peripheral using its own chip-select line; there is no `spi_hub` setting that makes unsupported converter chips work.

SmoothieV2 has a multiple-sensor path for **MAX31855** converters. Its [MAX31855 driver](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/max31855.cpp#L9-L69) reads `spi_channel`, `spi_select_pin` and `readings_per_second`. All MAX31855 instances must use the **same SPI channel**, with a separate chip-select GPIO per sensor. The driver initializes that channel for 16-bit transfers, SPI mode 0 and 1 MHz; those are implementation choices, not configurable hub settings. The shared channel also needs to be compatible with any other configured consumer.

A sensor instance belongs in `[temperature control]` with its own name, `enable = true` and `sensor = max31855`. For a temperature monitor that must not drive a heater, explicitly set that instance's `heater_pin = nc`: the [temperature-control implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L113-L195) otherwise gives some standard names such as `hotend` real default heater pins. Custom instance names and distinct `designator` values help identify separate readings. The normal [M105 response path](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L317-L329) reports temperatures without requesting motion. In this implementation an invalid/infinite reading is printed as `-100`; that sentinel is not evidence of a measured −100 °C probe temperature.

The single-port alternative below sets the host allocation and clock-bias choice; check signal margins, links, rail budget and bus timing on your hardware. MAX31856 and MAX31865 are different devices and cannot be enabled by naming this driver.

### Separate MAX31855 alternative

This is a different peripheral from the **MAX31856 shown in the wiring diagram above**. It applies only to the MAX31855KASA sensor board. Its CS and SCK diode paths still need LOW-voltage and edge-time checks; MAX31855 requires at least 100 ns from CS assertion to the first clock, while this driver supplies no adjustable lead delay. Also check hub switching and first-edge timing.

For this alternative, a partial numbered cable connects P12 Prime2590 GE/J36 contacts **1, 4, 8, 9 and 10** to the same hub J1 numbers: limited 3.3 V, PJ7/CS2, SPI1 CIPO, SPI1 SCK and ground. Leave contacts 2/3/5/6/7 disconnected. Reserve SPI1 PB5/PA6/PA5 even though this sensor does not use COPI. Leave hub OUT1/3/4 unused and verify their fitted 10 kΩ CS pull-ups. Confirm OUT2 **JP2 1–2** for idle-LOW mode 0; open 2–3 before selecting 1–2.

Hub OUT2/J3 contacts **1/6/8/9/10** connect respectively to sensor P2 **1/6/8/9/10** (3.3 V/CS/SO/SCK/ground). Thermocouple minus goes to sensor P1.1/T− and plus to P1.2/T+. Verify the actual connector orientation, K-type sensor, shared supply budget and diode logic margins before power; the current MAX31856 diagram does not depict this alternative.

Merge these uniquely named settings into the existing single `[temperature control]` section only after those electrical checks are done. Reserve tool ID 251 and designator TC; do not combine incompatible SPI1 users. `heater_pin = nc` supplies no heater output.

```ini
[temperature control]
hub2_temperature.enable = true
hub2_temperature.sensor = max31855
hub2_temperature.spi_channel = 0
hub2_temperature.spi_select_pin = PJ7
hub2_temperature.readings_per_second = 20
hub2_temperature.heater_pin = nc
hub2_temperature.designator = TC
hub2_temperature.tool_id = 251
```

The driver requests SPI channel 0 (SPI1), mode 0 and 1 MHz. `readings_per_second` sets polling frequency, not SPI clock. `M105` requests temperature reports including TC; Plain `M305` reports sensor configuration and raw diagnostics across configured temperature controllers; it is not a TC-only selector. Do not use `M305 S251` for this read-only check: the S form enters sensor-setting handling. 

## Sources

- [Schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/attempt/versions/v14/exports/schematic-netlist.xml) — host/output contact identities and branch-select nets.
- [Board source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/spi-hub/attempt/versions/v14)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/spi-hub/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="spi-hub" %}

</details>
