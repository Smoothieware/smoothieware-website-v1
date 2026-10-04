# polskleforgeron's blacksmith plasma table

**Machine identity:** A CNC plasma table built by `polskleforgeron`, a blacksmith/metalworker who says the machine is for their own shop. The LinuxCNC forum build thread starts with a 3D model and initial construction in March 2024, reaches its first cut in May 2024, and records ongoing business use in August 2024. A repository text search on 2026-09-23 found no exact owner alias or thread-title match. It is distinct from other owner-built plasma tables already documented here.

**Evidence state:** The owner reports a successful first cut with floating-head probing and arc-ok behavior, initially with THC disabled. By August, the owner says the table had been used for a 50 m guardrail order, but an X-axis stepper had sometimes missed steps and the THC was not working as expected. These are owner-reported operating experiences; no independent accuracy or cut-quality measurements are supplied.

## Build and motion system

The opening post presents a 3D model and early construction photos, but the accessible forum text does not specify table travel or overall dimensions. The owner described a gantry with two NEMA 23 motors on Y (3 A each), one NEMA 17 on X (1.5 A), and one NEMA 17 on Z (0.5 A). By August 2024, the owner had replaced the X-axis NEMA 17 (reported 65 N·cm) with a NEMA 23 (reported 1.26 N·m) after intermittent missed steps attributed to insufficient torque.

The owner later said a 5:1 reduction was added to the Z motor because it could not reliably support the torch and cable weight, even with spring assistance. During August 2024 use, the owner had removed the non-floating-head limit-switch cables, saying they were unnecessary and could snag during motion; those could be reinstalled. The forum discussion does not provide a full as-built machine envelope, linear guide/screw specification, or axis calibration values.

## Controls and plasma system

The owner selected LinuxCNC QtPlasmaC and a Mesa 7i96S with a THCAD-10. The motion electronics also included separate stepper drivers and a 36 V motor supply; the owner said they planned a 5 V DIN-rail supply for the Mesa board. These details identify the reported components but do not establish an exact as-built wiring map.

The owner initially had a Stahlwerk CUT 70 plasma source and was concerned it used high-frequency starting. They considered selling it and using a Stamos unit instead of modifying the Stahlwerk. In the April 2024 build update, the owner said they intended to use the Stamos; the May 2024 post says a CNC torch from Stahlwerk had been ordered, but does not clearly identify the final installed plasma source. Do not assume the early Stahlwerk was the source used for the successful cut.

In May, the owner reported that floating-head probing worked, arc-ok functioned, and the torch switched at the right time. THC was disabled for that first cut. The owner then said THC was still disabled in a May video update, and that probing sometimes triggered the limit behavior. They suspected unsupported/bouncy 2 mm sheet could double-trigger the floating switch and observed that supporting the sheet helped. These were the owner's diagnosis and test observations; the retrieved thread does not confirm the proposed water table or probing-speed changes resolved the issue.

By August 2024 the owner had started configuring THC with a THCAD-2 and two 1 MΩ resistors on the positive and negative plasma leads. The owner described the THCAD indicator LED as on, but QtPlasmaC's THC-active indicator did not engage during cuts. Another forum member calculated a 21:1 divider from that setup; this respondent calculation is not an independently measured or owner-confirmed calibration. The owner described the machine as saving substantial time in their small business, while reporting the THC issue still unresolved.

## Operation and limitations

The owner reported the first successful cut on 2024-05-18, with THC deliberately disabled. The owner later described sending parts for a 50 m guardrail order through the machine and achieving cuts in thin sheet with little post-grinding when settings were right. The forum does not provide material thickness, consumable setup, feeds, cut speed, accuracy, or a repeatable parameter set for that production work.

The forum contains no verified connector pinout, Mesa terminal-to-sensor schedule, full wiring diagram, torch-trigger contact map, safety circuit, or independently checked THC scaling. The owner said a wiring diagram would be posted later, but none was confirmed in the inspected material. Do not reconstruct wiring from general forum advice or infer a complete map from the stated Mesa model.

## Forum visuals

The owner says the opening post includes images of a 3D model and initial build, and the thread links to a video of the operating machine. The image attachments were not recovered and visually inspected for this dossier; the external video is not used as evidence. No visual claim is made about the table's detailed construction or wiring.

## Forum sources

1. LinuxCNC Forum, `polskleforgeron`, [“The blacksmith's plasma table”](https://forum.linuxcnc.org/plasma-laser/52203-the-blacksmith-s-plasma-table), opening post and page 2, 2024-03-31 through 2024-04-12. The owner describes the design/build stage, planned LinuxCNC and Mesa/THCAD controls, axis-motor ratings, planned plasma source, and construction status.
2. Same thread, [page 5](https://forum.linuxcnc.org/plasma-laser/52203-the-blacksmith-s-plasma-table?start=40), posts 2024-05-18 through 2025-02-01. Owner posts document the first cut, probing/arc-ok behavior, disabled THC, later video update, Z-axis reduction, 2024 shop use, X-axis motor replacement and unresolved THC configuration. Replies are attributed as forum advice, not owner hardware facts.
