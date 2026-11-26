---
layout: default
title: "D-sub-to-Gadgeteer OUT adapter"
permalink: /extensions/d-sub-to-gadgeteer-out
---

# D-sub-to-Gadgeteer OUT adapter

OUT is the remote half of the custom IN-to-OUT DE-9 extension. It delivers the seven transported signals and 5 V, and creates a local 3.3 V rail for a compatible downstream module. It is not a general-purpose serial adapter.

J1 receives the dedicated nine-conductor cable. The TPS70933 regulator derives LOCAL_3V3 from cable 5 V. J2 presents the remote Gadgeteer interface and J3 branches contacts 8/9 and the locally generated 3.3 V rail into a four-contact connector. It is a Qwiic interface only if the chosen host assigns contact 8 to SDA and contact 9 to SCL. Signal paths are copper paths with protection components, not a direction-detecting data repeater.

## Power, signals and limits

J1 DE-9 contacts 1/2/3/4/6/7/8 carry Gadgeteer signals 3/4/5/6/7/8/9; contact 5 is ground and 9 cable 5 V. J2.1 is locally generated 3.3 V, not the controller's 3.3 V rail. Do not drive either remote rail from an external supply. Never connect RS-232/Ethernet/another host.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-overview" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-overview.png" title="DE-9 adapter · remote — overview" alt="DE-9 adapter · remote — overview" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reference" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for d-sub-to-gadgeteer-out" caption="Component-side reference. Dotted leaders locate parts and are not wiring." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-gadgeteer-1-5" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-gadgeteer-1-5-central-pills.png" title="J2 · Gadgeteer — gadgeteer 1 5" alt="J2 · Gadgeteer — gadgeteer 1 5" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-gadgeteer-6-10" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-gadgeteer-6-10-central-pills.png" title="J2 · Gadgeteer — gadgeteer 6 10" alt="J2 · Gadgeteer — gadgeteer 6 10" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-custom-de9-1-5" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-custom-de9-1-5-central-pills.png" title="J1 · Custom DE-9 — custom de9 1 5" alt="J1 · Custom DE-9 — custom de9 1 5" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-custom-de9-6-9" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-custom-de9-6-9-central-pills.png" title="J1 · Custom DE-9 — custom de9 6 9" alt="J1 · Custom DE-9 — custom de9 6 9" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-four-pin-breakout-1-4" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-four-pin-breakout-1-4-central-pills.png" title="J3 · 4-pin breakout — four pin breakout 1 4" alt="J3 · 4-pin breakout — four pin breakout 1 4" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-signal-protection-2-5" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-signal-protection-2-5.png" title="Signal protection — signal protection 2 5" alt="Signal protection — signal protection 2 5" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-signal-protection-6-8" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-signal-protection-6-8.png" title="Signal protection — signal protection 6 8" alt="Signal protection — signal protection 6 8" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-supply-protection" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-supply-protection-underside-caption.png" title="Cable supply protector — supply protection" alt="Cable supply protector — supply protection" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-breakout-pads" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-breakout-pads-underside-caption.png" title="Four-contact pad groups — breakout pads" alt="Four-contact pad groups — breakout pads" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-regulator" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-regulator-underside-caption.png" title="Local 3.3 V regulator — regulator" alt="Local 3.3 V regulator — regulator" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-reader-compact-test-pads" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-compact-test-pads.png" title="Test pads — test pads" alt="Test pads — test pads" caption=" Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

### Connector contacts

Contact numbering below is the PCB's pad numbering, viewed using the board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. `NC` means unconnected, not a spare. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J2 — SHF-105-01-L-D-TH | 1 | `LOCAL_3V3` |
| J2 — SHF-105-01-L-D-TH | 2 | `CABLE_5V` |
| J2 — SHF-105-01-L-D-TH | 3 | `SIG3` |
| J2 — SHF-105-01-L-D-TH | 4 | `SIG4` |
| J2 — SHF-105-01-L-D-TH | 5 | `SIG5` |
| J2 — SHF-105-01-L-D-TH | 6 | `SIG6` |
| J2 — SHF-105-01-L-D-TH | 7 | `SIG7` |
| J2 — SHF-105-01-L-D-TH | 8 | `SIG8` |
| J2 — SHF-105-01-L-D-TH | 9 | `SIG9` |
| J2 — SHF-105-01-L-D-TH | 10 | `GND` |
| J1 — DE-9 SOCKET | 1 | `SIG3` |
| J1 — DE-9 SOCKET | 2 | `SIG4` |
| J1 — DE-9 SOCKET | 3 | `SIG5` |
| J1 — DE-9 SOCKET | 4 | `SIG6` |
| J1 — DE-9 SOCKET | 5 | `GND` |
| J1 — DE-9 SOCKET | 6 | `SIG7` |
| J1 — DE-9 SOCKET | 7 | `SIG8` |
| J1 — DE-9 SOCKET | 8 | `SIG9` |
| J1 — DE-9 SOCKET | 9 | `CABLE_5V` |
| J3 — QWIIC I-ONLY | 1 | `GND` |
| J3 — QWIIC I-ONLY | 2 | `LOCAL_3V3` |
| J3 — QWIIC I-ONLY | 3 | `SIG8` |
| J3 — QWIIC I-ONLY | 4 | `SIG9` |
| J3 — QWIIC I-ONLY | MP | `GND` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-connector-detail-01" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for d-sub-to-gadgeteer-out" caption="Component-side reference. Dotted leaders locate parts and are not wiring." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-to-gadgeteer-out-v26-connector-detail-02" src="/images/extensions/d-sub-to-gadgeteer-out/guides/reader-connector-detail-02.png" title="Connector detail 02" alt="Connector detail 02 for d-sub-to-gadgeteer-out" caption="Component-side reference. Dotted leaders locate parts and are not wiring." width=1440 %}

