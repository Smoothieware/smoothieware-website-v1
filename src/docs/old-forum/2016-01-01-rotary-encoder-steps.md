# Rotary encoder steps

*Original post date: 2016-01-01*

---

_quest: How can I adjust the sensitivity of my rotary encoder on my 5528 device?

Okay, so I need to figure out how to adjust the sensitivity of the rotary encoder on my 5528 device. Let me start by recalling what I know about rotary encoders. They are typically used for input devices, like volume knobs or other controls that require rotational input. Sensitivity in this context probably refers to how much the device responds to each rotation. Maybe it's about the step size or the speed at which the encoder sends signals.

Looking at the provided HTML, there's a forum thread where someone had a similar issue. The user, CrankyDon, was having trouble with the rotary encoder on their device (probably the 5528) and found a solution by adjusting a configuration option called "panel_encoder_steps". The other user, Danielis, suggested adding this option to the config file and adjusting its value. That makes sense because configuration files often have parameters that control hardware behavior.

So, the key here is to find the configuration file for the 5528 device. I need to check where such a file might be located. On many embedded systems or devices running custom firmware, configuration files can be in specific directories like /etc/, /usr/local/etc/, or within a user-specific directory. Alternatively, there might be a settings menu in the device's UI where you can adjust these parameters without directly editing files.

If the device uses a configuration file, I should look for a file that mentions "encoder" or "panel" in its name. Once I locate the file, I can add the line "panel_encoder_steps = [value]" where [value] is the desired sensitivity setting. The original user increased the value to make the encoder less sensitive, but depending on the device, higher values might mean more steps per rotation (higher sensitivity) or fewer steps (lower sensitivity). I need to confirm how this parameter works.

Another possibility is that the device uses a different parameter name, like "encoder_sensitivity" or "rotation_step". If "panel_encoder_steps" isn't present, I might need to look for similar parameters. Also, some devices might require a reboot or a specific command to apply changes after editing the config file.

If the device doesn't have a configuration file, there might be a firmware update or a settings application that allows adjusting the encoder sensitivity through a graphical interface. In that case, I should check the device's documentation or manufacturer's website for instructions on accessing these settings.

I should also consider the possibility of hardware limitations. If the encoder's sensitivity is determined by the hardware itself, software adjustments might not be possible. However, given that the forum user was able to adjust it via a config file, it's likely that the 5528 device allows such modifications.

In summary, the steps would be: locate the configuration file, add or modify the "panel_encoder_steps" parameter, save the changes, and restart the device if necessary. If that's not possible, check for firmware settings or consult the device's manual for alternative methods.
</think>

To adjust the sensitivity of the rotary encoder on your 5528 device, follow these steps based on the forum discussion and general principles of configuration adjustments:

### 1. **Locate the Configuration File**
   - The configuration file is likely named something like `config.txt`, `settings.conf`, or similar, and may be located in directories such as:
     - `/etc/`
     - `/usr/local/etc/`
     - A user-specific directory (e.g., `~/.config/`)
   - Search for files containing keywords like `encoder`, `panel`, or `config`.

### 2. **Edit the Configuration File**
   - Open the configuration file with a text editor (e.g., `nano`, `vim`, or a GUI editor).
   - Add or modify the parameter `panel_encoder_steps` to adjust sensitivity:
     ```plaintext
     panel_encoder_steps = [value]
     ```
     - **Higher values** (e.g., `10`) may increase sensitivity (more steps per rotation).
     - **Lower values** (e.g., `2`) may decrease sensitivity (fewer steps per rotation).
   - Save the changes.

### 3. **Apply the Changes**
   - **Restart the device** to ensure the new configuration takes effect.
   - If the device has a firmware interface, check for a settings menu where encoder sensitivity might be adjusted directly.

### 4. **Verify the Adjustment**
   - Test the rotary encoder to confirm the sensitivity meets your needs. If the adjustment isn't effective, double-check the parameter name and value, or consult the device's documentation for alternative parameters (e.g., `encoder_sensitivity`).

### 5. **Alternative Methods (if applicable)**
   - **Firmware Updates**: Check the manufacturer's website for firmware that includes sensitivity controls.
   - **Hardware Limitations**: If software adjustments fail, the sensitivity might be fixed by hardware, requiring a different encoder or firmware modification.

### Example Configuration
```plaintext
# Example config file
panel_encoder_steps = 5

### Notes
- The exact parameter name (`panel_encoder_steps`) and its behavior (higher = more/less sensitive) may vary by device. If unsure, refer to the device's manual or community forums for specifics.
- Always back up the configuration file before making changes.

By following these steps, you should be able to adjust the rotary encoder's sensitivity on your 5528 device.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1230883/rotary-encoder-steps)*
