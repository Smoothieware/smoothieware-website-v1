# second extruder

*Original post date: 2016-01-01*

---

ﳊ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The main goal is to represent the forum discussion in a more readable format using Markdown.

First, I need to parse the HTML structure. The forum has multiple posts, each with a username, timestamp, and content. There are also replies and comments. The challenge is to structure this information in Markdown while maintaining the hierarchy and flow of the conversation.

Looking at the HTML, each post is within a div with class "post" and has a unique ID. The user names are in elements with class "printuser", and the content is in divs with class "content". The timestamps are in elements with class "odate". Replies are indicated by the "Reply" button, and there's a thread of conversation between Steve and Arthur.

I should start by creating a header for the forum thread, maybe using a heading like "## Forum Thread: Second Extruder". Then, for each post, I'll use a blockquote or a code block to represent the content. Since Markdown doesn't have a direct equivalent for forum posts, using blockquotes with the username and timestamp might work.

For example, the first post by Steve would be:

> **Steve Pileeki** (11 Jun 2014 23:38)  
> I'm trying to set up a second extruder on my 3D printer, but I'm running into some configuration issues. The firmware seems to recognize the second hotend, but the extruder isn't moving. Any ideas on what I might be missing?

Then, Arthur's reply would be nested under Steve's post, perhaps using indentation or another blockquote. However, since Markdown doesn't support nested blockquotes well, maybe using a different approach like numbering or using a code block for the configuration lines.

Wait, the user mentioned that the issue was with commented lines in the configuration. So, in the HTML, there are lines like `# extruder2_steps_per_unit = 100` which are commented out. Arthur's reply points out that these lines should be uncommented. So in Markdown, I can represent the configuration lines as code and show the correction.

Also, Steve's final message says "that was it, all is well," so the resolution is that the commented lines were the problem. I need to make sure that's clear in the Markdown.

I should structure each post with the username, timestamp, and content. For code snippets, using triple backticks. Maybe separate the problem description, the solution, and the resolution into different sections.

Another thing to note is that the original HTML has some JavaScript and other elements that aren't relevant to the Markdown conversion. I can ignore those and focus on the text content.

So, putting it all together, the Markdown should have a clear thread of the conversation, with each user's message, the timestamps, and the code examples where necessary. Making sure that the solution is highlighted, perhaps using bold or a code block to show the corrected configuration lines.
</think>

## Forum Thread: Second Extruder

### Post by Steve Pileeki (11 Jun 2014 23:38)
I'm trying to set up a second extruder on my 3D printer, but I'm running into some configuration issues. The firmware seems to recognize the second hotend, but the extruder isn't moving. Any ideas on what I might be missing?

---

### Reply by Arthur (11 Jun 2014 23:28)
You might be missing the configuration lines for the second extruder. Ensure that the following lines are **not** commented out in your firmware configuration:

```ini
extruder2_steps_per_unit = 100
extruder2_temperature_sensor = 1
extruder2_heater_pin = 12

If these lines are commented (i.e., prefixed with `#`), the firmware will ignore them, and the second extruder won't function.

---

### Reply by Steve Pileeki (12 Jun 2014 00:42)
Thanks Arthur, that was it, all is well.

Steve…


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-875277/second-extruder)*
