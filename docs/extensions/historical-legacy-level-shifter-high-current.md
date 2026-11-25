---
layout: default
title: "Legacy high-current level shifter"
permalink: /extensions/historical-legacy-level-shifter-high-current
---

# Legacy high-current level shifter

This board converts seven host GPIO outputs to a higher-voltage, buffered output bank. It is unidirectional from host to peripheral, not an input adapter or bidirectional bus translator. Typical use is driving compatible higher-voltage control inputs.

## How the circuit works

Each channel contains two inverting stages, so its intended overall action is non-inverting. In the P1 channel, GPIO6 reaches Q1’s gate through JP1; R2 (1 kΩ) pulls that gate toward ground. Q1 is an FDN339AN with its source grounded. Its drain drives the gates of the complementary output pair, Q5 (SI2301) and Q6 (FDN339AN), and R1 (1 kΩ) pulls this intermediate node toward VDD. Q5’s source is at VDD, Q6’s source is at ground, and their drains join P1.3.

A high input turns Q1 on and pulls the intermediate node low, selecting the high-side output transistor. A low input releases that node to R1, selecting the low-side output transistor. The output is therefore intended to be driven toward VDD or ground; it is not an open-drain or bidirectional interface. These are circuit-operation inferences from the retained transistor topology, not measured performance. Verify the fitted SI2301 variant, gate-voltage limits, crossover behavior and load/current envelope before use. The non-sequential channel mapping matters: P1 uses GPIO6, not GPIO1.

## Documented source and compatibility

This guide describes the [retained original Smoothieboard2 source](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/level-shifter), not a modern board with a similar purpose. The original host generation predates Smoothieboard V2 Prime. Connector compatibility must be established contact by contact. Production, assembly availability and physical testing are not established by these files.

## Power, signals and controls

P9/P10 carry 3.3 V, 5 V, ground and GPIO1–7. P1–P7 each expose VDD, ground and a channel output. P8.1/.2 are ground/external VPP. D1/D2 combine external and host 5 V into VDD; they do not isolate grounds. The use notes describe 5–12 V outputs, 2 A per channel and 3 A combined, limited by a diode. These unqualified historical claims must not be used as a continuous load rating; do not follow suggestions to push a diode toward 120 °C. JP1–JP7 interrupt individual logic paths; their channel order is non-sequential (see table).

### Do not use the historical 12 V claim

**The source's 5–12 V statement conflicts with the selected transistor gate limit. Do not energize this board at 12 V on that claim.** The [FDN339AN datasheet](https://www.onsemi.com/pdf/datasheet/fdn339an-d.pdf) gives an absolute gate-to-source limit of ±8 V. In the retained GPIO1 channel, P8.2 VPP feeds D1 and then VDD; R8 (1 kΩ) pulls the shared Q11/Q12 gate toward VDD while Q12's source is grounded. With input Q4 off, no recovered clamp or regulator keeps that gate below 8 V. The series diode is not an 8 V regulator.

The ±8 V absolute maximum is not a recommended input rating. Even a proposed 5 V bench requires fitted SI2301 identity, supply/transient margin, switching crossover and load-current review. No corrected, qualified matching assembly has been established by the bounded local source-history check.

### Annotated reconstructed reference

These functional sheets add connector, jumper and circuit explanations to a reconstruction of the selected historical board. They use the retained native contact coordinates and the pill/callout treatment. **They are not the missing original populated abstract from smoothie-diagrams.** Component bodies are source-derived envelopes, not evidence of actual fitted parts or mating geometry. Keep the power limits above in view; no powered installation is qualified.

The host header and GPIO1 jumper are shown first. Expand the remaining sheets for every other connector, jumper and circuit component. The jumpers do not follow GPIO numerical order: GPIO1 uses JP4 and output P4.

### Board reference

