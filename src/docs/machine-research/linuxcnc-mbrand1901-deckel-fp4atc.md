# Mbrand1901's Deckel FP4ATC retrofit project

## Machine and project state

LinuxCNC Forum member Mbrand1901 reports buying a used Deckel FP4ATC and beginning a retrofit project in January 2026. The original control was identified as a Contour 3; the owner planned to retain the Siemens servos and Bosch servo controllers. The intended sequence was to get the axes moving, then the spindle, and finally the automatic tool changer. The inspected thread does not establish a completed or commissioned retrofit.

The owner reports the original control cabinet had 56 inputs and 92 outputs. The owner initially considered Mesa 7i80HDT with 7i77 and 7i85 cards, then received forum correction that those interfaces do not pair as proposed and was considering 7i97T. The machine's NCP59 board was described as containing some kind of encoder interface, but its signal interception point was unknown to the owner. These are planning statements and forum discussion, not a verified as-built design.

## I/O and connector evidence

The forum posts describe desired analog servo command, 1 Vpp linear-scale signals, servo velocity encoders, and future spindle control. They do not assign physical connector contacts or provide a complete signal-to-terminal schedule. The original I/O counts do not identify specific signals. The NCP59 reference is a board identity only, not a pinout.

## Forum source

- Mbrand1901, [“Retrofitting Deckel FP4ATC”](https://www.forum.linuxcnc.org/12-milling/58149-retrofitting-deckel-fp4atc), LinuxCNC Forum, inspected posts from 2026-01-02 through 2026-01-06.
