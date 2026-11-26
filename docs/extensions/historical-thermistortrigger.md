---
layout: default
title: "ThermistorTrigger \u2014 Dual thermistor hardware setpoint trigger"
permalink: /extensions/historical-thermistortrigger
---

# ThermistorTrigger

ThermistorTrigger buffers two thermistor signals and compares them against hardware-adjusted thresholds. Its digital outputs are intended to go low on overtemperature and drive an independent shutoff or a controller halt input. It is neither a PT100 converter nor a passive thermistor adapter.

## Compatibility and use limits

This guide covers [ThermistorComparator.kicad_pcb](https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_pcb). It is a separate related hardware design; check Prime compatibility contact by contact. Do not treat it as a certified safety device or rely on it to cover any single fault.

## Operation, power and connectors

The README explains the buffer/comparator use; the PCB contains LMV324, a MAX6070BAUT33+T reference and TPD4E1U06DCKR protection. The two sensor connectors are J1/J2 with AGND on contact 2. Buffered analog outputs J3/J4 carry A1_out/A2_out on contact 1 and AGND on contact 2. J5/J6 each carry ground, +5 V and a trigger on contacts 1/2/3. R4 and R6 are 100 kΩ TC33X potentiometers, despite their R designators; their wipers set the two comparator references. NT1 joins GND/AGND physically as a net tie; do not replace analog-ground reasoning with a casual name match. NT2 is another explicit reference-domain net tie.

### Active outputs and reference circuit

J5.3 connects directly to U1.7 and J6.3 to U1.1. U1 is powered from 5 V; neither output has a fitted level translator. Do not connect these trigger outputs directly to a Prime GPIO on the assumption that they are 3.3 V signals. Check their output range, power-up behavior and receiver compatibility first. The `LMV324` value is generic, and do not count on hysteresis or saturation recovery from this op-amp comparison circuit.

Channel 1 first buffers the thermistor signal at U1.8/9, then passes through R7 to A1_out and the threshold stage. Channel 2 similarly uses U1.14/13 and R8. The [MAX6070 reference datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/max6070-max6071.pdf) identifies U3.5 as OUTS (sense) and U3.6 as OUTF (force). NT2 copper on the PCB joins them to the 3.3 V reference domain; NT2 is not a user voltage-selection jumper. NT1 joins analog and circuit ground, so the board is not galvanically isolated.

### Annotated connector and component reference

These drawings show the board outline, footprints, pads and graphics with function callouts. They are not a cable mating view, and they give no threshold adjustment procedure or safety-rated trip.

### Board reference

These function-labelled views show the board geometry. They are not a cable mating view.

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-00-overview" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader-compact/reader-00-overview.png" title="Board overview" alt="Board overview for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-00-mandatory-limits" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader-compact/reader-00-mandatory-limits.png" title="Mandatory connection limits" alt="Mandatory connection limits for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

<details markdown="1">
<summary>Connector and component functions</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-h1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-h1-1.png" title="H1 1" alt="H1 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-h2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-h2-1.png" title="H2 1" alt="H2 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-h3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-h3-1.png" title="H3 1" alt="H3 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-h4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-h4-1.png" title="H4 1" alt="H4 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j1-1.png" title="J1 1" alt="J1 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j2-1.png" title="J2 1" alt="J2 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j3-1.png" title="J3 1" alt="J3 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j4-1.png" title="J4 1" alt="J4 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j5-1.png" title="J5 1" alt="J5 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-j6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-j6-1.png" title="J6 1" alt="J6 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-nt1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-nt1-1.png" title="Nt1 1" alt="Nt1 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-r4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-r4-1.png" title="R4 1" alt="R4 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-r6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-r6-1.png" title="R6 1" alt="R6 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-r7-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-r7-1.png" title="R7 1" alt="R7 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-compact-function-reader-r8-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-reader/reader-r8-1.png" title="R8 1" alt="R8 1 for ThermistorTrigger" caption="Dashed leaders locate parts and contacts; they are not installation wires. Read the mandatory limits before making connections." width=1200 %}

</details>

