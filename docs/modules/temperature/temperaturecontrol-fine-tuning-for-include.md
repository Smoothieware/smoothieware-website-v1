
# Temperature Control Fine Tuning

This page provides tips for fine-tuning temperature control settings in Smoothie.

## Common Scenarios

### Using a 12V Heater on a 24V System

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  If you are using a 12V heater on a 24V system, you need to limit the PWM duty cycle to prevent damage.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<review id="temperaturecontrol-fine-tuning:12v-on-24v-config">
<proposal>
{:/nomarkdown}

You need to set {::nomarkdown}<setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>{:/nomarkdown} to {::nomarkdown}<raw>64</raw>{:/nomarkdown}:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```plaintext
temperature_control.hotend.max_pwm 64
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[temperature control]
hotend.max_pwm = 64
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

You need to set {::nomarkdown}<setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>{:/nomarkdown} to {::nomarkdown}<raw>64</raw>{:/nomarkdown}:

```plaintext
temperature_control.hotend.max_pwm 64
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Fixing Temperature Overshoot (10°C or More)

If you are getting 10°C or more initial overshoot of temperature, you can set {::nomarkdown}<setting v1="temperature_control.{name}.i_max" v2="temperature control.i_max"></setting>{:/nomarkdown} to a lower value (default is {::nomarkdown}<setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>{:/nomarkdown}).

{::nomarkdown}
<review id="temperaturecontrol-fine-tuning:overshoot-config">
<proposal>
{:/nomarkdown}

{::nomarkdown}<raw>128</raw>{:/nomarkdown} seems to be a good value, but it can be tuned with {::nomarkdown}<mcode>M301</mcode>{:/nomarkdown} S0 Xnnn where {::nomarkdown}<raw>nnn</raw>{:/nomarkdown} is a number less than or equal to {::nomarkdown}<setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>{:/nomarkdown}:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```plaintext
temperature_control.hotend.i_max 128
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[temperature control]
hotend.i_max = 128
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

{::nomarkdown}<raw>128</raw>{:/nomarkdown} seems to be a good value, but it can be tuned with {::nomarkdown}<mcode>M301</mcode>{:/nomarkdown} S0 Xnnn where {::nomarkdown}<raw>nnn</raw>{:/nomarkdown} is a number less than or equal to {::nomarkdown}<setting v1="temperature_control.{name}.max_pwm" v2="temperature control.max_pwm"></setting>{:/nomarkdown}:

```plaintext
temperature_control.hotend.i_max 128
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Setting Maximum Safe Temperature

To avoid accidental setting of too high a temperature, you can set {::nomarkdown}<setting v1="temperature_control.{name}.max_temp" v2="temperature control.max_temp"></setting>{:/nomarkdown} to the maximum temp that is safe for the target heater.

This will ignore any setting of temperatures that are higher than this and instead set the temp to {::nomarkdown}<setting v1="temperature_control.{name}.max_temp" v2="temperature control.max_temp"></setting>{:/nomarkdown}.

It will also trigger a shutdown if this temperature is exceeded.

{::nomarkdown}
<review id="temperaturecontrol-fine-tuning:max-temp-config">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```plaintext
temperature_control.hotend.max_temp 230
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[temperature control]
hotend.max_temp = 230
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

```plaintext
temperature_control.hotend.max_temp 230
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Related Documentation

For more information on temperature control, see:

- [Temperature Control Module](temperaturecontrol) - Main temperature control documentation
- [PID Tuning](pid-tuning) - Detailed PID tuning guide
- [Configuration Options](configuration-options) - All configuration options
