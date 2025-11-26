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
            <td class="description-cell">Enables the spindle control module. When true, the spindle module is loaded and available for G-code control (M3/M5 commands). V1 provides a dedicated spindle module with PID control, tachometer feedback, and Modbus VFD support. V2 uses a simple switch module instance for basic on/off or PWM control (no PID or feedback).</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.type"></setting></td>
            <td><setting no-version v2="switch.spindle.output_type"></setting></td>
            <td class="description-cell">Spindle control mode. V1 supports three types: <strong>pwm</strong> (closed-loop PID control with tachometer feedback for precise RPM), <strong>analog</strong> (open-loop PWM output for VFDs/ESCs with 0-10V or PWM inputs), or <strong>modbus</strong> (RS485 communication for Modbus VFDs like Huanyang). V2 only supports: <strong>digital</strong> (on/off relay) or <strong>pwm</strong> (variable speed, open-loop only).</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_pin"></setting></td>
            <td><setting no-version v2="switch.spindle.output_pin"></setting></td>
            <td class="description-cell">PWM output pin for spindle control. Must be hardware PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothieboard). Controls spindle speed either directly (for PWM-capable spindles) or through a VFD's analog input. Pin can be inverted with ! suffix (e.g., 2.4!).</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">PWM frequency for spindle control. V1 uses period in microseconds (default 1000µs = 1kHz, frequency = 1,000,000 / period). V2 uses frequency in Hz via pwm1.frequency or pwm2.frequency settings. Most VFDs and spindle controllers work with 1-50 kHz. Check your VFD documentation for required frequency.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_pwm"></setting></td>
            <td><setting no-version v2="switch.spindle.max_pwm"></setting></td>
            <td class="description-cell">Maximum PWM duty cycle (0.0-1.0). Acts as both a safety limit and calibration factor. Some spindle controllers (like MC2100) require less than 100% duty cycle for maximum speed (MC2100 uses 0.85). Setting below 1.0 limits maximum spindle speed even when G-code requests full power, protecting the motor from overcurrent.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.spindle.ignore_on_halt"></setting></td>
            <td class="description-cell">Controls spindle behavior during emergency stop. When <strong>false</strong> (recommended), spindle stops immediately on any halt condition (emergency stop, limit switch trigger) for safety. When <strong>true</strong>, spindle continues running during halts. This is a safety-critical setting - use with extreme caution.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.feedback_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Tachometer input pin for closed-loop RPM control (V1 PWM mode only). Must be an interrupt-capable pin on Port 0 or Port 2 (pin number must be 2.x or 0.x). Receives pulses from hall-effect sensor, optical encoder, or other tachometer. Used with PID controller for precise RPM maintenance. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.pulses_per_rev"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Number of tachometer pulses per spindle revolution (V1 PWM mode only). Used to calculate actual RPM from tachometer feedback. Hall-effect sensors typically provide 1 pulse per revolution, optical encoders may provide many pulses per revolution. Essential for accurate RPM calculation in closed-loop mode. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.default_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Default RPM when M3 is issued without S parameter (V1 PWM mode only). If G-code contains "M3" without specifying speed, this RPM will be used. Default 5000 RPM. Only applies to PWM spindle type with feedback control. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_P"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">PID proportional term for closed-loop spindle control (V1 PWM mode only). Controls how aggressively the controller responds to RPM error. Higher values provide faster response but may cause oscillation. Lower values provide smoother operation but slower response. Requires tuning for specific spindle. Unit is 1/RPM. Default 0.0001. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_I"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">PID integral term for closed-loop spindle control (V1 PWM mode only). Eliminates steady-state error by accumulating error over time. Higher values eliminate offset faster but may cause overshoot. Set too high and system becomes unstable. Requires tuning for specific spindle. Unit is 1/(RPM × seconds). Default 0.0001. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_D"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">PID derivative term for closed-loop spindle control (V1 PWM mode only). Responds to rate of change of error, providing damping to reduce overshoot and oscillation. Higher values provide more damping but may slow response and amplify noise. Often set lower than P and I terms. Unit is 1/(RPM/seconds). Default 0.0001. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.control_smoothing"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Low-pass filter time constant in seconds for tachometer smoothing (V1 PWM mode only). Filters out noise and transient fluctuations in RPM measurement. Higher values provide more smoothing but slower response to actual speed changes. Lower values provide faster response but may amplify tachometer noise. Default 0.1 seconds. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.min_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Minimum RPM when spindle is on (V1 analog mode only). When spindle is enabled, speed cannot go below this value. Prevents stalling and ensures minimum cutting speed. If G-code requests speed below min_rpm (but greater than 0), this minimum will be used instead. M5 or S0 still turns spindle completely off. VFDs typically have minimum frequency requirements. Default 100 RPM. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.max_rpm"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Maximum RPM at 100% PWM (V1 analog mode only). Calibrates PWM output to spindle's maximum speed. For example, if your VFD is configured for 24000 RPM maximum and you request 12000 RPM (S12000), the system will output 50% PWM. Essential for accurate speed control with VFDs and ESCs. Default 5000 RPM. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.switch_on_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Optional digital output pin to enable VFD/power supply (V1 analog mode only). Typically connected to VFD's RUN/ENABLE input via optocoupler. Goes high when spindle is commanded on (M3), low when commanded off (M5). Provides hardware enable signal separate from the PWM speed control. Not available in V2 (use separate switch instance instead).</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.vfd_type"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">VFD manufacturer/model for Modbus control (V1 modbus mode only). Currently only supports "huanyang" VFDs. Determines the Modbus protocol and register mapping used for RS485 communication. Huanyang VFDs must be configured for RS485 control before use: PD001=2 (run command source: communication port), PD002=2 (frequency source: communication port), PD163=1 (address: 1), PD164=1 (baud: 9600), PD165=3 (data method: 8N1 RTU). Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.rx_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">RS485 receive pin for Modbus communication (V1 modbus mode only). Used with TX and DIR pins to communicate with Modbus VFDs. Requires RS485 transceiver chip (MAX485 or similar) between Smoothieboard and VFD. This pin receives data from the VFD. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.tx_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">RS485 transmit pin for Modbus communication (V1 modbus mode only). Used with RX and DIR pins to communicate with Modbus VFDs. Requires RS485 transceiver chip. This pin sends data to the VFD. Not available in V2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spindle.dir_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">RS485 direction control pin (V1 modbus mode only). RS485 is half-duplex, so a single pair of wires is used for both sending and receiving. This pin switches the RS485 transceiver between transmit and receive modes. Typically connected to DE/RE pins on MAX485 chip. Not available in V2.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_on_command"></setting></td>
            <td class="description-cell">G-code command to turn spindle on (V2 only, via switch module). Typically M3 for spindle clockwise. Can be configured to any G-code or M-code. Not needed in V1 (M3 is hardcoded).</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.spindle.input_off_command"></setting></td>
            <td class="description-cell">G-code command to turn spindle off (V2 only, via switch module). Typically M5 for spindle stop. Can be configured to any G-code or M-code. Not needed in V1 (M5 is hardcoded).</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
