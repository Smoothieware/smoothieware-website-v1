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
            <td class="description-cell">Enables real-time checking of TMC driver error status bits including overtemperature, short circuit, and open load conditions. When enabled, the firmware periodically reads driver status registers and reports any detected errors to the console.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">Determines whether the system immediately enters HALT state when a TMC driver reports an error condition. When enabled, any driver alarm (overtemperature, short circuit, open load) causes the system to stop all operations immediately.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.motors_enable_pin"></setting></td>
            <td class="description-cell">Defines a global enable pin that controls power to all stepper motors simultaneously. This acts as a master enable/disable switch for all motors. On Prime board with TMC drivers, this is typically set to <pin>PH13!</pin>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">X axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global default acceleration. When set to <raw>-1</raw> (default), the motor uses the global <setting>motion control.default_acceleration</setting> value.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.x.dir_pin"></setting></td>
            <td class="description-cell">X axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates clockwise or counter-clockwise. The direction can be inverted by appending <raw>!</raw> to the pin specification or by using the <setting>actuator.x.reversed</setting> setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.x.driver"></setting></td>
            <td class="description-cell">X axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the motor driver. Valid values include <raw>tmc2590</raw>, <raw>tmc2660</raw>, and <raw>external</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_en_pin"></setting></td>
            <td><setting no-version v2="actuator.x.en_pin"></setting></td>
            <td class="description-cell">X axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enabled or disabled independently of other motors. Most configurations set this to <raw>nc</raw> and use the global <setting>actuator.common.motors_enable_pin</setting> instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="actuator.x.max_rate"></setting></td>
            <td class="description-cell">X axis: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The maximum rate limits how fast the motor can move and prevents the stepper from skipping steps or stalling. Typical value is <raw>30000</raw> mm/min (500 mm/s).</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.x.microsteps"></setting></td>
            <td class="description-cell">X axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion and reduced vibration. Common values are <raw>16</raw> or <raw>32</raw>. This setting directly affects the <setting>actuator.x.steps_per_mm</setting> calculation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.reversed"></setting></td>
            <td class="description-cell">X axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable way to reverse motor direction compared to using the <raw>!</raw> modifier on the <setting>actuator.x.dir_pin</setting> setting.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.slaved_to"></setting></td>
            <td class="description-cell">X axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_step_pin"></setting></td>
            <td><setting no-version v2="actuator.x.step_pin"></setting></td>
            <td class="description-cell">X axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one microstep according to the driver's microstepping configuration. Both step and dir pins must be defined for an axis to be active.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.x.steps_per_mm"></setting></td>
            <td class="description-cell">X axis: Specifies the number of motor steps required to move exactly 1mm on the X axis. This is the most critical calibration parameter for accurate positioning. Typical value for GT2 belt with 20-tooth pulley and 1/16 microstepping is <raw>80</raw> steps/mm.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">Y axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global default acceleration. When set to <raw>-1</raw> (default), the motor uses the global <setting>motion control.default_acceleration</setting> value.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.y.dir_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates clockwise or counter-clockwise. The direction can be inverted by appending <raw>!</raw> to the pin specification or by using the <setting>actuator.y.reversed</setting> setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.y.driver"></setting></td>
            <td class="description-cell">Y axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the motor driver. Valid values include <raw>tmc2590</raw>, <raw>tmc2660</raw>, and <raw>external</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_en_pin"></setting></td>
            <td><setting no-version v2="actuator.y.en_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enabled or disabled independently of other motors. Most configurations set this to <raw>nc</raw> and use the global <setting>actuator.common.motors_enable_pin</setting> instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.y.max_rate"></setting></td>
            <td class="description-cell">Y axis: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The maximum rate limits how fast the motor can move and prevents the stepper from skipping steps or stalling. Typical value is <raw>30000</raw> mm/min (500 mm/s).</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.y.microsteps"></setting></td>
            <td class="description-cell">Y axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion and reduced vibration. Common values are <raw>16</raw> or <raw>32</raw>. This setting directly affects the <setting>actuator.y.steps_per_mm</setting> calculation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.reversed"></setting></td>
            <td class="description-cell">Y axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable way to reverse motor direction compared to using the <raw>!</raw> modifier on the <setting>actuator.y.dir_pin</setting> setting.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.slaved_to"></setting></td>
            <td class="description-cell">Y axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_step_pin"></setting></td>
            <td><setting no-version v2="actuator.y.step_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one microstep according to the driver's microstepping configuration. Both step and dir pins must be defined for an axis to be active.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.y.steps_per_mm"></setting></td>
            <td class="description-cell">Y axis: Specifies the number of motor steps required to move exactly 1mm on the Y axis. This is the most critical calibration parameter for accurate positioning. Typical value for GT2 belt with 20-tooth pulley and 1/16 microstepping is <raw>80</raw> steps/mm.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Z axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global default acceleration. When set to <raw>-1</raw> (default), the motor uses the global <setting>motion control.default_acceleration</setting> value.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.z.dir_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates clockwise or counter-clockwise. The direction can be inverted by appending <raw>!</raw> to the pin specification or by using the <setting>actuator.z.reversed</setting> setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.z.driver"></setting></td>
            <td class="description-cell">Z axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the motor driver. Valid values include <raw>tmc2590</raw>, <raw>tmc2660</raw>, and <raw>external</raw>.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_en_pin"></setting></td>
            <td><setting no-version v2="actuator.z.en_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enabled or disabled independently of other motors. Most configurations set this to <raw>nc</raw> and use the global <setting>actuator.common.motors_enable_pin</setting> instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="actuator.z.max_rate"></setting></td>
            <td class="description-cell">Z axis: Defines the maximum speed for this actuator in millimeters per minute. For Cartesian machines with leadscrew Z-axis, this is often set much lower than alpha/beta (e.g., <raw>300</raw>-<raw>1200</raw> mm/min). For delta printers, should match alpha/beta values (<raw>30000</raw> mm/min).</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.z.microsteps"></setting></td>
            <td class="description-cell">Z axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion and reduced vibration. Common values are <raw>16</raw> or <raw>32</raw>. This setting directly affects the <setting>actuator.z.steps_per_mm</setting> calculation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.reversed"></setting></td>
            <td class="description-cell">Z axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable way to reverse motor direction compared to using the <raw>!</raw> modifier on the <setting>actuator.z.dir_pin</setting> setting.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.slaved_to"></setting></td>
            <td class="description-cell">Z axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_step_pin"></setting></td>
            <td><setting no-version v2="actuator.z.step_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one microstep according to the driver's microstepping configuration. Both step and dir pins must be defined for an axis to be active.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.z.steps_per_mm"></setting></td>
            <td class="description-cell">Z axis: Specifies the number of motor steps required to move exactly 1mm on the Z axis. For Cartesian machines with leadscrew Z-axis, typical value is <raw>2560</raw> steps/mm (TR8×8 leadscrew with 1/16 microstepping). For delta printers, should match alpha/beta values (<raw>80</raw> steps/mm).</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
