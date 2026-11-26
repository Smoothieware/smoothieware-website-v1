---
layout: default
title: "Extruder toolhead harness without motor"
permalink: /extensions/historical-extruder-toolhead-harness-without-motor
---

# Extruder toolhead harness without motor

This passive harness joins heater and fan positive supply while leaving separate low-side switched returns. It distributes thermistor, probe and servo connections without routing a motor. The upstream README marks it as reference-only. Do not energize it.

## Original host

This guide documents the **Ccecil design**. [The upstream source](https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853) contains the design files. The original project is a custom 3D-printer harness; it has no ten-contact Prime plug-and-play host interface.

## Interfaces, power and limitations

The Fusion archive contains original Eagle board/schematic XML. Named HOTEND, THERM, SERVO, FAN1, FAN2, PROBE connectors and VBB/H−/GND wire pads provide the actual endpoints; J2 is an eight-contact harness and JP1/JP2 select fan-related paths. Several nets are auto-generated N$ names, so the complete numbered contact table below is essential. Shared positive is not ground, and the heater return must remain on the host’s switched power stage. No supply, heater current or copper-temperature rating is specified.

## Board-reference diagram

These sheets identify the connectors, wire pads, selectors and indicators. This is a **reference-only design: DO NOT ENERGIZE from these sheets**. It has no motor connection and specifies no supply, heater/fan current, thermal protection or Prime harness. Numbered contacts are not a mating-face view.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-overview" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/overview.png" title="Toolhead harness without motor overview" alt="Toolhead harness without motor overview" caption="Shared VBB positive with separate switched returns; this is not a power installation guide. No motor connection exists. F1, F2 and H are LED device references, not fuses." width=420 %}

### Harness and toolhead connectors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-j2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/j2-pins-1.png" title="Eight-contact harness J2 · group 1" alt="Eight-contact harness J2 · group 1" caption="Contact 6 has no assigned net. Trace auto-named nets to their endpoints; this view is not a plug face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-j2-pins-2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/j2-pins-2.png" title="Eight-contact harness J2 · group 2" alt="Eight-contact harness J2 · group 2" caption="Contact 6 has no assigned net. Trace auto-named nets to their endpoints; this view is not a plug face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-hotend-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/hotend-pins-1.png" title="Heater connector HOTEND" alt="Heater connector HOTEND" caption="Contacts 1 VBB and 2 H−; contacts 3/4 have no assigned net. The connector value does not specify current, voltage, copper heating or thermal protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-therm-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/therm-pins-1.png" title="Thermistor connector THERM" alt="Thermistor connector THERM" caption="Two contacts traced to J2.3/J2.5 nets. No sensor, ADC or cable is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-servo-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/servo-pins-1.png" title="Servo connector SERVO" alt="Servo connector SERVO" caption="Contacts 1/2 map to J2.2/J2.1 nets and contact 3 to ground. Do not assume a conventional servo plug order, supply rating or supported servo." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-probe-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/probe-pins-1.png" title="Probe connector PROBE" alt="Probe connector PROBE" caption="Contact 1 maps to J2.4 and 2 to ground. Sensor type, pull-up, voltage margins and firmware allocation are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-fan1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/fan1-pins-1.png" title="Fan connector FAN1" alt="Fan connector FAN1" caption="Contact 1 is the shared VBB net N$19; contact 2 is a switched/selector return. No fan voltage, current or host output stage is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-fan2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/fan2-pins-1.png" title="Fan connector FAN2" alt="Fan connector FAN2" caption="Contact 1 is the shared VBB net N$19; contact 2 is a switched/selector return. No fan voltage, current or host output stage is specified." width=420 %}

### Rear fan-return selectors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-jp1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/jp1-pins-1.png" title="Rear selector JP1" alt="Rear selector JP1" caption="Three-pad rear selector. Check the fitted trace or bridge state before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-jp2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/jp2-pins-1.png" title="Rear selector JP2" alt="Rear selector JP2" caption="Three-pad rear selector. Check the fitted trace or bridge state before wiring." width=420 %}

