# FarmBot CNC farming machine

**Wiki evidence status:** Appropedia identifies a built CNC farming machine and describes its general function and control architecture. It does not identify a particular Genesis revision or installed unit. The three official UTM maps below are revision-scoped manufacturer references; none establishes the Appropedia machine's fitted wiring.

## Machine and work

The Appropedia article describes open-source CNC equipment for automated sowing, watering, weeding, and monitoring soil and pests. A modular toolhead moves on a Cartesian frame; named tools include a seeder, soil sensor, and weeder. The article also mentions computer-vision support.

## Control system and use

The article describes FarmBot OS on a Raspberry Pi with a Farmduino microcontroller and browser-based job programming. It does not provide an installed kit generation, controller revision, or a local wiring procedure.

## Revision-scoped UTM contact maps

These are contact schedules, not mating-face drawings. Letter position and wire color are transcribed from each revision's official source. The table's named functions belong to that cited revision; they are not SmoothieBox wiring instructions. All SmoothieBox routes remain OPEN.

### Genesis v1.5

| UTM position | Wire color | Published role in v1.5 |
|---|---|---|
| A | Red | +5 V soil-sensor supply |
| B | Yellow | Ground (0 V) |
| C | Green | D63 digital input for tool verification |
| D | Black | D59/A5 analog input for soil sensing |
| E | White | D48, “Anything you want” (configurable tool function) |
| F | Brown | “Your choice” (no fixed function in this revision) |
| G | Blue | “Your choice” (no fixed function in this revision) |
| H | Grey | “Your choice” (no fixed function in this revision) |
| I | Orange | “Your choice” (no fixed function in this revision) |
| J | Purple | “Your choice” (no fixed function in this revision) |
| K | Pink | “Your choice” (no fixed function in this revision) |
| L | Cyan | “Your choice” (no fixed function in this revision) |

### Genesis v1.7 and v1.8

The official v1.7 map and the independently published v1.8 map list the following roles. Their matching tables do not prove that a local or Appropedia machine uses either revision.

| UTM position | Wire color | Published role in v1.7 and independently repeated in v1.8 |
|---|---|---|
| A | Red | +5 V soil-sensor power |
| B | Yellow | GND (0 V) |
| C | Green | D63 digital input for tool verification |
| D | Black | D59/A5 analog input for soil sensing |
| E | White | BDC2 rotary-tool motor output; DRV8876 switches GND or 24 V, so polarity is conditional |
| F | Brown | Unassigned in the published table |
| G | Blue | Unassigned in the published table |
| H | Grey | BDC1 rotary-tool motor output; DRV8876 switches GND or 24 V, so polarity is conditional |
| I | Orange | I2C SCL |
| J | Purple | I2C SDA |
| K | Pink | Unassigned in the published table |
| L | Cyan | Shield shunted to protective earth (PE) with dark-grey heatshrink; not circuit GND |

The v1.7 Farmduino page separately identifies the board's 12-contact Molex 43045-1212 UTM receptacle and its shunt architecture. That receptacle identification supplements the UTM table; it does not establish local mating orientation or fitment. The v1.7 and v1.8 maps agree on the full A-L role list, but their citations remain separate.

| Official source | Revision-scoped evidence |
|---|---|
| [Genesis v1.5 UTM](https://genesis.farm.bot/v1.5/FarmBot-Genesis-V1.5/tools/utm.html) | A-L position/color map; D48 at E, F-L “Your choice”. |
| [Genesis v1.7 UTM pin mapping](https://genesis.farm.bot/v1.7/extras/reference/utm-pin-mapping) | Full A-L position/color/function map. |
| [Genesis v1.7 Farmduino](https://genesis.farm.bot/v1.7/bom/electronics-and-wiring/farmduino) | 12-contact Molex 43045-1212 UTM receptacle and board/shunt context. |
| [Genesis v1.8 UTM pin mapping](https://genesis.farm.bot/v1.8/extras/reference/utm-pin-mapping.html) | Independent full A-L position/color/function map. |

## Sources

- [FarmBot — Appropedia](https://www.appropedia.org/Farmbot) — general machine function, tools, Raspberry Pi/Farmduino architecture, and browser control; no fitted revision or connector pin map.
- [Open Source Machine Tools — Appropedia](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue identity and machine type.

**Unknowns:** Appropedia machine generation and dimensions, installed Farmduino revision, whether any cited Genesis UTM exists on the local machine, actual mating-face orientation, fitted tool and harness, measured electrical compatibility, and all SmoothieBox-to-machine routes. Source-table “unassigned”/“Your choice” entries describe the cited UTM revision; they do not establish an installed contact's electrical state. No guess or direct route is selected.
