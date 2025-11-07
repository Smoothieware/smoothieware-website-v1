# smoothie board pause for long time

*Original post date: 2016-01-01*

---

핞
Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts discussing issues with the Smoothie board's Ethernet connection and a firmware fix. 

First, I need to parse the HTML structure. Each post has a username, date, and content. The challenge is to represent this in Markdown while maintaining the thread structure. 

Looking at the HTML, there are several <div class="post"> elements. Each post starts with a username and date, followed by the content. The replies are nested under the original post, indicated by "Re: " in the title. 

I should start by creating a header for the forum thread, then list each post with the user's name, date, and their message. For replies, I'll indent them under the original post to show the conversation flow. 

I need to make sure that the Markdown syntax is correct. Using headers for the thread title, bold for usernames, and proper indentation for replies. Also, the dates should be formatted consistently. 

Wait, the original HTML has some JavaScript and other elements that aren't relevant to the Markdown conversion. I can ignore those. Focus on the text content within the posts. 

Another thing to note is that the user mentioned "Logxen" provided a firmware.bin file. That's an important detail to include in the corresponding post. 

I should check for any special characters or formatting in the text that need to be escaped in Markdown, but from the sample, it seems straightforward. 


Testing with the first post: User "jlmccuan" on 2015-07-03 discusses Ethernet issues. Then "bouni" replies on 2015-07-06 suggesting the serial connection. Then "jlmccuan" again on 2015-07-09 thanking Logxen. 

Yes, that seems to cover all the posts. Now, translating that into Markdown with proper formatting.
</think>

# Smoothie Board Pause for Long Time

## Original Post
**jlmccuan** - 2015-07-03  
I've been having issues with my Smoothie board's Ethernet connection. It works for a while, but then it just stops responding. I've tried different configurations, but nothing seems to fix it. Any ideas?

## Reply
**bouni** - 2015-07-06  
Have you tried using the serial connection instead? Sometimes the Ethernet can be unstable. Also, make sure your firmware is up to date.

## Reply
**jlmccuan** - 2015-07-09  
Logxen was kind enough to send me a firmware.bin which has the `msd_disable` function enabled. Enabled in my config as well and sweet connection bliss.  
Thanks again, Logxen!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1225586/smoothie-board-pause-for-long-time)*
