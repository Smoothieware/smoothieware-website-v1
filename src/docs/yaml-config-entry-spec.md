# YAML Configuration Entry Specification - Smoothieware v1/v2

This document defines the complete, standardized YAML structure for Smoothieware configuration settings, applicable to both V1 and V2 firmware.

## Overview

Configuration files are structured as YAML with two top-level keys:
- `metadata`: Information about the configuration file itself
- `modules`: Array of module/category objects containing settings

## File Structure

```yaml
metadata:
  version: string              # "v1" or "v2"
  total_settings: number       # Total count of settings in this file
  total_modules: number        # Total count of modules/categories
  last_updated: string         # ISO 8601 date (YYYY-MM-DD)
  firmware_repo: string        # GitHub repository path
  source_file: string          # Original markdown file path

modules:
  - name: string
    description: string
    setting_count: number
    settings:
      - name: string
        # ... setting properties (see Setting Object Specification below)
```

## Metadata Object Specification

```yaml
metadata:
  version: "v1" or "v2"
  total_settings: 308           # For v1
  total_modules: 13             # Number of major setting categories
  last_updated: "2025-11-06"
  firmware_repo: "Smoothieware/Smoothieware"
  source_file: "src/docs/smoothieware-v1-config.md"
```

## Module Object Specification

Each module represents a major category of settings (e.g., "Robot & Motion Control", "Endstops", "Temperature Control"):

```yaml
modules:
  - name: "Robot & Motion Control"
    description: "Core motion planning, kinematics, and speed control settings"
    setting_count: 63
    settings:
      - # Array of setting objects
```

## Setting Object Specification

### Required Fields

ALL settings MUST have these fields:

- **name** (string): The setting name
  - V1: Plain name (e.g., `acceleration`)
  - V2: Name without section prefix (e.g., `default_acceleration` not `motion control.default_acceleration`)

- **type** (string): Data type
  - Valid values: `number`, `string`, `bool`, `pin`, `enum`

- **default** (string|number|boolean|null): Default value
  - Use `null` if no default exists
  - Preserve original format/precision (e.g., `100.0` not `100`)
  - String values in quotes for enums
  - Special values: `NAN`, `"nc"`, `""` (empty string)

- **module** (string): Module/category name
  - Examples: `root`, `motion_control`, `temperature_control`, `switch`, `endstops`, `spindle`, `extruder`, `player`, `network`

- **context** (string): Setting scope
  - Examples: "Global setting", "Module instance setting", "Per-axis setting", "Per-actuator setting"

- **defined_in** (string): Source file and line number(s)
  - Format: `"path/to/file.cpp:line"`
  - Multiple locations: `"path/to/file.cpp:line1,line2"`
  - Line ranges: `"path/to/file.cpp:line1-line3"`
  - Examples: `"modules/robot/Robot.cpp:228"`, `"modules/tools/endstops/Endstops.cpp:179"`

- **corresponding_v1** (string): Equivalent V1 setting name
  - Use `"none"` if setting doesn't exist in V1
  - Use `"N/A"` if this IS a V1 setting (no v1 equivalent of itself)
  - Plain setting name (e.g., `"acceleration"`)

- **corresponding_v2** (string): Equivalent V2 setting name
  - Use `"none"` if setting doesn't exist in V2
  - Use `"N/A"` if this IS a V2 setting (no v2 equivalent of itself)
  - Include section prefix for V2 (e.g., `"motion control.default_acceleration"`)

- **description** (string): Main description paragraph(s)
  - Multi-paragraph descriptions joined with `\n\n`
  - Preserve original wording exactly
  - Do NOT include bullet points here (use `description_bullets` array)

### Common Optional Fields

Settings SHOULD have these fields when applicable:

- **section** (string): INI section name (V2 only)
  - Format: `"[section name]"` with brackets
  - Examples: `"[system]"`, `"[motion control]"`, `"[actuator]"`, `"[planner]"`
  - Only applicable to V2 settings
  - Omit for V1 or root-level V2 settings

