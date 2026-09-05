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
            <td colspan="3" class="section-header"><strong>Global Conveyor Settings</strong></td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.check_driver_errors"></setting></td>
            <td class="description-cell">
                <p>Enables periodic checking of TMC driver error status bits.</p>
                <ul>
                    <li>Overtemperature warning</li>
                    <li>Overtemperature shutdown</li>
                    <li>Short circuit detection</li>
                    <li>Open load detection</li>
                    <li>Stall detection</li>
                </ul>
                <p>When enabled, the system continuously monitors driver health and can take preventive action before catastrophic failures occur. This is particularly important for TMC2590 and TMC2660 drivers, which provide extensive diagnostics.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">
                <p>If set to true, any TMC driver error immediately triggers the system to enter ON_HALT state (emergency stop), stopping all motion and disabling motors to prevent damage.</p>
                <p>When false, errors are logged but the system continues operation.</p>
                <p>Recommended to enable this for safety, especially during initial setup and testing, to prevent damage from wiring issues or mechanical problems.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.motors_enable_pin"></setting></td>
            <td class="description-cell">
                <p>Global enable pin that controls power or enable signal for all motor drivers simultaneously.</p>
                <p>On the Prime board with TMC drivers, this pin controls VCC_IO power to all driver chips, allowing a single pin to enable/disable all motors at once.</p>
                <p>Useful for emergency stops, power saving when idle, and ensuring all motors are disabled during initialization. Set to 'nc' (not connected) if not using a global enable pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="conveyor.queue_delay_time_ms"></setting></td>
            <td class="description-cell">
                <p>Time delay in milliseconds before the conveyor starts processing queued blocks after the first block enters an empty queue.</p>
                <p>This delay allows the queue to accumulate multiple blocks, enabling better lookahead planning and smoother motion by letting the planner optimize acceleration and deceleration across multiple moves.</p>
                <p>Typical values range from 10-100ms. Higher values improve motion smoothness but increase response latency.</p>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>X Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>X axis: acceleration and deceleration rate for this specific actuator, in mm/s².</p>
                <p>When set to a positive value, this overrides the global motion control acceleration setting for moves involving the X axis — useful for fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements.</p>
                <p>Leave unset or set to 0 to use the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.dir_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward.</p>
                <p>Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!<pin>2.1</pin>').</p>
                <p>This is hardware-specific and depends on your driver and motor wiring configuration.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.driver"></setting></td>
            <td class="description-cell">
                <p>X axis: specifies the stepper driver chip type for this actuator.</p>
                <p>Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords, e.g.:</p>
                <ul>
                    <li>DRV8825</li>
                    <li>A4988</li>
                    <li>TMC2130</li>
                </ul>
                <p>The driver type determines available features like microstepping, current control, and diagnostic capabilities.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.en_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: optional enable pin for the stepper motor driver.</p>
                <p>On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected), because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power.</p>
                <p>For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use the '!' prefix to invert logic if needed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.x.max_rate"></setting></td>
            <td class="description-cell">
                <p>X axis: maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set this based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations.</p>
                <p>Typical values range from 6000-30000 mm/min depending on machine type and quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.microsteps"></setting></td>
            <td class="description-cell">
                <p>Microstepping subdivision setting for the X axis's stepper driver — divides each full motor step into smaller sub-steps for smoother motion and reduced noise.</p>
                <ul>
                    <li>Common values: 16, 32, 64, 128, or 256</li>
                </ul>
                <p>Higher microstepping gives smoother motion but requires more processing power and may reduce maximum speed.</p>
                <p>For TMC drivers this is configured via SPI; for basic drivers it must match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.reversed"></setting></td>
            <td class="description-cell">
                <p>X axis: software-based reversal of motor direction, without modifying hardware pin definitions — a cleaner, more readable alternative to adding '!' to the dir_pin setting.</p>
                <p>Set to 'true' to reverse the motor direction.</p>
                <p>Particularly useful when you need to keep consistent pin definitions but must account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.slaved_to"></setting></td>
            <td class="description-cell">
                <p>X axis: configures this actuator to move in sync with another axis, for dual-motor configurations.</p>
                <p>Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements — useful for gantry systems that need two motors on the same axis.</p>
                <p>Set to the master axis letter (e.g., 'X' to slave this motor to the X axis primary motor).</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.step_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is controlled by the global microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin' (e.g., '2.0' for port 2, pin 0).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.x.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>X axis: number of motor steps required to move one millimeter on the X axis — the most critical calibration setting, since it defines the relationship between commanded distances and actual physical movement.</p>
                <ul>
                    <li>Belt-driven systems: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth)</li>
                    <li>Screw-driven systems: (motor steps per revolution × microstepping) / (leadscrew pitch)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>Y Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.y.acceleration"></setting></td>
            <td class="description-cell">
                <p>Y axis: acceleration and deceleration rate for this specific actuator, in mm/s².</p>
                <p>When set to a positive value, this overrides the global motion control acceleration setting for moves involving the Y axis — useful for fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements.</p>
                <p>Leave unset or set to 0 to use the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.dir_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward.</p>
                <p>Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!<pin>2.3</pin>').</p>
                <p>This is hardware-specific and depends on your driver and motor wiring configuration.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.driver"></setting></td>
            <td class="description-cell">
                <p>Y axis: specifies the stepper driver chip type for this actuator.</p>
                <p>Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords, e.g.:</p>
                <ul>
                    <li>DRV8825</li>
                    <li>A4988</li>
                    <li>TMC2130</li>
                </ul>
                <p>The driver type determines available features like microstepping, current control, and diagnostic capabilities.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.en_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: optional enable pin for the stepper motor driver.</p>
                <p>On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected), because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power.</p>
                <p>For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use the '!' prefix to invert logic if needed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.y.max_rate"></setting></td>
            <td class="description-cell">
                <p>Y axis: maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set this based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations.</p>
                <p>Typical values range from 6000-30000 mm/min depending on machine type and quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.microsteps"></setting></td>
            <td class="description-cell">
                <p>Microstepping subdivision setting for the Y axis's stepper driver — divides each full motor step into smaller sub-steps for smoother motion and reduced noise.</p>
                <ul>
                    <li>Common values: 16, 32, 64, 128, or 256</li>
                </ul>
                <p>Higher microstepping gives smoother motion but requires more processing power and may reduce maximum speed.</p>
                <p>For TMC drivers this is configured via SPI; for basic drivers it must match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.reversed"></setting></td>
            <td class="description-cell">
                <p>Y axis: software-based reversal of motor direction, without modifying hardware pin definitions — a cleaner, more readable alternative to adding '!' to the dir_pin setting.</p>
                <p>Set to 'true' to reverse the motor direction.</p>
                <p>Particularly useful when you need to keep consistent pin definitions but must account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.slaved_to"></setting></td>
            <td class="description-cell">
                <p>Y axis: configures this actuator to move in sync with another axis, for dual-motor configurations.</p>
                <p>Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements — useful for gantry systems that need two motors on the same axis.</p>
                <p>Set to the master axis letter (e.g., 'Y' to slave this motor to the Y axis primary motor).</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.step_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is controlled by the global microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin' (e.g., '2.2' for port 2, pin 2).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.y.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>Y axis: number of motor steps required to move one millimeter on the Y axis — the most critical calibration setting, since it defines the relationship between commanded distances and actual physical movement.</p>
                <ul>
                    <li>Belt-driven systems: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth)</li>
                    <li>Screw-driven systems: (motor steps per revolution × microstepping) / (leadscrew pitch)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>Z Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Z axis: acceleration and deceleration rate for this specific actuator, in mm/s².</p>
                <p>When set to a positive value, this overrides the global motion control acceleration setting for moves involving the Z axis — useful for fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements.</p>
                <p>Leave unset or set to 0 to use the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.dir_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward.</p>
                <p>Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!<pin>2.5</pin>').</p>
                <p>This is hardware-specific and depends on your driver and motor wiring configuration.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.driver"></setting></td>
            <td class="description-cell">
                <p>Z axis: specifies the stepper driver chip type for this actuator.</p>
                <p>Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords, e.g.:</p>
                <ul>
                    <li>DRV8825</li>
                    <li>A4988</li>
                    <li>TMC2130</li>
                </ul>
                <p>The driver type determines available features like microstepping, current control, and diagnostic capabilities.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.en_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: optional enable pin for the stepper motor driver.</p>
                <p>On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected), because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power.</p>
                <p>For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use the '!' prefix to invert logic if needed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.z.max_rate"></setting></td>
            <td class="description-cell">
                <p>Z axis: maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set this based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations.</p>
                <p>Typical values range from 6000-30000 mm/min depending on machine type and quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.microsteps"></setting></td>
            <td class="description-cell">
                <p>Microstepping subdivision setting for the Z axis's stepper driver — divides each full motor step into smaller sub-steps for smoother motion and reduced noise.</p>
                <ul>
                    <li>Common values: 16, 32, 64, 128, or 256</li>
                </ul>
                <p>Higher microstepping gives smoother motion but requires more processing power and may reduce maximum speed.</p>
                <p>For TMC drivers this is configured via SPI; for basic drivers it must match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.reversed"></setting></td>
            <td class="description-cell">
                <p>Z axis: software-based reversal of motor direction, without modifying hardware pin definitions — a cleaner, more readable alternative to adding '!' to the dir_pin setting.</p>
                <p>Set to 'true' to reverse the motor direction.</p>
                <p>Particularly useful when you need to keep consistent pin definitions but must account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.slaved_to"></setting></td>
            <td class="description-cell">
                <p>Z axis: configures this actuator to move in sync with another axis, for dual-motor configurations.</p>
                <p>Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements — useful for gantry systems that need two motors on the same axis.</p>
                <p>Set to the master axis letter (e.g., 'Z' to slave this motor to the Z axis primary motor).</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.step_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is controlled by the global microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin' (e.g., '2.4' for port 2, pin 4).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.z.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>Z axis: number of motor steps required to move one millimeter on the Z axis — the most critical calibration setting, since it defines the relationship between commanded distances and actual physical movement.</p>
                <ul>
                    <li>Belt-driven systems: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth)</li>
                    <li>Screw-driven systems: (motor steps per revolution × microstepping) / (leadscrew pitch)</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
