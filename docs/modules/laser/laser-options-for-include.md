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
                <p>This turns the laser module on. It's what runs laser cutting or engraving, whether you're using a diode or a CO2 tube.</p>
                <p>Set it to <raw>`false`</raw> and everything else laser-related is ignored. The module doesn't even load, so you free up system resources.</p>
                <p>Nothing else laser-related works until you enable this.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that controls the laser through PWM: the duty cycle of the pulse directly sets the laser's power output. It's the preferred way to specify the laser's PWM pin.</p>
                <p><strong>Only hardware PWM pins work here.</strong> On a Smoothieboard that's:</p>
                <ul>
                    <li><pin>2.0</pin> to <pin>2.5</pin></li>
                    <li><pin>1.18</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>1.23</pin>, <pin>1.24</pin>, <pin>1.26</pin></li>
                    <li><pin>3.25</pin> and <pin>3.26</pin></li>
                </ul>
                <p>Use a non-PWM pin and the laser module disables itself with an error message. If your laser driver circuit is active-low, invert the pin with the <raw>`!`</raw> prefix.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">
                <p><strong>Deprecated.</strong> This is the old parameter for the laser's PWM control pin, replaced by <setting v1="laser_module_pwm_pin"></setting>.</p>
                <p>Leave this one unset and Smoothie falls back to <setting v1="laser_module_pwm_pin"></setting> instead. Only certain pins on the Smoothieboard support the hardware PWM laser control needs.</p>
                <p>Use <setting v1="laser_module_pwm_pin"></setting> in any new configuration.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_ttl_pin"></setting></td>
            <td><setting no-version v2="laser.ttl_pin"></setting></td>
            <td class="description-cell">
                <p>This pin goes on when the laser fires and off when it stops, a plain on/off signal tied to whether the laser is firing, regardless of its power level. It's a digital signal: just high or low.</p>
                <p>People commonly wire it to:</p>
                <ul>
                    <li>An air assist compressor</li>
                    <li>A fume extraction fan</li>
                    <li>The laser power supply's enable pin, as an extra safety layer</li>
                    <li>A safety interlock that watches when the laser is active</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_power"></setting></td>
            <td><setting no-version v2="laser.maximum_power"></setting></td>
            <td class="description-cell">
                <p>This caps the duty cycle Smoothie will ever apply to the laser, as a value from <raw>`0`</raw> to <raw>`1`</raw>. It's both a safety limit and a calibration value: the laser never goes above this, even if G-code asks for 100% power. Every S-value in your G-code gets scaled against it.</p>
                <p>Set it to <raw>`0.8`</raw> and <gcode>S100%</gcode> in G-code only produces 80% actual laser power. Good for protecting your material and your laser tube or diode.</p>
                <p><strong>Warning:</strong> this isn't an emergency shutoff. Use a real kill switch for that.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_minimum_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">
                <p>This is the baseline power for the laser, a minimum PWM duty cycle from <raw>`0`</raw> to <raw>`1`</raw> that stays on during travel moves without actually burning anything. It's also a floor under every laser operation. People also call it "tickle power" or "keepalive power".</p>
                <p>On some diode setups this helps: it keeps the diode thermally stable instead of switching fully off and on, which stresses it. While cutting, actual power gets scaled between this minimum and your maximum power setting.</p>
                <p><strong>Warning:</strong> set this above zero and the laser stays slightly active any time the module is enabled.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_tickle_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">
                <p><strong>Deprecated.</strong> This used to set a small baseline power to keep the laser "tickled" during travel moves. It's now replaced by <setting v1="laser_module_minimum_power"></setting>.</p>
                <p>If you've got an old config file with this in it, it'll still work. It becomes the fallback default for <setting v1="laser_module_minimum_power"></setting>. Migrate to <setting v1="laser_module_minimum_power"></setting> when you can.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_s_value"></setting></td>
            <td><setting no-version v2="laser.maximum_s_value"></setting></td>
            <td class="description-cell">
                <p>This sets the highest S-value Smoothie will accept from G-code, which fixes the S-value range it expects:</p>
                <ul>
                    <li><raw>`1.0`</raw>: S0.0-S1.0 (standard)</li>
                    <li><raw>`100.0`</raw>: S0-S100</li>
                    <li><raw>`255.0`</raw>: S0-S255 (common in laser software)</li>
                </ul>
                <p>Smoothie scales whatever S-value it gets down to 0-1 internally based on this maximum. That only changes how G-code gets interpreted, so you can feed it G-code from different CAM packages without editing it first. Set <raw>`maximum_s_value=100`</raw> and <gcode>S50</gcode> means 50% power.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_proportional_power"></setting></td>
            <td><setting no-version v2="laser.proportional_power"></setting></td>
            <td class="description-cell">
                <p>This ties laser power to how fast the machine is moving. As speed ramps up or down, power scales with it, so the amount of energy delivered per unit of distance stays constant. It's on by default.</p>
                <p>The formula is <raw>`actual_power = requested_power × (current_speed / nominal_speed)`</raw>, recalculated continuously as the machine moves.</p>
                <p>This keeps your engraving depth and cut quality consistent through speed changes, compensates automatically for acceleration and deceleration, and stops corners from getting over-burned where the machine slows down.</p>
                <p>You can also control it at runtime with <mcode>M221</mcode> P. <strong>Warning:</strong> turn it off and speed variations will show up as uneven cuts or engraving.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>This sets the laser's PWM period, in microseconds, which sets its frequency too: the frequency works out to 1,000,000 divided by this period.</p>
                <p>It affects how smoothly the laser's power can be adjusted, and it needs to suit your specific driver electronics, since Smoothie uses this period to cap how fast it can change power. The default is <raw>`20`</raw> microseconds.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">
                <p>This is the S value Smoothie uses when your G-code doesn't specify one, from <raw>`0.0`</raw> (off) to <raw>`1.0`</raw> (full power). It kicks in when a command like <mcode>M3</mcode> or <mcode>M4</mcode> arrives without an S parameter, and it's also the power level before any S command has been sent at all.</p>
                <p>Most people default to <raw>`0.8`</raw>, 80% power. Set it lower while testing, higher for production runs.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
