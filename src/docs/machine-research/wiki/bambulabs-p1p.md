# Bambu Labs P1P 3D printer

**Evidence depth:** Exact-model manufacturer setup/specification guide plus P1 Series cable listings, and an owner-hosted shop page for local machine identity. The guide and part pages document interface names and some group sizes; they do not provide the fitted unit's full electrical pinout.

## Identity

Artisans Asylum's wiki lists a BambuLabs P1P, model P1P, in its Digifab shop. The serial is recorded as unknown.

## Wiki evidence

- [Artisans Asylum P1P page](https://wiki.artisansasylum.com/wiki/3D_Printer_Bambu_P1P): model, shop location and mechanical description.
- [Artisans Asylum FDM printer category](https://wiki.artisansasylum.com/wiki/Category%3A3D_Printers_-_Extrusion): common operating and safety rules.

## Machine details and operation

The wiki describes a 200 × 200 mm stage with Z motion supported by three jack screws, a belt-driven H-pattern X/Y gantry and an enclosed 1.75 mm extruder without a proximity sensor. Its category requires training and tool testing. It warns that nozzle and bed are hot, moving mechanisms must not be reached into during operation, and the machine should cool after power-off before cleaning.

## Pinout and visuals

The page identifies its “Online Setup Guide” but does not reproduce a pinout. No connector-level assignments are known from this wiki evidence. The source page provides the machine visual; it is not a wiring diagram.

## Manufacturer guide facts

The 16-page English Bambu Lab P1P Quick Start Guide (2023 issue; downloaded PDF SHA-256 `fe2dc11e65bc2f36d4e621fa7d0dc6e49a61691a878f929ebd12b46c11d737ee`) was visually inspected at pp. 3, 13 and 14.

Page 3 names the Tool Head, SD Card, Screen, rear USB Charging Port, Bambu Bus Port 4-Pin, and Power Socket. It is a component/location illustration, not a contact map. Page 13 identifies closed-loop control for the part-cooling and hot-end fans, marks the auxiliary part-cooling fan optional, and lists a low-rate 1280 × 720 / 0.5 fps chamber monitoring camera, filament run-out sensor, optional AMS filament odometry, and power-loss recovery. Page 14 lists 100–240 VAC / 50–60 Hz input, maximum power 1000 W at 220 V and 350 W at 110 V, USB output 5 V / 1.5 A, a 2.7-inch 192 × 64 display, Wi-Fi/Bluetooth/Bambu-Bus connectivity, Micro SD storage, and a Dual-Core Cortex M4 motion controller.

These are model/interface context only. The guide supplies no pin-level schedule for USB, SD, screen, Bambu Bus, mains, fans, sensors, motion-control connectors, endstops, motors, or heater. It does not identify the fitted board/cable revision in the Artisans Asylum unit.

Supplemental Bambu Lab P1-series manufacturer documentation describes a Toolhead Cable between the toolhead headboard and motion-control mainboard for power and data, with 6-pin 1.25 mm and 12-pin 0.8 mm BTB plug formats. The P1P cable has a rubber plug; the P1S variant without that plug accommodates the cable chain and is also listed as compatible with P1P when the cable chain is added. The manufacturer also documents a double-ended 6-pin 1.25 mm Heatbed Signal Cable (555 ± 5 mm) for hotbed temperature measurement and leveling. Neither product page assigns individual contacts. These family cable descriptions do not verify the revision installed on the Artisans Asylum machine.

The four described cable ends are shown as editorial position counts only: toolhead 6 + 12, heatbed 6 + 6. The rear guide-labelled four-pin Bambu Bus port contributes four more positions. All 34 positions remain OPEN; these counts do not imply pin numbering or functions. No machine-side stepper-driver, motor-coil, endstop, bed-heater, electrical-level, or safety wiring path is established, so the current diagram draws no route to Smoothieboard V2.

| Cable group | Source-documented endpoints/function | Unresolved |
|---|---|---|
| P1 Series Toolhead Cable | Toolhead headboard ↔ motion-control mainboard; power and data | Individual contact functions, orientation and installed local variant |
| Heatbed Signal Cable | Hotbed sensor cable group for temperature measurement and leveling | Individual contact functions, polarity/orientation and installed revision |

## Supplemental manufacturer sources

- [Bambu Lab P1P Quick Start Guide](https://cdn1.bambulab.com/documentation/quick-start-e254168f69145/P1P/English%20version-Quick%20Start%20Guide%20for%20P1P.pdf) — pp. 3, 13–14; exact-model named interfaces and specifications.
- [P1 Series Toolhead Cable — Bambu Lab](https://us.store.bambulab.com/products/p1-series-toolhead-cable) — cable endpoints, power/data role, two plug formats, and P1P/P1S plug difference.
- [Heatbed Signal Cable — Bambu Lab](https://asia.store.bambulab.com/en/products/heatbed-signal-cable) — cable role, plug format and length; no per-contact map.
