# New Config Example

*Original post date: 2016-01-01*

---

döneminde

Okay, let's tackle this. The user provided a lot of HTML code from a forum thread and wants it converted into Markdown. First, I need to parse through the HTML and extract the relevant parts. The main content seems to be two posts: one from gyurma and a reply from arthurwolf.

Looking at the HTML structure, there are divs with classes like "post-container" and "content" that contain the actual text. The user mentioned that navigation elements, buttons, and scripts should be ignored. So I'll focus on the text within the posts.

The first post by gyurma is asking for a new config example, pointing out a discrepancy between "acceleration_checksum" in the code and "extruder_acceleration" in the config. The second post by arthurwolf responds, clarifying that "acceleration_checksum" corresponds to "acceleration" and mentions adding switches to the config file, with a note about GitHub issues.

I need to structure these into Markdown, probably using headers for each post, including the usernames and timestamps. Also, the GitHub link should be a hyperlink. I should make sure to preserve the original message's intent and details, avoiding any HTML tags and using proper Markdown syntax like bold for usernames and links.

Wait, the user also mentioned that the final answer should not have any markdown. But the example response they provided does use markdown. Hmm, maybe they want the thinking process in natural language and the final answer in markdown. Let me check the original query again.

The user wrote: "Please reason step by step, and put your final answer within \boxed{}." But then provided an example where the assistant's answer is in markdown. Maybe there's a confusion here. However, the user's instruction says to put the final answer within \boxed{}, which is typically for math answers. But since the task is to convert HTML to Markdown, perhaps the user expects the Markdown code as the answer. However, the example shows the assistant's answer in markdown without the box. Maybe the user made a mistake in the instructions. Regardless, following the example, I'll provide the Markdown as the final answer.

So, structuring each post with headers, usernames in bold, timestamps, and the content. Also, converting the GitHub link into a proper Markdown link. Making sure there are no HTML tags left and that the text is properly formatted.
</think>

# New Config Example

**gyurma** - 22 Jul 2012 12:00

Hi !

"acceleration_checksum" in the code is for the "acceleration" config option, not the "extruder_acceleration" option ( not implemented right now ).

I added switch and other stuff to the example config file, I still need to document all of that, will do soon.

If you notice anything else wrong, don't hesitate to tell me.

Also if you want anything specific documented, you can create an issue on github: [https://github.com/arthurwolf/Smoothie/issues?direction=desc&sort=created&state=open](https://github.com/arthurwolf/Smoothie/issues?direction=desc&sort=created&state=open), that makes it much easier for me to keep track of what needs to be done

+

# Re: New Config Example

**arthurwolf** - 22 Jul 2012 12:20

Hi !

"acceleration_checksum" in the code is for the "acceleration" config option, not the "extruder_acceleration" option ( not implemented right now ).

I added switch and other stuff to the example config file, I still need to document all of that, will do soon.

If you notice anything else wrong, don't hesitate to tell me.

Also if you want anything specific documented, you can create an issue on github: [https://github.com/arthurwolf/Smoothie/issues?direction=desc&sort=created&state=open](https://github.com/arthurwolf/Smoothie/issues?direction=desc&sort=created&state=open), that makes it much easier for me to keep track of what needs to be done

+

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-533464/new-config-example)*
