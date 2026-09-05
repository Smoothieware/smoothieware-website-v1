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
                <p>This turns on rectangular grid leveling, for Cartesian and CoreXY machines.</p>
                <p>Smoothie probes a rectangular area, with whatever dimensions and grid density you set, and stores a height offset at each point. While printing, it interpolates between the four nearest grid points to smooth out Z across the whole bed.</p>
                <p>In v2, set <code>zprobe.leveling</code> to <code>"cartesian grid"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.size"></setting></td>
            <td class="description-cell">
                <p>This is the default grid size for both X and Y, used if you don't set <code>grid_x_size</code> and <code>grid_y_size</code> yourself. It has to be an odd number, so there's a center point.</p>
                <p>It's just a fallback. Set <code>grid_x_size</code> and <code>grid_y_size</code> directly if you want a non-square grid.</p>
                <p>Default: <code>7</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_x_size"></setting></td>
            <td class="description-cell">
                <p>This is how many probe points to use across X, so you can build a rectangular, non-square grid.</p>
                <p>Set both <code>grid_x_size</code> and <code>grid_y_size</code> and they override <code>size</code>, so you can use a different resolution in X than in Y if your bed needs it.</p>
                <p>Must be an odd number. Default: <code>7</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_y_size"></setting></td>
            <td class="description-cell">
                <p>This is how many probe points to use across Y, so you can build a rectangular, non-square grid.</p>
                <p>Set it together with <code>grid_x_size</code> and you can match the grid to your bed's actual dimensions.</p>
                <p>Must be an odd number, so interpolation has a center point to work from. Default: <code>7</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.x_size"></setting></td>
            <td class="description-cell">
                <p>This is the width, in millimeters, of the area to probe in X.</p>
                <p>Grid points get spread evenly across that width.</p>
                <p>You have to set this for rectangular grid leveling to work.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.y_size"></setting></td>
            <td class="description-cell">
                <p>This is the length, in millimeters, of the area to probe in Y.</p>
                <p>Grid points get spread evenly across that length.</p>
                <p>You have to set this for rectangular grid leveling to work.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>This is the offset of the probe tip from the nozzle tip, in X, Y, and Z. Smoothie needs it to know where the probe actually sits relative to the nozzle.</p>
                <p>The Z offset is usually <code>0</code> here, since this strategy works off relative height mapping.</p>
                <p>Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.initial_height"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>This is an optional absolute Z position, in millimeters, to move to before the grid probe starts.</p>
                <p>Leave it unset (NAN) or at 0 or below, and probing starts from wherever Z already is. Set it to a positive value and the machine moves there first, so probing always starts from a known, safe height above the bed.</p>
                <p>Default: <code>10</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.do_home"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">
                <p>This homes the machine automatically before <code>G31</code>/<code>G32</code> probing, unless you're in two-corners mode or you pass <code>R1</code> in the G-code command.</p>
                <p>Homing first means the machine always starts from a known position, so the grid comes out repeatable and accurate. Turn it off if you want to home manually.</p>
                <p>Default: <code>true</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.save"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.save"></setting></td>
            <td class="description-cell">
                <p>When you run <code>M500</code>, this saves an <code>M375</code> command to config-override, so the grid gets loaded from <code>/sd/cartesian.grid</code> (or <code>/sd/cartesian_nm.grid</code> for non-square grids) on every boot.</p>
                <p>That means your bed leveling survives power cycles and you don't have to re-probe every time.</p>
                <p>Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.tolerance"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>This is the probe tolerance, in millimeters, used to check repeatability while the grid is built.</p>
                <p>Smoothie uses it to check your probe measurements are consistent before trusting the grid for compensation.</p>
                <p>Default: <code>0.03</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.only_by_two_corners"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.only_by_two_corners"></setting></td>
            <td class="description-cell">
                <p>This turns on two-corners mode. Instead of using pre-configured dimensions, <code>G31</code>/<code>G32</code> needs XYAB parameters:</p>
                <ul>
                    <li>X, Y: the starting position</li>
                    <li>A: width from that position</li>
                    <li>B: length from that position</li>
                </ul>
                <p>This lets you define the probe area on the fly, but it means the grid can't be saved. You can toggle the mode at runtime too, with <code>G32 R1</code> to enable it or <code>R0</code> to disable it.</p>
                <p>Handy for PCB milling, where board sizes vary. Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.human_readable"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.human_readable"></setting></td>
            <td class="description-cell">
                <p>This changes how <code>M375.1</code> displays the grid, from raw values to a table with coordinates.</p>
                <p>Turn it on and you get X and Y coordinates alongside the height value for each point, so it's easier to read and picture your bed's shape.</p>
                <p>Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.height_limit"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.height_limit"></setting></td>
            <td class="description-cell">
                <p>This is the maximum Z height, in millimeters, where bed compensation still applies. Above this, Z moves get no compensation at all.</p>
                <p>Use it together with <code>dampening_start</code> to create a fade zone, where compensation drops gradually from 100% down to 0%.</p>
                <p>This way tall prints aren't affected by compensation once they don't need it.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.dampening_start"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.dampening_start"></setting></td>
            <td class="description-cell">
                <p>This is the Z height, in millimeters, where bed compensation starts fading out.</p>
                <p>Between <code>dampening_start</code> and <code>height_limit</code>, compensation scales down linearly from 100% to 0%.</p>
                <p>That gives you a smooth transition instead of an abrupt change in Z movement.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.m_attach"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.m_attach"></setting></td>
            <td class="description-cell">
                <p>This turns on manual probe attachment mode, for removable probes.</p>
                <p>Before probing starts, the machine moves to <code>mount_position</code> and waits for you to attach the probe by hand and trigger it to signal it's ready.</p>
                <p>That way you can use a probe that isn't permanently mounted on the tool head. Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.mount_position"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.mount_position"></setting></td>
            <td class="description-cell">
                <p>This is the position, in machine coordinates, the machine moves to and waits at for manual probe attachment, when <code>m_attach</code> is on.</p>
                <p>Pick somewhere safe and easy to reach, so you can attach the probe comfortably. Only matters if <code>m_attach</code> is set to <code>true</code>.</p>
                <p>Format: <code>X,Y,Z</code> (default: <code>0,0,50</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.before_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.before_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>This is the G-code command to run before each probing operation. Use underscore <code>_</code> instead of a space in the command, it gets converted to a space before Smoothie runs it.</p>
                <p>Commonly used to deploy servo-actuated probes like BLTouch, so <code>M280_S10</code> becomes <code>M280 S10</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.after_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.after_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>This is the G-code command to run after each probing operation. Use underscore <code>_</code> instead of a space in the command, it gets converted to a space before Smoothie runs it.</p>
                <p>Commonly used to retract servo-actuated probes like BLTouch, so <code>M281_S90</code> becomes <code>M281 S90</code>.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
