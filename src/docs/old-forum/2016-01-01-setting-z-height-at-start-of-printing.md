# setting Z height at start of printing

*Original post date: 2016-01-01*

---

MUSIC

Okay, let's see. The user provided an HTML snippet from a forum thread and wants the corresponding Markdown. The main content is two posts from the same user, CLONEIT3D, discussing issues with setting the Z height on a 3D printer.

First, I need to extract the text from the HTML, ignoring the HTML tags. The first post is the original question about using M206 and negative values. The second post is the follow-up where the user figured out that using a positive integer was the solution.

I should structure the Markdown with headers for each post, including the date and time. The user mentioned using M206 and the confusion with negative values. Also, the second post explains the paradigm shift when using positive integers. Need to make sure the code snippets like M206 are in backticks.

Check for any links or references that might need to be converted, but in this case, it's just the forum thread. Also, ensure that the usernames and dates are properly formatted. Avoid any markdown that wasn't in the original, like buttons or scripts. Just the text content with proper headers and code formatting.
</think>

# Forum Thread: Setting Z Height at Start of Printing

## Original Post by CLONEIT3D (19 Feb 2015 20:19)
I'm having trouble setting the Z height at the start of a print. I tried using `M206` to adjust the Z offset with a negative integer, but it caused the print head to move higher than expected. I'm confused because, based on my experience with CNC machines and other printers, moving the head closer to the bed should involve a negative Z value. Could someone explain why this isn't working as expected?

---

## Follow-Up Post by CLONEIT3D (21 Feb 2015 15:24)
After some troubleshooting, I realized that using a **positive integer** with `M206` resolved the issue. Initially, I thought a negative value would lower the head, but it turned out to be the opposite. This was a paradigm shift for me—bed leveling was enabled in my config file, which was causing the confusion. Now everything works as expected. If anyone could clarify why a positive value is needed here, I'd appreciate it!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730053722/http://smoothieware.org/forum/t-1118295/setting-z-height-at-start-of-printing)*
