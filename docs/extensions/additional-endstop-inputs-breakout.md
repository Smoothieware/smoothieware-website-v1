---
layout: default
title: "Additional endstop inputs breakout"
permalink: /extensions/additional-endstop-inputs-breakout
---

# Additional endstop inputs breakout

{% include extension-board-visuals.html slug="additional-endstop-inputs-breakout" %}

Seven-channel endstop/probe input adapter. Six ordinary digital channels use Schmitt conditioning; the seventh has a separate probe comparator. The retained study supports alternative 2.54 mm headers and 2.5 mm TRS jacks on the ordinary channels.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

Selected v18 consolidates the six ordinary-channel singles into two Nexperia74LVC3G17DC,125 triple non-inverting Schmitt buffers (U1 channels1–3, U4 channels4–6), with the separate probe comparator, field limiter, RC/ESD networks and interfaces retained. Exact V2 Prime Id27 (CSV record28) TPD4E1U06DCKR protection arrays keep corrected primary TI DCK lands. See the [all-reference IC/stock review](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/component-review.md) and [independent native review](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v18/parent-independent-review.md). Fresh independent ERC/strict DRC/opens/parity are zero, eight bypass paths pass and twelve views were inspected. These are CAD results;132 checklist items, J5.1 annular proximity and physical/system/fabrication qualification remain unsigned. Only v18 was added; v19 is unused.

Board-specific qualification limits: Conditional CAD prototype only; all132 checklist items, stock reels, J5.1 annular overlap, host and physical qualification remain open.

## Interfaces and wiring

### Connection contract

The keyed Y host connector has pin1=3.3V, pin2=5V, pin10=GND. Pins3–8 return channels1–6; pin9 returns probe7. From v15, ordinary J1–J6 have overlapping Molex 22-27-2031 header and XKB PJ-2181-SMT 2.5 mm TRS jack footprints, with exactly one connector fitted per channel; probe J7 uses the distinct Phoenix1984620 screw terminal from v13 to prevent an ordinary plug mating with the high-voltage-capable input. All seven retain pin1=Signal, pin2=Ground, pin3=protected5V. Host pins must be configured as inputs. NC closed gives low; broken/open wiring gives high/trigger while both host rails are valid. This is not a safety-rated interlock, and supply loss is not guaranteed to produce a trigger.

Ordinary signals operate from0 to5.25V with a diode-isolated10k pullup,100nF field filter,1k input series resistor, local ESD network and noninverting Schmitt buffer. They are not high-voltage inputs. Specify events at most50Hz with at least5ms dwell; qualify cable capacitance and transient immunity on hardware.

Probe7 accepts a positive3–45V high signal on Signal only, referenced to board ground. Its threshold is calculated from a94k/4.7k divider,100k/3.3k reference and1M external hysteresis feedback. Candidate rising thresholds span1.98–2.47V and falling thresholds1.70–2.15V under the documented corner assumptions. These are calculations, not measurements. Pin3 remains5V: never put a probe supply above5.25V on a power pin. Default diode-isolated pullup supports an NC contact; cutJP21 for externally driven sensing. No48V, AC/mains, negative-DC or system surge rating is claimed.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/additional-endstop-inputs-breakout`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v19, v20, v21. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v19, v20, v21**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### endstop-inputs

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/endstop-inputs.kicad_pcb), SHA-256 `e9852eb5223ed03a2afd5373e486208f6ea96877fb59a5c109b61b4573128128`.
- Last native check: **0 errors**, including **0 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- Board-specific connector populations: classic, stemma, jack. [Implementation and pin-map record](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/FANCIFICATION-MANIFEST.json).
- [classic render package](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/fancification-package.json): 6 images; source current; image hashes match; model resolution and visual findings are recorded in that package.
- [stemma render package](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/fancification-package.json): 6 images; source current; image hashes match; model resolution and visual findings are recorded in that package.
- [jack render package](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/fancification-package.json): 6 images; source current; image hashes match; model resolution and visual findings are recorded in that package.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/additional-endstop-inputs-breakout/attempt/versions/v21/FANCIFICATION.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Second-round annotation readback v22 — 2026-10-13

Protected source v21; current PCB SHA-256 `2d9f7a8e1fd8cc256e1f4b887f4d30baa828e371c2e4e3be7daf89f1bf3ddcda`. Fresh checks: zero enabled PCB errors/opens/parity and ERC errors; 0 PCB warnings. Electrical geometry, project rules and 284 historical files unchanged. Verified 300 model entries, 17 exports and 18 current population views, all inspected. Full documentation URL readable. Three exclusive connector populations verified: classic 2.54mm, PH and headphone jack; inherited rear configuration text crowding remains Inherited native warnings and enabled-rule exclusions remain explicit Physical/thermal/current/connector-fit qualification open No priced or area savings established by annotation candidate.

## Trusted-host correction v23 — 2026-10-13

The keyed host5 V supply is trusted; the field terminal is a3–45 V signal input rather than an external5 V supply. Removed29 redundant supply reverse/overvoltage warning parts while retaining field-output current limiting, soft start, reverse-current blocking and its fault indicator. Outline96 ×70.5 mm, compared with original96 ×70 mm. All18 views across classic, PH/STEMMA and jack populations were inspected. Native checks: zero errors, opens, schematic mismatches or electrical-rule findings; one dangling-track warning remains. Connector fit, current/thermal testing and independent review remain open; not for fabrication.
