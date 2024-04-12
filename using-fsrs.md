
To use FSR's with the Smoothieboard, an auxiliary board is needed to interface the FSR's to the Smoothieboard's endstop input. Smoothieware will accept this input as if it were a simple mechanical switch.

JohnSL on [Github](https://github.com/JohnSL/FSR_Endstop) has created such a board. It is available via [AndOrNot](http://www.andornot.co.uk/product/fsr-controller), [TriD Printing](http://www.tridprinting.com/Electronics/#3D-Printer-FSR), and [UltiBots](http://www.ultibots.com/fsr-leveling). See [John's blog post](http://trains.socha.com/2014/05/auto-adjust-fsr-end-stop-detector.html) about the board. This board is powered from the endstop pins. Also, see AndOrNot's write-up on FSR's design for a delta printer [FSR pad design](http://www.andornot.co.uk/fsr-leveling/).

There is also a 4-point FSR controller called "Toucher" on [Github](https://github.com/random-builder/toucher) suitable for square heat beds on Cartesian machines. A reference FSR mount design is published on [Thingiverse](https://www.thingiverse.com/thing:2461845).

The [Deltabot group](https://groups.google.com/forum/#!searchin/deltabot/fsr) is where most discussion on using FSR's is located. Topics to look for are:
- Alternative boards like the Arduino Mini.
- WingWong's Trinket derived design.
- Mounting of FSR's
