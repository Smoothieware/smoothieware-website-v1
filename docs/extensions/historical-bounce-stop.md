---
layout: default
title: "BounceStop hardware debounce"
permalink: /extensions/historical-bounce-stop
---

# BounceStop hardware debounce

A MAX6818EAP+ conditions eight noisy switch inputs in hardware. The board adds change/enable control so a change can be latched and reset, permitting use as an eight-input interrupt expander. It is intended for slow mechanical contacts rather than fast pulse measurement.

## Origin and original host

This guide documents Ccecil’s BounceStop design; see the [original source](https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78). The design targets the Smoothieboard V2/Gadgeteer era. That does not make it compatible with every V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

The author states that the Gadgeteer pinouts are wrong. Do not connect this board directly to Prime. J1–J8 are field 1 input, 2 ground, 3 5 V; J9 is the 12-contact output/control header. J10 offers seven output positions, with JP1 selecting Out4 or _EN and JP2 selecting Out2 or _CH. Those alternate functions are not interchangeable ordinary outputs.

## Board-reference diagram

**The original README warns that the Gadgeteer pinouts are wrong. Do not connect this board directly to Prime.** These reference sheets show the original design and identify its numbered contacts; they do not correct the pinout or describe an adapter.

The J9 schematic symbol is 2 × 6 while its PCB footprint is 1 × 12. J10’s CCW naming and odd/even source numbering must be checked against the physical connector. Neither header is a verified mating-face or cable map. The rear jumpers are shown using labelled projected CAD overlays, not a physical rear mating view.

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-overview" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/overview.png" title="Bounce Stop overview" alt="Bounce Stop overview" caption="MAX6818 debounce reference only. The original Gadgeteer pinout is wrong; do not connect to Prime or energize from this drawing." width=420 %}

### Eight field-input connectors

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j1-pins-1.png" title="Field input J1" alt="Field input J1" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j2-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j2-pins-1.png" title="Field input J2" alt="Field input J2" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j3-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j3-pins-1.png" title="Field input J3" alt="Field input J3" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j4-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j4-pins-1.png" title="Field input J4" alt="Field input J4" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j5-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j5-pins-1.png" title="Field input J5" alt="Field input J5" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j6-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j6-pins-1.png" title="Field input J6" alt="Field input J6" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j7-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j7-pins-1.png" title="Field input J7" alt="Field input J7" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j8-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j8-pins-1.png" title="Field input J8" alt="Field input J8" caption="Numbered contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not specify a supply, current or sensor interface. Check physical mating before wiring." width=420 %}

### Output and control headers

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-1.png" title="J9 contacts · group 1" alt="J9 contacts · group 1" caption="The schematic symbol is 2 × 6 and the PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-2.png" title="J9 contacts · group 2" alt="J9 contacts · group 2" caption="The schematic symbol is 2 × 6 and the PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-3" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-3.png" title="J9 contacts · group 3" alt="J9 contacts · group 3" caption="The schematic symbol is 2 × 6 and the PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j10-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j10-pins-1.png" title="J10 contacts · group 1" alt="J10 contacts · group 1" caption="README warns the Gadgeteer pinout is wrong. Check CCW naming and odd/even numbering against the physical connector. Separate rail names and alternate control functions are not a cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j10-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j10-pins-2.png" title="J10 contacts · group 2" alt="J10 contacts · group 2" caption="README warns the Gadgeteer pinout is wrong. Check CCW naming and odd/even numbering against the physical connector. Separate rail names and alternate control functions are not a cable map." width=420 %}

### Rear solder-jumper selectors

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-jp1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/jp1-pins-1.png" title="Rear selector JP1" alt="Rear selector JP1" caption="Projected CAD pad overlay. This is not a physical rear mating view and does not show the fitted solder bridge. Follow the alternate-function nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-jp2-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/jp2-pins-1.png" title="Rear selector JP2" alt="Rear selector JP2" caption="Projected CAD pad overlay. This is not a physical rear mating view and does not show the fitted solder bridge. Follow the alternate-function nets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-selector-limits" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/selector-limits.png" title="Alternate output and control limits" alt="Alternate output and control limits" caption="JP1 and JP2 select alternate output/control functions. _EN and _CH are not interchangeable ordinary outputs; check firmware service, signal levels and timing." width=420 %}

