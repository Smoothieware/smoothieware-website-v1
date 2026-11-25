---
layout: default
title: "BreakoutPins \u2014 recovered upstream design"
permalink: /extensions/historical-breakoutpins
---

# BreakoutPins — recovered upstream design

This is a passive one-to-one ten-contact breakout and daisy-chain board. It exposes each connector contact on a single-row header for prototyping. It provides no level shifting, buffering or protocol conversion.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/BreakoutPins), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P1/P3 contacts 1–9 share /P1–/P9 with the same numbered P2 contacts; contact 10 is ground. The generic /P1 and /P2 names do not make them GPIO: on Prime they can carry the supply rails. There are no active controls in the netlist.

### Annotated connector and component reference

The reference below was newly derived from the documented native PCB, preserving its outline, footprint positions and numbered pads. **P1 and P3 show source pads and courtyards; no connector body or cable orientation is inferred.** The silkscreen supply labels do not resolve the generic /P1 and /P2 net roles or qualify either rail. This is source-derived artwork, not a recovered original canonical abstract.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-00-overview" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/00-overview.png" title="BreakoutPins — overview" alt="BreakoutPins — overview" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p1-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p1-1.png" title="BreakoutPins — p1 1" alt="BreakoutPins — p1 1" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p1-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p1-2.png" title="BreakoutPins — p1 2" alt="BreakoutPins — p1 2" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p2-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p2-1.png" title="BreakoutPins — p2 1" alt="BreakoutPins — p2 1" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p2-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p2-2.png" title="BreakoutPins — p2 2" alt="BreakoutPins — p2 2" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p3-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p3-1.png" title="BreakoutPins — p3 1" alt="BreakoutPins — p3 1" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p3-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p3-2.png" title="BreakoutPins — p3 2" alt="BreakoutPins — p3 2" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-mounting-and-controls" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/mounting-and-controls.png" title="BreakoutPins — mounting and controls" alt="BreakoutPins — mounting and controls" caption="Source revision 52ab340de33180a975b25f856c161993488e6ace. Native front-side reference; P1/P3 bodies, mating and rail roles are unverified. CERN-OHL-1.2 source attribution retained." width=420 %}

<details markdown="1">
<summary>Every individual numbered pad</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-01.png" title="BreakoutPins — pin p1 01" alt="BreakoutPins — pin p1 01" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-02.png" title="BreakoutPins — pin p1 02" alt="BreakoutPins — pin p1 02" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-03.png" title="BreakoutPins — pin p1 03" alt="BreakoutPins — pin p1 03" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-04.png" title="BreakoutPins — pin p1 04" alt="BreakoutPins — pin p1 04" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-05.png" title="BreakoutPins — pin p1 05" alt="BreakoutPins — pin p1 05" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-06.png" title="BreakoutPins — pin p1 06" alt="BreakoutPins — pin p1 06" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-07.png" title="BreakoutPins — pin p1 07" alt="BreakoutPins — pin p1 07" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-08.png" title="BreakoutPins — pin p1 08" alt="BreakoutPins — pin p1 08" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-09.png" title="BreakoutPins — pin p1 09" alt="BreakoutPins — pin p1 09" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-10.png" title="BreakoutPins — pin p1 10" alt="BreakoutPins — pin p1 10" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-01.png" title="BreakoutPins — pin p2 01" alt="BreakoutPins — pin p2 01" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-02.png" title="BreakoutPins — pin p2 02" alt="BreakoutPins — pin p2 02" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-03.png" title="BreakoutPins — pin p2 03" alt="BreakoutPins — pin p2 03" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-04.png" title="BreakoutPins — pin p2 04" alt="BreakoutPins — pin p2 04" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-05.png" title="BreakoutPins — pin p2 05" alt="BreakoutPins — pin p2 05" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-06.png" title="BreakoutPins — pin p2 06" alt="BreakoutPins — pin p2 06" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-07.png" title="BreakoutPins — pin p2 07" alt="BreakoutPins — pin p2 07" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-08.png" title="BreakoutPins — pin p2 08" alt="BreakoutPins — pin p2 08" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-09.png" title="BreakoutPins — pin p2 09" alt="BreakoutPins — pin p2 09" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-10.png" title="BreakoutPins — pin p2 10" alt="BreakoutPins — pin p2 10" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-01.png" title="BreakoutPins — pin p3 01" alt="BreakoutPins — pin p3 01" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-02.png" title="BreakoutPins — pin p3 02" alt="BreakoutPins — pin p3 02" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-03.png" title="BreakoutPins — pin p3 03" alt="BreakoutPins — pin p3 03" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-04.png" title="BreakoutPins — pin p3 04" alt="BreakoutPins — pin p3 04" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-05.png" title="BreakoutPins — pin p3 05" alt="BreakoutPins — pin p3 05" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-06.png" title="BreakoutPins — pin p3 06" alt="BreakoutPins — pin p3 06" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-07.png" title="BreakoutPins — pin p3 07" alt="BreakoutPins — pin p3 07" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-08.png" title="BreakoutPins — pin p3 08" alt="BreakoutPins — pin p3 08" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-09.png" title="BreakoutPins — pin p3 09" alt="BreakoutPins — pin p3 09" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-10.png" title="BreakoutPins — pin p3 10" alt="BreakoutPins — pin p3 10" caption="Exact source pad and locator. Generic net names do not establish supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

