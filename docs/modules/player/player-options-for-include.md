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
            <td class="description-cell">If set to true, automatically plays the on_boot_gcode file when the board boots up. This allows for automated startup routines like homing or initial positioning.</td>
        </tr>
        <tr>
            <td><setting no-version v1="on_boot_gcode"></setting></td>
            <td><setting no-version v2="player.on_boot_gcode"></setting></td>
            <td class="description-cell">Path to the G-code file to play when the board boots. Default is /sd/on_boot.gcode. Useful for automating startup tasks like homing the printer or setting initial temperatures.</td>
        </tr>
        <tr>
            <td><setting no-version v1="after_suspend_gcode"></setting></td>
            <td><setting no-version v2="player.after_suspend_gcode"></setting></td>
            <td class="description-cell">G-code to execute automatically right after a suspend command is received. Use underscores (_) instead of spaces in G-code commands. Commonly used to retract filament and move the toolhead away from the print. Example: G91_G0_E-5_G0_Z10_G90_G0_X-50_Y-50 (retracts 5mm, raises Z by 10mm, moves to safe position).</td>
        </tr>
        <tr>
            <td><setting no-version v1="before_resume_gcode"></setting></td>
            <td><setting no-version v2="player.before_resume_gcode"></setting></td>
            <td class="description-cell">G-code to execute automatically after a resume command but before resuming the print. Use underscores (_) instead of spaces. Generally not needed since resume restores the previous state automatically. Example: G91_G1_E1_G90 (extrudes 1mm to prime the nozzle).</td>
        </tr>
        <tr>
            <td><setting no-version v1="leave_heaters_on_suspend"></setting></td>
            <td><setting no-version v2="player.leave_heaters_on_suspend"></setting></td>
            <td class="description-cell">Controls heater behavior during suspend. When false (default), heaters turn OFF on suspend and back ON on resume. When true, heaters remain ON during suspend. Set to true for short pauses to avoid waiting for heaters to reheat.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
