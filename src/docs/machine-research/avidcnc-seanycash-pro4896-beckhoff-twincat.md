# Seanycash’s Avid PRO4896 with custom Beckhoff TwinCAT controls

**Machine identity:** Seanycash’s individual Avid PRO4896 CNC router with a custom industrial-controls system. The owner describes buying the PRO4896 mechanical kit, then procuring and integrating the electrical hardware and writing the controls software. The machine has a home-built wooden base.

**Novelty check:** Repository search on 2026-09-23 for `Seanycash`, `custom Beckhoff controls`, and the thread identifier found no matching per-machine dossier. The Avid PRO4896 is a commercial frame family; this dossier records the owner’s specific controls and enclosure build.

**Build/use state:** Owner reports wiring and programming the machine over roughly two years and describes the result as a completed custom build. The thread does not document a specific first cut or measured machining result, so cutting performance is unverified here.

## Owner-reported system

| Subsystem | Reported hardware/software | Source limits |
|---|---|---|
| Frame and base | Avid PRO4896; home-built wooden base | No build dimensions beyond the model designation, wood species, or base construction details are provided. |
| Control computer | Dell OptiPlex 7020 with quad-core CPU and SSD | Exact CPU and operating-system version are not stated. |
| Fieldbus and motion | Beckhoff EK1100 EtherCAT bus coupler; EL7040 stepper motor control cards; Beckhoff NEMA 34 stepper motors | Axis/channel assignments, motor wiring, card counts, current settings, and EtherCAT topology are not mapped in the post. |
| Sensors and digital IO | Beckhoff EP module(s) for proximity sensors; an IP-rated input module with up to 16 inputs; an 8-channel output module | Exact EP model and terminal assignments are not given. The owner says the proximity sensors/limit switches use the input module, but does not publish a point-by-point map. |
| Spindle and VFD | Avid GMT 3 HP spindle; Invertek Optidrive E3 3 HP VFD; Beckhoff EL6020 serial card for VFD control | The owner reports using Modbus to start/stop and set spindle speed. Register addresses, serial settings, spindle parameters, and fault handling are not shown. |
| Power and emergency stop | 48 V supplies for steppers, 24 V for logic and IO, Pilz safety relay with redundant normally closed contacts | Owner says the E-stop removes power from all steppers; motors remain unpowered until the E-stop is released and the white control-power button is pressed to reset the safety circuit. The post is not a schematic and does not specify the exact safety relay or contactor model. |
| Software and HMI | TwinCAT 3 for real-time motion/control; TwinCAT HMI for machine UI; VCarve Pro for CAM | No PLC program, HMI project, machine-coordinate convention, homing sequence, or G-code settings are included in the inspected thread. |
| Dust collection | Collector motor under the table; ductwork arranged along the wall. TwinCAT switches a relay output automatically during program execution; the HMI can also toggle it. | No relay model, collector specification, or extraction measurements are given. |

## Control sequence described by the owner

The owner describes the E-stop safety relay as a redundant normally closed circuit. Pressing the E-stop removes power from all stepper motors; releasing the E-stop alone does not restore motor power. The operator must also press the white control-power button, which resets the safety circuit. The forum provides no timing, diagnostic, safety-category, or validation evidence, so this is only a description of this owner’s implementation.

For spindle control, the owner says the EL6020 serial communication card talks Modbus to the Optidrive E3 to start and stop it and set speed. The owner also reports that the dust collector is linked to program execution through a relay output and can be toggled from the HMI. No connector pinout or downloadable wiring diagram appears in the inspected post.

## Forum visuals

The owner’s build post includes photographs of the machine, main power cabinet, IO cabinet, VFD cabinet, dust-collection layout, HMI, and TwinCAT development environment. The post captions identify what each image depicts; the forum CDN links returned cache-miss in this research pass, so the image pixels were not reviewed.

![Owner-posted front view of the PRO4896 and its under-table main power cabinet](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/a/ac56d466c1522b798060b871453b08d304b9b0a4.jpeg)

![Owner-posted photograph of the main power cabinet](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/1/199a6029f2aae8139aee81c384b8e930df34dfa8.jpeg)

![Owner-posted IO-control cabinet photograph](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/8/8eb7ec2a41ce0116a5bad307e21867b3004479db.jpeg)

![Owner-posted VFD-control cabinet photograph](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/e/ed38e8afa336aa7cc1c7c314b40a6d2ce09eaefe.jpeg)

![Owner-posted TwinCAT HMI screenshot](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/7/7ed15ce281ca4b6381900332a2247d697799bf11.png)

