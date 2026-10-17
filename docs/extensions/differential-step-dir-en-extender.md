---
layout: default
title: "Differential STEP/DIR/ENABLE extender"
permalink: /extensions/differential-step-dir-en-extender
---

# Differential STEP/DIR/ENABLE extender

{% include extension-board-visuals.html slug="differential-step-dir-en-extender" %}

Provide a directional pair of extension boards that carries one axis's STEP,
DIR and ENABLE commands from a Smoothieboard V2 Gadgeteer Y socket to a remote
external stepper drive over three balanced twisted pairs.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

Board-specific qualification limits: HOST30/REMOTE52findings,REMOTE5opens;56blank MPNs,host/common-mode/fault/physical open.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Six TI THVD1451D devices, three per endpoint, operated at 3.3 V.
- Remote-only 100 Ω ±1%, ≥0.25 W termination at each receiving pair, placed
  adjacent to its receiver pins.
- Allocate 150 mA from the HOST 3.3 V rail. The conservative bound is three
  continuously driven 99 Ω minimum terminations at 3.6 V plus 3 mA per
  transceiver, or 118.1 mA before inverter current and margin. Verify the
  actual host rail allocation and measured current before physical use.
- HOST line drivers continuously drive their pairs. The THVD1451 D pull-up
  specifies HIGH for an open D pin; it does not qualify open Y-socket GPIO
  or reset states, which depend on external bias and inverter paths.
- Remote open-collector sinks shall handle 16 mA per channel minimum with
  margin and shall be off for the STEP fail-safe state.
- No signal conductor may back-power an unpowered endpoint. This is an
  acceptance requirement, not a demonstrated property of retained CAD; verify
  powered/unpowered permutations, brownout and slow ramps at the actual pins.
- Route each pair with stable width/spacing, equal layer transitions and no
  stubs; preserve a continuous reference return beneath it.
- Keep the shield on a named SHIELD network with explicit bleed/capacitive or
  chassis coupling. Mounting holes remain ungrounded.

## Selected component architecture

[Exhaustive current pair review](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/component-review.md#exhaustive-current-v27-pair-reconciliation--2026-10-11): v27pair retains dedicated channels/rated terminations/conditional capacitor preferences,no successor.59refs/140selected/978role hashes;56exported MPNs blank. HOST30/REMOTE52findings,REMOTE5opens and host/fault/physical gates remain open.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/differential-step-dir-en-extender`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v28, v29, v30. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v28, v29, v30**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### host

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/host/host.kicad_pcb), SHA-256 `d2be2438b6e510ee1dbda3fba7e59d2a3bc454153b7abd11e65cf88c974d2e2e`.
- Last native check: **14 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/host/populations/host/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/host/host-fancification-revision.md).

### remote

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/remote/remote.kicad_pcb), SHA-256 `e621304d60570f67cb04d12eec361d8040894bf0418e2b83f1e82b49bfb794e0`.
- Last native check: **46 errors**, including **31 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/remote/populations/remote/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v30/remote/remote-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The remote third additive candidate includes a TPS26600 automatic-retry input eFuse, OV cutoff with separate raw-side indication, reverse cutoff with a floating blinking timer, soft start and individual LED links. Protection returns to SIGNAL_GND; SHIELD remains separate and the host circuit is preserved. Signal power sequencing, failsafe behavior, transients and hardware qualification remain open. Native routing remains incomplete; see the source-bound readback and per-revision NATIVE-CHECKS.md.

## Current annotation-only candidate V31

The current retained revision is V31; the earlier readback above is historical. Uppercase version labels and documentation annotations were refreshed without changing the circuitry, placement, routing, zones, mechanics or rules. [Source-bound candidate review](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-step-dir-en-extender/attempt/versions/v31/differential-usability-review.json) records every role, unchanged native diagnostic categories, current models, views and manufacturing hashes. This remains a partial engineering candidate with **fabrication release false**.

Host: 14 clearance errors, zero opens, 9 warnings. Remote: 46 errors including 31 opens, 36 warnings. Both normal packages contain 12 inspected views and 91 resolved model entries. Complete documentation URLs remain readable; host edge proximity and title/cable-tie crowding, remote back annotation overlap and front low contrast remain explicit limitations.

Short-title Montserrat conversion is deferred after warning-increasing retained trials. Native parity/ERC findings are zero and settings are unchanged, with no ignored rule categories or exclusions. This does not verify electrical operation, current/thermal limits, isolation, protection behavior, timing, mounting or assembly. All existing pin maps and power/cable safety limitations on this page still apply; no price or area-saving claim is made.

## Parent acceptance of revision v31 — 2026-10-13

Both physical boards passed independent source/history/model/export checks and all12views were visually reviewed with complete framing. Registered as a partial annotation improvement: remote retains46layout errors including31unrouted connections and36warnings; host retains14clearance errors and9warnings. Both schematics have zero errors. Current labels and complete documentation URLs are retained; crowded and component-occluded inherited labels and title font consistency need further work. Electrical geometry and rules are unchanged. Physical and fabrication qualification remain open.

## Trusted-power layout review — 2026-10-13

The V31 host receives trusted Gadgeteer power and has no added generic input-protection annex to remove. The remote accepts a user-wired 18–50 V screw-terminal supply, so its compact input protection is retained. The host remains 60 × 40 mm and the remote 60 × 60 mm. No CAD revision is added for this classification review; the existing host clearance errors and remote layout errors/open connections remain unresolved, and fabrication release remains false.
