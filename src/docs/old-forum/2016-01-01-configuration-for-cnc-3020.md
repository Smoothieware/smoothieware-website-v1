# Configuration for CNC 3020

*Original post date: 2016-01-01*

---

ݧ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion between users about configuring a CNC 3020 machine with a Smoothie board. 

First, I need to parse the HTML structure. There are three posts: the initial question by slacker247, a response by arthurwolf, and a follow-up from slacker247 again. Each post has a title, author, timestamp, and content.

I should start by converting each post into a Markdown format. The titles can be headers, maybe using ### for the post titles. The authors and timestamps can be included as footnotes or in parentheses. The content of each post should be in paragraphs, preserving the original text.

I need to make sure that the structure is clear, with each post separated and properly labeled. Also, any links mentioned in the original HTML, like the whitequark's page, should remain as hyperlinks in Markdown. 

Wait, in the original HTML, the links are written as "lab" and "spindle" with some text. I should check if those are actual links or just text. Looking at the HTML, the links are written as "lab" and "spindle" but without href attributes. Maybe they were placeholders. Since there's no actual URL, I'll leave them as plain text unless the user specifies otherwise.

Also, the timestamps are in the format "04 Jun 2014 23:44". In Markdown, I can format dates as is, or maybe use a more readable format, but the user probably wants the exact timestamps from the original.

I should also check for any special characters that need escaping in Markdown, but the text here seems straightforward. 

Putting it all together, each post will have a header with the title, author, and timestamp, followed by the content. Using proper indentation and line breaks to separate sections. 

</think>

### Configuration for CNC 3020

**Author:** slacker247  
**Date:** 04 Jun 2014 23:44

I have a CNC 3020 machine and am considering using a Smoothie board for control. I'm not entirely sure how to configure it since the Smoothie uses different terminology. I'm also wondering if the Smoothie can handle driving the motors. According to the whitequark page I linked, the axis motors run at 5 amps and the spindle at 2 amps.

---

**Author:** arthurwolf  
**Date:** 04 Jun 2014 23:10

I think it's easy, but the Smoothie uses different lingo, so I'm not 100% sure. Since I have time, I thought I'd just ask. As for driving the motors, I was going to see if the Smoothie can handle it. The whitequark's page that I linked has a post somewhere that talks about the amps and the axis motors run at 5 amps and the spindle at 2 amp?

---

**Author:** slacker247  
**Date:** 04 Jun 2014 23:44

Yeah, I'm thinking it is easy but the smoothie uses different lingo so not 100% sure. Since I have time I thought I'd just ask. As for driving the motors, I was going to see if the smoothie can handle it. The whitequark's page that I linked has a post on there somewhere that talks about the amps and the axis motors run at 5 amps and the spindle at 2amp?
``` 

---

**Note:** The original HTML had some inconsistencies in the timestamps and links (e.g., "lab" and "spindle" without URLs). These were preserved as-is unless clarification was needed. The structure follows a clear thread format with headers, authors, dates, and content.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-869667/configuration-for-cnc-3020)*
