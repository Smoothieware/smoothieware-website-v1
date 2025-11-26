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
            <td class="description-cell">Default rate for <gcode>G1</gcode>/<gcode>G2</gcode>/<gcode>G3</gcode> moves in millimetres/minute. This is overridden by the first <raw>F</raw> (feedrate) parameter after reset, and never used again.</td>
        </tr>
        <tr>
            <td><setting no-version v1="default_seek_rate"></setting></td>
            <td><setting no-version v2="motion control.default_seek_rate"></setting></td>
            <td class="description-cell">Default rate for <gcode>G0</gcode> moves in millimetres/minute.</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_max_arc_error"></setting></td>
            <td><setting no-version v2="motion control.mm_max_arc_error"></setting></td>
            <td class="description-cell">Arcs are cut into segments (lines). This is the maximum error for line segments that divide arcs. Controls arc segmentation quality versus performance using adaptive segment sizing.</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_line_segment"></setting></td>
            <td><setting no-version v2="motion control.mm_per_line_segment"></setting></td>
            <td class="description-cell">Lines can be cut into segments (generally not useful with cartesian coordinates robots), this sets the maximum length of any given segment. Segments longer than this will be cut into several segments. When set to <raw>0</raw> (default), line segmentation is disabled. This is essential for delta robots to maintain accuracy.</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_segments_per_second"></setting></td>
            <td><setting no-version v2="motion control.delta_segments_per_second"></setting></td>
            <td class="description-cell">Instead of cutting lines into segments based on a distance, cut them based on time: segments will be cut so that Smoothie executes about <setting v1="delta_segments_per_second" v2="motion control.delta_segments_per_second"></setting> segments each second. This is mostly useful when using <raw>linear_delta</raw> arm solutions. When set to a non-zero value, overrides <setting v1="mm_per_line_segment" v2="motion control.mm_per_line_segment"></setting> for calculating segment length.</td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">Defines how many blocks (line segments) are stored in RAM for look-ahead acceleration calculation. <strong>Do not change this unless you know exactly what you are doing</strong>. The reason is that increasing the size of the queue makes it take up more RAM space and can result in Smoothie running out of RAM, depending on your configuration and how much the rest of your modules take up space. Larger values allow better speed optimization through corners but consume more memory.</td>
        </tr>
        <tr>
            <td><setting no-version v1="acceleration"></setting></td>
            <td><setting no-version v2="motion control.default_acceleration"></setting></td>
            <td class="description-cell">Acceleration in millimetres/second/second. Higher values make your machine faster and shakier, lower values make your machine slower and sturdier. This is generally proportional to the weight of the tool you are trying to move. This is the rate at which the machine accelerates and decelerates during moves. Can be overridden using <mcode>M204</mcode>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Specific acceleration for Z axis movements. When set to a valid number, overrides the default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for Z axis only. When set to <raw>NAN</raw> (not a number) or omitted, the Z axis uses the global acceleration value. Z-axis often benefits from lower acceleration than XY to prevent layer artifacts.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">Acceleration in millimetres/second/second for the alpha actuator (X axis on cartesian). Do not set on deltas. When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the alpha motor.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">Acceleration in millimetres/second/second for the beta actuator (Y axis on cartesian). Do not set on deltas. When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the beta motor.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Acceleration in millimetres/second/second for the gamma actuator (Z axis on cartesian). Do not set on deltas. When set to a valid number, overrides the global default <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting for moves involving the gamma motor.</td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">Similar to the old "max_jerk", in millimeters. Defines how much the machine slows down when decelerating proportional to the vector angle of change of direction. See <a href="https://github.com/grbl/grbl/blob/master/planner.c">here</a> and <a href="https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8">here</a>. Lower values mean being more careful, higher values mean being faster and have more jerk. This replaces traditional "jerk" settings with a more mathematically sound approach.</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">Junction deviation for <strong>Z only</strong> moves. <raw>-1</raw> uses <setting v1="junction_deviation" v2="planner.junction_deviation"></setting>, <raw>0</raw> disables <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> on z moves. Do not set this value if you use a delta arm solution. When set to <raw>NAN</raw> (default), Z-axis uses the global <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> value.</td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">Sets the minimum planner speed in millimetres/sec. This is the lowest speed the planner will ever set a move to. Not generally useful. Prevents extremely slow movements that could cause stepper stalls or uneven extrusion in 3D printing. When set to <raw>0</raw> (default), there is no minimum and moves can slow to a complete stop.</td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">Duration of step pulses to the stepper motor drivers, in microseconds. Actual step pulse is generally 2µs above this (so <raw>1</raw> will actually be 2-3µs). Setting this over about 8µs will cause severe issues with step generation. Some stepper drivers require a minimum pulse width to reliably register steps. Check your driver datasheet for "Step Pulse Width" specification and set to at least 2× the minimum requirement for reliability. Use <raw>1</raw> for onboard drivers (safe for all Smoothieboard drivers).</td>
        </tr>
        <tr>
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="system.step_frequency"></setting></td>
            <td class="description-cell">Base frequency for stepping, higher values give smoother movement. Do not modify unless you know exactly what you are doing. <raw>100000</raw> Hz (100 kHz) is the only officially supported value. This is the fundamental rate at which the step generation interrupt runs. All step generation is derived from this base frequency through integer division. The maximum step rate per motor equals <setting v1="base_stepping_frequency" v2="system.step_frequency"></setting> ÷ steps_per_mm for that motor. Higher frequencies increase interrupt load and may affect response time for other operations.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
