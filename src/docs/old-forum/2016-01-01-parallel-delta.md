# Parallel Delta?

*Original post date: 2016-01-01*

---

artır

Okay, let's tackle this. The user provided a block of HTML from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content hierarchy.

Looking at the HTML, there's a main container with posts. Each post has a title, author, date, and content. There are two posts here: the original question by NMN and the reply by arthurwolf. 

I should start by identifying the forum thread's title. The first post's title is "Parallel Delta firmware?" and the reply is "Re: Parallel Delta firmware?". The thread might be titled something like "Parallel Delta firmware?" based on the first post.

Next, the authors and dates. The first post is by NMN on 16 Aug 2016 18:40, and the reply is by arthurwolf on 17 Aug 2016 10:02. I'll need to format these as usernames with dates.

The content of the first post asks about parallel delta firmware and mentions Smoothie and other boards. The reply asks for clarification on what "parallel delta" means and mentions Smoothie's support for rotational delta.

I should structure each post with headers, usernames, dates, and the content. Since Markdown doesn't have a specific syntax for forum threads, using headers and blockquotes might work. Also, links to the original posts might be needed, but the user didn't specify including URLs, so maybe just the usernames and dates.

I need to make sure that the Markdown is clean and readable. Each post can be a section with the title as a heading, then the author and date, followed by the content. The reply should be indented or marked as a reply.

Also, check for any HTML elements that might need conversion, like links or buttons, but the user probably wants just the text content. The JavaScript and other script tags can be ignored as they're not part of the visible content.

Finally, ensure that the Markdown follows standard conventions, using # for headings, > for blockquotes, and proper line breaks. Avoid any markdown that's not necessary, like tables or lists unless the content requires it.
</think>

# Parallel Delta Firmware?

## Original Post by NMN (16 Aug 2016 18:40)

> Are there any firmware options for parallel delta printers? I'm looking into using a Smoothie or other boards, but I'm not sure if they support this configuration. Any recommendations or experiences?

---

## Reply by arthurwolf (17 Aug 2016 10:02)

> What do you mean exactly by parallel delta?  
> Smoothie supports what we call "rotational" delta (in addition to linear), is that what you mean?

---

### Notes:
- The thread includes a "New Post" button for further discussion.
- The original post was edited (indicated by the "Reply" button and timestamp).
- No additional posts or replies are included beyond the two provided.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1796389/parallel-delta)*
