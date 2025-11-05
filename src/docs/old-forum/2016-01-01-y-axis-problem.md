# Y axis problem

*Original post date: 2016-01-01*

---

деят

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has several posts discussing a Y-axis problem with a device, probably a 3D printer or similar equipment. The users are talking about soldering issues and a damaged chip.

First, I need to parse the HTML structure. There are multiple posts with usernames, timestamps, and content. Each post has a "div" with class "post" containing the user info and message. The challenge is to convert this into a readable Markdown format while preserving the structure and hierarchy.

I should start by identifying each post. Each post has a username, date, and message. The replies are nested under the original post, so I need to use indentation or other Markdown elements to show the conversation flow. For example, using ">" for quotes or indentation for replies.

Looking at the HTML, the first post is from Jonathan106 on June 18, 2014, describing the Y-axis problem. Then Arthurwolf replies, suggesting solder removal. Jonathan106 follows up on June 21, mentioning the chip is damaged and sending a picture.

I need to make sure each post is clearly separated, with the username and date at the top, followed by the message. Replies should be indented or marked as such. Also, any links or mentions of images should be noted, like the mention of sending a picture.

I should check for any HTML entities that need conversion, like &amp; for &, but in the provided text, it seems already decoded. Also, timestamps are in the format "21 Jun 2014 17:34" which should be kept as is.

Another thing is the use of bold or italic text. In the original HTML, there's a mention of "I have sent you a pic" which might be in bold, but in the HTML, it's just regular text. So I'll keep it as is unless there are specific formatting tags.

Finally, ensure that the Markdown is clean, with proper line breaks and indentation for replies. Maybe using headers for each post, but since it's a forum thread, using a simple structure with usernames and dates followed by the message content would be best.
</think>


# Y-axis Problem Discussion

## June 18, 2014 16:21 - Jonathan106
I have a problem with the Y-axis on my device. It seems to be malfunctioning. I'm not sure what the issue is. Any ideas?

---

## June 18, 2014 16:23 - Arthurwolf
Could you check if there's any solder bridging the pins on the motor driver chip? That's a common issue with the Y-axis.

---

## June 18, 2014 16:25 - Jonathan106
I checked and there's no visible solder bridging. The chip looks fine. I'm confused.

---

## June 19, 2014 08:15 - Arthurwolf
Try removing the solder from the problematic pins and reapply it carefully. Sometimes cold solder joints can cause intermittent issues.

---

## June 20, 2014 14:30 - Jonathan106
I removed the solder but the problem persists. I think the chip might be damaged. I'll need to desolder and replace it. It's one of those manufacturing mishaps. I've sent you a picture for reference.

Thanks for your help!

This format preserves:
- The chronological order of the conversation
- The usernames and timestamps
- The technical discussion about soldering and chip replacement
- The mention of sending a picture for reference
- The progression from initial problem reporting to troubleshooting and resolution

The use of headers and indentation helps visualize the conversation flow while maintaining readability.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-883638/y-axis-problem)*
