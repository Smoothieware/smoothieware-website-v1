
<!-- learning-diagram:32-delta-grid -->
{::nomarkdown}
<figure id="learning-diagram-32-delta-grid" style="scroll-margin-top: 16vh; "clear: both; max-width: 960px; margin: 2rem auto;">
  <a href="/images/learning-diagrams/32-delta-grid.svg">
    <img src="/images/learning-diagrams/32-delta-grid.svg" alt="Delta grid: Probe points cover the circular reachable bed." style="display: block; width: 100%; height: auto; border-radius: 0.75rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; color: #526174; font-size: 0.92rem; text-align: center;">Visual guide: Probe points cover the circular reachable bed.</figcaption>
</figure>
{:/nomarkdown}
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
            <td class="description-cell">
                <p>Enables the delta grid leveling strategy for height mapping across circular delta printer beds.</p>
                <p>The strategy probes a grid of points in a circular pattern (skipping corners outside the radius) and stores height offsets. During printing, the firmware interpolates between the nearest four grid points to calculate Z compensation for any XY position.</p>
                <p>In v2, set <code>zprobe.leveling</code> to <code>"delta grid"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.radius"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.radius"></setting></td>
            <td class="description-cell">
                <p>Radius of the circular bed area to probe and compensate, in millimeters.</p>
                <p>The grid probes a square region, but points outside this radius are skipped, creating a circular probe pattern. This radius should be at least as large as the maximum printing radius, to ensure full bed compensation coverage.</p>
                <p>Default: <code>50</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.size"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.size"></setting></td>
            <td class="description-cell">
                <p>Grid size in both X and Y dimensions, determining the total number of probe points. A size of 7 creates a 7×7 grid = 49 potential probe points (points outside the radius are automatically skipped).</p>
                <p>Larger grids give more accurate compensation but increase probing time significantly. Must be an odd number.</p>
                <p>Default: <code>7</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions — compensating for the physical displacement between where the probe triggers and where the nozzle actually is.</p>
                <p>Correct offsets are essential for accurate bed compensation.</p>
                <p>Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.initial_height"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>Absolute Z machine position in millimeters to move to after homing, before starting the grid probe sequence.</p>
                <p>This safety parameter prevents the probe from crashing into the bed during the initial descent. Must be high enough to clear the bed surface.</p>
                <p>Default: <code>10</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.do_home"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">
                <p>Automatically homes all axes before running the <code>G31</code> grid probing sequence.</p>
                <p>Homing ensures the machine is at a known position before probing, which is essential for repeatable and accurate grid generation. Disable only if you want manual control over the homing process.</p>
                <p>Default: <code>true</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.save"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.save"></setting></td>
            <td class="description-cell">
                <p>Automatically saves the <code>M375</code> command to config-override when <code>M500</code> is issued, causing the grid to be loaded from <code>/sd/delta.grid</code> on boot and compensation to be enabled automatically.</p>
                <p>This allows persistent bed leveling across power cycles without re-probing.</p>
                <p>Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.tolerance"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>Probe tolerance for repeatability checks and validation during grid creation — used to confirm that probe measurements are consistent and repeatable across multiple probes of the same point.</p>
                <p>Default: <code>0.03</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.is_square"></setting></td>
            <td><em>N/A (feature removed)</em></td>
            <td class="description-cell"><strong>DEPRECATED</strong> - This setting is no longer supported and will produce an error if used. For square or rectangular beds, use the <code>rectangular-grid</code> strategy instead of <code>delta-grid</code>.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
