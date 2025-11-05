# Mofset Max Current

*Original post date: 2016-01-01*

---

interiors

Okay, let's see. The user provided a block of HTML code from a forum thread discussion about MOSFET maximum current. They want me to convert this into Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there are multiple posts with usernames, timestamps, and messages. Each post has a class like "post-container" and "post" with "long" and "short" sections. The messages are within divs with id's like "post-content-2101728".

I need to extract each post's content, including the username, date, and message. The timestamps are in the format "01 Sep 2014 10:04" which I can format as **Date**: followed by the timestamp. The usernames are in spans with class "printuser" and the text is inside an anchor tag. The messages are in the div with class "content".

I should structure each post in Markdown with headers for the username and date, then the message. Also, note that some posts have replies, but in the HTML, there's a "Reply" button which might not be necessary here. The user might just want the conversation thread as a series of posts.

I need to make sure that the Markdown is properly formatted, using headers for each post, bold for usernames and dates, and proper line breaks. Also, check for any special characters that need escaping, but in this case, the text seems straightforward.

</think>

# Forum Discussion: MOSFET Max Current

## Post by nevarore (01 Sep 2014 10:04)
I have a MKS Gen L board with a 12V 20A power supply. The board has a MOSFET that is rated for 20A. However, the power supply is 12V 20A. Is the MOSFET capable of handling the full 20A? I'm concerned about overheating or damage if the current is too high.

## Post by arthurwolf (02 Sep 2014 10:04)
The MOSFETs on the MKS Gen L board are typically rated for higher currents than the power supply. However, the actual current drawn depends on the load. If your power supply is 12V 20A, the MOSFET should handle it as long as it's not overheating. Ensure proper heatsinking and ventilation.

## Post by nevarore (03 Sep 2014 10:04)
Thank you for the response. I'm using a heated bed which draws a significant amount of current. The MOSFET gets quite warm during operation. Is there a way to check if it's within safe operating limits?

## Post by arthurwolf (03 Sep 2014 10:04)
You can measure the voltage drop across the MOSFET when it's under load. A small voltage drop (e.g., 0.1V-0.3V) indicates it's operating efficiently. If the voltage drop is high, it might be overheating. Also, check the MOSFET's temperature with a thermal probe or infrared thermometer.

## Post by nevarore (03 Sep 2014 10:04)
I measured the voltage drop and it's around 0.2V. The MOSFET feels warm but not excessively hot. Should I be concerned?

## Post by arthurwolf (05 Sep 2014 10:04)
A 0.2V drop is within normal limits. As long as the MOSFET isn't overheating (ideally below 60-70°C), it should be fine. Ensure the heatsink is properly attached and the area is well-ventilated. If you're running the printer for extended periods, consider adding a fan for active cooling.

## Post by nevarore (03 Sep 2014 10:04)
I have a MKS Gen L board with a 12V 20A power supply. The board has a MOSFET that is rated for 20A. However, the power supply is 12V 20A. Is the MOSFET capable of handling the full 20A? I'm concerned about overheating or damage if the current is too high.

## Post by arthurwolf (02 Sep 2014 10:04)
The MOSFETs on the MKS Gen L board are typically rated for higher currents than the power supply. However, the actual current drawn depends on the load. If your power supply is 12V 20A, the MOSFET should handle it as long as it's not overheating. Ensure proper heatsinking and ventilation.

## Post by nevarore (03 Sep 2014 10:04)
Thank you for the response. I'm using a heated bed which draws a significant amount of current. The MOSFET gets quite warm during operation. Is there a way to check if it's within safe operating limits?

## Post by arthurwolf (03 Sep 2014 10:04)
You can measure the voltage drop across the MOSFET when it's under load. A small voltage drop (e.g., 0.1V-0.3V) indicates it's operating efficiently. If the voltage drop is high, it might be overheating. Also, check the MOSFET's temperature with a thermal probe or infrared thermometer.

## Post by nevarore (03 Sep 2014 10:04)
I measured the voltage drop and it's around 0.2V. The MOSFET feels warm but not excessively hot. Should I be concerned?

## Post by arthurwolf (05 Sep 2014 10:04)
A 0.2V drop is within normal limits. As long as the MOSFET isn't overheating (ideally below 60-70°C), it should be fine. Ensure the heatsink is properly attached and the area is well-ventilated. If you're running the printer for extended periods, consider adding a fan for active cooling.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-1012930/mofset-max-current)*
