
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
                <p>Creates and enables a new Switch module instance — when set to true, the switch is active and responds to configured inputs and controls outputs.</p>
                <p>Set to false to disable the switch instance without removing its configuration. Each switch instance requires a unique name.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin"></setting></td>
            <td class="description-cell">
                <p>Specifies a GPIO pin that controls the switch state through hardware input. When the pin becomes high the switch changes to ON, and when it becomes low it changes to OFF (exact behavior depends on input_pin_behavior).</p>
                <p>Input pins are polled at 100ms intervals. The pin can be configured with pullup (^) or inverted (!) modifiers.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin_behavior"></setting></td>
            <td class="description-cell">
                <p>Defines how the input pin controls the switch state.</p>
                <ul>
                    <li>momentary (default): the switch state tracks the pin state directly — high means ON, low means OFF.</li>
                    <li>toggle: each low-to-high pin transition flips the switch state between ON and OFF.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_on_command"></setting></td>
            <td class="description-cell">
                <p>Specifies a G-code or M-code command that sets the switch to the ON state — when this command is received, the switch turns ON.</p>
                <p>Supports optional subcode matching via switch.{name}.subcode. The S parameter can control the PWM value for PWM-type outputs.</p>
                <p>Commands are queued and executed synchronously with motion.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_off_command"></setting></td>
            <td class="description-cell">
                <p>Specifies a G-code or M-code command that sets the switch to the OFF state — when this command is received, the switch turns OFF.</p>
                <p>Supports optional subcode matching via switch.{name}.subcode. Commands are queued and executed synchronously with motion.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.{name}.subcode"></setting></td>
            <td class="description-cell">
                <p>Specifies a subcode for input command matching, allowing multiple switch instances to respond to different subcodes of the same base command (e.g., M106.1 vs M106.2).</p>
                <p>Subcode 0 is the default and matches commands without explicit subcodes. Only evaluated when input_on_command and/or input_off_command are set.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.output_pin"></setting></td>
            <td class="description-cell">
                <p>Specifies the GPIO pin controlled by the switch — set low when the switch is OFF, and high when it is ON.</p>
                <p>The pin's exact behavior depends on output_type (digital on/off, PWM, hardware PWM, or software PWM). For hardware PWM (hwpwm), the pin must be PWM-capable.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.{name}.output_type"></setting></td>
            <td class="description-cell">
                <p>Sets the type of output for the switch output pin.</p>
                <ul>
                    <li>digital: the pin can only be low or high.</li>
                    <li>pwm (default): Sigma-Delta PWM, pin set to any value 0-255 via the S parameter.</li>
                    <li>hwpwm: Real PWM (requires a PWM-capable pin), with the S value as a duty cycle percentage.</li>
                    <li>swpwm: software-emulated PWM that won't interfere with hardware PWM peripherals.</li>
                    <li>none: disables the output entirely.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_on_command"></setting></td>
            <td class="description-cell">
                <p>Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed.</p>
                <p>Underscores in the command are replaced with spaces to allow multi-word commands (e.g., M117_Hello_World becomes M117 Hello World). Commands execute in the main loop when the switch state changes to ON.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_off_command"></setting></td>
            <td class="description-cell">
                <p>Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed, with underscores replaced by spaces before execution.</p>
                <p>Commands execute in the main loop when the switch state changes to OFF.</p>
                <p>Special handling: $J STOP triggers an emergency stop request for continuous jog (only works with input pins).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_state"></setting></td>
            <td class="description-cell">
                <p>Sets the initial state of the switch when the system boots.</p>
                <ul>
                    <li>false (default): module initialized OFF.</li>
                    <li>true: module initialized ON.</li>
                </ul>
                <p>For PWM outputs with startup_state true, default_on_value is used instead of startup_value. For input-pin switches (momentary mode), the initial state is read from the pin and overrides this setting.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_value"></setting></td>
            <td class="description-cell">
                <p>Sets the PWM value when the switch is OFF, or at startup if startup_state is false.</p>
                <ul>
                    <li>SIGMADELTA PWM: 0-255 value.</li>
                    <li>Hardware/software PWM (hwpwm/swpwm): 0-100 percentage.</li>
                </ul>
                <p>Also used as the PWM value on HALT for HWPWM and SWPWM. startup_state must be false for this to take effect.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.{name}.default_on_value"></setting></td>
            <td class="description-cell">
                <p>Sets the PWM duty cycle percentage when the switch is turned ON without an explicit S parameter. Only applies to hardware PWM (hwpwm) and software PWM (swpwm) output types. Value range is 0-100 (percentage).</p>
                <p>Used when the switch is turned on via command, or when startup_state is true. Can be overridden by an S parameter in commands (e.g., M106 S75 sets to 75%).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.{name}.max_pwm"></setting></td>
            <td class="description-cell">
                <p>Sets the maximum PWM value for sigma-delta PWM output, allowing the maximum output power/speed to be limited when using PWM mode. The S parameter in commands is scaled from 0-255 to 0-max_pwm.</p>
                <p>Only applies to the SIGMADELTA (pwm) output type, not hwpwm or swpwm. Default is 255, meaning no limiting (full range).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td><setting no-version v2="[pwm1] frequency"></setting></td>
            <td class="description-cell">
                <p>Sets the PWM period in milliseconds for hardware PWM and software PWM outputs — this determines the PWM frequency. Only applies to HWPWM and SWPWM output types. A lower period means higher frequency and faster PWM switching.</p>
                <ul>
                    <li>Servos: standard is 20ms (50Hz); some servos support 10ms (100Hz).</li>
                    <li>LEDs: higher frequencies prevent visible flicker.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.failsafe_set_to"></setting></td>
            <td class="description-cell">
                <p>Defines the pin state (0 or 1) to set during a crash, watchdog reset, or debug halt condition — a safety feature ensuring outputs are in a safe state when the system fails.</p>
                <p>Different from halt_set_to, which handles <mcode>M112</mcode> HALT commands specifically. Can be overridden by the ignore_on_halt setting. Choose a value that puts your system in a safe state for your hardware.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.halt_set_to"></setting></td>
            <td class="description-cell">
                <p>Defines the switch state (true or false) to set during a HALT condition (typically triggered by <mcode>M112</mcode> emergency stop or system halt). When a halt occurs, the switch is set to this state unless ignore_on_halt is true.</p>
                <p>For digital outputs, this boolean directly controls the pin state (high/low). For PWM outputs (hwpwm/swpwm), startup_value is used as the actual value instead.</p>
                <p>Different from failsafe_set_to, which handles crash/debug conditions.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.{name}.ignore_on_halt"></setting></td>
            <td class="description-cell">
                <p>When set to true, prevents the switch from changing state during HALT conditions (<mcode>M112</mcode> emergency stop) — the failsafe or startup_value is not applied when a HALT is triggered.</p>
                <p>Automatically set to true for input-pin switches and cannot be overridden. Useful for non-safety-critical outputs (lights, status indicators) that should maintain their state during emergency stops.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
