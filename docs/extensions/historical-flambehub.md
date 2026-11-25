---
layout: default
title: "Flambehub \u2014 Hardware trigger and power-disconnect hub"
permalink: /extensions/historical-flambehub
---

# Flambehub

Flambehub combines eight hardware trigger inputs with an MCU input and a relay power-disconnect circuit. The author intends it to work without an MCU decision, accepting external devices such as overtemperature triggers or alarm contacts. Source intent is not proof of a safety-rated circuit.

## How the circuit works

The eight field inputs first enter the MAX6818 debounce device, whose OUT1–OUT8 signals feed all eight inputs of U3, the 4068 aggregate-logic device. Its Trig+ and Trig− outputs do not drive the power relay directly: C4 and C5 couple changes into the Set and Rst nodes. Those nodes drive Q2 and Q3, grounded-source 2N7002 transistors whose drains reach the two LC−/LC+ ends of the K2 relay-control circuit. The circuit thus includes transition/pulse paths and a relay latch rather than simply holding the power relay on whenever one input is high.

K2’s contact network supplies the main relay coil node A1; K1’s other coil end is ground. K1 switches the fused positive feed Vf between NC_Out and NO_Out. K2 also switches auxiliary returns marked NC GND and NO GND, which must not be replaced with fixed ground connections. The source repeats U1 for the MAX6818 and the optional regulator; they are separate components. The exact input combination, transition polarity, pulse duration, power-up/reset state and resulting NC/NO state still require a complete logic/relay truth-table check. This source-derived operation outline is not a claim of fail-safe behavior or an accepted safety circuit.

## Revision and use boundary

This guide follows [Flambehub_0.2.kicad_pcb](https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_pcb) at the exact linked source revision. It is a separate related hardware design, not a verified Prime-compatible adapter. The source description uses failsafe terminology where applicable; no safety certification, single-fault coverage or physical acceptance has been established.

## Operation, power and connectors

The README claims eight buffered/debounced triggers, one MCU enable/disable input, an inline fuse, an optional 5 V Recom regulator and up to 30 A at 28 V DC. The source filename is Flambehub_0.2. The actual PCB has MAX6818EAP+T input debounce, a 4068 logic device, K1 RAYEX-L90S power relay and K2 5-1462037-4 latch relay. It is not the Flambegate FET layout. The PCB also repeats C1, and two footprints are both labelled U1: MAX6818 and R-78C5.0-1.0 regulator. Keep their source positions/values distinct; a reference-only BOM join would be wrong. J4–J11 inputs use contact 1 ground, 2 5 V, 3 signal. MCU J3 instead uses 1 signal, 2 5 V, 3 ground. J1/J2 expose ground/Vi; named NO/NC output and auxiliary headers must be distinguished from logic signals.

**J12 and J13 are switched-return outputs, not ordinary 5 V supply headers.** Their contact 1 is +5 V, but J12.2 is `NC GND` at latch relay K2.10 and J13.2 is `NO GND` at K2.8. K2.9 is the separate fixed `GND` net. Grounding either switched-return terminal externally would bypass that contact's switching function. Keep these outputs distinct from J14's `NC_5v`/GND pair and from the main power relay's NO/NC outputs. The contact map does not establish the latch's startup state or fault behavior.

### Annotated connector and circuit reference

These source-derived functional sheets explain the selected historical connectors, jumpers and circuit components with numbered contact markers and pill callouts. They supplement the contact tables and retain the source geometry. They do not establish fitted component identity or connector mating orientation, and they do not replace a missing original canonical populated abstract. Follow the power and wiring limitations in this guide.

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j10-instance-1-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j10-instance-1-functions-01.png" title="J10 · Field input7" alt="J10 · Field input7 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

