---
layout: default
title: "ExtraEndstops"
permalink: /extensions/historical-extraendstops
---

# ExtraEndstops

This board expands a host GPIO connector into seven powered three-wire endstop interfaces with per-channel filtering/indicator circuitry. It is not just seven directly connected mechanical switches.

## Documented source and compatibility

This guide describes the [Smoothieboard2 design source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/ExtraEndstops). Check connector compatibility contact by contact.

## Power, signals and controls

P1/P2 repeat 3.3 V, 5 V, ground and P3–P9. JP1 selects the peripheral +V rail: bridge .1–.2 for 3.3 V or .2–.3 for 5 V, never all three. P3–P9 each expose +V, ground and their corresponding SIG_IN. JP2–JP8 connect filtered channel nodes to host P3–P9. Each channel includes a 100 nF capacitor, diode, LED and resistors. The channel-one mechanical-switch example below covers its diode direction, indicator polarity and input margins; it does not cover 5 V use or the other channels.

<details markdown="1">
<summary>Board references, contact locators and design download</summary>

### Annotated connector and circuit reference

These functional sheets explain the connectors, jumpers and circuit components with numbered contact markers and pill callouts. They supplement the contact tables. Follow the power and wiring limitations in this guide.

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c1-instance-1-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c1-instance-1-functions-01.png" title="C1 · Input1 100nF RC filter" alt="C1 · Input1 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

