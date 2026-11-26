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

## Origin and original host

This guide documents Ccecil’s design; see the [original source](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c). The design targets the Smoothieboard V2/Gadgeteer era. That does not make it compatible with every V2 Prime board, cable or firmware build.

## Interfaces, power and limitations

J1/J2 carry host-side3.3 V/5 V/ground and signal contacts 3–9. J8/J9 expose their low-side lanes; J3/J4 expose the corresponding high-side0H–13H lanes. J5/J6/J7 are power rows:1 5 V, 2/3 3.3 V, 4/5 ground. The exact transistor/pull-up network and end-to-end lane correspondence must be traced before choosing a protocol. The two voltage rails are not interchangeable, and common ground means there is no galvanic isolation.

## Board-reference diagram

### Annotated reference

The annotated sheets are derived from [Ccecil’s PCB and schematic](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c). The drawing preserves the native board outline, footprint placement and numbered source pads while adding explanatory callouts; it is not the original artwork, a view of an assembled board, a mating-face view or an installation wiring diagram. The channel order is crossed within the dual MOSFET packages, RN7 spans both 3.3 V and 5 V pull-up domains, and the package pins govern the channel mapping. Do not infer a straight-through cable, Prime allocation, mating orientation, component population or operating limits from these sheets.

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-annotated-overview" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/overview.png" title="Annotated board overview" alt="Top-down annotated drawing of the Gadgeteer level-shifter PCB. Board geometry and pad contacts are overlaid with labels; not a mating-face or installation diagram." caption="Board drawing, not a photograph or mating-face drawing. The channel order is crossed within each dual MOSFET package; resistor array RN7 includes pull-up paths to both voltage rails. It does not define a cable or pin allocation." width=1440 %}

<details markdown="1">
<summary>Board outline and mounting holes</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H1-pins-1.png" title="H1 mounting-hole location" alt="H1 mounting-hole location — footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Footprint and pad reference. Check physical mating, cable orientation and fitted parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H2-pins-1.png" title="H2 mounting-hole location" alt="H2 mounting-hole location — footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Footprint and pad reference. Check physical mating, cable orientation and fitted parts." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-h3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/H3-pins-1.png" title="H3 mounting-hole location" alt="H3 mounting-hole location — footprint placement and annotated contacts; not a mating-face, cable or installation diagram." caption="Footprint and pad reference. Check physical mating, cable orientation and fitted parts." width=1440 %}

</details>

<details markdown="1">
<summary>Gadgeteer and rail connectors</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J1-pins-1.png" title="J1 10-pin host-side connector, low-side signals" alt="J1 10-pin host-side connector, low-side signals — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J1-pins-2.png" title="J1 10-pin host-side connector, low-side signals" alt="J1 10-pin host-side connector, low-side signals — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J2-pins-1.png" title="J2 10-pin host-side connector, low-side signals" alt="J2 10-pin host-side connector, low-side signals — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J2-pins-2.png" title="J2 10-pin host-side connector, low-side signals" alt="J2 10-pin host-side connector, low-side signals — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J3-pins-1.png" title="J3 seven-contact high-side signal row" alt="J3 seven-contact high-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J3-pins-2.png" title="J3 seven-contact high-side signal row" alt="J3 seven-contact high-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J4-pins-1.png" title="J4 seven-contact high-side signal row" alt="J4 seven-contact high-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J4-pins-2.png" title="J4 seven-contact high-side signal row" alt="J4 seven-contact high-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J5-pins-1.png" title="J5 five-contact supply row" alt="J5 five-contact supply row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J6-pins-1.png" title="J6 five-contact supply row" alt="J6 five-contact supply row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J7-pins-1.png" title="J7 five-contact supply row" alt="J7 five-contact supply row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j8-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J8-pins-1.png" title="J8 seven-contact low-side signal row" alt="J8 seven-contact low-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j8-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J8-pins-2.png" title="J8 seven-contact low-side signal row" alt="J8 seven-contact low-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j9-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J9-pins-1.png" title="J9 seven-contact low-side signal row" alt="J9 seven-contact low-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-j9-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/J9-pins-2.png" title="J9 seven-contact low-side signal row" alt="J9 seven-contact low-side signal row — numbered footprint contacts; not a mating-face or cable diagram." caption="Numbered contacts follow the PCB and schematic. Check the mating connector, mating-face order and cable orientation." width=1440 %}

</details>

