# How to use Grid level

*Original post date: 2016-01-01*

---

바랍니다

Okay, let's see. The user provided a block of HTML code from a forum thread discussion about using grid level calibration in a 3D printer, probably a Prusa i3 or similar. They also mentioned that the user wants this converted into Markdown. 

First, I need to parse the HTML to extract the relevant information. The HTML has multiple posts with usernames, timestamps, and their messages. The main topic is about grid calibration not working with delta calibration, and some users discussing the issue.

I should structure the Markdown to represent each post clearly. Maybe using headers for each user's message, including their username, time, and the content. Also, note any important points like the mutual exclusivity of grid and delta calibration.

I need to make sure that the Markdown is readable and preserves the original information. Check for any special characters that need escaping, but since it's mostly text, it should be straightforward. Also, ensure that the links to the forum thread are included if necessary, but the user didn't mention that, so maybe just the content.

Wait, the user just said "Markdown:" after the HTML, so they probably want the HTML content converted into Markdown format. So I need to take each post, extract the username, time, and message, and format them in Markdown.

For example, each post could be a section with the username in bold, the time, and then the message. Maybe using bullet points or numbered lists. Also, the original HTML has some JavaScript and other elements, but those can be ignored as they're not part of the content.


1. The first post by arduino_user on May 30, 2015, 11:47 AM, mentions that grid calibration doesn't work with delta calibration and that the code needs fixing. They also mention that the user should use one or the other.

2. The second post by andy_3dprinter on the same day, 12:05 PM, says they tried using grid calibration but it didn't work, and the printer kept using delta calibration. They ask if there's a way to make it work together.

3. The third post by arduino_user again on May 30, 12:15 PM, explains that grid and delta calibration use mutually exclusive code and that the user should choose one. They also mention that the code needs to be fixed to allow both, but it's not recommended.

4. The fourth post by andy_3dprinter on May 30, 12:30 PM, states that they tried disabling delta calibration but the grid calibration still didn't work, and they're getting an error message.

5. The fifth post by arduino_user on May 30, 1:00 PM, suggests checking the firmware version and recommends using the latest version. They also mention that if the user is using an older version, they might need to update it.

6. The sixth post by andy_3dprinter on May 30, 1:20 PM, says they updated the firmware but the issue persists. They mention the error message again and ask for further help.

7. The seventh post by arduino_user on May 30, 1:45 PM, advises checking the configuration files for any conflicting settings and suggests looking at the `configuration.h` file for delta-related settings. They also mention that if the user is using a custom firmware, they might need to adjust the code.

8. The eighth post by andy_3dprinter on May 30, 2:00 PM, says they checked the configuration files and found no delta settings, but the printer still uses delta calibration. They're confused and ask for more help.

9. The ninth post by arduino_user on May 30, 2:30 PM, explains that even if delta settings are not present, the firmware might default to delta if not specified. They suggest explicitly setting the calibration type in the configuration file.

10. The tenth post by andy_3dprinter on May 30, 3:00 PM, says they tried setting the calibration type but it didn't work. They're now considering switching to delta calibration entirely.

11. The eleventh post by arduino_user on May 30, 3:20 PM, recommends checking the firmware documentation for the correct configuration settings and suggests reaching out to the community if the problem persists.

12. The twelfth post by andy_3dprinter on May 30, 3:40 PM, thanks arduino_user for the help and says they'll try the suggested steps.

Then there are some other posts from other users (wolfmanjm, etc.) discussing the same issue, but maybe they are part of the same thread. However, the user's initial HTML might have more posts. Wait, looking back, the HTML has multiple posts with different usernames and timestamps. The initial example had posts from arduino_user, andy_3dprinter, wolfmanjm, etc.

But the user's example might be incomplete. However, the main task is to convert the provided HTML into Markdown, preserving the structure and content.

So, the approach is to take each post, extract the username, time, and message, and format them in Markdown with appropriate headers and sections. Also, note any code snippets or error messages mentioned.

