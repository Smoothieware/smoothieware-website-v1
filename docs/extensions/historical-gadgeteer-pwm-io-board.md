---
layout: default
title: "Four-PWM/two-input/probe interface"
permalink: /extensions/historical-gadgeteer-pwm-io-board
---

# Four-PWM/two-input/probe interface

This V2 PWM accessory combines four MOSFET-buffered PWM outputs, two passively debounced switch inputs and an LMV331 comparator probe input. Output pull-up voltage can be selected or removed for open-drain use. The input and output functions are fixed by the circuit; it is not a seven-servo board.

## Original host

This guide documents the **Ccecil design**. [The upstream source](https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed) contains the design files. It targets the Smoothieboard V2/Gadgeteer era. That target does not mean compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

Each 2N7002 output transistor connects its output to ground when its PWM gate is high. When the gate is low, the transistor releases the output; a fitted pull-up then raises it toward the selected supply. This is an inverting, sinking interface: a high host request produces a low output voltage. With the pull-up removed, the output needs a suitable external pull-up and remains open-drain; it cannot source a high level by itself.

J1.3/.4 are GPIO1/2 returns, .5 comparator return and .6–9 PWM1–4 requests. J6–J9 are output 1 signal, 2 ground, 3 selected VS; J2 is external1 VS, 2 ground. J3/J4 are switch interfaces and J5 the probe. JP2 normally joins host 5 V to VS and must be cut before substituting an external source. The README lists probe ranges2.9–5 V default, 5–24 V after JP5-2 cut, 6–45 V after JP5-2/3 cut; these are the author’s configuration notes, not board ratings. Never apply high voltage using this summary alone.

## Board-reference diagram

These sheets identify every connector contact, jumper and component. **REFERENCE ONLY — DO NOT ENERGIZE from these drawings.** They do not give the fitted jumper state, clamp behavior, load ratings or mating orientation. Rear jumper details are overlays, not solder bodies or fitted bridges.

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-overview" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/overview.png" title="Four-channel PWM and input board overview" alt="Four-channel PWM and input board overview" caption="Four low-side PWM stages, two switch inputs and a comparator probe input. The README voltage ranges are not operating ratings." width=420 %}

### Host and external supply

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j1-pins-1.png" title="J1 contacts · group 1" alt="J1 contacts · group 1" caption="Numbered contacts; this is not a plug-face view. JP2 joins host 5V to VS; check external supply and backfeed behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j1-pins-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j1-pins-2.png" title="J1 contacts · group 2" alt="J1 contacts · group 2" caption="Numbered contacts; this is not a plug-face view. JP2 joins host 5V to VS; check external supply and backfeed behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j2-pins-1.png" title="J2 contacts" alt="J2 contacts" caption="Numbered contacts; this is not a plug-face view. JP2 joins host 5V to VS; check external supply and backfeed behavior." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp2-pins-1.png" title="JP2 contacts" alt="JP2 contacts" caption="Numbered contacts; this is not a plug-face view. JP2 joins host 5V to VS; check external supply and backfeed behavior." width=420 %}

### PWM output contacts, stages and selectors

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j6-pins-1.png" title="J6 contacts" alt="J6 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j7-pins-1.png" title="J7 contacts" alt="J7 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j8-pins-1.png" title="J8 contacts" alt="J8 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j9-pins-1.png" title="J9 contacts" alt="J9 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q3-pins-1.png" title="Q3 contacts" alt="Q3 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q2-pins-1.png" title="Q2 contacts" alt="Q2 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q4-pins-1.png" title="Q4 contacts" alt="Q4 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-q1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/q1-pins-1.png" title="Q1 contacts" alt="Q1 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r3-pins-1.png" title="R3 contacts" alt="R3 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r2-pins-1.png" title="R2 contacts" alt="R2 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r4-pins-1.png" title="R4 contacts" alt="R4 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r1-pins-1.png" title="R1 contacts" alt="R1 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp6-pins-1.png" title="JP6 contacts" alt="JP6 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp7-pins-1.png" title="JP7 contacts" alt="JP7 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp8-pins-1.png" title="JP8 contacts" alt="JP8 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp9-pins-1.png" title="JP9 contacts" alt="JP9 contacts" caption="Gate HIGH sinks the output LOW; gate LOW releases it. Pull-up selection, load current, timing and firmware polarity depend on your installation." width=420 %}

