
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
            <td><setting no-version v1="joystick.{name}.enable"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>If true, creates and enables a new Joystick module with the specified name.</p>
                <p>The joystick module reads analog input from joystick devices and uses it to control machine movement via the Jogger module or other control systems.</p>
                <p>Each joystick instance requires a unique name.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.pin"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Specifies which SmoothieBoard pin should be used to read the analog joystick value.</p>
                <p>The pin must be one of the analog-capable pins (typically <pin>0.2</pin>, <pin>0.3</pin>, <pin>0.23</pin>-<pin>0.26</pin>, <pin>1.30</pin>, <pin>1.31</pin>).</p>
                <p>Connect the joystick wiper (output) to this pin, with the potentiometer ends connected to 3.3V and ground.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.refresh_rate"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Sets how many times per second to update the joystick reading. Higher values give more responsive control but use more CPU time.</p>
                <ul>
                    <li>Typical range: 10-100 Hz</li>
                    <li>Default: 10 Hz if not specified</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.zero_offset"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Sets what voltage will map to zero output — typically the center position of the joystick, usually around 1.65V (half of 3.3V).</p>
                <p>The joystick module subtracts this offset from the measured voltage before scaling. It can also be determined automatically using the auto_zero feature.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.endpoint"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Sets what voltage will map to +1 or -1 output, defining the full range of motion for the joystick.</p>
                <ul>
                    <li>If endpoint is greater than zero_offset, it specifies what voltage maps to +1</li>
                    <li>If endpoint is less than zero_offset, it specifies what voltage maps to -1</li>
                </ul>
                <p>Typical value is 3.3V (or close to it, like 3.2V) for maximum range.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.auto_zero"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>If true, enables the auto-zeroing feature, which automatically determines the zero_offset value at startup by averaging readings during the startup_time period.</p>
                <p>This is useful for joysticks where the center position voltage may vary slightly between devices.</p>
                <p>Do not move the joystick during startup when this is enabled.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.startup_time"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Sets how long (in milliseconds) after SmoothieBoard resets to obtain readings to average for the auto-zero offset calculation.</p>
                <p>Must be at least 1000 / refresh_rate to ensure sufficient samples, but should not be too long, to avoid the joystick being moved during measurement. Typical value is 1000ms (1 second).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.start_value"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>Sets the default value of the joystick output during the startup_time period when auto-zeroing is active.</p>
                <p>This value should be between -1 and 1, and is typically 0 to indicate no movement during calibration — preventing unwanted motion while the auto-zero feature is determining the center position.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
