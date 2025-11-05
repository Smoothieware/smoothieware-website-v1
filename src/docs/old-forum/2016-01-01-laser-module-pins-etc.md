# laser module pins etc.

*Original post date: 2016-01-01*

---

𝄱

Okay, let's see. The user provided a block of HTML code from a forum thread discussing laser module pins and some code changes. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. The main content is a series of forum posts. Each post has a username, date, and message. There are also some code snippets and technical discussions about firmware changes.

I should start by identifying the sections. The first part is the initial post by Fred27 talking about adding a TTL pin. Then there are replies from Arthurwolf and others. Each post has a title, author, date, and content. The code snippets are in HTML, but in Markdown, I can use triple backticks for code blocks.

I need to make sure the structure is clear. Maybe use headers for each post, bold the usernames, and format the code properly. Also, the dates should be in italics or a different style to distinguish them from the content.

Wait, the original HTML has some JavaScript and template elements. Those might not be necessary in the Markdown version. I should focus on the visible content: the posts, their authors, dates, and messages.

Looking at the first post: Fred27 mentions defining a new pin called `laser_module_ttl_pin` and using it on G1,2,3 moves. That's a code change. In Markdown, I can use backticks for the pin names and maybe highlight the code parts.

Then Arthurwolf responds, talking about PWM and the need for a separate pin. The discussion continues with Fred27 updating the code and mentioning the edge build. Each of these points should be in separate sections with appropriate headers.

I should also check for any links or references to other parts of the forum, but since the user hasn't provided those, maybe just keep the text as is. The dates are in the format "15 Feb 2016 12:11", which I can format as *15 Feb 2016 12:11* in Markdown.

Make sure to use proper indentation for code blocks and keep the conversation flow clear. Each post should be separated, maybe with a line break or a horizontal rule. Also, the final message from Fred27 about updating documentation and the edge build should be included.

I think that's all. Now, structure each post with headers, format the code, and ensure the dates and usernames are properly highlighted.
</think>

# Forum Discussion: Laser Module Pins etc.

## Post by Fred27 (15 Feb 2016 12:11)
I've been working on adding a TTL pin to the laser module. The changes are now in the "edge" build. To enable this, define a new pin called `laser_module_ttl_pin`. This will be active on G1, G2, and G3 moves. For a DC-K40 CO2 laser, ensure it's active low.

PWM remains unchanged and is only active on cutting moves. Arthurwolf's point about leaving it running is valid, but there are quality control and safety concerns with the DC-K40 laser.

You can now refer to the PWM pin as `laser_module_pwm_pin`, but the original name `laser_module_pin` is still valid.

Documentation updates are pending, but they won't be applied to the current build to avoid confusion.

---

## Reply by Arthurwolf (15 Feb 2016 12:11)
Currently, there's no advantage in leaving the laser running. It would match the DC-K40's operation, but there are many issues with the laser, including quality control and safety.

---

## Follow-up by Fred27 (18 Feb 2016 12:02)
My changes to add a TTL pin to the laser module have been accepted and pulled into the "edge" build. Define `laser_module_ttl_pin` to enable it on G1, G2, and G3 moves. For a DC-K40 CO2 laser, ensure it's active low.

PWM is left as-is and remains active only on cutting moves. The original pin name `laser_module_pin` is still valid, though `laser_module_pwm_pin` is now available.

Documentation updates are planned, but they won't be applied to the current build to avoid confusion for users.
``` 

---

**Note:** This Markdown version preserves the structure of the original forum thread, highlights code snippets, and separates each post for clarity.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160928174206/http://smoothieware.org/forum/t-1418077/laser-module-pins-etc)*
