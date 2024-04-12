
# Delta Grid Calibration Options

The following are the configuration options for the Delta Grid leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `leveling-strategy.delta-grid.enable` | `true` | The strategy must be enabled in the config, as well as the zprobe module. |
| `leveling-strategy.delta-grid.size` | `7` | The size of the grid, for example, 7 causes a 7x7 grid with 49 points. Must be an odd number. |
| `leveling-strategy.delta-grid.probe_offsets` | `0,0,0` | Optional probe offsets from the nozzle or tool head. **NOTE: Z must be 0** |
| `leveling-strategy.delta-grid.save` | `false` | If the saved grid is to be loaded on boot then this must be set to true. |
| `leveling-strategy.delta-grid.initial_height` | `10` | Optionally, an initial_height can be set that tells the initial probe where to stop the fast descent before it probes. This should be around 5-10mm above the bed. |