<details markdown="1">
<summary>Contact details and supplementary views</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-00-overview" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/00-overview.png" title="thermistortrigger reference — 00 overview" alt="thermistortrigger reference — 00 overview" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-art36-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/art36-1.png" title="thermistortrigger reference — art36 1" alt="thermistortrigger reference — art36 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c1-1.png" title="thermistortrigger reference — c1 1" alt="thermistortrigger reference — c1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c2-1.png" title="thermistortrigger reference — c2 1" alt="thermistortrigger reference — c2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c3-1.png" title="thermistortrigger reference — c3 1" alt="thermistortrigger reference — c3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c4-1.png" title="thermistortrigger reference — c4 1" alt="thermistortrigger reference — c4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c5-1.png" title="thermistortrigger reference — c5 1" alt="thermistortrigger reference — c5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c6-1.png" title="thermistortrigger reference — c6 1" alt="thermistortrigger reference — c6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c7-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c7-1.png" title="thermistortrigger reference — c7 1" alt="thermistortrigger reference — c7 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-c8-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/c8-1.png" title="thermistortrigger reference — c8 1" alt="thermistortrigger reference — c8 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-fid1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/fid1-1.png" title="thermistortrigger reference — fid1 1" alt="thermistortrigger reference — fid1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-fid2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/fid2-1.png" title="thermistortrigger reference — fid2 1" alt="thermistortrigger reference — fid2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-fid3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/fid3-1.png" title="thermistortrigger reference — fid3 1" alt="thermistortrigger reference — fid3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-fid4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/fid4-1.png" title="thermistortrigger reference — fid4 1" alt="thermistortrigger reference — fid4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-h1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/h1-1.png" title="thermistortrigger reference — h1 1" alt="thermistortrigger reference — h1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-h2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/h2-1.png" title="thermistortrigger reference — h2 1" alt="thermistortrigger reference — h2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-h3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/h3-1.png" title="thermistortrigger reference — h3 1" alt="thermistortrigger reference — h3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-h4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/h4-1.png" title="thermistortrigger reference — h4 1" alt="thermistortrigger reference — h4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j1-1.png" title="thermistortrigger reference — j1 1" alt="thermistortrigger reference — j1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j2-1.png" title="thermistortrigger reference — j2 1" alt="thermistortrigger reference — j2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j3-1.png" title="thermistortrigger reference — j3 1" alt="thermistortrigger reference — j3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j4-1.png" title="thermistortrigger reference — j4 1" alt="thermistortrigger reference — j4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j5-1.png" title="thermistortrigger reference — j5 1" alt="thermistortrigger reference — j5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-j6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/j6-1.png" title="thermistortrigger reference — j6 1" alt="thermistortrigger reference — j6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-nt1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/nt1-1.png" title="thermistortrigger reference — nt1 1" alt="thermistortrigger reference — nt1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-nt2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/nt2-1.png" title="thermistortrigger reference — nt2 1" alt="thermistortrigger reference — nt2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r1-1.png" title="thermistortrigger reference — r1 1" alt="thermistortrigger reference — r1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r2-1.png" title="thermistortrigger reference — r2 1" alt="thermistortrigger reference — r2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r3-1.png" title="thermistortrigger reference — r3 1" alt="thermistortrigger reference — r3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r4-1.png" title="thermistortrigger reference — r4 1" alt="thermistortrigger reference — r4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r5-1.png" title="thermistortrigger reference — r5 1" alt="thermistortrigger reference — r5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r6-1.png" title="thermistortrigger reference — r6 1" alt="thermistortrigger reference — r6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r7-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r7-1.png" title="thermistortrigger reference — r7 1" alt="thermistortrigger reference — r7 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-r8-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/r8-1.png" title="thermistortrigger reference — r8 1" alt="thermistortrigger reference — r8 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-source-net-keys-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/source-net-keys-1.png" title="thermistortrigger reference — net keys 1" alt="thermistortrigger reference — net keys 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-source-net-keys-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/source-net-keys-2.png" title="thermistortrigger reference — net keys 2" alt="thermistortrigger reference — net keys 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-source-net-keys-3" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/source-net-keys-3.png" title="thermistortrigger reference — net keys 3" alt="thermistortrigger reference — net keys 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-source-net-keys-4" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/source-net-keys-4.png" title="thermistortrigger reference — net keys 4" alt="thermistortrigger reference — net keys 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-tp1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/tp1-1.png" title="thermistortrigger reference — tp1 1" alt="thermistortrigger reference — tp1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-tp2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/tp2-1.png" title="thermistortrigger reference — tp2 1" alt="thermistortrigger reference — tp2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-tp3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/tp3-1.png" title="thermistortrigger reference — tp3 1" alt="thermistortrigger reference — tp3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u1-1.png" title="thermistortrigger reference — u1 1" alt="thermistortrigger reference — u1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u1-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u1-2.png" title="thermistortrigger reference — u1 2" alt="thermistortrigger reference — u1 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u1-3" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u1-3.png" title="thermistortrigger reference — u1 3" alt="thermistortrigger reference — u1 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u2-1.png" title="thermistortrigger reference — u2 1" alt="thermistortrigger reference — u2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u2-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u2-2.png" title="thermistortrigger reference — u2 2" alt="thermistortrigger reference — u2 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u3-1.png" title="thermistortrigger reference — u3 1" alt="thermistortrigger reference — u3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-u3-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/u3-2.png" title="thermistortrigger reference — u3 2" alt="thermistortrigger reference — u3 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

