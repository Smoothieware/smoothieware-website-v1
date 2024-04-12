
# Three Point Leveling Configuration Options

The following table lists the configuration options for the three-point leveling strategy in Smoothieware:

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
