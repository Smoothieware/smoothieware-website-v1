# Buying some Stepper Drivers

*Original post date: 2016-01-01*

---

ᅟ

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original question was about buying stepper drivers for a Smoothie board, and there are two posts in the thread.

First, I need to parse the HTML structure. The main content is within a div with class "page-contents", and inside that, there's a div with class "wiki-content". Within that, there's a div with class "discussion" containing the forum posts.

Each post has a "long" and "short" version. The "long" version includes the content of the post, while the "short" is a condensed version with the title, author, and date. The user probably wants the Markdown to reflect the structure of the forum thread, with each post as a separate section, including the author, date, and content.

I need to make sure to capture the usernames, dates, and the actual text of each post. The first post is from "ajhalls" on November 20, 2013, asking about stepper drivers. The second reply is from "arthurwolf" on November 29, 2013, explaining that Smoothie can handle up to 2A and suggesting external drivers for bigger ones.

I should use headers for each post, maybe with the username and date in italics. The content of each post should be in paragraphs. Also, the initial question and the answer should be clearly separated. I need to check for any HTML entities or special characters that need to be escaped in Markdown, but in this case, it seems straightforward.


Double-checking the dates and usernames to ensure accuracy. Also, the mention of specific drivers like CW5045 or Gheko should be included as they are important details. Alright, putting it all together now.
</think>

# Buying some Stepper Drivers

## Original Post by ajhalls (20 Nov 2013 19:03)

I'm looking to purchase some stepper drivers for my Smoothie board. I've seen mentions of using external drivers for larger motors, but I'm not entirely sure which ones are compatible or recommended. Could someone clarify:

1. Can the Smoothie board drive stepper motors up to 2A directly?
2. What external drivers are recommended for motors requiring more than 2A?
3. Are there any specific brands or models that are commonly used with Smoothie?

I'm planning to use this setup for a CNC machine, so reliability and performance are key factors.

---

## Reply by arthurwolf (29 Nov 2013 15:28)

Hi!

The Smoothie board can drive stepper motors up to **2A** directly through its onboard drivers. For larger steppers requiring more current, you'll need external drivers such as the **CW5045** or **Gheko drivers**. These external drivers can be connected to the Smoothie board's expansion headers and provide the necessary power and control for high-current motors.

Cheers!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150723181358/http://smoothieware.org/forum/t-730069/buying-some-stepper-drivers)*
