# GUI for CNC

*Original post date: 2016-01-01*

---

かける

Okay, let's see. The user provided a block of HTML code from a forum discussion about CNC software and GUI options. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. There are multiple posts with usernames, dates, and content. Each post has a title, author, date, and message. The challenge is to represent this in a structured Markdown format.

I should start by identifying each post. The HTML has div elements with classes like "post-container" and "post". Each post has a title, author info, date, and content. 

For Markdown, I can use headers for each post. Maybe use ### for the title, then the author and date as a subtitle. The content would follow. I need to make sure to preserve the hierarchy and formatting.

Also, there are some JavaScript snippets and template placeholders in the HTML. Those might not be necessary in the Markdown output, so I can ignore them unless the user specifies otherwise. 

I should check for any links or mentions of software like Universal Gcode Sender or bbs. The user might want those to be hyperlinked. However, the original HTML has some links that are commented out or not fully formed, so I need to be careful. 

Another thing is the dates. They are in a format like "12 Aug 2016 20:14". In Markdown, I can keep them as is or format them differently if needed, but the user hasn't specified, so probably leave them as they are.

I'll go through each post one by one, extract the title, author, date, and content, and structure them in Markdown. Make sure to use proper indentation and headers. Also, check for any special characters that need escaping in Markdown, but since the content is mostly plain text, it should be okay.

Finally, ensure that the Markdown is clean and readable, with each post clearly separated. Avoid any HTML tags in the output. That should cover it.
</think>


# GUI for CNC Discussion

## Post by berndm (02 Aug 2016 05:58)
**Re: GUI for CNC**

I'm the author of Universal Gcode Sender (you can google it, I can't post a link), CNC software which has a Smoothie option - I'm told smoothie doesn't have a command buffer so for now you also need to enable "Single step mode" in the UGS settings (due to a GRBL-ism).

If there is enough interest, and volunteers to test, smoothie could have first class support in my app with a relatively small amount of effort. The nightly build of UGS already has a smoothie option, but I don't have the hardware (or time) to ensure full support alone. Feel free to create issues/questions on the UGS github or drop me an email (in my github profile).

## Post by wwinder (12 Aug 2016 20:14)
**Re: GUI for CNC**

I'm the author of Universal Gcode Sender (you can google it, I can't post a link), CNC software which has a Smoothie option - I'm told smoothie doesn't have a command buffer so for now you also need to enable "Single step mode" in the UGS settings (due to a GRBL-ism).

If there is enough interest, and volunteers to test, smoothie could have first class support in my app with a relatively small amount of effort. The nightly build of UGS already has a smoothie option, but I don't have the hardware (or time) to ensure full support alone. Feel free to create issues/questions on the UGS github or drop me an email (in my github profile).

Note: The original content had some HTML structure with multiple posts, but I've organized them into a more readable Markdown format with headers for each post. The content appears to be repeated in the original HTML, so I've presented it once per post as it would appear in a forum thread.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1773057/gui-for-cnc)*
