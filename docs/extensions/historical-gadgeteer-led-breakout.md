---
layout: default
title: "Historical seven-LED GPIO board"
permalink: /extensions/historical-gadgeteer-led-breakout
---

# Historical seven-LED GPIO board

Seven indicators connect host GPIOs through 1 kΩ resistors to LED anodes, with cathodes at ground. Therefore these historical indicators light when the host output is HIGH. This is the opposite polarity from the modern active-low LED breakout and must retain its own firmware example. It is useful for bench status indication and output debugging.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/LED_Breakout/tree/df7d5676186f403ad84463e31fd7e4100565203f) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1 uses 1 3.3 V, 2 5 V, 3–9 LED channels 1–7 and 10 ground. Direct source tracing shows J1.3→R1 1 kΩ→D1 anode, D1 cathode→ground; channel 2 similarly uses J1.4/R2/D2. The GPIO sources LED current; neither a 1 kΩ value nor a visible indicator establishes allowed cumulative MCU loading. There is no driver IC or added GPIO.

## Board-reference diagram

These source-matched sheets identify the historical board, its ten host contacts and all seven LED/resistor branches. The artwork and coordinate projection do not establish physical cable mating. Each indicator is driven from its GPIO through a 1 kΩ resistor to an LED, returning to common ground; the 3.3 V and 5 V header rails are not the LED branches.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-overview" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/overview.png" title="Historical seven-LED board overview" alt="Historical seven-LED board overview — historical board source reference" caption="Seven active-HIGH indicator branches, with no driver IC or additional GPIO. Component illustrations are references; source coordinates do not prove a mating face or installed hardware." width=420 %}

### Host connector

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-header-1" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/header-1.png" title="Host J1 contacts 1–5" alt="Host J1 contacts 1–5 — historical board source reference" caption="Rear-header source projection, not a plug-face diagram. Contacts 3–9 feed LED channels 1–7; contact 10 is their common ground. Contacts 1 and 2 are separate supply nodes, not LED feeds." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-header-2" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/header-2.png" title="Host J1 contacts 6–10" alt="Host J1 contacts 6–10 — historical board source reference" caption="Rear-header source projection, not a plug-face diagram. Contacts 3–9 feed LED channels 1–7; contact 10 is their common ground. Contacts 1 and 2 are separate supply nodes, not LED feeds." width=420 %}

### Individual LED and resistor branches

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-1" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-1.png" title="LED channel 1 · D1 and R1" alt="LED channel 1 · D1 and R1 — historical board source reference" caption="J1.3 feeds R1 (1 kΩ), then D1 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-2" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-2.png" title="LED channel 2 · D2 and R2" alt="LED channel 2 · D2 and R2 — historical board source reference" caption="J1.4 feeds R2 (1 kΩ), then D2 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-3" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-3.png" title="LED channel 3 · D3 and R3" alt="LED channel 3 · D3 and R3 — historical board source reference" caption="J1.5 feeds R3 (1 kΩ), then D3 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-4" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-4.png" title="LED channel 4 · D4 and R4" alt="LED channel 4 · D4 and R4 — historical board source reference" caption="J1.6 feeds R4 (1 kΩ), then D4 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-5" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-5.png" title="LED channel 5 · D5 and R5" alt="LED channel 5 · D5 and R5 — historical board source reference" caption="J1.7 feeds R5 (1 kΩ), then D5 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-6" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-6.png" title="LED channel 6 · D6 and R6" alt="LED channel 6 · D6 and R6 — historical board source reference" caption="J1.8 feeds R6 (1 kΩ), then D6 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-led-7" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/led-7.png" title="LED channel 7 · D7 and R7" alt="LED channel 7 · D7 and R7 — historical board source reference" caption="J1.9 feeds R7 (1 kΩ), then D7 anode; the cathode returns to common ground. HIGH requests illumination. LED forward voltage, brightness and GPIO current margin remain unqualified." width=420 %}

