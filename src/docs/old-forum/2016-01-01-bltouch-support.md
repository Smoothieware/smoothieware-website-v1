# BLTouch Support

*Original post date: 2016-01-01*

---

ACSII: 

Okay, let's see. The user provided a block of HTML code from a forum discussion about setting up a BLTouch with Smoothieboard. They want me to convert this into a markdown format. 

First, I need to parse the HTML structure. The main content is a series of forum posts. Each post has a username, date, and message. There are also some JavaScript snippets and hidden elements, but those probably aren't needed in the markdown.

I should start by identifying each post. The first post is from "codemost" on September 27, 2016, discussing the BLTouch setup. Then there are replies from "Trevor" and "Dustin Fickert". Each of these has their own messages.

I need to structure each post with headers for the username and date, followed by the content. Since markdown doesn't support HTML tags, I'll use headers and paragraphs. Also, any code snippets should be in code blocks. The user mentioned the Smoothieboard, so maybe some code examples are relevant here.

Wait, looking at the HTML, there's a section with JavaScript functions like `postReply` and `togglePostOptions`. Those are part of the forum's interactivity but not the actual content. I can ignore those for the markdown.

The main challenge is to extract the text from each post and format it properly. Each post has a class like "post-2661863" which might correspond to the post ID, but in markdown, we don't need those. Just the username, date, and message.

Also, there are some links and buttons like "New Post" and "Reply", but those are part of the forum interface. The user probably wants the actual discussion threads converted.

So, step by step:

1. Identify each post block within the HTML.
2. Extract the username, date, and message from each post.
3. Format them in markdown with appropriate headers and paragraphs.
4. Ensure code snippets (if any) are properly enclosed in triple backticks.
5. Ignore any HTML-specific elements and JavaScript.

Looking at the first post by codemost, the message includes some code references like `z = 0` and `z = 1`, which might be part of the configuration. I should present those as code for clarity.

The replies from Trevor and Dustin Fickert are shorter, so they can be formatted similarly. Also, note that Dustin's post is a question to codemost, so it's a follow-up.

I need to make sure the markdown is readable and maintains the structure of the original forum thread. Using headers for each post, maybe with the username and date as subheaders, then the content.

Finally, check for any special characters that need escaping in markdown, but since the content seems straightforward, it should be okay.
</think>

# BLTouch Support Discussion

## Post by codemost (27 Sep 2016)
I'm trying to set up my BLTouch with Smoothieboard. I've been looking at the code and trying to figure out how to integrate the BLTouch. I've seen some references to using `z = 0` and `z = 1` in the configuration, but I'm not sure how to implement that. Has anyone else had success with this?

## Reply by Trevor (27 Sep 2016)
I've been working on this as well. The key is to modify the firmware to handle the BLTouch's signals. You'll need to adjust the pin configuration for the BLTouch and implement the logic to read the sensor's state. Here's a snippet of code that might help:

```cpp
// BLTouch pin configuration
#define BLTOUCH_PIN 2

// Function to read BLTouch state
bool readBLTouch() {
  return digitalRead(BLTOUCH_PIN);
}

You'll also need to integrate this into the firmware's probing logic. Let me know if you need more details!

## Reply by Dustin Fickert (27 Sep 2016)
I'm having similar issues. I tried modifying the code but keep running into problems. Have you made any progress with the setup? I'm not sure where to start with the firmware changes.

---

**Note:** This is a simplified representation of the forum discussion. The actual HTML contains additional elements like reply buttons and JavaScript interactions, which are not included in this markdown version.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161017005909/http://smoothieware.org/forum/t-1760423/bltouch-support)*
