# Configuration Entry Specification

**Version:** 2.0
**Date:** November 5, 2025
**Purpose:** Canonical format specification for all Smoothieware configuration setting entries in both v1 and v2 documentation

---

## Overview

This specification defines the exact format, property order, and rules for documenting every configuration setting in the Smoothieware v1 and v2 configuration reference files. All entries must conform to this specification to ensure consistency, completeness, and usability.

---

## Entry Structure

Each configuration setting entry consists of:

1. **Heading:** Level 4 heading (`####`) with setting name in backticks
2. **Properties:** Bullet list with standardized properties
3. **Sub-bullets:** 2-space indented bullets for additional details

### Template

```markdown
#### `setting_name`

* Type: `data_type`
* Default: `value` (optional conversion/clarification)
* Units: physical_unit (optional note)
* Module: `module_name` or `root`
* Context: context_description
* Defined in: `path/to/file.cpp:line_number`
* Minimum value: `min` (condition for inclusion)
* Maximum value: `max` (condition for inclusion)
* Typical values: `value1` (description), `value2` (description)
* Valid values: enumeration or range description
  * Sub-bullet for additional constraint details
  * Another sub-bullet if needed
* Required: yes/no (only if yes, or critical to note)
* Deprecated: Replaced by `new_setting_name` in version X (only if deprecated)
* Names match but different functionality: `other_version_setting` has different behavior: description
* Corresponding v1 setting: `v1.setting.name` or none
* Corresponding v2 setting: `v2.setting.name` or none
* Description: Comprehensive explanation of what the setting does, why you would use it, and how it affects behavior.
  * Important note as sub-bullet
  * Another important note
  * CRITICAL: Critical information
  * WARNING: Warning information
* Related M-Codes:
  * M123 - Description of how M-code relates to this setting
  * M456 X<param> - Description with parameter details
* Related settings: `other.setting.name`, `another.setting.name`
* Related pages: primary-module-page, related-page-1, related-page-2
* Example configuration:
  * setting_name value  # inline comment
  * module.instance.setting_name value  # comment
  * Full configuration example with context
```

---

## Canonical Property Order

Properties MUST appear in this exact order when present:

1. **Type** (MANDATORY)
2. **Default** (MANDATORY)
3. **Units** (when applicable)
4. **Module** (MANDATORY)
5. **Context** (MANDATORY)
6. **Defined in** (MANDATORY)
7. **Minimum value** (when verified from source)
8. **Maximum value** (when verified from source)
9. **Typical values** (when helpful guidance can be provided)
10. **Valid values** (when constrained to specific options/ranges)
11. **Required** (only when yes, or when critical to specify no)
12. **Deprecated** (only when setting is deprecated)
13. **Names match but different functionality** (only when v1 and v2 names match but functionality differs)
14. **Corresponding v1 setting** (MANDATORY)
15. **Corresponding v2 setting** (MANDATORY)
16. **Description** (MANDATORY)
17. **Related M-Codes** (when G-code commands interact with this setting)
18. **Related settings** (when other settings affect or are affected by this one)
19. **Related pages** (MANDATORY)
20. **Example configuration** (MANDATORY)

---

## Property Definitions

### 1. Type (MANDATORY)

**Format:** `* Type: \`data_type\``

**Purpose:** Specifies the data type of the configuration value.

**Valid Types:**
- `bool` - Boolean true/false
- `number` - Numeric value (integer or float)
- `string` - Text string
- `pin` - Hardware pin specification
- `array` - Array of values (e.g., `x,y,z`)
- `enum` - Enumerated value from fixed set

**Examples:**
```markdown
* Type: `bool`
* Type: `number`
* Type: `string`
* Type: `pin`
* Type: `array`
* Type: `enum`
```

**Notes:**
- Always use lowercase
- Enclose type in backticks
- No additional text on the same line

---

### 2. Default (MANDATORY)

**Format:** `* Default: \`value\` (optional clarification)`

**Purpose:** Specifies the default value used if the setting is not explicitly configured.

**Rules:**
- Enclose actual default value in backticks
- Include unit conversions or clarifications in parentheses outside backticks
- Use "none" or "N/A" if no default exists
- Use "See source" if default is calculated or complex
- Preserve exact format from source code

**Examples:**
```markdown
* Default: `true`
* Default: `0`
* Default: `6000` (100 mm/s - note: conversion is 6000/60)
* Default: `EPCOS100K`
* Default: none (must be explicitly set)
* Default: `0.05` (0.05mm junction deviation)
```

