
# Switch Module Options

The Switch module is a versatile module that can be used to do many different things.

It uses commands or pins as inputs, to send commands or switch pins as output.

## Configuration Options

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| <setting v1="switch.{name}.enable" v2="switch.{name}.enable"></setting> | false | Create and enable a new Switch module if set to true. Switch modules use commands or pins as inputs, to send commands or switch pins as output. Note this module is very versatile and can be used to do many different things. Parameters that are not defined will be ignored. |
| <setting v1="switch.{name}.input_pin" v2="switch.{name}.input_pin"></setting> | <pin>2.11</pin> | When this pin becomes high the switch changes to the ON state, and when it becomes low the switch changes to the OFF state. ( see the <setting v1="switch.{name}.input_pin_behavior" v2="switch.{name}.input_pin_behavior"></setting> option for more details ) |
| <setting v1="switch.{name}.input_pin_behavior" v2="switch.{name}.input_pin_behavior"></setting> | momentary | If set to momentary when the input pin becomes high the switch changes to the ON state, and when it becomes low the switch changes to the OFF state. If set to toggle the input pin toggles the switch's state between ON and OFF. |
| <setting v1="switch.{name}.input_on_command" v2="switch.{name}.input_on_command"></setting> | <mcode>M106</mcode> | Calling this command sets the switch ON |
| <setting v1="switch.{name}.input_off_command" v2="switch.{name}.input_off_command"></setting> | <mcode>M107</mcode> | Calling this command sets the switch OFF |
| <setting v1="switch.{name}.subcode" v2="switch.{name}.subcode"></setting> | 1 | the subcode that the input on or input off commands respond to {::nomarkdown}<mcode>M106</mcode>{:/nomarkdown}.1 |
| <setting v1="switch.{name}.output_on_command" v2="switch.{name}.output_on_command"></setting> | abort | This command is called when the switch changes to the ON state |
| <setting v1="switch.{name}.output_off_command" v2="switch.{name}.output_off_command"></setting> | resume | This command is called when the switch changes to the OFF state |
| <setting v1="switch.{name}.output_pin" v2="switch.{name}.output_pin"></setting> | <pin>2.6</pin> | This pin will be set low when the switch is OFF, and high when the switch is ON |
| <setting v1="switch.{name}.output_type" v2="switch.{name}.output_type"></setting> | pwm | Sets the type of output for the {::nomarkdown}<setting v1="switch.{name}.output_pin" v2="switch.{name}.output_pin"></setting>{:/nomarkdown}, if set to digital the pin can only be low or high, and if set to pwm (the default, using Sigma-Delta PWM) the pin can be set to any PWM value between 0 and 255 using the S parameter, for example : {::nomarkdown}<mcode>M106</mcode>{:/nomarkdown} S127. If set to hwpwm will use Real PWM, but the selected output pin must be [PWM capable](pwm-capable). The S value will be the duty cycle in percent. Can also be set to swpmw for software-emulated ( non-hardware ) pwm, that will be slower, but will not interfere with hardware pwm peripherals like a laser module. Can be set to none to disable the output entirely. |
| <setting v1="switch.{name}.startup_state" v2="switch.{name}.startup_state"></setting> | false | Startup state of the switch. If set to false the module is initialized OFF, if set to true the module is initialized ON |
| <setting v1="switch.{name}.startup_value" v2="switch.{name}.startup_value"></setting> | 50 | Startup value of the switch if the <setting v1="switch.{name}.output_type" v2="switch.{name}.output_type"></setting> is any kind of pwm. Value range is 0-100 (percentage). <setting v1="switch.{name}.startup_state" v2="switch.{name}.startup_state"></setting> must be false for this to take effect. It is also the value the hwpwm or swpwm is set to on HALT. |
| <setting v1="switch.{name}.default_on_value" v2="switch.{name}.default_on_value"></setting> | 50 | Default on setting value of the switch if the <setting v1="switch.{name}.output_type" v2="switch.{name}.output_type"></setting> is swpwm or hwpwm. Value range is 0-100 (percentage). It is also the value the hwpwm or swpwm is set to when <setting v1="switch.{name}.startup_state" v2="switch.{name}.startup_state"></setting> is true |
| <setting v1="switch.{name}.max_pwm" v2="switch.{name}.max_pwm"></setting> | 210 | Maximum value for the PWM output. (only used for pwm output type, not for hwpwm) |
| <setting v1="switch.{name}.pwm_period_ms" v2="switch.{name}.pwm_period_ms"></setting> | 20 | Period used by the H/W and S/W PWM, 20ms is 50Hz which is the default if not set |
| <setting v1="switch.{name}.halt_set_to" v2="switch.{name}.halt_set_to"></setting> | false | true or false what state to set the switch to when a HALT condition is triggered (M112). For digital outputs sets pin high (true) or low (false). For PWM outputs (hwpwm/swpwm) the startup_value is used. Different from failsafe_set_to which handles crash/debug conditions. |
| <setting v1="switch.{name}.failsafe_set_to" v2="switch.{name}.failsafe_set_to"></setting> | 0 | 0 or 1 what to set the output pin to in case of a crash, watchdog reset, or debug condition. Does NOT apply to M112 HALT (see halt_set_to for that). |
| <setting v1="switch.{name}.ignore_on_halt" v2="switch.{name}.ignore_on_halt"></setting> | false | set to true to not set the failsafe or <setting v1="switch.{name}.startup_value" v2="switch.{name}.startup_value"></setting> value when a HALT condition is triggered. Note: automatically set to true for input-pin switches and cannot be overridden. |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  For more information about using the Switch module, see the main <a href="switch">Switch</a> documentation page.
</sl-alert>
{:/nomarkdown}
