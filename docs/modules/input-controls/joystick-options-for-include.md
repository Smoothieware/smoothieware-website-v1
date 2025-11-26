
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
            <td class="description-cell">If true, create and enable a new Joystick module with the specified name. The joystick module allows you to read analog input from joystick devices and use them to control machine movement via the Jogger module or other control systems. Each joystick instance requires a unique name.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.pin"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Specifies which SmoothieBoard pin should be used to read the analog joystick value. The pin must be one of the analog-capable pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the joystick wiper (output) to this pin, with the potentiometer ends connected to 3.3V and ground.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.refresh_rate"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets how many times per second to update the joystick reading. Higher values provide more responsive control but use more CPU time. Typical values are 10-100 Hz. Default is 10 Hz if not specified.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.zero_offset"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets what voltage will map to zero output. This is typically the center position of the joystick, usually around 1.65V (half of 3.3V). The joystick module subtracts this offset from the measured voltage before scaling. Can be automatically determined using the auto_zero feature.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.endpoint"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets what voltage will map to +1 or -1 output. If endpoint is greater than zero_offset, it specifies what voltage maps to +1. If endpoint is less than zero_offset, it specifies what voltage maps to -1. This defines the full range of motion for the joystick. Typical value is 3.3V (or close to it, like 3.2V) for maximum range.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.auto_zero"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">If true, enables the auto-zeroing feature, which automatically determines the zero_offset value at startup by averaging readings during the startup_time period. This is useful for joysticks where the center position voltage may vary slightly between devices. Do not move the joystick during startup when this is enabled.</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.startup_time"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets how long (in milliseconds) after SmoothieBoard resets to obtain readings to average for the auto-zero offset calculation. Must be at least 1000 / refresh_rate to ensure sufficient samples, but should not be too long to avoid the joystick being moved during measurement. Typical value is 1000ms (1 second).</td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.start_value"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets the default value of the joystick output during the startup_time period when auto-zeroing is active. This value should be between -1 and 1, and is typically 0 to indicate no movement during calibration. This prevents unwanted motion while the auto-zero feature is determining the center position.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
