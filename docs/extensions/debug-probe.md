---
layout: default
title: "Debug probe"
permalink: /extensions/debug-probe
---

# Debug probe

USB-hosted SWD/JTAG debug probe based on Black Magic Debug native hardware version 6 for Smoothie V2 targets. Component selection is documented in component-review.md; electrical release remains subject to first-article qualification.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: 19opens,PB0 injection/startup,independent/host/firmware/physical open.

## Interfaces and wiring

### Inputs

- USB power/data
- Target voltage reference and SWD/JTAG/SWO signals

### Outputs

- SWCLK/SWDIO or JTAG signals, reset, optional SWO, and GDB serial interface

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Selected design intent: 1.65–3.6 V target VTREF, USB-C USB 2.0 device, keyed Cortex Debug 10-pin 1.27 mm target connector, SWD/JTAG and no target-power output. Debug clock, cable and Smoothie V2 header fit remain qualification items.
- Smoothie V2 uses STM32H745/H743-class targets and current hardware documents an ARM debug connector
- Target and USB domains must not back-power one another. The PB0 VTREF divider path has not yet been proved safe with the target powered and probe unpowered; the requirement is open.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

- USBLC6-2 ESD on USB and F1 PPTC on VBUS; the PPTC is not a USB host-current limiter
- U5/U6 ESD and 33 Ω series parts on translated target lines; target reset uses Q1/Q2 BSS138
- No target-power switch or output in this version
- Check every target/probe crossing, especially R19/R20 to unpowered PB0. U2 Ioff isolation applies to its four channels and does not prove board-wide no-backfeed. Check the OE-low startup sequence with both power orders.

## Selected component architecture

[Exhaustive current review](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/component-review.md#exhaustive-current-v12-reconciliation--2026-10-11): actualv12 retains BMD MCU/translator/regulator,conditional stock only,no successor.62 identities/123own/1237 historical hashes match;19opens and PB0/startup/host/firmware/physical gates remain open.

## Configuration and commissioning

Use the configuration and firmware contract for the exact selected revision. Do not copy another module’s socket assignments or assume that an unused pin is available. First-article work must verify source selection, reset/unplug behavior, cable orientation and the actual load or sensor interface before normal operation.

## Requested connector and usability upgrades

The following are requirements for the next design iterations; this page does **not** claim they are already fitted:

- On electrically suitable three/four-pin low-voltage ports, provide compact alternative 2.54 mm header/Molex-style and keyed STEMMA-family footprints. Populate one connector option per shared position and document its pin order. Use STEMMA QT only for compatible four-wire I²C; connector appearance does not make another signal protocol I²C-compatible.
- Assess a third shared jack option on eligible endstop-style ports, with separate header, keyed-connector and jack renders; preserve safe insertion behavior and document any fit exception.
- Render each supported connector population separately. Document clearances, cable access and the exact fitted option.
- Use uppercase titles in a consistent Montserrat-style face, labels on both sides, visible domain boundaries, a revision-specific wiring guide and this page’s URL on the silk where readable.
- Keep mounting-hole centers on a documented 10 mm lattice; add cable-tie holes where space and electrical clearances permit. Place status LEDs near accessible edges and give every indicator its own disable solder jumper. Provide labeled test pads and a ground observation point.
- Review applicable DC power entries for reverse-polarity cutoff with a blinking warning, overvoltage cutoff/indication, controlled startup and electronic overcurrent protection. Indicator and protection circuits must work in the fault state without defeating isolation or safe output defaults. Thermal protection belongs only where the power/thermal analysis justifies it.
- Electronic protection does not automatically replace a required mains/branch safety fuse. Backfeed blocking and inductive-load flyback clamps are separate design functions. Do not add identity EEPROMs, fault memory, calibration storage or paid self-test hardware under this upgrade program.

## Design sources

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/debug-probe`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v13, v14, v15. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v13, v14, v15**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### debug-probe

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v15/debug-probe.kicad_pcb), SHA-256 `1607e57696ff840bb950001b22f2d2a361ff8b7ee3239dbf1cadc00dae9c767d`.
- Last native check: **24 errors**, including **24 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v15/populations/debug-probe/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v15/debug-probe-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- second-round-service:start -->
## Second-round annotation candidate: v21

This saved engineering candidate updates revision labels/title styling while retaining the electrical geometry, schematic, project rules, outline and historical source. Independent fresh checks find zero enabled board errors, open connections, schematic parity errors and schematic-rule errors; **3 inherited font warnings** remain. Six current normal-population views, model paths and source-bound manufacturing exports were verified.

A readable full wrapped board URL was added. Readability was checked against the actual current renders, rather than inferred from an automatic placement result. Physical connector mating, mounting, current, thermal and fault qualification remain open where applicable. No area or priced savings and no fabrication release are claimed. Native checks retain five existing ignored categories: footprint filters/type mismatch, missing courtyard, and non-plated/plated holes inside courtyards.

- [Candidate source](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v21/debug-probe.kicad_pcb), SHA-256 `150a381d9c9da44eefe38dc1fe50381a28df55989c389abf34ce14345eddc1c2`.
- [Changes and pending qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/fancification-round2.md).

Earlier revision readbacks remain historical.
<!-- second-round-service:end -->

## Trusted-power compact correction: v23

USB-C USB 2.0 power is treated as a keyed, compliant 5 V source. The redundant input-protection/warning annex was removed in v22, restoring the 56 × 30 mm outline and retaining USB ESD, regulation, target-voltage sensing and interface circuitry. V23 cleans crowded underside wiring tables into fabrication documentation, keeps essential labels and Montserrat title outlines visible, and bundles project-relative native libraries. Prior revisions remain preserved.

The current candidate passes all enabled native board, schematic and parity checks with zero findings, including the remote runner’s independent publication gate. Existing project rule exclusions remain unchanged; this is not physical or fabrication qualification. All six current normal-population renders and 17 source-bound manufacturing-candidate exports have been generated remotely and their hashes checked. Independent package review remains pending; fabrication release is false. Target backfeed, hot-plug, firmware and electrical/thermal behaviour still require validation.

- [Current v23 source](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v23/debug-probe.kicad_pcb), SHA-256 `225072cb50d529ba73d9b6b01208d5a6b55da18ca0901bce5c9937424b59c4e2`.
- [Current connector-population renders](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/attempt/versions/v23/populations/debug-probe/normal/population.json).
- [Correction record and remaining qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/debug-probe/trusted-power.md).

Earlier candidate sections above remain historical.
