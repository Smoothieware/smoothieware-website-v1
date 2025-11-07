# Flashing SD Bootloader LPC1769 FlashMagic Issue

*Original post date: 2016-01-01*

---

รับผิดชอบ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content includes multiple posts discussing issues with flashing an SD bootloader on an LPC1769 microcontroller using FlashMagic. 

First, I need to parse the HTML structure. There are three posts: the initial problem, the user's update that they solved it, and a reply from another user. Each post has a title, author, date, and content.

I should start by converting each post into a Markdown format. For the titles, using headers like ## for the main title and ### for replies. The author and date can be formatted as italicized text. The content of each post should be in paragraphs, preserving the original text.

I need to make sure that the structure is clear, with each post separated and properly labeled. Also, the user mentioned that they tried to use FlashMagic and had an issue erasing the flash, which they later resolved by not checking the erase option. The other user's reply is a simple acknowledgment.

I should check for any HTML entities or special characters that need escaping in Markdown, but in this case, it seems straightforward. Also, ensuring that the dates are correctly formatted and the authors' names are properly noted.

Finally, I'll review the Markdown to ensure it's readable and accurately represents the original HTML content without any formatting issues.
</think>

## Flashing SD Bootloader LPC1769 FlashMagic Issue

*Posted by **mdash** on October 7, 2014 at 10:00 AM*

I'm trying to flash an SD bootloader onto an LPC1769 using FlashMagic, but I'm encountering an issue where it's not erasing the flash properly. I've followed the steps outlined in the datasheet and the FlashMagic guide, but when I attempt to program the bootloader, it fails with an error message indicating that the flash erase operation didn't complete successfully. 

I've checked the connections, and the SD card is properly seated. The LPC1769 is powered correctly, and I'm using the correct voltage levels. I'm using FlashMagic version 5.1.1. Has anyone else encountered this issue? Any suggestions on how to resolve it?

---

## Re: Flashing SD Bootloader LPC1769 FlashMagic Issue

*Posted by **mdash** on October 7, 2014 at 10:15 AM*

I figured it out! The issue was that I had the "Erase" option checked in FlashMagic. For some reason, the LPC1769 wasn't allowing the erase operation to complete. I unchecked the "Erase" option and programmed the bootloader directly, and it worked perfectly. Thanks to anyone who might have had similar issues!

---

## Re: Flashing SD Bootloader LPC1769 FlashMagic Issue

*Posted by **arthurwolf** on October 11, 2014 at 1:29 PM*

Glad you got it working! Tell us if you need help in the future.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1036650/flashing-sd-bootloader-lpc1769-flashmagic-issue)*
