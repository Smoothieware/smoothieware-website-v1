---
layout: default
title: "Large MOSFET \u2014 KiCad layout"
permalink: /extensions/historical-large-mosfet-kicad
---

# Large MOSFET — KiCad layout

This single low-side power switch lets a logic output control a larger DC load. The load positive is permanently tied to supply positive; only its return is switched. Use it for a suitable heater or other DC load.

## Original design and compatibility

This board comes from the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Large%20MOSFET_kicad). The original host generation predates Smoothieboard V2 Prime; check connector compatibility contact by contact.

## Power, signals and controls

The original Readme.use specifies 12–24 V and maximum 12 A, with a 3.3–5 V input turning the output on. These are the original author's figures. JP2.1 is positive supply, .2 ground; JP3.2 positive load and .1 switched return. JP1.1 is ground and .3 is logic; contact .2 has no assigned net in the KiCad PCB. The Eagle layout labels it VCC; do not apply that label to this board. The circuit is explicitly not isolated. The LED indicates output on. Readme.factory specifies two layers, 35 µm copper, 1.6 mm FR4, ENIG.

### Identify the fitted power transistor first

The KiCad bill of materials identifies Q1 as **IRG4BC15UD-SPBF**, despite the generic “MOSFET” value in the layout. This part is an **IGBT**. The [manufacturer datasheet](https://www.infineon.com/assets/row/public/documents/non-assigned/49/infineon-irg4bc15ud-datasheet-en-09018a9080053300.pdf), page 2, specifies a 3–6 V gate threshold at only 250 µA; its on-state voltage limit is tested with 15 V gate drive and 7.8 A collector current. Threshold does not mean fully on at 3.3 V.

Consequently, do not rely on the 3.3–5 V input / 12 A figures to switch a load from a Prime GPIO. Check the transistor actually fitted. An installation needs a suitable gate driver and its own current, thermal, load suppression and power-sequencing design.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These drawings show the board outline, footprints and pads with function callouts. They are not a connector mating view. JP1.2 is unassigned. The 24 V / 12 A and 5 V text is the board's silk print. Check MOSFET gate/drain/source roles, host pins and load suitability before wiring.

### Board reference

These views label each function on the board; they are not a connector mating view.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-00-overview" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-d11-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-d11-1.png" title="D11 1" alt="D11 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-jp1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-jp1-1.png" title="Jp1 1" alt="Jp1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-jp2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-jp2-1.png" title="Jp2 1" alt="Jp2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-jp3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-jp3-1.png" title="Jp3 1" alt="Jp3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-led7-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-led7-1.png" title="Led7 1" alt="Led7 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-m1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-m2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-m3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-m3-1.png" title="M3 1" alt="M3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-m4-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-m4-1.png" title="M4 1" alt="M4 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-q1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-q1-1.png" title="Q1 1" alt="Q1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-r35-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-r35-1.png" title="R35 1" alt="R35 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-r36-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-r36-1.png" title="R36 1" alt="R36 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-compact-function-reader-r37-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-reader/reader-r37-1.png" title="R37 1" alt="R37 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact and part views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-00-overview" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/00-overview.png" title="Large MOSFET reference — 00 overview" alt="Large MOSFET reference — 00 overview" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-d11-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/d11-1.png" title="Large MOSFET reference — d11 1" alt="Large MOSFET reference — d11 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-jp1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/jp1-1.png" title="Large MOSFET reference — jp1 1" alt="Large MOSFET reference — jp1 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-jp2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/jp2-1.png" title="Large MOSFET reference — jp2 1" alt="Large MOSFET reference — jp2 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-jp3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/jp3-1.png" title="Large MOSFET reference — jp3 1" alt="Large MOSFET reference — jp3 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-led7-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/led7-1.png" title="Large MOSFET reference — led7 1" alt="Large MOSFET reference — led7 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-m1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/m1-1.png" title="Large MOSFET reference — m1 1" alt="Large MOSFET reference — m1 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-m2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/m2-1.png" title="Large MOSFET reference — m2 1" alt="Large MOSFET reference — m2 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-m3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/m3-1.png" title="Large MOSFET reference — m3 1" alt="Large MOSFET reference — m3 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-m4-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/m4-1.png" title="Large MOSFET reference — m4 1" alt="Large MOSFET reference — m4 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-q1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/q1-1.png" title="Large MOSFET reference — q1 1" alt="Large MOSFET reference — q1 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-r35-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/r35-1.png" title="Large MOSFET reference — r35 1" alt="Large MOSFET reference — r35 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-r36-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/r36-1.png" title="Large MOSFET reference — r36 1" alt="Large MOSFET reference — r36 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-r37-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/r37-1.png" title="Large MOSFET reference — r37 1" alt="Large MOSFET reference — r37 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-source-net-keys-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/source-net-keys-1.png" title="Large MOSFET reference — net keys 1" alt="Large MOSFET reference — net keys 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-source-net-keys-2" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/source-net-keys-2.png" title="Large MOSFET reference — net keys 2" alt="Large MOSFET reference — net keys 2" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-01.png" title="Large MOSFET reference — via V1" alt="Large MOSFET reference — via V1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v10-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-10.png" title="Large MOSFET reference — via V10" alt="Large MOSFET reference — via V10" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v11-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-11.png" title="Large MOSFET reference — via V11" alt="Large MOSFET reference — via V11" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v12-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-12.png" title="Large MOSFET reference — via V12" alt="Large MOSFET reference — via V12" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v13-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-13.png" title="Large MOSFET reference — via V13" alt="Large MOSFET reference — via V13" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v14-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-14.png" title="Large MOSFET reference — via V14" alt="Large MOSFET reference — via V14" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v15-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-15.png" title="Large MOSFET reference — via V15" alt="Large MOSFET reference — via V15" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v16-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-16.png" title="Large MOSFET reference — via V16" alt="Large MOSFET reference — via V16" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v17-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-17.png" title="Large MOSFET reference — via V17" alt="Large MOSFET reference — via V17" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v18-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-18.png" title="Large MOSFET reference — via V18" alt="Large MOSFET reference — via V18" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v19-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-19.png" title="Large MOSFET reference — via V19" alt="Large MOSFET reference — via V19" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-02.png" title="Large MOSFET reference — via V2" alt="Large MOSFET reference — via V2" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v20-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-20.png" title="Large MOSFET reference — via V20" alt="Large MOSFET reference — via V20" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v21-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-21.png" title="Large MOSFET reference — via V21" alt="Large MOSFET reference — via V21" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v22-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-22.png" title="Large MOSFET reference — via V22" alt="Large MOSFET reference — via V22" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v23-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-23.png" title="Large MOSFET reference — via V23" alt="Large MOSFET reference — via V23" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v24-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-24.png" title="Large MOSFET reference — via V24" alt="Large MOSFET reference — via V24" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v25-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-25.png" title="Large MOSFET reference — via V25" alt="Large MOSFET reference — via V25" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v26-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-26.png" title="Large MOSFET reference — via V26" alt="Large MOSFET reference — via V26" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v27-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-27.png" title="Large MOSFET reference — via V27" alt="Large MOSFET reference — via V27" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-03.png" title="Large MOSFET reference — via V3" alt="Large MOSFET reference — via V3" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v4-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-04.png" title="Large MOSFET reference — via V4" alt="Large MOSFET reference — via V4" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v5-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-05.png" title="Large MOSFET reference — via V5" alt="Large MOSFET reference — via V5" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v6-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-06.png" title="Large MOSFET reference — via V6" alt="Large MOSFET reference — via V6" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v7-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-07.png" title="Large MOSFET reference — via V7" alt="Large MOSFET reference — via V7" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v8-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-08.png" title="Large MOSFET reference — via V8" alt="Large MOSFET reference — via V8" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-v9-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/board-view-09.png" title="Large MOSFET reference — via V9" alt="Large MOSFET reference — via V9" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

<details markdown="1">
<summary>Individual contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-d11-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-d11-0.png" title="Large MOSFET reference — contact d11 0" alt="Large MOSFET reference — contact d11 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-d11-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-d11-1.png" title="Large MOSFET reference — contact d11 1" alt="Large MOSFET reference — contact d11 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp1-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp1-0.png" title="Large MOSFET reference — contact jp1 0" alt="Large MOSFET reference — contact jp1 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp1-1.png" title="Large MOSFET reference — contact jp1 1" alt="Large MOSFET reference — contact jp1 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp1-2" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp1-2.png" title="Large MOSFET reference — contact jp1 2" alt="Large MOSFET reference — contact jp1 2" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp2-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp2-0.png" title="Large MOSFET reference — contact jp2 0" alt="Large MOSFET reference — contact jp2 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp2-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp2-1.png" title="Large MOSFET reference — contact jp2 1" alt="Large MOSFET reference — contact jp2 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp3-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp3-0.png" title="Large MOSFET reference — contact jp3 0" alt="Large MOSFET reference — contact jp3 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-jp3-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-jp3-1.png" title="Large MOSFET reference — contact jp3 1" alt="Large MOSFET reference — contact jp3 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-led7-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-led7-0.png" title="Large MOSFET reference — contact led7 0" alt="Large MOSFET reference — contact led7 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-led7-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-led7-1.png" title="Large MOSFET reference — contact led7 1" alt="Large MOSFET reference — contact led7 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-m1-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-m1-0.png" title="Large MOSFET reference — contact m1 0" alt="Large MOSFET reference — contact m1 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-m2-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-m2-0.png" title="Large MOSFET reference — contact m2 0" alt="Large MOSFET reference — contact m2 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-m3-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-m3-0.png" title="Large MOSFET reference — contact m3 0" alt="Large MOSFET reference — contact m3 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-m4-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-m4-0.png" title="Large MOSFET reference — contact m4 0" alt="Large MOSFET reference — contact m4 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-q1-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-q1-0.png" title="Large MOSFET reference — contact q1 0" alt="Large MOSFET reference — contact q1 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-q1-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-q1-1.png" title="Large MOSFET reference — contact q1 1" alt="Large MOSFET reference — contact q1 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-q1-2" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-q1-2.png" title="Large MOSFET reference — contact q1 2" alt="Large MOSFET reference — contact q1 2" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r35-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r35-0.png" title="Large MOSFET reference — contact r35 0" alt="Large MOSFET reference — contact r35 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r35-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r35-1.png" title="Large MOSFET reference — contact r35 1" alt="Large MOSFET reference — contact r35 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r36-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r36-0.png" title="Large MOSFET reference — contact r36 0" alt="Large MOSFET reference — contact r36 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r36-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r36-1.png" title="Large MOSFET reference — contact r36 1" alt="Large MOSFET reference — contact r36 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r37-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r37-0.png" title="Large MOSFET reference — contact r37 0" alt="Large MOSFET reference — contact r37 0" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-r37-1" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-r37-1.png" title="Large MOSFET reference — contact r37 1" alt="Large MOSFET reference — contact r37 1" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v1-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-01.png" title="Large MOSFET reference — via V1 contact sheet" alt="Large MOSFET reference — via V1 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v10-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-10.png" title="Large MOSFET reference — via V10 contact sheet" alt="Large MOSFET reference — via V10 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v11-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-11.png" title="Large MOSFET reference — via V11 contact sheet" alt="Large MOSFET reference — via V11 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v12-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-12.png" title="Large MOSFET reference — via V12 contact sheet" alt="Large MOSFET reference — via V12 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v13-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-13.png" title="Large MOSFET reference — via V13 contact sheet" alt="Large MOSFET reference — via V13 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v14-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-14.png" title="Large MOSFET reference — via V14 contact sheet" alt="Large MOSFET reference — via V14 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v15-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-15.png" title="Large MOSFET reference — via V15 contact sheet" alt="Large MOSFET reference — via V15 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v16-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-16.png" title="Large MOSFET reference — via V16 contact sheet" alt="Large MOSFET reference — via V16 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v17-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-17.png" title="Large MOSFET reference — via V17 contact sheet" alt="Large MOSFET reference — via V17 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v18-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-18.png" title="Large MOSFET reference — via V18 contact sheet" alt="Large MOSFET reference — via V18 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v19-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-19.png" title="Large MOSFET reference — via V19 contact sheet" alt="Large MOSFET reference — via V19 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v2-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-02.png" title="Large MOSFET reference — via V2 contact sheet" alt="Large MOSFET reference — via V2 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v20-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-20.png" title="Large MOSFET reference — via V20 contact sheet" alt="Large MOSFET reference — via V20 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v21-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-21.png" title="Large MOSFET reference — via V21 contact sheet" alt="Large MOSFET reference — via V21 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v22-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-22.png" title="Large MOSFET reference — via V22 contact sheet" alt="Large MOSFET reference — via V22 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v23-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-23.png" title="Large MOSFET reference — via V23 contact sheet" alt="Large MOSFET reference — via V23 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v24-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-24.png" title="Large MOSFET reference — via V24 contact sheet" alt="Large MOSFET reference — via V24 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v25-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-25.png" title="Large MOSFET reference — via V25 contact sheet" alt="Large MOSFET reference — via V25 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v26-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-26.png" title="Large MOSFET reference — via V26 contact sheet" alt="Large MOSFET reference — via V26 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v27-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-27.png" title="Large MOSFET reference — via V27 contact sheet" alt="Large MOSFET reference — via V27 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v3-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-03.png" title="Large MOSFET reference — via V3 contact sheet" alt="Large MOSFET reference — via V3 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v4-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-04.png" title="Large MOSFET reference — via V4 contact sheet" alt="Large MOSFET reference — via V4 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v5-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-05.png" title="Large MOSFET reference — via V5 contact sheet" alt="Large MOSFET reference — via V5 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v6-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-06.png" title="Large MOSFET reference — via V6 contact sheet" alt="Large MOSFET reference — via V6 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v7-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-07.png" title="Large MOSFET reference — via V7 contact sheet" alt="Large MOSFET reference — via V7 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v8-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-08.png" title="Large MOSFET reference — via V8 contact sheet" alt="Large MOSFET reference — via V8 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-source-derived-contact-v9-0" src="/images/extensions/historical-large-mosfet-kicad/guides/source-derived-annotated/contact-sheet-09.png" title="Large MOSFET reference — via V9 contact sheet" alt="Large MOSFET reference — via V9 contact sheet" caption="Front view of the board. Silk labels are not ratings; check host pins, mating and orientation before powering." width=420 %}