<details>
<summary>All remaining connector, jumper and component-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn2-instance-2-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn2-instance-2-functions-01.png" title="RN2 · OUT pull-ups / LED resistors" alt="RN2 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn2-instance-2-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn2-instance-2-functions-02.png" title="RN2 · OUT pull-ups / LED resistors" alt="RN2 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j8-instance-3-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j8-instance-3-functions-01.png" title="J8 · Field input5" alt="J8 · Field input5 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j3-instance-4-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j3-instance-4-functions-01.png" title="J3 · MCU control" alt="J3 · MCU control — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r4-instance-5-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r4-instance-5-functions-01.png" title="R4 · 10k circuit resistor" alt="R4 · 10k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d1-instance-6-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d1-instance-6-functions-01.png" title="D1 · LOW output indicator1" alt="D1 · LOW output indicator1 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-fid1-instance-7-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/fid1-instance-7-functions-01.png" title="FID1 · Assembly alignment fiducial" alt="FID1 · Assembly alignment fiducial — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-f1-instance-8-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/f1-instance-8-functions-01.png" title="F1 · Inline supply fuse" alt="F1 · Inline supply fuse — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn4-instance-9-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn4-instance-9-functions-01.png" title="RN4 · OUT pull-ups / LED resistors" alt="RN4 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn4-instance-9-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn4-instance-9-functions-02.png" title="RN4 · OUT pull-ups / LED resistors" alt="RN4 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j16-instance-10-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j16-instance-10-functions-01.png" title="J16 · Relay contact output" alt="J16 · Relay contact output — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j4-instance-11-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j4-instance-11-functions-01.png" title="J4 · Field input1" alt="J4 · Field input1 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r13-instance-12-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r13-instance-12-functions-01.png" title="R13 · 1k circuit resistor" alt="R13 · 1k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d9-instance-13-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d9-instance-13-functions-01.png" title="D9 · Relay coil / contact indicator" alt="D9 · Relay coil / contact indicator — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c4-instance-14-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c4-instance-14-functions-01.png" title="C4 · 1uf circuit capacitor" alt="C4 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j14-instance-15-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j14-instance-15-functions-01.png" title="J14 · Relay contact output" alt="J14 · Relay contact output — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d4-instance-16-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d4-instance-16-functions-01.png" title="D4 · LOW output indicator4" alt="D4 · LOW output indicator4 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j9-instance-17-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j9-instance-17-functions-01.png" title="J9 · Field input6" alt="J9 · Field input6 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-h1-instance-18-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/h1-instance-18-functions-01.png" title="H1 · Mount / assembly feature" alt="H1 · Mount / assembly feature — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j17-instance-19-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j17-instance-19-functions-01.png" title="J17 · Relay contact output" alt="J17 · Relay contact output — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d3-instance-20-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d3-instance-20-functions-01.png" title="D3 · LOW output indicator3" alt="D3 · LOW output indicator3 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c7-instance-21-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c7-instance-21-functions-01.png" title="C7 · 1uf circuit capacitor" alt="C7 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r3-instance-22-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r3-instance-22-functions-01.png" title="R3 · 10k circuit resistor" alt="R3 · 10k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c5-instance-23-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c5-instance-23-functions-01.png" title="C5 · 1uf circuit capacitor" alt="C5 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-h4-instance-24-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/h4-instance-24-functions-01.png" title="H4 · Mount / assembly feature" alt="H4 · Mount / assembly feature — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c1-instance-25-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c1-instance-25-functions-01.png" title="C1 · 1uf circuit capacitor" alt="C1 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d10-instance-26-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d10-instance-26-functions-01.png" title="D10 · Relay coil / contact indicator" alt="D10 · Relay coil / contact indicator — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r26-instance-27-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r26-instance-27-functions-01.png" title="R26 · 60 circuit resistor" alt="R26 · 60 circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-h2-instance-28-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/h2-instance-28-functions-01.png" title="H2 · Mount / assembly feature" alt="H2 · Mount / assembly feature — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn1-instance-29-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn1-instance-29-functions-01.png" title="RN1 · OUT pull-ups / LED resistors" alt="RN1 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn1-instance-29-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn1-instance-29-functions-02.png" title="RN1 · OUT pull-ups / LED resistors" alt="RN1 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j2-instance-30-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j2-instance-30-functions-01.png" title="J2 · Parallel input supply" alt="J2 · Parallel input supply — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u1-instance-31-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u1-instance-31-functions-01.png" title="U1 · MAX6818 input debouncer" alt="U1 · MAX6818 input debouncer — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u1-instance-31-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u1-instance-31-functions-02.png" title="U1 · MAX6818 input debouncer" alt="U1 · MAX6818 input debouncer — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u1-instance-31-functions-03" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u1-instance-31-functions-03.png" title="U1 · MAX6818 input debouncer" alt="U1 · MAX6818 input debouncer — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u1-instance-31-functions-04" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u1-instance-31-functions-04.png" title="U1 · MAX6818 input debouncer" alt="U1 · MAX6818 input debouncer — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-q3-instance-32-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/q3-instance-32-functions-01.png" title="Q3 · Relay-control pulse sink" alt="Q3 · Relay-control pulse sink — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j6-instance-33-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j6-instance-33-functions-01.png" title="J6 · Field input3" alt="J6 · Field input3 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d2-instance-34-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d2-instance-34-functions-01.png" title="D2 · LOW output indicator2" alt="D2 · LOW output indicator2 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j1-instance-35-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j1-instance-35-functions-01.png" title="J1 · Parallel input supply" alt="J1 · Parallel input supply — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r1-instance-36-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r1-instance-36-functions-01.png" title="R1 · 33R circuit resistor" alt="R1 · 33R circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d7-instance-37-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d7-instance-37-functions-01.png" title="D7 · LOW output indicator7" alt="D7 · LOW output indicator7 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r2-instance-38-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r2-instance-38-functions-01.png" title="R2 · 100k circuit resistor" alt="R2 · 100k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d6-instance-39-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d6-instance-39-functions-01.png" title="D6 · LOW output indicator6" alt="D6 · LOW output indicator6 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j13-instance-40-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j13-instance-40-functions-01.png" title="J13 · Switched auxiliary return" alt="J13 · Switched auxiliary return — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d8-instance-41-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d8-instance-41-functions-01.png" title="D8 · LOW output indicator8" alt="D8 · LOW output indicator8 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn3-instance-42-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn3-instance-42-functions-01.png" title="RN3 · OUT pull-ups / LED resistors" alt="RN3 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-rn3-instance-42-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/rn3-instance-42-functions-02.png" title="RN3 · OUT pull-ups / LED resistors" alt="RN3 · OUT pull-ups / LED resistors — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-fid2-instance-43-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/fid2-instance-43-functions-01.png" title="FID2 · Assembly alignment fiducial" alt="FID2 · Assembly alignment fiducial — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-h3-instance-44-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/h3-instance-44-functions-01.png" title="H3 · Mount / assembly feature" alt="H3 · Mount / assembly feature — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c2-instance-45-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c2-instance-45-functions-01.png" title="C2 · 10uf circuit capacitor" alt="C2 · 10uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-h5-instance-46-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/h5-instance-46-functions-01.png" title="H5 · Mount / assembly feature" alt="H5 · Mount / assembly feature — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j12-instance-47-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j12-instance-47-functions-01.png" title="J12 · Switched auxiliary return" alt="J12 · Switched auxiliary return — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u1-instance-48-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u1-instance-48-functions-01.png" title="U1 · Distinct optional5V regulator" alt="U1 · Distinct optional5V regulator — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r23-instance-49-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r23-instance-49-functions-01.png" title="R23 · 10k circuit resistor" alt="R23 · 10k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c1-instance-50-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c1-instance-50-functions-01.png" title="C1 · 1uf circuit capacitor" alt="C1 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j11-instance-51-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j11-instance-51-functions-01.png" title="J11 · Field input8" alt="J11 · Field input8 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-d5-instance-52-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/d5-instance-52-functions-01.png" title="D5 · LOW output indicator5" alt="D5 · LOW output indicator5 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r22-instance-53-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r22-instance-53-functions-01.png" title="R22 · 100k circuit resistor" alt="R22 · 100k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r24-instance-54-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r24-instance-54-functions-01.png" title="R24 · 10k circuit resistor" alt="R24 · 10k circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-q1-instance-55-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/q1-instance-55-functions-01.png" title="Q1 · MCU-controlled PMOS enable" alt="Q1 · MCU-controlled PMOS enable — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j5-instance-56-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j5-instance-56-functions-01.png" title="J5 · Field input2" alt="J5 · Field input2 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c6-instance-57-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c6-instance-57-functions-01.png" title="C6 · 1uf circuit capacitor" alt="C6 · 1uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-c3-instance-58-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/c3-instance-58-functions-01.png" title="C3 · 10uf circuit capacitor" alt="C3 · 10uf circuit capacitor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j7-instance-59-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j7-instance-59-functions-01.png" title="J7 · Field input4" alt="J7 · Field input4 — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-q2-instance-60-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/q2-instance-60-functions-01.png" title="Q2 · Relay-control pulse sink" alt="Q2 · Relay-control pulse sink — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-k1-instance-61-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/k1-instance-61-functions-01.png" title="K1 · Main changeover power relay" alt="K1 · Main changeover power relay — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-k2-instance-62-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/k2-instance-62-functions-01.png" title="K2 · Latch / auxiliary relay" alt="K2 · Latch / auxiliary relay — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-k2-instance-62-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/k2-instance-62-functions-02.png" title="K2 · Latch / auxiliary relay" alt="K2 · Latch / auxiliary relay — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u3-instance-63-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u3-instance-63-functions-01.png" title="U3 · 4068 aggregate input logic" alt="U3 · 4068 aggregate input logic — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u3-instance-63-functions-02" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u3-instance-63-functions-02.png" title="U3 · 4068 aggregate input logic" alt="U3 · 4068 aggregate input logic — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-u3-instance-63-functions-03" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/u3-instance-63-functions-03.png" title="U3 · 4068 aggregate input logic" alt="U3 · 4068 aggregate input logic — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-j15-instance-64-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/j15-instance-64-functions-01.png" title="J15 · Relay contact output" alt="J15 · Relay contact output — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-r25-instance-65-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/r25-instance-65-functions-01.png" title="R25 · 60 circuit resistor" alt="R25 · 60 circuit resistor — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reconstructed-fid3-instance-67-functions-01" src="/images/extensions/historical-flambehub/guides/reconstructed-reference/fid3-instance-67-functions-01.png" title="FID3 · Assembly alignment fiducial" alt="FID3 · Assembly alignment fiducial — source-derived functional reference" caption="Numbered native contact positions and functional callouts. Source-derived geometry; original canonical artwork, component fit and complete Prime wiring remain open." width=420 %}

