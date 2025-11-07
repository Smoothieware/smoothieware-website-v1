# Stepper direction on corexy and servo motion

*Original post date: 2016-01-01*

---

### **Problem Explanation: CoreXY Stepper Direction and Servo Module Configuration**

When setting up a **CoreXY** mechanism with a **Smoothieboard**, ensuring correct **stepper motor direction** and **servo module functionality** is critical. The CoreXY system uses two motors (Alpha and Beta) to control the X and Y axes, while the servo module requires proper pin configuration. Issues often arise from incorrect wiring, firmware settings, or misconfigured motor orientations.

---

### **CoreXY Stepper Direction Issues**

#### **1. Understanding CoreXY Motor Behavior**
- **CoreXY Mechanism**: Uses two motors (Alpha and Beta) to control the X and Y axes. The direction of movement depends on how the motors are wired and their orientation.
- **Motor Connections**: Each motor has two wires (A and B). Reversing these wires can invert the motor's direction.
- **Firmware Configuration**: The Smoothieboard firmware must specify the correct pins and motor directions (inverted or not).

#### **2. Common Causes of Direction Issues**
- **Incorrect Wiring**: If the motor wires are connected to the wrong pins (e.g., M1 and M2), the motor may not move or move in the wrong direction.
- **Inverted Motor Direction**: The firmware might have an inverted direction setting for the motor, which can be corrected in the configuration.
- **Motor Orientation**: The physical orientation of the motor (e.g., which way the motor is mounted) affects the direction of movement.

#### **3. Solution: Testing All Combinations**
- **Brute-Force Testing**: As done by BLB2015, testing all combinations of motor connections and orientations is a reliable method to identify the correct setup.
  - Example combinations:
    - M1 forward, M2 forward
    - M1 forward, M2 backward
    - M1 backward, M2 forward
    - M1 backward, M2 backward
    - (And all permutations with M1 and M2 swapped)
- **Firmware Check**: Ensure the firmware uses the correct pins (e.g., `M1` and `M2`) and that the direction settings are not inverted.

---

### **Servo Module Configuration**

#### **1. Servo Module Basics**
- **PWM Pin Requirement**: Servos require a specific PWM pin (e.g., `P8` on the Smoothieboard). Using the wrong pin can prevent the servo from working.
- **Power Supply**: Ensure the servo is connected to a stable power source (e.g., 5V or 6V) and that the ground is properly connected.

#### **2. Common Servo Issues**
- **Incorrect Pin Assignment**: If the firmware assigns the servo to the wrong pin, it won't receive the correct signal.
- **Signal Wiring**: The signal wire (usually yellow) must be connected to the correct PWM pin on the board.

#### **3. Solution: Verify Pin and Wiring**
- **Check Firmware Configuration**: Confirm the servo is assigned to the correct PWM pin in the firmware.
- **Inspect Wiring**: Ensure the servo's signal wire is connected to the correct pin and that power/ground connections are secure.

---

### **Final Steps for Success**
1. **Motor Testing**:
   - Test all combinations of motor connections and orientations.
   - Use the firmware to invert motor directions if necessary.
2. **Servo Testing**:
   - Verify the servo is assigned to the correct PWM pin in the firmware.
   - Check all wiring (signal, power, ground) for the servo.
3. **Persistence**: As BLB2015 discovered, the correct configuration may be the last one tested, so thorough troubleshooting is essential.

By addressing both hardware and firmware configurations, the CoreXY and servo modules can be made to work reliably.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161101124847/http://smoothieware.org/forum/t-1812458/stepper-direction-on-corexy-and-servo-motion)*
