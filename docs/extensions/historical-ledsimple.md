---
layout: default
title: "LedSimple \u2014 recovered upstream design"
permalink: /extensions/historical-ledsimple
---

# LedSimple — recovered upstream design

This is a seven-channel GPIO indicator board: each host signal lights its corresponding LED through a resistor. It is useful for observing digital outputs during a bench test, not for driving external power loads.

Read the [two-lead connection checklist](#connect-and-try-it), then the [digital-output example](#smoothieware-use). The reference views below explain the board; the connection checklist deliberately leaves both supply contacts unused.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/LedSimple), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P1.3–.9 are P3–P9. D1–D7 have their contact 1 on ground and contact 2 toward the signal resistor, indicating active-high LED paths in the retained KiCad diode convention. The retained netlist labels P1.1/.2 as 3.3 V/5 V, but those two pads have no assigned nets in the selected PCB. Leave both contacts unused for this historical layout. Each indicator is driven through its 330 Ω series resistor from its GPIO signal, with the LED cathode connected to ground; it does not need a separate supply contact. There are no user jumpers or switches. The retained schematic and netlist specify D1 as Avago HSMH-C190 in an LED-0603 footprint (supplier reference 516-1420-6-ND). This identifies the source-declared part; the fitted LED, operating current and host drive budget still need verification.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These newly source-derived drawings retain the selected native outline, component footprints, pads and source graphics with function callouts. They are not a recovered canonical abstract or a verified mating view. Purple bottom-side graphics are projected into front-board coordinates, not a bottom mating view. P1.1 and P1.2 remain unused because the selected PCB has no assigned nets there despite the retained netlist rail names. The seven 330 Ω LED paths describe source topology only; output current, physical assembly and powered operation remain unqualified.

### Board reference

These function-labelled views retain the selected native source geometry. They are newly source-derived references, not a verified mating view.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-00-overview" src="/images/extensions/historical-ledsimple/guides/source-derived-reader-compact/reader-00-overview.svg" title="Board overview" alt="Board overview for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/source-derived-reader-compact/reader-00-mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d1-1.svg" title="D1 1" alt="D1 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d2-1.svg" title="D2 1" alt="D2 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d3-1.svg" title="D3 1" alt="D3 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d4-1.svg" title="D4 1" alt="D4 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d5-1.svg" title="D5 1" alt="D5 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d6-1.svg" title="D6 1" alt="D6 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-d7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-d7-1.svg" title="D7 1" alt="D7 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-m1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-m1-1.svg" title="M1 1" alt="M1 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-m2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-m2-1.svg" title="M2 1" alt="M2 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-p1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-p1-1.svg" title="P1 1" alt="P1 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-p1-2" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-p1-2.svg" title="P1 2" alt="P1 2 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r1-1.svg" title="R1 1" alt="R1 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r2-1.svg" title="R2 1" alt="R2 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r3-1.svg" title="R3 1" alt="R3 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r4-1.svg" title="R4 1" alt="R4 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r5-1.svg" title="R5 1" alt="R5 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r6-1.svg" title="R6 1" alt="R6 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-compact-function-reader-r7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-reader/reader-r7-1.svg" title="R7 1" alt="R7 1 for the selected historical ledsimple source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-00-overview" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/00-overview.svg" title="LedSimple source reference — 00 overview" alt="LedSimple source reference — 00 overview" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d1-1.svg" title="LedSimple source reference — d1 1" alt="LedSimple source reference — d1 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d2-1.svg" title="LedSimple source reference — d2 1" alt="LedSimple source reference — d2 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d3-1.svg" title="LedSimple source reference — d3 1" alt="LedSimple source reference — d3 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d4-1.svg" title="LedSimple source reference — d4 1" alt="LedSimple source reference — d4 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d5-1.svg" title="LedSimple source reference — d5 1" alt="LedSimple source reference — d5 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d6-1.svg" title="LedSimple source reference — d6 1" alt="LedSimple source reference — d6 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-d7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/d7-1.svg" title="LedSimple source reference — d7 1" alt="LedSimple source reference — d7 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-mounting-and-controls" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/mounting-and-controls.svg" title="LedSimple source reference — mounting and controls" alt="LedSimple source reference — mounting and controls" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-p1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/p1-1.svg" title="LedSimple source reference — p1 1" alt="LedSimple source reference — p1 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-p1-2" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/p1-2.svg" title="LedSimple source reference — p1 2" alt="LedSimple source reference — p1 2" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d1-01.svg" title="LedSimple source reference — pin d1 01" alt="LedSimple source reference — pin d1 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d1-02.svg" title="LedSimple source reference — pin d1 02" alt="LedSimple source reference — pin d1 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d2-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d2-01.svg" title="LedSimple source reference — pin d2 01" alt="LedSimple source reference — pin d2 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d2-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d2-02.svg" title="LedSimple source reference — pin d2 02" alt="LedSimple source reference — pin d2 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d3-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d3-01.svg" title="LedSimple source reference — pin d3 01" alt="LedSimple source reference — pin d3 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d3-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d3-02.svg" title="LedSimple source reference — pin d3 02" alt="LedSimple source reference — pin d3 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d4-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d4-01.svg" title="LedSimple source reference — pin d4 01" alt="LedSimple source reference — pin d4 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d4-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d4-02.svg" title="LedSimple source reference — pin d4 02" alt="LedSimple source reference — pin d4 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d5-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d5-01.svg" title="LedSimple source reference — pin d5 01" alt="LedSimple source reference — pin d5 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d5-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d5-02.svg" title="LedSimple source reference — pin d5 02" alt="LedSimple source reference — pin d5 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d6-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d6-01.svg" title="LedSimple source reference — pin d6 01" alt="LedSimple source reference — pin d6 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d6-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d6-02.svg" title="LedSimple source reference — pin d6 02" alt="LedSimple source reference — pin d6 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d7-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d7-01.svg" title="LedSimple source reference — pin d7 01" alt="LedSimple source reference — pin d7 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-d7-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-d7-02.svg" title="LedSimple source reference — pin d7 02" alt="LedSimple source reference — pin d7 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-01.svg" title="LedSimple source reference — pin p1 01" alt="LedSimple source reference — pin p1 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-02.svg" title="LedSimple source reference — pin p1 02" alt="LedSimple source reference — pin p1 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-03" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-03.svg" title="LedSimple source reference — pin p1 03" alt="LedSimple source reference — pin p1 03" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-04" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-04.svg" title="LedSimple source reference — pin p1 04" alt="LedSimple source reference — pin p1 04" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-05" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-05.svg" title="LedSimple source reference — pin p1 05" alt="LedSimple source reference — pin p1 05" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-06" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-06.svg" title="LedSimple source reference — pin p1 06" alt="LedSimple source reference — pin p1 06" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-07" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-07.svg" title="LedSimple source reference — pin p1 07" alt="LedSimple source reference — pin p1 07" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-08" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-08.svg" title="LedSimple source reference — pin p1 08" alt="LedSimple source reference — pin p1 08" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-09" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-09.svg" title="LedSimple source reference — pin p1 09" alt="LedSimple source reference — pin p1 09" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-p1-10" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-p1-10.svg" title="LedSimple source reference — pin p1 10" alt="LedSimple source reference — pin p1 10" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r1-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r1-01.svg" title="LedSimple source reference — pin r1 01" alt="LedSimple source reference — pin r1 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r1-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r1-02.svg" title="LedSimple source reference — pin r1 02" alt="LedSimple source reference — pin r1 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r2-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r2-01.svg" title="LedSimple source reference — pin r2 01" alt="LedSimple source reference — pin r2 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r2-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r2-02.svg" title="LedSimple source reference — pin r2 02" alt="LedSimple source reference — pin r2 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r3-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r3-01.svg" title="LedSimple source reference — pin r3 01" alt="LedSimple source reference — pin r3 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r3-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r3-02.svg" title="LedSimple source reference — pin r3 02" alt="LedSimple source reference — pin r3 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r4-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r4-01.svg" title="LedSimple source reference — pin r4 01" alt="LedSimple source reference — pin r4 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r4-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r4-02.svg" title="LedSimple source reference — pin r4 02" alt="LedSimple source reference — pin r4 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r5-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r5-01.svg" title="LedSimple source reference — pin r5 01" alt="LedSimple source reference — pin r5 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r5-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r5-02.svg" title="LedSimple source reference — pin r5 02" alt="LedSimple source reference — pin r5 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r6-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r6-01.svg" title="LedSimple source reference — pin r6 01" alt="LedSimple source reference — pin r6 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r6-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r6-02.svg" title="LedSimple source reference — pin r6 02" alt="LedSimple source reference — pin r6 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r7-01" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r7-01.svg" title="LedSimple source reference — pin r7 01" alt="LedSimple source reference — pin r7 01" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-pin-r7-02" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/pin-r7-02.svg" title="LedSimple source reference — pin r7 02" alt="LedSimple source reference — pin r7 02" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r1-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r1-1.svg" title="LedSimple source reference — r1 1" alt="LedSimple source reference — r1 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r2-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r2-1.svg" title="LedSimple source reference — r2 1" alt="LedSimple source reference — r2 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r3-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r3-1.svg" title="LedSimple source reference — r3 1" alt="LedSimple source reference — r3 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r4-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r4-1.svg" title="LedSimple source reference — r4 1" alt="LedSimple source reference — r4 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r5-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r5-1.svg" title="LedSimple source reference — r5 1" alt="LedSimple source reference — r5 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r6-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r6-1.svg" title="LedSimple source reference — r6 1" alt="LedSimple source reference — r6 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-source-derived-r7-1" src="/images/extensions/historical-ledsimple/guides/source-derived-annotated/r7-1.svg" title="LedSimple source reference — r7 1" alt="LedSimple source reference — r7 1" caption="Selected historical PCB; new source-derived reference. Front-coordinate projection; physical mating and powered behavior unverified. P1.1/.2 unused." width=420 %}

