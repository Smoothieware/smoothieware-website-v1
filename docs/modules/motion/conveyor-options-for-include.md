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
            <td class="description-cell">Enables periodic checking of TMC driver error status bits including overtemperature warnings, overtemperature shutdown, short circuit detection, open load detection, and stall detection. When enabled, the system continuously monitors driver health and can take preventive action before catastrophic failures occur. This is particularly important for TMC2590 and TMC2660 drivers which provide extensive diagnostics.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">If set to true, any TMC driver error immediately triggers the system to enter ON_HALT state (emergency stop), stopping all motion and disabling motors to prevent damage. When false, errors are logged but the system continues operation. This should typically be enabled for safety, especially during initial setup and testing, to prevent damage from wiring issues or mechanical problems.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.motors_enable_pin"></setting></td>
            <td class="description-cell">Global enable pin that controls power or enable signal for all motor drivers simultaneously. On the Prime board with TMC drivers, this pin controls VCC_IO power to all driver chips, allowing a single pin to enable/disable all motors at once. This is useful for emergency stops, power saving when idle, and ensuring all motors are disabled during initialization. Set to 'nc' (not connected) if not using a global enable pin.</td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="conveyor.queue_delay_time_ms"></setting></td>
            <td class="description-cell">Time delay in milliseconds before the conveyor starts processing queued blocks after the first block enters an empty queue. This delay allows the queue to accumulate multiple blocks, enabling better lookahead planning and smoother motion by allowing the planner to optimize acceleration and deceleration across multiple moves. Typical values range from 10-100ms. Higher values improve motion smoothness but increase response latency.</td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>X Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.x.acceleration"></setting></td>
            <td class="description-cell">X axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control acceleration setting for moves involving the X axis. This allows fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements. Leave unset or set to 0 to use the global acceleration value.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.dir_pin"></setting></td>
            <td class="description-cell">X axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward. Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!2.1'). This is hardware-specific and depends on your driver and motor wiring configuration.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.driver"></setting></td>
            <td class="description-cell">X axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords like 'DRV8825', 'A4988', 'TMC2130', etc. The driver type determines available features like microstepping, current control, and diagnostic capabilities.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.en_pin"></setting></td>
            <td class="description-cell">X axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected) because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power. For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use '!' prefix to invert logic if needed.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.x.max_rate"></setting></td>
            <td class="description-cell">X axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration. This should be set based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations. Typical values range from 6000-30000 mm/min depending on machine type and quality.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the X axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother motion and reduced noise. Common values are 16, 32, 64, 128, or 256. Higher microstepping provides smoother motion but requires more processing power and may reduce maximum speed. For TMC drivers this is configured via SPI; for basic drivers it must match hardware DIP switch settings.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.reversed"></setting></td>
            <td class="description-cell">X axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to adding '!' to the dir_pin setting. Set to 'true' to reverse the motor direction. This is particularly useful when you need to maintain consistent pin definitions but need to account for mechanical mounting differences or motor wiring variations.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.slaved_to"></setting></td>
            <td class="description-cell">X axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements, useful for gantry systems requiring two motors on the same axis. Set to the master axis letter (e.g., 'X' to slave this motor to the X axis primary motor).</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.step_pin"></setting></td>
            <td class="description-cell">X axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep. The step pulse width is controlled by the global microseconds_per_step_pulse setting. Pin format is 'port.pin' (e.g., '2.0' for port 2, pin 0).</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.x.steps_per_mm"></setting></td>
            <td class="description-cell">X axis: Number of motor steps required to move one millimeter on the X axis. This is the most critical calibration setting as it defines the relationship between commanded distances and actual physical movement. Calculated as: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth) for belt-driven systems, or (motor steps per revolution × microstepping) / (leadscrew pitch) for screw-driven systems.</td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>Y Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.y.acceleration"></setting></td>
            <td class="description-cell">Y axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control acceleration setting for moves involving the Y axis. This allows fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements. Leave unset or set to 0 to use the global acceleration value.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.dir_pin"></setting></td>
            <td class="description-cell">Y axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward. Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!2.3'). This is hardware-specific and depends on your driver and motor wiring configuration.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.driver"></setting></td>
            <td class="description-cell">Y axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords like 'DRV8825', 'A4988', 'TMC2130', etc. The driver type determines available features like microstepping, current control, and diagnostic capabilities.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.en_pin"></setting></td>
            <td class="description-cell">Y axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected) because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power. For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use '!' prefix to invert logic if needed.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.y.max_rate"></setting></td>
            <td class="description-cell">Y axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration. This should be set based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations. Typical values range from 6000-30000 mm/min depending on machine type and quality.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the Y axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother motion and reduced noise. Common values are 16, 32, 64, 128, or 256. Higher microstepping provides smoother motion but requires more processing power and may reduce maximum speed. For TMC drivers this is configured via SPI; for basic drivers it must match hardware DIP switch settings.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.reversed"></setting></td>
            <td class="description-cell">Y axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to adding '!' to the dir_pin setting. Set to 'true' to reverse the motor direction. This is particularly useful when you need to maintain consistent pin definitions but need to account for mechanical mounting differences or motor wiring variations.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.slaved_to"></setting></td>
            <td class="description-cell">Y axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements, useful for gantry systems requiring two motors on the same axis. Set to the master axis letter (e.g., 'Y' to slave this motor to the Y axis primary motor).</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.step_pin"></setting></td>
            <td class="description-cell">Y axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep. The step pulse width is controlled by the global microseconds_per_step_pulse setting. Pin format is 'port.pin' (e.g., '2.2' for port 2, pin 2).</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.y.steps_per_mm"></setting></td>
            <td class="description-cell">Y axis: Number of motor steps required to move one millimeter on the Y axis. This is the most critical calibration setting as it defines the relationship between commanded distances and actual physical movement. Calculated as: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth) for belt-driven systems, or (motor steps per revolution × microstepping) / (leadscrew pitch) for screw-driven systems.</td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>Z Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.z.acceleration"></setting></td>
            <td class="description-cell">Z axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control acceleration setting for moves involving the Z axis. This allows fine-tuning acceleration per axis to account for differences in mass, mechanical design, and performance requirements. Leave unset or set to 0 to use the global acceleration value.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.dir_pin"></setting></td>
            <td class="description-cell">Z axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or backward. Use the '!' prefix to invert the pin logic if your motor moves in the wrong direction (e.g., '!2.5'). This is hardware-specific and depends on your driver and motor wiring configuration.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.driver"></setting></td>
            <td class="description-cell">Z axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). External drivers are configured using driver type keywords like 'DRV8825', 'A4988', 'TMC2130', etc. The driver type determines available features like microstepping, current control, and diagnostic capabilities.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.en_pin"></setting></td>
            <td class="description-cell">Z axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to 'nc' (not connected) because these drivers are enabled via SPI and the global motors_enable_pin controls VCC_IO power. For external drivers like A4988 or DRV8825, this pin enables/disables the driver. Use '!' prefix to invert logic if needed.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.z.max_rate"></setting></td>
            <td class="description-cell">Z axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, and excessive vibration. This should be set based on your machine's mechanical capabilities, stepper motor specifications, and power supply limitations. Typical values range from 6000-30000 mm/min depending on machine type and quality.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the Z axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother motion and reduced noise. Common values are 16, 32, 64, 128, or 256. Higher microstepping provides smoother motion but requires more processing power and may reduce maximum speed. For TMC drivers this is configured via SPI; for basic drivers it must match hardware DIP switch settings.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.reversed"></setting></td>
            <td class="description-cell">Z axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to adding '!' to the dir_pin setting. Set to 'true' to reverse the motor direction. This is particularly useful when you need to maintain consistent pin definitions but need to account for mechanical mounting differences or motor wiring variations.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.slaved_to"></setting></td>
            <td class="description-cell">Z axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved to primary X/Y/Z axes. The slaved motor exactly mirrors the master motor's movements, useful for gantry systems requiring two motors on the same axis. Set to the master axis letter (e.g., 'Z' to slave this motor to the Z axis primary motor).</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.step_pin"></setting></td>
            <td class="description-cell">Z axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep. The step pulse width is controlled by the global microseconds_per_step_pulse setting. Pin format is 'port.pin' (e.g., '2.4' for port 2, pin 4).</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.z.steps_per_mm"></setting></td>
            <td class="description-cell">Z axis: Number of motor steps required to move one millimeter on the Z axis. This is the most critical calibration setting as it defines the relationship between commanded distances and actual physical movement. Calculated as: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth) for belt-driven systems, or (motor steps per revolution × microstepping) / (leadscrew pitch) for screw-driven systems.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
