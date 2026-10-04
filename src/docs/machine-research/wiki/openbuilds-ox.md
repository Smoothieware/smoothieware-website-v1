# OpenBuilds OX CNC

**Current evidence review: 2026-09-28.** Appropedia identifies a generic OX design. A separate author-reported OpenBuilds OX/TinyG V8 build supports controller-example context. The supplied Synthetos TinyG v8h Board 131 schematic supports the reference inventory below; neither source identifies a fitted controller or harness for the Appropedia catalogue unit.

## Generic design and separate example

The Appropedia catalogue gives 310 × 480 mm, OpenBuilds, SketchUp files and community build instructions. Those retained design attributes do not identify an installed board or wiring harness. The separate OpenBuilds resource reports a 1000 mm Y × 750 mm X OX, NEMA 23 motors, 24 V and 48 V supplies, a PWM controller and a 400 W Quiet spindle. Its TinyG V8 statement does not establish the v8h letter revision, motor-to-axis assignments, terminal population or cable continuity. The Ooznest OX kit and WorkBee variants are outside this increment.

## Complete reference boundary: J1-J8 machine-control symbols

The inventory admits **every individually numbered schematic pin entry in J1 through J8** from the four supplied TinyG **v8h**, Board 131 sheets dated **2014-06-20**: power input, four motor-output symbols, spindle/coolant control and two switch blocks. It has **eight reference groups and 68 source entries**, all OPEN. These are schematic symbol numbers and labels, not a statement of 68 external connector cavities, a connector mating view or an installed OX harness. The original generic machine graph remains unidentified with zero contacts and zero wires.

| Symbol | Reference function | Source entries | Board 131 sheet |
| --- | --- | ---: | --- |
| J1 | Power input | 2 | Sheet 2 |
| J2 | Motor channel 1 | 12 | Sheet 3 |
| J3 | Motor channel 2 | 12 | Sheet 3 |
| J4 | Motor channel 3 | 12 | Sheet 4 |
| J5 | Motor channel 4 | 12 | Sheet 4 |
| J6 | Spindle / coolant control | 6 | Sheet 1 |
| J7 | X/Y switch inputs | 6 | Sheet 1 |
| J8 | Z/A switch inputs | 6 | Sheet 1 |
| Total | Complete J1-J8 source-symbol inventory | 68 | Sheets 1-4 |

J2-J5 each print twelve numbered entries. Pins 1-4 are `B1 out`, `B2 out`, `A2 out`, `A1 out`; pins 5-8 repeat the phases as `alt`; pins 9-12 repeat them as `alt2`. Each group of pins 1/5/9, 2/6/10, 3/7/11 and 4/8/12 joins one drawn phase node. This documents four phase nodes per motor channel, with three source-symbol entries per phase. The TinyG Connecting guide separately describes four motor terminals A1/A2/B1/B2; it does not qualify a physical cavity-to-symbol correspondence for these twelve numbered entries. No twelve-way motor plug or motor-axis binding is inferred.

J7/J8 each contain one GND and one 3.3V reference. Their X/Y/Z/A input names identify controller inputs; they do not identify an installed switch's opposite terminals or a separate GND cavity for each switch. The official homing documentation specifies 3.3 V switch inputs and warns against applying 5 V. TinyG motor outputs are phase-power outputs, not external STEP/DIR inputs. No SmoothieBox connection is selected merely because a function name resembles a carrier label.

### Explicit exclusions

This is not a complete TinyG board pin inventory. Host, programming, expansion, regulator and internal driver-access symbols are outside the admitted machine-control terminal set: J9 USB; J10 PDI; J11/J12 regulator access/links in the Power Section; J13 SPI; J14 TTL serial; J15 Reset; J16 Boot; J17-J20 internal driver-access headers in the motor sheets. None has a source-established OX field-harness role here. Their exclusion is a scope boundary, not evidence of absence or NC status. MCU/driver IC pins, test points, LEDs and component leads are also outside this external-interface reference inventory.

