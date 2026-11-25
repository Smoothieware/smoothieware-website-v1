---
layout: default
title: "Differential signal extender"
permalink: /extensions/differential-signal-extender
---

# Differential signal extender

This is the receiver half of a one-way digital link intended to carry a host output to a remote logic load. It is not a bidirectional sensor extender. A complete installation needs the matching transmitter, cable and remote load contract.

This guide selects **v15** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

## How it works

The selected v15 abstract is RX only. Its native source contains a THVD1451 receiver, UCC27517 output driver and TPS613222A boost supply. Older root prose describing four paralleled inverter outputs is not this selected receiver. Cable LINE_HI reaches receiver input B and LINE_LO reaches input A. The UCC27517 stage inverts the receiver result: a valid differential input with HI above LO produces a high SIG_OUT. The boost supply feeds the output driver internally; it is not the supply exported at J1.2.

## Power, signals and limits

J1 is GND/5V/SIG order: pin 1 ground, .2 protected transported 5 V, .3 driven SIG_OUT. J2 uses a dedicated straight-through 8P8C cable; contacts 1/2 are LINE_HI/LINE_LO, 4/5 transported power, 3/6/7/8 ground and shell shield. It is not Ethernet or PoE and has no sensor-return channel. The old 500 kHz/25 m and current-budget targets are not qualified v15 RX ratings. The output driver does not mean a valve or motor coil can be connected directly.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-overview" src="/images/extensions/differential-signal-extender/guides/reader-compact-overview.png" title="Differential signal receiver — overview" alt="Differential signal receiver — overview for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-cable-1-5" src="/images/extensions/differential-signal-extender/guides/reader-compact-cable-1-5-central-pills.png" title="J2 · Cable input — cable 1 5" alt="J2 · Cable input — cable 1 5 for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-cable-6-SH" src="/images/extensions/differential-signal-extender/guides/reader-compact-cable-6-SH-central-pills.png" title="J2 · Cable input — cable 6 SH" alt="J2 · Cable input — cable 6 SH for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-load-1-3" src="/images/extensions/differential-signal-extender/guides/reader-compact-load-1-3-central-pills.png" title="J1 · Load output — load 1 3" alt="J1 · Load output — load 1 3 for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-receiver" src="/images/extensions/differential-signal-extender/guides/reader-compact-receiver.png" title="Receiver and polarity — receiver" alt="Receiver and polarity — receiver for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-driver" src="/images/extensions/differential-signal-extender/guides/reader-compact-driver-underside-caption.png" title="Boosted output driver — driver" alt="Boosted output driver — driver for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-power" src="/images/extensions/differential-signal-extender/guides/reader-compact-power.png" title="Cable power protection — power" alt="Cable power protection — power for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-termination" src="/images/extensions/differential-signal-extender/guides/reader-compact-termination.png" title="Line termination link — termination" alt="Line termination link — termination for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-shield" src="/images/extensions/differential-signal-extender/guides/reader-compact-shield.png" title="Shield bond selector — shield" alt="Shield bond selector — shield for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-output" src="/images/extensions/differential-signal-extender/guides/reader-compact-output.png" title="Output bias and protection — output" alt="Output bias and protection — output for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-power-led" src="/images/extensions/differential-signal-extender/guides/reader-compact-power-led.png" title="Power indicator link — power led" alt="Power indicator link — power led for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-output-led" src="/images/extensions/differential-signal-extender/guides/reader-compact-output-led.png" title="Output-high indicator link — output led" alt="Output-high indicator link — output led for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-signal-extender-v15-reader-compact-tests" src="/images/extensions/differential-signal-extender/guides/reader-compact-tests-underside-caption.png" title="Tests and mounting holes — tests" alt="Tests and mounting holes — tests for differential-signal-extender v15" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated reference sheets above use the selected board abstract and source-numbered contacts. Use every focused sheet together with the connector table. Actual desktop/narrow viewer checks and assembled-board verification remain open.

### dse-rx — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
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

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| D5 | GREEN OUT HIGH | 1 = GND; 2 = LED_D5_DISABLE |
| JP2 | SHLD_GND | 1 = /SHIELD; 2 = GND |
| JP4 | CUT TO DISABLE D4 | 1 = LED_D4_DISABLE; 2 = /LED_P |
| JP1 | TERM_DC | 1 = /TERM_MID; 2 = /LINE_LO |
| JP3 | CUT TO DISABLE D5 | 1 = LED_D5_DISABLE; 2 = /LED_O |
| D4 | GREEN 5V POWER | 1 = GND; 2 = LED_D4_DISABLE |



