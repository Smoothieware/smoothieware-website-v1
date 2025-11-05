# Help With BLTouch and smoothieware

*Original post date: 2016-01-01*

---

וט

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there are two posts. The first one is from "mrseanpaul81" asking about BLTouch issues with Smoothieboard. The second is a reply from "arthurwolf" asking about wiring and testing the BLTouch outside the board.

I need to convert each post into Markdown format. The main elements are the usernames, dates, and the content of the posts. Also, the reply should be indented to show it's a response.

I should check for any special characters or formatting in the HTML that need to be preserved in Markdown. For example, the dates are in a specific format, and the usernames are linked. Since Markdown doesn't support HTML links directly, I'll use standard text for usernames and dates.

Also, the original HTML has some JavaScript and hidden elements, but those aren't needed in the Markdown output. Focus only on the visible content: the posts and their replies.

Make sure the structure is clear, with each post separated and replies properly indicated. Use headers for the usernames and dates, and blockquotes or indentation for replies. Avoid any markdown syntax that isn't necessary, like lists or code blocks unless specified.

Finally, review the converted Markdown to ensure it's readable and accurately represents the original HTML content without any extra elements.
</think>


# Help With BLTouch and smoothieware

**Posted by:** mrseanpaul81  
**Date:** 13 Aug 2016 03:27

Hello,

I'm having trouble getting my BLTouch to work with the Smoothieboard. I've followed the wiring instructions, but it doesn't seem to be communicating properly. The BLTouch lights up during the initial calibration, but after that, it doesn't respond to any commands in Pronterface. I've double-checked the wiring, and everything seems correct. Could there be an issue with the configuration in the Smoothie firmware?


```ini
# BLTouch configuration
bltouch {
    pin = 25
    use = true
    auto_home = true
    home_z = 0.2
}

Any suggestions or troubleshooting steps I can try?

---

**Re: Help With BLTouch and smoothieware**

**Posted by:** arthurwolf  
**Date:** 14 Aug 2016 09:23

Hi mrseanpaul81,

The BLTouch has been reported to work with Smoothieboard, including recently. Could you confirm that your wiring is correct? Specifically, check the following:

1. **Signal Pin (Pin 25):** Ensure it's connected to the correct pin on the Smoothieboard.
2. **Power Supply:** Verify that the BLTouch is receiving proper power (5V).
3. **Ground Connection:** Confirm that the ground is properly connected.

Additionally, do you have any means to test the BLTouch outside of the Smoothieboard? For example, using a multimeter to check for continuity or a separate power source to see if it functions independently.

If you're still having issues, feel free to share photos of your wiring setup for further assistance.

Best regards,
Arthur


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1788111/help-with-bltouch-and-smoothieware)*
