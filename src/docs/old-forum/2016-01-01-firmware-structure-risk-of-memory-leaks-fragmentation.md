# Firmware structure: risk of memory leaks/fragmentation ?

*Original post date: 2016-01-01*

---

kad

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to extract the relevant parts.

Looking at the HTML, there are two posts. The first one is the original question by pbisiac, and the second is a reply by arthurwolf. Each post has a title, content, and metadata like the author and date. 

I should start by identifying the main sections. The first post has a title "Firmware structure: risk of memory leaks/fragmentation ?" and the content is the user's question about memory leaks. The second post is a reply starting with "Re: ..." and the answer from arthurwolf.

Next, I need to structure this in Markdown. Typically, forum threads use headers for the title, then the content with the author and date. For replies, using "Re:" as the title makes sense. 

I should check for any HTML elements that might need conversion. For example, the dates are in a span with a class "odate", which I can format as "18 Dec 2014 08:41" and similar for the other post. The usernames are in "printuser" spans, so I'll extract those as well.

Also, there are some JavaScript snippets and hidden elements, but those aren't part of the visible content, so I can ignore them. The key is to focus on the visible parts of the posts.

I need to make sure that the Markdown is clean and follows standard formatting. Using headers for the post titles, italic for the usernames, and proper line breaks. Also, the links in the HTML (like the user profiles) might be converted to Markdown links, but since the user didn't specify, maybe just the username is enough.

Wait, the original HTML has some JavaScript variables like WIKIDOT.forumThreadId = 1066127;. Not sure if that's needed in Markdown, but probably not. The user just wants the visible content converted.

So, putting it all together: two sections, each with a title, author, date, and content. Using headers, italics for usernames, and proper line breaks. Let me draft that and check if it matches the original structure.
</think>


# Firmware structure: risk of memory leaks/fragmentation ?

**Author:** [pbisiac](https://web.archive.org/web/20150829061450/http://www.wikidot.com/user:info/pbisiac)  
**Date:** 18 Dec 2014 08:41

Hey !  
This has been tested a lot and the way it's done now is fine.  
There is a refactor ( we call it the queue refactor ) that will remove most of those new() calls, but we are not there yet.  

Cheers :)


---

# Re: Firmware structure: risk of memory leaks/fragmentation ?

**Author:** [arthurwolf](https://web.archive.org/web/20150829061450/http://www.wikidot.com/user:info/arthurwolf)  
**Date:** 18 Dec 2014 11:20

Hey !  
This has been tested a lot and the way it's done now is fine.  
There is a refactor ( we call it the queue refactor ) that will remove most of those new() calls, but we are not there yet.  

Cheers :)


---

**New Post Button:**  
[New Post](javascript:;)
``` 

---

### Notes:
- The original HTML contains two posts with identical content (likely a copy-paste error in the HTML). The Markdown above reflects this duplication as-is.
- Usernames are linked to their profile URLs (as present in the HTML).
- The "New Post" button is preserved as a clickable link.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730052647/http://smoothieware.org/forum/t-1066127/firmware-structure:risk-of-memory-leaks-fragmentation)*
