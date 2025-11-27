
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
            <td class="description-cell">Creates and enables a new Switch module instance. When set to true, the switch module is active and will respond to configured inputs and control outputs. Set to false to disable the switch instance without removing its configuration. Each switch instance requires a unique name.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin"></setting></td>
            <td class="description-cell">Specifies a GPIO pin that controls the switch state through hardware input. When this pin becomes high the switch changes to the ON state, and when it becomes low the switch changes to the OFF state (behavior depends on input_pin_behavior). Input pins are polled at 100ms intervals. Pin can be configured with pullup (^) or inverted (!) modifiers.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td><setting no-version v2="switch.{name}.input_pin_behavior"></setting></td>
            <td class="description-cell">Defines how the input pin controls the switch state. If set to momentary (default), the switch state tracks the pin state directly - when the input pin becomes high the switch changes to ON, and when it becomes low the switch changes to OFF. If set to toggle, pin state transitions (low-to-high) flip the switch state between ON and OFF.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_on_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the ON state. When this command is received, the switch turns ON. Supports optional subcode matching via switch.{name}.subcode. The S parameter can control PWM value for PWM-type outputs. Commands are queued and executed synchronously with motion.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.input_off_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the OFF state. When this command is received, the switch turns OFF. Supports optional subcode matching via switch.{name}.subcode. Commands are queued and executed synchronously with motion.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.{name}.subcode"></setting></td>
            <td class="description-cell">Specifies a subcode for input command matching. Allows multiple switch instances to respond to different subcodes of the same base command (e.g., M106.1 vs M106.2). Subcode 0 is the default and matches commands without explicit subcodes. Only evaluated when input_on_command and/or input_off_command are set.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.{name}.output_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin that is controlled by the switch. This pin will be set low when the switch is OFF, and high when the switch is ON. The pin's behavior depends on output_type (digital on/off, PWM, hardware PWM, or software PWM). For hardware PWM (hwpwm), pin must be PWM-capable.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.{name}.output_type"></setting></td>
            <td class="description-cell">Sets the type of output for the switch output pin. If set to digital the pin can only be low or high. If set to pwm (the default, using Sigma-Delta PWM) the pin can be set to any PWM value between 0 and 255 using the S parameter. If set to hwpwm will use Real PWM (requires PWM-capable pin), with S value as duty cycle in percent. Can also be set to swpwm for software-emulated PWM that won't interfere with hardware PWM peripherals. Can be set to none to disable the output entirely.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_on_command"></setting></td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces to allow multi-word commands (e.g., M117_Hello_World becomes M117 Hello World). Commands execute in the main loop when switch state changes to ON.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td><setting no-version v2="switch.{name}.output_off_command"></setting></td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces before execution. Commands execute in the main loop when switch state changes to OFF. Special handling: $J STOP triggers emergency stop request for continuous jog (only works with input pins).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_state"></setting></td>
            <td class="description-cell">Sets the initial state of the switch when the system boots. If set to false (default) the module is initialized OFF, if set to true the module is initialized ON. For PWM outputs with startup_state true, uses default_on_value instead of startup_value. For input-pin switches (momentary mode), initial state is read from pin and overrides this setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.{name}.startup_value"></setting></td>
            <td class="description-cell">Sets the PWM value when the switch is in the OFF state or at startup if startup_state is false. For SIGMADELTA PWM, this is a 0-255 value. For hardware/software PWM (hwpwm/swpwm), this is a 0-100 percentage. This value is also used as the PWM value on HALT for HWPWM and SWPWM. The startup_state must be false for this to take effect.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.{name}.default_on_value"></setting></td>
            <td class="description-cell">Sets the PWM duty cycle percentage when the switch is turned ON without an explicit S parameter. Only applies to hardware PWM (hwpwm) and software PWM (swpwm) output types. Value range is 0-100 (percentage). This is the value used when switch is turned on via command or when startup_state is true. Can be overridden by S parameter in commands (e.g., M106 S75 sets to 75%).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.{name}.max_pwm"></setting></td>
            <td class="description-cell">Sets the maximum PWM value for sigma-delta PWM output. Allows limiting the maximum output power/speed when using PWM mode. The S parameter in commands is scaled from 0-255 to 0-max_pwm. Only applies to SIGMADELTA (pwm) output type, not for hwpwm or swpwm. Default 255 means no limiting (full range).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td><setting no-version v2="[pwm1] frequency"></setting></td>
            <td class="description-cell">Sets the PWM period in milliseconds for hardware PWM and software PWM outputs. This determines the PWM frequency. For servo control, typical value is 20ms (50Hz). Only applies to HWPWM and SWPWM output types. Lower period means higher frequency and faster PWM switching. For servos, standard is 20ms (50Hz), some servos support 10ms (100Hz). For LEDs, higher frequencies prevent visible flicker.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.failsafe_set_to"></setting></td>
            <td class="description-cell">Defines the pin state (0 or 1) to set during a crash, watchdog reset, or debug halt condition. This is a safety feature to ensure outputs are in a safe state when the system fails. Different from halt_set_to which handles <mcode>M112</mcode> HALT commands. Can be overridden by ignore_on_halt setting. Choose a value that puts your system in a safe state for your hardware.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.{name}.halt_set_to"></setting></td>
            <td class="description-cell">Defines the switch state (true or false) to set during a HALT condition (typically triggered by <mcode>M112</mcode> emergency stop or system halt). When a halt occurs, the switch is set to this state unless ignore_on_halt is true. For digital outputs, this boolean directly controls the pin state (high/low). For PWM outputs (hwpwm/swpwm), startup_value is used as the actual value. Different from failsafe_set_to which handles crash/debug conditions.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.{name}.ignore_on_halt"></setting></td>
            <td class="description-cell">When set to true, prevents the switch from changing state during HALT conditions (<mcode>M112</mcode> emergency stop). Set to true to not set the failsafe or startup_value value when a HALT condition is triggered. Automatically set to true for input-pin switches and cannot be overridden. Useful for non-safety-critical outputs (lights, status indicators) that should maintain their state during emergency stops.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
