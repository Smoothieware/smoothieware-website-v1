---
layout: default
title: "Four-PWM/two-input/probe interface"
permalink: /extensions/historical-gadgeteer-pwm-io-board
---

# Four-PWM/two-input/probe interface

This historical V2 PWM accessory combines four MOSFET-buffered PWM outputs, two passively debounced switch inputs and an LMV331 comparator probe input. Output pull-up voltage can be selected or removed for open-drain use. The input and output functions are fixed by the circuit; it is not the modern seven-servo board.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

Each 2N7002 output transistor connects its output to ground when its PWM gate is high. When the gate is low, the transistor releases the output; a fitted pull-up then raises it toward the selected supply. This is an inverting, sinking interface: a high host request produces a low output voltage. With the pull-up removed, the output needs a suitable external pull-up and remains open-drain; it cannot source a high level by itself.

J1.3/.4 are GPIO1/2 returns, .5 comparator return and .6–9 PWM1–4 requests. J6–J9 are output 1 signal, 2 ground, 3 selected VS; J2 is external1 VS, 2 ground. J3/J4 are switch interfaces and J5 the probe. JP2 normally joins host 5 V to VS and must be cut before substituting an external source. The README lists probe ranges2.9–5 V default, 5–24 V after JP5-2 cut, 6–45 V after JP5-2/3 cut; these are author configuration claims, not independently qualified board ratings. Never apply high voltage using this summary alone.

## Board-reference diagram

These source-matched sheets identify every connector contact, jumper and component in the pinned historical artwork. **REFERENCE ONLY — DO NOT ENERGIZE from these drawings.** Fitted jumper state, clamp behavior, load ratings, mating orientation and a complete Prime installation remain unqualified. Rear jumper details are native-source overlays, not invented solder bodies or fitted bridges.

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-overview" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/overview.svg" title="Historical four-channel PWM and input board overview" alt="Historical four-channel PWM and input board overview — numbered historical source reference" caption="Four low-side PWM stages, two switch inputs and a comparator probe input. The original voltage claims are not qualified operating ratings." width=420 %}

### Host and external supply

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j1-pins-1.svg" title="J1 source contacts · group 1" alt="J1 source contacts · group 1 — numbered historical source reference" caption="Numbered source contacts only; do not infer a plug face or energizable cable. JP2 joins host 5V to VS; external supply and backfeed behavior require qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j1-pins-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j1-pins-2.svg" title="J1 source contacts · group 2" alt="J1 source contacts · group 2 — numbered historical source reference" caption="Numbered source contacts only; do not infer a plug face or energizable cable. JP2 joins host 5V to VS; external supply and backfeed behavior require qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j2-pins-1.svg" title="J2 source contacts" alt="J2 source contacts — numbered historical source reference" caption="Numbered source contacts only; do not infer a plug face or energizable cable. JP2 joins host 5V to VS; external supply and backfeed behavior require qualification." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp2-pins-1.svg" title="JP2 source contacts" alt="JP2 source contacts — numbered historical source reference" caption="Numbered source contacts only; do not infer a plug face or energizable cable. JP2 joins host 5V to VS; external supply and backfeed behavior require qualification." width=420 %}

### PWM output contacts, stages and selectors

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j6-pins-1.svg" title="J6 source contacts" alt="J6 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j7-pins-1.svg" title="J7 source contacts" alt="J7 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j8-pins-1.svg" title="J8 source contacts" alt="J8 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j9-pins-1.svg" title="J9 source contacts" alt="J9 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q3-pins-1.svg" title="Q3 source contacts" alt="Q3 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q2-pins-1.svg" title="Q2 source contacts" alt="Q2 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q4-pins-1.svg" title="Q4 source contacts" alt="Q4 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q1-pins-1.svg" title="Q1 source contacts" alt="Q1 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r3-pins-1.svg" title="R3 source contacts" alt="R3 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r2-pins-1.svg" title="R2 source contacts" alt="R2 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r4-pins-1.svg" title="R4 source contacts" alt="R4 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r1-pins-1.svg" title="R1 source contacts" alt="R1 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp6-pins-1.svg" title="JP6 source contacts" alt="JP6 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp7-pins-1.svg" title="JP7 source contacts" alt="JP7 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp8-pins-1.svg" title="JP8 source contacts" alt="JP8 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp9-pins-1.svg" title="JP9 source contacts" alt="JP9 source contacts — numbered historical source reference" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity are not qualified." width=420 %}