### Supply and switched-return wire pads

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-vbb-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/vbb-pins-1.png" title="Shared positive VBB wire pad" alt="Shared positive VBB wire pad" caption="Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-heater-switched-return-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/h--pins-1.png" title="Heater switched-return H− wire pad" alt="Heater switched-return H− wire pad" caption="Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-gnd-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/gnd-pins-1.png" title="Ground wire pad" alt="Ground wire pad" caption="Shared positive is not ground; heater/fan returns belong to compatible switched power stages, not ordinary GPIO. Ampacity, polarity and host allocation are not specified." width=420 %}

### LED indicators and series resistors

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-f1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/f1-pins-1.png" title="F1 fan indicator" alt="F1 fan indicator" caption="This device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED and resistor ratings are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-f2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/f2-pins-1.png" title="F2 fan indicator" alt="F2 fan indicator" caption="This device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED and resistor ratings are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-h-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/h-pins-1.png" title="H heater indicator" alt="H heater indicator" caption="This device is an LED, not a fuse. Its anode is on VBB and its cathode feeds a series resistor. LED and resistor ratings are not specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r1-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r1-pins-1.png" title="Indicator resistor R1" alt="Indicator resistor R1" caption="Series LED resistor; no resistance value or supply is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r2-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r2-pins-1.png" title="Indicator resistor R2" alt="Indicator resistor R2" caption="Series LED resistor; no resistance value or supply is specified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-no-motor-reference-r3-pins-1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/annotated-reference/r3-pins-1.png" title="Indicator resistor R3" alt="Indicator resistor R3" caption="Series LED resistor; no resistance value or supply is specified." width=420 %}

### Supplementary logical circuits

These circuit sheets explain the connectivity. They do not copy the original board artwork or placement and supplement the board-reference sheets above. Use the contact list and all companion sheets together.

Source: [original Fusion archive](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/SingleExtruder_noMotor.f3z). The Eagle board data used here is extracted from that archive. No grant to redistribute the original artwork is stated.

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-hotend" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/hotend-font-matched.png" title="Hotend connector" alt="Hotend connector — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-therm" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/therm-font-matched.png" title="Thermistor connector" alt="Thermistor connector — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-servo" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/servo-font-matched.png" title="Servo connector" alt="Servo connector — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-probe" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/probe-font-matched.png" title="Probe connector" alt="Probe connector — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-fan-supply" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/fan-supply-font-matched.png" title="Fan common supply" alt="Fan common supply — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-jp1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/jp1-font-matched.png" title="FAN2 return selection" alt="FAN2 return selection — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-jp2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/jp2-font-matched.png" title="FAN1 return selection" alt="FAN1 return selection — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-f1" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-f1-font-matched.png" title="F1 indicator connections" alt="F1 indicator connections — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-f2" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-f2-font-matched.png" title="F2 indicator connections" alt="F2 indicator connections — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-indicator-h" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/indicator-h-font-matched.png" title="H indicator connections" alt="H indicator connections — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extruder-toolhead-harness-without-motor-factual-unconnected" src="/images/extensions/historical-extruder-toolhead-harness-without-motor/guides/factual-circuits/unconnected-font-matched.png" title="Unconnected contacts" alt="Unconnected contacts — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

### Numbered contacts and controls

The table lists net memberships. Leave unassigned and unconnected pads unconnected. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require physical identity checks before wiring.

<details markdown="1">
<summary>Contact list</summary>

<div class="extension-contact-table" role="region" aria-label="Contact list; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source file | Connector/control | Label | Contact → net |
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

For a harness continuity fixture, keep heater/fans disconnected and identify the VBB,H− and ground wire pads on the board. Follow each J2 contact through the net list to its named load connector; do not infer functions from N$ numbering. Verify the chosen jumper population and cable mating orientation. A complete Prime harness needs separate heater/fan power outputs, thermistor input and compatible probe/servo pins, not one Gadgeteer cable. Do not energize this assembly.

GF/J37 examples refer only to the **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The harness requires no driver. Its attached heater, sensor, fan and probe need independent compatible V2 modules and actual host allocations.

The V2 behavior described here refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Your installed firmware may differ.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/ExtruderBoards)
- [Original design source](https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853)
- [Original SingleExtruder_noMotor.f3z](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/SingleExtruder_noMotor.f3z)
- [Original readme.md](https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/readme.md)

The project has no license file; that is not public-domain permission. Source attribution is retained for these reference sheets.

[All extension boards](/extension-boards)
