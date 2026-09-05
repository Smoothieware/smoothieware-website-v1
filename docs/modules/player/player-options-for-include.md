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
            <td><setting no-version v1="on_boot_gcode_enable"></setting></td>
            <td><setting no-version v2="player.on_boot_gcode_enable"></setting></td>
            <td class="description-cell">If set to true, the board automatically plays the on_boot_gcode file when it boots up. Handy for automated startup routines like homing or moving to an initial position.</td>
        </tr>
        <tr>
            <td><setting no-version v1="on_boot_gcode"></setting></td>
            <td><setting no-version v2="player.on_boot_gcode"></setting></td>
            <td class="description-cell">
                <p>Path to the G-code file to play when the board boots. Default is /sd/on_boot.gcode.</p>
                <p>Useful for automating startup tasks like homing the printer or setting initial temperatures.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="after_suspend_gcode"></setting></td>
            <td><setting no-version v2="player.after_suspend_gcode"></setting></td>
            <td class="description-cell">
                <p>This G-code runs automatically right after Smoothie receives a suspend command. Use underscores (_) instead of spaces between the G-code commands.</p>
                <p>Most people use it to retract filament and move the toolhead away from the print.</p>
                <p>Example: G91_G0_E-5_G0_Z10_G90_G0_X-50_Y-50 (retracts 5mm, raises Z by 10mm, moves to a safe position).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="before_resume_gcode"></setting></td>
            <td><setting no-version v2="player.before_resume_gcode"></setting></td>
            <td class="description-cell">
                <p>This G-code runs automatically after a resume command, but before the print actually resumes. Use underscores (_) instead of spaces.</p>
                <p>You usually don't need this, since resume already restores the previous state on its own.</p>
                <p>Example: G91_G1_E1_G90 (extrudes 1mm to prime the nozzle).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="leave_heaters_on_suspend"></setting></td>
            <td><setting no-version v2="player.leave_heaters_on_suspend"></setting></td>
            <td class="description-cell">
                <p>This controls what your heaters do when you suspend.</p>
                <ul>
                    <li>false (default): heaters turn off on suspend and back on when you resume.</li>
                    <li>true: heaters stay on through the suspend.</li>
                </ul>
                <p>For short pauses, set it to true so you're not waiting for the heaters to come back up to temperature.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
