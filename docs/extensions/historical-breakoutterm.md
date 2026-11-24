---
layout: default
title: "BreakoutTerm \u2014 recovered upstream design"
permalink: /extensions/historical-breakoutterm
---

# BreakoutTerm — recovered upstream design

This passive breakout moves a ten-contact host interface to a screw-terminal row and repeats it on another host connector. It makes field wiring easier but does not add protection or change signal voltage.

Read the [four-lead dry-button checklist](#connect-and-try-it), then the [button configuration](#smoothieware-use). P2 terminal numbering runs opposite to P1/P3 contact numbering; the tables below keep those identities explicit.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/BreakoutTerm), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P1/P3 are straight-through host connectors. The terminal row P2 is reversed: .1 ground, .2 P9, .3 P8, .4 P7, .5 P6, .6 P5, .7 P4, .8 P3, .9 +5V and .10 +3V3. Never assume terminal number equals host contact number. No configuration jumper or active IC is present.

### Annotated connector and component reference

This reference was newly derived from the documented native PCB, preserving its outline, source graphics, footprint positions and numbered pads. **P2 terminal numbering is reversed relative to the host contacts.** Purple artwork projects the source bottom silkscreen onto the native board view; it is not a bottom cable mating-face view. Courtyards do not establish connector body geometry. This is newly source-derived artwork, not a recovered original canonical abstract.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-00-overview" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-00-overview.svg" title="Board overview" alt="Board overview for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-00-mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-m1-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-m1-1.svg" title="M1 1" alt="M1 1 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-m2-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-m2-1.svg" title="M2 1" alt="M2 1 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p1-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p1-1.svg" title="P1 1" alt="P1 1 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p1-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p1-2.svg" title="P1 2" alt="P1 2 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p2-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p2-1.svg" title="P2 1" alt="P2 1 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p2-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p2-2.svg" title="P2 2" alt="P2 2 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p3-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p3-1.svg" title="P3 1" alt="P3 1 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-compact-function-reader-p3-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-reader-compact/reader-p3-2.svg" title="P3 2" alt="P3 2 for the selected historical breakoutterm source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-00-overview" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/00-overview.svg" title="BreakoutTerm — overview" alt="BreakoutTerm — overview" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p1-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p1-1.svg" title="BreakoutTerm — p1 1" alt="BreakoutTerm — p1 1" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p1-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p1-2.svg" title="BreakoutTerm — p1 2" alt="BreakoutTerm — p1 2" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p2-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p2-1.svg" title="BreakoutTerm — p2 1" alt="BreakoutTerm — p2 1" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p2-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p2-2.svg" title="BreakoutTerm — p2 2" alt="BreakoutTerm — p2 2" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p3-1" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p3-1.svg" title="BreakoutTerm — p3 1" alt="BreakoutTerm — p3 1" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-p3-2" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/p3-2.svg" title="BreakoutTerm — p3 2" alt="BreakoutTerm — p3 2" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-mounting-and-controls" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/mounting-and-controls.svg" title="BreakoutTerm — mounting and controls" alt="BreakoutTerm — mounting and controls" caption="Revision 52ab340de33180a975b25f856c161993488e6ace. P2 numbering is reversed. Source geometry and net names do not qualify mating, rail ratings or powered use. CERN-OHL-1.2 attribution retained." width=420 %}

<details markdown="1">
<summary>Every individual numbered pad</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-01" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-01.svg" title="BreakoutTerm — pin p1 01" alt="BreakoutTerm — pin p1 01" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-02" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-02.svg" title="BreakoutTerm — pin p1 02" alt="BreakoutTerm — pin p1 02" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-03" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-03.svg" title="BreakoutTerm — pin p1 03" alt="BreakoutTerm — pin p1 03" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-04" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-04.svg" title="BreakoutTerm — pin p1 04" alt="BreakoutTerm — pin p1 04" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-05" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-05.svg" title="BreakoutTerm — pin p1 05" alt="BreakoutTerm — pin p1 05" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-06" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-06.svg" title="BreakoutTerm — pin p1 06" alt="BreakoutTerm — pin p1 06" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-07" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-07.svg" title="BreakoutTerm — pin p1 07" alt="BreakoutTerm — pin p1 07" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-08" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-08.svg" title="BreakoutTerm — pin p1 08" alt="BreakoutTerm — pin p1 08" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-09" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-09.svg" title="BreakoutTerm — pin p1 09" alt="BreakoutTerm — pin p1 09" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p1-10" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p1-10.svg" title="BreakoutTerm — pin p1 10" alt="BreakoutTerm — pin p1 10" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-01" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-01.svg" title="BreakoutTerm — pin p2 01" alt="BreakoutTerm — pin p2 01" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-02" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-02.svg" title="BreakoutTerm — pin p2 02" alt="BreakoutTerm — pin p2 02" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-03" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-03.svg" title="BreakoutTerm — pin p2 03" alt="BreakoutTerm — pin p2 03" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-04" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-04.svg" title="BreakoutTerm — pin p2 04" alt="BreakoutTerm — pin p2 04" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-05" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-05.svg" title="BreakoutTerm — pin p2 05" alt="BreakoutTerm — pin p2 05" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-06" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-06.svg" title="BreakoutTerm — pin p2 06" alt="BreakoutTerm — pin p2 06" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-07" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-07.svg" title="BreakoutTerm — pin p2 07" alt="BreakoutTerm — pin p2 07" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-08" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-08.svg" title="BreakoutTerm — pin p2 08" alt="BreakoutTerm — pin p2 08" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-09" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-09.svg" title="BreakoutTerm — pin p2 09" alt="BreakoutTerm — pin p2 09" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p2-10" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p2-10.svg" title="BreakoutTerm — pin p2 10" alt="BreakoutTerm — pin p2 10" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-01" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-01.svg" title="BreakoutTerm — pin p3 01" alt="BreakoutTerm — pin p3 01" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-02" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-02.svg" title="BreakoutTerm — pin p3 02" alt="BreakoutTerm — pin p3 02" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-03" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-03.svg" title="BreakoutTerm — pin p3 03" alt="BreakoutTerm — pin p3 03" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-04" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-04.svg" title="BreakoutTerm — pin p3 04" alt="BreakoutTerm — pin p3 04" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-05" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-05.svg" title="BreakoutTerm — pin p3 05" alt="BreakoutTerm — pin p3 05" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-06" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-06.svg" title="BreakoutTerm — pin p3 06" alt="BreakoutTerm — pin p3 06" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-07" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-07.svg" title="BreakoutTerm — pin p3 07" alt="BreakoutTerm — pin p3 07" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-08" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-08.svg" title="BreakoutTerm — pin p3 08" alt="BreakoutTerm — pin p3 08" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-09" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-09.svg" title="BreakoutTerm — pin p3 09" alt="BreakoutTerm — pin p3 09" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-source-derived-pin-p3-10" src="/images/extensions/historical-breakoutterm/guides/source-derived-annotated/pin-p3-10.svg" title="BreakoutTerm — pin p3 10" alt="BreakoutTerm — pin p3 10" caption="Numbered native pad and source locator. Verify the reversed P2 order; this is not a connector mating-face drawing or a rail-rating claim." width=420 %}

</details>

[Matching native source, licence and notices](/images/extensions/historical-breakoutterm/guides/native-contact-reference/native-source-and-notices.zip). New source-derived drawings and annotations retain CERN-OHL-1.2 attribution.

<details markdown="1">
<summary>Retained functional reference sheets</summary>

These focused sheets combine source-derived board artwork, numbered native-coordinate keys and function callouts. Use all sheets together. Coordinate keys locate source pads; they are not verified connector mating views. The original canonical abstract and actual page/viewer inspection remain pending.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p2-functions-01" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p2-functions-01.svg" title="P2 — contact functions" alt="P2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p2-functions-02" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p2-functions-02.svg" title="P2 — contact functions" alt="P2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-m2-functions-01" src="/images/extensions/historical-breakoutterm/guides/functional-reference/m2-functions-01.svg" title="M2 — contact functions" alt="M2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-m1-functions-01" src="/images/extensions/historical-breakoutterm/guides/functional-reference/m1-functions-01.svg" title="M1 — contact functions" alt="M1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p1-functions-01" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p1-functions-01.svg" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p1-functions-02" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p1-functions-02.svg" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p3-functions-01" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p3-functions-01.svg" title="P3 — contact functions" alt="P3 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-functional-p3-functions-02" src="/images/extensions/historical-breakoutterm/guides/functional-reference/p3-functions-02.svg" title="P3 — contact functions" alt="P3 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

[Matching native source, licence and drawing notice](/images/extensions/historical-breakoutterm/guides/native-contact-reference/native-source-and-notices.zip). Source-derived additions dated 2026-10-18; retain the CERN-OHL-1.2 licence and source notices with derivatives.

</details>

<details>
<summary>Original pad locators and source comparison</summary>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-overview" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-overview.svg" title="Legacy terminal breakout" alt="Legacy terminal breakout — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p1-1-5" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p1-1-5.svg" title="P1 · Daisy-chain connector" alt="P1 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p1-6-10" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p1-6-10.svg" title="P1 · Daisy-chain connector" alt="P1 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p2-1-5" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p2-1-5.svg" title="P2 · Breakout contacts" alt="P2 · Breakout contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p2-6-10" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p2-6-10.svg" title="P2 · Breakout contacts" alt="P2 · Breakout contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p3-1-5" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p3-1-5.svg" title="P3 · Daisy-chain connector" alt="P3 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-p3-6-10" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-p3-6-10.svg" title="P3 · Daisy-chain connector" alt="P3 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-boundary" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-boundary.svg" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-paths" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-paths.svg" title="Terminal numbering" alt="Terminal numbering — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-reader-compact-mounts" src="/images/extensions/historical-breakoutterm/guides/native-contact-reference/reader-compact-mounts.svg" title="Mechanical mounting pads" alt="Mechanical mounting pads — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-breakoutterm/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. The source uses CERN-OHL-1.2; retain the included licence and notices with derivatives.



</details>

The source-derived annotated sheets above supplement the retained pad locators. A revision-matched canonical abstract is still pending; a modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P2 | CONN_01X10 | 1 → GND; 2 → /P9; 3 → /P8; 4 → /P7; 5 → /P6; 6 → /P5; 7 → /P4; 8 → /P3; 9 → +5V; 10 → +3V3 |
| P1 | * | 1 → +3V3; 2 → +5V; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| P3 | * | 1 → +3V3; 2 → +5V; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |


</details>

## Connect and try it

For a grounded pushbutton on Prime GF.3 PB1, wire the signal to P2.8 and return to P2.1; P1.3 reaches P2.8. Confirm the connector orientation and keep P2.9/.10 supply terminals away from the signal. Tighten terminals to a proven connector specification, not an invented torque.

### Check all four external leads

With power off, identify P1 and P2 from the numbered contact views. Check the selected PCB's signal path P1.3 → P2.8 and ground path P1.10 → P2.1 before adding the button.

| Lead | First end | Second end |
|---|---|---|
| Host signal | Prime J37.3 / PB1 | BreakoutTerm P1.3 |
| Host return | Prime J37.10 / ground | BreakoutTerm P1.10 |
| Button signal | BreakoutTerm P2.8 | One normally-open button contact |
| Button return | BreakoutTerm P2.1 | Other normally-open button contact |

The two PCB paths are internal connections, not two more external wires. Leave P1 supply contacts, P2.9/.10 and the entire P3 connector unused. Check that the button is open when released and connects only the selected signal and return when pressed; an external voltage source is not part of this dry-contact example.

Before enabling the button configuration, disable machine loads and reserve PB1 for this input. A pressed or held-at-startup button can request the software halt; releasing it does not clear that halt. If the halt is asserted unexpectedly, turn power off and check the normally-open contact choice and reversed P2 numbering before changing pin inversion. This input does not disconnect machine power.

### Prime dry-button whole-board wiring

Use two individual host leads: **GF/J37.3 (PB1) → P1.3**, and **GF/J37.10 (ground) → P1.10**. Connect a normally-open dry button between **P2.8 and P2.1**. Leave supply contacts and the P3 daisy-chain connector unused. Check the numbered contact sheets against the actual board before connecting anything; the drawings do not qualify a mating cable or connector population.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-external-installation" src="/images/extensions/historical-breakoutterm/guides/wholeboard-readable/wholeboard-wiring.svg" title="Complete-board dry-button connection" alt="Complete Prime and historical BreakoutTerm with four dry-button leads" caption="Conditional source study: J37.3 to P1.3, J37.10 to P1.10, P2.8 and P2.1 to the normally-open button. All other contacts open; physical mating and actual reader checks remain open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-j37-contact-key" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/j37-contact-key.svg" title="Prime J37 native contact key" alt="Prime J37 native contact key for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-p1-contact-key" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/p1-contact-key.svg" title="BreakoutTerm P1 native contact key" alt="BreakoutTerm P1 native contact key for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-p2-contact-key" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/p2-contact-key.svg" title="Reversed P2 terminal numbers" alt="Reversed P2 terminal numbers for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-internal-net-relationships" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/internal-net-relationships.svg" title="PCB relationships, not extra leads" alt="PCB relationships, not extra leads for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-mandatory-limits" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/mandatory-limits.svg" title="Mandatory connection limits" alt="Mandatory connection limits for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-wholeboard-firmware-input" src="/images/extensions/historical-breakoutterm/guides/wholeboard-buttonbox/firmware-input.svg" title="Matching button-box configuration" alt="Matching button-box configuration for historical BreakoutTerm dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

<details markdown="1">
<summary>Earlier contact-only electrical plan</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-contact-plan-retained" src="/images/extensions/historical-breakoutterm/guides/passive-contact-plan/external-installation.svg" title="Prime dry-button source-contact plan" alt="Prime PB1 and ground through the historical breakoutterm to a normally-open dry button; four external leads and two source PCB paths" caption="Supplementary source-contact plan: solid electrical paths preserve the native PCB nets; dashed locators identify contacts without adding connections. The historical board view is a native-contact reconstruction, not the missing populated abstract." width=420 %}

</details>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-p1-numbered-contacts" src="/images/extensions/historical-breakoutterm/guides/passive-contact-plan/p1-numbered-contacts.svg" title="P1 numbered contact key" alt="Historical breakoutterm P1 numbered contacts, with signal contact 3 and ground contact 10 selected" caption="P1 contact key. Contact numbering follows the selected native PCB, not a presumed cable colour order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutterm-p2-numbered-contacts" src="/images/extensions/historical-breakoutterm/guides/passive-contact-plan/p2-numbered-contacts.svg" title="P2 numbered contact key" alt="Historical breakoutterm P2 numbered contacts, with signal contact 8 and ground contact 1 selected" caption="P2 contact key. Confirm the actual assembly and viewing side; do not infer a connector housing from the contact marks." width=420 %}

Derived from the selected historical native PCB under CERN-OHL v1.2; attribution, licence and matching original source are retained in the [source-and-notices bundle](/images/extensions/historical-breakoutterm/guides/native-contact-reference/native-source-and-notices.zip). The Prime view retains its existing source attribution. These plans do not complete the required populated-board reference, physical mating qualification or normal/narrow-width page review. No supply rail or available current budget is implied.

## Smoothieware use

This passive breakout needs no board driver. For the normally-open button wired above, merge these entries into the existing `[button box]` section without duplicating an allocated pin or button name.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

The pull-up (`^`) holds the open contact high; inversion (`!`) makes pressing the grounded contact active. `KILL` runs on the inactive-to-active transition and requests a software halt. A contact held during startup can trigger the initial active sample; releasing it does not clear the halt. This is not an emergency power disconnect. PB1 must be free in the complete configuration; a retained external-driver example assigns it to a direction output.

The [button parser and KILL action](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L211) and [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L208-L270) were inspected in retained source exports. The links identify the intended upstream revision, but the exports lack Git metadata and exact upstream revision identity remains unverified. Source inspection does not identify your installed firmware or prove physical behavior. If an attached device requires firmware support that is absent, email **wolf.arthur@gamil.com**.

## Remaining source questions

Terminal population/pitch/rating, physical numbering and mating face, host cable orientation and machine-specific input allocation. The selected PCB/netlist/schematic topology and reversed terminal mapping were checked against the pinned source; this does not qualify a fitted board. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