**Notes:**
- Always include this property even if "none"
- Clarifications are helpful for understanding units or context
- Be precise about calculated vs. literal defaults

---

### 3. Units (WHEN APPLICABLE)

**Format:** `* Units: physical_unit (optional note)`

**Purpose:** Specifies the physical unit of measurement for numeric values.

**Inclusion Criteria:**
- Include for ALL numeric settings that represent physical quantities
- Omit for dimensionless numbers (counts, ratios, multipliers)
- Omit for booleans, strings, enums, pins

**Common Units:**
- `mm` - millimeters
- `mm/s` - millimeters per second
- `mm/min` - millimeters per minute
- `mm/sec²` - millimeters per second squared
- `°C` - degrees Celsius
- `Hz` - Hertz (frequency)
- `µs` - microseconds
- `ms` - milliseconds
- `sec` - seconds
- `Ω` - ohms
- `mA` - milliamps
- `A` - amps
- `V` - volts
- `W` - watts
- `steps/mm` - steps per millimeter
- `pulses/rev` - pulses per revolution

**Examples:**
```markdown
* Units: mm
* Units: mm/s
* Units: mm/min (NOTE: Different from other extruder speeds which use mm/s)
* Units: °C
* Units: Hz (frequency for PWM)
* Units: mA (milliamps for driver current)
```

**Notes:**
- Use standard SI units and abbreviations
- Add clarifying notes in parentheses if unit is unusual or inconsistent
- Always capitalize unit abbreviations correctly (mA not ma, Hz not hz)

---

### 4. Module (MANDATORY)

**Format:** `* Module: \`module_name\`` or `* Module: `root``

**Purpose:** Identifies which module/section this setting belongs to.

**Valid Values:**
- Specific module name in backticks: `extruder`, `temperature_control`, `zprobe`, etc.
- `root` for global settings not belonging to a specific module
- Use canonical module names from the codebase

**Examples:**
```markdown
* Module: `extruder`
* Module: `temperature_control`
* Module: `zprobe`
* Module: `endstops`
* Module: `motion_control`
* Module: `root`
```

**Notes:**
- Always enclose module name in backticks
- Use underscore notation for multi-word modules (v1 style)
- For v2, use space notation where applicable but document v1 style

---

### 5. Context (MANDATORY)

**Format:** `* Context: description`

**Purpose:** Describes whether the setting is global, per-module-instance, or has special scope.

**Standard Contexts:**
- `Global setting` - Applies to entire system
- `Module instance setting` - Applies to one instance of a multi-instance module
- `Global module setting` - Applies to all instances of a module
- `Per-axis setting` - One setting per machine axis
- `Per-actuator setting` - One setting per stepper motor

**Examples:**
```markdown
* Context: Global setting
* Context: Module instance setting (can have multiple extruders)
* Context: Global module setting (affects all endstops)
* Context: Per-axis setting (alpha, beta, gamma)
* Context: Per-actuator setting for motor configuration
```

**Notes:**
- Be specific about scope
- Mention multi-instance capability where relevant
- Clarify if setting affects one vs all instances

---

### 6. Defined in (MANDATORY)

**Format:** `* Defined in: \`path/to/file.cpp:line_number\``

**Purpose:** Provides exact source code location where the setting is read/defined.

**Rules:**
- Use relative path from repository root
- Include specific line number where config is read
- Enclose entire path in backticks
- Format: `path/file.ext:line`

**Examples:**
```markdown
* Defined in: `modules/tools/extruder/Extruder.cpp:109`
* Defined in: `modules/robot/Robot.cpp:156`
* Defined in: `src/modules/motion_control/MotionControl.cpp:245`
```

**Notes:**
- Line numbers must be accurate to actual source
- Use forward slashes regardless of OS
- Helps users verify behavior and defaults

---

### 7. Minimum value (WHEN VERIFIED)

**Format:** `* Minimum value: \`value\` (source reference or constraint description)`

**Purpose:** Documents the minimum acceptable value when enforced by source code validation.

**Inclusion Criteria:**
- ONLY include when source code contains explicit validation (if statements checking minimum)
- Must be verified from actual source code, not assumed
- Include reference to source location or validation logic

