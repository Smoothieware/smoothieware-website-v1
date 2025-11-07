# Speed quesion

*Original post date: 2016-01-01*

---

# Speed quesion

**Started by:** [nicholasphs](https://web.archive.org/web/20150908233504/http://www.wikidot.com/user:info/nicholasphs)  
**Date:** 04 Apr 2015 02:57  
**Number of posts:** 1  
**RSS:** [New posts](/web/20150908233504/http://smoothieware.org/feed/forum/t-1162965.xml)

## Forum Thread

**Forum** » [Smoothie Firwmare / General](/web/20150908233504/http://smoothieware.org/forum/c-496918/general) » Speed quesion

---

Hello there,

I'm a prusai3 user and just updated my ramps to the smoothie board. It seems that I got some luck to hook up everything correctly and made it work.

However, I have two questions regarding the extruder calibration and speed.

For the extruder part, when[PAD151799]

```c
#define XYZ_STEPS_PER_MM 750
#define EXTRUDER_STEPS_PER_MM 140

vs.

```c
#define XYZ_STEPS_PER_MM 750
#define EXTRUDER_STEPS_PER_MM 140

I wonder if this is also something to do with the feedrate as it's calculated mm/ minute?

Second question, I was told that Smoothie board makes the machine print much faster than the ramps, I wonder in what sense it can be much faster? Is it simply just because the processor is better?

I assume that we all know that there is speed setting in any gcode generation program, for instance, slicer (under the speed setting), is it just by tuning the speed with higher value, then my machine will move faster? If this is the case, I can do this with my old machine and smoothie board doesn't give me any advantage. If I should change any setting in the config file to make it move faster, what is it?

I'm printing the same object in the printer with ramps, it took me 10 mins, but the one with smoothie board took 12 mins…. I wonder how this would happen. Please help me with providing some technical details.

Many thanks.

Best,  
Nicholas

---

**Reply** | [Options](javascript:;)

--- 

**Unfold** | [Speed quesion](javascript:;) by [nicholasphs](https://web.archive.org/web/20150908233504/http://www.wikidot.com/user:info/nicholasphs), 04 Apr 2015 02:57

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1162965/speed-quesion)*
