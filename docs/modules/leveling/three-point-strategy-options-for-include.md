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
                <p>Enables the three-point leveling strategy, which probes three user-defined points on the bed to calculate a plane equation.</p>
                <p>The strategy applies Z compensation during printing to keep the nozzle parallel to the bed surface, correcting for bed tilt. This is the simplest leveling strategy and works well for flat beds with simple tilt.</p>
                <p>In v2, set <setting v2="zprobe.leveling"></setting> to <raw>"three point"</raw>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point1"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point1"></setting></td>
            <td class="description-cell">
                <p>First probe point coordinates in the machine coordinate system, specified as comma-separated X and Y values.</p>
                <p>The three points should ideally form an equilateral triangle and be positioned as far apart as possible within the printable area for maximum leveling accuracy. This point becomes the Z=0 reference after the first probe.</p>
                <p>Format: <raw>X,Y</raw> (e.g., <raw>100.0,0.0</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point2"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point2"></setting></td>
            <td class="description-cell">
                <p>Second probe point coordinates in the machine coordinate system.</p>
                <p>Should be positioned to form a triangle with point1 and point3, ideally an equilateral triangle for balanced leveling across the bed surface. The further apart the three points are, the better the leveling accuracy.</p>
                <p>Format: <raw>X,Y</raw> (e.g., <raw>200.0,200.0</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point3"></setting></td>
            <td><setting no-version v2="three point leveling strategy.point3"></setting></td>
            <td class="description-cell">
                <p>Third probe point coordinates in the machine coordinate system, completing the triangle with point1 and point2. The three points define the plane used for bed leveling compensation.</p>
                <p>Maximum leveling accuracy is achieved when the three points form a large equilateral triangle.</p>
                <p>Format: <raw>X,Y</raw> (e.g., <raw>0.0,200.0</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.probe_offsets"></setting></td>
            <td><setting no-version v2="three point leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">
                <p>Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets are critical for accurate compensation, as they tell the firmware where the probe is relative to the actual printing nozzle.</p>
                <ul>
                    <li>Positive X: probe is to the right of the nozzle</li>
                    <li>Positive Y: probe is forward of the nozzle</li>
                    <li>Positive Z: probe trigger point is above the nozzle tip</li>
                </ul>
                <p>Format: <raw>X,Y,Z</raw> (default: <raw>0,0,0</raw>)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.home_first"></setting></td>
            <td><setting no-version v2="three point leveling strategy.home_first"></setting></td>
            <td class="description-cell">
                <p>Automatically homes the X and Y axes before running the <gcode>G32</gcode> bed leveling probe sequence.</p>
                <p>Homing ensures the machine is at a known position before probing begins, which is essential for accurate and repeatable leveling. Disable this only if you want manual control over homing, or are using work coordinate system offsets.</p>
                <p>Default: <raw>true</raw></p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.tolerance"></setting></td>
            <td><setting no-version v2="three point leveling strategy.tolerance"></setting></td>
            <td class="description-cell">
                <p>Maximum acceptable difference in millimeters between the highest and lowest probe points.</p>
                <p>If the bed is flatter than this tolerance (the difference between highest and lowest point is less than this value), no compensation plane is applied, as the bed is considered flat enough. Also used to validate the first probe point's repeatability.</p>
                <p>Default: <raw>0.03</raw> mm</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.save_plane"></setting></td>
            <td><setting no-version v2="three point leveling strategy.save_plane"></setting></td>
            <td class="description-cell">
                <p>Enables saving the calculated bed plane to config-override when <mcode>M500</mcode> is issued.</p>
                <p>When enabled, the plane parameters (A, B, C, D coefficients) are saved and can be restored later with <mcode>M561</mcode> using those parameters — allowing you to save a known-good bed level and reload it without re-probing.</p>
                <p>Default: <raw>false</raw></p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
