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
            <td class="description-cell">
                <p>Enables the rectangular grid leveling strategy for Cartesian and CoreXY machines.</p>
                <p>The strategy probes a rectangular area with configurable dimensions and grid density, storing height offsets at each point. During printing, interpolation between the nearest four grid points provides smooth Z compensation across the entire bed.</p>
                <p>In v2, set <setting v2="zprobe.leveling"></setting> to <raw>"cartesian grid"</raw>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.size"></setting></td>
            <td class="description-cell">
                <p>Default grid size for both X and Y dimensions if <setting v1="leveling-strategy.rectangular-grid.grid_x_size" v2="cartesian grid leveling strategy.grid_x_size"></setting> and <setting v1="leveling-strategy.rectangular-grid.grid_y_size" v2="cartesian grid leveling strategy.grid_y_size"></setting> are not explicitly specified. Must be an odd number, to ensure a center point exists.</p>
                <p>This is a fallback value — specifying <setting v1="leveling-strategy.rectangular-grid.grid_x_size" v2="cartesian grid leveling strategy.grid_x_size"></setting> and <setting v1="leveling-strategy.rectangular-grid.grid_y_size" v2="cartesian grid leveling strategy.grid_y_size"></setting> directly allows non-square grids.</p>
                <p>Default: <raw>7</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_x_size"></setting></td>
            <td class="description-cell">
                <p>Number of probe points in the X dimension, allowing rectangular (non-square) grids.</p>
                <p>If both <setting v1="leveling-strategy.rectangular-grid.grid_x_size" v2="cartesian grid leveling strategy.grid_x_size"></setting> and <setting v1="leveling-strategy.rectangular-grid.grid_y_size" v2="cartesian grid leveling strategy.grid_y_size"></setting> are specified, they override the <setting v1="leveling-strategy.rectangular-grid.size" v2="cartesian grid leveling strategy.size"></setting> setting — enabling different resolutions in X and Y for beds with different characteristics.</p>
                <p>Must be an odd number. Default: <raw>7</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_y_size"></setting></td>
            <td class="description-cell">
                <p>Number of probe points in the Y dimension, allowing rectangular (non-square) grids.</p>
                <p>When specified together with <setting v1="leveling-strategy.rectangular-grid.grid_x_size" v2="cartesian grid leveling strategy.grid_x_size"></setting>, enables non-square grids tailored to bed dimensions.</p>
                <p>Must be odd, to ensure proper interpolation with a center point. Default: <raw>7</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.x_size"></setting></td>
            <td class="description-cell">
                <p>Width of the rectangular bed area to probe in the X dimension, measured in millimeters — the total X extent of the probing area.</p>
                <p>Grid points are evenly distributed across this width.</p>
                <p>This is a required setting for the rectangular grid strategy to function.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.y_size"></setting></td>
            <td class="description-cell">
                <p>Length of the rectangular bed area to probe in the Y dimension, measured in millimeters — the total Y extent of the probing area.</p>
                <p>Grid points are evenly distributed across this length.</p>
                <p>This is a required setting for the rectangular grid strategy to function.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>Offset of the probe tip from the nozzle tip in X, Y, and Z — critical for accurate positioning, since it tells the firmware where the probe actually is relative to the print nozzle.</p>
                <p>The Z offset is typically <raw>0</raw> for this strategy, since it uses relative height mapping.</p>
                <p>Format: <raw>X,Y,Z</raw> (default: <raw>0,0,0</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.initial_height"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>Optional absolute Z machine position in millimeters to move to before starting the grid probe.</p>
                <p>If not set (NAN) or ≤0, probing starts from the current Z position. When set to a valid positive value, it acts as a safety feature, ensuring the probe starts from a known height above the bed.</p>
                <p>Default: <raw>10</raw> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.do_home"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">
                <p>Automatically homes before running <gcode>G31</gcode>/<gcode>G32</gcode> probing operations (unless in two-corners mode, or <raw>R1</raw> is specified in the G-code command).</p>
                <p>Homing ensures the machine starts from a known position, for repeatable and accurate grid generation. Can be disabled for manual homing control.</p>
                <p>Default: <raw>true</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.save"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.save"></setting></td>
            <td class="description-cell">
                <p>Automatically saves an <mcode>M375</mcode> command to config-override when <mcode>M500</mcode> is issued, causing the grid to be loaded from <raw>/sd/cartesian.grid</raw> (or <raw>/sd/cartesian_nm.grid</raw> for non-square grids) on boot.</p>
                <p>Enables persistent bed leveling across power cycles without re-probing every time.</p>
                <p>Default: <raw>false</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.tolerance"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>Probe tolerance in millimeters for repeatability validation during grid creation.</p>
                <p>Used to verify that probe measurements are consistent and repeatable, ensuring the grid data is reliable before it is used for compensation.</p>
                <p>Default: <raw>0.03</raw> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.only_by_two_corners"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.only_by_two_corners"></setting></td>
            <td class="description-cell">
                <p>Enables two-corners mode, where <gcode>G31</gcode>/<gcode>G32</gcode> requires XYAB parameters instead of using pre-configured dimensions:</p>
                <ul>
                    <li>X, Y: the starting position</li>
                    <li>A: width from that position</li>
                    <li>B: length from that position</li>
                </ul>
                <p>This allows dynamic probe area definition but prevents grid saving. Mode can be toggled at runtime with <gcode>G32 R1</gcode> (enable) or <raw>R0</raw> (disable).</p>
                <p>Useful for PCB milling with varying board sizes. Default: <raw>false</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.human_readable"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.human_readable"></setting></td>
            <td class="description-cell">
                <p>Changes the grid display format for <mcode>M375.1</mcode> from raw values to a human-readable table with coordinates.</p>
                <p>When enabled, the output includes X and Y coordinates for each grid point along with the height value, making it easier to understand and visualize the bed topology.</p>
                <p>Default: <raw>false</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.height_limit"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.height_limit"></setting></td>
            <td class="description-cell">
                <p>Maximum Z height in millimeters where bed compensation is applied. Above this height, no compensation is added to Z moves.</p>
                <p>Used together with <setting v1="leveling-strategy.rectangular-grid.dampening_start" v2="cartesian grid leveling strategy.dampening_start"></setting> to create a fade zone where compensation gradually reduces from 100% to 0%.</p>
                <p>Prevents compensation from affecting tall prints unnecessarily.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.dampening_start"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.dampening_start"></setting></td>
            <td class="description-cell">
                <p>Z height in millimeters where bed compensation begins to fade out.</p>
                <p>Between <setting v1="leveling-strategy.rectangular-grid.dampening_start" v2="cartesian grid leveling strategy.dampening_start"></setting> and <setting v1="leveling-strategy.rectangular-grid.height_limit" v2="cartesian grid leveling strategy.height_limit"></setting>, compensation is linearly scaled from 100% to 0%.</p>
                <p>This creates a smooth transition zone where compensation gradually reduces, preventing abrupt changes in Z movement.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.m_attach"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.m_attach"></setting></td>
            <td class="description-cell">
                <p>Enables manual probe attachment mode for removable probes.</p>
                <p>Before probing begins, the machine moves to <setting v1="leveling-strategy.rectangular-grid.mount_position" v2="cartesian grid leveling strategy.mount_position"></setting> and waits for the user to manually attach the probe and trigger it to signal readiness.</p>
                <p>This allows use of removable probes that are not permanently mounted on the tool head. Default: <raw>false</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.mount_position"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.mount_position"></setting></td>
            <td class="description-cell">
                <p>Position in machine coordinates where the machine moves and waits for manual probe attachment when <setting v1="leveling-strategy.rectangular-grid.m_attach" v2="cartesian grid leveling strategy.m_attach"></setting> is enabled.</p>
                <p>Should be a safe, easily accessible position where the operator can comfortably attach the removable probe. Only used if <setting v1="leveling-strategy.rectangular-grid.m_attach" v2="cartesian grid leveling strategy.m_attach"></setting> is set to <raw>true</raw>.</p>
                <p>Format: <raw>X,Y,Z</raw> (default: <raw>0,0,50</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.before_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.before_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>G-code command to execute before each individual probing operation. Use underscore <raw>_</raw> as the space separator in the command string — underscores are automatically converted to spaces before execution.</p>
                <p>Commonly used to deploy servo-actuated probes like BLTouch (e.g., <raw>M280_S10</raw> becomes <mcode>M280 S10</mcode>).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.after_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.after_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>G-code command to execute after each individual probing operation. Use underscore <raw>_</raw> as the space separator in the command string — underscores are automatically converted to spaces before execution.</p>
                <p>Commonly used to retract servo-actuated probes like BLTouch (e.g., <raw>M281_S90</raw> becomes <mcode>M281 S90</mcode>).</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