<details>
<summary>All remaining connector, jumper and component-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c2-instance-2-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c2-instance-2-functions-01.png" title="C2 · Input2 100nF RC filter" alt="C2 · Input2 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c3-instance-3-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c3-instance-3-functions-01.png" title="C3 · Input3 100nF RC filter" alt="C3 · Input3 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c4-instance-4-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c4-instance-4-functions-01.png" title="C4 · Input4 100nF RC filter" alt="C4 · Input4 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c5-instance-5-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c5-instance-5-functions-01.png" title="C5 · Input5 100nF RC filter" alt="C5 · Input5 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c6-instance-6-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c6-instance-6-functions-01.png" title="C6 · Input6 100nF RC filter" alt="C6 · Input6 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-c7-instance-7-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/c7-instance-7-functions-01.png" title="C7 · Input7 100nF RC filter" alt="C7 · Input7 100nF RC filter — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d1-instance-8-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d1-instance-8-functions-01.png" title="D1 · Input1 low-state LED" alt="D1 · Input1 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d3-instance-9-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d3-instance-9-functions-01.png" title="D3 · Input2 low-state LED" alt="D3 · Input2 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d5-instance-10-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d5-instance-10-functions-01.png" title="D5 · Input3 low-state LED" alt="D5 · Input3 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d7-instance-11-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d7-instance-11-functions-01.png" title="D7 · Input4 low-state LED" alt="D7 · Input4 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp1-instance-12-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp1-instance-12-functions-01.png" title="JP1 · Sensor supply selection" alt="JP1 · Sensor supply selection — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-m1-instance-15-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/m1-instance-15-functions-01.png" title="M1 · Board mounting" alt="M1 · Board mounting — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-m2-instance-16-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/m2-instance-16-functions-01.png" title="M2 · Board mounting" alt="M2 · Board mounting — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r1-instance-17-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r1-instance-17-functions-01.png" title="R1 · Input1 680Ω LED resistor" alt="R1 · Input1 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r2-instance-18-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r2-instance-18-functions-01.png" title="R2 · Input1 1k sense pull-up" alt="R2 · Input1 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r3-instance-19-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r3-instance-19-functions-01.png" title="R3 · Input1 5.6k RC series resistor" alt="R3 · Input1 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r4-instance-20-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r4-instance-20-functions-01.png" title="R4 · Input2 680Ω LED resistor" alt="R4 · Input2 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r5-instance-21-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r5-instance-21-functions-01.png" title="R5 · Input2 1k sense pull-up" alt="R5 · Input2 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r6-instance-22-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r6-instance-22-functions-01.png" title="R6 · Input2 5.6k RC series resistor" alt="R6 · Input2 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r7-instance-23-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r7-instance-23-functions-01.png" title="R7 · Input3 680Ω LED resistor" alt="R7 · Input3 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r8-instance-24-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r8-instance-24-functions-01.png" title="R8 · Input3 1k sense pull-up" alt="R8 · Input3 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r9-instance-25-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r9-instance-25-functions-01.png" title="R9 · Input3 5.6k RC series resistor" alt="R9 · Input3 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r10-instance-26-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r10-instance-26-functions-01.png" title="R10 · Input4 680Ω LED resistor" alt="R10 · Input4 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r11-instance-27-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r11-instance-27-functions-01.png" title="R11 · Input4 1k sense pull-up" alt="R11 · Input4 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r12-instance-28-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r12-instance-28-functions-01.png" title="R12 · Input4 5.6k RC series resistor" alt="R12 · Input4 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r13-instance-29-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r13-instance-29-functions-01.png" title="R13 · Input5 680Ω LED resistor" alt="R13 · Input5 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r14-instance-30-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r14-instance-30-functions-01.png" title="R14 · Input5 1k sense pull-up" alt="R14 · Input5 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r15-instance-31-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r15-instance-31-functions-01.png" title="R15 · Input5 5.6k RC series resistor" alt="R15 · Input5 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r16-instance-32-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r16-instance-32-functions-01.png" title="R16 · Input6 680Ω LED resistor" alt="R16 · Input6 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r17-instance-33-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r17-instance-33-functions-01.png" title="R17 · Input6 1k sense pull-up" alt="R17 · Input6 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r18-instance-34-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r18-instance-34-functions-01.png" title="R18 · Input6 5.6k RC series resistor" alt="R18 · Input6 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r19-instance-35-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r19-instance-35-functions-01.png" title="R19 · Input7 680Ω LED resistor" alt="R19 · Input7 680Ω LED resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r20-instance-36-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r20-instance-36-functions-01.png" title="R20 · Input7 1k sense pull-up" alt="R20 · Input7 1k sense pull-up — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-r21-instance-37-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/r21-instance-37-functions-01.png" title="R21 · Input7 5.6k RC series resistor" alt="R21 · Input7 5.6k RC series resistor — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-m3-instance-38-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/m3-instance-38-functions-01.png" title="M3 · Board mounting" alt="M3 · Board mounting — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-m4-instance-39-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/m4-instance-39-functions-01.png" title="M4 · Board mounting" alt="M4 · Board mounting — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d9-instance-40-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d9-instance-40-functions-01.png" title="D9 · Input5 low-state LED" alt="D9 · Input5 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d11-instance-41-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d11-instance-41-functions-01.png" title="D11 · Input6 low-state LED" alt="D11 · Input6 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d13-instance-42-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d13-instance-42-functions-01.png" title="D13 · Input7 low-state LED" alt="D13 · Input7 low-state LED — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p1-instance-43-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p1-instance-43-functions-01.png" title="P1 · Parallel host input bank" alt="P1 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p1-instance-43-functions-02" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p1-instance-43-functions-02.png" title="P1 · Parallel host input bank" alt="P1 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p1-instance-43-functions-03" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p1-instance-43-functions-03.png" title="P1 · Parallel host input bank" alt="P1 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p2-instance-44-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p2-instance-44-functions-01.png" title="P2 · Parallel host input bank" alt="P2 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p2-instance-44-functions-02" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p2-instance-44-functions-02.png" title="P2 · Parallel host input bank" alt="P2 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p2-instance-44-functions-03" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p2-instance-44-functions-03.png" title="P2 · Parallel host input bank" alt="P2 · Parallel host input bank — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d8-instance-45-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d8-instance-45-functions-01.png" title="D8 · Input4 signal diode" alt="D8 · Input4 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d10-instance-46-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d10-instance-46-functions-01.png" title="D10 · Input5 signal diode" alt="D10 · Input5 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d12-instance-47-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d12-instance-47-functions-01.png" title="D12 · Input6 signal diode" alt="D12 · Input6 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d14-instance-48-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d14-instance-48-functions-01.png" title="D14 · Input7 signal diode" alt="D14 · Input7 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d2-instance-49-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d2-instance-49-functions-01.png" title="D2 · Input1 signal diode" alt="D2 · Input1 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d4-instance-50-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d4-instance-50-functions-01.png" title="D4 · Input2 signal diode" alt="D4 · Input2 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-d6-instance-51-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/d6-instance-51-functions-01.png" title="D6 · Input3 signal diode" alt="D6 · Input3 signal diode — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p3-instance-52-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p3-instance-52-functions-01.png" title="P3 · Input1 sensor connector" alt="P3 · Input1 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p4-instance-53-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p4-instance-53-functions-01.png" title="P4 · Input2 sensor connector" alt="P4 · Input2 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p5-instance-54-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p5-instance-54-functions-01.png" title="P5 · Input3 sensor connector" alt="P5 · Input3 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p6-instance-55-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p6-instance-55-functions-01.png" title="P6 · Input4 sensor connector" alt="P6 · Input4 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p7-instance-56-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p7-instance-56-functions-01.png" title="P7 · Input5 sensor connector" alt="P7 · Input5 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p8-instance-57-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p8-instance-57-functions-01.png" title="P8 · Input6 sensor connector" alt="P8 · Input6 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-p9-instance-58-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/p9-instance-58-functions-01.png" title="P9 · Input7 sensor connector" alt="P9 · Input7 sensor connector — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp2-instance-59-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp2-instance-59-functions-01.png" title="JP2 · Input1 host link" alt="JP2 · Input1 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp8-instance-60-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp8-instance-60-functions-01.png" title="JP8 · Input7 host link" alt="JP8 · Input7 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp7-instance-61-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp7-instance-61-functions-01.png" title="JP7 · Input6 host link" alt="JP7 · Input6 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp6-instance-62-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp6-instance-62-functions-01.png" title="JP6 · Input5 host link" alt="JP6 · Input5 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp5-instance-63-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp5-instance-63-functions-01.png" title="JP5 · Input4 host link" alt="JP5 · Input4 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp4-instance-64-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp4-instance-64-functions-01.png" title="JP4 · Input3 host link" alt="JP4 · Input3 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reconstructed-jp3-instance-65-functions-01" src="/images/extensions/historical-extraendstops/guides/reconstructed-reference/jp3-instance-65-functions-01.png" title="JP3 · Input2 host link" alt="JP3 · Input2 host link — functional reference" caption="Numbered native contact positions and functional callouts." width=420 %}

