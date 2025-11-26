---
permalink: /g28-reprap
---

{::nomarkdown}
<a href="/images/guide-3d-printer.png">
  <img src="/images/guide-3d-printer.png" alt="3D Printer" style="width: 250px; height: 250px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

# {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} G-code

{::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} means "seek the endstops for each axis, stop once they are found and this position is now the origin for the machine".

This G-code is specific to Reprap and does not conform to the normal G-code standard.

## Format

The command is used as such:

```plaintext
G28 X10 Y10
```

Which means: move until you hit the X and Y endstops, then set the current X position to 10 and the Y position to 10.

You can also use the G-code without any parameters:

```plaintext
G28
```

Which is equivalent to doing:

```plaintext
G28 X0 Y0 Z0
```

## Parameters

| Parameter | Usage | Example |
| --------- | ----- | ------- |
| `X` | Move until you hit this endstop then set the position in this axis to this value | <gcode>G28</gcode> X0 |
| `Y` | Move until you hit this endstop then set the position in this axis to this value | <gcode>G28</gcode> Y0 |
| `Z` | Move until you hit this endstop then set the position in this axis to this value | <gcode>G28</gcode> Z0 |



**Note on GRBL Mode:** The Reprap homing behavior described on this page applies when {::nomarkdown}<setting v1="grbl_mode" v2="general.grbl_mode"></setting>{:/nomarkdown} is set to `false` (default). When GRBL mode is enabled, {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} instead goes to the recorded machine origin. See [GRBL Mode](grbl-mode) for details.



## Configuration



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

See the [Endstops](endstops) module documentation for configuring {::nomarkdown}<setting v1="alpha_min_endstop"></setting>{:/nomarkdown} and related homing settings.

**Basic V1 Configuration:**

```
alpha_homing_direction home_to_min
alpha_min_endstop 1.24!^
alpha_max_endstop 1.25^
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

See the [Endstops](endstops) module documentation for V2 endstop configuration. V2 endstops feature enhanced protection (ESD buffering, configurable pull-up/pull-down).

**Basic V2 Configuration:**

```ini
[alpha endstop]
limit.enable = true
limit.pin = PA0!
homing.enable = true
homing.direction = home_to_min
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Delta

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This section describes Cartesian machine homing. For delta machines, see below.
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

If you are using a [Delta](delta) machine, then you cannot individually home axes.

Instead, all "actuators" are homed together to the top of the machine, which sets you at the top of the Z work area, and at the center of the XY work area.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

If you are using a [Delta](delta) machine (Cartesian or rotary), homing behavior depends on your kinematics type:

**Cartesian Delta (Kossel, Rostock):** All three actuators home together to the top, setting position at the top of the Z work area and center of the XY work area. Use regular {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} command.

**Rotary Delta:** Home using {::nomarkdown}<gcode>G28.4</gcode>{:/nomarkdown} with actuator coordinates (A, B, C). For example: {::nomarkdown}<gcode>G28.4</gcode>{:/nomarkdown} A0 B120 C240 homes the three rotary actuators to their reference angles. See [Rotary Delta](rotary-delta) documentation for calibration and configuration.

**Soft Endstops:** V2 adds automatic software endstop compensation during homing for delta machines, improving accuracy and safety.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Further reading

These resources are used as references for Gcode:
* [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html)
* [Reprap Gcode list](http://reprap.org/wiki/G-code)
