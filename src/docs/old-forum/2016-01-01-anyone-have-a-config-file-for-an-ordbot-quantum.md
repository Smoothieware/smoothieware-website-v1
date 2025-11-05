# anyone have a config file for an Ordbot Quantum?

*Original post date: 2016-01-01*

---

# Forum Thread: Anyone Have a Config File for an Ordbot Quantum?

## Post 1: Original Question
**Author:** WillAdams  
**Date:** 17 Jul 2014 16:17  
**Content:**  
I'm trying to set up a Smoothieboard on my Ordbot Quantum. The Y-axis isn't moving, and I'm not sure if the thermistor is properly configured. Does anyone have a config file or advice for this setup?

---

## Post 2: Update on Y-Axis and Thermistor
**Author:** WillAdams  
**Date:** 18 Jul 2014 00:44  
**Content:**  
- **Y-Axis Issue:** The Y-axis still isn't moving. I've checked the wiring and stepper drivers, but no luck yet.  
- **Thermistor Configuration:** I'm using a Semitec 104GT-2 thermistor (100k, 3.3k pull-up). The config file references `thermistor = semitec`, but I'm unsure if this matches my hardware.  
- **Smoothieboard:** Using a Smoothieboard v1.1. Any ideas for troubleshooting the Y-axis?

---

## Post 3: Resolution and Next Steps
**Author:** WillAdams  
**Date:** 18 Jul 2014 10:31  
**Content:**  
- **Thermistor Confirmation:** cvoinescu confirmed that `thermistor = semitec` is correct for the Semitec 104GT-2.  
- **Current Focus:** Now working on aligning the bed and ensuring the lowest travel point matches the machine's geometry.  
- **Next Steps:** Test the Y-axis again after bed alignment and check for firmware updates.

---

### Notes:
- **Code Snippets:** If including config file excerpts, use triple backticks (```) for code blocks.  
- **Troubleshooting Tips:**  
  - For Y-axis issues: Check stepper motor connections, driver settings, and firmware configuration.  
  - Thermistor calibration: Ensure the pull-up resistor (3.3k) is correctly wired and matches the config file.  
- **Resources:**  
  - [Smoothieboard Config Guide](https://smoothieboard.com/docs)  
  - [Ordbot Quantum Assembly Manual](https://ordbot.com/quantum)


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-937965/anyone-have-a-config-file-for-an-ordbot-quantum)*
