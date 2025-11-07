# Z probe with FSR

*Original post date: 2016-01-01*

---

# Z probe with FSR

## Forum Thread: Z probe with FSR

### Posted by nevarore on 02 Oct 2014 09:50

Hello,

I'm trying to use an FSR (Force-Sensitive Resistor) as a Z probe for my 3D printer. Can I use the thermistor input (or any other analog input) to read the FSR's signal directly, or do I need a separate microcontroller to process the analog signal and output a digital signal to the Z-Probe connection?

If I can use the thermistor input, what settings would I need to adjust in the firmware to make it work?

Thanks in advance for any help!

---

### Re: Z probe with FSR  
**Posted by mitchdes on 07 Oct 2014 13:00**

Have a look over at the [delta printer Google group](https://groups.google.com/g/delta-printer). There's lots of information about using FSR for calibration.

Some people seem to be using an [ATtiny85](https://www.microchip.com/en-us/product/ATtiny85) to process the analog signal from the FSR and then output a digital signal to the Z-Probe connection. The ATtiny also runs software which works to calibrate the FSR at startup so as to avoid false readings.

Hope this is of some help.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1034591/z-probe-with-fsr)*
