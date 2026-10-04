# BOOTSTRAPPYWORKSHOP’s first scratch-built CNC router

**Machine identity:** The individual machine that BOOTSTRAPPYWORKSHOP calls “My very first CNC Router build,” published as an X/Y-table-style CNC mill/router on OpenBuilds Builds in July 2021. The author describes it as entirely scratch-built, with a nominal cutting area of about 25 × 22 in. This dossier records the published machine, not the generic plans or parts as universal specifications.

**Novelty check:** On 2026-09-23, repository Markdown/HTML and both the local atlas and wiki dossiers were searched for BOOTSTRAPPYWORKSHOP, First CNC Router, and the reported component combination. No matching dossier was found.

**Build/use state:** The page presents a machine build and component list, but the inspected forum material does not establish a first cut or a completed test. Its author says he hopes to overhaul it with a new linear-bearing system based on stainless tubing and cast-aluminium gantry/Z parts. Treat that overhaul as a plan in the July 2021 post; no completion is established here.

## Author-reported construction and controls

| Area | Reported information | Limits |
|---|---|---|
| Base and structure | Base made from four layers of 3/8 in OSB, described as recycled pallet dividers glued together. White-painted structural pieces are steel; the author says tubing was cut into angle iron and the holes drilled on a drill press. | No dimensional drawing, machine mass, alignment or stiffness measurement, or material grade is given. |
| Motion | Three 8 mm T8 metric lead screws, listed as 1040 mm long; anti-backlash nut blocks; NEMA 23 motors paired with StepperOnline DM542T drivers. | Motor winding/current and driver DIP settings, couplings, axis mapping, steps/mm, and travel limits are not supplied. |
| Controller and computer | An eBay Dell PC running LinuxCNC, connected to a C10 breakout board installed in an old PC case. | Dell model, LinuxCNC version, C10 revision, parallel-port mapping, firmware/configuration, and exact IO wiring are not shown. |
| Cutting tool | Makita RT0701C compact router, listed by the author. | Router mount, collet/tool range, speed setting, relay or spindle-control wiring, and completed cutting behavior are not documented in the inspected build page. |
| Work envelope | Author reports the cutting area as about 25 × 22 in. | No measured Z range or exact usable axis travels are published. |
| Sensors/probe | A touch probe appears in the listed parts. | The inspected page does not say it was installed or provide probe wiring, calibration, or a probing routine. |

## Planned changes and unknowns

The author says an overhaul was hoped for by the end of the year, replacing the linear-bearing arrangement with stainless tubing and cast aluminium for the gantry and Z axis. The page does not establish that this was completed. It also lists an IoT switching relay power strip and a 36 V, 400 W supply with a note that the author expected to replace it with a 48 V supply. These are parts-list entries/plans, not confirmed installed or electrically validated machine features.

## Forum visuals and wiring evidence

The OpenBuilds page is a build publication with sections for details, parts list, files/drawings, and discussion. The text inspected here identifies the frame approach and electronics, but did not expose an author-drawn controller or motor wiring diagram. The page fetch timed out in the browser research tool; the searchable forum build text was inspected. Its original photos/drawings should be checked at the [OpenBuilds source page](https://builds.openbuilds.com/builds/first-cnc-router.10014/) before attempting any physical reconstruction.

## Pinout and use limits

No C10 pin mapping, parallel-port pin assignment, DM542T input wiring, motor coil pairing, limit switch map, relay output wiring, E-stop, or LinuxCNC HAL/INI file is provided in the inspected text. The fact that a LinuxCNC PC and breakout board are listed does not prove that the machine was commissioned or that the IO is wired safely. Keep the machine in the “published build/configuration, operation not demonstrated here” evidence state.

## Source

1. OpenBuilds Builds, BOOTSTRAPPYWORKSHOP, [“First CNC Router”](https://builds.openbuilds.com/builds/first-cnc-router.10014/), published 24 July 2021. The forum build description supplies the scratch-built frame, cutting area, T8 screws, NEMA 23/DM542T motion system, Dell/LinuxCNC/C10 arrangement, Makita router, listed probe and power components, and planned overhaul. Linked commercial-product pages are not used as evidence.
