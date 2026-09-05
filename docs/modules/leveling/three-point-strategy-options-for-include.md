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
            <td><setting no-version v1="leveling-strategy.three-point-leveling.enable"></setting></td>
            <td><setting no-version v2="zprobe.leveling"></setting></td>
            <td class="description-cell">
                <p>This turns on the three-point leveling strategy. It probes three points you define on the bed and works out a plane equation from them.</p>
                <p>While printing, Smoothie applies Z compensation from that plane to keep the nozzle parallel to the bed, correcting for tilt. It's the simplest leveling strategy, and it works fine for flat beds with a simple tilt.</p>
                <p>In v2, set <code>zprobe.leveling</code> to <code>"three point"</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point1"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point1"></setting></td>
            <td class="description-cell">
                <p>This is the first probe point, in machine coordinates, as comma-separated X and Y values.</p>
                <p>The three points ideally form an equilateral triangle, spread as far apart as your printable area allows, for the best accuracy. This point becomes the Z=0 reference once it's probed.</p>
                <p>Format: <code>X,Y</code> (e.g., <code>100.0,0.0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point2"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point2"></setting></td>
            <td class="description-cell">
                <p>This is the second probe point, in machine coordinates.</p>
                <p>Position it to form a triangle with point1 and point3, ideally equilateral, for even leveling across the bed. The further apart the three points sit, the better your accuracy.</p>
                <p>Format: <code>X,Y</code> (e.g., <code>200.0,200.0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point3"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point3"></setting></td>
            <td class="description-cell">
                <p>This is the third probe point, in machine coordinates, completing the triangle with point1 and point2. Together the three points define the plane used for bed leveling compensation.</p>
                <p>You get the best accuracy when the three points form a large equilateral triangle.</p>
                <p>Format: <code>X,Y</code> (e.g., <code>0.0,200.0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.probe_offsets"></setting></td>
            <td><setting no-version v2="three point leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>This is the offset of the probe tip from the nozzle tip, in X, Y, and Z. Get it right and Smoothie knows exactly where the probe sits relative to the nozzle, which is what makes the compensation accurate.</p>
                <ul>
                    <li>Positive X: the probe sits to the right of the nozzle</li>
                    <li>Positive Y: the probe sits forward of the nozzle</li>
                    <li>Positive Z: the probe triggers above the nozzle tip</li>
                </ul>
                <p>Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.home_first"></setting></td>
            <td><setting no-version v2="three point leveling strategy.home_first"></setting></td>
            <td class="description-cell">
                <p>This homes X and Y automatically before running the <code>G32</code> bed leveling probe sequence.</p>
                <p>You need the machine at a known position before probing starts, or the leveling won't be accurate or repeatable. Turn this off only if you want manual control over homing, or you're using work coordinate system offsets.</p>
                <p>Default: <code>true</code></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.tolerance"></setting></td>
            <td><setting no-version v2="three point leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>This is the biggest difference, in millimeters, Smoothie will accept between the highest and lowest probe points.</p>
                <p>If your bed is flatter than this tolerance, Smoothie skips the compensation plane and treats the bed as flat enough already. This value is also used to check the first probe point's repeatability.</p>
                <p>Default: <code>0.03</code> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.save_plane"></setting></td>
            <td><setting no-version v2="three point leveling strategy.save_plane"></setting></td>
            <td class="description-cell">
                <p>This saves the calculated bed plane to config-override when you issue <code>M500</code>.</p>
                <p>With it on, the plane parameters (A, B, C, D coefficients) get saved, and you can restore them later with <code>M561</code>. That lets you keep a known-good bed level and reload it instead of re-probing.</p>
                <p>Default: <code>false</code></p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
