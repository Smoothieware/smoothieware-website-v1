
# Temperaturecontrol

This module reads temperature reading sensors (thermistors) and uses heater and cooler elements to maintain a set temperature.

This is used for example for [extruder](extruder.md) hotends, or heated beds.

![A hotend](/images/external/http.1.bp.blogspot.com.00qoc.wajma.ulwmttgrjdi.aaaaaaaaaim.bpogqugsfzu.s1600.v.and.vb.jpg)

This is a J-head hotend with its thermistor and heating element.

## Multiple modules

In Smoothie, you do not get just one TemperatureControl module. You can actually create as many as you want, simply by adding them to the [configuration file](http://smoothieware.org/configuring-smoothie.md).

It goes something like this:

```markdown
temperature_control.hotend.enable                    true
temperature_control.hotend.thermistor_pin            0.23
etc ...

temperature_control.bed.enable                       true
temperature_control.bed.thermistor_pin               0.24
etc ...
```

This will create and configure two separate TemperatureControl modules that will act completely independently from each other.

The line that effectively "creates" the module is the `enable` option. If set to true, a module is created and further configuration is read. If set to false, further configuration for this module is ignored as no module is created.

In the **Configuration** section below, the first two parts (`temperature_control.module_name`) of the configuration are sometimes omitted for conciseness, but have to be added in your actual configuration file ([see example](http://smoothieware.org/configuring-smoothie.md)).

## Configuration

### Reading temperatures

To reach a desired temperature, you must be able to know what the current temperature is. This is done using a [Thermistor](http://reprap.org/wiki/Thermistor) connected to an [ADC](http://en.wikipedia.org/wiki/Analog-to-digital_converter) on the controller board, or a [Thermocouple](http://en.wikipedia.org/wiki/Thermocouple).

#### Thermistor

A given controller board only has a given number of [ADCs](http://en.wikipedia.org/wiki/Analog-to-digital_converter) (analog (temperature) to digital (Smoothie) converter) capable pins.

On the [Smoothieboard](smoothieboard.md) for example, there are 4 thermistor inputs, labelled from **T0** (or th1) to **T3** (or th4), and corresponding in the same order to the pins **0.23** to **0.26**. T0 is usually used for the hotend, and T1 for the bed.

Thermistor inputs are not polarized, the direction you connect them in on your board is not important.

```markdown
temperature_control.hotend.thermistor_pin        0.23
```

| Smoothieboard thermistor input name | T0 (th1) | T1 (th2) | T2(th3) | T3(th4) |
| ----------------------------------- | -------- | -------- | ------- | ------- |
| Pin for configuration               | 0.23     | 0.24     | 0.25    | 0.26    |

> [!WARNING]
> You read the value of the thermistor inputs by sending the `M105` command.
>
> If you receive a value of `inf` for an input, for example:
>
> ```markdown
> ok T :inf /0.0 @0 B:24.1 /0.0 @
> ```
>
> It means the sensor is not properly connected, or it is damaged in some way.

##### Choosing the right thermistor

{% include_relative temperaturecontrol-thermistor-choice.md %}

#### PT100

Note PT100 as used by the e3d amplifier is supported in current edge, but not in the current pre-built binary firmware.

##### Configuration and usage

{% include_relative PT100.md %}

#### Thermocouple via SPI

Thermocouples are currently supported by connecting a MAX31855 chip to one of the [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface) channels. Thermocouples give a stable measurement over a wide temperature range, and can typically withstand higher temperatures than thermistors.

Note: the MAX31855 does not like having the thermocouple electrically connected to ground, and will flag an error if this happens. Make sure your thermocouple is isolated. If you must use a non-isolated thermocouple, try the AD8495 analog amplifier instead (see next section).
Note: Connecting a thermocouple and a RRD GLCD panel to the same SPI bus does not work.
Note: you need the latest edge build if you want to have multiple Thermocouples on the SPI bus.
Note: As of 2/13/2018, the max31855 module does not work when configured without a heater pin

Here is an example of how to connect the [Adafruit Thermocouple Amplifier MAX31855 breakout board](http://www.adafruit.com/products/269) to the Smoothieboard.

| Smoothieboard | Breakout board |
| ------------- | -------------- |
| 3v3           | Vin            |
| GND           | GND            |
| `0.16` CS     | CS             |
| `0.18` MOSI   | Not used       |
| `0.15` SCK    | CLK            |
| `0.17` MISO   | DO             |

To configure Smoothie to use the thermocouple connected like this, replace the thermistor and thermistor_pin parameters with the following:
```markdown
temperature_control.hotend.sensor        max31855
```

The SPI channel and chip select pin can be changed using the following parameters:
```markdown
temperature_control.hotend.chip_select_pin    0.16
temperature_control.hotend.spi_channel         0    # SPI channel 0 or 1
```

Note that when using max31855, you need to reduce the frequency at which temperatures are read. This is due to a limitation in the amplifier. For more information see [this pull request](https://github.com/Smoothieware/Smoothieware/pull/891).

There is a quirk to the max31855 and max6675 chips: They take 100 and 220 milliseconds, respectively, to perform the temp conversion. Sampling them faster than this will interrupt the conversion process, causing the chip to return the same value every for every subsequent sampling. To resolve that issue, readings_per_second should be 9 for the max31855 and 4 for the max6675.

```markdown
temperature_control.module_name.readings_per_second      4
```

#### Thermocouple via Amplifier

Smoothie supports reading thermocouples via an ADC (the same kind used to read thermistors) if the analog value is converted by the [AD8495](https://www.adafruit.com/product/1778) thermocouple amplifier.

This allows you to read values from a thermocouple without having to use a SPI port.

To use the AD8495, you need to set the right sensor type:

```markdown
temperature_control.hotend.sensor    ad8495
```

And then configure the pin you'll be using to read the sensor:

```markdown
temperature_control.hotend.ad8495_pin   0.24
```

And the offset. This will depend on the AD8495 wiring. If the REF pin(pin 2) is connected to ground or 0V then the offset is 0. This means that Smoothie can measure 0C to 660C, depending on thermocouple. If, like the Adafruit board, the REF pin is connected to 1.25V then the offset is 250. With a 250 offset, Smoothie can measure -250C to 410C. The formula for calculating offset is offset = REF/0.005. The simplest way to see if the offset is set incorrectly is that the temperature reading at room temperature will be wrong.

NOTE from a community member: The AD8495 needs a GND and VCC. Using either GND or AGND from the Smoothieboard seems to work. Unclear which is preferred (if you know, please update this note!).

```markdown
temperature_control.hotend.ad8495_offset   250
```

### Heating things up.

To reach the desired temperature, you need a means of changing the temperature. This is usually done by letting current through:

* Resistors
* Heater cartridges
* PCB, kapton or silicone heater plates

This is for example how hotends or heated beds are heated to their target temperature.

The component turning the current on and off can be a [mosFET](http://en.wikipedia.org/wiki/MOSFET) (like on [Smoothieboard](smoothieboard.md)) or a [Solid-State Relay](https://en.wikipedia.org/wiki/Solid-state_relay) for example.

This is controlled from the board running Smoothie using a GPIO pin.

In the case of mosfets, on a [Smoothieboard](smoothieboard.md), a given pin is connected to a given mosfet, and you have to use that specific pin to control that specific mosfet.

See this schematic below or on the [Smoothieboard](smoothieboard.md) page to see what mosfet corresponds to what pin.

![Mosfet inputs and outputs](/images/smoothieboard-graphics/schematics/mosfet-input-output.svg.png)

Read more about the mosfets [here](http://smoothieware.org/mosfets.md)

To set a pin to a given heater, do for example:

```markdown
temperature_control.hotend.heater_pin        2.7
```

**Note on pins:**

{% include_relative pin-configuration.md %}

### Controlling with G-codes

By default, Smoothie will not heat anything. That could be a dangerous thing to do unwatched.

You have to send [G-codes](http://reprap.org/wiki/G-code) to turn your heater on and off, set a given temperature etc.

There is a set of widely used G-codes corresponding to different usual actions (for example setting the hotend temperature is `M104` in the [Reprap](http://reprap.org) world).

But as you are defining your own custom temperature controller, you have to choose what gcode will be used to control it, Smoothie doesn't know what exactly it's controlling.

So for example if this is a hotend, it will look something like this for the "standard" gcodes:

```markdown
temperature_control.hotend.set_m_code            104
temperature_control.hotend.set_and_wait_m_code   109
```

`set_m_code` is used to set a given temperature, and continue running Smoothie immediately. `set_and_wait_m_code` is used to set a given temperature, and then pause Smoothie until that temperature is reached.

### Reading with G-code

There is a single g-code used to read temperature for all the temperature_control modules at the same time: `M105`

But it has to have a way to tell you what temperature corresponds to what specific module.

There is a standard format for this which was used before Smoothie and still is today:

```markdown
ok T:22.1 /0.0 @0 B:22.5 /75.0 @210
```

Here T is the hotend, and B is the bed. This is a convention. But in your configuration, we have to specify which is which:

```markdown
temperature_control.hotend.designator        T
```

### Bang Bang Control

The simplest form of heat control is called bang bang this simply turns the heater on or off depending on whether it is under or over the target temperature (plus some hysteresis).
This is best used for high amp beds using a relay to turn it on and off.

to enable this form of control in the config define the following...
```markdown
temperature_control.bed.bang_bang            true            # set to true to use bang bang control rather than PID
temperature_control.bed.hysteresis            2.0              # set to the temperature in degrees C to use as hysteresis when
```

Example: If you set your temperature to 50 degrees, and your hysterisis is 2 degrees, then the heaters will turn on if the temperature is below 48 degrees, and off if the temperature is above 52 degrees.

The default form of heater control is PID.

### PID

{% include_relative temperaturecontrol-pid.md %}

### PID autotuning

{% include_relative temperaturecontrol-pid-autotuning.md %}

### Fine Tuning

{% include_relative temperaturecontrol-fine-tuning.md %}

## Safety

This module controls temperature by actuating heating elements. Heat, if left unchecked, causes fire.

Fires are painful, expensive, and can even cause death.

You definitely should set up as many safety features as you can, even those that are disabled by default. This section explains how to do so.

> [!DANGER]
> This can happen to you
>
> ![Fire](/_media///external/http.chibidibidiwah.wdfiles.com.local.files.temperaturecontrol.fire.jpg)
>
> It has already been known to happen to Reprap/CNC enthusiasts. For an example see [here](http://www.soliforum.com/post/57749/#p57749).

This chapter covers all of the safety features, and how to set them up if needed.

### Thermistor disconnect

If a thermistor is disconnected from its thermistor input (cable gets cut, connector falls), Smoothie can detect the problem by itself, as this causes a recognizably different input.

When this happens, Smoothie will detect the problem, turn off all heaters, and enter the [HALT state](http://smoothieware.org/stopping-smoothie.md). It will also show you the following message:

```markdown
Temperature reading is unreliable on T, HALT asserted - reset or M999 required
```

You need to solve the issue, and then either reset the board or issue the `M999` command.

You do not need to do anything to activate this safety check.

### Watchdog

The watchdog is a peripheral inside the microcontroller. Smoothie must tell it « Hey, I'm alive and I have not crashed » on a regular basis.

If Smoothie stops doing that, the watchdog knows Smoothie has crashed, and resets the board, which turns all heaters off.

This ensures that if the firmware crashes, your board's heaters turn off, and everything is safe.

You do not need to do anything to activate this, it is on by default.

### Maximum temperature detection

You activate this safety check (and you should) by adding the following to your configuration:

```markdown
temperature_control.module_name.max_temp      300
```

Once this is set, it will be impossible to set temperatures higher than the `max_temp` value.

Also, if the temperature reaches this `max_temp` temperature, Smoothie will turn off all heaters, go into HALT state, and print out the following message:

```markdown
Error: MINTEMP or MAXTEMP triggered on T. Check your temperature sensors!
HALT asserted - reset or M999 required
```

You need to solve the issue, and then either reset the board or issue the `M999` command.

The most likely cause for this problem is that a heater mosfet is stuck being always active. If this is the case, Smoothie cannot control that heater anymore, and nothing the firmware can do can solve the issue, and you are on your way to a fire.

This is why you need to give Smoothie a second way to cut power: either by having a signal that allows you to turn the power supply off, or a solid-state relay capable of cutting all power to all mosfets. See documentation below for how to achieve this.

### Runaway detection

We call "temperature runaway" a phenomenon where Smoothie tries to control temperature, but for some reason the temperature increases out of control.

There are several ways this can happen:

* The thermistor is disconnected from the heater block, so the thermistor is reading room temperature, and keeps heating to try to reach its target.
* The mosfet or solid-state relay controlling the heater is stuck always letting power pass through, this causes temperature to increase even when Smoothie does not ask for temperature to increase.

**NOTE** This is now enabled by default in newer versions of edge, the timeout is set pretty high (900 seconds), it can be disabled by setting the values below to 0.

#### Initial heat-up runaway detection

To detect if the thermistor is disconnected during the initial heat-up (temperature increasing until it reaches its target), we need to define how long it should take for temperature to increase to the target. And if the temperature takes too long to reach this target, we know something is wrong (likely the thermistor is detached from the heating element).

To configure this value, we first need to ask the machine to heat-up, and use a timer to know how long it takes. For example, a given hotend could take 100 seconds to heat up.
Then, we add a margin to this, for example 20%, and we say that if the hotend takes more than 120 seconds to heat up, something is wrong.

Now that you have a reasonable safety value, add the `runaway_heating_timeout` option to your configuration file:

```markdown
temperature_control.module_name.runaway_heating_timeout      120 # max is 4088 seconds
```

Now, if heating ever takes longer than 120 seconds, Smoothie will know there is a problem, enter HALT state, turn off heaters, and show the following message:

```markdown
Error: Temperature too long to be reached on T, HALT asserted, TURN POWER OFF IMMEDIATELY - reset or M999 required
```

You can disable this by setting it to 0.

Please note that if your PID settings are not correctly tuned, this can get activated by accident because of the "swings" un-tuned temperature curves can have. Please tune your PID settings before activating this feature.

If the Smoothieboard is being a bit too strict with detecting the temperatures, you can add `runaway_error_range` as a parameter (optional), it is 1° by default meaning acceptable temperature detected can be +/- 1° of the set temp. If your printer tends to not stick close enough to the right temperature, increase this value. It only applies to the heat up and cool down timeouts.

> [!WARNING]
> Cool down timeout
>
> **NOTE** If you set `runaway_cooling_timeout` then understand that if you set a bed temp when the bed is already hotter than the setting it will need to cool down within the time period you set. If the bed has a lot of thermal mass then this may take a long time or actually never happen, and a timeout will occur eventually. This is why it is disabled by default. However, if you do reduce the bed temperature during a print you **MUST** set this value otherwise you will get a runaway detection error if the new temp is lower than the current temp. This is also true of setting the hotend temperature lower while printing, then you also need to set this timeout correctly.

#### Out of range runaway detection

This safety feature allows to detect if the current temperature