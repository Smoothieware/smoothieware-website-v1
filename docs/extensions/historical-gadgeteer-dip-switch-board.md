---
layout: default
title: "DIP-switch and debounced-input board"
permalink: /extensions/historical-gadgeteer-dip-switch-board
---

# DIP-switch and debounced-input board

Four onboard DIP switches and three conditioned external inputs provide seven digital states for V2. The external inputs include passive filtering and ESD protection. A source label E_STOP_ is an ordinary input name, not certification of an emergency-stop circuit or power disconnect.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/GDGT_DIP/tree/5d9241dde89d567bd8386762743478f9c7e650c0) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1/J2 share 1 3.3 V, 2 5 V, 3–6 DIP states, 7 E_STOP_, 8 SW1, 9 SW2, 10 ground. The DIP switch grounds one side of each contact; a resistor network connects the other side toward host signal circuitry. J3/J4/J5 are external1 selectable pull-up/supply, 2 ground, 3 input. JP1/JP3/JP5 select the respective rail and JP2/JP4/JP6 disconnect pull-up paths. An external three-wire connector’s signal is pin3, unlike the modern Signal/Ground/5 V order.

## Board-reference diagram

These reference sheets retain the pinned source artwork and annotate every connector, switch contact, jumper and circuit component. **The red crossed-out SW1 placeholder marks a missing, unverified DIP-switch body.** Its position comes from the source PCB; its body geometry and physical lever orientation are not established. Use numbered source contacts rather than assuming lever order, a plug face or cable mating.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-overview" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/overview.svg" title="Historical DIP-switch board overview" alt="Historical DIP-switch board overview — historical source reference with missing switch body" caption="Four DIP positions and three external input paths. The red-cross SW1 placeholder is intentional: no verified physical switch body or actuation orientation is available. No safety-rated emergency-stop function is established." width=420 %}

### Four DIP input paths

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-1.svg" title="DIP input position 1" alt="DIP input position 1 — historical source reference with missing switch body" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P3. Physical lever order and debounce performance remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-2.svg" title="DIP input position 2" alt="DIP input position 2 — historical source reference with missing switch body" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P4. Physical lever order and debounce performance remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-3" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-3.svg" title="DIP input position 3" alt="DIP input position 3 — historical source reference with missing switch body" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P5. Physical lever order and debounce performance remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-dip-4" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/dip-4.svg" title="DIP input position 4" alt="DIP input position 4 — historical source reference with missing switch body" caption="Closed contact ties its node to ground; open contact has a 10 kΩ pull-up to 3.3 V. A 100 nF capacitor connects that node to ground and a 1 kΩ series path feeds host P6. Physical lever order and debounce performance remain unverified." width=420 %}

### Host headers and external input connectors

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j1-1.svg" title="Header J1 · contact group 1" alt="Header J1 · contact group 1 — historical source reference with missing switch body" caption="Numbered source contacts only. The two headers share the source nets; connector illustration and placement do not prove cable orientation or physical mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j1-2.svg" title="Header J1 · contact group 2" alt="Header J1 · contact group 2 — historical source reference with missing switch body" caption="Numbered source contacts only. The two headers share the source nets; connector illustration and placement do not prove cable orientation or physical mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j2-1.svg" title="Header J2 · contact group 1" alt="Header J2 · contact group 1 — historical source reference with missing switch body" caption="Numbered source contacts only. The two headers share the source nets; connector illustration and placement do not prove cable orientation or physical mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j2-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j2-2.svg" title="Header J2 · contact group 2" alt="Header J2 · contact group 2 — historical source reference with missing switch body" caption="Numbered source contacts only. The two headers share the source nets; connector illustration and placement do not prove cable orientation or physical mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j3-1.svg" title="External input connector J3" alt="External input connector J3 — historical source reference with missing switch body" caption="Source order: contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Rail compatibility and host protection require separate checks." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j4-1.svg" title="External input connector J4" alt="External input connector J4 — historical source reference with missing switch body" caption="Source order: contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Rail compatibility and host protection require separate checks." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-j5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/j5-1.svg" title="External input connector J5" alt="External input connector J5 — historical source reference with missing switch body" caption="Source order: contact 1 selectable rail/pull-up supply, 2 ground, 3 input. Do not substitute the modern Signal/Ground/5 V order. Rail compatibility and host protection require separate checks." width=420 %}

### Six supply and pull-up jumpers

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp1-1.svg" title="Solder jumper JP1" alt="Solder jumper JP1 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp2-1.svg" title="Solder jumper JP2" alt="Solder jumper JP2 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp3-1.svg" title="Solder jumper JP3" alt="Solder jumper JP3 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp4-1.svg" title="Solder jumper JP4" alt="Solder jumper JP4 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp5-1.svg" title="Solder jumper JP5" alt="Solder jumper JP5 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-jp6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/jp6-1.svg" title="Solder jumper JP6" alt="Solder jumper JP6 — historical source reference with missing switch body" caption="Source contact membership does not establish the fitted solder bridge. Odd-numbered selectors choose the associated port rail; even-numbered jumpers connect its pull-up path. A 5 V pull-up may reach the host input; protection and compatibility remain unqualified." width=420 %}

