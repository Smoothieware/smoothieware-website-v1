---
layout: default
title: "Flambegate \u2014 High-side heater shutoff"
permalink: /extensions/historical-flambegate
---

# Flambegate

This board adds a separately controlled high-side FET to a DC heater power path. The author intends it to disconnect a hotend when a separate hardware trigger detects a fault, including when the controller’s ordinary low-side output fails. It does not replace the normal heater controller and carries no safety certification.

## Design source and compatibility

This guide follows [HighSideFet.kicad_pcb](https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_pcb). It is a separate related hardware design, not a Prime adapter. The source description uses failsafe terminology; do not rely on the board as a certified safety device.

## Operation, power and connectors

The original README calls this an attempt at an additional hardware failsafe, claims about 8 A at 28 V DC, and specifies an inline fuseholder and optional 5 V Recom regulator. Those are the author’s figures. U1 is R-78E5.0-1.0, Q2 WSD30L40DN and Q1 2N7002. J1.2 enters F1 before +24V reaches Q2; J4.2 is the switched output. J1.1 and J4.1 share Passthru, which is not named GND. Never silently join Passthru to logic ground: the intended machine topology may retain an existing switched heater return. J2 is signal/5 V/ground on contacts 1/2/3, unlike Flambehub’s input connector order. J3 is 5 V/ground on contacts 1/2.

### Annotated connector and component reference

These drawings show the board outline, footprints, pads and graphics with function callouts; they are not mating views. The Passthru net is distinct from ground. Check fuse, load current, thermal behaviour, supply and connector mating for your installation.

### Board reference

