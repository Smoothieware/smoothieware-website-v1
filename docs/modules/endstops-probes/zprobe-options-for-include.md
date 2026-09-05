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
            <td><setting no-version v1="zprobe.enable"></setting></td>
            <td><setting no-version v2="zprobe.enable"></setting></td>
            <td class="description-cell">
                <p>Enables the Z-probe module. When set to true, the probe module is loaded and all probing features become available.</p>
                <p>Set to false to disable probing entirely and free memory if not using a probe.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_pin"></setting></td>
            <td><setting no-version v2="zprobe.probe_pin"></setting></td>
            <td class="description-cell">
                <p>Defines the GPIO pin connected to the probe signal. Use <code>!</code> suffix to invert logic (normally-closed vs normally-open) and <code>^</code> to enable internal pull-up resistor.</p>
                <p>Example: <code>1.28!^</code> means pin 1.28 with inverted logic and pull-up enabled.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.slow_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.slow_feedrate"></setting></td>
            <td class="description-cell">Speed at which the probe approaches the bed during actual probing moves, in millimeters per second. Slower speeds improve accuracy but increase total probing time. Typical values: 5-10 mm/s.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.fast_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.fast_feedrate"></setting></td>
            <td class="description-cell">Travel speed between probe points and for initial rapid approach moves, in millimeters per second. Does not affect probing accuracy but reduces total time for multi-point bed leveling operations. Typical values: 50-200 mm/s.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.return_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.return_feedrate"></setting></td>
            <td class="description-cell">Speed when retracting from a probe point, in millimeters per second. When set to 0 (default), automatically calculates as slow_feedrate × 2 for faster retraction without sacrificing accuracy.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.debounce_ms"></setting></td>
            <td><setting no-version v2="zprobe.debounce_ms"></setting></td>
            <td class="description-cell">
                <p>Probe signal debounce time in milliseconds. The probe signal must remain continuously triggered for this duration before being considered a valid trigger.</p>
                <p>Set to 1 or 2 if your probe is noisy and gives false readings. Higher values reduce false triggers but may affect accuracy.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_height"></setting></td>
            <td><setting no-version v2="zprobe.probe_height"></setting></td>
            <td class="description-cell">
                <p>Height above the bed to position the probe before starting each probing move, in millimeters. Once the bed's approximate height is known (after first probe or homing), subsequent probes start from this height.</p>
                <p>Typical values: 5-10 mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.max_z"></setting></td>
            <td><setting no-version v2="zprobe.max_travel"></setting></td>
            <td class="description-cell">
                <p>Maximum distance the probe will travel downward before giving up on a probe attempt, in millimeters — a safety feature to prevent crashes if the probe fails to trigger.</p>
                <p>If not defined, uses the gamma_max value from endstop configuration. Set to slightly less than your build height.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.dwell_before_probing"></setting></td>
            <td><setting no-version v2="zprobe.dwell_before_probing"></setting></td>
            <td class="description-cell">
                <p>Time to wait before starting each probe move, in seconds. Allows mechanical settling after XY positioning and before the Z probe begins.</p>
                <p>Particularly useful for piezo Z-probes to avoid false triggers from vibration. Typical values: 0.1-0.5 seconds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.reverse_z"></setting></td>
            <td><setting no-version v2="zprobe.reverse_z"></setting></td>
            <td class="description-cell">Probe in +Z direction instead of -Z direction. Used for specialized machine setups where the probe moves upward to find the surface rather than downward. Rarely needed for standard configurations.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.before_probe_gcode"></setting></td>
            <td><setting no-version v2="zprobe.before_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>G-code command(s) to run before each probe point. Used for deployable probes like BLTouch/3DTouch that need to extend or deploy before probing. Multiple commands can be separated by semicolons.</p>
                <p>Example: <code>M280 S10</code> to deploy BLTouch pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.after_probe_gcode"></setting></td>
            <td><setting no-version v2="zprobe.after_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>G-code command(s) to run after each probe point. Used for deployable probes like BLTouch/3DTouch that need to retract after probing. Multiple commands can be separated by semicolons.</p>
                <p>Example: <code>M280 S90</code> to retract BLTouch pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.m_attach"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Enables manual probe attachment mode for removable probes. When enabled, the machine moves to the mount_position and waits for the user to manually attach the probe before probing operations.</p>
                <p>V2 removed this feature.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.mount_position"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Position in machine coordinates where the machine moves and waits for manual probe attachment when m_attach is enabled. Specified as comma-separated X,Y,Z coordinates. Only used when m_attach is true.</p>
                <p>V2 removed this feature.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
