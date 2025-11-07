# Smoothieboard PSU question

*Original post date: 2016-01-01*

---

שנית

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has three posts: the initial question by Czucker, a response from kit-robotics, and a follow-up from Czucker again.

First, I need to parse each post and convert them into Markdown format. The main elements here are the usernames, timestamps, and the content of each post. The HTML uses divs with classes like "post-container", "long", "head", "title", "info", and "content". 

Starting with the first post by Czucker. The title is "Smoothieboard PSU question" and the content is the original question about using the Smoothieboard with different PSUs. The timestamp is "30 Jun 2015 19:55". I'll need to format this as a Markdown heading for the title, then the username and timestamp, followed by the content.

Next, the response from kit-robotics. The title is "Re: Smoothieboard PSU question" and the content explains how to set up the PSUs and use the always-on fans. The timestamp is "30 Jun 2015 18:18". I'll structure this similarly, with the username and timestamp, then the content.

Then, Czucker's follow-up. The title is "Re: Smoothieboard PSU question" again, and the content is a thank you message. The timestamp is "30 Jun 2015 20:39". Again, same structure.

I need to make sure that each post is clearly separated, using headers for the titles, and italicizing the usernames and timestamps. Also, the content should be in paragraphs, and any mentions of specific hardware (like the Smoothieboard) should remain as is. 

I should check for any HTML entities that might need escaping, but in this case, it seems straightforward. Also, the timestamps are in the format "DD Mon YYYY HH:MM", which is fine. 

Another thing to note is that the original HTML has some JavaScript and other elements that aren't relevant to the Markdown conversion, so I can ignore those. The key is to capture the structure and content of each post accurately.

Finally, I'll format the Markdown with proper headers, usernames in italics, timestamps, and the content as paragraphs. Each post will be separated by a line break or a horizontal rule if needed, but since it's a forum thread, keeping them as separate sections with headers should be sufficient.
</think>


# Smoothieboard PSU question

**Posted by:** *Czucker* | *30 Jun 2015 19:55*

I'm currently using a Smoothieboard with a 12V 2A power supply. I'm wondering if I can use a different power supply for the heated bed and another for the extruder. I've read that the Smoothieboard can handle multiple PSUs, but I'm not entirely sure how to set it up. Any advice would be appreciated!

---

## Re: Smoothieboard PSU question

**Posted by:** *kit-robotics* | *30 Jun 2015 18:18*

Yes, the Smoothieboard can handle multiple PSUs. Here's how you can set it up:

1. Connect your 12V 2A PSU to the main power input on the Smoothieboard.
2. Use a separate 12V PSU for the heated bed and connect it to the "Heater" terminal block.
3. Use another 12V PSU for the extruder and connect it to the "Extruder" terminal block.
4. Ensure all connections are properly insulated and secured.

For the always-on fans, you can simply connect them directly to your 12V PSU without needing any additional configuration on the Smoothieboard.

---

## Re: Smoothieboard PSU question

**Posted by:** *Czucker* | *30 Jun 2015 20:39*

Thanks! That's extremely helpful.

As for running the always on fans, that's exactly right. I can just run them from my 12V PSU. Sometimes it's the simple things that escape me!

This format preserves the original structure while making the content more readable in a Markdown context. Each post is separated with a horizontal rule (`---`), and the usernames/timestamps are italicized to indicate metadata.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1262734/smoothieboard-psu-question)*