<details markdown="1">
<summary>Retained earlier functional references</summary>

### Annotated connector and component reference
{: #focused-contact-function-sheets style="scroll-margin-top: 6rem;"}

These focused sheets combine source-derived board artwork, numbered native-coordinate keys and function callouts. Use all sheets together. Coordinate keys locate source pads; they are not verified connector mating views. The original canonical abstract and actual page/viewer inspection remain pending.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-m2-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/m2-functions-01.svg" title="M2 — contact functions" alt="M2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-m1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/m1-functions-01.svg" title="M1 — contact functions" alt="M1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d1-functions-01.svg" title="D1 — contact functions" alt="D1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d2-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d2-functions-01.svg" title="D2 — contact functions" alt="D2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d3-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d3-functions-01.svg" title="D3 — contact functions" alt="D3 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d4-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d4-functions-01.svg" title="D4 — contact functions" alt="D4 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d5-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d5-functions-01.svg" title="D5 — contact functions" alt="D5 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d6-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d6-functions-01.svg" title="D6 — contact functions" alt="D6 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-d7-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/d7-functions-01.svg" title="D7 — contact functions" alt="D7 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-p1-functions-01" src="/images/extensions/historical-ledsimple/guides/functional-reference/p1-functions-01.svg" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-functional-p1-functions-02" src="/images/extensions/historical-ledsimple/guides/functional-reference/p1-functions-02.svg" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

[Matching native source, licence and drawing notice](/images/extensions/historical-ledsimple/guides/native-contact-reference/native-source-and-notices.zip). Source-derived additions dated 2026-10-18; retain the CERN-OHL-1.2 licence and source notices with derivatives.

<details>
<summary>Original pad locators and source comparison</summary>


</details>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-overview" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-overview.svg" title="Legacy seven-line LEDs" alt="Legacy seven-line LEDs — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-p1-1-5" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-p1-1-5.svg" title="P1 · LED inputs" alt="P1 · LED inputs — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-p1-6-10" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-p1-6-10.svg" title="P1 · LED inputs" alt="P1 · LED inputs — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-boundary" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-boundary.svg" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led1" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led1.svg" title="LED resistor paths" alt="LED resistor paths — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led4" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led4.svg" title="LED resistor paths" alt="LED resistor paths — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-led7" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-led7.svg" title="Seventh LED input" alt="Seventh LED input — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-reader-compact-mounts" src="/images/extensions/historical-ledsimple/guides/native-contact-reference/reader-compact-mounts.svg" title="Mechanical mounting pads" alt="Mechanical mounting pads — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-ledsimple/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. The source uses CERN-OHL-1.2; retain the included licence and notices with derivatives.



</details>

The source-derived annotated sheets above supplement the retained pad locators. A revision-matched canonical abstract is still pending; a modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 2 missing or differing netlist nodes and 0 PCB-only nodes. The PCB leaves host contacts 1 and 2 without named nets although the netlist labels them supply rails. Treat both as unused on this historical layout, not as extra rail outputs.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Source value / role | Contact → retained net |
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

The conditional one-channel connection uses exactly two individual leads: Prime J37.3/PB1 to LEDsimple P1.3, and Prime J37.10/GND to P1.10. Leave every other contact open, including P1.1/.2; do not attach a populated header cable from this example. Qualify the fitted resistor, LED polarity, GPIO drive/current budget and physical mating before any powered test. PB1 then controls D1 through R1 (330 Ω). A simple bench test toggles this one output with the digital switch example below while the other signals remain unassigned. Do not infer that a glowing LED proves a peripheral works.

### Check the two-lead example

Keep power off while identifying and attaching the two leads. Match contact numbers against the selected board view, rather than using cable colours as pin numbers.

| Lead | Prime end | LedSimple end | Purpose |
|---|---|---|---|
| Signal | J37.3 / PB1 | P1.3 | Drives D1 through R1, 330 Ω |
| Return | J37.10 / ground | P1.10 | Completes D1's return path |

Leave P1.1, P1.2 and P1.4–P1.9 unconnected. The documented PCB does not assign supply nets to P1.1/.2; adding a supply wire does not repair that discrepancy. This example uses individual leads, not a populated ten-contact cable.

After resolving the resistor, LED-polarity and GPIO-current checks, use the configuration below with PB1 reserved for this test. `M106.9` requests D1 on; `M107.9` requests D1 off. If the indication does not change, first check the selected configuration and command allocation, then turn power off and compare the signal/return contacts and D1/R1 population with the source. Do not move the lead onto a supply contact to force the LED on.

### Practical Prime wiring — conditional two-lead study

The complete source artworks below show the selected Prime and historical LED board with two continuous native-attached leads. The historical LED artwork is newly source-derived because its canonical abstract has not been recovered. This is an unpowered source study: electrical drive/current and physical mating remain unqualified. Read the mandatory limits and contact keys; the narrow overview requires vector zoom for native pad details.

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-wholeboard-wiring" src="/images/extensions/historical-ledsimple/guides/wholeboard-readable/wholeboard-wiring.svg" title="Complete-board two-lead connection" alt="Complete-board two-lead connection for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-narrow-two-leads" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/narrow-two-leads.svg" title="Two individual leads — compact reader key" alt="Two individual leads — compact reader key for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-narrow-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/narrow-mandatory-limits.svg" title="Mandatory limits — compact reader key" alt="Mandatory limits — compact reader key for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-mandatory-limits" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-contact-key" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/contact-key.svg" title="Selected native contacts" alt="Selected native contacts for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-pcb-relationships" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/pcb-relationships.svg" title="Indicator path inside the PCB" alt="Indicator path inside the PCB for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-ledsimple-wholeboard-firmware-and-sources" src="/images/extensions/historical-ledsimple/guides/wholeboard-two-leads/firmware-and-sources.svg" title="Firmware example and source limits" alt="Firmware example and source limits for historical LEDsimple and Smoothieboard V2 Prime" caption="Conditional source study. Exactly two individual leads; all other contacts open. Electrical load, physical mating and powered operation remain unqualified." width=1200 %}

## Smoothieware use

The generic digital switch module is sufficient; this board has no dedicated protocol. For the proposed individual signal lead use PB1 without !, so a high output lights D1. The example below assumes PB1 is free.

For the specific J37.3/PB1 two-lead bench-test study, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

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

With the board’s resistor values, LED polarity and GPIO current budget qualified, M106.9 requests PB1 HIGH and lights D1; M107.9 requests LOW and extinguishes it. This is an indicator test only. Do not attach an external lamp, heater or other power load to an indicator channel.

Configuration field names in this example were checked against the [pinned V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). The fields are source-recognized; the selected board's complete electrical, pin-allocation and operating contract still needs qualification. Source inspection is not a target build, flash, boot or hardware result. Where a required driver is absent, email **wolf.arthur@gamil.com**; unresolved wiring or untested support is not automatically evidence of absence.


The [reviewed V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) matches the retained source byte for byte. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output. This identifies source behavior, not the installed firmware or tested hardware.

## Remaining source questions

Actual resistor values/current and physical LED polarity/population, cable orientation and PCB/netlist parity. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
