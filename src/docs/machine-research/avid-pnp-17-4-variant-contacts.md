# Avid Plug and Play CNC controller 17.4: conflicting CRP850 variants

Sources read 2026-09-26:

- [Avid official revision 17.4 HTML schematics](https://www.avidcnc.com/support/instructions/electronics/pnp/manual/17.4/schematics/) give a **36-terminal** CRP850-00E Phoenix table, plus the 14-pin control cable, NEMA23 DB9 and NEMA34 XLR maps. The page footer currently says documentation version 2025Q1.1.
- [Avid PDF with a 20.1 filename and 17.4 Electronics Revision page headings](https://www.avidcnc.com/cad/2020Q3/Plug_and_Play_CNC_Controller_Technical_Manual_20.1_v2020Q3_1.pdf), version 2020Q3.1, printed page 18 (PDF page 19), gives a **42-terminal** CRP850-00E Phoenix table. Its 14-pin cable, DB9 and XLR tables appear on printed pages 27–28 (PDF pages 28–29). The PDF filename and page headings conflict; this atlas does not pick a winner or combine the two CRP850 housings.

Both sources describe historical controller hardware, not a verified fitted machine or a compatible SmoothieBox peripheral. Source assignments are reference contact labels. Each alternative card stays OPEN until the installed board revision, connector orientation, harness continuity, protection and electrical interface are checked. The legacy controller step/direction and relay logic outputs are not inputs for SmoothieBox step/direction outputs.

## 36-terminal HTML variant

The official HTML table maps terminals individually:

| Positions | Source-listed functions |
| --- | --- |
| 1–8 | 1 E-Stop input, 2–3 12V GND, 4 AUX 2 input, 5 Slaved− sensor input, 6 +12V output, 7 12V GND, 8 Z+ sensor input |
| 9–18 | 9 Touch input, 10 +12V output, 11 12V GND, 12 Y+ input, 13 Y− input, 14 +12V output, 15 12V GND, 16 X+ input, 17 X− input, 18 +12V output |
| 19–26 | 19 Relay 1 control switch, 20 +5V, 21 Relay 2 control switch, 22 +5V, 23 5V input/+5V, 24 5V GND, 25 ENABLE +5V, 26 ENABLE signal |
| 27–36 | 27 spindle FWD, 28 spindle DCM, 29 PWM, 30 5V GND, 31 0–10V output V+, 32 12V GND, 33 12V input, 34 12V GND, 35 fault signal, 36 12V GND |

The table distinguishes a 5 V relay **control** signal from spindle FWD/DCM dry-contact terminals, and 0–5 V PWM from the analog 0–10 V output. Its analog output has a source-labelled `12V GND` adjacent to it; the actual VFD reference and isolation cannot be inferred solely from adjacency. The jumper changes ESS port/pin assignments for selected inputs but does not change these physical terminal numbers.

## 42-terminal PDF variant

The printed PDF table maps positions 1–16 to eight successive FF8 through FF1 NPN input/GND pairs. Positions 17–22 are Relay 1 OUT1, GND, Relay 2 OUT2, GND, spindle relay OUT3, GND; these are **5 V logic replicas**, not the relay's dry contacts. Positions 23–26 are Motor 6 STEP, GND, Motor 6 DIR, GND, all in the 5 V section. Positions 27–32 are motor enable, GND, 5V input, GND, motor enable, GND. Positions 33–42 are spindle relay FWD, spindle relay DCM, PWM, GND, spindle 0–10V, spindle ACM, 12V input, GND, spindle fault input, GND. The PDF's voltage column says `10V` for the ACM terminal; that is reproduced as a source note, not interpreted as +10 V on the common. These 42 positions are a **separate option**, not added to the HTML's 36-position housing.

## Shared auxiliary connector tables

The HTML 14-pin control cable table assigns 1 fault ground blue, 2 fault signal white, 3–4 plasma torch ON orange/black and green/black, 5 divided plasma voltage − red/black, 6 divided plasma voltage + red/white, 7 spindle FWD orange, 8 spindle DCM green, 9 spindle AVI red, 10 spindle ACM black, 11 optional 10V reference blue/white, 12 plasma Arc OK white/black, 13 plasma ground blue/black, 14 Arc OK ground green/white. The source says plasma pins are populated but disconnected by default on routing controllers; spindle pins are populated but disconnected on plasma controllers. The colors describe a manufacturer harness, not an inspected retrofit cable.

The HTML DB9 motor connector table has 1 and 5 current-set resistor, 2–4 NC, 6 B+ yellow, 7 B− blue, 8 A+ red, 9 A− green. The XLR motor table has 1 A+ red, 2 A− green, 3 B+ yellow, 4 B− blue. The source shows male and female numbering views separately. Motor phase contacts are after the driver; they are not SmoothieBox STEP/DIR pins or an established path to them.

## Graph reconciliation

Portable graph `023-base-27.json` retained 14 cable and 42 PDF positions with repeated group phrases. It retained only ten of the HTML variant's 36 terminals, and its DB9/XLR phase rows repeated pair descriptions. The new source-scoped diagram labels every position individually and expands the HTML alternative to all 36 manufacturer-listed terminals. Three empty graph index cards duplicating the cable, CRP850 options, and DB9 are removed from the new drawing only. The graph snapshot and older drawings remain intact.
