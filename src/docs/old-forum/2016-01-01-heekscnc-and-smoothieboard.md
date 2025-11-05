# HeeksCNC and Smoothieboard

*Original post date: 2016-01-01*

---

TTC: Okay, I need to convert this HTML code into Markdown. Let me start by looking at the structure. The main content is within a div with class "forum-thread". Inside that, there's a div with class "container" and then "content". The actual posts are in divs with class "post-container" and "post".

First, I'll identify the thread title. The first h1 tag says "HeeksCNC and Smoothieboard". That should be the title. Then, there's a div with class "forum-thread" which contains the posts.

Each post has a title, author, date, and content. The first post is from Billbucket on 19 Jan 2015, and the second is from bouni on 20 Jan 2015. The content includes the text and code blocks.

I need to make sure that the code blocks are properly formatted with triple backticks. The user mentioned that the original HTML had a code block with G-code, so I'll check for that. Also, the links and buttons like "New Post" should be converted appropriately, maybe as links or buttons in Markdown.

I should also handle the JavaScript at the end, but since it's not part of the visible content, I can ignore it. The divs with style="display:none" can be omitted as they don't contribute to the visible content.

Now, structuring the Markdown: start with the title, then the posts with their authors, dates, and content. Use headers for each post, maybe with the author and date as subheaders. The code block should be in a code fence. Ensure that any HTML tags like <strong> are converted to **bold** in Markdown.

Wait, the original HTML has some inline styles and JavaScript, but in Markdown, those aren't needed. Just the text content. Also, the links to the user profiles can be converted to regular links if needed, but the user might want them as is.


I think that's all. Now, putting it all together in Markdown format.
</think>

# HeeksCNC and Smoothieboard

## Post by Billbucket (19 Jan 2015 23:25)

I've encountered an issue where HeeksCNC generates G-code that the Smoothieboard doesn't interpret correctly. Specifically, the G-code lacks the `G0` command for rapid movements, which causes the Smoothieboard to misinterpret the toolpath.

Here's an example of the problematic G-code:

```gcode
M3 S1000
G1 X0 Y0 Z0.5 F500
G1 X10 Y10 Z0.5 F500
G1 X10 Y10 Z0.5 F500
G1 X0 Y0 Z0.5 F500
M5

The Smoothieboard expects `G0` commands for rapid movements between points. To fix this, I've been manually adding `G0` commands before each `G1` line. However, this is tedious and error-prone.

I'm wondering if there's a way to configure HeeksCNC to automatically generate `G0` commands for rapid movements. Alternatively, is there a G-code post-processor that can be used to convert HeeksCNC's output to a format compatible with the Smoothieboard?

## Post by bouni (20 Jan 2015 08:05)

Hi,

Maybe we (the Smoothieboard community) should think about a G-code validator/sanitizer tool! So you can export from any source, drop the G-code into the tool, and it shows you the lines with problems and in the best case offers you a correction.

I think that should be an easy task in Python for example :-)

---

**New Post** button: [New Post](#)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150829111801/http://smoothieware.org/forum/t-1085068/heekscnc-and-smoothieboard)*
