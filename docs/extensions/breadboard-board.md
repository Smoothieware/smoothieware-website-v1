---
layout: default
title: "Breadboard board"
permalink: /extensions/breadboard-board
---

# Breadboard board

This board exposes seven Gadgeteer GPIO contacts and protected supply rails on a breadboard-friendly eleven-contact header. Use it for low-voltage bench circuits and dry-contact experiments. It does not add GPIO or make breadboard wiring suitable for motor current.

## How it works

J1 signals pass through the source's interface/protection network to J2 contacts 5–11. In the selected source, R9 = 330 Ω joins HOST_GPIO1 to BB_GPIO1, so the example's J2.5 button reaches host contact 3 through that series resistor. Separate TPS2553 circuits feed the breadboard 5 V and 3.3 V rails. JP1/JP2 control the supply enables; green power and amber overcurrent LEDs are separately disableable with cut links. Signal contacts remain host GPIO whose mode is set in firmware.

## Power, signals and limits

J2.1 is breadboard 5 V, .2 ground, .3 breadboard 3.3 V, .4 ground; .5–.11 correspond to host contacts 3–9. Those two supply rows must never be bridged. The limiter component's presence does not establish the assembled board's output current or external-supply backfeed tolerance. Do not attach a second breadboard supply until source selection and reverse paths have been verified.

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

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-overview" src="/images/extensions/breadboard-board/guides/reader-compact-overview.png" title="Breadboard carrier — overview" alt="Breadboard carrier — overview for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

<details markdown="1">
<summary>Larger combined reference</summary>

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reference" src="/images/extensions/breadboard-board/guides/reader-reference.png" title="Annotated board reference" alt="Annotated board reference for breadboard-board" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views and check connector fitting, signal directions and link defaults." width=1440 %}

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

<details markdown="1">
<summary>Focused contact and component sheets</summary>

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-host-input-1-5" src="/images/extensions/breadboard-board/guides/reader-compact-host-input-1-5-central-pills.png" title="J1 · Host input — host input 1 5" alt="J1 · Host input — host input 1 5 for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-host-input-6-10" src="/images/extensions/breadboard-board/guides/reader-compact-host-input-6-10-central-pills.png" title="J1 · Host input — host input 6 10" alt="J1 · Host input — host input 6 10 for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-breadboard-header-1-5" src="/images/extensions/breadboard-board/guides/reader-compact-breadboard-header-1-5-central-pills.png" title="J2 · Breadboard — breadboard header 1 5" alt="J2 · Breadboard — breadboard header 1 5 for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-breadboard-header-6-10" src="/images/extensions/breadboard-board/guides/reader-compact-breadboard-header-6-10-central-pills.png" title="J2 · Breadboard — breadboard header 6 10" alt="J2 · Breadboard — breadboard header 6 10 for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-breadboard-header-11-11" src="/images/extensions/breadboard-board/guides/reader-compact-breadboard-header-11-11-central-pills.png" title="J2 · Breadboard — breadboard header 11 11" alt="J2 · Breadboard — breadboard header 11 11 for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-5v-switch" src="/images/extensions/breadboard-board/guides/reader-compact-5v-switch.png" title="5 V rail switch — 5v switch" alt="5 V rail switch — 5v switch for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-3v3-switch" src="/images/extensions/breadboard-board/guides/reader-compact-3v3-switch.png" title="3.3 V rail switch — 3v3 switch" alt="3.3 V rail switch — 3v3 switch for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-power-leds" src="/images/extensions/breadboard-board/guides/reader-compact-power-leds.png" title="Output power LEDs — power leds" alt="Output power LEDs — power leds for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-fault-leds" src="/images/extensions/breadboard-board/guides/reader-compact-fault-leds.png" title="Rail fault LEDs — fault leds" alt="Rail fault LEDs — fault leds for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-gpio-paths" src="/images/extensions/breadboard-board/guides/reader-compact-gpio-paths.png" title="GPIO signal paths — gpio paths" alt="GPIO signal paths — gpio paths for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-output-test-pads" src="/images/extensions/breadboard-board/guides/reader-compact-output-test-pads.png" title="Output test pads — output test pads" alt="Output test pads — output test pads for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-host-test-pads" src="/images/extensions/breadboard-board/guides/reader-compact-host-test-pads.png" title="Host supply test pads — host test pads" alt="Host supply test pads — host test pads for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-reader-compact-mounts" src="/images/extensions/breadboard-board/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for breadboard-board" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

