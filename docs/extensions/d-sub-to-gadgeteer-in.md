---
layout: default
title: "D-sub-to-Gadgeteer IN adapter"
permalink: /extensions/d-sub-to-gadgeteer-in
---

# D-sub-to-Gadgeteer IN adapter

IN is the host-side half of a dedicated DE-9 cable extension. It transports seven logic contacts, 5 V and ground to the matching OUT board. IN names the power-flow direction; the seven copper signal paths retain the direction imposed by the attached devices.

This guide selects **v24** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v24 source package retains schematic title-block revisions **v12**; **v11**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1 is the host Gadgeteer interface and J2 the male DE-9 custom cable interface. The cable does not transport host 3.3 V; OUT regenerates its own 3.3 V from the delivered 5 V. J3 branches host contacts 8/9 and host 3.3 V into a four-contact connector. Use it as a Qwiic interface only after establishing that contact 8 is SDA and contact 9 is SCL on the chosen host; the connector label cannot assign those functions.

## Power, signals and limits

The DE-9 map is 1→signal3, 2→signal4, 3→signal5, 4→signal6, 5→GND, 6→signal7, 7→signal8, 8→signal9, 9→5 V. This is not RS-232, isolation or level translation. Never connect a computer serial port, serial cable or null modem. A short or incorrect cable can apply power to an MCU signal. Cable length, load current, voltage drop and bus speed must be bounded for the actual peripheral.

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

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-overview" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-overview.png" title="DE-9 adapter · host — overview" alt="DE-9 adapter · host — overview for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reference" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-reference.png" title="Annotated board reference — v24" alt="Annotated board reference for d-sub-to-gadgeteer-in" caption="Source-bound component-side reference. Dotted leaders locate parts and are not wiring. Physical mating, voltage qualification and actual page-viewer review remain open." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>


