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
                <p>This turns the Z-probe module on. Set it to true and the probe module loads, with all probing features available.</p>
                <p>If you're not using a probe, set it to false. That frees up memory.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_pin"></setting></td>
            <td><setting no-version v2="zprobe.probe_pin"></setting></td>
            <td class="description-cell">
                <p>This is the GPIO pin your probe signal connects to. Append <code>!</code> to invert the logic, for normally-closed vs normally-open probes, and <code>^</code> to turn on the internal pull-up resistor.</p>
                <p>For example, <code>1.28!^</code> means pin 1.28, inverted logic, pull-up on.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.slow_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.slow_feedrate"></setting></td>
            <td class="description-cell">This is how fast the probe approaches the bed during the actual probing move, in mm/s. Slow it down and you get better accuracy, but probing takes longer. Most people use 5-10 mm/s.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.fast_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.fast_feedrate"></setting></td>
            <td class="description-cell">This is the travel speed between probe points, and for the initial rapid approach move, in mm/s. It cuts down the total time for multi-point bed leveling and has no effect on probing accuracy. Typical values run 50-200 mm/s.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.return_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.return_feedrate"></setting></td>
            <td class="description-cell">This is the speed the probe retracts at after each probe point, in mm/s. Leave it at 0, the default, and Smoothie sets it to slow_feedrate × 2, so retraction is faster without hurting accuracy.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.debounce_ms"></setting></td>
            <td><setting no-version v2="zprobe.debounce_ms"></setting></td>
            <td class="description-cell">
                <p>This is the debounce time for the probe signal, in milliseconds. The signal has to stay triggered continuously for this long before Smoothie counts it as a real trigger.</p>
                <p>If your probe is noisy and gives false readings, try setting this to 1 or 2. Push it higher and you'll get fewer false triggers, but you can lose some accuracy.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_height"></setting></td>
            <td><setting no-version v2="zprobe.probe_height"></setting></td>
            <td class="description-cell">
                <p>This is how high above the bed the probe starts each probing move, in millimeters. Once the machine has a rough idea of the bed's height, from the first probe or from homing, every later probe starts from this height.</p>
                <p>Most people use 5-10mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.max_z"></setting></td>
            <td><setting no-version v2="zprobe.max_travel"></setting></td>
            <td class="description-cell">
                <p>This caps how far the probe travels downward before giving up on a probe attempt, in millimeters. It's there so a probe that fails to trigger doesn't crash into the bed.</p>
                <p>Leave it undefined and Smoothie falls back to your gamma_max value from the endstop configuration. Set it to slightly less than your build height.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.dwell_before_probing"></setting></td>
            <td><setting no-version v2="zprobe.dwell_before_probing"></setting></td>
            <td class="description-cell">
                <p>This is how long Smoothie waits before starting each probe move, in seconds. It gives the machine time to settle mechanically after an XY move and before the Z probe starts.</p>
                <p>This helps most with piezo Z-probes, which can false-trigger from vibration. Typical values run 0.1-0.5 seconds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.reverse_z"></setting></td>
            <td><setting no-version v2="zprobe.reverse_z"></setting></td>
            <td class="description-cell">This makes the probe move in +Z instead of -Z. It's for specialized setups where the probe finds the surface by moving up instead of down. Most machines never need this.</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.before_probe_gcode"></setting></td>
            <td><setting no-version v2="zprobe.before_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>This runs a G-code command, or several, before each probe point. Deployable probes like the BLTouch or 3DTouch need this to extend before they can probe. Separate multiple commands with semicolons.</p>
                <p>For example, <code>M280 S10</code> deploys the BLTouch pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.after_probe_gcode"></setting></td>
            <td><setting no-version v2="zprobe.after_probe_gcode"></setting></td>
            <td class="description-cell">
                <p>This runs a G-code command, or several, after each probe point. Deployable probes like the BLTouch or 3DTouch need this to retract once they're done probing. Separate multiple commands with semicolons.</p>
                <p>For example, <code>M280 S90</code> retracts the BLTouch pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.m_attach"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This turns on manual probe attachment mode, for removable probes. Enable it and the machine moves to mount_position and waits for you to attach the probe by hand before it starts probing.</p>
                <p>V2 dropped this feature.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.mount_position"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is where the machine moves to and waits, in machine coordinates, for you to attach the probe by hand, when m_attach is on. Give it as comma-separated X,Y,Z coordinates. It only matters when m_attach is true.</p>
                <p>V2 dropped this feature.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