</details>

[Drawing licence, attribution and modification notice](/images/extensions/historical-flambehub/guides/reconstructed-reference/NOTICE.md). The SVG files are editable drawing sources; the matching native design and original notices remain available below.

<details>
<summary>Original native-contact locators and matching design-source download</summary>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-overview" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-overview.png" title="Legacy FlambeHub" alt="Legacy FlambeHub — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j1-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j1-1-2.png" title="J1 · Parallel supply" alt="J1 · Parallel supply — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j2-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j2-1-2.png" title="J2 · Parallel supply" alt="J2 · Parallel supply — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j3-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j3-1-3.png" title="J3 · MCU control" alt="J3 · MCU control — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j4-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j4-1-3.png" title="J4 · Input channel1" alt="J4 · Input channel1 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j5-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j5-1-3.png" title="J5 · Input channel2" alt="J5 · Input channel2 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j6-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j6-1-3.png" title="J6 · Input channel3" alt="J6 · Input channel3 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j7-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j7-1-3.png" title="J7 · Input channel4" alt="J7 · Input channel4 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j8-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j8-1-3.png" title="J8 · Input channel5" alt="J8 · Input channel5 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j9-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j9-1-3.png" title="J9 · Input channel6" alt="J9 · Input channel6 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j10-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j10-1-3.png" title="J10 · Input channel7" alt="J10 · Input channel7 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j11-1-3" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j11-1-3.png" title="J11 · Input channel8" alt="J11 · Input channel8 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j12-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j12-1-2.png" title="J12 · Relay contact output" alt="J12 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j13-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j13-1-2.png" title="J13 · Relay contact output" alt="J13 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j14-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j14-1-2.png" title="J14 · Relay contact output" alt="J14 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j15-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j15-1-2.png" title="J15 · Relay contact output" alt="J15 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j16-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j16-1-2.png" title="J16 · Relay contact output" alt="J16 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-j17-1-2" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-j17-1-2.png" title="J17 · Relay contact output" alt="J17 · Relay contact output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-debounce" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-debounce.png" title="Input debouncer" alt="Input debouncer — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-regulator" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-regulator.png" title="Distinct regulator instance" alt="Distinct regulator instance — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-enable" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-enable.png" title="MCU enable path" alt="MCU enable path — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-logic" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-logic.png" title="Combined input logic" alt="Combined input logic — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-latch" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-latch.png" title="Latch-control paths" alt="Latch-control paths — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-main-relay" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-main-relay.png" title="Main switched rail" alt="Main switched rail — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-aux-relay" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-aux-relay.png" title="Secondary relay contacts" alt="Secondary relay contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-indicators1" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-indicators1.png" title="Input indication 1–4" alt="Input indication 1–4 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-indicators5" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-indicators5.png" title="Input indication 5–8" alt="Input indication 5–8 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-state-leds" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-state-leds.png" title="Relay-state indication" alt="Relay-state indication — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-duplicates" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-duplicates.png" title="Duplicate capacitor identity" alt="Duplicate capacitor identity — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-mounts" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-fiducials" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-fiducials.png" title="Assembly fiducials" alt="Assembly fiducials — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambehub-reader-compact-boundary" src="/images/extensions/historical-flambehub/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-flambehub/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71`. Retain the included source licence and notices with derivatives.


No matching abstract was located in smoothie-diagrams. A faithful revision-specific abstract and annotated diagram are required; a modern replacement or bare PCB render does not satisfy this diagram.

The following table comes directly from the selected PCB footprint pad nets. It is an inventory of named pads, not proof of copper continuity. Source line numbers refer to the exact linked PCB bytes.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| PCB reference | Value / control | Source line | Contact → net |
|---|---|---|---|
| J10 | Conn_01x03_Male | 144 | 1 → GND; 2 → +5V; 3 → IN7 |
| J8 | Conn_01x03_Male | 310 | 1 → GND; 2 → +5V; 3 → IN5 |
| J3 | MCU | 410 | 1 → Net-(J3-Pin_1); 2 → +5V; 3 → GND |
| R4 | 10k | 510 | 1 → Net-(D10-A); 2 → NC_5v |
| F1 | Fuse | 653 | 1 → Vf; 2 → Vi |
| J16 | Conn_01x02_Female | 787 | 1 → GND; 2 → NO_Out |
| J4 | Conn_01x03_Male | 861 | 1 → GND; 2 → +5V; 3 → IN1 |
| J14 | Conn_01x02_Female | 1127 | 1 → NC_5v; 2 → GND |
| J9 | Conn_01x03_Male | 1307 | 1 → GND; 2 → +5V; 3 → IN6 |
| J17 | Conn_01x02_Female | 1438 | 1 → GND; 2 → NO_Out |
| J2 | Conn_01x02_Female | 2022 | 1 → GND; 2 → Vi |
| U1 | MAX6818EAP+T | 2096 | 1 → _EN; 2 → IN1; 3 → IN2; 4 → IN3; 5 → IN4; 6 → IN5; 7 → IN6; 8 → IN7; 9 → IN8; 10 → GND; 11 → _CH; 12 → OUT8; 13 → OUT7; 14 → OUT6; 15 → OUT5; 16 → OUT4; 17 → OUT3; 18 → OUT2; 19 → OUT1; 20 → +5V |
| Q3 | 2N7002 | 2187 | 1 → Rst; 2 → GND; 3 → LC+ |
| J6 | Conn_01x03_Male | 2249 | 1 → GND; 2 → +5V; 3 → IN3 |
| J1 | Conn_01x02_Female | 2407 | 1 → GND; 2 → Vi |
| J13 | Conn_01x02_Female | 2705 | 1 → +5V; 2 → NO GND |
| J12 | Conn_01x02_Female | 3098 | 1 → +5V; 2 → NC GND |
| U1 | R-78C5.0-1.0 | 3220 | 1 → Vf; 2 → GND; 3 → +5V |
| J11 | Conn_01x03_Male | 3394 | 1 → GND; 2 → +5V; 3 → IN8 |
| Q1 | BSS84 | 3660 | 1 → Net-(Q1-G); 2 → Net-(Q1-S); 3 → _EN |
| J5 | Conn_01x03_Male | 3722 | 1 → GND; 2 → +5V; 3 → IN2 |
| J7 | Conn_01x03_Male | 3930 | 1 → GND; 2 → +5V; 3 → IN4 |
| Q2 | 2N7002 | 4030 | 1 → Set; 2 → GND; 3 → LC- |
| K1 | RAYEX-L90S | 4092 | 11 → Vf; 12 → NC_Out; 14 → NO_Out; A1 → A1; A2 → GND |
| K2 | 5-1462037-4 | 4264 | 1 → LC+; 3 → NC_5v; 4 → +5V; 5 → A1; 8 → NO GND; 9 → GND; 10 → NC GND; 12 → LC- |
| U3 | 4068 | 4365 | 1 → Trig+; 2 → OUT4; 3 → OUT3; 4 → OUT2; 5 → OUT1; 6 → no named net; 7 → GND; 8 → no named net; 9 → OUT5; 10 → OUT6; 11 → OUT7; 12 → OUT8; 13 → Trig-; 14 → +5V |
| J15 | Conn_01x02_Female | 4447 | 1 → GND; 2 → NC_Out |

</div>

</details>



</details>

## Practical use with Smoothieboard V2 Prime

An illustrative use is aggregating a hardware overtemperature trigger and a manual stop before disconnecting a machine’s DC feed. First derive and test every normally-open/normally-closed contact path, trigger polarity and latch/reset state from the matching schematic. K1.11 is Vf, .12 NC_Out and .14 NO_Out; these are power relay contacts, not Prime GPIO outputs. The latch and coil paths require a complete review. Do not wire a Prime HALT pin or a safety peripheral solely by matching its connector’s pin count.

### Complete practical wiring diagram — pending

No complete accepted cable or power-path diagram is available. The unresolved contact roles, voltage limits and fault states must be settled before depicting a usable Prime circuit. No arbitrary Prime GPIO assignment is supplied to conceal those gaps.

## Firmware and setup

### Standalone trigger versus optional Prime halt workflow
FlambeHub source J3 MCU has1signal/2+5 V/3ground. Duplicate physical U1 instances are MAX6818EAP+T and R-78C5.0-1.0; do not collapse them into one part or conflate their domains.

Standalone signal-processing operation has no Smoothieware configuration or board protocol driver. That is a complete software disposition for standalone use; it does not accept hardware operation. Optional Prime integration is a separate application whose signal direction, polarity, threshold, loss-state and reset behavior must be defined before assigning a GPIO.

The pinned ButtonBox KILL behavior broadcasts software halt; Switch with ignore_on_halt=false applies its handled-halt state. Neither guarantees power disconnection or independent shutdown. Do not prescribe M112, a guessed enable GPIO or a command labelled safe as a fire-protection recipe. The useful integration specification must name: which qualified board terminal is observed/driven; active/lost-state truth table; whether acknowledgement/reset is needed; the physical independent shutdown path; and the exact powered equipment. The selected three-pin MCU header names alone do not establish these policies.

Required matching Prime shutdown application is unverified, rather than proved absent. Email **wolf.arthur@gamil.com** for required missing integration. No firmware setting calibrates or qualifies the standalone protection hardware.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Questions that remain before use

Duplicate U1 and C1 references; relay contact/coil ratings and layout paths; fail-state truth table and reset behavior; MCU signal voltage and firmware behavior; input/output cable numbering. Both required instructional diagrams, schematic-to-layout reconciliation, electrical testing and normal/narrow-width page review remain pending.

## Original files and attribution

Modern mechanical relay boards and smoke-detector adapters are different functions/topologies. An eight-input debounced relay/latch safety hub is a separate source record.

- [Flambehub_0.2.kicad_pcb](https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_pcb) — original source at the selected commit.
- [Flambehub_0.2.kicad_sch](https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_sch) — original source at the selected commit.
- [README.md](https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/README.md) — original source at the selected commit.

The repository metadata identifies GPL-3.0; preserve and inspect the matching license and source notices before redistribution.

Production status and current availability are not established by retained author links.

[All extension boards](/extension-boards)
