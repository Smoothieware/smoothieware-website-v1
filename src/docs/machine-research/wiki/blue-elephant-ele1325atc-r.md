# Blue Elephant ELE1325ATC-R

Initial research capture: 2026-09-23. Follow-up source review: 2026-09-28. Status: machine identity and operating functions are source-backed; installed electrical revision and physical pinout remain unverified.

## Identity, use and deduplication

HSBNE’s sheet router, named Bumblebee. Wiki names Syntec 6 controller documentation; its exact hardware revision is unknown. Checked against Avid, X-Carve, Onefinity, OpenBuilds and other atlas routers; the model name and photographed gantry marking establish a distinct machine.

## Wiki-supported machine facts

Wiki describes approximately 1300 × 2500 mm bed, ISO30 tooling and an eight-position automatic tool changer. One specification table gives 18000 rpm; another gives 9 kW / 24000 rpm. This conflict is unresolved. Its axis entry “X/Y/Z + A/Y2” does not establish a fitted fourth rotary axis. [Community machine page](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router).

## Control, setup and use

The machine page requires supervision and lists a generic FANUC postprocessor. It separately links Syntec 6 documentation, but does not identify the installed controller model or revision. The wiki operational guide documents the local sequence: compressor and air dryer on, open machine air, clear gantry travel, badge at the interlock, then use the panel enable button. It specifies homing before work; tool setup and tool-height offset measurement; NC-file transfer from USB; work-offset setup; fixture/stock setup; and vacuum clamping and dust extraction immediately before cutting. The guide identifies a 0.73 MPa air-pressure alarm and says the machine should be homed after startup warnings. It describes measuring tool length through Setup → ATM, selecting the tool number, checking reference position, and starting ATM measurement. For Z work coordinates it directs operators to ATM → Z SET because tool-height compensation may otherwise be omitted. The post-homing indications are X−, Y−, Z+, and 4+; these are controller indicators, not switch terminal labels. The guide says there is an E-stop on the controller and one on each side of the gantry. These are locally documented operations, not independent safety validation or a physical wiring schedule. [Machine page](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router) · [Operational guide](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router/operationalguide).

The operational guide also names X/Y/Z and 4th-axis homing indicators and work-offset buttons including A. This corroborates a controller-side fourth/A axis workflow, while the machine page's `X/Y/Z+A/Y2` notation leaves the physical axis arrangement unclear. The page lists a fourth-axis speed of 2000 deg/min; do not use it as a verified installed rotary-axis setting without checking the actual configuration.

## Follow-up source review (2026-09-28)

The linked [Syntec 6 Series Operation Manual](https://wiki.hsbne.org/_media/tools/woodshop/syntec-6series-controller-operation-manual.pdf) identifies itself as a 6 Series Mill Controller Operation Manual, dated 2014-03-02, version 1.21. Its control-panel and operating instructions are generic controller documentation. The reviewed material does not identify the installed control-card model/revision or provide a machine-specific cabinet terminal schedule, connector view, or fitted I/O assignments. The manual therefore supports controller-operation context only; it does not support a Blue Elephant machine pinout.

Blue Elephant's [general CNC-router buyer guide](https://pt.elephant-cnc.com/blog/225-basic-user-guide-of-cnc-router/) includes a generic Syntec 6MB section. It states 32 input and 32 output points, and an example 4-axis ATC use of 8 outputs and 13 inputs. The accompanying image is a generic Syntec series capability table, not a terminal map. The guide says a standard 3-axis Syntec ATC circuit drawing is obtained through its technical-exchange group; that drawing is not supplied on the guide page. These logical point counts and example allocations are not physical connector/contact counts and are not confirmed for the HSBNE machine.

The same guide's photographed 6MB panel only identifies a network-cable port location. It does not reveal signal-contact assignments. A separate Blue Elephant [Mach3 USB controller manual](https://www.elephant-cnc.com/wp-content/uploads/2017/01/CNC-Router-manual-Mach3-USB.pdf) covers a different control architecture; the HSBNE machine page instead links Syntec 6 documents. Do not transfer that manual's controller-card terminals, axis signals, or DB25 assumptions to this machine. No inspected machine-specific source identifies a DB25 connector.

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Syntec 6 documentation is linked; USB file import is described in the local operating guide | Unknown physical connector, contact count, and assignments | Unknown | Controller model/revision and machine terminal schedule not identified |
| Motors, spindle, and ATC | Axis operation, ISO30 spindle, and 8-tool ATC are described | Unknown motor/drive/inverter connectors and contact assignments | Unknown | Do not translate mechanical specifications or generic 6MB I/O capacity into terminals |
| Homing, tool measurement, E-stop, and air-pressure alarm | Guide names X−, Y−, Z+, and 4+ homing indications; controller and gantry E-stop controls; ATM tool-length measurement; 0.73 MPa alarm | Unknown sensors, contact positions, polarity, and circuit topology | Unknown | Operating behavior does not reveal electrical contacts; preserve safety circuits as unmapped |

## Visual evidence and transcription

[Wiki source page](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router) · [Original wiki-hosted media](https://wiki.hsbne.org/_media/tools/woodshop/assembled_img_20210124_191109.jpg) · [Retained original](images/blue-elephant.jpg).

Photo clearly reads “BLUE ELEPHANT” and “ELE1325ATC-R” on the gantry. It shows a large grooved/grid table, vertical spindle assembly, rear tool-holder row and a right-side rotary-looking fixture. A fixture’s appearance does not establish connected axis wiring.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Page contains unfinished template sections; they are excluded. The page gives conflicting spindle ratings (18,000 rpm versus 9 kW / 24,000 rpm). The fourth-axis controller workflow is documented, but physical axis layout and configuration remain unresolved. Generic Syntec 6MB input/output capacity and generic Blue Elephant control-card examples do not establish this machine's fitted revision or contact assignments.

## Evidence limits and integration gate

This is a source-scoped research dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance. The updated drawing must retain the 82 named SmoothieBox exterior contacts while leaving machine contact positions and routes OPEN; there are no justified guesses, so the DOTTED = GUESS legend should state that none are drawn. Do not depict a DB25 for this machine unless an exact-machine source establishes one.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.
