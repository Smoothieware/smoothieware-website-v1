# HeeksCNC arcs

*Original post date: 2016-01-01*

---

𝔦𝔫𝔰𝔱𝔞𝔫𝔱𝔦𝔞𝔱𝔦𝔬𝔫: Okay, let's see. The user provided a block of HTML code from a forum thread discussing HeeksCNC arcs and wants me to convert it into Markdown. Hmm, first, I need to parse the HTML structure and extract the relevant information.

Looking at the HTML, there are several posts within a div with class "forum-posts". Each post has a "long" and "short" section. The "long" section contains the content of the post, and the "short" has the title and author information. 

The first post is from user "bubba" on February 19, 2015, asking about HeeksCNC arcs not being generated. Then there are replies from "bubba" again, "n3mis15", and "danheeks". Each post has a timestamp, author, and content. 

I need to structure this in Markdown, probably using headers for each post, including the author, date, and content. Also, the replies should be indented or marked as such. Let me check the HTML again to make sure I don't miss any details. 

Wait, the user mentioned "HeeksCNC arcs" and the solution involved modifying a Python file. The key points are the problem description, the solution provided by Dan, and the confirmation from N3MIS15. 

I should start by writing the main question as a heading, then list each reply with their respective details. Using bold for names and dates, and proper indentation for replies. Also, including code snippets where necessary, like the file path and the modification to the Python file. 


I think that's all. Now, I'll format it step by step into Markdown.
</think>

# HeeksCNC Arcs Discussion

## Original Post by bubba (2015-02-19)
**Problem:**  
When using HeeksCNC, arcs are not being generated in the G-code output. The user is asking for help troubleshooting this issue.

---

## Reply by bubba (2015-02-19)
**Clarification:**  
The user is using HeeksCNC and is encountering issues with arcs not being generated in the G-code output. They are seeking assistance to resolve this.

---

## Reply by n3mis15 (2015-02-20)
**Solution Attempt:**  
The user tried modifying the `emc2b.py` file by replacing `iso` with `gcode` in the `write` function. However, this did not resolve the issue.

---

## Reply by danheeks (2015-02-20)
**Solution Provided:**  
The issue is due to HeeksCNC using the `iso` module instead of `gcode` for writing arcs. To fix this, the user should:

1. Open the file `emc2b.py`.
2. Locate the `write` function.
3. Replace `iso` with `gcode` in the relevant section of the code.

This change ensures that arcs are correctly generated in the G-code output.

---

## Confirmation by n3mis15 (2015-02-20)
**Linux File Path:**  
For Linux users, the file is located at:  
`/usr/lib/heekscnc/nc/emc2b.py`

**Result:**  
The solution worked, and arcs are now being generated correctly.

---

## Additional Notes
- The `emc2b.py` file is part of the HeeksCNC post-processing module.
- This fix is specific to versions of HeeksCNC that use the `iso` module for G-code generation.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813112617/http://smoothieware.org/forum/t-1038030/heekscnc-arcs)*
