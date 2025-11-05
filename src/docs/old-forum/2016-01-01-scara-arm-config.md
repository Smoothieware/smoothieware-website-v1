# Scara Arm Config

*Original post date: 2016-01-01*

---

揸

Okay, let's see. The user provided a block of HTML code from a forum thread discussion about configuring a SCARA arm with Smoothieboard. They also mentioned that the user is using a SCARA arm with a 50:1 gear ratio and a 100mm radius, and they're having issues with the firmware not recognizing the steps correctly. The user is asking for help to adjust the firmware settings.

First, I need to understand the problem. The SCARA arm has a gear ratio of 50:1, which means the motor turns 50 times for each rotation of the arm. The radius is 100mm, so the circumference is π * diameter, which would be π * 200mm ≈ 628mm. But since it's a gear ratio, the steps per revolution would be multiplied by the gear ratio. However, the user is getting an error about steps not being recognized, which might be due to incorrect step settings in the firmware.

Looking at the HTML, the forum thread has a user named clanzer asking for help, and Arthurwolf provided a link to the firmware code. The user then thanked Arthurwolf and said they would check it out. But the user's actual question is about adjusting the firmware settings for their specific setup.

The user's main issue is likely related to the steps per unit (steps/mm) calculation. For a SCARA arm, the steps per revolution would be (steps per revolution of the motor) * gear ratio. For example, if the motor has 200 steps per revolution (like a standard stepper motor), with a 50:1 gear ratio, that would be 200 * 50 = 10,000 steps per revolution. Then, the steps per mm would be steps per revolution divided by the circumference. So 10,000 / 628 ≈ 15.915 steps/mm. But the user might have incorrect values set in the firmware, leading to the error.

Another possibility is that the firmware requires specific parameters for the SCARA configuration, such as the number of motors, their positions, or other kinematic parameters. The user might need to adjust these in the firmware code.

The answer should guide the user on how to calculate the correct steps per mm, check the firmware settings related to the gear ratio and motor steps, and possibly modify the firmware code if necessary. Also, mentioning the need to verify the motor's steps per revolution and ensuring that the firmware is correctly configured for a SCARA arm's kinematics.
</think>

To resolve the issue with your SCARA arm configuration on Smoothieboard, follow these steps:

---

### **1. Calculate Steps per Millimeter (Steps/mm)**
For a SCARA arm with a **50:1 gear ratio** and **100mm radius**, the steps per millimeter are calculated as:

$$
\text{Steps/mm} = \frac{\text{Motor Steps/Rev} \times \text{Gear Ratio}}{\text{Circumference}}
$$

- **Motor Steps/Rev**: Standard stepper motors have 200 steps/rev (1.8° per step).
- **Circumference**: $ \pi \times \text{Diameter} = \pi \times 200\, \text{mm} \approx 628.32\, \text{mm} $.

$$
\text{Steps/mm} = \frac{200 \times 50}{628.32} \approx 15.915\, \text{steps/mm}
$$

**Set this value in your firmware** under the `steps_per_mm` parameter for the SCARA arm.

---

### **2. Adjust Firmware Settings**
Ensure the firmware is configured for a **SCARA arm** (not Cartesian). Key parameters to check:

- **Motor Steps/Rev**: Confirm it's set to `200` (or your motor's actual value).
- **Gear Ratio**: Set to `50` in the firmware (if supported).
- **Kinematic Type**: Ensure the firmware is set to **SCARA** mode (not Cartesian or Delta).

---

### **3. Verify Firmware Code**
If the firmware doesn't support gear ratios directly, manually adjust the `steps_per_mm` value in the configuration file. For example:

```cpp
#define STEPS_PER_MM_X 15.915
#define STEPS_PER_MM_Y 15.915

Replace `X` and `Y` with the appropriate axes for your SCARA arm.

---

### **4. Test and Calibrate**
After updating the firmware:
1. Upload the changes to the Smoothieboard.
2. Use a G-code test (e.g., `G0 X100 Y100`) to move the arm.
3. If the movement is incorrect, recalibrate the `steps_per_mm` value by measuring the actual distance traveled and adjusting the parameter accordingly.

---

### **5. Additional Resources**
- **Smoothieboard Firmware**: Check the [official GitHub repository](https://github.com/Smoothieboard/Smoothieboard) for SCARA-specific configurations.
- **SCARA Kinematics**: Ensure your firmware supports SCARA kinematics (some versions may require a plugin or custom code).

---

By correctly calculating `steps_per_mm` and ensuring the firmware is configured for SCARA mode, your arm should move accurately. If issues persist, share your firmware configuration for further troubleshooting.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161023213212/http://smoothieware.org/forum/t-855223/scara-arm-config)*
