# smoothie homing

*Original post date: 2016-01-01*

---


# smoothie homing

## Original Post by TR1PpyNick (31 May 2015 20:36)

I'm having an issue with homing on my Smoothie board. When I try to home the printer, it moves in the wrong direction (negative X and Y) and makes a loud noise. I've checked the connections and they seem fine. Any ideas what could be causing this?

## Reply by arthurwolf (31 May 2015 21:20)

Use `M119` to check the endstops are read correctly.  
About the noise, try reducing the homing speeds in config.  
Cheers.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150930181242/http://smoothieware.org/forum/t-1222809/smoothie-homing)*