### Debouncer and decoupling contacts

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-1.png" title="MAX6818 U1 contacts · group 1" alt="MAX6818 U1 contacts · group 1" caption="Numbered IC contacts and net names. See the datasheet for operating voltage, debounce timing and reset sequence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-2.png" title="MAX6818 U1 contacts · group 2" alt="MAX6818 U1 contacts · group 2" caption="Numbered IC contacts and net names. See the datasheet for operating voltage, debounce timing and reset sequence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-3" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-3.png" title="MAX6818 U1 contacts · group 3" alt="MAX6818 U1 contacts · group 3" caption="Numbered IC contacts and net names. See the datasheet for operating voltage, debounce timing and reset sequence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-4" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-4.png" title="MAX6818 U1 contacts · group 4" alt="MAX6818 U1 contacts · group 4" caption="Numbered IC contacts and net names. See the datasheet for operating voltage, debounce timing and reset sequence." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-c1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/c1-pins-1.png" title="C1 decoupling contacts" alt="C1 decoupling contacts" caption="C1 spans nets 5v and ground. The net label does not specify a supply." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-mounting-limits" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/mounting-limits.png" title="Mounting and use limitations" alt="Mounting and use limitations" caption="Mounting geometry and unnumbered holes are reference only. Verify fasteners, clearances and connector orientation; do not connect the board directly to Prime." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the board connectivity. They do not copy the original board artwork, placement or native files and supplement the annotated reference sheets above. Use the contact inventory and all companion sheets together. Check physical cable orientation before wiring.

