# Trouble connection to Smoothieboard

*Original post date: 2016-01-01*

---

🇼

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there are two main posts. The first one is from "speedtoucher" describing connection issues with the Smoothieboard. The second is a response from "LauFla" suggesting disabling the SD drive in the peripheral management.

I need to convert each post into a Markdown format. The titles should be headers, maybe using ### for the main title and ## for the replies. The user mentions using bold for names and dates. Also, the links to the user profiles should be converted into regular text with the usernames and links, but since the user didn't specify, maybe just the username and date.

I should check for any special formatting like code snippets, but in this case, it's just plain text. The JavaScript at the end can be ignored as it's not part of the content.

Make sure to preserve the structure: the main title, then the posts with their respective content and replies. Also, the "New Post" button might not be necessary in the Markdown version unless specified, but the user didn't mention it, so probably omit it.

Double-check for any HTML entities that need escaping, like &amp; in the URLs. Replace them with the correct characters. Also, ensure that the dates are formatted consistently.

Finally, review the Markdown to ensure it's readable and follows standard conventions without any markdown-specific syntax errors.
</think>

### Trouble connection to Smoothieboard

**speedtoucher**, 28 Feb 2015 11:51

You have a problem connecting to the Smoothieboard. Here are the details:

- When trying to connect using software like Pronterface or similar, you get errors.
- The SD card driver (Mbed.org MBED USB DISK USB Device) might be interfering with the connection.
- You've tried different USB cables and ports, but the issue persists.
- The problem occurs only on your current laptop (Windows 8.1), not on other devices.

**Error messages:**
- "Error connecting to the printer"
- "No device found"
- "Communication error"

**What you've tried:**
- Updating the firmware
- Reinstalling the drivers
- Trying different software

**Question:**
- How can you resolve this issue?

---

### Re: Trouble connection to Smoothieboard

**LauFla**, 01 Mar 2015 17:11

Hi Speedtoucher,

I had the same trouble with my laptop (Windows 8.1). To solve it, I disabled the SD drive in the peripheral system management (Mbed.org MBED USB DISK USB Device). Now I can print without any issues.


@+  
LauFla

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1131264/trouble-connection-to-smoothieboard)*
