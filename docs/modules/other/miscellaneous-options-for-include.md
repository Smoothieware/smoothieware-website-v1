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
                <p>This turns off the 4 flashing status LEDs on the board. Set it to true and they all go dark.</p>
                <p>Handy if you don't want the light in a dark room, want to save a little power, or the LEDs are throwing light onto a sensor. Normally these LEDs show you board activity, SD card access, and other status information.</p>
                <p>It doesn't touch the play LED or the other functional indicators, those stay as they are.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="ok_per_line"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This controls when Smoothie sends back an "ok" response.</p>
                <ul>
                    <li>true (default, recommended): sends one "ok" per line of input</li>
                    <li>false: goes back to the old behavior of sending "ok" after each command finishes executing, which can cause timing issues with some host software</li>
                </ul>
                <p>Leave this true, it's what proper G-code streaming and command sync rely on. Only set it to false if you're debugging compatibility with old host software.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_enable"></setting></td>
            <td><setting no-version v2="kill button.enable"></setting></td>
            <td class="description-cell">
                <p>This turns on the "kill" button. Once enabled, a physical button lets you immediately halt all machine operations, turn off heaters and high-power outputs, and put the machine in a safe state.</p>
                <p>You want this on CNC machines, 3D printers, and laser cutters. It gives you a hardware emergency stop that works even if the software has gone wrong.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_pin"></setting></td>
            <td><setting no-version v2="kill button.pin"></setting></td>
            <td class="description-cell">
                <p>This is the GPIO pin the kill button uses. Wire the button between this pin and ground.</p>
                <p>The pin is set up as an input with an internal pull-up resistor, so pressing the button (which connects the pin to ground) triggers the emergency stop. You can add modifiers to the pin spec, like "!" to invert it.</p>
                <p>Use a normally-closed (NC) button if you can, so a broken wire also triggers the kill state instead of silently disabling your safety button.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_toggle_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This changes how the kill button behaves.</p>
                <ul>
                    <li>Enabled: the button acts as a toggle. First press activates the kill state (emergency stop), second press deactivates it.</li>
                    <li>Disabled (default, recommended): the button is level-triggered. The machine stays killed while you hold it down, and resumes as soon as you let go.</li>
                </ul>
                <p>Toggle mode can be dangerous, since it takes a deliberate second press to get out of the kill state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_unkill_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This lets the kill button also bring the machine back out of the kill state, without needing a power cycle or an <mcode>M999</mcode> command.</p>
                <ul>
                    <li>true: releasing the kill button (or pressing it again in toggle mode) exits the kill state and resumes operation</li>
                    <li>false (default, recommended for safety): you have to explicitly recover with <mcode>M999</mcode> or a power cycle, so you can't accidentally resume before checking what caused the emergency stop</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
