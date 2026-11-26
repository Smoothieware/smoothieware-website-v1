---
layout: default
title: "Papilio adapter"
permalink: /extensions/papilio-adapter
---

# Papilio adapter

This passive adapter connects selected 3.3 V FPGA wing signals to seven Gadgeteer GPIO positions. It does not program the FPGA or provide an FPGA application. A typical use is a deliberately authored low-speed FPGA peripheral, provided you check its wing model, I/O-bank supply and reset-time direction.

## Interfaces and power

J1 contacts 3–9 are GAD_P3–P9, with 1 host 3.3 V, 2 host 5 V and 10 common ground. J2 is the bottom-mounted eight-signal wing row B0–B7; J3 wing power is 1 ground, 2 unconnected, 3 PAP_3V3, 4 PAP_5V. JP1/JP2 are explicitly open3.3 V/5 V rail links. Do not close them simply because voltages share a name: independent FPGA and host regulators can contend. The board connects J1.3–J1.9 respectively through R1–R7 (each 470 Ω, 1%) to J2.1–J2.7, Wing B0–B6. The eighth Wing signal, J2.8/B7, reaches test point TP8 only and has no Gadgeteer signal channel. These passive resistors do not translate logic levels or establish direction; the host and FPGA configuration must avoid driving against each other. J2 and J3 mount underneath the board, so top-view contact labels must not be copied as a mating-face cable drawing.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Grey: Not routed.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-overview" src="/images/extensions/papilio-adapter/guides/reader-compact-overview-native-testpoints.png" title="Papilio passive wing adapter — overview" alt="Papilio passive wing adapter — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-host-1-5" src="/images/extensions/papilio-adapter/guides/reader-compact-host-1-5-central-pills-native-testpoints.png" title="J1 · Host Y connector — host 1 5" alt="J1 · Host Y connector — host 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-host-6-10" src="/images/extensions/papilio-adapter/guides/reader-compact-host-6-10-central-pills-native-testpoints.png" title="J1 · Host Y connector — host 6 10" alt="J1 · Host Y connector — host 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-wing-1-5" src="/images/extensions/papilio-adapter/guides/reader-compact-wing-1-5-central-pills-native-testpoints.png" title="J2 · Wing I/O underside — wing 1 5" alt="J2 · Wing I/O underside — wing 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-wing-6-8" src="/images/extensions/papilio-adapter/guides/reader-compact-wing-6-8-central-pills-native-testpoints.png" title="J2 · Wing I/O underside — wing 6 8" alt="J2 · Wing I/O underside — wing 6 8" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-power-1-4" src="/images/extensions/papilio-adapter/guides/reader-compact-power-1-4-central-pills-native-testpoints.png" title="J3 · Wing power underside — power 1 4" alt="J3 · Wing power underside — power 1 4" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-signals" src="/images/extensions/papilio-adapter/guides/reader-compact-signals-native-testpoints.png" title="Seven series signal paths — signals" alt="Seven series signal paths — signals" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-3v3-link" src="/images/extensions/papilio-adapter/guides/reader-compact-3v3-link-native-testpoints.png" title="Optional3.3V power tie — 3v3 link" alt="Optional3.3V power tie — 3v3 link" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-5v-link" src="/images/extensions/papilio-adapter/guides/reader-compact-5v-link-native-testpoints.png" title="Optional5V power tie — 5v link" alt="Optional5V power tie — 5v link" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-orientation" src="/images/extensions/papilio-adapter/guides/reader-compact-orientation-underside-caption-native-testpoints.png" title="Connector mounting side — orientation" alt="Connector mounting side — orientation" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-tests1" src="/images/extensions/papilio-adapter/guides/reader-compact-tests1-native-testpoints.png" title="Signal and ground tests — tests1" alt="Signal and ground tests — tests1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-tests6" src="/images/extensions/papilio-adapter/guides/reader-compact-tests6-native-testpoints.png" title="Signal and ground tests — tests6" alt="Signal and ground tests — tests6" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-adapter-v17-reader-compact-mounts" src="/images/extensions/papilio-adapter/guides/reader-compact-mounts-native-testpoints.png" title="Mounting holes — mounts" alt="Mounting holes — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

Read the overview and all focused sheets together.

The following is the board's pad-to-net list. Net labels identify circuit nodes; they are not wire colours or voltage/current ratings. Unconnected contacts must remain unused. Duplicate physical pads with the same contact number are alternative lands, not extra channels. Check the selector bridges on your board before altering them.

<details markdown="1">
<summary>Connector contact table</summary>

