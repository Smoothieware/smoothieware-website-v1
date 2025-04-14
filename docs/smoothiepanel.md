
# SmoothiePanel

SmoothiePanel is an [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) control interface for industrial robotic machinery. It adds a screen and user interface to allow easy control of a Smoothieboard. The current design brings a graphic LCD with RGB Backlight and changeable interface panel down to a port, optionally SPI, UART, or USB.

It is intended to control a [Smoothieboard](smoothieboard.md) ( [GPL](http://en.wikipedia.org/wiki/Gpl) too ), though could easily be connected to almost any logic control system or even run stand-alone.

## A bit of History

The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha.md) has been brought back out and dusted off because the open source tool-chain is ready! Also, there were some periodic issues with the [Beta design](smoothiepanel-beta.md) that used I2C port expanders. In the end came down to line noise from using I2C over cables in a noisy environment. That brings us to the [Gamma design](smoothiepanel-gamma.md). I went back to using an MCU but I went with a USB capable chip. It still has the Nunchuck port of course but has also gone back to the original idea of customizable / replaceable interface panel. There was then a Delta design that fixed a couple hardware bugs in the Gamma design and added the character lcd footprint back in.

## Current Prototype - Proto5 (Epsilon)

Having gone through all those designs and having implemented a mostly working firmware for the Gamma/Delta series I am forced to accept that the M0 chip is just not capable of providing the full ease-of-use feature set that we have come to expect from using Smoothieboard. To this end, I have redrawn *one last time* (stop laughing!) around the LPC176x. That's right kids, Smoothiepanel Proto5 (Epsilon) is going to be running the exact same MCU as Smoothieboard itself! This is going to add so much to the system it's almost silly. And otherwise I have managed to retain all previous design goals and the basic form factor of the previous two protos. Some benefits of the new migration to the Cortex-M3 include:

- Smoothie config: The Smoothiepanel will be able to read its configuration from the Smoothieboard and dynamically configure itself for use at runtime. Just like a Smoothieboard.
- Host-style panel: The panel can be run as a "host" with Smoothieboard or pretty much any other gcode-enabled motion controller as the slave device (rather than vice versa with the panel as the slave). The Smoothiepanel can still be connected to a PC over USB without changing normal workflow. Plus it saves on ram and resource use on the motion controller itself which no longer needs to maintain the lcd display or monitor the UI.
- More expansion options: 5 wing slots for modular customization representing free 40 gpio pins including adcs, serial, spi, i2c, pwm, and more.
- Stand alone operation: With a 120MHz cortex-M3 on board and 40 free gpio Smoothiepanel is actually capable of running a 3d printer without an external motion controller! Just put a Classic Interface Panel on the front and a pair of 2xStepperDriver wings on the back and you would have everything you need to control a simple single extruder 3d printer.

### Preview

![Smoothiepanel Proto4](images/smoothiepanel/smoothiepanel-proto4-asm-sm.jpg)

Proto5 (Epsilon) pcbs should be in any day now! In the meantime this is a pic of Proto4 (Delta) sporting a Classic Interface Wing

## Status
The current status of this board is prototyping: I'm now on the 5th prototype of the board. Software side of the new platform is going to be made extra easy because it will be based directly off of the existing Smoothieware platform. All the low level stuff is done!

## Getting one
I am going to make more of the latest Epsilon proto board than I usually do, and I would like some community involvement at this stage. Specifically, I am looking for folks who would be interested in using a Smoothiepanel in a stand-alone project and are capable of doing a bit of coding. Your project along with photos and probably a video clip would then be featured in the Smoothiepanel Kickstarter when we are ready for that. If this sounds like fun please submit your project idea to me by [email here ( reprap at logxen dot com )](mailto:reprap@logxen.com) soon for consideration.

Or you can simply make yourself known by [email here ( reprap at logxen dot com )](mailto:reprap@logxen.com) and you'll be added to the list of interested people. No strings attached, it's just to help us plan.
