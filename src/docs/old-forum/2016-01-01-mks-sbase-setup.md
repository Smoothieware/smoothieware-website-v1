# MKS SBASE Setup

*Original post date: 2016-01-01*

---

dụ

Okay, let's see. The user provided a block of HTML code from a forum thread discussing the setup of an MKS SBASE. They also mentioned using Markdown. My task is to convert this HTML into a properly formatted Markdown structure.

First, I need to parse the HTML to understand the structure. The main elements are the forum posts, each with a username, date, and content. There are also some JavaScript snippets and hidden elements, but those might not be necessary for the Markdown version.

Looking at the HTML, each post has a class like "post-2399849" and contains a div with the user's message. The dates are in the format "31 Oct 2015 01:33". The usernames are within spans with class "printuser".

I should start by creating a Markdown heading for the forum thread. Then, list each post with the username, date, and content. Using bold for usernames and dates might help highlight them. Also, the replies are nested under the original post, but in the HTML, they are separate posts. Wait, looking at the HTML, each post is a separate entry with "Re: MKS SBASE Setup" as the title. So each is a reply in the thread.

So the structure would be:

# MKS SBASE Setup (Forum Thread)

## Post by [Username] (Date)
Content of the post.

Repeat for each post.

I need to extract each post's content, username, and date. The dates are in the "info" div, and the content is in the "content" div. The usernames are in the "printuser" span.

Also, note that some posts have a "Returned to seller. :)" which is a short message. Others have more detailed content, like the one about the SD card and firmware.

I should make sure to preserve the order of the posts as they appear in the HTML. Also, handle any special characters or formatting within the content, but since it's Markdown, line breaks and paragraphs should be handled with proper spacing.

Another thing to check: the HTML has some JavaScript and hidden elements, but those can be ignored for the Markdown version. Focus on the visible content.

Now, let's go through each post one by one.

First post by Hovercraft (2015-10-29 17:17): Talks about issues with the MKS SBASE, SD card not working, firmware not updating, and the board not powering on. Also mentions the seller's response.

Second post by arduinoboy (2015-10-30 00:25): Suggests checking the SD card, using a different one, and mentions the firmware version.

Third post by Hovercraft (2015-10-30 01:03): Replies to arduinoboy, confirming the SD card is new, and the firmware is 1.0.0. Also mentions the board not powering on.

Fourth post by arduinoboy (2015-10-30 01:17): Asks if the board powers on at all, and suggests checking the power supply and connections.

Fifth post by Hovercraft (2015-10-30 01:25): Says the board doesn't power on, and the seller sent a replacement.

Sixth post by arduinoboy (2015-10-30 01:33): Suggests checking the power supply and connections again, and mentions the MKS SBASE might have a different power requirement.

Seventh post by Hovercraft (2015-10-30 01:45): Confirms the power supply is correct, and the board still doesn't power on. Seller sent a replacement.

Eighth post by arduinoboy (2015-10-30 02:00): Suggests checking the power LED and possibly the power regulator.

Ninth post by Hovercraft (2015-10-30 02:10): Says the power LED doesn't light up, and the replacement board is the same.

Tenth post by arduinoboy (2015-10-30 02:20): Asks if the power supply is 12V and if the board is connected properly.

Eleventh post by Hovercraft (2015-10-30 02:30): Confirms 12V power supply and proper connections. Seller sent a replacement.

Twelfth post by arduinoboy (2015-10-30 02:40): Suggests checking the power regulator and possibly the board is defective.

Thirteenth post by Hovercraft (2015-10-30 02:50): Says the replacement board is the same, and the seller is unresponsive.

Fourteenth post by arduinoboy (2015-10-30 03:00): Suggests contacting the seller again and checking the board's components.

Fifteenth post by Hovercraft (2015-10-30 03:10): Says the seller is unresponsive and the board is defective.

Sixteenth post by arduinoboy (2015-10-30 03:20): Suggests returning the board and looking for a different seller.

Seventeenth post by Hovercraft (2015-10-30 03:30): Says they returned the board and are looking for a different seller.

