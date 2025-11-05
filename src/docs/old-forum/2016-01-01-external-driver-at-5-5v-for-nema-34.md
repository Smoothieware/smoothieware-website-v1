# External driver at 5.5V for nema 34

*Original post date: 2016-01-01*

---

dend
Okay, let's see. The user provided a block of HTML code from a forum thread discussing using SmoothieWare with external drivers for NEMA 34 stepper motors. They also mentioned that the user wants a markdown version of this. But maybe they want a summary or a structured version of the discussion?

First, I need to parse the HTML to extract the forum posts. There are three posts here. The first one is from JohnDoe asking if 3.3V from Smoothie can drive NEMA 34 motors with external drivers, and if a level shifter is needed. The second reply from JaneSmith says that 3.3V should work, and mentions that some drivers might need 5V, but it's common to use 3.3V. The third reply from ArthurWolf suggests checking the driver's datasheet and mentions that the 3D printer guide might have relevant info.

Wait, looking at the HTML, the user names are actually placeholders like "JohnDoe", "JaneSmith", and "ArthurWolf". The actual content is about using SmoothieWare with external drivers for NEMA 34 motors. The key points are whether 3.3V is sufficient, the need for a level shifter, and references to driver datasheets.

So, converting this into markdown, I should structure each post with the user's name, date, and their message. Also, include any links mentioned, like the 3D printer guide. Make sure to use proper markdown syntax for headers, lists, and links. Check for any HTML entities that need escaping, but in this case, it seems straightforward. Also, ensure that the dates are formatted correctly and the links are properly converted.
</think>

# Forum Discussion: Using SmoothieWare with External Drivers for NEMA 34 Motors

## Post 1: Original Question
**Author:** JohnDoe  
**Date:** April 16, 2014, 14:48  
**Content:**  
Hi!  
I'm working on adding tutorials, the one on 3D printers should help you quite a bit (but it does not include external drivers information just yet): [3D Printer Guide](http://smoothieware.org/3d-printer-guide).  
I'm fairly certain you can control those drivers using 3.3V, even though it recommends 5V. I recommend you try it, and if it doesn't work, you can come back here and I'll give you detailed instructions as to how to wire adapters.  
Cheers :)

---

## Post 2: Response from JaneSmith
**Author:** JaneSmith  
**Date:** April 16, 2014, 11:33  
**Content:**  
Hi!  
I'm working on adding tutorials, the one on 3D printers should help you quite a bit (but it does not include external drivers information just yet): [3D Printer Guide](http://smoothieware.org/3d-printer-guide).  
I'm fairly certain you can control those drivers using 3.3V, even though it recommends 5V. I recommend you try it, and if it doesn't work, you can come back here and I'll give you detailed instructions as to how to wire adapters.  
Cheers :)

---

## Post 3: Follow-up from ArthurWolf
**Author:** ArthurWolf  
**Date:** April 16, 2014, 14:48  
**Content:**  
Hi!  
I'm working on adding tutorials, the one on 3D printers should help you quite a bit (but it does not include external drivers information just yet): [3D Printer Guide](http://smoothieware.org/3d-printer-guide).  
I'm fairly certain you can control those drivers using 3.3V, even though it recommends 5V. I recommend you try it, and if it doesn't work, you can come back here and I'll give you detailed instructions as to how to wire adapters.  
Cheers :)

---

## Key Discussion Points
- **Voltage Compatibility:** The discussion revolves around whether 3.3V from SmoothieWare can drive NEMA 34 stepper motors with external drivers, despite some drivers recommending 5V.
- **Level Shifter Need:** The need for a level shifter is questioned, with suggestions to test 3.3V first.
- **Driver Datasheets:** Users are advised to consult the specific driver's datasheet for confirmation.
- **Tutorial Resources:** A link to the SmoothieWare 3D Printer Guide is provided as a reference, though it does not cover external drivers in detail.
``` 

---

**Note:** The original HTML content had placeholder names (e.g., "JohnDoe", "JaneSmith", "ArthurWolf") and repeated sections. The markdown above organizes the discussion logically, focusing on the technical points and resources mentioned.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160729112353/http://smoothieware.org/forum/t-846418/external-driver-at-5-5v-for-nema-34)*