<details markdown="1">
<summary>Individual contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c1-0.png" title="thermistortrigger reference — contact c1 0" alt="thermistortrigger reference — contact c1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c1-1.png" title="thermistortrigger reference — contact c1 1" alt="thermistortrigger reference — contact c1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c2-0.png" title="thermistortrigger reference — contact c2 0" alt="thermistortrigger reference — contact c2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c2-1.png" title="thermistortrigger reference — contact c2 1" alt="thermistortrigger reference — contact c2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c3-0.png" title="thermistortrigger reference — contact c3 0" alt="thermistortrigger reference — contact c3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c3-1.png" title="thermistortrigger reference — contact c3 1" alt="thermistortrigger reference — contact c3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c4-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c4-0.png" title="thermistortrigger reference — contact c4 0" alt="thermistortrigger reference — contact c4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c4-1.png" title="thermistortrigger reference — contact c4 1" alt="thermistortrigger reference — contact c4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c5-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c5-0.png" title="thermistortrigger reference — contact c5 0" alt="thermistortrigger reference — contact c5 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c5-1.png" title="thermistortrigger reference — contact c5 1" alt="thermistortrigger reference — contact c5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c6-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c6-0.png" title="thermistortrigger reference — contact c6 0" alt="thermistortrigger reference — contact c6 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c6-1.png" title="thermistortrigger reference — contact c6 1" alt="thermistortrigger reference — contact c6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c7-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c7-0.png" title="thermistortrigger reference — contact c7 0" alt="thermistortrigger reference — contact c7 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c7-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c7-1.png" title="thermistortrigger reference — contact c7 1" alt="thermistortrigger reference — contact c7 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c8-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c8-0.png" title="thermistortrigger reference — contact c8 0" alt="thermistortrigger reference — contact c8 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-c8-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-c8-1.png" title="thermistortrigger reference — contact c8 1" alt="thermistortrigger reference — contact c8 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-fid1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-fid1-0.png" title="thermistortrigger reference — contact fid1 0" alt="thermistortrigger reference — contact fid1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-fid2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-fid2-0.png" title="thermistortrigger reference — contact fid2 0" alt="thermistortrigger reference — contact fid2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-fid3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-fid3-0.png" title="thermistortrigger reference — contact fid3 0" alt="thermistortrigger reference — contact fid3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-fid4-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-fid4-0.png" title="thermistortrigger reference — contact fid4 0" alt="thermistortrigger reference — contact fid4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-h1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-h1-0.png" title="thermistortrigger reference — contact h1 0" alt="thermistortrigger reference — contact h1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-h2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-h2-0.png" title="thermistortrigger reference — contact h2 0" alt="thermistortrigger reference — contact h2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-h3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-h3-0.png" title="thermistortrigger reference — contact h3 0" alt="thermistortrigger reference — contact h3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-h4-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-h4-0.png" title="thermistortrigger reference — contact h4 0" alt="thermistortrigger reference — contact h4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j1-0.png" title="thermistortrigger reference — contact j1 0" alt="thermistortrigger reference — contact j1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j1-1.png" title="thermistortrigger reference — contact j1 1" alt="thermistortrigger reference — contact j1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j2-0.png" title="thermistortrigger reference — contact j2 0" alt="thermistortrigger reference — contact j2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j2-1.png" title="thermistortrigger reference — contact j2 1" alt="thermistortrigger reference — contact j2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j3-0.png" title="thermistortrigger reference — contact j3 0" alt="thermistortrigger reference — contact j3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j3-1.png" title="thermistortrigger reference — contact j3 1" alt="thermistortrigger reference — contact j3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j4-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j4-0.png" title="thermistortrigger reference — contact j4 0" alt="thermistortrigger reference — contact j4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j4-1.png" title="thermistortrigger reference — contact j4 1" alt="thermistortrigger reference — contact j4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j5-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j5-0.png" title="thermistortrigger reference — contact j5 0" alt="thermistortrigger reference — contact j5 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j5-1.png" title="thermistortrigger reference — contact j5 1" alt="thermistortrigger reference — contact j5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j5-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j5-2.png" title="thermistortrigger reference — contact j5 2" alt="thermistortrigger reference — contact j5 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j6-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j6-0.png" title="thermistortrigger reference — contact j6 0" alt="thermistortrigger reference — contact j6 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j6-1.png" title="thermistortrigger reference — contact j6 1" alt="thermistortrigger reference — contact j6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-j6-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-j6-2.png" title="thermistortrigger reference — contact j6 2" alt="thermistortrigger reference — contact j6 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-nt1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-nt1-0.png" title="thermistortrigger reference — contact nt1 0" alt="thermistortrigger reference — contact nt1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-nt1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-nt1-1.png" title="thermistortrigger reference — contact nt1 1" alt="thermistortrigger reference — contact nt1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-nt2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-nt2-0.png" title="thermistortrigger reference — contact nt2 0" alt="thermistortrigger reference — contact nt2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-nt2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-nt2-1.png" title="thermistortrigger reference — contact nt2 1" alt="thermistortrigger reference — contact nt2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r1-0.png" title="thermistortrigger reference — contact r1 0" alt="thermistortrigger reference — contact r1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r1-1.png" title="thermistortrigger reference — contact r1 1" alt="thermistortrigger reference — contact r1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r2-0.png" title="thermistortrigger reference — contact r2 0" alt="thermistortrigger reference — contact r2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r2-1.png" title="thermistortrigger reference — contact r2 1" alt="thermistortrigger reference — contact r2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r3-0.png" title="thermistortrigger reference — contact r3 0" alt="thermistortrigger reference — contact r3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r3-1.png" title="thermistortrigger reference — contact r3 1" alt="thermistortrigger reference — contact r3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r4-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r4-0.png" title="thermistortrigger reference — contact r4 0" alt="thermistortrigger reference — contact r4 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r4-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r4-1.png" title="thermistortrigger reference — contact r4 1" alt="thermistortrigger reference — contact r4 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r4-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r4-2.png" title="thermistortrigger reference — contact r4 2" alt="thermistortrigger reference — contact r4 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r5-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r5-0.png" title="thermistortrigger reference — contact r5 0" alt="thermistortrigger reference — contact r5 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r5-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r5-1.png" title="thermistortrigger reference — contact r5 1" alt="thermistortrigger reference — contact r5 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r6-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r6-0.png" title="thermistortrigger reference — contact r6 0" alt="thermistortrigger reference — contact r6 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r6-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r6-1.png" title="thermistortrigger reference — contact r6 1" alt="thermistortrigger reference — contact r6 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r6-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r6-2.png" title="thermistortrigger reference — contact r6 2" alt="thermistortrigger reference — contact r6 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r7-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r7-0.png" title="thermistortrigger reference — contact r7 0" alt="thermistortrigger reference — contact r7 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r7-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r7-1.png" title="thermistortrigger reference — contact r7 1" alt="thermistortrigger reference — contact r7 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r8-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r8-0.png" title="thermistortrigger reference — contact r8 0" alt="thermistortrigger reference — contact r8 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-r8-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-r8-1.png" title="thermistortrigger reference — contact r8 1" alt="thermistortrigger reference — contact r8 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-tp1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-tp1-0.png" title="thermistortrigger reference — contact tp1 0" alt="thermistortrigger reference — contact tp1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-tp2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-tp2-0.png" title="thermistortrigger reference — contact tp2 0" alt="thermistortrigger reference — contact tp2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-tp3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-tp3-0.png" title="thermistortrigger reference — contact tp3 0" alt="thermistortrigger reference — contact tp3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-0.png" title="thermistortrigger reference — contact u1 0" alt="thermistortrigger reference — contact u1 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-1.png" title="thermistortrigger reference — contact u1 1" alt="thermistortrigger reference — contact u1 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-10" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-10.png" title="thermistortrigger reference — contact u1 10" alt="thermistortrigger reference — contact u1 10" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-11" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-11.png" title="thermistortrigger reference — contact u1 11" alt="thermistortrigger reference — contact u1 11" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-12" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-12.png" title="thermistortrigger reference — contact u1 12" alt="thermistortrigger reference — contact u1 12" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-13" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-13.png" title="thermistortrigger reference — contact u1 13" alt="thermistortrigger reference — contact u1 13" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-2.png" title="thermistortrigger reference — contact u1 2" alt="thermistortrigger reference — contact u1 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-3" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-3.png" title="thermistortrigger reference — contact u1 3" alt="thermistortrigger reference — contact u1 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-4" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-4.png" title="thermistortrigger reference — contact u1 4" alt="thermistortrigger reference — contact u1 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-5" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-5.png" title="thermistortrigger reference — contact u1 5" alt="thermistortrigger reference — contact u1 5" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-6" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-6.png" title="thermistortrigger reference — contact u1 6" alt="thermistortrigger reference — contact u1 6" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-7" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-7.png" title="thermistortrigger reference — contact u1 7" alt="thermistortrigger reference — contact u1 7" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-8" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-8.png" title="thermistortrigger reference — contact u1 8" alt="thermistortrigger reference — contact u1 8" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u1-9" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u1-9.png" title="thermistortrigger reference — contact u1 9" alt="thermistortrigger reference — contact u1 9" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-0.png" title="thermistortrigger reference — contact u2 0" alt="thermistortrigger reference — contact u2 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-1.png" title="thermistortrigger reference — contact u2 1" alt="thermistortrigger reference — contact u2 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-2.png" title="thermistortrigger reference — contact u2 2" alt="thermistortrigger reference — contact u2 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-3" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-3.png" title="thermistortrigger reference — contact u2 3" alt="thermistortrigger reference — contact u2 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-4" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-4.png" title="thermistortrigger reference — contact u2 4" alt="thermistortrigger reference — contact u2 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u2-5" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u2-5.png" title="thermistortrigger reference — contact u2 5" alt="thermistortrigger reference — contact u2 5" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-0" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-0.png" title="thermistortrigger reference — contact u3 0" alt="thermistortrigger reference — contact u3 0" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-1" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-1.png" title="thermistortrigger reference — contact u3 1" alt="thermistortrigger reference — contact u3 1" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-2" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-2.png" title="thermistortrigger reference — contact u3 2" alt="thermistortrigger reference — contact u3 2" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-3" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-3.png" title="thermistortrigger reference — contact u3 3" alt="thermistortrigger reference — contact u3 3" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-4" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-4.png" title="thermistortrigger reference — contact u3 4" alt="thermistortrigger reference — contact u3 4" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-source-derived-contact-u3-5" src="/images/extensions/historical-thermistortrigger/guides/source-derived-annotated-amended/contact-u3-5.png" title="thermistortrigger reference — contact u3 5" alt="thermistortrigger reference — contact u3 5" caption="Component-side contact reference. It is not a cable mating view; check ratings and orientation before powering." width=420 %}

