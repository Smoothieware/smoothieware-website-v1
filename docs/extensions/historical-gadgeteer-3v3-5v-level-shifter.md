---
layout: default
title: "Fourteen channel 3.3/5 V level shifter"
permalink: /extensions/historical-gadgeteer-3v3-5v-level-shifter
---

# Fourteen-channel 3.3/5 V level shifter

Fourteen bidirectional translation channels interface two seven-signal Gadgeteer groups to 5 V-side pin rows. The board is intended for compatible low-voltage digital interfaces, not industrial voltage sensing or power switching. Bidirectional level shifting does not prove every push-pull, PWM or high-speed protocol will meet its rise-time requirements.

## How the circuit works

Each channel uses one half of a BSS138PS dual MOSFET and separate 4.7 kΩ pull-ups to the two rails. For one exact lane, J1.3 and J8.1 reach Q1.1 (source) on the 3.3 V side; Q1.2 (gate) is tied to 3.3 V, and Q1.6 (drain) reaches J3.1 on the 5 V side. RN1’s resistor between contacts 2 and 7 pulls the source node toward 3.3 V; RN2’s resistor between contacts 1 and 8 pulls the drain node toward 5 V. When released, each side rises toward its own rail. Pulling a side low is coupled through the transistor stage to the other side. The circuit translates low states and resistor-released highs; it is not a powered push-pull line driver.

The two sides share ground. Do not assume that an arbitrary push-pull protocol, high-speed clock or capacitive cable is compatible: its drive states, pull-up loading and rise time still need checking. The example’s host contact J1.3 reaches high-side J3.1 through transistor unit A (source 1, gate 2, drain 6). The other half of the dual transistor uses source 4, gate 5 and drain 3; do not combine pins from the two units. Keep the source-numbered correspondence for every lane.

## Documented revision and original host

This guide documents the **historical Ccecil source snapshot**, pinned by the local Smoothieboard2 parent, rather than a modern replacement board. [The exact upstream revision](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c) identifies the retained design. A repository commit is not an assembly revision or evidence of current production. The source targets the Smoothieboard V2/Gadgeteer era. That intended generation does not prove compatibility with every later V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1/J2 carry host-side3.3 V/5 V/ground and signal contacts 3–9. J8/J9 expose their low-side lanes; J3/J4 expose the corresponding high-side0H–13H lanes. J5/J6/J7 are power rows:1 5 V, 2/3 3.3 V, 4/5 ground. The exact transistor/pull-up network and end-to-end lane correspondence must be traced before choosing a protocol. The two voltage rails are not interchangeable, and common ground means there is no galvanic isolation.

## Board-reference diagram

### Source-matched annotated reference

The annotated sheets are derived from the pinned historical Ccecil PCB and schematic at revision [`355404237201e13c600984ae23b83d124f87c91c`](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c). The abstract preserves the native board outline, footprint placement and numbered source pads while adding explanatory callouts; it is not the original artwork, an as-built inspection, a mating-face view or an installation wiring diagram. The channel order is crossed within the dual MOSFET packages, RN7 spans both 3.3 V and 5 V pull-up domains, and the package source pins govern the channel mapping. Do not infer a straight-through cable, Prime allocation, mating orientation, component population or powered qualification from these sheets.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-annotated-overview" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/overview.svg" title="Annotated source-matched board overview" alt="Top-down annotated abstract of the historical Gadgeteer level-shifter PCB. Native board geometry and source pad contacts are overlaid with source-derived labels; not a mating-face or installation diagram." caption="Source-matched abstract, not a photograph or mating-face drawing. The channel order is crossed within each dual MOSFET package; resistor array RN7 includes pull-up paths to both voltage rails. No cable, pin allocation or powered use is qualified." width=1440 %}

<details markdown="1">
<summary>Board outline and mounting holes</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H1-pins-1.svg" title="H1 mounting-hole source location" alt="H1 mounting-hole source location — source footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Exact source footprint/pad reference and annotated interpretation. Physical mating, cable orientation, fitted part identity and electrical qualification are not established." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H2-pins-1.svg" title="H2 mounting-hole source location" alt="H2 mounting-hole source location — source footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Exact source footprint/pad reference and annotated interpretation. Physical mating, cable orientation, fitted part identity and electrical qualification are not established." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H3-pins-1.svg" title="H3 mounting-hole source location" alt="H3 mounting-hole source location — source footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Exact source footprint/pad reference and annotated interpretation. Physical mating, cable orientation, fitted part identity and electrical qualification are not established." width=1440 %}

</details>

