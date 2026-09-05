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
            <td><setting no-version v1="spindle.enable"></setting></td>
            <td><setting no-version v2="switch.spindle.enable"></setting></td>
            <td class="description-cell">
                <p>Enables the spindle control module. When true, the spindle module is loaded and available for G-code control (M3/M5 commands).</p>
                <ul>
                    <li>V1: dedicated spindle module with PID control, tachometer feedback, and Modbus VFD support</li>
                    <li>V2: simple switch module instance for basic on/off or PWM control (no PID or feedback)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.type"></setting></td>
            <td><setting no-version v2="switch.spindle.output_type"></setting></td>
            <td class="description-cell">
                <p>Spindle control mode.</p>
                <p>V1 supports three types:</p>
                <ul>
                    <li><strong>pwm</strong> — closed-loop PID control with tachometer feedback for precise RPM</li>
                    <li><strong>analog</strong> — open-loop PWM output for VFDs/ESCs with 0-10V or PWM inputs</li>
                    <li><strong>modbus</strong> — RS485 communication for Modbus VFDs like Huanyang</li>
                </ul>
                <p>V2 only supports:</p>
                <ul>
                    <li><strong>digital</strong> — on/off relay</li>
                    <li><strong>pwm</strong> — variable speed, open-loop only</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_pin"></setting></td>
            <td><setting no-version v2="switch.spindle.output_pin"></setting></td>
            <td class="description-cell">
                <p>PWM output pin for spindle control. Must be hardware PWM-capable on Smoothieboard: <pin>2.0</pin>-<pin>2.5</pin>, <pin>1.18</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>1.23</pin>, <pin>1.24</pin>, <pin>1.26</pin>, <pin>3.25</pin>, <pin>3.26</pin>.</p>
                <p>Controls spindle speed either directly (for PWM-capable spindles) or through a VFD's analog input.</p>
                <p>Pin can be inverted with the ! suffix (e.g., 2.4!).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>PWM frequency for spindle control.</p>
                <ul>
                    <li>V1: period in microseconds (default 1000µs = 1kHz; frequency = 1,000,000 / period)</li>
                    <li>V2: frequency in Hz, via pwm1.frequency or pwm2.frequency settings</li>
                </ul>
                <p>Most VFDs and spindle controllers work with 1-50 kHz — check your VFD documentation for the required frequency.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_pwm"></setting></td>
            <td><setting no-version v2="switch.spindle.max_pwm"></setting></td>
            <td class="description-cell">
                <p>Maximum PWM duty cycle (0.0-1.0). Acts as both a safety limit and a calibration factor.</p>
                <p>Some spindle controllers (like MC2100) require less than 100% duty cycle for maximum speed — MC2100 uses 0.85.</p>
                <p>Setting below 1.0 limits maximum spindle speed even when G-code requests full power, protecting the motor from overcurrent.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.spindle.ignore_on_halt"></setting></td>
            <td class="description-cell">
                <p>Controls spindle behavior during an emergency stop.</p>
                <ul>
                    <li><strong>false</strong> (recommended): spindle stops immediately on any halt condition (emergency stop, limit switch trigger), for safety</li>
                    <li><strong>true</strong>: spindle continues running during halts</li>
                </ul>
                <p>This is a safety-critical setting — use with extreme caution.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.feedback_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Tachometer input pin for closed-loop RPM control (V1 PWM mode only). Must be an interrupt-capable pin on Port 0 or Port 2 (pin number must be 2.x or 0.x).</p>
                <p>Receives pulses from a hall-effect sensor, optical encoder, or other tachometer, and is used with the PID controller for precise RPM maintenance.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pulses_per_rev"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Number of tachometer pulses per spindle revolution (V1 PWM mode only). Used to calculate actual RPM from tachometer feedback.</p>
                <ul>
                    <li>Hall-effect sensors: typically 1 pulse per revolution</li>
                    <li>Optical encoders: may provide many pulses per revolution</li>
                </ul>
                <p>Essential for accurate RPM calculation in closed-loop mode. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.default_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Default RPM when M3 is issued without an S parameter (V1 PWM mode only) — if G-code contains "M3" without specifying speed, this RPM is used.</p>
                <p>Default: 5000 RPM. Only applies to the PWM spindle type with feedback control. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_P"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>PID proportional term for closed-loop spindle control (V1 PWM mode only). Controls how aggressively the controller responds to RPM error.</p>
                <p>Higher values give faster response but may cause oscillation; lower values give smoother operation but slower response. Requires tuning for the specific spindle.</p>
                <ul>
                    <li>Unit: 1/RPM</li>
                    <li>Default: 0.0001</li>
                </ul>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_I"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>PID integral term for closed-loop spindle control (V1 PWM mode only). Eliminates steady-state error by accumulating error over time.</p>
                <p>Higher values eliminate offset faster but may cause overshoot; set too high and the system becomes unstable. Requires tuning for the specific spindle.</p>
                <ul>
                    <li>Unit: 1/(RPM × seconds)</li>
                    <li>Default: 0.0001</li>
                </ul>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_D"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>PID derivative term for closed-loop spindle control (V1 PWM mode only). Responds to the rate of change of error, providing damping to reduce overshoot and oscillation.</p>
                <p>Higher values give more damping but may slow response and amplify noise. Often set lower than the P and I terms.</p>
                <ul>
                    <li>Unit: 1/(RPM/seconds)</li>
                    <li>Default: 0.0001</li>
                </ul>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_smoothing"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Low-pass filter time constant in seconds for tachometer smoothing (V1 PWM mode only). Filters out noise and transient fluctuations in RPM measurement.</p>
                <p>Higher values give more smoothing but slower response to actual speed changes; lower values give faster response but may amplify tachometer noise.</p>
                <p>Default: 0.1 seconds. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.min_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Minimum RPM when the spindle is on (V1 analog mode only). When the spindle is enabled, speed cannot go below this value — it prevents stalling and ensures a minimum cutting speed.</p>
                <p>If G-code requests a speed below min_rpm (but greater than 0), this minimum is used instead. <mcode>M5</mcode> or S0 still turns the spindle completely off. VFDs typically have minimum frequency requirements.</p>
                <p>Default: 100 RPM. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Maximum RPM at 100% PWM (V1 analog mode only). Calibrates the PWM output to the spindle's maximum speed.</p>
                <p>For example, if your VFD is configured for 24000 RPM maximum and you request 12000 RPM (S12000), the system outputs 50% PWM. Essential for accurate speed control with VFDs and ESCs.</p>
                <p>Default: 5000 RPM. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.switch_on_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Optional digital output pin to enable a VFD/power supply (V1 analog mode only). Typically connected to the VFD's RUN/ENABLE input via an optocoupler.</p>
                <p>Goes high when the spindle is commanded on (<mcode>M3</mcode>), low when commanded off (<mcode>M5</mcode>) — providing a hardware enable signal separate from the PWM speed control.</p>
                <p>Not available in V2 (use a separate switch instance instead).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.vfd_type"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>VFD manufacturer/model for Modbus control (V1 modbus mode only). Currently only supports "huanyang" VFDs, and determines the Modbus protocol and register mapping used for RS485 communication.</p>
                <p>Huanyang VFDs must be configured for RS485 control before use:</p>
                <ul>
                    <li>PD001=2 (run command source: communication port)</li>
                    <li>PD002=2 (frequency source: communication port)</li>
                    <li>PD163=1 (address: 1)</li>
                    <li>PD164=1 (baud: 9600)</li>
                    <li>PD165=3 (data method: 8N1 RTU)</li>
                </ul>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.rx_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>RS485 receive pin for Modbus communication (V1 modbus mode only). Used with the TX and DIR pins to communicate with Modbus VFDs.</p>
                <p>Requires an RS485 transceiver chip (MAX485 or similar) between Smoothieboard and VFD. This pin receives data from the VFD.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.tx_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>RS485 transmit pin for Modbus communication (V1 modbus mode only). Used with the RX and DIR pins to communicate with Modbus VFDs.</p>
                <p>Requires an RS485 transceiver chip. This pin sends data to the VFD.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.dir_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>RS485 direction control pin (V1 modbus mode only). RS485 is half-duplex, so a single pair of wires is used for both sending and receiving.</p>
                <p>This pin switches the RS485 transceiver between transmit and receive modes — typically connected to the DE/RE pins on a MAX485 chip.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_on_command"></setting></td>
            <td class="description-cell">
                <p>G-code command to turn the spindle on (V2 only, via the switch module). Typically M3 for spindle clockwise, but can be configured to any G-code or M-code.</p>
                <p>Not needed in V1 (M3 is hardcoded).</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_off_command"></setting></td>
            <td class="description-cell">
                <p>G-code command to turn the spindle off (V2 only, via the switch module). Typically M5 for spindle stop, but can be configured to any G-code or M-code.</p>
                <p>Not needed in V1 (M5 is hardcoded).</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
