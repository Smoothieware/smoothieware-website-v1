---
layout: default
title: "Qwiic-to-Gadgeteer adapter"
permalink: /extensions/qwiic-to-gadgeteer-adapter
---

# Qwiic-to-Gadgeteer adapter

Use this passive adapter to connect compatible 3.3 V Qwiic peripherals to one host-provided I²C bus. It contains no controller, level translator or peripheral driver. A matching connector alone does not establish that Smoothieware supports the attached device.

## Purpose and operation

The board has two Gadgeteer connectors, two populated JST Qwiic ports and cuttable chain links on contacts 3–9. The first Qwiic port is wired to the host: Qwiic GND, 3.3 V, SDA and SCL connect to Gadgeteer contacts 10, 1, 8 and 9. The second Qwiic port is parallel to the first. Gadgeteer contact 2 (+5 V) passes to the chain only and is not wired to either Qwiic port. The two Qwiic connectors share a single bus; address conflicts and pull-up loading remain the devices’ responsibility.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-overview" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-overview.png" title="Qwiic bus adapter — overview" alt="Qwiic bus adapter — overview" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reference" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-reference.png" title="Annotated board reference" alt="Qwiic bus adapter annotated board reference, with numbered features." caption="Component-side reference. Dotted leaders locate parts, not electrical wiring. Numbered details show the contacts." width=1440 %}

</details>

Use the overview with all focused contact and link sheets. J3 and J4 each contain two physical pad populations sharing contacts 1–4; do not confuse duplicate pads with separate bus signals.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-host-input-1-5" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-host-input-1-5-central-pills.png" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-host-input-6-10" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-host-input-6-10-central-pills.png" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-output-1-5" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-output-1-5-central-pills.png" title="J2 · Chain output — chain output 1 5" alt="J2 · Chain output — chain output 1 5" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-output-6-10" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-output-6-10-central-pills.png" title="J2 · Chain output — chain output 6 10" alt="J2 · Chain output — chain output 6 10" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-qwiic-port-j3-1-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-qwiic-port-j3-1-4-central-pills.png" title="J3 · Qwiic port — qwiic port j3 1 4" alt="J3 · Qwiic port — qwiic port j3 1 4" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-qwiic-port-j4-1-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-qwiic-port-j4-1-4-central-pills.png" title="J4 · Qwiic port — qwiic port j4 1 4" alt="J4 · Qwiic port — qwiic port j4 1 4" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-links-3-6" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-links-3-6.png" title="Chain links 3–6 — chain links 3 6" alt="Chain links 3–6 — chain links 3 6" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-links-7-9" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-links-7-9.png" title="Chain links 7–9 — chain links 7 9" alt="Chain links 7–9 — chain links 7 9" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-port-ground-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-port-ground-pads.png" title="Qwiic port grounds — port ground pads" alt="Qwiic port grounds — port ground pads" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-test-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-test-pads-underside-caption.png" title="Test pads — test pads" alt="Test pads — test pads" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-mounts" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-mounts.png" title="Board mounting holes — mounts" alt="Board mounting holes — mounts" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-cable-ties" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-cable-ties.png" title="Cable tie features — cable ties" alt="Cable tie features — cable ties" caption="Component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets." width=420 %}

</details>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-connector-detail-01" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Qwiic bus adapter connector detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts, not electrical wiring. Numbered details show the contacts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-connector-detail-02" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Qwiic bus adapter connector detail 02, with numbered features." caption="Component-side reference. Dotted leaders locate parts, not electrical wiring. Numbered details show the contacts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-link-detail-01" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-link-detail-01.png" title="Link detail 01" alt="Qwiic bus adapter link detail 01, with numbered features." caption="Component-side reference. Dotted leaders locate parts, not electrical wiring. Numbered details show the contacts." width=1440 %}

</details>

## Contact table

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Contact | Net/function | Connection |
|---|---|---|
| J1.1 | 3V3 | J2.1 and both Qwiic J3.2/J4.2 |
| J1.2 | 5V | J2.2 only; no Qwiic power connection |
| J1.3–J1.7 | HOST3–HOST7 | J1 contacts; each reaches corresponding chain contact only while matching SJ link is closed |
| J1.8 | SDA | Qwiic J3.3/J4.3, TP3, and chain through SJ8 |
| J1.9 | SCL | Qwiic J3.4/J4.4, TP4, and chain through SJ9 |
| J1.10 | GND | J2.10 and Qwiic J3.1/J4.1 |
| SJ3–SJ7 | chain links | Individually connect host contacts 3–7 to corresponding chain positions |
| SJ8/SJ9 | SDA/SCL chain links | Individually connect host bus lines to downstream chain; open if isolating chain |
| TP1–TP5 | 3V3/5V/SDA/SCL/GND | High-impedance observation only; not injection or power inputs |

