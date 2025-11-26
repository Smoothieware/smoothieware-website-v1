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
            <td><setting no-version v1="temperature_control.{name}.enable"></setting></td>
            <td><setting no-version v2="temperature control.enable"></setting></td>
            <td class="description-cell">Whether to activate this temperaturecontrol module. You can create as many temperaturecontrol modules as you want, simply by giving a new module a name, and setting its <setting v1="temperature_control.{name}.enable" v2="temperature control.enable"></setting> option to true.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.thermistor_pin"></setting></td>
            <td><setting no-version v2="temperature control.thermistor_pin"></setting></td>
            <td class="description-cell">Pin for the thermistor to read. ADC ports TH1 to TH4 are pins <pin>0.23</pin> to <pin>0.26</pin>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.heater_pin"></setting></td>
            <td><setting no-version v2="temperature control.heater_pin"></setting></td>
            <td class="description-cell">Pin that controls the heater. This can be used to control a Mosfet on board or an external Solid State Relay. Set to <raw>nc</raw> if a readonly thermistor is being defined.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.sensor"></setting></td>
            <td><setting no-version v2="temperature control.sensor"></setting></td>
            <td class="description-cell">Set the type of sensor used to read temperature. Values can be <raw>thermistor</raw> for the usual thermistor reading via ADC method, or <raw>max31855</raw> to read values from a thermocouple over SPI. See <a href="temperaturecontrol#thermocouple">Reading a thermocouple</a>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.thermistor"></setting></td>
            <td><setting no-version v2="temperature control.thermistor"></setting></td>
            <td class="description-cell">Set the thermistor model for this module. Several different common models are pre-defined, see <a href="temperaturecontrol#toc5">thermistor choice guide</a>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.beta"></setting></td>
            <td><setting no-version v2="temperature control.beta"></setting></td>
            <td class="description-cell">Manually set the <setting v1="temperature_control.{name}.beta" v2="temperature control.beta"></setting> value for your thermistor. This is useful if your thermistor is not in the common pre-defined models.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.r0"></setting></td>
            <td><setting no-version v2="temperature control.r0"></setting></td>
            <td class="description-cell">Manually set the <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> resistance value for your thermistor. This is useful if your thermistor is not in the common pre-defined models. Besides <setting v1="temperature_control.{name}.beta" v2="temperature control.beta"></setting> and <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> which are properties of your thermistor, you can also set the <raw>r1</raw>, <raw>r2</raw> and <raw>t0</raw> values, but those are properties of your board so they usually never have to be changed.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.t0"></setting></td>
            <td><setting no-version v2="temperature control.t0"></setting></td>
            <td class="description-cell">Reference temperature in degrees Celsius for the thermistor resistance <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> value. Standard is 25°C.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.r1"></setting></td>
            <td><setting no-version v2="temperature control.r1"></setting></td>
            <td class="description-cell">Series resistor value in ohms in the thermistor circuit. This is a board property and usually doesn't need to be changed. Standard Smoothieboard uses 0 (no series resistor).</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.r2"></setting></td>
            <td><setting no-version v2="temperature control.r2"></setting></td>
            <td class="description-cell">Pull-up resistor value in ohms in the thermistor circuit. This is a board property and usually doesn't need to be changed. Standard Smoothieboard uses 4700 ohms.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.coefficients"></setting></td>
            <td><setting no-version v2="temperature control.coefficients"></setting></td>
            <td class="description-cell">Steinhart-Hart equation coefficients (c1, c2, c3) for accurate temperature calculation across full temperature range. Specify as three comma-separated floats (no spaces). This enables the most accurate temperature measurement method.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.rt_curve"></setting></td>
            <td><setting no-version v2="temperature control.rt_curve"></setting></td>
            <td class="description-cell">Three temperature/resistance pairs used to auto-calculate Steinhart-Hart coefficients. Format: T1,R1,T2,R2,T3,R3 where T is temperature in °C and R is resistance in ohms. Best practice: use 25°C, 150°C, and 240°C points from the thermistor datasheet.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.use_beta_table"></setting></td>
            <td><setting no-version v2="temperature control.use_beta_table"></setting></td>
            <td class="description-cell">Forces use of beta-based predefined thermistor table instead of Steinhart-Hart coefficients when using a predefined thermistor name. This setting only applies when a predefined thermistor name is specified.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.chip_select_pin"></setting></td>
            <td><setting no-version v2="temperature control.spi_select_pin"></setting></td>
            <td class="description-cell">If the sensor is set to <raw>max31855</raw>, sets the chip select pin for the SPI port. This allows you to have multiple sensors sharing the same SPI port, as long as they each get a chip select (CS) pin.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.spi_channel"></setting></td>
            <td><setting no-version v2="temperature control.spi_channel"></setting></td>
            <td class="description-cell">If the sensor is set to <raw>max31855</raw>, SPI channel using which to talk to the thermocouple chip.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.ad8495_pin"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Required ADC pin for reading AD8495 thermocouple amplifier output. Only used when sensor type is <raw>ad8495</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.ad8495_offset"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Temperature offset in degrees Celsius for AD8495 sensor calibration. Default is 0. Adafruit AD8495 boards typically require an offset of 250. Only used when sensor type is <raw>ad8495</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.PT1000_pin"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Required ADC pin for reading PT1000 RTD sensor. Only used when sensor type is <raw>PT1000</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.readings_per_second"></setting></td>
            <td><setting no-version v2="temperature control.readings_per_second"></setting></td>
            <td class="description-cell">How many times per second to read temperature from the sensor. This setting determines how often the sensor is read and PID calculation is performed. Higher values improve control stability but increase CPU load.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.pwm_frequency"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">How many times per second to switch the heating element on or off. Set to a low value (20) if using a Solid State Relay.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="temperature control.max_pwm"></setting></td>
            <td class="description-cell">Maximum PWM value for the heating element. This can be from <raw>0</raw> to <raw>255</raw>. <raw>64</raw> is a good value if driving a 12v resistor with 24v. <raw>255</raw> is the default and the normal value if you are using the right voltage for your heating element.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.bang_bang"></setting></td>
            <td><setting no-version v2="temperature control.bang_bang"></setting></td>
            <td class="description-cell">Set to true to use bang bang control rather than PID. Bang-bang (on/off) control is suitable for slow-response systems like heated beds with mechanical relays or SSRs.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.hysteresis"></setting></td>
            <td><setting no-version v2="temperature control.hysteresis"></setting></td>
            <td class="description-cell">Set to the temperature in degrees C to use as hysteresis for bang bang control. Creates a deadband of ±hysteresis around the target temperature to prevent rapid heater switching.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.p_factor"></setting></td>
            <td><setting no-version v2="temperature control.p_factor"></setting></td>
            <td class="description-cell">P factor for PID temperature regulation. Determines the controller's response to current temperature error. Higher values increase responsiveness but may cause oscillation. Use <mcode>M303</mcode> PID autotune for optimal values.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.i_factor"></setting></td>
            <td><setting no-version v2="temperature control.i_factor"></setting></td>
            <td class="description-cell">I factor for PID temperature regulation. Eliminates steady-state temperature error over time by accumulating past errors. Internally scaled by PIDdt (1/readings_per_second). Higher values eliminate offset faster but risk overshoot. Use <mcode>M303</mcode> autotune for optimal values.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.d_factor"></setting></td>
            <td><setting no-version v2="temperature control.d_factor"></setting></td>
            <td class="description-cell">D factor for PID temperature regulation. Reduces overshoot by damping the rate of temperature change. Internally scaled by PIDdt. Higher values reduce overshoot but may slow response. Use <mcode>M303</mcode> autotune for optimal values.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.i_max"></setting></td>
            <td><setting no-version v2="temperature control.i_max"></setting></td>
            <td class="description-cell">Maximum value for the I variable in the PID control. This should usually be set to about the same value as <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting> (as a rule of thumb, it is not actually a pwm setting). This helps with preventing overshoot when initially heating up. If you get a strong (>10°C) overshoot on startup, try setting this to a value lower than <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.windup"></setting></td>
            <td><setting no-version v2="temperature control.windup"></setting></td>
            <td class="description-cell">Enable alternative integral windup protection behavior. When false (default), I term updates continuously. When true, I term only updates when PID output is not saturated (anti-windup).</td>
        </tr>
        <tr>
            <td><em>V2 only</em></td>
            <td><setting no-version v2="temperature control.use_ponm"></setting></td>
            <td class="description-cell">Use Proportional on Measurement instead of Proportional on Error. PonM mode reduces overshoot when changing setpoint by applying the P term to measurement changes rather than error changes. See <a href="http://brettbeauregard.com/blog/2017/06/introducing-proportional-on-measurement/">this article</a> for detailed explanation.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.get_m_code"></setting></td>
            <td><setting no-version v2="temperature control.get_m_code"></setting></td>
            <td class="description-cell">Calling this M-code will return the current temperature. Standard: <mcode>M105</mcode> returns all active temperatures in format designator:current/target @pwm.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.set_m_code"></setting></td>
            <td><setting no-version v2="temperature control.set_m_code"></setting></td>
            <td class="description-cell">This is the M-code for simply setting the temperature. For example here, the value is <raw>104</raw> so you use <mcode>M104</mcode> S50 to set this module's heater's temperature to 50. Standard: <mcode>M104</mcode> for hotends, <mcode>M140</mcode> for heated beds.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.set_and_wait_m_code"></setting></td>
            <td><setting no-version v2="temperature control.set_and_wait_m_code"></setting></td>
            <td class="description-cell">This is the M-code for setting the temperature then waiting for that temperature to be reached before doing anything. For example here, the value is <raw>109</raw> so you use <mcode>M109</mcode> S50 to set this module's heater's temperature to 50 and then wait. Standard: <mcode>M109</mcode> for hotends, <mcode>M190</mcode> for heated beds.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature control.designator"></setting></td>
            <td class="description-cell">The letter this module's temperature will be identified as in the <mcode>M105</mcode> command's answer. For example here the value is T, so <mcode>M105</mcode> will answer <raw>ok T:23.4 /0.0 @0</raw>.</td>
        </tr>
        <tr>
            <td><em>V2 only</em></td>
            <td><setting no-version v2="temperature control.tool_id"></setting></td>
            <td class="description-cell">Tool number for M-code addressing and tool selection. Determines which temperature controller is addressed by T commands and whether the controller responds to tool change commands. Auto-assigned: 0 for hotend, 1 for hotend2, 254 for bed, 253 for board.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.max_temp"></setting></td>
            <td><setting no-version v2="temperature control.max_temp"></setting></td>
            <td class="description-cell">If set, no temperature above this will be accepted and if the temperature exceeds this value the system will be forced into a HALT state. This protects against thermal runaway and prevents damage to the machine and surroundings.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.min_temp"></setting></td>
            <td><setting no-version v2="temperature control.min_temp"></setting></td>
            <td class="description-cell">Minimum safe temperature threshold. If sensor reads below this value (e.g., thermistor disconnected), system immediately enters HALT state and heater turns off. This is a critical safety feature that detects sensor failures.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_heating_timeout"></setting></td>
            <td><setting no-version v2="temperature control.runaway_heating_timeout"></setting></td>
            <td class="description-cell">If we take longer than this many seconds to heatup, the system will be forced into a HALT state. Set to 0 to disable it. Default is 900 seconds. Detects heater failure, insufficient power, or disconnected heater.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_cooling_timeout"></setting></td>
            <td><setting no-version v2="temperature control.runaway_cooling_timeout"></setting></td>
            <td class="description-cell">If we take longer than this many seconds to cooldown, the system will be forced into a HALT state. Set to 0 to disable it. Default is disabled. Detects stuck heater or sensor failures.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_range"></setting></td>
            <td><setting no-version v2="temperature control.runaway_range"></setting></td>
            <td class="description-cell">If set to non-zero, and the target temperature is reached, and temperature diverges from the target temperature by more than this, the system will be forced into a HALT state. Detects heater stuck on, sensor failure, cooling system failure, or part cooling fan blowing on thermistor.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_error_range"></setting></td>
            <td><setting no-version v2="temperature control.runaway_error_range"></setting></td>
            <td class="description-cell">Acceptable temperature tolerance (±°C) for determining when target temperature has been "reached". Temperature must be within (target ± runaway_error_range) to be considered at target and to satisfy <mcode>M109</mcode> wait conditions. Default is ±1.0°C.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.preset1"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Temperature preset 1 for quick selection (e.g., 200°C for PLA hotend temperature).</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.preset2"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Temperature preset 2 for quick selection (e.g., 230°C for ABS hotend temperature).</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