### Switch inputs and their conditioning

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j3-pins-1.svg" title="J3 source contacts" alt="J3 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j4-pins-1.svg" title="J4 source contacts" alt="J4 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp3-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp3-1-pins-1.svg" title="JP3-1 source contacts" alt="JP3-1 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp3-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp3-2-pins-1.svg" title="JP3-2 source contacts" alt="JP3-2 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp4-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp4-1-pins-1.svg" title="JP4-1 source contacts" alt="JP4-1 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp4-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp4-2-pins-1.svg" title="JP4-2 source contacts" alt="JP4-2 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r5-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r5-pins-1.svg" title="R5 source contacts" alt="R5 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r6-pins-1.svg" title="R6 source contacts" alt="R6 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r7-pins-1.svg" title="R7 source contacts" alt="R7 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r8-pins-1.svg" title="R8 source contacts" alt="R8 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c1-pins-1.svg" title="C1 source contacts" alt="C1 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c2-pins-1.svg" title="C2 source contacts" alt="C2 source contacts — numbered historical source reference" caption="Source conditioning and jumper contacts only. Installed bridges, input voltage margins and a complete host/switch cable remain unresolved." width=420 %}

### Comparator probe input and clamp network

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j5-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j5-pins-1.svg" title="J5 source contacts" alt="J5 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-u1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/u1-pins-1.svg" title="U1 source contacts" alt="U1 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-d1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/d1-pins-1.svg" title="D1 source contacts" alt="D1 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-d2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/d2-pins-1.svg" title="D2 source contacts" alt="D2 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r9-pins-1.svg" title="R9 source contacts" alt="R9 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r10-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r10-pins-1.svg" title="R10 source contacts" alt="R10 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r11-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r11-pins-1.svg" title="R11 source contacts" alt="R11 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r12-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r12-pins-1.svg" title="R12 source contacts" alt="R12 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r13-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r13-pins-1.svg" title="R13 source contacts" alt="R13 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r14-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r14-pins-1.svg" title="R14 source contacts" alt="R14 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r15-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r15-pins-1.svg" title="R15 source contacts" alt="R15 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r16-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r16-pins-1.svg" title="R16 source contacts" alt="R16 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c3-pins-1.svg" title="C3 source contacts" alt="C3 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-1-pins-1.svg" title="JP5-1 source contacts" alt="JP5-1 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-2-pins-1.svg" title="JP5-2 source contacts" alt="JP5-2 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-3-pins-1.svg" title="JP5-3 source contacts" alt="JP5-3 source contacts — numbered historical source reference" caption="Source comparator and clamp connectivity only. README voltage ranges do not establish safe fitted populations, thresholds, sensor compatibility or powered operation." width=420 %}

### Mechanical source features

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h1-pins-1.svg" title="H1 source contacts" alt="H1 source contacts — numbered historical source reference" caption="Mechanical native-source feature, not an electrical connection. No mounting clearance or enclosure fit is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h2-pins-1.svg" title="H2 source contacts" alt="H2 source contacts — numbered historical source reference" caption="Mechanical native-source feature, not an electrical connection. No mounting clearance or enclosure fit is qualified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h3-pins-1.svg" title="H3 source contacts" alt="H3 source contacts — numbered historical source reference" caption="Mechanical native-source feature, not an electrical connection. No mounting clearance or enclosure fit is qualified." width=420 %}

### Supplementary logical circuits

