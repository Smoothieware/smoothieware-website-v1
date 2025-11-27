---
permalink: /extruder
---


{% include machine-guides/3d-printers/extruder-guide-for-include.md %}

## All options

All of the options currently supported by the Extruder module:

{% include modules/extruders/extruder-options-for-include.md %}

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This is the new format which allows multiple extruders. The old format is deprecated. The old "one-extruder-only" configuration options will still be valid for backward compatibility, but it is recommended not to use them.<br><br>
  For example where before you used `extruder_steps_per_mm` you must now use <setting v1="extruder.{name}.steps_per_mm" v2="extruder.{name}.steps_per_mm"></setting>.
</sl-alert>

## Version-Specific Configuration

Smoothieware V1 and V2 use different configuration file formats. Understanding these differences is important when setting up your extruder.

### Configuration File Format Differences

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Smoothieware V1: Flat Format**

V1 uses a flat configuration format where all settings are on one line with spaces separating the key and value:

```
# Basic extruder configuration
extruder.hotend.enable                          true
extruder.hotend.steps_per_mm                    140
extruder.hotend.acceleration                    500
extruder.hotend.max_speed                       50

# Pin assignments
extruder.hotend.step_pin                        2.3
extruder.hotend.dir_pin                         0.22
extruder.hotend.en_pin                          0.21

# Firmware retraction settings
extruder.hotend.retract_length                  3
extruder.hotend.retract_feedrate                45
extruder.hotend.retract_recover_length          0
extruder.hotend.retract_recover_feedrate        8
```

**Key characteristics:**
- Dot-separated hierarchical naming
- Values separated from keys by whitespace
- Comments start with `#`
- No section headers
- All settings in a single flat namespace

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Smoothieware V2: INI Format**

V2 uses an INI-style configuration format with section headers and equals signs:

```ini
# Basic extruder configuration
[extruder]
hotend.enable = true
hotend.steps_per_mm = 140

[actuator delta]
acceleration = 500

[motion control]
max_speed = 50

# Pin assignments
[extruder]
hotend.step_pin = 2.3
hotend.dir_pin = 0.22
hotend.en_pin = 0.21

# Firmware retraction settings
[extruder]
hotend.retract_length = 3
hotend.retract_feedrate = 45
hotend.retract_recover_length = 0
hotend.retract_recover_feedrate = 8
```

**Key characteristics:**
- INI-style section headers `[section name]`
- Settings use `key = value` format
- Comments start with `#`
- Settings organized by logical sections
- Some settings moved to different sections (e.g., acceleration to `[actuator delta]`)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Hotend/Extruder Naming and Enable Flags

When configuring multiple extruders, V1 and V2 handle naming and enable flags differently:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Extruder Naming:**

In V1, each extruder is configured by choosing a unique name (like `hotend`, `hotend2`, `extruder1`, etc.) and using that name consistently across all settings:

```
# First extruder (uses delta/M4 driver)
extruder.hotend.enable                          true
extruder.hotend.steps_per_mm                    140
extruder.hotend.step_pin                        2.3
extruder.hotend.dir_pin                         0.22
extruder.hotend.en_pin                          0.21

# Second extruder (uses epsilon/M5 driver)
extruder.hotend2.enable                         true
extruder.hotend2.steps_per_mm                   140
extruder.hotend2.step_pin                       2.8
extruder.hotend2.dir_pin                        2.13
extruder.hotend2.en_pin                         4.29
extruder.hotend2.x_offset                       25.0
extruder.hotend2.y_offset                       0.0
extruder.hotend2.z_offset                       0.0
```

**Important V1 details:**
- The name you choose (e.g., `hotend`, `hotend2`) is arbitrary but must be unique
- Each extruder must have `extruder.<name>.enable true` to be activated
- The order of definition determines tool number (first = T0, second = T1)
- Common naming conventions: `hotend`/`hotend2`, `extruder`/`extruder2`, `e0`/`e1`
- All settings for one extruder share the same name: `extruder.<name>.*`

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Extruder Naming:**

In V2, extruders are configured within `[extruder]` sections, and the naming follows the INI format:

