


<!-- learning-diagram:32-delta-grid -->
{::nomarkdown}
<figure id="learning-diagram-32-delta-grid" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/32-delta-grid.svg">
    <img src="/images/learning-diagrams/32-delta-grid.svg" alt="Delta grid probes the reachable circular bed: Points outside the configured radius are skipped." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Delta grid probes the reachable circular bed <a href="#learning-diagram-32-delta-grid" aria-label="Permanent link to Delta grid probes the reachable circular bed" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
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
                <p>This turns on the delta grid leveling strategy, which maps bed height across a circular delta printer bed.</p>
                <p>It probes a grid of points in a circular pattern, skipping the corners outside the radius, and stores the height offsets it finds. While printing, Smoothie interpolates between the nearest four grid points to work out Z compensation for any XY position.</p>
                <p>In v2, set <code>zprobe.leveling</code> to <code>"delta grid"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.radius"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.radius"></setting></td>
            <td class="description-cell">
                <p>This is the radius, in millimeters, of the circular bed area Smoothie probes and compensates for.</p>
                <p>The grid probes a square region, but any point outside this radius gets skipped, which is what gives you the circular pattern. Make it at least as large as your maximum printing radius, or you won't get full bed coverage.</p>
                <p>Default: <code>50</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.size"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.size"></setting></td>
            <td class="description-cell">
                <p>This is the grid size in both X and Y, which sets the total number of probe points. A size of 7 gives you a 7×7 grid, so 49 potential probe points (points outside the radius get skipped automatically).</p>
                <p>Bigger grids give you more accurate compensation, but probing takes a lot longer. Has to be an odd number.</p>
                <p>Default: <code>7</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>This is the offset of the probe tip from the nozzle tip, in X, Y, and Z. It tells Smoothie the physical distance between where the probe triggers and where the nozzle actually sits.</p>
                <p>Get these offsets wrong and your bed compensation will be wrong too.</p>
                <p>Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.initial_height"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>This is the absolute Z machine position, in millimeters, Smoothie moves to after homing, before it starts the grid probe sequence.</p>
                <p>It's there to stop the probe crashing into the bed on the initial descent, so set it high enough to clear the bed surface.</p>
                <p>Default: <code>10</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.do_home"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">
                <p>This homes all axes automatically before running the <code>G31</code> grid probing sequence.</p>
                <p>You want the machine at a known position before probing starts, or the grid won't be repeatable. Turn this off only if you want to handle homing yourself.</p>
                <p>Default: <code>true</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.save"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.save"></setting></td>
            <td class="description-cell">
                <p>This saves the <code>M375</code> command to config-override automatically when you issue <code>M500</code>, so the grid gets loaded from <code>/sd/delta.grid</code> on boot and compensation turns on by itself.</p>
                <p>That way your bed leveling survives a power cycle without you having to re-probe.</p>
                <p>Default: <code>false</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.tolerance"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>This is the probe tolerance Smoothie uses for repeatability checks while building the grid. It confirms that probing the same point multiple times gives consistent measurements.</p>
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
