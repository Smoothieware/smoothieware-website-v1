# MacGalempsy's Light Machine Corp. Benchman XTr retrofit

## Machine identity and reported configuration

LinuxCNC Forum member MacGalempsy documents a specific Light Machine Corp. Benchman XTr retrofit project. The owner describes an enclosed vertical machining center with a 7,500 rpm spindle, 20-tool automatic tool changer (ATC), and a rotary fourth axis. This is the original poster's machine in the thread; it is separate from project-pegasus's later Benchman XT retrofit and the µEBO board schematic that project-pegasus attached.

## Owner-reported components

| Subsystem | Reported component or detail | Source limits |
|---|---|---|
| Servo amplifiers | Copley Controls 800-469; owner says the plate appears to carry four 4122 modules | Model identification is reported/visually tentative. |
| X/Y/Z motors | Litton LW30 on X/Y and LW50 on Z, described as brushed DC servos | Owner inventory. |
| X/Y/Z feedback | Tanakawa TS-5412 encoders | Owner inventory; no connector contact map supplied. |
| Servo power | 230 VAC input to 48 VDC, 15 A transformer/rectifier/choke supply | Owner-reported supply values. |
| Fourth axis | SMW 5C-RT rotary table, Magmotor C33-H-075X servo, DRC TK731 encoder | Separate rotary-axis components as reported by owner. |
| Spindle | Allen-Bradley Ultra 100 DDM-019 drive; Allen-Bradley TL-series AC servo and encoder | Owner inventory; exact TL model is not provided in the cited post. |
| ATC pneumatics | Four SMC SY3120-5L0Z valves, cylinders/actuators and end sensors | The cited inventory does not supply a complete valve or sensor terminal schedule. |
| ATC carousel | 24 V motor and BEI H20EA-37-F28-SS-500 encoder; owner reports a 90 PSI gauge/interlock | Preserve as an owner-reported description, not a verified pressure-system design. |
| Power distribution | 230 V, 20 A input divided among main, operator-station, servo, auxiliary, and spindle breaker sets | Owner-reported cabinet description; not an installation instruction. |
| Operator and machine I/O | Front-panel E-stop, cycle start/stop and overrides; X/Y/Z limit switches; front-door lock/switch; coolant and spindle controls | Functional inventory only; no full pinout or verified safety design. |

Later posts describe remaining work on the spindle, fourth axis, and ATC. They do not establish that this machine reached final commissioning. No connector-complete pinout is supplied for this build.

## Sources

- MacGalempsy, [“Light Machine Corp. Benchman XTr (retrofit)”](https://forum.linuxcnc.org/30-cnc-machines/27204-light-machine-corp-benchman-xtr-retrofit), LinuxCNC Forum, opening post and later component-inventory and progress posts.
- project-pegasus's separate XT retrofit and Rev A µEBO schematic are documented in [its own dossier](linuxcnc-project-pegasus-benchman-xt.md); that schematic is not attributed to MacGalempsy's machine.