- **units** (string): Units of measurement
  - Examples: `"mm/min"`, `"mm/s²"`, `"°C"`, `"µs"`, `"Hz"`, `"mm"`, `"RPM"`, `"degrees"`, `"ms"`, `"seconds"`
  - Use exact notation from source (including special characters)

- **minimum_value** (string|number|null): Minimum allowed value
  - Include if documented in source
  - Can be numeric or string (e.g., `"0.0"`)

- **maximum_value** (string|number|null): Maximum allowed value
  - Include if documented in source

- **typical_values** (array of objects): Common/recommended values with explanations
  - Each item: `{value: <string|number>, description: <string>}`
  - Example:
    ```yaml
    typical_values:
      - value: 100
        description: "general purpose"
      - value: 500
        description: "fast 3D printer"
      - value: 1000
        description: "light CNC with good mechanics"
      - value: 50
        description: "heavy machine"
    ```

- **valid_values** (array of objects): Enumerated valid values (for enum/string types)
  - Each item: `{value: <string>, description: <string>}`
  - Used for settings with fixed allowed values
  - Example:
    ```yaml
    valid_values:
      - value: "cartesian"
        description: "Standard XYZ gantry with one motor per axis (most common)"
      - value: "linear_delta"
        description: "Kossel-style delta printer with three vertical linear rails"
      - value: "corexy"
        description: "CoreXY crossed-belt system (two motors control XY)"
    ```

- **pin_values** (array of objects): Valid pin specifications (for pin types)
  - Each item: `{value: <string>, description: <string>}`
  - Include format examples and modifiers
  - Example:
    ```yaml
    pin_values:
      - value: "2.0"
        description: "Port 2, Pin 0 (V1 format)"
      - value: "2.0^"
        description: "Port 2, Pin 0 with pull-up enabled"
      - value: "!2.0"
        description: "Port 2, Pin 0 with inverted logic"
      - value: "^!2.0"
        description: "Port 2, Pin 0 with pull-up and inverted logic"
      - value: "nc"
        description: "Not connected (disabled)"
    ```

- **description_bullets** (array of strings): Bullet points from description
  - Each bullet becomes an array item
  - Preserve exact wording
  - Includes all indented bullet content
  - Example:
    ```yaml
    description_bullets:
      - "This is a global default that applies to all axes unless specifically overridden"
      - "Per-axis acceleration settings (in actuator configuration) take precedence over this value"
      - "Z-axis often benefits from lower acceleration than XY to prevent layer artifacts"
    ```

- **related_m_codes** (array of objects): Related M-codes
  - Each item: `{code: <string>, description: <string>}`
  - Example:
    ```yaml
    related_m_codes:
      - code: "M500"
        description: "Save current configuration to override file"
      - code: "M501"
        description: "Reload configuration from override file"
      - code: "M503"
        description: "Display current configuration"
    ```

- **related_settings** (array of strings): Related configuration settings
  - Plain setting names
  - Example: `["x_axis_max_speed", "y_axis_max_speed", "z_axis_max_speed", "max_speed"]`

- **related_pages** (array of strings): Related documentation pages
  - Page identifiers (typically slugs)
  - Example: `["motion-control", "g1", "configuring-smoothie", "3d-printer-guide"]`

- **examples** (array of strings): Example configuration lines
  - Each example line from markdown becomes an array item
  - Preserve comments and formatting
  - V1 format: `setting value  # Comment`
  - V2 format: `setting = value  # Comment`
  - Example:
    ```yaml
    examples:
      - "acceleration 100.0  # Default conservative setting"
      - "acceleration 500  # Fast 3D printer with good mechanical rigidity"
      - "acceleration 1000  # Light CNC mill with precision components"
    ```

- **notes** (array of strings): Additional notes/warnings
  - Special warnings, compatibility notes, or important information
  - Example:
    ```yaml
    notes:
      - "CRITICAL: Setting this too high will cause stuttering"
      - "WARNING: Invalid firmware files will cause boot failure"
      - "This is a global default that applies to all axes"
    ```

- **required** (boolean): Whether this setting is required
  - Default: `false`
  - Set to `true` if explicitly marked as required
  - Example: `required: true` for `arm_solution`