### Mounting and use limits

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-reference-mounting-limits" src="/images/extensions/historical-gadgeteer-led-breakout/guides/annotated-reference/mounting-limits.png" title="Mounting holes and source limitations" alt="Mounting holes and source limitations — historical board source reference" caption="The two mounting holes have no assigned electrical net. Verify fasteners, clearances, connector orientation and host loading separately; no powered or complete Prime installation is qualified." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/LED_Breakout.kicad_pcb), revision `df7d5676186f403ad84463e31fd7e4100565203f`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-breakout-factual-led-paths-1" src="/images/extensions/historical-gadgeteer-led-breakout/guides/factual-circuits/led-paths-1-font-matched.png" title="LED resistor paths" alt="LED resistor paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-breakout-factual-led-paths-4" src="/images/extensions/historical-gadgeteer-led-breakout/guides/factual-circuits/led-paths-4-font-matched.png" title="LED resistor paths" alt="LED resistor paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-breakout-factual-led-paths-7" src="/images/extensions/historical-gadgeteer-led-breakout/guides/factual-circuits/led-paths-7-font-matched.png" title="LED resistor paths" alt="LED resistor paths — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-led-breakout-factual-supply-distinction" src="/images/extensions/historical-gadgeteer-led-breakout/guides/factual-circuits/supply-distinction-font-matched.png" title="Unused supply nodes" alt="Unused supply nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| LED_Breakout.kicad_pcb | D3 | LED | 1: GND; 2: Net-(D3-A) |
| LED_Breakout.kicad_pcb | D2 | LED | 1: GND; 2: Net-(D2-A) |
| LED_Breakout.kicad_pcb | D1 | LED | 1: GND; 2: Net-(D1-A) |
| LED_Breakout.kicad_pcb | D4 | LED | 1: GND; 2: Net-(D4-A) |
| LED_Breakout.kicad_pcb | D7 | LED | 1: GND; 2: Net-(D7-A) |
| LED_Breakout.kicad_pcb | D6 | LED | 1: GND; 2: Net-(D6-A) |
| LED_Breakout.kicad_pcb | D5 | LED | 1: GND; 2: Net-(D5-A) |
| LED_Breakout.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: Net-(J1-Pin_3); 4: Net-(J1-Pin_4); 5: Net-(J1-Pin_5); 6: Net-(J1-Pin_6); 7: Net-(J1-Pin_7); 8: Net-(J1-Pin_8); 9: Net-(J1-Pin_9); 10: GND |

## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For the single-indicator bench example, connect only two individual leads with power off: Prime GF/J37.3 (PB1) to board J1.3, and Prime GF/J37.10 (ground) to board J1.10. Leave J1.1, J1.2 and J1.4–J1.9 unconnected; this LED path draws its current from PB1 through R1, so neither supply contact is required. Reserve PB1 and keep all other outputs/peripherals disconnected initially. Use the non-inverted digital example below: M106.9 requests HIGH and illuminates channel 1, M107.9 requests LOW and extinguishes it. Existing fan commands and any PB1 user must be removed or remapped deliberately rather than sharing the example accidentally.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

No board driver is required. A source-based candidate using the V2 digital-switch sample is:

```ini
[switch]
historical_led.enable = true
historical_led.output_pin = PB1
historical_led.output_type = digital
historical_led.input_on_command = M106
historical_led.input_off_command = M107
historical_led.subcode = 9
historical_led.startup_state = false
historical_led.halt_set_to = false
```

This has no ! inversion suffix because the retained LEDs are active HIGH. It is a source-checked syntax candidate, not a hardware test.

The example's configuration field names were checked against the [pinned V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). This establishes parsed field names, not pin ownership or assembled electrical behavior. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

Exact LED forward voltage/current, total source-current budget, header fit and complete machine command/pin conflicts remain unqualified. The complete Prime wiring diagram, public source/link availability and desktop/narrow rendered usability remain open. The board-reference sheets identify source geometry and contacts, without closing those installation requirements.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/LED_Breakout)
- [Pinned original source](https://github.com/Ccecil/LED_Breakout/tree/df7d5676186f403ad84463e31fd7e4100565203f)
- [Original LED_Breakout.kicad_pcb](https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/LED_Breakout.kicad_pcb)
- [Original LED_Breakout.kicad_sch](https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/LED_Breakout.kicad_sch)
- [Original README.md](https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.


The [reviewed V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) matches the retained source byte for byte. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output. This identifies source behavior, not the installed firmware or tested hardware.

[All extension boards](/extension-boards)
