# Bungard CCD/MTC CNC PCB mill

**Wiki evidence status:** model-specific, detailed operating dossier. The Bristol Hackspace page identifies the machine as a Bungard CCD/MTC CNC modified with a replacement controller, RFID interlock, emergency stop, height mapping, and extraction. The installed controller board and its revision are not named in the captured wiki evidence.

## Identity and mechanics

The wiki gives a 325 × 495 × 38 mm working envelope, a 700 × 800 × 300 mm overall size, manual tool changes, and a spindle range of 3,000–63,000 RPM. It describes two-phase stepper motors on all three axes, software-selectable 1, 1/2, and 1/4 mil step settings, and a stated precision of ±1 step. The page separately claims 20 ppm position accuracy over the work area; no measurement method or controller revision is supplied.

The bed is precision aluminium and can hold boards with double-sided tape. Spanning clamps or reference pins are noted as possible with additional accessories. A 30-degree V-bit with a 0.2 mm tip and 3.175 mm shank is recommended for isolation work; a 1.6 mm end mill is listed for outlines. The archived operator reports reasonable results with a 0.7 mm end mill.

## Controller, connections, and pinout

The machine accepts G-code. The current wiki identifies Universal G-code Sender and bCNC as tested senders, a serial connection that commonly appears as COM5 or COM6, and 115200 baud. Homing is initiated with `$H`. It also documents an earlier Candle setup and FlatCAM workflow; those archived notes should not be assumed to describe the current controller's exact firmware or wiring.

The wiki links two controller workbooks: [Control Box Connections](https://wiki.bristolhackspace.org/_media/equipment/ccd_control_box_connections.ods) and [Control Box Connections (Alternative testing)](https://wiki.bristolhackspace.org/_media/equipment/pcb_cnc_pinout.ods). Both direct workbook links returned HTTP 404 when rechecked on 2026-09-26; their contents were not recovered. **No connector-to-signal pin table is transcribed here.** Do not infer motor, limit, probe, spindle, or E-stop terminals from the control software or from the machine's axis count.

The official Bungard [CCD manual](https://www.bungard.de/images/downloads/anleitungen/ccd_manual_e.pdf) adds a factory-family harness fact: its MTC/ATC setup instructions call for **two 15-pin cables** from the controller to the rear of the mechanics and explicitly warn that the two cables cannot be interchanged (PDF p. 16/37). The adjacent steps separately mention a spindle cable between controller and machine and USB between controller and PC; they do not assign connector contacts to signals. No 25-pin Sub-D connector is identified in the manufacturer's setup text. Because Bristol's machine has a replacement controller, this factory harness does not establish current local controller wiring or prove which variant matches its mechanics.

### Factory harness positions for the reference diagram

The manufacturer PDF captured on 2026-09-26 is `/tmp/atlas-bungard-ccd-manual.pdf`, SHA-256 `f5ceb9b67df249acf905611deac0279b963548ba95185e7b49213e851bc8f91d` (37 pages; file creation metadata 2026-08-13). Its printed/PDF p. 16 photograph labels the two mechanics connections **D-Sub-15 Signale** and **D-Sub-15 Motorstrom**. The first is the factory **signals** cable and the second the factory **motor-power** cable. This supports two distinct 15-position reference peripherals, with marks 1–15 on each, but supplies no pin-to-signal or pin-to-winding assignments, connector gender, mating-face orientation, or current Bristol replacement-controller mapping. Every contact remains OPEN. The graph's earlier “factory cable A/B” names were arbitrary unnumbered placeholders for these two factory cables; replacing those two placeholders with the manual's signal and motor-power names does **not** assert that its A was the signal cable or B the motor cable in a particular physical harness.

The Bristol wiki itself reports a replacement controller, emergency-stop button, RFID lockout, height mapping and dust extraction. These are distinct current local peripherals or functions, but neither the wiki page nor the unavailable connection spreadsheets establish their individual contact pins or safe relationship to a SmoothieBox. Do not transfer Bungard's factory cover-switch dongle or vacuum switching rating to the modified installation. The factory spindle cable and USB host link remain separate from the two D-sub cables.

## Operating outline from the wiki

For PCB isolation, the documented workflow is to prepare Gerber geometry in FlatCAM, export G-code, connect with bCNC or Universal G-code Sender at 115200 baud, home all axes with `$H`, set the XY origin by jogging, and run the toolpath. The page recommends height mapping to compensate for board non-flatness and gives sample isolation settings of 120 mm/min XY, 60 mm/min Z, 30,000 RPM, and −0.1 mm cut depth. It advises increasing PCB trace widths and clearances, with 0.5 mm and 0.4 mm respectively cited as workable minimums.

For double-sided boards the wiki describes 2 mm brass alignment pins and explicitly warns against locating an alignment hole at machine origin because the toolhead may crash on the second side. Treat these as local operating notes, not a universal setup recipe; induction is required.

## Safety and visual evidence

The page requires the dust shroud and extraction system during milling, close supervision, no loose clothing or jewellery, and use of the RFID lockout. It names a Numatic Henry vacuum with HEPA filter and an emergency stop. The wiki's textual diagram caption identifies three pictured parts: the Z-axis locking bolt, the 2.5-axis skirt, and the spindle-release bolt. In 2.5D mode the spring-loaded skirt sets cut depth from tool protrusion; the locking bolt disables that movement for 3D operation. This is a mechanical orientation description, not an electrical wiring diagram.

## Sources

- [PCB Mill — Bungard CCD/MTC CNC](https://wiki.bristolhackspace.org/equipment/electronics/pcbmill) — identity, dimensions, controller workflow, process settings, archived mechanical notes, safety, and linked connection spreadsheets.
- [Electronics Room inventory](https://wiki.bristolhackspace.org/equipment/electronics/home) — corroborates the machine's place in the current equipment list.
- [CCD Manual — Bungard Elektronik](https://www.bungard.de/images/downloads/anleitungen/ccd_manual_e.pdf) — MTC/ATC setup states two non-interchangeable 15-pin machine/controller cables; no individual contact map.

**Unknowns:** controller make/model and revision; actual axis, limit-switch, probe, spindle, and safety-terminal pinouts; current software configuration; whether every archived 2.5D instruction remains current.
