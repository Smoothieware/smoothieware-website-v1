---
layout: default
title: "Small MOSFET \u2014 KiCad layout"
permalink: /extensions/historical-small-mosfet-kicad
---

# Small MOSFET — KiCad layout

This is the KiCad small low-side DC power switch. A host logic pin controls a MOSFET, while the load positive remains attached to its external supply. Its practical use is controlling a suitable fan, lamp or heater load.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

The pinned upstream [Readme.use](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad/Readme.use) states 12–24 V, maximum 7 A, 3.3–5 V logic-high ON, common ground and no isolation. These are historical source claims, not measured or qualified ratings. JP2.1/.2 are supply positive/ground; JP3.2/.1 are load positive/switched return. JP1.1 is ground and JP1.3 is logic; JP1.2 has no assigned net in the selected PCB and must remain unused. The retained schematic VCC label does not establish a PCB rail. The output LED is described as ON with the output. Factory notes specify two-layer 35 µm copper, 1.6 mm FR4 and ENIG.

### Annotated connector and component reference
{: #annotated-connector-and-component-reference style="scroll-margin-top: 6rem;"}

These newly source-derived drawings retain the selected native outline, footprints, pads and graphics with function callouts. They are not a recovered canonical abstract or a verified mating view. JP1.2 is unassigned. The visible 24 V / 7 A text is retained source silk, not a qualified supply or load rating. Host allocation, power/load suitability, firmware and physical operation remain unqualified.

### Board reference

These function-labelled views retain the selected native source geometry. They are newly source-derived references, not a verified mating view.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-00-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-d11-1.png" title="D11 1" alt="D11 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp1-1.png" title="Jp1 1" alt="Jp1 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp2-1.png" title="Jp2 1" alt="Jp2 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-jp3-1.png" title="Jp3 1" alt="Jp3 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-led7-1.png" title="Led7 1" alt="Led7 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m1-1.png" title="M1 1" alt="M1 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m2-1.png" title="M2 1" alt="M2 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m3-1.png" title="M3 1" alt="M3 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-m4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-m4-1.png" title="M4 1" alt="M4 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-q1-1.png" title="Q1 1" alt="Q1 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r35-1.png" title="R35 1" alt="R35 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r36-1.png" title="R36 1" alt="R36 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-compact-function-reader-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-reader/reader-r37-1.png" title="R37 1" alt="R37 1 for the selected historical small-mosfet-kicad source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-00-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/00-overview.png" title="small mosfet kicad source reference — 00 overview" alt="small mosfet kicad source reference — 00 overview" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/d11-1.png" title="small mosfet kicad source reference — d11 1" alt="small mosfet kicad source reference — d11 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp1-1.png" title="small mosfet kicad source reference — jp1 1" alt="small mosfet kicad source reference — jp1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp2-1.png" title="small mosfet kicad source reference — jp2 1" alt="small mosfet kicad source reference — jp2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/jp3-1.png" title="small mosfet kicad source reference — jp3 1" alt="small mosfet kicad source reference — jp3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/led7-1.png" title="small mosfet kicad source reference — led7 1" alt="small mosfet kicad source reference — led7 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m1-1.png" title="small mosfet kicad source reference — m1 1" alt="small mosfet kicad source reference — m1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m2-1.png" title="small mosfet kicad source reference — m2 1" alt="small mosfet kicad source reference — m2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m3-1.png" title="small mosfet kicad source reference — m3 1" alt="small mosfet kicad source reference — m3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-m4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/m4-1.png" title="small mosfet kicad source reference — m4 1" alt="small mosfet kicad source reference — m4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/q1-1.png" title="small mosfet kicad source reference — q1 1" alt="small mosfet kicad source reference — q1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r35-1.png" title="small mosfet kicad source reference — r35 1" alt="small mosfet kicad source reference — r35 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r36-1.png" title="small mosfet kicad source reference — r36 1" alt="small mosfet kicad source reference — r36 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/r37-1.png" title="small mosfet kicad source reference — r37 1" alt="small mosfet kicad source reference — r37 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-source-net-keys-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/source-net-keys-1.png" title="small mosfet kicad source reference — source net keys 1" alt="small mosfet kicad source reference — source net keys 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-source-net-keys-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/source-net-keys-2.png" title="small mosfet kicad source reference — source net keys 2" alt="small mosfet kicad source reference — source net keys 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp1-1.png" title="small mosfet kicad source reference — vp1 1" alt="small mosfet kicad source reference — vp1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp2-1.png" title="small mosfet kicad source reference — vp2 1" alt="small mosfet kicad source reference — vp2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp3-1.png" title="small mosfet kicad source reference — vp3 1" alt="small mosfet kicad source reference — vp3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp4-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp4-1.png" title="small mosfet kicad source reference — vp4 1" alt="small mosfet kicad source reference — vp4 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp5-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp5-1.png" title="small mosfet kicad source reference — vp5 1" alt="small mosfet kicad source reference — vp5 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp6-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp6-1.png" title="small mosfet kicad source reference — vp6 1" alt="small mosfet kicad source reference — vp6 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp7-1.png" title="small mosfet kicad source reference — vp7 1" alt="small mosfet kicad source reference — vp7 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp8-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp8-1.png" title="small mosfet kicad source reference — vp8 1" alt="small mosfet kicad source reference — vp8 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-vp9-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/vp9-1.png" title="small mosfet kicad source reference — vp9 1" alt="small mosfet kicad source reference — vp9 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-d11-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-d11-0.png" title="small mosfet kicad source reference — contact d11 0" alt="small mosfet kicad source reference — contact d11 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-d11-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-d11-1.png" title="small mosfet kicad source reference — contact d11 1" alt="small mosfet kicad source reference — contact d11 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-0.png" title="small mosfet kicad source reference — contact jp1 0" alt="small mosfet kicad source reference — contact jp1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-1.png" title="small mosfet kicad source reference — contact jp1 1" alt="small mosfet kicad source reference — contact jp1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp1-2.png" title="small mosfet kicad source reference — contact jp1 2" alt="small mosfet kicad source reference — contact jp1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp2-0.png" title="small mosfet kicad source reference — contact jp2 0" alt="small mosfet kicad source reference — contact jp2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp2-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp2-1.png" title="small mosfet kicad source reference — contact jp2 1" alt="small mosfet kicad source reference — contact jp2 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp3-0.png" title="small mosfet kicad source reference — contact jp3 0" alt="small mosfet kicad source reference — contact jp3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-jp3-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-jp3-1.png" title="small mosfet kicad source reference — contact jp3 1" alt="small mosfet kicad source reference — contact jp3 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-led7-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-led7-0.png" title="small mosfet kicad source reference — contact led7 0" alt="small mosfet kicad source reference — contact led7 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-led7-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-led7-1.png" title="small mosfet kicad source reference — contact led7 1" alt="small mosfet kicad source reference — contact led7 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m1-0.png" title="small mosfet kicad source reference — contact m1 0" alt="small mosfet kicad source reference — contact m1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m2-0.png" title="small mosfet kicad source reference — contact m2 0" alt="small mosfet kicad source reference — contact m2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m3-0.png" title="small mosfet kicad source reference — contact m3 0" alt="small mosfet kicad source reference — contact m3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-m4-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-m4-0.png" title="small mosfet kicad source reference — contact m4 0" alt="small mosfet kicad source reference — contact m4 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-0.png" title="small mosfet kicad source reference — contact q1 0" alt="small mosfet kicad source reference — contact q1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-1.png" title="small mosfet kicad source reference — contact q1 1" alt="small mosfet kicad source reference — contact q1 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-q1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-q1-2.png" title="small mosfet kicad source reference — contact q1 2" alt="small mosfet kicad source reference — contact q1 2" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r35-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r35-0.png" title="small mosfet kicad source reference — contact r35 0" alt="small mosfet kicad source reference — contact r35 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r35-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r35-1.png" title="small mosfet kicad source reference — contact r35 1" alt="small mosfet kicad source reference — contact r35 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r36-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r36-0.png" title="small mosfet kicad source reference — contact r36 0" alt="small mosfet kicad source reference — contact r36 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r36-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r36-1.png" title="small mosfet kicad source reference — contact r36 1" alt="small mosfet kicad source reference — contact r36 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r37-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r37-0.png" title="small mosfet kicad source reference — contact r37 0" alt="small mosfet kicad source reference — contact r37 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-r37-1" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-r37-1.png" title="small mosfet kicad source reference — contact r37 1" alt="small mosfet kicad source reference — contact r37 1" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp1-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp1-0.png" title="small mosfet kicad source reference — contact vp1 0" alt="small mosfet kicad source reference — contact vp1 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp2-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp2-0.png" title="small mosfet kicad source reference — contact vp2 0" alt="small mosfet kicad source reference — contact vp2 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp3-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp3-0.png" title="small mosfet kicad source reference — contact vp3 0" alt="small mosfet kicad source reference — contact vp3 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp4-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp4-0.png" title="small mosfet kicad source reference — contact vp4 0" alt="small mosfet kicad source reference — contact vp4 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp5-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp5-0.png" title="small mosfet kicad source reference — contact vp5 0" alt="small mosfet kicad source reference — contact vp5 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp6-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp6-0.png" title="small mosfet kicad source reference — contact vp6 0" alt="small mosfet kicad source reference — contact vp6 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp7-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp7-0.png" title="small mosfet kicad source reference — contact vp7 0" alt="small mosfet kicad source reference — contact vp7 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp8-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp8-0.png" title="small mosfet kicad source reference — contact vp8 0" alt="small mosfet kicad source reference — contact vp8 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-source-derived-contact-vp9-0" src="/images/extensions/historical-small-mosfet-kicad/guides/source-derived-annotated/contact-vp9-0.png" title="small mosfet kicad source reference — contact vp9 0" alt="small mosfet kicad source reference — contact vp9 0" caption="Selected historical PCB; new source-derived front-coordinate reference. Source labels are not qualified ratings; host allocation, mating and powered behavior remain unverified." width=420 %}


</details>

<details markdown="1">
<summary>Retained earlier functional references</summary>

### Annotated connector and component reference
{: #functional-contact-function-sheets style="scroll-margin-top: 6rem;"}

These sheets combine source-derived board artwork, native-coordinate contact keys and function pills. Read the external interfaces and controls first; circuit components and mounting details are available below. The canonical abstract, physical mating and actual viewer checks remain pending.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-d11-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/d11-functions-01.png" title="D11 — contact functions" alt="D11 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp1-functions-01.png" title="JP1 — contact functions" alt="JP1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-led7-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/led7-functions-01.png" title="LED7 — contact functions" alt="LED7 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-q1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/q1-functions-01.png" title="Q1 — contact functions" alt="Q1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp2-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp2-functions-01.png" title="JP2 — contact functions" alt="JP2 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-jp3-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/jp3-functions-01.png" title="JP3 — contact functions" alt="JP3 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m1-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m2-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m3-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m3-functions-01.png" title="M3 — contact functions" alt="M3 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-m4-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/m4-functions-01.png" title="M4 — contact functions" alt="M4 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r35-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r35-functions-01.png" title="R35 — contact functions" alt="R35 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r36-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r36-functions-01.png" title="R36 — contact functions" alt="R36 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-functional-r37-functions-01" src="/images/extensions/historical-small-mosfet-kicad/guides/functional-reference/r37-functions-01.png" title="R37 — contact functions" alt="R37 source-position contacts and function pills" caption="Selected historical source. Numbered native-coordinate key; not a physical mating view. Source-derived body limits remain open." width=420 %}

</details>

[Matching native source, licence and drawing notice](/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Source-derived additions dated 2026-10-18; retain the included source licence and notices with derivatives.

<details>
<summary>Original pad locators and source comparison</summary>


</details>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-overview" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-overview.png" title="Legacy small MOSFET" alt="Legacy small MOSFET — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp1-1-3" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp1-1-3.png" title="JP1 · Logic input" alt="JP1 · Logic input — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp2-1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · DC input" alt="JP2 · DC input — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-jp3-1-2" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Load output" alt="JP3 · Load output — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-boundary" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-switch" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-switch.png" title="Low-side switch topology" alt="Low-side switch topology — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-indicator" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-indicator.png" title="Load indication / diode" alt="Load indication / diode — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-kicad-reader-compact-mounts" src="/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-small-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip). Source revision: [`52ab340de33180a975b25f856c161993488e6ace`](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET_kicad). The downloaded PCB SHA-256 `59eda7d61534d8c5d9ffb45c6d656c1d337b4279d37b35d610155cd48bdc4a0c` matches that exact upstream PCB byte for byte; the retained netlist SHA-256 `e61c5f685e1fb82c82940f2703a6ac53086dd0f3fc14632ca1a9c9d87b5c2250` matches the upstream netlist at the same commit. This establishes source-file identity only, not electrical or physical qualification. Retain the included source licence and notices with derivatives.



</details>

The source-derived annotated sheets above supplement the retained pad locators. The revision-matched canonical abstract remains pending; a modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 1 missing or differing netlist nodes and 0 PCB-only nodes. The differing node is JP1.2: the netlist names an isolated VCC net while the PCB pad has no named connection. Keep this contact unused; it is not a required board power input.

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| D11 | 1N4148 | 1 → /HEATERVIN; 2 → /E1-CONTROL |
| JP1 | ~ | 1 → GND; 2 → /VCC; 3 → /FET-LOGIC-IN |
| JP2 | ~ | 1 → /HEATERVIN; 2 → GND |
| JP3 | ~ | 1 → /E1-CONTROL; 2 → /HEATERVIN |


</details>

## Connect and try it

Use a small test lamp first. With power removed, wire the external supply to JP2 and the lamp to JP3, observing contact 2 positive. A custom Prime cable can connect GF.10 ground to JP1.1 and GF.3 PB1 to JP1.3; leave the apparently unused VCC contact disconnected after PCB reconciliation. The host’s 5 V rail is not the load supply.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

The digital switch module provides the required logic signal; no dedicated MOSFET-board driver is needed. The example below assumes PB1 is unused and the custom cable is installed.

For the specific GF.3/PB1 bench-test cable, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

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

With the machine stationary and a small test load, `M106.9` requests on and `M107.9` requests off. Confirm the off state before attaching the intended load. This verifies the requested output behavior only after actual firmware and electrical testing.

Configuration field names in this example were checked against the [pinned V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). The fields are source-recognized; the selected board's complete electrical, pin-allocation and operating contract still needs qualification. Source inspection is not a target build, flash, boot or hardware result. Where a required driver is absent, email **wolf.arthur@gamil.com**; unresolved wiring or untested support is not automatically evidence of absence.


The [reviewed V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) matches the retained source byte for byte. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output. This identifies source behavior, not the installed firmware or tested hardware.

## Remaining source questions

Installed MOSFET identification and gate-drive margin; current/thermal qualification and clamp suitability; Eagle/KiCad equivalence. The exact historical PCB and netlist source bytes are now reconciled, but the JP1.2 netlist/PCB disagreement remains intentionally unresolved and that contact must stay unused. Both required diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
