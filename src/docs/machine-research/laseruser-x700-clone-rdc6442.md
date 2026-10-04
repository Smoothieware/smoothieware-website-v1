# 500 × 700 mm X700 clone CO₂ laser with Ruida RDC6442

**Identity:** forum profile calls the machine an “X700 Clone”; owner reports 75 W, 500 × 700 mm bed, top-left home, and Ruida RDC6442.  
**Evidence state:** user gives terminal-level CN5-to-Cloudray PSU wire mapping while diagnosing intermittent laser firing and water errors. The fault was not conclusively resolved in the viewed posts.  
**Novelty:** X700 clone was not found in the machine-control survey search, but needs full repository-wide de-duplication before being counted as new.

## Owner-reported configuration

The owner reports upgrading the clone's original supply to a Cloudray 80 W PSU while retaining a Reci 75 W tube. In a later post he identifies the supply as a **Cloudray MYJG-80W** and says it came without documentation. This is an owner-reported model, not a verified product-revision label or an electrical specification. Control uses a Ruida RDC6442; the forum profile lists RDWorks 8.01.11, Windows 7 Pro, and 500 × 700 mm bed. After the supply upgrade, firing worked initially, then became intermittent over subsequent weeks.

In a follow-up the owner says Ruida CN5 pin 1 (GND) goes to Cloudray G and the water-protection circuit; CN5 pin 2 (L-On1) goes to Cloudray L; CN5 pin 3 (LPWM1) goes to Cloudray IN; CN5 pin 4 (WS1) goes to the other side of the water-protection circuit. The owner says Cloudray G and P were jumpered, describing a bypass rather than a demonstrated working water switch. He reported occasional “Water Error” and inconsistent firing. These are observations on one machine and PSU, not a validated generic map.

| Owner-reported MYJG-80W control-connector mark | Observed role or connection |
|---|---|
| L | Blue wire; later identified as Ruida CN5/2 L-On1. |
| P | Jumpered to G in the owner's observed setup; water-protection behavior was not validated. |
| G | Yellow wire towards the controller and the owner's P jumper; later identified with Ruida CN5/1 GND. |
| IN | Red wire; later identified as Ruida CN5/3 LPWM1. |
| H | No wire in the owner's observed six-position control connector. |
| 5V | No wire in the owner's observed six-position control connector. |

The post names all six terminal marks but does not establish their physical left-to-right order or electrical ratings. Ruida CN5/4 WS1 and its water-protection path are historical controller wiring, not a seventh PSU terminal. The separate power connector and laser high-voltage connections are outside this low-voltage control map.

For the SmoothieBox study, the owner-reported LPWM1-to-IN path supports a **dotted PWM function guess** from the proposed exterior PWM contact to the PSU IN contact. It does not establish a direct conductor, compatible output/input voltage, PWM polarity or frequency, a return, laser enable, water protection, or a safe replacement for the Ruida circuit. The other five PSU control marks and the separate water-protection circuit stay OPEN. In the later post, an analog-mode change suggested by Cloudray briefly restored firing at a different tube current before the failure returned; the distributor arranged a warranty return. That outcome makes a universal PWM wiring claim especially unwarranted.

A helper elsewhere in the thread mentions that the PSU's own water protect is often jumpered with Ruida systems. That advice is not a safety validation and should not be generalized. The owner explicitly asked whether the jumper was correct and reported that the supply fired only once or twice in isolation, leaving the underlying fault unsettled in the inspected excerpts.

## Operation / fault symptoms

The owner reports that the machine moved and the Ruida/XY system ran normally when both PSU connectors were unplugged, but laser firing did not. The owner also described Ruida water-protect alerts, a CN5 trigger reading that varied between 3.6 V and 4.4 V with the PSU connected/disconnected, and a 0.2 V reading while pulsing. These readings are context for diagnosis only; they are not expected-voltage specifications.

## Visuals and missing information

The thread asks for a photo of PSU connections and Cloudray documentation. A stable full wiring schematic and confirmed repair outcome were not present in the extracted posts. Visual attachments exist in the forum thread, but were not pixel-inspected in this pass. Laser tube high voltage, grounding, interlocks, water-protection design, and full system safety are not documented sufficiently to reproduce.

The thread reports that unplugging both control connectors from the Cloudray supply restored reliable controller and XY operation but necessarily left the laser inactive. The owner then recorded CN5 pin 2 at 4.4 V idle with the supply disconnected and the same 0.2 V reading during a Ruida pulse. These are measurements from one unresolved fault investigation, not specifications or diagnostic thresholds. The final inspected owner post asks whether the supply's G/P jumper was required for its red test button; the retrieved thread does not show a confirmed repair.

## Sources (forum only)

1. Glenn Clevenger and replies, “x700 clone with Ruida 6442 controller - intermittent firing issues,” LaserUser Forum, 2019-10-11 onward: https://forum.laseruser.com/viewtopic.php?t=4235 . The title and owner profile identify the clone, 75 W class, 500 × 700 mm bed, and top-left home. The owner's later [page-two follow-up](https://forum.laseruser.com/viewtopic.php?t=4235&start=10) identifies the MYJG-80W and reports the temporary analog-mode result and warranty return. Owner posts 1, 8, and 9 describe the supply/tube upgrade, symptoms, and reported CN5 connections; replies ask for the exact PSU documentation. Reported wiring and meter readings remain specific to this unresolved case.

## Manufacturer reference comparison (2026-09-25)

The official [RDC6442G(U)-DFM-RD Control System User's Manual V1.3](https://www.ruidacontroller.com/wp-content/uploads/2021/10/RDC6442GU-DFM-RD-Control-System-V1.3-Manual.pdf), section 4.10, documents a related but specifically named controller variant: CN5 pin 1 GND, pin 2 L-ON1, pin 3 LPWM1, pin 4 WP1 (water protector input), and pin 5 L-AN1 (analog laser-power signal). Its pin 4 name is **WP1**, whereas the owner calls the observed pin **WS1**. The thread identifies the board only as “RDC6442”; it does not establish that the installed board is the manual's RDC6442G(U)-DFM-RD variant, so do not silently rename the owner-observed WS1 contact or treat the manual table as the X700's exact installed pinout.

The manual describes the water-protection input as 24 V logic and says an enabled input closes the laser on a high level. That is a variant-specific reference, not a wiring recommendation for this unresolved machine. The forum's reported water-switch routing, G/P jumper, and intermittent-fault readings remain owner observations, not a validated safety circuit or approved laser wiring. The manual does not establish the Cloudray PSU-side contacts for this build.
