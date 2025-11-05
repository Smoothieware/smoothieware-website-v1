# Trouble with Z probe

*Original post date: 2016-01-01*

---

utherland

Okay, let's see. The user is having trouble with their Z probe on a 3D printer, specifically a Prusa i3. They mentioned that when they use the Z probe, the printer moves to the correct position but doesn't trigger the probe, leading to a "no probe" error. They also tried using the thumb screws on the bed to level it temporarily. 

First, I need to figure out why the Z probe isn't triggering. Common issues could be the probe's position, wiring, or the endstop settings in the firmware. The user mentioned they're using a BLTouch, which is a common type of Z probe. 

I should start by checking the physical setup. Is the BLTouch properly mounted? The probe needs to be positioned so that when the printer lowers the Z-axis, the probe makes contact with the bed. If it's too high, it won't trigger. Also, the spring tension might be too loose, so the probe doesn't push down enough. 

Next, the wiring. The BLTouch usually connects to the endstop pins on the motherboard. If the wires are loose or connected to the wrong pins, the signal won't be sent. The user should verify that the BLTouch is connected to the correct endstop headers, typically labeled as "Z_MIN" or similar. 

Firmware settings are another area to check. The firmware needs to be configured for the BLTouch. This includes setting the correct endstop type (probably a pull-up resistor) and ensuring that the Z probe offset is correctly set. If the offset is wrong, the printer might not lower the Z-axis enough to trigger the probe. 

The user might also need to calibrate the Z probe. Some firmware allows for a manual calibration where you move the nozzle to the bed and adjust the offset. If the probe isn't triggering, the calibration might not be correct. 

Another possibility is the BLTouch itself being faulty. Testing the probe with a multimeter could help determine if it's sending the correct signal when triggered. If the probe isn't working, it might need to be replaced. 

The user mentioned using the thumb screws to level the bed. While that's a temporary fix, proper leveling with the Z probe is essential for accurate prints. If the bed isn't level, the probe might not trigger consistently across the build plate. 

I should also consider the firmware version. If the user is using an older version, there might be bugs related to the BLTouch. Updating to the latest firmware could resolve the issue. 

In summary, the steps would be: check the physical installation of the BLTouch, verify wiring connections, confirm firmware settings, calibrate the probe, and test the probe's functionality. If all else fails, replacing the BLTouch might be necessary.
</think>

To resolve the issue with your Z probe (BLTouch) on your Prusa i3, follow these steps:

---

### **1. Verify Physical Installation**
- **Mounting Position**: Ensure the BLTouch is securely mounted on the printer's Z-axis. The probe should be positioned so that it makes contact with the bed when the Z-axis lowers. If it's too high, the probe won't trigger.
- **Spring Tension**: Check the spring on the BLTouch. If it's too loose, the probe might not depress enough to trigger. Adjust the spring tension if necessary.

---

### **2. Check Wiring Connections**
- **Endstop Headers**: Confirm the BLTouch is connected to the correct endstop headers on the motherboard. Typically, this is labeled as **Z_MIN** or similar. Refer to your motherboard's documentation for the correct pins.
- **Wiring Integrity**: Inspect the wires for any damage or loose connections. Ensure the BLTouch is firmly seated in the header.

---

### **3. Firmware Configuration**
- **Endstop Type**: In your firmware (e.g., Marlin), ensure the endstop type is set to **pull-up resistor** for the BLTouch. This is usually configured with a line like:
  ```cpp
  #define Z_MIN_ENDSTOP_INVERTING true  // Invert the logic for the Z probe
  ```
- **Z Probe Offset**: Verify the Z probe offset in the firmware. This defines how far the nozzle is from the bed when the probe triggers. Adjust if necessary:
  ```cpp
  #define Z_PROBE_OFFSET {0, 0, 0}  // X, Y, Z offset
  ```

---

### **4. Calibrate the Z Probe**
- **Manual Calibration**: Use the printer's control panel or a G-code sender to manually move the nozzle to the bed. Adjust the Z probe offset in the firmware until the probe triggers correctly.
- **Auto Calibration**: Some firmwares support auto-calibration. Use a command like `G32` to trigger the probe and adjust the offset automatically.

---

### **5. Test the BLTouch**
- **Multimeter Test**: Use a multimeter to check if the BLTouch sends a signal when triggered. Connect the multimeter to the BLTouch's signal pin and ground. When the probe touches the bed, the signal should change (e.g., from high to low).
- **Replace if Faulty**: If the BLTouch doesn't send a signal, it may be faulty. Replace it with a known working unit.

---

### **6. Bed Leveling**
- **Temporary Fix**: Using thumb screws to level the bed is a temporary solution. For consistent results, ensure the bed is properly leveled using the Z probe.
- **Mesh Bed Leveling**: If your firmware supports it, enable mesh bed leveling to compensate for minor bed irregularities.

---

### **7. Firmware Update**
- **Check for Updates**: Ensure your firmware is up to date. Older versions may have bugs related to the BLTouch. Update to the latest version compatible with your hardware.

---

### **Summary**
If the BLTouch isn't triggering, the issue is likely due to incorrect wiring, firmware settings, or a faulty probe. Start by verifying the physical installation and wiring, then check firmware configurations. Calibrate the probe and test its functionality. If all else fails, replace the BLTouch.

Let me know if you need help with specific firmware settings or calibration steps!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1222909/trouble-with-z-probe)*