<details markdown="1">
<summary>Gadgeteer and rail connectors</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J1-pins-1.svg" title="J1 10-pin host-side connector, low-side signals" alt="J1 10-pin host-side connector, low-side signals — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J1-pins-2.svg" title="J1 10-pin host-side connector, low-side signals" alt="J1 10-pin host-side connector, low-side signals — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J2-pins-1.svg" title="J2 10-pin host-side connector, low-side signals" alt="J2 10-pin host-side connector, low-side signals — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J2-pins-2.svg" title="J2 10-pin host-side connector, low-side signals" alt="J2 10-pin host-side connector, low-side signals — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J3-pins-1.svg" title="J3 seven-contact high-side signal row" alt="J3 seven-contact high-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J3-pins-2.svg" title="J3 seven-contact high-side signal row" alt="J3 seven-contact high-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J4-pins-1.svg" title="J4 seven-contact high-side signal row" alt="J4 seven-contact high-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J4-pins-2.svg" title="J4 seven-contact high-side signal row" alt="J4 seven-contact high-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J5-pins-1.svg" title="J5 five-contact supply row" alt="J5 five-contact supply row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J6-pins-1.svg" title="J6 five-contact supply row" alt="J6 five-contact supply row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J7-pins-1.svg" title="J7 five-contact supply row" alt="J7 five-contact supply row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j8-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J8-pins-1.svg" title="J8 seven-contact low-side signal row" alt="J8 seven-contact low-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j8-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J8-pins-2.svg" title="J8 seven-contact low-side signal row" alt="J8 seven-contact low-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j9-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J9-pins-1.svg" title="J9 seven-contact low-side signal row" alt="J9 seven-contact low-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j9-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J9-pins-2.svg" title="J9 seven-contact low-side signal row" alt="J9 seven-contact low-side signal row — numbered source footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the pinned PCB/schematic interpretation. The mating connector, viewed mating-face order, cable orientation and installed allocation are unknown." width=1440 %}

</details>

<details markdown="1">
<summary>Dual MOSFET packages</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q1-pins-1.svg" title="Q1 dual BSS138PS MOSFET pin map" alt="Q1 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q1-pins-2.svg" title="Q1 dual BSS138PS MOSFET pin map" alt="Q1 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q2-pins-1.svg" title="Q2 dual BSS138PS MOSFET pin map" alt="Q2 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q2-pins-2.svg" title="Q2 dual BSS138PS MOSFET pin map" alt="Q2 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q3-pins-1.svg" title="Q3 dual BSS138PS MOSFET pin map" alt="Q3 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q3-pins-2.svg" title="Q3 dual BSS138PS MOSFET pin map" alt="Q3 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q4-pins-1.svg" title="Q4 dual BSS138PS MOSFET pin map" alt="Q4 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q4-pins-2.svg" title="Q4 dual BSS138PS MOSFET pin map" alt="Q4 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q5-pins-1.svg" title="Q5 dual BSS138PS MOSFET pin map" alt="Q5 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q5-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q5-pins-2.svg" title="Q5 dual BSS138PS MOSFET pin map" alt="Q5 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q6-pins-1.svg" title="Q6 dual BSS138PS MOSFET pin map" alt="Q6 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q6-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q6-pins-2.svg" title="Q6 dual BSS138PS MOSFET pin map" alt="Q6 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q7-pins-1.svg" title="Q7 dual BSS138PS MOSFET pin map" alt="Q7 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q7-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q7-pins-2.svg" title="Q7 dual BSS138PS MOSFET pin map" alt="Q7 dual BSS138PS MOSFET pin map — numbered source footprint contacts; not a cable or installation diagram." caption="Source-package pin numbering and native board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

</details>

<details markdown="1">
<summary>Resistor arrays</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN1-pins-1.svg" title="RN1 pull-up resistor-array pins" alt="RN1 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN1-pins-2.svg" title="RN1 pull-up resistor-array pins" alt="RN1 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN2-pins-1.svg" title="RN2 pull-up resistor-array pins" alt="RN2 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN2-pins-2.svg" title="RN2 pull-up resistor-array pins" alt="RN2 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN3-pins-1.svg" title="RN3 pull-up resistor-array pins" alt="RN3 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN3-pins-2.svg" title="RN3 pull-up resistor-array pins" alt="RN3 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN4-pins-1.svg" title="RN4 pull-up resistor-array pins" alt="RN4 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN4-pins-2.svg" title="RN4 pull-up resistor-array pins" alt="RN4 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN5-pins-1.svg" title="RN5 pull-up resistor-array pins" alt="RN5 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn5-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN5-pins-2.svg" title="RN5 pull-up resistor-array pins" alt="RN5 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN6-pins-1.svg" title="RN6 pull-up resistor-array pins" alt="RN6 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn6-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN6-pins-2.svg" title="RN6 pull-up resistor-array pins" alt="RN6 pull-up resistor-array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source package pad identities and native board location. Array populations and electrical limits are not established by the drawing." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN7-pins-1.svg" title="RN7 mixed-rail pull-up array pins" alt="RN7 mixed-rail pull-up array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source pad identities include pull-up paths to both 3.3 V and 5 V domains. Do not bridge or treat array contacts as a single rail." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn7-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN7-pins-2.svg" title="RN7 mixed-rail pull-up array pins" alt="RN7 mixed-rail pull-up array pins — numbered source footprint contacts; not a cable or installation diagram." caption="Source pad identities include pull-up paths to both 3.3 V and 5 V domains. Do not bridge or treat array contacts as a single rail." width=1440 %}