{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-gadgeteer-1-5" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-gadgeteer-1-5-central-pills.png" title="J1 · Gadgeteer — gadgeteer 1 5" alt="J1 · Gadgeteer — gadgeteer 1 5 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-gadgeteer-6-10" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-gadgeteer-6-10-central-pills.png" title="J1 · Gadgeteer — gadgeteer 6 10" alt="J1 · Gadgeteer — gadgeteer 6 10 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-custom-de9-1-5" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-custom-de9-1-5-central-pills.png" title="J2 · Custom DE-9 — custom de9 1 5" alt="J2 · Custom DE-9 — custom de9 1 5 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-custom-de9-6-9" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-custom-de9-6-9-central-pills.png" title="J2 · Custom DE-9 — custom de9 6 9" alt="J2 · Custom DE-9 — custom de9 6 9 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-four-pin-breakout-1-4" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-four-pin-breakout-1-4-central-pills.png" title="J3 · 4-pin breakout — four pin breakout 1 4" alt="J3 · 4-pin breakout — four pin breakout 1 4 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-signal-protection-2-5" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-signal-protection-2-5.png" title="Signal protection — signal protection 2 5" alt="Signal protection — signal protection 2 5 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-signal-protection-6-8" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-signal-protection-6-8.png" title="Signal protection — signal protection 6 8" alt="Signal protection — signal protection 6 8 for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-supply-protection" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-supply-protection-underside-caption.png" title="Cable supply protector — supply protection" alt="Cable supply protector — supply protection for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-breakout-pads" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-breakout-pads-underside-caption.png" title="Four-contact pad groups — breakout pads" alt="Four-contact pad groups — breakout pads for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-reader-compact-test-pads" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-compact-test-pads.png" title="Test pads — test pads" alt="Test pads — test pads for d-sub-to-gadgeteer-in v24" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

These annotated references explain the selected revision; the complete practical wiring diagram and desktop/narrow viewer checks remain incomplete.

### d-sub-to-gadgeteer-in — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J1 — SHF-105-01-L-D-TH | 1 | `HOST_3V3` |
| J1 — SHF-105-01-L-D-TH | 2 | `HOST_5V` |
| J1 — SHF-105-01-L-D-TH | 3 | `SIG3` |
| J1 — SHF-105-01-L-D-TH | 4 | `SIG4` |
| J1 — SHF-105-01-L-D-TH | 5 | `SIG5` |
| J1 — SHF-105-01-L-D-TH | 6 | `SIG6` |
| J1 — SHF-105-01-L-D-TH | 7 | `SIG7` |
| J1 — SHF-105-01-L-D-TH | 8 | `SIG8` |
| J1 — SHF-105-01-L-D-TH | 9 | `SIG9` |
| J1 — SHF-105-01-L-D-TH | 10 | `GND` |
| J2 — DE-9 PINS | 1 | `SIG3` |
| J2 — DE-9 PINS | 2 | `SIG4` |
| J2 — DE-9 PINS | 3 | `SIG5` |
| J2 — DE-9 PINS | 4 | `SIG6` |
| J2 — DE-9 PINS | 5 | `GND` |
| J2 — DE-9 PINS | 6 | `SIG7` |
| J2 — DE-9 PINS | 7 | `SIG8` |
| J2 — DE-9 PINS | 8 | `SIG9` |
| J2 — DE-9 PINS | 9 | `HOST_5V` |
| J3 — QWIIC I-ONLY | 1 | `GND` |
| J3 — QWIIC I-ONLY | 2 | `HOST_3V3` |
| J3 — QWIIC I-ONLY | 3 | `SIG8` |
| J3 — QWIIC I-ONLY | 4 | `SIG9` |
| J3 — QWIIC I-ONLY | MP | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-connector-detail-01" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-connector-detail-01.png" title="Connector detail 01 — v24" alt="Connector detail 01 for d-sub-to-gadgeteer-in" caption="Source-bound component-side reference. Dotted leaders locate parts and are not wiring. Physical mating, voltage qualification and actual page-viewer review remain open." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-in-v24-connector-detail-02" src="/images/extensions/d-sub-to-gadgeteer-in/guides/reader-connector-detail-02.png" title="Connector detail 02 — v24" alt="Connector detail 02 for d-sub-to-gadgeteer-in" caption="Source-bound component-side reference. Dotted leaders locate parts and are not wiring. Physical mating, voltage qualification and actual page-viewer review remain open." width=1440 %}

</details>


Selected active-component identities: no U-designated ICs in this saved PCB. These identities are not a substitute for matching datasheet limits.


</details>

## Practical use with Smoothieboard V2 Prime

The selected example is a normally-open dry button on the custom DE-9 connector. This uses GPIO only; no remote adapter, sensor power or serial protocol is required.

{% include _includes/extension-instruction-diagram.html id="d-sub-in-v24-compact-main" src="/images/extensions/d-sub-to-gadgeteer-in/guides/compact-individual-leads.png" title="Prime to DE-9 input and dry button" alt="Prime to DE-9 input and dry button for the v24 normally-open dry-contact example" caption="Four external leads; no power feed. Keys show PCB pad projections, not cable mating faces. Not an RS-232 interface." width=420 %}

### Locate the selected contacts

Use these contact keys with the complete circuit. Filled pads are the selected contacts; leave the others unused.

{% include _includes/extension-instruction-diagram.html id="d-sub-in-v24-compact-j37" src="/images/extensions/d-sub-to-gadgeteer-in/guides/compact-J37-numbered-pads.png" title="Prime GF / J37" alt="Prime GF / J37 for the v24 normally-open dry-contact example" caption="Four external leads; no power feed. Keys show PCB pad projections, not cable mating faces. Not an RS-232 interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-in-v24-compact-j1" src="/images/extensions/d-sub-to-gadgeteer-in/guides/compact-J1-numbered-pads.png" title="Adapter J1" alt="Adapter J1 for the v24 normally-open dry-contact example" caption="Four external leads; no power feed. Keys show PCB pad projections, not cable mating faces. Not an RS-232 interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-in-v24-compact-j2" src="/images/extensions/d-sub-to-gadgeteer-in/guides/compact-J2-numbered-pads.png" title="Adapter DE-9 J2" alt="Adapter DE-9 J2 for the v24 normally-open dry-contact example" caption="Four external leads; no power feed. Keys show PCB pad projections, not cable mating faces. Not an RS-232 interface." width=420 %}

<details markdown="1">
<summary>Additional wide circuit view</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-in-v24-installation" src="/images/extensions/d-sub-to-gadgeteer-in/guides/prime-installation-wiring.png" title="DE-9 IN adapter v24 — normally-open button wiring" alt="Prime GF/J37 connects to J1; DE-9 J2.1 signal and J2.5 ground connect a normally-open button." caption="Source-numbered electrical schematic with retained P11 Prime artwork and checked P12 connector assignment. Physical mating and complete artwork checks remain open." width=1950 %}

The compact plan above uses only the two required host leads. Leave all remaining host and adapter contacts unused for this example.

</details>

1. With power removed, connect **only Prime GF/J37.3 to J1.3** (PB1 / SIG3) and **GF/J37.10 to J1.10** (ground). Leave all other host and J1 contacts unused; do not fit a fully populated ten-wire cable for this example. Confirm actual header numbering and cable orientation; the contact keys are PCB projections, not mating-face views.
2. Connect the two button contacts to DE-9 J2.1 (SIG3, from J1.3/PB1) and J2.5 (ground, from J1.10). The signal path is direct with a D2 transient clamp to ground; this board has no signal pull-up or buffer.
3. Leave J2.9 (host 5 V), every other DE-9 signal and J3 Qwiic unused. Do not connect a computer serial port, external powered device or null modem.
4. Reserve PB1 and enable its internal pull-up. Open at rest reads HIGH; pressing the button grounds the input and reads LOW. Test with machine loads disabled before enabling an action.

A matching OUT board or I²C peripheral is a different installation. It needs a complete cable, local-supply, pull-up and bus-speed analysis; the Qwiic label does not establish long-distance I²C support.

## Smoothieware use

The passive adapter needs no board-specific driver. This GPIO example uses the [pinned V2 buttonbox parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L125):

```ini
[button box]
extension_button.enable = true
extension_button.pin = PB1!^
extension_button.press = KILL
```

`^` enables the input pull-up; `!` makes the grounded button active. `KILL` requests a software halt, not a safety-rated emergency stop. This is source-checked parser syntax and electrical logic, not a tested controller session. Resolve any other PB1 assignment and verify idle, pressed and disconnected states with loads disabled. No DE-9 serial-port or baud setting applies to this GPIO circuit.

If your intended downstream device needs support that is absent, email **wolf.arthur@gamil.com** with its revision and intended use. Select device-specific configuration only after its interface is established.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v24 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/d-sub-to-gadgeteer-in/attempt/versions/v24)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-in/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Exact peripheral and host bus allocation, cable current/length/timing and paired OUT revision compatibility remain open.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="d-sub-to-gadgeteer-in" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