### Switch and resistor-network contact details

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-sw1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/sw1-1.svg" title="SW1 source contacts · group 1" alt="SW1 source contacts · group 1 — historical source reference with missing switch body" caption="Contact pairs are 1–8, 2–7, 3–6 and 4–5. The source grounds one side of every pair. The red-cross artwork is not a verified body, lever direction or physical bit-order illustration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-sw1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/sw1-2.svg" title="SW1 source contacts · group 2" alt="SW1 source contacts · group 2 — historical source reference with missing switch body" caption="Contact pairs are 1–8, 2–7, 3–6 and 4–5. The source grounds one side of every pair. The red-cross artwork is not a verified body, lever direction or physical bit-order illustration." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn1-1.svg" title="Resistor array RN1 · contact group 1" alt="Resistor array RN1 · contact group 1 — historical source reference with missing switch body" caption="RN1 provides the four 10 kΩ pull-ups to 3.3 V. Read numbered source nets with the corresponding DIP path; component value does not qualify input timing or current margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn1-2.svg" title="Resistor array RN1 · contact group 2" alt="Resistor array RN1 · contact group 2 — historical source reference with missing switch body" caption="RN1 provides the four 10 kΩ pull-ups to 3.3 V. Read numbered source nets with the corresponding DIP path; component value does not qualify input timing or current margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn2-1.svg" title="Resistor array RN2 · contact group 1" alt="Resistor array RN2 · contact group 1 — historical source reference with missing switch body" caption="RN2 provides the four 1 kΩ series paths toward host P3–P6. Read numbered source nets with the corresponding DIP path; component value does not qualify input timing or current margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-rn2-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/rn2-2.svg" title="Resistor array RN2 · contact group 2" alt="Resistor array RN2 · contact group 2 — historical source reference with missing switch body" caption="RN2 provides the four 1 kΩ series paths toward host P3–P6. Read numbered source nets with the corresponding DIP path; component value does not qualify input timing or current margins." width=420 %}

### Filtering, series resistors and protection

<details markdown="1">
<summary>Individual component contacts and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c1-1.svg" title="Capacitor C1" alt="Capacitor C1 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c2-1.svg" title="Capacitor C2" alt="Capacitor C2 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c3-1.svg" title="Capacitor C3" alt="Capacitor C3 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c4-1.svg" title="Capacitor C4" alt="Capacitor C4 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c5-1.svg" title="Capacitor C5" alt="Capacitor C5 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c6-1.svg" title="Capacitor C6" alt="Capacitor C6 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-c7-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/c7-1.svg" title="Capacitor C7" alt="Capacitor C7 — historical source reference with missing switch body" caption="Numbered source capacitor contacts identify the filtering network. Source values and topology do not establish debounce timing, input thresholds or measured transient protection." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r1-1.svg" title="Resistor R1" alt="Resistor R1 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r2-1.svg" title="Resistor R2" alt="Resistor R2 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r3-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r3-1.svg" title="Resistor R3" alt="Resistor R3 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r4-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r4-1.svg" title="Resistor R4" alt="Resistor R4 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r5-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r5-1.svg" title="Resistor R5" alt="Resistor R5 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-r6-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/r6-1.svg" title="Resistor R6" alt="Resistor R6 — historical source reference with missing switch body" caption="Numbered source resistor contacts identify the selected input network. Values do not establish host voltage tolerance, fault current or a qualified external sensor interface." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-u1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/u1-1.svg" title="Protection component U1 · contact group 1" alt="Protection component U1 · contact group 1 — historical source reference with missing switch body" caption="Source protection-part contacts; ratings and assembled protection performance remain unverified. This is not galvanic-isolation or emergency-stop safety acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-u1-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/u1-2.svg" title="Protection component U1 · contact group 2" alt="Protection component U1 · contact group 2 — historical source reference with missing switch body" caption="Source protection-part contacts; ratings and assembled protection performance remain unverified. This is not galvanic-isolation or emergency-stop safety acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-h1-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/h1-1.svg" title="Mounting hole H1" alt="Mounting hole H1 — historical source reference with missing switch body" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fasteners, clearances and board fit separately." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-h2-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/h2-1.svg" title="Mounting hole H2" alt="Mounting hole H2 — historical source reference with missing switch body" caption="Unnumbered mounting hole, with no assigned electrical net. Verify fasteners, clearances and board fit separately." width=420 %}

</details>

