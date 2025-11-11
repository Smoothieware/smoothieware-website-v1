---
permalink: /g92-cnc
---

{::nomarkdown}
# <gcode>G92</gcode> G-code
{:/nomarkdown}

{::nomarkdown}
<a href="/images/gcode.png">
  <img src="/images/gcode.png" alt="G-code icon" style="width: 250px; height: 250px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<gcode>G92</gcode> means "set an offset in all coordinate systems".
{:/nomarkdown}

The machine coordinates are the position of the machine relative to the point at which the [endstops](endstops) are hit.

This is by opposition to the workspace coordinates, which are the coordinates you use to position a job you want to do.

This sets an offset valid in all coordinate systems.

{::nomarkdown}
<gcode>G92</gcode> makes the current point have the coordinates you want (without motion), where the axis parameters contain the axis numbers you want.
{:/nomarkdown}

All axis parameters are optional, except that at least one must be used.

If an axis parameter is not used for a given axis, the coordinate on that axis of the current point is not changed.

{::nomarkdown}
When <gcode>G92</gcode> is executed, the origins of all coordinate systems move.
{:/nomarkdown}

They move such that the value of the current controlled point, in the currently active coordinate system, becomes the specified value.

All coordinate system's origins are offset this same distance.

{::nomarkdown}
For example, suppose the current point is at X=4 and there is currently no <gcode>G92</gcode> offset active.

Then <gcode>G92</gcode> X7 is programmed.
{:/nomarkdown}

This moves all origins -3 in X, which causes the current point to become X=7.

This -3 is saved in memory.

{::nomarkdown}
Being in incremental distance (<gcode>G91</gcode>) mode has no effect on the action of <gcode>G92</gcode>.

<gcode>G92</gcode> offsets may be already be in effect when the <gcode>G92</gcode> is called.
{:/nomarkdown}

If this is the case, the offset is replaced with a new offset that makes the current point become the specified value.

## Format

The command is used as such: 

```
G92 X10 Y10
```

Which means: set a global offset of 10 in the X axis and 10 in the Y axis.

## Parameters

| Parameter | Usage               | Example  |
| --------- | ------------------- | -------- |
| `X`       | Offset in the X axis | <gcode>G92</gcode> X10 |
| `Y`       | Offset in the Y axis | <gcode>G92</gcode> Y10 |
| `Z`       | Offset in the Z axis | <gcode>G92</gcode> Z10 |
| `A`       | Offset in the A axis | <gcode>G92</gcode> A10 |
| `B`       | Offset in the B axis | <gcode>G92</gcode> B10 |
| `C`       | Offset in the C axis | <gcode>G92</gcode> C10 |

## Friend Gcodes

The <gcode>G92.1</gcode> Gcode is used to reset the offsets.

## Further reading

These resources are used as references for Gcode: 
- [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html) (some of this page's content is taken from their G92 documentation)
- [Reprap Gcode list](http://reprap.org/wiki/G-code)
