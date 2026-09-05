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
            <td><setting no-version v1="default_feed_rate"></setting></td>
            <td><setting no-version v2="motion control.default_feed_rate"></setting></td>
            <td class="description-cell">
                <p>This is the default rate for <gcode>G1</gcode>/<gcode>G2</gcode>/<gcode>G3</gcode> moves, in millimetres/minute.</p>
                <p>The first <raw>F</raw> (feedrate) parameter you send after a reset overrides it, and Smoothie won't go back to it.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="default_seek_rate"></setting></td>
            <td><setting no-version v2="motion control.default_seek_rate"></setting></td>
            <td class="description-cell">The default rate for <gcode>G0</gcode> moves, in millimetres/minute.</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_max_arc_error"></setting></td>
            <td><setting no-version v2="motion control.mm_max_arc_error"></setting></td>
            <td class="description-cell">
                <p>Arcs get cut into straight line segments. This setting is the maximum error allowed between the arc and those segments.</p>
                <p>It trades segmentation quality against performance, using adaptive segment sizing.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_line_segment"></setting></td>
            <td><setting no-version v2="motion control.mm_per_line_segment"></setting></td>
            <td class="description-cell">
                <p>Lines can be cut into segments too. This isn't generally useful on cartesian machines, but it sets the maximum length of a segment: anything longer gets cut into several shorter ones.</p>
                <p>Set it to <raw>0</raw> (the default) and segmentation is off.</p>
                <p>Delta robots need this to stay accurate.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_segments_per_second"></setting></td>
            <td><setting no-version v2="motion control.delta_segments_per_second"></setting></td>
            <td class="description-cell">
                <p>Instead of sizing segments by distance, this sizes them by time: Smoothie aims to execute about <setting v1="delta_segments_per_second" v2="motion control.delta_segments_per_second"></setting> segments every second.</p>
                <p>It's mostly useful with <raw>linear_delta</raw> arm solutions.</p>
                <p>Set it to a non-zero value and it overrides <setting v1="mm_per_line_segment" v2="motion control.mm_per_line_segment"></setting> for working out segment length.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">
                <p>This is how many blocks (line segments) Smoothie keeps in RAM for look-ahead acceleration planning.</p>
                <p><strong>Don't change this unless you know exactly what you're doing.</strong> Raise it and you use more RAM, and depending on what else your configuration is using, Smoothie can run out of memory.</p>
                <p>A bigger queue lets it plan speed through corners better, at the cost of memory.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="acceleration"></setting></td>
            <td><setting no-version v2="motion control.default_acceleration"></setting></td>
            <td class="description-cell">
                <p>This is the acceleration, in millimetres/second/second: how fast the machine speeds up and slows down during moves.</p>
                <p>Push it higher and the machine moves faster but shakes more. Lower it and it's slower but sturdier. It's roughly proportional to how heavy your tool is.</p>
                <p>You can override it with <mcode>M204</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="z_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Set this to a valid number and it overrides the default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> for Z axis moves only.</p>
                <p>Set it to <raw>NAN</raw> (not a number), or leave it out, and Z just uses the global acceleration value.</p>
                <p>Z often does better with lower acceleration than X/Y, it helps avoid layer artifacts.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the alpha actuator, the X axis on a cartesian machine. Don't set this on deltas.</p>
                <p>Set it to a valid number and it overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> for moves involving the alpha motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the beta actuator, the Y axis on a cartesian machine. Don't set this on deltas.</p>
                <p>Set it to a valid number and it overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> for moves involving the beta motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the gamma actuator, the Z axis on a cartesian machine. Don't set this on deltas.</p>
                <p>Set it to a valid number and it overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> for moves involving the gamma motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">
                <p>This is similar to the old "max_jerk" setting, in millimeters. It sets how much the machine slows down when decelerating, based on the angle of the direction change. See <a href="https://github.com/grbl/grbl/blob/master/planner.c">here</a> and <a href="https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8">here</a>.</p>
                <p>Lower values mean it's more careful. Higher values mean it's faster, with more jerk.</p>
                <p>It replaces the old "jerk" settings with a more mathematically sound approach.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">
                <p>This is junction deviation for <strong>Z only</strong> moves.</p>
                <ul>
                    <li><raw>-1</raw>: uses <setting v1="junction_deviation" v2="planner.junction_deviation"></setting></li>
                    <li><raw>0</raw>: disables <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> on Z moves</li>
                    <li><raw>NAN</raw> (default): Z axis uses the global <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> value</li>
                </ul>
                <p>Don't set this if you're running a delta arm solution.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">
                <p>This sets the minimum planner speed, in millimetres/sec: the slowest speed the planner will ever set a move to. You won't usually need it.</p>
                <p>It stops movements getting so slow they stall the stepper or cause uneven extrusion on a 3D printer.</p>
                <p>Set it to <raw>0</raw> (the default) and there's no minimum, moves can slow all the way to a stop.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">
                <p>This is how long the step pulses to your stepper drivers last, in microseconds. In practice the pulse ends up about 2µs longer than what you set here, so <raw>1</raw> actually gives you 2-3µs.</p>
                <p>Go over about 8µs and step generation runs into serious problems.</p>
                <p>Some stepper drivers need a minimum pulse width to reliably register a step. Check your driver's datasheet for its "Step Pulse Width" spec and set at least twice that minimum for reliability.</p>
                <p>Use <raw>1</raw> for onboard drivers, that's safe on every Smoothieboard driver.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="system.step_frequency"></setting></td>
            <td class="description-cell">
                <p>This is the base frequency for stepping. Higher values give smoother movement, but don't touch this unless you know exactly what you're doing. <raw>100000</raw> Hz (100 kHz) is the only officially supported value.</p>
                <p>It's the rate at which the step generation interrupt runs, and every step gets derived from it by integer division. The maximum step rate for a motor works out to <setting v1="base_stepping_frequency" v2="system.step_frequency"></setting> divided by that motor's steps_per_mm.</p>
                <p>Raise it and you load the interrupt more, which can slow down other operations' response time.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
