# G code control of 4th and 5th steppers

*Original post date: 2016-01-01*

---

⚣

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has a discussion between two users, harry11733 and arthurwolf, about controlling stepper motors using G-code. 

First, I need to parse the HTML structure. The main elements are the posts, each with a title, content, author, and date. There are also buttons for actions like editing or deleting posts, but those might not be necessary in the Markdown version.

I should start by identifying each post. The first post is from harry11733 asking about G-code control for 4th and 5th steppers. Then arthurwolf responds, mentioning that it's planned for Smoothie firmware. Harry replies again explaining their project is a liquid handling robot similar to Opentrons but different.

I need to structure each post with headers, maybe using > for quotes, and include the usernames and dates. Also, the links to the forum thread and permalinks might need to be converted into Markdown links if possible. However, the user didn't specify handling links, so maybe just keep the text as is.

Wait, the original HTML has some JavaScript and template elements. Those probably aren't needed in the Markdown. Focus on the visible content: the posts, their content, authors, dates, and replies.

So, the Markdown should have sections for each post, with the user's name and date, followed by their message. Since it's a forum thread, using indentation or blockquotes might help. Let me check the example again.

The first post is the original question. Then replies are marked as "Re: ...". In Markdown, maybe using headers like ## Post 1, ## Post 2, etc., but perhaps using a more natural structure with usernames and dates.

Also, the user might want the Markdown to be readable and preserve the conversation flow. So, using something like:

**User:** harry11733  
**Date:** 12 Mar 2016 19:20  
**Message:** We are building a liquid handling robot...

But maybe even simpler, just using blockquotes for each post. Alternatively, using a list with each post as a list item. However, since it's a conversation, perhaps using indentation levels for replies.

Another consideration: the original HTML has some JavaScript variables like WIKIDOT.forumThreadId = 1642821;. Not sure if that's relevant, but probably not needed in Markdown.

So, the plan is:

1. Extract each post's content, author, and date.
2. Format each post in Markdown, perhaps with headers or blockquotes.
3. Ensure replies are properly indented or marked as such.
4. Remove any HTML-specific elements like buttons or scripts.

</think>

# Forum Thread: G-code Control of 4th and 5th Steppers

## Post 1
**Author:** [harry11733](https://web.archive.org/web/20160529051853/https://www.wikidot.com/user:info/harry11733)  
**Date:** 12 Mar 2016 19:20

We are building a liquid handling robot, similar to Opentrons, although different components, software, focus. Control of the pipetting function (A and B motors) is conceptually simpler if you can think in terms of linear motion.

---

## Post 2
**Author:** [arthurwolf](https://web.archive.org/web/20160529051853/https://www.wikidot.com/user:info/arthurwolf)  
**Date:** 12 Mar 2016 18:56

This is planned for Smoothie firmware. We are working on it.

---

## Post 3
**Author:** [harry11733](https://web.archive.org/web/20160529051853/https://www.wikidot.com/user:info/harry11733)  
**Date:** 12 Mar 2016 19:20

We are building a liquid handling robot, similar to Opentrons, although different components, software, focus. Control of the pipetting function (A and B motors) is conceptually simpler if you can think in terms of linear motion.

---

**Note:** The original HTML included additional elements like buttons and JavaScript, which have been omitted for clarity. The thread is structured with each post labeled by its author, date, and content.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1642821/g-code-control-of-4th-and-5th-steppers)*