Source: [original circuit](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/Bouncestop_x1.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-1-font-matched.png" title="Input and output nodes" alt="Input and output nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-3" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-3-font-matched.png" title="Input and output nodes" alt="Input and output nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-5-font-matched.png" title="Input and output nodes" alt="Input and output nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-7" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-7-font-matched.png" title="Input and output nodes" alt="Input and output nodes — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-2-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-2-1-font-matched.png" title="Ground connector branches" alt="Ground connector branches — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-2-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-2-5-font-matched.png" title="Ground connector branches" alt="Ground connector branches — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-3-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-3-1-font-matched.png" title="5v net connector branches" alt="5v net connector branches — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-3-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-3-5-font-matched.png" title="5v net connector branches" alt="5v net connector branches — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-jp1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/jp1-font-matched.png" title="Signal selection" alt="Signal selection — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-jp2" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/jp2-font-matched.png" title="Signal selection" alt="Signal selection — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-host-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/host-1-font-matched.png" title="Host direct paths and isolated supply" alt="Host direct paths and isolated supply — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-host-2" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/host-2-font-matched.png" title="Host direct paths and isolated supply" alt="Host direct paths and isolated supply — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

### Numbered source contacts and controls

These are net memberships from the design files. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Design file | Connector/control | Label | Contact → net |
|---|---|---|---|
| Bouncestop_x1.kicad_pcb | J6 | Conn_01x03_Male | 1: In6; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J4 | Conn_01x03_Male | 1: In4; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J7 | Conn_01x03_Male | 1: In7; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J1 | Conn_01x03_Male | 1: In1; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J10 | Conn_02x05_Counter_Clockwise | 1: 3.3v; 2: 5v; 3: Out1; 4: OutJ2; 5: Out3; 6: OutJ4; 7: Out5; 8: Out6; 9: Out7; 10: GND |
| Bouncestop_x1.kicad_pcb | J9 | Conn_02x06_Odd_Even | 1: 5v; 2: _EN; 3: Out1; 4: Out2; 5: Out3; 6: Out4; 7: Out5; 8: Out6; 9: Out7; 10: Out8; 11: _CH; 12: GND |
| Bouncestop_x1.kicad_pcb | J2 | Conn_01x03_Male | 1: In2; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J8 | Conn_01x03_Male | 1: In8; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J5 | Conn_01x03_Male | 1: In5; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | J3 | Conn_01x03_Male | 1: In3; 2: GND; 3: 5v |
| Bouncestop_x1.kicad_pcb | JP1 | Jumper_3_Bridged12 | 1: Out4; 2: OutJ4; 3: _EN |
| Bouncestop_x1.kicad_pcb | JP2 | Jumper_3_Bridged12 | 1: Out2; 2: OutJ2; 3: _CH |

</div>

</details>

## Practical use with Smoothieboard V2 Prime

Do not route unknown conductors by guesswork.

For switch debouncing, first use the schematic to design and verify an adapter correcting the known header problem. Test a dry contact on one field input and observe its conditioned output and debounce delay on a bench. Do not attach any Prime socket without verified mating-face numbering and a corrected adapter. Interrupt mode additionally needs a deliberate _CH/_EN reset sequence.

GF/J37 examples refer to Prime: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

V2’s ordinary button/endstop paths read logical inputs; they do not automatically service this MAX6818 board’s change-latch and enable sequence. An external ButtonBox callback is an extension point, not an installed MAX6818 driver. The original author also states that the Gadgeteer pinouts are wrong, so a corrected harness is required. Interrupt/change-latch mode additionally needs explicit CH/EN service; that service is not required when the outputs are continuously enabled as described below.

### Parallel-output diagnostic, without interrupt service

The [MAX6818 datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/max6816-max6818.pdf), printed page 4, permits `_EN` tied to ground for continuously enabled outputs; `_CH` may then remain unused. This provides a discrete-input use without inventing a MAX6818-specific interrupt driver.

A **3.3 V bench allocation**, rather than the incorrect original ten-way cable, uses Prime GF/J37.3 PB1 for board J10.3 Out1, a common return, a dry contact between J1.1 In1 and J1.2 ground, and local J9.2 `_EN` tied to J9.12 ground. Keep `_CH`, J10.4/.6, chain contacts and every 5 V source disconnected. In this evaluation mode the board net literally named `5v` would be supplied at 3.3 V: this is an intentional bench alternative, not the factory supply label or an instruction to join 3.3 V and 5 V rails. Check the rail current and output-level margins, actual fitted part, microload switch, corrected contact orientation and local 100 nF bypass before energizing.

After those checks, with machine loads disabled and an existing valid X actuator, merge this uniquely named diagnostic into the existing section:

```ini
[endstops]
bounce_input1_diagnostic.enable = true
bounce_input1_diagnostic.pin = PB1-
bounce_input1_diagnostic.axis = X
bounce_input1_diagnostic.homing_direction = none
bounce_input1_diagnostic.limit_enable = false
```

`PB1-` disables the controller’s internal pull resistor; the debouncer input bias is on the input side. Reserve PB1 exclusively. Send `M119` after each switch state settles, allowing at least 100 ms for the datasheet’s 20–80 ms debounce interval. Read the PB1 state in the `pins-` report. This observes a steady state; it does not measure debounce timing, enable homing, enable travel limits or establish a safety function.

The continuously enabled parallel-output diagnostic above uses the existing endstop input reader instead.

The configuration above follows SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## Requirements

The Gadgeteer pinout is wrong: use a corrected harness, and check supply and logic levels, debounce delay, the one-shot reset sequence and the Prime pin allocation before connecting.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/BounceStop)
- [Original source](https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78)
- [Original BounceStop_x1.kicad_sch](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/BounceStop_x1.kicad_sch)
- [Original Bouncestop_x1.kicad_pcb](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/Bouncestop_x1.kicad_pcb)
- [Original README.md](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/README.md)

The upstream project includes no license file, which does not place it in the public domain. Source attribution is retained for these reference sheets. Modern counterpart guides are functional comparisons only and do not imply matching pinouts.

[All extension boards](/extension-boards)
