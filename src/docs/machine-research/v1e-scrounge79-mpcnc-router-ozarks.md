# Marion Makarewicz’s MPCNC router in the Ozarks

**Machine identity:** Marion J. Makarewicz (`scrounge79`)’s individual Mostly Printed CNC (MPCNC), built in 2019 and described as being in the Lake of the Ozarks area. This is the owner’s machine, not a generic MPCNC specification.

![Owner’s photo of the assembled MPCNC on its torsion-box table, posted in the V1E build thread](https://us1.dh-cdn.net/uploads/db5587/original/2X/a/ade56791e3d11c9f5e2c5fcc50bb59fb60cd8bbd.jpeg)

*Forum photo by the owner, attached to the September 16, 2019 update. The image shows the frame, tool carriage, table and LCD/control enclosure; it does not reveal a legible controller board model or connector pin map.*

## Build and use reported by the owner

- On August 13, 2019, the owner said the frame and Z axis were assembled and measured the machine at approximately 900 × 900 mm “from side to side.” This is an outside-span estimate, not a stated work envelope.
- The owner bought the stepper motors and board from V1 Engineering/Ryan and sourced other components. He does not name the board, motor model, driver, supply or firmware in the inspected posts.
- The owner initially made his own wiring harness after a purchased connector/crimper kit went missing in shipping. He reports splicing and soldering wires. One end-stop pin pulled out and was put into the wrong position in a three-hole connector; this caused dual-end-stop errors and homing problems. He says he resolved the symptom but does not describe a verified contact assignment or repair procedure.
- He reports using Estlcam to prepare jobs and CNC.js to control the machine from a laptop. Early work included pen-drawn crown tests. He also used the machine’s laser-traced outline, comparing it with a Glowforge laser cut; this describes using the separate Glowforge to check alignment, not installing a laser on the MPCNC.
- On September 15, 2019, he said the table was finished, with T-slot channels and a removable spoilboard, and that a Craftsman trim router was mounted. It was working with Ryan’s posted G-code for the sides of a display mount.
- On September 16, he reported milling pink foam and cypress with Ryan’s G-code. He described cypress as a fine-grained, relatively low-density test material. One earlier cypress attempt lost steps after an object entered the gantry path; another job had a work-coordinate placement error. These were owner-reported incidents, with no measured accuracy claim.
- The owner also reports installing and testing a drag-knife holder, but says he was still working out its Z movement. That tool operation was not yet described as complete.

## Controller and wiring evidence

| Item | What the forum supports | Limit |
|---|---|---|
| Controller board | A board was purchased with the steppers from V1 Engineering/Ryan; a control box and LCD are shown/discussed. | Board model, firmware build, driver model, motor mapping, voltage/current settings and connector-level pinout are not established. |
| End stops | The owner calls them “dual end stops,” reports homing errors, a pulled-out pin, and reinserting it into the wrong position in a three-hole connector. He says he corrected the problem. | The connector’s pin functions, wire colors, axis assignments, electrical polarity and final wiring are not given. Do not infer them from other MPCNC configurations. |
| Work control | Owner says he set up CNC.js for laptop control and used Estlcam for CAM. | Exact CNC.js/Estlcam versions, firmware protocol and board connection details are absent. |
| Tooling | Craftsman trim router is explicitly reported as mounted and used for foam/cypress milling. A drag-knife holder is separately reported as installed and tested, with Z behavior still being tuned. | Router speed, cutter identity, feeds, depths, measured accuracy and completed drag-knife result are not supplied. |

**No complete pinout is available from this thread.** The end-stop wiring incident is useful fault history, but it must not be turned into a pin assignment.

## Visual evidence

The embedded machine photograph is the owner’s image linked from the September 16 post. A second forum photo shows the marked cypress workpiece after milling:

![Cypress test workpiece after milling on the owner’s MPCNC](https://us1.dh-cdn.net/uploads/db5587/original/2X/0/0cb53722e72e75e0801a3e50f470e108705597a7.jpeg)

*Owner-posted test output. It corroborates that a routed/milled pattern was produced, but does not establish dimensions or accuracy.*

## Forum sources

1. V1E.com Forum, Marion J. Makarewicz (`scrounge79`), [“MPCNC Router in the Ozarks”](https://forum.v1e.com/t/mpcnc-router-in-the-ozarks/11154), owner posts dated August 13–September 17, 2019 (posts 1, 6–8, 13, 15 and 18). The primary evidence for machine identity, approximate outer span, parts sourcing, end-stop connector error, software, router installation and foam/cypress milling is in owner-authored posts 1, 6–8, 13 and 15. Replies are not treated as evidence of this machine’s configuration.

## Novelty and scope

Repository search for `scrounge79`, `Marion J. Makarewicz`, `MPCNC Router in the Ozarks`, and the thread URL found no matching dossier in the flat forum-research set or repository Markdown/HTML. This supports a likely distinct-build classification, but does not prove that every undocumented alias is absent. The owner’s separate Glowforge, Prusa and Creality printers are not counted as part of this CNC machine. The statement that a Glowforge was used for laser comparisons does not establish an MPCNC laser attachment.
