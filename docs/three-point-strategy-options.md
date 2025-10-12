# Three Point Leveling Configuration Options

The three-point leveling strategy in Smoothieware probes three points on your bed to define a plane, then keeps the Z axis parallel to that plane during printing.

This is useful if your Z plate/bed is not perfectly aligned with your XY gantry.

The following table lists the configuration options for this leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `leveling-strategy.three-point-leveling.enable` | `true` | Set to `true` to enable the leveling strategy that probes three points to define a plane and then keeps the Z parallel to that plane. This is useful if your Z plate/bed is not perfectly aligned with your XY gantry. |
| `leveling-strategy.three-point-leveling.point1` | `100.0,0.0` | The first probe point (X, Y). |
| `leveling-strategy.three-point-leveling.point2` | `200.0,200.0` | The second probe point (X, Y). |
| `leveling-strategy.three-point-leveling.point3` | `0.0,200.0` | The third probe point (X, Y). |
| `leveling-strategy.three-point-leveling.home_first` | `true` | Home the X and Y axes before probing. |
| `leveling-strategy.three-point-leveling.tolerance` | `0.03` | The probe tolerance in millimeters, anything less than this will be ignored, default is `0.03mm`. |
| `leveling-strategy.three-point-leveling.probe_offsets` | `0,0,0` | The probe offset from nozzle, must be X,Y,Z (Z should always be 0), default is no offset. This is used if your nozzle is not exactly at the same position as where your tool would be. |
| `leveling-strategy.three-point-leveling.save_plane` | `false` | Set to `true` to allow the bed plane to be saved with `M500`, default is `false`. |

## Usage

After configuring three-point leveling, you need to:

1. **Home your machine**: Use `G28` to home all axes
2. **Run the leveling**: Use `G32` to execute the three-point probe sequence
3. **Save (optional)**: If `save_plane` is true, use `M500` to save the results

The leveling will be applied to all subsequent moves automatically.

## Related Documentation

- [ZProbe](zprobe) - Z-probe configuration and usage
- [ZProbe Options](zprobe-options) - All Z-probe configuration options
- [3D Printer Guide](3d-printer-guide) - Complete printer setup guide
- [Configuration Options](configuration-options) - All Smoothieware configuration options