These function-labelled views retain the selected native source geometry. They are newly source-derived references, not a verified mating view.

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-00-overview" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-d1-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-d1-1.png" title="D1 1" alt="D1 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-d2-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-d2-1.png" title="D2 1" alt="D2 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp1-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp1-1.png" title="Jp1 1" alt="Jp1 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp2-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp2-1.png" title="Jp2 1" alt="Jp2 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp3-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp3-1.png" title="Jp3 1" alt="Jp3 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp4-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp4-1.png" title="Jp4 1" alt="Jp4 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp5-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp5-1.png" title="Jp5 1" alt="Jp5 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp6-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp6-1.png" title="Jp6 1" alt="Jp6 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-jp7-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-jp7-1.png" title="Jp7 1" alt="Jp7 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p1-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p1-1.png" title="P1 1" alt="P1 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p10-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p10-1.png" title="P10 1" alt="P10 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p10-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p10-2.png" title="P10 2" alt="P10 2 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p10-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p10-3.png" title="P10 3" alt="P10 3 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p2-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p2-1.png" title="P2 1" alt="P2 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p3-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p3-1.png" title="P3 1" alt="P3 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p4-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p4-1.png" title="P4 1" alt="P4 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p5-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p5-1.png" title="P5 1" alt="P5 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p6-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p6-1.png" title="P6 1" alt="P6 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p7-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p7-1.png" title="P7 1" alt="P7 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p8-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p8-1.png" title="P8 1" alt="P8 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p9-1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p9-1.png" title="P9 1" alt="P9 1 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p9-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p9-2.png" title="P9 2" alt="P9 2 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-compact-function-reader-p9-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/source-derived-reader/reader-p9-3.png" title="P9 3" alt="P9 3 for the selected historical legacy-level-shifter-high-current source" caption="Source-derived reference for the documented revision. Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Original contact audits and supplementary source views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p9-instance-46-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p9-instance-46-functions-01.png" title="P9 · Parallel host GPIO interface" alt="P9 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p9-instance-46-functions-02" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p9-instance-46-functions-02.png" title="P9 · Parallel host GPIO interface" alt="P9 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p9-instance-46-functions-03" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p9-instance-46-functions-03.png" title="P9 · Parallel host GPIO interface" alt="P9 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp4-instance-48-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp4-instance-48-functions-01.png" title="JP4 · Input link; P4" alt="JP4 · Input link; P4 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

