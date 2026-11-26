---
layout: default
title: "Small MOSFET \u2014 KiCad layout"
permalink: /extensions/historical-small-mosfet-kicad
---

# Small MOSFET — KiCad layout

This is the KiCad small low-side DC power switch. A host logic pin controls a MOSFET, while the load positive remains attached to its external supply. Its practical use is controlling a suitable fan, lamp or heater load.

## Design source and compatibility

This guide describes the [original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad). The original host generation predates Smoothieboard V2 Prime, so check connector compatibility contact by contact.

## Power, signals and controls

The upstream [Readme.use](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad/Readme.use) states 12–24 V, maximum 7 A, 3.3–5 V logic-high ON, common ground and no isolation. These are the original author’s figures. JP2.1/.2 are supply positive/ground; JP3.2/.1 are load positive/switched return. JP1.1 is ground and JP1.3 is logic; JP1.2 has no assigned net in the PCB and must remain unused. The schematic VCC label does not correspond to a PCB rail. The output LED is described as ON with the output. Factory notes specify two-layer 35 µm copper, 1.6 mm FR4 and ENIG.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These drawings show the board outline, footprints, pads and graphics with function callouts; they are not mating views. JP1.2 is unassigned. The visible 24 V / 7 A text is the board silkscreen; check that your supply and load suit the board.

### Board reference

