# Custom Panel (ST7565 LCD, Rotary Encoder, Ext.SD)

*Original post date: 2016-01-01*

---

ственные

Okay, let's see. The user is having trouble with their ST7565 LCD display where the lines and rows are shifted. They mentioned that after digging into the ST7565.cpp file, they found an initialization sequence with some 0x00 commands that aren't commented. They also tried changing the display start line but couldn't find the correct position, and there's a horizontal shift issue.

First, I need to recall how the ST7565 controller works. The ST7565 is a common LCD controller for 128x64 OLEDs. The initialization commands set up the display parameters. The user's main issues are the vertical and horizontal shifts.

Looking at the initialization sequence they provided:

- The first command is 0x40, which sets the display start line. This determines where the first line of the display starts. If the user is seeing lines shifted vertically, changing this value might adjust the starting line. However, they mentioned that changing this didn't get the correct position. Maybe they need to check if the display's hardware has a different default start line or if there's a miscalculation in the code.

- The ADC (Addressing Direction) command is set to 0xA0 or 0xA1, which affects the left-to-right or right-to-left direction. The COM select (0xC0 or 0xC8) sets the COM output direction. If these are set incorrectly, it might cause the display to be mirrored, but that's more about orientation than shifting.

- The 0x00 commands in the initialization sequence: These might be placeholders or delays. Sometimes, controllers require specific timing between commands. The 0x00 could be a no-op (no operation) to allow the display to process previous commands. Without comments, it's hard to tell, but maybe removing them or adjusting their position could help.

Regarding the horizontal shift (T and X cut from the left), the user might be looking at the column start address. The ST7565 has commands to set the column start and end addresses. However, in the provided initialization sequence, I don't see commands for setting the column address. Typically, the column address is set using the SET_COLUMN_ADDRESS command (0x00-0x0F), but that's usually handled during data writing, not initialization. Wait, maybe the user is not setting the column address correctly when sending data, leading to the horizontal shift.

Another possibility is the contrast setting. The contrast is set with 0x81 followed by a value. If the contrast is too high or low, it might cause display issues, but that's more about visibility than shifting.

The user also mentioned the two 0x00s in the init sequence. Maybe those are required for proper initialization. If they're removed, the display might not initialize correctly. Alternatively, they could be part of a longer sequence that's missing in the code.

To troubleshoot, the user could:

1. Check the datasheet for the ST7565 to confirm the correct initialization sequence. Ensure that all necessary commands are present and in the right order. The 0x00s might be part of a required sequence.

2. Verify the display start line (0x40). The value here sets the starting line. If the display is shifted vertically, adjusting this value might correct it. However, the user tried this and didn't find the right position. Maybe the display's hardware has a different default, or there's a miscalculation in the code.

3. Look into the column address settings. If the column start is not set correctly, the display might shift horizontally. The user might need to send the SET_COLUMN_ADDRESS command before writing data. For example, sending 0x00 (SET_COLUMN_ADDRESS) followed by the start and end column addresses.

4. Check for any other commands that might affect the display's position, such as the display offset (0xD3) or the display on/off commands.

5. Test the display with a known working initialization sequence from another source or example code to see if the issue persists. This can help determine if the problem is with the initialization code or the hardware.

6. Ensure that the data lines are connected correctly. A wiring issue could cause the display to show incorrect data, leading to shifts.

In summary, the user needs to verify the initialization sequence against the datasheet, check for missing commands related to column addressing, and ensure that all necessary commands are present and correctly ordered. The 0x00s might be placeholders for timing or other commands that are required for proper initialization.
</think>

The issue with the shifted lines and rows on your ST7565 LCD display is likely due to incorrect initialization parameters or missing commands in the initialization sequence. Here's a structured approach to resolve the problem:

---

### **1. Understanding the Initialization Sequence**
The provided initialization sequence includes several key commands:
- **`0x40` (Display Start Line):** Sets the starting line of the display. Adjusting this value shifts the entire display vertically.
- **`0xA0/0xA1` (ADC Direction):** Controls the left-to-right or right-to-left addressing.
- **`0xC0/0xC8` (COM Select):** Determines the COM output direction (normal or inverted).
- **`0x81` (Contrast Control):** Sets the contrast level.
- **`0x00` (No-Op):** These may be placeholders for timing or other commands.

---

### **2. Addressing the Vertical Shift (Display Start Line)**
- **Issue:** The display lines are shifted vertically.
- **Solution:**
  - The `0x40` command sets the starting line. If the display is shifted, try adjusting this value (e.g., `0x40` to `0x48` for a 8-line shift). However, the correct value depends on the display's hardware.
  - **Check the datasheet** for the ST7565 to confirm the valid range for `0x40` and ensure it aligns with your display's specifications.

---

### **3. Horizontal Shift (Cutting Characters on the Left)**
- **Issue:** Characters like "T" and "X" are cut from the left.
- **Solution:**
  - **Column Addressing:** The ST7565 requires setting the column start and end addresses using the `SET_COLUMN_ADDRESS` command (`0x00` to `0x0F`). Ensure this is included in your code before writing data.
  - Example:
    ```cpp
    // Set column start and end addresses
    display.writeCommand(0x00); // SET_COLUMN_ADDRESS
    display.writeCommand(0x00); // Start column (0x00)
    display.writeCommand(0x7F); // End column (0x7F for 128 columns)
    ```
  - If this is missing, the display may start writing data from an incorrect column, causing horizontal shifts.

---

### **4. The Mysterious `0x00` Commands**
- **Purpose:** These may be **no-ops** (no operation) to allow timing between commands or part of a required sequence.
- **Action:** 
  - **Do not remove** these unless confirmed by the datasheet.
  - If the display behaves incorrectly without them, they are likely necessary for proper initialization.

---

### **5. Verify Initialization Against the Datasheet**
- **Step-by-Step:**
  1. **Download the ST7565 datasheet** (e.g., from NXP or manufacturer).
  2. Compare your initialization sequence with the recommended sequence in the datasheet.
  3. Ensure all required commands (e.g., `SET_DISPLAY_OFFSET`, `SET_DISPLAY_ON`) are included.

---

### **6. Test with a Known Working Example**
- Use a **working example** from a trusted source (e.g., Arduino libraries like `SSD1306` or `U8g2`) to compare your code.
- This helps isolate whether the issue is with the initialization sequence or hardware.

---

### **7. Check Hardware Connections**
- Ensure that the **data lines (D0-D7)** are connected correctly to the microcontroller.
- A wiring error (e.g., misaligned data lines) can cause the display to show incorrect data, leading to shifts.

---

### **Summary of Fixes**
| Issue                  | Fix                                                                 |
|------------------------|---------------------------------------------------------------------|
| Vertical Shift         | Adjust `0x40` (Display Start Line) and verify with the datasheet. |
| Horizontal Shift       | Add `SET_COLUMN_ADDRESS` (0x00-0x0F) before writing data.         |
| `0x00` Commands        | Retain them unless the datasheet confirms they are unnecessary.   |
| Initialization Sequence| Cross-check with the ST7565 datasheet and use a working example.  |

By addressing these points, you should be able to correct the display's alignment and ensure proper initialization.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1097880/custom-panel-st7565-lcd-rotary-encoder-ext-sd)*
