# smoothie and polargraph

*Original post date: 2016-01-01*

---

🇹🇩

Okay, let's see. The user provided a block of HTML and JavaScript code from a forum thread discussion about integrating a Polargraph with Smoothieware. They also mentioned that the assistant should think through the process before giving an answer. 

First, I need to understand what the user is asking. The original forum posts are between two users, nagualul and arthurwolf. The user nagualul is asking about how to use Smoothieware with a Polargraph, and arthurwolf responds by suggesting adding an arm solution from the Smoothieware GitHub repository.

The user who posted the question might be looking for a step-by-step guide on how to integrate the Polargraph with Smoothieware, possibly involving the arm solutions mentioned. They might not be familiar with the technical details of modifying firmware or adding custom code.

I should break down the answer into clear steps. First, explain what the Polargraph is and its relevance to 3D printing or plotting. Then, mention Smoothieware as a firmware option. Next, guide the user on how to access the GitHub repository, locate the arm solutions, and how to integrate them. It's important to note that this requires some programming knowledge, possibly in C or similar languages used in firmware development. Also, mention that they might need to understand the existing code structure to implement the arm solution correctly. Finally, suggest checking the documentation or community forums for further assistance if they run into issues.
</think>

To integrate a Polargraph with Smoothieware, follow these steps:

### 1. **Understand the Polargraph and Smoothieware**
- **Polargraph**: A 2D plotting device using a polar coordinate system (two motors and a pen).
- **Smoothieware**: Open-source firmware for 3D printers and robotics, supporting custom hardware configurations.

### 2. **Access the Arm Solution Code**
Arthurwolf mentioned the `arm_solutions` directory in the Smoothieware GitHub repository. This contains code for different robotic arm configurations, which can be adapted for the Polargraph.

- **GitHub Link**: [Smoothieware Arm Solutions](https://github.com/Smoothieware/Smoothieware/tree/edge/src/modules/robot/arm_solutions)
- **Explore the Code**: Look for existing arm configurations (e.g., SCARA, Cartesian) that might align with the Polargraph's mechanics.

### 3. **Modify the Firmware**
- **Clone the Repository**:
  ```bash
  git clone https://github.com/Smoothieware/Smoothieware.git
  ```
- **Locate the Arm Solution**: Navigate to `src/modules/robot/arm_solutions` and identify a suitable template or create a new one for the Polargraph.
- **Implement Kinematics**:
  - The Polargraph uses polar coordinates. You'll need to implement the inverse kinematics (converting Cartesian coordinates to motor movements) in the firmware.
  - Example code structure:
    ```cpp
    // Example: Inverse kinematics for Polargraph
    void polargraph_move(float x, float y) {
        float r = sqrt(x*x + y*y);
        float theta = atan2(y, x);
        // Convert to motor steps
        motor1_steps = r / (2 * PI) * steps_per_revolution;
        motor2_steps = theta * steps_per_revolution;
    }
    ```
  - Adjust parameters like `steps_per_revolution` based on your hardware.

### 4. **Compile and Flash the Firmware**
- **Build the Firmware**:
  ```bash
  cd Smoothieware
  make BOARD=your_board_type
  ```
- **Flash to the Controller**: Use tools like `avrdude` or the Smoothieware configurator to upload the firmware to your microcontroller.

### 5. **Test and Calibrate**
- **Connect the Polargraph**: Ensure the motors and pen are properly connected.
- **Test Movement**: Use G-code commands (e.g., `G0 X100 Y50`) to test the Polargraph's movement.
- **Calibrate**: Adjust the kinematics equations and motor steps for accuracy.

### 6. **Troubleshooting**
- **Check Documentation**: Refer to [Smoothieware Docs](https://smoothieware.org/) for firmware configuration details.
- **Community Support**: Ask for help on the [Smoothieware Forum](https://forum.smoothieware.org/) or GitHub issues.

### Notes
- **Programming Skills**: This requires familiarity with C and firmware development.
- **Hardware Compatibility**: Ensure your Polargraph's motors and drivers are compatible with Smoothieware's output signals.

By following these steps, you can adapt Smoothieware to control a Polargraph, enabling precise 2D plotting or 3D printing applications.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160409040817/http://smoothieware.org/forum/t-1659614/smoothie-and-polargraph)*