![Owner-posted TwinCAT development-environment screenshot](https://canada1.discourse-cdn.com/flex027/uploads/avidcnc/original/2X/b/b15de40da6118fd9359422f6ab172cefbf5326c7.png)

The forum page exposes these attachment URLs and captions, but the CDN returned cache-miss when retrieval was attempted. Images are embedded as source links and their pixels were not visually inspected in this pass. The thread remains the source for all visual context.

## Unresolved pinout and commissioning details

This is a rich component-level description, but not a wiring plan. The inspected thread does not identify exact Beckhoff input/output terminal models and channels, proximity-switch wiring, stepper phase/power connections, EtherCAT node ordering, E-stop schematic, reset logic, relay terminals, serial port wiring, Modbus settings/registers, VFD parameter values, spindle cable/shield grounding, or machine-level connector assignments. Do not use the text above as a field-wiring instruction.

## Manufacturer contact reference · Optidrive E3 IP20 only

The owner identifies an Invertek Optidrive E3 rated 3 HP and reports that a Beckhoff EL6020 controls it over Modbus. The inspected forum post does not show the drive nameplate or enclosure/IP variant. Invertek's official Optidrive E3 support page lists separate IP20, IP66 indoor and IP66 outdoor guides. The linked **Optidrive ODE-3 IP20 User Guide, Version 1.04 (firmware 3.11, © 2022)** therefore supplies a clearly bounded family reference; it does not identify the installed drive variant or its as-built terminal wiring.

Every position below is **REFERENCE ONLY · FITTED VARIANT UNVERIFIED · OPEN TO SMOOTHIEBOX**. These are manufacturer-defined E3 IP20 contact functions, not observed contacts on Seanycash's installed drive. No mating orientation, pin-to-pin conductor, Modbus settings, or route from the EL6020 is established. The manual explicitly warns that the E3 RJ45 port is not Ethernet and must not be connected directly to an Ethernet port.

### E3 IP20 control terminal strip (11 positions)

| Position | Manufacturer label / function |
|---:|---|
| 1 | +24 V DC user output, 100 mA; do not connect an external voltage source |
| 2 | Digital input 1, positive logic |
| 3 | Digital input 2 |
| 4 | Digital input 3 / analogue input 2 |
| 5 | +10 V user output, 10 mA |
| 6 | Analogue input 1 / digital input 4 |
| 7 | 0 V common; internally connected to terminal 9 |
| 8 | Analogue output / digital output |
| 9 | 0 V common; internally connected to terminal 7 |
| 10 | Auxiliary relay common |
| 11 | Auxiliary relay normally-open contact |

### E3 IP20 built-in RJ45 (8 positions)

| Pin | Manufacturer label / function |
|---:|---|
| 1 | CAN − |
| 2 | CAN + |
| 3 | 0 V |
| 4 | −RS485 (PC) |
| 5 | +RS485 (PC) |
| 6 | +24 V |
| 7 | −RS485 (Modbus RTU) |
| 8 | +RS485 (Modbus RTU) |

The manual documents Modbus RTU on the RJ45 interface and specifies RS-485 two-wire signalling. That agrees with the forum's stated communication method at a functional level only; it does not establish the owner’s physical port variant, RJ45 cable, EL6020 connector/pinout, serial setup, register settings, shield/reference implementation, or any SmoothieBox route. All 19 listed manufacturer-reference positions remain unconnected in the diagram.

Sources: [Invertek Optidrive E3 support resources](https://www.invertekdrives.com/variable-frequency-drives/optidrive-e3/support-resources); [Optidrive ODE-3 IP20 User Guide V1.04, sections 4.7 and 8.1–8.3 (manufacturer PDF)](https://invertek.store/cdn/shop/files/82-E3I20-IN_E3_IP20_User_Guide_V1.04.pdf?v=973393679902890573), especially pp. 13 and 32–33. Accessed 2026-09-29. The PDF is served by Invertek's store and bears Invertek Drives Ltd copyright; the support page is the manufacturer's canonical guide index.

## Manufacturer contact reference · Beckhoff EK1100 only

The owner names an EK1100 EtherCAT coupler, but the post does not identify its revision, terminal block, field-power arrangement, EtherCAT topology, or connected EL terminals. Beckhoff's official EK1100 documentation supplies the following family-level contact reference only. Every position is **REFERENCE ONLY · FITTED VARIANT UNVERIFIED · OPEN TO SMOOTHIEBOX**; no contact is treated as an observed owner-build conductor.

### EK1100 front power contacts (8 positions)

| Position | Manufacturer reference function |
|---:|---|
| 1 | 24 V operating supply |
| 2 | Field +24 V |
| 3 | Field 0 V |
| 4 | Protective earth (PE) |
| 5 | 0 V operating supply |
| 6 | Field +24 V |
| 7 | Field 0 V |
| 8 | Protective earth (PE) |

### EK1100 EtherCAT RJ45 sockets X1 and X2 (16 positions)

The official contact view identifies the standard Ethernet differential pairs on each socket: position 1 TD+, 2 TD−, 3 RD+, and 6 RD−. Positions 4, 5, 7 and 8 are retained as individually shown **function not stated in the source view** contacts. X1 is the incoming port and X2 the outgoing port in the coupler's two-port EtherCAT arrangement; the owner's actual cable direction and topology are not published.

Source: [Beckhoff EK1100 documentation](https://infosys.beckhoff.com/content/1033/ek110x_ek15xx/), accessed 2026-09-29. This manufacturer reference does not establish the installed coupler's contact orientation, wire colors, shield termination, node order, or any SmoothieBox route.

## Source

1. Avid CNC Community, Seanycash, [“AVID Pro 4896 With custom Beckhoff controls platform”](https://forum.avidcnc.com/t/avid-pro-4896-with-custom-beckhoff-controls-platform/1811), owner post dated 6 March 2023. The post identifies the mechanical frame, wood base, computer, Beckhoff components, VFD/spindle, TwinCAT software, power supplies, E-stop behavior, cabinets, Modbus spindle-control method, and relay-controlled dust collector. All system facts in this dossier come from that forum post; the author’s linked non-forum repository is not used as a source.