**Examples:**
```markdown
* Minimum value: `0` (checked in Extruder.cpp:234)
* Minimum value: `10` (debounce must be at least 10ms per Endstops.cpp:156)
* Minimum value: `1` (at least 1 segment required)
* Minimum value: `0.001` (junction deviation cannot be zero or negative)
```

**Notes:**
- Do NOT guess or infer minimum values
- Only document when source code validates it
- Include reasoning or source reference
- Use same units as the setting

**CRITICAL:** This is part of the comprehensive Option C verification - every numeric setting must be checked for min/max validation in source code.

---

### 8. Maximum value (WHEN VERIFIED)

**Format:** `* Maximum value: \`value\` (source reference or constraint description)`

**Purpose:** Documents the maximum acceptable value when enforced by source code validation.

**Inclusion Criteria:**
- ONLY include when source code contains explicit validation (if statements checking maximum)
- Must be verified from actual source code, not assumed
- Include reference to source location or validation logic

**Examples:**
```markdown
* Maximum value: `255` (8-bit PWM limit, see TemperatureControl.cpp:445)
* Maximum value: `300` (safety limit enforced in TemperatureControl.cpp:391)
* Maximum value: `100000` (max step frequency in Hz per Robot.cpp:678)
```

**Notes:**
- Do NOT guess or infer maximum values
- Only document when source code validates it
- Include reasoning or source reference
- Use same units as the setting
- Physical/hardware limits are acceptable if documented in code

**CRITICAL:** This is part of the comprehensive Option C verification - every numeric setting must be checked for min/max validation in source code.

---

### 9. Typical values (WHEN HELPFUL)

**Format:** `* Typical values: \`value1\` (context), \`value2\` (context), \`value3\` (context)`

**Purpose:** Provides practical guidance on commonly used values with context.

**Inclusion Criteria:**
- Include when multiple common values exist
- Include when default may not be optimal for many users
- Include when values vary significantly by machine type
- Omit when setting is binary or has only one sensible value

**Rules:**
- ALWAYS use plural "values" even if listing one value
- Enclose each value in backticks
- Provide brief context for each value in parentheses
- List 1-5 typical values, prioritize most common

**Examples:**
```markdown
* Typical values: `80` (standard 1.8° stepper with GT2 belt), `100` (0.9° stepper), `400` (direct drive)
* Typical values: `6000` (100 mm/s for Z-lift), `9000` (150 mm/s for fast printers)
* Typical values: `0.05` (normal quality), `0.02` (high precision), `0.1` (fast rough cuts)
* Typical values: `true` (most printers use bed leveling)
```

**Notes:**
- Help users make informed choices
- Relate values to common use cases or hardware
- Don't just repeat the default

---

### 10. Valid values (WHEN CONSTRAINED)

**Format:** `* Valid values: description` with optional sub-bullets for details

**Purpose:** Documents constraints, enumerations, or acceptable ranges for the setting.

**Inclusion Criteria:**
- Include for enum types (must document all valid options)
- Include when source code validates against specific set
- Include when range is limited (but not just min/max, which have their own properties)
- Omit when any value of the type is acceptable

**Format Variations:**

**Enumeration:**
```markdown
* Valid values: `cartesian`, `linear_delta`, `rotary_delta`, `corexy`, `hbot`, `morgan`
  * `cartesian` - Standard XYZ gantry
  * `linear_delta` - Kossel-style delta printer
  * `corexy` - CoreXY crossed-belt system
```

**Boolean:**
```markdown
* Valid values: `true`, `false`
```

**Range:**
```markdown
* Valid values: 0-255 (8-bit PWM range)
  * Higher values = more power
  * 0 = completely off
```

**Pattern:**
```markdown
* Valid values: Pin specification in format `port.pin` (v1) or `PXn` (v2)
  * v1 example: `2.5` means port 2, pin 5
  * v2 example: `PD3` means port D, pin 3
  * Add `!` suffix to invert
  * Add `^` suffix for pullup
```

**Notes:**
- Use sub-bullets for explanatory details
- Document all enum options
- Explain pin patterns and modifiers
- Cross-reference related settings if complex

---

### 11. Required (ONLY WHEN YES OR CRITICAL)

**Format:** `* Required: yes (consequence if omitted)` or `* Required: no (when module can work without it)`

**Purpose:** Indicates whether setting is mandatory for module operation.

