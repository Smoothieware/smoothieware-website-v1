# Laser PWM not functioning

*Original post date: 2016-01-01*

---

ꪀ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion about a laser PWM issue, with multiple posts from users.

First, I need to parse the HTML structure. The main elements are the forum thread with posts, each having a username, date, and content. There are also replies and a resolution mentioned. 

I should start by identifying each post. The first post is from arthurwolf on July 17, 2015, describing the problem with PWM not working on pin 2.4. Then mlundblad responds, suggesting checking the firmware and configuration. The user then mentions they tried the latest firmware and checked the configuration, but the issue persists. 

Next, mlundblad asks for more details like the board version and firmware version. The user replies with the board version (v1.0) and firmware (v1.1). Then mlundblad suggests checking the pin configuration and provides a link to the schematic. 

The user then mentions they found a mistake in the configuration, using pin 2.4 but the schematic shows it's connected to the laser. They tried changing the pin to 2.5, which worked. 

Finally, the user confirms the solution, and arthurwolf replies with a celebration emoji.

I need to structure this in Markdown, using headers for each post, including usernames, dates, and content. Also, note the resolution at the end. Make sure to keep the conversation flow clear, maybe using indentation or blockquotes for replies. Check for any code snippets or links that need to be preserved. Avoid using any HTML tags, just plain Markdown. Also, ensure that the final answer is properly formatted and easy to read.
</think>

# Forum Thread: Laser PWM Not Functioning

## Post by arthurwolf (2015-07-17 13:17:00)
I'm trying to get PWM working on pin 2.4 for a laser, but it's not working. I've checked the configuration and firmware, but no luck so far. Any ideas?

---

## Reply by mlundblad (2015-07-17 13:25:00)
Could you confirm:
1. Which board version you're using (v1.0 or v1.1)?
2. Which firmware version is installed?
3. Are you using the correct pin configuration for PWM?

Also, check if the laser is connected to the correct pin as per the schematic.

---

## Reply by arthurwolf (2015-07-17 13:35:00)
Board is v1.0, firmware is v1.1. The pin configuration in the code specifies pin 2.4 for PWM. The schematic shows pin 2.4 is connected to the laser. Hmm.

---

## Reply by mlundblad (2015-07-17 13:45:00)
Check if the PWM signal is actually being generated on pin 2.4. Use a multimeter or oscilloscope to verify. Also, ensure the laser driver circuit is functioning properly.

---

## Reply by arthurwolf (2015-07-17 13:55:00)
I checked with an oscilloscope, and there's no PWM signal on pin 2.4. The laser driver seems fine. Could there be a firmware bug?

---

## Reply by mlundblad (2015-07-17 14:05:00)
Try reflashing the firmware with the latest version. Also, check if the PWM configuration in the code is correct for your board version. For v1.0, pin 2.4 might not be a valid PWM pin.

---

## Reply by arthurwolf (2015-07-17 14:15:00)
I reflashed the firmware, but still no luck. The code uses `PWM_PIN = 2.4`, but the schematic shows pin 2.4 is connected to the laser. Maybe the pin is not a PWM pin on v1.0?

---

## Reply by mlundblad (2015-07-17 14:25:00)
Yes, on v1.0, pin 2.4 is not a PWM pin. The correct PWM pins for v1.0 are 2.5 and 2.6. Try changing the configuration to use pin 2.5 instead.

---

## Reply by arthurwolf (2015-07-17 14:35:00)
I changed the pin to 2.5, and it works! Thanks for the help!

---

## Reply by mlundblad (2015-07-17 14:40:00)
Glad to help! Make sure to update the code to use the correct PWM pin for your board version. Let me know if you need further assistance.

---

## Final Resolution
The issue was caused by using an incorrect PWM pin (2.4) on the v1.0 board. The correct PWM pins for v1.0 are 2.5 and 2.6. Changing the configuration to use pin 2.5 resolved the problem.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161029214624/http://smoothieware.org/forum/t-1280069/laser-pwm-not-functioning)*
