# Automatic Z height before each print

*Original post date: 2016-01-01*

---

במהל

Okay, let's see. The user is asking about automatically setting the Z height before each print using a probe. They mentioned using G30 Z0, which I think is a command to home the Z-axis to the bed. But they want to know how to store that value so it's used for each print.

Hmm, in 3D printing, the Z height is usually set during the bed leveling process. If they're using a probe, the firmware should handle that. Maybe they're using Marlin or another firmware. I remember that in Marlin, you can use G30 to probe the bed, and it saves the offset. But if they're using a different firmware, the process might vary.

Wait, the user mentioned a FSR (Force Sensitive Resistor) as the probe. That's a type of sensor that detects pressure. So they might be using a custom setup. In that case, the firmware might need specific configuration to use the FSR as a probe. They might need to set the probe type in the firmware configuration, like in the pins.h file for Marlin.

Also, the user might need to ensure that the firmware is set to use the probe for auto-leveling. If they're using a delta printer, the setup could be different. But the user didn't specify the printer type. Maybe they should check their firmware's documentation on how to configure the probe.

Another thing is that after probing with G30, the Z offset is stored in the firmware's EEPROM. So each time the printer starts, it should use that stored value. But if the user is manually entering G30 each time, that might not be saved. They might need to use a command like M500 to save the settings to EEPROM, and M501 to load them.

Wait, but in some firmwares, G30 automatically saves the offset. So maybe the user just needs to run G30 once, and then the printer will use that value for subsequent prints. However, if the bed is not perfectly flat, they might need to do a mesh bed leveling instead of a single point.

I should also mention checking the firmware's configuration for probe settings, ensuring that the correct pin is set for the FSR, and that the probe is enabled. If the firmware isn't configured correctly, the probe won't work as expected.

So, putting it all together, the steps would be: configure the firmware for the FSR probe, use G30 to probe the bed, save the settings with M500, and then the printer should use the stored Z height automatically. If they're still having issues, they might need to check the firmware's documentation or community forums for specific setup steps for their hardware.
</think>

To automatically set the Z height before each print using a probe (like an FSR), follow these steps:

### 1. **Firmware Configuration**
Ensure your firmware (e.g., Marlin, Smoothie, etc.) is configured to use the probe:
- **Pin Assignment**: Set the correct pin for the FSR in the firmware's configuration file (e.g., `pins.h` for Marlin).
- **Probe Type**: Define the probe type (e.g., `FSR` or `BLTouch`) in the firmware settings.
- **Auto-Leveling**: Enable auto-leveling features if your firmware supports it (e.g., `MESH_BED_LEVELING` in Marlin).

### 2. **Probe the Bed**
Use the `G30` command to probe the bed:
- **Command**: `G30 Z0` (homes the Z-axis to the bed and sets Z=0 at the probe point).
- **Multiple Points**: For better accuracy, probe multiple points and use mesh leveling (e.g., `G29` in Marlin).

### 3. **Save Settings to EEPROM**
After probing, save the settings to EEPROM so they persist across restarts:
- **Command**: `M500` (saves current settings to EEPROM).
- **Load Settings**: `M501` (loads saved settings from EEPROM).

### 4. **Automate with G-Code**
Add `G30` or `G29` to your printer's start G-code (in slicing software) to automatically probe before each print.

### 5. **Verify Firmware Compatibility**
- **FSR Setup**: Ensure your firmware supports FSR as a probe. If not, consider using a different probe (e.g., BLTouch) or update the firmware.
- **EEPROM**: Confirm that `M500`/`M501` works with your firmware.

### Example (Marlin):
```cpp
// In Configuration.h
#define PROBE_OFFSET_X  0
#define PROBE_OFFSET_Y  0
#define PROBE_OFFSET_Z  0
#define Z_PROBE_OFFSET_RANGE_MIN -5
#define Z_PROBE_OFFSET_RANGE_MAX 5

### Troubleshooting
- **No Probe Detection**: Check pin wiring and firmware configuration.
- **Inconsistent Z Height**: Use mesh leveling (`G29`) for uneven beds.
- **Firmware Updates**: Ensure you're using the latest firmware version for your printer.

By following these steps, your printer should automatically adjust the Z height using the probe for each print. If issues persist, consult your firmware's documentation or community forums for hardware-specific guidance.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008164116/http://smoothieware.org/forum/t-1177586/automatic-z-height-before-each-print)*
