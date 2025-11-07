---
permalink: /using-fsrs
---

# Using FSRs with Smoothieboard

FSRs (Force Sensing Resistors) can be used as bed leveling sensors with Smoothieboard to provide automatic bed leveling for 3D printers.

## Overview

To use FSRs with the Smoothieboard, an auxiliary board is needed to interface the FSRs to the Smoothieboard's endstop input.

Smoothieware will accept this input as if it were a simple mechanical switch.

## Available FSR Controller Boards

### JohnSL FSR Endstop Board

JohnSL on [GitHub](https://github.com/JohnSL/FSR_Endstop) has created an FSR controller board specifically for this purpose.

**Where to buy:**

- [AndOrNot](http://www.andornot.co.uk/product/fsr-controller)
- [TriD Printing](http://www.tridprinting.com/Electronics/#3D-Printer-FSR)
- [UltiBots](http://www.ultibots.com/fsr-leveling)

**Resources:**

- [John's blog post](http://trains.socha.com/2014/05/auto-adjust-fsr-end-stop-detector.html) about the board
- [FSR pad design](http://www.andornot.co.uk/fsr-leveling/) by AndOrNot for delta printers

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This board is powered directly from the endstop pins, making installation straightforward.
</sl-alert>
{:/nomarkdown}

### Toucher - 4-Point FSR Controller

For Cartesian machines with square heat beds, there is a 4-point FSR controller called "Toucher".

**Resources:**

- [Toucher on GitHub](https://github.com/random-builder/toucher)
- [FSR mount design on Thingiverse](https://www.thingiverse.com/thing:2461845)

## Community Discussion and Resources

The [Deltabot group](https://groups.google.com/forum/#!searchin/deltabot/fsr) is where most discussion on using FSRs is located.

**Topics to look for:**

- Alternative boards like the Arduino Mini
- WingWong's Trinket-derived design
- FSR mounting techniques and best practices

## Related Documentation

For more information about bed leveling and probing, see:

- [ZProbe](zprobe) - Main probing documentation
- [Endstops](endstops) - Endstop configuration
- [3D Printer Guide](3d-printer-guide) - General 3D printing setup
