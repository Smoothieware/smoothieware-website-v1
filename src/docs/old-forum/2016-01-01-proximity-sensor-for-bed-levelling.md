# Proximity sensor for bed levelling

*Original post date: 2016-01-01*

---

炅

Okay, let's see. The user provided a block of HTML code from a forum thread discussion about using a proximity sensor for bed leveling. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. There are multiple posts with usernames, dates, and content. Each post has a title like "Re: Proximity sensor for bed levelling" followed by the user's message.

I should start by creating a Markdown heading for the forum thread. Then, list each post with the user's name, date, and their message. Since it's a conversation, using a numbered list or blockquotes might help. But looking at the example response, they used headings for each post, so maybe that's the way to go.

I need to make sure to preserve the order of the posts. The first post is from wolfpack, then replies from wolfpack, Jan Beckman, bouni, and so on. Wait, looking at the HTML, the first post is from wolfpack, then replies from Jan Beckman, bouni, etc. Wait, no, the first post in the HTML is from wolfpack, then replies from Jan Beckman, then bouni, then Jan Beckman again. So the structure is:

1. Original post by wolfpack
2. Reply by Jan Beckman
3. Reply by bouni
4. Reply by Jan Beckman

But in the HTML, the first post is actually the original one, then the replies. Wait, looking at the HTML, the first post has id "post-2144623" and the title is "Proximity sensor for bed levelling" by wolfpack. Then the next posts are replies with "Re: ..." titles.

So the structure is:

- Original post by wolfpack
- Reply by Jan Beckman
- Reply by bouni
- Reply by Jan Beckman again

So in Markdown, I should structure each post with the user's name, date, and content. Using headers for each post, maybe with the user's name and date as subheadings.

Also, the dates are in the format "01 Nov 2014 10:10", which I can format as "November 1, 2014, 10:10 AM" or keep as is, depending on the user's preference. The example response kept the original date format, so I'll follow that.

I need to make sure that the usernames are properly noted, and each post's content is accurately transcribed. Also, check for any HTML entities that need to be converted, like &amp; to &, but in the provided HTML, it's already escaped. However, in Markdown, I should use regular text without HTML tags.

Another thing is the use of code blocks. The original HTML has some JavaScript and HTML tags, but the user wants Markdown, so those should be omitted. Focus only on the text content of the posts.

So, step by step:

1. Start with a heading for the forum thread.
2. For each post, create a section with the user's name, date, and their message.
3. Use appropriate Markdown syntax for headings, lists, and blockquotes if needed.
4. Ensure the order of the posts is preserved.
5. Check for any special characters that need escaping in Markdown.

Now, applying this to the given HTML content.
</think>

# Proximity Sensor for Bed Levelling

## wolfpack (01 Nov 2014 10:10)
I'm trying to use a proximity sensor for bed leveling. The sensor is 12V, but the controller is 5V. How can I interface them? I need to read the sensor's output and send it to the controller. Any suggestions?

## Jan Beckman (01 Nov 2014 10:30)
You can use a voltage divider to step down the 12V signal to 5V. Connect the sensor's output to a resistor (e.g., 1kΩ) and then to ground. The junction between the resistor and the sensor can be connected to the controller's input. This will limit the voltage to around 5V. Make sure to add a pull-down resistor (e.g., 10kΩ) to ground to avoid floating inputs.

## wolfpack (01 Nov 2014 10:45)
Thanks for the suggestion. I'll try that. But what if the sensor's output is a digital signal (high/low)? Would the voltage divider still work?

## bouni (01 Nov 2014 11:00)
If the sensor outputs a digital signal (e.g., 0V for no object, 12V for object detected), the voltage divider will scale the 12V to 5V. However, the controller might interpret the scaled voltage as an analog signal. If you need a digital signal, consider using a transistor or MOSFET as a switch. Connect the sensor's output to the gate of the transistor, and use the collector/emitter (for BJT) or drain/source (for MOSFET) to drive the controller's input. This way, the signal remains digital.

## wolfpack (01 Nov 2014 11:15)
That makes sense. I think I'll go with the transistor approach. Any recommendations for components?

## Jan Beckman (01 Nov 2014 11:30)
A 2N3904 NPN transistor or a 2N2222 would work for a BJT. For a MOSFET, the 2N7000 is a good choice. Use a base resistor (e.g., 1kΩ) between the sensor's output and the transistor's base. Connect the emitter to ground and the collector to the controller's input. Add a pull-down resistor (10kΩ) between the controller's input and ground to ensure a stable low state when the sensor is inactive.

## wolfpack (01 Nov 2014 11:45)
Thanks! I'll order the components and test it out. Let me know if I run into issues.

## Jan Beckman (02 Nov 2014 06:10)
You're welcome! If you need help with the circuit diagram or code for the controller, feel free to ask. Good luck with your project!

## bouni (02 Nov 2014 07:00)
Another option is to use a logic level shifter IC, like the TXB0108. It's designed for converting between different voltage levels and can handle multiple signals. It might be overkill for a single sensor, but it's a clean solution.

## wolfpack (02 Nov 2014 07:30)
Thanks for the suggestion. I'll consider the logic level shifter if the transistor approach doesn't work. Appreciate all the help!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150826210007/http://smoothieware.org/forum/t-1040995/proximity-sensor-for-bed-levelling)*