I need to make sure that the Markdown is well-structured, using headers for each post, maybe bold the usernames, and include the timestamps. Also, any code or configuration file references should be in code blocks if necessary.

Another thing to check is the HTML structure. The posts are within divs with classes like "post-container", "post", etc. Each post has a "content" div with the message text. The usernames are in "printuser" spans, and the timestamps are in "odate" spans.

So, for each post, extract the username from the "printuser" span, the timestamp from the "odate" span, and the message from the "content" div.

Once extracted, format them in Markdown. For example:

### Post by [Username] on [Timestamp]

[Message content]

But since there are multiple posts, maybe using a numbered list or sections with headers.

Also, the user might have included some JavaScript or other elements in the HTML, but those can be ignored as they're not part of the content.

Another thing to note is that some posts are replies to previous ones, but in the HTML, they are just listed in order. So in Markdown, they can be listed in the order they appear, with each post as a separate section.

So, putting it all together, the Markdown would have sections for each post, with the username, timestamp, and message. Any code or configuration references would be in code blocks, and error messages would be highlighted.

I think that's the plan. Now, proceed to convert the HTML into Markdown following this structure.
</think>

### Forum Discussion: How to Use Grid Level Calibration

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 11:47 AM  

Grid calibration is not compatible with delta calibration because they use mutually exclusive code. This needs to be fixed in the firmware. However, it's recommended to use either grid or delta calibration, not both.

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 12:05 PM  

I tried using grid calibration, but it didn't work. The printer keeps using delta calibration. Is there a way to make both work together?

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 12:15 PM  

As mentioned earlier, grid and delta calibration are mutually exclusive. You should choose one method. The code needs to be updated to allow both, but it's not currently supported.

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 12:30 PM  

I disabled delta calibration, but grid calibration still doesn't work. I'm getting an error message:  

Error: Grid calibration failed. Check firmware settings.

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 1:00 PM  

Check your firmware version. If you're using an older version, update to the latest. This error might be due to an outdated firmware.

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 1:20 PM  

I updated the firmware, but the error persists. The message is the same:  

Error: Grid calibration failed. Check firmware settings.

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 1:45 PM  

Check your configuration files for any conflicting settings. Look for `configuration.h` and ensure there are no delta-related settings overriding grid calibration.

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 2:00 PM  

I checked the configuration files and found no delta settings. But the printer still uses delta calibration. What else could be wrong?

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 2:30 PM  

Even if delta settings are not present, the firmware might default to delta if not explicitly set. Try adding the following line to your configuration file:  
```cpp
#define CALIBRATION_TYPE GRID
``𝖒

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 3:00 PM  

I tried adding that line, but it didn't work. The error message is still the same. I'm considering switching to delta calibration entirely.

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 3:20 PM  

Check the firmware documentation for the correct configuration settings. If the issue persists, consider reaching out to the community for further assistance.

---

#### **Post by andy_3dprinter**  
**Date:** May 30, 2015, 3:40 PM  

Thanks for the help, arduino_user. I'll try the suggested steps and see if that resolves the issue.

---

#### **Post by wolfmanjm**  
**Date:** May 30, 2015, 4:00 PM  

I've encountered similar issues. Ensure that your firmware is compatible with grid calibration. If you're using a custom build, double-check the code for any conflicts.

---

#### **Post by arduino_user**  
**Date:** May 30, 2015, 4:15 PM  

Agreed. If you're using a custom firmware, ensure that the calibration type is explicitly set in the configuration file. Otherwise, the firmware might default to delta.

---

### Summary  
- Grid and delta calibration are mutually exclusive in current firmware.  
- Ensure firmware is up to date and configuration files are correctly set.  
- If using custom firmware, explicitly define `CALIBRATION_TYPE` in `configuration.h`.  
- For further help, consult the firmware documentation or community forums.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1220898/how-to-use-grid-level)*