### Input and use limitations

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-reference-limits" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/annotated-reference/limits.svg" title="Signal, rail and safety limitations" alt="Signal, rail and safety limitations — historical source reference with missing switch body" caption="Source references only: fitted jumper states, physical mating, host voltage margins and powered behavior remain unqualified. E_STOP_ is a net name, not a safety function or power disconnect." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched reference sheets above; the DIP body remains an explicit missing-artwork placeholder. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_pcb), revision `5d9241dde89d567bd8386762743478f9c7e650c0`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-1-font-matched.svg" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-2" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-2-font-matched.svg" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-3" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-3-font-matched.svg" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-dip-4" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/dip-4-font-matched.svg" title="DIP input series and pull-up circuit" alt="DIP input series and pull-up circuit — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-signal-font-matched.svg" title="J3 series/filter input path" alt="J3 series/filter input path — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-selector-font-matched.svg" title="J3 supply selection" alt="J3 supply selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j3-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j3-pullup-font-matched.svg" title="J3 pull-up enable" alt="J3 pull-up enable — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-signal-font-matched.svg" title="J4 series/filter input path" alt="J4 series/filter input path — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-selector-font-matched.svg" title="J4 supply selection" alt="J4 supply selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j4-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j4-pullup-font-matched.svg" title="J4 pull-up enable" alt="J4 pull-up enable — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-signal" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-signal-font-matched.svg" title="J5 series/filter input path" alt="J5 series/filter input path — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-selector" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-selector-font-matched.svg" title="J5 supply selection" alt="J5 supply selection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-j5-pullup" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/j5-pullup-font-matched.svg" title="J5 pull-up enable" alt="J5 pull-up enable — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-1" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-1-font-matched.svg" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-5" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-5-font-matched.svg" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-host-9" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/host-9-font-matched.svg" title="Host pass-through" alt="Host pass-through — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-protection" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/protection-font-matched.svg" title="Input ESD channel nodes" alt="Input ESD channel nodes — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-dip-switch-board-factual-safety-boundary" src="/images/extensions/historical-gadgeteer-dip-switch-board/guides/factual-circuits/safety-boundary-font-matched.svg" title="E_STOP source name is not safety proof" alt="E_STOP source name is not safety proof — logical connections, not physical board layout" caption="Supplementary factual circuit only. The DIP body artwork and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
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

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a control-panel experiment, first test each DIP and external contact individually with no motion enabled. Cable GF/J37 to J1 only after full numbered continuity: DIP contacts 3–6 become PB1/PJ4/PA4/PG0 and external signals7–9 PJ3/PG1/PJ2. Confirm which physical DIP lever corresponds to each host bit and verify input bias/polarity before configuration. For dry contacts do not inject an external sensor supply or choose 5 V pull-ups without proving host protection.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The generic V2 buttonbox module is a candidate for compatible discrete inputs. Its press/release actions must match each measured input state and debounce behaviour; the board supplies no command map. No safety-rated emergency-stop behaviour is established.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

DIP lever bit order, input conditioning thresholds, rail-selector defaults, cable orientation and per-button action/polarity remain unresolved. The DIP body artwork, complete Prime/peripheral wiring diagram, public source/link availability and desktop/narrow rendered usability remain open. The annotated board reference identifies source contacts and preserves the missing-body limitation.

### Four onboard DIP contacts: state-only diagnostic

For the four onboard DIP contacts only, a source-checked M119 diagnostic can read PB1/PJ4/PA4/PG0 as inputs with no internal pulls, homing or limits. Each closed switch grounds its pulled-up node and reads 0; open reads1. This does not qualify external-input bias, debounce, emergency-stop behavior or physical lever numbering.

- Use individually numbered partial cable; J1.2 and J1.7/.8/.9 not connected to Prime. Do not use a full ribbon merely because four pins are described.
- J2 chain header and external J3/J4/J5 unused; no sensors or external supplies. The example does not rely on rail-select jumper defaults.
- With power removed confirm numbered continuity and each physical DIP lever corresponding to SW1 contact5/6/7/8. Qualify signal rails/budget before energizing.
- Merge into existing single [endstops] section; existing valid X actuator configuration required. Unique names and exclusive ownership of all four pins.
- No axis movement/G28/KILL macro assigned. limit_enable=false and homing_direction=none retain diagnostic inputs only.
- No runtime, pulse timing, debounce, host power or physical mating qualification inferred.

Connections:

- `Prime P12 GF/J37.1` → `J1.1`: limited3V3.
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

Send `M119`. Find (X)PB1:0/1, (X)PJ4:0/1, (X)PA4:0/1 and (X)PG0:0/1 after pins-. LOW0 means corresponding source contact closed toGND; HIGH 1 means open. No inversion or internal pull is enabled. Toggle one DIP at a time, record mapping. Other configured endstops may appear.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/GDGT_DIP)
- [Pinned original source](https://github.com/Ccecil/GDGT_DIP/tree/5d9241dde89d567bd8386762743478f9c7e650c0)
- [Original GDGT_DIP.kicad_pcb](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_pcb)
- [Original GDGT_DIP.kicad_sch](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_sch)
- [Original README.md](https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/README.md)

The retained inventory did not identify a project license file. Source attribution is retained for these locally prepared reference sheets. Absence of a license file is not public-domain permission; external redistribution rights remain unresolved. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