<details>
<summary>All other connector, jumper and circuit-function sheets</summary>

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-5,5-instance-1-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/5%2C5-instance-1-functions-01.png" title="5,5 · Source circuit contact" alt="5,5 · Source circuit contact — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p8-instance-2-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p8-instance-2-functions-01.png" title="P8 · External output-rail supply" alt="P8 · External output-rail supply — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c1-instance-3-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c1-instance-3-functions-01.png" title="C1 · 100nF VPP bypass" alt="C1 · 100nF VPP bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c2-instance-4-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c2-instance-4-functions-01.png" title="C2 · 10uF VPP bypass" alt="C2 · 10uF VPP bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c3-instance-5-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c3-instance-5-functions-01.png" title="C3 · 100nF VDD bypass" alt="C3 · 100nF VDD bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c4-instance-6-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c4-instance-6-functions-01.png" title="C4 · 10uF VDD bypass" alt="C4 · 10uF VDD bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q1-instance-7-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q1-instance-7-functions-01.png" title="Q1 · P1 input inverter" alt="Q1 · P1 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q2-instance-8-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q2-instance-8-functions-01.png" title="Q2 · P2 input inverter" alt="Q2 · P2 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q3-instance-9-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q3-instance-9-functions-01.png" title="Q3 · P3 input inverter" alt="Q3 · P3 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q4-instance-10-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q4-instance-10-functions-01.png" title="Q4 · P4 input inverter" alt="Q4 · P4 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q5-instance-11-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q5-instance-11-functions-01.png" title="Q5 · P1 PMOS pull-up" alt="Q5 · P1 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q6-instance-12-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q6-instance-12-functions-01.png" title="Q6 · P1 NMOS pull-down" alt="Q6 · P1 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q7-instance-13-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q7-instance-13-functions-01.png" title="Q7 · P2 PMOS pull-up" alt="Q7 · P2 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q8-instance-14-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q8-instance-14-functions-01.png" title="Q8 · P2 NMOS pull-down" alt="Q8 · P2 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q9-instance-15-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q9-instance-15-functions-01.png" title="Q9 · P3 PMOS pull-up" alt="Q9 · P3 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q10-instance-16-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q10-instance-16-functions-01.png" title="Q10 · P3 NMOS pull-down" alt="Q10 · P3 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q11-instance-17-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q11-instance-17-functions-01.png" title="Q11 · P4 PMOS pull-up" alt="Q11 · P4 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q12-instance-18-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q12-instance-18-functions-01.png" title="Q12 · P4 NMOS pull-down" alt="Q12 · P4 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q13-instance-19-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q13-instance-19-functions-01.png" title="Q13 · P5 input inverter" alt="Q13 · P5 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q14-instance-20-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q14-instance-20-functions-01.png" title="Q14 · P6 input inverter" alt="Q14 · P6 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q15-instance-21-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q15-instance-21-functions-01.png" title="Q15 · P7 input inverter" alt="Q15 · P7 input inverter — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q16-instance-22-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q16-instance-22-functions-01.png" title="Q16 · P5 PMOS pull-up" alt="Q16 · P5 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q17-instance-23-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q17-instance-23-functions-01.png" title="Q17 · P5 NMOS pull-down" alt="Q17 · P5 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q18-instance-24-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q18-instance-24-functions-01.png" title="Q18 · P6 PMOS pull-up" alt="Q18 · P6 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q19-instance-25-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q19-instance-25-functions-01.png" title="Q19 · P6 NMOS pull-down" alt="Q19 · P6 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q20-instance-26-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q20-instance-26-functions-01.png" title="Q20 · P7 PMOS pull-up" alt="Q20 · P7 PMOS pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-q21-instance-27-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/q21-instance-27-functions-01.png" title="Q21 · P7 NMOS pull-down" alt="Q21 · P7 NMOS pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r1-instance-28-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r1-instance-28-functions-01.png" title="R1 · 1k inverter pull-up" alt="R1 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r2-instance-29-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r2-instance-29-functions-01.png" title="R2 · 1k input pull-down" alt="R2 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r3-instance-30-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r3-instance-30-functions-01.png" title="R3 · 1k input pull-down" alt="R3 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r4-instance-31-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r4-instance-31-functions-01.png" title="R4 · 1k input pull-down" alt="R4 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r5-instance-32-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r5-instance-32-functions-01.png" title="R5 · 1k input pull-down" alt="R5 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r6-instance-33-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r6-instance-33-functions-01.png" title="R6 · 1k inverter pull-up" alt="R6 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r7-instance-34-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r7-instance-34-functions-01.png" title="R7 · 1k inverter pull-up" alt="R7 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r8-instance-35-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r8-instance-35-functions-01.png" title="R8 · 1k inverter pull-up" alt="R8 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r9-instance-36-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r9-instance-36-functions-01.png" title="R9 · 1k input pull-down" alt="R9 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r10-instance-37-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r10-instance-37-functions-01.png" title="R10 · 1k input pull-down" alt="R10 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r11-instance-38-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r11-instance-38-functions-01.png" title="R11 · 1k input pull-down" alt="R11 · 1k input pull-down — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r12-instance-39-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r12-instance-39-functions-01.png" title="R12 · 1k inverter pull-up" alt="R12 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r13-instance-40-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r13-instance-40-functions-01.png" title="R13 · 1k inverter pull-up" alt="R13 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-r14-instance-41-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/r14-instance-41-functions-01.png" title="R14 · 1k inverter pull-up" alt="R14 · 1k inverter pull-up — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c5-instance-42-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c5-instance-42-functions-01.png" title="C5 · 100nF +5V bypass" alt="C5 · 100nF +5V bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-c6-instance-43-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/c6-instance-43-functions-01.png" title="C6 · 10uF +5V bypass" alt="C6 · 10uF +5V bypass — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p10-instance-44-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p10-instance-44-functions-01.png" title="P10 · Parallel host GPIO interface" alt="P10 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p10-instance-44-functions-02" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p10-instance-44-functions-02.png" title="P10 · Parallel host GPIO interface" alt="P10 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p10-instance-44-functions-03" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p10-instance-44-functions-03.png" title="P10 · Parallel host GPIO interface" alt="P10 · Parallel host GPIO interface — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp1-instance-45-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp1-instance-45-functions-01.png" title="JP1 · Input link; P1" alt="JP1 · Input link; P1 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp3-instance-47-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp3-instance-47-functions-01.png" title="JP3 · Input link; P3" alt="JP3 · Input link; P3 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp5-instance-49-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp5-instance-49-functions-01.png" title="JP5 · Input link; P5" alt="JP5 · Input link; P5 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp6-instance-50-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp6-instance-50-functions-01.png" title="JP6 · Input link; P6" alt="JP6 · Input link; P6 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp7-instance-51-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp7-instance-51-functions-01.png" title="JP7 · Input link; P7" alt="JP7 · Input link; P7 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-jp2-instance-52-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/jp2-instance-52-functions-01.png" title="JP2 · Input link; P2" alt="JP2 · Input link; P2 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p6-instance-53-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p6-instance-53-functions-01.png" title="P6 · Driven output; GPIO5" alt="P6 · Driven output; GPIO5 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p5-instance-54-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p5-instance-54-functions-01.png" title="P5 · Driven output; GPIO3" alt="P5 · Driven output; GPIO3 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p4-instance-55-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p4-instance-55-functions-01.png" title="P4 · Driven output; GPIO1" alt="P4 · Driven output; GPIO1 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p3-instance-56-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p3-instance-56-functions-01.png" title="P3 · Driven output; GPIO2" alt="P3 · Driven output; GPIO2 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p2-instance-57-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p2-instance-57-functions-01.png" title="P2 · Driven output; GPIO4" alt="P2 · Driven output; GPIO4 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p1-instance-58-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p1-instance-58-functions-01.png" title="P1 · Driven output; GPIO6" alt="P1 · Driven output; GPIO6 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-p7-instance-59-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/p7-instance-59-functions-01.png" title="P7 · Driven output; GPIO7" alt="P7 · Driven output; GPIO7 — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-d1-instance-60-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/d1-instance-60-functions-01.png" title="D1 · Supply OR Schottky diode" alt="D1 · Supply OR Schottky diode — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-high-current-reconstructed-d2-instance-61-functions-01" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/d2-instance-61-functions-01.png" title="D2 · Supply OR Schottky diode" alt="D2 · Supply OR Schottky diode — reconstructed source reference" caption="Reconstructed source-derived bodies and functional callouts. Native pad locations are preserved; component fit, original canonical artwork and complete Prime wiring remain open." width=420 %}

