# Twelve machine retrofit research and remaining qualifications

The main diagrams are new conversion proposals. Dotted lines are guesses requiring the stated electrical and revision checks; OPEN stubs are deliberately disconnected. Source contact functions do not prove the fitted harness. The original twelve contact drawings are preserved in `retrofit-source-contact-history/`.

## Sculpfun SF-A9 diode laser

The motion replacement is now an individual-conductor Core-to-driver-to-motor plan, including both motor coils and separate supply/return circuits. Manufacturer 20 W supply reference is 24 V/7 A; total replacement load capacity must still be measured. Original head command and integrated flame/tilt safety are not electrically documented, so the specific laser boundary stays disconnected rather than inventing a pin map.

### Target assessment

- **core**: Main drawing uses Core P1 logic and new Pololu 2133 drivers. Use only when measured motor current and supply fit the carrier; otherwise select a suitably rated driver and redraw its exact terminals.
- **prime**: Alternative: onboard winding outputs J5/J6/J7/J8, each pin 1 B2, 2 B1, 3 A2, 4 A1. Assign the required motors in firmware; check fitted P11/P12 current, voltage and thermal limits before replacing external drivers.
- **smoothiebox**: Use a Core-based box for the drawn external-driver option, or a Prime-based box for the rated winding-output option. Trace the actual carrier harness; exterior connector names do not establish board pin numbers.

### Sources

