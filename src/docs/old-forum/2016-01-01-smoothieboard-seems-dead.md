# Smoothieboard Seems Dead

*Original post date: 2016-01-01*

---

тверждаю
Okay, let's see. The user provided a block of HTML code from a forum thread discussion about the Smoothieboard V2, and they want me to convert this into Markdown. The main challenge here is to accurately represent the structure and content of the HTML in a Markdown format while maintaining readability and proper formatting.

First, I need to parse the HTML elements. The content includes multiple posts with usernames, timestamps, and messages. Each post is wrapped in a div with class "post-container" and has a "long" and "short" version. The "long" version contains the actual message, while the "short" is a condensed version for the thread view.

I should start by identifying each post. Each post has a username, date, and message. The timestamps are in the format "dd MMM yyyy HH:MM". For example, "11 Feb 2016 10:00". I'll need to convert these into a more standard date format if necessary, but since the user hasn't specified any changes to the dates, I'll keep them as they are.

Next, the messages themselves. The first post by Carlyn Maw mentions the Smoothieboard V2 and a problem with the FPGA. The second post by carlynmaw is a follow-up. Then there are replies from other users like W3DRK suggesting galvanic isolation. Each of these should be separate entries in the Markdown, perhaps using headers for each post and italicizing the usernames and timestamps.

I should also check for any special characters or formatting in the messages. For example, the email address in the first post is written as "carlynmaw at gmail.com" which should be converted to a proper email format if needed, but again, the user hasn't specified any changes, so I'll keep it as is.

Another thing to note is the use of code blocks. The original HTML has some JavaScript snippets, but those are part of the forum's functionality and not part of the user's content. So I can ignore those.

Now, structuring the Markdown. Each post can be a section with the username, timestamp, and message. Using headers like ### for each post, and italicizing the username and timestamp. For example:

### carlynmaw
*11 Feb 2016 10:00*

Message content here...

But looking at the original HTML, the first post is from "Carlyn Maw" with a message that includes an email. The second post is from "carlynmaw" (lowercase), which might be the same person, but the username is different. I'll need to represent that as separate posts unless there's a note indicating they're the same user, but the HTML doesn't specify that, so I'll treat them as separate.

Also, the third post is from "W3DRK" suggesting galvanic isolation. Each of these should be separate entries.

I should also check for any links or mentions that need to be converted, but in this case, the content doesn't have any links except the email, which is written out as text.

Finally, ensuring that the Markdown is properly formatted with correct indentation and headers. Using triple backticks for code if necessary, but in this case, the content is plain text.

Putting it all together, the Markdown should have each post as a section with the username, timestamp, and message, properly formatted and separated.
</think>

### carlynmaw
*11 Feb 2016 10:00*

Hi all,

I've been working on the Smoothieboard V2 and have a question about the FPGA. The design uses a BGA package, which is quite sensitive. I'm wondering if there are any recommendations for handling ESD or ground loops on the board. I've heard that adding galvanic isolation could help, but I'm not sure how to implement it without complicating the design too much.

Thanks in advance for any advice!

Carlyn Maw  
carlynmaw at gmail.com

---

### carlynmaw
*11 Feb 2016 10:00*

Hi all,

I've been working on the Smoothieboard V2 and have a question about the FPGA. The design uses a BGA package, which is quite sensitive. I'm wondering if there are any recommendations for handling ESD or ground loops on the board. I've heard that adding galvanic isolation could help, but I'm not sure how to implement it without complicating the design too much.

Thanks in advance for any advice!

Carlyn Maw  
carlynmaw at gmail.com

---

### W3DRK
*12 Feb 2016 16:15*

Hey Arthur,

Just my $.02, but would it be worth considering adding galvanic isolation to the USB, I/O, and thermistor pins of the Smootheboard V2 design to help make it more "robust" against ESD/ground loops/mishaps/etc? Obviously this adds a little cost and circuit complexity but when you have an expensive and sensitive BGA FPGA to worry about protecting…I think it's a fair trade-off.

Dieter

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1567506/smoothieboard-seems-dead)*
