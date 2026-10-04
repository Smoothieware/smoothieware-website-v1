# currinh's CNC Sherline lathe

**Machine identity:** Hugh (`currinh`) documented an individual Sherline lathe converted to CNC and run with LinuxCNC. The owner called it a “plain vanilla Sherline CNC conversion.” This is a test-size machine distinct from the 14-inch Goodway manual lathe the owner also mentions. A repository-wide text search on 2026-09-23 found no exact `currinh`, `Sherline Lathe Conversion`, or LinuxCNC thread match.

**Evidence state:** The owner documented the electronic driver box, sensor bring-up, and a successful first turned part in February 2016. The owner says the resulting part, a towel-rack post for a trailer, had a small imperfection around its flange but was considered good. A spindle encoder had been purchased, but the owner still described designing its mount and wiring spindle speed control as future work after that cut.

## Machine and controls

The documented machine is a Sherline lathe converted to LinuxCNC control. The owner built its electronics into a repurposed wooden stereo cabinet and listed a toroidal transformer, 50 V rectifier module, Gecko G540, 5 V supply, 60 mm fan, switch and fuse holder. A separate DB25 plug was described as bringing out the G540 terminal block and 5 V supply. The owner had not yet settled the machine stand or final lengths for stepper and sensor cables in the cited build update.

The owner tested slotted optical switches using a 5 V supply and 250 Ω resistor on the LED side, then connected the open-collector output to a G540 input and its ground. LinuxCNC HALmeter showed the parallel-port input switching. The owner had ordered an Omron E6C2-CWZ6C 60 P/R encoder and was designing a spindle mounting arrangement; a completed encoder installation is not established by the first-cut post.

## Turning operation

In February 2016, the owner reported learning the turning workflow with CamBam's turning features and its LinuxCNC-turn postprocessor. The owner found that the Sherline could remove substantially less material per pass than their 14-inch Goodway manual lathe, and adjusted the stock to the 1.25-inch diameter assumed by the CAM work. The first reported workpiece was a towel-rack post turned from aluminum stock. The owner noted a bobble around the flange and still considered it a good part.

This is evidence of a real first cut and a small finished item, not a rated production configuration. No cutting speed, depth/feed, dimensional tolerance, work envelope, or later spindle encoder commissioning result is stated in the inspected thread.

## Pinout and evidence limits

The thread describes functional wiring for the optical switch and the DB25 breakout at a high level. It gives no G540 terminal number, DB25 contact assignment, connector orientation, spindle-control terminal map, or complete wiring diagram. The 60 P/R spindle encoder was discussed as ordered and awaiting mechanical integration in the first-cut update. Do not infer that it was wired and commissioned from the reported cut alone.

## Forum visuals

The owner refers to pictures of the driver box and the lathe during the first cut, but the post's images were not recovered and visually inspected for this dossier. No visual claim about the machine, cabinet internals, or finished part is made here.

## Forum source

1. LinuxCNC Forum, currinh (Hugh), [“Sherline Lathe Conversion ?”](https://forum.linuxcnc.org/26-turning/30181-sherline-lathe-conversion), page 2, owner posts from 2016-01-20 through 2016-02-09. The owner describes the G540 and electronics box, optical-switch testing, encoder plan, CamBam/LinuxCNC turning workflow, and first towel-rack post. The dossier attributes only the owner's statements to this machine.
