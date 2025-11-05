# compile? not even close

*Original post date: 2016-01-01*

---

자는

Okay, let's see. The user provided some HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has several posts discussing a Makefile and issues with compiling code, probably related to an embedded system since there's mention of LPC21ISP and a hex file.

First, I need to parse the HTML structure. Each post has a title, content, and timestamps. The user might want each post to be a separate section in Markdown with headers, maybe using ### for the titles. The code blocks in the HTML should be converted to Markdown code blocks with proper syntax highlighting. Also, the timestamps and user names need to be included appropriately.

Looking at the first post by "dandumit", they mention their Makefile. The HTML has a <div class="code"> with a <pre><code> block. In Markdown, that should be ```make followed by the code and then ```.

Then there's a response from "sirus20x6" suggesting using "cs" as the prefix, which might be a typo or specific to their setup. The third post by "dandumit" includes their Makefile again and mentions a file path. I need to ensure that the code is properly formatted and that any file paths are preserved.

Also, there are timestamps and edits noted. In Markdown, maybe adding a note like "Last edited on [date]" beneath each post. The user might want the structure to be clear, with each post separated and formatted consistently.

I should check for any HTML entities that need escaping in Markdown, but since the content is mostly plain text and code, it should be straightforward. Making sure that the code blocks are correctly indented and that the syntax highlighting is indicated (like using ```make for Makefiles).

Finally, the "New Post" button and other scripts at the end of the HTML are probably not needed in the Markdown output, so I'll omit those. The goal is to present the forum thread in a readable Markdown format, preserving the structure, code, and metadata like timestamps and edits.
</think>


---

### Re: compile? not even close

**Posted by:** [dandumit](https://web.archive.org/web/20150501035842/http://www.wikidot.com/user:info/dandumit)  
**Date:** 18 Jan 2012 09:27

This is my makefile:

```make
PROJECT=main
GCC4MBED_DIR=./gcc4mbed
INCDIRS=
LIBS_PREFIX=
LIBS_SUFFIX=
SRC=./src

include ./gcc4mbed/build/gcc4mbed.mk

flash:
    lpc21isp $(PROJECT).hex /dev/ttyUSB0 115200 14746

Also please have a look on: `./gcc4mbed/build/gcc4mbed.mk`

---

**Last edited on:** 18 Jan 2012 09:29 by [dandumit](https://web.archive.org/web/20150501035842/http://www.wikidot.com/user:info/dandumit)

---

### Re: compile? not even close

**Posted by:** [sirus20x6](https://web.archive.org/web/20150501035842/http://www.wikidot.com/user:info/sirus20x6)  
**Date:** 18 Jan 2012 06:04

You need to use `cs` as the prefix, not `gcc4mbed`. Try this:

```make
cs-$(PROJECT).elf

---

### Re: compile? not even close

**Posted by:** [dandumit](https://web.archive.org/web/20150501035842/http://www.wikidot.com/user:info/dandumit)  
**Date:** 18 Jan 2012 09:27

This is my makefile:

```make
PROJECT=main
GCC4MBED_DIR=./gcc4mbed
INCDIRS=
LIBS_PREFIX=
LIBS_SUFFIX=
SRC=./src

include ./gcc4mbed/build/gcc4mbed.mk

flash:
    lpc21isp $(PROJECT).hex /dev/ttyUSB0 115200 14746

Also please have a look on: `./gcc4mbed/build/gcc4mbed.mk`

---

**Last edited on:** 18 Jan 2012 09:29 by [dandumit](https://web.archive.org/web/20150501035842/http://www.wikidot.com/user:info/dandumit)

---

### New Post

[New Post](#)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828165251/http://smoothieware.org/forum/t-434306/compile-not-even-close)*
