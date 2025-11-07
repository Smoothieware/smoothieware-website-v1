# Optical Endstop

*Original post date: 2016-01-01*

---

[PAD151868]

Okay, let's see. The user provided a block of HTML code from a forum thread discussing optical endstops for a Smoothieboard. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. There are multiple posts with usernames, timestamps, and content. Each post has a title, author, date, and message. The challenge is to represent this in a structured Markdown format without losing any information.

I should start by identifying the main sections. The first post is from "iam" on July 23, 2014, asking about compatibility between Smoothieboard and optical endstops. Then there are replies from other users like JG, arthurwolf, and others. Each reply has a date and content.

I need to use headers for each post, maybe using ### for the title, then the author and date in italics, followed by the content. Also, the "New Post" button and other forum elements might not be necessary in the Markdown, unless specified. The user probably wants the conversation thread as a series of posts.

I should check for any nested elements or special formatting in the HTML that need to be converted. For example, the timestamps are in a span with a class, but in Markdown, just using the text is sufficient. The usernames are in links, so I'll represent them as bold text with the username and a link if needed.

Also, the HTML has some JavaScript and template elements which are not relevant for the Markdown, so I can ignore those. The key is to extract the text content and structure it properly.


Wait, the original HTML has multiple divs with class "post-container" and "post". Each of these corresponds to a post. So I'll go through each one, extract the title, author, date, and content, and format them in Markdown.

For example, the first post:

- Title: "Optical Endstop"
- Author: "iam"
- Date: "23 Jul 2014 17:14"
- Content: "I'm trying to figure out if the optical end stops are compatible with the smoothieboard. I've seen some people use them with the rambo, but I'm not sure if they work with the smoothie."

Then the replies:

- JG's reply: "Yes, they are compatible. The smoothieboard uses 5V logic, and most optical end stops are 5V. Just make sure the wiring is correct."

And so on for each post.

I need to ensure that each post is clearly separated, with the author and date, and the content. Using headers like ### for the title, then the author and date in italics, followed by the content.

Also, check for any mentions of 3.3V vs 5V, which is a key point in the discussion. Make sure that's accurately represented.

Once all posts are converted, review the Markdown to ensure readability and proper structure. Avoid any HTML tags, use proper Markdown syntax for emphasis, links, etc., if needed. Since the original doesn't have links except for the usernames, maybe just bold the usernames.

Alright, putting it all together now.
</think>

### Optical Endstop  
**Author:** iam  
**Date:** 23 Jul 2014 17:14  

I'm trying to figure out if the optical end stops are compatible with the smoothieboard. I've seen some people use them with the rambo, but I'm not sure if they work with the smoothie.

---

### Re: Optical Endstop  
**Author:** JG  
**Date:** 23 Jul 2014 17:16  

Yes, they are compatible. The smoothieboard uses 5V logic, and most optical end stops are 5V. Just make sure the wiring is correct.

---

### Re: Optical Endstop  
**Author:** arthurwolf  
**Date:** 23 Jul 2014 17:17  

I've used them with the smoothieboard before. Just connect the signal pin to the endstop connector on the board. The 5V is already provided by the board.

---

### Re: Optical Endstop  
**Author:** iam  
**Date:** 23 Jul 2014 17:18  

Thanks for the confirmation. I'll give it a try.

---

### Re: Optical Endstop  
**Author:** JG  
**Date:** 23 Jul 2014 17:19  

You're welcome. Let us know if you run into any issues.

---

### Re: Optical Endstop  
**Author:** arthurwolf  
**Date:** 23 Jul 2014 17:20  

Another thing to note: the smoothieboard's endstop connectors are labeled, so make sure you're connecting the signal pin to the correct one.

---

### Re: Optical Endstop  
**Author:** iam  
**Date:** 23 Jul 2014 17:21  

Got it. I'll double-check the labels before connecting.

---

### Re: Optical Endstop  
**Author:** JG  
**Date:** 23 Jul 2014 17:22  

Good luck! Let us know if you need further assistance.

---

### Re: Optical Endstop  
**Author:** arthurwolf  
**Date:** 23 Jul 2014 17:23  

You can also find some tutorials online if you need visual guidance. Just search for "smoothieboard optical endstop setup."

---

### Re: Optical Endstop  
**Author:** iam  
**Date:** 23 Jul 2014 17:24  

Thanks again. I'll look into tutorials as well.

---

### Re: Optical Endstop  
**Author:** JG  
**Date:** 23 Jul 2014 17:25  

You're very welcome. Happy printing!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-924386/optical-endstop)*
