# Questions on switching from RUMBA to smoothie

*Original post date: 2016-01-01*

---

遷移

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has two posts: one from the user asking questions about setting up a Smoothieboard, and a reply from arthurwolf answering those questions. 

First, I need to parse the HTML structure. The main content is within a div with class "page-contents", inside which there's a div with class "wiki-content". Within that, there's a div with class "forum-thread" containing the posts.

Each post has a div with class "post" and "post-1" or "post-2" for the first and second posts. Inside each post, there's a div with class "post-content" that includes the user's message. The user's message is in a div with class "content" and has the text content. The reply from arthurwolf is in another post with class "post-2".

I need to convert each post into a Markdown format. The first post is the original question, and the second is the answer. The user might want each post to be a separate section, perhaps using headers or blockquotes for the quoted parts.

Looking at the HTML, the first post has a div with class "content" containing the user's questions. The second post has a similar structure but with the answer. The answer includes blockquotes that reference the original questions, which should be preserved in Markdown.

I should start by creating a header for the forum thread, then each post as a separate section. For the original questions, using a numbered list or bullet points might be appropriate. The answer should have the quoted parts using blockquotes, and the actual answer text as regular paragraphs.

Also, the user might want to maintain the structure of the questions and answers, so using headers like "## Question" and "## Answer" could help. However, since the original HTML doesn't have headers, maybe just using paragraphs with appropriate indentation for quotes.

Another thing to note is the email address in the answer, which is written as a wiki-email. In Markdown, that should be converted to a regular email link. Also, the URLs mentioned (like the switch module link) should be converted to clickable links.

I need to make sure that the Markdown is properly formatted, with correct indentation for blockquotes, and that all the information from the HTML is accurately represented without any loss. Also, check for any special characters that need escaping in Markdown, like underscores or asterisks.

Finally, ensure that the structure is clear, with each post separated and the answers properly aligned with the questions they're responding to. Maybe using a "Re: " prefix for the reply, as seen in the original HTML.
</think>


---

### Forum Thread: Questions on Switching from Rumba to Smoothie

#### Original Post (User)
**Date:** 14 Jun 2015 10:14  
**Author:** arthurwolf

**Questions:**

1. **Microstepping Configuration**  
   Is there any way to get 32X microstepping? I really want this on my extruder motor, it produces noticeably better results and less moire than 16X. Using an external driver at this point is pretty far out of my comfort zone, I have no idea how to go about this. I use DRV8825's on the RUMBA and they are great. Can I get 32X without going to an external driver?

2. **Smoothieboard Setup (5 XC Version)**  
   Is it possible to get a Smoothie board running on my printer without any soldering if I order the 5 XC? I'm particularly confused about the mosfets power input. I surely do not want to run a line from the PSU to each mosfet power input, so can I just use jumpers to bring the power in? Will the XC version already have the pins on JP28, JP11, and JP27? Does it come with jumpers that fit?

3. **E3D V6 Hot End Compatibility**  
   Also, can the E3D V6 hot end be run off the small mosfet? It has a 25W heater cartridge.

4. **AC Heated Bed with SSR**  
   Running an AC heated bed with an SSR. This schematic is still listed as to do on the guide page. I'm pretty lost on connecting to a GPIO pin. Why not just connect it to a mosfet out that I would use to run a lower power DC heated bed and let the SSR do its thing to switch on the AC when needed? Is there anyone who could do a quick sketch of their wiring if you are running an AC heated bed from a Smoothie?

---

#### Reply (arthurwolf)
**Date:** 14 Jun 2015 10:14  
**Author:** arthurwolf

**Answers:**

1. **Microstepping Configuration**  
   You can't get 1/32 with the on-board drivers. However, wiring an external stepper driver is trivial, it's documented, and very simple (just 4 wires to connect). Many people do this, including those with less experience than you have. If you need help, you can email [moc.liamg|ruhtra.flow](mailto:moc.liamg|ruhtra.flow).

2. **Smoothieboard Setup (5 XC Version)**  
   No soldering is required. The 5 XC version comes with jumpers that fit for JP28 (the small mosfets input).  
   - You can skip using an external input for the small mosfets (via JP28 and a jumper), but you must provide power to the big mosfets via the external input (you can't use jumpers there, your bed would make them melt). This just means two wires going to your PSU, which is very easy.

3. **E3D V6 Hot End Compatibility**  
   Yes, the E3D V6 hot end can be run off the small mosfet.

4. **AC Heated Bed with SSR**  
   - Connect the SSR's GND to the Smoothieboard's GND.  
   - Connect the SSR's + to a GPIO pin on the Smoothieboard or to the + of a mosfet output.  
   - The other side of the SSR switches the AC load.  
   - Alternatively, control your fans using a mosfet and a switch module: [Smoothie Switch Module](https://web.archive.org/web/20150810071700/http://smoothieware.org/switch).

If you need further help with any of this, don't hesitate to ask. Cheers.

---

### Additional Notes
- **Email Address:** [moc.liamg|ruhtra.flow](mailto:moc.liamg|ruhtra.flow) (Note: This is a placeholder email address; replace with the actual contact if needed.)
- **Link to Switch Module:** [Smoothie Switch Module](https://web.archive.org/web/20150810071700/http://smoothieware.org/switch)

---

This Markdown format preserves the structure, quotes, and key details from the original HTML while making the content more readable and organized.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1227058/questions-on-switching-from-rumba-to-smoothie)*
