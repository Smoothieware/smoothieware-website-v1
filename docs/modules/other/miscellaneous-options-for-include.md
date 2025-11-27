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
            <td class="description-cell">Disables the 4 flashing status LEDs on the board. When set to true, all status indication LEDs are turned off, which can be useful for reducing visual distractions in dark environments, reducing power consumption slightly, or for applications where LED light might interfere with sensors or processes. The LEDs normally indicate board activity, SD card access, and other status information. This setting does not affect the play LED or other functional indicators.</td>
        </tr>
        <tr>
            <td><setting no-version v1="ok_per_line"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Controls when "ok" responses are sent. When true (default and recommended), sends "ok" once per line of input. When false, reverts to the old (incorrect) behavior of sending "ok" after each command is executed, which can cause timing issues with some host software. This setting should remain true for proper G-code streaming and command synchronization. Setting it to false is only useful for debugging legacy host software compatibility issues.</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_enable"></setting></td>
            <td><setting no-version v2="kill button.enable"></setting></td>
            <td class="description-cell">Enables the "kill" button functionality for emergency halt operations. When enabled, a physical button can be used to immediately halt all machine operations, turn off heaters and high-power outputs, and enter a safe state. This is a critical safety feature for CNC machines, 3D printers, and laser cutters. The kill button provides hardware-level emergency stop capability independent of software state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_pin"></setting></td>
            <td><setting no-version v2="kill button.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin to use for the kill button. The button should be wired between this pin and ground. The pin is configured as input with internal pull-up resistor, so pressing the button (connecting pin to ground) triggers the emergency stop. Use a normally-closed (NC) button for maximum safety so that a wire break also triggers the kill state. The pin specification includes optional modifiers like "!" for inversion.</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_toggle_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">When enabled, the kill button acts as a toggle switch instead of a momentary trigger. First press activates kill state (emergency stop), second press deactivates it. When disabled (default and recommended), the kill button is level-triggered: machine is killed while button is held, and resumes normal operation when released. Toggle mode can be dangerous as it requires deliberate action to recover from kill state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_unkill_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Allows the kill button to be used to recover from kill state without requiring power cycle or <mcode>M999</mcode> command. When true, releasing the kill button (or pressing again if in toggle mode) will exit kill state and resume operations. When false (default and recommended for safety), recovery from kill state requires explicit user action (<mcode>M999</mcode> command or power cycle) to ensure the emergency condition has been properly addressed.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
