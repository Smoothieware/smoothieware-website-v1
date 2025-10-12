
# Rectangular Grid Calibration Options

The following table lists the configuration options for the rectangular grid leveling strategy:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `leveling-strategy.rectangular-grid.enable` | `true` | The strategy must be enabled in the config, as well as the zprobe module. |
| `leveling-strategy.rectangular-grid.x_size` | `190` | The distance from homed position to the right edge of the bed in mm. |
| `leveling-strategy.rectangular-grid.y_size` | `180` | The distance from homed position to the top edge of the bed in mm. |
| `leveling-strategy.rectangular-grid.size` | `7` | The size of the grid (X size == Y size), for example, 7 causes a 7x7 grid with 49 points. Must be an odd number. |
| `leveling-strategy.rectangular-grid.grid_x_size` | `9` | The X size of the grid. For X size != Y size. Must be an odd number. |
| `leveling-strategy.rectangular-grid.grid_y_size` | `7` | The Y size of the grid. For X size != Y size. Must be an odd number. |
| `leveling-strategy.rectangular-grid.probe_offsets` | `0,0,0` | Optional probe offsets from the nozzle or tool head in mm. |
| `leveling-strategy.rectangular-grid.save` | `false` | If the saved grid is to be loaded on boot then this must be set to true. |
| `leveling-strategy.rectangular-grid.initial_height` | `10` | The initial_height (in mm) tells the initial probe where to move to in Z before it probes, this should be around 5-10mm above the bed. |
| `leveling-strategy.rectangular-grid.human_readable` | `true` | Human readable formatting of probe table. |
| `leveling-strategy.rectangular-grid.only_by_two_corners` | `true` | G29/31/32 will not work without providing XYAB parameters: XY - start point, AB rectangle size from starting point. "Two corners" not absolutely correct name for this mode, because it uses only one corner and rectangle size. This mode is designed for PCB milling when you work with board size different from bed size. More about this mode in [PCB milling](pcb-milling). |
| `leveling-strategy.rectangular-grid.dampening_start` | `0.5` | Compensation normally is applied for all heights, with full power. If you set this setting to a height, the compensation will start to be applied less and less (linearly) until "height_limit" is reached. Any height before this setting will still be compensated fully. |
| `leveling-strategy.rectangular-grid.height_limit` | `1` | The compensation algorithm will stop working after this limit, starting from the "dampening_start" parameter. After the height goes through this limit, no more compensation will be applied. |
| `leveling-strategy.rectangular-grid.before_probe_gcode` | `M280` | Automatically deploy a bltouch probe before the probing. |
| `leveling-strategy.rectangular-grid.after_probe_gcode` | `M281` | Automatically stow the bltouch after probing. |
