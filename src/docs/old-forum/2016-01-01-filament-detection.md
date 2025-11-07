# Filament Detection

*Original post date: 2016-01-01*

---

菱

Okay, let's see. The user provided a block of HTML and JavaScript code from a forum thread discussing filament detection on a 3D printer, specifically mentioning Smoothieware. They want me to convert this into Markdown. 

First, I need to parse the HTML structure. The main content is a series of forum posts. Each post has a username, timestamp, and message. There are also code snippets and links to GitHub.

I should start by identifying the sections. The first part is the initial post by wolfmanjm explaining the filament detector module. Then there's a reply from jlmccuan asking about M codes, followed by another reply from wolfmanjm providing the M codes and a GitHub link.

I need to structure each post with headers for the username and time, then the content. Code snippets should be in backticks, and links should be converted properly. Also, the M codes mentioned (M405, M406) should be highlighted or noted as commands.

I should check for any nested elements or special formatting in the HTML that need to be represented in Markdown. For example, the GitHub link is in a paragraph, so I'll make sure to format that as a clickable link. The timestamps are in a span with a class, so I'll just note the time as part of the post.

Also, the user might want the Markdown to be readable and properly formatted, so using headers for each post, bold for usernames, and code blocks for the M codes and GitHub URL. I need to ensure that the structure is clear and follows standard Markdown conventions.

</think>

# Filament Detection Discussion

## Post by wolfmanjm (13 Mar 2016 01:45)
The filament detector module uses an optical sensor (like those in RC cars) to detect filament jams. It works by monitoring the rotation of the extruder motor. If the motor stops rotating (indicating a jam), the printer pauses and displays an error message. The sensor is connected to a digital pin on the microcontroller, and the code checks the pin's state periodically.

Key features:
- Pauses printing on filament jam
- Uses an optical sensor
- Connected to a digital pin
- Periodic checks for sensor state

## Reply by jlmccuan (13 Mar 2016 05:17)
**Question:**  
Are there specific M codes to enable/disable the filament detection during printing? Also, how can I ensure it doesn't trigger during preheating or bed leveling?

## Reply by wolfmanjm (13 Mar 2016 05:45)
**Answer:**  
- The filament detection only activates **during actual printing** (not during preheating or bed leveling).
- Use these M codes:
  - `M405` - Disables filament detection
  - `M406` - Enables filament detection
- Additional M codes are available in the [Smoothieware source code](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/filamentdetector/FilamentDetector.cpp#L138)
- Check configuration settings for proper setup

## Technical Details
- **Sensor Type:** Optical (similar to RC car sensors)
- **Microcontroller Pin:** Digital pin (configuration required)
- **Error Handling:** Printer pauses on jam detection
- **Code Reference:** [FilamentDetector.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/filamentdetector/FilamentDetector.cpp#L138)


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161117003632/http://smoothieware.org/forum/t-1635265/filament-detection)*
