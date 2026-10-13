---
layout: default
title: "Pololu driver breakout board"
permalink: /extensions/pololu-driver-breakout-board
---

# Pololu driver breakout board

Carry three genuine Pololu item 2128 A4988 Black Edition modules on one
Smoothieboard Y socket. Each channel has STEP and DIR; all three share one
active-low ENABLE signal. The design is a KiCad-only CERN OHL hardware project.

The historical proposal links discontinued item 1182. This prototype freezes
the current, mechanically compatible item 2128 because its current and thermal
claims are supported by a current product page and dimension drawing. Generic
"Pololu-format" clones are outside the supported configuration.

## Development status

**Baseline documentation snapshot: 2026-10-11, before the requested connector/protection/usability revision program.** New revision features require their own reviewed source and qualification evidence.

This page documents an **unqualified engineering study**, not a released or tested product. Saved CAD, renders and automated checks do not establish a safe assembly, compatible cable, firmware support or a usable current rating.

The retained design record states:

V21–v26 retain bounded readability/routing/assembly/drawing improvements. V25 moves the D1 GND via outside its actual land with an original-width extension; v26 corrects the schematic translation to40.64mm, preserving the1.27mm connection grid. Fresh parent v26 confirms ERC0/DRC12/opens9/parity0,149 pin assignments,79 matching package hashes and zero actual via drill/ring/mask-to-SMD overlaps. All six own views, schematic and both actual copper/outline/drill CAM faces were inspected.

Board-specific qualification limits: v26 is rejected for 12 strict mechanical findings and 9 opens; full checklist, current/thermal, host, component lots and physical qualification remain unsigned.

## Interfaces and wiring

The exact connector orientation, pin mapping and supply ownership must be taken from the selected revision’s schematic and [connection specification](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/specs.md). Do not infer wiring from the connector shape.

Power off before connecting or changing jumpers. Verify pin 1, signal direction, supply voltage and ground at both ends of every cable. A mechanically fitting connector is not proof of electrical compatibility. If a host pin mapping or current allocation remains unresolved in the design record, do not connect the board until it is resolved.

## Electrical design requirements

The following are specification requirements or study assumptions; they are **not measured operating ratings**. A newer selected-revision note takes precedence over historical draft options.

- Supported module: genuine Pololu 2128 A4988 Black Edition, 8–35 V VMOT and
  3–5.5 V VDD. The 35 V value is an absolute carrier envelope.
- Input chain: XT60, 5 A mini blade fuse, P-channel MOSFET reverse-polarity
  stage, SMBJ18A-class unidirectional TVS, 470 µF/35 V bus capacitor, and
  100 µF/35 V plus 100 nF at every carrier.
- Two outer copper layers use a 70 µm target. VMOT and motor phase traces use
  explicit wide copper; current and temperature remain physical test results.
- Do not advertise 24 V: the carrier has only 35 V VMOT headroom and Pololu
  warns that motor-lead LC spikes can destroy it even from a 12 V source.
- No motor may be connected or disconnected while VMOT is energized.
- Do not add external motor-output flyback diodes without a separate switching
  loss and current-decay analysis; the frozen carrier supplies the H-bridge.

## Selected component architecture

See [current review](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/component-review.md). Retain exact Pololu A4988 carriers; guide ICs and stocked Trinamic chips require new driver hardware and are not carrier substitutions. Prefer only electrically qualified V1 0603 passive families; no new version. Current selected v26; retained native/stock/physical qualification limits remain explicit.

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

- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/specs.md)
- [Architecture and component decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/design.md)
- [Selected-revision review and qualification record](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/component-review.md)
- [All extension boards](/#extension-boards)

Documentation route: `smoothieware.org/extensions/pololu-driver-breakout-board`.

<!-- additive-cad-status:start -->
## Additive design studies

The 2026-10-11 upgrade program has saved additional candidates v27, v28, v29. These studies preserve the historical design described above. Their connector, LED, mechanical and protection changes are revision-specific and remain unqualified.

See the [per-board changes, failures and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/fancification.md) and [mandatory family specification](https://github.com/arthurwolf/extension-boards/blob/main/docs/FANCIFICATION-SPEC.md). Use the source hash and native check for the exact candidate being reviewed; do not infer hardware ratings from a rendered population.
<!-- additive-cad-status:end -->

<!-- extension-upgrade-readback:start -->
## Upgrade candidate readback

The three additional revisions are **v27, v28, v29**. They are engineering studies; saved CAD and renders do not release the hardware. The latest candidate is described below. Older baseline notes above remain historical.

### pololu-driver-breakout

- [Latest PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/attempt/versions/v29/pololu-driver-breakout.kicad_pcb), SHA-256 `919d9e3299bf2bb846607bee8f1ae4cdd186ac40a3512b68c4aba31ddd520b71`.
- Last native check: **31 errors**, including **19 open connections**. This is a CAD result, not electrical, assembly or firmware qualification.
- No alternative connector population is recorded for this physical role. Any applicable connector conversion remains an explicit design-review item.
- [normal population/render record](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/attempt/versions/v29/populations/pololu-driver-breakout/normal/population.json): 6 images; source current; image hashes match; 0 unresolved models.
- [Changes, failed trials and remaining work](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/attempt/versions/v29/pololu-driver-breakout-fancification-revision.md).

Applicable protection, current-path, thermal, pinout, cable access and physical tests remain open wherever the linked board record has not verified them. A zero native-error count does not close those gates.
<!-- extension-upgrade-readback:end -->

## Electronic protection working candidate

The latest third additive candidate replaces the input fuse with an LTC4368 automatic-retry electronic breaker and an external reverse/backfeed FET pair. It adds soft-start gate shaping, separate fault/overvoltage LEDs, a floating timer for blinking reverse indication, and individual solder links to disable status LEDs. Existing motor, host/isolation and mounting-pin contracts remain requirements.

This is an **unreleased implementation study**. Native opens/errors, shunt sourcing and Kelvin routing, FET linear SOA, continuous current/thermal limits, regeneration, input transients and enclosure compaction remain qualification gates. The controller does not support hot-plugging an externally powered output above 24 V; boards with a higher output domain still need a different qualified topology for that mode. Do not treat the candidate as approved for fabrication or motor operation. Exact source hashes and native checks are in the readback section and per-revision NATIVE-CHECKS.md.

<!-- second-round-pololu:start -->
## Second-round compact candidate: v34

The saved v34 engineering candidate reduces the nominal rectangular outline from120×139mm to115×139mm:695mm² less board area, or4.17%. It preserves the existing mounting-hole centres, all footprints/pads/routes/vias and zone settings; only the right outline and three ground-zone boundaries change. Ground fill decreases by944.9975mm² across both layers. This is a measured CAD-area reduction, **not a fabrication quote or verified current/thermal rating**.

Fresh enabled native design/schematic checks have zero findings, compared with three baseline text-thickness warnings. The current revision title, board name and Black Edition restriction are complete and readable after correcting a native polygon serialization defect; the initial failed artwork remains recorded as historical. Independent review verified all14 filled title contours, six current populated/bare views,65 model entries,74 artifact hashes and1601 unchanged historical files. Both board documentation URLs remain readable.

The right mounting-hole centre is5mm from the trimmed edge, with3.4mm from drill edge to board edge. Actual washers, screw/tool access, connector/cable/body fit and the current/thermal effect of reduced ground copper remain unqualified. Fault, host and manufacturing qualification remain open. Fabrication release is false and price savings remain unverified.

- [Current v34 PCB source](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/attempt/versions/v34/pololu-driver-breakout.kicad_pcb), SHA-256 `e51a4f5945a3ea59ad4a124f615735adeb44b2305b4c8eeb2894fce1dfc772a2`.
- [Changes, initial failed title trial and remaining qualification](https://github.com/arthurwolf/extension-boards/blob/main/src/pololu-driver-breakout-board/fancification-round2.md).

Earlier revision contracts/readbacks remain historical; do not infer hardware approval from their renders.
<!-- second-round-pololu:end -->

## Terminal correction state and remote recovery — 2026-10-14

The last historically verified clean 115 × 80 mm study had **0 native errors, 3 open connections and 0 schematic-parity differences**. Subsequent local transition searches failed and were not promoted. The earlier scratch PCB/result folders were removed by the configured scratch reaper; those historical diagnostics are not a claim that the corresponding scratch CAD remains retained. No v35 PCB was promoted. Recovery must use retained numbered sources and portable helpers, followed by the required remote zero-violation gate, exports and all final views.

New PCB computation uses the pinned remote whole-job runner only. The portable native warning-repair helper is prepared as source; execution and its same-font title repair remain unverified. The remote runner itself must pass its isolated synthetic routing/publication qualification before production repairs continue. **Acceptance and fabrication release remain false.**