These function-labelled views show the board geometry. They are not mating views.

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-00-overview" src="/images/extensions/historical-flambegate/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-flambegate/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-f1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-f1-1.png" title="F1 1" alt="F1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-h1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-h1-1.png" title="H1 1" alt="H1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-h2-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-h2-1.png" title="H2 1" alt="H2 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j1-1.png" title="J1 1" alt="J1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j1-2" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j1-2.png" title="J1 2" alt="J1 2 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j2-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j2-1.png" title="J2 1" alt="J2 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j3-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j3-1.png" title="J3 1" alt="J3 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j4-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j4-1.png" title="J4 1" alt="J4 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-j4-2" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-j4-2.png" title="J4 2" alt="J4 2 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-q1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-q1-1.png" title="Q1 1" alt="Q1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-q2-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-q2-1.png" title="Q2 1" alt="Q2 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-r1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-r1-1.png" title="R1 1" alt="R1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-r2-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-r2-1.png" title="R2 1" alt="R2 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-r3-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-r3-1.png" title="R3 1" alt="R3 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-r4-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-r4-1.png" title="R4 1" alt="R4 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-compact-function-reader-u1-1" src="/images/extensions/historical-flambegate/guides/source-derived-reader/reader-u1-1.png" title="U1 1" alt="U1 1 for FlambeGate" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact reference views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-00-overview" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/00-overview.png" title="FlambeGate reference — 00 overview" alt="FlambeGate reference — 00 overview" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-art18-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/art18-1.png" title="FlambeGate reference — art18 1" alt="FlambeGate reference — art18 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-art19-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/art19-1.png" title="FlambeGate reference — art19 1" alt="FlambeGate reference — art19 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-c1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/c1-1.png" title="FlambeGate reference — c1 1" alt="FlambeGate reference — c1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-c2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/c2-1.png" title="FlambeGate reference — c2 1" alt="FlambeGate reference — c2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-f1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/f1-1.png" title="FlambeGate reference — f1 1" alt="FlambeGate reference — f1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-fid1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/fid1-1.png" title="FlambeGate reference — fid1 1" alt="FlambeGate reference — fid1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-fid2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/fid2-1.png" title="FlambeGate reference — fid2 1" alt="FlambeGate reference — fid2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-fid3-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/fid3-1.png" title="FlambeGate reference — fid3 1" alt="FlambeGate reference — fid3 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-fid4-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/fid4-1.png" title="FlambeGate reference — fid4 1" alt="FlambeGate reference — fid4 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-h1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/h1-1.png" title="FlambeGate reference — h1 1" alt="FlambeGate reference — h1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-h2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/h2-1.png" title="FlambeGate reference — h2 1" alt="FlambeGate reference — h2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j1-1.png" title="FlambeGate reference — j1 1" alt="FlambeGate reference — j1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j1-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j1-2.png" title="FlambeGate reference — j1 2" alt="FlambeGate reference — j1 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j2-1.png" title="FlambeGate reference — j2 1" alt="FlambeGate reference — j2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j3-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j3-1.png" title="FlambeGate reference — j3 1" alt="FlambeGate reference — j3 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j4-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j4-1.png" title="FlambeGate reference — j4 1" alt="FlambeGate reference — j4 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-j4-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/j4-2.png" title="FlambeGate reference — j4 2" alt="FlambeGate reference — j4 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-q1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/q1-1.png" title="FlambeGate reference — q1 1" alt="FlambeGate reference — q1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-q2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/q2-1.png" title="FlambeGate reference — q2 1" alt="FlambeGate reference — q2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-r1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/r1-1.png" title="FlambeGate reference — r1 1" alt="FlambeGate reference — r1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-r2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/r2-1.png" title="FlambeGate reference — r2 1" alt="FlambeGate reference — r2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-r3-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/r3-1.png" title="FlambeGate reference — r3 1" alt="FlambeGate reference — r3 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-r4-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/r4-1.png" title="FlambeGate reference — r4 1" alt="FlambeGate reference — r4 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-source-net-keys-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/source-net-keys-1.png" title="FlambeGate reference — source net keys 1" alt="FlambeGate reference — source net keys 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-source-net-keys-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/source-net-keys-2.png" title="FlambeGate reference — source net keys 2" alt="FlambeGate reference — source net keys 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-u1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/u1-1.png" title="FlambeGate reference — u1 1" alt="FlambeGate reference — u1 1" caption="Front-side component reference." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-c1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-c1-0.png" title="FlambeGate reference — contact c1 0" alt="FlambeGate reference — contact c1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-c1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-c1-1.png" title="FlambeGate reference — contact c1 1" alt="FlambeGate reference — contact c1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-c2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-c2-0.png" title="FlambeGate reference — contact c2 0" alt="FlambeGate reference — contact c2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-c2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-c2-1.png" title="FlambeGate reference — contact c2 1" alt="FlambeGate reference — contact c2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-f1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-f1-0.png" title="FlambeGate reference — contact f1 0" alt="FlambeGate reference — contact f1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-f1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-f1-1.png" title="FlambeGate reference — contact f1 1" alt="FlambeGate reference — contact f1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-f1-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-f1-2.png" title="FlambeGate reference — contact f1 2" alt="FlambeGate reference — contact f1 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-f1-3" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-f1-3.png" title="FlambeGate reference — contact f1 3" alt="FlambeGate reference — contact f1 3" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-fid1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-fid1-0.png" title="FlambeGate reference — contact fid1 0" alt="FlambeGate reference — contact fid1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-fid2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-fid2-0.png" title="FlambeGate reference — contact fid2 0" alt="FlambeGate reference — contact fid2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-fid3-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-fid3-0.png" title="FlambeGate reference — contact fid3 0" alt="FlambeGate reference — contact fid3 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-fid4-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-fid4-0.png" title="FlambeGate reference — contact fid4 0" alt="FlambeGate reference — contact fid4 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-h1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-h1-0.png" title="FlambeGate reference — contact h1 0" alt="FlambeGate reference — contact h1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-h2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-h2-0.png" title="FlambeGate reference — contact h2 0" alt="FlambeGate reference — contact h2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-0.png" title="FlambeGate reference — contact j1 0" alt="FlambeGate reference — contact j1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-1.png" title="FlambeGate reference — contact j1 1" alt="FlambeGate reference — contact j1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-2.png" title="FlambeGate reference — contact j1 2" alt="FlambeGate reference — contact j1 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-3" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-3.png" title="FlambeGate reference — contact j1 3" alt="FlambeGate reference — contact j1 3" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-4" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-4.png" title="FlambeGate reference — contact j1 4" alt="FlambeGate reference — contact j1 4" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j1-5" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j1-5.png" title="FlambeGate reference — contact j1 5" alt="FlambeGate reference — contact j1 5" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j2-0.png" title="FlambeGate reference — contact j2 0" alt="FlambeGate reference — contact j2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j2-1.png" title="FlambeGate reference — contact j2 1" alt="FlambeGate reference — contact j2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j2-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j2-2.png" title="FlambeGate reference — contact j2 2" alt="FlambeGate reference — contact j2 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j3-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j3-0.png" title="FlambeGate reference — contact j3 0" alt="FlambeGate reference — contact j3 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j3-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j3-1.png" title="FlambeGate reference — contact j3 1" alt="FlambeGate reference — contact j3 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-0.png" title="FlambeGate reference — contact j4 0" alt="FlambeGate reference — contact j4 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-1.png" title="FlambeGate reference — contact j4 1" alt="FlambeGate reference — contact j4 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-2.png" title="FlambeGate reference — contact j4 2" alt="FlambeGate reference — contact j4 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-3" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-3.png" title="FlambeGate reference — contact j4 3" alt="FlambeGate reference — contact j4 3" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-4" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-4.png" title="FlambeGate reference — contact j4 4" alt="FlambeGate reference — contact j4 4" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-j4-5" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-j4-5.png" title="FlambeGate reference — contact j4 5" alt="FlambeGate reference — contact j4 5" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q1-0.png" title="FlambeGate reference — contact q1 0" alt="FlambeGate reference — contact q1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q1-1.png" title="FlambeGate reference — contact q1 1" alt="FlambeGate reference — contact q1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q1-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q1-2.png" title="FlambeGate reference — contact q1 2" alt="FlambeGate reference — contact q1 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q2-0.png" title="FlambeGate reference — contact q2 0" alt="FlambeGate reference — contact q2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q2-1.png" title="FlambeGate reference — contact q2 1" alt="FlambeGate reference — contact q2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q2-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q2-2.png" title="FlambeGate reference — contact q2 2" alt="FlambeGate reference — contact q2 2" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q2-3" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q2-3.png" title="FlambeGate reference — contact q2 3" alt="FlambeGate reference — contact q2 3" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-q2-4" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-q2-4.png" title="FlambeGate reference — contact q2 4" alt="FlambeGate reference — contact q2 4" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r1-0.png" title="FlambeGate reference — contact r1 0" alt="FlambeGate reference — contact r1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r1-1.png" title="FlambeGate reference — contact r1 1" alt="FlambeGate reference — contact r1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r2-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r2-0.png" title="FlambeGate reference — contact r2 0" alt="FlambeGate reference — contact r2 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r2-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r2-1.png" title="FlambeGate reference — contact r2 1" alt="FlambeGate reference — contact r2 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r3-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r3-0.png" title="FlambeGate reference — contact r3 0" alt="FlambeGate reference — contact r3 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r3-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r3-1.png" title="FlambeGate reference — contact r3 1" alt="FlambeGate reference — contact r3 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r4-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r4-0.png" title="FlambeGate reference — contact r4 0" alt="FlambeGate reference — contact r4 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-r4-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-r4-1.png" title="FlambeGate reference — contact r4 1" alt="FlambeGate reference — contact r4 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-u1-0" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-u1-0.png" title="FlambeGate reference — contact u1 0" alt="FlambeGate reference — contact u1 0" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-u1-1" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-u1-1.png" title="FlambeGate reference — contact u1 1" alt="FlambeGate reference — contact u1 1" caption="Front-side component reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-source-derived-contact-u1-2" src="/images/extensions/historical-flambegate/guides/source-derived-annotated/contact-u1-2.png" title="FlambeGate reference — contact u1 2" alt="FlambeGate reference — contact u1 2" caption="Front-side component reference." width=420 %}


