---
layout: default
title: "Large MOSFET \u2014 original Eagle layout"
permalink: /extensions/historical-large-mosfet-eagle
---

# Large MOSFET — original Eagle layout

This original Eagle board is a single low-side MOSFET load switch. A logic input controls the gate through 10 Ω; 100 kΩ holds it off. Typical applications are a DC heater or compatible lamp. It remains a separate catalog record from the KiCad translation.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Large%20MOSFET), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

JP1.1 is ground, .3 logic input and .2 VCC is an otherwise isolated net. U$6 is the supply terminal (P$1 HEATERVIN, P$2 ground); U$2 is the load terminal (P$2 supply positive, P$1 switched negative). U$1 is only generically identified as MOSFET, so no particular device rating is established. LED7 indicates the switched load path; D11 is the clamp diode. Do not import the KiCad board’s 12 A claim.

### Keep the transistor identity tied to this revision

The separate KiCad translation’s bill of materials names an IRG4BC15UD-SPBF IGBT. That does not identify the generically labelled transistor in this Eagle source. Establish the actual fitted device and its matching gate-drive specifications before choosing a Prime output or load. Neither a 3.3 V drive guarantee nor a 12 A assembled-board rating follows from the Eagle layout.

### Board functions and native contacts

This Eagle revision specifies a generic MOSFET in a D2PAK package: gate 1, drain/tab 2 and source 3. A different KiCad board’s IGBT bill of materials does not identify this fitted device. JP1.2 is a VCC spare contact. These functional supplements retain native contact positions; populated component bodies and the required canonical abstract remain missing.

### Board reference

Use the overview to locate each connector, then open the function sheets for pin roles. These newly source-derived illustrations retain the selected board geometry; they do not establish Prime compatibility or cable orientation.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-00-overview" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader-compact/reader-00-overview.svg" title="Board overview" alt="Board overview for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader-compact/reader-00-mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-d11" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-d11.svg" title="D11" alt="D11 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-jp1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-jp1.svg" title="Jp1" alt="Jp1 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-led7" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-led7.svg" title="Led7" alt="Led7 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r35" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r35.svg" title="R35" alt="R35 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r36" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r36.svg" title="R36" alt="R36 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-r37" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-r37.svg" title="R37" alt="R37 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us1.svg" title="Us1" alt="Us1 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us2.svg" title="Us2" alt="Us2 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-compact-function-reader-us6" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-reader/reader-us6.svg" title="Us6" alt="Us6 for the selected historical large-mosfet-eagle source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-led7-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/led7-functions-01.svg" title="LED7 functions and contacts" alt="Native-position LED7 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-jp1-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/jp1-functions-01.svg" title="JP1 functions and contacts" alt="Native-position JP1 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-d11-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/d11-functions-01.svg" title="D11 functions and contacts" alt="Native-position D11 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-u-1-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/u-1-functions-01.svg" title="U-1 functions and contacts" alt="Native-position U-1 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-u-6-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/u-6-functions-01.svg" title="U-6 functions and contacts" alt="Native-position U-6 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-u-2-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/u-2-functions-01.svg" title="U-2 functions and contacts" alt="Native-position U-2 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

<details markdown="1">
<summary>Resistor functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-r35-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/r35-functions-01.svg" title="R35 functions and contacts" alt="Native-position R35 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-r36-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/r36-functions-01.svg" title="R36 functions and contacts" alt="Native-position R36 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-eagle-function-r37-functions-01" src="/images/extensions/historical-large-mosfet-eagle/guides/function-reference/r37-functions-01.svg" title="R37 functions and contacts" alt="Native-position R37 contacts with numbered function callouts" caption="Native-contact functional supplement. Populated body and canonical abstract remain missing. Dotted leaders locate parts, not wiring; physical mating remains open." width=600 %}

</details>

<details markdown="1">
<summary>Original pad locators and source comparison</summary>

### Annotated selected-revision board reference

