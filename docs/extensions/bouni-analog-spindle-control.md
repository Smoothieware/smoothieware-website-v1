---
layout: default
title: "Bouni analog spindle control"
permalink: /extensions/bouni-analog-spindle-control
---

# Bouni analog spindle control

This board converts a controller’s pulse-width modulation (PWM) signal into an analog speed command for a variable-frequency drive (VFD). It has a separate RUN control path. For drives that take serial commands, see [Bouni RS-485 spindle control](/extensions/bouni-rs485-spindle-control).

## How it works

The ISO7710F isolates the PWM signal, the LTC2644 converts duty cycle to voltage, and the TS912 amplifies that voltage. The VFD terminal order is **10V, AOUT, GND, RUN, DCM**. Check the drive’s reference-supply capacity and keep the analog and run returns separate unless the drive manual establishes their connection. An idle-high PWM input can produce full scale.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-overview" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-overview.png" title="Spindle module analog" alt="Spindle module analog on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j1-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j1-1-5-central-pills.png" title="J1 · Host interface" alt="J1 · Host interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j1-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j1-6-10-central-pills.png" title="J1 · Host interface" alt="J1 · Host interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j2-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j2-1-5-central-pills.png" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j2-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j2-6-10-central-pills.png" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-vfd-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-vfd-1-5-central-pills.png" title="J3 · VFD interface" alt="J3 · VFD interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links3.png" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links6" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links6.png" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links8" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links8.png" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-run" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-run.png" title="Run control path" alt="Run control path on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-pwm" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-pwm.png" title="PWM transfer stage" alt="PWM transfer stage on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-dac" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-dac.png" title="PWM to analog stage" alt="PWM to analog stage on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-gain" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-gain.png" title="Analog gain network" alt="Analog gain network on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-power" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-power.png" title="VFD-side supply" alt="VFD-side supply on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-tests0" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-tests0-underside-caption.png" title="Interface test pads" alt="Interface test pads on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-tests5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-tests5-underside-caption.png" title="Interface test pads" alt="Interface test pads on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-mounts" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

The annotated sheets above show the board; the contact table below lists the same contacts. Follow the wiring section for the connection procedure.

### Connector contacts

Contact numbering below is the PCB pad numbering, as shown on the board-reference drawing. Duplicate lands with the same number are shown once, and unnumbered mechanical pads are omitted. Check mating orientation before connecting. `NC` means unconnected, not a spare supported function. Net names alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — GADGETEER IN | 1 | `+3V3` |
| J1 — GADGETEER IN | 2 | `+5V` |
| J1 — GADGETEER IN | 3 | `GAD_P3` |
| J1 — GADGETEER IN | 4 | `GAD_P4` |
| J1 — GADGETEER IN | 5 | `GAD_P5` |
| J1 — GADGETEER IN | 6 | `RUN_EN` |
| J1 — GADGETEER IN | 7 | `PWM_IN` |
| J1 — GADGETEER IN | 8 | `GAD_P8` |
| J1 — GADGETEER IN | 9 | `GAD_P9` |
| J1 — GADGETEER IN | 10 | `GND` |
| J2 — GADGETEER CHAIN | 1 | `+3V3` |
| J2 — GADGETEER CHAIN | 2 | `+5V` |
| J2 — GADGETEER CHAIN | 3 | `CHAIN_P3` |
| J2 — GADGETEER CHAIN | 4 | `CHAIN_P4` |
| J2 — GADGETEER CHAIN | 5 | `CHAIN_P5` |
| J2 — GADGETEER CHAIN | 6 | `CHAIN_P6` |
| J2 — GADGETEER CHAIN | 7 | `CHAIN_P7` |
| J2 — GADGETEER CHAIN | 8 | `CHAIN_P8` |
| J2 — GADGETEER CHAIN | 9 | `CHAIN_P9` |
| J2 — GADGETEER CHAIN | 10 | `GND` |
| J3 — VFD 10V AOUT GND RUN DCM | 1 | `VFD_10V` |
| J3 — VFD 10V AOUT GND RUN DCM | 2 | `VFD_AOUT` |
| J3 — VFD 10V AOUT GND RUN DCM | 3 | `GND_VFD` |
| J3 — VFD 10V AOUT GND RUN DCM | 4 | `VFD_RUN` |
| J3 — VFD 10V AOUT GND RUN DCM | 5 | `VFD_DCM` |

</div>

</details>

### Links, controls and indicators

The footprint values identify each control or indication. A cut-to-disable LED link affects only the indication, not the protected circuit. Check a link's default state on your board before cutting or bridging it.

