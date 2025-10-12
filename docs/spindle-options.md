
> [!NOTE]
> This part of the documentation is deprecated. Please refer to the [spindle module page](spindle-module) instead.

| Parameter               | Value   | Description |
| ----------------------- | ------- | ----------- |
| `spindle_enable`        | true    | If set to true, enables the Spindle module, which uses an encoder to PID-control a PWM-modulated spindle motor |
| `spindle_pwm_pin`       | `2.4`   | Output PWM pin (uses hardware PWM). Note: hardware PWM is available only on pins `2.0` to `2.5`, `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`, `3.25` and `3.26` |
| `spindle_pwm_period`    | 100     | PWM period to use in microseconds |
| `spindle_feedback_pin`  | `2.6`   | Feedback input pin (must be Port 0 or 2, meaning the pin number must be `2.x` or `0.x`) |
| `spindle_pulses_per_rev`| 3       | Number of feedback pulses per revolution on the feedback input pin |
| `spindle_default_rpm`   | 5000    | RPM to use if none given in M3 command, in rotations/minute |
| `spindle_control_P`     | 0.0002  | PID P factor (unit is 1 / RPM) |
| `spindle_control_I`     | 0.0001  | PID I factor (unit is 1 / ( RPM x seconds )) |
| `spindle_control_D`     | 0.000001| PID D factor (unit is 1 / (R PM / seconds )) |