</details>

### breadboard — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J1 — GADGETEER Y IN | 1 | `/HOST_3V3` |
| J1 — GADGETEER Y IN | 2 | `/HOST_5V` |
| J1 — GADGETEER Y IN | 3 | `/HOST_GPIO1` |
| J1 — GADGETEER Y IN | 4 | `/HOST_GPIO2` |
| J1 — GADGETEER Y IN | 5 | `/HOST_GPIO3` |
| J1 — GADGETEER Y IN | 6 | `/HOST_GPIO4` |
| J1 — GADGETEER Y IN | 7 | `/HOST_GPIO5` |
| J1 — GADGETEER Y IN | 8 | `/HOST_GPIO6` |
| J1 — GADGETEER Y IN | 9 | `/HOST_GPIO7` |
| J1 — GADGETEER Y IN | 10 | `GND` |
| J2 — BREADBOARD 1x11 | 1 | `/BB_5V` |
| J2 — BREADBOARD 1x11 | 2 | `GND` |
| J2 — BREADBOARD 1x11 | 3 | `/BB_3V3` |
| J2 — BREADBOARD 1x11 | 4 | `GND` |
| J2 — BREADBOARD 1x11 | 5 | `/BB_GPIO1` |
| J2 — BREADBOARD 1x11 | 6 | `/BB_GPIO2` |
| J2 — BREADBOARD 1x11 | 7 | `/BB_GPIO3` |
| J2 — BREADBOARD 1x11 | 8 | `/BB_GPIO4` |
| J2 — BREADBOARD 1x11 | 9 | `/BB_GPIO5` |
| J2 — BREADBOARD 1x11 | 10 | `/BB_GPIO6` |
| J2 — BREADBOARD 1x11 | 11 | `/BB_GPIO7` |

</div>

<details markdown="1">
<summary>Combined connector and link details</summary>

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-connector-detail-01" src="/images/extensions/breadboard-board/guides/reader-connector-detail-01.png" title="Connector detail 01" alt="Connector detail 01 for breadboard-board" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views and check connector fitting, signal directions and link defaults." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-board-v18-link-detail-01" src="/images/extensions/breadboard-board/guides/reader-link-detail-01.png" title="Link detail 01" alt="Link detail 01 for breadboard-board" caption="Component-side reference. Dotted leaders locate parts, not wires. Use all numbered detail views and check connector fitting, signal directions and link defaults." width=1440 %}

</details>

### Links, controls and indicators

A cut-to-disable LED link affects only the indication, not the protected circuit. Check each link before cutting or bridging it.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP3 | CUT TO DISABLE D3 | 1 = LED_D3_DISABLE; 2 = /LED_OC5 |
| D3 | AMBER 5V OC | 1 = /FAULT_5V_N; 2 = LED_D3_DISABLE |
| JP4 | CUT TO DISABLE D1 | 1 = LED_D1_DISABLE; 2 = /LED_PWR5 |
| D4 | AMBER 3V3 OC | 1 = /FAULT_3V3_N; 2 = LED_D4_DISABLE |
| JP5 | CUT TO DISABLE D4 | 1 = LED_D4_DISABLE; 2 = /LED_OC3 |
| D1 | GREEN 5V PWR | 1 = GND; 2 = LED_D1_DISABLE |
| JP6 | CUT TO DISABLE D2 | 1 = LED_D2_DISABLE; 2 = /LED_PWR3 |
| D2 | GREEN 3V3 PWR | 1 = GND; 2 = LED_D2_DISABLE |
| JP2 | 3V3_EN | 1 = /HOST_3V3; 2 = /EN_3V3 |
| JP1 | 5V_EN | 1 = /HOST_5V; 2 = /EN_5V |

</details>

Selected active-component identities: `U1 TPS2553`; `U2 TPS2553`; `U3 TPD4E1U06`; `U4 TPD4E1U06`. These identities are not a substitute for matching datasheet limits.

</details>

## Practical use with Smoothieboard V2 Prime

The practical example is one normally-open dry-contact button between J2.5 and J2.2, without drawing either supply rail.

