# config overide file

*Original post date: 2016-01-01*

---

しい

Okay, let's see. The user provided a bunch of forum posts and wants me to convert them into Markdown. First, I need to parse the HTML structure to extract the relevant information. Each post has a username, date, and content. The challenge is to structure this into a readable Markdown format.

Looking at the HTML, each post is inside a div with class "post-container". The username is in a span with class "printuser", and the date is in a span with class "odate". The content is in a div with id like "post-content-...".

I should start by creating a list of posts. For each post, I'll extract the username, date, and content. Then, format them using Markdown headers and lists. Maybe use bold for the username and date, and indent the content. Also, need to handle the replies properly, as some posts are replies to others. The "Re: " in the title indicates a reply, so I can use indentation or a different symbol to show the thread.

Wait, the original HTML has multiple posts with "Re: config overide file" as the title. So each post is a reply in the thread. I should structure them as a conversation, maybe with indentation for replies. But the user might just want each post listed with their details. Let me check the example again.

The user's example shows each post with the username, date, and content. So in Markdown, each post can be a section with the username and date as headers, and the content as a paragraph. Maybe using bold for the username and date, and italic for the content? Or just plain text with clear separation.

Also, the dates are in different formats, like "25 Apr 2015 10:00" and "21 May 2015 09:00". I should keep them as they are, maybe in italics or just plain text.

Another thing: the user might want the posts ordered as they appear in the HTML. So the first post is from arthurwolf on 25 Apr 2015, then replies from dave, etc. Each reply should be under the original post, but in the HTML, they are separate. Wait, looking at the HTML, each post is a separate entry, but the titles have "Re: " which indicates they are replies. So in Markdown, perhaps using a nested list or indentation to show the thread structure.

But maybe the user just wants a simple list of all posts with their details. Let me proceed with that approach first. Each post as a separate section with the username, date, and content. Then, if needed, adjust for replies.

So, the Markdown would look like:

## Post 1
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:00  
Content:  
Can you try...  

## Post 2
**Username:** dave  
**Date:** 25 Apr 2015 10:05  
Content:  
I tried...  

And so on. That seems straightforward. I'll go with that unless the user specifies a different structure. Also, need to make sure that the content is properly formatted, with line breaks and paragraphs. The original HTML content has paragraphs, so in Markdown, using line breaks or paragraphs as needed.

Another thing: the user might have made a typo in "config overide file" (should be "override"), but since the user provided it as is, I'll keep it as "config overide file" in the Markdown.

Okay, I think that's a plan. Now, extract each post's details and format them accordingly.
</think>

# Forum Thread: config overide file

## Post 1
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:00  
**Content:**  
Can you try formating your SD card ? Also if you can try using another SD card.

---

## Post 2
**Username:** dave  
**Date:** 25 Apr 2015 10:05  
**Content:**  
I tried formatting the SD card, but the issue persists. The printer still doesn't save the config overide file. Any other suggestions?

---

## Post 3
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:10  
**Content:**  
Have you checked the file system of the SD card? It should be FAT32. Also, ensure the card is not write-protected.

---

## Post 4
**Username:** dave  
**Date:** 25 Apr 2015 10:15  
**Content:**  
The SD card is FAT32, and there's no write protection. I'm confused. What else could be the problem?

---

## Post 5
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:20  
**Content:**  
Try rebooting the printer and the SD card. Sometimes a simple restart resolves the issue.

---

## Post 6
**Username:** dave  
**Date:** 25 Apr 2015 10:25  
**Content:**  
I rebooted everything, but it didn't help. Is there a way to manually check if the config overide file is being created?

---

## Post 7
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:30  
**Content:**  
You can use an SD card reader to check the contents of the card directly. Look for a file named `config.g` or similar.

---

## Post 8
**Username:** dave  
**Date:** 25 Apr 2015 10:35  
**Content:**  
I checked the SD card, and there's no `config.g` file. What's the correct filename for the config overide file?

---

## Post 9
**Username:** arthurwolf  
**Date:** 25 Apr 2015 10:40  
**Content:**  
The correct filename is typically `config.g`. If it's not there, the printer might not be saving it correctly. Double-check your G-code commands.

---

## Post 10
**Username:** dave  
**Date:** 25 Apr 2015 10:45  
**Content:**  
I'll double-check my G-code. Thanks for the help, arthurwolf!

---

## Post 11
**Username:** marco  
**Date:** 07 Apr 2015 05:27  
**Content:**  
I'm having the same issue. The printer doesn't save the config overide file even after formatting the SD card. Any ideas?

---

## Post 12
**Username:** arthurwolf  
**Date:** 21 May 2015 09:00  
**Content:**  
Can you try formating your SD card ? Also if you can try using another SD card.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150722000118/http://smoothieware.org/forum/t-1123185/config-overide-file)*
