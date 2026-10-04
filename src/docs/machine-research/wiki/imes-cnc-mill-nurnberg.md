# IMES enclosed CNC mill — FabLab Region Nürnberg

**Wiki evidence status:** local machine page; the wiki lists its maker/year field as “imes BJ 2004”, type field as generic text, and current condition as limited use. Operation is permitted only together with a milling supervisor. This is a local machine identity; the exact commercial model is not established.

## Machine and controls

The wiki describes an enclosed CNC mill with a 300 × 400 × 100 mm work area, a water-cooled 2.2 kW spindle with Lenze i510 drive, closed-loop steppers (StepperOnline 23HS30-5004D-E1000 motors and CL57T drives), and LinuxCNC with a Mesa 7i96S controller. The wiki characterizes it as powerful and sensitive and warns incorrect operation can damage the machine.

## Local operating workflow

G-code is copied to the machine over SMB (`smb://fabmill.local/`), selected in the FILE view, and loaded with LOAD G-CODE. LinuxCNC checks syntax; the operator remains responsible for semantic correctness.

For startup, the wiki says to turn on the cabinet main switch and computer, check that the coolant pump is running, and open LinuxCNC. Insert and enable the key switch, release the emergency stop, activate LinuxCNC Power, then run REF ALL. The documented reference order is Z first, then X and Y. The tool must be measured with `M6 G43`. Manual jogging is used to set the work origin; the page warns that 100% jog speed is fast. Tool changes must use `M6 G43` so offsets are set. G54 work coordinates are set with ZERO ALL or per-axis ZERO controls.

The wiki describes touching off X/Y with the cutter and gives a slow gauge-based Z-zero procedure. It warns that contacting the workpiece with the spindle damages it and says compressed air is needed for cooling. The spindle has an ER20 collet interface; the listed set covers 1–13 mm collets. The page gives example aluminium and ABS parameters, but its feed column unit is printed as “mm/m”; that ambiguity is retained and values are not normalized here.

To shut down, the wiki instructs users to turn off the computer's green main switch, press the emergency stop, clean the work area, and close the enclosure.

## Pinout and visual evidence

The local wiki page's Setup, IO Mapping, and Mapping sections contain no usable machine assignment. The exact installed Mesa 7i96S revision and LinuxCNC channel map are unknown. Its manufacturer manual does provide complete reference pin schedules for TB1, TB2 and TB3; those schedules are shown as a controller-family reference only, not as fitted wiring or an axis assignment.

The installed StepperOnline CL57T revision is also unknown. The manufacturer V4.1 manual supplies named contact functions for P1–P5. These are retained as a revision-specific reference with the actual terminal numbering/mating-face order left unspecified. The local wiki does not identify how the Mesa outputs, drive inputs, encoder, motor, or supply contacts are wired.

The wiki says the spindle uses a Lenze i510 but does not give its full order code. Lenze's operating instructions for the i510 family name the X3 control terminals and X9 relay contacts; those labels are reference names, not a claim that the family manual exactly matches the installed 2.2 kW unit. No SmoothieBox route is selected. In particular, step/dir output levels, VFD command wiring, the emergency-stop chain and interlocks need installed-system evidence and electrical checks before any connection is considered.

## Sources

- [IMES-Fräse — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/IMES-Fr%C3%A4se) — local identity, restricted status, specifications, control stack, operating sequence, tooling, and example parameters.
- [Fräse — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/Fr%C3%A4se) — identifies the older donated DIY router as out of service and replaced by the IMES machine; its controller instructions are not applied to the IMES.
- [Mesa 7I96S manual V1.12](https://www.mesanet.com/pdf/parallel/7i96sman.pdf) — TB1–TB3 reference pin schedules; exact fitted board revision and LinuxCNC signal assignment unknown.
- [StepperOnline CL57T V4.1 manual](https://www.omc-stepperonline.com/download/CL57T-V41_user_manual.pdf) — P1–P5 reference signal names/functions only; the installed CL57T revision is unknown, and V4.1's selectable/factory control-voltage details must not be transferred to the installed drive without identification.
- [Lenze i510 operating instructions, 11/2021](https://irp.cdn-website.com/4735e496/files/uploaded/i510.pdf) — manufacturer-authored family reference for X3 and X9 signal names, hosted on a third-party mirror; fitted order code and terminal configuration unknown.

**Unknowns:** exact IMES model/nameplate and serial, Mesa board revision and field-I/O assignment, drive revisions and all fitted wiring, Lenze order code and terminal setup, spindle/chiller details beyond those listed, latest condition and operator permissions, and the feed units shown in the local parameter table.
