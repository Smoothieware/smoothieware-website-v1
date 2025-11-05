# Smoothieboard (Azteeg X5 mini) step idle delay setting?

*Original post date: 2016-01-01*

---

[PAD151800]

Okay, let's see. The user provided a bunch of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse through the HTML and figure out the structure. There are multiple posts here, each with a username, date, and content. The challenge is to represent this in a clear Markdown format.

Starting with the first post by arduinoboy. The content mentions a problem with the Shapeoko 3 and the Smoothieboard. I should note the issue, the steps taken, and the error message. Then, the response from WillAdams suggests checking the step idle delay setting. I need to make sure each post is separated properly, maybe using headers for each user's message.

Next, the follow-up posts from WillAdams. He mentions adjusting the configuration, checking the power supply, and providing a config file. Each of these points should be listed under their respective posts. Also, the links to the config file and the RepStrapOko page need to be converted into Markdown links.

I should use headers for each post, maybe like "### arduinoboy (July 24, 2014)" and then the content. For the replies, using indentation or bullet points might help. Also, ensuring that code snippets are properly formatted with triple backticks. The config file link should be a clickable link in Markdown.

Wait, the user also included some JavaScript and HTML elements at the end. Those are probably part of the forum's template and not needed in the Markdown. I should ignore those and focus on the actual forum posts.


I need to make sure that the Markdown is readable, with clear separation between posts and replies. Using bold for usernames and dates, and proper line breaks. Also, any technical terms like "step idle delay" should be mentioned as they are.

Okay, putting it all together. Start with the original post, then each reply with the user's name and date, followed by their message. Use links for the config file and other pages. Ensure that code snippets are in backticks. Avoid any HTML tags and just use plain text with Markdown formatting.
</think>

### arduinoboy (July 24, 2014)
I'm trying to get my Shapeoko 3 working with a Smoothieboard. I've followed the setup instructions, but when I power on the machine, the stepper motors don't move, and the Smoothieboard's LED blinks rapidly. The serial monitor shows the following error:


Error: No stepper drivers found

I've checked the connections to the stepper drivers (A4988) and they seem correct. The power supply is 24V 4A, and the Smoothieboard is receiving power. Any ideas what could be causing this issue?

---

### WillAdams (July 24, 2014)
The error message "No stepper drivers found" typically indicates a problem with the configuration file or the step idle delay setting. 

1. **Check the step idle delay**: In your configuration file, ensure the `step_idle_delay` parameter is set to a reasonable value (e.g., `step_idle_delay: 250000` for 0.25 seconds). This setting controls how long the stepper drivers stay powered after the last step.

2. **Verify pin assignments**: Confirm that the pins assigned to the stepper drivers in your configuration match the physical connections on the Smoothieboard.

3. **Power supply**: Ensure the power supply is stable and provides sufficient current for the stepper drivers.

Let me know if you need help reviewing your configuration file.

---

### WillAdams (July 25, 2014)
I've uploaded a sample configuration file tailored for the Shapeoko 3 with a Smoothieboard:  
[Config_azteegx5_shapeoko.txt](http://www.shapeoko.com/wiki/index.php/File:Config_azteegx5_shapeoko.txt)

This configuration is based on the [RepStrapOko guide](http://www.shapeoko.com/wiki/index.php/RepStrapOko). Please review the values and ensure they match your hardware setup. Key parameters include:

- `step_idle_delay: 250000` (adjust if needed)
- Correct pin assignments for X, Y, Z, and E axes
- Proper homing settings

If you encounter any issues, feel free to ask!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-947777/smoothieboard-azteeg-x5-mini-step-idle-delay-setting)*