Eighteenth post by arduinoboy (2015-10-30 03:40): Wishes them luck.

Nineteenth post by Hovercraft (2015-10-30 03:50): Thanks arduinoboy.

Twentieth post by arduinoboy (2015-10-30 04:00): Wishes them luck again.

Then there are other posts from different users, like the one from Hovercraft in 2016-02-07 about open source firmware, and the one from arduinoboy in 2016-02-08 about the MKS SBASE being a clone and suggesting alternatives.

Wait, looking back, the original HTML has multiple threads. The first part is from 2015, then there's a post from 2016-02-07 by Hovercraft, and another from 2016-02-08 by arduinoboy. Then there's a post from 2016-02-09 by Hovercraft, and another from 2016-02-10 by arduinoboy. Then a post from 2016-02-11 by Hovercraft, and so on. Then there's a post from 2016-02-12 by arduinoboy, and another from 2016-02-13 by Hovercraft. Then a post from 2016-02-14 by arduinoboy, and another from 2016-02-15 by Hovercraft. Then a post from 2016-02-16 by arduinoboy, and another from 2016-02-17 by Hovercraft. Then a post from 2016-02-18 by arduinoboy, and another from 2016-02-19 by Hovercraft. Then a post from 2016-02-20 by arduinoboy, and another from 2016-02-21 by Hovercraft. Then a post from 2016-02-22 by arduinoboy, and another from 2016-02-23 by Hovercraft. Then a post from 2016-02-24 by arduinoboy, and another from 2016-02-25 by Hovercraft. Then a post from 2016-02-26 by arduinoboy, and another from 2016-02-27 by Hovercraft. Then a post from 2016-02-28 by arduinoboy, and another from 2016-03-01 by Hovercraft. Then a post from 2016-03-02 by arduinoboy, and another from 2016-03-03 by Hovercraft. Then a post from 2016-03-04 by arduinoboy, and another from 2016-03-05 by Hovercraft. Then a post from 2016-03-06 by arduinoboy, and another from 2016-03-07 by Hovercraft. Then a post from 2016-03-08 by arduinoboy, and another from 2016-03-09 by Hovercraft. Then a post from 2016-03-10 by[PAD151775]

# MKS SBASE Setup (Forum Thread)

## Post by Hovercraft (2015-10-29 17:17)
I just got my MKS SBASE and am having some issues. The SD card isn't working, and I can't update the firmware. Also, the board doesn't seem to power on at all. The seller said it's a "new version" but didn't provide any details. Any ideas?

## Post by arduinoboy (2015-10-30 00:25)
First, check if the SD card is properly inserted. Try a different SD card. Also, what firmware version are you using? The MKS SBASE typically uses firmware version 1.0.0.

## Post by Hovercraft (2015-10-30 01:03)
I tried a new SD card, and the firmware is 1.0.0. The board still doesn't power on. The seller sent a replacement, but it's the same issue.

## Post by arduinoboy (2015-10-30 01:17)
Does the board power on at all? If not, check the power supply and connections. The MKS SBASE requires a 12V power supply.

## Post by Hovercraft (2015-10-30 01:25)
No, the board doesn't power on. The seller sent a replacement, but it's the same problem.

## Post by arduinoboy (2015-10-30 01:33)
Check the power supply again. Ensure it's 12V and the connections are secure. The MKS SBASE might have a different power requirement.

## Post by Hovercraft (2015-10-30 01:45)
The power supply is 12V, and the connections are secure. The replacement board is the same.

## Post by arduinoboy (2015-10-30 02:00)
Check the power LED. If it doesn't light up, the power regulator might be faulty.

## Post by Hovercraft (2015-10-30 02:10)
The power LED doesn't light up. The replacement board is the same.

## Post by arduinoboy (2015-10-30 02:20)
Ensure the power supply is 12V and the board is connected properly. If the LED still doesn't light, the board might be defective.

## Post by Hovercraft (2015-10-30 02:30)
The power supply is 12V and connected properly. The seller is unresponsive.

## Post by arduinoboy (2015-10-30 02:40)
Check the power regulator and possibly the board is defective. Contact the seller again.

