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
            <td><setting no-version v1="leds_disable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Disables the 4 flashing status LEDs on the board. When true, all status indication LEDs are turned off.</p>
                <p>Useful for reducing visual distractions in dark environments, cutting power consumption slightly, or avoiding LED light interfering with sensors or processes. The LEDs normally indicate board activity, SD card access, and other status information.</p>
                <p>This setting does not affect the play LED or other functional indicators.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="ok_per_line"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Controls when "ok" responses are sent.</p>
                <ul>
                    <li>true (default, recommended): sends "ok" once per line of input</li>
                    <li>false: reverts to the old (incorrect) behavior of sending "ok" after each command is executed, which can cause timing issues with some host software</li>
                </ul>
                <p>Keep this true for proper G-code streaming and command synchronization. Setting it to false is only useful for debugging legacy host software compatibility issues.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_enable"></setting></td>
            <td><setting no-version v2="kill button.enable"></setting></td>
            <td class="description-cell">
                <p>Enables the "kill" button functionality for emergency halt operations. When enabled, a physical button can be used to immediately halt all machine operations, turn off heaters and high-power outputs, and enter a safe state.</p>
                <p>This is a critical safety feature for CNC machines, 3D printers, and laser cutters — it provides hardware-level emergency stop capability independent of software state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_pin"></setting></td>
            <td><setting no-version v2="kill button.pin"></setting></td>
            <td class="description-cell">
                <p>Specifies the GPIO pin to use for the kill button. The button should be wired between this pin and ground.</p>
                <p>The pin is configured as input with internal pull-up resistor, so pressing the button (connecting pin to ground) triggers the emergency stop. The pin specification includes optional modifiers like "!" for inversion.</p>
                <p>Use a normally-closed (NC) button for maximum safety, so that a wire break also triggers the kill state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_toggle_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <ul>
                    <li>Enabled: the kill button acts as a toggle switch instead of a momentary trigger — first press activates kill state (emergency stop), second press deactivates it</li>
                    <li>Disabled (default, recommended): the kill button is level-triggered — machine is killed while the button is held, and resumes normal operation when released</li>
                </ul>
                <p>Toggle mode can be dangerous, as it requires deliberate action to recover from kill state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_unkill_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Allows the kill button to be used to recover from kill state without requiring a power cycle or <mcode>M999</mcode> command.</p>
                <ul>
                    <li>true: releasing the kill button (or pressing again if in toggle mode) exits kill state and resumes operations</li>
                    <li>false (default, recommended for safety): recovery from kill state requires explicit user action (<mcode>M999</mcode> command or power cycle) to ensure the emergency condition has been properly addressed</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
