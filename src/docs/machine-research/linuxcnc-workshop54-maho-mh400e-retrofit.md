# workshop54's MAHO MH400E LinuxCNC retrofit

## Machine and project state

LinuxCNC Forum member workshop54 identifies this physical machine as a MAHO MH400E with an original Philips CNC control. The owner first tried to restore the Philips system but moved to LinuxCNC after it failed to function. This is distinct from the earlier MH400E retrofit documented by RotarySMP; in the thread, RotarySMP calls workshop54's mill “another 400E.”

In March 2025, the owner reported cleaning the machine, removing the Philips controller and monitor, beginning to map cabinet logic from the original schematics, and translating the manual. The chosen Mesa setup was 7i94T, 7i77, and 7i84. The 7i94T and 7i77 were powered and appearing in LinuxCNC, but troubleshooting was still underway. No completed motion-axis retrofit or commissioned operation is reported in the inspected posts.

## Cable and wiring evidence

The owner lists planned breakout hardware to preserve the existing machine cables: three DB15 breakouts for Heidenhain cables, two DB9 breakouts for Indramat cables, and two IDC40 ribbon-cable breakouts. These are connector-family and intended-role observations only; the thread does not provide pin numbers, signal direction, electrical levels, or verified cable-to-board assignments.

The original Philips 432 hardware had been removed. The owner was considering increasing the mains connection from 25 A to 40 A and changing protection from B16 to C25, but said this was still waiting for electrician confirmation. These are proposed changes, not a completed electrical design or installation. The owner intended to document the eventual wiring in EPLAN.

## Forum source

- workshop54, “[Retrofit: Maho MH400E to LinuxCNC](https://forum.linuxcnc.org/show-your-stuff/55601-retrofit-maho-mh400e-to-linuxcnc),” LinuxCNC Forum, posts dated 2025-03-10 through 2025-03-23.
