---
layout: default
title: "Qwiic-to-Gadgeteer adapter"
permalink: /extensions/qwiic-to-gadgeteer-adapter
---

# Qwiic-to-Gadgeteer adapter

Use this passive adapter to connect compatible 3.3 V Qwiic peripherals to one host-provided I²C bus. It contains no controller, level translator or peripheral driver. A matching connector alone does not establish that Smoothieware supports the attached device.

## Purpose and operation

The v20 netlist has two Gadgeteer connectors, two populated JST Qwiic ports and cuttable chain links on contacts 3–9. The first Qwiic port is wired to the host: Qwiic GND, 3.3 V, SDA and SCL connect to Gadgeteer contacts 10, 1, 8 and 9. The second Qwiic port is parallel to the first. Gadgeteer contact 2 (+5 V) passes to the chain only and is not wired to either Qwiic port. The two Qwiic connectors share a single bus; address conflicts and pull-up loading remain the devices’ responsibility.

## Revision and source boundary

This guide selects **v20**, matching the retained native PCB, netlist and abstract. Family specifications describe the earlier v16 inspection prototype; that historical selection does not make the illustrated v20 a released product. Host current allocation, physical mating, bus loading/rise time and peripheral address conflicts remain unresolved. Use one powered host; no independent supply, second host or hot-plug arrangement is established by this source.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-overview" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-overview.svg" title="Qwiic bus adapter — overview" alt="Qwiic bus adapter — overview for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reference" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-reference.svg" title="Annotated board reference — v20" alt="qwiic-to-gadgeteer-adapter v20 annotated board reference, with numbered source features." caption="Component-side source reference. Dotted leaders locate parts, not electrical wiring. Numbered details preserve native contacts; physical mating and assembled ratings remain open." width=1440 %}

</details>

Use the overview with all focused contact and link sheets. J3 and J4 each contain two physical pad populations sharing contacts 1–4; do not confuse duplicate pads with separate bus signals.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-host-input-1-5" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-host-input-1-5-central-pills.svg" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-host-input-6-10" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-host-input-6-10-central-pills.svg" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-output-1-5" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-output-1-5-central-pills.svg" title="J2 · Chain output — chain output 1 5" alt="J2 · Chain output — chain output 1 5 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-output-6-10" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-output-6-10-central-pills.svg" title="J2 · Chain output — chain output 6 10" alt="J2 · Chain output — chain output 6 10 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-qwiic-port-j3-1-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-qwiic-port-j3-1-4-central-pills.svg" title="J3 · Qwiic port — qwiic port j3 1 4" alt="J3 · Qwiic port — qwiic port j3 1 4 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-qwiic-port-j4-1-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-qwiic-port-j4-1-4-central-pills.svg" title="J4 · Qwiic port — qwiic port j4 1 4" alt="J4 · Qwiic port — qwiic port j4 1 4 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-links-3-6" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-links-3-6.svg" title="Chain links 3–6 — chain links 3 6" alt="Chain links 3–6 — chain links 3 6 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-chain-links-7-9" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-chain-links-7-9.svg" title="Chain links 7–9 — chain links 7 9" alt="Chain links 7–9 — chain links 7 9 for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-port-ground-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-port-ground-pads.svg" title="Qwiic port grounds — port ground pads" alt="Qwiic port grounds — port ground pads for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-test-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-test-pads-underside-caption.svg" title="Test pads — test pads" alt="Test pads — test pads for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-mounts" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-mounts.svg" title="Board mounting holes — mounts" alt="Board mounting holes — mounts for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-reader-compact-cable-ties" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-compact-cable-ties.svg" title="Cable tie features — cable ties" alt="Cable tie features — cable ties for qwiic-to-gadgeteer-adapter v20" caption="Selected-source component-side reference. Use the overview and every focused sheet together. Paired physical pads share numbered nets. Supply capacity, device firmware and physical mating remain open." width=420 %}

</details>