</details>

<details markdown="1">
<summary>Functional references</summary>

### Board functions and contact positions

Start with the sensor, threshold, output and supply interfaces. The callouts distinguish buffered analogue signals, threshold controls and digital outputs; expand the component details for filtering, reference links and mounting points. Check threshold calibration and Prime electrical compatibility. These are not connector or cable mating views.

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u1-functions-02" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u1-functions-02.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u1-functions-03" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u1-functions-03.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j4-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j4-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-tp3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/tp3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j5-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j5-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-tp2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/tp2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-tp1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/tp1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-j6-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/j6-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u3-functions-02" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u3-functions-02.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u2-functions-01.png" title="thermistortrigger — Underside projected from front; not mirrored rear view" alt="thermistortrigger — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-u2-functions-02" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/u2-functions-02.png" title="thermistortrigger — Underside projected from front; not mirrored rear view" alt="thermistortrigger — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

<details>
<summary>Circuit components and mounting details</summary>

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r6-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r6-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c4-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c4-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r5-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r5-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r8-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r8-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r7-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r7-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c6-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c6-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-h2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/h2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-nt2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/nt2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-h3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/h3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c8-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c8-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-h1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/h1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c7-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c7-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-h4-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/h4-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r3-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-nt1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/nt1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-fid2-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/fid2-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-fid1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/fid1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r4-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r4-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-c5-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/c5-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-r1-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/r1-functions-01.png" title="thermistortrigger — Component side; back parts excluded" alt="thermistortrigger — Component side; back parts excluded — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-fid4-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/fid4-functions-01.png" title="thermistortrigger — Underside projected from front; not mirrored rear view" alt="thermistortrigger — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-function-fid3-functions-01" src="/images/extensions/historical-thermistortrigger/guides/functional-reference/fid3-functions-01.png" title="thermistortrigger — Underside projected from front; not mirrored rear view" alt="thermistortrigger — Underside projected from front; not mirrored rear view — function callouts and contact positions" caption="Functional reference. Contact markers show pad positions, not a cable mating face." width=420 %}