</details>

[Drawing licence, attribution and modification notice](/images/extensions/historical-extraendstops/guides/reconstructed-reference/NOTICE.md). The SVG files are editable drawing sources; the matching design files and notices remain available below.

<details>
<summary>Contact locators and design download</summary>

### Contact locator reference

These locators show pad positions and the board outline. Read all focused sheets together.

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-overview" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-overview.png" title="Extra endstops" alt="Extra endstops — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p1-1-5" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p1-1-5.png" title="P1 · Host / parallel bus" alt="P1 · Host / parallel bus — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p1-6-10" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p1-6-10.png" title="P1 · Host / parallel bus" alt="P1 · Host / parallel bus — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p2-1-5" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p2-1-5.png" title="P2 · Host / parallel bus" alt="P2 · Host / parallel bus — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p2-6-10" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p2-6-10.png" title="P2 · Host / parallel bus" alt="P2 · Host / parallel bus — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp1-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp1-1-3.png" title="JP1 · Sensor supply select" alt="JP1 · Sensor supply select — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p3-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p3-1-3.png" title="P3 · Sensor channel1" alt="P3 · Sensor channel1 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp2-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · Host signal link" alt="JP2 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p4-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p4-1-3.png" title="P4 · Sensor channel2" alt="P4 · Sensor channel2 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp3-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Host signal link" alt="JP3 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p5-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p5-1-3.png" title="P5 · Sensor channel3" alt="P5 · Sensor channel3 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp4-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp4-1-2.png" title="JP4 · Host signal link" alt="JP4 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p6-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p6-1-3.png" title="P6 · Sensor channel4" alt="P6 · Sensor channel4 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp5-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp5-1-2.png" title="JP5 · Host signal link" alt="JP5 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p7-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p7-1-3.png" title="P7 · Sensor channel5" alt="P7 · Sensor channel5 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp6-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp6-1-2.png" title="JP6 · Host signal link" alt="JP6 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p8-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p8-1-3.png" title="P8 · Sensor channel6" alt="P8 · Sensor channel6 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp7-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp7-1-2.png" title="JP7 · Host signal link" alt="JP7 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-p9-1-3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-p9-1-3.png" title="P9 · Sensor channel7" alt="P9 · Sensor channel7 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-jp8-1-2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-jp8-1-2.png" title="JP8 · Host signal link" alt="JP8 · Host signal link — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel1" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel1.png" title="Sensor path 1" alt="Sensor path 1 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator1" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator1.png" title="Indicator / pull-up 1" alt="Indicator / pull-up 1 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel2.png" title="Sensor path 2" alt="Sensor path 2 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator2" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator2.png" title="Indicator / pull-up 2" alt="Indicator / pull-up 2 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel3.png" title="Sensor path 3" alt="Sensor path 3 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator3" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator3.png" title="Indicator / pull-up 3" alt="Indicator / pull-up 3 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel4" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel4.png" title="Sensor path 4" alt="Sensor path 4 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator4" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator4.png" title="Indicator / pull-up 4" alt="Indicator / pull-up 4 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel5" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel5.png" title="Sensor path 5" alt="Sensor path 5 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator5" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator5.png" title="Indicator / pull-up 5" alt="Indicator / pull-up 5 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel6" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel6.png" title="Sensor path 6" alt="Sensor path 6 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator6" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator6.png" title="Indicator / pull-up 6" alt="Indicator / pull-up 6 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-channel7" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-channel7.png" title="Sensor path 7" alt="Sensor path 7 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-indicator7" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-indicator7.png" title="Indicator / pull-up 7" alt="Indicator / pull-up 7 — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-power" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-power.png" title="Power-selector warning" alt="Power-selector warning — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-extra" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-extra.png" title="Unnumbered physical pads" alt="Unnumbered physical pads — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-mounts" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-mounts.png" title="Native mounting holes" alt="Native mounting holes — contact locator" caption="Use all companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-reader-compact-boundary" src="/images/extensions/historical-extraendstops/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing notes" alt="Drawing notes — contact locator" caption="Use all companion sheets." width=420 %}

