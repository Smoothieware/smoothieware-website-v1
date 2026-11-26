---
layout: default
title: "Differential step/dir/en extender"
permalink: /extensions/differential-step-dir-en-extender
---

# Differential step/dir/en extender

This HOST/REMOTE pair carries one axis's STEP, DIR and ENABLE commands to a compatible remote stepper drive. It transports control logic only; motor power and motor phases stay at the drive. The example drive is the Leadshine DM556E, hardware 2.0.

## How it works

HOST converts three 3.3 V commands to continuously driven balanced pairs. REMOTE receives them and produces common-anode sink controls for the drive. STEP and ENABLE inversion is part of the fault/default-state behaviour, not a cosmetic label. The remote inlet is labelled 18–50 V and the board includes local regulators, but see the supply warning below.

## Power, signals and limits

**Do not power the REMOTE board through its supply inlet:** D7 (STPS1H100A) has cathode contact 1 on `/VIN_FUSED` and anode contact 2 on `/VIN_PROTECTED`. Its ordinary forward direction is therefore from the protected side toward the fused inlet, opposing the inlet-to-regulator feed. The intended feed runs J3.1 → U80 inputs → U80 outputs → `/VIN_FUSED` → D7 → `/VIN_PROTECTED`. See the [ST STPS1H100 datasheet](https://www.st.com/resource/en/datasheet/stps1h100.pdf). Do not bypass D7, reverse the supply, reverse-fit a part or inject power downstream as a workaround.

HOST J1.3 is ENABLE_LOGIC, .4 STEP_LOGIC and .5 DIR_LOGIC, unlike adapters that place STEP on contact 3. REMOTE J2 is 1 +5V common anode, 2 PUL_MINUS, 3 DIR_MINUS, 4 ENA_MINUS. The 8P8C map is STEP pair 1/2, DIR pair 3/6, ENABLE pair 4/5 and signal ground 7/8. It is not Ethernet. The 500 kHz link rate does not override the named drive's 200 kHz maximum, ≥2.5 µs pulse high/low, ≥5 µs DIR setup and ≥200 ms enable lead time.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Violet: Motor DIR.
- Green: Motor enable.
- Blue: Motor STEP.
- Grey: Not routed in this board.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

The host and remote assemblies have separate references below. Identify the assembly before using any pin or link instructions.

### Host assembly

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-overview" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-overview.png" title="Step/dir extender host" alt="Step/dir extender host on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-host-1-5" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-host-1-5-central-pills.png" title="J1 · Host Y interface" alt="J1 · Host Y interface on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-host-6-10" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-host-6-10-central-pills.png" title="J1 · Host Y interface" alt="J1 · Host Y interface on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-link-1-5" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-link-1-5-central-pills.png" title="J2 · Differential cable" alt="J2 · Differential cable on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-link-6-SH" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-link-6-SH-central-pills.png" title="J2 · Differential cable" alt="J2 · Differential cable on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-channels" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-channels.png" title="Three differential channels" alt="Three differential channels on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-polarity" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-polarity.png" title="Transmit logic polarity" alt="Transmit logic polarity on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-idle" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-idle.png" title="Host input idle network" alt="Host input idle network on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-shield" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-shield.png" title="Cable shield reference" alt="Cable shield reference on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-host-reader-compact-mounts" src="/images/extensions/differential-step-dir-en-extender/guides/host/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes on the host assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

### Remote assembly

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-overview" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-overview.png" title="Step/dir extender remote" alt="Step/dir extender remote on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-link-1-5" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-link-1-5-central-pills.png" title="J1 · Differential cable" alt="J1 · Differential cable on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-link-6-SH" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-link-6-SH-central-pills.png" title="J1 · Differential cable" alt="J1 · Differential cable on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-drive-1-4" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-drive-1-4-central-pills.png" title="J2 · 5V driver inputs" alt="J2 · 5V driver inputs on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-power-1-2" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-power-1-2-central-pills.png" title="J3 · Raw power input" alt="J3 · Raw power input on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-channels" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-channels.png" title="Three differential channels" alt="Three differential channels on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-polarity" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-polarity.png" title="Receive logic polarity" alt="Receive logic polarity on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-termination" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-termination-underside-caption.png" title="Termination and FET gates" alt="Termination and FET gates on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-d7-conflict" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-d7-conflict-underside-caption.png" title="D7 supply diode" alt="D7 supply diode on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-d8-conflict" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-d8-conflict.png" title="D8 TVS polarity" alt="D8 TVS polarity on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-supplies" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-supplies-underside-caption.png" title="Intended local supply stages" alt="Intended local supply stages on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-led-D80" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-led-D80-underside-caption.png" title="Input-stage fault indicator" alt="Input-stage fault indicator on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-led-D85" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-led-D85-underside-caption.png" title="Overvoltage indicator" alt="Overvoltage indicator on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-led-D88" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-led-D88-underside-caption.png" title="Reverse-input indicator" alt="Reverse-input indicator on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-shield" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-shield-underside-caption.png" title="Cable shield reference" alt="Cable shield reference on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-step-dir-en-extender-v31-remote-reader-compact-mounts" src="/images/extensions/differential-step-dir-en-extender/guides/remote/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes on the remote assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

The annotated sheets above show the two boards; the contact tables below list the same contacts. Follow the wiring section for the connection procedure.

### host — connector contacts

Contact numbering below is the PCB pad numbering, as shown on the board-reference drawing. Duplicate lands with the same number are shown once, and unnumbered mechanical pads are omitted. Check mating orientation before connecting. `NC` means unconnected, not a spare supported function. Net names alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J2 — RJHSE5380_NOT_ETHERNET | 1 | `/STEP_P` |
| J2 — RJHSE5380_NOT_ETHERNET | 2 | `/STEP_N` |
| J2 — RJHSE5380_NOT_ETHERNET | 3 | `/DIR_P` |
| J2 — RJHSE5380_NOT_ETHERNET | 4 | `/ENABLE_P` |
| J2 — RJHSE5380_NOT_ETHERNET | 5 | `/ENABLE_N` |
| J2 — RJHSE5380_NOT_ETHERNET | 6 | `/DIR_N` |
| J2 — RJHSE5380_NOT_ETHERNET | 7 | `/SIGNAL_GND` |
| J2 — RJHSE5380_NOT_ETHERNET | 8 | `/SIGNAL_GND` |
| J2 — RJHSE5380_NOT_ETHERNET | SH | `/SHIELD` |
| J1 — GADGETEER_Y | 1 | `/+3V3` |
| J1 — GADGETEER_Y | 2 | `/+5V` |
| J1 — GADGETEER_Y | 3 | `/ENABLE_LOGIC` |
| J1 — GADGETEER_Y | 4 | `/STEP_LOGIC` |
| J1 — GADGETEER_Y | 5 | `/DIR_LOGIC` |
| J1 — GADGETEER_Y | 10 | `/SIGNAL_GND` |
| J1 | 6, 7, 8, 9 | NC |

</div>

</details>

Active components: `U3 THVD1451D`; `U1 THVD1451D`; `U4 74LVC2G04`; `U2 THVD1451D`. Check the matching datasheets for limits.

### remote — connector contacts

Contact numbering below is the PCB pad numbering, as shown on the board-reference drawing. Duplicate lands with the same number are shown once, and unnumbered mechanical pads are omitted. Check mating orientation before connecting. `NC` means unconnected, not a spare supported function. Net names alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — RJHSE5380_NOT_ETHERNET | 1 | `/STEP_P` |
| J1 — RJHSE5380_NOT_ETHERNET | 2 | `/STEP_N` |
| J1 — RJHSE5380_NOT_ETHERNET | 3 | `/DIR_P` |
| J1 — RJHSE5380_NOT_ETHERNET | 4 | `/ENABLE_P` |
| J1 — RJHSE5380_NOT_ETHERNET | 5 | `/ENABLE_N` |
| J1 — RJHSE5380_NOT_ETHERNET | 6 | `/DIR_N` |
| J1 — RJHSE5380_NOT_ETHERNET | 7 | `/SIGNAL_GND` |
| J1 — RJHSE5380_NOT_ETHERNET | 8 | `/SIGNAL_GND` |
| J1 — RJHSE5380_NOT_ETHERNET | SH | `/SHIELD` |
| J3 — 18-50VDC_IN | 1 | `/VIN_RAW` |
| J3 — 18-50VDC_IN | 2 | `/SIGNAL_GND` |
| J2 — DM556E_5V_COMMON_ANODE | 1 | `/+5V` |
| J2 — DM556E_5V_COMMON_ANODE | 2 | `/PUL_MINUS` |
| J2 — DM556E_5V_COMMON_ANODE | 3 | `/DIR_MINUS` |
| J2 — DM556E_5V_COMMON_ANODE | 4 | `/ENA_MINUS` |

</details>

### Links, controls and indicators

The footprint values identify each control or indication. A cut-to-disable LED link affects only the indication, not the protected circuit. Check a link's default state on your board before cutting or bridging it.

| Item | Label | Contact nets / observation |
| --- | --- | --- |
| JP82 | CUT TO DISABLE REVERSE_BLINK | 1 = REV_VCC; 2 = PROT_REVERSE_BLINK_LED |
| JP81 | CUT TO DISABLE OVERVOLTAGE | 1 = OV_AUX; 2 = PROT_OVERVOLTAGE_LED |
| D81 | BAT54HGW-Q FAULT LED REVERSE CLAMP | 1 = PROT_EFUSE_FAULT_A; 2 = EF_FAULT_N |
| D80 | RED EFUSE_FAULT | 1 = EF_FAULT_N; 2 = PROT_EFUSE_FAULT_A |
| JP80 | CUT TO DISABLE EFUSE_FAULT | 1 = /VIN_RAW; 2 = PROT_EFUSE_FAULT_LED |
| D88 | RED REVERSE_BLINK | 1 = REV_OUT; 2 = PROT_REVERSE_BLINK_A |
| D85 | AMBER OVERVOLTAGE | 1 = OV_FAULT_N; 2 = PROT_OVERVOLTAGE_A |

## Practical use with Smoothieboard V2 Prime

The example is one DM556E driving one stepper, with the drive separately powered. Check the actuator pulse, polarity and timing requirements before running a motor.

On the Prime2590 P12, the host header rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground. Do not copy this allocation to a different Prime board. Verify the actual unshrouded host header and cable orientation before applying power.

1. Verify the exact DM556E hardware/manual and its common-anode input requirements; do not generalize to an arbitrary external drive.
2. Allocate HOST J1 contacts 3/4/5 as ENABLE/STEP/DIR. On P12 GF/J37, use PB1/PJ4/PA4 in that order; check pin capability and conflicts.
3. Use the dedicated pair-preserving cable between HOST J2 and REMOTE J1; route power separately.
4. Map REMOTE J2.1 to the drive's positive control inputs and .2/.3/.4 to PUL−/DIR−/ENA− only after checking current, polarity and enable truth table.
5. Keep the motor disconnected until reset, cable-open, cable-short and supply-sequence tests show no false STEP and the correct disabled state.

## Smoothieware use

### STEP/DIR request mapping and timing
The host J1.3/.4/.5 are ENABLE_LOGIC/STEP_LOGIC/DIR_LOGIC. A same-numbered GF/J37 request allocation is PB1/PJ4/PA4; contacts 1/2/10 are 3.3 V, 5 V and signal ground. Host-to-remote link pairs are 1–2 STEP, 3–6 DIR and 4–5 ENABLE, with 7/8 signal ground. The remote J2 is a common-anode 5 V DM556E interface:1 +5 V, 2 PUL_MINUS, 3 DIR_MINUS, 4 ENA_MINUS. It is not a generic four-wire logic header.

Reserve these pins exclusively for this external actuator, replace conflicting assignments and preserve the other required contiguous actuators. Check mechanical direction separately:

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PJ4
alpha.dir_pin = PA4
alpha.en_pin = PB1
```

With valid supplies, the HOST J1.3 enable request is active HIGH: LOW is inverted by HOST U4, received HIGH by REMOTE U3 and drives Q3 through R13 to sink ENA−. The DM556E hardware 2.0 manual defines that optocoupler current as disabled. HIGH releases the sink and permits enable. Thus `alpha.en_pin = PB1` has no `!` suffix. This resolves logical polarity; it does not cover startup, disconnected-cable or supply-fault behaviour.

The `[system] step_pulse_us` and `step_frequency` settings control nominal pulse width and step-ticker frequency. They do not enforce the complete drive timing contract. Automatic motion enables the actuator immediately before queuing a move without a 200 ms settling guard. DIR changes at a block start have no explicit 5 µs deadline before every effective STEP, and a missed-unstep fallback can clear and assert STEP in the same interrupt without a minimum-low-time guard. A pre-enable and dwell can provide a nominal first-enable delay, but does not close those block-transition and pulse-low gaps. A source comment about 10 µs is not an enforced timing guarantee. Separate link and sink propagation also remain relevant. Determine pulse width, steps_per_mm, max_rate and acceleration from the driver, motor and mechanics. Because of the D7 supply orientation described above, do not power the remote board or command motion through it.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

Implementation references: [axis parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L252-L366), [Prime lathe sample](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-lathe.ini#L6-L10), [startup parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/main.cpp#L278-L289).

## Sources

- [Board source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/differential-step-dir-en-extender/attempt/versions/v31)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

Active components: `U4 74LVC2G04`; `U2 THVD1451D`; `U1 THVD1451D`; `U3 THVD1451D`; `U6 LM5164DDA`; `U80 TPS26600PWPR AUTO-RETRY EFUSE`; `U82 LMC555CM/NOPB REVERSE BLINK`; `U7 AP2112K-3.3`; `U81 TPS3700DDCR OV STATUS`. Check the matching datasheets for limits.

{% include _includes/extension-board-visuals.html slug="differential-step-dir-en-extender" %}

</details>