**Review status:** the 18 required figures—the compact overview, 12 focused reference sheets, native-contact circuit and four contact keys—were reviewed at desktop and phone Fit on 2026-10-25. The combined supplementary sheets and historical comparisons do not replace that required set. Independent routing/paint checks, supply qualification, physical mating, device setup and spectral-sensor firmware remain incomplete.

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-connector-detail-01" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-connector-detail-01.svg" title="Connector detail 01 — v20" alt="qwiic-to-gadgeteer-adapter v20 connector detail 01, with numbered source features." caption="Component-side source reference. Dotted leaders locate parts, not electrical wiring. Numbered details preserve native contacts; physical mating and assembled ratings remain open." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-connector-detail-02" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-connector-detail-02.svg" title="Connector detail 02 — v20" alt="qwiic-to-gadgeteer-adapter v20 connector detail 02, with numbered source features." caption="Component-side source reference. Dotted leaders locate parts, not electrical wiring. Numbered details preserve native contacts; physical mating and assembled ratings remain open." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-to-gadgeteer-adapter-v20-link-detail-01" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/reader-link-detail-01.svg" title="Link detail 01 — v20" alt="qwiic-to-gadgeteer-adapter v20 link detail 01, with numbered source features." caption="Component-side source reference. Dotted leaders locate parts, not electrical wiring. Numbered details preserve native contacts; physical mating and assembled ratings remain open." width=1440 %}

</details>

## Contact table from v20 schematic netlist

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Contact | Net/function | Source-bound connection |
|---|---|---|
| J1.1 | 3V3 | J2.1 and both Qwiic J3.2/J4.2 |
| J1.2 | 5V | J2.2 only; no Qwiic power connection |
| J1.3–J1.7 | HOST3–HOST7 | J1 contacts; each reaches corresponding chain contact only while matching SJ link is closed |
| J1.8 | SDA | Qwiic J3.3/J4.3, TP3, and chain through SJ8 |
| J1.9 | SCL | Qwiic J3.4/J4.4, TP4, and chain through SJ9 |
| J1.10 | GND | J2.10 and Qwiic J3.1/J4.1 |
| SJ3–SJ7 | chain links | Individually connect host contacts 3–7 to corresponding chain positions |
| SJ8/SJ9 | SDA/SCL chain links | Individually connect host bus lines to downstream chain; open if isolating chain |
| TP1–TP5 | 3V3/5V/SDA/SCL/GND | High-impedance observation only per family source; not injection or power inputs |

</div>

</details>


The netlist does not resolve physical pin-1 orientation by itself; use the actual keyed connector and source-bound board view. The 5 V chain contact must not be wired to a Qwiic device supply.

## Smoothieboard V2 Prime connection

The selected circuit below uses **P12 Prime2590 GG/J38 (I²C2)**: contacts **1 = 3.3 V, 8 = SDA, 9 = SCL, 10 = ground**. Connect only those four individual host leads to adapter J1 contacts with the same numbers. No 5 V lead is used. Prime P11 artwork locates the host connector; its illustration does not replace the selected P12 allocation or establish cable mating orientation.

The separate P12 J33 allocation provides I²C3 on contacts 8/9, with 3.3 V on 1 and ground on 10. That is an alternative source map, not the connector selected in this drawing. Do not mix J33/I²C3 with J38/I²C2 in a configuration or installation. Host current available to the adapter and peripheral remains unknown; confirm total draw against authoritative hardware limits before powering. Use one powered host, with no second host or external Qwiic supply.

## Connect one Qwiic peripheral

The illustrated example selects adapter **v20** and the spectral-analysis module **v31** on Prime **GG/J38 (I²C2)**. It is a source-backed electrical connection plan; no AS7265x measurement or setup sequence is established in the pinned firmware. Read the support boundary below before treating the sensor as usable. Leave other host contacts and unused adapter/sensor ports disconnected. Repeated contact numbers in the sheets are alternate pads on the same net; MP denotes unconnected mounting pads.

Use these connected native-art enlargements with all four contact keys. The drawing selects individual leads on the through-hole contacts of adapter J3 and sensor J3; their alternate SMD populations and mounting contacts remain unused. Dashed orange locators identify each crop on the whole-board abstract. The labelled adapter PCB relationships are internal connections, separate from the eight external leads. P11 Prime artwork is paired with the checked P12 GG/J38 allocation; the numbered component-side keys are not plug mating views.