<details markdown="1">
<summary>Dual MOSFET packages</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q1-pins-1.png" title="Q1 dual BSS138PS MOSFET pin map" alt="Q1 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q1-pins-2.png" title="Q1 dual BSS138PS MOSFET pin map" alt="Q1 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q2-pins-1.png" title="Q2 dual BSS138PS MOSFET pin map" alt="Q2 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q2-pins-2.png" title="Q2 dual BSS138PS MOSFET pin map" alt="Q2 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q3-pins-1.png" title="Q3 dual BSS138PS MOSFET pin map" alt="Q3 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q3-pins-2.png" title="Q3 dual BSS138PS MOSFET pin map" alt="Q3 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q4-pins-1.png" title="Q4 dual BSS138PS MOSFET pin map" alt="Q4 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q4-pins-2.png" title="Q4 dual BSS138PS MOSFET pin map" alt="Q4 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q5-pins-1.png" title="Q5 dual BSS138PS MOSFET pin map" alt="Q5 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q5-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q5-pins-2.png" title="Q5 dual BSS138PS MOSFET pin map" alt="Q5 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q6-pins-1.png" title="Q6 dual BSS138PS MOSFET pin map" alt="Q6 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q6-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q6-pins-2.png" title="Q6 dual BSS138PS MOSFET pin map" alt="Q6 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q7-pins-1.png" title="Q7 dual BSS138PS MOSFET pin map" alt="Q7 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-q7-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/Q7-pins-2.png" title="Q7 dual BSS138PS MOSFET pin map" alt="Q7 dual BSS138PS MOSFET pin map — numbered footprint contacts; not a cable or installation diagram." caption="Package pin numbering and board location. The two MOSFET units have distinct source, gate and drain pins; channel order is crossed. Do not infer physical cable wiring or operating limits." width=1440 %}

</details>

<details markdown="1">
<summary>Resistor arrays</summary>

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn1-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN1-pins-1.png" title="RN1 pull-up resistor-array pins" alt="RN1 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn1-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN1-pins-2.png" title="RN1 pull-up resistor-array pins" alt="RN1 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn2-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN2-pins-1.png" title="RN2 pull-up resistor-array pins" alt="RN2 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn2-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN2-pins-2.png" title="RN2 pull-up resistor-array pins" alt="RN2 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn3-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN3-pins-1.png" title="RN3 pull-up resistor-array pins" alt="RN3 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn3-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN3-pins-2.png" title="RN3 pull-up resistor-array pins" alt="RN3 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn4-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN4-pins-1.png" title="RN4 pull-up resistor-array pins" alt="RN4 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn4-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN4-pins-2.png" title="RN4 pull-up resistor-array pins" alt="RN4 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn5-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN5-pins-1.png" title="RN5 pull-up resistor-array pins" alt="RN5 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn5-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN5-pins-2.png" title="RN5 pull-up resistor-array pins" alt="RN5 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn6-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN6-pins-1.png" title="RN6 pull-up resistor-array pins" alt="RN6 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn6-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN6-pins-2.png" title="RN6 pull-up resistor-array pins" alt="RN6 pull-up resistor-array pins — numbered footprint contacts; not a cable or installation diagram." caption="Package pads and board location. The drawing does not give array values or electrical limits." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn7-pins-1" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN7-pins-1.png" title="RN7 mixed-rail pull-up array pins" alt="RN7 mixed-rail pull-up array pins — numbered footprint contacts; not a cable or installation diagram." caption="The pads include pull-up paths to both 3.3 V and 5 V domains. Do not bridge or treat array contacts as a single rail." width=1440 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-levelshift-rn7-pins-2" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/annotated-reference/RN7-pins-2.png" title="RN7 mixed-rail pull-up array pins" alt="RN7 mixed-rail pull-up array pins — numbered footprint contacts; not a cable or installation diagram." caption="The pads include pull-up paths to both 3.3 V and 5 V domains. Do not bridge or treat array contacts as a single rail." width=1440 %}

</details>

### Supplementary logical circuits

<details markdown="1">
<summary>Supplementary logical circuit sheets</summary>

These circuit sheets explain the board connectivity. They do not copy the original board artwork, placement or native files and are supplementary to the annotated drawing above. Use the contact inventory and all companion sheets together. Check physical cable orientation before wiring.

