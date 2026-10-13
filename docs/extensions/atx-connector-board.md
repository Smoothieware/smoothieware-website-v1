---
layout: default
title: "ATX connector board"
permalink: /extensions/atx-connector-board
---

# ATX connector board

Adapt a specifically supported ATX supply to Smoothie-compatible power connectors and controlled startup.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Current retained **v12** is a conditional CAD-clean routing repair; the earlier blocked draft below is historical context. See [complete IC/stock review](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/component-review.md) for all56 references, existing DMN2056U-7 upgrades and conditional V1 resistor reuse. No new version added. Standard24-pin ATX only; 12V10A/5V3.75A/standby1.5A remain unqualified targets. Native Prime2590 evidence resolves the old CAD rail-numbering conflict; physical mating and host allocation remain open. J_C is point-to-point forwarding, JP3/4 factory open, not a shared bus.

Board-specific qualification limits: Native clean retained; TP10 annular/U1 return/104 checklist/stock physical gates open.

## Interfaces and wiring

The selected study is for a standard 24-pin ATX supply, with open-drain PS_ON# control and PWR_OK conditioning. It does not support ATX12VO. Rail routing, startup control and output connector orientation must follow the selected native contract.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

12 V at 10 A, 5 V at 3.75 A and standby at 1.5 A remain study targets rather than released ratings. Confirm host rail mapping physically; the retained source resolves a prior CAD-numbering issue without proving cable mating or real supply sequencing.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/atx-connector-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

## V15 protection study

The third additive candidate replaces all three disposable DC fuse footprints with independent electronic protection.12V uses an external-FET bidirectional breaker;5V and standby use integrated reverse-blocking eFuses with thermal shutdown and automatic retry. Each rail has separate reverse-blink, fault and OV indicators, each with its own disable jumper. The original ATX/host connectors and mounting datum are preserved.

This enlarged74×129.5mm study is still being routed and is not a released assembly.10A/3.75A/1.5A remain unqualified targets; current-limit tolerance, transient energy, FET SOA, temperature, visible blink, cable fit and compaction require verification. See the [current per-board work record](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/fancification.md) before using any render or manufacturing file.

### Latest V15 CAD review, 2026-10-12

The latest saved candidate has zero native geometry errors and zero schematic-parity failures, with **35 connections still open**. Six assembly views were regenerated from that source; the reviewed top view shows the entire enlarged study. Placement and protection-part net records were refreshed. These results do not establish continuity, a current rating, enclosure fit or hardware protection behavior. Compaction and consistent title typography remain open.

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### atx-connector-board

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/attempt/versions/v15/atx-connector-board.kicad_pcb), SHA-256 `a7e244c88552edde88fc1154c719cb44b91f882002ebacda63988c3d4df8d582`.
- Last native check: **35 errors**, including **35 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/attempt/versions/v15/populations/atx-connector-board/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/attempt/versions/v15/atx-connector-board-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v19 — 2026-10-13

Protected source v18; current PCB SHA-256 `87a9cc38b5650988095f3c24836aad7657032c37c0b6b39238e00c2f7783509c`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 25 PCB warnings. Electrical geometry, project rules and 94 historical files unchanged. Verified 119 model entries, 17 exports and 6 current population views, all inspected. Full documentation URL readable. Inherited dense connector annotations remain Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Trusted ATX input correction — 2026-10-13

The maintainer now classifies the supported standard keyed ATX power supply as a trusted source. The added 12 V, 5 V and standby-5 V electronic protection annex is therefore unnecessary and is removed in additive **v20**. This supersedes the protection requirements and enlarged-board descriptions in the historical candidate sections above.

The new candidate restores **74 × 49.5 mm**, removes 102 redundant protection components, and directly connects corresponding ATX/output rails without restoring disposable fuses. PS_ON control, PWR_OK conditioning, existing connector positions, test pads and four individual LED-disable links remain. Full native checks now report zero PCB errors, zero open connections, zero schematic-parity findings and zero ERC findings, with 12 PCB warnings. The LED disable links are compact front copper cut/rebridge necks requiring no purchased component. Six fresh native views were inspected, with no unresolved models, and Gerber/drill/position/schematic exports completed; current capability, physical fit, cut/rebridge usability and hardware behavior are not qualified. See the [trusted-power work record](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/trusted-power.md).

[Compact v20 renders and model provenance](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/attempt/versions/v20/populations/atx-connector-board/normal/population.json) · [Native check receipt](https://github.com/arthurwolf/extension-boards/blob/main/src/atx-connector-board/attempt/versions/v20/trusted-power-native-checks.json).
