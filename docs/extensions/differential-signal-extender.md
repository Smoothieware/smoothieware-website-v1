---
layout: default
title: "Differential signal extender"
permalink: /extensions/differential-signal-extender
---

# Differential signal extender

This is the receiver half of a one-way digital link intended to carry a host output to a remote logic load. It is not a bidirectional sensor extender. A complete installation needs the matching transmitter, cable and remote load contract.

## How it works

The board is a receiver only. It carries a THVD1451 receiver, UCC27517 output driver and TPS613222A boost supply. Cable LINE_HI reaches receiver input B and LINE_LO reaches input A. The UCC27517 stage inverts the receiver result: a valid differential input with HI above LO produces a high SIG_OUT. The boost supply feeds the output driver internally; it is not the supply exported at J1.2.

## Power, signals and limits

J1 is GND/5V/SIG order: pin 1 ground, .2 protected transported 5 V, .3 driven SIG_OUT. J2 uses a dedicated straight-through 8P8C cable; contacts 1/2 are LINE_HI/LINE_LO, 4/5 transported power, 3/6/7/8 ground and shell shield. It is not Ethernet or PoE and has no sensor-return channel. The output driver does not mean a valve or motor coil can be connected directly.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-overview" src="/images/extensions/differential-signal-extender/guides/reader-compact-overview.png" title="Differential signal receiver — overview" alt="Differential signal receiver — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-cable-1-5" src="/images/extensions/differential-signal-extender/guides/reader-compact-cable-1-5-central-pills.png" title="J2 · Cable input — cable 1 5" alt="J2 · Cable input — cable 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-cable-6-SH" src="/images/extensions/differential-signal-extender/guides/reader-compact-cable-6-SH-central-pills.png" title="J2 · Cable input — cable 6 SH" alt="J2 · Cable input — cable 6 SH" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-load-1-3" src="/images/extensions/differential-signal-extender/guides/reader-compact-load-1-3-central-pills.png" title="J1 · Load output — load 1 3" alt="J1 · Load output — load 1 3" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-receiver" src="/images/extensions/differential-signal-extender/guides/reader-compact-receiver.png" title="Receiver and polarity — receiver" alt="Receiver and polarity — receiver" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-driver" src="/images/extensions/differential-signal-extender/guides/reader-compact-driver-underside-caption.png" title="Boosted output driver — driver" alt="Boosted output driver — driver" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-power" src="/images/extensions/differential-signal-extender/guides/reader-compact-power.png" title="Cable power protection — power" alt="Cable power protection — power" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-termination" src="/images/extensions/differential-signal-extender/guides/reader-compact-termination.png" title="Line termination link — termination" alt="Line termination link — termination" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-shield" src="/images/extensions/differential-signal-extender/guides/reader-compact-shield.png" title="Shield bond selector — shield" alt="Shield bond selector — shield" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-output" src="/images/extensions/differential-signal-extender/guides/reader-compact-output.png" title="Output bias and protection — output" alt="Output bias and protection — output" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-power-led" src="/images/extensions/differential-signal-extender/guides/reader-compact-power-led.png" title="Power indicator link — power led" alt="Power indicator link — power led" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-output-led" src="/images/extensions/differential-signal-extender/guides/reader-compact-output-led.png" title="Output-high indicator link — output led" alt="Output-high indicator link — output led" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-tests" src="/images/extensions/differential-signal-extender/guides/reader-compact-tests-underside-caption.png" title="Tests and mounting holes — tests" alt="Tests and mounting holes — tests" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated reference sheets above use the board drawing and numbered contacts. Use every focused sheet together with the connector table.

### dse-rx — connector contacts

Contact numbering below is the PCB pad numbering, viewed using the board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. `NC` means unconnected, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — LOAD G/5V/S OUT | 1 | `GND` |
| J1 — LOAD G/5V/S OUT | 2 | `/+5V_R` |
| J1 — LOAD G/5V/S OUT | 3 | `/SIG_OUT` |
| J2 — CABLE IN 8P8C | 1 | `/LINE_HI` |
| J2 — CABLE IN 8P8C | 2 | `/LINE_LO` |
| J2 — CABLE IN 8P8C | 3 | `GND` |
| J2 — CABLE IN 8P8C | 4 | `/+5V_CABLE` |
| J2 — CABLE IN 8P8C | 5 | `/+5V_CABLE` |
| J2 — CABLE IN 8P8C | 6 | `GND` |
| J2 — CABLE IN 8P8C | 7 | `GND` |
| J2 — CABLE IN 8P8C | 8 | `GND` |
| J2 — CABLE IN 8P8C | SH | `/SHIELD` |

