# setting Z height at start of printing

*Original post date: 2016-01-01*

---

🥝

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants the corresponding Markdown. The main content is two posts from the same user discussing issues with Z height calibration on a 3D printer.

First, I need to extract the relevant parts. The HTML has a lot of divs and JavaScript, but the actual posts are within the "post-container" divs. Each post has a "long" section with the content and a "short" version for the summary.

The first post is the original question about setting Z height. The second is a follow-up where the user figured out the issue with M206 and Z offset. I need to convert these into Markdown, preserving the structure and formatting.

I should start with the title, then the two posts. Each post should have the date, author, and content. The user mentioned using M206 and the confusion with negative values. Also, the resolution with a positive integer. Need to make sure the code commands like M206 are in backticks.

Check for any HTML entities that need converting, like &amp; to &. Also, ensure that the dates are formatted correctly. The user might want the Markdown to be clean and readable, with proper headers and emphasis where needed.

Finally, verify that the Markdown doesn't include any HTML tags and that the structure mirrors the original forum thread. Make sure the reply is properly indicated with "Re:" in the title. Alright, that should cover it.
</think>

# Setting Z Height at Start of Printing

## Original Post
**Author:** CLONEIT3D  
**Date:** 19 Feb 2015 20:19

I'm having trouble setting the Z height at the start of printing. I tried using `M206` to adjust the Z offset, but when I used a negative integer, it moved the print head higher than expected. I have bed leveling enabled, and I noticed this issue after starting with a clean config file. Can someone explain why a negative Z offset is causing the head to move upward? I would appreciate any clarification. Thank you.

---

## Follow-Up Post
**Author:** CLONEIT3D  
**Date:** 21 Feb 2015 15:24

I figured out the issue! Initially, I thought using a negative Z offset with `M206` would move the print head closer to the bed, but that wasn't the case. After starting fresh with a clean config file and disabling bed leveling, I realized that a **positive** Z offset is required to lower the head toward the bed. This was a paradigm shift for me—understanding that coordinate systems in 3D printing can be counterintuitive. If anyone can explain why a negative Z offset moves the head upward, I'd still appreciate the clarification. Thank you!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813112617/http://smoothieware.org/forum/t-1118295/setting-z-height-at-start-of-printing)*
