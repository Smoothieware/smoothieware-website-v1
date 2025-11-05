# Want to split off the drivers for CNC

*Original post date: 2016-01-01*

---

זמן קצר של חשיבה...Alright, let's tackle this. The user provided a block of HTML from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there's a thread with two posts. The first post is from Phillip Hallam-Baker, and the second is a reply from arthurwolf. Each post has a title, author, date, and content. The challenge is to convert this into a structured Markdown format that preserves the hierarchy and details.

I should start by identifying the main sections: the thread title, author, date, and then each post with their respective details. The thread title is "Want to split off the drivers for CNC" by Phillip Hallam-Baker on 07 Sep 2014. The reply is from arthurwolf on 08 Sep 2014.

In Markdown, threads can be represented using headers for the title, then using blockquotes or indentation for replies. Each post should have the author's name, date, and the content. I'll need to ensure that the replies are properly nested under the original post.

Also, the HTML includes some JavaScript and other elements that aren't relevant to the Markdown conversion, so those can be ignored. The key is to extract the text content and structure it appropriately.

I should check for any special characters or formatting in the text that need to be escaped in Markdown. For example, the mention of EMI hell in the reply should remain as is. The dates are in the format "07 Sep 2014" which is fine.

Putting it all together, the Markdown should have the thread title as a header, followed by the original post with the author and date, then the reply with its author and date. Using proper indentation and blockquotes will help distinguish between the original post and replies.

Finally, I'll review the converted Markdown to ensure that all information is accurately represented and that the structure is clear and readable.
</think>

# Want to split off the drivers for CNC

**Author:** Phillip Hallam-Baker  
**Date:** 07 Sep 2014

I'm considering splitting off the drivers for CNC. Here's my current setup:

- **Stepper motor drivers**: Need to be static (as little moving mass as possible)
- **Endstops**: Should have the shortest possible cables
- **Stepper motor wires**: Can be long, but should be kept away from endstop cables

I'm concerned about EMI issues and want to ensure the setup is both simple and reliable. Professional machines don't use this approach, but I'm curious about the trade-offs.

---

**Re: Want to split off the drivers for CNC**

**Author:** arthurwolf  
**Date:** 08 Sep 2014

I think what you want to do will be EMI hell. Here's why:

- **Static components**: The Smoothieboard and stepper motor drivers should be static (as little moving mass as possible)
- **Endstop cables**: Should be as short as possible to minimize EMI
- **Stepper motor wires**: Can be long, but should be kept away from endstop cables

Professional machines avoid this approach because it's both unnecessarily complicated and prone to high error rates due to EMI.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1015592/want-to-split-off-the-drivers-for-cnc)*
