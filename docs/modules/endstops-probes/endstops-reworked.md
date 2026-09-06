---
permalink: /endstops-reworked
title: "Endstops — reworked"
---

> **Temporary comparison page:** this is the reworked version. [Open the current Endstops page in another tab](/endstops){:target="_blank" rel="noopener"} to compare them side by side.

# Endstops

Endstops give Smoothie a repeatable machine position. The same physical inputs can also stop travel at a limit, while software limits can reject moves outside a known work area after homing.

Use this page in order for a first setup:

1. Choose the job of each switch.
2. Wire one mechanical switch and prove its state with {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown}.
3. Configure and home one axis under control.
4. Set the coordinate established by homing.
5. Add hard or software limits only after homing works.

## Choose what each stop will do

| Job | What happens | When it is active |
| --- | --- | --- |
| Homing switch | The axis finds a repeatable reference point | During a homing cycle |
| Hard limit | Motion halts when an enabled switch triggers | During normal motion |
| Software limit | A move beyond the configured coordinates is rejected or halted | After the machine has homed |

One switch may be used for homing and as a hard limit, but those behaviors are configured separately. A Z probe also has a separate configuration role; see [Probing with Smoothie](zprobe) for probe setup.

{% include modules/endstops-probes/guide-endstops-reworked-for-include.md %}

<span id="configuration"></span>

## Configure a home-to-min axis

The input needs a real pin assignment before {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} can report it. If the input is absent, set its pin, restart, and repeat the released/pressed test. Set the homing direction and travel only after that electrical test passes. The examples below describe the same three-axis, home-to-min setup in each firmware's configuration format.

<span id="quick-migration-guide"></span>

### V1 and V2 working forms

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 flat configuration:**

```
alpha_min_endstop                            1.24^!
alpha_homing_direction                       home_to_min
alpha_min                                    0
alpha_max                                    200
alpha_max_travel                             500

beta_min_endstop                             1.26^!
beta_homing_direction                        home_to_min
beta_min                                     0
beta_max                                     200
beta_max_travel                              500

gamma_min_endstop                            1.28^!
gamma_homing_direction                       home_to_min
gamma_min                                    0
gamma_max                                    200
gamma_max_travel                             500
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 INI configuration:**

```ini
[endstops]
minx.enable = true
minx.pin = PD0^
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.axis = X
minx.max_travel = 500

miny.enable = true
miny.pin = PI1^
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.axis = Y
miny.max_travel = 500

minz.enable = true
minz.pin = PI0^
minz.homing_direction = home_to_min
minz.homing_position = 0
minz.axis = Z
minz.max_travel = 500
```

These pins match the bundled V2 reference configurations. Confirm them against the pinout and configuration supplied for your exact board before copying the block.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Set `home_to_max` and configure the maximum input instead when the switch is at the far end of an axis. Do not enable homing for an axis that has no homing switch.

<span id="configuration-options"></span>

### Use the option reference for exact settings

The [endstop option reference](endstops-options) contains the complete V1/V2 setting catalogue. Use it for rates, retract distances, debounce, trim, kinematics-specific behavior, and less common axes. Keeping that table on its reference page leaves this procedure readable without deleting the details.

## Homing

The input test above is the gate for motion. Do not use a homing command to discover whether the switch is wired correctly.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Check the command dialect first.</strong><br><br>
  In RepRap mode, <gcode>G28</gcode> homes. In CNC/GRBL mode, <gcode>G28</gcode> moves to the position stored with <gcode>G28.1</gcode>. Use <code>$H</code> or <gcode>G28.2</gcode> to home in CNC/GRBL mode. See the <a href="g28">G28 reference</a> for the full distinction.
</sl-alert>
{:/nomarkdown}

In RepRap mode, home one axis first:

```
G28 Z0
```

After each axis passes on its own, home all configured axes:

```
G28
```

A successful homing cycle approaches the switch quickly, stops, retracts, approaches more slowly, and stops on the switch again. If the axis moves away from the switch, correct either the homing direction or the motor direction before trying again.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Configure either the minimum or the maximum endstop for homing on an axis, not both. Leave homing disabled on axes that must not home.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Delta machines using M666 trim:</strong><br><br>
  Non-zero trim values can leave X and Y non-zero immediately after homing. Setting <setting v1="move_to_origin_after_home" v2="endstops.common.move_to_origin_after_home"></setting> to <code>true</code> moves the effector to 0,0 after homing and trim. Make sure the carriages can leave the switches safely before enabling that move.
</sl-alert>
{:/nomarkdown}

<span id="changing-the-origin"></span>

## Set the coordinate after homing

The homing position is the coordinate Smoothie assigns when the switch triggers. It does not have to be 0.

- If X homes to a maximum switch 200 mm from the desired origin, V1 can assign `alpha_max 200`.
- If X homes to a minimum switch on a 200 mm-wide Cartesian machine and the desired origin is the center, V1 can assign `alpha_min -100`.
- A typical delta configuration assigns the homed tower position and can then move the effector to the bed center.

By default, homing assigns the configured coordinate without necessarily moving the tool to 0,0. Use `move_to_origin_after_home` only after confirming the path from the switches to the origin is clear.

<span id="usage-example-with-home-offsets"></span>

### V1 printer example: set the Z home offset

This sequence is for a V1 printer whose bed and nozzle clearances have already been checked:

```
G28
G0 Z5
; Jog down until the nozzle just traps a thin sheet of paper
M306 Z0
G28
G0 Z0
; Confirm the nozzle still traps the paper
M500
```

Repeat it only when the bed or endstop position changes. See [Gamma max](gamma-max) for the full Z-height procedure.

## Optional protection after homing

### Limit switches

An enabled hard limit halts the machine when its switch triggers during normal motion. Smoothie sends `!!` to a compatible host and requires `$X`, {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown}, or a reset before work can continue.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Recovery temporarily permits motion while the switch is held.</strong><br><br>
  Clear the halt, then jog only away from the triggered switch. A move farther into the stop can damage the machine. Keep travel slow and stay ready to cut motor power.
</sl-alert>
{:/nomarkdown}

Enable limits only on inputs that are physically installed and have passed the {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} test:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
alpha_limit_enable   true
beta_limit_enable    true
gamma_limit_enable   true
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstops]
minx.limit_enable = true
miny.limit_enable = true
minz.limit_enable = true
```

