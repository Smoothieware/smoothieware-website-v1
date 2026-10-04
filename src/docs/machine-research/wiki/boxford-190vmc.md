# Boxford 190VMC CNC mill — London Hackspace former loan

**Wiki evidence status:** exact model with machine-level dimensions, motion resolution, spindle-speed range and a controller history. The wiki marks this machine defunct and returned to its owner; these are historical machine records, not an available machine recommendation.

## Identity and mechanical data

London Hackspace's wiki identifies a loaned “Boxford 190VMC,” owned by a named individual and returned to that owner. It lists eight spindle speeds from 350 to 3500 RPM, axis travel of 225 mm longitudinal × 150 mm cross × 140 mm vertical, 0.005 mm system resolution, and a 410 × 130 mm table. The page also lists 202 mm spindle-to-table distance and two 10 mm T-slots.

## Control history and operation

The wiki change log records earlier operation with Boxford V5 software, followed by bCNC on Ubuntu and a later LinuxCNC configuration. A 2014 note describes a DB25 connector and says it was “almost certainly serial”; that is explicitly tentative and not a pinout. Another note mentions a 25 W serial port, but the wiki does not reconcile that statement with the controller changes. The operation section requires induction and an LDAP account, and documents use of a generic EMC2/LinuxCNC postprocessor.

## Pinout and diagrams

The London Hackspace history reports a rear DB25 connector on this former-loan machine but says it was “almost certainly serial”; this is explicitly tentative and gives no signal class, mating view, contact function, voltage, or pin assignment. The 25 W wording in a separate arrival note does not resolve the interface. The current diagram therefore treats the DB25 as a machine-side peripheral and shows 25 nominal numbered positions as function-unknown OPEN inventory, not as a verified source pinout. No SmoothieBox route is established and no guess is drawn.

The same wiki records the control timeline as Boxford V5, bCNC on Ubuntu, and then LinuxCNC, but does not identify the fitted controller revision when the machine was returned. A 2014 forum thread about a separate Boxford VMC 190 conversion discusses a universal controller/stepper board and tentatively names X/Y/Z clock and direction board signals; its author explicitly says “should, I think,” describes wiring differences, and gives no DB25 map. That is a useful family-level research lead, but it cannot be assigned to the Hackspace loan or turned into DB25 contacts. Generic DB25/parallel-port conventions, Boxford 190VMCxi USB material, GS-D200S driver-IC pinouts, and retrofit reports for other 190VMCs likewise do not map this connector. The linked 190VMC Programming Manual is a programming document, not evidence of this machine's external DB25 wiring. The Hackspace page's linked modification resources need exact source capture and variant matching before any pin roles can replace OPEN labels.

## Sources

- [Equipment/Boxford CNC Mill — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Equipment/Boxford_CNC_Mill) — machine identity, retired status, dimensions, spindle range, control timeline, rear DB25 mention, and explicit uncertainty.
- [Boxford 190 VMC Programming Manual listing](https://cncmanual.com/download/4018/) — identifies a 190 VMC programming manual; it does not provide a revision-matched wiring pinout in the available listing.
- [Boxford CNC Machining Centres brochure (2021)](https://www.boxford.co.uk/wp-content/uploads/2022/08/CNC-Machining-Centres-Nov-2021.pdf) — distinguishes the later 190VMCxi product context; not evidence for the returned historical 190VMC's DB25.
- [LinuxCNC forum: Boxford 190VMC conversion with Mesa 7i96S](https://forum.linuxcnc.org/12-milling/49338-boxford-190vmc-conversion-with-mesa-7i96s) — a separate conversion report, not proof of the Hackspace machine's controller or wiring.
- [MyCNCUK forum: Advice Needed, Converting a Boxford VMC 190](https://www.mycncuk.com/threads/7750-Advice-Needed-Converting-a-Boxford-VMC-190) — separate 2014 conversion discussion with tentative X/Y/Z controller-board clock/direction labels; it explicitly does not supply a DB25 pinout or prove this machine's fitted revision.

**Unknowns:** installed controller at return, DB25 electrical class and face/gender, all 25 contact functions, meaning of the 25 W serial note, exact fitted options/revision, and whether any cited conversion details apply to this returned unit.
