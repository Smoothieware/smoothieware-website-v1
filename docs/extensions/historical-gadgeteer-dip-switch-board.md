---
layout: default
title: "DIP-switch and debounced-input board"
permalink: /extensions/historical-gadgeteer-dip-switch-board
---

# DIP-switch and debounced-input board

Four onboard DIP switches and three conditioned external inputs provide seven digital states for V2. The external inputs include passive filtering and ESD protection. The E_STOP_ label is an ordinary input name: the board is not an emergency-stop circuit or power disconnect.

The board targets the Smoothieboard V2/Gadgeteer headers. Check compatibility with your V2 Prime board, cable and firmware build.

## Interfaces and power

J1/J2 share 1 3.3 V, 2 5 V, 3–6 DIP states, 7 E_STOP_, 8 SW1, 9 SW2, 10 ground. The DIP switch grounds one side of each contact; a resistor network connects the other side toward host signal circuitry. J3/J4/J5 are external1 selectable pull-up/supply, 2 ground, 3 input. JP1/JP3/JP5 select the respective rail and JP2/JP4/JP6 disconnect pull-up paths. An external three-wire connector’s signal is pin3, unlike the modern Signal/Ground/5 V order.

## Board-reference diagram

These sheets annotate every connector, switch contact, jumper and circuit component. **A red cross marks the SW1 DIP-switch position; the switch body is not drawn.** Check the lever orientation on the board. Use the numbered contacts rather than assuming lever order, a plug face or cable mating.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-overview" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/overview.png" title="DIP-switch board overview" alt="DIP-switch board overview — reference with SW1 position crossed out" caption="Four DIP positions and three external input paths. The red cross marks the SW1 position; check lever orientation on the board. This board is not an emergency-stop device." width=420 %}

### Four DIP input paths

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-1.png" title="DIP input position 1" alt="DIP input position 1 — reference with SW1 position crossed out" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P3. Check physical lever order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-2.png" title="DIP input position 2" alt="DIP input position 2 — reference with SW1 position crossed out" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P4. Check physical lever order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-3" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-3.png" title="DIP input position 3" alt="DIP input position 3 — reference with SW1 position crossed out" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P5. Check physical lever order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-4" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-4.png" title="DIP input position 4" alt="DIP input position 4 — reference with SW1 position crossed out" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P6. Check physical lever order." width=420 %}

### Host headers and external input connectors

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j1-1.png" title="Header J1 · contact group 1" alt="Header J1 · contact group 1 — reference with SW1 position crossed out" caption="Numbered contacts. The two headers share the same nets; check cable orientation and mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j1-2.png" title="Header J1 · contact group 2" alt="Header J1 · contact group 2 — reference with SW1 position crossed out" caption="Numbered contacts. The two headers share the same nets; check cable orientation and mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j2-1.png" title="Header J2 · contact group 1" alt="Header J2 · contact group 1 — reference with SW1 position crossed out" caption="Numbered contacts. The two headers share the same nets; check cable orientation and mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j2-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j2-2.png" title="Header J2 · contact group 2" alt="Header J2 · contact group 2 — reference with SW1 position crossed out" caption="Numbered contacts. The two headers share the same nets; check cable orientation and mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j3-1.png" title="External input connector J3" alt="External input connector J3 — reference with SW1 position crossed out" caption="Contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Check rail compatibility and host protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j4-1.png" title="External input connector J4" alt="External input connector J4 — reference with SW1 position crossed out" caption="Contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Check rail compatibility and host protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j5-1.png" title="External input connector J5" alt="External input connector J5 — reference with SW1 position crossed out" caption="Contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Check rail compatibility and host protection." width=420 %}

### Six supply and pull-up jumpers

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp1-1.png" title="Solder jumper JP1" alt="Solder jumper JP1 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp2-1.png" title="Solder jumper JP2" alt="Solder jumper JP2 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp3-1.png" title="Solder jumper JP3" alt="Solder jumper JP3 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp4-1.png" title="Solder jumper JP4" alt="Solder jumper JP4 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp5-1.png" title="Solder jumper JP5" alt="Solder jumper JP5 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp6-1.png" title="Solder jumper JP6" alt="Solder jumper JP6 — reference with SW1 position crossed out" caption="Check the fitted solder bridge on the board. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; check host tolerance first." width=420 %}

