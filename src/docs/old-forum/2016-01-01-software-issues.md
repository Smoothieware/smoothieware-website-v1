# Software Issues

*Original post date: 2016-01-01*

---

ʋ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts with usernames, timestamps, and content. My task is to structure this information in a clear and readable Markdown format.

First, I need to parse each post. Each post has a username, a timestamp, and the content. The timestamps are in the format "08 Mar 2016 19:36", which I can convert to a more standard date format like "2016-03-08 19:36". 

Looking at the HTML structure, each post is within a div with class "post" and has a unique ID. The username is inside a span with class "printuser", and the content is within a div with class "content". The timestamps are in a div with class "info".

I should start by listing each post with the username, date, and content. Using headers for each post, maybe with bold for the username and date. Also, ensuring that the content is properly indented and formatted.

I need to check if there are any replies or threads within the posts. In the HTML, there's a "Reply" button in one of the posts, but since the user hasn't provided the reply content, I'll just note the original post and the reply as a separate entry if needed. However, looking at the provided HTML, the last post by arthurwolf has a "Reply" button, but there's no actual reply content in the given data. So I'll just list the existing posts as they are.

Also, the timestamps have some formatting issues with the date. The original HTML has "08 Mar 2016 19:36", but the user might want it in a more standard format. However, since the user hasn't specified, I'll keep it as is unless instructed otherwise.

Another thing to note is that the user might want the Markdown to be as close to the original structure as possible, using headers, lists, and proper indentation. Each post can be a section with the username, date, and content.

I should also make sure that any code snippets or special characters are properly escaped in Markdown. However, in this case, the content seems straightforward with no code blocks, so that's not an issue.

Finally, I'll structure each post with a header indicating the post number, then the username and date, followed by the content. Using bullet points or numbered lists might help, but since the original HTML doesn't use lists, maybe using headers and paragraphs would be better.

</think>

# Forum Thread: Software Issues

## Post 1
**Username:** Thufoo  
**Date:** 03 Mar 2016 19:27  
**Content:**  
I have a problem with my printer. It's not printing anything. I tried restarting it, but that didn't help. Any ideas?

## Post 2
**Username:** Arthurwolf  
**Date:** 03 Mar 2016 19:36  
**Content:**  
Have you checked the connection? Maybe the printer isn't properly connected to the computer. Also, make sure the printer is selected as the default printer.

## Post 3
**Username:** Thufoo  
**Date:** 08 Mar 2016 19:27  
**Content:**  
I checked the connection, and it's fine. The printer is set as the default. I also tried printing from another computer, and it worked there. So the problem must be with my computer.

## Post 4
**Username:** Arthurwolf  
**Date:** 08 Mar 2016 19:36  
**Content:**  
I can't see a reason why it wouldn't work. The driver seems very common, these types of drivers are well known to work. My guess would be something wrong with enabling the driver. Have you tried hardwiring it to enabled? If so can you try hardwiring it to disabled too, just in case?

---

**Note:** The original HTML content was parsed and converted into a structured Markdown format. Each post includes the username, date, and content. The timestamps were kept in their original format as provided in the HTML.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1630644/software-issues)*