These annotated sheets retain the selected native contact positions, connector and component functions, and exact source net keys. They use a newly source-derived abstract, rather than recovered original canonical artwork. Use the contact keys to distinguish native net names from a proposed host assignment. Cable orientation, fitted parts and operating limits still require qualification. Four terminal contacts specify drill diameter but omit copper diameter: the drawing shows drill circles only, with the copper envelope unresolved. JP1.2 VCC remains isolated and unused; the source “24V 12A MAX” text is not a verified board rating.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-00-overview" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/00-overview.svg" title="Large MOSFET reference" alt="Large MOSFET reference" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-d11-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/d11-1.svg" title="D11: source contacts" alt="D11: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-jp1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/jp1-1.svg" title="JP1: source contacts" alt="JP1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-led7-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/led7-1.svg" title="LED7: source contacts" alt="LED7: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r35-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r35-1.svg" title="R35: source contacts" alt="R35: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r36-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r36-1.svg" title="R36: source contacts" alt="R36: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-r37-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/r37-1.svg" title="R37: source contacts" alt="R37: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-source-net-keys-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/source-net-keys-1.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-source-net-keys-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/source-net-keys-2.svg" title="Source net keys" alt="Source net keys" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u$1-1.svg" title="U$1: source contacts" alt="U$1: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-2-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u$2-1.svg" title="U$2: source contacts" alt="U$2: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-u-6-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/u$6-1.svg" title="U$6: source contacts" alt="U$6: source contacts" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-d11-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-d11-0.svg" title="D11.C: native pad" alt="D11.C: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-d11-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-d11-1.svg" title="D11.A: native pad" alt="D11.A: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-0.svg" title="JP1.1: native pad" alt="JP1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-1.svg" title="JP1.2: native pad" alt="JP1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-jp1-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-jp1-2.svg" title="JP1.3: native pad" alt="JP1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-led7-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-led7-0.svg" title="LED7.C: native pad" alt="LED7.C: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-led7-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-led7-1.svg" title="LED7.A: native pad" alt="LED7.A: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r35-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r35-0.svg" title="R35.1: native pad" alt="R35.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r35-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r35-1.svg" title="R35.2: native pad" alt="R35.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r36-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r36-0.svg" title="R36.1: native pad" alt="R36.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r36-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r36-1.svg" title="R36.2: native pad" alt="R36.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r37-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r37-0.svg" title="R37.1: native pad" alt="R37.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-r37-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-r37-1.svg" title="R37.2: native pad" alt="R37.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$1-0.svg" title="U$1.1: native pad" alt="U$1.1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$1-1.svg" title="U$1.3: native pad" alt="U$1.3: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-1-2" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$1-2.svg" title="U$1.2: native pad" alt="U$1.2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-2-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$2-0.svg" title="U$2.P$1: native pad" alt="U$2.P$1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-2-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$2-1.svg" title="U$2.P$2: native pad" alt="U$2.P$2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-6-0" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$6-0.svg" title="U$6.P$1: native pad" alt="U$6.P$1: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-annotated-contact-u-6-1" src="/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/contact-u$6-1.svg" title="U$6.P$2: native pad" alt="U$6.P$2: native pad" caption="Selected historical source geometry and contact roles. Callout leaders are not wires; source labels do not qualify ratings or mating." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-large-mosfet-eagle/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Earlier functional references, contact inventory and original source download</summary>

### Source-derived board reference

These annotated references explain the selected historical circuit using its retained native pad, silk and footprint geometry. They are not populated smoothie-diagrams abstracts and do not establish mating-face orientation or copper continuity. Connector leaders identify parts; they are not electrical wires. The requested populated abstract remains unavailable.

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-connector-reference-01" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/connector-reference-01.svg" title="Connector functions 01" alt="Connector functions 01 for the retained historical large-mosfet-eagle" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-connector-reference-02" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/connector-reference-02.svg" title="Connector functions 02" alt="Connector functions 02 for the retained historical large-mosfet-eagle" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-circuit-notes" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/circuit-notes.svg" title="Circuit operation and limits" alt="Circuit operation and limits for the retained historical large-mosfet-eagle" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

<details markdown="1">
<summary>Enlarged native contact geometry and numbering</summary>

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-native-detail-01" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/native-detail-01.svg" title="Source contact geometry 01" alt="Source contact geometry 01 for the retained historical large-mosfet-eagle" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

{% include _includes/extension-instruction-diagram.html id="historical-large-mosfet-eagle-native-detail-02" src="/images/extensions/historical-large-mosfet-eagle/guides/retained-52ab340/native-detail-02.svg" title="Source contact geometry 02" alt="Source contact geometry 02 for the retained historical large-mosfet-eagle" caption="Source-derived geometric reference with source-numbered contacts. Annotation leaders are not wires. Missing populated artwork, cable orientation and electrical limits remain unresolved." width=1000 %}

</details>

 The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity.

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| JP1 |  | 1 → GND; 2 → VCC; 3 → FET-LOGIC-IN |
| D11 | 1N4148 | A → E1-CONTROL; C → HEATERVIN |
| U$1 | MOSFET | 1 → N$28; 2 → E1-CONTROL; 3 → GND |
| U$6 | 5MMCONN | P$1 → HEATERVIN; P$2 → GND |
| U$2 | 5MMCONN | P$1 → E1-CONTROL; P$2 → HEATERVIN |


</details>


</details>


</details>

## Connect and try it

With power removed, connect a separately fused DC load supply to U$6, the load between U$2 contacts P$2 and P$1, and host ground/input to JP1.1/.3. For a small test lamp, a custom cable may use Prime GF.10 ground and GF.3 PB1 to JP1.3; leave JP1.2 unused. The final supply voltage/current must be qualified for the installed MOSFET, clamp, copper and terminal.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

This uses the ordinary digital switch output; no board-specific driver is required. The source-verified switch example below applies only to the proposed GF.3 cable and an otherwise unused PB1.

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

Exact populated MOSFET and safe load envelope; inductive-load suitability; terminal geometry/orientation and parity with the separate KiCad record. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

[Download the editable historical diagram and native-source package](/images/extensions/historical-native-source-package-20261018.zip). It includes the exact selected source files, editable SVGs, layout scripts, the upstream CERN Open Hardware Licence v1.2, retained notices and dated modification descriptions. These illustrations use native source geometry rather than separately imported component artwork. The original Eagle file also embeds SparkFun footprint-library notices for JP1 and D11 stating Creative Commons ShareAlike 4.0 International; those original descriptions are retained in the package. Keep the included source and modification notices with redistributed derivatives.


The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)

The editable functional SVG supplements were authored on 2026-10-18 from the retained Eagle source under CERN OHL v1.2. Embedded SparkFun connector/discrete footprint notices are CC BY-SA 4.0 and remain in the linked native-source package; these drawings import no separate component artwork.
