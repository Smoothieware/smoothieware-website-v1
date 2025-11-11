---
permalink: /three-point-strategy-options
---

# Three Point Leveling Configuration Options

The three-point leveling strategy in Smoothieware probes three points on your bed to define a plane, then keeps the Z axis parallel to that plane during printing.

This is useful if your Z plate/bed is not perfectly aligned with your XY gantry.

The following table lists the configuration options for this leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| <setting v1="leveling-strategy.three-point-leveling.enable" v2="zprobe.leveling"></setting> | `true` | Set to `true` to enable the leveling strategy that probes three points to define a plane and then keeps the Z parallel to that plane. This is useful if your Z plate/bed is not perfectly aligned with your XY gantry. |
| <setting v1="leveling-strategy.three-point-leveling.point1"></setting> | `100.0,0.0` | The first probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point2"></setting> | `200.0,200.0` | The second probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point3"></setting> | `0.0,200.0` | The third probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.home_first" v2="three point leveling strategy.home_first"></setting> | `true` | Home the X and Y axes before probing. |
| <setting v1="leveling-strategy.three-point-leveling.tolerance" v2="three point leveling strategy.tolerance"></setting> | `0.03` | The probe tolerance in millimeters, anything less than this will be ignored, default is `0.03mm`. |
| <setting v1="leveling-strategy.three-point-leveling.probe_offsets" v2="three point leveling strategy.probe_offsets"></setting> | `0,0,0` | The probe offset from nozzle, must be X,Y,Z (Z should always be 0), default is no offset. This is used if your nozzle is not exactly at the same position as where your tool would be. |
| <setting v1="leveling-strategy.three-point-leveling.save_plane" v2="three point leveling strategy.save_plane"></setting> | `false` | {::nomarkdown}Set to <code>true</code> to allow the bed plane to be saved with <mcode>M500</mcode>, default is <code>false</code>.{:/nomarkdown} |

{::nomarkdown}
## Usage

After configuring three-point leveling, you need to:

<ol>
<li><strong>Home your machine</strong>: Use <gcode>G28</gcode> to home all axes</li>
<li><strong>Run the leveling</strong>: Use <gcode>G32</gcode> to execute the three-point probe sequence</li>
<li><strong>Save (optional)</strong>: If <code>save_plane</code> is true, use <mcode>M500</mcode> to save the results</li>
</ol>

The leveling will be applied to all subsequent moves automatically.
{:/nomarkdown}

## Related Documentation

- [ZProbe](zprobe) - Z-probe configuration and usage
- [ZProbe Options](zprobe-options) - All Z-probe configuration options
- [3D Printer Guide](3d-printer-guide) - Complete printer setup guide
- [Configuration Options](configuration-options) - All Smoothieware configuration options