### Switch and resistor-network contact details

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-sw1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/sw1-1.png" title="SW1 contacts · group 1" alt="SW1 contacts · group 1 — reference with SW1 position crossed out" caption="Contact pairs are 1–8, 2–7, 3–6 and 4–5. One side of every pair is grounded. The red cross does not show lever direction or bit order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-sw1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/sw1-2.png" title="SW1 contacts · group 2" alt="SW1 contacts · group 2 — reference with SW1 position crossed out" caption="Contact pairs are 1–8, 2–7, 3–6 and 4–5. One side of every pair is grounded. The red cross does not show lever direction or bit order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn1-1.png" title="Resistor array RN1 · contact group 1" alt="Resistor array RN1 · contact group 1 — reference with SW1 position crossed out" caption="RN1 provides the four 10 kΩ pull-ups to 3.3 V. Read the numbered nets with the corresponding DIP path." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn1-2.png" title="Resistor array RN1 · contact group 2" alt="Resistor array RN1 · contact group 2 — reference with SW1 position crossed out" caption="RN1 provides the four 10 kΩ pull-ups to 3.3 V. Read the numbered nets with the corresponding DIP path." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn2-1.png" title="Resistor array RN2 · contact group 1" alt="Resistor array RN2 · contact group 1 — reference with SW1 position crossed out" caption="RN2 provides the four 1 kΩ series paths toward host P3–P6. Read the numbered nets with the corresponding DIP path." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn2-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn2-2.png" title="Resistor array RN2 · contact group 2" alt="Resistor array RN2 · contact group 2 — reference with SW1 position crossed out" caption="RN2 provides the four 1 kΩ series paths toward host P3–P6. Read the numbered nets with the corresponding DIP path." width=420 %}

### Filtering, series resistors and protection

<details markdown="1">
<summary>Individual component contacts and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c1-1.png" title="Capacitor C1" alt="Capacitor C1 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c2-1.png" title="Capacitor C2" alt="Capacitor C2 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c3-1.png" title="Capacitor C3" alt="Capacitor C3 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c4-1.png" title="Capacitor C4" alt="Capacitor C4 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c5-1.png" title="Capacitor C5" alt="Capacitor C5 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c6-1.png" title="Capacitor C6" alt="Capacitor C6 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c7-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c7-1.png" title="Capacitor C7" alt="Capacitor C7 — reference with SW1 position crossed out" caption="Numbered capacitor contacts of the filtering network." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r1-1.png" title="Resistor R1" alt="Resistor R1 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r2-1.png" title="Resistor R2" alt="Resistor R2 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r3-1.png" title="Resistor R3" alt="Resistor R3 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r4-1.png" title="Resistor R4" alt="Resistor R4 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r5-1.png" title="Resistor R5" alt="Resistor R5 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r6-1.png" title="Resistor R6" alt="Resistor R6 — reference with SW1 position crossed out" caption="Numbered resistor contacts of the input network. Check host voltage tolerance and fault current for your sensor." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-u1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/u1-1.png" title="Protection component U1 · contact group 1" alt="Protection component U1 · contact group 1 — reference with SW1 position crossed out" caption="Protection-part contacts. This is not galvanic isolation or an emergency-stop function." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-u1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/u1-2.png" title="Protection component U1 · contact group 2" alt="Protection component U1 · contact group 2 — reference with SW1 position crossed out" caption="Protection-part contacts. This is not galvanic isolation or an emergency-stop function." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-h1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/h1-1.png" title="Mounting hole H1" alt="Mounting hole H1 — reference with SW1 position crossed out" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fasteners, clearances and board fit separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-h2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/h2-1.png" title="Mounting hole H2" alt="Mounting hole H2 — reference with SW1 position crossed out" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fasteners, clearances and board fit separately." width=420 %}

</details>

