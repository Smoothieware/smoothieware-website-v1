
# Smoothiedriver

Smoothiedriver is a series of motor driver PCBs that are designed to connect to the no-driver series of Smoothieboard (coming soon).

At the core of the system is the 3 pin parallel stepper system used on modern repraps: Enable, Direction, Step.

All Smoothiedrivers support at least this basic interface which is compatible with older AVR based motion controllers such as RAMPS.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="images/smoothiedriver-gamma-no-connectors-small.jpg">
    <img src="images/smoothiedriver-gamma-no-connectors-small.jpg" alt="Smoothiedriver gamma board" style="min-width: 640px; width: 80%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

The first Smoothiedriver is a DC motor controller with encoder feedback, implemented as a full H-bridge driven by an ARM Cortex-M0 microcontroller.

The current prototype is a triple channel controller that can drive 3.5A per channel.

More drivers are planned and are in development from stepper drivers that can handle over 2A with 64x microstepping to BLDC controllers!



## Board Layout

This image shows the board layout of the Smoothiedriver interface:

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="images/smoothie-driver-port.png">
    <img src="images/smoothie-driver-port.png" alt="SmoothieDriver Port Layout" style="min-width: 640px; width: 80%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

You can download the eagle files for that image to check sizing here:

- [SmoothieDriverPort.sch](smoothiedriver/smoothiedriverport.sch)
- [SmoothieDriverPort.brd](smoothiedriver/smoothiedriverport.brd)



## Smoothiedriver Levels of Compliance

### Smoothie-compatible motor controllers

- **Class X2. Electrically Compatible**
  - En-Dir-Step electrical interface

- **Class X1. Hardware Compatible**
  - All requirements of Class X2
  - East edge pinout compatibility w/ Smoothieboard no-driver

The Pololu A4988 breakout boards commonly used in RAMPS boards and the CW4050 are examples of Class X2 Smoothie-compatible drivers as are most external stepper drivers that support parallel interface.

### Smoothiedriver motor controllers

- **Class 2. Basic Smoothiedriver**
  - All requirements of Class X1
  - En-Dir-Step pins become En-Sda-Scl when En is disabled to receive basic config
  - North-South hardware I2C bus is passed through

- **Class 1. Standard Smoothiedriver**
  - All requirements of Class 2
  - Hardware I2C bus fully supports the Smoothie Accessory Protocol

The first true Smoothiedriver will probably be the Smoothiedriver DC.

It will begin as a Class 2 Smoothiedriver until firmware for full Class 1 support has been completed on both sides (Smoothieware and Smoothieware Mini).



## Status

The first Smoothiedriver DC-2 prototype had firmware but it was using a different MCU than is currently being targeted so the firmware will have to be rewritten.

On the bright side, [mbed](https://www.mbed.org) just went open source so now the same libraries can be used for both [Smoothieware](smoothieware) and [Smoothieware Mini](accessory)!


