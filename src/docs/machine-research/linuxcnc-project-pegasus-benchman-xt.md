# project-pegasus's Light Machine Corp. Benchman XT retrofit

## Machine identity and retrofit

LinuxCNC Forum member project-pegasus describes a Benchman XT retrofit using LinuxCNC with Mesa 5i25 and 7i77 hardware. The owner calls it “my XT” and says they wanted to retain the original servo power supply and smoothing circuit while replacing the original ISA NextMove control cards, which were the wrong version for their unit. The post does not establish this XT's spindle, ATC, or rotary-axis options. Do not merge the specifications of other owners' Benchman machines into this one.

## Forum-posted µEBO board schematic

The forum-hosted [nine-page Benchman XT µEBO schematic (drawing 81-100-0052, Rev A)](https://forum.linuxcnc.org/media/kunena/attachments/23446/BenchmanElectricalSchematic.pdf) was attached by project-pegasus in the retrofit discussion. Its title blocks identify pages 1–8 as relay, power supply, servo amplifier interface, encoder/axis, spindle/interface, I/O, and header-configuration sheets; page 9 is a NextMove J1 pinout and J35 connector schedule. The drawing's exact machine, serial-number, and options applicability is not established; treat it as the forum-posted Rev A µEBO board drawing rather than a universal Benchman wiring guide.

## Relay and supply contacts discussed in the thread

x-Intelitek Engineer explains the power-enable circuit against the attached drawing. J1-98 is labelled `CR_DRV_PWR` and is the NextMove relay common; J1-100 is the relay normally-open contact and is labelled `ESTOP`. The engineer says the PCB produces 24 V, routes it through the E-stop switch, and the NextMove relay switches it; the switched signal operates K4, which enables the servo-supply transformer path shown on schematic page 1. The engineer identifies J2-5/J2-6 as 240 VAC input and describes the J3 transformer connection.

| µEBO contact | Drawing label | What the forum source establishes |
|---|---|---|
| J1-98 | `CR_DRV_PWR` | NextMove relay common in the Rev A drawing. |
| J1-100 | `ESTOP` | NextMove relay normally-open contact; part of the original E-stop-dependent path described in the thread. |
| J2-5 to J2-6 | AC input pair | x-Intelitek Engineer identifies 240 VAC at this pair for the page-1 transformer path. |
| J3 | Transformer connection | The engineer describes a transformer feed/return path across schematic pages 1–2; this dossier does not infer a complete cabinet wire list. |

The Rev A drawing contains larger J1 and J35 schedules and separate circuit sheets; this table records only contacts also identified or explained in the forum exchange. The engineer explicitly states that the original E-stop circuit does not meet current safety standards and declines to prescribe a safety retrofit. This is source documentation, not a validated or safe wiring procedure.

## Forum sources and visual evidence

- project-pegasus, posts [#104590 and #104592 on page 28](https://forum.linuxcnc.org/30-cnc-machines/27204-light-machine-corp-benchman-xtr-retrofit?start=270), LinuxCNC Forum, 2018-01-17; describes the Mesa retrofit, retaining the original power supply, and attaches the schematic.
- x-Intelitek Engineer, posts [#104680 and #104716 on page 28](https://forum.linuxcnc.org/30-cnc-machines/27204-light-machine-corp-benchman-xtr-retrofit?start=270), 2018-01-18 and 2018-01-19; explains J1 relay contacts and the supply-enable path and warns about the old E-stop design.
- The [forum-hosted Rev A schematic PDF](https://forum.linuxcnc.org/media/kunena/attachments/23446/BenchmanElectricalSchematic.pdf) is the visual source for the board tables and circuit-sheet descriptions above.
