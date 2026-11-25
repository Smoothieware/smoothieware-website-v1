---
layout: default
title: "BounceStop hardware debounce"
permalink: /extensions/historical-bounce-stop
---

# BounceStop hardware debounce

A MAX6818EAP+ conditions eight noisy switch inputs in hardware. Revision 0.2 adds change/enable control so a change can be latched and reset, permitting an eight-input interrupt-expander experiment. It is intended for slow mechanical contacts rather than fast pulse measurement.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

The author explicitly says Gadgeteer pinouts are incorrect on revisions 0.1 and 0.2. Do not connect the retained board directly to Prime. J1–J8 are field 1 input, 2 ground, 3 5 V; J9 is the 12-contact output/control header. J10 offers seven output positions, with JP1 selecting Out4 or _EN and JP2 selecting Out2 or _CH. Those alternate functions are not interchangeable ordinary outputs.

## Board-reference diagram

**The original README identifies revision 0.2 as an early prototype unsuitable for production and warns that the Gadgeteer pinouts are wrong. Do not connect this board directly to Prime.** These source-matched reference sheets preserve the original abstract and identify its numbered contacts; they do not correct the design or qualify an adapter.

The J9 schematic symbol is 2 × 6 while its PCB footprint is 1 × 12. J10’s CCW naming and odd/even source numbering also require reconciliation against the physical connector. Neither header is a verified mating-face or cable map. The rear jumpers are shown using explicitly labelled projected native-CAD overlays, not a physical rear mating view.

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-overview" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/overview.png" title="Bounce Stop revision 0.2 prototype overview" alt="Bounce Stop revision 0.2 prototype overview — historical prototype source reference" caption="MAX6818 debounce reference only. Original Gadgeteer pinout is incorrect; do not connect to Prime or energize from this drawing. No production or complete installation qualification." width=420 %}

### Eight field-input connectors

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j1-pins-1.png" title="Field input J1" alt="Field input J1 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j2-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j2-pins-1.png" title="Field input J2" alt="Field input J2 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j3-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j3-pins-1.png" title="Field input J3" alt="Field input J3 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j4-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j4-pins-1.png" title="Field input J4" alt="Field input J4 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j5-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j5-pins-1.png" title="Field input J5" alt="Field input J5 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j6-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j6-pins-1.png" title="Field input J6" alt="Field input J6 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j7-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j7-pins-1.png" title="Field input J7" alt="Field input J7 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j8-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j8-pins-1.png" title="Field input J8" alt="Field input J8 — historical prototype source reference" caption="Numbered source contacts: 1 input, 2 ground, 3 the net named 5v. Net names do not qualify a supply, current or sensor interface. Physical mating and powered behavior remain unresolved." width=420 %}

### Output and control headers

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-1.png" title="J9 source contacts · group 1" alt="J9 source contacts · group 1 — historical prototype source reference" caption="Source discrepancy: schematic symbol 2 × 6, PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation, a corrected harness or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-2.png" title="J9 source contacts · group 2" alt="J9 source contacts · group 2 — historical prototype source reference" caption="Source discrepancy: schematic symbol 2 × 6, PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation, a corrected harness or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j9-pins-3" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j9-pins-3.png" title="J9 source contacts · group 3" alt="J9 source contacts · group 3 — historical prototype source reference" caption="Source discrepancy: schematic symbol 2 × 6, PCB footprint 1 × 12. Read numbered nets only; do not infer plug orientation, a corrected harness or compatibility with Prime." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j10-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j10-pins-1.png" title="J10 source contacts · group 1" alt="J10 source contacts · group 1 — historical prototype source reference" caption="README warns the Gadgeteer pinout is wrong. CCW naming and odd/even numbering are unresolved physical-orientation constraints. Separate rail names and alternate control functions do not form a verified cable map." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-j10-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/j10-pins-2.png" title="J10 source contacts · group 2" alt="J10 source contacts · group 2 — historical prototype source reference" caption="README warns the Gadgeteer pinout is wrong. CCW naming and odd/even numbering are unresolved physical-orientation constraints. Separate rail names and alternate control functions do not form a verified cable map." width=420 %}

