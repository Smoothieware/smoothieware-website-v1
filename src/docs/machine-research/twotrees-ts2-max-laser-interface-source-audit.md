# TwoTrees TS2-MAX laser interface source audit

Research capture: 2026-09-26. Atlas profiles: `laserplot-33` (TS2-20 MAX) and `laserplot-34` (TS2-40W MAX). The MAX-family evidence below supplies a source-marked former-controller laser interface, not a verified laser-module mating face or a SmoothieBox wire.

## Manufacturer evidence and limits

The [TwoTrees TS2-MAX introduction](https://wiki.twotrees3d.com/zh/LaserEngravingMachine/TS2-MAX/intro) names both MAX models and describes an MKS DLC32 controller *family*. It does not identify a fitted PCB revision. The [MAX common-fault page](https://wiki.twotrees3d.com/zh/LaserEngravingMachine/TS2-MAX/Common-fault-information), under laser troubleshooting, twice calls the board's laser interface `S-TTL-V` and says to check its cable. These are three literal source marks to inspect at the controller/cable interface; the page does not publish a numbered cavity map, verified left-to-right view, laser-module counterpart, pin electrical levels, or separate supply rating. The contact inventory therefore keeps each mark OPEN and REFERENCE ONLY.

The same MAX common-fault page embeds troubleshooting images under `TS2-10W/guzhang/` and a motor illustration under `TTC3018S/gu zhang/`. Those images cannot establish a MAX-model connector view or a specific X/Y/Z motor harness. Its prose about exchanging motor cables likewise does not establish how many fitted motor connectors each MAX model has. The MAX [assembly index](https://wiki.twotrees3d.com/zh/LaserEngravingMachine/TS2-MAX/TS2-MAX-Series-Assembly-Tutorial) contains two model video links but no extracted contact schedule.

Captured manufacturer HTML files: `/tmp/atlas-ts2max-fault.html` SHA-256 `844cd7362e99aefd757e8e01e3f919f7103321e39e551b9d7a2ad91d98010720`; `/tmp/atlas-ts2max-assembly.html` SHA-256 `d2f6cc4ea285f51c95ef5ff7da6f8d087dad2f3cfb70af154223ee1b424167c8`.

## Atlas decision

Show `S`, `TTL`, and `V` separately as source-marked laser-interface references on each MAX primary drawing. The separation follows the maker's `S-TTL-V` text; no physical numbering or contact order is claimed. Do not draw a SmoothieBox connection to them: the laser-module side, signal reference, voltage, supply, and control contract are unverified. Keep the earlier unverified X, Y1/Y2, Z, and limit groups as inspection leads, not asserted fitted hardware. Do not import the ordinary TS2-10W, TS2-20W, or TS2-40W cable counts or the generic MKS DLC32 revision's pin positions into either MAX profile.
