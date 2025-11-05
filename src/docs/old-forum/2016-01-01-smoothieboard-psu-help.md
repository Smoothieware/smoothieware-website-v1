# Smoothieboard psu help

*Original post date: 2016-01-01*

---

뮨

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original question was about choosing a power supply for a Smoothieboard with specific stepper motors. The user also mentioned that the assistant's previous answer was in Markdown, so they want the same here.

First, I need to parse the HTML content. There are two posts: the original question by nferreira and the response by arthurwolf. The HTML has a lot of structure with divs and classes, but the actual content is in the <div class="content"> sections.

I should start by identifying the main elements. The first post is the user's question, and the second is the reply. Each post has a title, author, date, and content. The Markdown should reflect this structure with headers for each post, maybe using ### for the titles, and italicizing the author and date.

Looking at the content of the first post: the user is asking about the power supply voltage for their stepper motors, which are rated at 5V but they mention using them in series for 12V. The response from arthurwolf says to ignore the rated voltage and use 12V or 24V.

I need to make sure that the Markdown accurately represents the original HTML's structure and content. Also, the user might want the Markdown to be clean and easy to read, with proper formatting for quotes, emphasis, and links if any. However, in this case, there are no links, just text.

I should check for any special characters that need escaping in Markdown, but the content here seems straightforward. The dates are in the format "10 Sep 2013 16:56", which can be kept as is.

Another thing to note is that the original HTML has some JavaScript and other elements that aren't relevant to the Markdown conversion. I can ignore those and focus on the text content.

So, the plan is:

1. For each post, create a header with the title.
2. Under the header, include the author and date in italics.
3. Then, the content of the post, using proper line breaks and paragraphs.


### Smoothieboard psu help
*by nferreira, 10 Sep 2013 16:56*

Hi! I have some stepper motors rated at 5V, but I'm using them in series for 12V. The Smoothieboard's documentation says the power supply should be between 12V and 24V. Should I use 12V or 24V? What's the best practice here?

Then the reply:

### Re: Smoothieboard psu help
*by arthurwolf, 10 Sep 2013 20:04*

Hi! The rated voltage for your stepper motors is a pretty meaningless value. Just ignore it. Stepper motors should be run with a 12V or a 24V power supply. Cheers :)

I need to make sure that the formatting is correct. Using ### for the titles, * for the author and date, and keeping the content as is. Also, check if the user's original question had any specific details that need to be included. The user mentioned the motors are rated at 5V but used in series for 12V, which is important context.

Yes, that's all covered. The Markdown should now accurately represent the original HTML content with proper structure and formatting.
</think>

### Smoothieboard psu help  
*by [nferreira](https://web.archive.org/web/20150501134035/http://www.wikidot.com/user:info/nferreira), 10 Sep 2013 16:56*  

Hi! I have some stepper motors rated at 5V, but I'm using them in series for 12V. The Smoothieboard's documentation says the power supply should be between 12V and 24V. Should I use 12V or 24V? What's the best practice here?  

---

### Re: Smoothieboard psu help  
*by [arthurwolf](https://web.archive.org/web/20150501134035/http://www.wikidot.com/user:info/arthurwolf), 10 Sep 2013 20:04*  

Hi! The rated voltage for your stepper motors is a pretty meaningless value. Just ignore it. Stepper motors should be run with a 12V or a 24V power supply. Cheers :)  

---  

**Note:** The original HTML content has been converted into a clean Markdown format, preserving the structure, authorship, and context of the discussion.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-693718/smoothieboard-psu-help)*
