# Endstops register fine with M119, Delta printer won't stop after G28

*Original post date: 2016-01-01*

---

dreampine: Okay, let's see. The user provided some HTML code from a forum thread and wants me to convert it into Markdown. Hmm, the HTML has multiple posts with replies. I need to structure them properly in Markdown.

First, I'll start with the original post by alex7575. The title is "Endstops register fine with M119, Delta printer won't stop after G28". The content mentions issues with the printer not stopping after G28, endstops working in M119, and problems with Pronterface and Simplify3D. I'll format that as a heading and then the body.

Next, the reply from the same user, which is an update. They mention fixing the endstop wiring and the problem being resolved. That should be a reply under the original post, maybe using a blockquote or a separate section with a note that it's a follow-up.

Then there's a reply from arthurwolf. He mentions Pronterface being supported and the reset command. I'll format that as another reply, perhaps with a different indentation or marker to show it's a subsequent comment.

I need to make sure each post is clearly separated, maybe using headers for each post and replies. Also, check for any code snippets or commands to format them properly, like backticks for G-code commands. Let me go through each part step by step to ensure nothing is missed.
</think>

# Endstops register fine with M119, Delta printer won't stop after G28

I'm having an issue with my Delta printer where it doesn't stop after sending the G28 command, even though the endstops are registering correctly in M119. Here are the details:

- **Printer type**: Delta
- **Firmware**: Marlin (I believe)
- **Issue**: After sending G28, the printer doesn't stop homing. It just keeps moving.
- **Endstops**: They work as confirmed by M119 (shows "X min endstop triggered", etc.)
- **Software**: Pronterface and Simplify3D are both having issues. Pronterface doesn't connect at all, and Simplify3D's reset button doesn't work.

Any ideas on what could be causing this? I've checked the wiring for the endstops and it seems fine.

---

## Update from alex7575

I figured out the issue! It was a problem with the endstop wiring. I had a loose connection on one of the endstop pins. After tightening it, everything works perfectly now. G28 homes correctly, and Pronterface connects without issues. Thanks to everyone for their help!

---

## Reply from arthurwolf

Hey there!

Pronterface should work too—it's our most supported host. If you're still having trouble with Simplify3D, you can manually send the "reset" command to reset the board if needed.

Cheers.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1088903/endstops-register-fine-with-m119-delta-printer-won-t-stop-af)*
