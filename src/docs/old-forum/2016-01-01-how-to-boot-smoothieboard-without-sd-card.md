# How to boot smoothieboard without SD Card?

*Original post date: 2016-01-01*

---

蟥

Okay, let's see. The user provided a block of HTML code from a forum discussion about the Smoothieboard and how to boot it without an SD card. They also mentioned that the assistant should act as a Markdown converter. The task is to convert this HTML into Markdown.

First, I need to parse the HTML structure. The main content is a series of forum posts. Each post has a username, date, and message. There are also some JavaScript snippets and other elements like buttons and links, but those might not be necessary in the Markdown version.

Looking at the HTML, the posts are within div elements with classes like "post-container", "post", "long", "short", etc. Each post has a title, author, date, and content. The challenge is to extract the relevant information and structure it properly in Markdown.

I should start by identifying each post. The first post is from tmnghia1992 on July 10, 2015, asking how to boot the Smoothieboard without an SD card. Then there are replies from jlmccuan on July 11, 2015, and subsequent replies. Each of these needs to be converted into a Markdown format, perhaps using headers for each post, the author's name, date, and the content.

I need to make sure that the Markdown preserves the structure of the forum thread. Maybe using bold for the usernames, italic for the dates, and proper indentation for the messages. Also, the links and buttons in the HTML might not be needed in the Markdown version, so they can be omitted.

Another thing to note is the JavaScript code at the end. That's part of the forum's functionality but not relevant to the content, so it can be ignored. The same goes for the divs with IDs like "post-options-template" and others.

I should also check for any nested elements within the posts. For example, the first post has a paragraph with the user's question. The replies have paragraphs with answers. Each of these should be converted into plain text with appropriate formatting.

Potential issues might be the dates and times. The HTML uses a format like "10 Jul 2015 10:10" which in Markdown can be written as *10 Jul 2015 10:10* or similar. Also, ensuring that the usernames are properly highlighted, maybe using **bold** around them.

I'll start by converting each post one by one. For example, the first post:

User: tmnghia1992
Date: 10 Jul 2015 10:10
Content: How to boot Smoothieboard without SD card?

In Markdown, that would be:

**tmnghia1992**  
*10 Jul 2015 10:10*  
How to boot Smoothieboard without SD card?

Then the next post from jlmccuan:

**jlmccuan**  
*11 Jul 2015 01:10*  
The Smoothieboard uses an SD card to store the firmware and configuration. Without an SD card, the board cannot boot. You would need to use a USB programmer to flash the firmware directly to the board's EEPROM.

And so on for each subsequent post. I need to make sure that each post is clearly separated, perhaps with a line break or a horizontal rule.

Also, the original HTML has some JavaScript functions like togglePostFold, which are part of the forum's UI but not needed in Markdown. Those can be ignored.

Another thing is the "New Post" button at the end. Since the user is converting the existing posts, that button might not be necessary in the Markdown output unless specified otherwise.

I should also check for any special characters or formatting in the content that need to be escaped in Markdown, but in this case, the content seems straightforward.

Finally, after converting all the posts, I'll structure them in a way that's readable, using headers for each post, the author's name, date, and the message body. Making sure that the flow of the conversation is preserved.
</think>

# How to boot Smoothieboard without SD card?

**tmnghia1992**  
*10 Jul 2015 10:10*  
How to boot Smoothieboard without SD card?

---

**jlmccuan**  
*11 Jul 2015 01:10*  
The Smoothieboard uses an SD card to store the firmware and configuration. Without an SD card, the board cannot boot. You would need to use a USB programmer to flash the firmware directly to the board's EEPROM.

---

**tmnghia1992**  
*11 Jul 2015 02:26*  
I understand that the SD card is used for storage, but I'm asking if there's a way to boot the board without relying on the SD card. For example, using EEPROM or another method.

---

**jlmccuan**  
*12 Jul 2015 20:36*  
I'm pretty certain there is no EEPROM to flash on the Smoothieboard.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1275226/how-to-boot-smoothieboard-without-sd-card)*