- **deprecated** (boolean): Whether this setting is deprecated
  - Default: `false`
  - Set to `true` if explicitly marked as deprecated

- **applicability** (string): Conditional applicability statement
  - Describes when this setting applies
  - Example: `"Applicable to: PWM spindle only (spindle.type = \"pwm\")"`
  - Example: `"Only applies when arm_solution is corexz"`
  - Example: `"Only used for delta kinematics"`

- **validation_rule** (string): Validation constraints
  - Format description or constraint
  - Example: `"Format: \"x,y,z\" with comma separators (no spaces recommended)"`
  - Example: `"Must be positive number (typically integer)"`
  - Example: `"Values: 0.0 = 0% duty cycle, 1.0 = 100% duty cycle"`

- **error_messages** (array of strings): Documented error messages
  - Error messages that can be generated
  - Example:
    ```yaml
    error_messages:
      - "ERROR: No valid spindle type defined"
      - "Error: Spindle PWM pin must be P2.0-2.5 or other PWM pin"
    ```

### Special Optional Fields

- **conditional_default** (object): Default value that changes based on other settings
  - Structure: `{condition: <string>, value: <any>}`
  - Example:
    ```yaml
    conditional_default:
      - condition: "GRBL mode"
        value: true
      - condition: "RepRap mode"
        value: false
    ```

- **applies_to_axes** (array of strings): Which axes this per-axis setting applies to
  - For settings that are documented for multiple axes
  - Example: `["alpha", "beta", "gamma"]` or `["X", "Y", "Z"]`

- **interpolated_name** (string): Template for axis-specific settings
  - Example: `"<axis>_min_endstop"` where `<axis>` is replaced with `alpha`, `beta`, `gamma`
  - Example: `"temperature_control.{name}.sensor"` where `{name}` is the instance name

- **implementation_details** (array of strings): Low-level implementation notes
  - Source code references
  - Algorithm descriptions
  - Example:
    ```yaml
    implementation_details:
      - "Interrupt priority set to 16 (NVIC_SetPriority)"
      - "Rising edge detection configured"
      - "UPDATE_FREQ = 1000 Hz (line 38)"
    ```

## Complete Example (V1 Setting)

```yaml
modules:
  - name: "Robot & Motion Control"
    description: "Core motion settings, planner configuration, and kinematics"
    setting_count: 63
    settings:
      - name: "acceleration"
        type: number
        default: 100.0
        units: "mm/s²"
        module: "root"
        context: "Global setting"
        defined_in: "modules/robot/Robot.cpp:228"
        typical_values:
          - value: 100
            description: "general purpose"
          - value: 500
            description: "fast 3D printer"
          - value: 1000
            description: "light CNC with good mechanics"
          - value: 50
            description: "heavy machine"
        corresponding_v1: "N/A"
        corresponding_v2: "motion control.default_acceleration"
        description: "Default acceleration for all axes in mm/s². This is the rate at which the machine accelerates and decelerates during moves. Higher acceleration values allow faster speed changes and shorter move times, but may cause ringing, layer shifts, or mechanical stress. Lower values provide smoother operation at the cost of speed. This setting can be overridden per-axis using the per-actuator acceleration settings."
        description_bullets:
          - "This is a global default that applies to all axes unless specifically overridden"
          - "Per-axis acceleration settings (in actuator configuration) take precedence over this value"
          - "Z-axis often benefits from lower acceleration than XY to prevent layer artifacts"
          - "Delta printers typically need lower acceleration due to complex kinematics"
        related_settings:
          - "z_acceleration"
          - "per-actuator acceleration settings"
        related_pages:
          - "motion-control"
          - "configuring-smoothie"
          - "3d-printer-guide"
        examples:
          - "acceleration 100.0  # Default conservative setting"
          - "acceleration 500  # Fast 3D printer with good mechanical rigidity"
          - "acceleration 1000  # Light CNC mill with precision components"
          - "acceleration 50  # Heavy CNC machine or gantry router"
```

## Complete Example (V2 Setting)

