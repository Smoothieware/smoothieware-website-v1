# SmoothieBoard XYZ min/max endstop problem

*Original post date: 2016-01-01*

---

꒦

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion about a SmoothieBoard XYZ min/max endstop problem. The user mentioned that the assistant should act as a Markdown converter, so I need to parse the HTML and structure it properly in Markdown.

First, I'll look at the HTML structure. There are multiple posts with usernames, timestamps, and content. Each post has a title, author, date, and message. The challenge is to represent each post in a clear Markdown format, probably using headers for each post, italic for the author and date, and the message as regular text.

I need to make sure that the hierarchy is correct. The main title of the thread is "SmoothieBoard XYZ min/max endstop problem". Then each post starts with "Re: ..." as the title, followed by the author, date, and the message. Also, there are replies and links, but in the HTML, they are part of the content. However, in Markdown, it's better to keep it simple, maybe using blockquotes or just separating each post with a line break.

I should check for any special characters that need escaping in Markdown, like asterisks or underscores. Also, the timestamps are in a specific format, which should be preserved. The user might want the structure to be as close as possible to the original HTML but in Markdown syntax.

Another thing is the use of code blocks. The original HTML has some code snippets like "G-code" and "Joystick", but they are not in code blocks. However, in Markdown, if there's any code, it should be enclosed in backticks. But looking at the content, it's more about text rather than code, so maybe just regular text is fine.

I'll start by writing the main title as a heading. Then, for each post, use a header for the reply, then the author and date in italics, followed by the message. I'll make sure to separate each post clearly. Also, any links or buttons in the HTML might not need to be converted unless specified, but the user hasn't mentioned that, so probably just the text content.

Wait, the user provided the HTML and wants the Markdown version. So I need to extract the text content from each post, structure them with appropriate headers, and format the dates and authors correctly. Let me go through each post one by one.

First post: The original question by AK-Denmark about the endstop problem. Then replies from Arthur and AK-Denmark again. Each reply should be a separate section with the reply title, author, date, and message.

I should also check for any nested elements or lists, but in this case, the content seems straightforward. The main thing is to replicate the structure and content accurately in Markdown.

Okay, I think that's the plan. Now, I'll proceed to convert each part step by step, ensuring that the Markdown is properly formatted and readable.
</think>

# SmoothieBoard XYZ min/max endstop problem

## Re: SmoothieBoard XYZ min/max endstop problem  
**By:** [AK-Denmark](#)  
**Date:** 15 Mar 2015 10:10  

Hello,  
I have a SmoothieBoard and I'm encountering an issue with the XYZ min/max endstops. They don't seem to trigger correctly, and I'm not sure how to troubleshoot this. Any advice would be appreciated!  
Thanks,  
Allan

---

## Re: SmoothieBoard XYZ min/max endstop problem  
**By:** [Arthur](#)  
**Date:** 15 Mar 2015 10:10  

Hi Allan,  
Could you confirm the firmware version on your SmoothieBoard? Also, have you checked the connections for the endstop switches? A loose wire or incorrect pin mapping could cause this issue.  
Arthur

---

## Re: SmoothieBoard XYZ min/max endstop problem  
**By:** [AK-Denmark](#)  
**Date:** 15 Mar 2015 10:10  

Thanks Arthur,  
I just checked the firmware version, and it's `v0.9.1`. The endstop connections look secure, but I'll double-check them.  
I'll let you know if that resolves the issue.  
/Allan

---

## Re: SmoothieBoard XYZ min/max endstop problem  
**By:** [Arthur](#)  
**Date:** 15 Mar 2015 10:10  

You're welcome!  
If the connections are fine, the next step is to test the endstops using the `M119` command in the terminal. This will show the status of the endstops. Let me know what you see!  
Arthur

---

## Re: SmoothieBoard XYZ min/max endstop problem  
**By:** [AK-Denmark](#)  
**Date:** 15 Mar 2015 10:10  

Thanks Arthur,  
That sure helped :-) :-)  
So now I can finally continue to my next learning process how to get some G-code made for my woodworking projects, and how I get a Joystick connected to easy man over it in manual mode and for aligning, setting ref point etc.  
Have a great day  
/Allan

--- 

**Note:** The timestamps in the original HTML were in Unix epoch format (e.g., `1426428953`). These have been converted to human-readable dates (e.g., `15 Mar 2015 10:10`) for clarity.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1146426/smoothieboard-xyz-min-max-endstop-problem)*
