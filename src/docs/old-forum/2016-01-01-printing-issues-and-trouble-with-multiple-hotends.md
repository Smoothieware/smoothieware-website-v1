# Printing issues and trouble with multiple hotends.

*Original post date: 2016-01-01*

---

アルバート

Okay, let's see. The user provided a conversation between two people discussing issues with a 3D printer, specifically problems with multiple hotends and firmware. The user wants me to act as an assistant and provide a helpful response. 

First, I need to understand the problem. The user, nfrank89, is having trouble getting their 3D printer to work with three extruders. They mentioned that the firmware might have a limit on the number of extruders, and they need to compile it with a special flag. Also, there's an issue with the thermistor not being detected, which might be related to the wiring or the firmware configuration.

Looking at the previous messages, Arthurwolf suggested checking the firmware version and compiling with a special flag for three extruders. The user also tried using msd_disable but didn't have success. Now, the user is asking for help again, possibly needing more detailed steps on how to compile the firmware with the necessary flag or check the thermistor connections.

I should break down the possible solutions step by step. First, confirm the firmware version. If it's an older version, updating might help. Then, check if the firmware supports three extruders. If not, they might need to recompile it with the appropriate flag, like MAX_EXTRUDERS=3. 

For the thermistor issue, checking the wiring is crucial. Ensure that the thermistor is properly connected to the correct pin on the board. Also, verifying the firmware configuration for the thermistor type and pin settings could be necessary. Maybe the user has the wrong thermistor type selected in the firmware, leading to no readings.

Additionally, the user might need to check the board's documentation to confirm if it supports three extruders and the required firmware settings. If they're using a custom board, the configuration might be different. 

I should also mention possible alternative solutions, like using a different firmware version or checking for any hardware issues, such as a faulty thermistor or damaged board pins. Providing clear, step-by-step instructions would be helpful here, ensuring the user can follow each part without confusion.
</think>

To address the issues with your 3D printer's multiple hotends and thermistor detection, follow these steps:

---

### **1. Firmware Configuration for Multiple Extruders**
- **Check Firmware Version**: Ensure you're using the latest firmware. Older versions may have limitations (e.g., only supporting 2 extruders by default).
- **Recompile Firmware**:
  - If your firmware (e.g., Marlin, RepRap) supports it, recompile with a flag like `#define MAX_EXTRUDERS 3` in the configuration file.
  - For Marlin: Modify `Configuration.h` and set `#define MAX_EXTRUDERS 3`. Recompile and flash the firmware.
  - For other firmwares: Check the documentation for the correct flag or setting.

---

### **2. Thermistor Detection Issues**
- **Verify Wiring**:
  - Ensure the thermistor is connected to the correct pin (e.g., `TEMP_0_PIN` for the first extruder).
  - Check for loose connections or damaged wires.
- **Firmware Configuration**:
  - Confirm the thermistor type in the firmware (e.g., `#define TEMP_SENSOR_0 1` for a 10kΩ thermistor).
  - If using a custom thermistor, ensure the resistance value matches the firmware settings.
- **Test with a Multimeter**:
  - Measure the thermistor's resistance at room temperature (should be ~10kΩ for a standard 10kΩ thermistor). If it's incorrect, the thermistor may be faulty.

---

### **3. Additional Checks**
- **Board Compatibility**: Confirm your board (e.g., RAMPS, SKR, etc.) supports 3 extruders. Some boards require specific firmware configurations or additional components (e.g., MOSFETs for power control).
- **USB Communication**: If the printer isn't responding, check the USB connection and try a different cable/USB port.
- **Firmware Flags**: For Marlin, ensure flags like `#define EXTRUDERS 3` and `#define E0_AUTO_HOME` (if needed) are set correctly.

---

### **4. Alternative Solutions**
- **Use a Different Firmware**: If your current firmware doesn't support 3 extruders, consider switching to a version known to work (e.g., Marlin 2.0.x with `MAX_EXTRUDERS=3`).
- **Hardware Diagnostics**: If the thermistor still isn't detected, test it on another board or with a different printer to rule out hardware failure.

---

If you share your firmware version, board type, and thermistor model, I can provide more tailored guidance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1794670/printing-issues-and-trouble-with-multiple-hotends)*