</details>

<details markdown="1">
<summary>Functional references</summary>

### Board functions and contact positions

Start with the power and trigger connectors, fuse and switching components. The auxiliary control ground and power passthrough are separately labelled; do not infer a connection from their similar appearance. Contact markers do not show cable mating orientation.

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j3-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/j3-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/j1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j1-functions-02" src="/images/extensions/historical-flambegate/guides/functional-reference/j1-functions-02.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-f1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/f1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-q1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/q1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j4-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/j4-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j4-functions-02" src="/images/extensions/historical-flambegate/guides/functional-reference/j4-functions-02.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-j2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/j2-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-u1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/u1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-q2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/q2-functions-01.png" title="FlambeGate — Underside projected from front; not mirrored rear view" alt="FlambeGate — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

<details>
<summary>Circuit components, mounting and fiducial details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-c2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/c2-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-r3-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/r3-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-r2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/r2-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-c1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/c1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-r4-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/r4-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-fid1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/fid1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-h2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/h2-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-h1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/h1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-r1-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/r1-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-fid3-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/fid3-functions-01.png" title="FlambeGate — Component side; back parts excluded" alt="FlambeGate — Component side; back parts excluded — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-fid4-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/fid4-functions-01.png" title="FlambeGate — Underside projected from front; not mirrored rear view" alt="FlambeGate — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-function-fid2-functions-01" src="/images/extensions/historical-flambegate/guides/functional-reference/fid2-functions-01.png" title="FlambeGate — Underside projected from front; not mirrored rear view" alt="FlambeGate — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Component reference. Numbered markers locate contacts, not cable mating positions." width=420 %}

</details>

<details>
<summary>Pad locators</summary>


</details>

### Contact reference

