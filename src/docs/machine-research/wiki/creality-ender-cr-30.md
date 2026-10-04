# Creality Ender CR-30 PrintMill

## Identity

Artisans Asylum records this belt-style printer as Creality Ender CR-30, also called PrintMill.

## Wiki evidence

- [Artisans Asylum Ender CR-30 page](https://wiki.artisansasylum.com/wiki/3D_Printer_Creality_Ender_Cr-30): exact model, belt architecture and motion description.
- [Artisans Asylum FDM printer category](https://wiki.artisansasylum.com/wiki/Category%3A3D_Printers_-_Extrusion): shared thermal and moving-parts precautions.

## Machine details and operation

Unlike a fixed build plate, the source says this machine advances a moving fabric belt as its Y surface. It describes a 200 mm width and a gantry with a (Z-Y)/X H-pattern belt arrangement. The machine page links firmware/slicer resources and safety guidance; the category requires training and warns about hot nozzle/bed surfaces and moving mechanisms.

## Pinout and visuals

No numbered electrical connector map was found in the wiki evidence reviewed. Source imagery identifies the belt-printer layout but does not prove controller pin assignments.

## Wiring source update — 2026-09-27

The source dossier above is the Artisans Asylum wiki record. The following separate upstream firmware configuration gives additional, revision-scoped electrical evidence; it does not replace the wiki's machine identity or establish the installed CR-30 revision.

- [Klipper upstream CR-30 2021 sample configuration](https://github.com/Klipper3d/klipper/blob/ce7002bedf37e938bb483572949f3703ac6476cb/config/printer-creality-cr30-2021.cfg), commit `ce7002bedf37e938bb483572949f3703ac6476cb`, retrieved 2026-09-27. SHA-256 of the exact configuration file: `c62e69383975e264d91b8916630efeacd3537a5c2aebd862906c83afb8f7b89b`.
- Its introduction names an STM32F103 configuration and an optional direct serial connection on USART3 PB11/PB10, broken out on the 10-position IDC cable used for the LCD module. That optional setup gives cable positions 3=Tx, 4=Rx, 9=GND, 10=VCC. The voltage of VCC, functions of the other six positions, connector orientation, physical board revision, and installed firmware are not established here.
- These are source-numbered cable positions for one optional firmware configuration, not a full CR-30 external connector pinout. No route from SmoothieBox UART contacts to this cable is established. No DB25 connection is identified.

### Controller configuration nets are not machine connector contacts

The same configuration maps firmware names to STM32 MCU pads. This is useful controller context, not a physical CR-30 plug or a direct SmoothieBox termination schedule.

| Firmware function | Configured MCU pin | Scope |
|---|---|---|
| X step / direction / enable / endstop | PC2 / !PB9 / !PC3 / ^!PA3 | 2021 sample controller configuration |
| Y step / direction / enable / endstop | PB8 / !PB7 / !PC3 / ^!PA7 | 2021 sample controller configuration |
| Z step / direction / enable / endstop | PB6 / !PB5 / !PC3 / ^!PA5 | 2021 sample controller configuration |
| Extruder step / direction / enable | PB4 / !PB3 / !PC3 | 2021 sample controller configuration |
| Extruder heater / temperature sensor | PA0 / PC5 | 2021 sample controller configuration |
| Bed heater / temperature sensor | PA1 / PC4 | 2021 sample controller configuration |
| Filament switch sensor | ^!PA6 | 2021 sample controller configuration |
| Fans 1 / 2 / 3 | PA2 / PC0 / PC1 | 2021 sample controller configuration |
| LED output | PC14 | 2021 sample controller configuration |
| Display CS / clock / data / encoder A+B / click | PB12 / PB13 / PB15 / PB14+PB10 / ^!PB2 | 2021 sample controller configuration |
| Beeper | PC6 | 2021 sample controller configuration |

`!` and `^` are Klipper inversion/pull-up modifiers, not separate connector positions. The mapping is specific to that sample configuration; it does not identify an external board header or prove the machine contains this controller revision.

### Contact schedule

| LCD cable position | Optional direct-serial setup function | Machine-side status |
|---:|---|---|
| 1 | Not specified | Function OPEN |
| 2 | Not specified | Function OPEN |
| 3 | USART3 Tx | Source-mapped cable position; SmoothieBox route OPEN |
| 4 | USART3 Rx | Source-mapped cable position; SmoothieBox route OPEN |
| 5 | Not specified | Function OPEN |
| 6 | Not specified | Function OPEN |
| 7 | Not specified | Function OPEN |
| 8 | Not specified | Function OPEN |
| 9 | GND | Source-mapped cable position; SmoothieBox route OPEN |
| 10 | VCC; voltage unspecified by this comment | Source-mapped cable position; SmoothieBox route OPEN |

The Creality product manual's visible front-page illustration names machine components such as X motor, Y motor, Z belt motor, X-axis limit switch, screen, and power-cable connection. It provides identity evidence, not connector cavities or conductor assignments. The publisher-hosted support page does not presently expose a connector-level CR-30 wiring chart in its captured download listing.
