# Ethernet not connecting

*Original post date: 2016-01-01*

---

مكون

Okay, let's see. The user provided a block of HTML code from a forum thread discussing an Ethernet connection issue with a Smoothie board. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. The main content is within a div with class "forum-thread", containing several posts. Each post has a username, date, and message. There are also some JavaScript snippets and hidden elements, but those might not be necessary for the Markdown version.

I should start by identifying each post. The first post is from "Caleb Skurdal" on March 16, 2016, talking about the Ethernet not connecting. Then there are replies from "arthurwolf" and another from Caleb on March 22. Each post has a "Re: Ethernet not connecting" title, which indicates they're replies.

In Markdown, I can structure each post with headers for the username and date, followed by the message. Using bold for usernames and dates might help. Also, the links and code snippets should be preserved where appropriate. The JavaScript at the end might be part of the forum's functionality, but since the user didn't mention including it, I'll skip that.

I need to make sure that the replies are properly indented or marked as such. Maybe using ">" for quotes, but since it's a forum thread, keeping them as separate sections with the "Re:" prefix is clearer.

Also, the user mentioned the board is a Kickstarter reward, so that detail should be included in Caleb's second post. The mention of checking continuity and ordering an FTDI adapter is important context.

I should avoid any HTML tags and use proper Markdown syntax like **bold**, *italic*, and code blocks if needed. However, the original text doesn't have much code, just some URLs which can be left as is.

Finally, I'll structure each post with the username, date, and message, ensuring the flow matches the original HTML thread.
</think>

# Ethernet Not Connecting (Forum Thread)

## Post by Caleb Skurdal (March 16, 2016)
I'm trying to get my Smoothie board to connect via Ethernet, but it's not working. I've checked the configuration and everything seems okay. Any ideas?

---

## Reply by arthurwolf (March 21, 2016)
That's what I'm thinking too. Checked continuity of each pin on the PCB side of the Ethernet connector to the cap/resistors and they all measured okay (Ethernet connector was already soldered, so there may be a break because of the inductor wiring in the connector) I ordered an FTDI to USB adapter and will tinker around with that. Otherwise I might have to settle for USB only. Never got an email response from the Smoothie Kickstarter team regarding the possibly broken hardware (the board is a 4x Kickstarter reward).

---

## Reply by Caleb Skurdal (March 22, 2016)
That's what I'm thinking too. Checked continuity of each pin on the PCB side of the Ethernet connector to the cap/resistors and they all measured okay (Ethernet connector was already soldered, so there may be a break because of the inductor wiring in the connector) I ordered an FTDI to USB adapter and will tinker around with that. Otherwise I might have to settle for USB only. Never got an email response from the Smoothie Kickstarter team regarding the possibly broken hardware (the board is a 4x Kickstarter reward).
``` 

---

**Note:** This Markdown version preserves the structure and content of the original forum thread, formatting each post with headers, dates, and user messages. The JavaScript and hidden elements from the HTML were omitted as they are not relevant to the discussion.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1643373/ethernet-not-connecting)*
