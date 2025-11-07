# Smoothieboard  and FSR

*Original post date: 2016-01-01*

---

# Smoothieboard and FSR

**billdan**  
*12 Feb 2015 04:07*

I'm looking into using FSR (Force-Sensitive Resistor) sensors with the Smoothieboard on an Ultimaker. Has anyone successfully integrated FSRs with the Smoothieboard? I'm particularly interested in how others have handled the wiring and calibration. Any tips or experiences would be greatly appreciated!

---

**Zedsquared**  
*22 Feb 2015 16:53*

I have found that three FSRs in parallel will reliably trigger an endstop pin on the Smoothieboard without any other circuitry. I have them mounted under my printbed on a Kossel mini. I did have to experiment a bit with the physical mounting to get it right (varying the size of the contact patch between FSR and bed).

Cheers,  
Robin.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813112617/http://smoothieware.org/forum/t-1109124/smoothieboard-and-fsr)*
