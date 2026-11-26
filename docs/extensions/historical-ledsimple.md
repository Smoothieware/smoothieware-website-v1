---
layout: default
title: "LedSimple"
permalink: /extensions/historical-ledsimple
---

# LedSimple

This is a seven-channel GPIO indicator board: each host signal lights its corresponding LED through a resistor. It is useful for observing digital outputs during a bench test, not for driving external power loads.

Read the [two-lead connection checklist](#connect-and-try-it), then the [digital-output example](#smoothieware-use). The reference views below explain the board; the connection checklist leaves both supply contacts unused.

## Documented source and compatibility

This guide describes the [Smoothieboard2 design source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/LedSimple). Check connector compatibility contact by contact.

## Power, signals and controls

P1.3–.9 are P3–P9. D1–D7 have their contact 1 on ground and contact 2 toward the signal resistor, indicating active-high LED paths in the KiCad diode convention. The netlist labels P1.1/.2 as 3.3 V/5 V, but those two pads have no assigned nets on the PCB. Leave both contacts unused. Each indicator is driven through its 330 Ω series resistor from its GPIO signal, with the LED cathode connected to ground; it does not need a separate supply contact. There are no user jumpers or switches. The schematic and netlist specify D1 as Avago HSMH-C190 in an LED-0603 footprint (supplier reference 516-1420-6-ND). Check the fitted LED, operating current and host drive budget.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These drawings show the board outline, component footprints, pads and graphics with function callouts. Purple bottom-side graphics are projected into front-board coordinates, not a bottom mating view. P1.1 and P1.2 remain unused because the PCB has no assigned nets there despite the netlist rail names. Check output current before powering the seven 330 Ω LED paths.

### Board reference

These function-labelled views show the board geometry. They are not mating views.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-00-overview" src="/images/extensions/historical-ledsimple/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d1-1.png" title="D1 1" alt="D1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d2-1.png" title="D2 1" alt="D2 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d3-1.png" title="D3 1" alt="D3 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d4-1.png" title="D4 1" alt="D4 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d5-1.png" title="D5 1" alt="D5 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d6-1.png" title="D6 1" alt="D6 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d7-1.png" title="D7 1" alt="D7 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-m1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-m2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-p1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-p1-2" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-p1-2.png" title="P1 2" alt="P1 2" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r1-1.png" title="R1 1" alt="R1 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r2-1.png" title="R2 1" alt="R2 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r3-1.png" title="R3 1" alt="R3 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r4-1.png" title="R4 1" alt="R4 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r5-1.png" title="R5 1" alt="R5 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r6-1.png" title="R6 1" alt="R6 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r7-1.png" title="R7 1" alt="R7 1" caption=" Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact audits and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-00-overview" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/00-overview.png" title="LedSimple reference — 00 overview" alt="LedSimple reference — 00 overview" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d1-1.png" title="LedSimple reference — d1 1" alt="LedSimple reference — d1 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d2-1.png" title="LedSimple reference — d2 1" alt="LedSimple reference — d2 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d3-1.png" title="LedSimple reference — d3 1" alt="LedSimple reference — d3 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d4-1.png" title="LedSimple reference — d4 1" alt="LedSimple reference — d4 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d5-1.png" title="LedSimple reference — d5 1" alt="LedSimple reference — d5 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d6-1.png" title="LedSimple reference — d6 1" alt="LedSimple reference — d6 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d7-1.png" title="LedSimple reference — d7 1" alt="LedSimple reference — d7 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-mounting-and-controls" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/mounting-and-controls.png" title="LedSimple reference — mounting and controls" alt="LedSimple reference — mounting and controls" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-p1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/p1-1.png" title="LedSimple reference — p1 1" alt="LedSimple reference — p1 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-p1-2" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/p1-2.png" title="LedSimple reference — p1 2" alt="LedSimple reference — p1 2" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d1-01.png" title="LedSimple reference — pin d1 01" alt="LedSimple reference — pin d1 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d1-02.png" title="LedSimple reference — pin d1 02" alt="LedSimple reference — pin d1 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d2-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d2-01.png" title="LedSimple reference — pin d2 01" alt="LedSimple reference — pin d2 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d2-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d2-02.png" title="LedSimple reference — pin d2 02" alt="LedSimple reference — pin d2 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d3-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d3-01.png" title="LedSimple reference — pin d3 01" alt="LedSimple reference — pin d3 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d3-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d3-02.png" title="LedSimple reference — pin d3 02" alt="LedSimple reference — pin d3 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d4-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d4-01.png" title="LedSimple reference — pin d4 01" alt="LedSimple reference — pin d4 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d4-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d4-02.png" title="LedSimple reference — pin d4 02" alt="LedSimple reference — pin d4 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d5-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d5-01.png" title="LedSimple reference — pin d5 01" alt="LedSimple reference — pin d5 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d5-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d5-02.png" title="LedSimple reference — pin d5 02" alt="LedSimple reference — pin d5 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d6-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d6-01.png" title="LedSimple reference — pin d6 01" alt="LedSimple reference — pin d6 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d6-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d6-02.png" title="LedSimple reference — pin d6 02" alt="LedSimple reference — pin d6 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d7-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d7-01.png" title="LedSimple reference — pin d7 01" alt="LedSimple reference — pin d7 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d7-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d7-02.png" title="LedSimple reference — pin d7 02" alt="LedSimple reference — pin d7 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-01.png" title="LedSimple reference — pin p1 01" alt="LedSimple reference — pin p1 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-02.png" title="LedSimple reference — pin p1 02" alt="LedSimple reference — pin p1 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-03" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-03.png" title="LedSimple reference — pin p1 03" alt="LedSimple reference — pin p1 03" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-04" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-04.png" title="LedSimple reference — pin p1 04" alt="LedSimple reference — pin p1 04" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-05" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-05.png" title="LedSimple reference — pin p1 05" alt="LedSimple reference — pin p1 05" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-06" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-06.png" title="LedSimple reference — pin p1 06" alt="LedSimple reference — pin p1 06" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-07" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-07.png" title="LedSimple reference — pin p1 07" alt="LedSimple reference — pin p1 07" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-08" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-08.png" title="LedSimple reference — pin p1 08" alt="LedSimple reference — pin p1 08" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-09" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-09.png" title="LedSimple reference — pin p1 09" alt="LedSimple reference — pin p1 09" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-10" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-10.png" title="LedSimple reference — pin p1 10" alt="LedSimple reference — pin p1 10" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r1-01.png" title="LedSimple reference — pin r1 01" alt="LedSimple reference — pin r1 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r1-02.png" title="LedSimple reference — pin r1 02" alt="LedSimple reference — pin r1 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r2-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r2-01.png" title="LedSimple reference — pin r2 01" alt="LedSimple reference — pin r2 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r2-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r2-02.png" title="LedSimple reference — pin r2 02" alt="LedSimple reference — pin r2 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r3-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r3-01.png" title="LedSimple reference — pin r3 01" alt="LedSimple reference — pin r3 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r3-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r3-02.png" title="LedSimple reference — pin r3 02" alt="LedSimple reference — pin r3 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r4-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r4-01.png" title="LedSimple reference — pin r4 01" alt="LedSimple reference — pin r4 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r4-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r4-02.png" title="LedSimple reference — pin r4 02" alt="LedSimple reference — pin r4 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r5-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r5-01.png" title="LedSimple reference — pin r5 01" alt="LedSimple reference — pin r5 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r5-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r5-02.png" title="LedSimple reference — pin r5 02" alt="LedSimple reference — pin r5 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r6-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r6-01.png" title="LedSimple reference — pin r6 01" alt="LedSimple reference — pin r6 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r6-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r6-02.png" title="LedSimple reference — pin r6 02" alt="LedSimple reference — pin r6 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r7-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r7-01.png" title="LedSimple reference — pin r7 01" alt="LedSimple reference — pin r7 01" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r7-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r7-02.png" title="LedSimple reference — pin r7 02" alt="LedSimple reference — pin r7 02" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r1-1.png" title="LedSimple reference — r1 1" alt="LedSimple reference — r1 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r2-1.png" title="LedSimple reference — r2 1" alt="LedSimple reference — r2 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r3-1.png" title="LedSimple reference — r3 1" alt="LedSimple reference — r3 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r4-1.png" title="LedSimple reference — r4 1" alt="LedSimple reference — r4 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r5-1.png" title="LedSimple reference — r5 1" alt="LedSimple reference — r5 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r6-1.png" title="LedSimple reference — r6 1" alt="LedSimple reference — r6 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r7-1.png" title="LedSimple reference — r7 1" alt="LedSimple reference — r7 1" caption="Board reference. Front-coordinate projection, not a mating view. P1.1/.2 unused." width=420 %}

<details markdown="1">
<summary>Additional functional references</summary>

### Annotated connector and component reference
{: #focused-contact-function-sheets style="scroll-margin-top: 6rem;"}

These focused sheets combine board artwork, numbered contact keys and function callouts. Use all sheets together. Coordinate keys locate source pads; they are not connector mating views.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-m2-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-m1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d1-functions-01.png" title="D1 — contact functions" alt="D1 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d2-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d2-functions-01.png" title="D2 — contact functions" alt="D2 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d3-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d3-functions-01.png" title="D3 — contact functions" alt="D3 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d4-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d4-functions-01.png" title="D4 — contact functions" alt="D4 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d5-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d5-functions-01.png" title="D5 — contact functions" alt="D5 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d6-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d6-functions-01.png" title="D6 — contact functions" alt="D6 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d7-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d7-functions-01.png" title="D7 — contact functions" alt="D7 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-p1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/p1-functions-01.png" title="P1 — contact functions" alt="P1 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-p1-functions-02" src="/images/extensions/historical-ledsimple/guides/functional-reference/p1-functions-02.png" title="P1 — contact functions" alt="P1 contacts and function pills" caption=" Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

[Matching design source, licence and drawing notice](/images/extensions/historical-ledsimple/guides/native-contact-reference/native-source-and-notices.zip). Retain the CERN-OHL-1.2 licence and source notices with derivatives.

### Contact locator reference

These locators show pad positions and the board outline. Read all focused sheets together.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-overview" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-overview.png" title="Seven-line LEDs" alt="Seven-line LEDs — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-p1-1-5" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-p1-1-5.png" title="P1 · LED inputs" alt="P1 · LED inputs — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-p1-6-10" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-p1-6-10.png" title="P1 · LED inputs" alt="P1 · LED inputs — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-boundary" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing notes" alt="Drawing notes — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led1" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led1.png" title="LED resistor paths" alt="LED resistor paths — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led4" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led4.png" title="LED resistor paths" alt="LED resistor paths — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led7" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led7.png" title="Seventh LED input" alt="Seventh LED input — contact locator" caption="" width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-mounts" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting pads" alt="Mechanical mounting pads — contact locator" caption="" width=420 %}

</details>

The contact inventory below records circuit connectivity; check physical cable orientation before wiring. The PCB leaves host contacts 1 and 2 without named nets although the netlist labels them supply rails. Treat both as unused on this layout, not as extra rail outputs.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Value / role | Contact → net |
|---|---|---|
| P1 | XY | 1 → no assigned PCB net (netlist: +3V3), leave open; 2 → no assigned PCB net (netlist: +5V), leave open; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| D1 | P3 | 1 → GND; 2 → Net-(D1-Pad2) |
| D2 | P4 | 1 → GND; 2 → Net-(D2-Pad2) |
| D3 | P5 | 1 → GND; 2 → Net-(D3-Pad2) |
| D4 | P6 | 1 → GND; 2 → Net-(D4-Pad2) |
| D5 | P7 | 1 → GND; 2 → Net-(D5-Pad2) |
| D6 | P8 | 1 → GND; 2 → Net-(D6-Pad2) |
| D7 | P9 | 1 → GND; 2 → Net-(D7-Pad2) |
| R1 | 330 | 1 → Net-(D1-Pad2); 2 → /P3 |
| R2 | 330 | 1 → Net-(D2-Pad2); 2 → /P4 |
| R3 | 330 | 1 → Net-(D3-Pad2); 2 → /P5 |
| R4 | 330 | 1 → Net-(D4-Pad2); 2 → /P6 |
| R5 | 330 | 1 → Net-(D5-Pad2); 2 → /P7 |
| R6 | 330 | 1 → Net-(D6-Pad2); 2 → /P8 |
| R7 | 330 | 1 → Net-(D7-Pad2); 2 → /P9 |

</div>

</details>

</details>

## Connect and try it

The one-channel connection uses exactly two individual leads: Prime J37.3/PB1 to LEDsimple P1.3, and Prime J37.10/GND to P1.10. Leave every other contact open, including P1.1/.2; do not attach a populated header cable from this example. Check the fitted resistor, LED polarity, GPIO drive and current budget and physical mating before powering. PB1 then controls D1 through R1 (330 Ω). A simple bench test toggles this one output with the digital switch example below while the other signals remain unassigned. Do not infer that a glowing LED proves a peripheral works.

### Check the two-lead example

Keep power off while identifying and attaching the two leads. Match contact numbers against the board view, rather than using cable colours as pin numbers.

| Lead | Prime end | LedSimple end | Purpose |
|---|---|---|---|
| Signal | J37.3 / PB1 | P1.3 | Drives D1 through R1, 330 Ω |
| Return | J37.10 / ground | P1.10 | Completes D1's return path |

Leave P1.1, P1.2 and P1.4–P1.9 unconnected. The PCB does not assign supply nets to P1.1/.2; adding a supply wire does not repair that discrepancy. This example uses individual leads, not a populated ten-contact cable.

After completing the resistor, LED-polarity and GPIO-current checks, use the configuration below with PB1 reserved for this test. `M106.9` requests D1 on; `M107.9` requests D1 off. If the indication does not change, first check the configuration and command allocation, then turn power off and compare the signal/return contacts and D1/R1 population with the contact tables. Do not move the lead onto a supply contact to force the LED on.

### Practical Prime wiring

The complete board drawings below show the Prime and the LED board with two continuous leads. Read the connection limits and contact keys; zoom in for pad details.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-wholeboard-wiring" src="/images/extensions/historical-ledsimple/guides/wholeboard-readable/wholeboard-wiring.png" title="Complete-board two-lead connection" alt="Complete-board two-lead connection for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-narrow-two-leads" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/narrow-two-leads.png" title="Two individual leads — compact reader key" alt="Two individual leads — compact reader key for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-narrow-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/narrow-mandatory-limits.png" title="Mandatory limits — compact reader key" alt="Mandatory limits — compact reader key for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-contact-key" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/contact-key.png" title="Board contacts" alt="Board contacts for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-pcb-relationships" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/pcb-relationships.png" title="Indicator path inside the PCB" alt="Indicator path inside the PCB for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-firmware-and-sources" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/firmware-and-sources.png" title="Firmware example and limits" alt="Firmware example and limits for LedSimple and Smoothieboard V2 Prime" caption="Wiring reference. Exactly two individual leads; all other contacts open." width=1200 %}

## Smoothieware use

The generic digital switch module is sufficient; this board has no dedicated protocol. For the individual signal lead use PB1 without !, so a high output lights D1. The example below assumes PB1 is free.

For the J37.3/PB1 two-lead bench test, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

```ini
[switch]
board_test.enable = true
board_test.input_on_command = M106
board_test.input_off_command = M107
board_test.subcode = 9
board_test.output_pin = PB1
board_test.output_type = digital
board_test.startup_state = false
board_test.halt_set_to = false
```

After checking the board’s resistor values, LED polarity and GPIO current budget, M106.9 requests PB1 HIGH and lights D1; M107.9 requests LOW and extinguishes it. This is an indicator test only. Do not attach an external lamp, heater or other power load to an indicator channel.

Configuration field names in this example match the [V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp).

See the [V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438). Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 repository also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level licence does not cover separately sourced component images or artwork.

[All extension boards](/extension-boards)
