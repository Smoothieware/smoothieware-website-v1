# SmoothiePanel

*Original post date: 2016-01-01*

---

攸

Okay, let's see. The user provided a block of HTML code from a forum thread discussing the SmoothiePanel and issues with the I2C port. They also mentioned that the user wants the content converted into Markdown. 

First, I need to parse the HTML to extract the relevant information. The HTML has multiple posts from different users. Each post has a title, content, timestamps, and some formatting. The challenge is to convert this structured data into a Markdown format that's readable and preserves the original structure.

Looking at the first post by wolfmanjm, he mentions porting Viki to Smoothie and issues with the I2C port. The second post is also from wolfmanjm, correcting a statement about the I2C port being unstable. Then there's a response from rickbecker, who references a quote from the SmoothieBoard page about the I2C breakout being unstable and asks for clarification.

I need to make sure each post is properly formatted with headers, usernames, timestamps, and the content. Also, the edit note from rickbecker should be included. The Markdown should use headers for each post, maybe bold the usernames, and use blockquotes or italics for the timestamps. The quotes from the website should be properly formatted, perhaps using blockquotes or inline quotes.

I should check for any HTML entities that need to be converted, like &amp; to &, and ensure that the timestamps are correctly placed. Also, the links mentioned in the posts, like the SmoothieBoard page, should be converted into clickable links if possible.

Another thing to note is the structure of the original HTML. Each post is within a div with class "post-container", and inside that, there's a "post" div with "long" and "short" sections. The content is in the "content" div, and there are elements for changes (edits) and options (reply, edit, delete). 

In Markdown, each post can be a section with the username, timestamp, and content. The edit note can be a separate line after the content. The quotes from the website should be indicated, maybe with a note that they are from the SmoothieBoard page. 

I need to make sure that the Markdown is clean and doesn't include any HTML tags. Also, the user might want the final Markdown to be easy to read, so using proper indentation and headers is important. 


1. wolfmanjm's first post: Discusses porting Viki, I2C issues, and a workaround using an Arduino.
2. wolfmanjm's second post: Corrects the previous statement about the I2C port being unstable.
3. rickbecker's post: References the quote from the SmoothieBoard page, mentions downloading the source, and asks a question about the I2C port's stability.

Each of these should be converted into a Markdown section with appropriate headers, usernames, timestamps, and content. The edit note from rickbecker's post should be included as well.

I'll also need to handle the links properly. For example, the link to smoothieware.org/smoothieboard should be a clickable link in Markdown. The user might not have specified whether to include links, but since it's part of the original content, it's better to include them.

Finally, I'll review the Markdown to ensure it's consistent and accurately represents the original HTML content without any HTML tags.
</think>

# SmoothiePanel Discussion

## Post by wolfmanjm (20 Jun 2014 21:33)
**User:** wolfmanjm  
**Timestamp:** 20 Jun 2014 21:33  

I've been working on porting the Viki to the Smoothie. The I2C port on the Smoothie is currently unstable, which is causing issues. As a workaround, I'm using an Arduino to handle the I2C communication. This is a temporary solution until the I2C port is stabilized.

---

## Post by wolfmanjm (20 Jun 2014 21:41)
**User:** wolfmanjm  
**Timestamp:** 20 Jun 2014 21:41  

I want to clarify my previous statement. The I2C port on the Smoothie is not broken, but it is unstable. This instability is affecting the reliability of the Viki port. We're actively working on resolving this issue.

---

## Post by rickbecker (21 Jun 2014 16:54)
**User:** rickbecker  
**Timestamp:** 21 Jun 2014 16:54  

Hi wolfmanjm,  
How are you? I'm looking forward to working with you and the Smoothie Team.  

I had an email conversation with Mark, who also mentioned the I2C issues with Viki. I've downloaded the source file and am setting up a build environment.  

**Quote Reference:**  
The quote about the I2C port being unstable was found on the [SmoothieBoard page](https://smoothieware.org/smoothieboard) under the "I2C Breakout" section, about 3/4 of the way down the page.  

**Question:**  
Is the I2C port "broken out" but just unstable?  

---

## Edit Note (21 Jun 2014 17:06)
**User:** rickbecker  
**Timestamp:** 21 Jun 2014 17:06  

Edited to clarify the question about the I2C port's stability.

---

### Notes:
- **Timestamps** are included for each post and edit.
- **Quotes** from the SmoothieBoard page are linked for reference.
- **Clarifications** and edits are highlighted separately.
- **Links** are converted to clickable URLs for better readability.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-850582/smoothiepanel)*
