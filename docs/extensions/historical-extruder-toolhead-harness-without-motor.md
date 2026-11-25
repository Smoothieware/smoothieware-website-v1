---
layout: default
title: "Extruder toolhead harness without motor"
permalink: /extensions/historical-extruder-toolhead-harness-without-motor
---

# Extruder toolhead harness without motor

This early passive harness prototype joins heater and fan positive supply while leaving separate low-side switched returns. It distributes thermistor, probe and servo connections without routing a motor. The upstream README explicitly marks it reference-only and not for production. It is not the modern extruder candidate and does not inherit that board’s ratings.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The original project is a custom 3D-printer harness; it has no ten-contact Prime plug-and-play host interface.

## Interfaces, power and limitations

The Fusion archive contains original Eagle board/schematic XML. Named HOTEND, THERM, SERVO, FAN1, FAN2, PROBE connectors and VBB/H−/GND wire pads provide the actual endpoints; J2 is an eight-contact harness and JP1/JP2 select fan-related paths. Several nets are auto-generated N$ names, so the complete numbered source table below is essential. Shared positive is not ground, and the heater return must remain on the host’s switched power stage. No supply, heater current or copper-temperature rating is established.

## Board-reference diagram

These source-matched sheets retain the historical artwork and identify its connectors, wire pads, selectors and indicators. The upstream design remains **reference-only, not for production; DO NOT ENERGIZE from these sheets**. It has no motor connection and no qualified supply, heater/fan current, thermal protection or Prime harness. Numbered source contacts are not a physical mating-face guarantee.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-overview" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/overview.png" title="Historical toolhead harness without motor overview" alt="Historical toolhead harness without motor overview — historical reference-only harness source" caption="Shared VBB positive and separate switched returns are source connectivity, not a qualified power installation. No motor connection exists. F1, F2 and H are LED device references, not fuses." width=420 %}

### Harness and toolhead connectors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-j2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/j2-pins-1.png" title="Eight-contact harness J2 · group 1" alt="Eight-contact harness J2 · group 1 — historical reference-only harness source" caption="Numbered source contacts only. Contact 6 has no assigned net and receives no invented connection. Auto-named nets must be traced to their source endpoints; the header is not a verified plug face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-j2-pins-2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/j2-pins-2.png" title="Eight-contact harness J2 · group 2" alt="Eight-contact harness J2 · group 2 — historical reference-only harness source" caption="Numbered source contacts only. Contact 6 has no assigned net and receives no invented connection. Auto-named nets must be traced to their source endpoints; the header is not a verified plug face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-hotend-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/hotend-pins-1.png" title="Heater connector HOTEND" alt="Heater connector HOTEND — historical reference-only harness source" caption="Source contacts 1 VBB and 2 H−; contacts 3/4 have no assigned net. The connector value does not qualify current, voltage, copper heating or thermal protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-therm-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/therm-pins-1.png" title="Thermistor connector THERM" alt="Thermistor connector THERM — historical reference-only harness source" caption="Two source contacts traced to J2.3/J2.5 nets. The retained native-pad overlay is a reference, not a sensor, ADC or cable qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-servo-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/servo-pins-1.png" title="Servo connector SERVO" alt="Servo connector SERVO — historical reference-only harness source" caption="Source contacts 1/2 map to J2.2/J2.1 nets and contact 3 to ground. Do not assume a conventional servo plug order, supply rating or supported servo." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-probe-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/probe-pins-1.png" title="Probe connector PROBE" alt="Probe connector PROBE — historical reference-only harness source" caption="Source contact 1 maps to J2.4 and 2 to ground. Sensor type, pull-up, voltage margins and firmware allocation remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-fan1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/fan1-pins-1.png" title="Fan connector FAN1" alt="Fan connector FAN1 — historical reference-only harness source" caption="Source contact 1 is the shared VBB net N$19; contact 2 is a switched/selector return. No fan voltage, current or host output stage is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-fan2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/fan2-pins-1.png" title="Fan connector FAN2" alt="Fan connector FAN2 — historical reference-only harness source" caption="Source contact 1 is the shared VBB net N$19; contact 2 is a switched/selector return. No fan voltage, current or host output stage is qualified." width=420 %}

### Rear fan-return selectors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-jp1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/jp1-pins-1.png" title="Rear selector JP1" alt="Rear selector JP1 — historical reference-only harness source" caption="Native-source overlay for the three-pad rear selector. Ground, fan return and harness signal membership do not establish the fitted trace/bridge state, physical mating or safe powered population." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-jp2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/jp2-pins-1.png" title="Rear selector JP2" alt="Rear selector JP2 — historical reference-only harness source" caption="Native-source overlay for the three-pad rear selector. Ground, fan return and harness signal membership do not establish the fitted trace/bridge state, physical mating or safe powered population." width=420 %}

### Supply and switched-return wire pads

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-vbb-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/vbb-pins-1.png" title="Shared positive VBB wire pad" alt="Shared positive VBB wire pad — historical reference-only harness source" caption="Source wire-pad identity only. Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-heater-switched-return-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/h--pins-1.png" title="Heater switched-return H− wire pad" alt="Heater switched-return H− wire pad — historical reference-only harness source" caption="Source wire-pad identity only. Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-gnd-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/gnd-pins-1.png" title="Ground wire pad" alt="Ground wire pad — historical reference-only harness source" caption="Source wire-pad identity only. Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation remain unqualified." width=420 %}

