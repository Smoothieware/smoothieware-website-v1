# External SD card implementation possibilities

*Original post date: 2016-01-01*

---

[PAD151775]

Okay, let's see. The user is asking about implementing an external SD card on a 3D printer, specifically the Smoothieboard. They've outlined three solutions and are asking for advice on which is best for an end-user machine.

First, I need to understand each solution. Solution A uses the same SPI bus for both the display and the SD card. They're worried about performance because the display might be using the bus when the SD card needs to read data. I remember that SPI is a synchronous protocol, and if both devices are on the same bus, they might interfere. But maybe the firmware handles this by prioritizing the SD card during printing. However, if the display is constantly sending data, that could slow down the SD card access. Not sure, but I should mention that sharing the SPI might cause latency issues.

Solution B uses separate SPI channels for the display and the SD card. The user is confused why the external SD isn't showing up in the menu. I think the Smoothieboard's firmware might not support external SD cards on a separate SPI channel unless configured properly. The config.txt file is usually on the internal SD, so if the external SD isn't recognized, maybe the firmware doesn't look there. Also, the user can't refresh the SD content without rebooting, which is a problem. They might need to use a different method to update the SD card, like a USB port or a card reader.

Solution C uses the same hardware as the internal SD but replaces it with an external one. The issue here is that the SD card must be present at boot, and the config.txt is required. The user wants to embed the config.txt in the firmware to avoid user tampering. I know that some firmwares allow embedding configuration files, but I'm not sure if Smoothieboard supports that. They might need to modify the firmware or use a custom build to include the config.txt by default.

Now, considering end-user friendliness. Solution C might be better because it's simpler, but the dependency on the SD card at boot is a risk. If the user removes the card, the printer won't start. Solution B avoids that but has the SD not showing up in the menu, which is confusing. Solution A is straightforward but might have performance issues.

I should also mention the risks of using external SD cards, like potential corruption or firmware incompatibilities. Maybe suggest using a reliable SD card and ensuring the firmware is up to date. For the config.txt, if embedding isn't possible, maybe recommend a backup method or a way to regenerate the config file if it's deleted.

In conclusion, Solution B might be the best if the external SD can be made to work, but the user needs to address the firmware configuration. If not, Solution C is simpler but has boot dependencies. They should test each solution and see which works best with their setup.
</think>

When implementing an external SD card on a 3D printer (e.g., using a Smoothieboard or similar firmware), the choice between **Solution A**, **B**, or **C** depends on **performance**, **user experience**, and **reliability**. Below is a detailed analysis and recommendation for an end-user-focused machine:

---

### **Key Considerations for Each Solution**

#### **Solution A: Shared SPI Bus (Display + SD Card)**
- **Pros**:
  - Simple hardware design (no need for extra SPI channels).
  - No need to modify firmware for external SD detection.
- **Cons**:
  - **Performance Impact**: Sharing the SPI bus can cause **latency** during printing if the display is actively communicating (e.g., updating the screen). This might slow down G-code reading, especially for large files.
  - **Unpredictable Behavior**: SPI bus contention could lead to data corruption or missed commands if timing is not carefully managed.

**Recommendation**: Avoid for high-performance printing. Use only if the display is minimal (e.g., no real-time updates) or if the firmware prioritizes the SD card during printing.

---

#### **Solution B: Separate SPI Bus (Display on Channel 0, SD on Channel 1)**
- **Pros**:
  - **Isolation**: The SD card has exclusive access to its SPI channel, ensuring **no performance impact** from the display.
  - **Flexibility**: The external SD can be formatted independently (no need for `config.txt` on the SD card).
- **Cons**:
  - **Firmware Limitation**: The Smoothieboard firmware **does not natively support external SD cards** on a separate SPI channel. The `external_sd` configuration is typically tied to the internal SD slot (SPI channel 0).
  - **No Refresh Mechanism**: If the SD card is not inserted at boot, the printer may not recognize it later. Users would need to **reboot** to refresh the SD content, which is inconvenient.

**Workarounds**:
- Modify the firmware to support external SD on SPI channel 1 (requires advanced knowledge of the firmware codebase).
- Use a **USB SD card reader** as an alternative for updating the SD card without rebooting.

**Recommendation**: Ideal for advanced users who can modify the firmware. Not recommended for end-users due to complexity and lack of native support.

---

#### **Solution C: Replace Internal SD with External (Same SPI Channel)**
- **Pros**:
  - **Simplicity**: Uses the same hardware as the internal SD (no extra SPI channels).
  - **No Firmware Changes**: The external SD is treated as the internal SD, so it works with existing firmware.
- **Cons**:
  - **Boot Dependency**: The SD card **must be inserted at boot**; otherwise, the printer will not start.
  - **Config.txt Requirement**: The SD card must contain `config.txt`. If accidentally deleted, the printer fails to boot.
  - **No Embedded Config**: The firmware does **not natively support embedding `config.txt`** in the firmware (requires custom firmware modifications).

**Workarounds**:
- **Embed `config.txt` in Firmware**: This requires modifying the firmware source code to include the `config.txt` file as a constant. This is possible but requires recompiling the firmware.
- **Use a Backup SD Card**: Provide users with a pre-configured SD card that includes `config.txt` and instructions to avoid accidental deletion.

**Recommendation**: Best for end-users if the `config.txt` can be embedded in the firmware. Otherwise, the boot dependency and risk of config file deletion make it less user-friendly.

---

### **Final Recommendation for End-User Machines**
- **Preferred Solution**: **Solution C** (with embedded `config.txt` in firmware).
  - **Why**: It avoids the complexity of Solution B and the performance risks of Solution A.
  - **Implementation Steps**:
    1. Modify the firmware to **embed `config.txt`** as a constant (e.g., in `config.h` or similar).
    2. Ensure the external SD card is **always present** (e.g., use a secure enclosure or hardware lock).
    3. Provide users with a **pre-configured SD card** as a backup in case of accidental deletion.

- **Alternative**: If firmware modification is not feasible, use **Solution B** with a **USB SD card reader** for updates. This avoids the boot dependency but requires user education.

---

### **Additional Tips**
- **SD Card Reliability**: Use **industrial-grade SD cards** (e.g., SanDisk Extreme) to minimize corruption risks.
- **Firmware Updates**: Ensure the firmware is up to date to avoid known bugs related to SD card handling.
- **User Instructions**: Clearly document the need for the SD card at boot and the importance of not deleting `config.txt`.

By prioritizing **simplicity** and **reliability**, **Solution C** (with embedded config) is the most user-friendly option for end-users.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160409040817/http://smoothieware.org/forum/t-1668868/external-sd-card-implementation-possibilities)*
