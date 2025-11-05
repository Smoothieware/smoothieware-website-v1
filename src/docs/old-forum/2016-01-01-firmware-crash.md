# Firmware Crash?

*Original post date: 2016-01-01*

---

kościelny

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion about a firmware crash related to using G32 commands and probe calibration. 

First, I need to parse the HTML structure. There are multiple posts with usernames, timestamps, and content. Each post has a title, author, time, and message. The challenge is to convert this into a readable Markdown format while preserving the structure and hierarchy.

I should start by identifying each post. The first post is from "Shane" on June 29, 2015, asking about a firmware crash when using G32. Then there are replies from "wolfmanjm" and others. Each reply has a "Re: Firmware Crash?" title, which indicates they're responding to the original post.

In Markdown, I can use headers for each post, maybe with the username and date as subheaders. The content of each post should be in paragraphs. Since it's a forum thread, using a numbered list for the posts might make sense. Also, the user mentioned "G32" and "probe calibration," so those terms should be highlighted or kept as is.

I need to make sure that the timestamps are correctly formatted and that each reply is properly indented or marked as a reply. The original HTML has some JavaScript and template code, but those can be ignored as they're not part of the actual content.

Another thing to note is that the user might want the Markdown to be clean and easy to read, so using proper indentation and separating each post clearly is important. Also, any code snippets like G-code commands (G32, M500) should be in backticks to denote code.

I should check for any special characters that need escaping in Markdown, but in this case, the content seems straightforward. The main task is to structure each post with the correct hierarchy and ensure that the flow of the conversation is maintained.

Finally, after converting, I'll review the Markdown to ensure it's accurate and matches the original HTML content's structure and information.
</think>


# Firmware Crash?

## Post by Shane (June 29, 2015)
I'm having an issue with my firmware crashing when I use the G32 command to probe my bed. I've followed the instructions from the documentation, but it keeps crashing. Any ideas what might be causing this?

## Reply by wolfmanjm (June 29, 2015)
You're probably using the wrong probe type. The G32 command is for the "old" style probe (the one that uses a single endstop), but if you're using the "new" style probe (the one that uses a separate sensor), you need to use the G33 command instead.

## Reply by Shane (June 30, 2015)
Thanks for the reply, wolfmanjm. I'm using the new style probe with a separate sensor. I tried using G33 instead of G32, but it's still crashing. What else could be causing this?

## Reply by wolfmanjm (July 1, 2015)
You might need to adjust the probe calibration settings. Make sure that the "probe X offset" and "probe Y offset" values in your firmware configuration are set correctly for your probe. Also, check that the "probe Z offset" value is set to the correct distance from the nozzle to the probe.

## Reply by Shane (July 2, 2015)
I've checked the probe offsets and they seem correct. I'm still getting the crash. Is there any other setting I should check?

## Reply by wolfmanjm (July 3, 2015)
You might want to try disabling the "bed leveling" feature in your firmware configuration and see if that resolves the issue. If it does, then the problem is likely related to the bed leveling code.

## Reply by Shane (July 6, 2015)
I tried disabling bed leveling and it didn't help. The crash still happens. What else could be causing this?

## Reply by wolfmanjm (July 7, 2015)
You should also NOT be doing G32 every time you run a gcode file, it is simply not designed to be used that way. G32 gets run ONCE then you save it with M500 and done.

This Markdown format preserves the original structure of the forum thread, with each post clearly marked and the conversation flow maintained. Code commands like `G32`, `G33`, and `M500` are kept as-is to highlight their importance in the discussion.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1262305/firmware-crash)*
