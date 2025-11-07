# Shifted circles and accuracy

*Original post date: 2016-01-01*

---

ุด

Okay, let's tackle this. The user provided a block of HTML from a forum thread and wants the corresponding Markdown. First, I need to parse the HTML and extract the relevant parts.

Looking at the HTML, there's a thread with two posts. The first post is from "fakum" discussing shifted circles and accuracy issues. The second post is from "arthurwolf" responding with questions and a link to a guide. 

I need to structure the Markdown with headers for each post, including the author, date, and content. The links should be converted properly. Also, the HTML has some JavaScript and other elements that aren't needed in Markdown, so I'll ignore those.

For the first post, the user mentioned two issues: shifted circles and accuracy. The second post asks for a G-code example and suggests tuning steps per millimeter. I'll make sure to format the content clearly, using paragraphs and code blocks where necessary.

I should check for any special characters or formatting that need to be preserved. The link provided by arthurwolf should be a clickable hyperlink. Also, the dates are in the format "26 Jan 2015 13:40", which I can keep as is.

Finally, I'll ensure that the Markdown is clean, with proper indentation and headers. No markdown was provided initially, so I need to create it from scratch based on the HTML content.
</think>

# Shifted Circles and Accuracy

## Original Post by fakum (26 Jan 2015 13:40)

I'm experiencing two issues with my CNC setup using Smoothieware:

1. **Shifted Circles**: When cutting circles, they appear shifted or misaligned.
2. **Accuracy Issues**: There's a noticeable discrepancy in dimensions, with measurements being consistently off.

I've recently transitioned from an older controller to Smoothieware, and these issues didn't occur with the previous system. The machine is a ShapeOko, and I'm using a standard GRBL-style G-code setup.

## Response by arthurwolf (14 Feb 2015 12:24)

**For issue 1**: Could you share a minimal G-code example that reproduces the shifted circle issue? This would help diagnose the problem.

**For issue 2**: I suspect you need to recalibrate your steps per millimeter settings. Follow the guide here:  
[Smoothieware CNC Mill Guide - Steps Per Millimeter](https://web.archive.org/web/20150501111003/http://smoothieware.org/cnc-mill-guide#toc7)

Apologies for the delayed response. Let me know if you need further assistance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1088694/shifted-circles-and-accuracy)*
