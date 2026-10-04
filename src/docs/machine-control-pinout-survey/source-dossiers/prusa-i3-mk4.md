# Prusa i3 MK4

Research status: MakeICT wiki lists an operational machine, but its wiki page says its usage information is “coming soon.” Captured 2026-09-23.

## Wiki-recorded configuration

The MakeICT FabLab inventory lists a Prusa3D i3 MK4 as operational. Its model page records a 250 × 210 × 220 mm build volume, 1.75 mm filament, 0.4 mm nozzle, maximum nozzle temperature 300 °C, and maximum bed temperature 110 °C. The page uses a stock Prusa i3 MK4 image.

## Use information

No model-specific print workflow was present in the inspected page; it explicitly says the printer information is still forthcoming. The inventory says the FabLab uses peer authorization for filament printers. No further use guidance is copied from non-wiki sources.

## Connections and pinout

No controller, USB/network interface, stepper, heater, sensor, or power pinout is published on the wiki page.

## Visual evidence and source

The page includes a stock image, which does not prove the exact installed machine or revision. [MakeICT Prusa i3 MK4 wiki page](https://wiki.makeict.org/wiki/Prusa_i3_MK4) · [FabLab inventory](https://wiki.makeict.org/wiki/FabLab_Area).

## Evidence limits

The page was last revised in 2024 and contains no startup workflow, controller revision, machine photo, or revision-specific electrical evidence.


## Manufacturer board-reference addendum — 2026-09-23

Prusa's **MK4-only** accessory-connector article gives the following xBuddy and xLCD header tables. This is a manufacturer reference for the MK4 board family; it does not identify the board revision, accessories, or wiring on the MakeICT unit. Do not transfer this map to the separate MK4S profile. Signal limits below are copied from the manufacturer table.

| Header | Contact | Function / GPIO | Limit stated by Prusa |
|---|---:|---|---|
| J29 ACCELEROMETER | 1 | SPI2 CS / PA10, open-drain output | 3.3 V, 5 mA max |
| J29 ACCELEROMETER | 2 | SPI2 SCL / PB10, input/output | 5 V, 5 mA max |
| J29 ACCELEROMETER | 3 | SPI2 SDI / PC3, input/output | 5 V, 5 mA max |
| J29 ACCELEROMETER | 4 | SPI2 SDO / PC2, input/output | 5 V, 5 mA max |
| J29 ACCELEROMETER | 5 | 3V3 supply | 50 mA max |
| J29 ACCELEROMETER | 6 | GND | — |
| J23 I2C | 1 | I2C2 SCL / PF1, input/output | 5 V, 5 mA max |
| J23 I2C | 2 | I2C2 SDA / PF0, input/output | 5 V, 5 mA max |
| J23 I2C | 3 | 3V3 supply | 50 mA max |
| J23 I2C | 4 | GND | — |
| J15 A_TEMP | 1 | THERM3 / PF5, analogue input | 3.3 V max |
| J15 A_TEMP | 2 | GND | — |
| J6 MMU | 1 | USART6 TX / PC6, input/output | 5 V, 5 mA max |
| J6 MMU | 2 | RS485− | 3.3 V, 250 mA max |
| J6 MMU | 3 | USART6 RX / PC7, input/output | 5 V, 5 mA max |
| J6 MMU | 4 | RS485+ | 3.3 V, 250 mA max |
| J6 MMU | 5 | Switchable MMU 5 V / PG2 | 5 V, 0.5 A max |
| J6 MMU | 6 | MMU RESET / PG8, open-drain output | 5 V, 5 mA max |
| J6 MMU | 7 | GND | — |
| J6 MMU | 8 | nAC FAULT output | 3.3 V, 5 mA max |
| J6 MMU | 9 | GND | — |
| J6 MMU | 10 | Switchable MMU 24 V / PG2 | 24 V, 3.6 A max |
| J6 MMU | 11 | GND | — |
| J6 MMU | 12 | Switchable MMU 24 V / PG2 | 24 V, 3.6 A max |
| xLCD P11 | 1 | 3.3 V supply | 3.3 V, 50 mA max |
| xLCD P11 | 2 | LCD 1-wire / PD11, open-drain output | 5 V, 18.5 mA max |
| xLCD P11 | 3 | I2C3 SCL / PA8, input/output | 3.3 V, 5 mA max |
| xLCD P11 | 4 | I2C3 SDA / PC9, input/output | 3.3 V, 5 mA max |
| xLCD P11 | 5 | GND | — |
| xLCD P11 | 6 | 5 V supply | 5 V, 100 mA max |

Source: [Prusa Knowledge Base — Accessory connectors (MK4)](https://help.prusa3d.com/article/accessory-connectors-mk4_622345). Prusa warns that exceeding the stated current or voltage can permanently damage the board. The article does not supply a mating-face orientation; this table is contact-number/function evidence, not an installation-specific cable map.
