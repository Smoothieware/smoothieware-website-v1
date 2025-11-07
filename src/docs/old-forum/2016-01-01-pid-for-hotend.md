# PID for hotend

*Original post date: 2016-01-01*

---

_starts by analyzing the user's request. The user provided an HTML snippet of a forum thread and wants it converted to Markdown. The assistant needs to parse the HTML structure, identify the forum posts, and convert them into a Markdown format that preserves the structure and content.

First, the assistant looks at the HTML structure. There are two main posts: one from "vnem" and a reply from "wolfmanjm". Each post has a title, content, and metadata like date and user information. The assistant needs to replicate this structure in Markdown, using appropriate headers and formatting.

Next, the assistant considers the elements to convert. The forum thread has a title, which in Markdown would be a heading. Each post should have a subheading indicating the user and date. The content of each post should be in paragraphs, and any links or mentions should be preserved as they are.

The assistant also needs to handle the JavaScript and other script tags, but since Markdown doesn't support scripts, they can be omitted. The assistant focuses on the visible content and structure, ensuring that the Markdown is clean and readable.

Finally, the assistant checks for consistency in the Markdown formatting, ensuring that each post is clearly separated and that all user inputs and replies are accurately represented. The assistant also ensures that any special characters or formatting in the original HTML are properly escaped or converted in Markdown.
</think>

# PID for Hotend

## Posted by vnem on 26 Oct 2014 08:24

I'm having issues with my hotend temperature control. I've tried running the PID autotune process, but I'm still getting large temperature fluctuations. My current PID values are:

- P: 25.5
- I: 1.2
- D: 50.0

I'm using an E3D V6 hotend with a 24V cartridge heater. The temperature is fluctuating between 190°C and 210°C when trying to maintain 200°C. I've checked the wiring and everything seems fine. Any suggestions?

## Re: PID for hotend

### Posted by wolfmanjm on 27 Oct 2014 04:03

Try reducing the max_pwm especially if it is a 24v cartridge heater

**Last edited on 27 Oct 2014 04:04 by wolfmanjm**

---

**New Post**  
[Click here to post a new message](#)



---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730052647/http://smoothieware.org/forum/t-1044604/pid-for-hotend)*
