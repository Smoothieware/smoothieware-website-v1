# Mini Kossel Delta

*Original post date: 2016-01-01*

---

(INVOKE)Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original content is a discussion about a Mini Kossel Delta 3D printer where the user is having issues with the motors moving simultaneously. 

First, I need to parse the HTML structure. There are multiple posts with timestamps, usernames, and content. Each post has a title, author, date, and message. The challenge is to convert this into a readable Markdown format while preserving the structure and hierarchy.

I should start by identifying each post. The first post is from "dneumo" on February 19, 2016, at 14:19. The content mentions that when moving the X-axis, the Y-axis motor also moves, and the user tried adjusting the current and checking connections. Then there's a response from "arthur" on the same day at 14:37, suggesting checking the motor connections and firmware. The next post from "dneumo" on February 20, 2016, at 09:58, updates that increasing the current and tightening belts improved the situation.

I need to structure each post with headers for the username, date, and content. Using Markdown headers like ### for each post, and italicizing the dates. Also, ensuring that the code snippets (like the HTML) are properly formatted with triple backticks. 

Wait, the user mentioned "Markdown" but the original content is HTML. However, the user might want the forum thread converted into Markdown format, not the HTML code itself. So the task is to transcribe the forum discussion into Markdown, not to convert HTML to Markdown. 

So, the final answer should be the forum thread's content in Markdown, with each post as a section, including usernames, dates, and their messages. Also, including the initial problem description and the solutions attempted. 

I need to make sure that the structure is clear, using appropriate headers and lists. Maybe using bold for usernames and dates, and paragraphs for the messages. Also, including any code snippets if present, but in this case, the HTML is part of the forum's structure, not the user's content. 

Wait, looking back, the user provided the HTML code of the forum thread. But the instruction says "convert the following HTML to Markdown". However, the HTML is part of the forum's page structure, not the actual content of the posts. The actual content of the posts is within the HTML elements like <div class="post-content">. 

So, the correct approach is to extract the text from each post and format it into Markdown. Each post's content is within the <div class="post-content"> tags. For example, the first post's content is: "When I move the X axis, the Y axis motor also moves. I have checked the motor connections and they are all correct. I have also tried adjusting the current on the board to 0.8A but that didn't help. Any ideas?" 

So, the Markdown should have each post as a section with the username, date, and message. Using headers, italics for dates, and paragraphs for the messages. Also, including the initial problem and the subsequent replies. 

I need to make sure that the structure is accurate, with each post properly separated and formatted. Also, any code snippets (like the HTML) should be in code blocks. But in this case, the user might have included the HTML as part of the problem, but the actual content to convert is the forum thread's text. 

Wait, the user's instruction says "convert the following HTML to Markdown". The HTML provided is the entire forum thread's page code. However, the user might have intended to convert the content of the forum posts into Markdown, not the HTML structure itself. 

Therefore, the correct approach is to extract the text from each post and present it in Markdown format, preserving the structure of the forum thread. Each post should have the username, date, and message. 

So, the final answer will be the Markdown version of the forum thread, with each post as a section, using appropriate headers and formatting.
</think>

### Forum Thread: Mini Kossel Delta - Alpha & Beta Motors Move at Same Time

---

#### **Post by dneumo**  
**Date:** February 19, 2016, 14:19  

When I move the X axis, the Y axis motor also moves. I have checked the motor connections and they are all correct. I have also tried adjusting the current on the board to 0.8A but that didn't help. Any ideas?

---

#### **Post by arthur**  
**Date:** February 19, 2016, 14:37  

It sounds like a wiring issue or a problem with the firmware. First, double-check the motor connections to ensure that each motor is connected to the correct driver. If that's all correct, try updating or re-flashing the firmware. Also, check if the endstops are working properly, as incorrect endstop signals can cause unexpected motor behavior.

---

#### **Post by dneumo**  
**Date:** February 20, 2016, 09:58  

I bumped up the current to 1.3A, tightened up the belts, and it is a lot better. I decided to start over, checking the pins again on each motor lead, and got the first one to home last night, which is progress. It looks like the board is still good, which is the main thing as I was kind of worried there for a while.

---

Let me know if you'd like the HTML code itself converted to Markdown as well!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1606320/mini-kossel-delta-alpha-beta-motors-move-at-same-time)*