{% include _includes/extension-instruction-diagram.html id="qwiic-native-0" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-legibility-corrected/qwiic-native-reader.svg" title="Prime, adapter and spectral sensor — eight native-contact leads" alt="Prime, adapter and spectral sensor — eight native-contact leads" caption="Unpowered individual-lead reference: 3.3 V, SDA, SCL and ground only; no 5 V lead. Do not power this installation until its supply budget and sensor setup are established. Component-side contacts are not mating faces; use the numbered contact keys below." width=900 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-1" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J38-numbered-pads.svg" title="Prime GG/J38 — complete numbered contacts" alt="Prime GG/J38 — complete numbered contacts" caption="Unpowered individual-lead reference: 3.3 V, SDA, SCL and ground only; no 5 V lead. Do not power this installation until its supply budget and sensor setup are established. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-2" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J1-numbered-pads.svg" title="Adapter J1 — complete numbered contacts" alt="Adapter J1 — complete numbered contacts" caption="Unpowered individual-lead reference: 3.3 V, SDA, SCL and ground only; no 5 V lead. Do not power this installation until its supply budget and sensor setup are established. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-3" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J3-adapter-numbered-pads.svg" title="Adapter J3 — selected through-hole and unused alternate contacts" alt="Adapter J3 — selected through-hole and unused alternate contacts" caption="Unpowered individual-lead reference: 3.3 V, SDA, SCL and ground only; no 5 V lead. Do not power this installation until its supply budget and sensor setup are established. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-native-4" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/native-contact/reader-contact-keys/J3-sensor-numbered-pads.svg" title="Sensor J3 — selected through-hole and unused alternate contacts" alt="Sensor J3 — selected through-hole and unused alternate contacts" caption="Unpowered individual-lead reference: 3.3 V, SDA, SCL and ground only; no 5 V lead. Do not power this installation until its supply budget and sensor setup are established. Component-side contacts are not mating faces; use the numbered contact keys below." width=420 %}

<details markdown="1">
<summary>Earlier unqualified source comparison — separated electrical ports</summary>

These retained drawings arrange ports by function rather than landing every external lead on native artwork. Use the selected native-contact circuit above.

