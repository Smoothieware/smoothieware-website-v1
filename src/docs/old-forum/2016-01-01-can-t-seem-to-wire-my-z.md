# Can't seem to wire my z

*Original post date: 2016-01-01*

---

ท่องเที่ยว

Okay, let's see. The user provided a conversation between two people discussing issues with wiring a Z-probe on a 3D printer, specifically the Smoothieboard. The first user, Dave, mentioned that the Z-probe isn't triggering, and the red LED on the probe isn't lighting up. The second user, Chris, shared his configuration and wiring setup, and the first user, Dave, responded with some suggestions.

Now, the user wants me to act as a helpful assistant and provide a detailed explanation of the problem and solution. Let me break this down step by step.

First, I need to understand the problem. The Z-probe isn't working, which could be due to wiring issues, incorrect configuration in the firmware, or the probe itself being faulty. The user mentioned the red LED not lighting up, which might indicate a power issue or a problem with the wiring.

Looking at Chris's configuration, he has the Z-probe connected to pin 1.28^! with an inversion (the !). The pin is set to NC (normally closed), but he changed gamma_min_endstop to nc to prevent conflict. However, the probe isn't triggering, so maybe the inversion is incorrect, or the pin is not properly connected.

Dave suggested checking the wiring, ensuring the probe is connected to the correct pin, and verifying the configuration. He also mentioned that the red LED not lighting up could mean the probe isn't receiving power, which might be due to a broken wire or a faulty probe.

Another point is the use of the inversion. If the probe is a NO (normally open) switch, the inversion might be incorrect. The ! in the configuration inverts the signal, so if the probe is NC, the inversion is correct. But if it's NO, the inversion should be removed.

Also, the configuration for the Z-probe includes the probe_pin, debounce_count, and other parameters. It's important to ensure that the pin is correctly specified and that the debounce count is set appropriately to avoid noise.

Additionally, the user should check if the Z-probe is properly seated and if there are any loose connections. Testing the probe with a multimeter could help determine if it's receiving power and if the signal is being sent correctly.

In the configuration, the gamma_min_endstop is set to nc, which might be conflicting with the Z-probe setup. Ensuring that the endstop pin is correctly assigned and not conflicting with other settings is crucial.

Another thing to consider is the firmware version. If the firmware is outdated, there might be bugs or incompatibilities with the Z-probe configuration. Updating the firmware could resolve the issue.

Lastly, the user should verify that the Z-probe is compatible with the Smoothieboard and that the wiring matches the required specifications. If all else fails, replacing the Z-probe with a known working one could help isolate the problem.
</think>

To resolve the issue with the Z-probe not triggering on your 3D printer (Smoothieboard), follow these steps systematically:

---

### **1. Verify Wiring and Hardware**
- **Check Power Supply**: Ensure the Z-probe is receiving power. The red LED on the probe should light up when connected. If it doesn’t, inspect the wiring for breaks or loose connections.
- **Pin Configuration**: Confirm the Z-probe is connected to **pin 1.28** on the Smoothieboard. The `!` in `zprobe.probe_pin 1.28^!` inverts the signal, which is correct **if the probe is NC (normally closed)**. If the probe is **NO (normally open)**, remove the `!` (i.e., use `1.28^`).
- **Endstop Pin Conflict**: The `gamma_min_endstop` is set to `nc` to avoid conflict with the Z-probe. Ensure this is correctly configured and that no other endstop is using the same pin.

---

### **2. Validate Firmware Configuration**
Review and adjust the configuration in your firmware (e.g., `config.g` or `printer.cfg`):

#### **Z-Probe Settings**
```ini
zprobe.enable true
zprobe.probe_pin 1.28^!  ; Ensure this matches your probe type (NC/NO)
zprobe.slow_feedrate 1.5
zprobe.debounce_count 100
zprobe.fast_feedrate 20
zprobe.probe_height 5

- **Inversion (`!`)**: Only use `!` if the probe is **NC**. If the probe is **NO**, remove the `!` (i.e., `1.28^`).
- **Debounce Count**: A value of `100` is standard for most probes. If the probe is noisy, increase this value slightly.

#### **Endstop Settings**
```ini
gamma_min_endstop nc  ; Prevents conflict with Z-probe

- Ensure `gamma_min_endstop` is set to `nc` if using the Z-probe on this pin.

#### **Leveling Strategy**
```ini
leveling-strategy.three-point-leveling.enable true
leveling-strategy.three-point-leveling.point1 20,5
leveling-strategy.three-point-leveling.point2 180,5
leveling-strategy.three-point-leveling.point3 180,140

- Verify the probe points are within the printer’s bed dimensions.

---

### **3. Test the Probe**
- **Multimeter Test**: Use a multimeter to check continuity between the probe’s signal pin and ground when the probe is triggered. This confirms the probe is functioning.
- **Manual Trigger**: Manually press the probe to see if the signal changes (e.g., voltage drops or rises). If no change, the probe may be faulty.

---

### **4. Firmware and Compatibility**
- **Firmware Version**: Ensure your Smoothieboard firmware is up to date. Older versions may have bugs affecting Z-probe functionality.
- **Probe Compatibility**: Confirm the Z-probe is compatible with the Smoothieboard. Some probes require specific resistors or voltage levels.

---

### **5. Debugging Tips**
- **Serial Monitor**: Use the serial monitor to check for error messages related to the Z-probe (e.g., "Z-probe not triggered").
- **Simplify Configuration**: Temporarily disable other features (e.g., auto-leveling) to isolate the issue.
- **Swap Components**: Test with a different Z-probe or Smoothieboard to rule out hardware faults.

---

### **6. Example Configuration (Corrected)**
If your probe is **NO** (normally open), adjust the configuration:
```ini
zprobe.probe_pin 1.28^  ; No inversion for NO probe
gamma_min_endstop nc

---

### **7. Final Checks**
- **Reboot the Printer**: After making changes, reboot the printer to apply new settings.
- **Test Homing**: Use the `G28` command to home the printer and observe if the Z-probe triggers correctly.

---

By systematically addressing wiring, configuration, and hardware, you should resolve the Z-probe issue. If problems persist, consider reaching out to the Smoothieboard community or the probe manufacturer for further support.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160409040817/http://smoothieware.org/forum/t-1475368/can-t-seem-to-wire-my-z-probe-right)*
