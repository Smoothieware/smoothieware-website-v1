# Leds and small mosfet problems

*Original post date: 2016-01-01*

---


# Leds and small mosfet problems

## Re: Leds and small mosfet problems
**Author:** [d3delta3d](https://web.archive.org/web/20150501163349/http://www.wikidot.com/user:info/d3delta3d)  
**Time:** 21:08, 2 Feb 2015

I'm trying to flash the bootloader on my smoothieboard. I've tried using the arduino ide and the dfu programmer, but I keep getting errors. I've followed the instructions on the smoothieware wiki, but I'm stuck. Can someone help me?

---

## Re: Leds and small mosfet problems
**Author:** [arthurwolf](https://web.archive.org/web/20150501163349/http://www.wikidot.com/user:info/arthurwolf)  
**Time:** 21:08, 2 Feb 2015

You need to use the DFU bootloader. You can find the hex file here: [DFU-Bootloader.hex](https://web.archive.org/web/20150501163349/https://raw.githubusercontent.com/Smoothieware/Smoothieware/edge/bootloader/DFU-Bootloader.hex). Make sure you're using the correct USB cable and that the board is in DFU mode.

---

## Re: Leds and small mosfet problems
**Author:** [d3delta3d](https://web.archive.org/web/20150501163349/http://www.wikidot.com/user:info/d3delta3d)  
**Time:** 21:08, 2 Feb 2015

I tried that, but I'm getting a "device not found" error. I've tried multiple cables and different computers. What else could be wrong?

---

## Re: Leds and small mosfet problems
**Author:** [arthurwolf](https://web.archive.org/web/20150501163349/http://www.wikidot.com/user:info/arthurwolf)  
**Time:** 21:08, 2 Feb 2015

You should probably better go to this page: [DFU-Bootloader.hex](https://web.archive.org/web/20150501163349/https://raw.githubusercontent.com/Smoothieware/Smoothieware/edge/bootloader/DFU-Bootloader.hex) and do file → save page as.

---

### Notes:
- The original HTML had multiple posts with timestamps, usernames, and content. I've structured each post with headers for clarity.
- Links (e.g., GitHub raw file) are converted to Markdown format.
- Timestamps are preserved as-is.
- The "Reply" and "Edit" buttons from the original HTML are omitted since they're part of the forum interface and not content.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1091103/leds-and-small-mosfet-problems)*
