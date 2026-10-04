# Maslow4 large-format CNC router

**Wiki evidence status:** Appropedia has a catalogue entry and a dedicated machine article. The initial inventory below uses those wiki pages; an original PCB design reference is appended separately. Neither establishes a verified local installation or a particular fitted controller-board revision.

## Machine and motion system

The dedicated Appropedia article calls Maslow4 a compact, portable, large-format CNC router and the 2023 generation of the Maslow CNC family. It states a working format up to 8 × 4 ft and says the machine can operate from horizontal to nearly vertical (up to 75°). Four steel-reinforced belts constrain the router's position against four rigid anchor points; those points need not form a precisely spaced rectangle.

The router is carried by a sled. Four articulated arms pay belt in or out to position the sled; two Z-axis stepper motors move the router vertically. The article describes belt-length measurement using magnetic encoders and automatic calibration from measurements taken while the belts are tensioned.

## Controls and operation

The wiki says the machine creates its own Wi-Fi network or can join a local network, then exposes a browser-based control interface. It also identifies Bluetooth and USB-C connections. The WebUI loads standard G-code, reports machine status, runs calibration, and displays job progress. The wiki describes the firmware as a Maslow-specific branch of FluidNC (formerly Grbl_Esp32).

The article describes automatic calibration, browser control, and G-code operation, but does not give a safe step-by-step commissioning or cutting procedure. This dossier therefore does not turn the design description into a complete operating instruction.

## Electronics and interfaces

The wiki describes a custom five-axis control board with an ESP32-S3, four DC servo motors and magnetic encoders, two Z-axis stepper motors, onboard SD storage, and a cooling fan. It says motor-driver boards sit between the controller and the DC servos. These functional descriptions do not identify connector pins or establish cable-level assignments.

## Visuals and pinouts

The Appropedia article presents machine, arm, and controller-board images with explanatory captions. The visible captions identify the four arms, router, sled, Z steppers, belt spool, geared DC motor, encoder PCB, and belt end. No readable electrical schematic or connector contact map is supplied in the inspected article; no pins are inferred.

## Sources

- [Tolocar/Maslow4 — Appropedia wiki](https://www.appropedia.org/Tolocar/Maslow4_%28Open_Source_CNC_router%29) — design overview, kinematics, electronics, firmware, and assembly.
- [Tolocar/Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue cross-reference and 8 × 4 ft description.

**Unknowns for any fitted machine:** controller PCB revision, harness and connector-face orientation, servo-driver part numbers, specific router installation, machine calibration results, and cutting parameters for a given material/tool.

## Original Maslow4 PCB design reference — separate from any fitted board

Checked 2026-09-26 against the creator's [five-motor control-board schematic Rev 1.0, dated 2023-08-13](https://github.com/MaslowCNC/Boards/blob/04e8d4e3e2f5a23d3ec3cd393bd7e60005cba998/Schematic_Five-Motor-Control-Board.svg) and [encoder-board schematic](https://github.com/MaslowCNC/Boards/blob/04e8d4e3e2f5a23d3ec3cd393bd7e60005cba998/Schematic_Encoder-Board.svg). Source commit `04e8d4e3e2f5a23d3ec3cd393bd7e60005cba998`; downloaded SVG SHA-256 `5b831d5025c158a81ec70acf5add4dbc5fff2faa94bd0effd36ed8adf0a7fc61` and `1f36f565ee59607164de3f89b8e0da9f9806b9357e69c3edd0347ecf8671b812`. These are original **PCB schematic numbers and net names**, not proof of the board revision, cable orientation, router wiring, or enclosure installed on any particular Maslow4.

| Source connector | Printed contact assignments | Boundary |
|---|---|---|
| CN2 top-left belt motor; CN6 bottom-left; CN7 top-right; CN8 bottom-right | Each XH-2AW: 1 = its `OUT2`, 2 = its `OUT1` | Motor-driver outputs, not step/direction inputs. Motor polarity and fitted cables are unverified. |
| U8 Z channel 1; U11 Z channel 2 | Each four-position motor header: 1 = `A−`, 2 = `A+`, 3 = `B+`, 4 = `B−` for its numbered channel | Former-controller stepper winding outputs, not SmoothieBox control inputs. |
| CN3, CN1, CN4, CN10 encoder headers | Each XH-5: 1 = `3V3`, 2 = `SDA0/1/2/3`, 3 = `SCL0/1/2/3`, 4 = `GND`, 5 = `GND` respectively | Main-board schematic pin assignment. The source does not establish which physical arm plugs into which channel. |
| U13 Aux | XH-4: 1 = `GND`, 2 = `3V3`, 3 = `Aux1`, 4 = `Aux2` | Board interface; fitted accessory and signal ratings unverified. |
| U4 Serial | XH-4: 1 = `GND`, 2 = `3V3`, 3 = serial `RX`, 4 = serial `TX` | Board interface; external protocol and fitted cable unverified. |
| CN9 cooling fan | Two positions: 1 = `VCC`, 2 = transistor-switched return through Q1 | Fan output; source does not establish an interchangeable SmoothieBox output rating. |
| CN5 power input | XT60 physical poles: 1 = `GND/negative`, 2 = `VCC/positive` | The schematic symbol includes unused CAD pad numbers 3/4; these are not extra physical cavities. Supply voltage/current and fitted wiring unverified. |
| Encoder-board U2 | XH-5: 1 = `3V3`, 2 = `SDA`, 3 = `SCL`, 4 = `GND`, 5 = unconnected in this schematic | Separate encoder-board design reference. Do not silently equate its open position 5 with the main board's GND position 5. |

The 2023 control-board design exposes 48 numbered physical positions across the above main-board connectors; the separate encoder-board design adds five positions. The Appropedia description reports four encoder-equipped belt arms, but the exact installed encoder-board revision, cable assembly, and connector-channel mapping are not proven. The carried router is a separate mains-powered appliance in the design overview; this source supplies no contact-level router control or power connection. Every design-reference contact remains **OPEN** in the SmoothieBox conversion drawing until a machine-specific electrical and mechanical match is verified. No guess is drawn as a solid connection.
