---
layout: default
title: "Bouni spindle module boards"
permalink: /extensions/bouni-spindle-module-boards
---

# Bouni spindle module boards

**Reviewed saved V19 candidates — 2026-10-13.** Both analog and RS485 roles now carry current revision labels, complete documentation URLs and power-off wiring notes. Parent review verifies785 historical files,45 declared model references,40 export files and all12 current views. Analog has zero enabled native findings; RS485 retains three text-thickness warnings and five ignored rule categories, with zero schematic findings. All non-silk geometry and model expressions match V18. The larger analog DAC outline remains; priced savings, transfer/insulation/host/physical qualification and fabrication release remain open.

## Additive PWM DAC candidate: family v18 (2026-10-13)

The [v18 engineering record and native designs](https://github.com/arthurwolf/extension-boards/tree/main/src/bouni-spindle-module-boards/attempt/versions/v18) adds an analog **LTC2644IMS-L10#PBF 10-bit PWM DAC**, ISO7710F default-low digital isolator and TPS70930 3.0 V field regulator. It replaces optical/RC conversion delay while retaining the separate floating RUN/DCM contact and TS912 gain-four output. The DAC supports the **20 kHz target** within its specified 25 kHz maximum; nominal output is 0–10 V, subject to amplifier headroom and accuracy qualification with a load of at least 10 kΩ. The board grows from 40 × 42 mm to 60 × 52 mm. The isolated RS485 companion already implements its relevant IC opportunity and is carried byte-for-byte from v17.

The VFD 10 V reference must supply approximately **8 mA estimated**; **10 mA is a conditional allocation target, not a guaranteed maximum**. Reference-current compatibility, regulator tolerance, startup, temperature and a conservative higher DAC-current case require qualification; some 10 mA VFD references may be unsuitable. PWM idle LOW produces zero through the DAC-output pull-down; **idle HIGH reaches full scale after the timeout**. RUN off does not force the analog output to zero. Independent RUN control and a system emergency stop remain necessary.

No firmware is changed. Host work includes configuring compatible PWM frequency, validating startup and power sequencing, and implementing spindle interlocks; RS485 still requires a suitable host driver and protocol configuration. Analog native electrical checks pass. The unchanged RS485 companion retains three text-thickness warnings and five inherited suppressed check settings; an all-checks-enabled diagnostic found no additional findings. Fresh renders and exports are retained, but power, transfer accuracy, headroom, isolation, assembly and complete spindle-system safety remain unqualified. **No fabrication or energization approval is granted.** The historical snapshot below describes earlier revisions and does not supersede this additive candidate status.

Define Gadgeteer adaptations of the historical Bouni spindle modules after separating incompatible spindle-control classes.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Actual **v10** contains BSM-A isolated PWM/0–10V/RUN and BSM-R isolated RS485 studies. See [complete two-role IC/stock review](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/component-review.md). Retain ILD217T/TS912 and ISOW1412; conditional V1 bypass/1uF0805 families only. No new revision; earlier undecided draft below is historical context.

Board-specific qualification limits: Analogue native clean,RS485fouropens;isolation/VFD/markings/physical gates open.

## Interfaces and wiring

Two separate retained roles exist: BSM-A converts isolated PWM to a 0–10 V/RUN spindle-control interface using ILD217T/TS912; BSM-R is an isolated RS485 study using ISOW1412. Neither interface supplies spindle motor power. Choose one role and its exact connector contract.

Power off before changing connections. Use the selected schematic and a continuity check to verify connector orientation and pin numbering before first power.

## Electrical design requirements

Verify the chosen VFD control-input specifications, isolation boundaries, external control-domain power and disabled-state behavior. The RS485 study still has four open connections; no universal VFD or spindle compatibility is established.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/bouni-spindle-module-boards`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### bsm-analog

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/bsm-analog.kicad_pcb), SHA-256 `18e60d26e830dc809c1275b3db0d53524df97834e38bf18c79c4935f5c8b60b6`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/populations/bsm-analog/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/bsm-analog-fancification-revision.md).

### bsm-rs485

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/bsm-rs485.kicad_pcb), SHA-256 `521afebb187723b1f68b5b9f1af8ea3736c76c8720d55229011eb2a7b1a5ca9d`.
- Last native check: **4 errors**, including **4 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/populations/bsm-rs485/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v13/bsm-rs485-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Parent-verified spindle candidate v18 — 2026-10-13

Analog v18 replaces the RC conversion with a ten-bit measured-duty DAC and fast default-low isolated PWM path; outline grows40×42→60×52mm. RS485 companion is byte-identical to v17, including visible v17 labels. Fresh parent checks: analog zero PCB/ERC diagnostics with no ignored categories; RS485 three inherited lettering warnings/five ignored categories and zero enabled errors/opens/parity/ERC. Verified eight original native files,105 retained revision files,45 model references,47 retained export files and12 current views. Analog outline grows from40x42mm to60x52mm; response and linearity improvement unmeasured LTC2644 ten-bit measured-duty DAC/ISO7710F field path requires complete transfer, sequencing and reference-current qualification PWM HIGH commands full scale; RUN does not force zero; independent system emergency stop required Full documentation URLs pending on both role silkscreens RS485 PCB is byte-identical to v17 and visibly retains v17 labels; companion included within board v18 package VFD isolation/creepage/EMC/current/thermal/host/connector and physical qualification open No priced savings or fabrication release. Source-bound parent evidence is retained in the extension-board project..

## Current annotation candidate: v19

The additive [v19 analog PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v19/bsm-analog.kicad_pcb) (SHA-256 `01b040015d706fac4c0320b3fe3569fcf9fb813fe0c36afb1b99ae0b49a1551f`) and [v19 RS485 PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/attempt/versions/v19/bsm-rs485.kicad_pcb) (SHA-256 `84d4c269ae2b24f15c380d55d3c20271fec3f1f7131ec071f9db58b1a5ef1ca2`) add the full `smoothieware.org/extensions/bouni-spindle-module-boards` route, V19 identity and power-off wiring notes on both roles. This candidate is awaiting independent parent review and ledger registration; it is not a release.

Only board-level silkscreen text changes from v18. The RS485 module title and Modbus label were moved to open a readable URL area. Copper, board outlines, mounts, protections, complete footprint model expressions, schematics, project settings and authored support inputs are retained. Analog remains 60 × 52 mm after the v18 DAC redesign, and v19 claims neither a smaller board nor a lower-cost BOM. Both role layouts have 40 footprints; that count includes holes and test pads and is not a component-cost metric. No priced savings are established.

Current all-severity DRC with full-track and schematic-parity checks reports 0 analog findings and the same 3 inherited RS485 text-thickness warnings. Both ERC checks report 0 findings; the RS485 project retains its same five explicit ignored rule categories. All 45 declared 3D models resolve. Six normal/bare top, bottom and isometric views were generated per role, along with Gerber, drill, BOM, position, STEP, schematic PDF and netlist exports. See the [source-bound v19 evidence](https://github.com/arthurwolf/extension-boards/tree/main/src/bouni-spindle-module-boards/attempt/versions/v19).

The v19 CAD checks and exports do not establish VFD compatibility, isolation, electrical behavior, current or thermal capacity, assembly, firmware or fabrication qualification. **Fabrication release remains false.**



