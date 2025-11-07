# My SmoothieBoard stops after some lines of gcode.

*Original post date: 2016-01-01*

---

맀

Okay, let's see. The user provided a bunch of forum posts about a Smoothieboard stopping mid-print. They want me to summarize the issues and solutions discussed. 

First, I need to parse through each post. The original user (Giuseppe) had a problem where the board would stop after some lines of G-code. They tried different USB cables and connections, but the issue persisted. Then, Electritech mentioned a USB connection problem and suggested disconnecting the USB after starting a long job. Paul Wanamaker added two causes: USB issues and crosstalk between wires.

Wait, so the main points are USB connection problems and electrical interference from wiring. The solutions include using a different USB cable, ensuring a secure connection, disconnecting USB during long prints, and separating stepper wires from other cables to prevent crosstalk. Also, checking for loose connections or damaged cables.

I should structure the answer by listing the possible causes and their corresponding solutions. Make sure to mention both USB and wiring issues, and the steps to fix them. Also, note that the user tried different cables and connections, which are part of the troubleshooting steps. Maybe also mention that if the problem continues after these steps, further checks like firmware or hardware issues might be needed, but the forum posts didn't cover that. Keep it concise and clear.
</think>

### Summary of Issues and Solutions for Smoothieboard Stopping Mid-Print

#### **1. USB Connection Issues**
- **Problem**: Unstable or loose USB connections can cause the Smoothieboard to stop during a print, even if the print is sourced from an SD card. This was observed when the USB cable was jiggled or not securely connected.
- **Solutions**:
  - Use a high-quality USB cable and ensure it is securely connected to both the computer and the board.
  - **Disconnect the USB cable from the computer after starting a long print** to eliminate potential interference.

#### **2. Electrical Crosstalk (Wiring Issues)**
- **Problem**: Poor wiring practices, such as proximity between stepper motor wires and other cables (e.g., reset button wires), can cause electrical interference. This leads to unexpected resets or hangs during high-speed operations or long prints.
- **Solutions**:
  - **Keep stepper motor wires separate from other cables**, especially those carrying control signals (e.g., reset buttons).
  - Use shielded cables for stepper motors and ensure proper routing to avoid crossing paths with other wires.
  - Avoid sharp bends or tight crossings in wiring to minimize electromagnetic interference.

#### **3. General Troubleshooting Steps**
- **Check for loose connections**: Ensure all cables (USB, power, stepper, etc.) are securely fastened.
- **Test with different cables**: Replace USB or stepper cables to rule out hardware faults.
- **Isolate the board**: Temporarily remove the board from the printer and test it in a controlled environment to identify external interference.

#### **Additional Notes**
- If the issue persists after addressing USB and wiring problems, consider checking the board's firmware or hardware (e.g., power supply stability, capacitor health) as potential underlying causes. However, the forum discussions primarily focused on connection and interference issues. 

By addressing these factors, users can mitigate unexpected shutdowns during prints.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150722000118/http://smoothieware.org/forum/t-1174175/my-smoothieboard-stops-after-some-lines-of-gcode)*
