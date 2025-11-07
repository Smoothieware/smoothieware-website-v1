# Only one thermister pin reads.

*Original post date: 2016-01-01*

---

kościelny

Okay, let's see. The user provided a block of HTML code from a forum thread discussing an issue with a 3D printer where only one thermistor pin is reading. They also mentioned that they've tried moving the printer to another room and using shielded cables. The assistant's previous response was in Polish, but the user now wants the answer in English. 

First, I need to understand the problem. The user is having trouble with their 3D printer's thermistors—only one pin is working. They've already taken steps like moving the printer and using shielded cables, but the issue persists. The forum thread has a few posts, and the user is looking for further troubleshooting steps.

The previous answer in Polish suggested checking the wiring, ensuring correct connections, verifying the thermistor itself, checking the motherboard, and considering firmware issues. Now, the user wants the same information in English. 

I should make sure to translate the advice accurately while maintaining the technical terms. Also, since the user is on a forum, they might be looking for community-based solutions, so the response should be clear and step-by-step. 

I need to check if there are any other possible causes not mentioned before, like software configuration, sensor calibration, or power supply issues. However, the previous answer covered hardware aspects. Maybe adding a point about checking the firmware or configuration files could be helpful. 

Also, the user mentioned moving the printer to another room and using shielded cables, which suggests they're concerned about EMI (electromagnetic interference). The previous answer addressed that by mentioning EMI and proper shielding. 

I should structure the response in a numbered list for clarity, ensuring each step is actionable. Make sure to use correct terminology related to 3D printers, like "motherboard," "thermistor," "shielded cables," etc. 

Double-check that all the points from the previous answer are included but translated properly. Avoid any markdown formatting as per the user's request. Keep the language simple and direct, suitable for someone troubleshooting a technical issue.
</think>

Here’s a structured approach to troubleshoot the thermistor issue on your 3D printer:

1. **Verify Wiring Connections**  
   - Ensure all thermistor wires are securely connected to the motherboard and the thermistors themselves. Check for loose or damaged pins on the motherboard.

2. **Test Thermistor Continuity**  
   - Use a multimeter to measure resistance across the thermistor. Compare the readings to the manufacturer’s specifications for your thermistor type (e.g., 100kΩ at 25°C). A faulty thermistor may show incorrect resistance values.

3. **Check for Short Circuits**  
   - Inspect the wiring for any shorts or insulation damage. Ensure thermistor cables are not touching other components or power lines.

4. **Isolate the Motherboard**  
   - Temporarily disconnect all thermistor cables from the motherboard. Reconnect them one by one to identify if a specific thermistor or cable is causing the issue.

5. **Test with a Known Good Thermistor**  
   - Swap the non-working thermistor with a confirmed functional one. If the issue moves, the original thermistor is faulty.

6. **Inspect the Motherboard**  
   - Look for signs of damage on the motherboard, such as burnt components or solder joints near the thermistor pins. A damaged motherboard may fail to read certain pins.

7. **Firmware/Software Check**  
   - Ensure your printer’s firmware is up to date. Outdated firmware might misinterpret sensor data. Check the configuration files (e.g., `configuration.g` or `printer.cfg`) for correct thermistor settings.

8. **Power Supply Stability**  
   - A weak or unstable power supply can cause intermittent sensor failures. Test with a known good power supply if possible.

9. **EMI Interference (Advanced)**  
   - While you’ve already used shielded cables, ensure they are properly grounded. Avoid running thermistor cables parallel to high-current stepper motor wires.

If the problem persists after these steps, consider contacting the printer’s manufacturer or a hardware specialist for further diagnostics.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160409040817/http://smoothieware.org/forum/t-1651501/only-one-thermister-pin-reads)*
