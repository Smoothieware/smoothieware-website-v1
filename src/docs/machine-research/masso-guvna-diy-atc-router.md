# guvna’s DIY MASSO router with ATC and sliding tool rack

**Machine identity:** guvna’s individual home-designed CNC router, built in Newcastle, Australia. The owner says the machine ran for a couple of years before posting in August 2024 and had completed more than 250 cutting jobs at that point. The title identifies the project as an ATC build with a sliding tool rack.

**Novelty check:** Repository search on 2026-09-23 for `guvna`, `DIY build with ATC and sliding tool rack`, and thread ID `4270` found no existing per-machine dossier. This is an individual build record; it is not a separate machine family.

**Use state:** Owner reports cutting wood only and says the machine had no issues during the reported period. This is the owner’s account; the thread does not contain independent performance measurements or a specific sample job.

## Owner-reported configuration

| Area | Forum evidence | Limits |
|---|---|---|
| Frame and gantry | Heavy 80 × 80 mm aluminum profile frame, 80 × 160 mm gantry. Owner designed the machine in Fusion 360 and had plates cut at a machine shop. | Travel dimensions, plate thickness/material, and assembled geometry are not specified in the post. |
| Controller | MASSO controller; owner selected MASSO because it supported ATC without requiring a PC. | Exact MASSO model and firmware version are not given. The post does not show controller setup or IO configuration. |
| Motors | Stepper Online closed-loop stepper motors. | Motor/drive models, supply voltage, current, encoder feedback wiring, and axis assignments are not stated. |
| Spindle | Jianken 1.5 kW spindle. | Spindle variant, VFD model, spindle speed range, and VFD command wiring are not stated. |
| ATC / tool rack | Thread title describes an ATC and sliding tool rack. Owner says the control was chosen partly for ATC support. | The inspected owner post does not describe rack actuation, tool count, sensors, tool-change sequence, or completed automatic tool changes. Do not infer demonstrated ATC operation from the title alone. |
| Printed accessories | Owner reports designing and having multiple parts 3D printed, including proximity-sensor mounts, chain mounts, and a dust boot. | The post does not identify printed material or provide part drawings. |
| Reported workload | More than 250 completed cutting jobs over a couple of years; owner says all cutting was in wood and the router had no issues. | Owner-reported totals; no uptime log, job list, or independent inspection is available. |

## Visual evidence

The owner’s post includes nine photographs attached to the forum thread. The attachment list is visible there, but the forum extraction used in this research pass did not expose stable direct image URLs or allow the image pixels to be reviewed. See the [original build post](https://forums.masso.com.au/threads/diy-build-with-atc-and-sliding-tool-rack.4270/) for the owner’s attachments.

## Pinout and operation gaps

The forum post identifies the overall controller and several mechanical/electrical components, but does not provide an electrical diagram, terminal assignments, limit/proximity sensor wiring, stepper driver model/settings, spindle/VFD configuration, safety circuit, or ATC IO sequence. It also does not establish that the ATC completed a tool change. No usable connector pinout can be transcribed from this source.

## Source

1. MASSO Community Forums, guvna, [“DIY build with ATC and sliding tool rack”](https://forums.masso.com.au/threads/diy-build-with-atc-and-sliding-tool-rack.4270/), owner post dated 7 August 2024. The owner supplies the frame and gantry profiles, Fusion 360 design workflow, MASSO rationale, closed-loop stepper and spindle identities, accessory mounts, woodworking-only use, and reported job count. The topic title is the only inspected forum evidence that names the sliding ATC rack; no later tool-change demonstration is claimed.