```ini
# First extruder (uses delta/M4 driver)
[extruder]
hotend.enable = true
hotend.steps_per_mm = 140
hotend.step_pin = 2.3
hotend.dir_pin = 0.22
hotend.en_pin = 0.21

# Second extruder (uses epsilon/M5 driver)
[extruder]
hotend2.enable = true
hotend2.steps_per_mm = 140
hotend2.step_pin = 2.8
hotend2.dir_pin = 2.13
hotend2.en_pin = 4.29
hotend2.x_offset = 25.0
hotend2.y_offset = 0.0
hotend2.z_offset = 0.0
```

**Important V2 details:**
- All extruders are configured under `[extruder]` section headers
- Each extruder instance uses a unique name (e.g., `hotend`, `hotend2`)
- The enable flag pattern is `<name>.enable = true`
- Some settings may be in different sections (acceleration in `[actuator delta]`, max_speed in `[motion control]`)
- The section-based organization groups related settings together

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Complete Single Extruder Example

Here's a complete basic configuration for a single extruder in both formats:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
# Extruder module configuration (V1)
extruder.hotend.enable                          true
extruder.hotend.steps_per_mm                    140
extruder.hotend.acceleration                    500
extruder.hotend.max_speed                       50
extruder.hotend.step_pin                        2.3
extruder.hotend.dir_pin                         0.22
extruder.hotend.en_pin                          0.21

# Current control for delta driver (M4)
delta_current                                   1.5
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
# Extruder module configuration (V2)
[extruder]
hotend.enable = true
hotend.steps_per_mm = 140
hotend.step_pin = 2.3
hotend.dir_pin = 0.22
hotend.en_pin = 0.21

[actuator delta]
acceleration = 500

[motion control]
max_speed = 50

[current control]
delta = 1.5
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Complete Dual Extruder Example

For dual extruder setups, here's how to configure both extruders:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
# First extruder (T0) on delta/M4 driver
extruder.hotend.enable                          true
extruder.hotend.steps_per_mm                    140
extruder.hotend.acceleration                    500
extruder.hotend.max_speed                       50
extruder.hotend.step_pin                        2.3
extruder.hotend.dir_pin                         0.22
extruder.hotend.en_pin                          0.21

# Second extruder (T1) on epsilon/M5 driver
extruder.hotend2.enable                         true
extruder.hotend2.steps_per_mm                   140
extruder.hotend2.acceleration                   500
extruder.hotend2.max_speed                      50
extruder.hotend2.step_pin                       2.8
extruder.hotend2.dir_pin                        2.13
extruder.hotend2.en_pin                         4.29
extruder.hotend2.x_offset                       25.0
extruder.hotend2.y_offset                       0.0
extruder.hotend2.z_offset                       0.0

# Current control
delta_current                                   1.5
epsilon_current                                 1.5
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
# First extruder (T0) on delta/M4 driver
[extruder]
hotend.enable = true
hotend.steps_per_mm = 140
hotend.step_pin = 2.3
hotend.dir_pin = 0.22
hotend.en_pin = 0.21

# Second extruder (T1) on epsilon/M5 driver
[extruder]
hotend2.enable = true
hotend2.steps_per_mm = 140
hotend2.step_pin = 2.8
hotend2.dir_pin = 2.13
hotend2.en_pin = 4.29
hotend2.x_offset = 25.0
hotend2.y_offset = 0.0
hotend2.z_offset = 0.0

[actuator delta]
acceleration = 500

[actuator epsilon]
acceleration = 500

[motion control]
max_speed = 50

[current control]
delta = 1.5
epsilon = 1.5
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  When migrating from V1 to V2, pay special attention to settings that have moved to different sections. The most common are <code>acceleration</code> (moved to <code>[actuator]</code> sections) and <code>max_speed</code> (moved to <code>[motion control]</code>). Refer to the options table above for the exact V2 location of each setting.
</sl-alert>

## G-code

Here are the G-code commands currently supported by the Extruder module:

{::nomarkdown}
<table>
<thead>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><gcode>G0</gcode>/<gcode>G1</gcode></td>
<td>Move to the given coordinates. The <raw>F</raw> parameter defines speed and is remembered by subsequent commands (specified in millimetres/minute) (command is modal)</td>
</tr>
<tr>
<td><gcode>G10</gcode></td>
<td>Do firmware extruder retract</td>
</tr>
<tr>
<td><gcode>G11</gcode></td>
<td>Do firmware extruder un-retract</td>
</tr>
<tr>
<td><gcode>G90</gcode></td>
<td>Absolute mode (default): passed coordinates will be considered absolute (command is modal)</td>
</tr>
<tr>
<td><gcode>G91</gcode></td>
<td>Relative mode: passed coordinates will be considered relative to the current point (command is modal). Make sure you use <gcode>G92 E0</gcode> to reset the extruder position every layer.</td>
</tr>
<tr>
<td><gcode>G92</gcode></td>
<td>Set current position to specified coordinates (example: <gcode>G92 E0</gcode>)</td>
</tr>
<tr>
<td><mcode>M17</mcode></td>
<td>Turn the active stepper motor driver's off</td>
</tr>
<tr>
<td><mcode>M18</mcode></td>
<td>Turn the active stepper motor driver's on</td>
</tr>
<tr>
<td><mcode>M82</mcode></td>
<td>Set absolute mode for extruder only</td>
</tr>
<tr>
<td><mcode>M83</mcode></td>
<td>Set relative mode for extruder only</td>
</tr>
<tr>
<td><mcode>M84</mcode></td>
<td>Turn off stepper motor drivers</td>
</tr>
<tr>
<td><mcode>M92</mcode></td>
<td>Set this axis' steps per millimetre. For example <mcode>M92 E100</mcode> to set for the currently active Extruder, or <raw>T1</raw> <mcode>M92 E100</mcode> to set for the second extruder.</td>
</tr>
<tr>
<td><mcode>M114</mcode></td>
<td>Displays <raw>XYZ</raw> position, as well as the <raw>E</raw> position of the currently active Extruder</td>
</tr>
<tr>
<td><mcode>M200</mcode></td>
<td>Set <raw>E</raw> units for volumetric extrusion - <raw>D&lt;filament diameter&gt;</raw> set to 0 to disable volumetric extrusion, for example: <mcode>M200 D3.0</mcode> to set for the currently active Extruder, and <mcode>M200 D3.0 P3</mcode> to set for the third Extruder.</td>
</tr>
<tr>
<td><mcode>M203</mcode></td>
<td>Set maximum rate for axis, set <raw>E</raw> for Extruder axis or <raw>V</raw> for volumetric extrusion limit, for example: <mcode>M203 V10</mcode> will limit extrusion moves to no faster than 10mm³/s. <mcode>M203 V0</mcode> disables.</td>
</tr>
<tr>
<td><mcode>M204</mcode></td>
<td>Set acceleration in mm/sec², <raw>E&lt;nnn&gt;</raw> sets extruder only move acceleration, for example: <mcode>M204 E500</mcode>. <raw>P</raw> selects the extruder, uses the currently active extruder if omitted.</td>
</tr>
<tr>
<td><mcode>M207</mcode></td>
<td>Set retract length <raw>S&lt;positive|mm&gt;</raw> <raw>F&lt;feedrate|mm/min&gt;</raw> <raw>Z&lt;additional|zlift/hop&gt;</raw> <raw>Q&lt;zlift|feedrate mm/min&gt;</raw>, for example: <mcode>M207 S4 F30 Z1</mcode></td>
</tr>
<tr>
<td><mcode>M208</mcode></td>
<td>Set retract recover length <raw>S&lt;positive|mm surplus to the <mcode>M207</mcode> S*&gt;</raw> <raw>F&lt;feedrate|mm/min&gt;</raw>, for example: <mcode>M208 S0 F8</mcode></td>
</tr>
<tr>
<td><mcode>M221</mcode></td>
<td><raw>S&lt;flow rate factor in percent&gt;</raw>: Set flow rate factor override percentage for current extruder</td>
</tr>
<tr>
<td><mcode>M500</mcode></td>
<td>Save volatile settings to an override file</td>
</tr>
<tr>
<td><mcode>M503</mcode></td>
<td>Display volatile settings</td>
</tr>
</tbody>
</table>
{:/nomarkdown}

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/extruder/Extruder.cpp">here</a>.
</sl-alert>

### External resources

<iframe width="100%" height="720" src="https://www.youtube.com/embed/YUPfBJz3I6Y" frameborder="0" allowfullscreen></iframe>
