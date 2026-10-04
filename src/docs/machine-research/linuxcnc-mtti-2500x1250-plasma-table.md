# MTTI’s 2500 × 1250 mm LinuxCNC plasma table and Arduino THC

**Machine identity:** MTTI’s individual shop-built plasma cutting table, reported cutting area 2500 × 1250 mm. The owner says it was built for business use and had run in a limited way under Mach3 before a LinuxCNC/QTPlasmaC upgrade. The thread does not provide a commercial model or a distinct project name.

**Novelty check:** On 2026-09-23, repository Markdown/HTML, the local atlas, and the separate wiki dossiers were searched for `MTTI`, `MTernisien`, `2500x1250`, and the forum thread title. No matching per-machine dossier was found. The table is a unique owner build as presented in the post, but an unnamed machine elsewhere cannot be ruled out by text search.

**Operating state:** The owner says the table had given him satisfaction over roughly three years under Mach3. In February 2025 he reported testing the DIY torch-height-control (THC) signal with QTPlasmaC and shared a first produced part. He also said axis following errors still required tuning, the cross laser pointer still needed connecting to a controller output, and the electrical cabinet needed restoration. Thus cutting/THC tests are reported, while the retrofit was still being refined.

## Owner-reported machine and controls

| Area | Reported details | Gaps |
|---|---|---|
| Working envelope | Owner states 2500 × 1250 mm. | No measured axis travel, frame design, rail/rack arrangement, or work support dimensions are given. |
| Host and display | Hystou industrial PC and 17-inch 4:3 industrial touchscreen. | Exact PC model, CPU, OS, and display interface are not named. |
| Motion/control board | Pico Systems USC board; four StepperOnline DM860T V3.0 drives; four stepper motors with encoders. | Axis-to-drive assignment, encoder use, USC connector/pin mapping, drive switch settings, motor wiring, and IO allocation are absent. |
| Mechanics | X and Z use 5 mm-pitch ball screws; Y is belt driven. | Screw/stepper ratios and homing/limit sensor details are not stated. |
| Plasma source | Hypertherm Powermax 105 SYNC. | Torch interface pins, CNC cable option, Arc OK wiring, cut parameters, and grounding arrangement are not mapped. |
| Control software | Migration from Mach3 to LinuxCNC with QtPlasmaC; owner describes Z probing and torch-height control. | Software version, full machine configuration, homing sequence, and validated parameter file are not included in the post. |
| Alignment aid | Owner added a cross-shaped laser pointer, initially powered by a 9 V battery while awaiting connection to a USC output. | The post says that connecting it remained a task; do not assume it was already switched by the controller. |

## Arc-voltage measurement path described in the post and attached files

The owner’s forum post describes this path: Powermax voltage divider set to 20:1 → Phoenix Contact isolator/converter configured for 0–20 V input and 0–5 V output → Arduino UNO analog input → USB serial → Python HAL component → QtPlasmaC. The post says Arc OK comes from the Powermax and identifies QtPlasmaC Mode 1. It describes the Arduino stream as smoothed and approximately every 100 ms.

I retrieved the owner-posted 2 KB ZIP attachment from the forum after the embedded browser fetch reported a cache miss. The ZIP contains an Arduino `.ino` file and a Python LinuxCNC component script. It was inspected as text without execution. The code gives these implementation details:

- The Arduino reads analog input A0, uses `analogReference(DEFAULT)`, and sends integer readings over 115200 baud.
- Its source sets `conversionFactor = 1000.0 / 1023.0` and smooths each reading as 10% of the previous value plus 90% of the new value before printing it; the Python side parses that integer as a float and assigns it directly to the HAL output pin without a further scale factor.
- The Python script opens `/dev/ttyACM0` at 115200 baud, creates HAL component `arduino_voltage`, and exports a floating-point output pin named `voltage`.
- The attachment’s Arduino file sets a 200 ms update interval, not 100 ms as described in the forum prose. Its comment says a prior faster update saturated HAL and caused choppy processing.
- The forum prose says the divider is 20:1, while the attachment’s Arduino comment calls its conversion factor adapted for 50:1 plus the 0–20 V-to-0–5 V conditioner. This unresolved discrepancy is recorded, not reconciled by guesswork.
- The Python script uses `voltage` as the raw HAL signal name; the forum post does not show the exact HAL net connecting it into QtPlasmaC.

These details document the owner’s historical test implementation only. The scaling discrepancy is material: do not use the posted code or prose alone to choose divider/conditioner settings, wire an arc-voltage circuit, or commission THC. Verify the actual divider, conditioner range, isolation rating, calibration, HAL scaling, and plasma-source manual before any use.

## Forum visuals and source files

The post describes test photos and a first produced part, but the retrieved forum text did not expose image URLs for pixel review; the images have not been visually inspected here. The ZIP is preserved as a temporary research artifact at `/tmp/THC_HAL_MTTI_v0.3.zip`, SHA-256 `285f8ae8e214c3c2dc562dd7a6a63594ff7dcb3382e81f3445064a7feb4182e9`. The archive file list and exact code bytes are not copied into this repository dossier; their details above are paraphrased from inspection. Source remains linked at the [original LinuxCNC forum thread](https://forum.linuxcnc.org/plasma-laser/55304-migration-from-mach3-to-qtplasmac-diy-thc-with-arduino).

## Pinout and use limits

The Arduino analog channel (`A0`) and the locally generated HAL component/pin name are explicit in the attached source; this is not a Mesa/USC terminal pinout. No USC connector assignments, stepper/encoder wiring map, home/limit channels, E-stop chain, torch-enable path, Powermax CNC interface pin map, or wiring diagram are given in the inspected thread. The owner’s statement that the test produced a part does not establish a safe or calibrated installation. Keep this dossier as a source trail and troubleshooting lead, not an operational wiring guide.

## Source

1. LinuxCNC Forum, MTTI, [“Migration from Mach3 to QtPlasmaC + DIY THC with Arduino”](https://forum.linuxcnc.org/plasma-laser/55304-migration-from-mach3-to-qtplasmac-diy-thc-with-arduino), owner posts dated 12–13 February 2025. The opening post supplies table size, system components, voltage-measurement description, first THC tests/part, and unfinished work. The owner attachment `THC_HAL_MTTI_v0.3.zip` supplied the Arduino and Python implementation details above. Replies are not used as facts about the table.
