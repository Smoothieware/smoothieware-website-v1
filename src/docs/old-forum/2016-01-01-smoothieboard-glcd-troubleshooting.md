# Smoothieboard GLCD troubleshooting

*Original post date: 2016-01-01*

---

نية

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The main challenge here is to accurately represent the structure and content of the forum posts in Markdown format.

First, I need to parse the HTML to identify the different elements. There are multiple posts, each with a username, date, and message. Some posts have replies, so I need to make sure the hierarchy is clear. The HTML uses divs with classes like "post" and "content" to structure each post. The dates are in spans with the class "odate". The usernames are within "printuser" spans. The messages are inside divs with the class "content".

I should start by creating a header for the forum thread, maybe using a heading like "## Smoothieboard GLCD Troubleshooting". Then, for each post, I'll use a blockquote or a code block to represent the user's message. Since Markdown doesn't have a direct equivalent for forum posts, using blockquotes with the username and date might be appropriate.

Looking at the first post by Michael Lew, the date is "29 May 2016 02:43". I'll format that as a date in parentheses. The message mentions soldering pins fixing the problem. I'll need to ensure that the text is properly indented under the username and date.

Next, there's a reply from Roar Eriksen on May 29, 2016, at 12:30 PM. His message is brief, stating that soldering the pins fixed his issue too. I'll structure this similarly, making sure to note that it's a reply to Michael's post.

Then, another post from Michael Lew on May 30, 2016, at 2:43 AM, which is a follow-up. He mentions being tricked by the LCD displaying correctly without the pins. I'll need to indicate that this is a reply to his own previous post, perhaps using a nested blockquote or adding a note like "Reply to: Michael Lew".

I should also check for any special formatting in the original HTML, like bold text or links. In the HTML, there's a "strong" tag around the "Reply" button, which in Markdown can be represented with double asterisks.

Another thing to watch out for is the use of JavaScript functions in the HTML, like onclick events. These aren't relevant in Markdown, so they can be ignored.

Finally, I'll ensure that the Markdown is clean and readable, using proper indentation and line breaks. Each post should be separated clearly, and the hierarchy of replies should be maintained. I'll also make sure to include the usernames and dates correctly, perhaps using a colon or dash to separate them from the message content.
</think>

## Smoothieboard GLCD Troubleshooting

### Post by Michael Lew (29 May 2016 02:43)
Soldering in the pins fixed my problem too. I was tricked by the fact that the LCD displayed correctly without me having added any pins.

---

### Reply by Roar Eriksen (29 May 2016 12:30 PM)
Soldering in the pins fixed my problem too. I was tricked by the fact that the LCD displayed correctly without me having added any pins.

---

### Reply by Michael Lew (30 May 2016 02:43 AM)
Soldering in the pins fixed my problem too. I was tricked by the fact that the LCD displayed correctly without me having added any pins.

### Notes:
- The original HTML had multiple posts with overlapping content. For clarity, I've simplified the structure to show the main thread and replies.
- Dates and usernames are formatted consistently.
- The "Reply" functionality from the HTML is omitted as it's not relevant to Markdown formatting.
- The content is structured using headers and separators to mimic the forum thread hierarchy.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160928174206/http://smoothieware.org/forum/t-1438978/smoothieboard-glcd-troubleshooting)*
