---
permalink: /three-point-strategy-options
---

# Three Point Leveling Configuration Options

The three-point leveling strategy in Smoothieware probes three points on your bed to define a plane, then keeps the Z axis parallel to that plane during printing.

This is useful if your Z plate/bed is not perfectly aligned with your XY gantry.

The following table lists the configuration options for this leveling strategy:

| Option | Value | Description |
| ------ | :-----: | ----------- |
| <setting v1="leveling-strategy.three-point-leveling.enable" v2="zprobe.leveling"></setting> | {::nomarkdown}<raw>`true`</raw>{:/nomarkdown} | Set to `true` to enable the leveling strategy that probes three points to define a plane and then keeps the Z parallel to that plane. This is useful if your Z plate/bed is not perfectly aligned with your XY gantry. |
| <setting v1="leveling-strategy.three-point-leveling.point1"></setting> | {::nomarkdown}<raw>`100.0,0.0`</raw>{:/nomarkdown} | The first probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point2"></setting> | {::nomarkdown}<raw>`200.0,200.0`</raw>{:/nomarkdown} | The second probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.point3"></setting> | {::nomarkdown}<raw>`0.0,200.0`</raw>{:/nomarkdown} | The third probe point (X, Y). |
| <setting v1="leveling-strategy.three-point-leveling.home_first" v2="three point leveling strategy.home_first"></setting> | {::nomarkdown}<raw>`true`</raw>{:/nomarkdown} | Home the X and Y axes before probing. |
| <setting v1="leveling-strategy.three-point-leveling.tolerance" v2="three point leveling strategy.tolerance"></setting> | {::nomarkdown}<raw>`0.03`</raw>{:/nomarkdown} | The probe tolerance in millimeters, anything less than this will be ignored, default is `0.03mm`. |
| <setting v1="leveling-strategy.three-point-leveling.probe_offsets" v2="three point leveling strategy.probe_offsets"></setting> | {::nomarkdown}<raw>`0,0,0`</raw>{:/nomarkdown} | The probe offset from nozzle, must be X,Y,Z (Z should always be 0), default is no offset. This is used if your nozzle is not exactly at the same position as where your tool would be. |
| <setting v1="leveling-strategy.three-point-leveling.save_plane" v2="three point leveling strategy.save_plane"></setting> | {::nomarkdown}<raw>`false`</raw>{:/nomarkdown} | Set to `true` to allow the bed plane to be saved with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}, default is `false`. |

## Usage

After configuring three-point leveling, you need to:

1. **Home your machine**: Use {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} to home all axes
2. **Run the leveling**: Use {::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} to execute the three-point probe sequence
3. **Save (optional)**: If `save_plane` is true, use {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown} to save the results

The leveling will be applied to all subsequent moves automatically.

## Related Documentation

- [ZProbe](zprobe) - Z-probe configuration and usage
- [ZProbe Options](zprobe-options) - All Z-probe configuration options
- [3D Printer Guide](3d-printer-guide) - Complete printer setup guide
- [Configuration Options](configuration-options) - All Smoothieware configuration options