Read the complete native-contact circuit with all four contact keys. Four solid paths are external leads; three dashed paths explain existing PCB connections through the actual R9 330 Ω resistor pads and ground. They are not extra wires to install. J2 is rotated 180° in the route; its keys retain the source contact order. Dashed orange locators identify each crop on the whole-board abstracts. The Prime artwork is P11 with the selected P12 GF/J37 allocation. All supply inputs and switched outputs remain unused.

{% include _includes/extension-instruction-diagram.html id="breadboard-native-0" src="/images/extensions/breadboard-board/guides/native-contact/breadboard-native-reader.png" title="Prime and breadboard carrier — dry-button native-contact circuit" alt="Prime and breadboard carrier — dry-button native-contact circuit" caption="Four external leads; dashed PCB relationships include R9 330 Ω. PB1 pull-up: released HIGH, pressed LOW. All supply rails unused." width=900 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-native-1" src="/images/extensions/breadboard-board/guides/native-contact/reader-contact-keys/J37-numbered-pads.png" title="Prime GF/J37 — complete contact key" alt="Prime GF/J37 — complete contact key" caption="Four external leads; dashed PCB relationships include R9 330 Ω. PB1 pull-up: released HIGH, pressed LOW. All supply rails unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-native-2" src="/images/extensions/breadboard-board/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Carrier J1 — complete contact key" alt="Carrier J1 — complete contact key" caption="Four external leads; dashed PCB relationships include R9 330 Ω. PB1 pull-up: released HIGH, pressed LOW. All supply rails unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-native-3" src="/images/extensions/breadboard-board/guides/native-contact/reader-contact-keys/J2-1-6-numbered-pads.png" title="Carrier J2 contacts 1–6" alt="Carrier J2 contacts 1–6" caption="Four external leads; dashed PCB relationships include R9 330 Ω. PB1 pull-up: released HIGH, pressed LOW. All supply rails unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="breadboard-native-4" src="/images/extensions/breadboard-board/guides/native-contact/reader-contact-keys/J2-7-11-numbered-pads.png" title="Carrier J2 contacts 7–11" alt="Carrier J2 contacts 7–11" caption="Four external leads; dashed PCB relationships include R9 330 Ω. PB1 pull-up: released HIGH, pressed LOW. All supply rails unused." width=420 %}


Connect only Prime GF/J37.3 PB1 → J1.3 and GF/J37.10 ground → J1.10, then J2.5 signal and J2.2 ground to the two contacts of a normally-open dry button. R9 remains the source 330 Ω series resistor between host and breadboard signal nets. Enable the Prime PB1 input pull-up: open at rest reads HIGH; pressing the button reads LOW. The carrier has no signal pull-up resistor. J2.1 switched 5 V and J2.3 switched 3.3 V remain unused. Verify physical header numbering and cable orientation before connecting hardware.

1. Power off and verify the eleven-contact header orientation against J2 numbering. Check the breadboard's actual row connectivity before inserting it.
2. Use two individually verified leads from P12 Prime2590 GF/J37 to J1: contact 3 to 3, and contact 10 to 10. Leave host/J1 supply contacts 1 and 2 disconnected; all other contacts are unused.
3. Connect the isolated button between J2.5 (BB_GPIO1) and J2.2 (GND). Leave all other signal rows and supply outputs unloaded for this example.
4. Confirm PB1 is unused in the complete machine configuration; enable its internal pull-up and invert the grounded contact as shown below.

## Smoothieware use

This carrier needs no board-specific communications driver. The selected GPIO button example uses the V2 buttonbox parser and PB1 input syntax. Check the supply-limit settings before use.

Configuration field names in this example follow upstream V2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[button box]
extension_button.enable = true
extension_button.pin = PB1!^
extension_button.press = KILL
```

`^` selects the internal pull-up and `!` makes a grounded input active. `KILL` invokes a software halt; it is not a safety-rated emergency-stop circuit. Resolve the existing PB1 allocation first, including external-driver examples that already use PB1. Test inactive, pressed and disconnected states with machine loads disabled.

An unresolved electrical interface is not evidence that firmware support exists.

## Sources

- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/breadboard-board/attempt/versions/v18)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/breadboard-board/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="breadboard-board" %}

</details>