These locators show the pad positions and board outline, without component artwork.

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-overview" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-overview.png" title="Legacy FlambeGate" alt="Legacy FlambeGate — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-j1-1-2" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-j1-1-2.png" title="J1 · Power input" alt="J1 · Power input — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-j4-1-2" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-j4-1-2.png" title="J4 · Power output" alt="J4 · Power output — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-j2-1-3" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-j2-1-3.png" title="J2 · Trigger input" alt="J2 · Trigger input — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-j3-1-2" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-j3-1-2.png" title="J3 · 5V rail" alt="J3 · 5V rail — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-power" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-power.png" title="Fused power path" alt="Fused power path — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-trigger" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-trigger.png" title="Trigger gate path" alt="Trigger gate path — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-switch" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-switch.png" title="Power-switch control" alt="Power-switch control — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-regulator" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-regulator.png" title="Local regulator" alt="Local regulator — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-return" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-return.png" title="Return-path warning" alt="Return-path warning — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-extra" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-extra.png" title="Power connector extra pads" alt="Power connector extra pads — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-mounts" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-flambegate-reader-compact-fiducials" src="/images/extensions/historical-flambegate/guides/native-contact-reference/reader-compact-fiducials.png" title="Assembly fiducials" alt="Assembly fiducials — contact locator" caption="Contact reference showing pads and board outline. Use it together with the companion sheets." width=420 %}


[Download the unmodified native source, upstream licence and drawing notice](/images/extensions/historical-flambegate/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.


The following table lists the PCB footprint pad nets. It is an inventory of named pads, not proof of copper continuity.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| PCB reference | Value / control | Contact → net |
|---|---|---|
| J3 | Conn_01x02_Male | 1 → +5V; 2 → GND |
| J1 | PowerIn | 1 → Passthru; 2 → Net-(J1-Pad2) |
| F1 | Fuse_Small | 1 → Net-(J1-Pad2); 2 → +24V |
| Q1 | 2N7002 | 1 → Net-(Q1-Pad1); 2 → GND; 3 → Net-(Q1-Pad3) |
| J4 | PowerOut | 1 → Passthru; 2 → Net-(Q2-Pad5) |
| R4 | 21.5k | 1 → Net-(Q2-Pad4); 2 → +24V |
| J2 | TriggerIn | 1 → Net-(J2-Pad1); 2 → +5V; 3 → GND |
| U1 | R-78E5.0-1.0 | 1 → +24V; 2 → GND; 3 → +5V |
| Q2 | WSD30L40DN | 1 → +24V; 2 → +24V; 3 → +24V; 4 → Net-(Q2-Pad4); 5 → Net-(Q2-Pad5) |

</div>

</details>


</details>


</details>

## Practical use with Smoothieboard V2 Prime

The intended practical example is an independent overtemperature comparator shutting off a heater’s high-side supply while Smoothie continues its ordinary temperature control. Before building that circuit, determine whether the trigger is an enable or trip, the output’s state for a broken trigger cable and loss of 5 V, the passthrough conductor’s role, fuse selection and the installed heater current. Do not wire a Prime GPIO to J2 until you know the trigger voltage, current and polarity.

## Firmware and setup

### Standalone trigger versus optional Prime halt workflow

J2 TriggerIn is 1 signal, 2 +5 V, 3 ground; power J1/J4 is a separate switching path.
FlambeGate source J2 TriggerIn has1signal/2+5 V/3ground; power J1/J4 is a separate switching path.

Standalone comparator/trigger operation needs no Smoothieware configuration or board driver. Optional Prime integration is a separate application: define its signal direction, polarity, threshold, loss-of-signal state and reset behavior before assigning a GPIO.

The ButtonBox KILL behavior broadcasts a software halt; Switch with `ignore_on_halt=false` applies its handled-halt state. Neither guarantees power disconnection or independent shutdown. Do not use M112, a guessed enable GPIO or a software command as fire protection. An integration must define which board terminal is observed or driven, its active and lost-signal states, whether acknowledgement or reset is needed, the physical independent shutdown path, and the exact powered equipment. The three-pin MCU header names alone do not define these.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Original files and attribution

Single-channel MOSFET pages describe ordinary low-side load switching. This separate high-side fused shutoff topology is not a duplicate.

- [HighSideFet.kicad_pcb](https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_pcb) — original PCB source.
- [HighSideFet.kicad_sch](https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_sch) — original schematic source.
- [README.md](https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/README.md) — original author notes.

The repository metadata identifies GPL-3.0; preserve and inspect the matching license and source notices before redistribution.

[All extension boards](/extension-boards)