| Item | Label | Contact nets / observation |
| --- | --- | --- |
| JP7 | CHAIN P7 OPEN | 1 = PWM_IN; 2 = CHAIN_P7 |
| JP5 | CHAIN P5 BRIDGED | 1 = GAD_P5; 2 = CHAIN_P5 |
| JP3 | CHAIN P3 BRIDGED | 1 = GAD_P3; 2 = CHAIN_P3 |
| JP4 | CHAIN P4 BRIDGED | 1 = GAD_P4; 2 = CHAIN_P4 |
| JP8 | CHAIN P8 BRIDGED | 1 = GAD_P8; 2 = CHAIN_P8 |
| JP9 | CHAIN P9 BRIDGED | 1 = GAD_P9; 2 = CHAIN_P9 |
| JP6 | CHAIN P6 OPEN | 1 = RUN_EN; 2 = CHAIN_P6 |

## Practical use with Smoothieboard V2 Prime

The example measures a disconnected board with a Fluke 115. Before connecting a VFD, verify the controller header and cable orientation, the supply limits and the drive’s analog and RUN/DCM requirements.

### Analog meter wiring

The circuit below uses a Prime P12 and a Fluke 115 in ordinary DC-voltage mode. Read the setup, power, meter and limits sheets together. The 10 V field source requires a current limit chosen for your bench setup. Keep host and field returns separate. Check physical mating before powering. Keep the VFD, RUN/DCM, motor and mains disconnected.

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-0" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/bouni-meter.png" title="Analog meter circuit" alt="Analog meter circuit" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-1" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/SETUP.png" title="Host setup" alt="Host setup" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-2" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/POWER.png" title="Field power and separate returns" alt="Field power and separate returns" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-3" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/METER.png" title="Meter connections" alt="Meter connections" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-4" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LIMITS.png" title="Limits and unused connections" alt="Limits and unused connections" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-5" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LOCATOR-prime.png" title="Prime contact-row locations" alt="Prime contact-row locations" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-6" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LOCATOR-analog.png" title="Analog board contact-row locations" alt="Analog board contact-row locations" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

<details markdown="1">
<summary>All 49 numbered contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-0" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-1.png" title="analog J1 1" alt="analog J1 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-1" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-10.png" title="analog J1 10" alt="analog J1 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-2" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-2.png" title="analog J1 2" alt="analog J1 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-3" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-3.png" title="analog J1 3" alt="analog J1 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-4" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-4.png" title="analog J1 4" alt="analog J1 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-5" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-5.png" title="analog J1 5" alt="analog J1 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-6" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-6.png" title="analog J1 6" alt="analog J1 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-7" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-7.png" title="analog J1 7" alt="analog J1 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-8" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-8.png" title="analog J1 8" alt="analog J1 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-9" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-9.png" title="analog J1 9" alt="analog J1 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-10" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-1.png" title="analog J2 1" alt="analog J2 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-11" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-10.png" title="analog J2 10" alt="analog J2 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-12" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-2.png" title="analog J2 2" alt="analog J2 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-13" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-3.png" title="analog J2 3" alt="analog J2 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-14" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-4.png" title="analog J2 4" alt="analog J2 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-15" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-5.png" title="analog J2 5" alt="analog J2 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-16" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-6.png" title="analog J2 6" alt="analog J2 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-17" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-7.png" title="analog J2 7" alt="analog J2 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-18" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-8.png" title="analog J2 8" alt="analog J2 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-19" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-9.png" title="analog J2 9" alt="analog J2 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-20" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-1.png" title="analog J3 1" alt="analog J3 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-21" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-2.png" title="analog J3 2" alt="analog J3 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-22" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-3.png" title="analog J3 3" alt="analog J3 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-23" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-4.png" title="analog J3 4" alt="analog J3 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-24" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-5.png" title="analog J3 5" alt="analog J3 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-25" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP3-1.png" title="analog JP3 1" alt="analog JP3 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-26" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP3-2.png" title="analog JP3 2" alt="analog JP3 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-27" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP4-1.png" title="analog JP4 1" alt="analog JP4 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-28" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP4-2.png" title="analog JP4 2" alt="analog JP4 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-29" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP5-1.png" title="analog JP5 1" alt="analog JP5 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-30" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP5-2.png" title="analog JP5 2" alt="analog JP5 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-31" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP6-1.png" title="analog JP6 1" alt="analog JP6 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-32" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP6-2.png" title="analog JP6 2" alt="analog JP6 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-33" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP7-1.png" title="analog JP7 1" alt="analog JP7 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-34" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP7-2.png" title="analog JP7 2" alt="analog JP7 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-35" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP8-1.png" title="analog JP8 1" alt="analog JP8 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-36" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP8-2.png" title="analog JP8 2" alt="analog JP8 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-37" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP9-1.png" title="analog JP9 1" alt="analog JP9 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-38" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP9-2.png" title="analog JP9 2" alt="analog JP9 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-39" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-1.png" title="prime J34 1" alt="prime J34 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-40" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-10.png" title="prime J34 10" alt="prime J34 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-41" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-2.png" title="prime J34 2" alt="prime J34 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-42" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-3.png" title="prime J34 3" alt="prime J34 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-43" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-4.png" title="prime J34 4" alt="prime J34 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-44" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-5.png" title="prime J34 5" alt="prime J34 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-45" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-6.png" title="prime J34 6" alt="prime J34 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-46" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-7.png" title="prime J34 7" alt="prime J34 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-47" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-8.png" title="prime J34 8" alt="prime J34 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-48" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-9.png" title="prime J34 9" alt="prime J34 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

