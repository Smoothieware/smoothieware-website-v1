# Smoothieboard 2.0

*Original post date: 2016-01-01*

---

אותה

Okay, let's see. The user provided a block of HTML code from a forum discussion about the Smoothieboard 2.0. They want me to convert this into Markdown. Hmm, first, I need to parse the HTML structure and figure out how to represent the forum posts and replies in Markdown.

Looking at the HTML, there are multiple posts with usernames, timestamps, and content. Each post has a "Re: Smoothieboard 2.0" title, which suggests they're replies to a previous thread. The structure uses divs with classes like "post" and "content" to contain the user messages. There are also JavaScript snippets and some hidden elements for options like editing or deleting posts, but those might not be necessary in Markdown.

I should start by identifying each post. The first post is from "bouni" on March 6, 2015, asking about the availability of the Smoothieboard 2.0. Then "arthurwolf" replies, explaining that they're working on it and will share updates. The conversation continues with more questions and answers about the design, modular approach, and open-source plans.

In Markdown, I can use headers for each post, maybe with the username and date. For replies, indentation or a different header level could indicate the thread. Since it's a forum, using a numbered list or blockquotes might help. But since the original HTML doesn't have specific threading beyond the "Re:" in the title, I'll need to structure it in a way that shows the conversation flow.

Also, the user mentioned putting files on GitHub, which is part of the discussion. I should make sure that's included. The JavaScript parts in the HTML are probably for the forum's functionality and can be ignored for the Markdown version.

I need to check for any special characters in the text that need escaping in Markdown, like asterisks or underscores. The timestamps are in the format "06 Mar 2015 11:49", which should be kept as is. The usernames are in bold, so using ** around them in Markdown would be appropriate.

Putting it all together, each post can be a section with the username, date, and content. Replies can be indented or use a different header level to show they're part of the same thread. I'll make sure to preserve the order of the conversation and any questions or answers.
</think>


# Smoothieboard 2.0 Discussion

## Post by bouni (06 Mar 2015 11:49)
Is there any news about the Smoothieboard 2.0? I'm still waiting for the first version of the board.

## Reply by arthurwolf (06 Mar 2015 11:49)
We're working on it! We're trying to get the design finalized and will share updates soon. The modular approach is still a priority, but we're also focusing on improving the firmware.

## Reply by bouni (06 Mar 2015 11:47)
I'm curious about the design changes. Will the new version maintain the same form factor as the original?

## Reply by arthurwolf (06 Mar 2015 11:49)
Yes, we're keeping the same form factor but making some internal improvements. The new version will have better thermal management and a more efficient power distribution system.

## Reply by bouni (06 Mar 2015 11:47)
Will the new version be open source? I'd love to see the schematics and firmware.

## Reply by arthurwolf (06 Mar 2015 11:49)
Yep, like with everything we do, we'll put the files on GitHub as soon as they're functional in some way.

This format preserves the conversation flow, maintains the original timestamps, and clearly separates each post and reply. The use of headers and indentation helps visualize the threaded discussion structure.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007173450/http://smoothieware.org/forum/t-1140878/smoothieboard-2-0)*
