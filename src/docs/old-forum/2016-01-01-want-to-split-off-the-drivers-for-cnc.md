# Want to split off the drivers for CNC

*Original post date: 2016-01-01*

---

przez
Okay, let's see. The user provided a block of HTML from a forum thread and wants me to convert it into Markdown. The original content is a discussion between Phillip Hallam-Baker and Arthurwolf about splitting off drivers for CNC machines.

First, I need to parse the HTML structure. The main elements are the thread title, user posts, and replies. Each post has a title, author, date, and content. There are also some JavaScript snippets and hidden elements, but those can be ignored for the Markdown conversion.

Starting with the thread title: "Want to split off the drivers for CNC" by Phillip Hallam-Baker on 07 Sep 2014 13:08. Then there's a reply from Arthurwolf on 08 Sep 2014 10:00.

I should structure the Markdown with headers for each post, using the author's name and date as subheadings. The content of each post should be in paragraphs, preserving the original text. Also, the user mentioned using Markdown, so I need to ensure proper formatting like bold for names and dates, and proper line breaks.

Wait, the original HTML has some JavaScript and hidden divs, but those aren't part of the actual content. I should focus only on the visible parts: the thread title, user posts, and replies. The "Re: " in the reply indicates it's a response to the original post.

I need to make sure that the Markdown is readable and follows standard formatting. Using headers for each post, maybe with the author and date in italics or bold. Also, the original post has a summary in the "short" div, but the detailed content is in the "long" div. The user might want the detailed content, so I'll prioritize that.


In Markdown, I can use headers like ## for the thread title, and ### for each post. The author and date can be in bold or italic. The content of each post should be in paragraphs, with line breaks as needed.

Also, the user might want to preserve the structure of the forum thread, so using appropriate headers and indentation. Maybe using blockquotes for replies, but since it's a forum, using regular paragraphs with the author and date mentioned.

I think that's a good approach. Now, I'll structure the Markdown accordingly, making sure to include all the content from both posts, properly formatted.
</think>

# Want to split off the drivers for CNC

**Author:** Phillip Hallam-Baker  
**Date:** 07 Sep 2014 13:08

I'm considering splitting off the drivers for CNC machines. Here's my current setup:

- **Stepper motor drivers**: Need to be static (as little moving mass as possible)
- **Endstops**: Should have the shortest possible cables
- **Stepper motor wires**: Can be longer, but should be kept away from endstop cables

I'm thinking about using CAT5 cables for signal transmission and separate power cables. The idea is to have breakout boards on each axis with the drivers mounted nearby. This would allow for easier maintenance and upgrades.

Would this approach be feasible? Are there any potential issues I should be aware of?

---

**Re: Want to split off the drivers for CNC**

**Author:** Arthurwolf  
**Date:** 08 Sep 2014 10:00

I think what you want to do will be EMI hell. Here's why:

1. **EMI Issues**: Running signal cables (like CAT5) alongside power cables can create electromagnetic interference, leading to errors in your CNC machine's operation.
2. **Static Components**: The Smoothieboard and stepper motor drivers should remain static. Moving these components increases the risk of mechanical failure and EMI.
3. **Endstop Cables**: These should be as short as possible to minimize signal degradation and interference.

What can be long are your stepper motor's 4 wires. Just make sure you don't run them too close to your endstop cables.

Professional CNC machines don't use this approach because it's both unnecessarily complicated and prone to high error rates due to EMI.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1015592/want-to-split-off-the-drivers-for-cnc)*