These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and supplement the source-matched board-reference sheets above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_pcb), revision `81b679e5a76acc3218640c740d5348ecd5ce32ed`. No original-artwork redistribution grant has been established.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j6" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j6.svg" title="J6 switched output" alt="J6 switched output — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp6" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp6.svg" title="JP6 supply choice" alt="JP6 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r3.svg" title="J6 output pull-up" alt="J6 output pull-up — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j7" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j7.svg" title="J7 switched output" alt="J7 switched output — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp7" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp7.svg" title="JP7 supply choice" alt="JP7 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r2.svg" title="J7 output pull-up" alt="J7 output pull-up — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j8" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j8.svg" title="J8 switched output" alt="J8 switched output — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp8" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp8.svg" title="JP8 supply choice" alt="JP8 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r4" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r4.svg" title="J8 output pull-up" alt="J8 output pull-up — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j9" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j9.svg" title="J9 switched output" alt="J9 switched output — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp9" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp9.svg" title="JP9 supply choice" alt="JP9 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r1.svg" title="J9 output pull-up" alt="J9 output pull-up — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j3.svg" title="J3 GPIO input" alt="J3 GPIO input — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp3-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp3-1.svg" title="JP3-1 supply choice" alt="JP3-1 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp3-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp3-2.svg" title="J3 pull-up enable" alt="J3 pull-up enable — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j4" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j4.svg" title="J4 GPIO input" alt="J4 GPIO input — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp4-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp4-1.svg" title="JP4-1 supply choice" alt="JP4-1 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp4-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp4-2.svg" title="J4 pull-up enable" alt="J4 pull-up enable — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-1.svg" title="JP5-1 supply choice" alt="JP5-1 supply choice — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-input" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-input.svg" title="Comparator input path" alt="Comparator input path — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-3.svg" title="Divider bypass link" alt="Divider bypass link — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-input-shunts" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/input-shunts.svg" title="Comparator input shunts" alt="Comparator input shunts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-zener" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/zener.svg" title="Source Zener connection" alt="Source Zener connection — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-2.svg" title="Optional 5V diode feed" alt="Optional 5V diode feed — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-diode-feed" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/diode-feed.svg" title="Diode-to-input branch" alt="Diode-to-input branch — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-threshold" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/threshold.svg" title="Comparator reference" alt="Comparator reference — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-output" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-output.svg" title="Comparator output" alt="Comparator output — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-power" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-power.svg" title="Comparator supply" alt="Comparator supply — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp2.svg" title="VS supply bridge" alt="VS supply bridge — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-boundaries" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/boundaries.svg" title="Supply bridge and qualification limits" alt="Supply bridge and qualification limits — logical connections, not physical board layout" caption="Supplementary factual circuit only. The complete Prime installation remains incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| PWMlaserBoard.kicad_pcb | J2 | Conn_01x02_Pin | 1: VS; 2: GND |
| PWMlaserBoard.kicad_pcb | J3 | Conn_01x03_Pin | 1: Net-(J3-Pin_1); 2: GND; 3: Net-(J3-Pin_3) |
| PWMlaserBoard.kicad_pcb | JP2 | SolderJumper_2_Bridged | 1: +5V; 2: VS |
| PWMlaserBoard.kicad_pcb | J9 | Conn_01x03_Pin | 1: Net-(J9-Pin_1); 2: GND; 3: VS |
| PWMlaserBoard.kicad_pcb | J6 | Conn_01x03_Pin | 1: Net-(J6-Pin_1); 2: GND; 3: VS |
| PWMlaserBoard.kicad_pcb | J7 | Conn_01x03_Pin | 1: Net-(J7-Pin_1); 2: GND; 3: VS |
| PWMlaserBoard.kicad_pcb | J8 | Conn_01x03_Pin | 1: Net-(J8-Pin_1); 2: GND; 3: VS |
| PWMlaserBoard.kicad_pcb | J5 | Conn_01x03_Pin | 1: Net-(J5-Pin_1); 2: GND; 3: Net-(J5-Pin_3) |
| PWMlaserBoard.kicad_pcb | J4 | Conn_01x03_Pin | 1: Net-(J4-Pin_1); 2: GND; 3: Net-(J4-Pin_3) |
| PWMlaserBoard.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3.3V; 2: +5V; 3: GPIO1; 4: GPIO2; 5: Comparator; 6: PWM1; 7: PWM2; 8: PWM3; 9: PWM4; 10: GND |
| PWMlaserBoard.kicad_pcb | JP9 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(JP9-C); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP4-2 | SolderJumper_2_Bridged | 1: Net-(JP4-2-A); 2: Net-(J4-Pin_1) |
| PWMlaserBoard.kicad_pcb | JP3-1 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J3-Pin_1); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP5-3 | SolderJumper_2_Bridged | 1: Net-(JP5-3-A); 2: Net-(D1-K) |
| PWMlaserBoard.kicad_pcb | JP7 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(JP7-C); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP4-1 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J4-Pin_1); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP3-2 | SolderJumper_2_Bridged | 1: Net-(JP3-2-A); 2: Net-(J3-Pin_1) |
| PWMlaserBoard.kicad_pcb | JP6 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(JP6-C); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP5-2 | SolderJumper_2_Bridged | 1: +5V; 2: Net-(D2-A) |
| PWMlaserBoard.kicad_pcb | JP5-1 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(J5-Pin_1); 3: +3.3V |
| PWMlaserBoard.kicad_pcb | JP8 | SolderJumper_3_Bridged12 | 1: +5V; 2: Net-(JP8-C); 3: +3.3V |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a single low-voltage PWM-load test, identify its permitted signal and supply voltage, select output pull-up correctly and keep external VS disconnected unless JP2 isolation is proven. Allocate an actual Prime PWM socket whose contacts 6–9 have the required timers; GF/J37 arbitrary GPIO is not equivalent. Check each output’s inversion/open-drain rise time into a harmless fixture first. Leave the high-voltage probe input unused until its resistor/jumper paths and thresholds are independently reconciled.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The output circuit is inverting: a HIGH host gate sinks the output LOW, and LOW releases it toward its selected pull-up. Generic V2 hardware-PWM support does not by itself establish the requested peripheral waveform, safe pull-up voltage, hardware-timer pin assignment or startup state. Those remaining contracts prevent a complete executable mixed-I/O example.