## Practical use with Smoothieboard V2 Prime

**Complete nominal source circuit — not a tested bench installation.** The drawing accounts for the signal pair, both regulated supplies, all four receiver cable returns, the configured transmitter ground bond, and the meter connection. Read all five companion sheets before using the connection schedule. Physical mating, fitted component identity, supply current and startup/fault behaviour still require verification; do not energize an unverified assembly.

Prime and receiver contacts use source-native artwork with enlarged rows and whole-board locators. Prime artwork is P11; the bound J37 PB1/GND schedule is shared with the selected P12 host, without asserting identical whole-board geometry. The TI RS485-FL-DPLX-EVM and Fluke 115 are schematic terminal roles, not established physical mating views. The transmitter must match the named SN65HVD73 population and setup described below.

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-complete-source-circuit" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/complete-source-circuit.png" title="Complete nominal source circuit" alt="Differential receiver v15: Complete nominal source circuit" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-01-logic-and-pair" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/01-logic-and-pair.png" title="Logic and differential pair" alt="Differential receiver v15: Logic and differential pair" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-02-supplies-and-returns" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/02-supplies-and-returns.png" title="Supplies and all returns" alt="Differential receiver v15: Supplies and all returns" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-03-meter-and-setup" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/03-meter-and-setup.png" title="Meter and module setup" alt="Differential receiver v15: Meter and module setup" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-04-sequence-and-limits" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/04-sequence-and-limits.png" title="Sequence and limits" alt="Differential receiver v15: Sequence and limits" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-complete-05-source-behaviour" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/05-source-behaviour.png" title="Expected source behaviour" alt="Differential receiver v15: Expected source behaviour" caption="Nominal source circuit; read the complete set. Physical mating and powered hardware remain unverified." width=1200 %}

<details markdown="1">
<summary>Earlier seven-lead unpowered signal-path study</summary>

**Incomplete, non-energizable wiring reference — do not connect supplies or energize this circuit.** The drawing contains seven signal/return leads only: Prime PB1 and ground to a named TI transmitter module, its differential pair and common return to the v15 receiver, and receiver output/ground to a Fluke 115 DC-voltage input. All external supplies and both Prime power contacts are omitted. The single drawn cable return does not replace the complete return wiring required by a qualified powered installation.

Prime and receiver contacts use their source-native artwork with enlarged complete rows and whole-board locators. The available Prime artwork is P11; the bound J37 PB1/GND contact schedule is shared with the selected P12 host, not a claim of identical whole-board geometry. The **TI RS485-FL-DPLX-EVM is shown as schematic terminal roles**, because its native PCB/cavity geometry was not established. This does not qualify physical transmitter mating, fitted SN65HVD73 identity or cable orientation. The Fluke symbol likewise identifies ordinary DC-voltage V/COM roles only.

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-differential-signal-native-reader" src="/images/extensions/differential-signal-extender/guides/native-contact/differential-signal-native-reader.png" title="Differential receiver v15 — seven-lead unpowered reference" alt="Differential receiver v15 — seven-lead unpowered reference" caption="All power OPEN. Schematic transmitter ports are not physical mating geometry. No powered installation is qualified." width=1200 %}


</details>

### Essential contact keys

Read these complete contact keys with the main drawing; source-front pad numbers are not plug-face orientations. J1.2 is transported protected 5 V, not the internal boost rail, and remains open. The custom 8P8C cable is not Ethernet or PoE.

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-prime-J37" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/prime-J37.png" title="prime J37" alt="prime J37" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-J2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-J2.png" title="receiver J2" alt="receiver J2" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-J1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-J1.png" title="receiver J1" alt="receiver J1" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP4.png" title="evm JMP4" alt="evm JMP4" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-TB3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-TB3.png" title="evm TB3" alt="evm TB3" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-meter-Fluke115" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/meter-Fluke115.png" title="meter Fluke115" alt="meter Fluke115" caption="Source-front contact numbering; verify physical mating and read the complete circuit and setup sheets." width=420 %}

