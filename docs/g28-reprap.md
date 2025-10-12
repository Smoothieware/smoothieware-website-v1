{::nomarkdown}
<a href="images/guide-3d-printer.png">
  <img src="images/guide-3d-printer.png" alt="3D Printer" width="250" height="250" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

# G28 G-code

G28 means "seek the endstops for each axis, stop once they are found and this position is now the origin for the machine".

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
| `X` | Move until you hit this endstop then set the position in this axis to this value | G28 X0 |
| `Y` | Move until you hit this endstop then set the position in this axis to this value | G28 Y0 |
| `Z` | Move until you hit this endstop then set the position in this axis to this value | G28 Z0 |

## Configuration

See the [Endstops](endstops) module documentation.

## Delta

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This page assumes you are using a cartesian machine.
</sl-alert>
{:/nomarkdown}

If you are using a [Delta](delta) machine, then you cannot individually home axes.

Instead, all "actuators" are homed together to the top of the machine, which sets you at the top of the Z work area, and at the center of the XY work area.

## Further reading

These resources are used as references for Gcode:
* [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html)
* [Reprap Gcode list](http://reprap.org/wiki/G-code)
