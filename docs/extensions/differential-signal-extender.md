---
layout: default
title: "Differential signal extender"
permalink: /extensions/differential-signal-extender
---

# Differential signal extender

Paired transmitter (TX) and receiver (RX) carrying one digital host output to a field-side logic input over a dedicated twisted-pair cable. The retained candidate also sends limited low-voltage power from TX to RX. This is a source-level component selection, not a qualified product.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: TXnative0,RX12geometry/27opens;host/boost/timing/partial STEP/physical open.

## Interfaces and wiring

### Inputs

- TX J1: pin 1 GND, pin 2 +5 V host input, pin 3 SIG_IN from a host output.
- RX J2: dedicated straight-through shielded 8P8C cable, specified below; no external RX supply.

### Outputs

- TX J2: balanced data plus transported power on the dedicated cable.
- RX J1: pin 1 GND, pin 2 transported supply output, pin 3 SIG_OUT. This is GND/+5V/SIG order, **not** the historical Signal/Ground/5V order. Confirm the actual host/load harness before connection.
- RX uses two SN74LVC2G04DBVR dual inverters with four outputs paralleled. The inherited 128 mA sum is not a datasheet-qualified combined output rating. Load classes, current sharing, edge contention, VOH/VOL and startup remain release blockers; a nominal 5 V label does not establish 5 V CMOS compatibility at the lowest cable rail.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- The source phrase “5 V/-5 V differential” is ambiguous and is not a voltage requirement. THVD1451D is a 3–5.5 V RS-485/RS-422 transceiver used here as dedicated one-way channels, not Ethernet.
- Retained study allocations are 300 mA from the host, 60 mA TX self-budget, 150 mA cable budget and no more than 140 mA shared by RX J1 supply output and SIG_OUT load. These are provisional allocations, not qualified limits or short-circuit protection settings. The host's shared 3 A regulator does not grant 300 mA to this port.
- The study calculates RX rails of 3.934 V minimum and 4.388 V nominal using cable/contact assumptions and an estimated diode drop. They are not guaranteed minima. Output threshold compatibility must use the actual lowest rail, temperature and load.
- Retain RX-only 100 Ω, 1%, 1206 termination in series with 10 nF, 50 V X7R; JP1 bypasses the capacitor for a separately qualified DC option and is normally open. The assumed 4.65 V differential ceiling, resistor dissipation/derating and AC settling remain unresolved.
- TX host HIGH can exceed the protected THVD1451 supply after fuse/diode loss. An absolute maximum does not authorize that operation; powered/unpowered injection and host sequencing remain unresolved.
- No isolation, hot-plug, surge immunity, glitch-free whole-board startup, output-short survival or TX-to-TX survival claim is established.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

Q1's inherited 9 mV loss at 150 mA assumes 60 mΩ, specified for AO3401A at VGS = -4.5 V and 25 °C. The estimated 3.934–4.388 V source rail cannot provide that gate drive with a ground-biased gate. Use gate-drive- and temperature-appropriate limits before relying on the rail estimate. The gate pull-down turns Q1 on, and its ±12 V absolute gate rating is not a proven reverse-fault envelope. Typical transceiver dissipation and an assumed thermal resistance also do not establish maximum junction temperature.

## Selected component architecture

[Exhaustive pair review](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/component-review.md#exhaustive-current-pair-reconciliation--2026-10-11): TXv10/RXv11 retained;40 purchased MPNs match role contracts,166selected/847canonical-role listed hashes. Existing driver/boost and2.2kstock changes preserved,no successor. RX12geometry/27opens and pair host/timing/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/differential-signal-extender`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v12, v13, v14. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v12, v13, v14**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### rx

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/attempt/versions/v14/rx/dse-rx.kicad_pcb), SHA-256 `85b9bc11df3f631b21463c119be0cbcd7f57e346d8be7d3c71ef1ac9a187abf8`.
- Last native check: **32 errors**, including **27 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Alternative connector lands recorded: J1 / `JST_PH_B3B-PH-K_1x03_P2.00mm_Vertical`. Fit only the selected population; check its pin map and voltage in the design record.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/attempt/versions/v14/rx/populations/dse-rx/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [stemma population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/attempt/versions/v14/rx/populations/dse-rx/stemma/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/attempt/versions/v14/rx/dse-rx-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Current annotation-only candidate V15

The current retained revision is V15; the earlier readback above is historical. Uppercase version labels and documentation annotations were refreshed without changing the circuitry, placement, routing, zones, mechanics or rules. [Source-bound candidate review](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-signal-extender/attempt/versions/v15/differential-usability-review.json) records every role, unchanged native diagnostic categories, current models, views and manufacturing hashes. This remains a partial engineering candidate with **fabrication release false**.

Receiver: 32 native errors including 27 opens, 8 warnings; transmitter: zero findings. Receiver normal/STEMMA and transmitter normal packages contain 18 inspected views and 65 resolved model entries. The receiver full URL is readable; the transmitter URL is still absent after a bounded search, which does not establish impossibility. The historical approximate transmitter fuse model remains physically unqualified.

Short-title Montserrat conversion is deferred after warning-increasing retained trials. Native parity/ERC findings are zero and settings are unchanged, with no ignored rule categories or exclusions. This does not verify electrical operation, current/thermal limits, isolation, protection behavior, timing, mounting or assembly. All existing pin maps and power/cable safety limitations on this page still apply; no price or area-saving claim is made.

## Parent acceptance of revision v15 — 2026-10-13

Receiver and transmitter registered as partial annotation improvements after source-bound independent native/history/model/export checks and all18view reviews. Three isometric connector clips were corrected through camera-only native rendering, with CAD unchanged. Receiver retains32layout errors including27unrouted connections and8warnings; transmitter and both schematics have zero findings. Receiver documentation URL is readable; transmitter URL, inherited rear title/safe-state overlaps, dense references and title-font consistency remain open. Physical and fabrication qualification remain unperformed.
