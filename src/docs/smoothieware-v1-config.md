# Smoothieware v1 Configuration Reference

## Complete Configuration Settings (Source Code Verified)

**Generated:** 2025-11-04
**Last Verified:** 2025-11-04 (Complete source code analysis)

**Total Settings:** ~280-290 verified configuration keys
- Robot & Motion: 75-81 settings (45 global, 30-36 motor-specific for 5-6 axes)
- Endstops: 50+ settings (30 root-level + 10 module-based + 10 global)
- Temperature Control: 42 settings (24 core + 18 sensor-specific)
- ZProbe & Leveling: 49 settings (13 base + 36 strategy-specific)
- Extruder: 17 settings
- Switch: 17 settings
- Other Modules: 40+ settings (Laser, Filament Detector, Spindle, etc.)

**Note:** v1 robot kinematics support maximum 6 actuators (alpha, beta, gamma, delta, epsilon, zeta). The `eta_current` and `theta_current` configuration settings exist for controlling stepper driver currents on channels 6-7, but ONLY work with MCP4451-based boards (Smoothieboard, Azteeg X5 GT) and CANNOT be used as robot actuators - they are for external stepper drivers not integrated into the motion system. Default value is -1 (disabled).

---

## About This Documentation

This configuration reference documents Smoothieware v1 configuration settings **verified to exist in the actual firmware source code**. This document is based on systematic source code analysis of the Smoothieware v1 firmware repository.

### Documentation Coverage

- **Source Code Verified Settings:** ~280-290 total configuration keys
- **Documented in This File:** Subset of most commonly used settings
- **Complete Documentation:** Available in `docs/` directory (242 settings fully documented, 85% coverage)
  - See `docs/configuration-options.md` for complete reference table
  - Individual module documentation in `docs/*-options.md` files

Each setting includes:
- **Exact path** where it's read in the configuration
- **Type** (number, bool, string, pin)
- **Default value** (if specified)
- **Source file and line number** where it's defined
- **Context** (global vs module instance)

### Important Notes

1. **Motor-Specific Settings:** Many motor-specific settings (e.g., `alpha_steps_per_mm`, `beta_max_rate`) exist in source code but follow predictable patterns - see `docs/configuration-options.md` for complete listings
2. **Module Instances:** Multi-instance modules (extruder, temperature_control, switch) support unlimited named instances
3. **Deprecated Features:** Some documented settings may be from older firmware versions - always verify against your firmware version

### Key Improvements in This Version

1. **Root-Level Endstop Configuration**: Added complete documentation of the traditional/common endstop configuration method
2. **Temperature Control Module**: Properly organized as a module with instance-based configuration, including:
   - Advanced sensor configuration guides (Thermistors, MAX31855, AD8495, PT100)
   - PID vs Bang-Bang control comparison with use case recommendations
   - Safety features documentation (temperature limits, runaway detection)
   - M-code customization reference
   - Complete example configurations (single hotend, dual hotend, high-temp, chamber)
   - Predefined thermistor models reference
3. **Leveling Strategies**: Complete documentation of all 4 leveling strategy types with comprehensive usage guide:
   - All M-codes (G29, G31, G32, M370, M374, M375, M500, M501, M503, M561, M565, M557)
   - Strategy selection guide by printer type
   - Probe offset configuration with examples
   - Typical workflow documentation (first-time setup, daily use, re-probing)
   - Troubleshooting section for common leveling issues
4. **Accurate Counts**: All settings properly counted and categorized

---

## Table of Contents

