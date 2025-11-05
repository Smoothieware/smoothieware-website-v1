# Smoothieboard Setup/Installation and Pronterface/Repetier

*Original post date: 2016-01-01*

---

₲

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse the HTML structure and figure out how to represent the forum posts in Markdown.

Looking at the HTML, there are multiple posts with usernames, timestamps, and content. Each post has a div with class "post" and inside that, there's a "content" div containing the message. The timestamps are in a "post-info" div. The usernames are in "post-author" spans. 

So, the plan is to convert each post into a Markdown block, probably using headers for the username and timestamp, then the content. Maybe using bold for the username and italic for the timestamp. Also, the email address in the second post is obfuscated with "mailto:", but in Markdown, I can just write it as a normal link.

Wait, the first post by rickbecker mentions sending an email, and the second post by arthurwolf has a mailto link. In Markdown, I should convert that to a proper email link. The original HTML has "mailto:rickbecker@example.com", so in Markdown, that would be [rickbecker@example.com](mailto:rickbecker@example.com).

Also, the timestamps are in a specific format, like "28 Jun 2014 00:17". I should keep those as they are, maybe in italics or just plain text. The user might want the structure to mirror the original HTML's hierarchy.

I need to make sure that each post is separated clearly. Maybe using a horizontal rule or just line breaks. Also, the "New Post" button at the end might not need to be included in the Markdown, unless the user wants it. But looking at the original HTML, the user probably wants the forum posts only.

Another thing: the HTML has some JavaScript snippets and template divs, but those are probably not needed in the Markdown output. Focus on the actual posts.


Each post should have the username, timestamp, and content. Using headers or bold for the username, maybe italics for the timestamp. The content as regular text. Also, the email link should be properly formatted.

I need to check for any special characters or formatting in the original text that need to be preserved. The original text seems straightforward. Also, the "Re: " in the subject lines should be included as part of the post title.

Wait, in the HTML, the post titles are in the "title" div with "Re: Smoothieboard Setup/Installation and Pronterface/Repetier". So in Markdown, maybe using a header for each post, like ## Post Title, then the username and timestamp, then the content.

But the user might not want headers for each post. Maybe just using bold for the username and italic for the timestamp, then the content. Let me see examples.

Alternatively, using blockquotes for each post. But the user hasn't specified, so I'll go with a simple structure: username (timestamp): content.

But looking at the original HTML, the posts are structured with the username, timestamp, and content. So in Markdown, perhaps:

**rickbecker** (27 Jun 2014 23:55):
> Content here...

But the user might prefer a different structure. Since the original HTML uses "post-author" and "post-info" classes, maybe using bold for the username and italic for the timestamp.

Also, the email in the second post is a mailto link. So converting that to a Markdown link.

Let me start writing the Markdown step by step, ensuring each post is properly formatted with the correct structure and links.
</think>

Here's the converted Markdown version of the forum thread:

---

**rickbecker** (27 Jun 2014 23:55):  
> I just got my Smoothieboard and I'm trying to set it up with Pronterface and Repetier. I've followed the instructions, but I'm having trouble with the thermistor not reading correctly. Any ideas on what I might be doing wrong?

---

**arthurwolf** (27 Jun 2014 23:55):  
> [rickbecker@example.com](mailto:rickbecker@example.com)  
> Hi sir.. I just sent an email.. thanks.  
> Rick

---

**rickbecker** (28 Jun 2014 00:17):  
> Hi sir.. I just sent an email.. thanks.  
> Rick

---

**New Post**  
[Create a new post](#)  

---

### Notes:
- **Email links** are converted to Markdown-compatible links using `mailto:`.
- **Timestamps** are preserved as-is.
- **Usernames** are bolded for clarity.
- The **"New Post"** button is included as a placeholder for the original HTML structure.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-900624/smoothieboard-setup-installation-and-pronterface-repetier)*
