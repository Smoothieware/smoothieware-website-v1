


<!-- learning-diagram:33-delta-calibration -->
{::nomarkdown}
<figure id="learning-diagram-33-delta-calibration" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/33-delta-calibration.svg">
    <img src="/images/learning-diagrams/33-delta-calibration.svg" alt="Delta calibration probes seven points: Three tower points, three points between towers, and one center point." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Delta calibration probes seven points <a href="#learning-diagram-33-delta-calibration" aria-label="Permanent link to Delta calibration probes seven points" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
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
                <p>This turns on automatic delta calibration.</p>
                <p>It probes seven points, three at the towers, three between them, and one at the centre, then adjusts your endstop trim values and delta radius to even out the height differences it finds.</p>
                <p>It's specific to delta kinematics, and gets loaded automatically for delta printers if you haven't specified another strategy. In v2, set <code>zprobe.calibration</code> to <code>"delta"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.radius"></setting></td>
            <td><setting no-version v2="delta calibration strategy.radius"></setting></td>
            <td class="description-cell">
                <p>Radius in millimeters at which to probe the bed for delta calibration. This sets the size of the circle the seven probe points are laid out on: three at the tower positions, three between the towers, and one at the centre (radius 0).</p>
                <p>Make it as large as you can while staying inside your printable area. Default: <code>100</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.initial_height"></setting></td>
            <td><setting no-version v2="delta calibration strategy.initial_height"></setting></td>
            <td class="description-cell">
                <p>Absolute Z machine position in millimeters to move to after homing, before the initial bed probe starts.</p>
                <p>Set it high enough that the probe won't hit the bed during the fast descent on that first probe approach.</p>
                <p>Default: <code>10</code> mm</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
