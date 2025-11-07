# Flux Capacitor 4 Way Extruder

*Original post date: 2016-01-01*

---


---

### Flux Capacitor 4 Way Extruder - Single Hotend

**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:22  
**Content:**  
Hi,  
I'm trying to use a Flux Capacitor 4-way extruder with a single hotend on a Smoothieboard. Does anyone have experience with this setup? I'm curious about the wiring and configuration needed for the Smoothie firmware.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:25  
**Content:**  
I think I need to configure the extruder pins in the firmware. Does the Smoothieboard support multiple extruders with a single hotend? I'm a bit confused about how the wiring would work.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:27  
**Content:**  
I found some documentation about using multiple extruders with Smoothie. It mentions using the `extruder` and `extruder2` pins. But I'm not sure how to map this to the Flux Capacitor's 4-way setup. Any help would be appreciated!

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:30  
**Content:**  
I think I need to set up the firmware to use the same hotend for all four extruders. But I'm not sure if the Smoothieboard can handle that. Does anyone have a working example configuration?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:35  
**Content:**  
I'm also wondering about the G-code commands. Would I need to use `M109` for each extruder separately, or is there a way to simplify it?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:40  
**Content:**  
I think I'll need to modify the `config.g` file to assign the extruder pins correctly. But I'm not sure which pins to use for the Flux Capacitor. Any advice?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:45  
**Content:**  
I found a GitHub repository with a Smoothie configuration for a 4-way extruder. It uses `extruder`, `extruder2`, `extruder3`, and `extruder4` pins. But I'm not sure if this is compatible with the Flux Capacitor.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:50  
**Content:**  
I think I'll need to test this setup with a 3D printer. But I'm worried about the firmware not supporting four extruders. Does anyone have experience with this?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 15:55  
**Content:**  
I'm going to try configuring the Smoothieboard with the 4-way extruder setup. If I run into issues, I'll post back here.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:00  
**Content:**  
I've set up the firmware and connected the Flux Capacitor. Now I'm testing the extruders. So far, it seems to work, but I'm not sure if all four extruders are functioning correctly.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:05  
**Content:**  
I think I need to adjust the firmware settings for the extruder steps per mm. But I'm not sure how to do that. Any help?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:10  
**Content:**  
I've managed to get the extruders working, but I'm still having issues with the hotend temperature. It's not heating up properly. Any ideas?

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:15  
**Content:**  
I think I need to check the wiring for the hotend. Maybe there's a connection issue. I'll look into that next.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:20  
**Content:**  
I've fixed the hotend temperature issue. It was a wiring problem. Now everything seems to work! Thanks to everyone for the help.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:25  
**Content:**  
I'm happy to report that the Flux Capacitor 4-way extruder is working with the Smoothieboard. It's a bit tricky to set up, but it's definitely possible. Thanks again for the help!

---

**Re: Flux Capacitor 4 Way Extruder - Single Hot Zot**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:30  
**Content:**  
I think I'll need to update the firmware to the latest version. I've heard that there are some improvements for multi-extruder setups.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:35  
**Content:**  
I've updated the firmware and everything is working even better now. I'm really impressed with the Smoothieboard's capabilities.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:40  
**Content:**  
I think I'll write a tutorial on how to set up the Flux Capacitor with the Smoothieboard. It might help others who are trying to do the same thing.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:45  
**Content:**  
I'm going to test the setup with different materials to see how it performs. So far, it's been great, but I want to make sure it's reliable.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:50  
**Content:**  
I think I've covered everything I needed to know about setting up the Flux Capacitor with the Smoothieboard. It's a bit of a learning curve, but it's definitely worth it.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 16:55  
**Content:**  
I'm going to post my tutorial on the Smoothieboard forum. I hope it helps others who are trying to use the Flux Capacitor with a single hotend.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:00  
**Content:**  
I think that's all I need to say for now. Thanks again to everyone for their help and support.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:05  
**Content:**  
I'm going to take a break and come back to this later. I'll post any updates I have.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:10  
**Content:**  
I think I'll need to look into the firmware settings again. I've heard that there are some advanced configurations for multi-extruder setups.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:15  
**Content:**  
I'm going to try using the `M109` command for each extruder separately. I think that might help with the temperature control.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:20  
**Content:**  
I've tried using the `M109` command for each extruder, but it's not working as expected. I'm not sure what the issue is.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:25  
**Content:**  
I think I'll need to check the firmware logs to see what's going on. I'm not sure if there's an error message that I'm missing.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:30  
**Content:**  
I've checked the firmware logs and there's no error message. I'm not sure what the issue is. Maybe it's a hardware problem.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:35  
**Content:**  
I think I'll need to contact the manufacturer of the Flux Capacitor for support. I'm not sure if there's a known issue with the 4-way setup.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:40  
**Content:**  
I've contacted the manufacturer and they said there's no known issue with the 4-way setup. I'm going to try a different approach.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:45  
**Content:**  
I think I'll need to try a different firmware version. I've heard that some versions have better support for multi-extruder setups.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:50  
**Content:**  
I've tried a different firmware version and it's working better now. I'm still having some issues, but it's getting closer.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 17:55  
**Content:**  
I think I'll need to look into the G-code commands again. Maybe there's a way to simplify the process.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18:00  
**Content:**  
I've found a way to simplify the G-code commands. It's working much better now. Thanks again for the help!

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18年-05-16 18:05  
**Content:**  
I think I've covered everything I needed to know about setting up the Flux Capacitor with the Smoothieboard. It's a bit of a learning curve, but it's definitely worth it.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18:10  
**Content:**  
I'm going to post my tutorial on the Smoothieboard forum. I hope it helps others who are trying to use the Flux Capacitor with a single hotend.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18:15  
**Content:**  
I think that's all I need to say for now. Thanks again to everyone for their help and support.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18:20  
**Content:**  
I'm going to take a break and come back to this later. I'll post any updates I have.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixelmatt](#)  
**Date:** 2016-05-16 18:25  
**Content:**  
I think I'll need to look into the firmware settings again. I've heard that there are some advanced configurations for multi-extruder setups.

---

**Re: Flux Capacitor 4 Way Extruder - Single Hotend**  
**Posted by:** [pixel unidades](#

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161129232106/http://smoothieware.org/forum/t-1555970/flux-capacitor-4-way-extruder-single-hotend)*
