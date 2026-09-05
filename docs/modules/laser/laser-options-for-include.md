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
            <td><setting no-version v1="laser_module_enable"></setting></td>
            <td><setting no-version v2="laser.enable"></setting></td>
            <td class="description-cell">
                <p>Whether to activate the laser module at all. The laser module is used for laser cutting using a laser diode or CO2 laser tube.</p>
                <p>When set to <raw>`false`</raw>, all configuration is ignored and the module is completely unloaded to free system resources.</p>
                <p>Must be enabled before any other laser settings take effect.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">
                <p>This pin controls the laser. Pulse width is modulated (PWM) to vary power output — PWM duty cycle directly controls laser power output percentage. This is the preferred and more descriptive parameter for specifying the PWM control pin for the laser.</p>
                <p><strong>CRITICAL:</strong> Only hardware PWM pins are supported:</p>
                <ul>
                    <li><pin>2.0</pin> to <pin>2.5</pin></li>
                    <li><pin>1.18</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>1.23</pin>, <pin>1.24</pin>, <pin>1.26</pin></li>
                    <li><pin>3.25</pin> and <pin>3.26</pin></li>
                </ul>
                <p>Using non-PWM pins will disable the laser module with an error message. Inverting pin logic with the <raw>`!`</raw> prefix is useful for some laser driver circuits that are active-low.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">
                <p><strong>DEPRECATED:</strong> Legacy parameter that specifies the pin controlling the laser through PWM. Superseded by <setting v1="laser_module_pwm_pin"></setting> for improved clarity.</p>
                <p>If this pin is not connected, the system will check <setting v1="laser_module_pwm_pin"></setting> instead. Only specific pins on the Smoothieboard support the hardware PWM required for laser control.</p>
                <p>Use <setting v1="laser_module_pwm_pin"></setting> for all new configurations.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_ttl_pin"></setting></td>
            <td><setting no-version v2="laser.ttl_pin"></setting></td>
            <td class="description-cell">
                <p>This pin turns on when the laser turns on, and off when the laser turns off — a simple on/off signal synchronized with laser firing, independent of the PWM power level. This is a digital on/off signal, NOT PWM: it is either high or low.</p>
                <p>Commonly used to:</p>
                <ul>
                    <li>Enable/disable air assist compressors</li>
                    <li>Enable/disable fume extraction fans</li>
                    <li>Drive laser power supply enable pins for additional safety</li>
                    <li>Drive safety interlocks that monitor when the laser is active</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_power"></setting></td>
            <td><setting no-version v2="laser.maximum_power"></setting></td>
            <td class="description-cell">
                <p>The maximum duty cycle that will be applied to the laser, as a value from <raw>`0`</raw> to <raw>`1`</raw>. Acts as both a safety limit and a calibration parameter: it represents the highest power output the laser will achieve, even if G-code commands request 100% power. All S-values in G-code are scaled to this maximum.</p>
                <p>Example: setting <raw>`0.8`</raw> means <gcode>S100%</gcode> produces 80% actual laser power. Useful for preventing damage to both materials and the laser tube/diode.</p>
                <p><strong>WARNING:</strong> Does not provide emergency shutoff — use a kill switch for safety.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_minimum_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">
                <p>Sets the minimum PWM duty cycle (baseline power) for the laser, as a value from <raw>`0`</raw> to <raw>`1`</raw>. Used for travel moves to keep the laser active without actually burning, and as a floor for all laser operations. Also known as "tickle power" or "keepalive power".</p>
                <p>Useful for some diode setups: keeps laser diodes thermally stable by preventing complete shutoff and reduces thermal stress from constant on/off cycling. During cutting operations, actual power is scaled between this minimum and the maximum power setting.</p>
                <p><strong>WARNING:</strong> Non-zero values mean the laser is always slightly active when the module is enabled.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_tickle_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">
                <p><strong>DEPRECATED:</strong> Replaced by <setting v1="laser_module_minimum_power"></setting>. It originally set a small baseline amount of power to keep the laser "tickled" (slightly active) during travel moves.</p>
                <p>If you have old configuration files using this parameter, it will still work, since it provides the fallback default value for <setting v1="laser_module_minimum_power"></setting> — but migrate to using <setting v1="laser_module_minimum_power"></setting> instead for clarity and future compatibility.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_s_value"></setting></td>
            <td><setting no-version v2="laser.maximum_s_value"></setting></td>
            <td class="description-cell">
                <p>Maximum S-value accepted from G-code commands. Determines the S-value range:</p>
                <ul>
                    <li><raw>`1.0`</raw>: S0.0-S1.0 range (standard)</li>
                    <li><raw>`100.0`</raw>: S0-S100 range</li>
                    <li><raw>`255.0`</raw>: S0-S255 range (common in laser software)</li>
                </ul>
                <p>The S-value is scaled to the 0-1 range internally based on this maximum. Does not affect actual laser power output, only G-code interpretation — this allows using G-code from different CAM packages without modification. Example: with <raw>`maximum_s_value=100`</raw>, <gcode>S50</gcode> means 50% power.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_proportional_power"></setting></td>
            <td><setting no-version v2="laser.proportional_power"></setting></td>
            <td class="description-cell">
                <p>Whether laser power should be proportional to the current speed: as movement speed ramps up (and down), laser power is proportionally adjusted so that the amount of laser power/quantity of photons for a given distance/area stays constant, even as speed increases or decreases progressively. This is true by default.</p>
                <p>Enables automatic power scaling based on actual instantaneous movement speed. When enabled (default): <raw>`actual_power = requested_power × (current_speed / nominal_speed)`</raw>.</p>
                <p>This:</p>
                <ul>
                    <li>Ensures uniform engraving depth and cutting quality despite speed variations</li>
                    <li>Compensates for machine acceleration and deceleration automatically</li>
                    <li>Prevents over-burning in corners where the machine slows down</li>
                </ul>
                <p>Can also be controlled at runtime via <mcode>M221</mcode> P command. <strong>WARNING:</strong> Disabling may cause uneven cuts/engraving due to speed variations.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>PWM frequency expressed as the period in microseconds — sets the PWM period (and thus frequency) for laser control. The PWM frequency equals 1,000,000 divided by this period value.</p>
                <p>This frequency affects how smoothly laser power can be controlled and must be appropriate for your specific laser driver electronics; the system uses this period to limit the maximum rate of power adjustments. Default is <raw>`20`</raw> microseconds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">
                <p>Default S value for laser operations when no S parameter is specified in G-code, as a fraction from <raw>`0.0`</raw> (off) to <raw>`1.0`</raw> (full power). Used when G-code commands like <mcode>M3</mcode> or <mcode>M4</mcode> don't include an S parameter, and also serves as the initial power level before any S commands are received.</p>
                <p>Typical laser default is <raw>`0.8`</raw> (80% power). Set lower for testing, higher for production.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
