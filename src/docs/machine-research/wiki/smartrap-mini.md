# Smartrap Mini

## Identity

Smartrap Mini is a GPL RepRap design inspired by Wallace. The wiki calls it a small, strong design intended to be simple to build and maintain; it contains numerous historical prototypes and revisions.

## Wiki evidence

- [RepRap Smartrap Mini](https://reprap.org/wiki/Smartrap_mini): design intent, dimensions, materials, parts, prototype gallery and guide navigation.
- [RepRap machine index](https://reprap.org/wiki/RepRap_Machines): model listing.

## Specifications and operation

The wiki lists prototype print sizes between 150 × 150 × 150 and about 250 × 250 × 200 mm, with an early build at 200 × 200 × 150 mm. It describes PLA-only use as the design author's environmental choice, four NEMA 17 motors and three mechanical endstops. The wiki includes assembly and usage guides but notes that the assembly process remained under refinement.

## Pinout and visuals

No controller model or pinout is specified. The page has a gallery labelled by prototype/version; match images and instructions to a revision before reuse.

## Limits

The wiki marks the page's final update around the v0.4.5 development period and explicitly describes incomplete assembly documentation. Do not assume every gallery image depicts the same build.


## Source audit · 2026-09-28

### Exact source and nearby revision boundary

[RepRap Smartrap Mini, revision 154567](https://www.reprap.org/mediawiki/index.php?title=Smartrap_mini&oldid=154567) lists four NEMA17 motors, one J-head hot end, one controller board and three mechanical end stops. The controller model and electrical connector/contact schedules are not given. The local machine and its build revision have not been identified.

The separate [Smartrap Build Manual, revision 153359](https://www.reprap.org/mediawiki/index.php?title=Smartrap_Build_Manual&oldid=153359) covers Smartrap V0.4.9 / 0.4.9.2. Its RAMPS 1.4 reference and numbered wiring-picture placeholder do not establish Smartrap Mini electronics or wiring. The linked generic Smartfriendz repository does not establish an exact Mini controller/contact schedule in this review.

### Individually represented source assemblies

Inventory numbers count assemblies only; they are editorial labels, not connector numbers, axis assignments, switch terminals or physical contact positions.

| Inventory item | Source-reported assembly | Electrical information still OPEN |
| --- | --- | --- |
| Motor 1 of 4 | NEMA17 motor | Axis, lead/phase map, connector and driver input |
| Motor 2 of 4 | NEMA17 motor | Axis, lead/phase map, connector and driver input |
| Motor 3 of 4 | NEMA17 motor | Axis, lead/phase map, connector and driver input |
| Motor 4 of 4 | NEMA17 motor | Axis, lead/phase map, connector and driver input |
| Hot end 1 of 1 | J-head hot end | Exact revision, heater/sensor circuits, leads and connectors |
| Controller 1 of 1 | Unidentified controller board | Model, revision, connector identities and contact schedule |
| End stop 1 of 3 | Mechanical end stop | Axis/location, terminal count, labels and NO/NC circuit |
| End stop 2 of 3 | Mechanical end stop | Axis/location, terminal count, labels and NO/NC circuit |
| End stop 3 of 3 | Mechanical end stop | Axis/location, terminal count, labels and NO/NC circuit |

Coverage: nine assemblies, zero source-reported electrical contact positions, zero SmoothieBox routes and no source-supported DB25. Unknown contact counts remain unknown; no nominal motor, heater or switch pins are invented.

### Electrical boundary and diagram scope

SmoothieBox X/Y/Z/A banks expose STEP, DIR, ENABLE and circuit-ground controls for external drivers; they are not motor-winding power outputs. This Mini source does not identify compatible driver inputs or bind motors to those banks, so no dotted motor route is selected. Hot-end and end-stop routes remain OPEN because their contacts and circuit assignments are absent.

The current diagram retains all 82 proposed SmoothieBox exterior contacts and four separate service ports. Nine source-reference assembly cards have OPEN boundaries and no contact glyphs. OPEN records missing route evidence, not a source NC pin or electrically open circuit. The retained 227-position historical schedule does not supply Smartrap Mini machine pins. The source's design snapshot describes no heated bed and no fan; that does not establish every prototype or installed machine. Earlier gallery variants and atlas diagrams remain historical records.
