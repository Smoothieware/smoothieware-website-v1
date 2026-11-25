---
layout: default
title: "Button boards"
permalink: /extensions/button-boards
---

# Button boards

The selected board presents seven mechanical momentary buttons to a Gadgeteer host socket. Use it for ordinary machine controls such as a software halt, pause or a user action. This candidate is the seven-button assembly; historical single-button concepts are not automatically the same PCB.

This guide documents the **v14 source design** of the seven-button board. The source files and numbered drawings describe this revision; earlier single-button concepts and board revisions may differ. Fabrication and assembled hardware operation have not been qualified.

The selected v14 source package retains schematic title-block revision **v05**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

Each of the seven buttons has the same circuit: a normally-open switch to ground, a **1 kΩ series resistor** between that switch and the host input, a **10 kΩ pull-up** from the input to 3.3 V, and a **100 nF filter capacitor** from the input to ground. Releasing the button lets the pull-up raise its input; pressing it pulls the input low through the series resistor. Each button has its own host signal, so simultaneous presses are independent electrical inputs. The filter is not a guarantee of bounce-free operation.

The selected PCB, retained netlist and a fresh KiCad export of the selected schematic agree on all **96 connected component contacts**, including every channel below. This checks their source net assignments; it does not establish manufactured copper continuity or fitted component values.

<div class="table-wrapper" markdown="1">

<div class="extension-contact-table" role="region" aria-label="Seven button filter circuits; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Button | Host contact | Series 1 kΩ | Pull-up 10 kΩ | Filter 100 nF | Chain link |
| --- | --- | --- | --- | --- | --- |
| SW1 | J1.3 / BTN1_OUT | R1 | R8 | C1 | JP1 |
| SW2 | J1.4 / BTN2_OUT | R2 | R9 | C2 | JP2 |
| SW3 | J1.5 / BTN3_OUT | R3 | R10 | C3 | JP3 |
| SW4 | J1.6 / BTN4_OUT | R4 | R11 | C4 | JP4 |
| SW5 | J1.7 / BTN5_OUT | R5 | R12 | C5 | JP5 |
| SW6 | J1.8 / BTN6_OUT | R6 | R13 | C6 | JP6 |
| SW7 | J1.9 / BTN7_OUT | R7 | R14 | C7 | JP7 |

</div>

</div>

J2 repeats the supply rails and ground. Each signal reaches J2 through its own JP1–JP7 link; closing a link shares that existing button input with the corresponding chain contact. It does not create another button or an independent GPIO. Keep the chain socket unused for the example below.

## Power, signals and limits

J1.1 is 3.3 V, .2 is 5 V and .10 ground. Contacts 3–9 carry BTN1_OUT through BTN7_OUT. All seven button states require seven host inputs; never configure one as an output while the switch can ground it. Debounce, the exact assembled pull network, cable noise and power-loss behavior require verification. A software KILL button is not a safety-rated emergency stop or power disconnect.

## Connectors and cable choice

