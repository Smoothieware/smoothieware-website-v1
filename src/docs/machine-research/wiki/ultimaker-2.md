# Ultimaker 2

Research status: wiki-sourced machine dossier; MakeICT lists it operational. Captured 2026-09-23.

## Wiki-recorded configuration

MakeICT identifies the unit as an Ultimaker 2. Its wiki page lists 210 × 210 × 200 mm build volume, 1.75 mm filament, 0.4 mm nozzle, heated bed to 100 °C, and table values of 0.125 mm X/Y and 0.02 mm Z resolution. The page says the installed machine was modified with an E3D V6 hotend and geared E3D Titan extruder, and unlike the stock variant uses 1.75 mm filament.

## Use and access

The wiki points operators to the space’s shared 3D Printing authorization policy and workflow. It does not contain a machine-specific start sequence in the inspected page. The inventory labels the unit operational.

## Connections and pinout

No board revision, connector, motor, heater, thermistor, fan, or power pinout is published on the wiki page.

## Visual evidence and source

The wiki article includes a machine image and an E3D-specific modification description; a wiring diagram was not present in the inspected content. [MakeICT Ultimaker 2 wiki page](https://wiki.makeict.org/wiki/Ultimaker_2) · [FabLab equipment inventory](https://wiki.makeict.org/wiki/FabLab_Area).

## Evidence limits

The wiki’s 400 °C “Max Nozzle Temperature” table entry conflicts with the described printer class and lacks a referenced sensor/hotend measurement in the wiki text. It is retained only as an unverified source value and must not be treated as an operating recommendation. Exact installed hotend/sensor and firmware revisions are unknown.

## Manufacturer board reference — audited 2026-09-29

The official Ultimaker 2 hardware repository publishes the main board revision 2.1.1 design. The reviewed PDF is named `Main Board V2.1.1.pdf`; its schematic sheets are PDF pages 7–11, and its metadata creation date is 2013-07-03. The captured PDF SHA-256 is `5f72064df84ac025d6625c1a30a3e74419056b43f4c9f5f4adc75ded29639353`.

This is a manufacturer board-revision reference. MakeICT's modified E3D V6/Titan machine has no cited installed-board revision, harness or sensor contact map. The official design is not evidence that this board is installed.

### Complete source connector coverage

The reference contains **32 J-designated connectors and 127 numbered schematic positions**, not 31 connectors. J1–J34 are included except J10 and J12, which do not occur in the reviewed schematic. PDF page 7 supplies 4 connectors / 21 positions; page 8 supplies 9 / 19; page 9 supplies 14 / 67; page 10 supplies 5 / 20. The page 11 revision notes explicitly say J34 was added in revision 2.1.1.

J1/J2 programming headers and J4 auxiliary/service GPIO are retained. The scope is the complete J-connector inventory: internal TP1–TP80 test pads, JP2/JP3 solder links and component/relay/switch pins are not represented as external connector housings. Those elements exist in the source; their exclusion is not an absence claim. No DB25 appears in this reviewed main-board source.

Numbering is the schematic symbol's printed numbering, not a verified mating-face or cable-cavity view. J3 has five schematic marks and J18 has five source-symbol marks; these counts must not be advertised as five cable signal cavities. Every source-supported position is recorded individually in the linked atlas contact schedule and source-scoped connector JSON. The installed peripheral harness remains unknown.

### Electrical interpretation and routing limits

J27/J28/J29/J30/J31 carry X/Y/Z/extruder/extra A4988 motor-phase outputs in the source order OUT1B, OUT1A, OUT2A, OUT2B. They are not STEP/DIR/ENABLE control inputs, and none is GND. SmoothieBox's exposed motor control logic cannot be routed to those phase outputs as a function-name match.

J5/J8/J6 are controller-side X/Y/Z limit-switch inputs, with a +5V pull-up, a filtered signal path and GND. They do not identify the fitted switch's cable pin order. J7/J11/J13 are biased PT100 amplifier input pairs; their lower branches go through resistors to the amplifier minus inputs and are not direct GND. The named ADC8/ADC9/ADC10 nets are downstream amplifier outputs, not PT100 connector pins. J9 supplies an analog-input branch, +5V and GND.

J14 PWM1 FAN and J15 PWM2 LED have VCC/2 and transistor-switched load nodes; VCC/2 is the literal source net name, not an asserted half-supply voltage. J20 FAN output is fixed +24V/GND. J21 positions 1/3/5 are HEATED-BED/HEATER2/HEATER1 switched outputs; positions 2/4/6 are +24V. Those load outputs must not be treated as logic inputs or permanent GND contacts. J18 positions 2/4 share an unnamed raw supply node before SW1 and relay K1; the downstream rails VCC/2 and +24V are distinct source nets.

Preserve J22's source discrepancy: its caption is Serial 3, but its numbered data nets are TXD2/RXD2, not TXD3/RXD3. J4's positions 2/3 reach U2 PB6/PB5 respectively; the source traces cross without a junction. J1 and J2 are programming headers for different MCUs, so equal SPI names do not establish that they are the same physical node. J16/J17 are captioned Tempplus1/Tempplus, but an attached accessory and its operating function are unspecified.

**Routing decision: 0 routes, 0 dotted GUESS paths; every SmoothieBox endpoint stays OPEN.** A controller-side input is not the remote switch's connector, a controller load output is not a heater/fan harness endpoint, and an MCU signal name does not establish an accessible, compatible driver interface. No exact electrically compatible machine-side landing point is supported by these sources. OPEN means no route selected here, not a source NC pin.

Before proposing a wire, establish the fitted board and sensor revisions, cable/receptacle view and pin-1 orientation, peripheral harness pin identities and continuity, input/output direction, signal voltage and thresholds, polarity, current/power limits, return topology and the necessary driver/sensor/power interface. The E3D modification makes the installed hotend/sensor especially important. A source reference inventory is complete; an installed machine wiring map and electrical qualification remain unverified.

### Primary manufacturer sources

[Official Ultimaker 2 main board 2.1.1 design directory](https://github.com/Ultimaker/Ultimaker2/tree/master/1091_Main_board_v2.1.1_(x1)) · [Main Board V2.1.1.pdf](https://raw.githubusercontent.com/Ultimaker/Ultimaker2/master/1091_Main_board_v2.1.1_%28x1%29/Main%20Board%20V2.1.1.pdf), PDF pp. 7–11. The retrieved PDF has 14 pages; board schematic sheets 1–5 occupy pages 7–11.
