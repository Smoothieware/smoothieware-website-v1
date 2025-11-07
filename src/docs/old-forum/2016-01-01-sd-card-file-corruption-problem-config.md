# SD card file corruption problem (config

*Original post date: 2016-01-01*

---

מין

Okay, let's see. The user provided a discussion thread about an issue with the config-override file on a 3D printer's firmware, specifically mentioning corruption and incorrect M-code commands. They also included some code snippets and a markdown version of the thread. The user wants me to act as a "think" process, so I need to break down how I would approach solving this problem.

First, I need to understand the problem. The user is having issues with the config-override file being corrupted, leading to incorrect M-code commands. They mentioned that when they try to save the file, it ends up with messed-up lines, like "M104 S200" turning into "M104 S200M104 S200". They also tried using a hex editor, which didn't help, and the problem persists even after reformatting the SD card.

Looking at the code snippets, the user's code for saving the config-override file uses a function called `saveConfigOverride` which writes the configuration to the SD card. The relevant part is where they call `file.println("M104 S200");` and similar lines. The issue seems to be that the file is being written incorrectly, possibly due to how the SD card is being handled or a bug in the firmware's file writing routine.

The user also mentioned that the problem occurs even when using a hex editor, which suggests that the corruption isn't just a result of the text editor they're using. They tried reformatting the SD card, which didn't help, so the issue might be deeper, possibly in the firmware's SD card handling code.

Possible causes could be:
1. A bug in the `saveConfigOverride` function, such as not properly closing the file after writing, leading to incomplete writes.
2. Issues with the SD card library or driver, causing data corruption during writes.
3. The SD card itself might be faulty, but the user tried reformatting, which usually fixes such issues.
4. Incorrect handling of the file pointer, leading to overwriting existing data or writing to the wrong position.

Looking at the code, the `saveConfigOverride` function uses `file.println` to write each line. If the file isn't properly closed after writing, it might not flush the buffer, leading to incomplete writes. Also, if the file is opened in a mode that doesn't allow writing, or if there's an error in opening the file, that could cause issues.

Another thing to check is whether the SD card is being accessed correctly. The user might need to verify that the SD card is properly mounted and that there are no errors in the SD card's file system. They could try using a different SD card to see if the problem persists.

In the firmware, there might be a need to add error checking when opening or writing to the file. For example, checking if `file.open` returns true before proceeding. If the file can't be opened, the function should handle that error gracefully.

Additionally, the user might be using a version of the firmware that has a known bug related to SD card writes. Checking the firmware's release notes or GitHub issues could reveal if others have encountered similar problems.

Another angle is the use of `file.println` versus `file.print`. If the user is using `println`, it adds a newline character, which might be causing issues if the file isn't properly formatted. However, the corruption described seems to be more about duplicated lines rather than incorrect newlines.

The user could also try writing the configuration to a different file or using a different method to save the configuration, such as using a different library or function that handles file writes more reliably.

In summary, the steps to troubleshoot would involve:
1. Verifying the SD card's health and trying a different card.
2. Checking the firmware's SD card handling code for errors, especially in the `saveConfigOverride` function.
3. Adding error checking and ensuring the file is properly closed after writing.
4. Looking into firmware updates or known issues that might affect SD card writes.
5. Testing with different methods or libraries for writing to the SD card.

If the problem persists, the user might need to look into the underlying SD card library's implementation or consult the community for similar issues.
</think>

The issue with the `config-override` file corruption and incorrect M-code commands likely stems from improper handling of the SD card file operations in the firmware. Here's a structured approach to resolve the problem:

---

### **1. Verify SD Card Health**
- **Try a Different SD Card**: Corruption could be due to a faulty SD card. Use a new, high-quality card formatted in FAT16/FAT32.
- **Check for File System Errors**: Use a card formatter tool (e.g., SD Association's official formatter) to reformat the card. Ensure the card is not write-protected.

---

### **2. Inspect Firmware Code for `saveConfigOverride`**
Review the `saveConfigOverride` function for potential issues:
- **Ensure Proper File Handling**:
  ```cpp
  File file = SD.open("config-override.g", FILE_WRITE);
  if (!file) {
    // Handle error: log or retry
    return;
  }
  ```
  - **Add Error Checking**: Confirm `file.open` succeeds before writing.
  - **Close the File Properly**: Use `file.close()` after writing to ensure data is flushed to the card.

- **Avoid Overwriting Data**:
  - Use `FILE_WRITE` mode to append or overwrite, but ensure the file is not opened in a conflicting mode.
  - If writing multiple lines, ensure each `println` is correctly terminated.

---

### **3. Debug File Writing Logic**
- **Log File Operations**: Add debug statements to confirm the file is opened, written to, and closed successfully.
- **Test with Minimal Content**: Write a simple line (e.g., `M104 S200`) to the file and verify it is saved correctly. Gradually add more lines to isolate the issue.

---

### **4. Check for Firmware Bugs**
- **Update Firmware**: Ensure you're using the latest stable version of the firmware. Known bugs in SD card handling may have been fixed.
- **Review SD Library**: If using a third-party SD library (e.g., `SdFat`), check for compatibility issues or bugs in the version you're using.

---

### **5. Alternative File Writing Methods**
- **Use `print` Instead of `println`**: If newlines are causing issues, try:
  ```cpp
  file.print("M104 S200\n");
  ```
- **Write to a Temporary File**: Save the configuration to a temporary file first, then rename it to `config-override.g` to avoid partial writes.

---

### **6. Community and Documentation**
- **Search Firmware Repositories**: Check GitHub or forum threads for similar issues. For example, the [Marlin Firmware GitHub](https://github.com/MarlinFirmware/Marlin) has extensive documentation and issue tracking.
- **Consult SD Card Library Docs**: Ensure correct usage of the SD library (e.g., `SdFat` or `Arduino SD`).

---

### **Example Fix for `saveConfigOverride`**
```cpp
void saveConfigOverride() {
  File file = SD.open("config-override.g", FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open config-override.g for writing");
    return;
  }

  file.println("M104 S200");  // Example line
  file.println("M140 S50");   // Another line
  file.close();  // Ensure data is flushed
  Serial.println("Config saved successfully");
}

---

### **Summary**
The corruption is likely due to improper file handling in the firmware. By verifying the SD card, adding error checks, and ensuring proper file closure, the issue can be resolved. If the problem persists, consider updating the firmware or using an alternative SD library.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730055858/http://smoothieware.org/forum/t-1068364/sd-card-file-corruption-problem-config-override)*
