# reddtekk's Hurco bed mill: Dynapath Delta 40 and planned LinuxCNC retrofit

**Machine identity:** A Hurco bed mill described by forum member reddtekk as looking like an older version of the Dynapath 500 Bed Mill. “Looks like” is the owner's visual comparison, not a verified model identification. The thread does not provide the exact Hurco model, serial number, work envelope, or spindle rating. The thread title identifies its former control as a Dynapath Delta 40.

**Novelty check:** On 2026-09-23, the flat dossier directory, separate wiki dossier directory, and local survey HTML were searched for `reddtekk`, `Dynapath Delta 40`, and drive-board marking `SDFPOC1525-17/CF`. No matching individual machine dossier was found. This dossier records the specific machine and its proposed conversion state; it does not claim that the planned retrofit was completed.

## Machine and original controls

The owner's initial description lists X and Y manual handwheels on the leadscrews, with powered Z. It had three SEM brushed DC servo motors with encoder and tach-generator feedback and original servo drives. The owner believed the drives were Servo Dynamics, later reading the board marking `SDFPOC1525-17/CF 11/97`. That suggests a board identifier and date code, but the actual drive manufacturer/model is not confirmed by the forum post.

The machine's interface list included X/Y/Z home and overtravel switches, a lubrication pump, a field power supply, and spindle-control contactors. The head was described as a metric Bridgeport clone with variable-speed belt drive and an NMTB 30 spindle. No electrical schematic or terminal schedule is reproduced in the thread, although the owner said he had a full set of machine schematics and printed Mesa manuals.

## Retrofit plan and connector families

When the thread began in November 2017, the owner was preparing a Mesa 5i25/7i77 plug-and-go kit and had LinuxCNC installed on a PC with an Intel D2550MUD2 motherboard and SSD. He listed the following breakout approach for retaining the machine-side cables:

| Planned breakout | Intended existing cable/use | Pinout status |
|---|---|---|
| Three female DB15 breakouts | Encoder connectors | Contact assignment, direction, electrical levels, and connector view not supplied |
| Female DB25 breakout | Operator-panel connector | Contact assignment and functions not supplied |
| IDC40 breakout | Dynapath I/O-board cable | Contact assignment and functions not supplied |

The breakout boards were proposals in a build-planning thread, not verified installed wiring. Do not treat the DB15, DB25, or IDC40 connector families as evidence of any numbered pinout. The planned conversion also called for retaining the existing servo motors/drives and using home/overtravel switches and the original spindle contactors, but the post gives no contactor sequence, drive input/output map, or safety circuit.

## Reported condition and conversion status

The owner described intermittent boot problems with the Dynapath control. Replacing its PC power supply helped; he also kept a 60 W light bulb in the cabinet to keep it warm and dry and sometimes warmed the cabinet before getting a clean boot. Once running, he said the control was stable. His reasons for considering LinuxCNC included the control's roughly 30 kB program memory, lack of drip feeding, and non-standard G-code, alongside the price of a newer Dynapath control. These are owner-reported historical observations, not current operating measurements.

In February 2021 the owner revived the project and said he was wiring the breakout connectors to a 7i77 while preserving the ability to switch back to the Dynapath controller until the retrofit was functional. He planned a large touchscreen instead of reusing the low-resolution console, retaining physical E-stop and spindle controls and likely the existing RETRACT, start, and stop buttons. He bought an Elo ET2243L open-frame touchscreen and reported that its touch response worked in Gmoccapy after calibrating an initially inverted X/Y response. The touchscreen and LinuxCNC UI were progress reports; the post still says photos and further progress would follow.

That update also records an unresolved manual-use idea: the owner missed moving the column by hand and considered adding three handwheels, perhaps combining manual handwheel behavior with CNC operation. He describes the powered Z axis and inaccessible column movement as a practical limitation in his setup; no handwheel conversion was documented as completed.

No later post in this thread confirms successful axis motion, homing, spindle control, machining, or commissioning. Retain the classification **retrofit underway / completion unverified** rather than treating the plan as an operational LinuxCNC result.

## Visual evidence

The inspected thread page did not expose a machine photograph or diagram attachment. The owner explicitly said he had the machine schematics, but none was attached in the inspected thread. No visual pinout transcription is possible from the available forum evidence.

## Unknowns and safety limits

The exact Hurco model and age, original schematic contents, all connector contact assignments, encoder output type/voltage, tach-generator levels, servo-drive terminals, limit/home switch polarity, lubrication and spindle-control logic, protective-earth layout, E-stop chain, Mesa I/O mapping, LinuxCNC HAL configuration, and final retrofit result remain unknown. This is a useful record of a classic closed-loop DC-servo bed mill and a reuse-oriented retrofit plan, not a wiring guide. Before wiring such a system, identify the exact machine and drive revisions and use their matching schematics and manuals.

## Forum source

LinuxCNC Forum, reddtekk, [“Hurco Bed Mill with Dynapath Delta 40, retrofit to LinuxCNC”](https://forum.linuxcnc.org/12-milling/33570-hurco-bed-mill-with-dynapath-delta-40-retrofit-to-linuxcnc), posts #101731, #101757, and #101798 (November 2017), plus the later project-revival update #199722 (February 2021) and replies. The owner's posts supply the machine/control description, drive/motor details, connector breakout plan, and status caveat. No attachments were present on the inspected page.
