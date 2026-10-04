# Eventorbot RepRap printer

## Identity

Eventorbot is an open-source printer design with a single steel frame. The RepRap wiki describes its goal as a rigid, low-cost machine with many printable parts.

## Wiki evidence

- [RepRap Eventorbot](https://wiki.reprap.org/wiki/Eventorbot): dimensions, parts list, drawings, upgrades, videos and assembly sequence.
- [Eventorbot 1.2 parts list — RepRap](https://reprap.org/wiki/Eventorbot_1.2): motors, endstop-switch count, controller-board BOM option, DC jack/supply, and hotend resistor.
- [Sanguinololu — RepRap](https://reprap.org/wiki/Sanguinololu): 1.3a board features, driver sockets, endstop header contacts and revision boundary.
- [RepRap machine index](https://reprap.org/wiki/RepRap_Machines): model catalog.

## Specifications and operation

The wiki lists a 152 × 152 × 152 mm print volume, 37 printed parts and 1.5 mm sheet steel frame stock. It links engineering drawings and sequential tutorials covering frame, X, Z, extruder and Y assembly. The wiki also describes a dual-extrusion upgrade. These are design-level notes, not verification of a physical machine.

## Pinout and visuals

The RepRap Eventorbot 1.2 parts list is more specific than the earlier excerpt. It names three four-wire NEMA 17 motors, a geared PG35L-048 extruder stepper, four push-button momentary endstop switches, a panel-mount 5.5 × 2.1 mm DC jack, a 12 V / 5 A supply (12 A if the optional heated bed is used), and a hotend resistor rated 5.6 Ω / 5 W. It also lists a Sanguinololu 1.3a motherboard with stepper drivers. These are design-BOM facts, not proof of the exact parts installed in any physical Eventorbot.

The Sanguinololu RepRap page describes four X/Y/Z/extruder stepper-driver sockets and its 1.3a connector options. It specifies three-position endstop headers: the two outside positions are GND and SIG (their left/right order is not stated in the prose), while the middle position is selectable between 5 V and supply voltage by the `Stop Volt` solder link. Its revision history says 1.3b2 changed those three-position headers to four-position CD-ROM headers, so that later form is not copied into the Eventorbot's listed 1.3a board reference. The board page also describes a two-position supply screw terminal and an optional ATX-4 input; neither establishes which power option was built into a particular machine.

The diagram therefore separates the listed machine motors, switches, hotend and power-jack group from an optional Sanguinololu 1.3a board reference. The four motor leads are shown as editorial conductor slots only; no connector cavity map, coil pairing, switch terminal schedule, jack polarity, fitted board, or SmoothieBox route is established. All shown positions remain OPEN. No dotted route guess is justified by the available wiring evidence.

## Limits

The performance claims about vibration are design rationale, not comparative test evidence. Preserve this distinction when reusing the description. The Eventorbot and Sanguinololu pages describe design variants; no local machine serial, fitted controller, selected power option, harness, connector view, or route has been verified.
