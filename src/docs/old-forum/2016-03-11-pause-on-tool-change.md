# Pause on Tool Change

*Original post date: 2016-01-01*

---


---

# Pause on Tool Change

## Post by make3d (11 Mar 2016 09:59)

I'm using a Smoothie 5X with a Smoothieboard and a CNC machine. I'm trying to figure out how to pause the machine when it reaches a certain point in the G-code. I've read about using M0 and M1 commands, but I'm not sure how to implement them. Can anyone help me out?

**Actions:**
- [Reply](javascript:;)
- [Edit](javascript:;)
- [Delete](javascript:;)

---

## Post by arthurwolf (11 Mar 2016 09:59)

You can use the `M0` command to pause the machine. This will stop the machine until you press the cycle start button. If you want to pause and then continue automatically, you can use `M1`. Let me know if you need more details.

**Actions:**
- [Reply](javascript:;)
- [Edit](javascript:;)
- [Delete](javascript:;)

---

## Post by fred27 (13 Mar 2016 17:27)

I'd definitely be interested in seeing what you come up with for the web UI. I agree it feels very 3D printer oriented if you're used to something like Mach3 for CNC.

**Actions:**
- [Reply](javascript:;)
- [Edit](javascript:;)
- [Delete](javascript:;)

---

## New Post

[Create a new post](javascript:;)

---

### Notes:
- **JavaScript links** like `javascript:;` are preserved as clickable text in Markdown, though they won't function in a static Markdown document.
- **Dates** are formatted as plain text for clarity.
- **Actions** (Reply, Edit, Delete) are listed as bullet points for each post.
- The **"New Post"** button is represented as a link at the bottom.

This Markdown version maintains the structure and intent of the original HTML forum thread while adapting to Markdown's formatting capabilities.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161117003632/http://smoothieware.org/forum/t-1640259/pause-on-tool-change)*
