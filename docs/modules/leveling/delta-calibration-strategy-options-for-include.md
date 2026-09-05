
<!-- learning-diagram:33-delta-calibration -->
{::nomarkdown}
<figure id="learning-diagram-33-delta-calibration" style="scroll-margin-top: 16vh; "clear: both; max-width: 960px; margin: 2rem auto;">
  <a href="/images/learning-diagrams/33-delta-calibration.svg">
    <img src="/images/learning-diagrams/33-delta-calibration.svg" alt="Delta calibration points: Centre and perimeter samples refine geometry." style="display: block; width: 100%; height: auto; border-radius: 0.75rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; color: #526174; font-size: 0.92rem; text-align: center;">Visual guide: Centre and perimeter samples refine geometry.</figcaption>
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
            <td><setting no-version v1="leveling-strategy.delta-calibration.enable"></setting></td>
            <td><setting no-version v2="zprobe.calibration"></setting></td>
            <td class="description-cell">
                <p>Enables the delta calibration strategy for automatically calibrating linear delta printer geometry.</p>
                <p>The strategy probes seven points (three at towers, three between towers, one at center) and adjusts endstop trim values and delta radius to minimize height differences.</p>
                <p>This strategy is specifically for delta kinematics and is automatically loaded for delta printers if no other strategy is specified. In v2, set <code>zprobe.calibration</code> to <code>"delta"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.radius"></setting></td>
            <td><setting no-version v2="delta calibration strategy.radius"></setting></td>
            <td class="description-cell">
                <p>Radius in millimeters at which to probe the bed for delta calibration. This determines the size of the circular pattern formed by the seven probe points:</p>
                <ul>
                    <li>Three points at the tower positions, on this radius</li>
                    <li>Three points between towers, on this radius</li>
                    <li>One point at center (radius 0)</li>
                </ul>
                <p>The radius should be as large as possible while staying within the printable area. Default: <code>100</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.initial_height"></setting></td>
            <td><setting no-version v2="delta calibration strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>Absolute Z machine position in millimeters to move to after homing and before starting the initial bed probe.</p>
                <p>This height must be high enough that the probe will not hit the bed during the rapid descent phase — a critical safety parameter that prevents crashes during the first probe approach.</p>
                <p>Default: <code>10</code> mm</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
