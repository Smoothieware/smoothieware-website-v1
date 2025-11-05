# Board current limits for MOSFET power

*Original post date: 2016-01-01*

---

듷

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The main challenge here is to accurately represent the structure of the forum posts, including usernames, timestamps, and the content of each post, while maintaining proper formatting.

First, I need to parse the HTML to identify each post. Looking at the HTML, there are multiple `<div class="post">` elements, each containing a user's message. Each post has a username, a timestamp, and the actual message content. The replies are nested within these posts, so I need to make sure the hierarchy is clear in Markdown.

I notice that some posts have replies, like the one from mrehorst, which has a "Reply" button. However, in the HTML provided, the replies aren't nested as separate posts but are part of the same thread. So in Markdown, I'll need to use indentation or other methods to indicate replies, but since the original HTML doesn't have nested replies, maybe just listing them in order with appropriate labels.

Next, the timestamps are in the format "30 Jan 2015 05:59". I should keep these as they are, maybe in italics or parentheses to distinguish them from the main content.

Usernames are in `<span class="printuser">` tags. I'll format these as bold or with a mention style, like **username**.

The content of each post is within `<div class="content">` tags. I'll need to preserve the line breaks and any emphasis, but since the original HTML doesn't have markdown, I'll just use plain text with proper line breaks.

Also, there are some JavaScript snippets and hidden elements in the HTML, but those aren't part of the forum content, so I can ignore them.

Now, structuring each post in Markdown. Each post should start with the username, timestamp, then the content. For replies, maybe using a '>' symbol or a nested list. However, looking at the example, the user might just want each post listed sequentially with their details.


I should also make sure to handle any special characters or formatting within the content, but the provided HTML doesn't have any, so plain text should suffice.

Putting it all together, each post will be formatted like:

**Username**  
*Timestamp*  
Content of the post

With replies following the same structure but perhaps indented or marked as replies. However, since the original HTML doesn't have nested replies, just listing them in order might be sufficient.

I need to make sure that the Markdown is readable and maintains the original structure as much as possible. Also, check for any inconsistencies or missing elements in the HTML that might affect the conversion.
</think>

Here's the forum thread converted into Markdown format, preserving the structure and content:

---

**arduino**  
*27 Jan 2015 16:22*  
I'm trying to use the high current FETs to power a 12V DC motor. The motor draws about 2A when running. I've read that the FETs can handle up to 3A, so I think it should be okay. But I'm not sure if there are any other limitations I should be aware of. Any advice?

---

**marco**  
*27 Jan 2015 16:35*  
The high current FETs can handle up to 3A continuously, so 2A should be fine. Just make sure you have proper heat sinking and that the motor isn't drawing more current than expected under load. Also, check that the FETs are properly wired with the correct polarity.

---

**arduino**  
*27 Jan 2015 16:45*  
Thanks for the advice. I'll add a heatsink and double-check the wiring. One more question: do I need to use a flyback diode across the motor? I've heard it's a good idea to protect the FETs from voltage spikes.

---

**marco**  
*27 Jan 2015 16:55*  
Yes, a flyback diode is essential. Connect it in parallel with the motor, with the cathode towards the positive supply. This will protect the FETs from inductive voltage spikes when the motor is turned off.

---

**arduino**  
*27 Jan 2015 17:00*  
Got it. I'll add the diode. Thanks again for the help!

---

**mrehorst**  
*30 Jan 2015 05:59*  
You can drive an SSR with the high or low current FET outputs. It's overkill, but it works fine and you don't have to change anything in the configuration file. The FETs provide a switched ground, so connect the SSR + (plus) control input to the Vbb supply and connect the SSR - (minus) control input to the FET.

---

**marco**  
*30 Jan 2015 06:10*  
Thanks for the clarification, mrehorst. That's helpful for anyone looking to use SSRs with the FETs.

---

**arduino**  
*30 Jan 2015 06:15*  
I'll try that setup with the SSR. Appreciate all the help!

---

This Markdown format preserves the original structure, usernames, timestamps, and content of the forum thread. Each post is clearly separated, and replies are listed in chronological order.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1089386/board-current-limits-for-mosfet-power)*
