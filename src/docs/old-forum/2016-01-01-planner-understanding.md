# planner understanding

*Original post date: 2016-01-01*

---


Forum → 3D Printing → RepRap → Firmware → [planner understanding](#post-1492754)

### planner understanding
**by [xblades](https://web.archive.org/web/20150430192727/http://www.wikidot.com/user:info/xblades), 28 Jun 2012 08:22**

Hi!  
I'm trying to understand how the planner works in the firmware for a 3D printer. Specifically, I'm curious about whether there are separate planners for each axis or if there's a single planner that coordinates all axes. Could someone explain how the planner handles acceleration/deceleration curves for multiple axes simultaneously?

---

### Re: planner understanding
**by [arthurwolf](https://web.archive.org/web/20150430192727/http://www.wikidot.com/user:info/arthurwolf), 28 Jun 2012 08:26**

There is only one planner for all axes. It computes acceleration/deceleration curves for blocks in advance, those blocks are put into the queue (there is only one), and then the Stepper/Player modules read from that queue and execute it on all axes at once.

---

[New Post](#new-post-button)


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150828075206/http://smoothieware.org/forum/t-513445/planner-understanding)*
