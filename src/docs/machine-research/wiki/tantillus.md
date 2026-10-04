# Tantillus portable RepRap printer

**Identity scope:** RepRap Tantillus design, not a verified individual assembled printer. The electrical inventory below comes from the exact RepRap Wiki revision `oldid=177715`; it is a recommended-parts list rather than an installed build record.

## Design identity

RepRap describes Tantillus as a compact portable self-replicating mini printer with an XY-head layout. The page records a working release status, GPLv3, a 100 × 100 × 100 mm build area, an internally mounted Bowden extruder, and an external power supply intended to permit battery operation. It also records a cable-driven Z-axis variant. Those mechanical variants do not identify a wiring revision.

## Recommended electronics inventory

The exact page revision lists these recommended components. They are shown as separate source-reference cards in the atlas, with no connector cavities or terminals invented:

| Source-listed item | Quantity / option | Pin and fitment boundary |
|---|---|---|
| NEMA 17 stepper motors | 4; max 40 mm length recommended | Axis allocation, winding order, motor plug, and local harness are not specified. |
| StepStick or Pololu stepper drivers | 4 | Alternative module descriptions; exact driver model, carrier/socket labels, orientation, and motor outputs are not specified. |
| RAMPS shield | 1 | Revision and fitted version are not specified; no RAMPS revision-specific contact map is transferred. |
| Arduino Mega 2560 | 1 | Installed unit and wiring/firmware configuration are not documented. |
| 16 × 2 LCD panel | Optional | Module interface, cable, contacts, and installation are unspecified. |
| 20-position encoder | Optional | Electrical interface and contact positions are unspecified. |
| J-head Mk-IV-B hotend | 1 | Heater/thermistor electrical terminals and harness are not listed. |
| Power supply | 90 W; printed as `15 V @ 5/6 A` | Exact fitted supply, connector, polarity, and interpretation of the source's current notation are unverified. |
| SD card breakout or SDramps | Optional alternatives | Board revision, socket/interface, and installation are unspecified. |
| Female barrel connector for supply | Optional | Dimensions, polarity, and fitment are unspecified. |
| Fans | 2; 50 mm or 40 mm | Which size is fitted, wiring, voltage, and connector positions are unspecified. |

The source lists assemblies, not a complete machine wiring plan. It does not map X/Y/Z/extruder motors to individual driver channels; give step/direction/enable pins; name X/Y/Z endstop contact pins; provide thermistor, heater, or fan connector positions; specify the RAMPS shield revision; or establish a SmoothieBox harness. Generic RAMPS schematics and unrelated machine variants are not substituted for Tantillus evidence.

## SmoothieBox diagram boundary

The selected diagram preserves all 82 SmoothieBox exterior contacts and shows the eleven listed electronics groups on the machine-reference side. Every group remains OPEN to SmoothieBox. No solid route or dotted guess is supported by this inventory: it gives no machine-side endpoint pins, firmware assignments, electrical levels, current limits, returns, or safety/interface design. The cards describe the recommended design inventory, not proof that a particular Tantillus was built with or currently contains those parts.

No DB25 connector or other numbered external machine connector is identified in the reviewed Tantillus source.

## Sources

- [RepRap Tantillus · revision 177715](https://wiki.reprap.org/mediawiki/index.php?title=Tantillus&oldid=177715) — design history, construction variants, operation context, and exact recommended-electronics list.
- [Intrinsically-Sublime/Tantillus](https://github.com/Intrinsically-Sublime/Tantillus) — repository linked from the wiki; its purpose is the source and production files for the mechanical printer design. No electrical pin schedule is cited from it.
- [RepRap printer-by-picture index](https://reprap.org/wiki/Printer_by_Picture) — category dimensions and image only; not electrical evidence.

**Unresolved:** any specific build's installed board/module versions, motor axis mapping, endstop type and position, step/direction pin assignments, LCD/encoder wiring, hotend sensor/heater terminals, fan ratings, supply connector polarity, harness layout, and any changes made after the cited wiki revision.