</details>

## Smoothieware use

### Analog output measured with a Fluke115

Use a Fluke115 in DC-voltage mode (V/COM terminals; see the [manufacturer’s meter manual, Table 7](https://media.fluke.com/5e1db354-3a6e-49cf-9edd-b10800c0e608_original%20file.pdf) for input impedance). It is a named high-impedance analog load, not a VFD. Disconnect the VFD entirely. Do not use current/ohm/LoZ mode. J3.2 VFD_AOUT→meterV and J3.3 GND_VFD→COM. Leave J3.4 RUN/J3.5 DCM unconnected; the board's RUN LED is held off by R4 when J1.6 is left disconnected. No motor, mains or spindle is part of this test.

The separate field-side bench supply is10 V at J3.1 VFD_10V relative to J3.3; it is not an output to be fed from a Prime GPIO. U5 TPS70930 makes FIELD_3V, and TS912 uses the field10 V rail. Use only a current-limited bench setup, and verify the supply, enable and isolator connections. Keep the field and host returns separate; do not join them through another instrument/USB lead and imply preserved isolation. Also check power order, the VFD reference-current budget and physical mating for your setup.

For the host connection use Prime GC/J34.7 PI6→J1.7 PWM_IN, J34.1 host3.3 V→J1.1 and J34.10 hostground→J1.10, with all other J1 contacts disconnected. Reserve PI6 and the shared TIM8 peripheral. The ISO7710F path is non-inverting; low input is the intended idle request, not a universal cable/power-failure shutdown guarantee.

U4 LTC2644IMS-L10#PBF has INA9 PWM_ISO, IDLSEL4 GND, REFSEL11 GND, PD7 FIELD_3V, IOVCC5 FIELD_3V and VCC1 FIELD_3V. The [LTC2644 Rev. B pin functions and operating tables](https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2644.pdf) establish internal2.5 V full scale, 10-bit conversion at30 Hz–25 kHz and idle LOW zero-scale/idle HIGH full-scale. Pin10 REF is the1.25 V reference output in this mode, not a2.5 V external input. R9=30.0k and R10=10.0k make TS912's nominal gain4; R8=100 ohm is series output resistance. Ideal duty25% therefore gives DAC_A0.625 V and VFD_AOUT about2.5 V under this meter load; duty50% about5 V. These are nominal values; they do not state output accuracy or guarantee a 10 V endpoint.

Merge into a valid existing configuration, with no duplicate sections:

```ini
[pwm2]
frequency = 1000
[switch]
spindle_request.enable = true
spindle_request.output_type = hwpwm
spindle_request.output_pin = PWM2_2
spindle_request.input_on_command = M42
spindle_request.input_off_command = M43
spindle_request.subcode = 21
spindle_request.startup_value = 0
spindle_request.halt_set_to = 0
spindle_request.ignore_on_halt = false
```

After the bench setup has powered and initialized, send `M43.21`; wait a second and record the actual low output. Send `M42.21 S25`; wait a second and record. Send `M42.21 S50`; wait a second and record. Finish with `M43.21`; wait and verify the low reading, then remove field power before disconnecting. S is percent duty, not RPM. These25/50% tests avoid trying to prove the op-amp's upper rail swing. At1 kHz each period is1 ms and both high/low durations are well within the 10-bit converter's range. A static HIGH can command full-scale after idle timeout; PWM loss is not inherently safe.

The firmware Switch supplies the actual PWM for this named analog-meter use; it needs no SPI register initialization for this PWM-to-voltage DAC. A VFD application still needs the actual drive's reference/output loading, RUN/DCM circuit, frequency/RPM mapping, speed feedback and fault/stop policy. This test does not cover those machine requirements.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

Implementation references: [M3/M5 handlers](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1138-L1147), [auxiliary UART shell output](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1874-L1878).

## Sources

- [Board source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/bouni-spindle-module-boards/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/design.md)
- [All extension boards](/extension-boards)

Active components: `U1 ILD217T`; `U3 ISO7710FDWR`; `U5 TPS70930DBVR`; `U2 TS912IDT`; `U4 LTC2644IMS-L10#PBF`. Check the matching datasheets for limits.

{% include _includes/extension-board-visuals.html slug="bouni-spindle-module-boards" role="bsm analog" %}
