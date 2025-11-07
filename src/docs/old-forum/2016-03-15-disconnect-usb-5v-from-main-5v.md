# Disconnect USB 5v from main 5v

*Original post date: 2016-01-01*

---

## Disconnect USB 5v from main 5v

**Posted by:** [Oliver Hutchison](https://web.archive.org/web/20160529052526/http://www.wikidot.com/user:info/oliver-hutchison) on *15 Mar 2016 05:49*

I have a 5V regulator, but when USB is connected, it seems to take precedence over the external 5V input. This is causing issues with my setup. Is there a way to disconnect the USB 5V from the main 5V line?

---

## Re: Disconnect USB 5v from main 5v

**Posted by:** [arthurwolf](https://web.archive.org/web/20160529052526/http://www.wikidot.com/user:info/arthurwolf) on *15 Mar 2016 08:43*

There is a series of diodes next to the 3.3v Vreg. One of those is for the USB 5V, the other for the 5V input. You want to remove the USB one.

Cheers.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20160408102901/http://smoothieware.org/forum/t-1645129/disconnect-usb-5v-from-main-5v)*