</details>

### Contact reference

These locators show the pad positions and board outline, without component artwork. Use the focused sheets together.

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-overview" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-overview.png" title="Legacy thermistor trigger" alt="Legacy thermistor trigger — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j1-1-2" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j1-1-2.png" title="J1 · Sensor channel1" alt="J1 · Sensor channel1 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j2-1-2" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j2-1-2.png" title="J2 · Sensor channel2" alt="J2 · Sensor channel2 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j3-1-2" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j3-1-2.png" title="J3 · Analogue channel1" alt="J3 · Analogue channel1 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j4-1-2" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j4-1-2.png" title="J4 · Analogue channel2" alt="J4 · Analogue channel2 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j5-1-3" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j5-1-3.png" title="J5 · Trigger channel1" alt="J5 · Trigger channel1 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-j6-1-3" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-j6-1-3.png" title="J6 · Trigger channel2" alt="J6 · Trigger channel2 — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-sensors" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-sensors.png" title="Sensor excitation / filters" alt="Sensor excitation / filters — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-trim1" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-trim1.png" title="Channel1 trim" alt="Channel1 trim — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-trim2" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-trim2.png" title="Channel2 trim" alt="Channel2 trim — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-amplifier" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-amplifier.png" title="LMV324 signal paths" alt="LMV324 signal paths — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-reference" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-reference.png" title="Reference and grounds" alt="Reference and grounds — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-protection" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-protection.png" title="Sensor-line protection" alt="Sensor-line protection — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-mounts" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-mounts.png" title="Mechanical mounting" alt="Mechanical mounting — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