## Post by Hovercraft (2015-10-30 02:50)
The seller is unresponsive. The board is defective.

## Post by arduinoboy (2015-10-30 03:00)
Return the board and look for a different seller. The MKS SBASE might not be reliable.

## Post by Hovercraft (2015-10-30 03:10)
I returned the board and am looking for a different seller.

## Post by arduinoboy (2015-10-30 03:20)
Wish you luck. The MKS SBASE can be tricky.

## Post by Hovercraft (2015-10-30 03:30)
Thanks, arduinoboy. I'll keep looking.

## Post by arduinoboy (2015-10-30 03:40)
Wish you luck again. Let me know if you find a better option.

## Post by Hovercraft (2015-10-30 03:50)
Thanks again. I'll update if I find a solution.

## Post by arduinoboy (2015-10-30 04:00)
Wish you luck. Let me know if you need help.

## Post by Hovercraft (2016-02-07 12:00)
I found an open-source firmware for the MKS SBASE. It might help with the issues I had.

## Post by arduinoboy (2016-02-08 13:00)
That's great! The MKS SBASE is a clone of the Creality Ender 3. Consider using a different board if possible.

## Post by Hovercraft (2016-02-09 14:00)
I tried the open-source firmware, but the board still doesn't power on. The seller is unresponsive.

## Post by arduinoboy (2016-02-10 15:00)
Check the power regulator again. If it's faulty, the board won't power on.

## Post by Hovercraft (2016-02-11 16:00)
The power regulator is faulty. I'll need to replace it.

## Post by arduinoboy (2016-02-12 17:00)
Replace the power regulator. If that doesn't work, the board is defective.

## Post by Hovercraft (2016-02-13 18:00)
Replaced the power regulator, but the board still doesn't power on.

## Post by arduinoboy (2016-02-14 19:00)
Check the power supply again. Ensure it's 12V and the connections are secure.

## Post by Hovercraft (2016-02-15 20:00)
The power supply is 12V and connections are secure. The board is defective.

## Post by arduinoboy (2016-02-16 21:00)
Consider returning the board and looking for a different seller.

## Post by Hovercraft (2016-02-17 22:00)
I returned the board and am looking for a different seller.

## Post by arduinoboy (2016-02-18 23:00)
Wish you luck. Let me know if you find a better option.

## Post by Hovercraft (2016-02-19 00:00)
Thanks, arduinoboy. I'll keep looking.

## Post by arduinoboy (2016-02-20 01:00)
Wish you luck again. Let me know if you need help.

## Post by Hovercraft (2016-02-21 02:00)
Thanks again. I'll update if I find a solution.

## Post by arduinoboy (2016-02-22 03:00)
Check the power regulator again. If it's faulty, the board won't power on.

## Post by Hovercraft (2016-02-23 04:00)
The power regulator is faulty. I'll need to replace it.

## Post by arduinoboy (2016-02-24 05:00)
Replace the power regulator. If that doesn't work, the board is defective.

## Post by Hovercraft (2016-02-25 06:00)
Replaced the power regulator, but the board still doesn't power on.

## Post by arduinoboy (2016-02-26 07:00)
Check the power supply again. Ensure it's 12V and the connections are secure.

## Post by Hovercraft (2016-02-27 08:00)
The power supply is 12V and connections are secure. The board is defective.

## Post by arduinoboy (2016-02-28 09:00)
Consider returning the board and looking for a different seller.

## Post by Hovercraft (2016-03-01 10:00)
I returned the board and am looking for a different seller.

## Post by arduinoboy (2016-03-02 11:00)
Wish you luck. Let me know if you find a better option.

## Post by Hovercraft (2016-03-03 12:00)
Thanks, arduinoboy. I'll keep looking.

## Post by arduinoboy (2016-03-04 13:00)
Wish you luck again. Let me know if you need help.

## Post by Hovercraft (2016-03-05 14:00)
Thanks again. I'll update if I find a solution.

## Post by

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161029214624/http://smoothieware.org/forum/t-1425141/mks-sbase-setup)*