### Switch inputs and their conditioning

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j3-pins-1.png" title="J3 contacts" alt="J3 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j4-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j4-pins-1.png" title="J4 contacts" alt="J4 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp3-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp3-1-pins-1.png" title="JP3-1 contacts" alt="JP3-1 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp3-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp3-2-pins-1.png" title="JP3-2 contacts" alt="JP3-2 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp4-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp4-1-pins-1.png" title="JP4-1 contacts" alt="JP4-1 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp4-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp4-2-pins-1.png" title="JP4-2 contacts" alt="JP4-2 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r5-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r5-pins-1.png" title="R5 contacts" alt="R5 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r6-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r6-pins-1.png" title="R6 contacts" alt="R6 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r7-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r7-pins-1.png" title="R7 contacts" alt="R7 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r8-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r8-pins-1.png" title="R8 contacts" alt="R8 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c1-pins-1.png" title="C1 contacts" alt="C1 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c2-pins-1.png" title="C2 contacts" alt="C2 contacts" caption="Conditioning and jumper contacts. Check installed bridges and input voltage margins." width=420 %}

### Comparator probe input and clamp network

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-j5-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/j5-pins-1.png" title="J5 contacts" alt="J5 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-u1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/u1-pins-1.png" title="U1 contacts" alt="U1 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-d1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/d1-pins-1.png" title="D1 contacts" alt="D1 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-d2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/d2-pins-1.png" title="D2 contacts" alt="D2 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r9-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r9-pins-1.png" title="R9 contacts" alt="R9 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r10-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r10-pins-1.png" title="R10 contacts" alt="R10 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r11-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r11-pins-1.png" title="R11 contacts" alt="R11 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r12-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r12-pins-1.png" title="R12 contacts" alt="R12 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r13-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r13-pins-1.png" title="R13 contacts" alt="R13 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r14-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r14-pins-1.png" title="R14 contacts" alt="R14 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r15-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r15-pins-1.png" title="R15 contacts" alt="R15 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-r16-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/r16-pins-1.png" title="R16 contacts" alt="R16 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-c3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/c3-pins-1.png" title="C3 contacts" alt="C3 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-1-pins-1.png" title="JP5-1 contacts" alt="JP5-1 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-2-pins-1.png" title="JP5-2 contacts" alt="JP5-2 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-jp5-3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/jp5-3-pins-1.png" title="JP5-3 contacts" alt="JP5-3 contacts" caption="Comparator and clamp connectivity. README voltage ranges do not guarantee thresholds or sensor compatibility." width=420 %}

### Mechanical features

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h1-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h1-pins-1.png" title="H1 contacts" alt="H1 contacts" caption="Mechanical feature, not an electrical connection. Check mounting clearance and enclosure fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h2-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h2-pins-1.png" title="H2 contacts" alt="H2 contacts" caption="Mechanical feature, not an electrical connection. Check mounting clearance and enclosure fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-pwm-reference-h3-pins-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/annotated-reference/h3-pins-1.png" title="H3 contacts" alt="H3 contacts" caption="Mechanical feature, not an electrical connection. Check mounting clearance and enclosure fit." width=420 %}

### Supplementary logical circuits

These circuit sheets explain the connectivity. They do not copy the original board artwork or placement and supplement the board-reference sheets above. Use the contact list and all companion sheets together.

Source: [original circuit](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_pcb). No grant to redistribute the original artwork is stated.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j6" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j6.png" title="J6 switched output" alt="J6 switched output — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp6" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp6.png" title="JP6 supply choice" alt="JP6 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r3.png" title="J6 output pull-up" alt="J6 output pull-up — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j7" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j7.png" title="J7 switched output" alt="J7 switched output — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp7" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp7.png" title="JP7 supply choice" alt="JP7 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r2.png" title="J7 output pull-up" alt="J7 output pull-up — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j8" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j8.png" title="J8 switched output" alt="J8 switched output — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp8" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp8.png" title="JP8 supply choice" alt="JP8 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r4" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r4.png" title="J8 output pull-up" alt="J8 output pull-up — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j9" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j9.png" title="J9 switched output" alt="J9 switched output — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp9" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp9.png" title="JP9 supply choice" alt="JP9 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-r1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/r1.png" title="J9 output pull-up" alt="J9 output pull-up — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j3.png" title="J3 GPIO input" alt="J3 GPIO input — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp3-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp3-1.png" title="JP3-1 supply choice" alt="JP3-1 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp3-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp3-2.png" title="J3 pull-up enable" alt="J3 pull-up enable — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-j4" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/j4.png" title="J4 GPIO input" alt="J4 GPIO input — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp4-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp4-1.png" title="JP4-1 supply choice" alt="JP4-1 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp4-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp4-2.png" title="J4 pull-up enable" alt="J4 pull-up enable — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-1" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-1.png" title="JP5-1 supply choice" alt="JP5-1 supply choice — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-input" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-input.png" title="Comparator input path" alt="Comparator input path — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-3" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-3.png" title="Divider bypass link" alt="Divider bypass link — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-input-shunts" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/input-shunts.png" title="Comparator input shunts" alt="Comparator input shunts — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-zener" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/zener.png" title="Zener connection" alt="Zener connection — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp5-2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp5-2.png" title="Optional 5V diode feed" alt="Optional 5V diode feed — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-diode-feed" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/diode-feed.png" title="Diode-to-input branch" alt="Diode-to-input branch — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-threshold" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/threshold.png" title="Comparator reference" alt="Comparator reference — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-output" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-output.png" title="Comparator output" alt="Comparator output — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-comparator-power" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/comparator-power.png" title="Comparator supply" alt="Comparator supply — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-jp2" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/jp2.png" title="VS supply bridge" alt="VS supply bridge — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-pwm-io-board-factual-boundaries" src="/images/extensions/historical-gadgeteer-pwm-io-board/guides/factual-circuits/boundaries.png" title="Supply bridge and limits" alt="Supply bridge and limits — logical connections, not physical board layout" caption="Logical circuit only: it does not show connector locations, mating or ratings." width=420 %}

