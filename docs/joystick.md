

# Joystick Module

{::nomarkdown}
<a href="/images/joystick.png">
  <img src="/images/joystick.png" alt="Joystick Module" width="200" height="200" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

## What is Joystick?

Joystick is a module for SmoothieBoard which adds the ability to use joysticks with your machine.

It is much like the [Switch](switch) module, but can read from things which output an [analog](https://learn.sparkfun.com/tutorials/analog-vs-digital) voltage (things like joysticks, sliders, knobs, force sensitive resistors, etc).

Some possible uses for the Joystick module:
- Moving your machine to set up the part origin (see [jogging](#jogging))
- Retracting an extruder on a 3D-printer
- Focusing a laser cutter
- Manually overriding your machine's speed with a knob/slider (see [feed rate override](#fro))
- Controlling spindle speed with a knob on a mill

## Getting Started

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Work in Progress:</strong> Note this page is a work in progress and the joystick functionality is not yet released in smoothieware. To test it you need to use pull request <a href="https://github.com/Smoothieware/Smoothieware/pull/1122">Smoothieware#1122</a>, and instructions on how to test a Pull request are here <a href="third-party-branches#checking-out-pull-requests">Checking out pull requests</a>
</sl-alert>

### Hardware Requirements

{::nomarkdown}
<div style="text-align: center;">
  <a href="/images/joystick.png"><img src="/images/joystick.png" alt="Joystick" width="150" style="display: inline-block; margin: 0.5rem;"/></a>
  <a href="/images/sparkfun_joystick.jpg"><img src="/images/sparkfun_joystick.jpg" alt="Sparkfun Joystick" width="150" style="display: inline-block; margin: 0.5rem;"/></a>
  <a href="/images/sparkfun_slider.jpg"><img src="/images/sparkfun_slider.jpg" alt="Sparkfun Slider" width="150" style="display: inline-block; margin: 0.5rem;"/></a>
</div>
{:/nomarkdown}

To begin, you will need a device that you want to read. Some example devices are shown here, but really any variable resistor (potentiometer) or device that outputs 0-3.3 V should work.

For more information on how potentiometers work, see [SparkFun's tutorial](https://learn.sparkfun.com/tutorials/voltage-dividers/).

For the rest of the document, the examples will be for a 2-axis joystick like in the right-most picture. This joystick has two separate potentiometers for each axis, and has springs inside to return the knob to the center when released (think PlayStation controller knob).

### Connections

If you have a potentiometer, you will need to connect one side to 3.3 V, the other side to ground, and the wiper to a pin on the SmoothieBoard which supports analog reading (see table below).

{::nomarkdown}
<div style="text-align: center;">
  <a href="/images/potentiometer-schematic.png">
    <img src="/images/potentiometer-schematic.png" alt="Potentiometer Schematic" width="400"/>
  </a>
</div>
{:/nomarkdown}

The above image shows a basic schematic of a potentiometer.

Pins 1 and 3 are the ends of the potentiometer, and Pin 2 is the wiper.

Vin should be 3.3 V for the SmoothieBoard, and Pin 2 will be connected to a compatible pin on the SmoothieBoard (see table below).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Caution:</strong> Use caution when connecting a potentiometer to your SmoothieBoard. If Vin is a higher voltage than the SmoothieBoard's pins can handle (-0.5 to 5.1 V for > 10 ms), you might ruin your board. Use Vin = 3.3 V unless you know what you are doing.
</sl-alert>

The analog pins on the SmoothieBoard which can be connected to a wiper (Pin 2 in above schematic) are shown in the table below:

| Analog Pin | Smoothie Assignment | Comments |
| ---------- | ------------------- | -------- |
| 0.2 | uart0 txd | Not recommended (used for ISP programming of the bootloader and for debugging) |
| 0.3 | uart0 rxd | Not recommended (used for ISP programming of the bootloader and for debugging) |
| 0.23 | hotend.thermistor_pin | Not recommended (used for thermistors and has built-in 4.7 kΩ pull-up) |
| 0.24 | bed.thermistor_pin | Not recommended (used for thermistors and has built-in 4.7 kΩ pull-up) |
| 0.25 | thermistor2 | Not recommended (used for thermistors and has built-in 4.7 kΩ pull-up) |
| 0.26 | thermistor3 | Not recommended (used for thermistors and has built-in 4.7 kΩ pull-up) |
| **1.30** | spare | Recommended pin |
| **1.31** | spare | Recommended pin |

See [Pinout](pinout) for a diagram of the SmoothieBoard with the pins labeled.

For a joystick, you will need to connect each wiper (the left/right and up/down) to different analog pins (e.g. 1.30 and 1.31).

{::nomarkdown}
<img src="/images/missing.png" alt="" width=100>
{:/nomarkdown}
<!-- LED
{::nomarkdown}
<img src="/images/joystick/joystick_connections.png" alt="Joystick Connections" width="400"/>
{:/nomarkdown}
-->

## Configuration

### Mapping Voltage to Position
The configuration file, at its most basic level, must tell the SmoothieBoard how to convert the 0 to 3.3 V that it reads into a more useful range of numbers. The range that the Joystick module uses is -1 to 1. It is also possible to use a 0 to 1 range if negative values don't make sense for your application.

The way the Joystick module performs this conversion is to first measure the voltage coming in. The module then subtracts off an offset, called `zero_offset`. The module then scales the voltage reading so that the `zero_offset` voltage becomes 0, and the `endpoint` voltage becomes 1 or -1 (depends on if `endpoint` is greater or less than `zero_offset`). Any values which end up outside the -1 to 1 range are fixed to be at +/- 1.

<div align="center">
<img src="/images/missing.png" alt="Joystick Mapping">
<!-- LED
{::nomarkdown}
<img src="/images/joystick/joystick_mapping_diagram.png" alt="Joystick Mapping Diagram" width="1000"/>
{:/nomarkdown}
-->
Example Mapping from joystick position to output with `zero_offset` = 1.5 V and `endpoint` = 0 V
</div>

### Auto-Zeroing

The joystick module has an optional feature which automatically determines `zero_offset`.

For a short period of time (`startup_time`) after the SmoothieBoard is powered on / reset, the joystick module averages the joystick readings. The average value at the end of the startup time is used as the `zero_offset`.

This feature is useful for joysticks, where the `zero_offset` is somewhat unknown (it is usually around 1.65 V but different devices have slightly different center values).

It would not make sense to enable for sliders or knobs, since the knob doesn't have a known/default starting position.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> Be careful not to move the joystick during the <code>startup_time</code>, otherwise the <code>zero_offset</code> will be wrong and the joystick will have undesirable behavior.
</sl-alert>

### All Configuration Options

{% include_relative joystick-options.md %}

## Usage

### Jogging 
<a name='Jogging'></a>

To use the joystick for jogging, configure two different modules with two different names. For example, one module will be called "horizontal" and the other "vertical". An example config file for the joystick is shown below:

```markdown
# joystick-2D.config
joystick.horizontal.enable                     true              # enable the horizontal axis joystick
joystick.horizontal.pin                        1.30              # use pin 1.30 connected to potentiometer wiper
joystick.horizontal.endpoint                   3.20              # 3.2 V maps to +1 in joystick reading
joystick.horizontal.auto_zero                  true              # automatically determine the zero point
joystick.horizontal.startup_time               1000              # take readings for 1 second at startup to get auto-zero point
joystick.horizontal.refresh_rate               100               # update the joystick position 100 times per second
joystick.horizontal.start_value                0                 # when auto-zeroing, force joystick output to be 0

joystick.vertical.enable                       true              # enable the vertical axis joystick
joystick.vertical.pin                          1.31
joystick.vertical.endpoint                     3.20
joystick.vertical.auto_zero                    true
joystick.vertical.startup_time                 1000
joystick.vertical.refresh_rate                 100
joystick.vertical.start_value                  0
```

With the joystick configuration done, you will simply need to configure the [Jogger](jogger). The only pertinent config for the joystick/jogger connection is setting the `data_source_xxx` configs for the Jogger. An example of those options is shown below:

```markdown
# Jogger Configuration
jogger.enable                                  true
jogger.data_source_alpha                       horizontal
jogger.data_source_beta                        vertical
```

These options tell the jogger the names of the joystick modules to read when jogging.

<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  You're all set! For more jogging configuration options, see <a href="jogger">Jogger</a>.
</sl-alert>

### Feed Rate Override
<a name='fro'></a>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note:</strong> No feed rate override has been implemented in smoothie yet. The following example is purely hypothetical.
</sl-alert>

To use the joystick to override your machine's feed rate (to go faster or slower while cutting/printing), set up a single joystick axis. An example snippet of the configuration file is shown below:

```markdown
# feedrate-override.config
joystick.fro.enable                            true              # enable the feed-rate override joystick
joystick.fro.pin                               1.30              # use pin 1.30 connected to potentiometer wiper
joystick.fro.endpoint                          3.20              # 3.2 V maps to +1 in joystick reading
joystick.fro.zero_offset                       0                 # 0 V maps to 0 in joystick reading
joystick.fro.refresh_rate                      100               # update the joystick position 100 times per second
```

With the joystick properly configured, you will simply need to tell the Feed Rate Override module((Doesn't exist yet)) which joystick to read:

```markdown
# Feed Rate Override Configuration
feedoverride.data_source                       fro
```

<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  You're all set! For more feed-rate override configuration options, see <a href="feed-rate-override">Feed Rate Override</a>.
</sl-alert>

## Developer Documentation
For information on how to write your own module which uses a joystick, see the [joystick developer documentation](joystick-dev).
