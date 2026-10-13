---
layout: default
title: "Single-Channel AC solid-state relay output"
permalink: /extensions/single-channel-solid-state-relay-output
---

# Single-Channel AC solid-state relay output

Provide an optically isolated, single-channel AC mains switch targeting 240 VAC and 16 A; the proposed 48 V/30 A DC variant is a separate future board.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10 native/ordinaryassembly0;triac/fuse/PE/insulation/offleakage/heatsink/thermal-link/procurement/physical unqualified.

## Interfaces and wiring

### Inputs

- Low-voltage control signal on keyed 2.54 mm connector.
- Mains line input, nominal maximum 240 VAC.

### Outputs

- Switched line with separate neutral/PE pass-through in the saved terminal candidate; final guarded wiring and enclosure remain unqualified.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Target 240 VAC, 16 A only after component, heat sink, enclosure, fuse, clearance, and regulatory validation.
- DC 48 V/30 A cannot share this SSR topology or document.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Mandatory input fuse, thermal cutoff/monitoring, touch-safe enclosure, surge suppression, strain relief, earth treatment, and standards-derived creepage/clearance.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/component-review.md). Retain isolated AC optotriac/triac,thermalcutoff and sensing. Existing exact V1 Molex J1 and conditional R3 1k10%0603 reuse retained,no successor. Current selected v10; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/single-channel-solid-state-relay-output`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### ssr-ac-out

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/attempt/versions/v13/ssr-ac-out.kicad_pcb), SHA-256 `d439c4d7e0fdf97b99623ca78ceba03ec8038c7a9a99d9c09925c38c09ad6a45`.
- Last native check: **20 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/attempt/versions/v13/populations/ssr-ac-out/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-solid-state-relay-output/attempt/versions/v13/ssr-ac-out-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v15 — 2026-10-13

Protected source v14; current PCB SHA-256 `a9a3ad2b99f623ff2511fb501cf348dc9666d1da85b4c49fdac78559a48cda32`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 1 PCB warnings. Electrical geometry, project rules and 80 historical files unchanged. Verified 23 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Mains safety/current/creepage/thermal qualification open; existing isolation lands and warning text preserved Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.
