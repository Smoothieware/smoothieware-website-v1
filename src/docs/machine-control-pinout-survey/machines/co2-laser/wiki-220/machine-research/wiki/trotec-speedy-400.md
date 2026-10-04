# Trotec Speedy 400

Research capture: 2026-09-29. Status: Happylab wiki and Trotec Speedy 400 family manual cross-checked; installed variant and physical contact schedules remain unverified.

## Identity, use and deduplication

Happylab Speedy 400 installation. The wiki describes CO₂ operation; installed tube power and controller revision are unknown. The machine photo bears a “flexx” marking, while the local wiki describes CO₂ operation; exact fitted laser-source variant is unresolved. Checked against K40, LightObject, Ortur, Sculpfun and TwoTrees laser entries; Speedy 400 is a different commercial machine. A shared laser function is not an alias.

## Wiki-supported machine facts

Wiki states a 1000 × 610 × 305 mm envelope and describes cutting/engraving wood, acrylic, cardboard, leather and textiles. The stated Z dimension is not independently validated stock clearance. [Community machine page](https://wiki.happylab.at/w/Speedy400).

## Control, setup and use

RUBY workflow accepts vector formats including DXF, EPS, SVG and CDR and raster JPEG/PNG. The page uses red for cutting and black for engraving, describes homing with the lid closed and focusing, and requires training and continuous attendance. Material settings need a source-supported test for the actual stock. [Community machine page](https://wiki.happylab.at/w/Speedy400).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

## Visual evidence and transcription

[Wiki source page](https://wiki.happylab.at/w/Speedy400) · [Original wiki-hosted media](https://wiki.happylab.at/images/5/57/Speedy_400_.jpg) · [Retained original](images/speedy400.jpg).

Photo reads “Speedy 400” and “trotec”; red/white enclosure, transparent blue lid, red mushroom at the upper right. A “flexx” marking is visible on the crossbar. That marking alone does not confirm a fitted or operational fiber source.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Prose describes CO₂; the photographed flexx marking leaves the exact laser-source variant unresolved. Do not infer fiber power, dual-source capability or interlock circuitry.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.


## Manufacturer interface references

Trotec’s [Speedy 400 Operating Manual 8070 (2022)](https://www.troteclaser.com/static/pdf/speedy-400/8070_Speedy_400_Operating_manual_EN.pdf) identifies two control-panel USB ports (charging and data), rear LAN, an optional Wi-Fi dongle receptacle, a rear I/O interface, a service plug connector, a rotary-attachment connection, and three exhaust-tube interfaces (working area, working table, rear panel). The manual’s named interfaces are family references only; they do not establish these options or the same manual revision on the Happylab unit.

| Peripheral / interface | Source-supported detail | Individual physical pin positions | SmoothieBox route |
|---|---|---|---|
| Control-panel USB charging port | Manufacturer says two control-panel USB ports; this one is the charging port (max 2 A). | Not supplied; USB connector type and cavity contacts unspecified. | OPEN |
| Control-panel USB data port | Manufacturer says this port supports USB storage and gives 500 mA. | Not supplied; USB connector type and cavity contacts unspecified. | OPEN |
| Rear LAN | Manufacturer names rear LAN and recommends a 100 Mbit local network. | Not supplied; manual text does not identify a cavity map. | OPEN |
| Rear Wi-Fi dongle receptacle | Optional interface named in the rear view. | Not supplied; fitted option unknown. | OPEN |
| Rear I/O interface | Manufacturer names an I/O interface. | Not supplied; form, count and assignments unknown. It is not presumed to be DB25. | OPEN |
| Rear service plug | Named in the rear view. | Not supplied; service pinout unavailable. | OPEN |
| Rotary attachment connection | Optional attachment connector named by the manual. | Not supplied; fitment unknown. | OPEN |
| Exhaust tube interfaces | Three named duct locations; mechanical hose connections. | Not electrical pin groups. | Not applicable |

The Happylab wiki describes its Speedy 400 as CO₂ and RUBY-operated, but the retained photo’s “flexx” marking leaves the local laser-source variant unresolved. Trotec Manual 8070 covers the broader Speedy 400 family. Its panel/network/controller interface names do not provide a physical connector pin schedule. **No machine contacts are paired with SmoothieBox.** Main power, internal laser supplies, safety interlocks and any guessed external I/O pinout are excluded.
