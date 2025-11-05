# M112 control on pins

*Original post date: 2016-01-01*

---

профессиональн

Okay, let's see. The user provided a conversation between two people, DarklyLabs and wolfmanjm, discussing an issue with the Smoothieboard and the M112 command. The problem is that when they send an M112 command, the fan doesn't turn off, and they're trying to figure out why.

First, I need to understand the context. They're using a Smoothieboard, which is a 3D printer controller. The M112 command is typically used to trigger a thermal shutdown, which should turn off all heaters and fans. But in their case, the fan isn't turning off. They mentioned that the fan is connected to a PWM pin, which is controlled via the switch case in the firmware. 

Looking at the code they provided, the fan is set to pin 10, which is a PWM pin. The switch case for the fan uses the value from the configuration, which is set to 255. The M112 command is supposed to set the fan speed to 0, but maybe the code isn't handling that correctly. 

Wait, in the code, when the fan is set to 255, it's using the PWM output. But when M112 is called, it should set the fan speed to 0. However, if the code is using a different pin or if there's a condition that's not met, the fan might not be turning off. 

Another thing to check is whether the M112 command is actually being processed. Maybe the command isn't being recognized, or there's a bug in the firmware that prevents the fan from turning off. Also, the user mentioned that the fan is a 12V fan, which might be different from the standard 5V or 12V fans used in 3D printers. If the fan is a high-power 12V fan, maybe the Smoothieboard's PWM output isn't sufficient to control it, or the relay isn't being triggered properly.

Wait, the user also mentioned that they tried using a relay, but the relay isn't turning on. That could be a separate issue. If the relay is controlled by a different pin, maybe the code isn't setting that pin to the correct state when M112 is called. Alternatively, the relay might not be receiving enough power, or there's a wiring issue.

In the code, the fan is set to pin 10, which is a PWM pin. The M112 command is supposed to set the fan speed to 0. But if the code is using a different pin for the relay, that might not be addressed in the M112 handling. The user might need to check if the relay is being controlled by a different pin and ensure that the M112 command is also setting that pin to 0.

Another possibility is that the M112 command is being intercepted by another part of the firmware, or there's a conflict with other commands. The user should verify that the M112 command is correctly parsed and that the fan control code is being executed when the command is sent.

Additionally, the user might need to check the firmware version they're using. If there's a known bug in the version they're using, updating to a newer version might resolve the issue. They could also look into the Smoothieboard's documentation to see if there are any specific configurations required for the M112 command to work with PWM-controlled fans or relays.

In summary, the main points to check are:
1. Ensure that the M112 command is correctly parsed and executed in the firmware.
2. Verify that the fan is connected to the correct pin and that the code is using the right pin for the relay if applicable.
3. Check if the relay is receiving the correct voltage and if there are any wiring issues.
4. Confirm that the firmware version is up to date and doesn't have known issues with the M112 command.
5. Review the code handling the M112 command to ensure it's setting the fan speed to 0 and the relay pin to the correct state.
</think>

The issue with the fan not turning off when using the `M112` command on the Smoothieboard likely stems from how the firmware handles PWM pins and relay control. Here's a structured breakdown of the problem and potential solutions:

---

### **Key Issues Identified**
1. **PWM Pin Configuration**:
   - The fan is connected to a **PWM pin (e.g., pin 10)**, which is controlled via the `switch` statement in the firmware. The `M112` command is intended to set the fan speed to 0, but the code may not be correctly handling this for PWM pins.

2. **Relay Control**:
   - If a **relay** is used to control the fan, the code must explicitly set the relay pin to 0 (off) during `M112`. The current configuration might not address the relay pin, leading to the fan remaining on.

3. **Firmware Version**:
   - Older firmware versions may have bugs or incomplete handling of `M112`. Updating to a newer version could resolve compatibility issues.

---

### **Solutions and Steps to Fix**

#### **1. Verify PWM Pin Handling in Firmware**
- **Check the Code**:
  Ensure the `M112` command explicitly sets the fan speed to 0 for PWM pins. For example:
  ```cpp
  case 'F': // Fan
    if (value == 255) {
      analogWrite(pin, 255); // Max speed
    } else {
      analogWrite(pin, 0);   // Off (M112 should trigger this)
    }
    break;
  ```
  If the code doesn't handle `value == 0` correctly, modify it to ensure `analogWrite(pin, 0)` is called during `M112`.

#### **2. Relay Pin Configuration**
- **Add Relay Pin Handling**:
  If the relay is on a separate pin (e.g., pin 2), update the firmware to set it to 0 during `M112`:
  ```cpp
  case 'R': // Relay
    digitalWrite(relayPin, 0); // Turn off relay
    break;
  ```
  Ensure the relay pin is defined in the configuration and that the code correctly maps it.

#### **3. Firmware Update**
- **Update to Latest Version**:
  Check the [Smoothieboard GitHub repository](https://github.com/Smoothieboard/Smoothieboard) for the latest firmware. Older versions may have bugs related to `M112` or PWM control.

#### **4. Hardware Checks**
- **Relay Power Supply**:
  Ensure the relay is receiving sufficient voltage (e.g., 12V) and that the Smoothieboard's relay pin is properly connected.
- **Fan Wiring**:
  Confirm the fan is wired correctly to the PWM pin or relay. A 12V fan may require a separate power supply, which should be verified.

#### **5. Test with G-Code**
- **Send `M112` via Host Software**:
  Use a 3D printer host (e.g., OctoPrint, Pronterface) to send the `M112` command and observe the fan behavior. Check the firmware logs for errors.

---

### **Example Configuration**
Here’s an example of how the configuration and code might look after adjustments:

```cpp
// Configuration
#define FAN_PIN 10
#define RELAY_PIN 2

// Firmware Code
case 'F': // Fan
  if (value == 255) {
    analogWrite(FAN_PIN, 255);
  } else {
    analogWrite(FAN_PIN, 0); // M112 sets to 0
  }
  break;

case 'R': // Relay
  digitalWrite(RELAY_PIN, 0); // M112 turns off relay
  break;

---

### **Summary**
- **Root Cause**: The `M112` command may not be correctly setting the PWM pin or relay to 0.
- **Fix**: Update firmware, ensure relay pin is handled in code, and verify hardware connections.
- **Outcome**: The fan should turn off when `M112` is sent, and the relay (if used) will also deactivate.

By addressing these points, the issue with the fan not turning off during `M112` should be resolved.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160930035716/http://smoothieware.org/forum/t-1738566/m112-control-on-pins)*
