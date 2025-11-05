# Smoothieboard PSU question

*Original post date: 2016-01-01*

---

### Czucker  
*30 June 2015, 18:18*  

I'm currently using a 12V PSU for my Smoothieboard, but I'm wondering if I can also use a 24V PSU for the heated bed and hotend. I've read that the Smoothieboard can handle multiple voltages, but I'm not entirely sure how to set it up. Can someone clarify how to connect the PSUs and which pins to use for the different components?

---

### kit-robotics  
*30 June 2015, 20:39*  

> You can absolutely use a 24V PSU for the heated bed and hotend. The Smoothieboard has multiple power rails:  
> - **12V** for the fans and other low-power components.  
> - **24V** for the heated bed and hotend.  
> - **5V** for the electronics.  
> 
> Connect the 12V PSU to the **12V rail** (usually labeled on the board), and the 24V PSU to the **24V rail**. The **always-on fans** can be connected directly to the 12V rail. Make sure to use the correct pin headers for each rail to avoid damage.  

---

### Czucker  
*30 June 2015, 20:39*  

Thanks! That's extremely helpful.  

As for running the always-on fans, that's exactly right. I can just run them from my 12V PSU. Sometimes it's the simple things that escape me!

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20151008181307/http://smoothieware.org/forum/t-1262734/smoothieboard-psu-question)*
