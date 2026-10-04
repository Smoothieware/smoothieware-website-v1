# StyleCNC STM6090

Research status: wiki-sourced machine dossier; exact model absent from the frozen atlas and exact-name repository search. Captured 2026-09-23.

## Identity and configuration

SoMakeIt identifies a four-axis (XYZ plus rotary) StyleCNC STM6090 with a 600 × 900 mm bed, 600 × 750 × 150 mm effective work volume, and RichAuto A18 controller. The space notes modifications for coolant and dust collection. Its controller is operated from the machine; the wiki reports Vectric VCarve Makerspace Edition on a nearby PC for CAM.

## Wiki-recorded workflow

1. Create a CAD model and generate G-code with CAM.
2. The wiki says the default controller workflow has the spindle on and feeds/speeds selected through a menu before running a program; its intermediate page covers configuring these from G-code.
3. The wiki describes a mist-coolant setup for aluminium and similar materials. For wood, it instructs users to raise the mist head and disconnect the air supply. Its page states a 5% coolant-oil / 95% distilled-water mix.
4. Four-axis use is not fully described: the wiki says VCarve substitutes rotary moves for X or Y and therefore does not provide true simultaneous four-axis paths; manual moves or software with the needed feature are required.

## Connections and pinout

| Interface | Wiki evidence | Pin/contact map |
|---|---|---|
| RichAuto A18 controller | Controller model identified; wiki says standard G-code, without a detailed compatibility table | No terminal, connector, signal, voltage, or polarity map on the cited wiki page |
| Rotary axis | Fourth axis is listed | Connector and motor wiring not specified |
| Mist coolant | Air line connects to the support shelf’s air connector; dials set air/coolant flow | Pneumatic connection only; electrical wiring not specified |

## Visual evidence

