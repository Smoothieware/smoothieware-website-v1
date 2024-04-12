
# Delta Calibration Strategy Options

The following table outlines the configuration options for the delta calibration leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `leveling-strategy.delta-calibration.enable` | `true` | Set to `true` to enable the delta calibration leveling strategy. This uses the probe to determine the plane's tilt and arm's radius in a delta machine. |
| `leveling-strategy.delta-calibration.radius` | `100` | Radius at which to probe the three points. |
| `leveling-strategy.delta-calibration.initial_height` | `10` | The initial height above the bed where we stop the initial move down after home to find the bed. This should be a height that is enough that the probe will not hit the bed and is the absolute Z position. |
