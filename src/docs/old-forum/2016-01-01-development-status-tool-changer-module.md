# Development status,  tool changer module?

*Original post date: 2016-01-01*

---

/



Okay, let's see. The user provided a block of HTML and JavaScript code from a forum thread discussion about the development status of a tool changer module in Smoothie. They also mentioned that the user wants the content converted into Markdown. 

First, I need to parse the HTML to extract the relevant information. The HTML seems to be part of a forum thread with multiple posts. Each post has a username, timestamp, and content. The challenge is to convert this structured data into a Markdown format that's readable and preserves the conversation flow.

Looking at the HTML structure, each post is within a div with class "post-container". Inside each, there's a "post" div containing the head with user info and the content. The content includes text, code blocks, and some formatting like bold and italic. There are also edits and revisions noted in some posts.

I need to make sure that each post is properly formatted with headers for the user and timestamp, and that the content is accurately represented. Code blocks should be enclosed in triple backticks, and any emphasis (like bold or italic) should be converted using Markdown syntax. Also, the edits and revisions mentioned in some posts need to be noted appropriately.

I should check for any special characters or HTML entities that need to be escaped in Markdown. For example, the code block in one of the posts uses <code> tags, which should be converted to triple backticks. Also, the timestamps are in a specific format that should be preserved.

Another thing to note is the use of "M872" and "M873" commands proposed by the user. These are specific G-code commands, so they should be presented clearly, perhaps using code formatting.

I need to ensure that the Markdown structure is logical, with each post separated by a line, and that the conversation flow is maintained. Also, any links or references to other parts of the forum (like the permalink) should be converted into clickable links if possible, but since the user didn't specify, maybe just plain text is sufficient.

Finally, I'll review the converted Markdown to ensure that all information is accurately represented, formatting is correct, and the content is easy to read.
</think>

# Development Status: Tool Changer Module

## Post 1
**Author:** arthurwolf  
**Timestamp:** 14 Jun 2015 10:50

So, to CNC users, `T1` definitely means "move to actually change the tool to tool1". We can't really break that.

Most CAM packages I've seen generate `T1`, not `M6 T1`.

Which is why I'm so upset at the dumb way Marlin and others have implemented the temperature settings thing. They essentially broke G-code... :).

In short: they shouldn't be using `T` as the parameter here. `T` is like `M` and `G`, it's never to be used as a parameter.

So we have to find a way out of this, that doesn't break things for CNC users.

My proposed solution is ugly, but would work:


M872 = T commands do not produce movement from now on
M873 = T commands do produce movement from now on

With a default to producing movement (so CNC users are happy).

Meaning that a slicing program would have to do:

```gcode
M872
T2 
M104 S220 
T1
M104 S200
M873
T1

This is ugly, but it's the guys who completely ignored how G-code works' fault.

## Post 2
**Author:** foobar  
**Timestamp:** 14 Jun 2015 10:39

So, to CNC users, `T1` definitely means "move to actually change the tool to tool1". We can't really break that.

Most CAM packages I've seen generate `T1`, not `M6 T1`.

Which is why I'm so upset at the dumb way Marlin and others have implemented the temperature settings thing. They essentially broke G-code... :).

In short: they shouldn't be using `T` as the parameter here. `T` is like `M` and `G`, it's never to be used as a parameter.

So we have to find a way out of this, that doesn't break things for CNC users.

My proposed solution is ugly, but would work:


M872 = T commands do not produce movement from now on
M873 = T commands do produce movement from now on

With a default to producing movement (so CNC users are happy).

Meaning that a slicing program would have to do:

```gcode
M872
T2 
M104 S220 
T1
M104 S200
M873
T1

This is ugly, but it's the guys who completely ignored how G-code works' fault.

## Post 3
**Author:** foobar  
**Timestamp:** 14 Jun 2015 10:50

So, to CNC users, `T1` definitely means "move to actually change the tool to tool1". We can't really break that.

Most CAM packages I've seen generate `T1`, not `M6 T1`.

Which is why I'm so upset at the dumb way Marlin and others have implemented the temperature settings thing. They essentially broke G-code... :).

In short: they shouldn't be using `T` as the parameter here. `T` is like `M` and `G`, it's never to be used as a parameter.

So we have to find a way out of this, that doesn't break things for CNC users.

My proposed solution is ugly, but would work:


M872 = T commands do not produce movement from now on
M873 = T commands do produce movement from now on

With a default to producing movement (so CNC users are happy).

Meaning that a slicing program would have to do:

```gcode
M872
T2 
M104 S220 
T1
M104 S200
M873
T1

This is ugly, but it's the guys who completely ignored how G-code works' fault.

## Post 4
**Author:** arthurwolf  
**Timestamp:** 14 Jun 2015 10:39

So, to CNC users, `T1` definitely means "move to actually change the tool to tool1". We can't really break that.

Most CAM packages I've seen generate `T1`, not `M6 T1`.

Which is why I'm so upset at the dumb way Marlin and others have implemented the temperature settings thing. They essentially broke G-code... :).

In short: they shouldn't be using `T` as the parameter here. `T` is like `M` and `G`, it's never to be used as a parameter.

So we have to find a way out of this, that doesn't break things for CNC users.

My proposed solution is ugly, but would work:


M872 = T commands do not produce movement from now on
M873 = T commands do produce movement from now on

With a default to producing movement (so CNC users are happy).

Meaning that a slicing program would have to do:

```gcode
M872
T2 
M104 S220 
T1
M104 S200
M873
T1

This is ugly, but it's the guys who completely ignored how G-code works' fault.

## Post 5
**Author:** foobar  
**Timestamp:** 14 Jun 2015 10:50

So, to CNC users, `T1` definitely means "move to actually change the tool to tool1". We can't really break that.

Most CAM packages I've seen generate `T1`, not `M6 T1`.

Which is why I'm so upset at the dumb way Marlin and others have implemented the temperature settings thing. They essentially broke G-code... :).

In short: they shouldn't be using `T` as the parameter here. `T` is like `M` and `G`, it's never to be used as a parameter.

So we have to find a way out of this, that doesn't break things for CNC users.

My proposed solution is ugly, but would work:


M872 = T commands do not produce movement from now on
M873 = T commands do produce movement from now on

With a default to producing movement (so CNC users are happy).

Meaning that a slicing program would have to do:

```gcode
M872
T2 
M104 S220 
T1
M104 S200
M873
T1

This is ugly, but it's the guys who completely ignored how G-code works' fault.



---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1234393/development-status-tool-changer-module)*