<details markdown="1">
<summary>All remaining transmitter, receiver, jumper, indicator and protection contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP2.png" title="evm JMP2" alt="evm JMP2" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP3.png" title="evm JMP3" alt="evm JMP3" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-evm-JMP9" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/evm-JMP9.png" title="evm JMP9" alt="evm JMP9" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-C5" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-C5.png" title="receiver C5" alt="receiver C5" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D2.png" title="receiver D2" alt="receiver D2" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D3.png" title="receiver D3" alt="receiver D3" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D4.png" title="receiver D4" alt="receiver D4" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-D5" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-D5.png" title="receiver D5" alt="receiver D5" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP1.png" title="receiver JP1" alt="receiver JP1" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP2.png" title="receiver JP2" alt="receiver JP2" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP3.png" title="receiver JP3" alt="receiver JP3" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-JP4" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-JP4.png" title="receiver JP4" alt="receiver JP4" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-L1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-L1.png" title="receiver L1" alt="receiver L1" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-Q1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-Q1.png" title="receiver Q1" alt="receiver Q1" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-R1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-R1.png" title="receiver R1" alt="receiver R1" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-R2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-R2.png" title="receiver R2" alt="receiver R2" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U1" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U1.png" title="receiver U1" alt="receiver U1" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U2" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U2.png" title="receiver U2" alt="receiver U2" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-v15-native-receiver-U3" src="/images/extensions/differential-signal-extender/guides/complete-source-circuit/reader-contact-keys/receiver-U3.png" title="receiver U3" alt="receiver U3" caption="Source contact inventory only; no powered, physical mating or runtime qualification." width=420 %}

</details>

The selected receiver uses LINE_HI → B and LINE_LO → A, followed by the UCC27517 inverting stage. All supplies, boost startup, protection/current budgets, cable margins, complete return conductors, fitted populations and mating remain unresolved. The original valve-driver application and a complete powered host → board → load installation remain incomplete.

## Smoothieware: named transmitter and meter example

The receiver needs no device driver. This conditional bench example uses an existing **TI RS485-FL-DPLX-EVM fitted with SN65HVD73**, one Prime digital output and a Fluke 115 meter. It is a source-derived static-output procedure, not tested hardware, a motion installation or a machine safety function. Verify the supplied module and fitted part before using its contacts. The Prime adaptation below is our application of manufacturer specifications, not a TI-qualified Prime system. The required complete practical diagram remains open.

**The following retained source-derived experiment is conditional research, not directions to power the incomplete drawing above.** Do not perform its supply or connection steps until physical mapping, fitted parts, full power/return wiring, startup and electrical margins are separately qualified. Generic Switch settings describe software behavior only.

<details markdown="1">
<summary>Conditional named-module setup, firmware example and earlier powered experiment — not qualified for execution</summary>

### Prepare the named transmitter module

Use SLLU197 (June2014), schematicFigure1 and section2.2. The guide documents R2/R3/R4 as 50Ω instrument-input terminations and permits removal when inputs are directly tied to rails. For this Prime application remove those shunts so they do not impose a 50Ω load on its GPIO; this is our application of the schematic/input specifications, not a TI-qualified Prime application. Set JMP2 1–2 (/RE HIGH, receiver disabled), JMP3 1–2 (DE HIGH), JMP9 3–4 (EARTH/GND common). Other optional shunts remain open. Supply regulated3.3 V at JMP4.1, return JMP4.3; D is JMP4.2. Do not bridge JMP4.1–2. Bus output TB3.2 is Y, TB3.1 Z; TB3.3 is EARTH, now grounded. Unused receiver/output headers remain disconnected. SLLU197 prose conflicts with its schematic about TB1 numbering; this procedure avoids TB1 and uses the unambiguous schematic header contacts instead. Verify actual module markings before connection.

SN65HVD73 primary specifies3.0–3.6 V supply, HIGH input≥2 V and LOW≤0.8 V. Its driver guarantees differential magnitude≥1.5 V into54Ω under specified conditions. These limits support the named logic interface; they do not establish cable noise margin or a maximum distance for this assembled link.

### Connect Prime, receiver and meter

Reserve Prime GF/J37.3 PB1 for EVM D/JMP4.2 and GF.10 for common ground. Prime power contacts remain unconnected. External3.3 V negative,5 V negative, EVM ground and receiver grounds are common in this intentional nonisolated bench. Do not return the receiver's driven5 V-domain output to Prime.

