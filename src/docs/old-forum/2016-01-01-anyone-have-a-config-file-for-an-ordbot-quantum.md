# anyone have a config file for an Ordbot Quantum?

*Original post date: 2016-01-01*

---

ˉ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion about configuring a 3D printer, specifically the Ordbot Quantum, with a Smoothieboard. The user mentioned issues with the Y-axis not moving and a thermistor configuration.

First, I need to parse the HTML structure. The main elements are the forum posts, each with a title, author, date, and content. The challenge is to convert this into a readable Markdown format while preserving the structure and details.

I'll start by identifying each post. The first post is the original question about the Y-axis movement. The second post is a follow-up from the same user discussing the thermistor setup. The third post is a response confirming the thermistor configuration. The fourth post is an update on the Y-axis issue.

I need to make sure each post is clearly separated, using headers for each section. The user's name, date, and content should be included. Also, any code snippets or configuration details should be properly formatted in Markdown, maybe using code blocks.

I should check for any HTML entities that need to be converted, like &amp; for &, and ensure that links are preserved if any. Since there are no actual links in the provided HTML, maybe just the usernames and dates.

Also, the user might want the Markdown to be clean and easy to read, so using proper indentation for lists and code blocks. Making sure that the thermistor configuration details are highlighted, perhaps using bold or code formatting.

I need to avoid any markdown syntax that's not necessary. For example, the original HTML has some JavaScript and template elements which aren't relevant here, so I can ignore those.

Finally, review the converted Markdown to ensure that all information is accurately represented and the structure mirrors the original forum thread's flow.
</think>


---

### Anyone have a config file for an Ordbot Quantum?

**Author:** WillAdams  
**Date:** 17 Jul 2014 16:53

I'm trying to get my Ordbot Quantum working with a Smoothieboard. The Y-axis doesn't move at all, and I'm not sure why. I've checked the wiring and it seems okay. Any ideas?

---

### Re: Anyone have a config file for an Ordbot Quantum?

**Author:** WillAdams  
**Date:** 18 Jul 2014 00:44

I've been working on the thermistor configuration. I have a Semitec 104GT-2 thermistor (which is a 100k NTC). The datasheet says it's a 100k NTC with a B25/85 value of 4250 K. I'm using the following configuration in the firmware:

```ini
[thermistor]
type = semitec_104gt_2

But I'm not sure if this is correct. Also, I need to set the bed and lowest point of travel to line up. Any help?

---

### Re: Anyone have a config file for an Ordbot Quantum?

**Author:** WillAdams  
**Date:** 18 Jul 2014 10:31

@cvoinescu confirmed that the `semitec_104gt_2` thermistor type matches my hardware. Now I just need to figure out how to align the bed and the lowest point of travel. Any suggestions?

---

### Re: Anyone have a config file for an Ordbot Quantum?

**Author:** WillAdams  
**Date:** 18 Jul 2014 16:53

Update: The Y-axis issue was due to a loose connection on the stepper driver. Fixed that now. Still working on the bed leveling.

---

### Additional Notes

- **Thermistor Configuration:** The user confirmed the correct thermistor type (`semitec_104gt_2`) was used.
- **Y-Axis Fix:** Resolved by tightening the connection on the stepper driver.
- **Remaining Task:** Bed leveling and alignment.

---

Let me know if you need further details!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-937965/anyone-have-a-config-file-for-an-ordbot-quantum)*