</details>

[Drawing licence and modification notice](/images/extensions/historical-legacy-level-shifter-high-current/guides/reconstructed-reference/NOTICE.md). The linked SVG files are editable drawing sources; the matching native design and upstream notices remain available below.

<details>
<summary>Original native-contact locators and matching design-source download</summary>

#
</details>


</details>

## Source-contact reference — canonical abstract pending

These newly drawn locators preserve the selected native pad positions and board outline. They do not contain populated component artwork and do not satisfy the required canonical abstract diagram. All focused sheets and the boundary notice belong together.

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-overview" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-overview.png" title="Legacy driven level shifter" alt="Legacy driven level shifter — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p9-1-5" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p9-1-5.png" title="P9 · Host / parallel bus" alt="P9 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p9-6-10" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p9-6-10.png" title="P9 · Host / parallel bus" alt="P9 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p9-11-11" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p9-11-11.png" title="P9 · Host / parallel bus" alt="P9 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p10-1-5" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p10-1-5.png" title="P10 · Host / parallel bus" alt="P10 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p10-6-10" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p10-6-10.png" title="P10 · Host / parallel bus" alt="P10 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p10-11-11" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p10-11-11.png" title="P10 · Host / parallel bus" alt="P10 · Host / parallel bus — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p8-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p8-1-2.png" title="P8 · External supply" alt="P8 · External supply — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p1-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p1-1-3.png" title="P1 · Driven channel1" alt="P1 · Driven channel1 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp1-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp1-1-2.png" title="JP1 · Input connection" alt="JP1 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p2-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p2-1-3.png" title="P2 · Driven channel2" alt="P2 · Driven channel2 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp2-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp2-1-2.png" title="JP2 · Input connection" alt="JP2 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p3-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p3-1-3.png" title="P3 · Driven channel3" alt="P3 · Driven channel3 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp3-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp3-1-2.png" title="JP3 · Input connection" alt="JP3 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p4-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p4-1-3.png" title="P4 · Driven channel4" alt="P4 · Driven channel4 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp4-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp4-1-2.png" title="JP4 · Input connection" alt="JP4 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p5-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p5-1-3.png" title="P5 · Driven channel5" alt="P5 · Driven channel5 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp5-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp5-1-2.png" title="JP5 · Input connection" alt="JP5 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p6-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p6-1-3.png" title="P6 · Driven channel6" alt="P6 · Driven channel6 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp6-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp6-1-2.png" title="JP6 · Input connection" alt="JP6 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-p7-1-3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-p7-1-3.png" title="P7 · Driven channel7" alt="P7 · Driven channel7 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-jp7-1-2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-jp7-1-2.png" title="JP7 · Input connection" alt="JP7 · Input connection — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel1" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel1.png" title="Driven channel 1" alt="Driven channel 1 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel2" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel2.png" title="Driven channel 2" alt="Driven channel 2 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel3" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel3.png" title="Driven channel 3" alt="Driven channel 3 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel4" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel4.png" title="Driven channel 4" alt="Driven channel 4 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel5" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel5.png" title="Driven channel 5" alt="Driven channel 5 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel6" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel6.png" title="Driven channel 6" alt="Driven channel 6 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-channel7" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-channel7.png" title="Driven channel 7" alt="Driven channel 7 — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-power" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-power.png" title="Drive-supply paths" alt="Drive-supply paths — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-extra" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-extra.png" title="Repeated / blank link pads" alt="Repeated / blank link pads — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-unknown" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-unknown.png" title="Unresolved native feature" alt="Unresolved native feature — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-legacy-level-shifter-high-current-reader-compact-boundary" src="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/reader-compact-boundary.png" title="Drawing boundary" alt="Drawing boundary — exact native contact locator" caption="Incomplete source-contact reference: native pads and board outline, not the required canonical populated abstract. Use all companion sheets. Host wiring and fitted geometry remain open." width=420 %}

