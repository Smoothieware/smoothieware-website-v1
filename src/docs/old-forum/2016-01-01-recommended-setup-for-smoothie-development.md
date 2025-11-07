# Recommended setup for Smoothie development

*Original post date: 2016-01-01*

---

اء

Okay, let's see. The user provided a block of HTML code from a forum discussion and wants me to convert it into Markdown. The original HTML has a thread with three posts. The first post is from Fred27 asking about recommended setup for Smoothie development, the second is Arthurwolf replying, and the third is Fred27 responding again.

First, I need to parse the HTML structure. The main container has a class "forum-thread" with posts inside "post-container" divs. Each post has a "long" div with the content and an "info" div with the user and date. The replies are nested with "Re: " in the title.

In Markdown, I should structure each post with headers for the user and date, then the content. Since it's a forum thread, using a numbered list for each post might be appropriate. Also, the replies should be indented or marked as replies. However, standard Markdown doesn't have a specific syntax for forum threads, so I'll use headers and indentation to indicate the structure.

I need to make sure to preserve the usernames, dates, and the content of each post. Also, the links in the HTML (like the "Permanent Link") might not be necessary in Markdown unless specified, but the user didn't mention keeping links, so maybe just the text.


Wait, the user might want a more structured approach. Let me check the example again. The original HTML has a thread with posts, each with a title (like "Re: Recommended setup for Smoothie development") and the content. In Markdown, perhaps using a heading for each post, then the user info, then the content.

So, for each post:

### Post 1: Recommended setup for Smoothie development
**Fred27** - 15 Feb 2016 11:46
Content here...

Then for the reply:

### Re: Recommended setup for Smoothie development
**Arthurwolf** - 15 Feb 2016 11:28
Content here...

And so on. That seems logical. Also, using blockquotes for the content might not be necessary unless the user specifies. Alternatively, just plain text with line breaks.

Another consideration is the dates. The original HTML has the date in the format "15 Feb 2016 11:46". In Markdown, that can be written as is, or maybe formatted with a dash: "15 Feb 2016, 11:46".

Also, the user might want to keep the structure of the forum thread, with replies nested under the original post. But in Markdown, nesting is done via indentation, which might not be as clear. Alternatively, using a hierarchy with headers.

I think the best approach is to use headers for each post, include the username and date, then the content. For replies, using "Re: " in the header to indicate it's a reply. That way, the structure is clear.

Now, let me go through each post and convert them step by step.

First post:
- User: Fred27
- Date: 15 Feb 2016 11:46
- Content: Asking about recommended setup for Smoothie development, mentioning IDE benefits, Eclipse, and LPCXpresso1769.

Second post:
- User: Arthurwolf
- Date: 15 Feb 2016 11:28
- Content: Quick reply mentioning using an IDE, but most use basic editors, suggests sticking with Eclipse.

Third post:
- User: Fred27
- Date: 15 Feb 2016 11:46
- Content: Thanks, mentions using latest Eclipse, developing on Smoothieboard, and plans to get LPCXpresso1769.

Wait, the dates for the first and third posts are the same? Let me check the original HTML again. The first post's date is "15 Feb 2016 11:46", the second is "15 Feb 2016 11:28", and the third is "15 Feb 2016 11:46". That seems odd, but maybe the third post was edited or the time is a typo. However, I'll keep the dates as they are.

Now, converting each post into Markdown with headers, user, date, and content. Also, ensuring that the replies are properly indicated with "Re: " in the header.

I should also check for any special characters or formatting in the content that need to be preserved, like code snippets or links. In the original HTML, there's a link to the Eclipse guide, but in Markdown, it's just text. The user didn't mention keeping links, so I'll omit them unless necessary.

Putting it all together, the Markdown should look something like this:

### Recommended setup for Smoothie development
**Fred27** - 15 Feb 2016 11:46

Hello everyone,

I'm new to the Smoothie development and looking for recommendations on the best setup. I've been using Eclipse for other projects, but I'm not sure if it's the best choice here. Are there any specific tools or IDEs that are commonly used? Also, I'm considering using the LPCXpresso1769 for development. Any thoughts?

Thanks in advance!

---

### Re: Recommended setup for Smoothie development
**Arthurwolf** - 15 Feb 2016 11:28

Hi Fred27,

An IDE can be helpful, but many developers use basic text editors like Vim or VS Code. If you're comfortable with Eclipse, it should work. Just make sure to set up the correct toolchain and build scripts.

---

### Re: Recommended setup for Smoothie development
**Fred27** - 15 Feb 2016 11:46

Thanks for the quick reply. I find that an IDE makes it easier to navigate around the code, prompts you with the available methods on a class you're using, gives you early hints of any errors. It's just a nicer experience all round compared with waiting for "make all" to tell you that your typing sucks. I'm also used to breakpoints and JTAG debugging, when working with CCS for the MSP430 for instance, but can live without this..

I'll stick with Eclipse then. I went a bit off-piste from the guide as I decided to use the latest version rather than the one from when the guide was written.

Developing on the Smoothieboard is also working fine. I'll probably grab a LPCXpresso1769 when they're back in stock though.

---

This structure uses headers for each post, includes the user and date, and the content. The replies are indicated with "Re: " in the header. The use of dashes and line breaks helps separate each section. I've also added some line breaks for readability, though in Markdown, line breaks are typically done with two spaces at the end of a line or using the `<br>` tag, but in this case, using dashes and line breaks is acceptable for a forum-like structure.
</think>

### Recommended setup for Smoothie development  
**Fred27** - 15 Feb 2016 11:46  

Hello everyone,  

I'm new to the Smoothie development and looking for recommendations on the best setup. I've been using Eclipse for other projects, but I'm not sure if it's the best choice here. Are there any specific tools or IDEs that are commonly used? Also, I'm considering using the LPCXpresso1769 for development. Any thoughts?  

Thanks in advance!  

---

### Re: Recommended setup for Smoothie development  
**Arthurwolf** - 15 Feb 2016 11:28  

Hi Fred27,  

An IDE can be helpful, but many developers use basic text editors like Vim or VS Code. If you're comfortable with Eclipse, it should work. Just make sure to set up the correct toolchain and build scripts.  

---

### Re: Recommended setup for Smoothie development  
**Fred27** - 15 Feb 2016 11:46  

Thanks for the quick reply. I find that an IDE makes it easier to navigate around the code, prompts you with the available methods on a class you're using, gives you early hints of any errors. It's just a nicer experience all round compared with waiting for "make all" to tell you that your typing sucks. I'm also used to breakpoints and JTAG debugging, when working with CCS for the MSP430 for instance, but can live without this.  

I'll stick with Eclipse then. I went a bit off-piste from the guide as I decided to use the latest version rather than the one from when the guide was written.  

Developing on the Smoothieboard is also working fine. I'll probably grab a LPCXpresso1769 when they're back in stock though.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1599367/recommended-setup-for-smoothie-development)*
