---
layout: default
title: "Power supply connector board"
permalink: /extensions/power-supply-connector-board
---

# Power supply connector board

Convert an LED-style 12–24 V power-supply terminal interface into safer Smoothie-compatible connectors, regulated 5 V, replaceable fusing and controlled main-rail shutdown.

## Development status

**Reviewed saved V22 candidate — 2026-10-13.** Current revision labels and corrected connector metadata bind the protected v21 circuit. Post-model native checks retain27 non-open layout errors,30 unconnected connections,47 warnings and one schematic pin conflict; five inherited ignored rule categories remain. All six populated/bare views were inspected,96 declared model references resolve and17 exports bind the exact current source. Four purple dimensioned body prisms replace six missing model paths; they omit contacts, voids and mating features and are not manufacturer or fit models. Dual supply contact lands still lack assembled-body models. The XT30 footprint depth discrepancy, rear label crowding, electrical faults and all physical qualification remain open. No routing repair, priced saving or fabrication release is claimed.

**Current saved-source check — 2026-10-13.** Fresh source-bound readback of newest retained **v21** reports **27 geometric errors, 30 open connections, 47 warnings and one schematic electrical-rule error**. Five inherited ignored PCB rule categories remain explicit. The saved v21 schematic matches v20 and retains TPS26600, TPS26630, LM66100 and TPS2553 protection with the authored dual supply contacts. Earlier clean-v17 lineage prose must not be used to discard these later protections. Electrical baseline selection remains pending; no CAD was changed by this reconciliation. The smallest identified local repair is the LED_D7_DISABLE conductor crossing the D7 sink pad; correcting it alone cannot release the board. Hardware, current, thermal, assembly and system safety qualification remain open.

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: v17 retains one documented ERC exception and 11 via/annular intersections; power, mains/PE, thermal, surge/fault, stock lot, assembly and physical qualification remain unsigned.

## Interfaces and wiring

### Inputs

- 12–24 V supply contact interface.
- X socket control input; 5 V source-selection jumper required by project policy.

### Outputs

- Protected unswitched 5 V.
- Protected switched 12–24 V.
- XT30 and 5 mm green terminal connections.

### Connection contract

The CAD target is the repository-canonical X interface: pin 1 is +3.3 V,
pin 2 is +5 V, and pin 10 is GND. The Samtec SHF-105-01-L-D-TH-LC
manufacturer drawing matches the project's component-side numbering and notch
orientation. Confirm the actual host revision and cable mapping before connection;
this target does not establish compatibility with differently wired V2 Prime ports.

|  Pin | Function                                       |
| ---: | ---------------------------------------------- |
|    1 | +3.3 V pass-through; no local rail load         |
|    2 | +5 V alternate source through exclusive jumper |
|    3 | MAIN_RAIL_ENABLE with pull-down                |
|    4 | GPIO pass-through with buffered diagnostic LED |
|    5 | GPIO pass-through with buffered diagnostic LED |
|    6 | Unused                                         |
|    7 | Unused                                         |
|    8 | Unused                                         |
|    9 | Unused                                         |
|   10 | GND                                            |

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Initial design targets are 5 A continuous shared across the main outputs and
  1 A on the always-on 5 V output. These are engineering targets, not validated
  assembly ratings; thermal, fuse and converter qualification remain required.
- 5 V regulator must be upstream of main-rail switch.
- Off/reset control state must switch the main load rail off.
- Source selection must prevent backfeed.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Main reverse blocking, host current limiting and the fused, reverse-protected buck
input are placed, together with D10/D11 bidirectional input TVS devices and D12
output recirculation diode. Output undershoot qualification, input-clamp energy coordination and final source-transition
verification remain incomplete. Physical source plugs permit only one source per
header; semiconductor blocking has finite response and leakage.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/component-review.md). Retain selected eFuse/ideal-diode and isolated converter architecture; TPS25982/TPS5430 are not drop-in upgrades. Preserve applied conditional V1 LED resistor family and exact power parts; no new revision. Current selected v17; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/power-supply-connector-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v18, v19, v20. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v18, v19, v20**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### working

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/attempt/versions/v20/working/psu.kicad_pcb), SHA-256 `17f46d7ce6a689db1ec3ccc655d9bb6c20398ab5c02751dc6a71f40148063475`.
- Last native check: **58 errors**, including **30 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/attempt/versions/v20/working/populations/psu/normal/population.json): 6 images; source current; image hashes match; 6 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/power-supply-connector-board/attempt/versions/v20/working/psu-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->


## Compact power-protection candidate V23 — not accepted

The V23 study removes 27 redundant warning components from the fixed-module input and restores the original 102 × 72 mm nominal outline while retaining auxiliary output current limiting, OV cutoff, slew and fault indication, main output control and host backfeed handling. A fine-grid routing attempt added 12 routes but left six control branches unresolved; complete power/ground continuity still needs verification.

Pinned KiCad is now installed, but production checking remains held because synthetic remote-runner qualification failed: the pinned router requires Java 25 while the pinned runtime is Java 21. Current-source native checks, model resolution, manufacturing exports and six-view renders are therefore unverified. Existing older renders describe their recorded older sources. This compact candidate is not accepted for gallery replacement, fabrication or assembly. The per-board trusted-power record distinguishes the inherited baseline defects from earlier and current unverified routing attempts.

Read-only remote diagnostics of the unchanged V23 source now show 18 open connections against 30 in V22, with the same 27 other errors and one ERC error. The remote library/font environment is incomplete, so this is provisional diagnostic evidence. It does not establish layout acceptance, current render qualification or fabrication approval.

A subsequent source-bound remote recheck with complete standard-library bindings and the frozen Montserrat font eliminated all missing-library warnings and font substitution. It confirms V23 has 27 non-open errors, 18 opens, 36 layout warnings and one ERC error; V22 has the same 27 non-open errors, 30 opens, 47 layout warnings and one ERC error. Original retained copper nets are unchanged. The compact candidate remains unaccepted; no PCB was published or routed by this read-only check.

The current V23 source now has six populated/bare top, bottom and isometric renders, all hash-verified and visually inspected for framing, plus source-bound manufacturing-review exports. Every declared model resolves; several purple connector/package bodies are explicitly approximate prism models. This package depicts the electrically unaccepted source with 27 non-open errors, 18 open connections and one ERC error. It does not establish safe fabrication or assembly.
