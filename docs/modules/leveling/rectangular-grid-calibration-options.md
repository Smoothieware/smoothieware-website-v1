---
permalink: /rectangular-grid-calibration-options
---

# Rectangular Grid Calibration Options

This page documents all configuration options for the rectangular grid leveling strategy in Smoothie.

The rectangular grid strategy allows you to probe multiple points on your bed in a grid pattern to compensate for uneven bed surfaces.

This is particularly useful for:

- 3D printing on warped beds
- PCB milling on uneven surfaces
- Any application requiring precise Z-axis compensation

## Configuration Options

The following table lists all available configuration options for the rectangular grid leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| <setting v1="leveling-strategy.rectangular-grid.enable" v2="zprobe.leveling"></setting> | `true` | The strategy must be enabled in the config, as well as the zprobe module. |
| <setting v1="leveling-strategy.rectangular-grid.x_size" v2="cartesian grid leveling strategy.x_size"></setting> | `190` | The distance from homed position to the right edge of the bed in mm. |
| <setting v1="leveling-strategy.rectangular-grid.y_size" v2="cartesian grid leveling strategy.y_size"></setting> | `180` | The distance from homed position to the top edge of the bed in mm. |
| <setting v1="leveling-strategy.rectangular-grid.size"></setting> | `7` | The size of the grid (X size == Y size), for example, 7 causes a 7x7 grid with 49 points. Must be an odd number. |
| <setting v1="leveling-strategy.rectangular-grid.grid_x_size" v2="cartesian grid leveling strategy.grid_x_size"></setting> | `9` | The X size of the grid. For X size != Y size. Must be an odd number. |
| <setting v1="leveling-strategy.rectangular-grid.grid_y_size" v2="cartesian grid leveling strategy.grid_y_size"></setting> | `7` | The Y size of the grid. For X size != Y size. Must be an odd number. |
| <setting v1="leveling-strategy.rectangular-grid.probe_offsets" v2="cartesian grid leveling strategy.probe_offsets"></setting> | `0,0,0` | Optional probe offsets from the nozzle or tool head in mm. |
| <setting v1="leveling-strategy.rectangular-grid.save" v2="cartesian grid leveling strategy.save"></setting> | `false` | If the saved grid is to be loaded on boot then this must be set to true. |
| <setting v1="leveling-strategy.rectangular-grid.initial_height" v2="cartesian grid leveling strategy.initial_height"></setting> | `10` | The initial_height (in mm) tells the initial probe where to move to in Z before it probes, this should be around 5-10mm above the bed. |
| <setting v1="leveling-strategy.rectangular-grid.human_readable" v2="cartesian grid leveling strategy.human_readable"></setting> | `true` | Human readable formatting of probe table. |
| <setting v1="leveling-strategy.rectangular-grid.only_by_two_corners" v2="cartesian grid leveling strategy.only_by_two_corners"></setting> | `true` | {::nomarkdown}<gcode>G29</gcode>/<gcode>G31</gcode>/<gcode>G32</gcode> will not work without providing XYAB parameters: XY - start point, AB rectangle size from starting point. "Two corners" not absolutely correct name for this mode, because it uses only one corner and rectangle size. This mode is designed for PCB milling when you work with board size different from bed size. More about this mode in [PCB milling](pcb-milling).{:/nomarkdown} |
| <setting v1="leveling-strategy.rectangular-grid.dampening_start" v2="cartesian grid leveling strategy.dampening_start"></setting> | `0.5` | Compensation normally is applied for all heights, with full power. If you set this setting to a height, the compensation will start to be applied less and less (linearly) until "height_limit" is reached. Any height before this setting will still be compensated fully. |
| <setting v1="leveling-strategy.rectangular-grid.height_limit" v2="cartesian grid leveling strategy.height_limit"></setting> | `1` | The compensation algorithm will stop working after this limit, starting from the "dampening_start" parameter. After the height goes through this limit, no more compensation will be applied. |
| <setting v1="leveling-strategy.rectangular-grid.before_probe_gcode" v2="zprobe.before_probe_gcode"></setting> | <mcode>M280</mcode> | Automatically deploy a bltouch probe before the probing. |
| <setting v1="leveling-strategy.rectangular-grid.after_probe_gcode" v2="zprobe.after_probe_gcode"></setting> | <mcode>M281</mcode> | Automatically stow the bltouch after probing. |

## Related Documentation

For more information about leveling and probing, see:

- [ZProbe](zprobe) - Main documentation for probe configuration
- [PCB Milling](pcb-milling) - Using rectangular grid for PCB work
- [3D Printer Guide](3d-printer-guide) - General 3D printing setup

## Usage Notes

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Grid size must always be an odd number (3, 5, 7, 9, etc.) to ensure there is a center point.
  <br><br>
  The more points you probe, the more accurate the compensation will be, but probing will take longer.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  When using <code>only_by_two_corners</code> mode, you must provide XYAB parameters with <gcode>G29</gcode>/<gcode>G31</gcode>/<gcode>G32</gcode> commands.
  <br><br>
  This is particularly useful for PCB milling where you're working with different board sizes.
</sl-alert>
{:/nomarkdown}

## Example Configuration

```plaintext
# Enable rectangular grid leveling
leveling-strategy.rectangular-grid.enable         true

# Bed dimensions (in mm from home position)
leveling-strategy.rectangular-grid.x_size         200
leveling-strategy.rectangular-grid.y_size         200

# Grid size (7x7 = 49 probe points)
leveling-strategy.rectangular-grid.size           7

# Probe offsets from nozzle (X, Y, Z in mm)
leveling-strategy.rectangular-grid.probe_offsets  0,0,0

# Initial probe height (mm above bed)
leveling-strategy.rectangular-grid.initial_height 10

# Save grid to load on boot
leveling-strategy.rectangular-grid.save           true

# Human readable probe table output
leveling-strategy.rectangular-grid.human_readable true
```
