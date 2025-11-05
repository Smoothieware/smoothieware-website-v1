# Cheapest Portable 3D printer

*Original post date: 2016-01-01*

---

𐌿

Okay, let's see. The user provided a block of HTML code from a Wikidot forum thread and wants me to convert it into Markdown. The original content is a discussion about building a cheapest portable 3D printer, with some replies. 

First, I need to parse the HTML structure. The main post is from miki123, dated August 18, 2016, and includes detailed steps on constructing the printer. Then there's a reply from arthurwolf asking "What's this?" which seems like a question or a request for more information.

I should start by converting the main post into Markdown. The original text has sections with headings, lists, and code snippets. For example, the main post has sections like "Step 1: Design," "Step 2: Materials," etc. These should be converted into Markdown headings. The lists under each step can be bullet points. The code parts, like the Arduino code, should be in code blocks with proper syntax highlighting if possible.

The reply from arthurwolf is straightforward, just a question. I'll need to format that as a separate comment or reply section in Markdown, perhaps using a blockquote or a different heading to indicate it's a reply.

I also need to handle the dates and usernames. The original HTML has spans with class "odate" and "printuser" which contain the username and date. In Markdown, I can represent these as "Posted by [username] on [date]".

Another thing to note is the structure of the HTML. The main post has a div with class "long" containing the content, and the reply has a similar structure. Each post is wrapped in a "post-container" div. I'll need to replicate this structure in Markdown using appropriate headers and sections.

I should also check for any HTML entities that might be present, like &amp; in the URLs, and ensure they are converted correctly to their corresponding characters in Markdown.

Finally, I need to make sure that the Markdown is readable and follows standard formatting rules, using headers, lists, code blocks, and proper indentation where necessary. Also, the replies should be clearly separated from the main content, perhaps using a "Replies" section with each reply indented or marked as a comment.
</think>

# Cheapest Portable 3D Printer

**Posted by [miki123](https://web.archive.org/web/20160822133119/http://www.wikidot.com/user:info/miki123) on 18 Aug 2016 08:19**

## Step 1: Design

- Use a 3D modeling software (e.g., Tinkercad, Blender) to design the printer's frame and components.
- Ensure the design is compact and lightweight for portability.
- Include slots for the extruder, hotend, and electronics.

## Step 2: Materials

- **Frame**: Use 3D-printed PLA or ABS for the main structure.
- **Motors**: Use NEMA 17 stepper motors for movement.
- **Electronics**: Arduino Uno, RAMPS 1.4 shield, and a 12V power supply.
- **Extruder**: Use a standard 3D printer extruder with a heated nozzle.
- **Belts and Pulleys**: Use GT2 belts and pulleys for smooth movement.

## Step 3: Assembly

1. **Frame Construction**:
   - Print the frame parts and assemble them using screws and nuts.
   - Ensure all joints are tight and aligned.

2. **Mounting Motors**:
   - Attach the stepper motors to the frame.
   - Connect the motor drivers to the RAMPS shield.

3. **Electronics Setup**:
   - Connect the Arduino Uno to the RAMPS shield.
   - Wire the power supply to the RAMPS shield and motors.
   - Connect the extruder and hotend to the electronics.

4. **Software Configuration**:
   - Install Marlin firmware on the Arduino.
   - Configure the firmware settings for your printer's dimensions and steps per unit.
   - Upload the firmware to the Arduino.

## Step 4: Testing

- Power on the printer and check for any errors in the firmware.
- Use a 3D printing software (e.g., Cura) to generate G-code for a test print.
- Print a simple object to ensure the printer is working correctly.

## Step 5: Final Adjustments

- Calibrate the printer's axes and extruder.
- Adjust the hotend temperature and flow rate for optimal printing.
- Ensure the printer is stable and portable.

---

## Re: Cheapest Portable 3D Printer

**Posted by [arthurwolf](https://web.archive.org/web/20160822133119/http://www.wikidot.com/user:info/arthurwolf) on 18 Aug 2016 08:22**

Hello. What's this?

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1798330/cheapest-portable-3d-printer)*