**Inclusion Criteria:**
- Include when setting is required (module won't work without it)
- Include when it's important to clarify it's optional (common confusion)
- Omit for most settings (optional is assumed)

**Examples:**
```markdown
* Required: yes (extruder will not be enabled without this)
* Required: yes (temperature control requires a sensor)
* Required: no (will use default if omitted)
```

**Notes:**
- Most settings don't need this property
- Use when omission causes failures or confusion
- Explain consequence of omission

---

### 12. Deprecated (ONLY WHEN APPLICABLE)

**Format:** `* Deprecated: Replaced by \`new_setting_name\` in version/firmware X. Migration: instructions.`

**Purpose:** Warns users that setting is deprecated and provides migration path.

**Inclusion Criteria:**
- ONLY include for settings that are deprecated
- Omit for all current settings
- Always provide replacement or migration guidance

**Examples:**
```markdown
* Deprecated: Replaced by `laser.pwm_pin` in Smoothieware v2. Migration: Rename setting and move to [laser] section.
* Deprecated: Removed in v2. Use TMC driver configuration in [tmc2590] section instead.
* Deprecated: Replaced by per-endstop configuration in [endstops] section as of v2.0.
```

**Notes:**
- Be specific about when deprecated (version/date)
- Always provide migration path
- Explain why deprecated if space allows

---

### 13. Names match but different functionality (ONLY WHEN APPLICABLE)

**Format:** `* Names match but different functionality: \`other_version.setting\` has different behavior: explanation`

**Purpose:** Alerts users when v1 and v2 settings have the same name but different behavior.

**Inclusion Criteria:**
- ONLY include when setting names match across versions but semantics differ
- This is a special case - most settings either match fully or don't exist in both versions
- Helps prevent dangerous misconfigurations

**Examples:**
```markdown
* Names match but different functionality: `v2.endstop.axis` uses single-letter axis names (X, Y, Z) while v1 used direction-based naming (alpha_min, alpha_max). The v1 setting name doesn't exist in v2.
* Names match but different functionality: `v1.laser_module_pwm_period` sets period in microseconds, while v2 uses `pwm1.frequency` in Hz. These are inverse relationships requiring calculation.
```

**Notes:**
- This property catches dangerous false friends
- Be very explicit about differences
- Warn about potential misconfiguration
- Rare but critical when it applies

---

### 14. Corresponding v1 setting (MANDATORY)

**Format:** `* Corresponding v1 setting: \`setting.name\`` or `* Corresponding v1 setting: none`

**Purpose:** Maps this setting to its v1 equivalent for migration purposes.

**Rules:**
- Use `none` if no corresponding v1 setting exists (new in v2)
- Use exact v1 setting name with module prefix if applicable
- Use conceptual/functional matching, not just name matching
- If multiple v1 settings map to this one, list all with explanation

**Examples:**
```markdown
* Corresponding v1 setting: `extruder.hotend.retract_length`
* Corresponding v1 setting: `alpha_steps_per_mm` (moved to actuator section in v2)
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v1 setting: `laser_module_maximum_power` (renamed in v2)
* Corresponding v1 setting: `digipotchip` + `alpha_current` (replaced by TMC driver config in v2)
```

**Notes:**
- Use config-comparison-v1-v2.md as reference
- Functional match is more important than name match
- Document significant changes (renamed, moved, replaced)
- If no match, always write "none" not "N/A" or omit

**CRITICAL:** Check config-comparison-v1-v2.md file for guidance on correspondences.

---

### 15. Corresponding v2 setting (MANDATORY)

**Format:** `* Corresponding v2 setting: \`setting.name\`` or `* Corresponding v2 setting: none`

**Purpose:** Maps this setting to its v2 equivalent for migration purposes.

**Rules:**
- Use `none` if no corresponding v2 setting exists (removed/deprecated in v2)
- Use exact v2 setting name with section notation
- Use conceptual/functional matching, not just name matching
- If multiple v2 settings map to this one, list all with explanation

**Examples:**
```markdown
* Corresponding v2 setting: `extruder.hotend.retract_length`
* Corresponding v2 setting: `actuator.alpha.steps_per_mm` (moved from root level in v1)
* Corresponding v2 setting: none (feature removed in v2)
* Corresponding v2 setting: `laser.maximum_power` (renamed from laser_module_maximum_power)
* Corresponding v2 setting: `[tmc2590]` section (replaces digipot/current control module)
```

**Notes:**
- Use config-comparison-v1-v2.md as reference
- Functional match is more important than name match
- Document significant changes (renamed, moved, replaced)
- If no match, always write "none" not "N/A" or omit

**CRITICAL:** Check config-comparison-v1-v2.md file for guidance on correspondences.

---

### 16. Description (MANDATORY)

**Format:** `* Description: main_text` with optional sub-bullets for additional details

**Purpose:** Comprehensive explanation of setting's purpose, behavior, and use cases.

**Requirements:**
- Start with clear statement of what the setting controls
- Explain why a user would set this
- Describe how it affects system behavior
- Use sub-bullets for:
  - Important notes
  - Warnings
  - Critical information
  - Caveats
  - Interactions with other settings
  - Behavioral details

**Sub-bullet Markers:**
- `CRITICAL:` - Critical information that could cause damage or data loss
- `WARNING:` - Important warning about behavior or safety
- `NOTE:` - Important note that affects usage
- `IMPORTANT:` - Important behavior or consideration
- Plain sub-bullets for additional details

**Examples:**
```markdown
* Description: Controls the speed at which the Z-axis moves during firmware retraction Z-lift operations. This setting is used for both the upward movement during G10 (retract) and the downward movement during G11 (unretract). The speed affects print quality by determining how quickly the nozzle lifts and lowers between moves.
  * CRITICAL: This is the ONLY extruder setting that uses mm/min instead of mm/s.
  * NOTE: The default value of 6000 mm/min equals 100 mm/s (6000 ÷ 60 = 100).
  * This should typically match your Z-axis max_rate to avoid unnecessary slowdown during Z-hop moves.
  * Too fast may cause layer shifts on delta printers.
  * Too slow increases print time and may cause stringing.
```

```markdown
* Description: Enables the temperature control module instance. When set to true, this temperature controller will actively monitor its sensor and maintain the target temperature using PID control or bang-bang control depending on configuration.
  * Each temperature control instance can monitor one sensor (thermistor, thermocouple, etc.)
  * Multiple instances can be created for hotends, heated beds, heated chambers, etc.
  * CRITICAL: If enabled, both thermistor_pin and heater_pin must be configured or firmware will report error.
```

**Notes:**
- Be comprehensive but concise
- Consolidate all scattered notes into Description or its sub-bullets
- Move implementation details here, not scattered elsewhere
- Cross-reference related settings in "Related settings" property, not here
- Use sub-bullets liberally for important details

**CRITICAL:** All notes, comments, warnings, and details from original entries must be preserved here or in appropriate sub-bullets. NO INFORMATION LOSS.

---

### 17. Related M-Codes (WHEN APPLICABLE)

**Format:** `* Related M-Codes:` followed by sub-bulleted list

**Purpose:** Documents G-code/M-code commands that interact with or affect this setting.

**Inclusion Criteria:**
- Include when G/M-codes can modify this setting at runtime
- Include when G/M-codes use this setting's value
- Include when G/M-codes override this setting temporarily
- Omit when no G/M-code interaction exists

**Format:**
```markdown
* Related M-Codes:
  * M123 - Description of how this M-code relates to the setting
  * M456 X<param> - Description with parameter details
  * G789 - How this G-code uses the setting
```

**Examples:**
```markdown
* Related M-Codes:
  * M207 Q<speed_mm_per_min> - Set Z-lift speed at runtime (in mm/min)
  * M207 Q<speed> P<extruder_id> - Set Z-lift speed for specific extruder
  * M500 - Save current value to config-override
  * M501 - Load saved value from config-override
```

```markdown
* Related M-Codes:
  * M104 S<temp> - Set target temperature for this hotend
  * M109 S<temp> - Set and wait for temperature
  * M303 E<id> S<temp> C<cycles> - PID autotune for this heater
  * M500 - Save PID values to config-override
```

**Notes:**
- List most relevant M-codes first
- Include parameter syntax if applicable
- Explain how M-code affects or uses the setting
- Don't duplicate G/M-code full documentation here, just relationship

---

### 18. Related settings (WHEN APPLICABLE)

**Format:** `* Related settings: \`setting.one\`, \`setting.two\`, \`setting.three\``

**Purpose:** Lists other configuration settings that interact with, depend on, or affect this setting.

**Inclusion Criteria:**
- Include when other settings must be configured together
- Include when other settings override or modify behavior
- Include when settings form a logical group
- Limit to 3-6 most relevant settings
- Omit when setting is independent

**Examples:**
```markdown
* Related settings: `extruder.hotend.retract_zlift_length`, `motion_control.z_axis_max_speed`
* Related settings: `alpha_steps_per_mm`, `alpha_dir_pin`, `alpha_en_pin`, `alpha_current`
* Related settings: `zprobe.enable`, `zprobe.probe_pin`, `leveling-strategy`
```

**Notes:**
- Use comma-separated list
- Enclose each setting name in backticks
- Order by relevance
- Don't explain here, just list (explanations go in Description)

---

### 19. Related pages (MANDATORY)

**Format:** `* Related pages: primary-module-page, related-page-1, related-page-2, related-page-3`

**Purpose:** Links to relevant documentation pages for deeper understanding.

**Requirements:**
- ALWAYS include the setting's primary module page first
- Include 2-3 additional most relevant pages (maximum 3 additional)
- Use page slugs from all-page-descriptions.md
- Separate with commas (not bullets)
- Total pages: 1 (module) + up to 3 (additional) = 1-4 pages

**Examples:**
```markdown
* Related pages: extruder, firmware-retraction, g10-g11
* Related pages: temperaturecontrol, temperaturecontrol-pid-autotuning, temperaturecontrol-pid
* Related pages: zprobe, delta-calibration-strategy-options, endstops
* Related pages: motion-control
```

**Notes:**
- Use all-page-descriptions.md as reference for valid page names
- Choose pages that provide context or deeper documentation
- Module page is always first
- Fewer is better than tangentially related pages

**CRITICAL:** Check all-page-descriptions.md for exact page names and descriptions to choose most relevant pages.

---

### 20. Example configuration (MANDATORY)

**Format:** `* Example configuration:` followed by 2-space indented sub-bullets

**Purpose:** Shows practical usage examples with inline comments.

**Requirements:**
- Use 2-space indented sub-bullets (NOT code blocks)
- Include inline comments with `#` for explanation
- Show realistic values, not placeholders
- Include multiple examples if setting varies by use case
- Show full module.instance.setting syntax for module settings
- Show simplified syntax for root settings

**Format:**
```markdown
* Example configuration:
  * setting_name value  # inline comment explaining this value
  * module.instance.setting_name value  # comment
  * Full example showing practical use case
```

**Examples:**
```markdown
* Example configuration:
  * extruder.hotend.retract_zlift_feedrate 6000  # 100 mm/s (default)
  * extruder.hotend.retract_zlift_feedrate 9000  # 150 mm/s (fast printer)
  * extruder.hotend2.retract_zlift_feedrate 4800  # 80 mm/s (slower for accuracy)
```

```markdown
* Example configuration:
  * temperature_control.hotend.enable true
  * temperature_control.hotend.tool_id 0  # T0 hotend
  * temperature_control.hotend.designator T
  * temperature_control.bed.enable true
  * temperature_control.bed.tool_id 254  # Bed designation
  * temperature_control.bed.designator B
```

```markdown
* Example configuration:
  * alpha_steps_per_mm 80  # GT2 belt with 1.8° stepper
  * alpha_steps_per_mm 100  # GT2 belt with 0.9° stepper
  * alpha_steps_per_mm 400  # Direct drive leadscrew (2mm pitch)
```

**Notes:**
- Examples should teach, not just repeat the default
- Show variations for different hardware or use cases
- Comments explain WHY, not just WHAT
- Use realistic values from real configurations

---

## Formatting Rules

### General Rules

1. **Property format:** `* Property_name: value`
   - Single asterisk, space, property name, colon, space, value
   - Property name is NOT in bold
   - Value may contain backticks for code/settings

2. **Sub-bullet format:**
   - 2-space indent before asterisk
   - Format: `  * Sub-bullet content`
   - Used for: Valid values details, Description notes, Related M-Codes, Example configuration

3. **Backtick usage:**
   - Setting names: `setting_name`
   - Values: `true`, `0`, `PD3`
   - Types: `bool`, `number`
   - Module names: `extruder`
   - File paths: `path/file.cpp:line`
   - Code examples: inline backticks

4. **Spacing:**
   - No blank lines between properties within an entry
   - No blank lines before sub-bullets
   - One blank line between different settings (before #### heading)
   - Section dividers `---` between major module groups

5. **Consistency:**
   - ALWAYS use established property names (no variations)
   - ALWAYS follow canonical order
   - ALWAYS use standard units and abbreviations
   - ALWAYS preserve all information from original entries

---

## Special Cases

### Boolean Settings

```markdown
#### `enable`

* Type: `bool`
* Default: `false`
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:45`
* Valid values: `true`, `false`
* Corresponding v1 setting: `extruder.hotend.enable`
* Corresponding v2 setting: `extruder.hotend.enable`
* Description: Enables the extruder module instance. When true, the extruder will be available for tool selection and will process E-axis commands.
  * Multiple extruders can be enabled by creating multiple instances.
  * Each enabled extruder must have a unique tool_id.
* Related settings: `extruder.tool_id`, `temperature_control.enable`
* Related pages: extruder, multiple-extruders
* Example configuration:
  * extruder.hotend.enable true  # Enable primary extruder
  * extruder.hotend2.enable true  # Enable second extruder for dual extrusion
```

### Pin Settings

```markdown
#### `step_pin`

* Type: `pin`
* Default: none (must be explicitly set)
* Module: `actuator` (v2) or `root` (v1)
* Context: Per-actuator setting
* Defined in: `modules/robot/actuator/ActuatorCoordinates.cpp:234`
* Valid values: Pin specification in format `port.pin` (v1) or `PXn` (v2)
  * v1 format: `2.5` means port 2, pin 5
  * v2 format: `PD3` means port D, pin 3
  * Add `!` suffix to invert: `2.5!` or `PD3!`
  * Add `^` suffix for pullup: `2.5^` or `PD3^`
* Corresponding v1 setting: `alpha_step_pin`, `beta_step_pin`, etc.
* Corresponding v2 setting: `actuator.alpha.step_pin`, `actuator.beta.step_pin`, etc.
* Description: Defines the GPIO pin used for sending step pulses to the stepper motor driver. Each step pulse advances the motor by one microstep. The pin must be connected to the STEP input of your stepper driver.
  * CRITICAL: Incorrect pin assignment can cause motors not to move or move the wrong axis.
  * Consult your board's pinout diagram for correct pin assignments.
* Related settings: `alpha_dir_pin`, `alpha_en_pin`, `alpha_current`
* Related pages: pinout, stepper-motors, pin-configuration
* Example configuration:
  * alpha_step_pin 2.0  # v1 format for X-axis
  * actuator.alpha.step_pin PD3  # v2 format for X-axis
  * actuator.alpha.step_pin PD3!  # Inverted signal if driver needs it
```

### Enumerated Settings

```markdown
#### `arm_solution`

* Type: `enum`
* Default: `cartesian`
* Module: `motion_control` (v2) or `root` (v1)
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:67`
* Valid values: `cartesian`, `linear_delta`, `corexy`, `hbot`, `morgan`, `rotary_delta`
  * `cartesian` - Standard XYZ gantry (most common for mills and 3D printers)
  * `linear_delta` - Kossel-style delta printer with linear carriages
  * `rotary_delta` - Delta with rotary joints (experimental, v1 only)
  * `corexy` - CoreXY crossed-belt system
  * `hbot` - H-Bot crossed-belt system
  * `morgan` - Morgan SCARA arm
* Required: no (defaults to cartesian if omitted)
* Corresponding v1 setting: `arm_solution`
* Corresponding v2 setting: `motion_control.arm_solution`
* Description: Specifies the kinematics solution that converts Cartesian coordinates (X, Y, Z) into actuator positions for your machine type. This is one of the most fundamental settings as it determines how motion commands are interpreted. Each arm solution has its own set of additional parameters (arm_length, arm_radius, etc.) that must be configured.
  * Changing this requires reconfiguring many other settings.
  * CRITICAL: Must match your physical machine configuration.
  * Most users will use `cartesian` or `linear_delta`.
* Related settings: `arm_length`, `arm_radius` (for deltas), `x_reduction`, `z_reduction` (for CoreXZ)
* Related pages: arm-solutions, delta, cartesian, corexy, hbot
* Example configuration:
  * arm_solution cartesian  # Standard XYZ mill or Cartesian printer
  * arm_solution linear_delta  # Kossel-style delta printer
  * arm_solution corexy  # CoreXY 3D printer
```

### Settings with Complex Units

```markdown
#### `retract_zlift_feedrate`

* Type: `number`
* Default: `6000` (100 mm/s)
* Units: mm/min (NOTE: This is the ONLY extruder setting using mm/min instead of mm/s)
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:109`
* Minimum value: `60` (1 mm/s minimum, checked in firmware)
* Maximum value: `30000` (500 mm/s maximum to prevent mechanical damage)
* Typical values: `6000` (100 mm/s, default), `9000` (150 mm/s for fast printers), `4800` (80 mm/s for high precision)
* Corresponding v1 setting: `extruder.hotend.retract_zlift_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_zlift_feedrate`
* Description: Speed for Z-axis movement during firmware retraction Z-lift operations. Used for both upward movement during G10 (retract with Z-lift) and downward movement during G11 (unretract). The Z-lift feature temporarily raises the nozzle during travel moves to prevent dragging across printed parts and reduce stringing.
  * CRITICAL: This is the ONLY extruder setting that uses mm/min instead of mm/s.
  * The default 6000 mm/min equals 100 mm/s (division by 60 happens in firmware).
  * Should typically match your Z-axis max_rate to avoid unnecessary slowdown.
  * Too fast may cause layer shifts on delta printers or skipped steps.
  * Too slow increases print time and may worsen stringing on long travels.
  * Only takes effect if retract_zlift_length > 0.
* Related M-Codes:
  * M207 Q<speed_mm_per_min> - Set Z-lift speed at runtime (in mm/min)
  * M207 Q<speed> P<extruder_id> - Set for specific extruder instance
  * M500 - Save current value to config-override
  * M501 - Reload from config-override
* Related settings: `extruder.retract_zlift_length`, `motion_control.z_axis_max_speed`, `extruder.retract_feedrate`
* Related pages: extruder, firmware-retraction, g10-g11
* Example configuration:
  * extruder.hotend.retract_zlift_feedrate 6000  # 100 mm/s (default, general purpose)
  * extruder.hotend.retract_zlift_feedrate 9000  # 150 mm/s (fast delta printer)
  * extruder.hotend2.retract_zlift_feedrate 4800  # 80 mm/s (second extruder, more conservative)
```

---

## Verification Checklist

Before submitting a refined entry, verify:

- [ ] All MANDATORY properties present
- [ ] Properties in canonical order
- [ ] Sub-bullets use 2-space indent
- [ ] All values in backticks where appropriate
- [ ] Units specified for physical quantities
- [ ] Min/max values verified from source (if included)
- [ ] Corresponding v1/v2 settings documented (or "none")
- [ ] Description comprehensive with sub-bullets for details
- [ ] Related pages checked against all-page-descriptions.md
- [ ] Example configuration uses sub-bullets, not code blocks
- [ ] No information lost from original entry
- [ ] Format exactly matches specification

---

## Quality Standards

### Completeness
- Every property that applies MUST be included
- No information from original entry may be lost
- All notes, warnings, and comments must be preserved

### Accuracy
- All source file references must be correct
- All default values must match source code
- Min/max values ONLY if verified in source
- Corresponding settings must be functionally accurate

### Consistency
- Use exact property names from specification
- Follow canonical order without exception
- Use standard units and abbreviations
- Maintain formatting rules throughout

### Clarity
- Descriptions must be understandable by target audience
- Examples must be practical and realistic
- Comments must explain WHY not just WHAT
- Technical terms used correctly

---

## Notes for Refinement Agents

When refining configuration entries:

1. **Read existing entry completely** - understand all information present
2. **Extract all information** - notes, comments, warnings, special cases
3. **Verify source code** - check defaults, validate min/max
4. **Check correspondence** - use config-comparison-v1-v2.md
5. **Check related pages** - use all-page-descriptions.md
6. **Restructure to specification** - apply canonical order
7. **Consolidate information** - move notes to Description sub-bullets
8. **Write clear examples** - show practical usage
9. **Verify completeness** - ensure no information lost
10. **Check formatting** - exact compliance with specification

**CRITICAL RULE:** If information doesn't fit perfectly into the specification, be creative in placement (use Description sub-bullets or Valid values sub-bullets) but NEVER discard information.

---

## Revision History

- **Version 2.0** (2025-11-05): Comprehensive specification with canonical order, sub-bullet formatting, and cross-version correspondence
- **Version 1.0** (2025-11-04): Initial specification for consolidated documentation

---

**This specification is authoritative for all Smoothieware configuration documentation. All entries must conform exactly.**
