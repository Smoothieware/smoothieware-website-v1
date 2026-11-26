---
layout: default
title: "CPLD adapter"
permalink: /extensions/cpld-adapter
---

# CPLD adapter

This programmable single-axis conditioner sits between host STEP/DIR/ENABLE logic and a compatible 5 V logic receiver. It is intended for defined timing or conditioning profiles. It is not a transparent passive level adapter and does not provide motor power.

## How it works

The board uses a Lattice LCMXO2-640HC, supervisors and output-gating logic. J1 supplies host commands and returns a fault-related signal; J2 carries the field interface. J3 programs the logic. JP1 is an open-by-default bypass-request input to the CPLD. Closing it does not make a copper path around the chip; its effect requires a matching programmed logic image. The three-input output gate enables U2 only when reset is released, CPLD_RUN is high and the host enable request is high.

## Power, signals and limits

J2 order is GND, STEP_OUT, DIR_OUT, ENABLE_OUT_N, FAULT_IN_N, GND. It carries no load supply. The outputs are 5 V CMOS through series resistors for high-impedance logic loads, not current-driven stepper optocouplers. Do not connect them directly to a DM556 input without checking its input current and interface. J3's USB-Blaster-style label is a connector convention, not proof that an Altera bitstream or programmer is compatible with this Lattice device.

OUT_OE_N has a 10 kΩ pull-up to the 5 V rail while the gate driving it, U4, is powered from 3.3 V. Check device voltage tolerance, startup behaviour and the resulting enable levels before powered use.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Green: Motor enable.
- Blue: Motor STEP.
- Grey: Not routed.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links.

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-overview" src="/images/extensions/cpld-adapter/guides/reader-compact-overview.png" title="MachXO2 logic adapter — overview" alt="MachXO2 logic adapter — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-host-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host Y control — host 1 5" alt="J1 · Host Y control — host 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-host-6-10" src="/images/extensions/cpld-adapter/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host Y control — host 6 10" alt="J1 · Host Y control — host 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-field-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-field-1-5-central-pills.png" title="J2 · 5V field logic — field 1 5" alt="J2 · 5V field logic — field 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-field-6-6" src="/images/extensions/cpld-adapter/guides/reader-compact-field-6-6-central-pills.png" title="J2 · 5V field logic — field 6 6" alt="J2 · 5V field logic — field 6 6" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-jtag-1-5" src="/images/extensions/cpld-adapter/guides/reader-compact-jtag-1-5-central-pills.png" title="J3 · JTAG programming — jtag 1 5" alt="J3 · JTAG programming — jtag 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-jtag-6-10" src="/images/extensions/cpld-adapter/guides/reader-compact-jtag-6-10-central-pills.png" title="J3 · JTAG programming — jtag 6 10" alt="J3 · JTAG programming — jtag 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-logic" src="/images/extensions/cpld-adapter/guides/reader-compact-logic.png" title="Programmable signal path — logic" alt="Programmable signal path — logic" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-enable" src="/images/extensions/cpld-adapter/guides/reader-compact-enable.png" title="Hardware output gate — enable" alt="Hardware output gate — enable" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-output" src="/images/extensions/cpld-adapter/guides/reader-compact-output.png" title="Field output idle network — output" alt="Field output idle network — output" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-fault" src="/images/extensions/cpld-adapter/guides/reader-compact-fault.png" title="Field fault return — fault" alt="Field fault return — fault" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-bypass" src="/images/extensions/cpld-adapter/guides/reader-compact-bypass.png" title="Bypass request link — bypass" alt="Bypass request link — bypass" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-power" src="/images/extensions/cpld-adapter/guides/reader-compact-power.png" title="Supply and JTAG reference — power" alt="Supply and JTAG reference — power" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-watchdog" src="/images/extensions/cpld-adapter/guides/reader-compact-watchdog.png" title="Supervisor and watchdog — watchdog" alt="Supervisor and watchdog — watchdog" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led1" src="/images/extensions/cpld-adapter/guides/reader-compact-led1.png" title="3.3V power — led1" alt="3.3V power — led1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led2" src="/images/extensions/cpld-adapter/guides/reader-compact-led2.png" title="Output enable — led2" alt="Output enable — led2" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led3" src="/images/extensions/cpld-adapter/guides/reader-compact-led3.png" title="Bypass indication — led3" alt="Bypass indication — led3" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-led4" src="/images/extensions/cpld-adapter/guides/reader-compact-led4.png" title="Fault indication — led4" alt="Fault indication — led4" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-tests1" src="/images/extensions/cpld-adapter/guides/reader-compact-tests1.png" title="Logic and supply tests — tests1" alt="Logic and supply tests — tests1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-tests6" src="/images/extensions/cpld-adapter/guides/reader-compact-tests6.png" title="Logic and supply tests — tests6" alt="Logic and supply tests — tests6" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="cpld-adapter-v19-reader-compact-mounts" src="/images/extensions/cpld-adapter/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The contact table below accompanies the diagrams above. Follow the wiring section for the connection procedure.

### Connector contacts

Contact numbers are the PCB pad numbers, viewed as in the board drawings. Same-numbered duplicate lands are listed once. Mechanical unnumbered pads are omitted. `NC` means unconnected. Net names alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Connector contact table</summary>

<div class="extension-contact-table" role="region" aria-label="Connector contacts; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
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

The values below identify each control or indication. A cut-to-disable LED link affects only the indicator, not the protected circuit. Check the link population and default state on your board before cutting or bridging.

<details markdown="1">
<summary>Links and indicators table</summary>

| Item | Label | Contact nets |
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

Active components: `U3 TPS3823-33DBVR`; `U6 PRTR5V0U4D`; `U4 SN74LVC1G10DBVR`; `U5 SN74LVC1G34DBVR`; `U2 SN74LV4T125PW`; `U1 LCMXO2-640HC-4SG48C`. Follow the matching datasheet limits.

## Practical use with Smoothieboard V2 Prime

The intended example is a compatible high-impedance logic STEP/DIR receiver under a named programmed profile. Fix the bitstream, profile and timing transformation before wiring it into motion.

On a Smoothieboard V2 Prime GF/J37 header, contacts 1, 2 and 10 are limited 3.3 V, limited 5 V and ground. Check the unshrouded host header and cable orientation before applying power.

1. Confirm the exact logic image, profile and reset/default behavior before connecting the downstream receiver.
2. A GF/J37 cable gives J1.3 STEP→PB1, .4 DIR→PJ4, .5 ENABLE→PA4 and .6 fault→PG0; allocate these pins deliberately and check for conflicts.
3. Wire J2 only to the compatible logic receiver and common reference; do not attach motor coils, motor power or a high-current optocoupler input.
4. Leave bypass in its documented default state until its complete truth table has been checked. Prove no unintended steps on reset and power loss before motion.

## Smoothieware use

### Programmable logic

The board needs a programmed MachXO2 image to implement its motion-signal transformation; the board project does not include one. Smoothieware's external STEP/DIR output can request pulses, but its settings cannot create the CPLD logic, configure its permit/watchdog policy or supply a programmed image. Do not treat JP1 as a passive bypass, and check programmer and connector compatibility before using a USB-Blaster cable.

Keep the board and downstream driver unpowered until the CPLD is programmed with a matching image.

## Sources

- [Source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/cpld-adapter/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/cpld-adapter/design.md)

<details markdown="1">
<summary>Additional board views</summary>

{% include _includes/extension-board-visuals.html slug="cpld-adapter" %}

</details>

[All extension boards](/extension-boards)
