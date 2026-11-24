---
layout: default
title: "CPLD adapter"
permalink: /extensions/cpld-adapter
---

# CPLD adapter

This programmable single-axis conditioner sits between host STEP/DIR/ENABLE logic and a compatible 5 V logic receiver. It is intended for defined timing or conditioning profiles. It is not a transparent passive level adapter and does not provide motor power.

This guide selects **v19** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v19 source package retains schematic title-block revision **v11**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The selected v19 source uses a Lattice LCMXO2-640HC, supervisors and output-gating logic. J1 supplies host commands and returns a fault-related signal; J2 carries the field interface. J3 programs the logic. JP1 is an open-by-default bypass-request input to the CPLD. Closing it does not make a copper path around the chip; its effect requires a matching programmed logic image. The three-input output gate enables U2 only when reset is released, CPLD_RUN is high and the host enable request is high. The actual logic image and pulse-conversion behaviour remain unverified.

## Power, signals and limits

J2 order is GND, STEP_OUT, DIR_OUT, ENABLE_OUT_N, FAULT_IN_N, GND. It carries no load supply. The root contract describes 5 V CMOS through series resistors for high-impedance logic loads, not current-driven stepper optocouplers. Do not directly substitute a DM556 input without verifying its input current/interface. J3's USB-Blaster-style label is a connector convention, not proof that an Altera bitstream or programmer is compatible with this Lattice device.

**Unresolved selected-source electrical issue:** OUT_OE_N has a 10 kΩ pull-up to the 5 V rail while the gate driving it, U4, is powered from 3.3 V. That topology is recorded, not qualified here: device voltage tolerance, startup behaviour and the resulting enable levels require investigation before powered use. A functional diagram does not resolve this issue.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Green: Motor enable.
- Blue: Motor STEP.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-overview" src="/images/extensions/cpld-adapter/guides/reader-compact-overview.svg" title="MachXO2 logic adapter — overview" alt="MachXO2 logic adapter — overview for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-host-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-host-1-5-central-pills.svg" title="J1 · Host Y control — host 1 5" alt="J1 · Host Y control — host 1 5 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-host-6-10" src="/images/extensions/cpld-adapter/guides/reader-compact-host-6-10-central-pills.svg" title="J1 · Host Y control — host 6 10" alt="J1 · Host Y control — host 6 10 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-field-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-field-1-5-central-pills.svg" title="J2 · 5V field logic — field 1 5" alt="J2 · 5V field logic — field 1 5 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-field-6-6" src="/images/extensions/cpld-adapter/guides/reader-compact-field-6-6-central-pills.svg" title="J2 · 5V field logic — field 6 6" alt="J2 · 5V field logic — field 6 6 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-jtag-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-jtag-1-5-central-pills.svg" title="J3 · JTAG programming — jtag 1 5" alt="J3 · JTAG programming — jtag 1 5 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-jtag-6-10" src="/images/extensions/cpld-adapter/guides/reader-compact-jtag-6-10-central-pills.svg" title="J3 · JTAG programming — jtag 6 10" alt="J3 · JTAG programming — jtag 6 10 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-logic" src="/images/extensions/cpld-adapter/guides/reader-compact-logic.svg" title="Programmable signal path — logic" alt="Programmable signal path — logic for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-enable" src="/images/extensions/cpld-adapter/guides/reader-compact-enable.svg" title="Hardware output gate — enable" alt="Hardware output gate — enable for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-output" src="/images/extensions/cpld-adapter/guides/reader-compact-output.svg" title="Field output idle network — output" alt="Field output idle network — output for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-fault" src="/images/extensions/cpld-adapter/guides/reader-compact-fault.svg" title="Field fault return — fault" alt="Field fault return — fault for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-bypass" src="/images/extensions/cpld-adapter/guides/reader-compact-bypass.svg" title="Bypass request link — bypass" alt="Bypass request link — bypass for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-power" src="/images/extensions/cpld-adapter/guides/reader-compact-power.svg" title="Supply and JTAG reference — power" alt="Supply and JTAG reference — power for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-watchdog" src="/images/extensions/cpld-adapter/guides/reader-compact-watchdog.svg" title="Supervisor and watchdog — watchdog" alt="Supervisor and watchdog — watchdog for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led1" src="/images/extensions/cpld-adapter/guides/reader-compact-led1.svg" title="3.3V power — led1" alt="3.3V power — led1 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led2" src="/images/extensions/cpld-adapter/guides/reader-compact-led2.svg" title="Output enable — led2" alt="Output enable — led2 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led3" src="/images/extensions/cpld-adapter/guides/reader-compact-led3.svg" title="Bypass indication — led3" alt="Bypass indication — led3 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led4" src="/images/extensions/cpld-adapter/guides/reader-compact-led4.svg" title="Fault indication — led4" alt="Fault indication — led4 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-tests1" src="/images/extensions/cpld-adapter/guides/reader-compact-tests1.svg" title="Logic and supply tests — tests1" alt="Logic and supply tests — tests1 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-tests6" src="/images/extensions/cpld-adapter/guides/reader-compact-tests6.svg" title="Logic and supply tests — tests6" alt="Logic and supply tests — tests6 for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-mounts" src="/images/extensions/cpld-adapter/guides/reader-compact-mounts.svg" title="Mounting holes — mounts" alt="Mounting holes — mounts for cpld-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated board-reference sheets above describe the selected source revision; the contact table below is a companion source aid. Actual desktop and narrow-view page/viewer acceptance remains open. Follow the wiring section for the connection procedure and its remaining installation limitations.

