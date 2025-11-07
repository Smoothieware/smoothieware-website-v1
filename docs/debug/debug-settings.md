---
permalink: /debug-settings
layout: default
title: Debug - Setting Tags
---

# Setting Tag Debug Page

This page demonstrates the `<setting>` custom tags that display Smoothieware configuration options with interactive tooltips showing both v1 and v2 setting names.

## Features

- **CSS Fallback**: Settings display correctly even without JavaScript
- **Monospace Display**: White text on black background for code-like appearance
- **Interactive Tooltips**: Hover over any setting to see detailed information
- **v1 ↔ v2 Comparison**: Shows both versions side-by-side

---

## Block Settings Examples

### Motor Configuration (Alpha Axis)

The <setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting> setting controls how many steps the motor takes to move 1mm on the X axis.

The <setting v1="acceleration" v2="motion control.default_acceleration"></setting> setting is about accelerating.

Set the maximum rate with <setting v1="alpha_max_rate" v2="actuator.alpha.max_rate"></setting> in mm/min.

The motor current is controlled by <setting v1="alpha_current" v2="actuator.alpha.current"></setting> measured in Amps.

### Temperature Control

Configure your hotend thermistor pin using <setting v1="temperature_control.hotend.thermistor_pin" v2="temperature control.hotend.thermistor_pin"></setting>.

The heater pin is set with <setting v1="temperature_control.hotend.heater_pin" v2="temperature control.hotend.heater_pin"></setting>.

PID tuning factors:
- P factor: <setting v1="temperature_control.hotend.p_factor" v2="temperature control.hotend.p_factor"></setting>
- I factor: <setting v1="temperature_control.hotend.i_factor" v2="temperature control.hotend.i_factor"></setting>
- D factor: <setting v1="temperature_control.hotend.d_factor" v2="temperature control.hotend.d_factor"></setting>

### Motion Control

Basic motion settings:
- <setting v1="acceleration" v2="motion control.default_acceleration"></setting> - Default acceleration in mm/sec²
- <setting v1="junction_deviation" v2="planner.junction_deviation"></setting> - Cornering algorithm parameter
- <setting v1="default_feed_rate" v2="motion control.default_feed_rate"></setting> - Default movement speed
- <setting v1="arm_solution" v2="motion control.arm_solution"></setting> - Kinematics type (cartesian, delta, etc)

### Laser Module

Laser power and control:
- <setting v1="laser_module_enable" v2="laser.enable"></setting> - Enable/disable laser module
- <setting v1="laser_module_maximum_power" v2="laser.maximum_power"></setting> - Maximum laser power (0-1 or percentage)
- <setting v1="laser_module_pwm_pin" v2="laser.pwm_pin"></setting> - PWM output pin for laser control
- <setting v1="laser_module_pwm_period" v2="laser.pwm_period"></setting> - PWM period in microseconds

### Endstops

Endstop configuration for X axis:
- <setting v1="alpha_min_endstop" v2="endstops.minx.pin"></setting> - Pin for minimum X endstop
- <setting v1="alpha_fast_homing_rate_mm_s" v2="endstops.minx.fast_rate"></setting> - Fast homing speed
- <setting v1="alpha_slow_homing_rate_mm_s" v2="endstops.minx.slow_rate"></setting> - Slow homing speed
- <setting v1="alpha_homing_retract_mm" v2="endstops.minx.retract"></setting> - Retract distance after hitting endstop

### Switch Module (Fan Control)

Fan control using switch module:
- <setting v1="switch.fan.enable" v2="switch.fan.enable"></setting> - Enable fan switch
- <setting v1="switch.fan.input_on_command" v2="switch.fan.input_on_command"></setting> - G-code to turn on (usually M106)
- <setting v1="switch.fan.input_off_command" v2="switch.fan.input_off_command"></setting> - G-code to turn off (usually M107)
- <setting v1="switch.fan.output_pin" v2="switch.fan.output_pin"></setting> - Output pin for fan
- <setting v1="switch.fan.output_type" v2="switch.fan.output_type"></setting> - Output type (pwm or digital)

### Z-Probe/Leveling

Z-probe configuration:
- <setting v1="zprobe.probe_pin" v2="zprobe.probe_pin"></setting> - Probe input pin
- <setting v1="zprobe.slow_feedrate" v2="zprobe.slow_feedrate"></setting> - Probing speed
- <setting v1="zprobe.probe_height" v2="zprobe.probe_height"></setting> - Z height when probe triggers
- <setting v1="leveling-strategy.three-point-leveling.enable" v2="three point leveling strategy.enable"></setting> - Enable 3-point leveling

### Delta Kinematics

Delta-specific settings:
- <setting v1="arm_length" v2="linear delta.arm_length"></setting> - Length of diagonal rods
- <setting v1="arm_radius" v2="linear delta.arm_radius"></setting> - Horizontal radius when effector is centered

---

## Inline Settings in Prose

When configuring a 3D printer, you'll typically start by setting <setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>, <setting v1="beta_steps_per_mm" v2="actuator.beta.steps_per_mm"></setting>, and <setting v1="gamma_steps_per_mm" v2="actuator.gamma.steps_per_mm"></setting> for your X, Y, and Z axes respectively.

The <setting v1="arm_solution" v2="motion control.arm_solution"></setting> setting determines whether you're using cartesian, delta, or another kinematics system.

For heated bed control, configure <setting v1="temperature_control.bed.enable" v2="temperature control.bed.enable"></setting> and <setting v1="temperature_control.bed.heater_pin" v2="temperature control.bed.heater_pin"></setting>.

---

## Mixed Display

Some settings remained **unchanged** between v1 and v2:

- Extruder offsets: <setting v1="extruder.hotend.x_offset" v2="extruder.hotend.x_offset"></setting>
- Retract length: <setting v1="extruder.hotend.retract_length" v2="extruder.hotend.retract_length"></setting>
- Switch enable: <setting v1="switch.fan.enable" v2="switch.fan.enable"></setting>

While others were **renamed or restructured**:

- Steps per mm: <setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting> (moved to [actuator] section)
- Laser power: <setting v1="laser_module_maximum_power" v2="laser.maximum_power"></setting> (simplified name)
- Endstops: <setting v1="alpha_min_endstop" v2="endstops.minx.pin"></setting> (more structured naming)

---

## Pin Notation Changes

v1 used port.pin notation like `2.5`, while v2 uses STM32-style names:

- Example: <setting v1="2.0" v2="PD3"></setting> - Alpha step pin
- Example: <setting v1="2.1" v2="PD4"></setting> - Alpha direction pin
- Example: <setting v1="0.23" v2="ADC1_1"></setting> - Thermistor 1
- Example: <setting v1="2.5" v2="PE1"></setting> - Heater/FET output

**Note:** Pin mappings are board-specific and must be verified against your hardware schematic.

---

## Testing Instructions

1. **Hover Test**: Hover your mouse over any setting tag to see the tooltip appear
2. **CSS Fallback Test**: Disable JavaScript in your browser - settings should still display with v1/v2 labels
3. **Responsive Test**: Resize your browser window - tooltips should remain properly positioned
4. **Scroll Test**: Scroll the page while hovering - tooltip should follow the setting

---

## Implementation Notes

- CSS file: `/assets/css/setting-tag.css`
- TypeScript file: `/assets/js/setting-tag.js` (compiled from `src/site/setting-tag.ts`)
- Custom tag format: `<setting v1="..." v2="..."></setting>`
- Tooltip content is currently placeholder (lorem ipsum) but can be replaced with real documentation data

---

## Migration Context

These setting tags will be used throughout the documentation to:
1. Help users migrating from Smoothieware v1 to v2
2. Provide quick reference for configuration options
3. Link to detailed documentation pages (future feature)
4. Show examples of actual usage in context

The tooltip system can be extended to show:
- Full setting descriptions
- Valid value ranges
- Related settings
- Example configurations
- Links to relevant documentation sections

---

## Single-Attribute Tags (v1-only or v2-only)

The system supports tags with only one attribute for cases where a setting exists in only one version:

### V1-Only Settings

Settings that only exist in Smoothieware v1:

- **Legacy feature:** <setting v1="some_old_v1_only_setting"></setting>
- **Deprecated option:** <setting v1="old_deprecated_feature.enable"></setting>

### V2-Only Settings

Settings that only exist in Smoothieware v2:

- **New feature:** <setting v2="new_v2_feature.enable"></setting>
- **Modern option:** <setting v2="advanced.new_capability.threshold"></setting>

### Mixed Real Examples

Examples showing settings that actually changed significantly or were removed/added:

- **V1 only (removed in v2):** <setting v1="sd_card.enable"></setting>
- **V2 only (new feature):** <setting v2="network.wifi.ssid"></setting>

---

{::nomarkdown}

<style>
.settings-reference-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.9em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
}

.settings-reference-table thead tr {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    text-align: left;
    font-weight: bold;
}

.settings-reference-table th {
    padding: 12px 15px;
    font-size: 0.95em;
}

.settings-reference-table tbody tr {
    border-bottom: 1px solid #2a2a2a;
    background: #1a1a1a;
}

.settings-reference-table tbody tr:nth-of-type(even) {
    background: #222222;
}

.settings-reference-table tbody tr:hover {
    background: #2a2a2a;
}

.settings-reference-table td {
    padding: 10px 15px;
    vertical-align: top;
}

