---
permalink: /temperaturecontrol-options
---

# Temperature Control Options

This page lists all configuration options for the Temperature Control module, which manages heating and cooling for things like hotends and heated beds.

## Configuration Options

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| `temperature_control.[module_name].enable` | true | Whether to activate this temperaturecontrol module. You can create as many temperaturecontrol modules as you want, simply by giving a new module a name, and setting its `enable` option to true. |
| `temperature_control.[module_name].thermistor_pin` | `0.23` | Pin for the thermistor to read. ADC ports TH1 to TH4 are pins 0.23 to 0.26. |
| `temperature_control.[module_name].readings_per_second` | 20 | How many times per second to read temperature from the sensor. |
| `temperature_control.[module_name].pwm_frequency` | 2000 | How many times per second to switch the heating element on or off. Set to a low value (20) if using a Solid State Relay. |
| `temperature_control.[module_name].heater_pin` | `2.7` | Pin that controls the heater. This can be used to control a Mosfet on board or an external Solid State Relay. Set to `nc` if a readonly thermistor is being defined. |
| `temperature_control.[module_name].thermistor` | EPCOS100K | Set the thermistor model for this module. Several different common models are pre-defined, see [here for a list](temperaturecontrol#toc5). |
| `temperature_control.[module_name].beta` | 4066 | Manually set the `beta` value for your thermistor. This is useful if your thermistor is not in the common pre-defined models. |
| `temperature_control.[module_name].r0` | 100000 | Manually set the `r0` resistance value for your thermistor. This is useful if your thermistor is not in the common pre-defined models. Besides `beta` and `r0` which are properties of your thermistor, you can also set the `r1`, `r2` and `t0` values, but those are properties of your board so they usually never have to be changed. |
| `temperature_control.[module_name].get_m_code` | 105 | Calling this M-code will return the current temperature. |
| `temperature_control.[module_name].set_m_code` | 104 | This is the M-code for simply setting the temperature. For example here, the value is `104` so you use `M104 S50` to set this module's heater's temperature to 50. |
| `temperature_control.[module_name].set_and_wait_m_code` | 109 | This is the M-code for setting the temperature then waiting for that temperature to be reached before doing anything. For example here, the value is `109` so you use `M109 S50` to set this module's heater's temperature to 50 and then wait. |
| `temperature_control.[module_name].designator` | T | The letter this module's temperature will be identified as in the `M105` command's answer. For example here the value is T, so `M105` will answer `ok T:23.4 /0.0 @0`. |
| `temperature_control.[module_name].p_factor` | 13.7 | P factor for PID temperature regulation. |
| `temperature_control.[module_name].i_factor` | 0.097 | I factor for PID temperature regulation. |
| `temperature_control.[module_name].d_factor` | 24 | D factor for PID temperature regulation. |
| `temperature_control.[module_name].max_pwm` | 64 | Maximum PWM value for the heating element. This can be from `0` to `255`. `64` is a good value if driving a 12v resistor with 24v. `255` is the default and the normal value if you are using the right voltage for your heating element. |
| `temperature_control.[module_name].bang_bang` | false | Set to true to use bang bang control rather than PID. |
| `temperature_control.[module_name].hysteresis` | 2.0 | Set to the temperature in degrees C to use as hysteresis for bang bang control. |
| `temperature_control.[module_name].i_max` | 64 | Maximum value for the I variable in the PID control. This should usually be set to about the same value as `max_pwm` (as a rule of thumb, it is not actually a pwm setting). This helps with preventing overshoot when initially heating up. If you get a strong (>10°C) overshoot on startup, try setting this to a value lower than `max_pwm`. |
| `temperature_control.[module_name].sensor` | thermistor | Set the type of sensor used to read temperature. Values can be `thermistor` for the usual thermistor reading via ADC method, or `max31855` to read values from a thermocouple over SPI. See [Reading a thermocouple](temperaturecontrol#thermocouple). |
| `temperature_control.[module_name].chip_select_pin` | `0.16` | If the sensor is set to `max31855`, sets the chip select pin for the SPI port. This allows you to have multiple sensors sharing the same SPI port, as long as they each get a chip select (CS) pin. |
| `temperature_control.[module_name].spi_channel` | 0 | If the sensor is set to `max31855`, SPI channel using which to talk to the thermocouple chip. |
| `temperature_control.[module_name].ad8495_pin` | - | Required ADC pin for reading AD8495 thermocouple amplifier output. Only used when sensor type is `ad8495`. |
| `temperature_control.[module_name].ad8495_offset` | 0 | Temperature offset in degrees Celsius for AD8495 sensor calibration. Default is 0. Adafruit AD8495 boards typically require an offset of 250. Only used when sensor type is `ad8495`. |
| `temperature_control.[module_name].PT1000_pin` | - | Required ADC pin for reading PT1000 RTD sensor. Only used when sensor type is `PT1000`. |
| `temperature_control.[module_name].max_temp` | 100 | If set, no temperature above this will be accepted and if the temperature exceeds this value the system will be forced into a HALT state. |
| `temperature_control.[module_name].runaway_heating_timeout` | 120 | If we take longer than this many seconds to heatup, the system will be forced into a HALT state. Set to 0 to disable it. Default is 900 seconds. |
| `temperature_control.[module_name].runaway_cooling_timeout` | 120 | If we take longer than this many seconds to cooldown, the system will be forced into a HALT state. Set to 0 to disable it. Default is disabled. |
| `temperature_control.[module_name].runaway_range` | 20 | If set to non-zero, and the target temperature is reached, and temperature diverges from the target temperature by more than this, the system will be forced into a HALT state. |