{% include _includes/extension-instruction-diagram.html id="historical-thermistortrigger-reader-compact-fiducials" src="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/reader-compact-fiducials.png" title="Assembly fiducials" alt="Assembly fiducials — contact locator" caption="Pads and board outline. Use all companion sheets and check host wiring and fit." width=420 %}

[Download the board source, upstream licence and drawing notice](/images/extensions/historical-thermistortrigger/guides/native-contact-reference/native-source-and-notices.zip). Retain the included source licence and notices with derivatives.

The following table lists the PCB's named pads and their nets. It does not prove copper continuity.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| PCB reference | Value / control | Contact → net |
|---|---|---|
| U1 | LMV324 | 1 → Net-(J6-Pad3); 2 → Net-(C5-Pad1); 3 → A2_out; 4 → +5V; 5 → A1_out; 6 → Net-(C4-Pad1); 7 → Net-(J5-Pad3); 8 → Net-(R7-Pad1); 9 → Net-(R7-Pad1); 10 → Net-(C2-Pad1); 11 → GND; 12 → Net-(C3-Pad1); 13 → Net-(R8-Pad1); 14 → Net-(R8-Pad1) |
| R6 | 100k | 1 → Net-(R5-Pad2); 2 → Net-(C5-Pad1); 3 → AGND |
| J4 | Conn_01x02_Male | 1 → A2_out; 2 → AGND |
| J2 | Conn_01x02_Male | 1 → Net-(C3-Pad1); 2 → AGND |
| NT2 | NetTie_2 | 1 → +3.3V; 2 → Net-(NT2-Pad2) |
| TP3 | TestPoint | 1 → Net-(C5-Pad1) |
| J1 | Conn_01x02_Male | 1 → Net-(C2-Pad1); 2 → AGND |
| J5 | Conn_01x03_Male | 1 → GND; 2 → +5V; 3 → Net-(J5-Pad3) |
| NT1 | NetTie_2 | 1 → GND; 2 → AGND |
| TP2 | TestPoint | 1 → Net-(C4-Pad1) |
| R4 | 100k | 1 → AGND; 2 → Net-(C4-Pad1); 3 → Net-(R3-Pad2) |
| J3 | Conn_01x02_Male | 1 → A1_out; 2 → AGND |
| TP1 | TestPoint | 1 → AGND |
| J6 | Conn_01x03_Male | 1 → GND; 2 → +5V; 3 → Net-(J6-Pad3) |
| U3 | MAX6070BAUT33+T | 1 → Net-(C6-Pad1); 2 → GND; 3 → +5V; 4 → +5V; 5 → Net-(NT2-Pad2); 6 → +3.3V |
| U2 | TPD4E1U06DCKR | 1 → Net-(C3-Pad1); 2 → AGND; 3 → A2_out; 4 → A1_out; 5 → unconnected-(U2-Pad5); 6 → Net-(C2-Pad1) |

