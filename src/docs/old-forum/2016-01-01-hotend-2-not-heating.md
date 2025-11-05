# Hotend 2 not heating

*Original post date: 2016-01-01*

---

쪗

Okay, let's see. The user provided a bunch of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse the HTML structure to understand the content. There are multiple posts here, each with a username, date, and message. 

Looking at the first post, it's from "arub" on February 16, 2015, at 19:55. The message is about a hotend not heating, and they mention trying different MOSFETs. Then there's a follow-up from the same user on February 16, 20:32, where they mention switching to another MOSFET and the heater working manually. 

I need to structure each post with headers for the username and date, then the content. Since it's Markdown, using headers like ### for the username and date, and then the message as a paragraph. Also, the replies should be indented or marked as such. 

Wait, the original HTML has some JavaScript and other elements, but the user probably wants just the text content converted. So I'll ignore the script tags and focus on the visible parts. Each post has a "title" with "Re: Hotend 2 not heating" and the content in the "content" div. 

I should check for any special formatting in the text, like code snippets. The user mentioned using M884 commands, which are G-code, so those should be in backticks. Also, the MOSFET pins like P2.4 and P2.6 should be noted as such. 


Wait, the user might want the dates in a specific format. The original dates are in "16 Feb 2015 19:55", so I'll keep that as is. 

I should also check if there are any links or mentions of other posts, but in this case, it seems like just the thread. Alright, putting it all together now.
</think>

### notrub - 16 Feb 2015 19:55
A follow-up to my own post.  
I switched to the final remaining MOSFET, on pin P2.4, and now with the manual `M884` command the heater is responding correctly! Pronterface still won't show it correctly or let me set it, but at least the manual commands work so I can set in the G code to make it work for now.  
Also, the P2.6 MOSFET LED is stuck always on, so I am guessing its just a bad MOSFET that was my issue there?

---

### notrub - 16 Feb 2015 20:32
A follow-up to my own post.  
I switched to the final remaining MOSFET, on pin P2.4, and now with the manual `M884` command the heater is responding correctly! Pronterface still won't show it correctly or let me set it, but at least the manual commands work so I can set in the G code to make it work for now.  
Also, the P2.6 MOSFET LED is stuck always on, so I am guessing its just a bad MOSFET that was my issue there?

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813112617/http://smoothieware.org/forum/t-1109015/hotend-2-not-heating)*
