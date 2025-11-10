
# Spindle Options (Deprecated)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Deprecated Documentation</strong>
  <br><br>
  This part of the documentation is deprecated. Please refer to the <a href="spindle-module">spindle module page</a> instead for current information.
</sl-alert>
{:/nomarkdown}

## Configuration Options

The following table lists the deprecated configuration options for the old spindle module:

| Parameter               | Value   | Description |
| ----------------------- | ------- | ----------- |
| <setting v1="spindle_enable"></setting>        | true    | If set to true, enables the Spindle module, which uses an encoder to PID-control a PWM-modulated spindle motor |
| <setting v1="spindle_pwm_pin"></setting>       | `2.4`   | Output PWM pin (uses hardware PWM). Note: hardware PWM is available only on pins `2.0` to `2.5`, `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`, `3.25` and `3.26` |
| <setting v1="spindle_pwm_period"></setting>    | 100     | PWM period to use in microseconds |
| <setting v1="spindle_feedback_pin"></setting>  | `2.6`   | Feedback input pin (must be Port 0 or 2, meaning the pin number must be `2.x` or `0.x`) |
| <setting v1="spindle_pulses_per_rev"></setting>| 3       | Number of feedback pulses per revolution on the feedback input pin |
| <setting v1="spindle_default_rpm"></setting>   | 5000    | RPM to use if none given in M3 command, in rotations/minute |
| <setting v1="spindle_control_P"></setting>     | 0.0002  | PID P factor (unit is 1 / RPM) |
| <setting v1="spindle_control_I"></setting>     | 0.0001  | PID I factor (unit is 1 / ( RPM x seconds )) |
| <setting v1="spindle_control_D"></setting>     | 0.000001| PID D factor (unit is 1 / (R PM / seconds )) |
