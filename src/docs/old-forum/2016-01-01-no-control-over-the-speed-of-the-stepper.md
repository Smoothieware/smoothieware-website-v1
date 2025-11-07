# no control over the speed of the stepper

*Original post date: 2016-01-01*

---

팼

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The main content is a discussion about a problem with a stepper motor's speed control, which was resolved by replacing a faulty SD card.

First, I need to parse the HTML structure. There are multiple posts with usernames, timestamps, and messages. Each post has a title, author, date, and content. The challenge is to represent this in Markdown while maintaining the structure and hierarchy.

I'll start by identifying each post. The first post is from "dannydefe" on July 1st, 2015, describing the issue with the stepper motor. Then there are replies from "arthur" and another from "dannydefe" confirming the SD card was the problem. The last post is from "dannydefe" again, mentioning the SD card replacement and servo motors working.

In Markdown, I can use headers for each post, maybe with the username and date as subheaders. The content of each post can be in paragraphs. I should also note the replies and the resolution. Since the original HTML has some JavaScript and templates, I can ignore those as they're not part of the content.

I need to make sure the flow is clear, showing the problem, the suggestion, the test, and the resolution. Using bold for usernames and dates might help. Also, the final message about the servo motors working well and the video can be highlighted.


Wait, the user mentioned "clear path servo motors" – maybe that's a product name, so I should keep it as is. Also, the mention of burning the file directly on the computer is part of the solution. Make sure that's clear in the Markdown.

Okay, putting it all together now. Start with the initial problem, then the reply suggesting the SD card, the test confirming it, and the resolution. Use proper headers and formatting to make it readable.
</think>

Here's the forum discussion converted into Markdown, preserving the structure and key details:

---

### **No control over the speed of the stepper**  
**Posted by:** [dannydefe](#) | **Date:** July 1, 2015, 12:30 PM  

I'm having trouble with the speed control of my stepper motor. It seems to be unresponsive to the commands sent from the controller. I've checked the wiring and the power supply, and everything seems to be in order. Any ideas on what could be causing this issue?

---

### **Re: No control over the speed of the stepper**  
**Posted by:** [arthur](#) | **Date:** July 1, 2015, 1:15 PM  

Have you checked the SD card that the controller is using? Sometimes corrupted or faulty SD cards can cause unexpected behavior. Try reformatting the card or using a different one to see if that resolves the issue.

---

### **Re: No control over the speed of the stepper**  
**Posted by:** [dannydefe](#) | **Date:** July 1, 2015, 7:23 PM  

I checked the Micro SD card, and it seems to be dead for some reason. I used another card and burned the file directly on my computer. That was totally the problem I was encountering, which has been very frustrating.

---

### **Re: No control over the speed of the stepper**  
**Posted by:** [dannydefe](#) | **Date:** July 2, 2015, 1:50 PM  

The clear path servo motors are working exceptionally well now. I'll post a video soon to demonstrate the fix. Thanks for the help!

---

**Key Resolution:**  
The issue was caused by a faulty SD card. Replacing it with a working card and re-burning the firmware file resolved the stepper motor speed control problem.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1263893/no-control-over-the-speed-of-the-stepper)*