### Rear solder-jumper selectors

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-jp1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/jp1-pins-1.png" title="Rear selector JP1" alt="Rear selector JP1 — historical prototype source reference" caption="Projected native-CAD pad overlay retained. This is not a physical rear mating view and does not establish the fitted solder bridge. Follow the source alternate-function nets; do not infer an assembled setting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-jp2-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/jp2-pins-1.png" title="Rear selector JP2" alt="Rear selector JP2 — historical prototype source reference" caption="Projected native-CAD pad overlay retained. This is not a physical rear mating view and does not establish the fitted solder bridge. Follow the source alternate-function nets; do not infer an assembled setting." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-selector-limits" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/selector-limits.png" title="Alternate output and control limits" alt="Alternate output and control limits — historical prototype source reference" caption="JP1 and JP2 select alternate output/control functions. _EN and _CH are not interchangeable ordinary outputs; firmware service, signal levels and timing require qualification." width=420 %}

### Debouncer and decoupling contacts

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-1.png" title="MAX6818 U1 contacts · group 1" alt="MAX6818 U1 contacts · group 1 — historical prototype source reference" caption="Numbered source IC contacts and net names. The component identification alone does not qualify operating voltage, debounce timing, reset sequence or firmware integration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-2" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-2.png" title="MAX6818 U1 contacts · group 2" alt="MAX6818 U1 contacts · group 2 — historical prototype source reference" caption="Numbered source IC contacts and net names. The component identification alone does not qualify operating voltage, debounce timing, reset sequence or firmware integration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-3" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-3.png" title="MAX6818 U1 contacts · group 3" alt="MAX6818 U1 contacts · group 3 — historical prototype source reference" caption="Numbered source IC contacts and net names. The component identification alone does not qualify operating voltage, debounce timing, reset sequence or firmware integration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-u1-pins-4" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/u1-pins-4.png" title="MAX6818 U1 contacts · group 4" alt="MAX6818 U1 contacts · group 4 — historical prototype source reference" caption="Numbered source IC contacts and net names. The component identification alone does not qualify operating voltage, debounce timing, reset sequence or firmware integration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-c1-pins-1" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/c1-pins-1.png" title="C1 decoupling contacts" alt="C1 decoupling contacts — historical prototype source reference" caption="C1 spans source nets 5v and ground. The net label and source component do not establish a safe supply recipe or assembled bypass performance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-reference-mounting-limits" src="/images/extensions/historical-bounce-stop/guides/annotated-reference/mounting-limits.png" title="Mounting and use limitations" alt="Mounting and use limitations — historical prototype source reference" caption="Source mounting geometry and unnumbered holes are reference only. Verify fasteners, clearances and corrected connector orientation separately; the original prototype remains unsuitable for direct Prime connection." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched annotated reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/Bouncestop_x1.kicad_pcb), revision `9e938a20531446382ea9933614efd57284226b78`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-1-font-matched.png" title="Source input and output nodes" alt="Source input and output nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-3" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-3-font-matched.png" title="Source input and output nodes" alt="Source input and output nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-5-font-matched.png" title="Source input and output nodes" alt="Source input and output nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-channels-7" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/channels-7-font-matched.png" title="Source input and output nodes" alt="Source input and output nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-2-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-2-1-font-matched.png" title="Ground connector branches" alt="Ground connector branches — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-2-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-2-5-font-matched.png" title="Ground connector branches" alt="Ground connector branches — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-3-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-3-1-font-matched.png" title="Source 5v net connector branches" alt="Source 5v net connector branches — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-common-3-5" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/common-3-5-font-matched.png" title="Source 5v net connector branches" alt="Source 5v net connector branches — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-jp1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/jp1-font-matched.png" title="Conditional signal selection" alt="Conditional signal selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-jp2" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/jp2-font-matched.png" title="Conditional signal selection" alt="Conditional signal selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-host-1" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/host-1-font-matched.png" title="Host direct paths and isolated supply" alt="Host direct paths and isolated supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-bounce-stop-factual-host-2" src="/images/extensions/historical-bounce-stop/guides/factual-circuits/host-2-font-matched.png" title="Host direct paths and isolated supply" alt="Host direct paths and isolated supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The corrected harness and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
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

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a switch-debounce study, first use the schematic to design and verify an adapter correcting the known header problem. Test a dry contact on one field input and observe its conditioned output and debounce delay on a bench. Do not attach any Prime socket until exact mating-face numbering and the corrected adapter are documented. Interrupt mode additionally needs a deliberate _CH/_EN reset sequence.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

