# Aaryn (Mordiev)'s evolving MPCNC in Colorado

**Machine identity:** Aaryn, posting as `mordiev`, documented one owner-built MPCNC in Colorado. The 2019 enlarged machine is described by the owner as a rebuild of the original; this dossier treats the two stages as one evolving physical build rather than two machines. The generic MPCNC family also appears in the separate wiki research, but no exact Aaryn/Mordiev build or thread match was found in the repository text search on 2026-09-23.

**Evidence state:** The owner reported first movement and a soft-wood test piece in October 2018, described repeat test cuts and a pine ship-wheel relief later that month, and documented a substantially larger rebuild in 2019. The thread also records an unresolved skipped-step problem and one owner-performed motor test through which the owner attributed reduced holding force to the Cat 5e cable. Later forum replies questioned whether the cable alone explained it; a durable repair and follow-up cutting result are not recorded in the inspected thread.

## Original machine and setup

In the opening post on 2018-10-13, Aaryn described the first machine as 25 × 47 inches overall with a 14 × 36 inch work area. The owner called it sturdy, square, and level after testing its movement and having it draw lines. These are owner-reported checks, not metrology results. Printed alignment stops were measured from the corners and bolted down; the owner explicitly said no limit switches were wired. The owner described manually bumping the axes against those stops before homing as a way to square the machine.

For spindle power, Aaryn described wiring a light switch to interrupt spindle power, positioned so X travel physically tripped it at the end of a job. The owner called this crude and temporary. The post does not identify it as an emergency stop or provide a rated safety circuit; do not treat it as one. A salvaged 12 V server fan, estimated by the owner at about 3 A, was used to clear chips and dust, though the owner had not settled on a mounting position.

## Cutting history

On 2018-10-26, Aaryn described using Estlcam and block milling to cut a scaled ship-wheel design from a 1 × 4 pine board with a 1/8-inch flat end mill. The owner reports that the first side cut well, but after flipping the workpiece the centre hole was misaligned slightly; screws alone had not registered the second side accurately. Other test pieces and later finishing-pass experiments are discussed in the same thread, but no general-purpose feeds or depths are established there.

## 2019 rebuild and laser configuration

On 2019-07-09, Aaryn said the original machine was sitting on the new 5 × 8 foot bench. By 2019-12-03 the owner described a 49 × 68 inch work area, cable management, electronics cases, a mostly completed enclosure, and separate quick-connect Z assemblies for changing between a spindle and laser. The owner said the enclosure still needed work and was not yet fully enclosed at that time.

The owner reported replacing an older inexpensive 15 W laser module, described as having poor optics, with an Endurance 5.6 W module. In the 2019-12-03 post, the laser was described as powered through the controller's “Second Extruder MOSFET”; the owner's firmware configuration treated that output as a second fan controlled with `M106 P1 SXXX`. The laser cooling fan was modified to run whenever the machine was powered. The owner also said “Fan pin #1” was wired toward a Z-axis air-assist/blower, but that blower was not yet connected. Two IoT relays were reported: one for the spindle and one for a box fan intended eventually to be replaced with dust collection. The spoilboard had a laser-burned 100 mm placement grid.

These are configuration notes for the owner's reported firmware and hardware at that point in the thread. They do not provide terminal numbers, connector orientation, polarity, current limits, or an independently checked controller schematic. In particular, `M106 P1 SXXX` is not a universal laser-control recipe.

## Board, wiring, and fault history

On 2019-12-03, Aaryn identified an MKS Base v1.1 as the board then in use. On 2019-12-04, after a firmware current-setting change, the owner suspected the board had stopped working and discussed using a RAMBo from another printer. On 2019-12-06, the owner found the LCD and mainboard were receiving 5 V from a Raspberry Pi even while the 12 V supply was off; when the 12 V supply was turned on, the motors energized. The posts do not make the exact board replacement sequence fully clear, so the later RAMBo mention should not be treated as proof that the RAMBo was installed.

The owner continued to report random X-axis step loss. On 2019-12-16, Aaryn attributed weak motor holding force to the Cat 5e cable used with RJ45 connectors for series motor wiring. The owner's test was to connect a motor directly to the board, bypassing that cable; the owner reported that the motor then held much more strongly. Other forum participants questioned whether the cable resistance alone explained the symptoms, and the inspected posts do not confirm a completed cable replacement or sustained repair. Preserve this as the owner's diagnosis and test result, not as a general wiring rule.

The thread identifies no RJ45 contact order or connector pin map. Its reference to “series connections” does not identify which motor coils or RJ45 contacts were paired. No pinout can safely be reconstructed from the text or photographs.

## Forum photos visually reviewed

The first owner photo shows the compact MPCNC over a wooden work surface, with a spindle assembly and visible routed work area. A later rebuild photo shows a substantially larger bench-mounted gantry with a wood-panel surround. These views establish broad layout only. A close-up of the spindle/Z assembly and colored wiring has no readable terminal markings; it does not reveal an electrical map.

![Aaryn's original MPCNC over its work surface; visual review confirms the broad gantry layout, not wiring assignments](https://us1.dh-cdn.net/uploads/db5587/optimized/2X/a/ae08be3845fa1bfe694ec1db298f7651d8fe73ba_2_1380x1000.jpeg)

![Aaryn's later, larger MPCNC rebuild; the thread says its enclosure was still unfinished at this point](https://us1.dh-cdn.net/uploads/db5587/original/2X/6/65f8f0dd48f47966864f00a8cd92152781afaa2a.jpeg)

![Close-up of the spindle/Z assembly and wiring; no connector labels or contact assignments are legible](https://us1.dh-cdn.net/uploads/db5587/optimized/2X/3/34d98fe2bcfe17dca5c8f9392af53277e087fa3e_2_1380x1000.jpeg)

## Pinout and limits

The posts give useful functional assignments for the owner's second-extruder MOSFET, reported fan command, always-on laser cooling fan, unfinished air-assist connection, spindle relay, and box-fan relay. They do not give connector-level terminal or RJ45 pin assignments. The enclosure was still incomplete in the dated update, and step loss was not shown resolved in the inspected thread. This is a historical build record, not a current-condition report, safety review, or wiring instruction.

## Forum source

1. V1E.com Forum, Aaryn (`mordiev`), [“Aaryn's build in Colorado”](https://forum.v1e.com/t/aaryns-build-in-colorado/8324), posts 1–13 and 14–20, 2018-10-13 through 2019-12-06. Owner posts cover dimensions, alignment stops, spindle switch, fan, Estlcam test cuts, the rebuild, laser/controller assignments, and power/step-loss observations.
2. V1E.com Forum, same thread, [page 2](https://forum.v1e.com/t/aaryns-build-in-colorado/8324?page=2), posts 21–34, 2019-12-06 through 2019-12-17. Aaryn's posts 22 and 25–31 record the later skipped-step investigation and direct-to-board motor test; replies include disagreement about the cable diagnosis.
3. Forum-posted photos embedded above: original machine photo from post 1, enlarged rebuild photo from post 14, and spindle/Z/wiring close-up from the rebuild sequence. All three were visually opened and reviewed; none exposes readable connector contact assignments.
