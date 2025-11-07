---
permalink: /delta-calibration-strategy-options
---

# Delta Calibration Strategy Options

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Delta Calibration" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

The delta calibration leveling strategy is specifically designed for linear delta machines.

It uses a Z-probe to automatically determine the bed plane's tilt and the arm's radius.

This provides precise calibration for delta kinematics.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This strategy requires a properly configured <a href="zprobe">Z-probe</a> to function correctly.
</sl-alert>
{:/nomarkdown}

## Configuration Options

The following table outlines the configuration options for the delta calibration leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `leveling-strategy.delta-calibration.enable` | `true` | Set to `true` to enable the delta calibration leveling strategy. This uses the probe to determine the plane's tilt and arm's radius in a delta machine. |
| `leveling-strategy.delta-calibration.radius` | `100` | Radius at which to probe the three points. |
| `leveling-strategy.delta-calibration.initial_height` | `10` | The initial height above the bed where we stop the initial move down after home to find the bed. This should be a height that is enough that the probe will not hit the bed and is the absolute Z position. |

## Related Documentation

- [Z-Probe Configuration](zprobe)
- [Delta Configuration](delta)
- [Leveling Strategies Overview](zprobe#leveling-strategies)
