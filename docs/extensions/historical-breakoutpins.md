---
layout: default
title: "BreakoutPins"
permalink: /extensions/historical-breakoutpins
---

# BreakoutPins

This is a passive one-to-one ten-contact breakout and daisy-chain board. It exposes each connector contact on a single-row header for prototyping. It provides no level shifting, buffering or protocol conversion.

## Compatibility

This guide describes the board in the [original Smoothieboard2 source files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/BreakoutPins). It was designed for a host generation that predates Smoothieboard V2 Prime. Establish connector compatibility contact by contact.

## Power, signals and controls

P1/P3 contacts 1–9 share /P1–/P9 with the same numbered P2 contacts; contact 10 is ground. The generic /P1 and /P2 names do not make them GPIO: on Prime they can carry the supply rails. There are no active controls.

### Annotated connector and component reference

The reference below shows the board outline, footprint positions and numbered pads. **P1 and P3 show pads and courtyards, not connector bodies or cable orientation.** The silkscreen supply labels do not define the generic /P1 and /P2 net roles.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-00-overview" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/00-overview.png" title="BreakoutPins — overview" alt="BreakoutPins — overview" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p1-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p1-1.png" title="BreakoutPins — p1 1" alt="BreakoutPins — p1 1" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p1-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p1-2.png" title="BreakoutPins — p1 2" alt="BreakoutPins — p1 2" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p2-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p2-1.png" title="BreakoutPins — p2 1" alt="BreakoutPins — p2 1" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p2-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p2-2.png" title="BreakoutPins — p2 2" alt="BreakoutPins — p2 2" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p3-1" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p3-1.png" title="BreakoutPins — p3 1" alt="BreakoutPins — p3 1" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-p3-2" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/p3-2.png" title="BreakoutPins — p3 2" alt="BreakoutPins — p3 2" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-mounting-and-controls" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/mounting-and-controls.png" title="BreakoutPins — mounting and controls" alt="BreakoutPins — mounting and controls" caption="Front-side reference; check connector bodies, mating and rail roles before wiring. CERN-OHL-1.2." width=420 %}

<details markdown="1">
<summary>Every individual numbered pad</summary>

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-01.png" title="BreakoutPins — pin p1 01" alt="BreakoutPins — pin p1 01" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-02.png" title="BreakoutPins — pin p1 02" alt="BreakoutPins — pin p1 02" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-03.png" title="BreakoutPins — pin p1 03" alt="BreakoutPins — pin p1 03" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-04.png" title="BreakoutPins — pin p1 04" alt="BreakoutPins — pin p1 04" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-05.png" title="BreakoutPins — pin p1 05" alt="BreakoutPins — pin p1 05" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-06.png" title="BreakoutPins — pin p1 06" alt="BreakoutPins — pin p1 06" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-07.png" title="BreakoutPins — pin p1 07" alt="BreakoutPins — pin p1 07" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-08.png" title="BreakoutPins — pin p1 08" alt="BreakoutPins — pin p1 08" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-09.png" title="BreakoutPins — pin p1 09" alt="BreakoutPins — pin p1 09" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p1-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p1-10.png" title="BreakoutPins — pin p1 10" alt="BreakoutPins — pin p1 10" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-01.png" title="BreakoutPins — pin p2 01" alt="BreakoutPins — pin p2 01" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-02.png" title="BreakoutPins — pin p2 02" alt="BreakoutPins — pin p2 02" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-03.png" title="BreakoutPins — pin p2 03" alt="BreakoutPins — pin p2 03" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-04.png" title="BreakoutPins — pin p2 04" alt="BreakoutPins — pin p2 04" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-05.png" title="BreakoutPins — pin p2 05" alt="BreakoutPins — pin p2 05" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-06.png" title="BreakoutPins — pin p2 06" alt="BreakoutPins — pin p2 06" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-07.png" title="BreakoutPins — pin p2 07" alt="BreakoutPins — pin p2 07" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-08.png" title="BreakoutPins — pin p2 08" alt="BreakoutPins — pin p2 08" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-09.png" title="BreakoutPins — pin p2 09" alt="BreakoutPins — pin p2 09" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p2-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p2-10.png" title="BreakoutPins — pin p2 10" alt="BreakoutPins — pin p2 10" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-01" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-01.png" title="BreakoutPins — pin p3 01" alt="BreakoutPins — pin p3 01" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-02" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-02.png" title="BreakoutPins — pin p3 02" alt="BreakoutPins — pin p3 02" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-03" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-03.png" title="BreakoutPins — pin p3 03" alt="BreakoutPins — pin p3 03" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-04" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-04.png" title="BreakoutPins — pin p3 04" alt="BreakoutPins — pin p3 04" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-05" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-05.png" title="BreakoutPins — pin p3 05" alt="BreakoutPins — pin p3 05" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-06" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-06.png" title="BreakoutPins — pin p3 06" alt="BreakoutPins — pin p3 06" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-07" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-07.png" title="BreakoutPins — pin p3 07" alt="BreakoutPins — pin p3 07" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-08" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-08.png" title="BreakoutPins — pin p3 08" alt="BreakoutPins — pin p3 08" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-09" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-09.png" title="BreakoutPins — pin p3 09" alt="BreakoutPins — pin p3 09" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-source-derived-pin-p3-10" src="/images/extensions/historical-breakoutpins/guides/source-derived-annotated/pin-p3-10.png" title="BreakoutPins — pin p3 10" alt="BreakoutPins — pin p3 10" caption="Pad location. Generic net names do not define supply ratings or a host signal assignment. Not a mating-face drawing." width=420 %}