V2 enables the limit role per configured input. Enable `maxx.limit_enable`, `maxy.limit_enable`, or `maxz.limit_enable` only when that corresponding maximum input is configured.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

After homing, Smoothie retracts by <setting v1="{axis}_homing_retract_mm" v2="endstops.{min/max}{axis}.retract"></setting> so the switch can release. If coordinate 0 still presses the switch, use an appropriate home offset or minimum coordinate so a move to 0 does not retrigger the limit.

Boards with only three endstop connectors can still use two switches per axis: wire two NC switches in series, or two NO switches in parallel. NC series wiring retains the broken-wire fail-safe behavior.

### Soft endstops

Software limits compare each commanded destination with the configured work-area coordinates. They only become meaningful after the machine has homed and established its position.

For V1, start with the maintained sample form:

```
soft_endstop.enable   true
soft_endstop.halt     true
soft_endstop.x_min    0.0
soft_endstop.y_min    0.0
soft_endstop.x_max    500.0
soft_endstop.y_max    500.0
```

Leave an axis boundary absent when that axis should not be checked. Send {::nomarkdown}<mcode>M211</mcode>{:/nomarkdown} to inspect the current state, {::nomarkdown}<mcode>M211 S0</mcode>{:/nomarkdown} to disable it temporarily, and {::nomarkdown}<mcode>M211 S1</mcode>{:/nomarkdown} to enable it again.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Keep <code>soft_endstop.halt</code> enabled. Silently ignoring an out-of-bounds move can make later commands continue from a position the host did not expect.
</sl-alert>
{:/nomarkdown}

The bundled V2 configurations document per-input hard limits but do not provide a V2 software-limit block. Do not translate the V1 keys by spelling alone; use a firmware version that documents the feature or verify it against the V2 firmware in use.

<span id="powered-endstops-wiring"></span>

## Powered and unusual sensors

Optical, Hall-effect, inductive, and capacitive sensors need more care than a bare switch. Before connecting one, verify all three items in its data sheet:

1. Supply voltage
2. Output voltage and output type
3. Whether the board input needs a pull-up, pull-down, inversion, or external level protection

Do not assume every powered sensor uses 5 V or produces a board-safe signal. Inductive and capacitive sensors commonly need a higher supply and may require an interface circuit.

On a V1 Smoothieboard, an X-min example changes pull behavior like this:

```
alpha_min_endstop   1.24^   # pull-up
alpha_min_endstop   1.24    # no internal pull
alpha_min_endstop   1.24v   # pull-down
```

If the endstop connector's input circuit does not suit the sensor, use a compatible free GPIO only after checking the [pinout](pinout) and [pin configuration rules](pin-configuration).

<span id="types-of-endstops"></span>
<span id="sensor-types"></span>
<span id="recommendations"></span>

## Choose a sensor type

For most machines, begin with a mechanical microswitch: it is inexpensive, repeatable, easy to diagnose, and does not need a power supply. Optical and Hall-effect sensors can be useful when contact is unsuitable. Inductive, capacitive, force-sensitive, and retractable probes have additional electrical or mechanical requirements.

Use the [endstop and probe sensor comparison](sensor-types) before choosing a powered or non-contact device.

<span id="additional-resources"></span>
<span id="external-resources"></span>

## Reference and further reading

- [Complete endstop option reference](endstops-options)
- [G28 and homing command reference](g28)
- [Smoothieboard V1 pinout](pinout)
- [Smoothieboard V2 Prime board page](smoothieboard-v2-prime)
- [STM32H7 pin-use reference](stm32h7-pin-usage)
- [Z-probe setup](zprobe)
- [V1 endstop firmware source](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/endstops/Endstops.cpp)

<span id="general-video-about-mechanical-endstops"></span>

### Mechanical endstop video

The written procedure above is the source of truth for wiring and testing. This external video provides an additional visual explanation.

{::nomarkdown}
<div style="max-width: 720px; margin: 1.5rem auto; aspect-ratio: 16 / 9;">
  <iframe title="Mechanical endstop overview" width="560" height="315" src="https://www.youtube.com/embed/FrYdAiSLKig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block; width: 100%; height: 100%;"></iframe>
</div>
{:/nomarkdown}
