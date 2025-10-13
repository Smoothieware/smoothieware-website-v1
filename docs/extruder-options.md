
# Extruder Configuration Options

This page lists all configuration options for the Extruder module.

For more detailed information and examples, see the [Extruder](extruder) guide.

## Configuration Reference

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| `extruder.module_name.enable` | true | Whether to activate the extruder module at all. All configuration is ignored if false. Each time an `extruder.module_name.enable` line is encountered, an extruder module with the name «module_name» will be created. |
| `extruder.module_name.steps_per_mm` | 140 | Steps/millimetre for the extruder stepper motor. This is the number of steps to move one millimetre of filament. [Learn more](extruder.md#steps_per_millimeter) |
| `extruder.module_name.filament_diameter` | 1.74 | Filament diameter, in millimetres, used for volumetric extrusion control. [Learn more](extruder.md#filament-diameter) |
| `extruder.module_name.default_feed_rate` | 600 | Default rate in millimetres/minute for moves where only the extruder moves. This is only used if you have never provided a feedrate via the `F` parameter. Once you specify a `F` parameter, it will be used as the Extruder feed rate until you reset the board. |
| `extruder.module_name.acceleration` | 500 | Acceleration for the extruder stepper motor, in millimetres/second/second |
| `extruder.module_name.max_speed` | 50 | Maximum allowable speed for the extruder stepper motor, in millimetres/second |
| `extruder.module_name.step_pin` | `2.3` | Pin for extruder stepper motor driver's step signal |
| `extruder.module_name.dir_pin` | `0.22` | Pin for extruder stepper motor driver's direction signal |
| `extruder.module_name.en_pin` | `0.21` | Pin for extruder stepper motor driver's enable signal |
| `extruder.module_name.x_offset` | 0 | Extruder offset from origin in millimetres for the X axis. ONLY used when you have multiple extruders to specify the offset from each extruder to the first one. |
| `extruder.module_name.y_offset` | 0 | Extruder offset from origin in millimetres for the Y axis. ONLY used for multiple extruders |
| `extruder.module_name.z_offset` | 0 | Extruder offset from origin in millimetres for the Z axis. ONLY used for multiple extruders |
| `extruder.module_name.retract_length` | 3 | Retract length in millimetres. Retract is a retractation of the filament called using the `G10` G-code. It is recovered (reverted) using the `G11` G-code. [Learn more about retractation](extruder.md#retract) |
| `extruder.module_name.retract_feedrate` | 45 | Retract feed-rate (filament speed) in millimetres/second |
| `extruder.module_name.retract_recover_length` | 0 | Additional length when recovering (if you retract by 1mm, you will be recovering by 1mm plus this value) |
| `extruder.module_name.retract_recover_feedrate` | 8 | Recovery feed-rate in millimetres/second (should be less than retract feedrate) |
| `extruder.module_name.retract_zlift_length` | 0 | Z-lift on retract in millimeters, set to `0` if you want to disable retraction Z-lift. Z-lift is a small increase in the Z axis position when retracting. |
| `extruder.module_name.retract_zlift_feedrate` | 6000 | Z-lift feed-rate in millimetres/minute (Note: mm/min NOT mm/sec) |
| `delta_current` | 1.5 | First extruder stepper motor driver (M4) current in Amperes |
| `epsilon_current` | 1.5 | Second extruder stepper motor driver (M5) current in Amperes |