{% include _includes/extension-instruction-diagram.html id="qwiic-compact-spectral-connection-plan" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/compact-spectral-connection-plan.svg" title="Prime, Qwiic adapter and spectral module connection plan" alt="Prime, Qwiic adapter and spectral module connection plan" caption="Selected-source connection plan with individual numbered leads. Component-side pads are not mating faces. AS7265x acquisition/setup support remains unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J1-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J1-compact-numbered-pads.svg" title="Numbered contacts: J1" alt="Numbered contacts: J1" caption="Selected-source connection plan with individual numbered leads. Component-side pads are not mating faces. AS7265x acquisition/setup support remains unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J3-adapter-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J3-adapter-compact-numbered-pads.svg" title="Numbered contacts: J3-adapter" alt="Numbered contacts: J3-adapter" caption="Selected-source connection plan with individual numbered leads. Component-side pads are not mating faces. AS7265x acquisition/setup support remains unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J3-sensor-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J3-sensor-compact-numbered-pads.svg" title="Numbered contacts: J3-sensor" alt="Numbered contacts: J3-sensor" caption="Selected-source connection plan with individual numbered leads. Component-side pads are not mating faces. AS7265x acquisition/setup support remains unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="qwiic-J38-compact-numbered-pads" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/J38-compact-numbered-pads.svg" title="Numbered contacts: J38" alt="Numbered contacts: J38" caption="Selected-source connection plan with individual numbered leads. Component-side pads are not mating faces. AS7265x acquisition/setup support remains unresolved." width=420 %}

</details>

The Qwiic-side contact order is **1 ground, 2 3.3 V, 3 SDA, 4 SCL**. SparkFun specifies the matching cable colours as black, red, blue and yellow respectively and requires a 3.3 V interface. These are connector-system conventions, not an assembled current rating for this adapter or the Prime supply. See [SparkFun's Qwiic compatibility and pinout specification](https://www.sparkfun.com/qwiic), checked 2026-10-18.

1. Disconnect power. Verify the selected Prime GG/J38 pin map and the four selected individual leads (1, 8, 9 and 10) to adapter J1. Do not rely on connector appearance alone.
2. For the illustrated spectral v31 board, connect adapter J3 through-hole contacts 1–4 individually to sensor J3 through-hole contacts 1–4. Leave both alternate SMD populations unused. This diagram does not establish a keyed cable mating view. Leave adapter J2/J4 and sensor J1/J2 disconnected.
3. Check the full electrical path: J38.10 → J1.10 → J3.1 ground; J38.1 → J1.1 → J3.2 supply; J38.8 → J1.8 → J3.3 SDA; J38.9 → J1.9 → J3.4 SCL. The host's 5 V contact must not reach the Qwiic supply.
4. Confirm the peripheral's address, current requirement, bus voltage and pull-up population against that exact module's documentation. Multiple pull-up resistors act in parallel; the second adapter port does not create another I²C controller or resolve address conflicts. SDA is the shared data line; SCL is the shared clock line.
5. Establish actual device-specific Smoothieware support before expecting a reading or command. This guide has no verified generic configuration for arbitrary Qwiic devices. The electrical connection above is not a demonstrated firmware feature.

## Firmware interaction

The adapter itself needs no firmware driver. It merely exposes an I²C electrical bus; the local Smoothieware V2 mirror documents pin names and HAL, but this research did not find a generic user-configurable I²C peripheral protocol interface. Do not promise that an arbitrary Qwiic sensor can be read/configured by Smoothieware. For a Qwiic device requiring native firmware interaction, support is unverified/incomplete; contact `wolf.arthur@gamil.com` about support. Device-specific host software outside Smoothieware is a separate use case and is not covered by a firmware claim here.

## Connect a spectral sensor through the adapter

This example uses Prime GG/J38 (I2C2), adapter v20 and the spectral-analysis board v31. Connect only host contacts 1, 8, 9 and 10 individually to adapter J1 contacts with the same numbers. Four individual through-hole leads connect adapter J3 to spectral-board J3: **1 ground, 2 limited 3.3 V, 3 SDA, 4 SCL**. Adapter host contacts 1/8/9/10 reach Qwiic contacts 2/3/4/1 respectively. The host 5 V contact does not reach the Qwiic cable. Leave adapter J2/J4 and spectral J1/J2 disconnected in this example.

<details markdown="1">
<summary>Earlier unqualified ten-conductor source comparison</summary>

This retained drawing includes ten host conductors and function-arranged electrical ports. It is not the selected four-host-lead procedure and does not establish native-contact or cable-mating geometry.

{% include _includes/extension-instruction-diagram.html id="qwiic-v20-prime-spectral-installation" src="/images/extensions/qwiic-to-gadgeteer-adapter/guides/prime-installation-wiring.svg" title="Prime through the Qwiic adapter to the spectral board" alt="Ten host conductors and four Qwiic conductors show the numbered power ground SDA and SCL mapping through the adapter" caption="Adapter dots represent verified PCB nets labelled with both source contacts; the electrical ports are arranged by function, not physical pin position. All three source abstracts are retained. Physical cable orientation, rail loading and actual reader review remain open." width=2900 %}

</details>

The selected spectral board contains an AS72651/52/53 sensor cluster. The pinned firmware has no named AS7265x acquisition driver; connecting I2C does not supply one. For required support email **wolf.arthur@gamil.com**. Confirm the fitted sensor flash image and total supply loading before use; no spectral measurement commands are established by this drawing.

## Source files and further reading

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v20 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v20/qwiic-to-gadgeteer-adapter.kicad_pcb)
- [Selected-source schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/attempt/versions/v20/exports/schematic-netlist.xml)
- [Family specification and retained earlier revisions](https://github.com/arthurwolf/extension-boards/blob/main/src/qwiic-to-gadgeteer-adapter/specs.md)
- [All extension boards](/extension-boards)

Some engineering-source links may require repository access. Availability of those links remains a separate check from the local source review.

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="qwiic-to-gadgeteer-adapter" %}

</details>
