# Smoothie board Endstops

*Original post date: 2016-01-01*

---

𝚜𝚎𝚊𝚛𝚌𝚑𝚒𝚗𝚐 𝚗𝚎𝚝𝚠𝚘𝚛𝚔...  
𝚏𝚒𝚗𝚍𝚒𝚗𝚐 𝚘𝚞𝚝𝚕𝚎𝚝𝚜...  
𝚐𝚎𝚝𝚝𝚒𝚗𝚐 𝚙𝚛𝚎𝚙𝚊𝚛𝚎𝚍...  
𝚍𝚘𝚗𝚎.  

Alright, let's tackle this. The user provided a configuration snippet for a Smoothie board's endstops and some forum discussion. The main issue seems to be about endstop debounce settings. 

First, looking at the configuration, there's a line with `#endstop_debounce_count 100` commented out. The user was advised to remove the `#` to activate it. But in the forum reply, someone suggested changing it to `endstop_debounce_count 100` without the `#`. 

Wait, in the original config, the line is commented with a `#`, which in many config files means it's inactive. The user might have left it commented, hence the debounce isn't applied. The reply suggests uncommenting it by removing the `#`, which would make the setting active. 

But the user might not know that `#` is a comment in config files. So the correct action is to remove the `#` to enable the debounce count. However, the reply's example shows removing the `#`, which is correct. 

Another thing to check: the endstop pins are set to `1.28` and `1.29`. Are those the correct pins for the Smoothie board? Maybe the user has a different setup, but assuming the pins are correct. 

Also, the `endstop_debounce_count` is set to 100. The default is 100, so changing it might not be necessary unless there's noise. The user might be experiencing false triggers due to noise, so increasing the debounce count could help. But the original line was commented, so the debounce wasn't active. 

So the main fix is to uncomment the `endstop_debounce_count` line. The user should check if the pins are correct and ensure the endstops are properly connected. If noise is an issue, adjusting the debounce count might be needed. 

I should explain the purpose of the debounce count, how to uncomment the line, and verify the hardware connections. Also, mention that if the problem persists, checking the wiring or increasing the debounce value could help.
</think>

To address the issue with the Smoothie board's endstops, follow these steps:

### 1. **Enable the Debounce Setting**
The line `#endstop_debounce_count 100` is commented out (due to the `#`), which means the debounce setting is inactive. To enable it, **remove the `#`** so the line becomes:

```plaintext
endstop_debounce_count 100

This setting helps reduce false triggers caused by electrical noise. The default value is 100, so you don't need to change it unless you're experiencing noise issues.

---

### 2. **Verify Endstop Pin Configuration**
Ensure the endstop pins (`1.28` and `1.29`) are correct for your Smoothie board setup. If you're using a different hardware configuration (e.g., a different board or pinout), update the pins accordingly.

---

### 3. **Check Hardware Connections**
- Confirm that the endstop switches are properly connected to the board.
- Ensure there are no loose wires or short circuits.
- If using mechanical switches, make sure they are not damaged or worn out.

---

### 4. **Adjust Debounce Count (If Needed)**
If noise persists after enabling the debounce setting:
- **Increase** the `endstop_debounce_count` value (e.g., `200` or `300`) to filter out more noise.
- **Decrease** it if the endstops are too slow to respond (though this is rare).

---

### 5. **Test and Monitor**
After making changes:
- Reboot the Smoothie board.
- Test the endstops manually to ensure they trigger reliably.
- Monitor for false triggers during printing.

---

### Summary
The key fix is **uncommenting the `endstop_debounce_count` line**. If issues persist, verify hardware connections and adjust the debounce value as needed. Let me know if you need further assistance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1205981/smoothie-board-endstops)*
