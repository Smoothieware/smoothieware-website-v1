
# Z-Probe Options

The following table lists the configuration options for the Z-probe module:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `zprobe.enable` | `true` | Set to true to enable the Z-probe module. This is used to scan surfaces, and to calibrate parameters and compensate for non-planar surfaces. |
| `zprobe.probe_pin` | `1.28!^` | Pin the probe is connected to. |
| `zprobe.slow_feedrate` | `5` | Speed in millimetres/second at which the probe seeks a surface. |
| `zprobe.fast_feedrate` | `100` | Speed in millimetres/second at which the probe does fast moves. |
| `zprobe.return_feedrate` | `50` | Speed in millimetres/second at which the probe does the return after a probe. |
| `zprobe.debounce_ms` | `1` | Debounce the probe pin over this number of milliseconds. Set to 1 or 2 if your probe is too noisy and gives false readings. |
| `zprobe.probe_height` | `5` | Distance above the bed at which the probing is started, once the bed's height is known. |
| `zprobe.max_z` | `200` | Maximum Z (was gamma_max) |
| `zprobe.dwell_before_probing` | `0.2` | Dwell time in seconds before probing. Useful for piezo Z-probe to avoid false trigger. |
