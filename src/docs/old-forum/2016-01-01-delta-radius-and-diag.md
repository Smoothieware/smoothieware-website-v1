# Delta Radius and Diag

*Original post date: 2016-01-01*

---

Jon is trying to adjust the diagonal and radius settings for individual towers on his delta printer, but he's finding that the settings in the wiki apply to all towers together. He also mentions that adjusting tower offsets doesn't seem to affect the output, which is unexpected. 

The user is likely looking for guidance on how to make individual adjustments for each tower's diagonal and radius, and why the tower offsets might not be having the desired effect. They might also be seeking clarification on how these settings interact with each other and the overall printer configuration.

The answer should address how to configure individual tower settings, explain the role of tower offsets, and provide troubleshooting steps for when adjustments don't produce the expected results. It should also direct the user to relevant resources or sections in the wiki that might have more detailed information.
</think>

### Adjusting Individual Tower Settings in a Delta Printer

When configuring a delta printer, it's crucial to understand how settings like **diagonal (diag)**, **radius**, and **tower offsets** interact with each other and the overall printer geometry. Here's a breakdown of how to approach your specific concerns:

---

### 1. **Understanding Delta Printer Geometry**
Delta printers use a triangular arrangement of three towers, each connected to a carriage that moves vertically. The **radius** and **diagonal** settings define the geometry of the printer bed and the arms, respectively.

- **Radius**: The distance from the center of the bed to the edge (typically the same for all towers).
- **Diagonal (diag)**: The length of the arms connecting the carriages to the effector (also typically the same for all towers).

These values are usually set globally in the firmware or configuration files, as they define the fundamental geometry of the printer.

---

### 2. **Adjusting Individual Tower Settings**
If you're trying to adjust **diag** or **radius** for **individual towers**, this is not standard practice in most delta printer configurations. Here's why:

- **Global Settings**: The radius and diagonal are calculated based on the printer's geometry. Changing these values for individual towers would disrupt the symmetry and could lead to misalignment or mechanical issues.
- **Tower Offsets**: These are used to correct for misalignment between the towers and the bed. They are typically small adjustments (in millimeters) applied to each tower to compensate for physical imperfections.

If you're seeing no effect from tower offsets, consider the following:

- **Check Firmware/Configuration**: Ensure that the firmware or configuration file you're using supports individual tower offsets. Some firmwares (e.g., Marlin) allow for per-tower adjustments.
- **Calibration**: If the printer is not properly calibrated, tower offsets may not have the expected effect. Perform a **bed leveling** or **tower calibration** to ensure the printer is aligned correctly.
- **Mechanical Issues**: If the towers are not physically aligned, software adjustments may not be sufficient. Check for mechanical misalignment or wear.

---

### 3. **Troubleshooting Tower Offsets**
If tower offsets are not affecting the output as expected:

- **Verify Configuration**: Ensure that the firmware is correctly configured to use tower offsets. Look for settings like `TOWER_OFFSET_X1`, `TOWER_OFFSET_Y1`, etc., in your firmware configuration.
- **Test with Known Values**: Apply a known offset (e.g., 1mm) to one tower and observe the effect. If there's no change, the firmware may not be using the offsets correctly.
- **Check for Conflicting Settings**: Some settings (e.g., `DELTA_RADIUS`, `DELTA_DIAGONAL_ROD`) may override or conflict with tower offsets. Ensure these are set correctly.

---

### 4. **Resources for Further Guidance**
- **Wiki Documentation**: Refer to the **delta printer configuration section** in your firmware's documentation (e.g., Marlin, RepRap, or Klipper). These often include detailed explanations of radius, diagonal, and tower offset settings.
- **Community Forums**: Engage with the printer's community (e.g., Reddit, GitHub, or manufacturer forums) for specific advice on your setup.
- **Calibration Guides**: Look for step-by-step guides on **delta calibration**, **tower alignment**, and **bed leveling** for your specific printer model.

---

### Summary
- **Radius and diagonal** are typically global settings and should not be adjusted individually for each tower.
- **Tower offsets** are used to correct for misalignment and should be applied carefully, ensuring the firmware supports them.
- If adjustments are not working, check your firmware configuration, perform calibration, and verify for mechanical issues.

For more detailed information, consult your firmware's documentation or reach out to the community for support.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1265064/delta-radius-and-diag)*
