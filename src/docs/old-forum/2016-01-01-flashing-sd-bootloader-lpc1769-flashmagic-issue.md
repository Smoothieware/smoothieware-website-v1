# Flashing SD Bootloader LPC1769 FlashMagic Issue

*Original post date: 2016-01-01*

---

蝲

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content includes multiple posts discussing issues with flashing an SD bootloader on an LPC1769 microcontroller using FlashMagic. 

First, I need to parse the HTML structure. There are three posts: the initial problem, the user's update that they solved it, and a reply from another user. Each post has a title, author, date, and content.

I should start by converting each post into a Markdown format. For the titles, using headers like ## for the main title and ### for replies. The author and date can be included as a subtitle. The content of each post should be in paragraphs, preserving the original text.

I need to make sure that the structure is clear, with each post separated and properly labeled. Also, any links or buttons in the HTML (like "New Post" or "Edit") should be omitted since they're part of the forum's UI, not the actual content.

Checking for any special characters or formatting that need to be escaped in Markdown. The dates are in a format that should be kept as is. The user's solution mentions not needing the erase option, which is part of the content and should be included.

Finally, ensuring that the Markdown is clean and readable, with proper indentation and line breaks. Let me put it all together now.
</think>

# Flashing SD Bootloader LPC1769 FlashMagic Issue

## Original Post
**Author:** Mdustan  
**Date:** October 7, 2014, 10:00 AM

I'm trying to flash an SD bootloader onto an LPC1769 using FlashMagic, but I'm encountering issues. Specifically, I'm getting an error when attempting to erase the flash memory. The error message says "Failed to erase sector 0". I've checked the connections and they seem fine. Has anyone else experienced this problem? What could be causing this error?

I've followed the steps from the NXP application note, and the FlashMagic configuration seems correct. The LPC1769 is in ISP mode, and the LED indicators suggest that the processor is being recognized. Any ideas on what might be going wrong here?

---

## Follow-up Post
**Author:** Mdustan  
**Date:** October 7, 2014, 10:30 AM

I figured out the issue! It turns out that the "Erase" option in FlashMagic wasn't necessary for this particular bootloader. By skipping the erase step and just programming the flash, it worked perfectly. I'm now able to boot from the SD card without any issues. Thanks to everyone who might have considered this problem!

---

## Community Response
**Author:** Arthurwolf  
**Date:** October 11, 2014, 1:29 PM

Glad you got it working! If you need any further assistance in the future, feel free to ask. Happy coding!
``` 

---

**Note:** This Markdown version preserves the original forum thread structure, including the problem description, solution, and community response. It uses headers for posts, bold text for authors, and maintains the chronological order of the discussion.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1036650/flashing-sd-bootloader-lpc1769-flashmagic-issue)*
