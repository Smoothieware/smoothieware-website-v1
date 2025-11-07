# End Stop Question

*Original post date: 2016-01-01*

---


# End Stop Question

**DannyBoy21212**  
17 Feb 2015 06:11

I have a question about end stops. My proximity sensors are 24V inductive and require 24VDC to operate. The Smoothieboard end stop limits are 3.3V logic. How can I safely interface the 24V inductive sensors with the Smoothieboard?

---

**d3delta3d**  
17 Feb 2015 06:52

Why not just use the inductive sensors to power the coil of a small 24VDC relay and use the NO contact of the relay to switch the Smoothieboard end stop limit. 3 extra parts I know but safer given the input go directly to the CPU what will be toast if it gets 24V.


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160813112617/http://smoothieware.org/forum/t-1115573/end-stop-question)*
