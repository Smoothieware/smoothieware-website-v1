---
layout: default
title: "Filament encoder board"
permalink: /extensions/filament-encoder-board
---

# Filament encoder board

The selected v10 design reads a diametrically magnetised wheel with an AS5047P and presents conditioned encoder signals on the Gadgeteer Y connector. The root contract is still draft: v10 is a selected native design, not a mechanically, firmware, host, or electrically qualified product.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: Native0 retained;132unsigned,native-independent/magnet/firmware/host/physical open.

## Interfaces and wiring

### Connection contract

- The v10 sensor produces A, B, and index outputs. Its 74LVC3G17 buffer conditions A/B/index; SPI remains available for sensor configuration and diagnostics.
- The supplied SmoothieV2 `FilamentDetector` source counts rising edges on A (`encoder_pin`). It does not currently use B or index for the jam alarm, so the firmware path does not establish direction sensing or quadrature decoding.
- The current alarm is based on zero measured pulses while extrusion is required. Retract and following-forward moves are excluded by the supplied implementation. Spurious pulses at rest can mask a jam; this behavior needs system qualification.
- Keep the selected AS5047P ABI/SPI design. The guide's AS5600 option is a reduced-feature alternative; it does not establish equivalent firmware ABI, resolution, or latency and is not a drop-in reuse choice.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Operate the AS5047P and 74LVC3G17 from 3.3 V. The selected v10 15.84 mA figure is a planning estimate, not a demonstrated full operating worst case; v10 allocates 25 mA. The actual host-header allowance remains undocumented and must be verified.
- Keep the AS5047P local bypass network at C1/C3 = 100 nF and C2 = 1 µF. The v10 owner-defined acceptance target is at least 0.7 µF effective capacitance for C2 at 3.3 V; this is not a manufacturer-stated minimum for the 3.3 V application. Verify effective capacitance across bias, tolerance, temperature and aging before changing the selected part. Place bypass parts close to the sensor. Do not use the sensor's internal regulator output to power other loads.
- The selected signal resistors are R1–R3 = 10 kΩ, 1%, 0603 and R4–R10 = 100 Ω, 1%, 0603. Stock substitutes remain conditional on tolerance, package, input leakage, pull-up timing, and protection/current limits.
- Sensor A/B/index outputs have a 1 mA maximum drive-current specification and 50 pF capacitive-load condition in the supplied device data. Verify the complete cable and host load against that condition.
- Use SPI mode 1. The selected contract recommends no more than 1 MHz and a cable no longer than 0.3 m because MISO is specified for a 50 pF load. The sensor's higher absolute SPI capability is not a qualified cable rate.

## Selected component architecture

[Current sealed-package readback](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/component-review.md#current-sealed-package-readback--2026-10-11): v10 retains AS5047P/triple Schmitt/two existing V2 DCK arrays,no successor.18 identities/67own/513 historical hashes match;132unsigned and native-independent/magnet/firmware/host/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/filament-encoder-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v11, v12, v13. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v11, v12, v13**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### filament-encoder

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/attempt/versions/v13/filament-encoder.kicad_pcb), SHA-256 `0acea89028edf8a5bf5fdde8d8795279e69cc16fd83972a342201031eefbd3d4`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/attempt/versions/v13/populations/filament-encoder/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/attempt/versions/v13/filament-encoder-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

<!-- second-round-service:start -->
## Second-round annotation candidate: v14

This saved engineering candidate updates revision labels/title styling while retaining the electrical geometry, schematic, project rules, outline and historical source. Independent fresh checks find zero enabled board errors, open connections, schematic parity errors and schematic-rule errors; **2 inherited font warnings** remain. Six current normal-population views, model paths and source-bound manufacturing exports were verified.

The board documentation URL remains absent; deliberate annotation reflow is still required. Readability was checked against the actual current renders, rather than inferred from an automatic placement result. Physical connector mating, mounting, current, thermal and fault qualification remain open where applicable. No area or priced savings and no fabrication release are claimed.

- [Candidate source](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/attempt/versions/v14/filament-encoder.kicad_pcb), SHA-256 `29f24168274853de5a3b2508809af022366cf7a1b0688ce1b0cfd58495eef190`.
- [Changes and pending qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/filament-encoder-board/fancification-round2.md).

Earlier revision readbacks remain historical.
<!-- second-round-service:end -->