</div>

</details>

</details>

</details>

## Practical use with Smoothieboard V2 Prime

A practical example is a thermistor feeding both Smoothie temperature measurement through its buffered analog output and an independent high-side shutoff through its trigger. Before connecting it, derive the thermistor divider equation, pullup values, buffer output range, threshold calibration and open/short-probe behavior. A powered buffered analog signal is not automatically compatible with the Prime thermistor input’s existing pullup or ADC range. Do not connect the raw thermistor to two divider networks.

## Firmware and setup

### Comparator observation and temperature measurement
The board's amplifier/reference/comparator is not a bare resistor-divider thermistor. The SmoothieV2 TemperatureControl module recognizes thermistor and max31855; an invented `sensor=thermistortrigger` falls through to dummy TempSensor. Ordinary thermistor beta/resistor settings do not implement this buffered/reference transfer. SmoothieV2 has no converter for this board.

Two applications must stay separate. For numeric temperature, identify the ADC output's gain/reference transfer and rail/input range, trace an actual Prime ADC contact, then implement/calibrate the matching converter with open/short/out-of-range behavior. For a binary comparator observation, first check its output voltage, bias and actual terminal, then route the suitable signal to Prime GF/J37.3 PB1 and use:

```ini
[endstops]
thermal_comparator_observation.enable = true
thermal_comparator_observation.pin = PB1-
thermal_comparator_observation.axis = X
thermal_comparator_observation.homing_direction = none
thermal_comparator_observation.limit_enable = false
```

An existing valid X actuator and exclusive pins are required. `M119` reports the sampled logical state. The trailing minus disables internal pulls without inversion; supply a suitable external bias. No homing, limit or software-halt action is configured. Record both stable stimulus states and the disconnected/unpowered state with all machine motion disabled. This observation does not determine a safe fault polarity or provide debouncing/edge timing.

The comparator's two measured states do not become a temperature or independent shutdown. Threshold, hysteresis, loss-state and defined halt/reset action remain separate application policy.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

## Original files and attribution

Existing simple PT100, FSR and endstop boards do not implement this dual thermistor buffer/setpoint circuit. The author explicitly names Flambegate and Flambehub as separate companion devices.

- [README.md](https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/README.md) — original source.
- [ThermistorComparator.kicad_pcb](https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_pcb) — original source.
- [ThermistorComparator.kicad_sch](https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_sch) — original source.

The repository metadata identifies GPL-3.0; preserve and inspect the matching license and source notices before redistribution.

[All extension boards](/extension-boards)