</details>

Active components: `U1 TPS70933DBVR 3.3V`. These identities are not a substitute for matching datasheet limits.

</details>

## Practical use with Smoothieboard V2 Prime

The example connects a normally-open dry button through the OUT board alone. Use four individual leads; the regulator and all supply contacts remain unpowered. No IN board, serial cable or powered peripheral is required.

{% include _includes/extension-instruction-diagram.html id="d-sub-out-v26-compact-main" src="/images/extensions/d-sub-to-gadgeteer-out/guides/compact-individual-leads.png" title="Prime to DE-9 OUT and dry button" alt="Prime to DE-9 OUT and dry button for the normally-open dry-contact example" caption="Four individual external leads, with both supply rails disconnected. PCB contact projections are not cable mating-face drawings. Not an RS-232 interface." width=420 %}

1. With power removed, connect **Prime GF/J37.3 (PB1) to DE-9 J1.1 (SIG3)** and **GF/J37.10 (ground) to DE-9 J1.5**. Use identified individual contacts; do not attach a straight-through serial cable or a computer serial port.
2. Connect the two normally-open button terminals to **Gadgeteer J2.3 (SIG3)** and **J2.10 (ground)**. D2 is the existing signal-to-ground transient clamp; no board pull-up or series resistor is assumed.
3. Leave DE-9 J1.9 **CABLE_5V**, Gadgeteer J2.1 **LOCAL_3V3**, J2.2, every other signal and J3 Qwiic unused. This example does not energize the local regulator.
4. Reserve PB1 and use its pull-up as shown below. Released reads HIGH and pressed reads LOW. A disconnected button also reads released; this wiring does not detect a broken cable. Test with machine loads disabled before using an action.

### Locate the contacts

Read all three PCB contact keys with the complete diagram. Filled contacts are used; the others stay unused. Confirm actual numbering and cable orientation before connecting hardware.

{% include _includes/extension-instruction-diagram.html id="d-sub-out-v26-compact-j37" src="/images/extensions/d-sub-to-gadgeteer-out/guides/compact-J37-numbered-pads.png" title="Prime GF / J37" alt="Prime GF / J37 for the normally-open dry-contact example" caption="Four individual external leads, with both supply rails disconnected. PCB contact projections are not cable mating-face drawings. Not an RS-232 interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-out-v26-compact-j1" src="/images/extensions/d-sub-to-gadgeteer-out/guides/compact-J1-numbered-pads.png" title="Adapter DE-9 J1" alt="Adapter DE-9 J1 for the normally-open dry-contact example" caption="Four individual external leads, with both supply rails disconnected. PCB contact projections are not cable mating-face drawings. Not an RS-232 interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="d-sub-out-v26-compact-j2" src="/images/extensions/d-sub-to-gadgeteer-out/guides/compact-J2-numbered-pads.png" title="Adapter Gadgeteer J2" alt="Adapter Gadgeteer J2 for the normally-open dry-contact example" caption="Four individual external leads, with both supply rails disconnected. PCB contact projections are not cable mating-face drawings. Not an RS-232 interface." width=420 %}

<details markdown="1">
<summary>Paired IN and OUT path with power rails</summary>

This view carries a dry button through the **IN and OUT** boards, including the rail paths. It is not the four-lead installation above; do not power it without checking the cable, regulator enable and rail budget.

{% include _includes/extension-instruction-diagram.html id="dsub-pair-v24-v26-installation" src="/images/extensions/d-sub-to-gadgeteer-out/guides/paired-installation-wiring.png" title="Prime, DE-9 IN, OUT and normally-open button" alt="Paired connection with ten Prime conductors, nine custom DE-9 conductors and two dry-button wires." caption="Twenty-one electrical conductors; output local 3.3 V is unused." width=4800 %}

The view contains these connections:

- All ten Prime GF/J37 contacts are represented at matching IN J1 contacts, including supply rails.
- All nine IN DE-9 J2 contacts are represented at same-numbered OUT DE-9 J1 contacts. This is a custom GPIO mapping, not RS-232 or a null-modem mapping.
- The button path is Prime J37.3/PB1 → IN J1.3 → IN J2.1 → OUT J1.1 → OUT J2.3; the return uses DE-9 contact 5 and OUT J2.10.
- OUT J2.1 is the regulator’s LOCAL_3V3 output, not a pass-through Prime rail. The comparison includes Prime 5 V at DE-9 contact 9 and the regulator input; check regulator behavior, rail budget and sensor loads before powering.

The drawing's separate connector symbols preserve electrical numbering; they are not mating-face views. Confirm cable continuity, orientation and supply allowance before connecting hardware. A powered I²C sensor is a separate installation requiring its exact driver, bus loading, pull-up and supply review.

</details>

## Smoothieware use

The adapters require no control protocol. The button uses the [V2 buttonbox parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L125):

```ini
[button box]
extension_button.enable = true
extension_button.pin = PB1!^
extension_button.press = KILL
```

`^` enables the pull-up and `!` makes the grounded button active. `KILL` requests a software halt, not a safety-rated emergency stop. Merge the example into the complete configuration without assigning PB1 twice.  The adapters add no serial baud setting or automatic I²C support.

- [Design source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/d-sub-to-gadgeteer-out/attempt/versions/v26)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/d-sub-to-gadgeteer-out/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Supplementary board views</summary>

{% include _includes/extension-board-visuals.html slug="d-sub-to-gadgeteer-out" %}

</details>