### Numbered contacts and controls

The table lists net memberships. Leave unassigned and unconnected pads unconnected. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require physical identity checks before wiring.

<details markdown="1">
<summary>Contact list</summary>

<div class="extension-contact-table" role="region" aria-label="Contact list; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source file | Connector/control | Label | Contact → net |
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

For a single low-voltage PWM-load test, identify its permitted signal and supply voltage, select output pull-up correctly and keep external VS disconnected unless JP2 isolation is verified. Allocate an actual Prime PWM socket whose contacts 6–9 have the required timers; GF/J37 arbitrary GPIO is not equivalent. Check each output’s inversion/open-drain rise time into a harmless fixture first. Leave the high-voltage probe input unused until you have checked its resistor/jumper paths and thresholds.

GF/J37 examples refer only to the **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

The output circuit is inverting: a HIGH host gate sinks the output LOW, and LOW releases it toward its selected pull-up. Generic V2 hardware-PWM support does not by itself set the requested peripheral waveform, safe pull-up voltage, hardware-timer pin assignment or startup state.

### Input and digital sink diagnostic

Before running this meter-only example, check numbered continuity, jumper population, the 3.3 V rail budget and input/output voltage margins. Leave peripherals and machine loads disconnected. It does not configure a PWM waveform.

A slow digital bench diagnostic does not require a PWM timer or peripheral protocol. Use only GPIO1 as an input and PWM1 as a digital transistor gate, with no peripheral or machine load attached. Select only 3.3 V pull-ups as below and leave 5 V/VS disconnected. The input has a 10 kΩ pull-up, 100 nF filter and 1 kΩ series connection to host PB1. A dry normally-open contact grounds it when closed. Output gate PG0 HIGH turns Q3 on and sinks J6.1 LOW; PG0 LOW releases J6.1 toward its selected 3.3 V / 10 kΩ pull-up. Therefore the `M42.18` logical ON command means drain LOW in this example. No `!` inversion is used; startup/halt false means gate LOW and drain released, not a guaranteed safe peripheral output. The example does not set PWM frequency/duty or control a laser.

With power removed, establish these jumper choices:

- **JP3-1**: Remove the default 1–2 bridge and fit 2–3 only. J3.1 selects the 3.3 V input supply; never bridge both rails.
- **JP3-2**: Bridge 1–2. Connect selected J3.1 to the R5 input pull-up (10 kΩ).
- **JP6**: Remove the default 1–2 bridge and fit 2–3 only. Select 3.3 V for the R3 output pull-up (10 kΩ).
- **JP2**: No external VS supply and no host 5 V lead; verify no backfeed. The default bridge joins +5 V to VS, so do not inject either rail. Other jumper defaults are not relied on.

Use only this partial cable and bench load; never plug in a full ribbon by connector shape:

<div class="extension-contact-table" role="region" aria-label="PWM diagnostic wiring; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source | Destination | Condition |
| --- | --- | --- |
| Prime P12 GF/J37.1 limited 3.3 V | J1.1 +3.3V | Only after checking rail budget and continuity |
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

- `M119`: Observe `pins-` PB1 logical input with button open/closed; expect open HIGH / closed LOW after settling.
- `M43.18`: PG0 LOW, Q3 released; meter output approaches selected 3.3 V through 10 kΩ.
- `M42.18`: PG0 HIGH, Q3 sinking; meter output approaches ground, not a sourced rail.
- `M43.18`: Return gate LOW / drain released; not a peripheral safety-OFF guarantee.

Startup and halt values describe configured firmware behavior, not reset-time pin levels or a safe peripheral state. The example does not cover comparator/probe operation, other channels, external VS supply or real peripheral waveforms.

The V2 behavior described here refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Your installed firmware may differ.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/PWMBoard)
- [Original design source](https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed)
- [Original PWMlaserBoard.kicad_pcb](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_pcb)
- [Original PWMlaserBoard.kicad_sch](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_sch)
- [Original README.md](https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/README.md)

The project has no license file; that is not public-domain permission. Preserve attribution, and resolve redistribution rights before reusing original artwork or layouts.

[All extension boards](/extension-boards)
