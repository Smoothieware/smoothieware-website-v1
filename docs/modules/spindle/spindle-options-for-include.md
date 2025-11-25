
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
| ----------------------- | :-------: | ----------- |
| {::nomarkdown}<setting v1="spindle_enable"></setting>{:/nomarkdown}        | {::nomarkdown}<raw>true</raw>{:/nomarkdown} | If set to true, enables the Spindle module, which uses an encoder to PID-control a PWM-modulated spindle motor |
| {::nomarkdown}<setting v1="spindle_pwm_pin"></setting>{:/nomarkdown}       | {::nomarkdown}<pin>2.4</pin>{:/nomarkdown}   | Output PWM pin (uses hardware PWM). Note: hardware PWM is available only on pins {::nomarkdown}<pin>2.0</pin>{:/nomarkdown} to {::nomarkdown}<pin>2.5</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.18</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.20</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.21</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.23</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.24</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.26</pin>{:/nomarkdown}, {::nomarkdown}<pin>3.25</pin>{:/nomarkdown} and {::nomarkdown}<pin>3.26</pin>{:/nomarkdown} |
| {::nomarkdown}<setting v1="spindle_pwm_period"></setting>{:/nomarkdown}    | {::nomarkdown}<raw>100</raw>{:/nomarkdown} | PWM period to use in microseconds |
| {::nomarkdown}<setting v1="spindle_feedback_pin"></setting>{:/nomarkdown}  | {::nomarkdown}<pin>2.6</pin>{:/nomarkdown}   | Feedback input pin (must be Port 0 or 2, meaning the pin number must be `2.x` or `0.x`) |
| {::nomarkdown}<setting v1="spindle_pulses_per_rev"></setting>{:/nomarkdown}| {::nomarkdown}<raw>3</raw>{:/nomarkdown} | Number of feedback pulses per revolution on the feedback input pin |
| {::nomarkdown}<setting v1="spindle_default_rpm"></setting>{:/nomarkdown}   | {::nomarkdown}<raw>5000</raw>{:/nomarkdown} | RPM to use if none given in {::nomarkdown}<mcode>M3</mcode>{:/nomarkdown} command, in rotations/minute |
| {::nomarkdown}<setting v1="spindle_control_P"></setting>{:/nomarkdown}     | {::nomarkdown}<raw>0.0002</raw>{:/nomarkdown} | PID P factor (unit is 1 / RPM) |
| {::nomarkdown}<setting v1="spindle_control_I"></setting>{:/nomarkdown}     | {::nomarkdown}<raw>0.0001</raw>{:/nomarkdown} | PID I factor (unit is 1 / ( RPM x seconds )) |
| {::nomarkdown}<setting v1="spindle_control_D"></setting>{:/nomarkdown}     | {::nomarkdown}<raw>0.000001</raw>{:/nomarkdown} | PID D factor (unit is 1 / (R PM / seconds )) |