These function-labelled views show the board geometry. They are not mating views.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-00-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-d11-1.png" title="D11 1" alt="D11 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp1-1.png" title="Jp1 1" alt="Jp1 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp2-1.png" title="Jp2 1" alt="Jp2 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp3-1.png" title="Jp3 1" alt="Jp3 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-led7-1.png" title="Led7 1" alt="Led7 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m3-1.png" title="M3 1" alt="M3 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m4-1.png" title="M4 1" alt="M4 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-q1-1.png" title="Q1 1" alt="Q1 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r35-1.png" title="R35 1" alt="R35 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r36-1.png" title="R36 1" alt="R36 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r37-1.png" title="R37 1" alt="R37 1 for the small MOSFET board" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact reference views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-00-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/00-overview.png" title="Small MOSFET reference — 00 overview" alt="Small MOSFET reference — 00 overview" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/d11-1.png" title="Small MOSFET reference — d11 1" alt="Small MOSFET reference — d11 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp1-1.png" title="Small MOSFET reference — jp1 1" alt="Small MOSFET reference — jp1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp2-1.png" title="Small MOSFET reference — jp2 1" alt="Small MOSFET reference — jp2 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp3-1.png" title="Small MOSFET reference — jp3 1" alt="Small MOSFET reference — jp3 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/led7-1.png" title="Small MOSFET reference — led7 1" alt="Small MOSFET reference — led7 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m1-1.png" title="Small MOSFET reference — m1 1" alt="Small MOSFET reference — m1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m2-1.png" title="Small MOSFET reference — m2 1" alt="Small MOSFET reference — m2 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m3-1.png" title="Small MOSFET reference — m3 1" alt="Small MOSFET reference — m3 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m4-1.png" title="Small MOSFET reference — m4 1" alt="Small MOSFET reference — m4 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/q1-1.png" title="Small MOSFET reference — q1 1" alt="Small MOSFET reference — q1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r35-1.png" title="Small MOSFET reference — r35 1" alt="Small MOSFET reference — r35 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r36-1.png" title="Small MOSFET reference — r36 1" alt="Small MOSFET reference — r36 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r37-1.png" title="Small MOSFET reference — r37 1" alt="Small MOSFET reference — r37 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-source-net-keys-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/source-net-keys-1.png" title="Small MOSFET reference — source net keys 1" alt="Small MOSFET reference — source net keys 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-source-net-keys-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/source-net-keys-2.png" title="Small MOSFET reference — source net keys 2" alt="Small MOSFET reference — source net keys 2" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp1-1.png" title="Small MOSFET reference — vp1 1" alt="Small MOSFET reference — vp1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp2-1.png" title="Small MOSFET reference — vp2 1" alt="Small MOSFET reference — vp2 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp3-1.png" title="Small MOSFET reference — vp3 1" alt="Small MOSFET reference — vp3 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp4-1.png" title="Small MOSFET reference — vp4 1" alt="Small MOSFET reference — vp4 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp5-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp5-1.png" title="Small MOSFET reference — vp5 1" alt="Small MOSFET reference — vp5 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp6-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp6-1.png" title="Small MOSFET reference — vp6 1" alt="Small MOSFET reference — vp6 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp7-1.png" title="Small MOSFET reference — vp7 1" alt="Small MOSFET reference — vp7 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp8-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp8-1.png" title="Small MOSFET reference — vp8 1" alt="Small MOSFET reference — vp8 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp9-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp9-1.png" title="Small MOSFET reference — vp9 1" alt="Small MOSFET reference — vp9 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-d11-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-d11-0.png" title="Small MOSFET reference — contact d11 0" alt="Small MOSFET reference — contact d11 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-d11-1.png" title="Small MOSFET reference — contact d11 1" alt="Small MOSFET reference — contact d11 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-0.png" title="Small MOSFET reference — contact jp1 0" alt="Small MOSFET reference — contact jp1 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-1.png" title="Small MOSFET reference — contact jp1 1" alt="Small MOSFET reference — contact jp1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-2.png" title="Small MOSFET reference — contact jp1 2" alt="Small MOSFET reference — contact jp1 2" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp2-0.png" title="Small MOSFET reference — contact jp2 0" alt="Small MOSFET reference — contact jp2 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp2-1.png" title="Small MOSFET reference — contact jp2 1" alt="Small MOSFET reference — contact jp2 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp3-0.png" title="Small MOSFET reference — contact jp3 0" alt="Small MOSFET reference — contact jp3 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp3-1.png" title="Small MOSFET reference — contact jp3 1" alt="Small MOSFET reference — contact jp3 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-led7-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-led7-0.png" title="Small MOSFET reference — contact led7 0" alt="Small MOSFET reference — contact led7 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-led7-1.png" title="Small MOSFET reference — contact led7 1" alt="Small MOSFET reference — contact led7 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m1-0.png" title="Small MOSFET reference — contact m1 0" alt="Small MOSFET reference — contact m1 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m2-0.png" title="Small MOSFET reference — contact m2 0" alt="Small MOSFET reference — contact m2 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m3-0.png" title="Small MOSFET reference — contact m3 0" alt="Small MOSFET reference — contact m3 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m4-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m4-0.png" title="Small MOSFET reference — contact m4 0" alt="Small MOSFET reference — contact m4 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-0.png" title="Small MOSFET reference — contact q1 0" alt="Small MOSFET reference — contact q1 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-1.png" title="Small MOSFET reference — contact q1 1" alt="Small MOSFET reference — contact q1 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-2.png" title="Small MOSFET reference — contact q1 2" alt="Small MOSFET reference — contact q1 2" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r35-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r35-0.png" title="Small MOSFET reference — contact r35 0" alt="Small MOSFET reference — contact r35 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r35-1.png" title="Small MOSFET reference — contact r35 1" alt="Small MOSFET reference — contact r35 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r36-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r36-0.png" title="Small MOSFET reference — contact r36 0" alt="Small MOSFET reference — contact r36 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r36-1.png" title="Small MOSFET reference — contact r36 1" alt="Small MOSFET reference — contact r36 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r37-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r37-0.png" title="Small MOSFET reference — contact r37 0" alt="Small MOSFET reference — contact r37 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r37-1.png" title="Small MOSFET reference — contact r37 1" alt="Small MOSFET reference — contact r37 1" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp1-0.png" title="Small MOSFET reference — contact vp1 0" alt="Small MOSFET reference — contact vp1 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp2-0.png" title="Small MOSFET reference — contact vp2 0" alt="Small MOSFET reference — contact vp2 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp3-0.png" title="Small MOSFET reference — contact vp3 0" alt="Small MOSFET reference — contact vp3 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp4-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp4-0.png" title="Small MOSFET reference — contact vp4 0" alt="Small MOSFET reference — contact vp4 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp5-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp5-0.png" title="Small MOSFET reference — contact vp5 0" alt="Small MOSFET reference — contact vp5 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp6-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp6-0.png" title="Small MOSFET reference — contact vp6 0" alt="Small MOSFET reference — contact vp6 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp7-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp7-0.png" title="Small MOSFET reference — contact vp7 0" alt="Small MOSFET reference — contact vp7 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp8-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp8-0.png" title="Small MOSFET reference — contact vp8 0" alt="Small MOSFET reference — contact vp8 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp9-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp9-0.png" title="Small MOSFET reference — contact vp9 0" alt="Small MOSFET reference — contact vp9 0" caption="Front-side component reference. Board labels are not electrical ratings." width=420 %}


