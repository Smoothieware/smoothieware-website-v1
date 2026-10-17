---
layout: default
title: "Single-Channel Small MOSFET output"
permalink: /extensions/single-channel-small-mosfet-output
---

# Single-Channel Small MOSFET output

Switch one 5–24 V DC load using a low-side MOSFET and flyback protection. The external-supply design target is 5 A; it is not a qualified rating. Host-supplied operation is a separate, default-disabled prototype mode, limited to 0.5 A only after an upstream allocation is authorized.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v22 native/ordinaryassembly0;99checklist unsigned and sourceorder/reverse/backfeed/currentthermal/fuse/host/stock/physical open.

## Interfaces and wiring

### Inputs

- One white polarized/latching Molex KK-254 three-pin connector: pin 1 Ground, pin 2 host 5–12 V, pin 3 Signal. The selected 22-27-2031 header is polarized to its intended mate, but the manufacturer lists no separate keying feature. Harness fit and reverse-insertion rejection remain release gates; generic unkeyed plugs are not acceptable substitutes.
- One 3.5 mm 5–24 V DC power terminal.

### Outputs

- One 3.5 mm two-pole load terminal.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- At least 5 A is the external-source target, subject to connector/copper/thermal validation; do not print a 5 A or historical 7 A qualified maximum.
- Signal must be a buffered 5 V level: HIGH 4.75–5.25 V, LOW at most 0.4 V, driver capable of at least 100 mA transient source/sink. A native 3.3 V GPIO is not within this prototype contract.
- Initial PWM qualification starts at no more than 1 kHz. No higher frequency is qualified by this document.
- Both supplies need common ground and overload/short protection. The external input permits static reverse connection down to −24 V in the proposed topology; this is not a standardized surge or automotive qualification.
- The host-load link is open by default. Its 0.75 A fuse is fault protection, not a precise 0.5 A current limiter or an upstream budget approval.
- MOSFET VDS needs margin above 24 V plus transients; the historical ZXMN4A06 is prior art, not an automatic selection.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Two independent ideal-diode branches replace the historical diode OR because a silicon/Schottky series diode dissipates substantial power at 5 A. The selected topology blocks static reverse current and reversed external polarity within its stated limits. Finite leakage and switching transients are not zero by definition and must be measured. Never energize AC, opposing input surges, missing/common-ground faults, voltages above the operating contract, or an unlimited short-circuit source. Static opposite inputs differ by at most 48 V; this does not qualify arbitrary transient combinations.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/component-review.md). Retain dual LM74700 ideal-diode branches and60/100VpowerFETs. Existing Q4 V2generic2N7002/SOT23 and V1 Molex connector family retained;0805supports not0402stock dropins,no successor. Current selected v22; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/single-channel-small-mosfet-output`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v23, v24, v25. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v23, v24, v25**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### small-mosfet

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/attempt/versions/v25/small-mosfet.kicad_pcb), SHA-256 `e4ab0fa990eb10fda71ce1fa5ed19cc0ccbe57d711c225d9c28621b2c87964af`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal board-specific render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/attempt/versions/v25/renders/fancification-render-manifest.json): 3 images; source current; image hashes match; inspect the linked model and visual qualification findings.
- [PH-host board-specific render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/attempt/versions/v25/renders/fancification-render-manifest.json): 3 images; source current; image hashes match; inspect the linked model and visual qualification findings.
- [bare board-specific render record](https://github.com/arthurwolf/extension-boards/blob/main/src/single-channel-small-mosfet-output/attempt/versions/v25/renders/fancification-render-manifest.json): 3 images; source current; image hashes match; inspect the linked model and visual qualification findings.

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v26 — 2026-10-13

Protected source v25; current PCB SHA-256 `86e73634fe77d8f01c5cafe497a2199bd2428e8cfb1ca162667993f7cae7631b`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 1 PCB warnings. Electrical geometry, project rules and 73 historical files unchanged. Verified 154 model entries, 17 exports and 12 current population views, all inspected. Full documentation URL readable. PH-host carries 5-12V and is not STEMMA; body partly obscures front legend, rear map retained Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Terminal correction state and remote recovery — 2026-10-14

The final local finishing pass completed with **0 native errors, 30 open connections and 0 schematic-parity differences**, using the existing 0.25 mm relevant-net clearance/track-width rules. It connected the EXT_ILIM and REV_LED_R branches; 20 other attempted branches were withheld. The 60 × 50 mm study is **unaccepted**; no v27 PCB was promoted. The terminal source SHA-256 is `daf8872b2d200cb21a626b58461e761fde2943fa74abf534ef78291f1d7e72ef`. Its source and terminal diagnostics were copied into a marked remote-recovery input checkpoint while holding the actual source file open. Full routing, the remote zero-violation gate, manufacturing exports and final renders remain incomplete.

New PCB computation uses the pinned remote whole-job runner only. The portable native warning-repair helper is prepared as source; execution and its same-font title repair remain unverified. The remote runner itself must pass its isolated synthetic routing/publication qualification before production repairs continue. **Acceptance and fabrication release remain false.**

## Remote native-only recovery readback — 2026-10-14

The immutable remote diagnostic run (receipt `2596f59e5d0e4801b6bc372e135b0a23`, exit 0) verified the frozen local symbol/footprint closure and explicitly bundled Montserrat Black font. The compact source has **0 rule errors, 30 opens, 0 parity differences and 66 warnings**: 16 silkscreen overlaps, 11 silkscreen-over-copper findings, 1 hole-spacing finding, 12 dangling tracks and 26 dangling vias. ERC has zero findings. Diagnostic execution success is not native acceptance.

The native-only power repair (receipt `a9a3a0c35b8e49fcb839fdede39d9aec`, exit 1) joined the parallel EXT_RAW pads with a 1 mm conductor and reduced opens to **28**, with **0 rule errors, 0 parity differences and 66 warnings**. All original track identities/nets were retained. The partial result SHA-256 is `31d33ac435c3254ff0a4e4128ec3c3f640331402c7b4042bf9d7089b9f76bad8`; it remains unpublished remotely. The EXT_IDEAL join did not reduce opens and was withheld. Native-constrained attempts found no available current-width path for the LOAD_PWR tap/clamp and HOST_RAW supply, and no legal existing-layer transition or clear endpoint for the two HOST_FUSED branches. No clearance, width or layer-count relaxation was applied.

The isolated routing qualification is still unsuccessful: its verified FreeRouting jar requires Java class version 69 (Java 25), while the runner pins Java 21/class version 65. Native-only KiCad work is available with explicit library/font closure; Java routing remains unavailable pending runner dependency reconciliation. The zero-violation publication gate correctly rejected the partial power repair. No v27 source, final manufacturing exports or corrected renders have been published. **Acceptance and fabrication release remain false.**

The follow-up opposite-face bridge attempt (receipt `f163b48875204ef2afa9b3442b65a2a8`, exit 1) also ended at **0 rule errors, 28 opens, 0 parity differences and 66 warnings**, with no additional accepted branch. The LOAD_PWR sensing resistor has no legal local layer transition; clamp and host-supply opposite-face routing regions remain disconnected at the required 1 mm and 0.8 mm widths. The HOST_FUSED controller transition and decoupling endpoint remain obstructed. Repeating the same endpoints cannot establish completion: component/fanout rearrangement is still needed. Partial SHA-256 `166a9507a738c060d7b99b83e0d39575d12b9280db1d625ae4eba1edf6d04525` remains unpublished remotely. The helper's optional opposite-face strategy never adds copper layers or relaxes native clearance/current widths. **No acceptance or fabrication release.**

## Grouped divider placement repair — 2026-10-14

Remote receipt `4393d0046a4a48c98db6c300c6d42c6e` (exit 1 at final publication gate) verified R10 at (36, 24) mm and R11 at (32, 24) mm, with a local 0.6/0.3 mm ground via. Rebuilding only the low-current EXT_PGTH back-face feedback paths while retaining the original controller front-face escapes/vias connects the divider without native rule errors. The compact study now has **0 rule errors, 27 opens, 0 parity differences and 66 warnings**, compared with 30 initial opens. All original other-net power conductors remain unchanged. The earlier paired placement at (35, 23) mm was rejected for resistor courtyard overlap; spacing and ground stitching were corrected rather than suppressed. No numbered source or final render was published; zero-violation acceptance and fabrication release remain false.

## Surface-bridge finishing correction — 2026-10-14

Remote signal finishing (receipt `9193e61c92284209a69294e849b047aa`, exit 1) connected HOST_FLT and reduced the compact study to **0 rule errors, 26 opens, 0 parity differences and 66 warnings**. The strict publication gate withheld the partial result. Other branches remain constrained by disconnected routing regions or blocked local transitions. Investigation found that the bridge helper unnecessarily demanded a via even for an endpoint already on the chosen bridge face. The helper now retains that endpoint on its existing face, avoiding a redundant via; a fresh immutable remote repair is pending. No clearance, current width, layer count or acceptance gate changed. **No v27 CAD, final exports or corrected renders are accepted.**

The surface-endpoint correction run (receipt `4b48a8bc8ce04addadedfcfb6a0810b5`, exit 1) retained **0 errors, 26 opens and 0 parity differences**, reducing warnings to **65** (one fewer dangling track; the inherited hole-spacing warning remains). No new hole warning appeared. The next immutable repair uses a 0.05 mm search grid to represent quarter-millimetre controller exits exactly and the unchanged 0.25 mm track/clearance requirements without an extra search-only margin. It includes all-net drill spacing and rejects increases in any warning category. Native acceptance remains false.

The exact-clearance fine-grid repair (receipt `ece0e5316d144af6a262872880cb5fd0`, exit 1) connected EXT_OV and HOST_FLT, reaching **0 rule errors, 25 opens, 0 parity differences and 64 warnings**. The inherited hole warning did not increase. Remaining controller branches now fail reachable-region routing rather than the extra-margin endpoint test. The next remote repair considers existing anchors throughout each same-net connected copper island, including escaped vias. HOST_RTN and LOAD_NEG are explicitly excluded from signal-width routing along with other supply/load nets. No numbered revision is accepted.

The connected-island signal run (receipt `c7a532787a2a44939ddd62db926f73f7`, exit 1) reached **0 rule errors, 22 opens, 0 parity differences and 62 warnings**. It connected EXT_OV, EXT_SLEW, EXT_ILIM, HOST_FLT and REV_VCC. Warning counts are 16 silkscreen overlaps, 11 silkscreen-over-copper findings, 1 inherited hole-spacing finding, 9 dangling tracks and 25 dangling vias. The next isolated repair tests native-gated alternate bridge faces and expands the local transition search radius from 3.5 to 5 mm, nearest first, inside the same 60 × 50 mm outline. Clearance, track and drill requirements remain unchanged. Acceptance remains false.


## Recovered terminal alternate-face check — 2026-10-15

The alternate-face/expanded-transition search (receipt `33fc6f57018143a9a0e377c2c500c7c7`, exit 1) retained **0 rule errors, 22 opens, 0 parity differences and 62 warnings**. It did not improve the connected-island result. Strict native publication withheld the partial PCB. The locally marked immutable study input was subsequently reaped; the authored recovery helpers and original v26/v24 sources remain. A fresh reconstruction must preserve external/host current widths and the 5–12 V PH-host contract. **No v27 PCB, corrected population render or fabrication release is accepted.**
