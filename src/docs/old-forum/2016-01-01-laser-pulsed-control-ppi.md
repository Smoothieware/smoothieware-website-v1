# Laser pulsed control (PPI)

*Original post date: 2016-01-01*

---

# Laser pulsed control (PPI)

## Post by Fred27 (07-07-2016 16:55)
I've been working on implementing PPI control for Smoothie. It's a bit tricky because it requires precise timing and coordination between the laser and the motion system. I'm close to having a working prototype, but there are still some kinks to iron out.

## Post by Quark (07-07-2016 17:10)
That's great to hear! I've been using the Turnkey Tyrrany system with Inkscape, but I'm definitely interested in switching to Smoothie. Could you share more details about how the PPI control works? What kind of hardware modifications would be needed?

## Post by Fred27 (07-07-2016 17:25)
Sure! The PPI (Pulse Per Inch) control essentially modulates the laser's power based on the speed of the gantry. When moving faster, the laser pulses more frequently, and when moving slower, the pulses are spaced out. This helps with material removal efficiency and prevents burning.

## Post by Quark (07-07-2016 17:35)
That makes sense. I've noticed that higher-end systems use this technique for thin materials. Would this require any special firmware modifications on the Smoothie board?

## Post by Fred27 (07-07-2016 17:45)
Yes, it would require some custom firmware work. I'm currently testing a patch that adds a new G-code command for PPI control. The idea is to send the desired pulses per inch value, and the firmware would handle the timing calculations.

## Post by Quark (07-07-2016 17:55)
That sounds promising. I'd be happy to test it if you're looking for beta testers. I've got a Smoothie board set up with a laser cutter.

## Post by Fred27 (07-07-2016 18:05)
Thanks! I'd appreciate any help with testing. I'm also working on a web interface for configuring the PPI settings, which should make it easier for users to adjust the parameters without needing to modify G-code directly.

## Post by Quark (07-07-2016 18:15)
Awesome! That would be a huge improvement over the current systems. Let me know when you're ready for testing.

## Post by Fred27 (07-07-2016 18:25)
I'll let you know as soon as I have a working version. In the meantime, I'm also looking into integrating this with the LaserWEB3 interface.

## Post by Quark (07-07-2016 18:35)
Perfect! I've been using LaserWEB3 and would love to see this feature added. It would definitely make my workflow more efficient.

## Post by Fred27 (07-07-2016 18:45)
I'm making progress, but there are still some challenges with the timing calculations. The laser needs to be pulsed at precise intervals based on the movement speed, which requires some complex math in the firmware.

## Post by Quark (07-07-2016 18:55)
I understand. It's a complex system, but I'm confident you'll get it working. Let me know if you need any help with the testing or if there's anything I can do to assist.

## Post by Fred27 (07-07-2016 19:05)
Thanks again! I'll keep you posted on my progress. In the meantime, I'm also looking into documentation and tutorials for this feature once it's implemented.

## Post by Quark (07-07-2016 19:15)
That's a great idea. Good documentation will be essential for users to understand how to use the PPI control effectively.

## Post by Fred27 (07-07-2016 19:25)
Absolutely. I'm also thinking about adding some safety features to prevent accidental damage to materials when using the PPI control.

## Post by Quark (07-07-2016 19:35)
That's a smart move. Safety is always a concern with laser systems. I look forward to seeing the final implementation!

## Post by Fred27 (07-07-2016 19:45)
Thanks! I'll make sure to include those safety features. I'm also considering adding some visual feedback in the web interface to show the current PPI settings and laser status.

## Post by Quark (07-07-2016 19:55)
That would be really helpful. Visual feedback can make a big difference in usability. I'm excited to see how this turns out!

## Post by Fred27 (07-07-2016 20:05)
I'm excited too! It's been a challenging but rewarding project. I'll keep you updated as I make progress.

## Post by Quark (07-07-2016 20:15)
Looking forward to it! I'll be ready to test when you are.

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20161007174805/http://smoothieware.org/forum/t-1604860/laser-pulsed-control-ppi)*