<div class="extension-contact-table" role="region" aria-label="Connector contacts; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Board / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| papilio-adapter / J1 | GADGETEER Y (to Smoothie) | Connector | 1: /HOST_3V3; 2: /HOST_5V; 3: /GAD_P3; 4: /GAD_P4; 5: /GAD_P5; 6: /GAD_P6; 7: /GAD_P7; 8: /GAD_P8; 9: /GAD_P9; 10: GND |
| papilio-adapter / J2 | PAPILIO WING I/O 1x8 (male, bottom-mounted) | Connector | 1: /WING_B0; 2: /WING_B1; 3: /WING_B2; 4: /WING_B3; 5: /WING_B4; 6: /WING_B5; 7: /WING_B6; 8: /WING_B7 |
| papilio-adapter / J3 | PAPILIO WING POWER 1x4 (male, bottom-mounted) | Connector | 1: GND; 2: unconnected-(J3-Pin_2-Pad2); 3: /PAP_3V3; 4: /PAP_5V |
| papilio-adapter / TP1 | GAD_P3 (observe) | Observation only | 1: /GAD_P3 |
| papilio-adapter / TP10 | GND | Observation only | 1: GND |
| papilio-adapter / TP2 | GAD_P4 (observe) | Observation only | 1: /GAD_P4 |
| papilio-adapter / TP3 | GAD_P5 (observe) | Observation only | 1: /GAD_P5 |
| papilio-adapter / TP4 | GAD_P6 (observe) | Observation only | 1: /GAD_P6 |
| papilio-adapter / TP5 | GAD_P7 (observe) | Observation only | 1: /GAD_P7 |
| papilio-adapter / TP6 | GAD_P8 (observe) | Observation only | 1: /GAD_P8 |
| papilio-adapter / TP7 | GAD_P9 (observe) | Observation only | 1: /GAD_P9 |
| papilio-adapter / TP8 | WING_B7 spare (observe) | Observation only | 1: /WING_B7 |
| papilio-adapter / TP9 | GND | Observation only | 1: GND |
| papilio-adapter / JP1 | 3V3_LINK (open) | Service link/selector | 1: /HOST_3V3; 2: /PAP_3V3 |
| papilio-adapter / JP2 | 5V_LINK (open) | Service link/selector | 1: /HOST_5V; 2: /PAP_5V |

</div>

</details>

## Practical connection to Smoothieboard V2 Prime

### Manual-status example: Omron B3FS-1000, with no FPGA attached

This example uses the adapter's Wing B0 series path to read a locally held pushbutton. It is a useful passive-adapter application; it does not implement the board's intended FPGA protocol or bitstream. Use the **Papilio adapter**, a **Smoothieboard V2 Prime**, one **Omron B3FS-1000** normally-open tactile switch and an external **2.2 kΩ ±1% resistor rated at least 0.125 W**. Keep the switch and wiring local. This is not an endstop, emergency-stop, interlock, wire-break detector, long-cable interface or pulse counter.

Leave **JP1 and JP2 OPEN**, including checking that the assembled board has no bridge. No FPGA, USB bridge, independent supply, 5 V lead or output load is attached. The pull-up is powered directly from Prime J37.1, not from an adapter power contact. Nothing else may drive PB1 or the button node.

The overview below shows both boards and shows all seven external conductors. **N1 is one insulated three-way splice**, joining the resistor output, Wing signal and switch signal. The resistor and switch are electrical symbols, not physical housing drawings. Wire paths show electrical connectivity, not physical cable routing: several paths cross neighboring component outlines. Prime J37 is a vertical, surface-mounted 2 × 5 header with 1.27 mm pitch; the drawing shows its PCB solder-pad projection, not the upright mating contacts. Check the connector exit and cable orientation before assembly. Use the enlarged contact keys for electrical contact identity; do not infer a cable face or a route across the board from these paths.

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-wholeboard" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-intact-boards.png" title="Complete-board seven-lead wiring overview" alt="Intact Smoothieboard V2 Prime and Papilio adapter with seven wires, an external pull-up resistor and normally-open switch" caption="N1 joins W4, W5 and W6. Connect with power removed; leave JP1 and JP2 open and attach no FPGA. Read the contact keys and supply limits before assembly." width=1200 %}

