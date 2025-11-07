# Windows 7 64bit driver issue

*Original post date: 2016-01-01*

---


Forum Thread

Forum » Smoothie Firwmare / General » Windows 7 64bit driver issue

Summary:
Found and fixed an issue with the windows drivers

**Windows 7 64bit driver issue**

**timrastall** 26 Dec 2014 08:31

Hi All

Just a post for anyone that finds this issue and possibly for someone in the dev community to fix.

I was having problems getting the windows drivers for smoothieware to work on a Win7 Ultimate x64 build.
Turns out the 1.1 driver inf file has a missing line in the vista 64 section as follows:


usbser.sys,,,0x20

If you add this to the smoothiware.inf file the driver should install fine.

Cheers


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150730055858/http://smoothieware.org/forum/t-1069885/windows-7-64bit-driver-issue)*