</div>

</details>

### Links, controls and indicators

The footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit. Check each link against the schematic and parts list before cutting or bridging it.

| Item | Label | Contact nets / observation |
| --- | --- | --- |
| D5 | GREEN OUT HIGH | 1 = GND; 2 = LED_D5_DISABLE |
| JP2 | SHLD_GND | 1 = /SHIELD; 2 = GND |
| JP4 | CUT TO DISABLE D4 | 1 = LED_D4_DISABLE; 2 = /LED_P |
| JP1 | TERM_DC | 1 = /TERM_MID; 2 = /LINE_LO |
| JP3 | CUT TO DISABLE D5 | 1 = LED_D5_DISABLE; 2 = /LED_O |
| D4 | GREEN 5V POWER | 1 = GND; 2 = LED_D4_DISABLE |

## Practical use with Smoothieboard V2 Prime

**Complete bench circuit.** The drawing accounts for the signal pair, both regulated supplies, all four receiver cable returns, the configured transmitter ground bond, and the meter connection. Read all five companion sheets before using the connection schedule. Check physical mating, fitted component identity, supply current and startup and fault behaviour before energizing the assembly.

Prime and receiver contacts use PCB artwork with enlarged rows and whole-board locators. The TI RS485-FL-DPLX-EVM and Fluke 115 are schematic terminal roles, not physical mating views. The transmitter must match the named SN65HVD73 population and setup described below.

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-complete-source-circuit" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/complete-source-circuit.png" title="Complete bench circuit" alt="Differential receiver: Complete bench circuit" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-01-logic-and-pair" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/01-logic-and-pair.png" title="Logic and differential pair" alt="Differential receiver: Logic and differential pair" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-02-supplies-and-returns" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/02-supplies-and-returns.png" title="Supplies and all returns" alt="Differential receiver: Supplies and all returns" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-03-meter-and-setup" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/03-meter-and-setup.png" title="Meter and module setup" alt="Differential receiver: Meter and module setup" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-04-sequence-and-limits" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/04-sequence-and-limits.png" title="Sequence and limits" alt="Differential receiver: Sequence and limits" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-05-source-behaviour" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/05-source-behaviour.png" title="Expected behaviour" alt="Differential receiver: Expected behaviour" caption="Read the complete set of sheets. Check physical mating before powering." width=1200 %}

<details markdown="1">
<summary>Seven-lead unpowered signal-path reference</summary>

**Unpowered wiring reference — do not connect supplies or energize this circuit.** The drawing contains seven signal/return leads only: Prime PB1 and ground to a named TI transmitter module, its differential pair and common return to the receiver, and receiver output/ground to a Fluke 115 DC-voltage input. All external supplies and both Prime power contacts are omitted. The single drawn cable return does not replace the complete return wiring required by a powered installation.

Prime and receiver contacts use their PCB artwork with enlarged complete rows and whole-board locators. The **TI RS485-FL-DPLX-EVM is shown as schematic terminal roles**, not physical geometry. Check transmitter mating, the fitted SN65HVD73 and cable orientation. The Fluke symbol likewise identifies ordinary DC-voltage V/COM roles only.

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-differential-signal-native-reader" src="/images/extensions/differential-signal-extender/guides/native-contact/differential-signal-native-reader.png" title="Differential receiver — seven-lead unpowered reference" alt="Differential receiver — seven-lead unpowered reference" caption="All power disconnected. Schematic transmitter ports are not physical mating geometry." width=1200 %}

</details>

### Essential contact keys

Read these complete contact keys with the main drawing; front-view pad numbers are not plug-face orientations. J1.2 is transported protected 5 V, not the internal boost rail, and remains open. The custom 8P8C cable is not Ethernet or PoE.

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-prime-J37" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/prime-J37.png" title="prime J37" alt="prime J37" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-J2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-J2.png" title="receiver J2" alt="receiver J2" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-J1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-J1.png" title="receiver J1" alt="receiver J1" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP4.png" title="evm JMP4" alt="evm JMP4" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-TB3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-TB3.png" title="evm TB3" alt="evm TB3" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-meter-Fluke115" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/meter-Fluke115.png" title="meter Fluke115" alt="meter Fluke115" caption="Front-view contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

