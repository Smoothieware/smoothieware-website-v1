---
layout: default
title: "Small MOSFET \u2014 original Eagle layout"
permalink: /extensions/historical-small-mosfet-eagle
---

# Small MOSFET — original Eagle layout

This Eagle board switches a DC load’s negative return using an IRLR024-labelled MOSFET. The logic input has a 10 Ω gate resistor and 100 kΩ pulldown. It can serve a small DC lamp or another load within limits you have checked.

## Origin and compatibility

This guide describes the [original Smoothieboard2 files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Check connector compatibility contact by contact.

## Power, signals and controls

JP2.1 is HEATERVIN and .2 ground. JP3.2 is load positive and .1 the switched return. JP1.1 is ground, .3 logic input; .2 VCC has no other contact on its net. LED7/resistor monitor the output and D11 connects across the load supply/return. Package U$13 has drain contact 4, not the large Eagle layout’s contact numbering. The 7 A figure given for the KiCad variant does not apply to this board.

### Board functions and contact positions

This Eagle variant has a distinct connector and transistor-pad assignment. The callouts identify gate 1, source 3 and drain tab 4 from its matching schematic/package. JP1.2 carries VCC; it is not the unconnected contact found on the KiCad variant. Contact keys are front-view positions, not cable mating views.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-00-overview" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Connection limits" alt="Connection limits" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-d11-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-d11-1.png" title="D11 1" alt="D11 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-jp1-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-jp1-1.png" title="Jp1 1" alt="Jp1 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-jp2-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-jp2-1.png" title="Jp2 1" alt="Jp2 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-jp3-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-jp3-1.png" title="Jp3 1" alt="Jp3 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-led7-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-led7-1.png" title="Led7 1" alt="Led7 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-r35-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-r35-1.png" title="R35 1" alt="R35 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-r36-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-r36-1.png" title="R36 1" alt="R36 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-r37-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-r37-1.png" title="R37 1" alt="R37 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-compact-function-reader-u$13-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-reader-compact/reader-u%2413-1.png" title="U$13 1" alt="U$13 1" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the connection limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact keys and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-u-13-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/u-13-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-led7-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/led7-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-jp1-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/jp1-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-jp2-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/jp2-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-jp3-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/jp3-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-d11-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/d11-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

<details>
<summary>Resistor circuit details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-r35-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/r35-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-r36-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/r36-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-function-r37-functions-01" src="/images/extensions/historical-small-mosfet-eagle/guides/functional-reference/r37-functions-01.png" title="Small MOSFET (Eagle) — component side; back parts excluded" alt="Small MOSFET (Eagle) — component side; back parts excluded — function callouts and contact positions" caption="Eagle-layout reference. Pad 4 is the drain tab; JP1 contact 2 is VCC. Use this layout rather than the similarly named KiCad board." width=420 %}

</details>

<details>
<summary>Pad locators and comparison</summary>

### Annotated board reference

These annotated sheets show contact positions, connector and component functions, and net keys. Use the contact keys to distinguish net names from a host assignment. Check cable orientation, fitted parts and operating limits. JP1.2 VCC is isolated and unused. The voltage and current marked on the silk are not ratings for your assembly.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-00-overview" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/00-overview.png" title="Small MOSFET reference" alt="Small MOSFET reference" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

<details markdown="1">
<summary>Connector, jumper and component function views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-d11-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/d11-1.png" title="D11: contacts" alt="D11: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-jp1-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/jp1-1.png" title="JP1: contacts" alt="JP1: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-jp2-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/jp2-1.png" title="JP2: contacts" alt="JP2: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-jp3-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/jp3-1.png" title="JP3: contacts" alt="JP3: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-led7-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/led7-1.png" title="LED7: contacts" alt="LED7: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-r35-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/r35-1.png" title="R35: contacts" alt="R35: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-r36-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/r36-1.png" title="R36: contacts" alt="R36: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-r37-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/r37-1.png" title="R37: contacts" alt="R37: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-source-net-keys-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/source-net-keys-1.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-source-net-keys-2" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/source-net-keys-2.png" title="Net keys" alt="Net keys" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-u-13-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/u%2413-1.png" title="U$13: contacts" alt="U$13: contacts" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

</details>

<details markdown="1">
<summary>Individual contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-d11-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-d11-0.png" title="D11.C: pad" alt="D11.C: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-d11-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-d11-1.png" title="D11.A: pad" alt="D11.A: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp1-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp1-0.png" title="JP1.1: pad" alt="JP1.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp1-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp1-1.png" title="JP1.2: pad" alt="JP1.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp1-2" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp1-2.png" title="JP1.3: pad" alt="JP1.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp2-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp2-0.png" title="JP2.1: pad" alt="JP2.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp2-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp2-1.png" title="JP2.2: pad" alt="JP2.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp3-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp3-0.png" title="JP3.1: pad" alt="JP3.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-jp3-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-jp3-1.png" title="JP3.2: pad" alt="JP3.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-led7-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-led7-0.png" title="LED7.C: pad" alt="LED7.C: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-led7-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-led7-1.png" title="LED7.A: pad" alt="LED7.A: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r35-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r35-0.png" title="R35.1: pad" alt="R35.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r35-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r35-1.png" title="R35.2: pad" alt="R35.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r36-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r36-0.png" title="R36.1: pad" alt="R36.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r36-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r36-1.png" title="R36.2: pad" alt="R36.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r37-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r37-0.png" title="R37.1: pad" alt="R37.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-r37-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-r37-1.png" title="R37.2: pad" alt="R37.2: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-u-13-0" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-u%2413-0.png" title="U$13.4: pad" alt="U$13.4: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-u-13-1" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-u%2413-1.png" title="U$13.1: pad" alt="U$13.1: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-annotated-contact-u-13-2" src="/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/contact-u%2413-2.png" title="U$13.3: pad" alt="U$13.3: pad" caption="Board geometry and contact roles. Callout leaders are not wires; labels do not give ratings or mating orientation." width=1200 %}

