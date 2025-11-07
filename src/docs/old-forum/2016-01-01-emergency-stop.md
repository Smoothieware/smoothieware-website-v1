# Emergency Stop

*Original post date: 2016-01-01*

---

-scrollbar

Okay, let's see. The user provided a block of HTML code from a forum discussion about emergency stop configurations, and they want me to convert it into Markdown. The main goal is to structure the conversation in a readable format, preserving the usernames, timestamps, and content.

First, I need to parse the HTML to extract the posts. Each post is within a div with class "post-container" and has a unique ID like "fpc-2340093". Inside each, there's a "long" div containing the user's message and a "short" div with the username and timestamp. The first post is from johndoe, then replies from other users.

I should start by identifying each post's author, date, and content. The first post is from johndoe on July 15, 2015, asking about emergency stop setup. The next reply is from innkeeper on July 16, suggesting placing the E-stop in the power circuit. Then bouni on July 17 refers to a wiki page. Each post has a "Reply" button, which in Markdown can be represented as a link.

I need to structure each post with headers for the user and date, followed by the content. Using Markdown syntax like headers, blockquotes, and links. Also, the "New Post" button at the end should be included as a call-to-action.

I should check for any nested elements or additional information, but it seems straightforward. Make sure to use consistent formatting for each post, maybe using bold for usernames and italic for dates. Also, ensure that the links to the wiki page are correctly formatted.

Wait, the original HTML has some JavaScript and other elements, but the user probably wants just the conversation part. So I'll ignore the script tags and focus on the posts. Also, the timestamps are in Unix time, which I need to convert to a readable date. For example, 1437149053 is July 17, 2015, 16:04:13.

Putting it all together, each post will be a section with the user's name, date, and their message. Using Markdown headers, maybe like:

### johndoe (July 15, 2015)
> I'm trying to set up an emergency stop for my 3D printer. Does anyone have any recommendations on the best way to configure it?

Then for each reply:

### innkeeper (July 16, 2015)
> Take a look at this wiki page: [emergencystop](http://smoothieware.org/emergencystop)

And so on. Also, include the "New Post" button as a link at the end. Make sure to use proper Markdown syntax for links and italics. Check for any special characters that need escaping, but in this case, it seems okay.

I think that's all. Now, structure each post accordingly and ensure the flow is logical.
</think>

### johndoe (July 15, 2015)
> I'm trying to set up an emergency stop for my 3D printer. Does anyone have any recommendations on the best way to configure it?

---

### innkeeper (July 16, 2015)
> Take a look at this wiki page: [emergencystop](http://smoothieware.org/emergencystop)

---

### bouni (July 17, 2015)
> Take a look at this wiki page: [emergencystop](http://smoothieware.org/emergencystop)

---

### New Post
[Create a new post](#)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1281266/emergency-stop)*
