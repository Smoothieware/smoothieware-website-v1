
| Parameter | Default | Description |
| --------- | ------- | ----------- |
| `switch.module_name.enable` | true | Create and enable a new Switch module if set to true. Switch modules use commands or pins as inputs, to send commands or switch pins as output. Note this module is very versatile and can be used to do many different things. Parameters that are not defined will be ignored. |
| `switch.module_name.input_pin` | `2.11` | When this pin becomes high the switch changes to the ON state, and when it becomes low the switch changes to the OFF state. ( see the `input_pin_behavior` option for more details ) |
| `switch.module_name.input_pin_behavior` | momentary | If set to momentary when the input pin becomes high the switch changes to the ON state, and when it becomes low the switch changes to the OFF state. If set to toggle the input pin toggles the switch's state between ON and OFF. |
| `switch.module_name.input_on_command` | M106 | Calling this command sets the switch ON |
| `switch.module_name.input_off_command` | M107 | Calling this command sets the switch OFF |
| `switch.module_name.subcode` | 1 | the subcode that the input on or input off commands respond to `M106.1` |
| `switch.module_name.output_on_command` | abort | This command is called when the switch changes to the ON state |
| `switch.module_name.output_off_command` | resume | This command is called when the switch changes to the OFF state |
| `switch.module_name.output_pin` | `2.6` | This pin will be set low when the switch is OFF, and high when the switch is ON |
| `switch.module_name.output_type` | pwm | Sets the type of output for the `output_pin`, if set to digital the pin can only be low or high, and if set to pwm the pin can be set to any Sigma-Delta PWM value between 0 and 255 using the S parameter, for example : `M106 S127`. If set to hwpwm will use Real PWM, but the selected output pin must be [PWM capable](pwm-capable). The S value will be the duty cycle in percent, NOTE the default is none which will disable the output entirely. Can also be set to swpmw for software-emulated ( non-hardware ) pwm, that will be slower, but will not interfere with hardware pwm peripherals like a laser module. |
| `switch.module_name.startup_state` | false | Startup state of the switch. If set to false the module is initialized OFF, if set to true the module is initialized ON |
| `switch.module_name.startup_value` | 184 | Startup value of the switch if the `output_type` is any kind of pwm. `startup_state` must be false for this to take effect. It is also the value the hwpwm or swpwm is set to on HALT. |
| `switch.module_name.default_on_value` | 184 | Default on setting value of the switch if the `output_type` is swpwm or hwpwm. It is also the value the hwpwm or swpwm is set to when `startup_state` is true |
| `switch.module_name.max_pwm` | 210 | Maximum value for the PWM output. (only used for pwm output type, not for hwpwm) |
| `switch.module_name.pwm_period_ms` | 20 | Period used by the H/W and S/W PWM, 20ms is 50Hz which is the default if not set |
| `switch.module_name.failsafe_set_to` | 0 | 0 or 1 what to set the output pin to in case of a crash or HALT condition |
| `switch.module_name.ignore_on_halt` | false | set to true to not set the failsafe or `startup_value` value when a HALT condition is triggered |
