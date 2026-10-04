# LepreHD's Italian MPCNC Primo with Jackpot 3

**Machine identity:** The V1E user `leprehd`'s first CNC, an individual MPCNC Primo build documented from February 2026. The forum title identifies the builder's country as Italy; no more specific location is given.

**Build and commissioning state:** The owner reported a planned work area of about 610 × 410 mm, stainless-steel rails, and a Jackpot 3 board running FluidNC. By 27 February 2026 he had manually drawn 50 × 50 mm squares through the FluidNC interface, with square side dimensions described as correct and diagonals 0.5–1 mm off. The base was not yet final: he intended to convert it to a torsion box. Motor and endstop lines were also still waiting for cables and connectors. The forum does not show a completed milling or cutting job.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `leprehd`, `MPCNC Primo - Italy`, `610 mm x 410`, `25 mm OD 2 mm`, and the forum thread identity. No matching dossier was found. This is one owner-specific physical build, not a new MPCNC variant.

## Mechanical build

The owner specified stainless tubing measuring 25 mm outside diameter by 2 mm wall, with metric stainless hardware. Printed components were made on a Bambu Lab A1 mini using about 2 kg of Sunlu PLA+. The initially planned bed dimensions are about 610 × 410 mm, with Z height set to the recommended minimum. He reported receiving the idlers, cutting the rails, and assembling the feet, trucks, gantry, and core. After finding that the trucks were mounted on the opposite rails, he swapped them around. He also noted that an M8 × 40 mm bolt length is measured from below the head in the metric convention he uses; in his assembly the bolts interfered with the tool mount, so he planned to shorten some for the core.

The owner reported the Y rails level within 0.15 mm and said the X rails appeared reasonably straight in the photos. Those are his assembly observations, not independent measurements. He was still unable to square the gantry consistently when the core was fitted, so the final machine geometry was not established.

## Controller and initial motion test

| Item | Forum-reported state | Evidence limits |
|---|---|---|
| Controller | Jackpot 3 board | No board revision, connector map, or wiring photo is supplied. |
| Firmware | FluidNC installed with a configuration | The configuration file and signal assignments are not included in the cited thread. |
| Motor test | Owner connected motors and reported they appeared to work; later he manually drew test squares from the FluidNC interface | The particular axis wiring, motor sequence, steps/mm, and test calibration are not shown. |
| Work area | Planned at approximately 610 × 410 mm | The owner had not established the final usable travel. |
| Base | MDF base in initial assembly; a torsion box was planned for a later rebuild | The thread says he intended to detach the rails to finish the base; that work is not shown complete. |

On 27 February 2026, the owner said a manually drawn 50 × 50 mm square had side dimensions that looked correct, while its diagonals differed by about 0.5–1 mm. He then drew another square with 5 mm offsets and smaller 10 mm squares inside. This is preliminary geometry evidence from one test sequence, not a measured accuracy specification; the machine was still out of square and undergoing assembly.

## Forum images reviewed

The first image shows the printed feet, trucks, and core in an early assembly state. A later view shows the assembled gantry and tool-axis parts after the trucks were swapped. These photos document mechanical build progress only.

![Early assembly of the Primo feet, trucks, and core](https://us2.dh-cdn.net/uploads/db5587/original/3X/a/2/a232cd550eec1ecf5414d41345639f3e3c77e803.jpeg)

![Assembled Primo gantry and rails during commissioning](https://us2.dh-cdn.net/uploads/db5587/original/3X/d/e/de6d314ef4b85e0a022a5b3e955b88a6676c7201.jpeg)

The final two photos show the manually drawn square and nested/offset-square test marks. They support the owner's report that axes moved under FluidNC control. The photos do not identify connector wiring, motor phases, switch contacts, or controller pins.

![Hand-drawn 50 mm square test on the unfinished Primo](https://us2.dh-cdn.net/uploads/db5587/original/3X/3/f/3f25d6340e97b6bec38c2484795319520594bea5.jpeg)

![Additional nested square test marks reported by the owner](https://us2.dh-cdn.net/uploads/db5587/original/3X/8/5/855462f0165fe580b55f047e567b82d301f3e121.jpeg)

Local forum-image review-copy SHA-256 values, in displayed order: `bb61c2007472bab23c4ffa2db6c7ca763378c299ec126320029f30a686d0e07d`, `f45a6fea1adb27e307485c94631c486be87edebdb8cd1cd63f56cc4cf2c0d7e1`, `bf55fa654411d2559c88caa1eba5485f09aa80b8689ec9e307dea9ceeeef078a`, and `cefa8d83f02d0187be54f471c84d9e4e116a9ab1efef6228daa51d9f73e38d70`.

## Evidence limits

The thread records an unfinished build and preliminary manual motion tests. It does not supply a complete controller configuration, connector-level pinout, motor coil mapping, endstop wiring, validated travel, a complete safety circuit, or a completed cut. The photo of a drawn square does not establish machine accuracy. Treat all dimensions and measurements here as owner-reported progress, not as build or wiring instructions.

## Forum source

1. V1E.com Forum, `leprehd`, [“MPCNC Primo - Italy”](https://forum.v1e.com/t/mpcnc-primo-italy/53265), posts 1–6, 13–27 February 2026. Owner posts cover dimensions/materials, printed parts, Jackpot 3/FluidNC testing, assembly issues, rail leveling and the preliminary hand-drawn-square checks.