<details markdown="1">
<summary>All remaining transmitter, receiver, jumper, indicator and protection contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP2.png" title="evm JMP2" alt="evm JMP2" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP3.png" title="evm JMP3" alt="evm JMP3" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP9" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP9.png" title="evm JMP9" alt="evm JMP9" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-C5" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-C5.png" title="receiver C5" alt="receiver C5" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D2.png" title="receiver D2" alt="receiver D2" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D3.png" title="receiver D3" alt="receiver D3" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D4.png" title="receiver D4" alt="receiver D4" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D5" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D5.png" title="receiver D5" alt="receiver D5" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP1.png" title="receiver JP1" alt="receiver JP1" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP2.png" title="receiver JP2" alt="receiver JP2" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP3.png" title="receiver JP3" alt="receiver JP3" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP4.png" title="receiver JP4" alt="receiver JP4" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-L1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-L1.png" title="receiver L1" alt="receiver L1" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-Q1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-Q1.png" title="receiver Q1" alt="receiver Q1" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-R1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-R1.png" title="receiver R1" alt="receiver R1" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-R2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-R2.png" title="receiver R2" alt="receiver R2" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U1.png" title="receiver U1" alt="receiver U1" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U2.png" title="receiver U2" alt="receiver U2" caption="Contact numbering reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U3.png" title="receiver U3" alt="receiver U3" caption="Contact numbering reference." width=420 %}

</details>

The receiver uses LINE_HI → B and LINE_LO → A, followed by the UCC27517 inverting stage.

## Smoothieware: named transmitter and meter example

The receiver needs no device driver. This bench example uses an existing **TI RS485-FL-DPLX-EVM fitted with SN65HVD73**, one Prime digital output and a Fluke 115 meter. It is a static-output procedure, not a motion installation or a machine safety function. Verify the supplied module and fitted part before using its contacts. The Prime adaptation below is our application of manufacturer specifications, not a TI system design.

**Do not power the unpowered reference drawing above.** Before any supply or connection step below, check physical mapping, fitted parts, full power and return wiring, startup and electrical margins.

<details markdown="1">
<summary>Transmitter module setup, firmware example and powered bench procedure</summary>

### Prepare the named transmitter module

Use SLLU197 (June2014), schematicFigure1 and section2.2. The guide documents R2/R3/R4 as 50Ω instrument-input terminations and permits removal when inputs are directly tied to rails. For this Prime application remove those shunts so they do not impose a 50Ω load on its GPIO; this is our application of the schematic/input specifications, not a TI Prime application. Set JMP2 1–2 (/RE HIGH, receiver disabled), JMP3 1–2 (DE HIGH), JMP9 3–4 (EARTH/GND common). Other optional shunts remain open. Supply regulated3.3 V at JMP4.1, return JMP4.3; D is JMP4.2. Do not bridge JMP4.1–2. Bus output TB3.2 is Y, TB3.1 Z; TB3.3 is EARTH, now grounded. Unused receiver/output headers remain disconnected. SLLU197 prose conflicts with its schematic about TB1 numbering; this procedure avoids TB1 and uses the unambiguous schematic header contacts instead. Verify actual module markings before connection.

SN65HVD73 primary specifies3.0–3.6 V supply, HIGH input≥2 V and LOW≤0.8 V. Its driver guarantees differential magnitude≥1.5 V into54Ω under specified conditions. These limits support the named logic interface; they do not set a cable noise margin or a maximum distance for the link.

### Connect Prime, receiver and meter

Reserve Prime GF/J37.3 PB1 for EVM D/JMP4.2 and GF.10 for common ground. Prime power contacts remain unconnected. External3.3 V negative,5 V negative, EVM ground and receiver grounds are common in this intentional nonisolated bench. Do not return the receiver's driven5 V-domain output to Prime.

