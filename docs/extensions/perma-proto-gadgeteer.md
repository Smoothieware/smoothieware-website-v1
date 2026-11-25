---
layout: default
title: "Gadgeteer perma-proto"
permalink: /extensions/perma-proto-gadgeteer
---

# Gadgeteer perma-proto

Use this passive carrier to build a soldered low-voltage prototype connected to existing Smoothieboard pins. The bare board contains connected strips and power rails; the components and wiring you add determine the circuit’s function.

For the documented dry-button example, start with the [four connections](#build-a-normally-open-button-prototype), identify the [connector hardware](#select-the-connector-hardware), then perform the [unpowered and configured-input checks](#check-the-button-prototype). This example uses two host contacts and two prototype holes; it does not power a user-added circuit.

## Purpose and operation

The v15 native netlist provides one keyed Y Gadgeteer connection, 60 five-hole signal strips (`TPU1`–`TPU30`, `TPD1`–`TPD30`) and four 30-hole power/ground rails (`TPR1`–`TPR4`). The seven GPIO socket contacts map to `/GPIO1_P3` through `/GPIO7_P9`; each horizontal five-hole strip is a common net and can be used for a user-added circuit. Top and bottom fields are distinct except where component leads, solder bridges, or added wires intentionally connect them. The CAD contract is passive and does not add controller, level shift, or automatic I²C mode. Circuit behavior depends entirely on components the user adds.

## Revision and source boundary

This guide selects **v15**, matching the retained native PCB, netlist and abstract. Family specifications still describe the earlier v11 inspection prototype. That older selection does not change the revision illustrated here or establish a production release. Physical header fit, current/backfeed/thermal behavior and system ESD performance remain unqualified. The passive carrier does not make an arbitrary added circuit safe.

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

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-overview" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-overview.png" title="Perma-Proto carrier — overview" alt="Perma-Proto carrier — overview for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reference" src="/images/extensions/perma-proto-gadgeteer/guides/reader-reference.png" title="Annotated board reference — v15" alt="perma-proto-gadgeteer v15 annotated board reference, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-host-input-1-5" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-host-input-1-5-central-pills.png" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-host-input-6-10" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-host-input-6-10-central-pills.png" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-top-rails" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-top-rails.png" title="Top supply rails — top rails" alt="Top supply rails — top rails for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-bottom-rails" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-bottom-rails.png" title="Bottom supply rails — bottom rails" alt="Bottom supply rails — bottom rails for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-signal-strips-1-4" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-signal-strips-1-4.png" title="Host signal strip map — signal strips 1 4" alt="Host signal strip map — signal strips 1 4 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-signal-strips-5-7" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-signal-strips-5-7.png" title="Host signal strip map — signal strips 5 7" alt="Host signal strip map — signal strips 5 7 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-u-1-10" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-u-1-10.png" title="Upper strips 1–10 — strips u 1 10" alt="Upper strips 1–10 — strips u 1 10 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-u-11-20" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-u-11-20.png" title="Upper strips 11–20 — strips u 11 20" alt="Upper strips 11–20 — strips u 11 20 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-u-21-30" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-u-21-30.png" title="Upper strips 21–30 — strips u 21 30" alt="Upper strips 21–30 — strips u 21 30 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-d-1-10" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-d-1-10.png" title="Lower strips 1–10 — strips d 1 10" alt="Lower strips 1–10 — strips d 1 10 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-d-11-20" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-d-11-20.png" title="Lower strips 11–20 — strips d 11 20" alt="Lower strips 11–20 — strips d 11 20 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-strips-d-21-30" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-strips-d-21-30.png" title="Lower strips 21–30 — strips d 21 30" alt="Lower strips 21–30 — strips d 21 30 for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-reader-compact-mounts" src="/images/extensions/perma-proto-gadgeteer/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for perma-proto-gadgeteer v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

Use the component-side reference to identify nets and numbered strips. Use the enlarged installation keys for the four selected button connections. Neither view establishes a cable’s mating-face orientation or assembled current rating.

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-connector-detail-01" src="/images/extensions/perma-proto-gadgeteer/guides/reader-connector-detail-01.png" title="Connector detail 01 — v15" alt="perma-proto-gadgeteer v15 connector detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-prototype-detail" src="/images/extensions/perma-proto-gadgeteer/guides/reader-prototype-detail.png" title="Prototype detail — v15" alt="perma-proto-gadgeteer v15 prototype detail, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>

## Contact map from v15 schematic netlist

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="perma-proto-contact-table" role="region" aria-label="Perma-Proto contact functions; scroll horizontally to read all columns" tabindex="0" markdown="1">

| J1 pin | Net | Connected prototype area |
|---:|---|---|
| 1 | +3V3 | Positive rail TPR3 (30 positions) |
| 2 | +5V | Positive rail TPR1 (30 positions) |
| 3 | /GPIO1_P3 | TPU12 (five holes) |
| 4 | /GPIO2_P4 | TPD13 (five holes) |
| 5 | /GPIO3_P5 | TPU14 (five holes) |
| 6 | /GPIO4_P6 | TPD15 (five holes) |
| 7 | /GPIO5_P7 | TPU16 (five holes) |
| 8 | /GPIO6_P8 | TPD17 (five holes) |
| 9 | /GPIO7_P9 | TPU18 (five holes) |
| 10 | GND | Ground rails TPR2 and TPR4 (30 positions each) |

</div>

</details>


Each five-hole strip TPU1–TPU30 or TPD1–TPD30 is one common node. Adjacent numbered strips and matching upper/lower strip numbers remain separate unless the selected netlist explicitly joins them. The four long supply/ground rails are separate from those strips; TPR2 and TPR4 share ground electrically. The netlist contains no overcurrent protection on the input; family review says fuse/reverse protection, TVS and GPIO ESD protection are absent. Use host power only and do not connect an independent supply or mains/high-current load. Source draft names a provisional 100 mA/rail limit but the applicable host/cable limit may be lower and remains unqualified; do not turn the provisional value into permission to energize.

## Smoothieboard V2 Prime connection

For the illustrated P11 Prime2660, the native PCB maps J37 pins 3–9 to PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2; pin 1 is 3.3 V, pin 2 is 5 V, pin 10 GND. J37 is the matching source-mapped header example. This is a schematic map, not a physical cable/keying or host-current qualification. Keep all added GPIO circuitry within the 3.3 V logic domain; `pins.md` marks PB1, PA4 and PG1 not 5 V tolerant. Disconnect power before changing soldered connections.

## Firmware interaction

The bare perma-proto has no driver. A user-created circuit can only be used through the Smoothieware module that matches the completed circuit and its allocated host pin. The V2 source has generic GPIO, endstop, switch and buttonbox examples, but this does not verify arbitrary circuit support. No universal pin assignment or configuration can be supplied for an unspecified user circuit. If a required device/protocol needs firmware behavior not verified in the matching source, leave it incomplete and email `wolf.arthur@gamil.com`.

## Build a normally-open button prototype

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-integral-installation" src="/images/extensions/perma-proto-gadgeteer/guides/native-contact/perma-wholeboard-reader.png" title="Trace the four dry-button connections on both complete boards" alt="Complete Prime P11 and Perma v15 source artwork with four continuous external conductors and a normally-open dry button. Numbered callouts match the endpoint key below." caption="Source-based button installation: both complete boards and all four continuous external leads are shown. Dashed callout leaders identify wires; they are not electrical connections. Board-face pin labels require the enlarged keys below. Paths terminate at source PCB pads, not verified accessible cable contacts; fitted connector mating, orientation and endpoint access remain unqualified. Keep power off." width=4000 %}

Match each numbered wire in the diagram to these endpoints:

1. **Host signal:** Prime P11 **J37 pin 3** → Perma **J1 pin 3**. Signal: PB1 / GPIO1_P3.
2. **Host ground:** Prime P11 **J37 pin 10** → Perma **J1 pin 10**.
3. **Button signal:** Perma **TPU12 pad 1** → normally-open button **terminal A**. Signal: PB1 / GPIO1_P3.
4. **Button ground:** Perma **TPR2 pad 1** → normally-open button **terminal B**.

The button is an isolated dry contact with no separate power supply. Its two terminals are interchangeable. PCB nets already join J1.3 to TPU12 and J1.10 to TPR2; do not add wires along those internal relationships. The [earlier enlarged-contact circuit](/images/extensions/perma-proto-gadgeteer/guides/native-contact/perma-native-reader.png) is retained for comparison; its connector crops do not establish fitted cable orientation.


### Select the connector hardware

The saved v15 design names **Samtec SHF-105-01-L-D-TH-LC** for J1. This is a ten-contact, two-row, **1.27 mm pitch** shrouded through-hole header with a polarization notch. Samtec lists FFSD and FFTP cable assemblies without strain relief as its mating families; check the selected assembly’s drawing before buying or making a harness. See the [manufacturer’s exact part page](https://www.samtec.com/products/shf-105-01-l-d-th-lc).

The illustrated Prime P11 host uses a generic vertical surface-mount J37 footprint. Its native PCB source does not identify a manufacturer-specific mating cable. Do not assume that a cable qualified for the Perma-Proto end also fits or is correctly keyed at the Prime end. The pad keys below show **PCB solder-pad positions**, not the face of a plug: the spacing between surface-mount solder tails is not a mating-contact drawing. Ordinary 2.54 mm jumper connectors do not match the documented 1.27 mm interface pitch.

For this button circuit, only contact 3 and contact 10 carry external connections. A suitable ten-position housing may still be needed even when only two positions are electrically connected. Keep every other conductor disconnected. With both boards unpowered, establish the fitted connector’s pin numbering from its actual drawing, then check end-to-end continuity and isolation before plugging it in. The exact assembled harness and its mating-face orientation remain unverified.

### Enlarged installation contact numbers

Use these enlarged keys with the complete circuit above. Filled contacts are selected for this example; open contacts stay unused. No jumper or solder bridge is added in this example. These sheets do not replace the circuit or establish cable mating-face orientation.

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-installation-key-j1" src="/images/extensions/perma-proto-gadgeteer/guides/native-contact/J1-numbered-pads.png" title="J1 contact numbers for this installation" alt="Enlarged component-side pad positions for J1; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-installation-key-j37" src="/images/extensions/perma-proto-gadgeteer/guides/native-contact/J37-numbered-pads.png" title="J37 contact numbers for this installation" alt="Enlarged component-side pad positions for J37; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

The source-model projection below numbers the upper mating pins separately from the wider solder pads. It matches the selected P11 board model and the canonical abstract artwork; it does not identify a cable housing or establish the fitted plug orientation. Dashed leaders identify source positions and are not wires.

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-model-j37-projection" src="/images/extensions/perma-proto-gadgeteer/guides/native-contact/source-model-j37-projection.png" title="J37 source-model mating-pin projection" alt="Canonical J37 artwork with all ten source-model upper pins numbered; pins 3 and 10 are highlighted." caption="Supplemental source-model key: mating-pin pitch is 1.27 mm; the solder-pad row centres are 3.9 mm apart. This is a board-side projection, not a plug face. Verify the fitted connector and cable drawing before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-installation-key-pads" src="/images/extensions/perma-proto-gadgeteer/guides/native-contact/Pads-numbered-pads.png" title="Pads contact numbers for this installation" alt="Enlarged component-side pad positions for Pads; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

This concrete example uses a normally-open, electrically isolated switch. It consumes only the PB1 input and ground; the 3.3 V and 5 V rails are not connected to the switch. The input is biased by the controller's internal pull-up.

1. Disconnect power. Confirm the documented board revision and that Prime GF/J37 pin PB1 is unallocated.
2. Use mating hardware checked above and connect only two conductors: **GF/J37.3 (PB1) → J1.3**, and **GF/J37.10 (ground) → J1.10**. Leave host contacts 1, 2 and 4–9 unconnected. Verify both leads with power off against the numbered component-side pad views.
3. Connect one switch terminal to **TPU12 pad 1** and the other to **TPR2 pad 1**, as located by the numbered prototype-hole key. These are the two selected holes; verify continuity to J1.3 and J1.10 before soldering. Other holes and rails remain unused in this example.
4. Inspect for solder bridges or loose strands, then check continuity: open switch leaves PB1 disconnected from ground; pressed switch connects only PB1 to ground. Do not attach an externally powered signal to this example.
5. With machine loads disconnected, install and verify the following source-checked V2 configuration.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

The `^` suffix enables the pull-up; `!` inverts the input so a ground closure becomes an active logical input. The V2 buttonbox parser executes `press` when its sampled state changes from inactive to active. A button already held when sampling starts can trigger on its first sample. `KILL` calls the firmware halt path; release does not issue an unhalt action. This is a software-halt example, not a qualified emergency-stop circuit or power disconnect.

The buttonbox and pin-parser syntax is checked against upstream V2 commit <code class="perma-proto-firmware-revision">2a21c0108b1d095ecd8b2b9358e94055f053c003</code>, linked below. The example has not been run on the controller. Do not substitute the sample's unbiased `PB1-` setting for this bare switch.

The selected button syntax and press/release behavior were also checked against [upstream V2 buttonbox source at a pinned revision](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp) and its [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp). This identifies the reviewed implementation, not the installed firmware. Startup with the button held can invoke the first press action; releasing it does not unhalt the machine.

## Check the button prototype

These checks follow the selected v15 netlist and the pinned firmware source. They describe expected results, not recorded tests of an assembled board.

With both boards disconnected from power, check the four external leads and the two existing board connections:

- Prime J37.3 reaches Perma J1.3; J1.3 is already connected to the five holes of TPU12. The selected button lead uses TPU12 pad 1.
- Prime J37.10 reaches Perma J1.10; J1.10 is already connected to both ground rails, TPR2 and TPR4. The selected button return uses TPR2 pad 1.
- Closing the button joins only the selected signal and ground. Opening it removes that external connection. Check for unintended solder bridges between adjacent strips.
- Leave the host’s supply contacts 1 and 2, and signal contacts 4–9, disconnected. Do not add a bridge between the 3.3 V and 5 V rails or power this example from an external supply.

After confirming the connector numbering and isolated continuity, keep machine loads disabled when checking the configuration:

- **Released:** the internal pull-up holds the input inactive. An unexpected press indication suggests a short to ground, the wrong switch contact, or incorrect inversion.
- **Pressed:** grounding PB1 produces an active sample and requests a software halt. If it does not, check pin allocation, the four leads and the selected prototype holes.
- **Released after a halt:** the halt remains set because no release action is configured. Releasing the button is not a restart command.
- **Signal lead disconnected:** the pull-up normally leaves the input inactive. This example cannot detect that broken wire and is not a fail-safe stop circuit.
- **Held during startup:** the first active sample can request a halt; no preceding release is required by this implementation.

## Instructional diagrams

The annotated reference and its detail views above describe the saved board. The complete-board diagram shows the selected four external leads; its numbered endpoint list and enlarged keys identify the exact contacts. Paths to PCB pads describe the source circuit. The fitted connector and cable orientation still require the hardware checks stated above.


<details markdown="1">
<summary>Earlier electrical layout</summary>

Retained ten-conductor alternatives. The compact example above uses only individual contacts 3 and 10.

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-integral-installation-retained-alternative" src="/images/extensions/perma-proto-gadgeteer/guides/prime-source-located-installation.png" title="Earlier source comparison — unqualified installation" alt="Source-numbered Prime, extension board and selected peripheral with continuous autorouted electrical paths." caption="Retained source comparison only; use the four-lead native-contact procedure above. This earlier layout does not qualify native attachment or a fitted cable. Dashed lines locate connectors; solid paths represent electrical relationships." width=1950 %}

{% include _includes/extension-instruction-diagram.html src="/images/extensions/perma-proto-gadgeteer/guides/perma-proto-gadgeteer-button-wiring.png" id="perma-proto-gadgeteer-v15-wiring" title="Earlier ten-conductor source comparison — v15" alt="Prime GF/J37 ten-conductor cable to the extension board, with continuous selected internal paths and a normally-open switch to ground." caption="Retained ten-conductor source comparison only, not the selected four-lead installation above. It uses P11 Prime artwork and source-verified P12 GF/J37 assignments; numbered banks are electrical identities rather than physical cavities. Physical mating and native attachment in this earlier drawing remain unqualified." width="1920" %}

</details>


### Earlier ten-conductor numbering comparison

{% include _includes/extension-instruction-diagram.html id="perma-proto-gadgeteer-v15-orientation" src="/images/extensions/perma-proto-gadgeteer/guides/perma-proto-gadgeteer-connector-orientation.png" title="Earlier ten-conductor numbering — unqualified comparison" alt="Exact native PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Retained numbering comparison for the earlier ten-conductor proposal, not an instruction to connect all ten contacts. Use the selected four-lead native-contact installation above. These component/front-side PCB views enlarge pad centres eight times; circles are not connector cavities and no mating-face view or ribbon stripe is inferred." width=1200 %}

## Source files and further reading

[Download the matching v15 native CAD study ZIP](/assets/downloads/extensions/perma-proto-gadgeteer/perma-cad-study.zip). It contains the unchanged KiCad 9 PCB, schematic (retained title revision v11), project, rules, library tables, all 66 local footprints, the source specification, license texts and a per-file hash manifest. Keep the local footprint folder beside the project. The original symbol table points to three standard libraries under `/usr/share/kicad/symbols`; remap those entries to your matching KiCad installation before updating symbols on another platform. Symbols are also embedded in the schematic.

This is a source-study download, not a fabrication or qualified assembly release. Optional connector 3D models are omitted because their redistribution license was not established; their native path references remain unchanged. The archive notes explain the external libraries and omitted exports. The board specification and schematic declare CERN-OHL-S-2.0; the archive preserves those declarations and includes the license text and KiCad notices.

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its links below remain provenance references; the matching local CAD study is available above. Firmware and historical-board links are separate sources.

- [Selected v15 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/attempt/versions/v15/perma-proto-gadgeteer.kicad_pcb)
- [Selected-source schematic netlist](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/attempt/versions/v15/exports/schematic-netlist.xml)
- [Family specification and retained earlier revisions](https://github.com/arthurwolf/extension-boards/blob/main/src/perma-proto-gadgeteer/specs.md)
- [All extension boards](/extension-boards)

Some engineering-source links may require repository access. Availability of those links remains a separate check from the local source review.

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="perma-proto-gadgeteer" %}

</details>
