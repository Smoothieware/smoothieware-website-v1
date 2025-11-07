# Smoothieware v1 Configuration Reference

## Complete Configuration Settings

**Total Settings:** ~280-290 configuration keys across 13 modules

* **Robot & Motion Control:** 63 settings (motion, planner, actuators, arm solutions)
* **Player Module:** 5 settings (suspend/resume, boot scripts)
* **Extruder Module:** 17 settings (extrusion, retraction, multi-extruder)
* **Laser Module:** 9 settings (laser diode/CO2 control)
* **Temperature Control:** 42 settings (PID, sensors, safety, runaway protection)
* **Switch Module:** 18 settings (GPIO, PWM, input/output control)
* **Temperature Switch:** 10 settings (automatic fan control)
* **Spindle Module:** 20 settings (PWM/Analog/Modbus control)
* **Endstops:** 50+ settings (homing, limits, kinematics flags)
* **ZProbe & Leveling:** 49 settings + leveling strategies
* **Panel/Display:** 36 settings (LCD, encoder, buttons, menus)
* **Network:** 9 settings (Ethernet, webserver, telnet)
* **Miscellaneous/Root:** 24 settings (communication, system, current control)

---

## About This Documentation

This comprehensive reference documents all configuration settings for Smoothieware v1 firmware. Each setting includes:

* **Type:** Data type (bool, number, string, pin)
* **Default:** Default value if not specified
* **Units:** Physical units if applicable (mm, mm/s, °C, etc.)
* **Module:** Module name or "root" for global settings
* **Context:** Global or module instance setting
* **Defined in:** Source file and line number
* **Minimum value:** If enforced by source code validation
* **Maximum value:** If enforced by source code validation
* **Typical values:** Common values with context
* **Valid values:** Range or enumeration of allowed values
* **Corresponding v1 setting:** Setting name in v1 (same version)
* **Corresponding v2 setting:** Equivalent setting in v2 or "none"
* **Description:** What the setting does and why you would use it
* **Related M-Codes:** G-code commands that interact with this setting
* **Related settings:** Other settings that work with this one
* **Related pages:** Documentation pages for more information
* **Example configuration:** How to use the setting

**Format:** All entries use standardized bullet format with 2-space sub-bullet indentation for details.

---

## Table of Contents

1. [Robot & Motion Control](#robot--motion-control) - 63 settings
2. [Player Module](#player-module) - 5 settings
3. [Extruder Module](#extruder-module) - 17 settings
4. [Laser Module](#laser-module) - 9 settings
5. [Temperature Control](#temperature-control) - 42 settings
6. [Switch Module](#switch-module) - 18 settings
7. [Temperature Switch](#temperature-switch) - 10 settings
8. [Spindle Module](#spindle-module) - 20 settings
9. [Endstops](#endstops) - 50+ settings
10. [ZProbe & Leveling](#zprobe--leveling) - 49 settings + strategies
11. [Panel/Display](#paneldisplay) - 36 settings
12. [Network](#network) - 9 settings
13. [Miscellaneous/Root Settings](#miscellaneousroot-settings) - 24 settings

---


## Robot & Motion Control

# Smoothieware V1 - Robot & Motion Control Settings

## Core Motion Settings

#### `acceleration`

* Type: `number`
* Default: `100.0`
* Units: mm/s²
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:228`
* Typical values: `100` (general purpose), `500` (fast 3D printer), `1000` (light CNC with good mechanics), `50` (heavy machine)
* Corresponding v1 setting: `acceleration`
* Corresponding v2 setting: `motion control.default_acceleration`
* Description: Default acceleration for all axes in mm/s². This is the rate at which the machine accelerates and decelerates during moves. Higher acceleration values allow faster speed changes and shorter move times, but may cause ringing, layer shifts, or mechanical stress. Lower values provide smoother operation at the cost of speed. This setting can be overridden per-axis using the per-actuator acceleration settings.
  * This is a global default that applies to all axes unless specifically overridden
  * Per-axis acceleration settings (in actuator configuration) take precedence over this value
  * Z-axis often benefits from lower acceleration than XY to prevent layer artifacts
  * Delta printers typically need lower acceleration due to complex kinematics
* Related settings: `z_acceleration`, per-actuator acceleration settings
* Related pages: motion-control, configuring-smoothie, 3d-printer-guide
* Example configuration:
  * acceleration 100.0  # Default conservative setting
  * acceleration 500  # Fast 3D printer with good mechanical rigidity
  * acceleration 1000  # Light CNC mill with precision components
  * acceleration 50  # Heavy CNC machine or gantry router

#### `default_feed_rate`

* Type: `number`
* Default: `100.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:182`
* Typical values: `4000` (general purpose), `6000` (fast printer), `1000` (slow/precise)
* Corresponding v1 setting: `default_feed_rate`
* Corresponding v2 setting: `motion control.default_feed_rate`
* Description: Default feed rate for G1 moves when no F parameter is specified. This is the speed at which the machine moves during normal operations (cutting, extruding, or engraving). The value is specified in millimeters per minute and serves as a fallback when G-code doesn't explicitly set a feed rate. Once an F parameter is specified in G-code, that rate persists until changed.
  * This is only used when G-code omits the F parameter
  * Most slicers and CAM software specify F in every move, making this rarely used
  * Still important to set to a safe value as a fallback
  * Should be within the machine's safe operating range based on max_speeds
* Related pages: motion-control, g1, configuring-smoothie
* Example configuration:
  * default_feed_rate 4000  # 66.7 mm/s - general purpose
  * default_feed_rate 100  # Extremely slow fallback for safety
  * default_feed_rate 6000  # 100 mm/s - fast default

#### `default_seek_rate`

* Type: `number`
* Default: `100.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:183`
* Typical values: `30000` (500 mm/s rapid), `15000` (250 mm/s moderate), `6000` (100 mm/s conservative)
* Corresponding v1 setting: `default_seek_rate`
* Corresponding v2 setting: `motion control.default_seek_rate`
* Description: Default rate for G0 rapid moves. This is the speed for rapid positioning moves when the tool is not active (not cutting, extruding, or engraving). G0 moves are non-interpolated rapids that move the machine as quickly as possible between points. This rate should typically be faster than feed rate, limited only by mechanical capabilities and max_speeds.
  * G0 moves are for rapid positioning, not working moves
  * Should be set to the maximum safe rapid speed for your machine
  * Must respect the x/y/z_axis_max_speed limits
  * In 3D printing, used for travel moves between features
  * In CNC, used for tool positioning between cuts
* Related settings: `x_axis_max_speed`, `y_axis_max_speed`, `z_axis_max_speed`
* Related pages: motion-control, g0, configuring-smoothie
* Example configuration:
  * default_seek_rate 30000  # 500 mm/s for fast positioning
  * default_seek_rate 15000  # 250 mm/s moderate speed
  * default_seek_rate 6000  # 100 mm/s conservative for heavy machines

#### `x_axis_max_speed`

* Type: `number`
* Default: `60000.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:191`
* Typical values: `30000` (500 mm/s fast), `15000` (250 mm/s moderate), `6000` (100 mm/s slow)
* Corresponding v1 setting: `x_axis_max_speed`
* Corresponding v2 setting: `motion control.x_axis_max_speed`
* Description: Maximum allowable speed for the X axis. Smoothie will never exceed this value for X axis movement regardless of requested feed rate. This is a hard limit that protects against mechanical damage, missed steps, or loss of position. The firmware caps any move that would exceed this speed. The value is specified in mm/min but converted internally to mm/s for calculations.
  * Acts as a safety limit regardless of G-code commands
  * Should be set based on mechanical capabilities (belts, leadscrews, rigidity)
  * Too high may cause missed steps or mechanical damage
  * Too low unnecessarily limits machine performance
  * For CoreXY/HBot, this applies to the transformed X axis, not individual motors
* Related settings: `y_axis_max_speed`, `z_axis_max_speed`, `max_speed`, `alpha_max_rate`
* Related pages: motion-control, stepper-motors, configuring-smoothie
* Example configuration:
  * x_axis_max_speed 30000  # 500 mm/s - fast Cartesian printer
  * x_axis_max_speed 15000  # 250 mm/s - moderate speed
  * x_axis_max_speed 6000  # 100 mm/s - heavy CNC machine

#### `y_axis_max_speed`

* Type: `number`
* Default: `60000.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:192`
* Typical values: `30000` (500 mm/s fast), `15000` (250 mm/s moderate), `6000` (100 mm/s slow)
* Corresponding v1 setting: `y_axis_max_speed`
* Corresponding v2 setting: `motion control.y_axis_max_speed`
* Description: Maximum allowable speed for the Y axis. Smoothie will never exceed this value for Y axis movement regardless of requested feed rate. This is a hard limit that protects against mechanical damage, missed steps, or loss of position. The firmware caps any move that would exceed this speed. The value is specified in mm/min but converted internally to mm/s for calculations.
  * Acts as a safety limit regardless of G-code commands
  * Should be set based on mechanical capabilities (belts, leadscrews, rigidity)
  * Too high may cause missed steps or mechanical damage
  * Too low unnecessarily limits machine performance
  * For CoreXY/HBot, this applies to the transformed Y axis, not individual motors
  * Often set same as X for symmetric machines, but can differ based on mechanics
* Related settings: `x_axis_max_speed`, `z_axis_max_speed`, `max_speed`, `beta_max_rate`
* Related pages: motion-control, stepper-motors, configuring-smoothie
* Example configuration:
  * y_axis_max_speed 30000  # 500 mm/s - fast Cartesian printer
  * y_axis_max_speed 15000  # 250 mm/s - moderate speed
  * y_axis_max_speed 6000  # 100 mm/s - heavy CNC machine

#### `z_axis_max_speed`

* Type: `number`
* Default: `300.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:193`
* Typical values: `300` (5 mm/s typical Z), `1200` (20 mm/s fast Z), `6000` (100 mm/s delta)
* Corresponding v1 setting: `z_axis_max_speed`
* Corresponding v2 setting: `motion control.z_axis_max_speed`
* Description: Maximum allowable speed for the Z axis. Smoothie will never exceed this value for Z axis movement regardless of requested feed rate. Typically much slower than X/Y because Z-axis uses leadscrew drives with higher mechanical advantage and less need for speed. For delta printers, all three actuators contribute to Z motion so this should be set higher. The value is specified in mm/min but converted internally to mm/s for calculations.
  * Z-axis is typically much slower than XY due to leadscrew mechanics
  * Default of 300 mm/min (5 mm/s) is appropriate for most Cartesian machines
  * Delta printers need much higher values (6000+ mm/min) as all towers move for Z
  * Layer change speed in 3D printing is limited by this setting
  * CNC machines with ballscrew Z-axis can safely go faster
* Related settings: `x_axis_max_speed`, `y_axis_max_speed`, `max_speed`, `gamma_max_rate`, `z_acceleration`
* Related pages: motion-control, delta, stepper-motors
* Example configuration:
  * z_axis_max_speed 300  # 5 mm/s - typical Cartesian/CoreXY Z
  * z_axis_max_speed 1200  # 20 mm/s - faster leadscrew or ballscrew
  * z_axis_max_speed 6000  # 100 mm/s - delta printer

#### `max_speed`

* Type: `number`
* Default: `-60.0`
* Units: mm/min
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:194`
* Typical values: `-1` (disabled), `30000` (500 mm/s), `60000` (1000 mm/s)
* Corresponding v1 setting: `max_speed`
* Corresponding v2 setting: `motion control.max_speed`
* Description: Global maximum speed limit applied to all moves. When set to a positive value, limits the combined speed of all axes (the magnitude of the velocity vector). When negative, this limit is disabled and only per-axis max_speeds apply. This is useful for machines where the combined motion speed matters more than individual axis speeds, such as delta printers or when total kinetic energy is a concern.
  * Negative value (default) disables this limit
  * When enabled, applies to the vector magnitude of the move
  * Applies in addition to per-axis limits (the more restrictive limit wins)
  * Most Cartesian/CoreXY machines leave this disabled (-1)
  * Delta printers may benefit from this as an overall speed governor
  * Value is in mm/min, converted internally to mm/s
* Related settings: `x_axis_max_speed`, `y_axis_max_speed`, `z_axis_max_speed`
* Related pages: motion-control, delta
* Example configuration:
  * max_speed -1  # Disabled (rely on per-axis limits only)
  * max_speed 30000  # 500 mm/s overall speed limit
  * max_speed 60000  # 1000 mm/s for fast machines

#### `z_acceleration`

* Type: `number`
* Default: `NAN` (uses default acceleration)
* Units: mm/s²
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:264`
* Typical values: `50` (conservative Z), `100` (moderate), `20` (heavy machine)
* Corresponding v1 setting: `z_acceleration`
* Corresponding v2 setting: `actuator.gamma.acceleration` or `motion control.default_acceleration`
* Description: Specific acceleration for Z axis movements. When set to a valid number, overrides the default acceleration setting for Z axis only. When set to NAN (not a number) or omitted, the Z axis uses the global default acceleration. This is useful for providing slower/safer Z acceleration without affecting XY speed, particularly important for preventing layer artifacts in 3D printing or Z-axis backlash issues in CNC.
  * When NAN or unset, Z uses the global default acceleration
  * Z-axis typically benefits from lower acceleration than XY
  * Lower Z acceleration reduces layer start artifacts in 3D printing
  * Helps prevent Z-axis binding or leadscrew whip
  * Not needed for delta printers (all axes accelerate together)
  * Legacy setting: prefer per-actuator gamma_acceleration in v2
* Related settings: `acceleration`, per-actuator acceleration settings
* Related pages: motion-control, 3d-printer-guide
* Example configuration:
  * z_acceleration 50  # Half speed of default acceleration
  * z_acceleration 20  # Very conservative for heavy Z-axis
  * # Omit this setting to use default acceleration for Z

## Planner Settings

#### `junction_deviation`

* Type: `number`
* Default: `0.05`
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Planner.cpp:45`
* Typical values: `0.05` (default), `0.02` (high precision), `0.1` (fast/rough)
* Corresponding v1 setting: `junction_deviation`
* Corresponding v2 setting: `planner.junction_deviation`
* Description: Junction deviation controls cornering speed by defining how much the tool path can deviate from a perfect corner. This replaces traditional "jerk" settings with a more mathematically sound approach. Higher values allow faster cornering but with less precision and potential corner rounding. Lower values ensure precision but require the machine to slow down more at corners. The optimal value depends on mechanical rigidity, desired print quality, and acceptable path deviation.
  * This is Smoothie's replacement for traditional jerk settings
  * Lower values = slower corners, more precise path following
  * Higher values = faster corners, slight path rounding
  * 0.05mm default balances speed and quality for most machines
  * Increase for faster prints with acceptable quality loss
  * Decrease for high-precision work or weak mechanical systems
  * Too high causes corner bulging in 3D prints or path errors in CNC
  * Too low causes excessive slowdown and increases print time
* Related settings: `z_junction_deviation`
* Related pages: motion-control, configuring-smoothie
* Example configuration:
  * junction_deviation 0.05  # Default balanced setting
  * junction_deviation 0.02  # High precision mode
  * junction_deviation 0.1  # Fast mode with less precision
  * junction_deviation 0.01  # Maximum precision for critical work

#### `z_junction_deviation`

* Type: `number`
* Default: `NAN` (uses junction_deviation)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Planner.cpp:46`
* Typical values: `0.0` (no deviation), `0.02` (slight), or `NAN` (use junction_deviation)
* Corresponding v1 setting: `z_junction_deviation`
* Corresponding v2 setting: `planner.z_junction_deviation`
* Description: Separate junction deviation for Z axis. When set to a valid number, allows different cornering behavior for moves involving Z-axis motion. When set to NAN (default), Z-axis uses the global junction_deviation value. This is useful for preventing Z artifacts in 3D printing by forcing the nozzle to come to a complete stop at layer changes, or for CNC operations where Z precision is more critical than XY precision.
  * When NAN, Z uses the global junction_deviation setting
  * Set to 0.0 to force full stops at all Z direction changes
  * Useful for eliminating Z-seam artifacts in 3D printing
  * Important for CNC when Z precision matters more than speed
  * May increase print time as machine stops at layer changes
  * Not typically needed for delta printers where Z is not separate
* Related settings: `junction_deviation`
* Related pages: motion-control, 3d-printer-guide
* Example configuration:
  * z_junction_deviation 0.0  # Full stop at Z changes (eliminates Z-seam)
  * z_junction_deviation 0.02  # Slightly more precise than XY
  * # Omit to use junction_deviation for all axes

#### `minimum_planner_speed`

* Type: `number`
* Default: `0.0`
* Units: mm/s
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Planner.cpp:47`
* Typical values: `0.0` (disabled), `1.0` (minimum crawl)
* Corresponding v1 setting: `minimum_planner_speed`
* Corresponding v2 setting: `planner.minimum_planner_speed`
* Description: Minimum speed the planner will allow for any move. Prevents extremely slow movements that could cause stepper stalls or uneven extrusion in 3D printing. When set to 0 (default), there is no minimum and the planner can slow down as much as needed. When set to a positive value, the planner will not plan moves slower than this speed, which can help prevent stepper motor stalling at very low speeds but may affect corner quality.
  * Default of 0.0 disables the minimum speed limit
  * Useful for preventing stepper stalls on machines with poor low-speed torque
  * May help with consistent extrusion in 3D printing
  * Setting too high can prevent the machine from slowing enough for corners
  * Rarely needs to be changed from default
  * Value should be well below typical operating speeds
* Related settings: `junction_deviation`, axis max speeds
* Related pages: motion-control, stepper-motors
* Example configuration:
  * minimum_planner_speed 0.0  # No minimum (default)
  * minimum_planner_speed 1.0  # Prevent very slow moves
  * minimum_planner_speed 2.0  # Higher minimum for problem motors

#### `planner_queue_size`

* Type: `number`
* Default: `32`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Conveyor.cpp:77`
* Typical values: `32` (default), `48` (more lookahead), `24` (less RAM)
* Corresponding v1 setting: `planner_queue_size`
* Corresponding v2 setting: `planner.planner_queue_size`
* Description: Number of blocks in the planner queue. The planner queue holds upcoming moves and optimizes acceleration/deceleration across them for smooth motion. Larger values allow better speed optimization through more lookahead but consume more RAM. Smaller values use less memory but may result in more speed variations. The minimum recommended value is 8, with 32 being optimal for most use cases.
  * Larger queue = better motion planning and speed optimization
  * Smaller queue = less RAM usage
  * Each block uses approximately 100-150 bytes of RAM
  * 32 is optimal for most machines
  * Increase if you see slowdowns on complex curves
  * Decrease if running out of RAM (rare on LPC1769)
  * Must be at least 8 for proper operation
* Related pages: motion-control, howitworks
* Example configuration:
  * planner_queue_size 32  # Default optimal size
  * planner_queue_size 48  # More lookahead for complex paths
  * planner_queue_size 24  # Reduce if RAM is constrained

#### `queue_delay_time_ms`

* Type: `number`
* Default: `100`
* Units: milliseconds
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Conveyor.cpp:78`
* Typical values: `100` (default), `50` (more responsive), `200` (less CPU)
* Corresponding v1 setting: `queue_delay_time_ms`
* Corresponding v2 setting: `planner.queue_delay_time_ms`
* Description: Milliseconds to wait when the planner queue is full before checking again. This prevents the CPU from spinning in a tight loop when the queue is full and waiting for space. The delay balances responsiveness versus CPU efficiency. Lower values make the system more responsive to new commands when the queue is full, but use more CPU checking. Higher values reduce CPU overhead but may add latency.
  * Only matters when queue is completely full
  * 100ms is a good balance for most use cases
  * Lower values (50ms) = more responsive, slightly more CPU usage
  * Higher values (200ms) = less CPU overhead, slight latency added
  * Has no effect on motion quality, only command queueing latency
* Related settings: `planner_queue_size`
* Related pages: motion-control, howitworks
* Example configuration:
  * queue_delay_time_ms 100  # Default balanced setting
  * queue_delay_time_ms 50  # More responsive command handling
  * queue_delay_time_ms 200  # Reduce CPU overhead

## Segmentation Settings

#### `mm_per_line_segment`

* Type: `number`
* Default: `0.0` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:184`
* Typical values: `0.0` (disabled), `5.0` (delta printer), `1.0` (bed leveling)
* Corresponding v1 setting: `mm_per_line_segment`
* Corresponding v2 setting: `motion control.mm_per_line_segment`
* Description: Maximum length of line segments before splitting into smaller segments. When non-zero, long straight moves are automatically split into segments of this maximum length. This is essential for delta robots (to allow frequent kinematics recalculation) and bed leveling compensation (to apply height adjustments along the move). Set to 0 to disable segmentation. When enabled, affects all linear moves (G1) but not rapids (G0) by default.
  * Set to 0.0 to disable segmentation (Cartesian without leveling)
  * Required for delta robots: typically 5mm
  * Required for bed leveling: typically 1-5mm
  * Smaller values = more segments = smoother compensation but slower
  * Larger values = fewer segments = faster but less precise compensation
  * Not needed for Cartesian without bed leveling
  * Segments Z moves unless segment_z_moves is false
* Related settings: `delta_segments_per_second`, `segment_z_moves`
* Related pages: motion-control, delta, rectangular-grid-calibration-options
* Example configuration:
  * mm_per_line_segment 0  # Disabled for Cartesian without leveling
  * mm_per_line_segment 5  # Delta printer segmentation
  * mm_per_line_segment 1  # Fine bed leveling compensation

#### `delta_segments_per_second`

* Type: `number`
* Default: `0.0` (disabled)
* Units: segments/second
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:185`
* Typical values: `100` (typical delta), `150` (fast delta), `200` (very fast delta)
* Corresponding v1 setting: `delta_segments_per_second`
* Corresponding v2 setting: `motion control.delta_segments_per_second`
* Description: For delta robots, an alternative way to specify segmentation based on time rather than distance. When set to a non-zero value, overrides mm_per_line_segment for calculating segment length. The segment length is computed as (move_speed / segments_per_second). This ensures consistent segmentation regardless of move speed, with faster moves getting longer segments and slower moves getting shorter segments, maintaining the target segment rate.
  * Only used for delta kinematics
  * When set, overrides mm_per_line_segment calculation
  * Segment length = move_speed / segments_per_second
  * 100-200 segments/sec typical for deltas
  * Higher values = more frequent kinematics calculations = smoother but more CPU
  * Lower values = less CPU but potentially less smooth motion
  * Set to 0 to use mm_per_line_segment instead
* Related settings: `mm_per_line_segment`
* Related pages: delta, motion-control
* Example configuration:
  * delta_segments_per_second 100  # Typical delta setting
  * delta_segments_per_second 150  # Higher rate for smoother motion
  * delta_segments_per_second 0  # Use mm_per_line_segment instead

#### `mm_per_arc_segment`

* Type: `number`
* Default: `0.0` (uses mm_max_arc_error)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:186`
* Typical values: `0.5` (fine detail), `1.0` (balanced), `0.0` (use error-based)
* Corresponding v1 setting: `mm_per_arc_segment`
* Corresponding v2 setting: `motion control.mm_per_arc_segment`
* Description: Length of arc segments for G2/G3 circular interpolation moves. When 0 (default), the firmware uses mm_max_arc_error to automatically determine appropriate segment length based on arc radius and allowable deviation. When set to a non-zero value, all arcs are split into fixed-length segments regardless of radius. Fixed segmentation is simpler but less efficient than error-based adaptive segmentation.
  * 0.0 = use adaptive error-based segmentation (recommended)
  * Non-zero = fixed segment length for all arcs
  * Smaller values = smoother arcs but more segments
  * Larger values = fewer segments but more faceted appearance
  * Error-based (0.0) is more efficient as it adapts to arc size
  * Fixed length useful for predictable segment count
* Related settings: `mm_max_arc_error`, `arc_correction`
* Related pages: motion-control, g2, g3
* Example configuration:
  * mm_per_arc_segment 0  # Use adaptive error-based (recommended)
  * mm_per_arc_segment 0.5  # Fixed 0.5mm segments
  * mm_per_arc_segment 1.0  # Fixed 1mm segments for faster processing

#### `mm_max_arc_error`

* Type: `number`
* Default: `0.01`
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:187`
* Typical values: `0.01` (default), `0.005` (high precision), `0.02` (faster/rougher)
* Corresponding v1 setting: `mm_max_arc_error`
* Corresponding v2 setting: `motion control.mm_max_arc_error`
* Description: Maximum allowable deviation from true arc when mm_per_arc_segment is 0. This controls arc segmentation quality versus performance using adaptive segment sizing. The firmware calculates the minimum segment length needed to keep deviation below this threshold. Smaller values create smoother arcs with more segments (slower execution), while larger values create more faceted arcs with fewer segments (faster execution).
  * Only used when mm_per_arc_segment is 0
  * Controls the quality/performance tradeoff for arcs
  * 0.01mm default is imperceptible for most applications
  * Reduce to 0.005mm for high-precision work
  * Increase to 0.02mm for faster processing if quality allows
  * Small arcs automatically get smaller segments
  * Large arcs automatically get larger segments
* Related settings: `mm_per_arc_segment`, `arc_correction`
* Related pages: motion-control, g2, g3
* Example configuration:
  * mm_max_arc_error 0.01  # Default quality setting
  * mm_max_arc_error 0.005  # High precision for critical work
  * mm_max_arc_error 0.02  # Faster processing, slight quality loss

#### `arc_correction`

* Type: `number`
* Default: `5`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:188`
* Typical values: `5` (default), `3` (more frequent), `10` (less frequent)
* Corresponding v1 setting: `arc_correction`
* Corresponding v2 setting: `motion control.arc_correction`
* Description: Number of arc segments before applying geometric correction. When drawing arcs with many small segments, numerical errors can accumulate causing the arc to drift from the intended path. This setting controls how frequently the firmware recalculates from the arc center to correct accumulated error. Lower values apply correction more frequently (more accurate but slightly more CPU), higher values correct less often (faster but potential drift on long arcs).
  * Controls error correction frequency during arc execution
  * 5 = correction every 5 segments (default)
  * Lower values (3) = more frequent correction = more accurate
  * Higher values (10) = less frequent correction = faster but potential drift
  * Only matters for long arcs with many segments
  * Has minimal CPU impact at default value
* Related settings: `mm_per_arc_segment`, `mm_max_arc_error`
* Related pages: motion-control, g2, g3
* Example configuration:
  * arc_correction 5  # Default balanced correction
  * arc_correction 3  # More frequent correction for long arcs
  * arc_correction 10  # Less frequent for performance

#### `segment_z_moves`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:196`
* Valid values: `true`, `false`
* Corresponding v1 setting: `segment_z_moves`
* Corresponding v2 setting: `motion control.segment_z_moves`
* Description: Whether to apply line segmentation to Z-only moves. When true (default), pure Z-axis moves are segmented according to mm_per_line_segment like XY moves. When false, pure Z moves bypass segmentation entirely. Setting to false is useful for some bed leveling strategies that need uninterrupted Z moves, or to speed up Z hops and layer changes when segmentation isn't needed.
  * true = segment Z-only moves (default)
  * false = Z-only moves bypass segmentation
  * Affects moves that are pure Z with no XY component
  * Moves with XY+Z are always segmented based on XY component
  * Some leveling strategies require this to be false
  * Can speed up layer changes in 3D printing when false
  * Delta printers should leave this true
* Related settings: `mm_per_line_segment`, bed leveling strategies
* Related pages: motion-control, rectangular-grid-calibration-options
* Example configuration:
  * segment_z_moves true  # Segment all moves including Z (default)
  * segment_z_moves false  # Skip segmentation for pure Z moves

## Coordinate System Settings

#### `save_g92`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:197`
* Valid values: `true`, `false`
* Corresponding v1 setting: `save_g92`
* Corresponding v2 setting: `motion control.save_g92`
* Description: Save G92 coordinate offsets to config-override with M500 command. When true, any G92 offset currently in effect will be written to the config-override file when M500 is executed, causing it to persist across reboots. When false (default), G92 offsets are temporary and lost on reset. G92 sets an arbitrary coordinate system offset, essentially redefining what position the machine considers to be a given coordinate.
  * false = G92 offsets are temporary (default)
  * true = G92 offsets persist across reboots via M500/M501
  * G92 is different from work coordinate systems (G54-G59)
  * Most users should leave this false for safety
  * Persistent G92 can cause confusion if forgotten
  * Useful for machines with fixed fixtures or permanent offsets
* Related M-Codes:
  * M500 - Save current G92 offset to config-override (if enabled)
  * M501 - Load saved G92 offset from config-override
  * M503 - Display current G92 offset
* Related settings: `save_g54`, `set_g92`
* Related pages: motion-control, g92-cnc, configuring-smoothie
* Example configuration:
  * save_g92 false  # G92 is temporary (default, safest)
  * save_g92 true  # Persist G92 across reboots

#### `save_g54`

* Type: `bool`
* Default: GRBL mode = `true`, otherwise `false`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:198`
* Valid values: `true`, `false`
* Corresponding v1 setting: `save_g54`
* Corresponding v2 setting: `motion control.save_wcs`
* Description: Save G54-G59 work coordinate systems to config-override with M500. When true, all work coordinate system offsets (G54, G55, G56, G57, G58, G59) will be written to config-override when M500 is executed, persisting across reboots. When false, WCS offsets are lost on reset. This defaults to true in GRBL mode (for CNC compatibility) and false in RepRap mode (for 3D printer safety).
  * GRBL mode: defaults to true (CNC standard practice)
  * RepRap mode: defaults to false (3D printer safety)
  * Work coordinate systems (WCS) allow multiple coordinate reference points
  * Common in CNC for multiple part setups or tool offsets
  * Less common in 3D printing
  * M500 saves, M501 loads, M503 displays
* Related M-Codes:
  * M500 - Save current WCS offsets to config-override (if enabled)
  * M501 - Load saved WCS offsets from config-override
  * M503 - Display all WCS offsets
  * G10 L2 - Set WCS offset
  * G54-G59 - Select work coordinate system
* Related settings: `save_g92`
* Related pages: motion-control, g54, grbl-mode
* Example configuration:
  * save_g54 false  # WCS are temporary (3D printer default)
  * save_g54 true  # Persist WCS (CNC/GRBL default)

#### `set_g92`

* Type: `string`
* Default: `""` (empty)
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:199`
* Valid values: Empty string or "x,y,z" format with comma-separated coordinate offsets
* Corresponding v1 setting: `set_g92`
* Corresponding v2 setting: `motion control.set_g92`
* Description: Set a fixed G92 offset at startup in format "x,y,z". This allows defining a permanent coordinate offset that is applied automatically on boot. Useful for machines with fixed fixtures, permanently mounted work surfaces, or specific coordinate system requirements. The offset redefines what coordinates the machine considers to be at its current position. Example: "10,5,0" means the current position will be considered X10 Y5 Z0.
  * Empty string (default) = no automatic G92 offset
  * Format must be "x,y,z" with comma separators (no spaces recommended)
  * Applied automatically on boot, before any G-code execution
  * Different from save_g92 which saves runtime offsets
  * Useful for fixed work coordinate transformations
  * Can cause confusion if not documented
  * Consider work coordinate systems (G54-G59) as alternative
* Related settings: `save_g92`, `save_g54`
* Related pages: motion-control, g92-cnc
* Example configuration:
  * set_g92 0,0,0  # Explicitly no offset
  * set_g92 10,5,0  # Machine position becomes X10 Y5 Z0 on boot
  * set_g92 -50,-50,0  # Offset origin 50mm in negative X and Y

## Arm Solution Settings

#### `arm_solution`

* Type: `enum`
* Default: `cartesian`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:155`
* Valid values: `cartesian`, `corexy`, `hbot`, `corexz`, `linear_delta`, `delta`, `kossel`, `rostock`, `rotary_delta`, `morgan`, `rotatable_cartesian`
  * `cartesian` - Standard XYZ gantry with one motor per axis (most common)
  * `linear_delta` - Kossel-style delta printer with three vertical linear rails
  * `delta` - Alias for linear_delta
  * `kossel` - Alias for linear_delta
  * `rostock` - Alias for linear_delta
  * `rotary_delta` - Delta with rotary joints instead of linear (experimental)
  * `corexy` - CoreXY crossed-belt system (two motors control XY)
  * `hbot` - H-Bot crossed-belt system (similar to CoreXY)
  * `corexz` - CoreXZ system with crossed belts for XZ motion
  * `morgan` - Morgan SCARA robotic arm
  * `rotatable_cartesian` - Cartesian with rotated coordinate plane
* Required: yes (defaults to cartesian if omitted)
* Corresponding v1 setting: `arm_solution`
* Corresponding v2 setting: `motion control.arm_solution`
* Description: Specifies the kinematics solution that converts Cartesian coordinates (X, Y, Z) from G-code into actuator motor positions for your machine type. This is one of the most fundamental settings as it determines how the firmware interprets motion commands and calculates the relationship between desired position and motor movements. Each arm solution has its own set of additional parameters that must be configured for proper operation. Changing this requires reconfiguring many other settings and recalibrating the machine.
  * CRITICAL: Must exactly match your physical machine configuration
  * Most common: cartesian (direct 1:1 motor to axis mapping)
  * Each solution requires specific additional parameters
  * Changing this invalidates most other configuration settings
  * Incorrect selection can cause dangerous motion behavior
  * Linear delta requires arm_length, arm_radius parameters
  * CoreXY/HBot require careful motor direction configuration
  * SCARA requires arm lengths and offset parameters
* Related settings: `arm_length`, `arm_radius`, `x_reduction`, `z_reduction`, `arm1_length`, `arm2_length`
* Related pages: arm-solutions, cartesian, delta, corexy, hbot, morgan-scara
* Example configuration:
  * arm_solution cartesian  # Standard 3-axis CNC or 3D printer
  * arm_solution linear_delta  # Kossel-style delta printer
  * arm_solution corexy  # CoreXY 3D printer
  * arm_solution hbot  # H-Bot 3D printer
  * arm_solution morgan  # Morgan SCARA arm

### Cartesian & CoreXY/CoreXZ Settings

#### `x_reduction`

* Type: `number`
* Default: `1.0`
* Module: `root`
* Context: Global setting (only for CoreXZ)
* Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:11`
* Corresponding v1 setting: `x_reduction`
* Corresponding v2 setting: none (CoreXZ not documented in v2)
* Description: For CoreXZ kinematics only. Reduction factor for the X axis component in the CoreXZ transformation matrix. Controls how much the X motor contributes to X-axis motion. In CoreXZ, two motors work together to control XZ motion similar to how CoreXY controls XY motion. This parameter allows tuning the kinematic transformation to match your mechanical configuration. Typically left at default 1.0 unless you have an unusual CoreXZ design.
  * Only applies when arm_solution is corexz
  * Has no effect for other kinematics types
  * Default 1.0 is correct for standard CoreXZ implementations
  * Adjusting this changes the X-axis motion contribution ratio
  * Incorrectly setting this will cause distorted XZ motion
* Related settings: `z_reduction`, applies only when `arm_solution` is `corexz`
* Related pages: arm-solutions, hbot
* Example configuration:
  * x_reduction 1.0  # Standard CoreXZ configuration

#### `z_reduction`

* Type: `number`
* Default: `3.0`
* Module: `root`
* Context: Global setting (only for CoreXZ)
* Defined in: `modules/robot/arm_solutions/CoreXZSolution.cpp:12`
* Corresponding v1 setting: `z_reduction`
* Corresponding v2 setting: none (CoreXZ not documented in v2)
* Description: For CoreXZ kinematics only. Reduction factor for the Z axis component in the CoreXZ transformation matrix. Controls how much the Z motor contributes to Z-axis motion relative to X motion. CoreXZ typically has Z on a leadscrew while X uses belts, creating different mechanical ratios. The default 3.0 reflects common mechanical advantage differences. This should be calculated based on your specific mechanical configuration (belt pitch vs leadscrew pitch).
  * Only applies when arm_solution is corexz
  * Has no effect for other kinematics types
  * Default 3.0 accounts for typical leadscrew vs belt ratio
  * Calculate based on: (Z_steps_per_mm / X_steps_per_mm)
  * Incorrectly setting this will cause distorted XZ motion
  * Z will move too much or too little relative to X
* Related settings: `x_reduction`, applies only when `arm_solution` is `corexz`
* Related pages: arm-solutions, hbot
* Example configuration:
  * z_reduction 3.0  # Standard ratio for leadscrew Z with belt X
  * z_reduction 2.0  # Different mechanical configuration

#### `alpha_angle`

* Type: `number`
* Default: `0.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for rotatable_cartesian and experimental_delta)
* Defined in: `modules/robot/arm_solutions/RotatableCartesianSolution.cpp:12` and `ExperimentalDeltaSolution.cpp:23`
* Corresponding v1 setting: `alpha_angle`
* Corresponding v2 setting: none (not documented in v2)
* Description: Rotation angle in degrees for rotatable_cartesian and experimental_delta arm solutions. Rotates the entire coordinate plane by this angle around the Z-axis. For rotatable_cartesian, allows using standard Cartesian mechanics with a rotated reference frame, useful for machines where the mechanical axes don't align with the desired work coordinate system. For experimental_delta, provides an angular offset for the alpha tower position.
  * Only applies to rotatable_cartesian and experimental_delta arm solutions
  * NOTE: When using experimental_delta arm solution, the default is 30.0 instead of 0.0
  * Has no effect for other kinematics
  * Rotates coordinate system around Z-axis
  * 0° = no rotation (standard alignment)
  * Positive angles rotate counter-clockwise (from top view)
  * Useful for machines with mechanically rotated gantries
  * Rarely needed for standard configurations
* Related settings: Applies only when `arm_solution` is `rotatable_cartesian` or `experimental_delta`
* Related pages: arm-solutions, delta
* Example configuration:
  * alpha_angle 0.0  # No rotation (standard)
  * alpha_angle 45.0  # 45° rotation for diamond-oriented gantry

### Linear Delta Settings

#### `arm_length`

* Type: `number`
* Default: `250.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:32` and `ExperimentalDeltaSolution.cpp:34`
* Required: yes (for delta printers)
* Corresponding v1 setting: `arm_length`
* Corresponding v2 setting: `linear delta.arm_length`
* Description: For linear delta robots only. Physical length of the diagonal connecting rod from the upper carriage hinge point to the lower effector hinge point. This is one of the two critical geometric parameters for delta kinematics (along with arm_radius). Measure carefully from center of upper ball joint to center of lower ball joint. Incorrect values will cause the effector to trace incorrect paths and dimensional inaccuracy across the bed.
  * CRITICAL: Must be measured accurately for proper delta kinematics
  * Measure from center of upper hinge to center of lower hinge
  * Typically 200-400mm depending on delta size
  * Affects the entire kinematic solution
  * Incorrect value causes dimensional errors across entire bed
  * Can be fine-tuned during delta calibration
  * Use same measurement technique for all three arms
* Related settings: `arm_radius`, applies only when `arm_solution` is `linear_delta`, `delta`, `kossel`, or `rostock`
* Related pages: delta, delta-calibration-strategy-options, arm-solutions
* Example configuration:
  * arm_length 250.0  # 250mm diagonal rods
  * arm_length 217.5  # Common for small Mini Kossel
  * arm_length 300.0  # Larger delta printer

#### `arm_radius`

* Type: `number`
* Default: `124.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:34` and `ExperimentalDeltaSolution.cpp:36`
* Required: yes (for delta printers)
* Corresponding v1 setting: `arm_radius`
* Corresponding v2 setting: `linear delta.arm_radius`
* Description: For linear delta robots only. Horizontal distance from center of bed to the center of each tower's linear rail when the effector is centered at build height. Also called delta radius. This is the second critical geometric parameter for delta kinematics. Together with arm_length, defines the workspace geometry and motion calculations. Incorrect values cause the effector to move in warped paths and dimensional errors increase with distance from center.
  * CRITICAL: Must be measured accurately for proper delta kinematics
  * Measure with effector centered at build height
  * Distance from bed center to tower rail center
  * Typically 100-200mm depending on printer size
  * Smaller radius = smaller build area, more height
  * Larger radius = larger build area, less height
  * Can be fine-tuned during delta calibration
  * Also affects maximum reach and reachable height
* Related settings: `arm_length`, applies only when `arm_solution` is `linear_delta`, `delta`, `kossel`, or `rostock`
* Related pages: delta, delta-calibration-strategy-options, arm-solutions
* Example configuration:
  * arm_radius 124.0  # Medium-size delta printer
  * arm_radius 90.0  # Smaller printer like Mini Kossel
  * arm_radius 150.0  # Large delta printer

#### `delta_tower1_angle`

* Type: `number`
* Default: `0.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:36`
* Corresponding v1 setting: `delta_tower1_angle`
* Corresponding v2 setting: none (not documented in v2)
* Description: Angular offset correction for tower 1 position (alpha tower, front-left at nominal 210°). Used during delta calibration to correct for manufacturing tolerances where towers are not perfectly positioned at 120° intervals. Positive values rotate the tower counter-clockwise (from top view). Typically adjusted in small increments during calibration to achieve best dimensional accuracy. Values are usually in the range of -5° to +5°.
  * Fine-tuning parameter for delta calibration
  * Corrects for imperfect tower positioning
  * Adjusted to minimize dimensional errors across bed
  * Typically very small values (under ±5°)
  * Start at 0.0 and adjust during calibration
  * Use auto-calibration routine for best results
  * Manual adjustment requires iterative testing
* Related settings: `delta_tower2_angle`, `delta_tower3_angle`, `delta_tower1_offset`, applies only to linear delta
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower1_angle 0.0  # No correction (starting point)
  * delta_tower1_angle -0.5  # Slight adjustment from calibration
  * delta_tower1_angle 1.2  # Correction for manufacturing variance

#### `delta_tower2_angle`

* Type: `number`
* Default: `0.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:37`
* Corresponding v1 setting: `delta_tower2_angle`
* Corresponding v2 setting: none (not documented in v2)
* Description: Angular offset correction for tower 2 position (beta tower, front-right at nominal 330°). Used during delta calibration to correct for manufacturing tolerances where towers are not perfectly positioned at 120° intervals. Positive values rotate the tower counter-clockwise (from top view). Typically adjusted in small increments during calibration to achieve best dimensional accuracy. Values are usually in the range of -5° to +5°.
  * Fine-tuning parameter for delta calibration
  * Corrects for imperfect tower positioning
  * Adjusted to minimize dimensional errors across bed
  * Typically very small values (under ±5°)
  * Start at 0.0 and adjust during calibration
  * Use auto-calibration routine for best results
* Related settings: `delta_tower1_angle`, `delta_tower3_angle`, `delta_tower2_offset`, applies only to linear delta
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower2_angle 0.0  # No correction (starting point)
  * delta_tower2_angle 0.3  # Slight adjustment from calibration

#### `delta_tower3_angle`

* Type: `number`
* Default: `0.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:38`
* Corresponding v1 setting: `delta_tower3_angle`
* Corresponding v2 setting: none (not documented in v2)
* Description: Angular offset correction for tower 3 position (gamma tower, back-center at nominal 90°). Used during delta calibration to correct for manufacturing tolerances where towers are not perfectly positioned at 120° intervals. Positive values rotate the tower counter-clockwise (from top view). Typically adjusted in small increments during calibration to achieve best dimensional accuracy. Values are usually in the range of -5° to +5°.
  * Fine-tuning parameter for delta calibration
  * Corrects for imperfect tower positioning
  * Adjusted to minimize dimensional errors across bed
  * Typically very small values (under ±5°)
  * Start at 0.0 and adjust during calibration
  * Use auto-calibration routine for best results
* Related settings: `delta_tower1_angle`, `delta_tower2_angle`, `delta_tower3_offset`, applies only to linear delta
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower3_angle 0.0  # No correction (starting point)
  * delta_tower3_angle -0.8  # Adjustment from calibration

#### `delta_tower1_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:39`
* Corresponding v1 setting: `delta_tower1_offset`
* Corresponding v2 setting: none (not documented in v2)
* Description: Radial offset correction for tower 1 position. Positive values move the tower away from the bed center, negative values move it toward center. Used during delta calibration to correct for manufacturing tolerances in tower positioning relative to the ideal delta radius. Typically adjusted in small increments (under ±5mm) to achieve best dimensional accuracy across the bed. Works in conjunction with tower angle corrections.
  * Fine-tuning parameter for delta calibration
  * Corrects radial tower position errors
  * Positive = farther from center, negative = closer to center
  * Typically very small values (under ±5mm)
  * Start at 0.0 and adjust during calibration
  * Affects bed size and reachable area
  * Use auto-calibration for best results
* Related settings: `delta_tower2_offset`, `delta_tower3_offset`, `delta_tower1_angle`, `arm_radius`
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower1_offset 0.0  # No correction (starting point)
  * delta_tower1_offset 1.5  # Move tower 1.5mm away from center
  * delta_tower1_offset -0.8  # Move tower 0.8mm toward center

#### `delta_tower2_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:40`
* Corresponding v1 setting: `delta_tower2_offset`
* Corresponding v2 setting: none (not documented in v2)
* Description: Radial offset correction for tower 2 position. Positive values move the tower away from the bed center, negative values move it toward center. Used during delta calibration to correct for manufacturing tolerances in tower positioning relative to the ideal delta radius. Typically adjusted in small increments (under ±5mm) to achieve best dimensional accuracy across the bed. Works in conjunction with tower angle corrections.
  * Fine-tuning parameter for delta calibration
  * Corrects radial tower position errors
  * Positive = farther from center, negative = closer to center
  * Typically very small values (under ±5mm)
  * Start at 0.0 and adjust during calibration
  * Affects bed size and reachable area
* Related settings: `delta_tower1_offset`, `delta_tower3_offset`, `delta_tower2_angle`, `arm_radius`
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower2_offset 0.0  # No correction (starting point)
  * delta_tower2_offset -1.2  # Move tower 1.2mm toward center

#### `delta_tower3_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for linear delta)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:41`
* Corresponding v1 setting: `delta_tower3_offset`
* Corresponding v2 setting: none (not documented in v2)
* Description: Radial offset correction for tower 3 position. Positive values move the tower away from the bed center, negative values move it toward center. Used during delta calibration to correct for manufacturing tolerances in tower positioning relative to the ideal delta radius. Typically adjusted in small increments (under ±5mm) to achieve best dimensional accuracy across the bed. Works in conjunction with tower angle corrections.
  * Fine-tuning parameter for delta calibration
  * Corrects radial tower position errors
  * Positive = farther from center, negative = closer to center
  * Typically very small values (under ±5mm)
  * Start at 0.0 and adjust during calibration
  * Affects bed size and reachable area
* Related settings: `delta_tower1_offset`, `delta_tower2_offset`, `delta_tower3_angle`, `arm_radius`
* Related pages: delta, delta-calibration-strategy-options
* Example configuration:
  * delta_tower3_offset 0.0  # No correction (starting point)
  * delta_tower3_offset 0.7  # Move tower 0.7mm away from center

#### `delta_halt_on_error`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting (only for delta arm solutions)
* Defined in: `modules/robot/arm_solutions/LinearDeltaSolution.cpp:42` and `RotaryDeltaSolution.cpp:60`
* Valid values: `true`, `false`
* Corresponding v1 setting: `delta_halt_on_error`
* Corresponding v2 setting: none (not documented in v2)
* Description: For delta robots (both linear and rotary), controls whether motion halts when kinematic calculation fails due to unreachable position. When true (default), attempting to move to a position that's kinematically impossible will halt the machine with an error. When false, continues with a warning but unpredictable motion. Unreachable positions occur when requesting positions outside the workspace, typically near the edge of the build area or extreme heights.
  * true = halt machine on unreachable position (default, safest)
  * false = continue with warning (dangerous)
  * Unreachable positions are outside the kinematic workspace
  * Usually caused by G-code requesting positions beyond build area
  * Can also occur with incorrect arm_length/arm_radius configuration
  * IMPORTANT: Setting to false can cause unpredictable motion
  * Recommended to leave at true for safety
* Related settings: `arm_length`, `arm_radius`, applies to all delta arm solutions
* Related pages: delta, arm-solutions
* Example configuration:
  * delta_halt_on_error true  # Halt on unreachable position (recommended)
  * delta_halt_on_error false  # Continue with warning (not recommended)

### Experimental Delta Settings

#### `beta_relative_angle`

* Type: `number`
* Default: `120.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for experimental_delta)
* Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:26`
* Corresponding v1 setting: `beta_relative_angle`
* Corresponding v2 setting: none (experimental feature not in v2)
* Description: For experimental delta arm solution only. Defines the relative angular position of the beta tower (tower 2). Standard deltas have three towers positioned at 0°, 120°, and 240° around the build area. This setting allows non-standard tower spacing by adjusting where the beta tower is located relative to alpha tower (which is at alpha_angle). Typically 120° for standard delta geometry. Experimental feature for non-standard delta configurations.
  * Only applies to experimental_delta arm solution
  * Standard value is 120° for equilateral tower arrangement
  * Measured relative to alpha tower position
  * Non-standard values create asymmetric delta configurations
  * Requires careful kinematic understanding
  * Most users should use standard 120°
* Related settings: `alpha_angle`, `gamma_relative_angle`, applies only to `experimental_delta`
* Related pages: delta, arm-solutions
* Example configuration:
  * beta_relative_angle 120.0  # Standard delta geometry

#### `gamma_relative_angle`

* Type: `number`
* Default: `240.0`
* Units: degrees
* Module: `root`
* Context: Global setting (only for experimental_delta)
* Defined in: `modules/robot/arm_solutions/ExperimentalDeltaSolution.cpp:29`
* Corresponding v1 setting: `gamma_relative_angle`
* Corresponding v2 setting: none (experimental feature not in v2)
* Description: For experimental delta arm solution only. Defines the relative angular position of the gamma tower (tower 3). Standard deltas have three towers positioned at 0°, 120°, and 240° around the build area. This setting allows non-standard tower spacing by adjusting where the gamma tower is located relative to alpha tower (which is at alpha_angle). Typically 240° for standard delta geometry. Experimental feature for non-standard delta configurations.
  * Only applies to experimental_delta arm solution
  * Standard value is 240° for equilateral tower arrangement
  * Measured relative to alpha tower position
  * Non-standard values create asymmetric delta configurations
  * Requires careful kinematic understanding
  * Most users should use standard 240°
* Related settings: `alpha_angle`, `beta_relative_angle`, applies only to `experimental_delta`
* Related pages: delta, arm-solutions
* Example configuration:
  * gamma_relative_angle 240.0  # Standard delta geometry

### Rotary Delta Settings


#### `delta_e`

* Type: `number`
* Default: `131.636`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:36`
* Corresponding v1 setting: `delta_e`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. End effector triangle side length - the distance between ball joints on the effector platform. In rotary delta designs, the effector is triangular with ball joints at each corner where the connecting rods attach. This parameter defines the size of that triangle, which is a critical geometric parameter for rotary delta kinematics calculations. Must match the physical dimensions of your effector platform.
  * Only applies to rotary_delta arm solution
  * Measure center-to-center of ball joints on effector
  * Part of the fundamental rotary delta geometry
  * Incorrect value causes position errors
  * Must be measured very accurately
  * Rotary delta is experimental/rare configuration
* Related settings: `delta_f`, `delta_re`, `delta_rf`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_e 131.636  # Default effector triangle size

#### `delta_f`

* Type: `number`
* Default: `190.526`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:39`
* Corresponding v1 setting: `delta_f`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Base triangle side length - the distance between servo pivot points on the stationary base. In rotary delta designs, three servo motors are mounted on a triangular base, and this parameter defines the size of that base triangle. This is a critical geometric parameter for rotary delta kinematics. Must match the physical dimensions of your base plate servo mounting positions.
  * Only applies to rotary_delta arm solution
  * Measure center-to-center of servo pivot points on base
  * Part of the fundamental rotary delta geometry
  * Incorrect value causes position errors
  * Must be measured very accurately
  * Typically larger than delta_e
* Related settings: `delta_e`, `delta_re`, `delta_rf`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_f 190.526  # Default base triangle size

#### `delta_re`

* Type: `number`
* Default: `270.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:42`
* Corresponding v1 setting: `delta_re`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Carbon rod length - the length of the connecting rods (parallelogram links) between the servo horn and the effector platform. In rotary delta mechanisms, each servo has an arm (horn) that connects via a parallelogram linkage to the effector. This is the length of those connecting rods, similar in concept to arm_length in linear delta but for the rotary configuration.
  * Only applies to rotary_delta arm solution
  * Measure center-to-center of ball joints on the connecting rod
  * Critical for correct rotary delta kinematics
  * Incorrect value causes position errors and dimensional inaccuracy
  * Must match physical rod length precisely
  * All six rods should be identical length
* Related settings: `delta_e`, `delta_f`, `delta_rf`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_re 270.0  # Default connecting rod length

#### `delta_rf`

* Type: `number`
* Default: `90.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:45`
* Corresponding v1 setting: `delta_rf`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Servo horn length - the distance from the servo pivot point (motor shaft) to the rod connection point on the servo horn. This is the radius of the rotating arm attached to each servo motor. The servo rotates this arm, which pulls/pushes the connecting rods to move the effector. A critical parameter for rotary delta kinematics that affects the mechanical advantage and workspace.
  * Only applies to rotary_delta arm solution
  * Measure from servo shaft center to rod connection point
  * Critical for correct rotary delta kinematics
  * Affects servo rotation to position translation
  * All three servo horns should be identical length
  * Typically much shorter than delta_re
* Related settings: `delta_e`, `delta_f`, `delta_re`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_rf 90.0  # Default servo horn length

#### `delta_z_offset`

* Type: `number`
* Default: `290.7`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:49`
* Corresponding v1 setting: `delta_z_offset`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Vertical distance from the servo pivot plane (the plane where all three servo shafts are located) to the bed surface when the machine is homed. This defines the Z=0 position relative to the mechanical reference point. Used to translate between the kinematic coordinate system and the actual work coordinate system. Must be measured accurately for correct Z positioning.
  * Only applies to rotary_delta arm solution
  * Measured with machine in home position
  * Distance from servo plane to bed surface
  * Defines the Z=0 reference point
  * Affects all Z-axis positioning
  * Can be adjusted to calibrate Z height
* Related settings: `delta_ee_offs`, `delta_tool_offset`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_z_offset 290.7  # Default Z offset

#### `delta_ee_offs`

* Type: `number`
* Default: `15.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:52`
* Corresponding v1 setting: `delta_ee_offs`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Distance from the ball joint plane to the bottom of the end effector surface - essentially the thickness of the effector platform. The ball joints attach to the top of the effector, but the tool (nozzle, end mill, etc.) is mounted to the bottom. This parameter accounts for that offset in the kinematic calculations, ensuring the tool tip position is calculated correctly.
  * Only applies to rotary_delta arm solution
  * Thickness of effector platform
  * Distance from ball joint plane to bottom surface
  * Affects Z-axis positioning accuracy
  * Must match actual effector dimensions
  * Typically 10-20mm depending on effector design
* Related settings: `delta_z_offset`, `delta_tool_offset`, applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_ee_offs 15.0  # 15mm effector thickness

#### `delta_tool_offset`

* Type: `number`
* Default: `30.5`
* Units: mm
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:55`
* Corresponding v1 setting: `delta_tool_offset`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Distance between the effector ball joint plane and the tool tip (nozzle, gripper, etc.). This accounts for how far the actual tool extends below the effector structure. Used primarily in pick-and-place applications to account for varying tool lengths. Positive values indicate tool extends downward, negative values would indicate tool above effector (unusual).
  * Only applies to rotary_delta arm solution
  * Distance from ball joint plane to tool tip
  * Allows compensation for different tool lengths
  * Important for pick-and-place accuracy
  * Can be adjusted for different tool types
  * Affects all Z-axis positioning
* Related settings: `delta_z_offset`, `delta_ee_offs`, applies only to `rotary_delta`
* Related pages: rotary-delta, pick-and-place, arm-solutions
* Example configuration:
  * delta_tool_offset 30.5  # 30.5mm tool extension
  * delta_tool_offset 45.0  # Longer tool
  * delta_tool_offset 20.0  # Shorter tool

#### `delta_mirror_xy`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting (only for rotary_delta)
* Defined in: `modules/robot/arm_solutions/RotaryDeltaSolution.cpp:58`
* Valid values: `true`, `false`
* Corresponding v1 setting: `delta_mirror_xy`
* Corresponding v2 setting: none (rotary delta not documented in v2)
* Description: For rotary delta arm solution only. Mirror (flip) the XY coordinate system. This is useful for correcting coordinate system orientation without making physical changes to the machine. When true, X and Y axes are mirrored, which is equivalent to viewing the machine from the opposite side. Useful when the physical servo arrangement doesn't match the desired coordinate system orientation.
  * Only applies to rotary_delta arm solution
  * false = standard XY orientation (default)
  * true = mirror XY axes
  * Useful for correcting coordinate system without rewiring
  * Equivalent to flipping the view of the machine
  * Rarely needed unless machine was built backwards
* Related settings: applies only to `rotary_delta`
* Related pages: rotary-delta, arm-solutions
* Example configuration:
  * delta_mirror_xy false  # Standard orientation
  * delta_mirror_xy true  # Mirror XY axes

### Morgan SCARA Settings

#### `arm1_length`

* Type: `number`
* Default: `150.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:30`
* Required: yes (for SCARA)
* Corresponding v1 setting: `arm1_length`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Length of the first arm segment from the base hinge to the elbow hinge. This is the inner arm of the SCARA robotic arm mechanism. Along with arm2_length, defines the reach and workspace of the SCARA robot. The two arms work together in a planar configuration to position the end effector within a circular or annular workspace. Must match physical arm dimensions precisely.
  * Only applies to morgan SCARA arm solution
  * Measure from base pivot center to elbow pivot center
  * Critical for correct SCARA kinematics
  * Together with arm2_length defines workspace
  * Incorrect value causes position errors
  * All measurements should be precise
* Related settings: `arm2_length`, `morgan_offset_x`, `morgan_offset_y`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * arm1_length 150.0  # 150mm inner arm

#### `arm2_length`

* Type: `number`
* Default: `150.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:32`
* Required: yes (for SCARA)
* Corresponding v1 setting: `arm2_length`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Length of the second arm segment from the elbow hinge to the end effector. This is the outer arm of the SCARA robotic arm mechanism. Along with arm1_length, defines the reach and workspace of the SCARA robot. The maximum reach is arm1_length + arm2_length, while the minimum reach (if reachable) is arm1_length - arm2_length. Must match physical arm dimensions precisely.
  * Only applies to morgan SCARA arm solution
  * Measure from elbow pivot center to end effector center
  * Critical for correct SCARA kinematics
  * Together with arm1_length defines workspace
  * Max reach = arm1 + arm2
  * Min reach = abs(arm1 - arm2)
* Related settings: `arm1_length`, `morgan_offset_x`, `morgan_offset_y`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * arm2_length 150.0  # 150mm outer arm (same as inner for symmetric SCARA)
  * arm2_length 120.0  # Shorter outer arm

#### `morgan_offset_x`

* Type: `number`
* Default: `100.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:34`
* Corresponding v1 setting: `morgan_offset_x`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. X-axis offset of the bed zero position (work origin) from the SCARA tower center (base pivot point). SCARA robots typically have their base pivot at a fixed mechanical location, but the desired work coordinate zero may be offset from this point. This parameter shifts the work coordinate system to place X=0 at the desired location relative to the SCARA base.
  * Only applies to morgan SCARA arm solution
  * Defines work coordinate origin relative to SCARA base
  * Positive values shift work origin in positive X direction
  * Negative values shift work origin in negative X direction
  * Used to center working area within SCARA reach
  * Can be any value within reachable workspace
* Related settings: `morgan_offset_y`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_offset_x 100.0  # Work origin 100mm in X from SCARA base
  * morgan_offset_x 0.0  # Work origin at SCARA base X position
  * morgan_offset_x -50.0  # Work origin 50mm in negative X

#### `morgan_offset_y`

* Type: `number`
* Default: `-60.0`
* Units: mm
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:36`
* Corresponding v1 setting: `morgan_offset_y`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Y-axis offset of the bed zero position (work origin) from the SCARA tower center (base pivot point). SCARA robots typically have their base pivot at a fixed mechanical location, but the desired work coordinate zero may be offset from this point. This parameter shifts the work coordinate system to place Y=0 at the desired location relative to the SCARA base.
  * Only applies to morgan SCARA arm solution
  * Defines work coordinate origin relative to SCARA base
  * Positive values shift work origin in positive Y direction
  * Negative values shift work origin in negative Y direction
  * Used to center working area within SCARA reach
  * Default negative value positions work area in front of base
* Related settings: `morgan_offset_x`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_offset_y -60.0  # Work origin 60mm in negative Y (front of base)
  * morgan_offset_y 0.0  # Work origin at SCARA base Y position
  * morgan_offset_y 100.0  # Work origin 100mm in positive Y

#### `morgan_scaling_x`

* Type: `number`
* Default: `1.0`
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:38`
* Corresponding v1 setting: `morgan_scaling_x`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Final calibration scaling factor for X axis movement. Used to fine-tune dimensions after mechanical calibration, accounting for arm flexing, backlash, or other non-linear effects. A value of 1.0 means no scaling (100%), values above 1.0 increase movement, values below 1.0 decrease movement. Typically adjusted by measuring actual vs commanded distances and calculating correction ratio.
  * Only applies to morgan SCARA arm solution
  * 1.0 = no scaling, 100% nominal (default)
  * >1.0 = increase movement (e.g., 1.01 = 1% larger)
  * <1.0 = decrease movement (e.g., 0.99 = 1% smaller)
  * Fine-tuning parameter for final dimensional accuracy
  * Adjusted after basic calibration is complete
  * Typical range 0.95-1.05
* Related settings: `morgan_scaling_y`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_scaling_x 1.0  # No scaling (default)
  * morgan_scaling_x 1.02  # 2% larger movements in X
  * morgan_scaling_x 0.98  # 2% smaller movements in X

#### `morgan_scaling_y`

* Type: `number`
* Default: `1.0`
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:39`
* Corresponding v1 setting: `morgan_scaling_y`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Final calibration scaling factor for Y axis movement. Used to fine-tune dimensions after mechanical calibration, accounting for arm flexing, backlash, or other non-linear effects. A value of 1.0 means no scaling (100%), values above 1.0 increase movement, values below 1.0 decrease movement. Typically adjusted by measuring actual vs commanded distances and calculating correction ratio.
  * Only applies to morgan SCARA arm solution
  * 1.0 = no scaling, 100% nominal (default)
  * >1.0 = increase movement (e.g., 1.01 = 1% larger)
  * <1.0 = decrease movement (e.g., 0.99 = 1% smaller)
  * Fine-tuning parameter for final dimensional accuracy
  * Adjusted after basic calibration is complete
  * May differ from X scaling due to mechanical asymmetry
* Related settings: `morgan_scaling_x`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_scaling_y 1.0  # No scaling (default)
  * morgan_scaling_y 1.01  # 1% larger movements in Y
  * morgan_scaling_y 0.99  # 1% smaller movements in Y

#### `morgan_undefined_min`

* Type: `number`
* Default: `0.95`
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:43`
* Corresponding v1 setting: `morgan_undefined_min`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Ratio defining where SCARA position becomes kinematically undefined when the end effector approaches too close to the base tower. SCARA arms have singularity points where the arm configuration is ambiguous or mechanically unstable. This parameter prevents movement through the inner singularity. Value of 0.95 means positions closer than 95% of minimum theoretical reach are forbidden. Higher values are more restrictive (safer).
  * Only applies to morgan SCARA arm solution
  * Prevents movement through inner singularity point
  * 0.95 = 95% of minimum reach (default)
  * Higher values = more restrictive, larger forbidden zone
  * Lower values = allow closer approach to base (dangerous)
  * Protects against mechanically unstable configurations
  * Machine will refuse moves into forbidden zone
* Related settings: `morgan_undefined_max`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_undefined_min 0.95  # Default safe limit
  * morgan_undefined_min 0.98  # More conservative, larger forbidden zone

#### `morgan_undefined_max`

* Type: `number`
* Default: `0.95`
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:45`
* Corresponding v1 setting: `morgan_undefined_max`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Ratio defining where SCARA position becomes kinematically undefined when the end effector reaches maximum extension. SCARA arms have singularity points where the arm is fully extended and the elbow joint is locked straight, creating mechanical instability or ambiguous configurations. This parameter prevents movement through the outer singularity. Value of 0.95 means positions beyond 95% of maximum theoretical reach are forbidden.
  * Only applies to morgan SCARA arm solution
  * Prevents movement through outer singularity point
  * 0.95 = 95% of maximum reach (default)
  * Higher values = more restrictive, limit maximum reach further
  * Lower values = allow closer approach to maximum extension
  * Protects against fully extended arm instability
  * Machine will refuse moves into forbidden zone
* Related settings: `morgan_undefined_min`, `arm1_length`, `arm2_length`, applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * morgan_undefined_max 0.95  # Default safe limit
  * morgan_undefined_max 0.97  # More conservative, reduced maximum reach

#### `real_scara`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting (only for morgan SCARA)
* Defined in: `modules/robot/arm_solutions/MorganSCARASolution.cpp:46`
* Valid values: `true`, `false`
* Corresponding v1 setting: `real_scara`
* Corresponding v2 setting: none (morgan not documented in v2)
* Description: For Morgan SCARA arm solution only. Enables real SCARA mode versus Morgan mode, which affects the kinematic calculations. The Morgan SCARA implementation supports two different SCARA variants with slightly different kinematic equations. The exact difference depends on the specific mechanical configuration (joint rotation directions, angle conventions). Setting this incorrectly will cause the arm to move in incorrect paths.
  * Only applies to morgan SCARA arm solution
  * false = Morgan mode (default)
  * true = Real SCARA mode
  * Affects kinematic calculation methods
  * Must match your specific SCARA mechanical configuration
  * Consult SCARA documentation or source code for details
  * Incorrect setting causes incorrect motion paths
* Related settings: applies only to `morgan`
* Related pages: morgan-scara, arm-solutions
* Example configuration:
  * real_scara false  # Morgan mode (default)
  * real_scara true  # Real SCARA mode for different mechanical config

## Laser Settings

#### `laser_module_default_power`

* Type: `number`
* Default: `0.8`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:209`
* Typical values: `0.8` (80% power), `0.5` (50% power), `1.0` (100% power)
* Corresponding v1 setting: `laser_module_default_power`
* Corresponding v2 setting: `laser.default_power`
* Description: Default S value for laser operations when no S parameter is specified in G-code. Represents laser power as a fraction from 0.0 (off) to 1.0 (full power), or can represent spindle RPM depending on configuration context. When G-code commands like M3 or M4 don't include an S parameter, this default value is used. Also serves as the initial power level before any S commands are received.
  * Fraction: 0.0 = off, 1.0 = full power
  * Used when G-code omits S parameter
  * Also used as initial power at startup
  * For laser cutting/engraving operations
  * Can also represent spindle RPM in CNC context
  * Typical laser default is 0.8 (80% power)
  * Set lower for testing, higher for production
* Related M-Codes:
  * M3 S<value> - Set laser/spindle power and turn on
  * M4 S<value> - Set power with dynamic mode
  * M5 - Turn off laser/spindle
* Related settings: Laser module settings
* Related pages: laser, laser-cutter-guide
* Example configuration:
  * laser_module_default_power 0.8  # 80% default power
  * laser_module_default_power 0.5  # 50% default (safer for testing)
  * laser_module_default_power 1.0  # Full power default

## Soft Endstop Settings

#### `soft_endstop.enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:287`
* Valid values: `true`, `false`
* Corresponding v1 setting: `soft_endstop.enable`
* Corresponding v2 setting: none (not documented in v2)
* Description: Enable software endstops that prevent moves beyond configured minimum and maximum boundaries. When enabled, firmware checks every move against the soft_endstop min/max values and refuses moves that would exceed those limits. Provides protection against crashes and lost position without requiring physical limit switches on all axes. Soft endstops only work after the machine has been homed to establish position reference.
  * false = disabled (default)
  * true = enforce soft limits
  * Only active after homing establishes known position
  * Prevents motion beyond defined workspace boundaries
  * Useful for machines without physical limit switches
  * Can prevent crashes during manual jogging or testing
  * Complements but doesn't replace physical endstops
* Related settings: All other `soft_endstop.*` settings, `soft_endstop.halt`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.enable false  # Disabled (default)
  * soft_endstop.enable true  # Enable soft limits

#### `soft_endstop.halt`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:288`
* Valid values: `true`, `false`
* Corresponding v1 setting: `soft_endstop.halt`
* Corresponding v2 setting: none (not documented in v2)
* Description: Controls machine behavior when soft endstop limit is triggered. When true (default), the machine enters HALT state when attempting to move beyond soft limits, requiring user intervention (reset). When false, the move is skipped/truncated but the machine continues operation. Only has effect when soft_endstop.enable is true. HALT mode is safer as it prevents continued operation in an error state.
  * true = HALT machine on soft limit violation (default, safer)
  * false = skip move but continue operation
  * Only matters when soft_endstop.enable is true
  * true provides maximum safety
  * false allows continued operation but may mask problems
  * HALT requires reset (M999) to resume
* Related settings: `soft_endstop.enable`
* Related pages: endstops, motion-control, stopping-smoothie
* Example configuration:
  * soft_endstop.halt true  # HALT on violation (recommended)
  * soft_endstop.halt false  # Skip move but continue

#### `soft_endstop.xmin`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:290`
* Corresponding v1 setting: `soft_endstop.xmin`
* Corresponding v2 setting: none (not documented in v2)
* Description: Minimum allowed X position for soft endstop enforcement. When set to a valid number, prevents X-axis moves below this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Typically set to 0 or slightly negative to account for homing position.
  * NAN = limit disabled (default)
  * Set to number to enable minimum X limit
  * Only enforced after homing
  * Typically 0 or slightly negative
  * Prevents crashes into negative X mechanical limits
  * Must be less than soft_endstop.xmax if both are set
* Related settings: `soft_endstop.xmax`, `soft_endstop.enable`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.xmin 0  # Prevent negative X movement
  * soft_endstop.xmin -5  # Allow 5mm negative for homing offset
  * # Omit or set to NAN to disable

#### `soft_endstop.ymin`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:291`
* Corresponding v1 setting: `soft_endstop.ymin`
* Corresponding v2 setting: none (not documented in v2)
* Description: Minimum allowed Y position for soft endstop enforcement. When set to a valid number, prevents Y-axis moves below this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Typically set to 0 or slightly negative to account for homing position.
  * NAN = limit disabled (default)
  * Set to number to enable minimum Y limit
  * Only enforced after homing
  * Typically 0 or slightly negative
  * Prevents crashes into negative Y mechanical limits
* Related settings: `soft_endstop.ymax`, `soft_endstop.enable`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.ymin 0  # Prevent negative Y movement
  * soft_endstop.ymin -5  # Allow 5mm negative for homing offset

#### `soft_endstop.zmin`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:292`
* Corresponding v1 setting: `soft_endstop.zmin`
* Corresponding v2 setting: none (not documented in v2)
* Description: Minimum allowed Z position for soft endstop enforcement. When set to a valid number, prevents Z-axis moves below this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Critical for protecting work surfaces, beds, and tool tips from crashing into the bed or table.
  * NAN = limit disabled (default)
  * Set to number to enable minimum Z limit
  * Only enforced after homing
  * Typically 0 or slightly negative
  * CRITICAL for preventing bed crashes in 3D printers
  * Prevents tool crashes in CNC
* Related settings: `soft_endstop.zmax`, `soft_endstop.enable`
* Related pages: endstops, motion-control, 3d-printer-guide
* Example configuration:
  * soft_endstop.zmin 0  # Prevent negative Z movement (bed crash protection)
  * soft_endstop.zmin -0.1  # Allow slight negative for probe offset

#### `soft_endstop.xmax`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:293`
* Corresponding v1 setting: `soft_endstop.xmax`
* Corresponding v2 setting: none (not documented in v2)
* Description: Maximum allowed X position for soft endstop enforcement. When set to a valid number, prevents X-axis moves above this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Typically set to the maximum build/work area dimension in X-axis.
  * NAN = limit disabled (default)
  * Set to number to enable maximum X limit
  * Only enforced after homing
  * Should match physical workspace size
  * Prevents crashes into positive X mechanical limits
  * Must be greater than soft_endstop.xmin if both are set
* Related settings: `soft_endstop.xmin`, `soft_endstop.enable`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.xmax 200  # 200mm maximum X travel
  * soft_endstop.xmax 300  # 300mm build area in X

#### `soft_endstop.ymax`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:294`
* Corresponding v1 setting: `soft_endstop.ymax`
* Corresponding v2 setting: none (not documented in v2)
* Description: Maximum allowed Y position for soft endstop enforcement. When set to a valid number, prevents Y-axis moves above this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Typically set to the maximum build/work area dimension in Y-axis.
  * NAN = limit disabled (default)
  * Set to number to enable maximum Y limit
  * Only enforced after homing
  * Should match physical workspace size
  * Prevents crashes into positive Y mechanical limits
* Related settings: `soft_endstop.ymin`, `soft_endstop.enable`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.ymax 200  # 200mm maximum Y travel
  * soft_endstop.ymax 300  # 300mm build area in Y

#### `soft_endstop.zmax`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `root`
* Context: Global setting
* Defined in: `modules/robot/Robot.cpp:295`
* Corresponding v1 setting: `soft_endstop.zmax`
* Corresponding v2 setting: none (not documented in v2)
* Description: Maximum allowed Z position for soft endstop enforcement. When set to a valid number, prevents Z-axis moves above this value. When set to NAN (not-a-number, the default), this limit is disabled. Only enforced when soft_endstop.enable is true and machine has been homed. Important for preventing Z-axis crashes into frame top, gantry, or other mechanical limits.
  * NAN = limit disabled (default)
  * Set to number to enable maximum Z limit
  * Only enforced after homing
  * Should match maximum safe Z height
  * Prevents crashes into Z mechanical limits
  * Important for printers with limited Z travel
* Related settings: `soft_endstop.zmin`, `soft_endstop.enable`
* Related pages: endstops, motion-control
* Example configuration:
  * soft_endstop.zmax 200  # 200mm maximum Z height
  * soft_endstop.zmax 400  # 400mm Z travel for tall printer

---

## Summary

This refined documentation covers **all 63 settings** in the Robot & Motion Control category for Smoothieware v1:

* **Core Motion:** 8 settings (acceleration, speeds, feed rates)
* **Planner:** 4 settings (junction deviation, queue management)
* **Segmentation:** 6 settings (line/arc segmentation control)
* **Coordinate Systems:** 3 settings (G92, G54 save options)
* **Arm Solutions:** 1 setting (arm_solution selector)
* **Cartesian/CoreXY/CoreXZ:** 3 settings
* **Linear Delta:** 10 settings (geometry and calibration)
* **Experimental Delta:** 2 settings (tower angles)
* **Rotary Delta:** 9 settings (geometry parameters)
* **Morgan SCARA:** 9 settings (arm geometry and calibration)
* **Laser:** 1 setting
* **Soft Endstops:** 9 settings (software limits)

Each setting now includes:
- Type, Default, Units (where applicable)
- Module and Context
- Source code location (Defined in)
- Typical values for guidance
- V1↔V2 correspondence mappings
- Comprehensive descriptions with sub-bullet details
- Related M-Codes (where applicable)
- Related settings and pages
- Practical example configurations

All settings use the new standardized format per the specification with:
- `* Property:` format (not `**Property:**`)
- 2-space indented sub-bullets for additional information
- Canonical property order
- All information preserved from original documentation

---

## Player Module

# Player Module Configuration Settings - Smoothieware v1

## Module Overview

The Player module manages G-code file playback from the SD card and controls suspend/resume operations during print execution.

---

## Configuration Settings

### `on_boot_gcode`

* Type: `string`
* Default: `/sd/on_boot.gcode`
* Module: `player`
* Context: Global setting
* Defined in: `src/modules/utils/player/Player.cpp:69`
* Corresponding v1 setting: `on_boot_gcode`
* Corresponding v2 setting: none
* Description: Specifies the path to a G-code file that will be automatically executed when the board completes its boot sequence. This setting allows you to automate initialization tasks such as homing all axes, preheating extruders, performing calibration routines, or any other startup operations needed for your machine. The file must exist on the SD card at the specified path for automatic execution to occur.
  * Only executed if `on_boot_gcode_enable` is set to `true`.
  * Execution occurs after all modules have been loaded and the system is ready.
  * The default path `/sd/on_boot.gcode` points to the root directory of the SD card.
  * Common use cases include homing sequences (G28), initial heating commands, positioning moves, or bed leveling routines.
  * If the file does not exist, the system will boot normally without error but will not execute any boot G-code.
* Related M-Codes:
  * M21 - Initialize/remount SD card
  * M23 - Select file for playback
  * M24 - Start playing selected file
* Related settings: `on_boot_gcode_enable`
* Related pages: player, sd-card, on_boot.gcode, supported-g-codes
* Example configuration:
  * on_boot_gcode /sd/on_boot.gcode  # Default boot script location
  * on_boot_gcode /sd/startup/init.gcode  # Custom subdirectory location
  * on_boot_gcode /sd/printer_warmup.gcode  # 3D printer warmup routine

---

### `on_boot_gcode_enable`

* Type: `bool`
* Default: `true`
* Module: `player`
* Context: Global setting
* Defined in: `src/modules/utils/player/Player.cpp:70`
* Valid values: `true`, `false`
* Corresponding v1 setting: `on_boot_gcode_enable`
* Corresponding v2 setting: none
* Description: Enables or disables the automatic execution of the on_boot_gcode file during system startup. When set to true, the file specified in on_boot_gcode will be played automatically after the board finishes booting and all modules are loaded. When set to false, no automatic G-code execution occurs on boot, and the system simply starts in an idle state waiting for commands from the host or panel.
  * Enabled by default for convenience in typical 3D printer and CNC workflows.
  * Useful to temporarily disable boot scripts without deleting or renaming the file.
  * The system will still boot normally even if disabled, just without executing the boot G-code file.
  * Can be used to prevent unwanted automatic operations during testing or maintenance.
* Related settings: `on_boot_gcode`
* Related pages: player, sd-card, on_boot.gcode
* Example configuration:
  * on_boot_gcode_enable true  # Execute boot script (default)
  * on_boot_gcode_enable false  # Disable boot script for manual startup control

---

### `after_suspend_gcode`

* Type: `string`
* Default: `` (empty string)
* Module: `player`
* Context: Global setting
* Defined in: `src/modules/utils/player/Player.cpp:72`
* Corresponding v1 setting: `after_suspend_gcode`
* Corresponding v2 setting: none
* Description: Defines G-code commands that are automatically executed immediately after a suspend command (M600) is received. This setting is typically used to prepare the machine for a paused state by performing operations such as retracting filament to prevent oozing, raising the Z-axis to avoid collisions with the printed part, and moving the toolhead to a safe parking position where the user can access the print area. Multiple commands can be specified in a single string, with underscores used as command separators that are automatically converted to spaces at runtime. The suspend sequence waits for the command queue to completely empty before executing this G-code, ensuring the machine is in a stable state before parking operations begin.
  * Underscore characters (`_`) are automatically converted to spaces for command separation at runtime.
  * Executed after the print queue empties and the current machine state is saved.
  * Useful for preventing filament oozing during pauses and creating safe access to the print.
  * Can include any valid G-code commands supported by Smoothieware.
  * The saved state includes XYZ position (in work coordinate system), extruder position, robot state, and heater temperatures.
  * IMPORTANT: Commands run AFTER heaters are turned off (unless leave_heaters_on_suspend is true, in which case heaters remain on throughout).
* Related M-Codes:
  * M600 - Suspend print (turn off heaters based on leave_heaters_on_suspend setting)
  * M600.1 - Suspend print (force heaters to stay on, overrides leave_heaters_on_suspend)
  * M601 - Resume print from suspension
  * M120 - Push state (used internally during suspend)
  * M121 - Pop state (used internally during resume)
* Related settings: `before_resume_gcode`, `leave_heaters_on_suspend`
* Related pages: player, extruder, temperaturecontrol, supported-g-codes
* Example configuration:
  * after_suspend_gcode G91_G0_E-5_G0_Z10_G90_G0_X-50_Y-50  # Retract 5mm, lift Z 10mm, park at X-50 Y-50
  * after_suspend_gcode G91_G0_E-10_G0_Z20_G90_G0_X0_Y200  # Retract 10mm, lift Z 20mm, park at front
  * after_suspend_gcode G91_G1_E-2_F2400_G0_Z5_G90  # Fast retract and small Z-lift for short pauses

---

### `before_resume_gcode`

* Type: `string`
* Default: `` (empty string)
* Module: `player`
* Context: Global setting
* Defined in: `src/modules/utils/player/Player.cpp:73`
* Corresponding v1 setting: `before_resume_gcode`
* Corresponding v2 setting: none
* Description: Specifies G-code commands to execute automatically after a resume command (M601) is received but before normal print execution resumes. This G-code runs after heaters have reached their saved target temperatures but before the saved position is restored. Underscores are converted to spaces for command separation. This setting is generally not needed because the resume operation automatically restores the machine to its exact state before suspension, including position, extruder state, and coordinate system modes. However, it may be useful for minor adjustments like a small extrusion prime to ensure filament flow after a pause, or to perform sensor checks before resuming.
  * Underscore characters (`_`) are automatically converted to spaces.
  * Executed after heaters reach temperature but before position restoration.
  * Generally not necessary as resume automatically restores full machine state.
  * The automatic resume sequence handles: heater temperature restoration, position restoration (XY then Z), extruder state restoration, and coordinate mode restoration (absolute/relative).
  * Only use if you need specific commands between heater warmup and position restore.
  * Common use case: small extrusion prime (e.g., 1-2mm) to ensure nozzle pressure after filament change.
* Related M-Codes:
  * M601 - Resume print from suspension
  * M121 - Pop state (restores robot state during resume)
  * G90 - Absolute positioning mode (used during position restore)
  * G0 - Rapid move (used to restore XY then Z position)
* Related settings: `after_suspend_gcode`, `leave_heaters_on_suspend`
* Related pages: player, extruder, temperaturecontrol, supported-g-codes
* Example configuration:
  * before_resume_gcode G91_G1_E1_G90  # Extrude 1mm prime before resuming
  * before_resume_gcode G91_G1_E2_F300_G90  # Slow 2mm prime for better flow
  * before_resume_gcode  # Empty - rely on automatic state restoration only

---

### `leave_heaters_on_suspend`

* Type: `bool`
* Default: `false`
* Module: `player`
* Context: Global setting
* Defined in: `src/modules/utils/player/Player.cpp:76`
* Valid values: `true`, `false`
* Typical values: `false` (safer for long pauses), `true` (useful for quick filament changes)
* Corresponding v1 setting: `leave_heaters_on_suspend`
* Corresponding v2 setting: none
* Description: Controls whether heaters remain active during a print suspension initiated by M600. When set to false (default), all active heaters are turned off when suspend is received, and their target temperatures are saved for automatic restoration during resume. The system will wait for heaters to reach their saved temperatures before continuing the print. When set to true, heaters remain at their current target temperatures throughout the suspension period, avoiding the cooldown and warmup cycle. The default behavior (turning heaters off) is safer and more energy-efficient for longer pauses such as overnight interruptions or extended filament changes, while keeping heaters on is useful for quick pause/resume cycles where temperature recovery time would be problematic or cause print quality issues.
  * Default false behavior saves energy and prevents prolonged heating during pauses.
  * When false, saved temperatures are automatically restored during resume and the system waits for them to reach target before continuing.
  * When true, heaters stay on continuously - useful for quick filament changes or brief inspections that require minimal pause time.
  * Can be overridden on a per-suspend basis using M600.1 (which forces heaters to stay on regardless of this setting).
  * SAFETY: Leaving heaters on during long pauses can waste energy and may pose fire safety risks if the machine is left unattended.
  * The heater wait loop during resume displays real-time temperature progress to the console.
* Related M-Codes:
  * M600 - Suspend print (respects this setting for heater behavior)
  * M600.1 - Suspend print (forces heaters on, overrides this setting)
  * M601 - Resume print (restores heaters if they were turned off)
  * M104 - Set extruder temperature
  * M140 - Set bed temperature
* Related settings: `after_suspend_gcode`, `before_resume_gcode`
* Related pages: player, temperaturecontrol, safety-thermistor
* Example configuration:
  * leave_heaters_on_suspend false  # Turn off heaters during suspend (default, safer)
  * leave_heaters_on_suspend true  # Keep heaters on for quick filament changes

---

## Suspend/Resume Workflow

The Player module implements a comprehensive suspend/resume system for pausing and resuming prints with full state preservation.

### Suspend Sequence (M600 or M600.1)

1. Send pause signal to upstream host or pause SD print
2. Loop main event loop 10 times to clear buffered commands
3. Wait for command queue to completely empty
4. Save current state:
   - XYZ position in work coordinate system (WCS)
   - Extruder position and state (via ExtruderPublicAccess)
   - Robot state (via M120 push_state)
   - Target temperatures for all active heaters
5. Turn off heaters (unless `leave_heaters_on_suspend` is true or M600.1 is used)
6. Execute `after_suspend_gcode` if defined
7. Display "Print Suspended" message

### Resume Sequence (M601)

1. Restore heater target temperatures (if they were saved)
2. Wait for all heaters to reach their target temperatures with progress display
3. Execute `before_resume_gcode` if defined
4. Restore robot state (via M121 pop_state)
5. Restore XY position, then Z position in absolute mode
6. Restore saved absolute/relative mode setting
7. Restore extruder state
8. Resume SD print or send resume signal to upstream host
9. Display "Resuming print" message

### During Suspension

- User can manually jog the machine
- User can manually extrude or retract filament
- User can perform tool changes or filament swaps
- G28 (homing) command will cancel the suspension and clear saved state

---

## Related G-codes

### Print Control
- **M600** - Suspend print (turn off heaters based on config)
- **M600.1** - Suspend print (force heaters to stay on, overrides `leave_heaters_on_suspend`)
- **M601** - Resume print from suspension

### SD Card Operations
- **M21** - Initialize SD card (remount)
- **M23** - Select file for printing
- **M24** - Start/resume SD print
- **M25** - Pause SD print
- **M26** - Reset print (abort and allow reload)
- **M27** - Report print progress
- **M32** - Select file and start print

### State Management (Internal)
- **M120** - Push state (used during suspend)
- **M121** - Pop state (used during resume)

---

## Configuration Examples

### Basic 3D Printer Setup
```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
leave_heaters_on_suspend false
after_suspend_gcode G91_G0_E-5_G0_Z10_G90_G0_X0_Y0
before_resume_gcode G91_G1_E1_G90
```

### Quick Filament Change Setup (Keep Heaters On)
```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
leave_heaters_on_suspend true
after_suspend_gcode G91_G0_E-10_G0_Z20_G90_G0_X0_Y200
before_resume_gcode G91_G1_E5_G90
```

### CNC/Laser Setup (No Boot Script)
```
on_boot_gcode_enable false
on_boot_gcode /sd/on_boot.gcode
leave_heaters_on_suspend false
after_suspend_gcode G91_G0_Z10_G90_G0_X0_Y0
before_resume_gcode
```

---

## Implementation Details

### Module Location
- **Source File:** `src/modules/utils/player/Player.cpp`
- **Header File:** `src/modules/utils/player/Player.h`
- **Public Interface:** `src/modules/utils/player/PlayerPublicAccess.h`

### Events Registered
- `ON_CONSOLE_LINE_RECEIVED` - Console command processing
- `ON_MAIN_LOOP` - File playback execution
- `ON_SECOND_TICK` - Elapsed time tracking
- `ON_GET_PUBLIC_DATA` - Status queries (is_playing, is_suspended, progress)
- `ON_SET_PUBLIC_DATA` - External control (abort_play)
- `ON_GCODE_RECEIVED` - M-code handling
- `ON_HALT` - Emergency stop handling

### Console Commands
- `play <filename> [-v]` - Play G-code file from SD card (verbose optional)
- `progress [-b]` - Show print progress (Marlin format with -b)
- `abort` - Abort current print or clear suspend state
- `suspend [h]` - Suspend print (h keeps heaters on)
- `resume` - Resume suspended print

---

## See Also

- [Player Module Overview](player)
- [on_boot.gcode Documentation](on_boot.gcode)
- [Supported G-Codes](supported-g-codes)
- [Temperature Control Module](temperaturecontrol)
- [Extruder Module](extruder)
- [SD Card Usage](sd-card)

---

## Extruder Module

## Extruder Module

The Extruder module controls filament extrusion for 3D printing. It supports multiple extruders with independent configuration, firmware retraction, volumetric extrusion, and advanced flow control.

Extruders use **instance-based configuration** where you define named extruder instances.
Common names are `hotend`, `extruder`, `hotend2`, but you can use any name.

**Configuration Pattern:** `extruder.<name>.<setting>`

**Example:**
```
extruder.hotend.enable true
extruder.hotend.steps_per_mm 140
extruder.hotend.max_speed 50
extruder.hotend.acceleration 500

extruder.hotend2.enable true
extruder.hotend2.steps_per_mm 140
extruder.hotend2.x_offset 25
```

---

### Extruder Settings

#### `enable`

* Type: `bool`
* Default: `false` (must be explicitly set to true)
* Module: `extruder`
* Context: Module instance setting (can have multiple extruders)
* Defined in: `modules/tools/extruder/ExtruderMaker.cpp:39,64`
* Valid values: `true`, `false`
* Required: yes (extruder will not be created if false)
* Corresponding v1 setting: `extruder.hotend.enable`
* Corresponding v2 setting: `extruder.hotend.enable`
* Description: Whether to activate this extruder instance. All configuration is ignored if false. Each enabled extruder creates a separate extruder module instance that can be independently controlled.
  * Multiple extruders can be enabled by creating multiple instances with different names
  * Each enabled extruder must have valid step_pin, dir_pin, and en_pin configured
  * Tool selection is done via T0, T1, T2, etc. commands
* Related settings: `extruder.step_pin`, `extruder.dir_pin`, `extruder.en_pin`, `temperature_control.enable`
* Related pages: extruder, multiple-extruders, extruder-guide
* Example configuration:
  * extruder.hotend.enable true  # Enable primary extruder (T0)
  * extruder.hotend2.enable true  # Enable second extruder (T1) for dual extrusion
  * extruder.e3d.enable false  # Disable this extruder instance

---

#### `steps_per_mm`

* Type: `number`
* Default: `1`
* Units: steps per mm of filament
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:96`
* Typical values: `140` (common direct drive), `100` (geared 3:1), `200` (high-resolution stepper), `420` (Bondtech BMG)
* Corresponding v1 setting: `extruder.hotend.steps_per_mm`
* Corresponding v2 setting: `extruder.hotend.steps_per_mm`
* Description: Number of stepper motor steps required to move one millimeter of filament through the extruder. This critical calibration value depends on your stepper motor step angle, microstepping configuration, and extruder gear ratio. The formula is: steps_per_mm = (motor_steps_per_rev × microstepping) / (gear_ratio × pinch_wheel_diameter × π). For a typical setup with 1.8° stepper (200 steps/rev), 1/16 microstepping, 3:1 gearing, and 10mm effective diameter: steps_per_mm = (200 × 16) / (3 × 10 × 3.14159) = 140.
  * This is the most critical calibration value for accurate extrusion
  * Incorrect value causes under-extrusion (too low) or over-extrusion (too high)
  * Should be calibrated by measuring actual filament movement
  * Can be temporarily adjusted with M221 (flow rate percentage)
* Related M-Codes:
  * M92 E<value> - Set steps/mm at runtime
  * M92 E<value> P<extruder_id> - Set for specific extruder instance
  * M500 - Save current value to config-override
  * M503 - Display current value
* Related settings: `extruder.acceleration`, `extruder.max_speed`, `extruder.filament_diameter`
* Related pages: extruder, extruder-guide, multiple-extruders
* Example configuration:
  * extruder.hotend.steps_per_mm 140  # Common direct drive with 1.8° stepper
  * extruder.hotend.steps_per_mm 143.5  # Fine-tuned after calibration
  * extruder.hotend2.steps_per_mm 420  # Bondtech BMG dual drive extruder

---

#### `filament_diameter`

* Type: `number`
* Default: `0` (volumetric extrusion disabled)
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:103`
* Minimum value: `0.01` (checked in Extruder.cpp:111,263,276 - values below this disable volumetric mode)
* Typical values: `1.75` (most common), `2.85` (older printers), `0` (disable volumetric mode)
* Corresponding v1 setting: `extruder.hotend.filament_diameter`
* Corresponding v2 setting: `extruder.hotend.filament_diameter`
* Description: Filament diameter in millimeters for volumetric extrusion mode. When set to a value greater than 0.01mm, enables volumetric extrusion where E values in G-code represent mm³ of filament volume instead of mm of filament length. The volumetric multiplier is calculated as: 1 / (π × (diameter/2)²). Set to 0 to disable volumetric extrusion and use linear extrusion mode (E values = mm of filament).
  * Most slicers output linear E values (mm of filament), so 0 is the most common setting
  * Volumetric mode is useful when switching between different filament diameters
  * Changing this value at runtime with M200 requires careful milestone adjustment
  * The 0.01mm minimum prevents division by zero and nonsensical values
* Related M-Codes:
  * M200 D<diameter> - Set filament diameter at runtime (mm)
  * M200 D<diameter> P<extruder_id> - Set for specific extruder instance
  * M200 - Display current setting
  * M200 D0 - Disable volumetric extrusion
  * M500 - Save to config-override
* Related settings: `extruder.steps_per_mm`, `extruder.max_speed`
* Related pages: extruder, extruder-guide
* Example configuration:
  * extruder.hotend.filament_diameter 1.75  # Enable volumetric mode for 1.75mm filament
  * extruder.hotend.filament_diameter 2.85  # Enable volumetric mode for 2.85mm filament
  * extruder.hotend.filament_diameter 0  # Disable volumetric mode (most common)

---

#### `acceleration`

* Type: `number`
* Default: `1000`
* Units: mm/s²
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:97`
* Typical values: `500` (conservative for flexible filament), `1000` (default, general purpose), `2000` (fast direct drive)
* Corresponding v1 setting: `extruder.hotend.acceleration`
* Corresponding v2 setting: `extruder.hotend.acceleration`
* Description: Maximum acceleration for the extruder stepper motor in mm/s². Controls how quickly the extruder can change speed during extrusion moves. Higher values allow faster speed changes and sharper transitions but may cause skipped steps, grinding, or inconsistent extrusion. Lower values provide smoother extrusion and better flow consistency but slower response to speed changes.
  * This is independent of the robot's XYZ acceleration
  * Flexible filaments need lower values (300-600 mm/s²) to prevent compression
  * Direct drive extruders can typically handle higher values than Bowden
  * Too high causes grinding or skipped steps during rapid retractions
* Related M-Codes:
  * M204 E<value> - Set extruder acceleration at runtime (mm/s²)
  * M204 E<value> P<extruder_id> - Set for specific extruder instance
  * M500 - Save to config-override
  * M503 - Display current value
* Related settings: `extruder.max_speed`, `extruder.retract_feedrate`, `motion_control.default_acceleration`
* Related pages: extruder, motion-control, extruder-guide
* Example configuration:
  * extruder.hotend.acceleration 500  # Conservative for flexible filament
  * extruder.hotend.acceleration 1000  # Default, general purpose
  * extruder.hotend2.acceleration 2000  # Fast direct drive extruder

---

#### `max_speed`

* Type: `number`
* Default: `1000`
* Units: mm/s
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:119`
* Typical values: `50` (standard direct drive), `80` (fast direct drive), `120` (Bowden with good path)
* Corresponding v1 setting: `extruder.hotend.max_speed`
* Corresponding v2 setting: `extruder.hotend.max_speed`
* Description: Maximum allowable speed for the extruder stepper motor in mm/s. This is the absolute speed limit for filament movement. The firmware will never move the extruder faster than this speed, regardless of G-code commands or requested feedrates. This limit protects against stepper motor stalling, gear slipping, filament grinding, and excessive extruder torque.
  * This is a hard limit enforced by the firmware
  * Should be set conservatively below the point where skipping occurs
  * Bowden extruders typically need higher values for fast retractions
  * Direct drive extruders can use lower values (40-60 mm/s)
  * Too high causes skipped steps and grinding
  * Too low limits maximum print speed and retraction performance
* Related M-Codes:
  * M203 E<value> - Set max speed at runtime (mm/s)
  * M203 E<value> P<extruder_id> - Set for specific extruder instance
  * M203 - Display current settings for all axes
  * M500 - Save to config-override
* Related settings: `extruder.acceleration`, `extruder.retract_feedrate`, `extruder.steps_per_mm`
* Related pages: extruder, extruder-guide, stepper-motors
* Example configuration:
  * extruder.hotend.max_speed 50  # Standard direct drive extruder
  * extruder.hotend.max_speed 80  # Fast direct drive extruder
  * extruder.hotend2.max_speed 120  # Bowden extruder for fast retractions

---

#### `step_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:92`
* Valid values: Pin specification in format `port.pin` (v1)
  * Format: `2.3` means port 2, pin 3
  * Add `!` suffix to invert: `2.3!`
  * Use `nc` for not connected (disables this pin)
* Required: yes (extruder will not function without valid pin)
* Corresponding v1 setting: `extruder.hotend.step_pin`
* Corresponding v2 setting: `extruder.hotend.step_pin` (uses STM32 format like `PD3`)
* Description: Pin for the extruder stepper motor driver's step signal. Each step pulse moves the motor one microstep according to the driver's microstepping configuration. Must be a valid digital output pin that connects to the STEP input of your stepper driver.
  * CRITICAL: Incorrect pin assignment can cause motors not to move or move the wrong axis
  * Pin must be a hardware PWM-capable pin for best performance
  * Must not conflict with other module pin assignments
  * Consult your board's pinout diagram for correct pin assignments
* Related settings: `extruder.dir_pin`, `extruder.en_pin`, `extruder.steps_per_mm`
* Related pages: extruder, pin-configuration, pinout, smoothieboard
* Example configuration:
  * extruder.hotend.step_pin 2.3  # First extruder step pin
  * extruder.hotend2.step_pin 2.8  # Second extruder step pin
  * extruder.spare.step_pin nc  # Disabled/not connected

---

#### `dir_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:93`
* Valid values: Pin specification in format `port.pin` (v1)
  * Format: `0.22` means port 0, pin 22
  * Add `!` suffix to invert: `0.22!`
  * Use `nc` for not connected (disables this pin)
* Required: yes (extruder will not function without valid pin)
* Corresponding v1 setting: `extruder.hotend.dir_pin`
* Corresponding v2 setting: `extruder.hotend.dir_pin` (uses STM32 format)
* Description: Pin for the extruder stepper motor driver's direction signal. Controls whether the motor rotates forward (extrude filament) or backward (retract filament). Append `!` to invert the direction if the motor runs backward during extrusion.
  * Determines which way the motor rotates (clockwise vs counter-clockwise)
  * If motor runs backward during extrusion, add `!` to invert
  * Must not conflict with other module pin assignments
  * Direction can be tested with small manual extrusion commands
* Related settings: `extruder.step_pin`, `extruder.en_pin`
* Related pages: extruder, pin-configuration, pinout
* Example configuration:
  * extruder.hotend.dir_pin 0.22  # Normal direction
  * extruder.hotend.dir_pin 0.22!  # Inverted direction (motor was backward)
  * extruder.hotend2.dir_pin 2.13  # Second extruder direction pin

---

#### `en_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:94`
* Valid values: Pin specification in format `port.pin` (v1)
  * Format: `0.21` means port 0, pin 21
  * Add `!` suffix to invert: `0.21!`
  * Use `nc` for not connected (motor always enabled)
* Corresponding v1 setting: `extruder.hotend.en_pin`
* Corresponding v2 setting: `extruder.hotend.en_pin` (uses STM32 format)
* Description: Pin for the extruder stepper motor driver's enable signal. When active, the motor driver is powered and holds position with full torque. When inactive, the motor is unpowered and can be turned freely by hand. Append `!` to invert if your driver enables on LOW signal instead of HIGH.
  * Most drivers enable on LOW, so `!` is commonly needed
  * When disabled, motor has no holding torque and can be turned manually
  * Firmware automatically enables/disables motor as needed
  * Some drivers don't need enable pin (always enabled)
* Related settings: `extruder.step_pin`, `extruder.dir_pin`
* Related pages: extruder, pin-configuration, pinout, stepper-motors
* Example configuration:
  * extruder.hotend.en_pin 0.21  # Enable on HIGH signal
  * extruder.hotend.en_pin 0.21!  # Enable on LOW signal (most common)
  * extruder.hotend2.en_pin 4.29  # Second extruder enable pin

---

#### `x_offset`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:99`
* Typical values: `0` (primary extruder), `25` (typical dual extruder spacing), `-18` (left of primary)
* Corresponding v1 setting: `extruder.hotend.x_offset`
* Corresponding v2 setting: `extruder.hotend.x_offset`
* Description: X-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for physical nozzle spacing. When switching tools with T commands, the firmware automatically applies this offset to maintain correct positioning of printed features. Positive values indicate the nozzle is to the right of the primary extruder. Negative values indicate the nozzle is to the left.
  * Only relevant for multi-extruder configurations
  * T0 (primary extruder) should always have offset 0,0,0
  * Measure from T0 nozzle tip to this extruder's nozzle tip
  * Incorrect offset causes misalignment between extruders
  * Should be calibrated by printing alignment test patterns
* Related settings: `extruder.y_offset`, `extruder.z_offset`, `extruder.enable`
* Related pages: extruder, multiple-extruders, extruder-guide
* Example configuration:
  * extruder.hotend.x_offset 0  # Primary extruder (T0) at origin
  * extruder.hotend2.x_offset 25  # Second extruder 25mm to the right
  * extruder.hotend3.x_offset -18  # Third extruder 18mm to the left

---

#### `y_offset`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:100`
* Typical values: `0` (most common), `5` (behind primary), `-5` (in front of primary)
* Corresponding v1 setting: `extruder.hotend.y_offset`
* Corresponding v2 setting: `extruder.hotend.y_offset`
* Description: Y-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for physical nozzle spacing when nozzles are not aligned along the X-axis only. Positive values indicate the nozzle is behind the primary extruder (toward +Y). Negative values indicate the nozzle is in front of the primary extruder (toward -Y).
  * Less common than x_offset since most multi-extruder systems align on X-axis
  * T0 (primary extruder) should always have offset 0,0,0
  * Measure from T0 nozzle tip to this extruder's nozzle tip
  * Should be calibrated with alignment test patterns
* Related settings: `extruder.x_offset`, `extruder.z_offset`, `extruder.enable`
* Related pages: extruder, multiple-extruders
* Example configuration:
  * extruder.hotend.y_offset 0  # Primary extruder (T0)
  * extruder.hotend2.y_offset 0  # Second extruder aligned on X-axis
  * extruder.hotend3.y_offset -5  # Third extruder 5mm in front

---

#### `z_offset`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:101`
* Typical values: `0` (most common), `0.15` (slightly higher), `-0.05` (slightly lower)
* Corresponding v1 setting: `extruder.hotend.z_offset`
* Corresponding v2 setting: `extruder.hotend.z_offset`
* Description: Z-axis offset of this extruder's nozzle from the primary extruder (T0) in millimeters. Used only in multi-extruder setups to compensate for different nozzle heights when nozzles are not at exactly the same Z level. Positive values indicate the nozzle is higher than the primary extruder. Negative values indicate the nozzle is lower. This affects print quality if extruders have different nozzle lengths. Calibrate carefully to ensure consistent layer heights when switching tools.
  * IMPORTANT: This affects print quality significantly
  * Incorrect offset causes first layer problems or crashes into bed
  * Should be calibrated by printing test patterns with each extruder
  * Even small differences (0.05mm) can affect print quality
  * T0 (primary extruder) should always have offset 0,0,0
* Related settings: `extruder.x_offset`, `extruder.y_offset`, `zprobe.probe_height`
* Related pages: extruder, multiple-extruders, extruder-guide
* Example configuration:
  * extruder.hotend.z_offset 0  # Primary extruder (T0) reference height
  * extruder.hotend2.z_offset 0.15  # Second extruder nozzle is 0.15mm higher
  * extruder.hotend3.z_offset -0.05  # Third extruder nozzle is 0.05mm lower

---

#### `retract_length`

* Type: `number`
* Default: `3`
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:104`
* Typical values: `0.5` (direct drive, short), `1.5` (direct drive, typical), `4` (Bowden, short), `6` (Bowden, typical), `8` (Bowden, long tube)
* Corresponding v1 setting: `extruder.hotend.retract_length`
* Corresponding v2 setting: `extruder.hotend.retract_length`
* Description: Amount of filament to retract during firmware retraction in millimeters. Used by G10 (retract) and G11 (unretract) commands. Retraction pulls filament back to reduce nozzle pressure and prevent oozing/stringing during non-printing travel moves. Bowden extruders need 4-8mm due to longer filament path and tube compression. Direct drive extruders need only 0.5-2mm due to short path between drive gear and nozzle. Too little causes stringing and oozing. Too much causes grinding, air gaps after unretract, and possible clogging.
  * One of the most important tuning parameters for print quality
  * Bowden systems need significantly more than direct drive
  * Start conservative and increase if stringing occurs
  * Too much retraction can cause jams and grinding
  * Different materials may need different values
* Related M-Codes:
  * G10 - Perform firmware retraction using this length
  * G11 - Perform firmware unretraction (recover)
  * M207 S<length> - Set retract length at runtime (mm)
  * M207 S<length> P<extruder_id> - Set for specific extruder instance
  * M500 - Save to config-override
* Related settings: `extruder.retract_feedrate`, `extruder.retract_recover_length`, `extruder.retract_zlift_length`
* Related pages: extruder, extruder-guide, g10, g11
* Example configuration:
  * extruder.hotend.retract_length 1.5  # Direct drive extruder
  * extruder.hotend.retract_length 6  # Bowden extruder with medium tube
  * extruder.hotend2.retract_length 4.5  # Bowden with shorter tube

---

#### `retract_feedrate`

* Type: `number`
* Default: `45`
* Units: mm/s
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:105`
* Typical values: `20` (conservative, flexible filament), `45` (default, general purpose), `60` (fast retraction)
* Corresponding v1 setting: `extruder.hotend.retract_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_feedrate`
* Description: Speed at which filament is retracted during firmware retraction in mm/s. Used by G10 command. This is stored and used internally in mm/s, but the M207 F parameter expects mm/min for compatibility with other firmware (the firmware automatically converts by multiplying by 60). Faster retraction reduces stringing by quickly reducing nozzle pressure, but may cause grinding, skipped steps, or filament deformation. Typical values range from 20-60 mm/s (1200-3600 mm/min).
  * NOTE: Config value is in mm/s, but M207 F parameter is in mm/min
  * Faster is generally better for reducing stringing
  * Limited by extruder.max_speed setting
  * Too fast causes grinding or skipped steps
  * Flexible filaments need slower speeds (15-25 mm/s)
* Related M-Codes:
  * G10 - Perform retraction at this speed
  * M207 F<speed_mm_per_min> - Set retract speed at runtime (in mm/min, not mm/s!)
  * M207 S<len> F<speed> P<extruder_id> - Set length and speed for specific extruder
  * M500 - Save to config-override
* Related settings: `extruder.retract_length`, `extruder.retract_recover_feedrate`, `extruder.max_speed`
* Related pages: extruder, g10, extruder-guide
* Example configuration:
  * extruder.hotend.retract_feedrate 45  # 45 mm/s = 2700 mm/min (default)
  * extruder.hotend.retract_feedrate 30  # 30 mm/s = 1800 mm/min (conservative)
  * extruder.hotend2.retract_feedrate 60  # 60 mm/s = 3600 mm/min (fast)

---

#### `retract_recover_length`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:106`
* Typical values: `0` (most common, recover exactly what was retracted), `0.2` (slight over-recovery), `-0.1` (slight under-recovery)
* Corresponding v1 setting: `extruder.hotend.retract_recover_length`
* Corresponding v2 setting: `extruder.hotend.retract_recover_length`
* Description: Additional length of filament to extrude when recovering (unretract) beyond the retracted amount. Used by G11 command. Total recover distance = retract_length + retract_recover_length. This compensates for filament that may ooze during travel moves or pressure lost in the nozzle during the retraction pause. Small positive values (0.1-0.3mm) can prevent under-extrusion immediately after retract by slightly over-recovering. Negative values cause under-recovery if too much pressure builds up during retraction.
  * Most users leave this at 0 (recover exactly what was retracted)
  * Positive values add extra filament on unretract (over-recovery)
  * Negative values reduce unretract amount (under-recovery)
  * Useful for fine-tuning to eliminate blobs or gaps after travel
  * Start at 0 and adjust only if you see consistent problems
* Related M-Codes:
  * G11 - Perform unretract using retract_length + this value
  * M208 S<length> - Set additional recover length at runtime (mm)
  * M208 S<length> P<extruder_id> - Set for specific extruder instance
  * M500 - Save to config-override
* Related settings: `extruder.retract_length`, `extruder.retract_recover_feedrate`
* Related pages: extruder, g11, extruder-guide
* Example configuration:
  * extruder.hotend.retract_recover_length 0  # Most common, exact recovery
  * extruder.hotend.retract_recover_length 0.2  # Slight over-recovery to prevent gaps
  * extruder.hotend2.retract_recover_length -0.1  # Slight under-recovery to prevent blobs

---

#### `retract_recover_feedrate`

* Type: `number`
* Default: `8`
* Units: mm/s
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:107`
* Typical values: `8` (default, conservative), `25` (faster recovery), `40` (very fast)
* Corresponding v1 setting: `extruder.hotend.retract_recover_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_recover_feedrate`
* Description: Speed at which filament is recovered (unretracted) during firmware unretraction in mm/s. Used by G11 command. This is stored and used internally in mm/s, but the M208 F parameter expects mm/min for compatibility with other firmware. This should typically be slower than retract_feedrate to avoid pressure spikes and blobs at the start of extrusion after travel. Typical values range from 8-40 mm/s (480-2400 mm/min), usually 50-80% of retract_feedrate.
  * NOTE: Config value is in mm/s, but M208 F parameter is in mm/min
  * Should usually be slower than retract_feedrate
  * Too fast causes blobs at the start of extrusion after travel
  * Too slow increases print time and may cause under-extrusion
  * Default of 8 mm/s is quite conservative
* Related M-Codes:
  * G11 - Perform unretract at this speed
  * M208 F<speed_mm_per_min> - Set recover speed at runtime (in mm/min, not mm/s!)
  * M208 S<len> F<speed> P<extruder_id> - Set length and speed for specific extruder
  * M500 - Save to config-override
* Related settings: `extruder.retract_recover_length`, `extruder.retract_feedrate`
* Related pages: extruder, g11, extruder-guide
* Example configuration:
  * extruder.hotend.retract_recover_feedrate 8  # 8 mm/s = 480 mm/min (default, conservative)
  * extruder.hotend.retract_recover_feedrate 25  # 25 mm/s = 1500 mm/min (faster)
  * extruder.hotend2.retract_recover_feedrate 40  # 40 mm/s = 2400 mm/min (very fast)

---

#### `retract_zlift_length`

* Type: `number`
* Default: `0` (Z-hop disabled)
* Units: mm
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:108`
* Typical values: `0` (disabled, most common), `0.2` (small lift), `0.5` (medium lift), `2.0` (tall features)
* Corresponding v1 setting: `extruder.hotend.retract_zlift_length`
* Corresponding v2 setting: `extruder.hotend.retract_zlift_length`
* Description: Amount to lift the Z-axis during retraction in millimeters (Z-hop or Z-lift feature). When G10 is executed, the nozzle lifts by this amount after retracting filament. When G11 is executed, the nozzle lowers back before unretraction. Set to 0 to disable Z-lift. Z-lift prevents nozzle dragging across already-printed surfaces, scars and marks during travel moves, and collisions with tall features. NOTE: Z-lift is automatically cancelled if an absolute Z move (G0/G1 with Z parameter) occurs between G10 and G11, preventing conflicts with explicit Z positioning.
  * Adds travel time but improves surface quality on travel moves
  * Useful for preventing nozzle from catching on printed parts
  * Essential for prints with many tall thin features
  * 0.2mm is typical for most prints
  * Higher values needed for very tall or dense prints
  * Disabled (0) is most common for simple prints
* Related M-Codes:
  * G10 - Lift Z by this amount after retracting
  * G11 - Lower Z by this amount before unretract (unless cancelled)
  * M207 Z<height> - Set Z-lift height at runtime (mm)
  * M207 Z<height> P<extruder_id> - Set for specific extruder instance
  * M500 - Save to config-override
* Related settings: `extruder.retract_zlift_feedrate`, `extruder.retract_length`, `motion_control.z_axis_max_speed`
* Related pages: extruder, g10, g11, extruder-guide
* Example configuration:
  * extruder.hotend.retract_zlift_length 0  # Z-hop disabled (most common)
  * extruder.hotend.retract_zlift_length 0.2  # Small Z-hop for cleaner travel
  * extruder.hotend2.retract_zlift_length 0.5  # Larger Z-hop for tall features

---

#### `retract_zlift_feedrate`

* Type: `number`
* Default: `6000` (100 mm/s when converted from mm/min)
* Units: mm/min (NOTE: This is the ONLY extruder setting using mm/min instead of mm/s)
* Module: `extruder`
* Context: Module instance setting
* Defined in: `modules/tools/extruder/Extruder.cpp:109`
* Typical values: `6000` (100 mm/s, default), `9000` (150 mm/s, fast printer), `4800` (80 mm/s, conservative)
* Corresponding v1 setting: `extruder.hotend.retract_zlift_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_zlift_feedrate`
* Description: Speed for Z-axis movement during Z-lift operations in mm/min. Used for both lifting (during G10) and lowering (during G11) moves when retract_zlift_length is greater than 0. CRITICAL: This is the ONLY extruder setting that uses mm/min instead of mm/s. The default value of 6000 mm/min equals 100 mm/s (the firmware divides by 60 at line 109: "by_default(100 * 60)->as_number() / 60.0F"). This should typically match your Z-axis max_speed to avoid unnecessary slowdown during Z-hop moves.
  * CRITICAL: This is the ONLY extruder setting using mm/min instead of mm/s
  * Config file value is in mm/min (divide by 60 to get mm/s)
  * Default 6000 mm/min = 100 mm/s (quite fast)
  * Should typically match motion_control.z_axis_max_speed
  * Too fast may cause layer shifts on delta printers or skipped Z steps
  * Too slow increases print time significantly on prints with many retractions
  * Only takes effect if retract_zlift_length > 0
* Related M-Codes:
  * M207 Q<speed_mm_per_min> - Set Z-lift speed at runtime (in mm/min)
  * M207 Q<speed> P<extruder_id> - Set Z-lift speed for specific extruder
  * M500 - Save current value to config-override
  * M501 - Reload from config-override
* Related settings: `extruder.retract_zlift_length`, `motion_control.z_axis_max_speed`, `extruder.retract_feedrate`
* Related pages: extruder, g10, g11, motion-control
* Example configuration:
  * extruder.hotend.retract_zlift_feedrate 6000  # 100 mm/s (default, general purpose)
  * extruder.hotend.retract_zlift_feedrate 9000  # 150 mm/s (fast delta printer)
  * extruder.hotend2.retract_zlift_feedrate 4800  # 80 mm/s (second extruder, more conservative)

---

### Related Documentation

- [Extruder Configuration Guide](extruder.md) - Detailed setup instructions and calibration procedures
- [Extruder Guide](extruder-guide.md) - Step-by-step guide to configuring extruders
- [Multiple Extruders](multiple-extruders.md) - Multi-extruder setup and tool changing
- [Temperature Control](temperaturecontrol.md) - Hotend temperature configuration
- [G10 Command](g10.md) - Firmware retraction G-code
- [G11 Command](g11.md) - Firmware unretraction G-code

### Firmware Retraction G-Codes

**G10** - Firmware Retract
- Retracts filament by `retract_length` at `retract_feedrate`
- Lifts Z by `retract_zlift_length` at `retract_zlift_feedrate` (if enabled)

**G11** - Firmware Unretract
- Lowers Z by `retract_zlift_length` (if lifted and not cancelled)
- Recovers filament by `retract_length + retract_recover_length` at `retract_recover_feedrate`

**M207** - Set Firmware Retraction Parameters
```
M207 S<length> F<feedrate> Z<zlift> Q<zlift_feedrate> P<extruder_id>
```
- S: Retract length in mm
- F: Retract feedrate in mm/min (NOT mm/s)
- Z: Z-lift length in mm
- Q: Z-lift feedrate in mm/min (NOT mm/s)
- P: Extruder ID (optional, defaults to currently selected)

**M208** - Set Firmware Recover Parameters
```
M208 S<additional_length> F<feedrate> P<extruder_id>
```
- S: Additional recover length in mm
- F: Recover feedrate in mm/min (NOT mm/s)
- P: Extruder ID (optional)

**M203** - Set Maximum Feedrates
```
M203 E<speed> V<volumetric_rate> P<extruder_id>
```
- E: Max extruder speed in mm/s
- V: Max volumetric rate in mm³/s (when volumetric extrusion enabled)
- P: Extruder ID (optional)

**M204** - Set Acceleration
```
M204 E<acceleration> P<extruder_id>
```
- E: Extruder acceleration in mm/s²
- P: Extruder ID (optional)

**M92** - Set Steps Per MM
```
M92 E<steps_per_mm> P<extruder_id>
```
- E: Steps per millimeter
- P: Extruder ID (optional)

**M200** - Set Filament Diameter (Volumetric Extrusion)
```
M200 D<diameter> P<extruder_id>
M200 D0  # Disable volumetric extrusion
```
- D: Filament diameter in mm (0 to disable)
- P: Extruder ID (optional)

**M221** - Set Flow Rate Percentage
```
M221 S<percentage>
```
- S: Flow rate percentage (100 = normal, 110 = 10% more, etc.)

### Multi-Extruder Tool Selection

**T0, T1, T2...** - Select active extruder
```
T0  ; Select first extruder
T1  ; Select second extruder
```

When switching tools, firmware automatically applies x_offset, y_offset, and z_offset values to maintain correct positioning of printed features.

### Important Notes

**Unit Inconsistency:**
- `retract_zlift_feedrate` is in mm/min (divide by 60 to get mm/s)
- All other extruder speeds are in mm/s
- M207 F and Q parameters expect mm/min
- M208 F parameter expects mm/min

**Pin Configuration:**
- All three pins (step_pin, dir_pin, en_pin) must be configured for extruder to function
- Use `nc` (not connected) to explicitly disable unused pins
- Pin inversions (!) are common, especially for enable pins

**Calibration Priority:**
1. `steps_per_mm` - Most critical, affects all extrusion
2. `retract_length` - Second most critical, affects print quality
3. `retract_feedrate` - Fine-tune after length is correct
4. Other retraction settings as needed for specific issues

---

## Laser Module

# Smoothieware v1 Laser Module Configuration Settings

This document provides comprehensive configuration reference for all laser module settings in Smoothieware v1.

---

#### `laser_module_enable`

* Type: `bool`
* Default: `false`
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:53`
* Valid values: `true`, `false`
* Corresponding v1 setting: `laser_module_enable`
* Corresponding v2 setting: `laser.enable`
* Description: Controls whether the laser module is activated in Smoothieware. When set to false, the module is completely unloaded to free system resources. When enabled, the laser module supports both laser diodes and CO2 laser tubes for cutting and engraving applications. The module must be enabled before any other laser settings take effect.
  * If disabled, all other laser configuration settings are ignored.
  * The module is automatically unloaded from memory when disabled to conserve RAM.
  * Must be enabled for laser cutting, engraving, or any laser-related operations.
* Related pages: laser, laser-cutter-guide, laser-guides, configuration-options
* Example configuration:
  * laser_module_enable true  # Enable laser module for laser cutting/engraving
  * laser_module_enable false  # Disable laser module (default, saves memory)

#### `laser_module_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:61`
* Valid values: PWM-capable pins only
  * Port 2: `2.0`, `2.1`, `2.2`, `2.3`, `2.4`, `2.5`
  * Port 1: `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`
  * Port 3: `3.25`, `3.26`
  * Pin can have `!` prefix for inverted logic (e.g., `!2.5`)
  * `nc` for not connected
* Deprecated: Replaced by `laser_module_pwm_pin` for clarity
* Corresponding v1 setting: `laser_module_pin`
* Corresponding v2 setting: none (use `laser.pwm_pin` instead)
* Description: Legacy parameter that specifies the pin controlling the laser through PWM (Pulse Width Modulation). This setting has been superseded by `laser_module_pwm_pin` for improved clarity. If this pin is not connected, the system will check `laser_module_pwm_pin` instead. Only specific pins on the Smoothieboard support hardware PWM required for laser control.
  * CRITICAL: Only hardware PWM pins are supported. Using non-PWM pins will disable the laser module with error message.
  * If invalid pin is specified, firmware prints error: "Error: Laser cannot use P{port}.{pin} (P2.0 - P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 only). Laser module disabled."
  * This parameter is checked first, then `laser_module_pwm_pin` is checked if this is not connected.
  * Deprecated in favor of the more descriptive `laser_module_pwm_pin` setting.
* Related settings: `laser_module_pwm_pin`, `laser_module_ttl_pin`
* Related pages: laser, pinout, pin-configuration, pwm-capable
* Example configuration:
  * laser_module_pin 2.5  # Use pin 2.5 for PWM laser control (deprecated)
  * laser_module_pin !2.5  # Inverted PWM on pin 2.5 (for active-low drivers)
  * laser_module_pin nc  # Not connected, will check laser_module_pwm_pin instead

#### `laser_module_pwm_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:65`
* Valid values: PWM-capable pins only
  * Port 2: `2.0` through `2.5`
  * Port 1: `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`
  * Port 3: `3.25`, `3.26`
  * Prefix with `!` for inverted PWM signal (e.g., `!2.5`)
  * `nc` for not connected
* Required: yes (laser module will be disabled if neither this nor laser_module_pin is connected to a valid PWM pin)
* Corresponding v1 setting: `laser_module_pwm_pin`
* Corresponding v2 setting: `laser.pwm_pin`
* Description: The preferred and more descriptive parameter for specifying the PWM control pin for the laser. This pin controls laser power through pulse width modulation, where the duty cycle determines the laser output power from 0% (off) to 100% (full power). Supports inverted logic for laser drivers that require active-low control signals. Only pins with hardware PWM capability can be used.
  * This is the recommended parameter instead of the legacy `laser_module_pin` setting.
  * PWM duty cycle directly controls laser power output percentage.
  * Pin validation occurs at module load time during firmware boot.
  * CRITICAL: Invalid pin selection will disable the laser module with detailed error message showing which pins are valid.
  * Inverting pin logic with `!` prefix is useful for some laser driver circuits that are active-low.
  * The pin's PWM period is configured via `laser_module_pwm_period` setting.
* Related settings: `laser_module_pin`, `laser_module_pwm_period`, `laser_module_ttl_pin`
* Related pages: laser, pinout, pin-configuration, pwm-capable
* Example configuration:
  * laser_module_pwm_pin 2.5  # Standard PWM control on pin 2.5
  * laser_module_pwm_pin !2.5  # Inverted PWM for active-low laser drivers
  * laser_module_pwm_pin 2.4  # Alternative PWM pin for different board layout

#### `laser_module_ttl_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:84`
* Valid values: Any valid Smoothieboard GPIO pin
  * Any pin in format `port.pin` (e.g., `1.30`, `2.7`, `4.28`)
  * Prefix with `!` for inverted logic (e.g., `!1.30`)
  * `nc` to disable TTL output
* Corresponding v1 setting: `laser_module_ttl_pin`
* Corresponding v2 setting: `laser.ttl_pin`
* Description: Specifies an optional TTL (Transistor-Transistor Logic) control pin that provides a simple on/off signal synchronized with laser firing. This pin switches on when the laser fires and off when the laser stops, independent of the PWM power level. This is useful for controlling external laser power supplies, air assist systems, fume extraction fans, or safety interlocks that need a binary on/off signal separate from the proportional PWM power control.
  * This is a digital on/off signal, NOT PWM - it is either high or low.
  * Pin state changes only when laser transitions between firing and not firing.
  * Commonly used to enable/disable air assist compressors or extraction fans.
  * Can control laser power supply enable pins for additional safety.
  * Useful for safety interlocks that monitor when laser is active.
  * Pin is set low (0) when laser is off, high (1) when laser is on (or inverted if `!` prefix used).
* Related settings: `laser_module_pwm_pin`
* Related pages: laser, laser-cutter-guide, pin-configuration
* Example configuration:
  * laser_module_ttl_pin 1.30  # TTL signal on pin 1.30 for air assist control
  * laser_module_ttl_pin !1.30  # Inverted TTL (active-low) for some control circuits
  * laser_module_ttl_pin 2.7  # Alternative pin for power supply enable signal

#### `laser_module_pwm_period`

* Type: `number`
* Default: `20` (50 kHz)
* Units: microseconds
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:96`
* Typical values: `20` (50 kHz, default for most diode lasers), `50` (20 kHz for some drivers), `100` (10 kHz for lower frequency), `10` (100 kHz for very high frequency)
* Corresponding v1 setting: `laser_module_pwm_period`
* Corresponding v2 setting: none (v2 uses `pwm1.frequency` in Hz instead)
* Names match but different functionality: `v2.pwm1.frequency` uses frequency in Hz while v1 uses period in microseconds - these are inverse relationships requiring calculation (frequency = 1,000,000 / period)
* Description: Sets the PWM period (and thus frequency) for laser control in microseconds. The PWM frequency equals 1,000,000 divided by this period value. This frequency affects how smoothly the laser power can be controlled and must be appropriate for your specific laser driver electronics. The system uses this period to limit the maximum rate of power adjustments to never faster than the PWM frequency or 1kHz, whichever is lower, preventing excessive update overhead.
  * PWM frequency calculation: frequency (Hz) = 1,000,000 / period (µs)
  * Default period of 20 µs = 50,000 Hz (50 kHz) frequency
  * Lower period values = higher frequency = smoother power control
  * Higher period values = lower frequency = may cause visible pulsing
  * Some laser drivers require specific frequency ranges - consult driver specifications
  * Power update rate is automatically limited to minimum of PWM frequency or 1000 Hz
  * Too high frequency may exceed driver switching capabilities
  * Too low frequency may cause visible artifacts in raster engraving
* Related settings: `laser_module_pwm_pin`, `laser_module_proportional_power`
* Related pages: laser, laser-cutter-guide
* Example configuration:
  * laser_module_pwm_period 20  # 50 kHz (default, works for most diode lasers)
  * laser_module_pwm_period 50  # 20 kHz (lower frequency for some drivers)
  * laser_module_pwm_period 100  # 10 kHz (even lower frequency, may show pulsing)
  * laser_module_pwm_period 10  # 100 kHz (very high frequency for fast switching drivers)

#### `laser_module_maximum_power`

* Type: `number`
* Default: `1.0` (100%)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:100`
* Minimum value: `0.0` (enforced by confine() function at Laser.cpp:292)
* Maximum value: `1.0` (enforced by confine() function at Laser.cpp:292)
* Typical values: `0.8` (80% max power, common safety limit), `0.6` (60% max power for lower power operations), `1.0` (100% max power, full range), `0.9` (90% max power for tube longevity)
* Valid values: `0.0` to `1.0` (0% to 100% duty cycle)
  * Values represent PWM duty cycle as decimal fraction
  * `0.0` = laser completely off
  * `1.0` = maximum possible laser power
  * Intermediate values proportionally limit maximum power
* Corresponding v1 setting: `laser_module_maximum_power`
* Corresponding v2 setting: `laser.maximum_power`
* Description: Sets the maximum PWM duty cycle that will be applied to the laser, acting as both a safety limit and calibration parameter. This value represents the highest power output the laser will achieve, even if G-code commands request 100% power. All S-values in G-code are scaled to this maximum. Setting this below 1.0 is useful for laser safety by preventing accidental full-power operation, calibrating the maximum power to match specific material requirements, or protecting lasers that shouldn't operate at their full rated power continuously. This creates a ceiling that cannot be exceeded during normal operation.
  * Acts as a safety ceiling for laser power - cannot be exceeded by G-code
  * All power commands are scaled to this maximum value
  * Example: Setting `0.8` means G-code S100% produces 80% actual laser power
  * Useful for preventing damage to both materials and laser tube/diode
  * Allows safe operation below rated maximum to extend laser life
  * Can be adjusted to account for laser aging or degradation
  * Combined with minimum_power to define the usable power range
  * WARNING: Does not provide emergency shutoff - use kill switch for safety
* Related settings: `laser_module_minimum_power`, `laser_module_maximum_s_value`
* Related pages: laser, laser-cutter-guide, laser-warning
* Example configuration:
  * laser_module_maximum_power 1.0  # 100% power (full range, default)
  * laser_module_maximum_power 0.8  # 80% max power (common safety limit)
  * laser_module_maximum_power 0.6  # 60% max power (conservative for new users)
  * laser_module_maximum_power 0.9  # 90% max power (extends CO2 tube life)

#### `laser_module_minimum_power`

* Type: `number`
* Default: `0.0` (off during travel)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:106`
* Minimum value: `0.0` (enforced by confine() function at Laser.cpp:292)
* Maximum value: `1.0` (enforced by confine() function at Laser.cpp:292)
* Typical values: `0.0` (default, laser completely off during travel), `0.01` (1% keepalive for diode stability), `0.02` (2% gentle keepalive), `0.05` (5% higher keepalive for thermal stability)
* Valid values: `0.0` to `1.0` (0% to 100% duty cycle)
  * Represents PWM duty cycle as decimal fraction
  * Typically set to very low values (1-5%)
  * Higher values rarely used except for specific laser requirements
* Corresponding v1 setting: `laser_module_minimum_power`
* Corresponding v2 setting: `laser.minimum_power`
* Description: Sets the minimum PWM duty cycle (baseline power) for the laser during travel moves and as a floor for all laser operations. This is particularly useful for laser diodes that benefit from staying slightly active to prevent thermal cycling and maintain stable operation, or that require a minimum current to remain in their operating range. Also known as "tickle power" or "keepalive power" in some contexts. When proportional power is enabled, the laser uses this power level during G0 (rapid) travel moves. During cutting operations, the actual power is scaled between this minimum and the maximum power setting.
  * Previously configured via deprecated `laser_module_tickle_power` parameter
  * Keeps laser diodes thermally stable by preventing complete shutoff
  * Reduces thermal stress on laser diodes from constant on/off cycling
  * Some diodes require minimum current to maintain stable emission
  * Used as baseline during G0 rapid moves when proportional power enabled
  * Actual cutting power = (maximum_power - minimum_power) × S_value + minimum_power
  * Set to `0.0` for complete laser shutoff during travel (safer, more common)
  * WARNING: Non-zero values mean laser is always slightly active when module enabled
  * Higher values may cause unwanted marking during travel moves
* Related settings: `laser_module_maximum_power`, `laser_module_tickle_power`, `laser_module_proportional_power`
* Related pages: laser, laser-cutter-guide
* Example configuration:
  * laser_module_minimum_power 0.0  # Laser completely off during travel (default, safest)
  * laser_module_minimum_power 0.01  # 1% keepalive for diode thermal stability
  * laser_module_minimum_power 0.02  # 2% gentle keepalive (common for diode lasers)
  * laser_module_minimum_power 0.05  # 5% higher keepalive for some diode types

#### `laser_module_maximum_s_value`

* Type: `number`
* Default: `1.0` (S values from 0.0 to 1.0)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:109`
* Typical values: `1.0` (S values 0.0-1.0, default Smoothie style), `100` (S values 0-100, percentage style), `255` (S values 0-255, 8-bit style), `1000` (S values 0-1000 for finer control)
* Corresponding v1 setting: `laser_module_maximum_s_value`
* Corresponding v2 setting: `laser.maximum_s_value`
* Description: Defines the S-value in G-code that represents maximum laser power (100%). This scaling parameter allows you to use different S-value ranges in your G-code without changing other laser configuration settings. For example, if set to 1.0, then `S1.0` means full power. If set to 255, then `S255` means full power. This provides compatibility with different CAM software packages that may use different S-value conventions such as 0-1 (fractional), 0-100 (percentage), 0-255 (8-bit), or other scales.
  * Does not affect actual laser power output, only G-code interpretation
  * Allows using G-code from different CAM packages without modification
  * Power calculation: requested_power = S_value / maximum_s_value
  * Example: With maximum_s_value=100, `S50` means 50% power
  * Example: With maximum_s_value=255, `S128` means approximately 50% power
  * Example: With maximum_s_value=1.0, `S0.5` means 50% power
  * Useful for software that generates integer S-values (0-100, 0-255)
  * Setting to 100 allows percentage-style commands: `S50` for 50% instead of `S0.5`
  * Does not change the maximum_power or minimum_power settings
* Related settings: `laser_module_maximum_power`
* Related pages: laser, supported-g-codes, laser-cutter-guide
* Example configuration:
  * laser_module_maximum_s_value 1.0  # S values 0.0-1.0 (default Smoothie convention)
  * laser_module_maximum_s_value 100  # S values 0-100 (percentage style for easier use)
  * laser_module_maximum_s_value 255  # S values 0-255 (8-bit style, common in some software)
  * laser_module_maximum_s_value 1000  # S values 0-1000 (finer control, 0.1% resolution)

#### `laser_module_proportional_power`

* Type: `bool`
* Default: `true`
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:94`
* Valid values: `true`, `false`
* Corresponding v1 setting: `laser_module_proportional_power`
* Corresponding v2 setting: `laser.proportional_power`
* Description: Enables or disables automatic power scaling based on actual instantaneous movement speed. When enabled (default), the laser power is continuously adjusted proportionally to the current velocity, automatically compensating for acceleration and deceleration phases. This ensures consistent energy density (joules per unit area, or "photons per square millimeter") across the entire cut path, even as the machine speeds up at the beginning of moves, slows down for corners, and decelerates at the end of moves. Disabling this feature results in constant power output regardless of speed variations, which may be desired for certain applications.
  * When enabled, power calculation: actual_power = requested_power × (current_speed / nominal_speed)
  * Ensures uniform engraving depth and cutting quality despite speed variations
  * Compensates for machine acceleration and deceleration automatically
  * Prevents over-burning in corners where machine slows down
  * Prevents under-burning at start/end of moves during acceleration
  * Disable for applications needing constant power regardless of speed (some marking operations)
  * Works by continuously monitoring the stepper acceleration/deceleration trapezoid curve
  * Power updates occur at the PWM frequency or 1 kHz, whichever is lower
  * Can also be controlled at runtime via M221 P command
  * WARNING: Disabling may cause uneven cuts/engraving due to speed variations
* Related M-Codes:
  * M221 P0 - Disable proportional power (constant power mode)
  * M221 P1 - Enable proportional power (velocity compensation mode)
  * M221 S<percent> - Scale laser power by percentage (e.g., M221 S80 for 80%)
  * M221 - Query current power scale and proportional power status
* Related settings: `laser_module_minimum_power`, `laser_module_maximum_power`
* Related pages: laser, laser-cutter-guide, supported-g-codes
* Example configuration:
  * laser_module_proportional_power true  # Enable velocity-proportional power (default, recommended)
  * laser_module_proportional_power false  # Disable, use constant power (for special applications)

#### `laser_module_tickle_power`

* Type: `number`
* Default: `0` (off)
* Module: `laser`
* Context: Global module setting
* Defined in: `src/modules/tools/laser/Laser.cpp:103`
* Valid values: `0.0` to `1.0` (0% to 100% duty cycle)
* Deprecated: Replaced by `laser_module_minimum_power` in current firmware
* Corresponding v1 setting: `laser_module_tickle_power`
* Corresponding v2 setting: none (use `laser.minimum_power` instead)
* Description: This parameter has been deprecated and replaced by `laser_module_minimum_power`. It originally set a small baseline amount of power to keep the laser "tickled" (slightly active) during travel moves and as a floor for all operations. If you have old configuration files using this parameter, it will still work as it provides the fallback default value for `laser_module_minimum_power` when that setting is not explicitly specified, but you should migrate to using `laser_module_minimum_power` instead for clarity and future compatibility.
  * DEPRECATED - Use `laser_module_minimum_power` for all new configurations
  * Kept for backward compatibility with old config files only
  * Will be used as the default value for `laser_module_minimum_power` if that setting is not present
  * Same functionality as `laser_module_minimum_power` - sets baseline laser power
  * May be removed in future firmware versions
* Related settings: `laser_module_minimum_power`
* Related pages: laser, laser-cutter-guide
* Example configuration:
  * # Old (deprecated, but still works):
  * laser_module_tickle_power 0.02
  * # New (preferred, recommended):
  * laser_module_minimum_power 0.02

---

## Configuration Summary

The laser module in Smoothieware v1 provides comprehensive control over laser cutting and engraving operations. A complete laser configuration typically includes:

**Minimal Configuration:**
```
laser_module_enable true
laser_module_pwm_pin 2.5
```

**Recommended Configuration:**
```
laser_module_enable true
laser_module_pwm_pin 2.5
laser_module_ttl_pin 1.30
laser_module_pwm_period 20
laser_module_maximum_power 0.8
laser_module_minimum_power 0.0
laser_module_maximum_s_value 1.0
laser_module_proportional_power true
```

**Advanced Configuration with Safety Limits:**
```
laser_module_enable true
laser_module_pwm_pin !2.5
laser_module_ttl_pin !1.30
laser_module_pwm_period 20
laser_module_maximum_power 0.75
laser_module_minimum_power 0.02
laser_module_maximum_s_value 100
laser_module_proportional_power true
```

## PWM-Capable Pins Reference

Only these pins support the hardware PWM required for laser control:

* **Port 2:** P2.0, P2.1, P2.2, P2.3, P2.4, P2.5
* **Port 1:** P1.18, P1.20, P1.21, P1.23, P1.24, P1.26
* **Port 3:** P3.25, P3.26

Attempting to use non-PWM pins will result in module disable with an error message indicating valid pin options.

## Related Documentation

* laser - Main laser module documentation
* laser-cutter-guide - Step-by-step laser cutter setup guide
* laser-guides - Machine-specific laser conversion guides
* laser-options - Quick reference table of laser settings
* pinout - Smoothieboard pin layout and capabilities
* pwm-capable - PWM pin reference table
* configuration-options - All Smoothieware configuration options
* pin-configuration - Pin modifier syntax reference

---

*This documentation covers all 9 laser module configuration settings for Smoothieware v1 with comprehensive details verified from source code.*

---

## Temperature Control

# Temperature Control Module - Configuration Settings Reference

## Module Overview

The Temperature Control module manages heating and cooling for components like hotends, heated beds, and chamber heaters. It supports multiple sensor types (thermistors, thermocouples, RTDs), control algorithms (PID, bang-bang), and comprehensive safety features including thermal runaway detection.

---

## Core Module Settings

#### `enable`

* Type: `bool`
* Default: `true`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:88`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.enable`
* Corresponding v2 setting: `temperature control.{name}.enable`
* Description: Enables or disables the temperature control module instance. You can create as many temperature control modules as needed by giving each a unique name and setting its enable option to true.
  * Each module instance operates independently
  * Common instances include `hotend`, `bed`, `hotend2`, and `chamber`
  * Module names are arbitrary - choose descriptive names
  * Multiple instances can be created for multi-hotend or multi-zone heating systems
* Related settings: `heater_pin`, `thermistor_pin`, `designator`
* Related pages: temperaturecontrol, temperaturecontrol-pid, multiple-extruders
* Example configuration:
  * temperature_control.hotend.enable true  # Enable primary hotend
  * temperature_control.bed.enable true  # Enable heated bed
  * temperature_control.hotend2.enable true  # Enable second hotend for dual extrusion
  * temperature_control.chamber.enable false  # Disable chamber heater

---

#### `thermistor_pin`

* Type: `pin`
* Default: `0.23`
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`, `ad8495`, or similar analog sensors)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:60` (sensor-specific)
* Valid values: Pin specification in format `port.pin`
  * `0.23` - TH1 (Thermistor input 1)
  * `0.24` - TH2 (Thermistor input 2)
  * `0.25` - TH3 (Thermistor input 3)
  * `0.26` - TH4 (Thermistor input 4)
  * Any valid ADC-capable pin (see Smoothieboard pinout)
* Corresponding v1 setting: `temperature_control.{name}.thermistor_pin`
* Corresponding v2 setting: `temperature control.{name}.thermistor_pin` (uses ADC notation like `ADC1_1`)
* Description: Specifies which ADC (Analog-to-Digital Converter) pin is connected to the temperature sensor. Smoothieboard provides dedicated thermistor inputs TH1 through TH4 with built-in 4.7kΩ pullup resistors.
  * Only used when sensor type is `thermistor`, `ad8495`, or other analog sensors
  * Not used with SPI-based sensors like `max31855`
  * TH1-TH4 inputs have built-in 4.7kΩ pullup resistors to 3.3V
  * Consult your board's pinout diagram for correct pin assignments
* Related settings: `sensor`, `thermistor`, `heater_pin`
* Related pages: temperaturecontrol, pinout, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.thermistor_pin 0.23  # TH1 for primary hotend
  * temperature_control.bed.thermistor_pin 0.24  # TH2 for heated bed
  * temperature_control.hotend2.thermistor_pin 0.25  # TH3 for second hotend
  * temperature_control.chamber.thermistor_pin 0.26  # TH4 for chamber

---

#### `heater_pin`

* Type: `pin`
* Default: `2.7`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:163`
* Valid values: Pin specification in format `port.pin` or `nc` for no heater
  * `2.5` - Typical hotend heater output
  * `2.7` - Typical heated bed output
  * `2.4` - Secondary heater output
  * `nc` - No heater (read-only temperature monitoring)
  * Any valid PWM-capable output pin
* Corresponding v1 setting: `temperature_control.{name}.heater_pin`
* Corresponding v2 setting: `temperature control.{name}.heater_pin` (uses new pin notation like `PE0`)
* Description: Specifies the output pin used to drive the heater element. This pin controls either an onboard MOSFET or an external Solid State Relay (SSR). Set to `nc` (not connected) for read-only temperature monitoring without heating control.
  * Use `nc` for temperature monitoring without heating control
  * Ensure pin can handle the required current/voltage for your heater
  * Most heater outputs are MOSFET-driven, rated for 12-24V
  * When set to `nc`, the module becomes read-only (no PID control)
* Related settings: `thermistor_pin`, `max_pwm`, `pwm_frequency`
* Related pages: temperaturecontrol, mosfets, pinout
* Example configuration:
  * temperature_control.hotend.heater_pin 2.5  # Primary hotend on MOSFET output
  * temperature_control.bed.heater_pin 2.7  # Heated bed on large MOSFET
  * temperature_control.hotend2.heater_pin 2.4  # Second hotend
  * temperature_control.ambient.heater_pin nc  # Read-only ambient temperature

---

#### `sensor`

* Type: `string`
* Default: `thermistor`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:173`
* Valid values: `thermistor`, `max31855`, `ad8495`, `pt100_e3d`, `PT1000`
  * `thermistor` - NTC thermistor via ADC (most common, up to ~300°C)
  * `max31855` - K-type thermocouple via SPI (up to ~500°C)
  * `ad8495` - K-type thermocouple via AD8495 amplifier (analog)
  * `pt100_e3d` - PT100 RTD via E3D amplifier (more accurate than thermistors)
  * `PT1000` - PT1000 RTD sensor
* Corresponding v1 setting: `temperature_control.{name}.sensor`
* Corresponding v2 setting: `temperature control.{name}.sensor`
* Description: Selects the temperature sensor implementation. Different sensors use different physical principles and require different configuration parameters.
  * Each sensor type has specific configuration requirements
  * Thermistors are most common for hotends and beds (up to ~300°C)
  * Thermocouples handle higher temperatures (up to ~500°C)
  * RTD sensors provide better accuracy than thermistors
  * Default is thermistor for backward compatibility
* Related settings: `thermistor_pin`, `chip_select_pin`, `thermistor`, `beta`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, pt100
* Example configuration:
  * temperature_control.hotend.sensor thermistor  # Standard thermistor
  * temperature_control.hotend2.sensor max31855  # High-temp thermocouple
  * temperature_control.bed.sensor thermistor  # Bed uses thermistor
  * temperature_control.chamber.sensor pt100_e3d  # Accurate RTD for chamber

---

#### `thermistor`

* Type: `string`
* Default: none (uses manual beta/r0/t0 configuration if not specified)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:80` (predefined table lookup)
* Valid values: Predefined thermistor model name
  * `EPCOS100K` - EPCOS/TDK B57560G104F (most common)
  * `Honeywell100K` - Honeywell 135-104LAG-J01
  * `Semitec` - Semitec 104GT-2/104NT-4
  * Many others defined in predefined_thermistors.h
* Corresponding v1 setting: `temperature_control.{name}.thermistor`
* Corresponding v2 setting: `temperature control.{name}.thermistor`
* Description: Selects a pre-calibrated thermistor from the built-in database, automatically setting Steinhart-Hart coefficients or beta values. This simplifies configuration for common thermistor models.
  * Predefined models use standard 4.7kΩ pullup (r2=4700)
  * If your thermistor isn't listed, use manual `beta`, `r0`, `t0` configuration
  * Use `use_beta_table true` to force beta table instead of Steinhart-Hart
  * Steinhart-Hart provides better accuracy than beta equation
* Related settings: `sensor`, `beta`, `r0`, `t0`, `use_beta_table`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.thermistor EPCOS100K  # Most common thermistor
  * temperature_control.bed.thermistor Honeywell100K  # Alternative thermistor
  * temperature_control.hotend2.thermistor Semitec  # High-quality thermistor

---

#### `beta`

* Type: `number`
* Default: `4066`
* Units: Kelvin (K)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:91` (beta parameter)
* Typical values: `3950` (generic 100K), `4066` (EPCOS 100K), `4267` (high-temp thermistors)
* Corresponding v1 setting: `temperature_control.{name}.beta`
* Corresponding v2 setting: `temperature control.{name}.beta`
* Description: The beta coefficient characterizes the thermistor's resistance-temperature relationship. It's used in the simplified Steinhart-Hart equation (beta equation) to convert resistance to temperature. More accurate than a linear approximation but less accurate than full Steinhart-Hart coefficients.
  * Only used when not using predefined thermistor
  * Ignored if using Steinhart-Hart coefficients
  * Usually specified at 25°C in datasheets
  * Higher beta = steeper resistance-temperature curve
  * Consult thermistor datasheet for exact value
* Related settings: `thermistor`, `r0`, `t0`, `coefficients`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.beta 4066  # EPCOS 100K thermistor
  * temperature_control.bed.beta 3950  # Generic 100K thermistor
  * temperature_control.hotend2.beta 4267  # High-temp thermistor

---

#### `r0`

* Type: `number`
* Default: `100000` (100kΩ)
* Units: Ohms (Ω)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:92` (r0 parameter)
* Typical values: `100000` (100kΩ, most common), `10000` (10kΩ, less common)
* Corresponding v1 setting: `temperature_control.{name}.r0`
* Corresponding v2 setting: `temperature control.{name}.r0`
* Description: The nominal resistance of the thermistor at the reference temperature (usually 25°C). This is a fundamental property of the thermistor, typically specified in its part number (e.g., "100K" means 100,000Ω at 25°C).
  * Usually specified at 25°C (T0)
  * Part of manual thermistor configuration
  * Predefined thermistors set this automatically
  * Must match datasheet specification
* Related settings: `thermistor`, `beta`, `t0`, `r1`, `r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.r0 100000  # 100kΩ at 25°C (standard)
  * temperature_control.bed.r0 10000  # 10kΩ at 25°C (less common)

---

#### `t0`

* Type: `number`
* Default: `25`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:93` (t0 parameter)
* Typical values: `25` (industry standard reference temperature)
* Corresponding v1 setting: `temperature_control.{name}.t0`
* Corresponding v2 setting: `temperature control.{name}.t0`
* Description: The temperature at which the thermistor has resistance R0. Almost always 25°C for commercial thermistors, as this is the industry standard reference point.
  * Standard value is 25°C for virtually all thermistors
  * Only change if datasheet specifies different reference
  * Part of manual thermistor configuration
  * Must match datasheet specification
* Related settings: `thermistor`, `beta`, `r0`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.t0 25  # Standard reference temperature

---

#### `r1`

* Type: `number`
* Default: `0`
* Units: Ohms (Ω)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:94` (r1 parameter)
* Typical values: `0` (no series resistor, standard Smoothieboard configuration)
* Corresponding v1 setting: `temperature_control.{name}.r1`
* Corresponding v2 setting: `temperature control.{name}.r1`
* Description: Value of resistor in series with the thermistor, if present. Most Smoothieboard configurations use only a pullup resistor (r2) with no series resistor, so this is typically 0.
  * Standard Smoothieboard configuration: r1 = 0
  * Only change if using custom thermistor circuit
  * Board property, not thermistor property
  * Any positive resistance value if custom circuit uses series resistor
* Related settings: `thermistor`, `r0`, `r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.r1 0  # No series resistor (standard)

---

#### `r2`

* Type: `number`
* Default: `4700` (4.7kΩ)
* Units: Ohms (Ω)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:95` (r2 parameter)
* Typical values: `4700` (standard Smoothieboard), only change if using external pullup
* Corresponding v1 setting: `temperature_control.{name}.r2`
* Corresponding v2 setting: `temperature control.{name}.r2`
* Description: Value of the pullup resistor connected between the thermistor and VCC. Smoothieboard has built-in 4.7kΩ pullup resistors on thermistor inputs TH1-TH4.
  * Standard Smoothieboard: `4700` (4.7kΩ)
  * Only change if using external pullup resistor
  * Board property, not thermistor property
  * TH1-TH4 inputs have onboard 4.7kΩ pullups
  * Changing this requires hardware modification
* Related settings: `thermistor`, `r0`, `r1`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, pinout
* Example configuration:
  * temperature_control.hotend.r2 4700  # Standard Smoothieboard pullup

---

#### `coefficients`

* Type: `string`
* Default: none (uses beta or predefined thermistor if not specified)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:130` (Steinhart-Hart coefficient parsing)
* Valid values: Three comma-separated floating-point numbers (c1,c2,c3)
  * Format: `c1,c2,c3` (no spaces)
  * Example: `0.000722376862540841,0.000216302098124288,0.000000092640163984`
* Corresponding v1 setting: `temperature_control.{name}.coefficients`
* Corresponding v2 setting: `temperature control.{name}.coefficients`
* Description: The three coefficients (c1, c2, c3) of the Steinhart-Hart equation, which provides very accurate temperature calculation across the full operating range. More accurate than beta equation, especially at temperature extremes.
  * Provides better accuracy than beta equation
  * Can be calculated from datasheet or measured data
  * Overrides beta-based calculation
  * Predefined thermistors use Steinhart-Hart automatically
* Related settings: `thermistor`, `beta`, `rt_curve`, `use_beta_table`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.coefficients 0.000722376862540841,0.000216302098124288,0.000000092640163984  # Custom Steinhart-Hart

---

#### `rt_curve`

* Type: `string`
* Default: none
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:148` (R-T curve parsing)
* Valid values: Six comma-separated numbers: T1,R1,T2,R2,T3,R3
  * Temperatures in °C, resistances in Ω
  * Example: `25.0,100000.0,150.0,1355.0,240.0,203.0`
* Corresponding v1 setting: `temperature_control.{name}.rt_curve`
* Corresponding v2 setting: `temperature control.{name}.rt_curve`
* Description: Specify three temperature/resistance pairs from the thermistor datasheet, and Smoothie will automatically calculate Steinhart-Hart coefficients. Best practice: use points at 25°C, 150°C, and 240°C for 3D printing applications.
  * Easier than manually calculating coefficients
  * Use three widely-spaced temperature points for best accuracy
  * Data available in most thermistor datasheets
  * Automatically enables Steinhart-Hart calculation
* Related settings: `thermistor`, `coefficients`, `beta`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.rt_curve 25.0,100000.0,150.0,1355.0,240.0,203.0  # Auto-calculate from datasheet points

---

#### `use_beta_table`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `thermistor`)
* Defined in: `modules/tools/temperaturecontrol/Thermistor.cpp:73` (beta table selection)
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.use_beta_table`
* Corresponding v2 setting: `temperature control.{name}.use_beta_table`
* Description: When using a predefined thermistor, force the use of the legacy beta table values instead of the more accurate Steinhart-Hart coefficients. Provided for backward compatibility with older configurations.
  * Only affects predefined thermistors
  * Default (false) uses more accurate Steinhart-Hart
  * Only use if you need exact compatibility with old behavior
  * Steinhart-Hart provides better accuracy across full temperature range
* Related settings: `thermistor`, `coefficients`, `beta`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.thermistor EPCOS100K  # Use predefined thermistor
  * temperature_control.hotend.use_beta_table true  # Force legacy beta table mode

---

#### `chip_select_pin`

* Type: `pin`
* Default: `0.16`
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `max31855`)
* Defined in: `modules/tools/temperaturecontrol/max31855.cpp:37` (SPI chip select)
* Valid values: Pin specification in format `port.pin`
  * `0.16` - Common chip select pin
  * Any valid digital output pin
  * Each MAX31855 needs a unique CS pin
* Corresponding v1 setting: `temperature_control.{name}.chip_select_pin`
* Corresponding v2 setting: `temperature control.{name}.spi_select_pin` (renamed in v2)
* Description: Specifies which pin is used as the chip select (CS) signal for the MAX31855 thermocouple-to-digital converter. Allows multiple MAX31855 devices to share the same SPI bus by using unique CS pins.
  * Only used with `sensor max31855`
  * Multiple MAX31855 sensors can share MOSI/MISO/SCK, need unique CS
  * Pin must be configured as output
* Related settings: `sensor`, `spi_channel`
* Related pages: temperaturecontrol, pinout
* Example configuration:
  * temperature_control.hotend.sensor max31855  # Use thermocouple
  * temperature_control.hotend.chip_select_pin 0.16  # CS pin for first thermocouple
  * temperature_control.hotend2.chip_select_pin 0.15  # CS pin for second thermocouple

---

#### `spi_channel`

* Type: `number`
* Default: `0`
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `max31855`)
* Defined in: `modules/tools/temperaturecontrol/max31855.cpp:42` (SPI channel selection)
* Valid values: `0`, `1`
  * `0` - SPI Channel 0 (MOSI=P0_18, MISO=P0_17, SCK=P0_15)
  * `1` - SPI Channel 1 (MOSI=P0_9, MISO=P0_8, SCK=P0_7)
* Corresponding v1 setting: `temperature_control.{name}.spi_channel`
* Corresponding v2 setting: `temperature control.{name}.spi_channel`
* Description: Selects which hardware SPI peripheral is used to communicate with the MAX31855. Smoothieboard has two SPI channels with different pin assignments.
  * Only used with `sensor max31855`
  * Each SPI channel has fixed pin assignments
  * Multiple devices can share one channel using different CS pins
* Related settings: `sensor`, `chip_select_pin`
* Related pages: temperaturecontrol, pinout
* Example configuration:
  * temperature_control.hotend.sensor max31855  # Use thermocouple
  * temperature_control.hotend.spi_channel 0  # Use SPI channel 0

---

#### `e3d_amplifier_pin`

* Type: `pin`
* Default: none (required when using PT100 E3D sensor)
* Module: `temperature_control`
* Context: Module instance setting (when sensor is `pt100_e3d`)
* Defined in: `modules/tools/temperaturecontrol/PT100_E3D.cpp:31` (ADC pin configuration)
* Valid values: Any valid ADC pin (not a dedicated thermistor input)
  * Common: `1.30`, `1.31`
  * Must be free ADC-capable pin
  * Must NOT use thermistor inputs (0.23-0.26)
* Corresponding v1 setting: `temperature_control.{name}.e3d_amplifier_pin`
* Corresponding v2 setting: none (PT100 E3D not explicitly documented in v2)
* Description: Specifies which ADC pin reads the analog voltage from the E3D PT100 amplifier. The amplifier converts PT100 RTD resistance to a voltage that can be read by the ADC.
  * Only used with `sensor pt100_e3d`
  * Must NOT use thermistor inputs (0.23-0.26)
  * E3D amplifier provides analog voltage proportional to temperature
* Related settings: `sensor`
* Related pages: temperaturecontrol, pt100, pinout
* Example configuration:
  * temperature_control.hotend.sensor pt100_e3d  # Use PT100 RTD
  * temperature_control.hotend.e3d_amplifier_pin 1.30  # ADC pin for amplifier

---

#### `readings_per_second`

* Type: `number`
* Default: `20`
* Units: Hz (readings per second)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:139`
* Typical values: `10` (slow systems like beds), `20` (default), `40` (fast-responding hotends)
* Corresponding v1 setting: `temperature_control.{name}.readings_per_second`
* Corresponding v2 setting: `temperature control.{name}.readings_per_second`
* Description: How many times per second the temperature sensor is read and the PID control loop is executed. Higher values provide faster response but increase CPU load.
  * Affects PID responsiveness
  * PID parameters (i_factor, d_factor) are internally scaled by this value
  * Lower values acceptable for slow-responding systems (heated beds)
  * Higher values provide tighter control for fast systems
  * Practical maximum: ~40 (CPU load considerations)
* Related settings: `p_factor`, `i_factor`, `d_factor`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.readings_per_second 20  # Default for hotends
  * temperature_control.bed.readings_per_second 10  # Slower for thermal mass of bed

---

#### `pwm_frequency`

* Type: `number`
* Default: `2000`
* Units: Hz (Hertz)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:209`
* Typical values: `2000` (MOSFETs), `20` (SSRs/relays)
* Corresponding v1 setting: `temperature_control.{name}.pwm_frequency`
* Corresponding v2 setting: none (v2 uses global `[pwm1] frequency` setting)
* Description: Frequency at which the heater output switches on and off. High frequencies (kHz range) are suitable for MOSFETs. Low frequencies (10-40 Hz) are required for mechanical relays or SSRs to avoid excessive switching.
  * MOSFET control: `1000` - `10000` Hz (typical: 2000)
  * SSR/relay control: `10` - `40` Hz (typical: 20)
  * MOSFETs can switch at kHz frequencies without wear
  * SSRs and mechanical relays have limited switching lifetime
  * Lower frequency = more temperature ripple
  * Too high frequency can cause EMI
* Related settings: `heater_pin`, `max_pwm`
* Related pages: temperaturecontrol, mosfets, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.pwm_frequency 2000  # 2kHz for MOSFET-driven hotend
  * temperature_control.bed.pwm_frequency 20  # 20Hz for SSR-driven heated bed

---

#### `max_pwm`

* Type: `number`
* Default: `255`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:205`
* Valid values: 0-255 (8-bit PWM range)
  * `255` = 100% duty cycle (full power)
  * `128` = 50% duty cycle (half power)
  * `64` = 25% duty cycle (quarter power)
* Corresponding v1 setting: `temperature_control.{name}.max_pwm`
* Corresponding v2 setting: `temperature control.{name}.max_pwm`
* Description: Limits the maximum power delivered to the heater by capping the PWM duty cycle. Useful when running a 12V heater from 24V supply, or to limit maximum power draw.
  * For 12V heater on 24V supply: use max_pwm 64 (25% = 6W instead of 24W)
  * Also limits PID output maximum
  * Set i_max to similar value to prevent integral windup
* Related settings: `heater_pin`, `pwm_frequency`, `i_max`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.max_pwm 255  # Full power (12V heater on 12V supply)
  * temperature_control.bed.max_pwm 64  # 25% power (12V heater on 24V supply)

---

#### `bang_bang`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:202`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.bang_bang`
* Corresponding v2 setting: `temperature control.{name}.bang_bang`
* Description: Switches from PID control to simple bang-bang (hysteresis) control. In bang-bang mode, the heater is fully on when below target temperature minus hysteresis, and fully off when above target plus hysteresis.
  * Bang-bang is simpler and works well for high thermal mass (beds)
  * PID provides tighter control for low thermal mass (hotends)
  * Requires `hysteresis` setting when enabled
  * Good for SSR-controlled heaters (avoids rapid switching)
* Related settings: `hysteresis`, `p_factor`, `i_factor`, `d_factor`
* Related pages: temperaturecontrol, temperaturecontrol-pid
* Example configuration:
  * temperature_control.bed.bang_bang true  # Good for heated beds with high thermal mass
  * temperature_control.bed.hysteresis 2.0  # ±2°C band around target
  * temperature_control.hotend.bang_bang false  # PID for precise hotend control

---

#### `hysteresis`

* Type: `number`
* Default: `2.0`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `true`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:203`
* Typical values: `1.0` (tight control), `2.0` (default), `5.0` (loose control, less switching)
* Corresponding v1 setting: `temperature_control.{name}.hysteresis`
* Corresponding v2 setting: `temperature control.{name}.hysteresis`
* Description: Defines the temperature band around the target temperature for bang-bang control. Heater turns on when temperature drops below (target - hysteresis) and turns off when it rises above (target + hysteresis).
  * Only used when `bang_bang true`
  * Total temperature swing = 2 × hysteresis
  * Lower values = tighter control but more frequent switching
  * Higher values = less switching but more temperature variation
* Related settings: `bang_bang`, `max_pwm`
* Related pages: temperaturecontrol
* Example configuration:
  * temperature_control.bed.bang_bang true  # Enable bang-bang control
  * temperature_control.bed.hysteresis 2.0  # ±2°C around target (4°C total swing)

---

#### `p_factor`

* Type: `number`
* Default: `13.7`
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `false`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:218`
* Typical values: `13.7` (hotends), `30.0` (heated beds)
* Corresponding v1 setting: `temperature_control.{name}.p_factor`
* Corresponding v2 setting: `temperature control.{name}.p_factor`
* Description: The proportional term of the PID controller. Determines how aggressively the controller responds to the current temperature error. Higher values produce faster response but can cause overshoot and oscillation.
  * Typical range for hotends: `10` - `20`
  * Typical range for heated beds: `20` - `50`
  * Higher P = faster response, more overshoot
  * Lower P = slower response, more stable
  * Use M301 to adjust and test
  * Start with default and tune if needed
* Related M-Codes:
  * M301 S<tool_id> P<p_factor> - Set P factor at runtime
  * M301 S<tool_id> - Query current PID settings
  * M500 - Save current PID values to config-override
  * M303 E<tool_id> S<temp> C<cycles> - PID autotune to find optimal P/I/D
* Related settings: `i_factor`, `d_factor`, `i_max`, `bang_bang`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning
* Example configuration:
  * temperature_control.hotend.p_factor 13.7  # Default for hotends
  * temperature_control.bed.p_factor 30.0  # Higher for bed thermal mass

---

#### `i_factor`

* Type: `number`
* Default: `0.097`
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `false`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:219`
* Typical values: `0.097` (hotends), `0.5` (heated beds)
* Corresponding v1 setting: `temperature_control.{name}.i_factor`
* Corresponding v2 setting: `temperature control.{name}.i_factor`
* Description: The integral term of the PID controller. Eliminates steady-state error by accumulating error over time. Internally scaled by `readings_per_second` (PIDdt).
  * Value in config is actual i_factor, scaled internally by PIDdt
  * Typical range for hotends: `0.05` - `0.3`
  * Typical range for heated beds: `0.1` - `1.0`
  * Higher I = faster elimination of steady-state error, risk of oscillation
  * Too high I causes overshoot and oscillation
  * i_max prevents integral windup
* Related M-Codes:
  * M301 S<tool_id> I<i_factor> - Set I factor at runtime
  * M301 S<tool_id> - Query current PID settings
  * M500 - Save current PID values to config-override
  * M303 E<tool_id> S<temp> C<cycles> - PID autotune to find optimal P/I/D
* Related settings: `p_factor`, `d_factor`, `i_max`, `windup`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning
* Example configuration:
  * temperature_control.hotend.i_factor 0.097  # Default for hotends
  * temperature_control.bed.i_factor 0.5  # Higher for bed thermal mass

---

#### `d_factor`

* Type: `number`
* Default: `24`
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `false`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:220`
* Typical values: `24` (hotends), `100` (heated beds)
* Corresponding v1 setting: `temperature_control.{name}.d_factor`
* Corresponding v2 setting: `temperature control.{name}.d_factor`
* Description: The derivative term of the PID controller. Responds to the rate of temperature change to reduce overshoot and improve stability. Internally scaled by `readings_per_second` (PIDdt).
  * Value in config is actual d_factor, scaled internally by PIDdt
  * Typical range for hotends: `20` - `200`
  * Typical range for heated beds: `50` - `300`
  * Higher D = stronger damping, reduced overshoot
  * Too high D makes system sluggish and sensitive to noise
  * D term acts on rate of change, not error magnitude
* Related M-Codes:
  * M301 S<tool_id> D<d_factor> - Set D factor at runtime
  * M301 S<tool_id> - Query current PID settings
  * M500 - Save current PID values to config-override
  * M303 E<tool_id> S<temp> C<cycles> - PID autotune to find optimal P/I/D
* Related settings: `p_factor`, `i_factor`, `i_max`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning
* Example configuration:
  * temperature_control.hotend.d_factor 24  # Default for hotends
  * temperature_control.bed.d_factor 100  # Higher for bed stability

---

#### `i_max`

* Type: `number`
* Default: Same as `max_pwm`
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `false`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:224`
* Valid values: 0-255 (8-bit PWM range)
* Corresponding v1 setting: `temperature_control.{name}.i_max`
* Corresponding v2 setting: `temperature control.{name}.i_max`
* Description: Limits the integral accumulator to prevent integral windup. When the heater is at full power (max_pwm) for extended periods, the integral term would otherwise grow excessively large, causing overshoot when the target is reached.
  * Range: `0` - `255`
  * Typical: Same as `max_pwm`
  * Can be lower than `max_pwm` to reduce overshoot
  * Prevents integral windup during heating
  * Usually set equal to max_pwm
  * If strong overshoot during initial heating, reduce i_max
* Related M-Codes:
  * M301 S<tool_id> X<i_max> - Set I max at runtime
  * M301 S<tool_id> - Query current PID settings including i_max
  * M500 - Save current value to config-override
* Related settings: `i_factor`, `max_pwm`, `windup`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.max_pwm 255  # Full power available
  * temperature_control.hotend.i_max 255  # Allow I term to reach max_pwm
  * temperature_control.bed.max_pwm 200  # Limited power for 12V heater on 24V
  * temperature_control.bed.i_max 200  # Limit I term to match max_pwm

---

#### `windup`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (when bang_bang is `false`)
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:204`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.windup`
* Corresponding v2 setting: `temperature control.{name}.windup`
* Description: When enabled, the integral term only accumulates when the output is not saturated (not at 0 or max_pwm). This alternative anti-windup strategy prevents integral accumulation during periods when the controller is at its limits.
  * Two anti-windup strategies: i_max clamping (default) or conditional integration (windup true)
  * Default behavior (windup false): accumulate always, clamp to i_max
  * With windup true: only accumulate when output not saturated
  * Most users should leave at default (false)
* Related settings: `i_factor`, `i_max`, `max_pwm`
* Related pages: temperaturecontrol, temperaturecontrol-pid
* Example configuration:
  * temperature_control.hotend.windup false  # Standard i_max clamping mode
  * temperature_control.bed.windup true  # Conditional integration mode

---

#### `get_m_code`

* Type: `number`
* Default: `105`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:138`
* Typical values: `105` (standard for all temperature controllers)
* Corresponding v1 setting: `temperature_control.{name}.get_m_code`
* Corresponding v2 setting: `temperature control.{name}.get_m_code`
* Description: Specifies which M-code reports the current temperature for this module. M105 is standard for temperature reporting and returns data for all temperature controllers.
  * Standard: `105` (reports all temperatures)
  * All modules typically use M105
  * Response format: `T:210.0/200.0 B:60.0/60.0`
  * First number is current temp, second is target
* Related M-Codes:
  * M105 - Get all temperature readings
* Related settings: `set_m_code`, `set_and_wait_m_code`, `designator`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.get_m_code 105  # Standard query command
  * temperature_control.bed.get_m_code 105  # All use same M-code

---

#### `set_m_code`

* Type: `number`
* Default: `104`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:136`
* Typical values: `104` (hotends), `140` (beds), `141` (chambers)
* Corresponding v1 setting: `temperature_control.{name}.set_m_code`
* Corresponding v2 setting: `temperature control.{name}.set_m_code`
* Description: Specifies which M-code sets the target temperature without waiting. Execution continues immediately after setting the temperature.
  * Hotend standard: `104`
  * Bed standard: `140`
  * Custom: Any unused M-code number
  * Command format: `M104 S200` sets temperature to 200°C
  * Non-blocking: gcode continues immediately
  * Use M109/M190 for wait-until-reached behavior
* Related M-Codes:
  * M104 S<temp> - Set hotend temperature (non-blocking)
  * M140 S<temp> - Set bed temperature (non-blocking)
  * M141 S<temp> - Set chamber temperature (non-blocking)
* Related settings: `set_and_wait_m_code`, `get_m_code`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.set_m_code 104  # M104 for hotend
  * temperature_control.bed.set_m_code 140  # M140 for bed
  * temperature_control.chamber.set_m_code 141  # M141 for chamber

---

#### `set_and_wait_m_code`

* Type: `number`
* Default: `109`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:137`
* Typical values: `109` (hotends), `190` (beds), `191` (chambers)
* Corresponding v1 setting: `temperature_control.{name}.set_and_wait_m_code`
* Corresponding v2 setting: `temperature control.{name}.set_and_wait_m_code`
* Description: Specifies which M-code sets the target temperature and waits until that temperature is reached before continuing execution. Blocking command.
  * Hotend standard: `109`
  * Bed standard: `190`
  * Custom: Any unused M-code number
  * Command format: `M109 S200` sets temperature and waits
  * Blocking: no further gcode executed until temperature reached
  * Reports temperature every second while waiting
  * Can be interrupted by kill/halt command
* Related M-Codes:
  * M109 S<temp> - Set hotend temperature and wait
  * M190 S<temp> - Set bed temperature and wait
  * M191 S<temp> - Set chamber temperature and wait
* Related settings: `set_m_code`, `get_m_code`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.set_and_wait_m_code 109  # M109 for hotend
  * temperature_control.bed.set_and_wait_m_code 190  # M190 for bed
  * temperature_control.chamber.set_and_wait_m_code 191  # M191 for chamber

---

#### `designator`

* Type: `string`
* Default: `T`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:141`
* Valid values: Single letter or short identifier
  * `T` - Hotend (tool) temperature
  * `B` - Bed temperature
  * `C` - Chamber temperature
  * `T0`, `T1` - Multiple hotends
  * Any short string identifier
* Corresponding v1 setting: `temperature_control.{name}.designator`
* Corresponding v2 setting: `temperature control.{name}.designator`
* Description: The letter/identifier that prefixes this module's temperature in M105 responses. Allows host software to identify which heater each temperature reading represents.
  * Used in M105 responses
  * Format: `designator:current/target @pwm`
  * Example response: `ok T:210.0/200.0 @180 B:60.0/60.0 @255`
* Related M-Codes:
  * M105 - Uses designator in temperature report
* Related settings: `get_m_code`, `set_m_code`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.designator T  # Shows as "T:210/200"
  * temperature_control.bed.designator B  # Shows as "B:60/60"
  * temperature_control.chamber.designator C  # Shows as "C:40/40"
  * temperature_control.hotend2.designator T1  # Shows as "T1:200/200"

---

#### `max_temp`

* Type: `number`
* Default: `300`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:159`
* Typical values: `280` (PTFE hotends), `300` (default), `500` (all-metal hotends), `150` (heated beds)
* Corresponding v1 setting: `temperature_control.{name}.max_temp`
* Corresponding v2 setting: `temperature control.{name}.max_temp`
* Description: Hard upper limit for temperature. If the sensor reads above this value, the system immediately halts and turns off all heaters. Critical safety feature to prevent thermal runaway and fire hazards.
  * CRITICAL: Exceeding this triggers immediate HALT
  * Set ~20-50°C above maximum operating temperature
  * PTFE-lined hotends: max 260-280°C
  * All-metal hotends: up to 500°C
  * Heated beds: typically 120-150°C
  * System requires reset or M999 after max_temp violation
* Related M-Codes:
  * M143 S<tool_id> P<max_temp> - Set max temp at runtime
  * M143 - Query current max_temp settings
  * M999 - Reset after HALT
* Related settings: `min_temp`, `runaway_range`, `runaway_heating_timeout`
* Related pages: temperaturecontrol, troubleshooting
* Example configuration:
  * temperature_control.hotend.max_temp 300  # PTFE-lined hotend safety limit
  * temperature_control.bed.max_temp 150  # PCB bed limit
  * temperature_control.hotend2.max_temp 500  # All-metal hotend capability

---

#### `min_temp`

* Type: `number`
* Default: `0`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:160`
* Typical values: `0` (standard), `5` (detect failures faster)
* Corresponding v1 setting: `temperature_control.{name}.min_temp`
* Corresponding v2 setting: `temperature control.{name}.min_temp`
* Description: Hard lower limit for temperature. If the sensor reads below this value, the system halts. Primarily used to detect disconnected or failed thermistors, which typically read very low or infinite resistance (appearing as very low temperature).
  * Detects disconnected or shorted thermistors
  * Disconnected thermistor typically reads as very low temperature
  * System halts if temperature falls below this value
  * Set to 0 or slightly above room temperature
* Related settings: `max_temp`, `thermistor_pin`
* Related pages: temperaturecontrol, troubleshooting
* Example configuration:
  * temperature_control.hotend.min_temp 0  # Standard minimum
  * temperature_control.bed.min_temp 0  # Detect sensor failures

---

#### `preset1`

* Type: `number`
* Default: `0`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:193`
* Typical values: `0` (disabled), `200` (PLA), `230` (ABS)
* Corresponding v1 setting: `temperature_control.{name}.preset1`
* Corresponding v2 setting: `temperature control.{name}.preset1`
* Description: Allows setting a common temperature with a shortcut. When you set temperature to `1.0`, the controller uses this preset value instead. Useful for quickly selecting common temperatures like PLA printing temp.
  * `0` = disabled (default)
  * `M104 S1` sets temperature to preset1 value
  * Helps avoid typing full temperature repeatedly
  * Convenience feature for common temperatures
* Related M-Codes:
  * M104 S1 - Set to preset1 temperature (non-blocking)
  * M109 S1 - Set to preset1 temperature and wait
* Related settings: `preset2`, `set_m_code`, `set_and_wait_m_code`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.preset1 200  # PLA temperature
  * temperature_control.hotend.preset2 230  # ABS temperature
  * temperature_control.bed.preset1 60  # PLA bed temperature

---

#### `preset2`

* Type: `number`
* Default: `0`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:194`
* Typical values: `0` (disabled), `230` (ABS), `240` (PETG)
* Corresponding v1 setting: `temperature_control.{name}.preset2`
* Corresponding v2 setting: `temperature control.{name}.preset2`
* Description: Second preset temperature slot. When you set temperature to `2.0`, the controller uses this preset value instead.
  * `0` = disabled (default)
  * `M104 S2` sets temperature to preset2 value
  * Typically used for second-most-common temperature
  * See preset1 for usage details
* Related M-Codes:
  * M104 S2 - Set to preset2 temperature (non-blocking)
  * M109 S2 - Set to preset2 temperature and wait
* Related settings: `preset1`, `set_m_code`, `set_and_wait_m_code`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.preset1 200  # PLA
  * temperature_control.hotend.preset2 230  # ABS
  * temperature_control.bed.preset1 60  # PLA bed
  * temperature_control.bed.preset2 100  # ABS bed

---

## Thermal Runaway Protection Settings

#### `runaway_range`

* Type: `number`
* Default: `20`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:144`
* Maximum value: `63` (clamped in firmware: TemperatureControl.cpp:145)
* Typical values: `10` (tight tolerance), `20` (default), `30` (loose tolerance)
* Corresponding v1 setting: `temperature_control.{name}.runaway_range`
* Corresponding v2 setting: `temperature control.{name}.runaway_range`
* Description: Once the target temperature is reached, monitors for temperature divergence. If actual temperature deviates from target by more than this amount for >8 seconds, the system halts. Detects heater failures, thermal runaway, or cooling system problems.
  * Only active after target temperature reached
  * Allows brief spikes due to noise
  * Requires sustained deviation for 8+ seconds
  * Detects failing heaters or thermal runaway
  * Set to 0 to disable this protection
  * Clamped to maximum of 63 in firmware
* Related settings: `runaway_heating_timeout`, `runaway_cooling_timeout`, `runaway_error_range`
* Related pages: temperaturecontrol, temperaturecontrol-fine-tuning, troubleshooting
* Example configuration:
  * temperature_control.hotend.runaway_range 20  # ±20°C deviation allowed
  * temperature_control.bed.runaway_range 10  # Tighter tolerance for bed

---

#### `runaway_heating_timeout`

* Type: `number`
* Default: `900`
* Units: Seconds
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:149`
* Maximum value: `4088` (clamped in firmware: TemperatureControl.cpp:150)
* Typical values: `300` (5 min, fast hotends), `900` (15 min, default), `1800` (30 min, large beds)
* Corresponding v1 setting: `temperature_control.{name}.runaway_heating_timeout`
* Corresponding v2 setting: `temperature control.{name}.runaway_heating_timeout`
* Description: Maximum time allowed from when heating starts until target temperature is reached. If the temperature doesn't reach target within this time, the system halts. Detects underpowered heaters, failed heaters, or inadequate insulation.
  * Prevents indefinite heating when heater is failing
  * Beds need longer timeout than hotends (higher thermal mass)
  * Set to 0 to disable
  * Checked every 8 seconds (internally stored as timeout/8)
  * System halts if timeout exceeded
  * Maximum value is 4088 seconds (68 minutes), clamped by firmware
* Related settings: `runaway_range`, `runaway_cooling_timeout`, `runaway_error_range`
* Related pages: temperaturecontrol, temperaturecontrol-fine-tuning, troubleshooting
* Example configuration:
  * temperature_control.hotend.runaway_heating_timeout 900  # 15 minutes for hotend
  * temperature_control.bed.runaway_heating_timeout 1800  # 30 minutes for bed thermal mass

---

#### `runaway_cooling_timeout`

* Type: `number`
* Default: `0` (disabled)
* Units: Seconds
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:152`
* Maximum value: `4088` (clamped in firmware: TemperatureControl.cpp:153)
* Typical values: `0` (disabled by default), `600` (10 min), `1800` (30 min)
* Corresponding v1 setting: `temperature_control.{name}.runaway_cooling_timeout`
* Corresponding v2 setting: `temperature control.{name}.runaway_cooling_timeout`
* Description: Maximum time allowed to cool down to target temperature when reducing temperature. If temperature doesn't reach target within this time, the system halts. Useful for detecting failed cooling fans or thermal runaways during cooldown.
  * Disabled by default
  * Less commonly used than heating timeout
  * Can detect failed cooling fans
  * Set to 0 to disable
  * Checked every 8 seconds (internally stored as timeout/8)
  * Maximum value is 4088 seconds (68 minutes), clamped by firmware
* Related settings: `runaway_range`, `runaway_heating_timeout`, `runaway_error_range`
* Related pages: temperaturecontrol, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.runaway_cooling_timeout 0  # Disabled (default)
  * temperature_control.bed.runaway_cooling_timeout 1800  # 30 min cooling timeout if needed

---

#### `runaway_error_range`

* Type: `number`
* Default: `1.0`
* Units: Degrees Celsius (°C)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `modules/tools/temperaturecontrol/TemperatureControl.cpp:156`
* Typical values: `0.5` (strict), `1.0` (default), `2.0` (lenient)
* Corresponding v1 setting: `temperature_control.{name}.runaway_error_range`
* Corresponding v2 setting: `temperature control.{name}.runaway_error_range`
* Description: Defines how close the actual temperature must be to the target to be considered "reached." Used by runaway detection to determine when heating/cooling is complete and steady-state monitoring should begin.
  * Used to determine when "target reached"
  * Too tight: may never register as reached (noisy sensor)
  * Too loose: premature transition to steady-state monitoring
  * Typical: 1-2°C for hotends, 2-3°C for beds
* Related settings: `runaway_range`, `runaway_heating_timeout`, `runaway_cooling_timeout`
* Related pages: temperaturecontrol, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.runaway_error_range 1.0  # Within ±1°C to be considered reached
  * temperature_control.bed.runaway_error_range 2.0  # Within ±2°C for bed (more thermal mass)

---

*This comprehensive configuration reference covers all 42 settings for the Smoothieware v1 Temperature Control module.*

---

## Switch Module

# Switch Module Configuration Settings - Smoothieware v1

## Overview

The Switch module is a versatile component that can use commands or pins as inputs to send commands or control output pins. It supports multiple output types including digital on/off, sigma-delta PWM, hardware PWM, and software PWM. Switch instances are created per-device (e.g., `switch.fan`, `switch.psu`).

---

## Configuration Settings

#### `switch.{name}.enable`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/SwitchPool.cpp:29`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.{name}.enable`
* Corresponding v2 setting: `switch.{name}.enable`
* Description: Creates and enables a new Switch module instance. When set to `true`, the switch module is active and will respond to configured inputs and control outputs. Set to `false` to disable the switch instance without removing its configuration.
  * Each switch instance requires a unique name (e.g., `fan`, `psu`, `spindle`)
  * Disabled switches ignore all inputs and do not control outputs
  * Parameters for disabled switches are ignored but preserved in configuration
* Related settings: `switch.{name}.output_pin`, `switch.{name}.input_pin`
* Related pages: switch, motion-control, endstops
* Example configuration:
  * switch.fan.enable true  # Enable cooling fan switch
  * switch.psu.enable true  # Enable ATX power supply switch
  * switch.misc.enable false  # Disabled switch preserves config

#### `switch.{name}.input_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:104`
* Valid values: Pin specification in format `PORT.PIN` (e.g., `2.11`, `1.30`)
  * Can include modifiers: `!` for inverted, `^` for pullup, `v` for pulldown
  * `nc` to disable input pin functionality
* Corresponding v1 setting: `switch.{name}.input_pin`
* Corresponding v2 setting: `switch.{name}.input_pin` (with STM32 pin notation)
* Description: Specifies a GPIO pin that controls the switch state through hardware input. When configured, the pin's state determines the switch's ON/OFF state according to `input_pin_behavior`. The pin is configured as an input with the specified properties.
  * Input pins are polled at 100ms intervals (10Hz) by SlowTicker (line 203)
  * When an input pin is configured, the switch becomes input-driven
  * Input pins set `ignore_on_halt` to `true` automatically (line 112)
  * Pin state changes trigger switch state changes according to `input_pin_behavior`
  * Cannot use both input pins and input commands simultaneously (input pin takes priority)
* Related settings: `switch.{name}.input_pin_behavior`, `switch.{name}.output_on_command`, `switch.{name}.output_off_command`
* Related pages: switch, pin-configuration, endstops
* Example configuration:
  * switch.fan.input_pin 2.11  # Pin P2.11, no modifiers
  * switch.estop.input_pin 1.30^  # Pin P1.30 with pullup
  * switch.door.input_pin 1.29!^  # Pin P1.29, inverted with pullup
  * switch.psu.input_pin nc  # No input pin (command-controlled)

#### `switch.{name}.input_pin_behavior`

* Type: `enum`
* Default: `momentary`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:109`
* Valid values: `momentary`, `toggle`
  * `momentary` - Switch state follows pin state (ON when pin high, OFF when pin low)
  * `toggle` - Pin rising edge (low-to-high transition) toggles switch state between ON and OFF
* Corresponding v1 setting: `switch.{name}.input_pin_behavior`
* Corresponding v2 setting: `switch.{name}.input_pin_behavior`
* Description: Defines how the input pin controls the switch state. In momentary mode, the switch state tracks the pin state directly. In toggle mode, pin state transitions (low-to-high) flip the switch state.
  * Only applies when `input_pin` is configured
  * Momentary behavior: switch state mirrors pin state continuously (lines 488, 494-497)
  * Toggle behavior: only rising edges trigger state change, falling edges ignored (lines 484-485)
  * For toggle mode, initial switch state is undefined until first toggle
  * For momentary mode, initial switch state matches pin state at startup (line 200)
  * Ignored if no input pin is configured
* Related settings: `switch.{name}.input_pin`, `switch.{name}.output_on_command`, `switch.{name}.output_off_command`
* Related pages: switch, endstops, killbutton
* Example configuration:
  * switch.fan.input_pin_behavior momentary  # Switch ON while button pressed
  * switch.light.input_pin_behavior toggle  # Button press toggles light on/off

#### `switch.{name}.input_on_command`

* Type: `string`
* Default: `""` (empty)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:97`
* Valid values: G-code or M-code command without parameters (e.g., `G0`, `G1`, `M106`, `M3`)
  * Empty string `""` disables command-based turn-on
* Corresponding v1 setting: `switch.{name}.input_on_command`
* Corresponding v2 setting: `switch.{name}.input_on_command`
* Description: Specifies a G-code or M-code command that sets the switch to the ON state. The command is matched against incoming G-code, and when received, the switch turns ON. Supports optional subcode matching via `switch.subcode`.
  * Commands are parsed as G-code/M-code without parameters (lines 254-262)
  * Subcode matching: Use `switch.subcode` to differentiate multiple switches responding to the same base command
  * The `S` parameter can control PWM value for PWM-type outputs (lines 321-322, 340-348)
  * Commands are queued and executed synchronously with motion (waits for idle before switching)
  * Cannot be used simultaneously with input pins (input pins take priority)
  * Empty string effectively disables command-based control
* Related M-Codes:
  * M106 - Typically used for fan control with S parameter for PWM
  * M3 - Typically used for spindle on
  * M42 - GPIO control command
  * M80 - ATX power supply on
* Related settings: `switch.{name}.input_off_command`, `switch.{name}.subcode`, `switch.{name}.output_type`
* Related pages: switch, supported-g-codes, motion-control
* Example configuration:
  * switch.fan.input_on_command M106  # Turn on with M106 (fan on)
  * switch.spindle.input_on_command M3  # Turn on with M3 (spindle on)
  * switch.vacuum.input_on_command M10  # Turn on with M10 (custom command)
  * switch.psu.input_on_command M80  # Turn on with M80 (ATX power on)

#### `switch.{name}.input_off_command`

* Type: `string`
* Default: `""` (empty)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:98`
* Valid values: G-code or M-code command without parameters (e.g., `G0`, `G1`, `M107`, `M5`)
  * Empty string `""` disables command-based turn-off
* Corresponding v1 setting: `switch.{name}.input_off_command`
* Corresponding v2 setting: `switch.{name}.input_off_command`
* Description: Specifies a G-code or M-code command that sets the switch to the OFF state. The command is matched against incoming G-code, and when received, the switch turns OFF. Supports optional subcode matching via `switch.subcode`.
  * Commands are parsed as G-code/M-code without parameters (lines 264-272)
  * Subcode matching: Use `switch.subcode` to differentiate multiple switches
  * Commands are queued and executed synchronously with motion (waits for idle before switching)
  * Cannot be used simultaneously with input pins (input pins take priority)
  * Empty string effectively disables command-based control
* Related M-Codes:
  * M107 - Typically used for fan off
  * M5 - Typically used for spindle off
  * M42 - GPIO control command
  * M81 - ATX power supply off
* Related settings: `switch.{name}.input_on_command`, `switch.{name}.subcode`, `switch.{name}.output_type`
* Related pages: switch, supported-g-codes, motion-control
* Example configuration:
  * switch.fan.input_off_command M107  # Turn off with M107 (fan off)
  * switch.spindle.input_off_command M5  # Turn off with M5 (spindle off)
  * switch.vacuum.input_off_command M11  # Turn off with M11 (custom command)
  * switch.psu.input_off_command M81  # Turn off with M81 (ATX power off)

#### `switch.{name}.subcode`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:96`
* Valid values: Integer values: `0`, `1`, `2`, `3`, etc.
  * `0` matches commands without a subcode or with `.0`
* Corresponding v1 setting: `switch.{name}.subcode`
* Corresponding v2 setting: `switch.{name}.subcode`
* Description: Specifies a subcode for input command matching. Allows multiple switch instances to respond to different subcodes of the same base command (e.g., `M106.1` vs `M106.2`). Only affects command matching for `input_on_command` and `input_off_command`.
  * Subcode `0` is the default and matches commands without explicit subcodes
  * Allows multiple switches to share the same base command but respond to different subcodes
  * Only evaluated when both `input_on_command` and/or `input_off_command` are set
  * Subcode is part of the command matching logic (both command letter and subcode must match, lines 297, 304)
* Related settings: `switch.{name}.input_on_command`, `switch.{name}.input_off_command`
* Related pages: switch, supported-g-codes, multiple-extruders
* Example configuration:
  * switch.fan.input_on_command M106  # First example switch
  * switch.fan.input_off_command M107
  * switch.fan.subcode 0  # Responds to M106/M107 (no subcode)
  * switch.extruder_fan.input_on_command M106  # Second example switch
  * switch.extruder_fan.input_off_command M107
  * switch.extruder_fan.subcode 1  # Responds to M106.1/M107.1
  * switch.case_fan.input_on_command M106  # Third example switch
  * switch.case_fan.input_off_command M107
  * switch.case_fan.subcode 2  # Responds to M106.2/M107.2

#### `switch.{name}.output_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:130` (SIGMADELTA), `Switch.cpp:146` (DIGITAL), `Switch.cpp:162` (HWPWM), `Switch.cpp:178` (SWPWM)
* Valid values: Pin specification in format `PORT.PIN` (e.g., `2.6`, `1.23`)
  * Can include modifiers: `!` for inverted
  * `nc` to disable output pin functionality
* Corresponding v1 setting: `switch.{name}.output_pin`
* Corresponding v2 setting: `switch.{name}.output_pin` (with STM32 pin notation)
* Description: Specifies the GPIO pin that is controlled by the switch. The pin's behavior depends on `output_type` (digital on/off, PWM, hardware PWM, or software PWM). The pin is configured as an output with the specified properties.
  * Output pin behavior depends on `output_type` setting
  * Inverted pins (`!`) reverse the logical state (high becomes low, low becomes high)
  * For hardware PWM (`hwpwm`), pin must be PWM-capable (see PWM-capable pin documentation)
  * Failsafe behavior can be configured via `failsafe_set_to` for crash/halt conditions (lines 132-136, 148-152, 164-168, 182-186)
  * Output pins are only used when the switch is not in input-pin mode
* Related settings: `switch.{name}.output_type`, `switch.{name}.failsafe_set_to`, `switch.{name}.halt_set_to`
* Related pages: switch, pin-configuration, mosfets, pwm-capable
* Example configuration:
  * switch.fan.output_pin 2.6  # Pin P2.6, active high
  * switch.psu.output_pin 2.19!  # Pin P2.19, inverted (active low)
  * switch.light.output_pin 1.23  # Pin P1.23
  * switch.misc.output_pin nc  # No output pin (command-only switch)

#### `switch.{name}.output_type`

* Type: `enum`
* Default: `pwm` (sigma-delta PWM)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:122`
* Valid values: `digital`, `pwm`, `hwpwm`, `swpwm`
  * `digital` - Simple digital on/off control (pin high or low)
  * `pwm` - Sigma-delta PWM (software-based, 0-255 range, default)
  * `hwpwm` - Hardware PWM (MCU peripheral, 0-100% duty cycle, requires PWM-capable pin)
  * `swpwm` - Software PWM (timer-based, 0-100% duty cycle, works on any pin)
* Corresponding v1 setting: `switch.{name}.output_type`
* Corresponding v2 setting: `switch.{name}.output_type`
* Description: Defines the output pin control method. Determines whether the output is simple digital on/off, sigma-delta PWM (software PWM using bit-banging), hardware PWM (using MCU PWM peripheral), or software PWM (timer-based software PWM).
  * DIGITAL: Pin is either fully on or fully off, no variable control
  * PWM (sigma-delta): Software PWM using bit-banging, range 0-255, controlled via `max_pwm` (line 208)
  * HWPWM: Uses MCU hardware PWM peripheral, range 0-100%, requires PWM-capable pins only (lines 160-173)
  * SWPWM: Software timer-based PWM, range 0-100%, works on any pin but slower response than hwpwm (lines 175-189)
  * For PWM types, `S` parameter in commands sets the PWM value (e.g., `M106 S128`)
  * Hardware PWM (`hwpwm`) provides the most precise and efficient PWM but is limited to specific pins
  * Software PWM (`swpwm`) is useful when hardware PWM peripherals are reserved (e.g., for laser modules)
  * Default value `pwm` is sigma-delta, not hardware PWM despite the name
* Related settings: `switch.{name}.output_pin`, `switch.{name}.max_pwm`, `switch.{name}.pwm_period_ms`, `switch.{name}.startup_value`, `switch.{name}.default_on_value`
* Related pages: switch, mosfets, pwm-capable
* Example configuration:
  * switch.fan.output_type pwm  # Sigma-delta PWM, 0-255 range
  * switch.led.output_type digital  # Simple on/off
  * switch.servo.output_type hwpwm  # Hardware PWM for precise servo control
  * switch.heater.output_type swpwm  # Software PWM, won't interfere with laser

#### `switch.{name}.output_on_command`

* Type: `string`
* Default: `""` (empty)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:99`
* Valid values: Any valid G-code or M-code command string
  * Use underscore `_` to represent spaces (e.g., `M117_Switch_ON`)
  * Empty string `""` disables output command execution
* Corresponding v1 setting: `switch.{name}.output_on_command`
* Corresponding v2 setting: `switch.{name}.output_on_command`
* Description: Specifies a G-code command to execute when the switch transitions to the ON state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces to allow multi-word commands.
  * Commands are executed via the G-code parser (same as console commands, lines 517-523)
  * Underscores are replaced with spaces before execution (e.g., `M117_Hello_World` becomes `M117 Hello World`, line 281)
  * Commands execute when switch state changes to ON (either from input pin, input command, or public data request)
  * Output commands execute in the main loop, not immediately
  * If both output_on_command and output pin are configured, both execute
  * Empty string disables command execution
* Related settings: `switch.{name}.output_off_command`, `switch.{name}.input_pin`, `switch.{name}.output_pin`
* Related pages: switch, supported-g-codes, console-commands
* Example configuration:
  * switch.estop.output_on_command abort  # Abort job on switch ON
  * switch.door.output_on_command M25  # Pause on door open
  * switch.vacuum.output_on_command M42_P2.5_S255  # Turn on vacuum via M42
  * switch.status.output_on_command M117_System_Active  # Display message

#### `switch.{name}.output_off_command`

* Type: `string`
* Default: `""` (empty)
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:100`
* Valid values: Any valid G-code or M-code command string
  * Use underscore `_` to represent spaces (e.g., `M117_Switch_OFF`)
  * Empty string `""` disables output command execution
  * Special value: `$J STOP` stops continuous jog (handled specially for input-pin switches, lines 287-289, 503-506)
* Corresponding v1 setting: `switch.{name}.output_off_command`
* Corresponding v2 setting: `switch.{name}.output_off_command`
* Description: Specifies a G-code command to execute when the switch transitions to the OFF state. The command is sent to the G-code parser and executed. Underscores in the command are replaced with spaces to allow multi-word commands.
  * Commands are executed via the G-code parser (same as console commands)
  * Underscores are replaced with spaces before execution (line 282)
  * Commands execute when switch state changes to OFF (either from input pin, input command, or public data request)
  * Output commands execute in the main loop, not immediately
  * Special handling: `$J STOP` triggers emergency stop request for continuous jog (only works with input pins, lines 503-506)
  * If both output_off_command and output pin are configured, both execute
  * Empty string disables command execution
* Related settings: `switch.{name}.output_on_command`, `switch.{name}.input_pin`, `switch.{name}.output_pin`
* Related pages: switch, supported-g-codes, console-commands
* Example configuration:
  * switch.estop.output_off_command resume  # Resume job on switch OFF
  * switch.door.output_off_command M24  # Resume on door close
  * switch.vacuum.output_off_command M42_P2.5_S0  # Turn off vacuum via M42
  * switch.status.output_off_command M117_System_Idle  # Display message
  * switch.jog.output_off_command $J_STOP  # Stop continuous jog

#### `switch.{name}.startup_state`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:101`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.{name}.startup_state`
* Corresponding v2 setting: `switch.{name}.startup_state`
* Description: Sets the initial state of the switch when the system boots. When `true`, the switch starts in the ON state. When `false`, the switch starts in the OFF state. For input-pin switches, this setting is overridden by the actual pin state.
  * For output-type switches, this determines the initial output state (lines 210-246)
  * For PWM outputs with `startup_state true`, uses `default_on_value` instead of `startup_value` (lines 224-225, 238-239)
  * For input-pin switches (momentary mode), initial state is read from pin and overrides this setting (lines 197-200)
  * For input-pin switches (toggle mode), this setting is used as the initial state until first toggle
  * Does not apply to failsafe or halt conditions (see `failsafe_set_to` and `halt_set_to`)
* Related settings: `switch.{name}.startup_value`, `switch.{name}.default_on_value`, `switch.{name}.input_pin_behavior`
* Related pages: switch, motion-control
* Example configuration:
  * switch.fan.startup_state false  # Fan off at boot
  * switch.psu.startup_state true  # PSU on at boot
  * switch.light.startup_state true  # Light on at boot

#### `switch.{name}.startup_value`

* Type: `number`
* Default: varies by output type - SIGMADELTA: `max_pwm` (typically 255), HWPWM: `0`, SWPWM: `0`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:209` (SIGMADELTA), `Switch.cpp:222` (HWPWM), `Switch.cpp:236` (SWPWM)
* Valid values:
  * SIGMADELTA (pwm): 0 to `max_pwm` (default 0-255)
  * HWPWM: 0 to 100 (percentage)
  * SWPWM: 0 to 100 (percentage)
  * DIGITAL: Ignored (digital outputs have no PWM value)
* Corresponding v1 setting: `switch.{name}.startup_value`
* Corresponding v2 setting: `switch.{name}.startup_value`
* Description: Sets the PWM value when the switch is in the OFF state (or at startup if `startup_state` is `false`). For SIGMADELTA PWM, this is the 0-255 value. For hardware/software PWM, this is the 0-100 percentage. Also used as the value to set on HALT for HWPWM and SWPWM.
  * Only applies to PWM output types (pwm, hwpwm, swpwm)
  * For SIGMADELTA: value is scaled by `max_pwm` setting (line 209)
  * For HWPWM/SWPWM: value is a percentage (0.0 to 100.0, lines 222, 236)
  * Used when `startup_state` is `false` or when switch is turned OFF (lines 227, 241)
  * For HWPWM/SWPWM, this is the value set during HALT condition (lines 71-72, 383, 386, 460, 463)
  * Ignored for digital output type
* Related settings: `switch.{name}.startup_state`, `switch.{name}.output_type`, `switch.{name}.max_pwm`, `switch.{name}.default_on_value`
* Related pages: switch, mosfets, pwm-capable
* Example configuration:
  * switch.fan.output_type pwm
  * switch.fan.startup_value 128  # Start at 50% PWM (128/255)
  * switch.servo.output_type hwpwm
  * switch.servo.startup_value 7.5  # Servo neutral position (7.5%)
  * switch.dimmer.output_type swpwm
  * switch.dimmer.startup_value 0  # Start completely off

#### `switch.{name}.default_on_value`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:223` (HWPWM), `Switch.cpp:237` (SWPWM)
* Typical values: `7.5` (servo neutral 1.5ms pulse at 20ms period), `50` (50% brightness), `100` (full speed)
* Valid values: 0 to 100 (percentage)
* Corresponding v1 setting: `switch.{name}.default_on_value`
* Corresponding v2 setting: `switch.{name}.default_on_value`
* Description: Sets the PWM duty cycle percentage when the switch is turned ON (without an explicit `S` parameter). Only applies to hardware PWM and software PWM output types. This is the value used when the switch is turned on via command or startup state.
  * Only applies to HWPWM and SWPWM output types (lines 223, 237)
  * Ignored for SIGMADELTA (pwm) and DIGITAL output types
  * Used when switch is turned ON without an explicit `S` parameter (e.g., plain `M106` instead of `M106 S50`)
  * When `startup_state` is `true`, this value is used instead of `startup_value` (lines 224-225, 238-239)
  * Can be overridden by `S` parameter in commands (e.g., `M106 S75` sets to 75%, lines 340-348, 355-364)
* Related settings: `switch.{name}.startup_value`, `switch.{name}.output_type`, `switch.{name}.pwm_period_ms`
* Related pages: switch, pwm-capable, mosfets
* Example configuration:
  * switch.servo.output_type hwpwm
  * switch.servo.pwm_period_ms 20
  * switch.servo.default_on_value 7.5  # Servo neutral (1.5ms pulse)
  * switch.fan.output_type hwpwm
  * switch.fan.default_on_value 100  # Full speed when turned on
  * switch.led.output_type swpwm
  * switch.led.default_on_value 50  # 50% brightness when on

#### `switch.{name}.max_pwm`

* Type: `number`
* Default: `255`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:208`
* Maximum value: `255` (enforced by Pwm class, 8-bit PWM limit)
* Typical values: `128` (50% max power), `192` (75% max power), `210` (82% max power), `255` (full range)
* Valid values: 0 to 255
* Corresponding v1 setting: `switch.{name}.max_pwm`
* Corresponding v2 setting: `switch.{name}.max_pwm`
* Description: Sets the maximum PWM value for sigma-delta PWM output. Allows limiting the maximum output power/speed when using PWM mode. The `S` parameter in commands is scaled from 0-255 to 0-`max_pwm`.
  * Only applies to SIGMADELTA (pwm) output type (line 208)
  * Ignored for DIGITAL, HWPWM, and SWPWM output types
  * The `S` parameter is scaled: `actual_pwm = S * max_pwm / 255` (line 322)
  * Example: If `max_pwm` is 128, `M106 S255` will output PWM value of 128 (not 255)
  * Useful for limiting fan speed or power to devices that don't need full power
  * Default 255 means no limiting (full range)
* Related settings: `switch.{name}.output_type`, `switch.{name}.startup_value`
* Related pages: switch, mosfets
* Example configuration:
  * switch.fan.output_type pwm
  * switch.fan.max_pwm 255  # Full range (no limiting)
  * switch.hotend_fan.output_type pwm
  * switch.hotend_fan.max_pwm 128  # Limit to 50% maximum speed
  * switch.case_fan.output_type pwm
  * switch.case_fan.max_pwm 210  # Limit to ~82% maximum speed

#### `switch.{name}.pwm_period_ms`

* Type: `number`
* Default: `20` (milliseconds, 50Hz)
* Units: ms
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:218` (HWPWM, converted to microseconds), `Switch.cpp:232` (SWPWM, used directly in milliseconds)
* Typical values: `20` (50Hz standard servo), `10` (100Hz faster servo), `5` (200Hz for LED dimming), `1` (1kHz), `0.1` (10kHz for heater control)
* Valid values:
  * HWPWM: Any positive float value (specified in ms, converted to µs internally, line 218), supports fractional values
  * SWPWM: Any positive float value in milliseconds (line 232), fractional values not supported
* Corresponding v1 setting: `switch.{name}.pwm_period_ms`
* Corresponding v2 setting: none (use `[pwm1] frequency` or `[pwm2] frequency` global settings)
* Description: Sets the PWM period in milliseconds for hardware PWM and software PWM outputs. This determines the PWM frequency. For servo control, typical value is 20ms (50Hz). For other applications, different frequencies may be appropriate.
  * Only applies to HWPWM and SWPWM output types (lines 218, 232)
  * Ignored for DIGITAL and SIGMADELTA (pwm) output types
  * HWPWM: Period is converted from milliseconds to microseconds (`value * 1000`, line 219)
  * SWPWM: Period is used directly in milliseconds (line 233), fractional values are not supported
  * Lower period = higher frequency = faster PWM switching
  * For servos: Standard is 20ms (50Hz), some servos support 10ms (100Hz)
  * For LEDs: Higher frequencies (>100Hz) prevent visible flicker
  * For heaters: Very high frequencies (1-10kHz) for smooth power control
* Related settings: `switch.{name}.output_type`, `switch.{name}.default_on_value`
* Related pages: switch, pwm-capable, mosfets
* Example configuration:
  * switch.servo.output_type hwpwm
  * switch.servo.pwm_period_ms 20  # 50Hz for standard servos
  * switch.fast_servo.output_type hwpwm
  * switch.fast_servo.pwm_period_ms 10  # 100Hz for faster response
  * switch.led.output_type swpwm
  * switch.led.pwm_period_ms 5  # 200Hz to avoid visible flicker
  * switch.heater.output_type hwpwm
  * switch.heater.pwm_period_ms 0.1  # 10kHz for heater control

#### `switch.{name}.failsafe_set_to`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:123`
* Valid values: `0`, `1`
  * `0` - Set pin LOW on failsafe condition
  * `1` - Set pin HIGH on failsafe condition
* Corresponding v1 setting: `switch.{name}.failsafe_set_to`
* Corresponding v2 setting: `switch.{name}.failsafe_set_to`
* Description: Defines the pin state to set during a crash, watchdog reset, or debug halt condition. This is a safety feature to ensure outputs are in a safe state when the system fails. Also configures the MRI (Monitor for Remote Inspection) debug behavior.
  * Only applies to output-type switches (not input-pin switches)
  * Sets the pin state when system crashes, watchdog triggers, or enters debug mode
  * Configured via MRI hooks (`set_high_on_debug` or `set_low_on_debug`, lines 133, 135, 149, 151, 165, 167, 183, 185)
  * Different from `halt_set_to` which handles M112 HALT commands
  * Can be overridden by `ignore_on_halt` setting
  * CRITICAL: Choose value that puts system in safe state for your hardware
* Related settings: `switch.{name}.halt_set_to`, `switch.{name}.ignore_on_halt`, `switch.{name}.output_pin`
* Related pages: switch, emergencystop, killbutton
* Example configuration:
  * switch.fan.failsafe_set_to 0  # Turn fan OFF on crash
  * switch.estop.failsafe_set_to 1  # Activate estop on crash
  * switch.psu.failsafe_set_to 0  # Turn PSU OFF on crash
  * switch.brake.failsafe_set_to 1  # Engage brake on crash

#### `switch.{name}.halt_set_to`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:125`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.{name}.halt_set_to`
* Corresponding v2 setting: `switch.{name}.halt_set_to`
* Description: Defines the switch state to set during a HALT condition (typically triggered by M112 emergency stop or system halt). When a halt occurs, the switch is set to this state unless `ignore_on_halt` is true.
  * Only applies to output-type switches (not input-pin switches)
  * Triggered by M112 emergency stop or system halt events (lines 62-77)
  * For PWM outputs (HWPWM/SWPWM), `startup_value` is used as the actual value (lines 71-72)
  * For digital outputs, this boolean directly controls the pin state (lines 69-70)
  * Can be overridden by setting `ignore_on_halt` to `true`
  * Different from `failsafe_set_to` which handles crash/debug conditions
* Related M-Codes:
  * M112 - Emergency stop (HALT condition)
* Related settings: `switch.{name}.startup_value`, `switch.{name}.failsafe_set_to`, `switch.{name}.ignore_on_halt`
* Related pages: switch, emergencystop, stopping-smoothie
* Example configuration:
  * switch.fan.halt_set_to false  # Turn fan OFF on halt
  * switch.estop.halt_set_to true  # Activate estop on halt
  * switch.psu.halt_set_to false  # Turn PSU OFF on halt
  * switch.brake.halt_set_to true  # Engage brake on halt

#### `switch.{name}.ignore_on_halt`

* Type: `bool`
* Default: `false` (for output switches), automatically `true` for input-pin switches
* Module: `switch`
* Context: Module instance setting
* Defined in: `modules/tools/switch/Switch.cpp:124`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in later v1 firmware)
* Corresponding v2 setting: `switch.{name}.ignore_on_halt`
* Description: When set to `true`, prevents the switch from changing state during HALT conditions (M112 emergency stop). Useful for switches that should maintain their current state during emergency stops rather than being forced to a specific state.
  * Automatically set to `true` for input-pin switches (line 112, cannot be overridden)
  * For output switches, defaults to `false`
  * When `true`, both `halt_set_to` and `failsafe_set_to` are ignored during halt (lines 64-65)
  * Useful for non-safety-critical outputs (lights, status indicators, etc.)
  * Safety-critical outputs should use `false` to ensure proper halt behavior
* Related settings: `switch.{name}.halt_set_to`, `switch.{name}.failsafe_set_to`, `switch.{name}.input_pin`
* Related pages: switch, emergencystop, stopping-smoothie
* Example configuration:
  * switch.fan.ignore_on_halt false  # Fan controlled by halt_set_to
  * switch.light.ignore_on_halt true  # Light stays in current state
  * switch.estop.ignore_on_halt false  # Estop responds to halt
  * switch.status_led.ignore_on_halt true  # LED not affected by halt

---

## Summary

The Switch module provides 18 configuration settings across several functional categories:

**Core Settings:**
- `switch.enable` - Enable/disable the switch instance

**Input Control:**
- `switch.input_pin` - Hardware pin input
- `switch.input_pin_behavior` - Momentary vs toggle behavior
- `switch.input_on_command` - G-code command to turn ON
- `switch.input_off_command` - G-code command to turn OFF
- `switch.subcode` - Command subcode matching

**Output Control:**
- `switch.output_pin` - Hardware pin output
- `switch.output_type` - Output mode (digital, pwm, hwpwm, swpwm)
- `switch.output_on_command` - G-code to execute on switch ON
- `switch.output_off_command` - G-code to execute on switch OFF

**PWM Configuration:**
- `switch.max_pwm` - Maximum PWM value (SIGMADELTA only)
- `switch.pwm_period_ms` - PWM period in milliseconds (HWPWM/SWPWM)
- `switch.startup_value` - PWM value when OFF or at startup
- `switch.default_on_value` - PWM value when ON (HWPWM/SWPWM)

**Startup & Safety:**
- `switch.startup_state` - Initial switch state at boot
- `switch.failsafe_set_to` - State on crash/debug
- `switch.halt_set_to` - State on HALT (M112)
- `switch.ignore_on_halt` - Ignore HALT events

**Common Use Cases:**
1. **Fan Control:** PWM output with command control (M106/M107)
2. **Servo Control:** Hardware PWM with precise timing (hwpwm, 20ms period)
3. **Emergency Stop:** Input pin with output command (abort/resume)
4. **Power Control:** Digital output with startup state and failsafe
5. **Status Indication:** Digital output ignoring halt conditions

---

## Temperature Switch

# Temperature Switch Module Configuration Settings

## Module Overview

The TemperatureSwitch module automatically toggles a Switch module based on temperature readings from a TemperatureControl module. This is commonly used to control cooling fans, water pumps, or other temperature-dependent devices for managing hot end cold zone temperature or other thermal management applications.

---

## Configuration Settings

### Core Settings

#### `temperatureswitch.{name}.enable`

* Type: `bool`
* Default: `false`
* Module: `temperatureswitch`
* Context: Module instance setting (multiple instances can be created)
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:72`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperatureswitch.{name}.enable`
* Corresponding v2 setting: `temperature switch.{name}.enable`
* Description: Creates and enables a new TemperatureSwitch module instance. When set to true, this module will monitor temperature from a specified TemperatureControl module and automatically control a Switch module based on configured thresholds and trigger conditions.
  * Multiple temperature switch instances can be configured simultaneously by using different instance names.
  * Each instance requires a unique module name (e.g., hotend, bed, chamber).
  * Module will not function unless enabled.
  * Must be accompanied by valid designator and switch configuration.
* Related settings: `temperatureswitch.{name}.designator`, `temperatureswitch.{name}.switch`, `temperature_control.{name}.designator`
* Related pages: temperatureswitch, temperatureswitch-options, temperaturecontrol, switch
* Example configuration:
  * temperatureswitch.hotend.enable true  # Enable hotend fan control
  * temperatureswitch.bed.enable true  # Enable bed cooling fan
  * temperatureswitch.chamber.enable true  # Enable chamber exhaust control

#### `temperatureswitch.{name}.designator`

* Type: `string`
* Default: `""` (empty string, except `hotend` instance defaults to `T` for backward compatibility)
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:78`
* Valid values: Single character matching a TemperatureControl module designator
  * `T` - Hotend/tool temperature (most common)
  * `B` - Heated bed temperature
  * `P` - Additional heater (e.g., chamber)
  * Must match exactly the designator configured in the corresponding temperature control module
* Required: yes (empty designator renders the temperature switch invalid)
* Corresponding v1 setting: `temperatureswitch.{name}.designator`
* Corresponding v2 setting: `temperature switch.{name}.designator`
* Description: Specifies which TemperatureControl module to monitor by matching its designator character. The temperature switch reads the current temperature from the temperature control module with this designator and uses it to determine when to trigger the switch. If multiple temperature control modules share the same designator, the highest temperature among them is used for comparison.
  * For backward compatibility, `temperatureswitch.hotend` defaults to designator `T` if not specified (deprecated behavior).
  * Empty designator string causes the temperature switch to be considered invalid and non-functional.
  * Case-sensitive matching - `T` and `t` are different designators.
  * The temperature reading is polled at intervals defined by heatup_poll and cooldown_poll settings.
* Related settings: `temperature_control.{name}.designator`, `temperatureswitch.{name}.threshold_temp`
* Related pages: temperatureswitch, temperaturecontrol, temperaturecontrol-options
* Example configuration:
  * temperatureswitch.hotend.designator T  # Monitor hotend temperature
  * temperatureswitch.bed_fan.designator B  # Monitor bed temperature
  * temperatureswitch.chamber.designator P  # Monitor chamber heater

#### `temperatureswitch.{name}.switch`

* Type: `string`
* Default: `""` (empty string)
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:90`
* Valid values: Name of any configured Switch module
  * Must match exactly the instance name used in the switch module configuration
  * Common switch names: `fan`, `misc`, `small_mosfet3`, `small_mosfet4`, etc.
* Required: yes (empty switch name makes the temperature switch entry invalid)
* Deprecated: The parameter name `type` is deprecated but supported for backward compatibility (line 93)
* Corresponding v1 setting: `temperatureswitch.{name}.switch` or `temperatureswitch.{name}.type` (deprecated)
* Corresponding v2 setting: `temperature switch.{name}.switch`
* Description: Specifies the name of the Switch module to be controlled by this temperature switch. When temperature conditions are met, this switch will be toggled on or off according to the configured trigger mode and inversion settings. The switch must be configured and enabled in the switch module settings before it can be controlled.
  * The specified switch must exist and be properly configured with output_pin and output_type.
  * Typically controls one of the small MOSFETs on the Smoothieboard.
  * The deprecated parameter name `type` is checked as fallback if `switch` is not defined (backward compatibility).
  * Switch state is only changed when armed (either always armed if arm_mcode=0, or manually armed via M-code).
* Related settings: `switch.{name}.enable`, `switch.{name}.output_pin`, `temperatureswitch.{name}.inverted`
* Related pages: temperatureswitch, switch, switch-options, mosfets
* Example configuration:
  * temperatureswitch.hotend.switch fan  # Control main cooling fan
  * temperatureswitch.chamber.switch misc  # Control chamber exhaust fan
  * temperatureswitch.bed.switch small_mosfet4  # Control bed cooling fan on small mosfet 4

### Temperature Threshold

#### `temperatureswitch.{name}.threshold_temp`

* Type: `number`
* Default: `50.0`
* Units: °C (degrees Celsius)
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:122`
* Typical values: `40.0` (low-temperature applications), `60.0` (standard hotend cooling), `80.0` (high-temperature safety systems)
* Corresponding v1 setting: `temperatureswitch.{name}.threshold_temp`
* Corresponding v2 setting: `temperature switch.{name}.threshold_temp`
* Description: Sets the temperature threshold in degrees Celsius at which the switch state changes. The exact behavior depends on the trigger mode: in "level" mode, the switch turns on above this temperature and off below it; in "rising" mode, the switch triggers when crossing upward through this threshold; in "falling" mode, the switch triggers when crossing downward through this threshold.
  * Temperature comparison uses: `current_temp >= threshold_temp` for HIGH_TEMP state determination (line 162).
  * For typical hotend cooling applications, set this 10-20°C below the hotend operating temperature.
  * Inverted mode reverses the on/off logic but uses the same threshold comparison.
  * Temperature is read from the highest value among all temperature controllers matching the configured designator.
  * The threshold applies regardless of whether the switch is inverted or not - inversion only affects the final switch output state.
* Related settings: `temperatureswitch.{name}.designator`, `temperatureswitch.{name}.trigger`, `temperatureswitch.{name}.inverted`
* Related pages: temperatureswitch, temperaturecontrol, temperatureswitch-options
* Example configuration:
  * temperatureswitch.hotend.threshold_temp 60.0  # Turn on fan at 60°C
  * temperatureswitch.bed.threshold_temp 50.0  # Lower threshold for bed
  * temperatureswitch.safety.threshold_temp 80.0  # High-temp safety cutoff

### Polling Intervals

#### `temperatureswitch.{name}.heatup_poll`

* Type: `number`
* Default: `15`
* Units: seconds
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:125`
* Typical values: `10` (faster response), `15` (default balanced), `30` (slower response, less overhead)
* Corresponding v1 setting: `temperatureswitch.{name}.heatup_poll`
* Corresponding v2 setting: `temperature switch.{name}.heatup_poll`
* Description: Defines the polling interval in seconds when the system is in the LOW_TEMP state (below threshold temperature). This controls how frequently the temperature is checked while heating up. A shorter interval provides faster response when temperature rises toward the threshold, but increases system overhead. The polling occurs on the second tick event, so actual timing may vary by ±1 second.
  * Active when current temperature < threshold_temp (LOW_TEMP state).
  * Faster polling during heatup ensures timely switch activation.
  * After temperature crosses threshold, automatically switches to cooldown_poll interval.
  * Initial state uses heatup_poll interval and performs first check immediately (line 131).
  * Lower values (e.g., 5-10 seconds) provide quicker response but consume more processing time.
  * Higher values (e.g., 20-30 seconds) reduce overhead but may delay switch activation.
* Related settings: `temperatureswitch.{name}.cooldown_poll`, `temperatureswitch.{name}.threshold_temp`
* Related pages: temperatureswitch, temperatureswitch-options
* Example configuration:
  * temperatureswitch.hotend.heatup_poll 15  # Check every 15 seconds while heating
  * temperatureswitch.bed.heatup_poll 20  # Slower polling for bed (less critical)
  * temperatureswitch.safety.heatup_poll 5  # Fast polling for safety applications

#### `temperatureswitch.{name}.cooldown_poll`

* Type: `number`
* Default: `60`
* Units: seconds
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:126`
* Typical values: `30` (frequent monitoring), `60` (default balanced), `120` (infrequent monitoring, minimal overhead)
* Corresponding v1 setting: `temperatureswitch.{name}.cooldown_poll`
* Corresponding v2 setting: `temperature switch.{name}.cooldown_poll`
* Description: Defines the polling interval in seconds when the system is in the HIGH_TEMP state (at or above threshold temperature). This controls how frequently the temperature is checked while at operating temperature or cooling down. A longer interval reduces system overhead during stable high-temperature operation, while still monitoring for temperature drops that should trigger switch state changes.
  * Active when current temperature >= threshold_temp (HIGH_TEMP state).
  * Slower polling during stable operation reduces system load.
  * After temperature falls below threshold, automatically switches to heatup_poll interval.
  * Suitable for applications where switch should remain on for extended periods.
  * Polling occurs on the second tick event, so actual timing may vary by ±1 second.
  * Higher values reduce processing overhead when temperature is stable above threshold.
* Related settings: `temperatureswitch.{name}.heatup_poll`, `temperatureswitch.{name}.threshold_temp`
* Related pages: temperatureswitch, temperatureswitch-options
* Example configuration:
  * temperatureswitch.hotend.cooldown_poll 60  # Check every minute when hot
  * temperatureswitch.bed.cooldown_poll 90  # Less frequent for bed cooling
  * temperatureswitch.safety.cooldown_poll 30  # More frequent for safety monitoring

### Trigger Behavior

#### `temperatureswitch.{name}.trigger`

* Type: `string`
* Default: `"level"`
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:111`
* Valid values: `level`, `rising`, `falling`
  * `level` - Switch state tracks temperature continuously (on when high, off when low)
  * `rising` - Switch turns on once when temperature crosses threshold upward (edge-triggered)
  * `falling` - Switch turns off once when temperature crosses threshold downward (edge-triggered)
* Corresponding v1 setting: `temperatureswitch.{name}.trigger`
* Corresponding v2 setting: `temperature switch.{name}.trigger`
* Description: Determines the triggering behavior mode of the temperature switch. This setting controls whether the switch responds to sustained temperature levels, rising temperature edges, or falling temperature edges. The mode fundamentally changes how temperature threshold crossings are interpreted and affects the arming behavior.
  * **Level mode:** Switch follows temperature state continuously. When armed and temperature >= threshold, switch is on; when temperature < threshold, switch is off. Remains active as long as armed (lines 176-178).
  * **Rising mode:** Switch activates only when transitioning from LOW_TEMP to HIGH_TEMP (edge detection). Requires arming via M-code for each activation cycle (lines 181-183).
  * **Falling mode:** Switch deactivates only when transitioning from HIGH_TEMP to LOW_TEMP (edge detection). Requires arming via M-code for each activation cycle (lines 186-188).
  * Edge-triggered modes (rising/falling) automatically disarm after triggering (line 220-222), requiring re-arming for subsequent triggers.
  * Invalid trigger values default to "level" mode (line 115).
  * State changes only occur when temperature crosses the threshold boundary, not during stable states.
  * Works in conjunction with inverted setting - inversion is applied after trigger logic determines switch state.
* Related settings: `temperatureswitch.{name}.threshold_temp`, `temperatureswitch.{name}.inverted`, `temperatureswitch.{name}.arm_mcode`
* Related pages: temperatureswitch, temperatureswitch-options
* Example configuration:
  * temperatureswitch.hotend.trigger level  # Continuous fan control (most common)
  * temperatureswitch.exhaust.trigger rising  # Turn on exhaust once when temperature rises
  * temperatureswitch.safety.trigger falling  # Alert when temperature drops unexpectedly

#### `temperatureswitch.{name}.inverted`

* Type: `bool`
* Default: `false`
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:108`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperatureswitch.{name}.inverted`
* Corresponding v2 setting: `temperature switch.{name}.inverted`
* Description: Reverses the normal switch control logic. When enabled, the switch turns off when temperature exceeds the threshold (instead of turning on), and turns on when temperature falls below the threshold. This is useful for heaters or devices that should activate during cooling rather than heating. The inversion occurs at the final switch control stage, after all trigger logic has been evaluated.
  * **Normal mode (false):** Temperature >= threshold → switch on; temperature < threshold → switch off
  * **Inverted mode (true):** Temperature >= threshold → switch off; temperature < threshold → switch on
  * Inversion is applied in set_switch() function after trigger type determines the desired state (line 225).
  * Works with all trigger modes (level, rising, falling).
  * Temperature threshold comparison logic remains unchanged; only the final switch output is inverted.
  * Useful for controlling heating elements that should turn off when target temperature is reached.
  * Common use case: emergency cooling systems that activate when temperature drops too low.
* Related settings: `temperatureswitch.{name}.trigger`, `temperatureswitch.{name}.threshold_temp`
* Related pages: temperatureswitch, switch
* Example configuration:
  * temperatureswitch.hotend.inverted false  # Normal: fan on when hot
  * temperatureswitch.heater_control.inverted true  # Inverted: heater off when hot
  * temperatureswitch.emergency_heat.inverted true  # Turn on heater when temp drops below threshold

### Arming Control

#### `temperatureswitch.{name}.arm_mcode`

* Type: `number`
* Default: `0`
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:118`
* Valid values: `0` (always armed), or any positive integer M-code number (1-65535)
  * `0` - Always armed (no manual arming required)
  * Positive integer - Custom M-code number for arming/disarming
  * Should not conflict with standard G-code M-codes (avoid M0-M999)
  * Typical values: `1100`, `1101`, `1200`, etc. (custom M-codes)
* Corresponding v1 setting: `temperatureswitch.{name}.arm_mcode`
* Corresponding v2 setting: `temperature switch.{name}.arm_mcode`
* Description: Defines a custom M-code command that must be executed to arm the temperature switch before it can trigger. This provides manual control over when the temperature switch is active, preventing unwanted switch activation. Setting to 0 disables the arming requirement, making the switch always armed and operating automatically based on temperature.
  * **When set to 0:** Switch is always armed and operates automatically (line 133).
  * **When set to M-code:** Switch starts disarmed and requires manual arming via G-code command.
  * **Arming command:** `M<code> S1` arms the switch (e.g., `M1100 S1`) (line 148).
  * **Disarming command:** `M<code> S0` disarms the switch (e.g., `M1100 S0`).
  * **Level trigger mode:** Switch remains armed and continues operating while armed.
  * **Edge trigger modes (rising/falling):** Switch automatically disarms after triggering once (line 220-222), requiring re-arming for subsequent triggers.
  * Provides safety mechanism for critical temperature-dependent operations.
  * Disarmed switches do not control their associated switch modules (line 218).
  * Module only registers for G-code events if arm_mcode != 0 (line 138-140).
* Related settings: `temperatureswitch.{name}.trigger`, `temperatureswitch.{name}.switch`
* Related pages: temperatureswitch, console-commands, supported-g-codes
* Example configuration:
  * temperatureswitch.hotend.arm_mcode 0  # Always armed, automatic operation
  * temperatureswitch.safety.arm_mcode 1100  # Requires M1100 S1 to arm
  * temperatureswitch.emergency.arm_mcode 1101  # Manual control via M1101

### Deprecated Settings

#### `temperatureswitch.{name}.type` (DEPRECATED)

* Type: `string`
* Default: `""` (empty string)
* Module: `temperatureswitch`
* Context: Module instance setting
* Defined in: `modules/tools/temperatureswitch/TemperatureSwitch.cpp:93`
* Valid values: Same as `temperatureswitch.{name}.switch` - name of any configured Switch module
* Deprecated: Replaced by `temperatureswitch.{name}.switch` but supported for backward compatibility
* Corresponding v1 setting: `temperatureswitch.{name}.type` (deprecated)
* Corresponding v2 setting: none (use `temperature switch.{name}.switch`)
* Description: Legacy parameter name for specifying the switch module to control. This parameter has been replaced by `temperatureswitch.switch` but is still supported for backward compatibility with older configurations. New configurations should use the `switch` parameter instead.
  * Only used as fallback if `temperatureswitch.{name}.switch` is not defined (line 91-93).
  * Maintained for backward compatibility with configurations from older Smoothieware versions.
  * Functionally identical to `temperatureswitch.{name}.switch` parameter.
  * Will be checked if switch parameter is empty string.
  * Not recommended for new configurations - use `switch` parameter for clarity.
* Related settings: `temperatureswitch.{name}.switch`
* Related pages: temperatureswitch, switch
* Example configuration:
  * # Deprecated syntax (still works)
  * temperatureswitch.hotend.type fan
  * # Preferred modern syntax
  * temperatureswitch.hotend.switch fan

---

## Complete Configuration Examples

### Basic Hotend Cooling Fan

```
# Simple level-triggered fan control
# Turns on at 60°C, off below 60°C
temperatureswitch.hotend.enable true
temperatureswitch.hotend.designator T
temperatureswitch.hotend.switch fan
temperatureswitch.hotend.threshold_temp 60.0
temperatureswitch.hotend.heatup_poll 15
temperatureswitch.hotend.cooldown_poll 60
temperatureswitch.hotend.trigger level
temperatureswitch.hotend.inverted false
temperatureswitch.hotend.arm_mcode 0
```

### Edge-Triggered Safety System

```
# Exhaust fan triggered once when temperature rises above 80°C
# Requires manual arming via M1100 S1
temperatureswitch.safety.enable true
temperatureswitch.safety.designator T
temperatureswitch.safety.switch exhaust_fan
temperatureswitch.safety.threshold_temp 80.0
temperatureswitch.safety.heatup_poll 10
temperatureswitch.safety.cooldown_poll 30
temperatureswitch.safety.trigger rising
temperatureswitch.safety.inverted false
temperatureswitch.safety.arm_mcode 1100
```

### Inverted Heater Control

```
# Heater that turns off when temperature exceeds threshold
# Inverted logic: on when cool, off when hot
temperatureswitch.heater.enable true
temperatureswitch.heater.designator B
temperatureswitch.heater.switch bed_heater
temperatureswitch.heater.threshold_temp 65.0
temperatureswitch.heater.heatup_poll 20
temperatureswitch.heater.cooldown_poll 60
temperatureswitch.heater.trigger level
temperatureswitch.heater.inverted true
temperatureswitch.heater.arm_mcode 0
```

### Multiple Temperature Switch Instances

```
# Hotend cooling fan
temperatureswitch.hotend.enable true
temperatureswitch.hotend.designator T
temperatureswitch.hotend.switch fan
temperatureswitch.hotend.threshold_temp 60.0
temperatureswitch.hotend.heatup_poll 15
temperatureswitch.hotend.cooldown_poll 60
temperatureswitch.hotend.trigger level

# Bed cooling fan (different switch and threshold)
temperatureswitch.bed.enable true
temperatureswitch.bed.designator B
temperatureswitch.bed.switch misc
temperatureswitch.bed.threshold_temp 50.0
temperatureswitch.bed.heatup_poll 20
temperatureswitch.bed.cooldown_poll 90
temperatureswitch.bed.trigger level

# Chamber exhaust (edge-triggered)
temperatureswitch.chamber.enable true
temperatureswitch.chamber.designator P
temperatureswitch.chamber.switch small_mosfet4
temperatureswitch.chamber.threshold_temp 45.0
temperatureswitch.chamber.trigger rising
temperatureswitch.chamber.arm_mcode 1100
```

---

## Implementation Notes

### Module Architecture

- Each temperature switch instance polls temperature on a configurable interval using the ON_SECOND_TICK event
- Polling frequency dynamically switches between heatup_poll and cooldown_poll based on current state
- Temperature readings use the highest temperature from all matching temperature controllers (if multiple share same designator)
- Switch state changes only occur when temperature crosses the threshold boundary, not during stable temperature states
- Edge detection tracks LOW_TEMP to HIGH_TEMP (rising) or HIGH_TEMP to LOW_TEMP (falling) transitions

### State Machine

The module uses a simple state machine with three states:

- **NONE:** Initial state before first temperature reading (startup)
- **LOW_TEMP:** Current temperature < threshold_temp (uses heatup_poll interval)
- **HIGH_TEMP:** Current temperature >= threshold_temp (uses cooldown_poll interval)

State transitions trigger the trigger mode logic to determine whether to change the switch state.

### Trigger Modes

- **Level Mode:** Continuous state tracking - switch output follows temperature state as long as armed
- **Rising Mode:** One-shot activation on LOW_TEMP → HIGH_TEMP transition, then auto-disarms
- **Falling Mode:** One-shot deactivation on HIGH_TEMP → LOW_TEMP transition, then auto-disarms

### Arming Behavior

- **arm_mcode = 0:** Always armed, automatic operation based on temperature
- **arm_mcode ≠ 0 with level trigger:** Switch operates while armed, stays armed continuously
- **arm_mcode ≠ 0 with edge trigger:** Switch triggers once then auto-disarms, requires manual re-arming

### Performance Considerations

- First temperature check occurs immediately after module initialization (second_counter = current_delay at line 131)
- Actual polling intervals may vary by ±1 second due to second tick event timing
- Multiple temperature controllers with same designator: highest temperature value is used for comparison
- Switch state is queried before changing to avoid redundant state updates and unnecessary communication overhead

### Source Code References

- Main implementation: `modules/tools/temperatureswitch/TemperatureSwitch.cpp`
- Header file: `modules/tools/temperatureswitch/TemperatureSwitch.h`
- Configuration loading: Lines 69-142 in .cpp file
- Temperature comparison logic: Line 162 (`current_temp >= threshold_temp`)
- Trigger logic: Lines 175-190 in set_state() function
- Inversion logic: Line 225 in set_switch() function
- Arming logic: Lines 218-223 in set_switch() function

---

## Migration Notes: v1 to v2

### Naming Changes

All `temperatureswitch.*` settings in v1 are renamed to `temperature switch.*` in v2 (note the space). The functionality remains identical, but the configuration section name changes from underscore notation to space notation.

### Functional Equivalence

| v1 Setting | v2 Setting | Status |
|-----------|-----------|--------|
| `temperatureswitch.{name}.enable` | `temperature switch.{name}.enable` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.designator` | `temperature switch.{name}.designator` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.switch` | `temperature switch.{name}.switch` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.threshold_temp` | `temperature switch.{name}.threshold_temp` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.heatup_poll` | `temperature switch.{name}.heatup_poll` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.cooldown_poll` | `temperature switch.{name}.cooldown_poll` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.trigger` | `temperature switch.{name}.trigger` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.inverted` | `temperature switch.{name}.inverted` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.arm_mcode` | `temperature switch.{name}.arm_mcode` | ➜ Renamed (section only) |
| `temperatureswitch.{name}.type` | none (deprecated) | ✗ Not carried forward |

### v2 Additions

v2 adds one new setting:

* `temperature switch.{name}.start_armed` - Start in armed state (new in v2)

### Migration Steps

1. Change section name from `temperatureswitch` to `temperature switch` (add space)
2. Replace deprecated `type` parameter with `switch` parameter
3. All other settings transfer directly with identical values and behavior
4. Consider using the new `start_armed` setting in v2 if applicable

---

---

## Spindle Module

# Spindle Module Configuration Settings

## Module Overview

* Module: `spindle`
* Purpose: Controls spindle motors for CNC machines using three different control methods: PWM (closed-loop PID), Analog (open-loop voltage), and Modbus (serial VFD communication)
* Total Settings: 20
* Source Files: `modules/tools/spindle/SpindleMaker.cpp`, `PWMSpindleControl.cpp`, `AnalogSpindleControl.cpp`, `ModbusSpindleControl.cpp`, `HuanyangSpindleControl.cpp`

---

## Core Configuration Settings

### `spindle.enable`

* Type: `bool`
* Default: `false`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/SpindleMaker.cpp:29`
* Valid values: `true`, `false`
* Corresponding v1 setting: `spindle.enable`
* Corresponding v2 setting: none (spindle control simplified in v2, use switch module)
* Description: Enables or disables the spindle module. When set to false, no spindle control type will be loaded and no spindle functionality will be available. Must be set to true to use any spindle functionality (PWM, analog, or modbus types).
  * When false, the system logs "NOTE: Spindle Module is disabled"
  * Applies to all spindle types (pwm, analog, modbus)
* Related pages: spindle-module, spindle-control, cnc-mill-guide, spindle-mosfet-control
* Example configuration:
  * spindle.enable true  # Enable spindle module

---

### `spindle.type`

* Type: `enum`
* Default: `"pwm"`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/SpindleMaker.cpp:37`
* Valid values: `"pwm"`, `"analog"`, `"modbus"`
  * `"pwm"` - PWM-based closed-loop PID control with tachometer feedback (default)
  * `"analog"` - Analog voltage output (0-10V or 0-5V) for VFD control
  * `"modbus"` - RS485 Modbus serial communication with VFD
* Corresponding v1 setting: `spindle.type`
* Corresponding v2 setting: none (spindle control simplified in v2)
* Description: Specifies the type of spindle control method to use. This setting determines which SpindleControl class is instantiated and dictates which additional configuration settings are required. PWM type requires feedback pin and PID tuning parameters. Analog type requires only PWM pin for voltage output. Modbus type requires serial pins (rx_pin, tx_pin, dir_pin) and vfd_type setting.
  * Each type uses different configuration settings (see applicability notes for each setting)
  * ERROR message if invalid: "ERROR: No valid spindle type defined"
* Related settings: `spindle.vfd_type`, `spindle.pwm_pin`, `spindle.feedback_pin`
* Related pages: spindle-module, spindle-control, spindle-mosfet-control
* Example configuration:
  * spindle.type pwm  # Closed-loop PID control
  * spindle.type analog  # Simple voltage control
  * spindle.type modbus  # Serial VFD control

---

### `spindle.vfd_type`

* Type: `enum`
* Default: `"none"`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/SpindleMaker.cpp:38`
* Valid values: `"none"`, `"huanyang"`
  * `"none"` - No VFD type specified (default)
  * `"huanyang"` - Huanyang VFD protocol (RS485 Modbus RTU)
* Required: yes (when spindle.type is "modbus")
* Corresponding v1 setting: `spindle.vfd_type`
* Corresponding v2 setting: none (Modbus spindle control removed in v2)
* Description: Specifies the VFD (Variable Frequency Drive) manufacturer/protocol when using Modbus communication. Only used when spindle.type is set to "modbus". Setting to "none" with modbus type will generate an error.
  * Huanyang VFDs must be configured with specific PD parameters:
    PD001=2 (RS485 control of run commands)
    PD002=2 (RS485 control of operating frequency)
    PD023=1 (Reverse run enabled)
    PD163=1 (RS485 Address: 1)
    PD164=1 (RS485 Baud rate: 9600)
    PD165=3 (RS485 Mode: RTU, 8N1)
  * ERROR message if none with modbus type: "ERROR: No valid spindle VFD type defined"
* Related settings: `spindle.type`, `spindle.rx_pin`, `spindle.tx_pin`, `spindle.dir_pin`
* Related pages: spindle-module, spindle-control
* Example configuration:
  * spindle.type modbus
  * spindle.vfd_type huanyang  # Huanyang VFD via Modbus

---

### `spindle.ignore_on_halt`

* Type: `bool`
* Default: `false`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/SpindleMaker.cpp:61`
* Valid values: `true`, `false`
  * `true` - Spindle continues running during halt (ignores halt events)
  * `false` - Spindle turns off during halt (safer, recommended)
* Corresponding v1 setting: `spindle.ignore_on_halt`
* Corresponding v2 setting: none
* Description: Determines whether the spindle should remain running when the system enters a halt state (emergency stop, alarm, limit switch hit, etc.). When false, spindle automatically turns off on system halt for safety. When true, spindle will NOT register for ON_HALT events and will keep running regardless of system state.
  * Setting to false is safer and recommended for most applications
  * Applies to all spindle types (pwm, analog, modbus)
  * When false, spindle turns off on emergency stop, limit switch hit, or alarm state
* Related pages: spindle-module, emergencystop, killbutton, endstops
* Example configuration:
  * spindle.ignore_on_halt false  # Turn off on halt (safe, recommended)
  * spindle.ignore_on_halt true  # Keep running during halt (use with caution)

---

## PWM Spindle Settings (type = "pwm")

The following settings apply when `spindle.type` is set to `"pwm"`. This mode provides closed-loop PID control using encoder/tachometer feedback.

### `spindle.pwm_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:71` (PWM type), `modules/tools/spindle/AnalogSpindleControl.cpp:36` (analog type)
* Valid values: Hardware PWM capable pins only
  * `2.0`, `2.1`, `2.2`, `2.3`, `2.4`, `2.5`
  * `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`
  * `3.25`, `3.26`
  * Pin modifiers: `!` for inverted output (e.g., `!2.4`)
  * `"nc"` - No pin assigned
* Required: yes (for PWM and analog types)
* Corresponding v1 setting: `spindle.pwm_pin`
* Corresponding v2 setting: none (use switch module instead)
* Description: Pin used to output PWM signal to the spindle motor controller or VFD. Must use a hardware PWM-capable pin from the list above. Non-PWM pins will generate an error and module will fail to load. Inverted output (! prefix) inverts the PWM duty cycle. For PWM type: outputs PID-controlled PWM signal (0-100% based on feedback). For analog type: outputs simple proportional PWM signal (RPM → duty cycle).
  * Applicable to: PWM spindle (spindle.type = "pwm") and Analog spindle (spindle.type = "analog")
  * ERROR message if invalid: "Error: Spindle PWM pin must be P2.0-2.5 or other PWM pin"
  * Normal polarity: High duty cycle = more power
  * Inverted polarity (!): Low duty cycle = more power
* Related settings: `spindle.pwm_period`, `spindle.max_pwm`, `spindle.type`
* Related pages: spindle-module, pinout, pwm-capable, mosfets
* Example configuration:
  * spindle.pwm_pin 2.4  # Pin 2.4 (normal polarity)
  * spindle.pwm_pin !2.4  # Pin 2.4 (inverted output)

---

### `spindle.pwm_period`

* Type: `number`
* Default: `1000` (1000µs = 1kHz)
* Units: µs (microseconds)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:86` (PWM type), `modules/tools/spindle/AnalogSpindleControl.cpp:50` (analog type)
* Typical values: `100` (10 kHz), `1000` (1 kHz, default), `10000` (100 Hz)
* Corresponding v1 setting: `spindle.pwm_period`
* Corresponding v2 setting: `pwm1.frequency` (now global PWM frequency setting in Hz, inverse relationship)
* Description: PWM period in microseconds, which determines the PWM frequency. PWM frequency = 1,000,000 / pwm_period (Hz). Higher frequencies (shorter periods) provide smoother motor control. Lower frequencies (longer periods) may be required by some motor controllers.
  * Applicable to: PWM spindle (spindle.type = "pwm") and Analog spindle (spindle.type = "analog")
  * Typical range: 100µs (10kHz) to 10000µs (100Hz)
  * Consult your motor controller/VFD documentation for optimal frequency
  * Conversion: Period (µs) = 1,000,000 / Frequency (Hz)
* Related settings: `spindle.pwm_pin`
* Related pages: spindle-module, spindle-control, pwm-capable
* Example configuration:
  * spindle.pwm_period 1000  # 1kHz PWM frequency (default)
  * spindle.pwm_period 100  # 10kHz PWM frequency (smoother)
  * spindle.pwm_period 10000  # 100Hz PWM frequency (some VFDs)

---

### `spindle.feedback_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:93`
* Valid values: Port 0 or Port 2 pins only (interrupt-capable)
  * `0.x` (any pin on port 0, e.g., `0.25`)
  * `2.x` (any pin on port 2, e.g., `2.6`)
  * `"nc"` - No feedback (will cause errors in PWM mode)
* Required: yes (for PWM spindle type, PID control needs feedback)
* Corresponding v1 setting: `spindle.feedback_pin`
* Corresponding v2 setting: none
* Description: Input pin for encoder/tachometer feedback pulses used in closed-loop PID control. Must be on Port 0 or Port 2 for interrupt capability. Connects to encoder/tachometer output that pulses on each revolution. Configured for rising-edge triggering. Works with optical encoders, hall effect sensors, or IR tachometers.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * ERROR message if invalid: "Error: Spindle feedback pin has to be on P0 or P2."
  * Interrupt priority set to 16 (NVIC_SetPriority)
  * Rising edge detection configured
* Related settings: `spindle.pulses_per_rev`, `spindle.control_P`, `spindle.control_I`, `spindle.control_D`
* Related pages: spindle-module, pinout, pin-configuration
* Example configuration:
  * spindle.feedback_pin 2.6  # Port 2 pin 6 for feedback
  * spindle.feedback_pin 0.25  # Port 0 pin 25 for feedback

---

### `spindle.pulses_per_rev`

* Type: `number`
* Default: `1.0`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:55`
* Typical values: `1` (simple tachometer), `3` (3-slot encoder disc), higher values for multi-slot encoders
* Corresponding v1 setting: `spindle.pulses_per_rev`
* Corresponding v2 setting: none
* Description: Number of feedback pulses generated by the encoder/tachometer per spindle revolution. Must match the physical encoder/tachometer configuration. Used to calculate RPM from pulse timing: RPM = 60,000,000 / (pulse_period_µs × pulses_per_rev). Higher pulse counts provide more accurate RPM measurement.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Example: 3-slot encoder disc = 3 pulses per revolution
  * Incorrect value will cause RPM calculation errors and poor PID performance
  * Must be positive number (typically integer)
* Related settings: `spindle.feedback_pin`, `spindle.control_smoothing`
* Related pages: spindle-module, spindle-control
* Example configuration:
  * spindle.pulses_per_rev 3  # 3 pulses per revolution
  * spindle.pulses_per_rev 1  # 1 pulse per revolution (simple tachometer)

---

### `spindle.default_rpm`

* Type: `number`
* Default: `5000` (5000 RPM)
* Units: RPM (revolutions per minute)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:56`
* Typical values: `5000` (default for small spindles), `12000` (high-speed routers), `24000` (professional CNC spindles)
* Corresponding v1 setting: `spindle.default_rpm`
* Corresponding v2 setting: none
* Description: Default RPM speed to use when M3 (spindle on) is commanded without an S parameter. Used when G-code contains M3 without S value (e.g., just M3 instead of M3 S12000). Does not limit maximum or minimum speed (see spindle.max_rpm / spindle.min_rpm for analog type). Can be changed at runtime with M3 S<rpm> command. Choose a safe, commonly-used speed for your application.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Should be within safe operating range of your spindle
* Related M-Codes:
  * M3 - Start spindle at default_rpm if S parameter omitted
  * M3 S<rpm> - Start spindle at specified RPM (overrides default)
* Related pages: spindle-module, m3, supported-g-codes
* Example configuration:
  * spindle.default_rpm 5000  # Default to 5000 RPM
  * spindle.default_rpm 12000  # Default to 12000 RPM (high-speed router)

---

### `spindle.max_pwm`

* Type: `number`
* Default: `1.0` (100%)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:84`
* Valid values: `0.0` to `1.0` (0% to 100% duty cycle)
* Typical values: `1.0` (no limit, 100% maximum), `0.8` (limit to 80%), `0.5` (limit to 50%)
* Corresponding v1 setting: `spindle.max_pwm`
* Corresponding v2 setting: none
* Description: Maximum allowed PWM duty cycle output, used to limit spindle power. Provides a hard limit on PWM output regardless of PID controller output. Useful for protecting spindle motors from overcurrent. Can limit top speed if spindle doesn't reach target RPM. PID controller output is clamped to this value. Does not scale the speed range; it only limits maximum output. Set lower if your spindle motor runs too hot at full power.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Values: 0.0 = 0% duty cycle, 1.0 = 100% duty cycle
  * Applied after PID calculation (line 156-158: if current_pwm_value > max_pwm, clamp)
* Related settings: `spindle.pwm_pin`, `spindle.control_P`, `spindle.control_I`, `spindle.control_D`
* Related pages: spindle-module, spindle-control
* Example configuration:
  * spindle.max_pwm 1.0  # Allow full 100% duty cycle
  * spindle.max_pwm 0.8  # Limit to 80% maximum (protect motor)

---

### `spindle.control_P`

* Type: `number`
* Default: `0.0001`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:57`
* Typical values: `0.00001` (very slow response), `0.0001` (default), `0.0002` (more aggressive), `0.001` (very aggressive)
* Corresponding v1 setting: `spindle.control_P`
* Corresponding v2 setting: none
* Description: Proportional (P) term for the PID controller that regulates spindle speed. P term determines immediate response to speed error. Higher P values = faster response but more overshoot/oscillation. Lower P values = slower response but more stable. Formula: P_contribution = control_P × (target_RPM - current_RPM). Start with default and tune empirically. If spindle oscillates, reduce P term. If spindle responds too slowly, increase P term.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Units: 1/RPM (unitless output per RPM error)
  * Typical tuning range: 0.00001 to 0.001
  * Can be adjusted at runtime with M958 P<value> command
* Related M-Codes:
  * M958 P<value> - Set P term at runtime
  * M958 - Report current PID values (no parameters)
* Related settings: `spindle.control_I`, `spindle.control_D`, `spindle.control_smoothing`
* Related pages: spindle-module, spindle-control, temperaturecontrol-pid
* Example configuration:
  * spindle.control_P 0.0001  # Default P term (balanced)
  * spindle.control_P 0.0002  # More aggressive P term (faster response)

---

### `spindle.control_I`

* Type: `number`
* Default: `0.0001`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:58`
* Typical values: `0.00001` (slow error elimination), `0.0001` (default), `0.0002` (faster error elimination), `0.001` (aggressive)
* Corresponding v1 setting: `spindle.control_I`
* Corresponding v2 setting: none
* Description: Integral (I) term for the PID controller that eliminates steady-state speed error. I term accumulates error over time to eliminate steady-state offset. Higher I values = faster elimination of steady error but more overshoot. Lower I values = slower error correction but more stable. Formula: I_contribution += control_I × error × dt (where dt = 1/UPDATE_FREQ). Integral windup is prevented by clamping I contribution to [-1.0, 1.0]. If spindle settles below/above target speed, increase I term. If spindle overshoots and oscillates slowly, reduce I term.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Units: 1/(RPM × seconds) (unitless output per RPM-second error)
  * Typical tuning range: 0.00001 to 0.001
  * Integral windup prevention: I term clamped to ±1.0 (line 145)
  * Can be adjusted at runtime with M958 I<value> command
* Related M-Codes:
  * M958 I<value> - Set I term at runtime
  * M958 - Report current PID values
* Related settings: `spindle.control_P`, `spindle.control_D`
* Related pages: spindle-module, spindle-control, temperaturecontrol-pid
* Example configuration:
  * spindle.control_I 0.0001  # Default I term (balanced)
  * spindle.control_I 0.0002  # Faster error elimination

---

### `spindle.control_D`

* Type: `number`
* Default: `0.0001`
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:59`
* Typical values: `0.000001` (minimal dampening), `0.00001` (light dampening), `0.0001` (default), `0.001` (heavy dampening, may amplify noise)
* Corresponding v1 setting: `spindle.control_D`
* Corresponding v2 setting: none
* Description: Derivative (D) term for the PID controller that dampens oscillation and overshoot. D term responds to rate of change of error, dampening oscillations. Higher D values = more dampening but can amplify noise. Lower D values = less dampening, more oscillation. Formula: D_contribution = control_D × UPDATE_FREQ × (current_error - previous_error). Often the smallest of the three PID terms. If spindle oscillates around target speed, increase D term. If spindle is too sluggish or overshoots slowly, reduce D term. Can amplify noise in RPM measurement; use with spindle.control_smoothing.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Units: 1/(RPM/seconds) (unitless output per RPM-per-second change)
  * Typical tuning range: 0.000001 to 0.0001
  * UPDATE_FREQ = 1000 Hz (line 38)
  * Can be adjusted at runtime with M958 D<value> command
* Related M-Codes:
  * M958 D<value> - Set D term at runtime
  * M958 - Report current PID values
* Related settings: `spindle.control_P`, `spindle.control_I`, `spindle.control_smoothing`
* Related pages: spindle-module, spindle-control, temperaturecontrol-pid
* Example configuration:
  * spindle.control_D 0.0001  # Default D term (balanced)
  * spindle.control_D 0.00001  # Less dampening, faster response

---

### `spindle.control_smoothing`

* Type: `number`
* Default: `0.1` (100 milliseconds)
* Units: sec (seconds)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/PWMSpindleControl.cpp:62`
* Typical values: `0.01` (10ms, minimal smoothing), `0.05` (50ms, light smoothing), `0.1` (100ms, default), `0.5` (500ms, heavy smoothing)
* Corresponding v1 setting: `spindle.control_smoothing`
* Corresponding v2 setting: none
* Description: Low-pass filter time constant in seconds for smoothing noisy RPM measurements from the feedback encoder. Implements exponential moving average low-pass filter on RPM measurement. Higher values = more smoothing but slower response to speed changes. Lower values = less smoothing, faster response but noisier readings. Smoothing decay factor: α = 1 / (UPDATE_FREQ × control_smoothing) (where UPDATE_FREQ = 1000 Hz). Filtered RPM: RPM_filtered = α × RPM_new + (1 - α) × RPM_filtered_previous. Helps prevent PID controller from reacting to measurement noise. Particularly important when using high D term values. If RPM readings fluctuate wildly, increase smoothing. If spindle response is too sluggish, decrease smoothing.
  * Applicable to: PWM spindle only (spindle.type = "pwm")
  * Positive numbers only (seconds)
  * Common range: 10ms to 500ms
  * Implemented as exponential moving average (lines 63-66, 138)
  * UPDATE_FREQ = 1000 Hz (1ms update interval)
* Related settings: `spindle.control_D`, `spindle.feedback_pin`
* Related pages: spindle-module, spindle-control
* Example configuration:
  * spindle.control_smoothing 0.1  # 100ms smoothing (default, balanced)
  * spindle.control_smoothing 0.05  # 50ms smoothing (faster response, noisier)

---

## Analog Spindle Settings (type = "analog")

The following settings apply when `spindle.type` is set to `"analog"`. This mode provides simple open-loop voltage control (0-10V or 0-5V).

### `spindle.max_rpm`

* Type: `number`
* Default: `5000` (5000 RPM)
* Units: RPM (revolutions per minute)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:31`
* Typical values: `5000` (default for small spindles), `24000` (24,000 RPM high-speed spindles), `18000` (18,000 RPM routers)
* Corresponding v1 setting: `spindle.max_rpm`
* Corresponding v2 setting: none
* Description: Maximum spindle RPM, corresponding to 100% PWM duty cycle output. Used to calculate PWM duty cycle from commanded RPM: duty_cycle = RPM / max_rpm. Example: If max_rpm = 24000 and M3 S12000 is commanded, duty cycle = 50%. Does not actually limit the spindle speed (that depends on your VFD/controller). Only scales the voltage output proportionally. Typically set to match VFD's configured maximum frequency/speed. Commanded RPM values above max_rpm are clamped to max_rpm (line 91-92).
  * Applicable to: Analog spindle only (spindle.type = "analog")
  * Should match maximum rated speed of your spindle motor
  * Positive integers only
* Related settings: `spindle.min_rpm`, `spindle.pwm_pin`
* Related pages: spindle-module, spindle-control, m3
* Example configuration:
  * spindle.max_rpm 24000  # 24,000 RPM maximum (high-speed spindle)
  * spindle.max_rpm 5000  # 5,000 RPM maximum (default)

---

### `spindle.min_rpm`

* Type: `number`
* Default: `100` (100 RPM)
* Units: RPM (revolutions per minute)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:30`
* Typical values: `100` (default), `500` (conservative), `1000` (high safety margin for unstable low-speed spindles)
* Corresponding v1 setting: `spindle.min_rpm`
* Corresponding v2 setting: none
* Description: Minimum spindle RPM threshold; commanded speeds below this value are clamped to this minimum. Prevents commanding spindle speeds that are too low to run reliably. Commanded RPM values between 1 and min_rpm are clamped to min_rpm (line 93-94). Example: If min_rpm = 1000, then M3 S500 will actually set 1000 RPM. Commanded RPM of 0 or M5 will turn spindle completely off (not clamped to min_rpm). Useful because many spindles cannot maintain stable rotation below a certain speed. Protects motor from operating in unstable speed ranges.
  * Applicable to: Analog spindle only (spindle.type = "analog")
  * Should be greater than 0 and less than spindle.max_rpm
  * Positive integers only
  * Clamping logic: if (rpm > 0 && rpm < min_rpm) target_rpm = min_rpm
* Related settings: `spindle.max_rpm`, `spindle.pwm_pin`
* Related pages: spindle-module, spindle-control, m3, m5
* Example configuration:
  * spindle.min_rpm 100  # 100 RPM minimum (default)
  * spindle.min_rpm 1000  # 1000 RPM minimum (higher safety margin)

---

### `spindle.switch_on_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/AnalogSpindleControl.cpp:56`
* Valid values: Any valid digital output pin (e.g., `2.4`, `1.22`, etc.), pin modifiers: `!` for inverted output, `"nc"` for no switch control
* Corresponding v1 setting: `spindle.switch_on_pin`
* Corresponding v2 setting: none
* Description: Digital output pin to turn the VFD on/off (typically via optocoupler to VFD's run/stop input). Optional pin for explicit on/off control separate from speed control. Typically connected to VFD's "RUN" or "FWD" digital input via optocoupler. Set HIGH when M3 is commanded (spindle on). Set LOW when M5 is commanded (spindle off). Inverted output (! prefix) reverses the logic (LOW = on, HIGH = off). If not configured ("nc"), only PWM voltage controls spindle (no discrete on/off). Useful when VFD requires separate run enable signal.
  * Applicable to: Analog spindle only (spindle.type = "analog")
  * Implementation: lines 59-60 (Pin object), 67-68 (set true on turn_on), 77-78 (set false on turn_off)
* Related M-Codes:
  * M3 - Sets switch_on_pin HIGH (if configured)
  * M5 - Sets switch_on_pin LOW (if configured)
* Related settings: `spindle.pwm_pin`, `spindle.dir_pin`
* Related pages: spindle-module, spindle-control, pin-configuration, mosfets
* Example configuration:
  * spindle.switch_on_pin 2.4  # Pin 2.4 for VFD run signal
  * spindle.switch_on_pin nc  # No separate on/off control

---

## Modbus Spindle Settings (type = "modbus")

The following settings apply when `spindle.type` is set to `"modbus"` and `spindle.vfd_type` is set to `"huanyang"`.

### `spindle.rx_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:34`
* Valid values: Any valid UART-capable pin (commonly: `0.3`, `0.16`, `2.8`), `"nc"` for not assigned
* Required: yes (for Modbus spindle communication)
* Corresponding v1 setting: `spindle.rx_pin`
* Corresponding v2 setting: none (Modbus spindle control removed in v2)
* Description: UART receive pin for Modbus serial communication (RS485) from VFD. Connects to RS485 transceiver's RO (Receiver Output) pin. Must be used with compatible UART hardware on Smoothieboard. Baud rate is 9600 (fixed in Huanyang protocol). Communication format: 8N1 (8 data bits, no parity, 1 stop bit). RS485 transceiver (e.g., MAX485) required between Smoothieboard and VFD.
  * Applicable to: Modbus spindle only (spindle.type = "modbus")
  * Must be UART-capable pin
  * Requires RS485 transceiver hardware (MAX485, SN75176, etc.)
* Related settings: `spindle.tx_pin`, `spindle.dir_pin`, `spindle.vfd_type`
* Related pages: spindle-module, uart, pin-configuration
* Example configuration:
  * spindle.rx_pin 0.3  # UART RX on pin 0.3

---

### `spindle.tx_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:38`
* Valid values: Any valid UART-capable pin (commonly: `0.2`, `0.15`, `2.7`), `"nc"` for not assigned
* Required: yes (for Modbus spindle communication)
* Corresponding v1 setting: `spindle.tx_pin`
* Corresponding v2 setting: none (Modbus spindle control removed in v2)
* Description: UART transmit pin for Modbus serial communication (RS485) to VFD. Connects to RS485 transceiver's DI (Driver Input) pin. Must be paired with spindle.rx_pin on same UART peripheral. Transmits commands to VFD (start, stop, set frequency). RS485 transceiver (e.g., MAX485) required between Smoothieboard and VFD. Ensure TX/RX pins are on compatible UART pair (e.g., UART0 or UART1).
  * Applicable to: Modbus spindle only (spindle.type = "modbus")
  * Must be UART-capable pin on same peripheral as rx_pin
  * Requires RS485 transceiver hardware
* Related settings: `spindle.rx_pin`, `spindle.dir_pin`
* Related pages: spindle-module, uart, pin-configuration
* Example configuration:
  * spindle.tx_pin 0.2  # UART TX on pin 0.2

---

### `spindle.dir_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `spindle`
* Context: Module instance setting
* Defined in: `modules/tools/spindle/ModbusSpindleControl.cpp:42`
* Valid values: Any valid digital output pin, `"nc"` for not assigned
* Required: yes (for Modbus spindle communication, RS485 half-duplex control)
* Corresponding v1 setting: `spindle.dir_pin`
* Corresponding v2 setting: none (Modbus spindle control removed in v2)
* Description: Direction control pin for RS485 transceiver (switches between transmit and receive modes). Connects to RS485 transceiver's DE (Driver Enable) and /RE (Receiver Enable) pins. Set HIGH when transmitting to VFD. Set LOW when receiving from VFD. Timing automatically managed by Modbus implementation. RS485 is half-duplex, so direction control is essential. Typically MAX485 chip has DE and /RE tied together, controlled by this pin.
  * Applicable to: Modbus spindle only (spindle.type = "modbus")
  * Controls RS485 transceiver transmit/receive mode
  * HIGH = transmit mode, LOW = receive mode
* Related settings: `spindle.tx_pin`, `spindle.rx_pin`
* Related pages: spindle-module, pin-configuration
* Example configuration:
  * spindle.dir_pin 0.4  # Direction control on pin 0.4

---

## Summary

This spindle module provides three distinct control methods for CNC spindle motors:

1. **PWM Type**: Closed-loop PID control with encoder/tachometer feedback for precise RPM regulation
2. **Analog Type**: Simple open-loop voltage control (0-10V or 0-5V) for basic VFD operation
3. **Modbus Type**: RS485 Modbus RTU communication with Huanyang VFDs for serial control

Each type requires different configuration settings. Refer to the applicability notes for each setting to determine which settings are needed for your chosen spindle type.

**Configuration Workflow:**
1. Set `spindle.enable` to `true`
2. Set `spindle.type` to your control method (`pwm`, `analog`, or `modbus`)
3. Configure type-specific settings (see applicability notes)
4. Test spindle operation with M3/M5 commands
5. For PWM type: Tune PID parameters using M958 command
6. For Modbus type: Configure VFD PD parameters per documentation

**Related G-code Commands:**
- M3 - Start spindle (clockwise)
- M3 S<rpm> - Start spindle at specified RPM
- M5 - Stop spindle
- M957 - Report current spindle speed
- M958 - Set/report PID parameters (PWM type only)

---

## Endstops

# Smoothieware V1 Endstops Configuration Settings - Refined

This document provides comprehensive documentation for all endstop-related configuration settings in Smoothieware V1, following the canonical configuration entry specification.

## Overview

Smoothieware V1 supports **TWO** methods for configuring endstops:
- **Method 1: Root-Level Configuration** (Traditional) - Most common, uses `alpha_*`, `beta_*`, `gamma_*` prefixes
- **Method 2: Module-Based Configuration** (Alternative) - Advanced, uses `endstop.<name>.*` syntax

---

## Method 1: Root-Level Configuration (Traditional)

This is the most common configuration method used in default configs. Settings are configured per axis using axis name prefixes.

### Per-Axis Settings

The following settings exist for each axis. Replace `<axis>` with `alpha` (X), `beta` (Y), or `gamma` (Z).

---

#### `<axis>_min_endstop`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `root`
* Context: Global setting - Per-axis endstop pin configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:179`
* Valid values: Pin specification in format `port.pin`
  * Format: `port.pin` (e.g., `1.28`, `2.5`)
  * Add `^` suffix for pull-up: `1.28^`
  * Add `!` suffix for inverted logic: `1.28!`
  * Add `^!` for both pull-up and inverted: `1.28^!`
  * Use `nc` to disable this endstop
* Corresponding v1 setting: `alpha_min_endstop`, `beta_min_endstop`, `gamma_min_endstop`
* Corresponding v2 setting: `endstops.minx.pin`, `endstops.miny.pin`, `endstops.minz.pin`
* Description: Minimum endstop pin for this axis. The pin is configured as an input with optional pull-up or inverted logic. Setting to `nc` disables this endstop.
  * The pin monitors the endstop switch state during homing and limit checking
  * Pull-up resistors are typically enabled for mechanical switches to prevent floating inputs
  * Inverted logic is used when the switch pulls the pin low when triggered
  * The endstop is used for homing if `<axis>_homing_direction` is set to `home_to_min`
* Related settings: `<axis>_homing_direction`, `<axis>_limit_enable`, `endstop_debounce_ms`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_min_endstop 1.28^  # X-axis minimum endstop on pin 1.28, pullup enabled
  * beta_min_endstop 1.26^   # Y-axis minimum endstop on pin 1.26, pullup enabled
  * gamma_min_endstop 1.24^  # Z-axis minimum endstop on pin 1.24, pullup enabled
  * alpha_min_endstop nc     # Disable X minimum endstop

---

#### `<axis>_max_endstop`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `root`
* Context: Global setting - Per-axis endstop pin configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:179`
* Valid values: Pin specification in format `port.pin`
  * Format: `port.pin` (e.g., `1.29`, `2.7`)
  * Add `^` suffix for pull-up: `1.29^`
  * Add `!` suffix for inverted logic: `1.29!`
  * Add `^!` for both pull-up and inverted: `1.29^!`
  * Use `nc` to disable this endstop
* Corresponding v1 setting: `alpha_max_endstop`, `beta_max_endstop`, `gamma_max_endstop`
* Corresponding v2 setting: `endstops.maxx.pin`, `endstops.maxy.pin`, `endstops.maxz.pin`
* Description: Maximum endstop pin for this axis. The pin is configured as an input with optional pull-up or inverted logic. Setting to `nc` disables this endstop.
  * The pin monitors the endstop switch state during homing and limit checking
  * Pull-up resistors are typically enabled for mechanical switches to prevent floating inputs
  * Inverted logic is used when the switch pulls the pin low when triggered
  * The endstop is used for homing if `<axis>_homing_direction` is set to `home_to_max`
  * Both min and max endstops can be enabled simultaneously for limit switch functionality
* Related settings: `<axis>_homing_direction`, `<axis>_limit_enable`, `endstop_debounce_ms`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_max_endstop 1.29^  # X-axis maximum endstop on pin 1.29
  * beta_max_endstop 1.27^   # Y-axis maximum endstop on pin 1.27
  * gamma_max_endstop 1.25^  # Z-axis maximum endstop on pin 1.25 (common for 3D printers)
  * alpha_max_endstop nc     # Disable X maximum endstop

---

#### `<axis>_max_travel`

* Type: `number`
* Default: `500`
* Units: mm
* Module: `root`
* Context: Global setting - Per-axis homing safety limit
* Defined in: `modules/tools/endstops/Endstops.cpp:173` (old config), `Endstops.cpp:332` (new config)
* Typical values: `300` (small printer), `500` (medium printer), `1000` (large CNC machine)
* Corresponding v1 setting: `alpha_max_travel`, `beta_max_travel`, `gamma_max_travel`
* Corresponding v2 setting: `endstops.minx.max_travel`, `endstops.miny.max_travel`, `endstops.minz.max_travel`
* Description: Maximum distance the axis will travel while searching for an endstop during homing. If the endstop is not triggered within this distance, homing will fail and enter ALARM state.
  * This is a safety feature to prevent the machine from attempting to home indefinitely if an endstop is disconnected or malfunctioning
  * The axis travels at `<axis>_fast_homing_rate_mm_s` speed while searching
  * If this distance is exceeded, homing fails with error "check the max_travel settings"
  * CRITICAL: Set this value larger than your actual machine travel distance to prevent false failures
  * For deltas, this applies to the Z-axis travel distance (all three towers move together)
* Related settings: `<axis>_fast_homing_rate_mm_s`, `<axis>_homing_direction`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_max_travel 300  # X-axis will travel max 300mm looking for endstop
  * beta_max_travel 300   # Y-axis will travel max 300mm looking for endstop
  * gamma_max_travel 210  # Z-axis will travel max 210mm (slightly larger than 200mm bed height)

---

#### `<axis>_fast_homing_rate_mm_s`

* Type: `number`
* Default: `100`
* Units: mm/s
* Module: `root`
* Context: Global setting - Per-axis homing speed
* Defined in: `modules/tools/endstops/Endstops.cpp:160` (old config), `Endstops.cpp:319` (new config)
* Typical values: `100` (standard speed), `50` (delta printer), `10` (Z-axis safety), `150` (fast XY)
* Corresponding v1 setting: `alpha_fast_homing_rate_mm_s`, `beta_fast_homing_rate_mm_s`, `gamma_fast_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.minx.fast_rate`, `endstops.miny.fast_rate`, `endstops.minz.fast_rate`
* Description: Speed at which the axis moves during the initial fast homing approach. This is the first phase of the two-stage homing process.
  * The fast rate is used to quickly move the axis to the endstop to minimize homing time
  * Once the endstop is triggered, the axis retracts by `<axis>_homing_retract_mm` distance
  * After retraction, a slower, more precise approach is performed at `<axis>_slow_homing_rate_mm_s`
  * Z-axis typically uses a slower rate (4-10 mm/s) for safety to prevent bed crashes
  * Higher speeds reduce homing time but may reduce accuracy if switch bounce is an issue
  * Speed is limited by motor capabilities and acceleration settings
  * For deltas, all three tower rates should typically be the same for balanced motion
* Related settings: `<axis>_slow_homing_rate_mm_s`, `<axis>_homing_retract_mm`, `<axis>_max_travel`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_fast_homing_rate_mm_s 100  # X-axis fast homing at 100mm/s
  * beta_fast_homing_rate_mm_s 100   # Y-axis fast homing at 100mm/s
  * gamma_fast_homing_rate_mm_s 10   # Z-axis fast homing at 10mm/s (slower for safety)

---

#### `<axis>_slow_homing_rate_mm_s`

* Type: `number`
* Default: `10`
* Units: mm/s
* Module: `root`
* Context: Global setting - Per-axis precision homing speed
* Defined in: `modules/tools/endstops/Endstops.cpp:161` (old config), `Endstops.cpp:320` (new config)
* Typical values: `10` (standard precision), `2` (high precision Z), `20` (faster XY), `5` (balanced)
* Corresponding v1 setting: `alpha_slow_homing_rate_mm_s`, `beta_slow_homing_rate_mm_s`, `gamma_slow_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.minx.slow_rate`, `endstops.miny.slow_rate`, `endstops.minz.slow_rate`
* Description: Speed at which the axis moves during the second, slow homing approach. This is the precision phase of the two-stage homing process.
  * After the fast approach triggers the endstop, the axis retracts by `<axis>_homing_retract_mm`
  * The axis then approaches the endstop again at this slower rate for more accurate positioning
  * This slow approach travels `<axis>_homing_retract_mm * 2` distance to ensure re-trigger
  * Slower speeds provide more accurate and repeatable homing positions
  * Typical values: 2-25 mm/s depending on required precision
  * Z-axis often uses the slowest rate (1-5 mm/s) for maximum precision
  * This speed determines the final homing accuracy and repeatability
  * Too slow increases homing time unnecessarily, too fast reduces precision
* Related settings: `<axis>_fast_homing_rate_mm_s`, `<axis>_homing_retract_mm`, `endstop_debounce_ms`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_slow_homing_rate_mm_s 10  # X-axis slow homing at 10mm/s
  * beta_slow_homing_rate_mm_s 10   # Y-axis slow homing at 10mm/s
  * gamma_slow_homing_rate_mm_s 2   # Z-axis slow homing at 2mm/s (very slow for accuracy)

---

#### `<axis>_homing_retract_mm`

* Type: `number`
* Default: `5`
* Units: mm
* Module: `root`
* Context: Global setting - Per-axis homing behavior
* Defined in: `modules/tools/endstops/Endstops.cpp:164` (old config), `Endstops.cpp:323` (new config)
* Typical values: `5` (standard), `2` (Z-axis minimal), `10` (extra clearance), `3` (balanced)
* Corresponding v1 setting: `alpha_homing_retract_mm`, `beta_homing_retract_mm`, `gamma_homing_retract_mm`
* Corresponding v2 setting: `endstops.minx.retract`, `endstops.miny.retract`, `endstops.minz.retract`
* Description: Distance to retract (move away from) the endstop after the fast homing approach triggers it, before beginning the slow precision approach.
  * This retraction ensures a clean re-trigger during the slow approach
  * Improves homing repeatability by always approaching the endstop from the same direction
  * The axis moves away from the endstop by this distance at the slow homing rate
  * During the slow approach, the axis moves `retract * 2` distance to ensure re-trigger
  * Larger values increase homing time slightly but improve reliability
  * Must be large enough to fully release the endstop switch
  * Typical values: 1-10 mm depending on endstop type and machine
  * Z-axis often uses smaller values (1-3 mm) to minimize travel and prevent bed crashes
  * If too small, the endstop may not fully release, causing homing to fail
* Related settings: `<axis>_fast_homing_rate_mm_s`, `<axis>_slow_homing_rate_mm_s`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_homing_retract_mm 5  # X-axis retracts 5mm after fast approach
  * beta_homing_retract_mm 5   # Y-axis retracts 5mm after fast approach
  * gamma_homing_retract_mm 2  # Z-axis retracts 2mm (smaller retract for safety)

---

#### `<axis>_homing_direction`

* Type: `string`
* Default: `home_to_min`
* Module: `root`
* Context: Global setting - Per-axis homing behavior
* Defined in: `modules/tools/endstops/Endstops.cpp:167` (old config), `Endstops.cpp:303` (new config)
* Valid values: `home_to_min`, `home_to_max`
  * `home_to_min` - Axis moves in negative direction toward minimum endstop
  * `home_to_max` - Axis moves in positive direction toward maximum endstop
  * NOTE: `none` is only available in module-based configuration for limits-only endstops
* Corresponding v1 setting: `alpha_homing_direction`, `beta_homing_direction`, `gamma_homing_direction`
* Corresponding v2 setting: `endstops.minx.homing_direction`, `endstops.miny.homing_direction`, `endstops.minz.homing_direction`
* Description: Determines which direction the axis moves during homing and which endstop is used.
  * `home_to_min` moves the axis in the negative direction and uses the `<axis>_min_endstop` pin
  * `home_to_max` moves the axis in the positive direction and uses the `<axis>_max_endstop` pin
  * When homing to min completes, the axis position is set to the `<axis>_min` value plus any M206 home offset
  * When homing to max completes, the axis position is set to the `<axis>_max` value plus any M206 home offset
  * Most Cartesian printers: X and Y home to min (front-left corner), Z homes to max (top)
  * CNC mills typically home all axes to minimum or maximum depending on machine design
  * CoreXY: Varies by mechanical design and belt routing
  * Delta: All three tower endstops should be set to same direction (typically max)
  * SCARA: Depends on mechanical configuration and workspace
* Related settings: `<axis>_min`, `<axis>_max`, `<axis>_min_endstop`, `<axis>_max_endstop`
* Related M-Codes:
  * M206 - Set home offset (added to homing position)
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_homing_direction home_to_min  # Home X to minimum endstop (common)
  * beta_homing_direction home_to_min   # Home Y to minimum endstop (common)
  * gamma_homing_direction home_to_max  # Home Z to maximum endstop (common for 3D printers)

---

#### `<axis>_min`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `root`
* Context: Global setting - Per-axis position after homing
* Defined in: `modules/tools/endstops/Endstops.cpp:170` (old config), `Endstops.cpp:329` (new config)
* Typical values: `0` (origin at min), `-100` (bed-center origin for 200mm travel), `-150` (centered 300mm bed)
* Corresponding v1 setting: `alpha_min`, `beta_min`, `gamma_min`
* Corresponding v2 setting: `endstops.minx.homing_position`, `endstops.miny.homing_position`, `endstops.minz.homing_position`
* Description: The cartesian position (coordinate) that the axis is set to after homing when `<axis>_homing_direction` is set to `home_to_min` and the minimum endstop is triggered.
  * This value defines where "minimum" is in your coordinate system
  * For most machines, this is 0, but it can be set to any value to define the workspace origin
  * After homing, the M206 home offset is added to this base position for fine-tuning
  * For bed-center-origin machines (0,0 at bed center), this is typically negative (e.g., -100 for 200mm bed)
  * Only used if `<axis>_homing_direction` is `home_to_min`
  * The actual position after homing is: `<axis>_min` + M206 offset
  * This is a base position; fine-tuning adjustments are done with M206
  * For standard Cartesian printers with origin at front-left corner, this is typically 0
* Related settings: `<axis>_homing_direction`, `<axis>_min_endstop`
* Related M-Codes:
  * M206 - Set home offset (added to this value)
  * M500 - Save M206 offset to config-override
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * alpha_min 0    # X=0 when homed to minimum (standard)
  * beta_min 0     # Y=0 when homed to minimum (standard)
  * gamma_min 0    # Z=0 when homed to minimum
  * alpha_min -100 # X=-100 when homed (bed center for 200mm bed)

---

#### `<axis>_max`

* Type: `number`
* Default: `200`
* Units: mm
* Module: `root`
* Context: Global setting - Per-axis position after homing
* Defined in: `modules/tools/endstops/Endstops.cpp:170` (old config), `Endstops.cpp:329` (new config)
* Typical values: `200` (200mm build height), `300` (300mm travel), `250` (250mm bed)
* Corresponding v1 setting: `alpha_max`, `beta_max`, `gamma_max`
* Corresponding v2 setting: `endstops.maxx.homing_position`, `endstops.maxy.homing_position`, `endstops.maxz.homing_position`
* Description: The cartesian position (coordinate) that the axis is set to after homing when `<axis>_homing_direction` is set to `home_to_max` and the maximum endstop is triggered.
  * This value defines where "maximum" is in your coordinate system
  * For Z-max homing (common in 3D printers), this represents the total build height
  * After homing, the M206 home offset is added to this base position for fine-tuning
  * Only used if `<axis>_homing_direction` is `home_to_max`
  * Common for Z-axis in 3D printers where Z homes to the top of travel
  * For Z-max homing, this should equal your maximum Z height
  * The actual position after homing is: `<axis>_max` + M206 offset
  * NOTE: This is NOT related to soft limits (those are set separately via soft_endstop settings)
* Related settings: `<axis>_homing_direction`, `<axis>_max_endstop`
* Related M-Codes:
  * M206 - Set home offset (added to this value)
  * M665 Z - Set max Z height for deltas (also sets gamma_max)
  * M500 - Save offsets to config-override
* Related pages: endstops, endstops-options, guide-endstops, gamma-max
* Example configuration:
  * alpha_max 200  # X=200mm when homed to maximum
  * beta_max 200   # Y=200mm when homed to maximum
  * gamma_max 200  # Z=200mm when homed to maximum (bed height for Z-max homing)

---

#### `<axis>_limit_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Per-axis safety feature
* Defined in: `modules/tools/endstops/Endstops.cpp:198` (old config), `Endstops.cpp:296` (new config)
* Valid values: `true`, `false`
* Corresponding v1 setting: `alpha_limit_enable`, `beta_limit_enable`, `gamma_limit_enable`
* Corresponding v2 setting: `endstops.minx.limit_enable`, `endstops.miny.limit_enable`, `endstops.minz.limit_enable`
* Description: Enables hard limit switch monitoring during normal machine operation (not just during homing). When enabled, if any endstop for this axis is triggered during a move, the machine will immediately halt and enter ALARM state.
  * This is a safety feature to prevent the machine from crashing into the limits of travel
  * When false (default), endstops are only used during homing
  * When true, endstops act as hard limits during all moves
  * If triggered during operation: Machine halts, motors disable, heaters turn off
  * WARNING: With limits enabled, you cannot move off an endstop. After homing, the machine automatically backs off the endstop if limits are enabled
  * If a limit is triggered during operation, you must manually clear it before resuming
  * Requires clearing all limits before machine will operate again
  * CoreXY: Both X and Y motors are monitored when either axis limit is enabled
  * Not commonly used on 3D printers (relies on soft limits instead)
  * More common on CNC machines for crash prevention
  * Both min and max endstops are monitored if both pins are defined
* Related settings: `endstop_debounce_count`, `<axis>_min_endstop`, `<axis>_max_endstop`
* Related M-Codes:
  * M119 - Report endstop status (useful for checking limit triggers)
* Related pages: endstops, endstops-options, guide-endstops, emergencystop
* Example configuration:
  * alpha_limit_enable false  # No limit checking during X moves (typical for 3D printers)
  * beta_limit_enable false   # No limit checking during Y moves (typical for 3D printers)
  * gamma_limit_enable false  # No limit checking during Z moves (typical for 3D printers)
  * alpha_limit_enable true   # Hard limits enabled on X axis (common for CNC)

---

### Global Endstop Settings

These settings apply to all endstops and homing behavior.

---

#### `endstops_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Master enable for root-level endstop configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:117`
* Valid values: `true`, `false`
* Required: yes (to use root-level endstop configuration method)
* Corresponding v1 setting: `endstops_enable`
* Corresponding v2 setting: none (endstops always enabled if configured in v2)
* Description: Master enable switch for the traditional root-level endstop configuration method (Method 1). When set to `true`, Smoothieware will load endstop configuration using the `alpha_*`, `beta_*`, `gamma_*` syntax.
  * When set to `false` (or omitted), Smoothieware will attempt to load the module-based configuration method (Method 2) using `endstop.<name>.*` syntax
  * IMPORTANT: Only one method should be used - either set this to `true` and use root-level config, OR set to `false`/omit and use module-based config
  * If both methods are configured, Method 1 (this enabled) takes precedence
  * If no endstops are defined in either method, the module will disable itself
  * Cannot be changed during runtime, requires restart
  * Most default configurations use `endstops_enable true` (Method 1) as it is simpler for basic setups
* Related settings: All `alpha_*`, `beta_*`, `gamma_*` endstop settings, all `endstop.*.*` settings
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstops_enable true  # Enable traditional root-level endstop configuration
  * # Then use traditional syntax:
  * alpha_min_endstop 1.28^
  * alpha_max_travel 500

---

#### `corexy_homing`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Machine kinematics configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:56` (checksum), `Endstops.cpp:383` (loaded)
* Valid values: `true`, `false`
* Required: yes (for CoreXY and H-Bot machines)
* Corresponding v1 setting: `corexy_homing`
* Corresponding v2 setting: `endstops.common.corexy_homing`
* Description: Enables CoreXY-specific homing behavior. CoreXY machines have coupled X and Y motors where each motor affects both axes, requiring special homing logic.
  * When enabled, X and Y axes home individually (one at a time) rather than simultaneously
  * Both X and Y motors are stopped when either endstop is triggered during homing
  * Both motors are monitored during homing of either axis
  * Prevents the complex coupled motion that would occur if both axes homed simultaneously
  * CRITICAL: Must be enabled for CoreXY and H-Bot kinematics to prevent incorrect homing behavior
  * Do not enable on Cartesian or Delta machines
  * Also applies to limit checking when limits are enabled
  * Cannot be used with `homing_order` (CoreXY always homes individually, overrides homing_order)
  * Z-axis homing is not affected (remains independent)
  * During homing, uses the slower of the X and Y fast rates for safety
* Related settings: `delta_homing`, `homing_order`, `alpha_fast_homing_rate_mm_s`, `beta_fast_homing_rate_mm_s`
* Related pages: endstops, endstops-options, hbot, arm-solutions
* Example configuration:
  * corexy_homing true  # Enable for CoreXY and H-Bot machines
  * # Do not set for standard Cartesian machines

---

#### `delta_homing`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Machine kinematics configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:57` (checksum), `Endstops.cpp:384` (loaded)
* Valid values: `true`, `false`
* Required: yes (for linear delta machines)
* Corresponding v1 setting: `delta_homing`
* Corresponding v2 setting: `endstops.common.delta_homing`
* Description: Enables linear delta robot homing behavior. Linear delta machines have three vertical towers that all move to control the XYZ position of the end effector.
  * When enabled, G28 homes all three towers simultaneously by moving Z axis
  * All three tower endstops (alpha, beta, gamma) must trigger during homing
  * Sets XYZ position based on kinematic calculations from tower positions
  * Applies trim values (`alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`) to correct for endstop position variations
  * After homing, moves to origin if `move_to_origin_after_home` is true (default for deltas)
  * CRITICAL: Must be enabled for linear delta kinematics to prevent incorrect homing
  * Do not enable on Cartesian, CoreXY, or Rotary Delta machines
  * All three tower homing rates (fast and slow) should be the same for balanced motion
  * All three towers must home in the same direction (typically max)
  * Trim values account for small variations in endstop positions between towers
  * Cannot specify individual axes in G28 (always homes all three towers together)
  * For deltas, homing is always done in Z-only mode regardless of which axes are specified
* Related settings: `rdelta_homing`, `alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`, `move_to_origin_after_home`
* Related M-Codes:
  * M666 - Set or display delta trim values
  * M665 Z - Set maximum Z height for delta
* Related pages: endstops, endstops-options, delta, arm-solutions
* Example configuration:
  * delta_homing true  # Enable for linear delta machines
  * alpha_trim_mm 0
  * beta_trim_mm 0
  * gamma_trim_mm 0
  * move_to_origin_after_home true

---

#### `rdelta_homing`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Machine kinematics configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:58` (checksum), `Endstops.cpp:385` (loaded)
* Valid values: `true`, `false`
* Required: yes (for rotary delta machines)
* Corresponding v1 setting: `rdelta_homing`
* Corresponding v2 setting: `endstops.common.rdelta_homing`
* Description: Enables rotary delta robot homing behavior. Rotary delta machines use rotating arms instead of linear carriages to control the end effector position.
  * When enabled, homing behavior is similar to linear delta
  * All three actuator endstops must trigger during homing
  * Endstop positions represent actuator angles (in degrees), not cartesian coordinates
  * Uses forward kinematics to calculate cartesian position from actuator angles
  * M206 sets theta offset for each actuator (in degrees, not mm)
  * Homing positions are in degrees (actuator angles) rather than millimeters
  * RotaryDeltaCalibration module handles M206 and M665 for rotary deltas
  * CRITICAL: Must be enabled for rotary delta kinematics
  * Do not enable on Cartesian, CoreXY, or Linear Delta machines
  * Trim values (`alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`) are in degrees for rotary deltas, not millimeters
* Related settings: `delta_homing`, `alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`
* Related M-Codes:
  * M206 - Sets theta offset in degrees (not mm) for rotary deltas
  * M665 - Delta-specific calibration
* Related pages: endstops, endstops-options, rotary-delta, arm-solutions
* Example configuration:
  * rdelta_homing true  # Enable for rotary delta machines (e.g., Triton, Katana)

---

#### `scara_homing`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Machine kinematics configuration
* Defined in: `modules/tools/endstops/Endstops.cpp:59` (checksum), `Endstops.cpp:386` (loaded)
* Valid values: `true`, `false`
* Required: yes (for SCARA machines)
* Corresponding v1 setting: `scara_homing`
* Corresponding v2 setting: `endstops.common.scara_homing`
* Description: Enables SCARA robot arm homing behavior. SCARA (Selective Compliance Assembly Robot Arm) machines use rotating joints to position the end effector.
  * When enabled, disables arm solution during homing (homes in actuator space, not cartesian space)
  * Resets arms to plausible minimum angles (-30, 30, 0) before homing to prevent extreme positions
  * Re-enables arm solution after homing completes
  * Applies endstop trim if configured
  * Homing occurs in actuator/joint space rather than cartesian space
  * Initial reset to (-30, 30, 0) degrees prevents the arm from trying to reach impossible positions
  * CRITICAL: Must be enabled for SCARA kinematics
  * Do not enable on Cartesian, CoreXY, or Delta machines
  * Endstop trim is applied to final actuator position
* Related settings: `alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`
* Related pages: endstops, endstops-options, morgan-scara, arm-solutions
* Example configuration:
  * scara_homing true  # Enable for SCARA machines

---

#### `endstop_debounce_count`

* Type: `number`
* Default: `100`
* Module: `root`
* Context: Global setting - Limit switch noise filtering
* Defined in: `modules/tools/endstops/Endstops.cpp:61` (checksum), `Endstops.cpp:381` (loaded)
* Typical values: `100` (default, suitable for most switches), `200` (noisy environment), `50` (fast optical switches)
* Corresponding v1 setting: `endstop_debounce_count`
* Corresponding v2 setting: none (v2 uses time-based debounce only via `debounce_ms`)
* Description: Number of consecutive reads required to confirm a limit switch trigger. This provides debouncing for limit switches (not homing endstops).
  * When a limit switch is checked, it must read as triggered for this many consecutive samples before it is considered truly triggered
  * This filters out electrical noise and mechanical bounce
  * IMPORTANT: Only used for limit switches (when `<axis>_limit_enable` is true)
  * Does NOT apply to homing endstops (use `endstop_debounce_ms` for homing)
  * Higher values provide more filtering but slower response to limit triggers
  * Default of 100 is suitable for most mechanical switches
  * Increase if getting false limit triggers due to noise
  * Each sample is read at 1kHz (every 1ms) in the ISR
  * Value of 100 equals approximately 100ms debounce time
  * Too high may delay limit detection, too low may cause false triggers
* Related settings: `<axis>_limit_enable`, `endstop_debounce_ms`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop_debounce_count 100  # Require 100 consecutive triggered reads (default)
  * endstop_debounce_count 200  # More filtering for noisy environment

---

#### `endstop_debounce_ms`

* Type: `number`
* Default: `0`
* Units: ms
* Module: `root`
* Context: Global setting - Homing endstop noise filtering
* Defined in: `modules/tools/endstops/Endstops.cpp:62` (checksum), `Endstops.cpp:380` (loaded)
* Typical values: `0` (optical endstops, no debounce needed), `1` (mechanical switches), `5` (noisy environment)
* Corresponding v1 setting: `endstop_debounce_ms`
* Corresponding v2 setting: `endstops.common.debounce_ms` (NOTE: v2 has 10ms minimum)
* Description: Debounce time in milliseconds for homing endstops. When an endstop is triggered during homing, it must remain triggered for this duration before being accepted as a valid trigger.
  * This filters out electrical noise, EMI interference, and mechanical switch bounce during the homing process
  * IMPORTANT: Only used for homing endstops during G28
  * Does NOT apply to limit switches (use `endstop_debounce_count` for limits)
  * Optical endstops typically use 0 (no debounce needed due to clean switching)
  * Mechanical switches typically use 1-5ms
  * Higher values reduce false triggers but slow homing response
  * During fast homing, switch must stay triggered continuously for this duration
  * During slow homing, provides more reliable trigger detection
  * Typical values: 0-10ms
  * Too high may miss brief valid triggers, too low may allow noise triggers
  * NOTE: v2 enforces a minimum of 10ms, v1 allows 0
* Related settings: `endstop_debounce_count`, `<axis>_slow_homing_rate_mm_s`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop_debounce_ms 0  # No debounce (default, for optical endstops)
  * endstop_debounce_ms 1  # 1ms debounce for mechanical switches
  * endstop_debounce_ms 5  # 5ms debounce for noisy environment

---

#### `home_z_first`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Homing sequence control
* Defined in: `modules/tools/endstops/Endstops.cpp:64` (checksum), `Endstops.cpp:388` (loaded)
* Valid values: `true`, `false`
* Corresponding v1 setting: `home_z_first`
* Corresponding v2 setting: `endstops.common.home_z_first`
* Description: Controls whether the Z axis homes before or after the X and Y axes.
  * When `false` (default): X and Y home first (simultaneously), then Z homes
  * When `true`: Z homes first, then X and Y home (simultaneously)
  * Homing Z first is useful for machines with auto bed leveling probes that need Z clearance before XY movement
  * Also useful for gantries that could crash into bed features without Z clearance
  * Moving beds may need Z in a safe position before XY homing
  * Does not affect individual axis homing (e.g., G28 Z still homes only Z)
  * Only affects G28 with no parameters or G28 with multiple axes specified
  * Ignored if `homing_order` is specified (homing_order takes precedence)
  * Not applicable to delta machines (they always home all axes together in Z-only mode)
  * Not applicable to CoreXY (it homes axes individually anyway due to `corexy_homing`)
  * Z-axis typically homes slower for safety regardless of whether it homes first or last
* Related settings: `homing_order`, `corexy_homing`, `delta_homing`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * home_z_first false  # Home XY first, then Z (default, standard behavior)
  * home_z_first true   # Home Z first to get clearance, then XY (useful for auto-leveling probes)

---

#### `homing_order`

* Type: `string`
* Default: `""` (empty string - use default order)
* Module: `root`
* Context: Global setting - Advanced homing sequence control
* Defined in: `modules/tools/endstops/Endstops.cpp:65` (checksum), `Endstops.cpp:395` (loaded)
* Valid values: String of 3-6 axis letters (X, Y, Z, A, B, C) specifying homing order
  * Must be 3-6 characters long
  * Each character must be a valid axis letter: X, Y, Z, A, B, or C
  * Axes can only appear once
  * Case insensitive
  * Empty string `""` uses default behavior (XY together, then Z)
* Corresponding v1 setting: `homing_order`
* Corresponding v2 setting: `endstops.common.homing_order`
* Description: Specifies a custom homing order, forcing axes to home one at a time in the specified sequence. Must be 3-6 characters specifying axis letters (XYZABC) in desired order.
  * When specified, each axis homes individually in the given order
  * Overrides `home_z_first` setting if both are configured
  * IMPORTANT: Any axis not specified in the string will NOT be homed
  * If ABC axes exist and need homing, they must be explicitly included
  * Not valid for delta or rotary delta machines (ignored, deltas must home all together)
  * Not valid for CoreXY (already homes individually due to `corexy_homing`)
  * If an axis doesn't have an endstop defined, homing will fail when it tries to home that axis
  * Useful for machines that require a specific sequence due to mechanical constraints
  * Empty string uses default behavior based on `home_z_first` setting
* Related settings: `home_z_first`, `corexy_homing`, `delta_homing`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * homing_order XYZ    # Home X, then Y, then Z (one at a time)
  * homing_order YXZ    # Home Y first, then X, then Z
  * homing_order ZXY    # Home Z first, then X, then Y
  * homing_order XYZAB  # For machines with A and B axes

---

#### `move_to_origin_after_home`

* Type: `bool`
* Default: `false` (Cartesian), `true` (Delta)
* Module: `root`
* Context: Global setting - Post-homing behavior
* Defined in: `modules/tools/endstops/Endstops.cpp:66` (checksum), `Endstops.cpp:413` (loaded)
* Valid values: `true`, `false`
* Corresponding v1 setting: `move_to_origin_after_home`
* Corresponding v2 setting: `endstops.common.move_to_origin_after_home`
* Description: Controls whether the machine automatically moves to the origin (0,0 or 0,0,0) after homing completes.
  * Cartesian default: `false` - Stay at homed position (endstop location)
  * Delta default: `true` - Move to origin (deltas are typically not at 0,0 after homing due to trim)
  * For Cartesian machines with bed-center origin (0,0 is in center), enabling this moves to center after homing
  * If enabled, `park_after_home` is automatically disabled (mutually exclusive)
  * Move uses the slower of X and Y fast rates for safety
  * For deltas, ensures effector is at true 0,0,0 after homing (required due to trim settings)
  * Only moves XY for Cartesian, XYZ for Delta
  * Move is done in machine coordinates (G53 G0) to ignore any G92 or WCS offsets
  * NOTE: Deltas default to `true` and should remain `true` to ensure correct positioning
* Related settings: `park_after_home`, `alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`, `delta_homing`
* Related pages: endstops, endstops-options, delta, guide-endstops
* Example configuration:
  * move_to_origin_after_home false  # Stay at endstops after homing (Cartesian default)
  * move_to_origin_after_home true   # Move to 0,0 after homing (Delta default, or bed-center Cartesian)

---

#### `park_after_home`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting - Post-homing behavior
* Defined in: `modules/tools/endstops/Endstops.cpp:67` (checksum), `Endstops.cpp:415` (loaded)
* Valid values: `true`, `false`
* Corresponding v1 setting: `park_after_home`
* Corresponding v2 setting: none (not documented in v2)
* Description: If enabled, moves to a predefined park position after homing instead of moving to origin. The park position is set using G28.1.
  * This is useful for moving the toolhead to a convenient access position after homing
  * Keeps the nozzle away from the bed after homing for safety
  * Useful for positioning for filament loading/unloading
  * IMPORTANT: Mutually exclusive with `move_to_origin_after_home`
  * If `move_to_origin_after_home` is `true`, this setting is ignored (forced to `false`)
  * Park position is set with G28.1 command (saves current position as park position)
  * G28.1 X## Y## can set park position from config
  * Only XY coordinates are used for parking (Z is not moved)
  * Position is saved to config-override if M500 is used after G28.1
  * Default park position is 0,0 until G28.1 is executed
* Related settings: `move_to_origin_after_home`
* Related M-Codes:
  * G28.1 - Save current position as park position
  * G28.1 X150 Y10 - Set park position to specific coordinates
  * M500 - Save park position to config-override
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * park_after_home true  # Move to park position after homing
  * # Set park position (in your start gcode or manually):
  * # G28.1  ; Save current position as park position
  * # Or in config-override.g:
  * # G28.1 X150 Y10  ; Set park position to X150 Y10

---

#### `alpha_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm (for deltas), degrees (for rotary deltas)
* Module: `root`
* Context: Global setting - Delta/SCARA calibration
* Defined in: `modules/tools/endstops/Endstops.cpp:69` (checksum), `Endstops.cpp:390` (loaded)
* Typical values: `0` (no trim needed), `0.15` (small correction), `-0.2` (opposite correction), range typically -2.0 to +2.0
* Corresponding v1 setting: `alpha_trim_mm`
* Corresponding v2 setting: `endstops.common.alpha_trim_mm`
* Description: Software trim for alpha tower/joint endstop on delta and SCARA machines. Compensates for small variations in endstop positions between towers.
  * Positive values move the effective endstop position toward the endstop (shortens tower)
  * Negative values move the effective endstop position away from the endstop (lengthens tower)
  * IMPORTANT: Only used on delta and SCARA machines - has no effect on Cartesian or CoreXY
  * Units are millimeters for linear deltas, degrees for rotary deltas
  * Used during homing to adjust final position based on physical endstop variations
  * Set via M666 X## command (saved with M500 to config-override)
  * Typical values: -2.0 to +2.0 mm for linear deltas
  * Fine-tune after basic calibration to improve bed levelness
  * For rotary deltas, values are in degrees, not millimeters
  * Applied in actuator space, affects cartesian position via forward kinematics
  * Helps compensate for endstops that are not perfectly aligned
* Related settings: `beta_trim_mm`, `gamma_trim_mm`, `delta_homing`, `rdelta_homing`
* Related M-Codes:
  * M666 X## - Set alpha trim value
  * M666 - Display all current trim values
  * M500 - Save trim values to config-override
* Related pages: endstops, endstops-options, delta, delta-calibration-strategy-options
* Example configuration:
  * alpha_trim_mm 0     # No trim (default)
  * alpha_trim_mm 0.15  # Alpha tower 0.15mm shorter
  * alpha_trim_mm -0.2  # Alpha tower 0.2mm longer

---

#### `beta_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm (for deltas), degrees (for rotary deltas)
* Module: `root`
* Context: Global setting - Delta/SCARA calibration
* Defined in: `modules/tools/endstops/Endstops.cpp:70` (checksum), `Endstops.cpp:391` (loaded)
* Typical values: `0` (no trim needed), `0.25` (small correction), `-0.15` (opposite correction), range typically -2.0 to +2.0
* Corresponding v1 setting: `beta_trim_mm`
* Corresponding v2 setting: `endstops.common.beta_trim_mm`
* Description: Software trim for beta tower/joint endstop on delta and SCARA machines. Compensates for small variations in endstop positions between towers.
  * Positive values move the effective endstop position toward the endstop (shortens tower)
  * Negative values move the effective endstop position away from the endstop (lengthens tower)
  * IMPORTANT: Only used on delta and SCARA machines - has no effect on Cartesian or CoreXY
  * Units are millimeters for linear deltas, degrees for rotary deltas
  * Used during homing to adjust final position based on physical endstop variations
  * Set via M666 Y## command (saved with M500 to config-override)
  * Typical values: -2.0 to +2.0 mm for linear deltas
  * Fine-tune after basic calibration to improve bed levelness
  * For rotary deltas, values are in degrees, not millimeters
  * Applied in actuator space, affects cartesian position via forward kinematics
  * Helps compensate for endstops that are not perfectly aligned
* Related settings: `alpha_trim_mm`, `gamma_trim_mm`, `delta_homing`, `rdelta_homing`
* Related M-Codes:
  * M666 Y## - Set beta trim value
  * M666 - Display all current trim values
  * M500 - Save trim values to config-override
* Related pages: endstops, endstops-options, delta, delta-calibration-strategy-options
* Example configuration:
  * beta_trim_mm 0      # No trim (default)
  * beta_trim_mm 0.25   # Beta tower 0.25mm shorter
  * beta_trim_mm -0.15  # Beta tower 0.15mm longer

---

#### `gamma_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm (for deltas), degrees (for rotary deltas)
* Module: `root`
* Context: Global setting - Delta/SCARA calibration
* Defined in: `modules/tools/endstops/Endstops.cpp:71` (checksum), `Endstops.cpp:392` (loaded)
* Typical values: `0` (no trim needed), `-0.3` (small correction), `0.1` (opposite correction), range typically -2.0 to +2.0
* Corresponding v1 setting: `gamma_trim_mm`
* Corresponding v2 setting: `endstops.common.gamma_trim_mm`
* Description: Software trim for gamma tower/joint endstop on delta and SCARA machines. Compensates for small variations in endstop positions between towers.
  * Positive values move the effective endstop position toward the endstop (shortens tower)
  * Negative values move the effective endstop position away from the endstop (lengthens tower)
  * IMPORTANT: Only used on delta and SCARA machines - has no effect on Cartesian or CoreXY
  * Units are millimeters for linear deltas, degrees for rotary deltas
  * Used during homing to adjust final position based on physical endstop variations
  * Set via M666 Z## command (saved with M500 to config-override)
  * Typical values: -2.0 to +2.0 mm for linear deltas
  * Fine-tune after basic calibration to improve bed levelness
  * For rotary deltas, values are in degrees, not millimeters
  * Applied in actuator space, affects cartesian position via forward kinematics
  * Helps compensate for endstops that are not perfectly aligned
* Related settings: `alpha_trim_mm`, `beta_trim_mm`, `delta_homing`, `rdelta_homing`
* Related M-Codes:
  * M666 Z## - Set gamma trim value
  * M666 - Display all current trim values
  * M500 - Save trim values to config-override
* Related pages: endstops, endstops-options, delta, delta-calibration-strategy-options
* Example configuration:
  * gamma_trim_mm 0     # No trim (default)
  * gamma_trim_mm -0.3  # Gamma tower 0.3mm longer
  * gamma_trim_mm 0.1   # Gamma tower 0.1mm shorter

---

## Method 2: Module-Based Configuration (Alternative)

This is an alternative configuration method that uses named endstop instances. It provides more flexibility and supports more than 3 endstops (up to 6 axes: XYZABC).

**Configuration Pattern:** `endstop.<name>.<setting>`

The `<name>` can be anything (e.g., `minx`, `maxy`, `zprobe`) and multiple endstops can be defined per axis.

**Important:** Do NOT set `endstops_enable true` when using this method.

### Module-Based Settings

All settings are per-endstop instance. Replace `<name>` with your chosen endstop name.

---

#### `endstop.<name>.enable`

* Type: `bool`
* Default: `false`
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:249`
* Valid values: `true`, `false`
* Required: yes (for each endstop instance)
* Corresponding v1 setting: Implicit in root-level config (endstop exists if pin defined)
* Corresponding v2 setting: `endstops.<name>.enable`
* Description: Enable this specific endstop instance. Each endstop must be individually enabled.
  * When `false` or omitted, this endstop instance is ignored
  * When `true`, the endstop is active and its pin is monitored
  * Multiple endstops can be enabled for the same axis (e.g., both min and max)
  * All other settings for this endstop are ignored if enable is `false`
* Related settings: `endstop.<name>.pin`, `endstop.<name>.axis`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.enable true
  * endstop.miny.enable true
  * endstop.minz.enable true
  * endstop.maxx.enable false  # Disabled, not used

---

#### `endstop.<name>.pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:252`
* Valid values: Pin specification in format `port.pin`
  * Format: `port.pin` (e.g., `1.28`, `2.5`)
  * Add `^` suffix for pull-up: `1.28^`
  * Add `!` suffix for inverted logic: `1.28!`
  * Add `^!` for both: `1.28^!`
  * Use `nc` if no pin (disables this endstop)
* Corresponding v1 setting: `alpha_min_endstop`, `alpha_max_endstop`, etc.
* Corresponding v2 setting: `endstops.<name>.pin`
* Description: Pin assignment for this endstop. Supports the same pin modifiers as root-level configuration (`^` for pull-up, `!` for inverted).
  * The pin is configured as an input
  * Pull-up (`^`) is typically enabled for mechanical switches
  * Inverted (`!`) is used when switch pulls pin low when triggered
  * If pin is `nc` or not connected, the endstop is disabled even if enable is true
* Related settings: `endstop.<name>.enable`, `endstop.<name>.axis`
* Related pages: endstops, pin-configuration, pinout
* Example configuration:
  * endstop.minx.pin 1.28^
  * endstop.miny.pin 1.26^!  # Pull-up and inverted
  * endstop.minz.pin 1.24^

---

#### `endstop.<name>.axis`

* Type: `string`
* Default: `""` (empty, required)
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:259`
* Valid values: `X`, `Y`, `Z`, `A`, `B`, `C`
  * Single character, case insensitive
  * Must be one of the six valid axis letters
* Required: yes (for each enabled endstop)
* Corresponding v1 setting: Implicit in setting name (`alpha_*` = X, `beta_*` = Y, `gamma_*` = Z)
* Corresponding v2 setting: `endstops.<name>.axis`
* Description: Which axis this endstop is associated with. Must be one of: X, Y, Z, A, B, or C.
  * This is required for each endstop
  * Multiple endstops can be assigned to the same axis (e.g., min and max)
  * The axis letter determines which motor/actuator is affected by this endstop
  * X, Y, Z are the primary Cartesian axes
  * A, B, C are additional rotary or linear axes (requires more than 3 actuators configured)
  * If the axis index exceeds the number of configured motors, configuration will fail
* Related settings: `endstop.<name>.enable`, `endstop.<name>.homing_direction`
* Related pages: endstops, endstops-options, 6axis
* Example configuration:
  * endstop.minx.axis X
  * endstop.miny.axis Y
  * endstop.minz.axis Z
  * endstop.a_home.axis A  # For 4-axis machine

---

#### `endstop.<name>.homing_direction`

* Type: `string`
* Default: `none`
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:303`
* Valid values: `home_to_min`, `home_to_max`, `none`
  * `home_to_min` - Use for homing in negative direction
  * `home_to_max` - Use for homing in positive direction
  * `none` - Not used for homing (limit only)
* Corresponding v1 setting: `alpha_homing_direction`, `beta_homing_direction`, `gamma_homing_direction`
* Corresponding v2 setting: `endstops.<name>.homing_direction`
* Description: Determines if and how this endstop is used for homing.
  * `home_to_min` - This endstop is used when homing in the negative direction
  * `home_to_max` - This endstop is used when homing in the positive direction
  * `none` - This endstop is NOT used for homing (limit switch only)
  * Setting to `none` allows an endstop to be used only for limit detection, not homing
  * This provides more flexibility than root-level config which can't disable homing for an endstop
  * Multiple endstops on the same axis can have different homing directions (e.g., min and max)
* Related settings: `endstop.<name>.homing_position`, `endstop.<name>.axis`, `endstop.<name>.limit_enable`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.homing_direction home_to_min
  * endstop.miny.homing_direction home_to_min
  * endstop.maxx.homing_direction none  # Limit only, not for homing

---

#### `endstop.<name>.homing_position`

* Type: `number`
* Default: `0` (if homing to min), `200` (if homing to max)
* Units: mm
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:329`
* Typical values: `0` (origin at min), `200` (typical max height), `-100` (bed-center origin)
* Corresponding v1 setting: `alpha_min`, `alpha_max`, `beta_min`, `beta_max`, `gamma_min`, `gamma_max`
* Corresponding v2 setting: `endstops.<name>.homing_position`
* Description: Position to set the axis to when this endstop is triggered during homing. Equivalent to `<axis>_min` or `<axis>_max` in root-level config.
  * This defines the cartesian coordinate of the endstop in your workspace
  * Default is 0 for minimum endstops, 200 for maximum endstops
  * After homing, M206 home offset is added to this value
  * Only used if `homing_direction` is `home_to_min` or `home_to_max` (not `none`)
  * For bed-center-origin machines, minimum values may be negative
  * For Z-max homing, this typically represents the total build height
* Related settings: `endstop.<name>.homing_direction`, `endstop.<name>.axis`
* Related M-Codes:
  * M206 - Set home offset (added to this value)
  * M500 - Save offsets to config-override
* Related pages: endstops, endstops-options, gamma-max
* Example configuration:
  * endstop.minx.homing_position 0
  * endstop.minz.homing_position 0
  * endstop.maxz.homing_position 200  # For Z-max homing (200mm build height)

---

#### `endstop.<name>.fast_rate`

* Type: `number`
* Default: `100`
* Units: mm/s
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:319`
* Typical values: `100` (standard), `50` (delta), `10` (Z-axis), `150` (fast XY)
* Corresponding v1 setting: `alpha_fast_homing_rate_mm_s`, `beta_fast_homing_rate_mm_s`, `gamma_fast_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.<name>.fast_rate`
* Description: Fast homing speed for this axis. Equivalent to `<axis>_fast_homing_rate_mm_s` in root-level config.
  * Speed at which axis moves during initial fast approach to endstop
  * Higher speeds reduce homing time
  * Lower speeds may be needed for mechanical reasons or safety
  * Z-axis typically uses slower rates (4-10 mm/s) for safety
  * Deltas should use same rate for all three towers
* Related settings: `endstop.<name>.slow_rate`, `endstop.<name>.retract`, `endstop.<name>.max_travel`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.fast_rate 100
  * endstop.miny.fast_rate 100
  * endstop.minz.fast_rate 10  # Slower for Z safety

---

#### `endstop.<name>.slow_rate`

* Type: `number`
* Default: `10`
* Units: mm/s
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:320`
* Typical values: `10` (standard), `2` (high precision Z), `20` (faster), `5` (balanced)
* Corresponding v1 setting: `alpha_slow_homing_rate_mm_s`, `beta_slow_homing_rate_mm_s`, `gamma_slow_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.<name>.slow_rate`
* Description: Slow precision homing speed for this axis. Equivalent to `<axis>_slow_homing_rate_mm_s` in root-level config.
  * Speed at which axis moves during second, precise approach to endstop
  * Slower speeds provide better accuracy and repeatability
  * This determines final homing precision
  * Z-axis often uses 1-5 mm/s for maximum precision
  * Typical range: 2-25 mm/s
* Related settings: `endstop.<name>.fast_rate`, `endstop.<name>.retract`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.slow_rate 10
  * endstop.miny.slow_rate 10
  * endstop.minz.slow_rate 2  # Very slow for Z precision

---

#### `endstop.<name>.retract`

* Type: `number`
* Default: `5`
* Units: mm
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:323`
* Typical values: `5` (standard), `2` (Z-axis minimal), `10` (extra clearance), `3` (balanced)
* Corresponding v1 setting: `alpha_homing_retract_mm`, `beta_homing_retract_mm`, `gamma_homing_retract_mm`
* Corresponding v2 setting: `endstops.<name>.retract`
* Description: Distance to retract after fast homing before slow approach. Equivalent to `<axis>_homing_retract_mm` in root-level config.
  * Distance to back away from endstop after fast trigger
  * Must be large enough to fully release the endstop switch
  * During slow approach, moves `retract * 2` distance to ensure re-trigger
  * Larger values increase homing time slightly but improve reliability
  * Z-axis often uses smaller values (1-3 mm) to minimize travel
  * Typical range: 1-10 mm
* Related settings: `endstop.<name>.fast_rate`, `endstop.<name>.slow_rate`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.retract 5
  * endstop.miny.retract 5
  * endstop.minz.retract 2  # Smaller retract for Z safety

---

#### `endstop.<name>.max_travel`

* Type: `number`
* Default: `500`
* Units: mm
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:332`
* Typical values: `300` (small printer), `500` (medium), `1000` (large CNC)
* Corresponding v1 setting: `alpha_max_travel`, `beta_max_travel`, `gamma_max_travel`
* Corresponding v2 setting: `endstops.<name>.max_travel`
* Description: Maximum distance to travel while searching for endstop. Equivalent to `<axis>_max_travel` in root-level config.
  * Safety limit to prevent indefinite homing if endstop fails
  * If endstop not triggered within this distance, homing fails with ALARM
  * CRITICAL: Set larger than actual machine travel distance
  * Failure produces error: "check the max_travel settings"
* Related settings: `endstop.<name>.fast_rate`, `endstop.<name>.axis`
* Related pages: endstops, endstops-options, guide-endstops
* Example configuration:
  * endstop.minx.max_travel 500
  * endstop.miny.max_travel 500
  * endstop.minz.max_travel 300

---

#### `endstop.<name>.limit_enable`

* Type: `bool`
* Default: `false`
* Module: `endstop`
* Context: Module instance setting
* Defined in: `modules/tools/endstops/Endstops.cpp:296`
* Valid values: `true`, `false`
* Corresponding v1 setting: `alpha_limit_enable`, `beta_limit_enable`, `gamma_limit_enable`
* Corresponding v2 setting: `endstops.<name>.limit_enable`
* Description: Enable hard limit switch monitoring for this endstop during normal operation. Equivalent to `<axis>_limit_enable` in root-level config.
  * When `false` (default), endstop only used during homing
  * When `true`, endstop acts as hard limit during all moves
  * If triggered during operation: Machine halts, enters ALARM state
  * Both min and max endstops can have limit checking enabled independently
  * More common on CNC machines than 3D printers
  * WARNING: With limits enabled, cannot move off endstop until cleared
* Related settings: `endstop.<name>.pin`, `endstop_debounce_count`
* Related pages: endstops, endstops-options, emergencystop
* Example configuration:
  * endstop.minx.limit_enable true
  * endstop.maxx.limit_enable true  # Both min and max as limits

---

## Complete Configuration Examples

### Example 1: Typical Cartesian 3D Printer (Root-Level Config)

```
# Enable traditional endstop configuration
endstops_enable true

# X-axis (homes to minimum)
alpha_min_endstop 1.28^
alpha_max_endstop nc
alpha_homing_direction home_to_min
alpha_min 0
alpha_max_travel 300
alpha_fast_homing_rate_mm_s 100
alpha_slow_homing_rate_mm_s 20
alpha_homing_retract_mm 5
alpha_limit_enable false

# Y-axis (homes to minimum)
beta_min_endstop 1.26^
beta_max_endstop nc
beta_homing_direction home_to_min
beta_min 0
beta_max_travel 300
beta_fast_homing_rate_mm_s 100
beta_slow_homing_rate_mm_s 20
beta_homing_retract_mm 5
beta_limit_enable false

# Z-axis (homes to maximum, typical for 3D printers)
gamma_min_endstop nc
gamma_max_endstop 1.24^
gamma_homing_direction home_to_max
gamma_max 200
gamma_max_travel 210
gamma_fast_homing_rate_mm_s 10
gamma_slow_homing_rate_mm_s 2
gamma_homing_retract_mm 2
gamma_limit_enable false

# Global settings
endstop_debounce_ms 1
home_z_first false
move_to_origin_after_home false
```

### Example 2: CoreXY Machine (Root-Level Config)

```
# Enable traditional endstop configuration
endstops_enable true

# Enable CoreXY homing behavior
corexy_homing true

# X and Y endstops (will home individually due to CoreXY)
alpha_min_endstop 1.28^
alpha_homing_direction home_to_min
alpha_min 0
alpha_max_travel 250
alpha_fast_homing_rate_mm_s 80
alpha_slow_homing_rate_mm_s 15
alpha_homing_retract_mm 5

beta_min_endstop 1.26^
beta_homing_direction home_to_min
beta_min 0
beta_max_travel 250
beta_fast_homing_rate_mm_s 80
beta_slow_homing_rate_mm_s 15
beta_homing_retract_mm 5

# Z-axis
gamma_max_endstop 1.24^
gamma_homing_direction home_to_max
gamma_max 200
gamma_max_travel 210
gamma_fast_homing_rate_mm_s 8
gamma_slow_homing_rate_mm_s 2
gamma_homing_retract_mm 2

# Global settings
endstop_debounce_ms 1
home_z_first false
```

### Example 3: Linear Delta (Root-Level Config)

```
# Enable traditional endstop configuration
endstops_enable true

# Enable delta homing behavior
delta_homing true

# All three towers (all home to max for deltas)
alpha_max_endstop 1.28^
alpha_homing_direction home_to_max
alpha_max 0  # Not used for deltas
alpha_max_travel 500
alpha_fast_homing_rate_mm_s 50
alpha_slow_homing_rate_mm_s 10
alpha_homing_retract_mm 5

beta_max_endstop 1.26^
beta_homing_direction home_to_max
beta_max 0
beta_max_travel 500
beta_fast_homing_rate_mm_s 50
beta_slow_homing_rate_mm_s 10
beta_homing_retract_mm 5

gamma_max_endstop 1.24^
gamma_homing_direction home_to_max
gamma_max 320  # Maximum Z height
gamma_max_travel 500
gamma_fast_homing_rate_mm_s 50
gamma_slow_homing_rate_mm_s 10
gamma_homing_retract_mm 5

# Delta-specific settings
alpha_trim_mm 0
beta_trim_mm 0
gamma_trim_mm 0
move_to_origin_after_home true

# Global settings
endstop_debounce_ms 0  # Optical endstops
```

### Example 4: CNC with Hard Limits (Root-Level Config)

```
# Enable traditional endstop configuration
endstops_enable true

# X-axis with both min and max endstops as limits
alpha_min_endstop 1.28^
alpha_max_endstop 1.29^
alpha_homing_direction home_to_min
alpha_min 0
alpha_max_travel 500
alpha_fast_homing_rate_mm_s 100
alpha_slow_homing_rate_mm_s 25
alpha_homing_retract_mm 5
alpha_limit_enable true  # Hard limits enabled

# Y-axis with both min and max endstops as limits
beta_min_endstop 1.26^
beta_max_endstop 1.27^
beta_homing_direction home_to_min
beta_min 0
beta_max_travel 500
beta_fast_homing_rate_mm_s 100
beta_slow_homing_rate_mm_s 25
beta_homing_retract_mm 5
beta_limit_enable true  # Hard limits enabled

# Z-axis with both min and max endstops as limits
gamma_min_endstop 1.24^
gamma_max_endstop 1.25^
gamma_homing_direction home_to_min
gamma_min 0
gamma_max_travel 200
gamma_fast_homing_rate_mm_s 50
gamma_slow_homing_rate_mm_s 10
gamma_homing_retract_mm 3
gamma_limit_enable true  # Hard limits enabled

# Global settings
endstop_debounce_count 100  # For limit switches
endstop_debounce_ms 1       # For homing
home_z_first false
move_to_origin_after_home true  # Go to 0,0,0 after homing
```

### Example 5: Module-Based Configuration (Advanced)

```
# Do NOT set endstops_enable when using module-based config

# X-axis minimum endstop
endstop.minx.enable true
endstop.minx.pin 1.28^
endstop.minx.axis X
endstop.minx.homing_direction home_to_min
endstop.minx.homing_position 0
endstop.minx.fast_rate 100
endstop.minx.slow_rate 20
endstop.minx.retract 5
endstop.minx.max_travel 300
endstop.minx.limit_enable false

# X-axis maximum endstop (limit only, not for homing)
endstop.maxx.enable true
endstop.maxx.pin 1.29^
endstop.maxx.axis X
endstop.maxx.homing_direction none  # Not used for homing
endstop.maxx.limit_enable true      # Used as limit only

# Y-axis minimum endstop
endstop.miny.enable true
endstop.miny.pin 1.26^
endstop.miny.axis Y
endstop.miny.homing_direction home_to_min
endstop.miny.homing_position 0
endstop.miny.fast_rate 100
endstop.miny.slow_rate 20
endstop.miny.retract 5
endstop.miny.max_travel 300
endstop.miny.limit_enable false

# Z-axis maximum endstop
endstop.maxz.enable true
endstop.maxz.pin 1.24^
endstop.maxz.axis Z
endstop.maxz.homing_direction home_to_max
endstop.maxz.homing_position 200
endstop.maxz.fast_rate 10
endstop.maxz.slow_rate 2
endstop.maxz.retract 2
endstop.maxz.max_travel 210
endstop.maxz.limit_enable false

# Global settings (still apply to module-based config)
endstop_debounce_ms 1
home_z_first false
move_to_origin_after_home false
```

---

## Related G-codes and M-codes

### G28 - Home Axes

* G28 - Home all configured axes
* G28 X Y - Home X and Y only
* G28 Z - Home Z only
* G28 X - Home X only

### G28 Subcodes

* G28.1 - Save current position as park position
* G28.1 X150 Y10 - Set park position to specific coordinates
* G28.2 - Go to park position (or home in GRBL mode)
* G28.3 - Manual homing - set current position as homed
* G28.3 X0 Y0 Z0 - Manual homing - set specific positions
* G28.4 X0 Y0 Z0 - Manual homing from actuator position (rotary delta)
* G28.5 - Clear homed flags for all axes
* G28.5 X Y - Clear homed flags for X and Y only
* G28.6 - Show homing status for all axes

### M119 - Endstop Status

* M119 - Report current state of all endstops (triggered or not)

### M206 - Set Home Offset

* M206 X-0.5 Y0.3 Z0.1 - Set home offsets (added to homing position)
* M206 - Show current offsets

### M306 - Set Homing Offset Based on Current Position

* M306 X100 - Set X home offset so current position becomes X100
* Requires axis to be homed before use

### M666 - Set Delta Trim

* M666 X0.2 Y-0.1 Z0.15 - Set delta tower trim (delta/SCARA only)
* M666 - Show current trim values

### M665 - Set Delta Configuration

* M665 Z320 - Set max Z height for delta (also shown in M503)

### M500 - Save Settings

* M500 - Save current settings (home offsets, trim) to config-override

### M503 - Report Settings

* M503 - Display current configuration including endstop settings

---

## Summary of All Settings

**Root-Level Per-Axis Settings** (alpha, beta, gamma):
- `<axis>_min_endstop` - Minimum endstop pin
- `<axis>_max_endstop` - Maximum endstop pin
- `<axis>_max_travel` - Max homing travel distance (mm)
- `<axis>_fast_homing_rate_mm_s` - Fast homing speed (mm/s)
- `<axis>_slow_homing_rate_mm_s` - Slow homing speed (mm/s)
- `<axis>_homing_retract_mm` - Retract distance (mm)
- `<axis>_homing_direction` - `home_to_min` or `home_to_max`
- `<axis>_min` - Position when homed to min (mm)
- `<axis>_max` - Position when homed to max (mm)
- `<axis>_limit_enable` - Enable hard limits (bool)

**Root-Level Global Settings:**
- `endstops_enable` - Enable root-level config method (bool)
- `corexy_homing` - CoreXY kinematics (bool)
- `delta_homing` - Linear delta kinematics (bool)
- `rdelta_homing` - Rotary delta kinematics (bool)
- `scara_homing` - SCARA kinematics (bool)
- `endstop_debounce_count` - Limit switch debounce (count)
- `endstop_debounce_ms` - Homing endstop debounce (ms)
- `home_z_first` - Home Z before XY (bool)
- `homing_order` - Custom homing sequence (string: XYZ/YXZ/etc)
- `move_to_origin_after_home` - Move to 0,0 after homing (bool)
- `park_after_home` - Move to park position after homing (bool)
- `alpha_trim_mm` - Alpha tower trim for delta/SCARA (mm)
- `beta_trim_mm` - Beta tower trim for delta/SCARA (mm)
- `gamma_trim_mm` - Gamma tower trim for delta/SCARA (mm)

**Module-Based Per-Instance Settings** (endstop.<name>.*):
- `enable` - Enable this endstop (bool)
- `pin` - Pin assignment (pin)
- `axis` - Associated axis (X/Y/Z/A/B/C)
- `homing_direction` - `home_to_min`, `home_to_max`, or `none`
- `homing_position` - Position when homed (mm)
- `fast_rate` - Fast homing speed (mm/s)
- `slow_rate` - Slow homing speed (mm/s)
- `retract` - Retract distance (mm)
- `max_travel` - Max homing travel (mm)
- `limit_enable` - Enable as hard limit (bool)

**Total Settings Count:** 50+ individual settings

---

*This documentation was refined according to the Configuration Entry Specification v2.0 for Smoothieware V1 based on source code analysis (Endstops.cpp) and cross-version comparison with Smoothieware V2.*

---

## ZProbe & Leveling

# Smoothieware V1 ZProbe & Leveling Configuration Settings - Refined

## Base ZProbe Module Settings

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:63`
* Valid values: `true`, `false`
* Corresponding v1 setting: `zprobe.enable`
* Corresponding v2 setting: `zprobe.enable`
* Description: Enables the Z-probe module for surface scanning, automatic calibration, and bed leveling compensation. When enabled, the probe can be used for single-point probing with G30, bed leveling with G32, and various leveling strategies. This setting is required for all leveling strategies to function.
  * The module is loaded only when enabled; when disabled, the module is deleted to free resources.
  * At least one leveling strategy should typically be enabled when the probe is enabled.
* Related settings: `zprobe.probe_pin`, all leveling strategy enable settings
* Related pages: zprobe, endstops, z-probe-guide, three-point-strategy-options
* Example configuration:
  * zprobe.enable true  # Enable Z-probe functionality
  * zprobe.enable false  # Disable to free memory if not using probe

---

#### `probe_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:81`
* Valid values: Pin specification in format `port.pin` (e.g., `1.28`)
  * Add `!` suffix to invert logic: `1.28!`
  * Add `^` suffix to enable pull-up resistor: `1.28^`
  * Can combine modifiers: `1.28!^`
  * The probe triggers when the pin reads high (or low if inverted)
* Required: yes (probe will not function without valid pin configuration)
* Corresponding v1 setting: `zprobe.probe_pin`
* Corresponding v2 setting: `zprobe.probe_pin` (uses STM32 pin notation like `PD3`)
* Description: Specifies the GPIO pin connected to the Z-probe signal input. The probe is considered triggered when the pin reads high, or low if the inverting modifier is used. Pull-up resistors are typically needed for normally-open microswitch probes to prevent floating inputs.
  * Common configuration uses inverted logic with pull-up enabled for normally-open microswitch probes.
  * Inductive and capacitive probes typically don't need pull-ups.
  * Pin must be on a valid interrupt-capable port.
* Related settings: `zprobe.debounce_ms`, `zprobe.enable`
* Related pages: zprobe, pin-configuration, pinout, sensor-types
* Example configuration:
  * zprobe.probe_pin 1.28!^  # Inverted with pull-up (typical for microswitch)
  * zprobe.probe_pin 1.29  # Non-inverted (typical for inductive probe)
  * zprobe.probe_pin nc  # Explicitly not connected

---

#### `debounce_ms`

* Type: `number`
* Default: `0`
* Units: milliseconds
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:82`
* Typical values: `0` (no debounce), `1` (1ms for mechanical probes), `2` (2ms for noisy environments)
* Corresponding v1 setting: `zprobe.debounce_ms`
* Corresponding v2 setting: `zprobe.debounce_ms`
* Description: Debounce time for the probe pin signal in milliseconds. The probe signal must remain triggered continuously for this duration before being considered a valid trigger. This prevents false triggers from electrical noise or mechanical bounce in switches. A value of 0 disables debouncing.
  * Set to 1-2ms for noisy mechanical probes or environments with electrical interference.
  * Piezoelectric probes may need higher values (5-10ms) due to their transient signal characteristics.
  * Too high a value can reduce probe accuracy by introducing lag.
  * Debouncing is implemented in firmware at 1kHz polling rate.
* Related M-Codes:
  * M670 D<milliseconds> - Set debounce time at runtime
  * M500 - Save current debounce value to config-override
* Related settings: `zprobe.probe_pin`, `zprobe.slow_feedrate`
* Related pages: zprobe, sensor-types, troubleshooting
* Example configuration:
  * zprobe.debounce_ms 0  # No debounce (clean signal)
  * zprobe.debounce_ms 1  # 1ms debounce for mechanical switch
  * zprobe.debounce_ms 5  # 5ms for piezo probe

---

#### `slow_feedrate`

* Type: `number`
* Default: `5`
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:139`
* Typical values: `5` (default, balanced), `2` (high precision), `10` (faster probing)
* Corresponding v1 setting: `zprobe.slow_feedrate`
* Corresponding v2 setting: `zprobe.slow_feedrate`
* Description: Speed at which the probe approaches and contacts the surface during actual probing operations. This is the critical speed that determines probe accuracy. Slower speeds provide more accurate and repeatable measurements by reducing momentum and allowing better signal detection, but increase total probing time.
  * Used during the final approach to the bed surface.
  * Lower speeds (2-5mm/s) recommended for best accuracy and repeatability.
  * Higher speeds (8-15mm/s) acceptable for less critical applications.
  * Speed affects probe triggering consistency and measurement precision.
* Related M-Codes:
  * M670 S<speed> - Set slow feedrate at runtime (in mm/sec)
  * G30 F<speed*60> - Override slow feedrate for single probe (in mm/min)
  * M500 - Save current slow feedrate to config-override
* Related settings: `zprobe.fast_feedrate`, `zprobe.return_feedrate`, `zprobe.debounce_ms`
* Related pages: zprobe, z-probe-guide, delta-calibration-strategy-options
* Example configuration:
  * zprobe.slow_feedrate 5  # Default balanced speed
  * zprobe.slow_feedrate 2  # High precision for critical measurements
  * zprobe.slow_feedrate 10  # Faster for large grid leveling

---

#### `fast_feedrate`

* Type: `number`
* Default: `100`
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:140`
* Typical values: `100` (default), `50` (conservative), `200` (fast machines)
* Corresponding v1 setting: `zprobe.fast_feedrate`
* Corresponding v2 setting: `zprobe.fast_feedrate`
* Description: Speed for rapid travel moves between probe points during leveling operations. This speed does not affect probing accuracy as it is only used for non-probing moves. Higher values reduce total leveling time for grid-based strategies with many probe points.
  * Only used for XY travel moves between probe points.
  * Not used during actual Z probing operations.
  * Should not exceed the machine's maximum safe travel speed.
  * Caps the return_feedrate calculation when set to 0 (auto mode).
* Related M-Codes:
  * M670 K<speed> - Set fast feedrate at runtime (in mm/sec)
  * M500 - Save current fast feedrate to config-override
* Related settings: `zprobe.slow_feedrate`, `zprobe.return_feedrate`, `motion_control.default_seek_rate`
* Related pages: zprobe, motion-control, z-probe-guide
* Example configuration:
  * zprobe.fast_feedrate 100  # Default speed
  * zprobe.fast_feedrate 50  # Conservative for heavy machines
  * zprobe.fast_feedrate 200  # Fast travel for speed-optimized machines

---

#### `return_feedrate`

* Type: `number`
* Default: `0` (auto-calculated)
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:141`
* Typical values: `0` (auto), `50` (manual setting), `20` (slower return)
* Corresponding v1 setting: `zprobe.return_feedrate`
* Corresponding v2 setting: `zprobe.return_feedrate`
* Description: Speed for retracting the probe after a successful probe operation. When set to 0, the firmware automatically calculates this as twice the slow_feedrate, capped at the fast_feedrate value. This provides a good balance between speed and safety during probe retraction.
  * Auto-calculation: return_feedrate = min(slow_feedrate * 2, fast_feedrate)
  * Manual setting overrides auto-calculation.
  * Should be fast enough to save time but not so fast as to cause mechanical issues.
  * Only affects Z-axis retraction speed after probing.
* Related M-Codes:
  * M670 R<speed> - Set return feedrate at runtime (in mm/sec)
  * M500 - Save current return feedrate to config-override
* Related settings: `zprobe.slow_feedrate`, `zprobe.fast_feedrate`, `zprobe.probe_height`
* Related pages: zprobe, z-probe-guide
* Example configuration:
  * zprobe.return_feedrate 0  # Auto-calculate (recommended)
  * zprobe.return_feedrate 50  # Manual 50mm/s return speed
  * zprobe.return_feedrate 20  # Slower return for delicate probes

---

#### `probe_height`

* Type: `number`
* Default: `5`
* Units: mm
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:138`
* Typical values: `5` (default), `3` (low clearance beds), `10` (beds with large irregularities)
* Corresponding v1 setting: `zprobe.probe_height`
* Corresponding v2 setting: `zprobe.probe_height`
* Description: Height above the bed surface where the probe positions itself between probe points during leveling operations. Once the bed's approximate height is known from the first probe, subsequent probes move to this height before traveling to the next XY position. This prevents the probe from dragging across the bed surface.
  * Must be high enough to clear all bed surface irregularities, clips, and obstacles.
  * Lower values reduce total probing time but increase risk of collision.
  * Higher values are safer but slower for multi-point leveling.
  * This is a Z-height above the triggering point, not an absolute machine coordinate.
* Related M-Codes:
  * M670 H<height> - Set probe height at runtime (in mm)
  * M500 - Save current probe height to config-override
* Related settings: `zprobe.max_z`, `zprobe.return_feedrate`
* Related pages: zprobe, three-point-strategy-options, rectangular-grid-calibration-options
* Example configuration:
  * zprobe.probe_height 5  # Default 5mm clearance
  * zprobe.probe_height 3  # Low clearance for clean flat beds
  * zprobe.probe_height 10  # High clearance for beds with clips

---

#### `max_z`

* Type: `number`
* Default: `200` (from gamma_max)
* Units: mm
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:143`
* Typical values: `200` (200mm machines), `300` (300mm machines), `500` (500mm machines)
* Corresponding v1 setting: `zprobe.max_z`
* Corresponding v2 setting: `zprobe.max_travel`
* Description: Maximum distance the probe will travel downward when searching for the bed surface. This safety limit prevents the probe from crashing into the bed if it fails to trigger, protecting both the probe and the machine. If the probe doesn't trigger within this distance, the probing operation aborts with an error.
  * Falls back to gamma_max configuration value if not explicitly set.
  * Should be set to slightly more than the maximum expected Z travel distance.
  * Acts as a timeout/safety mechanism for probe failures.
  * Used in both single-point probing (G30) and leveling operations.
* Related M-Codes:
  * M670 Z<distance> - Set max Z travel at runtime (in mm)
  * M500 - Save current max_z value to config-override
* Related settings: `zprobe.probe_height`, `gamma_max`, `zprobe.reverse_z`
* Related pages: zprobe, endstops, gamma-max
* Example configuration:
  * zprobe.max_z 200  # 200mm maximum travel
  * zprobe.max_z 300  # 300mm for larger machines
  * zprobe.max_z 100  # 100mm for delta printers (distance from home)

---

#### `reverse_z`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:142`
* Valid values: `true`, `false`
* Corresponding v1 setting: `zprobe.reverse_z`
* Corresponding v2 setting: `zprobe.reverse_z`
* Description: Reverses the Z-axis direction for probing operations. Normally, probes move downward (negative Z direction) to find the bed. Setting this to true makes them move upward (positive Z direction) instead. This is rarely used and primarily intended for specialized machine configurations with inverted Z axes or overhead gantries.
  * Standard probing (false): probe moves down to find bed
  * Reversed probing (true): probe moves up to find bed
  * Does not affect normal motion, only probe moves
  * Used in conjunction with G30 R parameter for runtime override
* Related settings: `zprobe.max_z`, `gamma_homing_direction`
* Related pages: zprobe, endstops
* Example configuration:
  * zprobe.reverse_z false  # Normal downward probing (standard)
  * zprobe.reverse_z true  # Upward probing (specialized machines)

---

#### `dwell_before_probing`

* Type: `number`
* Default: `0`
* Units: seconds
* Module: `zprobe`
* Context: Global module setting
* Defined in: `modules/tools/zprobe/ZProbe.cpp:147`
* Typical values: `0` (no dwell), `0.2` (piezo probe), `0.5` (long settling time)
* Corresponding v1 setting: `zprobe.dwell_before_probing`
* Corresponding v2 setting: `zprobe.dwell_before_probing`
* Description: Pause duration in seconds before starting each probe move. This dwell time allows piezoelectric probes to settle after movement and prevents false triggers from residual vibration. Also useful for servo-deployed probes that need time to reach position. A value of 0 disables the dwell.
  * Essential for piezoelectric probes (0.1-0.5 seconds typical).
  * Helps reduce false triggers from mechanical vibration.
  * Increases total probing time proportionally to number of probe points.
  * Applied before every individual probe operation.
* Related M-Codes:
  * M670 D<seconds> - Set dwell time at runtime (in seconds)
  * M500 - Save current dwell time to config-override
* Related settings: `zprobe.debounce_ms`, `zprobe.slow_feedrate`
* Related pages: zprobe, sensor-types, z-probe-guide
* Example configuration:
  * zprobe.dwell_before_probing 0  # No dwell (mechanical switches)
  * zprobe.dwell_before_probing 0.2  # 200ms for piezo probe
  * zprobe.dwell_before_probing 0.5  # 500ms for long settling time

---

## Three-Point Leveling Strategy

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: Standard module enable pattern
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.enable`
* Corresponding v2 setting: `three point leveling strategy` (section-based configuration)
* Description: Enables the three-point leveling strategy which probes three user-defined points on the bed to calculate a plane equation. The strategy applies Z compensation during printing to maintain the nozzle parallel to the bed surface, correcting for bed tilt. This is the simplest leveling strategy and works well for flat beds with simple tilt.
  * Mutually exclusive with delta-calibration strategy (cannot both be enabled).
  * Requires three probe points to be defined via configuration or M557.
  * Best for beds that are flat but tilted, not for warped beds.
  * Applies plane compensation to all moves until cleared with M561.
* Related M-Codes:
  * G29 - Test probe the three points and report heights
  * G31 - Report current leveling status
  * G32 - Probe three points and calculate/activate bed plane
  * M557 P<0-2> X<x> Y<y> - Define probe point coordinates
  * M561 - Clear bed plane and disable compensation
  * M565 X<x> Y<y> Z<z> - Set probe offsets
* Related settings: `zprobe.enable`, `leveling-strategy.three-point-leveling.point1`, `leveling-strategy.three-point-leveling.point2`, `leveling-strategy.three-point-leveling.point3`
* Related pages: zprobe, three-point-strategy-options, delta-calibration-strategy-options, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.three-point-leveling.enable true  # Enable three-point leveling

---

#### `point1`

* Type: `string` (X,Y coordinates)
* Default: none (must be explicitly set)
* Units: mm
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:98`
* Required: yes (strategy will not function without all three points defined)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point1`
* Corresponding v2 setting: `three point leveling strategy.point1`
* Description: First probe point coordinates in machine coordinate system, specified as comma-separated X and Y values. The three points should ideally form an equilateral triangle and be positioned as far apart as possible within the printable area for maximum leveling accuracy. This point becomes the Z=0 reference after the first probe.
  * Format: X,Y (e.g., "100.0,0.0")
  * Coordinates are in machine coordinate system, not work coordinates
  * Should be accessible by the probe without collisions
  * Distance between points affects leveling sensitivity
* Related M-Codes:
  * M557 P0 X<x> Y<y> - Set point1 at runtime
  * M500 - Save current point coordinates to config-override
  * M503 - Display current point coordinates
* Related settings: `leveling-strategy.three-point-leveling.point2`, `leveling-strategy.three-point-leveling.point3`, `leveling-strategy.three-point-leveling.probe_offsets`
* Related pages: three-point-strategy-options, zprobe, z-probe-guide
* Example configuration:
  * leveling-strategy.three-point-leveling.point1 100.0,0.0  # First probe point (front)
  * leveling-strategy.three-point-leveling.point1 30,30  # Corner of build area

---

#### `point2`

* Type: `string` (X,Y coordinates)
* Default: none (must be explicitly set)
* Units: mm
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:99`
* Required: yes (strategy will not function without all three points defined)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point2`
* Corresponding v2 setting: `three point leveling strategy.point2`
* Description: Second probe point coordinates in machine coordinate system. Should be positioned to form a triangle with point1 and point3, ideally an equilateral triangle for balanced leveling across the bed surface. The further apart the three points are, the better the leveling accuracy.
  * Format: X,Y (e.g., "200.0,200.0")
  * Should be roughly equidistant from point1 and point3
  * Must be within probe-reachable area
* Related M-Codes:
  * M557 P1 X<x> Y<y> - Set point2 at runtime
  * M500 - Save current point coordinates to config-override
* Related settings: `leveling-strategy.three-point-leveling.point1`, `leveling-strategy.three-point-leveling.point3`
* Related pages: three-point-strategy-options, zprobe
* Example configuration:
  * leveling-strategy.three-point-leveling.point2 200.0,200.0  # Second probe point (back-right)

---

#### `point3`

* Type: `string` (X,Y coordinates)
* Default: none (must be explicitly set)
* Units: mm
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:100`
* Required: yes (strategy will not function without all three points defined)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point3`
* Corresponding v2 setting: `three point leveling strategy.point3`
* Description: Third probe point coordinates in machine coordinate system. Completes the triangle with point1 and point2. The three points define the plane used for bed leveling compensation. Maximum leveling accuracy is achieved when the three points form a large equilateral triangle.
  * Format: X,Y (e.g., "0.0,200.0")
  * Completes the triangle for plane calculation
  * Should maximize triangle area within printable region
* Related M-Codes:
  * M557 P2 X<x> Y<y> - Set point3 at runtime
  * M500 - Save current point coordinates to config-override
* Related settings: `leveling-strategy.three-point-leveling.point1`, `leveling-strategy.three-point-leveling.point2`
* Related pages: three-point-strategy-options, zprobe
* Example configuration:
  * leveling-strategy.three-point-leveling.point3 0.0,200.0  # Third probe point (back-left)

---

#### `probe_offsets`

* Type: `string` (X,Y,Z offsets)
* Default: `0,0,0`
* Units: mm
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:106`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.probe_offsets`
* Corresponding v2 setting: `three point leveling strategy.probe_offsets`
* Description: Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets are critical for accurate compensation as they tell the firmware where the probe is relative to the actual printing nozzle. Positive X means probe is to the right of nozzle, positive Y means probe is forward of nozzle, positive Z means probe trigger point is above nozzle tip.
  * Format: X,Y,Z (e.g., "0,0,0" or "-5,20,0.5")
  * X offset: positive = probe right of nozzle, negative = probe left
  * Y offset: positive = probe forward of nozzle, negative = probe behind
  * Z offset: positive = probe trigger above nozzle, negative = trigger below
  * Critical for accurate bed leveling compensation
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets at runtime
  * M500 - Save current offsets to config-override
  * M503 - Display current offsets
* Related settings: `zprobe.probe_pin`, all three point coordinates
* Related pages: three-point-strategy-options, zprobe, z-probe-guide
* Example configuration:
  * leveling-strategy.three-point-leveling.probe_offsets 0,0,0  # Probe at nozzle tip
  * leveling-strategy.three-point-leveling.probe_offsets -5,20,0  # Probe 5mm left, 20mm forward

---

#### `home_first`

* Type: `bool`
* Default: `true`
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:109`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.home_first`
* Corresponding v2 setting: `three point leveling strategy.home_first`
* Description: Automatically homes the X and Y axes before running the G32 bed leveling probe sequence. Homing ensures the machine is at a known position before probing begins, which is essential for accurate and repeatable leveling. Disable this only if you want manual control over homing or are using work coordinate system offsets.
  * Executes "G28 X0 Y0" before probing when enabled
  * Ensures consistent starting position for repeatability
  * Disable if using WCS offsets or custom homing procedures
  * Z axis is not homed to avoid probe collisions
* Related settings: `endstops.alpha_homing_direction`, `endstops.beta_homing_direction`
* Related pages: three-point-strategy-options, endstops, zprobe
* Example configuration:
  * leveling-strategy.three-point-leveling.home_first true  # Auto-home before probing (recommended)
  * leveling-strategy.three-point-leveling.home_first false  # Manual homing control

---

#### `tolerance`

* Type: `number`
* Default: `0.03`
* Units: mm
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:110`
* Typical values: `0.03` (default), `0.01` (high precision), `0.05` (relaxed)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.tolerance`
* Corresponding v2 setting: `three point leveling strategy.tolerance`
* Description: Maximum acceptable difference in millimeters between the highest and lowest probe points. If the bed is flatter than this tolerance (difference between highest and lowest point is less than this value), no compensation plane is applied as the bed is considered flat enough. Also used to validate the first probe point repeatability.
  * If max_difference < tolerance: bed considered flat, no compensation applied
  * If max_difference >= tolerance: compensation plane calculated and applied
  * Prevents unnecessary compensation on already-flat beds
  * Also validates probe repeatability on first point
  * 0.03mm (30 microns) is typical for good quality beds
* Related settings: `leveling-strategy.three-point-leveling.point1`, `leveling-strategy.three-point-leveling.point2`, `leveling-strategy.three-point-leveling.point3`
* Related pages: three-point-strategy-options, zprobe
* Example configuration:
  * leveling-strategy.three-point-leveling.tolerance 0.03  # Default 30 micron tolerance
  * leveling-strategy.three-point-leveling.tolerance 0.01  # Tight 10 micron tolerance
  * leveling-strategy.three-point-leveling.tolerance 0.05  # Relaxed 50 micron tolerance

---

#### `save_plane`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.three-point-leveling`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/ThreePointStrategy.cpp:111`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.save_plane`
* Corresponding v2 setting: `three point leveling strategy.save_plane`
* Description: Enables saving the calculated bed plane to config-override when M500 is issued. When enabled, the plane parameters (A, B, C, D coefficients) are saved and can be restored later with M561 using those parameters. This allows you to save a known-good bed level and reload it without re-probing.
  * When enabled: M500 saves "M561 A B C D" to config-override
  * Plane can be restored with: M561 A<a> B<b> C<c> D<d>
  * Useful for saving a good calibration, but bed changes require re-probing
  * Plane remains in effect until M561 clears it
* Related M-Codes:
  * M500 - Save plane coefficients to config-override (if enabled)
  * M561 - Clear plane, or restore with A B C D parameters
  * M503 - Display current settings including saved plane status
* Related settings: `leveling-strategy.three-point-leveling.enable`
* Related pages: three-point-strategy-options, zprobe
* Example configuration:
  * leveling-strategy.three-point-leveling.save_plane false  # Don't save plane (default)
  * leveling-strategy.three-point-leveling.save_plane true  # Enable plane saving with M500

---

## Delta Calibration Strategy

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.delta-calibration`
* Context: Module instance setting
* Defined in: Standard module enable pattern
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-calibration.enable`
* Corresponding v2 setting: `delta calibration strategy` (section-based configuration)
* Description: Enables the delta calibration strategy for automatically calibrating linear delta printer geometry. The strategy probes seven points (three at towers, three between towers, one at center) and adjusts endstop trim values and delta radius to minimize height differences. This strategy is specifically for delta kinematics and is automatically loaded for delta printers if no other strategy is specified.
  * Only for linear delta printers (not Cartesian or CoreXY)
  * Mutually exclusive with three-point-leveling strategy
  * Automatically loaded as default for delta printers
  * Calibrates endstop offsets and delta radius parameters
  * Requires multiple iterations to converge on solution
* Related M-Codes:
  * G29 - Probe seven delta points for external calibration (output format for escher3d.com with G29.1)
  * G32 - Auto-calibrate delta endstops and radius
  * G32 I<tolerance> - Set target convergence tolerance
  * G32 J<radius> - Override probe radius for this calibration
  * G32 K - Keep current trim values as starting point
  * G32 R - Skip endstop calibration
  * G32 E - Skip delta radius calibration
* Related settings: `zprobe.enable`, `arm_solution` (must be linear_delta), `leveling-strategy.delta-calibration.radius`
* Related pages: zprobe, delta-calibration-strategy-options, delta, arm-solutions
* Example configuration:
  * leveling-strategy.delta-calibration.enable true  # Enable delta calibration

---

#### `radius`

* Type: `number`
* Default: `100` (from deprecated probe_radius)
* Units: mm
* Module: `leveling-strategy.delta-calibration`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:30`
* Typical values: `100` (typical delta), `75` (small delta), `130` (large delta)
* Corresponding v1 setting: `leveling-strategy.delta-calibration.radius` or deprecated `zprobe.probe_radius`
* Corresponding v2 setting: `delta calibration strategy.radius`
* Description: Radius in millimeters at which to probe the bed for delta calibration. This determines the size of the circular pattern formed by the seven probe points: three points at the tower positions on this radius, three points between towers on this radius, and one point at center (radius 0). The radius should be as large as possible while staying within the printable area.
  * Larger radius provides more accurate calibration data
  * Must stay within probe-reachable area (considering probe offsets)
  * Three tower points positioned at 0°, 120°, 240° around circle
  * Three inter-tower points positioned at 60°, 180°, 300° around circle
  * Falls back to deprecated zprobe.probe_radius if not set
* Related M-Codes:
  * G32 J<radius> - Override probe radius for this calibration run
  * G29 J<radius> - Override radius for test probe run
  * M500 - Save current radius to config-override
* Related settings: `leveling-strategy.delta-calibration.initial_height`, `arm_radius`, `arm_length`
* Related pages: delta-calibration-strategy-options, delta, zprobe
* Example configuration:
  * leveling-strategy.delta-calibration.radius 100  # 100mm probe radius
  * leveling-strategy.delta-calibration.radius 75  # Smaller radius for compact deltas

---

#### `initial_height`

* Type: `number`
* Default: `10`
* Units: mm (absolute Z position)
* Module: `leveling-strategy.delta-calibration`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaCalibrationStrategy.cpp:39`
* Typical values: `10` (default), `5` (low height), `15` (conservative)
* Corresponding v1 setting: `leveling-strategy.delta-calibration.initial_height`
* Corresponding v2 setting: `delta calibration strategy.initial_height`
* Description: Absolute Z machine position in millimeters to move to after homing and before starting the initial bed probe. This height must be high enough that the probe will not hit the bed during the rapid descent phase. This is a critical safety parameter that prevents crashes during the first probe approach.
  * This is an ABSOLUTE Z machine coordinate, not relative
  * Should be 5-15mm above expected bed trigger point
  * Too low: risk of probe crashing into bed
  * Too high: wastes time during descent
  * Used for the first "find bed" operation only
* Related settings: `leveling-strategy.delta-calibration.radius`, `zprobe.slow_feedrate`, `zprobe.fast_feedrate`
* Related pages: delta-calibration-strategy-options, delta, zprobe, troubleshooting
* Example configuration:
  * leveling-strategy.delta-calibration.initial_height 10  # 10mm initial height (default)
  * leveling-strategy.delta-calibration.initial_height 5  # Lower for known good setup
  * leveling-strategy.delta-calibration.initial_height 15  # Conservative for first-time setup

---

## Delta Grid Strategy

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: Standard module enable pattern
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-grid.enable`
* Corresponding v2 setting: `delta grid leveling strategy` (section-based configuration)
* Description: Enables the delta grid leveling strategy for height mapping across circular delta printer beds. The strategy probes a grid of points in a circular pattern (skipping corners outside the radius) and stores height offsets. During printing, the firmware interpolates between the nearest four grid points to calculate Z compensation for any XY position.
  * Specifically for delta printers with circular beds
  * Creates a height map for compensating non-flat beds
  * Grid points outside the radius are automatically skipped
  * Interpolation provides smooth compensation between probe points
  * Grid data can be saved to SD card and auto-loaded on boot
* Related M-Codes:
  * G29 - Test probe grid/spiral pattern (G29.1 uses spiral)
  * G29 I<size> - Override grid size for test probe
  * G29 J<radius> - Override radius for test probe
  * G31 - Probe grid and enable compensation
  * G31 J<radius> - Override radius (saved permanently)
  * M370 / M561 - Clear grid and disable compensation
  * M374 - Save grid to /sd/delta.grid
  * M374.1 - Delete /sd/delta.grid
  * M375 - Load grid from /sd/delta.grid and enable compensation
  * M375.1 - Display current grid
  * M565 X<x> Y<y> Z<z> - Set probe offsets
* Related settings: `zprobe.enable`, `leveling-strategy.delta-grid.radius`, `leveling-strategy.delta-grid.size`
* Related pages: zprobe, delta-grid-calibration-options, delta, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.delta-grid.enable true  # Enable delta grid leveling

---

#### `radius`

* Type: `number`
* Default: `50`
* Units: mm
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:116`
* Typical values: `50` (small delta), `80` (medium delta), `120` (large delta)
* Corresponding v1 setting: `leveling-strategy.delta-grid.radius`
* Corresponding v2 setting: `delta grid leveling strategy.radius`
* Description: Radius of the circular bed area to probe and compensate in millimeters. The grid probes a square region, but points outside this radius are skipped, creating a circular probe pattern. This radius should be at least as large as the maximum printing radius to ensure full bed compensation coverage.
  * Grid points beyond this radius are not probed or compensated
  * Should match or exceed maximum print radius
  * Larger radius covers more area but increases probe time
  * Circular pattern optimized for delta printer beds
* Related M-Codes:
  * G31 J<radius> - Set radius at runtime and save permanently
  * G29 J<radius> - Override radius for test probe only
  * M500 - Save current radius to config-override
* Related settings: `leveling-strategy.delta-grid.size`, `arm_radius`
* Related pages: delta-grid-calibration-options, delta, zprobe
* Example configuration:
  * leveling-strategy.delta-grid.radius 50  # 50mm radius
  * leveling-strategy.delta-grid.radius 80  # 80mm for medium delta
  * leveling-strategy.delta-grid.radius 120  # 120mm for large delta

---

#### `size`

* Type: `number` (odd integer)
* Default: `7`
* Units: N/A (grid dimension)
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:111`
* Typical values: `7` (49 points), `5` (25 points), `9` (81 points)
* Valid values: Must be an odd number (3, 5, 7, 9, 11, etc.)
  * Odd numbers ensure a center point exists for proper interpolation
  * Even numbers are not supported and will cause errors
* Corresponding v1 setting: `leveling-strategy.delta-grid.size`
* Corresponding v2 setting: `delta grid leveling strategy.size`
* Description: Grid size in both X and Y dimensions, determining the total number of probe points. A size of 7 creates a 7×7 grid = 49 potential probe points (points outside the radius are automatically skipped). Larger grids provide more accurate compensation but increase probing time significantly.
  * Total probe points = size × size (minus points outside radius)
  * Larger grids = more accuracy but longer probe time
  * Typical sizes: 5 (fast), 7 (balanced), 9 (accurate)
  * Must be odd to have a center point
* Related M-Codes:
  * G29 I<size> - Override grid size for test probe
  * G31 I<size> - Override grid size for actual probe (not saved)
  * M500 - Save current size to config-override
* Related settings: `leveling-strategy.delta-grid.radius`, `zprobe.slow_feedrate`
* Related pages: delta-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.delta-grid.size 7  # 7×7 grid, 49 points (default)
  * leveling-strategy.delta-grid.size 5  # 5×5 grid, 25 points (faster)
  * leveling-strategy.delta-grid.size 9  # 9×9 grid, 81 points (more accurate)

---

#### `probe_offsets`

* Type: `string` (X,Y,Z offsets)
* Default: `0,0,0`
* Units: mm
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:124`
* Corresponding v1 setting: `leveling-strategy.delta-grid.probe_offsets`
* Corresponding v2 setting: `delta grid leveling strategy.probe_offsets`
* Description: Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets compensate for the physical displacement between where the probe triggers and where the nozzle actually is. Correct offsets are essential for accurate bed compensation.
  * Format: X,Y,Z (e.g., "0,0,0" or "-10,5,0.2")
  * X offset: positive = probe right of nozzle, negative = left
  * Y offset: positive = probe forward of nozzle, negative = behind
  * Z offset: positive = probe trigger above nozzle, negative = below
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets at runtime
  * M500 - Save current offsets to config-override
* Related settings: `zprobe.probe_pin`, `leveling-strategy.delta-grid.radius`
* Related pages: delta-grid-calibration-options, zprobe, z-probe-guide
* Example configuration:
  * leveling-strategy.delta-grid.probe_offsets 0,0,0  # Probe at nozzle position
  * leveling-strategy.delta-grid.probe_offsets -10,5,0  # Probe 10mm left, 5mm forward

---

#### `initial_height`

* Type: `number`
* Default: `10`
* Units: mm (absolute Z position)
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:120`
* Typical values: `10` (default), `5` (low), `15` (conservative)
* Corresponding v1 setting: `leveling-strategy.delta-grid.initial_height`
* Corresponding v2 setting: `delta grid leveling strategy.initial_height`
* Description: Absolute Z machine position in millimeters to move to after homing before starting the grid probe sequence. This safety parameter prevents the probe from crashing into the bed during the initial descent. Must be high enough to clear the bed surface.
  * Absolute Z coordinate, not relative height
  * Should be 5-15mm above expected bed surface
  * Used only for initial positioning before grid probing starts
* Related settings: `zprobe.probe_height`, `leveling-strategy.delta-grid.radius`
* Related pages: delta-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.delta-grid.initial_height 10  # 10mm initial height (default)
  * leveling-strategy.delta-grid.initial_height 5  # Lower for known setup

---

#### `do_home`

* Type: `bool`
* Default: `true`
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:114`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-grid.do_home`
* Corresponding v2 setting: `delta grid leveling strategy.do_home`
* Description: Automatically homes all axes before running the G31 grid probing sequence. Homing ensures the machine is at a known position before probing, which is essential for repeatable and accurate grid generation. Disable only if you want manual control over the homing process.
  * Executes full delta home (all towers) before probing
  * Ensures consistent starting position for grid accuracy
  * Disable for manual homing or custom pre-probe routines
* Related settings: `endstops.delta_homing`, `leveling-strategy.delta-grid.initial_height`
* Related pages: delta-grid-calibration-options, endstops, delta
* Example configuration:
  * leveling-strategy.delta-grid.do_home true  # Auto-home before probing (recommended)
  * leveling-strategy.delta-grid.do_home false  # Manual homing control

---

#### `save`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:113`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-grid.save`
* Corresponding v2 setting: `delta grid leveling strategy.save`
* Description: Automatically saves M375 command to config-override when M500 is issued, causing the grid to be loaded from /sd/delta.grid on boot and compensation to be enabled automatically. This allows persistent bed leveling across power cycles without re-probing.
  * When enabled: M500 saves "M375" to config-override
  * Grid file must be created first with M374
  * On boot, grid is loaded and compensation enabled automatically
  * Disable to require manual M375 after each boot
* Related M-Codes:
  * M374 - Save grid to /sd/delta.grid (must do this first)
  * M375 - Load grid from /sd/delta.grid (auto-added to config-override if save=true)
  * M500 - Trigger saving M375 to config-override
* Related settings: `leveling-strategy.delta-grid.enable`
* Related pages: delta-grid-calibration-options, zprobe, sd-card
* Example configuration:
  * leveling-strategy.delta-grid.save false  # Don't auto-load grid on boot (default)
  * leveling-strategy.delta-grid.save true  # Auto-load grid on boot

---

#### `tolerance`

* Type: `number`
* Default: `0.03`
* Units: mm
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:112`
* Typical values: `0.03` (default), `0.01` (tight), `0.05` (relaxed)
* Corresponding v1 setting: `leveling-strategy.delta-grid.tolerance`
* Corresponding v2 setting: `delta grid leveling strategy.tolerance`
* Description: Probe tolerance for repeatability checks and validation during grid creation. Used to validate that probe measurements are consistent and repeatable across multiple probes of the same point.
  * Validates probe repeatability during grid creation
  * Ensures probe quality before grid is accepted
  * 0.03mm (30 microns) is typical for good probe repeatability
* Related settings: `zprobe.debounce_ms`, `zprobe.slow_feedrate`
* Related pages: delta-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.delta-grid.tolerance 0.03  # Default 30 micron tolerance
  * leveling-strategy.delta-grid.tolerance 0.01  # Tight 10 micron tolerance

---

#### `is_square`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.delta-grid`
* Context: Module instance setting (DEPRECATED)
* Defined in: `modules/tools/zprobe/DeltaGridStrategy.cpp:115`
* Valid values: Do not use
* Deprecated: Use rectangular-grid strategy instead for square/rectangular beds
* Corresponding v1 setting: `leveling-strategy.delta-grid.is_square`
* Corresponding v2 setting: none (feature removed)
* Description: **DEPRECATED** - This setting is no longer supported and will produce an error if used. For square or rectangular beds, use the rectangular-grid strategy instead of delta-grid.
  * Setting this will cause an error message
  * Use leveling-strategy.rectangular-grid for non-circular beds
* Related pages: delta-grid-calibration-options, rectangular-grid-calibration-options
* Example configuration:
  * # Do not use - deprecated and will error

---

## Rectangular Grid Strategy

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: Standard module enable pattern
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.enable`
* Corresponding v2 setting: `cartesian grid leveling strategy` (section-based configuration)
* Description: Enables the rectangular grid leveling strategy for Cartesian and CoreXY machines. The strategy probes a rectangular area with configurable dimensions and grid density, storing height offsets at each point. During printing, interpolation between the nearest four grid points provides smooth Z compensation across the entire bed.
  * For Cartesian, CoreXY, H-Bot, and other rectangular bed machines
  * Creates rectangular height map for non-flat bed compensation
  * Grid dimensions and point density fully configurable
  * Supports both fixed-area and two-corners modes
  * Grid can be saved to SD and auto-loaded on boot
* Related M-Codes:
  * G29 X<width> Y<length> - Test scan bed area
  * G29 I<x_size> J<y_size> - Override grid dimensions for test
  * G31 / G32 - Probe grid and enable compensation
  * G31/G32 X<width> Y<length> - Override bed dimensions
  * G31/G32 I<x_size> J<y_size> - Override grid size
  * G31/G32 R1 - Force two-corners mode using current position
  * G31/G32 R0 - Disable two-corners mode
  * M370 / M561 - Clear grid and disable compensation
  * M374 - Save grid to /sd/cartesian.grid (or cartesian_nm.grid for non-square)
  * M374.1 - Delete saved grid file
  * M375 - Load grid from SD and enable compensation
  * M375.1 - Display current grid
  * M565 X<x> Y<y> Z<z> - Set probe offsets
* Related settings: `zprobe.enable`, `leveling-strategy.rectangular-grid.x_size`, `leveling-strategy.rectangular-grid.y_size`
* Related pages: zprobe, rectangular-grid-calibration-options, pcb-milling, three-point-strategy-options
* Example configuration:
  * leveling-strategy.rectangular-grid.enable true  # Enable rectangular grid leveling

---

#### `size`

* Type: `number` (odd integer)
* Default: `7`
* Units: N/A (grid dimension)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:145`
* Typical values: `7` (49 points), `5` (25 points), `9` (81 points)
* Valid values: Must be an odd number (3, 5, 7, 9, 11, etc.)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.size`
* Corresponding v2 setting: `cartesian grid leveling strategy.size`
* Description: Default grid size for both X and Y dimensions if grid_x_size and grid_y_size are not explicitly specified. Must be an odd number to ensure a center point exists. This is a fallback value; specifying grid_x_size and grid_y_size directly allows non-square grids.
  * Used only if grid_x_size and grid_y_size are not defined
  * Overridden by explicit grid_x_size / grid_y_size settings
  * Total points = size × size (for square grids)
  * Must be odd for proper interpolation
* Related M-Codes:
  * G29/G31/G32 I<size> - Override grid size at runtime for square grid
  * G29/G31/G32 I<x_size> J<y_size> - Override for rectangular grid
* Related settings: `leveling-strategy.rectangular-grid.grid_x_size`, `leveling-strategy.rectangular-grid.grid_y_size`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.size 7  # 7×7 grid fallback (default)
  * leveling-strategy.rectangular-grid.size 5  # 5×5 grid fallback

---

#### `grid_x_size`

* Type: `number` (odd integer)
* Default: `7` (from size)
* Units: N/A (grid dimension)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:146`
* Typical values: `7` (default), `9` (more detail in X), `5` (faster)
* Valid values: Must be an odd number
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.grid_x_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.grid_x_size`
* Description: Number of probe points in the X dimension, allowing rectangular (non-square) grids. If both grid_x_size and grid_y_size are specified, they override the 'size' setting. This enables different resolutions in X and Y directions for beds with different characteristics.
  * Allows rectangular grids (different X and Y point counts)
  * Overrides 'size' setting when specified with grid_y_size
  * Must be odd number for center point
  * More points = higher accuracy but longer probe time
* Related M-Codes:
  * G29/G31/G32 I<x_size> J<y_size> - Override both dimensions at runtime
* Related settings: `leveling-strategy.rectangular-grid.grid_y_size`, `leveling-strategy.rectangular-grid.size`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.grid_x_size 9  # 9 points in X direction
  * leveling-strategy.rectangular-grid.grid_x_size 7  # 7 points in X direction

---

#### `grid_y_size`

* Type: `number` (odd integer)
* Default: `7` (from size)
* Units: N/A (grid dimension)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:147`
* Typical values: `7` (default), `5` (fewer points in Y), `9` (more detail in Y)
* Valid values: Must be an odd number
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.grid_y_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.grid_y_size`
* Description: Number of probe points in the Y dimension, allowing rectangular (non-square) grids. When specified together with grid_x_size, enables non-square grids tailored to bed dimensions. Must be odd to ensure proper interpolation with a center point.
  * Allows rectangular grids (different X and Y point counts)
  * Must be odd for center point
  * Works with grid_x_size to define grid shape
* Related M-Codes:
  * G29/G31/G32 I<x_size> J<y_size> - Override both dimensions at runtime
* Related settings: `leveling-strategy.rectangular-grid.grid_x_size`, `leveling-strategy.rectangular-grid.size`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.grid_y_size 7  # 7 points in Y direction
  * leveling-strategy.rectangular-grid.grid_y_size 5  # 5 points for shorter Y axis

---

#### `x_size`

* Type: `number`
* Default: none (must be explicitly set)
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:170`
* Required: yes (grid will not function without this)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.x_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.x_size`
* Description: Width of the rectangular bed area to probe in the X dimension, measured in millimeters. This defines the total X extent of the probing area. The grid points are evenly distributed across this width. This is a required setting for the rectangular grid strategy to function.
  * Defines bed width for probing
  * Grid points evenly spaced across this dimension
  * Must be set in config, no default
  * Can be overridden at runtime with G31/G32 X parameter
* Related M-Codes:
  * G29/G31/G32 X<width> - Override X size at runtime
* Related settings: `leveling-strategy.rectangular-grid.y_size`, `leveling-strategy.rectangular-grid.grid_x_size`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.x_size 200  # 200mm wide bed
  * leveling-strategy.rectangular-grid.x_size 300  # 300mm wide bed

---

#### `y_size`

* Type: `number`
* Default: none (must be explicitly set)
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:171`
* Required: yes (grid will not function without this)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.y_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.y_size`
* Description: Length of the rectangular bed area to probe in the Y dimension, measured in millimeters. This defines the total Y extent of the probing area. The grid points are evenly distributed across this length. This is a required setting for the rectangular grid strategy to function.
  * Defines bed length for probing
  * Grid points evenly spaced across this dimension
  * Must be set in config, no default
  * Can be overridden at runtime with G31/G32 Y parameter
* Related M-Codes:
  * G29/G31/G32 Y<length> - Override Y size at runtime
* Related settings: `leveling-strategy.rectangular-grid.x_size`, `leveling-strategy.rectangular-grid.grid_y_size`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.y_size 200  # 200mm deep bed
  * leveling-strategy.rectangular-grid.y_size 250  # 250mm deep bed

---

#### `probe_offsets`

* Type: `string` (X,Y,Z offsets)
* Default: `0,0,0`
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:184`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.probe_offsets`
* Corresponding v2 setting: `cartesian grid leveling strategy.probe_offsets`
* Description: Offset of the probe tip from the nozzle tip in X, Y, and Z dimensions. These offsets are critical for accurate positioning as they tell the firmware where the probe actually is relative to the print nozzle. The Z offset is typically 0 for this strategy as it uses relative height mapping.
  * Format: X,Y,Z (e.g., "0,0,0" or "15,-10,0")
  * X offset: positive = probe right, negative = probe left of nozzle
  * Y offset: positive = probe forward, negative = probe behind nozzle
  * Z offset: typically 0 for rectangular grid strategy
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets at runtime
  * M500 - Save current offsets to config-override
* Related settings: `zprobe.probe_pin`, `leveling-strategy.rectangular-grid.x_size`
* Related pages: rectangular-grid-calibration-options, zprobe, z-probe-guide
* Example configuration:
  * leveling-strategy.rectangular-grid.probe_offsets 0,0,0  # Probe at nozzle position
  * leveling-strategy.rectangular-grid.probe_offsets 15,-10,0  # Probe 15mm right, 10mm back

---

#### `initial_height`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm (absolute Z position)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:179`
* Typical values: `NAN` (disabled, default), `10` (10mm height), `5` (low height)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.initial_height`
* Corresponding v2 setting: `cartesian grid leveling strategy.initial_height`
* Description: Optional absolute Z machine position in millimeters to move to before starting the grid probe. If not set (NAN) or ≤0, probing starts from the current Z position. When set to a valid positive value, provides a safety feature by ensuring the probe starts from a known height above the bed.
  * NAN or ≤0: start probing from current position (default)
  * Positive value: move to this absolute Z before probing
  * This is an ABSOLUTE Z machine coordinate
  * Requires correct Z homing for proper operation
  * Optional safety feature, not required
* Related settings: `zprobe.probe_height`, `leveling-strategy.rectangular-grid.do_home`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * # leveling-strategy.rectangular-grid.initial_height not set (disabled by default)
  * leveling-strategy.rectangular-grid.initial_height 10  # Start from 10mm absolute Z

---

#### `do_home`

* Type: `bool`
* Default: `true`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:154`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.do_home`
* Corresponding v2 setting: `cartesian grid leveling strategy.do_home`
* Description: Automatically home before running G31/G32 probing operations (unless in two-corners mode or R1 is specified in the G-code command). Homing ensures the machine starts from a known position for repeatable and accurate grid generation. Can be disabled for manual homing control.
  * Executes homing before probing sequence
  * Skipped in two-corners mode
  * Skipped if R1 parameter present in G31/G32
  * Ensures consistent starting position
* Related settings: `endstops.alpha_homing_direction`, `leveling-strategy.rectangular-grid.only_by_two_corners`
* Related pages: rectangular-grid-calibration-options, endstops, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.do_home true  # Auto-home before probing (recommended)
  * leveling-strategy.rectangular-grid.do_home false  # Manual homing control

---

#### `save`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:153`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.save`
* Corresponding v2 setting: `cartesian grid leveling strategy.save`
* Description: Automatically saves M375 command to config-override when M500 is issued, causing the grid to be loaded from /sd/cartesian.grid (or /sd/cartesian_nm.grid for non-square grids) on boot. Enables persistent bed leveling across power cycles without re-probing every time.
  * When enabled: M500 saves "M375" to config-override
  * Grid file must be created first with M374
  * On boot, grid automatically loaded and compensation enabled
  * Requires M374 to save grid before enabling
* Related M-Codes:
  * M374 - Save grid to /sd/cartesian.grid or /sd/cartesian_nm.grid
  * M375 - Load grid and enable compensation (auto-added to config-override)
  * M500 - Trigger saving M375 command
* Related settings: `leveling-strategy.rectangular-grid.enable`
* Related pages: rectangular-grid-calibration-options, zprobe, sd-card
* Example configuration:
  * leveling-strategy.rectangular-grid.save false  # Don't auto-load grid (default)
  * leveling-strategy.rectangular-grid.save true  # Auto-load grid on boot

---

#### `tolerance`

* Type: `number`
* Default: `0.03`
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:152`
* Typical values: `0.03` (default), `0.01` (tight), `0.05` (relaxed)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.tolerance`
* Corresponding v2 setting: `cartesian grid leveling strategy.tolerance`
* Description: Probe tolerance in millimeters for repeatability validation during grid creation. Used to verify that probe measurements are consistent and repeatable, ensuring the grid data is reliable before it is used for compensation.
  * Validates probe consistency during grid generation
  * Ensures reliable grid data quality
  * 0.03mm (30 microns) is typical for good probes
* Related settings: `zprobe.debounce_ms`, `zprobe.slow_feedrate`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.tolerance 0.03  # Default 30 micron tolerance
  * leveling-strategy.rectangular-grid.tolerance 0.01  # Tight 10 micron tolerance

---

#### `only_by_two_corners`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:155`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.only_by_two_corners`
* Corresponding v2 setting: `cartesian grid leveling strategy.only_by_two_corners`
* Description: Enables two-corners mode where G31/G32 requires XYAB parameters instead of using pre-configured dimensions. In this mode: XY defines the starting position, A defines width, B defines length from that position. This allows dynamic probe area definition but prevents grid saving. Mode can be toggled at runtime with G32 R1 (enable) or R0 (disable).
  * When enabled: G31/G32 requires X Y A B parameters
  * X,Y: start position coordinates
  * A: width from start position
  * B: length from start position
  * Cannot save grid in this mode
  * Runtime toggle: G32 R1 (enable) / R0 (disable)
* Related M-Codes:
  * G32 R1 - Force two-corners mode at runtime
  * G32 R0 - Disable two-corners mode
  * G31/G32 X<x> Y<y> A<width> B<length> - Define probe area in two-corners mode
* Related settings: `leveling-strategy.rectangular-grid.x_size`, `leveling-strategy.rectangular-grid.y_size`
* Related pages: rectangular-grid-calibration-options, pcb-milling
* Example configuration:
  * leveling-strategy.rectangular-grid.only_by_two_corners false  # Use fixed grid (default)
  * leveling-strategy.rectangular-grid.only_by_two_corners true  # Enable two-corners mode

---

#### `human_readable`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:156`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.human_readable`
* Corresponding v2 setting: `cartesian grid leveling strategy.human_readable`
* Description: Changes the grid display format for M375.1 from raw values to a human-readable table with coordinates. When enabled, the output includes X and Y coordinates for each grid point along with the height value, making it easier to understand and visualize the bed topology.
  * false: raw height values only
  * true: formatted table with X, Y, Z coordinates
  * Only affects M375.1 display output
  * Does not affect grid functionality or saved format
* Related M-Codes:
  * M375.1 - Display current grid (format affected by this setting)
* Related settings: `leveling-strategy.rectangular-grid.enable`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.human_readable false  # Raw values (default)
  * leveling-strategy.rectangular-grid.human_readable true  # Formatted table

---

#### `height_limit`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:159`
* Typical values: `NAN` (disabled), `10` (fade at 10mm), `5` (fade at 5mm)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.height_limit`
* Corresponding v2 setting: `cartesian grid leveling strategy.height_limit`
* Description: Maximum Z height in millimeters where bed compensation is applied. Above this height, no compensation is added to Z moves. Used together with dampening_start to create a fade zone where compensation gradually reduces from 100% to 0%. Prevents compensation from affecting tall prints unnecessarily.
  * Compensation disabled above this height
  * Requires dampening_start to be set for fade zone
  * NAN: compensation applied at all heights (default)
  * Positive value: compensation fades out and stops at this height
* Related settings: `leveling-strategy.rectangular-grid.dampening_start`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * # leveling-strategy.rectangular-grid.height_limit not set (disabled, default)
  * leveling-strategy.rectangular-grid.height_limit 10  # No compensation above 10mm

---

#### `dampening_start`

* Type: `number`
* Default: `NAN` (disabled)
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:160`
* Typical values: `NAN` (disabled), `5` (start fade at 5mm), `3` (start fade at 3mm)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.dampening_start`
* Corresponding v2 setting: `cartesian grid leveling strategy.dampening_start`
* Description: Z height in millimeters where bed compensation begins to fade out. Between dampening_start and height_limit, compensation is linearly scaled from 100% to 0%. This creates a smooth transition zone where compensation gradually reduces, preventing abrupt changes in Z movement.
  * Compensation fade zone: dampening_start to height_limit
  * Below dampening_start: 100% compensation
  * Within zone: linear interpolation from 100% to 0%
  * Above height_limit: 0% compensation
  * Requires height_limit to be set
  * NAN: no fade zone (default)
* Related settings: `leveling-strategy.rectangular-grid.height_limit`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * # leveling-strategy.rectangular-grid.dampening_start not set (disabled, default)
  * leveling-strategy.rectangular-grid.dampening_start 5  # Start fading at 5mm

---

#### `m_attach`

* Type: `bool`
* Default: `false`
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:157`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.m_attach`
* Corresponding v2 setting: `cartesian grid leveling strategy.m_attach`
* Description: Enables manual probe attachment mode for removable probes. Before probing begins, the machine moves to the mount_position and waits for the user to manually attach the probe and trigger it to signal readiness. This allows use of removable probes that are not permanently mounted on the tool head.
  * Machine moves to mount_position before probing
  * Waits for user to attach probe and trigger it
  * Useful for removable probes (like manual touch probes)
  * Requires mount_position to be defined
* Related settings: `leveling-strategy.rectangular-grid.mount_position`
* Related pages: rectangular-grid-calibration-options, zprobe, sensor-types
* Example configuration:
  * leveling-strategy.rectangular-grid.m_attach false  # No manual attachment (default)
  * leveling-strategy.rectangular-grid.m_attach true  # Enable manual probe attachment

---

#### `mount_position`

* Type: `string` (X,Y,Z coordinates)
* Default: `0,0,50`
* Units: mm
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:194`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.mount_position`
* Corresponding v2 setting: `cartesian grid leveling strategy.mount_position`
* Description: Position in machine coordinates where the machine moves and waits for manual probe attachment when m_attach is enabled. Should be a safe, easily accessible position where the operator can comfortably attach the removable probe. Only used if m_attach is set to true.
  * Format: X,Y,Z (e.g., "0,0,50" or "100,100,30")
  * Position should be safe and accessible
  * Only used if m_attach is enabled
  * Machine waits at this position for probe attachment
* Related settings: `leveling-strategy.rectangular-grid.m_attach`
* Related pages: rectangular-grid-calibration-options, zprobe
* Example configuration:
  * leveling-strategy.rectangular-grid.mount_position 0,0,50  # Default attachment position
  * leveling-strategy.rectangular-grid.mount_position 100,100,30  # Center of bed, low height

---

#### `before_probe_gcode`

* Type: `string`
* Default: `""` (empty)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:210`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.before_probe_gcode`
* Corresponding v2 setting: `cartesian grid leveling strategy.before_probe_gcode`
* Description: G-code command to execute before each individual probing operation. Use underscore `_` as space separator in the command string. Commonly used to deploy servo-actuated probes like BLTouch. The underscore characters are automatically converted to spaces before execution.
  * Executed before every single probe point
  * Use underscore (_) in place of spaces
  * Example: "M280_S10" becomes "M280 S10"
  * Common use: BLTouch probe deployment
* Related settings: `leveling-strategy.rectangular-grid.after_probe_gcode`
* Related pages: rectangular-grid-calibration-options, zprobe, sensor-types
* Example configuration:
  * # leveling-strategy.rectangular-grid.before_probe_gcode  (empty by default)
  * leveling-strategy.rectangular-grid.before_probe_gcode M280_S10  # Deploy BLTouch

---

#### `after_probe_gcode`

* Type: `string`
* Default: `""` (empty)
* Module: `leveling-strategy.rectangular-grid`
* Context: Module instance setting
* Defined in: `modules/tools/zprobe/CartGridStrategy.cpp:211`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.after_probe_gcode`
* Corresponding v2 setting: `cartesian grid leveling strategy.after_probe_gcode`
* Description: G-code command to execute after each individual probing operation. Use underscore `_` as space separator in the command string. Commonly used to retract servo-actuated probes like BLTouch. The underscore characters are automatically converted to spaces before execution.
  * Executed after every single probe point
  * Use underscore (_) in place of spaces
  * Example: "M281_S90" becomes "M281 S90"
  * Common use: BLTouch probe retraction
* Related settings: `leveling-strategy.rectangular-grid.before_probe_gcode`
* Related pages: rectangular-grid-calibration-options, zprobe, sensor-types
* Example configuration:
  * # leveling-strategy.rectangular-grid.after_probe_gcode  (empty by default)
  * leveling-strategy.rectangular-grid.after_probe_gcode M281_S90  # Retract BLTouch

---

## Summary

This refined documentation covers all 49 configuration settings in the Smoothieware v1 ZProbe & Leveling module:

* **Base ZProbe Settings:** 10 settings
* **Three-Point Leveling Strategy:** 7 settings
* **Delta Calibration Strategy:** 2 settings
* **Delta Grid Strategy:** 8 settings (including 1 deprecated)
* **Rectangular Grid Strategy:** 22 settings

All settings have been refined according to the specification with:
- Converted `**Property:**` format to `* Property:` format
- Verified min/max values from source code (minimal validation found in source)
- Added corresponding v2 settings using functional matching
- Added related pages using page descriptions
- Converted all notes to sub-bullets with 2-space indentation
- Used canonical property order throughout
- Preserved all information from the original file

---

## Panel/Display

# Panel Module Configuration Settings - Refined

## Overview

The panel module provides interface support for LCD screens, encoders, and button controls. It supports multiple display types including RepRap Discount GLCD, ST7565, OLED displays (SSD1306, SH1106), Viki2, and Universal Adapter panels.

**Module:** `panel`
**Total Settings:** 36

---

## Core Panel Settings

#### `panel.enable`

* Type: `bool`
* Default: `false`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:110`
* Valid values: `true`, `false`
* Corresponding v1 setting: `panel.enable`
* Corresponding v2 setting: `display.enable` (note: v2 has limited panel support, many LCD variants removed)
* Description: Enables the panel interface module. Panels provide a screen, an encoder wheel and/or a set of buttons, used to control your machine without requiring a computer connection. When enabled, the panel module initializes the LCD driver, configures input devices, and registers for system events to display machine status and accept user input.
  * Multiple panel types are supported through the `panel.lcd` setting.
  * If disabled or not configured, the panel module is completely removed from memory.
  * The panel provides standalone machine control including file selection, temperature adjustment, manual jogging, and G-code execution.
* Related pages: panel, panel-guide, panel-options
* Example configuration:
  * panel.enable true  # Enable panel interface
  * panel.enable false  # Disable panel (default)

#### `panel.lcd`

* Type: `enum`
* Default: `reprap_discount_glcd`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:117`
* Valid values: `reprap_discount_glcd`, `st7565_glcd`, `ssd1306_oled`, `sh1106_oled`, `viki2`, `mini_viki2`, `universal_adapter`
  * `reprap_discount_glcd` - RepRap Discount Full Graphic Smart Controller (128x64, encoder with click button)
  * `st7565_glcd` - ST7565 128x64 LCD panel (requires additional configuration pins)
  * `ssd1306_oled` - SSD1306 OLED display (128x64, I2C or SPI)
  * `sh1106_oled` - SH1106 OLED display (132x64, wider than SSD1306)
  * `viki2` - Panucatt Viki2 LCD panel (with red/blue status LEDs)
  * `mini_viki2` - Panucatt Mini Viki2 LCD panel (compact version)
  * `universal_adapter` - Universal Panel Adapter (supports multiple panel types via adapter board)
* Corresponding v1 setting: `panel.lcd`
* Corresponding v2 setting: none (v2 has limited panel support with different panel types)
* Description: Specifies the type of panel connected to the Smoothieboard. Each panel has a specific interface and driver requirements, so the correct panel type must be specified. The value determines which panel driver will be loaded and initialized. Different panels have different pin requirements, button configurations, and display capabilities.
  * The panel type selection affects which other settings are required or optional.
  * RRD GLCD does not support SPI CS pin sharing and requires dedicated SPI port.
  * OLED displays (SSD1306, SH1106) require additional A0 and RST pins for initialization.
  * Viki2 panels support red/blue LED indicators for heating status.
  * Universal Adapter supports daisy-chaining multiple devices via busy pin polling.
* Related pages: panel, panel-guide, rrdglcdadapter
* Example configuration:
  * panel.lcd reprap_discount_glcd  # Most common panel type
  * panel.lcd viki2  # Panucatt Viki2 with status LEDs
  * panel.lcd ssd1306_oled  # Small OLED display

---

## SPI Communication Settings

#### `panel.spi_channel`

* Type: `number`
* Default: `0`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:145`
* Valid values: `0`, `1`
  * `0` - SPI channel 0 (pins P0_18 MOSI, P0_17 MISO, P0_15 SCLK)
  * `1` - SPI channel 1 (pins P0_9 MOSI, P0_8 MISO, P0_7 SCLK)
* Corresponding v1 setting: `panel.spi_channel`
* Corresponding v2 setting: none (v2 uses different pin notation and SPI configuration)
* Description: Selects which SPI channel to use for panel communication. The Smoothieboard has two SPI channels with different pin assignments. Channel selection affects which physical pins are used for MOSI (Master Out Slave In), MISO (Master In Slave Out), and SCLK (Serial Clock) signals. Most panels use channel 0 by default.
  * Channel 0 is the default and most commonly used SPI channel.
  * Channel 1 can be used if channel 0 is needed for other devices.
  * Both panel and external SD card can share the same SPI channel with different CS pins.
  * Consult the Smoothieboard pinout diagram to identify available SPI pins.
* Related settings: `panel.spi_cs_pin`, `panel.spi_frequency`, `panel.external_sd.spi_channel`
* Related pages: panel, pinout, pin-configuration
* Example configuration:
  * panel.spi_channel 0  # Use default SPI channel (most common)
  * panel.spi_channel 1  # Use alternate SPI channel

#### `panel.spi_cs_pin`

* Type: `pin`
* Default: Varies by panel type (`nc` for most, `0.16` for ST7565, `2.8` for external SD)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:35`, `ST7565.cpp:106`, `UniversalAdapter.cpp:52`
* Valid values: Any valid pin identifier in format `port.pin` or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `0.16` means port 0, pin 16)
  * Add `!` suffix to invert signal (active low)
  * Add `^` suffix to enable internal pull-up resistor
  * `nc` disables chip select (not recommended)
* Corresponding v1 setting: `panel.spi_cs_pin`
* Corresponding v2 setting: none (v2 uses different pin notation format like `PD3`)
* Description: Specifies the CS (Chip Select) pin used to select the panel device on the SPI bus. CS allows multiple devices to share the same SPI port by activating only the selected device. When CS is low (active), the panel responds to SPI commands; when high (inactive), the panel ignores SPI traffic.
  * CRITICAL: RepRap Discount GLCD does not support CS and requires being alone on its SPI port.
  * ST7565 panels typically use pin 0.16 as default.
  * Each device on the SPI bus must have a unique CS pin.
  * Setting to `nc` disables chip select which may cause communication conflicts.
* Related settings: `panel.spi_channel`, `panel.spi_frequency`
* Related pages: panel, pinout, pin-configuration
* Example configuration:
  * panel.spi_cs_pin 0.16  # Common for ST7565 panels
  * panel.spi_cs_pin 1.23  # Alternative CS pin
  * panel.spi_cs_pin nc  # No chip select (RRD GLCD only)

#### `panel.spi_frequency`

* Type: `number`
* Default: `1000000` (1 MHz for RRD GLCD and ST7565), `500000` (500 kHz for Universal Adapter)
* Units: Hz (Hertz)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:41`, `ST7565.cpp:103`, `UniversalAdapter.cpp:72`
* Typical values: `500000` (500 kHz, conservative), `1000000` (1 MHz, standard), `2000000` (2 MHz, fast but may cause errors)
* Corresponding v1 setting: `panel.spi_frequency`
* Corresponding v2 setting: none (v2 uses different SPI configuration approach)
* Description: Sets the SPI communication frequency in Hertz for the panel interface. Higher frequencies allow faster screen updates and more responsive display refresh, but may cause communication errors if the panel cannot keep up with the data rate. The optimal frequency depends on the panel type, cable quality, and cable length.
  * Default 1 MHz works reliably for most panels with typical cable lengths.
  * Higher frequencies (2-4 MHz) can improve refresh rate on fast panels.
  * Lower frequencies (500 kHz) may be needed for long cables or noisy environments.
  * Too high frequency causes display artifacts, garbled text, or complete communication failure.
  * SPI frequency affects both command and data transfer rates to the panel.
* Related settings: `panel.spi_channel`, `panel.spi_cs_pin`
* Related pages: panel, panel-options
* Example configuration:
  * panel.spi_frequency 1000000  # 1 MHz (standard, reliable)
  * panel.spi_frequency 500000  # 500 kHz (conservative for long cables)
  * panel.spi_frequency 2000000  # 2 MHz (fast, test for stability)

---

## Display Settings

#### `panel.contrast`

* Type: `number`
* Default: Varies by panel (9 for ST7565/Viki2, 18 for Mini Viki2, 15 for SH1106)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:158`, `ST7565.cpp:62-81`
* Minimum value: `0` (lowest contrast, may be invisible)
* Maximum value: `31` (implementation dependent, 31 is common maximum for ST7565-based controllers)
* Typical values: `9` (ST7565, Viki2), `15` (SH1106 OLED), `18` (Mini Viki2)
* Corresponding v1 setting: `panel.contrast`
* Corresponding v2 setting: none (v2 has limited panel support)
* Description: Sets the display contrast value for panels that support contrast adjustment (Viki2, Mini Viki2, ST7565_glcd, and OLED displays). Higher values increase contrast making text darker/more visible, while lower values decrease contrast making text lighter/less visible. Optimal value depends on viewing angle, ambient lighting conditions, and panel characteristics.
  * Only applicable to panels with contrast control hardware (not RRD GLCD).
  * Different panel types have different optimal contrast ranges.
  * Contrast may need adjustment based on room lighting and viewing angle.
  * Too low contrast makes display unreadable in bright light.
  * Too high contrast can cause ghosting or reduce display lifespan on OLED panels.
* Related pages: panel, panel-options
* Example configuration:
  * panel.contrast 9  # Standard for ST7565 and Viki2
  * panel.contrast 15  # Good for SH1106 OLED
  * panel.contrast 18  # Default for Mini Viki2

#### `panel.reverse`

* Type: `bool`
* Default: `false` (but `true` for Viki2 and Mini Viki2)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/ST7565.cpp:161`
* Valid values: `true`, `false`
* Corresponding v1 setting: `panel.reverse`
* Corresponding v2 setting: none (v2 has limited panel support)
* Description: When set to true, reverses the screen display by rotating it 180 degrees. This setting is useful when the panel is physically mounted upside down or when the display orientation needs to be flipped for mechanical reasons. The reversal affects both the pixel addressing and the COM (common) line scanning direction.
  * Automatically set to true for Viki2 and Mini Viki2 panels due to their physical design.
  * Does not affect button or encoder operation, only display orientation.
  * Useful for mechanical installations where the panel must be mounted inverted.
  * Setting applies to both text and graphics rendering.
* Related settings: `panel.lcd`
* Related pages: panel, panel-options
* Example configuration:
  * panel.reverse false  # Normal orientation (default for most panels)
  * panel.reverse true  # Upside down orientation (default for Viki2)

#### `panel.menu_offset`

* Type: `number`
* Default: `0`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:163`
* Valid values: `0` or `1`
  * `0` - Each encoder click moves one menu line (standard behavior)
  * `1` - Each encoder click moves half a menu line, requiring 2 clicks to move one line (for high-resolution encoders)
* Corresponding v1 setting: `panel.menu_offset`
* Corresponding v2 setting: none (v2 has different menu navigation approach)
* Description: Configures the number of lines to offset the menu lines by on screen, effectively controlling how many encoder clicks are required to move one menu position. When set to 1, the encoder requires 2 clicks to move one menu line, which is useful for high-resolution encoders that have more detents per revolution. This setting helps adapt encoder sensitivity to user preference and encoder hardware characteristics.
  * On some panels, this value must be set to 1 for proper operation with high-resolution encoders.
  * Setting to 1 provides finer control and reduces accidental menu skipping.
  * Setting to 0 provides faster menu navigation with fewer encoder turns required.
  * This is an end-user usability setting that depends on encoder hardware and personal preference.
* Related settings: `panel.encoder_resolution`
* Related pages: panel, panel-options
* Example configuration:
  * panel.menu_offset 0  # Standard encoder (1 click = 1 menu line)
  * panel.menu_offset 1  # High-resolution encoder (2 clicks = 1 menu line)

---

## Encoder Settings

#### `panel.encoder_a_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:29`, `ST7565.cpp:145`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `3.25` means port 3, pin 25)
  * Add `!` suffix to invert signal (active low)
  * Add `^` suffix to enable internal pull-up resistor
  * Combining modifiers: `3.25!^` enables both inversion and pull-up
  * `nc` indicates no encoder is connected
* Corresponding v1 setting: `panel.encoder_a_pin`
* Corresponding v2 setting: none (v2 uses different pin notation format)
* Description: Specifies the A pin for the rotary encoder wheel. Encoders have two output pins (A and B) that generate quadrature signals as the encoder is rotated. The firmware reads both pins to determine rotation direction and count encoder pulses. The `^` modifier defines menu move direction (when used, inverts the default direction). The `!` modifier inverts the signal polarity.
  * Encoders require both A and B pins to be configured for proper operation.
  * Set to `nc` if you use no encoder (button-only panel navigation).
  * The `^` pull-up modifier is recommended for reliable encoder reading.
  * Encoder pins must support high-speed input reading (avoid slow I2C-based pins).
  * Pin inversion (`!`) may be needed depending on encoder hardware design.
* Related settings: `panel.encoder_b_pin`, `panel.encoder_resolution`
* Related pages: panel, pinout, pin-configuration
* Example configuration:
  * panel.encoder_a_pin 3.25!^  # Port 3 pin 25, inverted with pull-up
  * panel.encoder_a_pin 1.20^  # Port 1 pin 20, pull-up enabled
  * panel.encoder_a_pin nc  # No encoder connected

#### `panel.encoder_b_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:30`, `ST7565.cpp:146`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `3.26` means port 3, pin 26)
  * Add `!` suffix to invert signal (active low)
  * Add `^` suffix to enable internal pull-up resistor
  * Combining modifiers: `3.26!^` enables both inversion and pull-up
  * `nc` indicates no encoder is connected
* Corresponding v1 setting: `panel.encoder_b_pin`
* Corresponding v2 setting: none (v2 uses different pin notation format)
* Description: Specifies the B pin for the rotary encoder wheel. Encoders have two output pins (A and B) that generate quadrature signals 90 degrees out of phase as the encoder is rotated. The firmware reads both pins together with encoder_a_pin to determine rotation direction and count encoder pulses. The `^` modifier defines menu move direction (when used, inverts the default direction). The `!` modifier inverts the signal polarity.
  * Encoders require both A and B pins to be configured for proper operation.
  * Set to `nc` if you use no encoder (button-only panel navigation).
  * The `^` pull-up modifier is recommended for reliable encoder reading.
  * Encoder B pin must be on the same port as encoder A pin on some hardware.
  * Phase relationship between A and B signals determines rotation direction.
* Related settings: `panel.encoder_a_pin`, `panel.encoder_resolution`
* Related pages: panel, pinout, pin-configuration
* Example configuration:
  * panel.encoder_b_pin 3.26!^  # Port 3 pin 26, inverted with pull-up
  * panel.encoder_b_pin 1.21^  # Port 1 pin 21, pull-up enabled
  * panel.encoder_b_pin nc  # No encoder connected

#### `panel.encoder_resolution`

* Type: `number`
* Default: Varies by panel (typically `2` to `4`)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:166`
* Typical values: `2` (standard 20-detent encoders), `4` (high-resolution encoders with more pulses per detent)
* Corresponding v1 setting: `panel.encoder_resolution`
* Corresponding v2 setting: none (v2 has different encoder configuration)
* Description: Specifies the number of pulses the encoder emits per physical detent (click position). This value is used to convert raw encoder pulse counts into meaningful menu navigation clicks. Standard encoders typically emit 2 or 4 pulses per detent. Setting this correctly ensures that each encoder click moves the menu by exactly one position.
  * Default value is typically 2 for standard 20-detent encoders.
  * High-resolution encoders may use 4 pulses per detent.
  * Incorrect value causes menu to skip positions or require multiple clicks per movement.
  * Some panels override this value based on their specific encoder hardware.
  * This setting is independent of `menu_offset` which provides additional click multiplication.
* Related settings: `panel.encoder_a_pin`, `panel.encoder_b_pin`, `panel.menu_offset`
* Related pages: panel, panel-options
* Example configuration:
  * panel.encoder_resolution 2  # Standard encoder (most common)
  * panel.encoder_resolution 4  # High-resolution encoder
  * panel.encoder_resolution 1  # Low-resolution encoder (rare)

---

## Button Pin Settings

#### `panel.click_button_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:31`, `ST7565.cpp:144`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `1.30` means port 1, pin 30)
  * Add `!` suffix to invert signal (active low button)
  * Add `^` suffix to enable internal pull-up resistor
  * Combining modifiers: `1.30!^` for inverted with pull-up (most common)
  * `nc` indicates no click button is connected
* Corresponding v1 setting: `panel.click_button_pin`
* Corresponding v2 setting: none (v2 has different button configuration)
* Description: Specifies the pin for the click ("enter" or "select") button on the panel. This button is typically pressed to select menu items, confirm actions, and accept value changes. The `!` modifier inverts the signal polarity (use for active-low buttons). The `^` modifier enables the internal pull-up resistor (recommended for most button configurations).
  * The click button is the primary selection mechanism for menu navigation.
  * Most encoder wheels have an integrated click button activated by pressing the encoder shaft.
  * Active-low buttons (ground when pressed) require the `!` modifier.
  * Pull-up resistor (`^`) is required unless external pull-up is provided.
  * Button debouncing is handled automatically by the firmware.
* Related settings: `panel.back_button_pin`, `panel.encoder_a_pin`
* Related pages: panel, pinout, pin-configuration
* Example configuration:
  * panel.click_button_pin 1.30!^  # Active-low with pull-up (common)
  * panel.click_button_pin 2.11^  # Active-high with pull-up
  * panel.click_button_pin nc  # No click button

#### `panel.back_button_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:33`, `ST7565.cpp:135-140`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `2.11` means port 2, pin 11)
  * Add `!` suffix to invert signal (active low button)
  * Add `^` suffix to enable internal pull-up resistor
  * Combining modifiers: `2.11!^` for inverted with pull-up (most common)
  * `nc` indicates no back button is connected
* Corresponding v1 setting: `panel.back_button_pin`
* Corresponding v2 setting: none (v2 has different button configuration)
* Description: Specifies the pin for the back ("escape" or "cancel") button on the panel. This button returns to the previous menu level or cancels the current operation. On Viki2 panels, this pin may be used for either back button or pause button functionality (configure only one, not both).
  * The back button allows navigation to higher menu levels without scrolling.
  * Not all panels have a dedicated back button (some use long-press of click button).
  * On Viki2, choose either `back_button_pin` or `pause_button_pin`, not both.
  * Active-low buttons (ground when pressed) require the `!` modifier.
  * Pull-up resistor (`^`) is required unless external pull-up is provided.
* Related settings: `panel.pause_button_pin`, `panel.click_button_pin`
* Related pages: panel, panel-options
* Example configuration:
  * panel.back_button_pin 2.11!^  # Active-low with pull-up (common)
  * panel.back_button_pin 1.22^  # Active-high with pull-up
  * panel.back_button_pin nc  # No back button

#### `panel.up_button_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/ST7565.cpp:118`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `0.1` means port 0, pin 1)
  * Add `!` suffix to invert signal (active low button)
  * Add `^` suffix to enable internal pull-up resistor
  * `nc` indicates no up button is connected
* Corresponding v1 setting: `panel.up_button_pin`
* Corresponding v2 setting: none (v2 has different button configuration)
* Description: Specifies the pin for the up button which moves up in menus or increments values. This button is typically found on panels without rotary encoders (button-only navigation panels). Not used on panels with encoders such as Viki2, Mini Viki2, and SSD1306 OLED which use encoder rotation for up/down navigation.
  * Only needed for button-only panels (no encoder).
  * Panels with encoders (Viki2, Mini Viki2, SSD1306) do not use up/down buttons.
  * Active-low buttons (ground when pressed) require the `!` modifier.
  * Pull-up resistor (`^` or external) is required for reliable button detection.
  * Up/down buttons provide alternative navigation when encoder is not available.
* Related settings: `panel.down_button_pin`, `panel.encoder_a_pin`
* Related pages: panel, panel-options
* Example configuration:
  * panel.up_button_pin 0.1!  # Active-low button
  * panel.up_button_pin 1.25^  # Active-high with pull-up
  * panel.up_button_pin nc  # No up button (encoder navigation)

#### `panel.down_button_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/ST7565.cpp:119`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `0.0` means port 0, pin 0)
  * Add `!` suffix to invert signal (active low button)
  * Add `^` suffix to enable internal pull-up resistor
  * `nc` indicates no down button is connected
* Corresponding v1 setting: `panel.down_button_pin`
* Corresponding v2 setting: none (v2 has different button configuration)
* Description: Specifies the pin for the down button which moves down in menus or decrements values. This button is typically found on panels without rotary encoders (button-only navigation panels). Not used on panels with encoders such as Viki2, Mini Viki2, and SSD1306 OLED which use encoder rotation for up/down navigation.
  * Only needed for button-only panels (no encoder).
  * Panels with encoders (Viki2, Mini Viki2, SSD1306) do not use up/down buttons.
  * Active-low buttons (ground when pressed) require the `!` modifier.
  * Pull-up resistor (`^` or external) is required for reliable button detection.
  * Up/down buttons provide alternative navigation when encoder is not available.
* Related settings: `panel.up_button_pin`, `panel.encoder_b_pin`
* Related pages: panel, panel-options
* Example configuration:
  * panel.down_button_pin 0.0!  # Active-low button
  * panel.down_button_pin 1.26^  # Active-high with pull-up
  * panel.down_button_pin nc  # No down button (encoder navigation)

#### `panel.pause_button_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:32`, `ST7565.cpp:128-132`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin`
  * Add `!` suffix to invert signal (active low button)
  * Add `^` suffix to enable internal pull-up resistor
  * `nc` indicates no pause button is connected
* Corresponding v1 setting: `panel.pause_button_pin`
* Corresponding v2 setting: none (v2 has different button configuration)
* Description: Specifies the pin for the pause button which immediately pauses print jobs when pressed. This button provides emergency pause functionality directly from the panel without navigating through menus. On Viki2 panels, this pin may be shared with the back button functionality - configure only one, not both.
  * Pause button provides immediate print suspension without menu navigation.
  * On Viki2, you must choose either `pause_button_pin` or `back_button_pin`, not both.
  * Active-low buttons (ground when pressed) require the `!` modifier.
  * Pull-up resistor (`^` or external) is required for reliable button detection.
  * Paused jobs can be resumed from the panel menu or via G-code commands.
* Related settings: `panel.back_button_pin`, `panel.click_button_pin`
* Related pages: panel, kill-pause-button
* Example configuration:
  * panel.pause_button_pin nc  # No pause button (default)
  * panel.pause_button_pin 2.12!^  # Active-low with pull-up
  * panel.pause_button_pin 1.28^  # Active-high with pull-up

#### `panel.longpress_delay`

* Type: `number`
* Default: `0`
* Units: milliseconds
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:185-190`
* Valid values: `0` (disabled) or milliseconds (e.g., `500`, `1000`, `1500`)
  * `0` - Long press detection disabled (default)
  * `500` - Half-second hold required for long press (fast)
  * `1000` - One-second hold required for long press (standard)
  * `1500` - 1.5-second hold required for long press (conservative)
* Corresponding v1 setting: `panel.longpress_delay`
* Corresponding v2 setting: none (v2 has different button handling)
* Description: Specifies the delay in milliseconds before a button press is considered a "long press" rather than a normal press. When set to 0, long press detection is disabled and all button presses are treated as normal presses. Long press can trigger alternative button actions on up and down buttons, providing additional functionality from limited button sets.
  * Setting to 0 disables long press functionality entirely (all presses are normal).
  * Longer delays reduce accidental long press triggers but slow down intentional long press actions.
  * Shorter delays make long press more responsive but increase accidental triggers.
  * Currently only implemented for up and down buttons, not for click, back, or pause buttons.
  * Long press actions are panel-screen dependent and may not be implemented on all screens.
* Related settings: `panel.up_button_pin`, `panel.down_button_pin`
* Related pages: panel, panel-options
* Example configuration:
  * panel.longpress_delay 0  # Disable long press (default)
  * panel.longpress_delay 1000  # 1 second hold for long press
  * panel.longpress_delay 500  # 0.5 second hold (responsive)

---

## Buzzer and LED Settings

#### `panel.buzz_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ReprapDiscountGLCD.cpp:34`, `ST7565.cpp:148`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `1.31` means port 1, pin 31)
  * No modifiers typically needed for buzzer pins
  * `nc` disables buzzer functionality but panel still works normally
* Corresponding v1 setting: `panel.buzz_pin`
* Corresponding v2 setting: none (v2 has different buzzer configuration)
* Description: Specifies the pin for the buzzer which provides audible feedback when buttons are clicked and for system alerts. The buzzer produces short beeps to confirm button presses, alert the user to warnings, and indicate completion of operations. If set to `nc`, buzzer functionality is disabled but the panel continues to operate normally without audio feedback.
  * Buzzer provides tactile confirmation that button presses were registered.
  * Click sounds are generated at 300 Hz for 60 milliseconds by default.
  * Buzzer pin must be capable of high-frequency PWM output.
  * If no buzzer is connected, set to `nc` to avoid wasting processing time.
  * Some panels have built-in buzzers, others require external piezo buzzer connection.
* Related settings: `panel.click_button_pin`
* Related pages: panel, pinout
* Example configuration:
  * panel.buzz_pin 1.31  # Enable buzzer on pin 1.31
  * panel.buzz_pin 2.4  # Alternative buzzer pin
  * panel.buzz_pin nc  # No buzzer (silent operation)

#### `panel.red_led_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ST7565.cpp:151`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin`
  * No modifiers typically needed for LED pins
  * `nc` disables red LED functionality
* Corresponding v1 setting: `panel.red_led_pin`
* Corresponding v2 setting: none (v2 does not support Viki2 panels)
* Description: Specifies the pin for the red LED indicator used on Viki2 panels to indicate heating status. The red LED turns on when the hotend is actively heating, providing visual feedback of heater operation. This LED is only used on Viki2 panels and should be set to `nc` for other panel types.
  * Only applicable to Viki2 panels which have built-in red/blue status LEDs.
  * Red LED indicates heating status (on when heating, off when at temperature).
  * Blue LED and red LED states are mutually exclusive on Viki2.
  * Other panel types should leave this setting at `nc`.
  * LED control is automatic based on temperature control module status.
* Related settings: `panel.blue_led_pin`, `panel.lcd`
* Related pages: panel, temperaturecontrol
* Example configuration:
  * panel.red_led_pin nc  # No red LED (default for non-Viki2 panels)
  * panel.red_led_pin 2.5  # Red LED pin for Viki2
  * panel.red_led_pin 1.18  # Alternative red LED pin

#### `panel.blue_led_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ST7565.cpp:152`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin`
  * No modifiers typically needed for LED pins
  * `nc` disables blue LED functionality
* Corresponding v1 setting: `panel.blue_led_pin`
* Corresponding v2 setting: none (v2 does not support Viki2 panels)
* Description: Specifies the pin for the blue LED indicator used on Viki2 panels to indicate normal operation status. The blue LED turns on when the system is ready and not actively heating, complementing the red LED for heating status. This LED is only used on Viki2 panels and should be set to `nc` for other panel types.
  * Only applicable to Viki2 panels which have built-in red/blue status LEDs.
  * Blue LED indicates normal ready status (on when ready, off when heating).
  * Blue LED and red LED states are mutually exclusive on Viki2.
  * Other panel types should leave this setting at `nc`.
  * LED control is automatic based on temperature control module status.
* Related settings: `panel.red_led_pin`, `panel.lcd`
* Related pages: panel, temperaturecontrol
* Example configuration:
  * panel.blue_led_pin nc  # No blue LED (default for non-Viki2 panels)
  * panel.blue_led_pin 2.6  # Blue LED pin for Viki2
  * panel.blue_led_pin 1.19  # Alternative blue LED pin

---

## Panel-Specific Pins

#### `panel.a0_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ST7565.cpp:114`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin`
  * No modifiers typically needed for A0 pins
  * `nc` indicates panel does not use A0 pin
* Corresponding v1 setting: `panel.a0_pin`
* Corresponding v2 setting: none (v2 has different panel support)
* Description: Specifies the A0 (also called C/D for Command/Data or D/C for Data/Command) pin required for Viki2 and SSD1306 OLED displays. This pin selects between command mode (low) and data mode (high) for SPI communication with the display controller. The A0 pin controls whether bytes sent over SPI are interpreted as commands or display data.
  * Required for Viki2, Mini Viki2, SSD1306, and SH1106 OLED displays.
  * Not used by RepRap Discount GLCD or Universal Adapter panels.
  * A0 high = data mode (send pixel/text data), A0 low = command mode (send control commands).
  * Must be connected to the panel's A0/DC/CD pin for proper operation.
  * Incorrect or missing A0 pin causes display initialization failure or garbled display.
* Related settings: `panel.rst_pin`, `panel.lcd`
* Related pages: panel, panel-options
* Example configuration:
  * panel.a0_pin nc  # Not needed for RRD GLCD
  * panel.a0_pin 2.6  # Required for Viki2/OLED displays
  * panel.a0_pin 0.18  # Alternative A0 pin

#### `panel.rst_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/ST7565.cpp:110`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin`
  * No modifiers typically needed for RST pins
  * `nc` indicates panel does not use/require RST pin
* Corresponding v1 setting: `panel.rst_pin`
* Corresponding v2 setting: none (v2 has different panel support)
* Description: Specifies the RST (reset) pin required for some OLED displays (SSD1306, SH1106). This pin is connected to the display's hardware reset input and is used to perform a hardware reset of the display controller during initialization. A hardware reset ensures the display starts in a known state before software configuration.
  * Required for some SSD1306 and SH1106 OLED displays.
  * Not typically required for Viki2, Mini Viki2, or ST7565 displays.
  * Not used by RepRap Discount GLCD or Universal Adapter panels.
  * Reset sequence: drive low for 20µs, then high to release reset.
  * Some OLED modules have built-in reset circuits and don't require external RST pin.
* Related settings: `panel.a0_pin`, `panel.lcd`
* Related pages: panel, panel-options
* Example configuration:
  * panel.rst_pin nc  # Not needed for most panels (default)
  * panel.rst_pin 2.7  # RST pin for OLED displays that require it
  * panel.rst_pin 0.19  # Alternative RST pin

#### `panel.busy_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/panels/UniversalAdapter.cpp:55`
* Valid values: Any valid pin identifier or `nc` (not connected)
  * Pin format: `port.pin`
  * No modifiers typically needed for busy pins
  * `nc` indicates no busy pin connected (default)
* Corresponding v1 setting: `panel.busy_pin`
* Corresponding v2 setting: none (v2 does not support Universal Adapter)
* Description: Specifies the busy pin used only with the Universal Adapter panel type. This pin can be connected to the adapter to query its busy status before sending commands. The firmware polls this pin before transmitting data to prevent buffer overruns when the adapter is processing previous commands or updating the display.
  * Only applicable to Universal Adapter panel type.
  * Not used by any other panel types (RRD GLCD, Viki2, ST7565, OLED).
  * Busy pin allows flow control between Smoothieboard and Universal Adapter.
  * When busy pin is high, adapter is processing and should not receive new commands.
  * If not connected, set to `nc` and firmware will not poll busy status.
* Related settings: `panel.lcd`
* Related pages: panel, panel-options
* Example configuration:
  * panel.busy_pin nc  # No busy pin (default for non-Universal Adapter)
  * panel.busy_pin 2.8  # Busy pin for Universal Adapter
  * panel.busy_pin 1.23  # Alternative busy pin

---

## Jogging Speeds

#### `panel.alpha_jog_feedrate`

* Type: `number`
* Default: `6000` (3000 in some code paths)
* Units: mm/min (millimeters per minute)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:169`
* Typical values: `3000` (50 mm/s, slow), `6000` (100 mm/s, standard), `9000` (150 mm/s, fast)
* Corresponding v1 setting: `panel.alpha_jog_feedrate`
* Corresponding v2 setting: none (v2 has different jogging configuration)
* Description: Specifies the X axis (alpha motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manually moving the X axis using the panel interface without running G-code files. The speed should be set slower than the axis maximum speed for safety and precise manual positioning.
  * Used only during manual jogging from panel menus, not during G-code execution.
  * Value is in mm/min (divide by 60 to get mm/s).
  * Default 6000 mm/min equals 100 mm/s.
  * Should be significantly slower than `alpha_max_rate` for safe manual control.
  * Slower speeds provide finer positioning control, faster speeds reduce positioning time.
* Related settings: `panel.beta_jog_feedrate`, `panel.gamma_jog_feedrate`, `alpha_max_rate`
* Related pages: panel, motion-control, endstops
* Example configuration:
  * panel.alpha_jog_feedrate 6000  # 100 mm/s (standard, default)
  * panel.alpha_jog_feedrate 3000  # 50 mm/s (precise control)
  * panel.alpha_jog_feedrate 9000  # 150 mm/s (fast positioning)

#### `panel.beta_jog_feedrate`

* Type: `number`
* Default: `6000` (3000 in some code paths)
* Units: mm/min (millimeters per minute)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:170`
* Typical values: `3000` (50 mm/s, slow), `6000` (100 mm/s, standard), `9000` (150 mm/s, fast)
* Corresponding v1 setting: `panel.beta_jog_feedrate`
* Corresponding v2 setting: none (v2 has different jogging configuration)
* Description: Specifies the Y axis (beta motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manually moving the Y axis using the panel interface without running G-code files. The speed should be set slower than the axis maximum speed for safety and precise manual positioning.
  * Used only during manual jogging from panel menus, not during G-code execution.
  * Value is in mm/min (divide by 60 to get mm/s).
  * Default 6000 mm/min equals 100 mm/s.
  * Should be significantly slower than `beta_max_rate` for safe manual control.
  * Typically set to same value as `alpha_jog_feedrate` for consistent XY jogging.
* Related settings: `panel.alpha_jog_feedrate`, `panel.gamma_jog_feedrate`, `beta_max_rate`
* Related pages: panel, motion-control, endstops
* Example configuration:
  * panel.beta_jog_feedrate 6000  # 100 mm/s (standard, default)
  * panel.beta_jog_feedrate 3000  # 50 mm/s (precise control)
  * panel.beta_jog_feedrate 9000  # 150 mm/s (fast positioning)

#### `panel.gamma_jog_feedrate`

* Type: `number`
* Default: `200` (300 in some code paths)
* Units: mm/min (millimeters per minute)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:171`
* Typical values: `200` (3.3 mm/s, standard), `300` (5 mm/s, faster), `600` (10 mm/s, fast printers)
* Corresponding v1 setting: `panel.gamma_jog_feedrate`
* Corresponding v2 setting: none (v2 has different jogging configuration)
* Description: Specifies the Z axis (gamma motor) jogging feedrate in millimeters per minute when using the panel's manual control menu. This speed is used when manually moving the Z axis using the panel interface without running G-code files. Typically set much slower than X/Y axes for safety and precision since Z-axis crashes can damage tooling and workpieces.
  * Used only during manual jogging from panel menus, not during G-code execution.
  * Value is in mm/min (divide by 60 to get mm/s).
  * Default 200 mm/min equals 3.3 mm/s (much slower than X/Y).
  * Z axis typically moves much slower than X/Y for safety and mechanical reasons.
  * Should be significantly slower than `gamma_max_rate` for safe manual control.
* Related settings: `panel.alpha_jog_feedrate`, `panel.beta_jog_feedrate`, `gamma_max_rate`
* Related pages: panel, motion-control, endstops
* Example configuration:
  * panel.gamma_jog_feedrate 200  # 3.3 mm/s (safe, default)
  * panel.gamma_jog_feedrate 300  # 5 mm/s (slightly faster)
  * panel.gamma_jog_feedrate 600  # 10 mm/s (fast for delta printers)

---

## Temperature Presets

#### `panel.hotend_temperature`

* Type: `number`
* Default: `185.0`
* Units: °C (degrees Celsius)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:174`
* Typical values: `185` (PLA), `210` (PLA high temp), `230` (ABS), `240` (PETG)
* Corresponding v1 setting: `panel.hotend_temperature`
* Corresponding v2 setting: none (v2 has different panel temperature preset configuration)
* Description: Specifies the temperature preset in degrees Celsius to set the hotend to when using the pre-heating menu item on the panel. This provides a quick-access one-button preset for heating the hotend to a commonly used temperature without manually entering values. The temperature should match your most commonly used filament type.
  * Default 185°C is suitable for standard PLA filament.
  * This is a convenience preset, not a temperature limit or safety setting.
  * Can be temporarily overridden using M104 commands or panel temperature screens.
  * Different filament types require different temperatures (PLA: 180-220°C, ABS: 220-250°C, PETG: 230-250°C).
  * Pre-heating allows starting heatup before loading a print file.
* Related settings: `panel.bed_temperature`, `temperature_control.hotend.max_temp`
* Related pages: panel, temperaturecontrol, extruder
* Example configuration:
  * panel.hotend_temperature 185  # PLA preset (default)
  * panel.hotend_temperature 230  # ABS preset
  * panel.hotend_temperature 240  # PETG preset

#### `panel.bed_temperature`

* Type: `number`
* Default: `60.0`
* Units: °C (degrees Celsius)
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:175`
* Typical values: `60` (PLA), `80` (PETG), `100` (ABS), `110` (ABS high adhesion)
* Corresponding v1 setting: `panel.bed_temperature`
* Corresponding v2 setting: none (v2 has different panel temperature preset configuration)
* Description: Specifies the temperature preset in degrees Celsius to set the heated bed to when using the pre-heating menu item on the panel. This provides a quick-access one-button preset for heating the bed to a commonly used temperature without manually entering values. The temperature should match your most commonly used filament type.
  * Default 60°C is suitable for standard PLA filament.
  * This is a convenience preset, not a temperature limit or safety setting.
  * Can be temporarily overridden using M140 commands or panel temperature screens.
  * Different filament types require different bed temperatures (PLA: 50-70°C, ABS: 90-110°C, PETG: 70-90°C).
  * Pre-heating allows starting bed warmup before loading a print file to reduce total warmup time.
* Related settings: `panel.hotend_temperature`, `temperature_control.bed.max_temp`
* Related pages: panel, temperaturecontrol
* Example configuration:
  * panel.bed_temperature 60  # PLA preset (default)
  * panel.bed_temperature 100  # ABS preset
  * panel.bed_temperature 80  # PETG preset

---

## External SD Card Settings

#### `panel.external_sd`

* Type: `bool`
* Default: `false`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:141`
* Valid values: `true`, `false`
* Corresponding v1 setting: `panel.external_sd`
* Corresponding v2 setting: none (v2 has different external SD card configuration)
* Description: When set to true, enables support for an external SD card slot on the panel or a second SD card slot connected to one of Smoothieboard's SPI ports. The external SD card is mounted at `/ext` in the filesystem and can be accessed through the panel file browser. This allows file storage separate from the main Smoothieboard SD card, useful for quick file transfer or additional storage capacity.
  * External SD card requires dedicated SPI channel and CS pin configuration.
  * Mounted automatically at `/ext` directory when card is inserted (if sdcd_pin configured).
  * Panel file browser can navigate both internal SD (`/sd`) and external SD (`/ext`).
  * Useful for transferring files without removing main SD card.
  * Card detect pin (sdcd_pin) enables automatic mount/unmount on card insertion/removal.
* Related settings: `panel.external_sd.spi_channel`, `panel.external_sd.spi_cs_pin`, `panel.external_sd.sdcd_pin`
* Related pages: panel, sd-card
* Example configuration:
  * panel.external_sd true  # Enable external SD card slot
  * panel.external_sd false  # No external SD (default)

#### `panel.external_sd.spi_channel`

* Type: `number`
* Default: `0`
* Module: `panel`
* Context: External SD subsetting
* Defined in: `src/modules/utils/panel/Panel.cpp:145`
* Valid values: `0`, `1`
  * `0` - SPI channel 0 (pins P0_18 MOSI, P0_17 MISO, P0_15 SCLK)
  * `1` - SPI channel 1 (pins P0_9 MOSI, P0_8 MISO, P0_7 SCLK)
* Corresponding v1 setting: `panel.external_sd.spi_channel`
* Corresponding v2 setting: none (v2 has different SPI configuration)
* Description: Selects which SPI channel to use for the external SD card. The external SD card can share the same SPI channel as the panel if they use different CS pins, or can use a separate SPI channel if interference or timing issues occur. Channel selection determines which physical pins are used for SPI communication with the external SD card.
  * Can share SPI channel with panel (channel 0) using different CS pins.
  * Using separate SPI channel (channel 1) avoids any potential SPI timing conflicts.
  * External SD card and panel both support SPI sharing with proper CS pin configuration.
  * If panel and external SD share channel, they must have unique CS pins.
* Related settings: `panel.spi_channel`, `panel.external_sd.spi_cs_pin`
* Related pages: panel, pinout, sd-card
* Example configuration:
  * panel.external_sd.spi_channel 0  # Share with panel (common)
  * panel.external_sd.spi_channel 1  # Separate SPI channel

#### `panel.external_sd.spi_cs_pin`

* Type: `pin`
* Default: `2.8`
* Module: `panel`
* Context: External SD subsetting
* Defined in: `src/modules/utils/panel/Panel.cpp:146`
* Valid values: Any valid pin identifier
  * Pin format: `port.pin` (e.g., `2.8` means port 2, pin 8)
  * Must be different from panel SPI CS pin if sharing same SPI channel
* Corresponding v1 setting: `panel.external_sd.spi_cs_pin`
* Corresponding v2 setting: none (v2 uses different pin notation)
* Description: Specifies the CS (Chip Select) pin for the external SD card. This pin selects the external SD card device on the SPI bus. The CS pin allows the external SD card and panel to share the same SPI channel by ensuring only one device responds at a time. Each device on a shared SPI bus must have a unique CS pin.
  * Default pin 2.8 is typical for Smoothieboard external SD card connections.
  * CRITICAL: Must be different from `panel.spi_cs_pin` if both use same SPI channel.
  * CS pin activates (low) to select SD card, deactivates (high) to release bus.
  * Choose an available GPIO pin that is not used by other functions.
* Related settings: `panel.spi_cs_pin`, `panel.external_sd.spi_channel`
* Related pages: panel, pinout, sd-card
* Example configuration:
  * panel.external_sd.spi_cs_pin 2.8  # Standard external SD CS pin (default)
  * panel.external_sd.spi_cs_pin 1.23  # Alternative CS pin
  * panel.external_sd.spi_cs_pin 0.6  # Another alternative

#### `panel.external_sd.sdcd_pin`

* Type: `pin`
* Default: `nc`
* Module: `panel`
* Context: External SD subsetting
* Defined in: `src/modules/utils/panel/Panel.cpp:144`
* Valid values: Any valid pin identifier with optional modifiers (`!` for inverted, `^` for pull-up) or `nc` (not connected)
  * Pin format: `port.pin` (e.g., `2.13` means port 2, pin 13)
  * Add `!` suffix to invert signal if card detect is active low
  * Add `^` suffix to enable internal pull-up resistor
  * Combining modifiers: `2.13!^` for inverted with pull-up
  * `nc` disables automatic card detection (manual mount only)
* Corresponding v1 setting: `panel.external_sd.sdcd_pin`
* Corresponding v2 setting: none (v2 uses different pin notation and card detection)
* Description: Specifies the SD card detect signal pin for the external SD card slot. When connected, the system automatically mounts the SD card at `/ext` when the card is inserted and unmounts it when the card is removed. This provides convenient hot-swap capability without manual mount/unmount commands.
  * Set to `nc` if SD card slot does not have a detect pin or if manual mounting is preferred.
  * Card detect switches are typically active low (require `!` modifier).
  * Pull-up resistor (`^`) is usually required for reliable card detection.
  * When card is detected, system automatically runs mount sequence and switches panel to `/ext` directory.
  * Removing card while in use may cause file system errors; use panel to ensure files are closed first.
* Related settings: `panel.external_sd`, `panel.external_sd.spi_cs_pin`
* Related pages: panel, sd-card
* Example configuration:
  * panel.external_sd.sdcd_pin 2.13!^  # Active-low detect with pull-up (common)
  * panel.external_sd.sdcd_pin 1.24^  # Active-high detect with pull-up
  * panel.external_sd.sdcd_pin nc  # No automatic detection (default)

---

## Display Options

#### `panel.display_extruder`

* Type: `bool`
* Default: `false`
* Module: `panel`
* Context: Global module setting
* Defined in: `src/modules/utils/panel/Panel.cpp:202`
* Valid values: `true`, `false`
* Corresponding v1 setting: `panel.display_extruder`
* Corresponding v2 setting: none (v2 has different display configuration)
* Description: When set to true, the watch screen (main status screen) displays extruder position and temperature information in addition to bed and hotend temperatures. When false, only bed and hotend temperatures are shown to reduce screen clutter. This setting is useful for multi-extruder setups where tracking extruder position is important.
  * Default false shows only temperatures (simpler display for single extruder).
  * Setting to true adds E-axis position display (useful for monitoring extrusion).
  * On small displays (128x64), enabling this may make information harder to read due to crowding.
  * Multi-extruder setups benefit from extruder position display for troubleshooting.
  * Does not affect other screens or menus, only the main watch screen.
* Related pages: panel, extruder, temperaturecontrol
* Example configuration:
  * panel.display_extruder false  # Show only temperatures (default)
  * panel.display_extruder true  # Show extruder position and temperatures

---

## Custom Menu Entries

Custom menus allow you to add user-defined menu items to the panel interface. Each custom menu requires three settings with a unique name.

#### `custom_menu.<menu_name>.enable`

* Type: `bool`
* Default: N/A (must be explicitly set)
* Module: `panel` (custom menu subsystem)
* Context: Per custom menu instance setting
* Defined in: `src/modules/utils/panel/screens/CustomScreen.cpp:34`
* Valid values: `true`, `false`
* Corresponding v1 setting: `custom_menu.<menu_name>.enable`
* Corresponding v2 setting: none (v2 does not have custom menu functionality documented)
* Description: When set to true, creates a new custom menu entry for the panel with the identifier `<menu_name>`. You can create any number of custom menu entries as long as they have different names. Each custom menu entry provides a way to execute pre-configured G-code commands directly from the panel without creating a file or using console commands.
  * NOTE: `<menu_name>` is case-sensitive and must match across all three custom menu settings.
  * Custom menus appear in the panel's main menu under "Custom" or similar section.
  * Useful for frequently-used command sequences (homing, preheating, calibration routines).
  * Each custom menu entry requires three settings: enable, name, and command.
  * Maximum number of custom menus is limited by available memory (typically 10-20).
* Related settings: `custom_menu.<menu_name>.name`, `custom_menu.<menu_name>.command`
* Related pages: panel, panel-options, supported-g-codes
* Example configuration:
  * custom_menu.power_on.enable true  # Enable custom menu named "power_on"
  * custom_menu.preheat_abs.enable true  # Enable custom menu named "preheat_abs"
  * custom_menu.home_all.enable false  # Disable this custom menu

#### `custom_menu.<menu_name>.name`

* Type: `string`
* Default: N/A (must be explicitly set)
* Module: `panel` (custom menu subsystem)
* Context: Per custom menu instance setting
* Defined in: `src/modules/utils/panel/screens/CustomScreen.cpp:36-37`
* Valid values: Any string (use underscores instead of spaces, keep short for display)
  * Underscores (`_`) are automatically converted to spaces for display
  * Maximum recommended length: 20 characters (fits on 128x64 displays)
  * Avoid special characters that may not render on display
* Corresponding v1 setting: `custom_menu.<menu_name>.name`
* Corresponding v2 setting: none (v2 does not have custom menu functionality documented)
* Description: Specifies the display name that will appear in the panel's menus for this custom menu entry. Underscores (`_`) in the name are automatically converted to spaces when displayed on screen. Names should be kept short (20 characters maximum) to fit properly on small LCD displays without truncation.
  * Use underscores (`_`) instead of spaces in configuration (e.g., `Power_On_Home`).
  * Display converts underscores to spaces (appears as "Power On Home" on screen).
  * Keep names descriptive but concise (20 characters or less).
  * Avoid special characters or symbols that may not display correctly.
  * Name should clearly describe the action that will be executed.
* Related settings: `custom_menu.<menu_name>.enable`, `custom_menu.<menu_name>.command`
* Related pages: panel, panel-options
* Example configuration:
  * custom_menu.power_on.name Power_On  # Displays as "Power On"
  * custom_menu.preheat_abs.name Preheat_ABS  # Displays as "Preheat ABS"
  * custom_menu.home_all.name Home_All_Axes  # Displays as "Home All Axes"

#### `custom_menu.<menu_name>.command`

* Type: `string`
* Default: N/A (must be explicitly set)
* Module: `panel` (custom menu subsystem)
* Context: Per custom menu instance setting
* Defined in: `src/modules/utils/panel/screens/CustomScreen.cpp:40-42`
* Valid values: Any valid G-code command or sequence
  * Single command: `G28` (home all axes)
  * Multiple commands: Use pipe (`|`) separator: `M80|G28|G1_X100`
  * Use underscores (`_`) instead of spaces: `G1_X10_Y20` becomes `G1 X10 Y20`
  * All standard G-codes and M-codes are supported
* Corresponding v1 setting: `custom_menu.<menu_name>.command`
* Corresponding v2 setting: none (v2 does not have custom menu functionality documented)
* Description: Specifies the G-code command or command sequence that will be executed when the custom menu entry is selected and clicked on the panel. Underscores (`_`) are converted to spaces, and the pipe character (`|`) is used to separate multiple commands that should be executed in sequence.
  * Underscore (`_`) substitutes for space in commands and parameters (required).
  * Pipe (`|`) separates multiple commands for sequential execution.
  * Commands execute in order from left to right.
  * Example: `M80_S30|G1_X10` becomes `M80 S30` then `G1 X10`.
  * All G-codes and M-codes supported by Smoothie can be used.
  * Complex command sequences can automate common workflows.
* Related settings: `custom_menu.<menu_name>.enable`, `custom_menu.<menu_name>.name`
* Related pages: panel, supported-g-codes, console-commands
* Example configuration:
  * custom_menu.power_on.command M80_S30|G1_X10  # Power on, wait 30s, move X to 10
  * custom_menu.preheat_abs.command M104_S230|M140_S100  # Set hotend 230°C and bed 100°C
  * custom_menu.home_all.command G28  # Home all axes

**Complete Custom Menu Example:**
```
# Custom menu to power on and home all axes
custom_menu.power_on.enable true
custom_menu.power_on.name Power_On_Home
custom_menu.power_on.command M80|G28

# Custom menu to preheat for ABS printing
custom_menu.preheat_abs.enable true
custom_menu.preheat_abs.name Preheat_ABS
custom_menu.preheat_abs.command M104_S230|M140_S100

# Custom menu to move to parking position
custom_menu.park.enable true
custom_menu.park.name Park_Position
custom_menu.park.command G28|G1_X0_Y200_Z100_F6000
```

---

## Panel Type Compatibility Matrix

| Setting | RRD GLCD | ST7565 | SSD1306 | SH1106 | Viki2 | Mini Viki2 | Universal |
|---------|----------|--------|---------|--------|-------|------------|-----------|
| `spi_channel` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `spi_cs_pin` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `spi_frequency` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `encoder_a_pin` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `encoder_b_pin` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `click_button_pin` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `up_button_pin` | - | ✓ | - | - | - | - | - |
| `down_button_pin` | - | ✓ | - | - | - | - | - |
| `back_button_pin` | ✓ | - | - | - | ✓* | - | - |
| `pause_button_pin` | ✓ | - | - | - | ✓* | - | - |
| `buzz_pin` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `contrast` | - | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `reverse` | - | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `a0_pin` | - | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| `rst_pin` | - | ✓ | ✓ | ✓ | - | - | - |
| `red_led_pin` | - | - | - | - | ✓ | - | - |
| `blue_led_pin` | - | - | - | - | ✓ | - | - |
| `busy_pin` | - | - | - | - | - | - | ✓ |

**Note:** ✓* = Viki2 can use either `back_button_pin` OR `pause_button_pin`, but not both

---

## Pin Modifiers Reference

Panel configuration supports pin modifiers that affect signal behavior:

* `!` - Inverts the pin signal (active low)
  * Use for buttons that connect pin to ground when pressed
  * Use for signals that are inverted relative to expected polarity
* `^` - Enables internal pull-up resistor (20-50kΩ typical)
  * Recommended for encoder pins to prevent floating inputs
  * Required for buttons unless external pull-up resistor provided
  * For encoder pins, also affects menu move direction (inverted from default)
* Combining modifiers: `3.25!^`
  * Both inversion and pull-up enabled
  * Order doesn't matter (`3.25!^` same as `3.25^!`)

---

## SPI Channel Pin Assignments

The Smoothieboard provides two SPI channels with different pin assignments:

**Channel 0 (default):**
* MOSI (Master Out Slave In): P0_18
* MISO (Master In Slave Out): P0_17
* SCLK (Serial Clock): P0_15
* CS (Chip Select): User configurable

**Channel 1 (alternate):**
* MOSI (Master Out Slave In): P0_9
* MISO (Master In Slave Out): P0_8
* SCLK (Serial Clock): P0_7
* CS (Chip Select): User configurable

---

*Panel module documentation refined according to v2.0 specification - All 36 settings documented with comprehensive source code verification and cross-version correspondence*

---

## Network

# Network Module - Smoothieware v1 Configuration Reference

## Overview

The Network module provides Ethernet connectivity for Smoothieware v1, enabling remote control and file management through multiple network services including web server, telnet, Plan9 filesystem, and SFTP. The module uses the lightweight uIP TCP/IP stack optimized for embedded systems.

---

## Configuration Settings

### Core Network Settings

#### `network.enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:126`
* Valid values: `true`, `false`
  * `true` - Enable network module and initialize Ethernet hardware
  * `false` - Disable network module (module deletes itself to free resources)
* Corresponding v1 setting: `network.enable`
* Corresponding v2 setting: `network.enable`
* Description: Master enable switch for the entire Ethernet network functionality. When disabled, the network module is completely unloaded to free system resources (approximately 8KB RAM). Must be set to true to use any network features including webserver, telnet, Plan9, or SFTP services.
  * When disabled, the module deletes itself during initialization to maximize available memory.
  * When enabled, initializes the uIP TCP/IP stack and LPC17XX Ethernet hardware driver.
  * All other network.* settings have no effect if this is false.
* Related settings: `network.webserver.enable`, `network.telnet.enable`, `network.plan9.enable`
* Related pages: network, connecting-smoothie, webserver, telnet
* Example configuration:
  * network.enable true  # Enable Ethernet networking
  * network.enable false  # Disable network to free ~8KB RAM

#### `network.ip_address`

* Type: `string`
* Default: `auto`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:156`
* Valid values: `auto` or IPv4 address in dotted decimal notation
  * `auto` - Use DHCP to automatically obtain IP address, netmask, gateway, and DNS
  * `xxx.xxx.xxx.xxx` - Static IP address (e.g., `192.168.1.100`)
  * Each octet must be 0-255
  * Format validated by parse_ip_str() function with period separators
* Corresponding v1 setting: `network.ip_address`
* Corresponding v2 setting: `network.ip_address`
* Description: Configures the IP address assignment method for the Smoothieboard. Can use DHCP for automatic configuration or specify a static IP address. When using "auto", the board will request network settings from a DHCP server. When set to a specific IP address, static configuration is used and both network.ip_mask and network.ip_gateway must also be configured.
  * Parsed using parse_ip_str() function which validates dotted decimal format (lines 88-104).
  * When "auto": triggers DHCP client initialization (requires UIP_CONF_UDP enabled).
  * When static: IP is converted to 4-byte array and passed to uIP stack via uip_sethostaddr().
  * Invalid format displays "Invalid IP address: [value]" error and prevents network initialization.
  * DHCP mode displays "Getting IP address...." message on startup.
  * Static mode displays configured IP address immediately.
* Related settings: `network.ip_mask`, `network.ip_gateway`, `network.hostname`
* Related pages: network, connecting-smoothie, network-options
* Example configuration:
  * network.ip_address auto  # DHCP automatic configuration (recommended)
  * network.ip_address 192.168.1.100  # Static IP for home network
  * network.ip_address 10.0.50.100  # Static IP for industrial network

#### `network.ip_mask`

* Type: `string`
* Default: `255.255.255.0`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:175`
* Typical values: `255.255.255.0` (Class C, /24 network, 254 hosts), `255.255.255.128` (/25 network, 126 hosts), `255.255.0.0` (Class B, /16 network)
* Valid values: IPv4 subnet mask in dotted decimal notation
  * Format: `xxx.xxx.xxx.xxx` with each octet 0-255
  * Must be a valid subnet mask (contiguous 1s followed by contiguous 0s in binary)
  * Common values: `255.255.255.0` (Class C), `255.255.0.0` (Class B), `255.255.255.128` (/25)
* Corresponding v1 setting: `network.ip_mask`
* Corresponding v2 setting: `network.ip_mask`
* Description: Defines the subnet mask for static IP configuration. The netmask determines which portion of the IP address identifies the network and which portion identifies the host. Only used when network.ip_address is set to a static IP (not "auto"). When using DHCP, this setting is ignored and the subnet mask is provided automatically by the DHCP server.
  * Ignored when DHCP is enabled (network.ip_address = "auto").
  * Parsed using parse_ip_str() with 4-octet validation (line 176).
  * Passed to uIP stack via uip_setnetmask() (line 375).
  * Invalid format displays "Invalid IP Mask: [value]" error and prevents network initialization.
  * The gateway address must be within the network defined by IP address + netmask.
* Related settings: `network.ip_address`, `network.ip_gateway`
* Related pages: network, connecting-smoothie, network-options
* Example configuration:
  * network.ip_mask 255.255.255.0  # Standard Class C network (254 hosts)
  * network.ip_mask 255.255.255.128  # Smaller subnet (126 hosts, /25)
  * network.ip_mask 255.255.0.0  # Large Class B network (65534 hosts)

#### `network.ip_gateway`

* Type: `string`
* Default: `192.168.1.254`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:180`
* Typical values: `192.168.1.1` (typical home router), `10.0.0.1` (common corporate gateway), `192.168.0.1` (alternate home default)
* Valid values: IPv4 address in dotted decimal notation
  * Format: `xxx.xxx.xxx.xxx` with each octet 0-255
  * Should be on the same network as defined by network.ip_address and network.ip_mask
  * Typically the IP address of a router or network gateway device
* Corresponding v1 setting: `network.ip_gateway`
* Corresponding v2 setting: `network.ip_gateway`
* Description: Specifies the default gateway (router) IP address for static IP configuration. The gateway is used for routing traffic outside the local network. Only used when network.ip_address is set to a static IP (not "auto"). With DHCP, the gateway is provided automatically by the DHCP server along with other network configuration.
  * Ignored when DHCP is enabled (network.ip_address = "auto").
  * Parsed using parse_ip_str() with 4-octet validation (line 181).
  * Passed to uIP stack via uip_setdraddr() (default router address) at line 371.
  * Invalid format displays "Invalid IP gateway: [value]" error and prevents network initialization.
  * Gateway should be reachable on the local network segment defined by IP + mask.
  * Used by uIP for routing packets to destinations outside the local subnet.
* Related settings: `network.ip_address`, `network.ip_mask`
* Related pages: network, connecting-smoothie, network-options
* Example configuration:
  * network.ip_gateway 192.168.1.1  # Typical home/office router
  * network.ip_gateway 10.0.50.254  # Industrial network gateway
  * network.ip_gateway 192.168.0.1  # Alternative home router default

#### `network.mac_override`

* Type: `string`
* Default: `""` (empty - use auto-generated MAC)
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:135-151`
* Valid values: Empty string or MAC address in colon-separated hexadecimal format
  * `""` (empty) - Use auto-generated MAC address based on CPU serial number (recommended)
  * `xx:xx:xx:xx:xx:xx` - Custom MAC address
  * Must be exactly 17 characters (6 hex pairs + 5 colons)
  * Each pair is hexadecimal byte (00-FF)
  * Example: `00:1F:11:02:04:A5`
  * First octet should typically be even (unicast, not multicast)
* Corresponding v1 setting: `network.mac_override`
* Corresponding v2 setting: none (v2 uses different MAC generation method)
* Description: Allows manual override of the Ethernet MAC (Media Access Control) address. By default, Smoothieboard auto-generates a unique MAC address based on the CPU's serial number using a cryptographic hash. Only set this if you experience MAC address conflicts on your network or need to preserve a specific MAC address after hardware replacement.
  * Auto-generated MAC format: `00:1F:11:02:04:xx`
  * `00:1F:11` - OUI (Organizationally Unique Identifier) for Openmoko
  * `02` - Openmoko allocation for Smoothieboard
  * `04` - Fixed identifier
  * Last byte derived from CRC32 hash of CPU serial number (unique per board, lines 72-86)
  * Custom MAC parsed using parse_ip_str() with base-16 and ':' separator (line 137)
  * MAC address set via ethernet->set_mac() and uip_setethaddr() (lines 153, 362)
  * Invalid format displays "Invalid MAC address: [value]" error and prevents network initialization
  * WARNING: Each device on a network must have a unique MAC address. Using duplicate MAC addresses causes network conflicts and connectivity issues.
* Related pages: network, connecting-smoothie, troubleshooting
* Example configuration:
  * # Use auto-generated MAC (recommended - leave blank or omit)
  * network.mac_override  # Blank = auto-generate from CPU serial
  * network.mac_override 00:1F:11:02:04:A5  # Override if needed for conflict resolution

#### `network.hostname`

* Type: `string`
* Default: none (empty)
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:159-167`
* Typical values: `smoothie` (generic), `cnc-mill` (descriptive), `laser-cutter` (descriptive), `printer3d` (no spaces or special chars)
* Valid values: RFC 952/1123 compliant hostname string or empty
  * Empty string - No hostname sent to DHCP server
  * Maximum 63 characters
  * Must start with a letter (a-z, A-Z)
  * May contain letters, digits (0-9), and hyphens (-)
  * Cannot start or end with a hyphen
  * Cannot start with a digit
  * Case-insensitive (typically lowercased by DNS)
  * Examples: `smoothie`, `cnc-mill`, `MyLaser`, `Shapeoko17`
* Corresponding v1 setting: `network.hostname`
* Corresponding v2 setting: `network.hostname`
* Description: Sets a hostname that is sent to the DHCP server during IP address requests. Some DHCP servers register this hostname in local DNS, allowing you to access the Smoothieboard by name (e.g., "http://smoothie-cnc/") instead of IP address. Only used when network.ip_address is set to "auto" (DHCP mode). Has no effect with static IP configuration.
  * Only processed when DHCP is enabled (network.ip_address = "auto")
  * Validated using parse_hostname() function against RFC standards (lines 106-122)
  * Passed to DHCP client via dhcpc_init(mac_address, sizeof(mac_address), hostname) at line 381
  * Invalid hostname displays "Invalid hostname: [value]" warning but doesn't prevent network initialization (line 165)
  * Hostname support depends on DHCP server capabilities - not all routers support hostname registration in local DNS
  * Allows access by name if DHCP/DNS server supports it: http://hostname/ instead of http://192.168.1.100/
* Related settings: `network.ip_address`
* Related pages: network, connecting-smoothie, webserver
* Example configuration:
  * network.ip_address auto  # Must use DHCP for hostname
  * network.hostname smoothie-cnc  # Accessible as http://smoothie-cnc/
  * network.hostname Shapeoko17  # Mixed case allowed
  * network.hostname laser-cutter  # Hyphens allowed in middle

---

### Network Services Settings

#### `network.webserver.enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:132,297-300`
* Valid values: `true`, `false`
  * `true` - Enable HTTP web server on port 80
  * `false` - Disable web server (saves approximately 2-4KB RAM per connection)
* Corresponding v1 setting: `network.webserver.enable`
* Corresponding v2 setting: `network.webserver_enable`
* Description: Enables the built-in HTTP web server on port 80. The web server provides a browser-based control interface for sending commands, monitoring status, uploading G-code files, and managing the SD card filesystem. Requires network.enable to be true to function. The web interface must be separately installed on the SD card.
  * Initializes HTTP daemon via httpd_init() when enabled (line 299)
  * Listens on TCP port 80 (standard HTTP)
  * Routed through app_select_appcall() multiplexer (lines 409-410)
  * Provides web-based UI for machine control and file management
  * Uses uIP TCP/IP stack for HTTP protocol handling
  * Only initialized after network is fully configured (DHCP complete or static IP set)
  * Web interface files must be installed separately on SD card in /www directory
  * Access via browser: http://[ip-address]/ or http://[hostname]/
* Related M-Codes:
  * M22 - Remount SD card (useful after uploading files via web)
  * M20 - List files on SD card (accessible via web terminal)
* Related settings: `network.enable`, `network.ip_address`
* Related pages: network, webserver, install-web-interface, connecting-smoothie
* Example configuration:
  * network.enable true
  * network.ip_address auto
  * network.webserver.enable true  # Enable web interface on port 80

#### `network.telnet.enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:133,303-307`
* Valid values: `true`, `false`
  * `true` - Enable telnet server on port 23
  * `false` - Disable telnet server (saves approximately 1-2KB RAM per connection)
* Corresponding v1 setting: `network.telnet.enable`
* Corresponding v2 setting: `network.shell_enable`
* Description: Enables the telnet server on port 23. The telnet service provides a network-based command-line interface that behaves identically to the USB serial console. Allows remote G-code execution and configuration commands over the network. Requires network.enable to be true to function. Multiple concurrent connections are supported up to the UIP_CONNS limit.
  * Initializes telnet daemon via Telnetd::init() when enabled (line 305)
  * Listens on TCP port 23 (standard telnet)
  * Routed through app_select_appcall() to Telnetd::appcall() (lines 413-414)
  * Provides full command-line access identical to USB serial console
  * Supports concurrent connections up to UIP_CONNS limit (typically 4-8)
  * Only initialized after network is fully configured
  * Commands queue through CommandQueue same as USB serial
  * WARNING: Telnet is unencrypted - only use on trusted local networks
* Related settings: `network.enable`, `network.ip_address`
* Related pages: network, connecting-smoothie, console-commands, uart
* Example configuration:
  * network.enable true
  * network.ip_address 192.168.1.100
  * network.ip_mask 255.255.255.0
  * network.ip_gateway 192.168.1.1
  * network.telnet.enable true  # Enable telnet on port 23

#### `network.plan9.enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Global setting
* Defined in: `libs/Network/uip/Network.cpp:134,309-315`
* Valid values: `true`, `false`
  * `true` - Enable Plan9 filesystem server on port 564
  * `false` - Disable Plan9 server (saves approximately 2-4KB RAM)
* Corresponding v1 setting: `network.plan9.enable`
* Corresponding v2 setting: none (Plan9 support removed in v2)
* Description: Enables the Plan9 network filesystem server on port 564. Plan9 (9P protocol) allows mounting the Smoothieboard's SD card filesystem directly on your computer's operating system, making it appear as a local drive. This provides convenient file access for uploading G-code and managing files. Requires network.enable to be true to function. Less commonly used than webserver or telnet.
  * Initializes Plan9 server via Plan9::init() when enabled (line 312)
  * Listens on TCP port 564 (standard 9P protocol port)
  * Routed through app_select_appcall() to Plan9::appcall() (lines 418-419)
  * Can be disabled at compile time with NOPLAN9 flag
  * Provides filesystem mount capability for direct file access
  * Only initialized after network is fully configured
  * Exports entire SD card filesystem over network
  * Mount on Linux: mount -t 9p -o trans=tcp,port=564 [ip-address] /mnt/smoothie
  * Mount on macOS: Use 9pfuse or similar 9P client
  * Mount on Windows: Use plan9port or third-party 9P client
* Related settings: `network.enable`, `network.ip_address`
* Related pages: network, connecting-smoothie, sd-card
* Example configuration:
  * network.enable true
  * network.ip_address auto
  * plan9.enable true  # Enable Plan9 filesystem on port 564

---

## Network Services Always Enabled

### SFTP Service (Port 115)

The SFTP service on port 115 is always enabled when network.enable is true and cannot be disabled via configuration. This service is lazily initialized on first connection to conserve resources.

**Implementation Details:**
* Listens on TCP port 115 (SFTP protocol, not SSH-based SFTP)
* Created automatically on first packet received (lines 424-428)
* Provides file transfer capabilities
* No separate enable setting required or available
* Uses approximately 4-8KB RAM when active
* Defined in source: libs/Network/uip/Network.cpp:318,423-429

---

## Complete Configuration Examples

### Example 1: DHCP with Web Interface Only
```
network.enable           true
network.ip_address       auto
network.hostname         smoothie-laser
webserver.enable         true
telnet.enable            false
plan9.enable             false
```

### Example 2: Static IP with All Services
```
network.enable           true
network.ip_address       192.168.1.100
network.ip_mask          255.255.255.0
network.ip_gateway       192.168.1.1
webserver.enable         true
telnet.enable            true
plan9.enable             true
```

### Example 3: Static IP with Custom MAC
```
network.enable           true
network.ip_address       10.0.50.100
network.ip_mask          255.255.255.0
network.ip_gateway       10.0.50.1
network.mac_override     00:1F:11:02:04:A5
webserver.enable         true
telnet.enable            true
plan9.enable             false
```

### Example 4: DHCP with Minimal Services (Telnet Only)
```
network.enable           true
network.ip_address       auto
network.hostname         cnc-mill
webserver.enable         false
telnet.enable            true
plan9.enable             false
```

---

## Troubleshooting

### Network Won't Start

Check console output for error messages:
* "Invalid IP address: [value]" - Check network.ip_address format (xxx.xxx.xxx.xxx)
* "Invalid IP Mask: [value]" - Check network.ip_mask format
* "Invalid IP gateway: [value]" - Check network.ip_gateway format
* "Invalid MAC address: [value]" - Check network.mac_override format (xx:xx:xx:xx:xx:xx with hex)
* "Invalid hostname: [value]" - Check hostname follows RFC rules (warning only)
* "Network not started due to errors in config" - One or more settings are malformed

### Cannot Access Web Interface

1. Verify network.enable is true
2. Verify webserver.enable is true
3. Check IP address assignment:
   - DHCP: Check console for "Got IP address" message
   - Static: Verify IP, mask, gateway are correct for your network
4. Verify web interface files are installed on SD card in /www directory
5. Test connectivity: ping the IP address from your computer
6. Ensure firewall isn't blocking port 80

### Telnet Connection Fails

1. Verify network.enable is true
2. Verify telnet.enable is true
3. Test basic connectivity: ping the IP address
4. Verify telnet client is connecting to port 23
5. Check that you're not hitting concurrent connection limit (UIP_CONNS, typically 4-8)
6. Try different telnet client (PuTTY, screen, telnet command)

### DHCP Not Working

1. Verify network.ip_address is set to "auto"
2. Check console for DHCP messages: "Getting IP address...."
3. Verify DHCP server is running on your network
4. Check Ethernet cable connection
5. Try different hostname or remove hostname setting
6. Verify switch/router port is working (test with another device)
7. Wait 30-60 seconds for DHCP negotiation to complete

### MAC Address Conflict

If you see duplicate MAC address warnings on your network:
1. Check if multiple Smoothieboards are using default MAC generation
2. Set unique MAC addresses using network.mac_override on each board
3. Use online MAC address generator or choose sequential addresses
4. Ensure first octet is even number (for unicast, not multicast)
5. Document MAC assignments for future reference

---

## Technical Notes

### uIP TCP/IP Stack

Smoothieboard uses the lightweight uIP (micro IP) TCP/IP stack, which is optimized for embedded systems with limited resources. This affects:
* Maximum concurrent connections (UIP_CONNS, typically 4-8)
* Buffer sizes and memory usage (smaller than full TCP/IP stacks)
* Protocol features available (subset of full TCP/IP)
* Performance characteristics (optimized for low RAM usage)

### Network Services Initialization Order

1. Network module initialization (network.enable checked)
2. Ethernet hardware setup (MAC address generation or override)
3. IP configuration (DHCP request or static assignment)
4. uIP TCP/IP stack initialization
5. Service initialization (webserver, telnet, plan9) - only after network is up
6. SFTP lazy initialization (on first connection to port 115)

### Resource Usage

Each enabled service consumes memory and processing time:
* Base network module: ~8KB RAM (uIP stack + Ethernet driver)
* Web server: ~2-4KB RAM per connection
* Telnet: ~1-2KB RAM per connection
* Plan9: ~2-4KB RAM when active
* SFTP: ~4-8KB RAM when active

Disable unused services to free resources for other functions like additional modules or larger planner queue.

### Network Performance

* The network module runs on slow_ticker at 100ms intervals (line 192)
* Packet processing occurs during ON_IDLE events (lines 234-293)
* Network commands queue through CommandQueue (same as USB serial)
* Large file transfers may impact real-time motion control
* Consider using SD card for large G-code files rather than streaming over network
* Maximum throughput limited by uIP stack and 100ms polling interval

### PIN Requirements

Network functionality requires specific hardware pins on the LPC1769:
* Ethernet PHY pins (ENET_TXD0, ENET_TXD1, ENET_RXD0, ENET_RXD1, etc.)
* These pins are hardwired on Smoothieboard and not user-configurable
* No configuration settings exist for pin mapping (hardware-defined)

---

## Summary Table

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| network.enable | bool | false | Master enable for network module |
| network.ip_address | string | "auto" | DHCP ("auto") or static IP (xxx.xxx.xxx.xxx) |
| network.ip_mask | string | "255.255.255.0" | Subnet mask for static IP configuration |
| network.ip_gateway | string | "192.168.1.254" | Default gateway for static IP configuration |
| network.mac_override | string | "" | Override MAC address (xx:xx:xx:xx:xx:xx) |
| network.hostname | string | "" | Hostname for DHCP registration and DNS |
| webserver.enable | bool | false | Enable HTTP web server on port 80 |
| telnet.enable | bool | false | Enable telnet server on port 23 |
| plan9.enable | bool | false | Enable Plan9 filesystem server on port 564 |

**Total Settings:** 9 network-related configuration options

**SFTP Note:** SFTP service on port 115 is always enabled when network.enable is true (no configuration option).

---

*Documentation generated from Smoothieware v1 source code analysis*
*Primary source: libs/Network/uip/Network.cpp*
*Version: Smoothieware v1 (edge branch)*

---

## Miscellaneous/Root Settings

# Smoothieware v1 - Miscellaneous & Root Settings Module

This module contains root-level configuration settings that don't belong to specific functional modules, including communication, system behavior, current control, and advanced system settings.

---

## Communication Settings

#### `uart0.baud_rate`

* Type: `number`
* Default: `9600` (if config file cannot be read), otherwise `DEFAULT_SERIAL_BAUD_RATE` (typically 115200)
* Units: baud (bits per second)
* Module: `root`
* Context: Global setting
* Defined in: `modules/communication/SerialConsole.cpp:182`
* Typical values: `9600` (fallback), `115200` (standard recommended), `250000` (high-speed), `230400` (alternative high-speed)
* Corresponding v1 setting: `uart0.baud_rate`
* Corresponding v2 setting: `uart console.baudrate`
* Description: Baud rate for the default hardware serial port (UART0), labeled "Serial" on the board near the USB connector. This controls the communication speed for the primary serial interface used for communication with host software, terminal debugging, and G-code streaming.
  * The serial port is initialized early in the boot process for error reporting
  * If the config file cannot be read, defaults to 9600 baud for emergency communication
  * UART configuration is applied in `init_uart()` method with 8 data bits, 1 stop bit, no parity
  * Must match the baud rate configured in your host software (Pronterface, OctoPrint, etc.)
* Related settings: `second_usb_serial_enable`
* Related pages: uart, communication, connecting-smoothie
* Example configuration:
  * uart0.baud_rate 115200  # Standard high-speed rate (recommended)
  * uart0.baud_rate 250000  # High-speed for faster communication
  * uart0.baud_rate 9600    # Fallback rate for troubleshooting

#### `second_usb_serial_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `main.cpp:204`
* Valid values: `true`, `false`
* Corresponding v1 setting: `second_usb_serial_enable`
* Corresponding v2 setting: `consoles.second_usb_serial_enable`
* Description: Enables a second serial port over the USB connection. This allows you to have two independent serial connections simultaneously, useful for having both a host application (like Pronterface) and a terminal connected at the same time. Both serial ports share the same USB connection but appear as separate COM/tty devices to the host operating system.
  * If enabled, creates a second USBSerial module instance
  * Useful for simultaneous connection of multiple host applications
  * Enables debugging while printing
  * Allows monitoring status from one port while sending commands from another
  * Windows: Appears as two separate COM ports (e.g., COM3 and COM4)
  * Linux: Appears as two ttyACM devices (e.g., /dev/ttyACM0 and /dev/ttyACM1)
  * macOS: Appears as two tty.usbmodem devices
* Related settings: `uart0.baud_rate`
* Related pages: usb, connecting-smoothie, communication
* Example configuration:
  * second_usb_serial_enable false  # Single USB serial port (default)
  * second_usb_serial_enable true   # Enable second USB serial for dual connections

---

## Miscellaneous System Settings

#### `leds_disable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `libs/Kernel.cpp:111`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leds_disable`
* Corresponding v2 setting: none (LED control simplified in v2)
* Description: Disables the 4 flashing status LEDs on the board. When set to true, all status indication LEDs are turned off, which can be useful for reducing visual distraction or in applications where LED light might interfere with sensors. The setting is inverted internally: `use_leds = !leds_disable`.
  * LED1: Step generation activity
  * LED2: USB activity
  * LED3: SD card activity
  * LED4: General activity/heartbeat
  * Does NOT affect the play LED (controlled separately by `play_led_disable`)
  * Useful in noise-sensitive environments (e.g., recording studios)
  * Useful in light-sensitive applications (e.g., photography equipment)
  * Minimal impact on power consumption
* Related settings: `play_led_disable`
* Related pages: smoothieboard, troubleshooting
* Example configuration:
  * leds_disable false  # LEDs enabled (default, shows activity)
  * leds_disable true   # Disable all 4 status LEDs

#### `play_led_disable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `modules/utils/PlayLed/PlayLed.cpp:27`
* Valid values: `true`, `false`
* Corresponding v1 setting: `play_led_disable`
* Corresponding v2 setting: `system.aux_play_led` (functionality changed)
* Description: Disables the "play" status LED that indicates when a file is being played from the SD card. When set to true, the LED is turned off. This is separate from the main status LEDs and can be disabled independently. If disabled, the PlayLed module deletes itself to free resources.
  * Default pin is `4.28!` (inverted)
  * Can be overridden with `play_led_pin` setting
  * LED behavior when enabled:
    * Off: No file playing
    * On: File currently being played from SD card
    * Flashing: Various playback states
* Related settings: `leds_disable`, `play_led_pin`, `pause_led_pin`
* Related pages: playled, player, printing-from-sd-card
* Example configuration:
  * play_led_disable false  # Play LED enabled (default, shows playback status)
  * play_led_disable true   # Disable play LED indicator

#### `kill_button_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `modules/utils/killbutton/KillButton.cpp:32`
* Valid values: `true`, `false`
* Corresponding v1 setting: `kill_button_enable`
* Corresponding v2 setting: `kill button.enable`
* Description: Enables the "kill" button functionality for emergency halt operations. When enabled, a physical button can be used to immediately halt all machine operations in case of emergency. This is a safety feature that stops all motors and halts command processing, equivalent to sending M112 via G-code.
  * Also checks deprecated `pause_button_enable` for backward compatibility
  * Button is polled at regular intervals (configurable via `kill_button_poll_frequency`)
  * Supports both momentary kill and toggle modes
  * Button press triggers emergency halt (M112 equivalent)
  * Hold 2+ seconds can unkill if `unkill_enable` is true
  * Toggle mode: If `kill_button_toggle_enable` is true, first press kills, second press unkills
  * Safety features: immediate motor stop, command queue flush, halt state entry
  * Must be explicitly cleared with M999 or $X (unless toggle mode enabled)
* Related settings: `kill_button_pin`, `kill_button_toggle_enable`, `kill_button_poll_frequency`, `unkill_enable`
* Related pages: killbutton, emergencystop, stopping-smoothie
* Example configuration:
  * kill_button_enable false  # No kill button (default)
  * kill_button_enable true   # Enable emergency stop button
  * kill_button_pin 2.12      # Specify pin for button (required when enabled)

#### `kill_button_pin`

* Type: `pin`
* Default: `2.12`
* Module: `root`
* Context: Global setting
* Defined in: `modules/utils/killbutton/KillButton.cpp:37`
* Valid values: Pin specification in format `port.pin` (e.g., `2.12`)
  * Pin modifiers supported: `^` (pullup), `v` (pulldown), `!` (inverted)
  * Example with pullup: `2.12^`
  * Button should be wired between pin and ground (active low)
* Corresponding v1 setting: `kill_button_pin`
* Corresponding v2 setting: `kill button.pin`
* Description: Specifies the GPIO pin to use for the kill button. The button should be wired between this pin and ground. The pin is configured as input with internal pullup (active low), meaning the button press connects the pin to ground.
  * Pin is configured as input with internal pullup
  * Active low (button press connects to ground)
  * Compatible with normally-open momentary switches
* Related settings: `kill_button_enable`
* Related pages: killbutton, pin-configuration, pinout
* Example configuration:
  * kill_button_pin 2.12     # Default pin assignment
  * kill_button_pin 2.12^    # Explicit pullup (redundant, default behavior)
  * kill_button_pin 1.30!    # Different pin with inversion

#### `msd_disable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `main.cpp:65` (checksum definition)
* Valid values: `true`, `false`
* Corresponding v1 setting: `msd_disable`
* Corresponding v2 setting: `system.msc_enable` (inverted logic)
* Description: Disables the MSD (Mass Storage Device) functionality when set to true. This prevents the SD card from appearing as a USB drive when connected to a computer. **CRITICAL: This requires a special firmware binary to function** - the standard firmware will ignore this setting. The special firmware binary `firmware-disablemsd.bin` is available at https://github.com/Smoothieware/Smoothieware/blob/edge/FirmwareBin/firmware-disablemsd.bin.
  * Requires special firmware build: `firmware-disablemsd.bin`
  * Standard firmware ignores this setting
  * When false (default): SD card appears as USB drive when connected
  * When true: SD card only accessible via serial commands (M20, M23, etc.)
  * Cannot be changed without firmware replacement
  * Must recompile firmware to add/remove this feature
  * Use cases: prevent accidental file modifications, dedicated control over file access, embedded installations
  * Alternative file access when disabled: M20 (list files), M23 (select file), M24 (start print), M25 (pause), M30 (delete)
* Related pages: sd-card, flashing-smoothie-firmware
* Example configuration:
  * msd_disable false  # SD card appears as USB drive (default, requires standard firmware)
  * msd_disable true   # SD card not accessible via USB (requires special firmware-disablemsd.bin)

#### `dfu_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting
* Defined in: `main.cpp:208`
* Valid values: `true`, `false`
* Corresponding v1 setting: `dfu_enable`
* Corresponding v2 setting: `system.dfu_enable`
* Description: For Linux developers: enables DFU (Device Firmware Update) mode, which allows you to flash new firmware over USB without requiring a physical bootloader button press or SD card. This is primarily useful for firmware development workflows and rapid iteration. Uses the same USB connection as serial communication.
  * Creates a DFU module instance if enabled
  * Flash new firmware over USB without SD card
  * No physical button press required for updates
  * Standard DFU protocol support
  * Tools: `dfu-util` on Linux, various DFU utilities on Windows, `dfu-util` via Homebrew on macOS
  * Example DFU command: `dfu-util -d 1d50:6015 -D firmware.bin -R`
  * WARNING: Enabling DFU allows firmware replacement, only enable in trusted environments
* Related pages: flashing-smoothie-firmware, compiling-smoothie
* Example configuration:
  * dfu_enable false  # DFU disabled (default, normal operation)
  * dfu_enable true   # Enable DFU for firmware development

---

## Advanced System Settings

#### `base_stepping_frequency`

* Type: `number`
* Default: `100000` (100 kHz)
* Units: Hz (frequency)
* Module: `root`
* Context: Global setting
* Defined in: `libs/Kernel.cpp:159`
* Typical values: `50000` (50 kHz, lower CPU load), `100000` (100 kHz, default), `200000` (200 kHz, higher performance)
* Corresponding v1 setting: `base_stepping_frequency`
* Corresponding v2 setting: `system.step_frequency`
* Description: Sets the base frequency of the step ticker in Hz. This is the fundamental rate at which the step generation interrupt runs. All step generation is derived from this base frequency through integer division. The maximum step rate per motor equals base_stepping_frequency ÷ steps_per_mm for that motor. Must be carefully chosen based on maximum expected step rates.
  * Used to configure the StepTicker frequency
  * Affects CPU load and maximum achievable step rates
  * Example calculation: 100000 Hz ÷ 80 steps/mm = 1250 mm/s = 75000 mm/min maximum
  * Too low: Limits maximum speeds and acceleration
  * Too high: Increases CPU load, may cause instability
  * Must be higher than: max_rate × steps_per_mm for any axis
  * Firmware automatically warns if actuator rates exceed capability
  * Higher frequencies increase interrupt load and may affect response time for other operations
  * WARNING: If actuator max_rate × steps_per_mm exceeds base_stepping_frequency, firmware outputs warning and clamps rate
* Related settings: `microseconds_per_step_pulse`, `alpha_max_rate`, `beta_max_rate`, `gamma_max_rate`, `alpha_steps_per_mm`, `beta_steps_per_mm`, `gamma_steps_per_mm`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * base_stepping_frequency 100000  # 100 kHz (default, suitable for most applications)
  * base_stepping_frequency 200000  # 200 kHz (higher performance, more CPU load)
  * base_stepping_frequency 50000   # 50 kHz (lower CPU load, reduced max step rates)

#### `microseconds_per_step_pulse`

* Type: `number`
* Default: `1` (microsecond)
* Units: µs (microseconds)
* Module: `root`
* Context: Global setting
* Defined in: `libs/Kernel.cpp:160`
* Typical values: `1` (default, modern drivers), `2` (some older drivers like A4988 variants), `5` (very old or slow drivers)
* Corresponding v1 setting: `microseconds_per_step_pulse`
* Corresponding v2 setting: `system.step_pulse_us`
* Description: Duration of the step pulse in microseconds. This is the time that the step signal remains high before returning low. Some stepper drivers require a minimum pulse width to reliably register steps. Check your driver datasheet for "Step Pulse Width" specification and set to at least 2× the minimum requirement for reliability.
  * Sets the unstep time in the StepTicker (applied at line 164 of Kernel.cpp)
  * Different driver requirements:
    * DRV8825: 1.9 µs minimum
    * A4988: 1.0 µs minimum
    * TMC2100/TMC2130: 100 ns minimum
    * TB6560: 2.0 µs minimum
    * TB6600: 2.5 µs minimum
  * Use 1 for onboard drivers (safe for all Smoothieboard drivers)
  * Increase if using external drivers and experiencing missed steps
  * Symptoms of too short pulse: missed steps, random position errors, inconsistent movement (worse at higher speeds)
  * Longer pulses slightly reduce maximum step rate
  * Minimal CPU impact difference between 1 and 5 microseconds
* Related settings: `base_stepping_frequency`
* Related pages: stepper-motors, motion-control
* Example configuration:
  * microseconds_per_step_pulse 1  # Default for modern drivers
  * microseconds_per_step_pulse 2  # For A4988 and some older drivers
  * microseconds_per_step_pulse 5  # For very old or slow drivers (TB6560, TB6600)

#### `grbl_mode`

* Type: `bool`
* Default: `false` (standard builds), `true` (CNC builds with `-DCNC` flag)
* Module: `root`
* Context: Global setting
* Defined in: `libs/Kernel.cpp:114-117`
* Valid values: `true`, `false`
* Corresponding v1 setting: `grbl_mode`
* Corresponding v2 setting: `general.grbl_mode`
* Description: Enables GRBL compatibility mode. When enabled, the firmware behaves more like GRBL, changing error messages, command handling, and protocol responses to match GRBL conventions. This is useful for host software designed for GRBL controllers like bCNC and other CNC-focused applications.
  * Default follows build configuration: CNC builds default to true, others to false
  * Changes error message formatting: Standard uses `Error: description`, GRBL mode uses `error:description`
  * Homing: Standard uses G28, GRBL mode uses G28.2 for force homing and supports `$H` command
  * Program end: Standard M30 deletes SD card files, GRBL mode M30 ends program (like M2)
  * Status queries: Standard provides extended status with temperatures, GRBL mode provides GRBL-style status reports with `?` query
  * Dwell command: Standard G4 P<milliseconds>, GRBL mode G4 P<seconds> (decimal seconds like LinuxCNC)
  * Halt behavior: Standard outputs "HALTED, M999 or $X to exit HALT state", GRBL mode outputs "ALARM: Abort during cycle"
  * Feed hold default state follows grbl_mode setting (can be overridden with `enable_feed_hold`)
  * M115 response includes `X-GRBL_MODE` flag: `FIRMWARE_NAME:Smoothieware, FIRMWARE_VERSION:1.0, X-GRBL_MODE:1, ...`
* Related settings: `enable_feed_hold`, `ok_per_line`
* Related pages: grbl-mode, from-grbl, bcnc
* Example configuration:
  * grbl_mode false  # Standard RepRap protocol (default for 3D printer builds)
  * grbl_mode true   # GRBL compatibility mode (default for CNC builds)

#### `ok_per_line`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting
* Defined in: `libs/Kernel.cpp:122`
* Valid values: `true`, `false`
* Corresponding v1 setting: `ok_per_line`
* Corresponding v2 setting: none (true behavior is standard in v2)
* Description: Controls when "ok" responses are sent. When true (default and recommended), sends "ok" once per line of input. When false, reverts to the old (incorrect) behavior of sending "ok" per G-code command, which could result in multiple "ok" responses for a single line containing multiple commands. Modern G-code protocol expects one "ok" per line, not per command.
  * Used in GcodeDispatch.cpp at line 415: `if(THEKERNEL->is_ok_per_line() || THEKERNEL->is_grbl_mode())`
  * Modern protocol expects one "ok" per line, not per command
  * When true (correct, default): Single line `G0 X10 Y10 Z5` returns one `ok`
  * When false (old behavior): Same line could return three `ok` responses
  * GRBL mode always behaves as if true (ignores this setting)
  * Should almost always be left at true (default)
  * Only set to false for compatibility with very old host software
  * Required for proper command buffering in modern hosts
* Related settings: `grbl_mode`
* Related pages: communication, supported-g-codes
* Example configuration:
  * ok_per_line true   # One "ok" per line (correct, default, recommended)
  * ok_per_line false  # One "ok" per command (old behavior, not recommended)

---

## Current Control Settings

#### `currentcontrol_module_enable`

* Type: `bool`
* Default: `false`
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:43`
* Valid values: `true`, `false`
* Required: yes (if you want to control motor currents via software)
* Corresponding v1 setting: `currentcontrol_module_enable`
* Corresponding v2 setting: none (replaced by TMC driver configuration in v2)
* Description: Enables digital control of stepper motor driver currents via digipot chip. When enabled, allows software configuration of motor currents through the digipot (digital potentiometer) chip instead of manual potentiometer adjustment. This is board-specific and depends on hardware support. If disabled, the CurrentControl module deletes itself to free resources.
  * Requires compatible hardware with digipot chip
  * Supported boards:
    * Smoothieboard (all versions) - MCP4451
    * Azteeg X5 GT - MCP4451
    * 4Pi boards - AD5206
    * Other boards with digipot support
  * Enables M907 G-code command for runtime current adjustment
  * Allows fine-tuning motor currents in software
  * Supports dynamic current adjustment during operation
* Related settings: `digipotchip`, `digipot_max_current`, `digipot_factor`, `alpha_current`, `beta_current`, `gamma_current`, `delta_current`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * currentcontrol_module_enable false  # Disabled (default, use manual pots)
  * currentcontrol_module_enable true   # Enable software current control

#### `digipotchip`

* Type: `string`
* Default: `mcp4451`
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:53`
* Valid values: `mcp4451`, `ad5206`
  * `mcp4451` - Default, used on Smoothieboard and Azteeg X5 GT (8 channels via I2C)
  * `ad5206` - Used on 4Pi boards (6 channels via SPI)
* Corresponding v1 setting: `digipotchip`
* Corresponding v2 setting: none (replaced by TMC driver system in v2)
* Description: Selects the digipot (digital potentiometer) chip used for current control. Different boards use different digipot chips, and this setting must match your hardware. Creates the appropriate digipot driver based on this setting. If unrecognized chip specified, defaults to MCP4451.
  * MCP4451 specifications:
    * Channels: 8 (supports eta_current and theta_current on channels 6-7)
    * Communication: I2C
    * Resolution: 8-bit (256 steps)
    * Addresses: 0x58, 0x5A, 0x5C (for 3 chips = 12 channels, only 2 used on Smoothieboard)
    * Used on: Smoothieboard, Azteeg X5 GT
  * AD5206 specifications:
    * Channels: 6 (does NOT support eta_current and theta_current)
    * Communication: SPI
    * Resolution: 8-bit (256 steps)
    * Fixed wiring (cannot be reconfigured without hardware changes)
    * Used on: 4Pi boards
    * Max current hardcoded to 2A
  * CRITICAL: Must match your board's hardware, incorrect setting prevents current control
  * Check board documentation before changing
* Related settings: `currentcontrol_module_enable`, `digipot_max_current`, `digipot_factor`
* Related pages: currentcontrol, smoothieboard
* Example configuration:
  * digipotchip mcp4451  # Smoothieboard, Azteeg X5 GT (default)
  * digipotchip ad5206   # 4Pi boards

#### `digipot_max_current`

* Type: `number`
* Default: `2.0` (Amperes)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:62`
* Minimum value: `0` (enforced by clamping in mcp4451.h:30)
* Maximum value: Determined by board hardware limits (not enforced by software, user must verify)
* Typical values: `2.0` (Smoothieboard/Azteeg X5 GT limit), `1.5` (conservative for most steppers), `1.0` (NEMA 17 typical)
* Corresponding v1 setting: `digipot_max_current`
* Corresponding v2 setting: `tmc2590.{motor}.max_current` or `tmc2660.{motor}.max_current` (per-motor in v2)
* Description: Maximum current in amperes that can be set for any motor. This is a safety limit that prevents setting currents higher than the hardware can safely handle. The digipot will clamp any requested current to this maximum value using: `current = min(max(current, 0.0f), this->max_current)` (mcp4451.h line 30).
  * Current values are clamped between 0 and this maximum
  * Per-driver limit, not total system limit
  * Protects against accidental over-current settings
  * Board-specific limits:
    * Smoothieboard: 2.0A per driver (board limit)
    * Azteeg X5 GT: 2.0A per driver
    * 4Pi boards: Hardcoded 2.0A in AD5206 driver (cannot be changed via config)
  * Determining safe max current: check board specs, check stepper driver chip datasheet, consider power supply capacity, factor in cooling/heatsinking
  * WARNING: Setting too high can damage drivers, overheat motors, damage power supply
* Related settings: `digipotchip`, `digipot_factor`, `alpha_current`, `beta_current`, `gamma_current`, `delta_current`
* Related pages: currentcontrol, stepper-motors, smoothieboard-v1-specifications
* Example configuration:
  * digipot_max_current 2.0   # Smoothieboard/Azteeg maximum (default)
  * digipot_max_current 1.5   # Conservative limit for safety
  * digipot_max_current 1.0   # Low-power NEMA 17 systems

#### `digipot_factor`

* Type: `number`
* Default: `113.33`
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:63`
* Typical values: `113.33` (Smoothieboard/Azteeg X5 GT with 0.05Ω sense resistors)
* Corresponding v1 setting: `digipot_factor`
* Corresponding v2 setting: `tmc2590.{motor}.sense_resistor` or `tmc2660.{motor}.sense_resistor` (v2 calculates factor automatically)
* Description: Conversion factor for translating current values (in amperes) to digipot wiper positions (0-255). This is hardware-specific and depends on the sense resistor values and driver chip characteristics. The formula used is: `wiper_value = ceil(factor × current)` (mcp4451.h line 63). For MCP4451 on Smoothieboard, the calculation is based on 0.05Ω sense resistors and DRV8825 chip characteristics.
  * Used in MCP4451: `char current_to_wiper(float current) { int c = ceilf(this->factor * current); return (c > 255) ? 255 : c; }` (mcp4451.h lines 62-65)
  * Different calculation for AD5206: `unsigned char current_to_wiper(float current) { return (unsigned char)((current * 1000) * 100 / 743); }` (not configurable)
  * Board-specific values:
    * Smoothieboard (MCP4451): 113.33 (based on 0.05Ω sense resistors)
    * Azteeg X5 GT (MCP4451): 113.33 (same sense resistor configuration)
    * 4Pi boards (AD5206): Not configurable (hardcoded formula based on 6.8kΩ and 10kΩ resistors)
  * Calculation for MCP4451: `factor = 255 / Imax × (Vref / (8 × Rsense))` where Vref=2.5V, Rsense=0.05Ω, Imax=2.0A → factor ≈ 113.33
  * When to change: custom board with different sense resistors, different stepper driver chips, modified hardware with different Vref, after hardware repairs/modifications
  * Testing: Measure actual motor current with multimeter, adjust if measured doesn't match set current: `new_factor = old_factor × (target_current / measured_current)`
* Related settings: `digipotchip`, `digipot_max_current`, `alpha_current`, `beta_current`, `gamma_current`, `delta_current`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * digipot_factor 113.33  # Smoothieboard/Azteeg X5 GT (default, 0.05Ω sense resistors)
  * digipot_factor 150     # Custom board with different sense resistors (example)

#### `alpha_current`

* Type: `number`
* Default: `0.8` (Amperes)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:66`
* Minimum value: `0` (enforced by clamping in mcp4451.h:30)
* Maximum value: `digipot_max_current` (enforced by clamping in mcp4451.h:30)
* Typical values: `0.6` to `1.0` (light duty CoreXY, small delta), `1.0` to `1.5` (medium duty Cartesian, medium delta), `1.5` to `2.0` (heavy duty CNC, large machines)
* Corresponding v1 setting: `alpha_current`
* Corresponding v2 setting: `current control.alpha.current`
* Description: Current setting for the first stepper motor driver (M1), channel 0 of the digipot. On Cartesian machines, this is typically the X axis. Current is specified in amperes and will be clamped to the `digipot_max_current` value (0 to max_current range enforced at mcp4451.h line 30). Proper current selection balances torque requirements against heat generation and motor/driver limits.
  * Channel 0 of the digipot
  * Affects M1 driver on Smoothieboard
  * Determining optimal current: check motor nameplate for rated current, start at 70-80% of rated, test for sufficient torque + acceptable temperature (<80°C) + no missed steps, adjust as needed
  * Effects of too low current: insufficient torque, missed steps, poor positioning accuracy, stalling under load
  * Effects of too high current: excessive heat, motor damage over time, driver thermal shutdown, power supply overload, no torque benefit above rated current
  * Runtime adjustment via M907: `M907 X1.5` sets X motor to 1.5A
  * Motor size guidelines:
    * NEMA 17 (typical): 0.6-1.7A
    * NEMA 23 (typical): 1.0-3.0A
    * NEMA 24 (typical): 2.0-4.0A
* Related M-Codes:
  * M907 X<current> - Set X motor current at runtime
  * M907 X<current> Y<current> Z<current> - Set multiple motor currents
  * M500 - Save current values to config-override
  * M503 - Display current motor current settings
* Related settings: `beta_current`, `gamma_current`, `delta_current`, `epsilon_current`, `zeta_current`, `digipot_max_current`, `digipot_factor`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * alpha_current 0.8   # Default, light/medium duty
  * alpha_current 1.5   # Higher torque for heavier X axis
  * alpha_current 1.0   # Balanced for most Cartesian printers

#### `beta_current`

* Type: `number`
* Default: `0.8` (Amperes)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:67`
* Minimum value: `0` (enforced by clamping in mcp4451.h:30)
* Maximum value: `digipot_max_current` (enforced by clamping in mcp4451.h:30)
* Typical values: `0.6` to `1.0` (light duty), `1.0` to `1.5` (medium duty), `1.5` to `2.0` (heavy duty)
* Corresponding v1 setting: `beta_current`
* Corresponding v2 setting: `current control.beta.current`
* Description: Current setting for the second stepper motor driver (M2), channel 1 of the digipot. On Cartesian machines, this is typically the Y axis. All current selection guidelines from `alpha_current` apply equally to beta_current.
  * Channel 1 of the digipot
  * Affects M2 driver on Smoothieboard
  * See `alpha_current` for detailed current selection guidelines
* Related M-Codes:
  * M907 Y<current> - Set Y motor current at runtime
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `alpha_current`, `gamma_current`, `delta_current`, `digipot_max_current`, `digipot_factor`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * beta_current 0.8   # Default
  * beta_current 1.5   # Higher torque for Y axis
  * beta_current 1.2   # Balanced setting

#### `gamma_current`

* Type: `number`
* Default: `0.8` (Amperes)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:68`
* Minimum value: `0` (enforced by clamping in mcp4451.h:30)
* Maximum value: `digipot_max_current` (enforced by clamping in mcp4451.h:30)
* Typical values: `0.8` to `1.2` (light Z axis), `1.2` to `1.8` (medium Z with bed), `1.5` to `2.0` (heavy Z axis or dual Z)
* Corresponding v1 setting: `gamma_current`
* Corresponding v2 setting: `current control.gamma.current`
* Description: Current setting for the third stepper motor driver (M3), channel 2 of the digipot. On Cartesian machines, this is typically the Z axis. Z-axis often benefits from higher current for stability as it needs to hold position against gravity and often has higher loads (print head, bed, etc.). May run slower so can handle more current without overheating.
  * Channel 2 of the digipot
  * Affects M3 driver on Smoothieboard
  * Z-axis specific considerations: needs to hold position against gravity, often has higher loads (print head, bed, gantry), may run slower (can handle more current), benefits from higher current for stability
  * See `alpha_current` for general current selection guidelines
* Related M-Codes:
  * M907 Z<current> - Set Z motor current at runtime
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `alpha_current`, `beta_current`, `delta_current`, `digipot_max_current`, `digipot_factor`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * gamma_current 0.8   # Default
  * gamma_current 1.5   # Higher for Z axis stability with heavy bed
  * gamma_current 1.2   # Balanced for typical Z axis

#### `delta_current`

* Type: `number`
* Default: `0.8` (Amperes)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:69`
* Minimum value: `0` (enforced by clamping in mcp4451.h:30)
* Maximum value: `digipot_max_current` (enforced by clamping in mcp4451.h:30)
* Typical values: `0.6` to `1.0` (light duty), `1.0` to `1.5` (medium duty), `1.5` to `2.0` (heavy duty or extruder)
* Corresponding v1 setting: `delta_current`
* Corresponding v2 setting: `current control.delta.current`
* Description: Current setting for the fourth stepper motor driver (M4), channel 3 of the digipot. Common assignments: on delta machines this would be one of the tower motors, on Cartesian machines with dual Z this could be the second Z motor, on machines with extruders this could be the first extruder motor, on 4-axis CNC this could be the rotary/fourth axis.
  * Channel 3 of the digipot
  * Affects M4 driver on Smoothieboard
  * See `alpha_current` for detailed current selection guidelines
* Related M-Codes:
  * M907 A<current> - Set channel 3 (M4) motor current at runtime
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `alpha_current`, `beta_current`, `gamma_current`, `epsilon_current`, `zeta_current`, `digipot_max_current`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * delta_current 0.8   # Default
  * delta_current 1.5   # Tower motor on delta or second Z motor
  * delta_current 1.0   # Extruder motor

#### `epsilon_current`

* Type: `number`
* Default: `-1` (disabled)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:70`
* Minimum value: `-1` (special value to disable)
* Maximum value: `digipot_max_current` (when enabled, enforced by clamping in mcp4451.h:30)
* Typical values: `-1` (disabled, default), `0.6` to `2.0` (when enabled, depending on motor)
* Corresponding v1 setting: `epsilon_current`
* Corresponding v2 setting: none (not standard on v2 board configuration)
* Description: Current setting for the fifth stepper motor driver (M5), channel 4 of the digipot. Default value of -1 disables this channel (treated specially at mcp4451.h lines 26-28). Available on both MCP4451 and AD5206 digipot chips. Common assignments: delta printer tower B motor, second extruder, rotary axis, additional axis on multi-axis machines.
  * Channel 4 of the digipot
  * Affects M5 driver on Smoothieboard (if present)
  * Value of -1 disables the channel (no current set)
  * Hardware support: MCP4451 (Smoothieboard, Azteeg X5 GT), AD5206 (4Pi boards)
  * Set to -1 if motor is not used
* Related M-Codes:
  * M907 B<current> - Set channel 4 (M5) motor current at runtime
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `delta_current`, `zeta_current`, `eta_current`, `theta_current`, `digipot_max_current`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * epsilon_current -1    # Disabled (default, motor not used)
  * epsilon_current 1.5   # Enable and set to 1.5A
  * epsilon_current 1.0   # Second extruder motor

#### `zeta_current`

* Type: `number`
* Default: `-1` (disabled)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:71`
* Minimum value: `-1` (special value to disable)
* Maximum value: `digipot_max_current` (when enabled, enforced by clamping in mcp4451.h:30)
* Typical values: `-1` (disabled, default), `0.6` to `2.0` (when enabled, depending on motor)
* Corresponding v1 setting: `zeta_current`
* Corresponding v2 setting: none (not standard on v2 board configuration)
* Description: Current setting for the sixth stepper motor driver (M6), channel 5 of the digipot. Default value of -1 disables this channel. Available on both MCP4451 and AD5206 digipot chips. **NOTE: This is the LAST CHANNEL on AD5206-based boards** (AD5206 only has 6 channels: 0-5). Common assignments: delta printer tower C motor, third extruder, additional rotary axis, multi-axis CNC machines.
  * Channel 5 of the digipot
  * Affects M6 driver (if present) on board
  * Value of -1 disables the channel
  * Hardware support: MCP4451 (Smoothieboard, Azteeg X5 GT), AD5206 (4Pi boards)
  * CRITICAL: AD5206 chip only has 6 channels (0-5), so zeta_current is the last available channel on AD5206-based boards
  * Set to -1 if motor is not used
* Related M-Codes:
  * M907 C<current> - Set channel 5 (M6) motor current at runtime
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `epsilon_current`, `eta_current`, `theta_current`, `digipot_max_current`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * zeta_current -1    # Disabled (default, motor not used)
  * zeta_current 1.5   # Delta tower C or third extruder
  * zeta_current 1.2   # Additional rotary axis

#### `eta_current`

* Type: `number`
* Default: `-1` (disabled)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:72`
* Minimum value: `-1` (special value to disable)
* Maximum value: `digipot_max_current` (when enabled, enforced by clamping in mcp4451.h:30)
* Typical values: `-1` (disabled, default), `0.6` to `2.0` (when enabled, for external driver current control)
* Corresponding v1 setting: `eta_current`
* Corresponding v2 setting: none (not standard on v2 board configuration)
* Description: Current setting for the seventh stepper motor driver current control, channel 6 of the digipot. Default value of -1 disables this channel. **CRITICAL: This setting ONLY works with MCP4451-based boards** (Smoothieboard, Azteeg X5 GT). AD5206 boards do NOT support this channel (AD5206 only has 6 channels: 0-5). **IMPORTANT LIMITATION: This channel controls a digipot output but is NOT connected to a robot actuator in the firmware.** It can control the current of an external stepper driver but cannot be used as a motion axis.
  * Channel 6 of the digipot
  * Value of -1 disables the channel
  * Hardware support: MCP4451 ONLY (Smoothieboard, Azteeg X5 GT) - NOT supported on AD5206 (4Pi boards)
  * Use cases: external driver current control, auxiliary equipment, future expansion, custom hardware modifications
  * Cannot be used for robot motion control axes (not connected to robot actuator system)
* Related M-Codes:
  * M907 D<current> - Set channel 6 current at runtime (MCP4451 only)
  * M500 - Save current value to config-override
  * M503 - Display current settings
* Related settings: `theta_current`, `zeta_current`, `digipot_max_current`, `digipotchip`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * eta_current -1    # Disabled (default)
  * eta_current 1.5   # Enable external driver current control (MCP4451 ONLY)

#### `theta_current`

* Type: `number`
* Default: `-1` (disabled)
* Units: A (amperes)
* Module: `currentcontrol`
* Context: Global setting
* Defined in: `modules/utils/currentcontrol/CurrentControl.cpp:73`
* Minimum value: `-1` (special value to disable)
* Maximum value: `digipot_max_current` (when enabled, enforced by clamping in mcp4451.h:30)
* Typical values: `-1` (disabled, default), `0.6` to `2.0` (when enabled, for external driver current control)
* Corresponding v1 setting: `theta_current`
* Corresponding v2 setting: none (not standard on v2 board configuration)
* Description: Current setting for the eighth stepper motor driver current control, channel 7 of the digipot (last channel). Default value of -1 disables this channel. **CRITICAL: This setting ONLY works with MCP4451-based boards** (Smoothieboard, Azteeg X5 GT). AD5206 boards do NOT support this channel (AD5206 only has 6 channels: 0-5). **IMPORTANT LIMITATION: This channel controls a digipot output but is NOT connected to a robot actuator in the firmware.** It can control the current of an external stepper driver but cannot be used as a motion axis.
  * Channel 7 of the digipot (last channel)
  * Value of -1 disables the channel
  * Hardware support: MCP4451 ONLY (Smoothieboard, Azteeg X5 GT) - NOT supported on AD5206 (4Pi boards)
  * MCP4451 channel mapping: Channels 0-3 on first chip (address 0x58), channels 4-7 on second chip (address 0x5A), theta_current is channel 7 (last channel of second chip)
  * Use cases: external driver current control, auxiliary equipment, future expansion, custom hardware modifications
  * Cannot be used for robot motion control axes (not connected to robot actuator system)
* Related M-Codes:
  * M907 (no letter defined for channel 7 in standard mapping)
  * M500 - Save current value to config-override (if modified via direct digipot access)
  * M503 - Display current settings
* Related settings: `eta_current`, `zeta_current`, `digipot_max_current`, `digipotchip`
* Related pages: currentcontrol, stepper-motors
* Example configuration:
  * theta_current -1    # Disabled (default)
  * theta_current 1.5   # Enable external driver current control (MCP4451 ONLY)

---

## Summary

This module contains 24 root-level configuration settings organized into four categories:

**Communication (2 settings):**
- `uart0.baud_rate` - Serial port baud rate
- `second_usb_serial_enable` - Enable second USB serial port

**System Behavior (6 settings):**
- `leds_disable` - Disable main status LEDs
- `play_led_disable` - Disable play status LED
- `kill_button_enable` - Enable kill button
- `kill_button_pin` - Kill button pin assignment
- `msd_disable` - Disable USB mass storage
- `dfu_enable` - Enable DFU firmware updates

**Advanced System (4 settings):**
- `base_stepping_frequency` - Step generation base frequency
- `microseconds_per_step_pulse` - Step pulse duration
- `grbl_mode` - GRBL compatibility mode
- `ok_per_line` - Response protocol

**Current Control (12 settings):**
- `currentcontrol_module_enable` - Enable current control module
- `digipotchip` - Digipot chip selection (mcp4451/ad5206)
- `digipot_max_current` - Maximum current limit
- `digipot_factor` - Current conversion factor
- `alpha_current` through `theta_current` - Per-motor current settings (8 motors)

---

**Source Code References:**
- `main.cpp` - USB serial, MSD, DFU initialization
- `libs/Kernel.cpp` - Core system settings (LEDs, GRBL mode, stepping frequency)
- `modules/communication/SerialConsole.cpp` - UART configuration
- `modules/utils/currentcontrol/CurrentControl.cpp` - Current control module
- `modules/utils/currentcontrol/mcp4451.h` - MCP4451 digipot driver
- `modules/utils/currentcontrol/ad5206.h` - AD5206 digipot driver
- `modules/utils/killbutton/KillButton.cpp` - Kill button implementation
- `modules/utils/PlayLed/PlayLed.cpp` - Play LED implementation

---

*Documentation refined according to Configuration Entry Specification v2.0*
*Last updated: 2025-11-05*
