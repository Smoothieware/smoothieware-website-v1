# ZProbe Setup

*Original post date: 2016-01-01*

---

TTC: 10000

Okay, let's see. The user is having trouble with their 3D printer's Z probe setup. They mentioned that after homing and lifting the Z axis, running G32 for calibration doesn't work as expected. The probe triggers when they try to do G32, and after calibration, the print starts at 5mm instead of the correct height.

Hmm, first, I need to recall how the Z probe works in Marlin firmware. The G32 command is used to perform a Z probe calibration, which adjusts the Z offset based on the probe's readings. But if the probe is triggering when it shouldn't, maybe the probe's position is incorrect or the settings in the configuration are wrong.

Wait, the user mentioned that after running G28, G1 Z5, and G32, the probe triggers. That suggests that the probe might be too close to the bed when the Z axis is at 5mm. Maybe the Z probe's trigger height is set too low. In Marlin, there's a parameter called Z_PROBE_OFFSET, which defines how much the Z axis should move after probing. If that's not set correctly, the probe might hit the bed before the calibration is done.

Also, the user tried using G30 Z5 after calibration, but the probe reports 5.018mm. That seems odd because if the probe is correctly calibrated, the Z height should be adjusted based on the probe's reading. Maybe the G30 command isn't the right way to set the Z height after calibration. Instead, the G32 command should automatically adjust the Z offset, so the printer knows the correct height without needing a manual G30.

Another possibility is that the Z probe isn't properly configured in the firmware. Parameters like Z_PROBE_SPEED, Z_PROBE_RETRACT, and the probe's trigger point might be incorrect. If the probe is too sensitive or the retraction distance is wrong, it could trigger prematurely.

The user also asked about saving the calibration with M500. If the firmware is set to save the Z offset automatically after a G32, then M500 might not be necessary. But if it's not saving, they might need to run M500 manually to save the changes to the config-override file.

Wait, the user's start G-code includes G28, G1 Z5, G32, and then G30 Z5. But if G32 is supposed to adjust the Z offset, then the G30 might be redundant or even conflicting. Maybe the correct approach is to run G32, which should adjust the Z height based on the probe's reading, and then the printer should know the correct Z position without needing a G30 command.

Also, the user mentioned that after calibration, the print starts at 5mm. That suggests that the Z offset wasn't adjusted properly. The G32 command should modify the Z offset so that when the printer homes, it knows the correct Z position based on the probe's reading. If that's not happening, there might be an issue with the firmware configuration or the probe's calibration.

Another thing to check is whether the Z probe is properly connected and the endstop is working. If the probe isn't sending the correct signal, the firmware might not recognize the probe's trigger, leading to incorrect calibration.

In summary, the steps to troubleshoot would be:

1. Check the Z probe's physical setup and ensure it's not too close to the bed when the Z axis is at 5mm.
2. Verify the firmware settings related to the Z probe, such as Z_PROBE_OFFSET, Z_PROBE_SPEED, and Z_PROBE_RETRACT.
3. Ensure that the G32 command is correctly adjusting the Z offset and that the printer is using the updated offset after calibration.
4. Confirm that the M500 command is saving the changes if necessary.
5. Test the probe manually with G30 to see if it's giving the correct Z height reading.
6. Check if the firmware is set to automatically use the Z offset after calibration, so the printer doesn't need a manual G30 command.

If the user follows these steps and adjusts the settings accordingly, the Z probe should work as intended, allowing the printer to automatically adjust the Z height during calibration without manual intervention.
</think>

To resolve the Z probe calibration issue on your 3D printer, follow these steps to ensure proper setup and functionality:

---

### **1. Verify Z Probe Physical Setup**
- **Probe Position**: Ensure the Z probe is mounted correctly and not too close to the bed when the Z axis is at 5mm. The probe should trigger only when it makes contact with the bed.
- **Endstop Connection**: Confirm the Z probe is properly connected to the printer's electronics and that the endstop signal is working.

---

### **2. Check Firmware Configuration**
In your Marlin firmware, ensure the following parameters are correctly set:

- **Z_PROBE_OFFSET**: This defines how much the Z axis should move after probing. If the probe is too sensitive, adjust this value to prevent premature triggering.
  ```cpp
  #define Z_PROBE_OFFSET {0, 0, 0}  // Adjust based on your probe's position
  ```
- **Z_PROBE_SPEED**: Set the speed at which the probe moves during calibration.
  ```cpp
  #define Z_PROBE_SPEED 50  // mm/min
  ```
- **Z_PROBE_RETRACT**: Define the retraction distance after probing.
  ```cpp
  #define Z_PROBE_RETRACT 5  // mm
  ```

---

### **3. Correct G-Code Workflow**
Use the following sequence for calibration and printing:

1. **Home All Axes**:
   ```gcode
   G28
   ```
2. **Lift Z Axis**:
   ```gcode
   G1 Z5
   ```
3. **Perform Calibration**:
   ```gcode
   G32
   ```
   - **G32** automatically adjusts the Z offset based on the probe's reading. **Do not use G30** after G32, as it may override the calibration.

4. **Save Calibration (Optional)**:
   ```gcode
   M500
   ```
   - This saves the updated Z offset to the configuration file, ensuring it persists after a reboot.

---

### **4. Test Probe Manually**
Run the following to verify the probe's accuracy:
```gcode
G30

- The printer should report the Z height (e.g., `Z:5.018`). If the value is incorrect, recalibrate or adjust the probe's position.

---

### **5. Ensure Automatic Z Offset Usage**
- After running `G32`, the printer should use the updated Z offset automatically. If the Z height is still incorrect, double-check the firmware settings and probe calibration.

---

### **6. Avoid Redundant Commands**
- **Do not use `G30 Z5`** after `G32`, as it may conflict with the calibration. The `G32` command should handle the Z height adjustment.

---

### **7. Save Configuration**
- If you want the calibration to persist across reboots, run `M500` after `G32` to save the changes to the `config-override` file.

---

### **Summary**
By ensuring the Z probe is physically and electronically set up correctly, verifying firmware parameters, and using the correct G-code workflow, your printer should automatically adjust the Z height during calibration. Avoid manual `G30` commands after `G32` and save the configuration with `M500` for persistence.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1431310/zprobe-setup)*
