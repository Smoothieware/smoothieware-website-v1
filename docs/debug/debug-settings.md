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