### Every admitted source entry

| Schematic symbol.pin | Printed mark | Source sheet | SmoothieBox route |
| --- | --- | --- | --- |
| J1.1 | GND | Sheet 2 | OPEN |
| J1.2 | Vmot | Sheet 2 | OPEN |
| J2.1 | B1 out | Sheet 3 | OPEN |
| J2.2 | B2 out | Sheet 3 | OPEN |
| J2.3 | A2 out | Sheet 3 | OPEN |
| J2.4 | A1 out | Sheet 3 | OPEN |
| J2.5 | B1 alt | Sheet 3 | OPEN |
| J2.6 | B2 alt | Sheet 3 | OPEN |
| J2.7 | A2 alt | Sheet 3 | OPEN |
| J2.8 | A1 alt | Sheet 3 | OPEN |
| J2.9 | B1 alt2 | Sheet 3 | OPEN |
| J2.10 | B2 alt2 | Sheet 3 | OPEN |
| J2.11 | A2 alt2 | Sheet 3 | OPEN |
| J2.12 | A1 alt2 | Sheet 3 | OPEN |
| J3.1 | B1 out | Sheet 3 | OPEN |
| J3.2 | B2 out | Sheet 3 | OPEN |
| J3.3 | A2 out | Sheet 3 | OPEN |
| J3.4 | A1 out | Sheet 3 | OPEN |
| J3.5 | B1 alt | Sheet 3 | OPEN |
| J3.6 | B2 alt | Sheet 3 | OPEN |
| J3.7 | A2 alt | Sheet 3 | OPEN |
| J3.8 | A1 alt | Sheet 3 | OPEN |
| J3.9 | B1 alt2 | Sheet 3 | OPEN |
| J3.10 | B2 alt2 | Sheet 3 | OPEN |
| J3.11 | A2 alt2 | Sheet 3 | OPEN |
| J3.12 | A1 alt2 | Sheet 3 | OPEN |
| J4.1 | B1 out | Sheet 4 | OPEN |
| J4.2 | B2 out | Sheet 4 | OPEN |
| J4.3 | A2 out | Sheet 4 | OPEN |
| J4.4 | A1 out | Sheet 4 | OPEN |
| J4.5 | B1 alt | Sheet 4 | OPEN |
| J4.6 | B2 alt | Sheet 4 | OPEN |
| J4.7 | A2 alt | Sheet 4 | OPEN |
| J4.8 | A1 alt | Sheet 4 | OPEN |
| J4.9 | B1 alt2 | Sheet 4 | OPEN |
| J4.10 | B2 alt2 | Sheet 4 | OPEN |
| J4.11 | A2 alt2 | Sheet 4 | OPEN |
| J4.12 | A1 alt2 | Sheet 4 | OPEN |
| J5.1 | B1 out | Sheet 4 | OPEN |
| J5.2 | B2 out | Sheet 4 | OPEN |
| J5.3 | A2 out | Sheet 4 | OPEN |
| J5.4 | A1 out | Sheet 4 | OPEN |
| J5.5 | B1 alt | Sheet 4 | OPEN |
| J5.6 | B2 alt | Sheet 4 | OPEN |
| J5.7 | A2 alt | Sheet 4 | OPEN |
| J5.8 | A1 alt | Sheet 4 | OPEN |
| J5.9 | B1 alt2 | Sheet 4 | OPEN |
| J5.10 | B2 alt2 | Sheet 4 | OPEN |
| J5.11 | A2 alt2 | Sheet 4 | OPEN |
| J5.12 | A1 alt2 | Sheet 4 | OPEN |
| J6.1 | GND | Sheet 1 | OPEN |
| J6.2 | 3.3V | Sheet 1 | OPEN |
| J6.3 | Spindle | Sheet 1 | OPEN |
| J6.4 | SpDir | Sheet 1 | OPEN |
| J6.5 | SpPWM | Sheet 1 | OPEN |
| J6.6 | Coolant | Sheet 1 | OPEN |
| J7.1 | GND | Sheet 1 | OPEN |
| J7.2 | 3.3V | Sheet 1 | OPEN |
| J7.3 | Xmin | Sheet 1 | OPEN |
| J7.4 | Xmax | Sheet 1 | OPEN |
| J7.5 | Ymin | Sheet 1 | OPEN |
| J7.6 | Ymax | Sheet 1 | OPEN |
| J8.1 | GND | Sheet 1 | OPEN |
| J8.2 | 3.3V | Sheet 1 | OPEN |
| J8.3 | Zmin | Sheet 1 | OPEN |
| J8.4 | Zmax | Sheet 1 | OPEN |
| J8.5 | Amin | Sheet 1 | OPEN |
| J8.6 | Amax | Sheet 1 | OPEN |

