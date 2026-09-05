
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
            <td><setting no-version v1="switch.{name}.enable"></setting></td>
            <td><setting no-version v2="switch.{name}.enable"></setting></td>
            <td class="description-cell">
                <p>Set this to true and it creates a new Switch module instance, active and responding to whatever inputs and outputs you've configured for it.</p>
                <p>Set it to false and the switch is disabled, but its configuration stays in the file. Each switch instance needs its own unique name.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin"></setting></td>
            <td class="description-cell">
                <p>This is the GPIO pin that drives the switch from hardware. When the pin goes high the switch turns ON, and when it goes low it turns OFF (the exact behavior depends on input_pin_behavior).</p>
                <p>Smoothie polls input pins every 100ms. You can add a pullup (^) or invert (!) modifier to the pin name if you need one.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin_behavior"></setting></td>
            <td class="description-cell">
                <p>This decides how the input pin drives the switch.</p>
                <ul>
                    <li>momentary (default): the switch just follows the pin. High means ON, low means OFF.</li>
                    <li>toggle: each time the pin goes from low to high, the switch flips between ON and OFF.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_on_command"></setting></td>
            <td class="description-cell">
                <p>This is the G-code or M-code command that turns the switch ON. Send it, and the switch turns on.</p>
                <p>You can match on a subcode with switch.{name}.subcode. If the output is PWM-type, the S parameter in the command sets the PWM value.</p>
                <p>Commands are queued and run in sync with motion, not immediately on receipt.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_off_command"></setting></td>
            <td class="description-cell">
                <p>This is the G-code or M-code command that turns the switch OFF. Send it, and the switch turns off.</p>
                <p>You can match on a subcode with switch.{name}.subcode. Commands are queued and run in sync with motion.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.{name}.subcode"></setting></td>
            <td class="description-cell">
                <p>This sets a subcode for matching input commands, so you can have several switch instances respond to different subcodes of the same base command, like M106.1 versus M106.2.</p>
                <p>Subcode 0 is the default and matches commands that don't specify one. It's only checked if input_on_command and/or input_off_command are set.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.output_pin"></setting></td>
            <td class="description-cell">
                <p>This is the GPIO pin the switch controls. It goes low when the switch is OFF and high when it's ON.</p>
                <p>What actually happens on the pin depends on output_type: digital on/off, PWM, hardware PWM, or software PWM. If you use hardware PWM (hwpwm), the pin has to be PWM-capable.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.{name}.output_type"></setting></td>
            <td class="description-cell">
                <p>This sets the type of output on the switch pin.</p>
                <ul>
                    <li>digital: the pin can only be low or high.</li>
                    <li>pwm (default): Sigma-Delta PWM. The S parameter sets any value from 0 to 255.</li>
                    <li>hwpwm: real PWM, needs a PWM-capable pin. The S value is a duty cycle percentage.</li>
                    <li>swpwm: software-emulated PWM, won't interfere with the hardware PWM peripherals.</li>
                    <li>none: turns the output off entirely.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_on_command"></setting></td>
            <td class="description-cell">
                <p>This G-code command runs when the switch turns ON. Smoothie sends it straight to the G-code parser.</p>
                <p>If you need a multi-word command, use underscores and Smoothie turns them into spaces, so M117_Hello_World becomes M117 Hello World. It runs in the main loop the moment the switch turns ON.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_off_command"></setting></td>
            <td class="description-cell">
                <p>Same idea as output_on_command, but for when the switch turns OFF. Smoothie sends it to the G-code parser, with underscores turned into spaces.</p>
                <p>It runs in the main loop the moment the switch turns OFF.</p>
                <p>One special case: $J STOP triggers an emergency stop for continuous jog. This only works with input pins.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_state"></setting></td>
            <td class="description-cell">
                <p>This sets what state the switch is in when the board boots. False (the default) means it starts OFF, true means it starts ON.</p>
                <p>If the output is PWM and startup_state is true, Smoothie uses default_on_value instead of startup_value. For input-pin switches in momentary mode, the pin itself decides the initial state and overrides this setting.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_value"></setting></td>
            <td class="description-cell">
                <p>This sets the PWM value used when the switch is OFF, or at startup if startup_state is false. For Sigma-Delta PWM it's a 0-255 value, for hardware/software PWM (hwpwm/swpwm) it's a 0-100 percentage.</p>
                <p>It's also the value used on HALT for hwpwm and swpwm. startup_state needs to be false for this setting to matter.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.{name}.default_on_value"></setting></td>
            <td class="description-cell">
                <p>This sets the duty cycle percentage used when the switch turns ON without an explicit S parameter. It only applies to hardware PWM (hwpwm) and software PWM (swpwm), and takes a value from 0 to 100.</p>
                <p>Smoothie uses it when the switch turns on via command, or when startup_state is true. An S parameter in the command overrides it, so M106 S75 sets it to 75%.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.{name}.max_pwm"></setting></td>
            <td class="description-cell">
                <p>This caps the PWM value for Sigma-Delta output, so you can limit the maximum power or speed. The S parameter in commands gets scaled from 0-255 down to 0-max_pwm.</p>
                <p>It only applies to the SIGMADELTA (pwm) output type, not hwpwm or swpwm. The default is 255, which means no limit at all.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td><setting no-version v2="[pwm1] frequency"></setting></td>
            <td class="description-cell">
                <p>This sets the PWM period in milliseconds for hardware and software PWM outputs, which is just another way of setting the frequency. It only applies to HWPWM and SWPWM. A lower period means a higher frequency and faster switching.</p>
                <p>Servos usually want 20ms (50Hz), though some support 10ms (100Hz). For LEDs, go with a higher frequency to avoid visible flicker.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.failsafe_set_to"></setting></td>
            <td class="description-cell">
                <p>This sets the pin state, 0 or 1, that Smoothie forces during a crash, a watchdog reset, or a debug halt, so your outputs land in a safe state if something goes wrong.</p>
                <p>This is different from halt_set_to, which only handles <mcode>M112</mcode> HALT commands. ignore_on_halt can override it. Pick a value that's actually safe for your hardware.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.halt_set_to"></setting></td>
            <td class="description-cell">
                <p>This sets the switch state, true or false, that Smoothie forces on a HALT (usually triggered by <mcode>M112</mcode> or a system halt). When a halt happens, the switch goes to this state unless ignore_on_halt is true.</p>
                <p>For digital outputs this boolean sets the pin high or low directly. For PWM outputs (hwpwm/swpwm), Smoothie uses startup_value instead.</p>
                <p>This is different from failsafe_set_to, which handles crashes and debug halts.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.{name}.ignore_on_halt"></setting></td>
            <td class="description-cell">
                <p>Set this to true and the switch won't change state on a HALT (triggered by <mcode>M112</mcode>). The failsafe or startup_value setting just gets skipped.</p>
                <p>It's forced to true for input-pin switches, you can't override that. Useful for things like lights or status indicators that don't need to change when you hit emergency stop.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