[Download the design source, upstream licence and drawing notice](/images/extensions/historical-extraendstops/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below records circuit connectivity; check physical cable orientation before wiring.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
|---|---|---|
| P1 | Y | 1 → +3V3; 2 → +5V; 3 → P3; 4 → P4; 5 → P5; 6 → P6; 7 → P7; 8 → P8; 9 → P9; 10 → GND |
| P2 | Y | 1 → +3V3; 2 → +5V; 3 → P3; 4 → P4; 5 → P5; 6 → P6; 7 → P7; 8 → P8; 9 → P9; 10 → GND |
| JP1 | ESTOPV | 1 → +3V3; 2 → +V; 3 → +5V |
| P3 | INP0 | 1 → +V; 2 → GND; 3 → /Endstop1/SIG_IN |
| P4 | INP1 | 1 → +V; 2 → GND; 3 → /Endstop2/SIG_IN |
| P5 | INP2 | 1 → +V; 2 → GND; 3 → /Endstop3/SIG_IN |
| P6 | INP3 | 1 → +V; 2 → GND; 3 → /Endstop4/SIG_IN |
| P7 | INP4 | 1 → +V; 2 → GND; 3 → /Endstop5/SIG_IN |
| P8 | INP5 | 1 → +V; 2 → GND; 3 → /Endstop6/SIG_IN |
| P9 | INP6 | 1 → +V; 2 → GND; 3 → /Endstop7/SIG_IN |
| D1 | LED | 1 → Net-(D1-Pad1); 2 → Net-(D1-Pad2) |
| D2 | 1N4148WS | 1 → /Endstop1/SIG_IN; 2 → Net-(D1-Pad1) |
| JP2 | Bridge | 1 → Net-(C1-Pad1); 2 → P3 |
| D5 | LED | 1 → Net-(D5-Pad1); 2 → Net-(D5-Pad2) |
| D6 | 1N4148WS | 1 → /Endstop3/SIG_IN; 2 → Net-(D5-Pad1) |
| JP4 | Bridge | 1 → Net-(C3-Pad1); 2 → P5 |
| D7 | LED | 1 → Net-(D7-Pad1); 2 → Net-(D7-Pad2) |
| D8 | 1N4148WS | 1 → /Endstop4/SIG_IN; 2 → Net-(D7-Pad1) |
| JP5 | Bridge | 1 → Net-(C4-Pad1); 2 → P6 |
| D9 | LED | 1 → Net-(D10-Pad2); 2 → Net-(D9-Pad2) |
| D10 | 1N4148WS | 1 → /Endstop5/SIG_IN; 2 → Net-(D10-Pad2) |
| JP6 | Bridge | 1 → Net-(C5-Pad1); 2 → P7 |
| D11 | LED | 1 → Net-(D11-Pad1); 2 → Net-(D11-Pad2) |
| D12 | 1N4148WS | 1 → /Endstop6/SIG_IN; 2 → Net-(D11-Pad1) |
| JP7 | Bridge | 1 → Net-(C6-Pad1); 2 → P8 |
| D13 | LED | 1 → Net-(D13-Pad1); 2 → Net-(D13-Pad2) |
| D14 | 1N4148WS | 1 → /Endstop7/SIG_IN; 2 → Net-(D13-Pad1) |
| JP8 | Bridge | 1 → Net-(C7-Pad1); 2 → P9 |
| D3 | LED | 1 → Net-(D3-Pad1); 2 → Net-(D3-Pad2) |
| D4 | 1N4148WS | 1 → /Endstop2/SIG_IN; 2 → Net-(D3-Pad1) |
| JP3 | Bridge | 1 → Net-(C2-Pad1); 2 → P4 |

</div>

</details>

</details>

</details>

## Connect and try it: one mechanical position switch

This example reads a Panasonic **AEQ10417** leaf-lever, solder-terminal SPDT switch through channel one of the ExtraEndstops board. It provides a complete position-switch circuit and logical readout; it does not configure machine travel, automatic homing or safety limits.

The Panasonic switch is specified for low-level loads starting at 100 µA and 3 V DC. A general-purpose silver-contact microswitch is not an equivalent substitution. Use its **COM** and **NC** terminals, identified from the manufacturer's contact diagram and verified with the switch disconnected: they conduct with the lever released and open when sufficiently pressed. Leave NO insulated and unused. The manufacturer does not assign electrical terminal numbers in this diagram; do not invent a numbered pinout or infer terminals from a photograph.

### Population and electrical boundary

The part references are the [Panasonic AEQ catalogue, June 2024](https://mediap.industry.panasonic.eu/assets/imported/industrial.panasonic.com/ac/cdn/e/control/switch/micro/catalog/sw_m_eng_aeq.pdf), [Diodes Incorporated 1N4148WS datasheet, February 2025](https://www.diodes.com/datasheet/download/1N4148WS.pdf), and [STM32H745 DS12923 revision 3, January 2026](https://www.st.com/resource/en/datasheet/stm32h745bg.pdf), tables 9 and 59.

For the quantitative example below, D2 must be the specified **Diodes Incorporated 1N4148WS-7-F**, fitted with its cathode band toward native pad 1/P3.3. The design files say only `1N4148WS` and do not name a manufacturer. The datasheet's maximum forward-voltage value is specified at 25 °C; the calculation does not cover a cold machine enclosure or the full diode operating-temperature range.

Use **Prime V2 P12 GF/J37 contact 1, the limited 3.3 V rail**, as the only extension-board supply. Exclude the 5 V lead: PB1 is a TT_a input in the current STM32H745 datasheet, not a 5 V-tolerant input. This example requires the common host/board supply within 3.135–3.465 V, R1/R2/R3 within ±5% of their marked values, and the switch plus its two-wire loop resistance at most 2 Ω. Confirm the host rail under this load; there is no external supply or backfeeding connection.

### Five conductors and two board links

Disconnect all power before making or changing connections. Use individually identified conductors rather than an assumed straight-through ten-wire cable. Locate every numbered pad from the component-side views. A mating connector view reverses the apparent order; verify continuity instead of copying a front-view drawing onto the rear of a plug.

| From | To | Purpose |
|---|---|---|
| Prime P12 GF/J37.1 | ExtraEndstops P1.1 | Limited 3.3 V supply for input pull-up and indicator |
| Prime P12 GF/J37.10 | ExtraEndstops P1.10 | Common ground/return |
| ExtraEndstops P1.3 | Prime P12 GF/J37.3 / PB1 | Filtered channel-one signal, input at Prime |
| ExtraEndstops P3.3 | AEQ10417 NC | Raw switch signal into diode cathode |
| AEQ10417 COM | ExtraEndstops P3.2 | Switch return to common ground |

Close **JP1 contacts 1–2 only** to join +3V3 to selected +V. Leave JP1.3 disconnected; never bridge both rail selections. Close **JP2 contacts 1–2** to connect the first filter output to P1.3. Check the actual solder/cut-link state: footprint names do not show whether a link is closed.

Leave J37.2 and J37.4–9 disconnected from this board; leave P1.2/P1.4–9, the whole parallel P2 chain header, P3.1, P4–P9, and the switch NO terminal unused. Leave JP3–JP8 open to isolate unused channel outputs. No other channel is assigned in the example. Do not attach an active, powered or industrial-voltage sensor to the switch contacts.

### How the circuit reads the switch

With NC closed, current flows from +V through **R2 1 kΩ**, through **D2 anode 2 to cathode 1**, then through P3.3, NC–COM, P3.2 and ground. A second branch runs from +3V3 through **R1 680 Ω** and **D1 LED anode 2 to cathode 1**, joining the same diode/switch path. D1 is therefore expected to light while the contact is closed; brightness is not specified because the LED part is unspecified.

The sense node feeds **R3 5.6 kΩ**, then **C1 100 nF to ground**, then JP2 and P1.3/PB1. Opening NC removes the ground path; R2 pulls the sense/filter output HIGH and the indicator branch stops conducting. There is no active buffer or galvanic isolation. The signal LOW includes the forward drop of D2: it is not necessarily 0 V. Do not rely on D2 as a 5 V clamp or an industrial surge protector.

Under the stated 25 °C population/bounds, a conservative diode-current upper bound is 9.03 mA, below the datasheet's 10 mA forward-voltage test point. Using 0.855 V for D2, 18.1 mV for the 2 Ω switch loop, 60.3 mV for host leakage across R3, and a separate 10 mV ground-offset budget gives a LOW ceiling of **0.944 V**. ST Table 59 additionally guarantees by design a LOW limit of 0.4 × VDD − 0.1 V: 1.154 V at 3.135 V, leaving about **210 mV**. The leakage calculation conservatively allocates the datasheet’s whole-product 10 µA leakage allowance plus the input’s 250 nA to this one signal. Using only the stricter CMOS 0.3 × VDD boundary would not establish a positive worst-case margin with that allocation; the calculation therefore explicitly relies on the guaranteed-by-design bound. This is a small calculated margin, not noise immunity. An unidentified diode, extra cable resistance, internal pull-up or colder diode invalidates that bound.

The open-contact HIGH is approximately the shared 3.3 V rail; the host leakage budget drops at most 71.1 mV through R2+R3; even independently combining the lowest board supply and highest host CMOS HIGH threshold leaves approximately 638 mV of HIGH margin. The nominal rising RC time constant is 0.66 ms and falling time constant approximately 0.56 ms, excluding diode/cable effects. This filter is not a specified debounce algorithm or a guarantee for short pulses. Hold the lever steadily for the readout below.

## Smoothieware use

The firmware reference is SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. Reserve PB1 exclusively. Merge the following into the existing `[endstops]` section; it requires an existing valid X actuator configuration, but neither homes nor enables limit actions. Keep motors disabled for this position-readout procedure. The suffix `-` explicitly disables the internal pull-up and pull-down; omitting it defaults to an internal pull-up and changes the voltage calculation.

```ini
[endstops]
extra_input1_diagnostic.enable = true
extra_input1_diagnostic.pin = PB1-
extra_input1_diagnostic.axis = X
extra_input1_diagnostic.homing_direction = none
extra_input1_diagnostic.limit_enable = false
```

After checking the parts, continuity and rail conditions above, load the configuration using the controller's configuration workflow. Send **`M119`**. In its `pins-` list the X-associated entry is expected to show **`PB1:0`** with the lever released/NC closed, and **`PB1:1`** after holding the lever pressed/NC open. Release and repeat. No `!` inversion is used. An open or broken switch loop also tends HIGH, but shorts to ground are not detected: this is not a safety circuit.

This reads the mechanical switch as a position input. Assigning it to a moving machine's homing or limits additionally requires that machine's axis, direction, travel, speed, stopping and fault policy, which are not given here. No extra board-specific firmware driver is needed for this passive diode/RC interface.

### Complete five-wire circuit and required enlarged views

Use the main circuit **together with both connected enlargements, the five numbered-contact keys and the jumper setup below**. The small main view is an overview; do not identify a cable contact from its tiny numbers. Every coloured lead reaches the actual board contact. The host and switch panels show two connected parts of the same channel-one circuit; the board itself joins its host and switch connectors through the diode/filter network described above.

The Prime drawing shows the GF/J37 contact numbering. All connector details are component-side projections: GF and P3 are native 0°, and P1 is rotated −90°. They are not mating-face views. The odd/even row panels retain the real contact positions within each row; verify the actual conductor identity and continuity before power.

The specified Diodes Incorporated D2 part, the 25 °C calculation and every electrical condition above apply. There is **no 5 V lead**.

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-compact-complete-installation" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/compact-complete-installation.png" title="Complete channel-one NC-switch circuit" alt="Complete channel-one NC-switch circuit" caption="All five leads are present. Enlarged connected views, numbered keys and jumper setup are required; read the parts and electrical boundary above." width=560 %}

#### Required connected enlargements

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-connected-host-link" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/connected-host-link.png" title="Prime GF/J37 to board P1 — three complete leads" alt="Prime GF/J37 to board P1 — three complete leads" caption="Limited 3V3, PB1 input and ground; even row above, odd row below. P1 is rotated −90° from its board view." width=560 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-connected-switch-link" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/connected-switch-link.png" title="Board P3 to Panasonic AEQ10417 — two complete leads" alt="Board P3 to Panasonic AEQ10417 — two complete leads" caption="P3.3 to NC and COM to P3.2. Insulate unused NO; verify COM/NC with the disconnected switch." width=560 %}

