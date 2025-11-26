{::nomarkdown}
<table class="config-options-table">
    <thead>
        <tr>
            <th style="width: 25%;">V1 Setting</th>
            <th style="width: 25%;">V2 Setting</th>
            <th style="width: 50%;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.enable"></setting></td>
            <td><setting no-version v2="zprobe.leveling"></setting></td>
            <td class="description-cell">Enables the rectangular grid leveling strategy for Cartesian and CoreXY machines. The strategy probes a rectangular area with configurable dimensions and grid density, storing height offsets at each point. During printing, interpolation between the nearest four grid points provides smooth Z compensation across the entire bed. In v2, set <code>zprobe.leveling</code> to <code>"cartesian grid"</code>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.size"></setting></td>
            <td class="description-cell">Default grid size for both X and Y dimensions if <code>grid_x_size</code> and <code>grid_y_size</code> are not explicitly specified. Must be an odd number to ensure a center point exists. This is a fallback value; specifying <code>grid_x_size</code> and <code>grid_y_size</code> directly allows non-square grids. Default: <code>7</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_x_size"></setting></td>
            <td class="description-cell">Number of probe points in the X dimension, allowing rectangular (non-square) grids. If both <code>grid_x_size</code> and <code>grid_y_size</code> are specified, they override the 'size' setting. This enables different resolutions in X and Y directions for beds with different characteristics. Must be an odd number. Default: <code>7</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_y_size"></setting></td>
            <td class="description-cell">Number of probe points in the Y dimension, allowing rectangular (non-square) grids. When specified together with <code>grid_x_size</code>, enables non-square grids tailored to bed dimensions. Must be odd to ensure proper interpolation with a center point. Default: <code>7</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.x_size"></setting></td>
            <td class="description-cell">Width of the rectangular bed area to probe in the X dimension, measured in millimeters. This defines the total X extent of the probing area. The grid points are evenly distributed across this width. This is a required setting for the rectangular grid strategy to function.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.y_size"></setting></td>
            <td class="description-cell">Length of the rectangular bed area to probe in the Y dimension, measured in millimeters. This defines the total Y extent of the probing area. The grid points are evenly distributed across this length. This is a required setting for the rectangular grid strategy to function.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets are critical for accurate positioning as they tell the firmware where the probe actually is relative to the print nozzle. The Z offset is typically 0 for this strategy as it uses relative height mapping. Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.initial_height"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">Optional absolute Z machine position in millimeters to move to before starting the grid probe. If not set (NAN) or ≤0, probing starts from the current Z position. When set to a valid positive value, provides a safety feature by ensuring the probe starts from a known height above the bed. Default: <code>10</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.do_home"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">Automatically home before running <code>G31</code>/<code>G32</code> probing operations (unless in two-corners mode or R1 is specified in the G-code command). Homing ensures the machine starts from a known position for repeatable and accurate grid generation. Can be disabled for manual homing control. Default: <code>true</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.save"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.save"></setting></td>
            <td class="description-cell">Automatically saves <code>M375</code> command to config-override when <code>M500</code> is issued, causing the grid to be loaded from <code>/sd/cartesian.grid</code> (or <code>/sd/cartesian_nm.grid</code> for non-square grids) on boot. Enables persistent bed leveling across power cycles without re-probing every time. Default: <code>false</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.tolerance"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">Probe tolerance in millimeters for repeatability validation during grid creation. Used to verify that probe measurements are consistent and repeatable, ensuring the grid data is reliable before it is used for compensation. Default: <code>0.03</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.only_by_two_corners"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.only_by_two_corners"></setting></td>
            <td class="description-cell">Enables two-corners mode where <code>G31</code>/<code>G32</code> requires XYAB parameters instead of using pre-configured dimensions. In this mode: XY defines the starting position, A defines width, B defines length from that position. This allows dynamic probe area definition but prevents grid saving. Mode can be toggled at runtime with <code>G32 R1</code> (enable) or <code>R0</code> (disable). Useful for PCB milling with varying board sizes. Default: <code>false</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.human_readable"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.human_readable"></setting></td>
            <td class="description-cell">Changes the grid display format for <code>M375.1</code> from raw values to a human-readable table with coordinates. When enabled, the output includes X and Y coordinates for each grid point along with the height value, making it easier to understand and visualize the bed topology. Default: <code>false</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.height_limit"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.height_limit"></setting></td>
            <td class="description-cell">Maximum Z height in millimeters where bed compensation is applied. Above this height, no compensation is added to Z moves. Used together with <code>dampening_start</code> to create a fade zone where compensation gradually reduces from 100% to 0%. Prevents compensation from affecting tall prints unnecessarily.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.dampening_start"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.dampening_start"></setting></td>
            <td class="description-cell">Z height in millimeters where bed compensation begins to fade out. Between <code>dampening_start</code> and <code>height_limit</code>, compensation is linearly scaled from 100% to 0%. This creates a smooth transition zone where compensation gradually reduces, preventing abrupt changes in Z movement.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.m_attach"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.m_attach"></setting></td>
            <td class="description-cell">Enables manual probe attachment mode for removable probes. Before probing begins, the machine moves to the <code>mount_position</code> and waits for the user to manually attach the probe and trigger it to signal readiness. This allows use of removable probes that are not permanently mounted on the tool head. Default: <code>false</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.mount_position"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.mount_position"></setting></td>
            <td class="description-cell">Position in machine coordinates where the machine moves and waits for manual probe attachment when <code>m_attach</code> is enabled. Should be a safe, easily accessible position where the operator can comfortably attach the removable probe. Only used if <code>m_attach</code> is set to <code>true</code>. Format: <code>X,Y,Z</code> (default: <code>0,0,50</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.before_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.before_probe_gcode"></setting></td>
            <td class="description-cell">G-code command to execute before each individual probing operation. Use underscore <code>_</code> as space separator in the command string. Commonly used to deploy servo-actuated probes like BLTouch (e.g., <code>M280_S10</code> becomes <code>M280 S10</code>). The underscore characters are automatically converted to spaces before execution.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.after_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.after_probe_gcode"></setting></td>
            <td class="description-cell">G-code command to execute after each individual probing operation. Use underscore <code>_</code> as space separator in the command string. Commonly used to retract servo-actuated probes like BLTouch (e.g., <code>M281_S90</code> becomes <code>M281 S90</code>). The underscore characters are automatically converted to spaces before execution.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
