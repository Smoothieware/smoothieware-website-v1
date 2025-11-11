
# Motion Control Options

This page provides a complete reference of all configuration options for motion control in Smoothieware.

These settings control how your machine moves, including speed, acceleration, and movement planning.

For more information about motion control concepts, see the [Motion Control](motion-control) documentation.

## Configuration Reference

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
{::nomarkdown}
| `default_feed_rate` | 4000 | Default rate for <gcode>G1</gcode>/<gcode>G2</gcode>/<gcode>G3</gcode> moves in millimetres/minute. This is overridden by the first `F` (feedrate) parameter after reset, and never used again. |
| `default_seek_rate` | 4000 | Default rate for <gcode>G0</gcode> moves in millimetres/minute |
{:/nomarkdown}
| `mm_max_arc_error` | 0.01 | Arcs are cut into segments (lines), This is the maximum error for line segments that divide arcs |
| `mm_per_line_segment` | 5 | Lines can be cut into segments (generally not useful with cartesian coordinates robots), this sets the maximum length of any given segment. Segments longer than this will be cut into several segments. |
| `delta_segments_per_second` | 100 | Instead of cutting lines into segments based on a distance, cut them based on time: segments will be cut so that Smoothie executes -about- `delta_segments_per_second` segments each second. This is mostly useful when using `linear_delta` arm solutions. |
| `planner_queue_size` | 32 | Defines how many blocks (line segments) are stored in RAM for look-ahead acceleration calculation. **Do not change this unless you know exactly what you are doing**, the reason why is increasing the size of the queue makes it take up more RAM space and can result in Smoothie running out of RAM, depending on your configuration and how much the rest of your modules take up space. |
| `acceleration` | 3000 | Acceleration in millimetres/second/second. Higher values make your machine faster and shakier, lower values make your machine slower and sturdier. This is generally proportional to the weight of the tool you are trying to move. |
| `alpha_acceleration` | | Acceleration in millimetres/second/second for the alpha actuator (X axis on cartesian), do not set on deltas |
| `beta_acceleration` | | Acceleration in millimetres/second/second for the beta actuator (Y axis on cartesian), do not set on deltas |
| `gamma_acceleration` | | Acceleration in millimetres/second/second for the gamma actuator (Z axis on cartesian), do not set on deltas |
| `junction_deviation` | 0.05 | Similar to the old "max_jerk", in millimeters. Defines how much the machine slows down when decelerating proportional to the vector angle of change of direction. See [here](https://github.com/grbl/grbl/blob/master/planner.c) and [here](https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8). Lower values mean being more careful, higher values means being faster and have more jerk |
| `z_junction_deviation` | 0 | Junction deviation for **Z only** moves, `-1` uses `junction_deviation`, `0` disables `junction_deviation` on z moves. Do not set this value if you use a delta arm solution. |
| `minimum_planner_speed` | 0 | Sets the minimum planner speed in millimetres/sec. This is the lowest speed the planner will ever set a move to. Not generally useful. |
| `microseconds_per_step_pulse` | 1 | Duration of step pulses to the stepper motor drivers, in microseconds. Actual step pulse is generally 2us above this (so 1 will actually be 2-3us). Setting this over about 8us will cause severe issues with step generation |
| `base_stepping_frequency` | 100000 | Base frequency for stepping, higher values gives smoother movement. Do not modify unless you know exactly what you are doing, 100khz is the only officially supported value. |
