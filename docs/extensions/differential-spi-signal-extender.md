---
layout: default
title: "Differential SPI signal extender"
permalink: /extensions/differential-spi-signal-extender
---

# Differential SPI signal extender

{% include extension-board-visuals.html slug="differential-spi-signal-extender" %}

Paired HOST and REMOTE boards carry one transparent SPI connection on four fixed-direction balanced data pairs. A separate two-wire link transports external 12 V power. This document reconciles the retained prototype contract; it does not certify the existing CAD or a physical assembly.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native0 retained;ambiguous capacitor MPNs,12V-only assessed,timing/fault/physical open.

## Interfaces and wiring

### Inputs

- HOST S Gadgeteer connector: canonical pin 1 = 3.3 V input, pin 2 = no connection, pins 6–9 = SPI, pin 10 = ground.
- HOST external 12 V DC nominal supply, with 10.8–13.2 V defined operating range.
- Shielded straight-through Cat5e for four data pairs, and a separate two-wire 12 V/return cable of at least 24 AWG (about 0.205 mm²; use 0.25 mm² metric wire or larger).

### Outputs

- REMOTE S Gadgeteer connector: pin 1 = locally sourced 3.3 V, pin 2 = protected locally sourced 5 V, pins 6–9 = matching SPI, pin 10 = ground.
- HOST MISO and optional active-low `STATUS_N` on pin 3; pin 3 is no connection at REMOTE. Pins 4 and 5 are unused at both ends.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Retained physical layer: THVD1451DR-class 3.3 V fixed-direction differential channels, one pair per SPI signal, 100 Ω/1%/1206 termination at each receiving end. Receiver common mode must remain within the device's ±15 V operating limit. The power return supplies the shared reference; the boards are not galvanically isolated.
- External 12 V is carried outside the RJ45. The RJ45 is a data connector, not Ethernet/PoE. REMOTE load allocation is at most 100 mA on each peripheral 3.3 V and 5 V rail; the actual peripheral and cable loss must be measured. HOST 3.3 V allocation of 150 mA is an assumption pending the named Smoothieboard S-socket limit.
- The length/rate limits are calculations, not qualified link ratings. Check host CS lead and setup, MAX31855 first-bit and later-bit timing, actual cable delay/skew, receiver eye, and open/short/disconnected behavior before physical approval.
- The retained contract mentions 24 V sustained fault tolerance; this is unverified and is not an operating range. Sustained wrong-voltage behavior, PTC/TVS coordination, regulator inductor saturation under short, and terminal temperatures remain release gates.

## Protection in the design record

The design describes the following protection intent. Check the selected schematic and remaining qualification gates before relying on it:

HOST F1/D1/D2 form the 12 V PTC/reverse diode/TVS path; REMOTE D1/D2 guard the buck input. Four THVD1451 receivers provide the datasheet's open/short/idle high state, subject to wiring and ground offset. HOST CS is pulled inactive-high when its S pin floats; SCK and MOSI are pulled low. The REMOTE OR gate forces high MISO while deselected, and the HOST buffer leaves S MISO high impedance while deselected. This is not a fault-detection or safety function. Cable open/short/reversal, unpowered endpoints and brownout require physical verification; surge immunity is not claimed.

## Selected component architecture

[Exhaustive current pair review](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/component-review.md#exhaustive-current-v14-pair-reconciliation--2026-10-11): v14 HOST/REMOTE retain transparent channels/existing stock annotations,no successor.68 identities/159selected/2058 historical hashes match;actual HOST10k pull-ups supersede100k intent. Ambiguous capacitor MPN fields and12V-only assessed/timing/fault/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/differential-spi-signal-extender`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v15, v16, v17. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v15, v16, v17**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### host

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/host/dse-host.kicad_pcb), SHA-256 `6f8ceeed032944219c2e032167a4f3c706df1df5f9601444f1d9a1cf5aa3f04b`.
- Last native check: **21 errors**, including **21 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/host/populations/dse-host/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/host/dse-host-fancification-revision.md).

### remote

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/remote/dse-remote.kicad_pcb), SHA-256 `b8794eb336198e1d7016c4b6ef40ddd0136e2c21c0ee4f94b0c4a106302fcaa3`.
- Last native check: **27 errors**, including **26 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/remote/populations/dse-remote/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v17/remote/dse-remote-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- extension-round2-v18:start -->
## Second-round partial repair: v18

The saved host and remote v18 candidates close two connections per role and clear the remote jumper overlap. They remain **incomplete engineering candidates**, with **19 host and 24 remote open connections**. Fresh full-track native checks find no other enabled electrical errors or schematic parity errors, and no schematic-rule errors. Host retains 71 board warnings and one schematic library-link warning; remote retains 95 board warnings and two schematic library-link warnings. Enabled-rule results do not cover physical qualification or ignored rule categories.

Both roles have current revision labels and wrapped documentation URLs. Parent verification checked 127 unchanged baseline files, 151 source/artifact hashes, all model paths and twelve current normal-population views. The dense back-side instruction overlap remains visible. No alternate connector land pattern is declared for either role; connector conversion remains open.

- [Host v18 source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v18/host/dse-host.kicad_pcb), SHA-256 `03602a68ec5ac09e5cd1c57d9f9c6915f7ac10fdffba9cff307e5008fd9a70a7`.
- [Remote v18 source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/attempt/versions/v18/remote/dse-remote.kicad_pcb), SHA-256 `6faa1f043d10dd93eb0f837294b25e25913452cd8418d7fb217d161ab97db721`.
- [Second-round work and remaining qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/fancification-round2.md).

The added power-net copper does not establish a load rating. Current, thermal, mounting, assembly, backfeed, fault-injection and signal-integrity qualification remain open. Manufacturing exports and renders are review artifacts; fabrication release is false. The v17 readback above remains historical.
<!-- extension-round2-v18:end -->

## Trusted-power layout review — 2026-10-13

Both V18 roles already fit a 50 × 50 mm outline. The host J3 input supplies the protected 12 V cable output; Gadgeteer J1 does not provide that field-power rail. The remote J3 user-wired supply feeds its protected buck input, while peripheral 5 V protection remains functional load protection. These circuits are retained. The existing 19 host and 24 remote opens remain unresolved; this classification review does not qualify either board for fabrication.