[Download matching unmodified native source, upstream licence and drawing notice](/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/native-source-and-notices.zip). Source revision: `52ab340de33180a975b25f856c161993488e6ace`. Retain the included source licence and notices with derivatives.


The required annotated historical board diagram is not yet available. A modern replacement’s abstract is not an accurate substitute. The contact inventory below records source connectivity; it does not verify physical cable orientation or routed-board continuity. A mechanical pad/net-name comparison found 0 missing or differing netlist nodes and 0 PCB-only nodes. Matching names do not verify copper continuity.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Reference | Source value / role | Contact → retained net |
|---|---|---|
| P1 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P1-Pad3) |
| P10 | CONN_02X05 | 1 → +3V3; 2 → +5V; 3 → GPIO1; 4 → GPIO2; 5 → GPIO3; 6 → GPIO4; 7 → GPIO5; 8 → GPIO6; 9 → GPIO7; 10 → GND |
| P8 | CONN_01X02 | 1 → GND; 2 → VPP |
| D1 | FSV12120V | 1 → VDD; 2 → VPP |
| D2 | FSV12120V | 1 → VDD; 2 → +5V |
| P9 | CONN_02X05 | 1 → +3V3; 2 → +5V; 3 → GPIO1; 4 → GPIO2; 5 → GPIO3; 6 → GPIO4; 7 → GPIO5; 8 → GPIO6; 9 → GPIO7; 10 → GND |
| P2 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P2-Pad3) |
| P3 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P3-Pad3) |
| P4 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P4-Pad3) |
| P5 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P5-Pad3) |
| P6 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P6-Pad3) |
| P7 | CONN_01X03 | 1 → VDD; 2 → GND; 3 → Net-(P7-Pad3) |
| JP4 | JUMPER | 1 → GPIO1; 2 → Net-(JP4-Pad2) |
| JP3 | JUMPER | 1 → GPIO2; 2 → Net-(JP3-Pad2) |
| JP2 | JUMPER | 1 → GPIO4; 2 → Net-(JP2-Pad2) |
| JP1 | JUMPER | 1 → GPIO6; 2 → Net-(JP1-Pad2) |
| JP5 | JUMPER | 1 → GPIO3; 2 → Net-(JP5-Pad2) |
| JP6 | JUMPER | 1 → GPIO5; 2 → Net-(JP6-Pad2) |
| JP7 | JUMPER | 1 → GPIO7; 2 → Net-(JP7-Pad2) |
| Q1 | FDN339AN | 1 → Net-(JP1-Pad2); 2 → GND; 3 → Net-(Q1-Pad3) |
| Q2 | FDN339AN | 1 → Net-(JP2-Pad2); 2 → GND; 3 → Net-(Q2-Pad3) |
| Q3 | FDN339AN | 1 → Net-(JP3-Pad2); 2 → GND; 3 → Net-(Q10-Pad1) |
| Q4 | FDN339AN | 1 → Net-(JP4-Pad2); 2 → GND; 3 → Net-(Q11-Pad1) |
| Q5 | SI2301 | 1 → Net-(Q1-Pad3); 2 → VDD; 3 → Net-(P1-Pad3) |
| Q6 | FDN339AN | 1 → Net-(Q1-Pad3); 2 → GND; 3 → Net-(P1-Pad3) |
| Q7 | SI2301 | 1 → Net-(Q2-Pad3); 2 → VDD; 3 → Net-(P2-Pad3) |
| Q8 | FDN339AN | 1 → Net-(Q2-Pad3); 2 → GND; 3 → Net-(P2-Pad3) |
| Q9 | SI2301 | 1 → Net-(Q10-Pad1); 2 → VDD; 3 → Net-(P3-Pad3) |
| Q10 | FDN339AN | 1 → Net-(Q10-Pad1); 2 → GND; 3 → Net-(P3-Pad3) |
| Q11 | SI2301 | 1 → Net-(Q11-Pad1); 2 → VDD; 3 → Net-(P4-Pad3) |
| Q12 | FDN339AN | 1 → Net-(Q11-Pad1); 2 → GND; 3 → Net-(P4-Pad3) |
| Q13 | FDN339AN | 1 → Net-(JP5-Pad2); 2 → GND; 3 → Net-(Q13-Pad3) |
| Q14 | FDN339AN | 1 → Net-(JP6-Pad2); 2 → GND; 3 → Net-(Q14-Pad3) |
| Q15 | FDN339AN | 1 → Net-(JP7-Pad2); 2 → GND; 3 → Net-(Q15-Pad3) |
| Q16 | SI2301 | 1 → Net-(Q13-Pad3); 2 → VDD; 3 → Net-(P5-Pad3) |
| Q17 | FDN339AN | 1 → Net-(Q13-Pad3); 2 → GND; 3 → Net-(P5-Pad3) |
| Q18 | SI2301 | 1 → Net-(Q14-Pad3); 2 → VDD; 3 → Net-(P6-Pad3) |
| Q19 | FDN339AN | 1 → Net-(Q14-Pad3); 2 → GND; 3 → Net-(P6-Pad3) |
| Q20 | SI2301 | 1 → Net-(Q15-Pad3); 2 → VDD; 3 → Net-(P7-Pad3) |
| Q21 | FDN339AN | 1 → Net-(Q15-Pad3); 2 → GND; 3 → Net-(P7-Pad3) |

