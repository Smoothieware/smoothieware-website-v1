---
layout: default
title: "Buzzer module"
permalink: /extensions/buzzer-module
---

# Buzzer module

{% include extension-board-visuals.html slug="buzzer-module" %}

A small audible indicator for a Smoothieboard v2 (or any 3.3 V / 5 V controller). One control signal turns a
buzzer on. It gives a machine an audible "job done", "alarm", "probe touched" or "door opened" cue without
any firmware work beyond switching one output.

The source document lists only the words "Buzzer module" under OTHER IDEAS. Everything below is the
project's own definition of that idea; the nine open points in `src/questions/buzzer-module/questions.md` are
answered in the table at the end of this file.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Enabled native checks0;five ignored categories,130unsigned and physical/host/acoustic gates open.

## Interfaces and wiring

### Inputs

| Input | Connector | Signal | Levels |
| --- | --- | --- | --- |
| Gadgeteer control | J1 (Y socket, 2x5, 1.27 mm) pin 3 | active-high GPIO, host side | 3.3 V logic (V2), 0 V low |
| Header control | J3 (3-pin 2.54 mm) pin 3 | active-high, host side | 5 V / 100 mA host output, or 3.3 V; host holds it low with its own 10 k pull-down |
| Power | J1 pin 2 (+5 V) or J3 pin 2 (+5 V) | shared host regulator | 4.5-5.5 V (buzzer operating range 4-7 V) |

### Outputs

- One active magnetic buzzer, 12 mm diameter, 9.5 mm high, 85 dB at 10 cm (Same Sky CMI-1295-0585T,
  datasheet read in this repository: 5 V rated, 4-7 V operating, 30 mA typical at 5 V, 2.0-2.6 kHz).
- Chain socket J2 repeating J1 pin for pin.

### Connection contract

Viewed from the front, notch at the bottom (repository interface standard). Pin 1 is +3.3 V, pin 2 +5 V, pin 10 GND on every socket.

| Pin | Y socket function | J1 (host) on this board | J2 (chain) |
| ---: | --- | --- | --- |
| 1 | +3.3 V | unused, forwarded | direct copper |
| 2 | +5 V | JP1 pad 1 (buzzer power, default); forwarded | direct copper |
| 3 | GPIO | **buzzer control**, D1 anode 1; forwarded through JP2 | through JP2 |
| 4-9 | GPIO | unused, forwarded | direct copper |
| 10 | GND | ground | direct copper |

3-pin header J3 (viewed from above, pin 1 at the left of the row): 1 = GND, 2 = +5 V, 3 = SIGNAL.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Buzzer current: 30 mA typical at 5 V (datasheet), contract ceiling 60 mA. This is about 2 % of the shared
  ~3 A host 5 V regulator, and well inside any Gadgeteer contact rating, so no per-board allocation problem
  arises; the host's real per-socket allowance remains unresolved (family-wide).
- Switching element: 2N7002 N-MOSFET, low side (gate threshold 1.0-2.5 V, so it is enhanced by a 3.3 V
  signal after a Schottky drop; on-resistance is specified at 5 V gate, bench check required at 3.1 V).
- Signal combining: BAT54C dual Schottky, common cathode (Vf below 0.5 V at 30 mA, 30 V reverse): a pin that
  is high turns the buzzer on; a pin that is low or unpowered cannot sink the other.
- Floating, reset or host-unpowered control input: silent, because 100 k holds the gate node low.
- The buzzer's internal driver and coil pulse the 5 V rail; a 100 nF capacitor sits at the buzzer supply. No
  bulk capacitor is added to the shared rail (family rule).

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

No TVS or fuse is added. Exposure: board-to-board Gadgeteer (no field cable) and a 3-pin header that a user
cables to a host output. The buzzer current (30 mA) is well below the Gadgeteer contact rating and the header
cable rating. A wrong-way 3-pin cable puts the host signal on `+5V_HDR`: with JP1 open on that side (factory)
the rail is not connected to the buzzer, and the signal pin of the other host would need to be mis-wired to
J3 pin 1 or 2 to cause damage. Reversed-cable and hot-plug behaviour are bench items.

## Selected component architecture

[Complete component review](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/component-review.md): actualv10 retains v03 DMN2056U low-gate upgrade and stock-compatible passive options; no successor. Five ignored native categories and physical/host/acoustic/reservoir gates remain open. Prior design text is historical where superseded by the current contract.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/buzzer-module`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### buzzer-module

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/attempt/versions/v13/buzzer-module.kicad_pcb), SHA-256 `bdda8ce4e3d7a0c3c4a0534afbf887345ae29ecf86b8bc7f8ebefbd88dd510d6`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J3 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/attempt/versions/v13/populations/buzzer-module/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/attempt/versions/v13/populations/buzzer-module/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/buzzer-module/attempt/versions/v13/buzzer-module-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v14 — 2026-10-13

Protected source v13; current PCB SHA-256 `6bc77eda610bb58ec562285216d892c781092cf5743c45742f3bd0db7fafa9a0`. Fresh native checks have zero enabled errors/opens/parity/ERC findings and 5 PCB warnings. Exact electrical geometry and project rules unchanged; 40 historical files, 20 model entries,17 exports and 12 current population views verified and inspected. Full documentation URL readable. Both full J3 pin mappings and back title now fit; four title-weight warnings and one dangling supply via remain. No area or priced saving claimed; physical qualification remains open.
