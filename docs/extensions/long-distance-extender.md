---
layout: default
title: "Long distance extender"
permalink: /extensions/long-distance-extender
---

# Long distance extender

Carry one or three selected Smoothieboard signals and low-voltage power over a 10 m-class twisted-pair cable using a defined differential physical layer.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v10 pair retained native0 with five ignored categories,2pass130unsigned each;two blank ≥1kV capacitor identities,350mA host/cable assumptions and physical gates open.

## Interfaces and wiring

### Inputs

- Emitter: one Y socket using three selected GPIO signals, plus optional 2.54 mm 5 V/GND/signals header.
- Receiver: RJ45 differential link and protected remote power.

### Outputs

- Emitter: keyed non-Ethernet-labelled RJ45.
- Receiver: three reconstructed 3.3 V-safe signals and optional local breakout header.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Do not implement the proposal's undefined 5 V/-5 V scheme.
- Select an RS-422/RS-485-class transceiver only after direction, common-mode range and rate are frozen.
- Meet the 10 m goal at the maximum required transition rate with measured margin.
- Fuse/current-limit cable power and prohibit 5 V signalling into 3.3 V V2 inputs.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/component-review.md). Retain v10 raw differential endpoints; protocol-specific IC alternatives change the interface. Conditional support passives only; ≥1kV capacitor identities and host/cable/physical gates remain open. No successor.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/long-distance-extender`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### emitter

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/emitter/emitter.kicad_pcb), SHA-256 `f91c5bd276d803ec2823e05ea52987c5ecf12e68de242b69aa21dd5c4477dff2`.
- Last native check: **11 errors**, including **11 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/emitter/populations/emitter/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/emitter/emitter-fancification-revision.md).

### receiver

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/receiver/receiver.kicad_pcb), SHA-256 `cdeee3a60febe70c2829bc41bffdba3249fb253b2866d5cc90df3f43cc644a4a`.
- Last native check: **2 errors**, including **2 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/receiver/populations/receiver/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v13/receiver/receiver-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- owned-protection-circuit:start -->

## Selected-direction power protection in v13

Both native v13 boards now contain a TPS259470AR automatic-retry electronic breaker with integrated back-to-back reverse blocking, thermal shutdown and 22 nF startup control. A TPS3700 comparator supplies distinct OV cutoff/amber indication; a floating LMC555 blinks the reverse warning, and FAULT has a separate indicator. Every indicator has its own disable link. F1 on the emitter is now a 0 ohm assembly feed instead of the former 0.5 A PTC; the receiver's original 0 ohm F1 remains explicitly an assembly feed, not a fuse. The IC and selected links are the actual protected power path.

Four mutually exclusive links select direction through the breaker. SOURCE uses R1980/R1981; SINK uses R1982/R1983. Default assembly: emitter SOURCE, receiver SINK. For the previously documented receiver-to-cable REVPWR mode, fit emitter SINK and receiver SOURCE, and leave emitter JP1 OPEN. Change both pairs only with all power disconnected. Never fit SOURCE and SINK simultaneously or connect independent active 5 V sources. The original JP2-open PS2 mode still isolates cable power and retains local peripheral/host powering. Signal assignments, shared cable return and mating geometry remain unchanged.

The cable continuous-current target remains 200 mA. ILIM is 6.64 kohm / 0.1%; TI publishes 425/500/575 mA endpoints for 6.65 kohm under its 12 V test conditions. That setting is an engineering approximation, not a 500 mA continuous cable rating or a guaranteed 5 V hot trip range. Original local draw plus fault current can exceed the documented 350 mA host allocation; source-fault budget and cable heating require qualification. OV is 5.400 V nominal (5.334233–5.465987 V reference/divider/bias corners), with independent 5.88 V nominal backup OVLO.

The original unidirectional TSD05 D4 would have crowbarred negative raw cable voltage. Its positive terminal is now on protected EFP_OUT, and a bidirectional SMF15CA protects the raw cable. This avoids a steady reverse-input crowbar within the explicitly bounded ±12 V abnormal-input study. SMF15CA has 15 V standoff and 24.4 V maximum clamp at 8.2 A under the specified 25 C / 10–1000 microsecond pulse. Its negative clamp can exceed the eFuse's −15 V absolute limit: negative transients, temperature, source energy, trace inductance and ESD testing remain unqualified. Sustained 48 V passive PoE is not supported. Signal ESD and externally powered peripheral paths retain their original interface restrictions; arbitrary powered-cable abuse is not qualified.

Primary sources: [TI TPS25947](https://www.ti.com/lit/ds/symlink/tps25947.pdf), [TI TPS3700](https://www.ti.com/lit/ds/symlink/tps3700.pdf), [TI LMC555](https://www.ti.com/lit/ds/symlink/lmc555.pdf), and [Littelfuse SMF series](https://www.littelfuse.com/assetdocs/tvs-diodes-smf-datasheet?assetguid=7eb8a5b6-bdd0-4561-8f19-0c3cc6f9b2af). TPS259470 pin map: EN1, OVLO2, AUXOFF3 unused, FLT4, IN5, OUT6, dVdt7, GND8, ILM9, ITIMER10 unused. Pin absmax, direction selection, negative control clamps, source switching and thermal behavior require first-article verification. No manufacturing release.

<!-- owned-protection-circuit:end -->

In the v13 SOURCE assembly, protection covers local-to-cable power; raw local board/LDO power retains its original input restrictions. Default receiver SINK protects cable-to-local power. The reverse LED monitors the selected breaker input. For REVPWR, physically cut emitter JP1’s factory bridge and verify it is open; a DNP flag alone does not open a copper bridge. These are assembly configurations of the same copper, with first-article continuity and source-selection qualification still required.

### Revision 15 engineering candidate

The 2026-10-13 revision 15 package retains both emitter and receiver. Fresh native checks close the receiver’s two open connections with zero enabled receiver errors; all 53 inherited receiver warnings remain. The emitter circuit and copper remain unchanged and retain ten open connections and 71 warnings. Both schematics remain electrical-rule clear. This is a partial repair; parent render inspection and registration are pending.

The receiver’s bounded current-limit/fault-indicator routing preserves all parts, pads, mounting, rules and zone contracts. Both roles have current version labels, six source-bound populated/bare views, fully resolving declared models and regenerated engineering exports. Historical revisions are preserved. The candidate is not ready for manufacture: emitter routing, warning cleanup, physical connector fit, source selection, cable current, reverse input, overvoltage, transient, thermal and first-article functional checks remain open.

## Long-distance extender v15 parent acceptance — 2026-10-13

Both roles are registered as a partial routing repair. Independent fresh native checks confirm receiver2→0opens with zero other errors and53unchanged warnings; emitter10opens and71warnings remain, both schematics clear. Exact1,973 untouched conductors,7declared replacements,192new conductors and five deterministic supply/ground dogbones pass; indicator return length23.092226mm with2vias. All1,513 historical files,165baselinefiles,163model references,38exports and12current views pass. Parent visual review confirms complete framing but severe inherited overlapping title/status/wiring legends on both roles; emitter rear URL is partly component occluded. Silk usability cleanup and emitter routing remain open. Physical/current/thermal/assembly qualification is not established.

## Trusted-power source audit

The selectable five-pin header can supply user-wired power, and the receiver Gadgeteer connector supplies a peripheral rather than proving a trusted incoming source. Existing revision v15 retains directional protection within the original 51 × 42 mm outline. The emitter still has ten native open connections and remains unqualified; this source audit creates no new hardware revision.