- [Sculpfun SF-A9 20W manual (Version A)](https://cdn.shopify.com/s/files/1/0628/0695/0066/files/SCULPFUN_SF-A9_20W_User_Manual_1.pdf?v=1780023301)
- [Sculpfun download center](https://www.sculpfun.com/pages/download-center)
- [Pololu 2133 wiring, pin names and current limits](https://www.pololu.com/product/2133/)
- [SF-A9 firsthand controller teardown and photographs](https://diode-laser-wiki.com/documentation/sculpfun-sf-a9/)
- [SF-A9 20 W manufacturer specifications](https://eu.sculpfun.com/products/sculpfun-sf-a9-20w-laser-engraving)

## K40 CO₂ laser · Type 2 / Mini Gerbil 2 reference

Replace the Mini Gerbil motion power outputs with two documented drivers, retaining X/Y motors after winding identification. Each motor circuit and switch return is now drawn separately. PSU intensity and firing are distinct interfaces; fitted PSU identification is required to finish those two connections without transferring an MG3 pin map onto MG2.

### Target assessment

- **core**: Main drawing uses Core P1 logic and new Pololu 2133 drivers. Use only when measured motor current and supply fit the carrier; otherwise select a suitably rated driver and redraw its exact terminals.
- **prime**: Alternative: onboard winding outputs J5/J6/J7/J8, each pin 1 B2, 2 B1, 3 A2, 4 A1. Assign the required motors in firmware; check fitted P11/P12 current, voltage and thermal limits before replacing external drivers.
- **smoothiebox**: Use a Core-based box for the drawn external-driver option, or a Prime-based box for the rated winding-output option. Trace the actual carrier harness; exterior connector names do not establish board pin numbers.

### Sources

- [Awesome Tech Mini Gerbil on K40 Type 2](https://awesome.tech/installing-mini-gerbil-on-the-k40-type2/)
- [Mini Gerbil 2 wiring and setup](https://awesome.tech/mini-gerbil-2/)
- [K40 PSU wiring guide](https://awesome.tech/k40-laser-power-supply/)
- [Pololu 2133 wiring, pin names and current limits](https://www.pololu.com/product/2133/)
- [Cloudray MYJG-40 NW manufacturer manual; variant-specific limits and source inconsistencies](https://m.media-amazon.com/images/I/A1%2BEcPi700L.pdf)

## Sherline lathe + 8760 driver box

Retain the Sherline 8760 driver box and motor cables. The proposed Core interface now names every buffer pin, X/Z STEP/DIR DB25 cavity and all eight DB25 ground contacts. A separate 5 V logic supply and reset-pulse checks are part of the design.

### Target assessment

- **core**: Preferred shown option: J5 STEP/DIR through the specified 5 V buffer into the retained 8760 DB25.
- **prime**: Use a documented logic STEP/DIR breakout if retaining 8760. Prime J5–J8 coil outputs must never feed this DB25; replacing the box is a different motor and power conversion.
- **smoothiebox**: A Core-based box can use this interface after its board-to-exterior harness is traced. Treat the 8760 DB25 as a separate peripheral.

### Sources

- [Sherline 8760 product and specifications](https://www.sherline.com/product/8760-cnc-4-axis-driver-box/)
- [Sherline 8760 instructions](https://sherline.com/wp-content/uploads/2016/01/8760inst.pdf)
- [TI SN74AHCT125 pinout and TTL input/output limits](https://www.ti.com/lit/ds/symlink/sn74ahct125.pdf)

## CubeFactory 2 printer + recycler

The printer and recycler are separate systems. Prime provides four integrated stepper stages, so a measured printer motor winding pair can connect directly to the matching Prime phase outputs when the motor current and supply ratings fit. Core instead needs four selected external stepper drivers. The recycler BLDC phases and Hall feedback remain on the ESCON. Every dashed route is a proposed axis or software mapping, not a fitted-harness assertion.

### Target assessment

- **smoothiebox**: Use a SmoothieBox carrying V2 Prime for the four printer steppers only after matching rated motor current, motor supply, heater and sensor types. The box/carrier itself is not the motion controller.
- **core**: V2 Core has no integrated stepper power stages; add four selected external stepper drivers and measure each motor winding/current. Core J5 A–D STEP/DIR are logical signals; slash-prefixed net names do not mean active-low.
- **prime**: Preferred printer candidate because four integrated channels match the design-family X/Y/Z/E arrangement. Exact Prime connector J5/J6/J7/J8 phases are drawn; CubeFactory harness/polarity/current remains unverified. Keep recycler on ESCON. Thermal/fan proposal below is specifically the researched Prime P12 2590 variant, not a transferable P11 thermal pinout. Recycler sleeve heater remains on its independently controlled original system.

### Sources

- [CubeFactory2 printer README](https://github.com/CubeFactory2/cubefactory/blob/master/3d_printer/README.md)
- [CubeFactory2 powertrain notes](https://github.com/CubeFactory2/cubefactory/blob/master/recycler/Powertrain_Info.md)
- [BQ ZUM Mega 3D reference schematic Rev 1.2, 2015-08-26](https://github.com/bq/zum/blob/master/zum-mega3d/Zum%20Mega%203D.PDF)
- [Maxon ESCON 70/10 Hardware Reference](https://www.maxongroup.com/medias/sys_master/root/9350562709534/422969-ESCON-70-10-Hardware-Reference-En.pdf)
- [Smoothieboard V2 Prime official specifications](https://smoothieware.org/smoothieboard-v2-prime)
- [Exact Prime P12 MOSFET schematic at pinned revision](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/mosfets.kicad_sch)

## DeineFraesmaschine CNC mill

The manufacturer electrical plan 012-001-001-01 Rev A (2020-09-01) documents four DQ860 drivers, a WJ200 and switch/relay chains, but is not an as-built revision record. This diagram shows a concrete buffered STEP/DIR proposal with the exact SN74LVC07A pins and +5 V common-anode endpoints. Axis pairing and buffer-to-machine references are dotted pending continuity/nameplate checks. The WJ200 input circuit is shown as a discrete 0–10 V converter proposal and configured run input; the machine safety relay remains independent.

### Target assessment

- **smoothiebox**: SmoothieBox enclosure plus V2 Core is the supported direction when retaining the four DQ860 power stages. The housing/carrier must expose verified Core P1 STEP/DIR and ground contacts.
- **core**: Recommended controller for this machine: Core provides four STEP/DIR channels; add two TI SN74LVC07A open-drain buffers only if measured driver input current, pull-up, supply reference and return meet the device datasheet. Driver signal common to −36 V relationship is not documented.
- **prime**: Not recommended for the documented 36 V/large external-driver architecture as a replacement power stage. Prime motor outputs are winding power, not STEP/DIR; a Core-compatible STEP/DIR peripheral would be required to keep DQ860s.

### Sources

- [Electrical plan 012-001-001-01 Rev A, 2020-09-01](https://www.deinefraesmaschine.de/wp-content/uploads/2020/09/ePlan-CNC-Fraese.pdf)
- [Wantai DQ860MA family manual (verify installed suffix)](https://images-na.ssl-images-amazon.com/images/I/81duybQv64L.pdf)
- [Wantai DQ860MA manufacturer 3-axis wiring diagram](https://www.wantmotor.com/Content/upload/pdf/2020642320/3-Axis-Driver-%26-motor-wiring-diagram-for-DQ860MA.pdf)
- [Hitachi WJ200 instruction manual](https://hitachiacdrive.com/Hitachi-WJ200-InstructionManual.pdf)
- [Hitachi WJ200 quick reference guide](https://hitachiacdrive.com/Hitachi-WJ200-Quick-Reference-Guide.pdf)
- [TI SN74LVC07A datasheet Rev W](https://www.ti.com/lit/ds/symlink/sn74lvc07a.pdf)
- [TI OPA197 datasheet](https://www.ti.com/lit/ds/symlink/opa197.pdf)
- [Core P1 board source](https://github.com/Smoothieware/Smoothieboard2/tree/master/V2_Core_P1)
- [OPA197 datasheet Rev C, SOIC-8 pin functions](https://www.ti.com/lit/ds/symlink/opa197.pdf)
- [TI ULN2003A Rev T, pins and electrical limits](https://www.ti.com/lit/ds/symlink/uln2003a.pdf)
- [Panasonic AQY212GS current product ratings](https://industry.panasonic.com/ap/en/products/control/relay/photomos/number/aqy212gs)
- [Panasonic catalog exact AQY212GS page extract, PDF pages56–59 (printed81–84)](/machine-control-pinout-survey/retrofit-sources/panasonic-aqy212gs-actual-pages56-59.pdf)

## Denford CNC 2600 Pro

The Hackspace cabinet reference documents the original Baldor NextMove, MSD556 and VS1ST path, but the current controller is unresolved and its Rev B drawing may differ from the Rev A machine. Proposed Core-to-MSD routes preserve external driver stages; exact axis assignment is dotted pending motor tracing. This plan includes the actual MSD P1 common-anode inputs and P2 motor/power outputs and the full VS1ST 1–11 control strip schedule. Keep physical safety chain independent.

### Target assessment

- **smoothiebox**: Use a SmoothieBox with V2 Core for the existing MSD556 external stages. Verify the Core carrier exposes all STEP/DIR and logic return contacts; cabinet old Baldor/board interfaces should not be assumed to be direct harnesses.
- **core**: Recommended signal controller if MSD556 drives remain. Two SN74LVC07A open-drain buffers can sink the specified MSD556 7–16mA input range within TI output ratings subject to guaranteed VOL conditions and correct machine +5V/logic return. Do not tie +37V to the Core.
- **prime**: Prime can replace MSD556 stages only if every motor current/supply fits integrated driver ratings and cabinet architecture is intentionally changed; not a drop-in STEP/DIR adapter. Retaining MSD556 requires Core logic outputs plus buffers.

### Sources

- [Denford CNC 2600 machine page, rev57156 2026-07-05](https://wiki.london.hackspace.org.uk/view/Denford_CNC_2600)
- [Cabinet Wiring page, rev54936 2022-03-14](https://wiki.london.hackspace.org.uk/view/Cabinet_Wiring)
- [MSD556 V2.0 datasheet Rev3.0 (2019)](https://wiki.london.hackspace.org.uk/w/images/e/e9/MSD556-V2.0_stepper-drive-datasheet-v3.0.pdf)
- [Baldor VS1ST Micro-Series MN767 manual](https://wiki.london.hackspace.org.uk/view/File:Baldor-VS1ST-Micro-Series-Manual.pdf)
- [TI SN74LVC07A datasheet Rev W](https://www.ti.com/lit/ds/symlink/sn74lvc07a.pdf)
- [TI OPA197 datasheet](https://www.ti.com/lit/ds/symlink/opa197.pdf)
- [Core P1 hardware source](https://github.com/Smoothieware/Smoothieboard2/tree/master/V2_Core_P1)
- [OPA197 datasheet Rev C, SOIC-8 pin functions](https://www.ti.com/lit/ds/symlink/opa197.pdf)
- [TI ULN2003A Rev T, pins and electrical limits](https://www.ti.com/lit/ds/symlink/uln2003a.pdf)
- [Panasonic AQY212GS current product ratings](https://industry.panasonic.com/ap/en/products/control/relay/photomos/number/aqy212gs)
- [Panasonic catalog exact AQY212GS page extract, PDF pages56–59 (printed81–84)](/machine-control-pinout-survey/retrofit-sources/panasonic-aqy212gs-actual-pages56-59.pdf)

## Genmitsu 3018-PROVer V2 retrofit

The drawing provides individual motor, command, power and peripheral conductors. Select one controller architecture from the target assessment; alternatives must not be wired at the same time. Retain only matching, measured machine harnesses and commission each circuit against its listed gate.

### Target assessment

- **smoothiebox**: Enclosure/carrier only; choose and wire the contained Core or Prime below after confirming its exact board and harness.
- **core**: Three external drivers are required. Candidate StepperOnline DM320T provides named PUL/DIR/OPTO and P2 A+/A-/B+/B- terminals; match motor current and verify Core logic interface.
- **prime**: Integrated X/Y/Z stepper outputs are plausible only if selected P11/P12 variant, motor current and power rating match. Output pins are winding phases, never STEP/DIR.

### Sources

- [3018-PROVer V2 manual V1.0 2022-09-06, English pp.15-21; motor table PDF p.73](https://genmitsu.s3.us-east-1.amazonaws.com/101-60-3018PV2/3018-PROVer_V2_User_Manual_%E3%80%90EN%2BDE%2BJP_V1.0_20220906_1.pdf)
- [SainSmart V2 specifications](https://genmitsu.com/products/3028-prover)
- [StepperOnline DM320T manufacturer manual](https://www.omc-stepperonline.com/download/DM320T_user_manual.pdf)
- [Texas Instruments SN74LVC07A datasheet, Rev W, open-drain logic and pinout](https://www.ti.com/lit/ds/symlink/sn74lvc07a.pdf)
- [Cytron MD10C R3.0 manufacturer specification](https://www.cytron.io/c-industry/p-10amp-5v-30v-dc-motor-driver)
- [Cytron MD10C R3.0 User Manual Rev3.0 V1.0 Aug 2018](https://www.robot-maker.com/shop/img/cms/348%20-%20Driver%20MD10C%20Cytron/MD10C%20Rev3-0%20Users%20Manual.pdf)
- [Texas Instruments SN74LVC07A datasheet Rev W](https://www.ti.com/lit/ds/symlink/sn74lvc07a.pdf)
- [StepperOnline DM320T user manual](https://www.omc-stepperonline.com/download/DM320T_user_manual.pdf)

## Avid EX 24.1 ClearPath retrofit

The drawing provides individual motor, command, power and peripheral conductors. Select one controller architecture from the target assessment; alternatives must not be wired at the same time. Retain only matching, measured machine harnesses and commission each circuit against its listed gate.

### Target assessment

- **smoothiebox**: Carrier/enclosure only. Place a Core controller and isolated/translated command interface inside; box does not provide servo control by itself.
- **core**: Four channels of buffered 5V STEP/DIR can be proposed to the documented CRP5310-01E J8/J9 Acorn inputs. Verify the exact board, reference/isolation, setup timing, and enable behavior first.
- **prime**: Prime coil outputs cannot drive servo command inputs. No direct Prime STEP/DIR source is established here; use Core or an independently specified external pulse generator.

### Sources

- [Avid EX 24.1 schematic page](https://www.avidcnc.com/support/instructions/electronics/ex/manual/servo/24.1/schematics/)
- [Avid CRP5310-01E 24.1 schematic pp.1-4](https://www.avidcnc.com/support/instructions/electronics/ex/manual/pdf/schematics/24.1/Avid_CNC_EX_Servo_Board_24.1.PDF)
- [Texas Instruments SNx4AHCT125 datasheet Rev R (2024-02), pins 3-4 and electrical characteristics](https://www.ti.com/lit/ds/symlink/sn74ahct125.pdf)
- [Teknic ClearPath MC/SD Manual Rev 3.29, SDSK step/dir section](https://teknic.com/files/downloads/clearpath_user_manual.pdf)

## Shapeoko 2 CNC router

Rewire each of the four existing motors through a separate named driver, with full command, return, power and phase connections below. The historical eight-pin sensor socket is shown pin by pin; proposed Core assignments remain dotted. The spindle controller input remains a specifically identified unresolved interface.

### Target assessment

- **core**: Main drawing uses Core P1 logic and new Pololu 2133 drivers. Use only when measured motor current and supply fit the carrier; otherwise select a suitably rated driver and redraw its exact terminals.
- **prime**: Alternative: onboard winding outputs J5/J6/J7/J8, each pin 1 B2, 2 B1, 3 A2, 4 A1. Assign the required motors in firmware; check fitted P11/P12 current, voltage and thermal limits before replacing external drivers.
- **smoothiebox**: Use a Core-based box for the drawn external-driver option, or a Prime-based box for the rated winding-output option. Trace the actual carrier harness; exterior connector names do not establish board pin numbers.

### Sources

- [Shapeoko 2 pinned revision 16813](https://wiki.raumzeitlabor.de/index.php?title=Shapeoko_2&oldid=16813)
- [Pololu 2133 wiring, pin names and current limits](https://www.pololu.com/product/2133/)
- [Inventables manufacturer spindle PWM terminal instructions](https://inventables.github.io/xcarve2-instructions/upgrade/step3/2usage/)

## MakeICT Ultimaker 2 retrofit

The drawing provides individual motor, command, power and peripheral conductors. Select one controller architecture from the target assessment; alternatives must not be wired at the same time. Retain only matching, measured machine harnesses and commission each circuit against its listed gate.

### Target assessment

- **smoothiebox**: Enclosure only. Select and verify Core or Prime controller within it; no heater or sensor schedule can be inferred from the enclosure.
- **core**: Four external motor drivers needed for X/Y/Z/E. Heater outputs require separately specified rated stages; no installed harness pinout is known.
- **prime**: Four integrated motor drivers can suit X/Y/Z/Titan if actual current ratings fit; Prime bed output contacts J13.1 VFET and J13.2 SW_BED are source-derived. Prime temperature input is usable only with correct sensor type/conditioning. P12 schematic now establishes J17 Hotend A and J19/J20 fan outputs; these conditional circuits require actual heater/sensor/fan and firmware qualification.

### Sources

- [MakeICT Ultimaker 2 equipment page (modified hotend/extruder)](https://wiki.makeict.org/wiki/Ultimaker_2)
- [Ultimaker 2 Main Board V2.1.1 source directory, reference only](https://github.com/Ultimaker/Ultimaker2/tree/master/1091_Main_board_v2.1.1_%28x1%29)
- [Ultimaker Main Board V2.1.1 schematic PDF, 2013-07-03, reference only](https://raw.githubusercontent.com/Ultimaker/Ultimaker2/master/1091_Main_board_v2.1.1_%28x1%29/Main%20Board%20V2.1.1.pdf)
- [Analog Devices MAX31865 datasheet, SPI platinum RTD converter](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf)
- [Analog Devices MAX31865PMB1 Peripheral Module datasheet Rev 0 (Jan 2014)](https://www.analog.com/media/en/technical-documentation/data-sheets/max31865pmb1.pdf)
- [Smoothieware temperature control / PT100 documentation](https://smoothieware.org/temperaturecontrol)
- [Exact Prime P12 MOSFET schematic at pinned revision](https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P12_Prime2590/mosfets.kicad_sch)

## Unlogic's Optimum Optimill MH50V

The owner’s cabinet schedule places DB44 connectors as external machine peripherals between the controller and Delta servo drives; the SmoothieBox/Core feeds into those peripheral connectors through differential line-driver ICs. The Delta B3A-L manual confirms pins 37/39 SIGN−/+, 41/43 PULSE−/+ and warns not to apply 24V to pulse/sign pins. The proposed AM26LV31E circuit explicitly shows every IC signal, supply, ground and enable pin. Axis/channel pairing remains dotted until drive labels and cable continuity are checked.

### Target assessment

- **smoothiebox**: Use a SmoothieBox enclosure with V2 Core. It must expose Core J5 STEP/DIR and 3.3V/GND connections to the differential line-driver board; it does not replace the servo drive power stages.
- **core**: Recommended control target: V2 Core plus two TI AM26LV31E chips (or a reviewed rated isolated differential module) to drive the B3A-L differential pulse/sign pins. Validate voltage, line common, pulse mode, output power budget and cable fault behavior.
- **prime**: Prime integrated stepper stages cannot replace the Delta AC servo drives. Prime GPIO breakout is not established as equivalent to the proposed Core differential drive interface; retain servo drives and use a suitable Core-based control interface.

### Sources

- [Unlogic MH50V LinuxCNC conversion thread and owner wiring image](https://forum.linuxcnc.org/12-milling/50559-optimum-optimill-mh50v-cnc-conversion)
- [Owner DB44 wiring image](https://forum.linuxcnc.org/media/kunena/attachments/35541/Mesawiring.png)
- [Delta ASDA-B3 User Manual, sections 3.3.3 and 3.10.1](https://deltaacdrives.com/Delta-ASDA-B3-Servo-Drive-User-Manual.pdf)
- [TI AM26LV31E datasheet Rev C](https://www.ti.com/lit/ds/symlink/am26lv31e.pdf)
- [Smoothieboard V2 Core P1 source](https://github.com/Smoothieware/Smoothieboard2/tree/master/V2_Core_P1)
- [TI ULN2003A Rev T](https://www.ti.com/lit/ds/symlink/uln2003a.pdf)
- [Panasonic AQY212GS product ratings](https://industry.panasonic.com/ap/en/products/control/relay/photomos/number/aqy212gs)
- [AQY212GS exact archived catalog pages](/machine-control-pinout-survey/retrofit-sources/panasonic-aqy212gs-actual-pages56-59.pdf)

## RotarySMP Schaublin 125-CNC owner retrofit

The owner reports JMC drives running in analog mode, with LinuxCNC/Mesa analog control and spindle encoder feedback. This is not a demonstrated drop-in Smoothie conversion. The main drawing separates the documented retained architecture from the missing drive-mode, VFD and feedback contracts. A pulse-position conversion requires exact drive identification, manufacturer confirmation and a new control design; otherwise retain the supported closed-loop controller.

### Target assessment

- **smoothiebox**: Enclosure/carrier has no terminal map for this evolving retrofit. Preserve the owner-reported Mesa/LINUXCNC source architecture until installed device schedules and requirements are known.
- **core**: JMC AC servos are reported running in analog mode. A Core replacement is not established: first verify the exact drives can be configured for compatible pulse-position input. Otherwise retain a supported closed-loop controller; do not claim Core can close the analog position loop.
- **prime**: Prime integrated coil outputs are not servo commands; this owner-reported JMC analog-servo/VFD arrangement is not a demonstrated Prime-compatible conversion.

### Sources

- [RotarySMP owner thread page 44, post #259199 (JMC drives in analog mode)](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=430)
- [JMC servo-drive manual linked by owner at post #259363; exact model compatibility unknown](https://www.jmc-motor.com/file/1806080392.pdf)
- [RotarySMP owner thread page 62, post #339351 (VFD Pin 28 enable; 0-10V spindle command/stop discussion)](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=610)
- [RotarySMP Schaublin 125 CNC retrofit thread pp.51,63,69; posts #339477/#339505/#343425/#343430/#343466/#346508](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit)
