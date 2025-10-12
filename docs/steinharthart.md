
To add a new thermistor, you need to calculate the Steinhart Hart coefficients and then enter them into the [configuration file](http://smoothieware.org/configuring-smoothie.md) or using `M305` and save with `M500`.

This can be done by adding this to the configuration:

```plaintext
temperature_control.hotend.rt_curve          20.0,126800,150,1360,240,206.5
```

Where the 6 numbers are temperature/resistance pairs for three sets of readings.

Here: 126800Ω at 20°C, 1360Ω at 150°C, and 206.5Ω at 240°C

It is best to use the resistance of the thermistors at temperatures around 25, 150, 250 degrees C.

These can be measured empirically or taken from the R-C tables that most thermistor data sheets contain.

Alternatively, you can calculate the coefficients with a smoothie command and enter them using **M305** as shown below.

At a command prompt (or in [pronterface](pronterface) prefix with @) type:

```plaintext
calc_thermistor 25,100000.0,150,1655.0,240,269.0
```

When you issue this command, you get an answer like:

```plaintext
Steinhart Hart coefficients:  I0.000722376862540841 J0.000216302098124288 K0.000000092640163984
  Paste the above in the M305 S0 command, then save with M500
```

So either issue the command...

`M305 S0 I0.000722376862540841 J0.000216302098124288 K0.000000092640163984`

and save with `M500` to the config-override file.

Or enter them in the config:

```plaintext
temperature_control.hotend.coefficients 0.000722376862540841,0.000216302098124288,0.000000092640163984
```

Another alternative is to issue the command:

```plaintext
calc_thermistor -s0 25,100000.0,150,1655.0,240,269.0
```

This will set the specified thermistor (0 is hotend) to the calculated values, which can then be saved with `M500`.

This will set up the new thermistor using the Steinhart Hart Equation to convert resistance to temperature.

You can still use beta to calculate the temperature, but if you use the published beta numbers for most thermistors, the readings will be around 7-10 degrees higher than the actual temperature as the betas are for the 0-80 range rather than the 185-230 range you print at.

(Using beta for the bed is fine as that is within the temperature range of the published betas).

If there is a beta specified in the config, that will be used unless overridden by `M500`. `M503` will show an `M305` command if there is an override active.

Predefined thermistors for which the new Steinhart Hart Coefficients are known will use them, the older predefined ones will continue to use Beta.

You can force smoothie to continue to use the old beta settings for all predefined thermistors by setting:

```plaintext
temperature_control.hotend.use_beta_table  true    # force predefined thermistors to use the old beta values
```
