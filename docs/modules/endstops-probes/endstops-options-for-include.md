# Endstops Configuration Options

This page provides a complete reference of all configuration options for the endstops module.

The endstops module handles homing and limit switches for your machine, supporting various arm solutions including Cartesian, CoreXY, Delta, and SCARA.

For more information on setting up endstops, see the main [Endstops](endstops) documentation.

## Configuration Reference

| Parameter | Default | Description |
| --------- | :-------: | ----------- |
| `endstops_enable` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | The endstop module is enabled if this is set to true. All of its parameters are ignored otherwise. |
| `corexy_homing` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `corexy` or a `h-bot` arm solution |
| `delta_homing` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `linear_delta` arm solution |
| `rdelta_homing` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `rotary_delta` arm solution |
| `scara_homing` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `scara` arm solution |
| `alpha_min_endstop` | <pin>1.24^</pin> | Alpha (X axis or alpha tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| `alpha_max_endstop` | <pin>1.25^</pin> | Alpha (X axis or alpha tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| `alpha_homing_direction` | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the <gcode>G28</gcode> G-code) will move until it hits the minimum endstop and then set the current position to `alpha_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `alpha_max` |
| `alpha_min` | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `alpha_homing_direction` is set to `home_to_min` and the minimum endstop is hit. **NOTE** the homing offset is added to this set with `M206 Xnnn` |
| `alpha_max` | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `alpha_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| `alpha_max_travel` | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the X axis can travel looking for the endstop before it gives up |
| `beta_min_endstop` | <pin>1.26^</pin> | Beta (Y axis or beta tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| `beta_max_endstop` | <pin>1.27^</pin> | Beta (Y axis or beta tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| `beta_homing_direction` | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the <gcode>G28</gcode> G-code) will move until it hits the minimum endstop and then set the current position to `beta_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `beta_max` |
| `beta_min` | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `beta_homing_direction` is set to `home_to_min` and the minimum endstop is hit. |
| `beta_max` | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `beta_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| `beta_max_travel` | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the Y axis can travel looking for the endstop before it gives up |
| `gamma_min_endstop` | <pin>1.28^</pin> | Gamma (Z axis or gamma tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| `gamma_max_endstop` | <pin>1.29^</pin> | Gamma (Z axis or gamma tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| `gamma_homing_direction` | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the <gcode>G28</gcode> G-code) will move until it hits the minimum endstop and then set the current position to `gamma_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `gamma_max` |
| `gamma_min` | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `gamma_homing_direction` is set to `home_to_min` and the minimum endstop is hit. |
| `gamma_max` | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `gamma_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| `gamma_max_travel` | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the Z axis can travel looking for the endstop before it gives up |
| `homing_order` | {::nomarkdown}<raw>`""` (empty)</raw>{:/nomarkdown} | Optional order in which axis will home, default (when empty) is XY home at the same time then Z, then A,B,C. If this is set it will force each axis to home one at a time in the specified order. For example `XZY` means: `X` axis followed by `Z`, then `Y` last. **NOTE** If an axis is not specified here then it will not be homed at all. If ABC are set they must also be specified if they need to be homed. |
| `alpha_limit_enable` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the alpha (X axis or alpha tower) endstops are hit |
| `beta_limit_enable` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the beta (Y axis or beta tower) endstops are hit |
| `gamma_limit_enable` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the gamma (Z axis or gamma tower) endstops are hit |
| `alpha_fast_homing_rate_mm_s` | {::nomarkdown}<raw>50</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the alpha actuator (X axis or alpha tower) |
| `beta_fast_homing_rate_mm_s` | {::nomarkdown}<raw>50</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the beta actuator (Y axis or beta tower) |
| `gamma_fast_homing_rate_mm_s` | {::nomarkdown}<raw>4</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the gamma actuator (Z axis or gamma tower) |
| `alpha_homing_retract_mm` | {::nomarkdown}<raw>5</raw>{:/nomarkdown} | Distance to retract the alpha actuator (X axis or alpha tower) once the endstop is first hit, before re-homing at a slower speed. |
| `beta_homing_retract_mm` | {::nomarkdown}<raw>5</raw>{:/nomarkdown} | Distance to retract the beta actuator (Y axis or beta tower) once the endstop is first hit, before re-homing at a slower speed. |
| `gamma_homing_retract_mm` | {::nomarkdown}<raw>1</raw>{:/nomarkdown} | Distance to retract the alpha actuator (Z axis or gamma tower) once the endstop is first hit, before re-homing at a slower speed. |
| `alpha_slow_homing_rate_mm_s` | {::nomarkdown}<raw>25</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the alpha actuator (X axis or alpha tower) once the endstop is hit once. |
| `beta_slow_homing_rate_mm_s` | {::nomarkdown}<raw>25</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the beta actuator (Y axis or beta tower) once the endstop is hit once. |
| `gamma_slow_homing_rate_mm_s` | {::nomarkdown}<raw>2</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the gamma actuator (Z axis or gamma tower) once the endstop is hit once. |
| `endstop_debounce_count` | {::nomarkdown}<raw>100</raw>{:/nomarkdown} | Debounce each limit switch (not homing endstops) over this number of values. Set to `100` if your endstops are too noisy and give false readings. Used for limit switches only |
| `endstop_debounce_ms` | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Debounce each homing endstop for this number of milliseconds. Set to 1 if your endstops are too noisy and give false readings. Used for homing only |
| `alpha_trim_mm` | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for alpha (X axis or alpha tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| `beta_trim_mm` | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for beta (Y axis or beta tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| `gamma_trim_mm` | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for gamma (Z axis or gamma tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| `move_to_origin_after_home` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, once homing is complete, the machine will move to its origin point |
| `park_after_home` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will move to a predefined park position after homing is complete |
| `home_z_first` | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true to home the Z first, otherwise Z homes after XY |
