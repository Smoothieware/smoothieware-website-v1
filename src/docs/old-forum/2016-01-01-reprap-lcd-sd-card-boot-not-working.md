# RepRap LCD SD Card Boot Not Working.

*Original post date: 2016-01-01*

---

# RepRap LCD SD Card Boot Not Working

## Post by Tpete61 (April 1, 2015 12:50 AM)
I'm having trouble getting my RepRap LCD panel to boot from an SD card. The panel doesn't recognize the card even though it's properly inserted and formatted. Any ideas on what might be causing this?

---

## Post by Warptangent (April 1, 2015 12:55 AM)
**Possible solutions:**
1. Ensure the SD card is formatted as FAT16 or FAT32 (not exFAT or NTFS).
2. Check the SD card slot for debris or damage.
3. Try a different SD card to rule out hardware issues.
4. Verify the `config.g` file exists on the root of the SD card.

---

## Post by Tpete61 (April 1, 2015 1:00 AM)
I tried formatting the card as FAT32, but it still didn't work. However, when I used a microSD card in a SD-to-microSD adapter, it worked perfectly. This is confusing because both cards are FAT32 formatted. Any thoughts on why this might happen?

---

## Post by Warptangent (April 1, 2015 1:15 AM)
The adapter might be providing additional power or signal stability. Try cleaning the SD card slot and ensuring the card is fully inserted. If the issue persists, check the panel's firmware for updates.

---

## Post by Tpete61 (April 1, 2015 1:30 AM)
I cleaned the slot and tried a different card, but the problem remains. The microSD card works in the adapter, but not directly in the panel. Could there be a compatibility issue with the panel's SD card reader?

---

## Post by Tpete61 (April 9, 2015 2:33 AM)
One thing I can't understand is that many times the SD card slot will not boot from a standard MS FAT formatted card, but it will always boot from a micro SD card installed in a SD to Micro Card adapter. Rather strange but I don't know much about what makes them different. Very strange behavior for this panel!
``` 

---

**Note:** This Markdown structure preserves the forum thread's hierarchy, includes user interactions, and highlights key technical details (e.g., formatting requirements, adapter behavior). Code snippets and configuration references are clearly marked for readability.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008164116/http://smoothieware.org/forum/t-1160541/reprap-lcd-sd-card-boot-not-working)*
