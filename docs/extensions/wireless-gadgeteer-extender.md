---
layout: default
title: "Wireless Gadgeteer extender"
permalink: /extensions/wireless-gadgeteer-extender
---

# Wireless Gadgeteer extender

Paired seven-channel sampled digital-I/O radio endpoints with explicitly configured channel directions.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Retained ERC/DRC/opens/parity and assembly-shape checks zero;83 checklist items unsigned. Firmware/link-loss, RF, host budget, exact stock and physical qualification open.

## Interfaces and wiring

The retained v12 uses an MDBT42Q module with integrated nRF52832 for sampled seven-channel digital I/O. Channel directions are configured explicitly; no external nRF24 radio or expander is required by this selected architecture.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

Gadgeteer GPIO is 3.3 V logic. Radio supply peaks, bias states, direction contention, pairing, firmware and link-loss safe states require qualification. It is not a transparent analogue, PWM, SPI, I²C, STEP/DIR or safety-interlock replacement.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/component-review.md). Retain v12 integrated MDBT42Q nRF52832 sampled seven-channel architecture; no external radio/expander needed. Conditional V1 C2 bypass reuse; final bias/LED values preserved. No successor. Current selected v12; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/wireless-gadgeteer-extender`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### wireless-gadgeteer-extender

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/attempt/versions/v15/wireless-gadgeteer-extender.kicad_pcb), SHA-256 `249643da6d382ded8c911c67e3f2365d68f2e58c7ccccf1c3ca56da00553a888`.
- Last native check: **7 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/attempt/versions/v15/populations/wireless-gadgeteer-extender/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/attempt/versions/v15/wireless-gadgeteer-extender-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v19 — 2026-10-13

Protected source v18; current PCB SHA-256 `7cc492849c362ed2d2a481624ab3cf8c247aac8725129ad46560462c733fecf3`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 18 PCB warnings. Electrical geometry, project rules and 61 historical files unchanged. Verified 29 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited rear instruction and reference overlaps remain; antenna keepout and voltage restrictions preserved Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
