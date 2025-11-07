# Rep Rap GLCD Custom Menu

*Original post date: 2016-01-01*

---

⽟

Okay, let's tackle this. The user provided an HTML snippet from a forum thread and wants it converted to Markdown. First, I need to understand the structure of the HTML. It looks like a forum post with two replies. The main elements are the thread title, user posts, and some JavaScript at the end.

I should start by identifying the main sections. The first part has the thread title and breadcrumbs. Then there are two posts: the original question by jlmccuan and the reply by arthurwolf. Each post has a long and short version, with details like user info, timestamps, and content.

In Markdown, I'll need to represent the thread title as a heading. The breadcrumbs can be a link. Each post should be a section with the user's name, timestamp, and content. The replies should be indented or marked as such. Also, the links in the HTML need to be converted to Markdown links.

I need to make sure that the JavaScript at the end is omitted since it's not part of the content. Also, the divs with styles like height:150px and page-info-break can be ignored as they're likely for layout purposes.

For the user mentions, like "by jlmccuan", I'll format them as bold or italic. The links in the content, such as the compiling guide, should be converted to [text](url). The buttons like "New Post" and "Permanent Link" might not be necessary in Markdown, so I'll skip them unless they're part of the content.

I should check for any nested elements and ensure proper indentation. Also, the timestamps need to be formatted consistently. Finally, I'll review the Markdown to ensure it's readable and follows standard conventions without any HTML tags.
</think>

# Rep Rap GLCD Custom Menu

## Forum Thread

### Thread Title
Rep Rap GLCD Custom Menu

### Breadcrumbs
[Home](https://web.archive.org/web/20160323013757/http://smoothieware.org/) > [Forum](https://web.archive.org/web/20160323013757/http://smoothieware.org/forum) > [Compiling Smoothie](https://web.archive.org/web/20160323013757/http://smoothieware.org/compiling-smoothie)

---

## Posts

### Post by **jlmccuan**  
**Date:** 24 Feb 2016 05:43

How can I remove or customize menu items on the GLCD display? I'm using Smoothie firmware and want to modify the interface for specific use cases.

---

### Reply by **arthurwolf**  
**Date:** 24 Feb 2016 09:11

To remove menu items, you'll need to edit the source code and recompile the firmware. See the guide here:  
[Compiling Smoothie](https://web.archive.org/web/20160323013757/http://smoothieware.org/compiling-smoothie)

---

## Actions

[New Post](#)  
[Permanent Link](#)  
[Edit Post](#)  
[Delete Post](#)

---

### Notes:
- The original HTML included JavaScript and layout elements (e.g., `height:150px`, `page-info-break`) which were omitted as they are not content-related.
- User avatars and inline buttons (e.g., "Fold", "Unfold") were simplified to focus on textual content.
- Links were converted to Markdown format for readability.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160323014012/http://smoothieware.org/forum/t-1613216/rep-rap-glcd-custom-menu)*
