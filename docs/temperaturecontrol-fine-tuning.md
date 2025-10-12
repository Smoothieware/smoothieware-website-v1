# Temperature Control Fine Tuning

This page provides tips for fine-tuning temperature control settings in Smoothie.

## Common Scenarios

### Using a 12V Heater on a 24V System

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  If you are using a 12V heater on a 24V system, you need to limit the PWM duty cycle to prevent damage.
</sl-alert>

You need to set `max_pwm` to 64:

```plaintext
temperature_control.hotend.max_pwm 64
```

### Fixing Temperature Overshoot (10°C or More)

If you are getting 10°C or more initial overshoot of temperature, you can set `i_max` to a lower value (default is `max_pwm`).

128 seems to be a good value, but it can be tuned with `M301 S0 Xnnn` where `nnn` is a number less than or equal to `max_pwm`:

```plaintext
temperature_control.hotend.i_max 128
```

### Setting Maximum Safe Temperature

To avoid accidental setting of too high a temperature, you can set `max_temp` to the maximum temp that is safe for the target heater.

This will ignore any setting of temperatures that are higher than this and instead set the temp to `max_temp`.

It will also trigger a shutdown if this temperature is exceeded.

```plaintext
temperature_control.hotend.max_temp 230
```

## Related Documentation

For more information on temperature control, see:

- [Temperature Control Module](temperaturecontrol) - Main temperature control documentation
- [PID Tuning](pid-tuning) - Detailed PID tuning guide
- [Configuration Options](configuration-options) - All configuration options
