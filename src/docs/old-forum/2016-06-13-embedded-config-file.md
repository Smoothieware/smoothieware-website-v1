# Embedded config file?

*Original post date: 2016-01-01*

---

# Embedded config file?

**Posted by:** [BadDevices](https://web.archive.org/web/20160629031836/http://www.wikidot.com/user:info/baddevices) on 13 Jun 2016 08:37

I'm wondering if it's possible to embed the configuration file directly into the firmware. This would help prevent accidental deletion or modification of the config file by users, which is a common issue when using 3D printers. Are there any existing methods or tools that allow this?

---

**Re: Embedded config file?**

**Posted by:** [arthurwolf](https://web.archive.org/web/20160629031836/http://www.wikidot.com/user:info/arthurwolf) on 13 Jun 2016 08:40

Hey,

You can compile the config file inside the firmware.bin file. Here's how:

1. Modify the default configuration file:  
   [https://github.com/Smoothieware/Smoothieware/blob/edge/src/config.default](https://github.com/Smoothieware/Smoothieware/blob/edge/src/config.default)

2. Compile the firmware using the official guide:  
   [http://smoothieware.org/compiling-smoothie](http://smoothieware.org/compiling-smoothie)

Curious: What machine is this for?

Cheers.

---

**New Post**  
[Click here to post a new message](#)  
*(Note: The "New Post" button functionality is not directly replicable in Markdown, but this text link serves as a placeholder for the action.)*

---

### Notes:
- **Links** are converted to Markdown-compatible URLs.
- **Usernames** are linked to their profile pages (as per the original HTML).
- **Dates** are preserved in the original format.
- **JavaScript and inline styles** are omitted, as they are not relevant to Markdown content.
- The **thread structure** is preserved with headers and clear separation between posts.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160928174206/http://smoothieware.org/forum/t-1740149/embedded-config-file)*
