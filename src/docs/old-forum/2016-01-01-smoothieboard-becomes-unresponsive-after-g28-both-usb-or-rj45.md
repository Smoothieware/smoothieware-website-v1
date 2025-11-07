# Smoothieboard becomes unresponsive after G28 (both USB or RJ45)

*Original post date: 2016-01-01*

---

افياء

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is about a problem with the Smoothieboard becoming unresponsive after a G28 command, and the user solved it by correcting the end stop configuration.

First, I need to parse the HTML structure. There are two posts: the original question and the follow-up answer. Each post has a title, author, date, and content. The user also mentioned that the issue was solved by changing the "nc" parameter for the gamma axis.

I should start by creating a Markdown header for the thread. Then, format each post with appropriate headings, bold the titles, include the author and date, and the content. Since it's a forum thread, using a numbered list for posts might be good. Also, the user marked the second post as "Solved," so I should indicate that clearly.

I need to make sure that the Markdown is readable and preserves the structure of the original HTML. Check for any special characters that need escaping, but in this case, it seems straightforward. Also, the dates are in the format "26 Mar 2016 23:52," which I can keep as is.

Wait, the user's answer mentions "nc" being rewritten. I should ensure that technical terms like "gamma axis" and "end stop" are correctly represented. Also, the note about not understanding how they tested homing before might need to be in italics or quotes for emphasis.

Finally, I'll review the Markdown to ensure it's properly formatted, with correct use of headers, lists, and emphasis where necessary. Make sure there are no HTML tags left and that the content flows naturally in Markdown.
</think>


---

# Smoothieboard becomes unresponsive after G28 (both USB or RJ45) → default config requires a Z axis!

**Posted by:** [tridimake](https://example.com/user/tridimake) | **Date:** 26 Mar 2016 23:52

---

**Problem Description:**

The Smoothieboard becomes unresponsive after executing the G28 command via both USB and RJ45 interfaces. The issue seems to be related to the default configuration requiring a Z axis, even though the current setup might not have one properly configured.

**Details:**

- The board becomes unresponsive after sending a G28 command.
- This happens regardless of whether the command is sent via USB or RJ45.
- The user suspects that the default configuration might be expecting a Z axis that isn't properly set up.

---

## Re: Smoothieboard becomes unresponsive after G28 (both USB or RJ45)

**Posted by:** [tridimake](https://example.com/user/tridimake) | **Date:** 26 Mar 2016 23:59

**Solution:**

The issue was resolved by correcting the end stop configuration for the gamma axis. Specifically, the parameter `"nc"` (which likely refers to the end stop pin or configuration) was rewritten to match the correct end stop for the gamma axis.

**Note:**  
The user is still puzzled about how the homing was tested successfully weeks ago, despite this configuration issue.

---

**Status:** Solved ✅

--- 

Let me know if you'd like this formatted as a GitHub-style issue or another format!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160409040817/http://smoothieware.org/forum/t-1656293/smoothieboard-becomes-unresponsive-after-g28-both-usb-or-rj4)*
