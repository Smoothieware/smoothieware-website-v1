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
                <p>Default rate for <gcode>G1</gcode>/<gcode>G2</gcode>/<gcode>G3</gcode> moves, in millimetres/minute.</p>
                <p>Overridden by the first <raw>F</raw> (feedrate) parameter after reset, and never used again.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="default_seek_rate"></setting></td>
            <td><setting no-version v2="motion control.default_seek_rate"></setting></td>
            <td class="description-cell">Default rate for <gcode>G0</gcode> moves in millimetres/minute.</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_max_arc_error"></setting></td>
            <td><setting no-version v2="motion control.mm_max_arc_error"></setting></td>
            <td class="description-cell">
                <p>Arcs are cut into segments (lines) — this setting is the maximum error allowed for the line segments that divide an arc.</p>
                <p>Controls arc segmentation quality versus performance, using adaptive segment sizing.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_line_segment"></setting></td>
            <td><setting no-version v2="motion control.mm_per_line_segment"></setting></td>
            <td class="description-cell">
                <p>Lines can be cut into segments — generally not useful with cartesian-coordinate robots — this setting sets the maximum length of any given segment; segments longer than this are cut into several shorter ones.</p>
                <p>When set to <raw>0</raw> (default), line segmentation is disabled.</p>
                <p>Essential for delta robots to maintain accuracy.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_segments_per_second"></setting></td>
            <td><setting no-version v2="motion control.delta_segments_per_second"></setting></td>
            <td class="description-cell">
                <p>Instead of cutting lines into segments based on distance, cuts them based on time: segments are sized so that Smoothie executes about <setting v1="delta_segments_per_second" v2="motion control.delta_segments_per_second"></setting> segments each second.</p>
                <p>Mostly useful with <raw>linear_delta</raw> arm solutions.</p>
                <p>When set to a non-zero value, overrides <setting v1="mm_per_line_segment" v2="motion control.mm_per_line_segment"></setting> for calculating segment length.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">
                <p>Defines how many blocks (line segments) are stored in RAM for look-ahead acceleration calculation.</p>
                <p><strong>Do not change this unless you know exactly what you are doing.</strong> Increasing the queue size uses more RAM and can cause Smoothie to run out of memory, depending on your configuration and how much the rest of your modules already use.</p>
                <p>Larger values allow better speed optimization through corners but consume more memory.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="acceleration"></setting></td>
            <td><setting no-version v2="motion control.default_acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration, in millimetres/second/second — the rate at which the machine accelerates and decelerates during moves.</p>
                <p>Higher values make the machine faster and shakier; lower values make it slower and sturdier. Generally proportional to the weight of the tool being moved.</p>
                <p>Can be overridden using <mcode>M204</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="z_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Specific acceleration for Z axis movements. When set to a valid number, overrides the default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for the Z axis only.</p>
                <p>When set to <raw>NAN</raw> (not a number) or omitted, the Z axis uses the global acceleration value.</p>
                <p>The Z axis often benefits from lower acceleration than XY, to prevent layer artifacts.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the alpha actuator (X axis on cartesian). Do not set on deltas.</p>
                <p>When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the alpha motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the beta actuator (Y axis on cartesian). Do not set on deltas.</p>
                <p>When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the beta motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Acceleration in millimetres/second/second for the gamma actuator (Z axis on cartesian). Do not set on deltas.</p>
                <p>When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the gamma motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">
                <p>Similar to the old "max_jerk", in millimeters — defines how much the machine slows down when decelerating, proportional to the vector angle of the change in direction. See <a href="https://github.com/grbl/grbl/blob/master/planner.c">here</a> and <a href="https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8">here</a>.</p>
                <p>Lower values mean being more careful; higher values mean being faster with more jerk.</p>
                <p>Replaces traditional "jerk" settings with a more mathematically sound approach.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">
                <p>Junction deviation for <strong>Z only</strong> moves.</p>
                <ul>
                    <li><raw>-1</raw>: uses <setting v1="junction_deviation" v2="planner.junction_deviation"></setting></li>
                    <li><raw>0</raw>: disables <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> on Z moves</li>
                    <li><raw>NAN</raw> (default): Z axis uses the global <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> value</li>
                </ul>
                <p>Do not set this value if you use a delta arm solution.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">
                <p>Sets the minimum planner speed, in millimetres/sec — the lowest speed the planner will ever set a move to. Not generally useful.</p>
                <p>Prevents extremely slow movements that could cause stepper stalls or uneven extrusion in 3D printing.</p>
                <p>When set to <raw>0</raw> (default), there is no minimum and moves can slow to a complete stop.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">
                <p>Duration of step pulses to the stepper motor drivers, in microseconds. The actual step pulse is generally 2µs above this value (so <raw>1</raw> will actually be 2-3µs).</p>
                <p>Setting this over about 8µs will cause severe issues with step generation.</p>
                <p>Some stepper drivers require a minimum pulse width to reliably register steps — check your driver datasheet for its "Step Pulse Width" specification and set at least 2× that minimum for reliability.</p>
                <p>Use <raw>1</raw> for onboard drivers (safe for all Smoothieboard drivers).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="system.step_frequency"></setting></td>
            <td class="description-cell">
                <p>Base frequency for stepping — higher values give smoother movement. Do not modify unless you know exactly what you are doing; <raw>100000</raw> Hz (100 kHz) is the only officially supported value.</p>
                <p>This is the fundamental rate at which the step generation interrupt runs — all step generation is derived from it through integer division. The maximum step rate per motor equals <setting v1="base_stepping_frequency" v2="system.step_frequency"></setting> ÷ steps_per_mm for that motor.</p>
                <p>Higher frequencies increase interrupt load and may affect response time for other operations.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