</details>

[Source files, licence and notices](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). The drawing and annotations carry CERN-OHL-1.2 attribution.

<details markdown="1">
<summary>Functional reference sheets</summary>

These focused sheets combine board artwork, numbered coordinate keys and function callouts. Use all sheets together. Coordinate keys locate pads; they are not connector mating views.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p2-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p2-functions-01.png" title="P2 — contact functions" alt="P2 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p2-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p2-functions-02.png" title="P2 — contact functions" alt="P2 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-m1-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/m1-functions-01.png" title="M1 — contact functions" alt="M1 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-m2-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/m2-functions-01.png" title="M2 — contact functions" alt="M2 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p3-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p3-functions-01.png" title="P3 — contact functions" alt="P3 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p3-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p3-functions-02.png" title="P3 — contact functions" alt="P3 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p1-functions-01" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p1-functions-01.png" title="P1 — contact functions" alt="P1 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-functional-p1-functions-02" src="/images/extensions/historical-breakoutpins/guides/functional-reference/p1-functions-02.png" title="P1 — contact functions" alt="P1 contacts and function pills" caption="Front-coordinate projection; underside parts explicitly identified. Match numbers with function pills." width=420 %}

[Source files, licence and drawing notice](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). Retain the CERN-OHL-1.2 licence and source notices with derivatives.

</details>

[Download the source files, upstream licence and drawing notice](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip). The source uses CERN-OHL-1.2; retain the included licence and notices with derivatives.
The contact list below gives the connections. Check physical cable orientation and continuity before wiring.

| Reference | Value / role | Contact → net |
|---|---|---|
| P2 | CONN_01X10 | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| P1 | Smoothie-teer-Daisy | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |
| P3 | Smoothie-teer-Daisy | 1 → /P1; 2 → /P2; 3 → /P3; 4 → /P4; 5 → /P5; 6 → /P6; 7 → /P7; 8 → /P8; 9 → /P9; 10 → GND |

## Connect and try it

A button-to-ground test can use Prime GF.3 PB1 through P1.3 to P2.3, with the button return on P2.10 ground. P2.1 and .2 would carry host supply rails if a full cable is used; keep them away from the switch signal. Confirm contact-1 orientation before powering. The breakout adds no input protection.

### Prime dry-button whole-board wiring

Use two individual host leads: **GF/J37.3 (PB1) → P1.3**, and **GF/J37.10 (ground) → P1.10**. Connect a normally-open dry button between **P2.3 and P2.10**. Leave supply contacts and the P3 daisy-chain connector unused. Check the numbered contact sheets against the actual board before connecting anything; the drawings do not specify a mating cable.

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-external-installation" src="/images/extensions/historical-breakoutpins/guides/wholeboard-readable/wholeboard-wiring.png" title="Complete-board dry-button connection" alt="Complete Prime and BreakoutPins with four dry-button leads" caption="J37.3 to P1.3, J37.10 to P1.10, P2.3 and P2.10 to the normally-open button. All other contacts open." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-j37-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/j37-contact-key.png" title="Prime J37 native contact key" alt="Prime J37 native contact key for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-p1-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/p1-contact-key.png" title="BreakoutPins P1 native contact key" alt="BreakoutPins P1 native contact key for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-p2-contact-key" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/p2-contact-key.png" title="Straight P2 field-header numbering" alt="Straight P2 field-header numbering for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-internal-net-relationships" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/internal-net-relationships.png" title="PCB relationships, not extra leads" alt="PCB relationships, not extra leads for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-mandatory-limits" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-breakoutpins-wholeboard-firmware-input" src="/images/extensions/historical-breakoutpins/guides/wholeboard-buttonbox/firmware-input.png" title="Matching button-box configuration" alt="Matching button-box configuration for the BreakoutPins dry-button circuit" caption="Companion to the complete-board four-lead diagram; verify the fitted hardware before use." width=1200 %}

## Smoothieware use

This passive breakout needs no board driver. For the normally-open button wired above, merge these entries into the existing `[button box]` section without duplicating an allocated pin or button name.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

The pull-up (`^`) holds the open contact high; inversion (`!`) makes pressing the grounded contact active. `KILL` runs on the inactive-to-active transition and requests a software halt. A contact held during startup can trigger the initial active sample; releasing it does not clear the halt. This is not an emergency power disconnect. PB1 must be free in the complete configuration; an external-driver example assigns it to a direction output.

The [button parser and KILL action](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L211) and [pin suffix parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L208-L270) define this behavior. Your installed firmware may differ.

## Original files and attribution

The linked original source folder contains the CAD, images, fabrication output and any author notes. Project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The Smoothieboard2 source contains a repository-root [CERN Open Hardware Licence v1.2](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE); its [README](https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md) explicitly describes hardware files for the board and extension boards. Preserve those license and attribution records. This repository-level notice does not establish rights in separately sourced component images or artwork. The [source-and-notices bundle](/images/extensions/historical-breakoutpins/guides/native-contact-reference/native-source-and-notices.zip) holds the matching original source, attribution and licence under CERN-OHL v1.2.

[All extension boards](/extension-boards)
