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
                <p>This turns the spindle control module on. Set it to true and the module loads, giving you M3/M5 control over the spindle.</p>
                <p>V1 has a dedicated spindle module, with PID control, tachometer feedback, and Modbus VFD support built in. V2 uses a plain switch module instance instead, for basic on/off or PWM control, with no PID or feedback.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.type"></setting></td>
            <td><setting no-version v2="switch.spindle.output_type"></setting></td>
            <td class="description-cell">
                <p>This sets how the spindle is controlled.</p>
                <p>V1 gives you three options:</p>
                <ul>
                    <li><strong>pwm</strong>: closed-loop PID control with tachometer feedback, for precise RPM</li>
                    <li><strong>analog</strong>: open-loop PWM output for VFDs/ESCs with 0-10V or PWM inputs</li>
                    <li><strong>modbus</strong>: RS485 communication for Modbus VFDs like Huanyang</li>
                </ul>
                <p>V2 only gives you two:</p>
                <ul>
                    <li><strong>digital</strong>: on/off relay</li>
                    <li><strong>pwm</strong>: variable speed, open-loop only</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_pin"></setting></td>
            <td><setting no-version v2="switch.spindle.output_pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM output pin for spindle control. It has to be hardware PWM-capable on Smoothieboard: <pin>2.0</pin>-<pin>2.5</pin>, <pin>1.18</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>1.23</pin>, <pin>1.24</pin>, <pin>1.26</pin>, <pin>3.25</pin>, <pin>3.26</pin>.</p>
                <p>It controls spindle speed either directly, for PWM-capable spindles, or through a VFD's analog input.</p>
                <p>You can invert the pin with the ! suffix, e.g. 2.4!.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>This sets the PWM frequency for spindle control.</p>
                <p>In V1 it's a period in microseconds. Default is 1000µs, which is 1kHz (frequency = 1,000,000 / period). In V2 it's a frequency in Hz, set via the pwm1.frequency or pwm2.frequency settings.</p>
                <p>Most VFDs and spindle controllers work fine with 1-50 kHz. Check your VFD's documentation for the frequency it needs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_pwm"></setting></td>
            <td><setting no-version v2="switch.spindle.max_pwm"></setting></td>
            <td class="description-cell">
                <p>This is the maximum PWM duty cycle, from 0.0 to 1.0. It works as both a safety limit and a calibration factor.</p>
                <p>Some spindle controllers, like the MC2100, need less than 100% duty cycle to hit maximum speed. The MC2100 uses 0.85.</p>
                <p>Set it below 1.0 and you cap the spindle's top speed even when the G-code asks for full power, which protects the motor from overcurrent.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.spindle.ignore_on_halt"></setting></td>
            <td class="description-cell">
                <p>This controls what the spindle does during an emergency stop.</p>
                <ul>
                    <li><strong>false</strong> (recommended): the spindle stops immediately on any halt condition, like an emergency stop or a limit switch trigger. This is the safe choice.</li>
                    <li><strong>true</strong>: the spindle keeps running through halts.</li>
                </ul>
                <p>Be careful with this one. Only set it to true if you really know what you're doing.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.feedback_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the tachometer input pin for closed-loop RPM control, V1 PWM mode only. It has to be an interrupt-capable pin on Port 0 or Port 2 (the pin number must be 2.x or 0.x).</p>
                <p>It reads pulses from a hall-effect sensor, optical encoder, or other tachometer, and feeds them to the PID controller to hold RPM steady.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pulses_per_rev"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the number of tachometer pulses per spindle revolution, V1 PWM mode only. It's used to work out actual RPM from the tachometer feedback.</p>
                <p>Hall-effect sensors typically give you 1 pulse per revolution. Optical encoders can give you many more.</p>
                <p>Get this right, since it's what closed-loop mode uses to calculate RPM. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.default_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the RPM used when M3 is issued without an S parameter, V1 PWM mode only. So if your G-code just says "M3" without a speed, this is the RPM you get.</p>
                <p>Default is 5000 RPM. Only applies to the PWM spindle type with feedback control. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_P"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the PID proportional term for closed-loop spindle control, V1 PWM mode only. It sets how aggressively the controller reacts to RPM error.</p>
                <p>Higher values react faster but can cause oscillation. Lower values are smoother but slower to respond. You'll need to tune it for your specific spindle.</p>
                <p>Unit is 1/RPM. Default is 0.0001. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_I"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the PID integral term for closed-loop spindle control, V1 PWM mode only. It eliminates steady-state error by accumulating error over time.</p>
                <p>Higher values clear the offset faster but can cause overshoot. Set it too high and the system goes unstable. You'll need to tune it for your specific spindle.</p>
                <p>Unit is 1/(RPM × seconds). Default is 0.0001. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_D"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the PID derivative term for closed-loop spindle control, V1 PWM mode only. It responds to how fast the error is changing, which damps overshoot and oscillation.</p>
                <p>Higher values give more damping but can slow the response and amplify noise. It's usually set lower than the P and I terms.</p>
                <p>Unit is 1/(RPM/seconds). Default is 0.0001. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_smoothing"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the low-pass filter time constant, in seconds, for tachometer smoothing, V1 PWM mode only. It filters out noise and transient fluctuations in the RPM reading.</p>
                <p>Higher values smooth more but respond slower to real speed changes. Lower values respond faster but can pick up more tachometer noise.</p>
                <p>Default is 0.1 seconds. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.min_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the minimum RPM when the spindle is on, V1 analog mode only. Once the spindle is enabled, speed can't drop below this, which stops it from stalling and keeps a minimum cutting speed.</p>
                <p>If your G-code asks for a speed below min_rpm, but above 0, this minimum is used instead. <mcode>M5</mcode> or S0 still turns the spindle fully off. VFDs typically have their own minimum frequency requirements too.</p>
                <p>Default is 100 RPM. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the RPM at 100% PWM, V1 analog mode only. It calibrates the PWM output to your spindle's actual maximum speed.</p>
                <p>For example, if your VFD is configured for 24000 RPM maximum and you request 12000 RPM (S12000), the system outputs 50% PWM. Get this right and you get accurate speed control with VFDs and ESCs.</p>
                <p>Default is 5000 RPM. Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.switch_on_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is an optional digital output pin to enable a VFD or power supply, V1 analog mode only. It's typically wired to the VFD's RUN/ENABLE input through an optocoupler.</p>
                <p>It goes high when the spindle is commanded on (<mcode>M3</mcode>), and low when commanded off (<mcode>M5</mcode>), giving you a hardware enable signal separate from the PWM speed control.</p>
                <p>Not available in V2 (use a separate switch instance instead).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.vfd_type"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This sets the VFD manufacturer/model for Modbus control, V1 modbus mode only. Right now it only supports "huanyang" VFDs, and it determines the Modbus protocol and register mapping used over RS485.</p>
                <p>Huanyang VFDs need to be configured for RS485 control before you use them:</p>
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
                <p>This is the RS485 receive pin for Modbus communication, V1 modbus mode only. It works together with the TX and DIR pins to talk to Modbus VFDs.</p>
                <p>You'll need an RS485 transceiver chip, a MAX485 or similar, between the Smoothieboard and the VFD. This pin receives data from the VFD.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.tx_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the RS485 transmit pin for Modbus communication, V1 modbus mode only. It works together with the RX and DIR pins to talk to Modbus VFDs.</p>
                <p>You'll need an RS485 transceiver chip. This pin sends data to the VFD.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.dir_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This is the RS485 direction control pin, V1 modbus mode only. RS485 is half-duplex, so the same pair of wires handles both sending and receiving.</p>
                <p>This pin switches the RS485 transceiver between transmit and receive. It's typically wired to the DE/RE pins on a MAX485 chip.</p>
                <p>Not available in V2.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_on_command"></setting></td>
            <td class="description-cell">
                <p>This is the G-code command that turns the spindle on, V2 only, through the switch module. It's usually M3 for spindle clockwise, but you can set it to any G-code or M-code.</p>
                <p>You don't need this in V1, since M3 is hardcoded.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_off_command"></setting></td>
            <td class="description-cell">
                <p>This is the G-code command that turns the spindle off, V2 only, through the switch module. It's usually M5 for spindle stop, but you can set it to any G-code or M-code.</p>
                <p>You don't need this in V1, since M5 is hardcoded.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
