---
permalink: /smoothie-on-a-breadboard
---

# Smoothie on a Breadboard

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>PLEASE DO NOT BUILD THIS</strong>

  2021 update: Please don't build one of these. They are purely an educational reference that is not meant to actually be built, and you're just going to cause yourself a lot of trouble.

  If you have any doubts and still think you should build one, please <a href="mailto:wolf.arthur@gmail.com">contact us by email</a> first.

  The introduction below was written a decade ago, when this was the only way to run Smoothie on <em>anything</em>, making this better than anything else, since nothing else existed.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Warning</strong>: Breadboard setups are very sensitive to Electro-Magnetic Interference.

  You will most probably get false readings, resets and hangs if used on an actual machine.

  This page is for hackers looking into learning and testing new designs. It is not appropriate for actual machines you want to use on a daily basis and expect to be reliable.
</sl-alert>

## Introduction

There has been some interest in getting Smoothie to run using the [LPCXpresso 1769](http://www.embeddedartists.com/products/lpcxpresso/lpc1769_xpr.php) breakout board for the [LPC1769](http://www.nxp.com/products/microcontrollers-and-processors/arm-processors/lpc-mcus/lpc1700-cortex-m3/512kb-flash-64kb-sram-ethernet-usb-lqfp100-package:LPC1769FBD100) chip, and components placed on a breadboard.

If you don't mind the hackyness of breadboards, or if tinkering is in fact what you're after, this can be an interesting educational solution.

## Materials needed

To make this you'll need:

- LPCXPresso1769 board (20€)
- 4 Pololu [A4988 drivers](http://www.pololu.com/catalog/product/1182) or [StepSticks](http://reprap.org/wiki/StepStick)
- Two 840 points breadboards
- Various wires
- MicroSD breakout board
- USB-B or mini USB breakout board (female)
- USB to Serial cable, or an Arduino, or similar, you only need this once to burn the bootloader
- Mosfet, LED, resistors, 10uF capacitor, two buttons, and your favorite kind of connector (we'll use 2.54mm screw terminals)

If you like to tinker with reprap/CNC electronic stuff, you probably already have most of this.

## The Big Picture

This is what Smoothie on a breadboard looks like (graphics are thanks to the awesome [fritzing](http://fritzing.org/)):

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/bb09.jpg">
    <img src="/images/recovered/bb09.jpg" alt="Smoothie on a Breadboard" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

A short description:
- At the core, you have the LPCXpresso board. It can be powered from, and connected to the computer via either the USB port or the USB to Serial adapter. The USB to Serial adapter can be used in place of the USB port, you'll be able to use Smoothie fine, but then you miss out on all the fun where Smoothie connected to the computer via USB shows as both USB/Serial and Mass Storage, exposing the SD Card.
- The MicroSD breakout contains an SD card (up to 2GB, that's the size of the cheapest you can find these days anyway). On the SD Card is the config file to configure smoothie, and you can also put there GCode files and execute them from there.
- The 4 pololu drivers (StepSticks would be fine, and are pin-compatible) drive the steppers to move the machine and the extruder. If you're here to move a laser, you don't need 4, but only 2 (or 3 if you have a Z axis).
- The thermistor and hotend circuits are used to regulate the temperature in the 3D printer's hotend.
**TODO**: Describe modifications for laser cutting, there are not a lot.

# Assembly

Now instructions for a step-by-step assembly.
The current design is quite compact, so there is not really much freedom on component placement, but this is mostly to say what connects to what.
If you don't understand something, or don't see clearly what connects to where, you can look more in detail in the [Fritzing file](http://smoothieware.org/local--files/smoothie-on-a-breadboard/Smoothie-on-a-breadboard.fz) or [contact by email](mailto:wolf.arthur@gmail.com).
Warning: we will refer to the pin numbering found on the LPCXpresso PCB; this is different from the standard IC pin numbering, as both columns have increasing numbers from top to bottom instead of a counter-clockwise numbering.

## Breadboards

You'll need the breadboard in a bit of a special configuration, due to the dimension/pin configuration of the LPCXPresso board:

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/bb01.jpg">
    <img src="/images/recovered/bb01.jpg" alt="Breadboard Configuration" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

You just need to remove one of the power supply bars, and attach the two breadboards together (will require cutting the sticky sheet at the bottom of some breadboards).

## LPCPxresso board

You must solder the two long ranges of holes on that board with standard 2.54mm golden pins at the bottom.
Then simply insert into the breadboard, with the first pins on the left at 6 pins from the border.

<a href="/images/recovered/bb02.jpg">
  <img src="/images/recovered/bb02.jpg" alt="LPCXpresso board" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

## USB-Serial cable

To flash the bootloader, and later eventually debug, you need to connect to the board via serial. That won't work via USB directly until smoothie is flashed in there.
You can use an [FTDI cable](https://www.adafruit.com/products/70), the [Arduino USB2Serial board](http://store.arduino.cc/eu/index.php?main_page=product_info&cPath=11_15&products_id=143), or even directly an Arduino board, using pins 0 and 1 as TX and RX.

<a href="/images/recovered/bb03.jpg">
  <img src="/images/recovered/bb03.jpg" alt="USB-Serial cable" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

Blue wire in this picture (pin 21) is RX, green (pin 22) is TX. On an [FTDI cable](http://adafruit.com/datasheets/DS_TTL-232R_CABLES_V201.pdf), RX is yellow, TX orange. On the Arduino USB2Serial and Arduino boards, those are indicated. (On some generic FTDI / TTL USB2Serial modules, if you experience problems with the serial connection not connecting, then you might want to try swapping the RX and TX connections between the LPCPxresso board and USB2Serial module, TX pin connects to RX pin and RX pin connects to TX pin, also worthy of note is that there are both 5Volt and 3.3Volt I/O variants of these USB2Serial boards available)
GND (black) goes into the bottom rail of the two bottom power bars, and to the GND pin on the LPCXpresso.
The 5V pin goes into the VIN (4.5V-14V) pin on the LPCXpresso (orange wires).
The LPCXpresso then outputs 3.3V, which is what we'll be using for our peripherals, from the top left pin (red wires). This goes into the top rail of the two bottom power bars. The 3.3V regulator on the LPCXpresso is located on the programmer side, so if you split the boards you will have to add an external 3.3V LDO.
The LED and resistor are not necessary, but it's always nice to know you've connected the power correctly. The resistor value depends on your LED's luminosity and taste: I use 1Kohm on mine. Most LEDs will want less.

## Buttons

You need a reset button to reset your board connected to pin 4, and a bootloader button connected to pin 51 (shown in the diagram below) to get it to enter bootloader mode in order to flash the SD card bootloader (this only needs to be done once).
Also, a play/pause button is used to force the bootloader into DFU mode to flash the firmware, this is connected to pin p2.12, and is not shown in the following diagram.

<a href="/images/recovered/bb04.jpg">
  <img src="/images/recovered/bb04.jpg" alt="Buttons" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

Both buttons are push buttons, and connect from their respective pins to GND. Lower left is RESET, and top right is BOOTLOADER.
You'll then be able to flash the chip using lpc21isp [following these instructions](http://smoothieware.org/flashing-the-bootloader).

To force the bootloader into DFU mode hold the play/pause button, press reset then release the play/pause button.

## MicroSD card breakout board

Exact connection will depend on the pin order for your microSD breakout board.
Here pictured is an imaginary breakout board that would have the pins in the same order as the LPCXpresso, making things neatly arranged:

<a href="/images/recovered/bb05.jpg">
  <img src="/images/recovered/bb05.jpg" alt="MicroSD card breakout board" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

- Green is MOSI (sometimes DO), Master Out Slave In, pin 5
- Blue is MISO (sometimes DI), Master In Slave Out, pin 6
- Yellow is CLK, the Clock signal, pin 7
- Purple is SSEL, also called Cable Select, pin 8

You'll also have to connect red and black to the bottom 3.3V power bar.
It is shown here separated from the breadboard, but most breakouts will plug right on the breadboard, there is room for that.

If you have flashed the bootloader, copy smoothie as "firmware.bin" onto the SD card, it will be written to flash on reset, and you should get a nice welcome on the Serial cable.

If flashing the bootloader works, but flashing firmwares from the SD card doesn't, you probably have an SD card problem. Try swapping DI and DO or using another SD card. SDHC may have compatibility issues, you may want to try an older card.

## USB breakout board

USB connection is quite simple. It's pretty much the same as the serial cable: 5V to VIN (orange), GND to GND (black), connect D- (green) to pin 36 and D+ (blue) to pin 37 and you're done.

<a href="/images/recovered/bb06.jpg">
  <img src="/images/recovered/bb06.jpg" alt="USB breakout board" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

If you have flashed the bootloader and then smoothie, it should show up as both Mass Storage, and USB/Serial to your computer.

## Hotend control

These two circuits allow you to read the hotend's temperature and change that temperature via a heater. You don't need that for CNC milling and lasercutting, so use a jumper and jump it if that's your case.

<a href="/images/recovered/bb07.jpg">
  <img src="/images/recovered/bb07.jpg" alt="Hotend control" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

The bottom circuit is the thermistor circuit. From pin 20, connect a 4.7Kohm resistor to 3.3V power (orange), and a 10uF capacitor to ground. The 2.54mm screw terminal connects the pin 20 and the ground to the two wires from your thermistor. The thermistor doesn't have a polarity so it can be connected either way.
The top circuit is the Mosfet circuit, it controls the heating element in your hotend. The horizontal resistor is 10Kohm and connects from the Gate to GND (pull-down resistor) and the other one is 1Kohm and connects the Gate to pin 45 on the LPCXpresso. The left 2.54mm screw terminal is the power input for the heater element. If you want to use only one power supply for both the heater and the steppers (will work fine with most ATX Power supplies), you can connect this to the top right power bar instead where we will later have the stepper motors' power rail. The other 2.54mm screw terminal goes to the heater.

## Stepper drivers

You need:
- 4 stepper drivers for 3D printing
- 3 for lasercutting with a Z axis, 2 for simple lasercutting
- 3 for CNC milling

Here shown is a picture with 4 stepper drivers:

<a href="/images/recovered/bb08.jpg">
  <img src="/images/recovered/bb08.jpg" alt="Stepper drivers" style="display: block; margin: 20px auto; min-width: 640px; max-width: 100%; height: auto;"/>
</a>

Bit of a legend:
- Grey wires are STEP inputs
- White wires are DIRection inputs
- The resistors are 10Kohms
- The single dual-2.54mm screw terminal is for power input for the stepper drivers. The top and bottom power bars are for that voltage input, the center one is for the 3.3V from the microcontroller.
- The rest is just wiring

## Config

You are going to want to configure Smoothie to work with the pin assignment of your breadboard setup.
Here is the corresponding configuration:

```markdown
alpha_dir_pin                                2.7             # Pin for alpha stepper direction
alpha_step_pin                               2.8             # Pin for alpha stepper step signal

beta_dir_pin                                 2.11            # Pin for beta stepper direction
beta_step_pin                                2.12            # Pin for beta stepper step signal

gamma_dir_pin                                0.28!           # Pin for gamma stepper direction
gamma_step_pin                               2.13            # Pin for gamma stepper step signal
```

Also, make sure to disable current control as it will hang if enabled...

```markdown
currentcontrol_module_enable                 false             #
```

## Notes

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The pinouts for the motors above are an example and actually conflict with other pins in current versions of Smoothie.

  It is recommended you use the pinouts from this chart: <a href="lpc1769-pin-usage">LPC1769 Pin Usage</a>.
</sl-alert>

## Done

And there you go!

If you have any questions or if something is wrong/missing, please don't hesitate to [send us an email](mailto:wolf.arthur@gmail.com).