</div>

</details>


## Connect and try it

A suitable first application is one high-impedance 5 V control input. Establish the exact buffer input/output connection for the selected channel before closing its jumper. The retained circuit uses FDN339AN and SI2301 discrete transistor stages, not a buffer IC. The input bank can correspond to Prime GF contacts 3–9 and .10 ground, but shared host rail limits and external-supply diode direction require reconciliation. Never connect a 5–12 V output back to a Prime GPIO.

### Practical Prime wiring diagram — pending

The complete instructional wiring diagram remains incomplete. The proposed or conditional steps above must not be treated as an accepted cable drawing. Prime GF/J37 contact names, where used, refer to the host contact map: 1 limited 3.3 V, 2 limited 5 V, 3 PB1, 4 PJ4, 5 PA4, 6 PG0, 7 PJ3, 8 PG1, 9 PJ2, 10 ground. Pin numbers are connector contacts, not MCU package contacts. A supply label does not establish an available current budget.

## Smoothieware use

### Selected GPIO1 static-request bench
This is an active transistor output, not the passive BSS138 translator. P9.3 and P10.3 carry GPIO1; JP4 selects the source channel path. Prime GF/J37.3 PB1 can name that input after exact jumper population and supply/current limits are qualified. P9/P10.10 are signal ground; VPP/VDD are independent source rails and must not be inferred from the GPIO ribbon. The retained topology intends a non-inverting transfer, but fitted transistor/crossover/thermal behavior is not accepted.

