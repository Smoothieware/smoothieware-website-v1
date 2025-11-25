# Endstops Configuration Options

This page provides a complete reference of all configuration options for the endstops module.

The endstops module handles homing and limit switches for your machine, supporting various arm solutions including Cartesian, CoreXY, Delta, and SCARA.

For more information on setting up endstops, see the main [Endstops](endstops) documentation.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Configuration Note:</strong> In Smoothieware v2, endstops use INI-style sections. The <code>[endstops]</code> section contains per-endstop subsections like <code>minx.*</code>, <code>maxx.*</code>, <code>miny.*</code>, etc., plus <code>common.*</code> for shared settings.
</sl-alert>
{:/nomarkdown}

## Configuration Reference

| Parameter | Default | Description |
| --------- | :-------: | ----------- |
| <setting v1="endstops_enable" v2="endstops.enable"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | The endstop module is enabled if this is set to true. All of its parameters are ignored otherwise. |
| <setting v1="corexy_homing" v2="endstops.common.corexy_homing"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `corexy` or a `h-bot` arm solution |
| <setting v1="delta_homing" v2="endstops.common.delta_homing"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `linear_delta` arm solution |
| <setting v1="rdelta_homing" v2="endstops.common.rdelta_homing"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `rotary_delta` arm solution |
| <setting v1="scara_homing" v2="endstops.common.scara_homing"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true if this machine uses a `scara` arm solution |
| <setting v1="alpha_min_endstop" v2="endstops.minx.pin"></setting> | <pin>1.24^</pin> | Alpha (X axis or alpha tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="alpha_max_endstop" v2="endstops.maxx.pin"></setting> | <pin>1.25^</pin> | Alpha (X axis or alpha tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="alpha_homing_direction" v2="endstops.minx.homing_direction"></setting> | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} G-code) will move until it hits the minimum endstop and then set the current position to `alpha_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `alpha_max` |
| <setting v1="alpha_min" v2="endstops.minx.homing_position"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `alpha_homing_direction` is set to `home_to_min` and the minimum endstop is hit. **NOTE** the homing offset is added to this set with `M206 Xnnn` |
| <setting v1="alpha_max" v2="endstops.maxx.homing_position"></setting> | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `alpha_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| <setting v1="alpha_max_travel" v2="endstops.minx.max_travel"></setting> | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the X axis can travel looking for the endstop before it gives up |
| <setting v1="beta_min_endstop" v2="endstops.miny.pin"></setting> | <pin>1.26^</pin> | Beta (Y axis or beta tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="beta_max_endstop" v2="endstops.maxy.pin"></setting> | <pin>1.27^</pin> | Beta (Y axis or beta tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="beta_homing_direction" v2="endstops.miny.homing_direction"></setting> | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} G-code) will move until it hits the minimum endstop and then set the current position to `beta_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `beta_max` |
| <setting v1="beta_min" v2="endstops.miny.homing_position"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `beta_homing_direction` is set to `home_to_min` and the minimum endstop is hit. |
| <setting v1="beta_max" v2="endstops.maxy.homing_position"></setting> | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `beta_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| <setting v1="beta_max_travel" v2="endstops.miny.max_travel"></setting> | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the Y axis can travel looking for the endstop before it gives up |
| <setting v1="gamma_min_endstop" v2="endstops.minz.pin"></setting> | <pin>1.28^</pin> | Gamma (Z axis or gamma tower) minimum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="gamma_max_endstop" v2="endstops.maxz.pin"></setting> | <pin>1.29^</pin> | Gamma (Z axis or gamma tower) maximum limit endstop. Set to `nc` if not installed on your machine. |
| <setting v1="gamma_homing_direction" v2="endstops.minz.homing_direction"></setting> | {::nomarkdown}<raw>home_to_min</raw>{:/nomarkdown} | In which direction to home. If set to `home_to_min`, homing (using the {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} G-code) will move until it hits the minimum endstop and then set the current position to `gamma_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `gamma_max` |
| <setting v1="gamma_min" v2="endstops.minz.homing_position"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | This gets loaded after homing when `gamma_homing_direction` is set to `home_to_min` and the minimum endstop is hit. |
| <setting v1="gamma_max" v2="endstops.maxz.homing_position"></setting> | {::nomarkdown}<raw>200</raw>{:/nomarkdown} | This gets loaded after homing when `gamma_homing_direction` is set to `home_to_max` and the maximum endstop is hit. |
| <setting v1="gamma_max_travel" v2="endstops.minz.max_travel"></setting> | {::nomarkdown}<raw>500</raw>{:/nomarkdown} | This determines how far the Z axis can travel looking for the endstop before it gives up |
| <setting v1="homing_order" v2="endstops.common.homing_order"></setting> | {::nomarkdown}<raw>`""` (empty)</raw>{:/nomarkdown} | Optional order in which axis will home, default (when empty) is XY home at the same time then Z, then A,B,C. If this is set it will force each axis to home one at a time in the specified order. For example `XZY` means: `X` axis followed by `Z`, then `Y` last. **NOTE** If an axis is not specified here then it will not be homed at all. If ABC are set they must also be specified if they need to be homed. |
| <setting v1="alpha_limit_enable" v2="endstops.minx.limit_enable"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the alpha (X axis or alpha tower) endstops are hit |
| <setting v1="beta_limit_enable" v2="endstops.miny.limit_enable"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the beta (Y axis or beta tower) endstops are hit |
| <setting v1="gamma_limit_enable" v2="endstops.minz.limit_enable"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will stop if one of the gamma (Z axis or gamma tower) endstops are hit |
| <setting v1="alpha_fast_homing_rate_mm_s" v2="endstops.minx.fast_rate"></setting> | {::nomarkdown}<raw>50</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the alpha actuator (X axis or alpha tower) |
| <setting v1="beta_fast_homing_rate_mm_s" v2="endstops.miny.fast_rate"></setting> | {::nomarkdown}<raw>50</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the beta actuator (Y axis or beta tower) |
| <setting v1="gamma_fast_homing_rate_mm_s" v2="endstops.minz.fast_rate"></setting> | {::nomarkdown}<raw>4</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to home for the gamma actuator (Z axis or gamma tower) |
| <setting v1="alpha_homing_retract_mm" v2="endstops.minx.retract"></setting> | {::nomarkdown}<raw>5</raw>{:/nomarkdown} | Distance to retract the alpha actuator (X axis or alpha tower) once the endstop is first hit, before re-homing at a slower speed. |
| <setting v1="beta_homing_retract_mm" v2="endstops.miny.retract"></setting> | {::nomarkdown}<raw>5</raw>{:/nomarkdown} | Distance to retract the beta actuator (Y axis or beta tower) once the endstop is first hit, before re-homing at a slower speed. |
| <setting v1="gamma_homing_retract_mm" v2="endstops.minz.retract"></setting> | {::nomarkdown}<raw>1</raw>{:/nomarkdown} | Distance to retract the alpha actuator (Z axis or gamma tower) once the endstop is first hit, before re-homing at a slower speed. |
| <setting v1="alpha_slow_homing_rate_mm_s" v2="endstops.minx.slow_rate"></setting> | {::nomarkdown}<raw>25</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the alpha actuator (X axis or alpha tower) once the endstop is hit once. |
| <setting v1="beta_slow_homing_rate_mm_s" v2="endstops.miny.slow_rate"></setting> | {::nomarkdown}<raw>25</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the beta actuator (Y axis or beta tower) once the endstop is hit once. |
| <setting v1="gamma_slow_homing_rate_mm_s" v2="endstops.minz.slow_rate"></setting> | {::nomarkdown}<raw>2</raw>{:/nomarkdown} | Speed, in millimetres/second, at which to re-home for the gamma actuator (Z axis or gamma tower) once the endstop is hit once. |
| <setting v1="endstop_debounce_count" v2="endstops.common.debounce_count"></setting> | {::nomarkdown}<raw>100</raw>{:/nomarkdown} | Debounce each limit switch (not homing endstops) over this number of values. Set to `100` if your endstops are too noisy and give false readings. Used for limit switches only |
| <setting v1="endstop_debounce_ms" v2="endstops.common.debounce_ms"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Debounce each homing endstop for this number of milliseconds. Set to 1 if your endstops are too noisy and give false readings. Used for homing only |
| <setting v1="alpha_trim_mm" v2="endstops.common.alpha_trim_mm"></setting> | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for alpha (X axis or alpha tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| <setting v1="beta_trim_mm" v2="endstops.common.beta_trim_mm"></setting> | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for beta (Y axis or beta tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| <setting v1="gamma_trim_mm" v2="endstops.common.gamma_trim_mm"></setting> | {::nomarkdown}<raw>-0.1</raw>{:/nomarkdown} | DELTA ONLY Software trim for gamma (Z axis or gamma tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop) |
| <setting v1="move_to_origin_after_home" v2="endstops.common.move_to_origin_after_home"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, once homing is complete, the machine will move to its origin point |
| <setting v1="park_after_home" v2="endstops.common.park_after_home"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | If set to true, the machine will move to a predefined park position after homing is complete |
| <setting v1="home_z_first" v2="endstops.common.home_z_first"></setting> | {::nomarkdown}<raw>false</raw>{:/nomarkdown} | Set to true to home the Z first, otherwise Z homes after XY |
