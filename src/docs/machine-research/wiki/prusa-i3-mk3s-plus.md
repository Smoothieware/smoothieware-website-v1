# Prusa i3 MK3S+

Research status: MakeICT wiki identifies its installed variant as MK3S+ under a shortened “Prusa i3 MK3” page title. Captured 2026-09-23.

## Identity and configuration

MakeICT lists four Prusa3D i3 Mk3S+ units as operational. Its linked information page is titled “Prusa i3 MK3” and states the variant “Prusa i3 MK3s+.” It records 250 × 210 × 200 mm build volume, 1.75 mm filament, 0.4 mm nozzle, 300 °C maximum nozzle temperature, heated bed to 100 °C, automatic bed leveling, filament sensing, and head-crash detection.

## Wiki-recorded use

The MakeICT page directs users to the FabLab’s general 3D-printing access policy/workflow. It says to clean the bed with isopropyl alcohol rather than acetone, check that the LCD’s selected bed matches the installed sheet, and avoid hairspray. For filament change, select a material preheat, unload, remove filament promptly, then insert the replacement and use auto-load/load if needed. The flexible steel sheet is removed by lifting its front corners and flexing it; the wiki says not to use scrapers.

## Connections and pinout

## Connections and pinout

The MakeICT pages provide model/inventory evidence, not an installed-board connector schedule. No inspected source establishes the controller model, controller revision, connector population or harness pinout of any individual MakeICT unit.

Prusa's official MK3/MK3S/MK3S+ electronics-wiring article supplies EINSY RAMBo and 24 V model-family context. Its labelled overview identifies connector groups, not a numbered contact schedule for these local machines. It is not used to assign UltiMachine reference designators or pin numbers to MakeICT hardware.

The added inventory is labelled **Einsy Rambo 1.1a schematic reference only; installed controller/revision unknown**. It transcribes the attached UltiMachine 11-sheet schematic dated 2017-09-18. It contains 24 connector references and 118 individually represented schematic terminals: 22 references / 106 terminals on sheets 2 and 5-11, plus X2 USB and X17 USB-side ICSP on sheet 4. The total includes P4 auxiliary terminals 9 and 10 and X2 shield terminals P$1 and P$2; it is not a count of cable cavities or installed accessible ports.

J7 is the sheet-2 two-position 5V OUT reference (1 GND, 2 VCC). J16 is the sheet-5 two-position Power Fault Relay Connector 12-24V reference (1 GND, 2 toward nAC_FAULT through R69). X13 is one two-terminal heater connector drawn as X13A and X13B. J5 belongs to the FAN-0 circuit and J4 to FAN-1. J10 and J11 remain separate four-position Z-motor references. J15 numbers its temperature path as 1, Z_MIN path as 2, GND as 3 and VCC as 4; do not substitute a conventional probe-cable order.

J19 is one 14-position header. Its positions 9-14 are also annotated ICSP for U2; they are not duplicated as a separate X18 connector. J19:8 is the R80/R81 divider junction, not the direct TX1 net. J19:13 is the R79/R82 junction feeding Q3 through R79, not the direct nRESET net. The ICSP annotation does not establish compatibility with a conventional programmer pinout or reset polarity. P2:10 reaches the U9 buffer input through FB32 and is not the direct MISO net.

P4 is labelled RJ45 SMT, with eight interface positions and two additional symbol terminals connected to GND. Its positions 6 and 7 have no drawn wire or net label; their functions remain unknown rather than being assigned from a connector convention. Its R85/R86/R87 values are R0603TBD. P4 population, mating geometry and intended external use are not established; no Ethernet port is claimed.

Contact labels preserve literal source nets. Where a connector-side node is unnamed, the inventory identifies only the drawn component path to a source label or device pin; that description is not a direct-net alias. Heater and fan switched terminals are not relabelled as their logic-control nets or as GND. Motor OA/OB references are not STEP/DIR inputs or fixed positive/negative motor leads. Literal +12V2 and +12V3 labels are retained without asserting installed voltage. USBVCC, GND1 and USHIELD remain distinct source labels.

Every listed terminal has atlas route status **OPEN**, including source-labelled power and ground terminals. OPEN means no qualified external mapping; it does not mean the schematic terminal is electrically unconnected. There are no proposed electrical routes, relation edges, GUESS connections or DB25 peripheral. These are source-only machine-side reference cards opposite the unchanged SmoothieBox exterior.

## Visual evidence and source

Reviewed 2026-09-28. [MakeICT's model page](https://wiki.makeict.org/wiki/Prusa_i3_MK3) and [FabLab equipment inventory](https://wiki.makeict.org/wiki/FabLab_Area) support the MK3S+ identity lead and the inventory's four operational entries. The model page's stock image does not establish the electronics revision of any installed unit.

[Prusa's official MK3/MK3S/MK3S+ wiring guide](https://help.prusa3d.com/article/einsy-rambo-electronics-wiring-mk3-mk3s-mk3s_2107?product=mk3) and its [connector-labelled overview](https://help.prusa3d.com/wp-content/uploads/prusuki/prusuki-images/readings.jpeg) provide separate model-family context. The image includes a patch-board note restricted to version 1.0a and an MMU-related conditional label; neither proves a corresponding revision or accessory on MakeICT's machines.

[UltiMachine's Einsy Rambo 1.1a schematic](https://github.com/ultimachine/Einsy-Rambo/raw/refs/heads/1.1a/board/Project%20Outputs/Schematic%20Prints_Einsy%20Rambo_1.1a.PDF) is the sole contact-number and circuit-reference source for this added inventory. The reviewed attachment contains 11 pages; its locally verified SHA-256 is `6f0449efa84d8e90cafd963df8a4809ebd3c9d7fe760d1e3a8fe566a118aad3e`. Sheet 1 identifies the revision/date; sheets 2, 4 and 5-11 establish the included connectors. The attachment, not a successfully re-fetched online PDF, is the reviewed byte source.

## Evidence limits

Model naming follows MakeICT's body/inventory MK3S+ label while preserving its shorter page title. MakeICT inventory, Prusa model-family documentation and UltiMachine revision-specific design evidence are not interchangeable. No local unit is asserted to contain EINSY RAMBo, revision 1.1a, or every connector shown in this design.

The sheet-1 entries about adding J7 as a power-failure input, moving RX1/TX1, combining ICSP, and changing the endstops belong to the historical 0.4a summary, not the 1.1a change list. The 0.5a summary records a further J19 pinout change. The actual 1.1a sheets control this transcription: J7 is 5V OUT and J16 is the power-fault connector. Do not infer that J16 is an X_MAX connector from its historical reuse.

All contacts, including expansion/programming positions, J7, the X/Y endstop references, THERM2, Z_PROBE position 1 and P4, are schematic-only in this profile. Optional status, fitted population, current use and accessibility are unknown unless established separately. An unverified candidate is not labelled DNI or fitted merely because it appears in the schematic. P4:6 and P4:7 retain unknown functions; the mechanical role of P4:9 and P4:10 is not established by the schematic alone.

No mating-face orientation, cavity drawing, wire colours, installed signal levels, load/current limits, external-device compatibility, firmware assignment or SmoothieBox mapping is established. Excluded from the connector count are mounting holes H1-H4, test points, fuses, reset switch S1, solder jumpers JP1/JP3/JP4, net ties and component pins. X13A/X13B are counted once as X13; J19's ICSP subset is counted once within J19. This is a source-reference inventory, not a wiring-ready qualification. Earlier diagrams remain retained and collapsed.
