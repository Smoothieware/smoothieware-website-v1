# Setting radius for delta grid

*Original post date: 2016-01-01*

---

WAIT, the user provided a block of HTML code from a forum thread discussing how to set the radius for a delta grid in a 3D printer. The user then says "Markdown:" and ends with "think". I need to figure out what they want.

First, I should check if they want the HTML converted to Markdown. The HTML has forum posts with user messages, code snippets, and some JavaScript. Converting that to Markdown would involve translating the structure into headers, lists, code blocks, etc.

Looking at the HTML, there are multiple posts with usernames, timestamps, and content. The first post by Scotty is asking about setting the radius. Then wolfmanjm responds with two answers: deleting the saved file and using G31 J80.

The user might want this forum thread converted into a Markdown format for easier reading or documentation. They might also want the key points extracted. Alternatively, they could be testing if I can parse HTML into Markdown.

I should start by converting the HTML structure into Markdown. Use headers for each post, include usernames and timestamps, and format code snippets properly. Also, ensure that the G-code command is in a code block.

I need to make sure that the Markdown is clean and readable, preserving the original information. Check for any nested elements or special characters that need escaping. Since the original HTML has some JavaScript, I should ignore that as it's not part of the content.

Finally, present the converted Markdown, ensuring that the key solutions (deleting the saved file and using G31 J80) are clearly highlighted.
</think>


---

### **Setting Radius for Delta Grid**

**Posted by:** Scotty  
**Date:** March 12, 2016  
**Time:** 10:10 PM  

I'm trying to adjust the radius for my delta grid calibration, but it's not working as expected. Any suggestions?

---

**Re: Setting Radius for Delta Grid**  
**Posted by:** wolfmanjm  
**Date:** March 13, 2016  
**Time:** 12:49 AM  

To force a new radius, you need to delete the saved file. The system uses the saved file to determine the radius, so removing it will allow the new settings to take effect.

---

**Re: Setting Radius for Delta Grid**  
**Posted by:** wolfmanjm  
**Date:** March 13, 2016  
**Time:** 1:46 AM  

To force a new radius, use the following G-code command:

```gcode
G31 J80

This command sets the radius to 80 units. Adjust the value as needed for your setup.

---

**Key Takeaways:**
- Delete the saved file to reset the radius.
- Use `G31 J<value>` to set the radius directly, where `<value>` is the desired radius in units.

--- 

Let me know if you need further assistance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1638587/setting-radius-for-delta-grid)*