### cpld-adapter — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 1 | `/JTAG_TCK` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 2 | `GND` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 3 | `/JTAG_TDO` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 4 | `/JTAG_VTREF` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 5 | `/JTAG_TMS` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 9 | `/JTAG_TDI` |
| J3 — JTAG 10-PIN (USB-Blaster pinout) | 10 | `GND` |
| J3 | 6, 7, 8 | NC |
| J2 — FIELD OUT 5V LOGIC | 1 | `GND` |
| J2 — FIELD OUT 5V LOGIC | 2 | `/STEP_OUT` |
| J2 — FIELD OUT 5V LOGIC | 3 | `/DIR_OUT` |
| J2 — FIELD OUT 5V LOGIC | 4 | `/ENABLE_OUT_N` |
| J2 — FIELD OUT 5V LOGIC | 5 | `/FAULT_IN_N` |
| J2 — FIELD OUT 5V LOGIC | 6 | `GND` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 1 | `/HOST_3V3` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 2 | `/HOST_5V` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 3 | `/HOST_STEP` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 4 | `/HOST_DIR` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 5 | `/HOST_ENABLE` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 6 | `/HOST_FAULT_N` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 7 | `/HOST_AUX0` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 8 | `/HOST_AUX1` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 9 | `/HOST_CLKREF` |
| J1 — GADGETEER Y (to Smoothieboard v2) | 10 | `GND` |

</div>

</details>


### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP2 | CUT TO DISABLE D1 | 1 = LED_D1_DISABLE; 2 = /D1_A |
| JP4 | CUT TO DISABLE D4 | 1 = LED_D4_DISABLE; 2 = /D4_A |
| D1 | green POWER 3V3 | 1 = GND; 2 = LED_D1_DISABLE |
| JP3 | CUT TO DISABLE D3 | 1 = LED_D3_DISABLE; 2 = /D3_A |
| D3 | amber BYPASS | 1 = GND; 2 = LED_D3_DISABLE |
| D4 | red FAULT | 1 = GND; 2 = LED_D4_DISABLE |
| D2 | green OUT_EN | 1 = GND; 2 = LED_D2_DISABLE |
| JP5 | CUT TO DISABLE D2 | 1 = LED_D2_DISABLE; 2 = /D2_A |
| JP1 | BYPASS_EN (open) | 1 = /BYPASS_EN_N; 2 = GND |

</details>


Selected active-component identities: `U3 TPS3823-33DBVR`; `U6 PRTR5V0U4D`; `U4 SN74LVC1G10DBVR`; `U5 SN74LVC1G34DBVR`; `U2 SN74LV4T125PW`; `U1 LCMXO2-640HC-4SG48C`. These identities are not a substitute for matching datasheet limits.



## Practical use with Smoothieboard V2 Prime

The intended example is a compatible high-impedance logic STEP/DIR receiver under a named programmed profile. The bitstream/profile identity and actual timing transformation must be fixed before wiring it into motion.

**Wiring remains incomplete:** the source-backed candidates below do not yet provide an accepted, complete host → board → peripheral installation. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. Confirm the exact logic image, profile and reset/default behavior before connecting the downstream receiver.
2. A retained P12 GF/J37 cable candidate gives J1.3 STEP→PB1, .4 DIR→PJ4, .5 ENABLE→PA4 and .6 fault→PG0; these must be deliberately allocated and checked for conflicts.
3. Wire J2 only to the compatible logic receiver and common reference; do not attach motor coils, motor power or a high-current optocoupler input.
4. Leave bypass in its documented default state until its complete truth table has been checked. Prove no unintended steps on reset and power loss before motion.

## Smoothieware use

### Required programmable logic is not supplied

The selected v19 board requires a programmed MachXO2 image to implement its motion-signal transformation. That implementation is **not supplied in the retained board project**. The project specification explicitly calls the timing profiles “unimplemented HDL requirements” and says HDL, firmware and bitstream implementation are outside the PCB assignment; no working transformation is claimed. Its nominal pulse widths, queue depth and fault behavior are requirements, not available operating modes.

Smoothieware's existing external STEP/DIR output can request pulses, but those settings cannot create the missing CPLD logic, configure its permit/watchdog policy or supply a matching programmed image. There is no verified configuration, command sequence or reproducible programmer procedure for using the selected board as a working signal converter. Do not treat JP1 as a passive bypass or use a generic USB-Blaster cable without independently verified programmer/connector compatibility.

**Required board support is absent from the retained implementation. Email wolf.arthur@gamil.com for the matching HDL/bitstream, reproducible build, pin constraints, JTAG programming/recovery procedure and USERCODE before attempting this function.** Keep the board and downstream driver unpowered while resolving that software dependency. No fabrication, programmed-device identity, hardware safe state or runtime behavior is certified here.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v19 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/cpld-adapter/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Logic image/version, profile transformation, host fault policy, output-load compatibility and reset timing remain unresolved.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="cpld-adapter" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
