# Digital current control

{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="Current Control" width="150" height="150" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Boards based on Smoothie use digital potentiometers instead of manual potentiometers.

Instead of using a screwdriver to set the current value for the stepper motor driver (which can be quite imprecise), you simply set the value in the configuration file.

This provides precise and repeatable current settings for your stepper motors.

These are the names of the different stepper motors/drivers, and the corresponding values to change:

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  These designations are hard coded to M1-M5 and do not track any changes that may have been made to the pin mapping for the motors.
</sl-alert>
{:/nomarkdown}

| Label on the Smoothieboard | M1 | M2 | M3 | M4 | M5 |
| -------------------------- | -- | -- | -- | -- | -- |
| Axis in a cartesian machine | **X** (left-right) | **Y** (front-back) | **Z** (up-down) | **E0** (first extruder) | **E1** (second extruder) |
| Greek letter | α (alpha) | β (beta) | γ (gamma) | δ (delta) | ε (epsilon) |
| Current setting configuration option | alpha_current | beta_current | gamma_current | delta_current | epsilon_current |

## Setting Current Values

The value is in Amperes and is generally found on the motor itself or in its datasheet.

You can find and set these values in the [configuration file](configuring-smoothie).

They are found near the other values for a given axis.

For example:

```plaintext
beta_step_pin                                2.1              # Pin for beta stepper step signal
beta_dir_pin                                 0.11             # Pin for beta stepper direction
beta_en_pin                                  0.10             # Pin for beta enable
beta_current                                 1.5              # Y stepper motor current
beta_max_rate                                30000.0          # mm/min
```

The current can also be set using `M907` where XYZ set the current for alpha, beta, gamma, and ABC set the current for delta, epsilon, and zeta respectively.

These are saved with `M503` in the config-override, use `M503` to see the current setting.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  On Smoothieboards that use an I2C based current controller, it is **NOT** recommended to issue `M907` in GCode files.
</sl-alert>
{:/nomarkdown}

## External resources

{::nomarkdown}
<div style="text-align: center;">
  <iframe width="100%" height="720" src="https://www.youtube.com/embed/bItYRMLGoVc" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}
