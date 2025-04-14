<img src="images/Missing.png" alt="G92 - Set Offset" class="pull-right" width="200" height="200">

## G92 G-code

G92 means "set an offset in all coordinate systems".

The machine coordinates are the position of the machine relative to the point at which the [endstops](endstops.md) are hit.

This is by opposition to the workspace coordinates, which are the coordinates you use to position a job you want to do.

This sets an offset valid in all coordinate systems.

G92 makes the current point have the coordinates you want (without motion), where the axis parameters contain the axis numbers you want. All axis parameters are optional, except that at least one must be used. If an axis parameter is not used for a given axis, the coordinate on that axis of the current point is not changed.

When G92 is executed, the origins of all coordinate systems move. They move such that the value of the current controlled point, in the currently active coordinate system, becomes the specified value. All coordinate system's origins are offset this same distance.

For example, suppose the current point is at X=4 and there is currently no G92 offset active. Then `G92 X7` is programmed. This moves all origins -3 in X, which causes the current point to become X=7. This -3 is saved in memory.

Being in incremental distance (`G91`) mode has no effect on the action of G92.

G92 offsets may be already be in effect when the G92 is called. If this is the case, the offset is replaced with a new offset that makes the current point become the specified value.

### Format

The command is used as such: 

```
G92 X10 Y10
```

Which means: set a global offset of 10 in the X axis and 10 in the Y axis.

### Parameters

| Parameter | Usage               | Example  |
| --------- | ------------------- | -------- |
| `X`       | Offset in the X axis | `G92 X10` |
| `Y`       | Offset in the Y axis | `G92 Y10` |
| `Z`       | Offset in the Z axis | `G92 Z10` |
| `A`       | Offset in the A axis | `G92 A10` |
| `B`       | Offset in the B axis | `G92 B10` |
| `C`       | Offset in the C axis | `G92 C10` |

### Friend Gcodes

The [`G92.1`](g92-1.md) Gcode is used to reset the offsets.

### Further reading

These resources are used as references for Gcode: 
- [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html) (some of this page's content is taken from their G92 documentation)
- [Reprap Gcode list](http://reprap.org/wiki/G-code)
