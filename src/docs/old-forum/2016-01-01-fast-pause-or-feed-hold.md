# Fast Pause or feed hold

*Original post date: 2016-01-01*

---

㌫

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants the corresponding Markdown. First, I need to parse the HTML structure to extract the relevant information.

Looking at the HTML, there are two posts. The first one is from "moorefactory" asking about fast pause or feed hold. The second is a reply from "arthurwolf" suggesting adjusting the queue size and checking the firmware version.

I need to convert these into Markdown format. The main elements are the usernames, dates, and the content of each post. Also, the reply should be indented to show it's a response.

I should make sure to use proper headers for each post, maybe using bold for usernames and dates. The replies should be nested under the original post. Also, any links or mentions of firmware versions should be kept as is.

Wait, the original HTML has some JavaScript and other elements, but those aren't needed in the Markdown. Focus only on the text content of the posts. Also, check for any special characters that need escaping in Markdown, but in this case, it seems straightforward.

</think>

# Fast Pause or Feed Hold

## Post by moorefactory (11 Aug 2016 12:22)

Hello,

I'm trying to implement a fast pause or feed hold feature for my CNC machine using the Smoothieboard firmware. I've been experimenting with adjusting the queue size and block size parameters, but I'm not achieving the expected responsiveness. Even with small block sizes (e.g., 0.1mm) and a 32-block queue, the machine seems to wait for the G-code move to complete before stopping.

I'm using the Smoothieboard firmware version 1.0.1. Is there a specific configuration or parameter I should be adjusting to achieve a faster response time during pauses or feed holds?

Thanks in advance for any guidance!

---

## Reply by arthurwolf (12 Aug 2016 16:15)

Hello,

You're on the right track with your approach. To achieve a faster response time during pauses or feed holds, you should ensure that the queue only contains small blocks. For example, with blocks of 0.1mm, a 32-block queue should stop in about 3.2mm. This distance could easily be made much smaller by reducing the queue size or block size further.

I'm not sure why you're experiencing a delay if you've already tried this configuration. It definitely shouldn't be "waiting for the G-code move before stopping" – that's not how the firmware works. Please confirm that you're using the latest version of the firmware, as there may have been improvements or bug fixes related to this functionality in more recent releases.

Cheers.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1785078/fast-pause-or-feed-hold)*
