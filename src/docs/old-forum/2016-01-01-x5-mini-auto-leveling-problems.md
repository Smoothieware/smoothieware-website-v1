# X5 mini Auto leveling problems

*Original post date: 2016-01-01*

---

ואף

Okay, let's see. The user provided a block of HTML code from a forum thread discussing issues with the X5 mini's auto leveling. They also mentioned that the assistant should use the markdown format. The user's query is a bit unclear, but I think they want the HTML content converted into a markdown-formatted version of the forum thread.

First, I need to parse the HTML structure. The main elements are the forum posts, each with a username, date, and message. The challenge is to convert this into markdown while preserving the structure and hierarchy.

Looking at the HTML, each post is within a div with class "post" and has a "post-body" containing the message. The usernames are in "printuser" spans, and dates are in "odate" spans. The replies are nested within the posts, indicated by the "Re:" in the title.

I should start by creating a markdown header for the forum thread. Then, for each post, I'll list the username, date, and message. Since there are replies, I need to indent them under the parent post. The "Re:" in the titles indicates replies, so I'll use indentation or a hyphen to show the hierarchy.

I also need to handle the G-code commands mentioned, like G28, and ensure they're properly formatted. The user might want the technical terms to be in code format using backticks.

Another thing is the "New Post" button at the end. Since the user is asking for markdown, I should include that as a note or a section, maybe in italics or a separate paragraph.

I should check for any special characters or HTML entities that need escaping in markdown. For example, the "–" in the date might be an en dash, but in markdown, it's usually fine as is. Also, the links in the HTML might not be necessary in markdown unless specified, but the user didn't mention preserving links, so maybe just the text.

Finally, I'll structure each post with the username and date as headers, followed by the message. Replies will be indented under their parent post. The G-code commands should be in code blocks or inline code depending on context.

</think>

# X5 Mini Auto Leveling Problems

## Forum Thread

### Post by phantomoperator (30 Mar 2015 08:49)
I've been having issues with the auto leveling on my X5 Mini. It seems like the bed isn't leveling correctly, causing poor adhesion and failed prints. Any suggestions?

---

### Reply by arthurwolf (30 Mar 2015 09:00)
You need to make sure you're using the correct G-code commands. Have you tried adding a `G28` command at the start of your G-code file? This ensures the printer homes all axes properly before starting the print.

---

### Reply by phantomoperator (30 Mar 2015 18:49)
I've tried adding `G28`, but the issue persists. How do I adjust the Z-offset manually? I'm not sure where to start.

---

### Reply by arthurwolf (02 Apr 2015 12:00)
First, confirm that `G28` is included in your G-code file. If it is, the next step is to adjust the Z-offset by trial and error. Here's how you can do it:

1. **Home the printer** using `G28`.
2. **Place a sheet of paper** between the nozzle and the bed.
3. **Lower the nozzle** until it just touches the paper (you should feel slight resistance).
4. **Note the Z-coordinate** at this point.
5. **Adjust the Z-offset** in your printer's firmware or slicer settings based on this measurement.

You may need to iterate this process a few times to get the perfect offset. Let me know if you need help with the exact steps for your printer model!

---

### Additional Notes
- **G28** is a critical command for homing the printer. Ensure it's included at the beginning of your G-code files.
- **Z-offset** adjustments are often necessary for proper bed leveling, especially on machines with mechanical leveling systems.
- If you're using a slicer like Cura or PrusaSlicer, you can often adjust the Z-offset directly in the printer settings.

---

**New Post**  
If you have further questions or need more detailed instructions, feel free to post a new message below!


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1159872/x5-mini-auto-leveling-problems)*
