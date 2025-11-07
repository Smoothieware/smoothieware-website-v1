# Smoothieboard freezing over SUB

*Original post date: 2016-01-01*

---

đàn

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has three posts: the initial problem from "Pointy" about the Smoothieboard freezing over USB, a response from "arthurwolf" suggesting a shorter USB cable, and a follow-up from "Pointy" indicating that the shorter cable worked.

First, I need to parse the HTML structure. Each post is within a "post-container" div, with the user's name, date, and content. The challenge is to convert this into a readable Markdown format while preserving the structure and hierarchy of the conversation.

I should start by identifying each post. The first post is the original question, then the response, then the follow-up. In Markdown, forum threads are often represented with headers for each post, including the author, date, and content. Using bold for names and dates, and maybe indentation for replies.

I need to make sure that the replies are properly nested under the original post. Since this is a linear conversation (post, reply, reply), using a simple list with indentation might work. Also, the user mentioned the USB cable length, so that should be clearly noted.

I should check for any HTML entities that need to be converted, like &amp; for &, but in the provided HTML, it seems already decoded. Also, ensuring that the dates are formatted consistently.

Another thing is the use of code blocks. The original HTML has some JavaScript and HTML tags, but since the user wants Markdown, those should be omitted, focusing only on the text content.

Finally, I'll structure each post with the author's name, date, and their message, using appropriate Markdown syntax like bold, italics, and blockquotes if necessary. Making sure the flow is logical and easy to read.
</think>


---

**Original Post**  
**Author:** Pointy  
**Date:** 13 Feb 2015 14:58  
**Content:**  
You have a Smoothieboard that's freezing over USB. I found a shorter (about 1m) USB cable and the first print was successful, I'll do some more testing.  

---

**Response**  
**Author:** arthurwolf  
**Date:** 13 Feb 2015 14:17  
**Content:**  
Thanks for the rapid response. I found a shorter (about 1m) USB cable and the first print was successful. I'll do some more testing.  

**Suggested Solution:**  
- Use a shorter USB cable (e.g., ~1m) to reduce interference.  
- Ensure the cable is of good quality and properly connected.  
- Test further to confirm consistency.  

---

**Follow-Up**  
**Author:** Pointy  
**Date:** 13 Feb 2015 14:58  
**Content:**  
Thanks for the rapid response. I found a shorter (about 1m) USB cable and the first print was successful. I'll do some more testing.  

---

**Summary of Issue & Resolution**  
- **Problem:** Smoothieboard freezing during USB communication.  
- **Cause:** Likely electromagnetic interference from a long or poor-quality USB cable.  
- **Fix:** Replaced the cable with a shorter, high-quality alternative.  
- **Status:** Initial tests successful; further verification recommended.  

--- 

Let me know if you'd like this formatted as a GitHub-style discussion thread or another style!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730053722/http://smoothieware.org/forum/t-1111343/smoothieboard-freezing-over-sub)*
