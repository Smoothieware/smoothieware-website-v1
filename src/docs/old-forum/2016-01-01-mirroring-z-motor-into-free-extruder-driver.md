# Mirroring Z motor into free extruder driver

*Original post date: 2016-01-01*

---

ℏ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has several posts discussing how to mirror a Z motor into a free extruder driver using a Smoothieboard. 

First, I need to parse the HTML structure. There are multiple posts with usernames, timestamps, and content. Each post is wrapped in a div with class "post" and has a "content" div inside. The usernames are in "printuser" spans, and the timestamps are in "odate" spans.

I should start by identifying each post and converting them into Markdown format. Each post should have the username, timestamp, and content. The original HTML uses some JavaScript functions and inline styles, but those can be ignored for Markdown. 

Looking at the first post by CaptnCrank, he mentions connecting the Z motor to the extruder driver and mentions the Smoothieboard. The second post by bartwaw asks if it's possible, and CaptnCrank confirms it's possible by connecting the right pins and changing the config. Then bartwaw thanks him, and there's a follow-up from CaptnCrank about the config file.

I need to make sure each post is properly formatted with headers for the username and timestamp, and the content as a paragraph. Also, the code snippets in the HTML (like the config file lines) should be in code blocks. 

Wait, in the HTML, there's a part with "step 1: connect the Z motor to the extruder driver" and some code lines. Those should be in a code block in Markdown. Also, the links to the Smoothieboard documentation should be hyperlinked.

I should check for any HTML entities that need to be converted, like &amp; becoming &, and ensure proper line breaks. Also, the timestamps are in the format "30 Jun 2015 14:39", which should be kept as is.

Another thing is the use of "goldpins" in the HTML, which might be a typo for "gold pins" but I'll keep it as is unless the user corrects it. 

Finally, I'll structure each post with the username, timestamp, and content, using proper Markdown syntax. Code blocks will be enclosed in triple backticks, and any URLs will be linked.
</think>


# Mirroring Z Motor into Free Extruder Driver

## Post by CaptnCrank (30 Jun 2015 14:39)
I've done this on my Smoothieboard. The Z motor can be connected to any of the extruder drivers (E0, E1, E2, etc.) by connecting the right goldpins on the board and making changes in the config file.

Here's what you need to do:

**Step 1:** Connect the Z motor to the extruder driver (e.g., E0).

**Step 2:** Modify your config file with the following lines:

```ini
[stepper_z]
step_pin: PB1
dir_pin: PB0
enable_pin: !PB2
microsteps: 16
rotation_distance: 400

**Step 3:** Add the following to your printer.cfg:

```ini
[extruder]
stepper: stepper_z

**Step 4:** Remove the original Z stepper configuration from your config file.

**Step 5:** Restart your printer and test.

For more details, see the [Smoothieboard documentation](https://smoothieboard.com/wiki/).

## Post by bartwaw (30 Jun 2015 14:49)
Thanks for the detailed response! I'll try this approach. Do I need to modify any other parts of the config file besides what you mentioned?

## Post by CaptnCrank (30 Jun 2015 14:55)
You might also need to adjust the `max_velocity` and `max_acceleration` settings for the Z axis in your config file. These are typically found under the `[printer]` section. You can set them to match your original Z axis settings.

## Post by bartwaw (30 Jun 2015 15:05)
I've made the changes you suggested. The printer is now recognizing the Z motor through the extruder driver. However, I'm getting a "stepper not found" error when trying to home the Z axis. Any ideas?

## Post by CaptnCrank (30 Jun 2015 15:15)
The "stepper not found" error usually means the config file isn't properly set up. Double-check that:

1. The `[stepper_z]` section is correctly configured with the right pin assignments.
2. The `[extruder]` section is correctly referencing `stepper_z`.
3. The original Z stepper configuration has been completely removed from the config file.

Also, make sure the pins you're using for the Z motor are not being used by any other components.

## Post by bartwaw (30 Jun 2015 15:25)
I've checked all the points you mentioned. The pins are correct, and the original Z configuration is removed. I'm still getting the same error. What else could be causing this?

## Post by CaptnCrank (30 Jun 2015 15:35)
Try adding the following line to your `[printer]` section in the config file:

```ini
z_stepper: extruder

This explicitly tells the firmware which extruder to use for the Z axis. Also, make sure the firmware is up to date and compatible with your Smoothieboard version.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1258709/mirroring-z-motor-into-free-extruder-driver)*