</div>

</details>

The netlist does not resolve physical pin-1 orientation by itself; use the keyed connector and the board view. The 5 V chain contact must not be wired to a Qwiic device supply.

## Smoothieboard V2 Prime connection

The circuit below uses **Prime GG/J38 (I²C2)**: contacts **1 = 3.3 V, 8 = SDA, 9 = SCL, 10 = ground**. Connect only those four individual host leads to adapter J1 contacts with the same numbers. No 5 V lead is used. Check cable mating orientation at the host connector.

The J33 connector provides I²C3 on contacts 8/9, with 3.3 V on 1 and ground on 10. It is an alternative to the connector used in this drawing. Do not mix J33/I²C3 with J38/I²C2 in a configuration or installation. Check the total current draw against the Prime hardware limits before powering. Use one powered host, with no second host or external Qwiic supply.

## Connect one Qwiic peripheral

The illustrated example connects the adapter and the spectral-analysis module to Prime **GG/J38 (I²C2)**. This is the electrical connection; SmoothieV2 has no AS7265x measurement or setup sequence. Read the firmware section below before using the sensor. Leave other host contacts and unused adapter/sensor ports disconnected. Repeated contact numbers in the sheets are alternate pads on the same net; MP denotes unconnected mounting pads.

Use these connected enlargements with all four contact keys. The drawing uses individual leads on the through-hole contacts of adapter J3 and sensor J3; their alternate SMD populations and mounting contacts remain unused. Dashed orange locators identify each crop on the whole-board drawing. The labelled adapter PCB relationships are internal connections, separate from the eight external leads.

