# Daniel Moura's full-sheet LowRider 4 build in Brazil

**Machine identity:** Daniel Moura's individual V1E LowRider 4 build, documented in the V1E.com Your Builds forum from 31 August 2026. The planned work area is sized around full 2 × 3 m sheets. This is an in-progress physical build, not a completed or commissioned CNC machine; the thread does not yet report a cut.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `DANIEL_MOURA`, `full-sheet 2x3m`, `LowRider 4 in Brazil`, and the forum thread identity. No matching machine dossier was found. This is a distinct owner-specific machine project, not a new LowRider design.

## Design and machine layout

Moura started the build log to record design decisions and troubleshooting. He chose 32 mm steel tubing for the rails and planned a 2 × 3 m cutting area. He is especially interested in whether the LR4 gantry will retain useful rigidity at that span; the thread contains no completed stiffness, accuracy, or cutting test.

He designed a heavily braced table base using leftover MDF strips, cross-members, diagonal braces, and interlocking joints. He described the base as parametric so that its dimensions could still be adjusted before cutting. The intended top is a torsion box. The CAD image below is a design view of the proposed base, not proof that the finished table or machine has been assembled.

![Daniel Moura's CAD model of the heavily braced LowRider 4 table base](https://us2.dh-cdn.net/uploads/db5587/original/3X/6/4/642c11ed29fc587b854aa4fa6d65a5bc87fbda68.jpeg)

## Planned machine components and use

| Subsystem | Owner's report |
|---|---|
| Controller | MKS TinyBee V1.0 running FluidNC; selected in part because import costs make common alternatives expensive in Brazil |
| Controller supply | 24 V during the reported single-driver test |
| Stepper drivers | A TMC2209 V2.0 was tested in standalone/StepStick mode; the thread does not establish the final driver population or a working five-axis configuration |
| Frame/rails | Planned 32 mm steel tubing |
| Tool | Initially plans a Makita-style router to keep moving mass down on the wide gantry; spindle and VFD are deferred until after operation can be assessed |
| Dust collection | Planned from the outset, adapting the LR4 dust collection parts to an existing larger dust collector |
| Pendant | Plans a dedicated pendant/display inspired by a community example for jogging, homing and basic machine operation; not reported as built |
| Table | Parametric, braced MDF base; torsion-box top planned |

The opening post says that the TinyBee had been purchased and that printed parts, table design, motor preparation, wiring and endstops were in progress. By 13 September the owner had posted photographs of the build. The latest owner entry available in the thread on 21 September shows additional electrical preparation. None of these posts establishes that homing, motion, controller setup or cutting has been commissioned successfully.

## TinyBee and TMC2209 troubleshooting

On 18 September, Moura reported testing one MKS TMC2209 V2.0 driver and one motor with the TinyBee board open and outside an enclosure. He measured approximately 51 °C after four minutes, then about 59 °C while it continued heating. The driver was in standalone/StepStick mode, with motor current set by its Vref potentiometer. He asked whether this was expected before running all five drivers in the enclosure.

A forum participant using the name RockinRiley replied that the TinyBee needs a “special fix” for TMC2209s and told him to shut down. The reply did not identify the electrical change in its text. The same participant said the previously offered configuration was unsuitable because it used 8825 drivers and did not enable UART. Treat this as a peer warning from the thread, not as a complete modification procedure or verified diagnosis.

Moura later said forced ventilation held the tested driver around 48–50 °C. He asked whether UART modification was required, whether standalone operation would work without software current and diagnostic controls, and which MS1/MS2/MS3 switch positions and Vref/current range to use. RockinRiley explicitly said he was unsure. The thread therefore does not resolve the driver's required wiring, switch settings, safe current, or temperature limits for this board and setup. Do not infer a safe setting or apply an incomplete modification from these posts.

## Forum photos reviewed

The CAD screenshot above shows a parametric base made from a perimeter frame, vertical supports, and multiple diagonal braces. It documents the owner's design work but not construction tolerances or measured rigidity.

The following later forum photo shows an enclosure and a bundle of labelled wires during electronics preparation. The available view does not reveal component part numbers, board traces, connector pin assignments, or a complete as-built wiring map.

![Owner-posted view of the TinyBee build wiring and enclosure; exact contacts are not legible](https://us2.dh-cdn.net/uploads/db5587/original/3X/a/5/a5e033d1091c5ca73faa4a5c99364bef33b0887a.jpeg)

## Pinout and evidence limits

The inspected posts do not provide a machine-specific FluidNC YAML, driver-to-axis pin map, limit-switch contact map, UART modification schematic, spindle signal assignment, emergency-stop or interlock circuit, or full connector-level wiring diagram. The 24 V supply and standalone driver mode are documented for the owner's limited single-driver temperature test only. No cut, homing result, calibrated travel, gantry deflection measurement, or five-driver test is reported.

This entry records a build in progress and the owner's unresolved controller/driver questions. It is useful evidence of a specific large-format machine project, but not an operational machine specification or wiring guide. Revisit the thread before adding later build or commissioning claims.

## Forum sources

1. V1E.com Forum, Daniel Moura, [“Building a Full-Sheet 2x3m LowRider 4 in Brazil”](https://forum.v1e.com/t/building-a-full-sheet-2x3m-lowrider-4-in-brazil/54718), opening post, 31 August 2026. Owner describes the 2 × 3 m target, 32 mm tubing, table-base design, planned TinyBee/FluidNC controller, router, dust collection and pendant.
2. Same thread, posts 10–16, [latest owner entry at post 16](https://forum.v1e.com/t/building-a-full-sheet-2x3m-lowrider-4-in-brazil/54718/16), 13–21 September 2026. Posts include the build images, single-driver 24 V temperature test, peer warning, unresolved UART/standalone questions and later preparation photos.
