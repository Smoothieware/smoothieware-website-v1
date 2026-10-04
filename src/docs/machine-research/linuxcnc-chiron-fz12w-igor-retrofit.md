# Patrick’s Chiron FZ12W “Igor” LinuxCNC retrofit

**Machine identity:** Patrick (`anfänger`)’s individual 1989 Chiron FZ12W vertical machining centre, which he calls Igor. The owner says it had been used by a laboratory for testing drills before it was stored in a barn and sold to him. This is one machine and retrofit history, not a generic FZ12W specification.

**Novelty check:** On 2026-09-23, searches for `anfänger`, `FZ12W`, and `Chiron Igor` across repository Markdown and HTML found no existing dossier. The local atlas/wiki material was included in the search. This only establishes that those terms were not found; it does not prove no differently named record exists.

**Operating state:** The owner first restored the undocumented original control sufficiently to power up, then replaced it with Mesa hardware and LinuxCNC. He reports obtaining machine movement, getting the tool changer and table working, and making first chips. Later he reported using a wireless handwheel and macros to jog and set work coordinate systems (WCS). The thread does not identify the workpiece, tooling, cut parameters, accuracy, or production history.

## Owner-reported machine and controls

| Area | What the owner reports | What remains unknown |
|---|---|---|
| Machine | Chiron FZ12W from 1989; named Igor. It had a prior laboratory use and was stored before purchase. | Serial number, options, axis travel, spindle specification, and factory wiring revision are not stated in the inspected thread. |
| Original control | A Sinumerik control was restored after missing/removed systems and undocumented modifications were repaired. The owner found only 28 kbit of memory and could not reload data over serial as hoped. | Sinumerik model, interface connector pinout, parameters, and serial protocol settings are not supplied. |
| Retrofit controller | Owner chose Mesa cards with LinuxCNC after documenting the machine’s IO and interfaces. He reports first machine movement after installation and some rewiring. | Mesa card models, firmware, host interface, connector assignments, and the owner’s IO document are not reproduced in the public thread. |
| Operator interface | He first used Gmoccapy, then changed to Probe Basic. He reused and adapted macros/scripts, including a tool-change script with the Probe Basic dynamic tool-change widget. | LinuxCNC version, full configuration, macro source, and exact setup procedure are not published in the inspected posts. |
| Tool changer and table | The owner states that he got the tool changer and table working and then made first chips. He later adjusted his tool-measuring script to account for a raised table. | Tool-changer mechanics, pocket numbering, sensors, interlocks, table dimensions, and the sequence/IO map are absent. |
| Probe and workholding | He planned a tool probe and ran wires to leave the option of a 3D touch probe. He built an aluminium-profile riser table, intended to host the tool probe and serve as workholding. | The forum does not establish that a touch probe was installed or provide probing coordinates, wiring, or calibration procedure. |
| Cooling | He describes a temporary cooling-system repair that was working well enough that it might remain. | Coolant type, pump, circuit, interlocks, and final state are not identified. |
| Handwheel and WCS | In August 2020 he reported adding a wireless handwheel; he said he no longer used the keyboard/touchscreen for jogging and used macros for WCS setting. | Handwheel make, connection method, safety behavior, macro details, and WCS accuracy are not specified. |

## Setup and use evidence

The thread gives a useful staged account: restore the incomplete original machine first; document IO and interfaces; remove the old control; install Mesa/LinuxCNC and rewire; establish axis motion; then bring up the table and tool changer. That is the owner’s chronology, not a complete retrofit manual. His later posts describe changing the control panel after finding the display unsatisfactory for remote access, moving to Probe Basic, adapting scripts, adding a wireless jog handwheel, and building a riser/workholding table.

The first-chip statement is direct owner evidence of cutting, but the thread does not give enough data to reproduce a cut safely or assess machining performance. No spindle start/stop, speed-control, homing, E-stop, tool-release, or enclosure procedure can be reconstructed from the inspected posts.

## Forum visuals

The forum thread contains owner-posted workshop/machine imagery and several embedded videos showing stages of the retrofit, the tool changer/table, and the machine running. The text establishes that those media are embedded, but their pixels and video contents were not inspected for this dossier. Use the [original LinuxCNC forum thread](https://forum.linuxcnc.org/12-milling/38536-retrofitting-an-89-chiron-fz12w-aka-igor) to view the owner’s media. Do not infer connector assignments or safety behavior from the captions.

## Pinout and safety limits

The owner says he made documentation of the machine IO and interfaces, but the inspected thread does not publish that document or a complete HAL/wiring map. No terminal-level pinout, input/output polarity, drive model, servo feedback, limit/home mapping, E-stop circuit, spindle interface, or tool-changer sequence is established here. Treat the retrofit description as build history, not wiring instructions. In particular, do not energize or bypass the tool changer or safety circuit from assumptions in this summary.

## Source

1. LinuxCNC Forum, Patrick (`anfänger`), [“Retrofitting an 89 Chiron FZ12W aka Igor”](https://forum.linuxcnc.org/12-milling/38536-retrofitting-an-89-chiron-fz12w-aka-igor), owner posts dated 8 March and 4 August 2020. Owner statements establish machine identity, former use, restoration, 28 kbit Sinumerik limitation, Mesa/LinuxCNC decision, movement, table/tool-changer progress, first chips, Probe Basic, riser table/tool-probe plans, and wireless handwheel/WCS macros. Replies by other members are not treated as facts about Igor.
