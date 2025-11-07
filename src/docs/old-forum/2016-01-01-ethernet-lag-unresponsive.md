# ethernet lag/unresponsive

*Original post date: 2016-01-01*

---

lö

Okay, let's see. The user provided a block of HTML code from a forum thread discussing issues with Ethernet connectivity on a 3D printer, specifically mentioning the Smoothieboard. They want me to convert this into a Markdown format. 

First, I need to parse the HTML structure. The main content is within a div with class "forum-thread", containing several posts. Each post has a username, timestamp, and message. There are also some JavaScript snippets and hidden elements, but those might not be necessary for the Markdown version.

I should start by identifying each post. Each post is inside a "post-container" div. The username is in a "printuser" span, the timestamp is in a "odate" span, and the message is in a "content" div. 

I need to structure each post in Markdown with headers for the username and timestamp, followed by the message. Also, any replies or buttons like "Reply" should be noted. 

Looking at the first post by Brian Zhou, he mentions issues with Ethernet, SD, and USB. The second reply from arthurwolf asks about the G-code source and network setup. Brian's third post details his setup and mentions a Cisco switch. 

I should make sure to preserve the conversation flow, using proper indentation and headers. Also, any technical terms like "Smoothieboard" or specific software (Cura, Simplify3D) should be kept as is. 

I need to check for any HTML entities that might need escaping in Markdown, but since it's just text, probably not. Also, the timestamps are in a specific format, which should be retained. 

Finally, the "New Post" button at the end should be included as a note, maybe in italics or a separate section. 

I'll start by writing the title, then each post with the user's name, date, and message, using proper Markdown syntax like headers and blockquotes if needed. Ensuring that the structure is clear and the conversation is easy to follow.
</think>

# Ethernet Lag/Unresponsive - Forum Thread

## Post by Brian Zhou (17 Mar 2016 08:00)
> When printing over Ethernet, the printer gets stuck every 10-20 seconds, especially on curves with many coordinate points. It works fine via SD or USB. The printer is a delta with high-speed mechanics (600mm/s, 150 steps/mm), which requires significant CPU power. I suspect the Smoothieboard might lack sufficient processing power for Ethernet streaming.

## Reply by arthurwolf (17 Mar 2016 10:11)
> **Questions:**
> 1. Are you using G-code from Cura or Simplify3D?
> 2. Is your network setup (router, switches, etc.) properly configured?
> 3. Have you tested with the LCD and web server disabled?

## Reply by Brian Zhou (17 Mar 2016 12:08)
> - **G-code Sources:** Both Cura and Simplify3D.
> - **Network Setup:** Printer and workstation connected to a TP-Link router via LAN, with other devices on LAN/WiFi. Ordered a Cisco switch for testing.
> - **CPU Power:** Disabling LCD and web server improved performance but didn't resolve the issue. The Smoothieboard struggles with the computational demands of the delta printer's high-speed mechanics.

## Additional Notes
- **Printer Performance:** The printer's mechanics require advanced calculations, pushing the Smoothieboard's limits.
- **Next Steps:** Testing with a Cisco switch and further CPU load analysis.

---

**New Post Button:**  
[Create a new post](#) (Available at the bottom of the thread)
``` 

---

**Key Technical Details:**
- **Printer Type:** Delta 3D printer
- **Speed:** Up to 600mm/s
- **Steps per mm:** Over 150
- **Board:** Smoothieboard (suspected CPU limitations)
- **Network:** TP-Link router (currently), planned Cisco switch test
- **G-code Software:** Cura, Simplify3D

**Conversation Flow:**
1. Brian reports Ethernet lag issues.
2. arthurwolf asks about G-code sources and network setup.
3. Brian provides details on hardware, software, and plans for network testing.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1646317/ethernet-lag-unresponsive)*
