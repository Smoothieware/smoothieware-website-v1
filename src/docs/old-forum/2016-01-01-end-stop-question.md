# End Stop Question

*Original post date: 2016-01-01*

---

tạm dịch nội dung html thành markdown, giữ nguyên cấu trúc và nội dung, không thêm thông tin mới, không giải thích, không sửa lỗi, không thay đổi từ ngữ, chỉ chuyển đổi định dạng. 

Okay, let's tackle this HTML to Markdown conversion. First, I need to look at the structure of the HTML provided. It seems to be a forum thread with two posts. The user wants the Markdown version that preserves the original structure and content without any changes.

Starting with the main container, there's a div with class "forum-thread" which contains the posts. Each post has a "post-container" div, and within that, there's a "post" div with "long" and "short" sections. The "long" section includes the head with options, title, info, and content. The "short" section has the title and author info.

I need to convert these sections into Markdown. For the forum thread, I'll use headers and maybe some blockquotes or code blocks if necessary. The posts should be separated, perhaps using headers for each post. The user mentioned not to add any new information, so I have to stick strictly to the HTML content.

Looking at the first post, the title is "End Stop Question" by DannyBoy21212 on 17 Feb 2015 06:11. The content is the user's question about using 24V sensors with the Smoothieboard. The second post is a reply from d3delta3d suggesting using a relay.

In Markdown, I can use headers for the posts, maybe like ## Post 1: End Stop Question and ## Post 2: Re: End Stop Question. The content of each post can be in paragraphs. The dates and usernames should be included as part of the post metadata.

I also need to handle the buttons and links, but since the user said not to add any new information, I'll just convert the text parts. The JavaScript and script tags can be ignored as they're not part of the visible content.

Checking for any nested elements that might need special handling, like the "options" buttons. However, the user specified not to change the structure, so I'll just represent them as text if necessary, but in the original HTML, they are part of the UI elements which might not be needed in Markdown. The user might just want the visible text content converted.

So, the final Markdown should have the two posts with their titles, authors, dates, and content, preserving the original structure as much as possible without adding or removing any information.
</think>

# Forum Thread: End Stop Question

## Post 1: End Stop Question

**Author:** [DannyBoy21212](https://web.archive.org/web/20150501163502/http://www.wikidot.com/user:info/dannyboy21212)  
**Date:** 17 Feb 2015 06:11

Hello,

I have a question about using 24V inductive sensors with the Smoothieboard. The sensors I have are rated for 24V, but the Smoothieboard's end stop inputs are 5V. Is it safe to connect the 24V sensors directly to the Smoothieboard's end stop inputs? I'm concerned about damaging the board if the voltage is too high.

Thanks for any advice!

---

## Post 2: Re: End Stop Question

**Author:** [d3delta3d](https://web.archive.org/web/20150501163502/http://www.wikidot.com/user:info/d3delta3d)  
**Date:** 17 Feb 2015 06:52

Why not just use the inductive sensors to power the coil of a small 24Vdc relay and use the n/o contact of the relay to switch the Smoothieboard end stop limit. 3 extra parts I know but safer given the input go directly to the CPU what will be toast if it gets 24V.

---

**New Post Button:** [New Post](javascript:;)

---

**JavaScript:**
```javascript
WIKIDOT.forumThreadId = 1115573;


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730053722/http://smoothieware.org/forum/t-1115573/end-stop-question)*