The enlarged circuit below shows connector details, linked by **A/B/C** locators to whole-board thumbnails. Read it with all six contact keys.

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-1" src="/images/extensions/papilio-adapter/guides/manual-status-compact-fit-papilio-compact-source-installation-native-testpoints.png" title="Seven-lead manual-status circuit" alt="Seven-lead manual-status circuit for the no-FPGA manual-status application" caption="Seven continuous external wires; native R1 and board ground complete the internal paths. A/B/C match whole-board locators. No FPGA or 5 V. Read all contact keys and the operating limits before assembly." width=900 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-2" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-j37.png" title="Prime J37: selected input/pull-up/return contacts" alt="Prime J37: selected input/pull-up/return contacts for the no-FPGA manual-status application" caption="Companion to the seven-lead circuit. Follow the contact numbers and the stated projection; this is not a cable mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-3" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-j1.png" title="Papilio J1: signal and return input" alt="Papilio J1: signal and return input for the no-FPGA manual-status application" caption="Companion to the seven-lead circuit. Follow the contact numbers and the stated projection; this is not a cable mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-4" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-j2.png" title="Papilio J2: Wing B0 status input" alt="Papilio J2: Wing B0 status input for the no-FPGA manual-status application" caption="Companion to the seven-lead circuit. Follow the contact numbers and the stated projection; this is not a cable mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-5" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-j3.png" title="Papilio J3: switch ground return" alt="Papilio J3: switch ground return for the no-FPGA manual-status application" caption="Companion to the seven-lead circuit. Follow the contact numbers and the stated projection; this is not a cable mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-6" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-omron.png" title="Omron B3FS-1000: top and matching installation terminal views" alt="Omron B3FS-1000: top and matching installation terminal views for the no-FPGA manual-status application" caption="Manufacturer top view and the matching bottom-terminal view rotated 90 degrees clockwise used in the enlarged circuit are shown side by side. Use terminals 1 and 3; terminals 2 and 4 have no external leads. Terminal numbers are not marked on the physical switch." width=420 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-manual-status-source-detail-7" src="/images/extensions/papilio-adapter/guides/manual-status-source-detail-contact-key-jp1-jp2-native-testpoints.png" title="Papilio JP1/JP2: open jumpers" alt="Papilio JP1/JP2: open jumpers for the no-FPGA manual-status application" caption="Top-copper detail with JP1/JP2 left open. Check assembled continuity with all power removed." width=420 %}

### Assemble exactly seven individual leads

Remove all supplies before assembly. Do not fit a complete 10-wire Gadgeteer cable. Identify numbered contacts from the keys and check continuity; J37 is unshrouded. Papilio J2/J3 are bottom-mounted: detail C shows their bottom-side components in an **unmirrored top-coordinate projection**, not a bottom mating view. The switch key explicitly pairs its top view with the enlarged circuit's bottom-terminal projection. Identify its continuity groups with power removed; do not infer terminal identity from appearance.

Follow **W1–W7** in the complete-board overview. Each item below describes one continuous external lead; the native 470 Ω resistor and ground tracks are already on the adapter.

1. **W1 — status input:** connect **Prime J37.3 (PB1)** to **Papilio J1.3 (GAD_P3)**. The adapter’s native R1, 470 Ω ±1%, continues this signal to J2.1.
2. **W2 — common ground:** connect **Prime J37.10 (GND)** to **Papilio J1.10 (GND)**. The adapter’s ground track also connects to J3.1.
3. **W3 — pull-up supply:** connect **Prime J37.1 (limited 3.3 V)** to **external resistor terminal 1**. This is the sole pull-up source; it does not feed an adapter power contact.
4. **W4 — resistor output:** connect **external resistor terminal 2** to the **insulated three-way splice N1**.
5. **W5 — Wing-side signal:** connect **N1** to **Papilio J2.1 (Wing B0)**. This connects the button node to the Wing side of native R1.
6. **W6 — switch signal:** connect **N1** to **Omron terminal 1**.
7. **W7 — switch return:** connect **Omron terminal 3** to **Papilio J3.1 (GND)**.

N1 is a constructed insulated wire splice, not an adapter contact. Insulate resistor joints. Omron terminals 1/2 are common and 3/4 are common; pressing joins the groups. Use 1 and 3 across the groups.

Leave unused: Prime J37.2 and .4–9; Papilio J1.1/.2/.4–9, J2.2–8, J3.2–4 and all test pads; Omron terminals 2/4. In particular, do not energize the adapter's host/wing power rails or close either supply jumper.

<details markdown="1">
<summary>Trace one lead at a time: W1–W7</summary>

Each view keeps the complete circuit and emphasizes one continuous lead. **OFF means remove all supplies before wiring.** R pin 1/2 are the two ends of the external 2.2 kΩ resistor; switch 1/3 are the Omron terminals identified in its contact key. Read the exact endpoints with the numbered instructions and enlarged contact keys. The thin paths need zoom to inspect; check cable clearance above components and mating orientation yourself.

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w1" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w1.png" title="W1: status input · PB1" alt="Complete Prime and Papilio circuit with lead W1 emphasized and its endpoints in the heading" caption="W1 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w2" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w2.png" title="W2: common ground" alt="Complete Prime and Papilio circuit with lead W2 emphasized and its endpoints in the heading" caption="W2 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w3" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w3.png" title="W3: pull-up supply" alt="Complete Prime and Papilio circuit with lead W3 emphasized and its endpoints in the heading" caption="W3 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w4" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w4.png" title="W4: resistor output" alt="Complete Prime and Papilio circuit with lead W4 emphasized and its endpoints in the heading" caption="W4 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w5" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w5.png" title="W5: Wing B0 signal" alt="Complete Prime and Papilio circuit with lead W5 emphasized and its endpoints in the heading" caption="W5 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w6" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w6.png" title="W6: switch signal" alt="Complete Prime and Papilio circuit with lead W6 emphasized and its endpoints in the heading" caption="W6 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="papilio-v17-trace-w7" src="/images/extensions/papilio-adapter/guides/manual-status-portrait-trace-w7.png" title="W7: switch return" alt="Complete Prime and Papilio circuit with lead W7 emphasized and its endpoints in the heading" caption="W7 of seven external leads. Other leads remain visible in pale context. Power off; leave JP1/JP2 open and attach no FPGA. Use the contact keys to identify physical terminals." width=1200 %}

