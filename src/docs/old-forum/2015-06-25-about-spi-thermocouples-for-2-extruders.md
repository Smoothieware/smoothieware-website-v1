# about SPI thermocouples for 2 extruders

*Original post date: 2016-01-01*

---

## about SPI thermocouples for 2 extruders

**by vongoethe**, 25 Jun 2015 16:48

You just need to choose another pin on the smoothieboard to connect to the CS (chip select) for the second thermocouple, and update the configuration correspondingly.  
GND, V3V, MOSI (master out slave in) and SCK (spi clock) should be connected in parallel for both thermocouples.  
Good luck!

---

## Re: about SPI thermocouples for 2 extruders

**by hakalan**, 26 Jun 2015 18:51

You just need to choose another pin on the smoothieboard to connect to the CS (chip select) for the second thermocouple, and update the configuration correspondingly.  
GND, V3V, MOSI (master out slave in) and SCK (spi clock) should be connected in parallel for both thermocouples.  
Good luck!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720080445/http://smoothieware.org/forum/t-1258262/about-spi-thermocouples-for-2-extruders)*