### Conditional input and digital sink diagnostic

This meter-only example is withheld until numbered continuity, jumper population, 3.3 V rail budget and input/output voltage margins have been qualified. Leave peripherals and machine loads disconnected. It does not configure a PWM waveform.

A slow digital bench diagnostic does not require a PWM timer or peripheral protocol. Use only GPIO1 as an input and PWM1 as a digital transistor gate, with no peripheral or machine load attached. Select only 3.3 V pull-ups as below and leave 5 V/VS disconnected. The input has a 10 kΩ pull-up, 100 nF filter and 1 kΩ series connection to host PB1. A dry normally-open contact grounds it when closed. Output gate PG0 HIGH turns Q3 on and sinks J6.1 LOW; PG0 LOW releases J6.1 toward its selected 3.3 V / 10 kΩ pull-up. Therefore the `M42.18` logical ON command means drain LOW in this example. No `!` inversion is used; startup/halt false means gate LOW and drain released, not a guaranteed safe peripheral output. No PWM frequency/duty or laser-control claim is made.

With power removed, establish these jumper choices:

- **JP3-1**: Remove the default 1–2 bridge and fit 2–3 only. J3.1 selects the 3.3 V input supply; never bridge both rails.
- **JP3-2**: Bridge 1–2. Connect selected J3.1 to the R5 input pull-up (10 kΩ).
- **JP6**: Remove the default 1–2 bridge and fit 2–3 only. Select 3.3 V for the R3 output pull-up (10 kΩ).
- **JP2**: No external VS supply and no host 5 V lead; verify no backfeed. The default bridge joins +5 V to VS, so do not inject either rail. Other jumper defaults are not relied on.

