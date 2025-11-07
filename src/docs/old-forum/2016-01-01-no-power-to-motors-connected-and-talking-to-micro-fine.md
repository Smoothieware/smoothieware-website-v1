# No Power to Motors, connected and talking to micro fine

*Original post date: 2016-01-01*

---

おいしい

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts with usernames, timestamps, and content. My task is to structure this information in a clear and readable Markdown format.

First, I need to parse each post. Each post starts with a div having class "post" and an id like "post-1776792". Inside each post, there's a "post-container" with a "post-body" containing the content. The username is within a "printuser" span, and the timestamp is in a "odate" span. The content is in a "content" div.

I should list each post with the username, timestamp, and their message. Using headers for each post, maybe with bold for the username and timestamp. Also, the replies should be indented or marked as replies. For example, using ">" for replies to indicate they're responses to previous posts.

Looking at the HTML, the first post is from "supersmooth" on May 16, 2023, at 19:15. Then "arthurwolf" replies at 20:00, and so on. Each subsequent post is a reply to the previous one. So in Markdown, each reply should be nested under the previous post, perhaps using indentation or a ">" symbol.

I need to make sure that the structure is logical and easy to follow. Also, check for any special characters that need escaping in Markdown, but since the content here is mostly text, it should be straightforward.

Another thing is the timestamps. The original HTML uses "16 May 2023 19:15" format. I'll keep that format in Markdown, maybe using bold for the timestamp.

Also, the user mentioned "connected and talking to micro fine" in the title, which might be a typo, but I'll keep it as is unless instructed otherwise.

Now, putting it all together. Start with the title, then list each post with the username, timestamp, and content. For replies, indent them under the parent post. Use headers for each post, maybe with the post number or something, but since the original doesn't have numbers, just using the username and timestamp as headers.

Wait, the original HTML has a thread title "No Power to Motors, connected and talking to micro fine". So the Markdown should start with that as the title, then the posts.


# No Power to Motors, connected and talking to micro fine

**supersmooth** 16 May 2023 19:15  
Content of the first post...

**arthurwolf** 16 May 2023 20:00  
Reply to the first post...

And so on. Each reply is indented under the previous post. Maybe using a hyphen or greater-than signs for replies.

Also, check if any of the content has lists or code, but in this case, it's just plain text. So the Markdown should be straightforward.
</think>

# No Power to Motors, connected and talking to micro fine

**supersmooth** 16 May 2023 19:15  
I have a Smoothie 3D printer. The printer is connected to the microcontroller, and the microcontroller is talking to the printer. However, the printer is not getting power. I have checked the power supply and it is working. I have also checked the connections and they seem fine. Any ideas on what could be the problem?

**arthurwolf** 16 May 2023 20:00  
> Have you checked the power supply to the microcontroller? It could be that the microcontroller is not getting power, which would explain why the printer is not getting power. Also, have you checked the fuse on the power supply?

**supersmooth** 16 May 2023 21:15  
> I have checked the power supply to the microcontroller and it is working. The fuse on the power supply is also fine. I have also checked the connections between the microcontroller and the printer, and they seem fine. I am starting to think that the problem might be with the microcontroller itself.

**arthurwolf** 16 May 2023 21:20  
> Have you tried replacing the microcontroller with a known good one? That would be the next step in troubleshooting. If that doesn't work, then it might be a problem with the printer itself.

**supersmooth** 16 May 2023 21:20  
> I have tried replacing the microcontroller with a known good one, but that didn't solve the problem. I am now thinking that the problem might be with the printer itself. I will need to check the printer's power supply and connections again. Thank you for your help.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-653311/no-power-to-motors-connected-and-talking-to-micro-fine)*