</details>

<details markdown="1">
<summary>Functional contact sheets</summary>

### Contact function sheets
{: #functional-contact-function-sheets style="scroll-margin-top: 6rem;"}

These sheets combine board artwork, contact keys and function labels. Read the external interfaces and controls first; circuit components and mounting details are below.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-d11-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/d11-functions-01.png" title="D11 — contact functions" alt="D11 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-jp1-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/jp1-functions-01.png" title="JP1 — contact functions" alt="JP1 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-led7-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/led7-functions-01.png" title="LED7 — contact functions" alt="LED7 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-jp3-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/jp3-functions-01.png" title="JP3 — contact functions" alt="JP3 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-jp2-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/jp2-functions-01.png" title="JP2 — contact functions" alt="JP2 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-q1-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/q1-functions-01.png" title="Q1 — contact functions" alt="Q1 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-m1-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-m2-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-m3-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/m3-functions-01.png" title="M3 — contact functions" alt="M3 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-m4-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/m4-functions-01.png" title="M4 — contact functions" alt="M4 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-r35-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/r35-functions-01.png" title="R35 — contact functions" alt="R35 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-r36-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/r36-functions-01.png" title="R36 — contact functions" alt="R36 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-functional-r37-functions-01" src="/images/extensions/historical-large-mosfet-kicad/guides/functional-reference/r37-functions-01.png" title="R37 — contact functions" alt="R37 contacts and function labels" caption="Numbered contact key; not a mating view." width=420 %}

</details>

[Source files, licence and drawing notice](/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Keep the included source licence and notices with derivatives.

<details>
<summary>Pad locators and CAD download</summary>

</details>

### Pad locators

These locators show the pad positions and board outline, without component artwork.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-overview" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-overview.png" title="Large MOSFET" alt="Large MOSFET — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-jp1-1-3" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-jp1-1-3.png" title="JP1 · Logic input" alt="JP1 · Logic input — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-jp2-1-2" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · DC input" alt="JP2 · DC input — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-jp3-1-2" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Load output" alt="JP3 · Load output — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-switch" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-switch.png" title="Low-side switch topology" alt="Low-side switch topology — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-indicator" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-indicator.png" title="Load indication / diode" alt="Load indication / diode — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-kicad-reader-compact-mounts" src="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — contact locator" caption="Pad positions and board outline. Use all companion sheets and check host wiring and connector geometry." width=420 %}

[Download the CAD source, upstream licence and drawing notice](/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Keep the included source licence and notices with derivatives.

</details>

The contact table below records connectivity; check physical cable orientation and continuity yourself. JP1.2 has no connection on the PCB although the netlist names an isolated VCC net for it. Keep this contact unused; it is not a power input.

| Reference | Value / role | Contact → net |
|---|---|---|
| JP2 | PWR_IN | 1 → /HEATERVIN; 2 → GND |
| JP3 | OUT | 1 → /E1-CONTROL; 2 → /HEATERVIN |
| JP1 | Input | 1 → GND; 2 → /VCC; 3 → /FET-LOGIC-IN |
| D11 | 1N4148 | 1 → /HEATERVIN; 2 → /E1-CONTROL |

</details>

## Connect and try it

Keep the board, external supply and load disconnected while checking the host request. The contacts are JP2.1 positive supply/JP2.2 ground, JP3.2 load positive/JP3.1 switched return, and JP1.1 ground/JP1.3 command; JP1.2 is unassigned on the PCB and stays unused. Do not connect PB1 directly to JP1.3 to control a load. The IGBT in the bill of materials needs a suitable gate driver and its own supply, current, thermal and power-sequencing design before any test with the board connected.

On the Prime GF/J37 header the contacts are: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. These are connector contacts, not MCU package pins. Check the available current of each supply.

## Smoothieware use

Smoothieware can generate a generic digital request, but that does not make its GPIO a suitable IGBT gate driver. The following configuration creates a host-only request with the board and load disconnected; it is not an installation procedure for this board.

For an isolated host-only PB1 check, merge this into an otherwise non-conflicting configuration; keep this board disconnected, do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

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

The example below checks only the requested PB1 digital states, with this board and every load disconnected. M106.9 requests physical HIGH and M107.9 requests LOW. These commands do not test a powered IGBT or load, and do not show the off state of an attached load. Reserve PB1 and the command subcode in the complete configuration.

Field names follow the [V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp).

In the [V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438), subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 repository also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. Separately sourced component images or artwork may carry their own rights.

[All extension boards](/extension-boards)