Source: [original circuit](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_pcb).

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q1a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q1a-font-matched.png" title="Q1A MOSFET pairing" alt="Q1A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q1b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q1b-font-matched.png" title="Q1B MOSFET pairing" alt="Q1B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q2a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q2a-font-matched.png" title="Q2A MOSFET pairing" alt="Q2A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q2b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q2b-font-matched.png" title="Q2B MOSFET pairing" alt="Q2B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q3a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q3a-font-matched.png" title="Q3A MOSFET pairing" alt="Q3A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q3b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q3b-font-matched.png" title="Q3B MOSFET pairing" alt="Q3B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q4a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q4a-font-matched.png" title="Q4A MOSFET pairing" alt="Q4A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q4b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q4b-font-matched.png" title="Q4B MOSFET pairing" alt="Q4B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q5a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q5a-font-matched.png" title="Q5A MOSFET pairing" alt="Q5A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q5b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q5b-font-matched.png" title="Q5B MOSFET pairing" alt="Q5B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q6a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q6a-font-matched.png" title="Q6A MOSFET pairing" alt="Q6A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q6b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q6b-font-matched.png" title="Q6B MOSFET pairing" alt="Q6B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q7a" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q7a-font-matched.png" title="Q7A MOSFET pairing" alt="Q7A MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-q7b" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/q7b-font-matched.png" title="Q7B MOSFET pairing" alt="Q7B MOSFET pairing — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j1-direct-3" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j1-direct-3-font-matched.png" title="J1 low-side breakout" alt="J1 low-side breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j1-direct-7" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j1-direct-7-font-matched.png" title="J1 low-side breakout" alt="J1 low-side breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j2-direct-3" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j2-direct-3-font-matched.png" title="J2 low-side breakout" alt="J2 low-side breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-j2-direct-7" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/j2-direct-7-font-matched.png" title="J2 low-side breakout" alt="J2 low-side breakout — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-arrays" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/arrays-source-resolved-font-matched.png" title="Array resistor pairs" alt="Array resistor pairs — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-1-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-1-0-font-matched.png" title="3.3V supply contacts" alt="3.3V supply contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-1-4" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-1-4-font-matched.png" title="3.3V supply contacts" alt="3.3V supply contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-2-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-2-0-font-matched.png" title="5V supply contacts" alt="5V supply contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-10-0" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-10-0-font-matched.png" title="Ground supply contacts" alt="Ground supply contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-gadgeteer-3v3-5v-level-shifter-factual-power-10-4" src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/guides/factual-circuits/power-10-4-font-matched.png" title="Ground supply contacts" alt="Ground supply contacts — logical connections, not physical board layout" caption="Logical circuit only; it does not show connector locations or mating." width=420 %}

The [schematic](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/Shifter.kicad_sch) resolves the split resistor-array elements as contacts **1–8, 2–7, 3–6 and 4–5**. All fourteen low-side nets have 4.7 kΩ pull-ups to 3.3 V, and all fourteen high-side nets have 4.7 kΩ pull-ups to 5 V. Check fitted arrays, current and bus speed for your use.

</details>

### Numbered source contacts and controls

These are net memberships from the design files. Unassigned/unconnected pads must not receive invented connections. Auto-generated net names require schematic interpretation; they are not cable colours. Repeated footprints or pad numbers require geometric identity checks before wiring.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Design file | Connector/control | Label | Contact → net |
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

Do not route unknown conductors by guesswork.

For a slow logic interface, select one lane and identify its matching low/high connector contacts from schematic connectivity, then check both supply rails and pull-up values. Keep other lanes unused and test transitions in the required direction with the real load. A free Prime GPIO may feed a verified low-side lane, but the 5 V-side node must never be wired back directly to Prime. Establish reset/unpowered states and rise time before attaching a bus or servo.

GF/J37 examples refer to Prime: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground; contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded. Verify physical numbering, polarity, per-rail current allowance and free-pin ownership before connection. This pin map does not establish hardware SPI, UART, CAN or PWM availability on an arbitrary contact.

## Smoothieware support and example boundary

### Example transistor lane: dry-contact state monitor
No translator register driver is needed. The example lane is J1.3 (also J8.1) 1P3 → Q1 physical source1/gate2/drain6 → J3.1 /Shifter/0H. Do not use the drain3 pairing: that belongs to the other physical transistor. RN1 pair2–7 pulls the low side to 3.3 V and RN2 pair1–8 pulls the high side to 5 V, each 4.7 kohm. Prime GF/J37.3 PB1 is the low-side input; GF.10 and J1.10 are the ground contacts.

A useful setup is a dry switch between high-side J3.1 and ground, observing the translated low-side state. Check MOSFET 3.3 V conduction, input LOW margin, switch microload, pullup current and both-rail power order before connecting. The software input setup does not replace those electrical checks:

```ini
[endstops]
translated_contact.enable = true
translated_contact.pin = PB1-
translated_contact.axis = X
translated_contact.homing_direction = none
translated_contact.limit_enable = false
```

An existing valid X actuator and exclusive pins are required. `M119` reports the sampled logical state. The trailing minus disables internal pulls without inversion; supply a suitable external bias. No homing, limit or software-halt action is configured. Record both stable stimulus states and the disconnected/unpowered state with all machine motion disabled. This observation does not determine a safe fault polarity or provide debouncing/edge timing.

The switch closed/open readings must be measured, not assumed from the circuit name. No arbitrary I2C/UART protocol follows from this passive translator.

These instructions follow SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Requirements

Before connecting, check the transistor and pull-up circuit, lane mapping, permitted push-pull or open-drain use, rise time and loading, shared power and the host pin reservations. This page is not a wiring diagram for powered use.

## Sources and attribution

- [Ccecil upstream project](https://github.com/Ccecil/3v3-5v-LevelShifter)
- [Original source](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c)
- [Original LevelShifter.kicad_pcb](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_pcb)
- [Original LevelShifter.kicad_sch](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_sch)
- [Original README.md](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/README.md)
- [Original Shifter.kicad_sch](https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/Shifter.kicad_sch)

Modern counterpart guides are functional comparisons only and do not establish matching pinouts.

[All extension boards](/extension-boards)
