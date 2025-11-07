# USB connection from Linux

*Original post date: 2016-01-01*

---


---

### **smoothie** (2014-04-24 14:23:21)
> I'm trying to connect my Smoothie board to my computer via USB, but I'm not getting any recognition. I've tried using Pronterface and OctoPrint, but neither is detecting the board. Any ideas?

```gcode
; This is a sample gcode file
G21 ; set units to mm
G90 ; absolute positioning
M105 ; get temperature
G0 X10 Y20 Z5 ; move to position

---

### **mrk** (2014-04-24 14:23:21)
> Have you tried plugging it into a different USB port? Also, make sure the board is powered on. If you're using a USB-to-serial adapter, check if the drivers are installed correctly.

---

### **smoothie** (2014-04-24 14:23:21)
> I tried a different port and confirmed the board is powered. I'm using a USB-to-serial adapter, but I'm not sure about the drivers. How can I check if they're installed?

---

### **mrk** (2014-04-24 14:23:21)
> You can check device manager (on Windows) or `ls /dev/tty*` (on Linux) to see if the adapter is recognized. If not, you may need to install the appropriate drivers for your adapter.

---

### **mrk** (2015-01-29 12:18:08)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12: intimidate
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board are on, and power seems fine, but no USB connection. Anyone else experience this?

---

### **arthurwolf** (2015-01-29 12:19:00)
> Can you try with another SD card?

---

### **dholland2219453** (2015-01-29 12:18:08)
> I've tried with another SD card, and it still doesn't work. The LEDs on the board hammered
>

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-706856/usb-connection-from-linux)*
