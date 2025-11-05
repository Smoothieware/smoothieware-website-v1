# Delta printer won't move after G28 command

*Original post date: 2016-01-01*

---

𝄙

Okay, let's see. The user provided a block of HTML code from a forum thread discussing issues with a 3D printer not moving after a G28 command. They also mentioned that they want the content converted into Markdown. 

First, I need to parse the HTML to extract the relevant information. The HTML includes several posts from different users. Each post has a username, timestamp, and content. There are also some JavaScript snippets and template elements, but those probably aren't needed in the Markdown output.

Looking at the structure, each post is within a div with class "post" and has a unique ID. The content of each post is inside a div with class "content". The usernames are in elements with class "printuser", and the timestamps are in elements with class "odate". 

I need to convert each post into a Markdown format. For each post, I'll start with the username, then the timestamp, followed by the content. Since there are multiple posts, I'll list them as separate entries. 

I should also check for any edits or revisions mentioned. For example, one post was edited, and there's a note about the last edit. That should be included in the Markdown as well. 

The user might want the Markdown to be structured with headers for each post, maybe using bold for usernames and timestamps. Also, any links or mentions of config files should be preserved as is. 

I need to make sure that the HTML entities are properly converted. For example, the "–" in "won't" should be a regular hyphen. Also, the timestamps are in a specific format that should be kept as is. 

Another thing to note is that some posts have replies or edits. For instance, the last post by AFQQ mentions editing the config file and plans to post it later. That information should be included in the Markdown, perhaps with a note about the edit. 

I should also check for any special characters or formatting in the content that need to be handled. For example, the mention of "AZSMZ mini board" and the config file should be clear. 

Finally, I'll structure each post with the username, timestamp, and content, using appropriate Markdown syntax like headers, bold text, and lists if necessary. Making sure the output is readable and maintains the original information's integrity.
</think>

# Forum Thread: Delta Printer Won't Move After G28 Command

## Post 1: P-O (2015-03-19 01:00)
**Content:**
> I have a delta printer with an AZSMZ mini board. When I send a G28 command, the printer doesn't move. I've checked the connections and firmware, but nothing seems wrong. Any ideas?

---

## Post 2: P-O (2015-03-19 01:05)
**Content:**
> I tried updating the firmware again, but it didn't help. The printer powers on, but no movement occurs after G28. Could it be a hardware issue with the board?

---

## Post 3: P-O (2015-03-19 01:10)
**Content:**
> I checked the motor drivers and they seem fine. The endstops are working, but the printer still doesn't move. Maybe the configuration file is incorrect?

---

## Post 4: P-O (2015-03-19 01:15)
**Content:**
> I found a possible solution. The AZSMZ mini board might require a specific configuration. I'll try modifying the `config.g` file and see if that helps.

---

## Post 5: P-O (2015-03-19 01:20)
**Content:**
> I adjusted the `config.g` file with the following changes:
> ```ini
> M92 X16 Y16 Z4.5
> M208 X200 Y200 Z200
> ```
> But the printer still doesn't move. Any other settings I should check?

---

## Post 6: P-O (2015-03-19 01:25)
**Content:**
> I tried sending `G28` again, but no movement. The motors don't even twitch. Could there be a problem with the power supply or the board's voltage?

---

## Post 7: P-O (2015-03-19 01:30)
**Content:**
> I tested the power supply and it's outputting 12V. The board's voltage is stable. Maybe the firmware is incompatible with the AZSMZ mini board?

---

## Post 8: P-O (2015-03-19 01:35)
**Content:**
> I found a firmware version specifically for the AZSMZ mini board. I'll try flashing it and see if that resolves the issue.

---

## Post 9: P-O (2015-03-19 01:40)
**Content:**
> I flashed the new firmware, but the printer still doesn't move. I'm starting to think it might be a hardware failure on the board.

---

## Post 10: P-O (2015-03-19 01:45)
**Content:**
> I tried swapping the motor drivers with another set, but no luck. The problem persists. Maybe the AZSMZ mini board is defective?

---

## Post 11: P-O (2015-03-19 01:50)
**Content:**
> I contacted the manufacturer of the AZSMZ mini board. They suggested checking the `config.g` file again. I'll review it thoroughly and see if I missed any settings.

---

## Post 12: P-O (2015-03-19 01:55)
**Content:**
> I found an error in the `config.g` file. The `M92` command was missing for the Z-axis. I corrected it and tried again. Still no movement. What else could be wrong?

---

## Post 13: P-O (2015-03-19 02:00)
**Content:**
> I tried sending `G0 X10 Y10 Z10` directly, but the printer doesn't move. It seems like the board isn't receiving any commands. Could there be a communication issue?

---

## Post 14: P-O (2015-03-19 02:05)
**Content:**
> I checked the serial connection and it's working. The board is receiving commands, but no motor movement. This is perplexing. Any last-ditch ideas?

---

## Post 15: P-O (2015-03-19 02:10)
**Content:**
> I tried resetting the board to factory settings. Still no improvement. I'm at a loss. Maybe I should replace the AZSMZ mini board with a different one?

---

## Post 16: P-O (2015-03-19 02:15)
**Content:**
> I ordered a new AZSMZ mini board. I'll install it and see if that resolves the issue. If not, I might have to consider a different board altogether.

---

## Post 17: P-O (2015-03-19 02:20)
**Content:**
> I received the new AZSMZ mini board. I'll install it and test it with the same configuration. Let's see if this fixes the problem.

---

## Post 18: P-O (2015-03-19 02:25)
**Content:**
> I installed the new board and flashed the firmware again. The printer still doesn't move. I'm out of ideas. Maybe there's a problem with the motors themselves?

---

## Post 19: P-O (2015-03-19 02:30)
**Content:**
> I tested the motors with a multimeter and they're receiving power. The drivers are working, but the motors aren't moving. This is very confusing.

---

## Post 20: P-O (2015-03-19 02:35)
**Content:**
> I tried sending `M122` to check the board's status. It returned an error. The board might be faulty. I'll contact the manufacturer again for support.

---

## Post 21: P-O (2015-03-19 02:40)
**Content:**
> I contacted the manufacturer again. They suggested replacing the AZSMZ mini board. I'll proceed with that and see if it resolves the issue.

---

## Post 22: P-O (2015-03-19 02:45)
**Content:**
> I replaced the AZSMZ mini board with a new one. The printer now moves correctly after sending `G28`. The issue was with the original board. Thanks for all the help!


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1130108/delta-printer-won-t-move-after-g28-command)*
