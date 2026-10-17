---
layout: default
title: "Gate boards"
permalink: /extensions/gate-boards
---

# Gate boards

{% include extension-board-visuals.html slug="gate-boards" %}

Family of deterministic logic-combination boards for ordinary endstop, interlock, and manual-control signals.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10/32 purchasing identities/122 selected/326 historical hashes match; retained native0; STEP/host/fault/physical open.

## Second-round AND-2 candidate — 2026-10-13

The additive **v18 AND-2 candidate** keeps the protected v17 circuit, connector
alternatives, two copper layers and nominal 48 × 40 mm outline. It improves the
revision titles, logic/wiring guidance and silkscreen placement without adding
components. The board links to this page on its back silkscreen.

Current enabled-rule checks report zero electrical/design-rule errors, open
connections and schematic-parity findings. Seven design-rule warnings and one
inherited electrical-rule footprint-link warning remain. Five inherited PCB
categories are ignored: footprint-filter mismatch, footprint-type mismatch,
missing courtyard, non-plated hole inside courtyard and plated hole inside
courtyard. These checks do not qualify protection, assembly, connector fit,
thermal behavior or host compatibility. Independent review verified the final
source, all 12 connector-population image hashes and views, and the readable
back-face URL. No size reduction, price saving or fabrication release is claimed.

The candidate offers mutually exclusive **2.54 mm Molex-style** and **3-pin
STEMMA JST-PH** connector populations on the same PCB. The PH pin order is
GND, +5 V, signal; it differs from the legacy input order. This is three-wire
STEMMA, not the four-pin STEMMA QT I²C interface. Use the numbered pad maps below
and verify connector viewing direction before making a cable.

## Interfaces and wiring

### Inputs

- Two protected standard input channels per simple board
- Two Y sockets for a seven-lane variant

### Outputs

- One standard output or one Y socket carrying combined lanes

### AND-2 candidate connection contract

Numbers below are the native PCB pad numbers, not an assumed left-to-right
cable view. Use this table for the three-pin AND-2 candidate; the ten-pin
Gadgeteer mapping in the historical seven-lane proposal is a different variant.

| Connector / population | Pin 1 | Pin 2 | Pin 3 |
| --- | --- | --- | --- |
| J1 input A, 2.54 mm | A_RAW | GND | +5 V |
| J2 input B, 2.54 mm | B_RAW | GND | +5 V |
| J3 output, 2.54 mm | GND | +5 V | OUT |
| J1/J2/J3, 3-pin STEMMA PH | GND | +5 V | A_RAW / B_RAW / OUT |
| J4 power input | VIN | GND | — |

Pin maps describe the candidate schematic and PCB. They do not establish
measured current ratings or permission to connect an unresolved host interface.
The inherited 250 mA total / 200 mA output legends are design-study claims,
not newly measured operating limits. Do not populate both overlapping connector
bodies simultaneously.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Standard inputs use Signal/Ground/5V order and 5 V-tolerant conditioning
- Standard output uses Ground/5V/Signal, 5 V ≥100 mA, and 10 kΩ pull-down when it is an active output
- Logic family and VIH/VIL must cover conditioned domains

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- Per-input series resistance, RC debounce/filter, and clamps
- 10 kΩ output pull-down per standard output
- No back-power path through an unpowered input

## Selected component architecture

[Selected v10 review](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/component-review.md) reconciles all32 purchased identities and existing v09 C3/C4 0603 stock-family migration. Retain gate/load-switch architecture; no successor. Historical conversion proposal is already implemented. STEP/host/fault/127 unsigned checklist/physical gates remain open.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Assess a third shared jack option on eligible endstop-style ports, with separate header, keyed-connector and jack renders; preserve safe insertion behavior and document any fit exception.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/gate-boards`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Historical first-program candidate readback

The first program added **v11, v12, v13**. The readback below describes v13 at that program's snapshot; it is not the current v18 candidate described above. Saved CAD and renders do not release the hardware.

### and2

- [Historical v13 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/attempt/versions/v13/and2.kicad_pcb), SHA-256 `f121f4cccde6909b1c2b35adf5edabc0b9535913549745ffda9166fac220195c`.
- Last native check: **5 errors**, including **1 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J2 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`; J3 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`; J1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/attempt/versions/v13/populations/and2/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/attempt/versions/v13/populations/and2/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/gate-boards/attempt/versions/v13/and2-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Historical seven-lane connector proposal

The following ten-pin draft applies only to that separate proposal, not to the
AND-2 candidate described above. Target-host mapping remains unresolved.

### Ten-pin draft connection contract

The canonical repository connector contract is pin 1 = +3.3 V, pin 2 = +5 V, pin 10 = GND. Current Smoothie V2 Prime web material appears to describe a conflicting header assignment; the physical target header must be continuity-checked against its authoritative schematic before KiCad release. The table below expresses design intent against the repository's canonical contract, not proof of the live board pinout.

|  Pin | Canonical role        | Assigned function            |
| ---: | --------------------- | ---------------------------- |
|    1 | +3.3V                 | +3.3 V rail                  |
|    2 | +5V                   | +5 V rail                    |
|    3 | GPIO! / type-specific | Lane 0 combined output/input |
|    4 | type-specific         | Lane 1                       |
|    5 | type-specific         | Lane 2                       |
|    6 | type-specific         | Lane 3                       |
|    7 | type-specific         | Lane 4                       |
|    8 | type-specific         | Lane 5                       |
|    9 | type-specific         | Lane 6                       |
|   10 | GND                   | Ground                       |

## Trusted-power layout review — 2026-10-13

The AND2 V18 board already places its power circuitry compactly on both faces of a 48 × 40 mm board. The user-wired J4 supply remains an untrusted input; its existing protection and functional power circuitry are retained. This review does not create another revision merely to relocate already integrated circuitry. Fresh native checks found zero electrical errors, zero open connections and zero schematic parity errors; physical operation and fabrication qualification remain open.
