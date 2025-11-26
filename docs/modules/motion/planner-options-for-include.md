
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
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">
                Controls cornering speed using the junction deviation algorithm, which replaces traditional jerk-based acceleration control. This value represents the maximum allowable deviation from the true corner path when the toolhead changes direction. The algorithm treats each junction as tangent to a circular arc and uses centripetal acceleration approximation to calculate the maximum safe entry speed at path junctions.
                <br><br>
                <strong>Key Points:</strong>
                <ul>
                    <li>This is Smoothie's replacement for traditional jerk settings</li>
                    <li>Lower values = slower corners, more precise path following</li>
                    <li>Higher values = faster corners, slight path rounding</li>
                    <li>0.05mm default balances speed and quality for most machines</li>
                    <li>Increase for faster prints with acceptable quality loss</li>
                    <li>Decrease for high-precision work or weak mechanical systems</li>
                    <li>Too high causes corner bulging in 3D prints or path errors in CNC</li>
                    <li>Too low causes excessive slowdown and increases print time</li>
                </ul>
                <strong>Typical Values:</strong>
                <ul>
                    <li><raw>0.05</raw> - Default balanced setting</li>
                    <li><raw>0.02</raw> - High precision mode</li>
                    <li><raw>0.1</raw> - Fast mode with less precision</li>
                    <li><raw>0.01</raw> - Maximum precision for critical work</li>
                </ul>
                <strong>Examples:</strong>
                <ul>
                    <li><raw>junction_deviation 0.05</raw> # Default balanced setting</li>
                    <li><raw>junction_deviation 0.02</raw> # High precision mode</li>
                    <li><raw>junction_deviation 0.1</raw> # Fast mode with less precision</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">
                Separate junction deviation setting specifically for Z-axis-only moves (X=0, Y=0, Z≠0), allowing different cornering behavior for the Z axis which often has different mechanical characteristics than XY axes (lead screws vs. belts). When set to a valid number, allows independent Z-axis cornering control. When set to <raw>NAN</raw> (default), Z-axis uses the global <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> value.
                <br><br>
                <strong>Key Points:</strong>
                <ul>
                    <li>When NAN, Z uses the global junction_deviation setting</li>
                    <li>Set to <raw>0.0</raw> to force full stops at all Z direction changes</li>
                    <li>Useful for eliminating Z-seam artifacts in 3D printing</li>
                    <li>Important for CNC when Z precision matters more than speed</li>
                    <li>May increase print time as machine stops at layer changes</li>
                    <li>Not typically needed for delta printers where Z is not separate</li>
                </ul>
                <strong>Typical Values:</strong>
                <ul>
                    <li><raw>0</raw> - No deviation (full stop at Z changes, eliminates Z-seam)</li>
                    <li><raw>0.02</raw> - Slightly more precise than XY</li>
                    <li><raw>NAN</raw> - Use junction_deviation for all axes (default)</li>
                </ul>
                <strong>Examples:</strong>
                <ul>
                    <li><raw>z_junction_deviation 0.0</raw> # Full stop at Z changes (eliminates Z-seam)</li>
                    <li><raw>z_junction_deviation 0.02</raw> # Slightly more precise than XY</li>
                    <li># Omit to use junction_deviation for all axes</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">
                Minimum speed the planner will allow for any move. A value of <raw>0.0</raw> (default) allows the planner to decelerate to a complete stop at corners when needed for precision. Non-zero values maintain continuous motion flow but may sacrifice dimensional accuracy at sharp corners. Prevents extremely slow movements that could cause stepper stalls or uneven extrusion in 3D printing.
                <br><br>
                <strong>Key Points:</strong>
                <ul>
                    <li>Default of <raw>0.0</raw> disables the minimum speed limit</li>
                    <li>Useful for preventing stepper stalls on machines with poor low-speed torque</li>
                    <li>May help with consistent extrusion in 3D printing</li>
                    <li>Setting too high can prevent the machine from slowing enough for corners</li>
                    <li>Rarely needs to be changed from default</li>
                    <li>Value should be well below typical operating speeds</li>
                </ul>
                <strong>Typical Values:</strong>
                <ul>
                    <li><raw>0</raw> - Disabled (default, allows full stops)</li>
                    <li><raw>1</raw> - Minimum crawl speed (prevents stalls)</li>
                </ul>
                <strong>Examples:</strong>
                <ul>
                    <li><raw>minimum_planner_speed 0</raw> # Disabled (default)</li>
                    <li><raw>minimum_planner_speed 1</raw> # Prevent stepper stalls</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">
                Number of motion blocks (movements) held in the planner queue for lookahead optimization. The planner performs forward and reverse passes across the entire queue to optimize acceleration profiles and cornering speeds. Larger queues enable smoother motion planning through better lookahead but consume more RAM (DTCM RAM on v2). Each block holds complete motion data for one G-code move including step counts, acceleration parameters, and timing information for all actuators.
                <br><br>
                <strong>Key Points:</strong>
                <ul>
                    <li>Larger queue = better motion planning and speed optimization</li>
                    <li>Smaller queue = less RAM usage</li>
                    <li>Each block uses approximately 100-150 bytes of RAM</li>
                    <li>32 is optimal for most machines</li>
                    <li>Increase if you see slowdowns on complex curves</li>
                    <li>Decrease if running out of RAM (rare on LPC1769)</li>
                    <li>Must be at least 8 for proper operation</li>
                    <li>V2: Valid range 16 to 128 (practical limits based on available DTCM RAM)</li>
                </ul>
                <strong>Typical Values:</strong>
                <ul>
                    <li><raw>32</raw> - Default optimal size</li>
                    <li><raw>48</raw> - More lookahead for complex paths</li>
                    <li><raw>24</raw> - Reduce if RAM is constrained</li>
                </ul>
                <strong>Examples:</strong>
                <ul>
                    <li><raw>planner_queue_size 32</raw> # Default optimal size</li>
                    <li><raw>planner_queue_size 48</raw> # More lookahead for complex paths</li>
                    <li><raw>planner_queue_size 24</raw> # Reduce if RAM is constrained</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="planner.queue_delay_time_ms"></setting></td>
            <td class="description-cell">
                Milliseconds to wait when the planner queue is full before checking again. This prevents the CPU from spinning in a tight loop when the queue is full and waiting for space. The delay balances responsiveness versus CPU efficiency. Lower values make the system more responsive to new commands when the queue is full, but use more CPU checking. Higher values reduce CPU overhead but may add latency.
                <br><br>
                <strong>Key Points:</strong>
                <ul>
                    <li>Only matters when queue is completely full</li>
                    <li>100ms is a good balance for most use cases</li>
                    <li>Lower values (50ms) = more responsive, slightly more CPU usage</li>
                    <li>Higher values (200ms) = less CPU overhead, slight latency added</li>
                    <li>Has no effect on motion quality, only command queueing latency</li>
                </ul>
                <strong>Typical Values:</strong>
                <ul>
                    <li><raw>100</raw> - Default balanced setting</li>
                    <li><raw>50</raw> - More responsive command handling</li>
                    <li><raw>200</raw> - Reduce CPU overhead</li>
                </ul>
                <strong>Examples:</strong>
                <ul>
                    <li><raw>queue_delay_time_ms 100</raw> # Default balanced setting</li>
                    <li><raw>queue_delay_time_ms 50</raw> # More responsive command handling</li>
                    <li><raw>queue_delay_time_ms 200</raw> # Reduce CPU overhead</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
