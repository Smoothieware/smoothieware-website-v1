# Kress CNC Portal Mill — CoMakingSpace

**Wiki evidence status:** local used machine, documented with controller, motors, dimensions, and operating workflow. “Kress CNC Portal Mill” is the wiki's identity; the actual frame builder and Kress spindle/router model are not identified.

## Identity and components

The CoMakingSpace wiki says this portal mill was bought used in 2022 from a maker who used it to machine aluminium parts for other CNCs. It gives a 300 × 360 × 80 mm work area and describes an 80 kg steel/aluminium structure with a T-slot table. Motion uses three 23HS30-2804S stepper motors and three Leadshine DM556 drivers. The controller is an SMC5-5-N-N with a jog wheel; the listed supply is a Meanwell 48 V, 10 A unit. The spindle is described as an 800 W Chinese high-frequency spindle with an ER11 collet; exact make and electrical revision are unknown.

## Operation

The wiki workflow calls for CAM output in the machine's documented G-code flavor, homing, clamping the workpiece, setting the tool and work origin, then testing new programs “in the air.” FreeCAD output uses a Mach3 post. The wiki says a supplied Fusion 360 machine/post configuration is modified because the stock Mach3 post can behave erratically with this controller. Programs are loaded from USB to the SMC5 panel.

The controller has no automatic homing sequence: the page says to run its “Origin Operation” → “Return To Home” action at session start. XYZ buttons and an X1/X10/X100 jog wheel are documented. The wiki defines machine zero at the front-left-top and negative Z motion into the work. It recommends dry-running new code and checking work zero and clearance before starting. The emergency stop cuts electricity to the spindle and stepper motors, according to the local page.

## Wiring and visual evidence

The wiki names motor, drive, controller, and supply models but does not provide their terminal assignments or a verified wiring schematic. No STEP/DIR/enable, limit, spindle, or mains wiring is inferred. The wiki links a controller manual but this dossier does not use external manuals to fill gaps. The page discusses numbered panel controls and contains a coordinate-system illustration, but no connector diagram suitable for pinout transcription was available in the captured text.

## Sources

- [Kress CNC](https://wiki.comakingspace.de/Kress_CNC) — machine identity, components, dimensions, G-code/controller workflow and safety notes.
- [CNC Mills and Routers](https://wiki.comakingspace.de/CNC_Mills_and_Routers) — category listing of the Kress CNC Mill.

**Unknowns:** frame builder, exact spindle make/model, installed SMC5 controller revision, driver DIP/current settings, connector pinouts, and exact Fusion machine-file revision.
