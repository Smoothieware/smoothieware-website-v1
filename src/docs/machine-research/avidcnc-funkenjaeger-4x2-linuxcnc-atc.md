# Funkenjaeger’s custom 4 × 2 CNC router with pneumatic ATC and actuated dust shoe

**Machine identity:** Funkenjaeger’s individual home-built CNC router, begun around 2017 and described in Avid CNC’s Build Logs category in 2026. The owner says it uses Avid racks, drives, and Z axis, with the rest of the 4 × 2-class machine heavily inspired by Avid but self-designed and built. This is a distinct owner build, not an Avid factory configuration.

**Novelty check:** Repository search on 2026-09-23 for `Funkenjaeger`, `actuated dust shoe`, and the thread identifier found no existing dossier. The thread says the build is generally similar to an Avid 4 × 2, but does not establish that it is the same physical machine as any Avid kit build.

**Build/use state:** Running under LinuxCNC with a Mesa FPGA board. In the June 2026 post the owner demonstrated the pneumatic tool rack and moving dust shoe while cutting foam panels; the owner later reported processing more than 15 foam panels and collecting over 12 gallons of foam chips.

## Documented configuration and mechanisms

| Area | Owner-reported details | Limits |
|---|---|---|
| Overall machine | Self-designed/self-built 4 × 2-class router; Avid racks, drives, and Z axis; Y rails protrude beyond the front of the bed so the spindle can reach a vertically held workpiece. | No exact travel dimensions, frame material, spindle model, or full bill of materials are supplied in the thread. “4 × 2” is the owner’s class description, not a measured travel specification. |
| Motion control | LinuxCNC and a Mesa FPGA board; owner links personal LinuxCNC configuration files. | The forum post does not identify the Mesa card model, IO pin mapping, field wiring, motor/drive interface, or full configuration. The linked GitHub repository is not used here as a factual source. |
| Automatic tool change | Pneumatically actuated rack. Tool holders project over the bed only when the rack extends. Cylinders are angled to avoid protruding behind the frame. The rack attaches to linear bearings through rubber isolators for some compliance. The owner wired a leaf switch at each fork to detect tool presence. | Pneumatic pressure, valve model, sensor circuit, tool count, and PLC/IO assignment are not stated. These details are not sufficient to reproduce the system wiring. |
| Tool setter | An inexpensive commercial tool setter plus an optical beam-break sensor above it. The owner uses the beam-break to permit a rapid approach and then a slower final approach without pre-entering estimated tool lengths in the tool table. | Sensor model and electrical interface are not given. Owner notes the rigidly mounted setter consumes some working area and was still a candidate for redesign. |
| Dust shoe and collection | Compact, high-static-pressure collection approach for the owner’s packed metal-shop garage bay, using small-diameter extraction rather than a conventional 4-inch system. The short foam skirt is inspired by the DATRON CleanCut; TPU/TPE printed bellows can seal the shoe to the spindle. Depending on the job, the owner uses a powerful shop vacuum with a one- or two-stage dust separator, or connects directly to a Fein/Festool dust extractor. | The branded products are design references or owner-reported extraction choices, not a machine-specific electrical schedule. Extractor model, hose fitting, power switching, airflow and pressure measurements are not stated. |
| Shoe actuation | Two vertical cylinders, hinge, and bellcrank move the shoe aside and retract it for tool changes. The bellcrank goes over-center when the shoe is under the spindle. Lift-off hinge and quick-release ball linkages allow removal in about 10 seconds. | This is the owner’s description; no force, cycle-life, or interlock details are supplied. |
| Reported use | The owner reports cutting more than 15 foam panels and collecting more than 12 gallons of foam chips. During one foam test, suction lifted the workpiece from the bed, so the owner removed the matching spindle bellows for that job. | This is owner-reported shop experience, not a controlled efficiency measurement. The later static issue shows a maintenance/electrical concern remained. |
| Static observation | In a July 2026 follow-up, the owner reported that the shoe body was electrically isolated from the machine chassis by the printed plenum and needed a ground strap because static charge could build up. | Preserve as a machine-specific owner observation; the thread does not describe measurement or a validated grounding design. |

## Forum visuals

The build thread includes a demo video and photos. Its two accessible forum-hosted stills below are linked directly from the post; the CDN retrieval returned cache-miss in this research pass, so the images have not been visually inspected and the captions do not claim more than the post text identifies.

![Forum attachment in the owner's dust-shoe description](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/a/a56fd91fcc3893d5b4e46dced00e379dcbd7184d.jpeg)

![Forum attachment in the owner's dust-shoe actuation description](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/a/a5be46c9bc11317929199e2113b34324ff3d283b.jpeg)

## Pinout and reproducibility gaps

The forum post is detailed about mechanical sequencing and the owner’s intended control behavior, but it is not a wiring reference. It does not provide a connector-level pinout, Mesa model, signal names, IO voltage/interface, pneumatic valve wiring, safety circuit schematic, spindle/VFD configuration, or LinuxCNC INI/HAL content in the inspected thread. The linked personal configuration repository is deliberately not used to fill those gaps because this corpus uses forum posts only as factual sources.

## Sources

1. Avid CNC Community forum, Funkenjaeger, [“Actuated dust shoe & ATC rack + tool setter”](https://forum.avidcnc.com/t/actuated-dust-shoe-atc-rack-tool-setter/6248), posts 1, 8, and 12, 10 June and 28 July 2026. Post 1 identifies the custom 4 × 2 build, Avid mechanical components, LinuxCNC/Mesa, and a foam-cutting demo. Post 8 gives the pneumatic rack, tool-present switches, tool setter, dust-shoe design and actuation, and reported foam-cutting/collection totals. Post 12 reports the static-charge and grounding observation. The two embedded stills are forum-linked attachments; their pixels were not verified because the CDN returned cache-miss.