### Input limits

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-limits" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/limits.png" title="Signal, rail and safety limitations" alt="Signal, rail and safety limitations — reference with SW1 position crossed out" caption="Check fitted jumper states, mating and host voltage margins before powering. E_STOP_ is a net name, not a safety function or power disconnect." width=420 %}

### Supplementary logical circuits

These circuit sheets show the connectivity. They are not drawings of the board layout. Use them with the contact table and the sheets above.

Source: [original circuit](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-1-font-matched.png" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-2-font-matched.png" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-3" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-3-font-matched.png" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-4" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-4-font-matched.png" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-signal-font-matched.png" title="J3 series/filter input path" alt="J3 series/filter input path — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-selector-font-matched.png" title="J3 supply selection" alt="J3 supply selection — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-pullup-font-matched.png" title="J3 pull-up enable" alt="J3 pull-up enable — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-signal-font-matched.png" title="J4 series/filter input path" alt="J4 series/filter input path — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-selector-font-matched.png" title="J4 supply selection" alt="J4 supply selection — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-pullup-font-matched.png" title="J4 pull-up enable" alt="J4 pull-up enable — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-signal-font-matched.png" title="J5 series/filter input path" alt="J5 series/filter input path — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-selector-font-matched.png" title="J5 supply selection" alt="J5 supply selection — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-pullup-font-matched.png" title="J5 pull-up enable" alt="J5 pull-up enable — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-1-font-matched.png" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-5" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-5-font-matched.png" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-9" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-9-font-matched.png" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-protection" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/protection-font-matched.png" title="Input ESD channel nodes" alt="Input ESD channel nodes — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-safety-boundary" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/safety-boundary-font-matched.png" title="E_STOP is not a safety input" alt="E_STOP is not a safety input — logical connections, not physical board layout" caption="Logical connections only. Check connector locations and mating on the board." width=420 %}

### Numbered contacts and controls

Leave unassigned pads unconnected. Net names are not cable colours. Where footprints or pad numbers repeat, identify the part by its position before wiring.

<details markdown="1">
<summary>Connector contact table</summary>

<div class="extension-contact-table" role="region" aria-label="Connector contacts; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source file | Connector/control | Label | Contact → net |
|---|---|---|---|
| GDGT_DIP.kicad_pcb | J2 | Conn_01x10_Pin | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: E_STOP_; 8: SW1; 9: SW2; 10: GND |
| GDGT_DIP.kicad_pcb | J5 | Conn_01x03_Pin | 1: Net-(J5-Pin_1); 2: GND; 3: Net-(J5-Pin_3) |
| GDGT_DIP.kicad_pcb | SW1 | SW_DIP_x04 | 1: GND; 2: GND; 3: GND; 4: GND; 5: Net-(RN1-R4.1); 6: Net-(RN1-R3.1); 7: Net-(RN1-R2.1); 8: Net-(RN1-R1.1) |
| GDGT_DIP.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: P3; 4: P4; 5: P5; 6: P6; 7: E_STOP_; 8: SW1; 9: SW2; 10: GND |
| GDGT_DIP.kicad_pcb | J3 | Conn_01x03_Pin | 1: Net-(J3-Pin_1); 2: GND; 3: Net-(J3-Pin_3) |
| GDGT_DIP.kicad_pcb | J4 | Conn_01x03_Pin | 1: Net-(J4-Pin_1); 2: GND; 3: Net-(J4-Pin_3) |
| GDGT_DIP.kicad_pcb | JP1 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J3-Pin_1); 3: +3V3 |
| GDGT_DIP.kicad_pcb | JP4 | SolderJumper_2_Bridged | 1: Net-(J4-Pin_1); 2: Net-(JP4-B) |
| GDGT_DIP.kicad_pcb | JP6 | SolderJumper_2_Bridged | 1: Net-(J5-Pin_1); 2: Net-(JP6-B) |
| GDGT_DIP.kicad_pcb | JP5 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J5-Pin_1); 3: +3V3 |
| GDGT_DIP.kicad_pcb | JP2 | SolderJumper_2_Bridged | 1: Net-(J3-Pin_1); 2: Net-(JP2-B) |
| GDGT_DIP.kicad_pcb | JP3 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J4-Pin_1); 3: +3V3 |

