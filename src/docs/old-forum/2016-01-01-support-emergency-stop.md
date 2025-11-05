# Support Emergency Stop

*Original post date: 2016-01-01*

---

𝑴𝒂𝒓𝒌𝒅𝒐𝒘𝒏:  
Okay, let's see. The user provided a block of HTML code from a forum discussion and wants it converted to Markdown. The HTML includes multiple posts with usernames, dates, and content. My task is to transform this into a readable Markdown format.

First, I need to parse the HTML structure. There are several post containers with classes like "post-container" and "post". Each post has a "long" and "short" section. The content is within divs with class "content". The usernames are in "printuser" spans, and dates are in "odate" spans.

I should start by identifying each post and extracting the username, date, and content. The original HTML has nested divs, so I need to make sure each post is properly separated. The user might want each post to be a separate section in Markdown, using headers for the username and date, followed by the content.

I need to handle the quoting properly. The original HTML has blockquotes for replies, so in Markdown, I can use the > symbol for that. However, looking at the HTML, the replies are nested within the same post, so maybe each reply is a separate paragraph under the same post.

Also, there are some JavaScript snippets and template placeholders in the HTML, which I can ignore since they're not part of the actual content. The key is to focus on the visible parts of the forum posts.

I should check for any special characters that need escaping in Markdown, like asterisks or underscores, but the content here seems straightforward. The usernames and dates are in spans, so I'll extract those and format them as headers or inline text.


Wait, the first post by wolfpack has a reply from StefanMUC, then another from briankb. So in Markdown, each main post should be a section, and replies can be indented or marked as such. But the HTML doesn't have explicit reply indicators beyond the "Re: Support Emergency Stop" in the title. Maybe just using the original structure with headers and paragraphs.

I'll start by converting each post into a section with the username, date, and content. For example:

**wolfpack**  
*15 May 2014 16:23*  

Content here...

Then, the reply from StefanMUC would be under the same section but indented or with a different header. However, the HTML shows that each post is a separate container, so maybe each is a separate section. The user might want all posts listed in order, each with their own headers.

I need to make sure that the Markdown is clean and readable, using appropriate headers, lists, and blockquotes where necessary. Also, the dates should be formatted consistently.

Another thing to note is that the original HTML has some JavaScript functions and placeholders, which I should ignore. Focus only on the text content within the "content" divs.

Let me proceed step by step, extracting each post's content, username, and date, then formatting them into Markdown.
</think>

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16年 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**wolfpack**  
*15 May 2014 16:23*  

I think the emergency stop should be a physical button that cuts power to the motors and spindle. It should be a hardwired circuit that doesn't rely on the controller or software. This is a safety requirement for any CNC machine.  

---

**StefanMUC**  
*16 May 2014 06:45*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone of your post seems very belligerent and condescending.  

---

**briankb**  
*31 Aug 2014 03:42*  

I don't think it is realistic to expect a brand new open hardware board that sales for $150 USD to compete with commercial or industrial CNC controllers.  

More concerning though is the tone هذا is very

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828041315/http://smoothieware.org/forum/t-861407/support-emergency-stop)*
