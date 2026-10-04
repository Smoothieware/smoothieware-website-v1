# Unlogic’s Optimum Optimill MH50V LinuxCNC conversion

**Machine identity:** Unlogic’s specific Optimum-branded MH50V manual mill, converted by its owner to LinuxCNC. The owner says he first bought a smaller MH35V, returned it after defects and a long delay, and received the larger MH50V from the reseller. This dossier concerns only the MH50V; the separate German MH50G project mentioned in the thread is not merged with it.

**Novelty check:** On 2026-09-23, repository Markdown/HTML, the local atlas, and the separate wiki directory were searched for `Unlogic`, `Optimill MH50V`, and the thread title. No matching machine dossier was found.

**Operating state:** The owner reports completing CNC retrofit commissioning in spring 2024, making a first part, then milling 6082 aluminium with a 12 mm DLC-coated carbide end mill and a FreeCAD adaptive toolpath. By June he said he had been using the mill regularly and liked the finish. In that same update, he reported a homing/servo wiring fault that damaged a proximity switch and the Mesa 7i96S DIR+ output; he moved X to another step generator and ordered a replacement board. The later thread records the new spindle drive installation. It also records a planned ATC/tool-release cylinder, not a confirmed automatic tool changer.

## Owner-reported configuration

| Area | Reported details | Scope and uncertainty |
|---|---|---|
| Base machine and preparation | Optimum Optimill MH50V; over about two years the owner trammed/shimmed it, extended the table, added polycarbonate chip guards, flood and mist coolant, and an Android TouchDRO with glass scales. He reports manual milling of billet parts before conversion. | The thread does not provide a measured accuracy survey, travel, spindle specifications, or a full mechanical drawing. These modifications precede the CNC conversion. |
| Motion control | Mesa 7i96S plus 7i84; the owner says he initially wanted a 7i76E but it was unavailable. PNCconf generated the initial LinuxCNC setup, followed by custom HAL work. | Firmware, complete configs, connector/channel map and exact LinuxCNC version are not in the inspected discussion. A later sentence calls the Mesa board “7i76S”; that conflicts with the 7i96S named in the parts list and fault report. The discrepancy is retained. |
| Axes | Delta B3 servo drives and servos: 750 W for X/Y and 1000 W for Z; Bosch Rexroth C5 ballscrews with preloaded nuts. | The owner says each DB44 drive connector carries differential step/direction signals and multiple IO conductors. Axis-to-terminal wiring is partly shown in the owner’s image below; it remains specific to his hardware/configuration. |
| Cabinet and safety devices | ABB SSR10 E-stop relay; Schneider Electric LP4K0910BW3 contactors; Eaton M22 physical E-stop/reset, jog, pause and resume buttons; TDK-Lambda RSEN2030L and RTEN-5040 EMC filters; Eldon MAS0608030R5 enclosure. | His forum describes an intended reset latch requiring a physical panel button and drive-ready checks before motion enable. Do not infer safety certification or a safety performance level from the listed part numbers. |
| Computer and latency | An HP EliteDesk 800 G2 was tried with Debian 12.2/LinuxCNC 2.9, but the owner reported unreliable Mesa communication and high/poor latency. He replaced it with an Intel DQ45EK motherboard and Q9550S CPU and reported latency/jitter around 14,000 versus 60,000 on the HP. | The values and diagnosis are the owner’s historical measurements on his systems, not general hardware benchmarks. He reported first getting the drives to move after the switch. |
| Spindle | Initially the stock spindle motor, VFD, gearbox and bearings remained; at 1500 rpm the owner said the spindle got too hot for his comfort and the gearbox was too noisy. In September 2024 he reported removing the gearbox and installing a 2 kW Delta B3 servo for 1:1 belt drive, rated 400 V and 3000/6000 rpm. | The forum says he was considering ATC capability and a pneumatic release cylinder, but does not confirm a finished ATC/tool-release system. |
| CAM and operator interface | Probe Basic, FreeCAD CAM/Path workbench; tool offsets measured and entered in Probe Basic. Physical jog buttons existed, though he said he still needed to get Probe Basic jog controls cooperating with them. | A full setup/use guide, current configuration, tool-length probing workflow, and postprocessor settings are not supplied. |

