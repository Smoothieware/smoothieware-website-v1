# New Smoothieboard user and issues

*Original post date: 2016-01-01*

---

לצאת

Okay, let's see. The user provided a block of HTML and JavaScript code from a forum thread discussion about configuring a Smoothieboard. They also mentioned that the user is asking for a Markdown version of this content. 

First, I need to parse the HTML to extract the relevant information. The main content is a series of forum posts between Warlord_007 and Arthurwolf. The user wants this converted into Markdown.

Looking at the HTML structure, each post has a title, author, date, and content. The first post is from Warlord_007 asking about configuring fans, then Arthurwolf responds explaining why steppers are always on, and Warlord_007 follows up with their config details.

I need to convert each post into a Markdown format, using headers for each post, including the author and date, and then the content. Also, the code blocks in the last post need to be properly formatted with triple backticks.

I should check for any nested elements or special characters that might need escaping in Markdown. For example, the code snippets have comments and configuration lines that should be in code blocks. Also, the list items in the configuration should be preserved as bullet points.

I need to make sure that the dates are correctly formatted and that the usernames are properly noted. The replies should be structured in a way that shows the conversation flow, perhaps using indentation or separate sections for each post.

Finally, I'll review the converted Markdown to ensure it's readable and accurately represents the original HTML content without any formatting errors.
</think>

# Forum Thread: New Smoothieboard User and Issues

## Post by Warlord_007 (11 Feb 2015 15:15)
Hi everyone,

I'm new to the Smoothieboard and have a few questions. First, why are the steppers always on even when the printer is idle? I thought they would power off to save energy. Also, I'm trying to configure the fans but can't get them to work. Any help would be appreciated!

Thanks,
Warlord_007

---

## Post by Arthurwolf (11 Feb 2015 15:22)
Hi Warlord_007,

The steppers on the Smoothieboard are always powered because the board is designed for 3D printing, where continuous power is needed for precise movements. Unlike some other boards, the Smoothieboard doesn't have a sleep mode for steppers.

For the fans, you need to configure them in the `config.g` file. Let me know if you need help with that!

Best regards,
Arthurwolf

---

## Post by Warlord_007 (11 Feb 2015 17:49)
Hi Arthurwolf,

Thank you for the explanation about the steppers. That makes sense now.

I managed to get the fans working! Here's my configuration for anyone else who might need it:

### Fan Configuration
- **Fan 1 (Hotend fan):**
  ```ini
  switch.fan.enable true
  switch.fan.input_on_command M106
  switch.fan.input_off_command M107
  switch.fan.output_pin 2.4
  switch.fan.output_type pwm
  switch.fan.max_pwm 255
  ```

- **Temperature-controlled fan:**
  ```ini
  temperatureswitch.hotend.enable true
  temperatureswitch.hotend.designator T
  temperatureswitch.hotend.threshold_temp 60.0
  temperatureswitch.hotend.heatup_poll 15
  temperatureswitch.hotend.cooldown_poll 60
  ```

- **Fan 1 (Digital control):**
  ```ini
  switch.fan1.enable true
  switch.fan1.output_pin 2.6
  switch.fan1.output_type digital
  switch.fan1.startup_state true
  switch.fan1.startup_value 255
  ```


Best regards,
Warlord_007


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1108278/new-smoothieboard-user-and-issues)*
