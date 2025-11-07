# Connecting the Viki 2 LCD

*Original post date: 2016-01-01*

---

𝔦𝔫𝔰𝔱𝔞𝔫𝔱𝔦𝔞𝔱𝔦𝔬𝔫

Okay, let's see. The user provided a bunch of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse through the HTML and figure out the structure. The main content is a forum discussion with multiple posts. Each post has a username, timestamp, and message. 

Starting with the first post by "Orion" from April 18, 2016. The message is about connecting the Viki 2 LCD to a Smoothieboard. Then there are replies from "helipad14399" and "Orion" again. The HTML has divs with classes like "post" and "post-content", so I need to map those to Markdown sections.

I should use headers for each post, maybe bold the usernames and timestamps. The replies should be indented or use a different header level to show the thread. Also, the links to the pages mentioned (like "Smoothieboard Wiring") should be converted into actual hyperlinks. 

Wait, the user mentioned "Markdown" but didn't specify if they want the entire thread converted or just the content. Since the original HTML is a forum thread, the Markdown should mirror that structure. Each post as a section, with the username and date, then the message. 

I need to make sure that any HTML entities are properly converted, like &amp; to &, and that the links are correctly formatted. Also, the JavaScript and other script tags can be ignored since they're not part of the content. 


Wait, the user might want the exact structure, so maybe using headers for each post, like ## Post 1, ## Post 2, etc. But since it's a thread, perhaps using a different approach. Maybe using a numbered list for each post, with the username and date as part of the list item. 

Also, the original HTML has some JavaScript that sets the forum thread ID, but that's not needed in Markdown. The key is to extract the text content and structure it properly. 

I should check for any nested elements, like the "content" divs inside each post. Each post's message is within a div with class "post-content", so that's the main text to convert. 

Alright, putting it all together. Start with the first post, then each reply, using appropriate Markdown syntax for headers, bold text, italics, and links. Make sure the flow is logical and easy to read.
</think>

Here's the forum thread converted into Markdown format:

---

## Forum Thread: Connecting the Viki 2 LCD

### Post by **Orion** (April 18, 2016)
I'm trying to connect the Viki 2 LCD to my Smoothieboard. Does anyone have any experience with this? I'm not sure which pins to use for the LCD connections. Any help would be appreciated!

---

### Reply by **helipad14399** (April 18, 2016)
I used the following resources to figure out the pinout:

- [Smoothieboard Wiring](https://example.com/smoothieboard-wiring) (for visual reference)
- [lpc1769 Pin Usage](https://example.com/lpc1769-pin-usage) (for detailed pin assignments)

I followed the default pin assignments in the config file to keep things simple. Let me know if you need further details!

---

### Reply by **Orion** (April 19, 2016)
Thanks for the help! I'm using the 4-motor version of the Smoothieboard. Does the pinout differ from the 5-motor version?

---

### Reply by **helipad14399** (April 19, 2016)
You're welcome! The pinout should be similar, but I recommend double-checking the [Smoothieboard Wiring](https://example.com/smoothieboard-wiring) guide to confirm. If you're using the 4-motor version, some pins might be unused or repurposed. Let me know if you need help with the config file!

---

### Reply by **Orion** (April 19, 2016)
I'll check the guide. Thanks again for the help!

---

**Note:** Replace the placeholder URLs (`https://example.com/...`) with the actual links from the original forum if available.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813174006/http://smoothieware.org/forum/t-1682577/connecting-the-viki-2-lcd)*
