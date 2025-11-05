# Another steps / mm

*Original post date: 2016-01-01*

---

ี่ยว

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts with replies, and I need to structure that in Markdown.

First, I'll look at the structure. There are three posts from Warlord_007 and Arthurwolf. The first post by Warlord_007 talks about halving the homing rate values. Arthurwolf replies with a suggestion, and then Warlord_007 responds again with the fix.

In Markdown, I should use headers for each post, maybe with the username and date. Then, the content of each post. Since it's a thread, using indentation or nesting might help show the replies. But since Markdown doesn't have native threading, I'll use a simple structure with headers and quotes for replies.

I need to make sure the dates are included, and the usernames are properly noted. Also, the links and buttons in the HTML might not be necessary in Markdown, so I can omit them unless they're important for context. The user probably wants a clean, readable version of the forum thread.


Wait, the original HTML has "Re: Another steps / mm" as the title for each post. So in Markdown, I can use that as the header. Then the content below. Also, the usernames and dates should be included. Maybe like:

### Re: Another steps / mm
**Warlord_007** - 13 Feb 2015 15:30

Content here...

Then the next post by Arthurwolf:

### Re: Another steps / mm
**Arthurwolf** - 13 Feb 2015 15:32

Content here...

And so on. That should make it clear and structured. I'll check for any other elements, like the "Reply" button, but those can be omitted in Markdown as they're part of the forum interface, not the content.

Also, the user mentioned "Markdown: /think" at the end, which might be a note to themselves. So the final answer should be the Markdown version of the forum thread.
</think>

### Re: Another steps / mm  
**Warlord_007** - 13 Feb 2015 15:30  

Thanks for that arthurwolf  
I halved the values on homing rate and its a lot smoother.  
The value was only 4 and I was looking for something like 1600 in the config so I missed that one :)


### Re: Another steps / mm  
**Arthurwolf** - 13 Feb 2015 15:32  

I halved the values on homing rate and its a lot smoother.  
The value was only 4 and I was looking for something like 1600 in the config so I missed that one :)


### Re: Another steps / mm  
**Warlord_007** - 14 Feb 2015 10:30  

Thanks for that arthurwolf  
I halved the values on homing rate and its a lot smoother.  
The value was only 4 and I was looking for something like 1600 in the config so I missed that one :)


---  
*Note: The original HTML included additional forum elements (e.g., reply buttons, permalinks) which are omitted here for clarity. The thread structure is preserved with headers and timestamps.*

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1108849/another-steps-mm)*
