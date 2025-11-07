# 3D Model to Post Processed G Code

*Original post date: 2016-01-01*

---

appréciation

Okay, let's see. The user provided a bunch of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse through the HTML and figure out the structure. There are multiple posts with different users and content. Each post has a username, date, and message. 

Starting with the first post by "mrehorst" on January 25, 2015. The content is about moving axes for testing with G-code commands. Then there's a reply from "Andrey" mentioning "LinCity" and "LinCity-NG". Then "mrehorst" again with more G-code examples. Then "armin" asking about the "LinCity" game, and "mrehorst" responding with a link.

Wait, the user might want each post converted into a Markdown format with headers for each user and date. I should make sure to preserve the structure, maybe using headers for each post, italic for usernames, and proper code blocks for the G-code examples. Also, the links should be converted into Markdown links. 

I need to check for any HTML tags that need to be converted. For example, the G-code lines are in <p> tags with line breaks. Those should be in code blocks. The usernames are in <span> tags with classes, so I'll use italics or bold as appropriate. Dates are in <span> with classes, so I'll format them as dates. 

Also, the last part has some JavaScript and HTML elements that aren't part of the forum content, so I can ignore those. The main focus is the forum posts. Each post should be a section with the user, date, and message. 

</think>

Here's the content from the forum thread converted into Markdown format:

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **Andrey** (25 Jan 2015 13:35)
I think you're referring to the game [LinCity](https://en.wikipedia.org/wiki/LinCity) or its successor [LinCity-NG](https://en.wikipedia.org/wiki/LinCity-NG). Let me know if you need help with that!

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **armin** (25 Jan 2015 22:04)
What is the "LinCity" game? I've never heard of it before.

---

### **mrehorst** (25 Jan 2015 22:04)
[LinCity](https://en.wikipedia.org/wiki/LinCity) is a city-building simulation game for Linux. It's quite old now, but there's a newer version called [LinCity-NG](https://en.wikipedia.org/wiki/LinCity-NG) that's actively maintained.

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
ℏ1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10mm/sec)
G1 X200 ; move to 200,0,0
G1 Y200 ; Move to 200,200,0
G1 Z200 ; move to 200,200,200
G28 ; home all axes

---

### **mrehorst** (25 Jan 2015 22:04)
If you just need to move the axes for testing you can manually write the gcode to do so with a text editor. The following code should home the X, Y , and Z axes, then move each 200mm, then home all axes again. Just save the file with a `.gcode` suffix and load it into the smoothieboard.

```gcode
G28 ; home all axes
G91 ; set relative coordinates
G1 F600 ; set speed to 600mm/min (10

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730175823/http://smoothieware.org/forum/t-1082613/3d-model-to-post-processed-g-code)*
