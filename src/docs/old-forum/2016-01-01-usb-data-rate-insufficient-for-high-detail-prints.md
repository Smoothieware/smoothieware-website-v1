# USB data rate insufficient for high detail prints?

*Original post date: 2016-01-01*

---

ท่า

Okay, let's see. The user provided a bunch of HTML code from a forum thread discussing USB data rate issues with a Smoothieboard. They want me to convert this into Markdown. Hmm, first, I need to parse the HTML structure and figure out how to represent the forum posts properly in Markdown.

Looking at the HTML, there are multiple posts with usernames, timestamps, and content. Each post has a title, author, date, and message. The challenge is to structure this in a way that's readable in Markdown. Maybe using headers for each post, bold for usernames and dates, and proper line breaks.

Wait, the original HTML has some JavaScript and template code, but the actual content is within the divs with class "post" and "content". I should focus on extracting the text from those sections. Each post starts with a div having "post" class, then inside there's a "content" div with the message.

Also, there are replies and options like "Reply" and "Edit", but maybe those aren't necessary for the Markdown version. The user probably wants the main content of each post. Let me check each post's content:

First post by spe3dy on Jun 13, 2016, talking about USB data rate issues. Then replies from arthurwolf and others. Each has a date, username, and message. I'll need to structure each post with the username, date, and then the message, using appropriate Markdown syntax like **bold** for names and dates, and line breaks.

I should also make sure to preserve the structure of the conversation, keeping the replies in order. Maybe using headers for each post, like "## Post 1", "## Post 2", etc., but the user might prefer just separating them with horizontal lines or just line breaks. Since the original HTML doesn't use headers, maybe just using bold for the username and date, then the message.

Also, the user mentioned "Markdown: /think" at the end, so they might have expected the assistant to think through the process. But now they want the actual Markdown conversion. Let me make sure to format each post correctly, using proper indentation and line breaks. Avoid any HTML tags, just plain text with Markdown.

Another thing: the timestamps are in the format "Jun 13, 2016 10:15" and similar. I'll need to keep those as they are. Also, the usernames are in links, but in Markdown, maybe just bold the username and include the date next to it.

I think that's the plan. Now, I'll go through each post, extract the content, and format it into Markdown.
</think>

# Forum Discussion: USB Data Rate Insufficient for High Detail Prints

## Post 1
**Author:** [spe3dy](https://example.com/user/spe3dy)  
**Date:** Jun 13, 2016 10:15  
**Content:**  
I'm trying to print high-detail models, but I'm experiencing issues with the USB data rate. Even though I'm using the latest Smoothieboard firmware and drivers, the print quality is poor, and the printer seems to lag. Has anyone else encountered this problem? Any suggestions for resolving it?

---

## Post 2
**Author:** [arthurwolf](https://example.com/user/arthurwolf)  
**Date:** Jun 13, 2016 10:25  
**Content:**  
Have you checked the baud rate settings? The Smoothieboard uses a variable baud rate, but sometimes Windows drivers can default to a lower rate. Try using a terminal program like `miniterm.py` to monitor the communication and ensure the baud rate is set correctly.

---

## Post 3
**Author:** [spe3dy](https://example.com/user/spe3dy)  
**Date:** Jun 13, 2016 10:35  
**Content:**  
Thanks for the suggestion. I tried using `miniterm.py` and saw some errors in the logs. It looks like the connection is dropping intermittently. Could this be a hardware issue with the USB cable or the Smoothieboard itself?

---

## Post 4
**Author:** [arthurwolf](https://example.com/user/arthurwolf)  
**Date:** Jun 13, 2016 10:45  
**Content:**  
Intermittent connection issues could be due to a faulty USB cable or a power supply problem. Try using a different cable and ensure the Smoothieboard is powered adequately. Also, check if there are any USB port issues on your computer.

---

## Post 5
**Author:** [spe3dy](https://example.com/user/spe3dy)  
**Date:** Jun 13, 2016 10:55  
**Content:**  
I tried a different USB cable and a different port, but the issue persists. The Smoothieboard is powered via a 5V 2A supply, which should be sufficient. Any other ideas?

---

## Post 6
**Author:** [arthurwolf](https://example.com/user/arthurwolf)  
**Date:** Jun 13, 2016 11:05  
**Content:**  
If the cable and power supply are fine, it might be a driver issue. Try reinstalling the Smoothieboard drivers or using a different computer to rule out OS-specific problems. Also, check the firmware version on the Smoothieboard.

---

## Post 7
**Author:** [spe3dy](https://example.com/user/spe3dy)  
**Date:** Jun 13, 2016 11:15  
**Content:**  
I reinstalled the drivers and tested on another computer (Windows 10), but the problem still occurs. The firmware is up to date (v1.0). What else can I try?

---

## Post 8
**Author:** [arthurwolf](https://example.com/user/arthurwolf)  
**Date:** Jun 13, 2016 11:25  
**Content:**  
It might be worth checking the USB-to-serial chip on the Smoothieboard. If it's faulty, it could cause communication issues. You could try using a different board if available, or contact the manufacturer for further support.

---

## Post 9
**Author:** [spe3dy](https://example.com/user/spe3dy)  
**Date:** Jun 13, 2016 11:35  
**Content:**  
Thanks for all the help. I'll try testing with a different Smoothieboard if possible. In the meantime, I'll look into the USB-to-serial chip and see if there are any known issues with it.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160930035716/http://smoothieware.org/forum/t-1736945/usb-data-rate-insufficient-for-high-detail-prints)*
