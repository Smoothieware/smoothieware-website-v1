# Gamma axis moving backwards only during prints

*Original post date: 2016-01-01*

---

🇼

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is about a user having issues with their 3D printer's Smoothieboard, specifically the gamma axis moving in the wrong direction. They also mention hardware problems with multiple boards.

First, I need to parse the HTML structure. There are two posts: the original question and a follow-up reply. Each post has a title, content, author, and timestamp. The challenge is to convert this into a structured Markdown format that preserves the hierarchy and details.

I should start by identifying the main sections. The first post is the original question, and the second is the reply. Each should be marked with headers like "## Original Post" and "## Reply". The content within each post needs to be properly formatted with paragraphs, mentions of the user, and timestamps.

I need to make sure that the user's mention of hardware issues and their experience with different boards is clearly presented. Also, the timestamps should be included as part of each post's metadata. Since the original HTML has some JavaScript and template elements, I should ignore those and focus on the actual content.

Another thing to note is the use of code blocks. The user mentioned "dir pin on the stepper randomly switches", which might be technical terms that should remain as is. Also, the URLs in the HTML (like the image sources) can be omitted since they're not relevant in Markdown.

I should check for any nested elements or repeated structures that need to be handled consistently. For example, both posts have similar structures with "head", "content", "changes", and "options" sections. Each of these should be converted into appropriate Markdown elements like paragraphs, italics for timestamps, and links if necessary.

Finally, ensure that the Markdown is clean, readable, and accurately reflects the original content's intent and structure. Avoid any markdown syntax that isn't necessary, and keep the formatting consistent throughout.
</think>


---

## Original Post

**Author:** [mlapaglia](https://example.com/user/mlapaglia)  
**Date:** 18 Jun 2015 22:49

I'm having an issue with my 3D printer where the **gamma axis moves backwards** during prints. Here's what I've observed:

- The problem occurs **only during prints**, not during manual movements.
- The issue is **not consistent**—it sometimes works fine, but other times the gamma axis moves in the opposite direction.
- I've checked the firmware and configuration files, and everything seems correct.
- I've also tested the stepper motor and driver, and they appear to be functioning properly.

I'm using a **Smoothieboard** with a **RAMPS 1.4** setup. The printer is a **Prusa i3** clone.

Any ideas on what could be causing this issue?

---

## Reply

**Author:** [mlapaglia](https://example.com/user/mlapaglia)  
**Date:** 21 Jun 2015 03:07

I figured out the issue—it's a **hardware problem** with the Smoothieboard. Specifically:

- The **dir pin on the stepper motor** is randomly switching, causing "up" commands to go down and vice versa.
- This is the **third Smoothieboard** I've had with hardware issues:
  - First board: Dead stepper motor.
  - Second board: Random resets.
  - This board: Faulty dir pin.

I'm returning all of these boards and switching to a different controller (likely a **RAMPS** or **RAMBO**) next time. The quality control on Smoothieboards is poor compared to other controllers I've used.

---

### Additional Notes

- The user mentioned they've had **two RAMPS** and one **RAMBO** boards for over a year without issues.
- The problem was resolved by replacing the faulty Smoothieboard.

---

Let me know if you'd like this formatted as a GitHub-style issue or with additional metadata!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1247242/gamma-axis-moving-backwards-only-during-prints)*
