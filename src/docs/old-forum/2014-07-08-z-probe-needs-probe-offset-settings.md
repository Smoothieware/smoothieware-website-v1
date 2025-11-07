# Z probe needs probe offset settings

*Original post date: 2016-01-01*

---


# Z probe needs probe offset settings

**Posted by:** [626Pilot](https://web.archive.org/web/20150831010400/http://www.wikidot.com/user:info/626pilot) on 08 Jul 2014 09:31

I'm using a Z probe on my Rostock Max V2 with a Smoothieboard. The probe is mounted on the effector, 50mm from the nozzle. When I run the bed leveling, the probe is not taking into account the offset from the nozzle. This is causing the bed leveling to be inaccurate. I've looked through the documentation and configuration files, but I can't find any settings for the Z probe offset. Is there a way to specify the offset between the nozzle and the probe?

---

**Re: Z probe needs probe offset settings**

**Posted by:** [wolfmanjm](https://web.archive.org/web/20150831010400/http://www.wikidot.com/user:info/wolfmanjm) on 11 Jul 2014 04:55

As I explained on IRC and will reiterate here for others: The way the delta calibration works on Smoothie, the XY offset is not really needed. It works by using relative heights, and a 50mm offset from where it thinks it is does not really affect the end results.

Z probe offset is handled by `G30 Znnn`. If you wanted to use the probe to set Z height (although I recommend doing that manually), you can use this command.

As we discovered on IRC, your issue was something else entirely.

---

### Notes:
- **Usernames** are linked to their profile pages (as per the original HTML).
- **Dates** are preserved in the format `DD MMM YYYY HH:MM`.
- **Code commands** like `G30 Znnn` are wrapped in backticks for clarity.
- The structure uses headers and indentation to distinguish between posts and replies.
- JavaScript and other non-content elements from the original HTML have been omitted.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-920408/z-probe-needs-probe-offset-settings)*
