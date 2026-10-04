# Anycubic Kobra 3D printer

## Identity

Artisans Asylum's machine-specific page identifies Make anyCubic, Model Kobra and Serial Unknown. This supports a source study of the named Kobra model, without a suffix. It does not identify the installed build, controller, board revision or harness revision, and does not authorize transferring Kobra 2, Kobra Neo or another variant's pinout.

## Sources and provenance

- [Artisans Asylum machine page](https://wiki.artisansasylum.com/wiki/3D_Printer_anyKubic_Kobra): local machine identity, mechanical description and manual link.
- [Anycubic Kobra support page](https://wiki.anycubic.com/en/fdm-3d-printer/kobra): manufacturer model identification and model-specific maintenance links, including motherboard replacement; it does not itself give a contact schedule.
- [Anycubic firmware and software page](https://eu.anycubic3d.com/pages/firmware-software): manufacturer Kobra manual listing.
- [Official Kobra user manual, 20221124 V0.0.5](https://cdn.shopifycdn.net/s/files/1/0245/5519/2380/files/Anycubic_Kobra_User_Manual_20221124_V0.0.5.pdf?v=1683854107): manufacturer model reference; document version is not an installed hardware revision.
- [Artisans Asylum FDM category](https://wiki.artisansasylum.com/wiki/Category%3A3D_Printers_-_Extrusion): shop-wide operation and safety context.
- [Artisans Asylum Digifab category](https://wiki.artisansasylum.com/wiki/Category%3ADigifab_Shop): shop equipment and access context.

The captured official PDF has 58 pages and SHA-256 `36c0850f21cb4b85332afe2a31dc7ff6d7718ec1b698f0f411f0c3d1fee69dde`. A separate PDF obtained through the machine page's Drive link has SHA-256 `75e519e06126d85fe3e1a17ff22cb1fd6a1536a23c05d3c1de9a6826d0f4eab2`. They are distinct byte captures; the official PDF supports the manufacturer claims below.

## Mechanical and operating scope

The community page describes a 200 × 200 mm stage. The official manual specifies a 220 × 220 × 250 mm build size. These are separate source claims and descriptions, not a verified measurement or a resolved discrepancy for the installed unit.

The official manual lists 110/220 V AC, 50/60 Hz, 400 W, one extruder with a maximum temperature of 260 °C and a bed maximum of 110 °C. These are model specifications, not connector ratings or SmoothieBox supply assignments. The manual instructs users to match cable labels and never connect or disconnect cables while powered; the wiki's shop training and operating requirements also apply.

## Four named cable/interface groups

The official manual's printed page 20 cable-connection illustration identifies four groups: 1 Print head, 2 X-axis motor, 3 Touchscreen and 4 Z-axis motor. Those numbers identify illustration groups, not connector cavities. The four reference cards preserve these names with empty contact lists and OPEN routes.

The illustration does not establish cavity counts, contact functions, polarity, mating order, electrical ratings or a controller-board identity. The Y motor appears in the product overview, but not as a labeled group in this four-group cable illustration. No Y-motor harness contact map is inferred.

## Other overview evidence

The product overview names a front data-cable port, memory-card slot, power switch and voltage selector. It also identifies a proximity switch; the manual describes it as detecting the metal bed for leveling. These are contextual observations, not additional source-scoped harness contact schedules. No sensor signal type, voltage, polarity or direct SmoothieBox connection is inferred.

## Wiring boundary and status

Exact named-model source study; installed serial, build, controller, board revision and harness revision unqualified. Four documented cable/interface groups, zero individually documented machine contacts and zero established SmoothieBox routes. STEP, DIR and ENABLE cannot be assigned to motor cable conductors without an identified driver interface. No defensible dotted guess or DB25 is established by the inspected evidence.

OPEN means no SmoothieBox route selected, not a source NC contact. The diagram legend remains DOTTED = GUESS even when no guesses are drawn. Qualification requires installed controller and harness identification, connector views and contact assignments, followed by electrical compatibility evidence before any route can be proposed.
