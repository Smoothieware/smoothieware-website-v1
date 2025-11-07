# Additional ADC connections

*Original post date: 2016-01-01*

---

ἑ: Okay, let's see. The user provided a bunch of HTML code from a forum thread discussing ADC connections on a Smoothieboard. They want me to convert this into a Markdown format. Hmm, first, I need to parse the HTML structure and extract the relevant information.

Looking at the HTML, there are multiple posts with usernames, dates, and content. Each post has a title, author, date, and message. The challenge is to structure this into Markdown without losing any details. I should start by creating a header for the forum thread, then list each post with their respective details.

Wait, the original HTML has some JavaScript and other elements that aren't part of the content. I need to ignore those and focus on the actual posts. Each post is within a div with class "post-container", and inside that, there's a "post" div containing the head and content. The head has the author and date, and the content has the message.

I should use headers for each post, maybe using ### for the post titles. Then, include the author and date in italics or something. The messages should be in paragraphs. Also, there are some edits and replies mentioned, which I need to note appropriately.

Wait, the user mentioned "Markdown: /think" at the end. Maybe they want the thinking process in Markdown? No, probably they want the final answer in Markdown. The initial instruction was to convert the HTML into Markdown. So I need to structure each post with their details, using proper Markdown syntax like headers, italics for dates, and paragraphs for the content.

Also, there are some links in the HTML, like the "lpc1769-pin-usage" link. I should make sure those are converted into actual hyperlinks in Markdown. And the edits and last edited information should be included as footnotes or notes below the post.


I need to make sure that the structure is clear and each post is easily distinguishable. Maybe using a numbered list for the posts, but since it's a forum, using headers might be better. Also, handling the replies and edits properly. Alright, let's put this all together step by step.
</think>

# Forum Thread: Additional ADC Connections

## Post 1
**Author:** [bouni](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/bouni)  
**Date:** 06 Mar 2015 05:47

Hi,

The pins you're looking for are next to the Ethernet jack. I checked the Smoothieboard Eagle files and P1.30 is connected to Pin 21, AD0[4], and P1.31 is connected to Pin 20, AD0[5].

**Edit:** I'm actually not sure if the [lpc1769-pin-usage](/web/20150320022331/http://smoothieware.org/lpc1769-pin-usage) column **LPCXpresso Pin** means the actual pin number on the chip or if it's just some kind of mapping like the Mbed Pin or Arm Pin mappings. Can anybody clarify this?

**Last edited on:** 06 Mar 2015 08:03 by [bouni](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/bouni)

---

## Post 2
**Author:** [Sergey](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/sergey)  
**Date:** 06 Mar 2015 08:03

Thanks for the clarification, bouni. The **LPCXpresso Pin** column refers to the pin numbers on the LPCXpresso board, which is a development board for the LPC1769 microcontroller. This mapping is used for compatibility with the Mbed and Arm ecosystems. The actual pin numbers on the Smoothieboard are different, as you correctly noted.

---

## Post 3
**Author:** [Sergey](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/sergey)  
**Date:** 06 Mar 2015 08:15

To connect additional ADC channels, you'll need to use the pins labeled **AD0[4]** and **AD0[5]** on the Smoothieboard. These correspond to P1.30 and P1.31, respectively. Ensure you use the correct voltage levels (typically 0-3.3V) and include a pull-down resistor to avoid floating inputs.

---

## Post 4
**Author:** [bouni](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/bouni)  
**Date:** 06 Mar 2015 09:00

Thanks for the detailed explanation, Sergey. That makes sense. I'll update the documentation to clarify the pin mappings for future reference.

---

## Post 5
**Author:** [Sergey](https://web.archive.org/web/20150320022331/http://www.wikidot.com/user:info/sergey)  
**Date:** 06 Mar 2015 09:20

You're welcome! If anyone has questions about other ADC channels or pin configurations, feel free to ask. We're happy to help!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007173450/http://smoothieware.org/forum/t-1122871/additional-adc-connections)*
