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
            <td><setting no-version v1="leveling-strategy.delta-grid.enable"></setting></td>
            <td><setting no-version v2="zprobe.leveling"></setting></td>
            <td class="description-cell">Enables the delta grid leveling strategy for height mapping across circular delta printer beds. The strategy probes a grid of points in a circular pattern (skipping corners outside the radius) and stores height offsets. During printing, the firmware interpolates between the nearest four grid points to calculate Z compensation for any XY position. In v2, set <code>zprobe.leveling</code> to <code>"delta grid"</code>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.radius"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.radius"></setting></td>
            <td class="description-cell">Radius of the circular bed area to probe and compensate in millimeters. The grid probes a square region, but points outside this radius are skipped, creating a circular probe pattern. This radius should be at least as large as the maximum printing radius to ensure full bed compensation coverage. Default: <code>50</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.size"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.size"></setting></td>
            <td class="description-cell">Grid size in both X and Y dimensions, determining the total number of probe points. A size of 7 creates a 7×7 grid = 49 potential probe points (points outside the radius are automatically skipped). Larger grids provide more accurate compensation but increase probing time significantly. Must be an odd number. Default: <code>7</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets compensate for the physical displacement between where the probe triggers and where the nozzle actually is. Correct offsets are essential for accurate bed compensation. Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.initial_height"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">Absolute Z machine position in millimeters to move to after homing before starting the grid probe sequence. This safety parameter prevents the probe from crashing into the bed during the initial descent. Must be high enough to clear the bed surface. Default: <code>10</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.do_home"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">Automatically homes all axes before running the <code>G31</code> grid probing sequence. Homing ensures the machine is at a known position before probing, which is essential for repeatable and accurate grid generation. Disable only if you want manual control over the homing process. Default: <code>true</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.save"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.save"></setting></td>
            <td class="description-cell">Automatically saves <code>M375</code> command to config-override when <code>M500</code> is issued, causing the grid to be loaded from <code>/sd/delta.grid</code> on boot and compensation to be enabled automatically. This allows persistent bed leveling across power cycles without re-probing. Default: <code>false</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.tolerance"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">Probe tolerance for repeatability checks and validation during grid creation. Used to validate that probe measurements are consistent and repeatable across multiple probes of the same point. Default: <code>0.03</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.is_square"></setting></td>
            <td><em>N/A (feature removed)</em></td>
            <td class="description-cell"><strong>DEPRECATED</strong> - This setting is no longer supported and will produce an error if used. For square or rectangular beds, use the <code>rectangular-grid</code> strategy instead of <code>delta-grid</code>.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
