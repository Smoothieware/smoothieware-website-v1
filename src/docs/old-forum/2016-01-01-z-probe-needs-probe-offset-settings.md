# Z probe needs probe offset settings

*Original post date: 2016-01-01*

---

瑖

Okay, let's see. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. The main content is two posts discussing a Z probe offset issue with Smoothie firmware.

First, I need to extract the relevant parts. The first post is from 626Pilot explaining the problem with the Z probe offset on a delta printer. The second reply is from wolfmanjm explaining that the XY offset isn't needed and that Z offset is handled via G30 Znmm.

I should structure the Markdown with headers for each post, using bold for names and dates. The content should be in paragraphs, preserving the original text. Also, the links and mentions of G-code commands need to be in code formatting. I need to make sure the replies are properly nested under the original post, maybe using indentation or a "Re:" prefix.

Check for any HTML elements that might not translate well, like buttons or scripts, but the user probably wants just the text content. Also, ensure that the Markdown is clean and follows standard formatting rules without any markdown in the original HTML.

Wait, the user also included a "Markdown:" line, which might be a placeholder. The actual task is to convert the HTML to Markdown. So I'll start by writing the headers, then each post with their content, using proper Markdown syntax for emphasis and code.
</think>

# Z Probe Needs Probe Offset Settings

## Original Post by 626Pilot (August 8, 2014 09:31)

I'm encountering an issue with the Z probe offset on my delta printer using Smoothie firmware. The problem arises because the probe is mounted at a 50mm offset from the nozzle, and I believe this offset needs to be accounted for in the firmware settings. In other firmware implementations (like Marlin), this offset is typically configured via parameters in the configuration file. However, I haven't found a similar option in Smoothie. 

The current setup causes inaccuracies in bed leveling, as the probe's position relative to the nozzle isn't being compensated for during the calibration process. I'm wondering if there's a way to define this offset in Smoothie or if the firmware handles it differently.

---

## Reply by wolfmanjm (August 11, 2014 04:55)

As discussed on IRC, the XY offset for delta calibration in Smoothie isn't strictly necessary because the firmware uses relative height measurements. A 50mm offset in XY doesn't significantly affect the final results. 

For Z probe offset, Smoothie handles this via the `G30 Znmm` command. While you can use the probe to set Z height, I recommend doing this manually for greater control. 

Your specific issue, as we discovered on IRC, stems from a different configuration problem unrelated to the probe offset. Double-check your firmware settings and ensure that the probe is properly calibrated using the manual method.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-920408/z-probe-needs-probe-offset-settings)*
