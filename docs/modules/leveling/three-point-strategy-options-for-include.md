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
            <td class="description-cell">Enables the three-point leveling strategy which probes three user-defined points on the bed to calculate a plane equation. The strategy applies Z compensation during printing to maintain the nozzle parallel to the bed surface, correcting for bed tilt. This is the simplest leveling strategy and works well for flat beds with simple tilt. In v2, set <code>zprobe.leveling</code> to <code>"three point"</code>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point1"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point1"></setting></td>
            <td class="description-cell">First probe point coordinates in machine coordinate system, specified as comma-separated X and Y values. The three points should ideally form an equilateral triangle and be positioned as far apart as possible within the printable area for maximum leveling accuracy. This point becomes the Z=0 reference after the first probe. Format: <code>X,Y</code> (e.g., <code>100.0,0.0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point2"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point2"></setting></td>
            <td class="description-cell">Second probe point coordinates in machine coordinate system. Should be positioned to form a triangle with point1 and point3, ideally an equilateral triangle for balanced leveling across the bed surface. The further apart the three points are, the better the leveling accuracy. Format: <code>X,Y</code> (e.g., <code>200.0,200.0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point3"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point3"></setting></td>
            <td class="description-cell">Third probe point coordinates in machine coordinate system. Completes the triangle with point1 and point2. The three points define the plane used for bed leveling compensation. Maximum leveling accuracy is achieved when the three points form a large equilateral triangle. Format: <code>X,Y</code> (e.g., <code>0.0,200.0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.probe_offsets"></setting></td>
            <td><setting no-version v2="three point leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets are critical for accurate compensation as they tell the firmware where the probe is relative to the actual printing nozzle. Positive X means probe is to the right of nozzle, positive Y means probe is forward of nozzle, positive Z means probe trigger point is above nozzle tip. Format: <code>X,Y,Z</code> (default: <code>0,0,0</code>)</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.home_first"></setting></td>
            <td><setting no-version v2="three point leveling strategy.home_first"></setting></td>
            <td class="description-cell">Automatically homes the X and Y axes before running the <code>G32</code> bed leveling probe sequence. Homing ensures the machine is at a known position before probing begins, which is essential for accurate and repeatable leveling. Disable this only if you want manual control over homing or are using work coordinate system offsets. Default: <code>true</code></td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.tolerance"></setting></td>
            <td><setting no-version v2="three point leveling strategy.tolerance"></setting></td>
            <td class="description-cell">Maximum acceptable difference in millimeters between the highest and lowest probe points. If the bed is flatter than this tolerance (difference between highest and lowest point is less than this value), no compensation plane is applied as the bed is considered flat enough. Also used to validate the first probe point repeatability. Default: <code>0.03</code> mm</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.save_plane"></setting></td>
            <td><setting no-version v2="three point leveling strategy.save_plane"></setting></td>
            <td class="description-cell">Enables saving the calculated bed plane to config-override when <code>M500</code> is issued. When enabled, the plane parameters (A, B, C, D coefficients) are saved and can be restored later with <code>M561</code> using those parameters. This allows you to save a known-good bed level and reload it without re-probing. Default: <code>false</code></td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
