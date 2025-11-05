# Stepper settings

*Original post date: 2016-01-01*

---

# Forum Thread

## Stepper settings

**Started by:** [Rick Beddoe](https://web.archive.org/web/20150826211049/http://www.wikidot.com/user:info/rick-beddoe)  
**Date:** 18 Jun 2015 15:28  
**Number of posts:** 1  
**RSS:** [New posts](/web/20150826211049/http://smoothieware.org/feed/forum/t-1246083.xml)

### Summary:
Having some challenges getting circles

---

### Stepper settings

**Rick Beddoe** 18 Jun 2015 15:28

I have a Smoothieboard and I'm having a heck of a time getting the size of my prints to be correct. The prints are printing at about 90% their actual size.

I have played with the stepper settings for steps/mm. If I set the steps/mm to 88, I will get correct x/y dimensions, however any circles print in a somewhat oval shape. If I dial the steps back to 80, circles are fine but dimensionally the piece is incorrect. I have resorted to scaling in Slic3r, but that to me seems like a kludge. There is a GCODE command (`G51`) that will apply scaling, but that does not work in RepRap. Is there some sort of scaling or tuning that can be done with Smoothieboard that could compensate for this?

I'm printing with a QUBD TwoUp Cartesian printer. The controller that comes with the printer is a geeetech printrbot plus, but I am not allowed to post.

Last edited on 18 Jun 2015 15:33 by [Rick Beddoe](https://web.archive.org/web/20150826211049/http://www.wikidot.com/user:info/rick-beddoe)

[Reply](javascript:postReply(event,2319680))

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1246083/stepper-settings)*
