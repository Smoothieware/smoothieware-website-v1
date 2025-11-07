# Is there a stepper timeout

*Original post date: 2016-01-01*

---

# Is there a stepper timeout

Forum » [Smoothie Firwmare / General](/web/20150721082520/http://smoothieware.org/forum/c-496918/general) » Is there a stepper timeout

**Started by:** [CapnBry](https://web.archive.org/web/20150721082520/http://www.wikidot.com/user:info/capnbry)  
**Date:** 28 Jun 2015 14:55  
**Number of posts:** 1  
**RSS:** [New posts](/web/20150721082520/http://smoothieware.org/feed/forum/t-1260735.xml)

---

**Unfold All** | **Fold All** | **More Options**

- **Edit Title & Description**
- **Stickness**
- **Lock Thread**
- **Move Thread**

---

**Is there a stepper timeout**  
*by [CapnBry](https://web.archive.org/web/20150721082520/http://www.wikidot.com/user:info/capnbry), 28 Jun 2015 14:55*

I've been playing with a new printer running smoothieware and I'm used to the way Marlin would disable the steppers after a certain amount of time. I keep forgetting to M18 when I am done working with the printer so the steppers stay powered, this time overnight!

Looking at the smoothieware source, it seems the only things that disable the steppers are in response to M18, M84 (set timeout), on configuration reload (on module init), and on halt. Is there a timeout I'm just not seeing?

**Reply** | **Options**

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150720080445/http://smoothieware.org/forum/t-1260735/is-there-a-stepper-timeout)*