With the board and all loads disconnected, a host-only high-impedance instrument can first verify the requested GPIO states:

```ini
[switch]
translated_request.enable = true
translated_request.output_pin = PB1
translated_request.output_type = digital
translated_request.input_on_command = M42
translated_request.input_off_command = M43
translated_request.subcode = 21
translated_request.startup_state = false
translated_request.halt_set_to = false
translated_request.ignore_on_halt = false
```

Send `M43.21` for LOW, `M42.21` for HIGH, then `M43.21`. Keep the board disconnected for this host-request test. A board-connected output test is a separate, currently incomplete installation. Software LOW at initialization/handled halt does not prove reset/power-loss state. No board-specific protocol driver is required. A named load and complete current/fault policy are still missing; email **wolf.arthur@gamil.com** if required application support is unavailable.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Remaining source questions

Discrete FDN339AN/SI2301 transistor transfer, inversion and channel mapping; jumper populations; safe combined current and diode temperature; supply sharing with Prime. Both diagrams, final revision-to-layout reconciliation and normal/narrow-width rendered review remain unaccepted.

## Original files and attribution

The linked original source folder contains the retained CAD, images, fabrication output and any author notes. Keep existing source galleries alongside this guide. Historical project files retain their original attribution; an absent per-file license must not be interpreted as public-domain permission. The retained native source carries the CERN-OHL-1.2 notice included in the matching source download. Reconstructed drawing sources retain that licence and their modification notice; this does not establish rights for unrelated historical art.

[All extension boards](/extension-boards)
