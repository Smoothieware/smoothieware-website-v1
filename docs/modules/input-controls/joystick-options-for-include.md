
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
                <p>Set this to true and Smoothie creates a new Joystick module with the name you give it.</p>
                <p>The joystick module reads analog input from your joystick and uses it to drive machine movement, through the Jogger module or other control systems.</p>
                <p>Each instance needs its own unique name.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.pin"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the pin Smoothie reads the analog joystick value on.</p>
                <p>It has to be one of the analog-capable pins, typically <pin>0.2</pin>, <pin>0.3</pin>, <pin>0.23</pin>-<pin>0.26</pin>, <pin>1.30</pin>, or <pin>1.31</pin>.</p>
                <p>Connect the joystick's wiper (its output) to this pin, and wire the potentiometer ends to 3.3V and ground.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.refresh_rate"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This sets how many times per second Smoothie updates the joystick reading. Raise it and control feels more responsive, but it costs more CPU time.</p>
                <p>Typical range is 10-100 Hz. If you don't set it, it defaults to 10 Hz.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.zero_offset"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the voltage that maps to zero output, normally the joystick's center position, usually around 1.65V (half of 3.3V).</p>
                <p>Smoothie subtracts this offset from the measured voltage before scaling it. You can also let the auto_zero feature work this out for you.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.endpoint"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the voltage that maps to +1 or -1 output, and it sets the full range of motion for the joystick.</p>
                <p>If endpoint is above zero_offset, it's the voltage that maps to +1. If it's below zero_offset, it maps to -1.</p>
                <p>3.3V, or close to it like 3.2V, gives you the maximum range.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.auto_zero"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>If true, this turns on auto-zeroing, and Smoothie works out zero_offset itself at startup by averaging readings over the startup_time period.</p>
                <p>This helps because the center position voltage can vary a bit from one joystick to another.</p>
                <p>Don't touch the joystick while it's starting up if you've got this enabled.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.startup_time"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This sets how long, in milliseconds, Smoothie spends collecting readings after the board resets, to average for the auto-zero calculation.</p>
                <p>It needs to be at least 1000 / refresh_rate so you get enough samples, but don't set it too long either, or you risk the joystick getting bumped during measurement. 1000ms (1 second) is a typical value.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="joystick.{name}.start_value"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This sets the joystick's output value during the startup_time period, while auto-zeroing is running.</p>
                <p>It should be between -1 and 1, and you'll normally leave it at 0 so there's no movement while auto-zero is finding the center position.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