</details>

### Supplementary logical circuits

<details markdown="1">
<summary>Supplementary logical circuit sheets</summary>



These independently drawn circuit sheets explain the selected source connectivity. They do not copy the original board artwork, placement or native files and are supplementary to the source-matched annotated abstract above. Use the contact inventory and all companion sheets together. Physical cable orientation, ratings, installed operation and the full Prime/peripheral wiring remain unverified.

Source: [selected original circuit](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_pcb), revision `355404237201e13c600984ae23b83d124f87c91c`.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q1a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q1a-font-matched.svg" title="Q1A exact MOSFET pairing" alt="Q1A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q1b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q1b-font-matched.svg" title="Q1B exact MOSFET pairing" alt="Q1B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q2a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q2a-font-matched.svg" title="Q2A exact MOSFET pairing" alt="Q2A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q2b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q2b-font-matched.svg" title="Q2B exact MOSFET pairing" alt="Q2B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q3a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q3a-font-matched.svg" title="Q3A exact MOSFET pairing" alt="Q3A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q3b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q3b-font-matched.svg" title="Q3B exact MOSFET pairing" alt="Q3B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q4a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q4a-font-matched.svg" title="Q4A exact MOSFET pairing" alt="Q4A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q4b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q4b-font-matched.svg" title="Q4B exact MOSFET pairing" alt="Q4B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q5a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q5a-font-matched.svg" title="Q5A exact MOSFET pairing" alt="Q5A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q5b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q5b-font-matched.svg" title="Q5B exact MOSFET pairing" alt="Q5B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q6a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q6a-font-matched.svg" title="Q6A exact MOSFET pairing" alt="Q6A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q6b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q6b-font-matched.svg" title="Q6B exact MOSFET pairing" alt="Q6B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q7a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q7a-font-matched.svg" title="Q7A exact MOSFET pairing" alt="Q7A exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q7b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q7b-font-matched.svg" title="Q7B exact MOSFET pairing" alt="Q7B exact MOSFET pairing — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j1-direct-3" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j1-direct-3-font-matched.svg" title="J1 low-side breakout" alt="J1 low-side breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j1-direct-7" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j1-direct-7-font-matched.svg" title="J1 low-side breakout" alt="J1 low-side breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j2-direct-3" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j2-direct-3-font-matched.svg" title="J2 low-side breakout" alt="J2 low-side breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j2-direct-7" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j2-direct-7-font-matched.svg" title="J2 low-side breakout" alt="J2 low-side breakout — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-arrays" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/arrays-source-resolved-font-matched.svg" title="Exact schematic array resistor pairs" alt="Exact schematic array resistor pairs — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-1-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-1-0-font-matched.svg" title="3.3V supply contacts" alt="3.3V supply contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-1-4" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-1-4-font-matched.svg" title="3.3V supply contacts" alt="3.3V supply contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-2-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-2-0-font-matched.svg" title="5V supply contacts" alt="5V supply contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-10-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-10-0-font-matched.svg" title="Ground supply contacts" alt="Ground supply contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-10-4" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-10-4-font-matched.svg" title="Ground supply contacts" alt="Ground supply contacts — logical connections, not physical board layout" caption="Supplementary factual circuit only. The canonical populated abstract and complete Prime installation remain incomplete. Connector locations, mating and assembled ratings are not established by this drawing." width=420 %}

The [matching selected schematic](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/Shifter.kicad_sch) resolves the split resistor-array elements as contacts **1–8, 2–7, 3–6 and 4–5**. All fourteen low-side nets have source 4.7 kΩ pull-ups to 3.3 V, and all fourteen high-side nets have source 4.7 kΩ pull-ups to 5 V. This resolves source topology; fitted array identity/population, current and bus-speed limits still require qualification.

</details>

### Numbered source contacts and controls

