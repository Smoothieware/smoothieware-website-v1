# Smoothieboard looses extruder set ?

*Original post date: 2016-01-01*

---

utherland

Okay, let's see. The user is having an issue with their Smoothieboard where the extruder temperature is getting too high, causing smoke. They mentioned that the board "looses extruder set," which I think means it's not maintaining the set temperature. The first response suggested checking the thermistor connection.

Hmm, thermistor problems are common in 3D printers. If the thermistor isn't connected properly or is damaged, the board might not read the correct temperature. That could cause the heater to keep running, leading to overheating. But the user also mentioned that when they set a new temperature, it works, but then it loses it again. That's a bit confusing. If the thermistor was completely disconnected, the board would probably just keep heating without any feedback. But since it works initially, maybe there's an intermittent connection.

Wait, the user said they checked the thermistor and the connection. Maybe they should check the thermistor's resistance with a multimeter. The correct resistance for a typical thermistor at room temperature is around 100kΩ. If it's way off, the thermistor is bad. Also, checking the wiring between the thermistor and the board for any breaks or poor contacts.

Another possibility is the heater cartridge itself. If the heater is faulty, it might not be turning off when it should. But the user mentioned that when they set a new temperature, it works. So maybe the heater is okay, but the temperature sensing is the issue.

Wait, the user also mentioned that the heated bed might be involved. The initial response didn't address that, but the user's problem is specifically with the extruder. However, if the bed's thermistor is faulty, maybe the board is having issues with temperature sensing in general. But the user's main issue is the extruder, so probably not the bed.

Another angle: firmware issues. Could there be a bug in the Smoothieboard's firmware that's causing it to misread the thermistor? But the user would need to check for firmware updates or reflash the board. However, the first response didn't mention that, so maybe it's more likely a hardware issue.

Also, the user should check the power supply. If the voltage is unstable, it might affect the heater's performance. But again, the initial response focused on the thermistor.

Wait, the user's problem is that after setting the temperature, it loses it. That suggests that the board is not getting accurate feedback from the thermistor. So even if the heater is working, the board thinks the temperature is lower than it is, so it keeps heating. Or maybe the opposite: the board thinks it's hotter than it is, so it stops heating prematurely. But the user mentioned smoke, which implies overheating, so probably the board isn't detecting the high temperature, leading to continuous heating.

So the steps would be: check thermistor resistance, check connections, check for cold solder joints on the board, check the heater cartridge for shorts or damage. Also, maybe the MOSFET controlling the heater is faulty. If the MOSFET is failing, it might not be turning off the heater properly, leading to overheating.

But the user hasn't mentioned any other symptoms, like the heater not working at all. Since it works when they set the temperature, the heater is probably functional. So the main issue is the temperature sensing.

Another thought: the thermistor might be installed incorrectly. For example, if it's supposed to be in the hotend but is placed in the heatbreak or somewhere else where the temperature isn't accurate. That could cause the board to misread the temperature.

In summary, the user should check the thermistor's resistance, ensure it's properly connected, check for any physical damage, and verify the installation location. If all that's good, then check the heater cartridge and the MOSFET. If those are okay, maybe the Smoothieboard itself has a hardware issue.
</think>

The issue you're experiencing with your Smoothieboard, where the extruder temperature is not being maintained and causing overheating, is likely due to a problem with the thermistor or its connection. Here's a structured approach to diagnose and resolve the issue:

---

### **1. Check the Thermistor Connection**
- **Inspect the wiring**: Ensure the thermistor is securely connected to the Smoothieboard. Look for any loose, damaged, or frayed wires.
- **Check the thermistor's mounting**: Confirm that the thermistor is properly seated in the hotend or heatbreak. A misplaced thermistor (e.g., in the heatbreak instead of the hotend) can lead to incorrect temperature readings.

---

### **2. Test the Thermistor with a Multimeter**
- **Measure resistance**: At room temperature (~25°C), a typical thermistor should read approximately **100kΩ**. If the resistance is significantly different, the thermistor is faulty.
- **Check for continuity**: Ensure there are no short circuits or breaks in the thermistor's wiring.

---

### **3. Inspect the Smoothieboard for Cold Solder Joints**
- **Visual inspection**: Look for any cold solder joints on the Smoothieboard's thermistor input pins. These can cause intermittent or incorrect readings.
- **Reflow solder joints**: If you find any issues, reflow the solder joints using a soldering iron and flux.

---

### **4. Test the Heater Cartridge**
- **Check for continuity**: Use a multimeter to test the heater cartridge for continuity. A broken heater cartridge can cause the board to misinterpret temperature data.
- **Inspect for damage**: Look for any physical damage or signs of overheating on the heater cartridge.

---

### **5. Check the MOSFET (Heater Control Component)**
- **Test the MOSFET**: If the heater is not turning off when it should, the MOSFET controlling the heater might be faulty. This can lead to continuous heating and overheating.
- **Replace if necessary**: If the MOSFET is damaged, replace it with a compatible one.

---

### **6. Verify Firmware and Configuration**
- **Update firmware**: Ensure your Smoothieboard is running the latest firmware. Outdated firmware can sometimes cause temperature sensing issues.
- **Check configuration**: Verify that the thermistor type and calibration settings in the firmware match your hardware (e.g., `thermistor_type` in `config.g`).

---

### **7. Test with a Known Good Thermistor**
- **Swap the thermistor**: If possible, test with a known good thermistor to confirm whether the issue is with the current one.

---

### **8. Power Supply Stability**
- **Check voltage**: Ensure the power supply is providing stable voltage (typically 12V–24V for most 3D printers). Fluctuations can affect heater performance and temperature readings.

---

### **Summary**
The most likely cause is a faulty or improperly connected thermistor. Follow the steps above to isolate the issue. If all hardware checks out, consider reaching out to the Smoothieboard community or manufacturer for further assistance.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1216248/smoothieboard-looses-extruder-set)*