## Routes, connector view and next evidence

There are **zero candidate routes, zero functional guesses and zero fitted OX assignments**. OPEN means no SmoothieBox route is selected; it does not mean source NC. A dotted GUESS needs identified endpoints and a grounded function hypothesis; the current sources supply no such OX endpoint pair. No DB25 is evidenced in the admitted material.

Before proposing a physical connection, identify the actual build/controller revision, populated connectors, board and cable mating faces, motor-to-axis configuration, switch cable endpoints and continuity, and the electrical requirements of both ends. The example's separate 48 V supply must not be assigned to TinyG by association. These are missing qualification facts, not new pin labels to invent.

## Sources and captured document identity

- [Appropedia catalogue](https://www.appropedia.org/Open_Source_Machine_Tools) — generic design identity and retained dimensions.
- [OpenBuilds OX controlled by TinyG V8 example](https://builds.openbuilds.com/projectresources/how-to-setup-configure-an-ox-cnc-controlled-by-a-tinyg-v8.146/) — separate example-build context from the supplied evidence packet; not a fitted identity match.
- [Synthetos v8h source tree](https://github.com/synthetos/TinyG/tree/master/hardware/v8schematics/v8h) — locally supplied original PDF bytes visually inspected for this proposal: Sheet 1 CPU Section (J6-J8), Sheet 2 Power Section (J1), Sheet 3 Motors 1 & 2 (J2/J3), Sheet 4 Motors 3 & 4 (J4/J5). The v8h/drawing date comes from the title blocks, not an installed-machine observation.
- [Synthetos Connecting TinyG](https://github.com/synthetos/TinyG/wiki/Connecting-TinyG) — logical motor terminal names from supplied source evidence; no OX harness mapping.
- [Synthetos Homing and Limits](https://github.com/synthetos/TinyG/wiki/Homing-and-Limits-Description-and-Operation) — switch input names and level caution from supplied source evidence; no physical switch cable map.

Captured PDF byte identities:

- `tinyGv8h-schematic-page1.pdf`: SHA-256 `1fd7db920e821f6354b307f10e1df8e1d18ee0fa55fa55a5fedd8154328a9375`.
- `tinyGv8h-schematic-page2.pdf`: SHA-256 `77e7452ba14edb3e31a12ceb32157492acf0cd0ee0bb80c50b8645e0accc4e6d`.
- `tinyGv8h-schematic-page3.pdf`: SHA-256 `7ab3c7b8397057758e98a78debe7e8903111398bc88a6947b43e918106f64993`.
- `tinyGv8h-schematic-page4.pdf`: SHA-256 `aa5a44a748591d853a27c582fddd3b07ec70093bd3412ede002072a0d53c1075`.

<details>
<summary>Earlier wiki-only dossier, retained verbatim</summary>

# OpenBuilds OX CNC

**Evidence depth:** CNC mill; gantry design. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue gives 310 × 480 mm and identifies the design as an OpenBuilds machine. It notes SketchUp as a file format and says build instructions are available through the project community. This is an OX design entry, not a claim about every WorkBee build that derives from the OX.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

</details>