#### Required numbered-contact keys

Use all five keys to distinguish used and unused contacts. Gold marks are solder-pad copper, not mating cavities.

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-key-gf-even" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-key-gf-even.png" title="Prime GF/J37 even contacts" alt="Prime GF/J37 even contacts" caption="Numbered native contact positions. Component-side projection, not a cable mating face; follow the five-conductor table and unused-contact exclusions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-key-gf-odd" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-key-gf-odd.png" title="Prime GF/J37 odd contacts" alt="Prime GF/J37 odd contacts" caption="Numbered native contact positions. Component-side projection, not a cable mating face; follow the five-conductor table and unused-contact exclusions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-key-p1-even" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-key-p1-even.png" title="Board P1 even contacts" alt="Board P1 even contacts" caption="Numbered native contact positions. Component-side projection, not a cable mating face; follow the five-conductor table and unused-contact exclusions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-key-p1-odd" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-key-p1-odd.png" title="Board P1 odd contacts" alt="Board P1 odd contacts" caption="Numbered native contact positions. Component-side projection, not a cable mating face; follow the five-conductor table and unused-contact exclusions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-key-p3" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-key-p3.png" title="Board P3 switch contacts" alt="Board P3 switch contacts" caption="Numbered native contact positions. Component-side projection, not a cable mating face; follow the five-conductor table and unused-contact exclusions." width=420 %}

#### Required jumper setup

{% include _includes/extension-instruction-diagram.html id="historical-extraendstops-native-native-jumper-setup" src="/images/extensions/historical-extraendstops/guides/native-attached-switch/native-jumper-setup.png" title="Channel-one supply and filter links" alt="Channel-one supply and filter links" caption="JP1 1–2 selects 3V3; leave JP1.3 open. JP2 1–2 connects the first filtered input to P1.3. Purple dashed marks are configured PCB links, not external leads." width=560 %}

[Drawing source, attribution and modification notice](/images/extensions/historical-extraendstops/guides/native-attached-switch/NOTICE.md).

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission.

[All extension boards](/extension-boards)
