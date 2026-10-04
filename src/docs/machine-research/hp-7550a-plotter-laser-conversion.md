# HP 7550A plotter laser conversion (KTP build)

**Machine class:** DIY flying-optic laser engraver built from an HP 7550A pen plotter carriage and salvaged printer/copier parts.  
**Evidence state:** forum build log with concrete motion/control details; no complete laser/control connector pinout found in the inspected posts.  
**Novelty check:** exact name not found in the current machine-control survey HTML or its sibling assets on 2026-09-23. This custom build appears distinct from the surveyed commercial machines and controller-only profiles.

## What the forum reports

The author describes salvaging an HP 7550A for $15 and reusing its Pittman DC servos with quadrature encoders. One servo drives the Y carriage; the second originally feeds paper. The carriage assembly was separated and modified for flying optics, with reported Y travel increased to more than 14 in. (355.6 mm). The author later built a 24 × 48 in. (609.6 × 1219.2 mm) internal-clearance frame, while noting Y travel remained 14 in. at that stage. These are different measurements: frame envelope is not usable travel.

The motion test used Mach3 to output step/direction to a Pixie P100 step/dir-to-analog controller, an Advanced Motion Controls 12A8D brush servo amplifier, and a Pittman motor. The author reports about 4,000 steps/in. at the drive, a Pixie step multiply of four yielding 1,000 dpi command resolution, and a tested 2,640 in./min (44 in./s) carriage feed at approximately Mach3's 44 kHz step-rate ceiling. This is the author's reported test, not an independently verified cutting feed or accuracy figure.

The initial laser is reported as a Synrad J48-1 RF-excited CO₂ unit, described by the author as nominally 10 W, air-cooled, on a 30 V, 7 A DC supply. The same post says it measured over 16 W at 95% duty while testing; the discrepancy is retained as a forum claim and must not be treated as a rated output. The forum post describes a hand-held balsa cutting demonstration, not a complete safe operating procedure.

For the later frame, the author reports 8020 extrusion, IKO linear rails, XL timing belt, linked 3/8 in. shafts for the X drive, and a brushless servo with encoder. A stated 1:1 relation between servo-shaft revolution and X travel follows from the selected pulley ratios in that post. No complete electrical diagram or laser interlock wiring is established by the excerpts reviewed here.

## Forum visuals

The build log embeds photos of the plotter donor, disassembly, carriage, frame, rails, laser and motion-control hardware. See the [original illustrated thread](https://en.cncarena.com/forum/thread/125747-laser-engraver-from-plotter-project-log-with-pictures/). The page exposes images as forum attachments, but this research pass did not recover enough diagram pixels to transcribe a connector map. No pinout should be inferred from the prose description.

## Practical use evidence

The forum author demonstrates a Mach3-controlled carriage test and a brief material test. The thread is a build log, not a complete use guide: it does not establish focus procedure, enclosure, extraction, cooling interlocks, emergency stop, homing, limit switch arrangement, or a verified material/power table. Those details remain **unknown from forum evidence collected so far**.

## Wiring / pinout

| Boundary | Forum evidence | Confidence |
|---|---|---|
| Mach3 → Pixie P100 | Step/direction interface is explicitly described | Reported by builder |
| Pixie P100 → AMC servo amplifier → Pittman servo | Motion chain described; no terminal numbers or connector pin map supplied | Reported topology only |
| Laser power/control | Synrad J48-1 and 30 V / 7 A supply reported; no control connector or interlock pin map located | Incomplete |

Do not wire from this table. It records evidence gaps rather than an actionable wiring diagram.

## Sources (forum posts only)

1. KTP, “Laser engraver from plotter project log, with pictures!”, CNCArena/CNCzone, posts dated 2006-08-31 onward: [thread](https://en.cncarena.com/forum/thread/125747-laser-engraver-from-plotter-project-log-with-pictures/). Relevant posts describe donor and motors, carriage modifications/travel, Pixie/Mach3/AMC motion test, J48-1 laser, and later frame/drive.
2. Visual source: photographs embedded in the same forum thread. No independent or non-forum sources used.
