# Bambu Lab P1S

**Evidence depth:** Appropedia provides catalogue identity only. Bambu Lab's exact-model Quick Start Guide supplies component, interface and specification facts; replacement-part listings add family-scoped cable details. No exact installed P1S board/cable revision, harness map or machine-to-SmoothieBox route is established.

## Catalogue identity

The Appropedia Open Source Machine Tools catalogue names the Bambu Lab P1S in its popular-models paragraph but provides no P1S-specific dimensions, operation, controller revision or wiring map.

## Manufacturer P1S Quick Start Guide

The official P1S Quick Start Guide (document `Y.BC.SM.A00201-01`, 16 pages; PDF SHA-256 `17454c07d0a3986d43a573e2fbb8cebe22f6621106b620a44f5598b64b32f505`) labels the rear USB port, four-pin Bambu Bus port and power socket. Its component drawing also labels the Micro SD card, screen and LCD cable installation. These are named interfaces/components only: the guide does not publish a connector face, cavity numbering or a pin-to-signal schedule for these interfaces. The guide's four-pin Bambu Bus count supports four editorial contact rows; row numbers here are inventory indexes, not source-stamped cavity numbers.

The guide lists input voltage 100–240 VAC, 50/60 Hz; maximum power 1000 W at 220 V and 350 W at 110 V; USB output 5 V / 1.5 A; Wi-Fi, Bluetooth and Bambu Bus connectivity; Micro SD storage; and a Dual-Core Cortex M4 motion controller. Those specifications do not establish a cable pinout or safe SmoothieBox connection. The power socket is mains context only and is not a SmoothieBox wiring endpoint.

The guide's specification table names five closed-loop controlled fan functions: part cooling, hot end, control board, chamber temperature regulator and auxiliary part cooling. It gives no fan connector counts, pin functions, voltage/current per connector or harness map. These are shown as functional context only.

## Supplemental P1-series replacement-cable references

Bambu Lab's P1 Series Toolhead Cable listing says the cable connects the toolhead headboard to the motion-control mainboard and carries power and data. It gives a 6-pin 1.25 mm plug and a 12-pin 0.8 mm board-to-board plug, but no contact functions, numbering orientation, fitted P1S revision or mapping to this atlas installation. The two ends are enumerated independently below; their endpoint identity remains unassigned.

The Heatbed Signal Cable listing describes a double-ended 6-pin 1.25 mm cable, 555 ± 5 mm long, connected to the hotbed sensor for temperature measurement and leveling. Each end therefore has a six-position contact inventory, but the listing does not identify individual signals, end-to-board assignment or fitted P1S revision. Positions 1–6 below are editorial indexes only.

All 34 counted contact positions in this profile remain OPEN: 18 toolhead-cable end positions, 12 heatbed-signal-cable end positions and four Bambu Bus port positions. No route or guess is supported. The user guide's USB, mains socket, LCD cable and Micro SD interfaces have no source-published contact map here. This record does not identify stepper-driver terminals, endstop wires or an external DB25 connector; do not transfer generic printer, USB, Bambu Bus or controller pinouts to this machine.

## Sources

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue identity only.
- [Bambu Lab P1S Quick Start Guide](https://cdn1.bambulab.com/documentation/quick-start-59b0cefdc0fc4/P1S/English%20version-Quick%20Start%20Guide%20for%20P1S.pdf) — official manufacturer guide; component drawing page 3; cooling specifications page 13; electrical/interface specifications page 14.
- [P1 Series Toolhead Cable — Bambu Lab](https://us.store.bambulab.com/products/p1-series-toolhead-cable) — family cable group and plug formats; no contact assignment.
- [Heatbed Signal Cable — Bambu Lab](https://asia.store.bambulab.com/en/products/heatbed-signal-cable) — family cable group and six-pin plug format; no contact assignment.
