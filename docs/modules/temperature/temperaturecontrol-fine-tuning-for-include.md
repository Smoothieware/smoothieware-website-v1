
# Temperature Control Fine Tuning

This page provides tips for fine-tuning temperature control settings in Smoothie.

## Common Scenarios

### Using a 12V Heater on a 24V System

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  If you are using a <raw>12V</raw> heater on a <raw>24V</raw> system, you need to limit the PWM duty cycle to prevent damage.
</sl-alert>
{:/nomarkdown}

You need to set <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting> to <raw>64</raw>:

```plaintext
temperature_control.hotend.max_pwm 64
```

### Fixing Temperature Overshoot (10°C or More)

If you are getting 10°C or more initial overshoot of temperature, you can set <setting v1="temperature_control.{name}.i_max" v2="temperature control.i_max"></setting> to a lower value (default is <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>).

<raw>128</raw> seems to be a good value, but it can be tuned with <mcode>M301 S0 Xnnn</mcode> where <raw>nnn</raw> is a number less than or equal to <setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>:

```plaintext
temperature_control.hotend.i_max 128
```

### Setting Maximum Safe Temperature

To avoid accidental setting of too high a temperature, you can set <setting v1="temperature_control.{name}.max_temp" v2="temperature control.max_temp"></setting> to the maximum temp that is safe for the target heater.

This will ignore any setting of temperatures that are higher than this and instead set the temp to <setting v1="temperature_control.{name}.max_temp" v2="temperature control.max_temp"></setting>.

It will also trigger a shutdown if this temperature is exceeded.

```plaintext
temperature_control.hotend.max_temp 230
```

## Related Documentation

For more information on temperature control, see:

- [Temperature Control Module](temperaturecontrol) - Main temperature control documentation
- [PID Tuning](pid-tuning) - Detailed PID tuning guide
- [Configuration Options](configuration-options) - All configuration options
