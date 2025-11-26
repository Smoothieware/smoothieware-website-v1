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
            <td class="description-cell">Enables the delta calibration strategy for automatically calibrating linear delta printer geometry. The strategy probes seven points (three at towers, three between towers, one at center) and adjusts endstop trim values and delta radius to minimize height differences. This strategy is specifically for delta kinematics and is automatically loaded for delta printers if no other strategy is specified. In v2, set <code>zprobe.calibration</code> to <code>"delta"</code>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.radius"></setting></td>
            <td><setting no-version v2="delta calibration strategy.radius"></setting></td>
            <td class="description-cell">Radius in millimeters at which to probe the bed for delta calibration. This determines the size of the circular pattern formed by the seven probe points: three points at the tower positions on this radius, three points between towers on this radius, and one point at center (radius 0). The radius should be as large as possible while staying within the printable area. Default: <code>100</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.initial_height"></setting></td>
            <td><setting no-version v2="delta calibration strategy.initial_height"></setting></td>
            <td class="description-cell">Absolute Z machine position in millimeters to move to after homing and before starting the initial bed probe. This height must be high enough that the probe will not hit the bed during the rapid descent phase. This is a critical safety parameter that prevents crashes during the first probe approach. Default: <code>10</code> mm</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