These are intended source net memberships, not measured electrical behaviour. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Source member | Connector/control | Source label | Contact → source net |
|---|---|---|---|
| LevelShifter.kicad_pcb | J5 | Conn_01x05_Pin | 1: +5V; 2: +3V3; 3: +3V3; 4: GND; 5: GND |
| LevelShifter.kicad_pcb | J9 | Conn_01x07_Pin | 1: 2P3; 2: 2P4; 3: 2P5; 4: 2P6; 5: 2P7; 6: 2P8; 7: 2P9 |
| LevelShifter.kicad_pcb | J1 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: 1P3; 4: 1P4; 5: 1P5; 6: 1P6; 7: 1P7; 8: 1P8; 9: 1P9; 10: GND |
| LevelShifter.kicad_pcb | J8 | Conn_01x07_Pin | 1: 1P3; 2: 1P4; 3: 1P5; 4: 1P6; 5: 1P7; 6: 1P8; 7: 1P9 |
| LevelShifter.kicad_pcb | J4 | Conn_01x07_Pin | 1: /Shifter/7H; 2: /Shifter/8H; 3: /Shifter/9H; 4: /Shifter/10H; 5: /Shifter/11H; 6: /Shifter/12H; 7: /Shifter/13H |
| LevelShifter.kicad_pcb | J3 | Conn_01x07_Pin | 1: /Shifter/0H; 2: /Shifter/1H; 3: /Shifter/2H; 4: /Shifter/3H; 5: /Shifter/4H; 6: /Shifter/5H; 7: /Shifter/6H |
| LevelShifter.kicad_pcb | J6 | Conn_01x05_Pin | 1: +5V; 2: +3V3; 3: +3V3; 4: GND; 5: GND |
| LevelShifter.kicad_pcb | J2 | Conn_02x05_Odd_Even | 1: +3V3; 2: +5V; 3: 2P3; 4: 2P4; 5: 2P5; 6: 2P6; 7: 2P7; 8: 2P8; 9: 2P9; 10: GND |
| LevelShifter.kicad_pcb | J7 | Conn_01x05_Pin | 1: +5V; 2: +3V3; 3: +3V3; 4: GND; 5: GND |

</div>

</details>


## Practical use with Smoothieboard V2 Prime

**Pending and unaccepted:** no complete practical Prime → historical board → named peripheral drawing has been accepted. Unknown conductors remain unresolved rather than routed by guesswork.

For a slow logic-interface experiment, select one lane and identify its matching low/high connector contacts from schematic connectivity, then check both supply rails and pull-up values. Keep other lanes unused and test transitions in the required direction with the real load. A free Prime GPIO may feed a verified low-side lane, but the 5 V-side node must never be wired back directly to Prime. Establish reset/unpowered states and rise time before attaching a bus or servo.

Conditional GF/J37 examples refer only to retained **P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### Selected transistor lane: dry-contact state monitor
No translator register driver is needed. The selected lane is J1.3 (also J8.1) 1P3 → Q1 physical source1/gate2/drain6 → J3.1 /Shifter/0H. Do not use the discarded drain3 pairing: that belongs to the other physical transistor. RN1 pair2–7 pulls the low side to 3.3 V and RN2 pair1–8 pulls the high side to 5 V, each 4.7 kohm. Prime GF/J37.3 PB1 is the candidate low-side input; GF.10 and J1.10 are the source ground contacts.

A useful intended experiment is a qualified dry switch between high-side J3.1 and ground, observing the translated low-side state. Qualify MOSFET3.3 V conduction, input LOW margin, switch microload, pullup current and both-rail power order before connecting. This is a software input recipe, not acceptance of those electrical prerequisites:

```ini
[endstops]
translated_contact.enable = true
translated_contact.pin = PB1-
translated_contact.axis = X
translated_contact.homing_direction = none
translated_contact.limit_enable = false
```

An existing valid X actuator and exclusive pins are required. `M119` reports the sampled logical state. The trailing minus disables internal pulls without inversion; supply a separately qualified external bias. No homing, limit or software-halt action is configured. Record both stable stimulus states and the disconnected/unpowered state with all machine motion disabled. This observation does not determine a safe fault polarity or provide debouncing/edge timing.

The switch closed/open readings must be measured, not assumed from the circuit name. No arbitrary I2C/UART protocol follows from this passive translator. For a required unsupported attached-device application email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining requirements

Transistor/pull-up exact circuit, lane mapping, permitted push-pull/open-drain uses, rise time/loading, shared power and host reservations remain unresolved. No Prime or peripheral wiring, firmware configuration, power sequencing, current/load, timing, mating or assembled-hardware qualification is established by this reference. This page documents a historical source revision; it is not a wiring qualification.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/3v3-5v-LevelShifter)
- [Pinned original source](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c)
- [Original LevelShifter.kicad_pcb](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_pcb)
- [Original LevelShifter.kicad_sch](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_sch)
- [Original README.md](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/README.md)
- [Original Shifter.kicad_sch](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/Shifter.kicad_sch)

Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