V2’s ordinary button/endstop paths read logical inputs; they do not automatically service this MAX6818 board’s change-latch and enable sequence. An external ButtonBox callback is an extension point, not an installed MAX6818 driver. The original author also identifies the v0.1/v0.2 Gadgeteer pinouts as incorrect. A corrected harness and qualified interface remain prerequisites. Interrupt/change-latch mode additionally needs explicit CH/EN service; that service is not required when the outputs are continuously enabled as described below.

### Parallel-output diagnostic, without interrupt service

The [MAX6818 datasheet, revision 8](https://www.analog.com/media/en/technical-documentation/data-sheets/max6816-max6818.pdf), printed page 4, permits `_EN` tied to ground for continuously enabled outputs; `_CH` may then remain unused. This provides a discrete-input use without inventing a MAX6818-specific interrupt driver.

A **conditional 3.3 V bench allocation**, rather than the incorrect original ten-way cable, uses Prime GF/J37.3 PB1 for board J10.3 Out1, a common return, a dry contact between J1.1 In1 and J1.2 ground, and local J9.2 `_EN` tied to J9.12 ground. Keep `_CH`, J10.4/.6, chain contacts and every 5 V source disconnected. In this evaluation mode the board net literally named `5v` would be supplied at 3.3 V: this is an intentional bench alternative, not the factory supply label or an instruction to join 3.3 V and 5 V rails. Qualify the rail/current and output-level margins, actual fitted part, microload switch, corrected contact orientation and local 100 nF bypass before energizing. The complete practical drawing remains pending.

After those prerequisites, with machine loads disabled and an existing valid X actuator, merge this uniquely named diagnostic into the existing section:

```ini
[endstops]
bounce_input1_diagnostic.enable = true
bounce_input1_diagnostic.pin = PB1-
bounce_input1_diagnostic.axis = X
bounce_input1_diagnostic.homing_direction = none
bounce_input1_diagnostic.limit_enable = false
```

`PB1-` disables the controller’s internal pull resistor; the debouncer input bias is on the input side. Reserve PB1 exclusively. Send `M119` after each switch state settles, allowing at least 100 ms for the datasheet’s 20–80 ms debounce interval. Read the PB1 state in the `pins-` report. This observes a steady state; it does not measure debounce timing, enable homing, enable travel limits or establish a safety function.

For the missing matching interrupt/change-latch service in the reviewed factory application, email **wolf.arthur@gamil.com**. The continuously enabled parallel-output diagnostic above uses the existing endstop input reader instead.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Known incorrect Gadgeteer pinout; corrected harness, supply/logic levels, debounce delay, one-shot reset protocol and Prime allocation remain unresolved. The corrected complete Prime/peripheral wiring diagram, public source/link availability and desktop/narrow rendered usability remain open. The annotated reference identifies source geometry and disagreements without correcting or qualifying the prototype.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/BounceStop)
- [Pinned original source](https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78)
- [Original BounceStop_x1.kicad_sch](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/BounceStop_x1.kicad_sch)
- [Original Bouncestop_x1.kicad_pcb](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/Bouncestop_x1.kicad_pcb)
- [Original README.md](https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
