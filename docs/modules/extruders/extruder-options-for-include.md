
# Extruder Configuration Options

This page lists all configuration options for the Extruder module.

For more detailed information and examples, see the [Extruder](extruder) guide.

## Configuration Reference

| Parameter | Default | Description |
| --------- | :-------: | ----------- |
| <setting v1="extruder.{name}.enable" v2="extruder.{name}.enable"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Whether to activate the extruder module at all. All configuration is ignored if false. Each time an <setting v1="extruder.{name}.enable" v2="extruder.{name}.enable"></setting> line is encountered, an extruder module with the name «module_name» will be created. |
| <setting v1="extruder.{name}.steps_per_mm" v2="extruder.{name}.steps_per_mm"></setting> | {::nomarkdown}<raw>1</raw>{:/nomarkdown} | Steps/millimetre for the extruder stepper motor. This is the number of steps to move one millimetre of filament. [Learn more](extruder.md#steps_per_millimeter) |
| <setting v1="extruder.{name}.filament_diameter" v2="extruder.{name}.filament_diameter"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Filament diameter, in millimetres, used for volumetric extrusion control. [Learn more](extruder.md#filament-diameter) |
| <setting v1="extruder.{name}.acceleration" v2="actuator.delta.acceleration"></setting> | {::nomarkdown}<raw>1000</raw>{:/nomarkdown} | Acceleration for the extruder stepper motor, in millimetres/second/second |
| <setting v1="extruder.{name}.max_speed" v2="motion control.max_speed"></setting> | {::nomarkdown}<raw>1000</raw>{:/nomarkdown} | Maximum allowable speed for the extruder stepper motor, in millimetres/second |
| <setting v1="extruder.{name}.step_pin" v2="extruder.{name}.step_pin"></setting> | <pin>2.3</pin> | Pin for extruder stepper motor driver's step signal |
| <setting v1="extruder.{name}.dir_pin" v2="extruder.{name}.dir_pin"></setting> | <pin>0.22</pin> | Pin for extruder stepper motor driver's direction signal |
| <setting v1="extruder.{name}.en_pin" v2="extruder.{name}.en_pin"></setting> | <pin>0.21</pin> | Pin for extruder stepper motor driver's enable signal |
| <setting v1="extruder.{name}.x_offset" v2="extruder.{name}2.x_offset"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Extruder offset from origin in millimetres for the X axis. ONLY used when you have multiple extruders to specify the offset from each extruder to the first one. |
| <setting v1="extruder.{name}.y_offset" v2="extruder.{name}2.y_offset"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Extruder offset from origin in millimetres for the Y axis. ONLY used for multiple extruders |
| <setting v1="extruder.{name}.z_offset" v2="extruder.{name}2.z_offset"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Extruder offset from origin in millimetres for the Z axis. ONLY used for multiple extruders |
| <setting v1="extruder.{name}.retract_length" v2="extruder.{name}.retract_length"></setting> | {::nomarkdown}<raw>3</raw>{:/nomarkdown} | Retract length in millimetres. Retract is a retractation of the filament called using the <gcode>G10</gcode> G-code. It is recovered (reverted) using the <gcode>G11</gcode> G-code. [Learn more about retractation](extruder.md#retract) |
| <setting v1="extruder.{name}.retract_feedrate" v2="extruder.{name}.retract_feedrate"></setting> | {::nomarkdown}<raw>45</raw>{:/nomarkdown} | Retract feed-rate (filament speed) in millimetres/second |
| <setting v1="extruder.{name}.retract_recover_length" v2="extruder.{name}.retract_recover_length"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Additional length when recovering (if you retract by 1mm, you will be recovering by 1mm plus this value) |
| <setting v1="extruder.{name}.retract_recover_feedrate" v2="extruder.{name}.retract_recover_feedrate"></setting> | {::nomarkdown}<raw>8</raw>{:/nomarkdown} | Recovery feed-rate in millimetres/second (should be less than retract feedrate) |
| <setting v1="extruder.{name}.retract_zlift_length" v2="extruder.{name}.retract_zlift_length"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Z-lift on retract in millimeters, set to `0` if you want to disable retraction Z-lift. Z-lift is a small increase in the Z axis position when retracting. |
| <setting v1="extruder.{name}.retract_zlift_feedrate" v2="extruder.{name}.retract_zlift_feedrate"></setting> | {::nomarkdown}<raw>6000</raw>{:/nomarkdown} | Z-lift feed-rate in millimetres/minute (Note: mm/min NOT mm/sec) |
| <setting v1="delta_current" v2="current control.delta.current"></setting> | {::nomarkdown}<raw>1.5</raw>{:/nomarkdown} | First extruder stepper motor driver (M4) current in Amperes |
| <setting v1="epsilon_current" v2="current control.epsilon.current"></setting> | {::nomarkdown}<raw>1.5</raw>{:/nomarkdown} | Second extruder stepper motor driver (M5) current in Amperes |
