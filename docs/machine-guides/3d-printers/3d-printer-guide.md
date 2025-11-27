---
permalink: /3d-printer-guide
---


# Your guide to installing Smoothieboard in a 3D printer

{::nomarkdown}
<a href="/images/guide-3d-printer.png">
  <img src="/images/guide-3d-printer.png" alt="3D printer icon" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Probably the machine for which Smoothie is most used, due to Smoothie's roots in the [RepRap](http://reprap.org/wiki/Main_Page) project, 3D printers are fairly simple to Smoothiefy.

This is a step-by-step guide to connecting your board to the various components of the 3D printer, configuring everything, from the beginning to actual printing.

This guide is a [community](/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

On a typical 3D printer setup, installing a Smoothieboard will mean you do the following things: 

{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing" style="float: right; margin-left: 1rem; width: 500px;"/>
</a>
{:/nomarkdown}

* Read all of the guide before you start, best way to avoid mistakes
* Install some [Software](software) to talk to your board
* Install the [Windows drivers](windows-drivers) if using that OS
* Connect your board via [USB](usb) and practice talking to it
* Take a look at the [configuration](configuring-smoothie)
* Upgrade your [firmware](flashing-smoothie-firmware) to the latest version if you feel like it
* Wire your power supply and provide it with power
* Wire the power supply to [Smoothieboard](smoothieboards)'s motor and mosfet power inputs
* Connect motors to the stepper motor driver outputs
* Edit your configuration to match your motors
* Test the motors, and admire your accomplishment for hours
* Connect [Endstops](endstops) to the endstop inputs
* Edit your configuration to match your endstops
* Test your endstops by homing the machine
* Connect your hotend and heated bed's thermistors to the thermistor inputs
* Edit your configuration to match your thermistors
* Test that they read [temperature](temperaturecontrol) correctly, admire a beautiful temperature graph
* Connect your hotend and heated bed's heaters to the mosfet outputs
* Edit your configuration to tell Smoothie what to heat, with what mosfet and how
* Test that you can correctly control temperature on all heaters, carefully
* Connect, configure and test any fans you may have
* Connect, configure and test any probes you may have
* Setup calibration or leveling if relevant
* Configure your slicing [software](software) and slice a 3D file into a G-code file
* Use your host [software](software) to send your new G-code file to the Smoothieboard
* Watch as the machine prints using your new Smoothieboard system
* Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.

# Translations

Some users have hand-translated this page. Note that this translated version is by definition never going to be up-to-date. Use it to help you understand in general, but any specific information should be taken from the original version, especially before asking the community for help.

* [Version Francaise](3d-printer-guide-fr)

{% include getting-started/unboxing-for-include.md %}

{% include migration/migrating-for-include.md %}

{% include hardware/wiring/warning-for-include.md %}

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors-for-include.md %}

{% include modules/motion/arm-solutions-for-include.md %}

{% include machine-guides/3d-printers/extruder-guide-for-include.md %}

{::nomarkdown}
<a href="/images/v6-hero-hot-end.png">
  <img src="/images/v6-hero-hot-end.png" alt="A Hotend" style="width: 300px; height: 200px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

A hotend contains a thermistor and a heating element in its heating block.

# Temperature control

In a 3D printer, you heat thermoplastics.

There are two different parts in which you want to do that:

First, the hot-end heats the plastic to the point where it is liquid enough to go through the nozzle.

Second, the heated bed (in only some printers), on which the first layer is deposited, is heated to allow for better sticking of the plastic to the bed, and more uniform temperature in the part while printing.

For detailed information about temperature control in Smoothie, you can look at this part of the documentation: [TemperatureControl](/temperaturecontrol)

The process is essentially the same to wire and control a hot-end, or a heated bed, and is as follows:

## Thermistor

A [thermistor](http://en.wikipedia.org/wiki/Thermistor)'s resistance changes with temperature.

By reading that resistance, we can determine the temperature of a hot-end or a heated bed.

This allows Smoothie to turn the heater on or off depending on the temperature it reads, to achieve the desired temperature.

{::nomarkdown}
<a href="/images/thermistor-inputs.png">
  <img src="/images/thermistor-inputs.png" alt="Thermistor inputs" style="width: 300px; height: 200px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

There are 4 thermistor inputs, close to the SD card slot.

To wire the thermistor, take the two wires from the thermistor on your hot-end or heated bed, and connect them to one of the pairs of thermistor inputs on the Smoothieboard. Each input is two pins, one for each thermistor wire. There is no polarity to respect.

Smoothieboard has 4 thermistor inputs total, meaning a line of 8 pins on the edge of the board. Polarity is not important for thermistors.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Ground Connection Warning:</strong> The Smoothieboard has two grounds: a normal Ground, shared with the motors and everything else, and a special Analog Ground, which is isolated from the rest, to protect the very sensitive ADCs (analog to digital converters) used to read temperatures.
  <br><br>
  When reading temperature, never use the normal ground to read temperatures, always use the AGND connections provided on the thermistor inputs.
  <br><br>
  This also means you cannot "share the ground" on wires going to your hotend, as some users sometimes do to "save wires". This is a very bad idea and will cause a lot of problems.
</sl-alert>
{:/nomarkdown}

By convention (meaning that if you wire things according to the way it is specified in the default configuration file, you do not need to edit the configuration file as it will already be correct), 

* Hot-end thermistor connects to T0
* Heated bed thermistor connects to T1

In the [default configuration file](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard/config), the thermistor pins are set up using that convention:

```markdown
temperature_control.hotend.thermistor_pin    0.23             # Pin for the thermistor to read (here T0)
temperature_control.bed.thermistor_pin       0.24             # Pin for the heated bed to read (here T1)
```

You can, however, use any thermistor pin you want for any temperature control module you want.

{::nomarkdown}
<a href="/images/thermistor.png">
  <img src="/images/thermistor.png" alt="A thermistor" style="width: 300px; height: 225px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Thermistors come in all shapes and sizes.

{% include modules/temperature/temperaturecontrol-thermistor-choice-for-include.md %}

## Heating element

Now that Smoothie can read the temperature, it needs a way to heat things and maintain a desired temperature.

This is the heating element.

On a hot-end, that is usually a resistor or a [cartridge heater](http://en.wikipedia.org/wiki/Cartridge_heater), on a heated bed, that is usually a [PCB plate](http://reprap.org/wiki/PCB_Heatbed) designed to have the right resistance, or a [kapton heated bed](https://www.google.com/search?q=kapton+heater&source=lnms&tbm=isch&biw=1920&bih=1032).

Because of its resistance, when power is applied to a heater, the heater consumes energy to generate heat.

These heating elements need to be connected to Smoothieboard on a port that allows Smoothie to turn them ON or OFF as needed. This is done by the use of [MOSFET](http://en.wikipedia.org/wiki/MOSFET) that takes a digital input signal, and, depending on its value, lets current pass or not.

{% include hardware/power/mosfets-for-include.md %}

{::nomarkdown}
<a href="https://reprap.org/mediawiki/images/9/99/Heatbed_glass_clips_1a.jpg">
  <img src="https://reprap.org/mediawiki/images/9/99/Heatbed_glass_clips_1a.jpg" alt="A heated bed" width="300" height="200" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Heated beds are often made out of a rigid, or flexible (kapton) PCB.

### Example

Let's say you want to connect a heated bed to your Smoothieboard.

First, wire the thermistor to the thermistor input.

Then, find out (from the Internet, or your seller/manufacturer) the current rating for that heated bed.

In this example it will be the classical [RepRap](http://www.reprap.org) PCB plate [Heatbed](http://reprap.org/wiki/PCB_Heatbed).

Ours has an 11A current rating, this means we cannot use it with a small MOSFET, and we need to wire it to a big MOSFET.

We connect our PSU to the power input for the big MOSFETS pair (don't forget to check the labels on the board for polarity).

Then we connect the two wires from the PCB bed to one of the big MOSFETS out. Polarity is not important here.

Because this is the heated bed, we connect it to the **P2_7** (pin {::nomarkdown}<pin>2.7</pin>{:/nomarkdown} in the configuration file). This is a convention: it is configured that way in the default configuration file, meaning that if you connect it there, you do not need to change the configuration file to specify where you are connecting it: the configuration file is already correct.

For the hot-end, the default output is **P2_4** (pin {::nomarkdown}<pin>2.4</pin>{:/nomarkdown} in the configuration file).

To set a different MOSFET output for the bed or the hot-end, you have to edit the configuration file to the digital output pin corresponding to your chosen MOSFET. These are the lines you would have to edit:

```markdown
temperature_control.hotend.heater_pin        2.7              # Pin that controls the heater cartridge for the hot-end
temperature_control.bed.heater_pin           2.5              # Pin that controls the heated bed
```

To help you figure out what is what, here is a recapitulating table:

{% include hardware/power/mosfets-table-for-include.md %}

## Testing

Once your thermistor is connected, and both the power input and the heater elements are plugged in, you are ready to test your temperature controller.

To do this, reset your Smoothieboard, then connect to it using host software like [Pronterface](http://reprap.org/wiki/Printrun), or using the [web interface](/network).

Now connect to your Smoothieboard over the serial interface.

Power your machine on by plugging the PSU into the wall.

If anything burns or smells funny, turn everything off immediately and investigate.

The heaters are off by default when Smoothie starts. Check that they are not heating (one indication of the heater being ON is if the [LED](http://en.wikipedia.org/wiki/Light-emitting_diode) near the MOSFET is lit up, the other being checking the heater itself), if they are heating, something is wrong, turn everything off immediately and investigate.

Now, in Pronterface, set the temperature for either your bed or your hot-end, depending on what you are testing (wire and test only one at a time for easier problem investigation) at a low temperature (20°C above room temperature is a good idea), and monitor temperature to see if the temperature rises. If it does rise, everything is fine. If not, turn everything off immediately and investigate.

Once you know the heater works correctly, there is still some tuning to do: tuning your PID settings.

## PID

{% include modules/temperature/temperaturecontrol-pid-for-include.md %}

## PID autotuning

{% include modules/temperature/temperaturecontrol-pid-autotuning-for-include.md %}

## Heater safety

There are features you can configure to make sure that your [temperature control](temperaturecontrol) module will detect when something is wrong, and stop the machine when that happens.

It is a good thing to read about these, and configure them as best as you can, because your house burning down is a very bad thing.

It is also a good thing to configure it well, because if you do not, it is possible Smoothie will think there is a problem when there is none, which can be annoying.

You can read more about temperature control safety [here](/temperaturecontrol#safety).

## Example setup

This information is all very abstract.

Here is an example setup for a simple 3D printer with one hotend and one heated bed:

In this setup:
* The heated bed is 12A at 12V, or 144W
* The hotend is 3A at 12V, or 36W

We are going to use the first big mosfet to control the bed, it has a current limit of 12.5A so we are within limits.

We also need to provide power to the first big mosfet via the big mosfet power input.

We **cannot** however use the second big mosfet for anything, because if we did, we would go over the 12.5A limit of the big mosfet power input's connector.

This is because the input must provide power to both outputs, so if we were for example to connect a 12.5A load to the first big mosfet, and a 2.5A load to the second big mosfet, the total passing through the big mosfet input would be 15A, which is over the 12.5A limit.

Therefore, we will use the first small mosfet to control the hotend. 3A is well within its limit.

Here again, we need to provide power to the small mosfet, via the small mosfet power input.

This means we will make 4 connections:
* Connecting the heated bed to the first big mosfet output
* Connecting the power supply to the big mosfet power input
* Connecting the hotend to the first small mosfet output
* Connecting the power supply to the small mosfet power input

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/example-heating-setup.svg">
    <img src="/images/example-heating-setup.svg" alt="Example wiring with a hotend and a heated bed" style="min-width: 640px; height: auto;"/>
  </a>
  <p><em>Note how the mosfets need power provided to their power inputs</em></p>
</div>
{:/nomarkdown}

{% include modules/endstops-probes/guide-endstops-for-include.md %}

# Fans

Fans are important: they help you cool things down.

On a 3D printer there are two main things you need to cool:

First, most often your hot-end's "cool" part (the top of it) needs to be cooled so heat does not accumulate there and transfer to the rest of the machine and damage it.

Secondly, you often (in the case of printing PLA) need to cool down the top layer currently being printed by your machine so that heat does not accumulate in the printed part and cause mayhem.

While the first one is usually safest being always powered on, the second one you want digital control via MOSFETs, as most modern slicing software allows for smart control of that fan.

### Always ON fan

For the fan that is always ON, all you need is to find power somewhere to power it.

You can wire it directly to your PSU (+ goes to +, - goes to -), but there is also a little trick if you want to wire it to your Smoothieboard.

If you add the jumper to JP28 like described in the MOSFETs section of the Temperature Control section of this tutorial, then the connector usually used for providing power to the small MOSFETs, will actually output whatever power is provided to the VBB (stepper motors) connector.

This means you can simply add this jumper, then connect your fan to the small MOSFETs power input (X6).

### Digitally controlled fan

You do not need a big MOSFET to control a fan. One of the small MOSFETs is more than enough. See the Temperature Control section to identify which you want to use and which GPIO pin corresponds to that MOSFET.

Then, you need to edit your configuration file to add (or alter) this section:

```markdown
# Switch module for fan control
switch.fan.enable                            true             #
switch.fan.input_on_command                  M106             #
switch.fan.input_off_command                 M107             #
switch.fan.output_pin                        2.4              # The pin matching the MOSFET we chose
switch.fan.output_type                       pwm              # PWM output settable with S parameter in the input_on_comand
#switch.fan.max_pwm                           255              # set max PWM for the pin default is 255
```

Now wire the fan to the output for that MOSFET (here it is the first small MOSFET, using pin {::nomarkdown}<pin>2.4</pin>{:/nomarkdown}), make sure you respect polarity.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/fan-basic.svg">
    <img src="/images/fan-basic.svg" alt="Wiring a fan to a small mosfet" style="min-width: 640px; height: auto;"/>
  </a>
  <p><em>The fan is wired to the output for the first small mosfet (watch the polarity, and make sure you always add a diode when wiring a fan), and the small mosfets are getting power via their power input. (NB Note - newer revisions of the Smoothieboard now come with the Diodes installed on the Small Mosfets - do a visual check to confirm)</em></p>
</div>
{:/nomarkdown}

You can now control your fan digitally: issue the {::nomarkdown}<mcode>M106</mcode>{:/nomarkdown} G-code to turn it on, and {::nomarkdown}<mcode>M107</mcode>{:/nomarkdown} to turn it off. Those are also the commands slicing software generates to control fans.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Diode Protection Required:</strong> Fans (and other active loads like solenoids, mechanical relays, motors, anything with a coil) can feed power back into the MOSFET and destroy it.
  <br><br>
  You likely will be fine for fans with current ratings below 0.25Amps (most common types), however, while it is common practice to omit the diode under that rating, we still require you install one for safety. (Understand: if you do not install a diode and burn your MOSFET because of it, it will be considered user error.) Above this, you need to install a diode across the MOSFET's power output as you are pretty much guaranteed to burn the MOSFET without one.
  <br><br>
  <strong>Note:</strong> Newer revisions of the Smoothieboard now come with the Diodes installed on the Small Mosfets - do a visual check to confirm.
</sl-alert>
{:/nomarkdown}

<!-- LED 
![Version 1.1 and up: Diodes added on a Smoothieboard](images/o8f1o1d.png)
-->
Note starting with Smoothieboard version 1.1, **you do not need to do this anymore** on the first two small mosfets, as the diodes are there by default.


{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/mosfet-generic.jpg">
    <img src="/images/temporary/mosfet-generic.jpg" alt="Prior to version 1.1 PCBs: Adding Diodes to a Smoothieboard" style="min-width: 640px; height: auto;"/>
  </a>
  <p><em>Prior to version 1.1 PCBs: Adding Diodes to a Smoothieboard</em></p>
</div>
{:/nomarkdown}

The diode should be installed with the white band (negative side of the diode) soldered to the + (positive side) of the power output, and the other side to the - (negative side) of the power output.

Good diodes to use are: 1N5819 or SS14.




{% include modules/endstops-probes/z-probe-guide-for-include.md %}

{% include hardware/panels/panel-guide-for-include.md %}

# Automation and Startup

Once you have your printer fully configured and working, you might want to automate certain startup tasks.

## Automatic Homing on Boot

A common automation is to have your printer automatically home all axes when it boots up. This ensures your printer is always in a known state when you start using it.

To set this up, create a file called `on_boot.gcode` in the root of your SD card with:

```gcode
G28  ; Home all axes
G0 Z10  ; Raise Z to safe height
G0 X10 Y10  ; Move to safe position
```

Then enable it in your config:

```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
```

For more information and advanced examples, see the [on_boot.gcode documentation](on_boot.gcode).

# Appendixes

{% include hardware/wiring/general-appendixes-for-include.md %}


{% include troubleshooting/troubleshooting-for-include.md %}