The selected v14 CAD names **Samtec SHF-105-01-L-D-TH-LC** for J1: a shrouded, two-row, ten-contact header on a **1.27 mm pitch**. [Samtec’s matching part documentation](https://www.samtec.com/products/shf-105-01-l-d-th-lc) lists FFSD ribbon and FFTP cable assemblies without strain relief as mating families. This identifies the board-side design intent; it does not identify an assembled cable or certify the fitted parts.

The retained Prime P11 source models J37 as a generic two-row, ten-contact, 1.27 mm surface-mount pin header. It does not declare the same keyed Samtec housing. Check the actual host header and both cable ends before selecting a cable; do not infer host-side key orientation from J1. Use the component-side contact keys below to establish **1→1 through 10→10**, and verify all ten connections with power removed. The red edge marks the intended contact-1 conductor; its colour alone does not prove continuity or orientation.

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

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-overview" src="/images/extensions/button-boards/guides/reader-compact-overview.png" title="Seven-button board — overview" alt="Seven-button board — overview for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reference" src="/images/extensions/button-boards/guides/reader-reference.png" title="Annotated board reference — v14" alt="button-boards v14 annotated board reference, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>

Start with the overview, then use the focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-host-input-1-5" src="/images/extensions/button-boards/guides/reader-compact-host-input-1-5-central-pills.png" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-host-input-6-10" src="/images/extensions/button-boards/guides/reader-compact-host-input-6-10-central-pills.png" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-chain-output-1-5" src="/images/extensions/button-boards/guides/reader-compact-chain-output-1-5-central-pills.png" title="J2 · Chain output — chain output 1 5" alt="J2 · Chain output — chain output 1 5 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-chain-output-6-10" src="/images/extensions/button-boards/guides/reader-compact-chain-output-6-10-central-pills.png" title="J2 · Chain output — chain output 6 10" alt="J2 · Chain output — chain output 6 10 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-buttons-1-4" src="/images/extensions/button-boards/guides/reader-compact-buttons-1-4.png" title="Buttons 1–4 — buttons 1 4" alt="Buttons 1–4 — buttons 1 4 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-chain-links-1-4" src="/images/extensions/button-boards/guides/reader-compact-chain-links-1-4.png" title="Chain links 1–4 — chain links 1 4" alt="Chain links 1–4 — chain links 1 4 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-buttons-5-7" src="/images/extensions/button-boards/guides/reader-compact-buttons-5-7.png" title="Buttons 5–7 — buttons 5 7" alt="Buttons 5–7 — buttons 5 7 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-chain-links-5-7" src="/images/extensions/button-boards/guides/reader-compact-chain-links-5-7.png" title="Chain links 5–7 — chain links 5 7" alt="Chain links 5–7 — chain links 5 7 for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-test-pads" src="/images/extensions/button-boards/guides/reader-compact-test-pads.png" title="Test pads — test pads" alt="Test pads — test pads for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-reader-compact-mounting-holes" src="/images/extensions/button-boards/guides/reader-compact-mounting-holes.png" title="Mounting holes — mounting holes" alt="Mounting holes — mounting holes for button-boards v14" caption="Selected-source component-side reference. Use the overview and all focused sheets together. Use the focused sheets at narrow widths and zoom combined drawings for fine labels. Cable mating and assembled continuity remain unverified." width=420 %}

</details>

**Reading the diagrams:** use the focused connector, button and link sheets on a narrow screen. Zoom the combined overview and larger detail sheets for fine labels. Choose **Fit** in the inspection viewer if a remembered zoom level crops the drawing. Physical connector mating and assembled behavior remain unverified.

### buttons — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J2 — GADGETEER Y CHAIN | 1 | `+3V3` |
| J2 — GADGETEER Y CHAIN | 2 | `+5V` |
| J2 — GADGETEER Y CHAIN | 3 | `/CHAIN_BTN1` |
| J2 — GADGETEER Y CHAIN | 4 | `/CHAIN_BTN2` |
| J2 — GADGETEER Y CHAIN | 5 | `/CHAIN_BTN3` |
| J2 — GADGETEER Y CHAIN | 6 | `/CHAIN_BTN4` |
| J2 — GADGETEER Y CHAIN | 7 | `/CHAIN_BTN5` |
| J2 — GADGETEER Y CHAIN | 8 | `/CHAIN_BTN6` |
| J2 — GADGETEER Y CHAIN | 9 | `/CHAIN_BTN7` |
| J2 — GADGETEER Y CHAIN | 10 | `GND` |
| J1 — GADGETEER Y IN | 1 | `+3V3` |
| J1 — GADGETEER Y IN | 2 | `+5V` |
| J1 — GADGETEER Y IN | 3 | `/BTN1_OUT` |
| J1 — GADGETEER Y IN | 4 | `/BTN2_OUT` |
| J1 — GADGETEER Y IN | 5 | `/BTN3_OUT` |
| J1 — GADGETEER Y IN | 6 | `/BTN4_OUT` |
| J1 — GADGETEER Y IN | 7 | `/BTN5_OUT` |
| J1 — GADGETEER Y IN | 8 | `/BTN6_OUT` |
| J1 — GADGETEER Y IN | 9 | `/BTN7_OUT` |
| J1 — GADGETEER Y IN | 10 | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-connector-detail-01" src="/images/extensions/button-boards/guides/reader-connector-detail-01.png" title="Connector detail 01 — v14" alt="button-boards v14 connector detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-link-detail-01" src="/images/extensions/button-boards/guides/reader-link-detail-01.png" title="Link detail 01 — v14" alt="button-boards v14 link detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>


### Links, controls and indicators

JP1–JP7 can connect the seven local button-output nets to the corresponding chain nets. All seven selected source footprints are **open**, so button signals do not reach J2 through these links until deliberately bridged. Supply rails and ground continue separately. Inspect the actual board before relying on that source default. A chained board shares each bridged button net; a second push-pull source must not drive it. This selected board has no LED indication circuit.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| SW6 | B3FS-1000P | 1 = /BTN6_SW; 2 = GND |
| SW1 | B3FS-1000P | 1 = /BTN1_SW; 2 = GND |
| SW4 | B3FS-1000P | 1 = /BTN4_SW; 2 = GND |
| JP5 | CHAIN 5 | 1 = /BTN5_OUT; 2 = /CHAIN_BTN5 |
| JP3 | CHAIN 3 | 1 = /BTN3_OUT; 2 = /CHAIN_BTN3 |
| JP7 | CHAIN 7 | 1 = /BTN7_OUT; 2 = /CHAIN_BTN7 |
| SW5 | B3FS-1000P | 1 = /BTN5_SW; 2 = GND |
| JP4 | CHAIN 4 | 1 = /BTN4_OUT; 2 = /CHAIN_BTN4 |
| SW3 | B3FS-1000P | 1 = /BTN3_SW; 2 = GND |
| SW2 | B3FS-1000P | 1 = /BTN2_SW; 2 = GND |
| JP6 | CHAIN 6 | 1 = /BTN6_OUT; 2 = /CHAIN_BTN6 |
| JP2 | CHAIN 2 | 1 = /BTN2_OUT; 2 = /CHAIN_BTN2 |
| JP1 | CHAIN 1 | 1 = /BTN1_OUT; 2 = /CHAIN_BTN1 |
| SW7 | B3FS-1000P | 1 = /BTN7_SW; 2 = GND |

</details>


Selected active-component identities: no U-designated ICs in this saved PCB. These identities are not a substitute for matching datasheet limits.


</details>

## Practical use with Smoothieboard V2 Prime

> **Keep the assembly unpowered while checking connections.** This complete ribbon attaches all seven GPIOs and both supply rails. The drawings locate native pads; they do not qualify a fitted plug, keying or manufactured cable.

Use the overview to locate the cable, the two contact keys to verify every position, and the numbered close-ups for the fine Prime escape. Fine board labels in the overview require these detail views.

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-button-v14-ten-core-overview" src="/images/extensions/button-boards/guides/ten-core-ribbon/button-ten-core-overview.png" title="Complete seven-button ten-core connection" alt="Complete seven-button ten-core connection; source-numbered Prime P11 and Button Boards v14 contacts." caption="Prime P11 J37 to Button v14 J1 IN. Grey is the ten-core jacket; red marks the intended contact-1 edge. Verify actual fit and all ten connections while unpowered; J2 stays unused and JP1–JP7 open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-prime-j37-core-terminations" src="/images/extensions/button-boards/guides/ten-core-ribbon/prime-j37-core-terminations.png" title="Prime P11 J37 — ten separate terminations" alt="Prime P11 J37 — ten separate terminations; source-numbered Prime P11 and Button Boards v14 contacts." caption="Native pads connect separately to numbered logical plug positions. Front-coordinate view, not a qualified cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-button-j1-ten-core-terminations" src="/images/extensions/button-boards/guides/ten-core-ribbon/button-j1-ten-core-terminations.png" title="Button v14 J1 — ten separate terminations" alt="Button v14 J1 — ten separate terminations; source-numbered Prime P11 and Button Boards v14 contacts." caption="Each stub starts at its native J1 pad. The proposed connector projection does not establish manufactured fit or orientation." width=420 %}

<details markdown="1">
<summary>Follow the Prime cable path in five readable close-ups</summary>

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-01-prime-j37-to-one" src="/images/extensions/button-boards/guides/ten-core-ribbon/01-prime-j37-to-one.png" title="Prime cable path — view 1 of 5" alt="Prime cable path — view 1 of 5; source-numbered Prime P11 and Button Boards v14 contacts." caption="Follow matching continuation numbers in order. Source artwork remains unchanged; the corrected path passes around the filled serial text." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-02-one-around-bank-to-two" src="/images/extensions/button-boards/guides/ten-core-ribbon/02-one-around-bank-to-two.png" title="Prime cable path — view 2 of 5" alt="Prime cable path — view 2 of 5; source-numbered Prime P11 and Button Boards v14 contacts." caption="Follow matching continuation numbers in order. Source artwork remains unchanged; the corrected path passes around the filled serial text." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-03-two-right-descent-to-three" src="/images/extensions/button-boards/guides/ten-core-ribbon/03-two-right-descent-to-three.png" title="Prime cable path — view 3 of 5" alt="Prime cable path — view 3 of 5; source-numbered Prime P11 and Button Boards v14 contacts." caption="Follow matching continuation numbers in order. Source artwork remains unchanged; the corrected path passes around the filled serial text." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-04-three-lower-turn-to-four" src="/images/extensions/button-boards/guides/ten-core-ribbon/04-three-lower-turn-to-four.png" title="Prime cable path — view 4 of 5" alt="Prime cable path — view 4 of 5; source-numbered Prime P11 and Button Boards v14 contacts." caption="Follow matching continuation numbers in order. Source artwork remains unchanged; the corrected path passes around the filled serial text." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-05-four-to-ribbon-jacket" src="/images/extensions/button-boards/guides/ten-core-ribbon/05-four-to-ribbon-jacket.png" title="Prime cable path — view 5 of 5" alt="Prime cable path — view 5 of 5; source-numbered Prime P11 and Button Boards v14 contacts." caption="Follow matching continuation numbers in order. Source artwork remains unchanged; the corrected path passes around the filled serial text." width=420 %}

</details>

{% include _includes/extension-instruction-diagram.html id="button-v14-ten-core-button-v14-seven-controls" src="/images/extensions/button-boards/guides/ten-core-ribbon/button-seven-controls.png" title="Seven button positions and unused chain connection" alt="Seven button positions and unused chain connection; source-numbered Prime P11 and Button Boards v14 contacts." caption="SW1–SW3 top; SW4–SW6 middle; SW7 bottom. Leave J2 unused and JP1–JP7 open. J2 supply contacts remain connected despite open signal links." width=420 %}

This conditional example uses a ten-contact straight-through cable from the documented Prime P11 J37 connector to button-board v14 J1. It connects **all seven button circuits**, even when you intend to press only SW1. Before connecting, remove conflicting assignments on PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2 and establish that all seven are GPIO inputs (the example enables pull-ups) in the selected firmware configuration. A different Prime revision requires its own checked contact map.

The connector drawings locate native PCB pads. They do not qualify a manufactured cable's mating face, keying or continuity. Use a correctly mating assembly, identify contact 1 at both ends, and verify every numbered connection while unpowered; the red cable edge alone does not prove continuity.

On a narrow screen, scroll the contact schedule horizontally to read all four columns. Longer descriptions wrap within their column.

<div class="extension-contact-table" role="region" aria-label="Ten-core ribbon contact schedule; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Ribbon core | Prime J37 | Button-board J1 | Use in this example |
| --- | --- | --- | --- |
| 1 | Limited 3.3 V | +3V3 | Seven pull-up/filter networks |
| 2 | Limited 5 V | +5V | Physically connected; forwarded to J2.2/TP3, no external load |
| 3 | PB1 | BTN1_OUT | SW1 |
| 4 | PJ4 | BTN2_OUT | SW2 |
| 5 | PA4 | BTN3_OUT | SW3 |
| 6 | PG0 | BTN4_OUT | SW4 |
| 7 | PJ3 | BTN5_OUT | SW5 |
| 8 | PG1 | BTN6_OUT | SW6 |
| 9 | PJ2 | BTN7_OUT | SW7 |
| 10 | Ground | Ground | Common return |
{: style="table-layout: fixed !important; width: 640px;"}

</div>

1. Disconnect power from the controller and board. Leave J2 unused and check that JP1–JP7 are open. J2's supply contacts pass through directly; opening these seven signal links does not disconnect J2's rails.
2. Verify all ten cable positions against the schedule and the matching native-contact details. Do not apply a different revision's connector orientation by analogy.
3. Resolve every existing assignment on all seven GPIOs. The example below creates seven input buttons; it does not arbitrate conflicts with other firmware modules. Check both supply rails and the selected controller's available rail budget before applying power. No numerical load or fitted-connector qualification is established here.
4. Test with machine loads disabled. Release all buttons before startup, then check each button individually and in combination. Pressing any of the seven invokes a software halt in this example; releasing a button does not clear that halt. Check disconnected-cable behavior separately. This board is a user interface, not a safety-rated emergency-stop system.

## Configure all seven inputs

The reviewed V2 button-box implementation creates a separate `Pin::AS_INPUT` for each enabled named entry and accepts `KILL` as the press action. Configure all seven physically connected signals deliberately. This is checked against source, not tested on the physical board or the firmware currently installed on your controller.

```ini
[button box]
extension_button_1.enable = true
extension_button_1.pin = PB1!^
extension_button_1.press = KILL

extension_button_2.enable = true
extension_button_2.pin = PJ4!^
extension_button_2.press = KILL

extension_button_3.enable = true
extension_button_3.pin = PA4!^
extension_button_3.press = KILL

extension_button_4.enable = true
extension_button_4.pin = PG0!^
extension_button_4.press = KILL

extension_button_5.enable = true
extension_button_5.pin = PJ3!^
extension_button_5.press = KILL

extension_button_6.enable = true
extension_button_6.pin = PG1!^
extension_button_6.press = KILL

extension_button_7.enable = true
extension_button_7.pin = PJ2!^
extension_button_7.press = KILL

```

`!` makes the grounded button active and `^` selects the host pull-up; the board also has its own 10 kΩ pull-ups. A button held at startup can invoke its first press action. This software halt is not an independent hardware stop. If your intended function requires support absent from Smoothieware, email **wolf.arthur@gamil.com** with the board revision and intended connections.

The seven-input parser, input-mode creation, pin suffixes and software halt are checked against [pinned V2 Button Box source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp) and the [pin parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp). This does not identify the installed firmware or prove hardware operation.

<details markdown="1">
<summary>Alternative three-lead SW1 example and earlier cable studies</summary>

This alternative connects only contacts 1, 3 and 10, leaving all other contacts physically disconnected. Its single-input configuration must not be used as the configuration for the complete ten-core ribbon above. Its older mixed-revision illustrations retain their stated limitations.

## Alternative three-lead connection to Smoothieboard V2 Prime {#alternative-three-lead-connection-to-smoothieboard-v2-prime}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-integral-installation" src="/images/extensions/button-boards/guides/native-contact/button-native-reader.png" title="Use onboard button SW1" alt="Three individual leads connect Prime J37 and Button Board J1 contacts 1, 3 and 10; onboard SW1 pulls PB1 LOW." caption="Three solid external leads attach to actual connector-art odd/even row details. All twenty contact instances are retained; whole-board locators identify their positions. Onboard SW1, R1, R8 and C1 remain the selected circuit. No 5 V or chain lead. P11 artwork uses checked P12 J37 allocation; contact keys are front-coordinate projections, not mating faces." width=2000 %}

### Enlarged installation contact numbers

Use these enlarged keys with the complete circuit above. Filled contacts are selected for this example; open contacts stay unused. Jumper keys identify the selected solder bridge. These sheets do not replace the circuit or establish cable mating-face orientation.

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-installation-key-j1" src="/images/extensions/button-boards/guides/native-contact/J1-numbered-pads.png" title="J1 contact numbers for this installation" alt="Enlarged component-side pad positions for J1; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-installation-key-j37" src="/images/extensions/button-boards/guides/native-contact/J37-numbered-pads.png" title="J37 contact numbers for this installation" alt="Enlarged component-side pad positions for J37; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

The example uses SW1 as a source-checked software halt input on P12 Prime2590 GF/J37 contact 3 (PB1). The remaining six inputs must stay unallocated or be deliberately configured.

The compact diagram above shows the selected three-lead network; physical mating and actual reader verification remain open. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. Power off. Connect three individual leads: **GF/J37.1 → J1.1 (3.3 V)**, **GF/J37.3 → J1.3 (PB1)** and **GF/J37.10 → J1.10 (ground)**. Leave contact 2 (5 V) and contacts 4–9 unconnected. Verify each lead against the numbered component-side pad views before applying power.
2. Leave J2 unused for the initial test; do not attach another device that drives any shared button line.
3. Confirm PB1 is free. The selected SW1/R1/R8/C1 path supports the active-low button convention; physical assembled behavior still needs verification.
4. With machine loads disabled, check that releasing SW1 is inactive and pressing it invokes the configured action; also check simultaneous presses and a disconnected cable.

## Smoothieware use

The V2 buttonbox module parses the real [button box] section, a named enable flag, pin and press action. The example below configures only SW1; it does not reserve or configure the other six contacts. It is source-checked, not tested on this physical board.

The buttonbox and pin-parser behavior below is checked against upstream V2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This identifies the reviewed source, not the firmware installed on a user's controller or physical board operation.

The following is a **source-checked candidate** for the single PB1 button example, pending the selected circuit/cable review described above:

```ini
[button box]
extension_button.enable = true
extension_button.pin = PB1!^
extension_button.press = KILL
```

`^` selects the internal pull-up and `!` makes a grounded input active. `KILL` invokes a software halt; it is not a safety-rated emergency-stop circuit. Resolve the existing PB1 allocation first, including external-driver examples that already use PB1. Test inactive, pressed and disconnected states with machine loads disabled.

The selected button syntax and press/release behavior were also checked against [upstream V2 buttonbox source at a pinned revision](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp) and its [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp). This identifies the reviewed implementation, not the installed firmware. Startup with the button held can invoke the first press action; releasing it does not unhalt the machine.

If your intended device or function requires Smoothieware support that is absent, email **wolf.arthur@gamil.com** with the board revision and intended connections. An unresolved electrical interface is not evidence that firmware support exists.


<details markdown="1">
<summary>Earlier full-cable electrical layouts</summary>

These older full-cable illustrations are retained for comparison. Use the complete seven-input ribbon procedure in the main guide, or use only the explicitly isolated three-lead SW1 alternative within this section. Do not combine the single-input configuration with a full ten-core cable.

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-integral-installation-retained-alternative" src="/images/extensions/button-boards/guides/prime-source-located-installation.png" title="Earlier source comparison — unqualified installation" alt="Source-numbered Prime, extension board and selected peripheral with continuous autorouted electrical paths." caption="Retained source comparison only; follow the selected three-lead native-contact procedure above. This earlier layout does not qualify native attachment or a fitted cable." width=1950 %}

{% include _includes/extension-instruction-diagram.html src="/images/extensions/button-boards/guides/button-boards-button1-wiring.png" id="button-boards-v14-wiring" title="Selected practical wiring — v14" alt="Prime GF/J37 cable to button-board J1 and onboard SW1 through its series resistor, pull-up and filter capacitors." caption="Electrical schematic candidate using P11 Prime artwork and source-verified P12 GF/J37 assignments. Numbered banks show electrical identities rather than physical cavities. Verify cable continuity and pin 1; physical mating and native attachment remain unqualified." width="1950" %}

</details>


### Match the numbered cable contacts

{% include _includes/extension-instruction-diagram.html id="button-boards-v14-orientation" src="/images/extensions/button-boards/guides/button-boards-connector-orientation.png" title="Component-side connector numbering and cable continuity" alt="Exact native PCB pad-centre layout of Prime GF J37 and the module input, with red pad 1 and all ten numbered conductor identities." caption="Component/front-side PCB views, uniformly enlarged eight times. Match pad numbers end to end; circles locate pad centres and do not depict connector cavities. No mating-face view or ribbon stripe is inferred." width=1200 %}


</details>

## Check the configured input before using machine loads

Keep machine loads disabled while checking the example. These are the expected consequences of the source-checked pull-up, inversion and `KILL` action, not recorded hardware test results.

<div class="table-wrapper" markdown="1">

<div class="extension-contact-table" role="region" aria-label="Configured input checks; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Condition | Expected result | If it differs |
| --- | --- | --- |
| Button released | Input is inactive; no new press action | Check for a short to ground, a normally-closed switch or incorrect input inversion. |
| Button pressed | Input becomes active and requests a software halt | Check the numbered signal and ground contacts, configured pin and pin-allocation errors. |
| Button released after a halt | Halt remains set; release does not resume the machine | The example has no release action. Follow the controller's normal recovery procedure only after resolving the cause. |
| Signal wire disconnected | The host pull-up normally leaves the input inactive | This arrangement does not detect a broken signal wire; do not use it as a fail-safe stop circuit. |
| Button held during startup | The first active sample may request a halt | Release buttons before startup; do not assume a release-and-press cycle is required. |

</div>

</div>

Check each of SW1–SW7 separately against the contact schedule, then check simultaneous presses. All seven entries deliberately use the same halt action in this example; a halted controller alone cannot identify which button was pressed. Verify contact identity with the unpowered continuity checks before assigning different machine actions.

## Sources and revision notes

[Download the matching v14 CAD study](/assets/downloads/extensions/button-boards/button-boards-cad-study.zip) for the editable PCB and schematic, project libraries, retained exports and canonical board artwork. Directory v14 retains PCB title revision v10 and schematic title revision v05. Open the complete extracted project hierarchy in KiCad 9 with its standard libraries installed; see `SOURCE-NOTES.txt` for dependencies, attribution and licence notices. Native CAD is unchanged; only workstation-location metadata in the exported netlist is portable. This study does not qualify fabrication, connector mating or physical operation.

The upstream engineering links below were unavailable to anonymous readers when checked and remain provenance links. Firmware sources are separate from this retained board download.

- [Selected v14 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/button-boards/attempt/versions/v14)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/button-boards/design.md)
- [All extension boards](/extension-boards)

The upstream specification and design-discussion links returned 404 when checked; the matching CAD download above is available locally.

The selected PCB, retained netlist and a fresh export of the selected schematic have matching connected-contact assignments for all seven channels. Their different title revisions are retained in the download. **Remaining board-specific uncertainty:** physical debounce, fitted component values, cable mating, assembled continuity and button/chain operation have not been qualified. Source agreement does not establish hardware operation.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="button-boards" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