{% include _includes/extension-instruction-diagram.html id="qwiic-native-0" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-legibility-corrected/qwiic-native-reader.png" title="Prime, adapter and spectral sensor — eight leads" alt="Prime, adapter and spectral sensor — eight leads" caption="Individual leads: 3.3 V, SDA, SCL and ground only; no 5 V lead. Check the supply budget and sensor setup before powering. Component-side contacts are not mating faces; use the numbered contact keys below." width=900 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-1" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J38-numbered-pads.png" title="Prime GG/J38 — complete numbered contacts" alt="Prime GG/J38 — complete numbered contacts" caption="Individual leads: 3.3 V, SDA, SCL and ground only; no 5 V lead. Check the supply budget and sensor setup before powering. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-2" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Adapter J1 — complete numbered contacts" alt="Adapter J1 — complete numbered contacts" caption="Individual leads: 3.3 V, SDA, SCL and ground only; no 5 V lead. Check the supply budget and sensor setup before powering. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-3" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J3-adapter-numbered-pads.png" title="Adapter J3 — used through-hole and unused alternate contacts" alt="Adapter J3 — used through-hole and unused alternate contacts" caption="Individual leads: 3.3 V, SDA, SCL and ground only; no 5 V lead. Check the supply budget and sensor setup before powering. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J3-sensor-numbered-pads.png" title="Sensor J3 — used through-hole and unused alternate contacts" alt="Sensor J3 — used through-hole and unused alternate contacts" caption="Individual leads: 3.3 V, SDA, SCL and ground only; no 5 V lead. Check the supply budget and sensor setup before powering. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

<details markdown="1">
<summary>Electrical ports view</summary>

These drawings arrange ports by function rather than showing where each lead lands on the board. Use the circuit above for wiring.

{% include _includes/extension-instruction-diagram.html id="qwiic-compact-spectral-connection-plan" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/compact-spectral-connection-plan.png" title="Prime, Qwiic adapter and spectral module connection plan" alt="Prime, Qwiic adapter and spectral module connection plan" caption="Connection plan with individual numbered leads. Component-side pads are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J1-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J1-compact-numbered-pads.png" title="Numbered contacts: J1" alt="Numbered contacts: J1" caption="Connection plan with individual numbered leads. Component-side pads are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J3-adapter-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J3-adapter-compact-numbered-pads.png" title="Numbered contacts: J3-adapter" alt="Numbered contacts: J3-adapter" caption="Connection plan with individual numbered leads. Component-side pads are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J3-sensor-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J3-sensor-compact-numbered-pads.png" title="Numbered contacts: J3-sensor" alt="Numbered contacts: J3-sensor" caption="Connection plan with individual numbered leads. Component-side pads are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J38-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J38-compact-numbered-pads.png" title="Numbered contacts: J38" alt="Numbered contacts: J38" caption="Connection plan with individual numbered leads. Component-side pads are not mating faces." width=420 %}

</details>

The Qwiic-side contact order is **1 ground, 2 3.3 V, 3 SDA, 4 SCL**. SparkFun specifies the matching cable colours as black, red, blue and yellow respectively and requires a 3.3 V interface. These are connector-system conventions, not an assembled current rating for this adapter or the Prime supply. See [SparkFun's Qwiic compatibility and pinout specification](https://www.sparkfun.com/qwiic).

1. Disconnect power. Verify the Prime GG/J38 pin map and the four individual leads (1, 8, 9 and 10) to adapter J1. Do not rely on connector appearance alone.
2. For the illustrated spectral board, connect adapter J3 through-hole contacts 1–4 individually to sensor J3 through-hole contacts 1–4. Leave both alternate SMD populations unused. This diagram is not a keyed cable mating view. Leave adapter J2/J4 and sensor J1/J2 disconnected.
3. Check the full electrical path: J38.10 → J1.10 → J3.1 ground; J38.1 → J1.1 → J3.2 supply; J38.8 → J1.8 → J3.3 SDA; J38.9 → J1.9 → J3.4 SCL. The host's 5 V contact must not reach the Qwiic supply.
4. Confirm the peripheral's address, current requirement, bus voltage and pull-up population against that exact module's documentation. Multiple pull-up resistors act in parallel; the second adapter port does not create another I²C controller or resolve address conflicts. SDA is the shared data line; SCL is the shared clock line.
5. Check device-specific Smoothieware support before expecting a reading or command. There is no generic configuration for arbitrary Qwiic devices. The electrical connection above does not add a firmware feature.

## Firmware interaction

The adapter itself needs no firmware driver. It merely exposes an I²C electrical bus; Smoothieware V2 documents pin names and the HAL, but has no generic user-configurable I²C peripheral protocol interface. Do not promise that an arbitrary Qwiic sensor can be read/configured by Smoothieware. Smoothieware does not support a Qwiic device that needs native firmware interaction. Device-specific host software outside Smoothieware is a separate use case.

## Connect a spectral sensor through the adapter

This example uses Prime GG/J38 (I2C2), the adapter and the spectral-analysis board. Connect only host contacts 1, 8, 9 and 10 individually to adapter J1 contacts with the same numbers. Four individual through-hole leads connect adapter J3 to spectral-board J3: **1 ground, 2 limited 3.3 V, 3 SDA, 4 SCL**. Adapter host contacts 1/8/9/10 reach Qwiic contacts 2/3/4/1 respectively. The host 5 V contact does not reach the Qwiic cable. Leave adapter J2/J4 and spectral J1/J2 disconnected in this example.

<details markdown="1">
<summary>Ten-conductor view</summary>

This drawing includes ten host conductors and function-arranged ports; use the four-lead procedure above.

{% include _includes/extension-instruction-diagram.html id="qwiic-v20-prime-spectral-installation" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/prime-installation-wiring.png" title="Prime through the Qwiic adapter to the spectral board" alt="Ten host conductors and four Qwiic conductors show the numbered power ground SDA and SCL mapping through the adapter" caption="Adapter dots represent PCB nets labelled with both contacts; the electrical ports are arranged by function, not physical pin position." width=2900 %}

</details>

The spectral board contains an AS72651/52/53 sensor cluster. SmoothieV2 has no AS7265x acquisition driver; connecting I2C does not supply one. Confirm the sensor flash image and total supply loading before use.

## Source files and further reading

- [PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v20/qwiic-to-gadgeteer-adapter.kicad_pcb)
- [Schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v20/exports/schematic-netlist.xml)
- [Family specification](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/specs.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="qwiic-to-gadgeteer-adapter" %}

</details>
