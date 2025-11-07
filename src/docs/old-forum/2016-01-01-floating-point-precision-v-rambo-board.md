# Floating Point Precision v. Rambo Board

*Original post date: 2016-01-01*

---

טלוויז

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to parse the HTML structure to understand the content.

Looking at the HTML, there's a forum thread with two posts. The first post is from JohnStack asking about floating point precision compared to the Rambo Board. The second post is from arthurwolf responding with several points about Smoothstep generation, acceleration, look-ahead, math precision, and temperature control.

I need to convert the HTML elements into Markdown. The main sections are the thread title, the posts, and their content. Each post has a title, author, date, and content. The content includes paragraphs and a list.

First, I'll start with the thread title. The original HTML has a link to the forum, but in Markdown, I can just use the title as a heading. Then, each post should be a section with the author and date, followed by the content.

For the first post, the title is "Floating Point Precision v. Rambo Board" by JohnStack on 11 Apr 2014 18:20. The content is a question about the Smoothstep generation and other factors affecting print quality.

The second post is a reply from arthurwolf, mentioning that they don't have an FPU but use more floating point values. Then a list of possible reasons for better quality.

I need to make sure that the list is properly formatted with hyphens and that the dates are in a consistent format. Also, the links to the forum and user profiles might not be necessary in Markdown unless specified, but the user didn't mention removing them, so I'll keep the usernames and dates as is.

I should check for any HTML entities that need to be converted, like &nbsp; which becomes a space. Also, the JavaScript and script tags can be ignored as they're not part of the content.

Putting it all together, the Markdown should have the thread title as a heading, then each post with the author and date, followed by the content, including the list. Ensuring that the structure is clear and the information is accurately represented.
</think>

# Floating Point Precision v. Rambo Board

## Post by JohnStack (11 Apr 2014 18:20)

We do not have a FPU, that would be able to do floating point calculations faster. However, we do use more floating point (float/double) values when doing the math, instead of fixed point or integer values like in the arduino-based firmwares.

Other possible culprits for the better quality could be:

- More precise (smoother) step generation
- Smoother acceleration
- Longer look-ahead
- More precise math all around
- Better temperature control

I think there is more but it's all I can recall right now :)

## Re: Floating Point Precision v. Rambo Board

### Post by arthurwolf (11 Apr 2014 18:24)

We do not have a FPU, that would be able to do floating point calculations faster. However, we do use more floating point (float/double) values when doing the math, instead of fixed point or integer values like in the arduino-based firmwares.

Other possible culprits for the better quality could be:

- More precise (smoother) step generation
- Smoother acceleration
- Longer look-ahead
- More precise math all around
- Better temperature control

I think there is more but it's all I can recall right now :)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160729112353/http://smoothieware.org/forum/t-844081/floating-point-precision-v-rambo-board)*
