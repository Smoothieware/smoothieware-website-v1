# Windows 8 compilation possible?

*Original post date: 2016-01-01*

---

콱

Okay, let's see. The user provided a block of HTML code from a forum thread discussing whether Windows 8 can compile a project, probably related to some software like Smoothie. They also mentioned that the assistant should use the markdown format and avoid using any markdown in the thinking process. The user wants the assistant to act as a helpful assistant, so I need to figure out what the user is asking for.

First, looking at the HTML, there are several posts. The first post by AdamGr is asking if it's possible to compile on Windows 8. Then, brewmanchu responds that they tried and it worked, but there might be issues with the PATH. Then, arthurwolf mentions that AdamGr fixed the issue, pointing to a GitHub commit. 

The user might want a summary of this discussion in markdown. They might be looking for a concise overview of the problem, the attempts to solve it, and the resolution. Alternatively, they might want to know how to compile on Windows 8 based on the discussion. 

Since the original HTML is a forum thread, the user could be asking for a structured summary of the thread. The assistant should extract the key points: the initial problem, the attempts to resolve it, the fix provided by AdamGr, and the confirmation from arthurwolf. 

I need to make sure the markdown is well-structured, maybe using headings, bullet points, and code blocks for the GitHub link. Also, check if there's any specific information the user needs, like steps to fix the compilation issue on Windows 8. 

The user might not have explicitly asked a question but provided the HTML for context. So, the assistant should present the information in a clear, organized manner, highlighting the solution provided in the commit link. 

I should avoid any markdown in the thinking process but use it in the final answer. Make sure the answer is helpful, concise, and addresses the main points of the forum discussion.
</think>

# Discussion: Windows 8 Compilation Possibility

## Initial Inquiry
**AdamGr** asked:  
> Is it possible to compile on Windows 8?

## Responses and Solutions

### 1. **brewmanchu's Attempt**
- **Date:** August 14, 2013  
- **Key Points:**  
  - Successfully compiled on Windows 8.  
  - Noted potential issues with the `PATH` environment variable.  
  - Suggested checking for differences in command-line tools between Windows 8 and other OSes.

### 2. **arthurwolf's Resolution**
- **Date:** August 18, 2013  
- **Key Points:**  
  - **AdamGr** fixed the issue.  
  - Provided a [GitHub commit](https://github.com/arthurwolf/Smoothie/commit/309f0aaa3e16844882868814f76885ccb12dec7c) addressing the problem.  
  - Advised users to try the latest version ("edge") for compatibility.

## Summary
- **Compilation on Windows 8 is possible** after applying the fix from the referenced GitHub commit.  
- Ensure environment variables (e.g., `PATH`) are correctly configured.  
- Use the latest version of the project for optimal compatibility.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-682975/windows-8-compilation-possible)*