The cited SoMakeIt article contains no machine-specific connection diagram in the inspected text. [Wiki machine page](https://wiki.somakeit.org.uk/index.php?title=Big_CNC_Machine&oldid=448).

## Safety and limits

The wiki requires induction and supervision-level knowledge, but does not provide machine-specific PPE or material limits in the cited article. Do not infer those from the model name. The controller’s exact G-code dialect, electrical pinout, safety circuit, spindle interface, and current machine status remain unknown.

## Manufacturer-controller reference follow-up · 2026-09-29

The RichAuto [official A18 page](https://www.richautocontroller.com/richauto-a18/) and its [official downloads page](https://www.richautocontroller.com/download/) identify the A18 as a four-axis product with an 8-input/8-output interface board, a 50-core cable, and an A18 wiring-manual listing. The page also contains a conflicting product-parameter row that says “Controlled Axis Number 3 axis”; its feature text says four axes. The exact unit installed on the SoMakeIt machine, firmware, interface board and 50-core harness revision are not identified.

The [official shared A1X manual](https://www.richautocontroller.com/wp-content/uploads/2023/12/A1X_Motion_Control_SystemA11%E3%80%81A12%E3%80%81A15%E3%80%81A18%E2%80%94Manual.pdf) has a generic interface-board schedule in §3.2, printed pp. 10–11 (PDF pp. 14–15), and an A18-specific input schedule in §8.2, printed p. 52 (PDF p. 56). These are controller-reference signal labels, not a physical pin map for the StyleCNC cabinet or its mating connector.

| Schedule scope | Individually listed reference marks | Source function and qualifications | StyleCNC installation status |
|---|---|---|---|
| A18-specific §8.2 inputs | X01 | X machine zero; logic low; external mechanical, photoelectric or proximity switch | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X02 | Y machine zero; logic low; external mechanical, photoelectric or proximity switch | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X03 | Z machine zero; logic low; external mechanical, photoelectric or proximity switch | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X04 | A machine zero; logic low; external mechanical, photoelectric or proximity switch | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X05 | Tool setting; logic low | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X06 | Driver alarm; logic low | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X07 | Hard limit; logic low | OPEN; no cabinet position or wiring established |
| A18-specific §8.2 inputs | X08 | E-stop; logic low | OPEN; no cabinet position or wiring established |
| Generic A1X §3.2 input revision | X01 | X machine zero; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X02 | Y machine zero; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X03 | Z machine zero; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X04 | Tool setting; logic low | Conflicts with A18-specific §8.2, where X04 is A machine zero |
| Generic A1X §3.2 input revision | X05 | Driver alarm; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X06 | Hard limit; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X07 | E-stop; logic low | Separate manual schedule; not merged into the A18-specific table |
| Generic A1X §3.2 input revision | X08 | Pedal switch; pauses during processing and resumes after processing | Conflicts with A18-specific §8.2, where X08 is E-stop |
| Generic A1X §3.2 input revision | 24V Output | Power for active sensors | Voltage/source wiring at this machine unknown; OPEN |
| Generic A1X §3.2 input revision | GND | Listed signal reference for active sensors | Cabinet return and isolation unknown; OPEN |
| Generic A1X §3.2 input revision | SHIELD | Shielded signal | Termination unknown; OPEN |
| Generic A1X §3.2 outputs | Y01 | FWD/REV; logic low; note says connect FWD and DCM, do not connect Y01 | OPEN; no spindle/inverter terminal route established |
| Generic A1X §3.2 outputs | Y02 | Multi-Speed 1; logic low | OPEN |
| Generic A1X §3.2 outputs | Y03 | Multi-Speed 2; logic low | OPEN |
| Generic A1X §3.2 outputs | Y04 | Multi-Speed 3; logic low | OPEN |
| Generic A1X §3.2 outputs | Y05 | Alarm indicator; logic low | OPEN |
| Generic A1X §3.2 outputs | Y06 | Run indicator; logic low | OPEN |
| Generic A1X §3.2 outputs | Y07 | Definable output; logic low | OPEN |
| Generic A1X §3.2 outputs | Y08 | Definable output; logic low | OPEN |
| Generic A1X §3.2 outputs | 24V Output | Indicator supply | Source capacity and cabinet wiring unknown; OPEN |
| Generic A1X §3.2 outputs | GND | Listed with output schedule | Cabinet reference and isolation unknown; OPEN |
| Generic A1X §3.2 outputs | SHIELD | Shielded signal | Termination unknown; OPEN |
| Generic A1X §3.2 power input | 24V+ | +24 V DC interface-board supply input, rated 24 V / ≥3 A | Controller-side reference only; fitted supply/wiring unknown |
| Generic A1X §3.2 power input | 24V− | Power GND | Controller-side reference only; fitted supply/wiring unknown |
| Generic A1X §3.2 X-axis signal group | 5V | Common-anode output, 5 V; do not impose voltage on this pin | Driver interface and fitted wiring unknown; OPEN |
| Generic A1X §3.2 X-axis signal group | PULSE | X-axis pulse output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 X-axis signal group | DIR | X-axis direction output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 X-axis signal group | SHIELD | Shielded signal; note says do not impose voltage | Not identified as GND; termination unknown |
| Generic A1X §3.2 Y-axis signal group | 5V | Common-anode output, 5 V; do not impose voltage on this pin | Driver interface and fitted wiring unknown; OPEN |
| Generic A1X §3.2 Y-axis signal group | PULSE | Y-axis pulse output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 Y-axis signal group | DIR | Y-axis direction output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 Y-axis signal group | SHIELD | Shielded signal; manual says “Not GND” | Keep distinct from signal ground; termination unknown |
| Generic A1X §3.2 Z-axis signal group | 5V | Common-anode output, 5 V | Driver interface and fitted wiring unknown; OPEN |
| Generic A1X §3.2 Z-axis signal group | PULSE | Z-axis pulse output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 Z-axis signal group | DIR | Z-axis direction output; ≥3 V, drive current ≤8 mA | Controller output; do not join to another controller output |
| Generic A1X §3.2 Z-axis signal group | SHIELD | Shielded signal; manual says “Not GND” | Keep distinct from signal ground; termination unknown |
| Generic A1X §3.2 fourth-axis signal group | 5V | Common-anode output, 5 V | Generic schedule labels this C_AXIS; A18 §8 instead names A-axis zero |
| Generic A1X §3.2 fourth-axis signal group | PULSE | C-axis pulse output; ≥3 V, drive current ≤8 mA | Do not relabel as A-axis without the installed A18 board/harness map |
| Generic A1X §3.2 fourth-axis signal group | DIR | C-axis direction output; ≥3 V, drive current ≤8 mA | Do not relabel as A-axis without the installed A18 board/harness map |
| Generic A1X §3.2 fourth-axis signal group | SHIELD | Shielded signal; manual says “Not GND” | Keep distinct from signal ground; termination unknown |

The controller product page permits the rotary-axis mark to be selected as A, B or C, while the A18-specific input table uses A and the generic axis-output table uses C. The shared manual and product page do not resolve how the particular 50-core harness labels the fourth-axis output. These names therefore stay in separately labelled source-reference groups rather than being treated as matching connector cavities.

The original SoMakeIt evidence still supports only a machine-side rotary-axis identity and pneumatic mist-air connection, with no numbered connector positions. The manufacturer signal tables do not add contacts to either installed machine peripheral. No DB25 is documented. No dotted SmoothieBox route is currently justified: the A18 pulse/direction terminals are controller outputs, and the driver input interface plus a controller changeover are undocumented. All SmoothieBox-to-machine routes remain OPEN pending the actual driver/cabinet schedule and confirmation of the fitted A18 board and harness.

### Separate official A18 wiring-image schedule · 2026-09-29

The RichAuto A18 product page embeds an [A18 stepping overall wiring diagram](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-stepping-overall-wiring-1024x1024.jpg). The image has separate labelled J7, J8 and J10 connector schedules and four axis control-signal groups. These are model-reference marks in the manufacturer's schematic, not proof of the StyleCNC cabinet's installed connector, board, mating view, harness continuity or terminal fitment.

| Diagram connector/group | Position | Mark shown in A18 wiring image | Source scope and conflict handling |
|---|---:|---|---|
| J7 | 1 | Y1 | Output mark only in this image; do not add missing generic-manual J7 positions here |
| J7 | 2 | Y2 | Output mark only in this image |
| J7 | 3 | Y3 | Output mark only in this image |
| J7 | 4 | Y4 | Output mark only in this image |
| J7 | 5 | Y5 | Output mark only in this image |
| J7 | 6 | Y6 | Output mark only in this image |
| J7 | 7 | Y7 | Output mark only in this image |
| J7 | 8 | Y8 | Output mark only in this image |
| J7 | 9 | GND | The image's J7 schedule shows nine positions; the generic §3.2 schedule separately lists 24V Output, GND and SHIELD along with Y01–Y08 (11 entries). Keep these source schedules separate |
| J8 | 1 | X1 · X_zero | Wiring-image label; separate from manual §8.2 X01 signal functions |
| J8 | 2 | X2 · Y_zero | Wiring-image label |
| J8 | 3 | X3 · Z_zero | Wiring-image label |
| J8 | 4 | X4 · Cutter | Conflicts with §8.2 X04 A machine zero and generic §3.2 X04 Tool setting; retain all source scopes separately |
| J8 | 5 | X5 | No function is labelled at this position in the wiring image |
| J8 | 6 | X6 | No function is labelled at this position in the wiring image |
| J8 | 7 | X7 | No function is labelled at this position in the wiring image |
| J8 | 8 | X8 | No function is labelled at this position in the wiring image |
| J8 | 9 | 24V+ | Wiring-image mark; sensor-power direction/application is not inferred from the drawing alone |
| J8 | 10 | GND | Wiring-image mark; no StyleCNC return path established |
| J8 | 11 | Shield | Wiring-image mark; termination unknown |
| J10 | 1 | 24V+ | Controller-side 24 V input group in manufacturer schematic |
| J10 | 2 | GND | Controller-side return mark; no StyleCNC route established |
| X_AXIS group | 1 | 5V+ | Axis-group signal mark; not a terminal number from a StyleCNC connector map |
| X_AXIS group | 2 | PULSE | X-axis pulse output reference |
| X_AXIS group | 3 | DIR | X-axis direction output reference |
| X_AXIS group | 4 | Shield | Shield mark; termination unknown |
| Y_AXIS group | 1 | 5V+ | Axis-group signal mark; not a terminal number from a StyleCNC connector map |
| Y_AXIS group | 2 | PULSE | Y-axis pulse output reference |
| Y_AXIS group | 3 | DIR | Y-axis direction output reference |
| Y_AXIS group | 4 | Shield | Shield mark; termination unknown |
| Z_AXIS group | 1 | 5V+ | Axis-group signal mark; not a terminal number from a StyleCNC connector map |
| Z_AXIS group | 2 | PULSE | Z-axis pulse output reference |
| Z_AXIS group | 3 | DIR | Z-axis direction output reference |
| Z_AXIS group | 4 | Shield | Shield mark; termination unknown |
| C_AXIS group | 1 | 5V+ | Fourth-axis group is labelled C_AXIS in this image; product page allows rotary A/B/C labelling |
| C_AXIS group | 2 | PULSE | Fourth-axis pulse output reference; no installed A/C mapping established |
| C_AXIS group | 3 | DIR | Fourth-axis direction output reference; no installed A/C mapping established |
| C_AXIS group | 4 | Shield | Shield mark; termination unknown |

The diagram also depicts a generic stepper-driver block for each axis, but gives no driver model, cavity numbering, StyleCNC installation record, or electrical qualification for a replacement controller. It does not establish a SmoothieBox route. Keep all 38 positions above separately OPEN and do not draw DB25: the image identifies no DB25 connector. The A18 image's unlabeled J8 X5–X8 and its nine-position J7 schedule remain distinct from both §3.2 and A18-specific §8.2 tables.

## Separate A18 manual reference schedule · 2026-09-29

The [manufacturer-attributed 73-page A18 User’s Manual](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf) names Beijing RuiZhitianhong S&T Co., Ltd. as publisher in its foreword and lists wiring schedules in §3.2, printed pp. 14–18 (PDF pp. 17–21), with wiring examples in §3.3. The hosting site is not independently authenticated here as manufacturer-operated. This publication has not been revision-matched to the installed StyleCNC board, so it remains a separate controller-reference view.

The image’s J7/J8/J10 and X/Y/Z/C-axis schedules remain a fourth, separate source view. Overlapping source designations do not establish identical fitted contacts. The 38 manual rows below are additional records; they do not replace or re-number the 38 marks from the separately hosted overall wiring image.

### Separate A18 manual — §3.2 and numbered §3.3 examples

Separate manufacturer-attributed A18 publication linked from the supplied product page. Publication and installed-board revisions are not matched. This view is not merged with shared A1X tables or §8.2.

#### J2 — X axis

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| 5V+ | 1 (reference drawing only) | X-axis common-anode 5 V output | power output; 5 V reference; Do not apply external voltage. | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| PULSE | 2 (reference drawing only) | X-axis pulse-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| DIR | 3 (reference drawing only) | X-axis direction-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Shield | 4 (reference drawing only) | X-axis cable-shield terminal | shield; Do not use this terminal as a grounding terminal. | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |

#### J3 — Y axis

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| 5V+ | Not assigned | Y-axis common-anode 5 V output | power output; 5 V reference; Do not apply external voltage. | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18) |
| PULSE | Not assigned | Y-axis pulse-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18) |
| DIR | Not assigned | Y-axis direction-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18) |
| Shield | Not assigned | Y-axis cable-shield terminal | shield; Do not use this terminal as a grounding terminal. | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18) |

