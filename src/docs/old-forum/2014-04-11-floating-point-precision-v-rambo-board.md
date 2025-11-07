# Floating Point Precision v. Rambo Board

*Original post date: 2016-01-01*

---

## Floating Point Precision v. Rambo Board

**By JohnStack, 11 Apr 2014 18:20**

We do not have a FPU, that would be able to do floating point calculations faster. However, we do use more floating point (float/double) values when doing the math, instead of fixed point or integer values like in the arduino-based firmwares.

Other possible culprits for the better quality could be:

- More precise (smoother) step generation
- Smoother acceleration
- Longer look-ahead
- More precise math all around
- Better temperature control

I think there is more but it's all I can recall right now :)

**Re: Floating Point Precision v. Rambo Board**

**By arthurwolf, 11 Apr 2014 18:24**

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160729112353/http://smoothieware.org/forum/t-844081/floating-point-precision-v-rambo-board)*