Connect EVM Y/TB3.2→receiver J2.1 LINE_HI; Z/TB3.1→J2.2 LINE_LO. The native receiver's U1.7 B is LINE_HI and U1.8 A is LINE_LO. Thus the names do not mean normal receiver A/B ordering. J2.4/.5 both receive the separate regulated5.0 V cable supply; J2.3/.6/.7/.8 all connect common return. Maintain all those conductors; no Ethernet equipment may be connected. Keep the pair short and twisted for the bench; no length or rate is specified.

With all power removed, verify/close receiver JP1 TERM_DC for its100Ω DC path R2; do not confuse the parallel C5 AC termination with a ground return. The EVM's retained120Ω output termination in parallel with100Ω is nominal54.55Ω, consistent with the transmitter's54Ω test load; resistor tolerances and fitted parts need checking. No new line-driver PCB or undocumented logic translator is introduced.

The receiver power path is cable+5V→AO3401A Q1 drain3→source2 +5V_R (gate1 biased towardground throughR1), then L1/TPS613222A establishes +5V_BOOST for UCC27517. Do not bypass protection or inject a differently named rail. Confirm rail values/current consumption before requesting HIGH. Nominal5 V cable input does not set a current budget or guarantee booster startup. UCC IN+ is tied to its supply and IN− to RX_R, so this final stage inverts.

Use **Fluke115 ordinary DC volts**: COM→receiver J1.1 GND, V→J1.3 SIG_OUT. J1.2 +5V_R remains disconnected. Its nominal >10MΩ input corresponds to <0.5µA resistive loading at5 V; do not use current/ohms/Auto-V LoZ terminals or settings. There is no field load. Record actual LOW/HIGH voltages rather than inventing guaranteed output values.

### Configure and observe two output states

Merge into a valid isolated base configuration. Remove conflicting PB1/command owners; do not duplicate sections.

```ini
[switch]
line_request.enable = true
line_request.output_pin = PB1
line_request.output_type = digital
line_request.input_on_command = M42
line_request.input_off_command = M43
line_request.subcode = 21
line_request.startup_state = false
line_request.halt_set_to = false
line_request.ignore_on_halt = false
```

Keep external module/receiver supplies off while initializing the host. Send `M43.21` and verify the request is LOW before external power. Establish returns first, power the EVM3.3 V supply and receiver5 V supply, and verify the rails and absence of unexpected current/heating. This is a controlled bench sequence, and does not allow arbitrary power order or hot-plugging. Do not drive HIGH into an unpowered module.

With stable supplies and meter connected, send `M43.21`, wait for a settled reading and record LOW. Send `M42.21`, wait and record HIGH. Finish `M43.21` and record LOW. Keep the host powered/request LOW while removing the external positive supplies; remove the host signal before disconnecting common returns. Startup/halt settings apply only after software configuration/handled halt, not during every boot or supply failure.

Logic path: D HIGH→EVM Y HIGH/Z LOW→receiver A LOW/B HIGH→R LOW→UCC inverting output HIGH. D LOW reverses those states→output LOW. The disconnect and failsafe state is not defined; LOW is not a machine safety function. No G-code motion, laser request, UART or special receiver driver is involved.

### Sources

- [TI evaluation module](https://www.ti.com/tool/RS485-FL-DPLX-EVM) and [SLLU197 guide](https://www.ti.com/lit/pdf/SLLU197), Figure 1 and sections 2.2–3: module contacts and input shunts; the Prime adaptation above is our own. The schematic and prose conflict about TB1 numbering; this example deliberately uses JMP4 and JMP9 instead.
- [SN65HVD73 datasheet](https://www.ti.com/lit/ds/symlink/sn65hvd73.pdf): supply/input limits, differential output load and truth table.
- [THVD1451 datasheet](https://www.ti.com/lit/ds/symlink/thvd1451.pdf) and [UCC27517 datasheet](https://www.ti.com/lit/ds/symlink/ucc27517.pdf): the receiver stages and inversion.
- [Switch implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp): digital output, command subcodes, configured startup and handled halt behavior.

Check mating, fitted parts, rails, current and temperature. The meter is ordinary DC volts with nominal >10 MΩ input, not its low-impedance mode. Connect no field load, and do not rely on disconnect or failsafe behaviour.

</details>

## Board sources

- [Board source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/differential-signal-extender/attempt/versions/v15)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

Active components: `U1 THVD1451D`; `U2 UCC27517`; `U3 TPS613222A 5V BOOST`. Check the matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="differential-signal-extender" %}

</details>
