# K40 Laser Cutter PSU question

*Original post date: 2016-01-01*

---

ވ

Okay, let's see. The user provided a bunch of forum posts and wants me to convert them into Markdown. Hmm, first I need to understand the structure of the original content. There are multiple posts, each with a title, author, date, and content. The original HTML has divs with classes like "post-container", "long", "short", etc. 

I need to figure out how to represent each post in Markdown. Maybe using headers for the titles, then italic for the author and date, and then the content as a paragraph. Also, there are replies, so maybe indentation or some other way to show the thread.

Wait, the first post is from koswix, then a reply from the same user, and then another reply from Conqy. So in Markdown, perhaps using nested lists or just separate sections with the author and date. Let me check the example response they provided. Oh, right, the user included an example response that uses headers, italics for author/date, and paragraphs for content. Also, replies are indented with a dash.

So I should follow that structure. Each post starts with a header (## for the title), then the author and date in italics, then the content. Replies are indented with a dash and maybe a smaller header. Also, the "Re:" in the title indicates a reply, so maybe using a subheader for that.

I need to make sure that the dates are formatted correctly, like "23 Jan 2016 23:54" as *23 Jan 2016 23:54*. Also, the user mentioned using triple backticks for code, but in this case, there's no code, just text. 

Wait, in the original HTML, there are some script tags and other elements, but the user probably wants just the text content converted. So I'll ignore the HTML tags and focus on the text within the posts.


I need to structure each post with the title as a header, author/date in italics, and content as paragraphs. Replies should be indented and maybe have a subheader. Also, the user's example used "##" for the main title and "###" for replies. Let me check that again.

Yes, in the example, the main post is "## K40 Laser Cutter PSU question" and the reply is "### Re: K40 Laser Cutter PSU question". So I'll follow that. Also, the author and date are in italics, like *Author: koswix, 23 Jan 2016 23:54*.

I need to make sure that the content is properly formatted, with paragraphs separated by line breaks. Also, any mentions of specific pins or voltages should be kept as is. 

Another thing to note is that the original HTML has some divs with "post-options" and other elements, but those are not part of the content and should be ignored. The focus is on the text within the "content" divs.

So, putting it all together, each post will have:

- Header for the title (## or ### depending on if it's a reply)
- Italicized author and date
- Paragraphs for the content
- Replies indented with ### and so on

I think that's the way to go. Now, I'll start converting each post step by step, making sure to follow the structure and formatting as per the example.
</think>

## K40 Laser Cutter PSU question

*Author: koswix, 23 Jan 2016 23:54*

I have a K40 laser cutter and I'm trying to figure out how to connect it to my Smoothieboard. The PSU has several pins, but I'm not sure which ones to use. The 5V pin seems to be connected to the laser's power supply, but I'm not sure if that's the right one. I've tried connecting it to the 12V pin, but that didn't work. Can anyone help me out?

---

### Re: K40 Laser Cutter PSU question

*Author: koswix, 23 Jan 2016 23:54*

I think I figured it out. The 5V pin is actually the correct one to use. I was connecting it to the 12V pin by mistake. Thanks for the help!

---

### Re: K40 Laser Cutter PSU question

*Author: Conqy, 22 Jul 2016 20:04*

Hey I know this is an old post but is there any chance you could post photos of your setup? I'm having the same problems with my Laser and I don't want to burn my smoothie through trial and error.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160806191431/http://smoothieware.org/forum/t-1565050/k40-laser-cutter-psu-question)*
