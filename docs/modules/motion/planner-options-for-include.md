
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
                <p>This controls cornering speed with the junction deviation algorithm, which is what Smoothie uses instead of traditional jerk-based acceleration control. The value is the maximum distance the toolhead is allowed to deviate from the true corner path when it changes direction.</p>
                <p>The algorithm treats each junction as tangent to a circular arc, and works out the maximum safe entry speed at that junction from the centripetal acceleration it would need.</p>
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
                <p>This is a separate junction deviation setting just for Z-axis-only moves (X=0, Y=0, Z≠0). It lets you give the Z axis different cornering behavior, since it's often mechanically different from X and Y (lead screws instead of belts, for example).</p>
                <p>Set it to a number and Z gets its own independent cornering control. Leave it at <raw>NAN</raw> (the default) and Z just uses the global <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> value.</p>
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
                <p>This sets the minimum speed the planner will allow for any move. At <raw>0.0</raw> (the default), the planner can slow all the way down to a complete stop at corners when it needs to for precision. Set it above zero and the machine keeps moving continuously, at the cost of some accuracy on sharp corners.</p>
                <p>It's there to stop movements getting so slow they stall your steppers or cause uneven extrusion.</p>
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
                <p>This is how many motion blocks (movements) the planner keeps queued up for lookahead. Smoothie runs forward and reverse passes across the whole queue to work out the best acceleration profile and cornering speed for each move.</p>
                <p>A bigger queue gives you smoother motion planning because Smoothie can look further ahead, but it costs more RAM (DTCM RAM on v2). Each block holds the full motion data for one G-code move: step counts, acceleration parameters, and timing for every actuator.</p>
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
                <p>This is how many milliseconds Smoothie waits before checking again when the planner queue is full. Without it, the CPU would just spin in a tight loop waiting for space to open up.</p>
                <p>Lower it and the system responds faster to new commands once the queue frees up, but it spends more CPU checking. Raise it and you save CPU, at the cost of a bit more latency.</p>
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
