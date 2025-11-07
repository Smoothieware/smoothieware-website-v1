# autobed leveling issues

*Original post date: 2016-01-01*

---

Forum Thread  
Forum » [Smoothie Firwmare / General](/web/20150907051708/http://smoothieware.org/forum/c-496918/general) » autobed leveling issues  

Started by: [iornman86](https://web.archive.org/web/20150907051708/http://www.wikidot.com/user:info/iornman86)  
Date: 09 Feb 2015 00:14  
Number of posts: 1  
[RSS](/web/20150907051708/http://smoothieware.org/feed/forum/t-1104377.xml): New posts  

---

**autobed leveling issues**  
by [iornman86](https://web.archive.org/web/20150907051708/http://www.wikidot.com/user:info/iornman86), 09 Feb 2015 00:14  

I have been trying to get auto bed leveling to work and am frustrated.  

I have everything wired and setup however the z probe offset seems to do little to effect the print height until i get past the 2 mm probe range and it crashes into the print bed.  

am i missing something? is this not how you would set the first layer height?  

oh an it took me forever to realize `g32` run 2x in a row was a bad idea. it saves the auto bed leveling so the 2nd run it removes all compensation. `m561` prior to `g32` fixed it but that was a real head schratcher  

[Reply](javascript:;)

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1104377/autobed-leveling-issues)*
