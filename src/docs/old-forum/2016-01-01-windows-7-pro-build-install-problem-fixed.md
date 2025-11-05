# Windows 7 pro build install problem FIXED

*Original post date: 2016-01-01*

---

[PAD151928]

Okay, let's see. The user provided a conversation between someone named Bob and a forum, discussing issues with building a project on Windows 7. The main problem was about the "move" command failing during the build process, and Bob found out that running the build by double-clicking "BuildShell" instead of using the command line worked. Then he suggested adding Windows instructions to the compile guide.

Now, the user wants me to write a Markdown document based on this. Let me break down the key points from the conversation.

First, the original problem: the build process was failing with an error related to the "move" command. Bob tried running the build from the command line but encountered an "Access Denied" error when trying to move files. He then discovered that double-clicking the "BuildShell" file (which probably launches a script or a batch file) allowed the build to proceed without issues. This suggests that the command line approach had permission issues, while the double-click method used a different context, maybe with elevated privileges or a different working directory.

Next, Bob's solution was to use the "BuildShell" method. He also suggested that the documentation should include Windows-specific instructions, as the existing guides might only cover Linux/macOS. His suggestion is important because it highlights a gap in the documentation for Windows users.

So, the Markdown should outline the problem, the solution (using BuildShell), and the suggestion for documentation. I need to structure it clearly, maybe with headings for Problem, Solution, and Documentation Suggestion. Also, include code blocks for the commands mentioned, like "make clean all" and the note about the output file location.

I should check if there are any technical terms that need explaining, like "BuildShell" or "make clean all," but since the original conversation assumes some familiarity with build processes, maybe it's okay. Also, ensure that the steps are easy to follow, and the suggestion for documentation is clearly presented as a recommendation.

Wait, in the original conversation, Bob mentions that after double-clicking BuildShell, he types "make clean all" in the build window. So the process involves launching BuildShell, which probably opens a terminal or a script interface where the make commands are executed. That's an important detail to include in the solution steps.

Also, the error message about "Access Denied" when moving files might be due to permission issues when running from the command line without admin rights, whereas double-clicking might run the script with higher privileges. That's a possible explanation, but maybe the user doesn't need the technical reason, just the solution.

Including the note about the output file (main.bin in the LPC1768 directory) is also important for users to know where to find the compiled binary.

I should structure the Markdown with clear sections, maybe using headers like "Problem Description," "Solution," and "Documentation Recommendation." Use code blocks for commands, and bullet points for steps. Make sure the language is clear and concise, avoiding jargon where possible.
</think>

# Windows Build Instructions for Project Compilation

## Problem Description
When attempting to compile the project on Windows 7 using the command line, the build process fails with an "Access Denied" error during the `move` operation. This typically occurs due to permission issues or incorrect working directory settings when executing commands directly from the terminal.

## Solution: Using BuildShell
To successfully compile the project on Windows, follow these steps:

1. **Launch BuildShell**:
   - Double-click the `BuildShell` file (this likely opens a terminal or script interface configured for the build process).

2. **Execute Build Commands**:
   - In the opened terminal, type the following command and press Enter:
     ```bash
     make clean all
     ```
   - This command will:
     - Clean the existing build artifacts.
     - Compile the source code from scratch.

3. **Locate the Output File**:
   - After a successful build, the compiled binary file `main.bin` will be located in the `LPC1768` directory.

## Documentation Recommendation
The current compilation instructions may not explicitly cover Windows-specific steps. To improve usability for Windows users, consider adding a dedicated section in the documentation with the following details:

- **Windows Users**:
  - Use the `BuildShell` method by double-clicking the provided file.
  - Execute `make clean all` within the BuildShell terminal.
  - The final output file `main.bin` will be generated in the `LPC1768` directory.

This addition will help Windows users avoid common pitfalls and streamline the build process.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-702962/windows-7-pro-build-install-problem-fixed)*
