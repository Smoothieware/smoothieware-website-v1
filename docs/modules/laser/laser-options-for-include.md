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
            <td class="description-cell">Whether to activate the laser module at all. All configuration is ignored if false. The laser module is used for laser cutting using a laser diode or CO2 laser tube. When set to <raw>`false`</raw>, the module is completely unloaded to free system resources. Must be enabled before any other laser settings take effect.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">This pin will control the laser. Pulse width will be modulated to vary power output (PWM). The preferred and more descriptive parameter for specifying the PWM control pin for the laser. PWM duty cycle directly controls laser power output percentage. <strong>CRITICAL:</strong> Only hardware PWM pins are supported: <pin>2.0</pin> to <pin>2.5</pin>, <pin>1.18</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>1.23</pin>, <pin>1.24</pin>, <pin>1.26</pin>, <pin>3.25</pin> and <pin>3.26</pin>. Using non-PWM pins will disable the laser module with error message. Inverting pin logic with <raw>`!`</raw> prefix is useful for some laser driver circuits that are active-low.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell"><strong>DEPRECATED:</strong> Legacy parameter that specifies the pin controlling the laser through PWM. This setting has been superseded by <setting v1="laser_module_pwm_pin"></setting> for improved clarity. If this pin is not connected, the system will check <setting v1="laser_module_pwm_pin"></setting> instead. Only specific pins on the Smoothieboard support hardware PWM required for laser control. Use <setting v1="laser_module_pwm_pin"></setting> for all new configurations.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_ttl_pin"></setting></td>
            <td><setting no-version v2="laser.ttl_pin"></setting></td>
            <td class="description-cell">This pin turns on when the laser turns on, and off when the laser turns off. Provides a simple on/off signal synchronized with laser firing, independent of the PWM power level. This is a digital on/off signal, NOT PWM - it is either high or low. Commonly used to enable/disable air assist compressors, fume extraction fans, laser power supply enable pins for additional safety, or safety interlocks that monitor when laser is active.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_power"></setting></td>
            <td><setting no-version v2="laser.maximum_power"></setting></td>
            <td class="description-cell">This is the maximum duty cycle that will be applied to the laser. Value is from <raw>`0`</raw> to <raw>`1`</raw>. Acts as both a safety limit and calibration parameter - this value represents the highest power output the laser will achieve, even if G-code commands request 100% power. All S-values in G-code are scaled to this maximum. Example: Setting <raw>`0.8`</raw> means <gcode>S100%</gcode> produces 80% actual laser power. Useful for preventing damage to both materials and laser tube/diode. <strong>WARNING:</strong> Does not provide emergency shutoff - use kill switch for safety.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_minimum_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">This duty cycle will be used for travel moves to keep the laser active without actually burning. Useful for some diode setups. Value is from <raw>`0`</raw> to <raw>`1`</raw>. Sets the minimum PWM duty cycle (baseline power) for the laser during travel moves and as a floor for all laser operations. Also known as "tickle power" or "keepalive power". Keeps laser diodes thermally stable by preventing complete shutoff and reduces thermal stress from constant on/off cycling. During cutting operations, the actual power is scaled between this minimum and the maximum power setting. <strong>WARNING:</strong> Non-zero values mean laser is always slightly active when module enabled.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_tickle_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell"><strong>DEPRECATED:</strong> This parameter has been deprecated and replaced by <setting v1="laser_module_minimum_power"></setting>. It originally set a small baseline amount of power to keep the laser "tickled" (slightly active) during travel moves. If you have old configuration files using this parameter, it will still work as it provides the fallback default value for <setting v1="laser_module_minimum_power"></setting>, but you should migrate to using <setting v1="laser_module_minimum_power"></setting> instead for clarity and future compatibility.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_s_value"></setting></td>
            <td><setting no-version v2="laser.maximum_s_value"></setting></td>
            <td class="description-cell">Maximum S-value accepted from G-code commands. Determines the S-value range: set to <raw>`1.0`</raw> for S0.0-S1.0 range (standard), <raw>`100.0`</raw> for S0-S100 range, or <raw>`255.0`</raw> for S0-S255 range (common in laser software). The S-value is scaled to the 0-1 range internally based on this maximum. Does not affect actual laser power output, only G-code interpretation. Allows using G-code from different CAM packages without modification. Example: With <raw>`maximum_s_value=100`</raw>, <gcode>S50</gcode> means 50% power.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_proportional_power"></setting></td>
            <td><setting no-version v2="laser.proportional_power"></setting></td>
            <td class="description-cell">Whether the laser power should be proportional to the current speed, so as speed of movement ramps up (and down), laser power is proportionally adjusted, so that the amount of laser power/quantity of photons for a given distance/area is always constant, even if speed has to increase/decrease progressively. This is true by default. Enables automatic power scaling based on actual instantaneous movement speed. When enabled (default), power calculation: <raw>`actual_power = requested_power × (current_speed / nominal_speed)`</raw>. Ensures uniform engraving depth and cutting quality despite speed variations, compensates for machine acceleration and deceleration automatically, prevents over-burning in corners where machine slows down. Can also be controlled at runtime via <mcode>M221</mcode> P command. <strong>WARNING:</strong> Disabling may cause uneven cuts/engraving due to speed variations.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">PWM frequency expressed as the period in microseconds. Sets the PWM period (and thus frequency) for laser control. The PWM frequency equals 1,000,000 divided by this period value. This frequency affects how smoothly the laser power can be controlled and must be appropriate for your specific laser driver electronics. The system uses this period to limit the maximum rate of power adjustments. Default is <raw>`20`</raw> microseconds.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">Default S value for laser operations when no S parameter is specified in G-code. Represents laser power as a fraction from <raw>`0.0`</raw> (off) to <raw>`1.0`</raw> (full power). When G-code commands like <mcode>M3</mcode> or <mcode>M4</mcode> don't include an S parameter, this default value is used. Also serves as the initial power level before any S commands are received. Typical laser default is <raw>`0.8`</raw> (80% power). Set lower for testing, higher for production.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
