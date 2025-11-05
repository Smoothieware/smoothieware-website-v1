# delta or morgan

*Original post date: 2016-01-01*

---

鱶

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. The main content is a discussion between two users about choosing between a delta and a morgan 3D printer.

First, I need to parse the HTML structure. The main elements are the thread title, user posts, and their replies. Each post has a title, author, date, and content. There are also buttons for replies and options, but those might not be necessary in the Markdown version.

I should start by creating a header for the thread. The original thread title is "delta or morgan" as seen in the first post. Then, each user's message should be formatted with their name, date, and the content. Since it's a forum, using blockquotes or a specific syntax for each post would make sense.

Looking at the first post by Jason Putt, he's asking about the cheaper option between delta and morgan. The reply from arthurwolf suggests going with a delta, specifically the mini kossel design. I need to make sure the hierarchy is clear, with the original question and the reply properly indented or marked as a response.

I should check for any HTML entities or special characters that need escaping in Markdown. Also, dates are in the format "26 May 2015 17:42", which should be kept as is. The usernames are in links, but in Markdown, just using the name with the date might be sufficient unless the user wants the links preserved, which they probably don't.

The buttons like "Reply" and "Options" are part of the HTML but not needed in the Markdown version. The JavaScript at the end can be ignored as it's not part of the content.

Now, structuring the Markdown:

- Start with the thread title as a heading.
- Each post as a section with the user's name, date, and content.
- Use blockquotes or italics for replies to indicate they're responses.

Wait, the first post is the original question, and the second is the reply. So maybe using a heading for each post, with the reply indented or marked as a reply. Alternatively, using a nested structure with > for replies.

Testing that approach:

## delta or morgan

**Jason Putt**  
26 May 2015 17:42

> I'm trying to decide between a delta and a morgan. Which is cheaper to build?

**arthurwolf**  
26 May 2015 19:07

> I'd recommend you go with a delta just because it's simpler overall. If this is your first printer, go with a well known design like the mini kossel.

That seems to capture the structure. The original question and the reply. Using bold for names and dates, and blockquotes for the content. The user might also want the thread title as a heading, so maybe:

# delta or morgan

Then the posts under that. Also, checking if the user wants any links or if the usernames should be linked. Since the original HTML has links to user profiles, but in Markdown, unless specified, it's better to just use the username as text.

Another thing: the original post mentions "cheaper to build," but in the HTML, the user wrote "cheaper" but in the Markdown example, the assistant wrote "simpler overall." Wait, looking back at the HTML content:

The first post's content is: "I'm trying to decide between a delta and a morgan. Which is cheaper to build?"

But in the reply, arthurwolf says: "I'd recommend you go with a delta just because it's simpler overall. If this is your first printer, go with a well known design like the mini kossel."

So the original question is about cost, and the reply is about simplicity. The assistant's previous example had "cheaper" but in the actual HTML, the user wrote "cheaper to build." So I need to make sure that's accurate.

Putting it all together, the Markdown should reflect the exact text from the HTML, just formatted properly. Also, ensuring that the dates are correctly formatted and the usernames are properly noted.

I think that's all. Now, writing the final Markdown with these considerations.
</think>

# delta or morgan

**Jason Putt**  
26 May 2015 17:42

> I'm trying to decide between a delta and a morgan. Which is cheaper to build?

**arthurwolf**  
26 May 2015 19:07

> I'd recommend you go with a delta just because it's simpler overall. If this is your first printer, go with a well known design like the mini kossel.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1216308/delta-or-morgan)*
