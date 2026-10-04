# Buildlog.net original laser 1.0 — Ryan's build

**Machine class:** a builder's instance of the original open-source Buildlog.net CO₂ laser design, documented as “Ryan's 1.0 Build.”  
**Evidence state:** detailed assembly/build log excerpts; connector pinout and final operating configuration not yet established.  
**Novelty check:** this build name was not found in the current machine-control survey HTML or sibling assets on 2026-09-23. It is an individual build of a community design, not proof of a distinct commercial model.

## Forum-reported configuration

Ryan states that the project follows the original open-source Buildlog.net laser design with mostly cosmetic modifications. The planned budget was approximately US$2,600 including shipping and contingency; the thread notes actual purchases did not match the initial list exactly. The author deliberately purchased mechanical, electrical, and laser parts in stages.

The author says the electronics shown were subject to change. At that snapshot they included motors from the design author, Keling stepper drivers, two inexpensive power supplies, a 36 V / 7 A supply for the motion system (chosen over a suggested 24 V supply), and a proposed 5 V conversion/regulator. The forum post records the builder's uncertainty about modifying the supply; it is not a recommended power conversion. Stepper microstep configuration was chosen to reach 1,000 steps/in. for a Retina controller. Later replies and posts are needed to identify the final controller and laser wiring.

Mechanical assembly descriptions include V-rail, Z carriages, bearings, and hardware. The forum describes six Z-axis bearing/screw assemblies and gives one stack sequence; this is a build-specific assembly note and needs comparison with the matching revision's drawings before reuse.

## Forum visuals

The original thread includes a photo called “Official.jpg,” Z-axis carriage images, electronics and V-rail photos. See the [illustrated forum build log](https://buildlog.net/forum/viewtopic.php?f=16&t=391). No electrical schematic pixels were recovered in this pass; a complete wiring map remains unavailable.

## Operation evidence

This thread focuses on construction. It does not yet support a full operation workflow, verified homing/limit configuration, laser enable sequence, cooling interlock, extraction requirements, or safe material settings. These fields remain unknown until additional forum posts in the same build log or other forum discussions are inspected.

## Wiring / pinout

No connector pinout is established. The forum mentions stepper drivers, supplies, a Retina controller target, and a proposed 5 V regulator, but it does not define terminal-level wiring. Treat this dossier as a build identity and component lead, not a wiring instruction.

## Manufacturer reference · Buildlog laser interface/driver PCB DB25

The Buildlog.net Laser Interface/Driver PCB is a related open-source controller reference, not evidence that Ryan's build used this board. The manufacturer blog identifies a standard 25-pin D controller connector compatible with PC/Mach3, EMC2, and FSE Retina Engrave control. It names DB25 pin 1 and pin 8 as dual relay-driver controls and says PWM may be configured on pin 14 or pin 15. The remaining DB25 positions are not assigned in the cited blog text. The selected diagram therefore shows all 25 DB25 contacts individually on a peripheral card: four source-named contacts and 21 positions labeled function not stated in the source view, all OPEN to SmoothieBox. No DB25 route is proposed.

Source: [Buildlog.net Laser Interface/Driver PCB](https://www.buildlog.net/blog/2011/04/laser-interfacedriver-pcb/), accessed 2026-09-29. The page also describes a safety loop, enclosure limit/cover inputs, water switch, laser power connector, and three stepper-driver slots, but it does not establish Ryan's installed board, revision, cable, or final wiring.

## Sources (forum posts only)

1. r691175002, “Ryan's 1.0 Build” / “My Buildlog.net Build,” Buildlog.net, started 2011-02-11: [thread](https://buildlog.net/forum/viewtopic.php?f=16&t=391). The forum author explicitly cautions that the electronics list changed.
2. Visual source: photographs embedded in the same Buildlog.net forum thread. No non-forum sources used.
