# Becksvill's 12-ton FIL horizontal/vertical CNC mill

**Machine identity:** A roughly 12-ton, 1980s FIL machine retrofitted to LinuxCNC by forum member Becksvill in New Zealand. The owner does not provide a type plate or exact model. The thread title calls it a “FIL” machine; manufacturer, model, travels other than those stated below, and original drawing set remain unidentified.

**Novelty check:** On 2026-09-23, the flat dossier directory, separate wiki dossier directory, and local survey HTML were searched for `Becksvill FIL`, `12 ton FIL`, and the thread title. No matching dossier for this machine was found. It is a separate mill from Becksvill's earlier unnamed VMC/Yuhai retrofit: the FIL thread describes a large dual-spindle, 12-ton production machine and a distinct drive/feedback system.

## Machine layout and reported use

The owner describes a vertical spindle mounted on an overarm and a horizontal spindle, both BT50. The stated travels are 2 m in X, 700 mm in Y, and 1,150 mm maximum workpiece height in Z. The spindles top out at 1,800 rpm; the owner said his expected work would use large cutters at around 400 rpm. Each spindle has a gearbox with four speeds. His initial plan was to use one mechanical range and use a VFD for the remaining speed control, but the forum does not document a final gear-range table or full spindle-speed calibration.

In a May 2026 update, the owner reported the first job: he says a large aluminium piece about 300 mm in diameter and 600 mm long had most of its stock removed on a larger CNC lathe, then the FIL milled a curve on one end; a smaller mill cut a slot. He said the FIL ran accurately with its linear scale and that its extra Z height enabled the work. This is owner-reported production evidence, not a dimensional inspection report.

The machine was hybrid, retaining handwheels and extra mechanical reduction. The owner removed the hybrid handwheel/reduction arrangement, reporting that it had contributed to more gears, poorer servo tuning, and noise. He replaced the Z-axis belt reduction with a direct flexible coupling taken from an older Mazak CNC. He reports that the Z change removed at least 0.05 mm backlash; he measured about 0.1 mm remaining in X and Y. He also says initial backlash was about 0.40 mm, that he replaced thrust bearings, and that the factory location of the second Z ballscrew support was 2.4 mm out relative to the slideways. These are owner measurements and repair observations; the thread does not include a metrology record or machine drawing to independently verify them.

## Motion control, feedback, and homing

The retrofit cabinet photo shows Mesa cards, separate servo drives, a spindle VFD, and substantial cabinet wiring. In the post, the owner identifies the control as Mesa 7i92M, 7i77, and 7i84 with Chinese Yuhai servo drives that he describes as 3.5 kW, plus an 11 kW spindle VFD. The exact drive SKU, motor ratings per axis, and the axis-to-card channel assignments are not specified. The image labels are not sharp enough to derive pin assignments, and no terminal-to-function schedule appears in the thread.

For each axis, the owner describes combining motor-encoder velocity feedback with linear-scale position feedback. He says using one combined PID loop with the scale for position and motor encoder for velocity made index homing work but gave worse tuning, noisier motion, and visible backlash take-up. His preferred arrangement used two PID loops combined through a sum component; he reports smoother motion and that, after a stop, the servo moved rapidly to within about 0.01–0.02 mm before creeping the last 0.02 mm using integral action, taking about one second. He says the final position was within 0.005 mm or less. These are the owner's reported drive/scale observations, not a general tuning recipe or a certified accuracy figure.

He homes X and Y to encoder index in the normal LinuxCNC manner. For Z, he used ClassicLadder and the LinuxCNC joint state: the reported joint 2 home-state changes from 7 while seeking the switch to 12 during the slow latch phase. Ladder comparisons switch the homing input source from the physical home switch to the Z motor-encoder index pulse during that final phase. He notes that a software-polled encoder index could be missed, but says slow latching worked in his tests. With a dial indicator, he reported rehoming near the top of Z and then rapid-moving roughly 1 m back to the table, with repeatability within about 0.01 mm. He also reports no visible dial-indicator movement between repeated homes. The forum's copied example from another user is a workaround and not proof of a hardware-latched index or a safe homing design for other machines.

## Hydraulics and spindle details

