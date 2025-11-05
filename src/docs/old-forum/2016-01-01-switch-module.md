# switch module

*Original post date: 2016-01-01*

---

︽

Okay, let's see. The user provided a bunch of HTML code from a forum thread and wants me to convert it into Markdown. Hmm, first, I need to parse the HTML structure to understand the content. There are multiple posts here, each with a title, author, date, and content.

Starting with the first post, the user is talking about an issue with the switch module, specifically that commands with spaces aren't working. The second post from arthurwolf suggests using underscores instead of spaces. Then the user replies that it worked for the G-code command but not for the play command.

I need to structure this into Markdown. Maybe using headers for each post, including the author and date. The content should be in paragraphs. Also, code snippets like the configuration lines should be in backticks. Let me check the HTML again to make sure I capture all the details correctly.

Wait, the HTML has divs with classes like "post-container", "long", "short", etc. Each post has a title, author, date, and content. The user's first post mentions "switch.zplus10.output_on_command" and the problem with spaces. The second post from arthurwolf suggests underscores. The third post from the user again confirms it worked for one case but not the other.

I should make sure each post is clearly separated, maybe with a header like "### Post 1: Original Question" and so on. Also, the code examples need to be properly formatted. Let me structure each post with the author and date, then the content, and code blocks where necessary.

I think that's it. Let me put it all together in Markdown now.
</think>

### Post 1: Original Question  
**Author:** plotosnap  
**Date:** 30 Jun 2014 11:08  

I'm having trouble with the `switch` module when using commands that include spaces. For example:  
```  
switch.zplus10.output_on_command G91 G0 Z10 G90  
```  
This doesn't work, but replacing spaces with underscores like this:  
```  
switch.zplus10.output_on_command G91_G0_Z10_G90  
```  
solved the issue. However, when I tried applying the same logic to another command:  
```  
switch.pplay.output_on_command play_/sd/default.gcode  
```  
it didn't work. I suspect I'll need to modify the panel code to make this work. Thanks for the help!

---

### Post 2: Response from arthurwolf  
**Author:** arthurwolf  
**Date:** 30 Jun 2014 10:29  

Adding underscores solved the problem for:  
```  
switch.zplus10.output_on_command G91_G0_Z10_G90  
```  
You might need to adjust the syntax for the `play` command. Let me know if you need further assistance!

---

### Post 3: Follow-up from plotosnap  
**Author:** plotosnap  
**Date:** 30 Jun 2014 11:08  

Thanks for the help! The underscore approach worked for the G-code command, but I'm still stuck with:  
```  
switch.pplay.output_on_command play_/sd/default.gcode  
```  
I think I'll have to dig into the panel code to resolve this. Appreciate the guidance!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150925065715/http://smoothieware.org/forum/t-904100/switch-module)*
