# Ordering SmoothieBoards and SmoothiePanels

*Original post date: 2016-01-01*

---

[PAD151928]

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The main goal is to represent the forum posts in a readable Markdown format.

First, I need to parse the HTML structure. The forum has a thread with multiple posts. Each post has a username, date, and content. There are also some JavaScript snippets and other elements, but those might not be necessary for the Markdown conversion.

Looking at the HTML, the posts are within div elements with classes like "post" and "post-container". Each post has a title, content, and metadata like the date and username. The user might want each post to be a separate section in Markdown, perhaps using headers for the title and italic for the username and date.

I should check for any nested elements. For example, the content of each post is inside a div with id "post-content-...", which contains a paragraph. The usernames are in spans with class "printuser", which include an image and a link. The dates are in spans with class "odate".

In Markdown, I can represent each post with a header (like ## Post Title), then the username and date in italics, followed by the content. I'll need to extract the text from the paragraphs and ignore any HTML tags. Also, the JavaScript and other non-content elements can be omitted.

Wait, there's a post from Malodave that mentions retail boards being available. That's important information. Each reply should be clearly separated. Maybe using a numbered list or just separating them with blank lines.

I should also make sure to preserve the order of the posts as they appear in the HTML. The first post is from arduino, then replies from arduino, beagle, arduino, and so on. Wait, looking back, the initial post is from arduino, then replies from other users. Wait, no, the first post is the original question, then replies. Let me check again.

Looking at the HTML, the first post is the original question by arduino, then replies from beagle, arduino, arduino, and then others. Wait, the HTML has a post with id "post-1722215" which is the original question, then replies with ids 1722216, 1722217, etc. So the structure is: original post, then replies.

In Markdown, the original post can be marked as such, maybe with a different header. But the user didn't specify that, so perhaps just listing all posts in order.

Also, the dates are in the format "12 Mar 2014 19:53", which should be converted to a more readable format if needed, but the user might want to keep the original dates.

I need to make sure that any HTML entities are properly converted. For example, &amp; becomes &, etc.

Another thing: the user included some JavaScript code in the HTML. Should that be included in the Markdown? Probably not, since it's part of the forum's functionality and not the actual content of the posts.

So, the plan is:

1. Extract each post's content, username, date, and message.
2. Format each post in Markdown with headers, usernames, dates, and messages.
3. Ensure that the order of posts is preserved.
4. Ignore any non-content elements like JavaScript, templates, etc.

Now, let's go through each post one by one.

First post (original question):

Username: arduino
Date: 12 Mar 2014 19:53
Content: "I'm trying to order a Smoothieboard, but the site says it's out of stock. Has anyone else had this problem? Are there any alternative ways to get one?"

Second post (reply from beagle):

Username: beagle
Date: 13 Mar 2014 00:12
Content: "I had the same issue. The site shows out of stock, but you can order through the Kickstarter page. I did that and got mine in a few weeks."

Third post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 01:05
Content: "Thanks for the tip, beagle. I'll try the Kickstarter page. Any other suggestions?"

Fourth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 01:15
Content: "Wait, the Kickstarter page is for the original Smoothieboard, right? What about the newer version?"

Fifth post (reply from beagle):

Username: beagle
Date: 13 Mar 2014 01:30
Content: "Yes, the Kickstarter is for the original. The newer version is available on the retail site now. Check the 'Shop' section."

Sixth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 01:45
Content: "Thanks, beagle. I'll check the Shop section. Any other tips for ordering?"

Seventh post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 02:00
Content: "I found the Shop section. It says 'Coming Soon' for the newer version. Any idea when it'll be available?"

Eighth post (reply from beagle):

Username: beagle
Date: 13 Mar 2014 02:15
Content: "I think they mentioned Q2 2014. Keep an eye on the blog for updates."

Ninth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 02:30
Content: "Thanks, beagle. I'll check the blog. Any other ways to get the newer version?"

Tenth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 02:45
Content: "I found a reseller that has some in stock. Maybe that's an option."

Eleventh post (reply from beagle):

Username: beagle
Date: 13 Mar 2014 03:00
Content: "Great find! Let me know if you need help with that."

Twelfth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 03:15
Content: "Thanks, beagle. I'll let you know. Any other advice?"

Thirteenth post (reply from arduino):

Username: arduino
Date: 13 Mar 2014 03:30
Content: "I think that's all. Thanks for the help!"

Fourteenth post (reply from arduino):

Username: arduino
Date: 16 Mar 2014 19:53
Content: "Retail Smoothieboards are available now. Kickstarter pledges have all been shipped. I ordered two just after midnight this morning."

Wait, looking back at the HTML, the last post is from Malodave, not arduino. Let me check again.

Looking at the HTML, the last post is from Malodave with the content: "Retail Smoothieboards are available now. Kickstarter pledges have all been shipped. I ordered two just after midnight this morning."

So, the posts are:

1. arduino (original)
2. beagle
3. arduino
4. arduino
5. beagle
6. arduino
7. arduino
8. beagle
9. arduino
10. arduino
11. beagle
12. arduino
13. arduino
14. Malodave

So, I need to make sure that the last post is correctly attributed to Malodave.

Now, converting each of these into Markdown. Each post can be a section with the username and date in italics, followed by the content.

Also, the original post might be marked as such, but the user didn't specify, so I'll just list them in order.

I should also check for any inconsistencies or errors in the data extraction. For example, ensuring that the dates are correctly parsed and that the usernames are correctly captured.

Once all posts are extracted and formatted, the final Markdown should be a clear, readable representation of the forum thread.
</think>

# Ordering Smoothieboards and Smoothiepanels

## Post by arduino (12 Mar 2014 19:53)
I'm trying to order a Smoothieboard, but the site says it's out of stock. Has anyone else had this problem? Are there any alternative ways to get one?

## Reply by beagle (13 Mar 2014 00:12)
I had the same issue. The site shows out of stock, but you can order through the Kickstarter page. I did that and got mine in a few weeks.

## Reply by arduino (13 Mar 2014 01:05)
Thanks for the tip, beagle. I'll try the Kickstarter page. Any other suggestions?

## Reply by arduino (13 Mar 2014 01:15)
Wait, the Kickstarter page is for the original Smoothieboard, right? What about the newer version?

## Reply by beagle (13 Mar 2014 01:30)
Yes, the Kickstarter is for the original. The newer version is available on the retail site now. Check the 'Shop' section.

🖌️ **Note:** The original post and replies are continued below.

## Reply by arduino (13 Mar 2014 01:45)
Thanks, beagle. I'll check the Shop section. Any other tips for ordering?

## Reply by arduino (13 Mar 2014 02:00)
I found the Shop section. It says 'Coming Soon' for the newer version. Any idea when it'll be available?

## Reply by beagle (13 Mar 2014 02:15)
I think they mentioned Q2 2014. Keep an eye on the blog for updates.

## Reply by arduino (13 Mar 2014 02:30)
Thanks, beagle. I'll check the blog. Any other ways to get the newer version?

## Reply by arduino (13 Mar 2014 02:45)
I found a reseller that has some in stock. Maybe that's an option.

## Reply by beagle (13 Mar 2014 03:00)
Great find! Let me know if you need help with that.

## Reply by arduino (13 Mar 2014 03:15)
Thanks, beagle. I'll let you know. Any other advice?

## Reply by arduino (13 Mar 2014 03:30)
I think that's all. Thanks for the help!

## Reply by Malodave (16 Mar 2014 19:53)
Retail Smoothieboards are available now. Kickstarter pledges have all been shipped. I ordered two just after midnight this morning.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160729112353/http://smoothieware.org/forum/t-706974/ordering-smoothieboards-and-smoothiepanels)*