.module-header {
    background: linear-gradient(135deg, #434343 0%, #000000 100%) !important;
    color: #ffd966;
    font-weight: bold;
    font-size: 1.1em;
    padding: 15px !important;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.empty-cell {
    color: #666;
    font-style: italic;
    text-align: center;
}

.description-cell {
    color: #bbb;
    font-size: 0.85em;
    line-height: 1.4;
}

.settings-reference-table td setting {
    margin: 0;
}
</style>

<h2>Complete Settings Reference</h2>
<p>This table shows all Smoothieware settings for both v1 and v2, organized by module. Hover over any setting to see detailed information.</p>

<table class="settings-reference-table">
    <thead>
        <tr>
            <th style="width: 30%;">V1 Setting</th>
            <th style="width: 30%;">V2 Setting</th>
            <th style="width: 40%;">Description</th>
        </tr>
    </thead>
    <tbody>
            <td colspan="3" class="module-header">Actuators</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.check_driver_errors"></setting></td>
            <td class="description-cell">Enables real-time checking of TMC driver error status bits including overtemperature, short circuit, and open load conditions. When enabled, the firmw...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">Determines whether the system immediately enters HALT state when a TMC driver reports an error condition. When enabled, any driver alarm (overtemperat...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.common.motors_enable_pin"></setting></td>
            <td class="description-cell">Defines a global enable pin that controls power to all stepper motors simultaneously. This acts as a master enable/disable switch for all motors. When...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">X axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global defaul...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.x.dir_pin"></setting></td>
            <td class="description-cell">X axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates cloc...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.x.driver"></setting></td>
            <td class="description-cell">X axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the mot...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_en_pin"></setting></td>
            <td><setting no-version v2="actuator.x.en_pin"></setting></td>
            <td class="description-cell">X axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enab...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="actuator.x.max_rate"></setting></td>
            <td class="description-cell">X axis: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The max...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.x.microsteps"></setting></td>
            <td class="description-cell">X axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.reversed"></setting></td>
            <td class="description-cell">X axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.x.slaved_to"></setting></td>
            <td class="description-cell">X axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_step_pin"></setting></td>
            <td><setting no-version v2="actuator.x.step_pin"></setting></td>
            <td class="description-cell">X axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.x.steps_per_mm"></setting></td>
            <td class="description-cell">X axis: Specifies the number of motor steps required to move exactly 1mm on the X axis. This is the most critical calibration parameter for accurate p...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">Y axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global defaul...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.y.dir_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates cloc...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.y.driver"></setting></td>
            <td class="description-cell">Y axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the mot...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_en_pin"></setting></td>
            <td><setting no-version v2="actuator.y.en_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enab...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.y.max_rate"></setting></td>
            <td class="description-cell">Y axis: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The max...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.y.microsteps"></setting></td>
            <td class="description-cell">Y axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.reversed"></setting></td>
            <td class="description-cell">Y axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.y.slaved_to"></setting></td>
            <td class="description-cell">Y axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_step_pin"></setting></td>
            <td><setting no-version v2="actuator.y.step_pin"></setting></td>
            <td class="description-cell">Y axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.y.steps_per_mm"></setting></td>
            <td class="description-cell">Y axis: Specifies the number of motor steps required to move exactly 1mm on the Y axis. This is the most critical calibration parameter for accurate p...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Z axis: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global defaul...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_dir_pin"></setting></td>
            <td><setting no-version v2="actuator.z.dir_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates cloc...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.chip"></setting></td>
            <td><setting no-version v2="actuator.z.driver"></setting></td>
            <td class="description-cell">Z axis: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the mot...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_en_pin"></setting></td>
            <td><setting no-version v2="actuator.z.en_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enab...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="actuator.z.max_rate"></setting></td>
            <td class="description-cell">Z axis: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The max...</td>
        </tr>
        <tr>
            <td><setting no-version v1="motor_driver_control.*.microsteps"></setting></td>
            <td><setting no-version v2="actuator.z.microsteps"></setting></td>
            <td class="description-cell">Z axis: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.reversed"></setting></td>
            <td class="description-cell">Z axis: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="actuator.z.slaved_to"></setting></td>
            <td class="description-cell">Z axis: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_step_pin"></setting></td>
            <td><setting no-version v2="actuator.z.step_pin"></setting></td>
            <td class="description-cell">Z axis: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.z.steps_per_mm"></setting></td>
            <td class="description-cell">Z axis: Specifies the number of motor steps required to move exactly 1mm on the Z axis. This is the most critical calibration parameter for accurate p...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Conveyor</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.check_driver_errors"></setting></td>
            <td class="description-cell">Enables periodic checking of TMC driver error status bits including overtemperature warnings, overtemperature shutdown, short circuit detection, open...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">If set to true, any TMC driver error immediately triggers the system to enter ON_HALT state (emergency stop), stopping all motion and disabling motors...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.motors_enable_pin"></setting></td>
            <td class="description-cell">Global enable pin that controls power or enable signal for all motor drivers simultaneously. On the Prime board with TMC drivers, this pin controls VC...</td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="queue_delay_time_ms"></setting></td>
            <td class="description-cell">Time delay in milliseconds before the conveyor starts processing queued blocks after the first block enters an empty queue. This delay allows the queu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="x.acceleration"></setting></td>
            <td class="description-cell">X axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.dir_pin"></setting></td>
            <td class="description-cell">X axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forwar...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.driver"></setting></td>
            <td class="description-cell">X axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/be...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.en_pin"></setting></td>
            <td class="description-cell">X axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to nc (not connected) because...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="x.max_rate"></setting></td>
            <td class="description-cell">X axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical d...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the X axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother moti...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.reversed"></setting></td>
            <td class="description-cell">X axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to addi...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.slaved_to"></setting></td>
            <td class="description-cell">X axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved t...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.step_pin"></setting></td>
            <td class="description-cell">X axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="x.steps_per_mm"></setting></td>
            <td class="description-cell">X axis: Number of motor steps required to move one millimeter on the X axis. This is the most critical calibration setting as it defines the relations...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="y.acceleration"></setting></td>
            <td class="description-cell">Y axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.dir_pin"></setting></td>
            <td class="description-cell">Y axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forwar...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.driver"></setting></td>
            <td class="description-cell">Y axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/be...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.en_pin"></setting></td>
            <td class="description-cell">Y axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to nc (not connected) because...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="y.max_rate"></setting></td>
            <td class="description-cell">Y axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical d...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the Y axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother moti...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.reversed"></setting></td>
            <td class="description-cell">Y axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to addi...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.slaved_to"></setting></td>
            <td class="description-cell">Y axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved t...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.step_pin"></setting></td>
            <td class="description-cell">Y axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="y.steps_per_mm"></setting></td>
            <td class="description-cell">Y axis: Number of motor steps required to move one millimeter on the Y axis. This is the most critical calibration setting as it defines the relations...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="z.acceleration"></setting></td>
            <td class="description-cell">Z axis: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global motion control...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.dir_pin"></setting></td>
            <td class="description-cell">Z axis: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forwar...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.driver"></setting></td>
            <td class="description-cell">Z axis: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/be...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.en_pin"></setting></td>
            <td class="description-cell">Z axis: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to nc (not connected) because...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="z.max_rate"></setting></td>
            <td class="description-cell">Z axis: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical d...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.microsteps"></setting></td>
            <td class="description-cell">Microstepping subdivision setting for the Z axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother moti...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.reversed"></setting></td>
            <td class="description-cell">Z axis: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to addi...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.slaved_to"></setting></td>
            <td class="description-cell">Z axis: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved t...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.step_pin"></setting></td>
            <td class="description-cell">Z axis: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one mic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="z.steps_per_mm"></setting></td>
            <td class="description-cell">Z axis: Number of motor steps required to move one millimeter on the Z axis. This is the most critical calibration setting as it defines the relations...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Current Control</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_current"></setting></td>
            <td><setting no-version v2="alpha.current"></setting></td>
            <td class="description-cell">Sets the motor current for the alpha axis (X axis in Cartesian machines) in Amperes. This setting controls how much current is delivered to the stepper motor driver. V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="alpha.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the alpha axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_current"></setting></td>
            <td><setting no-version v2="beta.current"></setting></td>
            <td class="description-cell">Sets the motor current for the beta axis (Y axis in Cartesian machines) in Amperes. This setting controls how much current is delivered to the stepper motor driver. V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="beta.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the beta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_current"></setting></td>
            <td><setting no-version v2="gamma.current"></setting></td>
            <td class="description-cell">Sets the motor current for the gamma axis (Z axis in Cartesian machines) in Amperes. This setting controls how much current is delivered to the stepper motor driver. V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="gamma.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the gamma axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_current"></setting></td>
            <td><setting no-version v2="delta.current"></setting></td>
            <td class="description-cell">Sets the motor current for the delta axis (A axis, typically first extruder E0 on 3D printers, or rotary A axis on CNC machines) in Amperes. This setting controls how much current is delivered to the stepper motor driver. V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="delta.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the delta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_current"></setting></td>
            <td><setting no-version v2="epsilon.current"></setting></td>
            <td class="description-cell">Sets the motor current for the epsilon axis (B axis, typically second extruder E1 on 3D printers, or rotary B axis on CNC machines) in Amperes. V1 default is -1 (disabled) since epsilon is not standard on v1 boards. V2 Prime boards have only first four axes (XYZA) with onboard TMC drivers; epsilon typically uses external driver.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="epsilon.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the epsilon axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="zeta.current"></setting></td>
            <td class="description-cell">Sets the motor current for the zeta axis (C axis, typically third extruder E2 on 3D printers, or rotary C axis on CNC machines) in Amperes. No V1 equivalent. V2 Prime boards have only first four axes (XYZA) with onboard TMC drivers; zeta typically uses external driver.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="zeta.pin"></setting></td>
            <td class="description-cell">PWM pin for controlling the zeta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA). Most Smoothieboard configurations do not use this setting.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Endstops</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_trim_mm"></setting></td>
            <td><setting no-version v2="common.alpha_trim_mm"></setting></td>
            <td class="description-cell">Fine-tune trim adjustment for the X tower (on deltas) or X axis (on Cartesian machines) to compensate for mechanical variations in tower lengths, carr...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_trim_mm"></setting></td>
            <td><setting no-version v2="common.beta_trim_mm"></setting></td>
            <td class="description-cell">Fine-tune trim adjustment for the Y tower (on deltas) or Y axis (on Cartesian machines) to compensate for mechanical variations. Similar to alpha_trim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_trim_mm"></setting></td>
            <td><setting no-version v2="common.gamma_trim_mm"></setting></td>
            <td class="description-cell">Fine-tune trim adjustment for the Z tower (on deltas) or Z axis (on Cartesian machines) to compensate for mechanical variations. Similar to alpha_trim_mm and beta_trim_mm but applies to the Z/gamma actuator. Essential for achieving bed levelness on delta printers by adjusting effective tower heights.</td>
        </tr>
        <tr>
            <td><setting no-version v1="corexy_homing"></setting></td>
            <td><setting no-version v2="common.corexy_homing"></setting></td>
            <td class="description-cell">Enables CoreXY-specific homing behavior where X and Y axes must home sequentially rather than simultaneously due to the crossed-belt kinematics. When...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_homing"></setting></td>
            <td><setting no-version v2="common.delta_homing"></setting></td>
            <td class="description-cell">Enables linear delta-specific homing behavior where all three towers home simultaneously as a single &quot;Z&quot; axis operation due to the delta kinematics. W...</td>
        </tr>
        <tr>
            <td><setting no-version v1="rdelta_homing"></setting></td>
            <td><setting no-version v2="common.rdelta_homing"></setting></td>
            <td class="description-cell">Enables rotary delta-specific homing behavior for delta robots with rotational joints instead of linear carriages. Rotary deltas use angular endstops and theta offset calibration (M306) rather than linear position, requiring different homing calculations and position tracking.</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.axis"></setting></td>
            <td><setting no-version v2="maxx.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.enable"></setting></td>
            <td><setting no-version v2="maxx.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.fast_rate"></setting></td>
            <td><setting no-version v2="maxx.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.homing_direction"></setting></td>
            <td><setting no-version v2="maxx.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.homing_position"></setting></td>
            <td><setting no-version v2="maxx.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.limit_enable"></setting></td>
            <td><setting no-version v2="maxx.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.max_travel"></setting></td>
            <td><setting no-version v2="maxx.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.pin"></setting></td>
            <td><setting no-version v2="maxx.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.retract"></setting></td>
            <td><setting no-version v2="maxx.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxx.slow_rate"></setting></td>
            <td><setting no-version v2="maxx.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.axis"></setting></td>
            <td><setting no-version v2="maxy.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.enable"></setting></td>
            <td><setting no-version v2="maxy.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.fast_rate"></setting></td>
            <td><setting no-version v2="maxy.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.homing_direction"></setting></td>
            <td><setting no-version v2="maxy.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.homing_position"></setting></td>
            <td><setting no-version v2="maxy.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.limit_enable"></setting></td>
            <td><setting no-version v2="maxy.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.max_travel"></setting></td>
            <td><setting no-version v2="maxy.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.pin"></setting></td>
            <td><setting no-version v2="maxy.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.retract"></setting></td>
            <td><setting no-version v2="maxy.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxy.slow_rate"></setting></td>
            <td><setting no-version v2="maxy.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.axis"></setting></td>
            <td><setting no-version v2="maxz.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.enable"></setting></td>
            <td><setting no-version v2="maxz.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.fast_rate"></setting></td>
            <td><setting no-version v2="maxz.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.homing_direction"></setting></td>
            <td><setting no-version v2="maxz.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.homing_position"></setting></td>
            <td><setting no-version v2="maxz.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.limit_enable"></setting></td>
            <td><setting no-version v2="maxz.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.max_travel"></setting></td>
            <td><setting no-version v2="maxz.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.pin"></setting></td>
            <td><setting no-version v2="maxz.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.retract"></setting></td>
            <td><setting no-version v2="maxz.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.maxz.slow_rate"></setting></td>
            <td><setting no-version v2="maxz.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.axis"></setting></td>
            <td><setting no-version v2="minx.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.enable"></setting></td>
            <td><setting no-version v2="minx.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.fast_rate"></setting></td>
            <td><setting no-version v2="minx.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.homing_direction"></setting></td>
            <td><setting no-version v2="minx.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.homing_position"></setting></td>
            <td><setting no-version v2="minx.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.limit_enable"></setting></td>
            <td><setting no-version v2="minx.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.max_travel"></setting></td>
            <td><setting no-version v2="minx.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.pin"></setting></td>
            <td><setting no-version v2="minx.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.retract"></setting></td>
            <td><setting no-version v2="minx.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minx.slow_rate"></setting></td>
            <td><setting no-version v2="minx.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.axis"></setting></td>
            <td><setting no-version v2="miny.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.enable"></setting></td>
            <td><setting no-version v2="miny.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.fast_rate"></setting></td>
            <td><setting no-version v2="miny.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.homing_direction"></setting></td>
            <td><setting no-version v2="miny.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.homing_position"></setting></td>
            <td><setting no-version v2="miny.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.limit_enable"></setting></td>
            <td><setting no-version v2="miny.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.max_travel"></setting></td>
            <td><setting no-version v2="miny.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.pin"></setting></td>
            <td><setting no-version v2="miny.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.retract"></setting></td>
            <td><setting no-version v2="miny.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.miny.slow_rate"></setting></td>
            <td><setting no-version v2="miny.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.axis"></setting></td>
            <td><setting no-version v2="minz.axis"></setting></td>
            <td class="description-cell">Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.enable"></setting></td>
            <td><setting no-version v2="minz.enable"></setting></td>
            <td class="description-cell">Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.fast_rate"></setting></td>
            <td><setting no-version v2="minz.fast_rate"></setting></td>
            <td class="description-cell">Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.homing_direction"></setting></td>
            <td><setting no-version v2="minz.homing_direction"></setting></td>
            <td class="description-cell">Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specifie...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.homing_position"></setting></td>
            <td><setting no-version v2="minz.homing_position"></setting></td>
            <td class="description-cell">Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.limit_enable"></setting></td>
            <td><setting no-version v2="minz.limit_enable"></setting></td>
            <td class="description-cell">Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the e...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.max_travel"></setting></td>
            <td><setting no-version v2="minz.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.pin"></setting></td>
            <td><setting no-version v2="minz.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and lim...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.retract"></setting></td>
            <td><setting no-version v2="minz.retract"></setting></td>
            <td class="description-cell">Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the en...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop.minz.slow_rate"></setting></td>
            <td><setting no-version v2="minz.slow_rate"></setting></td>
            <td class="description-cell">Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="home_z_first"></setting></td>
            <td><setting no-version v2="common.home_z_first"></setting></td>
            <td class="description-cell">When true, forces Z axis to home before X and Y axes, without requiring full sequential ordering via homing_order. This is a simplified alternative to...</td>
        </tr>
        <tr>
            <td><setting no-version v1="homing_order"></setting></td>
            <td><setting no-version v2="common.homing_order"></setting></td>
            <td class="description-cell">Specifies the order in which axes home when multiple axes are requested. When set, axes home sequentially in the specified order, waiting for each axi...</td>
        </tr>
        <tr>
            <td><setting no-version v1="move_to_origin_after_home"></setting></td>
            <td><setting no-version v2="common.move_to_origin_after_home"></setting></td>
            <td class="description-cell">When true, automatically moves the machine to coordinate position 0,0 (and 0,0,0 for deltas) after homing completes successfully. This provides a cons...</td>
        </tr>
        <tr>
            <td><setting no-version v1="scara_homing"></setting></td>
            <td><setting no-version v2="common.scara_homing"></setting></td>
            <td class="description-cell">Enables SCARA robot arm-specific homing behavior where the arm homes in actuator space (joint angles) rather than Cartesian space. During homing, the...</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop_debounce_count"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Number of consecutive reads required to confirm a limit switch trigger. This provides debouncing for limit switches (not homing endstops). V2 uses time-based debouncing instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="endstops_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Master enable switch for the traditional root-level endstop configuration method (Method 1). When set to true, Smoothieware will load endstop configuration from root-level settings. In V2, endstops are always enabled if configured.</td>
        </tr>
        <tr>
            <td><setting no-version v1="park_after_home"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">If enabled, moves to a predefined park position after homing instead of moving to origin. The park position is set using G28.1. Not documented in V2.</td>
        </tr>
            <td colspan="3" class="module-header">Extruder</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.enable"></setting></td>
            <td><setting no-version v2="extruder.hotend.enable"></setting></td>
            <td class="description-cell">Whether to activate this extruder instance. All configuration is ignored if false. Each enabled extruder creates a separate extruder module instance that can be independently controlled. Multiple extruders can be enabled by creating multiple instances with different names. Each enabled extruder must have valid step_pin, dir_pin, and en_pin configured. Tool selection is done via T0, T1, T2, etc. commands.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.filament_diameter"></setting></td>
            <td><setting no-version v2="extruder.hotend.filament_diameter"></setting></td>
            <td class="description-cell">Filament diameter in millimeters for volumetric extrusion mode. When set to a value greater than 0.01mm, enables volumetric extrusion where E values in G-code are interpreted as cubic millimeters of filament volume rather than linear millimeters of filament length. Set to 0 to disable volumetric mode (most common). This feature allows slicers to specify extrusion in terms of material volume, which can be useful for certain applications.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_feedrate"></setting></td>
            <td class="description-cell">Firmware retraction speed in millimeters per second when G10 (firmware retract) command is executed. Controls how quickly the filament is pulled back during retraction operations. This is distinct from slicer-controlled retractions which use E axis moves. Firmware retraction allows the printer to manage retraction settings independently of slicer settings, useful when the same G-code needs to work with different retraction parameters. Default is 45 mm/s (2700 mm/min). Lower speeds (30 mm/s) are more conservative and reduce risk of grinding filament.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_length"></setting></td>
            <td class="description-cell">Firmware retraction length in millimeters when G10 (firmware retract) command is executed. This is the amount of filament to retract from the hotend to prevent oozing during travel moves. Direct drive extruders typically use 1-3mm (1.5mm common), while Bowden extruders require longer retractions of 4-8mm (6mm common) due to tube flex. Too short causes stringing, too long can cause clogs or air gaps. Firmware retraction allows G10/G11 commands to manage retractions independently of slicer settings.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td class="description-cell">Firmware unretract (recover) speed in millimeters per second when G11 (firmware unretract) command is executed. Controls how quickly filament is pushed back into the hotend after a retraction to resume normal extrusion. This is typically much slower than retract_feedrate to allow the filament to properly remelt and establish pressure. Default is 8 mm/s (480 mm/min). Slower speeds (conservative) prevent grinding and ensure proper pressure recovery, while faster speeds (up to 25 mm/s) can reduce recovery time but may cause issues with some materials.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_length"></setting></td>
            <td class="description-cell">Additional filament length in millimeters to extrude during unretract (G11) beyond the original retract_length. This extra amount compensates for filament ooze that occurred during the travel move and ensures the nozzle has proper pressure when resuming extrusion. Total recovery distance is retract_length + retract_recover_length. Positive values extrude more filament than was retracted (compensating for ooze), negative values extrude less. Most common value is 0 (exact recovery). Typical range is -0.5 to +0.5mm, with +0.2mm being common when slight over-recovery is needed to prevent gaps after travel moves.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td class="description-cell">Z-axis movement speed during firmware retraction Z-lift operations in millimeters per minute. Controls how quickly the Z-axis lifts during G10 (retract with Z-hop) and lowers during G11 (recover). Only used when retract_zlift_length is greater than 0. Default is 6000 mm/min (100 mm/s). Fast printers like deltas can use higher speeds (9000 mm/min = 150 mm/s). Should be within the Z-axis max_speed capability. Z-hop reduces nozzle collisions with printed parts during travel moves.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_length"></setting></td>
            <td class="description-cell">Z-axis lift (hop) distance in millimeters during firmware retraction. When set to a value greater than 0, the Z-axis will lift by this amount during G10 (retract) and lower back during G11 (unretract). This "Z-hop" moves the nozzle vertically away from the print during travel moves to avoid dragging across or colliding with already-printed features. Most commonly set to 0 (disabled) as it adds time to every retraction. When enabled, typical values are 0.2-0.5mm - just enough clearance to avoid collisions without excessive Z movement. Useful for prints with many small features or when printing materials prone to warping.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="extruder.hotend.tool_id"></setting></td>
            <td class="description-cell">Tool number identifier for this extruder instance. Used for tool selection with T commands (T0, T1, etc.) and M6 tool change commands. The tool_id determines which T command activates this extruder. In v1, tool IDs were implicitly assigned based on the order extruders were defined. v2 makes this explicit, allowing more flexible tool numbering and better multi-tool support.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.x_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.x_offset"></setting></td>
            <td class="description-cell">X-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to define the physical horizontal spacing between nozzles. When a tool change command (T1, T2, etc.) is executed, this offset is applied to all X coordinates to compensate for the nozzle position difference. The offset is relative to T0 (first extruder), which should have x_offset = 0. Measure from T0 nozzle tip to secondary nozzle tip. Positive values indicate the secondary nozzle is to the right of T0, negative values indicate left. Precise calibration is critical for proper multi-color or multi-material prints to ensure layers align correctly.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.y_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.y_offset"></setting></td>
            <td class="description-cell">Y-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to define the physical front-to-back spacing between nozzles. When a tool change command (T1, T2, etc.) is executed, this offset is applied to all Y coordinates. The offset is relative to T0 (first extruder), which should have y_offset = 0. Measure from T0 nozzle tip to secondary nozzle tip. Positive values indicate the secondary nozzle is towards the back (away from front), negative towards front. Accurate calibration ensures proper layer alignment in multi-material prints.</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.z_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.z_offset"></setting></td>
            <td class="description-cell">Z-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to compensate for height differences between nozzles. When different extruders have nozzles at slightly different heights (due to manufacturing tolerances or intentional design), this offset ensures proper layer height for each tool. The offset is relative to T0 (first extruder), which should have z_offset = 0. Positive values indicate the secondary nozzle is higher than T0 (needs to move down more), negative values indicate lower (needs to move down less). Critical for achieving consistent layer heights when switching between extruders. Calibrate using a paper test or by printing test patterns.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Extruder Module</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.acceleration"></setting></td>
            <td><setting no-version v2="extruder.hotend.acceleration"></setting></td>
            <td class="description-cell">Maximum acceleration for the extruder stepper motor in mm/s². Controls how quickly the extruder can change speed during extrusion moves. Higher values...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.dir_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.dir_pin"></setting></td>
            <td class="description-cell">Pin for the extruder stepper motor driver's direction signal. Controls whether the motor rotates forward (extrude filament) or backward (retract filam...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.en_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.en_pin"></setting></td>
            <td class="description-cell">Pin for the extruder stepper motor driver's enable signal. When active, the motor driver is powered and holds position with full torque. When inactive...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.enable"></setting></td>
            <td><setting no-version v2="extruder.hotend.enable"></setting></td>
            <td class="description-cell">Whether to activate this extruder instance. All configuration is ignored if false. Each enabled extruder creates a separate extruder module instance t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.filament_diameter"></setting></td>
            <td><setting no-version v2="extruder.hotend.filament_diameter"></setting></td>
            <td class="description-cell">Filament diameter in millimeters for volumetric extrusion mode. When set to a value greater than 0.01mm, enables volumetric extrusion where E values i...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.max_speed"></setting></td>
            <td><setting no-version v2="extruder.hotend.max_speed"></setting></td>
            <td class="description-cell">Maximum allowable speed for the extruder stepper motor in mm/s. This is the absolute speed limit for filament movement. The firmware will never move t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_feedrate"></setting></td>
            <td class="description-cell">Speed at which filament is retracted during firmware retraction in mm/s. Used by G10 command. This is stored and used internally in mm/s, but the M207...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_length"></setting></td>
            <td class="description-cell">Amount of filament to retract during firmware retraction in millimeters. Used by G10 (retract) and G11 (unretract) commands. Retraction pulls filament...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td class="description-cell">Speed at which filament is recovered (unretracted) during firmware unretraction in mm/s. Used by G11 command. This is stored and used internally in mm...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_length"></setting></td>
            <td class="description-cell">Additional length of filament to extrude when recovering (unretract) beyond the retracted amount. Used by G11 command. Total recover distance = retrac...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td class="description-cell">Speed for Z-axis movement during Z-lift operations in mm/min. Used for both lifting (during G10) and lowering (during G11) moves when retract_zlift_le...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_length"></setting></td>
            <td class="description-cell">Amount to lift the Z-axis during retraction in millimeters (Z-hop or Z-lift feature). When G10 is executed, the nozzle lifts by this amount after retr...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.step_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.step_pin"></setting></td>
            <td class="description-cell">Pin for the extruder stepper motor driver's step signal. Each step pulse moves the motor one microstep according to the driver's microstepping configu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.steps_per_mm"></setting></td>
            <td><setting no-version v2="extruder.hotend.steps_per_mm"></setting></td>
            <td class="description-cell">Number of stepper motor steps required to move one millimeter of filament through the extruder. This critical calibration value depends on your steppe...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.x_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.x_offset"></setting></td>
            <td class="description-cell">X-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for physical n...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.y_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.y_offset"></setting></td>
            <td class="description-cell">Y-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for physical n...</td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.z_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend.z_offset"></setting></td>
            <td class="description-cell">Z-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for different...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">General/System</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="aux_play_led"></setting></td>
            <td class="description-cell">Optional secondary play LED pin that mirrors the main play LED state. Useful for lighted kill buttons, external status indicators, or remote control panels that need to show when the machine is running (playing G-code from SD card) or idle. The LED turns on when actively executing G-code and turns off when idle or paused. This is in addition to the primary play LED on the board itself.</td>
        </tr>
        <tr>
            <td><setting no-version v1="uart0.baud_rate"></setting></td>
            <td><setting no-version v2="baudrate"></setting></td>
            <td class="description-cell">UART communication speed in bits per second. Must match the baudrate configured on the connected device. Higher baudrates allow faster communication and G-code streaming. V1 setting applies to UART0 (primary serial port), while V2 allows per-UART configuration.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="bits"></setting></td>
            <td class="description-cell">Number of data bits per character transmitted over UART. Standard serial communication uses 8 bits, which can represent 256 different values (0-255) per character. This should match the configuration of the device you're communicating with.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="channel"></setting></td>
            <td class="description-cell">UART hardware channel number to use. Different boards support different numbers of UART channels. Channel 0 is typically the primary debug UART. The Smoothieboard supports multiple UART channels with different pin assignments.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="config-override"></setting></td>
            <td class="description-cell">Enables config-override functionality allowing runtime configuration changes to be saved with M500 and loaded automatically on boot. When enabled, settings can be overridden and persisted without modifying the main config.ini file. Unlike v1 where the override file was always active if present, v2 requires explicit enabling of this feature.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="console"></setting></td>
            <td class="description-cell">Use the UART as a console interface for sending and receiving commands, versus using it for raw data transmission. When true, the UART behaves like the USB serial console, accepting G-code commands and providing response messages.</td>
        </tr>
        <tr>
            <td><setting no-version v1="dfu_enable"></setting></td>
            <td><setting no-version v2="dfu_enable"></setting></td>
            <td class="description-cell">Enable DFU (Device Firmware Update) mode for developers. When enabled, the board can enter DFU mode for low-level firmware flashing via USB without needing the SD card bootloader. This is primarily for firmware developers and advanced users who need to flash firmware directly to the microcontroller's internal flash memory. Disabled by default for safety to prevent accidental bricking of the board.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="enable"></setting></td>
            <td class="description-cell">Enable UART console for serial communication over hardware UART pins. When enabled, the board can communicate via a dedicated UART channel in addition to USB serial, allowing simultaneous connections or communication with other microcontrollers.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="fets_enable_pin"></setting></td>
            <td class="description-cell">Global enable pin for all FETs (Field Effect Transistors) controlling heaters, fans, and other high-power outputs. This is typically a NOT-enable signal (active low) that controls power to all output FETs. When this pin is high (disabled), all FET outputs are turned off as a safety measure. Both this pin and fets_power_enable_pin must be in the correct state for FETs to operate.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="fets_power_enable_pin"></setting></td>
            <td class="description-cell">Global power enable pin for FETs. This is typically an active high enable signal that controls the power supply to all FET circuits. On the Prime board, this controls a separate power rail that supplies the FET drivers. Both this pin and fets_enable_pin must be in the correct state for FETs to operate. This dual-control approach provides enhanced safety by requiring two independent signals for high-power output operation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="flash_on_boot"></setting></td>
            <td class="description-cell">Automatically flash firmware from flashme.bin file if present on SD card at boot. When enabled, the system checks for a valid flashme.bin file on startup and automatically performs the firmware update if found. The file is renamed to flashme.old after successful flashing. Disable this if you want manual control over firmware updates or if automatic updates interfere with your workflow.</td>
        </tr>
        <tr>
            <td><setting no-version v1="grbl_mode"></setting></td>
            <td><setting no-version v2="grbl_mode"></setting></td>
            <td class="description-cell">Enables GRBL compatibility mode for CNC applications. When enabled, the firmware responds with GRBL-style status messages and command acknowledgments, making it compatible with GRBL-based software and sender applications like bCNC, Universal G-code Sender, and similar CNC control programs. This mode changes how certain G-codes are interpreted and how responses are formatted to match GRBL's behavior.</td>
        </tr>
        <tr>
            <td><setting no-version v1="msd_disable"></setting></td>
            <td><setting no-version v2="msc_enable"></setting></td>
            <td class="description-cell">Enable Mass Storage Class mode which allows the SD card to be accessed as a USB drive when connected to a computer. When enabled, you can drag and drop files directly to the board's SD card without removing it. NOTE: V1 setting is inverted (msd_disable) and requires special firmware to function, while V2 uses standard msc_enable logic and is enabled by default.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="msc_led"></setting></td>
            <td class="description-cell">LED that flashes when the board is in Mass Storage Class mode and the SD card is being accessed. Provides visual feedback when the SD card is being read or written via USB, warning you not to disconnect the cable during file operations. The LED flashes rapidly during active transfers and stays off when no transfers are occurring. Only used when msc_enable is true.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="parity"></setting></td>
            <td class="description-cell">Parity checking mode for error detection. "none" means no parity bit is added, maximizing data throughput. "odd" and "even" add an extra bit to make the total number of 1-bits odd or even respectively, allowing detection of single-bit errors. Must match the parity setting of the connected device.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">Sets the PWM frequency for hardware PWM timer 1 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels. All channels on the same timer share the same frequency. Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control).</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm2.frequency"></setting></td>
            <td class="description-cell">Sets the PWM frequency for hardware PWM timer 2 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels. All channels on the same timer share the same frequency. Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control).</td>
        </tr>
        <tr>
            <td><setting no-version v1="second_usb_serial_enable"></setting></td>
            <td><setting no-version v2="second_usb_serial_enable"></setting></td>
            <td class="description-cell">Enable a second USB serial console port for simultaneous connections. When enabled, the board presents two USB serial interfaces (composite device), allowing both a host application (like Pronterface) and a terminal to be connected at the same time. Both ports share the same USB connection but appear as separate COM/tty devices to the host operating system.</td>
        </tr>
        <tr>
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="step_frequency"></setting></td>
            <td class="description-cell">Maximum step generation frequency in Hertz. This is the theoretical maximum rate at which the firmware can generate step pulses across all motors, based on MCU speed and firmware overhead. The actual achievable speed depends on this frequency, microstepping, and steps per millimeter. V1 default is 100kHz, V2 default is 200kHz (50kHz in debug builds).</td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="step_pulse_us"></setting></td>
            <td class="description-cell">Duration of the step pulse sent to stepper drivers in microseconds. This controls how long the STEP signal remains high before returning low. Increase this value if stepper motors are missing steps, behaving erratically, or making unusual noises. Most modern stepper drivers work fine with 1µs pulses, but older drivers may require 2-3µs pulses for reliable operation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="stop_bits"></setting></td>
            <td class="description-cell">Number of stop bits appended after each character. Stop bits provide synchronization time between characters, allowing the receiver to prepare for the next character. Most modern serial communication uses 1 stop bit, though 2 stop bits can be used for slower or noisier communication links.</td>
        </tr>
            <td colspan="3" class="module-header">Laser Module</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_enable"></setting></td>
            <td><setting no-version v2="laser.enable"></setting></td>
            <td class="description-cell">Controls whether the laser module is activated in Smoothieware. When set to false, the module is completely unloaded to free system resources. When enabled, the laser module will be loaded and available for G-code control.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">Legacy parameter that specifies the pin controlling the laser through PWM (Pulse Width Modulation). This setting has been superseded by `laser_module_pwm_pin` for improved clarity. If this pin is not connected, the system will check `laser_module_pwm_pin` instead. Only specific pins on the Smoothieboard support hardware PWM required for laser control.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">The preferred and more descriptive parameter for specifying the PWM control pin for the laser. This pin controls laser power through pulse width modulation with 0-100% duty cycle capability. The firmware validates that the specified pin supports hardware PWM. The pin's PWM period is configured via `laser_module_pwm_period` setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_ttl_pin"></setting></td>
            <td><setting no-version v2="laser.ttl_pin"></setting></td>
            <td class="description-cell">Specifies an optional TTL (Transistor-Transistor Logic) control pin that provides a simple on/off signal synchronized with laser firing. This pin switches high when laser is firing and low when off. This provides a secondary digital signal separate from the PWM control, commonly used for controlling laser power supply enable or external safety interlocks.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_period"></setting></td>
            <td><setting no-version v2="pwm.pwm1.frequency"></setting></td>
            <td class="description-cell">Sets the PWM period (and thus frequency) for laser control in microseconds. The PWM frequency equals 1,000,000 divided by this period value. This frequency must be appropriate for the connected laser - lasers typically use 10-50 kHz. Note: v2 uses frequency directly in Hz (e.g., 10000 for 10 kHz) while v1 uses period in microseconds (e.g., 100 for 10 kHz).</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_power"></setting></td>
            <td><setting no-version v2="laser.maximum_power"></setting></td>
            <td class="description-cell">Sets the maximum PWM duty cycle that will be applied to the laser, acting as both a safety limit and calibration parameter. This value represents the maximum laser power as a duty cycle fraction where 0.0 = 0% and 1.0 = 100%. The actual laser power is scaled by this value, so setting it below 1.0 limits maximum output even when G-code requests full power.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_minimum_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">Sets the minimum PWM duty cycle (baseline power) for the laser during travel moves and as a floor for all laser operations. This is particularly useful for certain CO2 lasers that benefit from a small minimum power (e.g., 0.05) to maintain plasma stability and reduce startup delay. Some CO2 lasers benefit from this keepalive power, but most lasers should use 0.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_s_value"></setting></td>
            <td><setting no-version v2="laser.maximum_s_value"></setting></td>
            <td class="description-cell">Defines the S-value in G-code that represents maximum laser power (100%). This scaling parameter allows you to use different S-value ranges in your G-code. For example, setting this to 100 means S100 = full power, while setting it to 1.0 means S1.0 = full power, and 255 means S255 = full power. This maps G-code S parameters to laser power percentage.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">Default laser power when no S parameter is specified in G-code. When a G1/G2/G3 move is issued without an S parameter, this power level will be used. This value represents the power as a duty cycle fraction where 0.0 = 0% and 1.0 = 100%.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_proportional_power"></setting></td>
            <td><setting no-version v2="laser.proportional_power"></setting></td>
            <td class="description-cell">Enables or disables automatic power scaling based on actual instantaneous movement speed. When enabled (default), the laser power is continuously adjusted during acceleration and deceleration proportional to the actual speed vs. requested speed. This ensures constant energy per distance traveled, resulting in more uniform cutting/engraving even through curves and corners where the machine must slow down.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_tickle_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">This parameter has been deprecated and replaced by `laser_module_minimum_power`. It originally set a small baseline amount of power to keep the laser "tickled" during operations. This setting will be used as the default value for `laser_module_minimum_power` when that setting is not explicitly specified, but you should migrate to using `laser_module_minimum_power` for all new configurations. Same functionality as `laser_module_minimum_power` - sets baseline laser power.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Laser/Spindle/Tools</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_enable"></setting></td>
            <td><setting no-version v2="laser.enable"></setting></td>
            <td class="description-cell">Enable the laser control module. When set to true, the laser module will be loaded and available for G-code control. When false, the module is not loaded and its resources are freed. In v1, this completely unloads the module to free system resources.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_pin"></setting></td>
            <td><setting no-version v2="laser.pwm_pin"></setting></td>
            <td class="description-cell">PWM output pin for laser power control with 0-100% duty cycle capability. The firmware validates that the specified pin is a valid PWM pin during configuration. In v1, there was also the deprecated laser_module_pin parameter that served the same purpose.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_ttl_pin"></setting></td>
            <td><setting no-version v2="laser.ttl_pin"></setting></td>
            <td class="description-cell">TTL on/off signal pin that outputs high when laser is firing and low when off. This provides a secondary digital signal separate from the PWM control, commonly used for controlling laser power supply enable pins, air assist systems, or external safety interlocks.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="laser.inverted_pwm"></setting></td>
            <td class="description-cell">Invert the PWM signal polarity where high duty cycle means laser off and low duty cycle means laser on. When false (normal operation), higher PWM duty cycle = more laser power. When true (inverted), higher PWM duty cycle = less laser power. This is required for some laser drivers that are active-low. New in v2.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="laser.pullup"></setting></td>
            <td class="description-cell">Enable internal pullup resistor on PWM pin. When true, the pin is pulled high by an internal resistor (typically 40-50kΩ). This is useful for ensuring a defined signal level when the pin is not actively driven. Disable if using external pullup or pulldown resistors to avoid conflicts. New in v2.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="laser.opendrain"></setting></td>
            <td class="description-cell">Configure PWM pin as open-drain output instead of push-pull. In open-drain mode, the pin can pull low but cannot actively drive high (requires external pullup). This is useful for logic level shifting or when controlling external transistor circuits. New in v2.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_power"></setting></td>
            <td><setting no-version v2="laser.maximum_power"></setting></td>
            <td class="description-cell">Maximum laser power as duty cycle fraction where 0.0 = 0% and 1.0 = 100%. This acts as a safety limit and calibration factor. The actual laser power is scaled by this value, so setting it below 1.0 limits maximum output even when G-code requests full power. Useful for preventing damage and extending laser life.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_minimum_power"></setting></td>
            <td><setting no-version v2="laser.minimum_power"></setting></td>
            <td class="description-cell">Minimum power to keep laser active during cutting operations, also known as "tickle power". This provides a baseline power level that keeps laser diodes thermally stable by preventing complete shutoff. In v1, this was also configured via the deprecated laser_module_tickle_power parameter.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_maximum_s_value"></setting></td>
            <td><setting no-version v2="laser.maximum_s_value"></setting></td>
            <td class="description-cell">Maximum S value in G-code that represents full power. This setting maps G-code S parameters to laser power percentages. For example, with maximum_s_value=1.0, "S0.5" requests 50% power. With maximum_s_value=255, "S127" requests approximately 50% power. Allows compatibility with different CAM software conventions.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">Default laser power when no S parameter is specified in G-code. When a G1/G2/G3 move is issued without an S value, this power level is used. The value represents a fraction of maximum power (0.0-1.0).</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_proportional_power"></setting></td>
            <td><setting no-version v2="laser.proportional_power"></setting></td>
            <td class="description-cell">Enable automatic power scaling based on actual velocity to maintain consistent cut/engrave depth during acceleration and deceleration. When enabled, laser power is automatically reduced during speed changes proportional to actual speed versus nominal speed, preventing overburning at corners.</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_pwm_period"></setting></td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">In v1, sets the PWM period in microseconds (default 20µs = 50kHz). In v2, this is configured via the pwm1.frequency or pwm2.frequency settings. The PWM frequency affects how smoothly the laser power can be controlled and must be appropriate for your specific laser driver electronics.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Switch Module (Generic GPIO/PWM Control)</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.enable"></setting></td>
            <td><setting no-version v2="switch.<name>.enable"></setting></td>
            <td class="description-cell">Enable this switch instance. When true, the switch is loaded and available for G-code control or input monitoring. When false, the switch instance is disabled but configuration is preserved. Each switch requires a unique name.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_on_command"></setting></td>
            <td class="description-cell">G-code or M-code that turns this switch ON. When this command is received, the switch activates (turns on digital output, starts PWM, or sets high state). Supports subcode matching for multiple switches on the same command.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_off_command"></setting></td>
            <td class="description-cell">G-code or M-code that turns this switch OFF. When this command is received, the switch deactivates (turns off digital output, stops PWM, or sets low state). Supports subcode matching for multiple switches on the same command.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.<name>.subcode"></setting></td>
            <td class="description-cell">Subcode filter for commands to allow multiple switches on the same M-code. For example, M106.0 and M106.1 can control two different fans using subcode 0 and 1. Subcode 0 is the default and matches commands without explicit subcodes.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.<name>.output_pin"></setting></td>
            <td class="description-cell">Output pin to control for this switch. The pin type and capabilities must match the output_type setting. For digital output, any GPIO pin works. For sigmadeltapwm, any GPIO works. For hwpwm, only PWM-capable pins are valid.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.<name>.output_type"></setting></td>
            <td class="description-cell">Type of output control for this switch. Determines how the output pin is driven and what control methods are available. Options: digital (simple on/off), pwm/sigmadeltapwm (software PWM 0-255), hwpwm (hardware PWM 0-100%), swpwm (software timer PWM 0-100%).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_state"></setting></td>
            <td class="description-cell">Initial state when firmware boots. For digital outputs, this is simply on (true) or off (false). For PWM outputs, this determines whether default_on_value or startup_value is used at boot. Overridden by input pin state for input-driven switches.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_value"></setting></td>
            <td class="description-cell">Initial PWM duty cycle or value at firmware startup. For sigmadeltapwm, this is 0-255 (default: max_pwm value). For hwpwm, this is 0-100 percent (default: 0). For swpwm, this is 0-100 percent (default: 0). Used when startup_state is false or switch is OFF.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.<name>.default_on_value"></setting></td>
            <td class="description-cell">Default duty cycle when turned on without explicit value (HWPWM and SWPWM only). When the input_on_command is received without S or P parameters, this value is used. For example, plain M106 instead of M106 S50. Ignored for digital and sigmadelta PWM types.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.<name>.max_pwm"></setting></td>
            <td class="description-cell">Maximum PWM value for sigmadelta PWM output, acting as a scaling factor. Values sent via S parameter in G-code are scaled: S255 → max_pwm, S128 → max_pwm/2, etc. Default is 255. Only applies to sigmadelta PWM type, not hwpwm or swpwm.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.<name>.failsafe_set_to"></setting></td>
            <td class="description-cell">State to set output to on system fault or debug halt conditions. When true, output is set high/on during fault. When false, output is set low/off during fault. Provides safety behavior for critical outputs like spindles or heaters. New in v2.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.<name>.halt_set_to"></setting></td>
            <td class="description-cell">State to set output to when HALT condition occurs (M112 emergency stop, limit switch trigger, kill button press, etc.). When true, output is set high/on. When false, output is set low/off. Provides emergency stop behavior. New in v2.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="switch.<name>.ignore_on_halt"></setting></td>
            <td class="description-cell">If true, do not change output state on HALT, ignoring the halt_set_to setting. This allows certain outputs (like enclosure lights or alarms) to maintain their state during emergency stop. Automatically set to true for input-pin-driven switches. New in v2.</td>
        </tr>
            <td colspan="3" class="module-header">Miscellaneous/Root Settings</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_current"></setting></td>
            <td><setting no-version v2="current control.alpha.current"></setting></td>
            <td class="description-cell">Current setting for the first stepper motor driver (M1), channel 0 of the digipot. On Cartesian machines, this is typically the X axis. Current is spe...</td>
        </tr>
        <tr>
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="system.step_frequency"></setting></td>
            <td class="description-cell">Sets the base frequency of the step ticker in Hz. This is the fundamental rate at which the step generation interrupt runs. All step generation is der...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_current"></setting></td>
            <td><setting no-version v2="current control.beta.current"></setting></td>
            <td class="description-cell">Current setting for the second stepper motor driver (M2), channel 1 of the digipot. On Cartesian machines, this is typically the Y axis. All current s...</td>
        </tr>
        <tr>
            <td><setting no-version v1="currentcontrol_module_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Enables digital control of stepper motor driver currents via digipot chip. When enabled, allows software configuration of motor currents through the d...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_current"></setting></td>
            <td><setting no-version v2="current control.delta.current"></setting></td>
            <td class="description-cell">Current setting for the fourth stepper motor driver (M4), channel 3 of the digipot. Common assignments: on delta machines this would be one of the tow...</td>
        </tr>
        <tr>
            <td><setting no-version v1="dfu_enable"></setting></td>
            <td><setting no-version v2="system.dfu_enable"></setting></td>
            <td class="description-cell">For Linux developers: enables DFU (Device Firmware Update) mode, which allows you to flash new firmware over USB without requiring a physical bootload...</td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_factor"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.sense_resistor"></setting></td>
            <td class="description-cell">Conversion factor for translating current values (in amperes) to digipot wiper positions (0-255). This is hardware-specific and depends on the sense r...</td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_max_current"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.max_current"></setting></td>
            <td class="description-cell">Maximum current in amperes that can be set for any motor. This is a safety limit that prevents setting currents higher than the hardware can safely ha...</td>
        </tr>
        <tr>
            <td><setting no-version v1="digipotchip"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Selects the digipot (digital potentiometer) chip used for current control. Different boards use different digipot chips, and this setting must match y...</td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Current setting for the fifth stepper motor driver (M5), channel 4 of the digipot. Default value of -1 disables this channel (treated specially at mcp...</td>
        </tr>
        <tr>
            <td><setting no-version v1="eta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Current setting for the seventh stepper motor driver current control, channel 6 of the digipot. Default value of -1 disables this channel. **CRITICAL:...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_current"></setting></td>
            <td><setting no-version v2="current control.gamma.current"></setting></td>
            <td class="description-cell">Current setting for the third stepper motor driver (M3), channel 2 of the digipot. On Cartesian machines, this is typically the Z axis. Z-axis often b...</td>
        </tr>
        <tr>
            <td><setting no-version v1="grbl_mode"></setting></td>
            <td><setting no-version v2="general.grbl_mode"></setting></td>
            <td class="description-cell">Enables GRBL compatibility mode. When enabled, the firmware behaves more like GRBL, changing error messages, command handling, and protocol responses ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_enable"></setting></td>
            <td><setting no-version v2="kill button.enable"></setting></td>
            <td class="description-cell">Enables the "kill" button functionality for emergency halt operations. When enabled, a physical button can be used to immediately halt all machine ope...</td>
        </tr>
        <tr>
            <td><setting no-version v1="kill_button_pin"></setting></td>
            <td><setting no-version v2="kill button.pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin to use for the kill button. The button should be wired between this pin and ground. The pin is configured as input with interna...</td>
        </tr>
        <tr>
            <td><setting no-version v1="leds_disable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Disables the 4 flashing status LEDs on the board. When set to true, all status indication LEDs are turned off, which can be useful for reducing visual...</td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">Duration of the step pulse in microseconds. This is the time that the step signal remains high before returning low. Some stepper drivers require a mi...</td>
        </tr>
        <tr>
            <td><setting no-version v1="msd_disable"></setting></td>
            <td><setting no-version v2="system.msc_enable"></setting></td>
            <td class="description-cell">Disables the MSD (Mass Storage Device) functionality when set to true. This prevents the SD card from appearing as a USB drive when connected to a com...</td>
        </tr>
        <tr>
            <td><setting no-version v1="ok_per_line"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Controls when "ok" responses are sent. When true (default and recommended), sends "ok" once per line of input. When false, reverts to the old (incorre...</td>
        </tr>
        <tr>
            <td><setting no-version v1="play_led_disable"></setting></td>
            <td><setting no-version v2="system.aux_play_led"></setting></td>
            <td class="description-cell">Disables the "play" status LED that indicates when a file is being played from the SD card. When set to true, the LED is turned off. This is separate ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="second_usb_serial_enable"></setting></td>
            <td><setting no-version v2="consoles.second_usb_serial_enable"></setting></td>
            <td class="description-cell">Enables a second serial port over the USB connection. This allows you to have two independent serial connections simultaneously, useful for having bot...</td>
        </tr>
        <tr>
            <td><setting no-version v1="theta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Current setting for the eighth stepper motor driver current control, channel 7 of the digipot (last channel). Default value of -1 disables this channe...</td>
        </tr>
        <tr>
            <td><setting no-version v1="uart0.baud_rate"></setting></td>
            <td><setting no-version v2="uart console.baudrate"></setting></td>
            <td class="description-cell">Baud rate for the default hardware serial port (UART0), labeled "Serial" on the board near the USB connector. This controls the communication speed fo...</td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Current setting for the sixth stepper motor driver (M6), channel 5 of the digipot. Default value of -1 disables this channel. Available on both MCP445...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Motion Control</td>
        </tr>
        <tr>
            <td><setting no-version v1="acceleration"></setting></td>
            <td><setting no-version v2="default_acceleration"></setting></td>
            <td class="description-cell">Default acceleration for all axes when no per-actuator override is specified. This value determines how quickly the machine can change speed during...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_dir_pin"></setting></td>
            <td><setting no-version v2="x.dir_pin"></setting></td>
            <td class="description-cell">X axis: GPIO pin used to control motor direction. The logic level on this pin determines whether the motor rotates clockwise or counter-clockwise w...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_en_pin"></setting></td>
            <td><setting no-version v2="x.en_pin"></setting></td>
            <td class="description-cell">X axis: GPIO pin used to enable/disable this specific motor driver. When not connected (nc), motor enable is controlled by the global motors_enable...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="x.max_rate"></setting></td>
            <td class="description-cell">X axis: Maximum speed this individual actuator/motor can achieve in mm/min. This limits the motor speed regardless of commanded feed rate or axis m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_step_pin"></setting></td>
            <td><setting no-version v2="x.step_pin"></setting></td>
            <td class="description-cell">X axis: GPIO pin used to send step pulses to the motor driver. Each rising edge on this pin advances the motor by one microstep. The pin must be co...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="x.steps_per_mm"></setting></td>
            <td class="description-cell">X axis: Number of motor steps required to move exactly 1mm along the X axis. This is the most critical calibration value and depends on motor steps...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arc_correction"></setting></td>
            <td><setting no-version v2="arc_correction"></setting></td>
            <td class="description-cell">Number of arc segments to process before applying correction to compensate for accumulated floating-point errors during arc generation. Higher valu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm_solution"></setting></td>
            <td><setting no-version v2="arm_solution"></setting></td>
            <td class="description-cell">Specifies the kinematics solution that converts Cartesian coordinates (X,Y,Z) from G-code into actuator positions for your specific machine type. T...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_dir_pin"></setting></td>
            <td><setting no-version v2="y.dir_pin"></setting></td>
            <td class="description-cell">Y axis: GPIO pin used to control motor direction. The logic level on this pin determines whether the motor rotates clockwise or counter-clockwise w...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_en_pin"></setting></td>
            <td><setting no-version v2="y.en_pin"></setting></td>
            <td class="description-cell">Y axis: GPIO pin used to enable/disable this specific motor driver. When not connected (nc), motor enable is controlled by the global motors_enable...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="y.max_rate"></setting></td>
            <td class="description-cell">Y axis: Maximum speed this individual actuator/motor can achieve in mm/min. This limits the motor speed regardless of commanded feed rate or axis m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_step_pin"></setting></td>
            <td><setting no-version v2="y.step_pin"></setting></td>
            <td class="description-cell">Y axis: GPIO pin used to send step pulses to the motor driver. Each rising edge on this pin advances the motor by one microstep. The pin must be co...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="y.steps_per_mm"></setting></td>
            <td class="description-cell">Y axis: Number of motor steps required to move exactly 1mm along the Y axis. This is the most critical calibration value and depends on motor steps...</td>
        </tr>
        <tr>
            <td><setting no-version v1="default_feed_rate"></setting></td>
            <td><setting no-version v2="default_feed_rate"></setting></td>
            <td class="description-cell">Default speed for coordinated G1/G2/G3 moves when no F parameter is specified in G-code. This is the fallback feed rate used when a move command do...</td>
        </tr>
        <tr>
            <td><setting no-version v1="default_seek_rate"></setting></td>
            <td><setting no-version v2="default_seek_rate"></setting></td>
            <td class="description-cell">Default speed for G0 rapid positioning moves when no F parameter is specified or when compliant_seek_rate is enabled. Rapid moves are uncoordinated...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_segments_per_second"></setting></td>
            <td><setting no-version v2="delta_segments_per_second"></setting></td>
            <td class="description-cell">Segmentation rate for delta and rotary delta kinematics. Determines how many segments per second are generated for moves to ensure smooth arc motio...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_dir_pin"></setting></td>
            <td><setting no-version v2="z.dir_pin"></setting></td>
            <td class="description-cell">Z axis: GPIO pin used to control motor direction. The logic level on this pin determines whether the motor rotates clockwise or counter-clockwise w...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_en_pin"></setting></td>
            <td><setting no-version v2="z.en_pin"></setting></td>
            <td class="description-cell">Z axis: GPIO pin used to enable/disable this specific motor driver. When not connected (nc), motor enable is controlled by the global motors_enable...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="z.max_rate"></setting></td>
            <td class="description-cell">Z axis: Maximum speed this individual actuator/motor can achieve in mm/min. This limits the motor speed regardless of commanded feed rate or axis m...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_step_pin"></setting></td>
            <td><setting no-version v2="z.step_pin"></setting></td>
            <td class="description-cell">Z axis: GPIO pin used to send step pulses to the motor driver. Each rising edge on this pin advances the motor by one microstep. The pin must be co...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="z.steps_per_mm"></setting></td>
            <td class="description-cell">Z axis: Number of motor steps required to move exactly 1mm along the Z axis. This is the most critical calibration value and depends on motor steps...</td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="junction_deviation"></setting></td>
            <td class="description-cell">Maximum allowed deviation from the true path at direction change junctions during cornering. This replaces traditional jerk-based cornering algorit...</td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="minimum_planner_speed"></setting></td>
            <td class="description-cell">Minimum speed the planner will allow for any move. When set to 0 (default), the planner can slow moves down to a complete stop if needed for proper...</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_max_arc_error"></setting></td>
            <td><setting no-version v2="mm_max_arc_error"></setting></td>
            <td class="description-cell">Maximum chord-to-arc deviation allowed for adaptive arc segmentation when mm_per_arc_segment is 0. This value controls the trade-off between arc sm...</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_arc_segment"></setting></td>
            <td><setting no-version v2="mm_per_arc_segment"></setting></td>
            <td class="description-cell">Fixed arc segment length for G2/G3 circular interpolation moves. When set to a positive value, arcs are divided into segments of this fixed length....</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_line_segment"></setting></td>
            <td><setting no-version v2="mm_per_line_segment"></setting></td>
            <td class="description-cell">Fixed segment length for straight-line moves when using cartesian grid bed leveling compensation. When set to a positive value, all G1 moves longer...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.driver"></setting></td>
            <td class="description-cell">X axis: Specifies the stepper driver chip type for this motor. Determines how the motor is controlled and which advanced features are available. TM...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.driver"></setting></td>
            <td class="description-cell">Y axis: Specifies the stepper driver chip type for this motor. Determines how the motor is controlled and which advanced features are available. TM...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.driver"></setting></td>
            <td class="description-cell">Z axis: Specifies the stepper driver chip type for this motor. Determines how the motor is controlled and which advanced features are available. TM...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.microsteps"></setting></td>
            <td class="description-cell">X axis: Microstepping subdivision setting for the TMC stepper driver. Higher values provide smoother motion and finer resolution but reduce maximum...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.microsteps"></setting></td>
            <td class="description-cell">Y axis: Microstepping subdivision setting for the TMC stepper driver. Higher values provide smoother motion and finer resolution but reduce maximum...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.microsteps"></setting></td>
            <td class="description-cell">Z axis: Microstepping subdivision setting for the TMC stepper driver. Higher values provide smoother motion and finer resolution but reduce maximum...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.check_driver_errors"></setting></td>
            <td class="description-cell">Enable periodic checking of TMC driver error status bits. When enabled, the firmware reads error registers from TMC2590/TMC2660 drivers to detect o...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.motors_enable_pin"></setting></td>
            <td class="description-cell">Global enable pin that controls all motors simultaneously. When this pin is asserted (low with ! suffix), all motor drivers are enabled. When de-as...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="compliant_seek_rate"></setting></td>
            <td class="description-cell">Enables GRBL-compliant behavior where G0 rapid moves always use default_seek_rate regardless of F parameter. When false (default), the F parameter ...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="max_speed"></setting></td>
            <td class="description-cell">Overall maximum speed limit across all axes regardless of individual per-axis limits. When set to 0 (default), this global limit is disabled and on...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="segment_z_moves"></setting></td>
            <td class="description-cell">Enable segmentation for Z-only moves on delta machines. When true (default), vertical Z movements on delta printers are broken into segments for sm...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.acceleration"></setting></td>
            <td class="description-cell">X axis: Per-actuator acceleration override. When set to -1 (default), this actuator uses the global default_acceleration setting. When set to a pos...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.reversed"></setting></td>
            <td class="description-cell">X axis: Reverse motor direction without modifying the dir_pin definition. When set to true, the firmware inverts the direction signal internally, w...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="x.slaved_to"></setting></td>
            <td class="description-cell">X axis: Slaves this actuator to mirror another axis for dual motor setups. Commonly used for dual Y motors (gantry systems) or dual X motors. Only ...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.acceleration"></setting></td>
            <td class="description-cell">Y axis: Per-actuator acceleration override. When set to -1 (default), this actuator uses the global default_acceleration setting. When set to a pos...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.reversed"></setting></td>
            <td class="description-cell">Y axis: Reverse motor direction without modifying the dir_pin definition. When set to true, the firmware inverts the direction signal internally, w...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="y.slaved_to"></setting></td>
            <td class="description-cell">Y axis: Slaves this actuator to mirror another axis for dual motor setups. Commonly used for dual Y motors (gantry systems) or dual X motors. Only ...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.acceleration"></setting></td>
            <td class="description-cell">Z axis: Per-actuator acceleration override. When set to -1 (default), this actuator uses the global default_acceleration setting. When set to a pos...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.reversed"></setting></td>
            <td class="description-cell">Z axis: Reverse motor direction without modifying the dir_pin definition. When set to true, the firmware inverts the direction signal internally, w...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="z.slaved_to"></setting></td>
            <td class="description-cell">Z axis: Slaves this actuator to mirror another axis for dual motor setups. Commonly used for dual Y motors (gantry systems) or dual X motors. Only ...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="common.halt_on_driver_alarm"></setting></td>
            <td class="description-cell">Enter ON_HALT emergency state when any TMC driver error is detected. When true, the machine immediately stops all motion and disables motors if a d...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="must_be_homed"></setting></td>
            <td class="description-cell">Require all axes to be homed before allowing any motion commands. When true, the machine will reject move commands until a homing cycle (G28) has b...</td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner_queue_size"></setting></td>
            <td class="description-cell">Number of motion blocks in the planner queue buffer. Larger values allow smoother motion planning and better acceleration management by looking fur...</td>
        </tr>
        <tr>
            <td><setting no-version v1="save_g54"></setting></td>
            <td><setting no-version v2="save_wcs"></setting></td>
            <td class="description-cell">Save work coordinate systems (G54-G59) to config-override file when M500 is issued. When true, all WCS offsets are saved and restored on boot, allo...</td>
        </tr>
        <tr>
            <td><setting no-version v1="x_axis_max_speed"></setting></td>
            <td><setting no-version v2="x_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum speed limit for X axis in mm/min. This is a hard limit that prevents the X axis from exceeding this speed regardless of commanded feed rate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="y_axis_max_speed"></setting></td>
            <td><setting no-version v2="y_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum speed limit for Y axis in mm/min. This is a hard limit that prevents the Y axis from exceeding this speed regardless of commanded feed rate...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_axis_max_speed"></setting></td>
            <td><setting no-version v2="z_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum speed limit for Z axis in mm/min. Typically much slower than XY axes due to heavier loads, higher mechanical advantage of lead screws, and ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="z_junction_deviation"></setting></td>
            <td class="description-cell">Separate junction deviation setting specifically for Z axis moves. When set to -1 (default), Z axis uses the same junction_deviation value as XY ax...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Network</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.enable"></setting></td>
            <td><setting no-version v2="network.enable"></setting></td>
            <td class="description-cell">Master enable switch for the entire Ethernet network functionality. When disabled, the network module is completely unloaded to free system resources...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.hostname"></setting></td>
            <td><setting no-version v2="network.hostname"></setting></td>
            <td class="description-cell">Sets a hostname that is sent to the DHCP server during IP address requests. Some DHCP servers register this hostname in local DNS, allowing you to acc...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_address"></setting></td>
            <td><setting no-version v2="network.ip_address"></setting></td>
            <td class="description-cell">Configures the IP address assignment method for the Smoothieboard. Can use DHCP for automatic configuration or specify a static IP address. When using...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_mask"></setting></td>
            <td><setting no-version v2="network.ip_mask"></setting></td>
            <td class="description-cell">Defines the subnet mask for static IP configuration. The netmask determines which portion of the IP address identifies the network and which portion i...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.ip_gateway"></setting></td>
            <td><setting no-version v2="network.ip_gateway"></setting></td>
            <td class="description-cell">Specifies the default gateway (router) IP address for static IP configuration. The gateway is used for routing traffic outside the local network. Only...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.mac_override"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Allows manual override of the Ethernet MAC (Media Access Control) address. By default, Smoothieboard auto-generates a unique MAC address based on the...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.webserver.enable"></setting></td>
            <td><setting no-version v2="network.webserver_enable"></setting></td>
            <td class="description-cell">Enables the built-in HTTP web server on port 80. The web server provides a browser-based control interface for sending commands, monitoring status, up...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.telnet.enable"></setting></td>
            <td><setting no-version v2="network.shell_enable"></setting></td>
            <td class="description-cell">Enables the telnet server on port 23. The telnet service provides a network-based command-line interface that behaves identically to the USB serial co...</td>
        </tr>
        <tr>
            <td><setting no-version v1="network.plan9.enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Enables the Plan9 network filesystem server on port 564. Plan9 (9P protocol) allows mounting the Smoothieboard's SD card filesystem directly on your c...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.dns_server"></setting></td>
            <td class="description-cell">Specifies the DNS (Domain Name System) server IP address for hostname resolution. DNS is required when using hostname-based addresses in commands like...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.ftp_enable"></setting></td>
            <td class="description-cell">Enables the FTP (File Transfer Protocol) server on TCP port 21, allowing remote file transfer access to the SD card filesystem. When enabled, users ca...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.ntp_enable"></setting></td>
            <td class="description-cell">Enables the NTP (Network Time Protocol) client to automatically synchronize the Real-Time Clock (RTC) from an NTP server during network startup. When...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.ntp_server"></setting></td>
            <td class="description-cell">Specifies the NTP server hostname or IP address for time synchronization. The firmware contacts this server when ntp_enable is true to fetch the curre...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.timezone"></setting></td>
            <td class="description-cell">Specifies the timezone offset from GMT/UTC in hours, which is applied to the time fetched from the NTP server to set the local RTC time. The offset in...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="network.firmware_url"></setting></td>
            <td class="description-cell">Specifies the base URL for firmware updates used by the update command. The command automatically appends the board-specific firmware filename to this...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Panel</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_a_pin"></setting></td>
            <td><setting no-version v2="mpg.&lt;name&gt;.enca_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to encoder phase A (channel A) of the quadrature rotary encoder. This pin must be interrupt-capable because the encoder uses edge detection to determine rotation direction and count steps. In v1, this was part of the unified panel module. In v2, it's part of the MPG (Manual Pulse Generator) module for manual axis control.</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_b_pin"></setting></td>
            <td><setting no-version v2="mpg.&lt;name&gt;.encb_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin connected to encoder phase B (channel B) of the quadrature rotary encoder. This pin works with the A pin to determine rotation direction through quadrature decoding. The phase relationship between A and B signals indicates clockwise or counter-clockwise rotation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="mpg.&lt;name&gt;.enable"></setting></td>
            <td class="description-cell">Enables this specific MPG (Manual Pulse Generator) instance. When set to true, this encoder will be initialized and will control the axis specified in the axis setting. Multiple MPG instances can be configured for different axes. This is a new feature in v2 that separates manual pulse generation from the display panel functionality.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="mpg.&lt;name&gt;.axis"></setting></td>
            <td class="description-cell">Specifies which actuator axis this encoder controls for manual pulse generation. The encoder directly steps the specified motor, allowing manual positioning when the machine is idle. Each rotation click advances or reverses the motor by one microstep. This is a new feature in v2 where encoders can directly control axis movement instead of just menu navigation.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Panel/Display</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.enable"></setting></td>
            <td><setting no-version v2="display.enable"></setting></td>
            <td class="description-cell">Enables the panel interface module. Panels provide a screen, an encoder wheel and/or a set of buttons, used to control your machine without requiring...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.lcd"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the type of panel connected to the Smoothieboard. Each panel has a specific interface and driver requirements, so the correct panel type mus...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_channel"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Selects which SPI channel to use for panel communication. The Smoothieboard has two SPI channels with different pin assignments. Channel selection aff...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_cs_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the CS (Chip Select) pin used to select the panel device on the SPI bus. CS allows multiple devices to share the same SPI port by activating...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_frequency"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Sets the SPI communication frequency in Hertz for the panel interface. Higher frequencies allow faster screen updates and more responsive display refr...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.contrast"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Sets the display contrast value for panels that support contrast adjustment (Viki2, Mini Viki2, ST7565_glcd, and OLED displays). Higher values increas...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.reverse"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">When set to true, reverses the screen display by rotating it 180 degrees. This setting is useful when the panel is physically mounted upside down or w...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.menu_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Configures the number of lines to offset the menu lines by on screen, effectively controlling how many encoder clicks are required to move one menu po...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_a_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the A pin for the rotary encoder wheel. Encoders have two output pins (A and B) that generate quadrature signals as the encoder is rotated....</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_b_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the B pin for the rotary encoder wheel. Encoders have two output pins (A and B) that generate quadrature signals 90 degrees out of phase as...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_resolution"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the number of pulses the encoder emits per physical detent (click position). This value is used to convert raw encoder pulse counts into mea...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.click_button_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the click ("enter" or "select") button on the panel. This button is typically pressed to select menu items, confirm actions, and...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.back_button_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the back ("escape" or "cancel") button on the panel. This button returns to the previous menu level or cancels the current opera...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.up_button_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the up button which moves up in menus or increments values. This button is typically found on panels without rotary encoders (bu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.down_button_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the down button which moves down in menus or decrements values. This button is typically found on panels without rotary encoders...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.pause_button_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the pause button which immediately pauses print jobs when pressed. This button provides emergency pause functionality directly f...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.longpress_delay"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the delay in milliseconds before a button press is considered a "long press" rather than a normal press. When set to 0, long press detection...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.buzz_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the buzzer which provides audible feedback when buttons are clicked and for system alerts. The buzzer produces short beeps to co...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.red_led_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the red LED indicator used on Viki2 panels to indicate heating status. The red LED turns on when the hotend is actively heating,...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.blue_led_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the pin for the blue LED indicator used on Viki2 panels to indicate normal operation status. The blue LED turns on when the system is ready...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.a0_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the A0 (also called C/D for Command/Data or D/C for Data/Command) pin required for Viki2 and SSD1306 OLED displays. This pin selects between...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.rst_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the RST (reset) pin required for some OLED displays (SSD1306, SH1106). This pin is connected to the display's hardware reset input and is us...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.busy_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the busy pin used only with the Universal Adapter panel type. This pin can be connected to the adapter to query its busy status before sendi...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.alpha_jog_feedrate"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the X axis (alpha motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.beta_jog_feedrate"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the Y axis (beta motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manua...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.gamma_jog_feedrate"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the Z axis (gamma motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.hotend_temperature"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the temperature preset in degrees Celsius to set the hotend to when using the pre-heating menu item on the panel. This provides a quick-acce...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.bed_temperature"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the temperature preset in degrees Celsius to set the heated bed to when using the pre-heating menu item on the panel. This provides a quick-...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">When set to true, enables support for an external SD card slot on the panel or a second SD card slot connected to one of Smoothieboard's SPI ports. Th...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_channel"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Selects which SPI channel to use for the external SD card. The external SD card can share the same SPI channel as the panel if they use different CS p...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_cs_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the CS (Chip Select) pin for the external SD card. This pin selects the external SD card device on the SPI bus. The CS pin allows the extern...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.sdcd_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the SD card detect signal pin for the external SD card slot. When connected, the system automatically mounts the SD card at `/ext` when the...</td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.display_extruder"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">When set to true, the watch screen (main status screen) displays extruder position and temperature information in addition to bed and hotend temperatu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.&lt;menu_name&gt;.enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">When set to true, creates a new custom menu entry for the panel with the identifier `&lt;menu_name&gt;`. You can create any number of custom menu entries as...</td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.&lt;menu_name&gt;.name"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the display name that will appear in the panel's menus for this custom menu entry. Underscores (`_`) in the name are automatically converted...</td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.&lt;menu_name&gt;.command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies the G-code command or command sequence that will be executed when the custom menu entry is selected and clicked on the panel. Underscores (`...</td>
        </tr>
            <td colspan="3" class="module-header">Planner</td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">Maximum allowed deviation from the true path at direction change junctions during cornering. This replaces traditional jerk-based cornering algorithms with a more sophisticated approach. Lower values produce slower, more precise corners that follow the intended path more closely. Higher values allow faster cornering but introduce more deviation from the theoretical path, potentially causing rounding at sharp corners.</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">Separate junction deviation setting specifically for Z-axis moves. When set to a valid number, allows different cornering behavior for moves involving Z-axis motion. In v1 default is NAN (uses global junction_deviation), in v2 default is -1 (uses global junction_deviation). Commonly set to 0.0 to force full stops at layer changes in 3D printing to eliminate Z-seam artifacts, or set higher to allow faster Z movements without affecting XY print quality.</td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">Minimum speed the planner will allow for any move. When set to 0 (default), the planner can slow moves down to a complete stop if needed for proper acceleration/deceleration. When set to a positive value, moves will never slow below this speed, which can prevent extrusion problems in 3D printing or stepper stalls on machines with poor low-speed torque, but may cause jerky motion at tight corners.</td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">Number of motion blocks (movements) held in the planner queue for lookahead optimization. The planner performs forward and reverse passes across the entire queue to calculate optimal entry/exit speeds for each movement. Larger values (default 32) allow better motion planning and smoother acceleration by looking further ahead in the move sequence, but consume more RAM (~100-150 bytes per block). Smaller values reduce memory usage but may result in stuttering on complex paths with many short segments.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Robot &amp; Motion Control</td>
        </tr>
        <tr>
            <td><setting no-version v1="acceleration"></setting></td>
            <td><setting no-version v2="motion control.default_acceleration"></setting></td>
            <td class="description-cell">Default acceleration for all axes in mm/s². This is the rate at which the machine accelerates and decelerates during moves. Higher acceleration values...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_acceleration"></setting></td>
            <td><setting no-version v2="actuator.x.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for alpha motor. When set to a valid number, overrides the global default acceleration setting for moves involving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Rotation angle in degrees for rotatable_cartesian and experimental_delta arm solutions. Rotates the entire coordinate plane by this angle around the Z...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_rate"></setting></td>
            <td><setting no-version v2="actuator.x.max_rate"></setting></td>
            <td class="description-cell">Alpha motor maximum speed: Maximum speed this individual actuator/motor can achieve in mm/min. This limits the motor speed regardless of commanded fee...</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.x.steps_per_mm"></setting></td>
            <td class="description-cell">Alpha axis (X axis in Cartesian machines): Number of motor steps required to move exactly 1mm along the alpha axis. This is the most critical calibrat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arc_correction"></setting></td>
            <td><setting no-version v2="motion control.arc_correction"></setting></td>
            <td class="description-cell">Number of arc segments before applying geometric correction. When drawing arcs with many small segments, numerical errors can accumulate causing the a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm_length"></setting></td>
            <td><setting no-version v2="linear delta.arm_length"></setting></td>
            <td class="description-cell">For linear delta robots only. Physical length of the diagonal connecting rod from the upper carriage hinge point to the lower effector hinge point. Th...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm_radius"></setting></td>
            <td><setting no-version v2="linear delta.arm_radius"></setting></td>
            <td class="description-cell">For linear delta robots only. Horizontal distance from center of bed to the center of each tower&#39;s linear rail when the effector is centered at build...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm_solution"></setting></td>
            <td><setting no-version v2="motion control.arm_solution"></setting></td>
            <td class="description-cell">Specifies the kinematics solution that converts Cartesian coordinates (X, Y, Z) from G-code into actuator motor positions for your machine type. This...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm1_length"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Length of the first arm segment from the base hinge to the elbow hinge. This is the inner arm of the SCARA robotic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="arm2_length"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Length of the second arm segment from the elbow hinge to the end effector. This is the outer arm of the SCARA robo...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.y.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for beta motor. When set to a valid number, overrides the global default acceleration setting for moves involving t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.y.max_rate"></setting></td>
            <td class="description-cell">Beta motor maximum speed: Maximum speed this individual actuator/motor can achieve in mm/min. Identical in function to alpha_max_rate but applies to t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_relative_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For experimental delta arm solution only. Defines the relative angular position of the beta tower (tower 2). Standard deltas have three towers positio...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.y.steps_per_mm"></setting></td>
            <td class="description-cell">Beta axis (Y axis in Cartesian machines): Number of motor steps required to move exactly 1mm along the beta axis. This is the most critical calibratio...</td>
        </tr>
        <tr>
            <td><setting no-version v1="default_feed_rate"></setting></td>
            <td><setting no-version v2="motion control.default_feed_rate"></setting></td>
            <td class="description-cell">Default feed rate for G1 moves when no F parameter is specified. This is the speed at which the machine moves during normal operations (cutting, extru...</td>
        </tr>
        <tr>
            <td><setting no-version v1="default_seek_rate"></setting></td>
            <td><setting no-version v2="motion control.default_seek_rate"></setting></td>
            <td class="description-cell">Default rate for G0 rapid moves. This is the speed for rapid positioning moves when the tool is not active (not cutting, extruding, or engraving). G0...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.delta.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for delta motor. When set to a valid number, overrides the global default acceleration setting for the delta actuat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_e"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. End effector triangle side length - the distance between ball joints on the effector platform. In rotary delta des...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_ee_offs"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Distance from the ball joint plane to the bottom of the end effector surface - essentially the thickness of the ef...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_f"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Base triangle side length - the distance between servo pivot points on the stationary base. In rotary delta design...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_halt_on_error"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For delta robots (both linear and rotary), controls whether motion halts when kinematic calculation fails due to unreachable position. When true (defa...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.delta.max_rate"></setting></td>
            <td class="description-cell">Delta motor maximum speed: Maximum speed for the delta actuator motor in mm/min (or degrees/min for rotary). For extruders, this limits the linear spe...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_mirror_xy"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Mirror (flip) the XY coordinate system. This is useful for correcting coordinate system orientation without making...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_re"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Carbon rod length - the length of the connecting rods (parallelogram links) between the servo horn and the effecto...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_rf"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Servo horn length - the distance from the servo pivot point (motor shaft) to the rod connection point on the servo...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_segments_per_second"></setting></td>
            <td><setting no-version v2="motion control.delta_segments_per_second"></setting></td>
            <td class="description-cell">For delta robots, an alternative way to specify segmentation based on time rather than distance. When set to a non-zero value, overrides mm_per_line_s...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.delta.steps_per_mm"></setting></td>
            <td class="description-cell">Delta axis (A axis): Number of motor steps required to move exactly 1mm (or 1 degree for rotary axes) along the delta axis. In 3D printers, this is ty...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tool_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Distance between the effector ball joint plane and the tool tip (nozzle, gripper, etc.). This accounts for how far...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower1_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Angular offset correction for tower 1 position (alpha tower, front-left at nominal 210°). Used during delta calibration to correct for manufacturing t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower1_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Radial offset correction for tower 1 position. Positive values move the tower away from the bed center, negative values move it toward center. Used du...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower2_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Angular offset correction for tower 2 position (beta tower, front-right at nominal 330°). Used during delta calibration to correct for manufacturing t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower2_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Radial offset correction for tower 2 position. Positive values move the tower away from the bed center, negative values move it toward center. Used du...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower3_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Angular offset correction for tower 3 position (gamma tower, back-center at nominal 90°). Used during delta calibration to correct for manufacturing t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_tower3_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Radial offset correction for tower 3 position. Positive values move the tower away from the bed center, negative values move it toward center. Used du...</td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_z_offset"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For rotary delta arm solution only. Vertical distance from the servo pivot plane (the plane where all three servo shafts are located) to the bed surfa...</td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_acceleration"></setting></td>
            <td><setting no-version v2="actuator.epsilon.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for epsilon motor. When set to a valid number, overrides the global default acceleration setting for the epsilon ac...</td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_max_rate"></setting></td>
            <td><setting no-version v2="actuator.epsilon.max_rate"></setting></td>
            <td class="description-cell">Epsilon motor maximum speed: Maximum speed for the epsilon actuator motor in mm/min. For second extruder in dual-extrusion setups, configure same as d...</td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.epsilon.steps_per_mm"></setting></td>
            <td class="description-cell">Epsilon axis (B axis): Number of motor steps required to move exactly 1mm (or 1 degree for rotary axes) along the epsilon axis. In 3D printers with du...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for gamma motor. When set to a valid number, overrides the global default acceleration setting for moves involving...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_rate"></setting></td>
            <td><setting no-version v2="actuator.z.max_rate"></setting></td>
            <td class="description-cell">Gamma motor maximum speed: Maximum speed this individual actuator/motor can achieve in mm/min. For Cartesian machines with leadscrew Z-axis, this is o...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_relative_angle"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For experimental delta arm solution only. Defines the relative angular position of the gamma tower (tower 3). Standard deltas have three towers positi...</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.z.steps_per_mm"></setting></td>
            <td class="description-cell">Gamma axis (Z axis in Cartesian machines): Number of motor steps required to move exactly 1mm along the gamma axis. For Cartesian/CoreXY machines, thi...</td>
        </tr>
        <tr>
            <td><setting no-version v1="junction_deviation"></setting></td>
            <td><setting no-version v2="planner.junction_deviation"></setting></td>
            <td class="description-cell">Junction deviation controls cornering speed by defining how much the tool path can deviate from a perfect corner. This replaces traditional &quot;jerk&quot; set...</td>
        </tr>
        <tr>
            <td><setting no-version v1="laser_module_default_power"></setting></td>
            <td><setting no-version v2="laser.default_power"></setting></td>
            <td class="description-cell">Default S value for laser operations when no S parameter is specified in G-code. Represents laser power as a fraction from 0.0 (off) to 1.0 (full powe...</td>
        </tr>
        <tr>
            <td><setting no-version v1="max_speed"></setting></td>
            <td><setting no-version v2="motion control.max_speed"></setting></td>
            <td class="description-cell">Global maximum speed limit applied to all moves. When set to a positive value, limits the combined speed of all axes (the magnitude of the velocity ve...</td>
        </tr>
        <tr>
            <td><setting no-version v1="minimum_planner_speed"></setting></td>
            <td><setting no-version v2="planner.minimum_planner_speed"></setting></td>
            <td class="description-cell">Minimum speed the planner will allow for any move. Prevents extremely slow movements that could cause stepper stalls or uneven extrusion in 3D printin...</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_max_arc_error"></setting></td>
            <td><setting no-version v2="motion control.mm_max_arc_error"></setting></td>
            <td class="description-cell">Maximum allowable deviation from true arc when mm_per_arc_segment is 0. This controls arc segmentation quality versus performance using adaptive segme...</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_arc_segment"></setting></td>
            <td><setting no-version v2="motion control.mm_per_arc_segment"></setting></td>
            <td class="description-cell">Length of arc segments for G2/G3 circular interpolation moves. When 0 (default), the firmware uses mm_max_arc_error to automatically determine appropr...</td>
        </tr>
        <tr>
            <td><setting no-version v1="mm_per_line_segment"></setting></td>
            <td><setting no-version v2="motion control.mm_per_line_segment"></setting></td>
            <td class="description-cell">Maximum length of line segments before splitting into smaller segments. When non-zero, long straight moves are automatically split into segments of th...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_offset_x"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. X-axis offset of the bed zero position (work origin) from the SCARA tower center (base pivot point). SCARA robots...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_offset_y"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Y-axis offset of the bed zero position (work origin) from the SCARA tower center (base pivot point). SCARA robots...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_scaling_x"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Final calibration scaling factor for X axis movement. Used to fine-tune dimensions after mechanical calibration, a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_scaling_y"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Final calibration scaling factor for Y axis movement. Used to fine-tune dimensions after mechanical calibration, a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_undefined_max"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Ratio defining where SCARA position becomes kinematically undefined when the end effector reaches maximum extensio...</td>
        </tr>
        <tr>
            <td><setting no-version v1="morgan_undefined_min"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Ratio defining where SCARA position becomes kinematically undefined when the end effector approaches too close to...</td>
        </tr>
        <tr>
            <td><setting no-version v1="planner_queue_size"></setting></td>
            <td><setting no-version v2="planner.planner_queue_size"></setting></td>
            <td class="description-cell">Number of blocks in the planner queue. The planner queue holds upcoming moves and optimizes acceleration/deceleration across them for smooth motion. L...</td>
        </tr>
        <tr>
            <td><setting no-version v1="queue_delay_time_ms"></setting></td>
            <td><setting no-version v2="planner.queue_delay_time_ms"></setting></td>
            <td class="description-cell">Milliseconds to wait when the planner queue is full before checking again. This prevents the CPU from spinning in a tight loop when the queue is full...</td>
        </tr>
        <tr>
            <td><setting no-version v1="real_scara"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For Morgan SCARA arm solution only. Enables real SCARA mode versus Morgan mode, which affects the kinematic calculations. The Morgan SCARA implementat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="save_g54"></setting></td>
            <td><setting no-version v2="motion control.save_wcs"></setting></td>
            <td class="description-cell">Save G54-G59 work coordinate systems to config-override with M500. When true, all work coordinate system offsets (G54, G55, G56, G57, G58, G59) will b...</td>
        </tr>
        <tr>
            <td><setting no-version v1="save_g92"></setting></td>
            <td><setting no-version v2="motion control.save_g92"></setting></td>
            <td class="description-cell">Save G92 coordinate offsets to config-override with M500 command. When true, any G92 offset currently in effect will be written to the config-override...</td>
        </tr>
        <tr>
            <td><setting no-version v1="segment_z_moves"></setting></td>
            <td><setting no-version v2="motion control.segment_z_moves"></setting></td>
            <td class="description-cell">Whether to apply line segmentation to Z-only moves. When true (default), pure Z-axis moves are segmented according to mm_per_line_segment like XY move...</td>
        </tr>
        <tr>
            <td><setting no-version v1="set_g92"></setting></td>
            <td><setting no-version v2="motion control.set_g92"></setting></td>
            <td class="description-cell">Set a fixed G92 offset at startup in format &quot;x,y,z&quot;. This allows defining a permanent coordinate offset that is applied automatically on boot. Useful...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Enable software endstops that prevent moves beyond configured minimum and maximum boundaries. When enabled, firmware checks every move against the sof...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.halt"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Controls machine behavior when soft endstop limit is triggered. When true (default), the machine enters HALT state when attempting to move beyond soft...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.xmax"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Maximum allowed X position for soft endstop enforcement. When set to a valid number, prevents X-axis moves above this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.xmin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Minimum allowed X position for soft endstop enforcement. When set to a valid number, prevents X-axis moves below this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.ymax"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Maximum allowed Y position for soft endstop enforcement. When set to a valid number, prevents Y-axis moves above this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.ymin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Minimum allowed Y position for soft endstop enforcement. When set to a valid number, prevents Y-axis moves below this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.zmax"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Maximum allowed Z position for soft endstop enforcement. When set to a valid number, prevents Z-axis moves above this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="soft_endstop.zmin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Minimum allowed Z position for soft endstop enforcement. When set to a valid number, prevents Z-axis moves below this value. When set to NAN (not-a-nu...</td>
        </tr>
        <tr>
            <td><setting no-version v1="x_axis_max_speed"></setting></td>
            <td><setting no-version v2="motion control.x_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum allowable speed for the X axis. Smoothie will never exceed this value for X axis movement regardless of requested feed rate. This is a hard li...</td>
        </tr>
        <tr>
            <td><setting no-version v1="x_reduction"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For CoreXZ kinematics only. Reduction factor for the X axis component in the CoreXZ transformation matrix. Controls how much the X motor contributes t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="y_axis_max_speed"></setting></td>
            <td><setting no-version v2="motion control.y_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum allowable speed for the Y axis. Smoothie will never exceed this value for Y axis movement regardless of requested feed rate. This is a hard li...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_acceleration"></setting></td>
            <td><setting no-version v2="actuator.z.acceleration"></setting></td>
            <td class="description-cell">Specific acceleration for Z axis movements. When set to a valid number, overrides the default acceleration setting for Z axis only. When set to NAN (n...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_axis_max_speed"></setting></td>
            <td><setting no-version v2="motion control.z_axis_max_speed"></setting></td>
            <td class="description-cell">Maximum allowable speed for the Z axis. Smoothie will never exceed this value for Z axis movement regardless of requested feed rate. Typically much sl...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_junction_deviation"></setting></td>
            <td><setting no-version v2="planner.z_junction_deviation"></setting></td>
            <td class="description-cell">Separate junction deviation for Z axis. When set to a valid number, allows different cornering behavior for moves involving Z-axis motion. When set to...</td>
        </tr>
        <tr>
            <td><setting no-version v1="z_reduction"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">For CoreXZ kinematics only. Reduction factor for the Z axis component in the CoreXZ transformation matrix. Controls how much the Z motor contributes t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_acceleration"></setting></td>
            <td><setting no-version v2="actuator.zeta.acceleration"></setting></td>
            <td class="description-cell">Per-actuator acceleration override for zeta motor. When set to a valid number, overrides the global default acceleration setting for the zeta actuator...</td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_max_rate"></setting></td>
            <td><setting no-version v2="actuator.zeta.max_rate"></setting></td>
            <td class="description-cell">Zeta motor maximum speed: Maximum speed for the zeta actuator motor in mm/min. For third extruder in triple-extrusion setups, configure same as delta/...</td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_steps_per_mm"></setting></td>
            <td><setting no-version v2="actuator.zeta.steps_per_mm"></setting></td>
            <td class="description-cell">Zeta axis (C axis): Number of motor steps required to move exactly 1mm (or 1 degree for rotary axes) along the zeta axis. In 3D printers with triple e...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Switch</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.enable"></setting></td>
            <td><setting no-version v2="switch.<name>.enable"></setting></td>
            <td class="description-cell">Creates and enables a new Switch module instance. When set to `true`, the switch module is active and will respond to configured inputs and control...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a GPIO pin that controls the switch state through hardware input. When configured, the pin's state determines the switch's ON/OFF state a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Defines how the input pin controls the switch state. In momentary mode, the switch state tracks the pin state directly. In toggle mode, pin state t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_on_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the ON state. The command is matched against incoming G-code, and when received, the s...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_off_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the OFF state. The command is matched against incoming G-code, and when received, the ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.<name>.subcode"></setting></td>
            <td class="description-cell">Specifies a subcode for input command matching. Allows multiple switch instances to respond to different subcodes of the same base command (e.g., `...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.<name>.output_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin that is controlled by the switch. The pin's behavior depends on `output_type` (digital on/off, PWM, hardware PWM, or softwar...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.<name>.output_type"></setting></td>
            <td class="description-cell">Defines the output pin control method. Determines whether the output is simple digital on/off, sigma-delta PWM (software PWM using bit-banging), ha...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed. Underscor...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed. Undersco...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_state"></setting></td>
            <td class="description-cell">Sets the initial state of the switch when the system boots. When `true`, the switch starts in the ON state. When `false`, the switch starts in the ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_value"></setting></td>
            <td class="description-cell">Sets the PWM value when the switch is in the OFF state (or at startup if `startup_state` is `false`). For SIGMADELTA PWM, this is the 0-255 value. ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.<name>.default_on_value"></setting></td>
            <td class="description-cell">Sets the PWM duty cycle percentage when the switch is turned ON (without an explicit `S` parameter). Only applies to hardware PWM and software PWM ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.<name>.max_pwm"></setting></td>
            <td class="description-cell">Sets the maximum PWM value for sigma-delta PWM output. Allows limiting the maximum output power/speed when using PWM mode. The `S` parameter in com...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Sets the PWM period in milliseconds for hardware PWM and software PWM outputs. This determines the PWM frequency. For servo control, typical value ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.failsafe_set_to"></setting></td>
            <td class="description-cell">Defines the pin state to set during a crash, watchdog reset, or debug halt condition. This is a safety feature to ensure outputs are in a safe stat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.halt_set_to"></setting></td>
            <td class="description-cell">Defines the switch state to set during a HALT condition (typically triggered by M112 emergency stop or system halt). When a halt occurs, the switch...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.<name>.ignore_on_halt"></setting></td>
            <td class="description-cell">When set to `true`, prevents the switch from changing state during HALT conditions (M112 emergency stop). Useful for switches that should maintain ...</td>
        </tr>

            <td colspan="3" class="module-header">Switch</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.enable"></setting></td>
            <td><setting no-version v2="switch.<name>.enable"></setting></td>
            <td class="description-cell">Creates and enables a new Switch module instance. When set to `true`, the switch module is active and will respond to configured inputs and control...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a GPIO pin that controls the switch state through hardware input. When configured, the pin's state determines the switch's ON/OFF state a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Defines how the input pin controls the switch state. In momentary mode, the switch state tracks the pin state directly. In toggle mode, pin state t...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_on_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the ON state. The command is matched against incoming G-code, and when received, the s...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_off_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the OFF state. The command is matched against incoming G-code, and when received, the ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.<name>.subcode"></setting></td>
            <td class="description-cell">Specifies a subcode for input command matching. Allows multiple switch instances to respond to different subcodes of the same base command (e.g., `...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.<name>.output_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin that is controlled by the switch. The pin's behavior depends on `output_type` (digital on/off, PWM, hardware PWM, or softwar...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.<name>.output_type"></setting></td>
            <td class="description-cell">Defines the output pin control method. Determines whether the output is simple digital on/off, sigma-delta PWM (software PWM using bit-banging), ha...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed. Underscor...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed. Undersco...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_state"></setting></td>
            <td class="description-cell">Sets the initial state of the switch when the system boots. When `true`, the switch starts in the ON state. When `false`, the switch starts in the ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_value"></setting></td>
            <td class="description-cell">Sets the PWM value when the switch is in the OFF state (or at startup if `startup_state` is `false`). For SIGMADELTA PWM, this is the 0-255 value. ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.<name>.default_on_value"></setting></td>
            <td class="description-cell">Sets the PWM duty cycle percentage when the switch is turned ON (without an explicit `S` parameter). Only applies to hardware PWM and software PWM ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.<name>.max_pwm"></setting></td>
            <td class="description-cell">Sets the maximum PWM value for sigma-delta PWM output. Allows limiting the maximum output power/speed when using PWM mode. The `S` parameter in com...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Sets the PWM period in milliseconds for hardware PWM and software PWM outputs. This determines the PWM frequency. For servo control, typical value ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.failsafe_set_to"></setting></td>
            <td class="description-cell">Defines the pin state to set during a crash, watchdog reset, or debug halt condition. This is a safety feature to ensure outputs are in a safe stat...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.halt_set_to"></setting></td>
            <td class="description-cell">Defines the switch state to set during a HALT condition (typically triggered by M112 emergency stop or system halt). When a halt occurs, the switch...</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.<name>.ignore_on_halt"></setting></td>
            <td class="description-cell">When set to `true`, prevents the switch from changing state during HALT conditions (M112 emergency stop). Useful for switches that should maintain ...</td>
        </tr>

            <td colspan="3" class="module-header">Switch Module</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.enable"></setting></td>
            <td><setting no-version v2="switch.<name>.enable"></setting></td>
            <td class="description-cell">Creates and enables a new Switch module instance. When set to `true`, the switch module is active and will respond to configured inputs and control outputs. Set to `false` to disable the switch instance without removing its configuration.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a GPIO pin that controls the switch state through hardware input. When configured, the pin's state determines the switch's ON/OFF state according to `input_pin_behavior`. (v1 only - not available in v2)</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_pin_behavior"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Defines how the input pin controls the switch state. In momentary mode, the switch state tracks the pin state directly. In toggle mode, pin state transitions trigger switch state toggles. (v1 only - not available in v2)</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_on_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_on_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the ON state. The command is matched against incoming G-code, and when received, the switch is activated.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.input_off_command"></setting></td>
            <td><setting no-version v2="switch.<name>.input_off_command"></setting></td>
            <td class="description-cell">Specifies a G-code or M-code command that sets the switch to the OFF state. The command is matched against incoming G-code, and when received, the switch is deactivated.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.subcode"></setting></td>
            <td><setting no-version v2="switch.<name>.subcode"></setting></td>
            <td class="description-cell">Specifies a subcode for input command matching. Allows multiple switch instances to respond to different subcodes of the same base command (e.g., `M106.1`, `M106.2`).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_pin"></setting></td>
            <td><setting no-version v2="switch.<name>.output_pin"></setting></td>
            <td class="description-cell">Specifies the GPIO pin that is controlled by the switch. The pin's behavior depends on `output_type` (digital on/off, PWM, hardware PWM, or software PWM).</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_type"></setting></td>
            <td><setting no-version v2="switch.<name>.output_type"></setting></td>
            <td class="description-cell">Defines the output pin control method. Determines whether the output is simple digital on/off, sigma-delta PWM (software PWM using bit-banging), hardware PWM, or software PWM out.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_on_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces. (v1 only - not available in v2)</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.output_off_command"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces. (v1 only - not available in v2)</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_state"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_state"></setting></td>
            <td class="description-cell">Sets the initial state of the switch when the system boots. When `true`, the switch starts in the ON state. When `false`, the switch starts in the OFF state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.startup_value"></setting></td>
            <td><setting no-version v2="switch.<name>.startup_value"></setting></td>
            <td class="description-cell">Sets the PWM value when the switch is in the OFF state (or at startup if `startup_state` is `false`). For SIGMADELTA PWM, this is the 0-255 value. For hardware/software PWM, this is the duty cycle percentage.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.default_on_value"></setting></td>
            <td><setting no-version v2="switch.<name>.default_on_value"></setting></td>
            <td class="description-cell">Sets the PWM duty cycle percentage when the switch is turned ON (without an explicit `S` parameter). Only applies to hardware PWM and software PWM output types.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.max_pwm"></setting></td>
            <td><setting no-version v2="switch.<name>.max_pwm"></setting></td>
            <td class="description-cell">Sets the maximum PWM value for sigma-delta PWM output. Allows limiting the maximum output power/speed when using PWM mode. The `S` parameter in commands is clamped to this value.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.pwm_period_ms"></setting></td>
            <td><setting no-version v2="[pwm1] frequency"></setting></td>
            <td class="description-cell">Sets the PWM period in milliseconds for hardware PWM and software PWM outputs. This determines the PWM frequency. For servo control, typical value is 20ms (50Hz). In v2, this is configured via the `[pwm1] frequency` setting instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.failsafe_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.failsafe_set_to"></setting></td>
            <td class="description-cell">Defines the pin state to set during a crash, watchdog reset, or debug halt condition. This is a safety feature to ensure outputs are in a safe state when the system encounters a critical failure.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.halt_set_to"></setting></td>
            <td><setting no-version v2="switch.<name>.halt_set_to"></setting></td>
            <td class="description-cell">Defines the switch state to set during a HALT condition (typically triggered by M112 emergency stop or system halt). When a halt occurs, the switch is set to this state immediately.</td>
        </tr>
        <tr>
            <td><setting no-version v1="switch.{name}.ignore_on_halt"></setting></td>
            <td><setting no-version v2="switch.<name>.ignore_on_halt"></setting></td>
            <td class="description-cell">When set to `true`, prevents the switch from changing state during HALT conditions (M112 emergency stop). Useful for switches that should maintain their current state during emergency stops.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Temperature Control</td>
        </tr>
        <tr>
            <td><setting no-version v1="bang_bang"></setting></td>
            <td><setting no-version v2="bang_bang"></setting></td>
            <td class="description-cell">Switches from PID control to simple bang-bang (hysteresis) control. In bang-bang mode, the heater is fully on when below target temperature minus hyst...</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta"></setting></td>
            <td><setting no-version v2="beta"></setting></td>
            <td class="description-cell">The beta coefficient characterizes the thermistor&#39;s resistance-temperature relationship. It&#39;s used in the simplified Steinhart-Hart equation (beta equ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="chip_select_pin"></setting></td>
            <td><setting no-version v2="spi_select_pin"></setting></td>
            <td class="description-cell">Specifies which pin is used as the chip select (CS) signal for the MAX31855 thermocouple-to-digital converter. Allows multiple MAX31855 devices to sha...</td>
        </tr>
        <tr>
            <td><setting no-version v1="coefficients"></setting></td>
            <td><setting no-version v2="coefficients"></setting></td>
            <td class="description-cell">The three coefficients (c1, c2, c3) of the Steinhart-Hart equation, which provides very accurate temperature calculation across the full operating ran...</td>
        </tr>
        <tr>
            <td><setting no-version v1="d_factor"></setting></td>
            <td><setting no-version v2="d_factor"></setting></td>
            <td class="description-cell">The derivative term of the PID controller. Responds to the rate of temperature change to reduce overshoot and improve stability. Internally scaled by...</td>
        </tr>
        <tr>
            <td><setting no-version v1="designator"></setting></td>
            <td><setting no-version v2="designator"></setting></td>
            <td class="description-cell">The letter/identifier that prefixes this module&#39;s temperature in M105 responses. Allows host software to identify which heater each temperature readin...</td>
        </tr>
        <tr>
            <td><setting no-version v1="e3d_amplifier_pin"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Specifies which ADC pin reads the analog voltage from the E3D PT100 amplifier. The amplifier converts PT100 RTD resistance to a voltage that can be re...</td>
        </tr>
        <tr>
            <td><setting no-version v1="enable"></setting></td>
            <td><setting no-version v2="enable"></setting></td>
            <td class="description-cell">Enables or disables the temperature control module instance. You can create as many temperature control modules as needed by giving each a unique name...</td>
        </tr>
        <tr>
            <td><setting no-version v1="get_m_code"></setting></td>
            <td><setting no-version v2="get_m_code"></setting></td>
            <td class="description-cell">Specifies which M-code reports the current temperature for this module. M105 is standard for temperature reporting and returns data for all temperatur...</td>
        </tr>
        <tr>
            <td><setting no-version v1="heater_pin"></setting></td>
            <td><setting no-version v2="heater_pin"></setting></td>
            <td class="description-cell">Specifies the output pin used to drive the heater element. This pin controls either an onboard MOSFET or an external Solid State Relay (SSR). Set to `...</td>
        </tr>
        <tr>
            <td><setting no-version v1="hysteresis"></setting></td>
            <td><setting no-version v2="hysteresis"></setting></td>
            <td class="description-cell">Defines the temperature band around the target temperature for bang-bang control. Heater turns on when temperature drops below (target - hysteresis) a...</td>
        </tr>
        <tr>
            <td><setting no-version v1="i_factor"></setting></td>
            <td><setting no-version v2="i_factor"></setting></td>
            <td class="description-cell">The integral term of the PID controller. Eliminates steady-state error by accumulating error over time. Internally scaled by `readings_per_second` (PI...</td>
        </tr>
        <tr>
            <td><setting no-version v1="i_max"></setting></td>
            <td><setting no-version v2="i_max"></setting></td>
            <td class="description-cell">Limits the integral accumulator to prevent integral windup. When the heater is at full power (max_pwm) for extended periods, the integral term would o...</td>
        </tr>
        <tr>
            <td><setting no-version v1="max_pwm"></setting></td>
            <td><setting no-version v2="max_pwm"></setting></td>
            <td class="description-cell">Limits the maximum power delivered to the heater by capping the PWM duty cycle. Useful when running a 12V heater from 24V supply, or to limit maximum...</td>
        </tr>
        <tr>
            <td><setting no-version v1="max_temp"></setting></td>
            <td><setting no-version v2="max_temp"></setting></td>
            <td class="description-cell">Hard upper limit for temperature. If the sensor reads above this value, the system immediately halts and turns off all heaters. Critical safety featur...</td>
        </tr>
        <tr>
            <td><setting no-version v1="min_temp"></setting></td>
            <td><setting no-version v2="min_temp"></setting></td>
            <td class="description-cell">Hard lower limit for temperature. If the sensor reads below this value, the system halts. Primarily used to detect disconnected or failed thermistors,...</td>
        </tr>
        <tr>
            <td><setting no-version v1="p_factor"></setting></td>
            <td><setting no-version v2="p_factor"></setting></td>
            <td class="description-cell">The proportional term of the PID controller. Determines how aggressively the controller responds to the current temperature error. Higher values produ...</td>
        </tr>
        <tr>
            <td><setting no-version v1="preset1"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Allows setting a common temperature with a shortcut. When you set temperature to `1.0`, the controller uses this preset value instead. Useful for quic...</td>
        </tr>
        <tr>
            <td><setting no-version v1="preset2"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Second preset temperature slot. When you set temperature to `2.0`, the controller uses this preset value instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="pwm_frequency"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Frequency at which the heater output switches on and off. High frequencies (kHz range) are suitable for MOSFETs. Low frequencies (10-40 Hz) are requir...</td>
        </tr>
        <tr>
            <td><setting no-version v1="r0"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">The nominal resistance of the thermistor at the reference temperature (usually 25°C). This is a fundamental property of the thermistor, typically spec...</td>
        </tr>
        <tr>
            <td><setting no-version v1="r1"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Value of resistor in series with the thermistor, if present. Most Smoothieboard configurations use only a pullup resistor (r2) with no series resistor...</td>
        </tr>
        <tr>
            <td><setting no-version v1="r2"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Value of the pullup resistor connected between the thermistor and VCC. Smoothieboard has built-in 4.7kΩ pullup resistors on thermistor inputs TH1-TH4.</td>
        </tr>
        <tr>
            <td><setting no-version v1="readings_per_second"></setting></td>
            <td><setting no-version v2="readings_per_second"></setting></td>
            <td class="description-cell">How many times per second the temperature sensor is read and the PID control loop is executed. Higher values provide faster response but increase CPU...</td>
        </tr>
        <tr>
            <td><setting no-version v1="rt_curve"></setting></td>
            <td><setting no-version v2="rt_curve"></setting></td>
            <td class="description-cell">Specify three temperature/resistance pairs from the thermistor datasheet, and Smoothie will automatically calculate Steinhart-Hart coefficients. Best...</td>
        </tr>
        <tr>
            <td><setting no-version v1="runaway_cooling_timeout"></setting></td>
            <td><setting no-version v2="runaway_cooling_timeout"></setting></td>
            <td class="description-cell">Maximum time allowed to cool down to target temperature when reducing temperature. If temperature doesn&#39;t reach target within this time, the system ha...</td>
        </tr>
        <tr>
            <td><setting no-version v1="runaway_error_range"></setting></td>
            <td><setting no-version v2="runaway_error_range"></setting></td>
            <td class="description-cell">Defines how close the actual temperature must be to the target to be considered &quot;reached.&quot; Used by runaway detection to determine when heating/cooling...</td>
        </tr>
        <tr>
            <td><setting no-version v1="runaway_heating_timeout"></setting></td>
            <td><setting no-version v2="runaway_heating_timeout"></setting></td>
            <td class="description-cell">Maximum time allowed from when heating starts until target temperature is reached. If the temperature doesn&#39;t reach target within this time, the syste...</td>
        </tr>
        <tr>
            <td><setting no-version v1="runaway_range"></setting></td>
            <td><setting no-version v2="runaway_range"></setting></td>
            <td class="description-cell">Once the target temperature is reached, monitors for temperature divergence. If actual temperature deviates from target by more than this amount for &gt;...</td>
        </tr>
        <tr>
            <td><setting no-version v1="sensor"></setting></td>
            <td><setting no-version v2="sensor"></setting></td>
            <td class="description-cell">Selects the temperature sensor implementation. Different sensors use different physical principles and require different configuration parameters.</td>
        </tr>
        <tr>
            <td><setting no-version v1="set_and_wait_m_code"></setting></td>
            <td><setting no-version v2="set_and_wait_m_code"></setting></td>
            <td class="description-cell">Specifies which M-code sets the target temperature and waits until that temperature is reached before continuing execution. Blocking command.</td>
        </tr>
        <tr>
            <td><setting no-version v1="set_m_code"></setting></td>
            <td><setting no-version v2="set_m_code"></setting></td>
            <td class="description-cell">Specifies which M-code sets the target temperature without waiting. Execution continues immediately after setting the temperature.</td>
        </tr>
        <tr>
            <td><setting no-version v1="spi_channel"></setting></td>
            <td><setting no-version v2="spi_channel"></setting></td>
            <td class="description-cell">Selects which hardware SPI peripheral is used to communicate with the MAX31855. Smoothieboard has two SPI channels with different pin assignments.</td>
        </tr>
        <tr>
            <td><setting no-version v1="t0"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">The temperature at which the thermistor has resistance R0. Almost always 25°C for commercial thermistors, as this is the industry standard reference p...</td>
        </tr>
        <tr>
            <td><setting no-version v1="thermistor"></setting></td>
            <td><setting no-version v2="thermistor"></setting></td>
            <td class="description-cell">Selects a pre-calibrated thermistor from the built-in database, automatically setting Steinhart-Hart coefficients or beta values. This simplifies conf...</td>
        </tr>
        <tr>
            <td><setting no-version v1="thermistor_pin"></setting></td>
            <td><setting no-version v2="thermistor_pin"></setting></td>
            <td class="description-cell">Specifies which ADC (Analog-to-Digital Converter) pin is connected to the temperature sensor. Smoothieboard provides dedicated thermistor inputs TH1 t...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="tool_id"></setting></td>
            <td class="description-cell">Tool number for M-code addressing and tool selection. Determines which temperature controller is addressed by T commands and whether the controller re...</td>
        </tr>
        <tr>
            <td><setting no-version v1="use_beta_table"></setting></td>
            <td><setting no-version v2="use_beta_table"></setting></td>
            <td class="description-cell">When using a predefined thermistor, force the use of the legacy beta table values instead of the more accurate Steinhart-Hart coefficients. Provided f...</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="use_ponm"></setting></td>
            <td class="description-cell">Use Proportional on Measurement instead of Proportional on Error. PonM mode reduces overshoot when changing setpoint by applying the P term to measure...</td>
        </tr>
        <tr>
            <td><setting no-version v1="windup"></setting></td>
            <td><setting no-version v2="windup"></setting></td>
            <td class="description-cell">When enabled, the integral term only accumulates when the output is not saturated (not at 0 or max_pwm). This alternative anti-windup strategy prevent...</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">Temperature Switch</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.enable"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.enable"></setting></td>
            <td class="description-cell">Creates and enables a new TemperatureSwitch module instance. When set to true, this module will monitor temperature from a specified TemperatureControl module and automatically control a Switch module based on configured thresholds and trigger conditions.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.designator"></setting></td>
            <td class="description-cell">Specifies which TemperatureControl module to monitor by matching its designator character. The temperature switch reads the current temperature from the temperature control module with this designator and uses it to determine when to trigger the switch. If multiple temperature control modules share the same designator, the highest temperature among them is used for comparison.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.switch"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">Specifies the name of the Switch module to be controlled by this temperature switch. When temperature conditions are met, this switch will be toggled on or off according to the configured trigger mode and inversion settings. The switch must be configured and enabled in the switch module settings before it can be controlled.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.type"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">Legacy parameter name for specifying the switch module to control. This parameter has been replaced by `temperatureswitch.switch` but is still supported for backward compatibility with older configurations. New configurations should use the `switch` parameter instead.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.threshold_temp"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.threshold_temp"></setting></td>
            <td class="description-cell">Sets the temperature threshold in degrees Celsius at which the switch state changes. The exact behavior depends on the trigger mode: in "level" mode, the switch turns on above this temperature and off below it; in "rising" mode, the switch triggers when crossing upward through this threshold; in "falling" mode, the switch triggers when crossing downward through this threshold.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.heatup_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.heatup_poll"></setting></td>
            <td class="description-cell">Defines the polling interval in seconds when the system is in the LOW_TEMP state (below threshold temperature). This controls how frequently the temperature is checked while heating up. A shorter interval provides faster response when temperature rises toward the threshold, but increases system overhead. The polling occurs on the second tick event, so actual timing may vary by ±1 second.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.cooldown_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.cooldown_poll"></setting></td>
            <td class="description-cell">Defines the polling interval in seconds when the system is in the HIGH_TEMP state (at or above threshold temperature). This controls how frequently the temperature is checked while at operating temperature or cooling down. A longer interval reduces system overhead during stable high-temperature operation, while still monitoring for temperature drops that should trigger switch state changes.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.trigger"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.trigger"></setting></td>
            <td class="description-cell">Determines the triggering behavior mode of the temperature switch. This setting controls whether the switch responds to sustained temperature levels, rising temperature edges, or falling temperature edges. The mode fundamentally changes how temperature threshold crossings are interpreted and affects the arming behavior.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.inverted"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.inverted"></setting></td>
            <td class="description-cell">Reverses the normal switch control logic. When enabled, the switch turns off when temperature exceeds the threshold (instead of turning on), and turns on when temperature drops below the threshold (instead of turning off). This is useful for controlling heating elements that should activate when temperature is too low, rather than cooling elements that activate when temperature is too high.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.arm_mcode"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.arm_mcode"></setting></td>
            <td class="description-cell">Defines a custom M-code command that must be executed to arm the temperature switch before it can trigger. This provides manual control over when the switch can activate, allowing integration with print job workflows or manual safety controls. When set to 0, the switch is always armed and operates automatically.</td>
        </tr>
        <tr>
            <td colspan="3" class="module-header">ZProbe &amp; Leveling</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.after_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.after_probe_gcode"></setting></td>
            <td class="description-cell">G-code command(s) to run after each probe point. Used for deployable probes like BLTouch that need to retract after probing....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.before_probe_gcode"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.before_probe_gcode"></setting></td>
            <td class="description-cell">G-code command(s) to run before each probe point. Used for deployable probes like BLTouch that need to extend before probing....</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="zprobe.calibration"></setting></td>
            <td class="description-cell">Selects which calibration strategy to enable. Used specifically for delta printer calibration to automatically adjust endstop trim values and delta ra...</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.dampening_start"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.dampening_start"></setting></td>
            <td class="description-cell">Z height where bed compensation begins to reduce linearly. Between dampening_start and height_limit, compensation is scaled from 100% down to 0%....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.debounce_ms"></setting></td>
            <td><setting no-version v2="zprobe.debounce_ms"></setting></td>
            <td class="description-cell">Probe signal debounce time in milliseconds. The probe signal must remain continuously triggered for this duration before being considered a valid trig...</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.do_home"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">Automatically home all axes before probing grid with G32 command. Ensures consistent starting position for repeatable grid probing....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.do_home"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.do_home"></setting></td>
            <td class="description-cell">Home before probing grid. Ensures consistent starting position for repeatable results....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.dwell_before_probing"></setting></td>
            <td><setting no-version v2="zprobe.dwell_before_probing"></setting></td>
            <td class="description-cell">Time to wait before starting each probe move. Allows mechanical settling after XY positioning and before Z probe begins....</td>
        </tr>
        <tr>
            <td>
                <setting no-version v1="zprobe.enable"></setting><br>
                <setting no-version v1="leveling-strategy.three-point-leveling.enable"></setting><br>
                <setting no-version v1="leveling-strategy.delta-calibration.enable"></setting><br>
                <setting no-version v1="leveling-strategy.delta-grid.enable"></setting><br>
                <setting no-version v1="leveling-strategy.rectangular-grid.enable"></setting><br>
            </td>
            <td><setting no-version v2="zprobe.enable"></setting></td>
            <td class="description-cell">Enables the Z-probe module. When set to true, the probe module is loaded and all probing features become available....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.fast_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.fast_feedrate"></setting></td>
            <td class="description-cell">Travel speed between probe points and for initial rapid approach moves. Does not affect probing accuracy but reduces total time for multi-point bed le...</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_x_size"></setting></td>
            <td class="description-cell">Number of probe points in X direction. Must be an odd number for proper grid symmetry....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.grid_y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.grid_y_size"></setting></td>
            <td class="description-cell">Number of probe points in Y direction. Must be an odd number....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.height_limit"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.height_limit"></setting></td>
            <td class="description-cell">Z height where bed compensation stops completely. Above this height, no compensation is applied....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.home_first"></setting></td>
            <td><setting no-version v2="three point leveling strategy.home_first"></setting></td>
            <td class="description-cell">Automatically home X and Y axes before running G32 leveling. Ensures consistent and known starting position before probing begins....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.human_readable"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.human_readable"></setting></td>
            <td class="description-cell">Display grid as a formatted table with XY coordinates when using M375.1 instead of raw floating-point values....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.initial_height"></setting></td>
            <td><setting no-version v2="delta calibration strategy.initial_height"></setting></td>
            <td class="description-cell">Height to descend to after homing before starting calibration probe. Must account for probe extension distance below effector....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.initial_height"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">Starting height for initial bed probe. Should be high enough that probe won't hit bed during initial move to center after homing....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.initial_height"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.initial_height"></setting></td>
            <td class="description-cell">Height above bed to begin initial probe search. Must be high enough that probe won't crash during initial positioning to start of grid....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.is_square"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">**DEPRECATED** - This setting is no longer supported and will produce an error if used....</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="zprobe.leveling"></setting></td>
            <td class="description-cell">Selects which bed leveling strategy to enable. Only one leveling strategy can be active at a time....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.m_attach"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Enables manual probe attachment mode for removable probes....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.max_z"></setting></td>
            <td><setting no-version v2="zprobe.max_travel"></setting></td>
            <td class="description-cell">Maximum distance the probe will travel downward before giving up on a probe attempt. Safety feature to prevent crashes....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.mount_position"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Position in machine coordinates where the machine moves and waits for manual probe attachment when m_attach is enabled....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.only_by_two_corners"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.only_by_two_corners"></setting></td>
            <td class="description-cell">When true, requires G32 to specify XYAB parameters defining the grid area instead of using configured x_size/y_size....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point1"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">First probe point coordinates in machine coordinate system, specified as comma-separated X and Y values....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point2"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Second probe point coordinates in machine coordinate system....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.point3"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Third probe point coordinates in machine coordinate system....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_height"></setting></td>
            <td><setting no-version v2="zprobe.probe_height"></setting></td>
            <td class="description-cell">Height above the bed to position the probe before starting each probing move....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.probe_offsets"></setting></td>
            <td><setting no-version v2="three point leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Offset of the probe trigger point from the nozzle tip in X, Y, and Z axes....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Probe offset from nozzle tip in X, Y, and Z. Accounts for probe position relative to nozzle during grid probing....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.probe_offsets"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.probe_offsets"></setting></td>
            <td class="description-cell">Probe offset from effector in X, Y, Z format....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.probe_pin"></setting></td>
            <td><setting no-version v2="zprobe.probe_pin"></setting></td>
            <td class="description-cell">Defines the GPIO pin connected to the probe signal....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.radius"></setting></td>
            <td><setting no-version v2="delta calibration strategy.radius"></setting></td>
            <td class="description-cell">Radius from center to probe points during calibration. Should be large enough to show tower positioning errors....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.radius"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.radius"></setting></td>
            <td class="description-cell">Radius of circular probing area from bed center. Should be at least as large as maximum printing radius....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.return_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.return_feedrate"></setting></td>
            <td class="description-cell">Speed when retracting from a probe point. When set to 0, automatically calculates as slow_feedrate * 2....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.reverse_z"></setting></td>
            <td><setting no-version v2="zprobe.reverse_z"></setting></td>
            <td class="description-cell">Probe in +Z direction instead of -Z direction. Used for specialized machine setups....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.save"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.save"></setting></td>
            <td class="description-cell">When true, M500 saves M375 command to config-override, causing grid to auto-load from /sd/delta.grid on boot....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.save"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.save"></setting></td>
            <td class="description-cell">When true, M500 will save an M375 command to config-override, causing the grid to be automatically loaded from /sd/cartesian.grid on boot....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.save_plane"></setting></td>
            <td><setting no-version v2="three point leveling strategy.save_plane"></setting></td>
            <td class="description-cell">Enable saving the calculated plane equation with M500 and restoring it with M561 ABCD parameters....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.size"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.size"></setting></td>
            <td class="description-cell">Grid size (number of points in each direction). Must be an odd number....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.size"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">Default grid size for both X and Y dimensions if grid_x_size and grid_y_size are not explicitly specified....</td>
        </tr>
        <tr>
            <td><setting no-version v1="zprobe.slow_feedrate"></setting></td>
            <td><setting no-version v2="zprobe.slow_feedrate"></setting></td>
            <td class="description-cell">Speed at which the probe approaches the bed during actual probing moves. Slower speeds improve accuracy....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.three-point-leveling.tolerance"></setting></td>
            <td><setting no-version v2="three point leveling strategy.tolerance"></setting></td>
            <td class="description-cell">If the three probe points differ by less than this amount, the bed is considered flat and no compensation is applied....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.tolerance"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">Probe tolerance threshold. Currently used for validation reporting....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-grid.tolerance"></setting></td>
            <td><setting no-version v2="delta grid leveling strategy.tolerance"></setting></td>
            <td class="description-cell">Probe tolerance for validation. Used for quality reporting....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.delta-calibration.tolerance"></setting></td>
            <td><setting no-version v2="delta calibration strategy.tolerance"></setting></td>
            <td class="description-cell">Target tolerance for calibration completion. Calibration iterates until probe height differences are within this value....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.x_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.x_size"></setting></td>
            <td class="description-cell">Width of the rectangular probing area in millimeters. Defines the X dimension of the bed area to probe and compensate....</td>
        </tr>
        <tr>
            <td><setting no-version v1="leveling-strategy.rectangular-grid.y_size"></setting></td>
            <td><setting no-version v2="cartesian grid leveling strategy.y_size"></setting></td>
            <td class="description-cell">Length of the rectangular probing area in millimeters. Defines the Y dimension of the bed area to probe and compensate....</td>
        </tr>
    </tbody>
</table>

<p><strong>Total settings:</strong> 624 rows from 22 modules</p>
{:/nomarkdown}
