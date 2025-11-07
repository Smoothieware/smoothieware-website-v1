# Thermocouple Problems on Smoothieboard

*Original post date: 2016-01-01*

---

أشياء

Okay, let's see. The user provided a block of HTML code from a forum thread discussing thermocouple issues with a Smoothieboard, and they want the content converted to Markdown. The main challenge here is to extract the relevant information from the HTML and structure it properly in Markdown.

First, I need to identify the key parts of the HTML. There are two posts: the original question by anonmech and the response by Mesreth. Each post has a title, author, date, and content. The HTML also includes some JavaScript and other elements that aren't relevant to the Markdown conversion.

Starting with the first post. The title is "Thermocouple Problems on Smoothieboard" by anonmech on March 1, 2016. The content describes the problem where the thermocouple readings drop when the motors are active, even though the wires are shielded and the ground is connected. They mention checking the MAX31855 chip and considering a firmware issue.

Next, the second post by Mesreth on March 10, 2016. They confirm the issue and suggest that unshielded wires might be the cause. They mention testing with shielded wires and insulating the wires to mitigate interference from the motors.

I need to structure each post with headers, authors, dates, and the content. Using Markdown headers for each post, maybe with bold for the author and date. The content should be in paragraphs, preserving the original text but without the HTML tags.

Also, the user might want the Markdown to be clean and readable, so avoiding any unnecessary elements. The JavaScript and other hidden divs can be ignored. Making sure that the dates are formatted consistently, perhaps as "March 1, 2016" and "March 10, 2016".

I should check for any other posts or elements, but from the HTML provided, there are only two posts. The "New Post" button and other forum elements aren't part of the content and can be omitted.

Finally, ensuring that the Markdown is properly formatted with correct indentation and headers. Maybe using ### for the post titles, ** for the author and date, and regular paragraphs for the content. Also, including the reply indicator "Re:" in the second post's title.
</think>

# Thermocouple Problems on Smoothieboard

## Original Post by **anonmech** (March 1, 2016)

I'm encountering an issue where the thermocouple readings drop significantly when the motors are active. Here's what I've tried so far:

- Used shielded thermocouple wires
- Ensured proper grounding
- Checked the MAX31855 chip for faults
- Considered a potential firmware issue

The problem persists even with these measures. Any insights or suggestions would be greatly appreciated.

---

## Reply by **Mesreth** (March 10, 2016)

I've encountered a similar issue. Our problem stemmed from using unshielded thermocouple wires, which allowed motor interference to affect the readings. We verified this by insulating the wires until the motor no longer caused interference. 

I received shielded wires today and will begin testing. My recommendation is to ensure you're using sufficiently shielded wires, as the interference is likely coming from the motors themselves.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1630624/thermocouple-problems-on-smoothieboard)*
