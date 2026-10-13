---
layout: default
title: "Raspberry Pi Zero breakout"
permalink: /extensions/raspberry-pi-zero-breakout
---

# Raspberry Pi Zero breakout

Mechanically stack a frozen Raspberry Pi Zero-family board with Smoothie V2 and connect 3.3 V UART plus a safe 5 V supply.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v12 fails original 5V minimum and 2.5A Pi target; 1.244A mux limit is typical only. USB backfeed/source sequencing, thermal and host allocation are unqualified; via-in-pad and TP1 annular overlaps need accepted assembly process or redesign.

## Interfaces and wiring

### Inputs

- U Gadgeteer UART.
- Optional external 5–24 V DC input.

### Outputs

- Raspberry Pi 2×20 header UART and 5 V connections.

### Connection contract

The table below uses the repository-canonical connector rule: pin 1 is +3.3 V, pin 2 is +5 V, and pin 10 is GND. **Do not release a schematic from this table until it is reconciled pin-by-pin with the current V2 Prime connector implementation; current web documentation presents a conflicting ordering.**

|  Pin | Function          | Design note                                                        |
| ---: | ----------------- | ------------------------------------------------------------------ |
|    1 | +3.3 V            | Canonical fixed rail.                                              |
|    2 | +5 V              | Canonical fixed rail.                                              |
|    3 | GPIO!             | Board mapping; validate against current V2 hardware before layout. |
|    4 | TX                | Board mapping; validate against current V2 hardware before layout. |
|    5 | RX                | Board mapping; validate against current V2 hardware before layout. |
|    6 | GPIO/pass-through | Board mapping; validate against current V2 hardware before layout. |
|    7 | UN                | Board mapping; validate against current V2 hardware before layout. |
|    8 | UN                | Board mapping; validate against current V2 hardware before layout. |
|    9 | UN                | Board mapping; validate against current V2 hardware before layout. |
|   10 | GND               | Canonical fixed rail.                                              |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Current Zero 2 W reference requires 5 V/2 A; Gadgeteer 5 V cannot be assumed adequate.
- A 5–24 V input requires a switching regulator, not an unspecified LDO over the full range.
- Both boards' 5 V rails need reverse-current protection.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Reverse polarity/fuse on external input, surge protection, thermal/current limit, no-backfeed load switches, UART ESD/series resistors.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/component-review.md). Retain LMR51430/TPS2113A/SN74LVC1G17 roles and exact selected parts; no substitution supported. Conditional matched bypass/passive families only; no new revision. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/raspberry-pi-zero-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

## V15 input-protection study

The third additive candidate replaces the external-input fuse with an
LTC4368-2 electronic breaker and reverse-blocking MOSFET pair. It adds separate
fault, overvoltage and reverse-polarity indicators, a reverse-only blinker,
soft start and individual indicator-disable solder links. The Pi connector,
original mounting positions and existing supply selector are retained.

This is an enlarged 76 × 90 mm routing study. Current limits, startup, thermal
behavior, power-source sequencing and antenna/enclosure clearance remain
unqualified; the inherited host and Pi power-budget limitations still apply.
Use the revision-specific source and checks linked above. Do not interpret
this study as a tested power rating or fabrication release.

### Latest V15 CAD review, 2026-10-12

The latest saved candidate has zero native geometry errors and zero schematic-parity failures, with **3 connections still open**. Six assembly views were regenerated from that source; the reviewed top view shows the entire enlarged study. Placement and protection-part net records were refreshed. These results do not establish continuity, a current rating, enclosure fit or hardware protection behavior. Compaction and consistent title typography remain open.

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### rpi-zero-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/attempt/versions/v15/rpi-zero-breakout.kicad_pcb), SHA-256 `f7cc7120ecffd985bbc8f4f52b94cf138e56ab48000f4d019852eeb1f7db9552`.
- Last native check: **3 errors**, including **3 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/attempt/versions/v15/populations/rpi-zero-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/raspberry-pi-zero-breakout/attempt/versions/v15/rpi-zero-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v17 — 2026-10-13

Protected source v16; current PCB SHA-256 `69f71b3001dcbff470224b60c3fb9a28dab5ef3abec49b7f98a667bb8586f7f7`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 113 historical files unchanged. Verified 75 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited documentation URL is small; physical printed readability unqualified Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Terminal correction state and remote recovery — 2026-10-14

The best historically verified 76 × 50.1 mm study had **0 native errors, 13 open connections and 1 inherited schematic-parity difference**. Later local controller-fanout preparations failed at a sensing transition and were not promoted. The earlier scratch PCB/result folders were removed by the configured scratch reaper; those historical diagnostics are not a claim that the corresponding scratch CAD remains retained. No v18 PCB was promoted. Recovery must use retained numbered sources and portable helpers, followed by the required remote zero-violation gate, exports and all final views.

New PCB computation uses the pinned remote whole-job runner only. The portable native warning-repair helper is prepared as source; execution and its same-font title repair remain unverified. The remote runner itself must pass its isolated synthetic routing/publication qualification before production repairs continue. **Acceptance and fabrication release remain false.**
