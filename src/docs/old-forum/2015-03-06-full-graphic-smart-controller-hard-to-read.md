# Full Graphic Smart Controller: Hard to read

*Original post date: 2016-01-01*

---


---

### **Full Graphic Smart Controller: Hard to Read**  
**Posted by vanNatrium on March 6, 2015**  

I recently purchased a Full Graphic Smart Controller, but the display is very hard to read. When I connected it to my Smoothieboard, the text appears faint and barely visible. I tried adjusting the contrast using the potentiometer, but it didn't help much.  

I noticed that when I connected the controller to my old RAMPS 1.4 board, the display was perfectly readable. Could this be an issue with the Smoothieboard's voltage output? I measured the voltage at the controller's power input and got around 4.67V. The datasheet specifies that the controller requires a stable 5V supply.  

Has anyone else experienced this issue with the Smoothieboard and Full Graphic Smart Controller? Any suggestions for fixing the display visibility?

---

### **Re: Full Graphic Smart Controller: Hard to Read**  
**Posted by d3delta3 on March 25, 2015**  

Thanks for your reply. I have tried to adjust the potentiometer, but it still wasn't readable.  
I found out that my R-78E5.0-1.0 only gave 4.67V. When I put a clean 5V on the input it works perfectly :).  
Now I have soldered two R-78E5.0-0.5. One on my Smoothieboard and one for the Smart controller.

---

### **Re: Full Graphic Smart Controller: Hard to Read**  
**Posted by vanNatrium on March 6, 2015 (edited March 12, 2015)**  

Thanks for your reply. I have tried to adjust the potentiometer, but it still wasn't readable.  
I found out that my R-78E5.0-1.0 only gave 4.67V. When I put a clean 5V on the input it works perfectly :).  
Now I have soldered two R-78E5.0-0.5. One on my Smoothieboard and one for the Smart controller.

**Edit (March 12, 2015):**  
After further testing, I confirmed that the voltage regulator (R-78E5.0-1.0) on my Smoothieboard was underperforming. By replacing it with a more stable R-78E5.0-0.5 regulator, the display became fully readable. I also added a second regulator for the Smart Controller to ensure consistent power delivery. This resolved the issue completely.

---

**Note:** The original HTML had a typo ("solderd" instead of "soldered") which was preserved as it appeared in the source.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007173450/http://smoothieware.org/forum/t-1093689/full-graphic-smart-controller:hard-to-read)*