</details>

[Matching native source, licence and notices](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). The newly source-derived drawing and annotations retain CERN-OHL-1.2 attribution; no powered or mating qualification is implied.

<details markdown="1">
<summary>Retained functional reference sheets</summary>

These focused sheets combine source-derived board artwork, numbered native-coordinate keys and function callouts. Use all sheets together. Coordinate keys locate source pads; they are not verified connector mating views. The original canonical abstract and actual page/viewer inspection remain pending.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p2-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p2-functions-01.png" title="P2 — contact functions" alt="P2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p2-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p2-functions-02.png" title="P2 — contact functions" alt="P2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-m1-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-m2-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p3-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p3-functions-01.png" title="P3 — contact functions" alt="P3 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p3-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p3-functions-02.png" title="P3 — contact functions" alt="P3 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p1-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p1-functions-01.png" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p1-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p1-functions-02.png" title="P1 — contact functions" alt="P1 source-position contacts and function pills" caption="Selected historical revision. Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills. Physical mating remains unverified." width=420 %}

[Matching native source, licence and drawing notice](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). Source-derived additions dated 2026-10-18; retain the CERN-OHL-1.2 licence and source notices with derivatives.

</details>

<details>
<summary>Original pad locators and source comparison</summary>

### Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-overview" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-overview.png" title="Legacy pins breakout" alt="Legacy pins breakout — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p1-1-5" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p1-1-5.png" title="P1 · Daisy-chain connector" alt="P1 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p1-6-10" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p1-6-10.png" title="P1 · Daisy-chain connector" alt="P1 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p2-1-5" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p2-1-5.png" title="P2 · Breakout contacts" alt="P2 · Breakout contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p2-6-10" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p2-6-10.png" title="P2 · Breakout contacts" alt="P2 · Breakout contacts — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p3-1-5" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p3-1-5.png" title="P3 · Daisy-chain connector" alt="P3 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-p3-6-10" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-p3-6-10.png" title="P3 · Daisy-chain connector" alt="P3 · Daisy-chain connector — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-boundary" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-paths" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-paths.png" title="Passive shared paths" alt="Passive shared paths — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-reader-compact-mounts" src="/images/extensions/historical-breakoutpins/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting pads" alt="Mechanical mounting pads — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Verify all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. The source uses CERN-OHL-1.2; retain the included licence and notices with derivatives.



</details>