</details>

### Operating envelope

Use Prime's normal supported power input. For this conditional example, limited 3.3 V must stay within **3.1–3.5 V**, MCU I/O VDD within **3.0–3.6 V**, and the limited rail must never exceed MCU VDD. Reserve **1.62 mA** from the shared limited rail in addition to its other consumers. These are installation conditions.

With the resistor at its tolerance corners, branch current is at most 1.607 mA and resistor dissipation 5.63 mW. Conservatively allocating ST's whole-product leakage term of 10 µA plus this pad's 250 nA to the single input gives released PB1 at least **3.072 V**, above the worst-case **2.52 V** CMOS HIGH threshold, and pressed PB1 at most **0.0051 V**, below the **0.9 V** LOW threshold. The calculation includes the native 470 Ω ±1% series resistor and Omron's initial 100 mΩ maximum contact resistance.

Closed-contact current is at least **1.384 mA**, within Omron's stated 1–50 mA at 3–24 VDC resistive rating. Its separate minimum-applicable-load figure of 10 µA at 1 VDC is a reference value, not the basis of this circuit. Initial contact resistance is not a lifetime guarantee; allow for cable noise and contact ageing, and do not rely on it for industrial noise immunity. A broken wire and a released switch both read HIGH.

## Smoothieware behaviour and commissioning

For this passive input, use the built-in **Switch** module from [SmoothieV2](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003). No Papilio-specific driver or bitstream is required for this manual-status application. Reserve **PB1 exclusively** in the complete machine configuration; it must not also be an output, ADC or another module's input.

Merge these input-only entries into the existing `[switch]` section of the normal Prime configuration; do not create a duplicate section or reuse an instance name:

```ini
[switch]
papilio_status.enable = true
papilio_status.input_pin = PB1-
papilio_status.input_pin_behavior = momentary
```

The `-` suffix disables the HAL's default internal pull-up; the external 2.2 kΩ resistor supplies the defined contact load. No output pin or output command is configured. The Switch module polls at 50 Hz; this does not guarantee switch debouncing.

With power removed, check all seven leads, insulation, contact identities, the two open jumpers and every unused-contact restriction above. Keep all machine loads disabled for commissioning. With the input-only configuration installed, power Prime normally. There is no independently powered peripheral in this example.

From an already-working Prime command console, use the **no-argument state query**:

```text
switch papilio_status
```

Released, the expected reply is `switch papilio_status is 1`. Hold the button for at least **0.1 s** and issue the same query: expect `switch papilio_status is 0`. Release, wait at least **0.1 s** and query again: expect 1. The wait allows for polling and contact bounce; it is not a debounce interval to rely on for other uses. Do not add `on`, `off` or a numeric argument, which requests a state change. No M119, motion or actuator command is needed. If the transition is absent, remove power and investigate continuity and configuration; do not try arbitrary Wing voltages.

### Intended FPGA use

The adapter's intended FPGA application is separate. It requires a known Papilio/wing model, I/O-bank supply and reset-time direction, matching bitstream/protocol and a corresponding Smoothieware application. The board does not supply them, and the manual-status example does not provide FPGA integration.

## Sources

- [PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/attempt/versions/v17/papilio-adapter.kicad_pcb)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/papilio-adapter/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [Omron B3FS datasheet, Cat. A113-E1-06 (2019), ratings and terminal views on printed pages 2–3](https://omronfs.omron.com/en_US/ecb/products/pdf/en-b3fs.pdf)
- [ST STM32H745 datasheet DS12923, Table 59: input thresholds and leakage, including whole-product footnote](https://www.st.com/resource/en/datasheet/stm32h745bi.pdf)
- [Switch input behaviour and polling](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L78-L115)
- [HAL input-pull suffix handling](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L234-L263)
- [No-value switch state query](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L579-L621)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional views</summary>

[Wide complete-board overview](/images/extensions/papilio-adapter/guides/manual-status-intact-boards.png).

{% include _includes/extension-board-visuals.html slug="papilio-adapter" %}

</details>