</details>

<details markdown="1">
<summary>Functional references</summary>

### Annotated connector and component reference
{: #functional-contact-function-sheets style="scroll-margin-top: 6rem;"}

These sheets combine board artwork, contact keys and function pills. Read the external interfaces and controls first; circuit components and mounting details are available below.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-d11-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/d11-functions-01.png" title="D11 — contact functions" alt="D11 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp1-functions-01.png" title="JP1 — contact functions" alt="JP1 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-led7-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/led7-functions-01.png" title="LED7 — contact functions" alt="LED7 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-q1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/q1-functions-01.png" title="Q1 — contact functions" alt="Q1 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp2-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp2-functions-01.png" title="JP2 — contact functions" alt="JP2 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp3-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp3-functions-01.png" title="JP3 — contact functions" alt="JP3 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m2-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m3-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m3-functions-01.png" title="M3 — contact functions" alt="M3 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m4-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m4-functions-01.png" title="M4 — contact functions" alt="M4 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r35-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r35-functions-01.png" title="R35 — contact functions" alt="R35 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r36-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r36-functions-01.png" title="R36 — contact functions" alt="R36 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r37-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r37-functions-01.png" title="R37 — contact functions" alt="R37 contacts and function pills" caption="Numbered contact key; not a mating view." width=420 %}

</details>

[Native source, licence and drawing notice](/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

<details>
<summary>Pad locators</summary>


</details>

### Contact reference

These locators show the pad positions and board outline, without component artwork.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-overview.png" title="Legacy small MOSFET" alt="Legacy small MOSFET — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp1-1-3" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp1-1-3.png" title="JP1 · Logic input" alt="JP1 · Logic input — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp2-1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · DC input" alt="JP2 · DC input — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp3-1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Load output" alt="JP3 · Load output — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}


{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-switch" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-switch.png" title="Low-side switch topology" alt="Low-side switch topology — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-indicator" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-indicator.png" title="Load indication / diode" alt="Load indication / diode — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-mounts" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

[Download the unmodified native source, upstream licence and drawing notice](/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Source files: [Smoothieboard2](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad). Retain the included source licence and notices with derivatives.


</details>

The annotated sheets above supplement the pad locators. The contact inventory below records circuit connectivity; check physical cable orientation separately. The netlist names an isolated VCC net on JP1.2 while the PCB pad has no connection. Keep this contact unused; it is not a board power input.

| Reference | Value / role | Contact → net |
|---|---|---|
| D11 | 1N4148 | 1 → /HEATERVIN; 2 → /E1-CONTROL |
| JP1 | ~ | 1 → GND; 2 → /VCC; 3 → /FET-LOGIC-IN |
| JP2 | ~ | 1 → /HEATERVIN; 2 → GND |
| JP3 | ~ | 1 → /E1-CONTROL; 2 → /HEATERVIN |


</details>

## Connect and try it

Use a small test lamp first. With power removed, wire the external supply to JP2 and the lamp to JP3, observing contact 2 positive. A custom Prime cable can connect GF.10 ground to JP1.1 and GF.3 PB1 to JP1.3; leave the VCC contact (JP1.2) disconnected. The host’s 5 V rail is not the load supply.

Prime GF/J37 contacts are: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts.

## Smoothieware use

The digital switch module provides the required logic signal; no dedicated MOSFET-board driver is needed. The example below assumes PB1 is unused and the custom cable is installed.

For the GF.3/PB1 cable, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

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

With the machine stationary and a small test load, `M106.9` requests on and `M107.9` requests off. Confirm the off state before attaching the intended load. 

Configuration field names in this example follow the [V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). Check the board’s electrical limits and pin allocation for your installation.


Subcode 9 in the [V2 digital-switch implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not guarantee the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 repository also contains a root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
