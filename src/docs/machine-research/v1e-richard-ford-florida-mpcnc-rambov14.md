# Richard Ford's Florida MPCNC with Rambo 1.4 Dual Endstops

**Machine identity:** Richard Ford (`rvf`)'s individual MPCNC build in Fort Lauderdale, Florida. His forum log began 2 February 2021 and describes a working machine plus build/commissioning lessons. He said this was his first machine build, though he had used CNC routers before.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `rvf`, Richard Ford, “MPCNC build in Florida,” and the Rambo 1.4/dual-endstop issue. No matching dossier was found. This is a distinct owner build, not an alias or revision of the other Florida-area MPCNC dossiers.

## Machine and controls

Ford said he started from mostly default MPCNC settings and used a Harbor Freight steel cart as the table. He bought a Rambo 1.4 from V1 Engineering with a dual-endstop kit. The board arrived with V1 firmware already flashed, but it was not the dual-endstop firmware expected for the harness he had ordered. He later downloaded and compiled the dual-endstop firmware and used it to troubleshoot the wiring. The thread does not identify the exact firmware version or provide the compiled configuration.

Ford documented the mismatch by comparing firmware behavior: with regular firmware, his `M119` report showed `x`, `y`, and `z`; with dual-endstop firmware, it showed `x1`, `y1`, `x2`, `y2`, and `z`. When he used dual-endstop wiring with ordinary firmware, open switches appeared as triggered. He also found that he had initially wired one of the paired X or Y motors in a way that activated one motor but not both. After flashing the correct firmware and troubleshooting, he reported that he had successfully resolved the wiring.

These are useful owner-reported commissioning observations, but the thread does not provide a complete pin map. Ford says the endstop instructions clearly pointed him to the `-` and `S` pins, but his post does not identify specific board connector numbers or signal names for individual switches. He also was uncertain whether reversing endstop polarity was harmless or dangerous; this thread does not establish the electrical answer, so this dossier does not infer one.

For the single Z stepper, Ford used the third connector from the left in the Rambo photo, while he was uncertain whether the third or fourth from the left was intended. A forum respondent said those two plugs are wired in parallel and share one driver; that is a reply from another user, not independently verified in this dossier. Do not use this note as a board wiring instruction.

The Rambo also needed added wires between the green power-supply connector/jumper block and the six-wire jumper block that plugs into the board. Ford used leftover solid-core wire he estimated as 14 or 16 AWG; he later clarified that he did not know which gauge and that the wire came from a neighbor. The post does not include a verified cross-section or current rating. Again, no gauge recommendation is inferred from the photo or other users' replies.

## Build experience and unresolved evidence

Ford described the machine as working after he corrected the firmware and wiring, but the thread focuses on assembly and documentation rather than cutting performance. He reported difficult squaring, repeated disassembly, interference that obstructed access to squaring bolts, and uncertainty about torque guidance. He also wished the build steps explicitly called out cutting the belt and Z lead screw to lengths derived from the machine calculator.

The photos show the MPCNC on a steel cart and a close-up of the added power wires. The close-up is not sufficiently clear to read terminal labels or determine board pin assignments. No complete configuration, measured work area, board connector map, motor phase wiring, switch state table, verified polarity rules, or safety schematic is published in the thread.

## Forum photos reviewed

The first photo shows the assembled machine on the steel cart. It supports the overall layout only.

![Richard Ford's MPCNC on a steel cart](https://us2.dh-cdn.net/uploads/db5587/original/3X/a/f/afee12400eea90dc8102a3876f5d6d5bc0f3412b.jpeg)

The second photo is Ford's close-up of the additional power leads he needed to connect the supply/jumper blocks. The board and connector are too soft in the image to identify individual terminals or make a pinout.

![Owner's close-up of added power wires for the Rambo board](https://us2.dh-cdn.net/uploads/db5587/original/3X/2/4/24850ba359f4a810fda4ddf6da992e65fe3ce496.jpeg)

Local forum-image review-copy SHA-256 values (machine photo, then power-lead photo): `aff170a9b41fdf472620b7286ea188031164abd3d7e751f1b0657842b3b376f5`, `e8ee7a225649c4e7dc19699a3a0992a35d229ea08b1049785f6a2460f458db02`.

## Evidence limits

The owner states that he ultimately got the machine working, but the thread does not show the complete wiring or reproduce the final firmware config. The motor/limit-switch issue is documented as resolved without preserving a full wiring map. The images are contextual only; they do not verify pin assignments, polarity, wire gauge, or safe power wiring. Do not use this dossier as electrical or firmware setup instructions.

## Forum source

1. V1E.com Forum, Richard Ford (`rvf`), [“MPCNC build in Florida”](https://forum.v1e.com/t/mpcnc-build-in-florida/25003), owner posts 1–3, 10–13, 2–4 February 2021, plus location reply 18, 7 April 2021. The cited owner posts document the Rambo 1.4 dual-endstop kit, firmware mismatch, `M119` outputs, troubleshooting result, added supply wiring, and photographs. Other users' responses are not treated as confirmed facts about Ford's machine.
