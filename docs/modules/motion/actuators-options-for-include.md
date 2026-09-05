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
                <p>Turn this on and the firmware checks your TMC drivers' status bits in real time: overtemperature, short circuit, open load.</p>
                <p>It polls the driver status registers and reports anything it finds on the console.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">
                <p>If this is on, the system halts the moment a TMC driver reports an error.</p>
                <p>That covers overtemperature, short circuit, and open load. Any of those trips the alarm and everything stops right away.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.motors_enable_pin"></setting></td>
            <td class="description-cell">
                <p>This pin turns power to all your stepper motors on and off at once.</p>
                <p>On the Prime board with TMC drivers, it's typically set to <pin>PH13!</pin>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">
                <p>This lets the X axis use its own acceleration value instead of the global default.</p>
                <p>Leave it at <raw>-1</raw> (the default) and it just uses <setting>motion control.default_acceleration</setting>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.x.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends the direction signal to the X axis stepper driver, so it decides which way the motor turns.</p>
                <p>If it's turning the wrong way, add <raw>!</raw> to the pin, or just use <setting>actuator.x.reversed</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.x.driver"></setting></td>
            <td class="description-cell">
                <p>This tells the firmware which driver chip the X axis is using, so it knows how to talk to it.</p>
                <ul>
                    <li><raw>tmc2590</raw></li>
                    <li><raw>tmc2660</raw></li>
                    <li><raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_en_pin"></setting></td>
            <td><setting no-version v2="actuator.x.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is a per-motor enable pin for the X axis driver, separate from the others.</p>
                <p>Most setups leave it at <raw>nc</raw> and just use the global <setting>actuator.common.motors_enable_pin</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="actuator.x.max_rate"></setting></td>
            <td class="description-cell">
                <p>This caps how fast the X axis can move, in millimeters per minute (the firmware divides by 60 internally to get mm/sec).</p>
                <p>Push it too high and the motor skips steps or stalls, so keep it within what your hardware can actually handle.</p>
                <p>A typical value is <raw>30000</raw> mm/min, or 500 mm/s.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.x.microsteps"></setting></td>
            <td class="description-cell">
                <p>This sets how many microsteps the X axis driver splits each full step into, for smoother motion and less vibration.</p>
                <p>16 or 32 are the common values. Change it and you'll need to recalculate <setting>actuator.x.steps_per_mm</setting> to match.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.reversed"></setting></td>
            <td class="description-cell">
                <p>This flips the X axis motor's direction without touching the pin definition itself.</p>
                <p>It's a cleaner way to reverse direction than adding <raw>!</raw> to <setting>actuator.x.dir_pin</setting>.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This slaves the X axis to another axis, for dual-motor setups like dual Y motors on a gantry machine.</p>
                <p>Only A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_step_pin"></setting></td>
            <td><setting no-version v2="actuator.x.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends step pulses to the X axis driver. Each pulse moves the motor one microstep, based on how you've set its microstepping.</p>
                <p>An axis needs both its step and dir pins defined to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.x.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is how many motor steps it takes to move the X axis exactly 1mm. Get it wrong and everything you print or cut comes out the wrong size.</p>
                <p>With a GT2 belt, a 20-tooth pulley, and 1/16 microstepping, that's typically <raw>80</raw> steps/mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">
                <p>This lets the Y axis use its own acceleration value instead of the global default.</p>
                <p>Leave it at <raw>-1</raw> (the default) and it just uses <setting>motion control.default_acceleration</setting>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.y.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends the direction signal to the Y axis stepper driver, so it decides which way the motor turns.</p>
                <p>If it's turning the wrong way, add <raw>!</raw> to the pin, or just use <setting>actuator.y.reversed</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.y.driver"></setting></td>
            <td class="description-cell">
                <p>This tells the firmware which driver chip the Y axis is using, so it knows how to talk to it.</p>
                <ul>
                    <li><raw>tmc2590</raw></li>
                    <li><raw>tmc2660</raw></li>
                    <li><raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_en_pin"></setting></td>
            <td><setting no-version v2="actuator.y.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is a per-motor enable pin for the Y axis driver, separate from the others.</p>
                <p>Most setups leave it at <raw>nc</raw> and just use the global <setting>actuator.common.motors_enable_pin</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.y.max_rate"></setting></td>
            <td class="description-cell">
                <p>This caps how fast the Y axis can move, in millimeters per minute (the firmware divides by 60 internally to get mm/sec).</p>
                <p>Push it too high and the motor skips steps or stalls, so keep it within what your hardware can actually handle.</p>
                <p>A typical value is <raw>30000</raw> mm/min, or 500 mm/s.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.y.microsteps"></setting></td>
            <td class="description-cell">
                <p>This sets how many microsteps the Y axis driver splits each full step into, for smoother motion and less vibration.</p>
                <p>16 or 32 are the common values. Change it and you'll need to recalculate <setting>actuator.y.steps_per_mm</setting> to match.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.reversed"></setting></td>
            <td class="description-cell">
                <p>This flips the Y axis motor's direction without touching the pin definition itself.</p>
                <p>It's a cleaner way to reverse direction than adding <raw>!</raw> to <setting>actuator.y.dir_pin</setting>.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This slaves the Y axis to another axis, for dual-motor setups like dual Y motors on a gantry machine.</p>
                <p>Only A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_step_pin"></setting></td>
            <td><setting no-version v2="actuator.y.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends step pulses to the Y axis driver. Each pulse moves the motor one microstep, based on how you've set its microstepping.</p>
                <p>An axis needs both its step and dir pins defined to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.y.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is how many motor steps it takes to move the Y axis exactly 1mm. Get it wrong and everything you print or cut comes out the wrong size.</p>
                <p>With a GT2 belt, a 20-tooth pulley, and 1/16 microstepping, that's typically <raw>80</raw> steps/mm.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">
                <p>This lets the Z axis use its own acceleration value instead of the global default.</p>
                <p>Leave it at <raw>-1</raw> (the default) and it just uses <setting>motion control.default_acceleration</setting>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.z.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends the direction signal to the Z axis stepper driver, so it decides which way the motor turns.</p>
                <p>If it's turning the wrong way, add <raw>!</raw> to the pin, or just use <setting>actuator.z.reversed</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.z.driver"></setting></td>
            <td class="description-cell">
                <p>This tells the firmware which driver chip the Z axis is using, so it knows how to talk to it.</p>
                <ul>
                    <li><raw>tmc2590</raw></li>
                    <li><raw>tmc2660</raw></li>
                    <li><raw>external</raw></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_en_pin"></setting></td>
            <td><setting no-version v2="actuator.z.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is a per-motor enable pin for the Z axis driver, separate from the others.</p>
                <p>Most setups leave it at <raw>nc</raw> and just use the global <setting>actuator.common.motors_enable_pin</setting> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="actuator.z.max_rate"></setting></td>
            <td class="description-cell">
                <p>This caps how fast the Z axis can move, in millimeters per minute.</p>
                <p>On a Cartesian machine with a leadscrew Z, you'll usually set this much lower than X/Y, something like <raw>300</raw>-<raw>1200</raw> mm/min. On a delta printer, Z is just another tower, so match it to your X/Y value (<raw>30000</raw> mm/min).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.z.microsteps"></setting></td>
            <td class="description-cell">
                <p>This sets how many microsteps the Z axis driver splits each full step into, for smoother motion and less vibration.</p>
                <p>16 or 32 are the common values. Change it and you'll need to recalculate <setting>actuator.z.steps_per_mm</setting> to match.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.reversed"></setting></td>
            <td class="description-cell">
                <p>This flips the Z axis motor's direction without touching the pin definition itself.</p>
                <p>It's a cleaner way to reverse direction than adding <raw>!</raw> to <setting>actuator.z.dir_pin</setting>.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.slaved_to"></setting></td>
            <td class="description-cell">
                <p>This slaves the Z axis to another axis, for dual-motor setups like dual Y motors on a gantry machine.</p>
                <p>Only A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_step_pin"></setting></td>
            <td><setting no-version v2="actuator.z.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends step pulses to the Z axis driver. Each pulse moves the motor one microstep, based on how you've set its microstepping.</p>
                <p>An axis needs both its step and dir pins defined to be active.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.z.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is how many motor steps it takes to move the Z axis exactly 1mm.</p>
                <p>On a Cartesian machine with a leadscrew Z, a TR8x8 leadscrew with 1/16 microstepping typically works out to <raw>2560</raw> steps/mm. On a delta printer, match it to your X/Y value (<raw>80</raw> steps/mm).</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
