---
layout: default
title: "Buzzer module"
permalink: /extensions/buzzer-module
---

# Buzzer module

This small active-buzzer board makes a steady audible cue when its control signal is HIGH. Use it for an ordinary end-of-job indication or a bench output check. The buzzer supplies its own tone; it is not a programmable speaker or a guaranteed safety alarm.

This guide selects **v14** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v14 source package retains schematic title-block revision **v10**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1.3 and alternate header J3.3 feed the control path through the selected diode-OR arrangement. JP1 chooses the buzzer's 5 V supply source. J2 is a chain connector and JP2 controls forwarding of the consumed contact-3 signal.

The selected schematic specifies **BZ1 CMI-1295-0585T** from Same Sky (formerly CUI Devices), an internally driven magnetic buzzer. Its positive terminal connects to the selected 5 V rail; its negative terminal reaches the drain of **Q1 DMN2056U-7**, an N-channel MOSFET. The saved symbol numbers Q1 as 1 = gate, 2 = source and 3 = drain; source pin 2 connects to ground. R2 is the 100 Ω gate-series resistor, and R1 is the 10 kΩ pull-down on the diode-OR output. This source topology switches buzzer power locally rather than sourcing its current from a GPIO.

## Power, signals and limits

J3 is explicitly Ground/5V/Signal: pin 1 ground, pin 2 header 5 V and pin 3 control. Do not substitute the Signal/Ground/5V order used on some other extension boards. JP1 positions 1–2 select Gadgeteer 5 V; 2–3 select header 5 V. Do not bridge both sources. The [selected buzzer datasheet](https://www.sameskydevices.com/product/resource/cmi-1295-0585t.pdf) specifies 5 V nominal and **30 mA maximum at rated voltage**, not 30 mA typical. If the PDF is unavailable in your reader, Same Sky’s [manufacturer product page (Japanese)](https://jp.sameskydevices.com/product/audio/buzzers/audio-indicators/cmi-1295-0585t) also lists the part specifications and provides a datasheet link. Budget that buzzer load on the host’s 5 V supply, together with this board’s other consumption and every other attached load. This component figure is not an available-current rating for the Prime rail, cable or assembled board. The [DMN2056U datasheet](https://www.diodes.com/datasheet/download/DMN2056U.pdf) identifies the N-channel device; its transistor current rating does not establish the board’s usable load rating. Sound output, actual gate drive after the diode and assembled operation remain unqualified.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-overview" src="/images/extensions/buzzer-module/guides/reader-compact-overview.png" title="Active buzzer module — overview" alt="Active buzzer module — overview for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reference" src="/images/extensions/buzzer-module/guides/reader-reference.png" title="Annotated board reference — v14" alt="buzzer-module v14 annotated board reference, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>

Start with the overview, then use the focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-host-input-1-5" src="/images/extensions/buzzer-module/guides/reader-compact-host-input-1-5-central-pills.png" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5 for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-host-input-6-10" src="/images/extensions/buzzer-module/guides/reader-compact-host-input-6-10-central-pills.png" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10 for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-chain-output-1-5" src="/images/extensions/buzzer-module/guides/reader-compact-chain-output-1-5-central-pills.png" title="J2 · Chain output — chain output 1 5" alt="J2 · Chain output — chain output 1 5 for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-chain-output-6-10" src="/images/extensions/buzzer-module/guides/reader-compact-chain-output-6-10-central-pills.png" title="J2 · Chain output — chain output 6 10" alt="J2 · Chain output — chain output 6 10 for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-alternate-input-1-3" src="/images/extensions/buzzer-module/guides/reader-compact-alternate-input-1-3-central-pills.png" title="J3 · Alternate input — alternate input 1 3" alt="J3 · Alternate input — alternate input 1 3 for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-buzzer-control" src="/images/extensions/buzzer-module/guides/reader-compact-buzzer-control.png" title="Buzzer control — buzzer control" alt="Buzzer control — buzzer control for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-supply-selector" src="/images/extensions/buzzer-module/guides/reader-compact-supply-selector.png" title="Buzzer supply selector — supply selector" alt="Buzzer supply selector — supply selector for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-control-chain-link" src="/images/extensions/buzzer-module/guides/reader-compact-control-chain-link.png" title="Control chain link — control chain link" alt="Control chain link — control chain link for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-test-pads" src="/images/extensions/buzzer-module/guides/reader-compact-test-pads-underside-caption.png" title="Test pads — test pads" alt="Test pads — test pads for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-reader-compact-mounting-holes" src="/images/extensions/buzzer-module/guides/reader-compact-mounting-holes.png" title="Mounting holes — mounting holes" alt="Mounting holes — mounting holes for buzzer-module v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

Use the annotated reference sheets and contact details together with the complete circuit below. Their contact numbers describe the saved PCB; verify the fitted connector orientation and cable continuity before wiring.

### buzzer-module — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J3 — BUZZER IN (GND 5V SIG) | 1 | `GND` |
| J3 — BUZZER IN (GND 5V SIG) | 2 | `/+5V_HDR` |
| J3 — BUZZER IN (GND 5V SIG) | 3 | `/SIG_HDR` |
| J2 — Y CHAIN | 1 | `+3V3` |
| J2 — Y CHAIN | 2 | `+5V` |
| J2 — Y CHAIN | 3 | `/CHAIN_P3` |
| J2 — Y CHAIN | 4 | `/G_P4` |
| J2 — Y CHAIN | 5 | `/G_P5` |
| J2 — Y CHAIN | 6 | `/G_P6` |
| J2 — Y CHAIN | 7 | `/G_P7` |
| J2 — Y CHAIN | 8 | `/G_P8` |
| J2 — Y CHAIN | 9 | `/G_P9` |
| J2 — Y CHAIN | 10 | `GND` |
| J1 — Y IN (host) | 1 | `+3V3` |
| J1 — Y IN (host) | 2 | `+5V` |
| J1 — Y IN (host) | 3 | `/Y_P3` |
| J1 — Y IN (host) | 4 | `/G_P4` |
| J1 — Y IN (host) | 5 | `/G_P5` |
| J1 — Y IN (host) | 6 | `/G_P6` |
| J1 — Y IN (host) | 7 | `/G_P7` |
| J1 — Y IN (host) | 8 | `/G_P8` |
| J1 — Y IN (host) | 9 | `/G_P9` |
| J1 — Y IN (host) | 10 | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-connector-detail-01" src="/images/extensions/buzzer-module/guides/reader-connector-detail-01.png" title="Connector detail 01 — v14" alt="buzzer-module v14 connector detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-connector-detail-02" src="/images/extensions/buzzer-module/guides/reader-connector-detail-02.png" title="Connector detail 02 — v14" alt="buzzer-module v14 connector detail 02, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-link-detail-01" src="/images/extensions/buzzer-module/guides/reader-link-detail-01.png" title="Link detail 01 — v14" alt="buzzer-module v14 link detail 01, with source-numbered features." caption="Component-side source reference. Dotted leaders locate parts and are not wires. Use the numbered detail views together; mating orientation and assembled ratings remain unqualified." width=1440 %}

</details>


### Links, controls and indicators

JP1 selects one 5 V source: bridge 1–2 for Gadgeteer power or 2–3 for the alternate header. Keep the other pair open to avoid joining two supplies. The selected source footprint has 1–2 bridged; to use header power, disconnect power and open that bridge before joining 2–3. JP2 is bridged in the selected source footprint. JP2 connects the host's contact-3 control signal to the chain; leave the chain unused for the initial example. Inspect the actual assembled links before applying power.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP1 | 5V SOURCE (1-2 GAD, 2-3 HDR) | 1 = +5V; 2 = /+5V_BUZ; 3 = /+5V_HDR |
| JP2 | CHAIN P3 | 1 = /Y_P3; 2 = /CHAIN_P3 |


</details>

## Practical use with Smoothieboard V2 Prime

The main view keeps both complete boards visible. The ten-core cable connects each numbered Prime GF/J37 contact to the same-numbered J1 contact. The onboard sounder uses contact 2 for 5 V, contact 3 for PB1 control and contact 10 for ground; the other contacts reach the board’s unused chain interface. Leave J2 and J3 disconnected for this example.

The selected J1 footprint identifies a Samtec SHF-105-01-L-D-TH-LC header. In its unrotated PCB-front view, the notch is on the lower edge, the odd-numbered row is below the even-numbered row, and pin 1 is at the lower left. Read the numbered PCB pad keys in that view; looking into a loose socket gives a different view.

[Samtec specifies FFSD or FFTP mates without strain relief for this header](https://www.samtec.com/products/shf-105-01-l-d-th-lc). The [FFSD family has several wiring arrangements](https://www.samtec.com/products/ffsd), so a grey ribbon and red edge alone do not establish a straight-through cable. The required electrical schedule is J37.1 to J1.1 through J37.10 to J1.10.

Prime J37 is specified only by a generic 1.27 mm SMD header footprint in the checked sources. Its two rows of PCB copper-pad centres are 3.90 mm apart; those solder lands are not socket cavities. The source does not identify the host header's manufacturer part number or post length. The dashed outline in the overview therefore locates a symbolic connection, rather than specifying a purchasable plug or its mating-face orientation.

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-whole-circuit" src="/images/extensions/buzzer-module/guides/whole-circuit/buzzer-whole-circuit.png" title="Prime and buzzer — complete boards and cable" alt="Complete Prime and v14 buzzer board joined by a grey ten-core ribbon with red pin-one edge; the sounder and driver are on the module." caption="Numbered electrical connection study on a source-scaled 5 mm grid. All ten remote contact positions match the selected native PCB; the supply uses JP1 1–2. Dashed yellow outlines are proposed plug locations, not qualified mating geometry. Verify the actual numbered cable continuity and fitted links. Connector fit, cable clearance on the assembled boards, available rail capacity and powered operation remain unqualified." width=6800 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-host-entry-detail" src="/images/extensions/buzzer-module/guides/whole-circuit/prime-j37-entry-detail.png" title="Prime J37 cable entry detail" alt="Enlarged source-exact host cable entry from the complete buzzer wiring diagram, with the grey cable entering the dashed symbolic plug." caption="Exact enlargement of the same wiring drawing. Follow the grey cable into the symbolic plug and use the numbered contact keys below. This is a board-side electrical illustration, not a mating-face view." width=800 %}

<details markdown="1">
<summary>Three individual leads — alternative contact detail</summary>

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-compact-installation" src="/images/extensions/buzzer-module/guides/native-contact/buzzer-native-reader.png" title="Sound the onboard buzzer" alt="Three individual leads connect J37 and J1 contacts 2, 3 and 10; the selected solder bridge supplies onboard BZ1 from limited host 5 V." caption="Three solid external leads attach to actual connector-art odd/even row details. All native contacts remain visible. Keep the source factory JP1 1–2 bridge and leave 2–3 open; onboard BZ1 and its driver remain the selected circuit. P11 artwork uses checked P12 J37 allocation; keys are front-coordinate projections, not mating faces." width=2000 %}

This alternative connects only contacts 2, 3 and 10. It shows separated source connector rows for legibility; the complete-board cable above preserves the board context. Do not combine this loose-lead alternative with a second supply on J3.

</details>

### Enlarged installation contact numbers

Use these enlarged keys with the complete circuit above. Filled contacts identify the three functions used by the buzzer. The full ten-core cable also connects the other numbered contacts to the unused chain interface; in the individual-lead alternative those other contacts remain disconnected. Jumper keys identify the selected solder bridge. These sheets do not replace the circuit or establish cable mating-face orientation.

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-installation-key-j1" src="/images/extensions/buzzer-module/guides/native-contact/J1-numbered-pads.png" title="J1 contact numbers for this installation" alt="Enlarged component-side pad positions for J1; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-installation-key-j37" src="/images/extensions/buzzer-module/guides/native-contact/J37-numbered-pads.png" title="J37 contact numbers for this installation" alt="Enlarged component-side pad positions for J37; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-installation-key-jp1" src="/images/extensions/buzzer-module/guides/native-contact/JP1-numbered-pads.png" title="JP1 contact numbers for this installation" alt="Enlarged component-side pad positions for JP1; filled contacts are selected in the complete circuit." caption="Read with the complete wiring diagram above. This preserves native relative pad positions and numbering. It is a PCB front-coordinate projection, not a cable mating-face drawing; verify the actual connector orientation before wiring." width=420 %}

<details markdown="1">
<summary>Retained full-cable illustration</summary>

{% include _includes/extension-instruction-diagram.html id="buzzer-module-v14-prime-installation" src="/images/extensions/buzzer-module/guides/prime-installation-wiring.png" title="Prime to buzzer module: installation cable" alt="Ten continuous conductors connect each numbered Prime GF/J37 contact to the matching extension input contact, with both source board abstracts and the onboard peripheral shown." caption="Selected-source electrical schematic with an integral numbered connector symbol. The source uses two-row 1.27 mm pads; symbols use one column at 20 mm depicted pitch for clarity. P11 Prime artwork is shown; checked P12 GF/J37 contact identities agree. This is not a mating-face view. Use the selected onboard peripheral and link instructions below. Complete artwork audit and physical orientation remain open." width=1950 %}

</details>

The example turns the buzzer on and off from an ordinary V2 digital switch command using P12 Prime2590 GF/J37.3 (PB1).

**Review boundary:** the whole-board drawing shows the ten-core cable and onboard sounder; the optional contact detail shows the three-lead alternative. Source/paint and actual reader acceptance are tracked separately. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. With power off, choose the Gadgeteer supply using only JP1 positions 1–2, after checking the selected connector's pin-1 marker. Leave J3 unconnected.
2. For the complete cable, connect GF/J37.1–10 to the matching J1.1–10 positions and verify each numbered conductor with power removed; the red edge identifies the intended pin-1 side only after that check. Contacts 2, 3 and 10 supply limited host 5 V, PB1 control and ground. If using individual leads instead, connect only those three matching positions and leave the other input contacts disconnected. Verify the host rail budget before power.
3. Leave J2 unused for the initial test. Ensure PB1 is free and no other M106.9/M107.9 switch instance conflicts with the example.
4. Start with the output inactive, send M106.9 to request sound, then M107.9 to stop. Test halt/reset/disconnect behavior before relying on an audible notification.

## Smoothieware use

The verified V2 switch configuration supports a digital output and named M-code on/off commands. This uses the board's own active tone; no audio driver or tone-frequency setting is implied. Do not use a PWM servo output or external load supply in place of the shown 5 V source.

Configuration field names in this example were checked against upstream V2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This identifies parser syntax, not the user's installed firmware, pin ownership or physical operation.

Merge these fields into the configuration’s existing single `[switch]` section, keeping its other switch entries; do not add a duplicate section. The `bench_buzzer` name, PB1 and command subcode 9 must be free. The following configures the conditional PB1 active-high control example. Native v14 connects J1.3 and J3.3 to the two BAT54C anodes; its common cathode feeds the MOSFET gate through 100 Ω, with a 10 kΩ pull-down before that resistor. A HIGH requests the local low-side switch to conduct. Use one control source for the initial test; diode drops, actual gate drive, supply limits and sound output still require electrical qualification:

```ini
[switch]
bench_buzzer.enable = true
bench_buzzer.output_pin = PB1
bench_buzzer.output_type = digital
bench_buzzer.input_on_command = M106
bench_buzzer.input_off_command = M107
bench_buzzer.startup_state = false
bench_buzzer.subcode = 9
bench_buzzer.halt_set_to = false
```

Use these command assignments only when no existing switch/fan configuration consumes them. With loads disabled, M106.9 requests sound and M107.9 requests silence. Verify actual halt/reset behavior; do not infer it from startup_state.


The [reviewed V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) matches the retained source byte for byte. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output. This identifies source behavior, not the installed firmware or tested hardware.

### Check the buzzer commands

With machine loads disabled, begin with `M107.9`, request sound with `M106.9`, then send `M107.9` again. Allow each command to complete before the next. These are the expected consequences of the example configuration and source circuit, not recorded measurements:

<div class="extension-contact-table" role="region" aria-label="Buzzer command checks; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Condition | Expected logical state | Check if the result differs |
| --- | --- | --- |
| Configuration loaded | PB1 LOW; buzzer requested off | Confirm `startup_state = false`, the selected pin and exclusive ownership. Reset and bootloader intervals require a separate electrical check. |
| `M106.9` | PB1 HIGH; buzzer requested on | If the pin changes but no sound occurs, check J1.2/J1.10, JP1 1–2, the fitted buzzer polarity and the local driver. |
| `M107.9` | PB1 LOW; buzzer requested off | Check for a conflicting command assignment or a second active control source on J3.3. |
| Firmware halt | Logical output forced off by `halt_set_to = false` | Verify the actual halted electrical state separately; a firmware setting does not cover reset, loss of power or cable disconnection. |

</div>

Disconnect power before changing links or moving a cable. J3 remains unused in this example, so another signal cannot keep the diode-OR control active after PB1 goes LOW.

If your intended device or function requires Smoothieware support that is absent, email **wolf.arthur@gamil.com** with the board revision and intended connections. An unresolved electrical interface is not evidence that firmware support exists.

## Sources and revision notes

[Download the matching v14 CAD study](/assets/downloads/extensions/buzzer-module/buzzer-module-cad-study.zip) for the editable PCB and schematic, project libraries, retained exports and canonical board artwork. Directory v14 retains PCB and schematic title revision v10. Open the complete extracted project hierarchy in KiCad 9 with its standard libraries installed; see `SOURCE-NOTES.txt` for dependencies, attribution and licence notices. Native CAD is unchanged; only workstation-location metadata in the exported netlist is portable. The optional connector 3D model is omitted because its redistribution licence is unestablished; the PCB and schematic remain editable, while the 3D viewer may report the missing body. Download size: 346,507 bytes. This study does not qualify fabrication, connector mating or physical operation.

The upstream engineering links below were unavailable to anonymous readers when checked and remain provenance links. Firmware sources are separate from this retained board download.

- [Selected v14 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/buzzer-module/attempt/versions/v14)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/design.md)
- [All extension boards](/extension-boards)

The upstream specification and design-discussion links returned 404 when checked; the matching CAD download above is available locally.

The selected PCB, retained netlist and a fresh schematic export agree on all **47 connected component contacts**. The schematic’s fitted-part fields identify BZ1 and Q1 as described above; this establishes the selected source population, not the parts actually fitted to a manufactured board.

**Remaining board-specific uncertainty:** Available host rail budget, fitted-part verification, cable mating and measured sound, inactive/reset and power-loss behavior remain unqualified.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

Selected active-component identities: no U-designated ICs in this saved PCB. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="buzzer-module" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