- [Core Motion & Robot](#core-motion--robot)
  - [Acceleration & Speed](#acceleration--speed)
  - [Actuators](#actuators-alpha-beta-gamma-delta-epsilon-zeta)
- [Endstops](#endstops)
  - [Method 1: Root-Level Configuration (Traditional)](#method-1-root-level-configuration-traditional)
  - [Method 2: Module-Based Configuration (Alternative)](#method-2-module-based-configuration-alternative)
- [Temperature Control Module](#temperature-control-module)
- [ZProbe & Leveling](#zprobe--leveling)
  - [ZProbe Configuration](#zprobe-configuration)
  - [Leveling Strategies](#leveling-strategies)
    - [Three Point Leveling](#three-point-leveling-strategy)
    - [Delta Calibration](#delta-calibration-strategy)
    - [Delta Grid Leveling](#delta-grid-leveling-strategy)
    - [Cartesian Grid Leveling](#cartesian-grid-leveling-strategy)
- [Extruder Module](#extruder-module)
- [Switch Module](#switch-module)
- [Other Modules](#other-modules)

---

## Robot & Motion Control

56 settings in this category.

#### `(dynamic)`

**Type:** `string`

**Default Value:** `"nc"`

**Global Context:**

- Defined in: `modules/robot/Robot.cpp:234`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:255`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:256`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:257`
- Context: robot (global)

**Configuration:**

```
(dynamic) <value>
```

#### `acceleration`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:228`
- Context: robot (global)

**Configuration:**

```
acceleration <value>
```

#### `alpha_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/RotatableCartesianSolution.cpp:12`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:23`
- Context: Global setting

**Configuration:**

```
alpha_angle <value>
```

#### `arc_correction`

**Type:** `number`

**Default Value:** `5`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:188`
- Context: robot (global)

**Configuration:**

```
arc_correction <value>
```

#### `arm_length`

**Type:** `number`

**Default Value:** `250.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:32`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:34`
- Context: Global setting

**Configuration:**

```
arm_length <value>
```

#### `arm_radius`

**Type:** `number`

**Default Value:** `124.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:34`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
arm_radius <value>
```

#### `arm_solution`

**Type:** `string`

**Default Value:** `"cartesian"`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:155`
- Context: robot (global)

**Configuration:**

```
arm_solution <value>
```

#### `arm1_length`

**Type:** `number`

**Default Value:** `150.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:30`
- Context: Global setting

**Configuration:**

```
arm1_length <value>
```

#### `arm2_length`

**Type:** `number`

**Default Value:** `150.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:32`
- Context: Global setting

**Configuration:**

```
arm2_length <value>
```

#### `beta_relative_angle`

**Type:** `number`

**Default Value:** `120.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:26`
- Context: Global setting

**Configuration:**

```
beta_relative_angle <value>
```

#### `default_feed_rate`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:182`
- Context: robot (global)

**Configuration:**

```
default_feed_rate <value>
```

#### `default_seek_rate`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:183`
- Context: robot (global)

**Configuration:**

```
default_seek_rate <value>
```

#### `delta_e`

**Type:** `number`

**Default Value:** `131.636F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
delta_e <value>
```

#### `delta_ee_offs`

**Type:** `number`

**Default Value:** `15.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:52`
- Context: Global setting

**Configuration:**

```
delta_ee_offs <value>
```

#### `delta_f`

**Type:** `number`

**Default Value:** `190.526F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:39`
- Context: Global setting

**Configuration:**

```
delta_f <value>
```

#### `delta_halt_on_error`

**Type:** `bool`

**Default Value:** `true`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:42`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:60`
- Context: Global setting

**Configuration:**

```
delta_halt_on_error <value>
```

#### `delta_mirror_xy`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:58`
- Context: Global setting

**Configuration:**

```
delta_mirror_xy <value>
```

#### `delta_re`

**Type:** `number`

**Default Value:** `270.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:42`
- Context: Global setting

**Configuration:**

```
delta_re <value>
```

#### `delta_rf`

**Type:** `number`

**Default Value:** `90.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:45`
- Context: Global setting

**Configuration:**

```
delta_rf <value>
```

#### `delta_segments_per_second`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:185`
- Context: robot (global)

**Configuration:**

```
delta_segments_per_second <value>
```

#### `delta_tool_offset`

**Type:** `number`

**Default Value:** `30.500F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:55`
- Context: Global setting

**Configuration:**

```
delta_tool_offset <value>
```

#### `delta_tower1_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
delta_tower1_angle <value>
```

#### `delta_tower1_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:39`
- Context: Global setting

**Configuration:**

```
delta_tower1_offset <value>
```

#### `delta_tower2_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:37`
- Context: Global setting

**Configuration:**

```
delta_tower2_angle <value>
```

#### `delta_tower2_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:40`
- Context: Global setting

**Configuration:**

```
delta_tower2_offset <value>
```

#### `delta_tower3_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:38`
- Context: Global setting

**Configuration:**

```
delta_tower3_angle <value>
```

#### `delta_tower3_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:41`
- Context: Global setting

**Configuration:**

```
delta_tower3_offset <value>
```

#### `delta_z_offset`

**Type:** `number`

**Default Value:** `290.700F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:49`
- Context: Global setting

**Configuration:**

```
delta_z_offset <value>
```

#### `gamma_relative_angle`

**Type:** `number`

**Default Value:** `240.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:29`
- Context: Global setting

**Configuration:**

```
gamma_relative_angle <value>
```

#### `junction_deviation`

**Type:** `number`

**Default Value:** `0.05F`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:45`
- Context: robot (global)

**Configuration:**

```
junction_deviation <value>
```

#### `laser_module_default_power`

**Type:** `number`

**Default Value:** `0.8F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:209`
- Context: robot (global)

**Configuration:**

```
laser_module_default_power <value>
```

#### `max_speed`

**Type:** `number`

**Default Value:** `-60.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:194`
- Context: robot (global)

**Configuration:**

```
max_speed <value>
```

#### `minimum_planner_speed`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:47`
- Context: robot (global)

**Configuration:**

```
minimum_planner_speed <value>
```

#### `mm_max_arc_error`

**Type:** `number`

**Default Value:** `0.01f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:187`
- Context: robot (global)

**Configuration:**

```
mm_max_arc_error <value>
```

#### `mm_per_arc_segment`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:186`
- Context: robot (global)

**Configuration:**

```
mm_per_arc_segment <value>
```

#### `mm_per_line_segment`

**Type:** `number`

**Default Value:** `0.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:184`
- Context: robot (global)

**Configuration:**

```
mm_per_line_segment <value>
```

#### `morgan_offset_x`

**Type:** `number`

**Default Value:** `100.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:34`
- Context: Global setting

**Configuration:**

```
morgan_offset_x <value>
```

#### `morgan_offset_y`

**Type:** `number`

**Default Value:** `-60.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:36`
- Context: Global setting

**Configuration:**

```
morgan_offset_y <value>
```

#### `morgan_scaling_x`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:38`
- Context: Global setting

**Configuration:**

```
morgan_scaling_x <value>
```

#### `morgan_scaling_y`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:39`
- Context: Global setting

**Configuration:**

```
morgan_scaling_y <value>
```

#### `morgan_undefined_max`

**Type:** `number`

**Default Value:** `0.95f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:45`
- Context: Global setting

**Configuration:**

```
morgan_undefined_max <value>
```

#### `morgan_undefined_min`

**Type:** `number`

**Default Value:** `0.95f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:43`
- Context: Global setting

**Configuration:**

```
morgan_undefined_min <value>
```

#### `planner_queue_size`

**Type:** `number`

**Default Value:** `32`

**Context:** Global setting

- Defined in: `modules/robot/Conveyor.cpp:77`
- Context: robot (global)

**Configuration:**

```
planner_queue_size <value>
```

#### `queue_delay_time_ms`

**Type:** `number`

**Default Value:** `100`

**Context:** Global setting

- Defined in: `modules/robot/Conveyor.cpp:78`
- Context: robot (global)

**Configuration:**

```
queue_delay_time_ms <value>
```

#### `real_scara`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:46`
- Context: Global setting

**Configuration:**

```
real_scara <value>
```

#### `save_g54`

**Type:** `bool`

**Default Value:** `THEKERNEL->is_grbl_mode(`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:198`
- Context: robot (global)

**Configuration:**

```
save_g54 <value>
```

#### `save_g92`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:197`
- Context: robot (global)

**Configuration:**

```
save_g92 <value>
```

#### `segment_z_moves`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:196`
- Context: robot (global)

**Configuration:**

```
segment_z_moves <value>
```

#### `set_g92`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:199`
- Context: robot (global)

**Configuration:**

```
set_g92 <value>
```

#### `x_axis_max_speed`

**Type:** `number`

**Default Value:** `60000.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:191`
- Context: robot (global)

**Configuration:**

```
x_axis_max_speed <value>
```

#### `x_reduction`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:11`
- Context: Global setting

**Configuration:**

```
x_reduction <value>
```

#### `y_axis_max_speed`

**Type:** `number`

**Default Value:** `60000.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:192`
- Context: robot (global)

**Configuration:**

```
y_axis_max_speed <value>
```

#### `z_acceleration`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:264`
- Context: robot (global)

**Configuration:**

```
z_acceleration <value>
```

#### `z_axis_max_speed`

**Type:** `number`

**Default Value:** `300.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:193`
- Context: robot (global)

**Configuration:**

```
z_axis_max_speed <value>
```

#### `z_junction_deviation`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:46`
- Context: robot (global)

**Configuration:**

```
z_junction_deviation <value>
```

#### `z_reduction`

**Type:** `number`

**Default Value:** `3.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:12`
- Context: Global setting

**Configuration:**

```
z_reduction <value>
```

---


---

## Endstops

**Note:** Smoothieware supports **TWO** methods for configuring endstops. Most default configurations use the root-level method (Method 1).

### Method 1: Root-Level Configuration (Traditional)

This is the **traditional and most common** endstop configuration method used in most default configs.
Settings are configured per axis using the axis name prefix (`alpha`, `beta`, `gamma`).

---

#### Per-Axis Settings

The following settings exist for each axis. Replace `<axis>` with `alpha` (X), `beta` (Y), or `gamma` (Z):

##### `<axis>_min_endstop`

**Type:** `pin`

**Default:** `nc` (not connected)

**Defined in:** `modules/tools/endstops/Endstops.cpp:176`

**Description:** Minimum endstop pin for this axis.

**Example Configuration:**
```
alpha_min_endstop 1.28^  # X-axis minimum endstop on pin 1.28, pullup enabled
beta_min_endstop 1.26^   # Y-axis minimum endstop  
gamma_min_endstop 1.24^  # Z-axis minimum endstop
```

---

##### `<axis>_max_endstop`

**Type:** `pin`

**Default:** `nc` (not connected)

**Defined in:** `modules/tools/endstops/Endstops.cpp:176`

**Description:** Maximum endstop pin for this axis.

**Example Configuration:**
```
alpha_max_endstop 1.29^  # X-axis maximum endstop
beta_max_endstop 1.27^   # Y-axis maximum endstop  
gamma_max_endstop 1.25^  # Z-axis maximum endstop
```

---

##### `<axis>_max_travel`

**Type:** `number` (mm)

**Default:** `500`

**Defined in:** `modules/tools/endstops/Endstops.cpp:170`

**Description:** Maximum travel distance used during homing.

**Example Configuration:**
```
alpha_max_travel 500  # X-axis max travel 500mm
beta_max_travel 500   # Y-axis max travel
gamma_max_travel 500  # Z-axis max travel
```

---

##### `<axis>_fast_homing_rate_mm_s`

**Type:** `number` (mm/s)

**Default:** `100`

**Defined in:** `modules/tools/endstops/Endstops.cpp:157`

**Description:** Fast homing rate in millimeters per second.

**Example Configuration:**
```
alpha_fast_homing_rate_mm_s 100  # X-axis fast homing at 100mm/s
beta_fast_homing_rate_mm_s 100   # Y-axis
gamma_fast_homing_rate_mm_s 10   # Z-axis (slower for safety)
```

---

##### `<axis>_slow_homing_rate_mm_s`

**Type:** `number` (mm/s)

**Default:** `10`

**Defined in:** `modules/tools/endstops/Endstops.cpp:158`

**Description:** Slow homing rate for precision after fast approach.

**Example Configuration:**
```
alpha_slow_homing_rate_mm_s 10  # X-axis slow homing
beta_slow_homing_rate_mm_s 10   # Y-axis
gamma_slow_homing_rate_mm_s 2   # Z-axis (very slow for accuracy)
```

---

##### `<axis>_homing_retract_mm`

**Type:** `number` (mm)

**Default:** `5`

**Defined in:** `modules/tools/endstops/Endstops.cpp:161`

**Description:** Distance to retract after hitting endstop before slow approach.

**Example Configuration:**
```
alpha_homing_retract_mm 5  # X-axis retract 5mm
beta_homing_retract_mm 5   # Y-axis
gamma_homing_retract_mm 2  # Z-axis (smaller retract)
```

---

##### `<axis>_homing_direction`

**Type:** `string`

**Default:** `home_to_min`

**Values:** `home_to_min`, `home_to_max`

**Defined in:** `modules/tools/endstops/Endstops.cpp:164`

**Description:** Direction to home the axis.

**Example Configuration:**
```
alpha_homing_direction home_to_min  # Home X to minimum
beta_homing_direction home_to_min   # Home Y to minimum
gamma_homing_direction home_to_max  # Home Z to maximum (common for 3D printers)
```

---

##### `<axis>_min`

**Type:** `number` (mm)

**Default:** `0`

**Defined in:** `modules/tools/endstops/Endstops.cpp:167`

**Description:** Cartesian position when homed to minimum.

**Example Configuration:**
```
alpha_min 0    # X=0 at minimum
beta_min 0     # Y=0 at minimum
gamma_min 0    # Z=0 at minimum
```

---

##### `<axis>_max`

**Type:** `number` (mm)

**Default:** `200`

**Defined in:** `modules/tools/endstops/Endstops.cpp:167`

**Description:** Cartesian position when homed to maximum.

**Example Configuration:**
```
alpha_max 200  # X=200 at maximum
beta_max 200   # Y=200 at maximum
gamma_max 200  # Z=200 at maximum (bed height for Z-max homing)
```

---

##### `<axis>_limit_enable`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:195`

**Description:** Enable limit switch monitoring during normal movement.

**Example Configuration:**
```
alpha_limit_enable false  # No limit checking during X moves
beta_limit_enable false   # No limit checking during Y moves
gamma_limit_enable false  # No limit checking during Z moves
```

---

#### Global Endstop Settings

##### `endstops_enable`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:114`

**Description:** Master enable for root-level endstop configuration. Set to `true` to use Method 1.

**Example Configuration:**
```
endstops_enable true  # Enable traditional endstop configuration
```

---

##### `corexy_homing`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:366`

**Description:** Enable CoreXY-specific homing behavior.

**Example Configuration:**
```
corexy_homing true  # Enable for CoreXY machines
```

---

##### `delta_homing`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:367`

**Description:** Enable delta robot homing behavior.

**Example Configuration:**
```
delta_homing true  # Enable for linear delta machines
```

---

##### `rdelta_homing`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:368`

**Description:** Enable rotary delta homing behavior.

**Example Configuration:**
```
rdelta_homing true  # Enable for rotary delta machines
```

---

##### `scara_homing`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:369`

**Description:** Enable SCARA robot homing behavior.

**Example Configuration:**
```
scara_homing true  # Enable for SCARA machines
```

---

##### `endstop_debounce_count`

**Type:** `number`

**Default:** `100`

**Defined in:** `modules/tools/endstops/Endstops.cpp:364`

**Description:** Number of consecutive reads required to confirm endstop trigger.

**Example Configuration:**
```
endstop_debounce_count 100  # Default debounce
```

---

##### `endstop_debounce_ms`

**Type:** `number` (milliseconds)

**Default:** `0`

**Defined in:** `modules/tools/endstops/Endstops.cpp:363`

**Description:** Milliseconds of debounce time.

**Example Configuration:**
```
endstop_debounce_ms 1  # 1ms debounce
```

---

##### `home_z_first`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/endstops/Endstops.cpp:371`

**Description:** Home Z axis before X and Y.

**Example Configuration:**
```
home_z_first true  # Home Z first (useful for some Z-probe setups)
```

---

##### `homing_order`

**Type:** `string`

**Default:** `""` (empty, use default order)

**Defined in:** `modules/tools/endstops/Endstops.cpp:378`

**Description:** Custom homing order for axes. Specify 3-6 characters (XYZABC) in desired order.

**Example Configuration:**
```
homing_order YXZ  # Home Y, then X, then Z
homing_order ZXY  # Home Z first, then X, then Y
```

---

##### `move_to_origin_after_home`

**Type:** `bool`

**Default:** `false` (cartesian), `true` (delta)

**Defined in:** `modules/tools/endstops/Endstops.cpp:396`

**Description:** Move to 0,0 after homing completes.

**Example Configuration:**
```
move_to_origin_after_home true  # Move to 0,0 after homing
```

---

##### `alpha_trim_mm`

**Type:** `number` (mm)

**Default:** `0`

**Defined in:** `modules/tools/endstops/Endstops.cpp:373`

**Description:** Alpha (X) axis trim for delta/SCARA machines.

**Example Configuration:**
```
alpha_trim_mm 0  # No X trim
```

---

##### `beta_trim_mm`

**Type:** `number` (mm)

**Default:** `0`

**Defined in:** `modules/tools/endstops/Endstops.cpp:374`

**Description:** Beta (Y) axis trim for delta/SCARA machines.

**Example Configuration:**
```
beta_trim_mm 0  # No Y trim
```

---

##### `gamma_trim_mm`

**Type:** `number` (mm)

**Default:** `0`

**Defined in:** `modules/tools/endstops/Endstops.cpp:375`

**Description:** Gamma (Z) axis trim for delta/SCARA machines.

**Example Configuration:**
```
gamma_trim_mm 0  # No Z trim
```

---

### Method 2: Module-Based Configuration (Alternative)

For advanced configurations or when you need more than 3 endstops, use the module-based syntax.
This method uses `endstop.<name>.*` configuration paths.

**Example:**
```
endstop.minx.enable true
endstop.minx.pin 1.28^
endstop.minx.axis X
endstop.minx.homing_direction home_to_min
endstop.minx.fast_rate 100
endstop.minx.slow_rate 10
endstop.minx.retract 5
endstop.minx.limit_enable false
```

#### `endstop.axis`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:259`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.axis
```

#### `endstop.enable`

**Type:** `bool`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:249`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.enable
```

#### `endstop.fast_rate`

**Type:** `number`

**Default Value:** `100`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:319`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.fast_rate
```

#### `endstop.homing_direction`

**Type:** `string`

**Default Value:** `"none"`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:303`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.homing_direction
```

#### `endstop.homing_position`

**Type:** `number`

**Default Value:** `hinfo.home_direction ? 0 : 200`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:329`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.homing_position
```

#### `endstop.limit_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:296`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.limit_enable
```

#### `endstop.max_travel`

**Type:** `number`

**Default Value:** `500`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:332`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.max_travel
```

#### `endstop.pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:252`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.pin
```

#### `endstop.retract`

**Type:** `number`

**Default Value:** `5`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:323`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.retract
```

#### `endstop.slow_rate`

**Type:** `number`

**Default Value:** `10`

**Context:** Module instance setting

- Defined in: `modules/tools/endstops/Endstops.cpp:320`
- Context: Module instance (endstop)

**Example Configuration Paths:**

```
endstop.slow_rate
```

---


---

## Temperature Control Module

Temperature control uses **instance-based configuration** where you define named temperature controllers.
Common names are `hotend`, `bed`, `chamber`, but you can use any name.

**Configuration Pattern:** `temperature_control.<name>.<setting>`

**Example:**
```
temperature_control.hotend.thermistor_pin 0.23
temperature_control.hotend.heater_pin 2.5
temperature_control.hotend.set_m_code 104
temperature_control.hotend.set_and_wait_m_code 109

temperature_control.bed.thermistor_pin 0.24
temperature_control.bed.heater_pin 2.7
temperature_control.bed.set_m_code 140
temperature_control.bed.set_and_wait_m_code 190
```

---

### Temperature Control Settings

##### `thermistor_pin` / `thermistor`

**Type:** `pin`

**Required:** Yes

**Defined in:** `modules/tools/temperaturecontrol/Thermistor.cpp`

**Description:** Analog pin for thermistor reading.

**Example:**
```
temperature_control.hotend.thermistor_pin 0.23
temperature_control.bed.thermistor_pin 0.24
```

---

##### `heater_pin`

**Type:** `pin`

**Default:** `nc`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:167`

**Description:** Pin controlling the heater. If not set, controller is read-only.

**Example:**
```
temperature_control.hotend.heater_pin 2.5
temperature_control.bed.heater_pin 2.7
```

---

##### `sensor`

**Type:** `string`

**Default:** `thermistor`

**Values:** `thermistor`, `max31855`, `ad8495`, `pt100_e3d`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:177`

**Description:** Type of temperature sensor.

**Example:**
```
temperature_control.hotend.sensor thermistor
temperature_control.hotend2.sensor max31855
```

---

##### `set_m_code`

**Type:** `number`

**Default:** `104`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:140`

**Description:** M-code to set target temperature.

**Example:**
```
temperature_control.hotend.set_m_code 104  # M104 S200
temperature_control.bed.set_m_code 140     # M140 S60
```

---

##### `set_and_wait_m_code`

**Type:** `number`

**Default:** `109`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:141`

**Description:** M-code to set temperature and wait.

**Example:**
```
temperature_control.hotend.set_and_wait_m_code 109  # M109 S200
temperature_control.bed.set_and_wait_m_code 190     # M190 S60
```

---

##### `get_m_code`

**Type:** `number`

**Default:** `105`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:142`

**Description:** M-code to report temperature.

**Example:**
```
temperature_control.hotend.get_m_code 105  # M105 reports this temp
```

---

##### `designator`

**Type:** `string`

**Default:** `T`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:145`

**Description:** Single letter designator shown in temperature reports.

**Example:**
```
temperature_control.hotend.designator T   # Shows as "T:210/200"
temperature_control.bed.designator B      # Shows as "B:60/60"
```

---

##### `readings_per_second`

**Type:** `number`

**Default:** `20`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:143`

**Description:** How many times per second to read temperature sensor.

**Example:**
```
temperature_control.hotend.readings_per_second 20
```

---

##### `max_temp`

**Type:** `number` (°C)

**Default:** `300`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:163`

**Description:** Maximum allowed temperature (safety limit).

**Example:**
```
temperature_control.hotend.max_temp 300
temperature_control.bed.max_temp 150
```

---

##### `min_temp`

**Type:** `number` (°C)

**Default:** `0`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:164`

**Description:** Minimum allowed temperature (safety limit).

**Example:**
```
temperature_control.hotend.min_temp 0
temperature_control.bed.min_temp 0
```

---

##### `max_pwm`

**Type:** `number`

**Default:** `255`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:207`

**Description:** Maximum PWM value (0-255) for heater.

**Example:**
```
temperature_control.hotend.max_pwm 255  # Full power
temperature_control.bed.max_pwm 200     # Limited to ~78% power
```

---

##### `pwm_frequency`

**Type:** `number` (Hz)

**Default:** `2000`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:211`

**Description:** PWM frequency for heater control.

**Example:**
```
temperature_control.hotend.pwm_frequency 2000
```

---

##### `bang_bang`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:204`

**Description:** Use bang-bang control instead of PID.

**Example:**
```
temperature_control.bed.bang_bang true      # On/off control for bed
temperature_control.hotend.bang_bang false  # PID for hotend
```

---

##### `hysteresis`

**Type:** `number` (°C)

**Default:** `2`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:205`

**Description:** Temperature range for bang-bang control.

**Example:**
```
temperature_control.bed.hysteresis 2  # ±2°C for bang-bang
```

---

##### `p_factor`

**Type:** `number`

**Default:** `10`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:220`

**Description:** PID proportional factor.

**Example:**
```
temperature_control.hotend.p_factor 10
temperature_control.bed.p_factor 30
```

---

##### `i_factor`

**Type:** `number`

**Default:** `0.3`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:221`

**Description:** PID integral factor.

**Example:**
```
temperature_control.hotend.i_factor 0.3
temperature_control.bed.i_factor 0.5
```

---

##### `d_factor`

**Type:** `number`

**Default:** `200`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:222`

**Description:** PID derivative factor.

**Example:**
```
temperature_control.hotend.d_factor 200
temperature_control.bed.d_factor 100
```

---

##### `i_max`

**Type:** `number`

**Default:** Same as `max_pwm`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:226`

**Description:** Maximum integral windup limit.

**Example:**
```
temperature_control.hotend.i_max 255
```

---

##### `windup`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:206`

**Description:** Enable integral windup prevention.

**Example:**
```
temperature_control.hotend.windup false
```

---

##### `preset1`

**Type:** `number` (°C)

**Default:** `0`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:195`

**Description:** Preset temperature 1.

**Example:**
```
temperature_control.hotend.preset1 200  # PLA printing temp
```

---

##### `preset2`

**Type:** `number` (°C)

**Default:** `0`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:196`

**Description:** Preset temperature 2.

**Example:**
```
temperature_control.hotend.preset2 230  # ABS printing temp
```

---

##### `runaway_range`

**Type:** `number` (°C)

**Default:** `20`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:148`

**Description:** Temperature error range for runaway detection.

**Example:**
```
temperature_control.hotend.runaway_range 20
```

---

##### `runaway_heating_timeout`

**Type:** `number` (seconds)

**Default:** `900`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:153`

**Description:** Timeout for heating runaway detection.

**Example:**
```
temperature_control.hotend.runaway_heating_timeout 900  # 15 minutes
```

---

##### `runaway_cooling_timeout`

**Type:** `number` (seconds)

**Default:** `0` (disabled)

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:156`

**Description:** Timeout for cooling runaway detection.

**Example:**
```
temperature_control.hotend.runaway_cooling_timeout 0  # Disabled
```

---

##### `runaway_error_range`

**Type:** `number` (°C)

**Default:** `1.0`

**Defined in:** `modules/tools/temperaturecontrol/TemperatureControl.cpp:160`

**Description:** Error range for runaway detection.

**Example:**
```
temperature_control.hotend.runaway_error_range 1.0
```

---

### Advanced Temperature Sensor Configuration

Smoothieware supports multiple temperature sensor types through the `sensor` configuration option.

#### Thermistor Sensors

Standard thermistor configuration (most common):

```
temperature_control.hotend.sensor thermistor
temperature_control.hotend.thermistor_pin 0.23
temperature_control.hotend.beta 4066                # Thermistor beta value
temperature_control.hotend.r0 100000                # Thermistor resistance at T0
temperature_control.hotend.t0 25                    # Temperature for R0 measurement
temperature_control.hotend.r1 0                     # Series resistor value (0 = no series resistor)
temperature_control.hotend.r2 4700                  # Pullup resistor value
```

#### Thermocouple Sensors (MAX31855)

For thermocouple-based temperature sensing:

```
temperature_control.hotend.sensor max31855
temperature_control.hotend.chip_select_pin 0.16     # SPI chip select pin
temperature_control.hotend.spi_channel 0            # SPI channel (0 or 1)
```

**Features:**
- Cold junction compensation built-in
- Wide temperature range (-270°C to +1800°C)
- SPI communication
- Higher accuracy than thermistors for high temperatures

#### Thermocouple Amplifiers (AD8495)

For AD8495 thermocouple amplifier:

```
temperature_control.hotend.sensor ad8495
temperature_control.hotend.thermistor_pin 0.23      # Analog pin for amplifier output
```

**Features:**
- K-type thermocouple support
- Analog output (easier wiring than SPI)
- Built-in cold junction compensation
- Temperature range: -25°C to +400°C

#### PT100/PT1000 Sensors

For precision platinum RTD sensors:

```
temperature_control.hotend.sensor pt100_e3d
temperature_control.hotend.thermistor_pin 0.23
```

**Features:**
- High accuracy and stability
- Linear response
- Common in high-end hotends (E3D, Slice Engineering)
- Requires specific amplifier board

---

### PID vs Bang-Bang Control

Smoothieware supports two temperature control modes:

#### PID Control (Default, Recommended)

Proportional-Integral-Derivative control for smooth temperature regulation:

```
temperature_control.hotend.bang_bang false          # Use PID control
temperature_control.hotend.p_factor 13.7
temperature_control.hotend.i_factor 0.097
temperature_control.hotend.d_factor 24
```

**Advantages:**
- Smooth temperature regulation with minimal overshoot
- Better temperature stability
- Reduced thermal stress on components
- Quieter operation (no clicking relays)

**Use for:**
- Hotends (critical for print quality)
- Any temperature-critical application
- SSR-controlled heaters

#### Bang-Bang Control

Simple on/off control:

```
temperature_control.bed.bang_bang true              # Enable bang-bang mode
temperature_control.bed.hysteresis 2.0              # Temperature tolerance (±2°C)
```

**Advantages:**
- Simpler control logic
- Works well for high thermal mass
- Acceptable for non-critical applications

**Use for:**
- Heated beds (high thermal mass, less critical precision)
- Chamber heaters
- Applications where ±2-3°C variation is acceptable

**Comparison:**

| Feature | PID | Bang-Bang |
|---------|-----|-----------|
| Temperature Stability | ±0.1-0.5°C | ±2-5°C |
| Overshoot | Minimal | Can be significant |
| Heater Lifespan | Longer (gradual power changes) | Shorter (rapid on/off cycling) |
| Tuning Required | Yes (M303 auto-tune) | No |
| CPU Usage | Higher | Lower |
| Best For | Hotends, precision | Beds, chambers |

---

### Temperature Safety Features

#### Temperature Limits

Protect against thermal runaway and sensor failures:

```
temperature_control.hotend.max_temp 300             # Maximum allowed temperature
temperature_control.hotend.min_temp 0               # Minimum allowed temperature (detects disconnected sensor)
```

**Behavior:**
- If temperature exceeds `max_temp`, heater is disabled and alarm triggered
- If temperature drops below `min_temp` during heating, assumes sensor failure
- Both conditions trigger emergency stop

#### Runaway Detection

Detects heater failures or inadequate heating:

```
temperature_control.hotend.runaway_heating_timeout 900   # Seconds to reach target (15 min)
temperature_control.hotend.runaway_range 20              # Temperature must rise by this amount
temperature_control.hotend.runaway_error_range 1.0       # Allowed temperature variation
```

**How it works:**
1. When heating starts, timer begins
2. Temperature must increase by `runaway_range` within `runaway_heating_timeout`
3. If target not reached in time, assumes heater failure
4. Once at target, temperature must stay within ±`runaway_error_range`

**Detects:**
- Disconnected or failed heater
- Inadequate heater power
- Cooling fan failures
- Thermal runaway conditions

---

### M-Code Customization

Temperature controllers can respond to custom M-codes:

```
temperature_control.hotend.set_m_code 104               # M104 S200 - Set temperature
temperature_control.hotend.set_and_wait_m_code 109      # M109 S200 - Set and wait
temperature_control.hotend.get_m_code 105               # M105 - Get temperature

temperature_control.bed.set_m_code 140                  # M140 S60
temperature_control.bed.set_and_wait_m_code 190         # M190 S60
temperature_control.bed.get_m_code 105

temperature_control.chamber.set_m_code 141              # Custom M141 for chamber
temperature_control.chamber.set_and_wait_m_code 191     # Custom M191
```

**Standard Assignments:**
- **M104/M109**: Hotend (extruder) temperature
- **M140/M190**: Bed temperature
- **M141/M191**: Chamber temperature (custom)
- **M105**: Reports all temperature controllers

---

### Example Configurations

#### Single Hotend + Heated Bed (Most Common)

```
# Hotend Configuration
temperature_control.hotend.enable true
temperature_control.hotend.thermistor_pin 0.23
temperature_control.hotend.heater_pin 2.5
temperature_control.hotend.sensor thermistor
temperature_control.hotend.beta 4066
temperature_control.hotend.set_m_code 104
temperature_control.hotend.set_and_wait_m_code 109
temperature_control.hotend.designator T
temperature_control.hotend.max_temp 300
temperature_control.hotend.min_temp 0
temperature_control.hotend.p_factor 13.7
temperature_control.hotend.i_factor 0.097
temperature_control.hotend.d_factor 24

# Heated Bed Configuration
temperature_control.bed.enable true
temperature_control.bed.thermistor_pin 0.24
temperature_control.bed.heater_pin 2.7
temperature_control.bed.sensor thermistor
temperature_control.bed.beta 4066
temperature_control.bed.set_m_code 140
temperature_control.bed.set_and_wait_m_code 190
temperature_control.bed.designator B
temperature_control.bed.bang_bang true              # Use bang-bang for bed
temperature_control.bed.hysteresis 2.0
temperature_control.bed.max_temp 150
temperature_control.bed.min_temp 0
```

#### Dual Hotend Setup

```
# First Hotend (T0)
temperature_control.hotend.enable true
temperature_control.hotend.thermistor_pin 0.23
temperature_control.hotend.heater_pin 2.5
temperature_control.hotend.set_m_code 104
temperature_control.hotend.set_and_wait_m_code 109
temperature_control.hotend.designator T0
temperature_control.hotend.p_factor 13.7
temperature_control.hotend.i_factor 0.097
temperature_control.hotend.d_factor 24

# Second Hotend (T1)
temperature_control.hotend2.enable true
temperature_control.hotend2.thermistor_pin 0.25
temperature_control.hotend2.heater_pin 2.4
temperature_control.hotend2.set_m_code 104
temperature_control.hotend2.set_and_wait_m_code 109
temperature_control.hotend2.designator T1
temperature_control.hotend2.p_factor 13.7
temperature_control.hotend2.i_factor 0.097
temperature_control.hotend2.d_factor 24

# Heated Bed
temperature_control.bed.enable true
temperature_control.bed.thermistor_pin 0.24
temperature_control.bed.heater_pin 2.7
temperature_control.bed.set_m_code 140
temperature_control.bed.set_and_wait_m_code 190
temperature_control.bed.designator B
temperature_control.bed.bang_bang true
```

#### High-Temperature Setup (Thermocouple)

```
temperature_control.hotend.enable true
temperature_control.hotend.sensor max31855          # Thermocouple sensor
temperature_control.hotend.chip_select_pin 0.16
temperature_control.hotend.spi_channel 0
temperature_control.hotend.heater_pin 2.5
temperature_control.hotend.set_m_code 104
temperature_control.hotend.set_and_wait_m_code 109
temperature_control.hotend.max_temp 500             # Higher limit for all-metal hotend
temperature_control.hotend.p_factor 25.0            # May need different PID values
temperature_control.hotend.i_factor 1.5
temperature_control.hotend.d_factor 100
```

#### Chamber Heater Setup

```
temperature_control.chamber.enable true
temperature_control.chamber.thermistor_pin 0.25
temperature_control.chamber.heater_pin 2.4
temperature_control.chamber.sensor thermistor
temperature_control.chamber.beta 4066
temperature_control.chamber.set_m_code 141          # Custom M-code
temperature_control.chamber.set_and_wait_m_code 191
temperature_control.chamber.designator C
temperature_control.chamber.bang_bang true          # Chamber has high thermal mass
temperature_control.chamber.hysteresis 3.0
temperature_control.chamber.max_temp 100
```

---

### Predefined Thermistor Models

Smoothieware includes predefined configurations for common thermistors (alternative to beta/r0/t0 manual configuration):

**Usage:**
```
temperature_control.hotend.thermistor EPCOS100K     # Use predefined model
```

**Available Models:**

| Model Name | Description | Common Use |
|------------|-------------|------------|
| `EPCOS100K` | EPCOS B57560G104F (β=4066) | E3D hotends, RepRap standard |
| `Honeywell100K` | Honeywell 135-104LAG-J01 (β=3974) | Older RepRap designs |
| `Semitec` | Semitec 104GT-2 (β=4267) | E3D V6, Prusa i3 |
| `Htc3950` | HTC thermistor (β=3950) | Chinese hotends |

**Predefined vs Manual:**

```
# Predefined (simpler)
temperature_control.hotend.thermistor EPCOS100K

# Manual (more flexible)
temperature_control.hotend.beta 4066
temperature_control.hotend.r0 100000
temperature_control.hotend.t0 25
temperature_control.hotend.r2 4700
```

**Note:** Predefined models use standard pullup values (4.7kΩ). For custom hardware, use manual configuration.

---

## ZProbe & Leveling

### ZProbe Configuration


### Leveling Strategies

Smoothieware supports multiple bed leveling strategies. Only one strategy should be enabled at a time.

---

#### Three Point Leveling Strategy

Uses three probe points to calculate bed plane and apply compensation.

**Configuration Pattern:** `leveling-strategy.three-point-leveling.<setting>`

##### `enable`

**Type:** `bool`

**Defined in:** Standard module enable

**Description:** Enable three-point leveling strategy.

**Example:**
```
leveling-strategy.three-point-leveling.enable true
```

---

##### `point1`

**Type:** `string` (X,Y coordinates)

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:98`

**Description:** First probe point coordinates.

**Example:**
```
leveling-strategy.three-point-leveling.point1 100.0,0.0
```

---

##### `point2`

**Type:** `string` (X,Y coordinates)

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:99`

**Description:** Second probe point coordinates.

**Example:**
```
leveling-strategy.three-point-leveling.point2 200.0,200.0
```

---

##### `point3`

**Type:** `string` (X,Y coordinates)

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:100`

**Description:** Third probe point coordinates.

**Example:**
```
leveling-strategy.three-point-leveling.point3 0.0,200.0
```

---

##### `probe_offsets`

**Type:** `string` (X,Y,Z offsets)

**Default:** `0,0,0`

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:106`

**Description:** Probe offset from nozzle.

**Example:**
```
leveling-strategy.three-point-leveling.probe_offsets 0,0,0
```

---

##### `home_first`

**Type:** `bool`

**Default:** `true`

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:109`

**Description:** Home before probing.

**Example:**
```
leveling-strategy.three-point-leveling.home_first true
```

---

##### `tolerance`

**Type:** `number` (mm)

**Default:** `0.03`

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:110`

**Description:** Probe tolerance.

**Example:**
```
leveling-strategy.three-point-leveling.tolerance 0.03
```

---

##### `save_plane`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/zprobe/ThreePointStrategy.cpp:111`

**Description:** Save plane to config-override.

**Example:**
```
leveling-strategy.three-point-leveling.save_plane false
```

---

#### Delta Calibration Strategy

Calibrates delta printer geometry using 7 probe points.

**Configuration Pattern:** `leveling-strategy.delta-calibration.<setting>`

##### `enable`

**Type:** `bool`

**Description:** Enable delta calibration strategy.

**Example:**
```
leveling-strategy.delta-calibration.enable true
```

---

##### `radius`

**Type:** `number` (mm)

**Default:** Uses `zprobe.probe_radius` if not set

**Defined in:** `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:30`

**Description:** Radius at which to probe.

**Example:**
```
leveling-strategy.delta-calibration.radius 100
```

---

##### `initial_height`

**Type:** `number` (mm)

**Default:** `10`

**Defined in:** `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:39`

**Description:** Initial Z height for calibration.

**Example:**
```
leveling-strategy.delta-calibration.initial_height 10
```

---

#### Delta Grid Leveling Strategy

Creates a height map grid for delta printers.

**Configuration Pattern:** `leveling-strategy.delta-grid.<setting>`

##### `enable`

**Type:** `bool`

**Description:** Enable delta grid leveling.

**Example:**
```
leveling-strategy.delta-grid.enable true
```

---

##### `radius`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:88`

**Description:** Grid radius.

**Example:**
```
leveling-strategy.delta-grid.radius 100
```

---

##### `size`

**Type:** `number`

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:89`

**Description:** Grid size (number of points per side).

**Example:**
```
leveling-strategy.delta-grid.size 7
```

---

##### `tolerance`

**Type:** `number` (mm)

**Default:** `0.03`

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:90`

**Description:** Probe tolerance.

**Example:**
```
leveling-strategy.delta-grid.tolerance 0.03
```

---

##### `save`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:91`

**Description:** Save grid to file.

**Example:**
```
leveling-strategy.delta-grid.save true
```

---

##### `probe_offsets`

**Type:** `string` (X,Y,Z)

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:92`

**Description:** Probe offsets from nozzle.

**Example:**
```
leveling-strategy.delta-grid.probe_offsets 0,0,0
```

---

##### `initial_height`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:93`

**Description:** Initial Z height.

**Example:**
```
leveling-strategy.delta-grid.initial_height 10
```

---

##### `do_home`

**Type:** `bool`

**Default:** `true`

**Defined in:** `modules/tools/zprobe/DeltaGridStrategy.cpp:94`

**Description:** Home before leveling.

**Example:**
```
leveling-strategy.delta-grid.do_home true
```

---

#### Cartesian Grid Leveling Strategy

Creates a height map grid for cartesian printers.

**Configuration Pattern:** `leveling-strategy.cart-grid.<setting>` or `leveling-strategy.rectangular-grid.<setting>`

##### `enable`

**Type:** `bool`

**Description:** Enable cartesian grid leveling.

**Example:**
```
leveling-strategy.rectangular-grid.enable true
```

---

##### `size`

**Type:** `number`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:99`

**Description:** Grid size (deprecated, use grid_x_size and grid_y_size).

---

##### `grid_x_size`

**Type:** `number`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:100`

**Description:** Number of grid points in X direction.

**Example:**
```
leveling-strategy.rectangular-grid.grid_x_size 7
```

---

##### `grid_y_size`

**Type:** `number`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:101`

**Description:** Number of grid points in Y direction.

**Example:**
```
leveling-strategy.rectangular-grid.grid_y_size 7
```

---

##### `x_size`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:106`

**Description:** X dimension of bed.

**Example:**
```
leveling-strategy.rectangular-grid.x_size 200
```

---

##### `y_size`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:107`

**Description:** Y dimension of bed.

**Example:**
```
leveling-strategy.rectangular-grid.y_size 200
```

---

##### `tolerance`

**Type:** `number` (mm)

**Default:** `0.03`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:102`

**Description:** Probe tolerance.

**Example:**
```
leveling-strategy.rectangular-grid.tolerance 0.03
```

---

##### `save`

**Type:** `bool`

**Default:** `false`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:103`

**Description:** Save grid to file.

**Example:**
```
leveling-strategy.rectangular-grid.save true
```

---

##### `probe_offsets`

**Type:** `string` (X,Y,Z)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:104`

**Description:** Probe offsets from nozzle.

**Example:**
```
leveling-strategy.rectangular-grid.probe_offsets 0,0,0
```

---

##### `initial_height`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:105`

**Description:** Initial Z height.

**Example:**
```
leveling-strategy.rectangular-grid.initial_height 10
```

---

##### `do_home`

**Type:** `bool`

**Default:** `true`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:108`

**Description:** Home before leveling.

**Example:**
```
leveling-strategy.rectangular-grid.do_home true
```

---

##### `only_by_two_corners`

**Type:** `bool`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:109`

**Description:** Define bed by two corners instead of center and size.

**Example:**
```
leveling-strategy.rectangular-grid.only_by_two_corners false
```

---

##### `human_readable`

**Type:** `bool`

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:110`

**Description:** Save grid in human-readable format.

**Example:**
```
leveling-strategy.rectangular-grid.human_readable true
```

---

##### `height_limit`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:111`

**Description:** Maximum height deviation before error.

**Example:**
```
leveling-strategy.rectangular-grid.height_limit 2.0
```

---

##### `dampening_start`

**Type:** `number` (mm)

**Defined in:** `modules/tools/zprobe/CartGridStrategy.cpp:112`

**Description:** Height at which to start dampening compensation.

**Example:**
```
leveling-strategy.rectangular-grid.dampening_start 0.5
```

---

### Leveling Strategies Usage Guide

#### M-Codes for Bed Leveling

All leveling strategies use G-codes and M-codes for probing, calibration, and compensation control:

##### Common M-Codes (All Strategies)

**G29** - Run bed leveling/probing sequence
```
G29        # Execute the configured leveling strategy
```
- Three-Point: Probes 3 points, calculates plane
- Rectangular/Delta Grid: Probes all grid points
- Delta Calibration: Probes 7 points, calculates geometry

**G31** - Report current probe status
```
G31        # Returns probe Z offset and status
```

**G32** - Perform comprehensive probing
```
G32        # Run full calibration (delta printers)
```

**M370** - Clear bed compensation grid
```
M370       # Disable and clear all leveling compensation
```
Useful when:
- Switching between strategies
- Testing without compensation
- Resetting after bad probe

**M374** - Save grid/plane to SD card (`config-override`)
```
M374       # Saves current leveling data to config-override file
```
**Note:** Requires `save_plane true` or `save true` in strategy config.

Data persists across reboots when saved.

**M375** - Load grid/plane from SD card
```
M375       # Loads leveling data from config-override file
```

**M500** - Save all settings to config-override
```
M500       # Saves all settings including leveling data
```

**M501** - Load all settings from config-override
```
M501       # Loads all settings including leveling data
```

**M503** - Display current settings
```
M503       # Shows all current configuration values
```

**M561** - Clear bed transformation/compensation
```
M561       # Alias for M370, disables compensation
```

##### Rectangular Grid Specific M-Codes

**M565** - Set grid parameters
```
M565 X50 Y50    # Set grid spacing to 50mm x 50mm
```
Dynamically adjusts grid resolution.

**M557** - Define grid area
```
M557 X10:190 Y10:190 S20    # Define 10-190mm area with 20mm spacing
```
- `X10:190`: X-axis range (min:max)
- `Y10:190`: Y-axis range (min:max)
- `S20`: Grid spacing in mm

---

### Choosing the Right Leveling Strategy

| Printer Type | Recommended Strategy | Why |
|--------------|---------------------|-----|
| **Cartesian (Square/Rectangular bed)** | Rectangular Grid | Comprehensive bed mapping, handles complex warps |
| **Cartesian (Small bed, quick)** | Three-Point | Fast, good for flat beds with minor tilt |
| **Delta (bed leveling)** | Delta Grid | Radial grid pattern matches delta geometry |
| **Delta (calibration)** | Delta Calibration | Calculates tower positions, delta radius, arm length |

**Three-Point** is best for:
- Quick leveling on relatively flat beds
- Simple tilt compensation
- Printers with minimal bed warp
- Fast pre-print checks

**Rectangular Grid** is best for:
- Beds with significant warp or bow
- Large print areas
- Maximum compensation accuracy
- Commercial/production use

**Delta Grid** is best for:
- Delta printers needing bed compensation
- Circular build areas
- After delta calibration is complete

**Delta Calibration** is best for:
- Initial delta printer setup
- After mechanical changes (arm length, tower position)
- Diagnosing delta geometry issues
- Not for bed leveling (use Delta Grid after calibration)

---

### Probe Offset Configuration

All strategies require proper probe offset configuration:

```
zprobe.probe_offsets 0,0,0      # X, Y, Z offsets from nozzle to probe
```

**Finding Your Offsets:**

1. **Z Offset** (most critical):
   ```
   G28           # Home all axes
   G0 Z10        # Move to 10mm height
   G30           # Probe to find Z0
   M114          # Check Z position
   ```
   The Z value is your probe offset (typically negative, e.g., `-0.5`)

2. **X/Y Offsets**:
   - Measure physical distance from nozzle tip to probe trigger point
   - X: positive if probe is to the right of nozzle, negative if left
   - Y: positive if probe is behind nozzle, negative if in front

**Example Offsets:**
```
# BLTouch mounted to the right and behind nozzle
zprobe.probe_offsets 35,5,-0.5

# Inductive probe mounted to the left and in front
zprobe.probe_offsets -20,-10,-0.3
```

---

### Typical Workflow

#### First-Time Setup

1. **Configure strategy in config file**
   ```
   leveling-strategy.rectangular-grid.enable true
   leveling-strategy.rectangular-grid.x_size 200
   leveling-strategy.rectangular-grid.y_size 200
   leveling-strategy.rectangular-grid.size 50
   leveling-strategy.rectangular-grid.save true
   ```

2. **Configure probe offsets**
   ```
   zprobe.probe_offsets 0,0,-0.5
   ```

3. **Home and probe**
   ```
   G28           # Home all axes
   G29           # Run leveling
   ```

4. **Save grid**
   ```
   M374          # Save to config-override
   M500          # Alternative: save all settings
   ```

#### Daily Use (Grid Already Saved)

```
G28           # Home all axes
M375          # Load saved grid from SD card
G0 X100 Y100  # Move to print area
G1 Z0.2       # Test compensation (should follow bed contour)
```

#### Re-Probing When Needed

Re-probe when:
- Bed physically adjusted
- Nozzle changed
- Print quality issues
- After crash/collision
- Weekly for production use

```
G28           # Home
M370          # Clear old compensation
G29           # Re-probe
M374          # Save new grid
```

---

### Troubleshooting Leveling

**Problem: Probe triggers too early/late**
- Solution: Adjust `zprobe.probe_offsets` Z value
- Test with `G30` and verify Z=0 aligns with nozzle touching bed

**Problem: Grid probing fails mid-sequence**
- Check probe wiring and trigger reliability
- Verify `zprobe.probe_height` is adequate (typically 5mm)
- Ensure bed is roughly level (within 3-5mm across surface)

**Problem: Compensation not applied during print**
- Verify grid is loaded: `M503` should show grid data
- Check `M370` wasn't sent (clears compensation)
- Ensure Z moves during `G0` commands over bed (indicates active compensation)

**Problem: First layer still uneven**
- Increase grid resolution (smaller `size` value)
- Re-check probe offsets
- Verify mechanical issues (loose bed, bent frame)

**Problem: Delta calibration gives poor results**
- Ensure arms are same length
- Check tower positions are 120° apart
- Verify `delta_radius` is approximately correct
- Run calibration multiple times, average results

---

## Other Modules

## Custom_menu Module

3 settings in this category.

#### `custom_menu.command`

**Type:** `string`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/screens/CustomScreen.cpp:40`
- Context: Module instance (custom_menu)

**Example Configuration Paths:**

```
custom_menu.command
```

#### `custom_menu.enable`

**Type:** `bool`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/screens/CustomScreen.cpp:34`
- Context: Module instance (custom_menu)

**Example Configuration Paths:**

```
custom_menu.enable
```

#### `custom_menu.name`

**Type:** `string`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/screens/CustomScreen.cpp:36`
- Context: Module instance (custom_menu)

**Example Configuration Paths:**

```
custom_menu.name
```

---


---

## Drillingcycles Module

2 settings in this category.

#### `drillingcycles.dwell_units`

**Type:** `string`

**Default Value:** `"S"`

**Context:** Global setting

- Defined in: `modules/tools/drillingcycles/Drillingcycles.cpp:68`
- Context: Global setting

**Example Configuration Paths:**

```
drillingcycles.dwell_units
```

#### `drillingcycles.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/drillingcycles/Drillingcycles.cpp:43`
- Context: Global setting

**Example Configuration Paths:**

```
drillingcycles.enable
```

---


---

## Extruder Module

17 settings in this category.

#### `extruder.acceleration`

**Type:** `number`

**Default Value:** `1000`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:97`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.acceleration
extruder.hotend2.acceleration
```

#### `extruder.dir_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:93`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.dir_pin
extruder.hotend2.dir_pin
```

#### `extruder.en_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:94`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.en_pin
extruder.hotend2.en_pin
```

#### `extruder.enable`

**Type:** `bool`

**Module Instance Context:**

- Defined in: `modules/tools/extruder/ExtruderMaker.cpp:39`
- Context: Module instance (extruder)
- Defined in: `modules/tools/extruder/ExtruderMaker.cpp:64`
- Context: Module instance (extruder)

**Example Configuration Paths:**

```
extruder.hotend.enable
extruder.hotend2.enable
```

#### `extruder.filament_diameter`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:103`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.filament_diameter
extruder.hotend2.filament_diameter
```

#### `extruder.max_speed`

**Type:** `number`

**Default Value:** `1000`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:119`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.max_speed
extruder.hotend2.max_speed
```

#### `extruder.retract_feedrate`

**Type:** `number`

**Default Value:** `45`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:105`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_feedrate
extruder.hotend2.retract_feedrate
```

#### `extruder.retract_length`

**Type:** `number`

**Default Value:** `3`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:104`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_length
extruder.hotend2.retract_length
```

#### `extruder.retract_recover_feedrate`

**Type:** `number`

**Default Value:** `8`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:107`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_recover_feedrate
extruder.hotend2.retract_recover_feedrate
```

#### `extruder.retract_recover_length`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:106`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_recover_length
extruder.hotend2.retract_recover_length
```

#### `extruder.retract_zlift_feedrate`

**Type:** `number`

**Default Value:** `100 * 60`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:109`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_zlift_feedrate
extruder.hotend2.retract_zlift_feedrate
```

#### `extruder.retract_zlift_length`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:108`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.retract_zlift_length
extruder.hotend2.retract_zlift_length
```

#### `extruder.step_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:92`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.step_pin
extruder.hotend2.step_pin
```

#### `extruder.steps_per_mm`

**Type:** `number`

**Default Value:** `1`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:96`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.steps_per_mm
extruder.hotend2.steps_per_mm
```

#### `extruder.x_offset`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:99`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.x_offset
extruder.hotend2.x_offset
```

#### `extruder.y_offset`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:100`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.y_offset
extruder.hotend2.y_offset
```

#### `extruder.z_offset`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/extruder/Extruder.cpp:101`
- Context: extruder module instance setting

**Example Configuration Paths:**

```
extruder.hotend.z_offset
extruder.hotend2.z_offset
```

---


---

## Filament_detector Module

6 settings in this category.

#### `filament_detector.bulge_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:66`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.bulge_pin
```

#### `filament_detector.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:54`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.enable
```

#### `filament_detector.encoder_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:62`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.encoder_pin
```

#### `filament_detector.leave_heaters_on`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:94`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.leave_heaters_on
```

#### `filament_detector.pulses_per_mm`

**Type:** `number`

**Default Value:** `1`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:91`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.pulses_per_mm
```

#### `filament_detector.seconds_per_check`

**Type:** `number`

**Default Value:** `2`

**Context:** Global setting

- Defined in: `modules/tools/filamentdetector/FilamentDetector.cpp:88`
- Context: Global setting

**Example Configuration Paths:**

```
filament_detector.seconds_per_check
```

---


---

## Motor_driver_control Module

16 settings in this category.

#### `motor_driver_control.alarm`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:186`
- Context: Global setting

**Example Configuration Paths:**

```
motor_driver_control.alarm
```

#### `motor_driver_control.axis`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:74`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.axis
```

#### `motor_driver_control.chip`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:97`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.chip
```

#### `motor_driver_control.current`

**Type:** `number`

**Default Value:** `1000`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:148`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.current
```

#### `motor_driver_control.decay_mode`

**Type:** `number`

**Default Value:** `1`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:150`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.decay_mode
```

#### `motor_driver_control.designator`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:77`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.designator
```

#### `motor_driver_control.enable`

**Type:** `bool`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:62`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.enable
```

#### `motor_driver_control.gain`

**Type:** `number`

**Default Value:** `20`

**Context:** Global setting

- Defined in: `modules/utils/motordrivercontrol/drivers/DRV8711/drv8711.cpp:26`
- Context: Global setting

**Example Configuration Paths:**

```
motor_driver_control.gain
```

#### `motor_driver_control.halt_on_alarm`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:187`
- Context: Global setting

**Example Configuration Paths:**

```
motor_driver_control.halt_on_alarm
```

#### `motor_driver_control.max_current`

**Type:** `number`

**Default Value:** `(int`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:145`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.max_current
```

#### `motor_driver_control.microsteps`

**Type:** `number`

**Default Value:** `16`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:149`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.microsteps
```

#### `motor_driver_control.reg`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:156`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.reg
```

#### `motor_driver_control.sense_resistor`

**Type:** `number`

**Default Value:** `0.05F`

**Global Context:**

- Defined in: `modules/utils/motordrivercontrol/drivers/DRV8711/drv8711.cpp:27`
- Context: Global setting
- Defined in: `modules/utils/motordrivercontrol/drivers/TMC26X/TMC26X.cpp:176`
- Context: Global setting

**Example Configuration Paths:**

```
motor_driver_control.sense_resistor
```

#### `motor_driver_control.spi_channel`

**Type:** `number`

**Default Value:** `1`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:121`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.spi_channel
```

#### `motor_driver_control.spi_cs_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:89`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.spi_cs_pin
```

#### `motor_driver_control.spi_frequency`

**Type:** `number`

**Default Value:** `1000000`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:122`
- Context: Module instance (motor_driver_control)

**Example Configuration Paths:**

```
motor_driver_control.spi_frequency
```

---


---

## Network

6 settings in this category.

#### `enable`

**Type:** `bool`

**Default Value:** `false`

**⚠️ This setting is used in MULTIPLE contexts:**

**Global Context:**

- Defined in: `libs/Network/uip/Network.cpp:126`
- Context: Global setting
- Defined in: `modules/tools/zprobe/ZProbe.cpp:63`
- Context: Global setting

**Module Instance Context:**

- Defined in: `modules/tools/zprobe/ZProbe.cpp:88`
- Context: Module instance (leveling_strategy)
- Defined in: `modules/tools/temperaturecontrol/TemperatureControlPool.cpp:30`
- Context: Module instance (temperature_control)

**Configuration:**

```
enable <value>
```

#### `hostname`

**Type:** `string`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:159`
- Context: Global setting

**Configuration:**

```
hostname <value>
```

#### `ip_address`

**Type:** `string`

**Default Value:** `"auto"`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:156`
- Context: Global setting

**Configuration:**

```
ip_address <value>
```

#### `ip_gateway`

**Type:** `string`

**Default Value:** `"192.168.1.254"`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:180`
- Context: Global setting

**Configuration:**

```
ip_gateway <value>
```

#### `ip_mask`

**Type:** `string`

**Default Value:** `"255.255.255.0"`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:175`
- Context: Global setting

**Configuration:**

```
ip_mask <value>
```

#### `mac_override`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:135`
- Context: Global setting

**Configuration:**

```
mac_override <value>
```

---


---

## Panel Module

33 settings in this category.

#### `panel.a0_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:114`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.a0_pin
```

#### `panel.alpha_jog_feedrate`

**Type:** `number`

**Default Value:** `3000.0f`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:169`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.alpha_jog_feedrate
```

#### `panel.back_button_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:135`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:33`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.back_button_pin
```

#### `panel.bed_temperature`

**Type:** `number`

**Default Value:** `60.0f`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:175`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.bed_temperature
```

#### `panel.beta_jog_feedrate`

**Type:** `number`

**Default Value:** `3000.0f`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:170`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.beta_jog_feedrate
```

#### `panel.blue_led_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:152`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.blue_led_pin
```

#### `panel.busy_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/UniversalAdapter.cpp:55`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.busy_pin
```

#### `panel.buzz_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:148`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:34`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.buzz_pin
```

#### `panel.click_button_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:144`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:31`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.click_button_pin
```

#### `panel.contrast`

**Type:** `number`

**Default Value:** `this->contrast`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:158`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.contrast
```

#### `panel.display_extruder`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:202`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.display_extruder
```

#### `panel.down_button_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:119`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.down_button_pin
```

#### `panel.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:110`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.enable
```

#### `panel.encoder_a_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:145`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:29`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.encoder_a_pin
```

#### `panel.encoder_b_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:146`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:30`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.encoder_b_pin
```

#### `panel.encoder_resolution`

**Type:** `number`

**Default Value:** `this->lcd->getEncoderResolution(`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:166`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.encoder_resolution
```

#### `panel.external_sd`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:141`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.external_sd
```

#### `panel.external_sd.sdcd_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:144`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.external_sd.sdcd_pin
```

#### `panel.external_sd.spi_channel`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:145`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.external_sd.spi_channel
```

#### `panel.external_sd.spi_cs_pin`

**Type:** `string`

**Default Value:** `"2.8"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:146`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.external_sd.spi_cs_pin
```

#### `panel.gamma_jog_feedrate`

**Type:** `number`

**Default Value:** `300.0f`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:171`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.gamma_jog_feedrate
```

#### `panel.hotend_temperature`

**Type:** `number`

**Default Value:** `185.0f`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:174`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.hotend_temperature
```

#### `panel.lcd`

**Type:** `string`

**Default Value:** `"reprap_discount_glcd"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:117`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.lcd
```

#### `panel.longpress_delay`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:185`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.longpress_delay
```

#### `panel.menu_offset`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/Panel.cpp:163`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.menu_offset
```

#### `panel.pause_button_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/ST7565.cpp:128`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:32`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.pause_button_pin
```

#### `panel.red_led_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:151`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.red_led_pin
```

#### `panel.reverse`

**Type:** `bool`

**Default Value:** `this->reversed`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:161`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.reverse
```

#### `panel.rst_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:110`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.rst_pin
```

#### `panel.spi_channel`

**Type:** `number`

**Default Value:** `0`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/UniversalAdapter.cpp:58`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ST7565.cpp:92`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:38`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.spi_channel
```

#### `panel.spi_cs_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/UniversalAdapter.cpp:52`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ST7565.cpp:106`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:35`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.spi_cs_pin
```

#### `panel.spi_frequency`

**Type:** `int`

**Default Value:** `500000`

**Module Instance Context:**

- Defined in: `modules/utils/panel/panels/UniversalAdapter.cpp:72`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ST7565.cpp:103`
- Context: panel module instance setting
- Defined in: `modules/utils/panel/panels/ReprapDiscountGLCD.cpp:41`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.spi_frequency
```

#### `panel.up_button_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/utils/panel/panels/ST7565.cpp:118`
- Context: panel module instance setting

**Example Configuration Paths:**

```
panel.up_button_pin
```

---


---

## Plan9 Module

1 settings in this category.

#### `plan9.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:134`
- Context: Global setting

**Example Configuration Paths:**

```
plan9.enable
```

---


---

## Robot & Motion Control

56 settings in this category.

#### `(dynamic)`

**Type:** `string`

**Default Value:** `"nc"`

**Global Context:**

- Defined in: `modules/robot/Robot.cpp:234`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:255`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:256`
- Context: robot (global)
- Defined in: `modules/robot/Robot.cpp:257`
- Context: robot (global)

**Configuration:**

```
(dynamic) <value>
```

#### `acceleration`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:228`
- Context: robot (global)

**Configuration:**

```
acceleration <value>
```

#### `alpha_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/RotatableCartesianSolution.cpp:12`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:23`
- Context: Global setting

**Configuration:**

```
alpha_angle <value>
```

#### `arc_correction`

**Type:** `number`

**Default Value:** `5`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:188`
- Context: robot (global)

**Configuration:**

```
arc_correction <value>
```

#### `arm_length`

**Type:** `number`

**Default Value:** `250.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:32`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:34`
- Context: Global setting

**Configuration:**

```
arm_length <value>
```

#### `arm_radius`

**Type:** `number`

**Default Value:** `124.0f`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:34`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
arm_radius <value>
```

#### `arm_solution`

**Type:** `string`

**Default Value:** `"cartesian"`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:155`
- Context: robot (global)

**Configuration:**

```
arm_solution <value>
```

#### `arm1_length`

**Type:** `number`

**Default Value:** `150.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:30`
- Context: Global setting

**Configuration:**

```
arm1_length <value>
```

#### `arm2_length`

**Type:** `number`

**Default Value:** `150.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:32`
- Context: Global setting

**Configuration:**

```
arm2_length <value>
```

#### `beta_relative_angle`

**Type:** `number`

**Default Value:** `120.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:26`
- Context: Global setting

**Configuration:**

```
beta_relative_angle <value>
```

#### `default_feed_rate`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:182`
- Context: robot (global)

**Configuration:**

```
default_feed_rate <value>
```

#### `default_seek_rate`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:183`
- Context: robot (global)

**Configuration:**

```
default_seek_rate <value>
```

#### `delta_e`

**Type:** `number`

**Default Value:** `131.636F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
delta_e <value>
```

#### `delta_ee_offs`

**Type:** `number`

**Default Value:** `15.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:52`
- Context: Global setting

**Configuration:**

```
delta_ee_offs <value>
```

#### `delta_f`

**Type:** `number`

**Default Value:** `190.526F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:39`
- Context: Global setting

**Configuration:**

```
delta_f <value>
```

#### `delta_halt_on_error`

**Type:** `bool`

**Default Value:** `true`

**Global Context:**

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:42`
- Context: Global setting
- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:60`
- Context: Global setting

**Configuration:**

```
delta_halt_on_error <value>
```

#### `delta_mirror_xy`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:58`
- Context: Global setting

**Configuration:**

```
delta_mirror_xy <value>
```

#### `delta_re`

**Type:** `number`

**Default Value:** `270.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:42`
- Context: Global setting

**Configuration:**

```
delta_re <value>
```

#### `delta_rf`

**Type:** `number`

**Default Value:** `90.000F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:45`
- Context: Global setting

**Configuration:**

```
delta_rf <value>
```

#### `delta_segments_per_second`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:185`
- Context: robot (global)

**Configuration:**

```
delta_segments_per_second <value>
```

#### `delta_tool_offset`

**Type:** `number`

**Default Value:** `30.500F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:55`
- Context: Global setting

**Configuration:**

```
delta_tool_offset <value>
```

#### `delta_tower1_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:36`
- Context: Global setting

**Configuration:**

```
delta_tower1_angle <value>
```

#### `delta_tower1_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:39`
- Context: Global setting

**Configuration:**

```
delta_tower1_offset <value>
```

#### `delta_tower2_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:37`
- Context: Global setting

**Configuration:**

```
delta_tower2_angle <value>
```

#### `delta_tower2_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:40`
- Context: Global setting

**Configuration:**

```
delta_tower2_offset <value>
```

#### `delta_tower3_angle`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:38`
- Context: Global setting

**Configuration:**

```
delta_tower3_angle <value>
```

#### `delta_tower3_offset`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:41`
- Context: Global setting

**Configuration:**

```
delta_tower3_offset <value>
```

#### `delta_z_offset`

**Type:** `number`

**Default Value:** `290.700F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:49`
- Context: Global setting

**Configuration:**

```
delta_z_offset <value>
```

#### `gamma_relative_angle`

**Type:** `number`

**Default Value:** `240.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:29`
- Context: Global setting

**Configuration:**

```
gamma_relative_angle <value>
```

#### `junction_deviation`

**Type:** `number`

**Default Value:** `0.05F`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:45`
- Context: robot (global)

**Configuration:**

```
junction_deviation <value>
```

#### `laser_module_default_power`

**Type:** `number`

**Default Value:** `0.8F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:209`
- Context: robot (global)

**Configuration:**

```
laser_module_default_power <value>
```

#### `max_speed`

**Type:** `number`

**Default Value:** `-60.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:194`
- Context: robot (global)

**Configuration:**

```
max_speed <value>
```

#### `minimum_planner_speed`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:47`
- Context: robot (global)

**Configuration:**

```
minimum_planner_speed <value>
```

#### `mm_max_arc_error`

**Type:** `number`

**Default Value:** `0.01f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:187`
- Context: robot (global)

**Configuration:**

```
mm_max_arc_error <value>
```

#### `mm_per_arc_segment`

**Type:** `number`

**Default Value:** `0.0f`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:186`
- Context: robot (global)

**Configuration:**

```
mm_per_arc_segment <value>
```

#### `mm_per_line_segment`

**Type:** `number`

**Default Value:** `0.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:184`
- Context: robot (global)

**Configuration:**

```
mm_per_line_segment <value>
```

#### `morgan_offset_x`

**Type:** `number`

**Default Value:** `100.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:34`
- Context: Global setting

**Configuration:**

```
morgan_offset_x <value>
```

#### `morgan_offset_y`

**Type:** `number`

**Default Value:** `-60.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:36`
- Context: Global setting

**Configuration:**

```
morgan_offset_y <value>
```

#### `morgan_scaling_x`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:38`
- Context: Global setting

**Configuration:**

```
morgan_scaling_x <value>
```

#### `morgan_scaling_y`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:39`
- Context: Global setting

**Configuration:**

```
morgan_scaling_y <value>
```

#### `morgan_undefined_max`

**Type:** `number`

**Default Value:** `0.95f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:45`
- Context: Global setting

**Configuration:**

```
morgan_undefined_max <value>
```

#### `morgan_undefined_min`

**Type:** `number`

**Default Value:** `0.95f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:43`
- Context: Global setting

**Configuration:**

```
morgan_undefined_min <value>
```

#### `planner_queue_size`

**Type:** `number`

**Default Value:** `32`

**Context:** Global setting

- Defined in: `modules/robot/Conveyor.cpp:77`
- Context: robot (global)

**Configuration:**

```
planner_queue_size <value>
```

#### `queue_delay_time_ms`

**Type:** `number`

**Default Value:** `100`

**Context:** Global setting

- Defined in: `modules/robot/Conveyor.cpp:78`
- Context: robot (global)

**Configuration:**

```
queue_delay_time_ms <value>
```

#### `real_scara`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:46`
- Context: Global setting

**Configuration:**

```
real_scara <value>
```

#### `save_g54`

**Type:** `bool`

**Default Value:** `THEKERNEL->is_grbl_mode(`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:198`
- Context: robot (global)

**Configuration:**

```
save_g54 <value>
```

#### `save_g92`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:197`
- Context: robot (global)

**Configuration:**

```
save_g92 <value>
```

#### `segment_z_moves`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:196`
- Context: robot (global)

**Configuration:**

```
segment_z_moves <value>
```

#### `set_g92`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:199`
- Context: robot (global)

**Configuration:**

```
set_g92 <value>
```

#### `x_axis_max_speed`

**Type:** `number`

**Default Value:** `60000.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:191`
- Context: robot (global)

**Configuration:**

```
x_axis_max_speed <value>
```

#### `x_reduction`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:11`
- Context: Global setting

**Configuration:**

```
x_reduction <value>
```

#### `y_axis_max_speed`

**Type:** `number`

**Default Value:** `60000.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:192`
- Context: robot (global)

**Configuration:**

```
y_axis_max_speed <value>
```

#### `z_acceleration`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:264`
- Context: robot (global)

**Configuration:**

```
z_acceleration <value>
```

#### `z_axis_max_speed`

**Type:** `number`

**Default Value:** `300.0F`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:193`
- Context: robot (global)

**Configuration:**

```
z_axis_max_speed <value>
```

#### `z_junction_deviation`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Planner.cpp:46`
- Context: robot (global)

**Configuration:**

```
z_junction_deviation <value>
```

#### `z_reduction`

**Type:** `number`

**Default Value:** `3.0f`

**Context:** Global setting

- Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:12`
- Context: Global setting

**Configuration:**

```
z_reduction <value>
```

---


---

## Rotary_delta_calibration Module

1 settings in this category.

#### `rotary_delta_calibration.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/rotarydeltacalibration/RotaryDeltaCalibration.cpp:20`
- Context: Global setting

**Example Configuration Paths:**

```
rotary_delta_calibration.enable
```

---


---

## Scaracal Module

3 settings in this category.

#### `scaracal.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/scaracal/SCARAcal.cpp:41`
- Context: Global setting

**Example Configuration Paths:**

```
scaracal.enable
```

#### `scaracal.slow_feedrate`

**Type:** `number`

**Default Value:** `5`

**Context:** Global setting

- Defined in: `modules/tools/scaracal/SCARAcal.cpp:55`
- Context: Global setting

**Example Configuration Paths:**

```
scaracal.slow_feedrate
```

#### `scaracal.z_move`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/scaracal/SCARAcal.cpp:56`
- Context: Global setting

**Example Configuration Paths:**

```
scaracal.z_move
```

---


---

## Soft_endstop Module

8 settings in this category.

#### `soft_endstop.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:287`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.enable
```

#### `soft_endstop.halt`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:288`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.halt
```

#### `soft_endstop.x_max`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:293`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.x_max
```

#### `soft_endstop.x_min`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:290`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.x_min
```

#### `soft_endstop.y_max`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:294`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.y_max
```

#### `soft_endstop.y_min`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:291`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.y_min
```

#### `soft_endstop.z_max`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:295`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.z_max
```

#### `soft_endstop.z_min`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/robot/Robot.cpp:292`
- Context: robot (global)

**Example Configuration Paths:**

```
soft_endstop.z_min
```

---


---

## Spindle Module

20 settings in this category.

#### `spindle.control_D`

**Type:** `number`

**Default Value:** `0.0001f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:59`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.control_D
```

#### `spindle.control_I`

**Type:** `number`

**Default Value:** `0.0001f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:58`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.control_I
```

#### `spindle.control_P`

**Type:** `number`

**Default Value:** `0.0001f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:57`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.control_P
```

#### `spindle.control_smoothing`

**Type:** `number`

**Default Value:** `0.1f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:62`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.control_smoothing
```

#### `spindle.default_rpm`

**Type:** `number`

**Default Value:** `5000.0f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:56`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.default_rpm
```

#### `spindle.dir_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:42`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.dir_pin
```

#### `spindle.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/SpindleMaker.cpp:29`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.enable
```

#### `spindle.feedback_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:93`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.feedback_pin
```

#### `spindle.ignore_on_halt`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/SpindleMaker.cpp:61`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.ignore_on_halt
```

#### `spindle.max_pwm`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:84`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.max_pwm
```

#### `spindle.max_rpm`

**Type:** `int`

**Default Value:** `5000`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:31`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.max_rpm
```

#### `spindle.min_rpm`

**Type:** `int`

**Default Value:** `100`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:30`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.min_rpm
```

#### `spindle.pulses_per_rev`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:55`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.pulses_per_rev
```

#### `spindle.pwm_period`

**Type:** `int`

**Default Value:** `1000`

**Module Instance Context:**

- Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:50`
- Context: spindle module instance setting
- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:86`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.pwm_period
```

#### `spindle.pwm_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:36`
- Context: spindle module instance setting
- Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:71`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.pwm_pin
```

#### `spindle.rx_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:34`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.rx_pin
```

#### `spindle.switch_on_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:56`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.switch_on_pin
```

#### `spindle.tx_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:38`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.tx_pin
```

#### `spindle.type`

**Type:** `string`

**Default Value:** `"pwm"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/SpindleMaker.cpp:37`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.type
```

#### `spindle.vfd_type`

**Type:** `string`

**Default Value:** `"none"`

**Context:** Module instance setting

- Defined in: `modules/tools/spindle/SpindleMaker.cpp:38`
- Context: spindle module instance setting

**Example Configuration Paths:**

```
spindle.vfd_type
```

---


---

## Switch Module

18 settings in this category.

#### `switch.default_on_value`

**Type:** `number`

**Default Value:** `0`

**Module Instance Context:**

- Defined in: `modules/tools/switch/Switch.cpp:223`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:237`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.default_on_value
switch.psu.default_on_value
```

#### `switch.enable`

**Type:** `bool`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/SwitchPool.cpp:29`
- Context: Module instance (switch)

**Example Configuration Paths:**

```
switch.fan.enable
switch.psu.enable
```

#### `switch.failsafe_set_to`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:123`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.failsafe_set_to
switch.psu.failsafe_set_to
```

#### `switch.halt_set_to`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:125`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.halt_set_to
switch.psu.halt_set_to
```

#### `switch.ignore_on_halt`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:124`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.ignore_on_halt
switch.psu.ignore_on_halt
```

#### `switch.input_off_command`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:98`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.input_off_command
switch.psu.input_off_command
```

#### `switch.input_on_command`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:97`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.input_on_command
switch.psu.input_on_command
```

#### `switch.input_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:104`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.input_pin
switch.psu.input_pin
```

#### `switch.input_pin_behavior`

**Type:** `string`

**Default Value:** `"momentary"`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:109`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.input_pin_behavior
switch.psu.input_pin_behavior
```

#### `switch.max_pwm`

**Type:** `number`

**Default Value:** `255`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:208`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.max_pwm
switch.psu.max_pwm
```

#### `switch.output_off_command`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:100`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.output_off_command
switch.psu.output_off_command
```

#### `switch.output_on_command`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:99`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.output_on_command
switch.psu.output_on_command
```

#### `switch.output_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Module Instance Context:**

- Defined in: `modules/tools/switch/Switch.cpp:130`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:146`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:162`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:178`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.output_pin
switch.psu.output_pin
```

#### `switch.output_type`

**Type:** `string`

**Default Value:** `"pwm"`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:122`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.output_type
switch.psu.output_type
```

#### `switch.pwm_period_ms`

**Type:** `number`

**Default Value:** `20`

**Module Instance Context:**

- Defined in: `modules/tools/switch/Switch.cpp:218`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:232`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.pwm_period_ms
switch.psu.pwm_period_ms
```

#### `switch.startup_state`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:101`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.startup_state
switch.psu.startup_state
```

#### `switch.startup_value`

**Type:** `number`

**Default Value:** `this->sigmadelta_pin->max_pwm(`

**Module Instance Context:**

- Defined in: `modules/tools/switch/Switch.cpp:209`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:222`
- Context: switch module instance setting
- Defined in: `modules/tools/switch/Switch.cpp:236`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.startup_value
switch.psu.startup_value
```

#### `switch.subcode`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/switch/Switch.cpp:96`
- Context: switch module instance setting

**Example Configuration Paths:**

```
switch.fan.subcode
switch.psu.subcode
```

---


---

## System

6 settings in this category.

#### `base_stepping_frequency`

**Type:** `number`

**Default Value:** `100000`

**Context:** Global setting

- Defined in: `libs/Kernel.cpp:159`
- Context: kernel (global)

**Configuration:**

```
base_stepping_frequency <value>
```

#### `enable_feed_hold`

**Type:** `bool`

**Default Value:** `this->grbl_mode`

**Context:** Global setting

- Defined in: `libs/Kernel.cpp:119`
- Context: kernel (global)

**Configuration:**

```
enable_feed_hold <value>
```

#### `grbl_mode`

**Type:** `bool`

**Default Value:** `true`

**Global Context:**

- Defined in: `libs/Kernel.cpp:114`
- Context: kernel (global)
- Defined in: `libs/Kernel.cpp:116`
- Context: kernel (global)

**Configuration:**

```
grbl_mode <value>
```

#### `leds_disable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `libs/Kernel.cpp:111`
- Context: kernel (global)

**Configuration:**

```
leds_disable <value>
```

#### `microseconds_per_step_pulse`

**Type:** `number`

**Default Value:** `1`

**Context:** Global setting

- Defined in: `libs/Kernel.cpp:160`
- Context: kernel (global)

**Configuration:**

```
microseconds_per_step_pulse <value>
```

#### `ok_per_line`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `libs/Kernel.cpp:122`
- Context: kernel (global)

**Configuration:**

```
ok_per_line <value>
```

---


---

## Telnet Module

1 settings in this category.

#### `telnet.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:133`
- Context: Global setting

**Example Configuration Paths:**

```
telnet.enable
```

---


---

## Temperatureswitch Module

10 settings in this category.

#### `temperatureswitch.arm_mcode`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:118`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.arm_mcode
```

#### `temperatureswitch.cooldown_poll`

**Type:** `number`

**Default Value:** `60`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:126`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.cooldown_poll
```

#### `temperatureswitch.designator`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:78`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.designator
```

#### `temperatureswitch.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:72`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.enable
```

#### `temperatureswitch.heatup_poll`

**Type:** `number`

**Default Value:** `15`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:125`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.heatup_poll
```

#### `temperatureswitch.inverted`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:108`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.inverted
```

#### `temperatureswitch.switch`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:90`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.switch
```

#### `temperatureswitch.threshold_temp`

**Type:** `number`

**Default Value:** `50.0f`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:122`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.threshold_temp
```

#### `temperatureswitch.trigger`

**Type:** `string`

**Default Value:** `"level"`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:111`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.trigger
```

#### `temperatureswitch.type`

**Type:** `string`

**Default Value:** `""`

**Context:** Module instance setting

- Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:93`
- Context: Module instance (temperatureswitch)

**Example Configuration Paths:**

```
temperatureswitch.type
```

---


---

## Uart0 Module

1 settings in this category.

#### `uart0.baud_rate`

**Type:** `number`

**Default Value:** `DEFAULT_SERIAL_BAUD_RATE`

**Context:** Global setting

- Defined in: `modules/communication/SerialConsole.cpp:182`
- Context: serial (global)

**Example Configuration Paths:**

```
uart0.baud_rate
```

---


---

## Webserver Module

1 settings in this category.

#### `webserver.enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `libs/Network/uip/Network.cpp:132`
- Context: Global setting

**Example Configuration Paths:**

```
webserver.enable
```

---


---

## Other Global Settings

113 settings in this category.

#### `after_probe_gcode`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:211`
- Context: Global setting

**Configuration:**

```
after_probe_gcode <value>
```

#### `after_suspend_gcode`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/utils/player/Player.cpp:72`
- Context: player (global)

**Configuration:**

```
after_suspend_gcode <value>
```

#### `alpha_current`

**Type:** `number`

**Default Value:** `0.8f`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:66`
- Context: Global setting

**Configuration:**

```
alpha_current <value>
```

#### `alpha_trim_mm`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:390`
- Context: endstops (global)

**Configuration:**

```
alpha_trim_mm <value>
```

#### `bang_bang`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:202`
- Context: Global setting

**Configuration:**

```
bang_bang <value>
```

#### `before_probe_gcode`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:210`
- Context: Global setting

**Configuration:**

```
before_probe_gcode <value>
```

#### `before_resume_gcode`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/utils/player/Player.cpp:73`
- Context: player (global)

**Configuration:**

```
before_resume_gcode <value>
```

#### `beta_current`

**Type:** `number`

**Default Value:** `0.8f`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:67`
- Context: Global setting

**Configuration:**

```
beta_current <value>
```

#### `beta_trim_mm`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:391`
- Context: endstops (global)

**Configuration:**

```
beta_trim_mm <value>
```

#### `corexy_homing`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:383`
- Context: endstops (global)

**Configuration:**

```
corexy_homing <value>
```

#### `currentcontrol_module_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:43`
- Context: Global setting

**Configuration:**

```
currentcontrol_module_enable <value>
```

#### `d_factor`

**Type:** `number`

**Default Value:** `200`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:220`
- Context: Global setting

**Configuration:**

```
d_factor <value>
```

#### `dampening_start`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:160`
- Context: Global setting

**Configuration:**

```
dampening_start <value>
```

#### `debounce_ms`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:82`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
debounce_ms <value>
```

#### `delta_current`

**Type:** `number`

**Default Value:** `0.8f`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:69`
- Context: Global setting

**Configuration:**

```
delta_current <value>
```

#### `delta_homing`

**Type:** `bool`

**Default Value:** `false`

**⚠️ This setting is used in MULTIPLE contexts:**

**Global Context:**

- Defined in: `modules/tools/endstops/Endstops.cpp:384`
- Context: endstops (global)

**Module Instance Context:**

- Defined in: `modules/tools/zprobe/ZProbe.cpp:126`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
delta_homing <value>
```

#### `designator`

**Type:** `string`

**Default Value:** `string("T"`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:141`
- Context: Global setting

**Configuration:**

```
designator <value>
```

#### `dfu_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `main.cpp:208`
- Context: Global setting

**Configuration:**

```
dfu_enable <value>
```

#### `digipotchip`

**Type:** `string`

**Default Value:** `"mcp4451"`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:53`
- Context: Global setting

**Configuration:**

```
digipotchip <value>
```

#### `do_home`

**Type:** `bool`

**Default Value:** `true`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:154`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:114`
- Context: Global setting

**Configuration:**

```
do_home <value>
```

#### `dwell_before_probing`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:147`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
dwell_before_probing <value>
```

#### `endstop_debounce_count`

**Type:** `number`

**Default Value:** `100`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:381`
- Context: endstops (global)

**Configuration:**

```
endstop_debounce_count <value>
```

#### `endstop_debounce_ms`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:380`
- Context: endstops (global)

**Configuration:**

```
endstop_debounce_ms <value>
```

#### `endstops_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:117`
- Context: endstops (global)

**Configuration:**

```
endstops_enable <value>
```

#### `epsilon_current`

**Type:** `number`

**Default Value:** `-1`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:70`
- Context: Global setting

**Configuration:**

```
epsilon_current <value>
```

#### `eta_current`

**Type:** `number`

**Default Value:** `-1`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:72`
- Context: Global setting

**Configuration:**

```
eta_current <value>
```

#### `fast_feedrate`

**Type:** `number`

**Default Value:** `100`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:140`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
fast_feedrate <value>
```

#### `gamma_current`

**Type:** `number`

**Default Value:** `0.8f`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:68`
- Context: Global setting

**Configuration:**

```
gamma_current <value>
```

#### `gamma_max`

**Type:** `number`

**Default Value:** `200`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:145`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
gamma_max <value>
```

#### `gamma_trim_mm`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:392`
- Context: endstops (global)

**Configuration:**

```
gamma_trim_mm <value>
```

#### `get_m_code`

**Type:** `number`

**Default Value:** `105`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:138`
- Context: Global setting

**Configuration:**

```
get_m_code <value>
```

#### `grid_x_size`

**Type:** `number`

**Default Value:** `grid_size`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:146`
- Context: Global setting

**Configuration:**

```
grid_x_size <value>
```

#### `grid_y_size`

**Type:** `number`

**Default Value:** `grid_size`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:147`
- Context: Global setting

**Configuration:**

```
grid_y_size <value>
```

#### `heater_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:163`
- Context: Global setting

**Configuration:**

```
heater_pin <value>
```

#### `height_limit`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:159`
- Context: Global setting

**Configuration:**

```
height_limit <value>
```

#### `home_first`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:109`
- Context: Global setting

**Configuration:**

```
home_first <value>
```

#### `home_z_first`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:388`
- Context: endstops (global)

**Configuration:**

```
home_z_first <value>
```

#### `homing_order`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:395`
- Context: endstops (global)

**Configuration:**

```
homing_order <value>
```

#### `human_readable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:156`
- Context: Global setting

**Configuration:**

```
human_readable <value>
```

#### `hysteresis`

**Type:** `number`

**Default Value:** `2`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:203`
- Context: Global setting

**Configuration:**

```
hysteresis <value>
```

#### `i_factor`

**Type:** `number`

**Default Value:** `0.3f`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:219`
- Context: Global setting

**Configuration:**

```
i_factor <value>
```

#### `i_max`

**Type:** `number`

**Default Value:** `this->heater_pin.max_pwm(`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:224`
- Context: Global setting

**Configuration:**

```
i_max <value>
```

#### `initial_height`

**Type:** `number`

**Default Value:** `NAN`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:179`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:39`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:120`
- Context: Global setting

**Configuration:**

```
initial_height <value>
```

#### `is_square`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:115`
- Context: Global setting

**Configuration:**

```
is_square <value>
```

#### `kill_button_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:32`
- Context: Global setting

**Configuration:**

```
kill_button_enable <value>
```

#### `kill_button_pin`

**Type:** `string`

**Default Value:** `"2.12"`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:37`
- Context: Global setting

**Configuration:**

```
kill_button_pin <value>
```

#### `kill_button_poll_frequency`

**Type:** `number`

**Default Value:** `5`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:49`
- Context: Global setting

**Configuration:**

```
kill_button_poll_frequency <value>
```

#### `kill_button_toggle_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Found in: `docs/killbutton.md`
- Context: Global setting

**Description:** Allows for latching estop button. When true, the kill button acts as a toggle - pressing and latching it will halt the system, and releasing it will exit the halt condition (unless `unkill_enable` is set to false).

**Configuration:**

```
kill_button_toggle_enable <value>
```

#### `laser_module_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:53`
- Context: Global setting

**Configuration:**

```
laser_module_enable <value>
```

#### `laser_module_maximum_power`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:100`
- Context: Global setting

**Configuration:**

```
laser_module_maximum_power <value>
```

#### `laser_module_maximum_s_value`

**Type:** `number`

**Default Value:** `1.0f`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:109`
- Context: Global setting

**Configuration:**

```
laser_module_maximum_s_value <value>
```

#### `laser_module_minimum_power`

**Type:** `number`

**Default Value:** `this->laser_minimum_power`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:106`
- Context: Global setting

**Configuration:**

```
laser_module_minimum_power <value>
```

#### `laser_module_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:61`
- Context: Global setting

**Configuration:**

```
laser_module_pin <value>
```

#### `laser_module_proportional_power`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:94`
- Context: Global setting

**Configuration:**

```
laser_module_proportional_power <value>
```

#### `laser_module_pwm_period`

**Type:** `number`

**Default Value:** `20`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:96`
- Context: Global setting

**Configuration:**

```
laser_module_pwm_period <value>
```

#### `laser_module_pwm_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:65`
- Context: Global setting

**Configuration:**

```
laser_module_pwm_pin <value>
```

#### `laser_module_tickle_power`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:103`
- Context: Global setting

**Configuration:**

```
laser_module_tickle_power <value>
```

#### `laser_module_ttl_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Global setting

- Defined in: `modules/tools/laser/Laser.cpp:84`
- Context: Global setting

**Configuration:**

```
laser_module_ttl_pin <value>
```

#### `leave_heaters_on_suspend`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/player/Player.cpp:76`
- Context: player (global)

**Configuration:**

```
leave_heaters_on_suspend <value>
```

#### `m_attach`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:157`
- Context: Global setting

**Configuration:**

```
m_attach <value>
```

#### `max_pwm`

**Type:** `number`

**Default Value:** `255`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:205`
- Context: Global setting

**Configuration:**

```
max_pwm <value>
```

#### `max_temp`

**Type:** `number`

**Default Value:** `300`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:159`
- Context: Global setting

**Configuration:**

```
max_temp <value>
```

#### `max_z`

**Type:** `number`

**Default Value:** `NAN`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:143`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
max_z <value>
```

#### `min_temp`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:160`
- Context: Global setting

**Configuration:**

```
min_temp <value>
```

#### `motor_driver_control`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Module instance setting

- Defined in: `modules/utils/motordrivercontrol/MotorDriverControl.cpp:146`
- Context: Module instance (motor_driver_control)

**Configuration:**

```
motor_driver_control <value>
```

#### `mount_position`

**Type:** `string`

**Default Value:** `"0,0,50"`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:194`
- Context: Global setting

**Configuration:**

```
mount_position <value>
```

#### `move_to_origin_after_home`

**Type:** `bool`

**Default Value:** `is_delta`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:413`
- Context: endstops (global)

**Configuration:**

```
move_to_origin_after_home <value>
```

#### `msd_disable`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `main.cpp:115`
- Context: Global setting

**Configuration:**

```
msd_disable <value>
```

#### `on_boot_gcode`

**Type:** `string`

**Default Value:** `"/sd/on_boot.gcode"`

**Context:** Global setting

- Defined in: `modules/utils/player/Player.cpp:69`
- Context: player (global)

**Configuration:**

```
on_boot_gcode <value>
```

#### `on_boot_gcode_enable`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/utils/player/Player.cpp:70`
- Context: player (global)

**Configuration:**

```
on_boot_gcode_enable <value>
```

#### `only_by_two_corners`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:155`
- Context: Global setting

**Configuration:**

```
only_by_two_corners <value>
```

#### `p_factor`

**Type:** `number`

**Default Value:** `10`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:218`
- Context: Global setting

**Configuration:**

```
p_factor <value>
```

#### `park_after_home`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:415`
- Context: endstops (global)

**Configuration:**

```
park_after_home <value>
```

#### `pause_button_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:31`
- Context: Global setting

**Configuration:**

```
pause_button_enable <value>
```

#### `pause_led_pin`

**Type:** `string`

**Default Value:** `ledpin`

**Context:** Global setting

- Defined in: `modules/utils/PlayLed/PlayLed.cpp:41`
- Context: Global setting

**Configuration:**

```
pause_led_pin <value>
```

#### `play_led_disable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/PlayLed/PlayLed.cpp:27`
- Context: Global setting

**Configuration:**

```
play_led_disable <value>
```

#### `play_led_pin`

**Type:** `string`

**Default Value:** `ledpin`

**Context:** Global setting

- Defined in: `modules/utils/PlayLed/PlayLed.cpp:42`
- Context: Global setting

**Configuration:**

```
play_led_pin <value>
```

#### `point1`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:98`
- Context: Global setting

**Configuration:**

```
point1 <value>
```

#### `point2`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:99`
- Context: Global setting

**Configuration:**

```
point2 <value>
```

#### `point3`

**Type:** `string`

**Default Value:** `""`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:100`
- Context: Global setting

**Configuration:**

```
point3 <value>
```

#### `preset1`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:193`
- Context: Global setting

**Configuration:**

```
preset1 <value>
```

#### `preset2`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:194`
- Context: Global setting

**Configuration:**

```
preset2 <value>
```

#### `probe_height`

**Type:** `number`

**Default Value:** `5.0F`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:138`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
probe_height <value>
```

#### `probe_offsets`

**Type:** `string`

**Default Value:** `"0,0,0"`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:184`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:124`
- Context: Global setting
- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:106`
- Context: Global setting

**Configuration:**

```
probe_offsets <value>
```

#### `probe_pin`

**Type:** `string`

**Default Value:** `"nc"`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:81`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
probe_pin <value>
```

#### `probe_radius`

**Type:** `number`

**Default Value:** `100.0F`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:33`
- Context: Global setting

**Configuration:**

```
probe_radius <value>
```

#### `pwm_frequency`

**Type:** `number`

**Default Value:** `2000`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:209`
- Context: Global setting

**Configuration:**

```
pwm_frequency <value>
```

#### `radius`

**Type:** `number`

**Default Value:** `-1`

**Global Context:**

- Defined in: `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:30`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:116`
- Context: Global setting

**Configuration:**

```
radius <value>
```

#### `rdelta_homing`

**Type:** `bool`

**Default Value:** `false`

**⚠️ This setting is used in MULTIPLE contexts:**

**Global Context:**

- Defined in: `modules/tools/endstops/Endstops.cpp:385`
- Context: endstops (global)

**Module Instance Context:**

- Defined in: `modules/tools/zprobe/ZProbe.cpp:127`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
rdelta_homing <value>
```

#### `readings_per_second`

**Type:** `number`

**Default Value:** `20`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:139`
- Context: Global setting

**Configuration:**

```
readings_per_second <value>
```

#### `return_feedrate`

**Type:** `number`

**Default Value:** `0`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:141`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
return_feedrate <value>
```

#### `reverse_z`

**Type:** `bool`

**Default Value:** `false`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:142`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
reverse_z <value>
```

#### `runaway_cooling_timeout`

**Type:** `number`

**Default Value:** `0`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:152`
- Context: Global setting

**Configuration:**

```
runaway_cooling_timeout <value>
```

#### `runaway_error_range`

**Type:** `number`

**Default Value:** `1.0F`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:156`
- Context: Global setting

**Configuration:**

```
runaway_error_range <value>
```

#### `runaway_heating_timeout`

**Type:** `number`

**Default Value:** `900`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:149`
- Context: Global setting

**Configuration:**

```
runaway_heating_timeout <value>
```

#### `runaway_range`

**Type:** `number`

**Default Value:** `20`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:144`
- Context: Global setting

**Configuration:**

```
runaway_range <value>
```

#### `save`

**Type:** `bool`

**Default Value:** `false`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:153`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:113`
- Context: Global setting

**Configuration:**

```
save <value>
```

#### `save_plane`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:111`
- Context: Global setting

**Configuration:**

```
save_plane <value>
```

#### `scara_homing`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/endstops/Endstops.cpp:386`
- Context: endstops (global)

**Configuration:**

```
scara_homing <value>
```

#### `second_usb_serial_enable`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `main.cpp:204`
- Context: Global setting

**Configuration:**

```
second_usb_serial_enable <value>
```

#### `sensor`

**Type:** `string`

**Default Value:** `"thermistor"`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:173`
- Context: Global setting

**Configuration:**

```
sensor <value>
```

#### `set_and_wait_m_code`

**Type:** `number`

**Default Value:** `109`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:137`
- Context: Global setting

**Configuration:**

```
set_and_wait_m_code <value>
```

#### `set_m_code`

**Type:** `number`

**Default Value:** `104`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:136`
- Context: Global setting

**Configuration:**

```
set_m_code <value>
```

#### `size`

**Type:** `number`

**Default Value:** `7`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:145`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:111`
- Context: Global setting

**Configuration:**

```
size <value>
```

#### `slow_feedrate`

**Type:** `number`

**Default Value:** `5`

**Context:** Module instance setting

- Defined in: `modules/tools/zprobe/ZProbe.cpp:139`
- Context: Module instance (leveling_strategy)

**Configuration:**

```
slow_feedrate <value>
```

#### `theta_current`

**Type:** `number`

**Default Value:** `-1`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:73`
- Context: Global setting

**Configuration:**

```
theta_current <value>
```

#### `toggle`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:45`
- Context: Global setting

**Configuration:**

```
toggle <value>
```

#### `tolerance`

**Type:** `number`

**Default Value:** `0.03F`

**Global Context:**

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:152`
- Context: Global setting
- Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:112`
- Context: Global setting
- Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:110`
- Context: Global setting

**Configuration:**

```
tolerance <value>
```

#### `unkill_enable`

**Type:** `bool`

**Default Value:** `true`

**Context:** Global setting

- Defined in: `modules/utils/killbutton/KillButton.cpp:44`
- Context: Global setting

**Configuration:**

```
unkill_enable <value>
```

#### `watchdog_timeout`

**Type:** `number`

**Default Value:** `10.0F`

**Context:** Global setting

- Defined in: `main.cpp:213`
- Context: Global setting

**Configuration:**

```
watchdog_timeout <value>
```

#### `windup`

**Type:** `bool`

**Default Value:** `false`

**Context:** Global setting

- Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:204`
- Context: Global setting

**Configuration:**

```
windup <value>
```

#### `x_size`

**Type:** `number`

**Default Value:** `0.0F`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:170`
- Context: Global setting

**Configuration:**

```
x_size <value>
```

#### `y_size`

**Type:** `number`

**Default Value:** `0.0F`

**Context:** Global setting

- Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:171`
- Context: Global setting

**Configuration:**

```
y_size <value>
```

#### `zeta_current`

**Type:** `number`

**Default Value:** `-1`

**Context:** Global setting

- Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:71`
- Context: Global setting

**Configuration:**

```
zeta_current <value>
```

---

## Appendix - Additional Options Found

The following configuration options were found in documentation and examples but were not auto-generated from the source code. These are valid configuration options used in multi-axis configurations.

#### `delta_steps_per_mm`

**Type:** `number`

**Context:** Multi-axis configuration (A-axis / 4th axis / rotary axis)

**Description:** Configures the steps per millimeter (or steps per degree for rotary axes) for the delta (A) axis. This is used when configuring a 4th axis for rotary operations, indexing, or 5-axis milling.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/6axis.md` (line 100)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-cnc-milling.md` (line 143)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-cnc-mill.md` (line 167)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-grbl-alternative.md` (line 116)

**Example Configuration:**

```
# A axis for rotary operations
delta_steps_per_mm     50      # Steps per degree for rotary axis
```

**Configuration:**

```
delta_steps_per_mm <value>
```

#### `delta_max_rate`

**Type:** `number`

**Context:** Multi-axis configuration (A-axis / 4th axis / rotary axis)

**Description:** Configures the maximum rate (speed) for the delta (A) axis in mm/min. For rotary axes, this represents the maximum rotational speed. Used in conjunction with `delta_steps_per_mm` for 4th and 5th axis configurations.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/6axis.md` (line 105)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-cnc-milling.md` (line 144)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-cnc-mill.md` (line 168)
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/landing-page-grbl-alternative.md` (line 117)

**Example Configuration:**

```
# A axis maximum speed
delta_max_rate         30000   # Maximum rotary speed in mm/min
```

**Configuration:**

```
delta_max_rate <value>
```

---

#### `axis_scaling_x`

**Type:** `number`

**Context:** Morgan arm solution configuration

**Description:** Scaling factor applied to the X axis when using the morgan arm solution. This allows for correction of dimensional accuracy in the X direction for the morgan SCARA-type arm configuration.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/configuration-options.md` (line 36)

**Example Configuration:**

```
# Morgan arm solution X axis scaling
axis_scaling_x 0.8
```

**Configuration:**

```
axis_scaling_x <value>
```

#### `axis_scaling_y`

**Type:** `number`

**Context:** Morgan arm solution configuration

**Description:** Scaling factor applied to the Y axis when using the morgan arm solution. This allows for correction of dimensional accuracy in the Y direction for the morgan SCARA-type arm configuration.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/configuration-options.md` (line 37)

**Example Configuration:**

```
# Morgan arm solution Y axis scaling
axis_scaling_y 0.8
```

**Configuration:**

```
axis_scaling_y <value>
```

#### `digipot_max_current`

**Type:** `number`

**Context:** Current control module configuration

**Description:** Defines the maximum current that can be set through the digital potentiometer (digipot) used for controlling stepper motor driver currents. This is a hardware-dependent value based on the specific digipot chip and board design.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/configuration-options.md` (line 76)

**Example Configuration:**

```
# Current control settings
currentcontrol_module_enable true
digipotchip mcp4451
digipot_max_current 2.0   # Maximum 2 amps
```

**Configuration:**

```
digipot_max_current <value>
```

#### `digipot_factor`

**Type:** `number`

**Context:** Current control module configuration

**Description:** Conversion factor for translating desired current values (in amperes) into the digital values required by the digipot chip. This is calculated based on the specific hardware design and varies between board types. For boards using the MCP4451 chip, a typical value is 113.33.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/configuration-options.md` (line 77)

**Example Configuration:**

```
# Current control settings
currentcontrol_module_enable true
digipotchip mcp4451
digipot_factor 113.33     # Conversion factor for MCP4451
```

**Configuration:**

```
digipot_factor <value>
```

---

#### `network.hostname`

**Type:** `string`

**Context:** Network configuration

**Description:** Allows setting a custom hostname for the Smoothieboard that some DHCP servers will recognize and register. This enables connecting to the machine using a memorable hostname instead of an IP address (e.g., `http://smoothk40/` instead of `http://192.168.1.123/`).

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/blue-box-guide.md` (line 206)

**Example Configuration:**

```
# Network hostname for easier access
network.hostname    SmoothK40    # Some DHCP servers accept a hostname for the machine
```

**Configuration:**

```
network.hostname <hostname>
```

#### `network.mac_override`

**Type:** `string` (MAC address format: xx.xx.xx.xx.xx.xx)

**Context:** Network configuration

**Description:** Overrides the default MAC address of the Smoothieboard's network interface. This is useful only if you have a MAC address conflict on your network (which is extremely rare). Under normal circumstances, this setting should not be used.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/blue-box-guide.md` (line 211)

**Example Configuration:**

```
# Override MAC address (only use if you have a conflict)
#network.mac_override    xx.xx.xx.xx.xx.xx    # override the mac address
```

**Configuration:**

```
network.mac_override <mac_address>
```

---

#### `gamma.acceleration`

**Type:** `number`

**Context:** Motion control - per-axis acceleration override

**Description:** Allows setting a separate acceleration value specifically for the gamma (Z) axis, overriding the global `acceleration` setting. This is useful for machines where the Z axis has significantly different mass characteristics or movement requirements compared to X and Y axes. On some machines, the Z axis is very different from the others and has different requirements and capabilities.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/motion-control.md` (line 64)

**Example Configuration:**

```
# Global acceleration
acceleration               3000   # Global acceleration in mm/second/second

# Z-axis specific acceleration (overrides global for Z only)
gamma.acceleration         200    # Lower acceleration for heavy Z axis
```

**Configuration:**

```
gamma.acceleration <value>
```

**Note:** Similarly, `alpha.acceleration` and `beta.acceleration` can be used for X and Y axes respectively, though this is less common. These per-actuator acceleration settings should not be used with delta arm solutions.

---

#### `alpha_acceleration`

**Type:** `number`

**Context:** Motion control - per-actuator acceleration override

**Description:** Sets the acceleration for the alpha actuator (X axis on cartesian machines) in mm/second/second. This allows per-actuator control of acceleration, overriding the global `acceleration` setting. Do not set this on delta arm solutions.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/motion-control-options.md` (line 21)

**Example Configuration:**

```
# Per-actuator acceleration control
alpha_acceleration    3000   # X axis acceleration
beta_acceleration     3000   # Y axis acceleration
gamma_acceleration    200    # Z axis acceleration (slower for heavy Z)
```

**Configuration:**

```
alpha_acceleration <value>
```

---

#### `beta_acceleration`

**Type:** `number`

**Context:** Motion control - per-actuator acceleration override

**Description:** Sets the acceleration for the beta actuator (Y axis on cartesian machines) in mm/second/second. This allows per-actuator control of acceleration, overriding the global `acceleration` setting. Do not set this on delta arm solutions.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/motion-control-options.md` (line 22)

**Configuration:**

```
beta_acceleration <value>
```

---

## Appendix - Additional Options Found

This section contains configuration options found in documentation files that are not yet fully documented in the main configuration reference above.

---

#### `temperature_control.<name>.e3d_amplifier_pin`

**Type:** `pin`

**Context:** Temperature Control module - PT100 sensor configuration

**Description:** When using a PT100 E3D temperature sensor (sensor type `pt100_e3d`), this specifies the ADC pin where the E3D PT100 amplifier board output signal is connected. This must be a free ADC pin (not a thermistor input pin, as those have built-in pull-ups). Typically `1.30` or `1.31` on most boards.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/pt100.md` (lines 37-39)

**Example Configuration:**

```
temperature_control.hotend.enable              true
temperature_control.hotend.sensor              pt100_e3d
temperature_control.hotend.e3d_amplifier_pin   1.30        # must be a free ADC pin, not a temperature input
```

**Configuration:**

```
temperature_control.<name>.e3d_amplifier_pin <pin>
```

**Important Notes:**
- The PT100 E3D amplifier must be powered from the AVCC and AGND header pins on newer Smoothieboards
- If AVCC/AGND pins are not available, you can use 3.3V and GND, but this may introduce noise
- DO NOT power from 5V or you will damage the port
- You cannot use a thermistor input pin due to the pull-up resistor on the board

---

## Appendix - Additional Options Found

The following configuration options were found in the documentation but were not yet catalogued in this comprehensive list. They are added here for completeness.

---

#### `temperature_control.<name>.rt_curve`

**Type:** `string` (comma-separated values)

**Context:** Temperature control - thermistor calibration

**Description:** Allows you to define three points on a temperature curve for your thermistor, and Smoothie will calculate the Steinhart-Hart coefficients automatically. This is an alternative to manually specifying the coefficients. Format: `temp1,resistance1,temp2,resistance2,temp3,resistance3`

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/temperaturecontrol-thermistor-choice.md` (line 61)

**Example Configuration:**

```
# Define three temperature/resistance points for Smoothie to calculate coefficients
temperature_control.hotend.rt_curve    20.0,126800,150,1360,240,206.5
```

**Configuration:**

```
temperature_control.<name>.rt_curve <t1>,<r1>,<t2>,<r2>,<t3>,<r3>
```

**Note:** This is an alternative to specifying `coefficients` directly. Use either `rt_curve` OR `coefficients`, not both.

---

#### `temperature_control.<name>.coefficients`

**Type:** `string` (comma-separated floating point values)

**Context:** Temperature control - thermistor calibration

**Description:** Allows you to manually specify the Steinhart-Hart coefficients for your thermistor. This is the preferred method for accurate temperature readings, especially at higher temperatures (above 80°C). The three coefficients define the mathematical relationship between resistance and temperature.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/temperaturecontrol-thermistor-choice.md` (line 53)

**Example Configuration:**

```
# Manually specify Steinhart-Hart coefficients for accurate temperature readings
temperature_control.hotend.coefficients    0.000722376862540841,0.000216302098124288,0.000000092640163984
```

**Configuration:**

```
temperature_control.<name>.coefficients <coeff_a>,<coeff_b>,<coeff_c>
```

**Note:** This is the preferred method over using `beta` values, especially for hotends where temperatures exceed 80°C. Use either `coefficients` OR `rt_curve` OR `beta`, not multiple methods.

---

#### `touchprobe_enable`

**Type:** `boolean`

**Context:** Touchprobe module (deprecated)

**Description:** Enables or disables the touchprobe module. When set to false, all other touchprobe configuration values are ignored. This module is deprecated and not compiled by default. For modern probing functionality, use the ZProbe module instead.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 92)

**Example Configuration:**

```
touchprobe_enable    false    # enables/disables the module (other values ignored if false)
```

**Configuration:**

```
touchprobe_enable <true|false>
```

**Warning:** This module is deprecated. Use the `zprobe` module for modern probing functionality.

---

#### `touchprobe_log_enable`

**Type:** `boolean`

**Context:** Touchprobe module (deprecated)

**Description:** When enabled, all probe touches will be logged to a file specified by `touchprobe_logfile_name`. This is useful for creating point clouds of probed objects.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 93)

**Example Configuration:**

```
touchprobe_log_enable    false    # should the touches be logged to file
```

**Configuration:**

```
touchprobe_log_enable <true|false>
```

---

#### `touchprobe_logfile_name`

**Type:** `string` (file path)

**Context:** Touchprobe module (deprecated)

**Description:** Specifies the location of the log file where probe touches will be recorded when `touchprobe_log_enable` is true. Must be on the SD card (typically starts with `/sd/`).

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 94)

**Example Configuration:**

```
touchprobe_logfile_name    /sd/probe_log.csv    # location of the log file
```

**Configuration:**

```
touchprobe_logfile_name <filepath>
```

---

#### `touchprobe_log_rotate_mcode`

**Type:** `number` (M-code number)

**Context:** Touchprobe module (deprecated)

**Description:** Specifies an M-code that, when issued, will add a spacer to the log file. This can be useful for separating different probing sessions in the same log file.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 95)

**Example Configuration:**

```
touchprobe_log_rotate_mcode    0    # adds a spacer to logfile if Mxxx is issued
```

**Configuration:**

```
touchprobe_log_rotate_mcode <mcode_number>
```

---

#### `touchprobe_pin`

**Type:** `pin`

**Context:** Touchprobe module (deprecated)

**Description:** Selects the input pin where the touchprobe is connected. Must be a valid input pin. Use `nc` (not connected) to disable.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 96)

**Example Configuration:**

```
touchprobe_pin    nc    # selects the pin where the probe is connected
```

**Configuration:**

```
touchprobe_pin <pin>
```

---

#### `touchprobe_debounce_count`

**Type:** `number`

**Context:** Touchprobe module (deprecated)

**Description:** Specifies how many consecutive ticks the probe must be active before a touch is reported. Higher values provide more resistance to noise and false positives but result in slower response time.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/touchprobe.md` (line 97)

**Example Configuration:**

```
touchprobe_debounce_count    100    # reports touch if probe active for this many ticks (prevents false positives)
```

**Configuration:**

```
touchprobe_debounce_count <number>
```

---

#### `temperature_control.<name>.ad8495_pin`

**Type:** `pin`

**Context:** Temperature Control Module (AD8495 sensor)

**Description:** Specifies the analog input pin to read from when using an AD8495 thermocouple amplifier. This is an alternative to `thermistor_pin` specifically for AD8495 sensors. The AD8495 is a thermocouple amplifier that outputs an analog voltage proportional to the temperature measured by a K-type thermocouple.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/pick-and-place-control.md` (lines 53, 65)

**Example Configuration:**

```
temperature_control.vac_n1.sensor                 ad8495
temperature_control.vac_n1.ad8495_pin             0.23    # Pin for the thermistor to read
temperature_control.vac_n1.ad8495_offset          0
```

**Configuration:**

```
temperature_control.<name>.ad8495_pin <pin>
```

**Notes:**
- Used when `sensor` is set to `ad8495`
- Connect to one of the thermistor input pins (T0-T3)
- Can also be used with `thermistor_pin` (both work for AD8495 sensors)

---

#### `temperature_control.<name>.ad8495_offset`

**Type:** `number`

**Context:** Temperature Control Module (AD8495 sensor)

**Description:** Offset value for calibrating the AD8495 thermocouple amplifier reading. This allows you to compensate for any systematic error in the temperature measurement. The offset is added to the raw reading from the sensor.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/pick-and-place-control.md` (lines 54, 66)

**Example Configuration:**

```
temperature_control.vac_n1.sensor                 ad8495
temperature_control.vac_n1.ad8495_pin             0.23
temperature_control.vac_n1.ad8495_offset          0       # Temperature offset for calibration
```

**Configuration:**

```
temperature_control.<name>.ad8495_offset <value>
```

**Notes:**
- Typical value is 0 (no offset)
- Positive values increase the reported temperature
- Negative values decrease the reported temperature
- Use for calibration if your AD8495 reads consistently high or low

---

#### `temperature_control.<name>.rt_curve`

**Type:** `comma-separated values`

**Context:** Temperature Control Module (Custom sensor calibration)

**Description:** Defines a custom resistance-temperature curve for temperature sensors. This allows you to use custom thermistors or linear sensors that don't match the predefined thermistor models. The values define points on the curve that Smoothie uses for interpolation.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/pick-and-place-control.md` (lines 59, 71)

**Example Configuration:**

```
temperature_control.vac_n1.sensor                 ad8495
temperature_control.vac_n1.rt_curve               20.0,220,120,6000,220,120000
```

**Configuration:**

```
temperature_control.<name>.rt_curve <value1>,<value2>,<value3>,...
```

**Notes:**
- Format and exact meaning of values depends on sensor type
- Used for custom calibration curves
- In the example from pick-and-place machines, this is used with AD8495 for vacuum sensor calibration
- Values typically define temperature and corresponding ADC reading pairs
- Consult source code or community for specific curve format details

---

#### `leveling-strategy.rectangular-grid.only_by_two_corners`

**Type:** `boolean`

**Context:** Rectangular Grid Leveling Strategy (PCB milling)

**Description:** Enables a special "two corners" mode for grid leveling that simplifies the probing process. Instead of requiring precise bed dimensions in the configuration, this mode allows you to specify the grid position and size dynamically with each G32 command using the current head position as a reference point.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/pcb-milling.md` (line 28)

**Example Configuration:**

```
leveling-strategy.rectangular-grid.only_by_two_corners        true
```

**Usage:**

With this enabled, you can use:
```
G32 Xnn Ynn Ann Bnn Inn Jnn
```

Where:
- X, Y = Starting position (Machine coordinates)
- A = X size of grid
- B = Y size of grid
- I = X grid divisions (optional)
- J = Y grid divisions (optional)

**Quick mode without config enable:**
```
G32 R1 X0 Y0 A30 B30
```

The R1 parameter uses current position as start point, with X and Y as offsets.

**Configuration:**

```
leveling-strategy.rectangular-grid.only_by_two_corners <true|false>
```

**Notes:**
- All positions are in Machine Coordinate System (MCS), not Work Coordinate System (WCS)
- Particularly useful for PCB milling where board position varies
- Allows flexible grid positioning without reconfiguring
- If probe offset exists, head moves to account for offset

---

#### `zprobe.dwell_before_probing`

**Type:** `number` (seconds)

**Context:** ZProbe module

**Description:** Specifies a dwell time in seconds before the probe begins its descent to contact the bed. This delay allows the probe and bed to settle after rapid movement, which is particularly useful for piezo-based Z-probes that can be triggered by vibration from the movement itself. The dwell period helps prevent false triggers by allowing mechanical vibrations to dissipate.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/zprobe-options.md` (line 22)

**Example Configuration:**

```
zprobe.enable                true
zprobe.probe_pin             1.28!^
zprobe.slow_feedrate         5
zprobe.dwell_before_probing  0.2    # Wait 0.2 seconds before probing
```

**Configuration:**

```
zprobe.dwell_before_probing <seconds>
```

**Notes:**
- Default value if not specified: 0 (no dwell)
- Typical value for piezo probes: 0.2 seconds
- Helps prevent false triggers on sensitive probes
- Not needed for most mechanical switch-based probes
- Can be set to 0 to disable the dwell entirely

---

#### `temperature_control.<name>.use_beta_table`

**Type:** `boolean`

**Context:** Temperature control - thermistor configuration override

**Description:** When set to `true`, forces Smoothie to use the old beta-based temperature calculation method for predefined thermistors, instead of the newer Steinhart-Hart coefficients. By default, predefined thermistors that have known Steinhart-Hart coefficients will use them for more accurate readings. Set this to `true` if you want to maintain compatibility with older behavior or if you experience issues with the Steinhart-Hart calculations.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/steinharthart.md` (line 72)

**Example Configuration:**

```
temperature_control.hotend.use_beta_table  true    # force predefined thermistors to use the old beta values
```

**Configuration:**

```
temperature_control.<name>.use_beta_table <true|false>
```

**Note:** Beta values from datasheets are typically accurate for the 0-80°C range, but can be 7-10 degrees off in the 185-230°C printing range. Steinhart-Hart coefficients provide better accuracy across the full temperature range. Beta calculation is still acceptable for heated beds since they operate within the published beta temperature range.

---

#### `spindle_enable` (DEPRECATED)

**Type:** `boolean`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** If set to true, enables the Spindle module, which uses an encoder to PID-control a PWM-modulated spindle motor. This option used underscores instead of dots. Modern firmware uses the dot notation: `spindle.enable`. This is part of a deprecated configuration format and should be replaced with the modern syntax.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 18)

**Example Configuration (deprecated):**

```
spindle_enable    true    # DO NOT USE - deprecated format
```

**Modern Configuration:**

```
spindle.enable    true    # Use this instead
```

**Migration:** Replace all underscore-based spindle options with dot-based equivalents.

---

#### `spindle_pwm_pin` (DEPRECATED)

**Type:** `pin`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** Output PWM pin for spindle control (uses hardware PWM). Hardware PWM is available only on pins 2.0 to 2.5, 1.18, 1.20, 1.21, 1.23, 1.24, 1.26, 3.25 and 3.26. Modern firmware uses the dot notation: `spindle.pwm_pin`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 19)

**Migration:** Replace with `spindle.pwm_pin`

---

#### `spindle_pwm_period` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** PWM period to use in microseconds. Modern firmware uses the dot notation: `spindle.pwm_period`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 20)

**Migration:** Replace with `spindle.pwm_period`

---

#### `spindle_feedback_pin` (DEPRECATED)

**Type:** `pin`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** Feedback input pin for spindle encoder (must be Port 0 or 2, meaning the pin number must be 2.x or 0.x). Modern firmware uses the dot notation: `spindle.feedback_pin`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 21)

**Migration:** Replace with `spindle.feedback_pin`

---

#### `spindle_pulses_per_rev` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** Number of feedback pulses per revolution on the feedback input pin. Modern firmware uses the dot notation: `spindle.pulses_per_rev`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 22)

**Migration:** Replace with `spindle.pulses_per_rev`

---

#### `spindle_default_rpm` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** RPM to use if none given in M3 command, in rotations/minute. Modern firmware uses the dot notation: `spindle.default_rpm`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 23)

**Migration:** Replace with `spindle.default_rpm`

---

#### `spindle_control_P` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** PID P factor (unit is 1 / RPM). Modern firmware uses the dot notation: `spindle.control_P`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 24)

**Migration:** Replace with `spindle.control_P`

---

#### `spindle_control_I` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** PID I factor (unit is 1 / ( RPM x seconds )). Modern firmware uses the dot notation: `spindle.control_I`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 25)

**Migration:** Replace with `spindle.control_I`

---

#### `spindle_control_D` (DEPRECATED)

**Type:** `number`

**Context:** Spindle module - deprecated configuration

**Description:** **This is a deprecated configuration option from older firmware versions.** PID D factor (unit is 1 / (RPM / seconds)). Modern firmware uses the dot notation: `spindle.control_D`.

**Found in:**
- `/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/spindle-options.md` (line 26)

**Migration:** Replace with `spindle.control_D`

---


---