Use only this partial cable and bench load; never plug in a full ribbon by connector shape:

<div class="extension-contact-table" role="region" aria-label="Conditional PWM diagnostic wiring; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source | Destination | Condition |
| --- | --- | --- |
| Prime P12 GF/J37.1 limited 3.3 V | J1.1 +3.3V | Only after rail budget/continuity qualification |
| J37.10 GND | J1.10 GND | Return |
| J37.3 PB1 input | J1.3 GPIO1 | Via R7 (1 kΩ) to input J3.3 |
| J37.6 PG0 output | J1.6 PWM1 | Q3 gate; no PWM timer configured |
| Dry normally-open contact | J3.3 signal ↔ J3.2 ground | J3.1 not used externally |
| High-impedance DC meter positive | J6.1 Q3 drain | No peripheral/load, no external voltage |
| Meter negative | J6.2 ground | J6.3 VS unused |

</div>

J1.2/4/5/7/8/9 unused; J2 external VS and all J4/J5/J7/J8/J9 contacts unused. J3.1 and J6.3 externally unused. No other host input/output ownership is implied. Comparator output is not connected to Prime.

Reserve PB1 and PG0 exclusively and reserve command subcode 18. An existing valid X actuator configuration is required. Merge these uniquely named entries into the existing sections; do not duplicate sections or pin allocations.

```ini
[endstops]
pwmboard_contact_diagnostic.enable = true
pwmboard_contact_diagnostic.pin = PB1-
pwmboard_contact_diagnostic.axis = X
pwmboard_contact_diagnostic.homing_direction = none
pwmboard_contact_diagnostic.limit_enable = false

[switch]
pwmboard_sink_diagnostic.enable = true
pwmboard_sink_diagnostic.output_pin = PG0
pwmboard_sink_diagnostic.output_type = digital
pwmboard_sink_diagnostic.input_on_command = M42
pwmboard_sink_diagnostic.input_off_command = M43
pwmboard_sink_diagnostic.subcode = 18
pwmboard_sink_diagnostic.startup_state = false
pwmboard_sink_diagnostic.halt_set_to = false
pwmboard_sink_diagnostic.ignore_on_halt = false
```

After the electrical prerequisites are satisfied, use these separate commands:

- `M119`: Observe `pins-` PB1 logical input with button open/closed; source expectation open HIGH / closed LOW after settling, not measured debounce or threshold result.
- `M43.18`: PG0 LOW, Q3 released; meter output approaches selected 3.3 V through 10 kΩ, after actual qualification.
- `M42.18`: PG0 HIGH, Q3 sinking; meter output approaches ground, not a sourced rail.
- `M43.18`: Return gate LOW / drain released; not a peripheral safety-OFF guarantee.

Startup and halt values describe configured firmware behavior, not reset-time pin levels or a safe peripheral state. Comparator/probe operation, other channels, external VS supply and real peripheral waveform requirements remain incomplete.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This does not identify the firmware installed on a reader’s controller or establish support for every historical board. Source-backed syntax is distinct from physical execution. If the required firmware functionality is absent, email **wolf.arthur@gamil.com** with the historical board, host revision and intended peripheral; unresolved support is not asserted to be absent.

## Remaining requirements

PWM inversion and pull-up voltage, comparator resistor/jumper ranges, VS backfeed, timer routes and probe/input semantics remain unresolved. The complete Prime/peripheral wiring diagram remains incomplete. The board-reference sheets establish source identities without qualifying powered operation.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/PWMBoard)
- [Pinned original source](https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed)
- [Original PWMlaserBoard.kicad_pcb](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_pcb)
- [Original PWMlaserBoard.kicad_sch](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_sch)
- [Original README.md](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/README.md)

The retained inventory did not identify a project license file. Preserve attribution and resolve redistribution rights before importing original artwork/layouts; absence of a license file is not public-domain permission. Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
