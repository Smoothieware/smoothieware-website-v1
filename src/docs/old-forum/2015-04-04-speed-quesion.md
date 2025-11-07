# Speed quesion

*Original post date: 2016-01-01*

---

# Forum Thread

## Speed quesion

**Started by:** [nicholasphs](https://web.archive.org/web/20150908233504/http://www.wikidot.com/user:info/nicholasphs)  
**Date:** 04 Apr 2015 02:57  
**Number of posts:** 1  
**RSS:** [New posts](/web/20150908233504/http://smoothieware.org/feed/forum/t-1162965.xml)

---

### Post by nicholasphs

Hello there,

I'm a prusai3 user and just updated my ramps to the smoothie board. It seems that I got some luck to hook up everything correctly and made it work.

However, I have two questions regarding the extruder calibration and speed.

For the extruder part, when I calibrated the stepper motor for my extruder, I found that the movement was very slow. I checked the marlin setting for the extruder and found this:

```cpp
#define DEFAULT_AXIS_STEPS_PER_UNIT {80,80,400,750} // default steps per unit for Ultimaker
#define DEFAULT_MAX_FEEDRATE {500, 500, 2, 25} // (mm/sec)

In comparison with the default setting in Smoothie board, it shows:

```ini
extruder.hotend.steps_per_mm 140 # Steps per mm for extruder stepper
extruder.hotend.default_feed_rate 600 # Default rate ( mm/minute ) for moves where only the extruder moves

Marlin shows the feedrate is mm/sec and smoothie board shows mm/minute. I wonder if this is the case caused the slow movement? The XYZ settings in smoothie board seem quite similar to marlin, but the extruder one is very different (750 vs 140). I wonder if this is also something to do with the feedrate as it's calculated mm/ minute?

Second question, I was told that Smoothie board makes the machine print much faster than the ramps, I wonder in what sense it can be much faster? Is it simply just because the processor is better?

I assume that we all know that there is speed setting in any gcode generation program, for instance, slicer (under the speed setting), is it just by tuning the speed with higher value, then my machine will move faster? If this is the case, I can do this with my old machine and smoothie board doesn't give me any advantage. If I should change any setting in the config file to make it move faster, what is it?

I'm printing the same object in the printer with ramps, it took me 10 mins, but the one with smoothie board took 12 mins… I wonder how this would happen. Please help me with providing some technical details.

Many thanks.

Best,  
Nicholas

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830112639/http://smoothieware.org/forum/t-1162965/speed-quesion)*
