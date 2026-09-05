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
                <p>This turns on periodic checking of the TMC driver error status bits:</p>
                <ul>
                    <li>Overtemperature warning</li>
                    <li>Overtemperature shutdown</li>
                    <li>Short circuit detection</li>
                    <li>Open load detection</li>
                    <li>Stall detection</li>
                </ul>
                <p>With this on, the system keeps an eye on driver health and can act before something fails badly. It matters most for TMC2590 and TMC2660 drivers, since they give you a lot of diagnostics to work with.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">
                <p>Set this to true and any TMC driver error immediately puts the system into ON_HALT state, an emergency stop that stops all motion and disables the motors to prevent damage.</p>
                <p>Set it to false and errors just get logged while the system keeps running.</p>
                <p>We recommend enabling this for safety, especially while you're doing initial setup and testing, so wiring issues or mechanical problems don't cause damage.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.common.motors_enable_pin"></setting></td>
            <td class="description-cell">
                <p>This is the global enable pin. It controls power, or the enable signal, for all the motor drivers at once.</p>
                <p>On the Prime board with TMC drivers, this pin controls VCC_IO power to all the driver chips, so one pin can enable or disable every motor together.</p>
                <p>It's handy for emergency stops, saving power when idle, and making sure all motors stay disabled during initialization. Set it to 'nc' (not connected) if you're not using a global enable pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="conveyor.queue_delay_time_ms"></setting></td>
            <td class="description-cell">
                <p>This is the delay, in milliseconds, before the conveyor starts processing queued blocks once the first block lands in an empty queue.</p>
                <p>The delay gives the queue time to build up a few blocks, which lets the planner look ahead and smooth out acceleration and deceleration across multiple moves.</p>
                <p>Typical values run 10-100ms. Push it higher and motion gets smoother, but you add response latency.</p>
            </td>
        </tr>
        <tr>
            <td colspan="3" class="section-header"><strong>X Axis Configuration</strong></td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="conveyor.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>This sets the acceleration and deceleration rate for the X axis actuator, in mm/s².</p>
                <p>Set it above 0 and it overrides the global acceleration setting for X-axis moves. That's handy for tuning acceleration per axis, since mass, mechanical design, and performance needs differ between axes.</p>
                <p>Leave it unset, or set it to 0, to just use the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sets rotation direction for the X axis stepper driver. Whether the logic level is high or low decides which way the motor turns.</p>
                <p>If your motor turns the wrong way, add a '!' prefix to invert the pin logic, e.g. '!<pin>2.1</pin>'.</p>
                <p>This is hardware-specific, and depends on your driver and how the motor's wired.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.driver"></setting></td>
            <td class="description-cell">
                <p>This tells Smoothie which stepper driver chip you're using for the X axis actuator.</p>
                <p>The Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). For external drivers, use the driver type keyword, for example DRV8825, A4988, or TMC2130.</p>
                <p>The driver type determines what features are available, like microstepping, current control, and diagnostics.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is the optional enable pin for the X axis stepper driver.</p>
                <p>On the Prime board with TMC2590/TMC2660 drivers, this is usually set to 'nc', since those drivers are enabled over SPI and the global motors_enable_pin already controls VCC_IO power.</p>
                <p>For external drivers like the A4988 or DRV8825, this pin enables or disables the driver. Use the '!' prefix to invert the logic if you need to.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.x.max_rate"></setting></td>
            <td class="description-cell">
                <p>This is the maximum speed the X axis actuator can reach, in mm/min. The motion planner enforces this limit to avoid missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set it based on what your machine, stepper motors, and power supply can actually handle.</p>
                <p>Typical values run 6000-30000 mm/min, depending on machine type and build quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.microsteps"></setting></td>
            <td class="description-cell">
                <p>This is the microstepping setting for the X axis stepper driver. It divides each full motor step into smaller sub-steps, for smoother motion and less noise.</p>
                <p>Common values are 16, 32, 64, 128, or 256.</p>
                <p>Higher microstepping gives you smoother motion, but it needs more processing power and can cut into your maximum speed. For TMC drivers this is set over SPI. For basic drivers, it has to match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.reversed"></setting></td>
            <td class="description-cell">
                <p>This reverses the X axis motor direction in software, without touching the hardware pin definitions. It's a cleaner alternative to adding '!' to the dir_pin setting.</p>
                <p>Set it to 'true' to reverse the motor direction.</p>
                <p>Handy when you want to keep your pin definitions consistent but still need to account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This makes the X axis actuator move in sync with another axis, for dual-motor setups.</p>
                <p>Only the A/B/C axes (delta/epsilon/zeta) can be slaved to the primary X/Y/Z axes. The slaved motor mirrors the master motor's movements exactly, which is what you want for gantry systems running two motors on the same axis.</p>
                <p>Set it to the master axis letter, e.g. 'X' to slave this motor to the X axis's primary motor.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.x.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sends step pulses to the X axis stepper driver. Each rising edge tells the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is set globally, by the microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin', e.g. '2.0' for port 2, pin 0.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.x.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is the number of motor steps it takes to move one millimeter on the X axis. It's the most important calibration setting you'll set, since it's what ties commanded distances to actual physical movement.</p>
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
                <p>This sets the acceleration and deceleration rate for the Y axis actuator, in mm/s².</p>
                <p>Set it above 0 and it overrides the global acceleration setting for Y-axis moves, which lets you tune acceleration per axis to account for differences in mass, mechanical design, and performance needs.</p>
                <p>Leave it unset, or set it to 0, to fall back to the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sets rotation direction for the Y axis stepper driver. The logic level, high or low, decides which way the motor turns.</p>
                <p>If your motor turns the wrong way, invert the pin logic with a '!' prefix, e.g. '!<pin>2.3</pin>'.</p>
                <p>This depends on your specific driver and motor wiring.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.driver"></setting></td>
            <td class="description-cell">
                <p>This tells Smoothie which stepper driver chip you're using for the Y axis actuator.</p>
                <p>The Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). For external drivers, use the driver type keyword, for example DRV8825, A4988, or TMC2130.</p>
                <p>The driver type determines what features are available, like microstepping, current control, and diagnostics.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is the optional enable pin for the Y axis stepper driver.</p>
                <p>On the Prime board with TMC2590/TMC2660 drivers, this is usually set to 'nc', since those drivers are enabled over SPI and the global motors_enable_pin already controls VCC_IO power.</p>
                <p>For external drivers like the A4988 or DRV8825, this pin enables or disables the driver. Use the '!' prefix to invert the logic if you need to.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.y.max_rate"></setting></td>
            <td class="description-cell">
                <p>This is the maximum speed the Y axis actuator can reach, in mm/min. The motion planner enforces this limit to avoid missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set it based on what your machine, stepper motors, and power supply can actually handle.</p>
                <p>Typical values run 6000-30000 mm/min, depending on machine type and build quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.microsteps"></setting></td>
            <td class="description-cell">
                <p>This is the microstepping setting for the Y axis stepper driver. It divides each full motor step into smaller sub-steps, for smoother motion and less noise.</p>
                <p>Common values are 16, 32, 64, 128, or 256.</p>
                <p>Higher microstepping gives you smoother motion, but it needs more processing power and can cut into your maximum speed. For TMC drivers this is set over SPI. For basic drivers, it has to match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.reversed"></setting></td>
            <td class="description-cell">
                <p>This reverses the Y axis motor direction in software, without touching the hardware pin definitions. It's a cleaner alternative to adding '!' to the dir_pin setting.</p>
                <p>Set it to 'true' to reverse the motor direction.</p>
                <p>Handy when you want to keep your pin definitions consistent but still need to account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This makes the Y axis actuator move in sync with another axis, for dual-motor setups.</p>
                <p>Only the A/B/C axes (delta/epsilon/zeta) can be slaved to the primary X/Y/Z axes. The slaved motor mirrors the master motor's movements exactly, which is what you want for gantry systems running two motors on the same axis.</p>
                <p>Set it to the master axis letter, e.g. 'Y' to slave this motor to the Y axis's primary motor.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.y.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sends step pulses to the Y axis stepper driver. Each rising edge tells the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is set globally, by the microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin', e.g. '2.2' for port 2, pin 2.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.y.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is the number of motor steps it takes to move one millimeter on the Y axis. It's the most important calibration setting you'll set, since it's what ties commanded distances to actual physical movement.</p>
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
                <p>This sets the acceleration and deceleration rate for the Z axis actuator, in mm/s².</p>
                <p>Set it above 0 and it overrides the global acceleration setting for Z-axis moves. Useful for tuning acceleration per axis, since mass, mechanical design, and performance needs vary from one axis to the next.</p>
                <p>Leave it unset, or set it to 0, to use the global acceleration value.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sets rotation direction for the Z axis stepper driver. High or low logic level decides which way the motor turns.</p>
                <p>If your motor turns the wrong way, add a '!' prefix to invert it, e.g. '!<pin>2.5</pin>'.</p>
                <p>This is hardware-specific, so it depends on your driver and wiring.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.driver"></setting></td>
            <td class="description-cell">
                <p>This tells Smoothie which stepper driver chip you're using for the Z axis actuator.</p>
                <p>The Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta). For external drivers, use the driver type keyword, for example DRV8825, A4988, or TMC2130.</p>
                <p>The driver type determines what features are available, like microstepping, current control, and diagnostics.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is the optional enable pin for the Z axis stepper driver.</p>
                <p>On the Prime board with TMC2590/TMC2660 drivers, this is usually set to 'nc', since those drivers are enabled over SPI and the global motors_enable_pin already controls VCC_IO power.</p>
                <p>For external drivers like the A4988 or DRV8825, this pin enables or disables the driver. Use the '!' prefix to invert the logic if you need to.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="conveyor.z.max_rate"></setting></td>
            <td class="description-cell">
                <p>This is the maximum speed the Z axis actuator can reach, in mm/min. The motion planner enforces this limit to avoid missed steps, mechanical damage, and excessive vibration.</p>
                <p>Set it based on what your machine, stepper motors, and power supply can actually handle.</p>
                <p>Typical values run 6000-30000 mm/min, depending on machine type and build quality.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.microsteps"></setting></td>
            <td class="description-cell">
                <p>This is the microstepping setting for the Z axis stepper driver. It divides each full motor step into smaller sub-steps, for smoother motion and less noise.</p>
                <p>Common values are 16, 32, 64, 128, or 256.</p>
                <p>Higher microstepping gives you smoother motion, but it needs more processing power and can cut into your maximum speed. For TMC drivers this is set over SPI. For basic drivers, it has to match the hardware DIP switch settings.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.reversed"></setting></td>
            <td class="description-cell">
                <p>This reverses the Z axis motor direction in software, without touching the hardware pin definitions. It's a cleaner alternative to adding '!' to the dir_pin setting.</p>
                <p>Set it to 'true' to reverse the motor direction.</p>
                <p>Handy when you want to keep your pin definitions consistent but still need to account for mechanical mounting differences or motor wiring variations.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This makes the Z axis actuator move in sync with another axis, for dual-motor setups.</p>
                <p>Only the A/B/C axes (delta/epsilon/zeta) can be slaved to the primary X/Y/Z axes. The slaved motor mirrors the master motor's movements exactly, which is what you want for gantry systems running two motors on the same axis.</p>
                <p>Set it to the master axis letter, e.g. 'Z' to slave this motor to the Z axis's primary motor.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="conveyor.z.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the MCU pin that sends step pulses to the Z axis stepper driver. Each rising edge tells the driver to advance the motor by one microstep.</p>
                <p>The step pulse width is set globally, by the microseconds_per_step_pulse setting.</p>
                <p>Pin format is 'port.pin', e.g. '2.4' for port 2, pin 4.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="conveyor.z.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is the number of motor steps it takes to move one millimeter on the Z axis. It's the most important calibration setting you'll set, since it's what ties commanded distances to actual physical movement.</p>
                <ul>
                    <li>Belt-driven systems: (motor steps per revolution × microstepping × gear ratio) / (belt pitch × pulley teeth)</li>
                    <li>Screw-driven systems: (motor steps per revolution × microstepping) / (leadscrew pitch)</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
