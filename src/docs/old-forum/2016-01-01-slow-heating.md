# Slow heating

*Original post date: 2016-01-01*

---

DeltaTime: Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is about a user named Chris Leamon troubleshooting issues with a 3D printer's hot end and soldering iron. 

First, I need to parse the HTML structure. The main content is within a div with class "message" and "message-1", containing several posts. Each post has a title, content, and metadata like date and time. There are also some JavaScript snippets and hidden elements, but those might not be necessary in the Markdown.

I should start by identifying each post. The first post is the original problem statement, then subsequent replies. Each post has a title (like "Slow heating", "Re: Slow heating", etc.), the content, and the author's name and timestamp.

In Markdown, I can use headers for the titles, maybe bold the author and timestamp, and use paragraphs for the content. Since it's a forum thread, using a numbered list for each post might be appropriate. Also, the user mentioned that Chris figured out the problem with the hot end and the UPS issue, so that should be clearly presented.

I need to make sure that the structure is clear, with each post separated, and the replies properly indented or marked as such. Also, the JavaScript and hidden elements in the HTML can be ignored since they're not part of the content.

Wait, the user also included a Markdown section at the end. Maybe they want the final answer in Markdown format, so I should ensure that the conversion is accurate and follows standard Markdown syntax. Let me check each post's content and structure them accordingly.

Another thing to note is the timestamps. They are in the format "13 Mar 2016 07:20", which I can format as "March 13, 2016, 07:20 AM" for better readability, but maybe keeping the original format is better unless specified otherwise.

Also, the user mentioned that the soldering iron works on the UPS but not on the wall socket. That's a key point and should be highlighted. The configuration file line about "temperature_control.hotend.max_pwm" being uncommented is important, so that should be clearly stated.

I should avoid any HTML tags and use proper Markdown elements like headers, lists, bold text, and code blocks where necessary. Let me start structuring each post step by step.
</think>

# Forum Thread: Slow Heating Issue

## Post 1: Original Problem Statement  
**Author:** Chris Leamon  
**Date:** March 13, 2016, 07:20 AM  

I'm experiencing issues with my 3D printer's hot end not heating up properly. The problem started after I had to replace the soldering iron, and it seems to be related to the power supply. When I plug the soldering iron into my computer's UPS, it works fine, but plugging it into the same wall socket (which the UPS is also connected to) doesn't heat it up enough. Could this be a power issue affecting the Smoothieboard?

---

## Post 2: Follow-Up  
**Author:** Chris Leamon  
**Date:** March 13, 2016, 07:29 AM  

I checked the power supply again and confirmed that the outlet is providing 120V. The soldering iron works perfectly when connected to the UPS, but not when plugged directly into the wall. This inconsistency is confusing. Could there be a problem with the power quality or a hidden fault in the circuit?

---

## Post 3: Resolution and Further Insight  
**Author:** Chris Leamon  
**Date:** March 13, 2016, 05:20 PM  

I figured out the issue with the hot end. Somehow, I had uncommented the line `"temperature_control.hotend.max_pwm"` in the configuration file, which limited the heating power. After commenting it out, the hot end started working normally.  

However, the strange part is that the soldering iron still behaves inconsistently. It works perfectly when plugged into the UPS but not when connected directly to the wall socket. This makes me wonder if there's a deeper power issue affecting both the Smoothieboard and the soldering iron. Could this be a sign of a faulty power supply or circuit problem?

---

## Summary of Key Points  
- **Hot end issue resolved** by correcting the configuration file.  
- **UPS vs. wall socket behavior** suggests a potential power quality or circuit problem.  
- **Further investigation** into the power supply and circuitry is recommended.  

Let me know if anyone has experienced similar issues or has insights into power-related problems with 3D printers!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1643706/slow-heating)*