Connect EVM Y/TB3.2→receiver J2.1 LINE_HI; Z/TB3.1→J2.2 LINE_LO. The native receiver's U1.7 B is LINE_HI and U1.8 A is LINE_LO. Thus the names do not mean normal receiver A/B ordering. J2.4/.5 both receive the separate regulated5.0 V cable supply; J2.3/.6/.7/.8 all connect common return. Maintain all those conductors; no Ethernet equipment may be connected. Keep the pair short and twisted for the bench; no length/rate specification is inferred.

With all power removed, verify/close receiver JP1 TERM_DC for its100Ω DC path R2; do not confuse the parallel C5 AC termination with a ground return. The EVM's retained120Ω output termination in parallel with100Ω is nominal54.55Ω, consistent with the transmitter's54Ω test load; resistor tolerances and fitted populations still need checking. No new line-driver PCB or undocumented logic translator is introduced.

Receiver source power path is cable+5V→AO3401A Q1 drain3→source2 +5V_R (gate1 biased towardground throughR1), then L1/TPS613222A establishes +5V_BOOST for UCC27517. Do not bypass protection or inject a differently named rail. Confirm rail values/current consumption before requesting HIGH. Nominal5 V cable input is not a current-budget approval or proof of actual booster startup. Source UCC IN+ is tied to its supply and IN− to RX_R, so this final stage inverts.

Use **Fluke115 ordinary DC volts**: COM→receiver J1.1 GND, V→J1.3 SIG_OUT. J1.2 +5V_R remains disconnected. Its nominal >10MΩ input corresponds to <0.5µA resistive loading at5 V; do not use current/ohms/Auto-V LoZ terminals or settings. There is no field load. Record actual LOW/HIGH voltages rather than inventing guaranteed assembled output values.

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

Keep external module/receiver supplies off while initializing the host. Send `M43.21` and verify the request is LOW before external power. Establish returns first, power the EVM3.3 V supply and receiver5 V supply, and verify the rails and absence of unexpected current/heating. This is a controlled bench sequence, not proof of arbitrary power-order/hot-plug tolerance. Do not drive HIGH into an unpowered module.

With stable supplies and meter connected, send `M43.21`, wait for a settled reading and record LOW. Send `M42.21`, wait and record HIGH. Finish `M43.21` and record LOW. Keep the host powered/request LOW while removing the external positive supplies; remove the host signal before disconnecting common returns. Startup/halt settings apply only after software configuration/handled halt, not during every boot or supply failure.

Source truth: D HIGH→EVM Y HIGH/Z LOW→receiver A LOW/B HIGH→R LOW→UCC inverting output HIGH. D LOW reverses those states→output LOW. Disconnect/failsafe state is not qualified by this two-state experiment; LOW is not a machine safety function. No G-code motion, laser request, UART or special receiver driver is involved.

### Sources and unresolved installation checks

- [TI evaluation module](https://www.ti.com/tool/RS485-FL-DPLX-EVM) and [SLLU197 guide](https://www.ti.com/lit/pdf/SLLU197), Figure 1 and sections 2.2–3: module contacts and input shunts; the Prime adaptation above is source-derived. The schematic and prose conflict about TB1 numbering; this example deliberately uses JMP4 and JMP9 instead.
- [SN65HVD73 datasheet](https://www.ti.com/lit/ds/symlink/sn65hvd73.pdf): supply/input limits, differential output load and truth table.
- [THVD1451 datasheet](https://www.ti.com/lit/ds/symlink/thvd1451.pdf) and [UCC27517 datasheet](https://www.ti.com/lit/ds/symlink/ucc27517.pdf): the selected receiver stages and inversion.
- [Pinned Switch implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp): digital output, command subcodes, configured startup and handled halt behavior.

Exact mating, fitted parts, source rails/boost/protection, current limits, thermal behavior and actual observations remain unverified. The meter is ordinary DC volts with nominal >10 MΩ input, not its low-impedance mode. No field load or guaranteed disconnect/failsafe behavior is established. Generic Switch support exists; for required unsupported machine integration email **wolf.arthur@gamil.com** with transmitter and load identities. Source behavior does not identify the installed firmware or prove target execution.

</details>

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v15 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/differential-signal-extender/attempt/versions/v15)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** The selected TI module supplies a named bench transmitter, but matching physical artwork/mating, cable power budget, actual readings, field-load behavior and disconnect/failsafe qualification remain unresolved.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

Selected active-component identities: `U1 THVD1451D`; `U2 UCC27517`; `U3 TPS613222A 5V BOOST`. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="differential-signal-extender" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