</div>

</details>

## Practical use with Smoothieboard V2 Prime

For a control-panel experiment, first test each DIP and external contact individually with no motion enabled. Cable GF/J37 to J1 only after checking full numbered continuity: DIP contacts 3–6 become PB1/PJ4/PA4/PG0 and external signals7–9 PJ3/PG1/PJ2. Confirm which physical DIP lever corresponds to each host bit and verify input bias/polarity before configuration. For dry contacts do not inject an external sensor supply or choose 5 V pull-ups without checking host protection.

On the GF/J37 header, contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free pins before connection. Check each contact's hardware SPI, UART, CAN or PWM capability before relying on it.

## Smoothieware use

Use the generic V2 buttonbox module for compatible discrete inputs. Match its press/release actions to each measured input state and debounce behaviour; the board supplies no command map. Do not use it as an emergency stop.

### Four onboard DIP contacts: reading the switches

For the four onboard DIP contacts only, M119 can read PB1/PJ4/PA4/PG0 as inputs with no internal pulls, homing or limits. Each closed switch grounds its pulled-up node and reads 0; open reads 1. This does not cover external-input bias or debounce, and is not an emergency stop.

- Use individually numbered partial cable; J1.2 and J1.7/.8/.9 not connected to Prime. Do not use a full ribbon merely because four pins are described.
- J2 chain header and external J3/J4/J5 unused; no sensors or external supplies. The example does not depend on the rail-select jumper settings.
- With power removed confirm numbered continuity and each physical DIP lever corresponding to SW1 contact5/6/7/8. Check signal rails and current budget before energizing.
- Merge into existing single [endstops] section; existing valid X actuator configuration required. Unique names and exclusive ownership of all four pins.
- No axis movement/G28/KILL macro assigned. limit_enable=false and homing_direction=none retain diagnostic inputs only.

Connections:

- `Prime GF/J37.1` → `J1.1`: limited3V3.
- `J37.10` → `J1.10`: GND.
- `J37.3 PB1` → `J1.3 P3`: input only.
- `J37.4 PJ4` → `J1.4 P4`: input only.
- `J37.5 PA4` → `J1.5 P5`: input only.
- `J37.6 PG0` → `J1.6 P6`: input only.

```ini
[endstops]
dip_contact3_diagnostic.enable = true
dip_contact3_diagnostic.pin = PB1-
dip_contact3_diagnostic.axis = X
dip_contact3_diagnostic.homing_direction = none
dip_contact3_diagnostic.limit_enable = false

dip_contact4_diagnostic.enable = true
dip_contact4_diagnostic.pin = PJ4-
dip_contact4_diagnostic.axis = X
dip_contact4_diagnostic.homing_direction = none
dip_contact4_diagnostic.limit_enable = false

dip_contact5_diagnostic.enable = true
dip_contact5_diagnostic.pin = PA4-
dip_contact5_diagnostic.axis = X
dip_contact5_diagnostic.homing_direction = none
dip_contact5_diagnostic.limit_enable = false

dip_contact6_diagnostic.enable = true
dip_contact6_diagnostic.pin = PG0-
dip_contact6_diagnostic.axis = X
dip_contact6_diagnostic.homing_direction = none
dip_contact6_diagnostic.limit_enable = false
```

Send `M119`. Find (X)PB1:0/1, (X)PJ4:0/1, (X)PA4:0/1 and (X)PG0:0/1 after pins-. LOW 0 means the corresponding contact is closed to GND; HIGH 1 means open. No inversion or internal pull is enabled. Toggle one DIP at a time, record mapping. Other configured endstops may appear.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/GDGT_DIP)
- [Original source](https://github.com/Ccecil/GDGT_DIP/tree/5d9241dde89d567bd8386762743478f9c7e650c0)
- [Original GDGT_DIP.kicad_pcb](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_pcb)
- [Original GDGT_DIP.kicad_sch](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_sch)
- [Original README.md](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/README.md)

The source project has no license file. Attribution belongs to the original author; the missing license file is not public-domain permission. Modern counterpart guides are functional comparisons only; their pinouts may differ.

[All extension boards](/extension-boards)
