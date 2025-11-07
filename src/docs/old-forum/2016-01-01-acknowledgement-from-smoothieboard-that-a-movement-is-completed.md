# Acknowledgement from Smoothieboard that a movement is completed?

*Original post date: 2016-01-01*

---

엡

Okay, let's see. The user provided a block of HTML code from a forum thread discussing how to get an acknowledgment from the Smoothieboard when a movement is completed. They also mentioned that the user wants this converted into Markdown. 

First, I need to parse the HTML content. The HTML includes several forum posts with usernames, timestamps, and code snippets. The main discussion revolves around sending G-code commands to the Smoothieboard and receiving "ok" responses, as well as using the progress command when playing files from an SD card.

I should start by identifying each post. The first post is from Kosatomi asking about hardware signals for movement completion. The second is from bouni explaining the methods to send G-code and mentioning the switch configuration. The third post is a follow-up from bouni with code examples and an edit about the progress command.

In Markdown, I'll need to structure each post with headers for the username and timestamp, then the content. Code snippets should be within triple backticks. Also, the edits and last edited information need to be noted. I should make sure to preserve the structure and key points from each post, ensuring clarity and proper formatting.

I need to check for any HTML entities that might need conversion, like &amp; for &, but in the provided HTML, it's already escaped. Also, the code blocks have <code> tags which should be converted to Markdown code blocks. The timestamps and usernames should be formatted consistently.

Another thing is the "Last edited" part in the third post. That should be included as a note below the content. Also, the links to the SmoothieWare switch page should remain as hyperlinks in Markdown.

I'll go through each post step by step, converting them into Markdown format, ensuring that all code examples are properly enclosed and that the flow of the conversation is maintained.
</think>

# Acknowledgement from Smoothieboard that a Movement is Completed?

---

## Post by **Kosatomi** (12 Jul 2015 06:34)

Hi everyone,

I'm trying to figure out how to get a hardware signal from the Smoothieboard when a movement is completed. I know that when sending G-code commands via USB, the board responds with "ok" after each command. But I'm looking for a way to trigger a hardware signal (like a pin going high) when a movement is completed. Is there a way to do this?

Also, if I'm streaming G-code over USB, does the board send an "ok" after each line, or only after the entire file is processed?

Thanks in advance!

---

## Post by **bouni** (12 Jul 2015 06:34)

Hi Kosatomi,

You have several methods to run G-code:
- Stream it over USB (serial)
- Use Telnet
- Play it from a file on the SD card

If you need a hardware signal, you can define a [switch](http://smoothieware.org/switch) that allows you to switch on and off a output pin after each completed command.

---

## Post by **bouni** (13 Jul 2015 06:34)

Hi Kosatomi,

Unfortunately, I had no time to test over the weekend, but I'll do that today (hopefully).


```bash
picocom v1.7

port is        : /dev/smoothie0
flowcontrol    : none
baudrate is    : 115200
parity is      : none
databits are   : 8
escape is      : C-a
local echo is  : yes
noinit is      : no
noreset is     : no
nolock is      : no
send_cmd is    : sz -vv
receive_cmd is : rz -vv
imap is        : lfcrlf,
omap is        :
emap is        : crcrlf,delbs,

Terminal ready
G0 Y2000 F10000
ok
G0 Y2110 F10000
ok

**Edit:**  
If you play a G-code file from the SD card, you can send the `progress` command to get the current progress:

```bash
Playing /sd/servo.nc
  File size 120
progress
file: /sd/servo.nc, 40 % complete, elapsed time: 35 s, est time: 72 s

---

**Last edited on 13 Jul 2015 07:34 by bouni**

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720072113/http://smoothieware.org/forum/t-1274749/acknowledgement-from-smoothieboard-that-a-movement-is-comple)*
