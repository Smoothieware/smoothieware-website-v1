# Rick’s MPCNC Primo build and first cuts

**Machine identity:** Rick (`luthier`)’s individual V1 Engineering MPCNC Primo, built with the standard sizing calculator as a learning project in December 2022. The owner documented both construction issues and first routed tests. This is a distinct owner build, not a generic MPCNC configuration.

![Owner’s MPCNC Primo during its first router tests](https://us2.dh-cdn.net/uploads/db5587/original/3X/3/d/3d357d19b961825391d8aac68d18979a6d0b4769.jpeg)

*Visually inspected V1E forum photograph. It shows the assembled machine above a work table, the router/tool holder, gantry, visible wiring and a vacuum hose. The image is not a readable wiring diagram.*

![Owner’s crown carving in plywood](https://us2.dh-cdn.net/uploads/db5587/original/3X/7/5/7597d53ce524e210f3b898601976ed35a3d4db07.jpeg)

*Visually inspected forum image associated with the first-test post. It shows a crown-shaped routed result in plywood; the photo is evidence of output, not a measurement of accuracy.*

## Build and operation reported by the owner

- Rick says he used the default MPCNC build size from the V1 Engineering calculator. He used 1 in outside-diameter, 16-gauge (0.065 in wall) A513 HREW round steel tube. He does not state the calculated work area in this topic.
- He gives a rough total of about $600, including approximately $90 for metal, $70 for a Carbide3D compact/Makita-style router, $400 for kit/board/LCD and $50 for bits. A friend printed the machine parts and tool holder.
- He discovered that the kit’s belt was about 1.5 in short for his layout; he then cut one belt too short and recalculated his base dimensions around the remaining parts. The stated cost and dimensions are approximate owner estimates.
- The owner refers to his controller as the Rambo board when describing its different LCD connection arrangement from the Mini Rambo illustrations. Exact Rambo model/revision and firmware version are not identified.
- Rick describes the printed end stops, dual X end stops and Rambo/LCD setup. He reports that one X end stop did not home as expected; after testing, he found both X switches needed to be installed for his dual-endstop setup. He initially interpreted the diagram as one minimum and one maximum switch, and the forum discussion later explained that the two switches serve the two X motors at the same end. The machine’s exact switch contact wiring is not provided.
- He reports that the printer-posted supply wiring had reversed polarity: the power-supply indicator did not illuminate while connected to the board, then lit after he unplugged it. He says he checked the wires with a multimeter and verified the polarity was reversed. This is a reported incident, not a universal connector pin assignment.
- While testing the pen plot, he saw Z move down when he expected it to go up, then says he flipped the connector and it worked. He does not identify the connector pins or whether this was a motor phase reversal or another wiring change.
- On December 18, 2022, he reports successful crown-file tests with both a pen and router bits. He used a pre-generated G-code file from the SD card and the LCD rather than generating it in Estlcam. For the pen test he placed craft paper on the work surface, used X/Y/Z to position the pen, and discovered that 1 mm Z increments were too coarse for his setup; he then found 0.1 mm jogging.
- On December 19, he says he had used the router most of the day and wanted to reduce face chipping in plywood. He later described using a wider 1/8 in single-flute bit and a thinner 1/16 in, two-flute upcut bit, followed by light sanding with 220 grit on a hard block. These are owner-specific observations; the post gives no feed rate, depth of cut or measured result.

## Controller, wiring and setup evidence

| Item | What the forum reports | Limits |
|---|---|---|
| Controller | Owner refers to a Rambo board and LCD; kit/board/LCD were included in his rough budget. | Board revision, firmware version and complete connector map are absent. |
| LCD | Owner says the Rambo board’s connector arrangement differs from the Mini Rambo illustration, and that he had to swap the connectors relative to that picture. | The post does not supply a verified pin-by-pin LCD mapping, orientation drawing or signal names. Do not reconstruct one from “swap the connectors.” |
| Power wiring | Owner found reversed supply-wire polarity with a multimeter, according to his post. | No source-side or board-side terminal labels, wire colors, voltage, or replacement/repair record is documented. |
| Z motor direction | Owner says he flipped a connector after observing Z move in the direction he considered wrong. | No connector position, pin sequence or cause is given. This is not a motor-winding pinout. |
| End stops | Owner reports dual X end-stop behavior and eventually getting X homing to work with both switches installed. A forum reply states that both switches correspond to the two X motors at the same minimum side. | The exact switch model, circuit, polarity, pin assignments, axis sequence and final validated configuration are unknown. Reply interpretation remains attributed to the respondent. |
| CAM and motion | Owner used a pre-generated crown G-code from an SD card and the LCD for the pen test; he later used router bits on plywood. | G-code source/version, firmware compatibility details, router RPM, feed, plunge, depth/pass schedule and work-coordinate method are not fully described. |

**No complete pinout is present.** The owner’s useful wiring-fault history should remain separate from any assumed Rambo or MPCNC wiring standard.

## Forum source

V1E.com Forum, Rick (`luthier`), [“New V1 build — Primo Router CNC”](https://forum.v1e.com/t/new-v1-build-primo-router-cnc/35729), owner posts dated December 18–19, 2022 (posts 1, 3 and 5). Post 1 documents the build materials/cost estimate, controller and LCD confusion, end-stop behavior, reversed supply polarity, pen test, router bits and initial plywood result. Post 3 confirms completion and reports plywood face chipping; post 5 identifies the wider 1/8 in single-flute and thinner 1/16 in two-flute bits and light sanding. Forum replies are not treated as proof of this machine’s settings except where explicitly attributed above.

## Novelty and scope

Repository Markdown and HTML searches for `luthier`, `Rick`, `New V1 build Primo Router CNC`, and topic ID `35729` found no matching dossier. The thread documents one individual Primo; the owner’s comments about generic Rambo/Mini Rambo illustrations are included only as this builder’s wiring experience, not as a universal pinout. This text search supports likely novelty but cannot establish that every possible alias is absent.
