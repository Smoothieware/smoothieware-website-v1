# ISEL ICV 4030 EC

Research status: exact model name updated from the FabLab Karlsruhe machine page, which identifies its installed mill as ICV 4030 EC and links the ISEL 2017 manual. The local user guide and machine-control handbook identify the same machine operation; neither supplies a complete electrical connector pinout. References captured 2026-09-28.

## Identity and local machine facts

The FabLab Karlsruhe machine page names its unit **ISEL ICV 4030 EC**. It lists 3000–24000 rpm, 300 × 400 × 140 mm travel, and 1–6 mm clamping diameter; the local guide links ISEL’s ICV 4030 EC manual. The operating guide says ProNC runs on the built-in PC. It records startup actions for the rear master switch, front PC Start/Power buttons, front E-stop, homing/reference, and work zero. These are operating instructions, not circuit assignments.

The local machine page reports that the COOLANT2 and PUMP outputs are connected to relays. It does not identify their terminal numbers, relay coil/contact wiring, ratings, or controlled loads. This dossier therefore shows a local-wiki relay group with positions unknown and no SmoothieBox route.

## ISEL EC family-reference exterior interfaces

The ISEL June 2017 ICV 4030 EC manual, article number 970280 BD018 (original operating manual; revision list through 2018), describes rear-panel interfaces. It lists: RJ45 LAN to the iPC 25; USB 3.0 for external mouse/keyboard; Recovery USB 2.0 for iPC 25 recovery and external mouse/keyboard; a 15-position VGA monitor connector; M4 stud for supplementary protective equipotential bonding; 230 V AC supply inlet with main switch and two 10 A time-lag fuses; optional switched Schuko CEE7/3 socket (L/N/PE); and an optional additional 230 V AC supply inlet. The diagram treats the specified rear panel as EC family-reference evidence. Individual installed options and connector orientation have not been inspected.

The manual identifies connector form/count but does not provide a source-scoped assignment for the contacts inside LAN, USB, or VGA connectors. The diagram numbers known nominal positions as OPEN, without assigning their pin functions. For mains equipment, conductor functions L/N/PE are transcribed as connector-level reference labels only; no terminal ordering, polarity view, rating beyond cited manual text, cable, or safe retrofit is inferred. M4 is a bonding stud, not a pin.

## Separate machine functions

| Interface | Evidence | Contact map / route |
|---|---|---|
| Front PC Start, Power, E-stop and operating controls | Karlsruhe user guide and ISEL EC manual describe operation | No contact numbers or circuit assignment supplied; OPEN |
| Built-in control PC and ProNC | Local guide names ProNC on the integrated computer; ISEL manual identifies rear PC I/O | Rear peripheral contacts are shown separately; no CNC command route to SmoothieBox |
| Rear PC/peripheral connectors | ISEL ICV 4030 EC 2017 manual | See numbered exterior family-reference positions below; exact connector face and installed optional ports unverified |
| COOLANT2 and PUMP | FabLab machine page reports these outputs are connected to relays | Relay terminal/contact positions unknown; OPEN |
| Axes, spindle, reference switches and safety circuit | Operating workflow and ISEL EC manual identify the machine subsystems | No machine-specific external pin schedule or machine-side schematic established; OPEN |

## Variant boundary

A separate 2004 ICV manual describes an earlier configuration with a DB9 acknowledgement button, 25-pin parallel interface, mains, and ground point. The FabLab page now explicitly says **ICV 4030 EC** and links the EC manual, so those earlier ICV contacts are excluded from this profile. Likewise, specifications and port layouts for the current iCV 4030EC product are not substituted for this 2017 manual. The local identity supports the EC-family reference inventory, but no serial/nameplate or rear-panel photograph confirms a particular delivered option set.

## Wiring and safety status

The source-supported V2-to-machine route count is zero and the dotted-guess count is zero. OPEN means no compatible two-ended connection has been established. This is an evidence map, not a wiring instruction. Do not connect a motion controller to the proprietary drive/safety system or machine mains from these references; obtain the unit’s serial-specific wiring and qualified engineering review before any integration.

## Sources

- FabLab Karlsruhe machine record, live page checked 2026-09-28: https://wiki.fablab-karlsruhe.de/doku.php?id=maschinen:isel
- FabLab Karlsruhe operating guide: https://wiki.fablab-karlsruhe.de/doku.php?id=allgemein:anleitungen:cnc-isel
- ISEL ICV 4030 EC operating manual, official PDF, article 970280 BD018 (June 2017; revision entries through 2018): https://www.isel.com/de/mwdownloads/download/link/id/7610/
- ISEL product page for current iCV 4030EC, consulted only to exclude version transfer: https://www.isel.com/en/products/icv-4030ec
- ISEL 2004 ICV 4030 manual, consulted only to document and exclude earlier non-EC port variants: https://www.manualslib.de/manual/837166/Isel-Automation-Icv-4030.html

This supersedes the earlier wiki-only assessment in `machine-research/wiki-history/isel-icv-4030-wiki-only-20260928.md`; that snapshot and the earlier overview SVG remain retained for comparison.
