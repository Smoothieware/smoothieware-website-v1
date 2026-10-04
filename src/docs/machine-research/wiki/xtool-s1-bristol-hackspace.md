# xTool S1 diode laser — Bristol Hackspace configuration

**Wiki evidence status:** exact model-specific local operating and safety instructions. The wiki describes its installation and a 20 W laser module; this is not a claim that all S1 variants share the same module or configuration.

## Identity and configuration

The local page identifies an xTool S1 diode laser using a 20 W, 455 nm blue diode. It lists a 608 × 385 mm bed, a maximum material thickness of 42 mm in the introductory description, and a 498 × 330 mm working area in the specification block. Those two areas differ; the wiki does not explain whether this reflects usable bed area versus motion/work area, so they are retained as separate source statements.

The Bristol installation includes a honeycomb panel and air assist. The official mainboard/rear-cover guides document S1-family port groups, but the sources do not establish which electrical connector and module revisions are fitted to this local machine. With the honeycomb installed, the wiki gives a maximum material thickness of 15 mm. LightBurn is the local control workflow. The separate wiki setup guide specifies COM4, automatic air assist, the machine's homing and focus-probe sequence, and populating laser-offset values from the `M1111` console output; it cautions that the Y offset may be better set to the datasheet's 21.8 value in some cases.

## Operation summary

The local LightBurn guide calls for a visual work-area inspection, approved-material check, air-assist setting check, and confirmation that extraction starts with the isolator. The machine is homed before placing material. With the lid closed, the operator jogs the module, uses the focus probe's Detect operation, checks the origin and job origin in LightBurn, frames the job, then starts and continuously supervises the cut. The wiki says to remove waste and shut down the PC and isolator afterward.

## Materials and safety

The wiki prohibits defeating the lid interlock or disabling fire detection, requires active supervision, and warns that the module can move with the lid open. PVC/vinyl, polycarbonate, ABS, PET/PETG, nylon, epoxy/resin, carbon-fibre composite, fibreglass, and other listed halogenated or flame-retardant materials are forbidden. Clear, white, or blue plastics are specifically excluded for this blue-light setup. The page identifies an emergency stop at the machine's rear right, an additional front pause button, software stop, and the isolator as stop methods.

## Diagram transcription and pinouts

### Manufacturer S1 laser-module connector reference

xTool article 1098 provides a family-level, numbered 12-position laser-module connector view and signal/power chart. The positions are recorded here exactly as labeled; this is not evidence that this Bristol unit has the pictured module or cable, nor does it define the mainboard-side mating connector, cable orientation, or a SmoothieBox connection.

| Contact | Manufacturer label | Source status |
|---:|---|---|
| 1 | 24V | Labeled |
| 2 | VCC3 | Labeled; meaning not expanded |
| 3 | 24V | Labeled |
| 4 | BL_T_SW | Labeled; meaning not expanded |
| 5 | 24V | Labeled |
| 6 | GND | Labeled |
| 7 | GND | Labeled |
| 8 | #TXD | Labeled; direction convention not established |
| 9 | PWM | Labeled |
| 10 | GND | Labeled |
| 11 | GND | Labeled |
| 12 | #RXD | Labeled; direction convention not established |

The numbered illustration places 11, 9, 7, 5, 3, 1 down its left side and 12, 10, 8, 6, 4, 2 down its right side in the view shown. The separate chart supplies labels. Do not treat this illustration as a verified Bristol connector mating-face view.

### Test pads are not connector contacts

The same manufacturer troubleshooting article depicts a PWM test location, a 24V test location and GND measurement at a mounting-hole reference for its diagnostic procedure. These are board test locations, not numbered connector contacts. Under its stated 100% processing-power diagnostic procedure, the article gives expected readings of 3.2–3.3 V at PWM-to-GND and about 24 V at 24V-to-GND. These observations are diagnostic readings, not connector input ratings, tolerances, or authorization to connect a SmoothieBox output. The figure does not provide a full test-point schedule. They remain separate from both the 12-position module connector and the named board-port groups.

### Other xTool S1 interface groups

The official main-control-board guide names these 15 port groups but gives no contact counts or per-contact functions: Baseplate Detection; Z-Axis Limit Sensor; Y-Axis Limit Sensor; X-Axis Limit Sensor; Y-Axis Motor Coder (manufacturer spelling); X-Axis Motor Coder; Rear Light Panel; Front Light Panel; Laser Module; Z-Axis Motor; Y-Axis Motor; X-Axis Motor; Rear Interface Board; Front Interface Board; Exhaust Fan. They are group-level references only and remain separate from the 12-position module connector schedule.

The rear-cover guide names the power switch, power port, USB port, key port, extension ports, air-assist tube fitting, and fire-safety tube fitting. It supplies no numbered electrical-contact map. Tube fittings are mechanical interfaces, not pin groups. These labels do not establish the installed Bristol wiring or port counts.


The local page includes annotated images for the rear-right emergency stop and front pause/controls, plus LightBurn screenshots for connection, homing, focus, offset, origin, framing, and layer settings. Textual location evidence is sufficient to record that the emergency stop is at the back-right side; the photographs were not recoverable through the search renderer in this pass.

The manufacturer [S1 guide](https://support.xtool.com/article/1106) applies across S1 laser-module variants and documents module installation by attaching the cable, but supplies no cable contact assignments. The manufacturer's [rear-cover port description](https://support.xtool.com/article/1102) names a power switch, power port, USB port, key port, extension ports, and air-assist and fire-safety tube fittings. Those labels are machine-side functions, not electrical connector pinouts. The Bristol installation source still does not establish its controller or laser-module contact maps.

## Sources

- [xTool S1 Diode Laser](https://wiki.bristolhackspace.org/equipment/laser/laser-xtool-s1/home) — local model identity, power/wavelength, areas, material restrictions, safety controls, and emergency-stop location.
- [xTool S1 — LightBurn](https://wiki.bristolhackspace.org/equipment/laser/laser-xtool-s1/lightburn) — local software connection, focus, offset, origin, and job procedure.
- [Equipment catalogue](https://wiki.bristolhackspace.org/equipment/home) — corroborates the xTool S1 listing.
- [xTool S1 User Guide](https://support.xtool.com/article/1106) — manufacturer guide with general S1 assembly, module-cable attachment, power, key and E-stop procedure; it does not specify contact assignments.
- [The Ports on the Rear Cover Explained](https://support.xtool.com/article/1102) — manufacturer identifies functional rear-port groups; no numbered electrical contacts are shown.
- [The Ports on the Main Control Board Explained](https://support.xtool.com/article/1086) — manufacturer names 15 board-port groups; no contact schedules are shown.
- [S1 Won’t Fire Laser](https://support.xtool.com/article/1098) — manufacturer 12-position module contact numbering and label chart; family-level reference only.

**Unknowns:** installed laser-module serial/revision, controller and firmware revisions, Bristol module/cable fitment, mainboard/rear-port contacts, mating-face orientation, and the wiki's unexplained difference between nominal bed and working area dimensions.
