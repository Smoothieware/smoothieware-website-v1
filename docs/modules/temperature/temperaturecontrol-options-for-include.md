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
            <td class="description-cell">
                <p>Whether to activate this temperaturecontrol module.</p>
                <p>You can create as many temperaturecontrol modules as you want, simply by giving a new module a name and setting its <setting v1="temperature_control.{name}.enable" v2="temperature control.enable"></setting> option to true.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.thermistor_pin"></setting></td>
            <td><setting no-version v2="temperature control.thermistor_pin"></setting></td>
            <td class="description-cell">Pin for the thermistor to read. ADC ports TH1 to TH4 are pins <pin>0.23</pin> to <pin>0.26</pin>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.heater_pin"></setting></td>
            <td><setting no-version v2="temperature control.heater_pin"></setting></td>
            <td class="description-cell">
                <p>Pin that controls the heater. This can be used to control a Mosfet on board or an external Solid State Relay.</p>
                <p>Set to <raw>nc</raw> if a readonly thermistor is being defined.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.sensor"></setting></td>
            <td><setting no-version v2="temperature control.sensor"></setting></td>
            <td class="description-cell">
                <p>This sets the type of sensor used to read temperature.</p>
                <ul>
                    <li><raw>thermistor</raw>: the usual thermistor reading via ADC</li>
                    <li><raw>max31855</raw>: read values from a thermocouple over SPI. See <a href="temperaturecontrol#thermocouple">Reading a thermocouple</a></li>
                </ul>
            </td>
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
            <td class="description-cell">
                <p>Manually set the <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> resistance value for your thermistor. This is useful if your thermistor is not in the common pre-defined models.</p>
                <p><setting v1="temperature_control.{name}.beta" v2="temperature control.beta"></setting> and <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> are properties of your thermistor. You can also set <raw>r1</raw>, <raw>r2</raw> and <raw>t0</raw>, but those are properties of your board, so they usually never have to be changed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.t0"></setting></td>
            <td><setting no-version v2="temperature control.t0"></setting></td>
            <td class="description-cell">Reference temperature in degrees Celsius for the thermistor resistance <setting v1="temperature_control.{name}.r0" v2="temperature control.r0"></setting> value. Standard is 25°C.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.r1"></setting></td>
            <td><setting no-version v2="temperature control.r1"></setting></td>
            <td class="description-cell">
                <p>Series resistor value in ohms in the thermistor circuit. This is a board property and usually doesn't need to be changed.</p>
                <p>Standard Smoothieboard uses 0 (no series resistor).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.r2"></setting></td>
            <td><setting no-version v2="temperature control.r2"></setting></td>
            <td class="description-cell">
                <p>Pull-up resistor value in ohms in the thermistor circuit. This is a board property and usually doesn't need to be changed.</p>
                <p>Standard Smoothieboard uses 4700 ohms.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.coefficients"></setting></td>
            <td><setting no-version v2="temperature control.coefficients"></setting></td>
            <td class="description-cell">
                <p>These are the Steinhart-Hart equation coefficients (c1, c2, c3), for accurate temperature readings across the whole range. Give them as three comma-separated floats, no spaces.</p>
                <p>This is the most accurate way to measure temperature that Smoothie supports.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.rt_curve"></setting></td>
            <td><setting no-version v2="temperature control.rt_curve"></setting></td>
            <td class="description-cell">
                <p>These are three temperature/resistance pairs, used to auto-calculate the Steinhart-Hart coefficients for you. Format: <raw>T1,R1,T2,R2,T3,R3</raw>, where T is temperature in °C and R is resistance in ohms.</p>
                <p>Use the 25°C, 150°C, and 240°C points from your thermistor's datasheet.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.use_beta_table"></setting></td>
            <td><setting no-version v2="temperature control.use_beta_table"></setting></td>
            <td class="description-cell">Forces Smoothie to use the beta-based predefined thermistor table instead of Steinhart-Hart coefficients, when you're using a predefined thermistor name. Only applies when a predefined thermistor name is specified.</td>
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
            <td class="description-cell">
                <p>This is a temperature offset in degrees Celsius, for calibrating the AD8495 sensor. Only used when the sensor type is <raw>ad8495</raw>.</p>
                <p>Default is 0. Adafruit's AD8495 boards typically need an offset of 250.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.PT1000_pin"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">Required ADC pin for reading PT1000 RTD sensor. Only used when sensor type is <raw>PT1000</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.readings_per_second"></setting></td>
            <td><setting no-version v2="temperature control.readings_per_second"></setting></td>
            <td class="description-cell">
                <p>How many times per second to read the temperature from the sensor. This is also how often the PID calculation runs.</p>
                <p>Turn it up and you get more stable control, but it costs more CPU.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.pwm_frequency"></setting></td>
            <td><em>V1 only</em></td>
            <td class="description-cell">How many times per second to switch the heating element on or off. Set to a low value (20) if using a Solid State Relay.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="temperature control.max_pwm"></setting></td>
            <td class="description-cell">
                <p>This is the maximum PWM value for the heating element, from <raw>0</raw> to <raw>255</raw>.</p>
                <ul>
                    <li><raw>255</raw> (default): the normal value if you're running your heating element at the right voltage</li>
                    <li><raw>64</raw>: a good value if you're driving a 12v resistor with 24v</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.bang_bang"></setting></td>
            <td><setting no-version v2="temperature control.bang_bang"></setting></td>
            <td class="description-cell">Set to true to use bang bang control instead of PID. Bang-bang (on/off) control works well for slow-response systems like heated beds with mechanical relays or SSRs.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.hysteresis"></setting></td>
            <td><setting no-version v2="temperature control.hysteresis"></setting></td>
            <td class="description-cell">Set to the temperature in degrees C to use as hysteresis for bang bang control. This creates a deadband of ±hysteresis around the target temperature, so the heater doesn't switch on and off too rapidly.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.p_factor"></setting></td>
            <td><setting no-version v2="temperature control.p_factor"></setting></td>
            <td class="description-cell">
                <p>This is the P factor for PID temperature regulation, it's what determines how strongly the controller reacts to the current temperature error.</p>
                <p>Turn it up and the controller responds faster, but push it too far and you'll get oscillation. Use <mcode>M303</mcode> PID autotune to find good values instead of guessing.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.i_factor"></setting></td>
            <td><setting no-version v2="temperature control.i_factor"></setting></td>
            <td class="description-cell">
                <p>This is the I factor for PID temperature regulation. It eliminates steady-state temperature error over time, by accumulating past errors. It's internally scaled by PIDdt (1/readings_per_second).</p>
                <p>Turn it up and offset gets eliminated faster, but you risk overshoot. Use <mcode>M303</mcode> autotune to find good values.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.d_factor"></setting></td>
            <td><setting no-version v2="temperature control.d_factor"></setting></td>
            <td class="description-cell">
                <p>This is the D factor for PID temperature regulation. It reduces overshoot by damping how fast the temperature is allowed to change, and is internally scaled by PIDdt.</p>
                <p>Turn it up and you get less overshoot, but the response gets slower. Use <mcode>M303</mcode> autotune to find good values.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.i_max"></setting></td>
            <td><setting no-version v2="temperature control.i_max"></setting></td>
            <td class="description-cell">
                <p>This is the maximum value for the I variable in the PID control. As a rule of thumb, set it to about the same value as <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>, even though it isn't actually a PWM setting itself. This helps prevent overshoot when you first start heating up.</p>
                <p>If you get a strong overshoot (more than 10°C) on startup, try setting this lower than <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.windup"></setting></td>
            <td><setting no-version v2="temperature control.windup"></setting></td>
            <td class="description-cell">
                <p>This turns on an alternative integral windup protection behavior.</p>
                <ul>
                    <li>false (default): I term updates continuously</li>
                    <li>true: I term only updates when PID output is not saturated (anti-windup)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><em>V2 only</em></td>
            <td><setting no-version v2="temperature control.use_ponm"></setting></td>
            <td class="description-cell">
                <p>This switches to Proportional on Measurement instead of Proportional on Error. PonM mode reduces overshoot when you change the setpoint, by applying the P term to changes in the measurement rather than changes in the error.</p>
                <p>See <a href="http://brettbeauregard.com/blog/2017/06/introducing-proportional-on-measurement/">this article</a> for a fuller explanation.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.get_m_code"></setting></td>
            <td><setting no-version v2="temperature control.get_m_code"></setting></td>
            <td class="description-cell">Calling this M-code will return the current temperature. Standard: <mcode>M105</mcode> returns all active temperatures in format designator:current/target @pwm.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.set_m_code"></setting></td>
            <td><setting no-version v2="temperature control.set_m_code"></setting></td>
            <td class="description-cell">
                <p>This is the M-code for simply setting the temperature. For example here, the value is <raw>104</raw>, so you use <mcode>M104</mcode> S50 to set this module's heater's temperature to 50.</p>
                <p>Standard: <mcode>M104</mcode> for hotends, <mcode>M140</mcode> for heated beds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.set_and_wait_m_code"></setting></td>
            <td><setting no-version v2="temperature control.set_and_wait_m_code"></setting></td>
            <td class="description-cell">
                <p>This is the M-code for setting the temperature then waiting for that temperature to be reached before doing anything. For example here, the value is <raw>109</raw>, so you use <mcode>M109</mcode> S50 to set this module's heater's temperature to 50 and then wait.</p>
                <p>Standard: <mcode>M109</mcode> for hotends, <mcode>M190</mcode> for heated beds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature control.designator"></setting></td>
            <td class="description-cell">The letter this module's temperature will be identified as in the <mcode>M105</mcode> command's answer. For example here the value is T, so <mcode>M105</mcode> will answer <raw>ok T:23.4 /0.0 @0</raw>.</td>
        </tr>
        <tr>
            <td><em>V2 only</em></td>
            <td><setting no-version v2="temperature control.tool_id"></setting></td>
            <td class="description-cell">
                <p>This is the tool number used for M-code addressing and tool selection. It determines which temperature controller responds to T commands and to tool change commands.</p>
                <ul>
                    <li>Auto-assigned: 0 for hotend</li>
                    <li>1 for hotend2</li>
                    <li>254 for bed</li>
                    <li>253 for board</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.max_temp"></setting></td>
            <td><setting no-version v2="temperature control.max_temp"></setting></td>
            <td class="description-cell">If you set this, no temperature above it will be accepted, and if the temperature goes over it the system is forced into a HALT state. This is what protects you against thermal runaway.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.min_temp"></setting></td>
            <td><setting no-version v2="temperature control.min_temp"></setting></td>
            <td class="description-cell">
                <p>This is the minimum safe temperature. If the sensor reads below it, for example because the thermistor got disconnected, the system immediately enters HALT state and turns the heater off.</p>
                <p>It's what catches a failed sensor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_heating_timeout"></setting></td>
            <td><setting no-version v2="temperature control.runaway_heating_timeout"></setting></td>
            <td class="description-cell">
                <p>If we take longer than this many seconds to heat up, the system will be forced into a HALT state. Set to 0 to disable. Default is 900 seconds.</p>
                <p>Catches a failed heater, not enough power, or a heater that's come disconnected.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_cooling_timeout"></setting></td>
            <td><setting no-version v2="temperature control.runaway_cooling_timeout"></setting></td>
            <td class="description-cell">
                <p>If we take longer than this many seconds to cool down, the system will be forced into a HALT state. Set to 0 to disable. Default is disabled.</p>
                <p>Catches a heater that's stuck on, or a sensor failure.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_range"></setting></td>
            <td><setting no-version v2="temperature control.runaway_range"></setting></td>
            <td class="description-cell">
                <p>If set to non-zero, and the target temperature is reached, and temperature diverges from the target temperature by more than this, the system will be forced into a HALT state.</p>
                <p>Catches a heater stuck on, a sensor failure, a cooling system failure, or a part cooling fan blowing directly on the thermistor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperature_control.{name}.runaway_error_range"></setting></td>
            <td><setting no-version v2="temperature control.runaway_error_range"></setting></td>
            <td class="description-cell">
                <p>This is the tolerance (±°C) Smoothie uses to decide the target temperature has been "reached". The temperature has to be within target ± runaway_error_range to count as at target, and to satisfy <mcode>M109</mcode>'s wait condition.</p>
                <p>Default is ±1.0°C.</p>
            </td>
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