```yaml
modules:
  - name: "Motion Control"
    description: "Core motion planning, kinematics, and speed control settings"
    setting_count: 19
    settings:
      - name: "default_acceleration"
        section: "[motion control]"
        type: number
        default: 100.0
        units: "mm/s²"
        module: "motion_control"
        context: "Global setting"
        defined_in: "Firmware/src/robot/Robot.cpp:234"
        typical_values:
          - value: 100
            description: "conservative"
          - value: 500
            description: "moderate 3D printing"
          - value: 1000
            description: "fast delta"
          - value: 200
            description: "CNC milling"
        corresponding_v1: "acceleration"
        corresponding_v2: "N/A"
        description: "Default acceleration for all axes when no per-actuator override is specified. This value determines how quickly the machine can change speed during moves. Higher acceleration reduces move time but increases vibration and mechanical stress. Lower acceleration provides smoother motion but increases total job time. Can be overridden per-actuator using actuator.{axis}.acceleration settings."
        description_bullets:
          - "Affects how quickly machine reaches commanded speeds"
          - "Higher values = faster speed changes, more vibration"
          - "Lower values = smoother motion, longer move times"
          - "Per-axis overrides can be set in actuator section"
          - "Z axis often needs lower acceleration than XY"
          - "Delta printers can typically use very high values"
          - "CNC mills typically use lower values for precision"
        related_settings:
          - "actuator.{axis}.acceleration"
          - "junction_deviation"
        related_pages:
          - "motion-control"
          - "stepper-motors"
          - "delta"
          - "cartesian"
        examples:
          - "default_acceleration = 100   # 100 mm/s² (conservative default)"
          - "default_acceleration = 500   # 500 mm/s² (typical 3D printer)"
          - "default_acceleration = 1000  # 1000 mm/s² (fast delta)"
          - "default_acceleration = 200   # 200 mm/s² (CNC mill)"
```

## Complete Example (Enum Type with Valid Values)

```yaml
- name: "arm_solution"
  type: enum
  default: "cartesian"
  module: "root"
  context: "Global setting"
  defined_in: "modules/robot/Robot.cpp:155"
  required: true
  valid_values:
    - value: "cartesian"
      description: "Standard XYZ gantry with one motor per axis (most common)"
    - value: "linear_delta"
      description: "Kossel-style delta printer with three vertical linear rails"
    - value: "delta"
      description: "Alias for linear_delta"
    - value: "kossel"
      description: "Alias for linear_delta"
    - value: "rostock"
      description: "Alias for linear_delta"
    - value: "rotary_delta"
      description: "Delta with rotary joints instead of linear (experimental)"
    - value: "corexy"
      description: "CoreXY crossed-belt system (two motors control XY)"
    - value: "hbot"
      description: "H-Bot crossed-belt system (similar to CoreXY)"
    - value: "corexz"
      description: "CoreXZ system with crossed belts for XZ motion"
    - value: "morgan"
      description: "Morgan SCARA robotic arm"
    - value: "rotatable_cartesian"
      description: "Cartesian with rotated coordinate plane"
  corresponding_v1: "N/A"
  corresponding_v2: "motion control.arm_solution"
  description: "Specifies the kinematics solution that converts Cartesian coordinates (X, Y, Z) from G-code into actuator motor positions for your machine type. This is one of the most fundamental settings as it determines how the firmware interprets motion commands and calculates the relationship between desired position and motor movements. Each arm solution has its own set of additional parameters that must be configured for proper operation. Changing this requires reconfiguring many other settings and recalibrating the machine."
  description_bullets:
    - "CRITICAL: Must exactly match your physical machine configuration"
    - "Most common: cartesian (direct 1:1 motor to axis mapping)"
    - "Each solution requires specific additional parameters"
    - "Changing this invalidates most other configuration settings"
    - "Incorrect selection can cause dangerous motion behavior"
    - "Linear delta requires arm_length, arm_radius parameters"
    - "CoreXY/HBot require careful motor direction configuration"
    - "SCARA requires arm lengths and offset parameters"
  related_settings:
    - "arm_length"
    - "arm_radius"
    - "x_reduction"
    - "z_reduction"
    - "arm1_length"
    - "arm2_length"
  related_pages:
    - "arm-solutions"
    - "cartesian"
    - "delta"
    - "corexy"
    - "hbot"
    - "morgan-scara"
  examples:
    - "arm_solution cartesian  # Standard 3-axis CNC or 3D printer"
    - "arm_solution linear_delta  # Kossel-style delta printer"
    - "arm_solution corexy  # CoreXY 3D printer"
    - "arm_solution hbot  # H-Bot 3D printer"
    - "arm_solution morgan  # Morgan SCARA arm"
```