#### J4 — Z axis

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| 5V+ | Not assigned | Z-axis common-anode 5 V output | power output; 5 V reference; Do not apply external voltage. | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| PULSE | Not assigned | Z-axis pulse-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| DIR | Not assigned | Z-axis direction-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| Shield | Not assigned | Z-axis cable-shield terminal | shield; Do not use this terminal as a grounding terminal. | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |

#### J5 — C (A/C elsewhere) axis

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| 5V+ | Not assigned | C (A/C elsewhere)-axis common-anode 5 V output | power output; 5 V reference; Do not apply external voltage. | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| PULSE | Not assigned | C (A/C elsewhere)-axis pulse-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| DIR | Not assigned | C (A/C elsewhere)-axis direction-command output | output; Output ≥3 V; source drive specification ≤8 mA | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |
| Shield | Not assigned | C (A/C elsewhere)-axis cable-shield terminal | shield; Do not use this terminal as a grounding terminal. | OPEN | [A18_P15](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=19) |

#### J7 — output control

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| Y1 (S0) | 1 (reference drawing only) | Spindle on/off, inverter FWD function | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y2 (S1) | 2 (reference drawing only) | Speed select 1 | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y3 (S2) | 3 (reference drawing only) | Speed select 2 | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y4 (S3) | 4 (reference drawing only) | Speed select 3 | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y5 (S4) | 5 (reference drawing only) | Alarm-indicator output | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y6 (S5) | 6 (reference drawing only) | Work-indicator output | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y7 (S6) | 7 (reference drawing only) | User-definable output | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| Y8 (S7) | 8 (reference drawing only) | User-definable output | output; Logic low | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |
| GND | 9 (reference drawing only) | Output-bank GND | reference return; No additional electrical rating adopted | OPEN | [A18_P16](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=20), [A18_P24](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=28) |

