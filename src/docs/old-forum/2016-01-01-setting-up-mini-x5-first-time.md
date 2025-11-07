# setting up Mini X5 , first time

*Original post date: 2016-01-01*

---

瀔

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there's a main container with a class "forum-thread" which contains the posts. Each post has a "post-container" with a "post" inside. Each post has a "long" section with the content and a "short" section for the summary. The user's example shows two posts: one from Danny D and a reply from wolfmanjm.

I need to convert each post into Markdown format. The title of the thread is "setting up Mini X5 , first time" and the replies are marked as "Re: ...". The usernames are in the info section, and the dates are also there. The content of each post is within the "content" div.

I should start by creating the thread title as a heading. Then, list each post with the username, date, and content. For the replies, use the "Re:" prefix. Also, note that the second post mentions Repetier Host being closed-source and recommends Printrun/Pronterface.

I need to ensure that the Markdown structure is clear, using headers for the thread title, and maybe blockquotes or indentation for replies. Also, check for any links or mentions of software that should be kept as is. Avoid any HTML tags and use proper Markdown syntax like bold for usernames and dates if needed.

Wait, the user's example shows the Markdown as just the text, so maybe they want a plain text conversion without markdown formatting. But the initial instruction says "convert to Markdown", so I should use Markdown elements.


1. Thread Title: # setting up Mini X5 , first time
2. First Post by Danny D on 28 Jul 2014 01:39
   - Content: Asks about missing features in Smoothie when using Repetier Host.
3. Reply by wolfmanjm on 31 Jul 2014 07:26
   - Explains Repetier Host's lack of support and recommends Printrun/Pronterface.

Use bold for usernames and dates, and maybe blockquotes for the content. Also, check for any links that need to be converted, but in the provided HTML, there are no actual links, just placeholders like %POST_ID%.

Make sure to preserve the structure and the information accurately. Avoid any markdown that's not necessary. Maybe use headers for the thread and posts, and italic for dates. Let me put it all together now.
</think>

# setting up Mini X5 , first time

**Danny D**  
28 Jul 2014 01:39  

I'm trying to set up my Mini X5 and noticed that some features aren't working as expected. Specifically, the feed rate and acceleration settings in Smoothie don't seem to be adjustable through the web interface. Is there a way to configure these parameters manually?

---

**wolfmanjm**  
31 Jul 2014 07:26  

As Repetier Host is closed source, it is not 100% supported in Smoothie and probably never will be. I suspect the two non-functioning features you mention are part of that.

I recommend Printrun/Pronterface, it works well and is open source so incompatibilities can be fixed.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-956456/setting-up-mini-x5-first-time)*