The owner says the tool-change hydraulics use an accumulator and pressure switch. His described operating logic is to start the hydraulic pump, wait for the pressure switch to indicate the accumulator is charged, then turn the pump off; the machine needs hydraulic oil for tool changes rather than continuous circulation. He implemented the control in LinuxCNC ClassicLadder and calls the arrangement easy to set up after understanding it. A forum photo shows the hydraulic assembly, and a ladder screenshot shows a rung with a `%KWO` symbol and compare logic. The screenshot does not expose a complete readable ladder program or a hydraulic schematic, so exact sensors, valve outputs, thresholds, and interlocks remain unknown.

The owner describes an 11 kW VFD for the spindle and a spindle gear-change circuit. He also says he uses inexpensive 400 W VFDs in place of contactors in the gear-change setup to get overload protection, variable speed, and electrical braking. The thread does not identify the small VFD model, motor load, control parameters, or the full circuit, so this is an owner-reported design choice and not a wiring recommendation.

## Forum photographs reviewed

The main photograph shows the large enclosed mill, overarm, operator console, broad table, and the scale of the machine. The image supports a general visual identification but does not establish the 12-ton weight or travel dimensions by itself.

![Becksvill's FIL mill in the workshop](https://forum.linuxcnc.org/media/kunena/attachments/24947/mainmachine.jpg)

A cabinet image shows the Mesa cards and extensive existing/reworked field wiring. Component labels and screw-terminal numbering cannot be read reliably enough to infer a pinout.

![Mesa control cards and wiring in the FIL cabinet](https://forum.linuxcnc.org/media/kunena/attachments/24947/mesacards.jpg)

This image shows the linear scale mounted along the machine axis; it does not reveal the scale model, output standard, or wiring.

![Linear scale on the FIL machine](https://forum.linuxcnc.org/media/kunena/attachments/24947/linearscale.jpg)

The drive photograph shows a bank of Yuhai-branded servo drives and heavy conductors. It does not provide legible model numbers or connector contact maps.

![Servo drives in the FIL control cabinet](https://forum.linuxcnc.org/media/kunena/attachments/24947/drives.jpg)

The hydraulic photo documents an accumulator, pump/valve components, and associated tubing; it is not a hydraulic schematic.

![Hydraulic tool-change system](https://forum.linuxcnc.org/media/kunena/attachments/24947/hydraulics.jpg)

The owner posted a ClassicLadder screen while explaining the Z-axis homing logic. It is visual context for his use of Ladder, not a complete, readable program listing.

![ClassicLadder homing and tool-change control screenshot](https://forum.linuxcnc.org/media/kunena/attachments/24947/classicladder.jpg)

## Pinout and configuration limits

The thread documents Mesa board models and some logical control behavior, but does not publish a complete pinout. It does not say which 7i77 terminal controls each drive, which 7i84 channels serve each sensor or valve, how the linear-scale and motor-encoder signals are wired at the connector, or how the two spindle circuits are interlocked. A photo of a board or drive is not a connector schedule. Do not infer field wiring, grounding, voltage levels, safety circuits, or an E-stop chain from the cabinet photographs.

Other unresolved details include the exact FIL model, serial number, original builder documentation, spindle motor and gearbox specifications, axis screw/servo/encoder part numbers, linear-scale model and resolution, software/HAL configuration, measured travel accuracy, repeatability test method, toolchanger sequence, and safety-rated machine guarding/interlocks. The owner says he intended to put the machine into roughly 16-hour/day production, but the later forum post only establishes the reported first job, not that later duty cycle.

## Forum source

LinuxCNC Forum, Becksvill, [“Large FIL cnc machine retrofit. (12 ton larger maching running linuxcnc)”](https://forum.linuxcnc.org/show-your-stuff/58689-large-fil-cnc-machine-retrofit-12-ton-larger-maching-running-linuxcnc), posts #345849, #345856, #345858, #345859, and #346325 (April–May 2026). Owner posts describe the two BT50 spindles, travels, backlash and mechanical work, dual feedback and homing logic, hydraulics, control cabinet, and first-job report. Attached machine, axis, scale, drive, control-card, hydraulic, and Ladder images were visually inspected; they provide context but no complete pinout.