</details>

[Drawing attribution and licence](/images/extensions/historical-small-mosfet-eagle/guides/source-derived-annotated/NOTICE.md).

<details markdown="1">
<summary>Functional references, contact inventory and source download</summary>

### Contact locator reference

These locators show pad positions and the board outline without component artwork. Use all focused sheets together with the drawing boundary notice.

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-overview" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-overview.png" title="Legacy Eagle MOSFET" alt="Legacy Eagle MOSFET — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-jp1-1-3" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-jp1-1-3.png" title="JP1 · Logic input" alt="JP1 · Logic input — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-jp2-1-2" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · Load DC input" alt="JP2 · Load DC input — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-jp3-1-2" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Load output" alt="JP3 · Load output — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-boundary" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-switch" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-switch.png" title="MOSFET gate and return" alt="MOSFET gate and return — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-vcc" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-vcc.png" title="VCC connector distinction" alt="VCC connector distinction — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-small-mosfet-eagle-reader-compact-indicator" src="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/reader-compact-indicator.png" title="Load indication and diode" alt="Load indication and diode — contact locator" caption="Pads and board outline only. Use all companion sheets; this is not a host wiring diagram." width=420 %}

[Download the unmodified source files, upstream licence and drawing notice](/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The contact inventory below records schematic connectivity; check physical cable orientation and board continuity.

| Reference | Value / role | Contact → net |
|---|---|---|
| U$13 | IRLR024 | 1 → N$28; 3 → GND; 4 → E1-CONTROL |
| JP1 |  | 1 → GND; 2 → VCC; 3 → FET-LOGIC-IN |
| JP2 |  | 1 → HEATERVIN; 2 → GND |
| JP3 |  | 1 → E1-CONTROL; 2 → HEATERVIN |
| D11 | 1N4148 | A → E1-CONTROL; C → HEATERVIN |

</details>

</details>

</details>

## Connect and try it

For a low-current lamp test, wire supply to JP2 and load to JP3, positive on contact 2. With power removed, connect Prime GF.10 ground to JP1.1 and GF.3 PB1 to JP1.3; omit JP1.2. Confirm the selected MOSFET’s operation at 3.3 V gate drive and check voltage and current before powering.

Prime GF/J37 contacts: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

A generic digital switch output can drive the PB1 cable. No board-specific firmware module is necessary. The example below is a functional lamp test, not a power test.

For the specific GF.3/PB1 cable, merge this into an otherwise non-conflicting configuration; do not duplicate an existing section or assign PB1 twice. The V2 digital-switch example in `ConfigSamples/config-3d.ini:163–205` supplies these settings.

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

Configuration field names in this example follow the [V2 Switch parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). Check the board's electrical limits and pin allocation for your installation.

The [V2 digital-switch parser and command implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438) defines this behaviour. Subcode 9 is an example allocation: reserve `M106.9`/`M107.9` in the complete configuration before use. Startup and halt settings are logical OFF; they do not establish the electrical state during reset, bootloader operation, lost power or a disconnected cable. The `!` suffix, where shown, inverts that logical output.

## Before powering

Check operation of the fitted IRLR024 at 3.3 V gate drive, supply and load limits, clamp capability and physical connector orientation.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 repository also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level licence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
