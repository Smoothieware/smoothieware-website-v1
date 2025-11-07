# 4 axis milling

*Original post date: 2016-01-01*

---


---

### **Problem**
User **forgive** is trying to use the **Smoothieboard's extruder module** as a **rotary axis (A-axis)** for 4-axis milling. The issue arises because the extruder module listens for the `E` letter in G-code commands (used for extrusion), while rotary axes typically use the `A` letter.

---

### **Solutions**

#### **1. Modify G-code Files**
- **Action**: Replace all instances of `E` with `A` in your G-code files.
- **Pros**: No firmware changes required.
- **Cons**: Requires post-processing of G-code before use.

#### **2. Modify Smoothieboard Firmware**
- **Action**: Edit the `Extruder.cpp` file in the Smoothieboard firmware.
  - Locate the line checking for the `E` letter (e.g., `has_letter('E')`).
  - Replace `E` with `A` in the condition.
  - Recompile and flash the firmware.
- **Reference**: [GitHub Code Line](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/extruder/Extruder.cpp#L337)
- **Pros**: Allows use of `E` for extrusion and `A` for rotary axis in the same firmware.
- **Cons**: Requires technical knowledge of firmware modification.

---

### **Key Notes**
- The extruder module's behavior is hardcoded to use `E` by default.
- Firmware modifications carry risks (e.g., bricking the board) if not done carefully.
- Always back up firmware before making changes.

---

For further assistance, consult the [Smoothieboard documentation](https://smoothieware.com/) or community forums.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1283086/4-axis-milling)*