## Complete Example (Pin Type)

```yaml
- name: "pwm_pin"
  type: pin
  default: "nc"
  module: "spindle"
  context: "Module instance setting"
  defined_in: "modules/tools/spindle/PWMSpindleControl.cpp:71"
  required: true
  applicability: "Applicable to: PWM spindle (spindle.type = \"pwm\") and Analog spindle (spindle.type = \"analog\")"
  pin_values:
    - value: "2.0"
      description: "Port 2, Pin 0"
    - value: "2.1"
      description: "Port 2, Pin 1"
    - value: "!2.4"
      description: "Port 2, Pin 4 with inverted output"
    - value: "nc"
      description: "Not connected (no pin assigned)"
  corresponding_v1: "N/A"
  corresponding_v2: "none"
  description: "Pin used to output PWM signal to the spindle motor controller or VFD. Must use a hardware PWM-capable pin from the list above. Non-PWM pins will generate an error and module will fail to load. Inverted output (! prefix) inverts the PWM duty cycle. For PWM type: outputs PID-controlled PWM signal (0-100% based on feedback). For analog type: outputs simple proportional PWM signal (RPM → duty cycle)."
  description_bullets:
    - "Applicable to: PWM spindle (spindle.type = \"pwm\") and Analog spindle (spindle.type = \"analog\")"
    - "ERROR message if invalid: \"Error: Spindle PWM pin must be P2.0-2.5 or other PWM pin\""
    - "Normal polarity: High duty cycle = more power"
    - "Inverted polarity (!): Low duty cycle = more power"
  error_messages:
    - "Error: Spindle PWM pin must be P2.0-2.5 or other PWM pin"
  related_settings:
    - "spindle.pwm_period"
    - "spindle.max_pwm"
    - "spindle.type"
  related_pages:
    - "spindle-module"
    - "pinout"
    - "pwm-capable"
    - "mosfets"
  examples:
    - "spindle.pwm_pin 2.4  # Pin 2.4 (normal polarity)"
    - "spindle.pwm_pin !2.4  # Pin 2.4 (inverted output)"
```

## Parsing Guidelines

When parsing this YAML:

1. All fields are accessible via standard YAML parsers
2. Arrays can be empty `[]` if no items exist
3. Optional fields may be omitted entirely
4. String fields preserve original formatting (newlines become `\n`)
5. Numeric values preserve decimal notation where significant
6. Boolean fields are lowercase: `true`, `false`
7. Null values are represented as `null`
8. Enum strings are quoted: `"cartesian"`, `"pwm"`, `"thermistor"`
9. Pin specifications are strings: `"2.4"`, `"!2.0^"`, `"nc"`

## Validation Rules

Valid YAML configuration must:
1. Have `metadata` and `modules` top-level keys
2. Have at least one module with at least one setting
3. All settings must have all required fields
4. Field types must match specification
5. Valid values for `type`: `number`, `string`, `bool`, `pin`, `enum`
6. Valid values for `metadata.version`: `"v1"`, `"v2"`

## Notes

- This spec is designed to be machine-readable while preserving all human-readable content
- Comments from original markdown are preserved in examples
- All textual content preserves original wording exactly
- Array fields use consistent plural naming (e.g., `examples` not `example_list`)
- The spec is comprehensive enough to convert markdown→YAML→markdown with no information loss
- Both V1 and V2 use the same structure; differences are in field values (section, pin format, etc.)