### LED indicators and series resistors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-f1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/f1-pins-1.png" title="F1 fan indicator" alt="F1 fan indicator — historical reference-only harness source" caption="This source device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED/resistor voltage, resistance, current and indication behavior are unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-f2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/f2-pins-1.png" title="F2 fan indicator" alt="F2 fan indicator — historical reference-only harness source" caption="This source device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED/resistor voltage, resistance, current and indication behavior are unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-h-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/h-pins-1.png" title="H heater indicator" alt="H heater indicator — historical reference-only harness source" caption="This source device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED/resistor voltage, resistance, current and indication behavior are unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r1-pins-1.png" title="Indicator resistor R1" alt="Indicator resistor R1 — historical reference-only harness source" caption="Source series LED resistor; resistance is absent from the source. No safe LED current or supply recipe is inferred from its presence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r2-pins-1.png" title="Indicator resistor R2" alt="Indicator resistor R2 — historical reference-only harness source" caption="Source series LED resistor; resistance is absent from the source. No safe LED current or supply recipe is inferred from its presence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r3-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r3-pins-1.png" title="Indicator resistor R3" alt="Indicator resistor R3 — historical reference-only harness source" caption="Source series LED resistor; resistance is absent from the source. No safe LED current or supply recipe is inferred from its presence." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [original Fusion archive](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/SingleExtruder_noMotor.f3z), revision `def3970de38643141e1a6176440cc079c666c853`. The Eagle board data used here is extracted from that archive. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-hotend" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/hotend-font-matched.png" title="Hotend connector" alt="Hotend connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-therm" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/therm-font-matched.png" title="Thermistor connector" alt="Thermistor connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-servo" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/servo-font-matched.png" title="Servo connector" alt="Servo connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-probe" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/probe-font-matched.png" title="Probe connector" alt="Probe connector — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-fan-supply" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/fan-supply-font-matched.png" title="Fan common supply" alt="Fan common supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-jp1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/jp1-font-matched.png" title="FAN2 return selection" alt="FAN2 return selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-jp2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/jp2-font-matched.png" title="FAN1 return selection" alt="FAN1 return selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-f1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-f1-font-matched.png" title="F1 indicator source connections" alt="F1 indicator source connections — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-f2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-f2-font-matched.png" title="F2 indicator source connections" alt="F2 indicator source connections — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-h" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-h-font-matched.png" title="H indicator source connections" alt="H indicator source connections — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-unconnected" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/unconnected-font-matched.png" title="Unconnected native contact instances" alt="Unconnected native contact instances — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| SingleExtruder_noMotor.f3z | HOTEND | XT30PW-F | 1: N$19; 2: N$12; 3: No assigned net; 4: No assigned net |
| SingleExtruder_noMotor.f3z | THERM | S2B-XH-A(LF)(SN) | 1: N$11; 2: N$10 |
| SingleExtruder_noMotor.f3z | SERVO | 22-23-2031 | 1: N$8; 2: N$7; 3: GND |
| SingleExtruder_noMotor.f3z | FAN1 | 22-23-2021 | 1: N$19; 2: N$2 |
| SingleExtruder_noMotor.f3z | PROBE | 22-23-2021 | 1: N$9; 2: GND |
| SingleExtruder_noMotor.f3z | FAN2 | 22-23-2021 | 1: N$19; 2: N$1 |
| SingleExtruder_noMotor.f3z | JP1 | JUMPER-SMT_3_1-NC_TRACE_NO-SILK | 1: GND; 2: N$1; 3: N$6 |
| SingleExtruder_noMotor.f3z | JP2 | JUMPER-SMT_3_1-NC_TRACE_NO-SILK | 1: GND; 2: N$2; 3: N$5 |
| SingleExtruder_noMotor.f3z | J2 | 2X4 | 1: N$7; 2: N$8; 3: N$11; 4: N$9; 5: N$10; 6: No assigned net; 7: N$5; 8: N$6 |
| SingleExtruder_noMotor.f3z | VBB | 3,81/1,4 | 1: N$19 |
| SingleExtruder_noMotor.f3z | H- | 3,81/1,4 | 1: N$12 |
| SingleExtruder_noMotor.f3z | GND | 2,54/1,0 | 1: GND |
| SingleExtruder_noMotor.f3z | F2 | CHIP-FLAT-R_0805 | C: N$15; A: N$19 |
| SingleExtruder_noMotor.f3z | F1 | CHIP-FLAT-R_0805 | C: N$16; A: N$19 |
| SingleExtruder_noMotor.f3z | H | CHIP-FLAT-R_0805 | C: N$17; A: N$19 |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a harness continuity fixture, keep heater/fans disconnected and identify the VBB,H− and ground wire pads in the recovered board. Follow each J2 contact through the saved signal membership to its named load connector; do not infer functions from N$ numbering. Verify the chosen jumper population and cable mating orientation. A complete Prime harness needs separate heater/fan power outputs, thermistor input and compatible probe/servo pins, not one Gadgeteer cable. Do not energize this reference-only assembly from an assumed 12/24 V convention.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The harness requires no driver. Its attached heater, sensor, fan and probe need independent compatible V2 modules and actual host allocations. No complete selected-source Prime configuration was verified.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Auto-named net semantics, fan jumper defaults, supply/current/cable limits, host allocation and source-reference-only production restriction remain unresolved. The complete Prime/peripheral wiring diagram remains incomplete. The board-reference sheets document source contacts without qualifying this reference-only prototype.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/ExtruderBoards)
- [Pinned original source](https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853)
- [Original SingleExtruder_noMotor.f3z](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/SingleExtruder_noMotor.f3z)
- [Original readme.md](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/readme.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
