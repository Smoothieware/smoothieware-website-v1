
# Smoothieboard Beta (Legacy Documentation)

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Legacy Documentation:</strong> This page documents the 4-axis only version of Smoothieboard, also known as the "beta Smoothieboard", released January 2013 and sold by Trinitylabs and then Ipsofactio in the first months of 2013. This is historical information only.
</sl-alert>

SmoothieBoard is an [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) [CNC controller board](http://en.wikipedia.org/wiki/Numerical_control) based on the [LPC 1769](http://ics.nxp.com/lpcxpresso/~LPC1769/) Cortex-M3 chip.
It is intended to run the [Smoothie modular firmware](http://smoothieware.org/) ( [GPL](http://en.wikipedia.org/wiki/Gpl) too ), and is targeted at [3D Printers](http://reprap.org), [Laser cutters](http://en.wikipedia.org/wiki/Laser_cutter), [CNC Mills](http://en.wikipedia.org/wiki/Milling_machine), [Pick and place](http://en.wikipedia.org/wiki/Pick_and_place) and other small-sized CNC machines. Larger machines can be driven using the [bare](http://) version and external drivers.

## Preview

{::nomarkdown}
<a href="https://farm8.static.flickr.com/7270/7759993256_5c9c881eb8_z.jpg">
  <img src="https://farm8.static.flickr.com/7270/7759993256_5c9c881eb8_z.jpg" alt="Smoothieboard Beta" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

## Status
A first batch of *beta* smoothieboards has been made, and has been [sold out](http://trinitylabs.com/products/beta-smoothieboard).

One other vendor currently has a small non-beta batch for sale, but it won't last long. We are working on having more non-beta boards made, as well as on the 5-axis version.

## What can it be used for ?
The [Smoothie](http://smoothieware.org) firmware is designed for maximum usefulness in mind. The same thing goes for SmoothieBoard. Here are some of the machines it's already possible to control using the current firmware and a SmoothieBoard:
- 3D printers, like [repraps](http://reprap.org/wiki/Main_Page) including extruder control, bed and hotend temp control.
- CNC mills, CNC lathes.
- Laser cutters

And with more to come: laser engraving, SMT pick and place machine, foam cutter, delta robot, and anything else you care to imagine.

## [Getting one](http://smoothieware.org/getting-smoothieboard)

You can now get a smoothieboard [here](http://smoothieware.org/getting-smoothieboard).

## Price
We intend to have the best price possible right from the first batch. That would be $120 for the bare ( bare meaning working, just without connectors ) board, an additional $10 for the microSD card and USB cable if you don't have them already, and same thing $10 more for screw terminals, pin headers and power connectors.

So **about $140** for a complete reprap controller, placing it in the same price range as the cheapest current barebones 8bit reprap controllers ( [Sanguinololu](http://reprap.org/wiki/Sanguinololu), [PrintrBoard](http://reprap.org/wiki/Printrboard) ), for a much more feature-packed board.

Price may vary from vendor to vendor.

## Features
### Microcontroller
- NXP [LPC 1769](http://ics.nxp.com/lpcxpresso/~LPC1769/) 32-bits Cortex-M3 MCU, running at 120Mhz. 512kB Flash, 64kB RAM.
- Drag and drop flashing: simply drop a new firmware file to the smoothieboard to update.
- USB2 Composite device: shows to the computer as both a Serial device, and a Mass Storage device ( exposing the SD-card ), à-la [mbed](http://mbed.org/handbook/mbed-NXP-LPC1768).
- Ethernet
- microSD card file storage.
### Stepper drivers
- 4 Allegro [A4982](http://www.allegromicro.com/Products/Motor-Driver-And-Interface-ICs/Bipolar-Stepper-Motor-Drivers/A4982.aspx) stepper drivers.
- Each capable of driving bipolar steppers up to 35V and 2A.
- 1/16 [microstepping](http://en.wikipedia.org/wiki/Stepper_motor#Microstepping).
- TSSOP package allows for much better thermal handling than commonly used A4983/8.
- Digital control of the current setting for each driver instead of trimpot manual control.
### Power outputs
- Two SMT [ZXMN4A06](http://octopart.com/parts/search?q=ZXMN4A06) ( 40V/5A ) Mosfets sharing a power circuit
- Two optional thru-hole ( TO220 ) Mosfets sharing a power circuit: solder what you need.
### Power inputs
- Main 12-35V ( Stepper drivers ) power can be connected using a 3.5mm screw terminal, SMT power jack connector, or a Molex connector ( ATX-harddrive style )
- 5V input can come from either a 3.5mm screw terminal, a SMT power jack connector, or a Molex connector as above. Or be taken directly from the USB cable.
- Each of the two Mosfet couple can take its power from either its own 3.5mm screw terminal, or SMT power jack connector, or be connected to the main stepper driver circuit using jumpers.
### Inputs
- 4 Thermistor ( [ADC](http://en.wikipedia.org/wiki/Analog-to-digital_converter) ) inputs.
- 6 Endstop inputs.
- Play/Pause [LED Tactile Button](http://www.sparkfun.com/products/10442)
### Extensibility
- SPI connector, I2C connector, Serial connector
- Lots of pins broken out ( Including step, direction and enable pins for the stepper drivers, and mosfet pins )
- 13 Additional GPIO pins broken out
- 4 LEDs, many connectivity options
### Firmware
- Runs the highly-modular [Smoothie](http://smoothieware.org/) firmware, see home page for more info.
## Sources
- Oh and by the way, it's all [Open Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) ( GPL-licensed ). You can find the Eagle files on [GitHub](https://github.com/arthurwolf/SmoothieBoard).
- If you are just hunting for part numbers, the bill of materials is [also available](https://github.com/arthurwolf/SmoothieBoard/blob/master/bom.xls?raw=true) in *.xls format on [GitHub](https://github.com/arthurwolf/SmoothieBoard)

## Design

- Dimensions are 105x105mm
- 3D files can be found [here on Thingiverse](http://www.thingiverse.com/thing:45537) to design cases and plates and such.

---

# Documentation

## Border connectors

Most connectors on smoothieboard are broken out to the borders for easy access:

{::nomarkdown}
<a href="https://farm8.static.flickr.com/7263/7832149516_76d367a105_b.jpg">
  <img src="https://farm8.static.flickr.com/7263/7832149516_76d367a105_b.jpg" alt="Smoothieboard Wiring" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<a href="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true">
  <img src="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true" alt="Smoothieboard Diagram" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning:</strong> Please note the inversion Vbb connectors: the 5mm one has GND to the left, the 3.5mm one has GND to the right.
</sl-alert>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> On the I2C header the pinout is wrong in the above diagram, it is from top to bottom: 3v3 sda scl gnd
</sl-alert>

Here is a list of the different connectors, in clockwise order:

### Stepper motors

Stepper motors are indicated as X, Y, Z (cartesian movement axes) and E (3D printer extruder). However, in Smoothie, stepper drivers are alpha, beta, gamma and delta. They are equivalent, in the same order.

This is because if you use for example a non-cartesian arm solution (for example a rostock, delta or scara robot), then individual stepper motors don't match specific cartesian axes, things are a bit more complicated. Thus the greek letter naming of the drivers.

For each stepper motor you get two options:

- 3.5mm: mostly used for the larger screw terminals
- 2.54mm: mostly for smaller pins, or more sophisticated pin-like connectors.

### Stepper motor power input

This has two inputs side by side: one for 5V (this is optional, you will probably be providing 5V via USB), and one for VBB (the stepper motors (and optionally mosfets) power input), that is 12 or 24V.

There are several options there. You can solder an ATX molex connector: the same kind you would find on ATX power supplies, that goes into 3-1/2" IDE hard drives.

This allows you to simply plug an ATX power supply in there. However, do not use this for high current applications (>10A) as that can be much for those connectors.

You can also solder 3.5mm connectors (not recommended unless you use little power), or 5mm connectors.

Finally, for the VBB input, there are pads to solder a SMT Jack power plug (the kind you commonly find on 12V wall plugs), which is nice to have if you are going to plug/unplug your board a lot.

### Small mosfets

These are two small SMT mosfets: [ZXMN4A06](http://octopart.com/parts/search?q=ZXMN4A06) (40V/5A)

They are useful for small loads like hotends, fans, led lighting, relays, etc...

The power input is shared by the two mosfets. Meaning the power input (3.5mm pins at the top) provides power to both of them.

And then each mosfet has its own two-pin output, with the choice between 2.54mm (not recommended except for light load things like fans) or 3.5mm.

You can also take the power from VBB instead of from the power input, using jumpers, see the dedicated part in the non-border stuff section below.

### Big mosfets

These are two big mosfets: [AOT240L](http://www.digikey.com/scripts/DkSearch/dksus.dll?WT.z_header=search_go&lang=en&keywords=785-1270-5-ND&x=0&y=0&cur=USD) rated up to 40V and 20A (more with cooling).

They are useful for big loads like hotends, heated beds, and crazy things.

The power input is shared by the two mosfets. Meaning the power input (3.5mm and SMT Jack power connector in the middle) provides power to both of them.

And then each mosfet has its own two-pin output, with the choice between 2.54mm (not recommended except for light load things like fans) or 3.5mm.

We recommend using 3.5mm connectors for all connectors.

You can also take the power from VBB instead of from the power input, using jumpers, see the dedicated part in the non-border stuff section below.

### Endstops

There are 6 endstop connectors. Though if you use all 6, you are crazy.

There are two connectors per axis, min and max. Though you probably just want min.

Each connector is a 3-pin 2.54mm connector, providing 3.3V, GND, and the actual input endstop pin (in this order, from top to bottom).

You can connect either 2.54mm pins, or 2.54mm screw terminals here.

### USB

USB provides the main means of communication with the host computer. The connector is mini-USB.

### Ethernet

The RJ45 connector is optional. When plugged in, the smoothieboard will serve a web interface that will allow for control of the machine. [link](http://components.arrow.com/part/detail/41642456S6980467N6266)

### MicroSD

The microSD card stores the config file, gcode files, the web interface files, and other, futury stuff.

### Thermistor inputs

Thermistors are mostly used for hotends, and heated beds. In conjunction with mosfets and heating elements, they allow for precise temperature control.

Each thermistor has a couple of 2.54mm pins (allowing for pin connectors or screw terminals). 4 thermistors means a row of 8 pins.

## Non-border connectors and components

{::nomarkdown}
<a href="https://farm9.static.flickr.com/8437/7831724724_2e1f40d8f7_b.jpg">
  <img src="https://farm9.static.flickr.com/8437/7831724724_2e1f40d8f7_b.jpg" alt="Smoothieboard Internal Components" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

All essential connectors being broken out to the perimeter of the board, the rest is on the board itself, where it's a tad less easy to reach (but we can't have 5 meters of perimeter, that'd be dumb).

All of them are optional and not soldered by default.

Here is a list of those connectors, in clockwise order:

### Play/Pause button

The Play/Pause button is a button with a LED in it. The LED lights up when the board is in pause. That can be because a heater is waiting to be hot for example, or when you click the button. Clicking the button again resumes normal operations.

The component is [this LED Tactile Button](http://www.sparkfun.com/products/10442). Solder it if you want to have some pausing fun. Most prefer red, as it's pausy, but there are other choices.

### Extra pins breakout

Mystery!

### Other extra pins breakout

Breaks out un-used pins 1.30, 1.31, 1.23 and 1.22. For extension fun.

### SD card SPI breakout

The SD card interfaces with the MCU using SPI communication. In case you would want to not plug the SD card into the smoothieboard, but connect an external SD card connector instead, those SPI pins are broken out.

See pictures for pinout.

### Stepper motor breakouts

All stepper motors have their enable, step and direction pins broken out. So if you burn one (which is very difficult, simply don't connect/disconnect them with the power turned on), you can connect a replacement driver.

### Extra stepper driver connector

You can connect an additional stepper motor driver (like a pololu-like board) to the board. This is useful for example to add a second extruder.

The step, direction, and enable pins are broken out, as well as VBB, GND and 3.3V.

### SPI breakout

The SPI breakout allows you to connect stuff that talks SPI. For example a second SD card. Or something else, your turn to think of something.

### LEDs breakout

There are 4 LEDs on the smoothieboard, in a row, mostly used for debugging right now.

Their pins are broken out so they are not completely wasted and you can use them if you really need them.

### I2C breakout

I2C is broken out to connect to peripherals. Lots of stuff talks I2C. Smoothiepanel, and smoothiedriver will talk I2C, and they are awesome. This is an awesome port.

### Small mosfets power select

This is a pair of pins for jumpers. When nothing is soldered, the power for the small mosfets is taken from the small mosfets power connector.

When the pins are soldered, and the jumper connects them to each other, power for the small mosfets is taken from VBB (the stepper motors power circuit).

Don't connect the power input and the jumper at the same time, that'd be bad, probably.

### Mosfets breakout

All pins for control of the 4 mosfets are broken out here. In case you want to do something with them.

### Big mosfet 1 and 2

Those may or may not come pre-soldered. If they are not pre-soldered, you can solder mosfets you like here.

### Big mosfets power select

See the same for small mosfets. It's just two jumpers instead of one, but it's the same thing.

### Reset and bootloader buttons

Breaking pins out doesn't cost much, right...
