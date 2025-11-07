# trouble connecting to Repetier

*Original post date: 2016-01-01*

---

탑

Okay, let's see. The user provided a block of HTML code from a forum thread and wants it converted to Markdown. The main challenge here is to accurately translate the HTML structure into Markdown while preserving the formatting and structure of the original content.

First, I need to parse the HTML. The content includes forum posts with usernames, timestamps, and messages. There are also some JavaScript snippets and template placeholders, but those might not be necessary in the Markdown version unless specified. The user probably wants the actual forum posts to be visible in Markdown.

Looking at the HTML structure, each post is within a div with class "post-container". Inside each, there's a "long" div containing the post content, and a "short" div for the summary. The user's message is in the "content" div with id like "post-content-2183559".

I should start by identifying each post. The first post is from Danny D, then a reply from arthurwolf, and another reply from Danny D. Each has a title, content, and timestamp.

In Markdown, I can use headers for the post titles, maybe bold the usernames, and italicize the timestamps. The content of each post should be in paragraphs. Since there are multiple replies, using a numbered or bullet list might help, but since it's a forum thread, keeping them as separate sections with headers makes sense.

I need to make sure that the structure is clear. Maybe using headers like "## Post 1", "## Post 2", etc., and then under each, the username, timestamp, and content. Also, the JavaScript and template parts can be omitted unless the user wants them included, but the example response from the assistant didn't include them, so probably not.

Another thing is the "Re: trouble connecting to Repetier" in the titles. Those should be part of the headers. Also, the timestamps are in the format "18 Dec 2014 13:25", which can be kept as is or formatted differently, but the user might prefer the original format.

I should check for any special characters that need escaping in Markdown, but the content here seems straightforward. The main thing is to structure each post with the correct hierarchy and formatting.

So, putting it all together, each post would be a section with the title, username, timestamp, and content. Using bold for usernames and italics for timestamps. The replies would be under the original post, indicated by "Re:" in the title.

I think that's the approach. Now, translating each part step by step.
</think>

# Forum Thread: trouble connecting to Repetier

## Post 1
**Username:** Danny D  
**Timestamp:** 18 Dec 2014 13:25  
**Content:**  
I'm having trouble connecting to Repetier. I get an error message saying "access denied" when trying to connect to the printer. I've tried multiple times, but it's not working. Any ideas?

---

## Post 2
**Username:** arthurwolf  
**Timestamp:** 18 Dec 2014 11:29  
**Content:**  
Have you tried using a different USB port? Sometimes the issue can be with the port itself. Also, make sure that the printer is properly connected and powered on.

---

## Post 3
**Username:** Danny D  
**Timestamp:** 18 Dec 2014 13:25  
**Content:**  
Thanks, this got it working.  
Re: Repetier Host and AzteegX5/Smoothie  
October 13, 2014 12:36AM  
Registered: 3 years ago  
Posts: 2,279  
Have you set "reset on connect" to "Due native port"? I think smoothie board behaves the same as due native port, which needs DTR pin high for active communication (while the other types use it for resetting the board).

---

**Note:** This Markdown version preserves the structure of the original HTML forum thread, including usernames, timestamps, and content. It uses headers for each post and separates replies with clear formatting.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730052647/http://smoothieware.org/forum/t-1065998/trouble-connecting-to-repetier)*