## Owner-drawn DB44 and cabinet diagram

The owner posted a 3000 × 2000 wiring image in the LinuxCNC thread. I retrieved and visually inspected it. In the owner’s drawing, the X, Y and Z Delta-drive DB44 connectors each show the differential step/direction contact group at the same numbered contacts: pin 37 is labeled Sign−, pin 39 Sign+, pin 41 Pulse−, and pin 43 Pulse+. The Z connector also visibly maps pin 27 to “Z Alarm”, pin 33 to “Z Alarm reset”, and pin 9 to the Z servo-on line. The corresponding X/Y labels and colored lines are drawn in the same figure. These are readings of the owner’s drawing, not independently tested wiring.

The diagram also traces ready, servo-on, alarm-reset and Z brake-relay signals through Mesa IO and the E-stop wiring. Dense board terminal labels and several line crossings are too small or ambiguous to transcribe reliably here, so no complete Mesa terminal map is claimed. The post says the owner chose 7i84 outputs because they had short-circuit protection, overvoltage clamps and per-driver thermal shutdown; his nearby prose uses “7i76S,” which conflicts with his 7i96S parts list. Verify installed board identity and the original diagram before any electrical work.

![Owner-posted wiring diagram for the MH50V’s Delta servo-drive DB44 connectors, Mesa boards, E-stop and machine IO](https://forum.linuxcnc.org/media/kunena/attachments/35541/Mesawiring.png)

The owner says he used two stranded-core shielded CAT6 cables per servo: two pairs for differential step/direction, with the shield and unused pairs grounded near the Mesa card; a second cable carried drive IO to the 7i84. He says the Z drive’s brake-release relay required a separate cable and was controlled by the servo drive. This is his implementation report, not a generally validated cabling prescription.

## Failure and commissioning lessons reported by the owner

After many successful homing cycles, the owner started homing and left the machine. On returning, he found an amplifier fault, X hard against one side, and a damaged proximity switch. He traced the fault to crossed/melted insulation between the soldered DIR−/DIR+ twisted-pair conductors in the X DB44 cable; the short had damaged the Mesa 7i96S first step-generator DIR+ output. He moved X to the fifth step-generator output and ordered a replacement 7i96S. This is a first-person failure report. It shows why the drawing must be checked against the installed connector and inspected wiring before powering or homing; it does not establish a safe generic wiring fix.

The owner’s later use reports include making the Y-axis belt/pulley cover, milling 6082 aluminium, and producing a finish he liked. In June he said he had repeatedly homed the mill and still had slow homing speeds, then left a homing operation unattended when the fault occurred. No numerical feed, spindle speed for the aluminium cut, depth of cut, or measured finish/accuracy is given.

## Other forum images and gaps

The thread contains photographs of the machine, cabinet assembly, servo-drive harnesses and spindle conversion, as well as embedded videos. Their image filenames and captions are provided in the thread; the pin-labelled `Mesawiring.png` is the visual inspected above. The original discussion contains many more images at [the LinuxCNC forum topic](https://forum.linuxcnc.org/12-milling/50559-optimum-optimill-mh50v-cnc-conversion). No connector pin numbering should be inferred from photographs of the assembled cabinet alone.

The dossier does not provide a full machine terminal schedule, complete drive parameter set, Mesa firmware/export configuration, limit/proximity-switch wiring, actual safety relay circuit validation, VFD/spindle command map, probing calibration, or a verified production procedure. The diagram is valuable owner evidence but not a safety-reviewed schematic. Confirm all device revisions, wiring continuity and polarity, and safety behavior before use.

## Source

1. LinuxCNC Forum, Unlogic, [“Optimum Optimill MH50V CNC conversion”](https://forum.linuxcnc.org/12-milling/50559-optimum-optimill-mh50v-cnc-conversion), owner posts beginning 3 November 2023 and later updates through 2024. The opening posts supply machine identity, selected hardware, controller/PC history, signal-cabling approach and wiring image. Later posts document first CNC chips and 6082 cutting, spindle/belt-cover work, homing fault and damaged Mesa output, and the spindle servo conversion. Other members’ configurations are not attributed to this machine.
