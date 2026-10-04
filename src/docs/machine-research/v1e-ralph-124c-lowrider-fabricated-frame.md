# Ralph's Full-Sheet LowRider CNC with Welded Steel Frame

**Machine identity:** Ralph (`ralph.124c`)'s individual LowRider-based router CNC, presented in April 2020. The thread describes one altered physical machine, not multiple variants.

**Evidence state:** The owner reported a target of cutting full plywood sheets measuring 2500 × 1250 mm. This is a design goal, not a verified cutting envelope. By the opening post he was running test jobs and reported an intermittent Z-axis stoppage. He described the machine's performance and achievable accuracy favorably but gave no measured accuracy data.

**Novelty check:** On 2026-09-23, repository dossiers were searched for `ralph.124c`, the thread title, `2500 × 1250`, the welded rectangular tubes, and `TMC5160`. No matching individual-machine dossier was found. A different Fabien LR3 dossier exists; the builders and builds are distinct.

## Build and intended work area

Ralph started from a LowRider CNC design and wanted to machine full-size plywood sheets, 2500 × 1250 mm. He initially wanted the machine to come apart easily for garage storage, but reported that the XZ main pieces separated when he lifted the assembly from its table. He then redesigned those parts and welded rectangular steel tubes to size. The result is a custom steel-reinforced LowRider build; the post does not identify the exact LowRider revision.

He used NEMA 23 motors on Z and Y while retaining a NEMA 17 on X. The roughly 3 m-long table can be split in half for storage and has removable legs. In a later reply, Ralph clarified that the gantry itself stays in one piece, though it is narrow enough to put on a shelf. These are the owner's reported dimensions and handling details; the thread does not establish the final machine's measured travel or repeatability.

## Controls, motion, and spindle

| Subsystem | Owner-reported details | Evidence limits |
|---|---|---|
| Controller | SKR V1.3 | No board revision photo or connector map is provided in the cited post. |
| Drivers | TMC5160 | Driver current, microstepping, and motor wiring are not stated. |
| Motors | NEMA 23 on Y and Z; NEMA 17 on X | The post does not give winding, current, or connector pin assignments. |
| CAM/control workflow | Estlcam 8 worked for the owner's tests; Aspire 9 had issues | The owner tried Marlin `mm_test` processors 3, 4, and 5 and adjusted speed and firmware-current settings; no full configuration is published. |
| Spindle | 500 W brushless spindle, 48 V, 12,000 rpm, ER16 chuck, separate controller and potentiometer | Ralph says the kit had three motor wires, distinguishing it from visually similar two-wire brushed models. He powered it through a DC-DC converter from the 24 V supply used by the main controller board. No wiring diagram or verified input/output measurements are supplied. |
| Mechanical layout | X-axis cable drag chain; custom aluminum brackets at the front faces attach timing belts | The post gives no dimensions or drawing for the brackets or frame. |

## Reported commissioning behavior

At the time of the opening post Ralph was doing test runs. He reported that the Z axis intermittently stopped moving: sometimes one side stopped, sometimes both, and motion later resumed. He said he had checked driver and motor temperatures, connectors, and cables without finding a cause. The thread does not resolve the fault, establish whether it was firmware, drive, wiring, or mechanical, or show a confirmed repair. Ralph considered continuing with Estlcam because it had worked better for him than Aspire 9 in those tests.

The forum post does not report a completed plywood production job. The full-sheet dimensions should therefore remain the intended stock size, not a verified result. Replies suggesting that acceleration/feed settings might be involved are advice from other users, not confirmed diagnosis.

## Forum image reviewed

The opening photo shows a large router table with a gantry spanning the work surface. It supports the general machine layout and large-table context only; it does not expose the controller wiring or identify contact assignments. The image was downloaded from the forum attachment CDN for visual review; local review-copy SHA-256: `d99cbd0764f4ad14f3317cf7c0e86339c20aca6041fa929f339276ee3a82afd9`.

![Ralph's LowRider-based CNC on its large table, first forum photo](https://us2.dh-cdn.net/uploads/db5587/original/3X/4/3/4361467251dbe5cdc5e6123ba425cbfc55e4ee84.jpeg)

No pinout or wiring diagram appears in this thread. The photo is not used to infer connector functions.

## Evidence limits

This dossier records forum statements by the machine's owner. It does not provide a measured cutting envelope, independent accuracy test, complete controller configuration, verified spindle wiring, connector-level pinout, safety circuit, or a resolved intermittent Z-axis fault. Do not use it as wiring or machine-commissioning instructions.

## Forum source

1. V1E.com Forum, Ralph (`ralph.124c`), [“Say hello to my Lowrider”](https://forum.v1e.com/t/say-hello-to-my-lowrider/16307), opening post and replies 2–19, 5–10 April 2020. The opening post gives the intended sheet size, welded frame modification, motor/controller/spindle setup, table design, CAM observations, and unresolved Z behavior. Replies 16 and 19 clarify storage handling and spindle kit details.
