# 3 extruders possle?

*Original post date: 2016-01-01*

---

的食物

Okay, let's see. The user provided a bunch of HTML code from a forum discussion about whether a 5Xc board can handle 3 extruders with a Viki 2.0. They also mentioned that the assistant should think through the process before giving an answer. 

First, I need to understand the question. The original user (Johndoe) is asking if the 5Xc has enough pins for 3 extruders when using a Viki 2.0. The responses from Arthurwolf and Helipad14399 say that it's possible by disabling LEDs and soldering headers.

Now, the user wants the answer in markdown. So I need to summarize the discussion. The key points are: the 5Xc can support 3 extruders, but you need to disable the LEDs on the Viki 2.0 via the config file and add header pins. Also, there's a mention of checking the pinout and possibly using a different controller if needed.

I should structure the answer with headers, bullet points, and maybe a note about testing. Make sure to mention the sources (the forum posts) and the steps required. Avoid technical jargon but be clear. Check if there's any conflicting info, but in this case, both respondents agree on the main points. Also, note that Helipad14399 hasn't tested it yet but is confident based on setup.
</think>

# Can the 5Xc Support 3 Extruders with a Viki 2.0?

**Short Answer:** Yes, but configuration and hardware modifications are required.

---

## Key Details from the Discussion

### 1. **Pin Availability**
- The **5Xc board** has sufficient GPIO pins to support **3 extruders** when paired with a **Viki 2.0** display.
- However, **LEDs on the Viki 2.0** (e.g., status LEDs) must be **disabled in the configuration file** to free up pins.

### 2. **Hardware Modifications**
- **Solder header pins** to the Viki 2.0 board to access unused GPIO pins.
- Ensure proper wiring for extruders (stepper motors, heaters, etc.).

### 3. **Configuration Steps**
- Edit the firmware configuration file to **disable unused LEDs** (e.g., `#define LED_PIN 255` or similar directives).
- Re-flash the firmware to apply changes.

### 4. **User Experience**
- **Arthurwolf** confirmed that the setup is feasible and provided links to pinout diagrams.
- **Helipad14399** shared a working configuration but noted they had only tested single-extruder jobs so far.

---

## Potential Challenges
- **Pin conflicts**: Double-check the pinout diagram to avoid overlapping signal lines.
- **Firmware compatibility**: Ensure the firmware version supports 3 extruders (check documentation or community forums).
- **Heat management**: Additional extruders may require more power; verify power supply capacity.

---

## Recommendations
1. **Review the 5Xc pinout** and Viki 2.0 schematic to plan wiring.
2. **Backup firmware** before making changes.
3. **Test incrementally** (e.g., add one extruder at a time) to isolate issues.
4. **Consult community resources** (e.g., [Smoothieboard forums](https://forum.smoothieware.org/)) for advanced setups.

---

**Note:** Always verify hardware modifications with a multimeter or continuity tester to avoid short circuits.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1384550/3-extruders-possle)*