The source-derived annotated sheets above supplement the retained pad locators. A revision-matched canonical abstract is still pending; a modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P2 | CONN_01X10 | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| P1 | Smoothie-teer-Daisy | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| P3 | Smoothie-teer-Daisy | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |

## Connect and try it

A button-to-ground test can use Prime GF.3 PB1 through P1.3 to P2.3, with the button return on P2.10 ground. P2.1 and .2 would carry host supply rails if a full cable is used; keep them away from the switch signal. Confirm contact-1 orientation before powering. The breakout adds no input protection.

### Prime dry-button whole-board wiring

Use two individual host leads: **GF/J37.3 (PB1) → P1.3**, and **GF/J37.10 (ground) → P1.10**. Connect a normally-open dry button between **P2.3 and P2.10**. Leave supply contacts and the P3 daisy-chain connector unused. Check the numbered contact sheets against the actual board before connecting anything; the drawings do not qualify a mating cable or connector population.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-external-installation" src="/images/extensions/historical-breakoutpins/guides/wholeboard-readable/wholeboard-wiring.png" title="Complete-board dry-button connection" alt="Complete Prime and historical BreakoutPins with four dry-button leads" caption="Conditional source study: J37.3 to P1.3, J37.10 to P1.10, P2.3 and P2.10 to the normally-open button. All other contacts open; physical mating and actual reader checks remain open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-j37-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/j37-contact-key.png" title="Prime J37 native contact key" alt="Prime J37 native contact key for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-p1-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/p1-contact-key.png" title="BreakoutPins P1 native contact key" alt="BreakoutPins P1 native contact key for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-p2-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/p2-contact-key.png" title="Straight P2 field-header numbering" alt="Straight P2 field-header numbering for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-internal-net-relationships" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/internal-net-relationships.png" title="PCB relationships, not extra leads" alt="PCB relationships, not extra leads for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-mandatory-limits" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-firmware-input" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/firmware-input.png" title="Matching button-box configuration" alt="Matching button-box configuration for historical BreakoutPins dry-button study" caption="Companion to the complete-board four-lead diagram; verify source revision and fitted hardware before use." width=1200 %}

<details markdown="1">
<summary>Earlier contact-only electrical plan</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-contact-plan-retained" src="/images/extensions/historical-breakoutpins/guides/passive-contact-plan/external-installation.png" title="Prime dry-button source-contact plan" alt="Prime PB1 and ground through the historical breakoutpins to a normally-open dry button; four external leads and two source PCB paths" caption="Supplementary source-contact plan: solid electrical paths preserve the native PCB nets; dashed locators identify contacts without adding connections. The historical board view is a native-contact reconstruction, not the missing populated abstract." width=420 %}

</details>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-p1-numbered-contacts" src="/images/extensions/historical-breakoutpins/guides/passive-contact-plan/p1-numbered-contacts.png" title="P1 numbered contact key" alt="Historical breakoutpins P1 numbered contacts, with signal contact 3 and ground contact 10 selected" caption="P1 contact key. Contact numbering follows the selected native PCB, not a presumed cable colour order." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-p2-numbered-contacts" src="/images/extensions/historical-breakoutpins/guides/passive-contact-plan/p2-numbered-contacts.png" title="P2 numbered contact key" alt="Historical breakoutpins P2 numbered contacts, with signal contact 3 and ground contact 10 selected" caption="P2 contact key. Confirm the actual assembly and viewing side; do not infer a connector housing from the contact marks." width=420 %}

Derived from the selected historical native PCB under CERN-OHL v1.2; attribution, licence and matching original source are retained in the [source-and-notices bundle](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). The Prime view retains its existing source attribution. These plans do not complete the required populated-board reference, physical mating qualification or normal/narrow-width page review. No supply rail or available current budget is implied.

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

Physical connector orientation, source PCB parity, host rail limits and actual button/input module choice. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. No redistribution/license conclusion is made here. The selected Smoothieboard2 snapshot also contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level evidence does not establish rights in separately sourced component images or artwork.

[All extension boards](/extension-boards)
