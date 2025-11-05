# LED pwm pins to drive mosfets

*Original post date: 2016-01-01*

---

잼

Okay, let's see. The user provided a block of HTML code from a forum thread and wants me to convert it into Markdown. The original HTML has multiple posts discussing using LED PWM pins to drive MOSFETs, with users Jitu and Arthurwolf exchanging messages.

First, I need to parse the HTML structure. The main container has several posts, each with a username, date, and message. The challenge is to convert each post into a Markdown format that's readable and preserves the structure.

I'll start by identifying each post. The first post is from Jitu on August 30, 2014, mentioning that uncommenting a line in the configuration solved the issue. Then Arthurwolf responds on September 8, suggesting using other pins and making LED pins inputs.

I need to use headers for each post, maybe with the username and date. Since Markdown doesn't have a specific syntax for forum posts, I'll use bold for usernames and dates, and separate each post with a line break. Also, the links in the HTML (like the permalink) might not be necessary in Markdown, so I can omit them unless specified.

I should check for any special characters or formatting in the text. The original HTML has some JavaScript and inline styles, but those can be ignored in Markdown. The key is to keep the conversation flow clear.

Another thing is the dates. The dates are in the format "30 Aug 2014 13:23" which I can format as "August 30, 2014" for better readability. Also, the usernames are in links, but in Markdown, I can just use bold text for the names.

I'll structure each post with the username, date, and message, using proper indentation and line breaks. Making sure that the replies are properly nested under the original post if needed, but since the HTML doesn't show nesting, maybe just list them in order.

Finally, I'll review the Markdown to ensure it's clean and follows standard formatting without any HTML tags.
</think>


---

### **Jitu**  
**August 30, 2014**  
Uncommenting the line in the configuration file solved the issue. The problem was that the LED PWM pins were being used for something else, and by freeing them up, the MOSFETs could be driven properly.

---

### **Arthurwolf**  
**September 8, 2014**  
You can use other pins for this task and repurpose the LED pins as inputs instead. This should resolve the issue you're experiencing.  

---

This format maintains the original conversation flow, clearly attributing each message to the respective user and date. Let me know if you'd like further refinements!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925061530/http://smoothieware.org/forum/t-982387/led-pwm-pins-to-drive-mosfets)*
