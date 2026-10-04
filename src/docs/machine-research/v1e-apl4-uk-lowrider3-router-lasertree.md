# Alan Lowery's UK LowRider 3 with Makita Router and LaserTree Diode Laser

**Machine identity:** Alan Lowery (`apl4`)'s individual LowRider 3 build in the UK, documented in March 2024. The same thread also mentions an earlier, separate laser engraver that started as an Ortur LM1; that 500 × 800 mm, owner-described 40 W system is not this LowRider and is not counted as the same machine.

**Novelty check:** On 2026-09-23, the repository was searched for `Alan Lowery`, `LR build in the UK`, `Lasertree 40w`, and `500mm x 800mm 40w`. No matching individual-build dossier was found.

## Machine and work area

The owner reports a 570 mm × 1 m print area chosen to match the loft boards he planned to use as a base. He sourced parts from Amazon and eBay in the UK and printed components using a Creality Ender 3 and Flashforge Adventurer 3 over two weeks. The build uses 25 mm galvanised conduit, consistent with the LR3 version. Forum replies later clarify that the chunkier conduit belongs to the LR4 update.

The main photograph shows the assembled gantry over a large, gridded spoilboard, with a Makita RT0702C router, dust hose, and a mounted LaserTree diode module. The photo establishes that both tools are present on the machine, but does not demonstrate a laser cut or provide a calibrated work-envelope measurement.

## Motion and control hardware

| Function | Owner-reported equipment or configuration | Limits |
|---|---|---|
| Controller | The owner recommends a board with at least five stepper drivers and explicitly discusses matching drivers to a BTT SKR Pro | Exact SKR Pro revision, firmware, and complete installed board configuration are not specified. |
| Stepper motors | Five NEMA 17 motors; the owner recommends at least 20 mm shaft length | Motor make, winding, current, and connector pinout are not stated. |
| Drivers | TMC2209 intended for the BTT SKR Pro; the owner accidentally ordered TMC2008 drivers first | He reports that the wrong driver model caused subtle and confusing problems. No detailed symptom table or driver configuration is provided. |
| End stops | Five end stops listed in the parts table | Switch type, wiring, input assignments, and homing behavior are not documented. |
| PC connection | Repetier Host over USB; a 5 m USB cable was replaced with a CAT5 USB extender | The extender resolved the reported random motion in the wrong direction associated with the vacuum or router starting. No electrical noise measurements or grounding diagram are included. |

## Router, laser, and software

The photographed router is labelled Makita RT0702C. The owner lists a relay module intended to switch the router using a controller-board fan output. This describes his intended control arrangement; the thread does not provide relay ratings, mains wiring, isolation details, or a verified safety circuit.

The owner reports using a LaserTree 40 W diode laser sourced from AliExpress. Adding the laser required forum research, but the post does not describe the final PWM/output pin, enable polarity, supply voltage/current, or wiring. He used Carveco Maker for CNC work and LightBurn for laser work. The latter is a laser workflow, not evidence of a specific controller pin mapping.

The thread describes prior interference: random unexpected direction changes occurred when the vacuum or router started while the PC was connected by a 5 m USB cable. The owner reports that changing to a CAT5 USB extender solved the problem. This is a build-specific report; the thread does not establish the mechanism or prove a generally applicable fix.

## Forum photos reviewed

The wide view shows the red printed LowRider gantry and the router over the spoilboard, with dust extraction attached. It supports the overall layout and physical machine state.

![Alan Lowery's LowRider 3 with Makita router over a gridded spoilboard](https://us2.dh-cdn.net/uploads/db5587/original/3X/0/8/08f0abbfe3c8ea6afe37111ccea41f1c4cf98798.jpeg)

A second view shows the mounted LaserTree module alongside the router. A close-up makes the LaserTree branding and module form visible, but no legible electrical connections or rating plate are shown in these images. The remaining reviewed image is a close-up of the spoilboard and a cut/engraved mark; its lettering is too faint to use as a reliable performance measurement.

![LowRider router and diode-laser tool arrangement](https://us2.dh-cdn.net/uploads/db5587/original/3X/4/2/426419cd0aefa2b939e6156e86ba4e33f0ad8692.jpeg)

![Close view of the LaserTree module on the LowRider](https://us2.dh-cdn.net/uploads/db5587/original/3X/4/e/4e99c87b266f30c41c3545278d2d29eb13d84336.jpeg)

Forum image review-copy SHA-256 values, in order: `1d02289eee2e3e745a5215c9e4f6bf926fed6cd0693b9dd277af7d54ee134ea2`, `3e0ee0279deace8e55ba908a91bddac2f4fef8841597c07b033974fef1cf8549`, and `1782e21e3938d27b4a8e5622956c00c4eb8e8228fc6d37e4a9f490489aca811d`. A fourth image copy was reviewed but not used as substantive wiring evidence; SHA-256 `f7113f808b70f009e9531ee0fcc87e81452e6d1e1ff0f9c7892bddc806bc0e27`.

## Evidence limits

This source is a builder's account and photo record, not a wiring manual. It does not establish a connector-level pinout, driver current or microstep settings, laser control signal assignments, relay circuit, protective-earth path, interlocks, enclosure, fume extraction, or fire-safety provisions. Do not infer any of those details from the photos. The forum reports successful troubleshooting and satisfaction with the machine but contains no quantified accuracy or repeatability results.

## Forum source

V1E.com Forum, Alan Lowery (`apl4`), [“LR build in the UK”](https://forum.v1e.com/t/lr-build-in-the-uk/42830), opening post, 6 March 2024; later LR4 clarification in replies 2–3, 30 January 2026. The opening post supplies the area, parts list, controller/driver mismatch, USB-noise experience, tools, and CAM software. The four attached photos show the machine and tool arrangement. The later replies distinguish LR3's 25 mm conduit from LR4's larger conduit.
