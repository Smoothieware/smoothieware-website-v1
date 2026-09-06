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
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.check_driver_errors"></setting></td>
            <td class="description-cell">
                <p>Enables real-time checking of TMC driver error status bits, including overtemperature, short circuit, and open load conditions.</p>
                <p>When enabled, the firmware periodically reads driver status registers and reports any detected errors to the console.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">
                <p>Determines whether the system immediately enters HALT state when a TMC driver reports an error condition.</p>
                <p>When enabled, any driver alarm — overtemperature, short circuit, or open load — causes the system to stop all operations immediately.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.motors_enable_pin"></setting></td>
            <td class="description-cell">
                <p>Defines a global enable pin that controls power to all stepper motors simultaneously — a master enable/disable switch for all motors.</p>
                <p>On Prime board with TMC drivers, this is typically set to <pin>PH13!</pin>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>X axis: per-axis acceleration override, letting this actuator use a different acceleration value independent of the global default.</p>
                <p>When set to <raw>-1</raw> (default), the motor uses the global <setting v1="acceleration" v2="motion control.default_acceleration"></setting> value instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.x.dir_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: GPIO pin used to control the direction signal to the stepper motor driver, determining whether the motor rotates clockwise or counter-clockwise.</p>
                <p>Direction can be inverted by appending <raw>!</raw> to the pin specification, or by using the <setting v2="actuator.x.reversed"></setting> setting instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.x.driver"></setting></td>
            <td class="description-cell">
                <p>X axis: specifies the stepper driver chip type used for this actuator, determining how the firmware communicates with and controls the motor driver.</p>
                <ul>
                    <li>Valid values: <raw>tmc2590</raw>, <raw>tmc2660</raw>, <raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_en_pin"></setting></td>
            <td><setting no-version v2="actuator.x.en_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: individual enable signal output pin for this specific stepper motor driver — when set, it controls whether the driver is enabled or disabled independently of other motors.</p>
                <p>Most configurations set this to <raw>nc</raw> and use the global <setting v2="actuator.common.motors_enable_pin"></setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="actuator.x.max_rate"></setting></td>
            <td class="description-cell">
                <p>X axis: maximum speed for this actuator, in millimeters per minute (converted internally to mm/sec by dividing by 60).</p>
                <p>Limits how fast the motor can move and prevents the stepper from skipping steps or stalling.</p>
                <p>Typical value: <raw>30000</raw> mm/min (500 mm/s).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.x.microsteps"></setting></td>
            <td class="description-cell">
                <p>X axis: microstepping divisor for this stepper driver — divides each full motor step into smaller increments for smoother motion and reduced vibration.</p>
                <ul>
                    <li>Common values: <raw>16</raw> or <raw>32</raw></li>
                </ul>
                <p>Directly affects the <setting v1="alpha_steps_per_mm" v2="actuator.x.steps_per_mm"></setting> calculation.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.reversed"></setting></td>
            <td class="description-cell">
                <p>X axis: reverses the motor direction by inverting the direction signal, without modifying the pin definition.</p>
                <p>A cleaner, more readable way to reverse direction than using the <raw>!</raw> modifier on the <setting v1="alpha_dir_pin" v2="actuator.x.dir_pin"></setting> setting.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.slaved_to"></setting></td>
            <td class="description-cell">
                <p>X axis: configures this actuator to be slaved to another axis, for dual-motor configurations such as dual Y-axis motors on gantry machines.</p>
                <p>Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_step_pin"></setting></td>
            <td><setting no-version v2="actuator.x.step_pin"></setting></td>
            <td class="description-cell">
                <p>X axis: GPIO pin used to send step pulses to the stepper motor driver for this actuator — each pulse advances the motor by one microstep, per the driver's microstepping configuration.</p>
                <p>Both step and dir pins must be defined for an axis to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.x.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>X axis: number of motor steps required to move exactly 1mm — the most critical calibration parameter for accurate positioning.</p>
                <p>Typical value for a GT2 belt with a 20-tooth pulley and 1/16 microstepping: <raw>80</raw> steps/mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">
                <p>Y axis: per-axis acceleration override, letting this actuator use a different acceleration value independent of the global default.</p>
                <p>When set to <raw>-1</raw> (default), the motor uses the global <setting v1="acceleration" v2="motion control.default_acceleration"></setting> value instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.y.dir_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: GPIO pin used to control the direction signal to the stepper motor driver, determining whether the motor rotates clockwise or counter-clockwise.</p>
                <p>Direction can be inverted by appending <raw>!</raw> to the pin specification, or by using the <setting v2="actuator.y.reversed"></setting> setting instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.y.driver"></setting></td>
            <td class="description-cell">
                <p>Y axis: specifies the stepper driver chip type used for this actuator, determining how the firmware communicates with and controls the motor driver.</p>
                <ul>
                    <li>Valid values: <raw>tmc2590</raw>, <raw>tmc2660</raw>, <raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_en_pin"></setting></td>
            <td><setting no-version v2="actuator.y.en_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: individual enable signal output pin for this specific stepper motor driver — when set, it controls whether the driver is enabled or disabled independently of other motors.</p>
                <p>Most configurations set this to <raw>nc</raw> and use the global <setting v2="actuator.common.motors_enable_pin"></setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.y.max_rate"></setting></td>
            <td class="description-cell">
                <p>Y axis: maximum speed for this actuator, in millimeters per minute (converted internally to mm/sec by dividing by 60).</p>
                <p>Limits how fast the motor can move and prevents the stepper from skipping steps or stalling.</p>
                <p>Typical value: <raw>30000</raw> mm/min (500 mm/s).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.y.microsteps"></setting></td>
            <td class="description-cell">
                <p>Y axis: microstepping divisor for this stepper driver — divides each full motor step into smaller increments for smoother motion and reduced vibration.</p>
                <ul>
                    <li>Common values: <raw>16</raw> or <raw>32</raw></li>
                </ul>
                <p>Directly affects the <setting v1="beta_steps_per_mm" v2="actuator.y.steps_per_mm"></setting> calculation.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.reversed"></setting></td>
            <td class="description-cell">
                <p>Y axis: reverses the motor direction by inverting the direction signal, without modifying the pin definition.</p>
                <p>A cleaner, more readable way to reverse direction than using the <raw>!</raw> modifier on the <setting v1="beta_dir_pin" v2="actuator.y.dir_pin"></setting> setting.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.slaved_to"></setting></td>
            <td class="description-cell">
                <p>Y axis: configures this actuator to be slaved to another axis, for dual-motor configurations such as dual Y-axis motors on gantry machines.</p>
                <p>Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_step_pin"></setting></td>
            <td><setting no-version v2="actuator.y.step_pin"></setting></td>
            <td class="description-cell">
                <p>Y axis: GPIO pin used to send step pulses to the stepper motor driver for this actuator — each pulse advances the motor by one microstep, per the driver's microstepping configuration.</p>
                <p>Both step and dir pins must be defined for an axis to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.y.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>Y axis: number of motor steps required to move exactly 1mm — the most critical calibration parameter for accurate positioning.</p>
                <p>Typical value for a GT2 belt with a 20-tooth pulley and 1/16 microstepping: <raw>80</raw> steps/mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>Z axis: per-axis acceleration override, letting this actuator use a different acceleration value independent of the global default.</p>
                <p>When set to <raw>-1</raw> (default), the motor uses the global <setting v1="acceleration" v2="motion control.default_acceleration"></setting> value instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.z.dir_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: GPIO pin used to control the direction signal to the stepper motor driver, determining whether the motor rotates clockwise or counter-clockwise.</p>
                <p>Direction can be inverted by appending <raw>!</raw> to the pin specification, or by using the <setting v2="actuator.z.reversed"></setting> setting instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.z.driver"></setting></td>
            <td class="description-cell">
                <p>Z axis: specifies the stepper driver chip type used for this actuator, determining how the firmware communicates with and controls the motor driver.</p>
                <ul>
                    <li>Valid values: <raw>tmc2590</raw>, <raw>tmc2660</raw>, <raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_en_pin"></setting></td>
            <td><setting no-version v2="actuator.z.en_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: individual enable signal output pin for this specific stepper motor driver — when set, it controls whether the driver is enabled or disabled independently of other motors.</p>
                <p>Most configurations set this to <raw>nc</raw> and use the global <setting v2="actuator.common.motors_enable_pin"></setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="actuator.z.max_rate"></setting></td>
            <td class="description-cell">
                <p>Z axis: maximum speed for this actuator, in millimeters per minute.</p>
                <ul>
                    <li>Cartesian machines with a leadscrew Z-axis: often set much lower than alpha/beta, e.g. <raw>300</raw>-<raw>1200</raw> mm/min</li>
                    <li>Delta printers: should match alpha/beta values (<raw>30000</raw> mm/min)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.z.microsteps"></setting></td>
            <td class="description-cell">
                <p>Z axis: microstepping divisor for this stepper driver — divides each full motor step into smaller increments for smoother motion and reduced vibration.</p>
                <ul>
                    <li>Common values: <raw>16</raw> or <raw>32</raw></li>
                </ul>
                <p>Directly affects the <setting v1="gamma_steps_per_mm" v2="actuator.z.steps_per_mm"></setting> calculation.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.reversed"></setting></td>
            <td class="description-cell">
                <p>Z axis: reverses the motor direction by inverting the direction signal, without modifying the pin definition.</p>
                <p>A cleaner, more readable way to reverse direction than using the <raw>!</raw> modifier on the <setting v1="gamma_dir_pin" v2="actuator.z.dir_pin"></setting> setting.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.slaved_to"></setting></td>
            <td class="description-cell">
                <p>Z axis: configures this actuator to be slaved to another axis, for dual-motor configurations such as dual Y-axis motors on gantry machines.</p>
                <p>Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_step_pin"></setting></td>
            <td><setting no-version v2="actuator.z.step_pin"></setting></td>
            <td class="description-cell">
                <p>Z axis: GPIO pin used to send step pulses to the stepper motor driver for this actuator — each pulse advances the motor by one microstep, per the driver's microstepping configuration.</p>
                <p>Both step and dir pins must be defined for an axis to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.z.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>Z axis: number of motor steps required to move exactly 1mm on the Z axis.</p>
                <ul>
                    <li>Cartesian machines with a leadscrew Z-axis: typically <raw>2560</raw> steps/mm (TR8×8 leadscrew with 1/16 microstepping)</li>
                    <li>Delta printers: should match alpha/beta values (<raw>80</raw> steps/mm)</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
