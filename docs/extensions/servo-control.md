---
layout: default
title: "Servo control"
permalink: /extensions/servo-control
---

# Servo control

{% include extension-board-visuals.html slug="servo-control" %}

Retained TMC4671-LA field-oriented-control interface study with S-socket host/chain, encoder/Hall inputs and an external power-stage interface. This supersedes the older hobby-servo/P-socket idea; the board is not itself a qualified motor power stage.

## Development status

**Current saved-source check — 2026-10-13.** Fresh source-bound readback of newest retained **v20** reports **one clearance error, 66 open connections, 82 warnings and zero schematic electrical-rule errors**. No PCB categories or exclusions are ignored. Its current PCB is byte-identical to retained v17–v19; a completed v14 rail/render job does not establish current electrical readiness. Preserve all three TPS259631/TPS3700/LM66100/LMC555 protection rails. Electrical baseline selection remains pending; no CAD was changed by this reconciliation. The smallest identified local repair concerns the SERVO_PORT1_FAULT_AUX via beside fixed fiducial FID3; 0.5672 mm clearance fails the unchanged 0.6000 mm rule. Correcting this alone cannot close the 66 open connections. Hardware, current, thermal, assembly and system safety qualification remain open.

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

The retained native architecture is a TMC4671-LA FOC controller, with S-socket host/chain, encoder/Hall inputs and an external power-stage interface. This supersedes the provisional P-socket hobby-servo concept below. The original demonstration requirements, firmware and motion-safety behavior are not qualified.

Board-specific qualification limits: v11 ERC/geometry/parity0,21opens;embeddedQFN thermalholes,drawing frame/host/firmware/motion/physical open.

## Interfaces and wiring

The retained interface is Gadgeteer S host/chain with encoder and Hall inputs and an external power-stage connection. It is not a hobby-servo PWM/header distributor. The exact signal assignments and permitted power-stage interface must be taken from the retained TMC4671-LA contract.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

The TMC4671-LA and external stage require a qualified logic/power/feedback contract, firmware and safe hardware enable behavior. No motor-current or supported motor rating is released.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/component-review.md). Retain TMC4671-LA external-stage FOC control;DRV8316/PCA9685 change power/interface function. Existing two V2 DCK arrays and matched0402/0603 support families retained,no IC-stock successor. Current selected v11; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/servo-control`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### servo-control

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/attempt/versions/v14/servo-control.kicad_pcb), SHA-256 `d9ca73539f5adc11a3db4ba505fa08776f31cfcc8b53b845f022a8ec14dbbc2a`.
- Last native check: **82 errors**, including **82 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/attempt/versions/v14/populations/servo-control/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/servo-control/attempt/versions/v14/servo-control-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- owned-protection-circuit:start -->

## Three protected logic outputs in v14

The native v14 study replaces F1/F2/F3 PTCs with three TPS259631 automatic-retry electronic current limiters. The original TMC4671-LA control, encoder/Hall signals, host/chain mating and external power-stage interface remain. This board does not carry motor current. Each new path has upstream reverse cutoff, TPS3700 overvoltage cutoff with a distinct amber indicator, 22 nF startup control, FAULT indication and a post-cutoff LM66100 ideal diode. The ideal diode removes the passive-PFET direct backfeed path when the load is externally powered and raw input is reversed. A floating LMC555 circuit blinks the reverse warning; each indicator has its own disable link. Protection IC thermal shutdown is used; no extra thermal sensor, fault memory or identity EEPROM is added.

The preserved output allocations are encoder 5 V / 350 mA, power-stage 5 V / 200 mA and power-stage 3.3 V / 200 mA. Encoder ILIM is 1.96 kohm, approximately 0.49 A by interpolation; this is not a guaranteed minimum trip specification at 5 V and temperature. The 3.83 kohm setting on the other two paths has published 224/247/269 mA endpoints under TI's 12 V test conditions. Actual 3.3/5 V hot behavior must be measured before these load allocations are released. Total estimated host draws are 581.4 mA at 5 V and 284 mA at 3.3 V; the shared 5 V source budget and especially the unknown host 3.3 V allocation remain gates.

The 5 V OV threshold is 5.400 V nominal (5.334233–5.465987 V including reference, 0.1% divider and specified bias corners); 3.3 V is 3.528 V nominal. The LM66100 is downstream of cutoff and rated for 1.5 A, with a 5.5 V recommended / 6 V absolute input limit. Cutoff delay, transient overshoot, full-temperature negative auxiliary clamps and copper/thermal capacity are unqualified. Raw host logic and signal ESD injection retain their original limits: this is protection of the three peripheral supply paths, not a full-board abuse rating. The retained encoder push-pull clamp can inject current into 3.3 V and still needs interface qualification.

Primary sources: [TI TPS2596](https://www.ti.com/lit/ds/symlink/tps2596.pdf), [TI TPS3700](https://www.ti.com/lit/ds/symlink/tps3700.pdf), [TI LM66100](https://www.ti.com/lit/ds/symlink/lm66100.pdf), [TI LMC555](https://www.ti.com/lit/ds/symlink/lmc555.pdf), and [Nexperia BAT54HGW-Q](https://assets.nexperia.com/documents/data-sheet/BAT54HGW-Q.pdf). The pin-level contract and native gates beside the CAD are authoritative for the exact candidate. Existing historical replay-input fixtures remain unchanged and are not the v14 physical architecture. No manufacturing or motor-system release.

<!-- owned-protection-circuit:end -->

## Parent-verified v21 partial clearance repair — 2026-10-13

A0.05mm fiducial-via move with its two joined endpoints and unchanged-contract copper refill clears the one geometric error;66open connections and82warnings remain, with zero parity/schematic errors. All six current views,167model references,19exports,2,877historical files and97baseline files were independently verified. Bare and populated derivatives retain exact conductor expressions. Protective circuits and six zone contracts remain unchanged. The revision is retained and registered as a partial repair; crowded status legends, populated rear URL occlusion and electrical/thermal/assembly qualification remain open. Not for fabrication.

## Trusted-host correction v22 — 2026-10-13

The keyed Gadgeteer 5 V and 3.3 V supplies are trusted. Removed45 redundant input reverse/overvoltage warning parts; retained the three peripheral current limiters, soft start, fault LEDs/disable links and backfeed isolation. The older standalone overvoltage thresholds described above are historical and no longer describe v22. The original56 ×50 mm outline is retained. Six current views were inspected. Native checks show zero non-open layout errors, zero schematic mismatches and zero electrical-rule findings;55 inherited opens remain versus66 before correction, along with disclosed dangling-copper and silk warnings. This is a partial engineering candidate, not a fabrication release.