#### J8 — input control

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| X1:X_se | 1 (reference drawing only) | X-origin sensor input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X2:Y_se | 2 (reference drawing only) | Y-origin sensor input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X3:Z_se | 3 (reference drawing only) | Z-origin sensor input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X4 | 4 (reference drawing only) | A/C-origin sensor input in the table; drawing label conflicts | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X5 | 5 (reference drawing only) | Tool-setting sensor input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X6 | 6 (reference drawing only) | User-definable input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X7 | 7 (reference drawing only) | User-definable input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| X8 | 8 (reference drawing only) | User-definable input | input; Logic low | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| 24V+ | 9 (reference drawing only) | Positive input to the sensor-isolation supply circuit | power input; 10–24 V sensor-supply input in this source | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| GND | 10 (reference drawing only) | Negative input / return of the sensor-isolation supply circuit | power return; No additional electrical rating adopted | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| Shield | 11 (reference drawing only) | Sensor-cable shield terminal | shield; Do not use as the negative terminal of the sensor-isolation supply. | OPEN | [A18_P17](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=21), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |

#### J10 — main power

| Source designation | Reference drawing number | Function | Direction / electrical limits | Route | Source |
|---|---|---|---|---|---|
| 24V+ | 1 (reference drawing only) | Main controller/interface-board supply input | power input; 24 V example only; allowed range unresolved | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |
| GND | 2 (reference drawing only) | Main supply return | power return; No additional electrical rating adopted | OPEN | [A18_P14](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=18), [A18_P23](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-manual.pdf#page=27) |

## Generic stepper-driver drawing marks · image reference only · 2026-09-29

The RichAuto A18 overall-wiring image also repeats a generic stepper-driver block under X, Y, Z and C. Each block visibly names ten terminal marks: GND, 40V+, A+, A−, B+, B−, PUL+, PUL−, DIR+ and DIR−. They are listed individually here, unnumbered, because the image supplies labels but no pin numbers, driver model, mating view or StyleCNC fitment. The 40V+ text is a source label, not a verified permitted operating voltage. A/B phase labels do not identify installed motor coils or phase order. No mark is connected to SmoothieBox or treated as an installed peripheral.

| Image group | Unnumbered terminal mark | Source scope | Machine fit / route |
|---|---|---|---|
| X_driver schematic block | GND | Generic driver reference label; ground/return mapping not established. | Not established on this machine; OPEN |
| X_driver schematic block | 40V+ | Generic driver reference label; voltage capability is not verified. | Not established on this machine; OPEN |
| X_driver schematic block | A+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| X_driver schematic block | A− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| X_driver schematic block | B+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| X_driver schematic block | B− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| X_driver schematic block | PUL+ | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| X_driver schematic block | PUL− | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| X_driver schematic block | DIR+ | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| X_driver schematic block | DIR− | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Y_driver schematic block | GND | Generic driver reference label; ground/return mapping not established. | Not established on this machine; OPEN |
| Y_driver schematic block | 40V+ | Generic driver reference label; voltage capability is not verified. | Not established on this machine; OPEN |
| Y_driver schematic block | A+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Y_driver schematic block | A− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Y_driver schematic block | B+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Y_driver schematic block | B− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Y_driver schematic block | PUL+ | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Y_driver schematic block | PUL− | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Y_driver schematic block | DIR+ | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Y_driver schematic block | DIR− | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Z_driver schematic block | GND | Generic driver reference label; ground/return mapping not established. | Not established on this machine; OPEN |
| Z_driver schematic block | 40V+ | Generic driver reference label; voltage capability is not verified. | Not established on this machine; OPEN |
| Z_driver schematic block | A+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Z_driver schematic block | A− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Z_driver schematic block | B+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Z_driver schematic block | B− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| Z_driver schematic block | PUL+ | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Z_driver schematic block | PUL− | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Z_driver schematic block | DIR+ | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| Z_driver schematic block | DIR− | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| C_driver schematic block | GND | Generic driver reference label; ground/return mapping not established. | Not established on this machine; OPEN |
| C_driver schematic block | 40V+ | Generic driver reference label; voltage capability is not verified. | Not established on this machine; OPEN |
| C_driver schematic block | A+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| C_driver schematic block | A− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| C_driver schematic block | B+ | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| C_driver schematic block | B− | Generic motor-phase terminal label; no installed coil mapping. | Not established on this machine; OPEN |
| C_driver schematic block | PUL+ | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| C_driver schematic block | PUL− | Generic pulse-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| C_driver schematic block | DIR+ | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |
| C_driver schematic block | DIR− | Generic direction-input terminal label; polarity/interface fit unverified. | Not established on this machine; OPEN |

These forty individually represented labels are four schematic repeats, not proof of four fitted driver modules. No route is justified: the source does not identify the installed driver inputs or electrical interface, and controller-output-to-driver replacement wiring has no verified changeover, isolation or endpoint map. They remain OPEN. No dotted guess is drawn.

Source: [A18 overall-wiring image linked from the RichAuto A18 page](https://www.richautocontroller.com/wp-content/uploads/2023/08/richauto-a18-stepping-overall-wiring-1024x1024.jpg). The image is treated as a hosted schematic illustration; its exact publication revision and applicability to the machine are not established.
